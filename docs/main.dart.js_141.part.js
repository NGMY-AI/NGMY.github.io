((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tG(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fUF(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jn(d){var w
if(d===0)return $.CK()
if(d===1)return $.a2c()
if(d===2)return $.hoL()
if(Math.abs(d)<4294967296)return C.b99(A.o.N(d))
w=C.hJp(d)
return w},
b99(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tG(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tG(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tG(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajs(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tG(v,w)
return new C.nP(v===0?!1:s,w,v)},
hJp(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CK()
w=$.hoK()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l4(A.aG.gaM(w))
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
fUG(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hbB(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fE(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hbw(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fUG(d,e,s,g)
w=e+s+1
C.hbB(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hJs(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fE(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fE(u,r)}w&2&&B.aj(g)
g[n]=o},
cE_(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hJq(d,e,f,g,h){var w,v,u
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
hbC(d,e,f,g,h,i){var w,v,u,t,s,r
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
hJr(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e7((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cE0:function cE0(){},
cE1:function cE1(){},
cE2:function cE2(d,e){this.a=d
this.b=e},
cE3:function cE3(d){this.a=d},
aQE:function aQE(d,e){this.a=d
this.b=e},
h1v(d,e,f){var w=new C.Ro(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Ro:function Ro(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3o:function a3o(d,e){this.a=d
this.b=e},
bGW:function bGW(d){this.a=d
this.c=this.b=0},
hrY(){return new C.bFi()},
bFi:function bFi(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwa:function cwa(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hJ7(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcV4(d)))
v=f*2+2
u=C.h9d(C.h9f(),64)
t=new C.cg2(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cg3(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cIw(w,0,s,0))},
cw8:function cw8(d,e){this.c=d
this.d=e},
aws:function aws(d,e){this.a=d
this.b=e},
cwb:function cwb(d,e,f,g){var _=this
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
cw9:function cw9(){this.a=$},
hb0(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hrH(d,e){var w
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
h_e(d,e){e&=31
return(d&$.q1[e])<<e>>>0},
nn(d,e){e&=31
return(d>>>e|C.h_e(d,32-e))>>>0},
h9e(d){var w,v=new C.asa()
if(B.iG(d))v.aJj(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h9f(){var w=C.h9e(0),v=new Uint8Array(4),u=x.S
u=new C.cg4(w,v,A.DQ,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.ly(0)
return u},
h9d(d,e){var w=new C.cg0(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cg_:function cg_(){},
cg3:function cg3(d,e,f){this.a=d
this.b=e
this.c=f},
cfY:function cfY(){},
as9:function as9(d){this.a=d},
cg2:function cg2(d){this.a=$
this.b=d
this.c=$},
cfZ:function cfZ(){},
cfX:function cfX(){},
asa:function asa(){this.b=this.a=$},
cg1:function cg1(){},
cg4:function cg4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cg0:function cg0(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cfW:function cfW(){},
cfV:function cfV(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bN6:function bN6(){},
bN7:function bN7(d){this.a=d},
hMm(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9p:function b9p(){},
cq1:function cq1(){},
bO_:function bO_(d,e){this.a=d
this.b=!1
this.c=e},
bO0:function bO0(){},
hVe(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
av6(d){var w=0,v=B.j(x.H),u
var $async$av6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eUq?2:4
break
case 2:w=5
return B.b(A.k4.fW("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$av6)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k4.fW("SystemChrome.setEnabledSystemUIOverlays",C.hVe(null),u),$async$av6)
case 6:case 3:return B.h(null,v)}})
return B.i($async$av6,v)},
av9:function av9(d,e){this.a=d
this.b=e},
a8_:function a8_(d){this.a=d},
fQC(d,e){return new C.aV6(e,d,null)},
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
hXQ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fqB(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fqB:function fqB(d,e,f,g,h,i){var _=this
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
t=B.cD(t,new C.bYE(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bYF())
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
bYG(d){return C.hxo(d)},
hxo(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agu("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hJ),$async$bYG)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vw(B.a2(q,x.N,x.z))
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
return B.i($async$bYG,v)},
an1(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an0(),$async$an1)
case 3:r=f
if(r==null){u=!1
w=1
break}J.no(r,new C.bYH(d))
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
bYE:function bYE(){},
bYF:function bYF(){},
bYH:function bYH(d){this.a=d},
i6N(d,e,f){return B.bR(A.K,null,new C.fGy(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fGy:function fGy(d,e,f){this.a=d
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
f4B:function f4B(d,e){this.a=d
this.b=e},
f4F:function f4F(d){this.a=d},
f4G:function f4G(d){this.a=d},
f4H:function f4H(d,e,f){this.a=d
this.b=e
this.c=f},
f4C:function f4C(d){this.a=d},
f4D:function f4D(d){this.a=d},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4w:function f4w(d){this.a=d},
f4u:function f4u(d){this.a=d},
f4v:function f4v(d){this.a=d},
f4x:function f4x(d){this.a=d},
f4y:function f4y(d){this.a=d},
f4L:function f4L(d,e){this.a=d
this.b=e},
f4K:function f4K(d,e){this.a=d
this.b=e},
f4A:function f4A(d,e,f){this.a=d
this.b=e
this.c=f},
f4z:function f4z(d,e,f){this.a=d
this.b=e
this.c=f},
f4I:function f4I(d,e){this.a=d
this.b=e},
f4J:function f4J(d,e){this.a=d
this.b=e},
f4O:function f4O(d){this.a=d},
f4P:function f4P(d,e){this.a=d
this.b=e},
f4N:function f4N(d,e){this.a=d
this.b=e},
f4M:function f4M(){},
he_(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cD(v,new C.fbR(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a1<J.E>")
v=B.B(new B.a1(v,new C.fbS(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1p(d){return C.hZ5(d)},
hZ5(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1p=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.ftd(n)
t=4
j=m
i=C
w=7
return B.b(B.a1Z("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1p)
case 7:j.$1(i.he_(f))
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
m.$1(C.he_(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a1<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fc_(d),$async$a1p)
case 13:p=j.B(new i.a1(h,new g.ftb(f),o),o.k("J.E"))
A.d.b0(p,new C.ftc())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1p,v)},
ah3(d,e){return C.i6s(d,e)},
i6s(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah3=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fG2(),x.P)
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
fc_(d){return C.hNM(d)},
hNM(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fc_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fc_)
case 7:r=f
q=r.t4("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kC(q,B.U(q).c)
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
return B.i($async$fc_,v)},
afU(d,e){return C.hXI(d,e)},
hXI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
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
q=B.B(q,B.a3(q).k("co.E"))
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
J.no(n,new C.fqh(e))
w=9
return B.b(C.ah3(d,n),$async$afU)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afU,v)},
i6S(d,e){return B.a5(d,!1).c8(B.ea(new C.fGU(e),!0,null,x.H))},
hJu(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFm())},
of:function of(d,e,f){this.a=d
this.b=e
this.c=f},
fbR:function fbR(){},
fbS:function fbS(){},
ftd:function ftd(d){this.a=d},
ftb:function ftb(d){this.a=d},
ftc:function ftc(){},
fG2:function fG2(){},
fqh:function fqh(d){this.a=d},
fGU:function fGU(d){this.a=d},
Ya:function Ya(d,e){this.c=d
this.a=e},
ax_:function ax_(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFm:function cFm(){},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFr:function cFr(d){this.a=d},
cFs:function cFs(d){this.a=d},
cFq:function cFq(){},
cFt:function cFt(d,e){this.a=d
this.b=e},
cFp:function cFp(d){this.a=d},
cFu:function cFu(){},
cFn:function cFn(d,e){this.a=d
this.b=e},
cFv:function cFv(){},
cFi:function cFi(d){this.a=d},
cFg:function cFg(d){this.a=d},
cFh:function cFh(d){this.a=d},
cFj:function cFj(d,e){this.a=d
this.b=e},
cFf:function cFf(d){this.a=d},
cFe:function cFe(d){this.a=d},
cFc:function cFc(d,e){this.a=d
this.b=e},
cFd:function cFd(d){this.a=d},
cFl:function cFl(){},
cFk:function cFk(d){this.a=d},
cFb:function cFb(d,e){this.a=d
this.b=e},
cFa:function cFa(d,e){this.a=d
this.b=e},
cF9:function cF9(d,e){this.a=d
this.b=e},
cFw:function cFw(d){this.a=d},
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
cED:function cED(d){this.a=d},
cEC:function cEC(d){this.a=d},
cEF:function cEF(d,e,f){this.a=d
this.b=e
this.c=f},
cEN:function cEN(){},
cEO:function cEO(d){this.a=d},
cEG:function cEG(d,e,f){this.a=d
this.b=e
this.c=f},
cEE:function cEE(d,e){this.a=d
this.b=e},
cEI:function cEI(d,e){this.a=d
this.b=e},
cEJ:function cEJ(d,e){this.a=d
this.b=e},
cEK:function cEK(d,e){this.a=d
this.b=e},
cEH:function cEH(d){this.a=d},
cEM:function cEM(d){this.a=d},
cEL:function cEL(d,e){this.a=d
this.b=e},
cET:function cET(d){this.a=d},
cEP:function cEP(d,e){this.a=d
this.b=e},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
cER:function cER(d,e){this.a=d
this.b=e},
cES:function cES(d,e){this.a=d
this.b=e},
awY:function awY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i0q(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bA(new C.fxK(),x.H).eU(new C.fxL())}}else if(s)C.hfs()}catch(t){}},
hfs(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eU(new C.fgf())}catch(u){}},
i0t(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fxK:function fxK(){},
fxL:function fxL(){},
fgf:function fgf(){},
hk2(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ee(v,w,"").split(":"))},
hk_(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kY)return null
return A.a.b1(w,14)},
fYZ(d){var w
if(d.b!==D.kY)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b1(w,21)},
i0T(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hk3(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i0O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kV(0,f)
t=x.N
u=B.cD(u,new C.fyJ(),B.a3(u).k("J.E"),t)
s=B.B(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kV(0,f),u=new B.Jm(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.R5(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.R5(A.a.b1(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i0M(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.B(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fyI())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPE(w,u,s,0)}return w},
i0Q(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3o:$.hqL(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hk0(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcT(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hk2(q)===e)return q}return null},
i0R(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b1(v,u)
return A.d.gJ(D.Gq).a},
i0S(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adN(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adN(0,0,0)
v=C.fcT(b6,b0)
u=C.fcT(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i0Q(b2,C.i0O(C.hk0(b2),v.r))
if(s.a!==0){u.r=C.i0M(C.hk0(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hk2(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.e9(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcT(b6,n)
i=C.fcT(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gJ(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.fYZ(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hk_(a8)===a0||C.fYZ(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QB(a1,new C.fyP(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iZ
$.iZ=a9+1
A.d.K(a1,new C.eJ(""+1000*a6+"_"+a9,D.kY,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adN(k,t,e)},
i0N(d){var w=C.i0R(d)
if(d.w==="hati_kuhowa")return C.hjn("",w)
return C.hjm("",w)},
fyJ:function fyJ(){},
fyI:function fyI(){},
fyP:function fyP(d){this.a=d},
hfb(){var w=new B.S(Date.now(),0,!1),v=new C.ffi()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
fZ6(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fzH(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kY&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hkg(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fzH(d)
w=B.bi(u)
if(w==null)return!C.fzH(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bQ(18e9))},
i1y(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hBp(d){return A.a.i(d).toLowerCase()},
apb(d){return C.hBr(d)},
hBr(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apb=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$apb)
case 7:r=f
p=r.t4("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i55(),B.U(o).k("K<1,n>")).c_(0,new C.c8d())
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
return B.i($async$apb,v)},
apa(d,e){return C.hBq(d,e)},
hBq(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apb(d),$async$apa)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apa)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qb(r)),$async$apa)
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
return B.i($async$apa,v)},
apc(d,e){return C.hBs(d,e)},
hBs(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apb(d),$async$apc)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apc)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qb(r)),$async$apc)
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
return B.i($async$apc,v)},
UP(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UP=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fS6&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UP)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jx(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vw(B.a2(f.a(n.b),e,a0)))}$.a6P=o}}t=2
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
return B.b(B.c3(),$async$UP)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tT("civic_hati_kiapo_uongozi",null,A.ee),$async$UP)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jx(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vw(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6P.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6P.n(0,i.a,i.b)}w=20
return B.b(C.apd(),$async$UP)
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
case 16:case 9:$.fS6=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UP,v)},
apd(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apd=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apd)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6P,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apd)
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
return B.i($async$apd,v)},
aZx(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UP(!1),$async$aZx)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6P.h(0,t)
r=s==null?null:s.hC()
if(r==null){u=null
w=1
break}u=C.bBp(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZx,v)},
a6Q(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6Q=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6P.n(0,d,o)
$.fS6=!0
w=3
return B.b(C.apd(),$async$a6Q)
case 3:w=4
return B.b(B.c3(),$async$a6Q)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6P,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.nm("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6Q)
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
return B.i($async$a6Q,v)},
ape(d){var w=0,v=B.j(x.T),u,t,s
var $async$ape=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hX().a57(A.eG),$async$ape)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$ape)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZw(t,d),$async$ape)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ape,v)},
aZw(d,e){return C.hBt(d,e)},
hBt(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
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
p=n.i9("media")
w=8
return B.b(p.wQ(q,new Uint8Array(B.ce(d)),D.bxX),$async$aZw)
case 8:n=p.Cq(q)
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
fey(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
fW9(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
fe6(d,e,f,g){return C.fey(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fWa(d,e,f,g,h,i,j,k){var w=C.cC()
return C.ep(A.qg,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hfa(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ee(v,w,"").split(":"))},
bBp(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gJ(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hfa(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kY&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fYD(u)
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
a1=A.d.gJ(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hfa(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kY&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fxI(a2))}else A.d.bn(a1.z,new C.fxJ())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fzH(a0))a0.ax=a6.f.a6().ac()
return a0},
fYD(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fAu(D.a4p),l=C.cC(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lr,1,0,0)],k),i=B.a([],k)
i.push(C.Ke("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Ke("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fW9("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hfb()))
i.push(C.fe6(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Ke("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Ke("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fey(0,0.002,D.fr,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fWa("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fWa("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fWa("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fey(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Ke("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lr,0.77,0.115,0.492))
i.push(C.Ke("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Ke("Jina:",A.bg,p,13,A.bl,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fW9("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fe6(0.195,0.7130000000000001,0.62,n))
i.push(C.Ke("Sahihi:",A.bg,p,13,A.bl,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.fe6(0.21500000000000002,0.795,0.38,n))
i.push(C.Ke("Tarehe:",A.bg,p,13,A.bl,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fW9("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hfb()))
i.push(C.fe6(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fey(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.Ke("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.ro(4294967035,t,0,0,j,l,D.q5,"","",u,D.dd)
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.S(D.ePf)
w=1
break}w=3
return B.b(C.UP(!0),$async$ag4)
case 3:w=4
return B.b(C.aZx(p),$async$ag4)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hkg(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bc2,null,new C.fsz(p),f,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag4)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fsA(),f,null,!0,!0,x.y),$async$ag4)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fYD(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fYD(p))
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
ffi:function ffi(){},
c8d:function c8d(){},
fxI:function fxI(d){this.a=d},
fxJ:function fxJ(){},
fsz:function fsz(d){this.a=d},
fsx:function fsx(d){this.a=d},
fsy:function fsy(d){this.a=d},
fsA:function fsA(){},
fsv:function fsv(d){this.a=d},
fsw:function fsw(d){this.a=d},
apJ:function apJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD3:function aD3(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e7W:function e7W(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7V:function e7V(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
wo(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
heP(d,e,f){var w=4291404327
return B.a([C.q0(0,f,D.eK,w,2,"ring_l",f,d-f*0.42,e),C.q0(0,f,D.eK,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fdx(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q0(4294967288,f,D.eK,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q0(h,s,D.eK,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q0(h,f*0.46,D.eK,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q0(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
fdw(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byP(d,e,f,g){return C.q0(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
heO(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q0(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wo(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hk1(){var w=new B.S(Date.now(),0,!1),v=new C.fyO()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
heQ(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wo(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fdw("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byP(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wo("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,s,t,g-0.004),C.byP(t,g+0.044,s,w)],x.u)},
agw(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.da5,D.cg8,D.d30,D.d4P],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fVs(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fAu(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,1,0,0)],x.u)
A.d.v(v,C.hQb(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hQb(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wo("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.heP(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.heP(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fdx(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fdx(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wo("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q0(0,0.062,D.eK,b1,1.6,"crest_o",0.11,0.445,0.012),C.q0(0,0.046,D.eK,b1,1,"crest_i",0.084,0.458,0.02),C.wo("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q0(0,0.002,D.fr,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q0(b9,0.016,D.kZ,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q0(0,0.002,D.fr,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wo("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fdw("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hk1()),C.byP(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
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
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.heO(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wo(c9,A.bg,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fdw("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
d=B.a([new C.eJ(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eJ(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fr,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eJ(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dM,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.heO("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4e||w===D.a4g||w===D.a4d||w===D.a4f){w=t-0.008
A.d.v(c2,C.fdx(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fdx(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q0(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.q0(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q0(0,0.0022,D.fr,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wo("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wo("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.heQ("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.heQ("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q0(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wo("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wo("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fdw("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byP(0.215,p,0.3116,b5),C.wo("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,0.3161999999999999,0.5738,s-0.044),C.byP(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q0(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wo("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i0P(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fZg(d.d),p=new C.fyK(s),o=new C.fyL(s),n=d.z,m=n===D.a4e||n===D.a4g||n===D.a4d||n===D.a4f,l=n===D.aEp||n===D.a4h||n===D.aEq,k=B.bZ(0,B.fL(q,A.A,t,t,A.cl,A.bS,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4h?26:16
i.push(new C.fyN().$1$size(w))}if(n===D.aEr)i.push(D.ftU)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hB,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNs,p.$1$w(0.9),D.aNs,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b7A,t,n,w,t,t,A.n),t,t,t,t,A.ai9,t,t,t))
i.push(A.am)
i.push(new C.fyM(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LJ,new B.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bD(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.agK,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hjm(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agw(e,t)
if(r==null)r=A.d.gJ(D.Gq)
w=C.cC()
v=C.ro(r.e,t,0,0,C.fVs(r,0.165,y.O,D.d5o,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hjn(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agw(e,t)
if(r==null)r=A.d.gJ(D.Gq)
w=C.cC()
v=C.ro(r.e,t,0,0,C.fVs(r,0.165,y.f,D.d1b,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCM(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fKl(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCM,v)},
ag5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.B(new B.a1(i,new C.fsD(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsE(p),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Hati ya Kuhowa",D.Gq),$async$ag5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$ag5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hjm(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
ag6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.B(new B.a1(i,new C.fsH(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsI(p),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Hati ya Kuhoweya",D.Gq),$async$ag6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$ag6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hjn(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag6,v)},
ag7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ag7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a1<1>")
m=B.B(new B.a1(i,new C.fsL(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsM(m),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag7)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(m).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Malipo ya Awamu ya Mahari",D.Q7),$async$ag7)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$ag7)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agw(s,D.Q7)
if(q==null)q=A.d.gJ(D.Q7)
n=C.cC()
p=C.ro(q.e,null,0,0,C.fVs(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cXg,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q5,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Br(null,null,null,null,D.o7,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
xn:function xn(d,e){this.a=d
this.b=e},
jm:function jm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fyO:function fyO(){},
fyK:function fyK(d){this.a=d},
fyM:function fyM(d){this.a=d},
fyN:function fyN(){},
fyL:function fyL(d){this.a=d},
fKl:function fKl(d,e){this.a=d
this.b=e},
acR:function acR(d,e,f){this.c=d
this.d=e
this.a=f},
dXC:function dXC(d,e,f){this.a=d
this.b=e
this.c=f},
dXB:function dXB(d,e){this.a=d
this.b=e},
dXA:function dXA(d,e){this.a=d
this.b=e},
acf:function acf(d,e,f){this.c=d
this.d=e
this.a=f},
fsD:function fsD(){},
fsE:function fsE(d){this.a=d},
fsB:function fsB(d){this.a=d},
fsC:function fsC(d){this.a=d},
fsH:function fsH(){},
fsI:function fsI(d){this.a=d},
fsF:function fsF(d){this.a=d},
fsG:function fsG(d){this.a=d},
fsL:function fsL(){},
fsM:function fsM(d){this.a=d},
fsJ:function fsJ(d){this.a=d},
fsK:function fsK(d){this.a=d},
Kh(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cr(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
hfv(d,e,f){return C.Cr(0,0.002,D.fr,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
byZ(d,e,f,g,h){return B.a([C.Cr(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.Kh(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fWe(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cr(0,0.002,D.fr,g,1,"orn_l_"+t,u,d,v),C.Cr(h,0.016,D.kZ,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cr(0,0.002,D.fr,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0M(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kh(d,A.bg,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hfv(u,g+0.018,t)],x.u)},
hfw(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cr(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cr(w,0.024,D.kZ,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cr(w,0.024,D.kZ,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kh(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byY(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kh("Sahihi:",A.bg,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,v,w,f-0.006),C.hfv(w,f+0.016,v)],x.u)},
fZh(d){var w,v
for(w=0;w<19;++w){v=D.Qk[w]
if(v.a===d)return v}return null},
i35(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agw(A.a.b1(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agw(A.a.b1(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b1(k,18)
w=C.agw(u,D.Q7)
v=w==null?l:w.d
if(v==null){w=C.agw(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fZh(A.a.b1(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hgk.a9(0)
$.hgx.a9(0)
t=C.fAu(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h_l(d){var w=0,v=B.j(x.T),u
var $async$h_l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fLO(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_l,v)},
xq:function xq(d,e){this.a=d
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
fLO:function fLO(){},
acU:function acU(d){this.a=d},
eda:function eda(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
ed8:function ed8(d,e){this.a=d
this.b=e},
aeB:function aeB(d,e,f){this.c=d
this.d=e
this.a=f},
fZg(d){return $.hgx.cg(0,d,new C.fAw(d))},
fAu(d){return $.hgk.cg(0,d,new C.fAv(d))},
fy(d){return B.fPG(d>>>16&255,d>>>8&255,d&255,255)},
hTd(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hhC(4294570461,4293910718,4284234270,u)
case 1:return C.hhC(4294635750,4293975240,t,4292912216)
case 2:w=C.fc7(s,4294505966,r)
C.byJ(w,14,16,p)
C.ks(w,8,9,464,836,u,1.2)
C.Cn(w,2,2,1,1,u,10)
C.Cn(w,478,2,-1,1,u,10)
C.Cn(w,2,852,1,-1,u,10)
C.Cn(w,478,852,-1,-1,u,10)
return w
case 3:return C.fc7(4294966515,4294373082,4289102906)
case 4:return C.hO0(C.fc7(4294376440,4293653998,4290287194))
case 5:w=C.fc7(4294965238,4294437098,4288444980)
C.byJ(w,14,16,4283043359)
C.ks(w,6,7,468,840,u,1)
C.ks(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,n,4294175448)
C.rJ(v,n)
C.ks(v,24,24,432,806,4286209070,1)
C.a0A(v,12,12,468,12,o,3,20)
C.a0A(v,12,842,468,842,o,3,20)
C.a0A(v,12,12,12,842,o,3,20)
C.a0A(v,468,12,468,842,o,3,20)
return v
case 7:return C.hM2(4294440434,4293518297,4280228630,r)
case 8:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,m,4293911504)
C.rJ(v,m)
C.ks(v,28,28,424,798,l,1)
C.fkU(v,28,28,l,k)
C.fkU(v,452,28,l,k)
C.fkU(v,28,826,l,k)
C.fkU(v,452,826,l,k)
return v
case 9:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,j,4294111986)
C.rJ(v,j)
C.ks(v,18,18,444,818,4292401368,0.7)
B.iI(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hPY(i,4294173372)
case 11:return C.hR2(4294439140,4293449662)
case 12:return C.hLV(h,4294239432)
case 13:return C.hQu(4294244340,4293193448)
case 14:return C.hUM(4294505710,4293780694)
case 15:return C.fb5(4294966259,4294439138,o,p,q)
case 16:return C.fb5(4294966776,4294178544,o,g,g)
case 17:return C.fb5(4294965493,4294504170,o,4286200650,q)
case 18:return C.fb5(4294966519,4294373862,o,p,p)
case 19:return C.hP5()
case 20:return C.hP6()
case 21:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,h,4293976768)
C.rJ(v,h)
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
case 22:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,s,4294438872)
C.rJ(v,s)
C.ks(v,14,16,452,822,o,2.2)
C.ks(v,22,24,436,806,o,1)
C.fXx(v,!1,!1,o,p,p,36,14,16)
C.kH(v,240,20,7,o,!0)
C.kH(v,240,834,7,o,!0)
C.kH(v,18,427,7,o,!0)
C.kH(v,462,427,7,o,!0)
return v
case 23:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,i,4293910712)
C.rJ(v,i)
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
case 24:v=B.hm(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yg(v,e,4294174404)
C.rJ(v,e)
C.byJ(v,14,16,p)
B.iI(v,!0,C.fy(u),3,476,3,8)
B.iI(v,!0,C.fy(u),3,476,845,850)
B.iI(v,!0,C.fy(u),3,8,3,850)
B.iI(v,!0,C.fy(u),471,476,3,850)
C.ks(v,9,10,462,834,t,1)
C.ks(v,14,16,452,822,u,1.8)
C.kH(v,240,8,4,u,!0)
C.kH(v,240,846,4,u,!0)
C.kH(v,8,427,4,u,!0)
C.kH(v,472,427,4,u,!0)
C.kH(v,8,8,3,t,!0)
C.kH(v,472,8,3,t,!0)
C.kH(v,8,846,3,t,!0)
C.kH(v,472,846,3,t,!0)
return v}},
yg(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kJ(d,!1,A.dc,new B.RI(s),r,A.cX,1,0,w-1,k,k);++k}},
rJ(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eL()
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
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gba(s))-2,0,255)
p=d.a
if(p!=null)p.jJ(u,t,v,r,q,255)}},
ks(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kJ(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kJ(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kJ(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kJ(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Cn(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e+g*j,f,f)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,1,w,e+g*t,v,v)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,1,w,w,v,f+h*t)},
hhC(d,e,f,g){var w=null,v=B.hm(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yg(v,d,e)
C.rJ(v,d)
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
fc7(d,e,f){var w=null,v=B.hm(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yg(v,d,e)
C.rJ(v,d)
C.ks(v,14,16,452,822,f,1.6)
C.ks(v,20,22,440,810,f,0.8)
return v},
byJ(d,e,f,g){var w,v=C.fy(g)
B.iI(d,!0,v,0,479,0,f-1)
w=854-f
B.iI(d,!0,v,0,479,w,853);--w
B.iI(d,!0,v,0,e-1,f,w)
B.iI(d,!0,v,480-e,479,f,w)},
hO0(d){var w,v,u=4291404327
C.byJ(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kH(d,w,8,3,u,!0)
C.kH(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kH(d,7,v,3,u,!0)
C.kH(d,473,v,3,u,!0)}return d},
fnT(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jc(e,f),new B.jc(e+g*n,f),new B.jc(e,f+h*n)],t)
B.a1m(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jc(s,u),new B.jc(e+g*v,u),new B.jc(s,f+h*v)],t)
B.a1m(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kH(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kH(d,e+g*t,f+h*3,4,k,!0)
C.kH(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kH(d,e+g*t,f,5,k,!0)
C.kH(d,e,f+h*t,5,k,!0)}},
fXx(d,e,f,g,h,i,j,k,l){var w,v
C.fnT(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fnT(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fnT(d,k,v,1,-1,e,f,g,h,i,j)
C.fnT(d,w,v,-1,-1,e,f,g,h,i,j)},
a0A(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l_(d,!0,A.dc,new B.qV(p),null,A.cX,j,r,q)}},
fn1(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kJ(d,!0,A.dc,new B.qV(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kJ(d,!0,A.dc,new B.qV(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hM2(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hm(o,o,A.c8,0,A.e0,854,o,0,3,o,A.c8,480,!1)
C.yg(n,d,e)
C.rJ(n,d)
C.ks(n,20,20,440,814,f,1.2)
C.fn1(n,0,0,1,1,g)
C.fn1(n,480,0,-1,1,g)
C.fn1(n,0,854,1,-1,g)
C.fn1(n,480,854,-1,-1,g)
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
B.kJ(n,!0,A.dc,new B.qV(p),o,A.cX,1.2,240,r,60,q)}return n},
fkU(d,e,f,g,h){var w
C.fqC(d,!0,C.fy(g),13,e,f)
C.fqC(d,!0,C.fy(g),9,e,f)
w=B.a([new B.jc(e,f-4),new B.jc(e+4,f),new B.jc(e,f+4),new B.jc(e-4,f)],x.J)
B.a1m(d,C.fy(h),w)},
kH(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jc(e,v),new B.jc(u,f),new B.jc(e,t),new B.jc(s,f)],x.J)
if(i){B.a1m(d,C.fy(h),r)
return}B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,e,u,v,f)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,u,e,f,t)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,e,s,t,f)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,s,e,f,v)},
fb4(d,e,f,g,h,i,j){var w,v=B.a([new B.jc(e,f),new B.jc(e+g*28,f),new B.jc(e,f+h*28)],x.J)
B.a1m(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kH(d,v,w,6,j,!0)
C.kH(d,v,w,3,i,!0)},
fb5(d,e,f,g,h){var w=null,v=B.hm(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yg(v,d,e)
C.rJ(v,d)
C.ks(v,18,18,444,818,f,2)
C.ks(v,26,26,428,802,f,0.9)
if(h!=null)B.iI(v,!0,C.fy(h),28,451,28,34)
C.fb4(v,18,18,1,1,g,f)
C.fb4(v,462,18,-1,1,g,f)
C.fb4(v,18,836,1,-1,g,f)
C.fb4(v,462,836,-1,-1,g,f)
return v},
hP5(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hm(v,v,A.c8,0,A.e0,854,v,0,3,v,A.c8,480,!1)
C.yg(r,u,4294240980)
C.rJ(r,u)
C.ks(r,10,12,460,830,t,3.2)
C.ks(r,18,20,444,814,s,1.2)
C.ks(r,24,26,432,802,t,1.8)
C.fXx(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kH(r,w,16,3,t,!0)
C.kH(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kH(r,16,w,3,t,!0)
C.kH(r,464,w,3,t,!0)}return r},
hP6(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hm(t,t,A.c8,0,A.e0,854,t,0,3,t,A.c8,480,!1)
C.yg(p,s,4294373080)
C.rJ(p,s)
C.ks(p,16,18,448,818,r,2.4)
C.ks(p,24,26,432,802,4286209044,1)
w=new C.fdo(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fXx(p,!1,!0,r,q,q,34,16,18)
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
B.kJ(d,!1,A.dc,new B.RI(i),null,A.cX,1,e,w,l,l)}},
hPX(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kJ(d,!1,A.dc,new B.qV(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kJ(d,!1,A.dc,new B.qV(r),null,A.cX,1,t,t,f,s);++q}},
hPY(d,e){var w,v,u=null,t=B.hm(u,u,A.c8,0,A.e0,854,u,0,3,u,A.c8,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hPX(t,v,w,30,D.cQa,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzp(t,44,44,392,766,d)
C.bAe(t,44,44,392,766,d,e)
C.rJ(t,d)
C.ks(t,44,44,392,766,4292128567,2.2)
C.ks(t,50,50,380,754,4279898632,0.8)
return t},
hR1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kH(d,e,f,7,h,!0)
C.kH(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.6,w,u,v,t)
B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kJ(d,!0,A.dc,new B.qV(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l_(d,!0,A.dc,C.fy(h),o,A.cX,2,e,f)}},
hR2(d,e){var w,v,u,t,s=null,r=B.hm(s,s,A.c8,0,A.e0,854,s,0,3,s,A.c8,480,!1)
B.iI(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hR1(r,u,v,w,4292391514)}C.bzp(r,46,46,388,762,d)
C.bAe(r,46,46,388,762,d,e)
C.rJ(r,d)
C.ks(r,46,46,388,762,4291404327,1.8)
return r},
hd2(d,e,f,g){C.fqC(d,!0,C.fy(g),16,e,f)
C.fqC(d,!0,C.fy(g),11,e,f)
C.kH(d,e,f,6,g,!0)
B.kJ(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kJ(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e,e,f-14,f+14)},
hLV(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hm(v,v,A.c8,0,A.e0,854,v,0,3,v,A.c8,480,!1)
B.iI(s,!0,C.fy(4280948752),0,479,0,853)
B.iI(s,!0,C.fy(u),0,479,0,78)
B.iI(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hd2(s,w,39,t)
C.hd2(s,w,815,t)}C.bzp(s,38,92,404,670,d)
C.bAe(s,38,92,404,670,d,e)
C.rJ(s,d)
C.ks(s,38,92,404,670,t,1.8)
C.ks(s,45,99,390,656,4287322667,0.8)
return s},
hQt(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jc(e,f),new B.jc(q-5,w),new B.jc(q,f-(18-Math.abs(r)*3)),new B.jc(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1m(d,new B.qV(o),p)}B.l_(d,!0,A.dc,C.fy(4292128567),null,A.cX,3,e,f)},
hQu(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hm(s,s,A.c8,0,A.e0,854,s,0,3,s,A.c8,480,!1)
C.yg(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kJ(q,!0,A.dc,new B.qV(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kJ(q,!0,A.dc,new B.qV(u),s,A.cX,1.1,v,v,0,853)}B.iI(q,!0,C.fy(r),0,479,0,70)
B.iI(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hQt(q,70+t*85,48,4292128567)
C.bzp(q,48,78,384,712,d)
C.bAe(q,48,78,384,712,d,e)
C.rJ(q,d)
C.ks(q,48,78,384,712,4291404327,1.6)
return q},
hUM(d,e){var w,v,u,t=null,s=4279970378,r=B.hm(t,t,A.c8,0,A.e0,854,t,0,3,t,A.c8,480,!1)
B.iI(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kH(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l_(r,!0,A.dc,new B.qV(u),t,A.cX,1,v,w)}C.bzp(r,40,40,400,774,d)
C.bAe(r,40,40,400,774,d,e)
C.rJ(r,d)
C.ks(r,40,40,400,774,4291058750,2)
C.ks(r,48,48,384,758,s,0.8)
return r},
kQ:function kQ(d,e){this.a=d
this.b=e},
fAw:function fAw(d){this.a=d},
fAv:function fAv(d){this.a=d},
fdo:function fdo(d){this.a=d},
fB9(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hQW(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fW7(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oA(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.ags(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
aeZ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aeZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vc(null,""),$async$aeZ)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n2(n)
if(e==null)s=A.hn
else{r=C.hQW(e)
s=B.a([new B.a_A(A.cS.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qK(t,d,s,E.EY),$async$aeZ)
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
bBT(d){return C.i2M(d)},
i2M(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aeZ(r,null),$async$bBT)
case 7:q=f
p=C.fW7(q)
if(p==null){u=d
w=1
break}o=d.aBL(p)
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
hgW(d){var w,v=F.fYz(d)
v=B.aK(v,"book","newspaper")
if(F.a1F(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fF4(d,e,f,g){return C.i4D(d,e,f,g)},
i4D(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fF4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fB9(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hkp()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aeZ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hgW(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fF4)
case 3:r=m.fW7(i)
if(r==null)throw B.V(y.S)
q=new C.zi(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBL(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1F(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1F(A.d.aI(t," "))==="sw"?C.bBT(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fF4,v)},
bBn(d,e,f,g,h){return C.i0o(d,e,f,g,h)},
i0o(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBn=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fL(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hkp()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aeZ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hgW(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBn)
case 3:p=j.fW7(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBL(B.a2(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1F(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBT(n),$async$bBn)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7t(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBn,v)},
a7t:function a7t(d,e,f){this.a=d
this.b=e
this.c=f},
i7q(d,e){return B.a5(d,!1).c8(B.ea(new C.fLZ(e),!0,null,x.H))},
fLZ:function fLZ(d){this.a=d},
Vk:function Vk(d,e){this.c=d
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
egs:function egs(d){this.a=d},
egr:function egr(){},
egt:function egt(d){this.a=d},
egq:function egq(d,e){this.a=d
this.b=e},
egu:function egu(){},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg0:function eg0(d,e){this.a=d
this.b=e},
egb:function egb(d){this.a=d},
egc:function egc(d,e){this.a=d
this.b=e},
egd:function egd(d){this.a=d},
eg6:function eg6(d,e){this.a=d
this.b=e},
eg7:function eg7(d,e){this.a=d
this.b=e},
eg8:function eg8(d,e){this.a=d
this.b=e},
eg9:function eg9(d){this.a=d},
ega:function ega(d){this.a=d},
eg5:function eg5(d,e){this.a=d
this.b=e},
eg2:function eg2(d){this.a=d},
eg3:function eg3(d){this.a=d},
egj:function egj(d){this.a=d},
egk:function egk(d){this.a=d},
egi:function egi(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egh:function egh(d,e){this.a=d
this.b=e},
egm:function egm(d){this.a=d},
egg:function egg(d){this.a=d},
egn:function egn(d){this.a=d},
egf:function egf(d){this.a=d},
ego:function ego(d,e){this.a=d
this.b=e},
ege:function ege(d,e){this.a=d
this.b=e},
egp:function egp(d){this.a=d},
eg1:function eg1(d,e){this.a=d
this.b=e},
fA5(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fA5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hex){w=1
break}r=new C.fA6()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fA5)
case 7:$.hex=!0
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
return B.i($async$fA5,v)},
bBK(d){return A.GL[B.mw(d)-1]+", "+A.oS[B.bH(d)-1]+" "+B.bQ(d)+", "+B.bA(d)},
hTS(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dea[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fYY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a1(v,new C.fyo(),B.U(v).k("a1<1>")))
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
continue}o=new C.fyq(j,h)
n=new C.fyp(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iT(o.$1(l)))
j.a+=l}return u},
fVR(d,e){var w=new C.fd_()
return A.d.cI(e,0,new C.fcY(w))>=A.d.cI(d,0,new C.fcZ(w))},
hbI(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
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
zi:function zi(d,e,f,g,h,i,j,k,l,m){var _=this
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
cbU:function cbU(d){this.a=d},
cbS:function cbS(){},
cbT:function cbT(){},
tb:function tb(d,e){this.a=d
this.b=e},
Be:function Be(d,e){this.a=d
this.b=e},
lc:function lc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fA6:function fA6(){},
fyo:function fyo(){},
fyq:function fyq(d,e){this.a=d
this.b=e},
fyp:function fyp(d,e,f){this.a=d
this.b=e
this.c=f},
fd_:function fd_(){},
fd0:function fd0(){},
fcY:function fcY(d){this.a=d},
fcZ:function fcZ(d){this.a=d},
b03:function b03(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cbV:function cbV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbW:function cbW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cbX:function cbX(d){this.a=d},
bbE:function bbE(d){this.a=d},
bbD:function bbD(d,e){this.b=d
this.a=e},
btf:function btf(d){this.a=d},
b88:function b88(d,e){this.b=d
this.a=e},
bqK:function bqK(d,e){this.b=d
this.a=e},
hmk(d,e){return B.a5(d,!1).c8(B.ea(new C.fM1(e,null),!0,null,x.E))},
fM1:function fM1(d,e){this.a=d
this.b=e},
Vn:function Vn(d,e,f){this.c=d
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
ehD:function ehD(){},
ehE:function ehE(d){this.a=d},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehx:function ehx(d){this.a=d},
ehy:function ehy(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d,e,f){this.a=d
this.b=e
this.c=f},
ehs:function ehs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehz:function ehz(d,e){this.a=d
this.b=e},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehA:function ehA(d){this.a=d},
eht:function eht(d,e){this.a=d
this.b=e},
ehB:function ehB(d,e){this.a=d
this.b=e},
bba:function bba(d,e,f){this.b=d
this.c=e
this.a=f},
i7w(d){return B.a5(d,!1).c8(B.ea(new C.fMh(),!0,null,x.I))},
bza(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fXf(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fMh:function fMh(){},
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
eRc:function eRc(d){this.a=d},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQC:function eQC(d){this.a=d},
ePO:function ePO(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePM:function ePM(d){this.a=d},
ePN:function ePN(d){this.a=d},
eQl:function eQl(d,e){this.a=d
this.b=e},
eQm:function eQm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQy:function eQy(d,e,f){this.a=d
this.b=e
this.c=f},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQB:function eQB(d,e,f){this.a=d
this.b=e
this.c=f},
eQA:function eQA(d,e){this.a=d
this.b=e},
ePE:function ePE(d){this.a=d},
ePF:function ePF(d){this.a=d},
ePG:function ePG(d){this.a=d},
ePD:function ePD(){},
ePH:function ePH(d,e){this.a=d
this.b=e},
ePC:function ePC(d,e){this.a=d
this.b=e},
ePJ:function ePJ(){},
ePI:function ePI(d,e){this.a=d
this.b=e},
ePB:function ePB(d,e){this.a=d
this.b=e},
ePy:function ePy(d,e){this.a=d
this.b=e},
ePK:function ePK(d){this.a=d},
ePA:function ePA(d,e){this.a=d
this.b=e},
ePL:function ePL(d){this.a=d},
ePz:function ePz(d,e){this.a=d
this.b=e},
eR1:function eR1(d,e){this.a=d
this.b=e},
eR8:function eR8(d){this.a=d},
eR9:function eR9(d,e){this.a=d
this.b=e},
eRa:function eRa(){},
eR2:function eR2(d,e){this.a=d
this.b=e},
eR0:function eR0(d,e){this.a=d
this.b=e},
eR3:function eR3(d,e){this.a=d
this.b=e},
eR_:function eR_(d,e){this.a=d
this.b=e},
eR4:function eR4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQZ:function eQZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eR5:function eR5(d){this.a=d},
eR6:function eR6(d,e){this.a=d
this.b=e},
eR7:function eR7(d){this.a=d},
eQY:function eQY(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQK:function eQK(d,e){this.a=d
this.b=e},
eQF:function eQF(d,e){this.a=d
this.b=e},
eQN:function eQN(d){this.a=d},
eQQ:function eQQ(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQS:function eQS(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQU:function eQU(d){this.a=d},
eQI:function eQI(d){this.a=d},
eQV:function eQV(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQW:function eQW(d,e){this.a=d
this.b=e},
eQG:function eQG(d,e){this.a=d
this.b=e},
eQX:function eQX(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQp:function eQp(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQn:function eQn(d,e){this.a=d
this.b=e},
eQr:function eQr(d){this.a=d},
eQh:function eQh(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQe:function eQe(d,e){this.a=d
this.b=e},
eQd:function eQd(d,e){this.a=d
this.b=e},
ePW:function ePW(d){this.a=d},
ePX:function ePX(d){this.a=d},
ePY:function ePY(d){this.a=d},
ePZ:function ePZ(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
eQ2:function eQ2(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
ePh:function ePh(d){this.a=d},
ePi:function ePi(d){this.a=d},
ePj:function ePj(d){this.a=d},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePg:function ePg(d){this.a=d},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePr:function ePr(d){this.a=d},
ePs:function ePs(d){this.a=d},
ePt:function ePt(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePq:function ePq(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePp:function ePp(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePo:function ePo(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQc:function eQc(d){this.a=d},
eQ8:function eQ8(d){this.a=d},
eQ7:function eQ7(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQ6:function eQ6(d,e){this.a=d
this.b=e},
eQa:function eQa(d,e){this.a=d
this.b=e},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQb:function eQb(d){this.a=d},
eQv:function eQv(d){this.a=d},
eQu:function eQu(d,e,f){this.a=d
this.b=e
this.c=f},
eQt:function eQt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQE:function eQE(d,e){this.a=d
this.b=e},
eQD:function eQD(d,e){this.a=d
this.b=e},
ePV:function ePV(d){this.a=d},
eRb:function eRb(d){this.a=d},
beJ:function beJ(d,e){this.b=d
this.a=e},
i2X(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i2Y(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kV(0,d),m=B.B(n,B.a3(n).k("J.E"))
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
bzL(){var w=$.byT,v=$.Q2
$.Q2=v+1
return w+"_"+v},
i8(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.bzL(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f_,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i8(D.eK,d-f/2,e-w/32,f,w/16,g,0)},
hNB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byT
p=$.Q2
$.Q2=p+1
w.push(new C.eJ(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byT
p=$.Q2
$.Q2=p+1
w.push(new C.eJ(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nS(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i8(D.be,0.08,0.08,0.5,0.003,v,0),C.i8(D.be,0.58,0.08,0.004,0.06,v,0),C.i8(D.be,0.58,0.14,0.34,0.003,v,0),C.i8(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i8(D.be,0.08,0.8,0.004,0.14,t,0),C.i8(D.be,0.08,0.94,0.6,0.003,t,0),C.nS(0.58,0.08,0.05,e),C.nS(0.92,0.22,0.05,e),C.nS(0.08,0.8,0.05,f),C.nS(0.68,0.94,0.05,f),C.nS(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i8(D.kZ,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i8(D.kZ,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i8(D.kZ,0.7,0.8,0.22,0.12,w|1140850688,0),C.i8(D.kZ,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
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
return B.a([C.i8(D.jG,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i8(D.jG,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i8(D.jG,0.15,0.86,0.6,0.14,1712265002,0),C.nS(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cRz[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byT
l=$.Q2
$.Q2=l+1
w.push(new C.eJ(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eK,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i8(D.jG,0.35,-0.1,0.3,0.62,w|855638016,0),C.i8(D.jG,0.05,-0.1,0.3,0.55,v,-0.5),C.i8(D.jG,0.65,-0.1,0.3,0.55,v,0.5),C.nS(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i8(D.be,0.06,0.04,0.88,0.002,e,0),C.i8(D.be,0.06,0.96,0.88,0.002,e,0),C.i8(D.be,0.06,0.04,0.004,0.92,e,0),C.i8(D.be,0.936,0.04,0.004,0.92,e,0),C.i8(D.be,0.09,0.07,0.82,0.001,w,0),C.i8(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i8(D.jH,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i8(D.jH,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i8(D.jH,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i8(D.be,0,0,0.3,0.09,w|1140850688,0),C.i8(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i8(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i8(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i8(D.eK,0.62,0.02,0.5,0.16,v,0.6),C.i8(D.eK,0.78,0.12,0.4,0.12,u,0.9),C.i8(D.eK,-0.12,0.8,0.5,0.16,u,-0.6),C.i8(D.eK,-0.05,0.9,0.4,0.12,v,-0.9),C.nS(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i8(D.be,0.09,0.12,0.16,0.006,e,0),C.i8(D.be,0.05,0.03,0.9,0.001,w,0),C.i8(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i_s(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byT=j
$.Q2=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fvN()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.bzL(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cm,D.lr,1,0,0))
if(a9)A.d.v(q,C.hNB(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i2X(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fvM(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.bzL(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cm,D.lr,a3,a4,a5))
return C.ro(s,r,0,0,q,j+"_slide",D.q5,"","","",D.dd)},
rn:function rn(d,e){this.a=d
this.b=e},
m2:function m2(d,e,f,g,h,i,j,k,l,m){var _=this
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
fvN:function fvN(){},
fvM:function fvM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hDD(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdg(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zk(u,t,s,B.t(w==null?"":w))},
fDs(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fDs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.heU){w=1
break}$.heU=!0
t=4
w=7
return B.b(B.aA(),$async$fDs)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jx(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hDD(m)
if(l!=null)J.ch(n,l)}$.Co.cg(0,B.t(o.a),new C.fDt(n))}C.fWW()
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
return B.i($async$fDs,v)},
fWW(){var w,v=new B.S(Date.now(),0,!1).bQ(-12e8)
for(w=new B.dt($.Co,$.Co.r,$.Co.e);w.C();)J.no(w.d,new C.fk6(v))
$.Co.bn($.Co,new C.fk7())},
aNo(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNo=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNo)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Co,B.a3($.Co).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
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
i3y(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fWW()
w=$.Co.cg(0,d,new C.fDv())
v=Date.now()
u=B.B(e,B.a3(e).k("co.E"))
J.pr(w,0,new C.zk(new B.S(v,0,!1),f,u,g))
C.aNo()},
i3v(d){var w,v=$.Co.h(0,d)
if(v==null||J.cm(v))return
w=J.cE(v)
w.cC(v,0)
if(w.gam(v))$.Co.W(0,d)
C.aNo()},
zk:function zk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdg:function cdg(){},
fDt:function fDt(d){this.a=d},
fk6:function fk6(d){this.a=d},
fk7:function fk7(){},
fDv:function fDv(){},
i3A(d){return A.d.dL(D.vT,new C.fDy(d),new C.fDz())},
hDB(d){var w
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
hDA(d){var w
switch(d.a){case 0:w=D.aky
break
case 1:w=A.yb
break
case 2:w=A.alC
break
case 3:w=I.akb
break
case 4:w=A.al2
break
case 5:w=A.lP
break
default:w=null}return w},
hQz(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Py[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Py[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hDC(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i3w(d,e,f,g,h){var w=new B.K(D.vT,new C.fDr(),x.eC).aI(0,", "),v=""+d,u=C.hkh(h),t=F.fxb(h),s=C.hgv(g),r=e.t(0,D.HH)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HI)?'- New slides get an "icon3d" from: '+A.d.aI(D.Py,", ")+".\n":"",p=e.t(0,D.Cy)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i3x(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vT,new C.fDu(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.HH)){p.a=s
w=s}else w=""
if(e.t(0,D.HI))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Py,", ")+".\n")
if(e.t(0,D.Cy))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hkh(d)
v=F.fxb(d)
u=C.hgv(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agI(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CN(a3,"{"),a5=J.fPg(a3,"}")
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
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fBr(),m).c_(0,new C.fBs())
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
f=C.hQz(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7B(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b4(D.vT,new C.fBt(r))?r:a7
o=C.fjl(J.q(w,"logo_frame"),D.BX)
n=C.fjl(J.q(w,"logo_ring"),D.BS)
m=C.fjl(J.q(w,"photo_frame"),D.BX)
l=C.fjl(J.q(w,"photo_ring"),D.BS)
return new C.aqy(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1a(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hjp(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cz),f7=f6?C.hKg():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eL()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fu(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lP,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i3A(f9.b)
r=g2.t(0,D.a4y)||f6
q=g2.t(0,D.HH)
p=g2.t(0,D.Rt)
o=new C.fvR()
n=B.a([],x.g)
m=new C.fvU(o,w,r)
l=new C.fvT(o,r)
k=new C.fvS(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b4(u,new C.fvQ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cT7[b8]
c0=D.cS1[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eKo.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eK,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eK,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eK,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mD,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q6,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Rq
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eK,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kZ,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Cw
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eK,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eK,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mD,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q6,500,f2,f0))
d3=D.mC
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eK,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uc:D.cm
c1.push(new C.eJ(b4,D.a4w,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mC
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eK,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eK,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mD,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q6,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Rq
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eK,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eK,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HF,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mC}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hLU(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dgr[A.o.F(b1,6)]:s
n.push(new C.lD(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Br(e4,e4,e4,e4,D.Cv,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fye(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fye=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cy)
n=e.t(0,D.HI)
if(!o&&!n){u=D.a3v
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fyh(o,s[r],n,$.hPk,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fye)
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
return B.i($async$fye,v)},
fxe(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fxe=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i3x(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMK(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fxe)
case 3:u=s.aN4(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxe,v)},
bBo(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBo=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.e9(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.i3y(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agI(i,"colorful")
t=C.i3w(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMK(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hn),$async$bBo)
case 3:u=o.aN4(m,f,h,g,D.dUC,j)
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
for(;;)switch(w){case 0:w=e.t(0,D.Cy)||e.t(0,D.HI)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Cy)}w=6
return B.b(C.fye(d,t),$async$aN4)
case 6:s=k
w=4
break
case 5:s=D.a3v
case 4:t=d.c
w=A.d.b4(t,new C.fcV())?7:9
break
case 7:r=$.hl9
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
l=C.hjp(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hDC(new C.aqy(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.fcW(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jN<co.E,n>")
t=B.B(new B.jN(e,new C.fcX(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rt)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN4,v)},
fZG(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2l[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
i7B(d){return B.bR(A.K,null,new C.fMt(),d,!0,!0,!0,null,!1,!1,x.I)},
hKT(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcw().aJ(d)},
i7A(d,e,f){return B.bR(A.K,null,new C.fMs(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fZH(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fZI(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fjl(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fjm(w))?w:""},
hgv(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hl7(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agI(a1==null?"":a1,a0),a3=C.agI(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a1<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r9(new B.a1(r,new C.fDA(t[p]),q))
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
g=B.B(new B.a1(k,new C.fDB(),v),r)
A.d.b0(g,new C.fDC())
if(g.length===0)continue
f=new C.fDD(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i3R(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFv
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWx
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWy
return null},
hg6(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bt(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i3B(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
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
if(C.hg6(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hg6(n,i,v,u))if(n.w>10){f=h+1
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
i3z(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agI(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2l[r]
if(q.b===s)w.K(0,q)}}v=C.fZH(e)
u=C.fZI(e)
p=C.hjp(n,D.a3v,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fDw(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jN<co.E,n>")
o=B.B(new B.jN(w,new C.fDx(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rt)
return p},
i7n(d,e,f){return B.bR(A.K,null,new C.fLG(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hKg(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eL()
s.dB(t)
w=D.cxf[s.aC(10)]
v=new C.ecy(s)
u=x.N
return new C.ecx(w,s.aC(4),J.fo(v.$1$2(D.cXt,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.dc9,2+s.aC(2),u),v.$1$2(D.d5y,2,u),v.$1$2(D.df_,4,x.fP),t)},
hLU(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eL()
a1.dB(a5.w+a3*13)
w=new C.f9o(a4)
v=new C.f9q(a4,d)
u=new C.f9p(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eK,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1a(a0,52),"lux_spot",a5.wp(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wp(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aE9(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wp(0,f),D.dd,150,C.a1a(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wp(0,f),D.dd,120,C.a1a(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1a(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wp(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a1a(a0,208),"lux_rule",a5.aE9(0,"shimmer",r),D.ub,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a1a(a0,144),"lux_rule2","",D.HF,220))}l=!A.d.b4(a2,new C.f9n())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wp(0,"crest"),350))
else{o=a1.ha()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wp(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1a(r,242)
j=a5.wp(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q6,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eK,t-0.007,0.9495,0.014,0.025,C.a1a(r,242),"lux_g2",a5.wp(0,"orbit"),D.q6,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fS(a0,16),8,"0").toUpperCase()))}if((A.d.gJ(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wp(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDy:function fDy(d){this.a=d},
fDz:function fDz(){},
vQ:function vQ(d,e){this.a=d
this.b=e},
a7B:function a7B(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqy:function aqy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fDr:function fDr(){},
fDu:function fDu(){},
fBr:function fBr(){},
fBs:function fBs(){},
fBt:function fBt(d){this.a=d},
fvR:function fvR(){},
fvU:function fvU(d,e,f){this.a=d
this.b=e
this.c=f},
fvT:function fvT(d,e){this.a=d
this.b=e},
fvS:function fvS(d,e){this.a=d
this.b=e},
fvQ:function fvQ(d){this.a=d},
fyh:function fyh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyf:function fyf(d){this.a=d},
fyg:function fyg(d){this.a=d},
fcV:function fcV(){},
fcW:function fcW(){},
fcX:function fcX(){},
fMt:function fMt(){},
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
eXo:function eXo(d,e,f){this.a=d
this.b=e
this.c=f},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXm:function eXm(d,e){this.a=d
this.b=e},
eXn:function eXn(d,e){this.a=d
this.b=e},
eXl:function eXl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eXg:function eXg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eXk:function eXk(d,e){this.a=d
this.b=e},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXh:function eXh(d){this.a=d},
eXi:function eXi(d,e){this.a=d
this.b=e},
eX4:function eX4(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX7:function eX7(d){this.a=d},
eX8:function eX8(d){this.a=d},
eX9:function eX9(d){this.a=d},
eXa:function eXa(d){this.a=d},
eX6:function eX6(d,e){this.a=d
this.b=e},
eXb:function eXb(d,e){this.a=d
this.b=e},
eXC:function eXC(d){this.a=d},
eXD:function eXD(d){this.a=d},
eXB:function eXB(d){this.a=d},
eXE:function eXE(d){this.a=d},
eXA:function eXA(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXH:function eXH(d){this.a=d},
eXy:function eXy(d,e){this.a=d
this.b=e},
eXI:function eXI(d){this.a=d},
eXx:function eXx(d){this.a=d},
eXJ:function eXJ(d){this.a=d},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXK:function eXK(d){this.a=d},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXL:function eXL(d){this.a=d},
eXu:function eXu(d){this.a=d},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXt:function eXt(d,e){this.a=d
this.b=e},
eXN:function eXN(d){this.a=d},
eXF:function eXF(d){this.a=d},
eXs:function eXs(d,e){this.a=d
this.b=e},
eXc:function eXc(d,e,f){this.a=d
this.b=e
this.c=f},
eXd:function eXd(d,e,f){this.a=d
this.b=e
this.c=f},
eXr:function eXr(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
fMs:function fMs(d,e){this.a=d
this.b=e},
a_X:function a_X(d,e,f){this.c=d
this.d=e
this.a=f},
aGH:function aGH(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eWY:function eWY(d){this.a=d},
eWZ:function eWZ(d){this.a=d},
eX_:function eX_(d,e){this.a=d
this.b=e},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d){this.a=d},
eWX:function eWX(d,e){this.a=d
this.b=e},
eX2:function eX2(d,e){this.a=d
this.b=e},
eX3:function eX3(d,e){this.a=d
this.b=e},
fjm:function fjm(d){this.a=d},
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
ecA:function ecA(d){this.a=d},
ecz:function ecz(){},
bgW:function bgW(d,e){this.b=d
this.a=e},
fDA:function fDA(d){this.a=d},
fDB:function fDB(){},
fDC:function fDC(){},
fDD:function fDD(d){this.a=d},
ar7:function ar7(d,e){this.a=d
this.b=e},
fDw:function fDw(){},
fDx:function fDx(){},
fLG:function fLG(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
aAI:function aAI(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dhZ:function dhZ(d){this.a=d},
di_:function di_(d){this.a=d},
di0:function di0(d,e){this.a=d
this.b=e},
di3:function di3(d){this.a=d},
di4:function di4(d,e){this.a=d
this.b=e},
di2:function di2(d,e){this.a=d
this.b=e},
di5:function di5(d){this.a=d},
di1:function di1(d,e){this.a=d
this.b=e},
brQ:function brQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ecx:function ecx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ecy:function ecy(d){this.a=d},
f9o:function f9o(d){this.a=d},
f9q:function f9q(d,e){this.a=d
this.b=e},
f9p:function f9p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9n:function f9n(){},
aLg:function aLg(){},
fYw(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vI(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0n:function b0n(d,e,f){this.c=d
this.d=e
this.a=f},
bl1:function bl1(d,e){this.c=d
this.a=e},
i_V(d){return A.d.dL(D.GI,new C.fwY(d),new C.fwZ())},
i_W(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b1(t,6)
if(w.length===0)return null
v=new B.a1(D.GI,new C.fx_(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gJ(0)
return new C.jF("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l9:function l9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fwY:function fwY(d){this.a=d},
fwZ:function fwZ(){},
fx_:function fx_(d){this.a=d},
mR(d,e,f,g,h){return new C.En(f,g,d)},
hN7(d){var w=d.z,v=B.U(w).k("a1<1>")
w=B.B(new B.a1(w,new C.fbo(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.K6
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f_,j,k,l)},
hjc(d,e){var w
C.hN7(d)
w=A.d.dL($.bDp(),new C.fuO(e),new C.fuP())
$.K6=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.K6=""}d.z=B.bn(d.z,!0,x.F)},
En:function En(d,e,f){this.a=d
this.b=e
this.e=f},
fbo:function fbo(){},
fD2:function fD2(){},
fD3:function fD3(){},
fD4:function fD4(){},
fDf:function fDf(){},
fDk:function fDk(){},
fDl:function fDl(){},
fDm:function fDm(){},
fDn:function fDn(){},
fDo:function fDo(){},
fDp:function fDp(){},
fDq:function fDq(){},
fD5:function fD5(){},
fD6:function fD6(){},
fD7:function fD7(){},
fD8:function fD8(){},
fD9:function fD9(){},
fDa:function fDa(){},
fDb:function fDb(){},
fDc:function fDc(){},
fDd:function fDd(){},
fDe:function fDe(){},
fDg:function fDg(){},
fDh:function fDh(){},
fDi:function fDi(){},
fDj:function fDj(){},
fuO:function fuO(d){this.a=d},
fuP:function fuP(){},
iS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CF(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f_,j,k,l)},
bC7(){var w=new B.S(Date.now(),0,!1)
return A.ie[B.bH(w)-1]+" "+B.bQ(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzv(d){return new B.iN((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hSb(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amk(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hSf(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fiV(),x.dv).aI(0,"\n")},
hSe(d){switch(d.a){case 2:return A.np
case 1:case 5:return A.eUV
default:return A.SU}},
hS8(d){switch(d.a){case 2:return A.uN
case 1:case 5:return A.UK
default:return A.a9n}},
hSc(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzv(u),q=(s&255)===0?v:C.bzv(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nq(q,p,A.kF)
w=new B.ps(t,t,t,t)}switch(d.ax.a){case 1:return B.ls(v,v,v,new B.kz(r,w,v,A.aaB,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wS(B.ls(v,v,q,v,p+0.4,v,v,v))
default:return B.ls(v,v,v,new B.kz(r,w,B.vk(4),A.hE,v),v,v,v,v)}},
hSa(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hS8(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hSf(d)
t=C.bzv(d.Q)
s=d.x.a>=700?A.ej:A.vo
r=d.y===A.cF?A.xP:A.aj2
q=d.z
p=new B.CQ(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aOr:A.aOq,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hSe(d.as)))
break
case 1:case 4:o=C.hSb(d.at)
n=i===D.lr&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wS(B.fa(w,l,l,l,B.h2(l,A.rt,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hw(o,n?A.aax:A.V7,l,l)
break
case 3:w=new B.nq(A.HY,1,A.kF)
u=B.vk(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ls(A.uN,B.fa(t,l,l,l,B.h2(l,D.e7O,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.ej,l,!0,l,l,l,l),A.np),l,new B.kz(E.aGO,new B.ps(w,w,w,w),u,A.hE,l),l,l,l,l)
break
case 2:p=C.hSc(d,e)
break
case 5:p=C.hS9(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.haU(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arT(m/255,p)}if(w)return new F.vW(k,l,j,l,new B.RP(new B.ky(g,g,f,1/0),p))
if(i===D.kY){i=new B.nq(A.HY,1,A.kF)
i=B.ls(A.uN,p,l,new B.kz(A.oZ,new B.ps(i,i,i,i),B.vk(4),A.hE,l),l,l,D.bus,l)}else i=p
return new F.vW(k,l,j,l,new B.fO(g,f,i))},
hSd(d,e,f,g){var w,v=null,u=C.bzv(d.e),t=d.f
t=B.a([F.h9w(t!=null?B.ls(v,v,v,new B.kz(v,v,v,A.hE,new B.aVV(E.UL,A.a9h,B.a([u,C.bzv(t)],x.cR),v)),v,v,v,v):B.ls(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fiU(f,g),B.U(w).k("K<1,ff>")))
return F.cqu(t)},
fZK(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fZK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3Q(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.W5(A.w4,A.HV,D.bvA,null,null,null,!1,null)
o=new B.Bx(o,new C.fDJ(607,787,p,d))
o.Mi(n,null)
r.push(o)}u=n.k5(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZK,v)},
hS9(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fYw(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj3()
if(h==null)h=A.awq
j=B.to(4279308564)
w=B.vk(18)
v=new B.nq(B.to(4287531653),3,A.kF)
u=i.length===0?"My links":i
u=B.a([B.wS(B.fa(u,m,m,m,B.h2(m,A.oZ,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wS(B.fa(A.a.i(l.c),m,m,m,D.f13,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.to(4280690220)
o=new B.a8U(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.boM,new C.aw4(new C.ahN(q),B.ls(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f3n,A.np),m,new B.kz(p,m,new B.aid(o,o,o,o),A.hE,m),m,m,D.buT,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wS(B.fa(k,m,m,m,D.f2C,m))
u.push(new C.aw4(C.hrN(k),t))}return B.ls(m,B.yE(u,A.Lq,A.lp),m,new B.kz(j,new B.ps(v,v,v,v),w,A.hE,m),m,m,D.bpC,m)},
fiV:function fiV(){},
fiU:function fiU(d,e){this.a=d
this.b=e},
fDJ:function fDJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agv(d){var w,v
for(w=0;w<32;++w){v=D.Gz[w]
if(v.a===d)return v}return null},
hdx(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b1(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hmg(d,e){return B.a5(d,!1).c8(B.ea(new C.fK5(e),!0,null,x.fB))},
hmf(d,e){return B.bR(A.K,null,new C.fK4(e),d,!0,!0,!0,null,!1,!1,x.fB)},
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
dTm:function dTm(d){this.a=d},
dTl:function dTl(d,e,f){this.a=d
this.b=e
this.c=f},
dTk:function dTk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqp:function bqp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWb:function eWb(d,e){this.a=d
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
c7P:function c7P(){},
c7Q:function c7Q(d){this.a=d},
c7R:function c7R(d,e,f){this.a=d
this.b=e
this.c=f},
c7S:function c7S(d,e,f){this.a=d
this.b=e
this.c=f},
fK5:function fK5(d){this.a=d},
YS:function YS(d,e){this.c=d
this.a=e},
az5:function az5(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7b:function d7b(d,e,f){this.a=d
this.b=e
this.c=f},
d7g:function d7g(d){this.a=d},
d7h:function d7h(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7i:function d7i(d){this.a=d},
d7e:function d7e(d,e){this.a=d
this.b=e},
d7j:function d7j(d){this.a=d},
d7d:function d7d(d){this.a=d},
d7k:function d7k(d){this.a=d},
d7c:function d7c(d,e){this.a=d
this.b=e},
d7l:function d7l(d,e){this.a=d
this.b=e},
fK4:function fK4(d){this.a=d},
fK3:function fK3(d){this.a=d},
fK2:function fK2(d,e,f){this.a=d
this.b=e
this.c=f},
fK1:function fK1(d,e){this.a=d
this.b=e},
aKK:function aKK(){},
i7z(d){return B.bR(A.K,null,new C.fMr(),d,!0,!0,!0,null,!1,!1,x.N)},
fMr:function fMr(){},
Zc:function Zc(d){this.a=d},
bfi:function bfi(d){this.d=d
this.c=this.a=null},
ddY:function ddY(d){this.a=d},
ddZ:function ddZ(d,e){this.a=d
this.b=e},
de_:function de_(d){this.a=d},
hOD(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xe},
i1Q(d){var w,v=A.d.gJ(d.split("@"))
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
i1P(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gJ(d.split("@")),p=C.hOD(d)
switch(q){case"shimmer":return B.nL(A.a9J,g,new C.fAp(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beG(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dc(C.fQC(g,B.a4G(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.ben(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eG(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
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
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ed(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fAp:function fAp(d,e){this.a=d
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
d6T:function d6T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xp:function xp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fAs(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kY},
i1V(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fAt())
s=A.d.gJ(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gJ(B.aPE(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i1U(d,e){var w,v,u,t,s,r=d.db
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
for(;;)switch(w){case 0:f=B.U(a4).k("a1<1>")
e=B.B(new B.a1(a4,new C.fsP(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fsQ(e),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag8)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gJ(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h_l(d),$async$ag8)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KS(d,"Search states\u2026","",A.k_,"Choose state"),$async$ag8)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fZh(s)
if(p==null)p=A.d.gJ(D.Qk)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fAu(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cr(i,0.016,D.kZ,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cr(0,0.058,D.eK,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cr(0,0.058,D.eK,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kh("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kh("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fWe(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byZ("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0M("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0M("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0M("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0M("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byZ("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cr(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fWe(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byZ("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hfw("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hfw("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
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
h=B.B(C.fWe(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kh("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kh("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Br(null,null,null,null,D.o7,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.ro(m,null,0,0,j,n,D.q5,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
fAt:function fAt(){},
fsP:function fsP(){},
fsQ:function fsQ(d){this.a=d},
fsN:function fsN(d){this.a=d},
fsO:function fsO(d){this.a=d},
hRE(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hRD(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mI
case"lineThrough":return A.zr
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eJ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hhA(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Q6[w]
if(v.b===u)return v}return D.dd},
hO1(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cOW[w]
if(v.b===u)return v}return D.cQ},
hUq(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dcL[w]
if(v.b===u)return v}return D.be},
ro(d,e,f,g,h,i,j,k,l,m,n){return new C.lD(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h8g(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hQ1(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hhA(d.h(0,"transition"))
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
n=B.cD(n,new C.cdd(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a3(n).k("J.E"))}return C.ro(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hQ1(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoi[w]
if(v.b===u)return v}return D.mC},
Br(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i_(p,t,a1,h,i,w,a0==null?B.a([C.ro(4294967295,null,0,0,null,C.cC(),D.q5,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vw(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hM9(a6.h(0,"aspectRatio"))
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
else{f=J.b6(f,new C.cd0(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cd1(),x.N)
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
g=B.cD(g,new C.cd2(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a3(g).k("J.E"))}return C.Br(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.ro(4294967295,a3,0,0,a3,C.cC(),D.q5,"","","",D.dd)],x.g):g,v,p,o,s)},
ku(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hM9(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.ddB[w]
if(v.b===u)return v}return D.Cv},
cC(){var w=Date.now(),v=$.iZ
$.iZ=v+1
return""+1000*w+"_"+v},
cdu(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Cw){d.e=f.f.l()
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
A.d.K(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cm,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f_,0.42,0.52,0.22)
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
hDM(d){return A.d.dL(D.a2_,new C.cdv(d),new C.cdw())},
hDJ(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ch(v,C.Vw(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fSJ(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdq(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdp())
return u},
h8j(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdl()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqz(d){return C.hDH(d)},
hDH(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdo()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1Z(m),$async$aqz)
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
return B.b(B.aA(),$async$aqz)
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
case 11:o=l.$1($.h8i.h(0,m))
n=C.fSJ(C.fSJ(j,r),o)
if(n.length===0){u=C.h8j(C.h8j(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqz,v)},
cdk(d){return C.hDG(d)},
hDG(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdk)
case 7:r=f
q=r.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kC(q,B.U(q).c)
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
return B.i($async$cdk,v)},
b0t(d,e){return C.hDI(d,e)},
hDI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0t=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0t)
case 6:s=g
q=s.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
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
Vx(d,e){return C.hDK(d,e)},
hDK(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vx=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h8h.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqz(a3),$async$Vx)
case 5:p=a6
case 4:w=6
return B.b(C.cdk(a3),$async$Vx)
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
l=m.k("a1<J.E>")
e=B.B(new B.a1(new B.bc(n,m),new C.cdr(o),l),l.k("J.E"))
A.d.b0(e,new C.cds())
$.h8h.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.B(new B.K(e,new C.cdt(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h8i.n(0,a0,r)
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
aqx:function aqx(d,e){this.a=d
this.b=e},
uz:function uz(d,e){this.a=d
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
cde:function cde(){},
cdf:function cdf(){},
cdd:function cdd(){},
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
cd3:function cd3(){},
cd4:function cd4(){},
cd0:function cd0(){},
cd1:function cd1(){},
cd2:function cd2(){},
jF:function jF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdv:function cdv(d){this.a=d},
cdw:function cdw(){},
cdq:function cdq(d){this.a=d},
cdp:function cdp(){},
cdl:function cdl(){},
cdm:function cdm(){},
cdn:function cdn(){},
cdo:function cdo(){},
cdr:function cdr(d){this.a=d},
cds:function cds(){},
cdt:function cdt(){},
i25(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fB1(e,v,d,B.aX(w))
w.$1(new C.fAY())
w.$1(new C.fAZ())
w.$1(new C.fB_())
w.$1(new C.fB0())
return v},
fB1:function fB1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAY:function fAY(){},
fAZ:function fAZ(){},
fB_:function fB_(){},
fB0:function fB0(){},
b0q:function b0q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd9:function cd9(d){this.a=d},
cd8:function cd8(){},
cda:function cda(){},
cdb:function cdb(d,e){this.a=d
this.b=e},
cdc:function cdc(d){this.a=d},
anJ:function anJ(d,e){this.c=d
this.a=e},
biv:function biv(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dFC:function dFC(){},
aKv:function aKv(){},
cdh(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eS7)
u=!1
w=1
break}u=B.kS(!1,d,t,!1,null,A.a4A,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdh,v)},
hDE(d){var w=A.d.bd(D.GI,new C.cdi(d))
if(w<0)return!0
return w>=4},
hDF(d){var w=A.d.bd($.bDp(),new C.cdj(d))
if(w<0)return!0
return w>=5},
cdi:function cdi(d){this.a=d},
cdj:function cdj(d){this.a=d},
i3L(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.ys()
$.q7().pR(t,new C.fDQ(s),!0)
u=B.a([B.DA(v,A.q9,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f1y,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.nb,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fDQ:function fDQ(d){this.a=d},
i3m(){return C.fZD()},
i0j(){return C.bBl()},
i2m(){return C.fZu()},
aOI(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fCW(d,f),$async$aOI)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOI,v)},
fCW(d,e){var w=0,v=B.j(x.H),u
var $async$fCW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzw
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fCX(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fCW)
case 2:return B.h(null,v)}})
return B.i($async$fCW,v)},
fCX:function fCX(d,e){this.a=d
this.b=e},
acX:function acX(d,e,f){this.c=d
this.d=e
this.a=f},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ep_:function ep_(d,e){this.a=d
this.b=e},
ep0:function ep0(d,e){this.a=d
this.b=e},
ep1:function ep1(d){this.a=d},
ade:function ade(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0p(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0o(g,m,f,d,e,h,l,k,j,o,i,null)},
hkw(d){return B.cp(new C.fAX(d))},
fZF(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i3u(d){if(d===D.cm)return"None"
return C.fZF(d)},
bA1(d,e,f,g){return C.hUx(d,e,f,g)},
hUx(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA1=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fWx&&t.pv())t.eK()
$.fWx=!0
s.a=null
w=3
return B.b(B.hS(A.bi,!0,"Animation preview",d,new C.fls(s,e,g,f),null,A.eF,!0,x.H),$async$bA1)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fWx=!1
case 1:return B.h(u,v)}})
return B.i($async$bA1,v)},
fNf(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fNf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fZF(f)+" Slide transition preview"
s=s?Af.F1:A.v9
w=3
return B.b(C.bA1(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aI6(f,null),A.aq),null),r),$async$fNf)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fNf,v)},
hjP(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dU(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.dc(f,t),1.4-t*0.4,u,u)
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
w.jY((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mI((1-t)*0.8)
v=0.6+t*0.4
w.jI(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bCV(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fZF(f)+" Element animation preview"
s=s?Af.F1:A.v9
w=3
return B.b(C.bA1(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayQ(f,null),A.aq),null),r),$async$bCV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCV,v)},
i3t(d){var w,v,u,t,s=$.afC.W(0,d)
if(s!=null){$.afC.n(0,d,s)
return s}w=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
$.afC.n(0,d,w)
v=$.fXk=$.fXk+w.length
u=B.a3($.afC).k("cu<1>")
for(;;){if(!(v>41943040&&$.afC.a>1))break
t=new B.cu($.afC,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.afC.W(0,t.gT(0)).length
$.fXk=v}return w},
i3a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kV(0,d),j=B.B(k,B.a3(k).k("J.E"))
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
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
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
m.b92(new B.u(t,p),new B.aT(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.o_(e))
return m}},
fyw(d,e,f){return B.cp(new C.fyx(D.eKN.t(0,d),d,f,e))},
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
cd7:function cd7(d){this.a=d},
cd6:function cd6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd5:function cd5(){},
b0l:function b0l(d,e){this.b=d
this.a=e},
fAX:function fAX(d){this.a=d},
fAW:function fAW(d,e){this.a=d
this.b=e},
fls:function fls(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flq:function flq(d){this.a=d},
flr:function flr(d,e){this.a=d
this.b=e},
aI6:function aI6(d,e){this.c=d
this.a=e},
btI:function btI(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f3H:function f3H(d,e,f){this.a=d
this.b=e
this.c=f},
aIJ:function aIJ(d,e){this.b=d
this.a=e},
Uz:function Uz(d,e,f,g,h){var _=this
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
dRz:function dRz(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRx:function dRx(d){this.a=d},
Io:function Io(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd_:function cd_(d){this.a=d},
ccZ:function ccZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayQ:function ayQ(d,e){this.c=d
this.a=e},
bdb:function bdb(){this.d=0
this.c=this.a=null},
d47:function d47(d){this.a=d},
d46:function d46(d){this.a=d},
a7j:function a7j(d,e,f,g,h){var _=this
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
ecg:function ecg(d,e,f){this.a=d
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
eTP:function eTP(){},
fyx:function fyx(d,e,f,g){var _=this
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
fBX(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fBX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x0.c5().LI(D.daS,A.tF,!0),$async$fBX)
case 3:r=e
if(r==null||J.cm(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i34(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBX,v)},
i34(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7C(d,new B.a_A(A.cS.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hW8(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7C(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Kv(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7C(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hW8(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cw9().cIh(B.r8(d,A.hT,o,o),o,o,!1).cK0(0,"word/document.xml")
if(n==null)return""
w=n.cS2()
v=A.c6.Kv(0,w==null?$.hmM():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kV(0,r)
p=A.a.i(B.cD(q,new C.foh(),B.a3(q).k("J.E"),t).fX(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7C:function a7C(d,e,f){this.a=d
this.b=e
this.c=f},
foh:function foh(){},
hDL(d,e,f,g,h,i,j,k,l){return new C.NA(l,e,d,g,f,i,h,j,k,null)},
NA:function NA(d,e,f,g,h,i,j,k,l,m){var _=this
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
evc:function evc(d){this.a=d},
eva:function eva(){},
evb:function evb(d){this.a=d},
erA:function erA(){},
erB:function erB(){},
erC:function erC(d,e){this.a=d
this.b=e},
eta:function eta(d){this.a=d},
esZ:function esZ(){},
et_:function et_(){},
eqY:function eqY(){},
eui:function eui(d){this.a=d},
ev8:function ev8(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
euW:function euW(d){this.a=d},
euX:function euX(){},
euY:function euY(){},
euZ:function euZ(d){this.a=d},
ev_:function ev_(){},
eqm:function eqm(d){this.a=d},
ev9:function ev9(){},
esh:function esh(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eql:function eql(d){this.a=d},
esE:function esE(d){this.a=d},
esF:function esF(d,e,f){this.a=d
this.b=e
this.c=f},
esG:function esG(d){this.a=d},
esg:function esg(){},
esf:function esf(d){this.a=d},
esd:function esd(){},
esc:function esc(d){this.a=d},
ese:function ese(){},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
esn:function esn(d){this.a=d},
esi:function esi(d){this.a=d},
esj:function esj(d){this.a=d},
esk:function esk(d){this.a=d},
esl:function esl(d){this.a=d},
esm:function esm(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
eqo:function eqo(){},
eqp:function eqp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esz:function esz(){},
esA:function esA(d,e){this.a=d
this.b=e},
esx:function esx(d,e,f){this.a=d
this.b=e
this.c=f},
esy:function esy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esr:function esr(d,e,f){this.a=d
this.b=e
this.c=f},
ess:function ess(d,e,f){this.a=d
this.b=e
this.c=f},
est:function est(d){this.a=d},
esu:function esu(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
esD:function esD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esB:function esB(d){this.a=d},
esU:function esU(){},
esV:function esV(){},
esW:function esW(){},
esX:function esX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esR:function esR(d){this.a=d},
esT:function esT(){},
esS:function esS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
esP:function esP(d,e,f){this.a=d
this.b=e
this.c=f},
esQ:function esQ(d,e){this.a=d
this.b=e},
esY:function esY(){},
esp:function esp(d,e){this.a=d
this.b=e},
eqF:function eqF(){},
eqG:function eqG(d,e,f){this.a=d
this.b=e
this.c=f},
eqH:function eqH(d){this.a=d},
eqI:function eqI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqE:function eqE(d){this.a=d},
et3:function et3(d){this.a=d},
et2:function et2(d,e){this.a=d
this.b=e},
et1:function et1(d,e){this.a=d
this.b=e},
et0:function et0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et4:function et4(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqB:function eqB(d){this.a=d},
etc:function etc(d,e,f){this.a=d
this.b=e
this.c=f},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
etb:function etb(d,e,f){this.a=d
this.b=e
this.c=f},
eqn:function eqn(d){this.a=d},
eqZ:function eqZ(){},
euU:function euU(d,e){this.a=d
this.b=e},
euV:function euV(d,e,f){this.a=d
this.b=e
this.c=f},
euj:function euj(d,e,f){this.a=d
this.b=e
this.c=f},
epk:function epk(d){this.a=d},
eph:function eph(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
ep3:function ep3(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqy:function eqy(d){this.a=d},
epM:function epM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epN:function epN(d,e){this.a=d
this.b=e},
epR:function epR(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
epP:function epP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epQ:function epQ(d){this.a=d},
epO:function epO(){},
epL:function epL(d,e,f){this.a=d
this.b=e
this.c=f},
esO:function esO(d,e){this.a=d
this.b=e},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d,e){this.a=d
this.b=e},
ev4:function ev4(d){this.a=d},
ev5:function ev5(d,e,f){this.a=d
this.b=e
this.c=f},
ev1:function ev1(d){this.a=d},
euz:function euz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euy:function euy(d,e,f){this.a=d
this.b=e
this.c=f},
eux:function eux(){},
euw:function euw(d,e,f){this.a=d
this.b=e
this.c=f},
euv:function euv(d,e){this.a=d
this.b=e},
eus:function eus(d,e,f){this.a=d
this.b=e
this.c=f},
euq:function euq(d){this.a=d},
eur:function eur(d){this.a=d},
euu:function euu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eut:function eut(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
err:function err(d,e){this.a=d
this.b=e},
euk:function euk(){},
euT:function euT(d,e){this.a=d
this.b=e},
euR:function euR(d){this.a=d},
euS:function euS(d){this.a=d},
epc:function epc(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
epd:function epd(d,e){this.a=d
this.b=e},
epe:function epe(d,e,f){this.a=d
this.b=e
this.c=f},
epi:function epi(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e,f){this.a=d
this.b=e
this.c=f},
ep8:function ep8(d){this.a=d},
et9:function et9(d,e,f){this.a=d
this.b=e
this.c=f},
ev0:function ev0(d,e,f){this.a=d
this.b=e
this.c=f},
erv:function erv(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(){},
epV:function epV(d,e,f){this.a=d
this.b=e
this.c=f},
epW:function epW(d){this.a=d},
ep6:function ep6(d,e){this.a=d
this.b=e},
eqX:function eqX(d,e){this.a=d
this.b=e},
epf:function epf(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
epp:function epp(d,e){this.a=d
this.b=e},
epq:function epq(d,e){this.a=d
this.b=e},
epn:function epn(d){this.a=d},
epB:function epB(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d){this.a=d},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epJ:function epJ(){},
epK:function epK(){},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
ept:function ept(d){this.a=d},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d,e){this.a=d
this.b=e},
eqW:function eqW(d,e,f){this.a=d
this.b=e
this.c=f},
eqV:function eqV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqU:function eqU(d,e,f){this.a=d
this.b=e
this.c=f},
eqT:function eqT(d,e){this.a=d
this.b=e},
epg:function epg(d,e){this.a=d
this.b=e},
epZ:function epZ(d){this.a=d},
epY:function epY(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
eq_:function eq_(d){this.a=d},
eq0:function eq0(d){this.a=d},
eq1:function eq1(d,e){this.a=d
this.b=e},
eqC:function eqC(d){this.a=d},
esN:function esN(d,e){this.a=d
this.b=e},
esM:function esM(d,e){this.a=d
this.b=e},
esL:function esL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esJ:function esJ(d){this.a=d},
esK:function esK(d,e){this.a=d
this.b=e},
esH:function esH(){},
esI:function esI(){},
eul:function eul(){},
eum:function eum(d,e){this.a=d
this.b=e},
eun:function eun(){},
euo:function euo(d){this.a=d},
eup:function eup(d,e){this.a=d
this.b=e},
epl:function epl(d,e){this.a=d
this.b=e},
eqq:function eqq(){},
eqr:function eqr(){},
eqs:function eqs(){},
eqv:function eqv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
equ:function equ(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e,f){this.a=d
this.b=e
this.c=f},
erW:function erW(d){this.a=d},
erV:function erV(){},
erX:function erX(d,e){this.a=d
this.b=e},
erY:function erY(d,e){this.a=d
this.b=e},
erU:function erU(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
es0:function es0(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
es1:function es1(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
es2:function es2(d,e){this.a=d
this.b=e},
erP:function erP(d){this.a=d},
es3:function es3(d,e){this.a=d
this.b=e},
erO:function erO(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
erJ:function erJ(d){this.a=d},
erG:function erG(d){this.a=d},
erK:function erK(d,e){this.a=d
this.b=e},
erF:function erF(d){this.a=d},
erL:function erL(d,e){this.a=d
this.b=e},
erE:function erE(d){this.a=d},
erM:function erM(d,e){this.a=d
this.b=e},
erD:function erD(d){this.a=d},
erN:function erN(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev7:function ev7(d){this.a=d},
es6:function es6(d,e){this.a=d
this.b=e},
es5:function es5(d,e){this.a=d
this.b=e},
es4:function es4(d,e){this.a=d
this.b=e},
es7:function es7(d){this.a=d},
es8:function es8(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
etI:function etI(d){this.a=d},
etT:function etT(d){this.a=d},
eu3:function eu3(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
etB:function etB(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etF:function etF(d){this.a=d},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etQ:function etQ(d){this.a=d},
etR:function etR(d){this.a=d},
etl:function etl(d){this.a=d},
etS:function etS(d){this.a=d},
ett:function ett(d){this.a=d},
etU:function etU(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
etV:function etV(d,e){this.a=d
this.b=e},
etW:function etW(d,e){this.a=d
this.b=e},
etr:function etr(d,e,f){this.a=d
this.b=e
this.c=f},
eth:function eth(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
euf:function euf(d,e){this.a=d
this.b=e},
euh:function euh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eug:function eug(d,e){this.a=d
this.b=e},
etX:function etX(d,e,f){this.a=d
this.b=e
this.c=f},
etq:function etq(d,e,f){this.a=d
this.b=e
this.c=f},
etg:function etg(d,e,f){this.a=d
this.b=e
this.c=f},
ete:function ete(d,e){this.a=d
this.b=e},
etY:function etY(d,e){this.a=d
this.b=e},
etp:function etp(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
etZ:function etZ(d){this.a=d},
eto:function eto(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
etn:function etn(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
eu7:function eu7(d,e){this.a=d
this.b=e},
etk:function etk(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
etj:function etj(d){this.a=d},
eu9:function eu9(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
epU:function epU(d,e,f){this.a=d
this.b=e
this.c=f},
epT:function epT(d,e){this.a=d
this.b=e},
euC:function euC(d,e){this.a=d
this.b=e},
euB:function euB(d,e){this.a=d
this.b=e},
euD:function euD(d,e){this.a=d
this.b=e},
euA:function euA(d,e){this.a=d
this.b=e},
er1:function er1(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
er2:function er2(d,e){this.a=d
this.b=e},
er_:function er_(d){this.a=d},
erz:function erz(){},
ery:function ery(){},
euP:function euP(d){this.a=d},
euO:function euO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euN:function euN(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
euM:function euM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euJ:function euJ(d,e){this.a=d
this.b=e},
euE:function euE(d){this.a=d},
euF:function euF(d){this.a=d},
euG:function euG(d){this.a=d},
euH:function euH(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
euL:function euL(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqi:function eqi(d,e,f){this.a=d
this.b=e
this.c=f},
eqh:function eqh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq6:function eq6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq5:function eq5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqa:function eqa(d,e){this.a=d
this.b=e},
eqc:function eqc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqb:function eqb(d,e){this.a=d
this.b=e},
eqd:function eqd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq4:function eq4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqe:function eqe(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
eqf:function eqf(d,e){this.a=d
this.b=e},
eq2:function eq2(d){this.a=d},
eqg:function eqg(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
es9:function es9(d){this.a=d},
esb:function esb(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
erh:function erh(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
erj:function erj(d,e){this.a=d
this.b=e},
erb:function erb(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
erl:function erl(d,e,f){this.a=d
this.b=e
this.c=f},
er9:function er9(d,e){this.a=d
this.b=e},
erm:function erm(d,e,f){this.a=d
this.b=e
this.c=f},
er8:function er8(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
er7:function er7(d,e,f){this.a=d
this.b=e
this.c=f},
er4:function er4(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
er6:function er6(d,e){this.a=d
this.b=e},
erp:function erp(d,e){this.a=d
this.b=e},
er5:function er5(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d,e){this.a=d
this.b=e},
erq:function erq(d,e){this.a=d
this.b=e},
ert:function ert(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ep2:function ep2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et7:function et7(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
et6:function et6(d,e){this.a=d
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
d_J:function d_J(d){this.a=d},
d_I:function d_I(d){this.a=d},
bcb:function bcb(d,e){this.c=d
this.a=e},
d04:function d04(d){this.a=d},
d05:function d05(d){this.a=d},
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
d_G:function d_G(d){this.a=d},
d_C:function d_C(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_B:function d_B(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_E:function d_E(d,e){this.a=d
this.b=e},
Pf:function Pf(d,e,f,g,h,i){var _=this
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
evN:function evN(){},
evD:function evD(d){this.a=d},
evM:function evM(d){this.a=d},
evE:function evE(d){this.a=d},
evF:function evF(d){this.a=d},
evz:function evz(d){this.a=d},
evA:function evA(d,e){this.a=d
this.b=e},
evB:function evB(d){this.a=d},
evC:function evC(d,e,f){this.a=d
this.b=e
this.c=f},
evK:function evK(){},
evL:function evL(d){this.a=d},
evG:function evG(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evJ:function evJ(d){this.a=d},
evO:function evO(d,e,f){this.a=d
this.b=e
this.c=f},
evQ:function evQ(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
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
fDR(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fDR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x0.c5().LI(B.a(["pdf"],x.s),A.tF,!0),$async$fDR)
case 3:q=e
if(q==null||J.cm(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo3(s,"data:application/pdf;base64,"+A.cS.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDR,v)},
i3F(d){var w,v,u,t,s,r
try{w=B.jq(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kV(0,w).gM(0)
if(t>0){s=J.aQ5(t,1,200)
return s}}catch(r){}return 1},
fDI(d){return C.i3E(d)},
i3E(d){var w=0,v=B.j(x.T),u
var $async$fDI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDI,v)},
bC6(d,e,f,g){return C.i3O(d,e,f,g)},
i3O(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bC6=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e8(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hl6(b9,new B.ar(r,q))
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
return B.b(a3.zd(800,h),$async$bC6)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.fY),$async$bC6)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaM(a5))
a7=A.cS.gcw().aJ(a7)
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
aPi(d,e,f){return C.i3C(d,e,f)},
i3C(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.ah9(d,e,f,new C.fDG(r,q),q,"Sign document"),$async$aPi)
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
i3M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hej(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hej(a0.b)+"</h1>\n"
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
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lr&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hdW(q.ay)+";border:2px solid "+C.hdW(q.ch)+'"></div>'
break
case 5:l=C.fYw(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj3()
if(p==null)p=A.awq
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
hdW(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hej(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC4(d,e){var w=0,v=B.j(x.H)
var $async$bC4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fDP(e,C.i3M(e),d),d,null,!0,!0,x.H),$async$bC4)
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
return B.b(C.fDI(s),$async$bC5)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC5,v)},
aPj(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fZK(d),$async$aPj)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fGa(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPj,v)},
h8f(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0s:function b0s(d,e,f){this.a=d
this.b=e
this.c=f},
fDG:function fDG(d,e){this.a=d
this.b=e},
fDP:function fDP(d,e,f){this.a=d
this.b=e
this.c=f},
fDM:function fDM(d){this.a=d},
fDN:function fDN(d,e,f){this.a=d
this.b=e
this.c=f},
fDO:function fDO(d,e,f){this.a=d
this.b=e
this.c=f},
i3D(d){return C.ku(d.w)},
i3K(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i5u()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yq(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hqN()
if(w.b.test(u))return u
return null},
hl8(d,e,f){var w,v,u=C.hzn(d),t=$.pn()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i3Q(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fe(w,d.b);v.C();){u=w.gT(w).y
t=C.yq(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fDE(d,e){var w,v=d.y,u=C.yq(v==null?"":v)
if(u!=null)return d.y=u
w=C.i3Q(new B.a1(e,new C.fDF(d),B.U(e).k("a1<1>")))
v=d.x
return d.y=C.hl8(v==null?"":v,null,w)},
i3P(d){var w,v
if(d.length!==1)return null
w=A.d.gJ(d)
if(!C.ku(w.w))return null
v=w.y
return C.yq(v==null?"":v)},
hDN(){var w,v=$.pn(),u=J.e3(10,x.N)
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
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
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
VB(d){return C.hDO(d)},
hDO(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
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
a7E(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7E=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7E)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VA(),$async$a7E)
case 4:s=a6
r=C.yq(a2==null?"":a2)
if(r==null)r=a3!=null?C.hl8(a3,null,A.Il):null
q=x.N
p=B.aX(q)
for(o=J.dm(s),n=J.aV(o.gi3(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yq(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcw().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sw.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yq(J.k(q==null?"":q))
if(f==null)f=C.h8k(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VB(s),$async$a7E)
case 7:u=new B.aF9(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hDN()
n=r==null
d=n?C.h8k(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sw.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VB(s),$async$a7E)
case 8:u=new B.aF9(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7E,v)},
h8k(d){var w,v,u=$.pn()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aC(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqB(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqB)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VA(),$async$aqB)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bn(t,new C.cdx(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VB(t),$async$aqB)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqB,v)},
aqA(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yq(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqA)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VA(),$async$aqA)
case 6:t=o.jx(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yq(J.k(q==null?"":q))===p){u=C.a7D(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqA,v)},
a7D(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7D=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7D)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VA(),$async$a7D)
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
if(D.Sw.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.VB(p),$async$a7D)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7D,v)},
i3J(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.B(new B.K(d,new C.fDL(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fDT(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i3J(d==null?B.a([],x.D):d,f,g),null)},
fDS(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fDS=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7E(h,d,e,f,g),$async$fDS)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yq(e==null?"":e)
u=new B.aEX(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.kb.gcw().aJ(t)
u=new B.aEX(C.yq(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDS,v)},
fZM(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
i3N(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fZM(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b1(v,u))
if(C.fZM(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b1(v,s))
if(C.fZM(t))return t}}return null},
fDH(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c6.ca(0,A.cG.aJ(J.mE(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hNy(w)
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
return B.b(C.aqA(t[1]),$async$agV)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDH(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yq(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqA(r),$async$agV)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDH(s)
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
return B.b(C.a7D(t[1]),$async$agV)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDH(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fDH(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agV,v)},
hNy(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sw.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fZJ(C.Vw(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cD(t,new C.fbQ(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
fZJ(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
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
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vw(B.a2(o,x.N,x.z))
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
fMu(d){var w=0,v=B.j(x.T),u,t
var $async$fMu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hS(D.Wg,!0,"Dismiss",d,new C.fMv(),new C.fMw(),A.F_,!0,x.N),$async$fMu)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eQk)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMu,v)},
i7C(d,e,f,g,h){return B.a5(d,!1).c8(B.ea(new C.fMx(h,e,g,f),!0,null,x.H))},
fDF:function fDF(d){this.a=d},
cdx:function cdx(d){this.a=d},
fDL:function fDL(){},
fbQ:function fbQ(d){this.a=d},
fMv:function fMv(){},
fMw:function fMw(){},
fMx:function fMx(d,e,f,g){var _=this
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
evj:function evj(){},
evf:function evf(d,e){this.a=d
this.b=e},
evi:function evi(d,e){this.a=d
this.b=e},
evg:function evg(d){this.a=d},
evh:function evh(d){this.a=d},
evk:function evk(d){this.a=d},
evl:function evl(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
evn:function evn(d){this.a=d},
evq:function evq(d){this.a=d},
evm:function evm(d){this.a=d},
evr:function evr(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
Vz:function Vz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjI:function bjI(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evs:function evs(d,e){this.a=d
this.b=e},
evt:function evt(d){this.a=d},
evu:function evu(){},
evv:function evv(d){this.a=d},
evw:function evw(d,e){this.a=d
this.b=e},
aDE:function aDE(d){this.a=d},
aDF:function aDF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eoX:function eoX(d){this.a=d},
eoW:function eoW(){},
eoY:function eoY(d){this.a=d},
eoT:function eoT(d){this.a=d},
eoS:function eoS(){},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
bu2:function bu2(){},
aqC:function aqC(d){this.a=d},
aDI:function aDI(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evy:function evy(d){this.a=d},
evx:function evx(d){this.a=d},
hSI(){var w,v,u,t
for(v=0;v<4;++v){w=D.d09[v]
try{if(Ac.bWb(w)){u=w
return u}}catch(t){}}return null},
QM(d,e){return C.i0u(d,e)},
i0u(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QM=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hSI()
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
b8=A.d.gJ(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.og(new C.fy_(c2,b7,o),!1,!1)
b6.lN(0,l)
b9=x.H
B.ca(null,A.da,!1,null,new C.fy0(n,m),c6,null,!0,!0,b9)
k=new C.fy4(b7)
j=new C.fy5()
i=null
t=4
b3=c2.a
h=Aj.aRA(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fP7(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWt(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hl.yf(i,"dataavailable",new C.fy1(e))
d=new B.bX(new B.bg($.by,x.dT),x.b2)
A.Hl.yf(i,"stop",new C.fy2(d))
J.ahv(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QM)
case 8:w=7
return B.b(c5.$1(d0),$async$QM)
case 7:a0=d0
J.fP9(g,a0,0,0,c2.a,c2.b)
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
return B.b(k.$0(),$async$QM)
case 15:w=14
return B.b(c5.$1(d0),$async$QM)
case 14:a0=d0
case 13:J.fP9(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahv(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bQ(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fP9(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$QM)
case 18:w=16
break
case 17:J.ahv(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahv(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nR),$async$QM)
case 19:a5=A.d.gJ(q.split(";"))
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
B.bN(A.nQ,new C.fy3(a7),b9)
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
return B.i($async$QM,v)},
fy_:function fy_(d,e,f){this.a=d
this.b=e
this.c=f},
fxZ:function fxZ(){},
fy0:function fy0(d,e){this.a=d
this.b=e},
fy4:function fy4(d){this.a=d},
fy5:function fy5(){},
fy1:function fy1(d){this.a=d},
fy2:function fy2(d){this.a=d},
fy3:function fy3(d){this.a=d},
bue:function bue(d,e,f){this.c=d
this.d=e
this.a=f},
f68:function f68(){},
f69:function f69(){},
cdU(d){var w=0,v=B.j(x.at),u,t,s
var $async$cdU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqM(d,A.z8),$async$cdU)
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
return B.i($async$cdU,v)},
cdT(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7k:function a7k(d,e,f,g,h){var _=this
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
ed7:function ed7(d){this.a=d},
ed5:function ed5(d){this.a=d},
ed6:function ed6(d,e){this.a=d
this.b=e},
a8c:function a8c(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.nL$=n},
a8d:function a8d(d,e){this.a=d
this.b=e},
b25:function b25(){},
cg5:function cg5(){},
cg6:function cg6(){},
cg7:function cg7(d,e,f,g,h,i,j,k,l){var _=this
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
hrN(d){return new C.ahN(d)},
a2p:function a2p(){},
ahN:function ahN(d){this.a=d},
aQu:function aQu(){},
aw4:function aw4(d,e){this.d=d
this.b=e
this.a=null},
aRZ:function aRZ(d){this.b=d
this.a=null},
ft8(d,e){var w=0,v=B.j(x.H)
var $async$ft8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxq().Lr(d,e),$async$ft8)
case 2:B.fGg()
return B.h(null,v)}})
return B.i($async$ft8,v)},
hiq(d,e){return(A.re[(d^e)&255]^A.o.aA(d,8))>>>0},
fqC(d,e,f,g,h,i){var w=C.hXQ(d,A.dc,f,null,A.cX,g,h,i)
return w},
hkh(d){var w=F.hl_(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hzn(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oW.h(0,w)
if(v!=null)return v
for(u=A.oW.gdK(A.oW),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hkp(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<42;++w)v+="- "+D.cSN[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzZ(d,e){return C.hUs(d,e)},
hUs(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
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
fZD(){var w=0,v=B.j(x.y),u,t,s
var $async$fZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fiW
s=$.bzw
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzZ(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZD,v)},
bBl(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fiW
l=$.bzw
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hf_()?3:4
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
fZu(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fZu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzx
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lv.uA(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fZu,v)},
fZL(d,e){var w=0,v=B.j(x.H),u,t
var $async$fZL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hN([d],"text/html"))
t.toString
u=window
u.toString
A.lv.uA(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fZL,v)},
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
return B.i($async$b12,v)}},D,N,H,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,K,Aq,A_,O,A0,Aa,L,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,S,T,AA,M,A2,A3,A4
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
Ak=c[135]
Al=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
N=c[90]
H=c[123]
Am=c[36]
A8=c[211]
X=c[208]
V=c[197]
An=c[116]
G=c[178]
F=c[31]
E=c[210]
W=c[119]
Q=c[137]
Y=c[29]
Z=c[166]
Ao=c[221]
Ap=c[174]
A9=c[104]
K=c[212]
Aq=c[115]
A_=c[60]
O=c[188]
A0=c[75]
Aa=c[117]
L=c[147]
Ab=c[105]
Ar=c[88]
As=c[214]
P=c[110]
A1=c[126]
At=c[86]
Au=c[121]
Ac=c[53]
Ad=c[184]
Av=c[35]
Ae=c[73]
Af=c[136]
Ag=c[218]
Aw=c[220]
Ax=c[217]
R=c[67]
Ay=c[215]
I=c[163]
Az=c[175]
S=c[47]
T=c[213]
AA=c[222]
M=c[195]
A2=c[216]
A3=c[101]
A4=c[56]
C.nP.prototype={
uU(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tG(t,v)
return new C.nP(t===0?!1:w,v,t)},
bKj(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CK()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tG(w,u)
return new C.nP(r===0?!1:s,u,r)},
bKO(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CK()
w=o-d
if(w<=0)return p.a?$.h07():$.CK()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tG(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2c())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bKj(v)
u=w+v+1
t=new Uint16Array(u)
C.hbB(r.b,w,e,t)
w=r.a
s=C.tG(u,t)
return new C.nP(s===0?!1:w,t,s)},
mo(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bKO(v)
t=w-v
if(t<=0)return n.a?$.h07():$.CK()
s=n.b
r=new Uint16Array(t)
C.hJs(s,w,e,r)
w=n.a
q=C.tG(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aB(0,$.a2c())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2c())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cE_(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7w(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7w(t,e)
if(s===0)return $.CK()
if(r===0)return t.a===e?t:t.uU(0)
w=s+1
v=new Uint16Array(w)
C.hJq(t.b,s,d.b,r,v)
u=C.tG(w,v)
return new C.nP(u===0?!1:e,v,u)},
H_(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CK()
w=d.c
if(w===0)return t.a===e?t:t.uU(0)
v=new Uint16Array(s)
C.b9a(t.b,s,d.b,w,v)
u=C.tG(s,v)
return new C.nP(u===0?!1:e,v,u)},
bxk(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tG(r,u)
return new C.nP(!1,u,s)},
bxj(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tG(u,r)
return new C.nP(!1,r,v)},
bxl(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tG(p,m)
return new C.nP(s!==0,m,s)},
Ul(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CK()
w=t.a
if(w===e.a){if(w){w=$.a2c()
return t.H_(w,!0).bxl(e.H_(w,!0),!0).a7w(w,!0)}return t.bxk(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxj(v.H_($.a2c(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7w(e,v)
if(C.cE_(u.b,t,e.b,w)>=0)return u.H_(e,v)
return e.H_(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uU(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7w(e,v)
if(C.cE_(u.b,t,e.b,w)>=0)return u.H_(e,v)
return e.H_(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CK()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hbC(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tG(w,t)
return new C.nP(q===0?!1:r,t,q)},
bKi(d){var w,v,u,t
if(this.c<d.c)return $.CK()
this.aQo(d)
w=$.fUD.c5()-$.awO.c5()
v=C.fUF($.fUC.c5(),$.awO.c5(),$.fUD.c5(),w)
u=C.tG(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uU(0):t},
cm3(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQo(d)
w=C.fUF($.fUC.c5(),0,$.awO.c5(),$.awO.c5())
v=C.tG($.awO.c5(),w)
u=new C.nP(!1,w,v)
if($.fUE.c5()>0)u=u.mo(0,$.fUE.c5())
return t.a&&u.c>0?u.uU(0):u},
aQo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hby&&d.c===$.hbA&&g.b===$.hbx&&d.b===$.hbz)return
w=d.b
v=d.c
u=16-A.o.gajs(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hbw(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hbw(g.b,f,u,r)}else{r=C.fUF(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fUG(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cE_(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9a(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9a(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hJr(p,r,i);--o
C.hbC(h,j,0,r,o,s)
if(r[i]<h){m=C.fUG(j,s,o,n)
C.b9a(r,l,n,m,r)
while(--h,r[i]<h)C.b9a(r,l,n,m,r)}--i}$.hbx=g.b
$.hby=f
$.hbz=w
$.hbA=v
$.fUC.b=r
$.fUD.b=l
$.awO.b=s
$.fUE.b=u},
gX(d){var w,v,u,t=new C.cE0(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cE1().$1(w)},
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
u=16*n+A.o.gajs(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cE2(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cE3(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l4(A.aG.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uU(0):r
while(v.c>1){u=$.hoJ()
if(u.c===0)B.ba(D.b23)
t=v.cm3(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKi(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fX(0)},
$iaRd:1,
$ihG:1}
C.aQE.prototype={
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
cK0(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gJ(d){return A.d.gJ(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k0(w,w.length,B.U(w).k("k0<1>"))}}
C.Ro.prototype={
cS2(){var w,v
if(this.as==null)this.bbs()
w=this.as
v=w==null?null:w.ao9()
return v==null?null:v.eG()},
bbs(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ao9().eG()
this.as=new C.bN7(v)}},
gZ(d){return this.at}}
C.a3o.prototype={
a4(){return"CompressionType."+this.b}}
C.bGW.prototype={
es(d){var w,v,u,t,s=this
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
cIg(d,e){var w,v,u,t,s,r=this,q=new C.bGW(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.es(8)!==66||q.es(8)!==90||q.es(8)!==104)return!1
w=r.a=q.es(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.ckl(q)
if(t<0)return!1
if(t===0){q.es(8)
q.es(8)
q.es(8)
q.es(8)
s=r.cko(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.es(8)
q.es(8)
q.es(8)
q.es(8)
return!0}}return!0},
ckl(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.es(8)
if(t!==D.dfU[u])v=!1
if(t!==D.cUQ[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cko(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.es(1),d2=((d3.es(8)<<8|d3.es(8))<<8|d3.es(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c_M()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.es(3)
if(q<2||q>6)return-1
v=d3.es(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.es(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hmQ(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.es(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.es(1)===0)break
i=d3.es(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hmP()
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
if(f<h)h=f}c9.bWf(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asY(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asY(d3)}while(a3===0||a3===1);++a5
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
a3=c9.asY(d3)
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
c1=(c1<<8^D.GQ[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GS[b9];++b9
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
if(b8===0){b8=D.GS[b9];++b9
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
if(b8===0){b8=D.GS[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GS[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GS[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bH(c3)
c1=c1<<8^D.GQ[c1>>>24&255^v];--c2}d4.bH(c3)
c1=(c1<<8^D.GQ[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bH(c7)
c1=(c1<<8^D.GQ[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bH(c7)
c1=(c1<<8^D.GQ[c1>>>24&255^c7&255])>>>0
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
asY(d){var w,v,u,t,s=this,r=s.ay
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
t=d.es(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.es(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bWf(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c_M(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwa.prototype={
aGR(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bNy(e)
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
if(w>0)e.aGU(w,!1)
r.ckJ(e)
q=r.r
v=r.f
u=e.aJS(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7R()
s.cS1(0,u,e,f)
q.push(s)}},
ckJ(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a79(20,r)
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
bNy(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a79(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ali(A.hT)
o.aL8(r.eG(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cw8.prototype={}
C.aws.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cwb.prototype={
aGR(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCT.h(0,e.aU())
o.c=w==null?D.Lk:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amX(v)
o.y=e.hc(u).eG()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aT8:D.Dp
o.ay=f
o.Q=e.hc(t)
if(o.at!==D.Dp&&u>2){w=o.y
w.toString
s=B.r8(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amX(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aT9
o.ax=new C.cw8(r,q)
w=D.aCT.h(0,q)
o.c=w==null?D.Lk:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkW().length},
ao9(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r8(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.Dp)if(p.gM(0)<=0)r.at=D.Dp
else{if(w===D.aT8){p=r.bIB(p)
r.Q=p}else if(w===D.aT9){p=r.bIe(p)
r.Q=p}r.at=D.Dp}w=r.c
if(w===D.afD){v=p.c
u=B.di()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pk.Bj(p.eG(),!0,!1)
else{t=B.a81(A.hT,r.w)
p=r.Q
p.toString
A.pk.a3m(p,t,!0,!1)
u.b=t.GA()}r.Q.c=v
return B.r8(u.bf(),A.hT,q,q)}else if(w===D.afE){s=B.a81(A.hT,32768)
p=r.Q
v=p.c
C.hrY().cIg(p,s)
u=s.GA()
r.Q.c=v
return B.r8(u,A.hT,q,q)}else return B.r8(p.eG(),A.hT,q,q)},
bkW(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eG()},
u(d){return this.x},
b7m(d){var w=this.ch,v=C.Jn(C.hiq(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Ul(0,C.Jn(255)))
w[1]=v
w[1]=v.aF(0,C.Jn(134775813)).ad(0,C.Jn(1)).Ul(0,C.Jn(4294967295))
w[2]=C.Jn(C.hiq(w[2].N(0),w[1].mo(0,24).N(0)))},
aPN(){var w=(this.ch[2].Ul(0,C.Jn(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bIB(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r8(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7m(u[v.c++]^r.aPN())}t=r.Q.eG()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPN()
r.b7m(s)
u&2&&B.aj(t)
t[w]=s}return B.r8(t,A.hT,q,q)},
bIe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hc(8).eG()
v=16}else if(k===2){w=d.hc(12).eG()
v=24}else{w=d.hc(16).eG()
v=32}u=d.hc(2).eG()
t=d.hc(d.gM(0)-10)
s=d.hc(10)
r=t.eG()
k=this.ay
k.toString
q=C.hJ7(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.hb0(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDT(k,new Uint8Array(16),p)
k=x.S
m=J.a4O(0,k)
m=n.r=new C.cfV(m)
m.c=!0
m.b=m.bke(!0,new C.as9(p))
if(m.c)m.d=B.bn(D.o4,!0,k)
else m.d=B.bn(D.yA,!0,k)
l=C.h9d(C.h9f(),64)
l.bdL(new C.as9(o))
n.w=l
n.cRA(r,0,r.length)
k=s.eG()
m=n.x
m===$&&B.c()
if(!C.hb0(k,m))throw B.V(B.fl("macs don't match"))
return B.r8(r,A.hT,null,null)}}
C.b7R.prototype={
cS1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amX(w)
if(v>0){t=e.hc(v).eG()
n.ax=t
if(v>=4){s=B.r8(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a79(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rU()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rU()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rU()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amX(u)
f.c=n.as
t=new C.cwb(D.Lk,n,D.Dp,B.a([C.Jn(0),C.Jn(0),C.Jn(0)],x.f3))
n.ch=t
t.aGR(0,f,g)},
u(d){return this.at}}
C.cw9.prototype={
cIh(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwa(B.a([],x.fT))
this.a=g
g.aGR(0,d,f)
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
if(l==null){l=n?new C.Ro(o,A.o.an(Date.now(),1000),0):C.h1v(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h1v(o,q.w,q)
if(k.as==null)k.bbs()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ali(A.hT)
j.aL8(o,A.hT,h,h)}i=j==null?h:j.eG()
if(i!=null)new B.FI(!1).Dg(i,0,h,!0)}}return v}}
C.bDT.prototype={
cRA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cd(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hrH(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bLU(u,0,w,0,o)}else{o===$&&B.c()
q.bIF(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
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
l.ly(0)
w=w.d
w===$&&B.c()
l.Cd(0,w,0,w.length)
return f}}
C.cg_.prototype={}
C.cg3.prototype={}
C.cfY.prototype={}
C.as9.prototype={}
C.cg2.prototype={
cIw(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e7(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdL(new C.as9(A.aG.fL(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMU(n.a,n.b,t,s,r)
r+=v}A.aG.he(f,g,g+w,s)
return o.a.c},
bMU(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cd(0,d,0,d.length)
v.Cd(0,f,0,4)
u=m.c
u===$&&B.c()
w.KM(u,0)
u=m.c
A.aG.he(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cd(0,s,0,s.length)
w.KM(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cfZ.prototype={}
C.cfX.prototype={}
C.asa.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asa){v=this.a
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
w=A.o.t5(w,e.gbWw())
if(!w)e.gbWw()
return w},
aJj(d,e){this.a=0
this.b=d},
t9(d){return this.aJj(d,null)},
aJV(d){var w,v=this,u=v.b
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
w.b_8(v,u)
u=w.b
u===$&&B.c()
w.b_8(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_8(d,e){var w,v=A.o.fS(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cg1.prototype={
ly(d){var w,v=this
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
anE(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0D(u,0)
v.c=0}v.a.aJV(1)},
Cd(d,e,f,g){var w=this.cj7(e,f,g)
f+=w
g-=w
w=this.cj8(e,f,g)
this.ciZ(e,f+w,g-w)},
KM(d,e){var w,v=this,u=C.h9e(v.a),t=u.a
t===$&&B.c()
t=C.h_e(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h_e(w,3)
v.cj2()
v.cj_(u)
v.arP()
v.cdc(d,e)
v.ly(0)
return 20},
b0D(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i6===w.d)
if(w.w===16)w.arP()},
arP(){this.cRz()
this.w=0
A.d.h_(this.r,0,16,0)},
ciZ(d,e,f){while(f>0){this.anE(d[e]);++e;--f}},
cj8(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0D(d,e)
e+=4
f-=4
w.aJV(4)
v+=4}return v},
cj7(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anE(d[e]);++e;--f;++v}return v},
cj2(){this.anE(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anE(0)}},
cj_(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arP()
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
cdc(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i6===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cg4.prototype={
cRz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cg0.prototype={
bdL(d){var w,v,u,t,s=this,r=s.a
r.ly(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cd(0,w,0,v)
w=s.d
w===$&&B.c()
r.KM(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.he(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.h_(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.he(w,0,u,s.d)
s.b8v(s.d,u,54)
s.b8v(s.e,u,92)
u=s.d
r.Cd(0,u,0,u.length)},
KM(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KM(s,w)
s=u.e
t.Cd(0,s,0,s.length)
v=t.KM(d,e)
s=u.e
A.aG.h_(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cd(0,s,0,s.length)
return v},
b8v(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cfW.prototype={}
C.cfV.prototype={
a1J(d){return(D.o4[d&255]&255|(D.o4[d>>>8&255]&255)<<8|(D.o4[d>>>16&255]&255)<<16|D.o4[d>>>24&255]<<24)>>>0},
bke(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
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
for(r=1;r<=10;++r){p=(p^f.a1J((m>>>8|(m&$.q1[24])<<24)>>>0)^D.cx7[r-1])>>>0
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
p=(p^f.a1J((k>>>8|(k&$.q1[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1J((k>>>8|(k&$.q1[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a1J((g>>>8|(g&$.q1[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1J(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bLU(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nZ(A.aG.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
bIF(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
ao9(){return B.r8(this.a,A.hT,null,null)}}
C.b9p.prototype={
uQ(d){return C.hMm(d)}}
C.cq1.prototype={
Mm(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9E(v,t+20,u+16,t,u,B.tP(d.x))},
nl(d){return!1}}
C.bO_.prototype={
cCx(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
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
return B.b(p.ft8(f,r),$async$mE)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mE,v)}}
C.av9.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a8_.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a8_&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wG(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fzz)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aV6.prototype={
c0(d){var w=new C.aA0(!0,this.e,null,new B.df(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syw(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFt()}}}
C.aA0.prototype={
syw(d,e){return},
gpr(){var w=this.ab$
return w!=null},
gl1(){var w=this.ab$
return w!=null},
Mb(d){var w=d==null?B.h3V(null):d
w.sa4g(this.ak)
return w}}
C.a0q.prototype={
R(){return new C.aIp(B.aX(x.N))},
cPL(d){return this.d.$1(d)},
cNy(){return this.e.$0()}}
C.aIp.prototype={
a_(){this.a1()
this.OK()},
OK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cNy(),$async$OK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4B(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OK,v)},
Yv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a1<1>")
p=B.B(new B.a1(r,new C.f4F(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4G(t))
w=3
return B.b(C.an2(p),$async$Yv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4H(t,s,p))
w=4
return B.b(t.OK(),$async$Yv)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yv,v)},
a0H(d){return this.cni(d)},
cni(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f4C(t))
s=J.q(d,"id")
w=3
return B.b(C.bYG(J.k(s==null?"":s)),$async$a0H)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f4D(t))
w=1
break}q=C.fZJ(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cPL(B.a([q],x.D)),$async$a0H)
case 4:if(t.c==null){w=1
break}t.m(new C.f4E(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
OJ(d,e){return this.bJ5(0,e)},
bJ5(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f4w(q),r,null,!0,!0,x.y),$async$OJ)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f4x(t))
s=s.h(e,"id")
w=4
return B.b(C.an1(J.k(s==null?"":s)),$async$OJ)
case 4:if(t.c==null){w=1
break}t.m(new C.f4y(t))
w=5
return B.b(t.OK(),$async$OJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OJ,v)},
cBA(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ie[B.bH(v)-1]+" "+B.bQ(v)},
aPE(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NS,A.n),w,e,w,w,w,w,w,e)},
aPD(d){return this.aPE(d,44)},
b5J(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NS:u,r=B.m(14),q=B.X(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Iz,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Iz,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bvC,u,u,u)],p))}return B.E(B.aE(A.c4,B.dj(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.vb,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4L(this,d),u,u,u,u,u,u,!1,A.a8),1)},
ch5(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.Xa,n=B.m(18),m=p?A.d6:A.dq
m=B.I(m,A.q,p?1.8:1)
w=this.aPD(A.pU)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQ1,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQ3,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NS:q
u=p?q:B.I(A.b3,A.q,1.6)
r=p?D.bLr:q
return B.aE(q,B.dj(q,B.A(B.a([w,A.bf,t,B.dj(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.db,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4A(this,p,d),q,q,q,q,q,q,!1,A.a8)},
coQ(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cBA(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.q,1)
v=r.aPD(A.N4)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQ1,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQ3,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2m(A.hA,A.bu,"Bring it back",r.r?q:new C.f4I(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b2m(A.e5,A.cd,"Delete",r.r?q:new C.f4J(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xa,q,w,o,q,q,A.n),q,q,q,A.db,D.bq9,q,q,q)},
b2m(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hq(B.aE(w,B.p(w,B.X(d,v?A.b3:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
as4(d,e,f){var w=null
return new B.D(D.bpd,B.v(B.a([B.X(d,A.b3,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f6s,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f__,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c7
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bU,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b3,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPE(A.yn,46),A.bf,D.bwt],t)
if(j.r)s.push(D.e6i)
s.push(B.aH(i,i,i,i,A.ND,i,i,i,new C.f4O(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.D(D.bsH,s,i),B.p(i,B.A(B.a([j.b5J(0,A.xZ,"Save",j.a.c.length),j.b5J(1,A.Nj,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.brL,A.ep,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cd:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cd:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.N5:A.ef
n=B.X(n,p?A.cd:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a78,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.brH,A.ic,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f2y,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f5z,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4P(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.as4(A.pU,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.ch5(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e5R)
else if(j.e==null)s.push(j.as4(A.akl,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.as4(A.oF,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.coQ(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cz(u,i,X.aht,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2g()
p=s?i:D.NS
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.xZ,m?A.jb:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bsj,B.aE(i,B.dj(i,B.A(B.a([k,A.a6B,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jb:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eh),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bm(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_2,i,i,i,i,i,i,i,i)}}
C.of.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Ya.prototype={
R(){return new C.ax_(B.a([],x.k),B.f7(null,x.H))},
ge_(){return this.c}}
C.ax_.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1p(t.a.c),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
cuU(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qa(t.d,new C.cFr(d))
v=w<0
if(v&&C.hJu(d))return t.f
u=t.d
if(v)J.pr(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fQp(new C.cFs(t),v)
return t.f=t.f.bA(new C.cFt(t,d),v).eU(new C.cFu())},
Ik(d,e,f){return this.caK(0,e,f)},
aXi(d,e){return this.Ik(0,e,!1)},
caK(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c8(B.ea(new C.cFn(t,e),!1,null,x.H)),$async$Ik)
case 3:w=4
return B.b(t.f,$async$Ik)
case 4:w=5
return B.b(t.OS(),$async$Ik)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
aWz(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dsm:d
this.Ik(0,new C.of(w,v,new B.S(Date.now(),0,!1)),!0)},
c1L(){return this.aWz(null)},
acG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFv(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWz(s)
case 1:return B.h(u,v)}})
return B.i($async$acG,v)},
Ij(d,e){return this.bIY(0,e)},
bIY(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ij=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFi(e),s,null,!0,!0,x.y),$async$Ij)
case 3:if(g!==!0){w=1
break}t.m(new C.cFj(t,e))
w=4
return B.b(t.f,$async$Ij)
case 4:w=5
return B.b(C.afU(t.a.c,e.a),$async$Ij)
case 5:w=6
return B.b(t.OS(),$async$Ij)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ij,v)},
D_(d){return this.bB9(d)},
bB9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFe(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D_)
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
return B.b(t.aXi(0,d),$async$D_)
case 9:w=5
break
case 7:w=10
return B.b(F.h_g(r,d.b,null),$async$D_)
case 10:w=5
break
case 8:w=11
return B.b(t.Ij(0,d),$async$D_)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D_,v)},
bWt(){var w,v,u=null,t=[D.dsp,D.dsn,D.dso],s=new C.cFl(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.dcI[w],u,A.oh,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nW,u,u,u))}return B.p(u,B.A(B.a([B.E(B.v(B.a([D.fv4,A.N,B.bW(A.bz,n,A.bq,6,6),A.aQ,B.aE(u,B.p(u,D.eIW,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFk(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bTu,A.n),u,u,u,u,D.bsR,u,u,u)},
bB7(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f4(A.A,F.anA(d.b),A.f,A.bS),D.ebM,B.ao(v,B.aE(v,B.p(v,D.bMe,A.f,v,v,D.b_X,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cF9(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eXo,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f2K,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFa(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFb(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(H.agm,B.hq(B.aE(s,B.p(s,A.an1,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vN,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc31(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n_,s,s,s,!0,s,s,s,s,s,D.fv8,s,s,s,1,s,!0)
if(t.e)r=D.b3k
else{w=t.bWt()
v=B.a([D.fgV,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eWQ,s,s,s),A.f,s,s,new B.o(D.b7Z,s,s,u,s,s,A.n),s,s,s,s,A.xH,s,s,s))}r=B.a([new B.nM(A5.Yi,new B.m5(w,s),s),new B.nM(D.bsd,new B.m5(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cm(t.d))r.push(D.eOY)
else r.push(new B.nM(D.brJ,B.OA(new B.ok(new C.cFw(t),J.ad(t.d),!0,!0,!0,0,B.rQ(),s),D.b2C),s))
r=B.vp(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b6N,r,s,!1,!1,s,s)}}
C.Y8.prototype={
R(){return new C.awW(B.a([],x.bx))},
Tz(d){return this.d.$1(d)}}
C.aEh.prototype={}
C.awW.prototype={
b_a(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b4,A.aN),w),u=this.gaXh()
v.aN(0,u)
w=new B.as(new B.bb(e,A.b4,A.aN),w)
w.aN(0,u)
return new C.aEh(v,w,f)},
DP(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pJ,new C.cED(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b4,A.aN),v)
t=m.gaXh()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b4,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b4,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b4,A.aN),v)
o.aN(0,t)
n=new B.as(new B.bb(p.b,A.b4,A.aN),v)
n.aN(0,t)
r.push(new C.aEh(o,n,p.c))}if(r.length===0)r.push(m.b_a("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gp6()
q=r.a
q.Tz(q.c)}q=r.d
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
AB(){var w=0,v=B.j(x.H),u=this,t
var $async$AB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp6()
t=u.a
w=2
return B.b(t.Tz(t.c),$async$AB)
case 2:return B.h(null,v)}})
return B.i($async$AB,v)},
c3_(){this.m(new C.cEC(this))
this.DP()},
aWg(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cEF(w,d,v))
w.DP()},
c30(d,e){var w=A.d.cC(this.w,e)
this.m(new C.cEN())
this.DP()
$.aW.x1$.push(new C.cEO(w))},
Q2(d){return this.cgW(d)},
cgW(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l4(80,1400,A.eG),$async$Q2)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Q2)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahq(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEG(d,n,p))
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
xz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hm3(r,t.gp6()),$async$xz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEE(t,s))
t.DP()
case 1:return B.h(u,v)}})
return B.i($async$xz,v)},
chd(d){var w,v=this,u=null,t=F.fxg(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.he(D.bFz,D.fjm,new C.cEI(v,d),u),u)
w=x.p
return new B.D(A.cB,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cl,A.bS,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b2n(A.kT,new C.cEJ(v,d)),A.bp,v.b2n(A.cC,new C.cEK(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2n(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hx,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Il(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Il=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AB(),$async$Il)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h_g(s,t.gp6(),new C.cEM(t)),$async$Il)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.qW,B.he(D.bKc,D.fpk,n.gavI(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.an0,m,m,m,new C.cEP(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wm,m,1,m,m,m,!1,m,!1,E.n_,m,m,m,!0,m,m,m,m,m,D.fkd,m,m,m,1,m,!0),j=Av.aTO(O.lc,A.c,Ae.Vf,A.o0,D.fkZ,n.gc2Z()),i=B.m(18),h=n.gavH(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anA(n.gp6()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.ey,B.E(B.v(B.a([D.fwD,A.at,B.d(F.fYN(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f8a,m,m,m),A.S,B.dk(E.ami,E.aQO,h,B.bl(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wm,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.og,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lc.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bIX,m,m,m,v===0?m:new C.cEQ(n,v),m,m,m,m,"Move up",A.ca)
r=i.length
q=B.aH(m,m,m,m,D.bPd,m,m,m,v===r-1?m:new C.cER(n,v),m,m,m,m,"Move down",A.ca)
r=r===1?m:new C.cES(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f8I,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e5,A.oy,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ca)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cj,!0,A.a4,m,A.an,m,m,m,m),A.am,n.chd(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n_,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a8_(h),A.e4,D.bqo,m,m,m))}return B.oh(!0,B.c8(k,E.aev,B.cz(g,m,D.bqP,m,m,A.ah,!1),m,!1,!1,j,m),new C.cET(n),x.C)}}
C.awY.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cd:E.n_,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eJ,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPn,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apJ.prototype={
R(){return new C.aD3()}}
C.aD3.prototype={
a_(){this.a1()
this.Z8()},
br(d){this.bC(d)
if(d.c!=this.a.c)this.a0w()},
a0w(){var w=0,v=B.j(x.H),u=this,t
var $async$a0w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0w)
case 2:u.d=null
if(u.c!=null)u.m(new C.e7W(u))
w=3
return B.b(u.Z8(),$async$a0w)
case 3:return B.h(null,v)}})
return B.i($async$a0w,v)},
Z8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XM(B.cw(n,0,null),new B.OX(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ia(0).cM(0,A.pF),$async$Z8)
case 7:if(r.c==null){w=1
break}r.d.tb(!1)
r.m(new C.e7U(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e7V(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z8,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c5D(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h2(0)
w.m(new C.e7X(w))}else{v.pQ(0)
w.m(new C.e7Y(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j8.j(0.92),D.Kq.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.pX,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.X(A.alA,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b49
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.zW(s,o),o),A.r,A.bS)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iW,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5C(),o,o,o,o,o,o,!1,A.a8)}}
C.xn.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jm.prototype={}
C.acR.prototype={
B(d){return B.oL(new C.dXC(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acf.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j8.j(t?0.35:0.4),A.q,1),p=t?D.KX:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i0P(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aij,u,u,u,u),1)
m=D.j8.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j8,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bdW,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agB,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xq.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.bit.prototype={
Zh(d){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c64(){return this.Zh(1)},
awm(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acw,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awm("TAARIFA ZA WANANDOA"),A.am,w.c64(),A.cV,w.Zh(0.9),A.cV,w.Zh(0.7),A.N,w.awm("TAMKO LA MAKUBALIANO"),A.h0,w.Zh(1),A.cV,w.Zh(0.95),A.N,w.awm("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acU.prototype={
B(d){return B.oL(new C.eda(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeB.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bdw:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.fZh(w.a)
if(v==null)v=A.d.gJ(D.Qk)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.fZg(v.d),A.A,r,r,A.cl,A.bS,!0,r,!1,r,r),0,0,0),new B.D(A.ahk,new C.bit(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aij,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.KY,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b7i,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agB,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kQ.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7t.prototype={}
C.Vk.prototype={
R(){var w=$.aw()
return new C.aDm(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.my(0,null,null),A.d.gJ(D.a2e),D.dCG,B.a([],x.L),B.a([],x.gE))}}
C.aDm.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zi(C.fB9(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fA5().bA(new C.egs(v),w)
$.qO().jw(0,"assets/images/ngmy_logo.png").bA(new C.egt(v),w).eU(new C.egu())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
agA(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l4(88,1600,A.eG),$async$IF)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$IF)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hmk(m,p),$async$IF)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCu(new B.pF(o,1),m),$async$IF)
case 10:if(r.c!=null)r.m(new C.eg4(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agA("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IF,v)},
Wn(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hmk(s,q),$async$Wn)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCu(new B.pF(r,1),s),$async$Wn)
case 4:if(t.c!=null)t.m(new C.eg0(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wn,v)},
adv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.egb(q))
t=4
q.a.toString
p=C.i5g()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adv)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egc(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agA(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egd(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adv,v)},
Zm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eg6(q,i))
t=4
q.a.toString
p=C.i5f()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zm)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eg7(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.eg8(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eg9(q))
$.aW.x1$.push(new C.ega(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zm,v)},
c6k(d){this.m(new C.eg5(this,d))},
E6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$E6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eg2(q))
t=4
w=7
return B.b($.aW.gmz(),$async$E6)
case 7:w=8
return B.b(B.bN(A.n5,null,x.H),$async$E6)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pQ))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lX(1800/p.gZ(0).a),$async$E6)
case 9:o=e
w=10
return B.b(o.hr(A.fY),$async$E6)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.afX(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$E6)
case 11:m=e
q.agA(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agA(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eg3(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E6,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kV,a2,a2,a2,new C.egj(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bKI,a2,a2,a2,new C.egk(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oO,a2,a2,a2,a4?a1.gaYo():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AI,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eJ4,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b03(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Tm,a2,a2,a2)
t=a1.as?a2:a1.gc6j()
t=B.a([B.E(B.dk(D.bLs,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cj,a2,a2,a2),t,B.bl(D.te,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uP),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cl,A.bS,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bIf,a2,a2,a2,a1.as?a2:a1.gbHz(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Tm,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRu("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d7u[o]
p.push(B.mG(a2,D.te,new B.x(n.a,a2,A.p8,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.egl(a1,n),a2,a2,P.uP,a2))}p=B.bW(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bz,B.a([D.fvh,A.bf,B.j5(a2,a2,a2,D.ffJ,a2,new C.egm(a1),m==="en",a2,a2,a2,a2),A.ab,B.j5(a2,a2,a2,D.ffE,a2,new C.egn(a1),m==="sw",a2,a2,a2,a2)],w),A.rO,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Tm,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a2e,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPY(g==null?h.a(g):g))}k=B.cz(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a2e,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPY(g==null?h.a(g):g))}j=B.cz(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc6m()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.cB,s,a2),t,A.aA,new B.D(A.cB,r,a2),q,A.N,p,A.S,m,A.aA,new B.D(A.cB,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.A(B.a([D.bLm,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tZ,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dne,A.av,D.bwM],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.te
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f6e,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.V2,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cB,A.ic,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cVf[o]
t.push(B.mG(a2,D.te,new B.x(a0,a2,A.IN,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.ego(a1,a0),a2,a2,P.uP,a2))}u.push(B.bW(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRu("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egp(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc6l()
u.push(B.A(B.a([t,A.ab,B.Hq(A.ys,s,B.nw(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaYo()
u.push(B.dk(A.oO,D.fqS,t,B.bl(A.d_,a2,a2,a2,a2,A.Ix,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cz(v,a1.r,A.ah6,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jP.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.A(B.a([E.a6C,A.ey,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Ay,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bt7,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AI,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRu(d){var w=null
return B.bs(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.te,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.II,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPY(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kO,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bpr,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jf,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iU,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eg1(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zi.prototype={
baD(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zi(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cG1(d){var w=null
return this.baD(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cbU(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cbS(),B.U(w).k("K<1,n>")).c_(0,new C.cbT())
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
return this.baD(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFh(d){return this.f}}
C.tb.prototype={
a4(){return"NewsLayout."+this.b}}
C.Be.prototype={
a4(){return"NewsFrame."+this.b}}
C.lc.prototype={}
C.b03.prototype={
re(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYq(d,e,f,g){return this.re(d,e,null,1.25,f,A.bl,g)},
Po(d,e,f,g,h){return this.re(d,e,f,1.25,g,A.bl,h)},
aws(d,e,f,g,h){return this.re(d,e,null,f,g,A.bl,h)},
awr(d,e,f,g,h){return this.re(d,e,f,g,0,A.bl,h)},
aYs(d,e,f,g,h){return this.re(d,e,null,f,0,g,h)},
c6q(d,e,f,g,h,i){return this.re(d,e,f,g,0,h,i)},
awq(d,e,f,g){return this.re(d,e,null,f,0,A.bl,g)},
ady(d,e,f){return this.re(d,e,null,f,0,A.bl,A.cN)},
aYr(d,e,f,g,h){return this.re(d,e,f,g,0,h,A.cN)},
c6p(d,e,f,g){return this.re(d,e,null,f,0,g,A.cN)},
c6o(d,e,f,g){return this.re(d,e,f,g,0,A.bl,A.cN)},
adz(d,e,f,g,h,i){return this.re(d,e,f,g,h,A.bl,i)},
aYp(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kr(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.ce,new B.js(1),u,u,h,u,A.c9,u)
v.yL(g)
if(!v.b.a.c.gaDo())return w
w-=2}return j},
adw(d,e,f,g,h,i,j,k){return this.aYp(d,e,f,g,h,i,j,k,A.bl)},
ayA(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayz(d){return this.ayA(null,!1,d)},
ago(d,e){return this.ayA(null,d,e)},
cnZ(d,e){return this.ayA(d,!1,e)},
gb_y(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaU5(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Of(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adw(w.gaU5(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaU5(),v,g,A.a2,v,v,v,w.awr(u,t,f,1.02,A.P),e,v,v)},
aUa(d){return this.Of(d,A.L,null,2,78,30)},
aaY(d,e,f,g,h){return this.Of(d,e,null,f,g,h)},
bWl(d,e,f,g,h){return this.Of(d,A.L,e,f,g,h)},
bWk(d,e,f){return this.Of(d,A.L,null,e,f,30)},
Rj(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.D(A.km,B.d(s,u,g,A.a2,u,u,u,v.aYr(w,v.aYp(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5p(d){return this.Rj(d,A.L,null,3,24)},
aA3(d,e,f,g){return this.Rj(d,e,null,f,g)},
cvn(d,e,f){return this.Rj(d,A.L,e,3,f)},
b5q(d,e){return this.Rj(d,e,null,3,24)},
cvl(d,e){return this.Rj(d,A.L,null,3,e)},
cvm(d,e,f){return this.Rj(d,e,null,3,f)},
aq5(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Po("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nc(){return this.aq5(null,!0)},
aq4(d){return this.aq5(null,d)},
bDt(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.D(A.hY,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6p(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vn(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_y(),h=A.o.an(j.bz(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hTS(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYq(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adw(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adw(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adz(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.A(B.a([B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hB,A.j,0,l,l),A.am,m.ago(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ey,B.E(B.d(i,l,1,A.eD,l,l,l,m.awq(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bBK(j),l,l,l,l,l,l,m.Po(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hB,A.j,0,l,l),A.N,m.cnZ(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_y()
v=B.d("NGMY",l,l,l,l,l,l,m.aws(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.re(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adz(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l)
t=m.ago(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awq(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ago(!0,1.4),A.at,B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayz(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aws(v,u,1,3,A.P),A.L,l,l),A.N,m.ago(!0,1.2),A.at,B.A(B.a([B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l),A.at,m.ayz(3)],h),A.m,l,A.e,A.j,0,A.p)}},
ac4(d){return this.vn(d,!1)},
adx(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adz("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c6n(d,e){return this.adx(d,null,e,null)},
aW8(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dl(v),12)===0?12:A.o.F(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.awr("Roboto",15,t,1,A.cv),r=B.X(E.ajI,t,w,w,w,18),q=A.a.ap(A.oS[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
ava(){return this.aW8(A.mt)},
b2B(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adz("Roboto",this.adw(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayD(d,e,f){return this.b2B(d,e,f,30)},
aA6(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.D(A.va,B.d(v,w,e,A.a2,w,w,w,this.c6o("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5u(d){return this.aA6(d,3,22)},
cvy(d,e){return this.aA6(d,e,22)},
tu(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cl,A.bS,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D7(D.bvT,w,s)
if(v==="sepia")w=new B.D7(D.bvS,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xU,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.Wi.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
ql(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tu(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ep,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lM,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e2m,14)],x.V)
v=l.tu(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYr(j.as,13.5,D.b8N,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bbV,k,k,k,w,k,A.n),k,e,k,k,D.bqK,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hT(l.tu(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lM,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e2c,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tu(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qZ,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nr(l.tu(d,e),A.aq,D.fP2),new C.bbD(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tu(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bt(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bP,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cn(A.aO,A.q0,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bv9,k,k,d)
case 8:w=d/2
v=B.wO(A.he,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wO(A.hC,new B.aT(w,w)),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tu(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nr(l.tu(d,e),A.aq,D.fV4),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tu(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ep,k,k,d)}},
aNz(d,e){return this.d.e===D.QY?A.bH:this.bDt(d,e)},
VW(d){return this.aNz(d,A.L)},
gazp(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azo(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYs(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Po("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ady(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jy(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcet(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8H(d,e,f,g){return B.cp(new C.cbV(this,e,d,f,g))},
a8G(d){return this.a8H(d,22,!0,18)},
W6(d,e){return this.a8H(d,22,!0,e)},
aOB(d,e,f){return this.a8H(d,22,e,f)},
bFu(d,e,f){return this.a8H(d,e,!0,f)},
b8l(d,e,f,g){return B.cp(new C.cbW(this,e,d,g,!0,f))},
cdh(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.ac4(824),A.aA,k.aUa(824),k.b5p(824),A.N,k.Nc(),A.ac,B.av(k.ql(824,360),j,j,j),k.VW(824),A.ac,B.E(k.a8G(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.ac4(824),A.aQ,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaY(440,A.bg,3,62,26),k.aA3(440,A.bg,2,20),A.b6,k.aq5(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Iy,B.v(B.a([k.ql(362,310),k.VW(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayz(2),A.ac,B.E(k.a8G(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vn(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWl(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cvn(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B3,j,j,j)
u=B.a([B.av(k.ql(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QY){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awr(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lK,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Nc(),A.S,B.E(k.W6(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vn(824,!0)
w=k.ql(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Of(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.btq,j,j,j),j,j,0,0,j,j)],u),j),k.b5q(824,A.bg),A.N,k.Nc(),A.S,B.E(k.a8G(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.ac4(824),A.aA,k.aUa(824),k.b5p(824),A.N,k.Nc(),A.ac,B.E(k.b8l(3,300,B.v(B.a([k.ql(300,300),k.VW(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vn(824,!0)
v=x.p
u=B.v(B.a([k.aaY(440,A.bg,3,62,26),k.aA3(440,A.bg,2,20),A.b6,k.aq4(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aNq,new B.D(A.hY,k.ql(364,h.e===D.QY?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.W6(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.ac4(824),A.ac,k.bWk(824,2,70),k.cvl(824,21),A.N,k.Nc(),A.ac,B.E(k.b8l(3,340,B.av(k.ql(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vn(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBK(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Po(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYs(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b6)
if(k.gazp())v.push(k.azo(230,250))
return B.v(B.a([w,A.aA,B.E(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agz,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaY(570,A.bg,3,62,28),k.cvm(570,A.bg,20),A.N,k.aq4(!1),A.N,B.av(k.ql(570,330),j,j,j),k.VW(570),A.S,B.E(k.aOB(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vn(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Po(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.Of(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.brM,j,j,j),k.b5q(824,A.bg),A.S,B.av(k.ql(824,310),j,j,j),k.VW(824),A.N,k.Nc(),A.S,B.E(k.a8G(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vn(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.ql(824,430),B.ao(18,k.c6n(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayD(824,3,66),k.b5u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.ava(),A.aA,B.E(k.W6(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vn(824,!0),A.by,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.adx(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2B(410,4,58,28),k.aA6(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNr,k.ql(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.ava(),A.aQ,B.E(k.W6(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vn(824,!0)
v=k.ql(824,420)
u=B.hwy(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6q(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.btG,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayD(824,3,62),k.b5u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aW8(A.ll),A.aA,B.E(k.W6(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vn(824,!0)
u=h.w
t=x.p
w=B.a([k.ql(824,380),B.ao(j,k.adx(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayD(824,2,60)
r=k.cvy(824,2)
p=k.ava()
o=B.E(k.aOB(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.tu(150,104),A.aq),A.od,B.E(B.v(B.a([k.adx("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awq(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vn(824,!0),A.by,k.aaY(824,A.bg,3,62,30),k.aA3(824,A.bg,2,22),A.S,k.aq4(!1),A.S,B.av(k.ql(824,330),j,j,j),k.aNz(824,A.bg),A.aQ,B.E(k.bFu(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b88(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.bub,B.v(B.a([B.E(t.cdh(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYq(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Po(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hB,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqK(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fL(q,A.A,s,s,A.cl,A.bS,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mt,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aws(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bvh,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jy(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbE.prototype={
j3(d){return C.hbI(d)},
jL(d){return!1}}
C.bbD.prototype={
a5(d,e){var w,v=C.hbI(e)
$.W()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.btf.prototype={
j3(d){var w,v,u,t,s,r,q,p,o=new B.eL()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ap(t,8))
w=d.b
r=w-8
u.E(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ap(0,r))
u.E(new B.bF())
return u},
jL(d){return!1}}
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.Kr.j(0.13),A.K],v),l,l).av(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
ar(d){return!1}}
C.bqK.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.hL(u,u,u,u,B.dh(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.ce,u,A.e9,A.c9)
s.eF()
w=d.a
J.bz(w.save())
w.translate(t/2,e.b*0.52)
d.j1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.Vn.prototype={
R(){return new C.aDq()}}
C.aDq.prototype={
a_(){var w=this
w.a1()
B.fY9(w.a.c,null).bA(new C.ehD(),x.g7).bA(new C.ehE(w),x.a)
w.a.toString},
gaMo(){var w=D.auh[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawt(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMo()
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
Zo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ehq(r))
t=4
q=r.gawt()
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
return B.b(n.pB().zd(J.h1f(p),J.h1f(o)),$async$Zo)
case 7:l=e
w=8
return B.b(l.hr(A.fY),$async$Zo)
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
if(r.c!=null){r.m(new C.ehr(r))
r.c.I(x.q).f.S(D.eRy)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zo,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kV,s,s,s,new C.ehx(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.ftn,s,s,!0,s,s,t.y||r==null?s:t.gc6r(),s,s)],p),s,s,!0,!0,A.AI,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fxf,s,s,s,1,s,!0)
if(r==null)p=A.lC
else{w=B.E(new B.D(A.bR,B.av(new B.fG(t.gaMo(),B.cp(new C.ehy(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iU,B.j5(s,s,s,new B.x(D.auh[u].a,s,E.aPc,s,s,s,s,s,s,s,s,s),s,new C.ehz(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bm(!0,B.v(B.a([new B.a7(s,40,B.cz(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bM5,B.E(B.kX(s,s,s,6,1,new C.ehA(t),t.f),1),D.bLI],p),A.m,s,A.e,A.j,0,s,s),D.fqM,A.am,B.bK(!1,D.fqw,s,s,!0,s,s,new C.ehB(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Ww,s,s,s,s,s,s,D.br7,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AI,p,s,!1,!1,s,s)}}
C.bba.prototype={
a5(d,e){var w
$.W()
w=B.M()
w.Q=A.cl
return d.ud(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_r.prototype={
R(){var w=$.aw(),v=x.A
return new C.aEN(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gJ(D.a2N),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.os.prototype={}
C.aEN.prototype={
gaUi(){var w,v,u=this
if(u.p1)w=new B.vx(1,u.p2,0.9,u.p3).iB().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eRc(w))},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
Y2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Y2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qO().jw(0,"assets/images/ngmy_logo.png"),$async$Y2)
case 7:q=e
p=J.eT(J.vg(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCu(new B.pF(p,1),o),$async$Y2)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eQ4(r,p))
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
return B.i($async$Y2,v)},
Pr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l4(92,1800,A.eG),$async$Pr)
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
break}r.m(new C.eQs(r,p))
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
b1Z(){var w=this
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
aVT(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bza(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.da1)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bza(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bza(C.fXf(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bza(C.fXf(1-a0*0.5,n,n,n),w)}return a1?C.bza(C.fXf(-1,255,255,255),w):w},
aAc(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kV(0,this.d.a.a),t=B.B(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z6(u,v,w)
this.dx.p7(new C.eQC(t),!0)
return t},
b4u(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAc()
w=C.i2Y(e.d.a.a,e.db)
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
return C.i_s(d,k,v,a0,j,e.gaUi(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ctl(){return this.b4u(null)},
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
return B.b(r.lX(1080/r.gZ(0).a),$async$CZ)
case 7:w=6
return B.b(e.hr(A.fY),$async$CZ)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CZ,v)},
a9y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePO(q))
t=4
w=7
return B.b(q.CZ(),$async$a9y)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcw().aJ(p)
n=C.Br(null,null,null,null,D.o7,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4u(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.ePP(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9y,v)},
Aj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Aj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePM(q))
t=4
w=7
return B.b($.aW.gmz(),$async$Aj)
case 7:w=8
return B.b(B.bN(A.oB,null,x.H),$async$Aj)
case 8:w=9
return B.b($.aW.gmz(),$async$Aj)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pQ))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lX(1080/p.gZ(0).a),$async$Aj)
case 10:o=e
w=11
return B.b(o.hr(A.fY),$async$Aj)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.afX(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Aj)
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
if(q.c!=null)q.m(new C.ePN(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aj,v)},
cgn(){var w=this.p4
w.toString
return B.cp(new C.eQl(this,w))},
aYz(d,e){var w=null
return B.bs(w,w,w,w,w,D.f0Q,w,w,!0,new B.b4(4,B.m(16),P.uP),w,w,w,w,w,D.te,!0,w,w,w,w,new B.b4(4,B.m(16),D.aXG),w,w,w,w,w,w,w,w,A1.Df,e,w,w,w,w,w,w,w,D.f65,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xI(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPZ,w,w,w))
return new B.D(D.bp5,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aYy(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jC),A.f,w,w,new B.o(D.te,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vv(d){return this.aYy(d,A.bC)},
o7(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tZ:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jb,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jb,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dj(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.F4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
afn(d,e,f){return this.o7(d,null,e,f)},
awx(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eA:A.bF,s=x.p
v=B.a([B.dj(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYC(d,e,f,g,h,i){return this.awx(d,e,f,g,h,5,i)},
kg(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.eYS,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e5V,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQy(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aP4,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YJ,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auA(w).cHp(A.b7,A.bF,A.b7.j(0.2),A.c,D.eIp,4)
return new B.D(A.xr,B.v(B.a([s,B.a9A(B.kX(u,u,u,g,f,new C.eQz(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aho(d,e,f,g,h,i){return this.kg(d,e,f,g,h,null,i)},
ahR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b3
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bFa:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQB(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bW(A.bz,n,A.bq,10,10)},
bJD(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2N
else{v=x.a8
w=B.B(new B.a1(D.a2N,new C.ePE(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYz("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ePF(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7B,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYz("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePG(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dm,!0,A.a4,n,A.an,n,n,n,n)
t=o.xI("DESIGNS",A.tM)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cMT[q]
r.push(new B.D(A.iU,o.afn(p,o.x===p,new C.ePH(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.ePI(o,w),w.length,n,n,A.aO,new C.ePJ(),!1),n),A.N,o.aYy(B.v(B.a([B.iE(A.b7,n,n,A.af,!0,new C.ePK(o),n,D.fi_,n,D.fet,o.k3),B.iE(A.b7,n,n,A.af,!0,new C.ePL(o),n,n,n,D.fbH,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ah5)],s),A.F,n,A.e,A.j,0,A.p)},
cBQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAc()
if(a7.length===0)return a5.vv(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.IW,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("co.E"))
A.d.fl(m)
l=m.length!==0&&A.d.d7(m,new C.eR1(a5,m))?a5.db[A.d.gJ(m)]:a6
k=new C.eR8(a5)
j=new C.eRa()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.IW,a6,a6,a6)
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
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mf,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eR2(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vv(B.bW(A.bz,o,A.rO,6,6))
i=B.a([a5.o7("All words",K.alh,!1,new C.eR3(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afn("Sentence "+a3,!1,new C.eR4(a5,a7,v,a2)))
a2=a3}}i.push(a5.afn("Clear picks",!1,new C.eR5(a5)))
i=B.bW(A.bz,i,A.bq,8,8)
g=a5.xI("SIZE OF THE PICKED WORDS",D.akK)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dfu[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eR6(e,k)
f.push(a5.afn(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bW(A.bz,f,A.bq,8,8),A.S,a5.o7("Make every word normal",A.lk,!1,new C.eR7(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cx2(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bwq,B.d(A.d.i1(D.avY,new C.eQL(q)).b,p,p,p,p,p,p,D.f_k,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eQM(q)),l=q.xI("HIGHLIGHT BEHIND THE WORDS",A.a_D),k=q.p1?-1:q.k4
k=q.ahR(k,new C.eQN(q),D.cXc)
w=q.p1
v=w?A.c:A.b3
n=B.a([n,A.S,m,l,B.bW(A.bz,B.a([k,B.aE(p,B.p(p,D.bI9,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eU9,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQQ(q),p,p,p,p,p,p,!1,A.a8)],o),A.rO,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IW,p,p,p)],o)
if(q.gaUi()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aho("Colour",l,0,360,new C.eQR(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aho("Shade",k,0.15,0.9,new C.eQS(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kg("Strength",l,0.15,1,new C.eQT(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vv(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xI("LOOK",A.yg))
m=B.a([q.o7("Bold",I.akI,q.fy,new C.eQU(q)),q.o7("Italic",I.akJ,q.go,new C.eQV(q))],o)
for(u=0;u<3;++u){l={}
k=D.cO3[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tZ:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQW(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bW(A.bz,m,A.rO,8,8))
n.push(q.xI("COLOUR",A.ne))
n.push(q.ahR(q.fx,new C.eQX(q),D.d6Z))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IW,p,p,p))
n.push(q.xI("SIZE AND PLACE",A.G0))
m=q.fr
m=q.kg("Text size",m,0.5,1.6,new C.eQO(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vv(B.v(B.a([m,q.kg("Up / down",l,0.12,0.5,new C.eQP(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cgo(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bNv,A.f,p,p,D.b_E,p,62,p,p,p,p,p,62),A.aA,D.ffC,A.am,D.fkb],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.te,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bsi,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYB(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cl,A.bS,!1,p,!1,p,p),p),A.aq),A.bf,B.E(B.v(B.a([D.ffc,A.N,B.bW(A.bz,B.a([q.o7("Change",A.kT,!1,q.gaYB()),q.o7("Remove",A.e5,!1,new C.eQp(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d3u[t]
u.push(q.o7(s.b,s.a,q.at===t,new C.eQq(q,t)))}u=B.bW(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_g(o)
break A}if(1===r){s=q.bZf()
break A}if(2===r){s=q.bFt()
break A}if(3===r){s=q.bLL()
break A}s=q.bHA()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bI(A.a3,p,p,q.o7("Reset the whole picture",A.lk,!1,new C.eQr(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_g(d){var w=this,v=x.p
return B.v(B.a([B.bW(A.bz,B.a([w.o7("Auto enhance",E.a_g,!1,new C.eQh(w)),w.o7("Make words easy to read",A.oL,!1,new C.eQi(w))],v),A.bq,8,8),A.aA,B.cp(new C.eQj(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZf(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kg("Exposure",n,-1.5,1.5,new C.ePW(o),0,A.k.aa(n,1))
w=o.RG
w=o.kg("Brightness",w,-0.5,0.5,new C.ePX(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kg("Contrast",v,0.4,2,new C.ePY(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kg("Fade",u,0,1,new C.ePZ(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kg("Spotlight",t,0,1,new C.eQ_(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kg("Darken",s,0,0.85,new C.eQ0(o),0,""+A.k.V(s*100))
r=o.b6
r=o.kg("Vignette",r,0,0.9,new C.eQ1(o),0,""+A.k.V(r*100))
q=o.aH
q=o.kg("Shade behind words",q,0,0.85,new C.eQ2(o),0,""+A.k.V(q*100))
p=o.aP
return o.vv(B.v(B.a([n,w,v,u,t,s,r,q,o.kg("Shade top & bottom",p,0,0.85,new C.eQ3(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFt(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kg("Colour strength",q,0,2.2,new C.ePh(s),1,""+A.k.V(q*100))
w=s.to
w=s.kg("Warmth",w,-1,1,new C.ePi(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kg("Tint",v,-1,1,new C.ePj(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vv(B.v(B.a([q,w,v,s.kg("Shift colours",u,-180,180,new C.ePk(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o7("Negative",D.bD8,s.y1,new C.ePl(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xI("COLOUR WASH",A.Ne)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.auH)
t=B.a([u,v,s.ahR(w,new C.ePm(s),q),A.N],t)
if(s.b3!=null){q=s.b2
t.push(s.vv(s.aho("Wash strength",q,0,0.9,new C.ePn(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLL(){var w,v,u,t,s,r=this,q=r.y2
q=r.kg("Blur",q,0,24,new C.ePQ(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.kg("Soft focus",w,0,1,new C.ePR(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vv(B.v(B.a([q,w,r.kg("Film grain",v,0,1,new C.ePS(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xI("LIGHT LEAK",H.akE)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.auH,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahR(q,new C.ePT(r),t),A.N],u)
if(r.be!=null){q=r.bM
u.push(r.vv(r.aho("Leak strength",q,0,1,new C.ePU(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHA(){var w,v,u,t,s=this,r=s.aS
r=s.kg("Zoom",r,1,3,new C.ePr(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kg("Left / right",w,-1,1,new C.ePs(s),0,""+A.k.V(w*100))
v=s.bU
v=s.kg("Up / down",v,-1,1,new C.ePt(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vv(B.v(B.a([r,w,v,s.kg("Turn",u,-180,180,new C.ePu(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bW(A.bz,B.a([s.o7("Turn 90\xb0",N.alO,!1,new C.ePv(s)),s.o7("Flip sideways",A.FP,s.cU,new C.ePw(s)),s.o7("Flip upside down",A.FP,s.cX,new C.ePx(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c1U(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eIB,A.S,D.fh1,A.aA,B.aE(w,B.p(A.A,D.eIO,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tZ,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQk(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.te,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c_4(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eQc(p),m=x.p,l=B.A(B.a([D.bww,p.o7("Reset",A.lk,!1,new C.eQ8(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IW,o,o,o),j=p.xI("SHAPE",A.alK),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BX[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYC(n.$2(t,p.cy),62,u.b,s===t,new C.eQ9(v,p),62))}}i=B.bW(A.bz,i,A.bq,8,8)
v=p.xI("RING",A.r0)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BS[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYC(n.$2(p.cx,t),62,r.b,q===t,new C.eQa(s,p),62))}u=B.bW(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vv(p.kg("Size",s,0.12,0.4,new C.eQb(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0w(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eQv(this)),null),null)},
cwj(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tZ:q
t=new B.aT(14,14)
s=D.d5x[w]
r=v?A.c:A.az
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bh,B.aE(A.c4,B.dj(q,B.v(B.a([r,A.cV,new B.qf(A.eh,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bo1,q,q,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQE(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bq6,A.lM,q,q,q)},
aP6(){var w,v,u=this,t=null,s=u.cwj(),r=u.as
A:{if(0===r){w=u.bJD()
break A}if(1===r){w=u.cBQ()
break A}if(2===r){w=u.cx2()
break A}if(3===r){w=u.cgo()
break A}if(4===r){w=u.c_4()
break A}w=u.c1U()
break A}v=x.p
return B.bw(A.rU,B.el(B.v(B.a([s,B.E(B.cz(B.a([w],v),t,D.br8,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Ww,!0),A.aq)},
aLl(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc6S(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eIX,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b3,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLl()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eNS)
else t.push(D.bHe)
t.push(A.ab)
t.push(D.byg)
return B.p(r,B.A(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tZ,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZN,r,r,r,r,G.agT,r,r,r)},
aYA(){var w=null
return new B.D(T.YF,B.A(B.a([B.aH(w,w,w,w,A.mx,w,w,w,new C.ePV(this),w,w,w,w,w,w),D.fwb,A.b6,D.bPP],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AI,B.bm(!0,B.cp(new C.eRb(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
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
C.m2.prototype={}
C.zk.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vQ.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7B.prototype={}
C.aqy.prototype={}
C.a_Y.prototype={
R(){return new C.aGI(new B.as(A.as,$.aw()),B.jO(!0,null,!0,!0,null,null,!1),D.dvq,B.a([],x.s),B.et([D.HH],x.Q))}}
C.aGI.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_J(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_J=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().BT(90,700,700,A.eG),$async$a_J)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_J)
case 8:p=e
if(r.c!=null)r.m(new C.eXo(r,p,q))
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
return B.i($async$a_J,v)},
a_M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hX().aGA(78,n,1100,1100),$async$a_M)
case 7:q=e
if(J.cm(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fi(),$async$a_M)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcw().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eXp(r,p))
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
return B.i($async$a_M,v)},
b2A(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cl,A.bS,!0,u,!1,u,u)
return w}catch(v){}return D.bmh},
c_a(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cpQ(C.fyw(w,this.b2A(d),f),g)},
abQ(d,e,f,g,h){var w=null,v=new C.eXm(f,e),u=new C.eXn(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BC:A.N3,A.c1,w,w,w,26),w,w,w),D.ebA],x.p),w),w)
else p=this.c_a(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.E(B.av(p,w,w,w),1),D.bGW],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mo,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXl(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVZ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cl,A.bS,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Ty,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0z,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kO,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a80(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a80=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fBX(),$async$a80)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eX4(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eX5(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a80,v)},
adH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adH=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eX7(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eX8(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eX9(r))
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
return B.b(C.fxe(q,r.cx,j,new C.b0r(r.z,r.Q,r.as,r.at),new C.eXa(r),i,m,p,k),$async$adH)
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
if(r.c!=null)r.m(new C.eXb(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eE,g).w
g=B.aI(d,A.bU,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b3,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bK7,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bTE,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXC(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0z,h,h,h,i.ax?h:new C.eXD(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAu()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hq(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vx:A.hz,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vN,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aXd),h,h,h,h,h,h,h,h,A0.II,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iU,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPp,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eXE(i)
s=i.aVZ(A.lm,q,r,i.gcgP(),s)
r=i.z
r=B.E(i.abQ(new C.eXG(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.A(B.a([r,A.bp,B.E(i.abQ(new C.eXH(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gJ(s)
p=i.y.length===0?h:new C.eXI(i)
s=i.aVZ(A.vu,r,p,i.gcgX(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gJ(o)
p=B.E(i.abQ(new C.eXJ(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gJ(n)
o=B.a([w,A.aA,D.fls,A.at,D.fof,A.by,u,A.N,D.fmI,A.aA,v,A.by,B.A(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.A(B.a([p,A.bp,B.E(i.abQ(new C.eXK(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fpZ],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.beJ,A.q,1)
w=C.agv(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bLc,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f4Q,h,h,h),B.aL(!1,h,!0,D.e6a,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXL(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b83,h,u,v,h,h,A.n),h,h,h,h,D.bpO,h,h,h),h)],t))}o.push(A.by)
o.push(D.fco)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cZg[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bD(1,A.bh,new B.D(A.jf,B.aE(h,B.dj(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eF,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXM(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fut)
o.push(A.N)
o.push(B.cp(new C.eXN(i)))
o.push(A.by)
o.push(D.fjy)
o.push(A.N)
w=B.a([i.b5n("auto","Let AI choose",A.dW,A.PM)],t)
for(v=x.O,m=0;m<11;++m){j=D.vT[m]
u=j.d
w.push(i.b5n(j.a,j.b,j.c,B.a([B.b0(A.d.gJ(u).a),B.b0(A.d.gJ(u).b)],v)))}o.push(B.bW(A.bz,w,A.bq,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iE(h,A.bo,h,h,h,new C.eXF(i),D.bGn,D.ftJ,h,D.feG,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aOG,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc6W()
v=B.fm(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eNI:A.Ge
o.push(new B.a7(h,54,B.lt(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p7,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vm,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aap,h,h,h,h,h,h,h,h),h)},
bMR(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eXc(this,p,d)
if(d===D.Cz)return new C.aDf(p,o,q)
w=B.m(16)
v=p?E.vN:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.X(p?A.ef:C.hDA(d),A.c,q,q,q,20)
r=C.hDB(d)
return B.aE(q,B.dj(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eh)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5n(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dj(v,B.A(B.a([w,L.Iz,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eF,v,v,v,L.aia,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXr(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_X.prototype={
R(){return new C.aGH(new B.as(A.as,$.aw()))}}
C.aGH.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adI=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eWY(r))
w=1
break}B.eU()
r.m(new C.eWZ(r))
t=4
q=C.i3R(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i3B(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eX_(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fWW()
f=$.Co.h(0,k.a)
o=f==null||J.cm(f)?null:J.fo(f)
if(o==null){r.m(new C.eX0(r))
w=1
break}n=C.i3z(o,r.a.c)
C.i3v(r.a.c.a)
$.fWc=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fZG(j)
h=C.fZH(r.a.c)
e=C.fZI(r.a.c)
w=7
return B.b(C.bBo(k,r.a.c.a,j,h,new C.eX1(r),i,e,a0),$async$adI)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eX2(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eE,i).w
i=B.aI(d,A.bU,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b3,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.am2,A.f,j,j,D.aZs,j,34,j,j,j,j,j,34),A.av,D.bx5],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7g,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.a9W),j,j,j,j,j,j,j,j,A0.II,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPp,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cVE[q]
o=A.c.j(0.06)
n=k.e?j:new C.eX3(k,p)
r.push(B.mG(j,o,new B.x(p,j,Ay.T6,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uP,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.S,B.bW(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOG,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc6X()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.f2.j(0.5)],x.O):D.ctT
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e66:D.bKM
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i5,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vm,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aap,j,j,j,j,j,j,j,j),j)}}
C.b0r.prototype={}
C.aDf.prototype={
R(){return new C.bjo(null,null)}}
C.bjo.prototype={
gawy(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pH,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawy().q()
this.buo()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawy(),new C.ecA(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d0n[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xe.j(0.25+r*0.6).gp(0)
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
C.ar7.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Zj.prototype={
R(){return new C.aAI()}}
C.aAI.prototype={
gahO(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agI(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA4(){var w=this.e
return w===$?this.e=C.fZG(this.a.c).t(0,D.Cz):w},
a7O(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7O=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dhZ(s))
u=3
r=A.d.i1(D.vT,new C.di_(s))
q=B.db(C.fZG(s.a.c),x.Q)
l=q
J.hD(l,D.Cz)
p=l
if(s.gA4())J.ch(p,D.Cz)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA4()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fZH(i.c)
g=C.fZI(s.a.c)
w=6
return B.b(C.bBo(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7O)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agI(q,s.gahO())
f=q==null?null:q.b
n=f==null?s.gahO():f
if(!J.z(n,r.a)&&!s.gA4())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.di0(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7O,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.di3(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cC,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vT[w]
u=o.gahO()
t=o.f?n:new C.di4(o,v)
f.push(new C.brQ(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gA4()?D.bWq:n
if(o.gA4())s=n
else s=m?A.bm:A.bL
r=B.X(A.dW,o.gA4()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA4()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA4()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA4()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.aa4(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.di5(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agW,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f58,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fc,n,n,A.ah)
u=o.f?n:o.gbzt()
t=B.bl(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.v(B.a([new B.D(D.bsM,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Fb,new B.a7(1/0,50,B.bG(B.eE(B.av(o.f?A.rE:D.flV,n,n,n),n,new B.o(n,n,n,s,n,D.bUY,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tx,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brQ.prototype={
B(d){var w=null,v=this.c,u=A.d.gJ(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.l6,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lx,w,w,B.d(v.b,w,w,w,w,w,w,D.f56,w,w,w),w)],x.p)
if(q)v.push(D.aVj)
return B.aE(w,B.dj(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eF,w,w,w,A.co,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ecx.prototype={
aE9(d,e,f){return e+"@"+A.a.aT(A.o.fS(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wp(d,e){return this.aE9(0,e,null)}}
C.aLg.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.b0n.prototype={
B(d){var w,v,u=null,t=C.fYw(this.c)
if(t==null)w=D.bkR
else{w=B.aI(d,u,x.w).w.cGR(D.bpk,D.eMX)
v=this.d
w=B.t8(B.e1(B.ant(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl1(w,u),u),A.f,A.du)}}
C.bl1.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dbG[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anX,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dcQ[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anX,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cLF,D.bTm,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aVv,B.p(t,t,A.f,t,t,D.aZL,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bmn,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l9.prototype={
pu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mD,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.ro(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fr,t.l(),3,"",0,0,"",D.cm,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mC,"","","Welcome",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.ro(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uc,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mC,"","","Agenda",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.ro(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mC,"","","Key Point 1",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.ro(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mC,"","","Key Point 2",D.dd)
r=C.cC()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Br(l,l,l,l,D.Cv,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.ro(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mC,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.En.prototype={
by(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iX.prototype={}
C.Ee.prototype={
gaJU(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agv(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a33(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ee(v,u,t,d==null?w.d:d)},
Fp(d){return this.a33(null,d,null,null)},
aCT(d){return this.a33(null,null,null,d)},
cGP(d,e){return this.a33(d,e,null,null)},
bau(d){return this.a33(d,null,null,null)},
baB(d){return this.a33(null,null,d,null)}}
C.N7.prototype={
R(){return new C.biL(new B.eS(0,$.aw()),null,null)}}
C.biL.prototype={
a_(){var w,v=this
v.a1()
w=v.qv(new C.dTm(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iT(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.U$=$.aw()
w.P$=0
this.btR()},
B(d){var w=C.agv(this.a.c.a)
if(w==null)w=A.d.gJ(D.Gz)
return B.cp(new C.dTl(this,w,C.hdx(this.a.c.d)))}}
C.bqp.prototype={
B(d){return B.nL(A.UT,this.e,new C.eWb(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bdP.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRJ(d,e,v)
break
case"confetti":w.bFZ(d,e,v)
break
case"crown":w.bHB(d,e,v)
break
case"aurora":w.bAy(d,e,v)
break
case"champagne":w.bDO(d,e,v)
break
case"diamonds":w.bJM(d,e,v)
break
case"starburst":w.cu3(d,e,v)
break
case"balloons":w.bAM(d,e,v)
break
case"galaxy":w.bOC(d,e,v)
break
case"redcarpet":w.cl6(d,e,v)
break
case"coins":w.bFl(d,e,v)
break
case"lanterns":w.bYL(d,e,v)
break
case"hearts":w.bWp(d,e,v)
break
case"petals":w.cgg(d,e,v)
break
case"butterflies":w.bCP(d,e,v)
break
case"neon":w.c1E(d,e,v)
break
case"disco":w.bJX(d,e,v)
break
case"sunrise":w.cvA(d,e,v)
break
case"pearls":w.cfk(d,e,v)
break
case"snow":w.ctJ(d,e,v)
break
case"laurel":w.bYR(d,e,v)
break
case"ribbons":w.cnF(d,e,v)
break
case"kente":w.bYz(d,e,v)
break
case"trophy":w.cze(d,e,v)
break
case"shooting":w.crx(d,e,v)
break
case"bokeh":w.bB6(d,e,v)
break
case"orbits":w.ccZ(d,e,v)
break
case"flowers":w.bNT(d,e,v)
break
case"music":w.c1o(d,e,v)
break
case"mandala":w.c_Q(d,e,v)
break
case"sparklers":w.ctS(d,e,v)
break
case"city":w.bED(d,e,v)
break}},
rs(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.ny
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
lH(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cW(q,v)*2.5)+C.cW(q,u)*6.28)+1)/2
this.rs(d,new B.u(C.cW(q,t)*o,C.cW(q,s)*n),m*(0.006+0.014*C.cW(q,r))*(0.5+p),h,p*p)}},
aRJ(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lH(c3,c4,c5,40,A.c,10)
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
if(i<0.22){a0=B.lf(new B.u(g,c1),new B.u(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rq(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.lf(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.ny
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cW(h,b1+120)>0.5)this.rs(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFZ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.M()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d6D,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cW(u,1)))+C.cW(u,2)*w,w)
s=C.cW(u,3)
r=Math.sin(a3*(0.8+C.cW(u,4))+u)
q=h*(0.012+0.012*C.cW(u,5))
p=Math.cos(a3*(2+3*C.cW(u,6))+u)
o=D.Pe[A.o.D(A.k.bt(C.cW(u,7)*5),0,4)]
J.bz(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cW(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cl(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lH(a1,a2,a3,25,A.bK,30)},
bHB(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b9Q],v),a4,a4).av(0,B.bU(w,u)))
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
n.saq(new B.a8(A.b_,A.b5,A.x,D.d5s,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.ekN,D.eeL,D.etS],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.hU.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wZ(i),u=B.a([],x.X),o=new B.vs(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jU(y.M));--f
o.jo()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cI([new B.H6(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fA
f.r=A.bK.gp(0)
l=f.H()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rs(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lH(a8,a9,b0,45,A.bK,40)},
bAy(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lH(a8,a9,b0,60,A.c,50)
w=[D.eEj,D.eE1,D.eDW,D.eFh]
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
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.ny
n.z=new B.hu(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.ny
n.z=new B.hu(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cW(a4,1))+C.cW(a4,2)*a3,a3)
r=C.cW(a4,3)
q=Math.sin(b0+a4)
p=C.cW(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.xd.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.ny
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.M()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hG.j(0.25+0.1*h),D.WF],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
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
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Pe[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cW(w,1)))+C.cW(w,2)*o,o)
r=k*(0.1+0.8*C.cW(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cW(w,4))
if(n<f){this.rs(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.As.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJM(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lH(a9,b0,b1,30,A.l8,60)
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d1n,a5,a5).av(0,B.cl(A.J,k*1.2,o)))
a2=g.H()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cF(g)).a,a2)
a2.delete()
a3=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
cu3(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bK.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bt(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cW(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.blL.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rs(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pe[A.o.D(A.k.bt(C.cW(t,4)*5),0,4)],u)}},
bAM(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.av5[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cl(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aVy,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auX,a3).av(0,a2))
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
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.av5[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bOC(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lH(b1,b2,b3,50,A.c,70)
for(w=[D.eEr,D.eE7,D.eEd],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cW(i,4)).gp(0)
a0.a=A.ny
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.M()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.As.j(0.55),D.aex],u),a4,a4).av(0,B.bU(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bt(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lf(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lf(a3,a5,0.6)
a6.toString
a8=B.M()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rq(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bB(a6,a5,a8)}},
cl6(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.As.j(0.28),D.aex],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.ny
l=o.H()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.es:A.eO)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cU(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
v.saq(D.bUS.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rs(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bFl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cW(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cW(t,2))+C.cW(t,3)*r,r)-q
o=C.cW(t,4)*i
n=Math.cos(f*(2+3*C.cW(t,5))+t)
m=Math.abs(n)
l=B.cl(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dg0:D.czx,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.biJ.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rs(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lH(d,e,f,30,A.bK,110)},
bYL(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lH(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.WS.j(0.45*k),D.adn],u),d,d).av(0,B.bU(new B.u(l,m),j)))
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.ba0,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b5,A.x,B.a([D.bel,i],u),d,d).av(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=D.cTC[A.o.F(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rR,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1I,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lH(a3,a4,a5,30,A.iq,130)},
cgg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.ctS:D.d2C
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lH(d,e,a0,25,A.bK,140)},
bCP(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lH(b0,b1,b2,40,A.bK,150)
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
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d2m:D.d4X,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AA.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bi1.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1E(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.aw7[t].j((1-s)*0.9).gp(0)
q.z=new B.hu(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.aw7[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hu(A.a9K,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bJX(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cW(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cW(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.nD,A.dv][A.o.F(p,4)]
j=C.cW(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.ny
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
a3.qs(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c0(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rs(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cvA(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bK.j(0.1).gp(0)
o=r.H()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.M()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b66.j(0.6),D.adn],x.O),h,h).av(0,B.bU(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.M()
d.saq(D.ecq.av(0,B.bU(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cW(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cl(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()
i=B.cl(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()}this.lH(a2,a3,a4,20,A.hU,180)},
cfk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
q.push(new B.b5(0,d))
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
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cy,A.j6,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pg,0.5,A.x,f,0,D.d8d,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lH(a1,a2,a3,25,A.c,190)},
ctJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cW(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cW(r,2))+C.cW(r,3)*p,p)
n=C.cW(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
h.delete()}v.restore()}this.lH(d,a0,a1,40,A.eu,200)},
bYR(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bUE.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.baf.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rs(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lH(a3,a4,a5,40,A.bK,210)},
cnF(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hG,A.hU],a6),B.a([A.ou,A.iq],a6),B.a([A.aE,A.eA],a6)]
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
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avM,new B.mk(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lH(a8,a9,b0,40,A.c,220)},
bYz(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1L[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1L[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rs(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1L[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cze(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c0(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.das,A.avc,null).av(0,new B.a9(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rs(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bG_(a4,a5,a6,60)},
bG_(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cW(p,31))+C.cW(p,32)*v,v)
n=C.cW(p,33)
J.bz(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cl(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pe[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
crx(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lH(a0,a1,a2,70,A.c,250)
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.rq(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rs(a0,i,p,A.c,1-m)}},
bB6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.F(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.axA[l].j(n).gp(0)
m.a=A.ny
m.z=new B.hu(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axA[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ccZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bz(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cl(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c0(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hU.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hG.j(0.4).gp(0)
k.z=new B.hu(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lH(d,e,f,45,A.bK,270)},
bNT(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.d_C[A.o.F(o,5)]
J.bz(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hG.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lH(a5,a6,a7,30,A.hU,280)},
c1o(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.aui[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.aui[A.o.F(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c_Q(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bK,A.nD,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.M()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hG.j(0.25),D.WF],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.ae(w,a4,a5)
this.lH(a7,a8,a9,30,A.bK,300)},
ctS(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hU,A.hG.j(0.6),D.WF],o),null,null).av(0,B.bU(new B.u(j,i),p)))
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
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hU,A.aH,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.ny
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
g.delete()}}}this.lH(b0,b1,b2,35,A.bK,310)},
bED(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRJ(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cW(n,1))
l=a8*(0.14+0.24*C.cW(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bVA.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bt(m/q)
f=A.k.bt(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cW(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aZg.prototype={
B(d){var w,v=null,u=new C.c7P(),t=new C.c7R(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.an5,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c7Q(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gz[w]))
return B.bW(A.bz,s,A.bq,12,10)}}
C.YS.prototype={
R(){return new C.az5()}}
C.az5.prototype={
gvw(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYF(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b4,A.aN),$.aw())}return v},
gawz(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJU()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b4,A.aN),v)}return t},
q(){var w=this.gaYF(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gawz()
w.U$=v
w.P$=0
this.a2()},
Zz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().BT(90,700,700,A.eG),$async$Zz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Zz)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahq(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7b(r,n,p))
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
return B.i($async$Zz,v)},
aYE(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPu,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agv(p.gvw().a)
if(n==null)n=A.d.gJ(D.Gz)
w=p.gvw()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.N7(p.gvw(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hq(A.mx,new C.d7g(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hq(D.bFi,new C.d7h(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPo,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYF(0),o,o,o,o,o,2,p.aYE("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7i(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hq,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hG.j(0.6),A.q,1)
if(p.gvw().d.length===0)q=D.bID
else{q=C.hdx(p.gvw().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fL(q,A.A,o,o,A.cl,A.bS,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6Y(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvw().d.length!==0)r.push(B.aH(o,o,o,o,D.a0z,o,o,o,new C.d7j(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bm(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawz(),o,o,o,o,o,2,p.aYE("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7k(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dm,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dk(D.bHw,D.fvo,new C.d7l(p,d),B.bl(A.aw,o,o,o,A.w,o,A.ck,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZW,o,o,o,o,A.F8,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.Zc.prototype={
R(){return new C.bfi(new B.as(A.as,$.aw()))}}
C.bfi.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bU,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cC,l,o,o,o,o),o,o,o,new C.ddY(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cL5[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uB,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.ddZ(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hK,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C0(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQm,new C.de_(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cz(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tx,A.Ym,o,o,o),!0,!1,A.af,!0,!0)}}
C.beG.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eL()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.M()
u.z=A.QO
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
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.ku),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lq
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iU(a1))
v=new B.Sa(new B.vs(B.wZ(a4),!1,B.a([],x.X))).gJ(0)
a4=v.a
a3=v.b
a4.jo()
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
g.delete()}}a4.jo()
e=u[a3].Mr(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mB
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.bnh.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eL()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.ha()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galQ()*1.4
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hu(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
if(e!=null)i.by(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cSn,null).av(0,u))
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
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
v.a=A.ny
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
r=new C.d6T(this,r*0.16,d,u,w)
t=e.gdO()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xp.prototype={}
C.Ip.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aqx.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uz.prototype={
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
u.n(0,"decoration",C.hRE(v.z))
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
n=B.B(new B.K(n,new C.cde(),m),m.k("ak.E"))
return C.ro(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.B(new B.K(n,new C.cdf(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i_.prototype={
gb8P(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRS(){if(!C.ku(this.w))return!1
var w=this.gb8P()
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
r=B.B(new B.K(r,new C.cd3(),q),q.k("ak.E"))
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
v=B.U(w).k("K<1,a4<n,@>>")
w=B.B(new B.K(w,new C.cd4(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jF.prototype={}
C.b0q.prototype={
B(d){return B.cp(new C.cd9(this))}}
C.anJ.prototype={
R(){return new C.biv(null,null)}}
C.biv.prototype={
gaYG(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYG().q()
this.btB()},
B(d){return B.c6(this.gaYG(),new C.dFC(),this.a.c)}}
C.aKv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.acX.prototype={
Pu(d,e,f,g){return this.bNA(d,e,f,g)},
bNA(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
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
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dl,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.E(new C.ade(A.hA,"Download",A.bY,new C.eoZ(w,d),!0,v),1),A.av,B.E(new C.ade(A.vz,"Share",A.bj,new C.ep_(w,d),!1,v),1),A.av,B.E(new C.ade(A.hl,"Safari",A.aZ,new C.ep0(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ep1(d),v,v))
return B.bm(!0,new B.D(A.pK,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.Ff,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.ade.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bv8,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0o.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apJ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6Z().ak2(1.35)
s=B.av_(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bz3(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bQC,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wd,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zq,A.an,h,A.SX,h,h)
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
w=n?t.cGC(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.D5
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SO:s
$.W()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fA
j.r=A.aB.gp(0)
j=i.cnI(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cnG(k,t,l?A.SO:s)],x.p),h)}else w=i.cnH(p,t,g.k2?A.SO:s,m)
v=new B.nc(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bX3()
case 3:return i.cfj()
case 2:return B.b3(h,h,h,new C.b0l(g,h),A.f0)
case 5:g=g.r
return new C.b0n(g,!i.e&&i.z==null,h)}},
c6Z(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jW
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adl,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cf
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mI
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cR(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cR(A.b8,new B.u(-3*v,0),0),new B.cR(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Kp
break
case"ice":v=o.d
e=B.a([new B.cR(A.aS,A.J,10*v),new B.cR(A.cy,A.J,22*v)],x.r)
k=A.P
w=A.eu
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jW
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cUm[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.M()
v=o.d
f.saq(D.bT3.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Ke,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.M()
v=o.d
f.saq(D.bTo.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cR(l.j(0.45),new B.u(u,u),0),new B.cR(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jW
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayw(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eKq.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cd7(h)
v=r.k2?C.i3a(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.D5
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xn(B.dh(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cnI(d,e,f,g){return this.ayw(d,e,f,!1,g)},
cnG(d,e,f){return this.ayw(d,e,f,!1,null)},
cnH(d,e,f,g){return this.ayw(d,e,f,g,null)},
bz3(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bX3(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.X(s.b===D.kY?A.G9:A.Bo,A.az,t,t,t,32),t,t,t)}w=u.bC2(r)
if(s.b===D.kY){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cq,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aN2(r,!0)
return C.fyw(s.go,v,s.id)}return w},
aN2(d,e){var w,v,u,t
try{w=C.i3t(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.cd6(this,w,v,e))
return u}catch(t){return D.ab5}},
bC2(d){return this.aN2(d,!1)},
cfj(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4a
return C.i3L(v,w.db,w.dx)}}
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
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
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
this.bvU()},
aNd(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.dl,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bzh(){var w,v=this,u=null,t=v.aNd("Slide A",A.bj),s=v.aNd("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f3H(v,s,t),u)},
B(d){return this.bzh()}}
C.aIJ.prototype={
j3(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.Uz.prototype={
R(){return new C.biI(null,null)}}
C.biI.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AQ,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRz(u),x.a)},
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
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRy(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btQ()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRx(this),v.d)}}
C.Io.prototype={
B(d){return B.cp(new C.cd_(this))}}
C.ayQ.prototype={
R(){return new C.bdb()}}
C.bdb.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LB,new C.d47(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Uz(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ci,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Uz(t,B.p(p,D.fhc,A.f,p,p,new B.o(s,p,B.I(A.b3,A.q,1),r,p,p,A.n),p,p,p,p,A.je,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b_u,A.bd)}}
C.a7j.prototype={
R(){return new C.bjm(null,null)}}
C.bjm.prototype={
gaZc(){var w=this.a
if(w.e)w=D.eKx.t(0,w.c)||D.aME.t(0,A.d.gJ(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZc()){w=C.i1Q(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bum()},
B(d){var w,v=this,u=v.d
if(!v.gaZc()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ecg(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZj.prototype={
B(d){var w=null
return B.av(C.b0p(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bel.prototype={
j3(d){return C.a1Y(this.b,new B.a9(0,0,0+d.a,0+d.b).cB(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpi.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cB(-this.d),g=this.b,f=C.a1Y(g,h),e=a1.gdO(),d=new C.eTP()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aO9.av(0,h))
a0.aO(f,w)
g=C.a1Y(g,h.cB(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.biv.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eU6.av(0,h))
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
g.saq(D.eU4.av(0,h))
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
w.saq(D.eU_.av(0,h))
a0.aO(f,w)
w=C.a1Y(g,h.cB(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b7z.gp(0)
a0.aO(w,v)
g=C.a1Y(g,h.cB(e*0.03))
v=d.$1(e*0.004)
v.r=D.ba3.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aO9.av(0,h))
a0.aO(f,g)
for(g=B.wZ(f),w=B.a([],x.X),g=new B.vs(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jU(y.M));--q
g.jo()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bt(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jo()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jo()
m=w[q].Mr(p*n/o).a
l=D.cRG[A.o.F(n,4)]
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.saq(D.eU8.av(0,h))
g.z=new B.hu(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.saq(D.eU5.av(0,h))
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
C.a7C.prototype={}
C.NA.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aDG(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge_(){return this.c},
gTc(){return this.r},
gTd(){return this.w},
gLi(){return this.x}}
C.aDG.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fDs()
$.hl9=new C.evc(v)
w=B.bj(null,A.AO,null,1,null,v)
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
iY(d){if(d===A.zT||d===A.rT||d===A.rS||d===A.ph)this.tr()},
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
v.P$=0}t.buA()},
gaaS(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOq(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abl(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRS())return!1
return!0},
kc(){return this.abl(null)},
ai5(){var w=this.c
if(w==null)return
w.I(x.q).f.S(D.eSo)},
qd(){if(!this.kc())return!1
this.ai5()
return!0},
aqa(d){var w,v,u,t,s,r=this
if(r.abl(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hkg(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zJ(){return this.aqa(null)},
I7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqz(k),$async$I7)
case 3:j=e
w=4
return B.b(C.apb(k),$async$I7)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fSJ(j,t.bZW())
w=t.gaaS()?5:7
break
case 5:r=t.gOq()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZx(r),$async$I7)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.erA())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.erB())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yq(m==null?"":m)!=null)continue
C.fDE(n,s)
p=!0}t.m(new C.erC(t,s))
if(p||s.length>J.ad(j))t.tr()
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
bZW(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ku(w)&&w!==q}if(w)p.push(r)
return p},
cm5(d){var w,v=this,u=d.w
if(!C.ku(u)||u==="hati_kiapo_uongozi")return
v.a9I(d)
w=A.d.bd(v.d,new C.eta(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hC())
v.db=!1},
cgf(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ku(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cm5(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i_>")
s=B.B(new B.cQ(new B.a1(s,new C.esZ(),w.k("a1<1>")),new C.et_(),v),v.k("J.E"))
return s},
O6(d){return this.bNX(d)},
tr(){return this.O6(null)},
bNX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cgf()
w=3
return B.b(C.Vx(d==null?t.a.c:d,s),$async$O6)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqa(r)?4:5
break
case 4:w=6
return B.b(C.a6Q(r),$async$O6)
case 6:q=r.x
p=A.a.i(q==null?t.gOq():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.eqY())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.ck(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
pg(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.ku(u.w))===!0?A.hX:A.lJ
v.at=B.cM(w,new C.eui(v))},
aYH(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeL(u.hC(),v.f,v.r))
if(w.length>40)A.d.cC(w,0)
A.d.a9(v.ay)},
czs(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeL(w.e.hC(),w.f,w.r))
w.m(new C.ev8(w,v.pop()))
w.pg()},
clb(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeL(w.e.hC(),w.f,w.r))
w.m(new C.et8(w,v.pop()))
w.pg()},
oc(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.euW(u))
if(w>=0){u.d[w]=u.e.hC()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xa(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xk(){var w,v,u,t
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
u=v.k("cQ<1,n>")
t=B.db(new B.cQ(new B.a1(w,new C.euX(),v.k("a1<1>")),new C.euY(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
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
m=w.cg(0,p,new C.euZ(n))
s.cg(0,p,new C.ev_())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Ht(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqm(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOq()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hC())}u.oc()
u.pg()},
ais(d,e){var w,v,u,t,s=this
if(s.kc())return
w=s.Xa(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ku(v.w))===!0
if(u){C.i1U(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i1V(t,w.d+w.f*0.5)}}s.Ht()
s.oc()
s.pg()
if(u&&s.c!=null)s.m(new C.ev9())},
cAw(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ht()
w.oc()
w.pg()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqi(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i_W(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gJ(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXi(v)
t=q.bXh(v)
s=B.b0(v.e)
r=v.f
return new C.jF(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hDM(o)},
bXi(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXh(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aem(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaS()){w.c.I(x.q).f.S(D.eR0)
return}w.a9I(d)
w.aZT(C.bBp(d))
return}if(C.cdT(v)){w.a9I(d)
w.aZT(d)
return}w.m(new C.esh(w,d))},
aqK(){var w,v,u,t,s,r,q=this
q.a1D(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ku(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqk(q))
if(r&&q.c!=null){u.toString
q.Jp(u,s)}return}q.tr()
q.m(new C.eql(q))},
aZS(d){this.a9I(d)
this.a_9(d,!0)},
a9I(d){if(!C.ku(d.w))return
C.fDE(d,this.d)},
a_9(d,e){return this.cca(d,e)},
aZT(d){return this.a_9(d,!1)},
cca(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBp(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOq():r)
t.dy.W(0,q.toLowerCase())
C.apc(t.a.c,q)}r=s}else r=d
w=C.cdT(r.w)?3:4
break
case 3:w=5
return B.b(t.a9J(r),$async$a_9)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.esE(l))
o=l.a.hC()
n=C.ku(o.w)&&C.i35(o)
t.m(new C.esF(t,o,p))
if(n){m=A.d.bd(t.d,new C.esG(o))
if(m>=0){t.d[m]=o.hC()
t.tr()}}if(!t.abl(l.a))t.Yi()
r=!1
if(t.c!=null)if(!t.abl(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqa(r)&&C.fzH(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.S(D.eRA)
case 1:return B.h(u,v)}})
return B.i($async$a_9,v)},
a9J(d){return this.bM9(d)},
bM9(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ld(r.c,A.z8),$async$a9J)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kS(!1,r,s.c,s.d,null,A.z8,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9J,v)},
o3(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cdT(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdh(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o3,v)},
ae3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esg(),s,null,!0,!0,x.H),$async$ae3)
case 3:if(t.c==null){w=1
break}t.aqK()
case 1:return B.h(u,v)}})
return B.i($async$ae3,v)},
ae2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esd(),s,null,!0,!0,x.H),$async$ae2)
case 3:if(t.c==null){w=1
break}t.m(new C.ese())
t.aqK()
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
Yi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yi)
case 3:r=e
if(B.kg(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Yi)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.ePE)
case 1:return B.h(u,v)}})
return B.i($async$Yi,v)},
Jp(d,e){return this.cmx(d,e)},
cmx(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
bYP(){var w,v,u,t,s=this
if(!s.gaaS()){s.c.I(x.q).f.S(D.ePR)
return}w=s.gOq()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag4(u,t,v,new C.erw(s),new C.erx(s),w)},
aen(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aen=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.esn(u),s,!0,!0,!1,A.ls,!1,!1,x.N),$async$aen)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ag8(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag5(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag6(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ag7(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYP()
return B.h(null,v)}})
return B.i($async$aen,v)},
cbh(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYH()
w=C.cC()
v=C.Br(t,t,t,t,D.Cv,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eso(u,v))},
a99(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a99=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7B(s),$async$a99)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.eqo())
t.d3(new C.eqp(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
agl(d,e,f,g){var w=null,v=g?A.dq:A.bL,u=B.I(g?A.b3:A.cq,A.q,1)
return B.hq(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
a_8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qd()){w=1
break}s=t.jO()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a1<1>")
p=B.B(new B.a1(r,new C.esz(),q),q.k("J.E"))}o=s!=null&&s.b===D.lr?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.S(D.eRL)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esA(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_8,v)},
aeE(){return this.cc9()},
cc9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7n(s,t.f+1,o),$async$aeE)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kC(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.esC(q))
t.d3(new C.esD(p,t,o,q,r))
t.c.I(x.q).f.S(D.eS9)
case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
aeL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()||!t.zJ()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a1<1>")
p=B.B(new B.a1(r,new C.esU(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.S(D.ePp)
w=1
break}o=new B.K(p,new C.esV(),B.U(p).k("K<1,N>")).fa(0,new C.esW())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.esX(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeL)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.esY())
case 1:return B.h(u,v)}})
return B.i($async$aeL,v)},
aeq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeq=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hmf(s,new C.Ee(r,q,p,o==null?"":o)),$async$aeq)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.esp(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agv(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeq,v)},
a9C(){return this.bLw()},
bLw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7A(s,t.f+1,l),$async$a9C)
case 3:r=e
q=$.fWc
$.fWc=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.eqF())
t.c.I(x.q).f.S(D.ePg)
w=1
break}if(!q){s=r.CW
s=C.hl7(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.eqG(t,l,r))
t.c.I(x.q).f.S(D.eSD)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kC(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.eqH(p))
o=s.length
t.d3(new C.eqI(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9C,v)},
aPi(d,e){if(e){this.afd()
return}this.cbh(d,!1)},
bHb(){return this.aPi(null,!1)},
afd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bX,null,new C.et3(t),r,!0,!0,!0,A.p1,!1,!1,x.N),$async$afd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.et4(t,C.i_V(s).pu()))
case 1:return B.h(u,v)}})
return B.i($async$afd,v)},
d3(d){var w=this
if(w.qd())return
w.Ht()
w.aYH()
w.m(d)
w.JP()
w.oc()
w.pg()},
a7D(){this.d3(new C.epj(this,D.mC))},
aQL(){var w=this.gdr()
if(w==null)return
this.d3(new C.eqD(this,w))},
aPU(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.eqB(this))},
b1T(d,e){if(this.e==null||d===e)return
this.d3(new C.etc(this,d,e))},
NE(d){return this.bJb(d)},
bJb(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOq():s)
w=5
return B.b(C.apa(t.a.c,r),$async$NE)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aqB(s)
w=6
return B.b(C.b0t(t.a.c,s),$async$NE)
case 6:if(t.c==null){w=1
break}t.m(new C.eqx(t,d))
w=7
return B.b(t.tr(),$async$NE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NE,v)},
cmu(d,e){var w=this
if(d.z){w.ai5()
return}w.m(new C.etb(w,d,e))
w.pg()},
jO(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wb(d){return this.ch.cg(0,d.a,new C.eqn(d))},
asA(d){return this.CW.cg(0,d.a,new C.eqZ())},
a1D(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xa(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jD()},
b5h(){return this.a1D(!0)},
a1B(d){var w,v,u=this
if(u.qd())return
if(!u.zJ())return
w=u.Xa(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wb(w).saV(0,"")}u.m(new C.euU(u,d))
$.aW.x1$.push(new C.euV(u,d,w))},
b5N(d){var w=this
if(d.b===D.cQ&&!w.kc()&&w.zJ()){w.a1B(d.a)
return}w.ayW(d.a)},
ayW(d){var w,v,u,t,s,r=this
if(r.kc())return
w=r.r
if(w!=null&&w!==d){v=r.Xa(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.euj(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jD()}},
aLB(){this.d3(new C.epk(this))},
oX(d){return this.byk(d)},
byk(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$oX)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eph(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oX,v)},
Vk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$Vk)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.ep7(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vk,v)},
Ve(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ve=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CA(t.a.c),$async$Ve)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gam(s)){t.c.I(x.q).f.S(D.eTc)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gJ(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.ep4(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Ve)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.ep5(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Ve,v)},
arA(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b4(w.gdr().z,new C.eqz(v))){w.c.I(x.q).f.S(D.eSd)
return}if(w.w===v)w.a1D(!0)
w.d3(new C.eqA(w,v))},
bFr(){var w=this.jO(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMi(d,e){var w=this,v=w.jO(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.epM(w,v,d,e,t,u))},
bzV(d){return this.aMi(d,null)},
a7V(d){return this.bA2(d)},
bA2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6c.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o3(),$async$a7V)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jO()
if(s!=null){r=s.b
if(r===D.cQ)t.bzV(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aMi(r.j(0.88),r)}w=1
break}t.d3(new C.epR(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7V,v)},
a7U(d){return this.bA0(d)},
bA0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jO()
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
return B.b(t.o3(),$async$a7U)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epP(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7U,v)},
bzL(d){var w=this.gdr()
if(w==null)return
this.d3(new C.epL(this,w,d))},
a_e(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i7w(r),$async$a_e)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oc()
t.m(new C.esO(t,s))
w=4
return B.b(t.tr(),$async$a_e)
case 4:if(t.c!=null)t.aem(s)
case 1:return B.h(u,v)}})
return B.i($async$a_e,v)},
a9u(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1D(!0)
t.oc()
s=t.c
s.toString
w=3
return B.b(C.QM(s,q),$async$a9u)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9u,v)},
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
F0(d,e){return this.cyV(d,e)},
cyV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F0=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qd()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1D(!0)
t.oc()
s=h.a=t.e.hC()}else{r=A.d.bd(t.d,new C.ev2(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.i0T(q?"":s)
o=C.hk3(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a1<1>")
n=B.B(new B.a1(s,new C.ev3(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cse(n.length,o,s),$async$F0)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i0N(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gJ(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.csd(n,o),$async$F0)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.i1(t.d,new C.ev4(s))
s=h.a.b
w=11
return B.b(t.csb(k.b,s),$async$F0)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.i0S(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.S(D.eTn)
w=1
break}w=12
return B.b(t.csc(j.a,s,o,j.c),$async$F0)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ev5(h,t,i))
t.pg()
case 1:return B.h(u,v)}})
return B.i($async$F0,v)},
cse(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.euz(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
csd(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.euy(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
csb(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.eus(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
csc(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.euu(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaW(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaX(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ey,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f2L,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aU1(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Tv,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aU4(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nt,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Br,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ers(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bWe(d,e,f,g,h,i){return this.aU4(d,e,f,!1,g,h,i)},
atU(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dl,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YH,w,w,w)},
aU3(d,e,f){var w=null,v=B.bl(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nr,w,w,w),new C.err(d,f),v)},
aU2(d,e){return this.aU3(d,e,null)},
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
for(l=A.d.gaf(o.z),n=new B.fe(l,new C.euk());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9t(l.charCodeAt(0)==0?l:l,r.b),$async$JG)
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
return B.b(B.a9t(A.R.ao(r.ag(),null),r.b+".json"),$async$HO)
case 4:q=t.a
w=5
return B.b(B.p0(q.c,q.d),$async$HO)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HO,v)},
b50(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oc()
u.tr()
w=u.c
w.toString
v=B.ea(new C.euT(u,t),!1,null,x.z)
B.a5(w,!1).c8(v)},
H1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$H1)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fDR(),$async$H1)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i3F(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.aB,null,new C.epc(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H1)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.epd(t,s))
w=1
break}if(p==="split")t.d3(new C.epe(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H1,v)},
N_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}w=3
return B.b(t.o3(),$async$N_)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPi(s,null,null),$async$N_)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epi(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N_,v)},
b1G(d){var w=this.e
if(w==null||!C.ku(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNA(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPi(s,t==null?null:B.b0(t),u)},
a7B(d){return this.byb(d)},
byb(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zJ()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eTC)
w=1
break}w=3
return B.b(t.aNA(),$async$a7B)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.ep9(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7B,v)},
afZ(d){return this.cle(d)},
cle(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zJ()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eSL)
w=1
break}w=3
return B.b(t.aNA(),$async$afZ)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.et9(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afZ,v)},
c7Z(){var w,v,u=this
if(u.kc())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bz(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cxX()}},
cxX(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.ev0(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWz(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.erv(this,r,u.d))},
c0b(d){var w
if(this.kc())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fAs(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kY&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0c(d){var w
if(this.kc())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
if(!this.zJ())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fAs(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kY&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
N8(d){return this.bAs(d)},
bAs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$N8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zJ()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eRB)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ape(p),$async$N8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.S(D.eSf)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gJ(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6Q(r)
w=1
break}t.m(new C.epV(t,d,o))
t.oc()
$.aW.x1$.push(new C.epW(t))
case 1:return B.h(u,v)}})
return B.i($async$N8,v)},
Vi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$Vi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bC5(),$async$Vi)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.ep6(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vi,v)},
NS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$NS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jO()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fDI(r),$async$NS)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.eqX(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
iU(d){this.d3(new C.epf(this,d))},
q3(d){return this.bzE(d)},
bzE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qd()){w=1
break}m=!D.aMH.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o3(),$async$q3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H1()
w=1
break A
case"sign_paper":t.N_()
w=1
break A
case"hd_photo":t.Vi()
w=1
break A
case"sharpen":t.NS()
w=1
break A
case"print":t.Dm()
w=1
break A
case"rotate":s=t.jO()
if(s!=null)t.d3(new C.epo(s))
w=1
break A
case"text_box":t.aLB()
w=1
break A
case"picture":t.Vk()
w=1
break A
case"present":t.b50()
w=1
break A
case"new_slide":t.a7D()
w=1
break A
case"export_json":t.HO()
w=1
break A
case"outline_share":t.JG()
w=1
break A
case"flashcard_tool":t.v3(D.HC)
w=1
break A
case"quiz_tool":t.v3(D.HD)
w=1
break A
case"worksheet_tool":t.v3(D.HE)
w=1
break A
case"duplicate_el":s=t.jO()
if(s==null){w=1
break A}t.d3(new C.epp(t,s))
w=1
break A
case"delete_el":t.arA()
w=1
break A
case"bring_fwd":s=t.jO()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.epq(t,s))
w=1
break A
case"send_back":s=t.jO()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.epB(t,s))
w=1
break A
case"align_left":s=t.jO()
if(s!=null)t.d3(new C.epE(s))
w=1
break A
case"align_center":s=t.jO()
if(s!=null)t.d3(new C.epF(s))
w=1
break A
case"align_right":s=t.jO()
if(s!=null)t.d3(new C.epG(s))
w=1
break A
case"grayscale":case"brighten":t.NS()
w=1
break A
case"flip_h":s=t.jO()
if(s!=null)t.d3(new C.epH(s))
w=1
break A
case"flip_v":s=t.jO()
if(s!=null)t.d3(new C.epI(s))
w=1
break A
case"rectangle":t.oX(D.be)
w=1
break A
case"circle":t.oX(D.eK)
w=1
break A
case"triangle":t.oX(D.jG)
w=1
break A
case"arrow":t.oX(D.Cx)
w=1
break A
case"line":case"divider":t.oX(D.fr)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fe(q,new C.epJ()),o=0;p.C();){n=A.a.fD(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a1(n,new C.epK(),B.U(n).k("a1<1>")).gM(0)}t.c.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iU(C.iS(A.L,!1,t.gqi().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mD,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iU(C.iS(A.L,!1,t.gqi().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iU(C.iS(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uc,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iU(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.ub,0.8,0.1,0.22))
w=1
break A
case"quote":t.iU(C.iS(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iU(C.iS(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.uc,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iU(C.iS(A.dM,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bC7(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iU(C.iS(A.dM,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.epr(t))
w=1
break A
case"footer_bar":t.d3(new C.eps(t))
w=1
break A
case"highlight":t.d3(new C.ept(t))
w=1
break A
case"redact":t.d3(new C.epu(t))
w=1
break A
case"callout":t.d3(new C.epv(t))
w=1
break A
case"checkboxes":t.iU(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iU(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.epw(t))
w=1
break A
case"letter":t.iU(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bC7()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iU(C.iS(A.bg,!1,4279310375,A.aD,22,A.bl,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uc,0.8,0.1,0.12))
w=1
break A
case"toc":t.iU(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iU(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iU(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iU(C.iS(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mD,0.32,0.62,0.08))
w=1
break A
case"draft":t.iU(C.iS(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iU(C.iS(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.epx(t))
w=1
break A
case"progress":t.d3(new C.epy(t))
w=1
break A
case"stars":t.iU(C.iS(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q6,0.8,0.1,0.4))
w=1
break A
case"equation":t.iU(C.iS(A.L,!1,4279310375,A.aD,32,A.bl,A.P,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iU(C.iS(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ub,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.epz(t))
w=1
break A
case"compare":t.d3(new C.epA(t))
w=1
break A
case"link_text":t.iU(C.iS(A.bg,!1,4280640491,A.mI,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iU(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iU(C.iS(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.epC(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.epD(t,r))
w=1
break A
case"invoice":t.iU(C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iU(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iU(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bC7()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iU(C.iS(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iU(C.iS(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q3,v)},
crG(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eKu.t(0,this.z)},
crF(d){if(this.jO()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6D(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i3u(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NE,A.f,p,p,D.DO,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fy,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLM(d){var w,v=null,u=this.jO()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.Q6,new C.eqW(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
v3(d){return this.byj(d)},
byj(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMB.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o3(),$async$v3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epg(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eJg
w=h.e
if(w==null)return h.bC8()
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
p=B.aI(u,A.eE,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b9x
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRS()}else j=!1
if(j)k.push(new C.a7k(h.a.c,!1,h.e.gb8P(),h.gc7W(),g))
else if(s&&h.e!=null&&!h.kc()&&C.cdT(h.e.w)){j=h.a
k.push(new C.a7k(j.c,j.d,g,h.gc94(),g))}if(s)k.push(h.bLI(w,t,r))
if(s&&h.kc()){w=t?A.fm:A.kj
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bKn,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AV,A.ic,g,g,g))}w=!n
if(w&&!h.kc())k.push(h.c17(t,r))
if(w&&h.kc())k.push(h.cyW(t))
if(r&&h.jO()!=null&&w&&!h.kc())k.push(h.c13(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4w(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4w(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDq(v,t,!s||p),g),1))
if(h.crG(r)&&u&&s&&!h.kc())i.push(h.c7K(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kc()&&h.crF(!1))j.push(new B.a7(240,g,h.bOk(t),g))
k.push(B.E(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c14(t))
return B.c8(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bC8(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bL
v=r.a.e
u=r.c7_(A.bj,A.pO,new C.epZ(r),r.gcbe(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aLj(A.bj,A.hy,"Blank Presentation",new C.eq_(r)),1),A.av,B.E(r.aLj(A.aZ,A.vG,"Class Template",new C.eq0(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mH,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bz6(w))
else{t=new B.hY(t,B.U(t).k("hY<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eq1(r,w),x.l))}return B.c8(q,p,B.bm(!1,B.cz(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bK_(){this.m(new C.eqC(this))
var w=this.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jD()}},
aeF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jO()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esN(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeF,v)},
AG(d,e){return this.cs1(d,e)},
cs1(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hS(D.Wg,!0,"Dismiss",j,new C.eul(),new C.eum(d,e),A.ix,!0,x.N),$async$AG)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ai5()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRS()){r.ai5()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPj(d),$async$AG)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOI(j,q,d.b),$async$AG)
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
return B.b(r.F0(d,!1),$async$AG)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hS(D.Wg,!0,"Dismiss",j,new C.eun(),new C.euo(d),A.a1,!0,x.y),$async$AG)
case 20:if(g===!0)r.NE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afI("Rename presentation",d.b),$async$AG)
case 24:l=g
if(l!=null)r.cmu(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eup(r,k))
r.pg()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AG,v)},
b_x(d,e){var w=null
return B.bK(!1,D.fra,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lK,w,w,w,w,w,A.k1,w,w))},
bz6(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epl(this,d),null)},
bI5(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eqq(),x.dv).c_(0,new C.eqr()),v=B.B(w,w.$ti.k("J.E"))
return new B.D(G.agu,this.aLT(v,e,new C.eqs(),f),null)},
aLT(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
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
u.push(B.p(n,new B.cn(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nb,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eh)},
bz4(d,e,f){return this.aLT(d,e,null,f)},
bI7(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.daI
else if(v==="hati_kuhoweya")w=D.cY1
else{if(v==="hati_kiapo_uongozi")v=D.cL_
else v=C.ku(v)?D.cS0:A.PI
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eqv(this,f,d,e,w),null)},
c14(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jO()
if(i==null||i.b!==D.cQ)return A.bH
w=k.Wb(i)
v=k.asA(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.AY,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fmU,j,j,!0,j,j,new C.erW(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c_(new B.D(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bQk,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wd,j,j,j,j,j,j,!1,"\u2022",j,new C.erX(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zq,A.an,j,A.SX,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.A(B.a([k.tP(G.MD,j,new C.erY(k,i),d),k.tP(G.ZR,j,new C.erZ(k,i),d),k.tP(I.akL,j,new C.es_(k,i),d),k.tP(I.a_x,j,new C.es0(k,i),d),k.tP(k.bz2(i.as),j,new C.es1(k,i),d),k.tP(D.alT,j,new C.es2(k,i),d),k.tP(D.alS,j,new C.es3(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(N.agD,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lg,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c13(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jO()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3a(A.jg,"Edit",new C.erH(o,m),d,!0))
if(w===D.lr)p.push(o.b3a(A.G3,"Shape & ring",new C.erI(o),d,!0))
p.push(o.tP(A.BH,"Format",new C.erJ(o),d))
if(v)A.d.v(p,B.a([o.tP(G.MD,n,new C.erK(o,m),d),o.tP(D.alT,n,new C.erL(o,m),d),o.tP(D.alS,n,new C.erM(o,m),d)],q))
p.push(A.b6)
p.push(o.cpV(A.e5,n,o.gaPS(),d,!0))
p.push(o.tP(A.hz,"Done",new C.erN(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AW,A.lg,n,n,n)},
bz2(d){switch(d.a){case 2:return D.a_u
case 1:case 5:return D.a_w
default:return D.a_v}},
c1V(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
ayV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Go:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qW,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tP(d,e,f,g){return this.ayV(d,e,f,g,!1,!1)},
b3a(d,e,f,g,h){return this.ayV(d,e,f,g,h,!1)},
cpV(d,e,f,g,h){return this.ayV(d,e,f,g,!1,h)},
bLI(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mR],m)
w=B.I(e?A.aK:A.pm,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a23(A.eC,"Back",p.gbFb(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.E(B.A(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tn,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kc()){u=p.a23(A.r8,"Undo",p.ax.length===0?o:p.gczr(),e)
A.d.v(r,B.a([u,p.a23(D.bDV,"Redo",p.ay.length===0?o:p.gcla(),e)],q))}r.push(p.a23(A.xW,"PDF",new C.eqP(p),e))
r.push(p.a23(A.hA,"Download as video",new C.eqQ(p),e))
if(!p.kc())r.push(B.BF(o,o,B.X(A.nZ,e?A.ad:A.bv,o,o,o,o),new C.eqR(p),A.J,new C.eqS(p),A.af,"More",x.N))
r.push(A.d9)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e6d,o,new B.o(o,o,o,B.m(14),o,K.Go,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazL(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bpR,D.buY,o,o,o)},
cyW(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cD:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iE(A.tT,"Print",new C.ev6(w),d),w.iE(A.xW,"Download PDF",new C.ev7(w),d),w.iE(A.pU,"Present",w.gazL(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AV,G.aih,v,v,v)},
a23(d,e,f,g){var w,v=null
if(f==null)w=g?A.b3:A.dp
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ca)},
c17(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cD:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.es6(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ahX,new B.fg(new C.es7(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vn,r.agl(A.lh,"Ending celebration",r.gcbr(),d),q),new B.D(R.vn,r.agl(A.G3,"Logo ring & frame",r.gcc7(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.D(R.vn,r.agl(A.ne,"Look and feel",r.gcc8(),d),q),new B.D(R.vn,r.agl(A.oN,"Edit this slide's text",r.gccF(),d),q)],x.p):A.ha)
t.push(new B.D(R.vn,B.hq(B.aE(q,B.p(q,D.eIJ,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lc.j(0.4),A.J,10)],x.V),D.anR,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.es8(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bvq,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cnE(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AV,q,q,q,q)},
cnE(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d4L[v]
u.a=null
s=u.a=t.b
w.push(e.lE(e.cpk(s),t.a,new C.etv(u,e),a3,D.aMB.t(0,s)))}w.push(e.iE(A.kR,"Notes Slide",new C.etw(e),a3))
w.push(e.lE(A.G2,"Quiz",new C.etx(e),a3,!0))
w.push(e.lE(L.FG,"Worksheet",new C.etI(e),a3,!0))
w.push(e.lE(V.G5,"Flashcard",new C.etT(e),a3,!0))
w.push(e.lE(A.Nu,"Lab Report",new C.eu3(e),a3,!0))
w.push(e.lE(A.tN,"Rubric",new C.eua(e),a3,!0))
w.push(e.lE(A.oH,"Minutes",new C.eub(e),a3,!0))
w.push(e.lE(A.nY,"Syllabus",new C.euc(e),a3,!0))
w.push(e.lE(A.Ny,"Timeline",new C.eud(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d5Y[v]
w.push(e.lE(r.b,r.c,new C.eue(e,r),a3,!D.aMH.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iE(A.yg,a0,e.gaLA(),a3),e.iE(A.tQ,"Picture",new C.ety(e),a3),e.iE(A.ya,"Bio link",new C.etz(e),a3),e.iE(A.a02,"Table",new C.etA(e),a3),e.iE(A.Nx,"Sticky",new C.etB(e),a3),e.iE(A.tP,"Divider",new C.etC(e),a3),e.iE(A.BI,"Header",new C.etD(e),a3),e.lE(A3.vw,"Rectangle",new C.etE(e),a3,!0),e.lE(A.r0,"Circle",new C.etF(e),a3,!0),e.lE(A.a_m,"Triangle",new C.etG(e),a3,!0),e.lE(A.iV,"Arrow",new C.etH(e),a3,!0),e.lE(D.bCo,"Parallelogram",new C.etJ(e),a3,!0),e.lE(D.bET,"Hexagon",new C.etK(e),a3,!0),e.lE(A.tP,"Line",new C.etL(e),a3,!0),e.lE(A.xW,"PDF",new C.etM(e),a3,!0),e.lE(O.a0c,"Signature",new C.etN(e),a3,!0),e.iE(A2.By,"Quote",new C.etO(e),a3),e.iE(D.ZZ,a1,new C.etP(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=x.p
t=B.A(B.a([e.aMp("Wide 16:9",D.Cv,a3),e.aMp("Short 9:16",D.o7,a3),new B.D(A.fy,B.mG(D.bH1,d,D.fje,d,new C.etQ(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bFq("This slide",!e.Q,a3,new C.etR(e)),A.bp,e.aOA("All slides",e.Q,a3,new C.etS(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFr()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a2_,new C.etU(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d6V[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dp:A.b3,1.5,A.q,-1)
l.push(new B.D(A.fy,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.etV(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDp()
g=B.U(h).k("K<1,D>")
h=B.B(new B.K(h,new C.etW(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.N,q,A.am,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bYW(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jO()
w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=new C.etu(e)
t=new C.euf(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Q6,f.dy,new C.etX(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Q6,q,new C.etY(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iE(A.kR,w,new C.etZ(e),a3),e.iE(A.tT,"Print deck",new C.eu_(e),a3),e.lE(D.ajP,"Export JSON",new C.eu0(e),a3,!0),e.iE(A.fL,"Duplicate Slide",e.gaQK(),a3),e.iE(A.e5,a2,e.gaPT(),a3),e.ctm(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jO()
w=x.p
u=B.a([e.iE(D.ZZ,a1,new C.eu1(e),a3),e.iE(A.fL,"Duplicate",e.gaQK(),a3),e.iE(A.e5,a2,e.gaPT(),a3),e.iE(A.pU,"Present",e.gazL(),a3),e.iE(A.BG,a0,e.gaLA(),a3),e.iE(A.BB,"Fit Text",new C.eu2(e),a3),e.iE(A.xW,"Download PDF",new C.eu4(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iE(A.kT,"Transfer",new C.eu5(e),a3))
if(f!=null){w=B.a([A.ab,e.iE(G.MD,"Bold",new C.eu6(e,f),a3),e.iE(G.ZR,"Italic",new C.eu7(e,f),a3),e.iE(G.ajq,"Underline",new C.eu8(e,f),a3),e.iE(Ae.ME,"Bullets",new C.eu9(e,f),a3),e.bO3(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLM(a3))
w.push(e.iE(D.bB1,"Delete",e.gaPS(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aMp(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o7
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7J,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bGd],v))
return new B.D(A.fy,B.j5(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.epU(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
ctm(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b3:A.cq,A.q,1)
u=B.m(8)
t=B.X(A.FE,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amR,q,q,q,new C.euC(r,p),q,q,q,q,q,A.ca)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amI,q,q,q,new C.euD(r,p),q,q,q,q,q,A.ca)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fk,A.mo,q,q,q)},
cpk(d){switch(d.a){case 6:return V.G5
case 7:return A.G2
case 8:return L.FG
case 4:return A.BI
default:return A.kR}},
bO3(d,e){var w=null,v=B.I(e?A.b3:A.cq,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amR,w,w,w,new C.er1(this,d),w,w,w,w,w,A.ca),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amI,w,w,w,new C.er2(this,d),w,w,w,w,w,A.ca)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xF,A.mo,w,w,w)},
bYW(d){var w=null
return B.BF(B.D4(B.X(A5.a_1,d?A.ad:A.bv,w,w,w,16),w,w,D.foI,w,w,w),w,w,new C.erz(),A.J,this.gbzK(),A.co,"Slide layout",x.fO)},
lE(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dq:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NE,A.f,w,w,D.DO,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fy,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.D(A.h7,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iE(d,e,f,g){return this.lE(d,e,f,g,!1)},
b4w(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.euO(u,s,e,d),s.r.length,A.co,t,w,new C.euP(e),!1)
s=d?A.aB:A.bL
w=B.a([],x.p)
if(e&&!u.kc())w.push(new B.D(A.co,B.Hq(E.an3,new C.euQ(u),B.nw(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNj,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDq(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o7?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aE(v,B.cp(new C.eqi(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqj(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDs(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ku(a9.w))===!0,b1=b0&&C.fAs(b3),b2=b0&&b3.b===D.kY&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kc())v=!b0||a7.c0c(b3)
else v=!1
if(!a7.kc())u=!b0||a7.c0b(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ci:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fZ6(b3))o=a8
else if(p&&!a7.kc())o=a7.gc7Y()
else o=a7.kc()?a8:new C.eq6(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jz
i=w&&C.fZ6(b3)&&a7.zJ()?new C.eq7(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eq8(a7,b3):a8
g=u?new C.eq9(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kY?A.K:a8
if(b1){a1=a7.kc()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bU,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zJ()
a3=b3.b===D.cQ
a4=a3?a7.Wb(b3):a8
a5=a3?a7.asA(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bU,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eqa(a7,b3):a8
a3=v&&a3?new C.eqb(a7,b3):a8
a6=C.b0p(q,a4,a1,b3,a5,a2,a3,new C.eqc(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bJ2,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqd(a7,b3,b4,b5),a8,a8,new C.eqe(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kc()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJH,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWy(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kc()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bLe,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqf(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bU,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fxl,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kP,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqg(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eG(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOA(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d9,B.p(r,D.NE,A.f,r,r,D.DO,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bFq(d,e,f,g){return this.aOA(d,e,f,g,!1)},
c7K(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aP
t=f?A.wD:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rs,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_x(e,new C.esa(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.m(10),A.dg),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.esb(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS1(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jO()
if(a2==null)return A.bH
w=new C.erf(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_x(a3,a0.gbJZ())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fjJ,B.E(B.kX(a1,a1,a1,u,0.05,new C.erg(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fvO,B.E(B.kX(a1,a1,a1,t,0.05,new C.erh(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fdF,B.E(B.kX(a1,a1,a1,96,10,new C.eri(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lr
if(l||n===D.kY||n===D.Rp)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fpp,B.E(B.kX(a1,a1,a1,s,0,new C.erj(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fx4,B.E(B.kX(a1,a1,a1,r,0,new C.erk(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BX[j]
i.a=null
g=h.a
i.a=g
k.push(B.j5(a1,a1,a1,new B.x(h.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erl(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BS[j]
f.a=null
g=e.a
f.a=g
h.push(B.j5(a1,a1,a1,new B.x(e.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erm(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bW(A.bz,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.ern(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bz,l,A.bq,6,6),A.ac,B.ha5(new C.ero(w,a2),D.cmi,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.erp(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dk(D.bL0,D.frl,new C.erq(a0,a5),B.bl(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cz(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cD:A.c
p=a4?A.wD:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rs,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F3,a1,a1,a1)},
bOk(d){return this.aS1(d,!1,!1,null)},
c7_(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.ert(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f3E,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.E(B.v(B.a([w,A.bB,A.cV,r.bz4(D.cPy,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hq(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eO2,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ek,8)],p),D.anW,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6j,D.b6H],v):B.a([A.c,A.kj],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLj(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ep2(this,g,d,e,f),null)},
afI(d,e){return this.cjr(d,e)},
cjr(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.et7(d,q),p,null,!0,!0,x.N),$async$afI)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afI,v)},
Pv(d){var w=d.bS()
return""+B.bH(w)+"/"+B.bQ(w)+"/"+B.bA(w)}}
C.aeL.prototype={}
C.ayc.prototype={
R(){return new C.bbY(null,null)}}
C.bbY.prototype={
gcvx(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bH(u)+"/"+B.bQ(u)+"/"+B.bA(u),s=v.w
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
w=B.bj(u,D.bol,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bst()},
II(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hO(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.btN,B.c6(new B.h3(B.a([u,w],x.dS)),new C.d_J(this),v),v),v,v,v)}}
C.bcb.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.bu3,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.D(D.btf,B.v(B.a([B.p(w,D.bJN,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fts,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f4N,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bnp,B.A(B.a([B.E(B.bK(!1,D.fhY,w,w,!0,w,w,new C.d04(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n8,w,A.ob,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fne,w,w,!0,w,w,new C.d05(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n8,w,A.ob,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.V2,new B.o(A.aB,w,u,v,D.cPS,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
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
return B.dU(B.dc(B.aE(o,B.vi(B.dj(o,B.A(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eF,o,o,o,A.nU,o,o,1/0),A.ct,A.jc,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_E(p,d),new C.d_F(p),new C.d_G(p),new C.d_H(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Pf.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eP,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ey,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nt,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_3.prototype={
R(){return new C.aDJ(D.dd,null,null)}}
C.aDJ.prototype={
gYo(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bnW,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b4W(d){if(!this.a.c.ay)return
this.x=d
this.gYo().iz(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.av6(D.eUo)
C.i0q()
v.QU()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYo().q()
v=w.z
if(v!=null)v.a7(0)
C.av6(D.eUp)
C.i0t()
w.buB()},
cyj(){B.ji()
this.m(new C.evN())
var w=this.c.I(x.q).f
w.a4a()
if($.bjJ)w.S(D.eRg)},
QU(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h8f(u,w),1,120)),new C.evD(v))},
cxZ(){var w,v=this
v.m(new C.evM(v))
if(v.r)v.QU()
else{w=v.f
if(w!=null)w.a7(0)}},
gaTV(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cs7(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.evE(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.le,new C.evF(w))},
avp(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.evz(u))
u.QU()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTV()){u.cs7()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.evA(u,A.o.F(w+1,s)))
u.b4W(w)
u.QU()}},
ci5(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.evB(v))
v.QU()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.evC(v,w,t))
v.b4W(w)
v.QU()}},
ctz(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nc(d,new B.cx(u,x.ac))}w=v.ctA(u)
u=v.d
u===$&&B.c()
return B.qc(new B.nc(d,new B.cx(u,x.ac)),w,new C.evK(),A.bc,A.bc,new C.evL(v))},
ctA(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.boh
case 16:return A.kl
case 18:return A.n5
default:return A.n6}},
cty(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.uk,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.RF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.ii,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.uj,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.evG(s),e)
case 9:return B.c6(s,new C.evH(s),e)
case 10:return B.c6(s,new C.evI(s),e)
case 11:return B.c6(s,new C.evJ(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.ik(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jy(B.jp(e,new B.bf(s,new B.bo(A.uk,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqN(w,t))
case 15:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.RF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mI((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jI(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jy(new C.anJ(B.c6(n.gYo(),new C.evO(n,v,w),m),m),A.r,m)}else{t=B.rt(new C.Io(w,!0,!1,m))
l=B.b0(w.e)
u=n.ctz(B.el(B.jy(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h8f(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oh,m,m,m),A.bp,D.bM3],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.av(new B.fG(r,B.jy(B.uj(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjJ){r=B.Hq(A.kV,new C.evP(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ab,B.Hq(B.X(n.r?Ak.y8:A.iW,m,m,m,m,m),n.gcxY(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hq,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aE(A.c4,B.p(A.l6,$.bjJ?A.bH:s,A.f,m,m,m,m,64,m,m,D.bp2,m,m,150),A.y,!1,m,n.gcyi(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.evQ(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jy.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.ahJ,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_c,w,w,w,w,w,w,w,w)}}
C.bqN.prototype={
j3(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgQ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aX_
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dj(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vN,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgP.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dj2.h(0,p)
if(o==null)o=D.d66
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.am4:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ep,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
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
bfp(d){return this.e.$1(d)}}
C.aDH.prototype={
gb3g(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9S(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3g()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNf(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3g()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4v(){return A.d.cI(this.ga9S(),0,new C.evj())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gJ(w).a
v.Qv()},
Qv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b12(s.c,s.f),$async$Qv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evf(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qv,v)},
IK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9S()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fDE(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p1(o,q.c,q.f),$async$IK)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ea(new C.evi(t,p),!1,null,x.H)
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
return B.b(B.hw(o,D.dWk,!0,"NgmySlidesTransferScan",x.N),$async$QS)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evg(t))
w=4
return B.b(C.agV(s),$async$QS)
case 4:r=e
t.m(new C.evh(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.S(D.eQ9)
w=1
break}w=5
return B.b(t.a.bfp(r),$async$QS)
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
for(;;)switch(w){case 0:n=t.ga9S()
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
q=C.fDT(null,A.d.gJ(n),s,t.a.f)}else q=C.fDT(n,null,r.c,r.f)
if(n.length===1){s=A.d.gJ(n).b
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
a2e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evk(t))
w=3
return B.b(C.bBQ(),$async$a2e)
case 3:s=e
t.m(new C.evl(t))
if(s==null||J.cm(s)){w=1
break}w=4
return B.b(t.a.bfp(s),$async$a2e)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a6(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2e,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.da:A.bL,k=o.ga9S().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cC,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evo(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zo],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.X(A.pO,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bMz,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ey,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.by0],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hq(B.aE(A.c4,D.eO4,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gccR(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0H,A.n),n,n,n,n,E.Yv,n,n,1/0),A.e1,o.awA(m,"What to transfer"),A.ac,B.A(B.a([B.E(o.aW9(A.pU,m,new C.evp(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aW9(D.bCg,m,new C.evq(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awA(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.K(u,new C.evr(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mH)
w.push(o.awA(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.E(o.apk(A.aS,k,!0,A.jj,m,o.r,o.gc73(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLk(A.jQ,!0,A.iX,m,o.gcoV(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.E(o.bxz(A.aV,k,A.hA,m,o.r,o.gc70(),"Download .json","Backup file"),1),A.av,B.E(o.aLk(A.aH,!0,Ax.yi,m,o.gcAH(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lj,A.bj.j(0.9),n,n,n,18)
r=o.gaNf()
q=o.gb4v()
p=o.gb4v()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.A(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.v(B.a([new B.D(Ag.Me,i,n),B.E(B.cz(w,n,D.bsp,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vm,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i6N(s,t.d,t.e),$async$aeS)
case 2:return B.h(null,v)}})
return B.i($async$aeS,v)},
awA(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aW9(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cA,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.co,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.D(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bI6(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bMK,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ef:A.r0
if(p)r=A.bj
else r=e?A.b3:A.dp
return new B.D(A.cB,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eve(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apk(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qZ,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amC,A.f,s,s,D.b__,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.D(E.Y9,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLk(d,e,f,g,h,i,j){return this.apk(d,e,!1,f,g,!1,h,i,j)},
bxz(d,e,f,g,h,i,j,k){return this.apk(d,e,!1,f,g,h,i,j,k)}}
C.Vz.prototype={
R(){return new C.bjI()}}
C.bjI.prototype={
a_(){this.a1()
this.adJ()},
adJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fDT(null,A.d.gJ(m),k,r.a.f):C.fDT(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gJ(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ku(A.d.gJ(n).w))C.fDE(A.d.gJ(r.a.d),D.d46)
n=r.a
m=n.c
n=C.i3K(n.d)
w=7
return B.b(C.fDS(p,C.i3P(r.a.d),n,m,q),$async$adJ)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evs(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.evt(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.da:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.evu())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.evv(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zo],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dl,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0H,A.n),j,j,j,j,E.Yv,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a74,A.L,j,j))
else if(k.d==null)r.push(D.e5N)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fiq,A.am,B.aE(j,B.p(j,B.A(B.a([D.bOi,A.av,B.d(m,j,j,j,j,j,j,D.f5a,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bSS,A.n),j,j,j,j,A_.ahw,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.evw(k,d),j,j,j,j,j,j,!1,A.a8),A.N,D.fmL,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pH(j,j,!1,l,j,!0,!0,j,!1,D.bjQ),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.co,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c8(j,h,B.bm(!0,B.v(B.a([new B.D(Ag.Me,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bUO,A.n),j,j,j,j,A.tC,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahO,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDE.prototype={
R(){return new C.aDF(new B.as(A.as,$.aw()),B.jO(!0,null,!0,!0,null,null,!1))}}
C.aDF.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.eoX(w))
$.aW.x1$.push(new C.eoY(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYJ(){var w,v=this.c
v.toString
w=C.yq(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.ui,36),D.aaA],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bJQ,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.ffD,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_p,k,k,k,k,A.xE,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge4()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bh,B.dj(A.A,new B.x(p,k,D.eZQ,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Iz)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bR2,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.ua(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ba(5,k),new C.bu2()],x.aS),k,k,A.aOy,k,5,k,1,k,k,!1,"\u2022",k,new C.eoT(l),k,new C.eoU(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m0,k,k,k,k),0),0,0,0)],a1)
d=C.yq(w.a.a.toUpperCase())==null?k:l.gc74()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.K_,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.bsU,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fe3,A.by,new B.a7(1/0,50,B.bG(D.fui,d,B.bl(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nu,k,k,!0,k,k,new C.eoV(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu2.prototype={
ow(d,e){var w=e.a.toUpperCase()
return e.cGU(B.h8(A.bw,w.length),w)}}
C.aqC.prototype={
R(){return new C.aDI(B.z1(A.Lv,A.nB,A.u1))}}
C.aDI.prototype={
q(){this.d.q()
this.a2()},
aYI(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iM(w,d)},
a9M(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fMu(s),$async$a9M)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYI("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9M,v)},
c72(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i3N(w[u])
if(t!=null){this.aYI(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vK,s,s,s,t.gbMg(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r3:Al.Na,s,s,s,s,s),s,s,s,new C.evy(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fvw,s,s,s,1,s,!0)
r=B.z0(t.d,A.bS,t.gc71())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fju,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.je,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bue.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bI0,A.f,w,w,D.b_8,w,56,w,w,w,w,w,56),A.aQ,D.fvc,A.am,new B.kf(this.c,new C.f68(),w,w,x.cI),A.aQ,new B.kf(this.d,new C.f69(),w,w,x.cl),A.ac,D.fv9],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K_,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.YC,D.btw,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7k.prototype={
R(){return new C.bjr(A.bx)},
gdd(){return this.c}}
C.bjr.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZA()
w.d=B.dv(A.fU,new C.ed7(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZA(){return this.clh()},
clh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ed5(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bz(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cdU(p.c),$async$ZA)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ed6(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZA,v)},
bOb(d){var w,v,u=d.a,t=A.o.an(u,36e8)
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
return B.p(r,B.A(B.a([B.X(A.FE,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOb(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agy,A.ic,r,r,1/0)}}
C.a8c.prototype={
nb(){var w,v,u,t=this
t.x5()
w=t.cx
v=t.c
w.bp7(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pO(B.F(["/S",D.e9s,"/URI",new B.rp(B.W6(w.as),A.ul,!0)],x.N,u),u))}}
C.a8d.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b25.prototype={
bwD(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e7L],x.di)
this.w!==$&&B.aP()
this.w=w},
gcKc(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jN(w,new C.cg5(),B.a3(w).k("jN<co.E,H>")).fa(0,new C.cg6())},
aC2(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tn(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jb(d.a,d.b))
s.n(0,"/Border",B.tn(N.aok))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcKc()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pO(w,x.Y))}}
C.cg7.prototype={}
C.a2p.prototype={}
C.ahN.prototype={}
C.aQu.prototype={
fY(d){var w,v,u,t,s,r,q=this,p=null
q.le(d)
q.LE(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beN(w)
u=x.N
t=x.Y
s=new C.cg7(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwD(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pO(B.F(["/Type",D.e9q],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8c(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.aw4.prototype={}
C.aRZ.prototype={
fY(d){var w,v,u,t,s=this
s.le(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e6(u.a,u.b,0,1)
u=d.b
u.i4()
t=s.a
t.toString
u.KN(t)
u.S6(0)
u.oR(0,v)
w.fY(d)
u.ne(0)}}}
var z=a.updateTypes(["az<~>()","~(lD)","R(i_)","~()","R(eJ)","R(of)","R(lD)","~(i_)","R(eJ,eJ)","Jy(Y)","R(nG)","R(l9)","az<R>()","H(H,i_)","a4<n,@>(i_)","ai<zk>()","n(nG)","R(a7B)","n(lD)","n(vQ)","R(En)","H(i_,i_)","n(eJ)","r(eJ)","cL(eJ)","r(hx)","~(hx)","eJ(uz,N,N,N,N,H{fx:n,key:n,rotation:N})","eJ(n,N,H)","H(of,of)","R(zk)","R(n,ai<zk>)","a4<n,@>(of)","nG()","Ya(Y)","eJ(n,N,N,N,N,N{align:pU,anim:hx,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hl,weight:oM})","a0q(Y)","eJ(n,N,N,N,N{anim:hx,delay:H,fx:n,key:n})","az<~>(of)","R(mp)","Y8(Y)","a_Y(Y)","a_X(Y)","P5(Y)","Zj(Y)","eJ(uz,N,N,N,N,H,n,n{anim:hx,delay:H,rotation:N,stroke:H,strokeWidth:N})","eJ(n,N,N,N,N,N,n,n,H)","eJ(N,N,n,H{size:N})","r(rd,N,N)","l9()","of(a4<@,@>)","~(up)","En()","ff(eJ)","r(iX)","YS(Y)","~(Ee)","Zc(Y)","H(eJ,eJ)","eJ(eJ)","a4<n,@>(eJ)","eJ(a4<@,@>)","lD(lD)","a4<n,@>(lD)","lD(a4<@,@>)","R(jF)","jF()","n(i_)","~(ai<of>)","S(ai<i_>)","S(i_)","ai<i_>(n?)","acf(Y,H)","~(R(eJ,eJ))","acU(Y)","aeB(Y,H)","w(lD,R)","Vk(Y)","acX(Y)","Vn(Y)","~(mt)","i_(i_)","N(eJ)","a_r(Y)","a_3(Y)","i_()","ai<EJ>()","az<~>(ai<i_>)","r(bv<H,i_>)","D(jF)","D(En)","az<~>(hx,~())","r(ai<hx>,hx?,~(hx),w)","R(m2)","ai<jo<mt>>(Y)","jo<mt>(mt)","i_(a4<@,@>)","Vy(Y)","eJ(n,N,N,N,N,N,H{align:pU,style:Hl,weight:oM})","Vz(Y)","r(i_)","~(lV)","Io(Y,lD,r?)","H(a8d)","az<ai<a4<n,@>>?>()","n(n)","az<zi>({paper:n?,photo:dD?,request:n,template!lc})","az<a7t>({doc!zi,history:ai<+(n,n)>,instruction!n,photo:dD?,template!lc})","acR(Y)"])
C.cE0.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cE1.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cE2.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajs(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mo(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:75}
C.cE3.prototype={
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
C.fqB.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iH(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iH(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iH(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iH(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYE.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:27}
C.bYF.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.bYH.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fGy.prototype={
$1(d){return new C.a0q(this.a,this.b,C.i4F(),null)},
$S:z+36}
C.f4B.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f4F.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f4G.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4H.prototype={
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
C.f4C.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4D.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f4E.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f4w.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hD,w,w,w)
return B.ek(B.a([B.bK(!1,D.fhU,w,w,!0,w,w,new C.f4u(d),w,w),B.bK(!1,D.fh_,w,w,!0,w,w,new C.f4v(d),w,w)],x.p),w,w,D.Xa,v,w,w,w,w,D.fvN,w)},
$S:19}
C.f4u.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f4v.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f4x.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f4y.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4L.prototype={
$0(){var w=this.a
return w.m(new C.f4K(w,this.b))},
$S:0}
C.f4K.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f4A.prototype={
$0(){var w=this.a
return w.m(new C.f4z(w,this.b,this.c))},
$S:0}
C.f4z.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.f4I.prototype={
$0(){return this.a.a0H(this.b)},
$S:0}
C.f4J.prototype={
$0(){return this.a.OJ(0,this.b)},
$S:0}
C.f4O.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f4P.prototype={
$0(){var w=this.a
return w.m(new C.f4N(w,this.b))},
$S:0}
C.f4N.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f4M(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f4M.prototype={
$1(d){return d.a},
$S:z+67}
C.fbR.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h5u(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.of(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbS.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.ftd.prototype={
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
C.ftb.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.ftc.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fG2.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fqh.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fGU.prototype={
$1(d){return new C.Ya(this.a,null)},
$S:z+34}
C.cFm.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFr.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFs.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFq())},
$S:11}
C.cFq.prototype={
$0(){},
$S:0}
C.cFt.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1p(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bd(s,new C.cFp(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah3(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:298}
C.cFp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFu.prototype={
$1(d){},
$S:30}
C.cFn.prototype={
$1(d){return new C.Y8(this.b,this.a.gcuT(),null)},
$S:z+40}
C.cFv.prototype={
$1(d){return D.fNX},
$S:z+43}
C.cFi.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WQ,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.bti,B.v(B.a([B.p(w,D.bH2,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fg3,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f4c,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.D(A.pK,B.A(B.a([B.E(B.dT(D.fmN,new C.cFg(d),B.dg(w,w,w,w,w,w,w,w,w,E.n_,w,w,A.ck,w,new B.b7(B.m(14),A.Y),D.aXp,w,w,w,w)),1),A.av,B.E(B.bG(D.fsB,new C.cFh(d),B.bl(A.bI,w,w,w,w,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wG,new B.o(D.aci,w,u,v,D.cUj,w,A.n),w,w,w,K.YC,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cFg.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cFh.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cFj.prototype={
$0(){return J.no(this.a.d,new C.cFf(this.b))},
$S:0}
C.cFf.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFe.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WQ,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bLX,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anR,A.n),t,44,t,t,t,t,t,44),A.bf,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQb,t,t,t),A.bB,D.fsx],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dek[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awY(u[1],u[2],u[3],new C.cFc(v,d),!1,t))}q.push(A.am)
q.push(D.bns)
q.push(A.am)
q.push(new C.awY(A.e5,"Delete book","Remove it from this device",new C.cFd(d),!0,t))
return B.bm(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.aci,t,r,s,t,t,A.n),t,t,t,A.tx,E.Yf,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFc.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cFd.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cFl.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aG5,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anA(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFk.prototype={
$0(){return this.a.c1L()},
$S:0}
C.cFb.prototype={
$0(){return this.a.aXi(0,this.b)},
$S:0}
C.cFa.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cF9.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cFw.prototype={
$2(d,e){var w=this.a
return w.bB7(J.q(w.d,e))},
$S:41}
C.cED.prototype={
$0(){var w=this.a
if(w.c!=null)w.AB()},
$S:0}
C.cEC.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_a("Page "+(v.length+1),"",""))},
$S:0}
C.cEF.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cEN.prototype={
$0(){},
$S:0}
C.cEO.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cEG.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c)},
$S:0}
C.cEE.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEI.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEJ.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEK.prototype={
$0(){var w=this.a
w.m(new C.cEH(this.b))
w.DP()},
$S:0}
C.cEH.prototype={
$0(){return this.a.c=""},
$S:0}
C.cEM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEL(w,d))
w.DP()},
$S:z+51}
C.cEL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cET.prototype={
$2(d,e){if(d)this.a.AB()},
$S:125}
C.cEP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AB(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.eSF)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cEQ.prototype={
$0(){return this.a.aWg(this.b,-1)},
$S:0}
C.cER.prototype={
$0(){return this.a.aWg(this.b,1)},
$S:0}
C.cES.prototype={
$0(){return this.a.c30(0,this.b)},
$S:0}
C.fxK.prototype={
$1(d){return C.hfs()},
$S:44}
C.fxL.prototype={
$1(d){return null},
$S:30}
C.fgf.prototype={
$1(d){return null},
$S:30}
C.fyJ.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fyI.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:251}
C.fyP.prototype={
$1(d){var w=this.a
return C.fYZ(d)===w||C.hk_(d)===w},
$S:z+4}
C.ffi.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.c8d.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxI.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fxJ.prototype={
$1(d){return C.fAs(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fsz.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fnn,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,D.fhA,new C.fsx(d),B.bl(A.bY,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.vJ,D.foC,new C.fsy(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsx.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsy.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsA.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fdW,w,w,!0,w,w,new C.fsv(d),w,w),B.bG(D.fuQ,new C.fsw(d),w)],x.p),w,w,w,D.fwH,w,w,w,w,D.fdQ,w)},
$S:19}
C.fsv.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fsw.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e7W.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e7U.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7V.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e7X.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e7Y.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fyO.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.fyK.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fyM.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f5n,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:185}
C.fyN.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fyL.prototype={
$2$female$size(d,e){var w=null,v=d?D.ae8:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acw,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fKl.prototype={
$1(d){return new C.acR(this.a,this.b,null)},
$S:z+108}
C.dXC.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bki:A.L0,q=B.I(D.j8.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amB,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j8.j(0.35),A.ek,10)],x.V),D.bVp,A.n),t,t,t,t,A.xu,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(H.Yr,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j8,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f4F,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ie(!0,t,e,A.y,D.aNA,new C.dXB(w,this.c),v,D.ahr,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m7,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:113}
C.dXB.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acf(w,new C.dXA(this.b,w),null)},
$S:z+72}
C.dXA.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fsD.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fsE.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fqI,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsB(d),B.bl(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fsC(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsB.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsC.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsH.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fsI.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.feU,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsF(d),B.bl(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fsG(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsF.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsG.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsL.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fsM.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fld,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsJ(d),B.bl(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fsK(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsJ.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsK.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fLO.prototype={
$1(d){return D.fRI},
$S:z+74}
C.eda.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bc9:A.L0,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bOe,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ek,10)],x.V),D.anW,A.n),v,v,v,v,A.xu,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(H.Yr,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.KY,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f2a,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ie(!0,v,e,A.y,D.aNA,new C.ed9(this.b),19,D.ahr,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m7,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.ed9.prototype={
$2(d,e){var w=D.Qk[e]
return new C.aeB(w,new C.ed8(this.a,w),null)},
$S:z+75}
C.ed8.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fAw.prototype={
$0(){return B.fXY(C.hTd(this.a))},
$S:309}
C.fAv.prototype={
$0(){var w=C.fZg(this.a)
return"data:image/png;base64,"+A.cS.gcw().aJ(w)},
$S:22}
C.fdo.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jc(d,e),new B.jc(w,e+v),new B.jc(d+f*14,e),new B.jc(w,e-v)],x.J)
B.a1m(this.a,C.fy(4291404327),v)},
$S:703}
C.fLZ.prototype={
$1(d){return new C.Vk(this.a,null)},
$S:z+77}
C.egs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egr())},
$S:29}
C.egr.prototype={
$0(){},
$S:0}
C.egt.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egq(w,d))},
$S:1673}
C.egq.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.egu.prototype={
$1(d){},
$S:30}
C.eg4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eg0.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egb.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.egc.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eiL)},
$S:0}
C.egd.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eg6.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.eg7.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eg8.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.eg9.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ega.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ia)}},
$S:8}
C.eg5.prototype={
$0(){var w=this.a,v=w.z,u=C.fB9(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cG1(C.fB9(t))},
$S:0}
C.eg2.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eg3.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egj.prototype={
$0(){return B.a5(this.a,!1).lQ()},
$S:0}
C.egk.prototype={
$0(){var w=this.a
return w.m(new C.egi(w))},
$S:0}
C.egi.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.egl.prototype={
$0(){var w=this.a
return w.m(new C.egh(w,this.b))},
$S:0}
C.egh.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.egm.prototype={
$1(d){var w=this.a
return w.m(new C.egg(w))},
$S:9}
C.egg.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egn.prototype={
$1(d){var w=this.a
return w.m(new C.egf(w))},
$S:9}
C.egf.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ego.prototype={
$0(){var w=this.a
return w.m(new C.ege(w,this.b))},
$S:0}
C.ege.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.egp.prototype={
$1(d){return this.a.Zm()},
$S:2}
C.eg1.prototype={
$0(){return this.a.c6k(this.b)},
$S:0}
C.cbU.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:334}
C.cbS.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cbT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fA6.prototype={
bjS(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bO_(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cCx($.qO().jw(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mE(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjS(d,e)},
$S:1674}
C.fyo.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyq.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:78}
C.fyp.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hL(t,t,t,t,B.dh(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qg,A.ce,t,A.e9,A.c9)
v=this.a
w.yL(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fd_.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a1(w,new C.fd0(),B.U(w).k("a1<1>")).gM(0)},
$S:239}
C.fd0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcY.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.fcZ.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.cbV.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazp()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fYY(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVR(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcet(),"\n\n")
d=B.hL(a6,a6,a6,a6,B.dh(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ady(k,q,1.28),j),A.qg,A.ce,a6,A.e9,A.c9)
d.yL(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fYY(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVR(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ady(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qg,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azo(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:347}
C.cbW.prototype={
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
n=o.gazp()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fYY(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fVR(g.length===0?B.a([a6],n):g,l))break}a1=o.ady(i,h,1.28)
a2=new C.cbX(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Iy,new B.a7(v,a5,a4.f,a5),A.Iy,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bvB,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qg,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azo(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:147}
C.cbX.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qg,w,w),w)},
$S:1675}
C.fM1.prototype={
$1(d){return new C.Vn(this.a,this.b,null)},
$S:z+79}
C.ehD.prototype={
$1(d){return d.lZ()},
$S:1676}
C.ehE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehC(w,d))},
$S:1677}
C.ehC.prototype={
$0(){var w=this.b
return this.a.d=w.gfq(w)},
$S:0}
C.ehq.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehr.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehx.prototype={
$0(){return B.a5(this.a,!1).eK()},
$S:0}
C.ehy.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bba(u,v.gawt(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehv(v),new C.ehw(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ehv.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:269}
C.ehw.prototype={
$1(d){var w=this.a
w.m(new C.ehs(w,d,this.b,this.c))},
$S:206}
C.ehs.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawt()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehz.prototype={
$1(d){var w=this.a
return w.m(new C.ehu(w,this.b))},
$S:9}
C.ehu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehA.prototype={
$1(d){var w=this.a
return w.m(new C.eht(w,d))},
$S:6}
C.eht.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehB.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fMh.prototype={
$1(d){return D.fUv},
$S:z+83}
C.eRc.prototype={
$1(d){return this.a.Y2()},
$S:8}
C.eQ4.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcw().aJ(v)},
$S:0}
C.eQs.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQC.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.ePO.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePP.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePM.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePN.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQl.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQm(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jy(B.rt(p>0.2?C.fQC(q,B.a4G(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4G(12,12,A.x)
p.push(B.jy(B.dc(B.rt(C.fQC(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b2>0)p.push(B.el(u,B.b0(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.be
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aVI,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aVt,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aP
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aP)],x.O),D.cSZ,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d2A,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d_O,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beJ(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:64}
C.eQm.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cl,A.bS,!0,q,!1,q,q),o=r.a,n=o.aVT(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
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
return B.dU(B.ed(A.A,B.eG(A.A,l,B.fs(A.A,new B.D7(new B.yH(q,q,n,A.Ae),p,q),q,B.vD(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:607}
C.eQy.prototype={
$0(){return this.a.m(new C.eQx(this.b,this.c))},
$S:0}
C.eQx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQz.prototype={
$1(d){return this.a.m(new C.eQw(this.b,d))},
$S:6}
C.eQw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQB.prototype={
$0(){return this.a.m(new C.eQA(this.b,this.c))},
$S:0}
C.eQA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ePE.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.ePF.prototype={
$1(d){var w=this.a
return w.m(w.gcwh())},
$S:2}
C.ePG.prototype={
$1(d){return this.a.m(new C.ePD())},
$S:2}
C.ePD.prototype={
$0(){},
$S:0}
C.ePH.prototype={
$0(){var w=this.a
return w.m(new C.ePC(w,this.b))},
$S:0}
C.ePC.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePJ.prototype={
$2(d,e){return A.av},
$S:36}
C.ePI.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dj(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b5,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePB(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:76}
C.ePB.prototype={
$0(){var w=this.a
return w.m(new C.ePy(w,this.b))},
$S:0}
C.ePy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePK.prototype={
$1(d){var w=this.a
return w.m(new C.ePA(w,d))},
$S:9}
C.ePA.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePL.prototype={
$1(d){var w=this.a
return w.m(new C.ePz(w,d))},
$S:9}
C.ePz.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eR1.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gJ(this.b)]},
$S:33}
C.eR8.prototype={
$1(d){var w=this.a
return w.m(new C.eR9(w,d))},
$S:28}
C.eR9.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.e9(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eRa.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:244}
C.eR2.prototype={
$0(){var w=this.a
return w.m(new C.eR0(w,this.b))},
$S:0}
C.eR0.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eR3.prototype={
$0(){var w=this.a
return w.m(new C.eR_(w,this.b))},
$S:0}
C.eR_.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eR4.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eQZ(v,w.b,w.c,w.d))},
$S:0}
C.eQZ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eR5.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grw(v))},
$S:0}
C.eR6.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eR7.prototype={
$0(){var w=this.a
return w.m(new C.eQY(w))},
$S:0}
C.eQY.prototype={
$0(){var w=this.a.db
return A.d.h_(w,0,w.length,0)},
$S:0}
C.eQL.prototype={
$1(d){return d.a===this.a.dy},
$S:204}
C.eQM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avY[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awx(new B.n6(new B.bp(n,n,n,n),A.aq,new B.kN(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aZj(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQK(r,v),2,i))}return B.bW(A.bz,h,A.bq,7,7)},
$S:165}
C.eQK.prototype={
$0(){var w=this.b
return w.m(new C.eQF(this.a,w))},
$S:0}
C.eQF.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQN.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:208}
C.eQQ.prototype={
$0(){var w=this.a
return w.m(new C.eQJ(w))},
$S:0}
C.eQJ.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQR.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eQS.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eQT.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eQU.prototype={
$0(){var w=this.a
return w.m(new C.eQI(w))},
$S:0}
C.eQI.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQV.prototype={
$0(){var w=this.a
return w.m(new C.eQH(w))},
$S:0}
C.eQH.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQW.prototype={
$0(){var w=this.b
return w.m(new C.eQG(this.a,w))},
$S:0}
C.eQG.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eQX.prototype={
$1(d){return this.a.fx=d},
$S:208}
C.eQO.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eQP.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eQp.prototype={
$0(){var w=this.a
return w.m(new C.eQo(w))},
$S:0}
C.eQo.prototype={
$0(){var w=this.a
w.p4=null
w.b1Z()},
$S:0}
C.eQq.prototype={
$0(){var w=this.a
return w.m(new C.eQn(w,this.b))},
$S:0}
C.eQn.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQr.prototype={
$0(){var w=this.a
return w.m(w.gcmW())},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
return w.m(new C.eQg(w))},
$S:0}
C.eQg.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQi.prototype={
$0(){var w=this.a
return w.m(new C.eQf(w))},
$S:0}
C.eQf.prototype={
$0(){var w=this.a
w.aH=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eQj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d0a[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awx(new B.n6(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D7(new B.yH(o,o,v.aVT(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ae),B.fL(u,A.A,140,o,A.cl,A.bS,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eQe(v,s),3,n))}return B.bW(A.bz,m,A.bq,10,8)},
$S:165}
C.eQe.prototype={
$0(){var w=this.a
return w.m(new C.eQd(w,this.b))},
$S:0}
C.eQd.prototype={
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
C.ePW.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.ePX.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.ePY.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.ePZ.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eQ_.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eQ0.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eQ1.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.eQ2.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.eQ3.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.ePh.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ePi.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ePj.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ePk.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ePl.prototype={
$0(){var w=this.a
return w.m(new C.ePg(w))},
$S:0}
C.ePg.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ePm.prototype={
$1(d){return this.a.b3=d},
$S:208}
C.ePn.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.ePQ.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ePR.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.ePS.prototype={
$1(d){return this.a.az=d},
$S:6}
C.ePT.prototype={
$1(d){return this.a.be=d},
$S:208}
C.ePU.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.ePr.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.ePs.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.ePt.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.ePu.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.ePv.prototype={
$0(){var w=this.a
return w.m(new C.ePq(w))},
$S:0}
C.ePq.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.ePw.prototype={
$0(){var w=this.a
return w.m(new C.ePp(w))},
$S:0}
C.ePp.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.ePx.prototype={
$0(){var w=this.a
return w.m(new C.ePo(w))},
$S:0}
C.ePo.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eQk.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i7q(v,w.p4)},
$S:0}
C.eQc.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bkB:B.fL(v,A.A,w,w,A.cl,A.bS,!1,w,!1,w,w)
return C.fyw(d.length===0?"rounded":d,u,e)},
$S:131}
C.eQ8.prototype={
$0(){var w=this.a
return w.m(new C.eQ7(w))},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eQ9.prototype={
$0(){var w=this.b
return w.m(new C.eQ6(this.a,w))},
$S:0}
C.eQ6.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eQa.prototype={
$0(){var w=this.b
return w.m(new C.eQ5(this.a,w))},
$S:0}
C.eQ5.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eQb.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eQv.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cgn(),n.r))
l.push(new C.Io(n.ctl(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c4,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eQu(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:210}
C.eQu.prototype={
$1(d){var w=this.a
return w.m(new C.eQt(w,d,this.b,this.c))},
$S:18}
C.eQt.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQE.prototype={
$0(){var w=this.a
return w.m(new C.eQD(w,this.b))},
$S:0}
C.eQD.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePV.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lQ()},
$S:0}
C.eRb.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYA(),B.E(B.av(w.b0w(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aP6(),1),w.aLl()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYA(),new B.D(A.hK,B.av(s.b0w(u),t,t,t),t),B.E(s.aP6(),1),s.aLl()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:571}
C.fvN.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzL(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.P)},
$S:z+98}
C.fvM.prototype={
$3(d,e,f){var w=this,v=C.bzL(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bl
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdg.prototype={
$1(d){return B.t(d)},
$S:17}
C.fDt.prototype={
$0(){return this.a},
$S:z+15}
C.fk6.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fk7.prototype={
$2(d,e){return J.cm(e)},
$S:z+31}
C.fDv.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fDy.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fDz.prototype={
$0(){return A.d.gJ(D.vT)},
$S:z+33}
C.fDr.prototype={
$1(d){return d.a},
$S:z+16}
C.fDu.prototype={
$1(d){return d.a},
$S:z+16}
C.fBr.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fBs.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fvR.prototype={
$0(){return C.cC()},
$S:22}
C.fvU.prototype={
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
C.fvT.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fvS.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lr,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q6,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fvQ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fyh.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hgu.cg(0,A.a.i(s.w).toLowerCase(),new C.fyf(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fyg(s)),$async$$0)
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
C.fyf.prototype={
$0(){return F.aN1(this.a.w)},
$S:177}
C.fyg.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byF("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hB(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:177}
C.fcV.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcW.prototype={
$1(d){return d.a},
$S:z+18}
C.fcX.prototype={
$1(d){return d.b},
$S:z+19}
C.fMt.prototype={
$1(d){return D.fUM},
$S:z+41}
C.eXo.prototype={
$0(){return this.a.x=C.hKT(this.b,this.c.b)},
$S:0}
C.eXp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eXm.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:413}
C.eXn.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:413}
C.eXl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.aB,null,new C.eXg(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k5,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b1(s,7)
if(r.length===0){n.m(new C.eXh(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hmg(o,m.cGP(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eXi(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eXg.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eXk(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b3O,A.f,p,p,D.aZU,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BS:D.BX,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fyw(v,i.b2A(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bm(!0,new B.D(A9.xA,t,p),!0,!1,A.af,!0,!0)
s=new C.eXj(i,d)
m=B.aI(d,A.bU,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gz[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fjD,A.S,t,A.e1,D.eIR,A.at,D.fub,A.S,B.lX(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xA,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eXk.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bt:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hx,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eXf(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eXf.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eXj.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.an5,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.N7(u.Fp(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXe(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:131}
C.eXe.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eXh.prototype={
$0(){var w=this.a
return w.w=w.w.Fp("")},
$S:0}
C.eXi.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eX4.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eX5.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eX7.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eX8.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eX9.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eXa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eX6(w,d))},
$S:2}
C.eX6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eXb.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eXC.prototype={
$0(){return this.a.f.fJ()},
$S:0}
C.eXD.prototype={
$0(){var w=this.a
return w.m(new C.eXB(w))},
$S:0}
C.eXB.prototype={
$0(){return this.a.e=null},
$S:0}
C.eXE.prototype={
$0(){var w=this.a
return w.m(new C.eXA(w))},
$S:0}
C.eXA.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXG.prototype={
$1(d){var w=this.a
return w.m(new C.eXz(w,d))},
$S:32}
C.eXz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXH.prototype={
$1(d){var w=this.a
return w.m(new C.eXy(w,d))},
$S:32}
C.eXy.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXI.prototype={
$0(){var w=this.a
return w.m(new C.eXx(w))},
$S:0}
C.eXx.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXJ.prototype={
$1(d){var w=this.a
return w.m(new C.eXw(w,d))},
$S:32}
C.eXw.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXK.prototype={
$1(d){var w=this.a
return w.m(new C.eXv(w,d))},
$S:32}
C.eXv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXL.prototype={
$0(){var w=this.a
return w.m(new C.eXu(w))},
$S:0}
C.eXu.prototype={
$0(){var w=this.a
return w.w=w.w.Fp("")},
$S:0}
C.eXM.prototype={
$0(){var w=this.a
return w.m(new C.eXt(w,this.b))},
$S:0}
C.eXt.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXN.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMR(D.a2l[v]),null))
return B.bW(A.bz,t,A.bq,8,8)},
$S:165}
C.eXF.prototype={
$1(d){var w=this.a
return w.m(new C.eXs(w,d))},
$S:9}
C.eXs.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eXc.prototype={
$0(){var w=this.a
return w.m(new C.eXd(w,this.b,this.c))},
$S:0}
C.eXd.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eXr.prototype={
$0(){var w=this.a
return w.m(new C.eXq(w,this.b))},
$S:0}
C.eXq.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fMs.prototype={
$1(d){return new C.a_X(this.a,this.b,null)},
$S:z+42}
C.eWY.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eWZ.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eX_.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFv?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eX0.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eX1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWX(w,d))},
$S:2}
C.eWX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eX2.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eX3.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.h8(A.bw,w.length),A.aN))},
$S:0}
C.fjm.prototype={
$1(d){return d.a===this.a},
$S:204}
C.ecA.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawy(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cN3:D.d2l
t=D.xe.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xe.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgW(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOg(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.baA.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ef:A.lP,D.xe,q,q,q,20),A.at,B.f4(A.A,B.nL(A.jo,D.fdh,new C.ecz()),A.f,A.eh)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f9W,A.f,q,q,new B.o(D.xe,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ai5,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:96}
C.ecz.prototype={
$1(d){return D.bTD.av(0,d)},
$S:65}
C.fDA.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fDB.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:204}
C.fDC.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fDD.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fDw.prototype={
$1(d){return d.a},
$S:z+18}
C.fDx.prototype={
$1(d){return d.b},
$S:z+19}
C.fLG.prototype={
$1(d){return new C.Zj(this.a,this.b,null)},
$S:z+44}
C.dhZ.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.di_.prototype={
$1(d){return d.a===this.a.gahO()},
$S:z+10}
C.di0.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.di3.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.di4.prototype={
$0(){var w=this.a
return w.m(new C.di2(w,this.b))},
$S:0}
C.di2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.di5.prototype={
$1(d){var w=this.a
return w.m(new C.di1(w,d))},
$S:9}
C.di1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecy.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fu(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f9o.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f9q.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mD,D.cQ,g,e,f)},
$S:z+46}
C.f9p.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wp(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mD,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f9n.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fwY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fwZ.prototype={
$0(){return A.d.gJ(D.GI)},
$S:z+49}
C.fx_.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fbo.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fD2.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.be,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD3.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fr,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fD4.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jH,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jH,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fr,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDf.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jH,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jH,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jG,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDk.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jG,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDl.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jH,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDm.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cM6[w]
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDn.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mg,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cx,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fDo.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jG,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fr,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDp.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.be,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fr,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jH,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDq.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jH,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD5.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jG,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jG,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fD6.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jG,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jG,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jG,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eK,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fD7.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jH,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jG,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fD8.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jG,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jG,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fr,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fD9.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.kZ,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.kZ,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.kZ,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.kZ,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.kZ,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDa.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jH,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eK,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDb.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mg,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cx,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDc.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fr,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDd.prototype={
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
C.fDe.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iZ
$.iZ=t+1
t=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dr,A.cr,w/2).l()
t=Date.now()
s=$.iZ
$.iZ=s+1
u=new C.eJ("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.be,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jG,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fDg.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jH,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jH,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jH,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jH,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eK,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDh.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.be,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eK,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eK,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eK,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jH,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDi.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eK,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fr,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eK,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fDj.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jH,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jH,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fuO.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fuP.prototype={
$0(){return A.d.gJ($.bDp())},
$S:z+52}
C.fiV.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fiU.prototype={
$1(d){return C.hSa(d,this.a,this.b)},
$S:z+53}
C.fDJ.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vD(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRZ(B.hHU(A.uN,C.hSd(w.c,w.d,v,u),t)))},
$S:416}
C.dTm.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dTl.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bT(A.JF,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jy(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdP(u.a,r,q,r),A.au),w),B.av(new B.kf(r,new C.dTk(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:431}
C.dTk.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gJ(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fL(i,A.A,r,r,A.cl,A.bS,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mk(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqp(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJU(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:103}
C.eWb.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c7P.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hG.j(0.4),A.J,14)],x.V):v
w=B.dj(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eF,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c7Q.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fp(""))},
$S:0}
C.c7R.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.N7(v.Fp(u),!0,!1,null),!0,null),d.b,new C.c7S(w,this.c,d),v.a===u)},
$S:z+54}
C.c7S.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hmg(u.b,t.c.Fp(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fK5.prototype={
$1(d){return new C.YS(this.a,null)},
$S:z+55}
C.d7b.prototype={
$0(){var w=this.a
w.d=w.gvw().bau("data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c));++w.r},
$S:0}
C.d7g.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7h.prototype={
$0(){var w=this.a
return w.m(new C.d7f(w))},
$S:0}
C.d7f.prototype={
$0(){return this.a.r++},
$S:0}
C.d7i.prototype={
$1(d){var w=this.a
return w.m(new C.d7e(w,d))},
$S:2}
C.d7e.prototype={
$0(){var w=this.a
return w.d=w.gvw().aCT(this.b)},
$S:0}
C.d7j.prototype={
$0(){var w=this.a
return w.m(new C.d7d(w))},
$S:0}
C.d7d.prototype={
$0(){var w=this.a
return w.d=w.gvw().bau("")},
$S:0}
C.d7k.prototype={
$1(d){var w=this.a
return w.m(new C.d7c(w,d))},
$S:2}
C.d7c.prototype={
$0(){var w=this.a
return w.d=w.gvw().baB(this.b)},
$S:0}
C.d7l.prototype={
$0(){var w=this.a
w=w.gvw().baB(w.gawz().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fK4.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fK3(w),null)},
$S:21}
C.fK3.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.frk,A.at,D.frA,A.aA,new C.aZg(v.a,new C.fK2(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_q,w,w,w,w,A.LZ,w,w,w)},
$S:183}
C.fK2.prototype={
$1(d){this.b.$1(new C.fK1(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fK1.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fMr.prototype={
$1(d){return D.fQ9},
$S:z+57}
C.ddY.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ddZ.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.de_.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fAp.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d6T.prototype={
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
$S:704}
C.fAt.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fsP.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fsQ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fac,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsN(d),B.bl(A.bY,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fsO(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsN.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsO.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cde.prototype={
$1(d){return d.hC()},
$S:z+59}
C.cdf.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdd.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdJ(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hO1(b2.h(0,"type"))
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
n=A.axI[A.o.D(b4,0,8)]
m=D.cOX[A.o.D(w,0,1)]
l=C.hRD(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auu[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hUq(b2.h(0,"shape"))
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
a3=C.hhA(b2.h(0,"textTransition"))
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
C.cd3.prototype={
$1(d){return d.hC()},
$S:z+62}
C.cd4.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cd0.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd1.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd2.prototype={
$1(d){return C.h8g(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdv.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdw.prototype={
$0(){return A.d.gJ(D.a2_)},
$S:z+66}
C.cdq.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hC())},
$S:z+7}
C.cdp.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdl.prototype={
$1(d){return new B.K(d,new C.cdm(),B.U(d).k("K<1,S>")).fa(0,new C.cdn())},
$S:z+69}
C.cdm.prototype={
$1(d){return d.f},
$S:z+70}
C.cdn.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:705}
C.cdo.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hDJ(d)},
$S:z+71}
C.cdr.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cds.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdt.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fB1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.K(0,j)
break}}}},
$S:z+73}
C.fAY.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fAZ.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fB_.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fB0.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cd9.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i25(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cd8(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pD.aw(0,A.k.D(b1,0,1))
u=new C.cda()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdb(a9,b7.d)
r=new C.cdc(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jv.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kD(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
a5=r.$1(a4)}else a5=a2===D.lr&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b0,A.r,B.a([new B.kD(A.k.D(o,0,1),r.$1(l),a8),new B.kD(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iF(B.w7(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mD
p.push(s.$5(i.c,i.d,i.e,i.f,C.hjP(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:432}
C.cd8.prototype={
$1(d){return d.a},
$S:z+22}
C.cda.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdb.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cdc.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7j(v,C.b0p(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFC.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdi.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdj.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fDQ.prototype={
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
C.fCX.prototype={
$1(d){return new C.acX(this.a,this.b,null)},
$S:z+78}
C.eoZ.prototype={
$0(){return this.a.Pu(this.b,C.i5r(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ep_.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pu(this.b,C.i5t(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ep0.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pu(this.b,C.i5s(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ep1.prototype={
$0(){Y.hjz()
B.a5(this.a,!1).O(null)},
$S:0}
C.cd7.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cd6.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nw),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lM(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bS:A.du
return B.fL(t,A.A,o,new C.cd5(),A.cl,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cd5.prototype={
$3(d,e,f){return D.ab5},
$S:203}
C.fAX.prototype={
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
r=B.B(new B.K(r,new C.fAW(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fAW.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0p(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fls.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.flq(d))
w=B.aI(d,A.bU,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kz,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zB,q,q,!0,q,q,new C.flr(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F5,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fe,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:266}
C.flq.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pv())B.a5(w,!0).eK()},
$S:0}
C.flr.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eK()},
$S:0}
C.f3H.prototype={
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
case 6:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
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
s.jY(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(r*1.2)
s.jY(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jy(u.b,A.r,new C.aIJ(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jy(u.b,A.r,new C.aIJ(1-r,t))],x.p),t)
case 16:v=D.b2O.aw(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mI(r*6.28)
s.jI(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:58}
C.dRz.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRy.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRx.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hjP(v,w,e)},
$S:58}
C.cd_.prototype={
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
q=B.B(new B.K(v,new C.ccZ(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:432}
C.ccZ.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7j(m,new C.Uz(d,C.b0p(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d47.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d46(w))},
$S:11}
C.d46.prototype={
$0(){return this.a.d++},
$S:0}
C.ecg.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aME.t(0,A.d.gJ(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i1P(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e6(0,w*7,0,1)
s.fA(Math.sin(t)*0.32)
s.jY(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jI(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eTP.prototype={
$1(d){var w
$.W()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fA
return w},
$S:1693}
C.fyx.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
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
$S:250}
C.foh.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.evc.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CA(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.eva(),new C.evb(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.eva.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:184}
C.evb.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.erA.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erB.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erC.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eta.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esZ.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.et_.prototype={
$1(d){return d.hC()},
$S:z+81}
C.eqY.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eui.prototype={
$0(){this.a.tr()},
$S:0}
C.ev8.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.et8.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.euW.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.euX.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euY.prototype={
$1(d){return d.a},
$S:z+22}
C.euZ.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:260}
C.ev_.prototype={
$0(){return B.jO(!0,null,!0,!0,null,null,!1)},
$S:707}
C.eqm.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ev9.prototype={
$0(){},
$S:0}
C.esh.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xk()
w.JP()},
$S:0}
C.eqk.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xk()},
$S:0}
C.eql.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xk()},
$S:0}
C.esE.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.esF.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xk()
w.JP()
w.z="Home"},
$S:0}
C.esG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esg.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.esf(d),w,w)],x.p),w,w,w,D.ft6,w,w,w,w,D.faE,w)},
$S:19}
C.esf.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esd.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.esc(d),w,w)],x.p),w,w,w,D.feC,w,w,w,w,D.fcm,w)},
$S:19}
C.esc.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ese.prototype={
$0(){},
$S:0}
C.erw.prototype={
$1(d){return this.a.aZS(C.bBp(d))},
$S:z+7}
C.erx.prototype={
$1(d){return this.a.aem(C.bBp(d))},
$S:z+7}
C.esn.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fta,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pf(A.vx,D.avQ,"HATI YA KUHOWA","Hati ya mahari",new C.esi(d),w),A.S,new C.Pf(A.h9,D.d0b,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esj(d),w),A.S,new C.Pf(A.i_,D.cN9,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esk(d),w),A.S,new C.Pf(A.hL,D.cLt,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.esl(d),w)],v)
if(this.a.gaaS())A.d.v(u,B.a([A.S,new C.Pf(A.iY,D.cwA,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esm(d),w)],v))
return B.bm(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xD,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.esi.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esj.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esk.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.esl.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esm.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eso.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xk()},
$S:0}
C.eqo.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eqp.prototype={
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
C.esz.prototype={
$1(d){return d.b===D.lr},
$S:z+4}
C.esA.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gJ(v).go
w.b=A.d.gJ(v).id
return new B.e0(new C.esx(w,this.a,v),null)},
$S:21}
C.esx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.esy(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bL,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cC,j,q,q,q,q),q,q,q,new C.est(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BX[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgQ(t,u.b,p.a===t,i,k,new C.esu(v,m),q))}a1=B.bW(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BS[w]
s.a=null
t=s.a=r.a
u.push(new C.bgP(t,r.b,p.b===t,k,j,new C.esv(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.by,v,A.S,B.bW(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.ey(D.bPV,D.fvx,new C.esw(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXW,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tx,D.bs2,q,q,q),!0,!1,A.af,!0,!0)},
$S:84}
C.esy.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.esr(w.a,d,e))
w.b.d3(new C.ess(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.esr.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ess.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.est.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esu.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.esv.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.esw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.esq(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esq.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.esC.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esD.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.esB(t.d))
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
s.xk()},
$S:0}
C.esB.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esU.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esV.prototype={
$1(d){return d.w},
$S:z+82}
C.esW.prototype={
$2(d,e){return d>e?d:e},
$S:87}
C.esX.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bU,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bJD,A.f,v,v,D.aZk,v,38,v,v,v,v,v,38),A.bf,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cC,s,v,v,v,v),v,v,v,new C.esR(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dq(1,A.cn,B.hH(v,new C.esS(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.esT(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tx,A.Ym,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.esR.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esT.prototype={
$2(d,e){return A.ac},
$S:36}
C.esS.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bMJ,q,q,q,new C.esP(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.bug,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aXB),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.esQ(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:708}
C.esP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i7z(k),$async$$0)
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
l.ais(k,m)
l.pg()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esQ.prototype={
$1(d){var w=this.a
w.ais(this.b.a,d)
w.pg()},
$S:2}
C.esY.prototype={
$0(){},
$S:0}
C.esp.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqF.prototype={
$0(){},
$S:0}
C.eqG.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hl7(this.b,w,!0)
w=this.a
w.r=null
w.xk()},
$S:0}
C.eqH.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqI.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eqE(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xk()},
$S:0}
C.eqE.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.et3.prototype={
$1(d){return B.oL(new C.et2(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.et2.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ahM,B.v(B.a([D.fqK,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ie(!0,w,e,A.y,D.eOD,new C.et1(this.a,this.b),20,A.tA,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:435}
C.et1.prototype={
$2(d,e){var w=null,v=D.GI[e],u=C.hDE(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eIN,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nb,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.et0(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.et0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdh(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.et4.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xk()},
$S:0}
C.epj.prototype={
$0(){var w,v=this.a,u=v.gqi(),t=C.ro(4294967295,null,0,0,null,C.cC(),D.mC,"","","",D.dd),s=this.b
C.cdu(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cw){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqD.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iZ
$.iZ=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h8g(q));++v.f},
$S:0}
C.eqB.prototype={
$0(){var w=this.a
A.d.cC(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.etc.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cC(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eqx.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eqw(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eqw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etb.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqn.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:260}
C.eqZ.prototype={
$0(){return B.jO(!0,null,!0,!0,null,null,!1)},
$S:707}
C.euU.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.euV.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asA(w).fJ()
v=u.Wb(w)
v.st8(B.h8(A.bw,v.a.a.length))},
$S:8}
C.euj.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xa(v)
if(u!=null&&u.b===D.cQ)w.Wb(u).saV(0,u.r)}else w.w=null},
$S:0}
C.epk.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,v.gqi().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eph.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gqi().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqi().c.l(),2,"",0,0,"",D.cm,D.f_,0.25,0.3,0.3)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.ep7.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,0.6,0.2,0.18),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.ep4.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bWB],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj3().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bHl,r,r,r,r,new C.ep3(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cz(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.ep3.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.ep5.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cm,D.a4w,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eqz.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eqA.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eqy(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eqy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.epM.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.epN(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.epN.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.epR.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.epS(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.epS.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.epP.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.epQ(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.epQ.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fe(w,new C.epO()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.epO.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epL.prototype={
$0(){return C.cdu(this.b,this.c,this.a.gqi())},
$S:0}
C.esO.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ev2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev3.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ev4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev5.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.ev1(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRS()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hC()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xk()
t.JP()}},
$S:0}
C.ev1.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.euz.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaW(),s=w.b,r=u.aaX(A.fa,A.kT,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.A(B.a([B.E(u.aU1(w.c,A.ak),1),new B.D(A.fq,B.p(v,D.bHr,A.f,v,v,new B.o(A.fa.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aU1(s,A.fa),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.by,u.aU4(A.fa,d,D.bDw,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWe(A.aS,d,A.tO,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aU2(d,"Not now"))
return new C.Jy(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euy.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jy(B.v(B.a([v.aaW(),A.N,v.aaX(A.aS,D.bDb,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.42),B.hH(w,new C.euw(v,u,d),u.length,w,w,A.ah,new C.eux(),!0),w),A.aA,v.aU2(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eux.prototype={
$2(d,e){return A.S},
$S:36}
C.euw.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.amB,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bTy,A.n),w,42,w,w,w,w,w,42),A.bf,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nt,w,w,w),A.cV,B.d("Updated "+this.a.Pv(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euv(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.euv.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eus.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaW()
t=t.aaX(A.aH,A.tX,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jy(B.v(B.a([s,A.N,t,A.by,B.A(B.a([B.E(B.dT(A.a7R,new C.euq(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.fcW,new C.eur(d),B.bl(A.fa,u,u,u,A.c,u,A.ck,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.euq.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eur.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.euu.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaW(),s=w.b,r=u.aaX(A.aV,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.atU("Names",""+w.c),1),A.ab,B.E(u.atU("Fields",""+w.d),1),A.ab,B.E(u.atU("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bl(A.bj,v,v,v,A.c,v,A.xs,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jy(B.v(B.a([t,A.N,r,A.aQ,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nr,v,v,v),new C.eut(d),o),A.S,u.aU3(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eut.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ers.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.err.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.euk.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euT.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_3(A.d.dL(w.d,new C.euR(v),new C.euS(v)).hC(),w.f,null)},
$S:z+84}
C.euR.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euS.prototype={
$0(){return this.a},
$S:z+85}
C.epc.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hq,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJd,w,w,w,w,new C.epa(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.faY,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKm,w,w,w,w,new C.epb(d),!1,w,w,w,w,w,D.fwI,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dm,w,w,w),w,w,w))
return B.bm(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.epa.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.epb.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.epd.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cm,D.Rp,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epe.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iZ
$.iZ=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iZ
$.iZ=k+1
m.push(new C.eJ(""+1000*l+"_"+k,D.Rp,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lD(""+1000*p+"_"+o,r+n,"",D.q5,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.epi.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.ku(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kY,0.35,0.55,0.62)
A.d.K(u.gdr().z,w)
u.r=w.a},
$S:0}
C.ep9.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1G(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ee(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kY,s,u,t)
A.d.K(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.ep8(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i1y(p)}},
$S:0}
C.ep8.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.et9.prototype={
$0(){var w=this.a,v=this.b
w.b1G(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ev0.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.erv.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.eru())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eru.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.epV.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.epW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tr()},
$S:8}
C.ep6.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,0.8,0.1,0.1),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eqX.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epf.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdr().z,v)
w.r=v.a},
$S:0}
C.epo.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.epp.prototype={
$0(){var w=this.b.hC(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdr().z,f)
t.r=f.a},
$S:0}
C.epq.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epn(v))
if(u>=0&&u<w.length-1){A.d.cC(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.epn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epB.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epm(v))
if(u>0){A.d.cC(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.epm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epE.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.epF.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epG.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.epH.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.epI.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.epJ.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epK.prototype={
$1(d){return d.length!==0},
$S:3}
C.epr.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.CF(w.gqi().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.K(u,C.iS(A.bg,!1,w.gqi().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eps.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.K(u,C.CF(v.gqi().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bC7()
A.d.K(t,C.iS(A.L,!1,v.gqi().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.ept.prototype={
$0(){A.d.K(this.a.gdr().z,C.CF(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.epu.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdr().z,C.CF(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.epv.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.K(v,C.CF(w.gqi().c.j(0.35).l(),0.12,u,D.Cx,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q6,0.5,0.38,0.52))},
$S:0}
C.epw.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.CF(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bC7()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.epx.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.CF(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdr().z,C.iS(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aFk,0.26,0.64,0.14))},
$S:0}
C.epy.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdr().z,C.CF(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdr().z,C.CF(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.epz.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HF,0.42,0.06,0.18))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ub,0.42,0.52,0.18))},
$S:0}
C.epA.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.CF(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdr().z,C.CF(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.K(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.epC.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.CF(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.K(v.gdr().z,C.iS(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.epD.prototype={
$0(){return C.cdu(this.b,D.Rq,this.a.gqi())},
$S:0}
C.eqW.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6b.t(0,d),t=this.a
return t.b6D(d,v===d,A.aZ,this.c,new C.eqV(t,u,d,w),u)},
$S:z+25}
C.eqV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o3(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bCV(r,new C.eqU(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqU.prototype={
$0(){return this.a.d3(new C.eqT(this.b,this.c))},
$S:0}
C.eqT.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epg.prototype={
$0(){var w,v=this.a,u=v.gqi(),t=C.ro(4294967295,null,0,0,null,C.cC(),D.mC,"","","",D.dd),s=this.b
C.cdu(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cw){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.epZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i7C(p,q.d,s,new C.epY(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tr(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epY.prototype={
$1(d){return this.bjh(d)},
bjh(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.epX(t,d))
w=2
return B.b(t.tr(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.epX.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eq_.prototype={
$0(){return this.a.bHb()},
$S:0}
C.eq0.prototype={
$0(){return this.a.aPi("Class Presentation",!0)},
$S:0}
C.eq1.prototype={
$1(d){return this.a.bI7(d.b,this.b,d.a)},
$S:z+88}
C.eqC.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.esN.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.esM(this.a,this.b),null),null)},
$S:59}
C.esM.prototype={
$2(d,e){return B.oL(new C.esL(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:657}
C.esL.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahe,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zB,v,v,!0,v,v,new C.esJ(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cz(B.a([p.aS1(u,!0,!0,new C.esK(p,w.d))],q),e,D.bpV,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kE,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.esJ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esK.prototype={
$0(){this.b.$1(new C.esH())
var w=this.a
if(w.c!=null)w.m(new C.esI())},
$S:0}
C.esH.prototype={
$0(){},
$S:0}
C.esI.prototype={
$0(){},
$S:0}
C.eul.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.eum.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.ayc(this.a,null),0.94+w*0.06,null,null),w)},
$S:436}
C.eun.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.euo.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.bcb(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:436}
C.eup.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vw(this.b))},
$S:0}
C.epl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pq.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.cc.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_a,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tS(A.fv,B.p(p,B.v(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:279}
C.eqq.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eqr.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqs.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.ko
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_H:A.Bm}return w},
$S:709}
C.eqv.prototype={
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
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mR.j(0.82)],s)
r=m.e
q=A.d.gJ(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ku(v.w)?A.vx:A.pU,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pv(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pv(v.f)
r=k.bI5(n,A.d.gJ(r),t)
return B.p(l,B.bw(j,new B.a7u(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.LW,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.nZ,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eqt(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.equ(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:96}
C.equ.prototype={
$0(){return this.a.aem(this.b)},
$S:0}
C.eqt.prototype={
$0(){return this.a.AG(this.b,this.c)},
$S:0}
C.erW.prototype={
$0(){var w=this.a
w.b5h()
w.m(new C.erV())},
$S:0}
C.erV.prototype={
$0(){},
$S:0}
C.erX.prototype={
$1(d){return this.a.ais(this.b.a,d)},
$S:2}
C.erY.prototype={
$0(){this.a.d3(new C.erU(this.b))},
$S:0}
C.erU.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.erZ.prototype={
$0(){this.a.d3(new C.erT(this.b))},
$S:0}
C.erT.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.es_.prototype={
$0(){this.a.d3(new C.erS(this.b))},
$S:0}
C.erS.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mI},
$S:0}
C.es0.prototype={
$0(){this.a.d3(new C.erR(this.b))},
$S:0}
C.erR.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.es1.prototype={
$0(){var w=this.a
w.d3(new C.erQ(w,this.b))},
$S:0}
C.erQ.prototype={
$0(){var w=this.b
return w.as=this.a.c1V(w.as)},
$S:0}
C.es2.prototype={
$0(){return this.a.d3(new C.erP(this.b))},
$S:0}
C.erP.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es3.prototype={
$0(){return this.a.d3(new C.erO(this.b))},
$S:0}
C.erO.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erH.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.erI.prototype={
$0(){this.a.a_8()
return null},
$S:0}
C.erJ.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bU,x.w).w.a.a<900)w.aeF()
else w.m(new C.erG(w))},
$S:0}
C.erG.prototype={
$0(){return this.a.as=!0},
$S:0}
C.erK.prototype={
$0(){this.a.d3(new C.erF(this.b))},
$S:0}
C.erF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.erL.prototype={
$0(){return this.a.d3(new C.erE(this.b))},
$S:0}
C.erE.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erM.prototype={
$0(){return this.a.d3(new C.erD(this.b))},
$S:0}
C.erD.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erN.prototype={
$0(){return this.a.ayW(null)},
$S:0}
C.eqP.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.eqQ.prototype={
$0(){this.a.a9u()
return null},
$S:0}
C.eqS.prototype={
$1(d){return this.bji(d)},
bji(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(B.bR(A.aB,null,new C.eqK(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.eqL(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqM(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqN(r))
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
return B.b(C.hmf(q,new C.Ee(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.eqO(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agv(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eqK.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e6q],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bJk:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eqJ(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dm,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eqJ.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eqL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqM.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eqN.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqO.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqR.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zv(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zv(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zv(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agv(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ebr,q,v,u,B.zv(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:128}
C.ev6.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC4(w,v)}},
$S:0}
C.ev7.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.es6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bTs:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.D(A.fy,B.aE(u,B.dj(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eF,u,u,u,A.lK,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.es5(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:136}
C.es5.prototype={
$0(){var w=this.a
return w.m(new C.es4(w,this.b))},
$S:0}
C.es4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.es7.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2w:E.avW
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLv():t.gbHw()
return B.hq(B.aE(u,B.p(u,D.am2,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gJ(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.es8.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i6S(v,w.a.c)},
$S:0}
C.etv.prototype={
$0(){return this.b.v3(this.a.a)},
$S:0}
C.etw.prototype={
$0(){return this.a.v3(D.mC)},
$S:0}
C.etx.prototype={
$0(){return this.a.v3(D.HD)},
$S:0}
C.etI.prototype={
$0(){return this.a.v3(D.HE)},
$S:0}
C.etT.prototype={
$0(){return this.a.v3(D.HC)},
$S:0}
C.eu3.prototype={
$0(){return this.a.q3("lab_report")},
$S:0}
C.eua.prototype={
$0(){return this.a.q3("rubric")},
$S:0}
C.eub.prototype={
$0(){return this.a.q3("minutes")},
$S:0}
C.euc.prototype={
$0(){return this.a.q3("agenda")},
$S:0}
C.eud.prototype={
$0(){return this.a.q3("timeline")},
$S:0}
C.eue.prototype={
$0(){return this.a.q3(this.b.a)},
$S:0}
C.ety.prototype={
$0(){this.a.Vk()
return null},
$S:0}
C.etz.prototype={
$0(){this.a.Ve()
return null},
$S:0}
C.etA.prototype={
$0(){return this.a.q3("table")},
$S:0}
C.etB.prototype={
$0(){return this.a.q3("sticky")},
$S:0}
C.etC.prototype={
$0(){return this.a.q3("divider")},
$S:0}
C.etD.prototype={
$0(){return this.a.q3("header_bar")},
$S:0}
C.etE.prototype={
$0(){return this.a.oX(D.be)},
$S:0}
C.etF.prototype={
$0(){return this.a.oX(D.eK)},
$S:0}
C.etG.prototype={
$0(){return this.a.oX(D.jG)},
$S:0}
C.etH.prototype={
$0(){return this.a.oX(D.Cx)},
$S:0}
C.etJ.prototype={
$0(){return this.a.oX(D.jH)},
$S:0}
C.etK.prototype={
$0(){return this.a.oX(D.kZ)},
$S:0}
C.etL.prototype={
$0(){return this.a.oX(D.fr)},
$S:0}
C.etM.prototype={
$0(){this.a.H1()
return null},
$S:0}
C.etN.prototype={
$0(){this.a.N_()
return null},
$S:0}
C.etO.prototype={
$0(){return this.a.q3("quote")},
$S:0}
C.etP.prototype={
$0(){return this.a.a7D()},
$S:0}
C.etQ.prototype={
$0(){this.a.a_e()
return null},
$S:0}
C.etR.prototype={
$0(){var w=this.a
return w.m(new C.etl(w))},
$S:0}
C.etl.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.etS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o3(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ett(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ett.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.etU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jO()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6c.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b3
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6c.t(0,q))u.push(B.ao(s,B.p(s,D.NE,A.f,s,s,D.DO,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fy,B.aE(s,B.hq(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ets(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.ets.prototype={
$0(){this.a.a7V(this.b)
return null},
$S:0}
C.etV.prototype={
$0(){this.a.a7U(this.b)
return null},
$S:0}
C.etW.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hDF(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b3
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.ro(4294967295,r,0,0,r,"preview_"+w,D.q5,"","","",D.dd)
C.hjc(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hkw(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amC,A.f,r,r,D.DO,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iU,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.etr(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.etr.prototype={
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
return B.b(s.o3(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.eth(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eth.prototype={
$0(){return C.hjc(this.a,this.b.a)},
$S:0}
C.etu.prototype={
bjj(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6b.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o3(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjj(d,e)},
$S:z+91}
C.euf.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.euh(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.euh.prototype={
$1(d){var w=this
return w.a.b6D(d,w.b===d,w.c,w.d,new C.eug(w.e,d),!D.a6b.t(0,d))},
$S:z+25}
C.eug.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.etX.prototype={
$1(d){this.b.$2(d,new C.etq(this.a,d,this.c))
return null},
$S:z+26}
C.etq.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCV(u,new C.etg(v,this.c,w),w)},
$S:0}
C.etg.prototype={
$0(){return this.a.d3(new C.ete(this.b,this.c))},
$S:0}
C.ete.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.etY.prototype={
$1(d){this.b.$2(d,new C.etp(this.a,d))
return null},
$S:z+26}
C.etp.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fNf(u,new C.etf(v,w),w)},
$S:0}
C.etf.prototype={
$0(){var w=this.a
return w.d3(new C.etd(w,this.b))},
$S:0}
C.etd.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.etZ.prototype={
$0(){var w=this.a
return w.m(new C.eto(w))},
$S:0}
C.eto.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eu_.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC4(w,v)}},
$S:0}
C.eu0.prototype={
$0(){this.a.HO()
return null},
$S:0}
C.eu1.prototype={
$0(){return this.a.a7D()},
$S:0}
C.eu2.prototype={
$0(){var w=this.a,v=w.jO()
if(v!=null&&v.b===D.cQ)w.d3(new C.etn(v))},
$S:0}
C.etn.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eu4.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.eu5.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F0(v,!0)
return null},
$S:0}
C.eu6.prototype={
$0(){this.a.d3(new C.etm(this.b))},
$S:0}
C.etm.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.eu7.prototype={
$0(){this.a.d3(new C.etk(this.b))},
$S:0}
C.etk.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.eu8.prototype={
$0(){this.a.d3(new C.etj(this.b))},
$S:0}
C.etj.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mI},
$S:0}
C.eu9.prototype={
$0(){this.a.d3(new C.eti(this.b))},
$S:0}
C.eti.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epU.prototype={
$1(d){return this.bjg(d)},
bjg(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o3(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d3(new C.epT(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.epT.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.euC.prototype={
$0(){var w=this.a
return w.d3(new C.euB(w,this.b))},
$S:0}
C.euB.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.euD.prototype={
$0(){var w=this.a
return w.d3(new C.euA(w,this.b))},
$S:0}
C.euA.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.er1.prototype={
$0(){return this.a.d3(new C.er0(this.b))},
$S:0}
C.er0.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.er2.prototype={
$0(){return this.a.d3(new C.er_(this.b))},
$S:0}
C.er_.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erz.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.aoi,new C.ery(),w),w.k("ak.E"))
return w},
$S:z+94}
C.ery.prototype={
$1(d){var w=null
return B.zv(B.d(d.b,w,w,w,w,w,w,A.m3,w,w,w),48,d,x.fO)},
$S:z+95}
C.euP.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.euO.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kc()?q:new C.euM(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b3:A.cq
v=B.I(v,A.q,o?2:1)
u=r.d?A.cD:A.c
t=B.bZ(0,C.hkw(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nq,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ai6,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euN(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:76}
C.euN.prototype={
$0(){var w=this.a
return w.m(new C.euI(w,this.b))},
$S:0}
C.euI.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JP()},
$S:0}
C.euM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.euJ(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.euK(q,s))
q.aQL()}else if(r==="del"){q=t.a
q.m(new C.euL(q,s))
q.aPU()}else if(r==="up")t.a.b1T(s,s-1)
else if(r==="down")t.a.b1T(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euJ.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKY,w,w,w,w,new C.euE(d),!1,w,w,w,w,w,w,w,D.fbV,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKR,w,w,w,w,new C.euF(d),!1,w,w,w,w,w,w,w,A.wh,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bK8,w,w,w,w,new C.euG(d),!1,w,w,w,w,w,w,w,D.fjT,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMa,w,w,w,w,new C.euH(d),!1,w,w,w,w,w,w,w,D.fbK,w,w,w))
return B.bm(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.euE.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.euF.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.euG.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.euH.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.euK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euQ.prototype={
$0(){return this.a.a7D()},
$S:0}
C.eqj.prototype={
$0(){var w=this.a
w.b5h()
w.ayW(null)},
$S:0}
C.eqi.prototype={
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
s=B.a([B.bw(s,B.c_(A.kw,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.eqh(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:432}
C.eqh.prototype={
$1(d){var w=this
return w.a.bDs(d,w.b,w.c,w.d)},
$S:z+23}
C.eq6.prototype={
$0(){var w=this
if(w.b){w.a.N8(w.c)
return}if(w.d){w.a.a7B(w.c)
return}if(w.e){w.a.afZ(w.c)
return}if(w.f)w.a.b5N(w.c)},
$S:0}
C.eq7.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
C.eq8.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.eq9.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eq5(u,d,w.c,w.d))
v.Ht()
v.oc()
v.pg()},
$S:18}
C.eq5.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eqa.prototype={
$1(d){return this.a.ais(this.b.a,d)},
$S:2}
C.eqc.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fZ6(w))u.a.N8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5N(v)},
$S:0}
C.eqb.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.eqd.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eq4(w.b,d,w.c,w.d))
v.Ht()
v.oc()
v.pg()},
$S:18}
C.eq4.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqe.prototype={
$1(d){var w=this.a
w.m(new C.eq3(this.b,d))
w.Ht()
w.oc()
w.pg()},
$S:206}
C.eq3.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqf.prototype={
$0(){var w=this.a
w.m(new C.eq2(this.b))
w.Ht()
w.oc()
w.pg()},
$S:0}
C.eq2.prototype={
$0(){this.a.r=C.hk1()},
$S:0}
C.eqg.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.esa.prototype={
$0(){var w=this.a
return w.m(new C.es9(w))},
$S:0}
C.es9.prototype={
$0(){return this.a.y=!1},
$S:0}
C.esb.prototype={
$1(d){return this.a.cAw(this.b.a,d)},
$S:2}
C.erf.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.erg.prototype={
$1(d){return this.a.$1(new C.ere(this.b,d))},
$S:6}
C.ere.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erh.prototype={
$1(d){return this.a.$1(new C.erd(this.b,d))},
$S:6}
C.erd.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eri.prototype={
$1(d){return this.a.$1(new C.erc(this.b,d))},
$S:6}
C.erc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erj.prototype={
$1(d){return this.a.$1(new C.erb(this.b,d))},
$S:6}
C.erb.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.erk.prototype={
$1(d){return this.a.$1(new C.era(this.b,d))},
$S:6}
C.era.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.erl.prototype={
$1(d){return this.b.$1(new C.er9(this.a,this.c))},
$S:9}
C.er9.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erm.prototype={
$1(d){return this.b.$1(new C.er8(this.a,this.c))},
$S:9}
C.er8.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ern.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.er7(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.er7.prototype={
$0(){return this.a.$1(new C.er4(this.b,this.c))},
$S:0}
C.er4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ero.prototype={
$1(d){return this.a.$1(new C.er6(this.b,d))},
$S:1705}
C.er6.prototype={
$0(){var w=this.b
return this.a.as=w.gJ(w)},
$S:0}
C.erp.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.er5(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.er5.prototype={
$0(){return this.a.$1(new C.er3(this.b,this.c))},
$S:0}
C.er3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.erq.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pv()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eK()}v.a.arA()},
$S:0}
C.ert.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.tX,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.na,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:133}
C.ep2.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eE(B.v(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F9,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:133}
C.et7.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.ans,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.et5(d),w,w),B.bG(A.pb,new C.et6(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.et5.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.et6.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d_J.prototype={
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
t=B.aq(A.aK,A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni).j(0.18+w*0.12),A.J,32+w*10),D.aaA],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ku(j.a.c.w)?D.u4:M.ni).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ku(m)?D.u4:M.ni
s=B.a([new B.ac(0,A.G,A.d.gJ(C.ku(m)?D.u4:M.ni).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.ku(j.a.c.w)?A.vx:A.pU,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f4a,A.L,k,k),A.at,B.d(j.gcvx(),k,k,k,k,k,k,D.f8F,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRS()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.ku(j.a.c.w)?D.u4:M.ni).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jr(A.xW,"Download PDF","pdf",A.d6,j.II(0),!1,k))
p=j.a.c
if(!p.z||p.gRS()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jr(A.kT,"Transfer to "+C.hk3(p==null?"":p),"transfer_hati",A.aV,j.II(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jr(D.bCz,"Rename presentation","rename",A.cc,n,!1,k),A.am,new C.Jr(A.ajL,"Duplicate","duplicate",A.b7,j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
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
s.push(B.dU(B.dc(B.bK(!1,E.aQj,k,k,!0,k,k,new C.d_I(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bsZ,k,k,k,k,k,A.k1,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bs7,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.V1,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:46}
C.d_I.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d04.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d05.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d_G.prototype={
$1(d){var w=this.a
return w.m(new C.d_C(w))},
$S:23}
C.d_C.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_H.prototype={
$1(d){var w=this.a
return w.m(new C.d_B(w))},
$S:49}
C.d_B.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_F.prototype={
$0(){var w=this.a
return w.m(new C.d_D(w))},
$S:0}
C.d_D.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_E.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.evN.prototype={
$0(){return $.bjJ=!$.bjJ},
$S:0}
C.evD.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTV())u.avp()},
$S:0}
C.evM.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evE.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avp()},
$S:0}
C.evz.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gJ(w.a.c.r).r
w.d=0},
$S:0}
C.evA.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.evB.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evC.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.evK.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.evL.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cZ(e,!1,d,null)
w=this.a
return w.cty(w.e,d,e)},
$S:437}
C.evG.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fA((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evH.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jY((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evI.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fA(v.gp(0)*0.8)
w.jY(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evJ.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fA(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evO.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYo().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYo().x
t===$&&B.c()
return new C.b0q(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Io(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:698}
C.evQ.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bU,x.w).w.a.a*0.55)w.avp()
else w.ci5()},
$S:49}
C.evP.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDG.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:438}
C.fDP.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fDM(d),w,w),B.bK(!1,D.fr3,w,w,!0,w,w,new C.fDN(d,this.b,v),w,w),B.bG(A.aQA,new C.fDO(d,v,this.c),w)],x.p),w,w,L.tg,new B.a7(320,w,t,w),w,w,w,w,D.fsw,w)},
$S:19}
C.fDM.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDN.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.fZL(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDO.prototype={
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
C.fDF.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdx.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:632}
C.fDL.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fbQ.prototype={
$1(d){return C.fZJ(C.Vw(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fMv.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.fMw.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,D.fRK,0.94+w*0.06,null,null),w)},
$S:436}
C.fMx.prototype={
$1(d){var w=this
return new C.Vy(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evj.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evf.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evi.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vz(u,this.b,w.gaNf(),v,null)},
$S:z+99}
C.evg.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evk.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evo.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evp.prototype={
$0(){var w=this.a
return w.m(new C.evn(w))},
$S:0}
C.evn.prototype={
$0(){return this.a.d="one"},
$S:0}
C.evq.prototype={
$0(){var w=this.a
return w.m(new C.evm(w))},
$S:0}
C.evm.prototype={
$0(){return this.a.d="all"},
$S:0}
C.evr.prototype={
$1(d){return this.a.bI6(d,this.b)},
$S:z+100}
C.eve.prototype={
$0(){var w=this.a
return w.m(new C.evd(w,this.b))},
$S:0}
C.evd.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evs.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.evt.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.evu.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evv.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(D.eRC)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoW())},
$S:0}
C.eoW.prototype={
$0(){},
$S:0}
C.eoY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fJ()},
$S:8}
C.eoT.prototype={
$1(d){return this.a.m(new C.eoS())},
$S:2}
C.eoS.prototype={
$0(){},
$S:0}
C.eoU.prototype={
$1(d){return this.a.aYJ()},
$S:2}
C.eoV.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evy.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.evx(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.evx.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fy_.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.kf(this.c,new C.fxZ(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fxZ.prototype={
$3(d,e,f){return new C.Io(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fy0.prototype={
$1(d){var w=null
return B.oh(!1,B.av(new C.bue(this.a,this.b,w),w,w,w),w,x.z)},
$S:333}
C.fy4.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmz(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n6,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmz(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pQ))throw B.V("Could not draw the slide.")
u=r.lX(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fy5.prototype={
bjP(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hN([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fQA(t)
w=4
return B.b(new B.pW(s,"load",!1,x.ev).gJ(0).cM(0,A.jw),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjP(d)},
$S:1710}
C.fy1.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:154}
C.fy2.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fP(0)},
$S:154}
C.fy3.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f68.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f0H,A.L,w,w)},
$S:1711}
C.f69.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m0(A.bm,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:646}
C.ed7.prototype={
$1(d){this.a.ZA()
return null},
$S:12}
C.ed5.prototype={
$0(){return this.a.e=D.bob},
$S:0}
C.ed6.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cg5.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cg6.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLg.prototype
w.buo=w.q
w=C.aKK.prototype
w.btR=w.q
w=C.aKv.prototype
w.btB=w.q
w=C.aKJ.prototype
w.btQ=w.q
w=C.aLe.prototype
w.bum=w.q
w=C.aMB.prototype
w.bvU=w.q
w=C.aJq.prototype
w.bst=w.q
w=C.aLs.prototype
w.buA=w.q
w=C.aLt.prototype
w.buB=w.q
w=C.b25.prototype
w.bp7=w.aC2})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i4F","an0",104)
v(C.aIp.prototype,"gc2g","Yv",0)
var r
u(r=C.ax_.prototype,"gcuT","cuU",38)
v(r,"gc31","acG",0)
v(r=C.awW.prototype,"gaXh","DP",3)
v(r,"gc2Z","c3_",3)
v(r,"gavH","xz",0)
v(r,"gavI","Il",0)
t(C,"i55","hBp",105)
v(C.aD3.prototype,"gc5C","c5D",3)
s(C,"i5g",0,null,["$4$paper$photo$request$template"],["fF4"],106,0)
s(C,"i5f",0,null,["$5$doc$history$instruction$photo$template"],["bBn"],107,0)
v(r=C.aDm.prototype,"gc6j","IF",0)
v(r,"gbHz","Wn",0)
v(r,"gc6m","adv",0)
v(r,"gc6l","Zm",0)
v(r,"gaYo","E6",0)
v(C.aDq.prototype,"gc6r","Zo",0)
v(r=C.aEN.prototype,"gaYB","Pr",0)
v(r,"gcmW","b1Z",3)
v(r,"gcwh","aAc",86)
v(r,"gbLl","a9y",0)
v(r,"gc6S","Aj",0)
v(r=C.aGI.prototype,"gcgP","a_J",0)
v(r,"gcgX","a_M",0)
v(r,"gbAu","a80",0)
v(r,"gc6W","adH",0)
v(C.aGH.prototype,"gc6X","adI",0)
v(C.aAI.prototype,"gbzt","a7O",0)
v(C.az5.prototype,"gc6Y","Zz",0)
w(C,"i5t","i3m",12)
w(C,"i5r","i0j",12)
w(C,"i5s","i2m",12)
v(r=C.aDG.prototype,"gczr","czs",3)
v(r,"gcla","clb",3)
u(r,"gEc","aem",7)
v(r,"gbFb","aqK",3)
u(r,"gEd","aZS",7)
v(r,"gc94","ae3",0)
v(r,"gc7W","ae2",0)
v(r,"gcbe","aen",0)
v(r,"gbHw","a99",0)
v(r,"gcc7","a_8",0)
v(r,"gcc8","aeE",0)
v(r,"gccF","aeL",0)
v(r,"gcbr","aeq",0)
v(r,"gbLv","a9C",0)
v(r,"gaQK","aQL",3)
v(r,"gaPT","aPU",3)
v(r,"gaLA","aLB",3)
v(r,"gaPS","arA",3)
u(r,"gbzK","bzL",80)
v(r,"gazL","b50",3)
v(r,"gc7Y","c7Z",3)
v(r,"gbWy","bWz",3)
v(r,"gbJZ","bK_",3)
v(r=C.aDJ.prototype,"gcyi","cyj",3)
v(r,"gcxY","cxZ",3)
t(C,"i5u","i3D",2)
v(r=C.aDH.prototype,"gc73","IK",0)
v(r,"gcoV","QS",0)
v(r,"gc70","IJ",0)
v(r,"gcAH","a2e",0)
v(r,"gccR","aeS",0)
v(C.aDF.prototype,"gc74","aYJ",3)
v(r=C.aDI.prototype,"gbMg","a9M",0)
u(r,"gc71","c72",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Ro,C.bGW,C.bFi,C.cwa,C.cw8,C.bN6,C.b7R,C.cw9,C.bDT,C.cg_,C.cfY,C.cfZ,C.cfX,C.asa,C.cfW,C.bO_,C.of,C.aEh,C.jm,C.nC,C.a7t,C.zi,C.lc,C.os,C.m2,C.zk,C.nG,C.a7B,C.aqy,C.b0r,C.ecx,C.l9,C.En,C.eu,C.iX,C.Ee,C.xp,C.eJ,C.lD,C.i_,C.jF,C.a7C,C.aeL,C.b0s,C.b25,C.a2p])
u(B.ki,[C.cE0,C.bYF,C.ftc,C.cFw,C.cET,C.fyI,C.dXC,C.dXB,C.eda,C.ed9,C.fA6,C.fcY,C.fcZ,C.cbV,C.cbW,C.cbX,C.ehy,C.eQl,C.ePJ,C.ePI,C.eQM,C.eQj,C.eQc,C.eQv,C.eRb,C.fk7,C.eXk,C.eXj,C.eXN,C.ecA,C.fDC,C.dTl,C.fK3,C.fAt,C.cdp,C.cdn,C.cds,C.fAY,C.fAZ,C.fB_,C.fB0,C.cd9,C.cda,C.dFC,C.cd6,C.fAX,C.f3H,C.dRx,C.cd_,C.ecg,C.fyx,C.esx,C.esW,C.esT,C.esS,C.et2,C.et1,C.eux,C.euw,C.esM,C.esL,C.epl,C.eqv,C.etu,C.euP,C.euO,C.eqi,C.ert,C.ep2,C.d_J,C.evK,C.evL,C.evG,C.evH,C.evI,C.evJ,C.evO,C.cdx,C.evj,C.evu,C.cg6])
u(B.hU,[C.cE1,C.cE2,C.bO0,C.fqB,C.bYE,C.bYH,C.fGy,C.f4F,C.f4w,C.f4M,C.fbR,C.fbS,C.ftd,C.ftb,C.fG2,C.fqh,C.fGU,C.cFm,C.cFr,C.cFt,C.cFp,C.cFu,C.cFn,C.cFv,C.cFi,C.cFf,C.cFe,C.cFl,C.cEO,C.cEM,C.fxK,C.fxL,C.fgf,C.fyJ,C.fyP,C.ffi,C.c8d,C.fxI,C.fxJ,C.fsz,C.fsA,C.fyO,C.fyK,C.fyM,C.fyN,C.fyL,C.fKl,C.fsD,C.fsE,C.fsH,C.fsI,C.fsL,C.fsM,C.fLO,C.fdo,C.fLZ,C.egs,C.egt,C.egu,C.ega,C.egm,C.egn,C.egp,C.cbU,C.cbS,C.cbT,C.fyo,C.fyq,C.fyp,C.fd_,C.fd0,C.fM1,C.ehD,C.ehE,C.ehv,C.ehw,C.ehz,C.ehA,C.fMh,C.eRc,C.eQC,C.eQm,C.eQz,C.ePE,C.ePF,C.ePG,C.ePK,C.ePL,C.eR1,C.eR8,C.eRa,C.eQL,C.eQN,C.eQR,C.eQS,C.eQT,C.eQX,C.eQO,C.eQP,C.ePW,C.ePX,C.ePY,C.ePZ,C.eQ_,C.eQ0,C.eQ1,C.eQ2,C.eQ3,C.ePh,C.ePi,C.ePj,C.ePk,C.ePm,C.ePn,C.ePQ,C.ePR,C.ePS,C.ePT,C.ePU,C.ePr,C.ePs,C.ePt,C.ePu,C.eQb,C.eQu,C.fvN,C.fvM,C.cdg,C.fk6,C.fDy,C.fDr,C.fDu,C.fBr,C.fBs,C.fBt,C.fvU,C.fvT,C.fvS,C.fvQ,C.fcV,C.fcW,C.fcX,C.fMt,C.eXm,C.eXn,C.eXg,C.eXa,C.eXG,C.eXH,C.eXJ,C.eXK,C.eXF,C.fMs,C.eX1,C.fjm,C.ecz,C.fDA,C.fDB,C.fDD,C.fDw,C.fDx,C.fLG,C.di_,C.di5,C.ecy,C.f9o,C.f9q,C.f9p,C.f9n,C.fwY,C.fx_,C.fbo,C.fD2,C.fD3,C.fD4,C.fDf,C.fDk,C.fDl,C.fDm,C.fDn,C.fDo,C.fDp,C.fDq,C.fD5,C.fD6,C.fD7,C.fD8,C.fD9,C.fDa,C.fDb,C.fDc,C.fDd,C.fDe,C.fDg,C.fDh,C.fDi,C.fDj,C.fuO,C.fiV,C.fiU,C.fDJ,C.dTm,C.dTk,C.eWb,C.c7P,C.c7R,C.fK5,C.d7i,C.d7k,C.fK4,C.fK2,C.fMr,C.fAp,C.d6T,C.fsP,C.fsQ,C.cde,C.cdf,C.cdd,C.cd3,C.cd4,C.cd0,C.cd1,C.cd2,C.cdv,C.cdq,C.cdl,C.cdm,C.cdo,C.cdr,C.cdt,C.fB1,C.cd8,C.cdb,C.cdc,C.cdi,C.cdj,C.fDQ,C.fCX,C.cd7,C.cd5,C.fAW,C.fls,C.ccZ,C.eTP,C.foh,C.eva,C.erA,C.erB,C.eta,C.esZ,C.et_,C.eqY,C.euW,C.euX,C.euY,C.eqm,C.esE,C.esG,C.esg,C.esd,C.erw,C.erx,C.esn,C.eqo,C.esz,C.esA,C.esy,C.esC,C.esB,C.esU,C.esV,C.esX,C.esQ,C.eqH,C.eqE,C.et3,C.eqw,C.euV,C.ep4,C.eqz,C.eqy,C.epN,C.epS,C.epQ,C.epO,C.ev2,C.ev3,C.ev4,C.ev1,C.euz,C.euy,C.eus,C.euu,C.euk,C.euT,C.euR,C.epc,C.ep8,C.eru,C.epW,C.epn,C.epm,C.epJ,C.epK,C.eqW,C.epY,C.eq1,C.esN,C.eul,C.eum,C.eun,C.euo,C.eqq,C.eqr,C.eqs,C.erX,C.eqS,C.eqK,C.eqR,C.es6,C.es7,C.etU,C.etW,C.euf,C.euh,C.etX,C.etY,C.epU,C.erz,C.ery,C.euJ,C.eqh,C.eq9,C.eqa,C.eqd,C.eqe,C.esb,C.erf,C.erg,C.erh,C.eri,C.erj,C.erk,C.erl,C.erm,C.ern,C.ero,C.erp,C.et7,C.d_G,C.d_H,C.evQ,C.fDG,C.fDP,C.fDF,C.fDL,C.fbQ,C.fMv,C.fMw,C.fMx,C.evi,C.evr,C.eoY,C.eoT,C.eoU,C.fy_,C.fxZ,C.fy0,C.fy5,C.fy1,C.fy2,C.f68,C.f69,C.ed7,C.cg5])
u(B.j6,[C.cE3,C.f4B,C.f4G,C.f4H,C.f4C,C.f4D,C.f4E,C.f4u,C.f4v,C.f4x,C.f4y,C.f4L,C.f4K,C.f4A,C.f4z,C.f4I,C.f4J,C.f4O,C.f4P,C.f4N,C.cFo,C.cFs,C.cFq,C.cFg,C.cFh,C.cFj,C.cFc,C.cFd,C.cFk,C.cFb,C.cFa,C.cF9,C.cED,C.cEC,C.cEF,C.cEN,C.cEG,C.cEE,C.cEI,C.cEJ,C.cEK,C.cEH,C.cEL,C.cEP,C.cEQ,C.cER,C.cES,C.fsx,C.fsy,C.fsv,C.fsw,C.e7W,C.e7U,C.e7V,C.e7X,C.e7Y,C.dXA,C.fsB,C.fsC,C.fsF,C.fsG,C.fsJ,C.fsK,C.ed8,C.fAw,C.fAv,C.egr,C.egq,C.eg4,C.eg0,C.egb,C.egc,C.egd,C.eg6,C.eg7,C.eg8,C.eg9,C.eg5,C.eg2,C.eg3,C.egj,C.egk,C.egi,C.egl,C.egh,C.egg,C.egf,C.ego,C.ege,C.eg1,C.ehC,C.ehq,C.ehr,C.ehx,C.ehs,C.ehu,C.eht,C.ehB,C.eQ4,C.eQs,C.ePO,C.ePP,C.ePM,C.ePN,C.eQy,C.eQx,C.eQw,C.eQB,C.eQA,C.ePD,C.ePH,C.ePC,C.ePB,C.ePy,C.ePA,C.ePz,C.eR9,C.eR2,C.eR0,C.eR3,C.eR_,C.eR4,C.eQZ,C.eR5,C.eR6,C.eR7,C.eQY,C.eQK,C.eQF,C.eQQ,C.eQJ,C.eQU,C.eQI,C.eQV,C.eQH,C.eQW,C.eQG,C.eQp,C.eQo,C.eQq,C.eQn,C.eQr,C.eQh,C.eQg,C.eQi,C.eQf,C.eQe,C.eQd,C.ePl,C.ePg,C.ePv,C.ePq,C.ePw,C.ePp,C.ePx,C.ePo,C.eQk,C.eQ8,C.eQ7,C.eQ9,C.eQ6,C.eQa,C.eQ5,C.eQt,C.eQE,C.eQD,C.ePV,C.fDt,C.fDv,C.fDz,C.fvR,C.fyh,C.fyf,C.fyg,C.eXo,C.eXp,C.eXl,C.eXf,C.eXe,C.eXh,C.eXi,C.eX4,C.eX5,C.eX7,C.eX8,C.eX9,C.eX6,C.eXb,C.eXC,C.eXD,C.eXB,C.eXE,C.eXA,C.eXz,C.eXy,C.eXI,C.eXx,C.eXw,C.eXv,C.eXL,C.eXu,C.eXM,C.eXt,C.eXs,C.eXc,C.eXd,C.eXr,C.eXq,C.eWY,C.eWZ,C.eX_,C.eX0,C.eWX,C.eX2,C.eX3,C.dhZ,C.di0,C.di3,C.di4,C.di2,C.di1,C.fwZ,C.fuP,C.c7Q,C.c7S,C.d7b,C.d7g,C.d7h,C.d7f,C.d7e,C.d7j,C.d7d,C.d7c,C.d7l,C.fK1,C.ddY,C.ddZ,C.de_,C.fsN,C.fsO,C.cdw,C.eoZ,C.ep_,C.ep0,C.ep1,C.flq,C.flr,C.dRz,C.dRy,C.d47,C.d46,C.evc,C.evb,C.erC,C.eui,C.ev8,C.et8,C.euZ,C.ev_,C.ev9,C.esh,C.eqk,C.eql,C.esF,C.esf,C.esc,C.ese,C.esi,C.esj,C.esk,C.esl,C.esm,C.eso,C.eqp,C.esr,C.ess,C.est,C.esu,C.esv,C.esw,C.esq,C.esD,C.esR,C.esP,C.esY,C.esp,C.eqF,C.eqG,C.eqI,C.et0,C.et4,C.epj,C.eqD,C.eqB,C.etc,C.eqx,C.etb,C.eqn,C.eqZ,C.euU,C.euj,C.epk,C.eph,C.ep7,C.ep3,C.ep5,C.eqA,C.epM,C.epR,C.epP,C.epL,C.esO,C.ev5,C.euv,C.euq,C.eur,C.eut,C.ers,C.err,C.euS,C.epa,C.epb,C.epd,C.epe,C.epi,C.ep9,C.et9,C.ev0,C.erv,C.epV,C.ep6,C.eqX,C.epf,C.epo,C.epp,C.epq,C.epB,C.epE,C.epF,C.epG,C.epH,C.epI,C.epr,C.eps,C.ept,C.epu,C.epv,C.epw,C.epx,C.epy,C.epz,C.epA,C.epC,C.epD,C.eqV,C.eqU,C.eqT,C.epg,C.epZ,C.epX,C.eq_,C.eq0,C.eqC,C.esJ,C.esK,C.esH,C.esI,C.eup,C.equ,C.eqt,C.erW,C.erV,C.erY,C.erU,C.erZ,C.erT,C.es_,C.erS,C.es0,C.erR,C.es1,C.erQ,C.es2,C.erP,C.es3,C.erO,C.erH,C.erI,C.erJ,C.erG,C.erK,C.erF,C.erL,C.erE,C.erM,C.erD,C.erN,C.eqP,C.eqQ,C.eqJ,C.eqL,C.eqM,C.eqN,C.eqO,C.ev6,C.ev7,C.es5,C.es4,C.es8,C.etv,C.etw,C.etx,C.etI,C.etT,C.eu3,C.eua,C.eub,C.euc,C.eud,C.eue,C.ety,C.etz,C.etA,C.etB,C.etC,C.etD,C.etE,C.etF,C.etG,C.etH,C.etJ,C.etK,C.etL,C.etM,C.etN,C.etO,C.etP,C.etQ,C.etR,C.etl,C.etS,C.ett,C.ets,C.etV,C.etr,C.eth,C.eug,C.etq,C.etg,C.ete,C.etp,C.etf,C.etd,C.etZ,C.eto,C.eu_,C.eu0,C.eu1,C.eu2,C.etn,C.eu4,C.eu5,C.eu6,C.etm,C.eu7,C.etk,C.eu8,C.etj,C.eu9,C.eti,C.epT,C.euC,C.euB,C.euD,C.euA,C.er1,C.er0,C.er2,C.er_,C.euN,C.euI,C.euM,C.euE,C.euF,C.euG,C.euH,C.euK,C.euL,C.euQ,C.eqj,C.eq6,C.eq7,C.eq8,C.eq5,C.eqc,C.eqb,C.eq4,C.eq3,C.eqf,C.eq2,C.eqg,C.esa,C.es9,C.ere,C.erd,C.erc,C.erb,C.era,C.er9,C.er8,C.er7,C.er4,C.er6,C.er5,C.er3,C.erq,C.et5,C.et6,C.d_I,C.d04,C.d05,C.d_C,C.d_B,C.d_F,C.d_D,C.d_E,C.evN,C.evD,C.evM,C.evE,C.evF,C.evz,C.evA,C.evB,C.evC,C.evP,C.fDM,C.fDN,C.fDO,C.evf,C.evg,C.evh,C.evk,C.evl,C.evo,C.evp,C.evn,C.evq,C.evm,C.eve,C.evd,C.evs,C.evt,C.evv,C.evw,C.eoX,C.eoW,C.eoS,C.eoV,C.evy,C.evx,C.fy4,C.fy3,C.ed5,C.ed6])
t(C.aQE,B.J)
u(B.m7,[C.a3o,C.aws,C.av9,C.xn,C.xq,C.kQ,C.tb,C.Be,C.rn,C.vQ,C.ar7,C.Ip,C.aqx,C.uz,C.mt,C.hx,C.a8d])
u(C.bN6,[C.cwb,C.bN7])
u(C.cg_,[C.cg3,C.as9])
t(C.cg2,C.cfY)
t(C.cg1,C.cfX)
t(C.cg4,C.cg1)
t(C.cg0,C.cfZ)
t(C.cfV,C.cfW)
t(C.b9p,B.oJ)
t(C.cq1,B.auC)
t(C.a8_,B.xa)
t(C.aV6,B.dG)
t(C.aA0,B.atu)
u(B.ag,[C.a0q,C.Ya,C.Y8,C.apJ,C.Vk,C.Vn,C.a_r,C.a_Y,C.a_X,C.aDf,C.Zj,C.N7,C.YS,C.Zc,C.anJ,C.aI6,C.Uz,C.ayQ,C.a7j,C.NA,C.ayc,C.Jr,C.a_3,C.Vy,C.Vz,C.aDE,C.aqC,C.a7k])
u(B.ah,[C.aIp,C.ax_,C.awW,C.aD3,C.aDm,C.aDq,C.aEN,C.aGI,C.aGH,C.aLg,C.aAI,C.aKK,C.az5,C.bfi,C.aKv,C.aMB,C.aKJ,C.bdb,C.aLe,C.aLs,C.aJq,C.bbX,C.aLt,C.aDH,C.bjI,C.aDF,C.aDI,C.bjr])
u(B.au,[C.awY,C.acR,C.acf,C.bit,C.acU,C.aeB,C.b03,C.brQ,C.b0n,C.bl1,C.bqp,C.aZg,C.b0q,C.acX,C.ade,C.b0o,C.Io,C.aZj,C.bcb,C.Pf,C.Jy,C.bgQ,C.bgP,C.bue])
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
t(C.a8c,B.kp)
t(C.cg7,C.b25)
t(C.ahN,C.a2p)
u(B.Xa,[C.aQu,C.aRZ])
t(C.aw4,C.aQu)
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
B.jW(b.typeUniverse,JSON.parse('{"aRd":{"hG":["aRd"]},"nP":{"aRd":[],"hG":["aRd"]},"aQE":{"J":["Ro"],"J.E":"Ro"},"b9p":{"oJ":[]},"a8_":{"xa":[],"o8":[]},"aV6":{"dG":[],"cA":[],"r":[]},"aA0":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0q":{"ag":[],"r":[]},"aIp":{"ah":["a0q"]},"Ya":{"ag":[],"r":[]},"Y8":{"ag":[],"r":[]},"ax_":{"ah":["Ya"]},"awW":{"ah":["Y8"]},"awY":{"au":[],"r":[]},"apJ":{"ag":[],"r":[]},"aD3":{"ah":["apJ"]},"acR":{"au":[],"r":[]},"acf":{"au":[],"r":[]},"acU":{"au":[],"r":[]},"aeB":{"au":[],"r":[]},"bit":{"au":[],"r":[]},"Vk":{"ag":[],"r":[]},"aDm":{"ah":["Vk"]},"b03":{"au":[],"r":[]},"bbE":{"aB":[]},"bbD":{"aB":[]},"btf":{"aB":[]},"b88":{"aB":[]},"bqK":{"aB":[]},"Vn":{"ag":[],"r":[]},"aDq":{"ah":["Vn"]},"bba":{"aB":[]},"a_r":{"ag":[],"r":[]},"aEN":{"ah":["a_r"]},"beJ":{"aB":[]},"a_Y":{"ag":[],"r":[]},"a_X":{"ag":[],"r":[]},"aDf":{"ag":[],"r":[]},"Zj":{"ag":[],"r":[]},"aGI":{"ah":["a_Y"]},"aGH":{"ah":["a_X"]},"bjo":{"ah":["aDf"]},"bgW":{"aB":[]},"aAI":{"ah":["Zj"]},"brQ":{"au":[],"r":[]},"b0n":{"au":[],"r":[]},"bl1":{"au":[],"r":[]},"N7":{"ag":[],"r":[]},"YS":{"ag":[],"r":[]},"biL":{"ah":["N7"]},"bqp":{"au":[],"r":[]},"bdP":{"aB":[]},"aZg":{"au":[],"r":[]},"az5":{"ah":["YS"]},"Zc":{"ag":[],"r":[]},"bfi":{"ah":["Zc"]},"beG":{"aB":[]},"ben":{"aB":[]},"bnh":{"aB":[]},"b9h":{"aB":[]},"b8V":{"aB":[]},"bub":{"aB":[]},"brc":{"aB":[]},"bql":{"aB":[]},"bdI":{"aB":[]},"anJ":{"ag":[],"r":[]},"b0q":{"au":[],"r":[]},"biv":{"ah":["anJ"]},"acX":{"au":[],"r":[]},"ade":{"au":[],"r":[]},"aI6":{"ag":[],"r":[]},"Uz":{"ag":[],"r":[]},"Io":{"au":[],"r":[]},"ayQ":{"ag":[],"r":[]},"a7j":{"ag":[],"r":[]},"b0o":{"au":[],"r":[]},"b0l":{"aB":[]},"btI":{"ah":["aI6"]},"aIJ":{"aB":[]},"biI":{"ah":["Uz"]},"bdb":{"ah":["ayQ"]},"bjm":{"ah":["a7j"]},"aZj":{"au":[],"r":[]},"bel":{"aB":[]},"bpi":{"aB":[]},"bqi":{"aB":[]},"ayc":{"ag":[],"r":[]},"Jr":{"ag":[],"r":[]},"a_3":{"ag":[],"r":[]},"Jy":{"au":[],"r":[]},"NA":{"ag":[],"r":[]},"aDG":{"ah":["NA"],"ez":[]},"bbY":{"ah":["ayc"]},"bcb":{"au":[],"r":[]},"bbX":{"ah":["Jr"]},"Pf":{"au":[],"r":[]},"aDJ":{"ah":["a_3"]},"bqN":{"aB":[]},"bgQ":{"au":[],"r":[]},"bgP":{"au":[],"r":[]},"Vy":{"ag":[],"r":[]},"Vz":{"ag":[],"r":[]},"aDE":{"ag":[],"r":[]},"aqC":{"ag":[],"r":[]},"aDH":{"ah":["Vy"]},"bjI":{"ah":["Vz"]},"aDF":{"ah":["aDE"]},"bu2":{"iP":[]},"aDI":{"ah":["aqC"]},"bue":{"au":[],"r":[]},"a7k":{"ag":[],"r":[]},"bjr":{"ah":["a7k"]},"a8c":{"kp":["fr<eP>"],"kc":["fr<eP>"]},"ahN":{"a2p":[]},"aQu":{"j0":[],"ff":[]},"aw4":{"j0":[],"ff":[]},"aRZ":{"j0":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lk"),U:w("vl<pU>"),bz:w("w"),M:w("eM<n>"),bo:w("jA"),g7:w("LP"),gc:w("az<iu?>"),bq:w("az<~>"),cc:w("M2"),fS:w("DF"),an:w("HB"),bm:w("O<Ro>"),X:w("O<a2x>"),f3:w("O<aRd>"),aK:w("O<n5>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lv>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nb>"),cd:w("O<ai<jm>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mp>"),h:w("O<jm>"),gE:w("O<zi>"),k:w("O<of>"),g:w("O<lD>"),D:w("O<i_>"),u:w("O<eJ>"),m:w("O<uz>"),i:w("O<hx>"),aC:w("O<a7B>"),o:w("O<zk>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<ho>"),cR:w("O<iN>"),J:w("O<jc>"),gx:w("O<p3<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7R>"),bx:w("O<aEh>"),gz:w("O<aeL>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<of>"),R:w("ai<i_>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hx,r>"),eC:w("K<nG,n>"),cT:w("K<jF,D>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,py>"),gh:w("K<mt,jo<mt>>"),w:w("iA"),ei:w("iu"),g2:w("rd"),fB:w("Ee"),b6:w("zi"),gX:w("a7t"),dt:w("lc"),ea:w("of"),bt:w("lD"),I:w("i_"),F:w("eJ"),fO:w("mt"),ff:w("uz"),fP:w("hx"),Q:w("vQ"),dO:w("aqy"),a:w("cq"),C:w("aC"),dw:w("asa"),di:w("a8d"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EJ"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pU"),bO:w("as"),K:w("bo<u>"),b:w("bo<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kf<lD>"),cI:w("kf<n>"),cl:w("kf<N>"),b4:w("a1<l9>"),a8:w("a1<m2>"),fR:w("a1<+(n,n)>"),co:w("e8<u>"),l:w("r"),b2:w("bX<~>"),ev:w("pW<dX>"),dT:w("bg<~>"),cQ:w("aA0"),q:w("mY"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a4<n,@>>?"),aT:w("ai<i_>?"),c:w("ai<@>?"),aP:w("iu?"),af:w("i_?"),go:w("b0s?"),a6:w("a7C?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVj=new B.bI(A.ax,null,null,N.anc,null)
D.aVt=new B.da(0,-0.15)
D.aVv=new B.da(0.62,0)
D.aVy=new B.da(-0.35,-0.45)
D.aVI=new B.da(0.9,-0.85)
D.aLh=new B.aT(30,30)
D.aX_=new B.bp(D.aLh,D.aLh,A.he,A.he)
D.aXd=new B.ay(A.b7,1,A.q,-1)
D.bfC=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXp=new B.ay(D.bfC,1,A.q,-1)
D.aXB=new B.ay(A.aE,1.5,A.q,-1)
D.aXG=new B.ay(A.b7,1.6,A.q,-1)
D.aXW=new B.ay(A.aE,1.4,A.q,-1)
D.aZk=new B.o(null,null,null,null,null,K.Go,A.a6)
D.bUC=new B.a8(A.a3,A.a7,A.x,G.a2w,null,null)
D.aZs=new B.o(null,null,null,null,null,D.bUC,A.a6)
D.aap=new B.o(A.aB,null,null,A.rU,null,null,A.n)
D.b9I=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bfz=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cRD=w([D.b9I,D.bfz],x.O)
D.ecQ=new B.bT(A.A,0.5,A.x,null,0,D.cRD,null,null)
D.aZL=new B.o(null,null,null,null,null,D.ecQ,A.a6)
D.Ww=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYb=new B.bO(P.uP,A.Y,A.Y,A.Y)
D.aZN=new B.o(D.Ww,null,D.aYb,null,null,null,A.n)
D.bWo=new B.a8(A.a3,A.a7,A.x,A.PM,null,null)
D.aZU=new B.o(null,null,null,null,null,D.bWo,A.a6)
D.abZ=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZW=new B.o(D.abZ,null,null,A.qt,null,null,A.n)
D.b__=new B.o(A.ki,null,null,null,null,null,A.a6)
D.aYi=new B.bO(A.A1,A.Y,A.Y,A.Y)
D.b_2=new B.o(Z.ad3,null,D.aYi,A.m7,null,null,A.n)
D.DO=new B.o(A.dS,null,null,null,null,null,A.a6)
D.b_8=new B.o(null,null,null,null,null,E.vN,A.a6)
D.cWu=w([E.adX,A.bX],x.O)
D.bVZ=new B.a8(A.b_,A.b5,A.x,D.cWu,null,null)
D.b_c=new B.o(null,null,null,A.m7,null,D.bVZ,A.n)
D.d5S=w([A.bj,A.dS,A.jQ],x.O)
D.a0H=new B.a8(A.ax,A.aC,A.x,D.d5S,null,null)
D.b_p=new B.o(null,null,null,null,null,D.a0H,A.n)
D.b_q=new B.o(D.abZ,null,null,A.kE,null,null,A.n)
D.cmu=w([A.dr,A.bj],x.O)
D.bVQ=new B.a8(A.ax,A.aC,A.x,D.cmu,null,null)
D.b_u=new B.o(null,null,null,null,null,D.bVQ,A.n)
D.b_E=new B.o(null,null,null,null,null,G.tZ,A.a6)
D.b_X=new B.o(A.adZ,null,null,null,null,null,A.a6)
D.bav=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaA=new B.ac(0,A.G,D.bav,A.RB,28)
D.b23=new B.aVj()
D.b2C=new C.cq1()
D.b2O=new C.b9p()
D.ab5=new B.cr(A.A,null,null,A.a0w,null)
D.b5k=new B.fj(null,null,null,null,null,E.n_,null,null,null,null)
D.b3k=new B.cr(A.A,null,null,D.b5k,null)
D.bFy=new B.ae(A.dW,28,A.c,null,null,null)
D.b3O=new B.cr(A.A,null,null,D.bFy,null)
D.b5h=new B.fj(2,null,null,null,null,A.bY,null,null,null,null)
D.b49=new B.cr(A.A,null,null,D.b5h,null)
D.bFS=new B.ae(K.Nr,40,A.bI,null,null,null)
D.b4a=new B.cr(A.A,null,null,D.bFS,null)
D.b66=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6j=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b6H=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b6N=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7i=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b7z=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b7A=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kq=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7Z=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b83=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aci=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b8N=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b9x=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acw=new B.w(1,1,1,0.9725490196078431,A.t)
D.b9Q=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.ba0=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.ba3=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.baf=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baA=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bbV=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wg=new B.w(0.8509803921568627,0,0,0,A.t)
D.bc2=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bc9=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adl=new B.w(0.6,0,0,0,A.t)
D.adn=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bdw=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.te=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bdW=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bel=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.beJ=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ae8=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WF=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AA=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KX=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j8=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aex=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WQ=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bi1=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.biv=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.biJ=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xa=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bjQ=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xe=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bki=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bkB=new B.hF(A.b3,!0,null,null)
D.f6W=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new B.x("Bio link",null,D.f6W,null,null,null,null,null,null,null,null,null)
D.b43=new B.cr(A.A,null,null,D.fwA,null)
D.bkR=new B.hF(A.VD,!0,D.b43,null)
D.Lk=new C.a3o(0,"none")
D.afD=new C.a3o(1,"deflate")
D.afE=new C.a3o(2,"bzip2")
D.blL=new B.kk(0.165,0.84,0.44,1)
D.cWO=w([A.ci,A.dP,A.aE],x.O)
D.bV6=new B.a8(A.ax,A.aC,A.x,D.cWO,null,null)
D.aZp=new B.o(null,null,null,null,null,D.bV6,A.n)
D.bOI=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4F=new B.cr(A.A,null,null,D.bOI,null)
D.bmh=new B.kN(D.aZp,A.bd,D.b4F,null)
D.bih=new B.w(0.058823529411764705,1,1,1,A.t)
D.cZW=w([A.bF,A.qE,A.qE,D.bih],x.O)
D.cDz=w([0,0.32,0.7,1],x.x)
D.bVF=new B.a8(A.ax,A.aC,A.x,D.cZW,D.cDz,null)
D.aZe=new B.o(null,null,null,null,null,D.bVF,A.n)
D.bmn=new B.kN(D.aZe,A.bd,null,null)
D.bnp=new B.mh(1,1,null,null,null,A.bm,null)
D.bns=new B.mh(1,null,null,null,null,D.WQ,null)
D.bnW=new B.b9(125e4)
D.bo1=new B.b9(17e4)
D.bob=new B.b9(35964e8)
D.boh=new B.b9(55e4)
D.bol=new B.b9(68e4)
D.boM=new B.ib(0,0,0,5)
D.bp2=new B.Q(0,16,16,0)
D.bp5=new B.Q(0,18,0,8)
D.bpd=new B.Q(0,36,0,36)
D.bpk=new B.Q(0,54,0,0)
D.bpr=new B.Q(10,0,10,3)
D.bpC=new B.ib(10,16,10,10)
D.bpO=new B.Q(10,6,4,6)
D.bpR=new B.Q(10,8,10,6)
D.agB=new B.Q(11,8,11,11)
D.bpV=new B.Q(12,0,12,24)
D.bq6=new B.Q(12,12,12,4)
D.bq9=new B.Q(12,12,8,12)
D.bqo=new B.Q(12,8,8,12)
D.bqK=new B.Q(14,14,14,0)
D.bqP=new B.Q(14,14,14,90)
D.br7=new B.Q(16,10,16,16)
D.br8=new B.Q(16,10,16,20)
D.ahr=new B.Q(16,6,16,28)
D.brH=new B.Q(18,0,18,10)
D.brJ=new B.Q(18,0,18,30)
D.brL=new B.Q(18,10,18,12)
D.brM=new B.Q(18,10,18,14)
D.bs2=new B.Q(18,16,14,18)
D.bs7=new B.Q(18,18,18,12)
D.bsd=new B.Q(18,26,18,12)
D.bsi=new B.Q(18,34,18,34)
D.bsj=new B.Q(18,4,18,14)
D.bsp=new B.Q(18,8,18,24)
D.bsH=new B.Q(20,16,14,4)
D.bsM=new B.Q(20,18,12,4)
D.bsR=new B.Q(20,20,12,20)
D.bsU=new B.Q(20,22,20,20)
D.bsZ=new B.Q(20,6,20,6)
D.bt7=new B.Q(22,18,22,18)
D.btf=new B.Q(22,24,22,0)
D.bti=new B.Q(22,24,22,4)
D.btq=new B.Q(22,60,22,22)
D.btw=new B.Q(24,24,24,22)
D.btG=new B.Q(26,10,60,10)
D.btN=new B.Q(28,44,28,44)
D.bu3=new B.Q(32,44,32,44)
D.bub=new B.Q(38,30,38,20)
D.bug=new B.Q(4,0,0,6)
D.bus=new B.ib(4,4,4,4)
D.buT=new B.ib(6,5,6,5)
D.buY=new B.Q(6,6,8,6)
D.bv8=new B.Q(8,14,8,14)
D.bv9=new B.Q(8,22,8,22)
D.bvh=new B.Q(8,6,12,6)
D.bvq=new B.Q(8,8,8,4)
D.aij=new B.Q(9,9,9,6)
D.bvA=new B.ib(2.5,2.5,2.5,2.5)
D.bvB=new B.Q(10.5,0,10.5,0)
D.bvC=new B.Q(7,1.5,7,1.5)
D.cOM=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bvS=new B.yH(null,null,D.cOM,A.Ae)
D.cLU=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bvT=new B.yH(null,null,D.cLU,A.Ae)
D.aPZ=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new B.x("WORD DESIGN",null,D.aPZ,null,null,null,null,null,null,null,null,null)
D.bwq=new B.bD(1,A.bh,D.fvU,null)
D.fvA=new B.x("Slides database",null,Ab.rG,null,null,null,null,null,null,null,null,null)
D.fsT=new B.x("Admin only \xb7 keep as many as you like",null,U.aPs,null,null,null,null,null,null,null,null,null)
D.ddA=w([D.fvA,A.bB,D.fsT],x.p)
D.blf=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.ddA,null)
D.bwt=new B.bD(1,A.bh,D.blf,null)
D.fns=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bww=new B.bD(1,A.bh,D.fns,null)
D.f4P=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxQ=new B.x("TALK TO THE EDITOR",null,D.f4P,null,null,null,null,null,null,null,null,null)
D.bwM=new B.bD(1,A.bh,D.fxQ,null)
D.fhi=new B.x("Tell the AI what to change",null,Ab.rG,null,null,null,null,null,null,null,null,null)
D.bx5=new B.bD(1,A.bh,D.fhi,null)
D.bxX=new B.Dt(!0,"video/mp4")
D.f38=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new B.x("Move presentations between devices",null,D.f38,null,null,null,!1,null,null,1,null,null)
D.by0=new B.qf(A.eh,A.a3,A.f,D.ffs,null)
D.fgy=new B.x("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.by1=new B.qf(A.eh,A.A,A.f,D.fgy,null)
D.byg=new B.dq(1,A.cn,D.by1,null)
D.ZZ=new B.a_(60988,"MaterialIcons",!1)
D.bB1=new B.a_(61352,"MaterialIcons",!1)
D.ajP=new B.a_(61531,"MaterialIcons",!1)
D.bCg=new B.a_(63062,"MaterialIcons",!1)
D.bCo=new B.a_(63109,"MaterialIcons",!1)
D.bCz=new B.a_(63206,"MaterialIcons",!1)
D.aky=new B.a_(63238,"MaterialIcons",!1)
D.a_u=new B.a_(63365,"MaterialIcons",!1)
D.a_v=new B.a_(63367,"MaterialIcons",!1)
D.a_w=new B.a_(63368,"MaterialIcons",!1)
D.akK=new B.a_(63384,"MaterialIcons",!1)
D.bD8=new B.a_(63525,"MaterialIcons",!1)
D.bDb=new B.a_(63568,"MaterialIcons",!1)
D.bDw=new B.a_(983072,"MaterialIcons",!1)
D.bDV=new B.a_(983271,"MaterialIcons",!0)
D.alS=new B.a_(983965,"MaterialIcons",!1)
D.alT=new B.a_(983966,"MaterialIcons",!1)
D.bET=new B.a_(984592,"MaterialIcons",!1)
D.bFa=new B.ae(A.tK,16,A.az,null,null,null)
D.bFi=new B.ae(A.mu,null,A.c,null,null,null)
D.am2=new B.ae(A.pT,18,A.c,null,null,null)
D.bFz=new B.ae(A.Bl,18,O.lc,null,null,null)
D.bGd=new B.ae(A.jh,11,null,null,null,null)
D.bGn=new B.ae(A.a_e,null,A.et,null,null,null)
D.bGW=new B.ae(A.r2,18,A.az,null,null,null)
D.bH1=new B.ae(A2.By,14,null,null,null,null)
D.bH2=new B.ae(A.e5,28,A.cd,null,null,null)
D.bHe=new B.ae(A.pU,20,A.c,null,null,null)
D.bHl=new B.ae(A.ya,null,null,null,null,null)
D.bHr=new B.ae(A.iV,18,A.hv,null,null,null)
D.bHw=new B.ae(A.lh,null,null,null,null,null)
D.bI0=new B.ae(A.a_L,28,A.c,null,null,null)
D.bCj=new B.a_(63065,"MaterialIcons",!1)
D.bI9=new B.ae(D.bCj,15,A.c,null,null,null)
D.bCp=new B.a_(63113,"MaterialIcons",!1)
D.bIf=new B.ae(D.bCp,null,A.ad,null,null,null)
D.bID=new B.ae(A.vu,22,A.bK,null,null,null)
D.bIX=new B.ae(A.vv,18,null,null,null,null)
D.bJ2=new B.ae(A.BB,12,A.c,null,null,null)
D.bEv=new B.a_(983687,"MaterialIcons",!1)
D.bJd=new B.ae(D.bEv,null,A.bj,null,null,null)
D.bJk=new B.ae(A.hz,null,A.bj,null,null,null)
D.bJD=new B.ae(A.oN,22,A.c,null,null,null)
D.bJH=new B.ae(A.cC,13,A.c,null,null,null)
D.bJN=new B.ae(A.e5,26,A.ay,null,null,null)
D.bJQ=new B.ae(A.r7,26,A.c,null,null,null)
D.NE=new B.ae(A.jh,8,A.c,null,null,null)
D.bK7=new B.ae(A.pT,40,A.c,null,null,null)
D.bK8=new B.ae(A.bzZ,null,null,null,null,null)
D.bKc=new B.ae(A.tT,20,null,null,null,null)
D.bEu=new B.a_(983683,"MaterialIcons",!1)
D.bKm=new B.ae(D.bEu,null,A.aZ,null,null,null)
D.bKn=new B.ae(A.jh,16,A.bj,null,null,null)
D.bKI=new B.ae(A.r8,null,null,null,null,null)
D.amB=new B.ae(A.vx,22,A.c,null,null,null)
D.bKM=new B.ae(A.dW,17,A.c,null,null,null)
D.amC=new B.ae(A.jh,9,A.c,null,null,null)
D.bKR=new B.ae(A.vr,null,null,null,null,null)
D.bAf=new B.a_(57744,"MaterialIcons",!1)
D.bKY=new B.ae(D.bAf,null,null,null,null,null)
D.bL0=new B.ae(A.vr,16,null,null,null,null)
D.bF1=new B.a_(985181,"MaterialIcons",!1)
D.Gf=new B.ae(D.bF1,null,null,null,null,null)
D.bLc=new B.ae(A.lh,16,A.bK,null,null,null)
D.bEm=new B.a_(983615,"MaterialIcons",!1)
D.bLe=new B.ae(D.bEm,12,A.c,null,null,null)
D.amI=new B.ae(A.xT,16,null,null,null,null)
D.bLm=new B.ae(A.dW,21,A.c,null,null,null)
D.bLr=new B.ae(A.hz,17,A.c,null,null,null)
D.bLs=new B.ae(A.vu,null,null,null,null,null)
D.bLI=new B.ae(A.a0a,20,A.az,null,null,null)
D.bLX=new B.ae(A.nY,22,E.n_,null,null,null)
D.bM3=new B.ae(A.pS,13,A.ad,null,null,null)
D.bM5=new B.ae(A.alE,20,A.az,null,null,null)
D.bzX=new B.a_(57495,"MaterialIcons",!1)
D.bMa=new B.ae(D.bzX,null,null,null,null,null)
D.bMe=new B.ae(A.nZ,18,A.c,null,null,null)
D.bMz=new B.ae(A.tX,28,A.c,null,null,null)
D.bMJ=new B.ae(D.aky,null,A.aE,null,null,null)
D.bMK=new B.ae(A.pU,22,A.c,null,null,null)
D.amR=new B.ae(A.ZV,16,null,null,null,null)
D.bNv=new B.ae(A.vu,32,A.c,null,null,null)
D.bOe=new B.ae(A.iY,22,A.c,null,null,null)
D.bOi=new B.ae(A.r7,22,A.ad,null,null,null)
D.an5=new B.ae(A.tK,null,A.c1,null,null,null)
D.bPd=new B.ae(A.tJ,18,null,null,null,null)
D.bPP=new B.ae(A.dW,18,A.cf,null,null,null)
D.a0z=new B.ae(A.cC,18,A.az,null,null,null)
D.bPV=new B.ae(A.aly,null,null,null,null,null)
D.bQk=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPM,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eWo=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQC=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eWo,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bR2=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cSB=w([A.dS,A.aE],x.O)
D.bSS=new B.a8(A.a3,A.a7,A.x,D.cSB,null,null)
D.bT3=new B.a8(A.b_,A.b5,A.TJ,A.au9,null,null)
D.b6x=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.baD=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bdx=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b8F=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cDB=w([D.b6x,D.baD,D.bdx,D.b8F],x.O)
D.bTm=new B.a8(A.ax,A.aC,A.x,D.cDB,A.GO,null)
D.ddH=w([A.cs,A.bA,A.b7],x.O)
D.bTo=new B.a8(A.b_,A.b5,A.TJ,D.ddH,null,null)
D.df0=w([A.bj,A.cc],x.O)
D.bTs=new B.a8(A.a3,A.a7,A.x,D.df0,null,null)
D.dae=w([A.hu,A.d8,A.aH],x.O)
D.bTu=new B.a8(A.ax,A.aC,A.x,D.dae,null,null)
D.cYq=w([A.cY,A.fa],x.O)
D.bTy=new B.a8(A.a3,A.a7,A.x,D.cYq,null,null)
D.ddC=w([O.lc,A.d8],x.O)
D.anR=new B.a8(A.a3,A.a7,A.x,D.ddC,null,null)
D.bbb=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.ddz=w([D.bbb,D.xe,A.bY],x.O)
D.bTD=new B.a8(A.a3,A.a7,A.x,D.ddz,null,null)
D.cUe=w([A.b2,A.d_,A.f2],x.O)
D.bTE=new B.a8(A.ax,A.aC,A.x,D.cUe,null,null)
D.NS=new B.a8(A.a3,A.a7,A.x,A.H2,null,null)
D.bj5=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cwF=w([D.bj5,A.bY,A.ja],x.O)
D.anW=new B.a8(A.ax,A.aC,A.x,D.cwF,null,null)
D.d2v=w([A.x1,A.aw,D.AA],x.O)
D.bUE=new B.a8(A.a3,A.a7,A.x,D.d2v,null,null)
D.bkj=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b9w=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bey=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cTo=w([D.bkj,D.b9w,D.bey],x.O)
D.anX=new B.a8(A.a3,A.a7,A.x,D.cTo,null,null)
D.bbd=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bWE=w([Aw.afk,D.bbd],x.O)
D.bUO=new B.a8(A.b_,A.b5,A.x,D.bWE,null,null)
D.cRr=w([A.mY,A.bI],x.O)
D.bUS=new B.a8(A.b_,A.b5,A.x,D.cRr,null,null)
D.d7n=w([A.aE,A.dP],x.O)
D.bUY=new B.a8(A.a3,A.a7,A.x,D.d7n,null,null)
D.aej=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avQ=w([D.aej,D.j8,D.Kq],x.O)
D.bVp=new B.a8(A.ax,A.aC,A.x,D.avQ,null,null)
D.cwx=w([A.dx,A.dL],x.O)
D.bVA=new B.a8(A.b_,A.b5,A.x,D.cwx,null,null)
D.d4z=w([A.uW,Az.Ep],x.O)
D.bWq=new B.a8(A.a3,A.a7,A.x,D.d4z,null,null)
D.foY=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bWB=new B.pE(null,D.foY,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yA=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4p=new C.kQ(2,"elegantNavy")
D.fYo=w([A.WD,D.j8,A.bY],x.O)
D.jF=new C.xn(0,"classic")
D.a4c=new C.jm("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4p,4294967035,4279378237,4290283019,D.jF)
D.aF0=new C.kQ(3,"elegantGold")
D.b65=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b71=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acU=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fXR=w([D.b65,D.b71,D.acU],x.O)
D.a4a=new C.jm("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aF0,4294966515,4281016592,4289102906,D.jF)
D.dzR=new C.kQ(22,"goldRibbon")
D.fXN=w([A.WD,D.j8,A.hV],x.O)
D.a43=new C.jm("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dzR,4294967035,4279378237,4291404327,D.jF)
D.dzS=new C.kQ(23,"goldBaroque")
D.adw=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fXT=w([D.adw,A.aw,A.ja],x.O)
D.a44=new C.jm("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dzS,4294964964,4283053072,4292128567,D.jF)
D.dzU=new C.kQ(4,"elegantEmerald")
D.b89=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b92=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fXZ=w([D.b89,D.b92,A.hV],x.O)
D.a45=new C.jm("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dzU,4294376440,4279122734,4291404327,D.jF)
D.dzV=new C.kQ(5,"elegantBurgundy")
D.bcy=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fY5=w([D.bcy,A.aca,A.hV],x.O)
D.a48=new C.jm("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dzV,4294965238,4283043359,4291404327,D.jF)
D.dzO=new C.kQ(19,"goldFiligree")
D.L3=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fXU=w([D.L3,A.aw,A.ja],x.O)
D.a46=new C.jm("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dzO,4294966259,4279378237,4292128567,D.jF)
D.dzP=new C.kQ(20,"goldLaurel")
D.biW=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fY6=w([A.Ki,A.hV,D.biW],x.O)
D.a47=new C.jm("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dzP,4294966776,4282000405,4291404327,D.jF)
D.dzQ=new C.kQ(21,"goldCrest")
D.ac1=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bj2=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fXW=w([D.ac1,A.aw,D.bj2],x.O)
D.a4b=new C.jm("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dzQ,4294965484,4283053072,4292128567,D.jF)
D.dzT=new C.kQ(24,"goldStar")
D.bkc=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fY_=w([D.bkc,A.aw,D.j8],x.O)
D.a49=new C.jm("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dzT,4294966518,4279378237,4292128567,D.jF)
D.Gq=w([D.a4c,D.a4a,D.a43,D.a44,D.a45,D.a48,D.a46,D.a47,D.a4b,D.a49],x.h)
D.q5=new C.mt(0,"blank")
D.Rq=new C.mt(1,"title")
D.mC=new C.mt(2,"titleContent")
D.dUu=new C.mt(3,"twoColumn")
D.Cw=new C.mt(4,"section")
D.dUv=new C.mt(5,"comparison")
D.HC=new C.mt(6,"flashcard")
D.HD=new C.mt(7,"quiz")
D.HE=new C.mt(8,"worksheet")
D.aoi=w([D.q5,D.Rq,D.mC,D.dUu,D.Cw,D.dUv,D.HC,D.HD,D.HE],B.ax("O<mt>"))
D.awP=w([Ao.W0,A.dL],x.O)
D.kq=w([A.bY,A.bK,A.hU,A.hG,D.AA],x.O)
D.dvL=new C.iX("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awP,D.kq)
D.bjd=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bcw=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cRE=w([D.bjd,D.bcw],x.O)
D.dvC=new C.iX("confetti","Golden Confetti","Together we rise",D.cRE,D.kq)
D.cOR=w([A.nC,A.VG],x.O)
D.dvD=new C.iX("crown","Crown of Glory","Built for our community",D.cOR,D.kq)
D.b9n=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bcb=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cVx=w([D.b9n,D.bcb],x.O)
D.u0=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.dvx=new C.iX("aurora","Aurora Gala","A brighter future, together",D.cVx,D.u0)
D.bdz=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d4F=w([G.abF,D.bdz],x.O)
D.dvO=new C.iX("champagne","Champagne Toast","Cheers to every member",D.d4F,D.kq)
D.dvP=new C.iX("diamonds","Diamond Rain","Every member is a jewel",X.axp,D.u0)
D.b6T=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bbI=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d9w=w([D.b6T,D.bbI],x.O)
D.dvs=new C.iX("starburst","Golden Starburst","Thank you!",D.d9w,D.kq)
D.bWK=w([A.f9,A.x6],x.O)
D.abO=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Pq=w([A.ou,A.iq,A.v7,A.nD,D.abO],x.O)
D.dvW=new C.iX("balloons","Luxury Balloons","Let's celebrate",D.bWK,D.Pq)
D.cO9=w([A.VP,A.w],x.O)
D.dvK=new C.iX("galaxy","Galaxy Spiral","The sky is not the limit",D.cO9,D.u0)
D.bhk=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d1k=w([A.kh,D.bhk],x.O)
D.dvF=new C.iX("redcarpet","Red Carpet","Tonight we shine",D.d1k,D.kq)
D.bfc=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bdm=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d5z=w([D.bfc,D.bdm],x.O)
D.dvu=new C.iX("coins","Gold Coin Rain","Every contribution counts",D.d5z,D.kq)
D.dc7=w([A.dx,A.hF],x.O)
D.dvA=new C.iX("lanterns","Sky Lanterns","Lighting the way together",D.dc7,D.kq)
D.baj=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cMa=w([A.x8,D.baj],x.O)
D.dvw=new C.iX("hearts","Floating Hearts","Made with love",D.cMa,D.Pq)
D.b7s=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b8f=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.ddx=w([D.b7s,D.b8f],x.O)
D.dvV=new C.iX("petals","Rose Petals","Thank you, from our hearts",D.ddx,D.Pq)
D.bif=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d9Q=w([A.lb,D.bif],x.O)
D.dvr=new C.iX("butterflies","Golden Butterflies","New beginnings",D.d9Q,D.kq)
D.bev=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cN6=w([D.bev,A.w],x.O)
D.dvN=new C.iX("neon","Neon Night","Let's go!",D.cN6,D.u0)
D.bbq=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d7y=w([A.KG,D.bbq],x.O)
D.dvQ=new C.iX("disco","Disco Ball","Party time",D.d7y,D.u0)
D.bf3=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d75=w([A.hu,D.bf3],x.O)
D.dvv=new C.iX("sunrise","Golden Sunrise","A new day for our community",D.d75,D.kq)
D.d6I=w([A.qI,A.dL],x.O)
D.dvR=new C.iX("pearls","Ocean Pearls","Deep roots, bright future",D.d6I,D.u0)
D.b9s=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d6X=w([D.b9s,A.dL],x.O)
D.dvU=new C.iX("snow","Winter Gala","Warm wishes to all",D.d6X,D.u0)
D.b6f=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b7c=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dcu=w([D.b6f,D.b7c],x.O)
D.dvJ=new C.iX("laurel","Laurel Victory","We did it together",D.dcu,D.kq)
D.b64=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bc7=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cLi=w([D.b64,D.bc7],x.O)
D.dvT=new C.iX("ribbons","Silk Ribbons","Elegance in every step",D.cLi,D.kq)
D.bd6=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cwu=w([G.Az,D.bd6],x.O)
D.dvG=new C.iX("kente","Kente Pride","Proud of our roots",D.cwu,D.kq)
D.bfL=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.biz=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cX8=w([D.bfL,D.biz],x.O)
D.dvB=new C.iX("trophy","Trophy Shine","Winners together",D.cX8,D.kq)
D.d72=w([Ap.Kv,A.w],x.O)
D.dvt=new C.iX("shooting","Shooting Stars","Make a wish",D.d72,D.u0)
D.b6m=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.af8=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dcK=w([D.b6m,D.af8],x.O)
D.dvH=new C.iX("bokeh","Golden Bokeh","Shine bright",D.dcK,D.kq)
D.b6I=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d29=w([D.b6I,A.w],x.O)
D.dvz=new C.iX("orbits","Golden Orbits","Always moving forward",D.d29,D.kq)
D.big=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cZP=w([A.acQ,D.big],x.O)
D.dvE=new C.iX("flowers","Blooming Garden","Growing together",D.cZP,D.Pq)
D.b6v=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b76=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dbB=w([D.b6v,D.b76],x.O)
D.dvy=new C.iX("music","Music Party","Celebrate with us",D.dbB,D.u0)
D.b8_=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.biZ=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cMm=w([D.b8_,D.biZ],x.O)
D.dvS=new C.iX("mandala","Royal Mandala","Harmony and unity",D.cMm,D.kq)
D.cZU=w([G.Az,D.af8],x.O)
D.dvM=new C.iX("sparklers","Golden Sparklers","Light up the night",D.cZU,D.kq)
D.dvI=new C.iX("city","City Lights","The whole city celebrates",D.awP,D.kq)
D.Gz=w([D.dvL,D.dvC,D.dvD,D.dvx,D.dvO,D.dvP,D.dvs,D.dvW,D.dvK,D.dvF,D.dvu,D.dvA,D.dvw,D.dvV,D.dvr,D.dvN,D.dvQ,D.dvv,D.dvR,D.dvU,D.dvJ,D.dvT,D.dvG,D.dvB,D.dvt,D.dvH,D.dvz,D.dvE,D.dvy,D.dvS,D.dvM,D.dvI],B.ax("O<iX>"))
D.ei3=new B.y("","No ring")
D.ewO=new B.y("platinum","Platinum")
D.etG=new B.y("glow","Glow")
D.elr=new B.y("double","Double line")
D.ekm=new B.y("framed","Gallery frame")
D.ehH=new B.y("rosegold","Rose gold")
D.euq=new B.y("jewels","Jeweled")
D.er8=new B.y("aurora","Aurora")
D.BS=w([D.ei3,A.a5G,D.ewO,D.etG,H.aLw,D.elr,A.a5I,D.ekm,D.ehH,D.euq,D.er8],x.L)
D.cg8=w([D.a46,D.a47,D.a4b,D.a43,D.a44,D.a49],x.h)
D.bLA=new B.ae(G.ajp,16,null,null,null,null)
D.b1p=new B.vl(A.bg,D.bLA,null,x.U)
D.bAo=new B.a_(58027,"MaterialIcons",!1)
D.bFg=new B.ae(D.bAo,16,null,null,null,null)
D.b1n=new B.vl(A.L,D.bFg,null,x.U)
D.bAp=new B.a_(58030,"MaterialIcons",!1)
D.bJj=new B.ae(D.bAp,16,null,null,null,null)
D.b1q=new B.vl(A.dM,D.bJj,null,x.U)
D.cmi=w([D.b1p,D.b1n,D.b1q],B.ax("O<vl<pU>>"))
D.ctS=w([A.AF,A.hi],x.O)
D.ctT=w([A.b2,A.bo,A.f2],x.O)
D.Pe=w([A.bK,A.hG,A.hU,A.aw,A.nD],x.O)
D.cwA=w([A.bY,D.j8,D.Kq],x.O)
D.cx7=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.efG=new B.y(4278913286,4280030216)
D.efY=new B.y(4279373061,4278518787)
D.eg4=new B.y(4279898630,4278847235)
D.cWy=w([D.efG,D.efY,D.eg4],x.n)
D.cSk=w(["\u265b","\u269c","\u2726"],x.s)
D.dzM=new C.xp("Royal Onyx & Gold",D.cWy,4292128567,4294370209,4294965479,3874020544,D.cSk)
D.eft=new B.y(4278326799,4278598442)
D.efv=new B.y(4278395929,4278258953)
D.efC=new B.y(4278599728,4278327826)
D.dbZ=w([D.eft,D.efv,D.efC],x.n)
D.cMZ=w(["\u269c","\u2756","\u2727"],x.s)
D.dzJ=new C.xp("Imperial Emerald",D.dbZ,4293050997,4294699968,4294180856,3872254170,D.cMZ)
D.efw=new B.y(4278455076,4278918747)
D.efB=new B.y(4278587439,4278322714)
D.efP=new B.y(4279051376,4278455076)
D.daa=w([D.efw,D.efB,D.efP],x.n)
D.d2L=w(["\u2654","\u2726","\u2748"],x.s)
D.dzD=new C.xp("Sapphire Crown",D.daa,4291417834,4294967295,4294310143,3871986666,D.d2L)
D.eg2=new B.y(4279894534,4283041554)
D.ege=new B.y(4281008906,4279042307)
D.egm=new B.y(4284221976,4279894534)
D.dfA=w([D.eg2,D.ege,D.egm],x.n)
D.cOi=w(["\u265b","\u2766","\u2726"],x.s)
D.dzF=new C.xp("Ruby Throne",D.dfA,4293378685,4294963145,4294964466,3874213833,D.cOi)
D.efX=new B.y(4279371039,4281995100)
D.eg6=new B.y(4280092723,4278714896)
D.egj=new B.y(4283045242,4279371039)
D.dck=w([D.efX,D.eg6,D.egj],x.n)
D.daw=w(["\u2655","\u2756","\u2727"],x.s)
D.dzK=new C.xp("Amethyst Palace",D.dck,4293314984,4294963421,4294702591,3873229802,D.daw)
D.efy=new B.y(4278519045,4280032287)
D.efQ=new B.y(4279111184,4278321666)
D.egb=new B.y(4280492839,4278716426)
D.d93=w([D.efy,D.efQ,D.egb],x.n)
D.d17=w(["\u2726","\u25c6","\u2742"],x.s)
D.dzH=new C.xp("Obsidian & Platinum",D.d93,4293256418,4294967295,4294638330,3872378836,D.d17)
D.eg3=new B.y(4279896588,4282194463)
D.egc=new B.y(4280553487,4279043334)
D.egk=new B.y(4283048488,4279896588)
D.d0C=w([D.eg3,D.egc,D.egk],x.n)
D.ddV=w(["\u2766","\u273f","\u2727"],x.s)
D.dzE=new C.xp("Rose Gold Velvet",D.d0C,4293440672,4294960345,4294964979,3874214602,D.ddV)
D.efz=new B.y(4278520340,4279180595)
D.efE=new B.y(4278718495,4278322443)
D.eg0=new B.y(4279510591,4278520340)
D.cDi=w([D.efz,D.efE,D.eg0],x.n)
D.d1O=w(["\u269c","\u2736","\u2756"],x.s)
D.dzI=new C.xp("Midnight Brass",D.cDi,4291405148,4293975208,4294439914,3872837564,D.d1O)
D.egz=new B.y(4294703086,4293780428)
D.egv=new B.y(4294307549,4293187253)
D.egA=new B.y(4294966517,4293977807)
D.cQo=w([D.egz,D.egv,D.egA],x.n)
D.d2c=w(["\u269c","\u265b","\u2726"],x.s)
D.dzL=new C.xp("Ivory Marble & Gold",D.cQo,4289760572,4286209048,4280951062,3863625518,D.d2c)
D.efK=new B.y(4278978566,4280555024)
D.eg_=new B.y(4279504137,4278518530)
D.egg=new B.y(4281211923,4278978566)
D.cO8=w([D.efK,D.eg_,D.egg],x.n)
D.dbe=w(["\u2742","\u2726","\u265c"],x.s)
D.dzG=new C.xp("Onyx & Copper",D.cO8,4291856987,4294365880,4294964718,3873885630,D.dbe)
D.cxf=w([D.dzM,D.dzJ,D.dzD,D.dzF,D.dzK,D.dzH,D.dzE,D.dzI,D.dzL,D.dzG],B.ax("O<xp>"))
D.czx=w([A.aw,D.AA,A.hG],x.O)
D.enx=new B.y("Original",null)
D.enF=new B.y("Wide 16:9",1.7777777777777777)
D.epT=new B.y("Landscape 3:2",1.5)
D.en0=new B.y("Photo 4:3",1.3333333333333333)
D.eoI=new B.y("Square",1)
D.eAo=new B.y("Portrait 3:4",0.75)
D.auh=w([D.enx,D.enF,D.epT,D.en0,D.eoI,D.eAo],B.ax("O<+(n,N?)>"))
D.aui=w([A.hG,A.bZ,A.b8,A.bt],x.O)
D.eq3=new B.y("","Original")
D.erS=new B.y("circle","Circle")
D.exy=new B.y("rounded","Rounded")
D.eys=new B.y("triangle","Triangle")
D.etU=new B.y("hexagon","Hexagon")
D.esh=new B.y("diamond","Diamond")
D.er7=new B.y("arch","Arch")
D.BX=w([D.eq3,D.erS,D.exy,D.eys,D.etU,D.esh,D.er7],x.L)
D.duR=new C.l9("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kj,A.dr,A.aK)
D.dv6=new C.l9("campus_green","Campus Green","Normal",A.aZ,A.mW,A.ta,A.h5,A.eo)
D.duY=new C.l9("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.iv,A.nH)
D.dv4=new C.l9("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.duQ=new C.l9("coral_fresh","Coral Fresh","Normal",A.ci,A.is,A.qA,A.jS,A.t4)
D.dv5=new C.l9("lavender_calm","Lavender Calm","Normal",A.b7,A.po,A.Ao,A.pr,A.jr)
D.duS=new C.l9("ocean_breeze","Ocean Breeze","Normal",A.fa,A.qO,A.t0,A.uY,A.nI)
D.aep=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dv2=new C.l9("berry_pop","Berry Pop","Normal",A.fi,D.aep,A.kd,G.X8,A.EK)
D.duT=new C.l9("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kd,A.cq)
D.dv1=new C.l9("executive_navy","Executive Navy","Professional",A.d6,A.adL,A.dr,A.l8,A.bJ)
D.dv_=new C.l9("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cq)
D.duU=new C.l9("corporate_steel","Corporate Steel","Professional",A.mU,A.M,A.mg,A.f5,A.bJ)
D.duX=new C.l9("gold_luxe","Gold Luxe","Luxury",A.mT,A.dH,A.ot,A.lE,A.bK)
D.bf7=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dv0=new C.l9("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bf7,A.WX,A.iq,A.nD)
D.dv3=new C.l9("platinum_night","Platinum Night","Luxury",A.cq,A.dL,A.bm,A.aP,A.aL)
D.dv7=new C.l9("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pu,A.eY,A.pC,A.js)
D.duP=new C.l9("royal_purple","Royal Purple","Luxury",A.mV,A.W7,A.jr,A.kd,A.Kh)
D.duZ=new C.l9("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b1,A.aL)
D.duW=new C.l9("crimson_impact","Crimson Impact","Bold",A.bI,A.kh,A.es,A.tl,A.f3)
D.duV=new C.l9("sunset_gallery","Sunset Gallery","Bold",A.fo,A.t4,A.jS,A.qA,A.mf)
D.GI=w([D.duR,D.dv6,D.duY,D.dv4,D.duQ,D.dv5,D.duS,D.dv2,D.duT,D.dv1,D.dv_,D.duU,D.duX,D.dv0,D.dv3,D.dv7,D.duP,D.duZ,D.duW,D.duV],B.ax("O<l9>"))
D.cL_=w([A.bY,D.j8],x.O)
D.d0S=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eqU=new B.y("Faces & people",D.d0S)
D.czB=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eet=new B.y("Ideas & work",D.czB)
D.cSR=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.etZ=new B.y("Nature",D.cSR)
D.d10=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.env=new B.y("Places & things",D.d10)
D.cW7=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.erc=new B.y("Symbols",D.cW7)
D.cL5=w([D.eqU,D.eet,D.etZ,D.env,D.erc],B.ax("O<+(n,ai<n>)>"))
D.b6A=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cLt=w([A.bY,D.acU,D.b6A],x.O)
D.b0L=new B.ac(0,A.G,A.Ke,A.aFQ,40)
D.b0s=new B.ac(0,A.G,A.nF,A.ek,8)
D.cLF=w([D.b0L,D.b0s],x.V)
D.cM6=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.auH=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1L=w([A.hG,A.f2,A.bI,A.aB,A.ci],x.O)
D.cMT=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ad7=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cN3=w([A.WN,D.ad7,A.WN],x.O)
D.cN9=w([A.hV,D.j8,D.Kq],x.O)
D.enj=new B.y(A.bg,D.a_v)
D.eoD=new B.y(A.L,D.a_u)
D.eiG=new B.y(A.dM,D.a_w)
D.cO3=w([D.enj,D.eoD,D.eiG],B.ax("O<+(pU,a_)>"))
D.cQ=new C.Ip(0,"text")
D.lr=new C.Ip(1,"image")
D.f_=new C.Ip(2,"shape")
D.Rp=new C.Ip(3,"pdf")
D.kY=new C.Ip(4,"signature")
D.a4w=new C.Ip(5,"bio")
D.cOW=w([D.cQ,D.lr,D.f_,D.Rp,D.kY,D.a4w],B.ax("O<Ip>"))
D.cOX=w([A.bl,A.cF],B.ax("O<Hl>"))
D.cPy=w(["School","Documents","Sign & present"],x.s)
D.b0Q=new B.ac(0,A.G,A.aeZ,A.ui,28)
D.cPS=w([D.b0Q],x.V)
D.cQa=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Py=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.av5=w([A.hG,A.EJ,A.aL,A.c,A.ou,A.aw],x.O)
D.ezM=new B.y(0.1,0.08)
D.etX=new B.y(0.3,0.05)
D.eid=new B.y(0.55,0.1)
D.emj=new B.y(0.8,0.06)
D.epm=new B.y(0.92,0.16)
D.eoS=new B.y(0.2,0.2)
D.emM=new B.y(0.7,0.22)
D.esE=new B.y(0.05,0.4)
D.epL=new B.y(0.95,0.45)
D.eiV=new B.y(0.12,0.7)
D.el5=new B.y(0.88,0.75)
D.eld=new B.y(0.4,0.9)
D.egP=new B.y(0.65,0.93)
D.elW=new B.y(0.25,0.97)
D.eng=new B.y(0.85,0.9)
D.ejK=new B.y(0.5,0.04)
D.cRz=w([D.ezM,D.etX,D.eid,D.emj,D.epm,D.eoS,D.emM,D.esE,D.epL,D.eiV,D.el5,D.eld,D.egP,D.elW,D.eng,D.ejK],x.G)
D.cRG=w([A.c,A.hi,A.aS,A.aV],x.O)
D.dW6=new C.jF("office_blue","Office Blue",A.bj,A.dr,A.aK,A.c,A.kj)
D.dWh=new C.jF("campus_green","Campus Green",A.aZ,A.h5,A.eo,A.mW,A.ta)
D.dW7=new C.jF("sunset","Sunset",A.fo,A.jS,A.nH,A.is,A.qA)
D.dW8=new C.jF("midnight","Midnight",A.aE,A.kd,A.cq,A.M,A.dx)
D.dWj=new C.jF("classic","Classic",A.d8,A.dH,A.lF,A.hU,A.h3)
D.dWg=new C.jF("rose_gold","Rose Gold",A.hi,A.x9,A.x8,A.v7,A.AF)
D.dW1=new C.jF("ocean_teal","Ocean Teal",A.fa,A.uY,A.nI,A.qO,A.t0)
D.dW0=new C.jF("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dW_=new C.jF("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dL,A.M)
D.dWb=new C.jF("lavender","Lavender",A.b7,A.pr,A.jr,A.po,A.Ao)
D.dWd=new C.jF("coral","Coral",A.ci,A.jS,A.t4,A.is,A.mf)
D.dW2=new C.jF("forest","Forest",A.hj,A.e3,A.cD,A.lG,A.et)
D.dW3=new C.jF("berry","Berry",A.fi,G.X8,A.EK,D.aep,A.kd)
D.dWa=new C.jF("sand","Sand",A.dT,A.iv,A.nH,A.hU,A.bK)
D.dWf=new C.jF("ice","Ice",A.mU,A.KH,A.aK,A.mR,A.f5)
D.dW5=new C.jF("charcoal","Charcoal",A.ak,A.aP,A.cq,A.bm,A.M)
D.dVZ=new C.jF("mint","Mint",A.aV,A.fw,A.h5,A.lG,A.pC)
D.dWe=new C.jF("crimson","Crimson",A.bI,A.mY,A.kh,A.EH,A.tl)
D.b91=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dW9=new C.jF("gold","Gold",A.mT,A.uW,A.ot,D.b91,A.lE)
D.dWc=new C.jF("aqua","Aqua",A.bN,A.Ex,A.or,A.pq,A.ov)
D.dW4=new C.jF("plum","Plum",A.mV,A.x6,A.EK,A.Em,A.qM)
D.dWi=new C.jF("steel","Steel",A.d6,A.dr,A.bm,A.kj,A.l8)
D.a2_=w([D.dW6,D.dWh,D.dW7,D.dW8,D.dWj,D.dWg,D.dW1,D.dW0,D.dW_,D.dWb,D.dWd,D.dW2,D.dW3,D.dWa,D.dWf,D.dW5,D.dVZ,D.dWe,D.dW9,D.dWc,D.dW4,D.dWi],B.ax("O<jF>"))
D.cS0=w([A.bY,A.ja],x.O)
D.Rr=new C.hx(10,"rotate3d")
D.HG=new C.hx(8,"flip")
D.aFj=new C.hx(19,"spiral")
D.q6=new C.hx(16,"bounce")
D.aFm=new C.hx(9,"flipVertical")
D.cS1=w([D.Rr,D.HG,D.aFj,D.q6,D.aFm],x.i)
D.e6=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cSn=w([0.62,1],x.x)
D.cSN=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cSZ=w([0,0.32,0.68,1],x.x)
D.mD=new C.hx(6,"zoom")
D.uc=new C.hx(4,"slideUp")
D.ub=new C.hx(2,"slideLeft")
D.cT7=w([D.mD,D.HG,D.uc,D.Rr,D.ub],x.i)
D.cTC=w([A.bZ,A.hi,A.iq,A.hG,A.c],x.O)
D.b0G=new B.ac(0,A.G,D.adl,A.ui,30)
D.cUj=w([D.b0G],x.V)
D.e4I=new B.u(0,-2.5)
D.e4y=new B.u(-2.5,0)
D.e3g=new B.u(2.5,0)
D.cUm=w([A.RH,A.a4T,A.aGl,A.a4S,D.e4I,H.aGh,D.e4y,D.e3g],x.dN)
D.GQ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cUQ=w([23,114,69,56,80,144],x.t)
D.cVf=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cVE=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cXc=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cXg=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uz(0,"rectangle")
D.eK=new C.uz(1,"circle")
D.kZ=new C.uz(6,"hexagon")
D.cXt=w([D.be,D.eK,D.kZ],x.m)
D.o4=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aew=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cY1=w([D.aew,A.e3],x.O)
D.eio=new B.y("","Classic")
D.eh2=new B.y("caps","Bold caps")
D.esH=new B.y("elegant","Elegant")
D.exR=new B.y("shadow","Shadow")
D.emF=new B.y("neon","Neon glow")
D.ewu=new B.y("outline","Outline")
D.evG=new B.y("marker","Highlighter")
D.ey1=new B.y("stamp","Stamp")
D.ext=new B.y("retro","Retro")
D.elD=new B.y("threed","3D")
D.etc=new B.y("fire","Fire")
D.eu8=new B.y("ice","Ice")
D.erR=new B.y("chalk","Chalk")
D.erW=new B.y("comic","Comic")
D.ey3=new B.y("sunset","Sunset")
D.ezb=new B.y("softglow","Soft glow")
D.ev7=new B.y("lowercase","Lowercase")
D.eso=new B.y("double","Echo")
D.ezk=new B.y("whisper","Whisper")
D.avY=w([D.eio,D.eh2,D.esH,D.exR,D.emF,D.ewu,D.evG,D.ey1,D.ext,D.elD,H.aLu,D.etc,D.eu8,D.erR,D.erW,A.a5G,D.ey3,D.ezb,D.ev7,D.eso,D.ezk],x.L)
D.cZg=w([3,5,7,10,12,15],x.t)
D.d_C=w([A.bZ,A.bK,A.c,A.eA,A.cs],x.O)
D.dmv=new C.tb(10,"cardWorld")
D.Co=new C.Be(3,"rounded")
D.dCN=new C.lc("world","NGMY World",D.dmv,D.Co,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dmw=new C.tb(11,"cardSplit")
D.dCJ=new C.lc("business","Business Wire",D.dmw,D.Co,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dmx=new C.tb(12,"cardBreaking")
D.dCW=new C.lc("breaking","Breaking Red",D.dmx,D.Co,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dmy=new C.tb(13,"cardFeature")
D.dCP=new C.lc("feature","Tech Feature",D.dmy,D.Co,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDQ=new C.tb(6,"circle")
D.aDK=new C.Be(4,"circle")
D.dCT=new C.lc("parchment","Royal Circle",D.aDQ,D.aDK,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dCI=new C.lc("ocean","Blue Ocean",D.aDQ,D.aDK,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dmB=new C.tb(7,"rail")
D.aDJ=new C.Be(1,"double")
D.dCK=new C.lc("forest","Green Leaf",D.dmB,D.aDJ,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDN=new C.tb(1,"sideBySide")
D.dCY=new C.lc("herald","NGMY Herald",D.aDN,D.Co,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDM=new C.tb(0,"classic")
D.a3J=new C.Be(9,"shadow")
D.dCX=new C.lc("daily","The Daily",D.aDM,D.a3J,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dmz=new C.tb(2,"splash")
D.aDL=new C.Be(6,"cutCorner")
D.dCH=new C.lc("tabloid","Big Tabloid",D.dmz,D.aDL,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDR=new C.tb(9,"minimal")
D.dCS=new C.lc("modern","Modern Digest",D.aDR,D.Co,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDO=new C.tb(3,"magazine")
D.aDI=new C.Be(0,"plain")
D.dCO=new C.lc("midnight","Midnight Edition",D.aDO,D.aDI,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dmC=new C.tb(8,"banner")
D.dCQ=new C.lc("metro","Metro Wire",D.dmC,D.aDL,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dmu=new C.Be(8,"arch")
D.dCR=new C.lc("sunrise","Sunrise Post",D.aDO,D.dmu,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDP=new C.tb(5,"scrapbook")
D.dmt=new C.Be(5,"tape")
D.dCM=new C.lc("neon","Neon Beat",D.aDP,D.dmt,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dmA=new C.tb(4,"wrap")
D.dCZ=new C.lc("gold","Golden Press",D.dmA,D.a3J,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dD_=new C.lc("minimal","Paper White",D.aDR,D.a3J,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dCL=new C.lc("gazette","Fresh Gazette",D.aDM,D.aDJ,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dCV=new C.lc("times","Classic Times",D.aDN,D.aDI,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QY=new C.Be(2,"polaroid")
D.dCU=new C.lc("scrapbook","Memory Scrapbook",D.aDP,D.QY,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2e=w([D.dCN,D.dCJ,D.dCW,D.dCP,D.dCT,D.dCI,D.dCK,D.dCY,D.dCX,D.dCH,D.dCS,D.dCO,D.dCQ,D.dCR,D.dCM,D.dCZ,D.dD_,D.dCL,D.dCV,D.dCU],B.ax("O<lc>"))
D.d_O=w([0.45,1],x.x)
D.GS=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d09=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fTs=new C.os("Original",0,1,1,0,0,0)
D.fTw=new C.os("Black & white",0,1.1,0,0,0,0)
D.fTj=new C.os("Noir",-0.05,1.55,0,0,0,0)
D.fTn=new C.os("Sepia",0,1,0.25,0.9,0,0)
D.fTm=new C.os("Vivid",0,1.15,1.6,0,0,0)
D.fTf=new C.os("Pop",0,1.3,1.9,0,0,0)
D.fTh=new C.os("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fTt=new C.os("Matte",0,0.9,0.85,0,0,0.55)
D.fTo=new C.os("Cool",0,1.05,1,-0.8,0,0)
D.fTv=new C.os("Warm",0.03,1.05,1.1,0.8,0,0)
D.fTg=new C.os("Golden hour",0.04,1,1.25,1,0,0)
D.fTl=new C.os("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fTu=new C.os("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fTk=new C.os("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fTq=new C.os("Retro",0,0.9,0.7,0.4,0,0.35)
D.fTp=new C.os("Forest",0,1,1.2,-0.1,-0.45,0)
D.fTr=new C.os("Rose",0,1,1.1,0.3,0.4,0)
D.fTi=new C.os("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d0a=w([D.fTs,D.fTw,D.fTj,D.fTn,D.fTm,D.fTf,D.fTh,D.fTt,D.fTo,D.fTv,D.fTg,D.fTl,D.fTu,D.fTk,D.fTq,D.fTp,D.fTr,D.fTi],B.ax("O<os>"))
D.b60=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d0b=w([D.aew,A.e3,D.b60],x.O)
D.eem=new B.y(0.12,0.3)
D.euj=new B.y(0.26,0.75)
D.esD=new B.y(0.8,0.22)
D.eyb=new B.y(0.9,0.7)
D.ev6=new B.y(0.5,0.15)
D.eww=new B.y(0.65,0.85)
D.ekd=new B.y(0.08,0.85)
D.d0n=w([D.eem,D.euj,D.esD,D.eyb,D.ev6,D.eww,D.ekd],x.G)
D.aw7=w([A.b8,A.bZ,A.bt,A.b2],x.O)
D.d1b=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d1n=w([A.c,A.f5,A.dv,A.uZ],x.O)
D.b9e=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d2l=w([D.b9e,D.ad7],x.O)
D.d2m=w([A.x1,A.aw],x.O)
D.d2A=w([0,0.25,0.75,1],x.x)
D.d2C=w([A.wY,A.ou],x.O)
D.aEU=new C.kQ(10,"kenteSunset")
D.fXP=w([D.adw,A.jO,A.aw],x.O)
D.dy4=new C.jm("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEU,4294964964,4282000405,4279983648,D.jF)
D.aEV=new C.kQ(11,"indigoMudcloth")
D.b6Y=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fY2=w([D.b6Y,A.ad4,A.hV],x.O)
D.dyc=new C.jm("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aEV,4294439140,4279903102,4279903102,D.jF)
D.aEW=new C.kQ(12,"adinkraRoyal")
D.bjG=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fY3=w([D.ac1,D.bjG,A.aw],x.O)
D.dye=new C.jm("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEW,4294965484,4285218591,4287322667,D.jF)
D.aEX=new C.kQ(13,"nileLotus")
D.bg0=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bcM=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fY8=w([D.bg0,D.bcM,A.hV],x.O)
D.dyd=new C.jm("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEX,4294244340,4279196764,4279196764,D.jF)
D.aEY=new C.kQ(14,"shweshweIvory")
D.bb1=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b9U=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b7r=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fXQ=w([D.bb1,D.b9U,D.b7r],x.O)
D.dy9=new C.jm("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEY,4294505710,4279970378,4291058750,D.jF)
D.ro=new C.kQ(15,"certIvoryNavy")
D.fXO=w([D.L3,D.j8,A.hV],x.O)
D.aEp=new C.xn(1,"ringsNdoa")
D.dy6=new C.jm("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.ro,4294966259,4279378237,4291404327,D.aEp)
D.a4e=new C.xn(2,"coupleCards")
D.dy1=new C.jm("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.ro,4294966259,4279378237,4291404327,D.a4e)
D.Cr=new C.kQ(18,"certIvoryNavyBar")
D.ac0=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fY1=w([D.ac0,D.j8,A.hV],x.O)
D.aEq=new C.xn(3,"kuhoweshaForm")
D.dy_=new C.jm("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cr,4294966519,4279378237,4291404327,D.aEq)
D.adj=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fYl=w([D.L3,D.adj,A.hV],x.O)
D.a4f=new C.xn(4,"mahariPande")
D.dy2=new C.jm("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.ro,4294966259,4279904068,4291404327,D.a4f)
D.aEZ=new C.kQ(16,"certIvoryGreen")
D.bat=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fXS=w([A.Ki,D.bat,A.hV],x.O)
D.aEr=new C.xn(5,"familiaMti")
D.dy8=new C.jm("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEZ,4294966776,4280241466,4291404327,D.aEr)
D.a4g=new C.xn(6,"ndoaSafi")
D.dy0=new C.jm("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cr,4294966519,4279378237,4291404327,D.a4g)
D.beu=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fXV=w([D.L3,A.hV,D.beu],x.O)
D.a4h=new C.xn(7,"peteWide")
D.dy5=new C.jm("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.ro,4294966259,4282001936,4291404327,D.a4h)
D.dyf=new C.xn(8,"muhuriCrest")
D.dxZ=new C.jm("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.ro,4294966259,4279378237,4291404327,D.dyf)
D.fY4=w([D.ac0,D.adj,A.hV],x.O)
D.dyg=new C.xn(9,"fomuWazi")
D.dyb=new C.jm("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cr,4294966519,4279904068,4291404327,D.dyg)
D.aF_=new C.kQ(17,"certIvoryRose")
D.bb5=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fY7=w([D.bb5,D.ae8,A.hV],x.O)
D.a4d=new C.xn(10,"upendoOrnate")
D.dy7=new C.jm("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aF_,4294965493,4286200650,4291404327,D.a4d)
D.d30=w([D.dy4,D.dyc,D.dye,D.dyd,D.dy9,D.dy6,D.dy1,D.dy_,D.dy2,D.dy8,D.dy0,D.dy5,D.dxZ,D.dyb,D.dy7],x.h)
D.e7=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HH=new C.vQ(0,"emojis")
D.Cy=new C.vQ(1,"pictures")
D.HI=new C.vQ(2,"icons3d")
D.a4y=new C.vQ(3,"animations")
D.Rt=new C.vQ(4,"videoMotion")
D.Cz=new C.vQ(5,"luxe")
D.a2l=w([D.HH,D.Cy,D.HI,D.a4y,D.Rt,D.Cz],B.ax("O<vQ>"))
D.ex6=new B.y(A.dW,"Looks")
D.emc=new B.y(A.ym,"Light")
D.em8=new B.y(A.ne,"Colour")
D.eke=new B.y(A.xY,"Effects")
D.akt=new B.a_(63112,"MaterialIcons",!1)
D.ehf=new B.y(D.akt,"Crop")
D.d3u=w([D.ex6,D.emc,D.em8,D.eke,D.ehf],x.f2)
D.d46=w([],x.D)
D.fYi=w([],x.L)
D.ekr=new B.y("Flashcard",D.HC)
D.eo6=new B.y("Quiz",D.HD)
D.epZ=new B.y("Worksheet",D.HE)
D.enb=new B.y("Notes",D.mC)
D.eoB=new B.y("Section",D.Cw)
D.d4L=w([D.ekr,D.eo6,D.epZ,D.enb,D.eoB],B.ax("O<+(n,mt)>"))
D.dzW=new C.kQ(6,"beadedPearl")
D.bdp=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fYm=w([N.WW,D.bdp,A.hV],x.O)
D.aEn=new C.jm("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dzW,4294966774,4286209070,4291404327,D.jF)
D.dzX=new C.kQ(7,"artDeco")
D.bhe=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bjX=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fYk=w([D.bhe,D.bjX,A.bY],x.O)
D.aEo=new C.jm("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dzX,4294440434,4280228630,4290283019,D.jF)
D.dzY=new C.kQ(8,"rosetteCorners")
D.bj8=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9i=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bdk=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fXY=w([D.bj8,D.b9i,D.bdk],x.O)
D.aEm=new C.jm("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dzY,4294702831,4285218602,4291394365,D.jF)
D.dzZ=new C.kQ(9,"modernLedger")
D.fXX=w([A.c,D.j8,D.j8],x.O)
D.aEl=new C.jm("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dzZ,4294967295,4279378237,4279378237,D.jF)
D.d4P=w([D.aEn,D.aEo,D.aEm,D.aEl],x.h)
D.d4X=w([A.iq,A.ou],x.O)
D.cm=new C.hx(0,"none")
D.dd=new C.hx(1,"fade")
D.HF=new C.hx(3,"slideRight")
D.aFl=new C.hx(5,"slideDown")
D.dUB=new C.hx(7,"zoomOut")
D.a4x=new C.hx(11,"cube")
D.dUw=new C.hx(12,"blur")
D.aFi=new C.hx(13,"dissolve")
D.dUx=new C.hx(14,"wipeLeft")
D.dUy=new C.hx(15,"wipeRight")
D.Rs=new C.hx(17,"push")
D.dUz=new C.hx(18,"flash")
D.aFk=new C.hx(20,"swing")
D.dUA=new C.hx(21,"curtain")
D.Q6=w([D.cm,D.dd,D.ub,D.HF,D.uc,D.aFl,D.mD,D.dUB,D.HG,D.aFm,D.Rr,D.a4x,D.dUw,D.aFi,D.dUx,D.dUy,D.q6,D.Rs,D.dUz,D.aFj,D.aFk,D.dUA],x.i)
D.Q7=w([D.a4c,D.a4a,D.a43,D.a44,D.a45,D.a48,D.a46,D.a47,D.a4b,D.a49,D.aEn,D.aEo,D.aEm,D.aEl],x.h)
D.d5o=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d5s=w([A.As,A.hG,A.bY],x.O)
D.elx=new B.y(A.tM,"Design")
D.eyB=new B.y(D.akK,"Word sizes")
D.euR=new B.y(A.BG,"Text")
D.bDL=new B.a_(983182,"MaterialIcons",!1)
D.euV=new B.y(D.bDL,"Photo")
D.egS=new B.y(A.lm,"Logo")
D.ezK=new B.y(A.Gc,"News")
D.d5x=w([D.elx,D.eyB,D.euR,D.euV,D.egS,D.ezK],x.f2)
D.d5y=w(["golddust","sparkle","sheen"],x.s)
D.dVY=new C.eu("upload_pdf",K.Nr,"Upload PDF")
D.dV7=new C.eu("sign_paper",A.G9,"Sign Paper")
D.bD1=new B.a_(63438,"MaterialIcons",!1)
D.dVU=new C.eu("hd_photo",D.bD1,"HD Photo")
D.dV_=new C.eu("sharpen",E.a_g,"Sharpen")
D.dV9=new C.eu("print",K.Nr,"Download PDF")
D.dVB=new C.eu("rotate",D.akt,"Rotate")
D.dVi=new C.eu("text_box",A.BG,"Text Box")
D.dVk=new C.eu("picture",A.tQ,"Picture")
D.dVg=new C.eu("title",A.yg,"Title")
D.dVc=new C.eu("subtitle",T.alj,"Subtitle")
D.dVK=new C.eu("bullets",I.a_x,"Bullet List")
D.dVd=new C.eu("numbered",A.Nf,"Numbered")
D.dVN=new C.eu("quote",A2.By,"Quote")
D.dVp=new C.eu("citation",A.nY,"Citation")
D.dVQ=new C.eu("date_stamp",Ah.a_l,"Date Stamp")
D.dVD=new C.eu("page_number",A.yf,"Page #")
D.dVH=new C.eu("header_bar",A.BI,"Header")
D.dVj=new C.eu("footer_bar",Aq.a05,"Footer")
D.dV8=new C.eu("divider",A.tP,"Divider")
D.dV4=new C.eu("highlight",A.a_D,"Highlight")
D.dVJ=new C.eu("redact",A.yj,"Redact")
D.dVw=new C.eu("callout",A.Bu,"Callout")
D.dVS=new C.eu("checkboxes",I.ajJ,"Checklist")
D.dVt=new C.eu("table",A.a02,"Table")
D.dVn=new C.eu("memo",I.a_O,"Memo")
D.dVx=new C.eu("letter",A.FZ,"Letter")
D.bCE=new B.a_(63259,"MaterialIcons",!0)
D.dUZ=new C.eu("agenda",D.bCE,"Agenda")
D.dVa=new C.eu("toc",AA.akW,"Contents")
D.bCY=new B.a_(63406,"MaterialIcons",!1)
D.dVu=new C.eu("sig_line",D.bCY,"Sign Line")
D.dUS=new C.eu("initial_line",A.jg,"Initials")
D.dUV=new C.eu("approved",A.lm,"APPROVED")
D.dVz=new C.eu("draft",A.oN,"DRAFT")
D.dVF=new C.eu("confidential",A.jh,"Confidential")
D.dVI=new C.eu("sticky",A.Nx,"Sticky Note")
D.dVR=new C.eu("progress",A.akV,"Progress")
D.bEe=new B.a_(983507,"MaterialIcons",!1)
D.dV5=new C.eu("stars",D.bEe,"Star Rating")
D.dUQ=new C.eu("equation",A.akM,"Equation")
D.dV0=new C.eu("timeline",A.Ny,"Timeline")
D.dVo=new C.eu("two_col",A.a06,"Two Columns")
D.dV2=new C.eu("compare",A1.a_o,"Compare")
D.dUO=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dVW=new C.eu("delete_el",A.e5,"Delete")
D.dVM=new C.eu("bring_fwd",N.akG,"Bring Front")
D.dUT=new C.eu("send_back",N.akF,"Send Back")
D.dVy=new C.eu("align_left",D.a_v,"Align L")
D.dVE=new C.eu("align_center",D.a_u,"Align C")
D.dVV=new C.eu("align_right",D.a_w,"Align R")
D.dVh=new C.eu("word_count",A_.a__,"Word Count")
D.dVe=new C.eu("link_text",A.hm,"Link")
D.dVC=new C.eu("phone",A.iA,"Phone")
D.dV3=new C.eu("email",A.Bw,"Email")
D.dVX=new C.eu("qr_placeholder",A.jj,"QR Placeholder")
D.dUY=new C.eu("rectangle",A3.vw,"Rectangle")
D.dVs=new C.eu("circle",A.r0,"Circle")
D.dUU=new C.eu("arrow",A.iV,"Arrow")
D.dVL=new C.eu("line",A.tP,"Line")
D.dV6=new C.eu("triangle",A.a_m,"Triangle")
D.bCM=new B.a_(63318,"MaterialIcons",!1)
D.dVb=new C.eu("grayscale",D.bCM,"Grayscale")
D.dVl=new C.eu("brighten",I.ak2,"Brighten")
D.dVq=new C.eu("flip_h",A.FP,"Flip H")
D.bCT=new B.a_(63348,"MaterialIcons",!1)
D.dVT=new C.eu("flip_v",D.bCT,"Flip V")
D.dVG=new C.eu("cover_page",A.pO,"Cover Page")
D.dUR=new C.eu("invoice",A.h9,"Invoice")
D.dV1=new C.eu("resume",A.mp,"Resume")
D.dVf=new C.eu("minutes",A.oH,"Minutes")
D.dUW=new C.eu("lab_report",A.Nu,"Lab Report")
D.dUX=new C.eu("rubric",A.tN,"Rubric")
D.dVr=new C.eu("flashcard_tool",V.G5,"Flashcard")
D.dVO=new C.eu("quiz_tool",A.G2,"Quiz Block")
D.dVv=new C.eu("worksheet_tool",L.FG,"Worksheet")
D.dVA=new C.eu("outline_share",A.Nv,"Share Outline")
D.dVP=new C.eu("export_json",D.ajP,"Export JSON")
D.dUP=new C.eu("new_slide",D.ZZ,"New Slide")
D.dVm=new C.eu("present",A.pU,"Present")
D.d5Y=w([D.dVY,D.dV7,D.dVU,D.dV_,D.dV9,D.dVB,D.dVi,D.dVk,D.dVg,D.dVc,D.dVK,D.dVd,D.dVN,D.dVp,D.dVQ,D.dVD,D.dVH,D.dVj,D.dV8,D.dV4,D.dVJ,D.dVw,D.dVS,D.dVt,D.dVn,D.dVx,D.dUZ,D.dVa,D.dVu,D.dUS,D.dUV,D.dVz,D.dVF,D.dVI,D.dVR,D.dV5,D.dUQ,D.dV0,D.dVo,D.dV2,D.dUO,D.dVW,D.dVM,D.dUT,D.dVy,D.dVE,D.dVV,D.dVh,D.dVe,D.dVC,D.dV3,D.dVX,D.dUY,D.dVs,D.dUU,D.dVL,D.dV6,D.dVb,D.dVl,D.dVq,D.dVT,D.dVG,D.dUR,D.dV1,D.dVf,D.dUW,D.dUX,D.dVr,D.dVO,D.dVv,D.dVA,D.dVP,D.dUP,D.dVm],B.ax("O<eu>"))
D.d66=w([A.cq,A.ak],x.O)
D.egq=new B.y(4286331629,4292552567)
D.egd=new B.y(4280640491,4278630100)
D.egy=new B.y(4294538006,4292943176)
D.efA=new B.y(4278556265,4280640491)
D.d0x=w([D.egq,D.egd,D.egy,D.efA],x.n)
D.cq_=w([4294626325,4280472558,4294210230],x.t)
D.dUJ=new C.nG("colorful","Colorful",A.ne,D.d0x,4294967295,3875536895,D.cq_,D.mD)
D.eg1=new B.y(4279522093,4279657780)
D.egh=new B.y(4281750292,4283268111)
D.efD=new B.y(4278603323,4279203438)
D.egi=new B.y(4282343954,4279599165)
D.cAO=w([D.eg1,D.egh,D.efD,D.egi],x.n)
D.cpI=w([4288931381,4294829706,4287033260],x.t)
D.dUF=new C.nG("nature","Nature",A.Ga,D.cAO,4294442727,3874290891,D.cpI,D.dd)
D.efW=new B.y(4279369771,4283178389)
D.efT=new B.y(4279179050,4286456526)
D.eg9=new B.y(4280163147,4290648157)
D.efs=new B.y(4278322711,4285343961)
D.cSf=w([D.efW,D.efT,D.eg9,D.efs],x.n)
D.cpW=w([4294210230,4280472558,4289170426],x.t)
D.dUD=new C.nG("vibe","Vibe",A.a_B,D.cSf,4294967295,3874869502,D.cpW,D.ub)
D.egu=new B.y(4290007817,4292552567)
D.ego=new B.y(4286328082,4294286859)
D.egt=new B.y(4288485197,4294538006)
D.egn=new B.y(4285343961,4293675161)
D.bXa=w([D.egu,D.ego,D.egt,D.egn],x.n)
D.cq0=w([4294829706,4294967295,4284999929],x.t)
D.dUE=new C.nG("celebration","Celebration",A.lh,D.bXa,4294967295,4009752557,D.cq0,D.q6)
D.efR=new B.y(4279179050,4280171146)
D.efV=new B.y(4279310375,4280232247)
D.efJ=new B.y(4278916151,4280172719)
D.efS=new B.y(4279179050,4281549141)
D.cLm=w([D.efR,D.efV,D.efJ,D.efS],x.n)
D.cpD=w([4281908728,4294626325,4287931320],x.t)
D.dUI=new C.nG("professional","Professional",A.Bs,D.cLm,4294967295,3872118241,D.cpD,D.Rs)
D.efN=new B.y(4278995566,4278413729)
D.efF=new B.y(4278727492,4279137424)
D.ega=new B.y(4280171146,4278751666)
D.efO=new B.y(4278995566,4279590517)
D.ctL=w([D.efN,D.efF,D.ega,D.efO],x.n)
D.cpG=w([4286436348,4284410580,4294829706],x.t)
D.dUK=new C.nG("ocean","Ocean",I.a08,D.ctL,4294967295,3873501950,D.cpG,D.uc)
D.egp=new B.y(4286328082,4294538006)
D.egr=new B.y(4286781507,4294677052)
D.egl=new B.y(4283178389,4294197086)
D.egs=new B.y(4288295954,4294688548)
D.cHz=w([D.egp,D.egr,D.egl,D.egs],x.n)
D.cq1=w([4294829706,4294967295,4294747557],x.t)
D.dUL=new C.nG("sunset","Sunset",A.NA,D.cHz,4294967295,4009749973,D.cq1,D.dd)
D.egC=new B.y(4294967295,4294047225)
D.egx=new B.y(4294507260,4294967295)
D.egB=new B.y(4294967295,4293060848)
D.egw=new B.y(4294507260,4294047225)
D.cVl=w([D.egC,D.egx,D.egB,D.egw],x.n)
D.cpB=w([4280640491,4279179050,4287931320],x.t)
D.dUH=new C.nG("minimal","Minimal",A3.vw,D.cVl,4279179050,4282865001,D.cpB,D.dd)
D.efM=new B.y(4278979081,4280886564)
D.eg5=new B.y(4280031511,4278979081)
D.efU=new B.y(4279308561,4281148438)
D.efL=new B.y(4278979081,4280031511)
D.d81=w([D.efM,D.eg5,D.efU,D.efL],x.n)
D.cpP=w([4292128567,4294829706,4289241758],x.t)
D.dUM=new C.nG("elegant","Elegant",A.lP,D.d81,4294898631,3873957348,D.cpP,D.aFi)
D.eg7=new B.y(4280159034,4282058596)
D.efI=new B.y(4278916151,4280163147)
D.egf=new B.y(4281208933,4278916151)
D.efZ=new B.y(4279502891,4283178389)
D.deu=w([D.eg7,D.efI,D.egf,D.efZ],x.n)
D.cpY=w([4294296657,4292128567,4291081725],x.t)
D.dUG=new C.nG("royal","Royal Gold",A.iY,D.deu,4294965222,3874084351,D.cpY,D.mD)
D.efx=new B.y(4278464302,4280163147)
D.efH=new B.y(4278916151,4279455306)
D.eg8=new B.y(4280163147,4283040846)
D.efu=new B.y(4278332450,4281413249)
D.d0e=w([D.efx,D.efH,D.eg8,D.efu],x.n)
D.cpC=w([4281193663,4289170426,4294210230],x.t)
D.dUN=new C.nG("aurora","Aurora Glow",A.dW,D.d0e,4293983738,3869766608,D.cpC,D.dd)
D.vT=w([D.dUJ,D.dUF,D.dUD,D.dUE,D.dUI,D.dUK,D.dUL,D.dUH,D.dUM,D.dUG,D.dUN],B.ax("O<nG>"))
D.bdU=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d6D=w([A.qE,D.bdU,A.qE],x.O)
D.d6V=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d6Z=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.euJ=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.el7=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.epz=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.edp=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eog=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.emx=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eqJ=new B.y("Surprise me","")
D.d7u=w([D.euJ,D.el7,D.epz,D.edp,D.eog,D.emx,D.eqJ],x.L)
D.b7t=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bhI=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d8d=w([A.c,D.b7t,D.bhI],x.O)
D.da1=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aES=new C.kQ(0,"heritageGold")
D.bcB=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fYn=w([D.bcB,W.adt,A.aw],x.O)
D.dya=new C.jm("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aES,4294570461,4284234270,4292128567,D.jF)
D.aET=new C.kQ(1,"heritageCrimson")
D.b5X=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bb2=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bhy=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fY0=w([D.b5X,D.bb2,D.bhy],x.O)
D.dy3=new C.jm("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aET,4294635750,4285213214,4292912216,D.jF)
D.da5=w([D.a4c,D.a4a,D.dya,D.dy3,D.a45,D.a48],x.h)
D.dE2=new C.rn(1,"circuit")
D.dEv=new C.m2("neural","Neural Link","Robotic",D.dE2,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dE1=new C.rn(0,"grid")
D.dEs=new C.m2("signal","Signal Grid","Robotic",D.dE1,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dE7=new C.rn(2,"hexes")
D.dEd=new C.m2("core","Core Protocol","Robotic",D.dE7,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFf=new C.rn(11,"diagonal")
D.dEo=new C.m2("steel","Steel Tech","Robotic",D.aFf,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFg=new C.rn(3,"rings")
D.dEc=new C.m2("vault","Vault Gold","Robotic",D.aFg,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dE5=new C.rn(13,"leaves")
D.dEf=new C.m2("forest","Forest Morning","Nature",D.dE5,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFh=new C.rn(5,"waves")
D.dEm=new C.m2("ocean","Ocean Calm","Nature",D.aFh,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dE8=new C.rn(6,"sunset")
D.dEr=new C.m2("sunset","Sunset Glow","Nature",D.dE8,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dE9=new C.rn(7,"mountains")
D.dEe=new C.m2("mountain","Mountain Air","Nature",D.dE9,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dEa=new C.rn(8,"stars")
D.dEl=new C.m2("night","Night Sky","Nature",D.dEa,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4v=new C.rn(4,"orbs")
D.dEj=new C.m2("aurora","Aurora","Nature",D.a4v,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dEt=new C.m2("sand","Sand Dune","Nature",D.aFh,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dEb=new C.rn(9,"rays")
D.dEi=new C.m2("golden","Golden Hour","Warm",D.dEb,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dEg=new C.m2("royal","Royal Purple","Warm",D.aFf,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dEh=new C.m2("rose","Rose Petal","Warm",D.a4v,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dE4=new C.rn(12,"blocks")
D.dEk=new C.m2("electric","Electric Blue","Bold",D.dE4,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dEu=new C.m2("mint","Fresh Mint","Bold",D.a4v,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dE6=new C.rn(14,"minimal")
D.dEq=new C.m2("white","Clean White","Clean",D.dE6,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dE3=new C.rn(10,"frame")
D.dEn=new C.m2("midnight","Midnight Gold","Clean",D.dE3,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dEp=new C.m2("community","Community Green","Clean",D.aFg,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2N=w([D.dEv,D.dEs,D.dEd,D.dEo,D.dEc,D.dEf,D.dEm,D.dEr,D.dEe,D.dEl,D.dEj,D.dEt,D.dEi,D.dEg,D.dEh,D.dEk,D.dEu,D.dEq,D.dEn,D.dEp],B.ax("O<m2>"))
D.das=w([D.AA,A.x1,A.hG,A.bY],x.O)
D.daI=w([D.aej,D.j8],x.O)
D.daS=w(["pdf","docx","txt","md"],x.s)
D.eD6=new B.br(-3,150,34)
D.eD7=new B.br(-3,214,62)
D.eD8=new B.br(-3,288,62)
D.dbG=w([D.eD6,D.eD7,D.eD8],B.ax("O<+(N,N,N)>"))
D.dc9=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dcI=w(["Write","Design","Print & fold"],x.s)
D.jG=new C.uz(2,"triangle")
D.Cx=new C.uz(3,"arrow")
D.fr=new C.uz(4,"line")
D.jH=new C.uz(5,"parallelogram")
D.dcL=w([D.be,D.eK,D.jG,D.Cx,D.fr,D.jH,D.kZ],x.m)
D.eeA=new B.y(240,96)
D.eh8=new B.y(560,46)
D.dcQ=w([D.eeA,D.eh8],x.G)
D.fYy=new C.xq(0,"classic")
D.dA1=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aES,4294570461,4282000405,4284234270)
D.dAd=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aET,4294635750,4281999378,4285213214)
D.dA2=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a4p,4294967035,4279378237,4290283019)
D.dAf=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aF0,4294966515,4281016592,4289102906)
D.dAh=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aEU,4294964964,4282000405,4279983648)
D.dA_=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aEV,4294439140,4279903102,4279903102)
D.dA4=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEW,4294965484,4285218591,4287322667)
D.dA9=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEX,4294244340,4279196764,4279196764)
D.dAb=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEY,4294505710,4279970378,4291058750)
D.fYz=new C.xq(1,"ringsNdoa")
D.dA3=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.ro,4294966259,4279378237,4291404327)
D.fYB=new C.xq(2,"coupleCards")
D.dAe=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.ro,4294966259,4279378237,4291404327)
D.fYC=new C.xq(3,"kuhoweshaForm")
D.dAa=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cr,4294966519,4279378237,4291404327)
D.fYD=new C.xq(4,"mahariPande")
D.dA0=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.ro,4294966259,4279904068,4291404327)
D.fYE=new C.xq(5,"familiaMti")
D.dAg=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEZ,4294966776,4280241466,4291404327)
D.fYF=new C.xq(6,"ndoaSafi")
D.dA7=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cr,4294966519,4279378237,4291404327)
D.fYG=new C.xq(7,"peteWide")
D.dA6=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.ro,4294966259,4282001936,4291404327)
D.fYH=new C.xq(8,"muhuriCrest")
D.dA5=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.ro,4294966259,4279378237,4291404327)
D.fYI=new C.xq(9,"fomuWazi")
D.dA8=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cr,4294966519,4279904068,4291404327)
D.fYA=new C.xq(10,"upendoOrnate")
D.dAc=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aF_,4294965493,4286200650,4291404327)
D.Qk=w([D.dA1,D.dAd,D.dA2,D.dAf,D.dAh,D.dA_,D.dA4,D.dA9,D.dAb,D.dA3,D.dAe,D.dAa,D.dA0,D.dAg,D.dA7,D.dA6,D.dA5,D.dA8,D.dAc],B.ax("O<nC>"))
D.Cv=new C.aqx(0,"landscape169")
D.o7=new C.aqx(1,"portrait916")
D.ddB=w([D.Cv,D.o7],B.ax("O<aqx>"))
D.axA=w([A.hG,A.bK,A.cs,A.iq,A.c],x.O)
D.u4=w([A.bY,A.iv],x.O)
D.edN=new B.y(1000,"M")
D.eif=new B.y(900,"CM")
D.eh3=new B.y(500,"D")
D.efq=new B.y(400,"CD")
D.edO=new B.y(100,"C")
D.eig=new B.y(90,"XC")
D.eh4=new B.y(50,"L")
D.efr=new B.y(40,"XL")
D.edT=new B.y(10,"X")
D.eiq=new B.y(9,"IX")
D.ehj=new B.y(5,"V")
D.egR=new B.y(4,"IV")
D.eeh=new B.y(1,"I")
D.dea=w([D.edN,D.eif,D.eh3,D.efq,D.edO,D.eig,D.eh4,D.efr,D.edT,D.eiq,D.ehj,D.egR,D.eeh],x.ek)
D.eE5=new B.cI(["open",A.jg,"Open & write","Keep writing this book"])
D.eEw=new B.cI(["print",A.tT,"Print as a book","Fold and staple it"])
D.dek=w([D.eE5,D.eEw],B.ax("O<+(n,a_,n,n)>"))
D.df_=w([D.a4x,D.mD,D.HG,D.Rs,D.dd,D.Rr],x.i)
D.evi=new B.y(-1,"Small")
D.edB=new B.y(0,"Normal")
D.eeg=new B.y(1,"Big")
D.eeS=new B.y(2,"Huge")
D.dfu=w([D.evi,D.edB,D.eeg,D.eeS],x.ek)
D.dfU=w([49,65,89,38,83,89],x.t)
D.dg0=w([A.x1,A.hG,A.bY],x.O)
D.dgr=w([D.dd,D.mD,D.ub,D.a4x,D.HG,D.Rs],x.i)
D.aCT=new B.dS([0,D.Lk,8,D.afD,12,D.afE],B.ax("dS<H,a3o>"))
D.e_J={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bhq=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cLw=w([A.bK,D.bhq],x.O)
D.d4x=w([A.b1,A.bj],x.O)
D.d_n=w([A.bZ,A.aS,A.cf],x.O)
D.del=w([A.cq,A.bv],x.O)
D.cTb=w([A.b8,A.fi],x.O)
D.d20=w([A.b7,A.f9],x.O)
D.baO=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d1i=w([D.baO,A.ou],x.O)
D.cWZ=w([A.h1,A.x2],x.O)
D.cT_=w([A.bu,A.cc],x.O)
D.dj2=new B.bk(D.e_J,[D.cLw,H.aoe,D.d4x,D.d_n,D.del,D.cTb,D.d20,D.d1i,D.cWZ,D.cT_],B.ax("bk<n,ai<w>>"))
D.dZS={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3o=new B.bk(D.dZS,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3v=new B.bk(A.i3,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.dne=new F.MB(30,null)
D.dsi=new F.mp("Chapter 1","","","")
D.ddn=w([D.dsi],x.B)
D.dsm=new F.rd("My Book","","",D.ddn,E.aEb)
D.dsk=new F.up("starry",null,null,null,null,"","","")
D.dsn=new F.rd("Dream Big","","",E.a2u,D.dsk)
D.dsl=new F.up("story",null,null,null,null,"","","")
D.dso=new F.rd("Little Lion","","",E.a2u,D.dsl)
D.dsj=new F.up("vintage",null,null,null,null,"","","")
D.dsp=new F.rd("Our Story","","",E.a2u,D.dsj)
D.dvq=new C.Ee("","NGMY","","")
D.dCG=new C.zi("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dUC=new C.b0r(null,null,null,null)
D.dWk=new C.aqC(null)
D.dWx=new C.ar7(0,"smaller")
D.dWy=new C.ar7(1,"bigger")
D.aFv=new C.ar7(2,"fit")
D.e2c=new B.u(3,6)
D.e2m=new B.u(4,8)
D.e5N=new B.D(E.agt,T.abn,null)
D.e5R=new B.D(A.XV,A.lC,null)
D.bFx=new B.ae(A.lk,16,A.c1,null,null,null)
D.e5V=new B.D(A.iU,D.bFx,null)
D.b5p=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e66=new B.D(A.Fj,D.b5p,null)
D.bPN=new B.ae(A.cC,16,A.az,null,null,null)
D.e6a=new B.D(A.ep,D.bPN,null)
D.fiF=new B.x("Play",null,A.ns,null,null,null,null,null,null,null,null,null)
D.d4M=w([U.amJ,A.rC,D.fiF],x.p)
D.eIH=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4M,null)
D.e6d=new B.D(A.nU,D.eIH,null)
D.b5y=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eNY=new B.a7(20,20,D.b5y,null)
D.e6i=new B.D(A.iU,D.eNY,null)
D.frD=new B.x("Seconds per slide",null,A.hq,null,null,null,null,null,null,null,null,null)
D.e6q=new B.D(A.bk,D.frD,null)
D.e7L=new C.a8d(2,"print")
D.e7O=new B.iN(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e9q=new B.h6("/Annot")
D.e9s=new B.h6("/URI")
D.fd4=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ebr=new B.jo("share",48,D.fd4,null,B.ax("jo<n>"))
D.bPH=new B.ae(A.dW,14,A.eA,null,null,null)
D.ebA=new B.cL(null,-2,-2,null,null,null,D.bPH,null)
D.cNu=w([N.adY,A.K],x.O)
D.bVY=new B.a8(A.a3,A.a7,A.x,D.cNu,null,null)
D.aZh=new B.o(null,null,null,null,null,D.bVY,A.n)
D.bme=new B.kN(D.aZh,A.bd,null,null)
D.ebM=new B.cL(0,0,null,0,8,null,D.bme,null)
D.d94=w([A.hU,A.mf,A.ci],x.O)
D.ecq=new B.bT(A.A,0.5,A.x,null,0,D.d94,null,null)
D.eeL=new B.y(0.22,A.bj)
D.eiL=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ekN=new B.y(0.5,A.hi)
D.etS=new B.y(0.78,A.aV)
D.eDW=new B.cI([A.bt,0.22,0.7,2.6])
D.eE1=new B.cI([A.b8,0.36,1.2,1.3])
D.eE7=new B.cI([A.dP,0.28,0.2,0.4])
D.eEd=new B.cI([A.cy,0.05,0.3,0.35])
D.eEj=new B.cI([A.bu,0.28,0.9,0])
D.eEr=new B.cI([A.aE,-0.25,-0.15,0.45])
D.eFh=new B.cI([A.bZ,0.42,1,4.1])
D.eIp=new B.a9a(9)
D.bGD=new B.ae(A.Gc,28,A.cf,null,null,null)
D.fsa=new B.x("NGMY News",null,A.dl,null,null,null,null,null,null,null,null,null)
D.bw_=new B.bD(1,A.bh,D.fsa,null)
D.dcc=w([D.bGD,A.av,D.bw_],x.p)
D.eIB=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dcc,null)
D.bGO=new B.ae(A.nY,16,A.c,null,null,null)
D.ftF=new B.x("Book",null,A.of,null,null,null,null,null,null,null,null,null)
D.dg_=w([D.bGO,A.ec,D.ftF],x.p)
D.eIJ=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dg_,null)
D.bNg=new B.ae(A.jh,10,A.c,null,null,null)
D.fgN=new B.x("Pro",null,A.nq,null,null,null,null,null,null,null,null,null)
D.d4R=w([D.bNg,A.qd,D.fgN],x.p)
D.eIN=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4R,null)
D.frC=new B.x("Make a newspaper",null,Au.Ts,null,null,null,null,null,null,null,null,null)
D.bX8=w([E.a0t,A.ab,D.frC],x.p)
D.eIO=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bX8,null)
D.bLP=new B.ae(A.lh,18,A.bK,null,null,null)
D.fiT=new B.x("Ending celebration",null,A.i5,null,null,null,null,null,null,null,null,null)
D.dbh=w([D.bLP,A.bp,D.fiT],x.p)
D.eIR=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dbh,null)
D.bN2=new B.ae(A.jg,18,A.jS,null,null,null)
D.eYB=new B.G(!0,A.jS,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftW=new B.x("Write",null,D.eYB,null,null,null,null,null,null,null,null,null)
D.cVa=w([D.bN2,A.ab,D.ftW],x.p)
D.eIW=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cVa,null)
D.fgL=new B.x("Download picture",null,A.p5,null,null,null,null,null,null,null,null,null)
D.by3=new B.qf(A.eh,A.A,A.f,D.fgL,null)
D.bye=new B.dq(1,A.cn,D.by3,null)
D.d5d=w([K.amz,A.ab,D.bye],x.p)
D.eIX=new B.cn(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d5d,null)
D.bIB=new B.ae(A.Gc,22,A.cf,null,null,null)
D.fqh=new B.x("NGMY NEWS",null,H.a76,null,null,null,null,null,null,null,null,null)
D.cMW=w([D.bIB,A.ab,D.fqh],x.p)
D.eJ4=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cMW,null)
D.eJg=new B.p4(!1,!1,null,T.Vm,null,A.bX,null,null,null)
D.a6b=new B.jh([D.cm,D.dd,D.ub,D.HF,D.uc,D.aFl],B.ax("jh<hx>"))
D.e10={title:0,quote:1,closing:2,bio:3}
D.eKo=new B.eM(D.e10,4,x.M)
D.e_a={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eKq=new B.eM(D.e_a,5,x.M)
D.e0w={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6c=new B.eM(D.e0w,8,x.M)
D.e_R={Design:0,Transitions:1,Insert:2}
D.eKu=new B.eM(D.e_R,3,x.M)
D.fYQ=new B.jh([D.a4y],B.ax("jh<vQ>"))
D.e0_={float3d:0,drift:1,pulse:2}
D.eKx=new B.eM(D.e0_,3,x.M)
D.aMB=new B.jh([D.HC,D.HD,D.HE],B.ax("jh<mt>"))
D.e_7={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aME=new B.eM(D.e_7,14,x.M)
D.fYR=new B.eM(A.i3,0,B.ax("eM<vQ>"))
D.e_X={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sw=new B.eM(D.e_X,4,x.M)
D.e__={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aMH=new B.eM(D.e__,30,x.M)
D.e04={circle:0,triangle:1,hexagon:2,diamond:3}
D.eKN=new B.eM(D.e04,4,x.M)
D.eMX=new B.ar(390,844)
D.eNI=new B.a7(20,20,A6.Kc,null)
D.aNs=new B.a7(null,2.5,null,null)
D.eNS=new B.a7(18,18,A6.Kc,null)
D.bN6=new B.ae(A.iY,19,A.c,null,null,null)
D.eO2=new B.a7(38,38,D.bN6,null)
D.bLo=new B.ae(A.yn,22,A.c,null,null,null)
D.eO4=new B.a7(40,40,D.bLo,null)
D.eOD=new B.hK(2,10,10,1.15,null)
D.aNA=new B.hK(2,16,14,0.62,null)
D.bu2=new B.Q(32,30,32,40)
D.b6P=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bGA=new B.ae(A.pO,56,D.b6P,null,null,null)
D.aeQ=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f_y=new B.G(!0,D.aeQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new B.x("Your books will live here.",null,D.f_y,null,A.L,null,null,null,null,null,null,null)
D.cXT=w([D.bGA,A.S,D.fnl],x.p)
D.ble=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cXT,null)
D.e6o=new B.D(D.bu2,D.ble,null)
D.eOY=new B.m5(D.e6o,null)
D.fni=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ePf=new B.b1(D.fni,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.flr=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ePg=new B.b1(D.flr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqk=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new B.b1(D.fqk,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqQ=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ePE=new B.b1(D.fqQ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fk5=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ePR=new B.b1(D.fk5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxN=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new B.b1(D.fxN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuZ=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eQk=new B.b1(D.fuZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqY=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eR0=new B.b1(D.fqY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ff5=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRg=new B.b1(D.ff5,null,null,null,null,null,null,null,A.il,null,null,null,null,A.pE,!1,null,null,null,A.r,null)
D.fgT=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new B.b1(D.fgT,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fn_=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new B.b1(D.fn_,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmG=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eRB=new B.b1(D.fmG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsZ=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new B.b1(D.fsZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbh=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new B.b1(D.fbh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fi0=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eS7=new B.b1(D.fi0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwy=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eS9=new B.b1(D.fwy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fw5=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eSd=new B.b1(D.fw5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fah=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eSf=new B.b1(D.fah,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fs5=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eSo=new B.b1(D.fs5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvH=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new B.b1(D.fvH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvy=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eSF=new B.b1(D.fvy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fa9=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eSL=new B.b1(D.fa9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fe6=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new B.b1(D.fe6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuM=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTn=new B.b1(D.fuM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdV=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eTC=new B.b1(D.fdV,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bdB=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cLK=w([A.iq,A.ou,D.bdB,D.abO,A.iq],x.O)
D.eU_=new B.fS(A.A,0,6.283185307179586,A.x,D.cLK,null,null)
D.cUn=w([A.bK,A.bY,A.hG,D.AA,A.bK],x.O)
D.aO9=new B.fS(A.A,0,6.283185307179586,A.x,D.cUn,null,null)
D.d6T=w([A.bZ,A.bt,A.b8,A.b2,A.cf,A.bZ],x.O)
D.eU4=new B.fS(A.A,0,6.283185307179586,A.x,D.d6T,null,null)
D.cNI=w([A.pC,A.ov,A.Ao,A.iq,A.pC],x.O)
D.eU5=new B.fS(A.A,0,6.283185307179586,A.x,D.cNI,null,null)
D.d6N=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eU6=new B.fS(A.A,0,6.283185307179586,A.x,D.d6N,null,null)
D.de1=w([A.bu,A.b8,A.bt,A.bZ,A.bu],x.O)
D.eU8=new B.fS(A.A,0,6.283185307179586,A.x,D.de1,null,null)
D.bdT=new B.w(1,0,1,1,A.t)
D.b81=new B.w(1,1,0,1,A.t)
D.dak=w([A.Ec,A.adG,H.acB,D.bdT,H.ad_,D.b81,A.Ec],x.O)
D.eU9=new B.fS(A.A,0,6.283185307179586,A.x,D.dak,null,null)
D.eUo=new C.av9(2,"immersiveSticky")
D.eUp=new C.av9(3,"edgeToEdge")
D.eUq=new C.av9(4,"manual")
D.eWQ=new B.G(!0,A.oq,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOG=new B.G(!0,A.f3,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXo=new B.G(!0,E.n_,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new B.G(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZQ=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f__=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_k=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0H=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new B.G(!0,A.jb,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f13=new B.rx(!0,A.HY,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1y=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2a=new B.G(!0,A.ja,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2y=new B.G(!0,A.az,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e7R=new B.iN(1,1,0.7568627450980392,0.027450980392156862)
D.f2C=new B.rx(!0,D.e7R,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adN=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPn=new B.G(!0,D.adN,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2K=new B.G(!0,D.aeQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2L=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPp=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new B.rx(!0,A.oZ,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3E=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tm=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4a=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4c=new B.G(!0,D.adN,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IW=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4F=new B.G(!0,A.bY,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4N=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4Q=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f56=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avp,null,null,null)
D.f58=new B.G(!0,A.cd,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f65=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6s=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ1=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ3=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.biY=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f8a=new B.G(!0,D.biY,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQb=new B.G(!0,E.n_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8F=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8I=new B.G(!0,O.lc,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new B.x("NEW",null,D.f1M,null,null,null,null,null,null,null,null,null)
D.fac=new B.x("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.faE=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.faY=new B.x("Scrollable PDF on this slide",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fbH=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fbK=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fbV=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fcm=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fco=new B.x("How many slides?",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fcW=new B.x("Transfer",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eYE=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdh=new B.x("Luxury FX",null,D.eYE,null,null,null,null,null,null,null,null,null)
D.fdF=new B.x("Font",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fdQ=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fdW=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f7J=new B.G(!0,A.bJ,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe3=new B.x("Example  GA847",null,D.f7J,null,null,null,null,null,null,null,null,null)
D.fet=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.feC=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.feG=new B.x("Non-stop (loop)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.feU=new B.x("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ffc=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.ffC=new B.x("Add your picture",null,A.kz,null,null,null,null,null,null,null,null,null)
D.f14=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffD=new B.x("Enter document code",null,D.f14,null,A.L,null,null,null,null,null,null,null)
D.ffE=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.ffJ=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eZG=new B.G(!0,E.n_,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new B.x("Delete this book?",null,D.eZG,null,A.L,null,null,null,null,null,null,null)
D.f3d=new B.G(!0,E.n_,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new B.x("Your library",null,D.f3d,null,null,null,null,null,null,null,null,null)
D.fh_=new B.x("Delete",null,A.aPh,null,null,null,null,null,null,null,null,null)
D.fh1=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Dc,null,null,null,null,null,null,null,null,null)
D.fhc=new B.x("Element flies in",null,A.aPt,null,null,null,null,null,null,null,null,null)
D.TC=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new B.x("Cancel",null,E.aPE,null,null,null,null,null,null,null,null,null)
D.fi_=new B.x("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f6A=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiq=new B.x("DOCUMENT CODE",null,D.f6A,null,null,null,null,null,null,null,null,null)
D.fje=new B.x("Quotes",null,G.a7J,null,null,null,null,null,null,null,null,null)
D.f0u=new B.G(!0,O.lc,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new B.x("Add a picture",null,D.f0u,null,null,null,null,null,null,null,null,null)
D.fju=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7p,null,A.L,null,null,null,null,null,null,null)
D.fjy=new B.x("Look & feel",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fjD=new B.x("Rings",null,A.i5,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.x("W",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fjT=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fkb=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IV,null,A.L,null,null,null,null,null,null,null)
D.fkd=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.x("Add page",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fld=new B.x("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f0U=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fls=new B.x("Create with AI",null,D.f0U,null,A.L,null,null,null,null,null,null,null)
D.flV=new B.x("Apply look",null,A.i5,null,null,null,null,null,null,null,null,null)
D.f1D=new B.G(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmI=new B.x("Type your presentation below",null,D.f1D,null,A.L,null,null,null,null,null,null,null)
D.fmL=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aQe,null,A.L,null,null,null,null,null,null,null)
D.fmN=new B.x("Keep it",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eXF=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmU=new B.x("Done",null,D.eXF,null,null,null,null,null,null,null,null,null)
D.fne=new B.x("Delete",null,A.nr,null,null,null,null,null,null,null,null,null)
D.fnn=new B.x("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f_Q=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fof=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f_Q,null,A.L,null,null,null,null,null,null,null)
D.foC=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.foI=new B.x("Layout",null,A.Tu,null,null,null,null,null,null,null,null,null)
D.fpk=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fpp=new B.x("X",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fpZ=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.IS,null,null,null,null,null,null,null,null,null)
D.fqw=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fqI=new B.x("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fqK=new B.x("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fqM=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fqS=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fr3=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fra=new B.x("Done",null,A.aQ0,null,null,null,null,null,null,null,null,null)
D.frk=new B.x("Ending celebration",null,A.dl,null,null,null,null,null,null,null,null,null)
D.frl=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.frA=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IM,null,null,null,null,null,null,null,null,null)
D.fsw=new B.x("Export presentation",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fsx=new B.x("What would you like to do?",null,D.aPn,null,null,null,null,null,null,null,null,null)
D.fsB=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.ft6=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fta=new B.x("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ftn=new B.x("Done",null,A.l3,null,null,null,null,null,null,null,null,null)
D.f7z=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fts=new B.x("Delete presentation?",null,D.f7z,null,A.L,null,null,null,null,null,null,null)
D.ftJ=new B.x("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ftU=new B.x("\ud83c\udf33",null,A.IQ,null,A.L,null,null,null,null,null,null,null)
D.fub=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fui=new B.x("Transfer document",null,A.p7,null,null,null,null,null,null,null,null,null)
D.fut=new B.x("Add to the slides",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fuQ=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fv4=new B.x("Make a book",null,I.aOX,null,null,null,null,null,null,null,null,null)
D.fv8=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.f0n=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv9=new B.x("Keep this page open until it finishes.",null,D.f0n,null,null,null,null,null,null,null,null,null)
D.fvc=new B.x("Making your video",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fvh=new B.x("LANGUAGE",null,D.Tm,null,null,null,null,null,null,null,null,null)
D.fvo=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fvw=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fvx=new B.x("Upload a different logo",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fvN=new B.x("Delete from the database?",null,A.kz,null,null,null,null,null,null,null,null,null)
D.fvO=new B.x("H",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fwb=new B.x("NGMY Quotes",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fwD=new B.x("Cover",null,D.aQb,null,null,null,null,null,null,null,null,null)
D.fwH=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new B.x("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fx4=new B.x("Y",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fxf=new B.x("Crop the picture",null,A.l3,null,null,null,null,null,null,null,null,null)
D.fxl=new B.x("Edit text",null,A.IR,null,null,null,null,null,null,null,null,null)
D.fzz=B.dR("a8_")
D.Dp=new C.aws(0,"none")
D.aT8=new C.aws(1,"zipCrypto")
D.aT9=new C.aws(2,"aes")
D.fNX=new F.P5("","",null)
D.fP2=new C.bbE(null)
D.fQ9=new C.Zc(null)
D.fRI=new C.acU(null)
D.fRK=new C.aDE(null)
D.fUv=new C.a_r(null)
D.fUM=new C.a_Y(null)
D.fV4=new C.btf(null)})();(function staticFields(){$.hbx=null
$.hby=null
$.hbz=null
$.hbA=null
$.fUC=B.uZ("_lastQuoRemDigits")
$.fUD=B.uZ("_lastQuoRemUsed")
$.awO=B.uZ("_lastRemUsed")
$.fUE=B.uZ("_lastRem_nsh")
$.q1=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6P=B.T(x.N,x.I)
$.fS6=!1
$.hgk=B.T(B.ax("kQ"),x.N)
$.hgx=B.T(B.ax("kQ"),x.E)
$.hex=!1
$.byT="q"
$.Q2=0
$.Co=B.T(x.N,B.ax("ai<zk>"))
$.heU=!1
$.fWc=!1
$.hl9=null
$.hPk=B.T(x.N,B.ax("az<n?>"))
$.K6=""
$.iZ=0
$.h8i=function(){var w=x.N
return B.T(w,w)}()
$.h8h=B.T(x.N,x.R)
$.fWx=!1
$.afC=B.T(x.N,x.E)
$.fXk=0
$.bjJ=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idu","CK",()=>C.b99(0))
w($,"ids","a2c",()=>C.b99(1))
w($,"idt","hoL",()=>C.b99(2))
w($,"idr","h07",()=>$.a2c().uU(0))
w($,"idp","hoJ",()=>C.b99(1e4))
w($,"idq","hoK",()=>B.DX(8))
w($,"i9h","hmM",()=>B.DX(0))
w($,"i9p","hmQ",()=>B.DX(0))
w($,"i9o","hmP",()=>B.bXA(0))
w($,"ih9","hqL",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3o.gdK(D.a3o),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"ihA","bDp",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mR(new C.fD2(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mR(new C.fD3(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fD4(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mR(new C.fDf(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mR(new C.fDk(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fDl(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mR(new C.fDm(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mR(new C.fDn(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mR(new C.fDo(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fDp(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mR(new C.fDq(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mR(new C.fD5(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mR(new C.fD6(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mR(new C.fD7(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fD8(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mR(new C.fD9(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mR(new C.fDa(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mR(new C.fDb(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mR(new C.fDc(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mR(new C.fDd(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mR(new C.fDe(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mR(new C.fDg(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mR(new C.fDh(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mR(new C.fDi(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mR(new C.fDj(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<En>"))})
w($,"ihc","hqN",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["VCD8nTW0UtUQlP64dT5ONTw0GgA="]=a.current})($__dart_deferred_initializers__);