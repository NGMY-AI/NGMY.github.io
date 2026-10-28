((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tH(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fUS(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jp(d){var w
if(d===0)return $.CL()
if(d===1)return $.a2f()
if(d===2)return $.hp3()
if(Math.abs(d)<4294967296)return C.b9c(A.o.N(d))
w=C.hJI(d)
return w},
b9c(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tH(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tH(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tH(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajt(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tH(v,w)
return new C.nP(v===0?!1:s,w,v)},
hJI(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CL()
w=$.hp2()
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
if(s<0)p=q.mp(0,-s)
else p=s>0?q.dV(0,s):q
return p},
fUT(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hbS(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fF(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hbN(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fUT(d,e,s,g)
w=e+s+1
C.hbS(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hJL(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fF(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fF(u,r)}w&2&&B.aj(g)
g[n]=o},
cE1(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hJJ(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9d(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hbT(d,e,f,g,h,i){var w,v,u,t,s,r
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
hJK(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e8((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cE2:function cE2(){},
cE3:function cE3(){},
cE4:function cE4(d,e){this.a=d
this.b=e},
cE5:function cE5(d){this.a=d},
aQI:function aQI(d,e){this.a=d
this.b=e},
h1M(d,e,f){var w=new C.Rq(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rq:function Rq(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3r:function a3r(d,e){this.a=d
this.b=e},
bGY:function bGY(d){this.a=d
this.c=this.b=0},
hsg(){return new C.bFk()},
bFk:function bFk(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwc:function cwc(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hJq(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcV5(d)))
v=f*2+2
u=C.h9u(C.h9w(),64)
t=new C.cg4(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cg5(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cIx(w,0,s,0))},
cwa:function cwa(d,e){this.c=d
this.d=e},
awx:function awx(d,e){this.a=d
this.b=e},
cwd:function cwd(d,e,f,g){var _=this
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
b7U:function b7U(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwb:function cwb(){this.a=$},
hbh(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hs_(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDV:function bDV(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h_v(d,e){e&=31
return(d&$.q3[e])<<e>>>0},
nn(d,e){e&=31
return(d>>>e|C.h_v(d,32-e))>>>0},
h9v(d){var w,v=new C.asf()
if(B.iH(d))v.aJj(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h9w(){var w=C.h9v(0),v=new Uint8Array(4),u=x.S
u=new C.cg6(w,v,A.DQ,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.ly(0)
return u},
h9u(d,e){var w=new C.cg2(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cg1:function cg1(){},
cg5:function cg5(d,e,f){this.a=d
this.b=e
this.c=f},
cg_:function cg_(){},
ase:function ase(d){this.a=d},
cg4:function cg4(d){this.a=$
this.b=d
this.c=$},
cg0:function cg0(){},
cfZ:function cfZ(){},
asf:function asf(){this.b=this.a=$},
cg3:function cg3(){},
cg6:function cg6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cg2:function cg2(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cfY:function cfY(){},
cfX:function cfX(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bN8:function bN8(){},
bN9:function bN9(d){this.a=d},
hMF(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9s:function b9s(){},
cq3:function cq3(){},
bO1:function bO1(d,e){this.a=d
this.b=!1
this.c=e},
bO2:function bO2(){},
hVy(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avb(d){var w=0,v=B.j(x.H),u
var $async$avb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eV5?2:4
break
case 2:w=5
return B.b(A.k4.fX("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avb)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k4.fX("SystemChrome.setEnabledSystemUIOverlays",C.hVy(null),u),$async$avb)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avb,v)},
ave:function ave(d,e){this.a=d
this.b=e},
a82:function a82(d){this.a=d},
fQP(d,e){return new C.aVa(e,d,null)},
aVa:function aVa(d,e,f){this.e=d
this.c=e
this.a=f},
aA5:function aA5(d,e,f,g,h){var _=this
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
hYa(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fqK(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fqK:function fqK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an4(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agx("ngmy_menu_lib_v1_zzslides_index",A.bH),$async$an4)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cF(t,new C.bYG(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bYH())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an4,v)},
an6(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$an6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an4(),$async$an6)
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
return B.b(B.nm("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$an6)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$an6)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an6,v)},
bYI(d){return C.hxH(d)},
hxH(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agx("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hK),$async$bYI)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vy(B.a2(q,x.N,x.z))
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
return B.i($async$bYI,v)},
an5(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an4(),$async$an5)
case 3:r=f
if(r==null){u=!1
w=1
break}J.no(r,new C.bYJ(d))
w=4
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$an5)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOK("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$an5)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an5,v)},
bYG:function bYG(){},
bYH:function bYH(){},
bYJ:function bYJ(d){this.a=d},
i76(d,e,f){return B.bR(A.K,null,new C.fGH(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fGH:function fGH(d,e,f){this.a=d
this.b=e
this.c=f},
a0s:function a0s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIu:function aIu(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4I:function f4I(d){this.a=d},
f4J:function f4J(d){this.a=d},
f4K:function f4K(d,e,f){this.a=d
this.b=e
this.c=f},
f4F:function f4F(d){this.a=d},
f4G:function f4G(d){this.a=d},
f4H:function f4H(d,e){this.a=d
this.b=e},
f4z:function f4z(d){this.a=d},
f4x:function f4x(d){this.a=d},
f4y:function f4y(d){this.a=d},
f4A:function f4A(d){this.a=d},
f4B:function f4B(d){this.a=d},
f4O:function f4O(d,e){this.a=d
this.b=e},
f4N:function f4N(d,e){this.a=d
this.b=e},
f4D:function f4D(d,e,f){this.a=d
this.b=e
this.c=f},
f4C:function f4C(d,e,f){this.a=d
this.b=e
this.c=f},
f4L:function f4L(d,e){this.a=d
this.b=e},
f4M:function f4M(d,e){this.a=d
this.b=e},
f4R:function f4R(d){this.a=d},
f4S:function f4S(d,e){this.a=d
this.b=e},
f4Q:function f4Q(d,e){this.a=d
this.b=e},
f4P:function f4P(){},
heh(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cF(v,new C.fbU(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a1<J.E>")
v=B.C(new B.a1(v,new C.fbV(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1r(d){return C.hZq(d)},
hZq(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1r=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.ftm(n)
t=4
j=m
i=C
w=7
return B.b(B.a20("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1r)
case 7:j.$1(i.heh(f))
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
return B.b(B.aA(),$async$a1r)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.heh(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fc2(d),$async$a1r)
case 13:p=j.C(new i.a1(h,new g.ftk(f),o),o.k("J.E"))
A.d.b0(p,new C.ftl())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1r,v)},
ah7(d,e){return C.i6M(d,e)},
i6M(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah7=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fGb(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agZ("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah7)
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
return B.b(B.aA(),$async$ah7)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah7)
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
return B.i($async$ah7,v)},
fc2(d){return C.hO4(d)},
hO4(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fc2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fc2)
case 7:r=f
q=r.t5("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$fc2,v)},
afX(d,e){return C.hY2(d,e)},
hY2(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afX=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afX)
case 6:s=g
r=B.aX(x.N)
q=s.t5("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$afX)
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
return B.b(C.a1r(d),$async$afX)
case 8:n=g
J.no(n,new C.fqq(e))
w=9
return B.b(C.ah7(d,n),$async$afX)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afX,v)},
i7b(d,e){return B.a5(d,!1).c8(B.ea(new C.fH2(e),!0,null,x.H))},
hJN(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFo())},
of:function of(d,e,f){this.a=d
this.b=e
this.c=f},
fbU:function fbU(){},
fbV:function fbV(){},
ftm:function ftm(d){this.a=d},
ftk:function ftk(d){this.a=d},
ftl:function ftl(){},
fGb:function fGb(){},
fqq:function fqq(d){this.a=d},
fH2:function fH2(d){this.a=d},
Yc:function Yc(d,e){this.c=d
this.a=e},
ax4:function ax4(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFo:function cFo(){},
cFq:function cFq(d,e){this.a=d
this.b=e},
cFt:function cFt(d){this.a=d},
cFu:function cFu(d){this.a=d},
cFs:function cFs(){},
cFv:function cFv(d,e){this.a=d
this.b=e},
cFr:function cFr(d){this.a=d},
cFw:function cFw(){},
cFp:function cFp(d,e){this.a=d
this.b=e},
cFx:function cFx(){},
cFk:function cFk(d){this.a=d},
cFi:function cFi(d){this.a=d},
cFj:function cFj(d){this.a=d},
cFl:function cFl(d,e){this.a=d
this.b=e},
cFh:function cFh(d){this.a=d},
cFg:function cFg(d){this.a=d},
cFe:function cFe(d,e){this.a=d
this.b=e},
cFf:function cFf(d){this.a=d},
cFn:function cFn(){},
cFm:function cFm(d){this.a=d},
cFd:function cFd(d,e){this.a=d
this.b=e},
cFc:function cFc(d,e){this.a=d
this.b=e},
cFb:function cFb(d,e){this.a=d
this.b=e},
cFy:function cFy(d){this.a=d},
Ya:function Ya(d,e,f){this.c=d
this.d=e
this.a=f},
aEm:function aEm(d,e,f){this.a=d
this.b=e
this.c=f},
ax0:function ax0(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cEF:function cEF(d){this.a=d},
cEE:function cEE(d){this.a=d},
cEH:function cEH(d,e,f){this.a=d
this.b=e
this.c=f},
cEP:function cEP(){},
cEQ:function cEQ(d){this.a=d},
cEI:function cEI(d,e,f){this.a=d
this.b=e
this.c=f},
cEG:function cEG(d,e){this.a=d
this.b=e},
cEK:function cEK(d,e){this.a=d
this.b=e},
cEL:function cEL(d,e){this.a=d
this.b=e},
cEM:function cEM(d,e){this.a=d
this.b=e},
cEJ:function cEJ(d){this.a=d},
cEO:function cEO(d){this.a=d},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEV:function cEV(d){this.a=d},
cER:function cER(d,e){this.a=d
this.b=e},
cES:function cES(d,e){this.a=d
this.b=e},
cET:function cET(d,e){this.a=d
this.b=e},
cEU:function cEU(d,e){this.a=d
this.b=e},
ax2:function ax2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i0L(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bB(new C.fxT(),x.H).eU(new C.fxU())}}else if(s)C.hfK()}catch(t){}},
hfK(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eU(new C.fgi())}catch(u){}},
i0O(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fxT:function fxT(){},
fxU:function fxU(){},
fgi:function fgi(){},
hkk(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ee(v,w,"").split(":"))},
hkh(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kY)return null
return A.a.b1(w,14)},
fZd(d){var w
if(d.b!==D.kY)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b1(w,21)},
i1d(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hkl(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i18(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kV(0,f)
t=x.N
u=B.cF(u,new C.fyS(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kV(0,f),u=new B.Jo(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.R7(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.R7(A.a.b1(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i16(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fyR())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPI(w,u,s,0)}return w},
i1a(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3p:$.hr3(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hki(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcW(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hkk(q)===e)return q}return null},
i1b(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b1(v,u)
return A.d.gJ(D.Gq).a},
i1c(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adQ(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adQ(0,0,0)
v=C.fcW(b6,b0)
u=C.fcW(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i1a(b2,C.i18(C.hki(b2),v.r))
if(s.a!==0){u.r=C.i16(C.hki(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hkk(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.e9(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcW(b6,n)
i=C.fcW(b5,n)
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
a0=C.fZd(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hkh(a8)===a0||C.fZd(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QB(a1,new C.fyY(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j_
$.j_=a9+1
A.d.L(a1,new C.eJ(""+1000*a6+"_"+a9,D.kY,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adQ(k,t,e)},
i17(d){var w=C.i1b(d)
if(d.w==="hati_kuhowa")return C.hjF("",w)
return C.hjE("",w)},
fyS:function fyS(){},
fyR:function fyR(){},
fyY:function fyY(d){this.a=d},
hft(){var w=new B.S(Date.now(),0,!1),v=new C.ffl()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
fZl(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fzQ(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kY&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hky(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fzQ(d)
w=B.bi(u)
if(w==null)return!C.fzQ(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bQ(18e9))},
i1T(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hBI(d){return A.a.i(d).toLowerCase()},
apf(d){return C.hBK(d)},
hBK(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$apf)
case 7:r=f
p=r.t5("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i5q(),B.U(o).k("K<1,n>")).c_(0,new C.c8f())
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
return B.i($async$apf,v)},
ape(d,e){return C.hBJ(d,e)},
hBJ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ape=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apf(d),$async$ape)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$ape)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qc(r)),$async$ape)
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
return B.i($async$ape,v)},
apg(d,e){return C.hBL(d,e)},
hBL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apf(d),$async$apg)
case 3:r=g
if(!J.hE(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apg)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qc(r)),$async$apg)
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
return B.i($async$apg,v)},
UR(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UR=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fSj&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UR)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jx(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vy(B.a2(f.a(n.b),e,a0)))}$.a6S=o}}t=2
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
return B.b(B.c3(),$async$UR)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tU("civic_hati_kiapo_uongozi",null,A.ee),$async$UR)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jx(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vy(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6S.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6S.n(0,i.a,i.b)}w=20
return B.b(C.aph(),$async$UR)
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
case 16:case 9:$.fSj=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UR,v)},
aph(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aph=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aph)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6S,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aph)
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
return B.i($async$aph,v)},
aZB(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UR(!1),$async$aZB)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6S.h(0,t)
r=s==null?null:s.hC()
if(r==null){u=null
w=1
break}u=C.bBs(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZB,v)},
a6T(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6T=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6S.n(0,d,o)
$.fSj=!0
w=3
return B.b(C.aph(),$async$a6T)
case 3:w=4
return B.b(B.c3(),$async$a6T)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6S,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.nm("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6T)
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
return B.i($async$a6T,v)},
api(d){var w=0,v=B.j(x.T),u,t,s
var $async$api=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a57(A.eG),$async$api)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$api)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZA(t,d),$async$api)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$api,v)},
aZA(d,e){return C.hBM(d,e)},
hBM(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZA)
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
return B.b(p.wR(q,new Uint8Array(B.ce(d)),D.byb),$async$aZA)
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
return B.i($async$aZA,v)},
Kg(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
feB(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
fWm(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
fe9(d,e,f,g){return C.feB(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fWn(d,e,f,g,h,i,j,k){var w=C.cC()
return C.ep(A.qj,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hfs(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ee(v,w,"").split(":"))},
bBs(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hfs(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kY&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fYS(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bs(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gJ(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hfs(m)
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
A.d.bn(a1.z,new C.fxR(a2))}else A.d.bn(a1.z,new C.fxS())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fzQ(a0))a0.ax=a6.f.a6().ac()
return a0},
fYS(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fAD(D.a4q),l=C.cC(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lr,1,0,0)],k),i=B.a([],k)
i.push(C.Kg("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kg("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fWm("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hft()))
i.push(C.fe9(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kg("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kg("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.feB(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fWn("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fWn("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fWn("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.feB(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kg("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lr,0.77,0.115,0.492))
i.push(C.Kg("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kg("Jina:",A.bg,p,13,A.bl,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fWm("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fe9(0.195,0.7130000000000001,0.62,n))
i.push(C.Kg("Sahihi:",A.bg,p,13,A.bl,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.fe9(0.21500000000000002,0.795,0.38,n))
i.push(C.Kg("Tarehe:",A.bg,p,13,A.bl,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fWm("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hft()))
i.push(C.fe9(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.feB(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.Kg("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rp(4294967035,t,0,0,j,l,D.q8,"","",u,D.dd)
return C.Bs(t,t,t,t,D.o9,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.S(D.ePV)
w=1
break}w=3
return B.b(C.UR(!0),$async$ag7)
case 3:w=4
return B.b(C.aZB(p),$async$ag7)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hky(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bch,null,new C.fsI(p),f,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag7)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fsJ(),f,null,!0,!0,x.y),$async$ag7)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fYS(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fYS(p))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
ffl:function ffl(){},
c8f:function c8f(){},
fxR:function fxR(d){this.a=d},
fxS:function fxS(){},
fsI:function fsI(d){this.a=d},
fsG:function fsG(d){this.a=d},
fsH:function fsH(d){this.a=d},
fsJ:function fsJ(){},
fsE:function fsE(d){this.a=d},
fsF:function fsF(d){this.a=d},
apN:function apN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD8:function aD8(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e7Z:function e7Z(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e8_:function e8_(d){this.a=d},
e80:function e80(d){this.a=d},
wp(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hf6(d,e,f){var w=4291404327
return B.a([C.q2(0,f,D.eK,w,2,"ring_l",f,d-f*0.42,e),C.q2(0,f,D.eK,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fdA(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q2(4294967288,f,D.eK,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q2(h,s,D.eK,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q2(h,f*0.46,D.eK,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q2(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
fdz(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byS(d,e,f,g){return C.q2(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hf5(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q2(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wp(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hkj(){var w=new B.S(Date.now(),0,!1),v=new C.fyX()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hf7(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wp(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fdz("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byS(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wp("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,s,t,g-0.004),C.byS(t,g+0.044,s,w)],x.u)},
agz(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.daq,D.cgp,D.d3j,D.d57],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fVF(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fAD(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,1,0,0)],x.u)
A.d.v(v,C.hQu(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hQu(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wp("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hf6(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hf6(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fdA(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fdA(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wp("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q2(0,0.062,D.eK,b1,1.6,"crest_o",0.11,0.445,0.012),C.q2(0,0.046,D.eK,b1,1,"crest_i",0.084,0.458,0.02),C.wp("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q2(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q2(b9,0.016,D.kZ,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q2(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wp("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fdz("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hkj()),C.byS(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wp(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q2(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q2(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q2(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hf5(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wp(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fdz("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j_
$.j_=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j_
$.j_=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eJ(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eJ(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j_
$.j_=p+1
i=Date.now()
h=$.j_
$.j_=h+1
g=Date.now()
f=$.j_
$.j_=f+1
e=Date.now()
a3=$.j_
$.j_=a3+1
A.d.v(d,B.a([new C.eJ(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dM,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hf5("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4f||w===D.a4h||w===D.a4e||w===D.a4g){w=t-0.008
A.d.v(c2,C.fdA(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fdA(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q2(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.q2(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q2(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wp("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wp("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hf7("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hf7("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q2(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wp("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wp("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fdz("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byS(0.215,p,0.3116,b5),C.wp("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,0.3161999999999999,0.5738,s-0.044),C.byS(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q2(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wp("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i19(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fZv(d.d),p=new C.fyT(s),o=new C.fyU(s),n=d.z,m=n===D.a4f||n===D.a4h||n===D.a4e||n===D.a4g,l=n===D.aEx||n===D.a4i||n===D.aEy,k=B.bZ(0,B.fL(q,A.A,t,t,A.cj,A.bS,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4i?26:16
i.push(new C.fyW().$1$size(w))}if(n===D.aEz)i.push(D.fuz)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hC,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNA,p.$1$w(0.9),D.aNA,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b7P,t,n,w,t,t,A.n),t,t,t,t,A.aid,t,t,t))
i.push(A.am)
i.push(new C.fyV(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LJ,new B.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bD(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.agO,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hjE(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agz(e,t)
if(r==null)r=A.d.gJ(D.Gq)
w=C.cC()
v=C.rp(r.e,t,0,0,C.fVF(r,0.165,y.O,D.d5H,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q8,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bs(t,t,t,t,D.o9,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hjF(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agz(e,t)
if(r==null)r=A.d.gJ(D.Gq)
w=C.cC()
v=C.rp(r.e,t,0,0,C.fVF(r,0.165,y.f,D.d1u,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q8,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bs(t,t,t,t,D.o9,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCO(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fKu(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCO,v)},
ag8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.fsM(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsN(p),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCO(d,"Hati ya Kuhowa",D.Gq),$async$ag8)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KU(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$ag8)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hjE(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
ag9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.fsQ(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsR(p),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$ag9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCO(d,"Hati ya Kuhoweya",D.Gq),$async$ag9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KU(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$ag9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hjF(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
aga(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aga=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a1<1>")
m=B.C(new B.a1(i,new C.fsU(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KX,null,new C.fsV(m),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$aga)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(m).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCO(d,"Malipo ya Awamu ya Mahari",D.Q7),$async$aga)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KU(d,"Tafuta jimbo\u2026","",A.k_,"Chagua jimbo"),$async$aga)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agz(s,D.Q7)
if(q==null)q=A.d.gJ(D.Q7)
n=C.cC()
p=C.rp(q.e,null,0,0,C.fVF(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cXz,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q8,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bs(null,null,null,null,D.o9,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
xo:function xo(d,e){this.a=d
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
fyX:function fyX(){},
fyT:function fyT(d){this.a=d},
fyV:function fyV(d){this.a=d},
fyW:function fyW(){},
fyU:function fyU(d){this.a=d},
fKu:function fKu(d,e){this.a=d
this.b=e},
acU:function acU(d,e,f){this.c=d
this.d=e
this.a=f},
dXE:function dXE(d,e,f){this.a=d
this.b=e
this.c=f},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXC:function dXC(d,e){this.a=d
this.b=e},
aci:function aci(d,e,f){this.c=d
this.d=e
this.a=f},
fsM:function fsM(){},
fsN:function fsN(d){this.a=d},
fsK:function fsK(d){this.a=d},
fsL:function fsL(d){this.a=d},
fsQ:function fsQ(){},
fsR:function fsR(d){this.a=d},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
fsU:function fsU(){},
fsV:function fsV(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(d){this.a=d},
Kj(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cs(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f_,j,k,l)},
hfN(d,e,f){return C.Cs(0,0.002,D.fs,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bz1(d,e,f,g,h){return B.a([C.Cs(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.Kj(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fWr(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cs(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.Cs(h,0.016,D.kZ,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cs(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0O(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kj(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hfN(u,g+0.018,t)],x.u)},
hfO(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cs(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cs(w,0.024,D.kZ,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cs(w,0.024,D.kZ,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kj(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz0(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kj("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f_,v,w,f-0.006),C.hfN(w,f+0.016,v)],x.u)},
fZw(d){var w,v
for(w=0;w<19;++w){v=D.Qk[w]
if(v.a===d)return v}return null},
i3q(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agz(A.a.b1(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agz(A.a.b1(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b1(k,18)
w=C.agz(u,D.Q7)
v=w==null?l:w.d
if(v==null){w=C.agz(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fZw(A.a.b1(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hgC.a9(0)
$.hgP.a9(0)
t=C.fAD(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h_C(d){var w=0,v=B.j(x.T),u
var $async$h_C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fLX(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_C,v)},
xr:function xr(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biw:function biw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fLX:function fLX(){},
acX:function acX(d){this.a=d},
edd:function edd(d,e){this.a=d
this.b=e},
edc:function edc(d){this.a=d},
edb:function edb(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e,f){this.c=d
this.d=e
this.a=f},
fZv(d){return $.hgP.cg(0,d,new C.fAF(d))},
fAD(d){return $.hgC.cg(0,d,new C.fAE(d))},
fy(d){return B.fPT(d>>>16&255,d>>>8&255,d&255,255)},
hTx(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hhU(4294570461,4293910718,4284234270,u)
case 1:return C.hhU(4294635750,4293975240,t,4292912216)
case 2:w=C.fca(s,4294505966,r)
C.byM(w,14,16,p)
C.ks(w,8,9,464,836,u,1.2)
C.Co(w,2,2,1,1,u,10)
C.Co(w,478,2,-1,1,u,10)
C.Co(w,2,852,1,-1,u,10)
C.Co(w,478,852,-1,-1,u,10)
return w
case 3:return C.fca(4294966515,4294373082,4289102906)
case 4:return C.hOj(C.fca(4294376440,4293653998,4290287194))
case 5:w=C.fca(4294965238,4294437098,4288444980)
C.byM(w,14,16,4283043359)
C.ks(w,6,7,468,840,u,1)
C.ks(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,n,4294175448)
C.rK(v,n)
C.ks(v,24,24,432,806,4286209070,1)
C.a0C(v,12,12,468,12,o,3,20)
C.a0C(v,12,842,468,842,o,3,20)
C.a0C(v,12,12,12,842,o,3,20)
C.a0C(v,468,12,468,842,o,3,20)
return v
case 7:return C.hMl(4294440434,4293518297,4280228630,r)
case 8:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,m,4293911504)
C.rK(v,m)
C.ks(v,28,28,424,798,l,1)
C.fl1(v,28,28,l,k)
C.fl1(v,452,28,l,k)
C.fl1(v,28,826,l,k)
C.fl1(v,452,826,l,k)
return v
case 9:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,j,4294111986)
C.rK(v,j)
C.ks(v,18,18,444,818,4292401368,0.7)
B.iJ(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hQg(i,4294173372)
case 11:return C.hRl(4294439140,4293449662)
case 12:return C.hMd(h,4294239432)
case 13:return C.hQN(4294244340,4293193448)
case 14:return C.hV5(4294505710,4293780694)
case 15:return C.fb8(4294966259,4294439138,o,p,q)
case 16:return C.fb8(4294966776,4294178544,o,g,g)
case 17:return C.fb8(4294965493,4294504170,o,4286200650,q)
case 18:return C.fb8(4294966519,4294373862,o,p,p)
case 19:return C.hPo()
case 20:return C.hPp()
case 21:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,h,4293976768)
C.rK(v,h)
C.byM(v,14,16,p)
B.iJ(v,!0,C.fy(u),4,475,4,9)
B.iJ(v,!0,C.fy(u),4,475,844,849)
B.iJ(v,!0,C.fy(u),4,9,4,849)
B.iJ(v,!0,C.fy(u),470,475,4,849)
C.a0C(v,10,12,470,12,u,2,16)
C.a0C(v,10,842,470,842,u,2,16)
C.a0C(v,10,12,10,842,u,2,18)
C.a0C(v,470,12,470,842,u,2,18)
C.Co(v,2,2,1,1,t,10)
C.Co(v,478,2,-1,1,t,10)
C.Co(v,2,852,1,-1,t,10)
C.Co(v,478,852,-1,-1,t,10)
C.ks(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,s,4294438872)
C.rK(v,s)
C.ks(v,14,16,452,822,o,2.2)
C.ks(v,22,24,436,806,o,1)
C.fXM(v,!1,!1,o,p,p,36,14,16)
C.kH(v,240,20,7,o,!0)
C.kH(v,240,834,7,o,!0)
C.kH(v,18,427,7,o,!0)
C.kH(v,462,427,7,o,!0)
return v
case 23:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,i,4293910712)
C.rK(v,i)
B.iJ(v,!0,C.fy(u),0,479,0,20)
B.iJ(v,!0,C.fy(u),0,479,834,853)
B.iJ(v,!0,C.fy(u),0,20,0,853)
B.iJ(v,!0,C.fy(u),460,479,0,853)
B.iJ(v,!0,C.fy(f),5,474,5,9)
B.iJ(v,!0,C.fy(f),5,474,844,848)
B.iJ(v,!0,C.fy(f),5,9,5,848)
B.iJ(v,!0,C.fy(f),470,474,5,848)
C.ks(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hm(q,q,A.ca,0,A.e2,854,q,0,3,q,A.ca,480,!1)
C.yh(v,e,4294174404)
C.rK(v,e)
C.byM(v,14,16,p)
B.iJ(v,!0,C.fy(u),3,476,3,8)
B.iJ(v,!0,C.fy(u),3,476,845,850)
B.iJ(v,!0,C.fy(u),3,8,3,850)
B.iJ(v,!0,C.fy(u),471,476,3,850)
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
yh(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kJ(d,!1,A.dc,new B.RK(s),r,A.cX,1,0,w-1,k,k);++k}},
rK(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eL()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aC(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aC(v==null?0:v)
v=d.a
s=v==null?o:v.dR(u,t,o)
if(s==null)s=new B.iE()
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
Co(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e+g*j,f,f)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,1,w,e+g*t,v,v)
B.kJ(d,!0,A.dc,C.fy(i),u,A.cX,1,w,w,v,f+h*t)},
hhU(d,e,f,g){var w=null,v=B.hm(w,w,A.ca,0,A.e2,854,w,0,3,w,A.ca,480,!1)
C.yh(v,d,e)
C.rK(v,d)
B.iJ(v,!0,C.fy(f),0,479,0,28)
B.iJ(v,!0,C.fy(f),0,479,826,853)
B.iJ(v,!0,C.fy(f),0,28,0,853)
B.iJ(v,!0,C.fy(f),452,479,0,853)
C.ks(v,5,5,470,844,g,1.1)
C.ks(v,28,28,424,798,g,1.6)
C.Co(v,2,2,1,1,g,11)
C.Co(v,478,2,-1,1,g,11)
C.Co(v,2,852,1,-1,g,11)
C.Co(v,478,852,-1,-1,g,11)
return v},
fca(d,e,f){var w=null,v=B.hm(w,w,A.ca,0,A.e2,854,w,0,3,w,A.ca,480,!1)
C.yh(v,d,e)
C.rK(v,d)
C.ks(v,14,16,452,822,f,1.6)
C.ks(v,20,22,440,810,f,0.8)
return v},
byM(d,e,f,g){var w,v=C.fy(g)
B.iJ(d,!0,v,0,479,0,f-1)
w=854-f
B.iJ(d,!0,v,0,479,w,853);--w
B.iJ(d,!0,v,0,e-1,f,w)
B.iJ(d,!0,v,480-e,479,f,w)},
hOj(d){var w,v,u=4291404327
C.byM(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kH(d,w,8,3,u,!0)
C.kH(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kH(d,7,v,3,u,!0)
C.kH(d,473,v,3,u,!0)}return d},
fo1(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jd(e,f),new B.jd(e+g*n,f),new B.jd(e,f+h*n)],t)
B.a1o(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jd(s,u),new B.jd(e+g*v,u),new B.jd(s,f+h*v)],t)
B.a1o(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kH(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kH(d,e+g*t,f+h*3,4,k,!0)
C.kH(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kH(d,e+g*t,f,5,k,!0)
C.kH(d,e,f+h*t,5,k,!0)}},
fXM(d,e,f,g,h,i,j,k,l){var w,v
C.fo1(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fo1(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fo1(d,k,v,1,-1,e,f,g,h,i,j)
C.fo1(d,w,v,-1,-1,e,f,g,h,i,j)},
a0C(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l_(d,!0,A.dc,new B.qW(p),null,A.cX,j,r,q)}},
fn9(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kJ(d,!0,A.dc,new B.qW(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kJ(d,!0,A.dc,new B.qW(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hMl(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hm(o,o,A.ca,0,A.e2,854,o,0,3,o,A.ca,480,!1)
C.yh(n,d,e)
C.rK(n,d)
C.ks(n,20,20,440,814,f,1.2)
C.fn9(n,0,0,1,1,g)
C.fn9(n,480,0,-1,1,g)
C.fn9(n,0,854,1,-1,g)
C.fn9(n,480,854,-1,-1,g)
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
B.kJ(n,!0,A.dc,new B.qW(p),o,A.cX,1.2,240,r,60,q)}return n},
fl1(d,e,f,g,h){var w
C.fqL(d,!0,C.fy(g),13,e,f)
C.fqL(d,!0,C.fy(g),9,e,f)
w=B.a([new B.jd(e,f-4),new B.jd(e+4,f),new B.jd(e,f+4),new B.jd(e-4,f)],x.J)
B.a1o(d,C.fy(h),w)},
kH(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jd(e,v),new B.jd(u,f),new B.jd(e,t),new B.jd(s,f)],x.J)
if(i){B.a1o(d,C.fy(h),r)
return}B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,e,u,v,f)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,u,e,f,t)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,e,s,t,f)
B.kJ(d,!0,A.dc,C.fy(h),w,A.cX,1,s,e,f,v)},
fb7(d,e,f,g,h,i,j){var w,v=B.a([new B.jd(e,f),new B.jd(e+g*28,f),new B.jd(e,f+h*28)],x.J)
B.a1o(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kH(d,v,w,6,j,!0)
C.kH(d,v,w,3,i,!0)},
fb8(d,e,f,g,h){var w=null,v=B.hm(w,w,A.ca,0,A.e2,854,w,0,3,w,A.ca,480,!1)
C.yh(v,d,e)
C.rK(v,d)
C.ks(v,18,18,444,818,f,2)
C.ks(v,26,26,428,802,f,0.9)
if(h!=null)B.iJ(v,!0,C.fy(h),28,451,28,34)
C.fb7(v,18,18,1,1,g,f)
C.fb7(v,462,18,-1,1,g,f)
C.fb7(v,18,836,1,-1,g,f)
C.fb7(v,462,836,-1,-1,g,f)
return v},
hPo(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hm(v,v,A.ca,0,A.e2,854,v,0,3,v,A.ca,480,!1)
C.yh(r,u,4294240980)
C.rK(r,u)
C.ks(r,10,12,460,830,t,3.2)
C.ks(r,18,20,444,814,s,1.2)
C.ks(r,24,26,432,802,t,1.8)
C.fXM(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kH(r,w,16,3,t,!0)
C.kH(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kH(r,16,w,3,t,!0)
C.kH(r,464,w,3,t,!0)}return r},
hPp(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hm(t,t,A.ca,0,A.e2,854,t,0,3,t,A.ca,480,!1)
C.yh(p,s,4294373080)
C.rK(p,s)
C.ks(p,16,18,448,818,r,2.4)
C.ks(p,24,26,432,802,4286209044,1)
w=new C.fdr(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fXM(p,!1,!0,r,q,q,34,16,18)
return p},
bzs(d,e,f,g,h,i){B.iJ(d,!0,C.fy(i),e,e+g,f,f+h)},
bAh(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kJ(d,!1,A.dc,new B.RK(i),null,A.cX,1,e,w,l,l)}},
hQf(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kJ(d,!1,A.dc,new B.qW(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kJ(d,!1,A.dc,new B.qW(r),null,A.cX,1,t,t,f,s);++q}},
hQg(d,e){var w,v,u=null,t=B.hm(u,u,A.ca,0,A.e2,854,u,0,3,u,A.ca,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hQf(t,v,w,30,D.cQu,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzs(t,44,44,392,766,d)
C.bAh(t,44,44,392,766,d,e)
C.rK(t,d)
C.ks(t,44,44,392,766,4292128567,2.2)
C.ks(t,50,50,380,754,4279898632,0.8)
return t},
hRk(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kH(d,e,f,7,h,!0)
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
B.kJ(d,!0,A.dc,new B.qW(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kJ(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l_(d,!0,A.dc,C.fy(h),o,A.cX,2,e,f)}},
hRl(d,e){var w,v,u,t,s=null,r=B.hm(s,s,A.ca,0,A.e2,854,s,0,3,s,A.ca,480,!1)
B.iJ(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hRk(r,u,v,w,4292391514)}C.bzs(r,46,46,388,762,d)
C.bAh(r,46,46,388,762,d,e)
C.rK(r,d)
C.ks(r,46,46,388,762,4291404327,1.8)
return r},
hdj(d,e,f,g){C.fqL(d,!0,C.fy(g),16,e,f)
C.fqL(d,!0,C.fy(g),11,e,f)
C.kH(d,e,f,6,g,!0)
B.kJ(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kJ(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e,e,f-14,f+14)},
hMd(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hm(v,v,A.ca,0,A.e2,854,v,0,3,v,A.ca,480,!1)
B.iJ(s,!0,C.fy(4280948752),0,479,0,853)
B.iJ(s,!0,C.fy(u),0,479,0,78)
B.iJ(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hdj(s,w,39,t)
C.hdj(s,w,815,t)}C.bzs(s,38,92,404,670,d)
C.bAh(s,38,92,404,670,d,e)
C.rK(s,d)
C.ks(s,38,92,404,670,t,1.8)
C.ks(s,45,99,390,656,4287322667,0.8)
return s},
hQM(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jd(e,f),new B.jd(q-5,w),new B.jd(q,f-(18-Math.abs(r)*3)),new B.jd(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1o(d,new B.qW(o),p)}B.l_(d,!0,A.dc,C.fy(4292128567),null,A.cX,3,e,f)},
hQN(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hm(s,s,A.ca,0,A.e2,854,s,0,3,s,A.ca,480,!1)
C.yh(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kJ(q,!0,A.dc,new B.qW(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kJ(q,!0,A.dc,new B.qW(u),s,A.cX,1.1,v,v,0,853)}B.iJ(q,!0,C.fy(r),0,479,0,70)
B.iJ(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hQM(q,70+t*85,48,4292128567)
C.bzs(q,48,78,384,712,d)
C.bAh(q,48,78,384,712,d,e)
C.rK(q,d)
C.ks(q,48,78,384,712,4291404327,1.6)
return q},
hV5(d,e){var w,v,u,t=null,s=4279970378,r=B.hm(t,t,A.ca,0,A.e2,854,t,0,3,t,A.ca,480,!1)
B.iJ(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kH(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l_(r,!0,A.dc,new B.qW(u),t,A.cX,1,v,w)}C.bzs(r,40,40,400,774,d)
C.bAh(r,40,40,400,774,d,e)
C.rK(r,d)
C.ks(r,40,40,400,774,4291058750,2)
C.ks(r,48,48,384,758,s,0.8)
return r},
kQ:function kQ(d,e){this.a=d
this.b=e},
fAF:function fAF(d){this.a=d},
fAE:function fAE(d){this.a=d},
fdr:function fdr(d){this.a=d},
fBi(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hRe(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fWk(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oA(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.agv(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af1(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vd(null,""),$async$af1)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n2(n)
if(e==null)s=A.hp
else{r=C.hRe(e)
s=B.a([new B.a_C(A.cS.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qM(t,d,s,E.EY),$async$af1)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KJ(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af1,v)},
bBW(d){return C.i36(d)},
i36(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af1(r,null),$async$bBW)
case 7:q=f
p=C.fWk(q)
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
return B.i($async$bBW,v)},
hhd(d){var w,v=F.fYO(d)
v=B.aK(v,"book","newspaper")
if(F.a1H(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fFd(d,e,f,g){return C.i4Y(d,e,f,g)},
i4Y(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fFd=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fBi(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hkH()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af1('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hhd(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fFd)
case 3:r=m.fWk(i)
if(r==null)throw B.V(y.S)
q=new C.zj(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBL(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1H(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1H(A.d.aI(t," "))==="sw"?C.bBW(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFd,v)},
bBq(d,e,f,g,h){return C.i0J(d,e,f,g,h)},
i0J(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBq=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fM(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hkH()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af1('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hhd(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBq)
case 3:p=j.fWk(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBL(B.a2(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1H(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBW(n),$async$bBq)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7w(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBq,v)},
a7w:function a7w(d,e,f){this.a=d
this.b=e
this.c=f},
i7K(d,e){return B.a5(d,!1).c8(B.ea(new C.fM7(e),!0,null,x.H))},
fM7:function fM7(d){this.a=d},
Vm:function Vm(d,e){this.c=d
this.a=e},
aDr:function aDr(d,e,f,g,h,i,j,k){var _=this
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
egv:function egv(d){this.a=d},
egu:function egu(){},
egw:function egw(d){this.a=d},
egt:function egt(d,e){this.a=d
this.b=e},
egx:function egx(){},
eg7:function eg7(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
ege:function ege(d){this.a=d},
egf:function egf(d,e){this.a=d
this.b=e},
egg:function egg(d){this.a=d},
eg9:function eg9(d,e){this.a=d
this.b=e},
ega:function ega(d,e){this.a=d
this.b=e},
egb:function egb(d,e){this.a=d
this.b=e},
egc:function egc(d){this.a=d},
egd:function egd(d){this.a=d},
eg8:function eg8(d,e){this.a=d
this.b=e},
eg5:function eg5(d){this.a=d},
eg6:function eg6(d){this.a=d},
egm:function egm(d){this.a=d},
egn:function egn(d){this.a=d},
egl:function egl(d){this.a=d},
ego:function ego(d,e){this.a=d
this.b=e},
egk:function egk(d,e){this.a=d
this.b=e},
egp:function egp(d){this.a=d},
egj:function egj(d){this.a=d},
egq:function egq(d){this.a=d},
egi:function egi(d){this.a=d},
egr:function egr(d,e){this.a=d
this.b=e},
egh:function egh(d,e){this.a=d
this.b=e},
egs:function egs(d){this.a=d},
eg4:function eg4(d,e){this.a=d
this.b=e},
fAe(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fAe=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.heP){w=1
break}r=new C.fAf()
t=4
q=x.s
w=7
return B.b(B.iL(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fAe)
case 7:$.heP=!0
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
return B.i($async$fAe,v)},
bBN(d){return A.GL[B.mw(d)-1]+", "+A.oV[B.bH(d)-1]+" "+B.bQ(d)+", "+B.bA(d)},
hUb(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dex[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fZc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a1(v,new C.fyx(),B.U(v).k("a1<1>")))
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
continue}o=new C.fyz(j,h)
n=new C.fyy(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iU(o.$1(l)))
j.a+=l}return u},
fW3(d,e){var w=new C.fd2()
return A.d.cI(e,0,new C.fd0(w))>=A.d.cI(d,0,new C.fd1(w))},
hbZ(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bF())
return u},
zj:function zj(d,e,f,g,h,i,j,k,l,m){var _=this
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
cbW:function cbW(d){this.a=d},
cbU:function cbU(){},
cbV:function cbV(){},
tc:function tc(d,e){this.a=d
this.b=e},
Bf:function Bf(d,e){this.a=d
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
fAf:function fAf(){},
fyx:function fyx(){},
fyz:function fyz(d,e){this.a=d
this.b=e},
fyy:function fyy(d,e,f){this.a=d
this.b=e
this.c=f},
fd2:function fd2(){},
fd3:function fd3(){},
fd0:function fd0(d){this.a=d},
fd1:function fd1(d){this.a=d},
b06:function b06(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cbX:function cbX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbY:function cbY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cbZ:function cbZ(d){this.a=d},
bbH:function bbH(d){this.a=d},
bbG:function bbG(d,e){this.b=d
this.a=e},
bti:function bti(d){this.a=d},
b8b:function b8b(d,e){this.b=d
this.a=e},
bqN:function bqN(d,e){this.b=d
this.a=e},
hmC(d,e){return B.a5(d,!1).c8(B.ea(new C.fMa(e,null),!0,null,x.E))},
fMa:function fMa(d,e){this.a=d
this.b=e},
Vp:function Vp(d,e,f){this.c=d
this.d=e
this.a=f},
aDv:function aDv(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ehG:function ehG(){},
ehH:function ehH(d){this.a=d},
ehF:function ehF(d,e){this.a=d
this.b=e},
eht:function eht(d){this.a=d},
ehu:function ehu(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehy:function ehy(d){this.a=d},
ehz:function ehz(d,e,f){this.a=d
this.b=e
this.c=f},
ehv:function ehv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehx:function ehx(d,e){this.a=d
this.b=e},
ehD:function ehD(d){this.a=d},
ehw:function ehw(d,e){this.a=d
this.b=e},
ehE:function ehE(d,e){this.a=d
this.b=e},
bbd:function bbd(d,e,f){this.b=d
this.c=e
this.a=f},
i7Q(d){return B.a5(d,!1).c8(B.ea(new C.fMq(),!0,null,x.I))},
bzd(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fXs(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fMq:function fMq(){},
a_t:function a_t(d){this.a=d},
os:function os(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aES:function aES(d,e,f,g,h,i,j,k,l){var _=this
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
eRf:function eRf(d){this.a=d},
eQ7:function eQ7(d,e){this.a=d
this.b=e},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQF:function eQF(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQp:function eQp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQB:function eQB(d,e,f){this.a=d
this.b=e
this.c=f},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQC:function eQC(d,e){this.a=d
this.b=e},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQE:function eQE(d,e,f){this.a=d
this.b=e
this.c=f},
eQD:function eQD(d,e){this.a=d
this.b=e},
ePH:function ePH(d){this.a=d},
ePI:function ePI(d){this.a=d},
ePJ:function ePJ(d){this.a=d},
ePG:function ePG(){},
ePK:function ePK(d,e){this.a=d
this.b=e},
ePF:function ePF(d,e){this.a=d
this.b=e},
ePM:function ePM(){},
ePL:function ePL(d,e){this.a=d
this.b=e},
ePE:function ePE(d,e){this.a=d
this.b=e},
ePB:function ePB(d,e){this.a=d
this.b=e},
ePN:function ePN(d){this.a=d},
ePD:function ePD(d,e){this.a=d
this.b=e},
ePO:function ePO(d){this.a=d},
ePC:function ePC(d,e){this.a=d
this.b=e},
eR4:function eR4(d,e){this.a=d
this.b=e},
eRb:function eRb(d){this.a=d},
eRc:function eRc(d,e){this.a=d
this.b=e},
eRd:function eRd(){},
eR5:function eR5(d,e){this.a=d
this.b=e},
eR3:function eR3(d,e){this.a=d
this.b=e},
eR6:function eR6(d,e){this.a=d
this.b=e},
eR2:function eR2(d,e){this.a=d
this.b=e},
eR7:function eR7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eR1:function eR1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eR8:function eR8(d){this.a=d},
eR9:function eR9(d,e){this.a=d
this.b=e},
eRa:function eRa(d){this.a=d},
eR0:function eR0(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQI:function eQI(d,e){this.a=d
this.b=e},
eQQ:function eQQ(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQU:function eQU(d){this.a=d},
eQV:function eQV(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQX:function eQX(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQY:function eQY(d){this.a=d},
eQK:function eQK(d){this.a=d},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eQJ:function eQJ(d,e){this.a=d
this.b=e},
eR_:function eR_(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQS:function eQS(d){this.a=d},
eQs:function eQs(d){this.a=d},
eQr:function eQr(d){this.a=d},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQu:function eQu(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQj:function eQj(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQm:function eQm(d,e){this.a=d
this.b=e},
eQh:function eQh(d,e){this.a=d
this.b=e},
eQg:function eQg(d,e){this.a=d
this.b=e},
ePZ:function ePZ(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
eQ2:function eQ2(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
eQ4:function eQ4(d){this.a=d},
eQ5:function eQ5(d){this.a=d},
eQ6:function eQ6(d){this.a=d},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePo:function ePo(d){this.a=d},
ePj:function ePj(d){this.a=d},
ePp:function ePp(d){this.a=d},
ePq:function ePq(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePV:function ePV(d){this.a=d},
ePW:function ePW(d){this.a=d},
ePX:function ePX(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePy:function ePy(d){this.a=d},
ePt:function ePt(d){this.a=d},
ePz:function ePz(d){this.a=d},
ePs:function ePs(d){this.a=d},
ePA:function ePA(d){this.a=d},
ePr:function ePr(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQa:function eQa(d){this.a=d},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQd:function eQd(d,e){this.a=d
this.b=e},
eQ8:function eQ8(d,e){this.a=d
this.b=e},
eQe:function eQe(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQx:function eQx(d,e,f){this.a=d
this.b=e
this.c=f},
eQw:function eQw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQH:function eQH(d,e){this.a=d
this.b=e},
eQG:function eQG(d,e){this.a=d
this.b=e},
ePY:function ePY(d){this.a=d},
eRe:function eRe(d){this.a=d},
beM:function beM(d,e){this.b=d
this.a=e},
i3h(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i3i(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kV(0,d),m=B.C(n,B.a3(n).k("J.E"))
if(m.length===0)return d
w=new B.fe("")
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
bzO(){var w=$.byW,v=$.Q4
$.Q4=v+1
return w+"_"+v},
i9(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.bzO(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f_,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i9(D.eK,d-f/2,e-w/32,f,w/16,g,0)},
hNU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byW
p=$.Q4
$.Q4=p+1
w.push(new C.eJ(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byW
p=$.Q4
$.Q4=p+1
w.push(new C.eJ(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nS(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i9(D.be,0.08,0.08,0.5,0.003,v,0),C.i9(D.be,0.58,0.08,0.004,0.06,v,0),C.i9(D.be,0.58,0.14,0.34,0.003,v,0),C.i9(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i9(D.be,0.08,0.8,0.004,0.14,t,0),C.i9(D.be,0.08,0.94,0.6,0.003,t,0),C.nS(0.58,0.08,0.05,e),C.nS(0.92,0.22,0.05,e),C.nS(0.08,0.8,0.05,f),C.nS(0.68,0.94,0.05,f),C.nS(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i9(D.kZ,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i9(D.kZ,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i9(D.kZ,0.7,0.8,0.22,0.12,w|1140850688,0),C.i9(D.kZ,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nS(0.5,0.5,1.5,w|335544320),C.nS(0.5,0.5,1.15,w|402653184),C.nS(0.5,0.5,0.8,v|436207616),C.nS(0.95,0.05,0.4,v|855638016),C.nS(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nS(0.85,0.08,0.7,w|1140850688),C.nS(0.1,0.35,0.5,v|855638016),C.nS(0.9,0.62,0.55,v|771751936),C.nS(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i9(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i9(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i9(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i9(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nS(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nS(0.5,0.2,0.65,(w|3422552064)>>>0),C.nS(0.5,0.2,0.95,w|855638016),C.i9(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i9(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i9(D.jG,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i9(D.jG,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i9(D.jG,0.15,0.86,0.6,0.14,1712265002,0),C.nS(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cRU[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byW
l=$.Q4
$.Q4=l+1
w.push(new C.eJ(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eK,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i9(D.jG,0.35,-0.1,0.3,0.62,w|855638016,0),C.i9(D.jG,0.05,-0.1,0.3,0.55,v,-0.5),C.i9(D.jG,0.65,-0.1,0.3,0.55,v,0.5),C.nS(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i9(D.be,0.06,0.04,0.88,0.002,e,0),C.i9(D.be,0.06,0.96,0.88,0.002,e,0),C.i9(D.be,0.06,0.04,0.004,0.92,e,0),C.i9(D.be,0.936,0.04,0.004,0.92,e,0),C.i9(D.be,0.09,0.07,0.82,0.001,w,0),C.i9(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i9(D.jH,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i9(D.jH,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i9(D.jH,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i9(D.be,0,0,0.3,0.09,w|1140850688,0),C.i9(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i9(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i9(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i9(D.eK,0.62,0.02,0.5,0.16,v,0.6),C.i9(D.eK,0.78,0.12,0.4,0.12,u,0.9),C.i9(D.eK,-0.12,0.8,0.5,0.16,u,-0.6),C.i9(D.eK,-0.05,0.9,0.4,0.12,v,-0.9),C.nS(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i9(D.be,0.09,0.12,0.16,0.006,e,0),C.i9(D.be,0.05,0.03,0.9,0.001,w,0),C.i9(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i_N(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byW=j
$.Q4=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fvW()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.bzO(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cm,D.lr,1,0,0))
if(a9)A.d.v(q,C.hNU(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i3h(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fvV(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.bzO(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cm,D.lr,a3,a4,a5))
return C.rp(s,r,0,0,q,j+"_slide",D.q8,"","","",D.dd)},
ro:function ro(d,e){this.a=d
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
fvW:function fvW(){},
fvV:function fvV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hDW(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdi(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zl(u,t,s,B.t(w==null?"":w))},
fDB(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fDB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hfb){w=1
break}$.hfb=!0
t=4
w=7
return B.b(B.aA(),$async$fDB)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jx(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hDW(m)
if(l!=null)J.ch(n,l)}$.Cp.cg(0,B.t(o.a),new C.fDC(n))}C.fX8()
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
return B.i($async$fDB,v)},
fX8(){var w,v=new B.S(Date.now(),0,!1).bQ(-12e8)
for(w=new B.dt($.Cp,$.Cp.r,$.Cp.e);w.C();)J.no(w.d,new C.fke(v))
$.Cp.bn($.Cp,new C.fkf())},
aNt(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNt=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNt)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Cp,B.a3($.Cp).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNt)
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
return B.i($async$aNt,v)},
i3T(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fX8()
w=$.Cp.cg(0,d,new C.fDE())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pt(w,0,new C.zl(new B.S(v,0,!1),f,u,g))
C.aNt()},
i3Q(d){var w,v=$.Cp.h(0,d)
if(v==null||J.cm(v))return
w=J.cG(v)
w.cC(v,0)
if(w.gam(v))$.Cp.W(0,d)
C.aNt()},
zl:function zl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdi:function cdi(){},
fDC:function fDC(d){this.a=d},
fke:function fke(d){this.a=d},
fkf:function fkf(){},
fDE:function fDE(){},
i3V(d){return A.d.dL(D.vV,new C.fDH(d),new C.fDI())},
hDU(d){var w
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
hDT(d){var w
switch(d.a){case 0:w=D.akC
break
case 1:w=A.yd
break
case 2:w=A.alG
break
case 3:w=I.akf
break
case 4:w=A.al6
break
case 5:w=A.lQ
break
default:w=null}return w},
hQS(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Py[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Py[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hDV(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i3R(d,e,f,g,h){var w=new B.K(D.vV,new C.fDA(),x.eC).aI(0,", "),v=""+d,u=C.hkz(h),t=F.fxk(h),s=C.hgN(g),r=e.t(0,D.HH)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HI)?'- New slides get an "icon3d" from: '+A.d.aI(D.Py,", ")+".\n":"",p=e.t(0,D.Cz)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i3S(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vV,new C.fDD(),x.eC).aI(0,", "),p=new B.fe("")
if(e.t(0,D.HH)){p.a=s
w=s}else w=""
if(e.t(0,D.HI))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Py,", ")+".\n")
if(e.t(0,D.Cz))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hkz(d)
v=F.fxk(d)
u=C.hgN(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CO(a3,"{"),a5=J.fPt(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L2(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cm(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fBA(),m).c_(0,new C.fBB())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
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
f=C.hQS(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7E(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b4(D.vV,new C.fBC(r))?r:a7
o=C.fjt(J.q(w,"logo_frame"),D.BY)
n=C.fjt(J.q(w,"logo_ring"),D.BT)
m=C.fjt(J.q(w,"photo_frame"),D.BY)
l=C.fjt(J.q(w,"photo_ring"),D.BT)
return new C.aqD(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1c(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hjH(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CA),f7=f6?C.hKz():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eL()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fu(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lQ,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i3V(f9.b)
r=g2.t(0,D.a4z)||f6
q=g2.t(0,D.HH)
p=g2.t(0,D.Rt)
o=new C.fw_()
n=B.a([],x.g)
m=new C.fw2(o,w,r)
l=new C.fw1(o,r)
k=new C.fw0(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b4(u,new C.fvZ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cTq[b8]
c0=D.cSl[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eL3.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mE,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q9,500,f2,f0))
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
d3=D.Cx
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eK,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eK,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mE,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q9,500,f2,f0))
d3=D.mD
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eK,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uf:D.cm
c1.push(new C.eJ(b4,D.a4x,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mD
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eK,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eK,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mE,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q9,450,f2,f0))
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
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mD}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hMc(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dgO[A.o.E(b1,6)]:s
n.push(new C.lD(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bs(e4,e4,e4,e4,D.Cw,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fyn(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fyn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cz)
n=e.t(0,D.HI)
if(!o&&!n){u=D.a3w
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fyq(o,s[r],n,$.hPD,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iL(t,x.e),$async$fyn)
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
return B.i($async$fyn,v)},
fxn(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fxn=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i3S(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMP(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fxn)
case 3:u=s.aN9(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxn,v)},
bBr(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBr=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.e9(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i3T(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agL(i,"colorful")
t=C.i3R(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMP(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hp),$async$bBr)
case 3:u=o.aN9(m,f,h,g,D.dUZ,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBr,v)},
aMP(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vd(null,""),$async$aMP)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n2(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qM(t,d,g,null),$async$aMP)
case 7:q=i
p=q.b
if(p!=null){o=C.agL(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KJ(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMP,v)},
aN9(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aN9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cz)||e.t(0,D.HI)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Cz)}w=6
return B.b(C.fyn(d,t),$async$aN9)
case 6:s=k
w=4
break
case 5:s=D.a3w
case 4:t=d.c
w=A.d.b4(t,new C.fcY())?7:9
break
case 7:r=$.hlr
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aN9)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hjH(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hDV(new C.aqD(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.C(new B.K(m,new C.fcZ(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jN<co.E,n>")
t=B.C(new B.jN(e,new C.fd_(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rt)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN9,v)},
fZV(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2l[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i7V(d){return B.bR(A.K,null,new C.fMC(),d,!0,!0,!0,null,!1,!1,x.I)},
hLb(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcw().aJ(d)},
i7U(d,e,f){return B.bR(A.K,null,new C.fMB(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fZW(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fZX(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fjt(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fju(w))?w:""},
hgN(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hlp(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agL(a1==null?"":a1,a0),a3=C.agL(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a1<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.ra(new B.a1(r,new C.fDJ(t[p]),q))
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
g=B.C(new B.a1(k,new C.fDK(),v),r)
A.d.b0(g,new C.fDL())
if(g.length===0)continue
f=new C.fDM(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i4b(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFD
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWU
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWV
return null},
hgo(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bu(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i3W(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o9
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
if(C.hgo(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hgo(n,i,v,u))if(n.w>10){f=h+1
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
i3U(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agL(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2l[r]
if(q.b===s)w.L(0,q)}}v=C.fZW(e)
u=C.fZX(e)
p=C.hjH(n,D.a3w,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.C(new B.K(o,new C.fDF(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jN<co.E,n>")
o=B.C(new B.jN(w,new C.fDG(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rt)
return p},
i7H(d,e,f){return B.bR(A.K,null,new C.fLP(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hKz(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eL()
s.dB(t)
w=D.cxx[s.aC(10)]
v=new C.ecB(s)
u=x.N
return new C.ecA(w,s.aC(4),J.fo(v.$1$2(D.cXM,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.dcu,2+s.aC(2),u),v.$1$2(D.d5R,2,u),v.$1$2(D.dfm,4,x.fP),t)},
hMc(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eL()
a1.dB(a5.w+a3*13)
w=new C.f9r(a4)
v=new C.f9t(a4,d)
u=new C.f9s(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eK,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1c(a0,52),"lux_spot",a5.wp(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wp(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aE9(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wp(0,f),D.dd,150,C.a1c(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wp(0,f),D.dd,120,C.a1c(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1c(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wp(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a1c(a0,208),"lux_rule",a5.aE9(0,"shimmer",r),D.ue,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a1c(a0,144),"lux_rule2","",D.HF,220))}l=!A.d.b4(a2,new C.f9q())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wp(0,"crest"),350))
else{o=a1.hb()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wp(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1c(r,242)
j=a5.wp(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q9,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eK,t-0.007,0.9495,0.014,0.025,C.a1c(r,242),"lux_g2",a5.wp(0,"orbit"),D.q9,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fT(a0,16),8,"0").toUpperCase()))}if((A.d.gJ(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wp(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDH:function fDH(d){this.a=d},
fDI:function fDI(){},
vR:function vR(d,e){this.a=d
this.b=e},
a7E:function a7E(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqD:function aqD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fDA:function fDA(){},
fDD:function fDD(){},
fBA:function fBA(){},
fBB:function fBB(){},
fBC:function fBC(d){this.a=d},
fw_:function fw_(){},
fw2:function fw2(d,e,f){this.a=d
this.b=e
this.c=f},
fw1:function fw1(d,e){this.a=d
this.b=e},
fw0:function fw0(d,e){this.a=d
this.b=e},
fvZ:function fvZ(d){this.a=d},
fyq:function fyq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyo:function fyo(d){this.a=d},
fyp:function fyp(d){this.a=d},
fcY:function fcY(){},
fcZ:function fcZ(){},
fd_:function fd_(){},
fMC:function fMC(){},
a0_:function a0_(d){this.a=d},
aGN:function aGN(d,e,f,g,h){var _=this
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
eXr:function eXr(d,e,f){this.a=d
this.b=e
this.c=f},
eXs:function eXs(d,e){this.a=d
this.b=e},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXo:function eXo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eXj:function eXj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eXn:function eXn(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXm:function eXm(d,e){this.a=d
this.b=e},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXk:function eXk(d){this.a=d},
eXl:function eXl(d,e){this.a=d
this.b=e},
eX7:function eX7(d,e){this.a=d
this.b=e},
eX8:function eX8(d,e){this.a=d
this.b=e},
eXa:function eXa(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXc:function eXc(d){this.a=d},
eXd:function eXd(d){this.a=d},
eX9:function eX9(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXF:function eXF(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXE:function eXE(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXD:function eXD(d){this.a=d},
eXJ:function eXJ(d){this.a=d},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXK:function eXK(d){this.a=d},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXL:function eXL(d){this.a=d},
eXA:function eXA(d){this.a=d},
eXM:function eXM(d){this.a=d},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXN:function eXN(d){this.a=d},
eXy:function eXy(d,e){this.a=d
this.b=e},
eXO:function eXO(d){this.a=d},
eXx:function eXx(d){this.a=d},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXQ:function eXQ(d){this.a=d},
eXI:function eXI(d){this.a=d},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXf:function eXf(d,e,f){this.a=d
this.b=e
this.c=f},
eXg:function eXg(d,e,f){this.a=d
this.b=e
this.c=f},
eXu:function eXu(d,e){this.a=d
this.b=e},
eXt:function eXt(d,e){this.a=d
this.b=e},
fMB:function fMB(d,e){this.a=d
this.b=e},
a_Z:function a_Z(d,e,f){this.c=d
this.d=e
this.a=f},
aGM:function aGM(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d){this.a=d},
eX2:function eX2(d,e){this.a=d
this.b=e},
eX3:function eX3(d){this.a=d},
eX4:function eX4(d){this.a=d},
eX_:function eX_(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX6:function eX6(d,e){this.a=d
this.b=e},
fju:function fju(d){this.a=d},
b0u:function b0u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDk:function aDk(d,e,f){this.c=d
this.d=e
this.a=f},
bjr:function bjr(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
ecD:function ecD(d){this.a=d},
ecC:function ecC(){},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
fDJ:function fDJ(d){this.a=d},
fDK:function fDK(){},
fDL:function fDL(){},
fDM:function fDM(d){this.a=d},
arc:function arc(d,e){this.a=d
this.b=e},
fDF:function fDF(){},
fDG:function fDG(){},
fLP:function fLP(d,e){this.a=d
this.b=e},
Zl:function Zl(d,e,f){this.c=d
this.d=e
this.a=f},
aAN:function aAN(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
di0:function di0(d){this.a=d},
di1:function di1(d){this.a=d},
di2:function di2(d,e){this.a=d
this.b=e},
di5:function di5(d){this.a=d},
di6:function di6(d,e){this.a=d
this.b=e},
di4:function di4(d,e){this.a=d
this.b=e},
di7:function di7(d){this.a=d},
di3:function di3(d,e){this.a=d
this.b=e},
brT:function brT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ecA:function ecA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ecB:function ecB(d){this.a=d},
f9r:function f9r(d){this.a=d},
f9t:function f9t(d,e){this.a=d
this.b=e},
f9s:function f9s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9q:function f9q(){},
aLl:function aLl(){},
fYL(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vJ(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0q:function b0q(d,e,f){this.c=d
this.d=e
this.a=f},
bl4:function bl4(d,e){this.c=d
this.a=e},
i0f(d){return A.d.dL(D.GI,new C.fx6(d),new C.fx7())},
i0g(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b1(t,6)
if(w.length===0)return null
v=new B.a1(D.GI,new C.fx8(w),x.b4)
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
fx6:function fx6(d){this.a=d},
fx7:function fx7(){},
fx8:function fx8(d){this.a=d},
mR(d,e,f,g,h){return new C.Eo(f,g,d)},
hNq(d){var w=d.z,v=B.U(w).k("a1<1>")
w=B.C(new B.a1(w,new C.fbr(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.K8
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f_,j,k,l)},
hju(d,e){var w
C.hNq(d)
w=A.d.dL($.bDr(),new C.fuX(e),new C.fuY())
$.K8=w.a
d.x=w.a;++d.y
try{w.bz(d)}finally{$.K8=""}d.z=B.bn(d.z,!0,x.F)},
Eo:function Eo(d,e,f){this.a=d
this.b=e
this.e=f},
fbr:function fbr(){},
fDb:function fDb(){},
fDc:function fDc(){},
fDd:function fDd(){},
fDo:function fDo(){},
fDt:function fDt(){},
fDu:function fDu(){},
fDv:function fDv(){},
fDw:function fDw(){},
fDx:function fDx(){},
fDy:function fDy(){},
fDz:function fDz(){},
fDe:function fDe(){},
fDf:function fDf(){},
fDg:function fDg(){},
fDh:function fDh(){},
fDi:function fDi(){},
fDj:function fDj(){},
fDk:function fDk(){},
fDl:function fDl(){},
fDm:function fDm(){},
fDn:function fDn(){},
fDp:function fDp(){},
fDq:function fDq(){},
fDr:function fDr(){},
fDs:function fDs(){},
fuX:function fuX(d){this.a=d},
fuY:function fuY(){},
iT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CG(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f_,j,k,l)},
bCa(){var w=new B.S(Date.now(),0,!1)
return A.ih[B.bH(w)-1]+" "+B.bQ(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzy(d){return new B.iO((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hSu(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amo(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hSy(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fj2(),x.dv).aI(0,"\n")},
hSx(d){switch(d.a){case 2:return A.nq
case 1:case 5:return A.eVA
default:return A.SU}},
hSr(d){switch(d.a){case 2:return A.uQ
case 1:case 5:return A.UK
default:return A.a9r}},
hSv(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzy(u),q=(s&255)===0?v:C.bzy(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nq(q,p,A.kG)
w=new B.pu(t,t,t,t)}switch(d.ax.a){case 1:return B.ls(v,v,v,new B.kz(r,w,v,A.aaF,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wT(B.ls(v,v,q,v,p+0.4,v,v,v))
default:return B.ls(v,v,v,new B.kz(r,w,B.vl(4),A.hF,v),v,v,v,v)}},
hSt(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hSr(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hSy(d)
t=C.bzy(d.Q)
s=d.x.a>=700?A.ej:A.vr
r=d.y===A.cF?A.xR:A.aj6
q=d.z
p=new B.CR(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aOz:A.aOy,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hSx(d.as)))
break
case 1:case 4:o=C.hSu(d.at)
n=i===D.lr&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wT(B.fa(w,l,l,l,B.h2(l,A.ru,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hz(o,n?A.aaB:A.V7,l,l)
break
case 3:w=new B.nq(A.HY,1,A.kG)
u=B.vl(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ls(A.uQ,B.fa(t,l,l,l,B.h2(l,D.e8a,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.ej,l,!0,l,l,l,l),A.nq),l,new B.kz(E.aGW,new B.pu(w,w,w,w),u,A.hF,l),l,l,l,l)
break
case 2:p=C.hSv(d,e)
break
case 5:p=C.hSs(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hba(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arY(m/255,p)}if(w)return new F.vX(k,l,j,l,new B.RR(new B.ky(g,g,f,1/0),p))
if(i===D.kY){i=new B.nq(A.HY,1,A.kG)
i=B.ls(A.uQ,p,l,new B.kz(A.p1,new B.pu(i,i,i,i),B.vl(4),A.hF,l),l,l,D.buH,l)}else i=p
return new F.vX(k,l,j,l,new B.fO(g,f,i))},
hSw(d,e,f,g){var w,v=null,u=C.bzy(d.e),t=d.f
t=B.a([F.h9N(t!=null?B.ls(v,v,v,new B.kz(v,v,v,A.hF,new B.aVZ(E.UL,A.a9l,B.a([u,C.bzy(t)],x.cR),v)),v,v,v,v):B.ls(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fj1(f,g),B.U(w).k("K<1,ff>")))
return F.cqw(t)},
fZZ(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fZZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3T(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.W7(A.w6,A.HV,D.bvP,null,null,null,!1,null)
o=new B.By(o,new C.fDS(607,787,p,d))
o.Mi(n,null)
r.push(o)}u=n.k5(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZZ,v)},
hSs(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fYL(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj4()
if(h==null)h=A.awv
j=B.tp(4279308564)
w=B.vl(18)
v=new B.nq(B.tp(4287531653),3,A.kG)
u=i.length===0?"My links":i
u=B.a([B.wT(B.fa(u,m,m,m,B.h2(m,A.p1,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wT(B.fa(A.a.i(l.c),m,m,m,D.f1J,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tp(4280690220)
o=new B.a8X(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.bp0,new C.aw9(new C.ahR(q),B.ls(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f42,A.nq),m,new B.kz(p,m,new B.aih(o,o,o,o),A.hF,m),m,m,D.bv7,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wT(B.fa(k,m,m,m,D.f3h,m))
u.push(new C.aw9(C.hs5(k),t))}return B.ls(m,B.yF(u,A.Lq,A.lp),m,new B.kz(j,new B.pu(v,v,v,v),w,A.hF,m),m,m,D.bpR,m)},
fj2:function fj2(){},
fj1:function fj1(d,e){this.a=d
this.b=e},
fDS:function fDS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agy(d){var w,v
for(w=0;w<32;++w){v=D.Gz[w]
if(v.a===d)return v}return null},
hdP(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b1(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hmy(d,e){return B.a5(d,!1).c8(B.ea(new C.fKe(e),!0,null,x.fB))},
hmx(d,e){return B.bR(A.K,null,new C.fKd(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iY:function iY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ef:function Ef(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
N9:function N9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biO:function biO(d,e,f){var _=this
_.d=d
_.e=$
_.br$=e
_.a8$=f
_.c=_.a=null},
dTo:function dTo(d){this.a=d},
dTn:function dTn(d,e,f){this.a=d
this.b=e
this.c=f},
dTm:function dTm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqs:function bqs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWe:function eWe(d,e){this.a=d
this.b=e},
bdS:function bdS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZk:function aZk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7R:function c7R(){},
c7S:function c7S(d){this.a=d},
c7T:function c7T(d,e,f){this.a=d
this.b=e
this.c=f},
c7U:function c7U(d,e,f){this.a=d
this.b=e
this.c=f},
fKe:function fKe(d){this.a=d},
YU:function YU(d,e){this.c=d
this.a=e},
aza:function aza(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7d:function d7d(d,e,f){this.a=d
this.b=e
this.c=f},
d7i:function d7i(d){this.a=d},
d7j:function d7j(d){this.a=d},
d7h:function d7h(d){this.a=d},
d7k:function d7k(d){this.a=d},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7m:function d7m(d){this.a=d},
d7e:function d7e(d,e){this.a=d
this.b=e},
d7n:function d7n(d,e){this.a=d
this.b=e},
fKd:function fKd(d){this.a=d},
fKc:function fKc(d){this.a=d},
fKb:function fKb(d,e,f){this.a=d
this.b=e
this.c=f},
fKa:function fKa(d,e){this.a=d
this.b=e},
aKP:function aKP(){},
i7T(d){return B.bR(A.K,null,new C.fMA(),d,!0,!0,!0,null,!1,!1,x.N)},
fMA:function fMA(){},
Ze:function Ze(d){this.a=d},
bfl:function bfl(d){this.d=d
this.c=this.a=null},
de_:function de_(d){this.a=d},
de0:function de0(d,e){this.a=d
this.b=e},
de1:function de1(d){this.a=d},
hOW(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xg},
i2a(d){var w,v=A.d.gJ(d.split("@"))
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
i29(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gJ(d.split("@")),p=C.hOW(d)
switch(q){case"shimmer":return B.nL(A.a9N,g,new C.fAy(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beJ(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dc(C.fQP(g,B.a4J(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beq(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eG(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fB(e)
u.mJ(Math.sin(e)*0.3)
return B.dU(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnk(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9k(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8Y(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bue(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brf(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqo(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdL(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fAy:function fAy(d,e){this.a=d
this.b=e},
beJ:function beJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beq:function beq(d,e,f){this.b=d
this.c=e
this.a=f},
bnk:function bnk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9k:function b9k(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8Y:function b8Y(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bue:function bue(d,e,f){this.b=d
this.c=e
this.a=f},
brf:function brf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqo:function bqo(d,e,f){this.b=d
this.c=e
this.a=f},
bdL:function bdL(d,e,f){this.b=d
this.d=e
this.a=f},
d6V:function d6V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xq:function xq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fAB(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kY},
i2f(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fAC())
s=A.d.gJ(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gJ(B.aPI(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i2e(d,e){var w,v,u,t,s,r=d.db
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
agb(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agb=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a1<1>")
e=B.C(new B.a1(a4,new C.fsY(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fsZ(e),d,!0,!0,!1,A.ls,!1,!1,x.N),$async$agb)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gJ(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h_C(d),$async$agb)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KU(d,"Search states\u2026","",A.k_,"Choose state"),$async$agb)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fZw(s)
if(p==null)p=A.d.gJ(D.Qk)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fAD(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Cs(i,0.016,D.kZ,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cs(0,0.058,D.eK,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cs(0,0.058,D.eK,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kj("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kj("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fWr(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bz1("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0O("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0O("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0O("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0O("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bz1("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cs(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fWr(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bz1("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hfO("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hfO("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0O("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0O("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bz0("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bz0("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bz1("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Kj("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Kj("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bz0("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bz0("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bz1("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0O("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bz0("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0O("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fWr(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kj("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kj("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bs(null,null,null,null,D.o9,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rp(m,null,0,0,j,n,D.q8,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
fAC:function fAC(){},
fsY:function fsY(){},
fsZ:function fsZ(d){this.a=d},
fsW:function fsW(d){this.a=d},
fsX:function fsX(d){this.a=d},
hRX(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hRW(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mJ
case"lineThrough":return A.zt
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eJ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hhS(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Q6[w]
if(v.b===u)return v}return D.dd},
hOk(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cPf[w]
if(v.b===u)return v}return D.cQ},
hUK(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dd6[w]
if(v.b===u)return v}return D.be},
rp(d,e,f,g,h,i,j,k,l,m,n){return new C.lD(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h8x(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hQk(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hhS(d.h(0,"transition"))
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
n=B.cF(n,new C.cdf(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rp(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hQk(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aom[w]
if(v.b===u)return v}return D.mD},
Bs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i0(p,t,a1,h,i,w,a0==null?B.a([C.rp(4294967295,null,0,0,null,C.cC(),D.q8,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vy(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hMs(a6.h(0,"aspectRatio"))
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
else{f=J.b6(f,new C.cd2(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cd3(),x.N)
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
else{g=J.d9(g,x.f)
g=B.cF(g,new C.cd4(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.Bs(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rp(4294967295,a3,0,0,a3,C.cC(),D.q8,"","","",D.dd)],x.g):g,v,p,o,s)},
ku(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hMs(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.ddY[w]
if(v.b===u)return v}return D.Cw},
cC(){var w=Date.now(),v=$.j_
$.j_=v+1
return""+1000*w+"_"+v},
cdw(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
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
A.d.L(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cm,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
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
hE4(d){return A.d.dL(D.a2_,new C.cdx(d),new C.cdy())},
hE1(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ch(v,C.Vy(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fSW(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cds(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdr())
return u},
h8A(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdn()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqE(d){return C.hE_(d)},
hE_(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdq()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a20(m),$async$aqE)
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
return B.b(B.aA(),$async$aqE)
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
case 11:o=l.$1($.h8z.h(0,m))
n=C.fSW(C.fSW(j,r),o)
if(n.length===0){u=C.h8A(C.h8A(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqE,v)},
cdm(d){return C.hDZ(d)},
hDZ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdm)
case 7:r=f
q=r.t5("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
return B.i($async$cdm,v)},
b0w(d,e){return C.hE0(d,e)},
hE0(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0w=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0w)
case 6:s=g
q=s.t5("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L1(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b0w)
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
return B.i($async$b0w,v)},
Vz(d,e){return C.hE2(d,e)},
hE2(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vz=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h8y.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqE(a3),$async$Vz)
case 5:p=a6
case 4:w=6
return B.b(C.cdm(a3),$async$Vz)
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
e=B.C(new B.a1(new B.bc(n,m),new C.cdt(o),l),l.k("J.E"))
A.d.b0(e,new C.cdu())
$.h8y.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.C(new B.K(e,new C.cdv(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h8z.n(0,a0,r)
t=8
w=11
return B.b(B.agZ(a0,r),$async$Vz)
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
return B.b(B.aA(),$async$Vz)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vz)
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
return B.i($async$Vz,v)},
Is:function Is(d,e){this.a=d
this.b=e},
aqC:function aqC(d,e){this.a=d
this.b=e},
uA:function uA(d,e){this.a=d
this.b=e},
mt:function mt(d,e){this.a=d
this.b=e},
hy:function hy(d,e){this.a=d
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
cdg:function cdg(){},
cdh:function cdh(){},
cdf:function cdf(){},
i0:function i0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cd5:function cd5(){},
cd6:function cd6(){},
cd2:function cd2(){},
cd3:function cd3(){},
cd4:function cd4(){},
jF:function jF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdx:function cdx(d){this.a=d},
cdy:function cdy(){},
cds:function cds(d){this.a=d},
cdr:function cdr(){},
cdn:function cdn(){},
cdo:function cdo(){},
cdp:function cdp(){},
cdq:function cdq(){},
cdt:function cdt(d){this.a=d},
cdu:function cdu(){},
cdv:function cdv(){},
i2q(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fBa(e,v,d,B.aX(w))
w.$1(new C.fB6())
w.$1(new C.fB7())
w.$1(new C.fB8())
w.$1(new C.fB9())
return v},
fBa:function fBa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB6:function fB6(){},
fB7:function fB7(){},
fB8:function fB8(){},
fB9:function fB9(){},
b0t:function b0t(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdb:function cdb(d){this.a=d},
cda:function cda(){},
cdc:function cdc(){},
cdd:function cdd(d,e){this.a=d
this.b=e},
cde:function cde(d){this.a=d},
anN:function anN(d,e){this.c=d
this.a=e},
biy:function biy(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
dFE:function dFE(){},
aKA:function aKA(){},
cdj(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eSN)
u=!1
w=1
break}u=B.kS(!1,d,t,!1,null,A.a4B,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdj,v)},
hDX(d){var w=A.d.bd(D.GI,new C.cdk(d))
if(w<0)return!0
return w>=4},
hDY(d){var w=A.d.bd($.bDr(),new C.cdl(d))
if(w<0)return!0
return w>=5},
cdk:function cdk(d){this.a=d},
cdl:function cdl(d){this.a=d},
i45(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yt()
$.q9().pR(t,new C.fDZ(s),!0)
u=B.a([B.DB(v,A.qc,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f2d,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.nc,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fDZ:function fDZ(d){this.a=d},
i3H(){return C.fZS()},
i0E(){return C.bBo()},
i2H(){return C.fZJ()},
aON(d,e,f){var w=0,v=B.j(x.H),u
var $async$aON=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fD4(d,f),$async$aON)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aON,v)},
fD4(d,e){var w=0,v=B.j(x.H),u
var $async$fD4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzz
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fD5(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fD4)
case 2:return B.h(null,v)}})
return B.i($async$fD4,v)},
fD5:function fD5(d,e){this.a=d
this.b=e},
ad_:function ad_(d,e,f){this.c=d
this.d=e
this.a=f},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
ep3:function ep3(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
adh:function adh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0s(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0r(g,m,f,d,e,h,l,k,j,o,i,null)},
hkO(d){return B.cp(new C.fB5(d))},
fZU(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i3P(d){if(d===D.cm)return"None"
return C.fZU(d)},
bA4(d,e,f,g){return C.hUR(d,e,f,g)},
hUR(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fWK&&t.pv())t.eK()
$.fWK=!0
s.a=null
w=3
return B.b(B.hT(A.bi,!0,"Animation preview",d,new C.flA(s,e,g,f),null,A.eF,!0,x.H),$async$bA4)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fWK=!1
case 1:return B.h(u,v)}})
return B.i($async$bA4,v)},
fNo(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fNo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fZU(f)+" Slide transition preview"
s=s?Af.F1:A.vc
w=3
return B.b(C.bA4(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aIb(f,null),A.aq),null),r),$async$fNo)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fNo,v)},
hk6(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
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
w.fB((1-t)*1.2)
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
w.mJ((1-t)*0.8)
v=0.6+t*0.4
w.jI(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bCX(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fZU(f)+" Element animation preview"
s=s?Af.F1:A.vc
w=3
return B.b(C.bA4(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayV(f,null),A.aq),null),r),$async$bCX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCX,v)},
i3O(d){var w,v,u,t,s=$.afF.W(0,d)
if(s!=null){$.afF.n(0,d,s)
return s}w=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
$.afF.n(0,d,w)
v=$.fXx=$.fXx+w.length
u=B.a3($.afF).k("cu<1>")
for(;;){if(!(v>41943040&&$.afF.a>1))break
t=new B.cu($.afF,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.afF.W(0,t.gT(0)).length
$.fXx=v}return w},
i3v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kV(0,d),j=B.C(k,B.a3(k).k("J.E"))
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
v.push(B.de(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2_(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.k_(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.gdO()*0.18
m.F(new B.iV(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bF())
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
if(o!=null)p.bz(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bz(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bF())
return v
case"diamond":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
m.F(new B.ap(e.c,e.gbP().b))
m.F(new B.ap(e.gbP().a,e.d))
m.F(new B.ap(e.a,e.gbP().b))
m.F(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.b92(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.o_(e))
return m}},
fyF(d,e,f){return B.cp(new C.fyG(D.eLs.t(0,d),d,f,e))},
b0r:function b0r(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cd9:function cd9(d){this.a=d},
cd8:function cd8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd7:function cd7(){},
b0o:function b0o(d,e){this.b=d
this.a=e},
fB5:function fB5(d){this.a=d},
fB4:function fB4(d,e){this.a=d
this.b=e},
flA:function flA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fly:function fly(d){this.a=d},
flz:function flz(d,e){this.a=d
this.b=e},
aIb:function aIb(d,e){this.c=d
this.a=e},
btL:function btL(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
f3K:function f3K(d,e,f){this.a=d
this.b=e
this.c=f},
aIO:function aIO(d,e){this.b=d
this.a=e},
UB:function UB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biL:function biL(d,e){var _=this
_.d=$
_.br$=d
_.a8$=e
_.c=_.a=null},
dRB:function dRB(d){this.a=d},
dRA:function dRA(d){this.a=d},
dRz:function dRz(d){this.a=d},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd1:function cd1(d){this.a=d},
cd0:function cd0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayV:function ayV(d,e){this.c=d
this.a=e},
bde:function bde(){this.d=0
this.c=this.a=null},
d49:function d49(d){this.a=d},
d48:function d48(d){this.a=d},
a7m:function a7m(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjp:function bjp(d,e){var _=this
_.d=null
_.br$=d
_.a8$=e
_.c=_.a=null},
ecj:function ecj(d,e,f){this.a=d
this.b=e
this.c=f},
aZn:function aZn(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
beo:function beo(d,e,f){this.b=d
this.c=e
this.a=f},
bpl:function bpl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTS:function eTS(){},
fyG:function fyG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bql:function bql(d,e,f){this.b=d
this.c=e
this.a=f},
aKO:function aKO(){},
aLj:function aLj(){},
aMG:function aMG(){},
fC5(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fC5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x1.c5().LI(D.dbc,A.tH,!0),$async$fC5)
case 3:r=e
if(r==null||J.cm(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i3p(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fC5,v)},
i3p(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7F(d,new B.a_C(A.cS.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hWt(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7F(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Kv(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7F(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hWt(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwb().cIi(B.r9(d,A.hU,o,o),o,o,!1).cK1(0,"word/document.xml")
if(n==null)return""
w=n.cS3()
v=A.c6.Kv(0,w==null?$.hn4():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kV(0,r)
p=A.a.i(B.cF(q,new C.foq(),B.a3(q).k("J.E"),t).fY(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7F:function a7F(d,e,f){this.a=d
this.b=e
this.c=f},
foq:function foq(){},
hE3(d,e,f,g,h,i,j,k,l){return new C.NC(l,e,d,g,f,i,h,j,k,null)},
NC:function NC(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDL:function aDL(d,e,f,g,h,i,j,k,l){var _=this
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
_.br$=k
_.a8$=l
_.c=_.a=null},
evf:function evf(d){this.a=d},
evd:function evd(){},
eve:function eve(d){this.a=d},
erD:function erD(){},
erE:function erE(){},
erF:function erF(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
et1:function et1(){},
et2:function et2(){},
er0:function er0(){},
eul:function eul(d){this.a=d},
evb:function evb(d,e){this.a=d
this.b=e},
etb:function etb(d,e){this.a=d
this.b=e},
euZ:function euZ(d){this.a=d},
ev_:function ev_(){},
ev0:function ev0(){},
ev1:function ev1(d){this.a=d},
ev2:function ev2(){},
eqp:function eqp(d){this.a=d},
evc:function evc(){},
esk:function esk(d,e){this.a=d
this.b=e},
eqn:function eqn(d){this.a=d},
eqo:function eqo(d){this.a=d},
esH:function esH(d){this.a=d},
esI:function esI(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d){this.a=d},
esj:function esj(){},
esi:function esi(d){this.a=d},
esg:function esg(){},
esf:function esf(d){this.a=d},
esh:function esh(){},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
esq:function esq(d){this.a=d},
esl:function esl(d){this.a=d},
esm:function esm(d){this.a=d},
esn:function esn(d){this.a=d},
eso:function eso(d){this.a=d},
esp:function esp(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
eqr:function eqr(){},
eqs:function eqs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esC:function esC(){},
esD:function esD(d,e){this.a=d
this.b=e},
esA:function esA(d,e,f){this.a=d
this.b=e
this.c=f},
esB:function esB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esu:function esu(d,e,f){this.a=d
this.b=e
this.c=f},
esv:function esv(d,e,f){this.a=d
this.b=e
this.c=f},
esw:function esw(d){this.a=d},
esx:function esx(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esz:function esz(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esF:function esF(d){this.a=d},
esG:function esG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esE:function esE(d){this.a=d},
esX:function esX(){},
esY:function esY(){},
esZ:function esZ(){},
et_:function et_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esU:function esU(d){this.a=d},
esW:function esW(){},
esV:function esV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
esS:function esS(d,e,f){this.a=d
this.b=e
this.c=f},
esT:function esT(d,e){this.a=d
this.b=e},
et0:function et0(){},
ess:function ess(d,e){this.a=d
this.b=e},
eqI:function eqI(){},
eqJ:function eqJ(d,e,f){this.a=d
this.b=e
this.c=f},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqH:function eqH(d){this.a=d},
et6:function et6(d){this.a=d},
et5:function et5(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
et3:function et3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et7:function et7(d,e){this.a=d
this.b=e},
epm:function epm(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqE:function eqE(d){this.a=d},
etf:function etf(d,e,f){this.a=d
this.b=e
this.c=f},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
ete:function ete(d,e,f){this.a=d
this.b=e
this.c=f},
eqq:function eqq(d){this.a=d},
er1:function er1(){},
euX:function euX(d,e){this.a=d
this.b=e},
euY:function euY(d,e,f){this.a=d
this.b=e
this.c=f},
eum:function eum(d,e,f){this.a=d
this.b=e
this.c=f},
epn:function epn(d){this.a=d},
epk:function epk(d,e){this.a=d
this.b=e},
epa:function epa(d,e){this.a=d
this.b=e},
ep7:function ep7(d){this.a=d},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep8:function ep8(d,e){this.a=d
this.b=e},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqB:function eqB(d){this.a=d},
epP:function epP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epQ:function epQ(d,e){this.a=d
this.b=e},
epU:function epU(d,e){this.a=d
this.b=e},
epV:function epV(d){this.a=d},
epS:function epS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epT:function epT(d){this.a=d},
epR:function epR(){},
epO:function epO(d,e,f){this.a=d
this.b=e
this.c=f},
esR:function esR(d,e){this.a=d
this.b=e},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d,e){this.a=d
this.b=e},
ev7:function ev7(d){this.a=d},
ev8:function ev8(d,e,f){this.a=d
this.b=e
this.c=f},
ev4:function ev4(d){this.a=d},
euC:function euC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euB:function euB(d,e,f){this.a=d
this.b=e
this.c=f},
euA:function euA(){},
euz:function euz(d,e,f){this.a=d
this.b=e
this.c=f},
euy:function euy(d,e){this.a=d
this.b=e},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
eut:function eut(d){this.a=d},
euu:function euu(d){this.a=d},
eux:function eux(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euw:function euw(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
eru:function eru(d,e){this.a=d
this.b=e},
eun:function eun(){},
euW:function euW(d,e){this.a=d
this.b=e},
euU:function euU(d){this.a=d},
euV:function euV(d){this.a=d},
epf:function epf(d,e){this.a=d
this.b=e},
epd:function epd(d){this.a=d},
epe:function epe(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
eph:function eph(d,e,f){this.a=d
this.b=e
this.c=f},
epl:function epl(d,e){this.a=d
this.b=e},
epc:function epc(d,e,f){this.a=d
this.b=e
this.c=f},
epb:function epb(d){this.a=d},
etc:function etc(d,e,f){this.a=d
this.b=e
this.c=f},
ev3:function ev3(d,e,f){this.a=d
this.b=e
this.c=f},
ery:function ery(d,e,f){this.a=d
this.b=e
this.c=f},
erx:function erx(){},
epY:function epY(d,e,f){this.a=d
this.b=e
this.c=f},
epZ:function epZ(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
er_:function er_(d,e){this.a=d
this.b=e},
epi:function epi(d,e){this.a=d
this.b=e},
epr:function epr(d){this.a=d},
eps:function eps(d,e){this.a=d
this.b=e},
ept:function ept(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
epE:function epE(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epM:function epM(){},
epN:function epN(){},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d){this.a=d},
epB:function epB(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e,f){this.a=d
this.b=e
this.c=f},
eqY:function eqY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqX:function eqX(d,e,f){this.a=d
this.b=e
this.c=f},
eqW:function eqW(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
eq1:function eq1(d){this.a=d},
eq0:function eq0(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d,e){this.a=d
this.b=e},
eqF:function eqF(d){this.a=d},
esQ:function esQ(d,e){this.a=d
this.b=e},
esP:function esP(d,e){this.a=d
this.b=e},
esO:function esO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esM:function esM(d){this.a=d},
esN:function esN(d,e){this.a=d
this.b=e},
esK:function esK(){},
esL:function esL(){},
euo:function euo(){},
eup:function eup(d,e){this.a=d
this.b=e},
euq:function euq(){},
eur:function eur(d){this.a=d},
eus:function eus(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
eqt:function eqt(){},
equ:function equ(){},
eqv:function eqv(){},
eqy:function eqy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqw:function eqw(d,e,f){this.a=d
this.b=e
this.c=f},
erZ:function erZ(d){this.a=d},
erY:function erY(){},
es_:function es_(d,e){this.a=d
this.b=e},
es0:function es0(d,e){this.a=d
this.b=e},
erX:function erX(d){this.a=d},
es1:function es1(d,e){this.a=d
this.b=e},
erW:function erW(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
es3:function es3(d,e){this.a=d
this.b=e},
erU:function erU(d){this.a=d},
es4:function es4(d,e){this.a=d
this.b=e},
erT:function erT(d,e){this.a=d
this.b=e},
es5:function es5(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
es6:function es6(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erK:function erK(d,e){this.a=d
this.b=e},
erL:function erL(d){this.a=d},
erM:function erM(d){this.a=d},
erJ:function erJ(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
erO:function erO(d,e){this.a=d
this.b=e},
erH:function erH(d){this.a=d},
erP:function erP(d,e){this.a=d
this.b=e},
erG:function erG(d){this.a=d},
erQ:function erQ(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqU:function eqU(d){this.a=d},
ev9:function ev9(d){this.a=d},
eva:function eva(d){this.a=d},
es9:function es9(d,e){this.a=d
this.b=e},
es8:function es8(d,e){this.a=d
this.b=e},
es7:function es7(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
esb:function esb(d){this.a=d},
ety:function ety(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
etL:function etL(d){this.a=d},
etW:function etW(d){this.a=d},
eu6:function eu6(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
euh:function euh(d,e){this.a=d
this.b=e},
etB:function etB(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etF:function etF(d){this.a=d},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etQ:function etQ(d){this.a=d},
etR:function etR(d){this.a=d},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
eto:function eto(d){this.a=d},
etV:function etV(d){this.a=d},
etw:function etw(d){this.a=d},
etX:function etX(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
etY:function etY(d,e){this.a=d
this.b=e},
etZ:function etZ(d,e){this.a=d
this.b=e},
etu:function etu(d,e,f){this.a=d
this.b=e
this.c=f},
etk:function etk(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
eui:function eui(d,e){this.a=d
this.b=e},
euk:function euk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euj:function euj(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
ett:function ett(d,e,f){this.a=d
this.b=e
this.c=f},
etj:function etj(d,e,f){this.a=d
this.b=e
this.c=f},
eth:function eth(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
eu1:function eu1(d){this.a=d},
etr:function etr(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
etq:function etq(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d,e){this.a=d
this.b=e},
etp:function etp(d){this.a=d},
eua:function eua(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
eub:function eub(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
euc:function euc(d,e){this.a=d
this.b=e},
etl:function etl(d){this.a=d},
epX:function epX(d,e,f){this.a=d
this.b=e
this.c=f},
epW:function epW(d,e){this.a=d
this.b=e},
euF:function euF(d,e){this.a=d
this.b=e},
euE:function euE(d,e){this.a=d
this.b=e},
euG:function euG(d,e){this.a=d
this.b=e},
euD:function euD(d,e){this.a=d
this.b=e},
er4:function er4(d,e){this.a=d
this.b=e},
er3:function er3(d){this.a=d},
er5:function er5(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
erC:function erC(){},
erB:function erB(){},
euS:function euS(d){this.a=d},
euR:function euR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euQ:function euQ(d,e){this.a=d
this.b=e},
euL:function euL(d,e){this.a=d
this.b=e},
euP:function euP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euM:function euM(d,e){this.a=d
this.b=e},
euH:function euH(d){this.a=d},
euI:function euI(d){this.a=d},
euJ:function euJ(d){this.a=d},
euK:function euK(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
euO:function euO(d,e){this.a=d
this.b=e},
euT:function euT(d){this.a=d},
eqm:function eqm(d){this.a=d},
eql:function eql(d,e,f){this.a=d
this.b=e
this.c=f},
eqk:function eqk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq9:function eq9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqa:function eqa(d,e){this.a=d
this.b=e},
eqb:function eqb(d,e){this.a=d
this.b=e},
eqc:function eqc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq8:function eq8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqf:function eqf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqe:function eqe(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq7:function eq7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqh:function eqh(d,e){this.a=d
this.b=e},
eq6:function eq6(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e){this.a=d
this.b=e},
eq5:function eq5(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
esd:function esd(d){this.a=d},
esc:function esc(d){this.a=d},
ese:function ese(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
erj:function erj(d,e){this.a=d
this.b=e},
erh:function erh(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
ero:function ero(d,e,f){this.a=d
this.b=e
this.c=f},
erc:function erc(d,e){this.a=d
this.b=e},
erp:function erp(d,e,f){this.a=d
this.b=e
this.c=f},
erb:function erb(d,e){this.a=d
this.b=e},
erq:function erq(d,e){this.a=d
this.b=e},
era:function era(d,e,f){this.a=d
this.b=e
this.c=f},
er7:function er7(d,e){this.a=d
this.b=e},
err:function err(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
er8:function er8(d,e,f){this.a=d
this.b=e
this.c=f},
er6:function er6(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
erw:function erw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ep5:function ep5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eta:function eta(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d,e){this.a=d
this.b=e},
aeO:function aeO(d,e,f){this.a=d
this.b=e
this.c=f},
ayh:function ayh(d,e){this.c=d
this.a=e},
bc0:function bc0(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
d_L:function d_L(d){this.a=d},
d_K:function d_K(d){this.a=d},
bce:function bce(d,e){this.c=d
this.a=e},
d06:function d06(d){this.a=d},
d07:function d07(d){this.a=d},
Jt:function Jt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc_:function bc_(){this.d=!1
this.c=this.a=null},
d_I:function d_I(d){this.a=d},
d_E:function d_E(d){this.a=d},
d_J:function d_J(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_G:function d_G(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_5:function a_5(d,e,f){this.c=d
this.d=e
this.a=f},
aDO:function aDO(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.br$=e
_.a8$=f
_.c=_.a=null},
evQ:function evQ(){},
evG:function evG(d){this.a=d},
evP:function evP(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d,e){this.a=d
this.b=e},
evE:function evE(d){this.a=d},
evF:function evF(d,e,f){this.a=d
this.b=e
this.c=f},
evN:function evN(){},
evO:function evO(d){this.a=d},
evJ:function evJ(d){this.a=d},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evM:function evM(d){this.a=d},
evR:function evR(d,e,f){this.a=d
this.b=e
this.c=f},
evT:function evT(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
JA:function JA(d,e){this.c=d
this.a=e},
bqQ:function bqQ(d,e){this.b=d
this.a=e},
bgT:function bgT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgS:function bgS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJv:function aJv(){},
aLx:function aLx(){},
bwz:function bwz(){},
aLy:function aLy(){},
fE_(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fE_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x1.c5().LI(B.a(["pdf"],x.s),A.tH,!0),$async$fE_)
case 3:q=e
if(q==null||J.cm(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo6(s,"data:application/pdf;base64,"+A.cS.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fE_,v)},
i4_(d){var w,v,u,t,s,r
try{w=B.jq(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kV(0,w).gM(0)
if(t>0){s=J.aQ9(t,1,200)
return s}}catch(r){}return 1},
fDR(d){return C.i3Z(d)},
i3Z(d){var w=0,v=B.j(x.T),u
var $async$fDR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDR,v)},
bC9(d,e,f,g){return C.i48(d,e,f,g)},
i48(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bC9=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e8(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hlo(b9,new B.ar(r,q))
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
g=new B.qV()
f=B.D6(g,null)
a7=B.N()
a7.r=A.qG.gp(0)
f.aY(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fB
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
return B.b(a3.zd(800,h),$async$bC9)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.fY),$async$bC9)
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
return B.i($async$bC9,v)},
aPn(d,e,f){return C.i3X(d,e,f)},
i3X(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPn=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aA:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahd(d,e,f,new C.fDP(r,q),q,"Sign document"),$async$aPn)
case 3:if(!new B.e8(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bC9(q,t,r.b,r.c),$async$aPn)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0v(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPn,v)},
i46(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.heB(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.heB(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b1(A.a.aT(A.o.fT(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b1(A.a.aT(A.o.fT(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hed(q.ay)+";border:2px solid "+C.hed(q.ch)+'"></div>'
break
case 5:l=C.fYL(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj4()
if(p==null)p=A.awv
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
hed(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
heB(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC7(d,e){var w=0,v=B.j(x.H)
var $async$bC7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fDY(e,C.i46(e),d),d,null,!0,!0,x.H),$async$bC7)
case 2:return B.h(null,v)}})
return B.i($async$bC7,v)},
bC8(){var w=0,v=B.j(x.T),u,t,s
var $async$bC8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gm(92,2400),$async$bC8)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fDR(s),$async$bC8)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC8,v)},
aPo(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fZZ(d),$async$aPo)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fGj(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPo,v)},
h8w(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0v:function b0v(d,e,f){this.a=d
this.b=e
this.c=f},
fDP:function fDP(d,e){this.a=d
this.b=e},
fDY:function fDY(d,e,f){this.a=d
this.b=e
this.c=f},
fDV:function fDV(d){this.a=d},
fDW:function fDW(d,e,f){this.a=d
this.b=e
this.c=f},
fDX:function fDX(d,e,f){this.a=d
this.b=e
this.c=f},
i3Y(d){return C.ku(d.w)},
i44(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i5P()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yr(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hr5()
if(w.b.test(u))return u
return null},
hlq(d,e,f){var w,v,u=C.hzG(d),t=$.pp()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i4a(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fb(w,d.b);v.C();){u=w.gT(w).y
t=C.yr(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fDN(d,e){var w,v=d.y,u=C.yr(v==null?"":v)
if(u!=null)return d.y=u
w=C.i4a(new B.a1(e,new C.fDO(d),B.U(e).k("a1<1>")))
v=d.x
return d.y=C.hlq(v==null?"":v,null,w)},
i49(d){var w,v
if(d.length!==1)return null
w=A.d.gJ(d)
if(!C.ku(w.w))return null
v=w.y
return C.yr(v==null?"":v)},
hE5(){var w,v=$.pp(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"SL"+A.d.fY(u)},
VC(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VC)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f3("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bH),$async$VC)
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
return B.i($async$VC,v)},
VD(d){return C.hE6(d)},
hE6(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VD)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hD("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VD)
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
return B.i($async$VD,v)},
a7H(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7H=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7H)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VC(),$async$a7H)
case 4:s=a6
r=C.yr(a2==null?"":a2)
if(r==null)r=a3!=null?C.hlq(a3,null,A.Il):null
q=x.N
p=B.aX(q)
for(o=J.dm(s),n=J.aV(o.gi3(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yr(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
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
f=C.yr(J.k(q==null?"":q))
if(f==null)f=C.h8B(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VD(s),$async$a7H)
case 7:u=new B.aFe(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hE5()
n=r==null
d=n?C.h8B(p):r
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
return B.b(C.VD(s),$async$a7H)
case 8:u=new B.aFe(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
h8B(d){var w,v,u=$.pp()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aC(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqG(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqG)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VC(),$async$aqG)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bn(t,new C.cdz(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VD(t),$async$aqG)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqG,v)},
aqF(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yr(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqF)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VC(),$async$aqF)
case 6:t=o.jx(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yr(J.k(q==null?"":q))===p){u=C.a7G(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqF,v)},
a7G(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7G=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7G)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VC(),$async$a7G)
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
return B.b(C.VD(p),$async$a7G)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7G,v)},
i43(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.C(new B.K(d,new C.fDU(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fE1(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i43(d==null?B.a([],x.D):d,f,g),null)},
fE0(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fE0=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7H(h,d,e,f,g),$async$fE0)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yr(e==null?"":e)
u=new B.aF1(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.kb.gcw().aJ(t)
u=new B.aF1(C.yr(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fE0,v)},
h_0(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
i47(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h_0(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b1(v,u))
if(C.h_0(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b1(v,s))
if(C.h_0(t))return t}}return null},
fDQ(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c6.ca(0,A.cG.aJ(J.mE(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hNR(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agY(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqF(t[1]),$async$agY)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDQ(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yr(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqF(r),$async$agY)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDQ(s)
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
return B.b(C.a7G(t[1]),$async$agY)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDQ(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fDQ(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agY,v)},
hNR(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sw.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fZY(C.Vy(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cF(t,new C.fbT(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
fZY(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.j_
$.j_=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vy(B.a2(o,x.N,x.z))
if(e&&C.ku(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bQ(144e8).ac()
return p},
bBT(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gl(),$async$bBT)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agY(s),$async$bBT)
case 4:t=e
u=J.cm(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBT,v)},
fMD(d){var w=0,v=B.j(x.T),u,t
var $async$fMD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hT(D.Wg,!0,"Dismiss",d,new C.fME(),new C.fMF(),A.F_,!0,x.N),$async$fMD)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eR_)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMD,v)},
i7W(d,e,f,g,h){return B.a5(d,!1).c8(B.ea(new C.fMG(h,e,g,f),!0,null,x.H))},
fDO:function fDO(d){this.a=d},
cdz:function cdz(d){this.a=d},
fDU:function fDU(){},
fbT:function fbT(d){this.a=d},
fME:function fME(){},
fMF:function fMF(){},
fMG:function fMG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VA:function VA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDM:function aDM(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
evm:function evm(){},
evi:function evi(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
evk:function evk(d){this.a=d},
evn:function evn(d){this.a=d},
evo:function evo(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evq:function evq(d){this.a=d},
evt:function evt(d){this.a=d},
evp:function evp(d){this.a=d},
evu:function evu(d,e){this.a=d
this.b=e},
evh:function evh(d,e){this.a=d
this.b=e},
evg:function evg(d,e){this.a=d
this.b=e},
VB:function VB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjL:function bjL(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evv:function evv(d,e){this.a=d
this.b=e},
evw:function evw(d){this.a=d},
evx:function evx(){},
evy:function evy(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
aDJ:function aDJ(d){this.a=d},
aDK:function aDK(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ep_:function ep_(d){this.a=d},
eoZ:function eoZ(){},
ep0:function ep0(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoV:function eoV(){},
eoX:function eoX(d){this.a=d},
eoY:function eoY(d){this.a=d},
bu5:function bu5(){},
aqH:function aqH(d){this.a=d},
aDN:function aDN(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evB:function evB(d){this.a=d},
evA:function evA(d){this.a=d},
hT0(){var w,v,u,t
for(v=0;v<4;++v){w=D.d0s[v]
try{if(Ac.bWd(w)){u=w
return u}}catch(t){}}return null},
QO(d,e){return C.i0P(d,e)},
i0P(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QO=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hT0()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o9?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qs(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gJ(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.og(new C.fy8(c2,b7,o),!1,!1)
b6.lN(0,l)
b9=x.H
B.ca(null,A.da,!1,null,new C.fy9(n,m),c6,null,!0,!0,b9)
k=new C.fyd(b7)
j=new C.fye()
i=null
t=4
b3=c2.a
h=Aj.aRE(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fPk(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWx(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hl.yg(i,"dataavailable",new C.fya(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.Hl.yg(i,"stop",new C.fyb(d))
J.ahz(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QO)
case 8:w=7
return B.b(c5.$1(d0),$async$QO)
case 7:a0=d0
J.fPm(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahz(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahz(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QO)
case 15:w=14
return B.b(c5.$1(d0),$async$QO)
case 14:a0=d0
case 13:J.fPm(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahz(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bQ(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fPm(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QO)
case 18:w=16
break
case 17:J.ahz(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahz(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nT),$async$QO)
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
J.KZ(b0)
J.lS(b0)
B.bN(A.nS,new C.fyc(a7),b9)
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
J.aQd(c3,0)
c3=n
c3.shU(b3)
J.aQd(c3,0)
c3=m
c3.shU(b3)
J.aQd(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QO,v)},
fy8:function fy8(d,e,f){this.a=d
this.b=e
this.c=f},
fy7:function fy7(){},
fy9:function fy9(d,e){this.a=d
this.b=e},
fyd:function fyd(d){this.a=d},
fye:function fye(){},
fya:function fya(d){this.a=d},
fyb:function fyb(d){this.a=d},
fyc:function fyc(d){this.a=d},
buh:function buh(d,e,f){this.c=d
this.d=e
this.a=f},
f6b:function f6b(){},
f6c:function f6c(){},
cdW(d){var w=0,v=B.j(x.at),u,t,s
var $async$cdW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqR(d,A.za),$async$cdW)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bA(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdW,v)},
cdV(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7n:function a7n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bju:function bju(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eda:function eda(d){this.a=d},
ed8:function ed8(d){this.a=d},
ed9:function ed9(d,e){this.a=d
this.b=e},
a8f:function a8f(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a8g:function a8g(d,e){this.a=d
this.b=e},
b28:function b28(){},
cg7:function cg7(){},
cg8:function cg8(){},
cg9:function cg9(d,e,f,g,h,i,j,k,l){var _=this
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
hs5(d){return new C.ahR(d)},
a2s:function a2s(){},
ahR:function ahR(d){this.a=d},
aQy:function aQy(){},
aw9:function aw9(d,e){this.d=d
this.b=e
this.a=null},
aS2:function aS2(d){this.b=d
this.a=null},
fth(d,e){var w=0,v=B.j(x.H)
var $async$fth=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxs().Lr(d,e),$async$fth)
case 2:B.fGp()
return B.h(null,v)}})
return B.i($async$fth,v)},
hiI(d,e){return(A.rf[(d^e)&255]^A.o.aA(d,8))>>>0},
fqL(d,e,f,g,h,i){var w=C.hYa(d,A.dc,f,null,A.cX,g,h,i)
return w},
hkz(d){var w=F.hlh(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hzG(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oZ.h(0,w)
if(v!=null)return v
for(u=A.oZ.gdK(A.oZ),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hkH(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<43;++w)v+="- "+D.cRe[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bA1(d,e){return C.hUM(d,e)},
hUM(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bA1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hN([d],"application/pdf")
n=x.z
q=B.aTH(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jX(o,"share",[p]),x.H),$async$bA1)
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
return B.i($async$bA1,v)},
fZS(){var w=0,v=B.j(x.y),u,t,s
var $async$fZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fj3
s=$.bzz
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bA1(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZS,v)},
bBo(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fj3
l=$.bzz
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hfh()?3:4
break
case 3:w=5
return B.b(C.bA1(m,k),$async$bBo)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzA
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
J.KZ(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBo)
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
return B.i($async$bBo,v)},
fZJ(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fZJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzA
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
return B.i($async$fZJ,v)},
h__(d,e){var w=0,v=B.j(x.H),u,t
var $async$h__=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hN([d],"text/html"))
t.toString
u=window
u.toString
A.lv.uA(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h__,v)},
b15(d,e){var w=0,v=B.j(x.y),u
var $async$b15=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b17(d,e),$async$b15)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b16(d),$async$b15)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b15,v)}},D,N,H,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,K,Aq,A_,O,A0,Aa,L,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,S,T,AA,M,A2,A3,A4
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
t=C.tH(t,v)
return new C.nP(t===0?!1:w,v,t)},
bKj(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CL()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tH(w,u)
return new C.nP(r===0?!1:s,u,r)},
bKO(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CL()
w=o-d
if(w<=0)return p.a?$.h0o():$.CL()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tH(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2f())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bKj(v)
u=w+v+1
t=new Uint16Array(u)
C.hbS(r.b,w,e,t)
w=r.a
s=C.tH(u,t)
return new C.nP(s===0?!1:w,t,s)},
mp(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bKO(v)
t=w-v
if(t<=0)return n.a?$.h0o():$.CL()
s=n.b
r=new Uint16Array(t)
C.hJL(s,w,e,r)
w=n.a
q=C.tH(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aB(0,$.a2f())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2f())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cE1(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7x(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7x(t,e)
if(s===0)return $.CL()
if(r===0)return t.a===e?t:t.uU(0)
w=s+1
v=new Uint16Array(w)
C.hJJ(t.b,s,d.b,r,v)
u=C.tH(w,v)
return new C.nP(u===0?!1:e,v,u)},
H0(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CL()
w=d.c
if(w===0)return t.a===e?t:t.uU(0)
v=new Uint16Array(s)
C.b9d(t.b,s,d.b,w,v)
u=C.tH(s,v)
return new C.nP(u===0?!1:e,v,u)},
bxk(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tH(r,u)
return new C.nP(!1,u,s)},
bxj(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tH(u,r)
return new C.nP(!1,r,v)},
bxl(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tH(p,m)
return new C.nP(s!==0,m,s)},
Ul(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CL()
w=t.a
if(w===e.a){if(w){w=$.a2f()
return t.H0(w,!0).bxl(e.H0(w,!0),!0).a7x(w,!0)}return t.bxk(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxj(v.H0($.a2f(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7x(e,v)
if(C.cE1(u.b,t,e.b,w)>=0)return u.H0(e,v)
return e.H0(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uU(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7x(e,v)
if(C.cE1(u.b,t,e.b,w)>=0)return u.H0(e,v)
return e.H0(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CL()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hbT(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tH(w,t)
return new C.nP(q===0?!1:r,t,q)},
bKi(d){var w,v,u,t
if(this.c<d.c)return $.CL()
this.aQo(d)
w=$.fUQ.c5()-$.awT.c5()
v=C.fUS($.fUP.c5(),$.awT.c5(),$.fUQ.c5(),w)
u=C.tH(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uU(0):t},
cm3(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQo(d)
w=C.fUS($.fUP.c5(),0,$.awT.c5(),$.awT.c5())
v=C.tH($.awT.c5(),w)
u=new C.nP(!1,w,v)
if($.fUR.c5()>0)u=u.mp(0,$.fUR.c5())
return t.a&&u.c>0?u.uU(0):u},
aQo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hbP&&d.c===$.hbR&&g.b===$.hbO&&d.b===$.hbQ)return
w=d.b
v=d.c
u=16-A.o.gajt(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hbN(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hbN(g.b,f,u,r)}else{r=C.fUS(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fUT(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cE1(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9d(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9d(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hJK(p,r,i);--o
C.hbT(h,j,0,r,o,s)
if(r[i]<h){m=C.fUT(j,s,o,n)
C.b9d(r,l,n,m,r)
while(--h,r[i]<h)C.b9d(r,l,n,m,r)}--i}$.hbO=g.b
$.hbP=f
$.hbQ=w
$.hbR=v
$.fUP.b=r
$.fUQ.b=l
$.awT.b=s
$.fUR.b=u},
gX(d){var w,v,u,t=new C.cE2(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cE3().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nP&&this.aL(0,e)===0},
t6(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uO(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajt(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cE4(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cE5(w)
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
while(v.c>1){u=$.hp1()
if(u.c===0)B.ba(D.b2c)
t=v.cm3(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKi(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fY(0)},
$iaRh:1,
$ihH:1}
C.aQI.prototype={
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
cK1(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gJ(d){return A.d.gJ(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k0(w,w.length,B.U(w).k("k0<1>"))}}
C.Rq.prototype={
cS3(){var w,v
if(this.as==null)this.bbs()
w=this.as
v=w==null?null:w.ao9()
return v==null?null:v.eG()},
bbs(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ao9().eG()
this.as=new C.bN9(v)}},
gZ(d){return this.at}}
C.a3r.prototype={
a5(){return"CompressionType."+this.b}}
C.bGY.prototype={
es(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.yK[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fF(u,t)&A.yK[d])
s.c=t}return v}}
C.bFk.prototype={
cIh(d,e){var w,v,u,t,s,r=this,q=new C.bGY(d)
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
if(t!==D.dgg[u])v=!1
if(t!==D.cV8[u])w=!1
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
u[w]=l}c9.fr=B.c2(6,$.hn8(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.es(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.es(1)===0)break
i=d3.es(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hn7()
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
b2=A.o.E(a8,16)
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
C.cwc.prototype={
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
s=new C.b7U()
s.cS2(0,u,e,f)
q.push(s)}},
ckJ(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7a(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rV()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rV()
d.aU()
d.aU()
d.aK()
d.aK()
d.rV()
d.rV()
u=d.rV()
t=d.rV()
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
r=d.a7a(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alm(A.hU)
o.aL8(r.eG(),A.hU,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwa.prototype={}
C.awx.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwd.prototype={
aGR(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aD0.h(0,e.aU())
o.c=w==null?D.Lk:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amY(v)
o.y=e.hd(u).eG()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aTh:D.Dp
o.ay=f
o.Q=e.hd(t)
if(o.at!==D.Dp&&u>2){w=o.y
w.toString
s=B.r9(w,A.hU,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amY(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aTi
o.ax=new C.cwa(r,q)
w=D.aD0.h(0,q)
o.c=w==null?D.Lk:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkW().length},
ao9(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r9(new Uint8Array(0),A.hU,q,q)
w=r.at
if(w!==D.Dp)if(p.gM(0)<=0)r.at=D.Dp
else{if(w===D.aTh){p=r.bIB(p)
r.Q=p}else if(w===D.aTi){p=r.bIe(p)
r.Q=p}r.at=D.Dp}w=r.c
if(w===D.afH){v=p.c
u=B.di()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pn.Bj(p.eG(),!0,!1)
else{t=B.a84(A.hU,r.w)
p=r.Q
p.toString
A.pn.a3m(p,t,!0,!1)
u.b=t.GB()}r.Q.c=v
return B.r9(u.bf(),A.hU,q,q)}else if(w===D.afI){s=B.a84(A.hU,32768)
p=r.Q
v=p.c
C.hsg().cIh(p,s)
u=s.GB()
r.Q.c=v
return B.r9(u,A.hU,q,q)}else return B.r9(p.eG(),A.hU,q,q)},
bkW(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eG()},
u(d){return this.x},
b7m(d){var w=this.ch,v=C.Jp(C.hiI(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Ul(0,C.Jp(255)))
w[1]=v
w[1]=v.aF(0,C.Jp(134775813)).ad(0,C.Jp(1)).Ul(0,C.Jp(4294967295))
w[2]=C.Jp(C.hiI(w[2].N(0),w[1].mp(0,24).N(0)))},
aPN(){var w=(this.ch[2].Ul(0,C.Jp(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bIB(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r9(new Uint8Array(0),A.hU,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7m(u[v.c++]^r.aPN())}t=r.Q.eG()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPN()
r.b7m(s)
u&2&&B.aj(t)
t[w]=s}return B.r9(t,A.hU,q,q)},
bIe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hd(8).eG()
v=16}else if(k===2){w=d.hd(12).eG()
v=24}else{w=d.hd(16).eG()
v=32}u=d.hd(2).eG()
t=d.hd(d.gM(0)-10)
s=d.hd(10)
r=t.eG()
k=this.ay
k.toString
q=C.hJq(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.hbh(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDV(k,new Uint8Array(16),p)
k=x.S
m=J.a4R(0,k)
m=n.r=new C.cfX(m)
m.c=!0
m.b=m.bke(!0,new C.ase(p))
if(m.c)m.d=B.bn(D.o6,!0,k)
else m.d=B.bn(D.yC,!0,k)
l=C.h9u(C.h9w(),64)
l.bdL(new C.ase(o))
n.w=l
n.cRB(r,0,r.length)
k=s.eG()
m=n.x
m===$&&B.c()
if(!C.hbh(k,m))throw B.V(B.fl("macs don't match"))
return B.r9(r,A.hU,null,null)}}
C.b7U.prototype={
cS2(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amY(w)
if(v>0){t=e.hd(v).eG()
n.ax=t
if(v>=4){s=B.r9(t,A.hU,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a7a(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rV()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rV()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rV()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amY(u)
f.c=n.as
t=new C.cwd(D.Lk,n,D.Dp,B.a([C.Jp(0),C.Jp(0),C.Jp(0)],x.f3))
n.ch=t
t.aGR(0,f,g)},
u(d){return this.at}}
C.cwb.prototype={
cIi(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwc(B.a([],x.fT))
this.a=g
g.aGR(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQI(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rq(o,A.o.an(Date.now(),1000),0):C.h1M(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h1M(o,q.w,q)
if(k.as==null)k.bbs()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alm(A.hU)
j.aL8(o,A.hU,h,h)}i=j==null?h:j.eG()
if(i!=null)new B.FK(!1).Dg(i,0,h,!0)}}return v}}
C.bDV.prototype={
cRB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cd(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hs_(u,m.a)
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
C.cg1.prototype={}
C.cg5.prototype={}
C.cg_.prototype={}
C.ase.prototype={}
C.cg4.prototype={
cIx(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e8(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdL(new C.ase(A.aG.fM(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMU(n.a,n.b,t,s,r)
r+=v}A.aG.hf(f,g,g+w,s)
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
A.aG.hf(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cd(0,s,0,s.length)
w.KM(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cg0.prototype={}
C.cfZ.prototype={}
C.asf.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asf){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t6(d,e){var w=this.a
w===$&&B.c()
w=A.o.t6(w,e.gbWw())
if(!w)e.gbWw()
return w},
aJj(d,e){this.a=0
this.b=d},
ta(d){return this.aJj(d,null)},
aJV(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fe(""),u=w.a
u===$&&B.c()
w.b_8(v,u)
u=w.b
u===$&&B.c()
w.b_8(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_8(d,e){var w,v=A.o.fT(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cg3.prototype={
ly(d){var w,v=this
v.a.ta(0)
v.c=0
A.aG.h0(v.b,0,4,0)
v.w=0
w=v.r
A.d.h0(w,0,w.length,0)
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
KM(d,e){var w,v=this,u=C.h9v(v.a),t=u.a
t===$&&B.c()
t=C.h_v(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h_v(w,3)
v.cj2()
v.cj_(u)
v.arP()
v.cdc(d,e)
v.ly(0)
return 20},
b0D(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i7===w.d)
if(w.w===16)w.arP()},
arP(){this.cRA()
this.w=0
A.d.h0(this.r,0,16,0)},
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
switch(u){case A.i7:u=v.r
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
for(w=this.e,v=this.f,u=d.length,t=A.i7===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cg6.prototype={
cRA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q3[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q3[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q3[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q3[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q3[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q3[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q3[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q3[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q3[30]
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
C.cg2.prototype={
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
A.aG.hf(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.h0(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hf(w,0,u,s.d)
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
A.aG.h0(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cd(0,s,0,s.length)
return v},
b8v(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cfY.prototype={}
C.cfX.prototype={
a1J(d){return(D.o6[d&255]&255|(D.o6[d>>>8&255]&255)<<8|(D.o6[d>>>16&255]&255)<<16|D.o6[d>>>24&255]<<24)>>>0},
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
for(r=1;r<=10;++r){p=(p^f.a1J((m>>>8|(m&$.q3[24])<<24)>>>0)^D.cxp[r-1])>>>0
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
p=(p^f.a1J((k>>>8|(k&$.q3[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1J((k>>>8|(k&$.q3[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a1J((g>>>8|(g&$.q3[24])<<24)>>>0)^j)>>>0
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
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.q3[8]
s=D.e8[b0>>>16&255]
r=$.q3[16]
q=D.e8[b1>>>24&255]
p=$.q3[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e8[a9&255]
s=D.e8[b0>>>8&255]
u=D.e8[b1>>>16&255]
v=D.e8[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e8[b0&255]
u=D.e8[b1>>>8&255]
s=D.e8[a8>>>16&255]
q=D.e8[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e8[b1&255]
a8=D.e8[a8>>>8&255]
a9=D.e8[a9>>>16&255]
b0=D.e8[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e8[n&255]
b0=D.e8[m>>>8&255]
a9=D.e8[l>>>16&255]
a8=D.e8[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e8[m&255]
b0=D.e8[l>>>8&255]
o=D.e8[b1>>>16&255]
s=D.e8[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e8[l&255]
o=D.e8[b1>>>8&255]
b0=D.e8[n>>>16&255]
u=D.e8[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e8[b1&255]
o=D.e8[n>>>8&255]
s=D.e8[m>>>16&255]
v=D.e8[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.nn(D.e8[a9>>>8&255],24)^C.nn(D.e8[b0>>>16&255],16)^C.nn(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.nn(D.e8[b0>>>8&255],24)^C.nn(D.e8[b1>>>16&255],16)^C.nn(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.nn(D.e8[b1>>>8&255],24)^C.nn(D.e8[a8>>>16&255],16)^C.nn(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.nn(D.e8[a8>>>8&255],24)^C.nn(D.e8[a9>>>16&255],16)^C.nn(D.e8[b0>>>24&255],8)^b6[w][3]
a7=D.o6[n&255]
b0=D.o6[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o6[l>>>8&255]
a9=D.o6[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o6[b1>>>8&255]
h=D.o6[n>>>16&255]
g=D.o6[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o6[l>>>24&255]
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
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.q3[8]
t=D.e7[a5>>>16&255]
s=$.q3[16]
r=D.e7[a4>>>24&255]
q=$.q3[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e7[a4&255]
t=D.e7[a6>>>8&255]
v=D.e7[b0>>>16&255]
w=D.e7[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e7[a5&255]
v=D.e7[a4>>>8&255]
t=D.e7[a6>>>16&255]
r=D.e7[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e7[b0&255]
a5=D.e7[a5>>>8&255]
a4=D.e7[a4>>>16&255]
a6=D.e7[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e7[p&255]
a6=D.e7[b0>>>8&255]
a4=D.e7[n>>>16&255]
a5=D.e7[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e7[o&255]
a4=D.e7[p>>>8&255]
a7=D.e7[b0>>>16&255]
t=D.e7[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e7[n&255]
a7=D.e7[o>>>8&255]
a5=D.e7[p>>>16&255]
v=D.e7[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e7[b0&255]
a7=D.e7[n>>>8&255]
t=D.e7[o>>>16&255]
w=D.e7[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.nn(D.e7[b0>>>8&255],24)^C.nn(D.e7[a5>>>16&255],16)^C.nn(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.nn(D.e7[a6>>>8&255],24)^C.nn(D.e7[b0>>>16&255],16)^C.nn(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.nn(D.e7[a4>>>8&255],24)^C.nn(D.e7[a6>>>16&255],16)^C.nn(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.nn(D.e7[a5>>>8&255],24)^C.nn(D.e7[a4>>>16&255],16)^C.nn(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yC[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yC[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yC[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yC[o>>>8&255]
i=D.yC[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yC[b0&255]
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
C.bN8.prototype={}
C.bN9.prototype={
gM(d){var w=this.a.length
return w},
ao9(){return B.r9(this.a,A.hU,null,null)}}
C.b9s.prototype={
uQ(d){return C.hMF(d)}}
C.cq3.prototype={
Mm(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9H(v,t+20,u+16,t,u,B.tQ(d.x))},
nl(d){return!1}}
C.bO1.prototype={
cCx(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bB(new C.bO2(),x.E))},
mF(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mF)
case 6:w=5
return B.b(p.fth(f,r),$async$mF)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mF,v)}}
C.ave.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a82.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a82&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wH(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fAe)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVa.prototype={
c0(d){var w=new C.aA5(!0,this.e,null,new B.dg(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syx(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFt()}}}
C.aA5.prototype={
syx(d,e){return},
gpr(){var w=this.ab$
return w!=null},
gl1(){var w=this.ab$
return w!=null},
Mb(d){var w=d==null?B.h4b(null):d
w.sa4g(this.ak)
return w}}
C.a0s.prototype={
R(){return new C.aIu(B.aX(x.N))},
cPM(d){return this.d.$1(d)},
cNz(){return this.e.$0()}}
C.aIu.prototype={
a_(){this.a1()
this.OK()},
OK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cNz(),$async$OK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4E(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OK,v)},
Yv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.f4I(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4J(t))
w=3
return B.b(C.an6(p),$async$Yv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4K(t,s,p))
w=4
return B.b(t.OK(),$async$Yv)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yv,v)},
a0H(d){return this.cni(d)},
cni(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f4F(t))
s=J.q(d,"id")
w=3
return B.b(C.bYI(J.k(s==null?"":s)),$async$a0H)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f4G(t))
w=1
break}q=C.fZY(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cPM(B.a([q],x.D)),$async$a0H)
case 4:if(t.c==null){w=1
break}t.m(new C.f4H(t,r))
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
return B.b(B.ca(null,null,!0,null,new C.f4z(q),r,null,!0,!0,x.y),$async$OJ)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f4A(t))
s=s.h(e,"id")
w=4
return B.b(C.an5(J.k(s==null?"":s)),$async$OJ)
case 4:if(t.c==null){w=1
break}t.m(new C.f4B(t))
w=5
return B.b(t.OK(),$async$OJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OJ,v)},
cBA(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ih[B.bH(v)-1]+" "+B.bQ(v)},
aPE(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NS,A.n),w,e,w,w,w,w,w,e)},
aPD(d){return this.aPE(d,44)},
b5J(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NS:u,r=B.m(14),q=B.X(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Iz,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Iz,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bvR,u,u,u)],p))}return B.E(B.aE(A.c4,B.dj(u,B.B(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hY,u,u,u,A.ve,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4O(this,d),u,u,u,u,u,u,!1,A.a8),1)},
ch5(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xa,n=B.m(18),m=p?A.d3:A.dr
m=B.I(m,A.q,p?1.8:1)
w=this.aPD(A.pX)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQ9,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQb,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NS:q
u=p?q:B.I(A.b3,A.q,1.6)
r=p?D.bLI:q
return B.aE(q,B.dj(q,B.B(B.a([w,A.bf,t,B.dj(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.db,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4D(this,p,d),q,q,q,q,q,q,!1,A.a8)},
coQ(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cBA(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dr,A.q,1)
v=r.aPD(A.N4)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQ9,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQb,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2m(A.hB,A.bu,"Bring it back",r.r?q:new C.f4L(r,d))
return B.p(q,B.B(B.a([v,A.bf,t,p,A.bp,r.b2m(A.e6,A.cf,"Delete",r.r?q:new C.f4M(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xa,q,w,o,q,q,A.n),q,q,q,A.db,D.bqo,q,q,q)},
b2m(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hr(B.aE(w,B.p(w,B.X(d,v?A.b3:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
as4(d,e,f){var w=null
return new B.D(D.bps,B.v(B.a([B.X(d,A.b3,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f77,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f_F,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c8
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bU,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b3,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPE(A.yp,46),A.bf,D.bwI],t)
if(j.r)s.push(D.e6F)
s.push(B.aH(i,i,i,i,A.ND,i,i,i,new C.f4R(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dr,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.D(D.bsW,s,i),B.p(i,B.B(B.a([j.b5J(0,A.y0,"Save",j.a.c.length),j.b5J(1,A.Nj,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bs_,A.eq,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cf:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cf:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.N5:A.ef
n=B.X(n,p?A.cf:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a79,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.brW,A.ie,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f3d,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f6e,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4S(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.as4(A.pX,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.ch5(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e6d)
else if(j.e==null)s.push(j.as4(A.akp,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.as4(A.oI,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.coQ(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cz(u,i,X.ahx,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2g()
p=s?i:D.NS
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y0,m?A.jc:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bsy,B.aE(i,B.dj(i,B.B(B.a([k,A.a6C,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jc:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eh),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hY,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bm(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_b,i,i,i,i,i,i,i,i)}}
C.of.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Yc.prototype={
R(){return new C.ax4(B.a([],x.k),B.f7(null,x.H))},
ge_(){return this.c}}
C.ax4.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1r(t.a.c),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
cuU(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qb(t.d,new C.cFt(d))
v=w<0
if(v&&C.hJN(d))return t.f
u=t.d
if(v)J.pt(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fQC(new C.cFu(t),v)
return t.f=t.f.bB(new C.cFv(t,d),v).eU(new C.cFw())},
Il(d,e,f){return this.caK(0,e,f)},
aXi(d,e){return this.Il(0,e,!1)},
caK(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Il=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c8(B.ea(new C.cFp(t,e),!1,null,x.H)),$async$Il)
case 3:w=4
return B.b(t.f,$async$Il)
case 4:w=5
return B.b(t.OS(),$async$Il)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
aWz(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dsJ:d
this.Il(0,new C.of(w,v,new B.S(Date.now(),0,!1)),!0)},
c1L(){return this.aWz(null)},
acH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFx(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWz(s)
case 1:return B.h(u,v)}})
return B.i($async$acH,v)},
Ik(d,e){return this.bIY(0,e)},
bIY(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFk(e),s,null,!0,!0,x.y),$async$Ik)
case 3:if(g!==!0){w=1
break}t.m(new C.cFl(t,e))
w=4
return B.b(t.f,$async$Ik)
case 4:w=5
return B.b(C.afX(t.a.c,e.a),$async$Ik)
case 5:w=6
return B.b(t.OS(),$async$Ik)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
D_(d){return this.bB9(d)},
bB9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFg(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D_)
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
return B.b(F.h_x(r,d.b,null),$async$D_)
case 10:w=5
break
case 8:w=11
return B.b(t.Ik(0,d),$async$D_)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D_,v)},
bWt(){var w,v,u=null,t=[D.dsM,D.dsK,D.dsL],s=new C.cFn(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.dd3[w],u,A.oj,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nY,u,u,u))}return B.p(u,B.B(B.a([B.E(B.v(B.a([D.fvK,A.N,B.bW(A.bz,n,A.bq,6,6),A.aQ,B.aE(u,B.p(u,D.eJB,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahU,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFm(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bTL,A.n),u,u,u,u,D.bt5,u,u,u)},
bB7(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f4(A.A,F.anE(d.b),A.f,A.bS),D.ec8,B.ao(v,B.aE(v,B.p(v,D.bMv,A.f,v,v,D.b05,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFb(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eY3,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f3p,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFc(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFd(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(H.agq,B.hr(B.aE(s,B.p(s,A.an5,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vQ,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc31(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n0,s,s,s,!0,s,s,s,s,s,D.fvO,s,s,s,1,s,!0)
if(t.e)r=D.b3t
else{w=t.bWt()
v=B.a([D.fhA,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eXv,s,s,s),A.f,s,s,new B.o(D.b8d,s,s,u,s,s,A.n),s,s,s,s,A.xJ,s,s,s))}r=B.a([new B.nM(A5.Yi,new B.m5(w,s),s),new B.nM(D.bss,new B.m5(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cm(t.d))r.push(D.ePD)
else r.push(new B.nM(D.brY,B.OC(new B.ok(new C.cFy(t),J.ad(t.d),!0,!0,!0,0,B.rR(),s),D.b2L),s))
r=B.vq(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b71,r,s,!1,!1,s,s)}}
C.Ya.prototype={
R(){return new C.ax0(B.a([],x.bx))},
Tz(d){return this.d.$1(d)}}
C.aEm.prototype={}
C.ax0.prototype={
b_a(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b4,A.aN),w),u=this.gaXh()
v.aN(0,u)
w=new B.as(new B.bb(e,A.b4,A.aN),w)
w.aN(0,u)
return new C.aEm(v,w,f)},
DP(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pM,new C.cEF(v))},
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
r.push(new C.aEm(o,n,p.c))}if(r.length===0)r.push(m.b_a("Page 1","",""))},
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
t.push(new F.mp(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.re(n,w,v,t,u)},
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
c3_(){this.m(new C.cEE(this))
this.DP()},
aWg(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cEH(w,d,v))
w.DP()},
c30(d,e){var w=A.d.cC(this.w,e)
this.m(new C.cEP())
this.DP()
$.aW.x1$.push(new C.cEQ(w))},
Q2(d){return this.cgW(d)},
cgW(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l4(80,1400,A.eG),$async$Q2)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Q2)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahu(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEI(d,n,p))
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
xA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hml(r,t.gp6()),$async$xA)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEG(t,s))
t.DP()
case 1:return B.h(u,v)}})
return B.i($async$xA,v)},
chd(d){var w,v=this,u=null,t=F.fxp(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hf(D.bFQ,D.fk1,new C.cEK(v,d),u),u)
w=x.p
return new B.D(A.cC,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cj,A.bS,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b2n(A.kT,new C.cEL(v,d)),A.bp,v.b2n(A.cD,new C.cEM(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2n(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hy,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Im(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Im=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AB(),$async$Im)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h_x(s,t.gp6(),new C.cEO(t)),$async$Im)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Im,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.qX,B.hf(D.bKt,D.fq_,n.gavI(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.an4,m,m,m,new C.cER(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wm,m,1,m,m,m,!1,m,!1,E.n0,m,m,m,!0,m,m,m,m,m,D.fkT,m,m,m,1,m,!0),j=Av.aTS(O.lc,A.c,Ae.Vf,A.o2,D.flE,n.gc2Z()),i=B.m(18),h=n.gavH(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jm,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anE(n.gp6()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.ey,B.E(B.v(B.a([D.fxi,A.at,B.d(F.fZ1(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f8Q,m,m,m),A.S,B.dk(E.amm,E.aQW,h,B.bl(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wm,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oi,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lc.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bJd,m,m,m,v===0?m:new C.cES(n,v),m,m,m,m,"Move up",A.cb)
r=i.length
q=B.aH(m,m,m,m,D.bPu,m,m,m,v===r-1?m:new C.cET(n,v),m,m,m,m,"Move down",A.cb)
r=r===1?m:new C.cEU(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f9n,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oB,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cb)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.chd(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n0,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a82(h),A.e5,D.bqD,m,m,m))}return B.oh(!0,B.c8(k,E.aez,B.cz(g,m,D.br3,m,m,A.ah,!1),m,!1,!1,j,m),new C.cEV(n),x.C)}}
C.ax2.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cf:E.n0,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eJ,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPv,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apN.prototype={
R(){return new C.aD8()}}
C.aD8.prototype={
a_(){this.a1()
this.Z8()},
bs(d){this.bD(d)
if(d.c!=this.a.c)this.a0w()},
a0w(){var w=0,v=B.j(x.H),u=this,t
var $async$a0w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0w)
case 2:u.d=null
if(u.c!=null)u.m(new C.e7Z(u))
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
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XO(B.cw(n,0,null),new B.OZ(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ia(0).cM(0,A.pI),$async$Z8)
case 7:if(r.c==null){w=1
break}r.d.tc(!1)
r.m(new C.e7X(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e7Y(r))
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
if(v.a.f){v.h3(0)
w.m(new C.e8_(w))}else{v.pQ(0)
w.m(new C.e80(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.m(8*n.d)
m=B.a([D.j9.j(0.92),D.Kq.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q_,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.X(A.alE,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b4i
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.zX(s,o),o),A.r,A.bS)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iW,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5C(),o,o,o,o,o,o,!1,A.a8)}}
C.xo.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jm.prototype={}
C.acU.prototype={
B(d){return B.oM(new C.dXE(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.aci.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j9.j(t?0.35:0.4),A.q,1),p=t?D.KX:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i19(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ain,u,u,u,u),1)
m=D.j9.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j9,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bea,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agF,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xr.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.biw.prototype={
Zh(d){var w=null
return new B.bI(A.a3,w,w,B.Dz(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c64(){return this.Zh(1)},
awm(d){var w=null,v=B.m(8),u=B.I(A.hW,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acA,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hW,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hW,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awm("TAARIFA ZA WANANDOA"),A.am,w.c64(),A.cV,w.Zh(0.9),A.cV,w.Zh(0.7),A.N,w.awm("TAMKO LA MAKUBALIANO"),A.h0,w.Zh(1),A.cV,w.Zh(0.95),A.N,w.awm("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acX.prototype={
B(d){return B.oM(new C.edd(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeE.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bdL:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.fZw(w.a)
if(v==null)v=A.d.gJ(D.Qk)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.fZv(v.d),A.A,r,r,A.cj,A.bS,!0,r,!1,r,r),0,0,0),new B.D(A.aho,new C.biw(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ain,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.KY,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b7x,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agF,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kQ.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7w.prototype={}
C.Vm.prototype={
R(){var w=$.aw()
return new C.aDr(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.my(0,null,null),A.d.gJ(D.a2e),D.dD2,B.a([],x.L),B.a([],x.gE))}}
C.aDr.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zj(C.fBi(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fAe().bB(new C.egv(v),w)
$.qP().jx(0,"assets/images/ngmy_logo.png").bB(new C.egw(v),w).eU(new C.egx())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
agB(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l4(88,1600,A.eG),$async$IG)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$IG)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hmC(m,p),$async$IG)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCx(new B.pH(o,1),m),$async$IG)
case 10:if(r.c!=null)r.m(new C.eg7(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agB("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IG,v)},
Wn(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hmC(s,q),$async$Wn)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCx(new B.pH(r,1),s),$async$Wn)
case 4:if(t.c!=null)t.m(new C.eg3(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wn,v)},
adw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ege(q))
t=4
q.a.toString
p=C.i5B()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adw)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egf(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agB(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egg(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adw,v)},
Zm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eg9(q,i))
t=4
q.a.toString
p=C.i5A()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zm)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ega(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.egb(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egc(q))
$.aW.x1$.push(new C.egd(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zm,v)},
c6k(d){this.m(new C.eg8(this,d))},
E6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$E6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eg5(q))
t=4
w=7
return B.b($.aW.gmA(),$async$E6)
case 7:w=8
return B.b(B.bN(A.n6,null,x.H),$async$E6)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pS))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lX(1800/p.gZ(0).a),$async$E6)
case 9:o=e
w=10
return B.b(o.hr(A.fY),$async$E6)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$E6)
case 11:m=e
q.agB(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agB(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eg6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E6,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kV,a2,a2,a2,new C.egm(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bKZ,a2,a2,a2,new C.egn(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oR,a2,a2,a2,a4?a1.gaYo():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AJ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eJK,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b06(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Tm,a2,a2,a2)
t=a1.as?a2:a1.gc6j()
t=B.a([B.E(B.dk(D.bLJ,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bl(D.tf,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uS),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cj,A.bS,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bIw,a2,a2,a2,a1.as?a2:a1.gbHz(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Tm,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRu("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d7N[o]
p.push(B.mG(a2,D.tf,new B.x(n.a,a2,A.pb,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.ego(a1,n),a2,a2,P.uS,a2))}p=B.bW(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bz,B.a([D.fvX,A.bf,B.j6(a2,a2,a2,D.fgo,a2,new C.egp(a1),m==="en",a2,a2,a2,a2),A.ab,B.j6(a2,a2,a2,D.fgj,a2,new C.egq(a1),m==="sw",a2,a2,a2,a2)],w),A.rP,0,8)
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
v=B.a([u,A.aB,new B.D(A.cC,s,a2),t,A.aB,new B.D(A.cC,r,a2),q,A.N,p,A.S,m,A.aB,new B.D(A.cC,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.B(B.a([D.bLD,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u0,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e3,B.B(B.a([D.dnB,A.av,D.bx0],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.tf
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f6U,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.V2,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cC,A.ie,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cVy[o]
t.push(B.mG(a2,D.tf,new B.x(a0,a2,A.IN,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.egr(a1,a0),a2,a2,P.uS,a2))}u.push(B.bW(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRu("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egs(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc6l()
u.push(B.B(B.a([t,A.ab,B.Ht(A.yu,s,B.nw(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaYo()
u.push(B.dk(A.oR,D.frx,t,B.bl(A.cZ,a2,a2,a2,a2,A.Ix,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cz(v,a1.r,A.aha,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jP.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a6D,A.ey,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iH,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AA,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.btm,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AJ,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRu(d){var w=null
return B.bs(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.tf,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.II,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPY(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kO,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bpG,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jg,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iU,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eg4(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zj.prototype={
baD(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zj(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cG2(d){var w=null
return this.baD(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cbW(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cbU(),B.U(w).k("K<1,n>")).c_(0,new C.cbV())
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
return this.baD(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFi(d){return this.f}}
C.tc.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bf.prototype={
a5(){return"NewsFrame."+this.b}}
C.lc.prototype={}
C.b06.prototype={
re(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYq(d,e,f,g){return this.re(d,e,null,1.25,f,A.bl,g)},
Po(d,e,f,g,h){return this.re(d,e,f,1.25,g,A.bl,h)},
aws(d,e,f,g,h){return this.re(d,e,null,f,g,A.bl,h)},
awr(d,e,f,g,h){return this.re(d,e,f,g,0,A.bl,h)},
aYs(d,e,f,g,h){return this.re(d,e,null,f,0,g,h)},
c6q(d,e,f,g,h,i){return this.re(d,e,f,g,0,h,i)},
awq(d,e,f,g){return this.re(d,e,null,f,0,A.bl,g)},
adz(d,e,f){return this.re(d,e,null,f,0,A.bl,A.cN)},
aYr(d,e,f,g,h){return this.re(d,e,f,g,0,h,A.cN)},
c6p(d,e,f,g){return this.re(d,e,null,f,0,g,A.cN)},
c6o(d,e,f,g){return this.re(d,e,f,g,0,A.bl,A.cN)},
adA(d,e,f,g,h,i){return this.re(d,e,f,g,h,A.bl,i)},
aYp(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kf(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c9,new B.js(1),u,u,h,u,A.c7,u)
v.wy(g)
if(!v.b.a.c.gaDo())return w
w-=2}return j},
adx(d,e,f,g,h,i,j,k){return this.aYp(d,e,f,g,h,i,j,k,A.bl)},
ayA(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayz(d){return this.ayA(null,!1,d)},
agp(d,e){return this.ayA(null,d,e)},
cnZ(d,e){return this.ayA(d,!1,e)},
gb_y(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaU5(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Of(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adx(w.gaU5(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaU5(),v,g,A.a2,v,v,v,w.awr(u,t,f,1.02,A.O),e,v,v)},
aUa(d){return this.Of(d,A.L,null,2,78,30)},
aaZ(d,e,f,g,h){return this.Of(d,e,null,f,g,h)},
bWl(d,e,f,g,h){return this.Of(d,A.L,e,f,g,h)},
bWk(d,e,f){return this.Of(d,A.L,null,e,f,30)},
Rj(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.kn,B.d(s,u,g,A.a2,u,u,u,v.aYr(w,v.aYp(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5p(d){return this.Rj(d,A.L,null,3,24)},
aA3(d,e,f,g){return this.Rj(d,e,null,f,g)},
cvn(d,e,f){return this.Rj(d,A.L,e,3,f)},
b5q(d,e){return this.Rj(d,e,null,3,24)},
cvl(d,e){return this.Rj(d,A.L,null,3,e)},
cvm(d,e,f){return this.Rj(d,e,null,3,f)},
aq5(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Po("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nc(){return this.aq5(null,!0)},
aq4(d){return this.aq5(null,d)},
bDt(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.hZ,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6p(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vn(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_y(),h=A.o.an(j.bA(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hUb(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYq(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adx(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adx(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adA(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bBN(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hC,A.j,0,l,l),A.am,m.agp(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ey,B.E(B.d(i,l,1,A.eD,l,l,l,m.awq(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.bBN(j),l,l,l,l,l,l,m.Po(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hC,A.j,0,l,l),A.N,m.cnZ(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
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
return B.v(B.a([B.B(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.re(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adA(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l)
t=m.agp(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awq(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agp(!0,1.4),A.at,B.d(C.bBN(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayz(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aws(v,u,1,3,A.O),A.L,l,l),A.N,m.agp(!0,1.2),A.at,B.B(B.a([B.d(C.bBN(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l),A.at,m.ayz(3)],h),A.m,l,A.e,A.j,0,A.p)}},
ac5(d){return this.vn(d,!1)},
ady(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adA("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c6n(d,e){return this.ady(d,null,e,null)},
aW8(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dl(v),12)===0?12:A.o.E(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.awr("Roboto",15,t,1,A.cv),r=B.X(E.ajM,t,w,w,w,18),q=A.a.ap(A.oV[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
ava(){return this.aW8(A.mu)},
b2B(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adA("Roboto",this.adx(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayD(d,e,f){return this.b2B(d,e,f,30)},
aA6(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vd,B.d(v,w,e,A.a2,w,w,w,this.c6o("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5u(d){return this.aA6(d,3,22)},
cvy(d,e){return this.aA6(d,e,22)},
tv(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cj,A.bS,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D8(D.bw7,w,s)
if(v==="sepia")w=new B.D8(D.bw6,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xW,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.Wi.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
ql(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tv(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eq,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lN,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e2J,14)],x.V)
v=l.tv(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYr(j.as,13.5,D.b91,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bc9,k,k,k,w,k,A.n),k,e,k,k,D.bqZ,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tv(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hU(l.tv(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lN,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e2z,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tv(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r_,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nr(l.tv(d,e),A.aq,D.fQk),new C.bbG(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tv(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bu(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bP,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cn(A.aO,A.q3,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bvo,k,k,d)
case 8:w=d/2
v=B.wP(A.he,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wP(A.hD,new B.aT(w,w)),l.tv(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tv(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nr(l.tv(d,e),A.aq,D.fWm),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tv(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eq,k,k,d)}},
aNz(d,e){return this.d.e===D.QY?A.bI:this.bDt(d,e)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYs(v.Q,19,1.15,A.cF,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Po("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adz(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jy(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcet(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8I(d,e,f,g){return B.cp(new C.cbX(this,e,d,f,g))},
a8H(d){return this.a8I(d,22,!0,18)},
W6(d,e){return this.a8I(d,22,!0,e)},
aOB(d,e,f){return this.a8I(d,22,e,f)},
bFu(d,e,f){return this.a8I(d,e,!0,f)},
b8l(d,e,f,g){return B.cp(new C.cbY(this,e,d,g,!0,f))},
cdh(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.ac5(824),A.aB,k.aUa(824),k.b5p(824),A.N,k.Nc(),A.ac,B.av(k.ql(824,360),j,j,j),k.VW(824),A.ac,B.E(k.a8H(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.ac5(824),A.aQ,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.v(B.a([k.aaZ(440,A.bg,3,62,26),k.aA3(440,A.bg,2,20),A.b6,k.aq5(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Iy,B.v(B.a([k.ql(362,310),k.VW(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayz(2),A.ac,B.E(k.a8H(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vn(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWl(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cvn(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B4,j,j,j)
u=B.a([B.av(k.ql(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QY){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awr(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lL,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Nc(),A.S,B.E(k.W6(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vn(824,!0)
w=k.ql(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Of(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.btF,j,j,j),j,j,0,0,j,j)],u),j),k.b5q(824,A.bg),A.N,k.Nc(),A.S,B.E(k.a8H(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.ac5(824),A.aB,k.aUa(824),k.b5p(824),A.N,k.Nc(),A.ac,B.E(k.b8l(3,300,B.v(B.a([k.ql(300,300),k.VW(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vn(824,!0)
v=x.p
u=B.v(B.a([k.aaZ(440,A.bg,3,62,26),k.aA3(440,A.bg,2,20),A.b6,k.aq4(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aNy,new B.D(A.hZ,k.ql(364,h.e===D.QY?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.W6(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.ac5(824),A.ac,k.bWk(824,2,70),k.cvl(824,21),A.N,k.Nc(),A.ac,B.E(k.b8l(3,340,B.av(k.ql(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vn(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBN(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Po(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYs(h.Q,24,1.15,A.cF,A.O),j,j,j))
v.push(A.b6)
if(k.gazp())v.push(k.azo(230,250))
return B.v(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agD,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaZ(570,A.bg,3,62,28),k.cvm(570,A.bg,20),A.N,k.aq4(!1),A.N,B.av(k.ql(570,330),j,j,j),k.VW(570),A.S,B.E(k.aOB(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vn(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Po(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.Of(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bs0,j,j,j),k.b5q(824,A.bg),A.S,B.av(k.ql(824,310),j,j,j),k.VW(824),A.N,k.Nc(),A.S,B.E(k.a8H(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vn(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.ql(824,430),B.ao(18,k.c6n(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayD(824,3,66),k.b5u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.ava(),A.aB,B.E(k.W6(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vn(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.v(B.a([k.ady(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2B(410,4,58,28),k.aA6(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNz,k.ql(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.ava(),A.aQ,B.E(k.W6(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vn(824,!0)
v=k.ql(824,420)
u=B.hwR(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6q(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.btV,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayD(824,3,62),k.b5u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aW8(A.ll),A.aB,B.E(k.W6(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vn(824,!0)
u=h.w
t=x.p
w=B.a([k.ql(824,380),B.ao(j,k.ady(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayD(824,2,60)
r=k.cvy(824,2)
p=k.ava()
o=B.E(k.aOB(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.m(14),k.tv(150,104),A.aq),A.of,B.E(B.v(B.a([k.ady("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awq(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vn(824,!0),A.by,k.aaZ(824,A.bg,3,62,30),k.aA3(824,A.bg,2,22),A.S,k.aq4(!1),A.S,B.av(k.ql(824,330),j,j,j),k.aNz(824,A.bg),A.aQ,B.E(k.bFu(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8b(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.buq,B.v(B.a([B.E(t.cdh(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYq(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Po(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hC,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqN(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fL(q,A.A,s,s,A.cj,A.bS,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mu,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aws(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bvw,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jy(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbH.prototype={
j3(d){return C.hbZ(d)},
jL(d){return!1}}
C.bbG.prototype={
a4(d,e){var w,v=C.hbZ(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.bti.prototype={
j3(d){var w,v,u,t,s,r,q,p,o=new B.eL()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bz(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bz(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bF())
return u},
jL(d){return!1}}
C.b8b.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eL()
k.dB(7)
$.W()
w=B.N()
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
C.bqN.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.hq(u,u,u,u,B.de(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c9,u,A.dZ,A.c7)
s.ey()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.Vp.prototype={
R(){return new C.aDv()}}
C.aDv.prototype={
a_(){var w=this
w.a1()
B.fYo(w.a.c,null).bB(new C.ehG(),x.g7).bB(new C.ehH(w),x.a)
w.a.toString},
gaMo(){var w=D.aul[this.e].b
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
break}r.m(new C.eht(r))
t=4
q=r.gawt()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qV()
m=B.D6(n,null)
i=B.N()
i.Q=A.fW
m.rF(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pB().zd(J.h1w(p),J.h1w(o)),$async$Zo)
case 7:l=e
w=8
return B.b(l.hr(A.fY),$async$Zo)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vh(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ehu(r))
r.c.I(x.q).f.S(D.eSd)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zo,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kV,s,s,s,new C.ehA(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fu2,s,s,!0,s,s,t.y||r==null?s:t.gc6r(),s,s)],p),s,s,!0,!0,A.AJ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fxV,s,s,s,1,s,!0)
if(r==null)p=A.lC
else{w=B.E(new B.D(A.bR,B.av(new B.fG(t.gaMo(),B.cp(new C.ehB(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iU,B.j6(s,s,s,new B.x(D.aul[u].a,s,E.aPk,s,s,s,s,s,s,s,s,s),s,new C.ehC(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bm(!0,B.v(B.a([new B.a7(s,40,B.cz(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bMm,B.E(B.kX(s,s,s,6,1,new C.ehD(t),t.f),1),D.bLZ],p),A.m,s,A.e,A.j,0,s,s),D.frr,A.am,B.bK(!1,D.frb,s,s,!0,s,s,new C.ehE(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Ww,s,s,s,s,s,s,D.brm,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AJ,p,s,!1,!1,s,s)}}
C.bbd.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.cj
return d.rF(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_t.prototype={
R(){var w=$.aw(),v=x.A
return new C.aES(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gJ(D.a2O),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.os.prototype={}
C.aES.prototype={
gaUi(){var w,v,u=this
if(u.p1)w=new B.vy(1,u.p2,0.9,u.p3).iB().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eRf(w))},
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
return B.b($.qP().jx(0,"assets/images/ngmy_logo.png"),$async$Y2)
case 7:q=e
p=J.eT(J.vh(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCx(new B.pH(p,1),o),$async$Y2)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eQ7(r,p))
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
return B.b(new B.hY().l4(92,1800,A.eG),$async$Pr)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Pr)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCx(new B.pH(p,1),n),$async$Pr)
case 9:if(r.c==null){w=1
break}r.m(new C.eQv(r,p))
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
w=C.bzd(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dam)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzd(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzd(C.fXs(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzd(C.fXs(1-a0*0.5,n,n,n),w)}return a1?C.bzd(C.fXs(-1,255,255,255),w):w},
aAc(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kV(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z6(u,v,w)
this.dx.p7(new C.eQF(t),!0)
return t},
b4u(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAc()
w=C.i3i(e.d.a.a,e.db)
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
return C.i_N(d,k,v,a0,j,e.gaUi(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ctl(){return this.b4u(null)},
CZ(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmA(),$async$CZ)
case 3:w=4
return B.b(B.bN(A.eI,null,x.H),$async$CZ)
case 4:w=5
return B.b($.aW.gmA(),$async$CZ)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pS)){u=null
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
a9z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePR(q))
t=4
w=7
return B.b(q.CZ(),$async$a9z)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcw().aJ(p)
n=C.Bs(null,null,null,null,D.o9,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4u(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.ePS(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9z,v)},
Aj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Aj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePP(q))
t=4
w=7
return B.b($.aW.gmA(),$async$Aj)
case 7:w=8
return B.b(B.bN(A.oE,null,x.H),$async$Aj)
case 8:w=9
return B.b($.aW.gmA(),$async$Aj)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pS))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lX(1080/p.gZ(0).a),$async$Aj)
case 10:o=e
w=11
return B.b(o.hr(A.fY),$async$Aj)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Aj)
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
if(q.c!=null)q.m(new C.ePQ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aj,v)},
cgn(){var w=this.p4
w.toString
return B.cp(new C.eQo(this,w))},
aYz(d,e){var w=null
return B.bs(w,w,w,w,w,D.f1v,w,w,!0,new B.b4(4,B.m(16),P.uS),w,w,w,w,w,D.tf,!0,w,w,w,w,new B.b4(4,B.m(16),D.aXP),w,w,w,w,w,w,w,w,A1.Dg,e,w,w,w,w,w,w,w,D.f6L,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xJ(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQ6,w,w,w))
return new B.D(D.bpk,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aYy(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jC),A.f,w,w,new B.o(D.tf,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vv(d){return this.aYy(d,A.bC)},
o7(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u0:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jc,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jc,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dj(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hY,r,r,r,A.F4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
afo(d,e,f){return this.o7(d,null,e,f)},
awx(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eA:A.bF,s=x.p
v=B.a([B.dj(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hY,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYC(d,e,f,g,h,i){return this.awx(d,e,f,g,h,5,i)},
kg(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.eZx,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e6h,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQB(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPc,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YJ,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auF(w).cHq(A.b7,A.bF,A.b7.j(0.2),A.c,D.eJ4,4)
return new B.D(A.xt,B.v(B.a([s,B.a9D(B.kX(u,u,u,g,f,new C.eQC(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahp(d,e,f,g,h,i){return this.kg(d,e,f,g,h,null,i)},
ahS(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.b3
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bFr:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQE(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bW(A.bz,n,A.bq,10,10)},
bJD(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2O
else{v=x.a8
w=B.C(new B.a1(D.a2O,new C.ePH(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYz("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ePI(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7C,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYz("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePJ(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dn,!0,A.a4,n,A.an,n,n,n,n)
t=o.xJ("DESIGNS",A.tO)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cNb[q]
r.push(new B.D(A.iU,o.afo(p,o.x===p,new C.ePK(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hI(n,new C.ePL(o,w),w.length,n,n,A.aO,new C.ePM(),!1),n),A.N,o.aYy(B.v(B.a([B.iF(A.b7,n,n,A.af,!0,new C.ePN(o),n,D.fiF,n,D.ff8,o.k3),B.iF(A.b7,n,n,A.af,!0,new C.ePO(o),n,n,n,D.fcm,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ah9)],s),A.F,n,A.e,A.j,0,A.p)},
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
m=B.C(u,B.a3(u).k("co.E"))
A.d.fl(m)
l=m.length!==0&&A.d.d7(m,new C.eR4(a5,m))?a5.db[A.d.gJ(m)]:a6
k=new C.eRb(a5)
j=new C.eRd()
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
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mf,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eR5(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vv(B.bW(A.bz,o,A.rP,6,6))
i=B.a([a5.o7("All words",K.all,!1,new C.eR6(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afo("Sentence "+a3,!1,new C.eR7(a5,a7,v,a2)))
a2=a3}}i.push(a5.afo("Clear picks",!1,new C.eR8(a5)))
i=B.bW(A.bz,i,A.bq,8,8)
g=a5.xJ("SIZE OF THE PICKED WORDS",D.akO)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dfR[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eR9(e,k)
f.push(a5.afo(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bW(A.bz,f,A.bq,8,8),A.S,a5.o7("Make every word normal",A.lk,!1,new C.eRa(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cx2(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bwF,B.d(A.d.i1(D.aw1,new C.eQO(q)).b,p,p,p,p,p,p,D.f0_,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eQP(q)),l=q.xJ("HIGHLIGHT BEHIND THE WORDS",A.a_D),k=q.p1?-1:q.k4
k=q.ahS(k,new C.eQQ(q),D.cXv)
w=q.p1
v=w?A.c:A.b3
n=B.a([n,A.S,m,l,B.bW(A.bz,B.a([k,B.aE(p,B.p(p,D.bIq,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eUP,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQT(q),p,p,p,p,p,p,!1,A.a8)],o),A.rP,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IW,p,p,p)],o)
if(q.gaUi()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahp("Colour",l,0,360,new C.eQU(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahp("Shade",k,0.15,0.9,new C.eQV(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kg("Strength",l,0.15,1,new C.eQW(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vv(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xJ("LOOK",A.yi))
m=B.a([q.o7("Bold",I.akM,q.fy,new C.eQX(q)),q.o7("Italic",I.akN,q.go,new C.eQY(q))],o)
for(u=0;u<3;++u){l={}
k=D.cOm[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u0:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQZ(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bW(A.bz,m,A.rP,8,8))
n.push(q.xJ("COLOUR",A.nf))
n.push(q.ahS(q.fx,new C.eR_(q),D.d7h))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IW,p,p,p))
n.push(q.xJ("SIZE AND PLACE",A.G0))
m=q.fr
m=q.kg("Text size",m,0.5,1.6,new C.eQR(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vv(B.v(B.a([m,q.kg("Up / down",l,0.12,0.5,new C.eQS(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cgo(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bNM,A.f,p,p,D.b_N,p,62,p,p,p,p,p,62),A.aB,D.fgh,A.am,D.fkR],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tf,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bsx,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYB(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.B(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cj,A.bS,!1,p,!1,p,p),p),A.aq),A.bf,B.E(B.v(B.a([D.ffS,A.N,B.bW(A.bz,B.a([q.o7("Change",A.kT,!1,q.gaYB()),q.o7("Remove",A.e6,!1,new C.eQs(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d3N[t]
u.push(q.o7(s.b,s.a,q.at===t,new C.eQt(q,t)))}u=B.bW(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_g(o)
break A}if(1===r){s=q.bZf()
break A}if(2===r){s=q.bFt()
break A}if(3===r){s=q.bLL()
break A}s=q.bHA()
break A}return B.v(B.a([v,A.ac,u,A.aB,s,A.S,new B.bI(A.a3,p,p,q.o7("Reset the whole picture",A.lk,!1,new C.eQu(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_g(d){var w=this,v=x.p
return B.v(B.a([B.bW(A.bz,B.a([w.o7("Auto enhance",E.a_g,!1,new C.eQk(w)),w.o7("Make words easy to read",A.oO,!1,new C.eQl(w))],v),A.bq,8,8),A.aB,B.cp(new C.eQm(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZf(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kg("Exposure",n,-1.5,1.5,new C.ePZ(o),0,A.k.aa(n,1))
w=o.RG
w=o.kg("Brightness",w,-0.5,0.5,new C.eQ_(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kg("Contrast",v,0.4,2,new C.eQ0(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kg("Fade",u,0,1,new C.eQ1(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kg("Spotlight",t,0,1,new C.eQ2(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kg("Darken",s,0,0.85,new C.eQ3(o),0,""+A.k.V(s*100))
r=o.b6
r=o.kg("Vignette",r,0,0.9,new C.eQ4(o),0,""+A.k.V(r*100))
q=o.aH
q=o.kg("Shade behind words",q,0,0.85,new C.eQ5(o),0,""+A.k.V(q*100))
p=o.aP
return o.vv(B.v(B.a([n,w,v,u,t,s,r,q,o.kg("Shade top & bottom",p,0,0.85,new C.eQ6(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFt(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kg("Colour strength",q,0,2.2,new C.ePk(s),1,""+A.k.V(q*100))
w=s.to
w=s.kg("Warmth",w,-1,1,new C.ePl(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kg("Tint",v,-1,1,new C.ePm(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vv(B.v(B.a([q,w,v,s.kg("Shift colours",u,-180,180,new C.ePn(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o7("Negative",D.bDp,s.y1,new C.ePo(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xJ("COLOUR WASH",A.Ne)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.auL)
t=B.a([u,v,s.ahS(w,new C.ePp(s),q),A.N],t)
if(s.b3!=null){q=s.b2
t.push(s.vv(s.ahp("Wash strength",q,0,0.9,new C.ePq(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLL(){var w,v,u,t,s,r=this,q=r.y2
q=r.kg("Blur",q,0,24,new C.ePT(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.kg("Soft focus",w,0,1,new C.ePU(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vv(B.v(B.a([q,w,r.kg("Film grain",v,0,1,new C.ePV(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xJ("LIGHT LEAK",H.akI)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.auL,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahS(q,new C.ePW(r),t),A.N],u)
if(r.be!=null){q=r.bM
u.push(r.vv(r.ahp("Leak strength",q,0,1,new C.ePX(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHA(){var w,v,u,t,s=this,r=s.aS
r=s.kg("Zoom",r,1,3,new C.ePu(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kg("Left / right",w,-1,1,new C.ePv(s),0,""+A.k.V(w*100))
v=s.bU
v=s.kg("Up / down",v,-1,1,new C.ePw(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vv(B.v(B.a([r,w,v,s.kg("Turn",u,-180,180,new C.ePx(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bW(A.bz,B.a([s.o7("Turn 90\xb0",N.alS,!1,new C.ePy(s)),s.o7("Flip sideways",A.FP,s.cU,new C.ePz(s)),s.o7("Flip upside down",A.FP,s.cX,new C.ePA(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c1U(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eJg,A.S,D.fhH,A.aB,B.aE(w,B.p(A.A,D.eJt,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.u0,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQn(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tf,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c_4(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eQf(p),m=x.p,l=B.B(B.a([D.bwL,p.o7("Reset",A.lk,!1,new C.eQb(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IW,o,o,o),j=p.xJ("SHAPE",A.alO),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BY[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYC(n.$2(t,p.cy),62,u.b,s===t,new C.eQc(v,p),62))}}i=B.bW(A.bz,i,A.bq,8,8)
v=p.xJ("RING",A.r1)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BT[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYC(n.$2(p.cx,t),62,r.b,q===t,new C.eQd(s,p),62))}u=B.bW(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vv(p.kg("Size",s,0.12,0.4,new C.eQe(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0w(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eQy(this)),null),null)},
cwj(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u0:q
t=new B.aT(14,14)
s=D.d5Q[w]
r=v?A.c:A.az
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bh,B.aE(A.c4,B.dj(q,B.v(B.a([r,A.cV,new B.qg(A.eh,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bog,q,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQH(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bql,A.lN,q,q,q)},
aP6(){var w,v,u=this,t=null,s=u.cwj(),r=u.as
A:{if(0===r){w=u.bJD()
break A}if(1===r){w=u.cBQ()
break A}if(2===r){w=u.cx2()
break A}if(3===r){w=u.cgo()
break A}if(4===r){w=u.c_4()
break A}w=u.c1U()
break A}v=x.p
return B.bw(A.rV,B.el(B.v(B.a([s,B.E(B.cz(B.a([w],v),t,D.brn,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Ww,!0),A.aq)},
aLl(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc6S(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eJC,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b3,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLl()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eOx)
else t.push(D.bHv)
t.push(A.ab)
t.push(D.byv)
return B.p(r,B.B(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.B(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u0,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZW,r,r,r,r,G.agX,r,r,r)},
aYA(){var w=null
return new B.D(T.YF,B.B(B.a([B.aH(w,w,w,w,A.my,w,w,w,new C.ePY(this),w,w,w,w,w,w),D.fwR,A.b6,D.bQ5],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AJ,B.bm(!0,B.cp(new C.eRe(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beM.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eL()
m.dB(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.N()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c_(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.ro.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m2.prototype={}
C.zl.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vR.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7E.prototype={}
C.aqD.prototype={}
C.a0_.prototype={
R(){return new C.aGN(new B.as(A.as,$.aw()),B.jO(!0,null,!0,!0,null,null,!1),D.dvN,B.a([],x.s),B.et([D.HH],x.Q))}}
C.aGN.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_J(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_J=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().BT(90,700,700,A.eG),$async$a_J)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_J)
case 8:p=e
if(r.c!=null)r.m(new C.eXr(r,p,q))
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
return B.b(new B.hY().aGA(78,n,1100,1100),$async$a_M)
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
case 9:if(r.c!=null)r.m(new C.eXs(r,p))
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
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bS,!0,u,!1,u,u)
return w}catch(v){}return D.bmw},
c_a(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cpS(C.fyF(w,this.b2A(d),f),g)},
abR(d,e,f,g,h){var w=null,v=new C.eXp(f,e),u=new C.eXq(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BD:A.N3,A.c1,w,w,w,26),w,w,w),D.ebX],x.p),w),w)
else p=this.c_a(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bHc],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mp,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXo(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVZ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bS,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Ty,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0z,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kO,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a81(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a81=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fC5(),$async$a81)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eX7(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eX8(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a81,v)},
adI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adI=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eXa(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eXb(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eXc(r))
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
return B.b(C.fxn(q,r.cx,j,new C.b0u(r.z,r.Q,r.as,r.at),new C.eXd(r),i,m,p,k),$async$adI)
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
if(r.c!=null)r.m(new C.eXe(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eE,g).w
g=B.aI(d,A.bU,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b3,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bKo,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bTV,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXF(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0z,h,h,h,i.ax?h:new C.eXG(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAu()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hr(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vA:A.hA,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vQ,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aXm),h,h,h,h,h,h,h,h,A0.II,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iU,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPx,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eXH(i)
s=i.aVZ(A.lm,q,r,i.gcgP(),s)
r=i.z
r=B.E(i.abR(new C.eXJ(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.abR(new C.eXK(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gJ(s)
p=i.y.length===0?h:new C.eXL(i)
s=i.aVZ(A.vx,r,p,i.gcgX(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gJ(o)
p=B.E(i.abR(new C.eXM(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gJ(n)
o=B.a([w,A.aB,D.fm7,A.at,D.foW,A.by,u,A.N,D.fnn,A.aB,v,A.by,B.B(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.abR(new C.eXN(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fqE],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.beY,A.q,1)
w=C.agy(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bLt,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f5v,h,h,h),B.aL(!1,h,!0,D.e6x,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXO(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b8i,h,u,v,h,h,A.n),h,h,h,h,D.bq2,h,h,h),h)],t))}o.push(A.by)
o.push(D.fd3)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cZz[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bD(1,A.bh,new B.D(A.jg,B.aE(h,B.dj(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eF,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXP(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fv8)
o.push(A.N)
o.push(B.cp(new C.eXQ(i)))
o.push(A.by)
o.push(D.fkd)
o.push(A.N)
w=B.a([i.b5n("auto","Let AI choose",A.dW,A.PM)],t)
for(v=x.O,m=0;m<11;++m){j=D.vV[m]
u=j.d
w.push(i.b5n(j.a,j.b,j.c,B.a([B.b0(A.d.gJ(u).a),B.b0(A.d.gJ(u).b)],v)))}o.push(B.bW(A.bz,w,A.bq,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iF(h,A.bo,h,h,h,new C.eXI(i),D.bGE,D.fuo,h,D.ffl,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aOO,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc6W()
v=B.fm(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eOn:A.Ge
o.push(new B.a7(h,54,B.lt(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pa,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vp,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aat,h,h,h,h,h,h,h,h),h)},
bMR(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eXf(this,p,d)
if(d===D.CA)return new C.aDk(p,o,q)
w=B.m(16)
v=p?E.vQ:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.X(p?A.ef:C.hDT(d),A.c,q,q,q,20)
r=C.hDU(d)
return B.aE(q,B.dj(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eh)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hY,q,64,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5n(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dj(v,B.B(B.a([w,L.Iz,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eF,v,v,v,L.aie,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXu(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_Z.prototype={
R(){return new C.aGM(new B.as(A.as,$.aw()))}}
C.aGM.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adJ=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eX0(r))
w=1
break}B.eU()
r.m(new C.eX1(r))
t=4
q=C.i4b(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i3W(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eX2(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fX8()
f=$.Cp.h(0,k.a)
o=f==null||J.cm(f)?null:J.fo(f)
if(o==null){r.m(new C.eX3(r))
w=1
break}n=C.i3U(o,r.a.c)
C.i3Q(r.a.c.a)
$.fWp=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fZV(j)
h=C.fZW(r.a.c)
e=C.fZX(r.a.c)
w=7
return B.b(C.bBr(k,r.a.c.a,j,h,new C.eX4(r),i,e,a0),$async$adJ)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eX5(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eE,i).w
i=B.aI(d,A.bU,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b3,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.am6,A.f,j,j,D.aZB,j,34,j,j,j,j,j,34),A.av,D.bxk],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7h,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.aa_),j,j,j,j,j,j,j,j,A0.II,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPx,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cVX[q]
o=A.c.j(0.06)
n=k.e?j:new C.eX6(k,p)
r.push(B.mG(j,o,new B.x(p,j,Ay.T6,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uS,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.S,B.bW(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOO,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc6X()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.f2.j(0.5)],x.O):D.cua
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e6t:D.bL2
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i6,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vp,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aat,j,j,j,j,j,j,j,j),j)}}
C.b0u.prototype={}
C.aDk.prototype={
R(){return new C.bjr(null,null)}}
C.bjr.prototype={
gawy(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pK,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawy().q()
this.buo()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawy(),new C.ecD(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgZ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d0G[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xg.j(0.25+r*0.6).gp(0)
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
C.arc.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zl.prototype={
R(){return new C.aAN()}}
C.aAN.prototype={
gahP(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agL(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA4(){var w=this.e
return w===$?this.e=C.fZV(this.a.c).t(0,D.CA):w},
a7P(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7P=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.di0(s))
u=3
r=A.d.i1(D.vV,new C.di1(s))
q=B.db(C.fZV(s.a.c),x.Q)
l=q
J.hE(l,D.CA)
p=l
if(s.gA4())J.ch(p,D.CA)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA4()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fZW(i.c)
g=C.fZX(s.a.c)
w=6
return B.b(C.bBr(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7P)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agL(q,s.gahP())
f=q==null?null:q.b
n=f==null?s.gahP():f
if(!J.z(n,r.a)&&!s.gA4())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.di2(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7P,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.di5(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vV[w]
u=o.gahP()
t=o.f?n:new C.di6(o,v)
f.push(new C.brT(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dR,!0)
u=B.m(18)
t=o.gA4()?D.bWH:n
if(o.gA4())s=n
else s=m?A.bm:A.bL
r=B.X(A.dW,o.gA4()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA4()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA4()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA4()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.av,q,B.aa7(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.di7(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ah_,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f5O,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fc,n,n,A.ah)
u=o.f?n:o.gbzt()
t=B.bl(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.v(B.a([new B.D(D.bt0,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Fb,new B.a7(1/0,50,B.bG(B.eE(B.av(o.f?A.rF:D.fmA,n,n,n),n,new B.o(n,n,n,s,n,D.bVe,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tz,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brT.prototype={
B(d){var w=null,v=this.c,u=A.d.gJ(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.l6,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lx,w,w,B.d(v.b,w,w,w,w,w,w,D.f5M,w,w,w),w)],x.p)
if(q)v.push(D.aVs)
return B.aE(w,B.dj(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eF,w,w,w,A.co,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ecA.prototype={
aE9(d,e,f){return e+"@"+A.a.aT(A.o.fT(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wp(d,e){return this.aE9(0,e,null)}}
C.aLl.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.b0q.prototype={
B(d){var w,v,u=null,t=C.fYL(this.c)
if(t==null)w=D.bl5
else{w=B.aI(d,u,x.w).w.cGS(D.bpz,D.eNC)
v=this.d
w=B.t9(B.e1(B.anx(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl4(w,u),u),A.f,A.du)}}
C.bl4.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dc0[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.ao0,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.ddb[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.ao0,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.m(64),D.cLX,D.bTD,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aVE,B.p(t,t,A.f,t,t,D.aZU,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bmC,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l9.prototype={
pu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mE,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rp(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cm,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mD,"","","Welcome",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rp(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uf,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mD,"","","Agenda",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rp(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mD,"","","Key Point 1",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rp(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mD,"","","Key Point 2",D.dd)
r=C.cC()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bs(l,l,l,l,D.Cw,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rp(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mD,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Eo.prototype={
bz(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iY.prototype={}
C.Ef.prototype={
gaJU(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agy(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a33(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ef(v,u,t,d==null?w.d:d)},
Fq(d){return this.a33(null,d,null,null)},
aCT(d){return this.a33(null,null,null,d)},
cGQ(d,e){return this.a33(d,e,null,null)},
bau(d){return this.a33(d,null,null,null)},
baB(d){return this.a33(null,null,d,null)}}
C.N9.prototype={
R(){return new C.biO(new B.eS(0,$.aw()),null,null)}}
C.biO.prototype={
a_(){var w,v=this
v.a1()
w=v.qv(new C.dTo(v))
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
B(d){var w=C.agy(this.a.c.a)
if(w==null)w=A.d.gJ(D.Gz)
return B.cp(new C.dTn(this,w,C.hdP(this.a.c.d)))}}
C.bqs.prototype={
B(d){return B.nL(A.UT,this.e,new C.eWe(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdS.prototype={
a4(d,e){var w=this,v=w.c.a
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
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nz
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cU(w,t,w+f,t))
u.F(new B.cU(w,t,w,t+f))
u.F(new B.cU(w,t,w-f,t))
u.F(new B.cU(w,t,w,s))
u.F(new B.bF())
d.aO(u,v)
d.ae(e,f*0.18,v)},
lH(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cW(q,v)*2.5)+C.cW(q,u)*6.28)+1)/2
this.rs(d,new B.u(C.cW(q,t)*o,C.cW(q,s)*n),m*(0.006+0.014*C.cW(q,r))*(0.5+p),h,p*p)}},
aRJ(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lH(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.is,A.bA],w),B.a([A.eu,A.aS],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bu(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cW(h,1))
f=g+c0*(C.cW(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cW(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lf(new B.u(g,c1),new B.u(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rr(new B.u(g,c1),a0)))
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
a8.z=new B.hv(A.G,o)
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
b9.a=A.nz
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cW(h,b1+120)>0.5)this.rs(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFZ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d6W,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aY(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cW(u,1)))+C.cW(u,2)*w,w)
s=C.cW(u,3)
r=Math.sin(a3*(0.8+C.cW(u,4))+u)
q=h*(0.012+0.012*C.cW(u,5))
p=Math.cos(a3*(2+3*C.cW(u,6))+u)
o=D.Pe[A.o.D(A.k.bu(C.cW(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cW(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bz(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.cl(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
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
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.ba4],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ap,a4,a4,B.a([],r))
v=a6+j
i.F(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.F(new B.ap(a5,s))
o=a6+j*0.6
i.F(new B.ap(a5+k*0.22,o))
i.F(new B.ap(a5+k*0.5,a6))
i.F(new B.ap(a5+k*0.78,o))
o=a5+k
i.F(new B.ap(o,s))
i.F(new B.ap(o,v))
i.F(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.saq(new B.a8(A.b_,A.b5,A.x,D.d5L,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.elh,D.efa,D.eum],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hV.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x_(i),u=B.a([],x.X),o=new B.vt(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jU(y.M));--f
o.jp()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cD([new B.H9(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fB
f.r=A.bK.gp(0)
l=f.H()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rs(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lH(a8,a9,b0,45,A.bK,40)},
bAy(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lH(a8,a9,b0,60,A.c,50)
w=[D.eEZ,D.eEH,D.eEB,D.eFX]
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
if(a1!=null)d.bz(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bz(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nz
n.z=new B.hv(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nz
n.z=new B.hv(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cW(a4,1))+C.cW(a4,2)*a3,a3)
r=C.cW(a4,3)
q=Math.sin(b0+a4)
p=C.cW(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.v9.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.nz
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hH.j(0.25+0.1*h),D.WF],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
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
if(q!=null)d.bz(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Pe[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cW(w,1)))+C.cW(w,2)*o,o)
r=k*(0.1+0.8*C.cW(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cW(w,4))
if(n<f){this.rs(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Au.j(0.75).gp(0)
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
m=A.k.E(t*(0.04+0.06*C.cW(p,2))+C.cW(p,3)*n,n)-o*2
l=C.cW(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
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
g.saq(new B.a8(A.ax,A.aC,A.x,D.d1G,a5,a5).av(0,B.cl(A.J,k*1.2,o)))
a2=g.H()
g=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
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
r=n.gbK().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bu(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cW(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bm_.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rs(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pe[A.o.D(A.k.bu(C.cW(t,4)*5),0,4)],u)}},
bAM(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.av9[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bz(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cl(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aVH,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.av0,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
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
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cW(o,11))+C.cW(o,12)*m,m)
r=C.cW(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cl(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.av9[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bOC(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lH(b1,b2,b3,50,A.c,70)
for(w=[D.eF6,D.eEN,D.eET],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
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
a0.a=A.nz
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Au.j(0.55),D.aeB],u),a4,a4).av(0,B.bU(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bu(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lf(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lf(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rr(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bC(a6,a5,a8)}},
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
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Au.j(0.28),D.aeB],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.nz
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eo:A.eO)
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
a9=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hH.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bF())
v=B.N()
v.saq(D.bV8.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rs(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bFl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cW(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cW(t,2))+C.cW(t,3)*r,r)-q
o=C.cW(t,4)*i
n=Math.cos(f*(2+3*C.cW(t,5))+t)
m=Math.abs(n)
l=B.cl(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dgn:D.czP,null,null).av(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.biY.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rs(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lH(d,e,f,30,A.bK,110)},
bYL(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lH(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.WS.j(0.45*k),D.adr],u),d,d).av(0,B.bU(new B.u(l,m),j)))
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
i=B.aq(D.baf,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b5,A.x,B.a([D.beA,i],u),d,d).av(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cW(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
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
l.push(new B.py(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.py(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cTV[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rS,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1I,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lH(a3,a4,a5,30,A.is,130)},
cgg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cW(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cW(q,2))+C.cW(q,3)*o,o)
m=C.cW(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
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
m=(q&1)===0?D.cu9:D.d2V
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lH(d,e,a0,25,A.bK,140)},
bCP(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lH(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cW(r,1))
p=Math.sin(b2*(0.15+0.1*C.cW(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cW(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.py(f,e,l,d,h,0))
a3.push(new B.py(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d2F:D.d5f,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AC.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.big.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1E(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awb[t].j((1-s)*0.9).gp(0)
q.z=new B.hv(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.awb[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hv(A.a9O,p)
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
k=[A.c,A.bK,A.nE,A.dv][A.o.E(p,4)]
j=C.cW(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nz
i.z=new B.hv(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.az.gp(0)
t.c=1.2
a3.bC(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dA.gp(0)
a3.ae(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.F(new B.k_(B.bU(v,u)))
a3.qs(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a9(j,r,j+t,m)),h)
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
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b6l.j(0.6),D.adr],x.O),h,h).av(0,B.bU(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.ecN.av(0,B.bU(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cW(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cl(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.cl(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lH(a2,a3,a4,20,A.hV,180)},
cfk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bz(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bz(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bz(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cy,A.j6,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pj,0.5,A.x,f,0,D.d8w,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lH(a1,a2,a3,25,A.c,190)},
ctJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cW(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cW(r,2))+C.cW(r,3)*p,p)
n=C.cW(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cW(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.by(v.save())
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
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cl(new B.u(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bUV.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bau.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rs(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lH(a3,a4,a5,40,A.bK,210)},
cnF(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hH,A.hV],a6),B.a([A.ox,A.is],a6),B.a([A.aE,A.eA],a6)]
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
if(a1!=null)f.bz(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bz(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bz(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.bz(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avQ,new B.mk(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lH(a8,a9,b0,40,A.c,220)},
bYz(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bu(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1L[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1L[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rs(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1L[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
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
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cU(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cU(v,r,v,a2))
l.F(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cl(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.daN,A.avg,null).av(0,new B.a9(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rs(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bG_(a4,a5,a6,60)},
bG_(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cW(p,31))+C.cW(p,32)*v,v)
n=C.cW(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cl(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pe[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
crx(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lH(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cW(o,1)*1.6
m=A.k.E(a2+C.cW(o,2)*n,n)/n
l=e*(C.cW(o*7+A.k.bu((a2+C.cW(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.rr(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rs(a0,i,p,A.c,1-m)}},
bB6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.E(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.axI[l].j(n).gp(0)
m.a=A.nz
m.z=new B.hv(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axI[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ccZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cl(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c_(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hV.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hH.j(0.4).gp(0)
k.z=new B.hv(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lH(d,e,f,45,A.bK,270)},
bNT(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cW(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.E(a7+C.cW(o,2)*4,4)/4
j=A.ev.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cW(o,3))*(j*i)
if(h<=0.5)continue
g=D.d_V[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hH.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lH(a5,a6,a7,30,A.hV,280)},
c1o(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.aum[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.aum[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cl(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c_(s),i)
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
J.by(v.save())
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
d.r=B.aq(A.bK,A.nE,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hV.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hH.j(0.25),D.WF],x.O),a3,a3).av(0,B.bU(w,a4)))
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
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hV,A.hH.j(0.6),D.WF],o),null,null).av(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cW(f,1)
d=A.k.E(b2+C.cW(f,2)*e,e)/e
a0=A.k.bu((b2+C.cW(f,2)*e)/e)
a1=C.cW(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cW(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hV,A.aH,d).j(1-d).gp(0)
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
i.saq(D.bVR.av(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bu(m/q)
f=A.k.bu(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cW(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aZk.prototype={
B(d){var w,v=null,u=new C.c7R(),t=new C.c7T(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.an9,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c7S(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gz[w]))
return B.bW(A.bz,s,A.bq,12,10)}}
C.YU.prototype={
R(){return new C.aza()}}
C.aza.prototype={
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
return B.b(new B.hY().BT(90,700,700,A.eG),$async$Zz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Zz)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahu(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7d(r,n,p))
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
return B.bs(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPC,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agy(p.gvw().a)
if(n==null)n=A.d.gJ(D.Gz)
w=p.gvw()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.N9(p.gvw(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Ht(A.my,new C.d7i(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Ht(D.bFz,new C.d7j(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPw,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYF(0),o,o,o,o,o,2,p.aYE("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7k(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hs,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hH.j(0.6),A.q,1)
if(p.gvw().d.length===0)q=D.bIU
else{q=C.hdP(p.gvw().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fL(q,A.A,o,o,A.cj,A.bS,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6Y(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvw().d.length!==0)r.push(B.aH(o,o,o,o,D.a0z,o,o,o,new C.d7l(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bm(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawz(),o,o,o,o,o,2,p.aYE("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7m(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dn,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dk(D.bHN,D.fw3,new C.d7n(p,d),B.bl(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b_4,o,o,o,o,A.F8,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKP.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.Ze.prototype={
R(){return new C.bfl(new B.as(A.as,$.aw()))}}
C.bfl.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bU,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.de_(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cLn[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uE,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.de0(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hL,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C1(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQu,new C.de1(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cz(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tz,A.Ym,o,o,o),!0,!1,A.af,!0,!0)}}
C.beJ.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eL()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.QO
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aC(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
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
C.beq.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kv),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lq
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.F(new B.iV(a1))
v=new B.Sc(new B.vt(B.x_(a4),!1,B.a([],x.X))).gJ(0)
a4=v.a
a3=v.b
a4.jp()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.E(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cD([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cD([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cD([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.jp()
e=u[a3].Mr(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mC
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
C.bnk.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eL()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hb()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galR()*1.4
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
j.saq(B.aUq(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jl
g=j.H()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b9k.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
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
e.z=new B.hv(A.G,k*0.35)
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
C.b8Y.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
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
if(e!=null)i.bz(e)
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
i.z=new B.hv(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.bue.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cSH,null).av(0,u))
d.aY(u,w)
w=u.cB(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jl
d.aY(w,v)},
ar(d){return d.b!==this.b}}
C.brf.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bu(d)*7,p=0;p<7;++p){o=new B.eL()
o.dB(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
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
g.z=new B.hv(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bqo.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nz
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aY(w,v)},
ar(d){return d.b!==this.b}}
C.bdL.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdO(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rk
r=new C.d6V(this,r*0.16,d,u,w)
t=e.gdO()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xq.prototype={}
C.Is.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqC.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uA.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mt.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hy.prototype={
a5(){return"NgmySlideTransition."+this.b}}
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
u.n(0,"decoration",C.hRX(v.z))
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
n=B.C(new B.K(n,new C.cdg(),m),m.k("ak.E"))
return C.rp(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.C(new B.K(n,new C.cdh(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i0.prototype={
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
else a3=B.C(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.C(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.U(r).k("K<1,lD>")
r=B.C(new B.K(r,new C.cd5(),q),q.k("ak.E"))
return C.Bs(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.C(new B.K(w,new C.cd6(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jF.prototype={}
C.b0t.prototype={
B(d){return B.cp(new C.cdb(this))}}
C.anN.prototype={
R(){return new C.biy(null,null)}}
C.biy.prototype={
gaYG(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYG().q()
this.btB()},
B(d){return B.c6(this.gaYG(),new C.dFE(),this.a.c)}}
C.aKA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.ad_.prototype={
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
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dl,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dm,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d6)
n.push(B.B(B.a([B.E(new C.adh(A.hB,"Download",A.bY,new C.ep1(w,d),!0,v),1),A.av,B.E(new C.adh(A.vC,"Share",A.bj,new C.ep2(w,d),!1,v),1),A.av,B.E(new C.adh(A.hn,"Safari",A.aZ,new C.ep3(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ep4(d),v,v))
return B.bm(!0,new B.D(A.pN,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.Ff,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adh.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bvn,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0r.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apN(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6Z().ak3(1.35)
s=B.av4(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bz3(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bQT,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wf,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zs,A.an,h,A.SX,h,h)
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
w=n?t.cGD(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.D6
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SO:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fB
j.r=A.aA.gp(0)
j=i.cnI(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cnG(k,t,l?A.SO:s)],x.p),h)}else w=i.cnH(p,t,g.k2?A.SO:s,m)
v=new B.nc(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bX3()
case 3:return i.cfj()
case 2:return B.b3(h,h,h,new C.b0o(g,h),A.f0)
case 5:g=g.r
return new C.b0q(g,!i.e&&i.z==null,h)}},
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
e=B.a([new B.cR(D.adp,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cd
w=A.aA
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mJ
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
k=A.O
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
for(t=o.d,q=0;q<8;++q){p=D.cUF[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bTk.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Ke,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bTF.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
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
if(D.eL5.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cd9(h)
v=r.k2?C.i3v(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.D6
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xp(B.de(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cnI(d,e,f,g){return this.ayw(d,e,f,!1,g)},
cnG(d,e,f){return this.ayw(d,e,f,!1,null)},
cnH(d,e,f,g){return this.ayw(d,e,f,g,null)},
bz3(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bX3(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.kY?A.G9:A.Bp,A.az,t,t,t,32),t,t,t)}w=u.bC2(r)
if(s.b===D.kY){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cq,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aN2(r,!0)
return C.fyF(s.go,v,s.id)}return w},
aN2(d,e){var w,v,u,t
try{w=C.i3O(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.cd8(this,w,v,e))
return u}catch(t){return D.ab9}},
bC2(d){return this.aN2(d,!1)},
cfj(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4j
return C.i45(v,w.db,w.dx)}}
C.b0o.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aY(s,g)
d.aY(s,w)
break
case 1:d.hO(s,g)
d.hO(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 3:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
h=t*0.45
r.F(new B.b5(0,h))
f=u*0.65
r.F(new B.ap(f,h))
r.F(new B.ap(f,t*0.2))
r.F(new B.ap(u,t*0.5))
r.F(new B.ap(f,t*0.8))
t*=0.55
r.F(new B.ap(f,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 4:h=t/2
w.c=v+2
d.bC(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
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
if(v!=null)h.bz(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bz(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bF())
d.aO(r,g)
d.aO(r,w)
break}},
ar(d){return d.b!==this.b}}
C.aIb.prototype={
R(){return new C.btL(null,null)}}
C.btL.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.id,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvU()},
aNd(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dm,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bzh(){var w,v=this,u=null,t=v.aNd("Slide A",A.bj),s=v.aNd("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f3K(v,s,t),u)},
B(d){return this.bzh()}}
C.aIO.prototype={
j3(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.UB.prototype={
R(){return new C.biL(null,null)}}
C.biL.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AR,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRB(u),x.a)},
bs(d){var w,v,u,t=this
t.bD(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRA(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btQ()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRz(this),v.d)}}
C.Ir.prototype={
B(d){return B.cp(new C.cd1(this))}}
C.ayV.prototype={
R(){return new C.bde()}}
C.bde.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LB,new C.d49(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UB(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ci,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UB(t,B.p(p,D.fhS,A.f,p,p,new B.o(s,p,B.I(A.b3,A.q,1),r,p,p,A.n),p,p,p,p,A.jf,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b_D,A.bd)}}
C.a7m.prototype={
R(){return new C.bjp(null,null)}}
C.bjp.prototype={
gaZc(){var w=this.a
if(w.e)w=D.eLc.t(0,w.c)||D.aMM.t(0,A.d.gJ(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZc()){w=C.i2a(v.a.c)
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
return B.c6(u,new C.ecj(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZn.prototype={
B(d){var w=null
return B.av(C.b0s(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.beo.prototype={
j3(d){return C.a2_(this.b,new B.a9(0,0,0+d.a,0+d.b).cB(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpl.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cB(-this.d),g=this.b,f=C.a2_(g,h),e=a1.gdO(),d=new C.eTS()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOh.av(0,h))
a0.aO(f,w)
g=C.a2_(g,h.cB(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.biK.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eUM.av(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hv(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eUK.av(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a2_(g,h.cB(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hv(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.oy.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eUF.av(0,h))
a0.aO(f,w)
w=C.a2_(g,h.cB(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b7O.gp(0)
a0.aO(w,v)
g=C.a2_(g,h.cB(e*0.03))
v=d.$1(e*0.004)
v.r=D.bai.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOh.av(0,h))
a0.aO(f,g)
for(g=B.x_(f),w=B.a([],x.X),g=new B.vt(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jU(y.M));--q
g.jp()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bu(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jp()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jp()
m=w[q].Mr(p*n/o).a
l=D.cS0[A.o.E(n,4)]
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
g.saq(D.eUO.av(0,h))
g.z=new B.hv(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.saq(D.eUL.av(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a2_(g,h.cB(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nG.gp(0)
a0.aO(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bql.prototype={
a4(d,e){d.FF(C.a2_(this.b,new B.a9(0,0,0+e.a,0+e.b).cB(-this.c)),A.w,e.gdO()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aKO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.aLj.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.aMG.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.a7F.prototype={}
C.NC.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aDL(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge_(){return this.c},
gTc(){return this.r},
gTd(){return this.w},
gLi(){return this.x}}
C.aDL.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fDB()
$.hlr=new C.evf(v)
w=B.bj(null,A.AP,null,1,null,v)
w.fc(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.I8()},
bs(d){var w,v,u=this
u.bD(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O6(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.I8()}},
iY(d){if(d===A.zV||d===A.rU||d===A.rT||d===A.pk)this.ts()},
q(){var w,v,u,t=this
$.aW.hF(t)
w=t.at
if(w!=null)w.a7(0)
t.ts()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h4()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.buA()},
gaaT(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOq(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abm(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRS())return!1
return!0},
kc(){return this.abm(null)},
ai6(){var w=this.c
if(w==null)return
w.I(x.q).f.S(D.eT3)},
qd(){if(!this.kc())return!1
this.ai6()
return!0},
aqa(d){var w,v,u,t,s,r=this
if(r.abm(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hky(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zJ(){return this.aqa(null)},
I8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$I8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqE(k),$async$I8)
case 3:j=e
w=4
return B.b(C.apf(k),$async$I8)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fSW(j,t.bZW())
w=t.gaaT()?5:7
break
case 5:r=t.gOq()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZB(r),$async$I8)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.erD())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.erE())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yr(m==null?"":m)!=null)continue
C.fDN(n,s)
p=!0}t.m(new C.erF(t,s))
if(p||s.length>J.ad(j))t.ts()
case 1:return B.h(u,v)}})
return B.i($async$I8,v)},
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
v.a9J(d)
w=A.d.bd(v.d,new C.etd(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hC())
v.db=!1},
cgf(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ku(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cm5(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i0>")
s=B.C(new B.cQ(new B.a1(s,new C.et1(),w.k("a1<1>")),new C.et2(),v),v.k("J.E"))
return s},
O6(d){return this.bNX(d)},
ts(){return this.O6(null)},
bNX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cgf()
w=3
return B.b(C.Vz(d==null?t.a.c:d,s),$async$O6)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqa(r)?4:5
break
case 4:w=6
return B.b(C.a6T(r),$async$O6)
case 6:q=r.x
p=A.a.i(q==null?t.gOq():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.er0())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.ck(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
pg(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.ku(u.w))===!0?A.hY:A.lK
v.at=B.cM(w,new C.eul(v))},
aYH(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeO(u.hC(),v.f,v.r))
if(w.length>40)A.d.cC(w,0)
A.d.a9(v.ay)},
czs(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.evb(w,v.pop()))
w.pg()},
clb(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.etb(w,v.pop()))
w.pg()},
oc(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.euZ(u))
if(w>=0){u.d[w]=u.e.hC()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xa(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xl(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h4()}w.a9(0)},
JQ(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.db(new B.cQ(new B.a1(w,new C.ev_(),v.k("a1<1>")),new C.ev0(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h4()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.ev1(n))
s.cg(0,p,new C.ev2())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hu(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqp(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOq()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hC())}u.oc()
u.pg()},
ait(d,e){var w,v,u,t,s=this
if(s.kc())return
w=s.Xa(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ku(v.w))===!0
if(u){C.i2e(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i2f(t,w.d+w.f*0.5)}}s.Hu()
s.oc()
s.pg()
if(u&&s.c!=null)s.m(new C.evc())},
cAw(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hu()
w.oc()
w.pg()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqi(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i0g(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gJ(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXi(v)
t=q.bXh(v)
s=B.b0(v.e)
r=v.f
return new C.jF(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hE4(o)},
bXi(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXh(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aen(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaT()){w.c.I(x.q).f.S(D.eRG)
return}w.a9J(d)
w.aZT(C.bBs(d))
return}if(C.cdV(v)){w.a9J(d)
w.aZT(d)
return}w.m(new C.esk(w,d))},
aqK(){var w,v,u,t,s,r,q=this
q.a1D(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ku(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqn(q))
if(r&&q.c!=null){u.toString
q.Jq(u,s)}return}q.ts()
q.m(new C.eqo(q))},
aZS(d){this.a9J(d)
this.a_9(d,!0)},
a9J(d){if(!C.ku(d.w))return
C.fDN(d,this.d)},
a_9(d,e){return this.cca(d,e)},
aZT(d){return this.a_9(d,!1)},
cca(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBs(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOq():r)
t.dy.W(0,q.toLowerCase())
C.apg(t.a.c,q)}r=s}else r=d
w=C.cdV(r.w)?3:4
break
case 3:w=5
return B.b(t.a9K(r),$async$a_9)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.esH(l))
o=l.a.hC()
n=C.ku(o.w)&&C.i3q(o)
t.m(new C.esI(t,o,p))
if(n){m=A.d.bd(t.d,new C.esJ(o))
if(m>=0){t.d[m]=o.hC()
t.ts()}}if(!t.abm(l.a))t.Yi()
r=!1
if(t.c!=null)if(!t.abm(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqa(r)&&C.fzQ(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.S(D.eSf)
case 1:return B.h(u,v)}})
return B.i($async$a_9,v)},
a9K(d){return this.bM9(d)},
bM9(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ld(r.c,A.za),$async$a9K)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kS(!1,r,s.c,s.d,null,A.za,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9K,v)},
o3(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cdV(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdj(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o3,v)},
ae4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esj(),s,null,!0,!0,x.H),$async$ae4)
case 3:if(t.c==null){w=1
break}t.aqK()
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
ae3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esg(),s,null,!0,!0,x.H),$async$ae3)
case 3:if(t.c==null){w=1
break}t.m(new C.esh())
t.aqK()
case 1:return B.h(u,v)}})
return B.i($async$ae3,v)},
Yi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yi)
case 3:r=e
if(B.kh(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Yi)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eQj)
case 1:return B.h(u,v)}})
return B.i($async$Yi,v)},
Jq(d,e){return this.cmx(d,e)},
cmx(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jq=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ag8(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jq)
case 9:w=4
break
case 6:w=10
return B.b(C.ag9(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jq)
case 10:w=4
break
case 7:w=11
return B.b(C.aga(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jq)
case 11:w=4
break
case 8:w=12
return B.b(C.agb(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jq)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jq,v)},
bYP(){var w,v,u,t,s=this
if(!s.gaaT()){s.c.I(x.q).f.S(D.eQw)
return}w=s.gOq()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag7(u,t,v,new C.erz(s),new C.erA(s),w)},
aeo(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.esq(u),s,!0,!0,!1,A.ls,!1,!1,x.N),$async$aeo)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agb(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag8(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag9(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aga(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYP()
return B.h(null,v)}})
return B.i($async$aeo,v)},
cbh(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYH()
w=C.cC()
v=C.Bs(t,t,t,t,D.Cw,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.esr(u,v))},
a9a(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7V(s),$async$a9a)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.eqr())
t.d3(new C.eqs(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9a,v)},
agm(d,e,f,g){var w=null,v=g?A.dr:A.bL,u=B.I(g?A.b3:A.cq,A.q,1)
return B.hr(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
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
p=B.C(new B.a1(r,new C.esC(),q),q.k("J.E"))}o=s!=null&&s.b===D.lr?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.S(D.eSq)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esD(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_8,v)},
aeF(){return this.cc9()},
cc9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7H(s,t.f+1,o),$async$aeF)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kC(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.esF(q))
t.d3(new C.esG(p,t,o,q,r))
t.c.I(x.q).f.S(D.eSP)
case 1:return B.h(u,v)}})
return B.i($async$aeF,v)},
aeM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()||!t.zJ()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.esX(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.S(D.eQ4)
w=1
break}o=new B.K(p,new C.esY(),B.U(p).k("K<1,M>")).fa(0,new C.esZ())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.et_(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeM)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.et0())
case 1:return B.h(u,v)}})
return B.i($async$aeM,v)},
aer(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aer=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hmx(s,new C.Ef(r,q,p,o==null?"":o)),$async$aer)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.ess(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agy(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aer,v)},
a9D(){return this.bLw()},
bLw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7U(s,t.f+1,l),$async$a9D)
case 3:r=e
q=$.fWp
$.fWp=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.eqI())
t.c.I(x.q).f.S(D.ePW)
w=1
break}if(!q){s=r.CW
s=C.hlp(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.eqJ(t,l,r))
t.c.I(x.q).f.S(D.eTi)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kC(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.eqK(p))
o=s.length
t.d3(new C.eqL(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9D,v)},
aPi(d,e){if(e){this.afe()
return}this.cbh(d,!1)},
bHb(){return this.aPi(null,!1)},
afe(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bX,null,new C.et6(t),r,!0,!0,!0,A.p4,!1,!1,x.N),$async$afe)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.et7(t,C.i0f(s).pu()))
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
d3(d){var w=this
if(w.qd())return
w.Hu()
w.aYH()
w.m(d)
w.JQ()
w.oc()
w.pg()},
a7E(){this.d3(new C.epm(this,D.mD))},
aQL(){var w=this.gdr()
if(w==null)return
this.d3(new C.eqG(this,w))},
aPU(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.eqE(this))},
b1T(d,e){if(this.e==null||d===e)return
this.d3(new C.etf(this,d,e))},
NE(d){return this.bJb(d)},
bJb(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOq():s)
w=5
return B.b(C.ape(t.a.c,r),$async$NE)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aqG(s)
w=6
return B.b(C.b0w(t.a.c,s),$async$NE)
case 6:if(t.c==null){w=1
break}t.m(new C.eqA(t,d))
w=7
return B.b(t.ts(),$async$NE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NE,v)},
cmu(d,e){var w=this
if(d.z){w.ai6()
return}w.m(new C.ete(w,d,e))
w.pg()},
jO(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wb(d){return this.ch.cg(0,d.a,new C.eqq(d))},
asA(d){return this.CW.cg(0,d.a,new C.er1())},
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
u.Wb(w).saV(0,"")}u.m(new C.euX(u,d))
$.aW.x1$.push(new C.euY(u,d,w))},
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
r.m(new C.eum(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jD()}},
aLB(){this.d3(new C.epn(this))},
oX(d){return this.byk(d)},
byk(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$oX)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epk(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oX,v)},
Vk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gm(78,1920),$async$Vk)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.epa(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vk,v)},
Ve(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ve=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CB(t.a.c),$async$Ve)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gam(s)){t.c.I(x.q).f.S(D.eTS)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gJ(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.ep7(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Ve)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.ep8(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Ve,v)},
arA(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b4(w.gdr().z,new C.eqC(v))){w.c.I(x.q).f.S(D.eST)
return}if(w.w===v)w.a1D(!0)
w.d3(new C.eqD(w,v))},
bFr(){var w=this.jO(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMi(d,e){var w=this,v=w.jO(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.epP(w,v,d,e,t,u))},
bzV(d){return this.aMi(d,null)},
a7W(d){return this.bA2(d)},
bA2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6d.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o3(),$async$a7W)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jO()
if(s!=null){r=s.b
if(r===D.cQ)t.bzV(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aMi(r.j(0.88),r)}w=1
break}t.d3(new C.epU(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7W,v)},
a7V(d){return this.bA0(d)},
bA0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7V=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.o3(),$async$a7V)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epS(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7V,v)},
bzL(d){var w=this.gdr()
if(w==null)return
this.d3(new C.epO(this,w,d))},
a_e(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i7Q(r),$async$a_e)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oc()
t.m(new C.esR(t,s))
w=4
return B.b(t.ts(),$async$a_e)
case 4:if(t.c!=null)t.aen(s)
case 1:return B.h(u,v)}})
return B.i($async$a_e,v)},
a9v(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1D(!0)
t.oc()
s=t.c
s.toString
w=3
return B.b(C.QO(s,q),$async$a9v)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9v,v)},
Dm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oc()
t=4
w=7
return B.b(C.aPo(m),$async$Dm)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aON(o,q,m.b),$async$Dm)
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
s=h.a=t.e.hC()}else{r=A.d.bd(t.d,new C.ev5(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.i1d(q?"":s)
o=C.hkl(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a1<1>")
n=B.C(new B.a1(s,new C.ev6(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cse(n.length,o,s),$async$F0)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i17(h.a)
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
break}k=A.d.i1(t.d,new C.ev7(s))
s=h.a.b
w=11
return B.b(t.csb(k.b,s),$async$F0)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.i1c(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.S(D.eU2)
w=1
break}w=12
return B.b(t.csc(j.a,s,o,j.c),$async$F0)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ev8(h,t,i))
t.pg()
case 1:return B.h(u,v)}})
return B.i($async$F0,v)},
cse(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.euC(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
csd(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.euB(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
csb(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.euv(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
csc(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.eux(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaX(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaY(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dl,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ey,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f3q,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aU1(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Tv,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aU4(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nu,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bs,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erv(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bWe(d,e,f,g,h,i){return this.aU4(d,e,f,!1,g,h,i)},
atU(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dm,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YH,w,w,w)},
aU3(d,e,f){var w=null,v=B.bl(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.ns,w,w,w),new C.eru(d,f),v)},
aU2(d,e){return this.aU3(d,e,null)},
JH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p2(l,s.c,s.d),$async$JH)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aF("=",l.length)+"\n\n"
q=new B.fe(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.fb(l,new C.eun());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9w(l.charCodeAt(0)==0?l:l,r.b),$async$JH)
case 4:l=t.a
w=5
return B.b(B.p1(l.c,l.d),$async$JH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JH,v)},
HP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p2(q,s.c,s.d),$async$HP)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9w(A.R.ao(r.ag(),null),r.b+".json"),$async$HP)
case 4:q=t.a
w=5
return B.b(B.p1(q.c,q.d),$async$HP)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HP,v)},
b50(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oc()
u.ts()
w=u.c
w.toString
v=B.ea(new C.euW(u,t),!1,null,x.z)
B.a5(w,!1).c8(v)},
H2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$H2)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fE_(),$async$H2)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i4_(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.aA,null,new C.epf(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H2)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.epg(t,s))
w=1
break}if(p==="split")t.d3(new C.eph(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H2,v)},
N_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}w=3
return B.b(t.o3(),$async$N_)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPn(s,null,null),$async$N_)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epl(t,r))
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
return C.aPn(s,t==null?null:B.b0(t),u)},
a7C(d){return this.byb(d)},
byb(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zJ()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eUh)
w=1
break}w=3
return B.b(t.aNA(),$async$a7C)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epc(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7C,v)},
ag_(d){return this.cle(d)},
cle(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zJ()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eTq)
w=1
break}w=3
return B.b(t.aNA(),$async$ag_)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.etc(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ag_,v)},
c7Z(){var w,v,u=this
if(u.kc())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bA(v).a<=5e5?++u.fr:u.fr=1
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
this.d3(new C.ev3(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWz(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.ery(this,r,u.d))},
c0b(d){var w
if(this.kc())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fAB(d))return!1
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
if(C.fAB(d))return!1
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
break}s.I(x.q).f.S(D.eSg)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.api(p),$async$N8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.S(D.eSV)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gJ(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6T(r)
w=1
break}t.m(new C.epY(t,d,o))
t.oc()
$.aW.x1$.push(new C.epZ(t))
case 1:return B.h(u,v)}})
return B.i($async$N8,v)},
Vi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o3(),$async$Vi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bC8(),$async$Vi)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.ep9(t,s))
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
return B.b(C.fDR(r),$async$NS)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.er_(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
iU(d){this.d3(new C.epi(this,d))},
q3(d){return this.bzE(d)},
bzE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qd()){w=1
break}m=!D.aMP.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o3(),$async$q3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H2()
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
if(s!=null)t.d3(new C.epr(s))
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
case"new_slide":t.a7E()
w=1
break A
case"export_json":t.HP()
w=1
break A
case"outline_share":t.JH()
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
break A}t.d3(new C.eps(t,s))
w=1
break A
case"delete_el":t.arA()
w=1
break A
case"bring_fwd":s=t.jO()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.ept(t,s))
w=1
break A
case"send_back":s=t.jO()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.epE(t,s))
w=1
break A
case"align_left":s=t.jO()
if(s!=null)t.d3(new C.epH(s))
w=1
break A
case"align_center":s=t.jO()
if(s!=null)t.d3(new C.epI(s))
w=1
break A
case"align_right":s=t.jO()
if(s!=null)t.d3(new C.epJ(s))
w=1
break A
case"grayscale":case"brighten":t.NS()
w=1
break A
case"flip_h":s=t.jO()
if(s!=null)t.d3(new C.epK(s))
w=1
break A
case"flip_v":s=t.jO()
if(s!=null)t.d3(new C.epL(s))
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
case"arrow":t.oX(D.Cy)
w=1
break A
case"line":case"divider":t.oX(D.fs)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fb(q,new C.epM()),o=0;p.C();){n=A.a.fE(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a1(n,new C.epN(),B.U(n).k("a1<1>")).gM(0)}t.c.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iU(C.iT(A.L,!1,t.gqi().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mE,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iU(C.iT(A.L,!1,t.gqi().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iU(C.iT(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uf,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iU(C.iT(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.ue,0.8,0.1,0.22))
w=1
break A
case"quote":t.iU(C.iT(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iU(C.iT(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.uf,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iU(C.iT(A.dM,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bCa(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iU(C.iT(A.dM,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.epu(t))
w=1
break A
case"footer_bar":t.d3(new C.epv(t))
w=1
break A
case"highlight":t.d3(new C.epw(t))
w=1
break A
case"redact":t.d3(new C.epx(t))
w=1
break A
case"callout":t.d3(new C.epy(t))
w=1
break A
case"checkboxes":t.iU(C.iT(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iU(C.iT(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.epz(t))
w=1
break A
case"letter":t.iU(C.iT(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bCa()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iU(C.iT(A.bg,!1,4279310375,A.aD,22,A.bl,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uf,0.8,0.1,0.12))
w=1
break A
case"toc":t.iU(C.iT(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iU(C.iT(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iU(C.iT(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iU(C.iT(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mE,0.32,0.62,0.08))
w=1
break A
case"draft":t.iU(C.iT(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iU(C.iT(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.epA(t))
w=1
break A
case"progress":t.d3(new C.epB(t))
w=1
break A
case"stars":t.iU(C.iT(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q9,0.8,0.1,0.4))
w=1
break A
case"equation":t.iU(C.iT(A.L,!1,4279310375,A.aD,32,A.bl,A.O,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iU(C.iT(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ue,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.epC(t))
w=1
break A
case"compare":t.d3(new C.epD(t))
w=1
break A
case"link_text":t.iU(C.iT(A.bg,!1,4280640491,A.mJ,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iU(C.iT(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iU(C.iT(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.epF(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.epG(t,r))
w=1
break A
case"invoice":t.iU(C.iT(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iU(C.iT(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iU(C.iT(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bCa()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iU(C.iT(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iU(C.iT(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q3,v)},
crG(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eL9.t(0,this.z)},
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
t=C.i3P(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NE,A.f,p,p,D.DO,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLM(d){var w,v=null,u=this.jO()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.Q6,new C.eqZ(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v3(d){return this.byj(d)},
byj(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMJ.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o3(),$async$v3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epj(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eJW
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
m=t?A.bX:D.b9M
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRS()}else j=!1
if(j)k.push(new C.a7n(h.a.c,!1,h.e.gb8P(),h.gc7W(),g))
else if(s&&h.e!=null&&!h.kc()&&C.cdV(h.e.w)){j=h.a
k.push(new C.a7n(j.c,j.d,g,h.gc94(),g))}if(s)k.push(h.bLI(w,t,r))
if(s&&h.kc()){w=t?A.fo:A.kk
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bKE,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fo,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AW,A.ie,g,g,g))}w=!n
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
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c14(t))
return B.c8(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bC8(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bL
v=r.a.e
u=r.c7_(A.bj,A.pR,new C.eq1(r),r.gcbe(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLj(A.bj,A.hz,"Blank Presentation",new C.eq2(r)),1),A.av,B.E(r.aLj(A.aZ,A.vJ,"Class Template",new C.eq3(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mI,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bz6(w))
else{t=new B.hZ(t,B.U(t).k("hZ<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eq4(r,w),x.l))}return B.c8(q,p,B.bm(!1,B.cz(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bK_(){this.m(new C.eqF(this))
var w=this.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jD()}},
aeG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jO()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esQ(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeG,v)},
AG(d,e){return this.cs1(d,e)},
cs1(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hT(D.Wg,!0,"Dismiss",j,new C.euo(),new C.eup(d,e),A.iy,!0,x.N),$async$AG)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ai6()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRS()){r.ai6()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPo(d),$async$AG)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aON(j,q,d.b),$async$AG)
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
return B.b(B.hT(D.Wg,!0,"Dismiss",j,new C.euq(),new C.eur(d),A.a1,!0,x.y),$async$AG)
case 20:if(g===!0)r.NE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afJ("Rename presentation",d.b),$async$AG)
case 24:l=g
if(l!=null)r.cmu(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eus(r,k))
r.pg()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AG,v)},
b_x(d,e){var w=null
return B.bK(!1,D.frQ,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lL,w,w,w,w,w,A.k1,w,w))},
bz6(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epo(this,d),null)},
bI5(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eqt(),x.dv).c_(0,new C.equ()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.agy,this.aLT(v,e,new C.eqv(),f),null)},
aLT(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bv,n,n,n,10),A.qg],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cn(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nc,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eh)},
bz4(d,e,f){return this.aLT(d,e,null,f)},
bI7(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.db2
else if(v==="hati_kuhoweya")w=D.cYk
else{if(v==="hati_kiapo_uongozi")v=D.cLh
else v=C.ku(v)?D.cSk:A.PI
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eqy(this,f,d,e,w),null)},
c14(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jO()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wb(i)
v=k.asA(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.AZ,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fnz,j,j,!0,j,j,new C.erZ(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aA:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c0(new B.D(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bQB,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wf,j,j,j,j,j,j,!1,"\u2022",j,new C.es_(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zs,A.an,j,A.SX,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.B(B.a([k.tQ(G.MD,j,new C.es0(k,i),d),k.tQ(G.ZR,j,new C.es1(k,i),d),k.tQ(I.akP,j,new C.es2(k,i),d),k.tQ(I.a_x,j,new C.es3(k,i),d),k.tQ(k.bz2(i.as),j,new C.es4(k,i),d),k.tQ(D.alX,j,new C.es5(k,i),d),k.tQ(D.alW,j,new C.es6(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(N.agH,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lg,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c13(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jO()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3a(A.jh,"Edit",new C.erK(o,m),d,!0))
if(w===D.lr)p.push(o.b3a(A.G3,"Shape & ring",new C.erL(o),d,!0))
p.push(o.tQ(A.BI,"Format",new C.erM(o),d))
if(v)A.d.v(p,B.a([o.tQ(G.MD,n,new C.erN(o,m),d),o.tQ(D.alX,n,new C.erO(o,m),d),o.tQ(D.alW,n,new C.erP(o,m),d)],q))
p.push(A.b6)
p.push(o.cpV(A.e6,n,o.gaPS(),d,!0))
p.push(o.tQ(A.hA,"Done",new C.erQ(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AX,A.lg,n,n,n)},
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
return new B.D(A.qX,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tQ(d,e,f,g){return this.ayV(d,e,f,g,!1,!1)},
b3a(d,e,f,g,h){return this.ayV(d,e,f,g,h,!1)},
cpV(d,e,f,g,h){return this.ayV(d,e,f,g,!1,h)},
bLI(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mS],m)
w=B.I(e?A.aK:A.os,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a23(A.eC,"Back",p.gbFb(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.E(B.B(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tp,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kc()){u=p.a23(A.r9,"Undo",p.ax.length===0?o:p.gczr(),e)
A.d.v(r,B.a([u,p.a23(D.bEb,"Redo",p.ay.length===0?o:p.gcla(),e)],q))}r.push(p.a23(A.xY,"PDF",new C.eqS(p),e))
r.push(p.a23(A.hB,"Download as video",new C.eqT(p),e))
if(!p.kc())r.push(B.BG(o,o,B.X(A.o0,e?A.ad:A.bv,o,o,o,o),new C.eqU(p),A.J,new C.eqV(p),A.af,"More",x.N))
r.push(A.d9)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e6A,o,new B.o(o,o,o,B.m(14),o,K.Go,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazL(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bq5,D.bvc,o,o,o)},
cyW(d){var w=this,v=null,u=B.m(18),t=d?A.aA.j(0.92):A.c.j(0.96),s=B.I(d?A.cB:A.aL,A.q,1)
return B.p(v,B.cd(B.B(B.a([w.iE(A.tV,"Print",new C.ev9(w),d),w.iE(A.xY,"Download PDF",new C.eva(w),d),w.iE(A.pX,"Present",w.gazL(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AW,G.ail,v,v,v)},
a23(d,e,f,g){var w,v=null
if(f==null)w=g?A.b3:A.dq
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cb)},
c17(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aA.j(0.92):A.c.j(0.96)
u=B.I(d?A.cB:A.aL,A.q,1)
t=x.f0
t=B.C(new B.K(p,new C.es9(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ai0,new B.fg(new C.esa(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vq,r.agm(A.lh,"Ending celebration",r.gcbr(),d),q),new B.D(R.vq,r.agm(A.G3,"Logo ring & frame",r.gcc7(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.D(R.vq,r.agm(A.nf,"Look and feel",r.gcc8(),d),q),new B.D(R.vq,r.agm(A.oQ,"Edit this slide's text",r.gccF(),d),q)],x.p):A.ha)
t.push(new B.D(R.vq,B.hr(B.aE(q,B.p(q,D.eJo,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lc.j(0.4),A.J,10)],x.V),D.anV,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esb(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bvF,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cnE(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AW,q,q,q,q)},
cnE(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d53[v]
u.a=null
s=u.a=t.b
w.push(e.lE(e.cpk(s),t.a,new C.ety(u,e),a3,D.aMJ.t(0,s)))}w.push(e.iE(A.kR,"Notes Slide",new C.etz(e),a3))
w.push(e.lE(A.G2,"Quiz",new C.etA(e),a3,!0))
w.push(e.lE(L.FG,"Worksheet",new C.etL(e),a3,!0))
w.push(e.lE(V.G5,"Flashcard",new C.etW(e),a3,!0))
w.push(e.lE(A.Nu,"Lab Report",new C.eu6(e),a3,!0))
w.push(e.lE(A.tP,"Rubric",new C.eud(e),a3,!0))
w.push(e.lE(A.oK,"Minutes",new C.eue(e),a3,!0))
w.push(e.lE(A.o_,"Syllabus",new C.euf(e),a3,!0))
w.push(e.lE(A.Ny,"Timeline",new C.eug(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d6g[v]
w.push(e.lE(r.b,r.c,new C.euh(e,r),a3,!D.aMP.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iE(A.yi,a0,e.gaLA(),a3),e.iE(A.tS,"Picture",new C.etB(e),a3),e.iE(A.yc,"Bio link",new C.etC(e),a3),e.iE(A.a02,"Table",new C.etD(e),a3),e.iE(A.Nx,"Sticky",new C.etE(e),a3),e.iE(A.tR,"Divider",new C.etF(e),a3),e.iE(A.BJ,"Header",new C.etG(e),a3),e.lE(A3.vz,"Rectangle",new C.etH(e),a3,!0),e.lE(A.r1,"Circle",new C.etI(e),a3,!0),e.lE(A.a_m,"Triangle",new C.etJ(e),a3,!0),e.lE(A.iV,"Arrow",new C.etK(e),a3,!0),e.lE(D.bCF,"Parallelogram",new C.etM(e),a3,!0),e.lE(D.bF9,"Hexagon",new C.etN(e),a3,!0),e.lE(A.tR,"Line",new C.etO(e),a3,!0),e.lE(A.xY,"PDF",new C.etP(e),a3,!0),e.lE(O.a0c,"Signature",new C.etQ(e),a3,!0),e.iE(A2.Bz,"Quote",new C.etR(e),a3),e.iE(D.ZZ,a1,new C.etS(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=x.p
t=B.B(B.a([e.aMp("Wide 16:9",D.Cw,a3),e.aMp("Short 9:16",D.o9,a3),new B.D(A.fz,B.mG(D.bHi,d,D.fjU,d,new C.etT(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bFq("This slide",!e.Q,a3,new C.etU(e)),A.bp,e.aOA("All slides",e.Q,a3,new C.etV(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFr()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.K(D.a2_,new C.etX(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d7d[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.b3,1.5,A.q,-1)
l.push(new B.D(A.fz,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.etY(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDr()
g=B.U(h).k("K<1,D>")
h=B.C(new B.K(h,new C.etZ(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.N,q,A.am,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bYW(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jO()
w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=new C.etx(e)
t=new C.eui(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Q6,f.dy,new C.eu_(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Q6,q,new C.eu0(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iE(A.kR,w,new C.eu1(e),a3),e.iE(A.tV,"Print deck",new C.eu2(e),a3),e.lE(D.ajT,"Export JSON",new C.eu3(e),a3,!0),e.iE(A.fL,"Duplicate Slide",e.gaQK(),a3),e.iE(A.e6,a2,e.gaPT(),a3),e.ctm(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jO()
w=x.p
u=B.a([e.iE(D.ZZ,a1,new C.eu4(e),a3),e.iE(A.fL,"Duplicate",e.gaQK(),a3),e.iE(A.e6,a2,e.gaPT(),a3),e.iE(A.pX,"Present",e.gazL(),a3),e.iE(A.BH,a0,e.gaLA(),a3),e.iE(A.BC,"Fit Text",new C.eu5(e),a3),e.iE(A.xY,"Download PDF",new C.eu7(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iE(A.kT,"Transfer",new C.eu8(e),a3))
if(f!=null){w=B.a([A.ab,e.iE(G.MD,"Bold",new C.eu9(e,f),a3),e.iE(G.ZR,"Italic",new C.eua(e,f),a3),e.iE(G.aju,"Underline",new C.eub(e,f),a3),e.iE(Ae.ME,"Bullets",new C.euc(e,f),a3),e.bO3(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLM(a3))
w.push(e.iE(D.bBi,"Delete",e.gaPS(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMp(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o9
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7K,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bGu],v))
return new B.D(A.fz,B.j6(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.epX(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
ctm(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b3:A.cq,A.q,1)
u=B.m(8)
t=B.X(A.FE,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amV,q,q,q,new C.euF(r,p),q,q,q,q,q,A.cb)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amM,q,q,q,new C.euG(r,p),q,q,q,q,q,A.cb)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fk,A.mp,q,q,q)},
cpk(d){switch(d.a){case 6:return V.G5
case 7:return A.G2
case 8:return L.FG
case 4:return A.BJ
default:return A.kR}},
bO3(d,e){var w=null,v=B.I(e?A.b3:A.cq,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amV,w,w,w,new C.er4(this,d),w,w,w,w,w,A.cb),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amM,w,w,w,new C.er5(this,d),w,w,w,w,w,A.cb)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xH,A.mp,w,w,w)},
bYW(d){var w=null
return B.BG(B.D5(B.X(A5.a_1,d?A.ad:A.bv,w,w,w,16),w,w,D.fpn,w,w,w),w,w,new C.erC(),A.J,this.gbzK(),A.co,"Slide layout",x.fO)},
lE(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dr:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NE,A.f,w,w,D.DO,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.D(A.h7,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iE(d,e,f,g){return this.lE(d,e,f,g,!1)},
b4w(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hI(t,new C.euR(u,s,e,d),s.r.length,A.co,t,w,new C.euS(e),!1)
s=d?A.aA:A.bL
w=B.a([],x.p)
if(e&&!u.kc())w.push(new B.D(A.co,B.Ht(E.an7,new C.euT(u),B.nw(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNr,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDq(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o9?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aE(v,B.cp(new C.eql(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqm(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDs(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ku(a9.w))===!0,b1=b0&&C.fAB(b3),b2=b0&&b3.b===D.kY&&A.a.a0(b3.db,"marriage_sign_placed_")
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
if(w&&C.fZl(b3))o=a8
else if(p&&!a7.kc())o=a7.gc7Y()
else o=a7.kc()?a8:new C.eq9(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jz
i=w&&C.fZl(b3)&&a7.zJ()?new C.eqa(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eqb(a7,b3):a8
g=u?new C.eqc(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kY?A.K:a8
if(b1){a1=a7.kc()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bU,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zJ()
a3=b3.b===D.cQ
a4=a3?a7.Wb(b3):a8
a5=a3?a7.asA(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bU,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eqd(a7,b3):a8
a3=v&&a3?new C.eqe(a7,b3):a8
a6=C.b0s(q,a4,a1,b3,a5,a2,a3,new C.eqf(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bJj,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqg(a7,b3,b4,b5),a8,a8,new C.eqh(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kc()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJY,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWy(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kc()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bLv,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqi(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bU,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fy0,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kP,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqj(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
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
return B.aE(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
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
u=e?A.aA:A.aP
t=f?A.wG:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rt,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_x(e,new C.esd(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.m(10),A.dg),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ese(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS1(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jO()
if(a2==null)return A.bI
w=new C.eri(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_x(a3,a0.gbJZ())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fko,B.E(B.kX(a1,a1,a1,u,0.05,new C.erj(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fwt,B.E(B.kX(a1,a1,a1,t,0.05,new C.erk(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fek,B.E(B.kX(a1,a1,a1,96,10,new C.erl(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lr
if(l||n===D.kY||n===D.Rp)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fq4,B.E(B.kX(a1,a1,a1,s,0,new C.erm(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fxK,B.E(B.kX(a1,a1,a1,r,0,new C.ern(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BY[j]
i.a=null
g=h.a
i.a=g
k.push(B.j6(a1,a1,a1,new B.x(h.b,a1,A.ql,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ero(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BT[j]
f.a=null
g=e.a
f.a=g
h.push(B.j6(a1,a1,a1,new B.x(e.b,a1,A.ql,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erp(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bW(A.bz,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.K(v,new C.erq(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bz,l,A.bq,6,6),A.ac,B.ham(new C.err(w,a2),D.cmz,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.K(v,new C.ers(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dk(D.bLh,D.fs0,new C.ert(a0,a5),B.bl(A.bG,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cz(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cB:A.c
p=a4?A.wG:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rt,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F3,a1,a1,a1)},
bOk(d){return this.aS1(d,!1,!1,null)},
c7_(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.erw(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f4j,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.E(B.v(B.a([w,A.bB,A.cV,r.bz4(D.cPS,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hr(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eOI,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ek,8)],p),D.ao_,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6y,D.b6W],v):B.a([A.c,A.kk],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLj(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ep5(this,g,d,e,f),null)},
afJ(d,e){return this.cjr(d,e)},
cjr(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.eta(d,q),p,null,!0,!0,x.N),$async$afJ)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
Pv(d){var w=d.bS()
return""+B.bH(w)+"/"+B.bQ(w)+"/"+B.bA(w)}}
C.aeO.prototype={}
C.ayh.prototype={
R(){return new C.bc0(null,null)}}
C.bc0.prototype={
gcvx(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bH(u)+"/"+B.bQ(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pK,u,1,u,v)
w.fc(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.boA,u,1,u,v)
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
IJ(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hO(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bu1,B.c6(new B.h3(B.a([u,w],x.dS)),new C.d_L(this),v),v),v,v,v)}}
C.bce.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.bui,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.D(D.btu,B.v(B.a([B.p(w,D.bK3,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fu7,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f5s,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e3,D.bnE,B.B(B.a([B.E(B.bK(!1,D.fiD,w,w,!0,w,w,new C.d06(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n9,w,A.od,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fnU,w,w,!0,w,w,new C.d07(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n9,w,A.od,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.V2,new B.o(A.aA,w,u,v,D.cQb,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jt.prototype={
R(){return new C.bc_()}}
C.bc_.prototype={
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
return B.dU(B.dc(B.aE(o,B.vj(B.dj(o,B.B(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eF,o,o,o,A.nW,o,o,1/0),A.ct,A.jd,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_G(p,d),new C.d_H(p),new C.d_I(p),new C.d_J(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Ph.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eP,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ey,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nu,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_5.prototype={
R(){return new C.aDO(D.dd,null,null)}}
C.aDO.prototype={
gYo(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.boa,null,1,null,v)
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
C.avb(D.eV3)
C.i0L()
v.QU()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYo().q()
v=w.z
if(v!=null)v.a7(0)
C.avb(D.eV4)
C.i0O()
w.buB()},
cyj(){B.jj()
this.m(new C.evQ())
var w=this.c.I(x.q).f
w.a4a()
if($.bjM)w.S(D.eRW)},
QU(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h8w(u,w),1,120)),new C.evG(v))},
cxZ(){var w,v=this
v.m(new C.evP(v))
if(v.r)v.QU()
else{w=v.f
if(w!=null)w.a7(0)}},
gaTV(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cs7(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.evH(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.le,new C.evI(w))},
avp(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.evC(u))
u.QU()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTV()){u.cs7()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.evD(u,A.o.E(w+1,s)))
u.b4W(w)
u.QU()}},
ci5(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.evE(v))
v.QU()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.evF(v,w,t))
v.b4W(w)
v.QU()}},
ctz(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nc(d,new B.cx(u,x.ac))}w=v.ctA(u)
u=v.d
u===$&&B.c()
return B.qd(new B.nc(d,new B.cx(u,x.ac)),w,new C.evN(),A.bc,A.bc,new C.evO(v))},
ctA(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bow
case 16:return A.km
case 18:return A.n6
default:return A.n7}},
cty(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.un,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.RF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.ik,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.um,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.evJ(s),e)
case 9:return B.c6(s,new C.evK(s),e)
case 10:return B.c6(s,new C.evL(s),e)
case 11:return B.c6(s,new C.evM(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.il(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jy(B.jp(e,new B.bf(s,new B.bo(A.un,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqQ(w,t))
case 15:w=x.K
return B.jp(e,new B.bf(s,new B.bo(A.RF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mJ((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jI(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jy(new C.anN(B.c6(n.gYo(),new C.evR(n,v,w),m),m),A.r,m)}else{t=B.ru(new C.Ir(w,!0,!1,m))
l=B.b0(w.e)
u=n.ctz(B.el(B.jy(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.h8w(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oj,m,m,m),A.bp,D.bMk],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.N9(new C.Ef(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o9?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jy(B.uk(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjM){r=B.Ht(A.kV,new C.evS(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.Ht(B.X(n.r?Ak.ya:A.iW,m,m,m,m,m),n.gcxY(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hs,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aE(A.c4,B.p(A.l6,$.bjM?A.bI:s,A.f,m,m,m,m,64,m,m,D.bph,m,m,150),A.y,!1,m,n.gcyi(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.evT(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.JA.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.ahN,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_l,w,w,w,w,w,w,w,w)}}
C.bqQ.prototype={
j3(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgT.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aX8
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dj(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vQ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hY,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgS.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.djp.h(0,p)
if(o==null)o=D.d6p
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.am8:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eq,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aJv.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aLx.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.bwz.prototype={}
C.aLy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbw())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.bx()}}
C.b0v.prototype={}
C.VA.prototype={
R(){return new C.aDM()},
bfp(d){return this.e.$1(d)}}
C.aDM.prototype={
gb3g(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9T(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3g()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNf(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3g()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4v(){return A.d.cI(this.ga9T(),0,new C.evm())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gJ(w).a
v.Qv()},
Qv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b15(s.c,s.f),$async$Qv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evi(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qv,v)},
IL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9T()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fDN(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p2(o,q.c,q.f),$async$IL)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ea(new C.evl(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).c8(q),$async$IL)
case 4:q=t.a
w=5
return B.b(B.p1(q.c,q.f),$async$IL)
case 5:w=6
return B.b(t.Qv(),$async$IL)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IL,v)},
QS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hx(o,D.dWH,!0,"NgmySlidesTransferScan",x.N),$async$QS)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evj(t))
w=4
return B.b(C.agY(s),$async$QS)
case 4:r=e
t.m(new C.evk(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.S(D.eQP)
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
IK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9T()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p2(s,r.c,r.f),$async$IK)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fE1(null,A.d.gJ(n),s,t.a.f)}else q=C.fE1(n,null,r.c,r.f)
if(n.length===1){s=A.d.gJ(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Ga(q,"ngmy_slides_"+p,!1),$async$IK)
case 4:o=e
s=t.a
w=5
return B.b(B.p1(s.c,s.f),$async$IK)
case 5:w=6
return B.b(t.Qv(),$async$IK)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IK,v)},
a2e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evn(t))
w=3
return B.b(C.bBT(),$async$a2e)
case 3:s=e
t.m(new C.evo(t))
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
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.da:A.bL,k=o.ga9T().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evr(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zq],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.X(A.pR,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bMQ,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ey,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.byf],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hr(B.aE(A.c4,D.eOK,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gccR(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0H,A.n),n,n,n,n,E.Yv,n,n,1/0),A.e3,o.awA(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aW9(A.pX,m,new C.evs(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aW9(D.bCx,m,new C.evt(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.awA(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aA:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.K(u,new C.evu(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mI)
w.push(o.awA(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apk(A.aS,k,!0,A.jk,m,o.r,o.gc73(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLk(A.jQ,!0,A.iX,m,o.gcoV(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.E(o.bxz(A.aV,k,A.hB,m,o.r,o.gc70(),"Download .json","Backup file"),1),A.av,B.E(o.aLk(A.aH,!0,Ax.yk,m,o.gcAH(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lj,A.bj.j(0.9),n,n,n,18)
r=o.gaNf()
q=o.gb4v()
p=o.gb4v()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.v(B.a([new B.D(Ag.Me,i,n),B.E(B.cz(w,n,D.bsE,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vm,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeT(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i76(s,t.d,t.e),$async$aeT)
case 2:return B.h(null,v)}})
return B.i($async$aeT,v)},
awA(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aW9(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aA:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cA,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.co,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.D(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bI6(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aA:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bN0,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ef:A.r1
if(p)r=A.bj
else r=e?A.b3:A.dq
return new B.D(A.cC,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bf,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.evh(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apk(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aA:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r_,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amG,A.f,s,s,D.b_8,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.D(E.Y9,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLk(d,e,f,g,h,i,j){return this.apk(d,e,!1,f,g,!1,h,i,j)},
bxz(d,e,f,g,h,i,j,k){return this.apk(d,e,!1,f,g,h,i,j,k)}}
C.VB.prototype={
R(){return new C.bjL()}}
C.bjL.prototype={
a_(){this.a1()
this.adK()},
adK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fE1(null,A.d.gJ(m),k,r.a.f):C.fE1(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gJ(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ku(A.d.gJ(n).w))C.fDN(A.d.gJ(r.a.d),D.d4p)
n=r.a
m=n.c
n=C.i44(n.d)
w=7
return B.b(C.fE0(p,C.i49(r.a.d),n,m,q),$async$adK)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evv(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.evw(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.da:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.evx())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.evy(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zq],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dm,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0H,A.n),j,j,j,j,E.Yv,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a75,A.L,j,j))
else if(k.d==null)r.push(D.e69)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fj5,A.am,B.aE(j,B.p(j,B.B(B.a([D.bOz,A.av,B.d(m,j,j,j,j,j,j,D.f5Q,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bT8,A.n),j,j,j,j,A_.ahA,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.evz(k,d),j,j,j,j,j,j,!1,A.a8),A.N,D.fnq,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pJ(j,j,!1,l,j,!0,!0,j,!1,D.bk4),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.co,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c8(j,h,B.bm(!0,B.v(B.a([new B.D(Ag.Me,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bV4,A.n),j,j,j,j,A.tE,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahS,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDJ.prototype={
R(){return new C.aDK(new B.as(A.as,$.aw()),B.jO(!0,null,!0,!0,null,null,!1))}}
C.aDK.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.ep_(w))
$.aW.x1$.push(new C.ep0(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYJ(){var w,v=this.c
v.toString
w=C.yr(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.ul,36),D.aaE],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bK6,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fgi,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_y,k,k,k,k,A.xG,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge5()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aA:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bh,B.dj(A.A,new B.x(p,k,D.f_v,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hY,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Iz)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bRj,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.ub(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bb(5,k),new C.bu5()],x.aS),k,k,A.aOG,k,5,k,1,k,k,!1,"\u2022",k,new C.eoW(l),k,new C.eoX(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m1,k,k,k,k),0),0,0,0)],a1)
d=C.yr(w.a.a.toUpperCase())==null?k:l.gc74()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.K_,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.bt8,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.feJ,A.by,new B.a7(1/0,50,B.bG(D.fuY,d,B.bl(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nv,k,k,!0,k,k,new C.eoY(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu5.prototype={
ow(d,e){var w=e.a.toUpperCase()
return e.cGV(B.h9(A.bw,w.length),w)}}
C.aqH.prototype={
R(){return new C.aDN(B.z2(A.Lv,A.nC,A.u3))}}
C.aDN.prototype={
q(){this.d.q()
this.a2()},
aYI(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iN(w,d)},
a9N(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fMD(s),$async$a9N)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYI("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9N,v)},
c72(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i47(w[u])
if(t!=null){this.aYI(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vN,s,s,s,t.gbMg(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r4:Al.Na,s,s,s,s,s),s,s,s,new C.evB(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fwb,s,s,s,1,s,!0)
r=B.z1(t.d,A.bS,t.gc71())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fk9,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jf,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buh.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bIh,A.f,w,w,D.b_h,w,56,w,w,w,w,w,56),A.aQ,D.fvS,A.am,new B.kg(this.c,new C.f6b(),w,w,x.cI),A.aQ,new B.kg(this.d,new C.f6c(),w,w,x.cl),A.ac,D.fvP],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K_,new B.o(A.aA,w,u,v,w,w,A.n),w,w,w,K.YC,D.btL,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7n.prototype={
R(){return new C.bju(A.bx)},
gdd(){return this.c}}
C.bju.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZA()
w.d=B.dv(A.fU,new C.eda(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZA(){return this.clh()},
clh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ed8(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bA(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cdW(p.c),$async$ZA)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ed9(q,t))
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
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bY
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FE,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOb(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agC,A.ie,r,r,1/0)}}
C.a8f.prototype={
nb(){var w,v,u,t=this
t.x6()
w=t.cx
v=t.c
w.bp7(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pQ(B.F(["/S",D.e9P,"/URI",new B.rq(B.W8(w.as),A.uo,!0)],x.N,u),u))}}
C.a8g.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b28.prototype={
bwD(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e87],x.di)
this.w!==$&&B.aP()
this.w=w},
gcKd(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jN(w,new C.cg7(),B.a3(w).k("jN<co.E,H>")).fa(0,new C.cg8())},
aC2(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h7(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.to(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jc(d.a,d.b))
s.n(0,"/Border",B.to(N.aoo))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcKd()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pQ(w,x.Y))}}
C.cg9.prototype={}
C.a2s.prototype={}
C.ahR.prototype={}
C.aQy.prototype={
fZ(d){var w,v,u,t,s,r,q=this,p=null
q.le(d)
q.LE(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beN(w)
u=x.N
t=x.Y
s=new C.cg9(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwD(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pQ(B.F(["/Type",D.e9N],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8f(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.aw9.prototype={}
C.aS2.prototype={
fZ(d){var w,v,u,t,s=this
s.le(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e7(u.a,u.b,0,1)
u=d.b
u.i4()
t=s.a
t.toString
u.KN(t)
u.S6(0)
u.oR(0,v)
w.fZ(d)
u.ne(0)}}}
var z=a.updateTypes(["az<~>()","~(lD)","R(i0)","~()","R(eJ)","R(of)","R(lD)","~(i0)","R(eJ,eJ)","JA(Y)","R(nG)","R(l9)","az<R>()","H(H,i0)","a4<n,@>(i0)","ai<zl>()","n(nG)","R(a7E)","n(lD)","n(vR)","R(Eo)","H(i0,i0)","n(eJ)","r(eJ)","cL(eJ)","r(hy)","~(hy)","eJ(uA,M,M,M,M,H{fx:n,key:n,rotation:M})","eJ(n,M,H)","H(of,of)","R(zl)","R(n,ai<zl>)","a4<n,@>(of)","nG()","Yc(Y)","eJ(n,M,M,M,M,M{align:pW,anim:hy,bullets:R,color:H?,delay:H,fx:n,key:n,style:Ho,weight:oN})","a0s(Y)","eJ(n,M,M,M,M{anim:hy,delay:H,fx:n,key:n})","az<~>(of)","R(mp)","Ya(Y)","a0_(Y)","a_Z(Y)","P7(Y)","Zl(Y)","eJ(uA,M,M,M,M,H,n,n{anim:hy,delay:H,rotation:M,stroke:H,strokeWidth:M})","eJ(n,M,M,M,M,M,n,n,H)","eJ(M,M,n,H{size:M})","r(re,M,M)","l9()","of(a4<@,@>)","~(uq)","Eo()","ff(eJ)","r(iY)","YU(Y)","~(Ef)","Ze(Y)","H(eJ,eJ)","eJ(eJ)","a4<n,@>(eJ)","eJ(a4<@,@>)","lD(lD)","a4<n,@>(lD)","lD(a4<@,@>)","R(jF)","jF()","n(i0)","~(ai<of>)","S(ai<i0>)","S(i0)","ai<i0>(n?)","aci(Y,H)","~(R(eJ,eJ))","acX(Y)","aeE(Y,H)","w(lD,R)","Vm(Y)","ad_(Y)","Vp(Y)","~(mt)","i0(i0)","M(eJ)","a_t(Y)","a_5(Y)","i0()","ai<EK>()","az<~>(ai<i0>)","r(bv<H,i0>)","D(jF)","D(Eo)","az<~>(hy,~())","r(ai<hy>,hy?,~(hy),w)","R(m2)","ai<jo<mt>>(Y)","jo<mt>(mt)","i0(a4<@,@>)","VA(Y)","eJ(n,M,M,M,M,M,H{align:pW,style:Ho,weight:oN})","VB(Y)","r(i0)","~(lV)","Ir(Y,lD,r?)","H(a8g)","az<ai<a4<n,@>>?>()","n(n)","az<zj>({paper:n?,photo:dD?,request:n,template!lc})","az<a7w>({doc!zj,history:ai<+(n,n)>,instruction!n,photo:dD?,template!lc})","acU(Y)"])
C.cE2.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cE3.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cE4.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajt(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mp(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:75}
C.cE5.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bO2.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fqK.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iI(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iI(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iI(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iI(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYG.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:27}
C.bYH.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.bYJ.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fGH.prototype={
$1(d){return new C.a0s(this.a,this.b,C.i5_(),null)},
$S:z+36}
C.f4E.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f4I.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f4J.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4K.prototype={
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
C.f4F.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4G.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f4H.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f4z.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hE,w,w,w)
return B.ek(B.a([B.bK(!1,D.fiz,w,w,!0,w,w,new C.f4x(d),w,w),B.bK(!1,D.fhF,w,w,!0,w,w,new C.f4y(d),w,w)],x.p),w,w,D.Xa,v,w,w,w,w,D.fws,w)},
$S:19}
C.f4x.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f4y.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f4A.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f4B.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4O.prototype={
$0(){var w=this.a
return w.m(new C.f4N(w,this.b))},
$S:0}
C.f4N.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f4D.prototype={
$0(){var w=this.a
return w.m(new C.f4C(w,this.b,this.c))},
$S:0}
C.f4C.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f4L.prototype={
$0(){return this.a.a0H(this.b)},
$S:0}
C.f4M.prototype={
$0(){return this.a.OJ(0,this.b)},
$S:0}
C.f4R.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f4S.prototype={
$0(){var w=this.a
return w.m(new C.f4Q(w,this.b))},
$S:0}
C.f4Q.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f4P(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f4P.prototype={
$1(d){return d.a},
$S:z+67}
C.fbU.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h5L(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.of(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbV.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.ftm.prototype={
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
C.ftk.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.ftl.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fGb.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fqq.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fH2.prototype={
$1(d){return new C.Yc(this.a,null)},
$S:z+34}
C.cFo.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFq.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFt.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFu.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFs())},
$S:11}
C.cFs.prototype={
$0(){},
$S:0}
C.cFv.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1r(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cG(s)
p=q.bd(s,new C.cFr(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah7(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:298}
C.cFr.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFw.prototype={
$1(d){},
$S:30}
C.cFp.prototype={
$1(d){return new C.Ya(this.b,this.a.gcuT(),null)},
$S:z+40}
C.cFx.prototype={
$1(d){return D.fPe},
$S:z+43}
C.cFk.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WQ,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.btx,B.v(B.a([B.p(w,D.bHj,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fgJ,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f4S,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e3,new B.D(A.pN,B.B(B.a([B.E(B.dT(D.fns,new C.cFi(d),B.dh(w,w,w,w,w,w,w,w,w,E.n0,w,w,A.cl,w,new B.b7(B.m(14),A.Y),D.aXy,w,w,w,w)),1),A.av,B.E(B.bG(D.ftg,new C.cFj(d),B.bl(A.bG,w,w,w,w,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wJ,new B.o(D.acm,w,u,v,D.cUC,w,A.n),w,w,w,K.YC,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cFi.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cFj.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cFl.prototype={
$0(){return J.no(this.a.d,new C.cFh(this.b))},
$S:0}
C.cFh.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFg.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WQ,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bMd,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anV,A.n),t,44,t,t,t,t,t,44),A.bf,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQj,t,t,t),A.bB,D.ftc],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.deH[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ax2(u[1],u[2],u[3],new C.cFe(v,d),!1,t))}q.push(A.am)
q.push(D.bnH)
q.push(A.am)
q.push(new C.ax2(A.e6,"Delete book","Remove it from this device",new C.cFf(d),!0,t))
return B.bm(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acm,t,r,s,t,t,A.n),t,t,t,A.tz,E.Yf,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFe.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cFf.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cFn.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGd,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anE(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFm.prototype={
$0(){return this.a.c1L()},
$S:0}
C.cFd.prototype={
$0(){return this.a.aXi(0,this.b)},
$S:0}
C.cFc.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cFb.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cFy.prototype={
$2(d,e){var w=this.a
return w.bB7(J.q(w.d,e))},
$S:41}
C.cEF.prototype={
$0(){var w=this.a
if(w.c!=null)w.AB()},
$S:0}
C.cEE.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_a("Page "+(v.length+1),"",""))},
$S:0}
C.cEH.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cEP.prototype={
$0(){},
$S:0}
C.cEQ.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cEI.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c)},
$S:0}
C.cEG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEK.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEL.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEM.prototype={
$0(){var w=this.a
w.m(new C.cEJ(this.b))
w.DP()},
$S:0}
C.cEJ.prototype={
$0(){return this.a.c=""},
$S:0}
C.cEO.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEN(w,d))
w.DP()},
$S:z+51}
C.cEN.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEV.prototype={
$2(d,e){if(d)this.a.AB()},
$S:121}
C.cER.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AB(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.eTk)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cES.prototype={
$0(){return this.a.aWg(this.b,-1)},
$S:0}
C.cET.prototype={
$0(){return this.a.aWg(this.b,1)},
$S:0}
C.cEU.prototype={
$0(){return this.a.c30(0,this.b)},
$S:0}
C.fxT.prototype={
$1(d){return C.hfK()},
$S:44}
C.fxU.prototype={
$1(d){return null},
$S:30}
C.fgi.prototype={
$1(d){return null},
$S:30}
C.fyS.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fyR.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:251}
C.fyY.prototype={
$1(d){var w=this.a
return C.fZd(d)===w||C.hkh(d)===w},
$S:z+4}
C.ffl.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.c8f.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxR.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fxS.prototype={
$1(d){return C.fAB(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fsI.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xF,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fo2,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,D.fif,new C.fsG(d),B.bl(A.bY,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.vM,D.fph,new C.fsH(d),B.dh(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wH,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsG.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsH.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsJ.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.feB,w,w,!0,w,w,new C.fsE(d),w,w),B.bG(D.fvv,new C.fsF(d),w)],x.p),w,w,w,D.fxm,w,w,w,w,D.fev,w)},
$S:19}
C.fsE.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fsF.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e7Z.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e7X.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7Y.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e8_.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e80.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fyX.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.fyT.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dz(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fyV.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f62,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:179}
C.fyW.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hW,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hW,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fyU.prototype={
$2$female$size(d,e){var w=null,v=d?D.aec:this.a,u=B.I(A.hW,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acA,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fKu.prototype={
$1(d){return new C.acU(this.a,this.b,null)},
$S:z+108}
C.dXE.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bkx:A.L0,q=B.I(D.j9.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amF,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j9.j(0.35),A.ek,10)],x.V),D.bVG,A.n),t,t,t,t,A.xw,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(H.Yr,B.v(B.a([p,A.aB,B.B(B.a([o,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j9,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f5k,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ig(!0,t,e,A.y,D.aNI,new C.dXD(w,this.c),v,D.ahv,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m8,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.dXD.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aci(w,new C.dXC(this.b,w),null)},
$S:z+72}
C.dXC.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fsM.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fsN.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xF,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.frn,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsK(d),B.bl(D.j9,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o2,D.TC,new C.fsL(d),B.dh(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wH,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsK.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsL.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsQ.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fsR.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xF,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.ffz,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsO(d),B.bl(D.j9,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o2,D.TC,new C.fsP(d),B.dh(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wH,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsO.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsP.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsU.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fsV.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xF,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.flT,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsS(d),B.bl(D.j9,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o2,D.TC,new C.fsT(d),B.dh(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wH,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsS.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsT.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fLX.prototype={
$1(d){return D.fT_},
$S:z+74}
C.edd.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bco:A.L0,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bOv,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ek,10)],x.V),D.ao_,A.n),v,v,v,v,A.xw,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(H.Yr,B.v(B.a([r,A.aB,B.B(B.a([q,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.KY,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f2Q,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ig(!0,v,e,A.y,D.aNI,new C.edc(this.b),19,D.ahv,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m8,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.edc.prototype={
$2(d,e){var w=D.Qk[e]
return new C.aeE(w,new C.edb(this.a,w),null)},
$S:z+75}
C.edb.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fAF.prototype={
$0(){return B.fYc(C.hTx(this.a))},
$S:309}
C.fAE.prototype={
$0(){var w=C.fZv(this.a)
return"data:image/png;base64,"+A.cS.gcw().aJ(w)},
$S:22}
C.fdr.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jd(d,e),new B.jd(w,e+v),new B.jd(d+f*14,e),new B.jd(w,e-v)],x.J)
B.a1o(this.a,C.fy(4291404327),v)},
$S:703}
C.fM7.prototype={
$1(d){return new C.Vm(this.a,null)},
$S:z+77}
C.egv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egu())},
$S:29}
C.egu.prototype={
$0(){},
$S:0}
C.egw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egt(w,d))},
$S:1673}
C.egt.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.egx.prototype={
$1(d){},
$S:30}
C.eg7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eg3.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ege.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.egf.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.ejf)},
$S:0}
C.egg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.ega.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.egb.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.egc.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egd.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ic)}},
$S:8}
C.eg8.prototype={
$0(){var w=this.a,v=w.z,u=C.fBi(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cG2(C.fBi(t))},
$S:0}
C.eg5.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eg6.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egm.prototype={
$0(){return B.a5(this.a,!1).lQ()},
$S:0}
C.egn.prototype={
$0(){var w=this.a
return w.m(new C.egl(w))},
$S:0}
C.egl.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ego.prototype={
$0(){var w=this.a
return w.m(new C.egk(w,this.b))},
$S:0}
C.egk.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.egp.prototype={
$1(d){var w=this.a
return w.m(new C.egj(w))},
$S:9}
C.egj.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egq.prototype={
$1(d){var w=this.a
return w.m(new C.egi(w))},
$S:9}
C.egi.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.egr.prototype={
$0(){var w=this.a
return w.m(new C.egh(w,this.b))},
$S:0}
C.egh.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.egs.prototype={
$1(d){return this.a.Zm()},
$S:2}
C.eg4.prototype={
$0(){return this.a.c6k(this.b)},
$S:0}
C.cbW.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:334}
C.cbU.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cbV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAf.prototype={
bjS(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bO1(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cCx($.qP().jx(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mF(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjS(d,e)},
$S:1674}
C.fyx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyz.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:78}
C.fyy.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hq(t,t,t,t,B.de(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qj,A.c9,t,A.dZ,A.c7)
v=this.a
w.wy(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fd2.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a1(w,new C.fd3(),B.U(w).k("a1<1>")).gM(0)},
$S:241}
C.fd3.prototype={
$1(d){return d.length!==0},
$S:3}
C.fd0.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.fd1.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.cbX.prototype={
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
o=C.fZc(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fW3(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcet(),"\n\n")
d=B.hq(a6,a6,a6,a6,B.de(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adz(k,q,1.28),j),A.qj,A.c9,a6,A.dZ,A.c7)
d.wy(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fZc(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fW3(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adz(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qj,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azo(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:347}
C.cbY.prototype={
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
l=C.fZc(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fW3(g.length===0?B.a([a6],n):g,l))break}a1=o.adz(i,h,1.28)
a2=new C.cbZ(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Iy,new B.a7(v,a5,a4.f,a5),A.Iy,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bvQ,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qj,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azo(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:150}
C.cbZ.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qj,w,w),w)},
$S:1675}
C.fMa.prototype={
$1(d){return new C.Vp(this.a,this.b,null)},
$S:z+79}
C.ehG.prototype={
$1(d){return d.lZ()},
$S:1676}
C.ehH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehF(w,d))},
$S:1677}
C.ehF.prototype={
$0(){var w=this.b
return this.a.d=w.gfq(w)},
$S:0}
C.eht.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehu.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehA.prototype={
$0(){return B.a5(this.a,!1).eK()},
$S:0}
C.ehB.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bbd(u,v.gawt(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehy(v),new C.ehz(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ehy.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:268}
C.ehz.prototype={
$1(d){var w=this.a
w.m(new C.ehv(w,d,this.b,this.c))},
$S:206}
C.ehv.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawt()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehC.prototype={
$1(d){var w=this.a
return w.m(new C.ehx(w,this.b))},
$S:9}
C.ehx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehD.prototype={
$1(d){var w=this.a
return w.m(new C.ehw(w,d))},
$S:6}
C.ehw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehE.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fMq.prototype={
$1(d){return D.fVN},
$S:z+83}
C.eRf.prototype={
$1(d){return this.a.Y2()},
$S:8}
C.eQ7.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcw().aJ(v)},
$S:0}
C.eQv.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQF.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.ePR.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePS.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePP.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQo.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQp(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jy(B.ru(p>0.2?C.fQP(q,B.a4J(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4J(12,12,A.x)
p.push(B.jy(B.dc(B.ru(C.fQP(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b2>0)p.push(B.el(u,B.b0(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.be
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aVR,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aVC,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aP
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aP)],x.O),D.cTh,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d2T,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d06,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beM(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:64}
C.eQp.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cj,A.bS,!0,q,!1,q,q),o=r.a,n=o.aVT(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
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
return B.dU(B.ed(A.A,B.eG(A.A,l,B.fs(A.A,new B.D8(new B.yI(q,q,n,A.Ag),p,q),q,B.vE(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:608}
C.eQB.prototype={
$0(){return this.a.m(new C.eQA(this.b,this.c))},
$S:0}
C.eQA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQC.prototype={
$1(d){return this.a.m(new C.eQz(this.b,d))},
$S:6}
C.eQz.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQE.prototype={
$0(){return this.a.m(new C.eQD(this.b,this.c))},
$S:0}
C.eQD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ePH.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.ePI.prototype={
$1(d){var w=this.a
return w.m(w.gcwh())},
$S:2}
C.ePJ.prototype={
$1(d){return this.a.m(new C.ePG())},
$S:2}
C.ePG.prototype={
$0(){},
$S:0}
C.ePK.prototype={
$0(){var w=this.a
return w.m(new C.ePF(w,this.b))},
$S:0}
C.ePF.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePM.prototype={
$2(d,e){return A.av},
$S:36}
C.ePL.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dj(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b5,A.x,r,w,w),A.n),A.hY,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePE(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:76}
C.ePE.prototype={
$0(){var w=this.a
return w.m(new C.ePB(w,this.b))},
$S:0}
C.ePB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePN.prototype={
$1(d){var w=this.a
return w.m(new C.ePD(w,d))},
$S:9}
C.ePD.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePO.prototype={
$1(d){var w=this.a
return w.m(new C.ePC(w,d))},
$S:9}
C.ePC.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eR4.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gJ(this.b)]},
$S:33}
C.eRb.prototype={
$1(d){var w=this.a
return w.m(new C.eRc(w,d))},
$S:28}
C.eRc.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.e9(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eRd.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:270}
C.eR5.prototype={
$0(){var w=this.a
return w.m(new C.eR3(w,this.b))},
$S:0}
C.eR3.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eR6.prototype={
$0(){var w=this.a
return w.m(new C.eR2(w,this.b))},
$S:0}
C.eR2.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eR7.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eR1(v,w.b,w.c,w.d))},
$S:0}
C.eR1.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eR8.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grw(v))},
$S:0}
C.eR9.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eRa.prototype={
$0(){var w=this.a
return w.m(new C.eR0(w))},
$S:0}
C.eR0.prototype={
$0(){var w=this.a.db
return A.d.h0(w,0,w.length,0)},
$S:0}
C.eQO.prototype={
$1(d){return d.a===this.a.dy},
$S:233}
C.eQP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aw1[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awx(new B.n6(new B.bp(n,n,n,n),A.aq,new B.kN(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aZn(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQN(r,v),2,i))}return B.bW(A.bz,h,A.bq,7,7)},
$S:164}
C.eQN.prototype={
$0(){var w=this.b
return w.m(new C.eQI(this.a,w))},
$S:0}
C.eQI.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQQ.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:208}
C.eQT.prototype={
$0(){var w=this.a
return w.m(new C.eQM(w))},
$S:0}
C.eQM.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQU.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eQV.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eQW.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eQX.prototype={
$0(){var w=this.a
return w.m(new C.eQL(w))},
$S:0}
C.eQL.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w))},
$S:0}
C.eQK.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQZ.prototype={
$0(){var w=this.b
return w.m(new C.eQJ(this.a,w))},
$S:0}
C.eQJ.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eR_.prototype={
$1(d){return this.a.fx=d},
$S:208}
C.eQR.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eQS.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eQs.prototype={
$0(){var w=this.a
return w.m(new C.eQr(w))},
$S:0}
C.eQr.prototype={
$0(){var w=this.a
w.p4=null
w.b1Z()},
$S:0}
C.eQt.prototype={
$0(){var w=this.a
return w.m(new C.eQq(w,this.b))},
$S:0}
C.eQq.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQu.prototype={
$0(){var w=this.a
return w.m(w.gcmW())},
$S:0}
C.eQk.prototype={
$0(){var w=this.a
return w.m(new C.eQj(w))},
$S:0}
C.eQj.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQl.prototype={
$0(){var w=this.a
return w.m(new C.eQi(w))},
$S:0}
C.eQi.prototype={
$0(){var w=this.a
w.aH=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eQm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d0t[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awx(new B.n6(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D8(new B.yI(o,o,v.aVT(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ag),B.fL(u,A.A,140,o,A.cj,A.bS,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eQh(v,s),3,n))}return B.bW(A.bz,m,A.bq,10,8)},
$S:164}
C.eQh.prototype={
$0(){var w=this.a
return w.m(new C.eQg(w,this.b))},
$S:0}
C.eQg.prototype={
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
C.ePZ.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eQ_.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eQ0.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eQ1.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eQ2.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eQ3.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eQ4.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.eQ5.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.eQ6.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.ePk.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ePl.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ePm.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ePn.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ePo.prototype={
$0(){var w=this.a
return w.m(new C.ePj(w))},
$S:0}
C.ePj.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ePp.prototype={
$1(d){return this.a.b3=d},
$S:208}
C.ePq.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.ePT.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ePU.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.ePV.prototype={
$1(d){return this.a.az=d},
$S:6}
C.ePW.prototype={
$1(d){return this.a.be=d},
$S:208}
C.ePX.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.ePu.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.ePv.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.ePw.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.ePx.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.ePy.prototype={
$0(){var w=this.a
return w.m(new C.ePt(w))},
$S:0}
C.ePt.prototype={
$0(){var w=this.a
return w.c7=A.k.E(w.c7+90+180,360)-180},
$S:0}
C.ePz.prototype={
$0(){var w=this.a
return w.m(new C.ePs(w))},
$S:0}
C.ePs.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.ePA.prototype={
$0(){var w=this.a
return w.m(new C.ePr(w))},
$S:0}
C.ePr.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eQn.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i7K(v,w.p4)},
$S:0}
C.eQf.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bkQ:B.fL(v,A.A,w,w,A.cj,A.bS,!1,w,!1,w,w)
return C.fyF(d.length===0?"rounded":d,u,e)},
$S:135}
C.eQb.prototype={
$0(){var w=this.a
return w.m(new C.eQa(w))},
$S:0}
C.eQa.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eQc.prototype={
$0(){var w=this.b
return w.m(new C.eQ9(this.a,w))},
$S:0}
C.eQ9.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eQd.prototype={
$0(){var w=this.b
return w.m(new C.eQ8(this.a,w))},
$S:0}
C.eQ8.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eQe.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eQy.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cgn(),n.r))
l.push(new C.Ir(n.ctl(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c4,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eQx(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:209}
C.eQx.prototype={
$1(d){var w=this.a
return w.m(new C.eQw(w,d,this.b,this.c))},
$S:18}
C.eQw.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQH.prototype={
$0(){var w=this.a
return w.m(new C.eQG(w,this.b))},
$S:0}
C.eQG.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePY.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lQ()},
$S:0}
C.eRe.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYA(),B.E(B.av(w.b0w(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aP6(),1),w.aLl()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYA(),new B.D(A.hL,B.av(s.b0w(u),t,t,t),t),B.E(s.aP6(),1),s.aLl()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:571}
C.fvW.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzO(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.O)},
$S:z+98}
C.fvV.prototype={
$3(d,e,f){var w=this,v=C.bzO(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bl
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdi.prototype={
$1(d){return B.t(d)},
$S:17}
C.fDC.prototype={
$0(){return this.a},
$S:z+15}
C.fke.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fkf.prototype={
$2(d,e){return J.cm(e)},
$S:z+31}
C.fDE.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fDH.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fDI.prototype={
$0(){return A.d.gJ(D.vV)},
$S:z+33}
C.fDA.prototype={
$1(d){return d.a},
$S:z+16}
C.fDD.prototype={
$1(d){return d.a},
$S:z+16}
C.fBA.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fBB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBC.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fw_.prototype={
$0(){return C.cC()},
$S:22}
C.fw2.prototype={
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
C.fw1.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fw0.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lr,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q9,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fvZ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fyq.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hgM.cg(0,A.a.i(s.w).toLowerCase(),new C.fyo(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fyp(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnM(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fyo.prototype={
$0(){return F.aN6(this.a.w)},
$S:178}
C.fyp.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byI("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hC(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:178}
C.fcY.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcZ.prototype={
$1(d){return d.a},
$S:z+18}
C.fd_.prototype={
$1(d){return d.b},
$S:z+19}
C.fMC.prototype={
$1(d){return D.fW3},
$S:z+41}
C.eXr.prototype={
$0(){return this.a.x=C.hLb(this.b,this.c.b)},
$S:0}
C.eXs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eXp.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:413}
C.eXq.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:413}
C.eXo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.aA,null,new C.eXj(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k5,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b1(s,7)
if(r.length===0){n.m(new C.eXk(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hmy(o,m.cGQ(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eXl(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eXj.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eXn(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b3X,A.f,p,p,D.b_2,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BT:D.BY,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fyF(v,i.b2A(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bm(!0,new B.D(A9.xC,t,p),!0,!1,A.af,!0,!0)
s=new C.eXm(i,d)
m=B.aI(d,A.bU,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gz[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fki,A.S,t,A.e3,D.eJw,A.at,D.fuR,A.S,B.lX(1.15,l,3,10,10,p,A.dR,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xC,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eXn.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bt:A.dr
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hy,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eXi(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eXi.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eXm.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.an9,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.N9(u.Fq(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXh(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:135}
C.eXh.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eXk.prototype={
$0(){var w=this.a
return w.w=w.w.Fq("")},
$S:0}
C.eXl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eX7.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eX8.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eXa.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eXb.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eXc.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eXd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eX9(w,d))},
$S:2}
C.eX9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eXe.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eXF.prototype={
$0(){return this.a.f.fK()},
$S:0}
C.eXG.prototype={
$0(){var w=this.a
return w.m(new C.eXE(w))},
$S:0}
C.eXE.prototype={
$0(){return this.a.e=null},
$S:0}
C.eXH.prototype={
$0(){var w=this.a
return w.m(new C.eXD(w))},
$S:0}
C.eXD.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXJ.prototype={
$1(d){var w=this.a
return w.m(new C.eXC(w,d))},
$S:32}
C.eXC.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXK.prototype={
$1(d){var w=this.a
return w.m(new C.eXB(w,d))},
$S:32}
C.eXB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXL.prototype={
$0(){var w=this.a
return w.m(new C.eXA(w))},
$S:0}
C.eXA.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXM.prototype={
$1(d){var w=this.a
return w.m(new C.eXz(w,d))},
$S:32}
C.eXz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXN.prototype={
$1(d){var w=this.a
return w.m(new C.eXy(w,d))},
$S:32}
C.eXy.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXO.prototype={
$0(){var w=this.a
return w.m(new C.eXx(w))},
$S:0}
C.eXx.prototype={
$0(){var w=this.a
return w.w=w.w.Fq("")},
$S:0}
C.eXP.prototype={
$0(){var w=this.a
return w.m(new C.eXw(w,this.b))},
$S:0}
C.eXw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXQ.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMR(D.a2l[v]),null))
return B.bW(A.bz,t,A.bq,8,8)},
$S:164}
C.eXI.prototype={
$1(d){var w=this.a
return w.m(new C.eXv(w,d))},
$S:9}
C.eXv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eXf.prototype={
$0(){var w=this.a
return w.m(new C.eXg(w,this.b,this.c))},
$S:0}
C.eXg.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eXu.prototype={
$0(){var w=this.a
return w.m(new C.eXt(w,this.b))},
$S:0}
C.eXt.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fMB.prototype={
$1(d){return new C.a_Z(this.a,this.b,null)},
$S:z+42}
C.eX0.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eX1.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eX2.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFD?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eX3.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eX4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eX_(w,d))},
$S:2}
C.eX_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eX5.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eX6.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.h9(A.bw,w.length),A.aN))},
$S:0}
C.fju.prototype={
$1(d){return d.a===this.a},
$S:233}
C.ecD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawy(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cNm:D.d2E
t=D.xg.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xg.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgZ(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOi(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.baP.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ef:A.lQ,D.xg,q,q,q,20),A.at,B.f4(A.A,B.nL(A.jp,D.fdX,new C.ecC()),A.f,A.eh)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.faB,A.f,q,q,new B.o(D.xg,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ai9,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.ecC.prototype={
$1(d){return D.bTU.av(0,d)},
$S:65}
C.fDJ.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fDK.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:233}
C.fDL.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fDM.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fDF.prototype={
$1(d){return d.a},
$S:z+18}
C.fDG.prototype={
$1(d){return d.b},
$S:z+19}
C.fLP.prototype={
$1(d){return new C.Zl(this.a,this.b,null)},
$S:z+44}
C.di0.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.di1.prototype={
$1(d){return d.a===this.a.gahP()},
$S:z+10}
C.di2.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.di5.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.di6.prototype={
$0(){var w=this.a
return w.m(new C.di4(w,this.b))},
$S:0}
C.di4.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.di7.prototype={
$1(d){var w=this.a
return w.m(new C.di3(w,d))},
$S:9}
C.di3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecB.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fu(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f9r.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f9t.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mE,D.cQ,g,e,f)},
$S:z+46}
C.f9s.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wp(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mE,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f9q.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fx6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fx7.prototype={
$0(){return A.d.gJ(D.GI)},
$S:z+49}
C.fx8.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fbr.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fDb.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.be,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDc.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDd.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jH,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jH,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDo.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jH,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jH,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jG,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDt.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jG,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDu.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jH,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDv.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cMp[w]
u=Date.now()
t=$.j_
$.j_=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDw.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mh,A.dv,w/3).l()
u=Date.now()
t=$.j_
$.j_=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cy,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fDx.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jG,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDy.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.be,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jH,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDz.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jH,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDe.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jG,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jG,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fDf.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jG,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jG,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jG,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eK,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fDg.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jH,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jG,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fDh.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jG,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jG,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fDi.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.kZ,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.kZ,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.kZ,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.kZ,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.kZ,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDj.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jH,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eK,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDk.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mh,A.dv,w/3).l()
u=Date.now()
t=$.j_
$.j_=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cy,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K8
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDl.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j_
$.j_=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fs,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDm.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fDn.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j_
$.j_=t+1
t=new C.eJ("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K8
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.di,A.cr,w/2).l()
t=Date.now()
s=$.j_
$.j_=s+1
u=new C.eJ("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.be,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jG,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fDp.prototype={
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
C.fDq.prototype={
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
C.fDr.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eK,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j_
$.j_=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eK,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K8
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fDs.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jH,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jH,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fuX.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fuY.prototype={
$0(){return A.d.gJ($.bDr())},
$S:z+52}
C.fj2.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fj1.prototype={
$1(d){return C.hSt(d,this.a,this.b)},
$S:z+53}
C.fDS.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vE(1.0375,1.01875,1)
return new B.fO(v,u,new C.aS2(B.hIc(A.uQ,C.hSw(w.c,w.d,v,u),t)))},
$S:416}
C.dTo.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dTn.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JF,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jy(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdS(u.a,r,q,r),A.au),w),B.av(new B.kg(r,new C.dTm(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:431}
C.dTm.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gJ(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fL(i,A.A,r,r,A.cj,A.bS,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mk(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqs(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJU(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:104}
C.eWe.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c7R.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hH.j(0.4),A.J,14)],x.V):v
w=B.dj(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eF,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c7S.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fq(""))},
$S:0}
C.c7T.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.N9(v.Fq(u),!0,!1,null),!0,null),d.b,new C.c7U(w,this.c,d),v.a===u)},
$S:z+54}
C.c7U.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hmy(u.b,t.c.Fq(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fKe.prototype={
$1(d){return new C.YU(this.a,null)},
$S:z+55}
C.d7d.prototype={
$0(){var w=this.a
w.d=w.gvw().bau("data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c));++w.r},
$S:0}
C.d7i.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7j.prototype={
$0(){var w=this.a
return w.m(new C.d7h(w))},
$S:0}
C.d7h.prototype={
$0(){return this.a.r++},
$S:0}
C.d7k.prototype={
$1(d){var w=this.a
return w.m(new C.d7g(w,d))},
$S:2}
C.d7g.prototype={
$0(){var w=this.a
return w.d=w.gvw().aCT(this.b)},
$S:0}
C.d7l.prototype={
$0(){var w=this.a
return w.m(new C.d7f(w))},
$S:0}
C.d7f.prototype={
$0(){var w=this.a
return w.d=w.gvw().bau("")},
$S:0}
C.d7m.prototype={
$1(d){var w=this.a
return w.m(new C.d7e(w,d))},
$S:2}
C.d7e.prototype={
$0(){var w=this.a
return w.d=w.gvw().baB(this.b)},
$S:0}
C.d7n.prototype={
$0(){var w=this.a
w=w.gvw().baB(w.gawz().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fKd.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fKc(w),null)},
$S:21}
C.fKc.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fs_,A.at,D.fsf,A.aB,new C.aZk(v.a,new C.fKb(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_z,w,w,w,w,A.LZ,w,w,w)},
$S:175}
C.fKb.prototype={
$1(d){this.b.$1(new C.fKa(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fKa.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fMA.prototype={
$1(d){return D.fRr},
$S:z+57}
C.de_.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.de0.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.de1.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fAy.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d6V.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cU(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cU(w,q+p,w,q+p*1.2))
u.F(new B.CQ(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:704}
C.fAC.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fsY.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fsZ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xF,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.faS,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gf,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsW(d),B.bl(A.bY,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o2,D.TC,new C.fsX(d),B.dh(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wH,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsW.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsX.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cdg.prototype={
$1(d){return d.hC()},
$S:z+59}
C.cdh.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdf.prototype={
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
u=C.hOk(b2.h(0,"type"))
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
n=A.axQ[A.o.D(b4,0,8)]
m=D.cPg[A.o.D(w,0,1)]
l=C.hRW(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auy[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hUK(b2.h(0,"shape"))
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
a3=C.hhS(b2.h(0,"textTransition"))
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
C.cd5.prototype={
$1(d){return d.hC()},
$S:z+62}
C.cd6.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cd2.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd3.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd4.prototype={
$1(d){return C.h8x(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdx.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdy.prototype={
$0(){return A.d.gJ(D.a2_)},
$S:z+66}
C.cds.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hC())},
$S:z+7}
C.cdr.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdn.prototype={
$1(d){return new B.K(d,new C.cdo(),B.U(d).k("K<1,S>")).fa(0,new C.cdp())},
$S:z+69}
C.cdo.prototype={
$1(d){return d.f},
$S:z+70}
C.cdp.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:705}
C.cdq.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hE1(d)},
$S:z+71}
C.cdt.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdu.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdv.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fBa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fB6.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fB7.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fB8.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fB9.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdb.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i2q(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cda(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pG.aw(0,A.k.D(b1,0,1))
u=new C.cdc()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdd(a9,b7.d)
r=new C.cde(b0)
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
a2=a3===0?a5:new B.iG(B.w8(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mE
p.push(s.$5(i.c,i.d,i.e,i.f,C.hk6(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:432}
C.cda.prototype={
$1(d){return d.a},
$S:z+22}
C.cdc.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdd.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cde.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7m(v,C.b0s(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFE.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdk.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdl.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fDZ.prototype={
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
C.fD5.prototype={
$1(d){return new C.ad_(this.a,this.b,null)},
$S:z+78}
C.ep1.prototype={
$0(){return this.a.Pu(this.b,C.i5M(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ep2.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pu(this.b,C.i5O(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ep3.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pu(this.b,C.i5N(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ep4.prototype={
$0(){Y.hjR()
B.a5(this.a,!1).O(null)},
$S:0}
C.cd9.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cd8.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nx),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lM(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bS:A.du
return B.fL(t,A.A,o,new C.cd7(),A.cj,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cd7.prototype={
$3(d,e,f){return D.ab9},
$S:204}
C.fB5.prototype={
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
r=B.C(new B.K(r,new C.fB4(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fB4.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0s(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.flA.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fly(d))
w=B.aI(d,A.bU,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kA,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zD,q,q,!0,q,q,new C.flz(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F5,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aA,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fe,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:265}
C.fly.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pv())B.a5(w,!0).eK()},
$S:0}
C.flz.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eK()},
$S:0}
C.f3K.prototype={
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
s.fB(r*3.14159)
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
s.fB(r*1.2)
s.jY(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jy(u.b,A.r,new C.aIO(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jy(u.b,A.r,new C.aIO(1-r,t))],x.p),t)
case 16:v=D.b2X.aw(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mJ(r*6.28)
s.jI(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:58}
C.dRB.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRA.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRz.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hk6(v,w,e)},
$S:58}
C.cd1.prototype={
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
q=B.C(new B.K(v,new C.cd0(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:432}
C.cd0.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7m(m,new C.UB(d,C.b0s(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d49.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d48(w))},
$S:11}
C.d48.prototype={
$0(){return this.a.d++},
$S:0}
C.ecj.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aMM.t(0,A.d.gJ(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i29(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e7(0,w*7,0,1)
s.fB(Math.sin(t)*0.32)
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
C.eTS.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fB
return w},
$S:1693}
C.fyG.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bql(u,t,r),A.au))
w.push(B.nr(s.d,A.aq,new C.beo(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpl(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:249}
C.foq.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.evf.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CB(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.evd(),new C.eve(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.evd.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:197}
C.eve.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.erD.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erE.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erF.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.etd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.et1.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.et2.prototype={
$1(d){return d.hC()},
$S:z+81}
C.er0.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eul.prototype={
$0(){this.a.ts()},
$S:0}
C.evb.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JQ()},
$S:0}
C.etb.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JQ()},
$S:0}
C.euZ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ev_.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ev0.prototype={
$1(d){return d.a},
$S:z+22}
C.ev1.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:260}
C.ev2.prototype={
$0(){return B.jO(!0,null,!0,!0,null,null,!1)},
$S:707}
C.eqp.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evc.prototype={
$0(){},
$S:0}
C.esk.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xl()
w.JQ()},
$S:0}
C.eqn.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xl()},
$S:0}
C.eqo.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xl()},
$S:0}
C.esH.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.esI.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xl()
w.JQ()
w.z="Home"},
$S:0}
C.esJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esj.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.esi(d),w,w)],x.p),w,w,w,D.ftM,w,w,w,w,D.fbj,w)},
$S:19}
C.esi.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esg.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.esf(d),w,w)],x.p),w,w,w,D.ffh,w,w,w,w,D.fd1,w)},
$S:19}
C.esf.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esh.prototype={
$0(){},
$S:0}
C.erz.prototype={
$1(d){return this.a.aZS(C.bBs(d))},
$S:z+7}
C.erA.prototype={
$1(d){return this.a.aen(C.bBs(d))},
$S:z+7}
C.esq.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.ftQ,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Ph(A.vA,D.avU,"HATI YA KUHOWA","Hati ya mahari",new C.esl(d),w),A.S,new C.Ph(A.h9,D.d0u,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esm(d),w),A.S,new C.Ph(A.i0,D.cNs,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esn(d),w),A.S,new C.Ph(A.hM,D.cLL,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eso(d),w)],v)
if(this.a.gaaT())A.d.v(u,B.a([A.S,new C.Ph(A.iY,D.cwS,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esp(d),w)],v))
return B.bm(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xF,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.esl.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esm.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esn.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eso.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esp.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.esr.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xl()},
$S:0}
C.eqr.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eqs.prototype={
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
C.esC.prototype={
$1(d){return d.b===D.lr},
$S:z+4}
C.esD.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gJ(v).go
w.b=A.d.gJ(v).id
return new B.e0(new C.esA(w,this.a,v),null)},
$S:21}
C.esA.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.esB(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bL,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.esw(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BY[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgT(t,u.b,p.a===t,i,k,new C.esx(v,m),q))}a1=B.bW(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BT[w]
s.a=null
t=s.a=r.a
u.push(new C.bgS(t,r.b,p.b===t,k,j,new C.esy(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.by,v,A.S,B.bW(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.ey(D.bQb,D.fwc,new C.esz(o,n),B.dh(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aY4,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tz,D.bsh,q,q,q),!0,!1,A.af,!0,!0)},
$S:85}
C.esB.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.esu(w.a,d,e))
w.b.d3(new C.esv(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.esu.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.esv.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.esw.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esx.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.esy.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.esz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gm(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.est(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.est.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.esF.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esG.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.esE(t.d))
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
s.xl()},
$S:0}
C.esE.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esX.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esY.prototype={
$1(d){return d.w},
$S:z+82}
C.esZ.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.et_.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bU,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bJU,A.f,v,v,D.aZt,v,38,v,v,v,v,v,38),A.bf,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.esU(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cn,B.hI(v,new C.esV(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ah,new C.esW(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tz,A.Ym,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.esU.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esW.prototype={
$2(d,e){return A.ac},
$S:36}
C.esV.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bN_,q,q,q,new C.esS(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.buv,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aXK),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.esT(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:708}
C.esS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i7T(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gex()?p.a:q.a.length
n=p.gex()?p.b:q.a.length
m=A.a.oH(q.a,o,n,s)
r.bO(0,new B.bb(m,B.h9(A.bw,o+s.length),A.aN))
l.ait(k,m)
l.pg()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esT.prototype={
$1(d){var w=this.a
w.ait(this.b.a,d)
w.pg()},
$S:2}
C.et0.prototype={
$0(){},
$S:0}
C.ess.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqI.prototype={
$0(){},
$S:0}
C.eqJ.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hlp(this.b,w,!0)
w=this.a
w.r=null
w.xl()},
$S:0}
C.eqK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqL.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eqH(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xl()},
$S:0}
C.eqH.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.et6.prototype={
$1(d){return B.oM(new C.et5(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:136}
C.et5.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ahQ,B.v(B.a([D.frp,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ig(!0,w,e,A.y,D.ePi,new C.et4(this.a,this.b),20,A.tC,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:435}
C.et4.prototype={
$2(d,e){var w=null,v=D.GI[e],u=C.hDX(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eJs,A.f,w,w,new B.o(A.dO.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nc,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.et3(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.et3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdj(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.et7.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xl()},
$S:0}
C.epm.prototype={
$0(){var w,v=this.a,u=v.gqi(),t=C.rp(4294967295,null,0,0,null,C.cC(),D.mD,"","","",D.dd),s=this.b
C.cdw(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cx){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqG.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j_
$.j_=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h8x(q));++v.f},
$S:0}
C.eqE.prototype={
$0(){var w=this.a
A.d.cC(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.etf.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cC(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eqA.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eqz(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eqz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ete.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqq.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:260}
C.er1.prototype={
$0(){return B.jO(!0,null,!0,!0,null,null,!1)},
$S:707}
C.euX.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.euY.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asA(w).fK()
v=u.Wb(w)
v.st9(B.h9(A.bw,v.a.a.length))},
$S:8}
C.eum.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xa(v)
if(u!=null&&u.b===D.cQ)w.Wb(u).saV(0,u.r)}else w.w=null},
$S:0}
C.epn.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,v.gqi().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epk.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gqi().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqi().c.l(),2,"",0,0,"",D.cm,D.f_,0.25,0.3,0.3)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epa.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,0.6,0.2,0.18),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.ep7.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bWS],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj4().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bHC,r,r,r,r,new C.ep6(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cz(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.ep6.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.ep8.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cm,D.a4x,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eqC.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eqD.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eqB(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eqB.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.epP.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.epQ(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.epQ.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.epU.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.epV(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.epV.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.epS.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.epT(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.epT.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fb(w,new C.epR()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.epR.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epO.prototype={
$0(){return C.cdw(this.b,this.c,this.a.gqi())},
$S:0}
C.esR.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ev5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev6.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ev7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev8.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.ev4(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRS()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hC()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xl()
t.JQ()}},
$S:0}
C.ev4.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.euC.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaX(),s=w.b,r=u.aaY(A.fa,A.kT,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.B(B.a([B.E(u.aU1(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bHI,A.f,v,v,new B.o(A.fa.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aU1(s,A.fa),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.by,u.aU4(A.fa,d,D.bDN,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWe(A.aS,d,A.tQ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aU2(d,"Not now"))
return new C.JA(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euB.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JA(B.v(B.a([v.aaX(),A.N,v.aaY(A.aS,D.bDs,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.42),B.hI(w,new C.euz(v,u,d),u.length,w,w,A.ah,new C.euA(),!0),w),A.aB,v.aU2(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.euA.prototype={
$2(d,e){return A.S},
$S:36}
C.euz.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.amF,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bTP,A.n),w,42,w,w,w,w,w,42),A.bf,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nu,w,w,w),A.cV,B.d("Updated "+this.a.Pv(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euy(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:74}
C.euy.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.euv.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaX()
t=t.aaY(A.aH,A.tZ,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JA(B.v(B.a([s,A.N,t,A.by,B.B(B.a([B.E(B.dT(A.a7S,new C.eut(d),B.dh(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.fdB,new C.euu(d),B.bl(A.fa,u,u,u,A.c,u,A.cl,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eut.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.euu.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eux.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaX(),s=w.b,r=u.aaY(A.aV,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.atU("Names",""+w.c),1),A.ab,B.E(u.atU("Fields",""+w.d),1),A.ab,B.E(u.atU("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bl(A.bj,v,v,v,A.c,v,A.xu,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.JA(B.v(B.a([t,A.N,r,A.aQ,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.ns,v,v,v),new C.euw(d),o),A.S,u.aU3(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euw.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.erv.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eru.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eun.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euW.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_5(A.d.dL(w.d,new C.euU(v),new C.euV(v)).hC(),w.f,null)},
$S:z+84}
C.euU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euV.prototype={
$0(){return this.a},
$S:z+85}
C.epf.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hs,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJu,w,w,w,w,new C.epd(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fbD,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKD,w,w,w,w,new C.epe(d),!1,w,w,w,w,w,D.fxn,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dn,w,w,w),w,w,w))
return B.bm(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.epd.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.epe.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.epg.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cm,D.Rp,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eph.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j_
$.j_=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j_
$.j_=k+1
m.push(new C.eJ(""+1000*l+"_"+k,D.Rp,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lD(""+1000*p+"_"+o,r+n,"",D.q8,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.epl.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.ku(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kY,0.35,0.55,0.62)
A.d.L(u.gdr().z,w)
u.r=w.a},
$S:0}
C.epc.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1G(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ee(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kY,s,u,t)
A.d.L(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.epb(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i1T(p)}},
$S:0}
C.epb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etc.prototype={
$0(){var w=this.a,v=this.b
w.b1G(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ev3.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ery.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.erx())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.erx.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.epY.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.epZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ts()},
$S:8}
C.ep9.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lr,0.8,0.1,0.1),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.er_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epi.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdr().z,v)
w.r=v.a},
$S:0}
C.epr.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eps.prototype={
$0(){var w=this.b.hC(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdr().z,f)
t.r=f.a},
$S:0}
C.ept.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epq(v))
if(u>=0&&u<w.length-1){A.d.cC(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.epq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epE.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epp(v))
if(u>0){A.d.cC(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.epp.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epH.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.epI.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epJ.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.epK.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.epL.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.epM.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epN.prototype={
$1(d){return d.length!==0},
$S:3}
C.epu.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.L(v,C.CG(w.gqi().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.L(u,C.iT(A.bg,!1,w.gqi().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.epv.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.L(u,C.CG(v.gqi().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bCa()
A.d.L(t,C.iT(A.L,!1,v.gqi().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.epw.prototype={
$0(){A.d.L(this.a.gdr().z,C.CG(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.epx.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdr().z,C.CG(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.epy.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.L(v,C.CG(w.gqi().c.j(0.35).l(),0.12,u,D.Cy,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdr().z,C.iT(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q9,0.5,0.38,0.52))},
$S:0}
C.epz.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CG(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdr().z,C.iT(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCa()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.epA.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CG(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdr().z,C.iT(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aFs,0.26,0.64,0.14))},
$S:0}
C.epB.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdr().z,C.CG(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdr().z,C.CG(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.epC.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.iT(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HF,0.42,0.06,0.18))
A.d.L(v.gdr().z,C.iT(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ue,0.42,0.52,0.18))},
$S:0}
C.epD.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CG(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdr().z,C.CG(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdr().z,C.iT(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gdr().z,C.iT(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.epF.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CG(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.L(v.gdr().z,C.iT(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.epG.prototype={
$0(){return C.cdw(this.b,D.Rq,this.a.gqi())},
$S:0}
C.eqZ.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6c.t(0,d),t=this.a
return t.b6D(d,v===d,A.aZ,this.c,new C.eqY(t,u,d,w),u)},
$S:z+25}
C.eqY.prototype={
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
C.bCX(r,new C.eqX(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqX.prototype={
$0(){return this.a.d3(new C.eqW(this.b,this.c))},
$S:0}
C.eqW.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epj.prototype={
$0(){var w,v=this.a,u=v.gqi(),t=C.rp(4294967295,null,0,0,null,C.cC(),D.mD,"","","",D.dd),s=this.b
C.cdw(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cx){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eq1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i7W(p,q.d,s,new C.eq0(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ts(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eq0.prototype={
$1(d){return this.bjh(d)},
bjh(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eq_(t,d))
w=2
return B.b(t.ts(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eq_.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eq2.prototype={
$0(){return this.a.bHb()},
$S:0}
C.eq3.prototype={
$0(){return this.a.aPi("Class Presentation",!0)},
$S:0}
C.eq4.prototype={
$1(d){return this.a.bI7(d.b,this.b,d.a)},
$S:z+88}
C.eqF.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.esQ.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.esP(this.a,this.b),null),null)},
$S:59}
C.esP.prototype={
$2(d,e){return B.oM(new C.esO(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:657}
C.esO.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aA:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahi,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zD,v,v,!0,v,v,new C.esM(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cz(B.a([p.aS1(u,!0,!0,new C.esN(p,w.d))],q),e,D.bq9,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kF,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.esM.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esN.prototype={
$0(){this.b.$1(new C.esK())
var w=this.a
if(w.c!=null)w.m(new C.esL())},
$S:0}
C.esK.prototype={
$0(){},
$S:0}
C.esL.prototype={
$0(){},
$S:0}
C.euo.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.eup.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.ayh(this.a,null),0.94+w*0.06,null,null),w)},
$S:436}
C.euq.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.eur.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.bce(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:436}
C.eus.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vy(this.b))},
$S:0}
C.epo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.72)],t):B.a([A.c.j(0.88),A.pt.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.ce.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_a,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tT(A.fw,B.p(p,B.v(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:280}
C.eqt.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.equ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqv.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kp
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_H:A.Bn}return w},
$S:709}
C.eqy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aw(0,A.k.E(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.78)],s):B.a([A.c.j(0.92),A.mS.j(0.82)],s)
r=m.e
q=A.d.gJ(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ku(v.w)?A.vA:A.pX,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
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
return B.p(l,B.bw(j,new B.a7x(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.LW,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o0,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eqw(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eqx(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:93}
C.eqx.prototype={
$0(){return this.a.aen(this.b)},
$S:0}
C.eqw.prototype={
$0(){return this.a.AG(this.b,this.c)},
$S:0}
C.erZ.prototype={
$0(){var w=this.a
w.b5h()
w.m(new C.erY())},
$S:0}
C.erY.prototype={
$0(){},
$S:0}
C.es_.prototype={
$1(d){return this.a.ait(this.b.a,d)},
$S:2}
C.es0.prototype={
$0(){this.a.d3(new C.erX(this.b))},
$S:0}
C.erX.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.es1.prototype={
$0(){this.a.d3(new C.erW(this.b))},
$S:0}
C.erW.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.es2.prototype={
$0(){this.a.d3(new C.erV(this.b))},
$S:0}
C.erV.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.es3.prototype={
$0(){this.a.d3(new C.erU(this.b))},
$S:0}
C.erU.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.es4.prototype={
$0(){var w=this.a
w.d3(new C.erT(w,this.b))},
$S:0}
C.erT.prototype={
$0(){var w=this.b
return w.as=this.a.c1V(w.as)},
$S:0}
C.es5.prototype={
$0(){return this.a.d3(new C.erS(this.b))},
$S:0}
C.erS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es6.prototype={
$0(){return this.a.d3(new C.erR(this.b))},
$S:0}
C.erR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erK.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.erL.prototype={
$0(){this.a.a_8()
return null},
$S:0}
C.erM.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bU,x.w).w.a.a<900)w.aeG()
else w.m(new C.erJ(w))},
$S:0}
C.erJ.prototype={
$0(){return this.a.as=!0},
$S:0}
C.erN.prototype={
$0(){this.a.d3(new C.erI(this.b))},
$S:0}
C.erI.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.erO.prototype={
$0(){return this.a.d3(new C.erH(this.b))},
$S:0}
C.erH.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erP.prototype={
$0(){return this.a.d3(new C.erG(this.b))},
$S:0}
C.erG.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erQ.prototype={
$0(){return this.a.ayW(null)},
$S:0}
C.eqS.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.eqT.prototype={
$0(){this.a.a9v()
return null},
$S:0}
C.eqV.prototype={
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
return B.b(t.a.JH(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.aA,null,new C.eqN(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.eqO(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqP(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqQ(r))
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
return B.b(C.hmx(q,new C.Ef(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.eqR(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agy(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eqN.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e6N],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bJB:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eqM(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dn,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eqM.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eqO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqP.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqR.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqU.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zw(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zw(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zw(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agy(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ebO,q,v,u,B.zw(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:142}
C.ev9.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC7(w,v)}},
$S:0}
C.eva.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.es9.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bTJ:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.D(A.fz,B.aE(u,B.dj(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eF,u,u,u,A.lL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.es8(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:138}
C.es8.prototype={
$0(){var w=this.a
return w.m(new C.es7(w,this.b))},
$S:0}
C.es7.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.esa.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2w:E.aw_
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLv():t.gbHw()
return B.hr(B.aE(u,B.p(u,D.am6,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gJ(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.esb.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i7b(v,w.a.c)},
$S:0}
C.ety.prototype={
$0(){return this.b.v3(this.a.a)},
$S:0}
C.etz.prototype={
$0(){return this.a.v3(D.mD)},
$S:0}
C.etA.prototype={
$0(){return this.a.v3(D.HD)},
$S:0}
C.etL.prototype={
$0(){return this.a.v3(D.HE)},
$S:0}
C.etW.prototype={
$0(){return this.a.v3(D.HC)},
$S:0}
C.eu6.prototype={
$0(){return this.a.q3("lab_report")},
$S:0}
C.eud.prototype={
$0(){return this.a.q3("rubric")},
$S:0}
C.eue.prototype={
$0(){return this.a.q3("minutes")},
$S:0}
C.euf.prototype={
$0(){return this.a.q3("agenda")},
$S:0}
C.eug.prototype={
$0(){return this.a.q3("timeline")},
$S:0}
C.euh.prototype={
$0(){return this.a.q3(this.b.a)},
$S:0}
C.etB.prototype={
$0(){this.a.Vk()
return null},
$S:0}
C.etC.prototype={
$0(){this.a.Ve()
return null},
$S:0}
C.etD.prototype={
$0(){return this.a.q3("table")},
$S:0}
C.etE.prototype={
$0(){return this.a.q3("sticky")},
$S:0}
C.etF.prototype={
$0(){return this.a.q3("divider")},
$S:0}
C.etG.prototype={
$0(){return this.a.q3("header_bar")},
$S:0}
C.etH.prototype={
$0(){return this.a.oX(D.be)},
$S:0}
C.etI.prototype={
$0(){return this.a.oX(D.eK)},
$S:0}
C.etJ.prototype={
$0(){return this.a.oX(D.jG)},
$S:0}
C.etK.prototype={
$0(){return this.a.oX(D.Cy)},
$S:0}
C.etM.prototype={
$0(){return this.a.oX(D.jH)},
$S:0}
C.etN.prototype={
$0(){return this.a.oX(D.kZ)},
$S:0}
C.etO.prototype={
$0(){return this.a.oX(D.fs)},
$S:0}
C.etP.prototype={
$0(){this.a.H2()
return null},
$S:0}
C.etQ.prototype={
$0(){this.a.N_()
return null},
$S:0}
C.etR.prototype={
$0(){return this.a.q3("quote")},
$S:0}
C.etS.prototype={
$0(){return this.a.a7E()},
$S:0}
C.etT.prototype={
$0(){this.a.a_e()
return null},
$S:0}
C.etU.prototype={
$0(){var w=this.a
return w.m(new C.eto(w))},
$S:0}
C.eto.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.etV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o3(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.etw(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etw.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.etX.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jO()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6d.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b3
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6d.t(0,q))u.push(B.ao(s,B.p(s,D.NE,A.f,s,s,D.DO,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aE(s,B.hr(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etv(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.etv.prototype={
$0(){this.a.a7W(this.b)
return null},
$S:0}
C.etY.prototype={
$0(){this.a.a7V(this.b)
return null},
$S:0}
C.etZ.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hDY(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b3
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rp(4294967295,r,0,0,r,"preview_"+w,D.q8,"","","",D.dd)
C.hju(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hkO(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amG,A.f,r,r,D.DO,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iU,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.etu(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.etu.prototype={
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
break}s.d3(new C.etk(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etk.prototype={
$0(){return C.hju(this.a,this.b.a)},
$S:0}
C.etx.prototype={
bjj(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6c.t(0,d)
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
C.eui.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.C(new B.K(d,new C.euk(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.euk.prototype={
$1(d){var w=this
return w.a.b6D(d,w.b===d,w.c,w.d,new C.euj(w.e,d),!D.a6c.t(0,d))},
$S:z+25}
C.euj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eu_.prototype={
$1(d){this.b.$2(d,new C.ett(this.a,d,this.c))
return null},
$S:z+26}
C.ett.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCX(u,new C.etj(v,this.c,w),w)},
$S:0}
C.etj.prototype={
$0(){return this.a.d3(new C.eth(this.b,this.c))},
$S:0}
C.eth.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eu0.prototype={
$1(d){this.b.$2(d,new C.ets(this.a,d))
return null},
$S:z+26}
C.ets.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fNo(u,new C.eti(v,w),w)},
$S:0}
C.eti.prototype={
$0(){var w=this.a
return w.d3(new C.etg(w,this.b))},
$S:0}
C.etg.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.eu1.prototype={
$0(){var w=this.a
return w.m(new C.etr(w))},
$S:0}
C.etr.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eu2.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC7(w,v)}},
$S:0}
C.eu3.prototype={
$0(){this.a.HP()
return null},
$S:0}
C.eu4.prototype={
$0(){return this.a.a7E()},
$S:0}
C.eu5.prototype={
$0(){var w=this.a,v=w.jO()
if(v!=null&&v.b===D.cQ)w.d3(new C.etq(v))},
$S:0}
C.etq.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eu7.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.eu8.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F0(v,!0)
return null},
$S:0}
C.eu9.prototype={
$0(){this.a.d3(new C.etp(this.b))},
$S:0}
C.etp.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.eua.prototype={
$0(){this.a.d3(new C.etn(this.b))},
$S:0}
C.etn.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.eub.prototype={
$0(){this.a.d3(new C.etm(this.b))},
$S:0}
C.etm.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.euc.prototype={
$0(){this.a.d3(new C.etl(this.b))},
$S:0}
C.etl.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epX.prototype={
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
break}s.d3(new C.epW(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:181}
C.epW.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.euF.prototype={
$0(){var w=this.a
return w.d3(new C.euE(w,this.b))},
$S:0}
C.euE.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.euG.prototype={
$0(){var w=this.a
return w.d3(new C.euD(w,this.b))},
$S:0}
C.euD.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.er4.prototype={
$0(){return this.a.d3(new C.er3(this.b))},
$S:0}
C.er3.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.er5.prototype={
$0(){return this.a.d3(new C.er2(this.b))},
$S:0}
C.er2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erC.prototype={
$1(d){var w=x.gh
w=B.C(new B.K(D.aom,new C.erB(),w),w.k("ak.E"))
return w},
$S:z+94}
C.erB.prototype={
$1(d){var w=null
return B.zw(B.d(d.b,w,w,w,w,w,w,A.m4,w,w,w),48,d,x.fO)},
$S:z+95}
C.euS.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.euR.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kc()?q:new C.euP(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b3:A.cq
v=B.I(v,A.q,o?2:1)
u=r.d?A.cB:A.c
t=B.bZ(0,C.hkO(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nr,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.aia,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euQ(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:76}
C.euQ.prototype={
$0(){var w=this.a
return w.m(new C.euL(w,this.b))},
$S:0}
C.euL.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JQ()},
$S:0}
C.euP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.euM(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.euN(q,s))
q.aQL()}else if(r==="del"){q=t.a
q.m(new C.euO(q,s))
q.aPU()}else if(r==="up")t.a.b1T(s,s-1)
else if(r==="down")t.a.b1T(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euM.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLe,w,w,w,w,new C.euH(d),!1,w,w,w,w,w,w,w,D.fcA,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bL7,w,w,w,w,new C.euI(d),!1,w,w,w,w,w,w,w,A.wj,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKp,w,w,w,w,new C.euJ(d),!1,w,w,w,w,w,w,w,D.fky,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMr,w,w,w,w,new C.euK(d),!1,w,w,w,w,w,w,w,D.fcp,w,w,w))
return B.bm(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.euH.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.euI.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.euJ.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.euK.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.euN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euT.prototype={
$0(){return this.a.a7E()},
$S:0}
C.eqm.prototype={
$0(){var w=this.a
w.b5h()
w.ayW(null)},
$S:0}
C.eql.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dl,24)],x.V),m=this.b
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
s=B.a([B.bw(s,B.c0(A.kx,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.eqk(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:432}
C.eqk.prototype={
$1(d){var w=this
return w.a.bDs(d,w.b,w.c,w.d)},
$S:z+23}
C.eq9.prototype={
$0(){var w=this
if(w.b){w.a.N8(w.c)
return}if(w.d){w.a.a7C(w.c)
return}if(w.e){w.a.ag_(w.c)
return}if(w.f)w.a.b5N(w.c)},
$S:0}
C.eqa.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
C.eqb.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.eqc.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eq8(u,d,w.c,w.d))
v.Hu()
v.oc()
v.pg()},
$S:18}
C.eq8.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eqd.prototype={
$1(d){return this.a.ait(this.b.a,d)},
$S:2}
C.eqf.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fZl(w))u.a.N8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5N(v)},
$S:0}
C.eqe.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.eqg.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eq7(w.b,d,w.c,w.d))
v.Hu()
v.oc()
v.pg()},
$S:18}
C.eq7.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqh.prototype={
$1(d){var w=this.a
w.m(new C.eq6(this.b,d))
w.Hu()
w.oc()
w.pg()},
$S:206}
C.eq6.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqi.prototype={
$0(){var w=this.a
w.m(new C.eq5(this.b))
w.Hu()
w.oc()
w.pg()},
$S:0}
C.eq5.prototype={
$0(){this.a.r=C.hkj()},
$S:0}
C.eqj.prototype={
$0(){return this.a.a1B(this.b.a)},
$S:0}
C.esd.prototype={
$0(){var w=this.a
return w.m(new C.esc(w))},
$S:0}
C.esc.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ese.prototype={
$1(d){return this.a.cAw(this.b.a,d)},
$S:2}
C.eri.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:170}
C.erj.prototype={
$1(d){return this.a.$1(new C.erh(this.b,d))},
$S:6}
C.erh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erk.prototype={
$1(d){return this.a.$1(new C.erg(this.b,d))},
$S:6}
C.erg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erl.prototype={
$1(d){return this.a.$1(new C.erf(this.b,d))},
$S:6}
C.erf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erm.prototype={
$1(d){return this.a.$1(new C.ere(this.b,d))},
$S:6}
C.ere.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ern.prototype={
$1(d){return this.a.$1(new C.erd(this.b,d))},
$S:6}
C.erd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ero.prototype={
$1(d){return this.b.$1(new C.erc(this.a,this.c))},
$S:9}
C.erc.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erp.prototype={
$1(d){return this.b.$1(new C.erb(this.a,this.c))},
$S:9}
C.erb.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.erq.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.era(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.era.prototype={
$0(){return this.a.$1(new C.er7(this.b,this.c))},
$S:0}
C.er7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.err.prototype={
$1(d){return this.a.$1(new C.er9(this.b,d))},
$S:1705}
C.er9.prototype={
$0(){var w=this.b
return this.a.as=w.gJ(w)},
$S:0}
C.ers.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.er8(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.er8.prototype={
$0(){return this.a.$1(new C.er6(this.b,this.c))},
$S:0}
C.er6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ert.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pv()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eK()}v.a.arA()},
$S:0}
C.erw.prototype={
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
r.push(B.ao(2,B.p(n,B.X(A.tZ,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nb,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:126}
C.ep5.prototype={
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
$S:126}
C.eta.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anw,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.et8(d),w,w),B.bG(A.pe,new C.et9(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.et8.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.et9.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d_L.prototype={
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
t=B.aq(A.aK,A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj).j(0.18+w*0.12),A.J,32+w*10),D.aaE],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ku(j.a.c.w)?D.u7:M.nj).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ku(m)?D.u7:M.nj
s=B.a([new B.ac(0,A.G,A.d.gJ(C.ku(m)?D.u7:M.nj).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.ku(j.a.c.w)?A.vA:A.pX,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f4Q,A.L,k,k),A.at,B.d(j.gcvx(),k,k,k,k,k,k,D.f9k,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gRS()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.ku(j.a.c.w)?D.u7:M.nj).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jt(A.xY,"Download PDF","pdf",A.d3,j.IJ(0),!1,k))
p=j.a.c
if(!p.z||p.gRS()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jt(A.kT,"Transfer to "+C.hkl(p==null?"":p),"transfer_hati",A.aV,j.IJ(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IJ(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jt(D.bCQ,"Rename presentation","rename",A.ce,n,!1,k),A.am,new C.Jt(A.ajP,"Duplicate","duplicate",A.b7,j.IJ(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jt(A.e6,"Delete presentation","delete",A.ay,j.IJ(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IJ(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IJ(n)
s.push(B.dU(B.dc(B.bK(!1,E.aQr,k,k,!0,k,k,new C.d_K(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.btd,k,k,k,k,k,A.k1,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bsm,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.V1,new B.o(A.aA,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:46}
C.d_K.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d06.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d07.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d_I.prototype={
$1(d){var w=this.a
return w.m(new C.d_E(w))},
$S:23}
C.d_E.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_J.prototype={
$1(d){var w=this.a
return w.m(new C.d_D(w))},
$S:49}
C.d_D.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_H.prototype={
$0(){var w=this.a
return w.m(new C.d_F(w))},
$S:0}
C.d_F.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_G.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.evQ.prototype={
$0(){return $.bjM=!$.bjM},
$S:0}
C.evG.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTV())u.avp()},
$S:0}
C.evP.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evH.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evI.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avp()},
$S:0}
C.evC.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gJ(w.a.c.r).r
w.d=0},
$S:0}
C.evD.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.evE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evF.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.evN.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.evO.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hT)return new B.cZ(e,!1,d,null)
w=this.a
return w.cty(w.e,d,e)},
$S:437}
C.evJ.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evK.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jY((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evL.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.jY(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evM.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evR.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYo().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYo().x
t===$&&B.c()
return new C.b0t(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ir(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:698}
C.evT.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bU,x.w).w.a.a*0.55)w.avp()
else w.ci5()},
$S:49}
C.evS.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDP.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:438}
C.fDY.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fDV(d),w,w),B.bK(!1,D.frJ,w,w,!0,w,w,new C.fDW(d,this.b,v),w,w),B.bG(A.aQI,new C.fDX(d,v,this.c),w)],x.p),w,w,L.th,new B.a7(320,w,t,w),w,w,w,w,D.ftb,w)},
$S:19}
C.fDV.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDW.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.h__(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDX.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPo(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aON(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDO.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdz.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:525}
C.fDU.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fbT.prototype={
$1(d){return C.fZY(C.Vy(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fME.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.fMF.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,D.fT1,0.94+w*0.06,null,null),w)},
$S:436}
C.fMG.prototype={
$1(d){var w=this
return new C.VA(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evm.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evl.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VB(u,this.b,w.gaNf(),v,null)},
$S:z+99}
C.evj.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evn.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evr.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evs.prototype={
$0(){var w=this.a
return w.m(new C.evq(w))},
$S:0}
C.evq.prototype={
$0(){return this.a.d="one"},
$S:0}
C.evt.prototype={
$0(){var w=this.a
return w.m(new C.evp(w))},
$S:0}
C.evp.prototype={
$0(){return this.a.d="all"},
$S:0}
C.evu.prototype={
$1(d){return this.a.bI6(d,this.b)},
$S:z+100}
C.evh.prototype={
$0(){var w=this.a
return w.m(new C.evg(w,this.b))},
$S:0}
C.evg.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evv.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.evw.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.evx.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evy.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(D.eSh)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ep_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoZ())},
$S:0}
C.eoZ.prototype={
$0(){},
$S:0}
C.ep0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fK()},
$S:8}
C.eoW.prototype={
$1(d){return this.a.m(new C.eoV())},
$S:2}
C.eoV.prototype={
$0(){},
$S:0}
C.eoX.prototype={
$1(d){return this.a.aYJ()},
$S:2}
C.eoY.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.evA(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.evA.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fy8.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.kg(this.c,new C.fy7(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:216}
C.fy7.prototype={
$3(d,e,f){return new C.Ir(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fy9.prototype={
$1(d){var w=null
return B.oh(!1,B.av(new C.buh(this.a,this.b,w),w,w,w),w,x.z)},
$S:333}
C.fyd.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmA(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n7,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmA(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pS))throw B.V("Could not draw the slide.")
u=r.lX(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fye.prototype={
bjP(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hN([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fQN(t)
w=4
return B.b(new B.pY(s,"load",!1,x.ev).gJ(0).cM(0,A.jw),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjP(d)},
$S:1710}
C.fya.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:148}
C.fyb.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fQ(0)},
$S:148}
C.fyc.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f6b.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f1m,A.L,w,w)},
$S:1711}
C.f6c.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m0(A.bm,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:646}
C.eda.prototype={
$1(d){this.a.ZA()
return null},
$S:12}
C.ed8.prototype={
$0(){return this.a.e=D.boq},
$S:0}
C.ed9.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cg7.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cg8.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLl.prototype
w.buo=w.q
w=C.aKP.prototype
w.btR=w.q
w=C.aKA.prototype
w.btB=w.q
w=C.aKO.prototype
w.btQ=w.q
w=C.aLj.prototype
w.bum=w.q
w=C.aMG.prototype
w.bvU=w.q
w=C.aJv.prototype
w.bst=w.q
w=C.aLx.prototype
w.buA=w.q
w=C.aLy.prototype
w.buB=w.q
w=C.b28.prototype
w.bp7=w.aC2})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i5_","an4",104)
v(C.aIu.prototype,"gc2g","Yv",0)
var r
u(r=C.ax4.prototype,"gcuT","cuU",38)
v(r,"gc31","acH",0)
v(r=C.ax0.prototype,"gaXh","DP",3)
v(r,"gc2Z","c3_",3)
v(r,"gavH","xA",0)
v(r,"gavI","Im",0)
t(C,"i5q","hBI",105)
v(C.aD8.prototype,"gc5C","c5D",3)
s(C,"i5B",0,null,["$4$paper$photo$request$template"],["fFd"],106,0)
s(C,"i5A",0,null,["$5$doc$history$instruction$photo$template"],["bBq"],107,0)
v(r=C.aDr.prototype,"gc6j","IG",0)
v(r,"gbHz","Wn",0)
v(r,"gc6m","adw",0)
v(r,"gc6l","Zm",0)
v(r,"gaYo","E6",0)
v(C.aDv.prototype,"gc6r","Zo",0)
v(r=C.aES.prototype,"gaYB","Pr",0)
v(r,"gcmW","b1Z",3)
v(r,"gcwh","aAc",86)
v(r,"gbLl","a9z",0)
v(r,"gc6S","Aj",0)
v(r=C.aGN.prototype,"gcgP","a_J",0)
v(r,"gcgX","a_M",0)
v(r,"gbAu","a81",0)
v(r,"gc6W","adI",0)
v(C.aGM.prototype,"gc6X","adJ",0)
v(C.aAN.prototype,"gbzt","a7P",0)
v(C.aza.prototype,"gc6Y","Zz",0)
w(C,"i5O","i3H",12)
w(C,"i5M","i0E",12)
w(C,"i5N","i2H",12)
v(r=C.aDL.prototype,"gczr","czs",3)
v(r,"gcla","clb",3)
u(r,"gEc","aen",7)
v(r,"gbFb","aqK",3)
u(r,"gEd","aZS",7)
v(r,"gc94","ae4",0)
v(r,"gc7W","ae3",0)
v(r,"gcbe","aeo",0)
v(r,"gbHw","a9a",0)
v(r,"gcc7","a_8",0)
v(r,"gcc8","aeF",0)
v(r,"gccF","aeM",0)
v(r,"gcbr","aer",0)
v(r,"gbLv","a9D",0)
v(r,"gaQK","aQL",3)
v(r,"gaPT","aPU",3)
v(r,"gaLA","aLB",3)
v(r,"gaPS","arA",3)
u(r,"gbzK","bzL",80)
v(r,"gazL","b50",3)
v(r,"gc7Y","c7Z",3)
v(r,"gbWy","bWz",3)
v(r,"gbJZ","bK_",3)
v(r=C.aDO.prototype,"gcyi","cyj",3)
v(r,"gcxY","cxZ",3)
t(C,"i5P","i3Y",2)
v(r=C.aDM.prototype,"gc73","IL",0)
v(r,"gcoV","QS",0)
v(r,"gc70","IK",0)
v(r,"gcAH","a2e",0)
v(r,"gccR","aeT",0)
v(C.aDK.prototype,"gc74","aYJ",3)
v(r=C.aDN.prototype,"gbMg","a9N",0)
u(r,"gc71","c72",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Rq,C.bGY,C.bFk,C.cwc,C.cwa,C.bN8,C.b7U,C.cwb,C.bDV,C.cg1,C.cg_,C.cg0,C.cfZ,C.asf,C.cfY,C.bO1,C.of,C.aEm,C.jm,C.nC,C.a7w,C.zj,C.lc,C.os,C.m2,C.zl,C.nG,C.a7E,C.aqD,C.b0u,C.ecA,C.l9,C.Eo,C.eu,C.iY,C.Ef,C.xq,C.eJ,C.lD,C.i0,C.jF,C.a7F,C.aeO,C.b0v,C.b28,C.a2s])
u(B.kj,[C.cE2,C.bYH,C.ftl,C.cFy,C.cEV,C.fyR,C.dXE,C.dXD,C.edd,C.edc,C.fAf,C.fd0,C.fd1,C.cbX,C.cbY,C.cbZ,C.ehB,C.eQo,C.ePM,C.ePL,C.eQP,C.eQm,C.eQf,C.eQy,C.eRe,C.fkf,C.eXn,C.eXm,C.eXQ,C.ecD,C.fDL,C.dTn,C.fKc,C.fAC,C.cdr,C.cdp,C.cdu,C.fB6,C.fB7,C.fB8,C.fB9,C.cdb,C.cdc,C.dFE,C.cd8,C.fB5,C.f3K,C.dRz,C.cd1,C.ecj,C.fyG,C.esA,C.esZ,C.esW,C.esV,C.et5,C.et4,C.euA,C.euz,C.esP,C.esO,C.epo,C.eqy,C.etx,C.euS,C.euR,C.eql,C.erw,C.ep5,C.d_L,C.evN,C.evO,C.evJ,C.evK,C.evL,C.evM,C.evR,C.cdz,C.evm,C.evx,C.cg8])
u(B.hV,[C.cE3,C.cE4,C.bO2,C.fqK,C.bYG,C.bYJ,C.fGH,C.f4I,C.f4z,C.f4P,C.fbU,C.fbV,C.ftm,C.ftk,C.fGb,C.fqq,C.fH2,C.cFo,C.cFt,C.cFv,C.cFr,C.cFw,C.cFp,C.cFx,C.cFk,C.cFh,C.cFg,C.cFn,C.cEQ,C.cEO,C.fxT,C.fxU,C.fgi,C.fyS,C.fyY,C.ffl,C.c8f,C.fxR,C.fxS,C.fsI,C.fsJ,C.fyX,C.fyT,C.fyV,C.fyW,C.fyU,C.fKu,C.fsM,C.fsN,C.fsQ,C.fsR,C.fsU,C.fsV,C.fLX,C.fdr,C.fM7,C.egv,C.egw,C.egx,C.egd,C.egp,C.egq,C.egs,C.cbW,C.cbU,C.cbV,C.fyx,C.fyz,C.fyy,C.fd2,C.fd3,C.fMa,C.ehG,C.ehH,C.ehy,C.ehz,C.ehC,C.ehD,C.fMq,C.eRf,C.eQF,C.eQp,C.eQC,C.ePH,C.ePI,C.ePJ,C.ePN,C.ePO,C.eR4,C.eRb,C.eRd,C.eQO,C.eQQ,C.eQU,C.eQV,C.eQW,C.eR_,C.eQR,C.eQS,C.ePZ,C.eQ_,C.eQ0,C.eQ1,C.eQ2,C.eQ3,C.eQ4,C.eQ5,C.eQ6,C.ePk,C.ePl,C.ePm,C.ePn,C.ePp,C.ePq,C.ePT,C.ePU,C.ePV,C.ePW,C.ePX,C.ePu,C.ePv,C.ePw,C.ePx,C.eQe,C.eQx,C.fvW,C.fvV,C.cdi,C.fke,C.fDH,C.fDA,C.fDD,C.fBA,C.fBB,C.fBC,C.fw2,C.fw1,C.fw0,C.fvZ,C.fcY,C.fcZ,C.fd_,C.fMC,C.eXp,C.eXq,C.eXj,C.eXd,C.eXJ,C.eXK,C.eXM,C.eXN,C.eXI,C.fMB,C.eX4,C.fju,C.ecC,C.fDJ,C.fDK,C.fDM,C.fDF,C.fDG,C.fLP,C.di1,C.di7,C.ecB,C.f9r,C.f9t,C.f9s,C.f9q,C.fx6,C.fx8,C.fbr,C.fDb,C.fDc,C.fDd,C.fDo,C.fDt,C.fDu,C.fDv,C.fDw,C.fDx,C.fDy,C.fDz,C.fDe,C.fDf,C.fDg,C.fDh,C.fDi,C.fDj,C.fDk,C.fDl,C.fDm,C.fDn,C.fDp,C.fDq,C.fDr,C.fDs,C.fuX,C.fj2,C.fj1,C.fDS,C.dTo,C.dTm,C.eWe,C.c7R,C.c7T,C.fKe,C.d7k,C.d7m,C.fKd,C.fKb,C.fMA,C.fAy,C.d6V,C.fsY,C.fsZ,C.cdg,C.cdh,C.cdf,C.cd5,C.cd6,C.cd2,C.cd3,C.cd4,C.cdx,C.cds,C.cdn,C.cdo,C.cdq,C.cdt,C.cdv,C.fBa,C.cda,C.cdd,C.cde,C.cdk,C.cdl,C.fDZ,C.fD5,C.cd9,C.cd7,C.fB4,C.flA,C.cd0,C.eTS,C.foq,C.evd,C.erD,C.erE,C.etd,C.et1,C.et2,C.er0,C.euZ,C.ev_,C.ev0,C.eqp,C.esH,C.esJ,C.esj,C.esg,C.erz,C.erA,C.esq,C.eqr,C.esC,C.esD,C.esB,C.esF,C.esE,C.esX,C.esY,C.et_,C.esT,C.eqK,C.eqH,C.et6,C.eqz,C.euY,C.ep7,C.eqC,C.eqB,C.epQ,C.epV,C.epT,C.epR,C.ev5,C.ev6,C.ev7,C.ev4,C.euC,C.euB,C.euv,C.eux,C.eun,C.euW,C.euU,C.epf,C.epb,C.erx,C.epZ,C.epq,C.epp,C.epM,C.epN,C.eqZ,C.eq0,C.eq4,C.esQ,C.euo,C.eup,C.euq,C.eur,C.eqt,C.equ,C.eqv,C.es_,C.eqV,C.eqN,C.eqU,C.es9,C.esa,C.etX,C.etZ,C.eui,C.euk,C.eu_,C.eu0,C.epX,C.erC,C.erB,C.euM,C.eqk,C.eqc,C.eqd,C.eqg,C.eqh,C.ese,C.eri,C.erj,C.erk,C.erl,C.erm,C.ern,C.ero,C.erp,C.erq,C.err,C.ers,C.eta,C.d_I,C.d_J,C.evT,C.fDP,C.fDY,C.fDO,C.fDU,C.fbT,C.fME,C.fMF,C.fMG,C.evl,C.evu,C.ep0,C.eoW,C.eoX,C.fy8,C.fy7,C.fy9,C.fye,C.fya,C.fyb,C.f6b,C.f6c,C.eda,C.cg7])
u(B.j7,[C.cE5,C.f4E,C.f4J,C.f4K,C.f4F,C.f4G,C.f4H,C.f4x,C.f4y,C.f4A,C.f4B,C.f4O,C.f4N,C.f4D,C.f4C,C.f4L,C.f4M,C.f4R,C.f4S,C.f4Q,C.cFq,C.cFu,C.cFs,C.cFi,C.cFj,C.cFl,C.cFe,C.cFf,C.cFm,C.cFd,C.cFc,C.cFb,C.cEF,C.cEE,C.cEH,C.cEP,C.cEI,C.cEG,C.cEK,C.cEL,C.cEM,C.cEJ,C.cEN,C.cER,C.cES,C.cET,C.cEU,C.fsG,C.fsH,C.fsE,C.fsF,C.e7Z,C.e7X,C.e7Y,C.e8_,C.e80,C.dXC,C.fsK,C.fsL,C.fsO,C.fsP,C.fsS,C.fsT,C.edb,C.fAF,C.fAE,C.egu,C.egt,C.eg7,C.eg3,C.ege,C.egf,C.egg,C.eg9,C.ega,C.egb,C.egc,C.eg8,C.eg5,C.eg6,C.egm,C.egn,C.egl,C.ego,C.egk,C.egj,C.egi,C.egr,C.egh,C.eg4,C.ehF,C.eht,C.ehu,C.ehA,C.ehv,C.ehx,C.ehw,C.ehE,C.eQ7,C.eQv,C.ePR,C.ePS,C.ePP,C.ePQ,C.eQB,C.eQA,C.eQz,C.eQE,C.eQD,C.ePG,C.ePK,C.ePF,C.ePE,C.ePB,C.ePD,C.ePC,C.eRc,C.eR5,C.eR3,C.eR6,C.eR2,C.eR7,C.eR1,C.eR8,C.eR9,C.eRa,C.eR0,C.eQN,C.eQI,C.eQT,C.eQM,C.eQX,C.eQL,C.eQY,C.eQK,C.eQZ,C.eQJ,C.eQs,C.eQr,C.eQt,C.eQq,C.eQu,C.eQk,C.eQj,C.eQl,C.eQi,C.eQh,C.eQg,C.ePo,C.ePj,C.ePy,C.ePt,C.ePz,C.ePs,C.ePA,C.ePr,C.eQn,C.eQb,C.eQa,C.eQc,C.eQ9,C.eQd,C.eQ8,C.eQw,C.eQH,C.eQG,C.ePY,C.fDC,C.fDE,C.fDI,C.fw_,C.fyq,C.fyo,C.fyp,C.eXr,C.eXs,C.eXo,C.eXi,C.eXh,C.eXk,C.eXl,C.eX7,C.eX8,C.eXa,C.eXb,C.eXc,C.eX9,C.eXe,C.eXF,C.eXG,C.eXE,C.eXH,C.eXD,C.eXC,C.eXB,C.eXL,C.eXA,C.eXz,C.eXy,C.eXO,C.eXx,C.eXP,C.eXw,C.eXv,C.eXf,C.eXg,C.eXu,C.eXt,C.eX0,C.eX1,C.eX2,C.eX3,C.eX_,C.eX5,C.eX6,C.di0,C.di2,C.di5,C.di6,C.di4,C.di3,C.fx7,C.fuY,C.c7S,C.c7U,C.d7d,C.d7i,C.d7j,C.d7h,C.d7g,C.d7l,C.d7f,C.d7e,C.d7n,C.fKa,C.de_,C.de0,C.de1,C.fsW,C.fsX,C.cdy,C.ep1,C.ep2,C.ep3,C.ep4,C.fly,C.flz,C.dRB,C.dRA,C.d49,C.d48,C.evf,C.eve,C.erF,C.eul,C.evb,C.etb,C.ev1,C.ev2,C.evc,C.esk,C.eqn,C.eqo,C.esI,C.esi,C.esf,C.esh,C.esl,C.esm,C.esn,C.eso,C.esp,C.esr,C.eqs,C.esu,C.esv,C.esw,C.esx,C.esy,C.esz,C.est,C.esG,C.esU,C.esS,C.et0,C.ess,C.eqI,C.eqJ,C.eqL,C.et3,C.et7,C.epm,C.eqG,C.eqE,C.etf,C.eqA,C.ete,C.eqq,C.er1,C.euX,C.eum,C.epn,C.epk,C.epa,C.ep6,C.ep8,C.eqD,C.epP,C.epU,C.epS,C.epO,C.esR,C.ev8,C.euy,C.eut,C.euu,C.euw,C.erv,C.eru,C.euV,C.epd,C.epe,C.epg,C.eph,C.epl,C.epc,C.etc,C.ev3,C.ery,C.epY,C.ep9,C.er_,C.epi,C.epr,C.eps,C.ept,C.epE,C.epH,C.epI,C.epJ,C.epK,C.epL,C.epu,C.epv,C.epw,C.epx,C.epy,C.epz,C.epA,C.epB,C.epC,C.epD,C.epF,C.epG,C.eqY,C.eqX,C.eqW,C.epj,C.eq1,C.eq_,C.eq2,C.eq3,C.eqF,C.esM,C.esN,C.esK,C.esL,C.eus,C.eqx,C.eqw,C.erZ,C.erY,C.es0,C.erX,C.es1,C.erW,C.es2,C.erV,C.es3,C.erU,C.es4,C.erT,C.es5,C.erS,C.es6,C.erR,C.erK,C.erL,C.erM,C.erJ,C.erN,C.erI,C.erO,C.erH,C.erP,C.erG,C.erQ,C.eqS,C.eqT,C.eqM,C.eqO,C.eqP,C.eqQ,C.eqR,C.ev9,C.eva,C.es8,C.es7,C.esb,C.ety,C.etz,C.etA,C.etL,C.etW,C.eu6,C.eud,C.eue,C.euf,C.eug,C.euh,C.etB,C.etC,C.etD,C.etE,C.etF,C.etG,C.etH,C.etI,C.etJ,C.etK,C.etM,C.etN,C.etO,C.etP,C.etQ,C.etR,C.etS,C.etT,C.etU,C.eto,C.etV,C.etw,C.etv,C.etY,C.etu,C.etk,C.euj,C.ett,C.etj,C.eth,C.ets,C.eti,C.etg,C.eu1,C.etr,C.eu2,C.eu3,C.eu4,C.eu5,C.etq,C.eu7,C.eu8,C.eu9,C.etp,C.eua,C.etn,C.eub,C.etm,C.euc,C.etl,C.epW,C.euF,C.euE,C.euG,C.euD,C.er4,C.er3,C.er5,C.er2,C.euQ,C.euL,C.euP,C.euH,C.euI,C.euJ,C.euK,C.euN,C.euO,C.euT,C.eqm,C.eq9,C.eqa,C.eqb,C.eq8,C.eqf,C.eqe,C.eq7,C.eq6,C.eqi,C.eq5,C.eqj,C.esd,C.esc,C.erh,C.erg,C.erf,C.ere,C.erd,C.erc,C.erb,C.era,C.er7,C.er9,C.er8,C.er6,C.ert,C.et8,C.et9,C.d_K,C.d06,C.d07,C.d_E,C.d_D,C.d_H,C.d_F,C.d_G,C.evQ,C.evG,C.evP,C.evH,C.evI,C.evC,C.evD,C.evE,C.evF,C.evS,C.fDV,C.fDW,C.fDX,C.evi,C.evj,C.evk,C.evn,C.evo,C.evr,C.evs,C.evq,C.evt,C.evp,C.evh,C.evg,C.evv,C.evw,C.evy,C.evz,C.ep_,C.eoZ,C.eoV,C.eoY,C.evB,C.evA,C.fyd,C.fyc,C.ed8,C.ed9])
t(C.aQI,B.J)
u(B.m7,[C.a3r,C.awx,C.ave,C.xo,C.xr,C.kQ,C.tc,C.Bf,C.ro,C.vR,C.arc,C.Is,C.aqC,C.uA,C.mt,C.hy,C.a8g])
u(C.bN8,[C.cwd,C.bN9])
u(C.cg1,[C.cg5,C.ase])
t(C.cg4,C.cg_)
t(C.cg3,C.cfZ)
t(C.cg6,C.cg3)
t(C.cg2,C.cg0)
t(C.cfX,C.cfY)
t(C.b9s,B.oK)
t(C.cq3,B.auH)
t(C.a82,B.xb)
t(C.aVa,B.dG)
t(C.aA5,B.atz)
u(B.ag,[C.a0s,C.Yc,C.Ya,C.apN,C.Vm,C.Vp,C.a_t,C.a0_,C.a_Z,C.aDk,C.Zl,C.N9,C.YU,C.Ze,C.anN,C.aIb,C.UB,C.ayV,C.a7m,C.NC,C.ayh,C.Jt,C.a_5,C.VA,C.VB,C.aDJ,C.aqH,C.a7n])
u(B.ah,[C.aIu,C.ax4,C.ax0,C.aD8,C.aDr,C.aDv,C.aES,C.aGN,C.aGM,C.aLl,C.aAN,C.aKP,C.aza,C.bfl,C.aKA,C.aMG,C.aKO,C.bde,C.aLj,C.aLx,C.aJv,C.bc_,C.aLy,C.aDM,C.bjL,C.aDK,C.aDN,C.bju])
u(B.au,[C.ax2,C.acU,C.aci,C.biw,C.acX,C.aeE,C.b06,C.brT,C.b0q,C.bl4,C.bqs,C.aZk,C.b0t,C.ad_,C.adh,C.b0r,C.Ir,C.aZn,C.bce,C.Ph,C.JA,C.bgT,C.bgS,C.buh])
u(B.GX,[C.bbH,C.bti,C.aIO,C.beo,C.bqQ])
u(B.mK,[C.bbG,C.b8b,C.bqN,C.bbd,C.beM,C.bgZ,C.bdS,C.beJ,C.beq,C.bnk,C.b9k,C.b8Y,C.bue,C.brf,C.bqo,C.bdL,C.b0o,C.bpl,C.bql])
t(C.bjr,C.aLl)
t(C.biO,C.aKP)
t(C.biy,C.aKA)
t(C.btL,C.aMG)
t(C.biL,C.aKO)
t(C.bjp,C.aLj)
t(C.bwz,C.aLx)
t(C.aDL,C.bwz)
t(C.bc0,C.aJv)
t(C.aDO,C.aLy)
t(C.bu5,B.iQ)
t(C.a8f,B.kq)
t(C.cg9,C.b28)
t(C.ahR,C.a2s)
u(B.Xc,[C.aQy,C.aS2])
t(C.aw9,C.aQy)
w(C.aLl,B.c9)
w(C.aKP,B.c9)
w(C.aKA,B.c9)
w(C.aKO,B.c9)
w(C.aLj,B.c9)
w(C.aMG,B.c9)
w(C.aJv,B.eR)
w(C.aLx,B.c9)
v(C.bwz,B.ez)
w(C.aLy,B.c9)})()
B.jW(b.typeUniverse,JSON.parse('{"aRh":{"hH":["aRh"]},"nP":{"aRh":[],"hH":["aRh"]},"aQI":{"J":["Rq"],"J.E":"Rq"},"b9s":{"oK":[]},"a82":{"xb":[],"o8":[]},"aVa":{"dG":[],"cA":[],"r":[]},"aA5":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0s":{"ag":[],"r":[]},"aIu":{"ah":["a0s"]},"Yc":{"ag":[],"r":[]},"Ya":{"ag":[],"r":[]},"ax4":{"ah":["Yc"]},"ax0":{"ah":["Ya"]},"ax2":{"au":[],"r":[]},"apN":{"ag":[],"r":[]},"aD8":{"ah":["apN"]},"acU":{"au":[],"r":[]},"aci":{"au":[],"r":[]},"acX":{"au":[],"r":[]},"aeE":{"au":[],"r":[]},"biw":{"au":[],"r":[]},"Vm":{"ag":[],"r":[]},"aDr":{"ah":["Vm"]},"b06":{"au":[],"r":[]},"bbH":{"aB":[]},"bbG":{"aB":[]},"bti":{"aB":[]},"b8b":{"aB":[]},"bqN":{"aB":[]},"Vp":{"ag":[],"r":[]},"aDv":{"ah":["Vp"]},"bbd":{"aB":[]},"a_t":{"ag":[],"r":[]},"aES":{"ah":["a_t"]},"beM":{"aB":[]},"a0_":{"ag":[],"r":[]},"a_Z":{"ag":[],"r":[]},"aDk":{"ag":[],"r":[]},"Zl":{"ag":[],"r":[]},"aGN":{"ah":["a0_"]},"aGM":{"ah":["a_Z"]},"bjr":{"ah":["aDk"]},"bgZ":{"aB":[]},"aAN":{"ah":["Zl"]},"brT":{"au":[],"r":[]},"b0q":{"au":[],"r":[]},"bl4":{"au":[],"r":[]},"N9":{"ag":[],"r":[]},"YU":{"ag":[],"r":[]},"biO":{"ah":["N9"]},"bqs":{"au":[],"r":[]},"bdS":{"aB":[]},"aZk":{"au":[],"r":[]},"aza":{"ah":["YU"]},"Ze":{"ag":[],"r":[]},"bfl":{"ah":["Ze"]},"beJ":{"aB":[]},"beq":{"aB":[]},"bnk":{"aB":[]},"b9k":{"aB":[]},"b8Y":{"aB":[]},"bue":{"aB":[]},"brf":{"aB":[]},"bqo":{"aB":[]},"bdL":{"aB":[]},"anN":{"ag":[],"r":[]},"b0t":{"au":[],"r":[]},"biy":{"ah":["anN"]},"ad_":{"au":[],"r":[]},"adh":{"au":[],"r":[]},"aIb":{"ag":[],"r":[]},"UB":{"ag":[],"r":[]},"Ir":{"au":[],"r":[]},"ayV":{"ag":[],"r":[]},"a7m":{"ag":[],"r":[]},"b0r":{"au":[],"r":[]},"b0o":{"aB":[]},"btL":{"ah":["aIb"]},"aIO":{"aB":[]},"biL":{"ah":["UB"]},"bde":{"ah":["ayV"]},"bjp":{"ah":["a7m"]},"aZn":{"au":[],"r":[]},"beo":{"aB":[]},"bpl":{"aB":[]},"bql":{"aB":[]},"ayh":{"ag":[],"r":[]},"Jt":{"ag":[],"r":[]},"a_5":{"ag":[],"r":[]},"JA":{"au":[],"r":[]},"NC":{"ag":[],"r":[]},"aDL":{"ah":["NC"],"ez":[]},"bc0":{"ah":["ayh"]},"bce":{"au":[],"r":[]},"bc_":{"ah":["Jt"]},"Ph":{"au":[],"r":[]},"aDO":{"ah":["a_5"]},"bqQ":{"aB":[]},"bgT":{"au":[],"r":[]},"bgS":{"au":[],"r":[]},"VA":{"ag":[],"r":[]},"VB":{"ag":[],"r":[]},"aDJ":{"ag":[],"r":[]},"aqH":{"ag":[],"r":[]},"aDM":{"ah":["VA"]},"bjL":{"ah":["VB"]},"aDK":{"ah":["aDJ"]},"bu5":{"iQ":[]},"aDN":{"ah":["aqH"]},"buh":{"au":[],"r":[]},"a7n":{"ag":[],"r":[]},"bju":{"ah":["a7n"]},"a8f":{"kq":["fr<eP>"],"kc":["fr<eP>"]},"ahR":{"a2s":[]},"aQy":{"j1":[],"ff":[]},"aw9":{"j1":[],"ff":[]},"aS2":{"j1":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lm"),U:w("vm<pW>"),bz:w("w"),M:w("eM<n>"),bo:w("jA"),g7:w("LR"),gc:w("az<iu?>"),bq:w("az<~>"),cc:w("M4"),fS:w("DG"),an:w("HE"),bm:w("O<Rq>"),X:w("O<a2A>"),f3:w("O<aRh>"),aK:w("O<n5>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lv>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nb>"),cd:w("O<ai<jm>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mp>"),h:w("O<jm>"),gE:w("O<zj>"),k:w("O<of>"),g:w("O<lD>"),D:w("O<i0>"),u:w("O<eJ>"),m:w("O<uA>"),i:w("O<hy>"),aC:w("O<a7E>"),o:w("O<zl>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<ho>"),cR:w("O<iO>"),J:w("O<jd>"),gx:w("O<p4<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(M,M)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<n>"),aS:w("O<iQ>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7U>"),bx:w("O<aEm>"),gz:w("O<aeO>"),x:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<of>"),R:w("ai<i0>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hy,r>"),eC:w("K<nG,n>"),cT:w("K<jF,D>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pA>"),gh:w("K<mt,jo<mt>>"),w:w("iA"),ei:w("iu"),g2:w("re"),fB:w("Ef"),b6:w("zj"),gX:w("a7w"),dt:w("lc"),ea:w("of"),bt:w("lD"),I:w("i0"),F:w("eJ"),fO:w("mt"),ff:w("uA"),fP:w("hy"),Q:w("vR"),dO:w("aqD"),a:w("cq"),C:w("aC"),dw:w("asf"),di:w("a8g"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EK"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pW"),bO:w("as"),K:w("bo<u>"),b:w("bo<M>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kg<lD>"),cI:w("kg<n>"),cl:w("kg<M>"),b4:w("a1<l9>"),a8:w("a1<m2>"),fR:w("a1<+(n,n)>"),co:w("e8<u>"),l:w("r"),b2:w("bX<~>"),ev:w("pY<dX>"),dT:w("bg<~>"),cQ:w("aA5"),q:w("mY"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a4<n,@>>?"),aT:w("ai<i0>?"),c:w("ai<@>?"),aP:w("iu?"),af:w("i0?"),go:w("b0v?"),a6:w("a7F?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVs=new B.bI(A.ax,null,null,N.ang,null)
D.aVC=new B.da(0,-0.15)
D.aVE=new B.da(0.62,0)
D.aVH=new B.da(-0.35,-0.45)
D.aVR=new B.da(0.9,-0.85)
D.aLp=new B.aT(30,30)
D.aX8=new B.bp(D.aLp,D.aLp,A.he,A.he)
D.aXm=new B.ay(A.b7,1,A.q,-1)
D.bfR=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXy=new B.ay(D.bfR,1,A.q,-1)
D.aXK=new B.ay(A.aE,1.5,A.q,-1)
D.aXP=new B.ay(A.b7,1.6,A.q,-1)
D.aY4=new B.ay(A.aE,1.4,A.q,-1)
D.aZt=new B.o(null,null,null,null,null,K.Go,A.a6)
D.bUT=new B.a8(A.a3,A.a7,A.x,G.a2w,null,null)
D.aZB=new B.o(null,null,null,null,null,D.bUT,A.a6)
D.aat=new B.o(A.aA,null,null,A.rV,null,null,A.n)
D.b9X=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bfO=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cRY=w([D.b9X,D.bfO],x.O)
D.edc=new B.bT(A.A,0.5,A.x,null,0,D.cRY,null,null)
D.aZU=new B.o(null,null,null,null,null,D.edc,A.a6)
D.Ww=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYk=new B.bO(P.uS,A.Y,A.Y,A.Y)
D.aZW=new B.o(D.Ww,null,D.aYk,null,null,null,A.n)
D.bWF=new B.a8(A.a3,A.a7,A.x,A.PM,null,null)
D.b_2=new B.o(null,null,null,null,null,D.bWF,A.a6)
D.ac2=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_4=new B.o(D.ac2,null,null,A.qw,null,null,A.n)
D.b_8=new B.o(A.kj,null,null,null,null,null,A.a6)
D.aYr=new B.bO(A.A3,A.Y,A.Y,A.Y)
D.b_b=new B.o(Z.ad7,null,D.aYr,A.m8,null,null,A.n)
D.DO=new B.o(A.dO,null,null,null,null,null,A.a6)
D.b_h=new B.o(null,null,null,null,null,E.vQ,A.a6)
D.cWN=w([E.ae0,A.bX],x.O)
D.bWf=new B.a8(A.b_,A.b5,A.x,D.cWN,null,null)
D.b_l=new B.o(null,null,null,A.m8,null,D.bWf,A.n)
D.d6a=w([A.bj,A.dO,A.jQ],x.O)
D.a0H=new B.a8(A.ax,A.aC,A.x,D.d6a,null,null)
D.b_y=new B.o(null,null,null,null,null,D.a0H,A.n)
D.b_z=new B.o(D.ac2,null,null,A.kF,null,null,A.n)
D.cmL=w([A.di,A.bj],x.O)
D.bW6=new B.a8(A.ax,A.aC,A.x,D.cmL,null,null)
D.b_D=new B.o(null,null,null,null,null,D.bW6,A.n)
D.b_N=new B.o(null,null,null,null,null,G.u0,A.a6)
D.b05=new B.o(A.ae2,null,null,null,null,null,A.a6)
D.baK=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaE=new B.ac(0,A.G,D.baK,A.RB,28)
D.b2c=new B.aVn()
D.b2L=new C.cq3()
D.b2X=new C.b9s()
D.ab9=new B.cr(A.A,null,null,A.a0w,null)
D.b5t=new B.fj(null,null,null,null,null,E.n0,null,null,null,null)
D.b3t=new B.cr(A.A,null,null,D.b5t,null)
D.bFP=new B.ae(A.dW,28,A.c,null,null,null)
D.b3X=new B.cr(A.A,null,null,D.bFP,null)
D.b5q=new B.fj(2,null,null,null,null,A.bY,null,null,null,null)
D.b4i=new B.cr(A.A,null,null,D.b5q,null)
D.bG8=new B.ae(K.Nr,40,A.bG,null,null,null)
D.b4j=new B.cr(A.A,null,null,D.bG8,null)
D.b6l=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6y=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b6W=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b71=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7x=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b7O=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b7P=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kq=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b8d=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b8i=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acm=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b91=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b9M=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acA=new B.w(1,1,1,0.9725490196078431,A.t)
D.ba4=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baf=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bai=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bau=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baP=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bc9=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wg=new B.w(0.8509803921568627,0,0,0,A.t)
D.bch=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bco=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adp=new B.w(0.6,0,0,0,A.t)
D.adr=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bdL=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tf=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bea=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.beA=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.beY=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aec=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WF=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AC=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KX=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j9=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aeB=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WQ=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.big=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.biK=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.biY=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xa=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bk4=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xg=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bkx=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bkQ=new B.hG(A.b3,!0,null,null)
D.f7B=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new B.x("Bio link",null,D.f7B,null,null,null,null,null,null,null,null,null)
D.b4c=new B.cr(A.A,null,null,D.fxf,null)
D.bl5=new B.hG(A.VD,!0,D.b4c,null)
D.Lk=new C.a3r(0,"none")
D.afH=new C.a3r(1,"deflate")
D.afI=new C.a3r(2,"bzip2")
D.bm_=new B.kl(0.165,0.84,0.44,1)
D.cX6=w([A.ci,A.dQ,A.aE],x.O)
D.bVn=new B.a8(A.ax,A.aC,A.x,D.cX6,null,null)
D.aZy=new B.o(null,null,null,null,null,D.bVn,A.n)
D.bOZ=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4O=new B.cr(A.A,null,null,D.bOZ,null)
D.bmw=new B.kN(D.aZy,A.bd,D.b4O,null)
D.biw=new B.w(0.058823529411764705,1,1,1,A.t)
D.d_e=w([A.bF,A.qG,A.qG,D.biw],x.O)
D.cDR=w([0,0.32,0.7,1],x.x)
D.bVW=new B.a8(A.ax,A.aC,A.x,D.d_e,D.cDR,null)
D.aZn=new B.o(null,null,null,null,null,D.bVW,A.n)
D.bmC=new B.kN(D.aZn,A.bd,null,null)
D.bnE=new B.mh(1,1,null,null,null,A.bm,null)
D.bnH=new B.mh(1,null,null,null,null,D.WQ,null)
D.boa=new B.b9(125e4)
D.bog=new B.b9(17e4)
D.boq=new B.b9(35964e8)
D.bow=new B.b9(55e4)
D.boA=new B.b9(68e4)
D.bp0=new B.ic(0,0,0,5)
D.bph=new B.Q(0,16,16,0)
D.bpk=new B.Q(0,18,0,8)
D.bps=new B.Q(0,36,0,36)
D.bpz=new B.Q(0,54,0,0)
D.bpG=new B.Q(10,0,10,3)
D.bpR=new B.ic(10,16,10,10)
D.bq2=new B.Q(10,6,4,6)
D.bq5=new B.Q(10,8,10,6)
D.agF=new B.Q(11,8,11,11)
D.bq9=new B.Q(12,0,12,24)
D.bql=new B.Q(12,12,12,4)
D.bqo=new B.Q(12,12,8,12)
D.bqD=new B.Q(12,8,8,12)
D.bqZ=new B.Q(14,14,14,0)
D.br3=new B.Q(14,14,14,90)
D.brm=new B.Q(16,10,16,16)
D.brn=new B.Q(16,10,16,20)
D.ahv=new B.Q(16,6,16,28)
D.brW=new B.Q(18,0,18,10)
D.brY=new B.Q(18,0,18,30)
D.bs_=new B.Q(18,10,18,12)
D.bs0=new B.Q(18,10,18,14)
D.bsh=new B.Q(18,16,14,18)
D.bsm=new B.Q(18,18,18,12)
D.bss=new B.Q(18,26,18,12)
D.bsx=new B.Q(18,34,18,34)
D.bsy=new B.Q(18,4,18,14)
D.bsE=new B.Q(18,8,18,24)
D.bsW=new B.Q(20,16,14,4)
D.bt0=new B.Q(20,18,12,4)
D.bt5=new B.Q(20,20,12,20)
D.bt8=new B.Q(20,22,20,20)
D.btd=new B.Q(20,6,20,6)
D.btm=new B.Q(22,18,22,18)
D.btu=new B.Q(22,24,22,0)
D.btx=new B.Q(22,24,22,4)
D.btF=new B.Q(22,60,22,22)
D.btL=new B.Q(24,24,24,22)
D.btV=new B.Q(26,10,60,10)
D.bu1=new B.Q(28,44,28,44)
D.bui=new B.Q(32,44,32,44)
D.buq=new B.Q(38,30,38,20)
D.buv=new B.Q(4,0,0,6)
D.buH=new B.ic(4,4,4,4)
D.bv7=new B.ic(6,5,6,5)
D.bvc=new B.Q(6,6,8,6)
D.bvn=new B.Q(8,14,8,14)
D.bvo=new B.Q(8,22,8,22)
D.bvw=new B.Q(8,6,12,6)
D.bvF=new B.Q(8,8,8,4)
D.ain=new B.Q(9,9,9,6)
D.bvP=new B.ic(2.5,2.5,2.5,2.5)
D.bvQ=new B.Q(10.5,0,10.5,0)
D.bvR=new B.Q(7,1.5,7,1.5)
D.cP5=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bw6=new B.yI(null,null,D.cP5,A.Ag)
D.cMb=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bw7=new B.yI(null,null,D.cMb,A.Ag)
D.aQ6=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwz=new B.x("WORD DESIGN",null,D.aQ6,null,null,null,null,null,null,null,null,null)
D.bwF=new B.bD(1,A.bh,D.fwz,null)
D.fwf=new B.x("Slides database",null,Ab.rH,null,null,null,null,null,null,null,null,null)
D.fty=new B.x("Admin only \xb7 keep as many as you like",null,U.aPA,null,null,null,null,null,null,null,null,null)
D.ddX=w([D.fwf,A.bB,D.fty],x.p)
D.blu=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.ddX,null)
D.bwI=new B.bD(1,A.bh,D.blu,null)
D.fo7=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bwL=new B.bD(1,A.bh,D.fo7,null)
D.f5u=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new B.x("TALK TO THE EDITOR",null,D.f5u,null,null,null,null,null,null,null,null,null)
D.bx0=new B.bD(1,A.bh,D.fyv,null)
D.fhY=new B.x("Tell the AI what to change",null,Ab.rH,null,null,null,null,null,null,null,null,null)
D.bxk=new B.bD(1,A.bh,D.fhY,null)
D.byb=new B.Du(!0,"video/mp4")
D.f3O=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg7=new B.x("Move presentations between devices",null,D.f3O,null,null,null,!1,null,null,1,null,null)
D.byf=new B.qg(A.eh,A.a3,A.f,D.fg7,null)
D.fhd=new B.x("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.byg=new B.qg(A.eh,A.A,A.f,D.fhd,null)
D.byv=new B.dq(1,A.cn,D.byg,null)
D.ZZ=new B.a_(60988,"MaterialIcons",!1)
D.bBi=new B.a_(61352,"MaterialIcons",!1)
D.ajT=new B.a_(61531,"MaterialIcons",!1)
D.bCx=new B.a_(63062,"MaterialIcons",!1)
D.bCF=new B.a_(63109,"MaterialIcons",!1)
D.bCQ=new B.a_(63206,"MaterialIcons",!1)
D.akC=new B.a_(63238,"MaterialIcons",!1)
D.a_u=new B.a_(63365,"MaterialIcons",!1)
D.a_v=new B.a_(63367,"MaterialIcons",!1)
D.a_w=new B.a_(63368,"MaterialIcons",!1)
D.akO=new B.a_(63384,"MaterialIcons",!1)
D.bDp=new B.a_(63525,"MaterialIcons",!1)
D.bDs=new B.a_(63568,"MaterialIcons",!1)
D.bDN=new B.a_(983072,"MaterialIcons",!1)
D.bEb=new B.a_(983271,"MaterialIcons",!0)
D.alW=new B.a_(983965,"MaterialIcons",!1)
D.alX=new B.a_(983966,"MaterialIcons",!1)
D.bF9=new B.a_(984592,"MaterialIcons",!1)
D.bFr=new B.ae(A.tM,16,A.az,null,null,null)
D.bFz=new B.ae(A.mv,null,A.c,null,null,null)
D.am6=new B.ae(A.pW,18,A.c,null,null,null)
D.bFQ=new B.ae(A.Bm,18,O.lc,null,null,null)
D.bGu=new B.ae(A.ji,11,null,null,null,null)
D.bGE=new B.ae(A.a_e,null,A.et,null,null,null)
D.bHc=new B.ae(A.r3,18,A.az,null,null,null)
D.bHi=new B.ae(A2.Bz,14,null,null,null,null)
D.bHj=new B.ae(A.e6,28,A.cf,null,null,null)
D.bHv=new B.ae(A.pX,20,A.c,null,null,null)
D.bHC=new B.ae(A.yc,null,null,null,null,null)
D.bHI=new B.ae(A.iV,18,A.hw,null,null,null)
D.bHN=new B.ae(A.lh,null,null,null,null,null)
D.bIh=new B.ae(A.a_L,28,A.c,null,null,null)
D.bCA=new B.a_(63065,"MaterialIcons",!1)
D.bIq=new B.ae(D.bCA,15,A.c,null,null,null)
D.bCG=new B.a_(63113,"MaterialIcons",!1)
D.bIw=new B.ae(D.bCG,null,A.ad,null,null,null)
D.bIU=new B.ae(A.vx,22,A.bK,null,null,null)
D.bJd=new B.ae(A.vy,18,null,null,null,null)
D.bJj=new B.ae(A.BC,12,A.c,null,null,null)
D.bEM=new B.a_(983687,"MaterialIcons",!1)
D.bJu=new B.ae(D.bEM,null,A.bj,null,null,null)
D.bJB=new B.ae(A.hA,null,A.bj,null,null,null)
D.bJU=new B.ae(A.oQ,22,A.c,null,null,null)
D.bJY=new B.ae(A.cD,13,A.c,null,null,null)
D.bK3=new B.ae(A.e6,26,A.ay,null,null,null)
D.bK6=new B.ae(A.r8,26,A.c,null,null,null)
D.NE=new B.ae(A.ji,8,A.c,null,null,null)
D.bKo=new B.ae(A.pW,40,A.c,null,null,null)
D.bKp=new B.ae(A.bAf,null,null,null,null,null)
D.bKt=new B.ae(A.tV,20,null,null,null,null)
D.bEL=new B.a_(983683,"MaterialIcons",!1)
D.bKD=new B.ae(D.bEL,null,A.aZ,null,null,null)
D.bKE=new B.ae(A.ji,16,A.bj,null,null,null)
D.bKZ=new B.ae(A.r9,null,null,null,null,null)
D.amF=new B.ae(A.vA,22,A.c,null,null,null)
D.bL2=new B.ae(A.dW,17,A.c,null,null,null)
D.amG=new B.ae(A.ji,9,A.c,null,null,null)
D.bL7=new B.ae(A.vu,null,null,null,null,null)
D.bAw=new B.a_(57744,"MaterialIcons",!1)
D.bLe=new B.ae(D.bAw,null,null,null,null,null)
D.bLh=new B.ae(A.vu,16,null,null,null,null)
D.bFi=new B.a_(985181,"MaterialIcons",!1)
D.Gf=new B.ae(D.bFi,null,null,null,null,null)
D.bLt=new B.ae(A.lh,16,A.bK,null,null,null)
D.bED=new B.a_(983615,"MaterialIcons",!1)
D.bLv=new B.ae(D.bED,12,A.c,null,null,null)
D.amM=new B.ae(A.xV,16,null,null,null,null)
D.bLD=new B.ae(A.dW,21,A.c,null,null,null)
D.bLI=new B.ae(A.hA,17,A.c,null,null,null)
D.bLJ=new B.ae(A.vx,null,null,null,null,null)
D.bLZ=new B.ae(A.a0a,20,A.az,null,null,null)
D.bMd=new B.ae(A.o_,22,E.n0,null,null,null)
D.bMk=new B.ae(A.pV,13,A.ad,null,null,null)
D.bMm=new B.ae(A.alI,20,A.az,null,null,null)
D.bAd=new B.a_(57495,"MaterialIcons",!1)
D.bMr=new B.ae(D.bAd,null,null,null,null,null)
D.bMv=new B.ae(A.o0,18,A.c,null,null,null)
D.bMQ=new B.ae(A.tZ,28,A.c,null,null,null)
D.bN_=new B.ae(D.akC,null,A.aE,null,null,null)
D.bN0=new B.ae(A.pX,22,A.c,null,null,null)
D.amV=new B.ae(A.ZV,16,null,null,null,null)
D.bNM=new B.ae(A.vx,32,A.c,null,null,null)
D.bOv=new B.ae(A.iY,22,A.c,null,null,null)
D.bOz=new B.ae(A.r8,22,A.ad,null,null,null)
D.an9=new B.ae(A.tM,null,A.c1,null,null,null)
D.bPu=new B.ae(A.tL,18,null,null,null,null)
D.bQ5=new B.ae(A.dW,18,A.cd,null,null,null)
D.a0z=new B.ae(A.cD,18,A.az,null,null,null)
D.bQb=new B.ae(A.alC,null,null,null,null,null)
D.bQB=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPU,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eX3=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQT=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eX3,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bRj=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cSV=w([A.dO,A.aE],x.O)
D.bT8=new B.a8(A.a3,A.a7,A.x,D.cSV,null,null)
D.bTk=new B.a8(A.b_,A.b5,A.TJ,A.aud,null,null)
D.b6M=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.baS=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bdM=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b8U=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cDT=w([D.b6M,D.baS,D.bdM,D.b8U],x.O)
D.bTD=new B.a8(A.ax,A.aC,A.x,D.cDT,A.GO,null)
D.de3=w([A.cs,A.bA,A.b7],x.O)
D.bTF=new B.a8(A.b_,A.b5,A.TJ,D.de3,null,null)
D.dfn=w([A.bj,A.ce],x.O)
D.bTJ=new B.a8(A.a3,A.a7,A.x,D.dfn,null,null)
D.daz=w([A.hl,A.d8,A.aH],x.O)
D.bTL=new B.a8(A.ax,A.aC,A.x,D.daz,null,null)
D.cYJ=w([A.cY,A.fa],x.O)
D.bTP=new B.a8(A.a3,A.a7,A.x,D.cYJ,null,null)
D.ddZ=w([O.lc,A.d8],x.O)
D.anV=new B.a8(A.a3,A.a7,A.x,D.ddZ,null,null)
D.bbq=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.ddW=w([D.bbq,D.xg,A.bY],x.O)
D.bTU=new B.a8(A.a3,A.a7,A.x,D.ddW,null,null)
D.cUx=w([A.b2,A.cZ,A.f2],x.O)
D.bTV=new B.a8(A.ax,A.aC,A.x,D.cUx,null,null)
D.NS=new B.a8(A.a3,A.a7,A.x,A.H2,null,null)
D.bjk=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cwX=w([D.bjk,A.bY,A.jb],x.O)
D.ao_=new B.a8(A.ax,A.aC,A.x,D.cwX,null,null)
D.d2O=w([A.v2,A.aw,D.AC],x.O)
D.bUV=new B.a8(A.a3,A.a7,A.x,D.d2O,null,null)
D.bky=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b9L=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.beN=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cTH=w([D.bky,D.b9L,D.beN],x.O)
D.ao0=new B.a8(A.a3,A.a7,A.x,D.cTH,null,null)
D.bbs=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bWV=w([Aw.afo,D.bbs],x.O)
D.bV4=new B.a8(A.b_,A.b5,A.x,D.bWV,null,null)
D.cRM=w([A.mZ,A.bG],x.O)
D.bV8=new B.a8(A.b_,A.b5,A.x,D.cRM,null,null)
D.d7G=w([A.aE,A.dQ],x.O)
D.bVe=new B.a8(A.a3,A.a7,A.x,D.d7G,null,null)
D.aen=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avU=w([D.aen,D.j9,D.Kq],x.O)
D.bVG=new B.a8(A.ax,A.aC,A.x,D.avU,null,null)
D.cwP=w([A.dx,A.dL],x.O)
D.bVR=new B.a8(A.b_,A.b5,A.x,D.cwP,null,null)
D.d4S=w([A.uZ,Az.Ep],x.O)
D.bWH=new B.a8(A.a3,A.a7,A.x,D.d4S,null,null)
D.fpD=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bWS=new B.pG(null,D.fpD,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yC=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4q=new C.kQ(2,"elegantNavy")
D.fZG=w([A.WD,D.j9,A.bY],x.O)
D.jF=new C.xo(0,"classic")
D.a4d=new C.jm("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4q,4294967035,4279378237,4290283019,D.jF)
D.aF8=new C.kQ(3,"elegantGold")
D.b6k=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b7g=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acY=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fZ8=w([D.b6k,D.b7g,D.acY],x.O)
D.a4b=new C.jm("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aF8,4294966515,4281016592,4289102906,D.jF)
D.dAd=new C.kQ(22,"goldRibbon")
D.fZ4=w([A.WD,D.j9,A.hW],x.O)
D.a44=new C.jm("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dAd,4294967035,4279378237,4291404327,D.jF)
D.dAe=new C.kQ(23,"goldBaroque")
D.adA=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fZa=w([D.adA,A.aw,A.jb],x.O)
D.a45=new C.jm("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dAe,4294964964,4283053072,4292128567,D.jF)
D.dAg=new C.kQ(4,"elegantEmerald")
D.b8o=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b9h=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fZg=w([D.b8o,D.b9h,A.hW],x.O)
D.a46=new C.jm("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dAg,4294376440,4279122734,4291404327,D.jF)
D.dAh=new C.kQ(5,"elegantBurgundy")
D.bcN=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fZn=w([D.bcN,A.ace,A.hW],x.O)
D.a49=new C.jm("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dAh,4294965238,4283043359,4291404327,D.jF)
D.dAa=new C.kQ(19,"goldFiligree")
D.L3=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fZb=w([D.L3,A.aw,A.jb],x.O)
D.a47=new C.jm("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dAa,4294966259,4279378237,4292128567,D.jF)
D.dAb=new C.kQ(20,"goldLaurel")
D.bja=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fZo=w([A.Ki,A.hW,D.bja],x.O)
D.a48=new C.jm("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dAb,4294966776,4282000405,4291404327,D.jF)
D.dAc=new C.kQ(21,"goldCrest")
D.ac5=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bjh=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fZd=w([D.ac5,A.aw,D.bjh],x.O)
D.a4c=new C.jm("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dAc,4294965484,4283053072,4292128567,D.jF)
D.dAf=new C.kQ(24,"goldStar")
D.bkr=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fZh=w([D.bkr,A.aw,D.j9],x.O)
D.a4a=new C.jm("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dAf,4294966518,4279378237,4292128567,D.jF)
D.Gq=w([D.a4d,D.a4b,D.a44,D.a45,D.a46,D.a49,D.a47,D.a48,D.a4c,D.a4a],x.h)
D.q8=new C.mt(0,"blank")
D.Rq=new C.mt(1,"title")
D.mD=new C.mt(2,"titleContent")
D.dUR=new C.mt(3,"twoColumn")
D.Cx=new C.mt(4,"section")
D.dUS=new C.mt(5,"comparison")
D.HC=new C.mt(6,"flashcard")
D.HD=new C.mt(7,"quiz")
D.HE=new C.mt(8,"worksheet")
D.aom=w([D.q8,D.Rq,D.mD,D.dUR,D.Cx,D.dUS,D.HC,D.HD,D.HE],B.ax("O<mt>"))
D.awU=w([Ao.W0,A.dL],x.O)
D.kr=w([A.bY,A.bK,A.hV,A.hH,D.AC],x.O)
D.dw7=new C.iY("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awU,D.kr)
D.bjs=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bcL=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cRZ=w([D.bjs,D.bcL],x.O)
D.dvZ=new C.iY("confetti","Golden Confetti","Together we rise",D.cRZ,D.kr)
D.cPa=w([A.nD,A.VG],x.O)
D.dw_=new C.iY("crown","Crown of Glory","Built for our community",D.cPa,D.kr)
D.b9C=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bcq=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cVQ=w([D.b9C,D.bcq],x.O)
D.u2=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.dvU=new C.iY("aurora","Aurora Gala","A brighter future, together",D.cVQ,D.u2)
D.bdO=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d4Y=w([G.abJ,D.bdO],x.O)
D.dwa=new C.iY("champagne","Champagne Toast","Cheers to every member",D.d4Y,D.kr)
D.dwb=new C.iY("diamonds","Diamond Rain","Every member is a jewel",X.axx,D.u2)
D.b77=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bbX=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d9R=w([D.b77,D.bbX],x.O)
D.dvP=new C.iY("starburst","Golden Starburst","Thank you!",D.d9R,D.kr)
D.bX0=w([A.f9,A.x8],x.O)
D.abS=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Pq=w([A.ox,A.is,A.va,A.nE,D.abS],x.O)
D.dwi=new C.iY("balloons","Luxury Balloons","Let's celebrate",D.bX0,D.Pq)
D.cOt=w([A.VP,A.w],x.O)
D.dw6=new C.iY("galaxy","Galaxy Spiral","The sky is not the limit",D.cOt,D.u2)
D.bhz=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d1D=w([A.ki,D.bhz],x.O)
D.dw1=new C.iY("redcarpet","Red Carpet","Tonight we shine",D.d1D,D.kr)
D.bfr=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bdB=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d5S=w([D.bfr,D.bdB],x.O)
D.dvR=new C.iY("coins","Gold Coin Rain","Every contribution counts",D.d5S,D.kr)
D.dcs=w([A.dx,A.hG],x.O)
D.dvX=new C.iY("lanterns","Sky Lanterns","Lighting the way together",D.dcs,D.kr)
D.bay=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cMt=w([A.xa,D.bay],x.O)
D.dvT=new C.iY("hearts","Floating Hearts","Made with love",D.cMt,D.Pq)
D.b7H=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b8u=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.ddU=w([D.b7H,D.b8u],x.O)
D.dwh=new C.iY("petals","Rose Petals","Thank you, from our hearts",D.ddU,D.Pq)
D.biu=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.daa=w([A.lb,D.biu],x.O)
D.dvO=new C.iY("butterflies","Golden Butterflies","New beginnings",D.daa,D.kr)
D.beK=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cNp=w([D.beK,A.w],x.O)
D.dw9=new C.iY("neon","Neon Night","Let's go!",D.cNp,D.u2)
D.bbF=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d7R=w([A.KG,D.bbF],x.O)
D.dwc=new C.iY("disco","Disco Ball","Party time",D.d7R,D.u2)
D.bfi=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d7o=w([A.hl,D.bfi],x.O)
D.dvS=new C.iY("sunrise","Golden Sunrise","A new day for our community",D.d7o,D.kr)
D.d70=w([A.qK,A.dL],x.O)
D.dwd=new C.iY("pearls","Ocean Pearls","Deep roots, bright future",D.d70,D.u2)
D.b9H=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d7f=w([D.b9H,A.dL],x.O)
D.dwg=new C.iY("snow","Winter Gala","Warm wishes to all",D.d7f,D.u2)
D.b6u=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b7r=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dcQ=w([D.b6u,D.b7r],x.O)
D.dw5=new C.iY("laurel","Laurel Victory","We did it together",D.dcQ,D.kr)
D.b6j=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bcm=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cLA=w([D.b6j,D.bcm],x.O)
D.dwf=new C.iY("ribbons","Silk Ribbons","Elegance in every step",D.cLA,D.kr)
D.bdl=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cwM=w([G.AB,D.bdl],x.O)
D.dw2=new C.iY("kente","Kente Pride","Proud of our roots",D.cwM,D.kr)
D.bg_=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.biO=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cXr=w([D.bg_,D.biO],x.O)
D.dvY=new C.iY("trophy","Trophy Shine","Winners together",D.cXr,D.kr)
D.d7l=w([Ap.Kv,A.w],x.O)
D.dvQ=new C.iY("shooting","Shooting Stars","Make a wish",D.d7l,D.u2)
D.b6B=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afc=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dd5=w([D.b6B,D.afc],x.O)
D.dw3=new C.iY("bokeh","Golden Bokeh","Shine bright",D.dd5,D.kr)
D.b6X=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d2s=w([D.b6X,A.w],x.O)
D.dvW=new C.iY("orbits","Golden Orbits","Always moving forward",D.d2s,D.kr)
D.biv=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d_7=w([A.acU,D.biv],x.O)
D.dw0=new C.iY("flowers","Blooming Garden","Growing together",D.d_7,D.Pq)
D.b6K=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b7l=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dbW=w([D.b6K,D.b7l],x.O)
D.dvV=new C.iY("music","Music Party","Celebrate with us",D.dbW,D.u2)
D.b8e=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bjd=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cMF=w([D.b8e,D.bjd],x.O)
D.dwe=new C.iY("mandala","Royal Mandala","Harmony and unity",D.cMF,D.kr)
D.d_c=w([G.AB,D.afc],x.O)
D.dw8=new C.iY("sparklers","Golden Sparklers","Light up the night",D.d_c,D.kr)
D.dw4=new C.iY("city","City Lights","The whole city celebrates",D.awU,D.kr)
D.Gz=w([D.dw7,D.dvZ,D.dw_,D.dvU,D.dwa,D.dwb,D.dvP,D.dwi,D.dw6,D.dw1,D.dvR,D.dvX,D.dvT,D.dwh,D.dvO,D.dw9,D.dwc,D.dvS,D.dwd,D.dwg,D.dw5,D.dwf,D.dw2,D.dvY,D.dvQ,D.dw3,D.dvW,D.dw0,D.dvV,D.dwe,D.dw8,D.dw4],B.ax("O<iY>"))
D.eiy=new B.y("","No ring")
D.exr=new B.y("platinum","Platinum")
D.eua=new B.y("glow","Glow")
D.elW=new B.y("double","Double line")
D.ekR=new B.y("framed","Gallery frame")
D.eib=new B.y("rosegold","Rose gold")
D.euV=new B.y("jewels","Jeweled")
D.erD=new B.y("aurora","Aurora")
D.BT=w([D.eiy,A.a5H,D.exr,D.eua,H.aLE,D.elW,A.a5J,D.ekR,D.eib,D.euV,D.erD],x.L)
D.cgp=w([D.a47,D.a48,D.a4c,D.a44,D.a45,D.a4a],x.h)
D.bLR=new B.ae(G.ajt,16,null,null,null,null)
D.b1y=new B.vm(A.bg,D.bLR,null,x.U)
D.bAF=new B.a_(58027,"MaterialIcons",!1)
D.bFx=new B.ae(D.bAF,16,null,null,null,null)
D.b1w=new B.vm(A.L,D.bFx,null,x.U)
D.bAG=new B.a_(58030,"MaterialIcons",!1)
D.bJA=new B.ae(D.bAG,16,null,null,null,null)
D.b1z=new B.vm(A.dM,D.bJA,null,x.U)
D.cmz=w([D.b1y,D.b1w,D.b1z],B.ax("O<vm<pW>>"))
D.cu9=w([A.AG,A.hi],x.O)
D.cua=w([A.b2,A.bo,A.f2],x.O)
D.Pe=w([A.bK,A.hH,A.hV,A.aw,A.nE],x.O)
D.cwS=w([A.bY,D.j9,D.Kq],x.O)
D.cxp=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eg6=new B.y(4278913286,4280030216)
D.ego=new B.y(4279373061,4278518787)
D.egv=new B.y(4279898630,4278847235)
D.cWR=w([D.eg6,D.ego,D.egv],x.n)
D.cSE=w(["\u265b","\u269c","\u2726"],x.s)
D.dA8=new C.xq("Royal Onyx & Gold",D.cWR,4292128567,4294370209,4294965479,3874020544,D.cSE)
D.efU=new B.y(4278326799,4278598442)
D.efW=new B.y(4278395929,4278258953)
D.eg2=new B.y(4278599728,4278327826)
D.dcj=w([D.efU,D.efW,D.eg2],x.n)
D.cNh=w(["\u269c","\u2756","\u2727"],x.s)
D.dA5=new C.xq("Imperial Emerald",D.dcj,4293050997,4294699968,4294180856,3872254170,D.cNh)
D.efX=new B.y(4278455076,4278918747)
D.eg1=new B.y(4278587439,4278322714)
D.egf=new B.y(4279051376,4278455076)
D.dav=w([D.efX,D.eg1,D.egf],x.n)
D.d33=w(["\u2654","\u2726","\u2748"],x.s)
D.dA_=new C.xq("Sapphire Crown",D.dav,4291417834,4294967295,4294310143,3871986666,D.d33)
D.egt=new B.y(4279894534,4283041554)
D.egF=new B.y(4281008906,4279042307)
D.egN=new B.y(4284221976,4279894534)
D.dfX=w([D.egt,D.egF,D.egN],x.n)
D.cOC=w(["\u265b","\u2766","\u2726"],x.s)
D.dA1=new C.xq("Ruby Throne",D.dfX,4293378685,4294963145,4294964466,3874213833,D.cOC)
D.egn=new B.y(4279371039,4281995100)
D.egx=new B.y(4280092723,4278714896)
D.egK=new B.y(4283045242,4279371039)
D.dcF=w([D.egn,D.egx,D.egK],x.n)
D.daR=w(["\u2655","\u2756","\u2727"],x.s)
D.dA6=new C.xq("Amethyst Palace",D.dcF,4293314984,4294963421,4294702591,3873229802,D.daR)
D.efZ=new B.y(4278519045,4280032287)
D.egg=new B.y(4279111184,4278321666)
D.egC=new B.y(4280492839,4278716426)
D.d9o=w([D.efZ,D.egg,D.egC],x.n)
D.d1q=w(["\u2726","\u25c6","\u2742"],x.s)
D.dA3=new C.xq("Obsidian & Platinum",D.d9o,4293256418,4294967295,4294638330,3872378836,D.d1q)
D.egu=new B.y(4279896588,4282194463)
D.egD=new B.y(4280553487,4279043334)
D.egL=new B.y(4283048488,4279896588)
D.d0V=w([D.egu,D.egD,D.egL],x.n)
D.deh=w(["\u2766","\u273f","\u2727"],x.s)
D.dA0=new C.xq("Rose Gold Velvet",D.d0V,4293440672,4294960345,4294964979,3874214602,D.deh)
D.eg_=new B.y(4278520340,4279180595)
D.eg4=new B.y(4278718495,4278322443)
D.egr=new B.y(4279510591,4278520340)
D.cDA=w([D.eg_,D.eg4,D.egr],x.n)
D.d26=w(["\u269c","\u2736","\u2756"],x.s)
D.dA4=new C.xq("Midnight Brass",D.cDA,4291405148,4293975208,4294439914,3872837564,D.d26)
D.eh_=new B.y(4294703086,4293780428)
D.egW=new B.y(4294307549,4293187253)
D.eh0=new B.y(4294966517,4293977807)
D.cQI=w([D.eh_,D.egW,D.eh0],x.n)
D.d2v=w(["\u269c","\u265b","\u2726"],x.s)
D.dA7=new C.xq("Ivory Marble & Gold",D.cQI,4289760572,4286209048,4280951062,3863625518,D.d2v)
D.ega=new B.y(4278978566,4280555024)
D.egq=new B.y(4279504137,4278518530)
D.egH=new B.y(4281211923,4278978566)
D.cOr=w([D.ega,D.egq,D.egH],x.n)
D.dbz=w(["\u2742","\u2726","\u265c"],x.s)
D.dA2=new C.xq("Onyx & Copper",D.cOr,4291856987,4294365880,4294964718,3873885630,D.dbz)
D.cxx=w([D.dA8,D.dA5,D.dA_,D.dA1,D.dA6,D.dA3,D.dA0,D.dA4,D.dA7,D.dA2],B.ax("O<xq>"))
D.czP=w([A.aw,D.AC,A.hH],x.O)
D.eo1=new B.y("Original",null)
D.eo9=new B.y("Wide 16:9",1.7777777777777777)
D.eqn=new B.y("Landscape 3:2",1.5)
D.env=new B.y("Photo 4:3",1.3333333333333333)
D.epc=new B.y("Square",1)
D.eB1=new B.y("Portrait 3:4",0.75)
D.aul=w([D.eo1,D.eo9,D.eqn,D.env,D.epc,D.eB1],B.ax("O<+(n,M?)>"))
D.aum=w([A.hH,A.bZ,A.b8,A.bt],x.O)
D.eqy=new B.y("","Original")
D.esm=new B.y("circle","Circle")
D.eyb=new B.y("rounded","Rounded")
D.ez5=new B.y("triangle","Triangle")
D.euo=new B.y("hexagon","Hexagon")
D.esM=new B.y("diamond","Diamond")
D.erC=new B.y("arch","Arch")
D.BY=w([D.eqy,D.esm,D.eyb,D.ez5,D.euo,D.esM,D.erC],x.L)
D.dvd=new C.l9("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kk,A.di,A.aK)
D.dvt=new C.l9("campus_green","Campus Green","Normal",A.aZ,A.mX,A.tc,A.h5,A.ep)
D.dvk=new C.l9("warm_sand","Warm Sand","Normal",A.dT,A.hV,A.bK,A.ia,A.nI)
D.dvr=new C.l9("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.dvc=new C.l9("coral_fresh","Coral Fresh","Normal",A.ci,A.iu,A.qD,A.jS,A.t5)
D.dvs=new C.l9("lavender_calm","Lavender Calm","Normal",A.b7,A.pr,A.Aq,A.pv,A.j7)
D.dve=new C.l9("ocean_breeze","Ocean Breeze","Normal",A.fa,A.qQ,A.t1,A.t7,A.nJ)
D.aet=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dvp=new C.l9("berry_pop","Berry Pop","Normal",A.fi,D.aet,A.kd,G.X8,A.EK)
D.dvf=new C.l9("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kd,A.cq)
D.dvo=new C.l9("executive_navy","Executive Navy","Professional",A.d3,A.adP,A.di,A.l8,A.bJ)
D.dvm=new C.l9("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cq)
D.dvg=new C.l9("corporate_steel","Corporate Steel","Professional",A.mV,A.M,A.mh,A.f5,A.bJ)
D.dvj=new C.l9("gold_luxe","Gold Luxe","Luxury",A.mU,A.dH,A.ow,A.lE,A.bK)
D.bfm=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dvn=new C.l9("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bfm,A.WX,A.is,A.nE)
D.dvq=new C.l9("platinum_night","Platinum Night","Luxury",A.cq,A.dL,A.bm,A.aP,A.aL)
D.dvu=new C.l9("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.py,A.eY,A.pF,A.js)
D.dvb=new C.l9("royal_purple","Royal Purple","Luxury",A.mW,A.W7,A.j7,A.kd,A.Kh)
D.dvl=new C.l9("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b1,A.aL)
D.dvi=new C.l9("crimson_impact","Crimson Impact","Bold",A.bG,A.ki,A.eo,A.tn,A.f3)
D.dvh=new C.l9("sunset_gallery","Sunset Gallery","Bold",A.fj,A.t5,A.jS,A.qD,A.mg)
D.GI=w([D.dvd,D.dvt,D.dvk,D.dvr,D.dvc,D.dvs,D.dve,D.dvp,D.dvf,D.dvo,D.dvm,D.dvg,D.dvj,D.dvn,D.dvq,D.dvu,D.dvb,D.dvl,D.dvi,D.dvh],B.ax("O<l9>"))
D.cLh=w([A.bY,D.j9],x.O)
D.d1a=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ero=new B.y("Faces & people",D.d1a)
D.czT=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eeR=new B.y("Ideas & work",D.czT)
D.cT9=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eut=new B.y("Nature",D.cT9)
D.d1j=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eo_=new B.y("Places & things",D.d1j)
D.cWq=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.erH=new B.y("Symbols",D.cWq)
D.cLn=w([D.ero,D.eeR,D.eut,D.eo_,D.erH],B.ax("O<+(n,ai<n>)>"))
D.b6P=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cLL=w([A.bY,D.acY,D.b6P],x.O)
D.b0U=new B.ac(0,A.G,A.Ke,A.aFY,40)
D.b0B=new B.ac(0,A.G,A.nG,A.ek,8)
D.cLX=w([D.b0U,D.b0B],x.V)
D.cMp=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.auL=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1L=w([A.hH,A.f2,A.bG,A.aA,A.ci],x.O)
D.cNb=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adb=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cNm=w([A.WN,D.adb,A.WN],x.O)
D.cNs=w([A.hW,D.j9,D.Kq],x.O)
D.enO=new B.y(A.bg,D.a_v)
D.ep7=new B.y(A.L,D.a_u)
D.eja=new B.y(A.dM,D.a_w)
D.cOm=w([D.enO,D.ep7,D.eja],B.ax("O<+(pW,a_)>"))
D.cQ=new C.Is(0,"text")
D.lr=new C.Is(1,"image")
D.f_=new C.Is(2,"shape")
D.Rp=new C.Is(3,"pdf")
D.kY=new C.Is(4,"signature")
D.a4x=new C.Is(5,"bio")
D.cPf=w([D.cQ,D.lr,D.f_,D.Rp,D.kY,D.a4x],B.ax("O<Is>"))
D.cPg=w([A.bl,A.cF],B.ax("O<Ho>"))
D.cPS=w(["School","Documents","Sign & present"],x.s)
D.b0Z=new B.ac(0,A.G,A.af2,A.ul,28)
D.cQb=w([D.b0Z],x.V)
D.cQu=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Py=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.av9=w([A.hH,A.EJ,A.aL,A.c,A.ox,A.aw],x.O)
D.cRe=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.eAp=new B.y(0.1,0.08)
D.eur=new B.y(0.3,0.05)
D.eiI=new B.y(0.55,0.1)
D.emO=new B.y(0.8,0.06)
D.epR=new B.y(0.92,0.16)
D.epm=new B.y(0.2,0.2)
D.eng=new B.y(0.7,0.22)
D.et8=new B.y(0.05,0.4)
D.eqf=new B.y(0.95,0.45)
D.ejp=new B.y(0.12,0.7)
D.elA=new B.y(0.88,0.75)
D.elI=new B.y(0.4,0.9)
D.ehj=new B.y(0.65,0.93)
D.emq=new B.y(0.25,0.97)
D.enL=new B.y(0.85,0.9)
D.eke=new B.y(0.5,0.04)
D.cRU=w([D.eAp,D.eur,D.eiI,D.emO,D.epR,D.epm,D.eng,D.et8,D.eqf,D.ejp,D.elA,D.elI,D.ehj,D.emq,D.enL,D.eke],x.G)
D.cS0=w([A.c,A.hi,A.aS,A.aV],x.O)
D.dWt=new C.jF("office_blue","Office Blue",A.bj,A.di,A.aK,A.c,A.kk)
D.dWE=new C.jF("campus_green","Campus Green",A.aZ,A.h5,A.ep,A.mX,A.tc)
D.dWu=new C.jF("sunset","Sunset",A.fj,A.jS,A.nI,A.iu,A.qD)
D.dWv=new C.jF("midnight","Midnight",A.aE,A.kd,A.cq,A.M,A.dx)
D.dWG=new C.jF("classic","Classic",A.d8,A.dH,A.lF,A.hV,A.h3)
D.dWD=new C.jF("rose_gold","Rose Gold",A.hi,A.xc,A.xa,A.va,A.AG)
D.dWo=new C.jF("ocean_teal","Ocean Teal",A.fa,A.t7,A.nJ,A.qQ,A.t1)
D.dWn=new C.jF("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dWm=new C.jF("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dL,A.M)
D.dWy=new C.jF("lavender","Lavender",A.b7,A.pv,A.j7,A.pr,A.Aq)
D.dWA=new C.jF("coral","Coral",A.ci,A.jS,A.t5,A.iu,A.mg)
D.dWp=new C.jF("forest","Forest",A.hk,A.e_,A.cB,A.lG,A.et)
D.dWq=new C.jF("berry","Berry",A.fi,G.X8,A.EK,D.aet,A.kd)
D.dWx=new C.jF("sand","Sand",A.dT,A.ia,A.nI,A.hV,A.bK)
D.dWC=new C.jF("ice","Ice",A.mV,A.KH,A.aK,A.mS,A.f5)
D.dWs=new C.jF("charcoal","Charcoal",A.ak,A.aP,A.cq,A.bm,A.M)
D.dWl=new C.jF("mint","Mint",A.aV,A.fx,A.h5,A.lG,A.pF)
D.dWB=new C.jF("crimson","Crimson",A.bG,A.mZ,A.ki,A.EH,A.tn)
D.b9g=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dWw=new C.jF("gold","Gold",A.mU,A.uZ,A.ow,D.b9g,A.lE)
D.dWz=new C.jF("aqua","Aqua",A.bN,A.Ex,A.ou,A.pt,A.oy)
D.dWr=new C.jF("plum","Plum",A.mW,A.x8,A.EK,A.Em,A.qO)
D.dWF=new C.jF("steel","Steel",A.d3,A.di,A.bm,A.kk,A.l8)
D.a2_=w([D.dWt,D.dWE,D.dWu,D.dWv,D.dWG,D.dWD,D.dWo,D.dWn,D.dWm,D.dWy,D.dWA,D.dWp,D.dWq,D.dWx,D.dWC,D.dWs,D.dWl,D.dWB,D.dWw,D.dWz,D.dWr,D.dWF],B.ax("O<jF>"))
D.cSk=w([A.bY,A.jb],x.O)
D.Rr=new C.hy(10,"rotate3d")
D.HG=new C.hy(8,"flip")
D.aFr=new C.hy(19,"spiral")
D.q9=new C.hy(16,"bounce")
D.aFu=new C.hy(9,"flipVertical")
D.cSl=w([D.Rr,D.HG,D.aFr,D.q9,D.aFu],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cSH=w([0.62,1],x.x)
D.cTh=w([0,0.32,0.68,1],x.x)
D.mE=new C.hy(6,"zoom")
D.uf=new C.hy(4,"slideUp")
D.ue=new C.hy(2,"slideLeft")
D.cTq=w([D.mE,D.HG,D.uf,D.Rr,D.ue],x.i)
D.cTV=w([A.bZ,A.hi,A.is,A.hH,A.c],x.O)
D.b0P=new B.ac(0,A.G,D.adp,A.ul,30)
D.cUC=w([D.b0P],x.V)
D.e54=new B.u(0,-2.5)
D.e4V=new B.u(-2.5,0)
D.e3D=new B.u(2.5,0)
D.cUF=w([A.RH,A.a4U,A.aGt,A.a4T,D.e54,H.aGp,D.e4V,D.e3D],x.dN)
D.GQ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cV8=w([23,114,69,56,80,144],x.t)
D.cVy=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cVX=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cXv=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cXz=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uA(0,"rectangle")
D.eK=new C.uA(1,"circle")
D.kZ=new C.uA(6,"hexagon")
D.cXM=w([D.be,D.eK,D.kZ],x.m)
D.o6=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aeA=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cYk=w([D.aeA,A.e_],x.O)
D.eiT=new B.y("","Classic")
D.ehx=new B.y("caps","Bold caps")
D.etb=new B.y("elegant","Elegant")
D.eyu=new B.y("shadow","Shadow")
D.en9=new B.y("neon","Neon glow")
D.ex7=new B.y("outline","Outline")
D.ewj=new B.y("marker","Highlighter")
D.eyF=new B.y("stamp","Stamp")
D.ey6=new B.y("retro","Retro")
D.em7=new B.y("threed","3D")
D.etH=new B.y("fire","Fire")
D.euD=new B.y("ice","Ice")
D.esl=new B.y("chalk","Chalk")
D.esq=new B.y("comic","Comic")
D.eyH=new B.y("sunset","Sunset")
D.ezP=new B.y("softglow","Soft glow")
D.evC=new B.y("lowercase","Lowercase")
D.esT=new B.y("double","Echo")
D.ezY=new B.y("whisper","Whisper")
D.aw1=w([D.eiT,D.ehx,D.etb,D.eyu,D.en9,D.ex7,D.ewj,D.eyF,D.ey6,D.em7,H.aLC,D.etH,D.euD,D.esl,D.esq,A.a5H,D.eyH,D.ezP,D.evC,D.esT,D.ezY],x.L)
D.cZz=w([3,5,7,10,12,15],x.t)
D.d_V=w([A.bZ,A.bK,A.c,A.eA,A.cs],x.O)
D.dmS=new C.tc(10,"cardWorld")
D.Cp=new C.Bf(3,"rounded")
D.dD9=new C.lc("world","NGMY World",D.dmS,D.Cp,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dmT=new C.tc(11,"cardSplit")
D.dD5=new C.lc("business","Business Wire",D.dmT,D.Cp,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dmU=new C.tc(12,"cardBreaking")
D.dDi=new C.lc("breaking","Breaking Red",D.dmU,D.Cp,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dmV=new C.tc(13,"cardFeature")
D.dDb=new C.lc("feature","Tech Feature",D.dmV,D.Cp,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDY=new C.tc(6,"circle")
D.aDS=new C.Bf(4,"circle")
D.dDf=new C.lc("parchment","Royal Circle",D.aDY,D.aDS,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dD4=new C.lc("ocean","Blue Ocean",D.aDY,D.aDS,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dmY=new C.tc(7,"rail")
D.aDR=new C.Bf(1,"double")
D.dD6=new C.lc("forest","Green Leaf",D.dmY,D.aDR,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDV=new C.tc(1,"sideBySide")
D.dDk=new C.lc("herald","NGMY Herald",D.aDV,D.Cp,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDU=new C.tc(0,"classic")
D.a3K=new C.Bf(9,"shadow")
D.dDj=new C.lc("daily","The Daily",D.aDU,D.a3K,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dmW=new C.tc(2,"splash")
D.aDT=new C.Bf(6,"cutCorner")
D.dD3=new C.lc("tabloid","Big Tabloid",D.dmW,D.aDT,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDZ=new C.tc(9,"minimal")
D.dDe=new C.lc("modern","Modern Digest",D.aDZ,D.Cp,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDW=new C.tc(3,"magazine")
D.aDQ=new C.Bf(0,"plain")
D.dDa=new C.lc("midnight","Midnight Edition",D.aDW,D.aDQ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dmZ=new C.tc(8,"banner")
D.dDc=new C.lc("metro","Metro Wire",D.dmZ,D.aDT,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dmR=new C.Bf(8,"arch")
D.dDd=new C.lc("sunrise","Sunrise Post",D.aDW,D.dmR,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDX=new C.tc(5,"scrapbook")
D.dmQ=new C.Bf(5,"tape")
D.dD8=new C.lc("neon","Neon Beat",D.aDX,D.dmQ,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dmX=new C.tc(4,"wrap")
D.dDl=new C.lc("gold","Golden Press",D.dmX,D.a3K,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dDm=new C.lc("minimal","Paper White",D.aDZ,D.a3K,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dD7=new C.lc("gazette","Fresh Gazette",D.aDU,D.aDR,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dDh=new C.lc("times","Classic Times",D.aDV,D.aDQ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QY=new C.Bf(2,"polaroid")
D.dDg=new C.lc("scrapbook","Memory Scrapbook",D.aDX,D.QY,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2e=w([D.dD9,D.dD5,D.dDi,D.dDb,D.dDf,D.dD4,D.dD6,D.dDk,D.dDj,D.dD3,D.dDe,D.dDa,D.dDc,D.dDd,D.dD8,D.dDl,D.dDm,D.dD7,D.dDh,D.dDg],B.ax("O<lc>"))
D.d06=w([0.45,1],x.x)
D.GS=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d0s=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fUK=new C.os("Original",0,1,1,0,0,0)
D.fUO=new C.os("Black & white",0,1.1,0,0,0,0)
D.fUB=new C.os("Noir",-0.05,1.55,0,0,0,0)
D.fUF=new C.os("Sepia",0,1,0.25,0.9,0,0)
D.fUE=new C.os("Vivid",0,1.15,1.6,0,0,0)
D.fUx=new C.os("Pop",0,1.3,1.9,0,0,0)
D.fUz=new C.os("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fUL=new C.os("Matte",0,0.9,0.85,0,0,0.55)
D.fUG=new C.os("Cool",0,1.05,1,-0.8,0,0)
D.fUN=new C.os("Warm",0.03,1.05,1.1,0.8,0,0)
D.fUy=new C.os("Golden hour",0.04,1,1.25,1,0,0)
D.fUD=new C.os("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fUM=new C.os("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fUC=new C.os("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fUI=new C.os("Retro",0,0.9,0.7,0.4,0,0.35)
D.fUH=new C.os("Forest",0,1,1.2,-0.1,-0.45,0)
D.fUJ=new C.os("Rose",0,1,1.1,0.3,0.4,0)
D.fUA=new C.os("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d0t=w([D.fUK,D.fUO,D.fUB,D.fUF,D.fUE,D.fUx,D.fUz,D.fUL,D.fUG,D.fUN,D.fUy,D.fUD,D.fUM,D.fUC,D.fUI,D.fUH,D.fUJ,D.fUA],B.ax("O<os>"))
D.b6f=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d0u=w([D.aeA,A.e_,D.b6f],x.O)
D.eeK=new B.y(0.12,0.3)
D.euO=new B.y(0.26,0.75)
D.et7=new B.y(0.8,0.22)
D.eyP=new B.y(0.9,0.7)
D.evB=new B.y(0.5,0.15)
D.ex9=new B.y(0.65,0.85)
D.ekI=new B.y(0.08,0.85)
D.d0G=w([D.eeK,D.euO,D.et7,D.eyP,D.evB,D.ex9,D.ekI],x.G)
D.awb=w([A.b8,A.bZ,A.bt,A.b2],x.O)
D.d1u=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d1G=w([A.c,A.f5,A.dv,A.v0],x.O)
D.b9t=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d2E=w([D.b9t,D.adb],x.O)
D.d2F=w([A.v2,A.aw],x.O)
D.d2T=w([0,0.25,0.75,1],x.x)
D.d2V=w([A.x0,A.ox],x.O)
D.aF1=new C.kQ(10,"kenteSunset")
D.fZ6=w([D.adA,A.jO,A.aw],x.O)
D.dyr=new C.jm("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aF1,4294964964,4282000405,4279983648,D.jF)
D.aF2=new C.kQ(11,"indigoMudcloth")
D.b7c=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fZk=w([D.b7c,A.ad8,A.hW],x.O)
D.dyz=new C.jm("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aF2,4294439140,4279903102,4279903102,D.jF)
D.aF3=new C.kQ(12,"adinkraRoyal")
D.bjV=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fZl=w([D.ac5,D.bjV,A.aw],x.O)
D.dyB=new C.jm("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aF3,4294965484,4285218591,4287322667,D.jF)
D.aF4=new C.kQ(13,"nileLotus")
D.bgf=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bd0=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fZq=w([D.bgf,D.bd0,A.hW],x.O)
D.dyA=new C.jm("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aF4,4294244340,4279196764,4279196764,D.jF)
D.aF5=new C.kQ(14,"shweshweIvory")
D.bbg=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.ba8=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b7G=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fZ7=w([D.bbg,D.ba8,D.b7G],x.O)
D.dyw=new C.jm("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aF5,4294505710,4279970378,4291058750,D.jF)
D.rp=new C.kQ(15,"certIvoryNavy")
D.fZ5=w([D.L3,D.j9,A.hW],x.O)
D.aEx=new C.xo(1,"ringsNdoa")
D.dyt=new C.jm("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rp,4294966259,4279378237,4291404327,D.aEx)
D.a4f=new C.xo(2,"coupleCards")
D.dyo=new C.jm("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rp,4294966259,4279378237,4291404327,D.a4f)
D.Cs=new C.kQ(18,"certIvoryNavyBar")
D.ac4=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fZj=w([D.ac4,D.j9,A.hW],x.O)
D.aEy=new C.xo(3,"kuhoweshaForm")
D.dym=new C.jm("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cs,4294966519,4279378237,4291404327,D.aEy)
D.adn=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fZD=w([D.L3,D.adn,A.hW],x.O)
D.a4g=new C.xo(4,"mahariPande")
D.dyp=new C.jm("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rp,4294966259,4279904068,4291404327,D.a4g)
D.aF6=new C.kQ(16,"certIvoryGreen")
D.baI=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fZ9=w([A.Ki,D.baI,A.hW],x.O)
D.aEz=new C.xo(5,"familiaMti")
D.dyv=new C.jm("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aF6,4294966776,4280241466,4291404327,D.aEz)
D.a4h=new C.xo(6,"ndoaSafi")
D.dyn=new C.jm("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cs,4294966519,4279378237,4291404327,D.a4h)
D.beJ=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fZc=w([D.L3,A.hW,D.beJ],x.O)
D.a4i=new C.xo(7,"peteWide")
D.dys=new C.jm("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rp,4294966259,4282001936,4291404327,D.a4i)
D.dyC=new C.xo(8,"muhuriCrest")
D.dyl=new C.jm("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rp,4294966259,4279378237,4291404327,D.dyC)
D.fZm=w([D.ac4,D.adn,A.hW],x.O)
D.dyD=new C.xo(9,"fomuWazi")
D.dyy=new C.jm("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cs,4294966519,4279904068,4291404327,D.dyD)
D.aF7=new C.kQ(17,"certIvoryRose")
D.bbk=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fZp=w([D.bbk,D.aec,A.hW],x.O)
D.a4e=new C.xo(10,"upendoOrnate")
D.dyu=new C.jm("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aF7,4294965493,4286200650,4291404327,D.a4e)
D.d3j=w([D.dyr,D.dyz,D.dyB,D.dyA,D.dyw,D.dyt,D.dyo,D.dym,D.dyp,D.dyv,D.dyn,D.dys,D.dyl,D.dyy,D.dyu],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HH=new C.vR(0,"emojis")
D.Cz=new C.vR(1,"pictures")
D.HI=new C.vR(2,"icons3d")
D.a4z=new C.vR(3,"animations")
D.Rt=new C.vR(4,"videoMotion")
D.CA=new C.vR(5,"luxe")
D.a2l=w([D.HH,D.Cz,D.HI,D.a4z,D.Rt,D.CA],B.ax("O<vR>"))
D.exK=new B.y(A.dW,"Looks")
D.emH=new B.y(A.yo,"Light")
D.emD=new B.y(A.nf,"Colour")
D.ekJ=new B.y(A.y_,"Effects")
D.akx=new B.a_(63112,"MaterialIcons",!1)
D.ehK=new B.y(D.akx,"Crop")
D.d3N=w([D.exK,D.emH,D.emD,D.ekJ,D.ehK],x.f2)
D.d4p=w([],x.D)
D.fZA=w([],x.L)
D.ekW=new B.y("Flashcard",D.HC)
D.eoB=new B.y("Quiz",D.HD)
D.eqt=new B.y("Worksheet",D.HE)
D.enG=new B.y("Notes",D.mD)
D.ep5=new B.y("Section",D.Cx)
D.d53=w([D.ekW,D.eoB,D.eqt,D.enG,D.ep5],B.ax("O<+(n,mt)>"))
D.dAi=new C.kQ(6,"beadedPearl")
D.bdE=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fZE=w([N.WW,D.bdE,A.hW],x.O)
D.aEv=new C.jm("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dAi,4294966774,4286209070,4291404327,D.jF)
D.dAj=new C.kQ(7,"artDeco")
D.bht=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bkb=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fZC=w([D.bht,D.bkb,A.bY],x.O)
D.aEw=new C.jm("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dAj,4294440434,4280228630,4290283019,D.jF)
D.dAk=new C.kQ(8,"rosetteCorners")
D.bjn=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9x=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bdz=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fZf=w([D.bjn,D.b9x,D.bdz],x.O)
D.aEu=new C.jm("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dAk,4294702831,4285218602,4291394365,D.jF)
D.dAl=new C.kQ(9,"modernLedger")
D.fZe=w([A.c,D.j9,D.j9],x.O)
D.aEt=new C.jm("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dAl,4294967295,4279378237,4279378237,D.jF)
D.d57=w([D.aEv,D.aEw,D.aEu,D.aEt],x.h)
D.d5f=w([A.is,A.ox],x.O)
D.cm=new C.hy(0,"none")
D.dd=new C.hy(1,"fade")
D.HF=new C.hy(3,"slideRight")
D.aFt=new C.hy(5,"slideDown")
D.dUY=new C.hy(7,"zoomOut")
D.a4y=new C.hy(11,"cube")
D.dUT=new C.hy(12,"blur")
D.aFq=new C.hy(13,"dissolve")
D.dUU=new C.hy(14,"wipeLeft")
D.dUV=new C.hy(15,"wipeRight")
D.Rs=new C.hy(17,"push")
D.dUW=new C.hy(18,"flash")
D.aFs=new C.hy(20,"swing")
D.dUX=new C.hy(21,"curtain")
D.Q6=w([D.cm,D.dd,D.ue,D.HF,D.uf,D.aFt,D.mE,D.dUY,D.HG,D.aFu,D.Rr,D.a4y,D.dUT,D.aFq,D.dUU,D.dUV,D.q9,D.Rs,D.dUW,D.aFr,D.aFs,D.dUX],x.i)
D.Q7=w([D.a4d,D.a4b,D.a44,D.a45,D.a46,D.a49,D.a47,D.a48,D.a4c,D.a4a,D.aEv,D.aEw,D.aEu,D.aEt],x.h)
D.d5H=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d5L=w([A.Au,A.hH,A.bY],x.O)
D.em1=new B.y(A.tO,"Design")
D.eze=new B.y(D.akO,"Word sizes")
D.evl=new B.y(A.BH,"Text")
D.bE1=new B.a_(983182,"MaterialIcons",!1)
D.evp=new B.y(D.bE1,"Photo")
D.ehm=new B.y(A.lm,"Logo")
D.eAn=new B.y(A.Gc,"News")
D.d5Q=w([D.em1,D.eze,D.evl,D.evp,D.ehm,D.eAn],x.f2)
D.d5R=w(["golddust","sparkle","sheen"],x.s)
D.dWk=new C.eu("upload_pdf",K.Nr,"Upload PDF")
D.dVu=new C.eu("sign_paper",A.G9,"Sign Paper")
D.bDi=new B.a_(63438,"MaterialIcons",!1)
D.dWg=new C.eu("hd_photo",D.bDi,"HD Photo")
D.dVm=new C.eu("sharpen",E.a_g,"Sharpen")
D.dVw=new C.eu("print",K.Nr,"Download PDF")
D.dVY=new C.eu("rotate",D.akx,"Rotate")
D.dVF=new C.eu("text_box",A.BH,"Text Box")
D.dVH=new C.eu("picture",A.tS,"Picture")
D.dVD=new C.eu("title",A.yi,"Title")
D.dVz=new C.eu("subtitle",T.aln,"Subtitle")
D.dW6=new C.eu("bullets",I.a_x,"Bullet List")
D.dVA=new C.eu("numbered",A.Nf,"Numbered")
D.dW9=new C.eu("quote",A2.Bz,"Quote")
D.dVM=new C.eu("citation",A.o_,"Citation")
D.dWc=new C.eu("date_stamp",Ah.a_l,"Date Stamp")
D.dW_=new C.eu("page_number",A.yh,"Page #")
D.dW3=new C.eu("header_bar",A.BJ,"Header")
D.dVG=new C.eu("footer_bar",Aq.a05,"Footer")
D.dVv=new C.eu("divider",A.tR,"Divider")
D.dVr=new C.eu("highlight",A.a_D,"Highlight")
D.dW5=new C.eu("redact",A.yl,"Redact")
D.dVT=new C.eu("callout",A.Bv,"Callout")
D.dWe=new C.eu("checkboxes",I.ajN,"Checklist")
D.dVQ=new C.eu("table",A.a02,"Table")
D.dVK=new C.eu("memo",I.a_O,"Memo")
D.dVU=new C.eu("letter",A.FZ,"Letter")
D.bCV=new B.a_(63259,"MaterialIcons",!0)
D.dVl=new C.eu("agenda",D.bCV,"Agenda")
D.dVx=new C.eu("toc",AA.al_,"Contents")
D.bDe=new B.a_(63406,"MaterialIcons",!1)
D.dVR=new C.eu("sig_line",D.bDe,"Sign Line")
D.dVe=new C.eu("initial_line",A.jh,"Initials")
D.dVh=new C.eu("approved",A.lm,"APPROVED")
D.dVW=new C.eu("draft",A.oQ,"DRAFT")
D.dW1=new C.eu("confidential",A.ji,"Confidential")
D.dW4=new C.eu("sticky",A.Nx,"Sticky Note")
D.dWd=new C.eu("progress",A.akZ,"Progress")
D.bEv=new B.a_(983507,"MaterialIcons",!1)
D.dVs=new C.eu("stars",D.bEv,"Star Rating")
D.dVc=new C.eu("equation",A.akQ,"Equation")
D.dVn=new C.eu("timeline",A.Ny,"Timeline")
D.dVL=new C.eu("two_col",A.a06,"Two Columns")
D.dVp=new C.eu("compare",A1.a_o,"Compare")
D.dVa=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dWi=new C.eu("delete_el",A.e6,"Delete")
D.dW8=new C.eu("bring_fwd",N.akK,"Bring Front")
D.dVf=new C.eu("send_back",N.akJ,"Send Back")
D.dVV=new C.eu("align_left",D.a_v,"Align L")
D.dW0=new C.eu("align_center",D.a_u,"Align C")
D.dWh=new C.eu("align_right",D.a_w,"Align R")
D.dVE=new C.eu("word_count",A_.a__,"Word Count")
D.dVB=new C.eu("link_text",A.ho,"Link")
D.dVZ=new C.eu("phone",A.iB,"Phone")
D.dVq=new C.eu("email",A.Bx,"Email")
D.dWj=new C.eu("qr_placeholder",A.jk,"QR Placeholder")
D.dVk=new C.eu("rectangle",A3.vz,"Rectangle")
D.dVP=new C.eu("circle",A.r1,"Circle")
D.dVg=new C.eu("arrow",A.iV,"Arrow")
D.dW7=new C.eu("line",A.tR,"Line")
D.dVt=new C.eu("triangle",A.a_m,"Triangle")
D.bD2=new B.a_(63318,"MaterialIcons",!1)
D.dVy=new C.eu("grayscale",D.bD2,"Grayscale")
D.dVI=new C.eu("brighten",I.ak6,"Brighten")
D.dVN=new C.eu("flip_h",A.FP,"Flip H")
D.bD9=new B.a_(63348,"MaterialIcons",!1)
D.dWf=new C.eu("flip_v",D.bD9,"Flip V")
D.dW2=new C.eu("cover_page",A.pR,"Cover Page")
D.dVd=new C.eu("invoice",A.h9,"Invoice")
D.dVo=new C.eu("resume",A.mq,"Resume")
D.dVC=new C.eu("minutes",A.oK,"Minutes")
D.dVi=new C.eu("lab_report",A.Nu,"Lab Report")
D.dVj=new C.eu("rubric",A.tP,"Rubric")
D.dVO=new C.eu("flashcard_tool",V.G5,"Flashcard")
D.dWa=new C.eu("quiz_tool",A.G2,"Quiz Block")
D.dVS=new C.eu("worksheet_tool",L.FG,"Worksheet")
D.dVX=new C.eu("outline_share",A.Nv,"Share Outline")
D.dWb=new C.eu("export_json",D.ajT,"Export JSON")
D.dVb=new C.eu("new_slide",D.ZZ,"New Slide")
D.dVJ=new C.eu("present",A.pX,"Present")
D.d6g=w([D.dWk,D.dVu,D.dWg,D.dVm,D.dVw,D.dVY,D.dVF,D.dVH,D.dVD,D.dVz,D.dW6,D.dVA,D.dW9,D.dVM,D.dWc,D.dW_,D.dW3,D.dVG,D.dVv,D.dVr,D.dW5,D.dVT,D.dWe,D.dVQ,D.dVK,D.dVU,D.dVl,D.dVx,D.dVR,D.dVe,D.dVh,D.dVW,D.dW1,D.dW4,D.dWd,D.dVs,D.dVc,D.dVn,D.dVL,D.dVp,D.dVa,D.dWi,D.dW8,D.dVf,D.dVV,D.dW0,D.dWh,D.dVE,D.dVB,D.dVZ,D.dVq,D.dWj,D.dVk,D.dVP,D.dVg,D.dW7,D.dVt,D.dVy,D.dVI,D.dVN,D.dWf,D.dW2,D.dVd,D.dVo,D.dVC,D.dVi,D.dVj,D.dVO,D.dWa,D.dVS,D.dVX,D.dWb,D.dVb,D.dVJ],B.ax("O<eu>"))
D.d6p=w([A.cq,A.ak],x.O)
D.egR=new B.y(4286331629,4292552567)
D.egE=new B.y(4280640491,4278630100)
D.egZ=new B.y(4294538006,4292943176)
D.eg0=new B.y(4278556265,4280640491)
D.d0Q=w([D.egR,D.egE,D.egZ,D.eg0],x.n)
D.cqg=w([4294626325,4280472558,4294210230],x.t)
D.dV5=new C.nG("colorful","Colorful",A.nf,D.d0Q,4294967295,3875536895,D.cqg,D.mE)
D.egs=new B.y(4279522093,4279657780)
D.egI=new B.y(4281750292,4283268111)
D.eg3=new B.y(4278603323,4279203438)
D.egJ=new B.y(4282343954,4279599165)
D.cB5=w([D.egs,D.egI,D.eg3,D.egJ],x.n)
D.cpZ=w([4288931381,4294829706,4287033260],x.t)
D.dV1=new C.nG("nature","Nature",A.Ga,D.cB5,4294442727,3874290891,D.cpZ,D.dd)
D.egm=new B.y(4279369771,4283178389)
D.egj=new B.y(4279179050,4286456526)
D.egA=new B.y(4280163147,4290648157)
D.efT=new B.y(4278322711,4285343961)
D.cSz=w([D.egm,D.egj,D.egA,D.efT],x.n)
D.cqc=w([4294210230,4280472558,4289170426],x.t)
D.dV_=new C.nG("vibe","Vibe",A.a_B,D.cSz,4294967295,3874869502,D.cqc,D.ue)
D.egV=new B.y(4290007817,4292552567)
D.egP=new B.y(4286328082,4294286859)
D.egU=new B.y(4288485197,4294538006)
D.egO=new B.y(4285343961,4293675161)
D.bXr=w([D.egV,D.egP,D.egU,D.egO],x.n)
D.cqh=w([4294829706,4294967295,4284999929],x.t)
D.dV0=new C.nG("celebration","Celebration",A.lh,D.bXr,4294967295,4009752557,D.cqh,D.q9)
D.egh=new B.y(4279179050,4280171146)
D.egl=new B.y(4279310375,4280232247)
D.eg9=new B.y(4278916151,4280172719)
D.egi=new B.y(4279179050,4281549141)
D.cLE=w([D.egh,D.egl,D.eg9,D.egi],x.n)
D.cpU=w([4281908728,4294626325,4287931320],x.t)
D.dV4=new C.nG("professional","Professional",A.Bt,D.cLE,4294967295,3872118241,D.cpU,D.Rs)
D.egd=new B.y(4278995566,4278413729)
D.eg5=new B.y(4278727492,4279137424)
D.egB=new B.y(4280171146,4278751666)
D.ege=new B.y(4278995566,4279590517)
D.cu2=w([D.egd,D.eg5,D.egB,D.ege],x.n)
D.cpX=w([4286436348,4284410580,4294829706],x.t)
D.dV6=new C.nG("ocean","Ocean",I.a08,D.cu2,4294967295,3873501950,D.cpX,D.uf)
D.egQ=new B.y(4286328082,4294538006)
D.egS=new B.y(4286781507,4294677052)
D.egM=new B.y(4283178389,4294197086)
D.egT=new B.y(4288295954,4294688548)
D.cHR=w([D.egQ,D.egS,D.egM,D.egT],x.n)
D.cqi=w([4294829706,4294967295,4294747557],x.t)
D.dV7=new C.nG("sunset","Sunset",A.NA,D.cHR,4294967295,4009749973,D.cqi,D.dd)
D.eh2=new B.y(4294967295,4294047225)
D.egY=new B.y(4294507260,4294967295)
D.eh1=new B.y(4294967295,4293060848)
D.egX=new B.y(4294507260,4294047225)
D.cVE=w([D.eh2,D.egY,D.eh1,D.egX],x.n)
D.cpS=w([4280640491,4279179050,4287931320],x.t)
D.dV3=new C.nG("minimal","Minimal",A3.vz,D.cVE,4279179050,4282865001,D.cpS,D.dd)
D.egc=new B.y(4278979081,4280886564)
D.egw=new B.y(4280031511,4278979081)
D.egk=new B.y(4279308561,4281148438)
D.egb=new B.y(4278979081,4280031511)
D.d8k=w([D.egc,D.egw,D.egk,D.egb],x.n)
D.cq5=w([4292128567,4294829706,4289241758],x.t)
D.dV8=new C.nG("elegant","Elegant",A.lQ,D.d8k,4294898631,3873957348,D.cq5,D.aFq)
D.egy=new B.y(4280159034,4282058596)
D.eg8=new B.y(4278916151,4280163147)
D.egG=new B.y(4281208933,4278916151)
D.egp=new B.y(4279502891,4283178389)
D.deR=w([D.egy,D.eg8,D.egG,D.egp],x.n)
D.cqe=w([4294296657,4292128567,4291081725],x.t)
D.dV2=new C.nG("royal","Royal Gold",A.iY,D.deR,4294965222,3874084351,D.cqe,D.mE)
D.efY=new B.y(4278464302,4280163147)
D.eg7=new B.y(4278916151,4279455306)
D.egz=new B.y(4280163147,4283040846)
D.efV=new B.y(4278332450,4281413249)
D.d0x=w([D.efY,D.eg7,D.egz,D.efV],x.n)
D.cpT=w([4281193663,4289170426,4294210230],x.t)
D.dV9=new C.nG("aurora","Aurora Glow",A.dW,D.d0x,4293983738,3869766608,D.cpT,D.dd)
D.vV=w([D.dV5,D.dV1,D.dV_,D.dV0,D.dV4,D.dV6,D.dV7,D.dV3,D.dV8,D.dV2,D.dV9],B.ax("O<nG>"))
D.be8=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d6W=w([A.qG,D.be8,A.qG],x.O)
D.d7d=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d7h=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.evd=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.elC=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eq3=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.edM=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eoL=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.en1=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.erd=new B.y("Surprise me","")
D.d7N=w([D.evd,D.elC,D.eq3,D.edM,D.eoL,D.en1,D.erd],x.L)
D.b7I=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bhX=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d8w=w([A.c,D.b7I,D.bhX],x.O)
D.dam=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aF_=new C.kQ(0,"heritageGold")
D.bcQ=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fZF=w([D.bcQ,W.adx,A.aw],x.O)
D.dyx=new C.jm("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aF_,4294570461,4284234270,4292128567,D.jF)
D.aF0=new C.kQ(1,"heritageCrimson")
D.b6b=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bbh=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bhN=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fZi=w([D.b6b,D.bbh,D.bhN],x.O)
D.dyq=new C.jm("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aF0,4294635750,4285213214,4292912216,D.jF)
D.daq=w([D.a4d,D.a4b,D.dyx,D.dyq,D.a46,D.a49],x.h)
D.dEp=new C.ro(1,"circuit")
D.dES=new C.m2("neural","Neural Link","Robotic",D.dEp,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dEo=new C.ro(0,"grid")
D.dEP=new C.m2("signal","Signal Grid","Robotic",D.dEo,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dEu=new C.ro(2,"hexes")
D.dEA=new C.m2("core","Core Protocol","Robotic",D.dEu,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFn=new C.ro(11,"diagonal")
D.dEL=new C.m2("steel","Steel Tech","Robotic",D.aFn,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFo=new C.ro(3,"rings")
D.dEz=new C.m2("vault","Vault Gold","Robotic",D.aFo,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dEs=new C.ro(13,"leaves")
D.dEC=new C.m2("forest","Forest Morning","Nature",D.dEs,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFp=new C.ro(5,"waves")
D.dEJ=new C.m2("ocean","Ocean Calm","Nature",D.aFp,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dEv=new C.ro(6,"sunset")
D.dEO=new C.m2("sunset","Sunset Glow","Nature",D.dEv,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dEw=new C.ro(7,"mountains")
D.dEB=new C.m2("mountain","Mountain Air","Nature",D.dEw,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dEx=new C.ro(8,"stars")
D.dEI=new C.m2("night","Night Sky","Nature",D.dEx,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4w=new C.ro(4,"orbs")
D.dEG=new C.m2("aurora","Aurora","Nature",D.a4w,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dEQ=new C.m2("sand","Sand Dune","Nature",D.aFp,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dEy=new C.ro(9,"rays")
D.dEF=new C.m2("golden","Golden Hour","Warm",D.dEy,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dED=new C.m2("royal","Royal Purple","Warm",D.aFn,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dEE=new C.m2("rose","Rose Petal","Warm",D.a4w,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dEr=new C.ro(12,"blocks")
D.dEH=new C.m2("electric","Electric Blue","Bold",D.dEr,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dER=new C.m2("mint","Fresh Mint","Bold",D.a4w,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dEt=new C.ro(14,"minimal")
D.dEN=new C.m2("white","Clean White","Clean",D.dEt,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dEq=new C.ro(10,"frame")
D.dEK=new C.m2("midnight","Midnight Gold","Clean",D.dEq,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dEM=new C.m2("community","Community Green","Clean",D.aFo,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2O=w([D.dES,D.dEP,D.dEA,D.dEL,D.dEz,D.dEC,D.dEJ,D.dEO,D.dEB,D.dEI,D.dEG,D.dEQ,D.dEF,D.dED,D.dEE,D.dEH,D.dER,D.dEN,D.dEK,D.dEM],B.ax("O<m2>"))
D.daN=w([D.AC,A.v2,A.hH,A.bY],x.O)
D.db2=w([D.aen,D.j9],x.O)
D.dbc=w(["pdf","docx","txt","md"],x.s)
D.eDK=new B.br(-3,150,34)
D.eDL=new B.br(-3,214,62)
D.eDM=new B.br(-3,288,62)
D.dc0=w([D.eDK,D.eDL,D.eDM],B.ax("O<+(M,M,M)>"))
D.dcu=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dd3=w(["Write","Design","Print & fold"],x.s)
D.jG=new C.uA(2,"triangle")
D.Cy=new C.uA(3,"arrow")
D.fs=new C.uA(4,"line")
D.jH=new C.uA(5,"parallelogram")
D.dd6=w([D.be,D.eK,D.jG,D.Cy,D.fs,D.jH,D.kZ],x.m)
D.eeZ=new B.y(240,96)
D.ehD=new B.y(560,46)
D.ddb=w([D.eeZ,D.ehD],x.G)
D.fZQ=new C.xr(0,"classic")
D.dAo=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aF_,4294570461,4282000405,4284234270)
D.dAA=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aF0,4294635750,4281999378,4285213214)
D.dAp=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a4q,4294967035,4279378237,4290283019)
D.dAC=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aF8,4294966515,4281016592,4289102906)
D.dAE=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aF1,4294964964,4282000405,4279983648)
D.dAm=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aF2,4294439140,4279903102,4279903102)
D.dAr=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aF3,4294965484,4285218591,4287322667)
D.dAw=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aF4,4294244340,4279196764,4279196764)
D.dAy=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aF5,4294505710,4279970378,4291058750)
D.fZR=new C.xr(1,"ringsNdoa")
D.dAq=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rp,4294966259,4279378237,4291404327)
D.fZT=new C.xr(2,"coupleCards")
D.dAB=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rp,4294966259,4279378237,4291404327)
D.fZU=new C.xr(3,"kuhoweshaForm")
D.dAx=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cs,4294966519,4279378237,4291404327)
D.fZV=new C.xr(4,"mahariPande")
D.dAn=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rp,4294966259,4279904068,4291404327)
D.fZW=new C.xr(5,"familiaMti")
D.dAD=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aF6,4294966776,4280241466,4291404327)
D.fZX=new C.xr(6,"ndoaSafi")
D.dAu=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cs,4294966519,4279378237,4291404327)
D.fZY=new C.xr(7,"peteWide")
D.dAt=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rp,4294966259,4282001936,4291404327)
D.fZZ=new C.xr(8,"muhuriCrest")
D.dAs=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rp,4294966259,4279378237,4291404327)
D.h__=new C.xr(9,"fomuWazi")
D.dAv=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cs,4294966519,4279904068,4291404327)
D.fZS=new C.xr(10,"upendoOrnate")
D.dAz=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aF7,4294965493,4286200650,4291404327)
D.Qk=w([D.dAo,D.dAA,D.dAp,D.dAC,D.dAE,D.dAm,D.dAr,D.dAw,D.dAy,D.dAq,D.dAB,D.dAx,D.dAn,D.dAD,D.dAu,D.dAt,D.dAs,D.dAv,D.dAz],B.ax("O<nC>"))
D.Cw=new C.aqC(0,"landscape169")
D.o9=new C.aqC(1,"portrait916")
D.ddY=w([D.Cw,D.o9],B.ax("O<aqC>"))
D.axI=w([A.hH,A.bK,A.cs,A.is,A.c],x.O)
D.u7=w([A.bY,A.ia],x.O)
D.ee9=new B.y(1000,"M")
D.eiK=new B.y(900,"CM")
D.ehy=new B.y(500,"D")
D.efR=new B.y(400,"CD")
D.eea=new B.y(100,"C")
D.eiL=new B.y(90,"XC")
D.ehz=new B.y(50,"L")
D.efS=new B.y(40,"XL")
D.eef=new B.y(10,"X")
D.eiV=new B.y(9,"IX")
D.ehO=new B.y(5,"V")
D.ehl=new B.y(4,"IV")
D.eeF=new B.y(1,"I")
D.dex=w([D.ee9,D.eiK,D.ehy,D.efR,D.eea,D.eiL,D.ehz,D.efS,D.eef,D.eiV,D.ehO,D.ehl,D.eeF],x.ek)
D.eEL=new B.cD(["open",A.jh,"Open & write","Keep writing this book"])
D.eFb=new B.cD(["print",A.tV,"Print as a book","Fold and staple it"])
D.deH=w([D.eEL,D.eFb],B.ax("O<+(n,a_,n,n)>"))
D.dfm=w([D.a4y,D.mE,D.HG,D.Rs,D.dd,D.Rr],x.i)
D.evO=new B.y(-1,"Small")
D.edY=new B.y(0,"Normal")
D.eeE=new B.y(1,"Big")
D.efh=new B.y(2,"Huge")
D.dfR=w([D.evO,D.edY,D.eeE,D.efh],x.ek)
D.dgg=w([49,65,89,38,83,89],x.t)
D.dgn=w([A.v2,A.hH,A.bY],x.O)
D.dgO=w([D.dd,D.mE,D.ue,D.a4y,D.HG,D.Rs],x.i)
D.aD0=new B.dS([0,D.Lk,8,D.afH,12,D.afI],B.ax("dS<H,a3r>"))
D.e05={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bhF=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cLO=w([A.bK,D.bhF],x.O)
D.d4Q=w([A.b1,A.bj],x.O)
D.d_G=w([A.bZ,A.aS,A.cd],x.O)
D.deI=w([A.cq,A.bv],x.O)
D.cTu=w([A.b8,A.fi],x.O)
D.d2j=w([A.b7,A.f9],x.O)
D.bb2=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d1B=w([D.bb2,A.ox],x.O)
D.cXh=w([A.h1,A.x4],x.O)
D.cTi=w([A.bu,A.ce],x.O)
D.djp=new B.bk(D.e05,[D.cLO,H.aoi,D.d4Q,D.d_G,D.deI,D.cTu,D.d2j,D.d1B,D.cXh,D.cTi],B.ax("bk<n,ai<w>>"))
D.e_e={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3p=new B.bk(D.e_e,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3w=new B.bk(A.i4,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.dnB=new F.MD(30,null)
D.dsF=new F.mp("Chapter 1","","","")
D.ddK=w([D.dsF],x.B)
D.dsJ=new F.re("My Book","","",D.ddK,E.aEj)
D.dsH=new F.uq("starry",null,null,null,null,"","","")
D.dsK=new F.re("Dream Big","","",E.a2u,D.dsH)
D.dsI=new F.uq("story",null,null,null,null,"","","")
D.dsL=new F.re("Little Lion","","",E.a2u,D.dsI)
D.dsG=new F.uq("vintage",null,null,null,null,"","","")
D.dsM=new F.re("Our Story","","",E.a2u,D.dsG)
D.dvN=new C.Ef("","NGMY","","")
D.dD2=new C.zj("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dUZ=new C.b0u(null,null,null,null)
D.dWH=new C.aqH(null)
D.dWU=new C.arc(0,"smaller")
D.dWV=new C.arc(1,"bigger")
D.aFD=new C.arc(2,"fit")
D.e2z=new B.u(3,6)
D.e2J=new B.u(4,8)
D.e69=new B.D(E.agx,T.abr,null)
D.e6d=new B.D(A.XV,A.lC,null)
D.bFO=new B.ae(A.lk,16,A.c1,null,null,null)
D.e6h=new B.D(A.iU,D.bFO,null)
D.b5y=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e6t=new B.D(A.Fj,D.b5y,null)
D.bQ3=new B.ae(A.cD,16,A.az,null,null,null)
D.e6x=new B.D(A.eq,D.bQ3,null)
D.fjk=new B.x("Play",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d54=w([U.amN,A.rD,D.fjk],x.p)
D.eJm=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d54,null)
D.e6A=new B.D(A.nW,D.eJm,null)
D.b5H=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eOD=new B.a7(20,20,D.b5H,null)
D.e6F=new B.D(A.iU,D.eOD,null)
D.fsi=new B.x("Seconds per slide",null,A.hs,null,null,null,null,null,null,null,null,null)
D.e6N=new B.D(A.bk,D.fsi,null)
D.e87=new C.a8g(2,"print")
D.e8a=new B.iO(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e9N=new B.h7("/Annot")
D.e9P=new B.h7("/URI")
D.fdK=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ebO=new B.jo("share",48,D.fdK,null,B.ax("jo<n>"))
D.bPY=new B.ae(A.dW,14,A.eA,null,null,null)
D.ebX=new B.cL(null,-2,-2,null,null,null,D.bPY,null)
D.cNN=w([N.ae1,A.K],x.O)
D.bWe=new B.a8(A.a3,A.a7,A.x,D.cNN,null,null)
D.aZq=new B.o(null,null,null,null,null,D.bWe,A.n)
D.bmt=new B.kN(D.aZq,A.bd,null,null)
D.ec8=new B.cL(0,0,null,0,8,null,D.bmt,null)
D.d9p=w([A.hV,A.mg,A.ci],x.O)
D.ecN=new B.bT(A.A,0.5,A.x,null,0,D.d9p,null,null)
D.efa=new B.y(0.22,A.bj)
D.ejf=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.elh=new B.y(0.5,A.hi)
D.eum=new B.y(0.78,A.aV)
D.eEB=new B.cD([A.bt,0.22,0.7,2.6])
D.eEH=new B.cD([A.b8,0.36,1.2,1.3])
D.eEN=new B.cD([A.dQ,0.28,0.2,0.4])
D.eET=new B.cD([A.cy,0.05,0.3,0.35])
D.eEZ=new B.cD([A.bu,0.28,0.9,0])
D.eF6=new B.cD([A.aE,-0.25,-0.15,0.45])
D.eFX=new B.cD([A.bZ,0.42,1,4.1])
D.eJ4=new B.a9d(9)
D.bGU=new B.ae(A.Gc,28,A.cd,null,null,null)
D.fsQ=new B.x("NGMY News",null,A.dm,null,null,null,null,null,null,null,null,null)
D.bwe=new B.bD(1,A.bh,D.fsQ,null)
D.dcx=w([D.bGU,A.av,D.bwe],x.p)
D.eJg=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dcx,null)
D.bH4=new B.ae(A.o_,16,A.c,null,null,null)
D.fuk=new B.x("Book",null,A.oh,null,null,null,null,null,null,null,null,null)
D.dgm=w([D.bH4,A.ec,D.fuk],x.p)
D.eJo=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dgm,null)
D.bNx=new B.ae(A.ji,10,A.c,null,null,null)
D.fhs=new B.x("Pro",null,A.nr,null,null,null,null,null,null,null,null,null)
D.d59=w([D.bNx,A.qg,D.fhs],x.p)
D.eJs=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d59,null)
D.fsh=new B.x("Make a newspaper",null,Au.Ts,null,null,null,null,null,null,null,null,null)
D.bXp=w([E.a0t,A.ab,D.fsh],x.p)
D.eJt=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bXp,null)
D.bM5=new B.ae(A.lh,18,A.bK,null,null,null)
D.fjy=new B.x("Ending celebration",null,A.i6,null,null,null,null,null,null,null,null,null)
D.dbC=w([D.bM5,A.bp,D.fjy],x.p)
D.eJw=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dbC,null)
D.bNj=new B.ae(A.jh,18,A.jS,null,null,null)
D.eZg=new B.G(!0,A.jS,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new B.x("Write",null,D.eZg,null,null,null,null,null,null,null,null,null)
D.cVt=w([D.bNj,A.ab,D.fuB],x.p)
D.eJB=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cVt,null)
D.fhq=new B.x("Download picture",null,A.p8,null,null,null,null,null,null,null,null,null)
D.byi=new B.qg(A.eh,A.A,A.f,D.fhq,null)
D.byt=new B.dq(1,A.cn,D.byi,null)
D.d5w=w([K.amD,A.ab,D.byt],x.p)
D.eJC=new B.cn(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d5w,null)
D.bIS=new B.ae(A.Gc,22,A.cd,null,null,null)
D.fqX=new B.x("NGMY NEWS",null,H.a77,null,null,null,null,null,null,null,null,null)
D.cNe=w([D.bIS,A.ab,D.fqX],x.p)
D.eJK=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cNe,null)
D.eJW=new B.p5(!1,!1,null,T.Vm,null,A.bX,null,null,null)
D.a6c=new B.ji([D.cm,D.dd,D.ue,D.HF,D.uf,D.aFt],B.ax("ji<hy>"))
D.e1n={title:0,quote:1,closing:2,bio:3}
D.eL3=new B.eM(D.e1n,4,x.M)
D.e_w={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eL5=new B.eM(D.e_w,5,x.M)
D.e0T={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6d=new B.eM(D.e0T,8,x.M)
D.e0d={Design:0,Transitions:1,Insert:2}
D.eL9=new B.eM(D.e0d,3,x.M)
D.h_7=new B.ji([D.a4z],B.ax("ji<vR>"))
D.e0m={float3d:0,drift:1,pulse:2}
D.eLc=new B.eM(D.e0m,3,x.M)
D.aMJ=new B.ji([D.HC,D.HD,D.HE],B.ax("ji<mt>"))
D.e_t={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aMM=new B.eM(D.e_t,14,x.M)
D.h_8=new B.eM(A.i4,0,B.ax("eM<vR>"))
D.e0j={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sw=new B.eM(D.e0j,4,x.M)
D.e_m={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aMP=new B.eM(D.e_m,30,x.M)
D.e0r={circle:0,triangle:1,hexagon:2,diamond:3}
D.eLs=new B.eM(D.e0r,4,x.M)
D.eNC=new B.ar(390,844)
D.eOn=new B.a7(20,20,A6.Kc,null)
D.aNA=new B.a7(null,2.5,null,null)
D.eOx=new B.a7(18,18,A6.Kc,null)
D.bNn=new B.ae(A.iY,19,A.c,null,null,null)
D.eOI=new B.a7(38,38,D.bNn,null)
D.bLF=new B.ae(A.yp,22,A.c,null,null,null)
D.eOK=new B.a7(40,40,D.bLF,null)
D.ePi=new B.hL(2,10,10,1.15,null)
D.aNI=new B.hL(2,16,14,0.62,null)
D.buh=new B.Q(32,30,32,40)
D.b73=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bGR=new B.ae(A.pR,56,D.b73,null,null,null)
D.aeU=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f0d=new B.G(!0,D.aeU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo0=new B.x("Your books will live here.",null,D.f0d,null,A.L,null,null,null,null,null,null,null)
D.cYb=w([D.bGR,A.S,D.fo0],x.p)
D.blt=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cYb,null)
D.e6L=new B.D(D.buh,D.blt,null)
D.ePD=new B.m5(D.e6L,null)
D.fnY=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ePV=new B.b1(D.fnY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fm6=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ePW=new B.b1(D.fm6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fr_=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new B.b1(D.fr_,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frv=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eQj=new B.b1(D.frv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkL=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eQw=new B.b1(D.fkL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fys=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eQP=new B.b1(D.fys,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvE=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new B.b1(D.fvE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frD=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eRG=new B.b1(D.frD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ffL=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRW=new B.b1(D.ffL,null,null,null,null,null,null,null,A.io,null,null,null,null,A.pH,!1,null,null,null,A.r,null)
D.fhy=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eSd=new B.b1(D.fhy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnF=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eSf=new B.b1(D.fnF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnl=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eSg=new B.b1(D.fnl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftE=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new B.b1(D.ftE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbX=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSq=new B.b1(D.fbX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiG=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new B.b1(D.fiG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxd=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eSP=new B.b1(D.fxd,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwL=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eST=new B.b1(D.fwL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.faX=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eSV=new B.b1(D.faX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsL=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eT3=new B.b1(D.fsL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwm=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eTi=new B.b1(D.fwm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwd=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eTk=new B.b1(D.fwd,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.faP=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eTq=new B.b1(D.faP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feM=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTS=new B.b1(D.feM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvr=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new B.b1(D.fvr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feA=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eUh=new B.b1(D.feA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bdQ=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cM1=w([A.is,A.ox,D.bdQ,D.abS,A.is],x.O)
D.eUF=new B.fS(A.A,0,6.283185307179586,A.x,D.cM1,null,null)
D.cUG=w([A.bK,A.bY,A.hH,D.AC,A.bK],x.O)
D.aOh=new B.fS(A.A,0,6.283185307179586,A.x,D.cUG,null,null)
D.d7b=w([A.bZ,A.bt,A.b8,A.b2,A.cd,A.bZ],x.O)
D.eUK=new B.fS(A.A,0,6.283185307179586,A.x,D.d7b,null,null)
D.cO0=w([A.pF,A.oy,A.Aq,A.is,A.pF],x.O)
D.eUL=new B.fS(A.A,0,6.283185307179586,A.x,D.cO0,null,null)
D.d75=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eUM=new B.fS(A.A,0,6.283185307179586,A.x,D.d75,null,null)
D.deo=w([A.bu,A.b8,A.bt,A.bZ,A.bu],x.O)
D.eUO=new B.fS(A.A,0,6.283185307179586,A.x,D.deo,null,null)
D.be7=new B.w(1,0,1,1,A.t)
D.b8g=new B.w(1,1,0,1,A.t)
D.daF=w([A.Ec,A.adK,H.acF,D.be7,H.ad3,D.b8g,A.Ec],x.O)
D.eUP=new B.fS(A.A,0,6.283185307179586,A.x,D.daF,null,null)
D.eV3=new C.ave(2,"immersiveSticky")
D.eV4=new C.ave(3,"edgeToEdge")
D.eV5=new C.ave(4,"manual")
D.eXv=new B.G(!0,A.ot,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOO=new B.G(!0,A.f3,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY3=new B.G(!0,E.n0,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_v=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_F=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1v=new B.G(!0,A.jc,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1J=new B.ry(!0,A.HY,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2d=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new B.G(!0,A.jb,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3d=new B.G(!0,A.az,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e8d=new B.iO(1,1,0.7568627450980392,0.027450980392156862)
D.f3h=new B.ry(!0,D.e8d,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adR=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPv=new B.G(!0,D.adR,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new B.G(!0,D.aeU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3q=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPx=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f42=new B.ry(!0,A.p1,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tm=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4Q=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new B.G(!0,D.adR,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IW=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5k=new B.G(!0,A.bY,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5s=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5M=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avt,null,null,null)
D.f5O=new B.G(!0,A.cf,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f62=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6L=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f77=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ9=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQb=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjc=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f8Q=new B.G(!0,D.bjc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQj=new B.G(!0,E.n0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9k=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9n=new B.G(!0,O.lc,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2r=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faB=new B.x("NEW",null,D.f2r,null,null,null,null,null,null,null,null,null)
D.faS=new B.x("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fbj=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new B.x("Scrollable PDF on this slide",null,A.dn,null,null,null,null,null,null,null,null,null)
D.fcm=new B.x("Big quote mark",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fcp=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fcA=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fd1=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fd3=new B.x("How many slides?",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fdB=new B.x("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.eZj=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdX=new B.x("Luxury FX",null,D.eZj,null,null,null,null,null,null,null,null,null)
D.fek=new B.x("Font",null,A.rI,null,null,null,null,null,null,null,null,null)
D.fev=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.feB=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f8o=new B.G(!0,A.bJ,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feJ=new B.x("Example  GA847",null,D.f8o,null,null,null,null,null,null,null,null,null)
D.ff8=new B.x("Design shapes",null,A.iH,null,null,null,null,null,null,null,null,null)
D.ffh=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ffl=new B.x("Non-stop (loop)",null,A.hs,null,null,null,null,null,null,null,null,null)
D.ffz=new B.x("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ffS=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fgh=new B.x("Add your picture",null,A.kA,null,null,null,null,null,null,null,null,null)
D.f1K=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgi=new B.x("Enter document code",null,D.f1K,null,A.L,null,null,null,null,null,null,null)
D.fgj=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.f_l=new B.G(!0,E.n0,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgJ=new B.x("Delete this book?",null,D.f_l,null,A.L,null,null,null,null,null,null,null)
D.f3T=new B.G(!0,E.n0,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new B.x("Your library",null,D.f3T,null,null,null,null,null,null,null,null,null)
D.fhF=new B.x("Delete",null,A.aPp,null,null,null,null,null,null,null,null,null)
D.fhH=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Dd,null,null,null,null,null,null,null,null,null)
D.fhS=new B.x("Element flies in",null,A.aPB,null,null,null,null,null,null,null,null,null)
D.TC=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fif=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fiD=new B.x("Cancel",null,E.aPM,null,null,null,null,null,null,null,null,null)
D.fiF=new B.x("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f7f=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.x("DOCUMENT CODE",null,D.f7f,null,null,null,null,null,null,null,null,null)
D.fjU=new B.x("Quotes",null,G.a7K,null,null,null,null,null,null,null,null,null)
D.f19=new B.G(!0,O.lc,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk1=new B.x("Add a picture",null,D.f19,null,null,null,null,null,null,null,null,null)
D.fk9=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7q,null,A.L,null,null,null,null,null,null,null)
D.fkd=new B.x("Look & feel",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fki=new B.x("Rings",null,A.i6,null,null,null,null,null,null,null,null,null)
D.fko=new B.x("W",null,A.rI,null,null,null,null,null,null,null,null,null)
D.fky=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IV,null,A.L,null,null,null,null,null,null,null)
D.fkT=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.flE=new B.x("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.flT=new B.x("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f1z=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.x("Create with AI",null,D.f1z,null,A.L,null,null,null,null,null,null,null)
D.fmA=new B.x("Apply look",null,A.i6,null,null,null,null,null,null,null,null,null)
D.f2i=new B.G(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.x("Type your presentation below",null,D.f2i,null,A.L,null,null,null,null,null,null,null)
D.fnq=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aQm,null,A.L,null,null,null,null,null,null,null)
D.fns=new B.x("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.eYk=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new B.x("Done",null,D.eYk,null,null,null,null,null,null,null,null,null)
D.fnU=new B.x("Delete",null,A.ns,null,null,null,null,null,null,null,null,null)
D.fo2=new B.x("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f0v=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foW=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f0v,null,A.L,null,null,null,null,null,null,null)
D.fph=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new B.x("Layout",null,A.Tu,null,null,null,null,null,null,null,null,null)
D.fq_=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fq4=new B.x("X",null,A.rI,null,null,null,null,null,null,null,null,null)
D.fqE=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.IS,null,null,null,null,null,null,null,null,null)
D.frb=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.frn=new B.x("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.frp=new B.x("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.frr=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.frx=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.frJ=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new B.x("Done",null,A.aQ8,null,null,null,null,null,null,null,null,null)
D.fs_=new B.x("Ending celebration",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fs0=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fsf=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IM,null,null,null,null,null,null,null,null,null)
D.ftb=new B.x("Export presentation",null,A.dn,null,null,null,null,null,null,null,null,null)
D.ftc=new B.x("What would you like to do?",null,D.aPv,null,null,null,null,null,null,null,null,null)
D.ftg=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.ftM=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new B.x("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fu2=new B.x("Done",null,A.l3,null,null,null,null,null,null,null,null,null)
D.f8e=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new B.x("Delete presentation?",null,D.f8e,null,A.L,null,null,null,null,null,null,null)
D.fuo=new B.x("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fuz=new B.x("\ud83c\udf33",null,A.IQ,null,A.L,null,null,null,null,null,null,null)
D.fuR=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fuY=new B.x("Transfer document",null,A.pa,null,null,null,null,null,null,null,null,null)
D.fv8=new B.x("Add to the slides",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fvv=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fvK=new B.x("Make a book",null,I.aP4,null,null,null,null,null,null,null,null,null)
D.fvO=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.f12=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new B.x("Keep this page open until it finishes.",null,D.f12,null,null,null,null,null,null,null,null,null)
D.fvS=new B.x("Making your video",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fvX=new B.x("LANGUAGE",null,D.Tm,null,null,null,null,null,null,null,null,null)
D.fw3=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fwb=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new B.x("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fws=new B.x("Delete from the database?",null,A.kA,null,null,null,null,null,null,null,null,null)
D.fwt=new B.x("H",null,A.rI,null,null,null,null,null,null,null,null,null)
D.fwR=new B.x("NGMY Quotes",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fxi=new B.x("Cover",null,D.aQj,null,null,null,null,null,null,null,null,null)
D.fxm=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fxn=new B.x("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fxK=new B.x("Y",null,A.rI,null,null,null,null,null,null,null,null,null)
D.fxV=new B.x("Crop the picture",null,A.l3,null,null,null,null,null,null,null,null,null)
D.fy0=new B.x("Edit text",null,A.IR,null,null,null,null,null,null,null,null,null)
D.fAe=B.dR("a82")
D.Dp=new C.awx(0,"none")
D.aTh=new C.awx(1,"zipCrypto")
D.aTi=new C.awx(2,"aes")
D.fPe=new F.P7("","",null)
D.fQk=new C.bbH(null)
D.fRr=new C.Ze(null)
D.fT_=new C.acX(null)
D.fT1=new C.aDJ(null)
D.fVN=new C.a_t(null)
D.fW3=new C.a0_(null)
D.fWm=new C.bti(null)})();(function staticFields(){$.hbO=null
$.hbP=null
$.hbQ=null
$.hbR=null
$.fUP=B.v_("_lastQuoRemDigits")
$.fUQ=B.v_("_lastQuoRemUsed")
$.awT=B.v_("_lastRemUsed")
$.fUR=B.v_("_lastRem_nsh")
$.q3=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6S=B.T(x.N,x.I)
$.fSj=!1
$.hgC=B.T(B.ax("kQ"),x.N)
$.hgP=B.T(B.ax("kQ"),x.E)
$.heP=!1
$.byW="q"
$.Q4=0
$.Cp=B.T(x.N,B.ax("ai<zl>"))
$.hfb=!1
$.fWp=!1
$.hlr=null
$.hPD=B.T(x.N,B.ax("az<n?>"))
$.K8=""
$.j_=0
$.h8z=function(){var w=x.N
return B.T(w,w)}()
$.h8y=B.T(x.N,x.R)
$.fWK=!1
$.afF=B.T(x.N,x.E)
$.fXx=0
$.bjM=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idQ","CL",()=>C.b9c(0))
w($,"idO","a2f",()=>C.b9c(1))
w($,"idP","hp3",()=>C.b9c(2))
w($,"idN","h0o",()=>$.a2f().uU(0))
w($,"idL","hp1",()=>C.b9c(1e4))
w($,"idM","hp2",()=>B.DY(8))
w($,"i9D","hn4",()=>B.DY(0))
w($,"i9L","hn8",()=>B.DY(0))
w($,"i9K","hn7",()=>B.bXC(0))
w($,"ihv","hr3",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3p.gdK(D.a3p),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"ihW","bDr",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mR(new C.fDb(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mR(new C.fDc(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fDd(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mR(new C.fDo(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mR(new C.fDt(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fDu(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mR(new C.fDv(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mR(new C.fDw(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mR(new C.fDx(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fDy(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mR(new C.fDz(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mR(new C.fDe(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mR(new C.fDf(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mR(new C.fDg(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fDh(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mR(new C.fDi(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mR(new C.fDj(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mR(new C.fDk(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mR(new C.fDl(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mR(new C.fDm(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mR(new C.fDn(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mR(new C.fDp(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mR(new C.fDq(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mR(new C.fDr(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mR(new C.fDs(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Eo>"))})
w($,"ihy","hr5",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["EKiN9RZhrtKBHOLPDJbXObRwidw="]=a.current})($__dart_deferred_initializers__);