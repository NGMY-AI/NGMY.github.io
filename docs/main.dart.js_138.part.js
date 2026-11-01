((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ag,A5,Ah,Ai,U,A6,Aj,Ak,C={
tT(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h_n(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JK(d){var w
if(d===0)return $.D3()
if(d===1)return $.a2E()
if(d===2)return $.huN()
if(Math.abs(d)<4294967296)return C.b9V(A.o.N(d))
w=C.hPw(d)
return w},
b9V(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tT(4,w)
return new C.nY(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tT(1,w)
return new C.nY(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.tT(2,w)
return new C.nY(v===0?!1:s,w,v)}v=A.o.am(A.o.gak7(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.am(d,65536)}v=C.tT(v,w)
return new C.nY(v===0?!1:s,w,v)},
hPw(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dK("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D3()
w=$.huM()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.la(A.aH.gaP(w))
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
q=new C.nY(!1,r,4)
if(s<0)p=q.mu(0,-s)
else p=s>0?q.dY(0,s):q
return p},
h_o(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hhy(d,e,f,g){var w,v,u,t,s,r=A.o.am(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dY(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fJ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dY(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hht(d,e,f,g){var w,v,u,t,s=A.o.am(f,16)
if(A.o.E(f,16)===0)return C.h_o(d,e,s,g)
w=e+s+1
C.hhy(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hPz(d,e,f,g){var w,v,u,t,s=A.o.am(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dY(1,r)-1,o=A.o.fJ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dY(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fJ(u,r)}w&2&&B.aj(g)
g[n]=o},
cG6(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hPx(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9W(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hhz(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.am(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.am(r,65536)}},
hPy(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.dZ((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
cG7:function cG7(){},
cG8:function cG8(){},
cG9:function cG9(d,e){this.a=d
this.b=e},
cGa:function cGa(d){this.a=d},
aRl:function aRl(d,e){this.a=d
this.b=e},
h7n(d,e,f){var w=new C.RK(d,A.o.am(Date.now(),1000),e)
w.Q=f
return w},
RK:function RK(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3Q:function a3Q(d,e){this.a=d
this.b=e},
bHJ:function bHJ(d){this.a=d
this.c=this.b=0},
hy0(){return new C.bG3()},
bG3:function bG3(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cyf:function cyf(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hPe(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cg(d.gcXN(d)))
v=f*2+2
u=C.hfa(C.hfc(),64)
t=new C.ci0(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ci1(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cLc(w,0,s,0))},
cyd:function cyd(d,e){this.c=d
this.d=e},
ax6:function ax6(d,e){this.a=d
this.b=e},
cyg:function cyg(d,e,f,g){var _=this
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
b8C:function b8C(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cye:function cye(){this.a=$},
hgY(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hxK(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEE:function bEE(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h54(d,e){e&=31
return(d&$.qc[e])<<e>>>0},
nt(d,e){e&=31
return(d>>>e|C.h54(d,32-e))>>>0},
hfb(d){var w,v=new C.asO()
if(B.iK(d))v.aKf(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hfc(){var w=C.hfb(0),v=new Uint8Array(4),u=x.S
u=new C.ci2(w,v,A.Ef,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.kC(0)
return u},
hfa(d,e){var w=new C.chZ(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
chY:function chY(){},
ci1:function ci1(d,e,f){this.a=d
this.b=e
this.c=f},
chW:function chW(){},
asN:function asN(d){this.a=d},
ci0:function ci0(d){this.a=$
this.b=d
this.c=$},
chX:function chX(){},
chV:function chV(){},
asO:function asO(){this.b=this.a=$},
ci_:function ci_(){},
ci2:function ci2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
chZ:function chZ(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
chU:function chU(){},
chT:function chT(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bOk:function bOk(){},
bOl:function bOl(d){this.a=d},
hSt(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
baa:function baa(){},
cs1:function cs1(){},
bPd:function bPd(d,e){this.a=d
this.b=!1
this.c=e},
bPe:function bPe(){},
i0n(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avL(d){var w=0,v=B.j(x.H),u
var $async$avL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f2t?2:4
break
case 2:w=5
return B.b(A.kf.h2("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avL)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kf.h2("SystemChrome.setEnabledSystemUIOverlays",C.i0n(null),u),$async$avL)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avL,v)},
avO:function avO(d,e){this.a=d
this.b=e},
a8t:function a8t(d){this.a=d},
fWj(d,e){return new C.aVQ(e,d,null)},
aVQ:function aVQ(d,e,f){this.e=d
this.c=e
this.a=f},
aAF:function aAF(d,e,f,g,h){var _=this
_.ag=d
_.ak=e
_.aa$=f
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
i33(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fvV(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bl(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fvV:function fvV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
any(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$any=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agY("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$any)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.db(s,x.f)
t=B.cD(t,new C.c_0(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c_1())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$any,v)},
anA(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.any(),$async$anA)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.T(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nr("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ah(),"savedAt",l],t,q),null),$async$anA)
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
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],t,q),null),$async$anA)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anA,v)},
c_2(d){return C.hDv(d)},
hDv(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c_2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agY("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hR),$async$c_2)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VZ(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ab(m)
$.am.$1("[admin slides vault] load "+d+": "+B.u(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c_2,v)},
anz(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.any(),$async$anz)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nv(r,new C.c_3(d))
w=4
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$anz)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPo("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anz)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anz,v)},
c_0:function c_0(){},
c_1:function c_1(){},
c_3:function c_3(d){this.a=d},
id1(d,e,f){return B.bR(A.K,null,new C.fM5(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fM5:function fM5(d,e,f){this.a=d
this.b=e
this.c=f},
a0T:function a0T(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJ3:function aJ3(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f8T:function f8T(d,e){this.a=d
this.b=e},
f8X:function f8X(d){this.a=d},
f8Y:function f8Y(d){this.a=d},
f8Z:function f8Z(d,e,f){this.a=d
this.b=e
this.c=f},
f8U:function f8U(d){this.a=d},
f8V:function f8V(d){this.a=d},
f8W:function f8W(d,e){this.a=d
this.b=e},
f8O:function f8O(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8N:function f8N(d){this.a=d},
f8P:function f8P(d){this.a=d},
f8Q:function f8Q(d){this.a=d},
f92:function f92(d,e){this.a=d
this.b=e},
f91:function f91(d,e){this.a=d
this.b=e},
f8S:function f8S(d,e,f){this.a=d
this.b=e
this.c=f},
f8R:function f8R(d,e,f){this.a=d
this.b=e
this.c=f},
f9_:function f9_(d,e){this.a=d
this.b=e},
f90:function f90(d,e){this.a=d
this.b=e},
f95:function f95(d){this.a=d},
f96:function f96(d,e){this.a=d
this.b=e},
f94:function f94(d,e){this.a=d
this.b=e},
f93:function f93(){},
hjZ(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.db(w,x.f)
v=B.cD(v,new C.fg6(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fg7(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1S(d){return C.i4j(d)},
i4j(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1S=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fyK(n)
t=4
j=m
i=C
w=7
return B.b(B.a2r("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1S)
case 7:j.$1(i.hjZ(f))
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
return B.b(B.ay(),$async$a1S)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hjZ(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a_<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fgf(d),$async$a1S)
case 13:p=j.C(new i.a_(h,new g.fyI(f),o),o.k("J.E"))
A.d.aZ(p,new C.fyJ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1S,v)},
ahy(d,e){return C.icH(d,e)},
icH(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahy=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fLA(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahq("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahy)
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
return B.b(B.ay(),$async$ahy)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahy)
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
return B.i($async$ahy,v)},
fgf(d){return C.hTQ(d)},
hTQ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fgf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$fgf)
case 7:r=f
q=r.tg("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kH(q,B.S(q).c)
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
return B.i($async$fgf,v)},
ago(d,e){return C.i2W(d,e)},
i2W(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ago=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$ago)
case 6:s=g
r=B.aX(x.N)
q=s.tg("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$ago)
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
return B.b(C.a1S(d),$async$ago)
case 8:n=g
J.nv(n,new C.fvz(e))
w=9
return B.b(C.ahy(d,n),$async$ago)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ago,v)},
id6(d,e){return B.a5(d,!1).cm(B.ea(new C.fMr(e),!0,null,x.H))},
hPB(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cHt())},
op:function op(d,e,f){this.a=d
this.b=e
this.c=f},
fg6:function fg6(){},
fg7:function fg7(){},
fyK:function fyK(d){this.a=d},
fyI:function fyI(d){this.a=d},
fyJ:function fyJ(){},
fLA:function fLA(){},
fvz:function fvz(d){this.a=d},
fMr:function fMr(d){this.a=d},
YD:function YD(d,e){this.c=d
this.a=e},
axE:function axE(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cHt:function cHt(){},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHy:function cHy(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHx:function cHx(){},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHw:function cHw(d){this.a=d},
cHB:function cHB(){},
cHu:function cHu(d,e){this.a=d
this.b=e},
cHC:function cHC(){},
cHp:function cHp(d){this.a=d},
cHn:function cHn(d){this.a=d},
cHo:function cHo(d){this.a=d},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHm:function cHm(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHj:function cHj(d,e){this.a=d
this.b=e},
cHk:function cHk(d){this.a=d},
cHs:function cHs(){},
cHr:function cHr(d){this.a=d},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHh:function cHh(d,e){this.a=d
this.b=e},
cHg:function cHg(d,e){this.a=d
this.b=e},
cHD:function cHD(d){this.a=d},
YB:function YB(d,e,f){this.c=d
this.d=e
this.a=f},
aEW:function aEW(d,e,f){this.a=d
this.b=e
this.c=f},
axA:function axA(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cGK:function cGK(d){this.a=d},
cGJ:function cGJ(d){this.a=d},
cGM:function cGM(d,e,f){this.a=d
this.b=e
this.c=f},
cGU:function cGU(){},
cGV:function cGV(d){this.a=d},
cGN:function cGN(d,e,f){this.a=d
this.b=e
this.c=f},
cGL:function cGL(d,e){this.a=d
this.b=e},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGQ:function cGQ(d,e){this.a=d
this.b=e},
cGR:function cGR(d,e){this.a=d
this.b=e},
cGO:function cGO(d){this.a=d},
cGT:function cGT(d){this.a=d},
cGS:function cGS(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cGW:function cGW(d,e){this.a=d
this.b=e},
cGX:function cGX(d,e){this.a=d
this.b=e},
cGY:function cGY(d,e){this.a=d
this.b=e},
cGZ:function cGZ(d,e){this.a=d
this.b=e},
axC:function axC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i6E(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ek(v,x.cK).bB(new C.fDe(),x.H).eR(new C.fDf())}}else if(s)C.hlq()}catch(t){}},
hlq(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ek(v,x.cK).eR(new C.fkw())}catch(u){}},
i6H(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fDe:function fDe(){},
fDf:function fDf(){},
fkw:function fkw(){},
hq1(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eh(v,w,"").split(":"))},
hpZ(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l8)return null
return A.a.b6(w,14)},
h3O(d){var w
if(d.b!==D.l8)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b6(w,21)},
i76(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hq2(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i71(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l3(0,f)
t=x.N
u=B.cD(u,new C.fEd(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l3(0,f),u=new B.JJ(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Rr(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Rr(A.a.b6(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cG(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i7_(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.aZ(q,new C.fEc())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQk(w,u,s,0)}return w},
i73(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4m:$.hwO(),s=x.N,r=B.U(s,s)
for(s=t.gdL(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hq_(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fh8(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hq1(q)===e)return q}return null},
i74(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b6(v,u)
return A.d.gI(D.GU).a},
i75(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeg(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeg(0,0,0)
v=C.fh8(b6,b0)
u=C.fh8(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i73(b2,C.i71(C.hq_(b2),v.r))
if(s.a!==0){u.r=C.i7_(C.hq_(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hq1(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fh8(b6,n)
i=C.fh8(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.h3O(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hpZ(a8)===a0||C.h3O(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QZ(a1,new C.fEj(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j2
$.j2=a9+1
A.d.L(a1,new C.eM(""+1000*a6+"_"+a9,D.l8,a2,a3,a4,a5,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,d.at,D.bh,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.T(Date.now(),0,!1)
return new B.aeg(k,t,e)},
i70(d){var w=C.i74(d)
if(d.w==="hati_kuhowa")return C.hpm("",w)
return C.hpl("",w)},
fEd:function fEd(){},
fEc:function fEc(){},
fEj:function fEj(d){this.a=d},
hl9(){var w=new B.T(Date.now(),0,!1),v=new C.fjz()
return B.u(v.$1(B.bS(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
h3X(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fFb(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l8&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hqg(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fFb(d)
w=B.bi(u)
if(w==null)return!C.fFb(d)
return new B.T(Date.now(),0,!1).a6().d_(w.a6().bS(18e9))},
i7M(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.T(Date.now(),0,!1).a6().ac()},
hHy(d){return A.a.i(d).toLowerCase()},
apQ(d){return C.hHA(d)},
hHA(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$apQ)
case 7:r=f
p=r.tg("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.ibj(),B.S(o).k("M<1,m>")).c0(0,new C.cab())
o=B.dd(o,o.$ti.k("J.E"))
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
return B.i($async$apQ,v)},
apP(d,e){return C.hHz(d,e)},
hHz(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apQ(d),$async$apP)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apP)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apP)
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
return B.i($async$apP,v)},
apR(d,e){return C.hHB(d,e)},
hHB(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apQ(d),$async$apR)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apR)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apR)
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
return B.i($async$apR,v)},
Vg(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vg=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fXP&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$Vg)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aL(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jz(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VZ(B.a2(f.a(n.b),e,a0)))}$.a7g=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.ab(a2)
$.am.$1("[kiapo] local load: "+B.u(m))
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
return B.b(B.c3(),$async$Vg)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u5("civic_hati_kiapo_uongozi",null,A.ei),$async$Vg)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jz(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VZ(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a7g.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a7g.n(0,i.a,i.b)}w=20
return B.b(C.apS(),$async$Vg)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.ab(a3)
$.am.$1("[kiapo] cloud load: "+B.u(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fXP=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vg,v)},
apS(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apS=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$apS)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7g,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ah())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apS)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ab(l)
$.am.$1("[kiapo] local save: "+B.u(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$apS,v)},
b_k(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vg(!1),$async$b_k)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7g.h(0,t)
r=s==null?null:s.hK()
if(r==null){u=null
w=1
break}u=C.bCa(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_k,v)},
a7h(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7h=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.T(Date.now(),0,!1)
o=a1.hK()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7g.n(0,d,o)
$.fXP=!0
w=3
return B.b(C.apS(),$async$a7h)
case 3:w=4
return B.b(B.c3(),$async$a7h)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7g,n=new B.cI(n,B.a3(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ah())}w=9
return B.b(B.nr("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.T(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a7h)
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
$.am.$1("[kiapo] cloud save: "+B.u(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7h,v)},
apT(d){var w=0,v=B.j(x.T),u,t,s
var $async$apT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a5D(A.eF),$async$apT)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fe(),$async$apT)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_j(t,d),$async$apT)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apT,v)},
b_j(d,e){return C.hHC(d,e)},
hHC(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_j=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$b_j)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.im("media")
w=8
return B.b(p.x3(q,new Uint8Array(B.cg(d)),D.bB5),$async$b_j)
case 8:n=p.CC(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ab(k)
$.am.$1("[kiapo] video upload: "+B.u(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b_j,v)},
KA(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.es(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cR,l,m,n)},
fiP(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.es(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
h0T(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.es(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cR,g,e,f)},
fin(d,e,f,g){return C.fiP(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
h0U(d,e,f,g,h,i,j,k){var w=C.cB()
return C.es(A.qy,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bo,A.a7,"",h,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cR,g,e,f)},
hl8(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eh(v,w,"").split(":"))},
bCa(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hl8(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l8&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hK()}h=C.h3s(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BL(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hl8(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l8&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.br(a1.z,new C.fDc(a2))}else A.d.br(a1.z,new C.fDd())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fFb(a0))a0.ax=a6.f.a6().ac()
return a0},
h3s(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fFZ(D.a5n),l=C.cB(),k=x.u,j=B.a([C.es(A.bi,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a7,"",1,C.cB(),m,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cn,D.lA,1,0,0)],k),i=B.a([],k)
i.push(C.KA("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KA("TAREHE:",A.bi,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h0T("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hl9()))
i.push(C.fin(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KA("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KA("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fiP(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h0U("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h0U("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h0U("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fiP(268435456,0.175,D.bh,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KA("VIDEO YA KIAPO",A.bi,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.es(A.bi,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a7,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cn,D.lA,0.77,0.115,0.492))
i.push(C.KA("Rais Anayeapa:",A.bi,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KA("Jina:",A.bi,p,13,A.bo,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h0T("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fin(0.195,0.7130000000000001,0.62,n))
i.push(C.KA("Sahihi:",A.bi,p,13,A.bo,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.es(A.bi,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a7,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,0.38,0.21500000000000002,0.73))
i.push(C.fin(0.21500000000000002,0.795,0.38,n))
i.push(C.KA("Tarehe:",A.bi,p,13,A.bo,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h0T("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hl9()))
i.push(C.fin(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fiP(0,0.032,D.bh,o,1,"state_box",0.72,0.14,0.875),C.KA("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rx(4294967035,t,0,0,j,l,D.qm,"","",u,D.df)
return C.BL(t,t,t,t,D.oi,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agz(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agz=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.eYf)
w=1
break}w=3
return B.b(C.Vg(!0),$async$agz)
case 3:w=4
return B.b(C.b_k(p),$async$agz)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hqg(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.beI,null,new C.fy5(p),f,!0,!0,!1,A.lB,!1,!1,x.N),$async$agz)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fy6(),f,null,!0,!0,x.y),$async$agz)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h3s(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h3s(p))
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
fjz:function fjz(){},
cab:function cab(){},
fDc:function fDc(d){this.a=d},
fDd:function fDd(){},
fy5:function fy5(d){this.a=d},
fy3:function fy3(d){this.a=d},
fy4:function fy4(d){this.a=d},
fy6:function fy6(){},
fy1:function fy1(d){this.a=d},
fy2:function fy2(d){this.a=d},
aqo:function aqo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDI:function aDI(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ec8:function ec8(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec9:function ec9(d){this.a=d},
eca:function eca(d){this.a=d},
wB(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.es(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bh,4280172719,2,d,0,0,"",D.cn,D.cR,l,m,n)},
hkN(d,e,f){var w=4291404327
return B.a([C.qb(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.qb(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fhO(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qb(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qb(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qb(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qb(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.es(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
fhN(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.es(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,l,0,0,"",D.cn,D.cR,g,e,f)},
bzC(d,e,f,g){return C.qb(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hkM(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qb(0,0.036,D.bh,h,1.4,"banner_box_"+d,w,v,e),C.wB(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hq0(){var w=new B.T(Date.now(),0,!1),v=new C.fEi()
return B.u(v.$1(B.bS(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
hkO(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wB(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fhN("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bzC(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wB("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.es(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a7,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,s,t,g-0.004),C.bzC(t,g+0.044,s,w)],x.u)},
ah_(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dfy,D.ckg,D.d7X,D.d9N],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
h0a(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fFZ(d.d),v=B.a([C.es(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a7,"",1,C.cB(),w,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lA,1,0,0)],x.u)
A.d.v(v,C.hWf(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hWf(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wB("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hkN(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hkN(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fhO(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fhO(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wB("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qb(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.qb(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wB("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qb(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qb(b9,0.016,D.l9,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qb(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wB("TAREHE:",A.bi,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fhN("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hq0()),C.bzC(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wB(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qb(c0,0.0026,D.bh,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qb(c3.e,0.138,D.bh,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.es(A.bi,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bo,A.cx,"",0.128,s,a9,"","",0,!1,"",0,D.bh,b3,2,c5,0,0,"",D.cn,D.cR,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qb(0,0.036,D.bh,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.es(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bh,b3,2,c7,0,0,"",D.cn,D.cR,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hkM(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wB(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fhN("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j2
$.j2=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j2
$.j2=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eM(""+1000*i+"_"+h,D.cR,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bi,a9,D.bh,b2,b3,2,0,!1,s,0,D.cn,0,"","","","","",!1,0),j,new C.eM(""+1000*f+"_"+e,D.f5,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cn,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j2
$.j2=p+1
i=Date.now()
h=$.j2
$.j2=h+1
g=Date.now()
f=$.j2
$.j2=f+1
e=Date.now()
a3=$.j2
$.j2=a3+1
A.d.v(d,B.a([new C.eM(""+1000*s+"_"+p,D.cR,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dN,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*i+"_"+h,D.f5,a1,a2,0.046,0.025875,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.bh,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*g+"_"+f,D.cR,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*e+"_"+a3,D.f5,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.bh,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cn,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hkM("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a5c||w===D.a5e||w===D.a5b||w===D.a5d){w=t-0.008
A.d.v(c2,C.fhO(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fhO(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qb(0,a4,D.bh,c0,1.3,"wit_table_border",0.82,0.09,t),C.qb(c0,a4,D.bh,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qb(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wB("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wB("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hkO("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hkO("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qb(0,0.11,D.bh,c0,1.2,"mw_box",0.82,0.09,t),C.wB("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wB("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fhN("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bzC(0.215,p,0.3116,b5),C.wB("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.es(A.bi,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a7,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,0.3161999999999999,0.5738,s-0.044),C.bzC(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qb(0,0.032,D.bh,c0,1,"state_box",0.7,0.15,a8),C.wB("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i72(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h46(d.d),p=new C.fEe(s),o=new C.fEf(s),n=d.z,m=n===D.a5c||n===D.a5e||n===D.a5b||n===D.a5d,l=n===D.aFR||n===D.a5f||n===D.aFS,k=B.bW(0,B.fQ(q,A.A,t,t,A.cg,A.bW,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5f?26:16
i.push(new C.fEh().$1$size(w))}if(n===D.aFT)i.push(D.fDt)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hH,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aP0,p.$1$w(0.9),D.aP0,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.ba0,t,n,w,t,t,A.n),t,t,t,t,A.ajo,t,t,t))
i.push(A.am)
i.push(new C.fEg(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.e5(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mm,new B.ci(A.aP,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.dc,new B.bB(1,A.bg,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b2,A.r,B.a([k,new B.D(A.ai_,B.x(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hpl(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ah_(e,t)
if(r==null)r=A.d.gI(D.GU)
w=C.cB()
v=C.rx(r.e,t,0,0,C.h0a(r,0.165,y.O,D.dao,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qm,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BL(t,t,t,t,D.oi,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hpm(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ah_(e,t)
if(r==null)r=A.d.gI(D.GU)
w=C.cB()
v=C.rx(r.e,t,0,0,C.h0a(r,0.165,y.f,D.d61,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qm,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BL(t,t,t,t,D.oi,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bDw(d,e,f){var w=0,v=B.j(x.T),u
var $async$bDw=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fPT(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDw,v)},
agA(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agA=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fy9(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Ly,null,new C.fya(p),d,!0,!0,!1,A.lB,!1,!1,x.N),$async$agA)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDw(d,"Hati ya Kuhowa",D.GU),$async$agA)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agA)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hpl(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agA,v)},
agB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fyd(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Ly,null,new C.fye(p),d,!0,!0,!1,A.lB,!1,!1,x.N),$async$agB)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDw(d,"Hati ya Kuhoweya",D.GU),$async$agB)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agB)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hpm(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agB,v)},
agC(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fyh(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Ly,null,new C.fyi(m),d,!0,!0,!1,A.lB,!1,!1,x.N),$async$agC)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDw(d,"Malipo ya Awamu ya Mahari",D.QO),$async$agC)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agC)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ah_(s,D.QO)
if(q==null)q=A.d.gI(D.QO)
n=C.cB()
p=C.rx(q.e,null,0,0,C.h0a(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d0X,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qm,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.df)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BL(null,null,null,null,D.oi,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agC,v)},
xz:function xz(d,e){this.a=d
this.b=e},
jo:function jo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fEi:function fEi(){},
fEe:function fEe(d){this.a=d},
fEg:function fEg(d){this.a=d},
fEh:function fEh(){},
fEf:function fEf(d){this.a=d},
fPT:function fPT(d,e){this.a=d
this.b=e},
adl:function adl(d,e,f){this.c=d
this.d=e
this.a=f},
dZM:function dZM(d,e,f){this.a=d
this.b=e
this.c=f},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZK:function dZK(d,e){this.a=d
this.b=e},
acK:function acK(d,e,f){this.c=d
this.d=e
this.a=f},
fy9:function fy9(){},
fya:function fya(d){this.a=d},
fy7:function fy7(d){this.a=d},
fy8:function fy8(d){this.a=d},
fyd:function fyd(){},
fye:function fye(d){this.a=d},
fyb:function fyb(d){this.a=d},
fyc:function fyc(d){this.a=d},
fyh:function fyh(){},
fyi:function fyi(d){this.a=d},
fyf:function fyf(d){this.a=d},
fyg:function fyg(d){this.a=d},
KD(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.es(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cR,k,l,m)},
CM(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.es(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
hlt(d,e,f){return C.CM(0,0.002,D.fs,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
bzM(d,e,f,g,h){return B.a([C.CM(4294967288,0.032,D.bh,4291404327,1.15,"pill_"+d,g,f,e),C.KD(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h0Y(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CM(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.CM(h,0.016,D.l9,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CM(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1f(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KD(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.es(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cR,t,u,g-0.002),C.hlt(u,g+0.018,t)],x.u)},
hlu(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CM(h,0.028,D.bh,h,0,"chv_"+d,g,e,f),C.CM(w,0.024,D.l9,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CM(w,0.024,D.l9,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KD(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzL(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KD("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.es(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a7,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,v,w,f-0.006),C.hlt(w,f+0.016,v)],x.u)},
h47(d){var w,v
for(w=0;w<19;++w){v=D.R2[w]
if(v.a===d)return v}return null},
i9j(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ah_(A.a.b6(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ah_(A.a.b6(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b6(k,18)
w=C.ah_(u,D.QO)
v=w==null?l:w.d
if(v==null){w=C.ah_(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h47(A.a.b6(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hmi.a8(0)
$.hmv.a8(0)
t=C.fFZ(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h5c(d){var w=0,v=B.j(x.T),u
var $async$h5c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fRl(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5c,v)},
xC:function xC(d,e){this.a=d
this.b=e},
nK:function nK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bje:function bje(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fRl:function fRl(){},
ado:function ado(d){this.a=d},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehm:function ehm(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
af4:function af4(d,e,f){this.c=d
this.d=e
this.a=f},
h46(d){return $.hmv.ca(0,d,new C.fG0(d))},
fFZ(d){return $.hmi.ca(0,d,new C.fG_(d))},
fC(d){return B.fVm(d>>>16&255,d>>>8&255,d&255,255)},
hZk(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hnA(4294570461,4293910718,4284234270,u)
case 1:return C.hnA(4294635750,4293975240,t,4292912216)
case 2:w=C.fgn(s,4294505966,r)
C.bzw(w,14,16,p)
C.kw(w,8,9,464,836,u,1.2)
C.CI(w,2,2,1,1,u,10)
C.CI(w,478,2,-1,1,u,10)
C.CI(w,2,852,1,-1,u,10)
C.CI(w,478,852,-1,-1,u,10)
return w
case 3:return C.fgn(4294966515,4294373082,4289102906)
case 4:return C.hU4(C.fgn(4294376440,4293653998,4290287194))
case 5:w=C.fgn(4294965238,4294437098,4288444980)
C.bzw(w,14,16,4283043359)
C.kw(w,6,7,468,840,u,1)
C.kw(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,n,4294175448)
C.rU(v,n)
C.kw(v,24,24,432,806,4286209070,1)
C.a12(v,12,12,468,12,o,3,20)
C.a12(v,12,842,468,842,o,3,20)
C.a12(v,12,12,12,842,o,3,20)
C.a12(v,468,12,468,842,o,3,20)
return v
case 7:return C.hS9(4294440434,4293518297,4280228630,r)
case 8:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,m,4293911504)
C.rU(v,m)
C.kw(v,28,28,424,798,l,1)
C.fpK(v,28,28,l,k)
C.fpK(v,452,28,l,k)
C.fpK(v,28,826,l,k)
C.fpK(v,452,826,l,k)
return v
case 9:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,j,4294111986)
C.rU(v,j)
C.kw(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fC(p),0,13,0,853)
return v
case 10:return C.hW1(i,4294173372)
case 11:return C.hX8(4294439140,4293449662)
case 12:return C.hS1(h,4294239432)
case 13:return C.hWA(4294244340,4293193448)
case 14:return C.i_V(4294505710,4293780694)
case 15:return C.ffk(4294966259,4294439138,o,p,q)
case 16:return C.ffk(4294966776,4294178544,o,g,g)
case 17:return C.ffk(4294965493,4294504170,o,4286200650,q)
case 18:return C.ffk(4294966519,4294373862,o,p,p)
case 19:return C.hV9()
case 20:return C.hVa()
case 21:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,h,4293976768)
C.rU(v,h)
C.bzw(v,14,16,p)
B.iM(v,!0,C.fC(u),4,475,4,9)
B.iM(v,!0,C.fC(u),4,475,844,849)
B.iM(v,!0,C.fC(u),4,9,4,849)
B.iM(v,!0,C.fC(u),470,475,4,849)
C.a12(v,10,12,470,12,u,2,16)
C.a12(v,10,842,470,842,u,2,16)
C.a12(v,10,12,10,842,u,2,18)
C.a12(v,470,12,470,842,u,2,18)
C.CI(v,2,2,1,1,t,10)
C.CI(v,478,2,-1,1,t,10)
C.CI(v,2,852,1,-1,t,10)
C.CI(v,478,852,-1,-1,t,10)
C.kw(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,s,4294438872)
C.rU(v,s)
C.kw(v,14,16,452,822,o,2.2)
C.kw(v,22,24,436,806,o,1)
C.h2i(v,!1,!1,o,p,p,36,14,16)
C.kM(v,240,20,7,o,!0)
C.kM(v,240,834,7,o,!0)
C.kM(v,18,427,7,o,!0)
C.kM(v,462,427,7,o,!0)
return v
case 23:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,i,4293910712)
C.rU(v,i)
B.iM(v,!0,C.fC(u),0,479,0,20)
B.iM(v,!0,C.fC(u),0,479,834,853)
B.iM(v,!0,C.fC(u),0,20,0,853)
B.iM(v,!0,C.fC(u),460,479,0,853)
B.iM(v,!0,C.fC(f),5,474,5,9)
B.iM(v,!0,C.fC(f),5,474,844,848)
B.iM(v,!0,C.fC(f),5,9,5,848)
B.iM(v,!0,C.fC(f),470,474,5,848)
C.kw(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yv(v,e,4294174404)
C.rU(v,e)
C.bzw(v,14,16,p)
B.iM(v,!0,C.fC(u),3,476,3,8)
B.iM(v,!0,C.fC(u),3,476,845,850)
B.iM(v,!0,C.fC(u),3,8,3,850)
B.iM(v,!0,C.fC(u),471,476,3,850)
C.kw(v,9,10,462,834,t,1)
C.kw(v,14,16,452,822,u,1.8)
C.kM(v,240,8,4,u,!0)
C.kM(v,240,846,4,u,!0)
C.kM(v,8,427,4,u,!0)
C.kM(v,472,427,4,u,!0)
C.kM(v,8,8,3,t,!0)
C.kM(v,472,8,3,t,!0)
C.kM(v,8,846,3,t,!0)
C.kM(v,472,846,3,t,!0)
return v}},
yv(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kO(d,!1,A.dd,new B.S4(s),r,A.cZ,1,0,w-1,k,k);++k}},
rU(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eE()
n.dt(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.av(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.av(v==null?0:v)
v=d.a
s=v==null?o:v.dU(u,t,o)
if(s==null)s=new B.iH()
v=A.o.D(A.k.N(s.gb7(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbd(s))-2,0,255)
p=d.a
if(p!=null)p.jS(u,t,v,r,q,255)}},
kw(d,e,f,g,h,i,j){var w,v=null,u=C.fC(i),t=e+g
B.kO(d,!0,A.dd,u,v,A.cZ,j,e,t,f,f)
w=f+h
B.kO(d,!0,A.dd,u,v,A.cZ,j,e,t,w,w)
B.kO(d,!0,A.dd,u,v,A.cZ,j,e,e,f,w)
B.kO(d,!0,A.dd,u,v,A.cZ,j,t,t,f,w)},
CI(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kO(d,!0,A.dd,C.fC(i),u,A.cZ,2,e,e+g*j,f,f)
B.kO(d,!0,A.dd,C.fC(i),u,A.cZ,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kO(d,!0,A.dd,C.fC(i),u,A.cZ,1,w,e+g*t,v,v)
B.kO(d,!0,A.dd,C.fC(i),u,A.cZ,1,w,w,v,f+h*t)},
hnA(d,e,f,g){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yv(v,d,e)
C.rU(v,d)
B.iM(v,!0,C.fC(f),0,479,0,28)
B.iM(v,!0,C.fC(f),0,479,826,853)
B.iM(v,!0,C.fC(f),0,28,0,853)
B.iM(v,!0,C.fC(f),452,479,0,853)
C.kw(v,5,5,470,844,g,1.1)
C.kw(v,28,28,424,798,g,1.6)
C.CI(v,2,2,1,1,g,11)
C.CI(v,478,2,-1,1,g,11)
C.CI(v,2,852,1,-1,g,11)
C.CI(v,478,852,-1,-1,g,11)
return v},
fgn(d,e,f){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yv(v,d,e)
C.rU(v,d)
C.kw(v,14,16,452,822,f,1.6)
C.kw(v,20,22,440,810,f,0.8)
return v},
bzw(d,e,f,g){var w,v=C.fC(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hU4(d){var w,v,u=4291404327
C.bzw(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kM(d,w,8,3,u,!0)
C.kM(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kM(d,7,v,3,u,!0)
C.kM(d,473,v,3,u,!0)}return d},
fsM(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1P(d,C.fC(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1P(d,C.fC(k),t)
t=A.k.V(n*0.39)
C.kM(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kM(d,e+g*t,f+h*3,4,k,!0)
C.kM(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kM(d,e+g*t,f,5,k,!0)
C.kM(d,e,f+h*t,5,k,!0)}},
h2i(d,e,f,g,h,i,j,k,l){var w,v
C.fsM(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fsM(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fsM(d,k,v,1,-1,e,f,g,h,i,j)
C.fsM(d,w,v,-1,-1,e,f,g,h,i,j)},
a12(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l4(d,!0,A.dd,new B.r2(p),null,A.cZ,j,r,q)}},
frS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.dd,new B.r2(o),null,A.cZ,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.dd,new B.r2(o),null,A.cZ,1.4,q,q,p,p+h*r)}},
hS9(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ht(o,o,A.cd,0,A.e4,854,o,0,3,o,A.cd,480,!1)
C.yv(n,d,e)
C.rU(n,d)
C.kw(n,20,20,440,814,f,1.2)
C.frS(n,0,0,1,1,g)
C.frS(n,480,0,-1,1,g)
C.frS(n,0,854,1,-1,g)
C.frS(n,480,854,-1,-1,g)
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
B.kO(n,!0,A.dd,new B.r2(p),o,A.cZ,1.2,240,r,60,q)}return n},
fpK(d,e,f,g,h){var w
C.fvW(d,!0,C.fC(g),13,e,f)
C.fvW(d,!0,C.fC(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1P(d,C.fC(h),w)},
kM(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1P(d,C.fC(h),r)
return}B.kO(d,!0,A.dd,C.fC(h),w,A.cZ,1,e,u,v,f)
B.kO(d,!0,A.dd,C.fC(h),w,A.cZ,1,u,e,f,t)
B.kO(d,!0,A.dd,C.fC(h),w,A.cZ,1,e,s,t,f)
B.kO(d,!0,A.dd,C.fC(h),w,A.cZ,1,s,e,f,v)},
ffj(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1P(d,C.fC(i),v)
v=e+g*14
w=f+h*14
C.kM(d,v,w,6,j,!0)
C.kM(d,v,w,3,i,!0)},
ffk(d,e,f,g,h){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yv(v,d,e)
C.rU(v,d)
C.kw(v,18,18,444,818,f,2)
C.kw(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fC(h),28,451,28,34)
C.ffj(v,18,18,1,1,g,f)
C.ffj(v,462,18,-1,1,g,f)
C.ffj(v,18,836,1,-1,g,f)
C.ffj(v,462,836,-1,-1,g,f)
return v},
hV9(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ht(v,v,A.cd,0,A.e4,854,v,0,3,v,A.cd,480,!1)
C.yv(r,u,4294240980)
C.rU(r,u)
C.kw(r,10,12,460,830,t,3.2)
C.kw(r,18,20,444,814,s,1.2)
C.kw(r,24,26,432,802,t,1.8)
C.h2i(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kM(r,w,16,3,t,!0)
C.kM(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kM(r,16,w,3,t,!0)
C.kM(r,464,w,3,t,!0)}return r},
hVa(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ht(t,t,A.cd,0,A.e4,854,t,0,3,t,A.cd,480,!1)
C.yv(p,s,4294373080)
C.rU(p,s)
C.kw(p,16,18,448,818,r,2.4)
C.kw(p,24,26,432,802,4286209044,1)
w=new C.fhF(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h2i(p,!1,!0,r,q,q,34,16,18)
return p},
bAc(d,e,f,g,h,i){B.iM(d,!0,C.fC(i),e,e+g,f,f+h)},
bB1(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kO(d,!1,A.dd,new B.S4(i),null,A.cZ,1,e,w,l,l)}},
hW0(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.am(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kO(d,!1,A.dd,new B.r2(r),null,A.cZ,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.am(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kO(d,!1,A.dd,new B.r2(r),null,A.cZ,1,t,t,f,s);++q}},
hW1(d,e){var w,v,u=null,t=B.ht(u,u,A.cd,0,A.e4,854,u,0,3,u,A.cd,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hW0(t,v,w,30,D.cUG,(A.o.am(v,30)+A.o.am(w,30)&1)===0)
C.bAc(t,44,44,392,766,d)
C.bB1(t,44,44,392,766,d,e)
C.rU(t,d)
C.kw(t,44,44,392,766,4292128567,2.2)
C.kw(t,50,50,380,754,4279898632,0.8)
return t},
hX7(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kM(d,e,f,7,h,!0)
C.kM(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kO(d,!0,A.dd,C.fC(h),o,A.cZ,1.6,w,u,v,t)
B.kO(d,!0,A.dd,C.fC(h),o,A.cZ,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kO(d,!0,A.dd,new B.r2(p),o,A.cZ,1.2,w,v,q,q)}break
default:B.kO(d,!0,A.dd,C.fC(h),o,A.cZ,1.5,e-8,e+8,f,f)
B.kO(d,!0,A.dd,C.fC(h),o,A.cZ,1.5,e,e,f-8,f+8)
B.l4(d,!0,A.dd,C.fC(h),o,A.cZ,2,e,f)}},
hX8(d,e){var w,v,u,t,s=null,r=B.ht(s,s,A.cd,0,A.e4,854,s,0,3,s,A.cd,480,!1)
B.iM(r,!0,C.fC(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hX7(r,u,v,w,4292391514)}C.bAc(r,46,46,388,762,d)
C.bB1(r,46,46,388,762,d,e)
C.rU(r,d)
C.kw(r,46,46,388,762,4291404327,1.8)
return r},
hj0(d,e,f,g){C.fvW(d,!0,C.fC(g),16,e,f)
C.fvW(d,!0,C.fC(g),11,e,f)
C.kM(d,e,f,6,g,!0)
B.kO(d,!0,A.dd,C.fC(g),null,A.cZ,1.3,e-14,e+14,f,f)
B.kO(d,!0,A.dd,C.fC(g),null,A.cZ,1.3,e,e,f-14,f+14)},
hS1(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ht(v,v,A.cd,0,A.e4,854,v,0,3,v,A.cd,480,!1)
B.iM(s,!0,C.fC(4280948752),0,479,0,853)
B.iM(s,!0,C.fC(u),0,479,0,78)
B.iM(s,!0,C.fC(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hj0(s,w,39,t)
C.hj0(s,w,815,t)}C.bAc(s,38,92,404,670,d)
C.bB1(s,38,92,404,670,d,e)
C.rU(s,d)
C.kw(s,38,92,404,670,t,1.8)
C.kw(s,45,99,390,656,4287322667,0.8)
return s},
hWz(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1P(d,new B.r2(o),p)}B.l4(d,!0,A.dd,C.fC(4292128567),null,A.cZ,3,e,f)},
hWA(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ht(s,s,A.cd,0,A.e4,854,s,0,3,s,A.cd,480,!1)
C.yv(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kO(q,!0,A.dd,new B.r2(v),s,A.cZ,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kO(q,!0,A.dd,new B.r2(u),s,A.cZ,1.1,v,v,0,853)}B.iM(q,!0,C.fC(r),0,479,0,70)
B.iM(q,!0,C.fC(r),0,479,798,853)
for(t=0;t<5;++t)C.hWz(q,70+t*85,48,4292128567)
C.bAc(q,48,78,384,712,d)
C.bB1(q,48,78,384,712,d,e)
C.rU(q,d)
C.kw(q,48,78,384,712,4291404327,1.6)
return q},
i_V(d,e){var w,v,u,t=null,s=4279970378,r=B.ht(t,t,A.cd,0,A.e4,854,t,0,3,t,A.cd,480,!1)
B.iM(r,!0,C.fC(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kM(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l4(r,!0,A.dd,new B.r2(u),t,A.cZ,1,v,w)}C.bAc(r,40,40,400,774,d)
C.bB1(r,40,40,400,774,d,e)
C.rU(r,d)
C.kw(r,40,40,400,774,4291058750,2)
C.kw(r,48,48,384,758,s,0.8)
return r},
kV:function kV(d,e){this.a=d
this.b=e},
fG0:function fG0(d){this.a=d},
fG_:function fG_(d){this.a=d},
fhF:function fhF(d){this.a=d},
fGE(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hX1(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h0R(d){var w,v,u,t=null,s=A.a.cH(d,"{"),r=A.a.oG(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aL(0,Ah.agW(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afs(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vm(null,""),$async$afs)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n7(n)
if(e==null)s=A.hG
else{r=C.hX1(e)
s=B.a([new B.a02(A.cL.gct().aK(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qT(t,d,s,"news",E.Fq),$async$afs)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.L4(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afs,v)},
bCE(d){return C.i9_(d)},
i9_(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afs(r,null),$async$bCE)
case 7:q=f
p=C.h0R(q)
if(p==null){u=d
w=1
break}o=d.aCC(p)
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
return B.i($async$bCE,v)},
hmT(d){var w,v=F.h3o(d)
v=B.aK(v,"book","newspaper")
if(F.a27(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fKz(d,e,f,g){return C.iaR(d,e,f,g)},
iaR(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fKz=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fGE(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hqp()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afs('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hmT(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fKz)
case 3:r=m.h0R(i)
if(r==null)throw B.V(y.S)
q=new C.zz(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCC(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a27(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a27(A.d.aG(t," "))==="sw"?C.bCE(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fKz,v)},
bC8(d,e,f,g,h){return C.i6C(d,e,f,g,h)},
i6C(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bC8=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fQ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hqp()
k=A.S.ao(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afs('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hmT(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bC8)
case 3:p=j.h0R(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCC(B.a2(o,x.N,x.z))
m=A.S.ao(n.ah(),null)!==A.S.ao(d.ah(),null)}else{n=d
m=!1}w=m&&F.a27(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCE(n),$async$bC8)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7V(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC8,v)},
a7V:function a7V(d,e,f){this.a=d
this.b=e
this.c=f},
idF(d,e){return B.a5(d,!1).cm(B.ea(new C.fRw(e),!0,null,x.H))},
fRw:function fRw(d){this.a=d},
VN:function VN(d,e){this.c=d
this.a=e},
aE0:function aE0(d,e,f,g,h,i,j,k){var _=this
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
ekF:function ekF(d){this.a=d},
ekE:function ekE(){},
ekG:function ekG(d){this.a=d},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekH:function ekH(){},
ekh:function ekh(d,e){this.a=d
this.b=e},
ekd:function ekd(d,e){this.a=d
this.b=e},
eko:function eko(d){this.a=d},
ekp:function ekp(d,e){this.a=d
this.b=e},
ekq:function ekq(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekk:function ekk(d,e){this.a=d
this.b=e},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekm:function ekm(d){this.a=d},
ekn:function ekn(d){this.a=d},
eki:function eki(d,e){this.a=d
this.b=e},
ekf:function ekf(d){this.a=d},
ekg:function ekg(d){this.a=d},
ekw:function ekw(d){this.a=d},
ekx:function ekx(d){this.a=d},
ekv:function ekv(d){this.a=d},
eky:function eky(d,e){this.a=d
this.b=e},
eku:function eku(d,e){this.a=d
this.b=e},
ekz:function ekz(d){this.a=d},
ekt:function ekt(d){this.a=d},
ekA:function ekA(d){this.a=d},
eks:function eks(d){this.a=d},
ekB:function ekB(d,e){this.a=d
this.b=e},
ekr:function ekr(d,e){this.a=d
this.b=e},
ekC:function ekC(d){this.a=d},
eke:function eke(d,e){this.a=d
this.b=e},
fFA(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fFA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hkw){w=1
break}r=new C.fFB()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fFA)
case 7:$.hkw=!0
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
return B.i($async$fFA,v)},
bCv(d){return A.He[B.mB(d)-1]+", "+A.p7[B.bH(d)-1]+" "+B.bS(d)+", "+B.bA(d)},
hZZ(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.djS[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h3N(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fI(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fDT(),B.S(v).k("a_<1>")))
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
continue}o=new C.fDV(j,h)
n=new C.fDU(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.am(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
h0A(d,e){var w=new C.fhf()
return A.d.cJ(e,0,new C.fhd(w))>=A.d.cJ(d,0,new C.fhe(w))},
hhF(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bE())
return u},
zz:function zz(d,e,f,g,h,i,j,k,l,m){var _=this
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
cdS:function cdS(d){this.a=d},
cdQ:function cdQ(){},
cdR:function cdR(){},
tn:function tn(d,e){this.a=d
this.b=e},
Bx:function Bx(d,e){this.a=d
this.b=e},
li:function li(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fFB:function fFB(){},
fDT:function fDT(){},
fDV:function fDV(d,e){this.a=d
this.b=e},
fDU:function fDU(d,e,f){this.a=d
this.b=e
this.c=f},
fhf:function fhf(){},
fhg:function fhg(){},
fhd:function fhd(d){this.a=d},
fhe:function fhe(d){this.a=d},
b0P:function b0P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cdT:function cdT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdU:function cdU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cdV:function cdV(d){this.a=d},
bcp:function bcp(d){this.a=d},
bco:function bco(d,e){this.b=d
this.a=e},
bu3:function bu3(d){this.a=d},
b8U:function b8U(d,e){this.b=d
this.a=e},
brx:function brx(d,e){this.b=d
this.a=e},
hsl(d,e){return B.a5(d,!1).cm(B.ea(new C.fRz(e,null),!0,null,x.E))},
fRz:function fRz(d,e){this.a=d
this.b=e},
VQ:function VQ(d,e,f){this.c=d
this.d=e
this.a=f},
aE4:function aE4(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
elR:function elR(){},
elS:function elS(d){this.a=d},
elQ:function elQ(d,e){this.a=d
this.b=e},
elE:function elE(d){this.a=d},
elF:function elF(d){this.a=d},
elL:function elL(d){this.a=d},
elM:function elM(d,e){this.a=d
this.b=e},
elJ:function elJ(d){this.a=d},
elK:function elK(d,e,f){this.a=d
this.b=e
this.c=f},
elG:function elG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elN:function elN(d,e){this.a=d
this.b=e},
elI:function elI(d,e){this.a=d
this.b=e},
elO:function elO(d){this.a=d},
elH:function elH(d,e){this.a=d
this.b=e},
elP:function elP(d,e){this.a=d
this.b=e},
bbW:function bbW(d,e,f){this.b=d
this.c=e
this.a=f},
idL(d){return B.a5(d,!1).cm(B.ea(new C.fRP(),!0,null,x.I))},
bzY(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h2_(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fRP:function fRP(){},
a_U:function a_U(d){this.a=d},
oC:function oC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFr:function aFr(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aJ=_.aF=_.aA=_.a_=_.b8=_.bi=_.y2=0
_.b2=null
_.b1=0.25
_.bb=null
_.bL=0.5
_.aI=1
_.c6=_.bF=_.bh=0
_.cL=_.c4=!1
_.c=_.a=null},
eVr:function eVr(d){this.a=d},
eUj:function eUj(d,e){this.a=d
this.b=e},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUR:function eUR(d){this.a=d},
eU2:function eU2(d){this.a=d},
eU3:function eU3(d){this.a=d},
eU0:function eU0(d){this.a=d},
eU1:function eU1(d){this.a=d},
eUA:function eUA(d,e){this.a=d
this.b=e},
eUB:function eUB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUN:function eUN(d,e,f){this.a=d
this.b=e
this.c=f},
eUM:function eUM(d,e){this.a=d
this.b=e},
eUO:function eUO(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d,e,f){this.a=d
this.b=e
this.c=f},
eUP:function eUP(d,e){this.a=d
this.b=e},
eTT:function eTT(d){this.a=d},
eTU:function eTU(d){this.a=d},
eTV:function eTV(d){this.a=d},
eTS:function eTS(){},
eTW:function eTW(d,e){this.a=d
this.b=e},
eTR:function eTR(d,e){this.a=d
this.b=e},
eTY:function eTY(){},
eTX:function eTX(d,e){this.a=d
this.b=e},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTN:function eTN(d,e){this.a=d
this.b=e},
eTZ:function eTZ(d){this.a=d},
eTP:function eTP(d,e){this.a=d
this.b=e},
eU_:function eU_(d){this.a=d},
eTO:function eTO(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e){this.a=d
this.b=e},
eVn:function eVn(d){this.a=d},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVp:function eVp(){},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVf:function eVf(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVj:function eVj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVd:function eVd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d,e){this.a=d
this.b=e},
eVm:function eVm(d){this.a=d},
eVc:function eVc(d){this.a=d},
eV_:function eV_(d){this.a=d},
eV0:function eV0(d){this.a=d},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eV1:function eV1(d){this.a=d},
eV4:function eV4(d){this.a=d},
eUY:function eUY(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV6:function eV6(d){this.a=d},
eV7:function eV7(d){this.a=d},
eV8:function eV8(d){this.a=d},
eUX:function eUX(d){this.a=d},
eV9:function eV9(d){this.a=d},
eUW:function eUW(d){this.a=d},
eVa:function eVa(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eVb:function eVb(d){this.a=d},
eV2:function eV2(d){this.a=d},
eV3:function eV3(d){this.a=d},
eUE:function eUE(d){this.a=d},
eUD:function eUD(d){this.a=d},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUG:function eUG(d){this.a=d},
eUw:function eUw(d){this.a=d},
eUv:function eUv(d){this.a=d},
eUx:function eUx(d){this.a=d},
eUu:function eUu(d){this.a=d},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUs:function eUs(d,e){this.a=d
this.b=e},
eUa:function eUa(d){this.a=d},
eUb:function eUb(d){this.a=d},
eUc:function eUc(d){this.a=d},
eUd:function eUd(d){this.a=d},
eUe:function eUe(d){this.a=d},
eUf:function eUf(d){this.a=d},
eUg:function eUg(d){this.a=d},
eUh:function eUh(d){this.a=d},
eUi:function eUi(d){this.a=d},
eTw:function eTw(d){this.a=d},
eTx:function eTx(d){this.a=d},
eTy:function eTy(d){this.a=d},
eTz:function eTz(d){this.a=d},
eTA:function eTA(d){this.a=d},
eTv:function eTv(d){this.a=d},
eTB:function eTB(d){this.a=d},
eTC:function eTC(d){this.a=d},
eU4:function eU4(d){this.a=d},
eU5:function eU5(d){this.a=d},
eU6:function eU6(d){this.a=d},
eU7:function eU7(d){this.a=d},
eU8:function eU8(d){this.a=d},
eTG:function eTG(d){this.a=d},
eTH:function eTH(d){this.a=d},
eTI:function eTI(d){this.a=d},
eTJ:function eTJ(d){this.a=d},
eTK:function eTK(d){this.a=d},
eTF:function eTF(d){this.a=d},
eTL:function eTL(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTM:function eTM(d){this.a=d},
eTD:function eTD(d){this.a=d},
eUz:function eUz(d){this.a=d},
eUr:function eUr(d){this.a=d},
eUn:function eUn(d){this.a=d},
eUm:function eUm(d){this.a=d},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUp:function eUp(d,e){this.a=d
this.b=e},
eUk:function eUk(d,e){this.a=d
this.b=e},
eUq:function eUq(d){this.a=d},
eUK:function eUK(d){this.a=d},
eUJ:function eUJ(d,e,f){this.a=d
this.b=e
this.c=f},
eUI:function eUI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUS:function eUS(d,e){this.a=d
this.b=e},
eU9:function eU9(d){this.a=d},
eVq:function eVq(d){this.a=d},
bfu:function bfu(d,e){this.b=d
this.a=e},
i9a(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i9b(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l3(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b6(d,v)
return n.charCodeAt(0)==0?n:n},
bAy(){var w=$.bzG,v=$.Qn
$.Qn=v+1
return w+"_"+v},
ih(d,e,f,g,h,i,j){return C.es(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,C.bAy(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.f5,g,e,f)},
o0(d,e,f,g){var w=f*9
return C.ih(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hTF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzG
p=$.Qn
$.Qn=p+1
w.push(new C.eM(q+"_"+p,D.f5,0,r,1,0.0016,"",24,A.a7,A.bo,A.aD,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzG
p=$.Qn
$.Qn=p+1
w.push(new C.eM(q+"_"+p,D.f5,o,0,0.004,1,"",24,A.a7,A.bo,A.aD,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.o0(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o0(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ih(D.bh,0.08,0.08,0.5,0.003,v,0),C.ih(D.bh,0.58,0.08,0.004,0.06,v,0),C.ih(D.bh,0.58,0.14,0.34,0.003,v,0),C.ih(D.bh,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ih(D.bh,0.08,0.8,0.004,0.14,t,0),C.ih(D.bh,0.08,0.94,0.6,0.003,t,0),C.o0(0.58,0.08,0.05,e),C.o0(0.92,0.22,0.05,e),C.o0(0.08,0.8,0.05,f),C.o0(0.68,0.94,0.05,f),C.o0(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ih(D.l9,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ih(D.l9,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ih(D.l9,0.7,0.8,0.22,0.12,w|1140850688,0),C.ih(D.l9,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o0(0.5,0.5,1.5,w|335544320),C.o0(0.5,0.5,1.15,w|402653184),C.o0(0.5,0.5,0.8,v|436207616),C.o0(0.95,0.05,0.4,v|855638016),C.o0(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o0(0.85,0.08,0.7,w|1140850688),C.o0(0.1,0.35,0.5,v|855638016),C.o0(0.9,0.62,0.55,v|771751936),C.o0(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ih(D.bh,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ih(D.bh,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ih(D.bh,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ih(D.bh,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o0(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o0(0.5,0.2,0.65,(w|3422552064)>>>0),C.o0(0.5,0.2,0.95,w|855638016),C.ih(D.bh,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ih(D.bh,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ih(D.jQ,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ih(D.jQ,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ih(D.jQ,0.15,0.86,0.6,0.14,1712265002,0),C.o0(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cW8[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzG
l=$.Qn
$.Qn=l+1
w.push(new C.eM(m+"_"+l,D.f5,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bo,A.aD,k,A.bi,null,D.eN,q,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.o0(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ih(D.jQ,0.35,-0.1,0.3,0.62,w|855638016,0),C.ih(D.jQ,0.05,-0.1,0.3,0.55,v,-0.5),C.ih(D.jQ,0.65,-0.1,0.3,0.55,v,0.5),C.o0(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ih(D.bh,0.06,0.04,0.88,0.002,e,0),C.ih(D.bh,0.06,0.96,0.88,0.002,e,0),C.ih(D.bh,0.06,0.04,0.004,0.92,e,0),C.ih(D.bh,0.936,0.04,0.004,0.92,e,0),C.ih(D.bh,0.09,0.07,0.82,0.001,w,0),C.ih(D.bh,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ih(D.jR,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ih(D.jR,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ih(D.jR,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ih(D.bh,0,0,0.3,0.09,w|1140850688,0),C.ih(D.bh,0.7,0.9,0.3,0.1,v|1426063360,0),C.ih(D.bh,0.82,0.04,0.12,0.07,w|771751936,0),C.ih(D.bh,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ih(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ih(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ih(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ih(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.o0(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ih(D.bh,0.09,0.12,0.16,0.006,e,0),C.ih(D.bh,0.05,0.03,0.9,0.001,w,0),C.ih(D.bh,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i5G(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzG=j
$.Qn=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fBh()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.es(A.bi,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a7,"",1,C.bAy(),g,"","",0,!1,"",0,D.bh,l,2,"",0,0,"",D.cn,D.lA,1,0,0))
if(a9)A.d.v(q,C.hTF(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i9a(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fBg(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.es(A.bi,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a7,a1,a3*9/16,C.bAy(),a0,"","",0,!1,a2,0,D.bh,l,2,"",0,0,"",D.cn,D.lA,a3,a4,a5))
return C.rx(s,r,0,0,q,j+"_slide",D.qm,"","","",D.df)},
rw:function rw(d,e){this.a=d
this.b=e},
m8:function m8(d,e,f,g,h,i,j,k,l,m){var _=this
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
fBh:function fBh(){},
fBg:function fBg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hJK(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.u(w.h(d,"at")))
u=w.h(d,"outline")
t=B.u(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cff(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zB(u,t,s,B.u(w==null?"":w))},
fIX(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fIX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hkS){w=1
break}$.hkS=!0
t=4
w=7
return B.b(B.ay(),$async$fIX)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aL(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jz(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hJK(m)
if(l!=null)J.cf(n,l)}$.CJ.ca(0,B.u(o.a),new C.fIY(n))}C.h1F()
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
return B.i($async$fIX,v)},
h1F(){var w,v=new B.T(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.CJ,$.CJ.r,$.CJ.e);w.C();)J.nv(w.d,new C.foX(v))
$.CJ.br($.CJ,new C.foY())},
aO3(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aO3=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aO3)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CJ,B.a3($.CJ).k("cI<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.cf(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aO3)
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
return B.i($async$aO3,v)},
i9M(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h1F()
w=$.CJ.ca(0,d,new C.fJ_())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pC(w,0,new C.zB(new B.T(v,0,!1),f,u,g))
C.aO3()},
i9J(d){var w,v=$.CJ.h(0,d)
if(v==null||J.cn(v))return
w=J.cF(v)
w.cA(v,0)
if(w.gan(v))$.CJ.W(0,d)
C.aO3()},
zB:function zB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cff:function cff(){},
fIY:function fIY(d){this.a=d},
foX:function foX(d){this.a=d},
foY:function foY(){},
fJ_:function fJ_(){},
i9O(d){return A.d.dM(D.we,new C.fJ2(d),new C.fJ3())},
hJI(d){var w
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
hJH(d){var w
switch(d.a){case 0:w=D.alR
break
case 1:w=A.yu
break
case 2:w=A.amV
break
case 3:w=K.alt
break
case 4:w=A.amm
break
case 5:w=A.lY
break
default:w=null}return w},
hWF(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Qa[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Qa[w]
if(!B.cT(v.toLowerCase(),t,0))u=B.cT(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hJJ(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=B.U(u,t)
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
o.push(q)}return A.S.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i9K(d,e,f,g,h){var w=new B.M(D.we,new C.fIW(),x.eC).aG(0,", "),v=""+d,u=C.hqh(h),t=F.fCG(h),s=C.hmt(g),r=e.t(0,D.I9)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Ia)?'- New slides get an "icon3d" from: '+A.d.aG(D.Qa,", ")+".\n":"",p=e.t(0,D.CZ)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i9L(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.we,new C.fIZ(),x.eC).aG(0,", "),p=new B.ff("")
if(e.t(0,D.I9)){p.a=s
w=s}else w=""
if(e.t(0,D.Ia))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Qa,", ")+".\n")
if(e.t(0,D.CZ))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hqh(d)
v=F.fCG(d)
u=C.hmt(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahb(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D5(a3,"{"),a5=J.fUV(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lo(a3,a4,a5+1)
try{w=A.S.aL(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fGW(),m).c0(0,new C.fGX())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.u(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.u(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.u(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.u(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.u(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hWF(B.u(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.u(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a82(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.u(q==null?J.fs(u).b:q))
p=A.d.b4(D.we,new C.fGY(r))?r:a7
o=C.foa(J.q(w,"logo_frame"),D.Cm)
n=C.foa(J.q(w,"logo_ring"),D.Ch)
m=C.foa(J.q(w,"photo_frame"),D.Cm)
l=C.foa(J.q(w,"photo_ring"),D.Ch)
return new C.ard(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1E(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hpo(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.D_),f7=f6?C.hQn():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eE()
v.dt(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.fp(t,v)
s=u.c
s=new C.nO("luxe",u.a,A.lY,t,u.e,u.f,B.a([s,u.d,s],x.t),D.df)
w=s}if(w==null)w=C.i9O(f9.b)
r=g2.t(0,D.a5w)||f6
q=g2.t(0,D.I9)
p=g2.t(0,D.Sd)
o=new C.fBl()
n=B.a([],x.g)
m=new C.fBo(o,w,r)
l=new C.fBn(o,r)
k=new C.fBm(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b4(u,new C.fBk(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cXE[b8]
c0=D.cWB[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eSV.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eN,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eN,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mL,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qn,500,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Sa
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l9,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bh,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CX
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mL,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qn,500,f2,f0))
d3=D.mK
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bh,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ux:D.cn
c1.push(new C.eM(b4,D.a5u,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bo,A.aD,4279310375,A.bi,e4,D.bh,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mK
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mL,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qn,450,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Sa
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eN,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eN,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bh,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bh,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.I7,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mK}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.df,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hS0(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dmf[A.o.E(b1,6)]:s
n.push(new C.lJ(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BL(e4,e4,e4,e4,D.CW,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fDJ(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fDJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CZ)
n=e.t(0,D.Ia)
if(!o&&!n){u=D.a4t
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fDM(o,s[r],n,$.hVo,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fDJ)
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
return B.i($async$fDJ,v)},
fCJ(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fCJ=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i9L(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNo(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fCJ)
case 3:u=s.aNK(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCJ,v)},
bC9(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bC9=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i9M(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahb(i,"colorful")
t=C.i9K(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNo(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hG),$async$bC9)
case 3:u=o.aNK(m,f,h,g,D.e01,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC9,v)},
aNo(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNo=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vm(null,""),$async$aNo)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n7(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qT(t,d,g,"slides",null),$async$aNo)
case 7:q=i
p=q.b
if(p!=null){o=C.ahb(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L4(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNo,v)},
aNK(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CZ)||e.t(0,D.Ia)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dd(e,x.Q)
t.W(0,D.CZ)}w=6
return B.b(C.fDJ(d,t),$async$aNK)
case 6:s=k
w=4
break
case 5:s=D.a4t
case 4:t=d.c
w=A.d.b4(t,new C.fha())?7:9
break
case 7:r=$.hr9
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dT(r,x.aP),$async$aNK)
case 10:q=k
p=q!=null?A.S.ao(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hpo(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hJJ(new C.ard(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("M<1,m>")
t=B.C(new B.M(m,new C.fhb(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jT<co.E,m>")
t=B.C(new B.jT(e,new C.fhc(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Sd)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNK,v)},
h4w(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a3f[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
idQ(d){return B.bR(A.K,null,new C.fS0(),d,!0,!0,!0,null,!1,!1,x.I)},
hR_(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cL.gct().aK(d)},
idP(d,e,f){return B.bR(A.K,null,new C.fS_(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h4x(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h4y(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
foa(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fob(w))?w:""},
hmt(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hr7(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahb(a1==null?"":a1,a0),a3=C.ahb(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.U
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.S(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.rh(new B.a_(r,new C.fJ4(t[p]),q))
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
g=B.C(new B.a_(k,new C.fJ5(),v),r)
A.d.aZ(g,new C.fJ6())
if(g.length===0)continue
f=new C.fJ7(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ia4(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGX
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1X
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1Y
return null},
hm4(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bl(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dj(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i9P(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oi
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cR)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hm4(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hm4(n,i,v,u))if(n.w>10){f=h+1
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
i9N(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahb(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3f[r]
if(q.b===s)w.L(0,q)}}v=C.h4x(e)
u=C.h4y(e)
p=C.hpo(n,D.a4t,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fJ0(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jT<co.E,m>")
o=B.C(new B.jT(w,new C.fJ1(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Sd)
return p},
idC(d,e,f){return B.bR(A.K,null,new C.fRd(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hQn(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eE()
s.dt(t)
w=D.cBA[s.av(10)]
v=new C.egL(s)
u=x.N
return new C.egK(w,s.av(4),J.fs(v.$1$2(D.d1a,1,x.ff)),w.r[s.av(3)],v.$1$2(D.dhE,2+s.av(2),u),v.$1$2(D.day,2,u),v.$1$2(D.dkJ,4,x.fP),t)},
hS0(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eE()
a1.dt(a5.w+a3*13)
w=new C.fdH(a4)
v=new C.fdJ(a4,d)
u=new C.fdI(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cR){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aX(A.o.fY(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aX(A.o.fY(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eN,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1E(a0,52),"lux_spot",a5.wA(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bh,0,0,1,1,0,"lux_back",a5.wA(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bh,0,0,1,1,0,"lux_back2",a5.aF1(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.022,0.038,0.956,0.924,0,g,a5.wA(0,f),D.df,150,C.a1E(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.018,0.032,0.964,0.936,0,g,a5.wA(0,f),D.df,120,C.a1E(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.df,260,C.a1E(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bh,0,0,1,1,0,"lux_filigree",a5.wA(0,"filigree"),D.df,200))
break
default:a2.push(w.$10$anim$delay(D.bh,0.08,0.06,0.84,0.004,C.a1E(a0,208),"lux_rule",a5.aF1(0,"shimmer",r),D.uw,150))
a2.push(w.$10$anim$delay(D.bh,0.08,0.936,0.84,0.004,C.a1E(a0,144),"lux_rule2","",D.I7,220))}l=!A.d.b4(a2,new C.fdG())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wA(0,"crest"),350))
else{o=a1.hi()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wA(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1E(r,242)
j=a5.wA(0,"orbit")
i=s===D.bh?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qn,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1E(r,242),"lux_g2",a5.wA(0,"orbit"),D.qn,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bh,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aX(A.o.fY(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bh,0,0,1,1,0,"lux_velvet",a5.wA(0,"velvet")))},
nO:function nO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fJ2:function fJ2(d){this.a=d},
fJ3:function fJ3(){},
w1:function w1(d,e){this.a=d
this.b=e},
a82:function a82(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ard:function ard(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fIW:function fIW(){},
fIZ:function fIZ(){},
fGW:function fGW(){},
fGX:function fGX(){},
fGY:function fGY(d){this.a=d},
fBl:function fBl(){},
fBo:function fBo(d,e,f){this.a=d
this.b=e
this.c=f},
fBn:function fBn(d,e){this.a=d
this.b=e},
fBm:function fBm(d,e){this.a=d
this.b=e},
fBk:function fBk(d){this.a=d},
fDM:function fDM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDK:function fDK(d){this.a=d},
fDL:function fDL(d){this.a=d},
fha:function fha(){},
fhb:function fhb(){},
fhc:function fhc(){},
fS0:function fS0(){},
a0q:function a0q(d){this.a=d},
aHm:function aHm(d,e,f,g,h){var _=this
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
fS_:function fS_(d,e){this.a=d
this.b=e},
a0p:function a0p(d,e,f){this.c=d
this.d=e
this.a=f},
aHl:function aHl(d){var _=this
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
fob:function fob(d){this.a=d},
b1c:function b1c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDU:function aDU(d,e,f){this.c=d
this.d=e
this.a=f},
bk9:function bk9(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
egN:function egN(d){this.a=d},
egM:function egM(){},
bhH:function bhH(d,e){this.b=d
this.a=e},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(){},
fJ6:function fJ6(){},
fJ7:function fJ7(d){this.a=d},
arL:function arL(d,e){this.a=d
this.b=e},
fJ0:function fJ0(){},
fJ1:function fJ1(){},
fRd:function fRd(d,e){this.a=d
this.b=e},
ZM:function ZM(d,e,f){this.c=d
this.d=e
this.a=f},
aBm:function aBm(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dk6:function dk6(d){this.a=d},
dk7:function dk7(d){this.a=d},
dk8:function dk8(d,e){this.a=d
this.b=e},
dkb:function dkb(d){this.a=d},
dkc:function dkc(d,e){this.a=d
this.b=e},
dka:function dka(d,e){this.a=d
this.b=e},
dkd:function dkd(d){this.a=d},
dk9:function dk9(d,e){this.a=d
this.b=e},
bsE:function bsE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
egK:function egK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
egL:function egL(d){this.a=d},
fdH:function fdH(d){this.a=d},
fdJ:function fdJ(d,e){this.a=d
this.b=e},
fdI:function fdI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdG:function fdG(){},
aLV:function aLV(){},
h3l(d){var w,v,u
try{w=A.S.aL(0,d,null)
if(x.f.b(w)){v=B.vU(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b18:function b18(d,e,f){this.c=d
this.d=e
this.a=f},
blN:function blN(d,e){this.c=d
this.a=e},
i68(d){return A.d.dM(D.Hb,new C.fCs(d),new C.fCt())},
i69(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b6(t,6)
if(w.length===0)return null
v=new B.a_(D.Hb,new C.fCu(w),x.b4)
if(!v.gae(0).C())return null
u=v.gI(0)
return new C.jH("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lf:function lf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCs:function fCs(d){this.a=d},
fCt:function fCt(){},
fCu:function fCu(d){this.a=d},
mW(d,e,f,g,h){return new C.EH(f,g,d)},
hT9(d){var w=d.z,v=B.S(w).k("a_<1>")
w=B.C(new B.a_(w,new C.ffD(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Ks
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a7,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.f5,j,k,l)},
hpb(d,e){var w
C.hT9(d)
w=A.d.dM($.bEa(),new C.fAi(e),new C.fAj())
$.Ks=w.a
d.x=w.a;++d.y
try{w.bD(d)}finally{$.Ks=""}d.z=B.bp(d.z,!0,x.F)},
EH:function EH(d,e,f){this.a=d
this.b=e
this.e=f},
ffD:function ffD(){},
fIx:function fIx(){},
fIy:function fIy(){},
fIz:function fIz(){},
fIK:function fIK(){},
fIP:function fIP(){},
fIQ:function fIQ(){},
fIR:function fIR(){},
fIS:function fIS(){},
fIT:function fIT(){},
fIU:function fIU(){},
fIV:function fIV(){},
fIA:function fIA(){},
fIB:function fIB(){},
fIC:function fIC(){},
fID:function fID(){},
fIE:function fIE(){},
fIF:function fIF(){},
fIG:function fIG(){},
fIH:function fIH(){},
fII:function fII(){},
fIJ:function fIJ(){},
fIL:function fIL(){},
fIM:function fIM(){},
fIN:function fIN(){},
fIO:function fIO(){},
fAi:function fAi(d){this.a=d},
fAj:function fAj(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.es(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bh,4280172719,2,m,n,0,"",o,D.cR,p,q,r)},
CZ(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.f5,j,k,l)},
bCT(){var w=new B.T(Date.now(),0,!1)
return A.ir[B.bH(w)-1]+" "+B.bS(w)+", "+B.bA(w)},
ex:function ex(d,e,f){this.a=d
this.b=e
this.c=f},
bAi(d){return new B.iS((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
hYh(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amS(A.cG.aK(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hYl(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fnK(),x.dv).aG(0,"\n")},
hYk(d){switch(d.a){case 2:return A.nB
case 1:case 5:return A.f2Y
default:return A.TF}},
hYe(d){switch(d.a){case 2:return A.v6
case 1:case 5:return A.Vs
default:return A.aaA}},
hYi(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bAi(u),q=(s&255)===0?v:C.bAi(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nx(q,p,A.kO)
w=new B.pD(t,t,t,t)}switch(d.ax.a){case 1:return B.lx(v,v,v,new B.kE(r,w,v,A.abQ,v),v,v,v,v)
case 4:return u?new B.fT(v,v,v):B.x3(B.lx(v,v,q,v,p+0.4,v,v,v))
default:return B.lx(v,v,v,new B.kE(r,w,B.vu(4),A.hL,v),v,v,v,v)}},
hYg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f5?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hYe(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hYl(d)
t=C.bAi(d.Q)
s=d.x.a>=700?A.em:A.vK
r=d.y===A.cF?A.y7:A.akh
q=d.z
p=new B.D8(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aQ_:A.aPZ,l,l,l,l,l,l,A.dt,l,l,v,r,s,l,!0,l,l,l,l),C.hYk(d.as)))
break
case 1:case 4:o=C.hYh(d.at)
n=i===D.lA&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x3(B.fc(w,l,l,l,B.ha(l,A.rK,l,l,l,l,l,l,l,A.dt,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HU(o,n?A.abM:A.VP,l,l)
break
case 3:w=new B.nx(A.Ir,1,A.kO)
u=B.vu(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lx(A.v6,B.fc(t,l,l,l,B.ha(l,D.eeE,l,l,l,l,l,l,l,A.dt,l,l,11,l,A.em,l,!0,l,l,l,l),A.nB),l,new B.kE(E.aIf,new B.pD(w,w,w,w),u,A.hL,l),l,l,l,l)
break
case 2:p=C.hYi(d,e)
break
case 5:p=C.hYf(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hgR(-w,p)
w=i===D.cR
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.asw(m/255,p)}if(w)return new F.w7(k,l,j,l,new B.Sb(new B.kD(g,g,f,1/0),p))
if(i===D.l8){i=new B.nx(A.Ir,1,A.kO)
i=B.lx(A.v6,p,l,new B.kE(A.pd,new B.pD(i,i,i,i),B.vu(4),A.hL,l),l,l,D.bxy,l)}else i=p
return new F.w7(k,l,j,l,new B.fT(g,f,i))},
hYj(d,e,f,g){var w,v=null,u=C.bAi(d.e),t=d.f
t=B.a([F.hft(t!=null?B.lx(v,v,v,new B.kE(v,v,v,A.hL,new B.aWF(E.Vt,A.aau,B.a([u,C.bAi(t)],x.cR),v)),v,v,v,v):B.lx(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fnJ(f,g),B.S(w).k("M<1,fg>")))
return F.csu(t)},
h4A(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h4A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4i(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wy(A.wq,A.Io,D.byF,null,null,null,!1,null)
o=new B.BR(o,new C.fJd(607,787,p,d))
o.MG(n,null)
r.push(o)}u=n.ke(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4A,v)},
hYf(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h3l(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajJ()
if(h==null)h=A.axN
j=B.tA(4279308564)
w=B.vu(18)
v=new B.nx(B.tA(4287531653),3,A.kO)
u=i.length===0?"My links":i
u=B.a([B.x3(B.fc(u,m,m,m,B.ha(m,A.pd,m,m,m,m,m,m,m,A.dt,m,m,12,m,A.em,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x3(B.fc(A.a.i(l.c),m,m,m,D.fac,m)))
u.push(new B.fT(m,8,m))
for(t=B.d9(h,0,B.dG(8,"count",x.S),B.S(h).c),s=t.$ti,t=new B.bQ(t,t.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tA(4280690220)
o=new B.a9o(8,8)
n=A.a.i(r.b)
u.push(new B.nP(D.brO,new C.awJ(new C.aig(q),B.lx(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fcw,A.nB),m,new B.kE(p,m,new B.aiH(o,o,o,o),A.hL,m),m,m,D.bxY,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x3(B.fc(k,m,m,m,D.fbL,m))
u.push(new C.awJ(C.hxQ(k),t))}return B.lx(m,B.yT(u,A.M3,A.ly),m,new B.kE(j,new B.pD(v,v,v,v),w,A.hL,m),m,m,D.bsE,m)},
fnK:function fnK(){},
fnJ:function fnJ(d,e){this.a=d
this.b=e},
fJd:function fJd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agZ(d){var w,v
for(w=0;w<32;++w){v=D.H2[w]
if(v.a===d)return v}return null},
hjw(d){var w,v,u=A.a.cH(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aK(A.a.b6(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hsh(d,e){return B.a5(d,!1).cm(B.ea(new C.fPD(e),!0,null,x.fB))},
hsg(d,e){return B.bR(A.K,null,new C.fPC(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j1:function j1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ey:function Ey(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nu:function Nu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjw:function bjw(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dVw:function dVw(d){this.a=d},
dVv:function dVv(d,e,f){this.a=d
this.b=e
this.c=f},
dVu:function dVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brc:function brc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_r:function f_r(d,e){this.a=d
this.b=e},
beA:function beA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_3:function b_3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9N:function c9N(){},
c9O:function c9O(d){this.a=d},
c9P:function c9P(d,e,f){this.a=d
this.b=e
this.c=f},
c9Q:function c9Q(d,e,f){this.a=d
this.b=e
this.c=f},
fPD:function fPD(d){this.a=d},
Zk:function Zk(d,e){this.c=d
this.a=e},
azK:function azK(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d9i:function d9i(d,e,f){this.a=d
this.b=e
this.c=f},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9m:function d9m(d){this.a=d},
d9p:function d9p(d){this.a=d},
d9l:function d9l(d,e){this.a=d
this.b=e},
d9q:function d9q(d){this.a=d},
d9k:function d9k(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9j:function d9j(d,e){this.a=d
this.b=e},
d9s:function d9s(d,e){this.a=d
this.b=e},
fPC:function fPC(d){this.a=d},
fPB:function fPB(d){this.a=d},
fPA:function fPA(d,e,f){this.a=d
this.b=e
this.c=f},
fPz:function fPz(d,e){this.a=d
this.b=e},
aLo:function aLo(){},
idO(d){return B.bR(A.K,null,new C.fRZ(),d,!0,!0,!0,null,!1,!1,x.N)},
fRZ:function fRZ(){},
ZF:function ZF(d){this.a=d},
bg3:function bg3(d){this.d=d
this.c=this.a=null},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
hUH(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xz},
i83(d){var w,v=A.d.gI(d.split("@"))
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
i82(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hUH(d)
switch(q){case"shimmer":return B.nT(A.aaW,g,new C.fFU(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bfr(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dX(B.ef(A.A,B.de(C.fWj(g,B.a58(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bf8(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.de(B.eJ(A.A,e*0.5,B.ef(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fF(e)
u.mO(Math.sin(e)*0.3)
return B.dX(B.fw(A.A,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.bo2(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.ba2(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9G(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bv_(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bs_(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.br8(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bet(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bW(0,B.e1(B.ef(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bU(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eJ(A.A,s*0.06,B.ef(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fFU:function fFU(d,e){this.a=d
this.b=e},
bfr:function bfr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bf8:function bf8(d,e,f){this.b=d
this.c=e
this.a=f},
bo2:function bo2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ba2:function ba2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9G:function b9G(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bv_:function bv_(d,e,f){this.b=d
this.c=e
this.a=f},
bs_:function bs_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
br8:function br8(d,e,f){this.b=d
this.c=e
this.a=f},
bet:function bet(d,e,f){this.b=d
this.d=e
this.a=f},
d9_:function d9_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xB:function xB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fFX(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l8},
i88(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fFY())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQk(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i87(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d6(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d6(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
agD(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agD=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fyl(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fym(e),d,!0,!0,!1,A.lB,!1,!1,x.N),$async$agD)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h5c(d),$async$agD)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Search states\u2026","",A.k9,"Choose state"),$async$agD)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h47(s)
if(p==null)p=A.d.gI(D.R2)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fFZ(p.d)
k=x.u
j=B.a([C.es(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a7,"",1,C.cB(),l,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lA,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CM(i,0.016,D.l9,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CM(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CM(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KD("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KD("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h0Y(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzM("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1f("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1f("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1f("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1f("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzM("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CM(m,0.082,D.bh,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.es(A.bi,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bo,A.cx,"",0.074,g,null,"","",0,!1,"",0,D.bh,4280172719,2,y.O,0,0,"",D.cn,D.cR,0.78,0.11,0.388))
A.d.v(k,C.h0Y(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzM("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hlu("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hlu("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1f("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1f("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzL("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzL("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzM("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KD("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KD("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzL("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzL("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzM("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1f("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzL("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1f("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h0Y(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KD("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KD("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BL(null,null,null,null,D.oi,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rx(m,null,0,0,j,n,D.qm,"","","Hati ya Ndoa",D.df)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agD,v)},
fFY:function fFY(){},
fyl:function fyl(){},
fym:function fym(d){this.a=d},
fyj:function fyj(d){this.a=d},
fyk:function fyk(d){this.a=d},
hXK(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hXJ(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mP
case"lineThrough":return A.zN
default:return A.aD}},
es(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eM(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hny(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QN[w]
if(v.b===u)return v}return D.df},
hU5(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cTr[w]
if(v.b===u)return v}return D.cR},
i_y(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dij[w]
if(v.b===u)return v}return D.bh},
rx(d,e,f,g,h,i,j,k,l,m,n){return new C.lJ(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hee(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hW5(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hny(d.h(0,"transition"))
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
else{n=J.db(n,x.f)
n=B.cD(n,new C.cfc(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rx(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hW5(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apA[w]
if(v.b===u)return v}return D.mK},
BL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.T(Date.now(),0,!1):a4
return new C.i5(p,t,a1,h,i,w,a0==null?B.a([C.rx(4294967295,null,0,0,null,C.cB(),D.qm,"","","",D.df)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hSg(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.T(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.ky(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ky(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
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
else{f=J.b6(f,new C.cf_(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cf0(),x.N)
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
else{g=J.db(g,x.f)
g=B.cD(g,new C.cf1(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.BL(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rx(4294967295,a3,0,0,a3,C.cB(),D.qm,"","","",D.df)],x.g):g,v,p,o,s)},
ky(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hSg(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.djc[w]
if(v.b===u)return v}return D.CW},
cB(){var w=Date.now(),v=$.j2
$.j2=v+1
return""+1000*w+"_"+v},
cft(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CX){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.es(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cn,D.cR,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.12,u,p,"","",0,!1,"",0,D.bh,m,2,"Click to add subtitle",0,0,"",D.cn,D.cR,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.es(A.bi,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cn,D.cR,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.es(A.bi,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.68,u,p,"","",0,!1,"",0,D.bh,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.cR,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.es(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Two Column Slide",0,0,"",D.cn,D.cR,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.es(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bh,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.cR,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.es(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bh,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.cR,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.es(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bh,m,2,"Section Header",0,0,"",D.cn,D.cR,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.es(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Compare",0,0,"",D.cn,D.cR,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.es(A.bi,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bh,t.l(),2,"",0,0,"",D.cn,D.f5,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.es(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bh,m,2,"Option A",0,0,"",D.cn,D.cR,0.38,0.08,0.26)
q=C.cB()
t=C.es(A.bi,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bh,t.j(0.5).l(),2,"",0,0,"",D.cn,D.f5,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.es(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bh,m,2,"Option B",0,0,"",D.cn,D.cR,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.es(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bh,m,2,"TERM / QUESTION",0,0,"",D.cn,D.cR,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cx,"",0.35,u,p,"","",0,!1,"",0,D.bh,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.cR,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.es(A.bi,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bh,m,2,"Quiz Question",0,0,"",D.cn,D.cR,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bh,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.cR,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.es(A.bi,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bh,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.cR,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bh,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.cR,0.88,0.06,0.16)],x.u))
break}},
hJT(d){return A.d.dM(D.a2U,new C.cfu(d),new C.cfv())},
hJQ(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.cf(v,C.VZ(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fYq(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cfp(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aZ(u,new C.cfo())
return u},
heh(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cfk()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
are(d){return C.hJO(d)},
hJO(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$are=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cfn()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2r(m),$async$are)
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
return B.b(B.ay(),$async$are)
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
case 11:o=l.$1($.heg.h(0,m))
n=C.fYq(C.fYq(j,r),o)
if(n.length===0){u=C.heh(C.heh(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$are,v)},
cfj(d){return C.hJN(d)},
hJN(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cfj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$cfj)
case 7:r=f
q=r.tg("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kH(q,B.S(q).c)
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
return B.i($async$cfj,v)},
b1e(d,e){return C.hJP(d,e)},
hJP(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1e=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b1e)
case 6:s=g
q=s.tg("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Ln(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b1e)
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
return B.i($async$b1e,v)},
W_(d,e){return C.hJR(d,e)},
hJR(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$W_=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hef.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.are(a3),$async$W_)
case 5:p=a6
case 4:w=6
return B.b(C.cfj(a3),$async$W_)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcC()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cfq(o),l),l.k("J.E"))
A.d.aZ(e,new C.cfr())
$.hef.n(0,a0,e)
n=B.S(e).k("M<1,a6<m,@>>")
n=B.C(new B.M(e,new C.cfs(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.heg.n(0,a0,r)
t=8
w=11
return B.b(B.ahq(a0,r),$async$W_)
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
return B.b(B.ay(),$async$W_)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$W_)
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
return B.i($async$W_,v)},
IO:function IO(d,e){this.a=d
this.b=e},
arc:function arc(d,e){this.a=d
this.b=e},
uK:function uK(d,e){this.a=d
this.b=e},
my:function my(d,e){this.a=d
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
lJ:function lJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cfd:function cfd(){},
cfe:function cfe(){},
cfc:function cfc(){},
i5:function i5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cf2:function cf2(){},
cf3:function cf3(){},
cf_:function cf_(){},
cf0:function cf0(){},
cf1:function cf1(){},
jH:function jH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cfu:function cfu(d){this.a=d},
cfv:function cfv(){},
cfp:function cfp(d){this.a=d},
cfo:function cfo(){},
cfk:function cfk(){},
cfl:function cfl(){},
cfm:function cfm(){},
cfn:function cfn(){},
cfq:function cfq(d){this.a=d},
cfr:function cfr(){},
cfs:function cfs(){},
i8j(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fGw(e,v,d,B.aX(w))
w.$1(new C.fGs())
w.$1(new C.fGt())
w.$1(new C.fGu())
w.$1(new C.fGv())
return v},
fGw:function fGw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGs:function fGs(){},
fGt:function fGt(){},
fGu:function fGu(){},
fGv:function fGv(){},
b1b:function b1b(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cf8:function cf8(d){this.a=d},
cf7:function cf7(){},
cf9:function cf9(){},
cfa:function cfa(d,e){this.a=d
this.b=e},
cfb:function cfb(d){this.a=d},
aon:function aon(d,e){this.c=d
this.a=e},
bjg:function bjg(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dHK:function dHK(){},
aL9:function aL9(){},
cfg(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cfg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f09)
u=!1
w=1
break}u=B.kX(!1,d,t,!1,null,A.a5y,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfg,v)},
hJL(d){var w=A.d.bg(D.Hb,new C.cfh(d))
if(w<0)return!0
return w>=4},
hJM(d){var w=A.d.bg($.bEa(),new C.cfi(d))
if(w<0)return!0
return w>=5},
cfh:function cfh(d){this.a=d},
cfi:function cfi(d){this.a=d},
i9Z(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yI()
$.qi().pX(t,new C.fJk(s),!0)
u=B.a([B.DS(v,A.qq,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.faG,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nl,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b2,A.r,u,v)},
fJk:function fJk(d){this.a=d},
i9A(){return C.h4t()},
i6x(){return C.bC6()},
i8A(){return C.h4k()},
aPr(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPr=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fIq(d,f),$async$aPr)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPr,v)},
fIq(d,e){var w=0,v=B.j(x.H),u
var $async$fIq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bAj
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fIr(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fIq)
case 2:return B.h(null,v)}})
return B.i($async$fIq,v)},
fIr:function fIr(d,e){this.a=d
this.b=e},
adr:function adr(d,e,f){this.c=d
this.d=e
this.a=f},
etd:function etd(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
adJ:function adJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b1a(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b19(g,m,f,d,e,h,l,k,j,o,i,null)},
hqw(d){return B.cq(new C.fGr(d))},
h4v(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i9I(d){if(d===D.cn)return"None"
return C.h4v(d)},
bAP(d,e,f,g){return C.i_F(d,e,f,g)},
i_F(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.h1g&&t.pC())t.eF()
$.h1g=!0
s.a=null
w=3
return B.b(B.hZ(A.bk,!0,"Animation preview",d,new C.fqi(s,e,g,f),null,A.eJ,!0,x.H),$async$bAP)
case 3:s=s.a
if(s!=null)s.a7(0)
$.h1g=!1
case 1:return B.h(u,v)}})
return B.i($async$bAP,v)},
fSN(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fSN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bY,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h4v(f)+" Slide transition preview"
s=s?Ae.Fu:A.vw
w=3
return B.b(C.bAP(d,s,new B.a7(t,t*0.56,B.bv(B.n(14),new C.aIL(f,null),A.aq),null),r),$async$fSN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fSN,v)},
hpO(d,e,f){var w,v,u=null,t=A.cu.az(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.de(f,t)
case 2:case 17:return B.dX(B.de(f,t),new B.v((1-t)*48,0))
case 3:return B.dX(B.de(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dX(B.de(f,t),new B.v(0,(1-t)*36))
case 5:return B.dX(B.de(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.ef(A.A,B.de(f,t),0.5+t*0.5,u,u)
case 7:return B.ef(A.A,B.de(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fF((1-t)*1.2)
return B.fw(A.A,B.de(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kb((1-t)*1.2)
return B.fw(A.A,B.de(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mO((1-t)*0.8)
v=0.6+t*0.4
w.jR(v,v,v,1)
return B.fw(A.A,B.de(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dX(B.de(f,t),new B.v((1-t)*24,0))}},
bDF(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bY,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h4v(f)+" Element animation preview"
s=s?Ae.Fu:A.vw
w=3
return B.b(C.bAP(d,s,new B.a7(t,t*0.62,B.bv(B.n(14),new C.azu(f,null),A.aq),null),r),$async$bDF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDF,v)},
i9H(d){var w,v,u,t,s=$.ag6.W(0,d)
if(s!=null){$.ag6.n(0,d,s)
return s}w=A.cG.aK(A.a.b6(d,A.a.cH(d,",")+1))
$.ag6.n(0,d,w)
v=$.h24=$.h24+w.length
u=B.a3($.ag6).k("cu<1>")
for(;;){if(!(v>41943040&&$.ag6.a>1))break
t=new B.cu($.ag6,u).gae(0)
if(!t.C())B.b8(B.fu())
v-=$.ag6.W(0,t.gR(0)).length
$.h24=v}return w},
i9o(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l3(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cP,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SI(s,A.u))
v.push(new B.eu(n,l,l,A.cP,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SI(t,A.u))
v.push(new B.eu(n,l,l,A.cP,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SI(u,A.cx))
v.push(new B.eu(n,l,l,A.cP,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b6(d,r)
v.push(B.d0(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2q(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k6(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdB()*0.18
m.F(new B.iN(B.bx(e,new B.aS(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbQ().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bE())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ao,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bD(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bD(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbQ().a,e.b))
m.F(new B.ap(e.c,e.gbQ().b))
m.F(new B.ap(e.gbQ().a,e.d))
m.F(new B.ap(e.a,e.gbQ().b))
m.F(new B.bE())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.bap(new B.v(t,p),new B.aS(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o9(e))
return m}},
fE0(d,e,f){return B.cq(new C.fE1(D.eTt.t(0,d),d,f,e))},
b19:function b19(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cf6:function cf6(d){this.a=d},
cf5:function cf5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cf4:function cf4(){},
b16:function b16(d,e){this.b=d
this.a=e},
fGr:function fGr(d){this.a=d},
fGq:function fGq(d,e){this.a=d
this.b=e},
fqi:function fqi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqg:function fqg(d){this.a=d},
fqh:function fqh(d,e){this.a=d
this.b=e},
aIL:function aIL(d,e){this.c=d
this.a=e},
buw:function buw(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
f7Z:function f7Z(d,e,f){this.a=d
this.b=e
this.c=f},
aJn:function aJn(d,e){this.b=d
this.a=e},
V0:function V0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjt:function bjt(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dTJ:function dTJ(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTH:function dTH(d){this.a=d},
IN:function IN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceZ:function ceZ(d){this.a=d},
ceY:function ceY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azu:function azu(d,e){this.c=d
this.a=e},
bdX:function bdX(){this.d=0
this.c=this.a=null},
d6e:function d6e(d){this.a=d},
d6d:function d6d(d){this.a=d},
a7L:function a7L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk7:function bk7(d,e){var _=this
_.d=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
egt:function egt(d,e,f){this.a=d
this.b=e
this.c=f},
b_6:function b_6(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bf6:function bf6(d,e,f){this.b=d
this.c=e
this.a=f},
bq5:function bq5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eY4:function eY4(){},
fE1:function fE1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
br5:function br5(d,e,f){this.b=d
this.c=e
this.a=f},
aLn:function aLn(){},
aLT:function aLT(){},
aNf:function aNf(){},
fHr(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fHr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xd.c7().M3(D.dgn,A.tX,!0),$async$fHr)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i9i(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHr,v)},
i9i(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a83(d,new B.a02(A.cL.gct().aK(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i1i(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a83(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.ch.KQ(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a83(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i1i(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cye().cKY(B.rg(d,A.i2,o,o),o,o,!1).cMH(0,"word/document.xml")
if(n==null)return""
w=n.cUJ()
v=A.ch.KQ(0,w==null?$.hsN():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l3(0,r)
p=A.a.i(B.cD(q,new C.fta(),B.a3(q).k("J.E"),t).h3(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a83:function a83(d,e,f){this.a=d
this.b=e
this.c=f},
fta:function fta(){},
hJS(d,e,f,g,h,i,j,k,l){return new C.NW(l,e,d,g,f,i,h,j,k,null)},
NW:function NW(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEk:function aEk(d,e,f,g,h,i,j,k,l){var _=this
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
_.bt$=k
_.a9$=l
_.c=_.a=null},
ezr:function ezr(d){this.a=d},
ezp:function ezp(){},
ezq:function ezq(d){this.a=d},
evP:function evP(){},
evQ:function evQ(){},
evR:function evR(d,e){this.a=d
this.b=e},
exp:function exp(d){this.a=d},
exd:function exd(){},
exe:function exe(){},
evc:function evc(){},
eyx:function eyx(d){this.a=d},
ezn:function ezn(d,e){this.a=d
this.b=e},
exn:function exn(d,e){this.a=d
this.b=e},
eza:function eza(d){this.a=d},
ezb:function ezb(){},
ezc:function ezc(){},
ezd:function ezd(d){this.a=d},
eze:function eze(){},
euB:function euB(d){this.a=d},
ezo:function ezo(){},
eww:function eww(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
euA:function euA(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewU:function ewU(d,e,f){this.a=d
this.b=e
this.c=f},
ewV:function ewV(d){this.a=d},
ewv:function ewv(){},
ewu:function ewu(d){this.a=d},
ews:function ews(){},
ewr:function ewr(d){this.a=d},
ewt:function ewt(){},
evL:function evL(d){this.a=d},
evM:function evM(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewD:function ewD(d,e){this.a=d
this.b=e},
euD:function euD(){},
euE:function euE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewO:function ewO(){},
ewP:function ewP(d,e){this.a=d
this.b=e},
ewM:function ewM(d,e,f){this.a=d
this.b=e
this.c=f},
ewN:function ewN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewG:function ewG(d,e,f){this.a=d
this.b=e
this.c=f},
ewH:function ewH(d,e,f){this.a=d
this.b=e
this.c=f},
ewI:function ewI(d){this.a=d},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewK:function ewK(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewF:function ewF(d,e){this.a=d
this.b=e},
ewR:function ewR(d){this.a=d},
ewS:function ewS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewQ:function ewQ(d){this.a=d},
ex8:function ex8(){},
ex9:function ex9(){},
exa:function exa(){},
exb:function exb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex5:function ex5(d){this.a=d},
ex7:function ex7(){},
ex6:function ex6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ex3:function ex3(d,e,f){this.a=d
this.b=e
this.c=f},
ex4:function ex4(d,e){this.a=d
this.b=e},
exc:function exc(){},
ewE:function ewE(d,e){this.a=d
this.b=e},
euU:function euU(){},
euV:function euV(d,e,f){this.a=d
this.b=e
this.c=f},
euW:function euW(d){this.a=d},
euX:function euX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euT:function euT(d){this.a=d},
exi:function exi(d){this.a=d},
exh:function exh(d,e){this.a=d
this.b=e},
exg:function exg(d,e){this.a=d
this.b=e},
exf:function exf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exj:function exj(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
euS:function euS(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
exr:function exr(d,e,f){this.a=d
this.b=e
this.c=f},
euM:function euM(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
exq:function exq(d,e,f){this.a=d
this.b=e
this.c=f},
euC:function euC(d){this.a=d},
evd:function evd(){},
ez8:function ez8(d,e){this.a=d
this.b=e},
ez9:function ez9(d,e,f){this.a=d
this.b=e
this.c=f},
eyy:function eyy(d,e,f){this.a=d
this.b=e
this.c=f},
etz:function etz(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
etj:function etj(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
etk:function etk(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
eu0:function eu0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eu1:function eu1(d,e){this.a=d
this.b=e},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu6:function eu6(d){this.a=d},
eu3:function eu3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eu4:function eu4(d){this.a=d},
eu2:function eu2(){},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
ex2:function ex2(d,e){this.a=d
this.b=e},
ezh:function ezh(d){this.a=d},
ezi:function ezi(d,e){this.a=d
this.b=e},
ezj:function ezj(d){this.a=d},
ezk:function ezk(d,e,f){this.a=d
this.b=e
this.c=f},
ezg:function ezg(d){this.a=d},
eyO:function eyO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyN:function eyN(d,e,f){this.a=d
this.b=e
this.c=f},
eyM:function eyM(){},
eyL:function eyL(d,e,f){this.a=d
this.b=e
this.c=f},
eyK:function eyK(d,e){this.a=d
this.b=e},
eyH:function eyH(d,e,f){this.a=d
this.b=e
this.c=f},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyJ:function eyJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eyI:function eyI(d){this.a=d},
evH:function evH(d,e){this.a=d
this.b=e},
evG:function evG(d,e){this.a=d
this.b=e},
eyz:function eyz(){},
ez7:function ez7(d,e){this.a=d
this.b=e},
ez5:function ez5(d){this.a=d},
ez6:function ez6(d){this.a=d},
etr:function etr(d,e){this.a=d
this.b=e},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
ett:function ett(d,e,f){this.a=d
this.b=e
this.c=f},
etx:function etx(d,e){this.a=d
this.b=e},
eto:function eto(d,e,f){this.a=d
this.b=e
this.c=f},
etn:function etn(d){this.a=d},
exo:function exo(d,e,f){this.a=d
this.b=e
this.c=f},
ezf:function ezf(d,e,f){this.a=d
this.b=e
this.c=f},
evK:function evK(d,e,f){this.a=d
this.b=e
this.c=f},
evJ:function evJ(){},
eu9:function eu9(d,e,f){this.a=d
this.b=e
this.c=f},
eua:function eua(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
etu:function etu(d,e){this.a=d
this.b=e},
etD:function etD(d){this.a=d},
etE:function etE(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
etC:function etC(d){this.a=d},
etQ:function etQ(d,e){this.a=d
this.b=e},
etB:function etB(d){this.a=d},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(){},
etZ:function etZ(){},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etR:function etR(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
eva:function eva(d,e,f){this.a=d
this.b=e
this.c=f},
ev9:function ev9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev8:function ev8(d,e,f){this.a=d
this.b=e
this.c=f},
ev7:function ev7(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
eud:function eud(d){this.a=d},
euc:function euc(d){this.a=d},
eub:function eub(d,e){this.a=d
this.b=e},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d,e){this.a=d
this.b=e},
euR:function euR(d){this.a=d},
ex1:function ex1(d,e){this.a=d
this.b=e},
ex0:function ex0(d,e){this.a=d
this.b=e},
ex_:function ex_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
ewW:function ewW(){},
ewX:function ewX(){},
eyA:function eyA(){},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyC:function eyC(){},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d,e){this.a=d
this.b=e},
etA:function etA(d,e){this.a=d
this.b=e},
euF:function euF(){},
euG:function euG(){},
euH:function euH(){},
euK:function euK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euJ:function euJ(d,e){this.a=d
this.b=e},
euI:function euI(d,e,f){this.a=d
this.b=e
this.c=f},
ewa:function ewa(d){this.a=d},
ew9:function ew9(){},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewc:function ewc(d,e){this.a=d
this.b=e},
ew8:function ew8(d){this.a=d},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
ewe:function ewe(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
ewf:function ewf(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
ewg:function ewg(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
ewh:function ewh(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
ewi:function ewi(d,e){this.a=d
this.b=e},
ew2:function ew2(d){this.a=d},
evW:function evW(d,e){this.a=d
this.b=e},
evX:function evX(d){this.a=d},
evY:function evY(d){this.a=d},
evV:function evV(d){this.a=d},
evZ:function evZ(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
ew0:function ew0(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
ew1:function ew1(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev6:function ev6(d){this.a=d},
euZ:function euZ(d){this.a=d},
euY:function euY(d,e){this.a=d
this.b=e},
ev_:function ev_(d,e){this.a=d
this.b=e},
ev0:function ev0(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev5:function ev5(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezm:function ezm(d){this.a=d},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewj:function ewj(d,e){this.a=d
this.b=e},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d){this.a=d},
exK:function exK(d,e){this.a=d
this.b=e},
exL:function exL(d){this.a=d},
exM:function exM(d){this.a=d},
exX:function exX(d){this.a=d},
ey7:function ey7(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyr:function eyr(d){this.a=d},
eys:function eys(d){this.a=d},
eyt:function eyt(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
exO:function exO(d){this.a=d},
exP:function exP(d){this.a=d},
exQ:function exQ(d){this.a=d},
exR:function exR(d){this.a=d},
exS:function exS(d){this.a=d},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exW:function exW(d){this.a=d},
exY:function exY(d){this.a=d},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey5:function ey5(d){this.a=d},
exA:function exA(d){this.a=d},
ey6:function ey6(d){this.a=d},
exI:function exI(d){this.a=d},
ey8:function ey8(d){this.a=d},
exH:function exH(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
exG:function exG(d,e,f){this.a=d
this.b=e
this.c=f},
exw:function exw(d,e){this.a=d
this.b=e},
exJ:function exJ(d){this.a=d},
eyu:function eyu(d,e){this.a=d
this.b=e},
eyw:function eyw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eyv:function eyv(d,e){this.a=d
this.b=e},
eyb:function eyb(d,e,f){this.a=d
this.b=e
this.c=f},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
exv:function exv(d,e,f){this.a=d
this.b=e
this.c=f},
ext:function ext(d,e){this.a=d
this.b=e},
eyc:function eyc(d,e){this.a=d
this.b=e},
exE:function exE(d,e){this.a=d
this.b=e},
exu:function exu(d,e){this.a=d
this.b=e},
exs:function exs(d,e){this.a=d
this.b=e},
eyd:function eyd(d){this.a=d},
exD:function exD(d){this.a=d},
eye:function eye(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
exC:function exC(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d,e){this.a=d
this.b=e},
exB:function exB(d){this.a=d},
eym:function eym(d,e){this.a=d
this.b=e},
exz:function exz(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
exy:function exy(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
exx:function exx(d){this.a=d},
eu8:function eu8(d,e,f){this.a=d
this.b=e
this.c=f},
eu7:function eu7(d,e){this.a=d
this.b=e},
eyR:function eyR(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d,e){this.a=d
this.b=e},
eyS:function eyS(d,e){this.a=d
this.b=e},
eyP:function eyP(d,e){this.a=d
this.b=e},
evg:function evg(d,e){this.a=d
this.b=e},
evf:function evf(d){this.a=d},
evh:function evh(d,e){this.a=d
this.b=e},
eve:function eve(d){this.a=d},
evO:function evO(){},
evN:function evN(){},
ez3:function ez3(d){this.a=d},
ez2:function ez2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ez1:function ez1(d,e){this.a=d
this.b=e},
eyX:function eyX(d,e){this.a=d
this.b=e},
ez0:function ez0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyY:function eyY(d,e){this.a=d
this.b=e},
eyT:function eyT(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyV:function eyV(d){this.a=d},
eyW:function eyW(d){this.a=d},
eyZ:function eyZ(d,e){this.a=d
this.b=e},
ez_:function ez_(d,e){this.a=d
this.b=e},
ez4:function ez4(d){this.a=d},
euy:function euy(d){this.a=d},
eux:function eux(d,e,f){this.a=d
this.b=e
this.c=f},
euw:function euw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eul:function eul(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eum:function eum(d,e){this.a=d
this.b=e},
eun:function eun(d,e){this.a=d
this.b=e},
euo:function euo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euk:function euk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eup:function eup(d,e){this.a=d
this.b=e},
eur:function eur(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euq:function euq(d,e){this.a=d
this.b=e},
eus:function eus(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euj:function euj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eut:function eut(d,e){this.a=d
this.b=e},
eui:function eui(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
euh:function euh(d){this.a=d},
euv:function euv(d,e){this.a=d
this.b=e},
ewp:function ewp(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewq:function ewq(d,e){this.a=d
this.b=e},
evu:function evu(d,e){this.a=d
this.b=e},
evv:function evv(d,e){this.a=d
this.b=e},
evt:function evt(d,e){this.a=d
this.b=e},
evw:function evw(d,e){this.a=d
this.b=e},
evs:function evs(d,e){this.a=d
this.b=e},
evx:function evx(d,e){this.a=d
this.b=e},
evr:function evr(d,e){this.a=d
this.b=e},
evy:function evy(d,e){this.a=d
this.b=e},
evq:function evq(d,e){this.a=d
this.b=e},
evz:function evz(d,e){this.a=d
this.b=e},
evp:function evp(d,e){this.a=d
this.b=e},
evA:function evA(d,e,f){this.a=d
this.b=e
this.c=f},
evo:function evo(d,e){this.a=d
this.b=e},
evB:function evB(d,e,f){this.a=d
this.b=e
this.c=f},
evn:function evn(d,e){this.a=d
this.b=e},
evC:function evC(d,e){this.a=d
this.b=e},
evm:function evm(d,e,f){this.a=d
this.b=e
this.c=f},
evj:function evj(d,e){this.a=d
this.b=e},
evD:function evD(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evE:function evE(d,e){this.a=d
this.b=e},
evk:function evk(d,e,f){this.a=d
this.b=e
this.c=f},
evi:function evi(d,e){this.a=d
this.b=e},
evF:function evF(d,e){this.a=d
this.b=e},
evI:function evI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eth:function eth(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exm:function exm(d,e){this.a=d
this.b=e},
exk:function exk(d){this.a=d},
exl:function exl(d,e){this.a=d
this.b=e},
afe:function afe(d,e,f){this.a=d
this.b=e
this.c=f},
ayR:function ayR(d,e){this.c=d
this.a=e},
bcJ:function bcJ(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
d1Q:function d1Q(d){this.a=d},
d1P:function d1P(d){this.a=d},
bcX:function bcX(d,e){this.c=d
this.a=e},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
JO:function JO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcI:function bcI(){this.d=!1
this.c=this.a=null},
d1N:function d1N(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1O:function d1O(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1L:function d1L(d,e){this.a=d
this.b=e},
PA:function PA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_w:function a_w(d,e,f){this.c=d
this.d=e
this.a=f},
aEn:function aEn(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bt$=e
_.a9$=f
_.c=_.a=null},
eA1:function eA1(){},
ezS:function ezS(d){this.a=d},
eA0:function eA0(d){this.a=d},
ezT:function ezT(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezP:function ezP(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d){this.a=d},
ezR:function ezR(d,e,f){this.a=d
this.b=e
this.c=f},
ezZ:function ezZ(){},
eA_:function eA_(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d){this.a=d},
eA2:function eA2(d,e,f){this.a=d
this.b=e
this.c=f},
eA4:function eA4(d,e){this.a=d
this.b=e},
eA3:function eA3(d){this.a=d},
JV:function JV(d,e){this.c=d
this.a=e},
brA:function brA(d,e){this.b=d
this.a=e},
bhB:function bhB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhA:function bhA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aK4:function aK4(){},
aM6:function aM6(){},
bxl:function bxl(){},
aM7:function aM7(){},
fJl(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fJl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xd.c7().M3(B.a(["pdf"],x.s),A.tX,!0),$async$fJl)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boP(s,"data:application/pdf;base64,"+A.cL.gct().aK(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJl,v)},
i9T(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cG(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l3(0,w).gM(0)
if(t>0){s=J.aQN(t,1,200)
return s}}catch(r){}return 1},
fJc(d){return C.i9S(d)},
i9S(d){var w=0,v=B.j(x.T),u
var $async$fJc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJc,v)},
bCS(d,e,f,g){return C.ia1(d,e,f,g)},
ia1(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCS=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.eb(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hr6(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.kA(a9),b0)
b0=n
a9=k.b
n=Math.min(B.kA(b0),a9)
a9=m
b0=k.a
m=Math.max(B.kA(a9),b0)
b0=l
a9=k.b
l=Math.max(B.kA(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qn()
f=B.B9(g,null)
a7=B.N()
a7.r=A.qU.gp(0)
f.b_(new B.a8(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bT
b1.e=A.fH
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.os()
w=7
return B.b(a3.zm(800,h),$async$bCS)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hw(A.h2),$async$bCS)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eX(A.dD.gaP(a5))
a7=A.cL.gct().aK(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
$.am.$1("[slides signature] "+B.u(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bCS,v)},
aQ_(d,e,f){return C.i9Q(d,e,f)},
i9Q(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQ_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aw:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahE(d,e,f,new C.fJa(r,q),q,"Sign document"),$async$aQ_)
case 3:if(!new B.eb(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCS(q,t,r.b,r.c),$async$aQ_)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1d(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ_,v)},
ia_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hki(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hki(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b6(A.a.aX(A.o.fY(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b6(A.a.aX(A.o.fY(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lA&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hjV(q.ay)+";border:2px solid "+C.hjV(q.ch)+'"></div>'
break
case 5:l=C.h3l(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajJ()
if(p==null)p=A.axN
n=B.S(p)
k=n.k("nn<1>")
j=new B.nn(p,0,8,k)
j.zL(p,0,8,n.c)
j=new B.bQ(j,j.gM(0),k.k("bQ<ak.E>"))
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
hjV(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hki(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCQ(d,e){var w=0,v=B.j(x.H)
var $async$bCQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fJj(e,C.ia_(e),d),d,null,!0,!0,x.H),$async$bCQ)
case 2:return B.h(null,v)}})
return B.i($async$bCQ,v)},
bCR(){var w=0,v=B.j(x.T),u,t,s
var $async$bCR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GG(92,2400),$async$bCR)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fJc(s),$async$bCR)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCR,v)},
aQ0(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQ0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h4A(d),$async$aQ0)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fLI(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ0,v)},
hed(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b1d:function b1d(d,e,f){this.a=d
this.b=e
this.c=f},
fJa:function fJa(d,e){this.a=d
this.b=e},
fJj:function fJj(d,e,f){this.a=d
this.b=e
this.c=f},
fJg:function fJg(d){this.a=d},
fJh:function fJh(d,e,f){this.a=d
this.b=e
this.c=f},
fJi:function fJi(d,e,f){this.a=d
this.b=e
this.c=f},
i9R(d){return C.ky(d.w)},
i9Y(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.ibI()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yF(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hwQ()
if(w.b.test(u))return u
return null},
hr8(d,e,f){var w,v,u=C.hFw(d),t=$.pz()
for(w=0;w<80;++w){v=u+A.a.aX(A.o.u(t.av(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
ia3(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f2(w,d.b);v.C();){u=w.gR(w).y
t=C.yF(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fJ8(d,e){var w,v=d.y,u=C.yF(v==null?"":v)
if(u!=null)return d.y=u
w=C.ia3(new B.a_(e,new C.fJ9(d),B.S(e).k("a_<1>")))
v=d.x
return d.y=C.hr8(v==null?"":v,null,w)},
ia2(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.ky(w.w))return null
v=w.y
return C.yF(v==null?"":v)},
hJU(){var w,v=$.pz(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"SL"+A.d.h3(u)},
W2(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$W2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$W2)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f7("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$W2)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
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
$.am.$1("[slides qr stash] load: "+B.u(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W2,v)},
W3(d){return C.hJV(d)},
hJV(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$W3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$W3)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cI,null),$async$W3)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ab(p)
$.am.$1("[slides qr stash] save: "+B.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W3,v)},
a85(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a85=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a85)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.W2(),$async$a85)
case 4:s=a6
r=C.yF(a2==null?"":a2)
if(r==null)r=a3!=null?C.hr8(a3,null,A.IR):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gic(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yF(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdL(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aK(t)
g.n(0,"payload",A.cL.gct().aK(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.T(Date.now(),0,!1).a6().ac())
if(D.Th.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yF(J.k(q==null?"":q))
if(f==null)f=C.hei(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.W3(s),$async$a85)
case 7:u=new B.aFO(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hJU()
n=r==null
d=n?C.hei(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aK(t)
q.n(0,"payload",A.cL.gct().aK(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.T(Date.now(),0,!1).a6().ac())
if(D.Th.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.W3(s),$async$a85)
case 8:u=new B.aFO(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a85,v)},
hei(d){var w,v,u=$.pz()
for(w=0;w<200;++w){v="SL"+A.a.aX(A.o.u(u.av(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
arg(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$arg)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.W2(),$async$arg)
case 6:t=f
s=J.a4(t)
r=s.gM(t)
s.br(t,new C.cfw(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.W3(t),$async$arg)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arg,v)},
arf(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yF(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$arf)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.W2(),$async$arf)
case 6:t=o.jz(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yF(J.k(q==null?"":q))===p){u=C.a84(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arf,v)},
a84(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a84=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a84)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.W2(),$async$a84)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
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
try{s=A.ch.cB(0,A.cG.aK(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Th.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aL(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.S.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dQ(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.T(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.W3(p),$async$a84)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a84,v)},
i9X(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.T(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.S(d).k("M<1,a6<m,@>>")
w=B.C(new B.M(d,new C.fJf(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fJn(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.T(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.S.ao(w,null)}return A.S.ao(C.i9X(d==null?B.a([],x.D):d,f,g),null)},
fJm(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fJm=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a85(h,d,e,f,g),$async$fJm)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yF(e==null?"":e)
u=new B.aFB(s,t)
w=1
break}t=A.dK.aK(h)
t=A.kn.gct().aK(t)
u=new B.aFB(C.yF(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJm,v)},
h4C(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d1(q,"NGMYSLIDESYNC2|"))return!0
if(J.d1(q,"NGMYSLIDECODE|"))return!0
if(J.d1(q,"NGMY_SL:"))return!0
if(J.f4(q,s)||J.f4(q,r))return!0
if(J.d1(q,"{"))try{w=A.S.aL(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ia0(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h4C(v))return v
u=A.a.cH(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b6(v,u))
if(C.h4C(t))return t}s=A.a.cH(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b6(v,s))
if(C.h4C(t))return t}}return null},
fJb(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d1(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d1(t,"NGMY_SL:"))w=v.a(A.S.aL(0,A.ch.cB(0,A.cG.aK(J.mJ(t,8))),null))
else w=v.a(A.S.aL(0,t,null))
v=C.hTB(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahp(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arf(t[1]),$async$ahp)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJb(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yF(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arf(r),$async$ahp)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJb(s)
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
return B.b(C.a84(t[1]),$async$ahp)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJb(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fJb(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahp,v)},
hTB(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Th.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h4z(C.VZ(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.db(u,x.f)
t=B.cD(t,new C.fg5(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h4z(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j2
$.j2=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VZ(B.a2(o,x.N,x.z))
if(e&&C.ky(p.w))p.Q=new B.T(Date.now(),0,!1).a6().bS(144e8).ac()
return p},
bCB(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GF(),$async$bCB)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahp(s),$async$bCB)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCB,v)},
fS1(d){var w=0,v=B.j(x.T),u,t
var $async$fS1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.WY,!0,"Dismiss",d,new C.fS2(),new C.fS3(),A.Fs,!0,x.N),$async$fS1)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.eZk)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fS1,v)},
idR(d,e,f,g,h){return B.a5(d,!1).cm(B.ea(new C.fS4(h,e,g,f),!0,null,x.H))},
fJ9:function fJ9(d){this.a=d},
cfw:function cfw(d){this.a=d},
fJf:function fJf(){},
fg5:function fg5(d){this.a=d},
fS2:function fS2(){},
fS3:function fS3(){},
fS4:function fS4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W0:function W0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEl:function aEl(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ezy:function ezy(){},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezF:function ezF(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezt:function ezt(d,e){this.a=d
this.b=e},
ezs:function ezs(d,e){this.a=d
this.b=e},
W1:function W1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkt:function bkt(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ezH:function ezH(d,e){this.a=d
this.b=e},
ezI:function ezI(d){this.a=d},
ezJ:function ezJ(){},
ezK:function ezK(d){this.a=d},
ezL:function ezL(d,e){this.a=d
this.b=e},
aEi:function aEi(d){this.a=d},
aEj:function aEj(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
etb:function etb(d){this.a=d},
eta:function eta(){},
etc:function etc(d){this.a=d},
et7:function et7(d){this.a=d},
et6:function et6(){},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
buR:function buR(){},
arh:function arh(d){this.a=d},
aEm:function aEm(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ezN:function ezN(d){this.a=d},
ezM:function ezM(d){this.a=d},
hYO(){var w,v,u,t
for(v=0;v<4;++v){w=D.d4X[v]
try{if(Ab.bXx(w)){u=w
return u}}catch(t){}}return null},
R6(d,e){return C.i6I(d,e)},
i6I(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$R6=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hYO()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oi?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qA(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.or(new C.fDu(c2,b7,o),!1,!1)
b6.lV(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fDv(n,m),c6,null,!0,!0,b9)
k=new C.fDz(b7)
j=new C.fDA()
i=null
t=4
b3=c2.a
h=Ai.aSh(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fUM(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ab.aXd(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HO.ys(i,"dataavailable",new C.fDw(e))
d=new B.bY(new B.bg($.bz,x.dT),x.b2)
A.HO.ys(i,"stop",new C.fDx(d))
J.ahZ(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$R6)
case 8:w=7
return B.b(c5.$1(d0),$async$R6)
case 7:a0=d0
J.fUO(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahZ(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahZ(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$R6)
case 15:w=14
return B.b(c5.$1(d0),$async$R6)
case 14:a0=d0
case 13:J.fUO(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahZ(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.T(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fUO(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bM(A.fq,null,b9),$async$R6)
case 18:w=16
break
case 17:J.ahZ(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahZ(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d8(0,A.o3),$async$R6)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hS(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n9(a7)
c0.download=B.u(J.ad(a9)===0?"presentation":a9)+"."+B.u(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lk(b0)
J.lZ(b0)
B.bM(A.pS,new C.fDy(a7),b9)
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
try{if(i!=null&&i.state!=="inactive")i.stop()}catch(c8){}c3=B.u(b1)
u="Could not make the video: "+c3
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
J.lZ(l)
if(p.pC())p.eF()
c3=o
b3=$.aw()
c3.si4(b3)
J.aQR(c3,0)
c3=n
c3.si4(b3)
J.aQR(c3,0)
c3=m
c3.si4(b3)
J.aQR(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$R6,v)},
fDu:function fDu(d,e,f){this.a=d
this.b=e
this.c=f},
fDt:function fDt(){},
fDv:function fDv(d,e){this.a=d
this.b=e},
fDz:function fDz(d){this.a=d},
fDA:function fDA(){},
fDw:function fDw(d){this.a=d},
fDx:function fDx(d){this.a=d},
fDy:function fDy(d){this.a=d},
bv2:function bv2(d,e,f){this.c=d
this.d=e
this.a=f},
faq:function faq(){},
far:function far(){},
cfS(d){var w=0,v=B.j(x.at),u,t,s
var $async$cfS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arp(d,A.zu),$async$cfS)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bC(new B.T(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfS,v)},
cfR(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7M:function a7M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkc:function bkc(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ehk:function ehk(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehj:function ehj(d,e){this.a=d
this.b=e},
a8G:function a8G(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ox$=k
_.oy$=l
_.oz$=m
_.nQ$=n},
a8H:function a8H(d,e){this.a=d
this.b=e},
b2S:function b2S(){},
ci3:function ci3(){},
ci4:function ci4(){},
ci5:function ci5(d,e,f,g,h,i,j,k,l){var _=this
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
hxQ(d){return new C.aig(d)},
a2S:function a2S(){},
aig:function aig(d){this.a=d},
aRb:function aRb(){},
awJ:function awJ(d,e){this.d=d
this.b=e
this.a=null},
aSI:function aSI(d){this.b=d
this.a=null},
fyF(d,e){var w=0,v=B.j(x.H)
var $async$fyF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxD().LM(d,e),$async$fyF)
case 2:B.fLO()
return B.h(null,v)}})
return B.i($async$fyF,v)},
hop(d,e){return(A.rv[(d^e)&255]^A.o.aD(d,8))>>>0},
fvW(d,e,f,g,h,i){var w=C.i33(d,A.dd,f,null,A.cZ,g,h,i)
return w},
hqh(d){var w=F.hr_(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hFw(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pa.h(0,w)
if(v!=null)return v
for(u=A.pa.gdL(A.pa),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hqp(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.dbe[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAM(d,e){return C.i_A(d,e)},
i_A(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAM=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hS([d],"application/pdf")
n=x.z
q=B.aUm(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ek(B.k3(o,"share",[p]),x.H),$async$bAM)
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
return B.i($async$bAM,v)},
h4t(){var w=0,v=B.j(x.y),u,t,s
var $async$h4t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fnL
s=$.bAj
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAM(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4t,v)},
bC6(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bC6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fnL
l=$.bAj
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hkY()?3:4
break
case 3:w=5
return B.b(C.bAM(m,k),$async$bC6)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bAk
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n9(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Lk(q)
w=10
return B.b(B.bM(A.a1,null,x.H),$async$bC6)
case 10:J.lZ(q)
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
return B.i($async$bC6,v)},
h4k(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h4k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bAk
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lE.qN(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h4k,v)},
h4B(d,e){var w=0,v=B.j(x.H),u,t
var $async$h4B=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hS([d],"text/html"))
t.toString
u=window
u.toString
A.lE.qN(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h4B,v)},
b1P(d,e){var w=0,v=B.j(x.y),u
var $async$b1P=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1R(d,e),$async$b1P)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1Q(d),$async$b1P)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1P,v)}},D,H,I,Al,A7,X,V,Am,G,F,E,W,Q,Y,Z,An,Ao,A8,L,Ap,A_,O,A0,A9,M,Aa,Aq,Ar,P,A1,As,Ab,Ac,At,Ad,Ae,Af,Au,Av,R,Aw,K,Ax,S,T,Ay,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ag=c[194]
A5=c[66]
Ah=c[49]
Ai=c[57]
U=c[209]
A6=c[52]
Aj=c[138]
Ak=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
H=c[91]
I=c[127]
Al=c[36]
A7=c[211]
X=c[208]
V=c[197]
Am=c[121]
G=c[178]
F=c[31]
E=c[210]
W=c[124]
Q=c[140]
Y=c[29]
Z=c[166]
An=c[221]
Ao=c[174]
A8=c[109]
L=c[212]
Ap=c[120]
A_=c[60]
O=c[188]
A0=c[75]
A9=c[100]
M=c[148]
Aa=c[110]
Aq=c[89]
Ar=c[214]
P=c[114]
A1=c[130]
As=c[87]
Ab=c[53]
Ac=c[184]
At=c[35]
Ad=c[73]
Ae=c[139]
Af=c[218]
Au=c[220]
Av=c[217]
R=c[67]
Aw=c[215]
K=c[163]
Ax=c[175]
S=c[47]
T=c[213]
Ay=c[222]
N=c[195]
A2=c[216]
A3=c[106]
A4=c[56]
C.nY.prototype={
v5(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tT(t,v)
return new C.nY(t===0?!1:w,v,t)},
bLZ(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D3()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tT(w,u)
return new C.nY(r===0?!1:s,u,r)},
bMu(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D3()
w=o-d
if(w<=0)return p.a?$.h6_():$.D3()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tT(w,u)
q=new C.nY(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a2E())
return q},
dY(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.am(e,16)
if(A.o.E(e,16)===0)return r.bLZ(v)
u=w+v+1
t=new Uint16Array(u)
C.hhy(r.b,w,e,t)
w=r.a
s=C.tT(u,t)
return new C.nY(s===0?!1:w,t,s)},
mu(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.am(e,16)
u=A.o.E(e,16)
if(u===0)return n.bMu(v)
t=w-v
if(t<=0)return n.a?$.h6_():$.D3()
s=n.b
r=new Uint16Array(t)
C.hPz(s,w,e,r)
w=n.a
q=C.tT(t,r)
p=new C.nY(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dY(1,u)-1)!==0)return p.aC(0,$.a2E())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a2E())}return p},
aM(d,e){var w,v=this.a
if(v===e.a){w=C.cG6(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a85(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a85(t,e)
if(s===0)return $.D3()
if(r===0)return t.a===e?t:t.v5(0)
w=s+1
v=new Uint16Array(w)
C.hPx(t.b,s,d.b,r,v)
u=C.tT(w,v)
return new C.nY(u===0?!1:e,v,u)},
Hf(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D3()
w=d.c
if(w===0)return t.a===e?t:t.v5(0)
v=new Uint16Array(s)
C.b9W(t.b,s,d.b,w,v)
u=C.tT(s,v)
return new C.nY(u===0?!1:e,v,u)},
byT(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tT(r,u)
return new C.nY(!1,u,s)},
byS(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tT(u,r)
return new C.nY(!1,r,v)},
byU(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tT(p,m)
return new C.nY(s!==0,m,s)},
UJ(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D3()
w=t.a
if(w===e.a){if(w){w=$.a2E()
return t.Hf(w,!0).byU(e.Hf(w,!0),!0).a85(w,!0)}return t.byT(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byS(v.Hf($.a2E(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a85(e,v)
if(C.cG6(u.b,t,e.b,w)>=0)return u.Hf(e,v)
return e.Hf(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v5(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a85(e,v)
if(C.cG6(u.b,t,e.b,w)>=0)return u.Hf(e,v)
return e.Hf(u,!v)},
aH(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D3()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hhz(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tT(w,t)
return new C.nY(q===0?!1:r,t,q)},
bLY(d){var w,v,u,t
if(this.c<d.c)return $.D3()
this.aRo(d)
w=$.h_l.c7()-$.axs.c7()
v=C.h_n($.h_k.c7(),$.axs.c7(),$.h_l.c7(),w)
u=C.tT(w,v)
t=new C.nY(!1,v,u)
return this.a!==d.a&&u>0?t.v5(0):t},
coj(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRo(d)
w=C.h_n($.h_k.c7(),0,$.axs.c7(),$.axs.c7())
v=C.tT($.axs.c7(),w)
u=new C.nY(!1,w,v)
if($.h_m.c7()>0)u=u.mu(0,$.h_m.c7())
return t.a&&u.c>0?u.v5(0):u},
aRo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hhv&&d.c===$.hhx&&g.b===$.hhu&&d.b===$.hhw)return
w=d.b
v=d.c
u=16-A.o.gak7(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hht(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hht(g.b,f,u,r)}else{r=C.h_n(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h_o(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cG6(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9W(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9W(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hPy(p,r,i);--o
C.hhz(h,j,0,r,o,s)
if(r[i]<h){m=C.h_o(j,s,o,n)
C.b9W(r,l,n,m,r)
while(--h,r[i]<h)C.b9W(r,l,n,m,r)}--i}$.hhu=g.b
$.hhv=f
$.hhw=w
$.hhx=v
$.h_k.b=r
$.h_l.b=l
$.axs.b=s
$.h_m.b=u},
gX(d){var w,v,u,t=new C.cG7(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cG8().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nY&&this.aM(0,e)===0},
th(d,e){return this.aM(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
v_(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gak7(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cG9(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cGa(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.la(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v5(0):r
while(v.c>1){u=$.huL()
if(u.c===0)B.b8(D.b4p)
t=v.coj(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLY(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).h3(0)},
$iaRV:1,
$ihM:1}
C.aRl.prototype={
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
cMH(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gan(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k7(w,w.length,B.S(w).k("k7<1>"))}}
C.RK.prototype={
cUJ(){var w,v
if(this.as==null)this.bcP()
w=this.as
v=w==null?null:w.aoQ()
return v==null?null:v.eM()},
bcP(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoQ().eM()
this.as=new C.bOl(v)}},
gY(d){return this.at}}
C.a3Q.prototype={
a5(){return"CompressionType."+this.b}}
C.bHJ.prototype={
ez(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dY(v,u)+(s.b&A.z3[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dY(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fJ(u,t)&A.z3[d])
s.c=t}return v}}
C.bG3.prototype={
cKX(d,e){var w,v,u,t,s,r=this,q=new C.bHJ(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.ez(8)!==66||q.ez(8)!==90||q.ez(8)!==104)return!1
w=r.a=q.ez(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cmB(q)
if(t<0)return!1
if(t===0){q.ez(8)
q.ez(8)
q.ez(8)
q.ez(8)
s=r.cmE(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ez(8)
q.ez(8)
q.ez(8)
q.ez(8)
return!0}}return!0},
cmB(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ez(8)
if(t!==D.dlH[u])v=!1
if(t!==D.cZm[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cmE(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ez(1),d2=((d3.ez(8)<<8|d3.ez(8))<<8|d3.ez(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ez(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ez(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1J()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.ez(3)
if(q<2||q>6)return-1
v=d3.ez(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.ez(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hsR(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ez(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ez(1)===0)break
i=d3.ez(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hsQ()
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
if(f<h)h=f}c9.bY9(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atJ(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atJ(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.am(a8,16)
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
a3=c9.atJ(d3)
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
c1=(c1<<8^D.Hj[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hl[b9];++b9
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
if(b8===0){b8=D.Hl[b9];++b9
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
if(b8===0){b8=D.Hl[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hl[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hl[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.Hj[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.Hj[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.Hj[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.Hj[c1>>>24&255^c7&255])>>>0
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
atJ(d){var w,v,u,t,s=this,r=s.ay
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
t=d.ez(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.ez(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bY9(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1J(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cyf.prototype={
aHL(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bPo(e)
if(q<0)return
e.c=q
if(e.aO()!==101010256)return
e.aY()
e.aY()
e.aY()
e.aY()
r.f=e.aO()
r.r=e.aO()
w=e.aY()
if(w>0)e.aHO(w,!1)
r.cmZ(e)
q=r.r
v=r.f
u=e.aKO(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aO()!==33639248)break
s=new C.b8C()
s.cUI(0,u,e,f)
q.push(s)}},
cmZ(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7J(20,r)
if(w.aO()!==117853008){d.c=s
return}w.aO()
v=w.t5()
w.aO()
d.c=v
if(d.aO()!==101075792){d.c=s
return}d.t5()
d.aY()
d.aY()
d.aO()
d.aO()
d.t5()
d.t5()
u=d.t5()
t=d.t5()
this.f=u
this.r=t
d.c=s},
bPo(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7J(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alQ(A.i2)
o.aM4(r.eM(),A.i2,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aO()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cyd.prototype={}
C.ax6.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cyg.prototype={
aHL(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aO()!==67324752)return
e.aY()
o.b=e.aY()
w=D.aEl.h(0,e.aY())
o.c=w==null?D.LY:w
o.d=e.aY()
o.e=e.aY()
o.f=e.aO()
o.r=e.aO()
o.w=e.aO()
v=e.aY()
u=e.aY()
o.x=e.anD(v)
o.y=e.hk(u).eM()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aVe:D.DP
o.ay=f
o.Q=e.hk(t)
if(o.at!==D.DP&&u>2){w=o.y
w.toString
s=B.rg(w,A.i2,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aY()===39169){s.aY()
s.aY()
s.anD(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aY()
o.at=D.aVf
o.ax=new C.cyd(r,q)
w=D.aEl.h(0,q)
o.c=w==null?D.LY:w}}}if((o.b&8)!==0){p=e.aO()
if(p===134695760)o.f=e.aO()
else o.f=p
o.r=e.aO()
o.w=e.aO()}},
gM(d){return this.bmm().length},
aoQ(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rg(new Uint8Array(0),A.i2,q,q)
w=r.at
if(w!==D.DP)if(p.gM(0)<=0)r.at=D.DP
else{if(w===D.aVe){p=r.bKg(p)
r.Q=p}else if(w===D.aVf){p=r.bJU(p)
r.Q=p}r.at=D.DP}w=r.c
if(w===D.agU){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.py.Bu(p.eM(),!0,!1)
else{t=B.a8v(A.i2,r.w)
p=r.Q
p.toString
A.py.a3S(p,t,!0,!1)
u.b=t.GO()}r.Q.c=v
return B.rg(u.bj(),A.i2,q,q)}else if(w===D.agV){s=B.a8v(A.i2,32768)
p=r.Q
v=p.c
C.hy0().cKX(p,s)
u=s.GO()
r.Q.c=v
return B.rg(u,A.i2,q,q)}else return B.rg(p.eM(),A.i2,q,q)},
bmm(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eM()},
u(d){return this.x},
b8H(d){var w=this.ch,v=C.JK(C.hop(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.UJ(0,C.JK(255)))
w[1]=v
w[1]=v.aH(0,C.JK(134775813)).ad(0,C.JK(1)).UJ(0,C.JK(4294967295))
w[2]=C.JK(C.hop(w[2].N(0),w[1].mu(0,24).N(0)))},
aQM(){var w=(this.ch[2].UJ(0,C.JK(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bKg(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rg(new Uint8Array(0),A.i2,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8H(u[v.c++]^r.aQM())}t=r.Q.eM()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQM()
r.b8H(s)
u&2&&B.aj(t)
t[w]=s}return B.rg(t,A.i2,q,q)},
bJU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hk(8).eM()
v=16}else if(k===2){w=d.hk(12).eM()
v=24}else{w=d.hk(16).eM()
v=32}u=d.hk(2).eM()
t=d.hk(d.gM(0)-10)
s=d.hk(10)
r=t.eM()
k=this.ay
k.toString
q=C.hPe(k,w,v)
p=new Uint8Array(B.cg(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.cg(A.aH.ds(q,v,k)))
if(!C.hgY(A.aH.ds(q,k,k+2),u))throw B.V(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bEE(k,new Uint8Array(16),p)
k=x.S
m=J.a5g(0,k)
m=n.r=new C.chT(m)
m.c=!0
m.b=m.blF(!0,new C.asN(p))
if(m.c)m.d=B.bp(D.of,!0,k)
else m.d=B.bp(D.yT,!0,k)
l=C.hfa(C.hfc(),64)
l.bfa(new C.asN(o))
n.w=l
n.cUi(r,0,r.length)
k=s.eM()
m=n.x
m===$&&B.c()
if(!C.hgY(k,m))throw B.V(B.fo("macs don't match"))
return B.rg(r,A.i2,null,null)}}
C.b8C.prototype={
cUI(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aY()
e.aY()
e.aY()
e.aY()
e.aY()
e.aY()
e.aO()
n.w=e.aO()
n.x=e.aO()
w=e.aY()
v=e.aY()
u=e.aY()
n.y=e.aY()
e.aY()
n.Q=e.aO()
n.as=e.aO()
if(w>0)n.at=e.anD(w)
if(v>0){t=e.hk(v).eM()
n.ax=t
if(v>=4){s=B.rg(t,A.i2,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aY()
p=s.aY()
o=s.a7J(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t5()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t5()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t5()
p-=8}if(p>=4&&n.y===65535)n.y=o.aO()}}}}if(u>0)e.anD(u)
f.c=n.as
t=new C.cyg(D.LY,n,D.DP,B.a([C.JK(0),C.JK(0),C.JK(0)],x.f3))
n.ch=t
t.aHL(0,f,g)},
u(d){return this.at}}
C.cye.prototype={
cKY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cyf(B.a([],x.fT))
this.a=g
g.aHL(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aRl(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RK(o,A.o.am(Date.now(),1000),0):C.h7n(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h7n(o,q.w,q)
if(k.as==null)k.bcP()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alQ(A.i2)
j.aM4(o,A.i2,h,h)}i=j==null?h:j.eM()
if(i!=null)new B.G3(!1).Ds(i,0,h,!0)}}return v}}
C.bEE.prototype={
cUi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cp(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hxK(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dK("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dK("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bNG(u,0,w,0,o)}else{o===$&&B.c()
q.bKk(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.L6(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.kC(0)
w=w.d
w===$&&B.c()
l.Cp(0,w,0,w.length)
return f}}
C.chY.prototype={}
C.ci1.prototype={}
C.chW.prototype={}
C.asN.prototype={}
C.ci0.prototype={
cLc(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.dZ(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bfa(new C.asN(A.aH.fQ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOK(n.a,n.b,t,s,r)
r+=v}A.aH.hm(f,g,g+w,s)
return o.a.c},
bOK(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dK("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cp(0,d,0,d.length)
v.Cp(0,f,0,4)
u=m.c
u===$&&B.c()
w.L6(u,0)
u=m.c
A.aH.hm(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cp(0,s,0,s.length)
w.L6(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.chX.prototype={}
C.chV.prototype={}
C.asO.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asO){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
th(d,e){var w=this.a
w===$&&B.c()
w=A.o.th(w,e.gbYq())
if(!w)e.gbYq()
return w},
aKf(d,e){this.a=0
this.b=d},
tl(d){return this.aKf(d,null)},
aKR(d){var w,v=this,u=v.b
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
w.b0o(v,u)
u=w.b
u===$&&B.c()
w.b0o(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0o(d,e){var w,v=A.o.fY(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ci_.prototype={
kC(d){var w,v=this
v.a.tl(0)
v.c=0
A.aH.h7(v.b,0,4,0)
v.w=0
w=v.r
A.d.h7(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aoj(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1T(u,0)
v.c=0}v.a.aKR(1)},
Cp(d,e,f,g){var w=this.clk(e,f,g)
f+=w
g-=w
w=this.cll(e,f,g)
this.clb(e,f+w,g-w)},
L6(d,e){var w,v=this,u=C.hfb(v.a),t=u.a
t===$&&B.c()
t=C.h54(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h54(w,3)
v.clf()
v.clc(u)
v.asz()
v.cfn(d,e)
v.kC(0)
return 20},
b1T(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o8(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ie===w.d)
if(w.w===16)w.asz()},
asz(){this.cUh()
this.w=0
A.d.h7(this.r,0,16,0)},
clb(d,e,f){while(f>0){this.aoj(d[e]);++e;--f}},
cll(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1T(d,e)
e+=4
f-=4
w.aKR(4)
v+=4}return v},
clk(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aoj(d[e]);++e;--f;++v}return v},
clf(){this.aoj(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aoj(0)}},
clc(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asz()
u=v.d
switch(u){case A.ie:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ef:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cfn(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ie===this.d,s=0;s<w;++s){r=v[s]
q=J.o8(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.ci2.prototype={
cUh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qc[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qc[30]
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
C.chZ.prototype={
bfa(d){var w,v,u,t,s=this,r=s.a
r.kC(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cp(0,w,0,v)
w=s.d
w===$&&B.c()
r.L6(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hm(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h7(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hm(w,0,u,s.d)
s.b9S(s.d,u,54)
s.b9S(s.e,u,92)
u=s.d
r.Cp(0,u,0,u.length)},
L6(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.L6(s,w)
s=u.e
t.Cp(0,s,0,s.length)
v=t.L6(d,e)
s=u.e
A.aH.h7(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cp(0,s,0,s.length)
return v},
b9S(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.chU.prototype={}
C.chT.prototype={
a2c(d){return(D.of[d&255]&255|(D.of[d>>>8&255]&255)<<8|(D.of[d>>>16&255]&255)<<16|D.of[d>>>24&255]<<24)>>>0},
blF(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dK("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e5(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o8(A.aH.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2c((m>>>8|(m&$.qc[24])<<24)>>>0)^D.cBs[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o8(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a2c((k>>>8|(k&$.qc[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2c((k>>>8|(k&$.qc[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o8(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a2c((g>>>8|(g&$.qc[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2c(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bNG(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o8(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eb[a8&255]
u=D.eb[a9>>>8&255]
t=$.qc[8]
s=D.eb[b0>>>16&255]
r=$.qc[16]
q=D.eb[b1>>>24&255]
p=$.qc[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eb[a9&255]
s=D.eb[b0>>>8&255]
u=D.eb[b1>>>16&255]
v=D.eb[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eb[b0&255]
u=D.eb[b1>>>8&255]
s=D.eb[a8>>>16&255]
q=D.eb[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eb[b1&255]
a8=D.eb[a8>>>8&255]
a9=D.eb[a9>>>16&255]
b0=D.eb[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eb[n&255]
b0=D.eb[m>>>8&255]
a9=D.eb[l>>>16&255]
a8=D.eb[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eb[m&255]
b0=D.eb[l>>>8&255]
o=D.eb[b1>>>16&255]
s=D.eb[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eb[l&255]
o=D.eb[b1>>>8&255]
b0=D.eb[n>>>16&255]
u=D.eb[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eb[b1&255]
o=D.eb[n>>>8&255]
s=D.eb[m>>>16&255]
v=D.eb[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eb[a8&255]^C.nt(D.eb[a9>>>8&255],24)^C.nt(D.eb[b0>>>16&255],16)^C.nt(D.eb[b1>>>24&255],8)^b6[w][0]
m=D.eb[a9&255]^C.nt(D.eb[b0>>>8&255],24)^C.nt(D.eb[b1>>>16&255],16)^C.nt(D.eb[a8>>>24&255],8)^b6[w][1]
l=D.eb[b0&255]^C.nt(D.eb[b1>>>8&255],24)^C.nt(D.eb[a8>>>16&255],16)^C.nt(D.eb[a9>>>24&255],8)^b6[w][2]
b1=D.eb[b1&255]^C.nt(D.eb[a8>>>8&255],24)^C.nt(D.eb[a9>>>16&255],16)^C.nt(D.eb[b0>>>24&255],8)^b6[w][3]
a7=D.of[n&255]
b0=D.of[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.of[l>>>8&255]
a9=D.of[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.of[b1>>>8&255]
h=D.of[n>>>16&255]
g=D.of[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.of[l>>>24&255]
s=s[3]
a1=J.o8(A.aH.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o8(A.aH.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o8(A.aH.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o8(A.aH.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bKk(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ea[a6&255]
v=D.ea[b0>>>8&255]
u=$.qc[8]
t=D.ea[a5>>>16&255]
s=$.qc[16]
r=D.ea[a4>>>24&255]
q=$.qc[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ea[a4&255]
t=D.ea[a6>>>8&255]
v=D.ea[b0>>>16&255]
w=D.ea[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ea[a5&255]
v=D.ea[a4>>>8&255]
t=D.ea[a6>>>16&255]
r=D.ea[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ea[b0&255]
a5=D.ea[a5>>>8&255]
a4=D.ea[a4>>>16&255]
a6=D.ea[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ea[p&255]
a6=D.ea[b0>>>8&255]
a4=D.ea[n>>>16&255]
a5=D.ea[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ea[o&255]
a4=D.ea[p>>>8&255]
a7=D.ea[b0>>>16&255]
t=D.ea[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ea[n&255]
a7=D.ea[o>>>8&255]
a5=D.ea[p>>>16&255]
v=D.ea[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ea[b0&255]
a7=D.ea[n>>>8&255]
t=D.ea[o>>>16&255]
w=D.ea[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ea[a6&255]^C.nt(D.ea[b0>>>8&255],24)^C.nt(D.ea[a5>>>16&255],16)^C.nt(D.ea[a4>>>24&255],8)^b5[a9][0]
o=D.ea[a4&255]^C.nt(D.ea[a6>>>8&255],24)^C.nt(D.ea[b0>>>16&255],16)^C.nt(D.ea[a5>>>24&255],8)^b5[a9][1]
n=D.ea[a5&255]^C.nt(D.ea[a4>>>8&255],24)^C.nt(D.ea[a6>>>16&255],16)^C.nt(D.ea[b0>>>24&255],8)^b5[a9][2]
b0=D.ea[b0&255]^C.nt(D.ea[a5>>>8&255],24)^C.nt(D.ea[a4>>>16&255],16)^C.nt(D.ea[a6>>>24&255],8)^b5[a9][3]
a4=D.yT[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yT[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yT[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yT[o>>>8&255]
i=D.yT[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yT[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o8(A.aH.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bOk.prototype={}
C.bOl.prototype={
gM(d){var w=this.a.length
return w},
aoQ(){return B.rg(this.a,A.i2,null,null)}}
C.baa.prototype={
v1(d){return C.hSt(d)}}
C.cs1.prototype={
MK(d){var w=d.w,v=Math.max(1,A.k.dj(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aa8(v,t+20,u+16,t,u,B.u1(d.x))},
nq(d){return!1}}
C.bPd.prototype={
cFe(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bB(new C.bPe(),x.E))},
mK(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mK)
case 6:w=5
return B.b(p.fyF(f,r),$async$mK)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mK,v)}}
C.avO.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8t.prototype={
A(d,e){if(e==null)return!1
if(J.bN(e)!==B.b_(this))return!1
return e instanceof C.a8t&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wR(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fJe)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.aVQ.prototype={
c1(d){var w=new C.aAF(!0,this.e,null,new B.di(),B.ck())
w.c_()
w.scF(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syI(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aGn()}}}
C.aAF.prototype={
syI(d,e){return},
gpy(){var w=this.aa$
return w!=null},
glb(){var w=this.aa$
return w!=null},
Mz(d){var w=d==null?B.h9Q(null):d
w.sa4M(this.ak)
return w}}
C.a0T.prototype={
S(){return new C.aJ3(B.aX(x.N))},
cSq(d){return this.d.$1(d)},
cQd(){return this.e.$0()}}
C.aJ3.prototype={
Z(){this.a1()
this.P6()},
P6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cQd(),$async$P6)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f8T(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
YV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f8X(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f8Y(t))
w=3
return B.b(C.anA(p),$async$YV)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f8Z(t,s,p))
w=4
return B.b(t.P6(),$async$YV)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YV,v)},
a18(d){return this.cpx(d)},
cpx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a18=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f8U(t))
s=J.q(d,"id")
w=3
return B.b(C.c_2(J.k(s==null?"":s)),$async$a18)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f8V(t))
w=1
break}q=C.h4z(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cSq(B.a([q],x.D)),$async$a18)
case 4:if(t.c==null){w=1
break}t.m(new C.f8W(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a18,v)},
P5(d,e){return this.bKL(0,e)},
bKL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f8O(q),r,null,!0,!0,x.y),$async$P5)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f8P(t))
s=s.h(e,"id")
w=4
return B.b(C.anz(J.k(s==null?"":s)),$async$P5)
case 4:if(t.c==null){w=1
break}t.m(new C.f8Q(t))
w=5
return B.b(t.P6(),$async$P5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
cEf(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.ir[B.bH(v)-1]+" "+B.bS(v)},
aQD(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ov,A.n),w,e,w,w,w,w,w,e)},
aQC(d){return this.aQD(d,44)},
b72(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ov:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J5,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J5,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.byH,u,u,u)],p))}return B.E(B.aC(A.c8,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bd,new B.o(u,u,u,r,u,s,A.n),A.hB,u,u,u,A.tQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f92(this,d),u,u,u,u,u,u,!1,A.a6),1)},
cji(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d_.j(0.14):D.XT,n=B.n(18),m=p?A.d_:A.dn
m=B.I(m,A.q,p?1.8:1)
w=this.aQC(A.q9)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aRC,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRE,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Ov:q
u=p?q:B.I(A.aZ,A.q,1.6)
r=p?D.bPf:q
return B.aC(q,B.df(q,B.B(B.a([w,A.be,t,B.df(q,r,q,q,A.bd,new B.o(q,q,u,q,q,v,A.a5),A.fC,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bd,new B.o(o,q,m,n,q,q,A.n),A.fC,q,q,A.d9,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f8S(this,p,d),q,q,q,q,q,q,!1,A.a6)},
cr8(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cEf(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dn,A.q,1)
v=r.aQC(A.NI)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aRC,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRE,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b3D(A.hF,A.bv,"Bring it back",r.r?q:new C.f9_(r,d))
return B.p(q,B.B(B.a([v,A.be,t,p,A.bp,r.b3D(A.e9,A.c7,"Delete",r.r?q:new C.f90(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XT,q,w,o,q,q,A.n),q,q,q,A.d9,D.btc,q,q,q)},
b3D(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hx(B.aC(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a6),w,f,w,w)},
asP(d,e,f){var w=null
return new B.D(D.bsf,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.ffF,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.f86,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bY,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQD(A.yF,46),A.be,D.bzz],t)
if(j.r)s.push(D.ed8)
s.push(B.aH(i,i,i,i,A.rq,i,i,i,new C.f95(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dn,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bvL,s,i),B.p(i,B.B(B.a([j.b72(0,A.yh,"Save",j.a.c.length),j.b72(1,A.NW,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.buP,A.el,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c7:A.bv).j(0.12)
s=B.n(14)
r=B.I((j.y?A.c7:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.NJ:A.e8
n=B.X(n,p?A.c7:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.TS,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.buL,A.i7,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fbH,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aC(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.feL,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f96(j,v),i,i,i,i,i,i,!1,A.a6))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asP(A.q9,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cji(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ecH)
else if(j.e==null)s.push(j.asP(A.alD,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.asP(A.oV,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cr8(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.co,B.cw(u,i,X.aiH,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc4f()
p=s?i:D.Ov
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cC,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yh,m?A.jm:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bvn,B.aC(i,B.df(i,B.B(B.a([k,A.a7E,new B.dq(1,A.co,B.eQ(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jm:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e_),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bd,new B.o(s,i,i,o,n,p,A.n),A.hB,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a6),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b1l,i,i,i,i,i,i,i,i)}}
C.op.prototype={
ah(){return B.F(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.YD.prototype={
S(){return new C.axE(B.a([],x.k),B.f9(null,x.H))},
ge2(){return this.c}}
C.axE.prototype={
Z(){this.a1()
this.Pf()},
Pf(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1S(t.a.c),$async$Pf)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cHv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pf,v)},
cxr(d){var w,v,u,t=this
d.c=new B.T(Date.now(),0,!1)
w=J.qk(t.d,new C.cHy(d))
v=w<0
if(v&&C.hPB(d))return t.f
u=t.d
if(v)J.pC(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fW6(new C.cHz(t),v)
return t.f=t.f.bB(new C.cHA(t,d),v).eR(new C.cHB())},
IE(d,e,f){return this.ccU(0,e,f)},
aYq(d,e){return this.IE(0,e,!1)},
ccU(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).cm(B.ea(new C.cHu(t,e),!1,null,x.H)),$async$IE)
case 3:w=4
return B.b(t.f,$async$IE)
case 4:w=5
return B.b(t.Pf(),$async$IE)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
aXG(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dyL:d
this.IE(0,new C.op(w,v,new B.T(Date.now(),0,!1)),!0)},
c3K(){return this.aXG(null)},
adm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cHC(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adm)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXG(s)
case 1:return B.h(u,v)}})
return B.i($async$adm,v)},
ID(d,e){return this.bKD(0,e)},
bKD(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$ID=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cHp(e),s,null,!0,!0,x.y),$async$ID)
case 3:if(g!==!0){w=1
break}t.m(new C.cHq(t,e))
w=4
return B.b(t.f,$async$ID)
case 4:w=5
return B.b(C.ago(t.a.c,e.a),$async$ID)
case 5:w=6
return B.b(t.Pf(),$async$ID)
case 6:case 1:return B.h(u,v)}})
return B.i($async$ID,v)},
Db(d){return this.bCI(d)},
bCI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Db=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cHl(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Db)
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
return B.b(t.aYq(0,d),$async$Db)
case 9:w=5
break
case 7:w=10
return B.b(F.h56(r,d.b,null),$async$Db)
case 10:w=5
break
case 8:w=11
return B.b(t.ID(0,d),$async$Db)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Db,v)},
bYn(){var w,v,u=null,t=[D.dyO,D.dyM,D.dyN],s=new C.cHs(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aS(999,999)
n.push(B.p(u,new B.y(D.dig[w],u,A.ow,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bn(v,v,v,v),u,u,A.n),u,u,u,u,A.o6,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fEE,A.O,B.bT(A.bA,n,A.bq,6,6),A.aR,B.aC(u,B.p(u,D.eRo,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.aj4,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cHr(this),u,u,u,u,u,u,!1,A.a6)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bXA,A.n),u,u,u,u,D.bvV,u,u,u)},
bCG(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cC,14)],x.V),r=x.p
s=B.p(v,B.bv(B.n(6),new B.an(A.W,v,A.b2,A.r,B.a([B.eQ(A.A,F.ao9(d.b),A.f,A.bW),D.eiF,B.ao(v,B.aC(v,B.p(v,D.bQ3,A.f,v,v,D.b2h,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cHg(this,d),v,v,v,v,v,v,!1,A.a6),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f5r,v,v,v)
w=u===1?"":"s"
return B.aC(v,B.x(B.a([new B.fL(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fbT,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cHh(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cHi(this,d),v,v,v,v,v,v,!1,A.a6)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.D(I.ahB,B.hx(B.aC(s,B.p(s,A.aoi,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.w8,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc53(),s,s,s,s,s,s,!1,A.a6),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n6,s,s,s,!0,s,s,s,s,s,D.fEI,s,s,s,1,s,!0)
if(t.e)r=D.b5G
else{w=t.bYn()
v=B.a([D.fqf,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f4T,s,s,s),A.f,s,s,new B.o(D.bap,s,s,u,s,s,A.n),s,s,s,s,A.y_,s,s,s))}r=B.a([new B.nU(A5.Zd,new B.mb(w,s),s),new B.nU(D.bvh,new B.mb(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eXY)
else r.push(new B.nU(D.buN,B.OV(new B.ov(new C.cHD(t),J.ad(t.d),!0,!0,!0,0,B.t1(),s),D.b4Y),s))
r=B.vz(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c6(q,D.b9f,r,s,!1,!1,s,s)}}
C.YB.prototype={
S(){return new C.axA(B.a([],x.bx))},
TW(d){return this.d.$1(d)}}
C.aEW.prototype={}
C.axA.prototype={
b0q(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b4,A.aN),w),u=this.gaYp()
v.aQ(0,u)
w=new B.ar(new B.bb(e,A.b4,A.aN),w)
w.aQ(0,u)
return new C.aEW(v,w,f)},
E1(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pY,new C.cGK(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b4,A.aN),v)
t=m.gaYp()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.bb(w.b,A.b4,A.aN),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.bb(w.c,A.b4,A.aN),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b4,A.aN),v)
o.aQ(0,t)
n=new B.ar(new B.bb(p.b,A.b4,A.aN),v)
n.aQ(0,t)
r.push(new C.aEW(o,n,p.c))}if(r.length===0)r.push(m.b0q("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gpd()
q=r.a
q.TW(q.c)}q=r.d
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
s.P$=0}r.a2()},
gpd(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mu(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rm(n,w,v,t,u)},
AL(){var w=0,v=B.j(x.H),u=this,t
var $async$AL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gpd()
t=u.a
w=2
return B.b(t.TW(t.c),$async$AL)
case 2:return B.h(null,v)}})
return B.i($async$AL,v)},
c51(){this.m(new C.cGJ(this))
this.E1()},
aXn(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cGM(w,d,v))
w.E1()},
c52(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cGU())
this.E1()
$.aW.x1$.push(new C.cGV(w))},
Qq(d){return this.cj8(d)},
cj8(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(80,1400,A.eF),$async$Qq)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Qq)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahV(o,".png")?"image/png":"image/jpeg"
r.m(new C.cGN(d,n,p))
r.E1()
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
return B.i($async$Qq,v)},
xL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hs5(r,t.gpd()),$async$xL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cGL(t,s))
t.E1()
case 1:return B.h(u,v)}})
return B.i($async$xL,v)},
cjq(d){var w,v=this,u=null,t=F.fCL(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hn(D.bJk,D.fsK,new C.cGP(v,d),u),u)
w=x.p
return new B.D(A.cv,new B.an(A.W,u,A.aa,A.r,B.a([B.bv(B.n(12),B.fQ(t,A.A,u,u,A.cg,A.bW,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3E(A.kz,new C.cGQ(v,d)),A.bp,v.b3E(A.cB,new C.cGR(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3E(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hD,B.X(d,A.c,w,w,w,18),w),A.cM,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cM,w,w,A.ah)},
IF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AL(),$async$IF)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h56(s,t.gpd(),new C.cGT(t)),$async$IF)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.D(A.pZ,B.hn(D.bO0,D.fyK,n.gawy(),B.fz(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.aoh,m,m,m,new C.cGW(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.X3,m,1,m,m,m,!1,m,!1,E.n6,m,m,m,!0,m,m,m,m,m,D.ftB,m,m,m,1,m,!0),j=At.aUx(O.lm,A.c,Ad.VX,A.ob,D.fuk,n.gc50()),i=B.n(18),h=n.gawx(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jx,12)],x.V)
g=B.aC(m,B.p(m,new B.a7(92,142.1818181818182,B.eQ(A.A,F.ao9(n.gpd()),A.f,A.dv),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a6)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.ep,B.E(B.x(B.a([D.fGf,A.au,B.d(F.h3C(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fho,m,m,m),A.R,B.dn(E.anA,E.aSp,h,B.bo(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.X3,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.os,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aR],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aS(16,16)
u=new B.az(O.lm.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bMJ,m,m,m,v===0?m:new C.cGX(n,v),m,m,m,m,"Move up",A.ce)
r=i.length
q=B.aH(m,m,m,m,D.bT3,m,m,m,v===r-1?m:new C.cGY(n,v),m,m,m,m,"Move down",A.ce)
r=r===1?m:new C.cGZ(n,v)
p=new B.aS(12,12)
o=new B.aS(12,12)
g.push(B.p(m,B.x(B.a([new B.ci(A.aP,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fhW,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e9,A.oP,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ce)],l),m),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e4(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bn(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.cjq(i[v]),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e4(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bn(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n6,m,new B.bO(u,u,u,u),new B.bn(w,w,w,w),m,m,A.n),m,m,new C.a8t(h),A.e7,D.btr,m,m,m))}return B.os(!0,B.c6(k,E.afP,B.cw(g,m,D.btT,m,m,A.ag,!1),m,!1,!1,j,m),new C.cH_(n),x.C)}}
C.axC.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c7:E.n6,q=B.n(16),p=B.n(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.d5.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(u.e,t,t,t,t,t,t,D.aQZ,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.eA,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aqo.prototype={
S(){return new C.aDI()}}
C.aDI.prototype={
Z(){this.a1()
this.ZA()},
bv(d){this.bG(d)
if(d.c!=this.a.c)this.a0Y()},
a0Y(){var w=0,v=B.j(x.H),u=this,t
var $async$a0Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dT(t,x.H),$async$a0Y)
case 2:u.d=null
if(u.c!=null)u.m(new C.ec8(u))
w=3
return B.b(u.ZA(),$async$a0Y)
case 3:return B.h(null,v)}})
return B.i($async$a0Y,v)},
ZA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d1(n,"http://")||J.d1(n,"https://")||J.d1(n,"data:")){o=B.Yf(B.cE(n,0,null),new B.Ph(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.io(0).d8(0,A.pU),$async$ZA)
case 7:if(r.c==null){w=1
break}r.d.tn(!1)
r.m(new C.ec6(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.ec7(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZA,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c7M(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.ha(0)
w.m(new C.ec9(w))}else{v.pW(0)
w.m(new C.eca(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.ji.j(0.92),D.L0.j(0.95)],x.O)
w=B.I(A.c0.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.qc,A.c0,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.N,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.az,A.aC,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.av(B.X(A.amT,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b6v
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eQ(A.A,new B.a7(r,q,new B.Ab(s,o),o),A.r,A.bW)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iM,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aC(o,B.bv(n,new B.an(A.W,o,A.b2,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7L(),o,o,o,o,o,o,!1,A.a6)}}
C.xz.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.adl.prototype={
B(d){return B.oW(new C.dZM(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acK.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.ji.j(t?0.35:0.4),A.q,1),p=t?D.Ly:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cC,14)],o),m=B.n(10),l=B.I(A.c0.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fL(0.5625,C.i72(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajy,u,u,u,u),1)
m=D.ji.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.ji,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bgC,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.az(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ahR,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xC.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nK.prototype={}
C.bje.prototype={
ZJ(d){var w=null
return new B.bI(A.a3,w,w,B.Bj(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c8d(){return this.ZJ(1)},
axb(d){var w=null,v=B.n(8),u=B.I(A.i4,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adM,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i4,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dX(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i4,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axb("TAARIFA ZA WANANDOA"),A.am,w.c8d(),A.cV,w.ZJ(0.9),A.cV,w.ZJ(0.7),A.O,w.axb("TAMKO LA MAKUBALIANO"),A.fG,w.ZJ(1),A.cV,w.ZJ(0.95),A.O,w.axb("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ado.prototype={
B(d){return B.oW(new C.ehn(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.af4.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ay.j(q?0.35:0.4),A.q,1),m=q?D.bgd:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cC,14)],l),j=B.n(10),i=B.I(A.ay.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h47(w.a)
if(v==null)v=A.d.gI(D.R2)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fL(0.5625,new B.an(A.W,r,A.b2,A.r,B.a([B.bW(0,B.fQ(C.h46(v.d),A.A,r,r,A.cg,A.bW,!0,r,!1,r,r),0,0,0),new B.D(A.aiy,new C.bje(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajy,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lz,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b9K,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.az(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ahR,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kV.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7V.prototype={}
C.VN.prototype={
S(){var w=$.aw()
return new C.aE0(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mD(0,null,null),A.d.gI(D.a37),D.dJ5,B.a([],x.L),B.a([],x.gE))}}
C.aE0.prototype={
Z(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zz(C.fGE(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fFA().bB(new C.ekF(v),w)
$.qW().jI(0,"assets/images/ngmy_logo.png").bB(new C.ekG(v),w).eR(new C.ekH())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
ahf(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
IY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(88,1600,A.eF),$async$IY)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$IY)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hsl(m,p),$async$IY)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bDf(new B.pR(o,1),m),$async$IY)
case 10:if(r.c!=null)r.m(new C.ekh(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ahf("Could not open that picture. "+B.u(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IY,v)},
WL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hsl(s,q),$async$WL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bDf(new B.pR(r,1),s),$async$WL)
case 4:if(t.c!=null)t.m(new C.ekd(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WL,v)},
aea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eko(q))
t=4
q.a.toString
p=C.ibu()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aea)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekp(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ahf(B.u(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekq(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aea,v)},
ZO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ekj(q,i))
t=4
q.a.toString
p=C.ibt()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZO)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekk(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.ekl(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekm(q))
$.aW.x1$.push(new C.ekn(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZO,v)},
c8t(d){this.m(new C.eki(this,d))},
Ei(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ei=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ekf(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Ei)
case 7:w=8
return B.b(B.bM(A.ne,null,x.H),$async$Ei)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m3(1800/p.gY(0).a),$async$Ei)
case 9:o=e
w=10
return B.b(o.hw(A.h2),$async$Ei)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A6.agr(J.eX(A.dD.gaP(n)),"ngmy_news.png","image/png"),$async$Ei)
case 11:m=e
q.ahf(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ahf(B.u(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekg(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ei,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l4,a2,a2,a2,new C.ekw(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bOw,a2,a2,a2,new C.ekx(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.p3,a2,a2,a2,a4?a1.gaZD():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.B1,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eRy,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fL(0.7142857142857143,B.eQ(A.A,new B.ey(new C.b0P(t,s,r,a1.x,a2),a1.d),A.f,A.dv),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zT,a2,a2,a2)
t=a1.as?a2:a1.gc8s()
t=B.a([B.E(B.dn(D.bPg,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bo(D.tw,a2,a2,a2,A.c,A.fT,a2,a2,new B.b7(B.n(14),P.v8),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.n(10),B.fQ(r,A.A,a2,a2,A.cg,A.bW,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aH(a2,a2,a2,a2,D.bM1,a2,a2,a2,a1.as?a2:a1.gbJe(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zT,a2,a2,a2)
q=B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aSu("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dcD[o]
p.push(B.mL(a2,D.tw,new B.y(n.a,a2,A.pk,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hJ,new C.eky(a1,n),a2,a2,P.v8,a2))}p=B.bT(A.bA,p,A.bq,6,8)
m=a1.Q
m=B.bT(A.bA,B.a([D.fER,A.be,B.j9(a2,a2,a2,D.fp1,a2,new C.ekz(a1),m==="en",a2,a2,a2,a2),A.ab,B.j9(a2,a2,a2,D.foX,a2,new C.ekA(a1),m==="sw",a2,a2,a2,a2)],w),A.t5,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zT,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d9(D.a37,0,B.dG(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQY(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aP,!1)
i=B.a([],w)
for(j=B.d9(D.a37,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQY(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aP,!1)
i=a1.as?a2:a1.gc8v()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cv,s,a2),t,A.aB,new B.D(A.cv,r,a2),q,A.O,p,A.R,m,A.aB,new B.D(A.cv,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aR,B.aC(a2,B.p(A.A,B.B(B.a([D.bPa,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fU,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uj,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a6)],w)
if(a4){u=B.a([A.dZ,B.B(B.a([D.dtC,A.at,D.bzT],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tw
p=new B.aS(16,16)
d=new B.az(A.bD,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.ffr,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A7.VL,new B.o(q,a2,new B.bO(d,d,d,d),new B.bn(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cv,A.i7,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cZO[o]
t.push(B.mL(a2,D.tw,new B.y(a0,a2,A.Jk,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hJ,new C.ekB(a1,a0),a2,a2,P.v8,a2))}u.push(B.bT(A.bA,t,A.bq,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aSu("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ekC(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc8u()
u.push(B.B(B.a([t,A.ab,B.HO(A.yK,s,B.nE(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZD()
u.push(B.dn(A.p3,D.fAm,t,B.bo(A.cS,a2,a2,a2,a2,A.J3,a2,a2,new B.b7(B.n(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.aik,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jZ.j(0.5),A.q,1)
v.push(B.bW(0,B.en(B.av(B.p(a2,B.B(B.a([E.a7F,A.ep,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iS,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.AU,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bwc,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.B1,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aSu(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.Y),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tw,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.Jf,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQY(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bE:A.bD
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kX,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bst,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jr,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aC(t,B.p(t,B.x(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.io,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eke(this,d),t,t,t,t,t,t,!1,A.a6)}}
C.zz.prototype={
bc_(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zz(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cIJ(d){var w=null
return this.bc_(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cdS(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fI(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.cdQ(),B.S(w).k("M<1,m>")).c0(0,new C.cdR())
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
return this.bc_(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFv(d){return this.f}}
C.tn.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bx.prototype={
a5(){return"NewsFrame."+this.b}}
C.li.prototype={}
C.b0P.prototype={
ro(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZF(d,e,f,g){return this.ro(d,e,null,1.25,f,A.bo,g)},
PM(d,e,f,g,h){return this.ro(d,e,f,1.25,g,A.bo,h)},
axh(d,e,f,g,h){return this.ro(d,e,null,f,g,A.bo,h)},
axg(d,e,f,g,h){return this.ro(d,e,f,g,0,A.bo,h)},
aZH(d,e,f,g,h){return this.ro(d,e,null,f,0,g,h)},
c8z(d,e,f,g,h,i){return this.ro(d,e,f,g,0,h,i)},
axf(d,e,f,g){return this.ro(d,e,null,f,0,A.bo,g)},
aed(d,e,f){return this.ro(d,e,null,f,0,A.bo,A.cO)},
aZG(d,e,f,g,h){return this.ro(d,e,f,g,0,h,A.cO)},
c8y(d,e,f,g){return this.ro(d,e,null,f,0,g,A.cO)},
c8x(d,e,f,g){return this.ro(d,e,f,g,0,A.bo,A.cO)},
aee(d,e,f,g,h,i){return this.ro(d,e,f,g,h,A.bo,i)},
aZE(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.jM(new B.eu(d,u,u,A.cP,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c6,new B.jv(1),u,u,h,u,A.c3,u)
v.uE(g)
if(!v.b.a.c.gaEg())return w
w-=2}return j},
aeb(d,e,f,g,h,i,j,k){return this.aZE(d,e,f,g,h,i,j,k,A.bo)},
azp(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
azo(d){return this.azp(null,!1,d)},
ah3(d,e){return this.azp(null,d,e)},
cqh(d,e){return this.azp(d,!1,e)},
gb0O(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaV8(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OC(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aeb(w.gaV8(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaV8(),v,g,A.a2,v,v,v,w.axg(u,t,f,1.02,A.P),e,v,v)},
aVd(d){return this.OC(d,A.L,null,2,78,30)},
abB(d,e,f,g,h){return this.OC(d,e,null,f,g,h)},
bYf(d,e,f,g,h){return this.OC(d,A.L,e,f,g,h)},
bYe(d,e,f){return this.OC(d,A.L,null,e,f,30)},
RI(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jI,B.d(s,u,g,A.a2,u,u,u,v.aZG(w,v.aZE(t,w,A.cO,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b6I(d){return this.RI(d,A.L,null,3,24)},
aAV(d,e,f,g){return this.RI(d,e,null,f,g)},
cxV(d,e,f){return this.RI(d,A.L,e,3,f)},
b6J(d,e){return this.RI(d,e,null,3,24)},
cxT(d,e){return this.RI(d,A.L,null,3,e)},
cxU(d,e,f){return this.RI(d,e,null,3,f)},
aqP(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.h_,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PM("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nz(){return this.aqP(null,!0)},
aqO(d){return this.aqP(null,d)},
bF6(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i6,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c8y(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vy(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.T(Date.now(),0,!1),i=m.gb0O(),h=A.o.am(j.bC(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hZZ(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZF(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aeb(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aeb(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eG,l,l,l,m.aee(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bCv(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hH,A.j,0,l,l),A.am,m.ah3(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ep,B.E(B.d(i,l,1,A.eG,l,l,l,m.axf(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bCv(j),l,l,l,l,l,l,m.PM(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hH,A.j,0,l,l),A.O,m.cqh(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0O()
v=B.d("NGMY",l,l,l,l,l,l,m.axh(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eJ(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.ro(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.aee(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dN,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l)
t=m.ah3(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axf(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ah3(!0,1.4),A.au,B.d(C.bCv(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.azo(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axh(v,u,1,3,A.P),A.L,l,l),A.O,m.ah3(!0,1.2),A.au,B.B(B.a([B.d(C.bCv(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l),A.au,m.azo(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acJ(d){return this.vy(d,!1)},
aec(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aee("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
c8w(d,e){return this.aec(d,null,e,null)},
aXf(d){var w=null,v=new B.T(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.axg("Roboto",15,t,1,A.cx),r=B.X(E.al_,t,w,w,w,18),q=A.a.ap(A.p7[B.bH(v)-1],0,3),p=A.a.aX(A.o.u(B.h4(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bS(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fQ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avZ(){return this.aXf(A.mB)},
b3S(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.aee("Roboto",this.aeb(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azs(d,e,f){return this.b3S(d,e,f,30)},
aAY(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vx,B.d(v,w,e,A.a2,w,w,w,this.c8x("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6N(d){return this.aAY(d,3,22)},
cy5(d,e){return this.aAY(d,e,22)},
tF(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fQ(r,A.A,s,s,A.cg,A.bW,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dp(D.byY,w,s)
if(v==="sepia")w=new B.Dp(D.byX,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.yc,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bU(A.A,0.95,A.x,s,0,B.a([A.K,A.X_.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.W,s,A.b2,A.r,v,s),s)},
qr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tF(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.el,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lV,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e9c,14)],x.V)
v=l.tF(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eJ(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aZG(j.as,13.5,D.bbg,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bez,k,k,k,w,k,A.n),k,e,k,k,D.btO,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bv(B.n(25),l.tF(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.i_(l.tF(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lV,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e92,10)],x.V)
return B.eJ(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bW(0,B.p(k,l.tF(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rd,k,k,k),0,0,0),B.ao(k,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.ny(l.tF(d,e),A.aq,D.h3S),new C.bco(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tF(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bl(u));++n){m=new B.aS(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bN,k,k,new B.bn(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.ci(A.aP,A.qh,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b2,A.r,w,k),A.f,A.ed,k,k,k,e,k,k,D.byd,k,k,d)
case 8:w=d/2
v=B.wZ(A.hg,new B.aS(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bv(B.wZ(A.hI,new B.aS(w,w)),l.tF(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fS,22)],x.V)
return B.p(k,l.tF(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a7(d,e,B.ny(l.tF(d,e),A.aq,D.hal),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tF(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.el,k,k,d)}},
aOw(d,e){return this.d.e===D.RH?A.bI:this.bF6(d,e)},
Wj(d){return this.aOw(d,A.L)},
gaAe(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAd(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZH(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PM("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aed(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jA(B.x(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcgE(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9g(d,e,f,g){return B.cq(new C.cdT(this,e,d,f,g))},
a9f(d){return this.a9g(d,22,!0,18)},
Wu(d,e){return this.a9g(d,22,!0,e)},
aPy(d,e,f){return this.a9g(d,22,e,f)},
bH9(d,e,f){return this.a9g(d,e,!0,f)},
b9I(d,e,f,g){return B.cq(new C.cdU(this,e,d,g,!0,f))},
cfs(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.acJ(824),A.aB,k.aVd(824),k.b6I(824),A.O,k.Nz(),A.ac,B.av(k.qr(824,360),j,j,j),k.Wj(824),A.ac,B.E(k.a9f(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.acJ(824),A.aR,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.abB(440,A.bi,3,62,26),k.aAV(440,A.bi,2,20),A.b7,k.aqP(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.J4,B.x(B.a([k.qr(362,310),k.Wj(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.azo(2),A.ac,B.E(k.a9f(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vy(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bYf(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cxV(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bo,j,j,j)
u=B.a([B.av(k.qr(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RH){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axg(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lT,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Nz(),A.R,B.E(k.Wu(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vy(824,!0)
w=k.qr(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.OC(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b1,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bwv,j,j,j),j,j,0,0,j,j)],u),j),k.b6J(824,A.bi),A.O,k.Nz(),A.R,B.E(k.a9f(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.acJ(824),A.aB,k.aVd(824),k.b6I(824),A.O,k.Nz(),A.ac,B.E(k.b9I(3,300,B.x(B.a([k.qr(300,300),k.Wj(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vy(824,!0)
v=x.p
u=B.x(B.a([k.abB(440,A.bi,3,62,26),k.aAV(440,A.bi,2,20),A.b7,k.aqO(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aOZ,new B.D(A.i6,k.qr(364,h.e===D.RH?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wu(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.acJ(824),A.ac,k.bYe(824,2,70),k.cxT(824,21),A.O,k.Nz(),A.ac,B.E(k.b9I(3,340,B.av(k.qr(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vy(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bCv(new B.T(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PM(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZH(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b7)
if(k.gaAe())v.push(k.aAd(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahP,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.abB(570,A.bi,3,62,28),k.cxU(570,A.bi,20),A.O,k.aqO(!1),A.O,B.av(k.qr(570,330),j,j,j),k.Wj(570),A.R,B.E(k.aPy(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vy(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PM(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ac,B.p(j,B.x(B.a([t,A.am,k.OC(788,A.bi,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.buQ,j,j,j),k.b6J(824,A.bi),A.R,B.av(k.qr(824,310),j,j,j),k.Wj(824),A.O,k.Nz(),A.R,B.E(k.a9f(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vy(824,!0),A.aR,new B.an(A.W,j,A.aa,A.r,B.a([k.qr(824,430),B.ao(18,k.c8w(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.azs(824,3,66),k.b6N(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avZ(),A.aB,B.E(k.Wu(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vy(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.aec(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b3S(410,4,58,28),k.aAY(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aP_,k.qr(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avZ(),A.aR,B.E(k.Wu(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vy(824,!0)
v=k.qr(824,420)
u=B.hCF(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fw(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c8z(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bwL,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.azs(824,3,62),k.b6N(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aXf(A.lu),A.aB,B.E(k.Wu(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vy(824,!0)
u=h.w
t=x.p
w=B.a([k.qr(824,380),B.ao(j,k.aec(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.azs(824,2,60)
r=k.cy5(824,2)
p=k.avZ()
o=B.E(k.aPy(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.W,j,A.aa,A.r,w,j),A.aR,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bv(B.n(14),k.tF(150,104),A.aq),A.oo,B.E(B.x(B.a([k.aec("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.axf(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.N,0,A.p),1),B.X(A.eA,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vy(824,!0),A.by,k.abB(824,A.bi,3,62,30),k.aAV(824,A.bi,2,22),A.R,k.aqO(!1),A.R,B.av(k.qr(824,330),j,j,j),k.aOw(824,A.bi),A.aR,B.E(k.bH9(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bW(0,B.c0(s,new B.o(s,s,s,s,s,new B.a9(A.az,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bW(0,B.b3(s,s,s,new C.b8U(B.b0(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bxh,B.x(B.a([B.E(t.cfs(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZF(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PM(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hH,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bW(0,B.e1(B.b3(s,s,s,new C.brx(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i_(B.fQ(q,A.A,s,s,A.cg,A.bW,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mB,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axh(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.de(B.p(s,B.B(o,A.m,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.byl,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jA(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bcp.prototype={
jg(d){return C.hhF(d)},
jU(d){return!1}}
C.bco.prototype={
a3(d,e){var w,v=C.hhF(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aR(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.bu3.prototype={
jg(d){var w,v,u,t,s,r,q,p,o=new B.eE()
o.dt(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bD(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bD(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jU(d){return!1}}
C.b8U.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eE()
k.dt(7)
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
w.sar(new B.bU(A.A,0.5,A.x,l,0,B.a([A.L1.j(0.13),A.K],v),l,l).aw(0,B.bV(new B.v(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
au(d){return!1}}
C.brx.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fZ(u,u,u,u,B.d0(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c6,u,A.dO,A.c3)
s.en()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.jc(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.v(-v/2,-t.gbc(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.VQ.prototype={
S(){return new C.aE4()}}
C.aE4.prototype={
Z(){var w=this
w.a1()
B.fxb(w.a.c,null).bB(new C.elR(),x.g7).bB(new C.elS(w),x.a)
w.a.toString},
gaNk(){var w=D.avB[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxi(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaNk()
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
return new B.a8(q,w,q+s,w+t)},
ZQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.elE(r))
t=4
q=r.gaxi()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qn()
m=B.B9(n,null)
i=B.N()
i.Q=A.h0
m.or(g,q,new B.a8(0,0,0+p,0+o),i)
w=7
return B.b(n.os().zm(J.h77(p),J.h77(o)),$async$ZQ)
case 7:l=e
w=8
return B.b(l.hw(A.h2),$async$ZQ)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eX(J.vq(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.elF(r))
r.c.K(x.q).f.U(D.f_A)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZQ,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l4,s,s,s,new C.elL(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fCU,s,s,!0,s,s,t.y||r==null?s:t.gc8A(),s,s)],p),s,s,!0,!0,A.B1,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fGR,s,s,s,1,s,!0)
if(r==null)p=A.lL
else{w=B.E(new B.D(A.bP,B.av(new B.fL(t.gaNk(),B.cq(new C.elM(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.io,B.j9(s,s,s,new B.y(D.avB[u].a,s,E.aQN,s,s,s,s,s,s,s,s,s),s,new C.elN(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aP,!1),s),B.B(B.a([D.bPV,B.E(B.l1(s,s,s,6,1,new C.elO(t),t.f),1),D.bPx],p),A.m,s,A.e,A.j,0,s,s),D.fAg,A.am,B.bK(!1,D.fzZ,s,s,!0,s,s,new C.elP(t,d),s,s)],p),A.m,s,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Xd,s,s,s,s,s,s,D.bub,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c6(q,A.B1,p,s,!1,!1,s,s)}}
C.bbW.prototype={
a3(d,e){var w
$.W()
w=B.N()
w.Q=A.cg
return d.or(this.b,this.c,new B.a8(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_U.prototype={
S(){var w=$.aw(),v=x.A
return new C.aFr(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a3I),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oC.prototype={}
C.aFr.prototype={
gaVl(){var w,v,u=this
if(u.p1)w=new B.vI(1,u.p2,0.9,u.p3).iM().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eVr(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Ys(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ys=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qW().jI(0,"assets/images/ngmy_logo.png"),$async$Ys)
case 7:q=e
p=J.eX(J.vq(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bDf(new B.pR(p,1),o),$async$Ys)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eUj(r,p))
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
return B.i($async$Ys,v)},
PP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(92,1800,A.eF),$async$PP)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$PP)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bDf(new B.pR(p,1),n),$async$PP)
case 9:if(r.c==null){w=1
break}r.m(new C.eUH(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PP,v)},
b3e(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aJ=w.aF=w.aA=w.a_=w.b8=w.bi=w.y2=0
w.b2=null
w.b1=0.25
w.bb=null
w.bL=0.5
w.aI=1
w.c6=w.bF=w.bh=0
w.cL=w.c4=!1},
aX_(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzY(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dfu)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzY(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzY(C.h2_(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzY(C.h2_(1-a0*0.5,n,n,n),w)}return a1?C.bzY(C.h2_(-1,255,255,255),w):w},
aB3(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l3(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zf(u,v,w)
this.dx.pe(new C.eUR(t),!0)
return t},
b5M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aB3()
w=C.i9b(e.d.a.a,e.db)
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
return C.i5G(d,k,v,a0,j,e.gaVl(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cvM(){return this.b5M(null)},
Da(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Da=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$Da)
case 3:w=4
return B.b(B.bM(A.eM,null,x.H),$async$Da)
case 4:w=5
return B.b($.aW.gmF(),$async$Da)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.m3(1080/r.gY(0).a),$async$Da)
case 7:w=6
return B.b(e.hw(A.h2),$async$Da)
case 6:q=e
u=q==null?null:J.eX(A.dD.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
aa8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aa8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eU2(q))
t=4
w=7
return B.b(q.Da(),$async$aa8)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cL.gct().aK(p)
n=C.BL(null,null,null,null,D.oi,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5M(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eU3(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa8,v)},
At(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$At=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eU0(q))
t=4
w=7
return B.b($.aW.gmF(),$async$At)
case 7:w=8
return B.b(B.bM(A.nf,null,x.H),$async$At)
case 8:w=9
return B.b($.aW.gmF(),$async$At)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m3(1080/p.gY(0).a),$async$At)
case 10:o=e
w=11
return B.b(o.hw(A.h2),$async$At)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A6.agr(J.eX(A.dD.gaP(n)),"ngmy_quote.png","image/png"),$async$At)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.U(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eU1(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$At,v)},
ciz(){var w=this.p4
w.toString
return B.cq(new C.eUA(this,w))},
aZO(d,e){var w=null
return B.bs(w,w,w,w,w,D.f9Z,w,w,!0,new B.b4(4,B.n(16),P.v8),w,w,w,w,w,D.tw,!0,w,w,w,w,new B.b4(4,B.n(16),D.b__),w,w,w,w,w,w,w,w,A1.DG,e,w,w,w,w,w,w,w,D.ffi,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xU(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aRz,w,w,w))
return new B.D(H.ahG,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZN(d,e){var w=null,v=B.n(18),u=B.I(A.bD,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jM),A.f,w,w,new B.o(D.tw,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vF(d){return this.aZN(d,A.bB)},
oc(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uj:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bD,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jm,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jm,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aC(r,B.df(r,B.B(s,A.m,r,A.e,A.N,0,r,r),r,r,A.bd,new B.o(w,r,u,v,r,p,A.n),A.hB,r,r,r,A.Fx,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a6)},
ag2(d,e,f){return this.oc(d,null,e,f)},
axm(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eC:A.bD,s=x.p
v=B.a([B.df(w,d,w,w,A.bd,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hB,w,e,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aC(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a6)},
aZR(d,e,f,g,h,i){return this.axm(d,e,f,g,h,5,i)},
ko(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f6Y,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aC(u,D.ecL,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eUN(this,h,i),u,u,u,u,u,u,!1,A.a6))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQF,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.ZF,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avd(w).cK5(A.b6,A.bD,A.b6.j(0.2),A.c,D.eQQ,4)
return new B.D(A.xK,B.x(B.a([s,B.aa4(B.l1(u,u,u,g,f,new C.eUO(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ai3(d,e,f,g,h,i){return this.ko(d,e,f,g,h,null,i)},
aiv(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dn:B.b0(u)
r=d==u
q=r?A.c:A.aZ
p=new B.az(q,r?3:1,A.q,-1)
t=t?D.bIX:o
n.push(B.aC(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eUQ(this,e,u),o,o,o,o,o,o,!1,A.a6))}return B.bT(A.bA,n,A.bq,10,10)},
bLi(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3I
else{v=x.a8
w=B.C(new B.a_(D.a3I,new C.eTT(o),v),v.k("J.E"))}v=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZO("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eTU(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8E,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZO("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eTV(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a4,n,A.an,n,n,n,n)
t=o.xU("DESIGNS",A.u4)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cRn[q]
r.push(new B.D(A.io,o.ag2(p,o.x===p,new C.eTW(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.cc(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aP),A.ac,new B.a7(n,118,B.hN(n,new C.eTX(o,w),w.length,n,n,A.aP,new C.eTY(),!1),n),A.O,o.aZN(B.x(B.a([B.iI(A.b6,n,n,A.af,!0,new C.eTZ(o),n,D.frm,n,D.fnG,o.k3),B.iI(A.b6,n,n,A.af,!0,new C.eU_(o),n,n,n,D.fkW,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aij)],s),A.F,n,A.e,A.j,0,A.p)},
cEw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aB3()
if(a7.length===0)return a5.vF(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jt,a6,a6,a6))
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
A.d.fq(m)
l=m.length!==0&&A.d.d7(m,new C.eVg(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eVn(a5)
j=new C.eVp()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jt,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aS(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eC:A.bD
d=new B.az(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aC(a6,B.p(a6,new B.y(e,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bn(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.MT,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eVh(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a6))}o=a5.vF(B.bT(A.bA,o,A.t5,6,6))
i=B.a([a5.oc("All words",L.amA,!1,new C.eVi(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ag2("Sentence "+a3,!1,new C.eVj(a5,a7,v,a2)))
a2=a3}}i.push(a5.ag2("Clear picks",!1,new C.eVk(a5)))
i=B.bT(A.bA,i,A.bq,8,8)
g=a5.xU("SIZE OF THE PICKED WORDS",D.am2)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dlg[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eVl(e,k)
f.push(a5.ag2(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bT(A.bA,f,A.bq,8,8),A.R,a5.oc("Make every word normal",A.l1,!1,new C.eVm(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
czC(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bzw,B.d(A.d.h1(D.axj,new C.eV_(q)).b,p,p,p,p,p,p,D.f8r,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eV0(q)),l=q.xU("HIGHLIGHT BEHIND THE WORDS",A.a0y),k=q.p1?-1:q.k4
k=q.aiv(k,new C.eV1(q),D.d0T)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.R,m,l,B.bT(A.bA,B.a([k,B.aC(p,B.p(p,D.bLW,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f2c,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eV4(q),p,p,p,p,p,p,!1,A.a6)],o),A.t5,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jt,p,p,p)],o)
if(q.gaVl()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ai3("Colour",l,0,360,new C.eV5(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ai3("Shade",k,0.15,0.9,new C.eV6(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ko("Strength",l,0.15,1,new C.eV7(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vF(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xU("LOOK",A.yz))
m=B.a([q.oc("Bold",K.am0,q.fy,new C.eV8(q)),q.oc("Italic",K.am1,q.go,new C.eV9(q))],o)
for(u=0;u<3;++u){l={}
k=D.cSz[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uj:p
w=w?p:A.c.j(0.07)
s=new B.aS(14,14)
r=new B.az(q.id===l.a?A.K:A.bD,1,A.q,-1)
m.push(B.aC(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bn(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eVa(l,q),p,p,p,p,p,p,!1,A.a6))}n.push(B.bT(A.bA,m,A.t5,8,8))
n.push(q.xU("COLOUR",A.no))
n.push(q.aiv(q.fx,new C.eVb(q),D.dc6))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jt,p,p,p))
n.push(q.xU("SIZE AND PLACE",A.Gv))
m=q.fr
m=q.ko("Text size",m,0.5,1.6,new C.eV2(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vF(B.x(B.a([m,q.ko("Up / down",l,0.12,0.5,new C.eV3(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.F,p,A.e,A.j,0,A.p)},
ciA(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bE.j(0.12)],x.O)
return B.aC(p,B.p(p,B.x(B.a([B.p(p,D.bRm,A.f,p,p,D.b1Y,p,62,p,p,p,p,p,62),A.aB,D.foV,A.am,D.ftz],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tw,p,v,w,p,new B.a9(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bvm,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZQ(),p,p,p,p,p,p,!1,A.a6)}w=x.p
v=B.B(B.a([B.bv(B.n(12),new B.a7(46,62,B.fQ(o,A.A,120,p,A.cg,A.bW,!1,p,!1,p,p),p),A.aq),A.be,B.E(B.x(B.a([D.fos,A.O,B.bT(A.bA,B.a([q.oc("Change",A.kz,!1,q.gaZQ()),q.oc("Remove",A.e9,!1,new C.eUE(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d8q[t]
u.push(q.oc(s.b,s.a,q.at===t,new C.eUF(q,t)))}u=B.bT(A.bA,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c1c(o)
break A}if(1===r){s=q.c0b()
break A}if(2===r){s=q.bH8()
break A}if(3===r){s=q.bNw()
break A}s=q.bJf()
break A}return B.x(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oc("Reset the whole picture",A.l1,!1,new C.eUG(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c1c(d){var w=this,v=x.p
return B.x(B.a([B.bT(A.bA,B.a([w.oc("Auto enhance",E.a0c,!1,new C.eUw(w)),w.oc("Make words easy to read",A.p0,!1,new C.eUx(w))],v),A.bq,8,8),A.aB,B.cq(new C.eUy(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c0b(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ko("Exposure",n,-1.5,1.5,new C.eUa(o),0,A.k.ab(n,1))
w=o.RG
w=o.ko("Brightness",w,-0.5,0.5,new C.eUb(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ko("Contrast",v,0.4,2,new C.eUc(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ko("Fade",u,0,1,new C.eUd(o),0,""+A.k.V(u*100))
t=o.aF
t=o.ko("Spotlight",t,0,1,new C.eUe(o),0,""+A.k.V(t*100))
s=o.a_
s=o.ko("Darken",s,0,0.85,new C.eUf(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ko("Vignette",r,0,0.9,new C.eUg(o),0,""+A.k.V(r*100))
q=o.aB
q=o.ko("Shade behind words",q,0,0.85,new C.eUh(o),0,""+A.k.V(q*100))
p=o.aJ
return o.vF(B.x(B.a([n,w,v,u,t,s,r,q,o.ko("Shade top & bottom",p,0,0.85,new C.eUi(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bH8(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ko("Colour strength",q,0,2.2,new C.eTw(s),1,""+A.k.V(q*100))
w=s.to
w=s.ko("Warmth",w,-1,1,new C.eTx(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ko("Tint",v,-1,1,new C.eTy(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vF(B.x(B.a([q,w,v,s.ko("Shift colours",u,-180,180,new C.eTz(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oc("Negative",D.bGV,s.y1,new C.eTA(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xU("COLOUR WASH",A.NR)
w=s.b2
q=B.a([null],x.Z)
A.d.v(q,D.aw1)
t=B.a([u,v,s.aiv(w,new C.eTB(s),q),A.O],t)
if(s.b2!=null){q=s.b1
t.push(s.vF(s.ai3("Wash strength",q,0,0.9,new C.eTC(s),""+A.k.V(q*100))))}return B.x(t,A.F,r,A.e,A.j,0,A.p)},
bNw(){var w,v,u,t,s,r=this,q=r.y2
q=r.ko("Blur",q,0,24,new C.eU4(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ko("Soft focus",w,0,1,new C.eU5(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vF(B.x(B.a([q,w,r.ko("Film grain",v,0,1,new C.eU6(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xU("LIGHT LEAK",I.alX)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d9(D.aw1,0,B.dG(8,"count",s),s))
u=B.a([v,w,r.aiv(q,new C.eU7(r),t),A.O],u)
if(r.bb!=null){q=r.bL
u.push(r.vF(r.ai3("Leak strength",q,0,1,new C.eU8(r),""+A.k.V(q*100))))}return B.x(u,A.F,null,A.e,A.j,0,A.p)},
bJf(){var w,v,u,t,s=this,r=s.aI
r=s.ko("Zoom",r,1,3,new C.eTG(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.ko("Left / right",w,-1,1,new C.eTH(s),0,""+A.k.V(w*100))
v=s.bF
v=s.ko("Up / down",v,-1,1,new C.eTI(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.x(B.a([s.vF(B.x(B.a([r,w,v,s.ko("Turn",u,-180,180,new C.eTJ(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bT(A.bA,B.a([s.oc("Turn 90\xb0",H.an6,!1,new C.eTK(s)),s.oc("Flip sideways",A.Gi,s.c4,new C.eTL(s)),s.oc("Flip upside down",A.Gi,s.cL,new C.eTM(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c3T(){var w=null,v=B.n(22),u=B.I(A.bD,A.q,1)
return B.p(w,B.x(B.a([D.eR1,A.R,D.fqo,A.aB,B.aC(w,B.p(A.A,D.eRe,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uj,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUz(this),w,w,w,w,w,w,!1,A.a6)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tw,w,u,v,w,w,A.n),w,w,w,w,A.bP,w,w,w)},
c10(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eUr(p),m=x.p,l=B.B(B.a([D.bzC,p.oc("Reset",A.l1,!1,new C.eUn(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jt,o,o,o),j=p.xU("SHAPE",A.an2),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cm[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZR(n.$2(t,p.cy),62,u.b,s===t,new C.eUo(v,p),62))}}i=B.bT(A.bA,i,A.bq,8,8)
v=p.xU("RING",A.rf)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ch[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZR(n.$2(p.cx,t),62,r.b,q===t,new C.eUp(s,p),62))}u=B.bT(A.bA,u,A.bq,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ac,p.vF(p.ko("Size",s,0.12,0.4,new C.eUq(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1M(d){return new B.a7(null,d,new B.fL(0.5625,B.cq(new C.eUK(this)),null),null)},
cyR(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bD,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uj:q
t=new B.aS(14,14)
s=D.dax[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bg,B.aC(A.c8,B.df(q,B.x(B.a([r,A.cV,new B.qq(A.e_,A.A,A.f,new B.y(s.b,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.N,0,A.p),q,q,A.bd,new B.o(q,q,q,new B.bn(t,t,t,t),q,u,A.n),D.br3,q,q,q,A.hC,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eUT(this,w),q,q,q,q,q,q,!1,A.a6),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bt9,A.lV,q,q,q)},
aQ4(){var w,v,u=this,t=null,s=u.cyR(),r=u.as
A:{if(0===r){w=u.bLi()
break A}if(1===r){w=u.cEw()
break A}if(2===r){w=u.czC()
break A}if(3===r){w=u.ciA()
break A}if(4===r){w=u.c10()
break A}w=u.c3T()
break A}v=x.p
return B.bv(A.tb,B.en(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,D.buc,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Xd,!0),A.aq)},
aMh(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc90(),p=B.n(16)
q=B.E(B.aC(r,B.p(r,D.eRp,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.aZ,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a6),1)
p=s.Q?r:s.gbN4()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bE.j(0.35),A.cC,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eWS)
else t.push(D.bL0)
t.push(A.ab)
t.push(D.bBp)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aC(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uj,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a6),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b14,r,r,r,r,G.ai7,r,r,r)},
aZP(){var w=null
return new B.D(T.ZA,B.B(B.a([B.aH(w,w,w,w,A.mF,w,w,w,new C.eU9(this),w,w,w,w,w,w),D.fFO,A.b7,D.bTF],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.B1,B.bm(!0,B.cq(new C.eVq(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bfu.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eE()
m.dt(7)
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
s.drawRect(B.c_(new B.a8(p,o,p+1.1,o+1.1)),n)
n.delete()}},
au(d){return d.b!==this.b}}
C.rw.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m8.prototype={}
C.zB.prototype={
ah(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nO.prototype={}
C.w1.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a82.prototype={}
C.ard.prototype={}
C.a0q.prototype={
S(){return new C.aHm(new B.ar(A.as,$.aw()),B.jU(!0,null,!0,!0,null,null,!1),D.dBP,B.a([],x.s),B.ew([D.I9],x.Q))}}
C.aHm.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a0a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C4(90,700,700,A.eF),$async$a0a)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a0a)
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
return B.i($async$a0a,v)},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aHt(78,n,1100,1100),$async$a0d)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bp(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fe(),$async$a0d)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cL.gct().aK(m))
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
return B.i($async$a0d,v)},
b3R(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fQ(A.cG.aK(A.d.gal(d.split(","))),A.A,u,u,A.cg,A.bW,!0,u,!1,u,u)
return w}catch(v){}return D.bpd},
c16(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.crQ(C.fE0(w,this.b3R(d),f),g)},
acu(d,e,f,g,h){var w=null,v=new C.f0C(f,e),u=new C.f0D(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bD:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.C_:A.NH,A.bU,w,w,w,26),w,w,w),D.eit],x.p),w),w)
else p=this.c16(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bKI],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mw,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0B(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aX5(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bv(B.n(8),B.fQ(A.cG.aK(A.d.gal(h.split(","))),A.A,p,p,A.cg,A.bW,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bD:A.bc.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Jy,p,p,p),1)],x.p)
if(f!=null)n.push(B.aC(p,D.a1r,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a6))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kX,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8A(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8A=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fHr(),$async$a8A)
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
return B.i($async$a8A,v)},
aem(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aem=B.e(function(d,a0){if(d===1){s.push(a0)
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
J.cf(p,h)}w=7
return B.b(C.fCJ(q,r.cx,j,new C.b1c(r.z,r.Q,r.as,r.at),new C.f0q(r),i,m,p,k),$async$aem)
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
n=B.ab(e)
if(r.c!=null)r.m(new C.f0r(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aem,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eH,g).w
g=B.aI(d,A.bY,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aC(h,B.p(h,D.bNW,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bc.j(0.5),A.J,24)],v),D.bXK,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f0S(i),h,h,h,h,h,h,!1,A.a6),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a1r,h,h,h,i.ax?h:new C.f0T(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbC2()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hx(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vT:A.hq,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w8,A.a5),h,40,h,h,h,h,h,40),A.cM,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cM,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aZx),h,h,h,h,h,h,h,h,A0.Jf,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.io,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aR0,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f0U(i)
s=i.aX5(A.lv,q,r,i.gcj1(),s)
r=i.z
r=B.E(i.acu(new C.f0W(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.acu(new C.f0X(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f0Y(i)
s=i.aX5(A.u_,r,p,i.gcj9(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.acu(new C.f0Z(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fuO,A.au,D.fxF,A.by,u,A.O,D.fw4,A.aB,v,A.by,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.acu(new C.f1_(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fzp],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bhp,A.q,1)
w=C.agZ(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bP0,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fe0,h,h,h),B.aL(!1,h,!0,D.ed0,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f10(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.bav,h,u,v,h,h,A.n),h,h,h,h,D.bsQ,h,h,h),h)],t))}o.push(A.by)
o.push(D.flD)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d3_[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bD,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bB(1,A.bg,new B.D(A.jr,B.aC(h,B.df(A.A,new B.y(""+l,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bd,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a5),A.eJ,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f11(i,l),h,h,h,h,h,h,!1,A.a6),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fE2)
o.push(A.O)
o.push(B.cq(new C.f12(i)))
o.push(A.by)
o.push(D.fsW)
o.push(A.O)
w=B.a([i.b6G("auto","Let AI choose",A.dY,A.Qq)],t)
for(v=x.O,m=0;m<11;++m){j=D.we[m]
u=j.d
w.push(i.b6G(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bT(A.bA,w,A.bq,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bc.j(0.5):A.bD,A.q,1)
o.push(B.p(h,B.iI(h,A.bc,h,h,h,new C.f0V(i),D.bK9,D.fDh,h,D.fnV,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aQf,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc94()
v=B.fq(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eWI:A.GI
o.push(new B.a7(h,54,B.ly(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ou,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cc(B.x(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vI,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.abF,h,h,h,h,h,h,h,h),h)},
bOH(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f0s(this,p,d)
if(d===D.D_)return new C.aDU(p,o,q)
w=B.n(16)
v=p?E.w8:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bD,A.q,1)
s=B.X(p?A.e8:C.hJH(d),A.c,q,q,q,20)
r=C.hJI(d)
return B.aC(q,B.df(q,B.x(B.a([s,A.au,B.eQ(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e_)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bd,new B.o(u,q,t,w,q,v,A.n),A.hB,q,64,q,A.hD,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a6)},
b6G(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bD
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aC(v,B.df(v,B.B(B.a([w,M.J5,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v,v,A.bd,new B.o(s,v,r,t,v,v,A.n),A.eJ,v,v,v,M.ajp,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0H(this,d),v,v,v,v,v,v,!1,A.a6)}}
C.a0p.prototype={
S(){return new C.aHl(new B.ar(A.as,$.aw()))}}
C.aHl.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
aen(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aen=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f0d(r))
w=1
break}B.eY()
r.m(new C.f0e(r))
t=4
q=C.ia4(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i9P(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f0f(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h1F()
f=$.CJ.h(0,k.a)
o=f==null||J.cn(f)?null:J.fs(f)
if(o==null){r.m(new C.f0g(r))
w=1
break}n=C.i9N(o,r.a.c)
C.i9J(r.a.c.a)
$.h0W=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h4w(j)
h=C.h4x(r.a.c)
e=C.h4y(r.a.c)
w=7
return B.b(C.bC9(k,r.a.c.a,j,h,new C.f0h(r),i,e,a0),$async$aen)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
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
return B.i($async$aen,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eH,i).w
i=B.aI(d,A.bY,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.anl,A.f,j,j,D.b0K,j,34,j,j,j,j,j,34),A.at,D.bAd],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Aq.a8k,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),Ar.ab8),j,j,j,j,j,j,j,j,A0.Jf,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aR0,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d_e[q]
o=A.c.j(0.06)
n=k.e?j:new C.f0j(k,p)
r.push(B.mL(j,o,new B.y(p,j,Aw.TQ,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v8,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bT(A.bA,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aQf,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gc95()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bc.j(0.5),A.ew.j(0.5)],x.O):D.cya
o=B.a([new B.ac(0,A.G,A.bc.j(0.35),A.cC,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ecX:D.bOA
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eH(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hK,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.R(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cc(B.x(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vI,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.abF,j,j,j,j,j,j,j,j),j)}}
C.b1c.prototype={}
C.aDU.prototype={
S(){return new C.bk9(null,null)}}
C.bk9.prototype={
gaxn(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pW,null,1,null,v)
w.cM(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaxn().q()
this.bvU()},
B(d){var w=null,v=this.a.d
return B.aC(w,B.c7(this.gaxn(),new C.egN(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a6)}}
C.bhH.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d5c[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xz.j(0.25+r*0.6).gp(0)
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
au(d){return d.b!==this.b}}
C.arL.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.ZM.prototype={
S(){return new C.aBm()}}
C.aBm.prototype={
gais(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahb(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAe(){var w=this.e
return w===$?this.e=C.h4w(this.a.c).t(0,D.D_):w},
a8n(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8n=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dk6(s))
u=3
r=A.d.h1(D.we,new C.dk7(s))
q=B.dd(C.h4w(s.a.c),x.Q)
l=q
J.hy(l,D.D_)
p=l
if(s.gAe())J.cf(p,D.D_)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAe()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h4x(i.c)
g=C.h4y(s.a.c)
w=6
return B.b(C.bC9(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8n)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahb(q,s.gais())
f=q==null?null:q.b
n=f==null?s.gais():f
if(!J.A(n,r.a)&&!s.gAe())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dk8(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8n,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bD:A.aL,A.q,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bC,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dkb(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.we[w]
u=o.gais()
t=o.f?n:new C.dkc(o,v)
f.push(new C.bsE(v,u===v.a,t,n))}f=B.m4(1.25,f,3,10,10,n,A.dT,!0)
u=B.n(18)
t=o.gAe()?D.c_v:n
if(o.gAe())s=n
else s=m?A.bm:A.bL
r=B.X(A.dY,o.gAe()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAe()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAe()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAe()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aaz(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dkd(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.aia,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fek,n,n,n)],g))
f=B.cc(B.x(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FF,n,n,A.ag)
u=o.f?n:o.gbB1()
t=B.bo(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.Y),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bvQ,e,n),new B.dq(1,A.co,f,n),new B.D(A.FE,new B.a7(1/0,50,B.bG(B.eH(B.av(o.f?A.rU:D.fvh,n,n,n),n,new B.o(n,n,n,s,n,D.bZ3,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tR,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bsE.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.lg,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lG,w,w,B.d(v.b,w,w,w,w,w,w,D.fei,w,w,w),w)],x.p)
if(q)v.push(D.aXp)
return B.aC(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bd,new B.o(w,w,p,t,s,new B.a9(A.az,A.aC,A.x,r,w,w),A.n),A.eJ,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a6)}}
C.egK.prototype={
aF1(d,e,f){return e+"@"+A.a.aX(A.o.fY(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wA(d,e){return this.aF1(0,e,null)}}
C.aLV.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.b18.prototype={
B(d){var w,v,u=null,t=C.h3l(this.c)
if(t==null)w=D.bnK
else{w=B.aI(d,u,x.w).w.cJy(D.bsm,D.eVT)
v=this.d
w=B.rj(B.e1(B.ao2(!1,t,!1,v,!1,390),!v,u),w)}return B.eQ(A.A,new B.a7(416,870,new C.blN(w,u),u),A.f,A.dv)}}
C.blN.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dhb[w]
u=new B.aS(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bn(u,u,u,u),t,D.apd,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dio[w]
u=new B.aS(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bn(u,u,u,u),t,D.apd,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bW(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cQ2,D.bXs,A.n),A.bf),0,0,0))
s.push(B.bW(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bW(13,B.bv(B.n(51),B.en(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aXB,B.p(t,t,A.f,t,t,D.b12,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bW(13,B.e1(B.bv(B.n(51),D.bpj,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.lf.prototype={
pB(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.es(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bh,j,2,"Your Presentation Title",0,0,"",D.mL,D.cR,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.es(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bh,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.df,D.cR,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.rx(i,l,0,0,B.a([f,w,C.es(A.bi,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cn,D.f5,0.3,0.35,0.72)],s),C.cB(),D.mK,"","","Welcome",D.df)
u=C.cB()
u=C.es(A.bi,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Agenda",0,0,"",D.cn,D.cR,0.84,0.08,0.08)
w=C.cB()
w=C.rx(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aD,"",k,22,A.bo,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bh,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ux,D.cR,0.8,0.1,0.26)],s),C.cB(),D.mK,"","","Agenda",D.df)
u=C.cB()
u=C.es(A.bi,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Main Idea",0,0,"",D.cn,D.cR,0.84,0.08,0.08)
f=C.cB()
f=C.rx(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aD,"",k,21,A.bo,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bh,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.cR,0.8,0.1,0.26)],s),C.cB(),D.mK,"","","Key Point 1",D.df)
u=C.cB()
u=C.es(A.bi,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bh,j,2,"Compare & Contrast",0,0,"",D.cn,D.cR,0.84,0.08,0.08)
r=C.cB()
r=C.es(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bh,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cR,0.4,0.08,0.24)
q=C.cB()
q=C.rx(i,l,0,0,B.a([u,r,C.es(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bh,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cR,0.4,0.52,0.24)],s),C.cB(),D.mK,"","","Key Point 2",D.df)
r=C.cB()
r=C.es(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bh,j,2,h,0,0,"",D.df,D.cR,0.8,0.1,0.32)
e=C.cB()
p=C.BL(l,l,l,l,D.CW,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rx(i,l,0,0,B.a([r,C.es(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bh,j,2,"Questions?",0,0,"",D.cn,D.cR,0.7,0.15,0.58)],s),C.cB(),D.mK,"","",h,D.df)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EH.prototype={
bD(d){return this.e.$1(d)}}
C.ex.prototype={}
C.j1.prototype={}
C.Ey.prototype={
gaKQ(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agZ(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3z(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ey(v,u,t,d==null?w.d:d)},
FC(d){return this.a3z(null,d,null,null)},
aDL(d){return this.a3z(null,null,null,d)},
cJw(d,e){return this.a3z(d,e,null,null)},
bbR(d){return this.a3z(d,null,null,null)},
bbY(d){return this.a3z(null,null,d,null)}}
C.Nu.prototype={
S(){return new C.bjw(new B.eN(0,$.aw()),null,null)}}
C.bjw.prototype={
Z(){var w,v=this
v.a1()
w=v.qB(new C.dVw(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.hG(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.bvm()},
B(d){var w=C.agZ(this.a.c.a)
if(w==null)w=A.d.gI(D.H2)
return B.cq(new C.dVv(this,w,C.hjw(this.a.c.d)))}}
C.brc.prototype={
B(d){return B.nT(A.VB,this.e,new C.f_r(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.beA.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSJ(d,e,v)
break
case"confetti":w.bHE(d,e,v)
break
case"crown":w.bJg(d,e,v)
break
case"aurora":w.bC6(d,e,v)
break
case"champagne":w.bFs(d,e,v)
break
case"diamonds":w.bLr(d,e,v)
break
case"starburst":w.cwt(d,e,v)
break
case"balloons":w.bCk(d,e,v)
break
case"galaxy":w.bQu(d,e,v)
break
case"redcarpet":w.cnm(d,e,v)
break
case"coins":w.bH0(d,e,v)
break
case"lanterns":w.c_H(d,e,v)
break
case"hearts":w.bYj(d,e,v)
break
case"petals":w.cir(d,e,v)
break
case"butterflies":w.bEq(d,e,v)
break
case"neon":w.c3D(d,e,v)
break
case"disco":w.bLC(d,e,v)
break
case"sunrise":w.cy7(d,e,v)
break
case"pearls":w.chv(d,e,v)
break
case"snow":w.cw8(d,e,v)
break
case"laurel":w.c_N(d,e,v)
break
case"ribbons":w.cpU(d,e,v)
break
case"kente":w.c_v(d,e,v)
break
case"trophy":w.cBQ(d,e,v)
break
case"shooting":w.ctY(d,e,v)
break
case"bokeh":w.bCF(d,e,v)
break
case"orbits":w.cf8(d,e,v)
break
case"flowers":w.bPK(d,e,v)
break
case"music":w.c3l(d,e,v)
break
case"mandala":w.c1N(d,e,v)
break
case"sparklers":w.cwh(d,e,v)
break
case"city":w.bGh(d,e,v)
break}},
rE(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nK
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cW(w,t,w+f,t))
u.F(new B.cW(w,t,w,t+f))
u.F(new B.cW(w,t,w-f,t))
u.F(new B.cW(w,t,w,s))
u.F(new B.bE())
d.aR(u,v)
d.af(e,f*0.18,v)},
lP(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rE(d,new B.v(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSJ(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lP(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aF],w),B.a([A.iC,A.bE],w),B.a([A.ex,A.aO],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bl(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.ll(new B.v(g,c1),new B.v(f,e),A.cu.az(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new B.a9(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rA(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bT
a2=B.ll(new B.v(g,c1),a0,0.75)
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
a6=A.cu.az(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cY(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hC(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cY(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cY(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bT
b9.a=A.nK
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rE(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHE(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.sar(new B.a9(A.az,A.aC,A.x,D.dbM,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.a8(0,0,f,e)))
a1.b_(new B.a8(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.PS[A.o.D(A.k.bl(C.cY(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bD(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cC(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.ce(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lP(a1,a2,a3,25,A.bM,30)},
bJg(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(new B.bU(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bcn],v),a4,a4).aw(0,B.bV(w,u)))
l=o.H()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cC(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ao,a4,a4,B.a([],r))
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
i.F(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.sar(new B.a9(A.b1,A.b5,A.x,D.das,a4,a4).aw(0,new B.a8(a5,a6,o,v)))
a8.aR(i,n)
for(v=[D.esn,D.elO,D.eBz],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.i3.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xb(i),u=B.a([],x.X),o=new B.vD(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.k_(y.M));--f
o.jB()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cA([new B.Ht(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fH
f.r=A.bM.gp(0)
l=f.H()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cC(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rE(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lP(a8,a9,b0,45,A.bM,40)},
bC6(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lP(a8,a9,b0,60,A.c,50)
w=[D.eMK,D.eMs,D.eMm,D.eNI]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aO(n.r,A.ao,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bD(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bD(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nK
n.z=new B.hC(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nK
n.z=new B.hC(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vt.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.nK
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFs(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.sar(new B.bU(A.A,0.5,A.x,l,0,B.a([A.hN.j(0.25+0.1*h),D.Xn],x.O),l,l).aw(0,B.bV(new B.v(g,f),e)))
a1.af(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ao,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bD(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.PS[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cC(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rE(a1,new B.v(r,n),m*2.4,A.bM,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xp.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLr(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lP(a9,b0,b1,30,A.li,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aO(h.r,A.ao,a5,a5,g)
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.sar(new B.a9(A.az,A.aC,A.x,D.d6e,a5,a5).aw(0,B.ce(A.J,k*1.2,o)))
a2=g.H()
g=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cC(g)).a,a2)
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
if(a4>0.85)this.rE(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cwt(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ao,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbK().a.snapshot()
w.drawPath((n.e=new B.cC(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bl(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.boH.az(0,k)*(0.5+0.5*C.cY(t,v)))
this.rE(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.PS[A.o.D(A.k.bl(C.cY(t,4)*5),0,4)],u)}},
bCk(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.awq[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bD(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cC(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.ce(new B.v(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sar(new B.bU(D.aXE,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.awh,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cC(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ce(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.awq[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bQu(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lP(b1,b2,b3,50,A.c,70)
for(w=[D.eMS,D.eMy,D.eME],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.sar(new B.bU(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aw(0,B.bV(new B.v(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cY(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cY(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bM,A.eC,g)
k.toString
d=C.cY(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cY(i,4)).gp(0)
a0.a=A.nK
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.sar(new B.bU(A.A,0.5,A.x,a4,0,B.a([A.xp.j(0.55),D.afR],u),a4,a4).aw(0,B.bV(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bl(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.ll(a3,a3.ad(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.ll(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rA(a3,a5)))
a8.c=a7*0.005
a8.d=A.bT
b1.bE(a6,a5,a8)}},
cnm(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ao,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(new B.bU(A.A,0.5,A.x,b5,0,B.a([A.xp.j(0.28),D.afR],w),b5,b5).aw(0,B.bV(new B.v(q,u),t)))
o.a=A.nK
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cC(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.es:A.eI)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cW(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.sar(new B.a9(A.a3,A.a8,A.x,a7,b5,b5).aw(0,new B.a8(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cC(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hN.gp(0)
b1.c=o
b1.d=A.bT
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bE())
v=B.N()
v.sar(D.bYY.aw(0,new B.a8(0,w,0+b6,w+b7*0.22)))
b9.aR(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rE(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bH0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.ce(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new B.a9(A.az,A.aC,A.x,n>0?D.dlO:D.cDV,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.blw.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a8(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rE(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lP(d,e,f,30,A.bM,110)},
c_H(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lP(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.sar(new B.bU(A.A,0.5,A.x,d,0,B.a([W.XA.j(0.45*k),D.aeH],u),d,d).aw(0,B.bV(new B.v(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ao,d,d,j)
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.bcx,A.c,0.2*k)
i.toString
j.sar(new B.a9(A.b1,A.b5,A.x,B.a([D.bh1,i],u),d,d).aw(0,B.ce(new B.v(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cC(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bYj(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ao,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pH(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pH(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cY9[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sar(new B.bU(A.t8,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a2B,d).aw(0,B.bV(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cC(m)).a,e)
e.delete()
v.restore()}this.lP(a3,a4,a5,30,A.iC,130)},
cir(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cW(p,l,0,p))
m.push(new B.cW(n,l,0,n))
m.push(new B.bE())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cy9:D.d7x
n.sar(new B.a9(A.a3,A.a8,A.x,m,i,i).aw(0,B.bV(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cC(n)).a,j)
j.delete()
v.restore()}this.lP(d,e,a0,25,A.bM,140)},
bEq(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lP(b0,b1,b2,40,A.bM,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cY(r,1))
p=Math.sin(b2*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pH(f,e,l,d,h,0))
a3.push(new B.pH(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.sar(new B.a9(A.a3,A.a8,A.x,i?D.d7g:D.d9W,a6,a6).aw(0,new B.a8(0,m,k,j)))
a5=a2.H()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cC(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AW.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cC(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bkP.gp(0)
p.c=q*0.1
p.d=A.bT
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c3D(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.axu[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bx(B.ce(e,r,r*1.6),new B.aS(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.axu[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a8(j,i,j+w,i+l),new B.aS(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.aaX,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bLC(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nP,A.ds][A.o.E(p,4)]
j=C.cY(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nK
i.z=new B.hC(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bE(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.N()
t.r=A.dw.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.k6(B.bV(v,u)))
a3.qy(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a8(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rE(a3,v.ad(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cy7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.az(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bM.j(0.1).gp(0)
o=r.H()
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cC(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.sar(new B.bU(A.A,0.5,A.x,h,0,B.a([D.b8x.j(0.6),D.aeH],x.O),h,h).aw(0,B.bV(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.ejj.aw(0,B.bV(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.ce(new B.v(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.ce(new B.v(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lP(a2,a3,a4,20,A.i3,180)},
chv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bD(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bD(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bD(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cA,A.jf,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cC(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.sar(new B.bU(Am.pu,0.5,A.x,f,0,D.ddp,f,f).aw(0,B.bV(new B.v(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lP(a1,a2,a3,25,A.c,190)},
cw8(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bT
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
h.delete()}v.restore()}this.lP(d,a0,a1,40,A.ex,200)},
c_N(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dj(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.ce(new B.v(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.sar(D.bYL.aw(0,new B.a8(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bcO.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rE(a3,w.ad(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lP(a3,a4,a5,40,A.bM,210)},
cpU(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hN,A.i3],a6),B.a([A.oM,A.iC],a6),B.a([A.aE,A.eC],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bQ<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ao,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bD(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bD(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dx(i,s),l=new B.bQ(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bD(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bD(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sar(new B.a9(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.ax7,new B.mq(w)).aw(0,new B.a8(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cC(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lP(a8,a9,b0,40,A.c,220)},
c_v(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bl(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2E[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a8(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a2E[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a8(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rE(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.a2E[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cBQ(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bM.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cW(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cW(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ce(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.ay.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a9(A.a3,A.a8,A.x,D.dfV,A.awx,null).aw(0,new B.a8(v,a2,r,j)))
a4.aR(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rE(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHF(a4,a5,a6,60)},
bHF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ce(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.PS[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
ctY(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lP(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.E(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bl((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).aw(0,B.rA(new B.v(l,h),i)))
g.c=r
g.d=A.bT
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rE(a0,i,p,A.c,1-m)}},
bCF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.E(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.az3[l].j(n).gp(0)
m.a=A.nK
m.z=new B.hC(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.az3[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cf8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.ce(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c_(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.i3.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hN.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lP(d,e,f,45,A.bM,270)},
bPK(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.E(a7+C.cY(o,2)*4,4)/4
j=A.ey.az(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d4n[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ce(new B.v(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.sar(new B.a9(A.b1,A.b5,A.x,B.a([A.c,g],u),null,null).aw(0,B.ce(new B.v(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hN.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lP(a5,a6,a7,30,A.i3,280)},
c3l(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bV(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.avC[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avC[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.ce(A.J,d,d*1.5)
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
c1N(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.by(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cW(h,m,0,g))
a0.push(new B.cW(j,m,0,i))
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bM,A.nP,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cC(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.i3.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.sar(new B.bU(A.A,0.5,A.x,a3,0,B.a([A.hN.j(0.25),D.Xn],x.O),a3,a3).aw(0,B.bV(w,a4)))
a7.af(w,a4,a5)
this.lP(a7,a8,a9,30,A.bM,300)},
cwh(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bT
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.sar(new B.bU(A.A,0.5,A.x,null,0,B.a([A.i3,A.hN.j(0.6),D.Xn],o),null,null).aw(0,B.bV(new B.v(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.E(b2+C.cY(f,2)*e,e)/e
a0=A.k.bl((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.i3,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bT
a6.a=A.nK
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
g.delete()}}}this.lP(b0,b1,b2,35,A.bM,310)},
bGh(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSJ(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a8(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(D.bZG.aw(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bl(m/q)
f=A.k.bl(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bM.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a8(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.b_3.prototype={
B(d){var w,v=null,u=new C.c9N(),t=new C.c9P(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aom,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c9O(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.H2[w]))
return B.bT(A.bA,s,A.bq,12,10)}}
C.Zk.prototype={
S(){return new C.azK()}}
C.azK.prototype={
gvG(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZU(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b4,A.aN),$.aw())}return v},
gaxo(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKQ()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.ar(new B.bb(w,A.b4,A.aN),v)}return t},
q(){var w=this.gaZU(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gaxo()
w.T$=v
w.P$=0
this.a2()},
a_0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C4(90,700,700,A.eF),$async$a_0)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a_0)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahV(o,".png")?"image/png":"image/jpeg"
r.m(new C.d9i(r,n,p))
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
return B.i($async$a_0,v)},
aZT(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.a8w,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agZ(p.gvG().a)
if(n==null)n=A.d.gI(D.H2)
w=p.gvG()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bW(0,new C.Nu(p.gvG(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HO(A.mF,new C.d9n(d),B.nE(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HO(D.bJ3,new C.d9o(p),B.nE(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aR_,o,o,o)
t=B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZU(0),o,o,o,o,o,2,p.aZT("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d9p(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hw,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hN.j(0.6),A.q,1)
if(p.gvG().d.length===0)q=D.bMp
else{q=C.hjw(p.gvG().d)
if(q==null)q=new Uint8Array(0)
q=B.i_(B.fQ(q,A.A,o,o,A.cg,A.bW,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aC(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc96(),o,o,o,o,o,o,!1,A.a6)],u)
if(p.gvG().d.length!==0)r.push(B.aH(o,o,o,o,D.a1r,o,o,o,new C.d9q(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaxo(),o,o,o,o,o,2,p.aZT("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d9r(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bLi,D.fEY,new C.d9s(p,d),B.bo(A.ay,o,o,o,A.w,o,A.cm,o,new B.b7(B.n(14),A.Y),o,o,o))],u),A.ai,o,A.e,A.N,0,A.p),A.f,o,o,D.b1e,o,o,o,o,A.FB,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLo.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.ZF.prototype={
S(){return new C.bg3(new B.ar(A.as,$.aw()))}}
C.bg3.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bY,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bD:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.dg5(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cPu[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aS(12,12)
q=new B.aS(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bn(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pm,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bn(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dg6(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hC,new B.y(v.a.toUpperCase(),o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cl(A.bA,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aRY,new C.dg7(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dq(1,A.co,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tR,A.Zg,o,o,o),!0,!1,A.af,!0,!0)}}
C.bfr.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eE()
a2.dt(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Rx
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.av(4))+n)
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
au(d){return d.b!==this.b}}
C.bf8.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a8(0,0,0+a7.a,0+a7.b),A.kg),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lz
a6.aE(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iN(a1))
v=new B.Sy(new B.vD(B.xb(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jB()
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
j.d=A.bT
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cA([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cA([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cA([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}}a4.jB()
e=u[a3].MP(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mJ
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
au(d){return d.b!==this.b}}
C.bo2.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eE()
e.dt(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hi()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gamu()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ao,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.sar(B.aV5(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jw
g=j.H()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cC(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.ba2.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
a0.dt(this.c*7+3)
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
e.z=new B.hC(A.G,k*0.35)
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
au(d){return d.b!==this.b}}
C.b9G.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
a0.dt(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bD(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bT
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cC(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.bv_.prototype={
a3(d,e){var w,v,u=new B.a8(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.bU(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cWW,null).aw(0,u))
d.b_(u,w)
w=u.cw(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jw
d.b_(w,v)},
au(d){return d.b!==this.b}}
C.bs_.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bl(d)*7,p=0;p<7;++p){o=new B.eE()
o.dt(q+p)
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
i.d=A.bT
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
g.z=new B.hC(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.br8.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a8(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nK
v.sar(new B.a9(A.az,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.b_(w,v)},
au(d){return d.b!==this.b}}
C.bet.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdB(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bT
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rA
r=new C.d9_(this,r*0.16,d,u,w)
t=e.gdB()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xB.prototype={}
C.IO.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.arc.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uK.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.my.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eM.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.es(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ah(){var w,v=this,u=B.U(x.N,x.z)
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
u.n(0,"decoration",C.hXK(v.z))
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
C.lJ.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,eM>")
n=B.C(new B.M(n,new C.cfd(),m),m.k("ak.E"))
return C.rx(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,a6<m,@>>")
n=B.C(new B.M(n,new C.cfe(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i5.prototype={
gbab(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSg(){if(!C.ky(this.w))return!1
var w=this.gbab()
if(w==null)return!1
return new B.T(Date.now(),0,!1).d_(w.bU())},
hK(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.S(r).k("M<1,lJ>")
r=B.C(new B.M(r,new C.cf2(),q),q.k("ak.E"))
return C.BL(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ah(){var w,v,u=this,t=B.U(x.N,x.z)
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
v=B.S(w).k("M<1,a6<m,@>>")
w=B.C(new B.M(w,new C.cf3(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jH.prototype={}
C.b1b.prototype={
B(d){return B.cq(new C.cf8(this))}}
C.aon.prototype={
S(){return new C.bjg(null,null)}}
C.bjg.prototype={
gaZV(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fZ,null,1,null,v)
w.cM(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZV().q()
this.bv6()},
B(d){return B.c7(this.gaZV(),new C.dHK(),this.a.c)}}
C.aL9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.adr.prototype={
PS(d,e,f,g){return this.bPq(d,e,f,g)},
bPq(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PS)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PS,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adJ(A.hF,"Download",A.c0,new C.etd(w,d),!0,v),1),A.at,B.E(new C.adJ(A.vV,"Share",A.bj,new C.ete(w,d),!1,v),1),A.at,B.E(new C.adJ(A.hr,"Safari",A.b_,new C.etf(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.etg(d),v,v))
return B.bm(!0,new B.D(A.q_,B.x(B.a([B.p(v,B.x(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iZ,v,t,u,s,v,A.n),v,v,v,v,A.FI,v,v,1/0)],m),A.m,v,A.e,A.N,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adJ.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eH(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.byc,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b19.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqo(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.c97().akF(1.35)
s=B.avE(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAC(v)
if(i.e&&i.w!=null)q=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bUt,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wz,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zM,A.an,h,A.TI,h,h)
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
w=n?t.cJj(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eG:A.Dw
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Tz:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fH
j.r=A.aw.gp(0)
j=i.cpX(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cpV(k,t,l?A.Tz:s)],x.p),h)}else w=i.cpW(p,t,g.k2?A.Tz:s,m)
v=new B.nh(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aC(A.c8,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a6)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bYZ()
case 3:return i.chu()
case 2:return B.b3(h,h,h,new C.b16(g,h),A.f6)
case 5:g=g.r
return new C.b18(g,!i.e&&i.z==null,h)}},
c97(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k5
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.aeF,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.aw
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mP
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bE,new B.v(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cR(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cR(A.b8,new B.v(-3*v,0),0),new B.cR(A.av,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.ct,A.J,8*v),new B.cR(A.av,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=W.L_
break
case"ice":v=o.d
e=B.a([new B.cR(A.aO,A.J,10*v),new B.cR(A.cA,A.J,22*v)],x.r)
k=A.P
w=A.ex
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k5
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cYW[q]
u.push(new B.cR(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.sar(D.bX9.aw(0,new B.a8(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.KP,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.sar(D.bXu.aw(0,new B.a8(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cx
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cR(l.j(0.45),new B.v(u,u),0),new B.cR(l.j(0.2),new B.v(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k5
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azl(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eSY.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cf6(h)
v=r.k2?C.i9o(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eG:A.Dw
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XR(B.d0(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cpX(d,e,f,g){return this.azl(d,e,f,!1,g)},
cpV(d,e,f){return this.azl(d,e,f,!1,null)},
cpW(d,e,f,g){return this.azl(d,e,f,g,null)},
bAC(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bYZ(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l8?A.GD:A.BJ,A.aA,t,t,t,32),t,t,t)}w=u.bDE(r)
if(s.b===D.l8){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNZ(r,!0)
return C.fE0(s.go,v,s.id)}return w},
aNZ(d,e){var w,v,u,t
try{w=C.i9H(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cq(new C.cf5(this,w,v,e))
return u}catch(t){return D.ack}},
bDE(d){return this.aNZ(d,!1)},
chu(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b6w
return C.i9Z(v,w.db,w.dx)}}
C.b16.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a8(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.b_(s,g)
d.b_(s,w)
break
case 1:d.hZ(s,g)
d.hZ(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 3:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
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
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ao,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bD(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bD(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIL.prototype={
S(){return new C.buw(null,null)}}
C.buw.prototype={
Z(){var w,v=this
v.a1()
w=B.bj(null,A.im,null,1,null,v)
w.cM(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bxp()},
aO9(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAQ(){var w,v=this,u=null,t=v.aO9("Slide A",A.bj),s=v.aO9("Slide B",A.b_)
if(v.a.c===D.cn)return new B.an(A.W,u,A.b2,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.f7Z(v,s,t),u)},
B(d){return this.bAQ()}}
C.aJn.prototype={
jg(d){return new B.a8(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jU(d){return d.b!==this.b}}
C.V0.prototype={
S(){return new C.bjt(null,null)}}
C.bjt.prototype={
Z(){var w,v,u=this
u.a1()
w=B.bj(null,A.Ba,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bM(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTJ(u),x.a)},
bv(d){var w,v,u,t=this
t.bG(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cn)w.sp(0,1)
else B.bM(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTI(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvl()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.dTH(this),v.d)}}
C.IN.prototype={
B(d){return B.cq(new C.ceZ(this))}}
C.azu.prototype={
S(){return new C.bdX()}}
C.bdX.prototype={
Z(){this.a1()
if(this.a.c!==D.cn)B.bM(A.Me,new C.d6e(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.V0(C.es(A.bi,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bh,o,2,"",0,0,"",u,D.f5,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cc,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.es(A.bi,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bh,o,2,"Element flies in",0,0,"",q.a.c,D.cR,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.V0(t,B.p(p,D.fqz,A.f,p,p,new B.o(s,p,B.I(A.aZ,A.q,1),r,p,p,A.n),p,p,p,p,A.jq,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b1O,A.bf)}}
C.a7L.prototype={
S(){return new C.bk7(null,null)}}
C.bk7.prototype={
gb_s(){var w=this.a
if(w.e)w=D.eT6.t(0,w.c)||D.aOa.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a1()
if(v.gb_s()){w=C.i83(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bvS()},
B(d){var w,v=this,u=v.d
if(!v.gb_s()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.egt(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_6.prototype={
B(d){var w=null
return B.av(C.b1a(!0,w,!1,C.es(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bh,4280172719,2,"Aa",0,0,this.c,D.cn,D.cR,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bf6.prototype={
jg(d){return C.a2q(this.b,new B.a8(0,0,0+d.a,0+d.b).cw(-this.c))},
jU(d){return d.b!==this.b||d.c!==this.c}}
C.bq5.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a8(0,0,0+a1.a,0+a1.b).cw(-this.d),g=this.b,f=C.a2q(g,h),e=a1.gdB(),d=new C.eY4()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aPI.aw(0,h))
a0.aR(f,w)
g=C.a2q(g,h.cw(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bli.gp(0)
a0.aR(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f29.aw(0,h))
a0.aR(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aR(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aR(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f27.aw(0,h))
a0.aR(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2q(g,h.cw(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aR(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aR(f,g)
g=d.$1(e*0.016)
g.r=A.oN.gp(0)
a0.aR(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f22.aw(0,h))
a0.aR(f,w)
w=C.a2q(g,h.cw(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.ba_.gp(0)
a0.aR(w,v)
g=C.a2q(g,h.cw(e*0.03))
v=d.$1(e*0.004)
v.r=D.bcB.gp(0)
a0.aR(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aPI.aw(0,h))
a0.aR(f,g)
for(g=B.xb(f),w=B.a([],x.X),g=new B.vD(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.k_(y.M));--q
g.jB()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bl(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jB()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jB()
m=w[q].MP(p*n/o).a
l=D.cWf[A.o.E(n,4)]
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
g.sar(D.f2b.aw(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aR(f,g)
g=d.$1(e*0.018)
g.sar(D.f28.aw(0,h))
a0.aR(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2q(g,h.cw(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nS.gp(0)
a0.aR(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.br5.prototype={
a3(d,e){d.FS(C.a2q(this.b,new B.a8(0,0,0+e.a,0+e.b).cw(-this.c)),A.w,e.gdB()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aLn.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.aLT.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.aNf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.a83.prototype={}
C.NW.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aEk(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge2(){return this.c},
gTB(){return this.r},
gTC(){return this.w},
gLC(){return this.x}}
C.aEk.prototype={
Z(){var w,v=this
v.a1()
$.aW.bY$.push(v)
C.fIX()
$.hr9=new C.ezr(v)
w=B.bj(null,A.B7,null,1,null,v)
w.fh(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ip()},
bv(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ot(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ip()}},
j8(d){if(d===A.Ae||d===A.ta||d===A.t9||d===A.pv)this.tC()},
q(){var w,v,u,t=this
$.aW.hP(t)
w=t.at
if(w!=null)w.a7(0)
t.tC()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.hb()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bw5()},
gabv(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gON(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ac_(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSg())return!1
return!0},
kl(){return this.ac_(null)},
aiL(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.f0q)},
qj(){if(!this.kl())return!1
this.aiL()
return!0},
aqU(d){var w,v,u,t,s,r=this
if(r.ac_(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hqg(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zT(){return this.aqU(null)},
Ip(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ip=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.are(k),$async$Ip)
case 3:j=e
w=4
return B.b(C.apQ(k),$async$Ip)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fYq(j,t.c0S())
w=t.gabv()?5:7
break
case 5:r=t.gON()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_k(r),$async$Ip)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.br(s,new C.evP())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.br(s,new C.evQ())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yF(m==null?"":m)!=null)continue
C.fJ8(n,s)
p=!0}t.m(new C.evR(t,s))
if(p||s.length>J.ad(j))t.tC()
case 1:return B.h(u,v)}})
return B.i($async$Ip,v)},
c0S(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ky(w)&&w!==q}if(w)p.push(r)
return p},
col(d){var w,v=this,u=d.w
if(!C.ky(u)||u==="hati_kiapo_uongozi")return
v.aai(d)
w=A.d.bg(v.d,new C.exp(d))
u=v.d
if(w>=0){u[w]=d.hK()
v.d[w].f=new B.T(Date.now(),0,!1)}else A.d.c9(u,0,d.hK())
v.db=!1},
ciq(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ky(s)&&s!=="hati_kiapo_uongozi"}if(s)u.col(t)
s=u.d
w=B.S(s)
v=w.k("cP<1,i5>")
s=B.C(new B.cP(new B.a_(s,new C.exd(),w.k("a_<1>")),new C.exe(),v),v.k("J.E"))
return s},
Ot(d){return this.bPO(d)},
tC(){return this.Ot(null)},
bPO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ot=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ciq()
w=3
return B.b(C.W_(d==null?t.a.c:d,s),$async$Ot)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqU(r)?4:5
break
case 4:w=6
return B.b(C.a7h(r),$async$Ot)
case 6:q=r.x
p=A.a.i(q==null?t.gON():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.evc())
q=t.d
if(o>=0)q[o]=r.hK()
else A.d.c9(q,0,r.hK())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ot,v)},
pn(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.ky(u.w))===!0?A.hB:A.lR
v.at=B.cM(w,new C.eyx(v))},
aZW(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afe(u.hK(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cC6(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afe(w.e.hK(),w.f,w.r))
w.m(new C.ezn(w,v.pop()))
w.pn()},
cnr(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afe(w.e.hK(),w.f,w.r))
w.m(new C.exn(w,v.pop()))
w.pn()},
oh(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.eza(u))
if(w>=0){u.d[w]=u.e.hK()
u.d[w].f=new B.T(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.T(Date.now(),0,!1)},
Xy(d){var w,v,u,t,s=this.gdu()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xx(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.hb()}w.a8(0)},
K8(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdu()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cP<1,m>")
t=B.dd(new B.cP(new B.a_(w,new C.ezb(),v.k("a_<1>")),new C.ezc(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.hb()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cR)continue
p=n.a
m=w.ca(0,p,new C.ezd(n))
s.ca(0,p,new C.eze())
p=m.a.a
o=n.r
if(p!==o)m.saW(0,o)}},
HI(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.euB(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gON()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hK())}u.oh()
u.pn()},
aj6(d,e){var w,v,u,t,s=this
if(s.kl())return
w=s.Xy(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ky(v.w))===!0
if(u){C.i87(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdu()
if(t!=null)C.i88(t,w.d+w.f*0.5)}}s.HI()
s.oh()
s.pn()
if(u&&s.c!=null)s.m(new C.ezo())},
cDa(d,e){var w=this,v=w.gdu()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HI()
w.oh()
w.pn()},
gdu(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqo(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i69(o)
if(w!=null)return w
v=q.gdu()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bZd(v)
t=q.bZc(v)
s=B.b0(v.e)
r=v.f
return new C.jH(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hJT(o)},
bZd(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cR)s=t.w>=28||A.o.D(A.o.am(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bZc(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cR&&t.w<28)return B.b0(t.Q)}return A.aJ},
af1(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabv()){w.c.K(x.q).f.U(D.f_1)
return}w.aai(d)
w.b08(C.bCa(d))
return}if(C.cfR(v)){w.aai(d)
w.b08(d)
return}w.m(new C.eww(w,d))},
aru(){var w,v,u,t,s,r,q=this
q.a27(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ky(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.euz(q))
if(r&&q.c!=null){u.toString
q.JI(u,s)}return}q.tC()
q.m(new C.euA(q))},
b07(d){this.aai(d)
this.a_B(d,!0)},
aai(d){if(!C.ky(d.w))return
C.fJ8(d,this.d)},
a_B(d,e){return this.cek(d,e)},
b08(d){return this.a_B(d,!1)},
cek(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_B=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bCa(d)
if(e){r=s.x
q=A.a.i(r==null?t.gON():r)
t.dy.W(0,q.toLowerCase())
C.apR(t.a.c,q)}r=s}else r=d
w=C.cfR(r.w)?3:4
break
case 3:w=5
return B.b(t.aaj(r),$async$a_B)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.ewT(l))
o=l.a.hK()
n=C.ky(o.w)&&C.i9j(o)
t.m(new C.ewU(t,o,p))
if(n){m=A.d.bg(t.d,new C.ewV(o))
if(m>=0){t.d[m]=o.hK()
t.tC()}}if(!t.ac_(l.a))t.YI()
r=!1
if(t.c!=null)if(!t.ac_(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqU(r)&&C.fFb(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.f_C)
case 1:return B.h(u,v)}})
return B.i($async$a_B,v)},
aaj(d){return this.bNW(d)},
bNW(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lj(r.c,A.zu),$async$aaj)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kX(!1,r,s.c,s.d,null,A.zu,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaj,v)},
o8(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cfR(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cfg(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o8,v)},
aeJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.ewv(),s,null,!0,!0,x.H),$async$aeJ)
case 3:if(t.c==null){w=1
break}t.aru()
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
aeI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.ews(),s,null,!0,!0,x.H),$async$aeI)
case 3:if(t.c==null){w=1
break}t.m(new C.ewt())
t.aru()
case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
YI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$YI)
case 3:r=e
if(B.jO(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YI)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eYE)
case 1:return B.h(u,v)}})
return B.i($async$YI,v)},
JI(d,e){return this.coM(d,e)},
coM(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JI=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agA(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 9:w=4
break
case 6:w=10
return B.b(C.agB(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 10:w=4
break
case 7:w=11
return B.b(C.agC(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 11:w=4
break
case 8:w=12
return B.b(C.agD(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JI,v)},
c_L(){var w,v,u,t,s=this
if(!s.gabv()){s.c.K(x.q).f.U(D.eYR)
return}w=s.gON()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agz(u,t,v,new C.evL(s),new C.evM(s),w)},
af2(){var w=0,v=B.j(x.H),u=this,t,s
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.ewC(u),s,!0,!0,!1,A.lB,!1,!1,x.N),$async$af2)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agD(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agA(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agB(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agC(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_L()
return B.h(null,v)}})
return B.i($async$af2,v)},
cdr(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZW()
w=C.cB()
v=C.BL(t,t,t,t,D.CW,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.ewD(u,v))},
a9J(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9J=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qj()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.idQ(s),$async$a9J)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.euD())
t.d4(new C.euE(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9J,v)},
ah0(d,e,f,g){var w=null,v=g?A.dn:A.bL,u=B.I(g?A.aZ:A.cr,A.q,1)
return B.hx(B.aC(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a6),w,e,w,w)},
a_A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qj()){w=1
break}s=t.jY()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.ewO(),q),q.k("J.E"))}o=s!=null&&s.b===D.lA?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.f_N)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.ewP(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_A)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_A,v)},
afj(){return this.cej()},
cej(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qj()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.idC(s,t.f+1,o),$async$afj)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kH(s,B.S(s).c)
p.a=A.d.bg(o.r,new C.ewR(q))
t.d4(new C.ewS(p,t,o,q,r))
t.c.K(x.q).f.U(D.f0b)
case 1:return B.h(u,v)}})
return B.i($async$afj,v)},
afq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qj()||!t.zT()){w=1
break}s=t.gdu()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.ex8(),q),q.k("J.E"))
if(p.length===0){t.c.K(x.q).f.U(D.eYp)
w=1
break}o=new B.M(p,new C.ex9(),B.S(p).k("M<1,K>")).ff(0,new C.exa())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.exb(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afq)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.exc())
case 1:return B.h(u,v)}})
return B.i($async$afq,v)},
af5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$af5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qj()){w=1
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
return B.b(C.hsg(s,new C.Ey(r,q,p,o==null?"":o)),$async$af5)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.ewE(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agZ(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$af5,v)},
aac(){return this.bNh()},
bNh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aac=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qj()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.idP(s,t.f+1,l),$async$aac)
case 3:r=e
q=$.h0W
$.h0W=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.euU())
t.c.K(x.q).f.U(D.eYg)
w=1
break}if(!q){s=r.CW
s=C.hr7(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.euV(t,l,r))
t.c.K(x.q).f.U(D.f0F)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kH(s,B.S(s).c)
s=l.r
m.a=A.d.bg(s,new C.euW(p))
o=s.length
t.d4(new C.euX(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aac,v)},
aQh(d,e){if(e){this.afT()
return}this.cdr(d,!1)},
bIR(){return this.aQh(null,!1)},
afT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.c_,null,new C.exi(t),r,!0,!0,!0,A.pg,!1,!1,x.N),$async$afT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.exj(t,C.i68(s).pB()))
case 1:return B.h(u,v)}})
return B.i($async$afT,v)},
d4(d){var w=this
if(w.qj())return
w.HI()
w.aZW()
w.m(d)
w.K8()
w.oh()
w.pn()},
a8c(){this.d4(new C.ety(this,D.mK))},
aRL(){var w=this.gdu()
if(w==null)return
this.d4(new C.euS(this,w))},
aQT(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.euQ(this))},
b38(d,e){if(this.e==null||d===e)return
this.d4(new C.exr(this,d,e))},
O0(d){return this.bKR(d)},
bKR(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gON():s)
w=5
return B.b(C.apP(t.a.c,r),$async$O0)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.arg(s)
w=6
return B.b(C.b1e(t.a.c,s),$async$O0)
case 6:if(t.c==null){w=1
break}t.m(new C.euM(t,d))
w=7
return B.b(t.tC(),$async$O0)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
coJ(d,e){var w=this
if(d.z){w.aiL()
return}w.m(new C.exq(w,d,e))
w.pn()},
jY(){var w,v,u,t,s,r=this.gdu()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wz(d){return this.ch.ca(0,d.a,new C.euC(d))},
atl(d){return this.CW.ca(0,d.a,new C.evd())},
a27(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xy(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jO()},
b6A(){return this.a27(!0)},
a23(d){var w,v,u=this
if(u.qj())return
if(!u.zT())return
w=u.Xy(d)
if(w==null||w.b!==D.cR)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wz(w).saW(0,"")}u.m(new C.ez8(u,d))
$.aW.x1$.push(new C.ez9(u,d,w))},
b77(d){var w=this
if(d.b===D.cR&&!w.kl()&&w.zT()){w.a23(d.a)
return}w.azL(d.a)},
azL(d){var w,v,u,t,s,r=this
if(r.kl())return
w=r.r
if(w!=null&&w!==d){v=r.Xy(w)
if(v!=null&&v.b===D.cR){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eyy(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jO()}},
aMx(){this.d4(new C.etz(this))},
p6(d){return this.bzT(d)},
bzT(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o8(),$async$p6)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.etw(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p6,v)},
VI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GG(78,1920),$async$VI)
case 3:s=e
if(s==null||t.gdu()==null){w=1
break}t.d4(new C.etm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VI,v)},
VC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdu()==null){w=1
break}w=3
return B.b(S.CU(t.a.c),$async$VC)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.f1e)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.etj(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VC)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdu()==null){w=1
break}t.d4(new C.etk(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VC,v)},
ask(){var w=this,v=w.r
if(v==null||w.gdu()==null)return
if(A.d.b4(w.gdu().z,new C.euO(v))){w.c.K(x.q).f.U(D.f0f)
return}if(w.w===v)w.a27(!0)
w.d4(new C.euP(w,v))},
bH6(){var w=this.jY(),v=w==null
if((v?null:w.b)===D.f5)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cR)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aNe(d,e){var w=this,v=w.jY(),u=w.gdu(),t=w.e
if(t==null)return
w.d4(new C.eu0(w,v,d,e,t,u))},
bBt(d){return this.aNe(d,null)},
a8u(d){return this.bBB(d)},
bBB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a7e.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o8(),$async$a8u)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jY()
if(s!=null){r=s.b
if(r===D.cR)t.bBt(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f5){r=d.c
t.aNe(r.j(0.88),r)}w=1
break}t.d4(new C.eu5(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8u,v)},
a8t(d){return this.bBz(d)},
bBz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jY()
r=t.gdu()
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
return B.b(t.o8(),$async$a8t)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.eu3(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8t,v)},
bBj(d){var w=this.gdu()
if(w==null)return
this.d4(new C.eu_(this,w,d))},
a_G(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.idL(r),$async$a_G)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oh()
t.m(new C.ex2(t,s))
w=4
return B.b(t.tC(),$async$a_G)
case 4:if(t.c!=null)t.af1(s)
case 1:return B.h(u,v)}})
return B.i($async$a_G,v)},
aa4(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a27(!0)
t.oh()
s=t.c
s.toString
w=3
return B.b(C.R6(s,q),$async$aa4)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa4,v)},
Dy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oh()
t=4
w=7
return B.b(C.aQ0(m),$async$Dy)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPr(o,q,m.b),$async$Dy)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dy,v)},
Fc(d,e){return this.cBw(d,e)},
cBw(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fc=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qj()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a27(!0)
t.oh()
s=h.a=t.e.hK()}else{r=A.d.bg(t.d,new C.ezh(d))
s=h.a=r>=0?t.d[r].hK():d.hK()}s=s.w
q=s==null
p=C.i76(q?"":s)
o=C.hq2(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ezi(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cuF(n.length,o,s),$async$Fc)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i70(h.a)
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
return B.b(t.cuE(n,o),$async$Fc)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h1(t.d,new C.ezj(s))
s=h.a.b
w=11
return B.b(t.cuC(k.b,s),$async$Fc)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hK()
case 5:j=C.i75(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.f1q)
w=1
break}w=12
return B.b(t.cuD(j.a,s,o,j.c),$async$Fc)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ezk(h,t,i))
t.pn()
case 1:return B.h(u,v)}})
return B.i($async$Fc,v)},
cuF(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.eyO(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuE(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.eyN(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuC(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.eyH(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cuD(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.eyJ(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abz(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abA(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.c_,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.az,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ep,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fbU,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aV4(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Ud,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aV7(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.az,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.mQ,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BM,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evH(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bY8(d,e,f,g,h,i){return this.aV7(d,e,f,!1,g,h,i)},
auF(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bC,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ZD,w,w,w)},
aV6(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nE,w,w,w),new C.evG(d,f),v)},
aV5(d,e){return this.aV6(d,e,null)},
K_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pb(l,s.c,s.d),$async$K_)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aH("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f2(l,new C.eyz());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9Y(l.charCodeAt(0)==0?l:l,r.b),$async$K_)
case 4:l=t.a
w=5
return B.b(B.pa(l.c,l.d),$async$K_)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K_,v)},
I3(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pb(q,s.c,s.d),$async$I3)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9Y(A.S.ao(r.ah(),null),r.b+".json"),$async$I3)
case 4:q=t.a
w=5
return B.b(B.pa(q.c,q.d),$async$I3)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I3,v)},
b6k(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oh()
u.tC()
w=u.c
w.toString
v=B.ea(new C.ez7(u,t),!1,null,x.z)
B.a5(w,!1).cm(v)},
Hh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o8(),$async$Hh)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fJl(),$async$Hh)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i9T(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.aw,null,new C.etr(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hh)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.ets(t,s))
w=1
break}if(p==="split")t.d4(new C.ett(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hh,v)},
Nm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qj()){w=1
break}w=3
return B.b(t.o8(),$async$Nm)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQ_(s,null,null),$async$Nm)
case 4:r=e
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.etx(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nm,v)},
b2W(d){var w=this.e
if(w==null||!C.ky(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOx(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQ_(s,t==null?null:B.b0(t),u)},
a8a(d){return this.bzK(d)},
bzK(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qj()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f1F)
w=1
break}w=3
return B.b(t.aOx(),$async$a8a)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.eto(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8a,v)},
agE(d){return this.cnu(d)},
cnu(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qj()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f0N)
w=1
break}w=3
return B.b(t.aOx(),$async$agE)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.exo(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
ca8(){var w,v,u=this
if(u.kl())return
w=new B.T(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bC(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cAw()}},
cAw(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.ezf(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bYt(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.evK(this,r,u.d))},
c28(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fFX(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l8&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c29(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
if(!this.zT())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fFX(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l8&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nv(d){return this.bC0(d)},
bC0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qj()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f_D)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apT(p),$async$Nv)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.f0h)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7h(r)
w=1
break}t.m(new C.eu9(t,d,o))
t.oh()
$.aW.x1$.push(new C.eua(t))
case 1:return B.h(u,v)}})
return B.i($async$Nv,v)},
VG(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o8(),$async$VG)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCR(),$async$VG)
case 4:s=e
if(s==null||t.gdu()==null){w=1
break}t.d4(new C.etl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VG,v)},
Oe(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o8(),$async$Oe)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jY()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fJc(r),$async$Oe)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.evb(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oe,v)},
j5(d){this.d4(new C.etu(this,d))},
q9(d){return this.bBc(d)},
bBc(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qj()){w=1
break}m=!D.aOd.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o8(),$async$q9)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hh()
w=1
break A
case"sign_paper":t.Nm()
w=1
break A
case"hd_photo":t.VG()
w=1
break A
case"sharpen":t.Oe()
w=1
break A
case"print":t.Dy()
w=1
break A
case"rotate":s=t.jY()
if(s!=null)t.d4(new C.etD(s))
w=1
break A
case"text_box":t.aMx()
w=1
break A
case"picture":t.VI()
w=1
break A
case"present":t.b6k()
w=1
break A
case"new_slide":t.a8c()
w=1
break A
case"export_json":t.I3()
w=1
break A
case"outline_share":t.K_()
w=1
break A
case"flashcard_tool":t.ve(D.I4)
w=1
break A
case"quiz_tool":t.ve(D.I5)
w=1
break A
case"worksheet_tool":t.ve(D.I6)
w=1
break A
case"duplicate_el":s=t.jY()
if(s==null){w=1
break A}t.d4(new C.etE(t,s))
w=1
break A
case"delete_el":t.ask()
w=1
break A
case"bring_fwd":s=t.jY()
if(s==null||t.gdu()==null){w=1
break A}t.d4(new C.etF(t,s))
w=1
break A
case"send_back":s=t.jY()
if(s==null||t.gdu()==null){w=1
break A}t.d4(new C.etQ(t,s))
w=1
break A
case"align_left":s=t.jY()
if(s!=null)t.d4(new C.etT(s))
w=1
break A
case"align_center":s=t.jY()
if(s!=null)t.d4(new C.etU(s))
w=1
break A
case"align_right":s=t.jY()
if(s!=null)t.d4(new C.etV(s))
w=1
break A
case"grayscale":case"brighten":t.Oe()
w=1
break A
case"flip_h":s=t.jY()
if(s!=null)t.d4(new C.etW(s))
w=1
break A
case"flip_v":s=t.jY()
if(s!=null)t.d4(new C.etX(s))
w=1
break A
case"rectangle":t.p6(D.bh)
w=1
break A
case"circle":t.p6(D.eN)
w=1
break A
case"triangle":t.p6(D.jQ)
w=1
break A
case"arrow":t.p6(D.CY)
w=1
break A
case"line":case"divider":t.p6(D.fs)
w=1
break A
case"word_count":r=t.gdu()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f2(q,new C.etY()),o=0;p.C();){n=A.a.fI(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.etZ(),B.S(n).k("a_<1>")).gM(0)}t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.j5(C.iY(A.L,!1,t.gqo().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mL,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.j5(C.iY(A.L,!1,t.gqo().e.l(),A.aD,22,A.bo,A.a7,0.12,q,"Subtitle goes here",0,D.df,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j5(C.iY(A.bi,!0,4279310375,A.aD,20,A.bo,A.a7,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ux,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j5(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a7,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.uw,0.8,0.1,0.22))
w=1
break A
case"quote":t.j5(C.iY(A.L,!1,4279310375,A.aD,24,A.cF,A.a7,0.25,C.cB(),'"Insert meaningful quote here."',0,D.df,0.8,0.1,0.3))
w=1
break A
case"citation":t.j5(C.iY(A.bi,!1,4284773515,A.aD,14,A.bo,A.a7,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.ux,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j5(C.iY(A.dN,!1,4279310375,A.aD,14,A.bo,A.a7,0.08,C.cB(),C.bCT(),0,D.df,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j5(C.iY(A.dN,!1,4279310375,A.aD,13,A.bo,A.a7,0.06,C.cB(),"Page "+(t.f+1),0,D.df,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.etG(t))
w=1
break A
case"footer_bar":t.d4(new C.etH(t))
w=1
break A
case"highlight":t.d4(new C.etI(t))
w=1
break A
case"redact":t.d4(new C.etJ(t))
w=1
break A
case"callout":t.d4(new C.etK(t))
w=1
break A
case"checkboxes":t.j5(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a7,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.df,0.8,0.1,0.2))
w=1
break A
case"table":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.df,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.etL(t))
w=1
break A
case"letter":t.j5(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a7,0.82,C.cB(),C.bCT()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.df,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j5(C.iY(A.bi,!1,4279310375,A.aD,22,A.bo,A.P,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ux,0.8,0.1,0.12))
w=1
break A
case"toc":t.j5(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.df,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.08,C.cB(),"Signature: _________________________",0,D.df,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.08,C.cB(),"Initials: ______",0,D.df,0.3,0.65,0.78))
w=1
break A
case"approved":t.j5(C.iY(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cB(),"APPROVED",0,D.mL,0.32,0.62,0.08))
w=1
break A
case"draft":t.j5(C.iY(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cB(),"DRAFT",0,D.df,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j5(C.iY(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.df,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.etM(t))
w=1
break A
case"progress":t.d4(new C.etN(t))
w=1
break A
case"stars":t.j5(C.iY(A.L,!1,4279310375,A.aD,36,A.bo,A.a7,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.qn,0.8,0.1,0.4))
w=1
break A
case"equation":t.j5(C.iY(A.L,!1,4279310375,A.aD,32,A.bo,A.P,0.14,C.cB(),"y = mx + b",0,D.df,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j5(C.iY(A.L,!1,4279310375,A.aD,18,A.bo,A.a7,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uw,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.etO(t))
w=1
break A
case"compare":t.d4(new C.etP(t))
w=1
break A
case"link_text":t.j5(C.iY(A.bi,!1,4280640491,A.mP,16,A.bo,A.a7,0.1,C.cB(),"https://example.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"phone":t.j5(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.1,C.cB(),"(555) 123-4567",0,D.df,0.8,0.1,0.5))
w=1
break A
case"email":t.j5(C.iY(A.bi,!1,4280640491,A.aD,18,A.bo,A.a7,0.1,C.cB(),"name@email.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.etR(t))
w=1
break A
case"cover_page":r=t.gdu()
if(r==null){w=1
break A}t.d4(new C.etS(t,r))
w=1
break A
case"invoice":t.j5(C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a7,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.df,0.8,0.1,0.08))
w=1
break A
case"resume":t.j5(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a7,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.df,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bCT()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j5(C.iY(A.bi,!1,4279310375,A.aD,17,A.bo,A.a7,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j5(C.iY(A.bi,!1,4279310375,A.aD,15,A.bo,A.a7,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.df,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q9,v)},
cu6(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eT2.t(0,this.z)},
cu5(d){if(this.jY()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7Y(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bD
u=B.I(u,A.q,o&&e?2:1)
t=C.i9I(d)
s=o?12:18
r=o?A.H:A.cO
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Og,A.f,p,p,D.Ed,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fD,B.aC(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a6),p)},
bNx(d){var w,v=null,u=this.jY()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.QN,new C.eva(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
ve(d){return this.bzS(d)},
bzS(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ve=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aO7.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o8(),$async$ve)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.etv(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ve,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eRK
w=h.e
if(w==null)return h.bDK()
v=h.gdu()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bY,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eH,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c_:D.bc3
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSg()}else j=!1
if(j)k.push(new C.a7M(h.a.c,!1,h.e.gbab(),h.gca5(),g))
else if(s&&h.e!=null&&!h.kl()&&C.cfR(h.e.w)){j=h.a
k.push(new C.a7M(j.c,j.d,g,h.gcbe(),g))}if(s)k.push(h.bNt(w,t,r))
if(s&&h.kl()){w=t?A.fz:A.kv
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bOb,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fz,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bf,A.i7,g,g,g))}w=!n
if(w&&!h.kl())k.push(h.c34(t,r))
if(w&&h.kl())k.push(h.cBx(t))
if(r&&h.jY()!=null&&w&&!h.kl())k.push(h.c30(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5O(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5O(t,!1),g))
i.push(B.E(new B.bI(A.b1,g,g,h.bF3(v,t,!s||p),g),1))
if(h.cu6(r)&&u&&s&&!h.kl())i.push(h.c9T(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kl()&&h.cu5(!1))j.push(new B.a7(240,g,h.bQb(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c31(t))
return B.c6(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bDK(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.c_:A.bL
v=r.a.e
u=r.c98(A.bj,A.q3,new C.eud(r),r.gcdo(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMf(A.bj,A.hE,"Blank Presentation",new C.eue(r)),1),A.at,B.E(r.aMf(A.b_,A.w1,"Class Template",new C.euf(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mO,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bAF(w))
else{t=new B.i3(t,B.S(t).k("i3<1>"))
A.d.v(u,t.gdL(t).dz(0,new C.eug(r,w),x.l))}return B.c6(q,p,B.bm(!1,B.cw(u,q,new B.R(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLF(){this.m(new C.euR(this))
var w=this.c
w.toString
if(B.aI(w,A.bY,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jO()}},
afk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jY()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.ex1(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afk,v)},
AQ(d,e){return this.cus(d,e)},
cus(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AQ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.WY,!0,"Dismiss",j,new C.eyA(),new C.eyB(d,e),A.iI,!0,x.N),$async$AQ)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiL()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSg()){r.aiL()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQ0(d),$async$AQ)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPr(j,q,d.b),$async$AQ)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fc(d,!1),$async$AQ)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.WY,!0,"Dismiss",j,new C.eyC(),new C.eyD(d),A.a1,!0,x.y),$async$AQ)
case 20:if(g===!0)r.O0(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agn("Rename presentation",d.b),$async$AQ)
case 24:l=g
if(l!=null)r.coJ(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eyE(r,k))
r.pn()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AQ,v)},
b0N(d,e){var w=null
return B.bK(!1,D.fAG,w,w,!0,w,w,e,w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.ax,w,A.lT,w,w,w,w,w,A.kc,w,w))},
bAF(d){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.etA(this,d),null)},
bJL(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.euF(),x.dv).c0(0,new C.euG()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahK,this.aMP(v,e,new C.euH(),f),null)},
aMP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aS(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.br,n,n,n,10),A.qv],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ci(A.aP,A.e,A.N,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bn(s,s,s,s),n,n,A.n),n,n,n,n,A.nl,n,n,n))
A.d.v(l,u)}return B.eQ(A.a3,B.B(l,A.m,n,A.e,A.N,0,n,n),A.f,A.e_)},
bAD(d,e,f){return this.aMP(d,e,null,f)},
bJN(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dgc
else if(v==="hati_kuhoweya")w=D.d1I
else{if(v==="hati_kiapo_uongozi")v=D.cPo
else v=C.ky(v)?D.cWA:A.Ql
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.euK(this,f,d,e,w),null)},
c31(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jY()
if(i==null||i.b!==D.cR)return A.bI
w=k.Wz(i)
v=k.atl(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bi,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.fwg,j,j,!0,j,j,new C.ewa(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aw:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h9,B.c0(new B.D(A.eR,B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bUb,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wz,j,j,j,j,j,j,!1,"\u2022",j,new C.ewb(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zM,A.an,j,A.TI,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.n(16)
p=d?A.bm:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cc(B.B(B.a([k.u0(G.Ng,j,new C.ewc(k,i),d),k.u0(G.a_N,j,new C.ewd(k,i),d),k.u0(K.am3,j,new C.ewe(k,i),d),k.u0(K.a0s,j,new C.ewf(k,i),d),k.u0(k.bAB(i.as),j,new C.ewg(k,i),d),k.u0(D.anb,j,new C.ewh(k,i),d),k.u0(D.ana,j,new C.ewi(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aP),1)
m=A.k.N(i.w)
return B.bW(0,B.aF(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(H.ahT,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dc],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lq,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c30(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jY()
if(m==null)return A.bI
w=m.b
v=w===D.cR
u=B.n(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cC,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4r(A.js,"Edit",new C.evW(o,m),d,!0))
if(w===D.lA)p.push(o.b4r(A.Gy,"Shape & ring",new C.evX(o),d,!0))
p.push(o.u0(A.C6,"Format",new C.evY(o),d))
if(v)A.d.v(p,B.a([o.u0(G.Ng,n,new C.evZ(o,m),d),o.u0(D.anb,n,new C.ew_(o,m),d),o.u0(D.ana,n,new C.ew0(o,m),d)],q))
p.push(A.b7)
p.push(o.csf(A.e9,n,o.gaQR(),d,!0))
p.push(o.u0(A.hq,"Done",new C.ew1(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bg,A.lq,n,n,n)},
bAB(d){switch(d.a){case 2:return D.a0p
case 1:case 5:return D.a0r
default:return D.a0q}},
c3U(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dN
default:return A.bi}},
azK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.n(12)
u=B.n(12)
t=h?L.GS:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eg,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pZ,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eH(new B.D(new B.R(q,8,q,8),B.B(o,A.m,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
u0(d,e,f,g){return this.azK(d,e,f,g,!1,!1)},
b4r(d,e,f,g,h){return this.azK(d,e,f,g,h,!1)},
csf(d,e,f,g,h){return this.azK(d,e,f,g,!1,h)},
bNt(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mZ],m)
w=B.I(e?A.aJ:A.nR,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cC,18)],x.V)
u=p.a2x(A.eE,"Back",p.gbGR(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dc,B.E(B.B(B.a([new B.dq(1,A.co,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bU:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tG,o,A.e,A.j,0,A.cY,o),1)],q)
if(!p.kl()){u=p.a2x(A.rn,"Undo",p.ax.length===0?o:p.gcC5(),e)
A.d.v(r,B.a([u,p.a2x(D.bHH,"Redo",p.ay.length===0?o:p.gcnq(),e)],q))}r.push(p.a2x(A.ye,"PDF",new C.ev3(p),e))
r.push(p.a2x(A.hF,"Download as video",new C.ev4(p),e))
if(!p.kl())r.push(B.BZ(o,o,B.X(A.o9,e?A.ad:A.br,o,o,o,o),new C.ev5(p),A.J,new C.ev6(p),A.af,"More",x.N))
r.push(A.dc)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eH(D.ed3,o,new B.o(o,o,o,B.n(14),o,L.GS,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAA(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.az,A.aC,A.x,m,o,o),A.n),o,o,o,D.bsT,D.by1,o,o,o)},
cBx(d){var w=this,v=null,u=B.n(18),t=d?A.aw.j(0.92):A.c.j(0.96),s=B.I(d?A.cs:A.aL,A.q,1)
return B.p(v,B.cc(B.B(B.a([w.iR(A.ub,"Print",new C.ezl(w),d),w.iR(A.ye,"Download PDF",new C.ezm(w),d),w.iR(A.q9,"Present",w.gaAA(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aP),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bf,G.ajw,v,v,v)},
a2x(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dr
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c34(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.aw.j(0.92):A.c.j(0.96)
u=B.I(d?A.cs:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.ewl(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ajb,new B.fh(new C.ewm(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vJ,r.ah0(A.lr,"Ending celebration",r.gcdB(),d),q),new B.D(R.vJ,r.ah0(A.Gy,"Logo ring & frame",r.gceh(),d),q)],x.p):A.hc)
A.d.v(t,w?B.a([new B.D(R.vJ,r.ah0(A.no,"Look and feel",r.gcei(),d),q),new B.D(R.vJ,r.ah0(A.p2,"Edit this slide's text",r.gceP(),d),q)],x.p):A.hc)
t.push(new B.D(R.vJ,B.hx(B.aC(q,B.p(q,D.eR9,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.lm.j(0.4),A.J,10)],x.V),D.ap7,A.n),q,34,q,q,A.h_,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ewn(r),q,q,q,q,q,q,!1,A.a6),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cc(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.byu,q,q,A.aP)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cc(r.cpT(d),A.r,q,A.y,q,new B.R(8,2,8,s),q,q,A.aP)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bf,q,q,q,q)},
cpT(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d9J[v]
u.a=null
s=u.a=t.b
w.push(e.lM(e.crE(s),t.a,new C.exK(u,e),a3,D.aO7.t(0,s)))}w.push(e.iR(A.l0,"Notes Slide",new C.exL(e),a3))
w.push(e.lM(A.Gx,"Quiz",new C.exM(e),a3,!0))
w.push(e.lM(M.G9,"Worksheet",new C.exX(e),a3,!0))
w.push(e.lM(V.GB,"Flashcard",new C.ey7(e),a3,!0))
w.push(e.lM(A.O6,"Lab Report",new C.eyi(e),a3,!0))
w.push(e.lM(A.u5,"Rubric",new C.eyp(e),a3,!0))
w.push(e.lM(A.oX,"Minutes",new C.eyq(e),a3,!0))
w.push(e.lM(A.o8,"Syllabus",new C.eyr(e),a3,!0))
w.push(e.lM(A.Ob,"Timeline",new C.eys(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.db1[v]
w.push(e.lM(r.b,r.c,new C.eyt(e,r),a3,!D.aOd.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iR(A.yz,a0,e.gaMw(),a3),e.iR(A.u8,"Picture",new C.exN(e),a3),e.iR(A.yt,"Bio link",new C.exO(e),a3),e.iR(A.a0V,"Table",new C.exP(e),a3),e.iR(A.Oa,"Sticky",new C.exQ(e),a3),e.iR(A.u7,"Divider",new C.exR(e),a3),e.iR(A.C7,"Header",new C.exS(e),a3),e.lM(A3.vS,"Rectangle",new C.exT(e),a3,!0),e.lM(A.rf,"Circle",new C.exU(e),a3,!0),e.lM(A.a0i,"Triangle",new C.exV(e),a3,!0),e.lM(A.j4,"Arrow",new C.exW(e),a3,!0),e.lM(D.bGa,"Parallelogram",new C.exY(e),a3,!0),e.lM(D.bIF,"Hexagon",new C.exZ(e),a3,!0),e.lM(A.u7,"Line",new C.ey_(e),a3,!0),e.lM(A.ye,"PDF",new C.ey0(e),a3,!0),e.lM(O.a13,"Signature",new C.ey1(e),a3,!0),e.iR(A2.BV,"Quote",new C.ey2(e),a3),e.iR(D.a_V,a1,new C.ey3(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bY,x.w).w
u=x.p
t=B.B(B.a([e.aNl("Wide 16:9",D.CW,a3),e.aNl("Short 9:16",D.oi,a3),new B.D(A.fD,B.mL(D.bKO,d,D.fsC,d,new C.ey4(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bH5("This slide",!e.Q,a3,new C.ey5(e)),A.bp,e.aPx("All slides",e.Q,a3,new C.ey6(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bH6()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bU:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2U,new C.ey8(e),n),n.k("ak.E"))
n=B.cc(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dc2[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dr:A.aZ,1.5,A.q,-1)
l.push(new B.D(A.fD,B.aC(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ey9(e,k),d,d,d,d,d,d,!1,A.a6),d))}l=B.cc(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bEa()
g=B.S(h).k("M<1,D>")
h=B.C(new B.M(h,new C.eya(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.cc(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP),A.am,e.c_S(a3)],u),A.F,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.jY()
w=e.c
w.toString
w=B.aI(w,A.bY,x.w).w
u=new C.exJ(e)
t=new C.eyu(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QN,f.dy,new C.eyb(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdu()
q=q==null?d:q.r
p.push(t.$4(D.QN,q,new C.eyc(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.x(p,A.F,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iR(A.l0,w,new C.eyd(e),a3),e.iR(A.ub,"Print deck",new C.eye(e),a3),e.lM(D.al6,"Export JSON",new C.eyf(e),a3,!0),e.iR(A.fR,"Duplicate Slide",e.gaRK(),a3),e.iR(A.e9,a2,e.gaQS(),a3),e.cvN(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jY()
w=x.p
u=B.a([e.iR(D.a_V,a1,new C.eyg(e),a3),e.iR(A.fR,"Duplicate",e.gaRK(),a3),e.iR(A.e9,a2,e.gaQS(),a3),e.iR(A.q9,"Present",e.gaAA(),a3),e.iR(A.C5,a0,e.gaMw(),a3),e.iR(A.BZ,"Fit Text",new C.eyh(e),a3),e.iR(A.ye,"Download PDF",new C.eyj(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iR(A.kz,"Transfer",new C.eyk(e),a3))
if(f!=null){w=B.a([A.ab,e.iR(G.Ng,"Bold",new C.eyl(e,f),a3),e.iR(G.a_N,"Italic",new C.eym(e,f),a3),e.iR(G.akI,"Underline",new C.eyn(e,f),a3),e.iR(Ad.Nh,"Bullets",new C.eyo(e,f),a3),e.bPV(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNx(a3))
w.push(e.iR(D.bEO,"Delete",e.gaQR(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aNl(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oi
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8N,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dc,D.bK_],v))
return new B.D(A.fD,B.j9(t,t,t,B.B(u,A.m,t,A.e,A.N,0,t,t),t,new C.eu8(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cvN(d){var w,v,u,t,s,r=this,q=null,p=r.gdu()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.aZ:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.G7,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.ao7,q,q,q,new C.eyR(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.anZ,q,q,q,new C.eyS(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FO,A.mw,q,q,q)},
crE(d){switch(d.a){case 6:return V.GB
case 7:return A.Gx
case 8:return M.G9
case 4:return A.C7
default:return A.l0}},
bPV(d,e){var w=null,v=B.I(e?A.aZ:A.cr,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.ao7,w,w,w,new C.evg(this,d),w,w,w,w,w,A.ce),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.anZ,w,w,w,new C.evh(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xY,A.mw,w,w,w)},
c_S(d){var w=null
return B.BZ(B.Dn(B.X(A5.a_Y,d?A.ad:A.br,w,w,w,16),w,w,D.fy6,w,w,w),w,w,new C.evO(),A.J,this.gbBi(),A.cp,"Slide layout",x.fO)},
lM(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dn:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Og,A.f,w,w,D.Ed,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fD,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eH(new B.D(A.h9,B.x(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iR(d,e,f,g){return this.lM(d,e,f,g,!1)},
b5O(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aP
v=B.hN(t,new C.ez2(u,s,e,d),s.r.length,A.cp,t,w,new C.ez3(e),!1)
s=d?A.aw:A.bL
w=B.a([],x.p)
if(e&&!u.kl())w.push(new B.D(A.cp,B.HO(E.aok,new C.ez4(u),B.nE(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aOS,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bF3(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oi?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bI(A.b1,v,v,new B.fL(w,B.aC(v,B.cq(new C.eux(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.euy(this),v,v,v,v,v,v,!1,A.a6),v),v),v)},
bF5(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ky(a9.w))===!0,b1=b0&&C.fFX(b3),b2=b0&&b3.b===D.l8&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kl())v=!b0||a7.c29(b3)
else v=!1
if(!a7.kl())u=!b0||a7.c28(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h3X(b3))o=a8
else if(p&&!a7.kl())o=a7.gca7()
else o=a7.kl()?a8:new C.eul(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c8:A.jJ
i=w&&C.h3X(b3)&&a7.zT()?new C.eum(a7,b3):a8
h=v&&b3.b===D.cR?new C.eun(a7,b3):a8
g=u?new C.euo(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bc
else e=q?A.c0:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c0.j(0.08)
else a0=b3.b===D.l8?A.K:a8
if(b1){a1=a7.kl()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c0.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bY,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zT()
a3=b3.b===D.cR
a4=a3?a7.Wz(b3):a8
a5=a3?a7.atl(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bY,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eup(a7,b3):a8
a3=v&&a3?new C.euq(a7,b3):a8
a6=C.b1a(q,a4,a1,b3,a5,a2,a3,new C.eur(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aC(a8,B.p(a8,D.bMP,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eus(a7,b3,b4,b5),a8,a8,new C.eut(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a6),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kl()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bNu,A.f,a8,a8,new B.o(A.dw,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbYs(),a8,a8,a8,a8,a8,a8,!1,A.a6),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kl()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bP2,A.f,a8,a8,new B.o(A.c0,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euu(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a6),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cR)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bY,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aC(a8,B.p(a8,D.fGY,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kY,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euv(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a6),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aC(j,B.eJ(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a6),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPx(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bD,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dc,B.p(r,D.Og,A.f,r,r,D.Ed,r,12,r,r,r,r,r,12)],s))
return B.aC(r,B.p(r,B.B(t,A.m,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a6)},
bH5(d,e,f,g){return this.aPx(d,e,f,g,!1)},
c9T(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aw:A.aQ
t=f?A.x1:l
if(f)s=new B.bO(new B.az(e?A.bD:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rJ,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b0N(e,new C.ewp(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bU:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dj),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ewq(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aT2(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jY()
if(a2==null)return A.bI
w=new C.evu(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dT:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b0N(a3,a0.gbLE())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.ft6,B.E(B.l1(a1,a1,a1,u,0.05,new C.evv(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fFp,B.E(B.l1(a1,a1,a1,t,0.05,new C.evw(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cR
if(m)o.push(B.B(B.a([D.fmR,B.E(B.l1(a1,a1,a1,96,10,new C.evx(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lA
if(l||n===D.l8||n===D.S9)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fyQ,B.E(B.l1(a1,a1,a1,s,0,new C.evy(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fGG,B.E(B.l1(a1,a1,a1,r,0,new C.evz(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cm[j]
i.a=null
g=h.a
i.a=g
k.push(B.j9(a1,a1,a1,new B.y(h.b,a1,A.pl,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.evA(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bT(A.bA,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ch[j]
f.a=null
g=e.a
f.a=g
h.push(B.j9(a1,a1,a1,new B.y(e.b,a1,A.pl,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.evB(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bT(A.bA,h,A.bq,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.evC(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bT(A.bA,l,A.bq,6,6),A.ac,B.hg2(new C.evD(w,a2),D.cqu,B.ew([a2.as],k),!0,a1,k)],p))}if(n===D.f5){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.evE(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bT(A.bA,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bOP,D.fAR,new C.evF(a0,a5),B.bo(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cs:A.c
p=a4?A.x1:a1
if(a4)o=new B.bO(new B.az(a3?A.bD:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rJ,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fw,a1,a1,a1)},
bQb(d){return this.aT2(d,!1,!1,null)},
c98(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c7(p,new C.evI(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fcO,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bC,A.cV,r.bAD(D.cU2,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dX(B.hx(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eH(D.eX2,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c0.j(0.4),A.en,8)],p),D.apc,A.a5),q,q,q),A.cM,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b8K,D.b98],v):B.a([A.c,A.kv],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cC,14)],p),new B.a9(A.az,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aMf(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.eth(this,g,d,e,f),null)},
agn(d,e){return this.clE(d,e)},
clE(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.exm(d,q),p,null,!0,!0,x.N),$async$agn)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agn,v)},
PT(d){var w=d.bU()
return""+B.bH(w)+"/"+B.bS(w)+"/"+B.bA(w)}}
C.afe.prototype={}
C.ayR.prototype={
S(){return new C.bcJ(null,null)}}
C.bcJ.prototype={
gcy4(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bH(u)+"/"+B.bS(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pW,u,1,u,v)
w.fh(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.brn,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.btZ()},
J0(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.az(0,new B.hU(w,v,A.cu).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bwT,B.c7(new B.hb(B.a([u,w],x.dS)),new C.d1Q(this),v),v),v,v,v)}}
C.bcX.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.av(new B.D(D.bx9,B.aF(!1,A.a1,!0,w,B.p(w,B.bv(B.n(22),B.x(B.a([new B.D(D.bwk,B.x(B.a([B.p(w,D.bNA,A.f,w,w,new B.o(A.av.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fCZ,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fdY,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,D.bqr,B.B(B.a([B.E(B.bK(!1,D.frk,w,w,!0,w,w,new C.d2b(d),w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.ni,w,A.om,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fwB,w,w,!0,w,w,new C.d2c(d),w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.ni,w,A.om,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.N,0,A.p),A.aq),A.f,w,A7.VL,new B.o(A.aw,w,u,v,D.cUn,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JO.prototype={
S(){return new C.bcI()}}
C.bcI.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dX(B.de(B.aC(o,B.vs(B.df(o,B.B(B.a([r,A.at,new B.dq(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f1:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.N,0,o,o),o,o,A.bd,new B.o(n,o,u,v,t,o,A.n),A.eJ,o,o,o,A.nj,o,o,1/0),A.cu,A.jo,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d1L(p,d),new C.d1M(p),new C.d1N(p),new C.d1O(p),o,o,o,!1,A.a6),k),new B.v(0,(1-k)*16))}}
C.PA.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.az,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ep,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.mQ,v,v,v),A.bC,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_w.prototype={
S(){return new C.aEn(D.df,null,null)}}
C.aEn.prototype={
gYO(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bqY,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b6e(d){if(!this.a.c.ay)return
this.x=d
this.gYO().iK(0,0)},
Z(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avL(D.f2r)
C.i6E()
v.Rh()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYO().q()
v=w.z
if(v!=null)v.a7(0)
C.avL(D.f2s)
C.i6H()
w.bw6()},
cAT(){B.jl()
this.m(new C.eA1())
var w=this.c.K(x.q).f
w.a4G()
if($.bku)w.U(D.f_i)},
Rh(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dE(0,0,0,0,0,A.o.D(C.hed(u,w),1,120)),new C.ezS(v))},
cAy(){var w,v=this
v.m(new C.eA0(v))
if(v.r)v.Rh()
else{w=v.f
if(w!=null)w.a7(0)}},
gaUY(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cuy(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.ezT(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lp,new C.ezU(w))},
awd(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.ezO(u))
u.Rh()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUY()){u.cuy()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ezP(u,A.o.E(w+1,s)))
u.b6e(w)
u.Rh()}},
cki(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.ezQ(v))
v.Rh()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ezR(v,w,t))
v.b6e(w)
v.Rh()}},
cvZ(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.nh(d,new B.cx(u,x.ac))}w=v.cw_(u)
u=v.d
u===$&&B.c()
return B.qm(new B.nh(d,new B.cx(u,x.ac)),w,new C.ezZ(),A.bd,A.bd,new C.eA_(v))},
cw_(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.brj
case 16:return A.kx
case 18:return A.ne
default:return A.ng}},
cvY(d,e,f){var w,v,u,t=null,s=B.cH(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sp,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.iu,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uE,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c7(s,new C.ezV(s),e)
case 9:return B.c7(s,new C.ezW(s),e)
case 10:return B.c7(s,new C.ezX(s),e)
case 11:return B.c7(s,new C.ezY(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.is(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jA(B.jr(e,new B.bf(s,new B.bq(A.uF,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.brA(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sp,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mO((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jR(v,u,v,1)
return B.fw(A.A,B.de(e,s.gp(0)),t,w,!0)
case 20:return B.eJ(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jA(new C.aon(B.c7(n.gYO(),new C.eA2(n,v,w),m),m),A.r,m)}else{t=B.rE(new C.IN(w,!0,!1,m))
l=B.b0(w.e)
u=n.cvZ(B.en(B.jA(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hed(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ow,m,m,m),A.bp,D.bPT],k),A.m,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fP,m,m,m)
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
l.push(B.bW(0,new C.Nu(new C.Ey(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oi?0.5625:1.7777777777777777
l.push(B.av(new B.fL(r,B.jA(B.uv(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bku){r=B.HO(A.l4,new C.eA3(d),B.nE(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HO(B.X(n.r?Aj.yr:A.iM,m,m,m,m,m),n.gcAx(),B.nE(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hw,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fP,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aC(A.c8,B.p(A.lg,$.bku?A.bI:s,A.f,m,m,m,m,64,m,m,D.bs4,m,m,150),A.y,!1,m,n.gcAS(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a6),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aC(m,new B.an(A.W,m,A.b2,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eA4(n,d),m,m,m,!1,A.a6),m,!1,!1,m,m)}}
C.JV.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aiY,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1w,w,w,w,w,w,w,w,w)}}
C.brA.prototype={
jg(d){return new B.a8(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jU(d){return d.b!==this.b}}
C.bhB.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aZi
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w8,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bd,new B.o(s.f,r,u,w,r,r,A.n),A.hB,r,64,r,r,r,r,64)
return B.aC(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a6)}}
C.bhA.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.doV.h(0,p)
if(o==null)o=D.dbb
p=p==="none"
w=p?q:new B.a9(A.a3,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.anm:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.el,q,q,52)
return B.aC(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a6)}}
C.aK4.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aM6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.bxl.prototype={}
C.aM7.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.b1d.prototype={}
C.W0.prototype={
S(){return new C.aEl()},
bgP(d){return this.e.$1(d)}}
C.aEl.prototype={
gb4x(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaat(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb4x()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOb(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4x()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5N(){return A.d.cJ(this.gaat(),0,new C.ezy())},
Z(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QT()},
QT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1P(s.c,s.f),$async$QT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ezu(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QT,v)},
J2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaat()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fJ8(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pb(o,q.c,q.f),$async$J2)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ea(new C.ezx(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).cm(q),$async$J2)
case 4:q=t.a
w=5
return B.b(B.pa(q.c,q.f),$async$J2)
case 5:w=6
return B.b(t.QT(),$async$J2)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J2,v)},
Rf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e1K,!0,"NgmySlidesTransferScan",x.N),$async$Rf)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ezv(t))
w=4
return B.b(C.ahp(s),$async$Rf)
case 4:r=e
t.m(new C.ezw(t))
o=J.a4(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.eZ9)
w=1
break}w=5
return B.b(t.a.bgP(r),$async$Rf)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rf,v)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaat()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pb(s,r.c,r.f),$async$J1)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fJn(null,A.d.gI(n),s,t.a.f)}else q=C.fJn(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gu(q,"ngmy_slides_"+p,!1),$async$J1)
case 4:o=e
s=t.a
w=5
return B.b(B.pa(s.c,s.f),$async$J1)
case 5:w=6
return B.b(t.QT(),$async$J1)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
a2I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ezz(t))
w=3
return B.b(C.bCB(),$async$a2I)
case 3:s=e
t.m(new C.ezA(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bgP(s),$async$a2I)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a4(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2I,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bL,k=o.gaat().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bU(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cB,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.ezD(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zK],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q3,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bQp,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ep,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bB9],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hx(B.aC(A.c8,D.eX4,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcf0(),n,n,n,n,n,n,!1,A.a6),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1z,A.n),n,n,n,n,E.Zq,n,n,1/0),A.dZ,o.axp(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aXg(A.q9,m,new C.ezE(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aXg(D.bG2,m,new C.ezF(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.axp(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.aw:A.c
t=B.n(16)
s=B.I(m?A.bD:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bP,n,n,n))}else A.d.v(v,new B.M(u,new C.ezG(o,m),B.S(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mO)
w.push(o.axp(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.aq2(A.aO,k,!0,A.jv,m,o.r,o.gc9c(),"Scan on another device","Show QR"),1),A.at,B.E(o.aMg(A.k_,!0,A.j5,m,o.gcrd(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bz7(A.aV,k,A.hF,m,o.r,o.gc99(),"Download .json","Backup file"),1),A.at,B.E(o.aMg(A.aF,!0,Av.yB,m,o.gcDl(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lt,A.bj.j(0.9),n,n,n,18)
r=o.gaOb()
q=o.gb5N()
p=o.gb5N()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Af.MS,i,n),B.E(B.cw(w,n,D.bvt,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.W3,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afx(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.id1(s,t.d,t.e),$async$afx)
case 2:return B.h(null,v)}})
return B.i($async$afx,v)},
axp(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXg(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.aw:A.c
if(g)w=A.bj
else w=e?A.bD:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cC,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eH(new B.D(A.bB,B.x(B.a([t,A.R,u,A.bC,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bJM(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.aw:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bD:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bQB,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.e8:A.rf
if(p)r=A.bj
else r=e?A.aZ:A.dr
return new B.D(A.cv,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ezt(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
aq2(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.aw:A.c
if(f)w=d.j(0.45)
else w=h?A.bD:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rd,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anT,A.f,s,s,D.b1i,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.de(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eH(new B.D(E.Z4,B.x(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bC,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aMg(d,e,f,g,h,i,j){return this.aq2(d,e,!1,f,g,!1,h,i,j)},
bz7(d,e,f,g,h,i,j,k){return this.aq2(d,e,!1,f,g,h,i,j,k)}}
C.W1.prototype={
S(){return new C.bkt()}}
C.bkt.prototype={
Z(){this.a1()
this.aeo()},
aeo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aeo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fJn(null,A.d.gI(m),k,r.a.f):C.fJn(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ky(A.d.gI(n).w))C.fJ8(A.d.gI(r.a.d),D.d93)
n=r.a
m=n.c
n=C.i9Y(n.d)
w=7
return B.b(C.fJm(p,C.ia2(r.a.d),n,m,q),$async$aeo)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ezH(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ezI(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeo,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.ezJ())
v=B.aH(j,j,j,j,B.X(A.eE,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ezK(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zK],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1z,A.n),j,j,j,j,E.Zq,j,j,1/0)
q=B.n(24)
s=B.I(A.aO.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a87,A.L,j,j))
else if(k.d==null)r.push(D.ecD)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cC,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.frO,A.am,B.aC(j,B.p(j,B.B(B.a([D.bS9,A.at,B.d(m,j,j,j,j,j,j,D.fem,j,j,j)],u),A.m,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bWY,A.n),j,j,j,j,A_.aiK,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ezL(k,d),j,j,j,j,j,j,!1,A.a6),A.O,D.fw7,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bD,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pT(j,j,!1,l,j,!0,!0,j,!1,D.bmF),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hh,A.L,j,j))
return B.c6(j,h,B.bm(!0,B.x(B.a([new B.D(Af.MS,v,j),B.E(B.cc(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bYU,A.n),j,j,j,j,A.tV,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aj2,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aEi.prototype={
S(){return new C.aEj(new B.ar(A.as,$.aw()),B.jU(!0,null,!0,!0,null,null,!1))}}
C.aEj.prototype={
Z(){var w=this
w.a1()
w.e.aQ(0,new C.etb(w))
$.aW.x1$.push(new C.etc(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZY(){var w,v=this.c
v.toString
w=C.yF(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eH,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uD,36),D.abP],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bND,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.foW,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b1J,k,k,k,k,A.xX,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aw:A.M
o=new B.aS(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bg,B.df(A.A,new B.y(p,k,D.f7X,k,k,k,k,k,k,k,k,k),k,k,A.bd,new B.o(s,k,new B.bO(m,m,m,m),new B.bn(o,o,o,o),n,k,A.n),A.hB,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J5)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bW(0,B.de(B.aM(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bUU,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.um(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bu(5,k),new C.buR()],x.aS),k,k,A.aQ6,k,5,k,1,k,k,!1,"\u2022",k,new C.et7(l),k,new C.et8(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m8,k,k,k,k),0),0,0,0)],a1)
d=C.yF(w.a.a.toUpperCase())==null?k:l.gc9d()
return B.av(new B.D(new B.R(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cS(Ac.Kz,B.p(k,B.bv(e,B.x(B.a([a0,new B.D(D.bvY,B.x(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.R,D.fng,A.by,new B.a7(1/0,50,B.bG(D.fDS,d,B.bo(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nG,k,k,!0,k,k,new C.et9(a2),k,B.fz(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.buR.prototype={
oC(d,e){var w=e.a.toUpperCase()
return e.cJB(B.hi(A.bw,w.length),w)}}
C.arh.prototype={
S(){return new C.aEm(B.zi(A.M8,A.nN,A.um))}}
C.aEm.prototype={
q(){this.d.q()
this.a2()},
aZX(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aan(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aan=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fS1(s),$async$aan)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZX("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aan,v)},
c9b(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.ia0(w[u])
if(t!=null){this.aZX(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.w5,s,s,s,t.gbO2(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.X(q?A.ri:Ak.NO,s,s,s,s,s),s,s,s,new C.ezN(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fF5,s,s,s,1,s,!0)
r=B.zh(t.d,A.bW,t.gc9a())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c6(p,A.w,new B.an(A.W,s,A.b2,A.r,B.a([r,w,B.ao(32,B.p(s,D.fsS,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jq,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bv2.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,H.any,A.f,w,w,D.b1s,w,56,w,w,w,w,w,56),A.aR,D.fEM,A.am,new B.jN(this.c,new C.faq(),w,w,x.cI),A.aR,new B.jN(this.d,new C.far(),w,w,x.cl),A.ac,D.fEJ],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,Ac.Kz,new B.o(A.aw,w,u,v,w,w,A.n),w,w,w,L.Zx,D.bwB,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7M.prototype={
S(){return new C.bkc(A.bx)},
gde(){return this.c}}
C.bkc.prototype={
Z(){var w=this
w.a1()
if(w.a.d)return
w.a_1()
w.d=B.dv(A.fZ,new C.ehk(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
a_1(){return this.cnx()},
cnx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ehi(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bC(new B.T(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cfS(p.c),$async$a_1)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ehj(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_1,v)},
bQ2(d){var w,v,u=d.a,t=A.o.am(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.am(u,6e7)%60
v=A.o.am(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aX(A.o.u(w),2,"0")+"m "+A.a.aX(A.o.u(v),2,"0")+"s left"
return A.a.aX(A.o.u(w),2,"0")+":"+A.a.aX(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.am(w,6e7)<30&&A.o.am(w,36e8)<999?A.av:A.c0
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.G7,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bQ2(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ahO,A.i7,r,r,1/0)}}
C.a8G.prototype={
nh(){var w,v,u,t=this
t.xh()
w=t.cx
v=t.c
w.bqD(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pZ(B.F(["/S",D.egi,"/URI",new B.ry(B.Wz(w.as),A.uG,!0)],x.N,u),u))}}
C.a8H.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2S.prototype={
by9(d,e,f,g,h,i,j,k,l,m){var w=B.ew([D.eeB],x.di)
this.w!==$&&B.aP()
this.w=w},
gcMT(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jT(w,new C.ci3(),B.a3(w).k("jT<co.E,G>")).ff(0,new C.ci4())},
aCU(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hg(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tz(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.tz(H.apC))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcMT()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pZ(w,x.Y))}}
C.ci5.prototype={}
C.a2S.prototype={}
C.aig.prototype={}
C.aRb.prototype={
h4(d){var w,v,u,t,s,r,q=this,p=null
q.ln(d)
q.M_(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bgc(w)
u=x.N
t=x.Y
s=new C.ci5(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.by9(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pZ(B.F(["/Type",D.egg],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8G(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awJ.prototype={}
C.aSI.prototype={
h4(d){var w,v,u,t,s=this
s.ln(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.ie()
t=s.a
t.toString
u.L7(t)
u.Sw(0)
u.oX(0,v)
w.h4(d)
u.nk(0)}}}
var z=a.updateTypes(["aA<~>()","~(lJ)","Q(i5)","~()","Q(eM)","Q(op)","Q(lJ)","~(i5)","Q(eM,eM)","JV(Y)","Q(nO)","Q(lf)","aA<Q>()","G(G,i5)","a6<m,@>(i5)","ai<zB>()","m(nO)","Q(a82)","m(lJ)","m(w1)","Q(EH)","G(i5,i5)","m(eM)","t(eM)","cL(eM)","t(hF)","~(hF)","eM(uK,K,K,K,K,G{fx:m,key:m,rotation:K})","eM(m,K,G)","G(op,op)","Q(zB)","Q(m,ai<zB>)","a6<m,@>(op)","nO()","YD(Y)","eM(m,K,K,K,K,K{align:q4,anim:hF,bullets:Q,color:G?,delay:G,fx:m,key:m,style:HJ,weight:nC})","a0T(Y)","eM(m,K,K,K,K{anim:hF,delay:G,fx:m,key:m})","aA<~>(op)","Q(mu)","YB(Y)","a0q(Y)","a0p(Y)","Pq(Y)","ZM(Y)","eM(uK,K,K,K,K,G,m,m{anim:hF,delay:G,rotation:K,stroke:G,strokeWidth:K})","eM(m,K,K,K,K,K,m,m,G)","eM(K,K,m,G{size:K})","t(rm,K,K)","lf()","op(a6<@,@>)","~(uA)","EH()","fg(eM)","t(j1)","Zk(Y)","~(Ey)","ZF(Y)","G(eM,eM)","eM(eM)","a6<m,@>(eM)","eM(a6<@,@>)","lJ(lJ)","a6<m,@>(lJ)","lJ(a6<@,@>)","Q(jH)","jH()","m(i5)","~(ai<op>)","T(ai<i5>)","T(i5)","ai<i5>(m?)","acK(Y,G)","~(Q(eM,eM))","ado(Y)","af4(Y,G)","w(lJ,Q)","VN(Y)","adr(Y)","VQ(Y)","~(my)","i5(i5)","K(eM)","a_U(Y)","a_w(Y)","i5()","ai<F3>()","aA<~>(ai<i5>)","t(bw<G,i5>)","D(jH)","D(EH)","aA<~>(hF,~())","t(ai<hF>,hF?,~(hF),w)","Q(m8)","ai<jq<my>>(Y)","jq<my>(my)","i5(a6<@,@>)","W0(Y)","eM(m,K,K,K,K,K,G{align:q4,style:HJ,weight:nC})","W1(Y)","t(i5)","~(m1)","IN(Y,lJ,t?)","G(a8H)","aA<ai<a6<m,@>>?>()","m(m)","aA<zz>({paper:m?,photo:dL?,request:m,template!li})","aA<a7V>({doc!zz,history:ai<+(m,m)>,instruction!m,photo:dL?,template!li})","adl(Y)"])
C.cG7.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cG8.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cG9.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gak7(s):16;--w.c}w.b=A.o.dY(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mu(v,t)
w.b=v-A.o.dY(q,t)
w.a=t
return q},
$S:74}
C.cGa.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bPe.prototype={
$1(d){return J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.fvV.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.c_0.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.c_1.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aM(v,J.k(w==null?"":w))},
$S:43}
C.c_3.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fM5.prototype={
$1(d){return new C.a0T(this.a,this.b,C.iaT(),null)},
$S:z+36}
C.f8T.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f8X.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f8Y.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f8Z.prototype={
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
C.f8U.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f8V.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f8W.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f8O.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hJ,w,w,w)
return B.em(B.a([B.bK(!1,D.frg,w,w,!0,w,w,new C.f8M(d),w,w),B.bK(!1,D.fql,w,w,!0,w,w,new C.f8N(d),w,w)],x.p),w,w,D.XT,v,w,w,w,w,D.fFo,w)},
$S:21}
C.f8M.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f8N.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f8P.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f8Q.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f92.prototype={
$0(){var w=this.a
return w.m(new C.f91(w,this.b))},
$S:0}
C.f91.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8S.prototype={
$0(){var w=this.a
return w.m(new C.f8R(w,this.b,this.c))},
$S:0}
C.f8R.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f9_.prototype={
$0(){return this.a.a18(this.b)},
$S:0}
C.f90.prototype={
$0(){return this.a.P5(0,this.b)},
$S:0}
C.f95.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f96.prototype={
$0(){var w=this.a
return w.m(new C.f94(w,this.b))},
$S:0}
C.f94.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f93(),B.S(w).k("M<1,m>")))}},
$S:0}
C.f93.prototype={
$1(d){return d.a},
$S:z+67}
C.fg6.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hbq(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cy)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.op(s,v,u==null?new B.T(Date.now(),0,!1):u)},
$S:z+50}
C.fg7.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fyK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcC()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fyI.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fyJ.prototype={
$2(d,e){return e.c.aM(0,d.c)},
$S:z+29}
C.fLA.prototype={
$1(d){return d.ah()},
$S:z+32}
C.fvz.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fMr.prototype={
$1(d){return new C.YD(this.a,null)},
$S:z+34}
C.cHt.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cHv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cHx())},
$S:11}
C.cHx.prototype={
$0(){},
$S:0}
C.cHA.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1S(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cHw(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahy(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:274}
C.cHw.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHB.prototype={
$1(d){},
$S:30}
C.cHu.prototype={
$1(d){return new C.YB(this.b,this.a.gcxq(),null)},
$S:z+40}
C.cHC.prototype={
$1(d){return D.h2M},
$S:z+43}
C.cHp.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.Xy,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bwn,B.x(B.a([B.p(w,D.bKP,A.f,w,w,new B.o(A.av.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aR,D.fpm,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fdm,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,new B.D(A.q_,B.B(B.a([B.E(B.dW(D.fw9,new C.cHn(d),B.dg(w,w,w,w,w,w,w,w,w,E.n6,w,w,A.cm,w,new B.b7(B.n(14),A.Y),D.aZJ,w,w,w,w)),1),A.at,B.E(B.bG(D.fC7,new C.cHo(d),B.bo(A.bz,w,w,w,w,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.N,0,A.p),A.f,w,A.x4,new B.o(D.adw,w,u,v,D.cYT,w,A.n),w,w,w,L.Zx,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1671}
C.cHn.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cHo.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cHq.prototype={
$0(){return J.nv(this.a.d,new C.cHm(this.b))},
$S:0}
C.cHm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHl.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.Xy,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bPM,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.ap7,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRL,t,t,t),A.bC,D.fC3],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dk1[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axC(u[1],u[2],u[3],new C.cHj(v,d),!1,t))}q.push(A.am)
q.push(D.bqu)
q.push(A.am)
q.push(new C.axC(A.e9,"Delete book","Remove it from this device",new C.cHk(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.F,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.adw,t,r,s,t,t,A.n),t,t,t,A.tR,E.Za,t,t,t),!0,!1,A.af,!0,!0)},
$S:24}
C.cHj.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cHk.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cHs.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aHx,12)],x.V)
return B.dX(B.eJ(A.A,e,B.p(w,B.bv(B.n(4),new B.a7(62,95.81818181818181,B.eQ(A.A,F.ao9(d),A.f,A.dv),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cHr.prototype={
$0(){return this.a.c3K()},
$S:0}
C.cHi.prototype={
$0(){return this.a.aYq(0,this.b)},
$S:0}
C.cHh.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
C.cHg.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
C.cHD.prototype={
$2(d,e){var w=this.a
return w.bCG(J.q(w.d,e))},
$S:41}
C.cGK.prototype={
$0(){var w=this.a
if(w.c!=null)w.AL()},
$S:0}
C.cGJ.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0q("Page "+(v.length+1),"",""))},
$S:0}
C.cGM.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cGU.prototype={
$0(){},
$S:0}
C.cGV.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cGN.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cL.gct().aK(this.c)},
$S:0}
C.cGL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cGP.prototype={
$0(){return this.a.Qq(this.b)},
$S:0}
C.cGQ.prototype={
$0(){return this.a.Qq(this.b)},
$S:0}
C.cGR.prototype={
$0(){var w=this.a
w.m(new C.cGO(this.b))
w.E1()},
$S:0}
C.cGO.prototype={
$0(){return this.a.c=""},
$S:0}
C.cGT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cGS(w,d))
w.E1()},
$S:z+51}
C.cGS.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cH_.prototype={
$2(d,e){if(d)this.a.AL()},
$S:122}
C.cGW.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AL(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.f0H)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cGX.prototype={
$0(){return this.a.aXn(this.b,-1)},
$S:0}
C.cGY.prototype={
$0(){return this.a.aXn(this.b,1)},
$S:0}
C.cGZ.prototype={
$0(){return this.a.c52(0,this.b)},
$S:0}
C.fDe.prototype={
$1(d){return C.hlq()},
$S:45}
C.fDf.prototype={
$1(d){return null},
$S:30}
C.fkw.prototype={
$1(d){return null},
$S:30}
C.fEd.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:315}
C.fEc.prototype={
$2(d,e){return A.o.aM(e.length,d.length)},
$S:249}
C.fEj.prototype={
$1(d){var w=this.a
return C.h3O(d)===w||C.hpZ(d)===w},
$S:z+4}
C.fjz.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:79}
C.cab.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDc.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fDd.prototype={
$1(d){return C.fFX(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fy5.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xW,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fwL,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GJ,D.fqX,new C.fy3(d),B.bo(A.c0,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.R,B.et(A.w4,D.fy0,new C.fy4(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x2,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fy3.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fy4.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fy6.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,D.fn8,w,w,!0,w,w,new C.fy1(d),w,w),B.bG(D.fEp,new C.fy2(d),w)],x.p),w,w,w,D.fGj,w,w,w,w,D.fn1,w)},
$S:21}
C.fy1.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fy2.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ec8.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ec6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ec7.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ec9.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eca.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fEi.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:79}
C.fEe.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bj(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fEg.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fez,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:150}
C.fEh.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i4,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dX(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i4,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fEf.prototype={
$2$female$size(d,e){var w=null,v=d?D.aft:this.a,u=B.I(A.i4,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adM,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fPT.prototype={
$1(d){return new C.adl(this.a,this.b,null)},
$S:z+108}
C.dZM.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bna:A.LD,q=B.I(D.ji.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c0.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.anS,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.ji.j(0.35),A.en,10)],x.V),D.bZv,A.n),t,t,t,t,A.xN,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(I.Zm,B.x(B.a([p,A.aB,B.B(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.ji,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fdP,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aP8,new C.dZL(w,this.c),v,D.aiF,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mf,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.dZL.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acK(w,new C.dZK(this.b,w),null)},
$S:z+72}
C.dZK.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fy9.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fya.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xW,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fAc,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GJ,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fy7(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.et(A.ob,D.Uj,new C.fy8(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x2,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fy7.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fy8.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fyd.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fye.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xW,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fo8,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GJ,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyb(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.et(A.ob,D.Uj,new C.fyc(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x2,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fyb.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyc.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fyh.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fyi.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xW,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fuz,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GJ,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyf(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.et(A.ob,D.Uj,new C.fyg(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x2,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fyf.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyg.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fRl.prototype={
$1(d){return D.h6Z},
$S:z+74}
C.ehn.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.beP:A.LD,s=B.I(A.ay.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bS5,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c0.j(0.35),A.en,10)],x.V),D.apc,A.n),v,v,v,v,A.xN,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(I.Zm,B.x(B.a([r,A.aB,B.B(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lz,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bC,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fbj,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aP8,new C.ehm(this.b),19,D.aiF,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mf,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.ehm.prototype={
$2(d,e){var w=D.R2[e]
return new C.af4(w,new C.ehl(this.a,w),null)},
$S:z+75}
C.ehl.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fG0.prototype={
$0(){return B.h2K(C.hZk(this.a))},
$S:291}
C.fG_.prototype={
$0(){var w=C.h46(this.a)
return"data:image/png;base64,"+A.cL.gct().aK(w)},
$S:22}
C.fhF.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1P(this.a,C.fC(4291404327),v)},
$S:664}
C.fRw.prototype={
$1(d){return new C.VN(this.a,null)},
$S:z+77}
C.ekF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekE())},
$S:31}
C.ekE.prototype={
$0(){},
$S:0}
C.ekG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekD(w,d))},
$S:1676}
C.ekD.prototype={
$0(){return this.a.x=J.eX(A.dD.gaP(this.b))},
$S:0}
C.ekH.prototype={
$1(d){},
$S:30}
C.ekh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ekd.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eko.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ekp.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eqi)},
$S:0}
C.ekq.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekj.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c9)},
$S:0}
C.ekk.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ekl.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.ekm.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekn.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.il)}},
$S:8}
C.eki.prototype={
$0(){var w=this.a,v=w.z,u=C.fGE(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cIJ(C.fGE(t))},
$S:0}
C.ekf.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ekg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekw.prototype={
$0(){return B.a5(this.a,!1).ld()},
$S:0}
C.ekx.prototype={
$0(){var w=this.a
return w.m(new C.ekv(w))},
$S:0}
C.ekv.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eky.prototype={
$0(){var w=this.a
return w.m(new C.eku(w,this.b))},
$S:0}
C.eku.prototype={
$0(){var w=this.b.b
this.a.e.saW(0,w)
return w},
$S:0}
C.ekz.prototype={
$1(d){var w=this.a
return w.m(new C.ekt(w))},
$S:9}
C.ekt.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ekA.prototype={
$1(d){var w=this.a
return w.m(new C.eks(w))},
$S:9}
C.eks.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ekB.prototype={
$0(){var w=this.a
return w.m(new C.ekr(w,this.b))},
$S:0}
C.ekr.prototype={
$0(){var w=this.b
this.a.f.saW(0,w)
return w},
$S:0}
C.ekC.prototype={
$1(d){return this.a.ZO()},
$S:2}
C.eke.prototype={
$0(){return this.a.c8t(this.b)},
$S:0}
C.cdS.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:333}
C.cdQ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cdR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFB.prototype={
bli(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bPd(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cFe($.qW().jI(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mK(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bli(d,e)},
$S:1677}
C.fDT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDV.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.ds(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:79}
C.fDU.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fZ(t,t,t,t,B.d0(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qy,A.c6,t,A.dO,A.c3)
v=this.a
w.uE(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fhf.prototype={
$1(d){var w=A.a.fI(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.fhg(),B.S(w).k("a_<1>")).gM(0)},
$S:254}
C.fhg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhd.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.fhe.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.cdT.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAe()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h3N(i,new B.H(!0,h,a6,k,a6,a6,q,A.cO,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h0A(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gcgE(),"\n\n")
d=B.fZ(a6,a6,a6,a6,B.d0(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aed(k,q,1.28),j),A.qy,A.c6,a6,A.dO,A.c3)
d.uE(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h3N(i,new B.H(!0,h,a6,k,a6,a6,q,A.cO,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h0A(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aed(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bg,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qy,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAd(s,j))
i.push(new B.a7(s,a6,B.x(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:462}
C.cdU.prototype={
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
n=o.gaAe()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h3N(f,new B.H(!0,e,a5,i,a5,a5,h,A.cO,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h0A(g.length===0?B.a([a6],n):g,l))break}a1=o.aed(i,h,1.28)
a2=new C.cdV(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.J4,new B.a7(v,a5,a4.f,a5),A.J4,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.byG,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bg,new B.y(l[2+a3],a5,a1,a5,A.qy,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAd(r,g))
f.push(new B.a7(r,a5,B.x(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:153}
C.cdV.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qy,w,w),w)},
$S:1678}
C.fRz.prototype={
$1(d){return new C.VQ(this.a,this.b,null)},
$S:z+79}
C.elR.prototype={
$1(d){return d.lI()},
$S:1679}
C.elS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elQ(w,d))},
$S:1680}
C.elQ.prototype={
$0(){var w=this.b
return this.a.d=w.gfz(w)},
$S:0}
C.elE.prototype={
$0(){return this.a.y=!0},
$S:0}
C.elF.prototype={
$0(){return this.a.y=!1},
$S:0}
C.elL.prototype={
$0(){return B.a5(this.a,!1).eF()},
$S:0}
C.elM.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bE,A.q,2.5)
return B.aC(w,B.p(w,B.b3(w,w,w,new C.bbW(u,v.gaxi(),w),A.f6),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.elJ(v),new C.elK(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a6)},
$S:36}
C.elJ.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:261}
C.elK.prototype={
$1(d){var w=this.a
w.m(new C.elG(w,d,this.b,this.c))},
$S:220}
C.elG.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaxi()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.elN.prototype={
$1(d){var w=this.a
return w.m(new C.elI(w,this.b))},
$S:9}
C.elI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.elO.prototype={
$1(d){var w=this.a
return w.m(new C.elH(w,d))},
$S:6}
C.elH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.elP.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fRP.prototype={
$1(d){return D.h9M},
$S:z+83}
C.eVr.prototype={
$1(d){return this.a.Ys()},
$S:8}
C.eUj.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cL.gct().aK(v)},
$S:0}
C.eUH.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eUR.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eU2.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eU3.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eU0.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eU1.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eUA.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eUB(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jA(B.rE(p>0.2?C.fWj(q,B.a58(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a58(12,12,A.x)
p.push(B.jA(B.de(B.rE(C.fWj(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b2
if(r!=null&&s.b1>0)p.push(B.en(u,B.b0(r).j(s.b1),!0))
r=s.bb
if(r!=null&&s.bL>0){r=B.b0(r).j(s.bL)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bU(D.aXO,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aF
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bU(D.aXz,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aJ
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a9(A.b1,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aJ)],x.O),D.cXv,u),A.n),A.bf))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a9(A.b1,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.d7v,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.en(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bU(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d4z,u),A.n),A.bf))
s=s.aA
if(s>0)p.push(B.b3(u,u,u,new C.bfu(s,u),A.ax))
return new B.an(A.W,u,A.b2,A.r,p,u)},
$S:64}
C.eUB.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fQ(r.b,A.A,q,q,A.cg,A.bW,!0,q,!1,q,q),o=r.a,n=o.aX_(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aI
u=v-1
t=o.bF
s=o.c4?-1:1
return B.dX(B.ef(A.A,B.eJ(A.A,l,B.fw(A.A,new B.Dp(new B.yY(q,q,n,A.Az),p,q),q,B.vO(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:484}
C.eUN.prototype={
$0(){return this.a.m(new C.eUM(this.b,this.c))},
$S:0}
C.eUM.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eUO.prototype={
$1(d){return this.a.m(new C.eUL(this.b,d))},
$S:6}
C.eUL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eUQ.prototype={
$0(){return this.a.m(new C.eUP(this.b,this.c))},
$S:0}
C.eUP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTT.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eTU.prototype={
$1(d){var w=this.a
return w.m(w.gcyP())},
$S:2}
C.eTV.prototype={
$1(d){return this.a.m(new C.eTS())},
$S:2}
C.eTS.prototype={
$0(){},
$S:0}
C.eTW.prototype={
$0(){var w=this.a
return w.m(new C.eTR(w,this.b))},
$S:0}
C.eTR.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eTY.prototype={
$2(d,e){return A.at},
$S:37}
C.eTX.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bD
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bd,new B.o(w,w,q,s,w,new B.a9(A.b1,A.b5,A.x,r,w,w),A.n),A.hB,w,94,w,w,w,w,70)
return B.aC(w,new B.a7(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eTQ(u,v),w,w,w,w,w,w,!1,A.a6)},
$S:77}
C.eTQ.prototype={
$0(){var w=this.a
return w.m(new C.eTN(w,this.b))},
$S:0}
C.eTN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eTZ.prototype={
$1(d){var w=this.a
return w.m(new C.eTP(w,d))},
$S:9}
C.eTP.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eU_.prototype={
$1(d){var w=this.a
return w.m(new C.eTO(w,d))},
$S:9}
C.eTO.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eVg.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:33}
C.eVn.prototype={
$1(d){var w=this.a
return w.m(new C.eVo(w,d))},
$S:29}
C.eVo.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eVp.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eVh.prototype={
$0(){var w=this.a
return w.m(new C.eVf(w,this.b))},
$S:0}
C.eVf.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eVi.prototype={
$0(){var w=this.a
return w.m(new C.eVe(w,this.b))},
$S:0}
C.eVe.prototype={
$0(){var w,v=this.b.length,u=J.e5(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eVj.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eVd(v,w.b,w.c,w.d))},
$S:0}
C.eVd.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eVk.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grI(v))},
$S:0}
C.eVl.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eVm.prototype={
$0(){var w=this.a
return w.m(new C.eVc(w))},
$S:0}
C.eVc.prototype={
$0(){var w=this.a.db
return A.d.h7(w,0,w.length,0)},
$S:0}
C.eV_.prototype={
$1(d){return d.a===this.a.dy},
$S:208}
C.eV0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.axj[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aS(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.axm(new B.nb(new B.bn(n,n,n,n),A.aq,new B.kS(new B.o(j,j,j,j,j,new B.a9(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.b_6(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eUZ(r,v),2,i))}return B.bT(A.bA,h,A.bq,7,7)},
$S:169}
C.eUZ.prototype={
$0(){var w=this.b
return w.m(new C.eUU(this.a,w))},
$S:0}
C.eUU.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eV1.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:213}
C.eV4.prototype={
$0(){var w=this.a
return w.m(new C.eUY(w))},
$S:0}
C.eUY.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eV5.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eV6.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eV7.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eV8.prototype={
$0(){var w=this.a
return w.m(new C.eUX(w))},
$S:0}
C.eUX.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eV9.prototype={
$0(){var w=this.a
return w.m(new C.eUW(w))},
$S:0}
C.eUW.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eVa.prototype={
$0(){var w=this.b
return w.m(new C.eUV(this.a,w))},
$S:0}
C.eUV.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eVb.prototype={
$1(d){return this.a.fx=d},
$S:213}
C.eV2.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eV3.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eUE.prototype={
$0(){var w=this.a
return w.m(new C.eUD(w))},
$S:0}
C.eUD.prototype={
$0(){var w=this.a
w.p4=null
w.b3e()},
$S:0}
C.eUF.prototype={
$0(){var w=this.a
return w.m(new C.eUC(w,this.b))},
$S:0}
C.eUC.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eUG.prototype={
$0(){var w=this.a
return w.m(w.gcpa())},
$S:0}
C.eUw.prototype={
$0(){var w=this.a
return w.m(new C.eUv(w))},
$S:0}
C.eUv.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eUx.prototype={
$0(){var w=this.a
return w.m(new C.eUu(w))},
$S:0}
C.eUu.prototype={
$0(){var w=this.a
w.aB=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eUy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d4Y[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aS(9,9)
m.push(v.axm(new B.nb(new B.bn(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dp(new B.yY(o,o,v.aX_(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Az),B.fQ(u,A.A,140,o,A.cg,A.bW,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eUt(v,s),3,n))}return B.bT(A.bA,m,A.bq,10,8)},
$S:169}
C.eUt.prototype={
$0(){var w=this.a
return w.m(new C.eUs(w,this.b))},
$S:0}
C.eUs.prototype={
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
C.eUa.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eUb.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eUc.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eUd.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eUe.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eUf.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eUg.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eUh.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eUi.prototype={
$1(d){return this.a.aJ=d},
$S:6}
C.eTw.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eTx.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eTy.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eTz.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eTA.prototype={
$0(){var w=this.a
return w.m(new C.eTv(w))},
$S:0}
C.eTv.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eTB.prototype={
$1(d){return this.a.b2=d},
$S:213}
C.eTC.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eU4.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eU5.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eU6.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eU7.prototype={
$1(d){return this.a.bb=d},
$S:213}
C.eU8.prototype={
$1(d){return this.a.bL=d},
$S:6}
C.eTG.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.eTH.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eTI.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.eTJ.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.eTK.prototype={
$0(){var w=this.a
return w.m(new C.eTF(w))},
$S:0}
C.eTF.prototype={
$0(){var w=this.a
return w.c6=A.k.E(w.c6+90+180,360)-180},
$S:0}
C.eTL.prototype={
$0(){var w=this.a
return w.m(new C.eTE(w))},
$S:0}
C.eTE.prototype={
$0(){var w=this.a
return w.c4=!w.c4},
$S:0}
C.eTM.prototype={
$0(){var w=this.a
return w.m(new C.eTD(w))},
$S:0}
C.eTD.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eUz.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.idF(v,w.p4)},
$S:0}
C.eUr.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bnu:B.fQ(v,A.A,w,w,A.cg,A.bW,!1,w,!1,w,w)
return C.fE0(d.length===0?"rounded":d,u,e)},
$S:130}
C.eUn.prototype={
$0(){var w=this.a
return w.m(new C.eUm(w))},
$S:0}
C.eUm.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eUo.prototype={
$0(){var w=this.b
return w.m(new C.eUl(this.a,w))},
$S:0}
C.eUl.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eUp.prototype={
$0(){var w=this.b
return w.m(new C.eUk(this.a,w))},
$S:0}
C.eUk.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eUq.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eUK.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ey(n.ciz(),n.r))
l.push(new C.IN(n.cvM(),!1,!1,t))
o=B.bW(0,B.bv(o,new B.ey(new B.an(A.W,t,A.b2,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aC(A.c8,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eUJ(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a6),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:204}
C.eUJ.prototype={
$1(d){var w=this.a
return w.m(new C.eUI(w,d,this.b,this.c))},
$S:18}
C.eUI.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eUT.prototype={
$0(){var w=this.a
return w.m(new C.eUS(w,this.b))},
$S:0}
C.eUS.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eU9.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).ld()},
$S:0}
C.eVq.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.aZP(),B.E(B.av(w.b1M(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aQ4(),1),w.aMh()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.aZP(),new B.D(A.hC,B.av(s.b1M(u),t,t,t),t),B.E(s.aQ4(),1),s.aMh()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:763}
C.fBh.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.es(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bAy(),null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cR,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.P)},
$S:z+98}
C.fBg.prototype={
$3(d,e,f){var w=this,v=C.bAy(),u=w.b?A.H:A.cx,t=w.c?A.cF:A.bo
return C.es(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bh,4280172719,2,d,0,w.f,w.e,D.cn,D.cR,0.82,0.09,w.a)},
$S:z+28}
C.cff.prototype={
$1(d){return B.u(d)},
$S:17}
C.fIY.prototype={
$0(){return this.a},
$S:z+15}
C.foX.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.foY.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fJ_.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fJ2.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fJ3.prototype={
$0(){return A.d.gI(D.we)},
$S:z+33}
C.fIW.prototype={
$1(d){return d.a},
$S:z+16}
C.fIZ.prototype={
$1(d){return d.a},
$S:z+16}
C.fGW.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fGX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGY.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fBl.prototype={
$0(){return C.cB()},
$S:22}
C.fBo.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.es(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bh,4280172719,2,d,s,0,"",t,D.cR,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.df,!1,null,0,"","",A.bo,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.df,!1,null,0,"",j,A.bo,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.df,!1,null,0,j,k,A.bo,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bo,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bo,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.df,!1,k,l,"",m,A.bo,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,null,0,"",k,A.bo,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.df,!1,j,k,"",l,A.bo,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,k,0,l,m,A.bo,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,k,l,m,"",n,A.bo,A.a7)},
$S:z+35}
C.fBn.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.es(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.f5,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fBm.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.es(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bh,4280172719,2,"",t,0,"",u,D.lA,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qn,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fBk.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fDM.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hms.ca(0,A.a.i(s.w).toLowerCase(),new C.fDK(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ca(0,s.r,new C.fDL(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bw(t.e,new B.bou(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fDK.prototype={
$0(){return F.aNH(this.a.w)},
$S:198}
C.fDL.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bzs("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ie(2,w,A.ch,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:198}
C.fha.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fhb.prototype={
$1(d){return d.a},
$S:z+18}
C.fhc.prototype={
$1(d){return d.b},
$S:z+19}
C.fS0.prototype={
$1(d){return D.ha2},
$S:z+41}
C.f0E.prototype={
$0(){return this.a.x=C.hR_(this.b,this.c.b)},
$S:0}
C.f0F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f0C.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:410}
C.f0D.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:410}
C.f0B.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.aw,null,new C.f0w(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jS,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b6(s,7)
if(r.length===0){n.m(new C.f0x(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hsh(o,m.cJw(q,r)),$async$$0)
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
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f0A(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b69,A.f,p,p,D.b1b,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ch:D.Cm,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fE0(v,i.b3R(h),u),p)))}t=B.m4(1,m,4,10,10,p,A.dT,!0)
if(!l)return B.bm(!0,new B.D(A8.xT,t,p),!0,!1,A.af,!0,!0)
s=new C.f0z(i,d)
m=B.aI(d,A.bY,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.H2[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cc(B.x(B.a([D.ft0,A.R,t,A.dZ,D.eRh,A.au,D.fDL,A.R,B.m4(1.15,l,3,10,10,p,A.dT,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A8.xT,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:24}
C.f0A.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dn
return B.aC(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hD,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0v(this.b,d),w,w,w,w,w,w,!1,A.a6)},
$S:1685}
C.f0v.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.f0z.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bM:A.bD
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bv(w,d.length===0?B.p(v,D.aom,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Nu(u.FC(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aC(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bM:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0u(this.b,d),v,v,v,v,v,v,!1,A.a6)},
$S:130}
C.f0u.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f0x.prototype={
$0(){var w=this.a
return w.w=w.w.FC("")},
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
w.cy=B.u(this.b)},
$S:0}
C.f0S.prototype={
$0(){return this.a.f.fO()},
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
return w.w=w.w.FC("")},
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
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bOH(D.a3f[v]),null))
return B.bT(A.bA,t,A.bq,8,8)},
$S:169}
C.f0V.prototype={
$1(d){var w=this.a
return w.m(new C.f0I(w,d))},
$S:9}
C.f0I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f0s.prototype={
$0(){var w=this.a
return w.m(new C.f0t(w,this.b,this.c))},
$S:0}
C.f0t.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.f0H.prototype={
$0(){var w=this.a
return w.m(new C.f0G(w,this.b))},
$S:0}
C.f0G.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fS_.prototype={
$1(d){return new C.a0p(this.a,this.b,null)},
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
w.r=this.b===D.aGX?"The text already fits inside its frame.":"The text is already at its limit."},
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
w.r=B.u(this.b)},
$S:0}
C.f0j.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hi(A.bw,w.length),A.aN))},
$S:0}
C.fob.prototype={
$1(d){return d.a===this.a},
$S:208}
C.egN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaxn(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cRy:D.d7f
t=D.xz.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xz.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bW(0,B.b3(q,q,q,new C.bhH(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bW(0,B.bPu(B.eJ(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a3,A.a8,A.x,B.a([A.K,D.bd8.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.x(B.a([B.X(p.a.c?A.e8:A.lY,D.xz,q,q,q,20),A.au,B.eQ(A.A,B.nT(A.jA,D.fmw,new C.egM()),A.f,A.e_)],r),A.m,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fja,A.f,q,q,new B.o(D.xz,q,q,B.n(6),q,q,A.n),q,q,q,q,M.ajk,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.az,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.egM.prototype={
$1(d){return D.bXJ.aw(0,d)},
$S:66}
C.fJ4.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fJ5.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:208}
C.fJ6.prototype={
$2(d,e){return A.o.aM(e.a.length,d.a.length)},
$S:1686}
C.fJ7.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fJ0.prototype={
$1(d){return d.a},
$S:z+18}
C.fJ1.prototype={
$1(d){return d.b},
$S:z+19}
C.fRd.prototype={
$1(d){return new C.ZM(this.a,this.b,null)},
$S:z+44}
C.dk6.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dk7.prototype={
$1(d){return d.a===this.a.gais()},
$S:z+10}
C.dk8.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dkb.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dkc.prototype={
$0(){var w=this.a
return w.m(new C.dka(w,this.b))},
$S:0}
C.dka.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dkd.prototype={
$1(d){var w=this.a
return w.m(new C.dk9(w,d))},
$S:9}
C.dk9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.egL.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.fp(w,this.a)
return B.d9(w,0,B.dG(e,"count",x.S),B.S(w).c).dJ(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.fdH.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.es(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f5,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fdJ.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.es(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cO,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bh,4280172719,2,d,l,0,"",D.mL,D.cR,g,e,f)},
$S:z+46}
C.fdI.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wA(0,"twinkle")
w=t===D.bh?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mL,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fdG.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fCs.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fCt.prototype={
$0(){return A.d.gI(D.Hb)},
$S:z+49}
C.fCu.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ffD.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fIx.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bh,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bh,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIy.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bh,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bh,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bh,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fIz.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bh,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jR,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jR,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fIK.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jR,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jR,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jQ,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bh,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fIP.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jQ,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bh,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bh,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIQ.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jR,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bh,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fIR.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cQx[w]
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.bh,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fIS.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mo,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.CY,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fIT.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bh,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jQ,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIU.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bh,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jR,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIV.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jR,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bh,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bh,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIA.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jQ,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jQ,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fIB.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jQ,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jQ,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jQ,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fIC.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bh,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bh,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jR,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jQ,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fID.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bh,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jQ,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jQ,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fIE.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.l9,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.l9,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.l9,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.l9,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.l9,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fIF.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jR,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fIG.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mo,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.CY,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bh,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fIH.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bo,A.aD,s,A.bi,null,D.fs,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bh,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bh,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fII.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bh,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fIJ.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j2
$.j2=t+1
t=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bo,A.aD,r,A.bi,null,D.bh,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ks
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.aq(A.d8,A.cl,w/2).l()
t=Date.now()
s=$.j2
$.j2=s+1
u=new C.eM("design_"+(""+1000*t+"_"+s),D.f5,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bo,A.aD,r,A.bi,null,D.bh,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bh,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jQ,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fIL.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jR,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jR,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jR,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jR,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bh,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eN,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIM.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bh,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eN,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eN,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eN,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jR,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fIN.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bh,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bh,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bh,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.eN,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fIO.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jR,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jR,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bh,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fAi.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fAj.prototype={
$0(){return A.d.gI($.bEa())},
$S:z+52}
C.fnK.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fnJ.prototype={
$1(d){return C.hYg(d,this.a,this.b)},
$S:z+53}
C.fJd.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vO(1.0375,1.01875,1)
return new B.fT(v,u,new C.aSI(B.hO0(A.v6,C.hYj(w.c,w.d,v,u),t)))},
$S:409}
C.dVw.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dVv.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bU(A.Ke,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jA(new B.an(A.W,w,A.b2,A.r,B.a([t,new B.ey(B.b3(w,w,w,new C.beA(u.a,r,q,r),A.ax),w),B.av(new B.jN(r,new C.dVu(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:359}
C.dVu.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ey.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.i_(B.fQ(i,A.A,r,r,A.cg,A.bW,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mq(e*0.8)),A.a5),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.brc(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.de(B.dX(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKQ(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.N,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.de(B.ef(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.m,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f_r.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:66}
C.c9N.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bM:A.bD
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hN.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bv(B.n(12),d,A.aq),v,v,A.bd,new B.o(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v)
return B.aC(v,new B.a7(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bM:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a6)},
$S:1688}
C.c9O.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FC(""))},
$S:0}
C.c9P.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Nu(v.FC(u),!0,!1,null),!0,null),d.b,new C.c9Q(w,this.c,d),v.a===u)},
$S:z+54}
C.c9Q.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hsh(u.b,t.c.FC(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPD.prototype={
$1(d){return new C.Zk(this.a,null)},
$S:z+55}
C.d9i.prototype={
$0(){var w=this.a
w.d=w.gvG().bbR("data:"+this.b+";base64,"+A.cL.gct().aK(this.c));++w.r},
$S:0}
C.d9n.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d9o.prototype={
$0(){var w=this.a
return w.m(new C.d9m(w))},
$S:0}
C.d9m.prototype={
$0(){return this.a.r++},
$S:0}
C.d9p.prototype={
$1(d){var w=this.a
return w.m(new C.d9l(w,d))},
$S:2}
C.d9l.prototype={
$0(){var w=this.a
return w.d=w.gvG().aDL(this.b)},
$S:0}
C.d9q.prototype={
$0(){var w=this.a
return w.m(new C.d9k(w))},
$S:0}
C.d9k.prototype={
$0(){var w=this.a
return w.d=w.gvG().bbR("")},
$S:0}
C.d9r.prototype={
$1(d){var w=this.a
return w.m(new C.d9j(w,d))},
$S:2}
C.d9j.prototype={
$0(){var w=this.a
return w.d=w.gvG().bbY(this.b)},
$S:0}
C.d9s.prototype={
$0(){var w=this.a
w=w.gvG().bbY(w.gaxo().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fPC.prototype={
$1(d){var w={}
w.a=this.a
return new B.e_(new C.fPB(w),null)},
$S:20}
C.fPB.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bY,x.w).w.a.b*0.85),B.cc(B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fAQ,A.au,D.fB5,A.aB,new C.b_3(v.a,new C.fPA(v,e,d),!0,w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1K,w,w,w,w,A.MD,w,w,w)},
$S:163}
C.fPA.prototype={
$1(d){this.b.$1(new C.fPz(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fPz.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fRZ.prototype={
$1(d){return D.h4Z},
$S:z+57}
C.dg5.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dg6.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.dg7.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fFU.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:66}
C.d9_.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cW(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cW(w,q+p,w,q+p*1.2))
u.F(new B.D7(B.bV(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aR(u,v.d)
s.aR(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.v(w,o),2.2,p)},
$S:668}
C.fFY.prototype={
$2(d,e){return A.k.aM(d.c,e.c)},
$S:z+58}
C.fyl.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fym.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xW,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fjr,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GJ,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyj(d),B.bo(A.c0,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.et(A.ob,D.Uj,new C.fyk(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x2,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fyj.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyk.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cfd.prototype={
$1(d){return d.hK()},
$S:z+59}
C.cfe.prototype={
$1(d){return d.ah()},
$S:z+60}
C.cfc.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdN(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hU5(b2.h(0,"type"))
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
n=A.aza[A.o.D(b4,0,8)]
m=D.cTs[A.o.D(w,0,1)]
l=C.hXJ(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avP[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i_y(b2.h(0,"shape"))
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
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hny(b2.h(0,"textTransition"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.es(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cf2.prototype={
$1(d){return d.hK()},
$S:z+62}
C.cf3.prototype={
$1(d){return d.ah()},
$S:z+63}
C.cf_.prototype={
$1(d){return B.u(d)},
$S:17}
C.cf0.prototype={
$1(d){return B.u(d)},
$S:17}
C.cf1.prototype={
$1(d){return C.hee(B.a2(d,x.N,x.z))},
$S:z+64}
C.cfu.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cfv.prototype={
$0(){return A.d.gI(D.a2U)},
$S:z+66}
C.cfp.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hK())},
$S:z+7}
C.cfo.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cfk.prototype={
$1(d){return new B.M(d,new C.cfl(),B.S(d).k("M<1,T>")).ff(0,new C.cfm())},
$S:z+69}
C.cfl.prototype={
$1(d){return d.f},
$S:z+70}
C.cfm.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:669}
C.cfn.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hJQ(d)},
$S:z+71}
C.cfq.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cfr.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cfs.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fGw.prototype={
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
C.fGs.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fGt.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fGu.prototype={
$2(d,e){var w
if(d.b===D.cR){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fGv.prototype={
$2(d,e){return d.b===D.f5&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cf8.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i8j(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cf7(),b5.k("J.E"),x.N)
w=B.dd(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pR.az(0,A.k.D(b1,0,1))
u=new C.cf9()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cfa(a9,b7.d)
r=new C.cfb(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jF.az(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kI(A.k.D(1-k,0,1),B.dX(B.ef(A.A,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f5){a4=i.hK()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lA&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b2,A.r,B.a([new B.kI(A.k.D(o,0,1),r.$1(l),a8),new B.kI(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wj(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.mL
p.push(s.$5(i.c,i.d,i.e,i.f,C.hpO(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:401}
C.cf7.prototype={
$1(d){return d.a},
$S:z+22}
C.cf9.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cfa.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cfb.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7L(v,C.b1a(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dHK.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ef(new B.dc(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cfh.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cfi.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fJk.prototype={
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
C.fIr.prototype={
$1(d){return new C.adr(this.a,this.b,null)},
$S:z+78}
C.etd.prototype={
$0(){return this.a.PS(this.b,C.ibF(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ete.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PS(this.b,C.ibH(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.etf.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PS(this.b,C.ibG(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.etg.prototype={
$0(){Y.hpy()
B.a5(this.a,!1).O(null)},
$S:0}
C.cf6.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cf5.prototype={
$2(d,e){var w,v=this,u=null,t=B.dO(d,A.nI),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.kA(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bW:A.dv
return B.fQ(t,A.A,o,new C.cf4(),A.cg,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.cf4.prototype={
$3(d,e,f){return D.ack},
$S:234}
C.fGr.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.d9(r,0,B.dG(6,"count",x.S),B.S(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fGq(e.b,e.d),u),u.k("ak.E"))
return B.bv(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1695}
C.fGq.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b1a(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fqi.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fqg(d))
w=B.aI(d,A.bY,x.w).w
v=B.n(22)
u=B.I(A.bD,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fS,28)],x.V)
s=x.p
return new B.d_(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kj,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zX,q,q,!0,q,q,new C.fqh(p,d),q,B.fz(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Fy,q,new B.b7(B.n(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aw,q,u,v,t,q,A.n),q,q,q,A.fQ,A.FH,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.fqg.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pC())B.a5(w,!0).eF()},
$S:0}
C.fqh.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eF()},
$S:0}
C.f7Z.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.de(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fF(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kb(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fF(r*1.2)
s.kb(r*0.5)
return B.fw(A.A,B.de(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fF(-r*1.4)
return B.fw(A.a8,B.de(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.de(B.ef(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJn(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJn(1-r,t))],x.p),t)
case 16:v=D.b59.az(0,r)
return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.de(B.en(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mO(r*6.28)
s.jR(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eJ(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b2,A.r,B.a([u.c,B.de(u.b,r)],x.p),t),t)}},
$S:62}
C.dTJ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dTI.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dTH.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hpO(v,w,e)},
$S:62}
C.ceZ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a3,A.a8,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.S(v).k("M<1,cL>")
q=B.C(new B.M(v,new C.ceY(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:401}
C.ceY.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7L(m,new C.V0(d,C.b1a(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d6e.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d6d(w))},
$S:11}
C.d6d.prototype={
$0(){return this.a.d++},
$S:0}
C.egt.prototype={
$2(d,e){var w,v=null,u=A.o.am(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aOa.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i82(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fF(Math.sin(t)*0.32)
s.kb(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jR(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dX(B.ef(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.de(B.ef(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:62}
C.eY4.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fH
return w},
$S:1696}
C.fE1.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdB()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.br5(u,t,r),A.ax))
w.push(B.ny(s.d,A.aq,new C.bf6(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bq5(u,q,t,r),A.ax))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b2,A.r,w,r),r),r,r,r)},
$S:242}
C.fta.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:315}
C.ezr.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CU(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gan(s)){u=null
w=1
break}u=r.dM(s,new C.ezp(),new C.ezq(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.ezp.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:194}
C.ezq.prototype={
$0(){return J.fs(this.a)},
$S:1699}
C.evP.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evQ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evR.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.exp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exd.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.exe.prototype={
$1(d){return d.hK()},
$S:z+81}
C.evc.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eyx.prototype={
$0(){this.a.tC()},
$S:0}
C.ezn.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oh()
w.K8()},
$S:0}
C.exn.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oh()
w.K8()},
$S:0}
C.eza.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezb.prototype={
$1(d){return d.b===D.cR},
$S:z+4}
C.ezc.prototype={
$1(d){return d.a},
$S:z+22}
C.ezd.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:255}
C.eze.prototype={
$0(){return B.jU(!0,null,!0,!0,null,null,!1)},
$S:673}
C.euB.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezo.prototype={
$0(){},
$S:0}
C.eww.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xx()
w.K8()},
$S:0}
C.euz.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xx()},
$S:0}
C.euA.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xx()},
$S:0}
C.ewT.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ewU.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xx()
w.K8()
w.z="Home"},
$S:0}
C.ewV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewv.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ui,w,w,!0,w,w,new C.ewu(d),w,w)],x.p),w,w,w,D.fCD,w,w,w,w,D.fjT,w)},
$S:21}
C.ewu.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ews.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ui,w,w,!0,w,w,new C.ewr(d),w,w)],x.p),w,w,w,D.fnR,w,w,w,w,D.flB,w)},
$S:21}
C.ewr.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewt.prototype={
$0(){},
$S:0}
C.evL.prototype={
$1(d){return this.a.b07(C.bCa(d))},
$S:z+7}
C.evM.prototype={
$1(d){return this.a.af1(C.bCa(d))},
$S:z+7}
C.ewC.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fCH,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.PA(A.vT,D.axb,"HATI YA KUHOWA","Hati ya mahari",new C.ewx(d),w),A.R,new C.PA(A.hb,D.d5_,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ewy(d),w),A.R,new C.PA(A.i8,D.cRE,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ewz(d),w),A.R,new C.PA(A.hU,D.cPQ,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ewA(d),w)],v)
if(this.a.gabv())A.d.v(u,B.a([A.R,new C.PA(A.j6,D.cAV,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ewB(d),w)],v))
return B.bm(!0,B.cc(B.x(u,A.ai,w,A.e,A.N,0,A.p),A.r,w,A.y,w,E.xW,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:24}
C.ewx.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.ewy.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.ewz.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.ewA.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.ewB.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.ewD.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xx()},
$S:0}
C.euD.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.euE.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ng(r,v.f+1,q);++v.f
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
C.ewO.prototype={
$1(d){return d.b===D.lA},
$S:z+4}
C.ewP.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e_(new C.ewM(w,this.a,v),null)},
$S:20}
C.ewM.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ewN(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bm:A.bL,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bD:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bC,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.ewI(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cm[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhB(t,u.b,p.a===t,i,k,new C.ewJ(v,m),q))}a1=B.bT(A.bA,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ch[w]
s.a=null
t=s.a=r.a
u.push(new C.bhA(t,r.b,p.b===t,k,j,new C.ewK(s,m),q))}return B.bm(!0,B.p(q,B.cc(B.x(B.a([d,A.aR,a0,A.R,a1,A.by,v,A.R,B.bT(A.bA,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.et(D.bTL,D.fF7,new C.ewL(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.Y),D.b_f,q,q,q,q)),q)],e),A.F,q,A.e,A.N,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tR,D.bv6,q,q,q),!0,!1,A.af,!0,!0)},
$S:88}
C.ewN.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ewG(w.a,d,e))
w.b.d4(new C.ewH(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.ewG.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ewH.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ewI.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewJ.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ewK.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.ewL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GG(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.ewF(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewF.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ewR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ewS.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.ewQ(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ng(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xx()},
$S:0}
C.ewQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ex8.prototype={
$1(d){return d.b===D.cR},
$S:z+4}
C.ex9.prototype={
$1(d){return d.w},
$S:z+82}
C.exa.prototype={
$2(d,e){return d>e?d:e},
$S:89}
C.exb.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bm:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bD:A.aL,A.q,1),n=B.aI(d,A.bY,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bNq,A.f,v,v,D.b0C,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.ex5(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.co,B.hN(v,new C.ex6(m,k,w.c,s,w.d,t,r),k.length,A.fD,v,A.ag,new C.ex7(),!0),v)],l),A.F,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tR,A.Zg,v,v,v),!0,!1,A.af,!0,!0)},
$S:24}
C.ex5.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ex7.prototype={
$2(d,e){return A.ac},
$S:37}
C.ex6.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cx
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bQA,q,q,q,new C.ex3(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bxm,n,q),B.aM(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.Y),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aZV),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.ex4(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.ex3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.idO(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oN(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hi(A.bw,o+s.length),A.aN))
l.aj6(k,m)
l.pn()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ex4.prototype={
$1(d){var w=this.a
w.aj6(this.b.a,d)
w.pn()},
$S:2}
C.exc.prototype={
$0(){},
$S:0}
C.ewE.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.euU.prototype={
$0(){},
$S:0}
C.euV.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hr7(this.b,w,!0)
w=this.a
w.r=null
w.xx()},
$S:0}
C.euW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.euX.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.euT(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ng(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xx()},
$S:0}
C.euT.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exi.prototype={
$1(d){return B.oW(new C.exh(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:143}
C.exh.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aj0,B.x(B.a([D.fAe,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.eXD,new C.exg(this.a,this.b),20,A.tT,w,A.ag,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:397}
C.exg.prototype={
$2(d,e){var w=null,v=D.Hb[e],u=C.hJL(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fF,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eRd,A.f,w,w,new B.o(A.dM.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.nl,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.exf(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.exf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cfg(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exj.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xx()},
$S:0}
C.ety.prototype={
$0(){var w,v=this.a,u=v.gqo(),t=C.rx(4294967295,null,0,0,null,C.cB(),D.mK,"","","",D.df),s=this.b
C.cft(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CX){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.euS.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j2
$.j2=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hee(q));++v.f},
$S:0}
C.euQ.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.exr.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.euM.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.d,new C.euL(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.euL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exq.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.T(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.euC.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:255}
C.evd.prototype={
$0(){return B.jU(!0,null,!0,!0,null,null,!1)},
$S:673}
C.ez8.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ez9.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.atl(w).fO()
v=u.Wz(w)
v.stk(B.hi(A.bw,v.a.a.length))},
$S:8}
C.eyy.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xy(v)
if(u!=null&&u.b===D.cR)w.Wz(u).saW(0,u.r)}else w.w=null},
$S:0}
C.etz.prototype={
$0(){var w=C.cB(),v=this.a,u=C.es(A.bi,!1,v.gqo().e.l(),A.aD,"",4280640491,24,A.bo,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bh,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.cR,0.7,0.15,0.2)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.etw.prototype={
$0(){var w=C.cB(),v=this.a,u=C.es(A.bi,!1,4279310375,A.aD,"",v.gqo().c.j(0.25).l(),24,A.bo,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqo().c.l(),2,"",0,0,"",D.cn,D.f5,0.25,0.3,0.3)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.etm.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a7,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lA,0.6,0.2,0.18),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.etj.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c_G],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajJ().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bL7,r,r,r,r,new C.eti(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:24}
C.eti.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.etk.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ah(),null),s=C.es(A.bi,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bh,4280172719,2,t,0,0,"",D.cn,D.a5u,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdu().z,s)
t.r=s.a},
$S:0}
C.euO.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.euP.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.gdu().z,new C.euN(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.euN.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eu0.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cR)s.Q=t.c.l()
else if(w===D.f5){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eu1(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eu1.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eu5.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eu6(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdu()
if(t!=null)v.$1(t)}},
$S:0}
C.eu6.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eu3.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cR){s.Q=t.c
return}w=new C.eu4(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eu4.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f2(w,new C.eu2()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eu2.prototype={
$1(d){return d.b===D.cR},
$S:z+4}
C.eu_.prototype={
$0(){return C.cft(this.b,this.c,this.a.gqo())},
$S:0}
C.ex2.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.ezh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezi.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ezj.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezk.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bg(s,new C.ezg(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSg()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hK()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xx()
t.K8()}},
$S:0}
C.ezg.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eyO.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abz(),s=w.b,r=u.abA(A.fd,A.kz,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aV4(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bLd,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aV4(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.az,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.by,u.aV7(A.fd,d,D.bHi,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bY8(A.aO,d,A.u6,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aV5(d,"Not now"))
return new C.JV(B.x(p,A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eyN.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JV(B.x(B.a([v.abz(),A.O,v.abA(A.aO,D.bGY,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bY,x.w).w.a.b*0.42),B.hN(w,new C.eyL(v,u,d),u.length,w,w,A.ag,new C.eyM(),!0),w),A.aB,v.aV5(d,"Cancel")],x.p),A.ai,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.eyM.prototype={
$2(d,e){return A.R},
$S:37}
C.eyL.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anS,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bXE,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mQ,w,w,w),A.cV,B.d("Updated "+this.a.PT(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyK(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.eyK.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eyH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abz()
t=t.abA(A.aF,A.uf,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JV(B.x(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dW(A.a8V,new C.eyF(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b7(B.n(14),A.Y),new B.az(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.fma,new C.eyG(d),B.bo(A.fd,u,u,u,A.c,u,A.cm,u,new B.b7(B.n(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.eyF.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eyG.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eyJ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abz(),s=w.b,r=u.abA(A.aV,A.e8,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auF("Names",""+w.c),1),A.ab,B.E(u.auF("Fields",""+w.d),1),A.ab,B.E(u.auF("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bo(A.bj,v,v,v,A.c,v,A.xL,v,new B.b7(B.n(14),A.Y),v,v,v)
return new C.JV(B.x(B.a([t,A.O,r,A.aR,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nE,v,v,v),new C.eyI(d),o),A.R,u.aV6(d,"Stay here",!1)],q),A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eyI.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.evH.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.evG.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eyz.prototype={
$1(d){return d.b===D.cR},
$S:z+4}
C.ez7.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_w(A.d.dM(w.d,new C.ez5(v),new C.ez6(v)).hK(),w.f,null)},
$S:z+84}
C.ez5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ez6.prototype={
$0(){return this.a},
$S:z+85}
C.etr.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hw,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bN_,w,w,w,w,new C.etp(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fkc,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOa,w,w,w,w,new C.etq(d),!1,w,w,w,w,w,D.fGk,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.etp.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.etq.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.ets.prototype={
$0(){var w=this.b,v=w.c,u=C.es(A.bi,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a7,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bh,4280172719,2,v,0,0,"",D.cn,D.S9,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.ett.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j2
$.j2=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j2
$.j2=k+1
m.push(new C.eM(""+1000*l+"_"+k,D.S9,0.04,0.06,0.92,0.88,v,24,A.a7,A.bo,A.aD,4279310375,A.bi,u,D.bh,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lJ(""+1000*p+"_"+o,r+n,"",D.qm,4294967295,null,D.df,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.etx.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.ky(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.es(A.bi,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.l8,0.35,0.55,0.62)
A.d.L(u.gdu().z,w)
u.r=w.a},
$S:0}
C.eto.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2W(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.es(A.bi,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.eh(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.l8,s,u,t)
A.d.L(p.gdu().z,q)
A.d.br(p.gdu().z,new C.etn(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i7M(p)}},
$S:0}
C.etn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exo.prototype={
$0(){var w=this.a,v=this.b
w.b2W(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ezf.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.evK.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.br(r.z,new C.evJ())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.evJ.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eu9.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eua.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tC()},
$S:8}
C.etl.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a7,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lA,0.8,0.1,0.1),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.evb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.etu.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdu().z,v)
w.r=v.a},
$S:0}
C.etD.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.etE.prototype={
$0(){var w=this.b.hK(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.es(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdu().z,f)
t.r=f.a},
$S:0}
C.etF.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.etC(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.etC.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etQ.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.etB(v))
if(u>0){A.d.cA(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.etB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etT.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.etU.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.etV.prototype={
$0(){return this.a.as=A.dN},
$S:0}
C.etW.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.etX.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.etY.prototype={
$1(d){return d.b===D.cR},
$S:z+4}
C.etZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.etG.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CZ(w.gqo().c.j(0.18).l(),0.1,u,D.bh,0,2,1,0,0))
u=w.gdu().z
v=C.cB()
A.d.L(u,C.iY(A.bi,!1,w.gqo().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.df,0.9,0.05,0.02))},
$S:0}
C.etH.prototype={
$0(){var w,v=this.a,u=v.gdu().z,t=C.cB()
A.d.L(u,C.CZ(v.gqo().c.j(0.12).l(),0.1,t,D.bh,0,2,1,0,0.9))
t=v.gdu().z
u=C.cB()
w=C.bCT()
A.d.L(t,C.iY(A.L,!1,v.gqo().e.l(),A.aD,12,A.bo,A.a7,0.06,u,"Footer \xb7 "+w,0,D.df,0.9,0.05,0.92))},
$S:0}
C.etI.prototype={
$0(){A.d.L(this.a.gdu().z,C.CZ(1727914055,0.12,C.cB(),D.bh,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.etJ.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdu().z,C.CZ(w,0.08,C.cB(),D.bh,w,2,0.5,0.2,0.4))},
$S:0}
C.etK.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CZ(w.gqo().c.j(0.35).l(),0.12,u,D.CY,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.15,C.cB(),"Important note",0,D.qn,0.5,0.38,0.52))},
$S:0}
C.etL.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CZ(4294507260,0.78,C.cB(),D.bh,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a7,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCT()+"\n\nSubject:\n\nBody text\u2026",0,D.df,0.76,0.12,0.14))},
$S:0}
C.etM.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CZ(4294897802,0.28,C.cB(),D.bh,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4285611794,A.aD,15,A.bo,A.a7,0.24,C.cB(),"Sticky note",0,D.aGM,0.26,0.64,0.14))},
$S:0}
C.etN.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdu().z,C.CZ(4293060848,0.04,C.cB(),D.bh,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdu().z,C.CZ(w,0.04,C.cB(),D.bh,w,2,0.55,0.1,0.48))},
$S:0}
C.etO.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a7,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.I7,0.42,0.06,0.18))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a7,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uw,0.42,0.52,0.18))},
$S:0}
C.etP.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CZ(858088427,0.62,C.cB(),D.bh,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdu().z,C.CZ(856004201,0.62,C.cB(),D.bh,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option A",0,D.df,0.36,0.08,0.2))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option B",0,D.df,0.36,0.56,0.2))},
$S:0}
C.etR.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CZ(4294967295,0.36,C.cB(),D.bh,w,2,0.24,0.38,0.28))
A.d.L(v.gdu().z,C.iY(A.L,!1,w,A.aD,14,A.bo,A.a7,0.12,C.cB(),"[ QR CODE ]",0,D.df,0.24,0.38,0.4))},
$S:0}
C.etS.prototype={
$0(){return C.cft(this.b,D.Sa,this.a.gqo())},
$S:0}
C.eva.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7d.t(0,d),t=this.a
return t.b7Y(d,v===d,A.b_,this.c,new C.ev9(t,u,d,w),u)},
$S:z+25}
C.ev9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o8(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDF(r,new C.ev8(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev8.prototype={
$0(){return this.a.d4(new C.ev7(this.b,this.c))},
$S:0}
C.ev7.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.etv.prototype={
$0(){var w,v=this.a,u=v.gqo(),t=C.rx(4294967295,null,0,0,null,C.cB(),D.mK,"","","",D.df),s=this.b
C.cft(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CX){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eud.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.idR(p,q.d,s,new C.euc(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tC(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euc.prototype={
$1(d){return this.bkJ(d)},
bkJ(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eub(t,d))
w=2
return B.b(t.tC(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eub.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eue.prototype={
$0(){return this.a.bIR()},
$S:0}
C.euf.prototype={
$0(){return this.a.aQh("Class Presentation",!0)},
$S:0}
C.eug.prototype={
$1(d){return this.a.bJN(d.b,this.b,d.a)},
$S:z+88}
C.euR.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bY,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ex1.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aI(d,A.eH,x.w).w.f.d),new B.e_(new C.ex0(this.a,this.b),null),null)},
$S:59}
C.ex0.prototype={
$2(d,e){return B.oW(new C.ex_(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.ex_.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aw:A.c,s=B.I(u?A.bD:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.ais,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zX,v,v,!0,v,v,new C.ewY(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aT2(u,!0,!0,new C.ewZ(p,w.d))],q),e,D.bsY,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kN,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.ewY.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewZ.prototype={
$0(){this.b.$1(new C.ewW())
var w=this.a
if(w.c!=null)w.m(new C.ewX())},
$S:0}
C.ewW.prototype={
$0(){},
$S:0}
C.ewX.prototype={
$0(){},
$S:0}
C.eyA.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.eyB.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.ayR(this.a,null),0.94+w*0.06,null,null),w)},
$S:476}
C.eyC.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.eyD.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.bcX(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:476}
C.eyE.prototype={
$0(){return A.d.c9(this.a.d,0,C.VZ(this.b))},
$S:0}
C.etA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aw.j(0.72)],t):B.a([A.c.j(0.88),A.pE.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a06,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bU(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.u4(A.fx,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.az,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:334}
C.euF.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.euG.prototype={
$1(d){return d.length!==0},
$S:3}
C.euH.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jL
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0C:A.BH}return w},
$S:677}
C.euK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.az(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aw.j(0.78)],s):B.a([A.c.j(0.92),A.mZ.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.ky(v.w)?A.vT:A.q9,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.PT(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PT(v.f)
r=k.bJL(n,A.d.gI(r),t)
return B.p(l,B.bv(j,new B.a7W(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.MA,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o9,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.euI(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.az,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.euJ(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d9,l,l,l,l)},
$S:94}
C.euJ.prototype={
$0(){return this.a.af1(this.b)},
$S:0}
C.euI.prototype={
$0(){return this.a.AQ(this.b,this.c)},
$S:0}
C.ewa.prototype={
$0(){var w=this.a
w.b6A()
w.m(new C.ew9())},
$S:0}
C.ew9.prototype={
$0(){},
$S:0}
C.ewb.prototype={
$1(d){return this.a.aj6(this.b.a,d)},
$S:2}
C.ewc.prototype={
$0(){this.a.d4(new C.ew8(this.b))},
$S:0}
C.ew8.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ewd.prototype={
$0(){this.a.d4(new C.ew7(this.b))},
$S:0}
C.ew7.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.ewe.prototype={
$0(){this.a.d4(new C.ew6(this.b))},
$S:0}
C.ew6.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.ewf.prototype={
$0(){this.a.d4(new C.ew5(this.b))},
$S:0}
C.ew5.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
w.d4(new C.ew4(w,this.b))},
$S:0}
C.ew4.prototype={
$0(){var w=this.b
return w.as=this.a.c3U(w.as)},
$S:0}
C.ewh.prototype={
$0(){return this.a.d4(new C.ew3(this.b))},
$S:0}
C.ew3.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ewi.prototype={
$0(){return this.a.d4(new C.ew2(this.b))},
$S:0}
C.ew2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.evW.prototype={
$0(){return this.a.a23(this.b.a)},
$S:0}
C.evX.prototype={
$0(){this.a.a_A()
return null},
$S:0}
C.evY.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bY,x.w).w.a.a<900)w.afk()
else w.m(new C.evV(w))},
$S:0}
C.evV.prototype={
$0(){return this.a.as=!0},
$S:0}
C.evZ.prototype={
$0(){this.a.d4(new C.evU(this.b))},
$S:0}
C.evU.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ew_.prototype={
$0(){return this.a.d4(new C.evT(this.b))},
$S:0}
C.evT.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ew0.prototype={
$0(){return this.a.d4(new C.evS(this.b))},
$S:0}
C.evS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ew1.prototype={
$0(){return this.a.azL(null)},
$S:0}
C.ev3.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.ev4.prototype={
$0(){this.a.aa4()
return null},
$S:0}
C.ev6.prototype={
$1(d){return this.bkK(d)},
bkK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K_(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.aw,null,new C.euZ(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.ev_(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.ev0(r))
s=s.c.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.ev1(r))
s=s.c.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hsg(q,new C.Ey(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.ev2(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agZ(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.euZ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.edg],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bN7:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.euY(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dg,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.euY.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.ev_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ev0.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ev1.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ev2.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ev5.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zM(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zM(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zM(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agZ(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eik,q,v,u,B.zM(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:133}
C.ezl.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCQ(w,v)}},
$S:0}
C.ezm.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.ewl.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bXy:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aS:A.br
return new B.D(A.fD,B.aC(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bd,new B.o(w,u,u,r,u,q,A.n),A.eJ,u,u,u,A.lT,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ewk(t,d),u,u,u,u,u,u,!1,A.a6),u)},
$S:142}
C.ewk.prototype={
$0(){var w=this.a
return w.m(new C.ewj(w,this.b))},
$S:0}
C.ewj.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ewm.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3q:E.axh
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbNg():t.gbJb()
return B.hx(B.aC(u,B.p(u,D.anl,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a9(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a6),u,s,u,u)},
$S:1707}
C.ewn.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.id6(v,w.a.c)},
$S:0}
C.exK.prototype={
$0(){return this.b.ve(this.a.a)},
$S:0}
C.exL.prototype={
$0(){return this.a.ve(D.mK)},
$S:0}
C.exM.prototype={
$0(){return this.a.ve(D.I5)},
$S:0}
C.exX.prototype={
$0(){return this.a.ve(D.I6)},
$S:0}
C.ey7.prototype={
$0(){return this.a.ve(D.I4)},
$S:0}
C.eyi.prototype={
$0(){return this.a.q9("lab_report")},
$S:0}
C.eyp.prototype={
$0(){return this.a.q9("rubric")},
$S:0}
C.eyq.prototype={
$0(){return this.a.q9("minutes")},
$S:0}
C.eyr.prototype={
$0(){return this.a.q9("agenda")},
$S:0}
C.eys.prototype={
$0(){return this.a.q9("timeline")},
$S:0}
C.eyt.prototype={
$0(){return this.a.q9(this.b.a)},
$S:0}
C.exN.prototype={
$0(){this.a.VI()
return null},
$S:0}
C.exO.prototype={
$0(){this.a.VC()
return null},
$S:0}
C.exP.prototype={
$0(){return this.a.q9("table")},
$S:0}
C.exQ.prototype={
$0(){return this.a.q9("sticky")},
$S:0}
C.exR.prototype={
$0(){return this.a.q9("divider")},
$S:0}
C.exS.prototype={
$0(){return this.a.q9("header_bar")},
$S:0}
C.exT.prototype={
$0(){return this.a.p6(D.bh)},
$S:0}
C.exU.prototype={
$0(){return this.a.p6(D.eN)},
$S:0}
C.exV.prototype={
$0(){return this.a.p6(D.jQ)},
$S:0}
C.exW.prototype={
$0(){return this.a.p6(D.CY)},
$S:0}
C.exY.prototype={
$0(){return this.a.p6(D.jR)},
$S:0}
C.exZ.prototype={
$0(){return this.a.p6(D.l9)},
$S:0}
C.ey_.prototype={
$0(){return this.a.p6(D.fs)},
$S:0}
C.ey0.prototype={
$0(){this.a.Hh()
return null},
$S:0}
C.ey1.prototype={
$0(){this.a.Nm()
return null},
$S:0}
C.ey2.prototype={
$0(){return this.a.q9("quote")},
$S:0}
C.ey3.prototype={
$0(){return this.a.a8c()},
$S:0}
C.ey4.prototype={
$0(){this.a.a_G()
return null},
$S:0}
C.ey5.prototype={
$0(){var w=this.a
return w.m(new C.exA(w))},
$S:0}
C.exA.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ey6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o8(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.exI(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exI.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ey8.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jY()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a7e.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a7e.t(0,q))u.push(B.ao(s,B.p(s,D.Og,A.f,s,s,D.Ed,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fD,B.aC(s,B.hx(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.exH(r,d),s,s,s,s,s,s,!1,A.a6),s)},
$S:z+89}
C.exH.prototype={
$0(){this.a.a8u(this.b)
return null},
$S:0}
C.ey9.prototype={
$0(){this.a.a8t(this.b)
return null},
$S:0}
C.eya.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hJM(d),p=this.a,o=B.n(8),n=p.gdu()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.aZ
v=p.gdu()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rx(4294967295,r,0,0,r,"preview_"+w,D.qm,"","","",D.df)
C.hpb(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hqw(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anT,A.f,r,r,D.Ed,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.io,B.aC(r,B.x(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exG(p,q,d),r,r,r,r,r,r,!1,A.a6),r)},
$S:z+90}
C.exG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdu()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o8(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d4(new C.exw(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exw.prototype={
$0(){return C.hpb(this.a,this.b.a)},
$S:0}
C.exJ.prototype={
bkL(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7d.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o8(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkL(d,e)},
$S:z+91}
C.eyu.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("M<1,t>")
v=B.C(new B.M(d,new C.eyw(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cc(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP)},
$S:z+92}
C.eyw.prototype={
$1(d){var w=this
return w.a.b7Y(d,w.b===d,w.c,w.d,new C.eyv(w.e,d),!D.a7d.t(0,d))},
$S:z+25}
C.eyv.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyb.prototype={
$1(d){this.b.$2(d,new C.exF(this.a,d,this.c))
return null},
$S:z+26}
C.exF.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDF(u,new C.exv(v,this.c,w),w)},
$S:0}
C.exv.prototype={
$0(){return this.a.d4(new C.ext(this.b,this.c))},
$S:0}
C.ext.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eyc.prototype={
$1(d){this.b.$2(d,new C.exE(this.a,d))
return null},
$S:z+26}
C.exE.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fSN(u,new C.exu(v,w),w)},
$S:0}
C.exu.prototype={
$0(){var w=this.a
return w.d4(new C.exs(w,this.b))},
$S:0}
C.exs.prototype={
$0(){return this.a.gdu().r=this.b},
$S:0}
C.eyd.prototype={
$0(){var w=this.a
return w.m(new C.exD(w))},
$S:0}
C.exD.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eye.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCQ(w,v)}},
$S:0}
C.eyf.prototype={
$0(){this.a.I3()
return null},
$S:0}
C.eyg.prototype={
$0(){return this.a.a8c()},
$S:0}
C.eyh.prototype={
$0(){var w=this.a,v=w.jY()
if(v!=null&&v.b===D.cR)w.d4(new C.exC(v))},
$S:0}
C.exC.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eyj.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.eyk.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fc(v,!0)
return null},
$S:0}
C.eyl.prototype={
$0(){this.a.d4(new C.exB(this.b))},
$S:0}
C.exB.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.eym.prototype={
$0(){this.a.d4(new C.exz(this.b))},
$S:0}
C.exz.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.eyn.prototype={
$0(){this.a.d4(new C.exy(this.b))},
$S:0}
C.exy.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.eyo.prototype={
$0(){this.a.d4(new C.exx(this.b))},
$S:0}
C.exx.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eu8.prototype={
$1(d){return this.bkI(d)},
bkI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o8(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d4(new C.eu7(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:193}
C.eu7.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eyR.prototype={
$0(){var w=this.a
return w.d4(new C.eyQ(w,this.b))},
$S:0}
C.eyQ.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eyS.prototype={
$0(){var w=this.a
return w.d4(new C.eyP(w,this.b))},
$S:0}
C.eyP.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.evg.prototype={
$0(){return this.a.d4(new C.evf(this.b))},
$S:0}
C.evf.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.evh.prototype={
$0(){return this.a.d4(new C.eve(this.b))},
$S:0}
C.eve.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.evO.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apA,new C.evN(),w),w.k("ak.E"))
return w},
$S:z+94}
C.evN.prototype={
$1(d){var w=null
return B.zM(B.d(d.b,w,w,w,w,w,w,A.mb,w,w,w),48,d,x.fO)},
$S:z+95}
C.ez3.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:37}
C.ez2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kl()?q:new C.ez0(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.aZ:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cs:A.c
t=B.bW(0,C.hqw(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aC(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nC,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.ajl,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ez1(p,e),q,q,q,q,q,q,!1,A.a6)},
$S:77}
C.ez1.prototype={
$0(){var w=this.a
return w.m(new C.eyX(w,this.b))},
$S:0}
C.eyX.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K8()},
$S:0}
C.ez0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.eyY(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eyZ(q,s))
q.aRL()}else if(r==="del"){q=t.a
q.m(new C.ez_(q,s))
q.aQT()}else if(r==="up")t.a.b38(s,s-1)
else if(r==="down")t.a.b38(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyY.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOM,w,w,w,w,new C.eyT(d),!1,w,w,w,w,w,w,w,D.fl9,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOF,w,w,w,w,new C.eyU(d),!1,w,w,w,w,w,w,w,A.wG,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNX,w,w,w,w,new C.eyV(d),!1,w,w,w,w,w,w,w,D.ftg,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bQ_,w,w,w,w,new C.eyW(d),!1,w,w,w,w,w,w,w,D.fkZ,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.eyT.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.eyU.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.eyV.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.eyW.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.eyZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ez_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ez4.prototype={
$0(){return this.a.a8c()},
$S:0}
C.euy.prototype={
$0(){var w=this.a
w.b6A()
w.azL(null)},
$S:0}
C.eux.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.az,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.c0(A.kG,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.euw(this.a,e.b,e.d,q),B.S(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:401}
C.euw.prototype={
$1(d){var w=this
return w.a.bF5(d,w.b,w.c,w.d)},
$S:z+23}
C.eul.prototype={
$0(){var w=this
if(w.b){w.a.Nv(w.c)
return}if(w.d){w.a.a8a(w.c)
return}if(w.e){w.a.agE(w.c)
return}if(w.f)w.a.b77(w.c)},
$S:0}
C.eum.prototype={
$0(){this.a.Nv(this.b)
return null},
$S:0}
C.eun.prototype={
$0(){return this.a.a23(this.b.a)},
$S:0}
C.euo.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.euk(u,d,w.c,w.d))
v.HI()
v.oh()
v.pn()},
$S:18}
C.euk.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eup.prototype={
$1(d){return this.a.aj6(this.b.a,d)},
$S:2}
C.eur.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h3X(w))u.a.Nv(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b77(v)},
$S:0}
C.euq.prototype={
$0(){return this.a.a23(this.b.a)},
$S:0}
C.eus.prototype={
$1(d){var w=this,v=w.a
v.m(new C.euj(w.b,d,w.c,w.d))
v.HI()
v.oh()
v.pn()},
$S:18}
C.euj.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cR)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eut.prototype={
$1(d){var w=this.a
w.m(new C.eui(this.b,d))
w.HI()
w.oh()
w.pn()},
$S:220}
C.eui.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cR)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.euu.prototype={
$0(){var w=this.a
w.m(new C.euh(this.b))
w.HI()
w.oh()
w.pn()},
$S:0}
C.euh.prototype={
$0(){this.a.r=C.hq0()},
$S:0}
C.euv.prototype={
$0(){return this.a.a23(this.b.a)},
$S:0}
C.ewp.prototype={
$0(){var w=this.a
return w.m(new C.ewo(w))},
$S:0}
C.ewo.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewq.prototype={
$1(d){return this.a.cDa(this.b.a,d)},
$S:2}
C.evu.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:174}
C.evv.prototype={
$1(d){return this.a.$1(new C.evt(this.b,d))},
$S:6}
C.evt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evw.prototype={
$1(d){return this.a.$1(new C.evs(this.b,d))},
$S:6}
C.evs.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evx.prototype={
$1(d){return this.a.$1(new C.evr(this.b,d))},
$S:6}
C.evr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.evy.prototype={
$1(d){return this.a.$1(new C.evq(this.b,d))},
$S:6}
C.evq.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.evz.prototype={
$1(d){return this.a.$1(new C.evp(this.b,d))},
$S:6}
C.evp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evA.prototype={
$1(d){return this.b.$1(new C.evo(this.a,this.c))},
$S:9}
C.evo.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.evB.prototype={
$1(d){return this.b.$1(new C.evn(this.a,this.c))},
$S:9}
C.evn.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.evC.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cX
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evm(this.a,v,d),w,w,w,w,w,w,!1,A.a6)},
$S:402}
C.evm.prototype={
$0(){return this.a.$1(new C.evj(this.b,this.c))},
$S:0}
C.evj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.evD.prototype={
$1(d){return this.a.$1(new C.evl(this.b,d))},
$S:1708}
C.evl.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.evE.prototype={
$1(d){var w=null
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evk(this.a,this.b,d),w,w,w,w,w,w,!1,A.a6)},
$S:402}
C.evk.prototype={
$0(){return this.a.$1(new C.evi(this.b,this.c))},
$S:0}
C.evi.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.evF.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pC()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eF()}v.a.ask()},
$S:0}
C.evI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.az(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.aq(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.uf,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mv,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eH(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.az,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:132}
C.eth.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eH(B.x(B.a([B.ef(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jb,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.az,A.aC,A.x,u,p,p),A.n),p,A.FC,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:132}
C.exm.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aoJ,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.em(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.exk(d),w,w),B.bG(A.pp,new C.exl(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:21}
C.exk.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.exl.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d1Q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.az(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ey.az(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.az(0,i)
v=B.n(22)
t=B.aq(A.aJ,A.d.gI(C.ky(j.a.c.w)?D.up:N.nt),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.ky(j.a.c.w)?D.up:N.nt).j(0.18+w*0.12),A.J,32+w*10),D.abP],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bU(A.b1,0.9,A.x,k,0,B.a([A.d.gI(C.ky(j.a.c.w)?D.up:N.nt).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.ky(j.a.c.w)?D.up:N.nt).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bU(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ky(j.a.c.w)?D.up:N.nt).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.ky(m)?D.up:N.nt
s=B.a([new B.ac(0,A.G,A.d.gI(C.ky(m)?D.up:N.nt).j(0.45+w*0.2),A.cC,18)],s)
m=x.p
l=B.a([p,B.ef(A.A,B.p(k,B.X(C.ky(j.a.c.w)?A.vT:A.q9,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.az,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ky(j.a.c.w)?D.up:N.nt).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fG,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fdk,A.L,k,k),A.au,B.d(j.gcy4(),k,k,k,k,k,k,D.fhT,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSg()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ky(j.a.c.w)?D.up:N.nt).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JO(A.ye,"Download PDF","pdf",A.d_,j.J0(0),!1,k))
p=j.a.c
if(!p.z||p.gSg()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JO(A.kz,"Transfer to "+C.hq2(p==null?"":p),"transfer_hati",A.aV,j.J0(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J0(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JO(D.bGm,"Rename presentation","rename",A.cb,n,!1,k),A.am,new C.JO(A.al2,"Duplicate","duplicate",A.b6,j.J0(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JO(A.e9,"Delete presentation","delete",A.av,j.J0(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J0(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J0(n)
s.push(B.dX(B.de(B.bK(!1,E.aRV,k,k,!0,k,k,new C.d1P(d),k,B.fz(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.ax,k,D.bw2,k,k,k,k,k,A.kc,k,k)),n),new B.v(0,(1-p)*8)))
return B.ef(A.A,B.de(B.aF(!1,A.a1,!0,k,B.p(k,B.bv(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bvb,B.x(s,A.m,k,A.e,A.N,0,A.p),k)],m),k),A.aq),A.f,k,A.VK,new B.o(A.aw,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d1P.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d2b.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d2c.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d1N.prototype={
$1(d){var w=this.a
return w.m(new C.d1J(w))},
$S:23}
C.d1J.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d1O.prototype={
$1(d){var w=this.a
return w.m(new C.d1I(w))},
$S:51}
C.d1I.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d1M.prototype={
$0(){var w=this.a
return w.m(new C.d1K(w))},
$S:0}
C.d1K.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d1L.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.eA1.prototype={
$0(){return $.bku=!$.bku},
$S:0}
C.ezS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUY())u.awd()},
$S:0}
C.eA0.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ezT.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ezU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.awd()},
$S:0}
C.ezO.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ezP.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ezQ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ezR.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ezZ.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.r,w,null)},
$S:1709}
C.eA_.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i1)return new B.d_(e,!1,d,null)
w=this.a
return w.cvY(w.e,d,e)},
$S:471}
C.ezV.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fF((1-v.gp(0))*1.5708)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.ezW.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kb((1-v.gp(0))*1.5708)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.ezX.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fF(v.gp(0)*0.8)
w.kb(v.gp(0)*0.35)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.ezY.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fF(-v.gp(0)*1.2)
return B.fw(A.a8,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.eA2.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYO().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYO().x
t===$&&B.c()
return new C.b1b(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IN(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:657}
C.eA4.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bY,x.w).w.a.a*0.55)w.awd()
else w.cki()},
$S:51}
C.eA3.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fJa.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:461}
C.fJj.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.fJg(d),w,w),B.bK(!1,D.fAz,w,w,!0,w,w,new C.fJh(d,this.b,v),w,w),B.bG(A.aSb,new C.fJi(d,v,this.c),w)],x.p),w,w,M.ty,new B.a7(320,w,t,w),w,w,w,w,D.fC2,w)},
$S:21}
C.fJg.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fJh.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.h4B(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJi.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aQ0(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPr(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJ9.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cfw.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fJf.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fg5.prototype={
$1(d){return C.h4z(C.VZ(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fS2.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.fS3.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,D.h70,0.94+w*0.06,null,null),w)},
$S:476}
C.fS4.prototype={
$1(d){var w=this
return new C.W0(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ezy.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ezu.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ezx.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.W1(u,this.b,w.gaOb(),v,null)},
$S:z+99}
C.ezv.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ezw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ezz.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ezA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ezD.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ezE.prototype={
$0(){var w=this.a
return w.m(new C.ezC(w))},
$S:0}
C.ezC.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ezF.prototype={
$0(){var w=this.a
return w.m(new C.ezB(w))},
$S:0}
C.ezB.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ezG.prototype={
$1(d){return this.a.bJM(d,this.b)},
$S:z+100}
C.ezt.prototype={
$0(){var w=this.a
return w.m(new C.ezs(w,this.b))},
$S:0}
C.ezs.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ezH.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ezI.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ezJ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ezK.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ezL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fO(new B.fF(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.f_E)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etb.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eta())},
$S:0}
C.eta.prototype={
$0(){},
$S:0}
C.etc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:8}
C.et7.prototype={
$1(d){return this.a.m(new C.et6())},
$S:2}
C.et6.prototype={
$0(){},
$S:0}
C.et8.prototype={
$1(d){return this.a.aZY()},
$S:2}
C.et9.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ezN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q_(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ezM(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezM.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fDu.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ey(new B.jN(this.c,new C.fDt(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:228}
C.fDt.prototype={
$3(d,e,f){return new C.IN(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fDv.prototype={
$1(d){var w=null
return B.os(!1,B.av(new C.bv2(this.a,this.b,w),w,w,w),w,x.z)},
$S:323}
C.fDz.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bM(A.ng,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmF(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q0))throw B.V("Could not draw the slide.")
u=r.m3(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fDA.prototype={
blf(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hw(A.h2),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hS([J.eX(A.dD.gaP(r))],"image/png"))
t.toString
s=Al.fWh(t)
w=4
return B.b(new B.q6(s,"load",!1,x.ev).gI(0).d8(0,A.jn),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.blf(d)},
$S:1713}
C.fDw.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:157}
C.fDx.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fV(0)},
$S:157}
C.fDy.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.faq.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f9Q,A.L,w,w)},
$S:1714}
C.far.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bv(v,B.lB(A.bm,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.ehk.prototype={
$1(d){this.a.a_1()
return null},
$S:12}
C.ehi.prototype={
$0(){return this.a.e=D.brd},
$S:0}
C.ehj.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.ci3.prototype={
$1(d){return A.o.dC(1,d.a)},
$S:z+103}
C.ci4.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLV.prototype
w.bvU=w.q
w=C.aLo.prototype
w.bvm=w.q
w=C.aL9.prototype
w.bv6=w.q
w=C.aLn.prototype
w.bvl=w.q
w=C.aLT.prototype
w.bvS=w.q
w=C.aNf.prototype
w.bxp=w.q
w=C.aK4.prototype
w.btZ=w.q
w=C.aM6.prototype
w.bw5=w.q
w=C.aM7.prototype
w.bw6=w.q
w=C.b2S.prototype
w.bqD=w.aCU})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iaT","any",104)
v(C.aJ3.prototype,"gc4f","YV",0)
var r
u(r=C.axE.prototype,"gcxq","cxr",38)
v(r,"gc53","adm",0)
v(r=C.axA.prototype,"gaYp","E1",3)
v(r,"gc50","c51",3)
v(r,"gawx","xL",0)
v(r,"gawy","IF",0)
t(C,"ibj","hHy",105)
v(C.aDI.prototype,"gc7L","c7M",3)
s(C,"ibu",0,null,["$4$paper$photo$request$template"],["fKz"],106,0)
s(C,"ibt",0,null,["$5$doc$history$instruction$photo$template"],["bC8"],107,0)
v(r=C.aE0.prototype,"gc8s","IY",0)
v(r,"gbJe","WL",0)
v(r,"gc8v","aea",0)
v(r,"gc8u","ZO",0)
v(r,"gaZD","Ei",0)
v(C.aE4.prototype,"gc8A","ZQ",0)
v(r=C.aFr.prototype,"gaZQ","PP",0)
v(r,"gcpa","b3e",3)
v(r,"gcyP","aB3",86)
v(r,"gbN4","aa8",0)
v(r,"gc90","At",0)
v(r=C.aHm.prototype,"gcj1","a0a",0)
v(r,"gcj9","a0d",0)
v(r,"gbC2","a8A",0)
v(r,"gc94","aem",0)
v(C.aHl.prototype,"gc95","aen",0)
v(C.aBm.prototype,"gbB1","a8n",0)
v(C.azK.prototype,"gc96","a_0",0)
w(C,"ibH","i9A",12)
w(C,"ibF","i6x",12)
w(C,"ibG","i8A",12)
v(r=C.aEk.prototype,"gcC5","cC6",3)
v(r,"gcnq","cnr",3)
u(r,"gEo","af1",7)
v(r,"gbGR","aru",3)
u(r,"gEp","b07",7)
v(r,"gcbe","aeJ",0)
v(r,"gca5","aeI",0)
v(r,"gcdo","af2",0)
v(r,"gbJb","a9J",0)
v(r,"gceh","a_A",0)
v(r,"gcei","afj",0)
v(r,"gceP","afq",0)
v(r,"gcdB","af5",0)
v(r,"gbNg","aac",0)
v(r,"gaRK","aRL",3)
v(r,"gaQS","aQT",3)
v(r,"gaMw","aMx",3)
v(r,"gaQR","ask",3)
u(r,"gbBi","bBj",80)
v(r,"gaAA","b6k",3)
v(r,"gca7","ca8",3)
v(r,"gbYs","bYt",3)
v(r,"gbLE","bLF",3)
v(r=C.aEn.prototype,"gcAS","cAT",3)
v(r,"gcAx","cAy",3)
t(C,"ibI","i9R",2)
v(r=C.aEl.prototype,"gc9c","J2",0)
v(r,"gcrd","Rf",0)
v(r,"gc99","J1",0)
v(r,"gcDl","a2I",0)
v(r,"gcf0","afx",0)
v(C.aEj.prototype,"gc9d","aZY",3)
v(r=C.aEm.prototype,"gbO2","aan",0)
u(r,"gc9a","c9b",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nY,C.RK,C.bHJ,C.bG3,C.cyf,C.cyd,C.bOk,C.b8C,C.cye,C.bEE,C.chY,C.chW,C.chX,C.chV,C.asO,C.chU,C.bPd,C.op,C.aEW,C.jo,C.nK,C.a7V,C.zz,C.li,C.oC,C.m8,C.zB,C.nO,C.a82,C.ard,C.b1c,C.egK,C.lf,C.EH,C.ex,C.j1,C.Ey,C.xB,C.eM,C.lJ,C.i5,C.jH,C.a83,C.afe,C.b1d,C.b2S,C.a2S])
u(B.kn,[C.cG7,C.c_1,C.fyJ,C.cHD,C.cH_,C.fEc,C.dZM,C.dZL,C.ehn,C.ehm,C.fFB,C.fhd,C.fhe,C.cdT,C.cdU,C.cdV,C.elM,C.eUA,C.eTY,C.eTX,C.eV0,C.eUy,C.eUr,C.eUK,C.eVq,C.foY,C.f0A,C.f0z,C.f12,C.egN,C.fJ6,C.dVv,C.fPB,C.fFY,C.cfo,C.cfm,C.cfr,C.fGs,C.fGt,C.fGu,C.fGv,C.cf8,C.cf9,C.dHK,C.cf5,C.fGr,C.f7Z,C.dTH,C.ceZ,C.egt,C.fE1,C.ewM,C.exa,C.ex7,C.ex6,C.exh,C.exg,C.eyM,C.eyL,C.ex0,C.ex_,C.etA,C.euK,C.exJ,C.ez3,C.ez2,C.eux,C.evI,C.eth,C.d1Q,C.ezZ,C.eA_,C.ezV,C.ezW,C.ezX,C.ezY,C.eA2,C.cfw,C.ezy,C.ezJ,C.ci4])
u(B.i0,[C.cG8,C.cG9,C.bPe,C.fvV,C.c_0,C.c_3,C.fM5,C.f8X,C.f8O,C.f93,C.fg6,C.fg7,C.fyK,C.fyI,C.fLA,C.fvz,C.fMr,C.cHt,C.cHy,C.cHA,C.cHw,C.cHB,C.cHu,C.cHC,C.cHp,C.cHm,C.cHl,C.cHs,C.cGV,C.cGT,C.fDe,C.fDf,C.fkw,C.fEd,C.fEj,C.fjz,C.cab,C.fDc,C.fDd,C.fy5,C.fy6,C.fEi,C.fEe,C.fEg,C.fEh,C.fEf,C.fPT,C.fy9,C.fya,C.fyd,C.fye,C.fyh,C.fyi,C.fRl,C.fhF,C.fRw,C.ekF,C.ekG,C.ekH,C.ekn,C.ekz,C.ekA,C.ekC,C.cdS,C.cdQ,C.cdR,C.fDT,C.fDV,C.fDU,C.fhf,C.fhg,C.fRz,C.elR,C.elS,C.elJ,C.elK,C.elN,C.elO,C.fRP,C.eVr,C.eUR,C.eUB,C.eUO,C.eTT,C.eTU,C.eTV,C.eTZ,C.eU_,C.eVg,C.eVn,C.eVp,C.eV_,C.eV1,C.eV5,C.eV6,C.eV7,C.eVb,C.eV2,C.eV3,C.eUa,C.eUb,C.eUc,C.eUd,C.eUe,C.eUf,C.eUg,C.eUh,C.eUi,C.eTw,C.eTx,C.eTy,C.eTz,C.eTB,C.eTC,C.eU4,C.eU5,C.eU6,C.eU7,C.eU8,C.eTG,C.eTH,C.eTI,C.eTJ,C.eUq,C.eUJ,C.fBh,C.fBg,C.cff,C.foX,C.fJ2,C.fIW,C.fIZ,C.fGW,C.fGX,C.fGY,C.fBo,C.fBn,C.fBm,C.fBk,C.fha,C.fhb,C.fhc,C.fS0,C.f0C,C.f0D,C.f0w,C.f0q,C.f0W,C.f0X,C.f0Z,C.f1_,C.f0V,C.fS_,C.f0h,C.fob,C.egM,C.fJ4,C.fJ5,C.fJ7,C.fJ0,C.fJ1,C.fRd,C.dk7,C.dkd,C.egL,C.fdH,C.fdJ,C.fdI,C.fdG,C.fCs,C.fCu,C.ffD,C.fIx,C.fIy,C.fIz,C.fIK,C.fIP,C.fIQ,C.fIR,C.fIS,C.fIT,C.fIU,C.fIV,C.fIA,C.fIB,C.fIC,C.fID,C.fIE,C.fIF,C.fIG,C.fIH,C.fII,C.fIJ,C.fIL,C.fIM,C.fIN,C.fIO,C.fAi,C.fnK,C.fnJ,C.fJd,C.dVw,C.dVu,C.f_r,C.c9N,C.c9P,C.fPD,C.d9p,C.d9r,C.fPC,C.fPA,C.fRZ,C.fFU,C.d9_,C.fyl,C.fym,C.cfd,C.cfe,C.cfc,C.cf2,C.cf3,C.cf_,C.cf0,C.cf1,C.cfu,C.cfp,C.cfk,C.cfl,C.cfn,C.cfq,C.cfs,C.fGw,C.cf7,C.cfa,C.cfb,C.cfh,C.cfi,C.fJk,C.fIr,C.cf6,C.cf4,C.fGq,C.fqi,C.ceY,C.eY4,C.fta,C.ezp,C.evP,C.evQ,C.exp,C.exd,C.exe,C.evc,C.eza,C.ezb,C.ezc,C.euB,C.ewT,C.ewV,C.ewv,C.ews,C.evL,C.evM,C.ewC,C.euD,C.ewO,C.ewP,C.ewN,C.ewR,C.ewQ,C.ex8,C.ex9,C.exb,C.ex4,C.euW,C.euT,C.exi,C.euL,C.ez9,C.etj,C.euO,C.euN,C.eu1,C.eu6,C.eu4,C.eu2,C.ezh,C.ezi,C.ezj,C.ezg,C.eyO,C.eyN,C.eyH,C.eyJ,C.eyz,C.ez7,C.ez5,C.etr,C.etn,C.evJ,C.eua,C.etC,C.etB,C.etY,C.etZ,C.eva,C.euc,C.eug,C.ex1,C.eyA,C.eyB,C.eyC,C.eyD,C.euF,C.euG,C.euH,C.ewb,C.ev6,C.euZ,C.ev5,C.ewl,C.ewm,C.ey8,C.eya,C.eyu,C.eyw,C.eyb,C.eyc,C.eu8,C.evO,C.evN,C.eyY,C.euw,C.euo,C.eup,C.eus,C.eut,C.ewq,C.evu,C.evv,C.evw,C.evx,C.evy,C.evz,C.evA,C.evB,C.evC,C.evD,C.evE,C.exm,C.d1N,C.d1O,C.eA4,C.fJa,C.fJj,C.fJ9,C.fJf,C.fg5,C.fS2,C.fS3,C.fS4,C.ezx,C.ezG,C.etc,C.et7,C.et8,C.fDu,C.fDt,C.fDv,C.fDA,C.fDw,C.fDx,C.faq,C.far,C.ehk,C.ci3])
u(B.ja,[C.cGa,C.f8T,C.f8Y,C.f8Z,C.f8U,C.f8V,C.f8W,C.f8M,C.f8N,C.f8P,C.f8Q,C.f92,C.f91,C.f8S,C.f8R,C.f9_,C.f90,C.f95,C.f96,C.f94,C.cHv,C.cHz,C.cHx,C.cHn,C.cHo,C.cHq,C.cHj,C.cHk,C.cHr,C.cHi,C.cHh,C.cHg,C.cGK,C.cGJ,C.cGM,C.cGU,C.cGN,C.cGL,C.cGP,C.cGQ,C.cGR,C.cGO,C.cGS,C.cGW,C.cGX,C.cGY,C.cGZ,C.fy3,C.fy4,C.fy1,C.fy2,C.ec8,C.ec6,C.ec7,C.ec9,C.eca,C.dZK,C.fy7,C.fy8,C.fyb,C.fyc,C.fyf,C.fyg,C.ehl,C.fG0,C.fG_,C.ekE,C.ekD,C.ekh,C.ekd,C.eko,C.ekp,C.ekq,C.ekj,C.ekk,C.ekl,C.ekm,C.eki,C.ekf,C.ekg,C.ekw,C.ekx,C.ekv,C.eky,C.eku,C.ekt,C.eks,C.ekB,C.ekr,C.eke,C.elQ,C.elE,C.elF,C.elL,C.elG,C.elI,C.elH,C.elP,C.eUj,C.eUH,C.eU2,C.eU3,C.eU0,C.eU1,C.eUN,C.eUM,C.eUL,C.eUQ,C.eUP,C.eTS,C.eTW,C.eTR,C.eTQ,C.eTN,C.eTP,C.eTO,C.eVo,C.eVh,C.eVf,C.eVi,C.eVe,C.eVj,C.eVd,C.eVk,C.eVl,C.eVm,C.eVc,C.eUZ,C.eUU,C.eV4,C.eUY,C.eV8,C.eUX,C.eV9,C.eUW,C.eVa,C.eUV,C.eUE,C.eUD,C.eUF,C.eUC,C.eUG,C.eUw,C.eUv,C.eUx,C.eUu,C.eUt,C.eUs,C.eTA,C.eTv,C.eTK,C.eTF,C.eTL,C.eTE,C.eTM,C.eTD,C.eUz,C.eUn,C.eUm,C.eUo,C.eUl,C.eUp,C.eUk,C.eUI,C.eUT,C.eUS,C.eU9,C.fIY,C.fJ_,C.fJ3,C.fBl,C.fDM,C.fDK,C.fDL,C.f0E,C.f0F,C.f0B,C.f0v,C.f0u,C.f0x,C.f0y,C.f0k,C.f0l,C.f0n,C.f0o,C.f0p,C.f0m,C.f0r,C.f0S,C.f0T,C.f0R,C.f0U,C.f0Q,C.f0P,C.f0O,C.f0Y,C.f0N,C.f0M,C.f0L,C.f10,C.f0K,C.f11,C.f0J,C.f0I,C.f0s,C.f0t,C.f0H,C.f0G,C.f0d,C.f0e,C.f0f,C.f0g,C.f0c,C.f0i,C.f0j,C.dk6,C.dk8,C.dkb,C.dkc,C.dka,C.dk9,C.fCt,C.fAj,C.c9O,C.c9Q,C.d9i,C.d9n,C.d9o,C.d9m,C.d9l,C.d9q,C.d9k,C.d9j,C.d9s,C.fPz,C.dg5,C.dg6,C.dg7,C.fyj,C.fyk,C.cfv,C.etd,C.ete,C.etf,C.etg,C.fqg,C.fqh,C.dTJ,C.dTI,C.d6e,C.d6d,C.ezr,C.ezq,C.evR,C.eyx,C.ezn,C.exn,C.ezd,C.eze,C.ezo,C.eww,C.euz,C.euA,C.ewU,C.ewu,C.ewr,C.ewt,C.ewx,C.ewy,C.ewz,C.ewA,C.ewB,C.ewD,C.euE,C.ewG,C.ewH,C.ewI,C.ewJ,C.ewK,C.ewL,C.ewF,C.ewS,C.ex5,C.ex3,C.exc,C.ewE,C.euU,C.euV,C.euX,C.exf,C.exj,C.ety,C.euS,C.euQ,C.exr,C.euM,C.exq,C.euC,C.evd,C.ez8,C.eyy,C.etz,C.etw,C.etm,C.eti,C.etk,C.euP,C.eu0,C.eu5,C.eu3,C.eu_,C.ex2,C.ezk,C.eyK,C.eyF,C.eyG,C.eyI,C.evH,C.evG,C.ez6,C.etp,C.etq,C.ets,C.ett,C.etx,C.eto,C.exo,C.ezf,C.evK,C.eu9,C.etl,C.evb,C.etu,C.etD,C.etE,C.etF,C.etQ,C.etT,C.etU,C.etV,C.etW,C.etX,C.etG,C.etH,C.etI,C.etJ,C.etK,C.etL,C.etM,C.etN,C.etO,C.etP,C.etR,C.etS,C.ev9,C.ev8,C.ev7,C.etv,C.eud,C.eub,C.eue,C.euf,C.euR,C.ewY,C.ewZ,C.ewW,C.ewX,C.eyE,C.euJ,C.euI,C.ewa,C.ew9,C.ewc,C.ew8,C.ewd,C.ew7,C.ewe,C.ew6,C.ewf,C.ew5,C.ewg,C.ew4,C.ewh,C.ew3,C.ewi,C.ew2,C.evW,C.evX,C.evY,C.evV,C.evZ,C.evU,C.ew_,C.evT,C.ew0,C.evS,C.ew1,C.ev3,C.ev4,C.euY,C.ev_,C.ev0,C.ev1,C.ev2,C.ezl,C.ezm,C.ewk,C.ewj,C.ewn,C.exK,C.exL,C.exM,C.exX,C.ey7,C.eyi,C.eyp,C.eyq,C.eyr,C.eys,C.eyt,C.exN,C.exO,C.exP,C.exQ,C.exR,C.exS,C.exT,C.exU,C.exV,C.exW,C.exY,C.exZ,C.ey_,C.ey0,C.ey1,C.ey2,C.ey3,C.ey4,C.ey5,C.exA,C.ey6,C.exI,C.exH,C.ey9,C.exG,C.exw,C.eyv,C.exF,C.exv,C.ext,C.exE,C.exu,C.exs,C.eyd,C.exD,C.eye,C.eyf,C.eyg,C.eyh,C.exC,C.eyj,C.eyk,C.eyl,C.exB,C.eym,C.exz,C.eyn,C.exy,C.eyo,C.exx,C.eu7,C.eyR,C.eyQ,C.eyS,C.eyP,C.evg,C.evf,C.evh,C.eve,C.ez1,C.eyX,C.ez0,C.eyT,C.eyU,C.eyV,C.eyW,C.eyZ,C.ez_,C.ez4,C.euy,C.eul,C.eum,C.eun,C.euk,C.eur,C.euq,C.euj,C.eui,C.euu,C.euh,C.euv,C.ewp,C.ewo,C.evt,C.evs,C.evr,C.evq,C.evp,C.evo,C.evn,C.evm,C.evj,C.evl,C.evk,C.evi,C.evF,C.exk,C.exl,C.d1P,C.d2b,C.d2c,C.d1J,C.d1I,C.d1M,C.d1K,C.d1L,C.eA1,C.ezS,C.eA0,C.ezT,C.ezU,C.ezO,C.ezP,C.ezQ,C.ezR,C.eA3,C.fJg,C.fJh,C.fJi,C.ezu,C.ezv,C.ezw,C.ezz,C.ezA,C.ezD,C.ezE,C.ezC,C.ezF,C.ezB,C.ezt,C.ezs,C.ezH,C.ezI,C.ezK,C.ezL,C.etb,C.eta,C.et6,C.et9,C.ezN,C.ezM,C.fDz,C.fDy,C.ehi,C.ehj])
t(C.aRl,B.J)
u(B.md,[C.a3Q,C.ax6,C.avO,C.xz,C.xC,C.kV,C.tn,C.Bx,C.rw,C.w1,C.arL,C.IO,C.arc,C.uK,C.my,C.hF,C.a8H])
u(C.bOk,[C.cyg,C.bOl])
u(C.chY,[C.ci1,C.asN])
t(C.ci0,C.chW)
t(C.ci_,C.chV)
t(C.ci2,C.ci_)
t(C.chZ,C.chX)
t(C.chT,C.chU)
t(C.baa,B.oU)
t(C.cs1,B.avf)
t(C.a8t,B.xn)
t(C.aVQ,B.dI)
t(C.aAF,B.au7)
u(B.ag,[C.a0T,C.YD,C.YB,C.aqo,C.VN,C.VQ,C.a_U,C.a0q,C.a0p,C.aDU,C.ZM,C.Nu,C.Zk,C.ZF,C.aon,C.aIL,C.V0,C.azu,C.a7L,C.NW,C.ayR,C.JO,C.a_w,C.W0,C.W1,C.aEi,C.arh,C.a7M])
u(B.ah,[C.aJ3,C.axE,C.axA,C.aDI,C.aE0,C.aE4,C.aFr,C.aHm,C.aHl,C.aLV,C.aBm,C.aLo,C.azK,C.bg3,C.aL9,C.aNf,C.aLn,C.bdX,C.aLT,C.aM6,C.aK4,C.bcI,C.aM7,C.aEl,C.bkt,C.aEj,C.aEm,C.bkc])
u(B.au,[C.axC,C.adl,C.acK,C.bje,C.ado,C.af4,C.b0P,C.bsE,C.b18,C.blN,C.brc,C.b_3,C.b1b,C.adr,C.adJ,C.b19,C.IN,C.b_6,C.bcX,C.PA,C.JV,C.bhB,C.bhA,C.bv2])
u(B.Hh,[C.bcp,C.bu3,C.aJn,C.bf6,C.brA])
u(B.mP,[C.bco,C.b8U,C.brx,C.bbW,C.bfu,C.bhH,C.beA,C.bfr,C.bf8,C.bo2,C.ba2,C.b9G,C.bv_,C.bs_,C.br8,C.bet,C.b16,C.bq5,C.br5])
t(C.bk9,C.aLV)
t(C.bjw,C.aLo)
t(C.bjg,C.aL9)
t(C.buw,C.aNf)
t(C.bjt,C.aLn)
t(C.bk7,C.aLT)
t(C.bxl,C.aM6)
t(C.aEk,C.bxl)
t(C.bcJ,C.aK4)
t(C.aEn,C.aM7)
t(C.buR,B.iU)
t(C.a8G,B.ku)
t(C.ci5,C.b2S)
t(C.aig,C.a2S)
u(B.XE,[C.aRb,C.aSI])
t(C.awJ,C.aRb)
w(C.aLV,B.c9)
w(C.aLo,B.c9)
w(C.aL9,B.c9)
w(C.aLn,B.c9)
w(C.aLT,B.c9)
w(C.aNf,B.c9)
w(C.aK4,B.eW)
w(C.aM6,B.c9)
v(C.bxl,B.eB)
w(C.aM7,B.c9)})()
B.k2(b.typeUniverse,JSON.parse('{"aRV":{"hM":["aRV"]},"nY":{"aRV":[],"hM":["aRV"]},"aRl":{"J":["RK"],"J.E":"RK"},"baa":{"oU":[]},"a8t":{"xn":[],"oi":[]},"aVQ":{"dI":[],"cy":[],"t":[]},"aAF":{"aT":[],"d7":["aT"],"aR":[],"cv":[]},"a0T":{"ag":[],"t":[]},"aJ3":{"ah":["a0T"]},"YD":{"ag":[],"t":[]},"YB":{"ag":[],"t":[]},"axE":{"ah":["YD"]},"axA":{"ah":["YB"]},"axC":{"au":[],"t":[]},"aqo":{"ag":[],"t":[]},"aDI":{"ah":["aqo"]},"adl":{"au":[],"t":[]},"acK":{"au":[],"t":[]},"ado":{"au":[],"t":[]},"af4":{"au":[],"t":[]},"bje":{"au":[],"t":[]},"VN":{"ag":[],"t":[]},"aE0":{"ah":["VN"]},"b0P":{"au":[],"t":[]},"bcp":{"aB":[]},"bco":{"aB":[]},"bu3":{"aB":[]},"b8U":{"aB":[]},"brx":{"aB":[]},"VQ":{"ag":[],"t":[]},"aE4":{"ah":["VQ"]},"bbW":{"aB":[]},"a_U":{"ag":[],"t":[]},"aFr":{"ah":["a_U"]},"bfu":{"aB":[]},"a0q":{"ag":[],"t":[]},"a0p":{"ag":[],"t":[]},"aDU":{"ag":[],"t":[]},"ZM":{"ag":[],"t":[]},"aHm":{"ah":["a0q"]},"aHl":{"ah":["a0p"]},"bk9":{"ah":["aDU"]},"bhH":{"aB":[]},"aBm":{"ah":["ZM"]},"bsE":{"au":[],"t":[]},"b18":{"au":[],"t":[]},"blN":{"au":[],"t":[]},"Nu":{"ag":[],"t":[]},"Zk":{"ag":[],"t":[]},"bjw":{"ah":["Nu"]},"brc":{"au":[],"t":[]},"beA":{"aB":[]},"b_3":{"au":[],"t":[]},"azK":{"ah":["Zk"]},"ZF":{"ag":[],"t":[]},"bg3":{"ah":["ZF"]},"bfr":{"aB":[]},"bf8":{"aB":[]},"bo2":{"aB":[]},"ba2":{"aB":[]},"b9G":{"aB":[]},"bv_":{"aB":[]},"bs_":{"aB":[]},"br8":{"aB":[]},"bet":{"aB":[]},"aon":{"ag":[],"t":[]},"b1b":{"au":[],"t":[]},"bjg":{"ah":["aon"]},"adr":{"au":[],"t":[]},"adJ":{"au":[],"t":[]},"aIL":{"ag":[],"t":[]},"V0":{"ag":[],"t":[]},"IN":{"au":[],"t":[]},"azu":{"ag":[],"t":[]},"a7L":{"ag":[],"t":[]},"b19":{"au":[],"t":[]},"b16":{"aB":[]},"buw":{"ah":["aIL"]},"aJn":{"aB":[]},"bjt":{"ah":["V0"]},"bdX":{"ah":["azu"]},"bk7":{"ah":["a7L"]},"b_6":{"au":[],"t":[]},"bf6":{"aB":[]},"bq5":{"aB":[]},"br5":{"aB":[]},"ayR":{"ag":[],"t":[]},"JO":{"ag":[],"t":[]},"a_w":{"ag":[],"t":[]},"JV":{"au":[],"t":[]},"NW":{"ag":[],"t":[]},"aEk":{"ah":["NW"],"eB":[]},"bcJ":{"ah":["ayR"]},"bcX":{"au":[],"t":[]},"bcI":{"ah":["JO"]},"PA":{"au":[],"t":[]},"aEn":{"ah":["a_w"]},"brA":{"aB":[]},"bhB":{"au":[],"t":[]},"bhA":{"au":[],"t":[]},"W0":{"ag":[],"t":[]},"W1":{"ag":[],"t":[]},"aEi":{"ag":[],"t":[]},"arh":{"ag":[],"t":[]},"aEl":{"ah":["W0"]},"bkt":{"ah":["W1"]},"aEj":{"ah":["aEi"]},"buR":{"iU":[]},"aEm":{"ah":["arh"]},"bv2":{"au":[],"t":[]},"a7M":{"ag":[],"t":[]},"bkc":{"ah":["a7M"]},"a8G":{"ku":["fv<eT>"],"kj":["fv<eT>"]},"aig":{"a2S":[]},"aRb":{"j4":[],"fg":[]},"awJ":{"j4":[],"fg":[]},"aSI":{"j4":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LI"),U:w("vv<q4>"),bz:w("w"),M:w("dD<m>"),bo:w("jC"),g7:w("Md"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("Mq"),fS:w("DX"),an:w("HZ"),bm:w("O<RK>"),X:w("O<a3_>"),f3:w("O<aRV>"),aK:w("O<na>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lA>"),d5:w("O<aA<bw<G,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dL>>"),fG:w("O<aA<~>>"),aF:w("O<ng>"),cd:w("O<ai<jo>>"),ez:w("O<a6<m,aD>>"),d:w("O<a6<m,@>>"),B:w("O<mu>"),h:w("O<jo>"),gE:w("O<zz>"),k:w("O<op>"),g:w("O<lJ>"),D:w("O<i5>"),u:w("O<eM>"),m:w("O<uK>"),i:w("O<hF>"),aC:w("O<a82>"),o:w("O<zB>"),e3:w("O<aD>"),dN:w("O<v>"),v:w("O<hv>"),cR:w("O<iS>"),J:w("O<jg>"),gx:w("O<pd<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(K,K)>"),ek:w("O<+(G,m)>"),n:w("O<+(G,G)>"),r:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),eR:w("O<fg>"),fT:w("O<b8C>"),bx:w("O<aEW>"),gz:w("O<afe>"),x:w("O<K>"),t:w("O<G>"),dS:w("O<aB?>"),bA:w("O<v?>"),Z:w("O<G?>"),cA:w("O<ch>"),A:w("cs<ah<ag>>"),gL:w("ai<op>"),R:w("ai<i5>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bw<G,+icon3d,picture(m?,m?)>"),P:w("a6<m,@>"),f:w("a6<@,@>"),gI:w("a6<G,+icon3d,picture(m?,m?)>"),bR:w("M<hF,t>"),eC:w("M<nO,m>"),cT:w("M<jH,D>"),dv:w("M<m,m>"),f0:w("M<m,t>"),gN:w("M<G,pJ>"),gh:w("M<my,jq<my>>"),w:w("iE"),ei:w("iA"),g2:w("rm"),fB:w("Ey"),b6:w("zz"),gX:w("a7V"),dt:w("li"),ea:w("op"),bt:w("lJ"),I:w("i5"),F:w("eM"),fO:w("my"),ff:w("uK"),fP:w("hF"),Q:w("w1"),dO:w("ard"),a:w("cr"),C:w("aD"),dw:w("asO"),di:w("a8H"),Y:w("eT"),fz:w("+(m,m)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("F3"),dB:w("dx<v>"),bJ:w("dx<m>"),_:w("e3<m>"),N:w("m"),fw:w("q4"),bO:w("ar"),K:w("bq<v>"),b:w("bq<K>"),E:w("dL"),W:w("cx<m>"),ac:w("cx<G>"),ex:w("jN<lJ>"),cI:w("jN<m>"),cl:w("jN<K>"),b4:w("a_<lf>"),a8:w("a_<m8>"),fR:w("a_<+(m,m)>"),co:w("eb<v>"),l:w("t"),b2:w("bY<~>"),ev:w("q6<dZ>"),dT:w("bg<~>"),cQ:w("aAF"),q:w("n2"),y:w("Q"),gR:w("K"),z:w("@"),S:w("G"),at:w("ba?"),gw:w("ai<a6<m,@>>?"),aT:w("ai<i5>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i5?"),go:w("b1d?"),a6:w("a83?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dL,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXp=new B.bI(A.az,null,null,H.aot,null)
D.aXz=new B.dc(0,-0.15)
D.aXB=new B.dc(0.62,0)
D.aXE=new B.dc(-0.35,-0.45)
D.aXO=new B.dc(0.9,-0.85)
D.aZi=new B.bn(H.SQ,H.SQ,A.hg,A.hg)
D.aZx=new B.az(A.b6,1,A.q,-1)
D.bii=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aZJ=new B.az(D.bii,1,A.q,-1)
D.aZV=new B.az(A.aE,1.5,A.q,-1)
D.b__=new B.az(A.b6,1.6,A.q,-1)
D.b_f=new B.az(A.aE,1.4,A.q,-1)
D.b0C=new B.o(null,null,null,null,null,L.GS,A.a5)
D.bYJ=new B.a9(A.a3,A.a8,A.x,G.a3q,null,null)
D.b0K=new B.o(null,null,null,null,null,D.bYJ,A.a5)
D.abF=new B.o(A.aw,null,null,A.tb,null,null,A.n)
D.bce=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bif=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cWc=w([D.bce,D.bif],x.O)
D.ejJ=new B.bU(A.A,0.5,A.x,null,0,D.cWc,null,null)
D.b12=new B.o(null,null,null,null,null,D.ejJ,A.a5)
D.Xd=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_v=new B.bO(P.v8,A.Y,A.Y,A.Y)
D.b14=new B.o(D.Xd,null,D.b_v,null,null,null,A.n)
D.c_t=new B.a9(A.a3,A.a8,A.x,A.Qq,null,null)
D.b1b=new B.o(null,null,null,null,null,D.c_t,A.a5)
D.add=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b1e=new B.o(D.add,null,null,A.qK,null,null,A.n)
D.b1i=new B.o(A.jl,null,null,null,null,null,A.a5)
D.b1l=new B.o(Z.aem,null,H.abj,A.mf,null,null,A.n)
D.Ed=new B.o(A.dM,null,null,null,null,null,A.a5)
D.b1s=new B.o(null,null,null,null,null,E.w8,A.a5)
D.d06=w([E.afg,A.c_],x.O)
D.c_4=new B.a9(A.b1,A.b5,A.x,D.d06,null,null)
D.b1w=new B.o(null,null,null,A.mf,null,D.c_4,A.n)
D.daT=w([A.bj,A.dM,A.k_],x.O)
D.a1z=new B.a9(A.az,A.aC,A.x,D.daT,null,null)
D.b1J=new B.o(null,null,null,null,null,D.a1z,A.n)
D.b1K=new B.o(D.add,null,null,A.kN,null,null,A.n)
D.cqI=w([A.d8,A.bj],x.O)
D.bZW=new B.a9(A.az,A.aC,A.x,D.cqI,null,null)
D.b1O=new B.o(null,null,null,null,null,D.bZW,A.n)
D.b1Y=new B.o(null,null,null,null,null,G.uj,A.a5)
D.b2h=new B.o(A.afi,null,null,null,null,null,A.a5)
D.bd3=new B.w(0.5647058823529412,0,0,0,A.t)
D.abP=new B.ac(0,A.G,D.bd3,A.Sl,28)
D.b4p=new B.aW2()
D.b4Y=new C.cs1()
D.b59=new C.baa()
D.ack=new B.cp(A.A,null,null,A.a1o,null)
D.b7H=new B.fk(null,null,null,null,null,E.n6,null,null,null,null)
D.b5G=new B.cp(A.A,null,null,D.b7H,null)
D.bJj=new B.ae(A.dY,28,A.c,null,null,null)
D.b69=new B.cp(A.A,null,null,D.bJj,null)
D.b7E=new B.fk(2,null,null,null,null,A.c0,null,null,null,null)
D.b6v=new B.cp(A.A,null,null,D.b7E,null)
D.bJE=new B.ae(L.O2,40,A.bz,null,null,null)
D.b6w=new B.cp(A.A,null,null,D.bJE,null)
D.b8x=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b8K=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b98=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b9f=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b9K=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.ba_=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.ba0=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.L0=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.bap=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.bav=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adw=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.bbg=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bc3=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adM=new B.w(1,1,1,0.9725490196078431,A.t)
D.bcn=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcx=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bcB=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bcO=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bd8=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bez=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WY=new B.w(0.8509803921568627,0,0,0,A.t)
D.beI=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.beP=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aeF=new B.w(0.6,0,0,0,A.t)
D.aeH=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bgd=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tw=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bgC=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bh1=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bhp=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aft=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xn=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AW=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Ly=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.ji=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afR=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xy=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bkP=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bli=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.blw=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XT=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bmF=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xz=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bna=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bnu=new B.hL(A.aZ,!0,null,null)
D.fg8=new B.H(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new B.y("Bio link",null,D.fg8,null,null,null,null,null,null,null,null,null)
D.b6p=new B.cp(A.A,null,null,D.fGc,null)
D.bnK=new B.hL(A.Wj,!0,D.b6p,null)
D.LY=new C.a3Q(0,"none")
D.agU=new C.a3Q(1,"deflate")
D.agV=new C.a3Q(2,"bzip2")
D.boH=new B.kp(0.165,0.84,0.44,1)
D.d0q=w([A.cc,A.dP,A.aE],x.O)
D.bZc=new B.a9(A.az,A.aC,A.x,D.d0q,null,null)
D.b0H=new B.o(null,null,null,null,null,D.bZc,A.n)
D.bSz=new B.ae(A.eT,null,A.ad,null,null,null)
D.b70=new B.cp(A.A,null,null,D.bSz,null)
D.bpd=new B.kS(D.b0H,A.bf,D.b70,null)
D.bl4=new B.w(0.058823529411764705,1,1,1,A.t)
D.d3F=w([A.bD,A.qU,A.qU,D.bl4],x.O)
D.cHX=w([0,0.32,0.7,1],x.x)
D.bZL=new B.a9(A.az,A.aC,A.x,D.d3F,D.cHX,null)
D.b0w=new B.o(null,null,null,null,null,D.bZL,A.n)
D.bpj=new B.kS(D.b0w,A.bf,null,null)
D.bqr=new B.mn(1,1,null,null,null,A.bm,null)
D.bqu=new B.mn(1,null,null,null,null,D.Xy,null)
D.bqY=new B.ba(125e4)
D.br3=new B.ba(17e4)
D.brd=new B.ba(35964e8)
D.brj=new B.ba(55e4)
D.brn=new B.ba(68e4)
D.brO=new B.ij(0,0,0,5)
D.bs4=new B.R(0,16,16,0)
D.bsf=new B.R(0,36,0,36)
D.bsm=new B.R(0,54,0,0)
D.bst=new B.R(10,0,10,3)
D.bsE=new B.ij(10,16,10,10)
D.bsQ=new B.R(10,6,4,6)
D.bsT=new B.R(10,8,10,6)
D.ahR=new B.R(11,8,11,11)
D.bsY=new B.R(12,0,12,24)
D.bt9=new B.R(12,12,12,4)
D.btc=new B.R(12,12,8,12)
D.btr=new B.R(12,8,8,12)
D.btO=new B.R(14,14,14,0)
D.btT=new B.R(14,14,14,90)
D.bub=new B.R(16,10,16,16)
D.buc=new B.R(16,10,16,20)
D.aiF=new B.R(16,6,16,28)
D.buL=new B.R(18,0,18,10)
D.buN=new B.R(18,0,18,30)
D.buP=new B.R(18,10,18,12)
D.buQ=new B.R(18,10,18,14)
D.bv6=new B.R(18,16,14,18)
D.bvb=new B.R(18,18,18,12)
D.bvh=new B.R(18,26,18,12)
D.bvm=new B.R(18,34,18,34)
D.bvn=new B.R(18,4,18,14)
D.bvt=new B.R(18,8,18,24)
D.bvL=new B.R(20,16,14,4)
D.bvQ=new B.R(20,18,12,4)
D.bvV=new B.R(20,20,12,20)
D.bvY=new B.R(20,22,20,20)
D.bw2=new B.R(20,6,20,6)
D.bwc=new B.R(22,18,22,18)
D.bwk=new B.R(22,24,22,0)
D.bwn=new B.R(22,24,22,4)
D.bwv=new B.R(22,60,22,22)
D.bwB=new B.R(24,24,24,22)
D.bwL=new B.R(26,10,60,10)
D.bwT=new B.R(28,44,28,44)
D.bx9=new B.R(32,44,32,44)
D.bxh=new B.R(38,30,38,20)
D.bxm=new B.R(4,0,0,6)
D.bxy=new B.ij(4,4,4,4)
D.bxY=new B.ij(6,5,6,5)
D.by1=new B.R(6,6,8,6)
D.byc=new B.R(8,14,8,14)
D.byd=new B.R(8,22,8,22)
D.byl=new B.R(8,6,12,6)
D.byu=new B.R(8,8,8,4)
D.ajy=new B.R(9,9,9,6)
D.byF=new B.ij(2.5,2.5,2.5,2.5)
D.byG=new B.R(10.5,0,10.5,0)
D.byH=new B.R(7,1.5,7,1.5)
D.cTh=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.byX=new B.yY(null,null,D.cTh,A.Az)
D.cQh=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.byY=new B.yY(null,null,D.cQh,A.Az)
D.aRz=new B.H(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new B.y("WORD DESIGN",null,D.aRz,null,null,null,null,null,null,null,null,null)
D.bzw=new B.bB(1,A.bg,D.fFw,null)
D.fFb=new B.y("Slides database",null,Aa.rW,null,null,null,null,null,null,null,null,null)
D.fCp=new B.y("Admin only \xb7 keep as many as you like",null,U.aR3,null,null,null,null,null,null,null,null,null)
D.djb=w([D.fFb,A.bC,D.fCp],x.p)
D.bo9=new B.fn(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.djb,null)
D.bzz=new B.bB(1,A.bg,D.bo9,null)
D.fwQ=new B.y("NGMY logo",null,A.fU,null,null,null,null,null,null,null,null,null)
D.bzC=new B.bB(1,A.bg,D.fwQ,null)
D.fe_=new B.H(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new B.y("TALK TO THE EDITOR",null,D.fe_,null,null,null,null,null,null,null,null,null)
D.bzT=new B.bB(1,A.bg,D.fHv,null)
D.fqF=new B.y("Tell the AI what to change",null,Aa.rW,null,null,null,null,null,null,null,null,null)
D.bAd=new B.bB(1,A.bg,D.fqF,null)
D.bB5=new B.DM(!0,"video/mp4")
D.fch=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foI=new B.y("Move presentations between devices",null,D.fch,null,null,null,!1,null,null,1,null,null)
D.bB9=new B.qq(A.e_,A.a3,A.f,D.foI,null)
D.fpS=new B.y("Edit in Slides",null,A.jb,null,null,null,null,null,null,null,null,null)
D.bBa=new B.qq(A.e_,A.A,A.f,D.fpS,null)
D.bBp=new B.dq(1,A.co,D.bBa,null)
D.a_V=new B.a0(60988,"MaterialIcons",!1)
D.bEO=new B.a0(61352,"MaterialIcons",!1)
D.al6=new B.a0(61531,"MaterialIcons",!1)
D.bG2=new B.a0(63062,"MaterialIcons",!1)
D.bGa=new B.a0(63109,"MaterialIcons",!1)
D.bGm=new B.a0(63206,"MaterialIcons",!1)
D.alR=new B.a0(63238,"MaterialIcons",!1)
D.a0p=new B.a0(63365,"MaterialIcons",!1)
D.a0q=new B.a0(63367,"MaterialIcons",!1)
D.a0r=new B.a0(63368,"MaterialIcons",!1)
D.am2=new B.a0(63384,"MaterialIcons",!1)
D.bGV=new B.a0(63525,"MaterialIcons",!1)
D.bGY=new B.a0(63568,"MaterialIcons",!1)
D.bHi=new B.a0(983072,"MaterialIcons",!1)
D.bHH=new B.a0(983271,"MaterialIcons",!0)
D.ana=new B.a0(983965,"MaterialIcons",!1)
D.anb=new B.a0(983966,"MaterialIcons",!1)
D.bIF=new B.a0(984592,"MaterialIcons",!1)
D.bIX=new B.ae(A.u2,16,A.aA,null,null,null)
D.bJ3=new B.ae(A.mC,null,A.c,null,null,null)
D.anl=new B.ae(A.q8,18,A.c,null,null,null)
D.bJk=new B.ae(A.BG,18,O.lm,null,null,null)
D.bK_=new B.ae(A.jt,11,null,null,null,null)
D.bK9=new B.ae(A.a0a,null,A.et,null,null,null)
D.bKI=new B.ae(A.rh,18,A.aA,null,null,null)
D.bKO=new B.ae(A2.BV,14,null,null,null,null)
D.bKP=new B.ae(A.e9,28,A.c7,null,null,null)
D.bL0=new B.ae(A.q9,20,A.c,null,null,null)
D.bL7=new B.ae(A.yt,null,null,null,null,null)
D.bLd=new B.ae(A.j4,18,A.hn,null,null,null)
D.bLi=new B.ae(A.lr,null,null,null,null,null)
D.bG5=new B.a0(63065,"MaterialIcons",!1)
D.bLW=new B.ae(D.bG5,15,A.c,null,null,null)
D.bGb=new B.a0(63113,"MaterialIcons",!1)
D.bM1=new B.ae(D.bGb,null,A.ad,null,null,null)
D.bMp=new B.ae(A.u_,22,A.bM,null,null,null)
D.bMJ=new B.ae(A.vR,18,null,null,null,null)
D.bMP=new B.ae(A.BZ,12,A.c,null,null,null)
D.bIh=new B.a0(983687,"MaterialIcons",!1)
D.bN_=new B.ae(D.bIh,null,A.bj,null,null,null)
D.bN7=new B.ae(A.hq,null,A.bj,null,null,null)
D.bNq=new B.ae(A.p2,22,A.c,null,null,null)
D.bNu=new B.ae(A.cB,13,A.c,null,null,null)
D.bNA=new B.ae(A.e9,26,A.av,null,null,null)
D.bND=new B.ae(A.rm,26,A.c,null,null,null)
D.Og=new B.ae(A.jt,8,A.c,null,null,null)
D.bNW=new B.ae(A.q8,40,A.c,null,null,null)
D.bNX=new B.ae(A.bDL,null,null,null,null,null)
D.bO0=new B.ae(A.ub,20,null,null,null,null)
D.bIg=new B.a0(983683,"MaterialIcons",!1)
D.bOa=new B.ae(D.bIg,null,A.b_,null,null,null)
D.bOb=new B.ae(A.jt,16,A.bj,null,null,null)
D.bOw=new B.ae(A.rn,null,null,null,null,null)
D.anS=new B.ae(A.vT,22,A.c,null,null,null)
D.bOA=new B.ae(A.dY,17,A.c,null,null,null)
D.anT=new B.ae(A.jt,9,A.c,null,null,null)
D.bOF=new B.ae(A.vO,null,null,null,null,null)
D.bE1=new B.a0(57744,"MaterialIcons",!1)
D.bOM=new B.ae(D.bE1,null,null,null,null,null)
D.bOP=new B.ae(A.vO,16,null,null,null,null)
D.bIO=new B.a0(985181,"MaterialIcons",!1)
D.GJ=new B.ae(D.bIO,null,null,null,null,null)
D.bP0=new B.ae(A.lr,16,A.bM,null,null,null)
D.bI8=new B.a0(983615,"MaterialIcons",!1)
D.bP2=new B.ae(D.bI8,12,A.c,null,null,null)
D.anZ=new B.ae(A.yb,16,null,null,null,null)
D.bPa=new B.ae(A.dY,21,A.c,null,null,null)
D.bPf=new B.ae(A.hq,17,A.c,null,null,null)
D.bPg=new B.ae(A.u_,null,null,null,null,null)
D.bPx=new B.ae(A.a11,20,A.aA,null,null,null)
D.bPM=new B.ae(A.o8,22,E.n6,null,null,null)
D.bPT=new B.ae(A.q7,13,A.ad,null,null,null)
D.bPV=new B.ae(A.amX,20,A.aA,null,null,null)
D.bDJ=new B.a0(57495,"MaterialIcons",!1)
D.bQ_=new B.ae(D.bDJ,null,null,null,null,null)
D.bQ3=new B.ae(A.o9,18,A.c,null,null,null)
D.bQp=new B.ae(A.uf,28,A.c,null,null,null)
D.bQA=new B.ae(D.alR,null,A.aE,null,null,null)
D.bQB=new B.ae(A.q9,22,A.c,null,null,null)
D.ao7=new B.ae(A.a_R,16,null,null,null,null)
D.bRm=new B.ae(A.u_,32,A.c,null,null,null)
D.bS5=new B.ae(A.j6,22,A.c,null,null,null)
D.bS9=new B.ae(A.rm,22,A.ad,null,null,null)
D.aom=new B.ae(A.u2,null,A.bU,null,null,null)
D.bT3=new B.ae(A.u1,18,null,null,null,null)
D.bTF=new B.ae(A.dY,18,A.bH,null,null,null)
D.a1r=new B.ae(A.cB,18,A.aA,null,null,null)
D.bTL=new B.ae(A.amR,null,null,null,null,null)
D.bUb=new B.e4(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aRm,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.f4q=new B.H(!0,A.bK,null,null,null,null,null,A.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bUt=new B.e4(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f4q,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.bUU=new B.e4(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.cX8=w([A.dM,A.aE],x.O)
D.bWY=new B.a9(A.a3,A.a8,A.x,D.cX8,null,null)
D.bX9=new B.a9(A.b1,A.b5,A.Uq,A.avs,null,null)
D.b8Z=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bdb=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bge=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.bb8=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cHZ=w([D.b8Z,D.bdb,D.bge,D.bb8],x.O)
D.bXs=new B.a9(A.az,A.aC,A.x,D.cHZ,A.Hh,null)
D.djk=w([A.ct,A.bE,A.b6],x.O)
D.bXu=new B.a9(A.b1,A.b5,A.Uq,D.djk,null,null)
D.dkK=w([A.bj,A.cb],x.O)
D.bXy=new B.a9(A.a3,A.a8,A.x,D.dkK,null,null)
D.dfH=w([A.hm,A.d5,A.aF],x.O)
D.bXA=new B.a9(A.az,A.aC,A.x,D.dfH,null,null)
D.d26=w([A.cT,A.fd],x.O)
D.bXE=new B.a9(A.a3,A.a8,A.x,D.d26,null,null)
D.djd=w([O.lm,A.d5],x.O)
D.ap7=new B.a9(A.a3,A.a8,A.x,D.djd,null,null)
D.bdN=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dja=w([D.bdN,D.xz,A.c0],x.O)
D.bXJ=new B.a9(A.a3,A.a8,A.x,D.dja,null,null)
D.cYO=w([A.b0,A.cS,A.ew],x.O)
D.bXK=new B.a9(A.az,A.aC,A.x,D.cYO,null,null)
D.Ov=new B.a9(A.a3,A.a8,A.x,A.Hu,null,null)
D.blT=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cB_=w([D.blT,A.c0,A.jk],x.O)
D.apc=new B.a9(A.az,A.aC,A.x,D.cB_,null,null)
D.d7p=w([A.vj,A.ay,D.AW],x.O)
D.bYL=new B.a9(A.a3,A.a8,A.x,D.d7p,null,null)
D.bnb=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bc2=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bhe=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cXV=w([D.bnb,D.bc2,D.bhe],x.O)
D.apd=new B.a9(A.a3,A.a8,A.x,D.cXV,null,null)
D.bdP=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c_J=w([Au.agB,D.bdP],x.O)
D.bYU=new B.a9(A.b1,A.b5,A.x,D.c_J,null,null)
D.cW0=w([A.n5,A.bz],x.O)
D.bYY=new B.a9(A.b1,A.b5,A.x,D.cW0,null,null)
D.dcw=w([A.aE,A.dP],x.O)
D.bZ3=new B.a9(A.a3,A.a8,A.x,D.dcw,null,null)
D.afD=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.axb=w([D.afD,D.ji,D.L0],x.O)
D.bZv=new B.a9(A.az,A.aC,A.x,D.axb,null,null)
D.cAS=w([A.dy,A.dI],x.O)
D.bZG=new B.a9(A.b1,A.b5,A.x,D.cAS,null,null)
D.d9x=w([A.vf,Ax.ES],x.O)
D.c_v=new B.a9(A.a3,A.a8,A.x,D.d9x,null,null)
D.fym=new B.y("Which Bio link?",null,A.cD,null,null,null,null,null,null,null,null,null)
D.c_G=new B.pQ(null,D.fym,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yT=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5n=new C.kV(2,"elegantNavy")
D.hdQ=w([A.Xl,D.ji,A.c0],x.O)
D.jP=new C.xz(0,"classic")
D.a5a=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5n,4294967035,4279378237,4290283019,D.jP)
D.aGs=new C.kV(3,"elegantGold")
D.b8w=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b9t=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.aeb=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hdi=w([D.b8w,D.b9t,D.aeb],x.O)
D.a58=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGs,4294966515,4281016592,4289102906,D.jP)
D.dGg=new C.kV(22,"goldRibbon")
D.hde=w([A.Xl,D.ji,A.i4],x.O)
D.a51=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dGg,4294967035,4279378237,4291404327,D.jP)
D.dGh=new C.kV(23,"goldBaroque")
D.aeQ=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hdk=w([D.aeQ,A.ay,A.jk],x.O)
D.a52=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dGh,4294964964,4283053072,4292128567,D.jP)
D.dGj=new C.kV(4,"elegantEmerald")
D.baB=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bbv=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hdq=w([D.baB,D.bbv,A.i4],x.O)
D.a53=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dGj,4294376440,4279122734,4291404327,D.jP)
D.dGk=new C.kV(5,"elegantBurgundy")
D.bfd=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hdx=w([D.bfd,A.ado,A.i4],x.O)
D.a56=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dGk,4294965238,4283043359,4291404327,D.jP)
D.dGd=new C.kV(19,"goldFiligree")
D.LG=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hdl=w([D.LG,A.ay,A.jk],x.O)
D.a54=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dGd,4294966259,4279378237,4292128567,D.jP)
D.dGe=new C.kV(20,"goldLaurel")
D.blJ=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hdy=w([A.KT,A.i4,D.blJ],x.O)
D.a55=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dGe,4294966776,4282000405,4291404327,D.jP)
D.dGf=new C.kV(21,"goldCrest")
D.adh=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.blQ=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hdn=w([D.adh,A.ay,D.blQ],x.O)
D.a59=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dGf,4294965484,4283053072,4292128567,D.jP)
D.dGi=new C.kV(24,"goldStar")
D.bn3=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hdr=w([D.bn3,A.ay,D.ji],x.O)
D.a57=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dGi,4294966518,4279378237,4292128567,D.jP)
D.GU=w([D.a5a,D.a58,D.a51,D.a52,D.a53,D.a56,D.a54,D.a55,D.a59,D.a57],x.h)
D.qm=new C.my(0,"blank")
D.Sa=new C.my(1,"title")
D.mK=new C.my(2,"titleContent")
D.e_U=new C.my(3,"twoColumn")
D.CX=new C.my(4,"section")
D.e_V=new C.my(5,"comparison")
D.I4=new C.my(6,"flashcard")
D.I5=new C.my(7,"quiz")
D.I6=new C.my(8,"worksheet")
D.apA=w([D.qm,D.Sa,D.mK,D.e_U,D.CX,D.e_V,D.I4,D.I5,D.I6],B.ax("O<my>"))
D.aye=w([An.WI,A.dI],x.O)
D.kB=w([A.c0,A.bM,A.i3,A.hN,D.AW],x.O)
D.dC9=new C.j1("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aye,D.kB)
D.bm0=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bfb=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cWd=w([D.bm0,D.bfb],x.O)
D.dC0=new C.j1("confetti","Golden Confetti","Together we rise",D.cWd,D.kB)
D.cTm=w([A.nO,A.Wm],x.O)
D.dC1=new C.j1("crown","Crown of Glory","Built for our community",D.cTm,D.kB)
D.bbT=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.beR=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.d_6=w([D.bbT,D.beR],x.O)
D.ul=w([A.bK,A.aQ,A.c,A.aL,A.ak],x.O)
D.dBW=new C.j1("aurora","Aurora Gala","A brighter future, together",D.d_6,D.ul)
D.bgg=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d9D=w([G.acU,D.bgg],x.O)
D.dCc=new C.j1("champagne","Champagne Toast","Cheers to every member",D.d9D,D.kB)
D.dCd=new C.j1("diamonds","Diamond Rain","Every member is a jewel",X.ayT,D.ul)
D.b9l=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bem=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.deZ=w([D.b9l,D.bem],x.O)
D.dBR=new C.j1("starburst","Golden Starburst","Thank you!",D.deZ,D.kB)
D.c_Q=w([A.fc,A.xt],x.O)
D.ad2=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Q2=w([A.oM,A.iC,A.vu,A.nP,D.ad2],x.O)
D.dCk=new C.j1("balloons","Luxury Balloons","Let's celebrate",D.c_Q,D.Q2)
D.cSF=w([A.Ww,A.w],x.O)
D.dC8=new C.j1("galaxy","Galaxy Spiral","The sky is not the limit",D.cSF,D.ul)
D.bk4=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d6b=w([A.ku,D.bk4],x.O)
D.dC3=new C.j1("redcarpet","Red Carpet","Tonight we shine",D.d6b,D.kB)
D.bhT=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bg3=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.daz=w([D.bhT,D.bg3],x.O)
D.dBT=new C.j1("coins","Gold Coin Rain","Every contribution counts",D.daz,D.kB)
D.dhC=w([A.dy,A.hM],x.O)
D.dBZ=new C.j1("lanterns","Sky Lanterns","Lighting the way together",D.dhC,D.kB)
D.bcS=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cQC=w([A.xv,D.bcS],x.O)
D.dBV=new C.j1("hearts","Floating Hearts","Made with love",D.cQC,D.Q2)
D.b9T=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.baH=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dj8=w([D.b9T,D.baH],x.O)
D.dCj=new C.j1("petals","Rose Petals","Thank you, from our hearts",D.dj8,D.Q2)
D.bl2=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dfi=w([A.lk,D.bl2],x.O)
D.dBQ=new C.j1("butterflies","Golden Butterflies","New beginnings",D.dfi,D.kB)
D.bhb=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cRB=w([D.bhb,A.w],x.O)
D.dCb=new C.j1("neon","Neon Night","Let's go!",D.cRB,D.ul)
D.be1=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.dcH=w([A.Lh,D.be1],x.O)
D.dCe=new C.j1("disco","Disco Ball","Party time",D.dcH,D.ul)
D.bhJ=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dce=w([A.hm,D.bhJ],x.O)
D.dBU=new C.j1("sunrise","Golden Sunrise","A new day for our community",D.dce,D.kB)
D.dbR=w([A.qX,A.dI],x.O)
D.dCf=new C.j1("pearls","Ocean Pearls","Deep roots, bright future",D.dbR,D.ul)
D.bbY=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dc4=w([D.bbY,A.dI],x.O)
D.dCi=new C.j1("snow","Winter Gala","Warm wishes to all",D.dc4,D.ul)
D.b8G=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9E=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.di1=w([D.b8G,D.b9E],x.O)
D.dC7=new C.j1("laurel","Laurel Victory","We did it together",D.di1,D.kB)
D.b8v=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.beN=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cPF=w([D.b8v,D.beN],x.O)
D.dCh=new C.j1("ribbons","Silk Ribbons","Elegance in every step",D.cPF,D.kB)
D.bfN=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cAP=w([G.AV,D.bfN],x.O)
D.dC4=new C.j1("kente","Kente Pride","Proud of our roots",D.cAP,D.kB)
D.bir=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.blm=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d0O=w([D.bir,D.blm],x.O)
D.dC_=new C.j1("trophy","Trophy Shine","Winners together",D.d0O,D.kB)
D.dca=w([Ao.L5,A.w],x.O)
D.dBS=new C.j1("shooting","Shooting Stars","Make a wish",D.dca,D.ul)
D.b8N=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.agp=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dii=w([D.b8N,D.agp],x.O)
D.dC5=new C.j1("bokeh","Golden Bokeh","Shine bright",D.dii,D.kB)
D.b9a=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d71=w([D.b9a,A.w],x.O)
D.dBY=new C.j1("orbits","Golden Orbits","Always moving forward",D.d71,D.kB)
D.bl3=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d3y=w([A.ae7,D.bl3],x.O)
D.dC2=new C.j1("flowers","Blooming Garden","Growing together",D.d3y,D.Q2)
D.b8X=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b9y=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dh6=w([D.b8X,D.b9y],x.O)
D.dBX=new C.j1("music","Music Party","Celebrate with us",D.dh6,D.ul)
D.baq=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.blM=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cQP=w([D.baq,D.blM],x.O)
D.dCg=new C.j1("mandala","Royal Mandala","Harmony and unity",D.cQP,D.kB)
D.d3D=w([G.AV,D.agp],x.O)
D.dCa=new C.j1("sparklers","Golden Sparklers","Light up the night",D.d3D,D.kB)
D.dC6=new C.j1("city","City Lights","The whole city celebrates",D.aye,D.kB)
D.H2=w([D.dC9,D.dC0,D.dC1,D.dBW,D.dCc,D.dCd,D.dBR,D.dCk,D.dC8,D.dC3,D.dBT,D.dBZ,D.dBV,D.dCj,D.dBQ,D.dCb,D.dCe,D.dBU,D.dCf,D.dCi,D.dC7,D.dCh,D.dC4,D.dC_,D.dBS,D.dC5,D.dBY,D.dC2,D.dBX,D.dCg,D.dCa,D.dC6],B.ax("O<j1>"))
D.ept=new B.z("","No ring")
D.eF5=new B.z("platinum","Platinum")
D.eBm=new B.z("glow","Glow")
D.et1=new B.z("double","Double line")
D.erW=new B.z("framed","Gallery frame")
D.ep2=new B.z("rosegold","Rose gold")
D.eC7=new B.z("jewels","Jeweled")
D.eyO=new B.z("aurora","Aurora")
D.Ch=w([D.ept,A.a6D,D.eF5,D.eBm,I.aN_,D.et1,A.a6G,D.erW,D.ep2,D.eC7,D.eyO],x.L)
D.ckg=w([D.a54,D.a55,D.a59,D.a51,D.a52,D.a57],x.h)
D.bPo=new B.ae(G.akH,16,null,null,null,null)
D.b3L=new B.vv(A.bi,D.bPo,null,x.U)
D.bEa=new B.a0(58027,"MaterialIcons",!1)
D.bJ2=new B.ae(D.bEa,16,null,null,null,null)
D.b3J=new B.vv(A.L,D.bJ2,null,x.U)
D.bEb=new B.a0(58030,"MaterialIcons",!1)
D.bN5=new B.ae(D.bEb,16,null,null,null,null)
D.b3M=new B.vv(A.dN,D.bN5,null,x.U)
D.cqu=w([D.b3L,D.b3J,D.b3M],B.ax("O<vv<q4>>"))
D.cy9=w([A.AZ,A.hj],x.O)
D.cya=w([A.b0,A.bc,A.ew],x.O)
D.PS=w([A.bM,A.hN,A.i3,A.ay,A.nP],x.O)
D.cAV=w([A.c0,D.ji,D.L0],x.O)
D.cBs=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.emQ=new B.z(4278913286,4280030216)
D.en7=new B.z(4279373061,4278518787)
D.ene=new B.z(4279898630,4278847235)
D.d0a=w([D.emQ,D.en7,D.ene],x.n)
D.cWT=w(["\u265b","\u269c","\u2726"],x.s)
D.dGb=new C.xB("Royal Onyx & Gold",D.d0a,4292128567,4294370209,4294965479,3874020544,D.cWT)
D.emD=new B.z(4278326799,4278598442)
D.emF=new B.z(4278395929,4278258953)
D.emM=new B.z(4278599728,4278327826)
D.dht=w([D.emD,D.emF,D.emM],x.n)
D.cRt=w(["\u269c","\u2756","\u2727"],x.s)
D.dG8=new C.xB("Imperial Emerald",D.dht,4293050997,4294699968,4294180856,3872254170,D.cRt)
D.emG=new B.z(4278455076,4278918747)
D.emL=new B.z(4278587439,4278322714)
D.emZ=new B.z(4279051376,4278455076)
D.dfD=w([D.emG,D.emL,D.emZ],x.n)
D.d7H=w(["\u2654","\u2726","\u2748"],x.s)
D.dG2=new C.xB("Sapphire Crown",D.dfD,4291417834,4294967295,4294310143,3871986666,D.d7H)
D.enc=new B.z(4279894534,4283041554)
D.eno=new B.z(4281008906,4279042307)
D.enw=new B.z(4284221976,4279894534)
D.dln=w([D.enc,D.eno,D.enw],x.n)
D.cSO=w(["\u265b","\u2766","\u2726"],x.s)
D.dG4=new C.xB("Ruby Throne",D.dln,4293378685,4294963145,4294964466,3874213833,D.cSO)
D.en6=new B.z(4279371039,4281995100)
D.eng=new B.z(4280092723,4278714896)
D.ent=new B.z(4283045242,4279371039)
D.dhQ=w([D.en6,D.eng,D.ent],x.n)
D.dg_=w(["\u2655","\u2756","\u2727"],x.s)
D.dG9=new C.xB("Amethyst Palace",D.dhQ,4293314984,4294963421,4294702591,3873229802,D.dg_)
D.emI=new B.z(4278519045,4280032287)
D.en_=new B.z(4279111184,4278321666)
D.enl=new B.z(4280492839,4278716426)
D.det=w([D.emI,D.en_,D.enl],x.n)
D.d5Y=w(["\u2726","\u25c6","\u2742"],x.s)
D.dG6=new C.xB("Obsidian & Platinum",D.det,4293256418,4294967295,4294638330,3872378836,D.d5Y)
D.end=new B.z(4279896588,4282194463)
D.enm=new B.z(4280553487,4279043334)
D.enu=new B.z(4283048488,4279896588)
D.d5r=w([D.end,D.enm,D.enu],x.n)
D.djA=w(["\u2766","\u273f","\u2727"],x.s)
D.dG3=new C.xB("Rose Gold Velvet",D.d5r,4293440672,4294960345,4294964979,3874214602,D.djA)
D.emJ=new B.z(4278520340,4279180595)
D.emO=new B.z(4278718495,4278322443)
D.ena=new B.z(4279510591,4278520340)
D.cHH=w([D.emJ,D.emO,D.ena],x.n)
D.d6G=w(["\u269c","\u2736","\u2756"],x.s)
D.dG7=new C.xB("Midnight Brass",D.cHH,4291405148,4293975208,4294439914,3872837564,D.d6G)
D.enJ=new B.z(4294703086,4293780428)
D.enF=new B.z(4294307549,4293187253)
D.enK=new B.z(4294966517,4293977807)
D.cUV=w([D.enJ,D.enF,D.enK],x.n)
D.d75=w(["\u269c","\u265b","\u2726"],x.s)
D.dGa=new C.xB("Ivory Marble & Gold",D.cUV,4289760572,4286209048,4280951062,3863625518,D.d75)
D.emU=new B.z(4278978566,4280555024)
D.en9=new B.z(4279504137,4278518530)
D.enq=new B.z(4281211923,4278978566)
D.cSE=w([D.emU,D.en9,D.enq],x.n)
D.dgK=w(["\u2742","\u2726","\u265c"],x.s)
D.dG5=new C.xB("Onyx & Copper",D.cSE,4291856987,4294365880,4294964718,3873885630,D.dgK)
D.cBA=w([D.dGb,D.dG8,D.dG2,D.dG4,D.dG9,D.dG6,D.dG3,D.dG7,D.dGa,D.dG5],B.ax("O<xB>"))
D.cDV=w([A.ay,D.AW,A.hN],x.O)
D.ev8=new B.z("Original",null)
D.evg=new B.z("Wide 16:9",1.7777777777777777)
D.exv=new B.z("Landscape 3:2",1.5)
D.euB=new B.z("Photo 4:3",1.3333333333333333)
D.ewk=new B.z("Square",1)
D.eIH=new B.z("Portrait 3:4",0.75)
D.avB=w([D.ev8,D.evg,D.exv,D.euB,D.ewk,D.eIH],B.ax("O<+(m,K?)>"))
D.avC=w([A.hN,A.bX,A.b8,A.bu],x.O)
D.exG=new B.z("","Original")
D.ezy=new B.z("circle","Circle")
D.eFQ=new B.z("rounded","Rounded")
D.eGK=new B.z("triangle","Triangle")
D.eBB=new B.z("hexagon","Hexagon")
D.ezY=new B.z("diamond","Diamond")
D.eyN=new B.z("arch","Arch")
D.Cm=w([D.exG,D.ezy,D.eFQ,D.eGK,D.eBB,D.ezY,D.eyN],x.L)
D.dBf=new C.lf("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kv,A.d8,A.aJ)
D.dBv=new C.lf("campus_green","Campus Green","Normal",A.b_,A.n3,A.tt,A.fY,A.ee)
D.dBm=new C.lf("warm_sand","Warm Sand","Normal",A.dS,A.i3,A.bM,A.ij,A.nU)
D.dBt=new C.lf("slate_minimal","Slate Minimal","Normal",A.br,A.aQ,A.aL,A.M,A.aJ)
D.dBe=new C.lf("coral_fresh","Coral Fresh","Normal",A.cc,A.ii,A.qR,A.k1,A.tm)
D.dBu=new C.lf("lavender_calm","Lavender Calm","Normal",A.b6,A.pC,A.AK,A.oK,A.jg)
D.dBg=new C.lf("ocean_breeze","Ocean Breeze","Normal",A.fd,A.r1,A.ti,A.to,A.nV)
D.afJ=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dBr=new C.lf("berry_pop","Berry Pop","Normal",A.f0,D.afJ,A.kp,G.XR,A.Fc)
D.dBh=new C.lf("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dy,A.kp,A.cr)
D.dBq=new C.lf("executive_navy","Executive Navy","Professional",A.d_,A.af4,A.d8,A.li,A.bK)
D.dBo=new C.lf("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aQ,A.cr)
D.dBi=new C.lf("corporate_steel","Corporate Steel","Professional",A.n1,A.M,A.mo,A.f9,A.bK)
D.dBl=new C.lf("gold_luxe","Gold Luxe","Luxury",A.n0,A.dH,A.oL,A.ll,A.bM)
D.bhO=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dBp=new C.lf("rose_gold_elite","Rose Gold Elite","Luxury",A.hj,D.bhO,A.XF,A.iC,A.nP)
D.dBs=new C.lf("platinum_night","Platinum Night","Luxury",A.cr,A.dI,A.bm,A.aQ,A.aL)
D.dBw=new C.lf("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pI,A.f2,A.pP,A.jD)
D.dBd=new C.lf("royal_purple","Royal Purple","Luxury",A.n2,A.WO,A.jg,A.kp,A.KS)
D.dBn=new C.lf("neon_pitch","Neon Pitch","Bold",A.b8,A.dI,A.M,A.b3,A.aL)
D.dBk=new C.lf("crimson_impact","Crimson Impact","Bold",A.bz,A.ku,A.es,A.tF,A.f1)
D.dBj=new C.lf("sunset_gallery","Sunset Gallery","Bold",A.fl,A.tm,A.k1,A.qR,A.mm)
D.Hb=w([D.dBf,D.dBv,D.dBm,D.dBt,D.dBe,D.dBu,D.dBg,D.dBr,D.dBh,D.dBq,D.dBo,D.dBi,D.dBl,D.dBp,D.dBs,D.dBw,D.dBd,D.dBn,D.dBk,D.dBj],B.ax("O<lf>"))
D.cPo=w([A.c0,D.ji],x.O)
D.d5I=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eyz=new B.z("Faces & people",D.d5I)
D.cDZ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.elx=new B.z("Ideas & work",D.cDZ)
D.cXn=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eBG=new B.z("Nature",D.cXn)
D.d5R=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ev6=new B.z("Places & things",D.d5R)
D.d_J=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eyS=new B.z("Symbols",D.d_J)
D.cPu=w([D.eyz,D.elx,D.eBG,D.ev6,D.eyS],B.ax("O<+(m,ai<m>)>"))
D.b91=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cPQ=w([A.c0,D.aeb,D.b91],x.O)
D.b36=new B.ac(0,A.G,A.KP,A.aHh,40)
D.b2N=new B.ac(0,A.G,A.nS,A.en,8)
D.cQ2=w([D.b36,D.b2N],x.V)
D.cQx=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aw1=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2E=w([A.hN,A.ew,A.bz,A.aw,A.cc],x.O)
D.cRn=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aer=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cRy=w([A.Xu,D.aer,A.Xu],x.O)
D.cRE=w([A.i4,D.ji,D.L0],x.O)
D.euU=new B.z(A.bi,D.a0q)
D.ewf=new B.z(A.L,D.a0p)
D.eqd=new B.z(A.dN,D.a0r)
D.cSz=w([D.euU,D.ewf,D.eqd],B.ax("O<+(q4,a0)>"))
D.cR=new C.IO(0,"text")
D.lA=new C.IO(1,"image")
D.f5=new C.IO(2,"shape")
D.S9=new C.IO(3,"pdf")
D.l8=new C.IO(4,"signature")
D.a5u=new C.IO(5,"bio")
D.cTr=w([D.cR,D.lA,D.f5,D.S9,D.l8,D.a5u],B.ax("O<IO>"))
D.cTs=w([A.bo,A.cF],B.ax("O<HJ>"))
D.cU2=w(["School","Documents","Sign & present"],x.s)
D.b3b=new B.ac(0,A.G,A.agf,A.uD,28)
D.cUn=w([D.b3b],x.V)
D.cUG=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Qa=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.awq=w([A.hN,A.Fb,A.aL,A.c,A.oM,A.ay],x.O)
D.eI5=new B.z(0.1,0.08)
D.eBE=new B.z(0.3,0.05)
D.epH=new B.z(0.55,0.1)
D.etU=new B.z(0.8,0.06)
D.ewZ=new B.z(0.92,0.16)
D.ewu=new B.z(0.2,0.2)
D.eum=new B.z(0.7,0.22)
D.eAk=new B.z(0.05,0.4)
D.exn=new B.z(0.95,0.45)
D.eqs=new B.z(0.12,0.7)
D.esG=new B.z(0.88,0.75)
D.esO=new B.z(0.4,0.9)
D.eo_=new B.z(0.65,0.93)
D.etx=new B.z(0.25,0.97)
D.euR=new B.z(0.85,0.9)
D.erh=new B.z(0.5,0.04)
D.cW8=w([D.eI5,D.eBE,D.epH,D.etU,D.ewZ,D.ewu,D.eum,D.eAk,D.exn,D.eqs,D.esG,D.esO,D.eo_,D.etx,D.euR,D.erh],x.G)
D.cWf=w([A.c,A.hj,A.aO,A.aV],x.O)
D.e1w=new C.jH("office_blue","Office Blue",A.bj,A.d8,A.aJ,A.c,A.kv)
D.e1H=new C.jH("campus_green","Campus Green",A.b_,A.fY,A.ee,A.n3,A.tt)
D.e1x=new C.jH("sunset","Sunset",A.fl,A.k1,A.nU,A.ii,A.qR)
D.e1y=new C.jH("midnight","Midnight",A.aE,A.kp,A.cr,A.M,A.dy)
D.e1J=new C.jH("classic","Classic",A.d5,A.dH,A.lN,A.i3,A.fL)
D.e1G=new C.jH("rose_gold","Rose Gold",A.hj,A.xw,A.xv,A.vu,A.AZ)
D.e1r=new C.jH("ocean_teal","Ocean Teal",A.fd,A.to,A.nV,A.r1,A.ti)
D.e1q=new C.jH("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aQ,A.aL)
D.e1p=new C.jH("neon_night","Neon Night",A.b8,A.b3,A.aL,A.dI,A.M)
D.e1B=new C.jH("lavender","Lavender",A.b6,A.oK,A.jg,A.pC,A.AK)
D.e1D=new C.jH("coral","Coral",A.cc,A.k1,A.tm,A.ii,A.mm)
D.e1s=new C.jH("forest","Forest",A.hl,A.dX,A.cs,A.lO,A.et)
D.e1t=new C.jH("berry","Berry",A.f0,G.XR,A.Fc,D.afJ,A.kp)
D.e1A=new C.jH("sand","Sand",A.dS,A.ij,A.nU,A.i3,A.bM)
D.e1F=new C.jH("ice","Ice",A.n1,A.Li,A.aJ,A.mZ,A.f9)
D.e1v=new C.jH("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bm,A.M)
D.e1o=new C.jH("mint","Mint",A.aV,A.fy,A.fY,A.lO,A.pP)
D.e1E=new C.jH("crimson","Crimson",A.bz,A.n5,A.ku,A.F9,A.tF)
D.bbu=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e1z=new C.jH("gold","Gold",A.n0,A.vf,A.oL,D.bbu,A.ll)
D.e1C=new C.jH("aqua","Aqua",A.bQ,A.F_,A.oI,A.pE,A.oN)
D.e1u=new C.jH("plum","Plum",A.n2,A.xt,A.Fc,A.EO,A.r_)
D.e1I=new C.jH("steel","Steel",A.d_,A.d8,A.bm,A.kv,A.li)
D.a2U=w([D.e1w,D.e1H,D.e1x,D.e1y,D.e1J,D.e1G,D.e1r,D.e1q,D.e1p,D.e1B,D.e1D,D.e1s,D.e1t,D.e1A,D.e1F,D.e1v,D.e1o,D.e1E,D.e1z,D.e1C,D.e1u,D.e1I],B.ax("O<jH>"))
D.cWA=w([A.c0,A.jk],x.O)
D.Sb=new C.hF(10,"rotate3d")
D.I8=new C.hF(8,"flip")
D.aGL=new C.hF(19,"spiral")
D.qn=new C.hF(16,"bounce")
D.aGO=new C.hF(9,"flipVertical")
D.cWB=w([D.Sb,D.I8,D.aGL,D.qn,D.aGO],x.i)
D.ea=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cWW=w([0.62,1],x.x)
D.cXv=w([0,0.32,0.68,1],x.x)
D.mL=new C.hF(6,"zoom")
D.ux=new C.hF(4,"slideUp")
D.uw=new C.hF(2,"slideLeft")
D.cXE=w([D.mL,D.I8,D.ux,D.Sb,D.uw],x.i)
D.cY9=w([A.bX,A.hj,A.iC,A.hN,A.c],x.O)
D.b31=new B.ac(0,A.G,D.aeF,A.uD,30)
D.cYT=w([D.b31],x.V)
D.eby=new B.v(0,-2.5)
D.ebo=new B.v(-2.5,0)
D.ea6=new B.v(2.5,0)
D.cYW=w([A.Sr,A.a5R,A.aHN,A.a5Q,D.eby,I.aHJ,D.ebo,D.ea6],x.dN)
D.Hj=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cZm=w([23,114,69,56,80,144],x.t)
D.cZO=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d_e=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d0T=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d0X=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bh=new C.uK(0,"rectangle")
D.eN=new C.uK(1,"circle")
D.l9=new C.uK(6,"hexagon")
D.d1a=w([D.bh,D.eN,D.l9],x.m)
D.of=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afQ=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d1I=w([D.afQ,A.dX],x.O)
D.epW=new B.z("","Classic")
D.eoe=new B.z("caps","Bold caps")
D.eAn=new B.z("elegant","Elegant")
D.eG8=new B.z("shadow","Shadow")
D.euf=new B.z("neon","Neon glow")
D.eEM=new B.z("outline","Outline")
D.eDX=new B.z("marker","Highlighter")
D.eGj=new B.z("stamp","Stamp")
D.eFL=new B.z("retro","Retro")
D.etd=new B.z("threed","3D")
D.eAU=new B.z("fire","Fire")
D.eBQ=new B.z("ice","Ice")
D.ezx=new B.z("chalk","Chalk")
D.ezC=new B.z("comic","Comic")
D.eGl=new B.z("sunset","Sunset")
D.eHs=new B.z("softglow","Soft glow")
D.eCO=new B.z("lowercase","Lowercase")
D.eA4=new B.z("double","Echo")
D.eHB=new B.z("whisper","Whisper")
D.axj=w([D.epW,D.eoe,D.eAn,D.eG8,D.euf,D.eEM,D.eDX,D.eGj,D.eFL,D.etd,I.aMW,D.eAU,D.eBQ,D.ezx,D.ezC,A.a6D,D.eGl,D.eHs,D.eCO,D.eA4,D.eHB],x.L)
D.d3_=w([3,5,7,10,12,15],x.t)
D.d4n=w([A.bX,A.bM,A.c,A.eC,A.ct],x.O)
D.dsT=new C.tn(10,"cardWorld")
D.CP=new C.Bx(3,"rounded")
D.dJc=new C.li("world","NGMY World",D.dsT,D.CP,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dsU=new C.tn(11,"cardSplit")
D.dJ8=new C.li("business","Business Wire",D.dsU,D.CP,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dsV=new C.tn(12,"cardBreaking")
D.dJl=new C.li("breaking","Breaking Red",D.dsV,D.CP,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dsW=new C.tn(13,"cardFeature")
D.dJe=new C.li("feature","Tech Feature",D.dsW,D.CP,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aFh=new C.tn(6,"circle")
D.aFb=new C.Bx(4,"circle")
D.dJi=new C.li("parchment","Royal Circle",D.aFh,D.aFb,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dJ7=new C.li("ocean","Blue Ocean",D.aFh,D.aFb,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dsZ=new C.tn(7,"rail")
D.aFa=new C.Bx(1,"double")
D.dJ9=new C.li("forest","Green Leaf",D.dsZ,D.aFa,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aFe=new C.tn(1,"sideBySide")
D.dJn=new C.li("herald","NGMY Herald",D.aFe,D.CP,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aFd=new C.tn(0,"classic")
D.a4H=new C.Bx(9,"shadow")
D.dJm=new C.li("daily","The Daily",D.aFd,D.a4H,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dsX=new C.tn(2,"splash")
D.aFc=new C.Bx(6,"cutCorner")
D.dJ6=new C.li("tabloid","Big Tabloid",D.dsX,D.aFc,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aFi=new C.tn(9,"minimal")
D.dJh=new C.li("modern","Modern Digest",D.aFi,D.CP,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aFf=new C.tn(3,"magazine")
D.aF9=new C.Bx(0,"plain")
D.dJd=new C.li("midnight","Midnight Edition",D.aFf,D.aF9,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dt_=new C.tn(8,"banner")
D.dJf=new C.li("metro","Metro Wire",D.dt_,D.aFc,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dsS=new C.Bx(8,"arch")
D.dJg=new C.li("sunrise","Sunrise Post",D.aFf,D.dsS,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aFg=new C.tn(5,"scrapbook")
D.dsR=new C.Bx(5,"tape")
D.dJb=new C.li("neon","Neon Beat",D.aFg,D.dsR,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dsY=new C.tn(4,"wrap")
D.dJo=new C.li("gold","Golden Press",D.dsY,D.a4H,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dJp=new C.li("minimal","Paper White",D.aFi,D.a4H,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dJa=new C.li("gazette","Fresh Gazette",D.aFd,D.aFa,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dJk=new C.li("times","Classic Times",D.aFe,D.aF9,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RH=new C.Bx(2,"polaroid")
D.dJj=new C.li("scrapbook","Memory Scrapbook",D.aFg,D.RH,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a37=w([D.dJc,D.dJ8,D.dJl,D.dJe,D.dJi,D.dJ7,D.dJ9,D.dJn,D.dJm,D.dJ6,D.dJh,D.dJd,D.dJf,D.dJg,D.dJb,D.dJo,D.dJp,D.dJa,D.dJk,D.dJj],B.ax("O<li>"))
D.d4z=w([0.45,1],x.x)
D.Hl=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d4X=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h8J=new C.oC("Original",0,1,1,0,0,0)
D.h8N=new C.oC("Black & white",0,1.1,0,0,0,0)
D.h8A=new C.oC("Noir",-0.05,1.55,0,0,0,0)
D.h8E=new C.oC("Sepia",0,1,0.25,0.9,0,0)
D.h8D=new C.oC("Vivid",0,1.15,1.6,0,0,0)
D.h8w=new C.oC("Pop",0,1.3,1.9,0,0,0)
D.h8y=new C.oC("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h8K=new C.oC("Matte",0,0.9,0.85,0,0,0.55)
D.h8F=new C.oC("Cool",0,1.05,1,-0.8,0,0)
D.h8M=new C.oC("Warm",0.03,1.05,1.1,0.8,0,0)
D.h8x=new C.oC("Golden hour",0.04,1,1.25,1,0,0)
D.h8C=new C.oC("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h8L=new C.oC("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h8B=new C.oC("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h8H=new C.oC("Retro",0,0.9,0.7,0.4,0,0.35)
D.h8G=new C.oC("Forest",0,1,1.2,-0.1,-0.45,0)
D.h8I=new C.oC("Rose",0,1,1.1,0.3,0.4,0)
D.h8z=new C.oC("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d4Y=w([D.h8J,D.h8N,D.h8A,D.h8E,D.h8D,D.h8w,D.h8y,D.h8K,D.h8F,D.h8M,D.h8x,D.h8C,D.h8L,D.h8B,D.h8H,D.h8G,D.h8I,D.h8z],B.ax("O<oC>"))
D.b8r=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d5_=w([D.afQ,A.dX,D.b8r],x.O)
D.elq=new B.z(0.12,0.3)
D.eC0=new B.z(0.26,0.75)
D.eAj=new B.z(0.8,0.22)
D.eGt=new B.z(0.9,0.7)
D.eCN=new B.z(0.5,0.15)
D.eEO=new B.z(0.65,0.85)
D.erN=new B.z(0.08,0.85)
D.d5c=w([D.elq,D.eC0,D.eAj,D.eGt,D.eCN,D.eEO,D.erN],x.G)
D.axu=w([A.b8,A.bX,A.bu,A.b0],x.O)
D.d61=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d6e=w([A.c,A.f9,A.ds,A.vh],x.O)
D.bbJ=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d7f=w([D.bbJ,D.aer],x.O)
D.d7g=w([A.vj,A.ay],x.O)
D.d7v=w([0,0.25,0.75,1],x.x)
D.d7x=w([A.xl,A.oM],x.O)
D.aGl=new C.kV(10,"kenteSunset")
D.hdg=w([D.aeQ,A.jY,A.ay],x.O)
D.dEt=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aGl,4294964964,4282000405,4279983648,D.jP)
D.aGm=new C.kV(11,"indigoMudcloth")
D.b9p=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hdu=w([D.b9p,A.aen,A.i4],x.O)
D.dEB=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aGm,4294439140,4279903102,4279903102,D.jP)
D.aGn=new C.kV(12,"adinkraRoyal")
D.bmt=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hdv=w([D.adh,D.bmt,A.ay],x.O)
D.dED=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aGn,4294965484,4285218591,4287322667,D.jP)
D.aGo=new C.kV(13,"nileLotus")
D.biJ=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bfr=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hdA=w([D.biJ,D.bfr,A.i4],x.O)
D.dEC=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGo,4294244340,4279196764,4279196764,D.jP)
D.aGp=new C.kV(14,"shweshweIvory")
D.bdD=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bcr=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b9S=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hdh=w([D.bdD,D.bcr,D.b9S],x.O)
D.dEy=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGp,4294505710,4279970378,4291058750,D.jP)
D.rF=new C.kV(15,"certIvoryNavy")
D.hdf=w([D.LG,D.ji,A.i4],x.O)
D.aFR=new C.xz(1,"ringsNdoa")
D.dEv=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rF,4294966259,4279378237,4291404327,D.aFR)
D.a5c=new C.xz(2,"coupleCards")
D.dEq=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rF,4294966259,4279378237,4291404327,D.a5c)
D.CS=new C.kV(18,"certIvoryNavyBar")
D.adg=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hdt=w([D.adg,D.ji,A.i4],x.O)
D.aFS=new C.xz(3,"kuhoweshaForm")
D.dEo=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CS,4294966519,4279378237,4291404327,D.aFS)
D.aeD=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hdN=w([D.LG,D.aeD,A.i4],x.O)
D.a5d=new C.xz(4,"mahariPande")
D.dEr=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rF,4294966259,4279904068,4291404327,D.a5d)
D.aGq=new C.kV(16,"certIvoryGreen")
D.bd1=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hdj=w([A.KT,D.bd1,A.i4],x.O)
D.aFT=new C.xz(5,"familiaMti")
D.dEx=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aGq,4294966776,4280241466,4291404327,D.aFT)
D.a5e=new C.xz(6,"ndoaSafi")
D.dEp=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CS,4294966519,4279378237,4291404327,D.a5e)
D.bha=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hdm=w([D.LG,A.i4,D.bha],x.O)
D.a5f=new C.xz(7,"peteWide")
D.dEu=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rF,4294966259,4282001936,4291404327,D.a5f)
D.dEE=new C.xz(8,"muhuriCrest")
D.dEn=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rF,4294966259,4279378237,4291404327,D.dEE)
D.hdw=w([D.adg,D.aeD,A.i4],x.O)
D.dEF=new C.xz(9,"fomuWazi")
D.dEA=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CS,4294966519,4279904068,4291404327,D.dEF)
D.aGr=new C.kV(17,"certIvoryRose")
D.bdH=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hdz=w([D.bdH,D.aft,A.i4],x.O)
D.a5b=new C.xz(10,"upendoOrnate")
D.dEw=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aGr,4294965493,4286200650,4291404327,D.a5b)
D.d7X=w([D.dEt,D.dEB,D.dED,D.dEC,D.dEy,D.dEv,D.dEq,D.dEo,D.dEr,D.dEx,D.dEp,D.dEu,D.dEn,D.dEA,D.dEw],x.h)
D.eb=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.I9=new C.w1(0,"emojis")
D.CZ=new C.w1(1,"pictures")
D.Ia=new C.w1(2,"icons3d")
D.a5w=new C.w1(3,"animations")
D.Sd=new C.w1(4,"videoMotion")
D.D_=new C.w1(5,"luxe")
D.a3f=w([D.I9,D.CZ,D.Ia,D.a5w,D.Sd,D.D_],B.ax("O<w1>"))
D.eFo=new B.z(A.dY,"Looks")
D.etN=new B.z(A.yE,"Light")
D.etK=new B.z(A.no,"Colour")
D.erO=new B.z(A.yg,"Effects")
D.alL=new B.a0(63112,"MaterialIcons",!1)
D.eou=new B.z(D.alL,"Crop")
D.d8q=w([D.eFo,D.etN,D.etK,D.erO,D.eou],x.f2)
D.d93=w([],x.D)
D.hdK=w([],x.L)
D.es0=new B.z("Flashcard",D.I4)
D.evI=new B.z("Quiz",D.I5)
D.exB=new B.z("Worksheet",D.I6)
D.euM=new B.z("Notes",D.mK)
D.ewd=new B.z("Section",D.CX)
D.d9J=w([D.es0,D.evI,D.exB,D.euM,D.ewd],B.ax("O<+(m,my)>"))
D.dGl=new C.kV(6,"beadedPearl")
D.bg6=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hdO=w([H.XE,D.bg6,A.i4],x.O)
D.aFP=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dGl,4294966774,4286209070,4291404327,D.jP)
D.dGm=new C.kV(7,"artDeco")
D.bjZ=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bmM=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hdM=w([D.bjZ,D.bmM,A.c0],x.O)
D.aFQ=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dGm,4294440434,4280228630,4290283019,D.jP)
D.dGn=new C.kV(8,"rosetteCorners")
D.blW=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bbO=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bg1=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hdp=w([D.blW,D.bbO,D.bg1],x.O)
D.aFO=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dGn,4294702831,4285218602,4291394365,D.jP)
D.dGo=new C.kV(9,"modernLedger")
D.hdo=w([A.c,D.ji,D.ji],x.O)
D.aFN=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dGo,4294967295,4279378237,4279378237,D.jP)
D.d9N=w([D.aFP,D.aFQ,D.aFO,D.aFN],x.h)
D.d9W=w([A.iC,A.oM],x.O)
D.cn=new C.hF(0,"none")
D.df=new C.hF(1,"fade")
D.I7=new C.hF(3,"slideRight")
D.aGN=new C.hF(5,"slideDown")
D.e00=new C.hF(7,"zoomOut")
D.a5v=new C.hF(11,"cube")
D.e_W=new C.hF(12,"blur")
D.aGK=new C.hF(13,"dissolve")
D.e_X=new C.hF(14,"wipeLeft")
D.e_Y=new C.hF(15,"wipeRight")
D.Sc=new C.hF(17,"push")
D.e_Z=new C.hF(18,"flash")
D.aGM=new C.hF(20,"swing")
D.e0_=new C.hF(21,"curtain")
D.QN=w([D.cn,D.df,D.uw,D.I7,D.ux,D.aGN,D.mL,D.e00,D.I8,D.aGO,D.Sb,D.a5v,D.e_W,D.aGK,D.e_X,D.e_Y,D.qn,D.Sc,D.e_Z,D.aGL,D.aGM,D.e0_],x.i)
D.QO=w([D.a5a,D.a58,D.a51,D.a52,D.a53,D.a56,D.a54,D.a55,D.a59,D.a57,D.aFP,D.aFQ,D.aFO,D.aFN],x.h)
D.dao=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.das=w([A.xp,A.hN,A.c0],x.O)
D.et7=new B.z(A.u4,"Design")
D.eGT=new B.z(D.am2,"Word sizes")
D.eCx=new B.z(A.C5,"Text")
D.bHx=new B.a0(983182,"MaterialIcons",!1)
D.eCB=new B.z(D.bHx,"Photo")
D.eo2=new B.z(A.lv,"Logo")
D.eI3=new B.z(A.GG,"News")
D.dax=w([D.et7,D.eGT,D.eCx,D.eCB,D.eo2,D.eI3],x.f2)
D.day=w(["golddust","sparkle","sheen"],x.s)
D.e1n=new C.ex("upload_pdf",L.O2,"Upload PDF")
D.e0x=new C.ex("sign_paper",A.GD,"Sign Paper")
D.bGO=new B.a0(63438,"MaterialIcons",!1)
D.e1j=new C.ex("hd_photo",D.bGO,"HD Photo")
D.e0p=new C.ex("sharpen",E.a0c,"Sharpen")
D.e0z=new C.ex("print",L.O2,"Download PDF")
D.e10=new C.ex("rotate",D.alL,"Rotate")
D.e0I=new C.ex("text_box",A.C5,"Text Box")
D.e0K=new C.ex("picture",A.u8,"Picture")
D.e0G=new C.ex("title",A.yz,"Title")
D.e0C=new C.ex("subtitle",T.amC,"Subtitle")
D.e19=new C.ex("bullets",K.a0s,"Bullet List")
D.e0D=new C.ex("numbered",A.NS,"Numbered")
D.e1c=new C.ex("quote",A2.BV,"Quote")
D.e0P=new C.ex("citation",A.o8,"Citation")
D.e1f=new C.ex("date_stamp",Ag.a0h,"Date Stamp")
D.e12=new C.ex("page_number",A.yy,"Page #")
D.e16=new C.ex("header_bar",A.C7,"Header")
D.e0J=new C.ex("footer_bar",Ap.a0X,"Footer")
D.e0y=new C.ex("divider",A.u7,"Divider")
D.e0u=new C.ex("highlight",A.a0y,"Highlight")
D.e18=new C.ex("redact",A.uh,"Redact")
D.e0W=new C.ex("callout",A.BP,"Callout")
D.e1h=new C.ex("checkboxes",K.al0,"Checklist")
D.e0T=new C.ex("table",A.a0V,"Table")
D.e0N=new C.ex("memo",K.a0I,"Memo")
D.e0X=new C.ex("letter",A.Gs,"Letter")
D.bGq=new B.a0(63259,"MaterialIcons",!0)
D.e0o=new C.ex("agenda",D.bGq,"Agenda")
D.e0A=new C.ex("toc",Ay.amf,"Contents")
D.bGK=new B.a0(63406,"MaterialIcons",!1)
D.e0U=new C.ex("sig_line",D.bGK,"Sign Line")
D.e0h=new C.ex("initial_line",A.js,"Initials")
D.e0k=new C.ex("approved",A.lv,"APPROVED")
D.e0Z=new C.ex("draft",A.p2,"DRAFT")
D.e14=new C.ex("confidential",A.jt,"Confidential")
D.e17=new C.ex("sticky",A.Oa,"Sticky Note")
D.e1g=new C.ex("progress",A.ame,"Progress")
D.bI0=new B.a0(983507,"MaterialIcons",!1)
D.e0v=new C.ex("stars",D.bI0,"Star Rating")
D.e0f=new C.ex("equation",A.am4,"Equation")
D.e0q=new C.ex("timeline",A.Ob,"Timeline")
D.e0O=new C.ex("two_col",A.a0Y,"Two Columns")
D.e0s=new C.ex("compare",A1.a0k,"Compare")
D.e0d=new C.ex("duplicate_el",A.fR,"Duplicate")
D.e1l=new C.ex("delete_el",A.e9,"Delete")
D.e1b=new C.ex("bring_fwd",H.alZ,"Bring Front")
D.e0i=new C.ex("send_back",H.alY,"Send Back")
D.e0Y=new C.ex("align_left",D.a0q,"Align L")
D.e13=new C.ex("align_center",D.a0p,"Align C")
D.e1k=new C.ex("align_right",D.a0r,"Align R")
D.e0H=new C.ex("word_count",A_.a_W,"Word Count")
D.e0E=new C.ex("link_text",A.hs,"Link")
D.e11=new C.ex("phone",A.iL,"Phone")
D.e0t=new C.ex("email",A.BS,"Email")
D.e1m=new C.ex("qr_placeholder",A.jv,"QR Placeholder")
D.e0n=new C.ex("rectangle",A3.vS,"Rectangle")
D.e0S=new C.ex("circle",A.rf,"Circle")
D.e0j=new C.ex("arrow",A.j4,"Arrow")
D.e1a=new C.ex("line",A.u7,"Line")
D.e0w=new C.ex("triangle",A.a0i,"Triangle")
D.bGy=new B.a0(63318,"MaterialIcons",!1)
D.e0B=new C.ex("grayscale",D.bGy,"Grayscale")
D.e0L=new C.ex("brighten",K.alk,"Brighten")
D.e0Q=new C.ex("flip_h",A.Gi,"Flip H")
D.bGF=new B.a0(63348,"MaterialIcons",!1)
D.e1i=new C.ex("flip_v",D.bGF,"Flip V")
D.e15=new C.ex("cover_page",A.q3,"Cover Page")
D.e0g=new C.ex("invoice",A.hb,"Invoice")
D.e0r=new C.ex("resume",A.mx,"Resume")
D.e0F=new C.ex("minutes",A.oX,"Minutes")
D.e0l=new C.ex("lab_report",A.O6,"Lab Report")
D.e0m=new C.ex("rubric",A.u5,"Rubric")
D.e0R=new C.ex("flashcard_tool",V.GB,"Flashcard")
D.e1d=new C.ex("quiz_tool",A.Gx,"Quiz Block")
D.e0V=new C.ex("worksheet_tool",M.G9,"Worksheet")
D.e1_=new C.ex("outline_share",A.O8,"Share Outline")
D.e1e=new C.ex("export_json",D.al6,"Export JSON")
D.e0e=new C.ex("new_slide",D.a_V,"New Slide")
D.e0M=new C.ex("present",A.q9,"Present")
D.db1=w([D.e1n,D.e0x,D.e1j,D.e0p,D.e0z,D.e10,D.e0I,D.e0K,D.e0G,D.e0C,D.e19,D.e0D,D.e1c,D.e0P,D.e1f,D.e12,D.e16,D.e0J,D.e0y,D.e0u,D.e18,D.e0W,D.e1h,D.e0T,D.e0N,D.e0X,D.e0o,D.e0A,D.e0U,D.e0h,D.e0k,D.e0Z,D.e14,D.e17,D.e1g,D.e0v,D.e0f,D.e0q,D.e0O,D.e0s,D.e0d,D.e1l,D.e1b,D.e0i,D.e0Y,D.e13,D.e1k,D.e0H,D.e0E,D.e11,D.e0t,D.e1m,D.e0n,D.e0S,D.e0j,D.e1a,D.e0w,D.e0B,D.e0L,D.e0Q,D.e1i,D.e15,D.e0g,D.e0r,D.e0F,D.e0l,D.e0m,D.e0R,D.e1d,D.e0V,D.e1_,D.e1e,D.e0e,D.e0M],B.ax("O<ex>"))
D.dbb=w([A.cr,A.ak],x.O)
D.enA=new B.z(4286331629,4292552567)
D.enn=new B.z(4280640491,4278630100)
D.enI=new B.z(4294538006,4292943176)
D.emK=new B.z(4278556265,4280640491)
D.d5m=w([D.enA,D.enn,D.enI,D.emK],x.n)
D.cuf=w([4294626325,4280472558,4294210230],x.t)
D.e08=new C.nO("colorful","Colorful",A.no,D.d5m,4294967295,3875536895,D.cuf,D.mL)
D.enb=new B.z(4279522093,4279657780)
D.enr=new B.z(4281750292,4283268111)
D.emN=new B.z(4278603323,4279203438)
D.ens=new B.z(4282343954,4279599165)
D.cFb=w([D.enb,D.enr,D.emN,D.ens],x.n)
D.ctY=w([4288931381,4294829706,4287033260],x.t)
D.e04=new C.nO("nature","Nature",A.GE,D.cFb,4294442727,3874290891,D.ctY,D.df)
D.en5=new B.z(4279369771,4283178389)
D.en2=new B.z(4279179050,4286456526)
D.enj=new B.z(4280163147,4290648157)
D.emC=new B.z(4278322711,4285343961)
D.cWO=w([D.en5,D.en2,D.enj,D.emC],x.n)
D.cub=w([4294210230,4280472558,4289170426],x.t)
D.e02=new C.nO("vibe","Vibe",A.a0w,D.cWO,4294967295,3874869502,D.cub,D.uw)
D.enE=new B.z(4290007817,4292552567)
D.eny=new B.z(4286328082,4294286859)
D.enD=new B.z(4288485197,4294538006)
D.enx=new B.z(4285343961,4293675161)
D.c0f=w([D.enE,D.eny,D.enD,D.enx],x.n)
D.cug=w([4294829706,4294967295,4284999929],x.t)
D.e03=new C.nO("celebration","Celebration",A.lr,D.c0f,4294967295,4009752557,D.cug,D.qn)
D.en0=new B.z(4279179050,4280171146)
D.en4=new B.z(4279310375,4280232247)
D.emT=new B.z(4278916151,4280172719)
D.en1=new B.z(4279179050,4281549141)
D.cPJ=w([D.en0,D.en4,D.emT,D.en1],x.n)
D.ctT=w([4281908728,4294626325,4287931320],x.t)
D.e07=new C.nO("professional","Professional",A.BN,D.cPJ,4294967295,3872118241,D.ctT,D.Sc)
D.emX=new B.z(4278995566,4278413729)
D.emP=new B.z(4278727492,4279137424)
D.enk=new B.z(4280171146,4278751666)
D.emY=new B.z(4278995566,4279590517)
D.cy2=w([D.emX,D.emP,D.enk,D.emY],x.n)
D.ctW=w([4286436348,4284410580,4294829706],x.t)
D.e09=new C.nO("ocean","Ocean",K.a1_,D.cy2,4294967295,3873501950,D.ctW,D.ux)
D.enz=new B.z(4286328082,4294538006)
D.enB=new B.z(4286781507,4294677052)
D.env=new B.z(4283178389,4294197086)
D.enC=new B.z(4288295954,4294688548)
D.cLY=w([D.enz,D.enB,D.env,D.enC],x.n)
D.cuh=w([4294829706,4294967295,4294747557],x.t)
D.e0a=new C.nO("sunset","Sunset",A.Od,D.cLY,4294967295,4009749973,D.cuh,D.df)
D.enM=new B.z(4294967295,4294047225)
D.enH=new B.z(4294507260,4294967295)
D.enL=new B.z(4294967295,4293060848)
D.enG=new B.z(4294507260,4294047225)
D.cZU=w([D.enM,D.enH,D.enL,D.enG],x.n)
D.ctR=w([4280640491,4279179050,4287931320],x.t)
D.e06=new C.nO("minimal","Minimal",A3.vS,D.cZU,4279179050,4282865001,D.ctR,D.df)
D.emW=new B.z(4278979081,4280886564)
D.enf=new B.z(4280031511,4278979081)
D.en3=new B.z(4279308561,4281148438)
D.emV=new B.z(4278979081,4280031511)
D.ddb=w([D.emW,D.enf,D.en3,D.emV],x.n)
D.cu4=w([4292128567,4294829706,4289241758],x.t)
D.e0b=new C.nO("elegant","Elegant",A.lY,D.ddb,4294898631,3873957348,D.cu4,D.aGK)
D.enh=new B.z(4280159034,4282058596)
D.emS=new B.z(4278916151,4280163147)
D.enp=new B.z(4281208933,4278916151)
D.en8=new B.z(4279502891,4283178389)
D.dkb=w([D.enh,D.emS,D.enp,D.en8],x.n)
D.cud=w([4294296657,4292128567,4291081725],x.t)
D.e05=new C.nO("royal","Royal Gold",A.j6,D.dkb,4294965222,3874084351,D.cud,D.mL)
D.emH=new B.z(4278464302,4280163147)
D.emR=new B.z(4278916151,4279455306)
D.eni=new B.z(4280163147,4283040846)
D.emE=new B.z(4278332450,4281413249)
D.d52=w([D.emH,D.emR,D.eni,D.emE],x.n)
D.ctS=w([4281193663,4289170426,4294210230],x.t)
D.e0c=new C.nO("aurora","Aurora Glow",A.dY,D.d52,4293983738,3869766608,D.ctS,D.df)
D.we=w([D.e08,D.e04,D.e02,D.e03,D.e07,D.e09,D.e0a,D.e06,D.e0b,D.e05,D.e0c],B.ax("O<nO>"))
D.dbe=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.bgA=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.dbM=w([A.qU,D.bgA,A.qU],x.O)
D.dc2=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dc6=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eCq=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.esI=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.exb=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eki=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.evR=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eu7=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eyo=new B.z("Surprise me","")
D.dcD=w([D.eCq,D.esI,D.exb,D.eki,D.evR,D.eu7,D.eyo],x.L)
D.b9U=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bkt=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.ddp=w([A.c,D.b9U,D.bkt],x.O)
D.dfu=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aGj=new C.kV(0,"heritageGold")
D.bff=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hdP=w([D.bff,W.aeN,A.ay],x.O)
D.dEz=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aGj,4294570461,4284234270,4292128567,D.jP)
D.aGk=new C.kV(1,"heritageCrimson")
D.b8n=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bdE=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bkj=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hds=w([D.b8n,D.bdE,D.bkj],x.O)
D.dEs=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aGk,4294635750,4285213214,4292912216,D.jP)
D.dfy=w([D.a5a,D.a58,D.dEz,D.dEs,D.a53,D.a56],x.h)
D.dKs=new C.rw(1,"circuit")
D.dKV=new C.m8("neural","Neural Link","Robotic",D.dKs,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dKr=new C.rw(0,"grid")
D.dKS=new C.m8("signal","Signal Grid","Robotic",D.dKr,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dKx=new C.rw(2,"hexes")
D.dKD=new C.m8("core","Core Protocol","Robotic",D.dKx,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGH=new C.rw(11,"diagonal")
D.dKO=new C.m8("steel","Steel Tech","Robotic",D.aGH,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGI=new C.rw(3,"rings")
D.dKC=new C.m8("vault","Vault Gold","Robotic",D.aGI,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dKv=new C.rw(13,"leaves")
D.dKF=new C.m8("forest","Forest Morning","Nature",D.dKv,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGJ=new C.rw(5,"waves")
D.dKM=new C.m8("ocean","Ocean Calm","Nature",D.aGJ,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dKy=new C.rw(6,"sunset")
D.dKR=new C.m8("sunset","Sunset Glow","Nature",D.dKy,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dKz=new C.rw(7,"mountains")
D.dKE=new C.m8("mountain","Mountain Air","Nature",D.dKz,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dKA=new C.rw(8,"stars")
D.dKL=new C.m8("night","Night Sky","Nature",D.dKA,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5t=new C.rw(4,"orbs")
D.dKJ=new C.m8("aurora","Aurora","Nature",D.a5t,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dKT=new C.m8("sand","Sand Dune","Nature",D.aGJ,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dKB=new C.rw(9,"rays")
D.dKI=new C.m8("golden","Golden Hour","Warm",D.dKB,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dKG=new C.m8("royal","Royal Purple","Warm",D.aGH,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dKH=new C.m8("rose","Rose Petal","Warm",D.a5t,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dKu=new C.rw(12,"blocks")
D.dKK=new C.m8("electric","Electric Blue","Bold",D.dKu,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dKU=new C.m8("mint","Fresh Mint","Bold",D.a5t,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dKw=new C.rw(14,"minimal")
D.dKQ=new C.m8("white","Clean White","Clean",D.dKw,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dKt=new C.rw(10,"frame")
D.dKN=new C.m8("midnight","Midnight Gold","Clean",D.dKt,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dKP=new C.m8("community","Community Green","Clean",D.aGI,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3I=w([D.dKV,D.dKS,D.dKD,D.dKO,D.dKC,D.dKF,D.dKM,D.dKR,D.dKE,D.dKL,D.dKJ,D.dKT,D.dKI,D.dKG,D.dKH,D.dKK,D.dKU,D.dKQ,D.dKN,D.dKP],B.ax("O<m8>"))
D.dfV=w([D.AW,A.vj,A.hN,A.c0],x.O)
D.dgc=w([D.afD,D.ji],x.O)
D.dgn=w(["pdf","docx","txt","md"],x.s)
D.eLv=new B.bl(-3,150,34)
D.eLw=new B.bl(-3,214,62)
D.eLx=new B.bl(-3,288,62)
D.dhb=w([D.eLv,D.eLw,D.eLx],B.ax("O<+(K,K,K)>"))
D.dhE=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dig=w(["Write","Design","Print & fold"],x.s)
D.jQ=new C.uK(2,"triangle")
D.CY=new C.uK(3,"arrow")
D.fs=new C.uK(4,"line")
D.jR=new C.uK(5,"parallelogram")
D.dij=w([D.bh,D.eN,D.jQ,D.CY,D.fs,D.jR,D.l9],x.m)
D.elF=new B.z(240,96)
D.eom=new B.z(560,46)
D.dio=w([D.elF,D.eom],x.G)
D.he_=new C.xC(0,"classic")
D.dGr=new C.nK("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aGj,4294570461,4282000405,4284234270)
D.dGD=new C.nK("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aGk,4294635750,4281999378,4285213214)
D.dGs=new C.nK("elegant_navy","Umoja Mzuri",y.s,D.a5n,4294967035,4279378237,4290283019)
D.dGF=new C.nK("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGs,4294966515,4281016592,4289102906)
D.dGH=new C.nK("kente_sunset","Kente ya Jua",y.H,D.aGl,4294964964,4282000405,4279983648)
D.dGp=new C.nK("indigo_mudcloth","Nguo ya Indigo",y.n,D.aGm,4294439140,4279903102,4279903102)
D.dGu=new C.nK("adinkra_royal","Muhuri wa Adinkra",y.z,D.aGn,4294965484,4285218591,4287322667)
D.dGz=new C.nK("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGo,4294244340,4279196764,4279196764)
D.dGB=new C.nK("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGp,4294505710,4279970378,4291058750)
D.he0=new C.xC(1,"ringsNdoa")
D.dGt=new C.nK("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rF,4294966259,4279378237,4291404327)
D.he2=new C.xC(2,"coupleCards")
D.dGE=new C.nK("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rF,4294966259,4279378237,4291404327)
D.he3=new C.xC(3,"kuhoweshaForm")
D.dGA=new C.nK("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CS,4294966519,4279378237,4291404327)
D.he4=new C.xC(4,"mahariPande")
D.dGq=new C.nK("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rF,4294966259,4279904068,4291404327)
D.he5=new C.xC(5,"familiaMti")
D.dGG=new C.nK("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aGq,4294966776,4280241466,4291404327)
D.he6=new C.xC(6,"ndoaSafi")
D.dGx=new C.nK("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CS,4294966519,4279378237,4291404327)
D.he7=new C.xC(7,"peteWide")
D.dGw=new C.nK("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rF,4294966259,4282001936,4291404327)
D.he8=new C.xC(8,"muhuriCrest")
D.dGv=new C.nK("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rF,4294966259,4279378237,4291404327)
D.he9=new C.xC(9,"fomuWazi")
D.dGy=new C.nK("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CS,4294966519,4279904068,4291404327)
D.he1=new C.xC(10,"upendoOrnate")
D.dGC=new C.nK("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aGr,4294965493,4286200650,4291404327)
D.R2=w([D.dGr,D.dGD,D.dGs,D.dGF,D.dGH,D.dGp,D.dGu,D.dGz,D.dGB,D.dGt,D.dGE,D.dGA,D.dGq,D.dGG,D.dGx,D.dGw,D.dGv,D.dGy,D.dGC],B.ax("O<nK>"))
D.CW=new C.arc(0,"landscape169")
D.oi=new C.arc(1,"portrait916")
D.djc=w([D.CW,D.oi],B.ax("O<arc>"))
D.az3=w([A.hN,A.bM,A.ct,A.iC,A.c],x.O)
D.up=w([A.c0,A.ij],x.O)
D.ekN=new B.z(1000,"M")
D.epM=new B.z(900,"CM")
D.eog=new B.z(500,"D")
D.emw=new B.z(400,"CD")
D.ekO=new B.z(100,"C")
D.epN=new B.z(90,"XC")
D.eoh=new B.z(50,"L")
D.emx=new B.z(40,"XL")
D.ekU=new B.z(10,"X")
D.epY=new B.z(9,"IX")
D.eoy=new B.z(5,"V")
D.eo1=new B.z(4,"IV")
D.ell=new B.z(1,"I")
D.djS=w([D.ekN,D.epM,D.eog,D.emw,D.ekO,D.epN,D.eoh,D.emx,D.ekU,D.epY,D.eoy,D.eo1,D.ell],x.ek)
D.eMw=new B.cA(["open",A.js,"Open & write","Keep writing this book"])
D.eMX=new B.cA(["print",A.ub,"Print as a book","Fold and staple it"])
D.dk1=w([D.eMw,D.eMX],B.ax("O<+(m,a0,m,m)>"))
D.dkJ=w([D.a5v,D.mL,D.I8,D.Sc,D.df,D.Sb],x.i)
D.eD4=new B.z(-1,"Small")
D.ekx=new B.z(0,"Normal")
D.elk=new B.z(1,"Big")
D.elV=new B.z(2,"Huge")
D.dlg=w([D.eD4,D.ekx,D.elk,D.elV],x.ek)
D.dlH=w([49,65,89,38,83,89],x.t)
D.dlO=w([A.vj,A.hN,A.c0],x.O)
D.dmf=w([D.df,D.mL,D.uw,D.a5v,D.I8,D.Sc],x.i)
D.aEl=new B.dt([0,D.LY,8,D.agU,12,D.agV],B.ax("dt<G,a3Q>"))
D.e6b={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bka=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cPU=w([A.bM,D.bka],x.O)
D.d9v=w([A.b3,A.bj],x.O)
D.d49=w([A.bX,A.aO,A.bH],x.O)
D.dk2=w([A.cr,A.br],x.O)
D.cXI=w([A.b8,A.f0],x.O)
D.d6T=w([A.b6,A.fc],x.O)
D.bdn=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d69=w([D.bdn,A.oM],x.O)
D.d0D=w([A.h5,A.xq],x.O)
D.cXw=w([A.bv,A.cb],x.O)
D.doV=new B.bk(D.e6b,[D.cPU,I.apw,D.d9v,D.d49,D.dk2,D.cXI,D.d6T,D.d69,D.d0D,D.cXw],B.ax("bk<m,ai<w>>"))
D.e5i={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4m=new B.bk(D.e5i,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<m,m>"))
D.a4t=new B.bk(A.hZ,[],B.ax("bk<G,+icon3d,picture(m?,m?)>"))
D.dtC=new F.MY(30,null)
D.dyH=new F.mu("Chapter 1","","","")
D.diY=w([D.dyH],x.B)
D.dyL=new F.rm("My Book","","",D.diY,E.aFD)
D.dyJ=new F.uA("starry",null,null,null,null,"","","")
D.dyM=new F.rm("Dream Big","","",E.a3o,D.dyJ)
D.dyK=new F.uA("story",null,null,null,null,"","","")
D.dyN=new F.rm("Little Lion","","",E.a3o,D.dyK)
D.dyI=new F.uA("vintage",null,null,null,null,"","","")
D.dyO=new F.rm("Our Story","","",E.a3o,D.dyI)
D.dBP=new C.Ey("","NGMY","","")
D.dJ5=new C.zz("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e01=new C.b1c(null,null,null,null)
D.e1K=new C.arh(null)
D.e1X=new C.arL(0,"smaller")
D.e1Y=new C.arL(1,"bigger")
D.aGX=new C.arL(2,"fit")
D.e92=new B.v(3,6)
D.e9c=new B.v(4,8)
D.ecD=new B.D(E.ahJ,T.acC,null)
D.ecH=new B.D(A.YP,A.lL,null)
D.bJi=new B.ae(A.l1,16,A.bU,null,null,null)
D.ecL=new B.D(A.io,D.bJi,null)
D.b7M=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.ecX=new B.D(A.FN,D.b7M,null)
D.bTD=new B.ae(A.cB,16,A.aA,null,null,null)
D.ed0=new B.D(A.el,D.bTD,null)
D.fs2=new B.y("Play",null,A.nF,null,null,null,null,null,null,null,null,null)
D.d9K=w([U.ao_,A.rS,D.fs2],x.p)
D.eR7=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d9K,null)
D.ed3=new B.D(A.nj,D.eR7,null)
D.b7V=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.eWY=new B.a7(20,20,D.b7V,null)
D.ed8=new B.D(A.io,D.eWY,null)
D.fB9=new B.y("Seconds per slide",null,A.hw,null,null,null,null,null,null,null,null,null)
D.edg=new B.D(A.bl,D.fB9,null)
D.eeB=new C.a8H(2,"print")
D.eeE=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.egg=new B.hg("/Annot")
D.egi=new B.hg("/URI")
D.fmj=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eik=new B.jq("share",48,D.fmj,null,B.ax("jq<m>"))
D.bTx=new B.ae(A.dY,14,A.eC,null,null,null)
D.eit=new B.cL(null,-2,-2,null,null,null,D.bTx,null)
D.cS_=w([H.afh,A.K],x.O)
D.c_3=new B.a9(A.a3,A.a8,A.x,D.cS_,null,null)
D.b0z=new B.o(null,null,null,null,null,D.c_3,A.n)
D.bpa=new B.kS(D.b0z,A.bf,null,null)
D.eiF=new B.cL(0,0,null,0,8,null,D.bpa,null)
D.deu=w([A.i3,A.mm,A.cc],x.O)
D.ejj=new B.bU(A.A,0.5,A.x,null,0,D.deu,null,null)
D.elO=new B.z(0.22,A.bj)
D.eqi=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.esn=new B.z(0.5,A.hj)
D.eBz=new B.z(0.78,A.aV)
D.eMm=new B.cA([A.bu,0.22,0.7,2.6])
D.eMs=new B.cA([A.b8,0.36,1.2,1.3])
D.eMy=new B.cA([A.dP,0.28,0.2,0.4])
D.eME=new B.cA([A.cA,0.05,0.3,0.35])
D.eMK=new B.cA([A.bv,0.28,0.9,0])
D.eMS=new B.cA([A.aE,-0.25,-0.15,0.45])
D.eNI=new B.cA([A.bX,0.42,1,4.1])
D.eQQ=new B.a9F(9)
D.bKp=new B.ae(A.GG,28,A.bH,null,null,null)
D.fBI=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bz4=new B.bB(1,A.bg,D.fBI,null)
D.dhH=w([D.bKp,A.at,D.bz4],x.p)
D.eR1=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dhH,null)
D.bKA=new B.ae(A.o8,16,A.c,null,null,null)
D.fDd=new B.y("Book",null,A.or,null,null,null,null,null,null,null,null,null)
D.dlN=w([D.bKA,A.eg,D.fDd],x.p)
D.eR9=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.dlN,null)
D.bR7=new B.ae(A.jt,10,A.c,null,null,null)
D.fq6=new B.y("Pro",null,A.nC,null,null,null,null,null,null,null,null,null)
D.d9P=w([D.bR7,A.qv,D.fq6],x.p)
D.eRd=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d9P,null)
D.fB7=new B.y("Make a newspaper",null,A.Ua,null,null,null,null,null,null,null,null,null)
D.c0d=w([E.a1l,A.ab,D.fB7],x.p)
D.eRe=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.c0d,null)
D.bPE=new B.ae(A.lr,18,A.bM,null,null,null)
D.fsg=new B.y("Ending celebration",null,A.hK,null,null,null,null,null,null,null,null,null)
D.dgN=w([D.bPE,A.bp,D.fsg],x.p)
D.eRh=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dgN,null)
D.bQU=new B.ae(A.js,18,A.k1,null,null,null)
D.f6H=new B.H(!0,A.k1,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDv=new B.y("Write",null,D.f6H,null,null,null,null,null,null,null,null,null)
D.cZI=w([D.bQU,A.ab,D.fDv],x.p)
D.eRo=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cZI,null)
D.fq4=new B.y("Download picture",null,A.oq,null,null,null,null,null,null,null,null,null)
D.bBc=new B.qq(A.e_,A.A,A.f,D.fq4,null)
D.bBn=new B.dq(1,A.co,D.bBc,null)
D.dad=w([L.anQ,A.ab,D.bBn],x.p)
D.eRp=new B.ci(A.aP,A.b9,A.j,A.m,null,A.p,null,0,D.dad,null)
D.bMn=new B.ae(A.GG,22,A.bH,null,null,null)
D.fzI=new B.y("NGMY NEWS",null,I.a8a,null,null,null,null,null,null,null,null,null)
D.cRq=w([D.bMn,A.ab,D.fzI],x.p)
D.eRy=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cRq,null)
D.eRK=new B.pe(!1,!1,null,T.W3,null,A.c_,null,null,null)
D.a7d=new B.jk([D.cn,D.df,D.uw,D.I7,D.ux,D.aGN],B.ax("jk<hF>"))
D.e7R={title:0,quote:1,closing:2,bio:3}
D.eSV=new B.dD(D.e7R,4,x.M)
D.e5B={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eSY=new B.dD(D.e5B,5,x.M)
D.e78={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a7e=new B.dD(D.e78,8,x.M)
D.e6l={Design:0,Transitions:1,Insert:2}
D.eT2=new B.dD(D.e6l,3,x.M)
D.heh=new B.jk([D.a5w],B.ax("jk<w1>"))
D.e6u={float3d:0,drift:1,pulse:2}
D.eT6=new B.dD(D.e6u,3,x.M)
D.aO7=new B.jk([D.I4,D.I5,D.I6],B.ax("jk<my>"))
D.e5z={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aOa=new B.dD(D.e5z,14,x.M)
D.hei=new B.dD(A.hZ,0,B.ax("dD<w1>"))
D.e6r={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Th=new B.dD(D.e6r,4,x.M)
D.e5r={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aOd=new B.dD(D.e5r,30,x.M)
D.e6A={circle:0,triangle:1,hexagon:2,diamond:3}
D.eTt=new B.dD(D.e6A,4,x.M)
D.eVT=new B.as(390,844)
D.eWI=new B.a7(20,20,A.KM,null)
D.aP0=new B.a7(null,2.5,null,null)
D.eWS=new B.a7(18,18,A.KM,null)
D.bQY=new B.ae(A.j6,19,A.c,null,null,null)
D.eX2=new B.a7(38,38,D.bQY,null)
D.bPc=new B.ae(A.yF,22,A.c,null,null,null)
D.eX4=new B.a7(40,40,D.bPc,null)
D.eXD=new B.hQ(2,10,10,1.15,null)
D.aP8=new B.hQ(2,16,14,0.62,null)
D.bx8=new B.R(32,30,32,40)
D.b9h=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bKm=new B.ae(A.q3,56,D.b9h,null,null,null)
D.ag6=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f8G=new B.H(!0,D.ag6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new B.y("Your books will live here.",null,D.f8G,null,A.L,null,null,null,null,null,null,null)
D.d1z=w([D.bKm,A.R,D.fwJ],x.p)
D.bo8=new B.fn(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d1z,null)
D.ede=new B.D(D.bx8,D.bo8,null)
D.eXY=new B.mb(D.ede,null)
D.fwG=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eYf=new B.b1(D.fwG,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fuN=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new B.b1(D.fuN,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fzM=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new B.b1(D.fzM,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAk=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eYE=new B.b1(D.fAk,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ftt=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eYR=new B.b1(D.ftt,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fHs=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ9=new B.b1(D.fHs,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEy=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eZk=new B.b1(D.fEy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAs=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new B.b1(D.fAs,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fok=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new B.b1(D.fok,null,null,null,null,null,null,null,A.iy,null,null,null,null,A.pT,!1,null,null,null,A.r,null)
D.fqd=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f_A=new B.b1(D.fqd,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fwm=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f_C=new B.b1(D.fwm,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fw2=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new B.b1(D.fw2,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fCv=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f_E=new B.b1(D.fCv,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fkw=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new B.b1(D.fkw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.frn=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f09=new B.b1(D.frn,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGa=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f0b=new B.b1(D.fGa,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFI=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f0f=new B.b1(D.fFI,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fjw=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f0h=new B.b1(D.fjw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBD=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f0q=new B.b1(D.fBD,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFi=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f0F=new B.b1(D.fFi,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fF9=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f0H=new B.b1(D.fF9,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fjo=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f0N=new B.b1(D.fjo,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fnj=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f1e=new B.b1(D.fnj,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEl=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new B.b1(D.fEl,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fn7=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new B.b1(D.fn7,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bgi=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cQ7=w([A.iC,A.oM,D.bgi,D.ad2,A.iC],x.O)
D.f22=new B.fY(A.A,0,6.283185307179586,A.x,D.cQ7,null,null)
D.cYX=w([A.bM,A.c0,A.hN,D.AW,A.bM],x.O)
D.aPI=new B.fY(A.A,0,6.283185307179586,A.x,D.cYX,null,null)
D.dc0=w([A.bX,A.bu,A.b8,A.b0,A.bH,A.bX],x.O)
D.f27=new B.fY(A.A,0,6.283185307179586,A.x,D.dc0,null,null)
D.cSd=w([A.pP,A.oN,A.AK,A.iC,A.pP],x.O)
D.f28=new B.fY(A.A,0,6.283185307179586,A.x,D.cSd,null,null)
D.dbV=w([A.aQ,A.bK,A.aL,A.ak,A.aQ],x.O)
D.f29=new B.fY(A.A,0,6.283185307179586,A.x,D.dbV,null,null)
D.djI=w([A.bv,A.b8,A.bu,A.bX,A.bv],x.O)
D.f2b=new B.fY(A.A,0,6.283185307179586,A.x,D.djI,null,null)
D.bgz=new B.w(1,0,1,1,A.t)
D.bas=new B.w(1,1,0,1,A.t)
D.dfN=w([A.EE,A.af_,I.adS,D.bgz,I.aei,D.bas,A.EE],x.O)
D.f2c=new B.fY(A.A,0,6.283185307179586,A.x,D.dfN,null,null)
D.f2r=new C.avO(2,"immersiveSticky")
D.f2s=new C.avO(3,"edgeToEdge")
D.f2t=new C.avO(4,"manual")
D.f4T=new B.H(!0,A.oH,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQf=new B.H(!0,A.f1,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5r=new B.H(!0,E.n6,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Y=new B.H(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7X=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f86=new B.H(!0,A.bU,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8r=new B.H(!0,A.eC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Z=new B.H(!0,A.jm,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new B.rI(!0,A.Ir,null,null,null,null,A.dt,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.faG=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new B.H(!0,A.jk,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new B.H(!0,A.aA,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eeH=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fbL=new B.rI(!0,D.eeH,null,null,null,null,A.dt,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.af6=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQZ=new B.H(!0,D.af6,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbT=new B.H(!0,D.ag6,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbU=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR0=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new B.rI(!0,A.pd,null,null,null,null,A.dt,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcO=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new B.H(!0,D.af6,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jt=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new B.H(!0,A.c0,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdY=new B.H(!0,A.bK,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe0=new B.H(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fei=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awK,null,null,null)
D.fek=new B.H(!0,A.c7,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fem=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fez=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feL=new B.H(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffi=new B.H(!0,A.aS,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffr=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new B.H(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRC=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRE=new B.H(!0,A.bU,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blL=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fho=new B.H(!0,D.blL,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRL=new B.H(!0,E.n6,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new B.H(!0,A.bK,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new B.H(!0,O.lm,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faV=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fja=new B.y("NEW",null,D.faV,null,null,null,null,null,null,null,null,null)
D.fjr=new B.y("Hati ya Kuhowesha",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fjT=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fkc=new B.y("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fkW=new B.y("Big quote mark",null,A.iS,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fl9=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.flB=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.flD=new B.y("How many slides?",null,A.hw,null,null,null,null,null,null,null,null,null)
D.fma=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f6K=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmw=new B.y("Luxury FX",null,D.f6K,null,null,null,null,null,null,null,null,null)
D.fmR=new B.y("Font",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fn1=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new B.H(!0,A.bK,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fng=new B.y("Example  GA847",null,D.fgX,null,null,null,null,null,null,null,null,null)
D.fnG=new B.y("Design shapes",null,A.iS,null,null,null,null,null,null,null,null,null)
D.fnR=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new B.y("Non-stop (loop)",null,A.hw,null,null,null,null,null,null,null,null,null)
D.fo8=new B.y("Hati ya Kuhoweya",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fos=new B.y("Photo studio",null,A.fU,null,null,null,null,null,null,null,null,null)
D.foV=new B.y("Add your picture",null,A.kj,null,null,null,null,null,null,null,null,null)
D.fad=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foW=new B.y("Enter document code",null,D.fad,null,A.L,null,null,null,null,null,null,null)
D.foX=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f7N=new B.H(!0,E.n6,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpm=new B.y("Delete this book?",null,D.f7N,null,A.L,null,null,null,null,null,null,null)
D.fcm=new B.H(!0,E.n6,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new B.y("Your library",null,D.fcm,null,null,null,null,null,null,null,null,null)
D.fql=new B.y("Delete",null,A.aQT,null,null,null,null,null,null,null,null,null)
D.fqo=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.DD,null,null,null,null,null,null,null,null,null)
D.fqz=new B.y("Element flies in",null,A.aR4,null,null,null,null,null,null,null,null,null)
D.Uj=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fqX=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.frk=new B.y("Cancel",null,E.aRe,null,null,null,null,null,null,null,null,null)
D.frm=new B.y("The lines and circles that come with the design",null,A.hh,null,null,null,null,null,null,null,null,null)
D.ffN=new B.H(!0,A.fX,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frO=new B.y("DOCUMENT CODE",null,D.ffN,null,null,null,null,null,null,null,null,null)
D.fsC=new B.y("Quotes",null,G.a8N,null,null,null,null,null,null,null,null,null)
D.f9D=new B.H(!0,O.lm,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new B.y("Add a picture",null,D.f9D,null,null,null,null,null,null,null,null,null)
D.fsS=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8t,null,A.L,null,null,null,null,null,null,null)
D.fsW=new B.y("Look & feel",null,A.hw,null,null,null,null,null,null,null,null,null)
D.ft0=new B.y("Rings",null,A.hK,null,null,null,null,null,null,null,null,null)
D.ft6=new B.y("W",null,A.rX,null,null,null,null,null,null,null,null,null)
D.ftg=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.ftz=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.U6,null,A.L,null,null,null,null,null,null,null)
D.ftB=new B.y("Write your book",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fuk=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fuz=new B.y("Malipo ya Awamu ya Mahari",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fa2=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new B.y("Create with AI",null,D.fa2,null,A.L,null,null,null,null,null,null,null)
D.fvh=new B.y("Apply look",null,A.hK,null,null,null,null,null,null,null,null,null)
D.faL=new B.H(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw4=new B.y("Type your presentation below",null,D.faL,null,A.L,null,null,null,null,null,null,null)
D.fw7=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aRP,null,A.L,null,null,null,null,null,null,null)
D.fw9=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f5I=new B.H(!0,A.cl,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new B.y("Done",null,D.f5I,null,null,null,null,null,null,null,null,null)
D.fwB=new B.y("Delete",null,A.nE,null,null,null,null,null,null,null,null,null)
D.fwL=new B.y("Hati ya Kiapo cha Uongozi",null,A.ft,null,null,null,null,null,null,null,null,null)
D.f8Y=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f8Y,null,A.L,null,null,null,null,null,null,null)
D.fy0=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new B.y("Layout",null,A.Uc,null,null,null,null,null,null,null,null,null)
D.fyK=new B.y("Print",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fyQ=new B.y("X",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fzp=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.Jo,null,null,null,null,null,null,null,null,null)
D.fzZ=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fAc=new B.y("Hati ya Kuhowa",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fAe=new B.y("Choose a class template",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fAg=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fAm=new B.y("Download the newspaper picture",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fAz=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fAG=new B.y("Done",null,A.aRB,null,null,null,null,null,null,null,null,null)
D.fAQ=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fAR=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.uT,null,null,null,null,null,null,null,null,null)
D.fC2=new B.y("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fC3=new B.y("What would you like to do?",null,D.aQZ,null,null,null,null,null,null,null,null,null)
D.fC7=new B.y("Delete",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fCD=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fCH=new B.y("Hati (Documents)",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fCU=new B.y("Done",null,A.le,null,null,null,null,null,null,null,null,null)
D.fgM=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCZ=new B.y("Delete presentation?",null,D.fgM,null,A.L,null,null,null,null,null,null,null)
D.fDh=new B.y("After the last slide it starts again from the first",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fDt=new B.y("\ud83c\udf33",null,A.Jm,null,A.L,null,null,null,null,null,null,null)
D.fDL=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fDS=new B.y("Transfer document",null,A.ou,null,null,null,null,null,null,null,null,null)
D.fE2=new B.y("Add to the slides",null,A.hw,null,null,null,null,null,null,null,null,null)
D.fEp=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fEE=new B.y("Make a book",null,K.aQx,null,null,null,null,null,null,null,null,null)
D.fEI=new B.y("Books",null,A.cD,null,null,null,null,null,null,null,null,null)
D.f9w=new B.H(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEJ=new B.y("Keep this page open until it finishes.",null,D.f9w,null,null,null,null,null,null,null,null,null)
D.fEM=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fER=new B.y("LANGUAGE",null,H.zT,null,null,null,null,null,null,null,null,null)
D.fEY=new B.y("Use this ending",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fF5=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fFo=new B.y("Delete from the database?",null,A.kj,null,null,null,null,null,null,null,null,null)
D.fFp=new B.y("H",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fFO=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fGf=new B.y("Cover",null,D.aRL,null,null,null,null,null,null,null,null,null)
D.fGj=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fGk=new B.y("Each page becomes its own slide you can present",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fGG=new B.y("Y",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fGR=new B.y("Crop the picture",null,A.le,null,null,null,null,null,null,null,null,null)
D.fGY=new B.y("Edit text",null,A.Jn,null,null,null,null,null,null,null,null,null)
D.fJe=B.dV("a8t")
D.DP=new C.ax6(0,"none")
D.aVe=new C.ax6(1,"zipCrypto")
D.aVf=new C.ax6(2,"aes")
D.h2M=new F.Pq("","",null)
D.h3S=new C.bcp(null)
D.h4Z=new C.ZF(null)
D.h6Z=new C.ado(null)
D.h70=new C.aEi(null)
D.h9M=new C.a_U(null)
D.ha2=new C.a0q(null)
D.hal=new C.bu3(null)})();(function staticFields(){$.hhu=null
$.hhv=null
$.hhw=null
$.hhx=null
$.h_k=B.v7("_lastQuoRemDigits")
$.h_l=B.v7("_lastQuoRemUsed")
$.axs=B.v7("_lastRemUsed")
$.h_m=B.v7("_lastRem_nsh")
$.qc=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7g=B.U(x.N,x.I)
$.fXP=!1
$.hmi=B.U(B.ax("kV"),x.N)
$.hmv=B.U(B.ax("kV"),x.E)
$.hkw=!1
$.bzG="q"
$.Qn=0
$.CJ=B.U(x.N,B.ax("ai<zB>"))
$.hkS=!1
$.h0W=!1
$.hr9=null
$.hVo=B.U(x.N,B.ax("aA<m?>"))
$.Ks=""
$.j2=0
$.heg=function(){var w=x.N
return B.U(w,w)}()
$.hef=B.U(x.N,x.R)
$.h1g=!1
$.ag6=B.U(x.N,x.E)
$.h24=0
$.bku=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ijN","D3",()=>C.b9V(0))
w($,"ijL","a2E",()=>C.b9V(1))
w($,"ijM","huN",()=>C.b9V(2))
w($,"ijK","h6_",()=>$.a2E().v5(0))
w($,"ijI","huL",()=>C.b9V(1e4))
w($,"ijJ","huM",()=>B.Ee(8))
w($,"ify","hsN",()=>B.Ee(0))
w($,"ifG","hsR",()=>B.Ee(0))
w($,"ifF","hsQ",()=>B.bYW(0))
w($,"inw","hwO",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4m.gdL(D.a4m),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"inX","bEa",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mW(new C.fIx(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mW(new C.fIy(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fIz(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mW(new C.fIK(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mW(new C.fIP(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fIQ(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mW(new C.fIR(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mW(new C.fIS(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mW(new C.fIT(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fIU(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mW(new C.fIV(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mW(new C.fIA(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mW(new C.fIB(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mW(new C.fIC(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fID(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mW(new C.fIE(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mW(new C.fIF(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mW(new C.fIG(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mW(new C.fIH(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mW(new C.fII(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mW(new C.fIJ(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mW(new C.fIL(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mW(new C.fIM(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mW(new C.fIN(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mW(new C.fIO(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<EH>"))})
w($,"inz","hwQ",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["/usjvGD3bQYDoaujNlT9UycUccM="]=a.current})($__dart_deferred_initializers__);