((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tQ(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fYl(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JC(d){var w
if(d===0)return $.D_()
if(d===1)return $.a2s()
if(d===2)return $.hsI()
if(Math.abs(d)<4294967296)return C.b9x(A.o.N(d))
w=C.hNp(d)
return w},
b9x(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tQ(4,w)
return new C.nU(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tQ(1,w)
return new C.nU(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aB(d,16)
v=C.tQ(2,w)
return new C.nU(v===0?!1:s,w,v)}v=A.o.an(A.o.gajU(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tQ(v,w)
return new C.nU(v===0?!1:s,w,v)},
hNp(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dK("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D_()
w=$.hsH()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l8(A.aH.gaP(w))
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
q=new C.nU(!1,r,4)
if(s<0)p=q.mu(0,-s)
else p=s>0?q.dX(0,s):q
return p},
fYm(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hft(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fI(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hfo(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fYm(d,e,s,g)
w=e+s+1
C.hft(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hNs(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fI(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fI(u,r)}w&2&&B.aj(g)
g[n]=o},
cEN(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hNq(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9y(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}},
hfu(d,e,f,g,h,i){var w,v,u,t,s,r
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
hNr(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.dY((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nU:function nU(d,e,f){this.a=d
this.b=e
this.c=f},
cEO:function cEO(){},
cEP:function cEP(){},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
cER:function cER(d){this.a=d},
aR0:function aR0(d,e){this.a=d
this.b=e},
h5j(d,e,f){var w=new C.RB(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
RB:function RB(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3D:function a3D(d,e){this.a=d
this.b=e},
bHg:function bHg(d){this.a=d
this.c=this.b=0},
hvV(){return new C.bFD()},
bFD:function bFD(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwY:function cwY(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hN7(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcWZ(d)))
v=f*2+2
u=C.hd5(C.hd7(),64)
t=new C.cgK(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cgL(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cKq(w,0,s,0))},
cwW:function cwW(d,e){this.c=d
this.d=e},
awO:function awO(d,e){this.a=d
this.b=e},
cwZ:function cwZ(d,e,f,g){var _=this
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
b8e:function b8e(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwX:function cwX(){this.a=$},
heT(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hvE(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEd:function bEd(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h30(d,e){e&=31
return(d&$.qb[e])<<e>>>0},
ns(d,e){e&=31
return(d>>>e|C.h30(d,32-e))>>>0},
hd6(d){var w,v=new C.asu()
if(B.iJ(d))v.aK_(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hd7(){var w=C.hd6(0),v=new Uint8Array(4),u=x.S
u=new C.cgM(w,v,A.E9,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lE(0)
return u},
hd5(d,e){var w=new C.cgI(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cgH:function cgH(){},
cgL:function cgL(d,e,f){this.a=d
this.b=e
this.c=f},
cgF:function cgF(){},
ast:function ast(d){this.a=d},
cgK:function cgK(d){this.a=$
this.b=d
this.c=$},
cgG:function cgG(){},
cgE:function cgE(){},
asu:function asu(){this.b=this.a=$},
cgJ:function cgJ(){},
cgM:function cgM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cgI:function cgI(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cgD:function cgD(){},
cgC:function cgC(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNG:function bNG(){},
bNH:function bNH(d){this.a=d},
hQm(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9N:function b9N(){},
cqK:function cqK(){},
bOz:function bOz(d,e){this.a=d
this.b=!1
this.c=e},
bOA:function bOA(){},
hZd(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avs(d){var w=0,v=B.j(x.H),u
var $async$avs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f1x?2:4
break
case 2:w=5
return B.b(A.kc.h1("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avs)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kc.h1("SystemChrome.setEnabledSystemUIOverlays",C.hZd(null),u),$async$avs)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avs,v)},
avv:function avv(d,e){this.a=d
this.b=e},
a8g:function a8g(d){this.a=d},
fUj(d,e){return new C.aVu(e,d,null)},
aVu:function aVu(d,e,f){this.e=d
this.c=e
this.a=f},
aAm:function aAm(d,e,f,g,h){var _=this
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
i0R(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fu_(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bn(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fu_:function fu_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ank(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ank=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agJ("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$ank)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cD(t,new C.bZk(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bZl())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ank,v)},
anm(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ank(),$async$anm)
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
l=new B.S(Date.now(),0,!1).a7().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nr("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ah(),"savedAt",l],t,q),null),$async$anm)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],t,q),null),$async$anm)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anm,v)},
bZm(d){return C.hBo(d)},
hBo(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bZm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agJ("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hO),$async$bZm)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VM(B.a2(q,x.N,x.z))
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
return B.i($async$bZm,v)},
anl(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ank(),$async$anl)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nt(r,new C.bZn(d))
w=4
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),null),$async$anl)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aP4("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anl)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anl,v)},
bZk:function bZk(){},
bZl:function bZl(){},
bZn:function bZn(d){this.a=d},
iaP(d,e,f){return B.bS(A.K,null,new C.fK7(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fK7:function fK7(d,e,f){this.a=d
this.b=e
this.c=f},
a0G:function a0G(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIL:function aIL(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f7d:function f7d(d,e){this.a=d
this.b=e},
f7h:function f7h(d){this.a=d},
f7i:function f7i(d){this.a=d},
f7j:function f7j(d,e,f){this.a=d
this.b=e
this.c=f},
f7e:function f7e(d){this.a=d},
f7f:function f7f(d){this.a=d},
f7g:function f7g(d,e){this.a=d
this.b=e},
f78:function f78(d){this.a=d},
f76:function f76(d){this.a=d},
f77:function f77(d){this.a=d},
f79:function f79(d){this.a=d},
f7a:function f7a(d){this.a=d},
f7n:function f7n(d,e){this.a=d
this.b=e},
f7m:function f7m(d,e){this.a=d
this.b=e},
f7c:function f7c(d,e,f){this.a=d
this.b=e
this.c=f},
f7b:function f7b(d,e,f){this.a=d
this.b=e
this.c=f},
f7k:function f7k(d,e){this.a=d
this.b=e},
f7l:function f7l(d,e){this.a=d
this.b=e},
f7q:function f7q(d){this.a=d},
f7r:function f7r(d,e){this.a=d
this.b=e},
f7p:function f7p(d,e){this.a=d
this.b=e},
f7o:function f7o(){},
hhT(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aJ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cD(v,new C.fep(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.feq(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1F(d){return C.i26(d)},
i26(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1F=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fwO(n)
t=4
j=m
i=C
w=7
return B.b(B.a2e("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1F)
case 7:j.$1(i.hhT(f))
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
return B.b(B.az(),$async$a1F)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hhT(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fey(d),$async$a1F)
case 13:p=j.C(new i.a_(h,new g.fwM(f),o),o.k("J.E"))
A.d.aY(p,new C.fwN())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1F,v)},
ahj(d,e){return C.iau(d,e)},
iau(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fJC(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahb("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahj)
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
return B.b(B.az(),$async$ahj)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahj)
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
return B.i($async$ahj,v)},
fey(d){return C.hRH(d)},
hRH(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fey=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fey)
case 7:r=f
q=r.tb("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kG(q,B.T(q).c)
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
return B.i($async$fey,v)},
ag9(d,e){return C.i0J(d,e)},
i0J(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ag9=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ag9)
case 6:s=g
r=B.aX(x.N)
q=s.tb("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h5(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$ag9)
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
return B.b(C.a1F(d),$async$ag9)
case 8:n=g
J.nt(n,new C.ftE(e))
w=9
return B.b(C.ahj(d,n),$async$ag9)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ag9,v)},
iaU(d,e){return B.a6(d,!1).cm(B.e9(new C.fKt(e),!0,null,x.H))},
hNu(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d6(w.d,new C.cG9())},
ok:function ok(d,e,f){this.a=d
this.b=e
this.c=f},
fep:function fep(){},
feq:function feq(){},
fwO:function fwO(d){this.a=d},
fwM:function fwM(d){this.a=d},
fwN:function fwN(){},
fJC:function fJC(){},
ftE:function ftE(d){this.a=d},
fKt:function fKt(d){this.a=d},
Yq:function Yq(d,e){this.c=d
this.a=e},
axl:function axl(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cG9:function cG9(){},
cGb:function cGb(d,e){this.a=d
this.b=e},
cGe:function cGe(d){this.a=d},
cGf:function cGf(d){this.a=d},
cGd:function cGd(){},
cGg:function cGg(d,e){this.a=d
this.b=e},
cGc:function cGc(d){this.a=d},
cGh:function cGh(){},
cGa:function cGa(d,e){this.a=d
this.b=e},
cGi:function cGi(){},
cG5:function cG5(d){this.a=d},
cG3:function cG3(d){this.a=d},
cG4:function cG4(d){this.a=d},
cG6:function cG6(d,e){this.a=d
this.b=e},
cG2:function cG2(d){this.a=d},
cG1:function cG1(d){this.a=d},
cG_:function cG_(d,e){this.a=d
this.b=e},
cG0:function cG0(d){this.a=d},
cG8:function cG8(){},
cG7:function cG7(d){this.a=d},
cFZ:function cFZ(d,e){this.a=d
this.b=e},
cFY:function cFY(d,e){this.a=d
this.b=e},
cFX:function cFX(d,e){this.a=d
this.b=e},
cGj:function cGj(d){this.a=d},
Yo:function Yo(d,e,f){this.c=d
this.d=e
this.a=f},
aED:function aED(d,e,f){this.a=d
this.b=e
this.c=f},
axh:function axh(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cFq:function cFq(d){this.a=d},
cFp:function cFp(d){this.a=d},
cFs:function cFs(d,e,f){this.a=d
this.b=e
this.c=f},
cFA:function cFA(){},
cFB:function cFB(d){this.a=d},
cFt:function cFt(d,e,f){this.a=d
this.b=e
this.c=f},
cFr:function cFr(d,e){this.a=d
this.b=e},
cFv:function cFv(d,e){this.a=d
this.b=e},
cFw:function cFw(d,e){this.a=d
this.b=e},
cFx:function cFx(d,e){this.a=d
this.b=e},
cFu:function cFu(d){this.a=d},
cFz:function cFz(d){this.a=d},
cFy:function cFy(d,e){this.a=d
this.b=e},
cFG:function cFG(d){this.a=d},
cFC:function cFC(d,e){this.a=d
this.b=e},
cFD:function cFD(d,e){this.a=d
this.b=e},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFF:function cFF(d,e){this.a=d
this.b=e},
axj:function axj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i4r(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ek(v,x.cK).bA(new C.fBh(),x.H).eR(new C.fBi())}}else if(s)C.hjk()}catch(t){}},
hjk(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ek(v,x.cK).eR(new C.fiP())}catch(u){}},
i4u(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fBh:function fBh(){},
fBi:function fBi(){},
fiP:function fiP(){},
hnX(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
hnU(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l5)return null
return A.a.b5(w,14)},
h1K(d){var w
if(d.b!==D.l5)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b5(w,21)},
i4U(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hnY(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i4P(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kZ(0,f)
t=x.N
u=B.cD(u,new C.fCg(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.kZ(0,f),u=new B.JB(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ri(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ri(A.a.b5(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cG(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i4N(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.aY(q,new C.fCf())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aQ0(w,u,s,0)}return w},
i4R(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4c:$.huI(),s=x.N,r=B.U(s,s)
for(s=t.gdL(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hnV(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
ffr(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hnX(q)===e)return q}return null},
i4S(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b5(v,u)
return A.d.gI(D.GP).a},
i4T(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ae2(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ae2(0,0,0)
v=C.ffr(b6,b0)
u=C.ffr(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i4R(b2,C.i4P(C.hnV(b2),v.r))
if(s.a!==0){u.r=C.i4N(C.hnV(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hnX(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.eb(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.ffr(b6,n)
i=C.ffr(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.h1K(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hnU(a8)===a0||C.h1K(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QQ(a1,new C.fCm(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j2
$.j2=a9+1
A.d.L(a1,new C.eM(""+1000*a6+"_"+a9,D.l5,a2,a3,a4,a5,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.ae2(k,t,e)},
i4O(d){var w=C.i4S(d)
if(d.w==="hati_kuhowa")return C.hnh("",w)
return C.hng("",w)},
fCg:function fCg(){},
fCf:function fCf(){},
fCm:function fCm(d){this.a=d},
hj3(){var w=new B.S(Date.now(),0,!1),v=new C.fhS()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
h1T(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fDe(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l5&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hob(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fDe(d)
w=B.bi(u)
if(w==null)return!C.fDe(d)
return new B.S(Date.now(),0,!1).a7().cY(w.a7().bR(18e9))},
i5z(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a7().ac()},
hFp(d){return A.a.i(d).toLowerCase()},
apv(d){return C.hFr(d)},
hFr(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$apv)
case 7:r=f
p=r.tb("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.M(o,C.i96(),B.T(o).k("M<1,m>")).c0(0,new C.c8U())
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
return B.i($async$apv,v)},
apu(d,e){return C.hFq(d,e)},
hFq(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apu=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apv(d),$async$apu)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apu)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qk(r)),$async$apu)
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
return B.i($async$apu,v)},
apw(d,e){return C.hFs(d,e)},
hFs(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apv(d),$async$apw)
case 3:r=g
if(!J.hx(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apw)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qk(r)),$async$apw)
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
return B.i($async$apw,v)},
V4(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$V4=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fVP&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$V4)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aJ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jz(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VM(B.a2(f.a(n.b),e,a0)))}$.a74=o}}t=2
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
return B.b(B.c3(),$async$V4)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u2("civic_hati_kiapo_uongozi",null,A.ef),$async$V4)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jz(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VM(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a74.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a74.n(0,i.a,i.b)}w=20
return B.b(C.apx(),$async$V4)
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
case 16:case 9:$.fVP=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V4,v)},
apx(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apx=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$apx)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a74,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ah())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apx)
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
return B.i($async$apx,v)},
aZX(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.V4(!1),$async$aZX)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a74.h(0,t)
r=s==null?null:s.hH()
if(r==null){u=null
w=1
break}u=C.bBL(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZX,v)},
a75(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a75=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hH()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a74.n(0,d,o)
$.fVP=!0
w=3
return B.b(C.apx(),$async$a75)
case 3:w=4
return B.b(B.c3(),$async$a75)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a74,n=new B.cI(n,B.a3(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ah())}w=9
return B.b(B.nr("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a7().ac()],e,x.z),null),$async$a75)
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
return B.i($async$a75,v)},
apy(d){var w=0,v=B.j(x.T),u,t,s
var $async$apy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i0().a5r(A.eJ),$async$apy)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fn(),$async$apy)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZW(t,d),$async$apy)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apy,v)},
aZW(d,e){return C.hFt(d,e)},
hFt(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZW=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZW)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.eZ().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ih("media")
w=8
return B.b(p.wX(q,new Uint8Array(B.ce(d)),D.bAz),$async$aZW)
case 8:n=p.CB(q)
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
return B.i($async$aZW,v)},
Ks(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,l,m,n)},
fh7(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
fZR(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,g,e,f)},
fgG(d,e,f,g){return C.fh7(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
fZS(d,e,f,g,h,i,j,k){var w=C.cB()
return C.er(A.qw,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bo,A.a6,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,g,e,f)},
hj2(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
bBL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hj2(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l5&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hH()}h=C.h1o(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BG(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hj2(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l5&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fBf(a2))}else A.d.bq(a1.z,new C.fBg())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fDe(a0))a0.ax=a6.f.a7().ac()
return a0},
h1o(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fE1(D.a5e),l=C.cB(),k=x.u,j=B.a([C.er(A.bi,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a6,"",1,C.cB(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cn,D.lw,1,0,0)],k),i=B.a([],k)
i.push(C.Ks("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Ks("TAREHE:",A.bi,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fZR("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hj3()))
i.push(C.fgG(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Ks("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Ks("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a6,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fh7(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fZS("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fZS("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fZS("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fh7(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Ks("VIDEO YA KIAPO",A.bi,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bi,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a6,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cn,D.lw,0.77,0.115,0.492))
i.push(C.Ks("Rais Anayeapa:",A.bi,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Ks("Jina:",A.bi,p,13,A.bo,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fZR("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fgG(0.195,0.7130000000000001,0.62,n))
i.push(C.Ks("Sahihi:",A.bi,p,13,A.bo,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bi,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a6,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,0.38,0.21500000000000002,0.73))
i.push(C.fgG(0.21500000000000002,0.795,0.38,n))
i.push(C.Ks("Tarehe:",A.bi,p,13,A.bo,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fZR("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hj3()))
i.push(C.fgG(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fh7(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.Ks("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rv(4294967035,t,0,0,j,l,D.qk,"","",u,D.de)
return C.BG(t,t,t,t,D.of,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agk(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agk=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.eXm)
w=1
break}w=3
return B.b(C.V4(!0),$async$agk)
case 3:w=4
return B.b(C.aZX(p),$async$agk)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hob(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bS(D.beh,null,new C.fw9(p),f,!0,!0,!1,A.lx,!1,!1,x.N),$async$agk)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fwa(),f,null,!0,!0,x.y),$async$agk)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h1o(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h1o(p))
case 1:return B.h(u,v)}})
return B.i($async$agk,v)},
fhS:function fhS(){},
c8U:function c8U(){},
fBf:function fBf(d){this.a=d},
fBg:function fBg(){},
fw9:function fw9(d){this.a=d},
fw7:function fw7(d){this.a=d},
fw8:function fw8(d){this.a=d},
fwa:function fwa(){},
fw5:function fw5(d){this.a=d},
fw6:function fw6(d){this.a=d},
aq2:function aq2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDp:function aDp(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
eau:function eau(d){this.a=d},
eas:function eas(d){this.a=d},
eat:function eat(d){this.a=d},
eav:function eav(d){this.a=d},
eaw:function eaw(d){this.a=d},
wz(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,l,m,n)},
hiH(d,e,f){var w=4291404327
return B.a([C.qa(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.qa(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fg6(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qa(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qa(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qa(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qa(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
fg5(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cn,D.cQ,g,e,f)},
bzb(d,e,f,g){return C.qa(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hiG(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qa(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wz(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hnW(){var w=new B.S(Date.now(),0,!1),v=new C.fCl()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
hiI(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wz(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fg5("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bzb(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wz("Sahihi:",A.bi,j,15,A.a6,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a6,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,s,t,g-0.004),C.bzb(t,g+0.044,s,w)],x.u)},
agL(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.deR,D.cjG,D.d7h,D.d98],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fZ8(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fE1(d.d),v=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,1,0,0)],x.u)
A.d.v(v,C.hU6(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hU6(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wz("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hiH(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hiH(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fg6(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fg6(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wz("\ud83c\udf33",A.L,4279898632,22,A.a6,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qa(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.qa(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wz("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qa(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qa(b9,0.016,D.l6,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qa(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wz("TAREHE:",A.bi,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fg5("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hnW()),C.bzb(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wz(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qa(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qa(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.er(A.bi,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bo,A.cx,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cn,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qa(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.er(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cn,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hiG(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wz(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fg5("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
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
d=B.a([new C.eM(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bi,a9,D.bg,b2,b3,2,0,!1,s,0,D.cn,0,"","","","","",!1,0),j,new C.eM(""+1000*f+"_"+e,D.f4,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cn,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eM(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dN,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*i+"_"+h,D.f4,a1,a2,0.046,0.025875,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*e+"_"+a3,D.f4,a0,k,a1+0.046-a0,l,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cn,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hiG("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a53||w===D.a55||w===D.a52||w===D.a54){w=t-0.008
A.d.v(c2,C.fg6(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fg6(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qa(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.qa(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qa(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wz("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wz("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hiI("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hiI("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qa(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wz("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wz("Jina:",A.bi,b9,15,A.a6,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fg5("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bzb(0.215,p,0.3116,b5),C.wz("Sahihi:",A.bi,b9,15,A.a6,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bi,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a6,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,0.3161999999999999,0.5738,s-0.044),C.bzb(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qa(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wz("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i4Q(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h22(d.d),p=new C.fCh(s),o=new C.fCi(s),n=d.z,m=n===D.a53||n===D.a55||n===D.a52||n===D.a54,l=n===D.aFz||n===D.a56||n===D.aFA,k=B.bZ(0,B.fP(q,A.A,t,t,A.ci,A.bV,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a56?26:16
i.push(new C.fCk().$1$size(w))}if(n===D.aFB)i.push(D.fCm)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hE,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aON,p.$1$w(0.9),D.aON,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b9A,t,n,w,t,t,A.n),t,t,t,t,A.aj9,t,t,t))
i.push(A.am)
i.push(new C.fCj(r).$1("NIMETOWE"))
i.push(A.fQ)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mg,new B.cl(A.aP,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.db,new B.bB(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b1,A.r,B.a([k,new B.D(A.ahK,B.x(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hng(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agL(e,t)
if(r==null)r=A.d.gI(D.GP)
w=C.cB()
v=C.rv(r.e,t,0,0,C.fZ8(r,0.165,y.O,D.d9K,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qk,"","",s,D.de)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BG(t,t,t,t,D.of,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hnh(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agL(e,t)
if(r==null)r=A.d.gI(D.GP)
w=C.cB()
v=C.rv(r.e,t,0,0,C.fZ8(r,0.165,y.f,D.d5n,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qk,"","",s,D.de)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BG(t,t,t,t,D.of,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bD6(d,e,f){var w=0,v=B.j(x.T),u
var $async$bD6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fNV(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bD6,v)},
agl(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agl=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fwd(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lt,null,new C.fwe(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agl)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD6(d,"Hati ya Kuhowa",D.GP),$async$agl)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L5(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agl)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hng(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agl,v)},
agm(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agm=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fwh(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lt,null,new C.fwi(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agm)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD6(d,"Hati ya Kuhoweya",D.GP),$async$agm)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L5(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agm)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnh(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agm,v)},
agn(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agn=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fwl(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lt,null,new C.fwm(m),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agn)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD6(d,"Malipo ya Awamu ya Mahari",D.QG),$async$agn)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L5(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agn)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agL(s,D.QG)
if(q==null)q=A.d.gI(D.QG)
n=C.cB()
p=C.rv(q.e,null,0,0,C.fZ8(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d0j,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qk,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.de)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BG(null,null,null,null,D.of,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agn,v)},
xx:function xx(d,e){this.a=d
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
fCl:function fCl(){},
fCh:function fCh(d){this.a=d},
fCj:function fCj(d){this.a=d},
fCk:function fCk(){},
fCi:function fCi(d){this.a=d},
fNV:function fNV(d,e){this.a=d
this.b=e},
ad7:function ad7(d,e,f){this.c=d
this.d=e
this.a=f},
dYr:function dYr(d,e,f){this.a=d
this.b=e
this.c=f},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYp:function dYp(d,e){this.a=d
this.b=e},
acw:function acw(d,e,f){this.c=d
this.d=e
this.a=f},
fwd:function fwd(){},
fwe:function fwe(d){this.a=d},
fwb:function fwb(d){this.a=d},
fwc:function fwc(d){this.a=d},
fwh:function fwh(){},
fwi:function fwi(d){this.a=d},
fwf:function fwf(d){this.a=d},
fwg:function fwg(d){this.a=d},
fwl:function fwl(){},
fwm:function fwm(d){this.a=d},
fwj:function fwj(d){this.a=d},
fwk:function fwk(d){this.a=d},
Kv(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.er(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,k,l,m)},
CH(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
hjn(d,e,f){return C.CH(0,0.002,D.fs,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
bzl(d,e,f,g,h){return B.a([C.CH(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.Kv(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fZW(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CH(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.CH(h,0.016,D.l6,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CH(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a12(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kv(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.er(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,t,u,g-0.002),C.hjn(u,g+0.018,t)],x.u)},
hjo(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CH(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CH(w,0.024,D.l6,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CH(w,0.024,D.l6,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kv(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzk(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kv("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a6,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,v,w,f-0.006),C.hjn(w,f+0.016,v)],x.u)},
h23(d){var w,v
for(w=0;w<19;++w){v=D.QV[w]
if(v.a===d)return v}return null},
i76(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agL(A.a.b5(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agL(A.a.b5(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b5(k,18)
w=C.agL(u,D.QG)
v=w==null?l:w.d
if(v==null){w=C.agL(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h23(A.a.b5(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hkc.a8(0)
$.hkp.a8(0)
t=C.fE1(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h37(d){var w=0,v=B.j(x.T),u
var $async$h37=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fPn(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h37,v)},
xA:function xA(d,e){this.a=d
this.b=e},
nH:function nH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biR:function biR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fPn:function fPn(){},
ada:function ada(d){this.a=d},
efJ:function efJ(d,e){this.a=d
this.b=e},
efI:function efI(d){this.a=d},
efH:function efH(d,e){this.a=d
this.b=e},
aeR:function aeR(d,e,f){this.c=d
this.d=e
this.a=f},
h22(d){return $.hkp.c9(0,d,new C.fE3(d))},
fE1(d){return $.hkc.c9(0,d,new C.fE2(d))},
fB(d){return B.fTn(d>>>16&255,d>>>8&255,d&255,255)},
hXa(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hlv(4294570461,4293910718,4284234270,u)
case 1:return C.hlv(4294635750,4293975240,t,4292912216)
case 2:w=C.feG(s,4294505966,r)
C.bz5(w,14,16,p)
C.kv(w,8,9,464,836,u,1.2)
C.CD(w,2,2,1,1,u,10)
C.CD(w,478,2,-1,1,u,10)
C.CD(w,2,852,1,-1,u,10)
C.CD(w,478,852,-1,-1,u,10)
return w
case 3:return C.feG(4294966515,4294373082,4289102906)
case 4:return C.hRW(C.feG(4294376440,4293653998,4290287194))
case 5:w=C.feG(4294965238,4294437098,4288444980)
C.bz5(w,14,16,4283043359)
C.kv(w,6,7,468,840,u,1)
C.kv(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,n,4294175448)
C.rR(v,n)
C.kv(v,24,24,432,806,4286209070,1)
C.a0Q(v,12,12,468,12,o,3,20)
C.a0Q(v,12,842,468,842,o,3,20)
C.a0Q(v,12,12,12,842,o,3,20)
C.a0Q(v,468,12,468,842,o,3,20)
return v
case 7:return C.hQ2(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,m,4293911504)
C.rR(v,m)
C.kv(v,28,28,424,798,l,1)
C.fnY(v,28,28,l,k)
C.fnY(v,452,28,l,k)
C.fnY(v,28,826,l,k)
C.fnY(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,j,4294111986)
C.rR(v,j)
C.kv(v,18,18,444,818,4292401368,0.7)
B.iL(v,!0,C.fB(p),0,13,0,853)
return v
case 10:return C.hTT(i,4294173372)
case 11:return C.hUZ(4294439140,4293449662)
case 12:return C.hPV(h,4294239432)
case 13:return C.hUq(4294244340,4293193448)
case 14:return C.hYL(4294505710,4293780694)
case 15:return C.fdE(4294966259,4294439138,o,p,q)
case 16:return C.fdE(4294966776,4294178544,o,g,g)
case 17:return C.fdE(4294965493,4294504170,o,4286200650,q)
case 18:return C.fdE(4294966519,4294373862,o,p,p)
case 19:return C.hT0()
case 20:return C.hT1()
case 21:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,h,4293976768)
C.rR(v,h)
C.bz5(v,14,16,p)
B.iL(v,!0,C.fB(u),4,475,4,9)
B.iL(v,!0,C.fB(u),4,475,844,849)
B.iL(v,!0,C.fB(u),4,9,4,849)
B.iL(v,!0,C.fB(u),470,475,4,849)
C.a0Q(v,10,12,470,12,u,2,16)
C.a0Q(v,10,842,470,842,u,2,16)
C.a0Q(v,10,12,10,842,u,2,18)
C.a0Q(v,470,12,470,842,u,2,18)
C.CD(v,2,2,1,1,t,10)
C.CD(v,478,2,-1,1,t,10)
C.CD(v,2,852,1,-1,t,10)
C.CD(v,478,852,-1,-1,t,10)
C.kv(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,s,4294438872)
C.rR(v,s)
C.kv(v,14,16,452,822,o,2.2)
C.kv(v,22,24,436,806,o,1)
C.h0f(v,!1,!1,o,p,p,36,14,16)
C.kL(v,240,20,7,o,!0)
C.kL(v,240,834,7,o,!0)
C.kL(v,18,427,7,o,!0)
C.kL(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,i,4293910712)
C.rR(v,i)
B.iL(v,!0,C.fB(u),0,479,0,20)
B.iL(v,!0,C.fB(u),0,479,834,853)
B.iL(v,!0,C.fB(u),0,20,0,853)
B.iL(v,!0,C.fB(u),460,479,0,853)
B.iL(v,!0,C.fB(f),5,474,5,9)
B.iL(v,!0,C.fB(f),5,474,844,848)
B.iL(v,!0,C.fB(f),5,9,5,848)
B.iL(v,!0,C.fB(f),470,474,5,848)
C.kv(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hr(q,q,A.cd,0,A.e3,854,q,0,3,q,A.cd,480,!1)
C.yq(v,e,4294174404)
C.rR(v,e)
C.bz5(v,14,16,p)
B.iL(v,!0,C.fB(u),3,476,3,8)
B.iL(v,!0,C.fB(u),3,476,845,850)
B.iL(v,!0,C.fB(u),3,8,3,850)
B.iL(v,!0,C.fB(u),471,476,3,850)
C.kv(v,9,10,462,834,t,1)
C.kv(v,14,16,452,822,u,1.8)
C.kL(v,240,8,4,u,!0)
C.kL(v,240,846,4,u,!0)
C.kL(v,8,427,4,u,!0)
C.kL(v,472,427,4,u,!0)
C.kL(v,8,8,3,t,!0)
C.kL(v,472,8,3,t,!0)
C.kL(v,8,846,3,t,!0)
C.kL(v,472,846,3,t,!0)
return v}},
yq(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kN(d,!1,A.dd,new B.RW(s),r,A.cZ,1,0,w-1,k,k);++k}},
rR(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eE()
n.dt(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iG()
v=A.o.D(A.k.N(s.gb7(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jP(u,t,v,r,q,255)}},
kv(d,e,f,g,h,i,j){var w,v=null,u=C.fB(i),t=e+g
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,t,f,f)
w=f+h
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,t,w,w)
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,e,f,w)
B.kN(d,!0,A.dd,u,v,A.cZ,j,t,t,f,w)},
CD(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,2,e,e+g*j,f,f)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,1,w,e+g*t,v,v)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,1,w,w,v,f+h*t)},
hlv(d,e,f,g){var w=null,v=B.hr(w,w,A.cd,0,A.e3,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rR(v,d)
B.iL(v,!0,C.fB(f),0,479,0,28)
B.iL(v,!0,C.fB(f),0,479,826,853)
B.iL(v,!0,C.fB(f),0,28,0,853)
B.iL(v,!0,C.fB(f),452,479,0,853)
C.kv(v,5,5,470,844,g,1.1)
C.kv(v,28,28,424,798,g,1.6)
C.CD(v,2,2,1,1,g,11)
C.CD(v,478,2,-1,1,g,11)
C.CD(v,2,852,1,-1,g,11)
C.CD(v,478,852,-1,-1,g,11)
return v},
feG(d,e,f){var w=null,v=B.hr(w,w,A.cd,0,A.e3,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rR(v,d)
C.kv(v,14,16,452,822,f,1.6)
C.kv(v,20,22,440,810,f,0.8)
return v},
bz5(d,e,f,g){var w,v=C.fB(g)
B.iL(d,!0,v,0,479,0,f-1)
w=854-f
B.iL(d,!0,v,0,479,w,853);--w
B.iL(d,!0,v,0,e-1,f,w)
B.iL(d,!0,v,480-e,479,f,w)},
hRW(d){var w,v,u=4291404327
C.bz5(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kL(d,w,8,3,u,!0)
C.kL(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kL(d,7,v,3,u,!0)
C.kL(d,473,v,3,u,!0)}return d},
fr0(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1C(d,C.fB(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1C(d,C.fB(k),t)
t=A.k.V(n*0.39)
C.kL(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kL(d,e+g*t,f+h*3,4,k,!0)
C.kL(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kL(d,e+g*t,f,5,k,!0)
C.kL(d,e,f+h*t,5,k,!0)}},
h0f(d,e,f,g,h,i,j,k,l){var w,v
C.fr0(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fr0(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fr0(d,k,v,1,-1,e,f,g,h,i,j)
C.fr0(d,w,v,-1,-1,e,f,g,h,i,j)},
a0Q(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l3(d,!0,A.dd,new B.r1(p),null,A.cZ,j,r,q)}},
fq6(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kN(d,!0,A.dd,new B.r1(o),null,A.cZ,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kN(d,!0,A.dd,new B.r1(o),null,A.cZ,1.4,q,q,p,p+h*r)}},
hQ2(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.cd,0,A.e3,854,o,0,3,o,A.cd,480,!1)
C.yq(n,d,e)
C.rR(n,d)
C.kv(n,20,20,440,814,f,1.2)
C.fq6(n,0,0,1,1,g)
C.fq6(n,480,0,-1,1,g)
C.fq6(n,0,854,1,-1,g)
C.fq6(n,480,854,-1,-1,g)
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
B.kN(n,!0,A.dd,new B.r1(p),o,A.cZ,1.2,240,r,60,q)}return n},
fnY(d,e,f,g,h){var w
C.fu0(d,!0,C.fB(g),13,e,f)
C.fu0(d,!0,C.fB(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1C(d,C.fB(h),w)},
kL(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1C(d,C.fB(h),r)
return}B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,e,u,v,f)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,u,e,f,t)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,e,s,t,f)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,s,e,f,v)},
fdD(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1C(d,C.fB(i),v)
v=e+g*14
w=f+h*14
C.kL(d,v,w,6,j,!0)
C.kL(d,v,w,3,i,!0)},
fdE(d,e,f,g,h){var w=null,v=B.hr(w,w,A.cd,0,A.e3,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rR(v,d)
C.kv(v,18,18,444,818,f,2)
C.kv(v,26,26,428,802,f,0.9)
if(h!=null)B.iL(v,!0,C.fB(h),28,451,28,34)
C.fdD(v,18,18,1,1,g,f)
C.fdD(v,462,18,-1,1,g,f)
C.fdD(v,18,836,1,-1,g,f)
C.fdD(v,462,836,-1,-1,g,f)
return v},
hT0(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.cd,0,A.e3,854,v,0,3,v,A.cd,480,!1)
C.yq(r,u,4294240980)
C.rR(r,u)
C.kv(r,10,12,460,830,t,3.2)
C.kv(r,18,20,444,814,s,1.2)
C.kv(r,24,26,432,802,t,1.8)
C.h0f(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kL(r,w,16,3,t,!0)
C.kL(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kL(r,16,w,3,t,!0)
C.kL(r,464,w,3,t,!0)}return r},
hT1(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.cd,0,A.e3,854,t,0,3,t,A.cd,480,!1)
C.yq(p,s,4294373080)
C.rR(p,s)
C.kv(p,16,18,448,818,r,2.4)
C.kv(p,24,26,432,802,4286209044,1)
w=new C.ffY(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h0f(p,!1,!0,r,q,q,34,16,18)
return p},
bzM(d,e,f,g,h,i){B.iL(d,!0,C.fB(i),e,e+g,f,f+h)},
bAB(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kN(d,!1,A.dd,new B.RW(i),null,A.cZ,1,e,w,l,l)}},
hTS(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kN(d,!1,A.dd,new B.r1(r),null,A.cZ,1,e,s,t,t);++v}return}w=f+g-1
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
B.kN(d,!1,A.dd,new B.r1(r),null,A.cZ,1,t,t,f,s);++q}},
hTT(d,e){var w,v,u=null,t=B.hr(u,u,A.cd,0,A.e3,854,u,0,3,u,A.cd,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hTS(t,v,w,30,D.cU1,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzM(t,44,44,392,766,d)
C.bAB(t,44,44,392,766,d,e)
C.rR(t,d)
C.kv(t,44,44,392,766,4292128567,2.2)
C.kv(t,50,50,380,754,4279898632,0.8)
return t},
hUY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kL(d,e,f,7,h,!0)
C.kL(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.6,w,u,v,t)
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kN(d,!0,A.dd,new B.r1(p),o,A.cZ,1.2,w,v,q,q)}break
default:B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.5,e-8,e+8,f,f)
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.5,e,e,f-8,f+8)
B.l3(d,!0,A.dd,C.fB(h),o,A.cZ,2,e,f)}},
hUZ(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.cd,0,A.e3,854,s,0,3,s,A.cd,480,!1)
B.iL(r,!0,C.fB(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hUY(r,u,v,w,4292391514)}C.bzM(r,46,46,388,762,d)
C.bAB(r,46,46,388,762,d,e)
C.rR(r,d)
C.kv(r,46,46,388,762,4291404327,1.8)
return r},
hgV(d,e,f,g){C.fu0(d,!0,C.fB(g),16,e,f)
C.fu0(d,!0,C.fB(g),11,e,f)
C.kL(d,e,f,6,g,!0)
B.kN(d,!0,A.dd,C.fB(g),null,A.cZ,1.3,e-14,e+14,f,f)
B.kN(d,!0,A.dd,C.fB(g),null,A.cZ,1.3,e,e,f-14,f+14)},
hPV(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.cd,0,A.e3,854,v,0,3,v,A.cd,480,!1)
B.iL(s,!0,C.fB(4280948752),0,479,0,853)
B.iL(s,!0,C.fB(u),0,479,0,78)
B.iL(s,!0,C.fB(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hgV(s,w,39,t)
C.hgV(s,w,815,t)}C.bzM(s,38,92,404,670,d)
C.bAB(s,38,92,404,670,d,e)
C.rR(s,d)
C.kv(s,38,92,404,670,t,1.8)
C.kv(s,45,99,390,656,4287322667,0.8)
return s},
hUp(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1C(d,new B.r1(o),p)}B.l3(d,!0,A.dd,C.fB(4292128567),null,A.cZ,3,e,f)},
hUq(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.cd,0,A.e3,854,s,0,3,s,A.cd,480,!1)
C.yq(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kN(q,!0,A.dd,new B.r1(v),s,A.cZ,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kN(q,!0,A.dd,new B.r1(u),s,A.cZ,1.1,v,v,0,853)}B.iL(q,!0,C.fB(r),0,479,0,70)
B.iL(q,!0,C.fB(r),0,479,798,853)
for(t=0;t<5;++t)C.hUp(q,70+t*85,48,4292128567)
C.bzM(q,48,78,384,712,d)
C.bAB(q,48,78,384,712,d,e)
C.rR(q,d)
C.kv(q,48,78,384,712,4291404327,1.6)
return q},
hYL(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.cd,0,A.e3,854,t,0,3,t,A.cd,480,!1)
B.iL(r,!0,C.fB(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kL(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l3(r,!0,A.dd,new B.r1(u),t,A.cZ,1,v,w)}C.bzM(r,40,40,400,774,d)
C.bAB(r,40,40,400,774,d,e)
C.rR(r,d)
C.kv(r,40,40,400,774,4291058750,2)
C.kv(r,48,48,384,758,s,0.8)
return r},
kU:function kU(d,e){this.a=d
this.b=e},
fE3:function fE3(d){this.a=d},
fE2:function fE2(d){this.a=d},
ffY:function ffY(d){this.a=d},
fEH(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hUS(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fZP(d){var w,v,u,t=null,s=A.a.cK(d,"{"),r=A.a.oD(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aJ(0,Ai.agH(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afe(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afe=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vk(null,""),$async$afe)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n7(n)
if(e==null)s=A.hD
else{r=C.hUS(e)
s=B.a([new B.a_Q(A.cV.gcB().aK(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qR(t,d,s,"news",E.Fj),$async$afe)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KV(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
bCe(d){return C.i6N(d)},
i6N(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCe=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afe(r,null),$async$bCe)
case 7:q=f
p=C.fZP(q)
if(p==null){u=d
w=1
break}o=d.aCk(p)
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
return B.i($async$bCe,v)},
hkO(d){var w,v=F.h1k(d)
v=B.aK(v,"book","newspaper")
if(F.a1V(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fIC(d,e,f,g){return C.i8E(d,e,f,g)},
i8E(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fIC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fEH(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hok()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afe('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hkO(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fIC)
case 3:r=m.fZP(i)
if(r==null)throw B.V(y.S)
q=new C.zv(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aCk(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1V(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1V(A.d.aH(t," "))==="sw"?C.bCe(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIC,v)},
bBJ(d,e,f,g,h){return C.i4p(d,e,f,g,h)},
i4p(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBJ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fQ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hok()
k=A.S.ao(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afe('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hkO(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBJ)
case 3:p=j.fZP(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCk(B.a2(o,x.N,x.z))
m=A.S.ao(n.ah(),null)!==A.S.ao(d.ah(),null)}else{n=d
m=!1}w=m&&F.a1V(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCe(n),$async$bBJ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7K(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBJ,v)},
a7K:function a7K(d,e,f){this.a=d
this.b=e
this.c=f},
ibs(d,e){return B.a6(d,!1).cm(B.e9(new C.fPy(e),!0,null,x.H))},
fPy:function fPy(d){this.a=d},
VA:function VA(d,e){this.c=d
this.a=e},
aDI:function aDI(d,e,f,g,h,i,j,k){var _=this
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
ej0:function ej0(d){this.a=d},
ej_:function ej_(){},
ej1:function ej1(d){this.a=d},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
ej2:function ej2(){},
eiD:function eiD(d,e){this.a=d
this.b=e},
eiz:function eiz(d,e){this.a=d
this.b=e},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiM:function eiM(d){this.a=d},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiI:function eiI(d){this.a=d},
eiJ:function eiJ(d){this.a=d},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiB:function eiB(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiR:function eiR(d){this.a=d},
eiU:function eiU(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
eiV:function eiV(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiW:function eiW(d){this.a=d},
eiO:function eiO(d){this.a=d},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiN:function eiN(d,e){this.a=d
this.b=e},
eiY:function eiY(d){this.a=d},
eiA:function eiA(d,e){this.a=d
this.b=e},
fDD(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fDD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiq){w=1
break}r=new C.fDE()
t=4
q=x.s
w=7
return B.b(B.iO(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fDD)
case 7:$.hiq=!0
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
return B.i($async$fDD,v)},
bC5(d){return A.H9[B.mz(d)-1]+", "+A.p4[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hXP(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dj9[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h1J(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fH(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fBW(),B.T(v).k("a_<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.K)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fBY(j,h)
n=new C.fBX(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iY(o.$1(l)))
j.a+=l}return u},
fZy(d,e){var w=new C.ffy()
return A.d.cJ(e,0,new C.ffw(w))>=A.d.cJ(d,0,new C.ffx(w))},
hfA(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
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
zv:function zv(d,e,f,g,h,i,j,k,l,m){var _=this
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
ccA:function ccA(d){this.a=d},
ccy:function ccy(){},
ccz:function ccz(){},
tl:function tl(d,e){this.a=d
this.b=e},
Bt:function Bt(d,e){this.a=d
this.b=e},
lg:function lg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fDE:function fDE(){},
fBW:function fBW(){},
fBY:function fBY(d,e){this.a=d
this.b=e},
fBX:function fBX(d,e,f){this.a=d
this.b=e
this.c=f},
ffy:function ffy(){},
ffz:function ffz(){},
ffw:function ffw(d){this.a=d},
ffx:function ffx(d){this.a=d},
b0s:function b0s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ccB:function ccB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ccC:function ccC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ccD:function ccD(d){this.a=d},
bc1:function bc1(d){this.a=d},
bc0:function bc0(d,e){this.b=d
this.a=e},
btE:function btE(d){this.a=d},
b8w:function b8w(d,e){this.b=d
this.a=e},
br7:function br7(d,e){this.b=d
this.a=e},
hqg(d,e){return B.a6(d,!1).cm(B.e9(new C.fPB(e,null),!0,null,x.E))},
fPB:function fPB(d,e){this.a=d
this.b=e},
VD:function VD(d,e,f){this.c=d
this.d=e
this.a=f},
aDM:function aDM(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ekb:function ekb(){},
ekc:function ekc(d){this.a=d},
eka:function eka(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d){this.a=d},
ek5:function ek5(d){this.a=d},
ek6:function ek6(d,e){this.a=d
this.b=e},
ek3:function ek3(d){this.a=d},
ek4:function ek4(d,e,f){this.a=d
this.b=e
this.c=f},
ek0:function ek0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ek7:function ek7(d,e){this.a=d
this.b=e},
ek2:function ek2(d,e){this.a=d
this.b=e},
ek8:function ek8(d){this.a=d},
ek1:function ek1(d,e){this.a=d
this.b=e},
ek9:function ek9(d,e){this.a=d
this.b=e},
bby:function bby(d,e,f){this.b=d
this.c=e
this.a=f},
iby(d){return B.a6(d,!1).cm(B.e9(new C.fPR(),!0,null,x.I))},
bzx(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h_X(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fPR:function fPR(){},
a_H:function a_H(d){this.a=d},
oy:function oy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF8:function aF8(d,e,f,g,h,i,j,k,l){var _=this
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
_.aD=_.aM=_.aF=_.aA=_.Z=_.b8=_.bk=_.y2=0
_.b3=null
_.b0=0.25
_.bb=null
_.bK=0.5
_.aI=1
_.c5=_.bF=_.bh=0
_.cI=_.c6=!1
_.c=_.a=null},
eTM:function eTM(d){this.a=d},
eSE:function eSE(d,e){this.a=d
this.b=e},
eT1:function eT1(d,e){this.a=d
this.b=e},
eTb:function eTb(d){this.a=d},
eSn:function eSn(d){this.a=d},
eSo:function eSo(d){this.a=d},
eSl:function eSl(d){this.a=d},
eSm:function eSm(d){this.a=d},
eSV:function eSV(d,e){this.a=d
this.b=e},
eSW:function eSW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT7:function eT7(d,e,f){this.a=d
this.b=e
this.c=f},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT8:function eT8(d,e){this.a=d
this.b=e},
eT5:function eT5(d,e){this.a=d
this.b=e},
eTa:function eTa(d,e,f){this.a=d
this.b=e
this.c=f},
eT9:function eT9(d,e){this.a=d
this.b=e},
eSd:function eSd(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSc:function eSc(){},
eSg:function eSg(d,e){this.a=d
this.b=e},
eSb:function eSb(d,e){this.a=d
this.b=e},
eSi:function eSi(){},
eSh:function eSh(d,e){this.a=d
this.b=e},
eSa:function eSa(d,e){this.a=d
this.b=e},
eS7:function eS7(d,e){this.a=d
this.b=e},
eSj:function eSj(d){this.a=d},
eS9:function eS9(d,e){this.a=d
this.b=e},
eSk:function eSk(d){this.a=d},
eS8:function eS8(d,e){this.a=d
this.b=e},
eTB:function eTB(d,e){this.a=d
this.b=e},
eTI:function eTI(d){this.a=d},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
eTK:function eTK(){},
eTC:function eTC(d,e){this.a=d
this.b=e},
eTA:function eTA(d,e){this.a=d
this.b=e},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTz:function eTz(d,e){this.a=d
this.b=e},
eTE:function eTE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTy:function eTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTF:function eTF(d){this.a=d},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTH:function eTH(d){this.a=d},
eTx:function eTx(d){this.a=d},
eTk:function eTk(d){this.a=d},
eTl:function eTl(d){this.a=d},
eTj:function eTj(d,e){this.a=d
this.b=e},
eTe:function eTe(d,e){this.a=d
this.b=e},
eTm:function eTm(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTi:function eTi(d){this.a=d},
eTq:function eTq(d){this.a=d},
eTr:function eTr(d){this.a=d},
eTs:function eTs(d){this.a=d},
eTt:function eTt(d){this.a=d},
eTh:function eTh(d){this.a=d},
eTu:function eTu(d){this.a=d},
eTg:function eTg(d){this.a=d},
eTv:function eTv(d,e){this.a=d
this.b=e},
eTf:function eTf(d,e){this.a=d
this.b=e},
eTw:function eTw(d){this.a=d},
eTn:function eTn(d){this.a=d},
eTo:function eTo(d){this.a=d},
eSZ:function eSZ(d){this.a=d},
eSY:function eSY(d){this.a=d},
eT_:function eT_(d,e){this.a=d
this.b=e},
eSX:function eSX(d,e){this.a=d
this.b=e},
eT0:function eT0(d){this.a=d},
eSR:function eSR(d){this.a=d},
eSQ:function eSQ(d){this.a=d},
eSS:function eSS(d){this.a=d},
eSP:function eSP(d){this.a=d},
eST:function eST(d,e){this.a=d
this.b=e},
eSO:function eSO(d,e){this.a=d
this.b=e},
eSN:function eSN(d,e){this.a=d
this.b=e},
eSv:function eSv(d){this.a=d},
eSw:function eSw(d){this.a=d},
eSx:function eSx(d){this.a=d},
eSy:function eSy(d){this.a=d},
eSz:function eSz(d){this.a=d},
eSA:function eSA(d){this.a=d},
eSB:function eSB(d){this.a=d},
eSC:function eSC(d){this.a=d},
eSD:function eSD(d){this.a=d},
eRR:function eRR(d){this.a=d},
eRS:function eRS(d){this.a=d},
eRT:function eRT(d){this.a=d},
eRU:function eRU(d){this.a=d},
eRV:function eRV(d){this.a=d},
eRQ:function eRQ(d){this.a=d},
eRW:function eRW(d){this.a=d},
eRX:function eRX(d){this.a=d},
eSp:function eSp(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSr:function eSr(d){this.a=d},
eSs:function eSs(d){this.a=d},
eSt:function eSt(d){this.a=d},
eS0:function eS0(d){this.a=d},
eS1:function eS1(d){this.a=d},
eS2:function eS2(d){this.a=d},
eS3:function eS3(d){this.a=d},
eS4:function eS4(d){this.a=d},
eS_:function eS_(d){this.a=d},
eS5:function eS5(d){this.a=d},
eRZ:function eRZ(d){this.a=d},
eS6:function eS6(d){this.a=d},
eRY:function eRY(d){this.a=d},
eSU:function eSU(d){this.a=d},
eSM:function eSM(d){this.a=d},
eSI:function eSI(d){this.a=d},
eSH:function eSH(d){this.a=d},
eSJ:function eSJ(d,e){this.a=d
this.b=e},
eSG:function eSG(d,e){this.a=d
this.b=e},
eSK:function eSK(d,e){this.a=d
this.b=e},
eSF:function eSF(d,e){this.a=d
this.b=e},
eSL:function eSL(d){this.a=d},
eT4:function eT4(d){this.a=d},
eT3:function eT3(d,e,f){this.a=d
this.b=e
this.c=f},
eT2:function eT2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTd:function eTd(d,e){this.a=d
this.b=e},
eTc:function eTc(d,e){this.a=d
this.b=e},
eSu:function eSu(d){this.a=d},
eTL:function eTL(d){this.a=d},
bf6:function bf6(d,e){this.b=d
this.a=e},
i6Y(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i6Z(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b5(d,v)
return n.charCodeAt(0)==0?n:n},
bA7(){var w=$.bzf,v=$.Qd
$.Qd=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,C.bA7(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.f4,g,e,f)},
nX(d,e,f,g){var w=f*9
return C.ig(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hRw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzf
p=$.Qd
$.Qd=p+1
w.push(new C.eM(q+"_"+p,D.f4,0,r,1,0.0016,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzf
p=$.Qd
$.Qd=p+1
w.push(new C.eM(q+"_"+p,D.f4,o,0,0.004,1,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.nX(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nX(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bg,0.08,0.08,0.5,0.003,v,0),C.ig(D.bg,0.58,0.08,0.004,0.06,v,0),C.ig(D.bg,0.58,0.14,0.34,0.003,v,0),C.ig(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bg,0.08,0.8,0.004,0.14,t,0),C.ig(D.bg,0.08,0.94,0.6,0.003,t,0),C.nX(0.58,0.08,0.05,e),C.nX(0.92,0.22,0.05,e),C.nX(0.08,0.8,0.05,f),C.nX(0.68,0.94,0.05,f),C.nX(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.l6,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.l6,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.l6,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.l6,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nX(0.5,0.5,1.5,w|335544320),C.nX(0.5,0.5,1.15,w|402653184),C.nX(0.5,0.5,0.8,v|436207616),C.nX(0.95,0.05,0.4,v|855638016),C.nX(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nX(0.85,0.08,0.7,w|1140850688),C.nX(0.1,0.35,0.5,v|855638016),C.nX(0.9,0.62,0.55,v|771751936),C.nX(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nX(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nX(0.5,0.2,0.65,(w|3422552064)>>>0),C.nX(0.5,0.2,0.95,w|855638016),C.ig(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jP,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jP,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jP,0.15,0.86,0.6,0.14,1712265002,0),C.nX(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cVu[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzf
l=$.Qd
$.Qd=l+1
w.push(new C.eM(m+"_"+l,D.f4,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.eN,q,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.nX(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jP,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jP,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jP,0.65,-0.1,0.3,0.55,v,0.5),C.nX(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bg,0.06,0.04,0.88,0.002,e,0),C.ig(D.bg,0.06,0.96,0.88,0.002,e,0),C.ig(D.bg,0.06,0.04,0.004,0.92,e,0),C.ig(D.bg,0.936,0.04,0.004,0.92,e,0),C.ig(D.bg,0.09,0.07,0.82,0.001,w,0),C.ig(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jQ,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jQ,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jQ,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.nX(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bg,0.09,0.12,0.16,0.006,e,0),C.ig(D.bg,0.05,0.03,0.9,0.001,w,0),C.ig(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i3t(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzf=j
$.Qd=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fzk()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a6,"",1,C.bA7(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cn,D.lw,1,0,0))
if(a9)A.d.v(q,C.hRw(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i6Y(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fzj(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a6))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a6))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a6,a1,a3*9/16,C.bA7(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cn,D.lw,a3,a4,a5))
return C.rv(s,r,0,0,q,j+"_slide",D.qk,"","","",D.de)},
ru:function ru(d,e){this.a=d
this.b=e},
m7:function m7(d,e,f,g,h,i,j,k,l,m){var _=this
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
fzk:function fzk(){},
fzj:function fzj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hHD(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.u(w.h(d,"at")))
u=w.h(d,"outline")
t=B.u(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdY(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zx(u,t,s,B.u(w==null?"":w))},
fH_(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fH_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiM){w=1
break}$.hiM=!0
t=4
w=7
return B.b(B.az(),$async$fH_)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aJ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jz(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hHD(m)
if(l!=null)J.ci(n,l)}$.CE.c9(0,B.u(o.a),new C.fH0(n))}C.h_D()
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
return B.i($async$fH_,v)},
h_D(){var w,v=new B.S(Date.now(),0,!1).bR(-12e8)
for(w=new B.dv($.CE,$.CE.r,$.CE.e);w.C();)J.nt(w.d,new C.fna(v))
$.CE.bq($.CE,new C.fnb())},
aNL(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNL=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aNL)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CE,B.a3($.CE).k("cI<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ci(p,B.F(["at",g.a.a7().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aNL)
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
return B.i($async$aNL,v)},
i7z(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h_D()
w=$.CE.c9(0,d,new C.fH2())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pB(w,0,new C.zx(new B.S(v,0,!1),f,u,g))
C.aNL()},
i7w(d){var w,v=$.CE.h(0,d)
if(v==null||J.cn(v))return
w=J.cF(v)
w.cz(v,0)
if(w.gam(v))$.CE.W(0,d)
C.aNL()},
zx:function zx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdY:function cdY(){},
fH0:function fH0(d){this.a=d},
fna:function fna(d){this.a=d},
fnb:function fnb(){},
fH2:function fH2(){},
i7B(d){return A.d.dM(D.wb,new C.fH5(d),new C.fH6())},
hHB(d){var w
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
hHA(d){var w
switch(d.a){case 0:w=D.alC
break
case 1:w=A.yq
break
case 2:w=A.amF
break
case 3:w=K.ale
break
case 4:w=A.am6
break
case 5:w=A.lV
break
default:w=null}return w},
hUv(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Q4[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Q4[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hHC(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
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
i7x(d,e,f,g,h){var w=new B.M(D.wb,new C.fGZ(),x.eC).aH(0,", "),v=""+d,u=C.hoc(h),t=F.fAJ(h),s=C.hkn(g),r=e.t(0,D.I4)?'- New slides get an "emoji".\n':"",q=e.t(0,D.I5)?'- New slides get an "icon3d" from: '+A.d.aH(D.Q4,", ")+".\n":"",p=e.t(0,D.CT)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i7y(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wb,new C.fH1(),x.eC).aH(0,", "),p=new B.ff("")
if(e.t(0,D.I4)){p.a=s
w=s}else w=""
if(e.t(0,D.I5))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.Q4,", ")+".\n")
if(e.t(0,D.CT))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hoc(d)
v=F.fAJ(d)
u=C.hkn(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agX(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D1(a3,"{"),a5=J.fSX(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Le(a3,a4,a5+1)
try{w=A.S.aJ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fEZ(),m).c0(0,new C.fF_())
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
f=C.hUv(B.u(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.q(t,"picture")
d=B.c9(B.u(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a7S(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.u(q==null?J.fr(u).b:q))
p=A.d.b6(D.wb,new C.fF0(r))?r:a7
o=C.fmp(J.q(w,"logo_frame"),D.Cf)
n=C.fmp(J.q(w,"logo_ring"),D.Ca)
m=C.fmp(J.q(w,"photo_frame"),D.Cf)
l=C.fmp(J.q(w,"photo_ring"),D.Ca)
return new C.aqS(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1r(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hnj(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CU),f7=f6?C.hOg():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eE()
v.dt(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.fp(t,v)
s=u.c
s=new C.nL("luxe",u.a,A.lV,t,u.e,u.f,B.a([s,u.d,s],x.t),D.de)
w=s}if(w==null)w=C.i7B(f9.b)
r=g2.t(0,D.a5n)||f6
q=g2.t(0,D.I4)
p=g2.t(0,D.S3)
o=new C.fzo()
n=B.a([],x.g)
m=new C.fzr(o,w,r)
l=new C.fzq(o,r)
k=new C.fzp(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b6(u,new C.fzn(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cX_[b8]
c0=D.cVX[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eS5.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mK,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.ql,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.S0
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l6,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CR
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mK,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.ql,500,f2,f0))
d3=D.mJ
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uv:D.cn
c1.push(new C.eM(b4,D.a5l,0.64,0.05,0.27,0.9,g1,24,A.a6,A.bo,A.aD,4279310375,A.bi,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mJ
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mK,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.ql,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.S0
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eN,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eN,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bg,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bg,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.I2,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mJ}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.de,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hPU(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dlx[A.o.E(b1,6)]:s
n.push(new C.lG(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BG(e4,e4,e4,e4,D.CQ,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fBM(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fBM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CT)
n=e.t(0,D.I5)
if(!o&&!n){u=D.a4j
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fBP(o,s[r],n,$.hTf,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iO(t,x.e),$async$fBM)
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
return B.i($async$fBM,v)},
fAM(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fAM=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i7y(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aN5(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fAM)
case 3:u=s.aNr(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAM,v)},
bBK(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBK=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.eb(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i7z(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agX(i,"colorful")
t=C.i7x(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aN5(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hD),$async$bBK)
case 3:u=o.aNr(m,f,h,g,D.e_i,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBK,v)},
aN5(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aN5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vk(null,""),$async$aN5)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n7(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qR(t,d,g,"slides",null),$async$aN5)
case 7:q=i
p=q.b
if(p!=null){o=C.agX(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KV(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aN5,v)},
aNr(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNr=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CT)||e.t(0,D.I5)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dd(e,x.Q)
t.W(0,D.CT)}w=6
return B.b(C.fBM(d,t),$async$aNr)
case 6:s=k
w=4
break
case 5:s=D.a4j
case 4:t=d.c
w=A.d.b6(t,new C.fft())?7:9
break
case 7:r=$.hp4
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dS(r,x.aP),$async$aNr)
case 10:q=k
p=q!=null?A.S.ao(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hnj(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hHC(new C.aqS(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("M<1,m>")
t=B.C(new B.M(m,new C.ffu(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jR<co.E,m>")
t=B.C(new B.jR(e,new C.ffv(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.S3)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNr,v)},
h2s(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a36[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
ibD(d){return B.bS(A.K,null,new C.fQ2(),d,!0,!0,!0,null,!1,!1,x.I)},
hOT(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cV.gcB().aK(d)},
ibC(d,e,f){return B.bS(A.K,null,new C.fQ1(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h2t(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h2u(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fmp(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b6(e,new C.fmq(w))?w:""},
hkn(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hp2(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agX(a1==null?"":a1,a0),a3=C.agX(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.rg(new B.a_(r,new C.fH7(t[p]),q))
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
g=B.C(new B.a_(k,new C.fH8(),v),r)
A.d.aY(g,new C.fH9())
if(g.length===0)continue
f=new C.fHa(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i7S(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGF
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1d
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1e
return null},
hjZ(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bn(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dk(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i7C(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.of
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hjZ(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hjZ(n,i,v,u))if(n.w>10){f=h+1
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
i7A(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agX(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a36[r]
if(q.b===s)w.L(0,q)}}v=C.h2t(e)
u=C.h2u(e)
p=C.hnj(n,D.a4j,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fH3(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jR<co.E,m>")
o=B.C(new B.jR(w,new C.fH4(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.S3)
return p},
ibp(d,e,f){return B.bS(A.K,null,new C.fPf(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hOg(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eE()
s.dt(t)
w=D.cAZ[s.aw(10)]
v=new C.ef6(s)
u=x.N
return new C.ef5(w,s.aw(4),J.fr(v.$1$2(D.d0x,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dgX,2+s.aw(2),u),v.$1$2(D.d9U,2,u),v.$1$2(D.dk0,4,x.fP),t)},
hPU(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eE()
a1.dt(a5.w+a3*13)
w=new C.fc0(a4)
v=new C.fc2(a4,d)
u=new C.fc1(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aV(A.o.fX(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aV(A.o.fX(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.eN,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1r(a0,52),"lux_spot",a5.wu(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wu(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aEL(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wu(0,f),D.de,150,C.a1r(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wu(0,f),D.de,120,C.a1r(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.de,260,C.a1r(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wu(0,"filigree"),D.de,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1r(a0,208),"lux_rule",a5.aEL(0,"shimmer",r),D.uu,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1r(a0,144),"lux_rule2","",D.I2,220))}l=!A.d.b6(a2,new C.fc_())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wu(0,"crest"),350))
else{o=a1.hi()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wu(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1r(r,242)
j=a5.wu(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.ql,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1r(r,242),"lux_g2",a5.wu(0,"orbit"),D.ql,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aV(A.o.fX(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wu(0,"velvet")))},
nL:function nL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fH5:function fH5(d){this.a=d},
fH6:function fH6(){},
w_:function w_(d,e){this.a=d
this.b=e},
a7S:function a7S(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqS:function aqS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fGZ:function fGZ(){},
fH1:function fH1(){},
fEZ:function fEZ(){},
fF_:function fF_(){},
fF0:function fF0(d){this.a=d},
fzo:function fzo(){},
fzr:function fzr(d,e,f){this.a=d
this.b=e
this.c=f},
fzq:function fzq(d,e){this.a=d
this.b=e},
fzp:function fzp(d,e){this.a=d
this.b=e},
fzn:function fzn(d){this.a=d},
fBP:function fBP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBN:function fBN(d){this.a=d},
fBO:function fBO(d){this.a=d},
fft:function fft(){},
ffu:function ffu(){},
ffv:function ffv(){},
fQ2:function fQ2(){},
a0d:function a0d(d){this.a=d},
aH3:function aH3(d,e,f,g,h){var _=this
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
eZZ:function eZZ(d,e,f){this.a=d
this.b=e
this.c=f},
f__:function f__(d,e){this.a=d
this.b=e},
eZX:function eZX(d,e){this.a=d
this.b=e},
eZY:function eZY(d,e){this.a=d
this.b=e},
eZW:function eZW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eZR:function eZR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eZV:function eZV(d,e){this.a=d
this.b=e},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eZU:function eZU(d,e){this.a=d
this.b=e},
eZP:function eZP(d,e){this.a=d
this.b=e},
eZS:function eZS(d){this.a=d},
eZT:function eZT(d,e){this.a=d
this.b=e},
eZF:function eZF(d,e){this.a=d
this.b=e},
eZG:function eZG(d,e){this.a=d
this.b=e},
eZI:function eZI(d){this.a=d},
eZJ:function eZJ(d){this.a=d},
eZK:function eZK(d){this.a=d},
eZL:function eZL(d){this.a=d},
eZH:function eZH(d,e){this.a=d
this.b=e},
eZM:function eZM(d,e){this.a=d
this.b=e},
f_c:function f_c(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_b:function f_b(d){this.a=d},
f_e:function f_e(d){this.a=d},
f_a:function f_a(d){this.a=d},
f_g:function f_g(d){this.a=d},
f_9:function f_9(d,e){this.a=d
this.b=e},
f_h:function f_h(d){this.a=d},
f_8:function f_8(d,e){this.a=d
this.b=e},
f_i:function f_i(d){this.a=d},
f_7:function f_7(d){this.a=d},
f_j:function f_j(d){this.a=d},
f_6:function f_6(d,e){this.a=d
this.b=e},
f_k:function f_k(d){this.a=d},
f_5:function f_5(d,e){this.a=d
this.b=e},
f_l:function f_l(d){this.a=d},
f_4:function f_4(d){this.a=d},
f_m:function f_m(d,e){this.a=d
this.b=e},
f_3:function f_3(d,e){this.a=d
this.b=e},
f_n:function f_n(d){this.a=d},
f_f:function f_f(d){this.a=d},
f_2:function f_2(d,e){this.a=d
this.b=e},
eZN:function eZN(d,e,f){this.a=d
this.b=e
this.c=f},
eZO:function eZO(d,e,f){this.a=d
this.b=e
this.c=f},
f_1:function f_1(d,e){this.a=d
this.b=e},
f_0:function f_0(d,e){this.a=d
this.b=e},
fQ1:function fQ1(d,e){this.a=d
this.b=e},
a0c:function a0c(d,e,f){this.c=d
this.d=e
this.a=f},
aH2:function aH2(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eZy:function eZy(d){this.a=d},
eZz:function eZz(d){this.a=d},
eZA:function eZA(d,e){this.a=d
this.b=e},
eZB:function eZB(d){this.a=d},
eZC:function eZC(d){this.a=d},
eZx:function eZx(d,e){this.a=d
this.b=e},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZE:function eZE(d,e){this.a=d
this.b=e},
fmq:function fmq(d){this.a=d},
b0Q:function b0Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDB:function aDB(d,e,f){this.c=d
this.d=e
this.a=f},
bjM:function bjM(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
ef8:function ef8(d){this.a=d},
ef7:function ef7(){},
bhj:function bhj(d,e){this.b=d
this.a=e},
fH7:function fH7(d){this.a=d},
fH8:function fH8(){},
fH9:function fH9(){},
fHa:function fHa(d){this.a=d},
arr:function arr(d,e){this.a=d
this.b=e},
fH3:function fH3(){},
fH4:function fH4(){},
fPf:function fPf(d,e){this.a=d
this.b=e},
Zz:function Zz(d,e,f){this.c=d
this.d=e
this.a=f},
aB3:function aB3(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
diN:function diN(d){this.a=d},
diO:function diO(d){this.a=d},
diP:function diP(d,e){this.a=d
this.b=e},
diS:function diS(d){this.a=d},
diT:function diT(d,e){this.a=d
this.b=e},
diR:function diR(d,e){this.a=d
this.b=e},
diU:function diU(d){this.a=d},
diQ:function diQ(d,e){this.a=d
this.b=e},
bse:function bse(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ef5:function ef5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ef6:function ef6(d){this.a=d},
fc0:function fc0(d){this.a=d},
fc2:function fc2(d,e){this.a=d
this.b=e},
fc1:function fc1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fc_:function fc_(){},
aLC:function aLC(){},
h1h(d){var w,v,u
try{w=A.S.aJ(0,d,null)
if(x.f.b(w)){v=B.vS(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0M:function b0M(d,e,f){this.c=d
this.d=e
this.a=f},
blp:function blp(d,e){this.c=d
this.a=e},
i3W(d){return A.d.dM(D.H6,new C.fAv(d),new C.fAw())},
i3X(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b5(t,6)
if(w.length===0)return null
v=new B.a_(D.H6,new C.fAx(w),x.b4)
if(!v.gae(0).C())return null
u=v.gI(0)
return new C.jH("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ld:function ld(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAv:function fAv(d){this.a=d},
fAw:function fAw(){},
fAx:function fAx(d){this.a=d},
mV(d,e,f,g,h){return new C.EC(f,g,d)},
hR2(d){var w=d.z,v=B.T(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fdX(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Kk
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.f4,j,k,l)},
hn6(d,e){var w
C.hR2(d)
w=A.d.dM($.bDK(),new C.fyl(e),new C.fym())
$.Kk=w.a
d.x=w.a;++d.y
try{w.bB(d)}finally{$.Kk=""}d.z=B.bo(d.z,!0,x.F)},
EC:function EC(d,e,f){this.a=d
this.b=e
this.e=f},
fdX:function fdX(){},
fGA:function fGA(){},
fGB:function fGB(){},
fGC:function fGC(){},
fGN:function fGN(){},
fGS:function fGS(){},
fGT:function fGT(){},
fGU:function fGU(){},
fGV:function fGV(){},
fGW:function fGW(){},
fGX:function fGX(){},
fGY:function fGY(){},
fGD:function fGD(){},
fGE:function fGE(){},
fGF:function fGF(){},
fGG:function fGG(){},
fGH:function fGH(){},
fGI:function fGI(){},
fGJ:function fGJ(){},
fGK:function fGK(){},
fGL:function fGL(){},
fGM:function fGM(){},
fGO:function fGO(){},
fGP:function fGP(){},
fGQ:function fGQ(){},
fGR:function fGR(){},
fyl:function fyl(d){this.a=d},
fym:function fym(){},
iX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CV(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.f4,j,k,l)},
bCt(){var w=new B.S(Date.now(),0,!1)
return A.im[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bzS(d){return new B.iR((A.o.aB(d,24)&255)/255,(A.o.aB(d,16)&255)/255,(A.o.aB(d,8)&255)/255,(d&255)/255)},
hW7(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amE(A.cI.aK(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hWb(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.flZ(),x.dv).aH(0,"\n")},
hWa(d){switch(d.a){case 2:return A.nx
case 1:case 5:return A.f21
default:return A.Tw}},
hW4(d){switch(d.a){case 2:return A.v3
case 1:case 5:return A.Vk
default:return A.aak}},
hW8(d,e){var w,v=null,u=d.ay,t=A.o.aB(u,24),s=A.o.aB(d.ch,24),r=(t&255)===0?v:C.bzS(u),q=(s&255)===0?v:C.bzS(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nv(q,p,A.kM)
w=new B.pC(t,t,t,t)}switch(d.ax.a){case 1:return B.lv(v,v,v,new B.kD(r,w,v,A.abA,v),v,v,v,v)
case 4:return u?new B.fS(v,v,v):B.x1(B.lv(v,v,q,v,p+0.4,v,v,v))
default:return B.lv(v,v,v,new B.kD(r,w,B.vt(4),A.hI,v),v,v,v,v)}},
hW6(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f4?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hW4(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hWb(d)
t=C.bzS(d.Q)
s=d.x.a>=700?A.el:A.vH
r=d.y===A.cF?A.y3:A.ak2
q=d.z
p=new B.D4(w,l,l,B.fc(u,l,l,l,B.h9(l,t,1===q.a?A.aPM:A.aPL,l,l,l,l,l,l,A.dt,l,l,v,r,s,l,!0,l,l,l,l),C.hWa(d.as)))
break
case 1:case 4:o=C.hW7(d.at)
n=i===D.lw&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x1(B.fc(w,l,l,l,B.h9(l,A.rI,l,l,l,l,l,l,l,A.dt,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HL(o,n?A.abw:A.VH,l,l)
break
case 3:w=new B.nv(A.Il,1,A.kM)
u=B.vt(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lv(A.v3,B.fc(t,l,l,l,B.h9(l,D.edV,l,l,l,l,l,l,l,A.dt,l,l,11,l,A.el,l,!0,l,l,l,l),A.nx),l,new B.kD(E.aHY,new B.pC(w,w,w,w),u,A.hI,l),l,l,l,l)
break
case 2:p=C.hW8(d,e)
break
case 5:p=C.hW5(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.heM(-w,p)
w=i===D.cQ
if(w){m=A.o.aB(d.Q,24)&255
if(m<255)p=new B.asc(m/255,p)}if(w)return new F.w5(k,l,j,l,new B.S2(new B.kC(g,g,f,1/0),p))
if(i===D.l5){i=new B.nv(A.Il,1,A.kM)
i=B.lv(A.v3,p,l,new B.kD(A.pa,new B.pC(i,i,i,i),B.vt(4),A.hI,l),l,l,D.bx1,l)}else i=p
return new F.w5(k,l,j,l,new B.fS(g,f,i))},
hW9(d,e,f,g){var w,v=null,u=C.bzS(d.e),t=d.f
t=B.a([F.hdo(t!=null?B.lv(v,v,v,new B.kD(v,v,v,A.hI,new B.aWj(E.Vl,A.aae,B.a([u,C.bzS(t)],x.cR),v)),v,v,v,v):B.lv(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.flY(f,g),B.T(w).k("M<1,fg>")))
return F.crc(t)},
h2w(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h2w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a45(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Wl(A.wn,A.Ii,D.by8,null,null,null,!1,null)
o=new B.BM(o,new C.fHg(607,787,p,d))
o.Mx(n,null)
r.push(o)}u=n.kc(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2w,v)},
hW5(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h1h(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajv()
if(h==null)h=A.axx
j=B.ty(4279308564)
w=B.vt(18)
v=new B.nv(B.ty(4287531653),3,A.kM)
u=i.length===0?"My links":i
u=B.a([B.x1(B.fc(u,m,m,m,B.h9(m,A.pa,m,m,m,m,m,m,m,A.dt,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x1(B.fc(A.a.i(l.c),m,m,m,D.f9d,m)))
u.push(new B.fS(m,8,m))
for(t=B.db(h,0,B.dI(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bQ(t,t.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.ty(4280690220)
o=new B.a9a(8,8)
n=A.a.i(r.b)
u.push(new B.nM(D.brk,new C.awq(new C.ai2(q),B.lv(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fbx,A.nx),m,new B.kD(p,m,new B.ait(o,o,o,o),A.hI,m),m,m,D.bxr,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x1(B.fc(k,m,m,m,D.faM,m))
u.push(new C.awq(C.hvK(k),t))}return B.lv(m,B.yO(u,A.LY,A.lu),m,new B.kD(j,new B.pC(v,v,v,v),w,A.hI,m),m,m,D.bs8,m)},
flZ:function flZ(){},
flY:function flY(d,e){this.a=d
this.b=e},
fHg:function fHg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agK(d){var w,v
for(w=0;w<32;++w){v=D.GY[w]
if(v.a===d)return v}return null},
hhq(d){var w,v,u=A.a.cK(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aK(A.a.b5(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hqc(d,e){return B.a6(d,!1).cm(B.e9(new C.fNF(e),!0,null,x.fB))},
hqb(d,e){return B.bS(A.K,null,new C.fNE(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j0:function j0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Et:function Et(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nk:function Nk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj8:function bj8(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dUb:function dUb(d){this.a=d},
dUa:function dUa(d,e,f){this.a=d
this.b=e
this.c=f},
dU9:function dU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqN:function bqN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eYM:function eYM(d,e){this.a=d
this.b=e},
bec:function bec(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZG:function aZG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8v:function c8v(){},
c8w:function c8w(d){this.a=d},
c8x:function c8x(d,e,f){this.a=d
this.b=e
this.c=f},
c8y:function c8y(d,e,f){this.a=d
this.b=e
this.c=f},
fNF:function fNF(d){this.a=d},
Z7:function Z7(d,e){this.c=d
this.a=e},
azr:function azr(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7Z:function d7Z(d,e,f){this.a=d
this.b=e
this.c=f},
d83:function d83(d){this.a=d},
d84:function d84(d){this.a=d},
d82:function d82(d){this.a=d},
d85:function d85(d){this.a=d},
d81:function d81(d,e){this.a=d
this.b=e},
d86:function d86(d){this.a=d},
d80:function d80(d){this.a=d},
d87:function d87(d){this.a=d},
d8_:function d8_(d,e){this.a=d
this.b=e},
d88:function d88(d,e){this.a=d
this.b=e},
fNE:function fNE(d){this.a=d},
fND:function fND(d){this.a=d},
fNC:function fNC(d,e,f){this.a=d
this.b=e
this.c=f},
fNB:function fNB(d,e){this.a=d
this.b=e},
aL5:function aL5(){},
ibB(d){return B.bS(A.K,null,new C.fQ0(),d,!0,!0,!0,null,!1,!1,x.N)},
fQ0:function fQ0(){},
Zs:function Zs(d){this.a=d},
bfG:function bfG(d){this.d=d
this.c=this.a=null},
deM:function deM(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
deO:function deO(d){this.a=d},
hSy(d){var w,v=d.split("@")
if(v.length>1){w=B.c9(v[1],16)
if(w!=null)return B.b0(w)}return D.xv},
i5R(d){var w,v=A.d.gI(d.split("@"))
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
i5Q(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hSy(d)
switch(q){case"shimmer":return B.nQ(A.aaG,g,new C.fDX(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.bf3(e,f,p,r),A.aw),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dW(B.ef(A.A,B.de(C.fUj(g,B.a4V(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.beL(e,p,r),A.aw),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.de(B.eJ(A.A,e*0.5,B.ef(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fE(e)
u.mN(Math.sin(e)*0.3)
return B.dW(B.fv(A.A,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.bnF(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.b9F(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.b9i(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.buA(e,p,r),A.aw),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.brA(e,f,p,r),A.aw),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.bqJ(e,p,r),A.aw),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.be5(e,p,r),A.aw),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e_(B.ef(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eJ(A.A,s*0.06,B.ef(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fDX:function fDX(d,e){this.a=d
this.b=e},
bf3:function bf3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beL:function beL(d,e,f){this.b=d
this.c=e
this.a=f},
bnF:function bnF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9F:function b9F(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9i:function b9i(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buA:function buA(d,e,f){this.b=d
this.c=e
this.a=f},
brA:function brA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqJ:function bqJ(d,e,f){this.b=d
this.c=e
this.a=f},
be5:function be5(d,e,f){this.b=d
this.d=e
this.a=f},
d7G:function d7G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xz:function xz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fE_(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l5},
i5W(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fE0())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQ0(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i5V(d,e){var w,v,u,t,s,r=d.db
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
ago(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ago=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fwp(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(A.dH,null,new C.fwq(e),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$ago)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h37(d),$async$ago)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L5(d,"Search states\u2026","",A.k7,"Choose state"),$async$ago)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h23(s)
if(p==null)p=A.d.gI(D.QV)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fE1(p.d)
k=x.u
j=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CH(i,0.016,D.l6,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CH(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CH(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kv("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kv("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a6,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fZW(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzl("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a12("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a12("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a12("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a12("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzl("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CH(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.er(A.bi,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bo,A.cx,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cn,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fZW(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzl("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hjo("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hjo("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a12("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a12("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzk("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzk("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzl("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Kv("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Kv("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzk("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzk("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzl("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a12("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzk("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a12("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fZW(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kv("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kv("Nakala ya Hati",A.L,4291404327,9,A.a6,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BG(null,null,null,null,D.of,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rv(m,null,0,0,j,n,D.qk,"","","Hati ya Ndoa",D.de)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ago,v)},
fE0:function fE0(){},
fwp:function fwp(){},
fwq:function fwq(d){this.a=d},
fwn:function fwn(d){this.a=d},
fwo:function fwo(d){this.a=d},
hVA(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hVz(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mP
case"lineThrough":return A.zI
default:return A.aD}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eM(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hlt(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QF[w]
if(v.b===u)return v}return D.de},
hRX(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cSN[w]
if(v.b===u)return v}return D.cQ},
hYo(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dhC[w]
if(v.b===u)return v}return D.bg},
rv(d,e,f,g,h,i,j,k,l,m,n){return new C.lG(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hc8(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hTX(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hlt(d.h(0,"transition"))
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
else{n=J.da(n,x.f)
n=B.cD(n,new C.cdV(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rv(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hTX(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apl[w]
if(v.b===u)return v}return D.mJ},
BG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rv(4294967295,null,0,0,null,C.cB(),D.qk,"","","",D.de)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VM(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hQ9(a6.h(0,"aspectRatio"))
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
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kx(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kx(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cdI(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cdJ(),x.N)
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
else{g=J.da(g,x.f)
g=B.cD(g,new C.cdK(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.BG(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rv(4294967295,a3,0,0,a3,C.cB(),D.qk,"","","",D.de)],x.g):g,v,p,o,s)},
kx(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hQ9(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.diu[w]
if(v.b===u)return v}return D.CQ},
cB(){var w=Date.now(),v=$.j2
$.j2=v+1
return""+1000*w+"_"+v},
ceb(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CR){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cn,D.cQ,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cn,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.cQ,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.er(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cn,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.er(A.bi,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a6,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cn,D.f4,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cn,D.cQ,0.38,0.08,0.26)
q=C.cB()
t=C.er(A.bi,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a6,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cn,D.f4,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cn,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cn,D.cQ,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cx,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a6,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.cQ,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a6,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hHM(d){return A.d.dM(D.a2K,new C.cec(d),new C.ced())},
hHJ(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aJ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ci(v,C.VM(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fWq(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.ce7(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aY(u,new C.ce6())
return u},
hcb(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ce2()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqT(d){return C.hHH(d)},
hHH(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ce5()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2e(m),$async$aqT)
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
return B.b(B.az(),$async$aqT)
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
case 11:o=l.$1($.hca.h(0,m))
n=C.fWq(C.fWq(j,r),o)
if(n.length===0){u=C.hcb(C.hcb(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqT,v)},
ce1(d){return C.hHG(d)},
hHG(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ce1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ce1)
case 7:r=f
q=r.tb("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kG(q,B.T(q).c)
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
return B.i($async$ce1,v)},
b0S(d,e){return C.hHI(d,e)},
hHI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0S=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b0S)
case 6:s=g
q=s.tb("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Ld(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b0S)
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
return B.i($async$b0S,v)},
VN(d,e){return C.hHK(d,e)},
hHK(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VN=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hc9.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqT(a3),$async$VN)
case 5:p=a6
case 4:w=6
return B.b(C.ce1(a3),$async$VN)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
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
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.ce8(o),l),l.k("J.E"))
A.d.aY(e,new C.ce9())
$.hc9.n(0,a0,e)
n=B.T(e).k("M<1,a5<m,@>>")
n=B.C(new B.M(e,new C.cea(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.hca.n(0,a0,r)
t=8
w=11
return B.b(B.ahb(a0,r),$async$VN)
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
return B.b(B.az(),$async$VN)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VN)
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
return B.i($async$VN,v)},
IF:function IF(d,e){this.a=d
this.b=e},
aqR:function aqR(d,e){this.a=d
this.b=e},
uH:function uH(d,e){this.a=d
this.b=e},
mx:function mx(d,e){this.a=d
this.b=e},
hE:function hE(d,e){this.a=d
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
lG:function lG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cdW:function cdW(){},
cdX:function cdX(){},
cdV:function cdV(){},
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
cdL:function cdL(){},
cdM:function cdM(){},
cdI:function cdI(){},
cdJ:function cdJ(){},
cdK:function cdK(){},
jH:function jH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cec:function cec(d){this.a=d},
ced:function ced(){},
ce7:function ce7(d){this.a=d},
ce6:function ce6(){},
ce2:function ce2(){},
ce3:function ce3(){},
ce4:function ce4(){},
ce5:function ce5(){},
ce8:function ce8(d){this.a=d},
ce9:function ce9(){},
cea:function cea(){},
i66(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fEz(e,v,d,B.aX(w))
w.$1(new C.fEv())
w.$1(new C.fEw())
w.$1(new C.fEx())
w.$1(new C.fEy())
return v},
fEz:function fEz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEv:function fEv(){},
fEw:function fEw(){},
fEx:function fEx(){},
fEy:function fEy(){},
b0P:function b0P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdR:function cdR(d){this.a=d},
cdQ:function cdQ(){},
cdS:function cdS(){},
cdT:function cdT(d,e){this.a=d
this.b=e},
cdU:function cdU(d){this.a=d},
ao2:function ao2(d,e){this.c=d
this.a=e},
biT:function biT(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dGq:function dGq(){},
aKR:function aKR(){},
cdZ(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f_e)
u=!1
w=1
break}u=B.kW(!1,d,t,!1,null,A.a5p,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdZ,v)},
hHE(d){var w=A.d.bg(D.H6,new C.ce_(d))
if(w<0)return!0
return w>=4},
hHF(d){var w=A.d.bg($.bDK(),new C.ce0(d))
if(w<0)return!0
return w>=5},
ce_:function ce_(d){this.a=d},
ce0:function ce0(d){this.a=d},
i7M(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yC()
$.qh().pU(t,new C.fHn(s),!0)
u=B.a([B.DP(v,A.qo,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f9H,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.ni,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b1,A.r,u,v)},
fHn:function fHn(d){this.a=d},
i7n(){return C.h2p()},
i4k(){return C.bBH()},
i6n(){return C.h2g()},
aP7(d,e,f){var w=0,v=B.j(x.H),u
var $async$aP7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fGt(d,f),$async$aP7)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aP7,v)},
fGt(d,e){var w=0,v=B.j(x.H),u
var $async$fGt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzT
if(u==null)u=e+".pdf"
w=2
return B.b(B.bS(A.K,null,new C.fGu(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fGt)
case 2:return B.h(null,v)}})
return B.i($async$fGt,v)},
fGu:function fGu(d,e){this.a=d
this.b=e},
add:function add(d,e,f){this.c=d
this.d=e
this.a=f},
ery:function ery(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erA:function erA(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
adv:function adv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0O(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0N(g,m,f,d,e,h,l,k,j,o,i,null)},
hor(d){return B.cq(new C.fEu(d))},
h2r(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i7v(d){if(d===D.cn)return"None"
return C.h2r(d)},
bAo(d,e,f,g){return C.hYv(d,e,f,g)},
hYv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAo=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.h_e&&t.py())t.eF()
$.h_e=!0
s.a=null
w=3
return B.b(B.hW(A.bk,!0,"Animation preview",d,new C.fox(s,e,g,f),null,A.eH,!0,x.H),$async$bAo)
case 3:s=s.a
if(s!=null)s.a6(0)
$.h_e=!1
case 1:return B.h(u,v)}})
return B.i($async$bAo,v)},
fQP(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fQP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h2r(f)+" Slide transition preview"
s=s?Af.Fo:A.vt
w=3
return B.b(C.bAo(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIs(f,null),A.aq),null),r),$async$fQP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fQP,v)},
hnJ(d,e,f){var w,v,u=null,t=A.cu.az(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.de(f,t)
case 2:case 17:return B.dW(B.de(f,t),new B.v((1-t)*48,0))
case 3:return B.dW(B.de(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dW(B.de(f,t),new B.v(0,(1-t)*36))
case 5:return B.dW(B.de(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.ef(A.A,B.de(f,t),0.5+t*0.5,u,u)
case 7:return B.ef(A.A,B.de(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fE((1-t)*1.2)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k8((1-t)*1.2)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mN((1-t)*0.8)
v=0.6+t*0.4
w.jO(v,v,v,1)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dW(B.de(f,t),new B.v((1-t)*24,0))}},
bDf(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h2r(f)+" Element animation preview"
s=s?Af.Fo:A.vt
w=3
return B.b(C.bAo(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.azb(f,null),A.aq),null),r),$async$bDf)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDf,v)},
i7u(d){var w,v,u,t,s=$.afS.W(0,d)
if(s!=null){$.afS.n(0,d,s)
return s}w=A.cI.aK(A.a.b5(d,A.a.cK(d,",")+1))
$.afS.n(0,d,w)
v=$.h01=$.h01+w.length
u=B.a3($.afS).k("cu<1>")
for(;;){if(!(v>41943040&&$.afS.a>1))break
t=new B.cu($.afS,u).gae(0)
if(!t.C())B.b8(B.ft())
v-=$.afS.W(0,t.gR(0)).length
$.h01=v}return w},
i7b(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Sz(s,A.u))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Sz(t,A.u))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Sz(u,A.cx))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b5(d,r)
v.push(B.d3(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2d(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k4(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdE()*0.18
m.F(new B.iM(B.bx(e,new B.aT(w,w))))
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
if(o!=null)p.bB(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bB(o)
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
m.ba6(new B.v(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o4(e))
return m}},
fC3(d,e,f){return B.cq(new C.fC4(D.eSD.t(0,d),d,f,e))},
b0N:function b0N(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cdP:function cdP(d){this.a=d},
cdO:function cdO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdN:function cdN(){},
b0K:function b0K(d,e){this.b=d
this.a=e},
fEu:function fEu(d){this.a=d},
fEt:function fEt(d,e){this.a=d
this.b=e},
fox:function fox(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fov:function fov(d){this.a=d},
fow:function fow(d,e){this.a=d
this.b=e},
aIs:function aIs(d,e){this.c=d
this.a=e},
bu6:function bu6(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
f6j:function f6j(d,e,f){this.a=d
this.b=e
this.c=f},
aJ4:function aJ4(d,e){this.b=d
this.a=e},
UP:function UP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bj5:function bj5(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dSo:function dSo(d){this.a=d},
dSn:function dSn(d){this.a=d},
dSm:function dSm(d){this.a=d},
IE:function IE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdH:function cdH(d){this.a=d},
cdG:function cdG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azb:function azb(d,e){this.c=d
this.a=e},
bdz:function bdz(){this.d=0
this.c=this.a=null},
d4V:function d4V(d){this.a=d},
d4U:function d4U(d){this.a=d},
a7A:function a7A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjK:function bjK(d,e){var _=this
_.d=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
eeP:function eeP(d,e,f){this.a=d
this.b=e
this.c=f},
aZJ:function aZJ(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
beJ:function beJ(d,e,f){this.b=d
this.c=e
this.a=f},
bpG:function bpG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWp:function eWp(){},
fC4:function fC4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqG:function bqG(d,e,f){this.b=d
this.c=e
this.a=f},
aL4:function aL4(){},
aLA:function aLA(){},
aMX:function aMX(){},
fFu(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fFu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xa.c7().LW(D.dfG,A.tV,!0),$async$fFu)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i75(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFu,v)},
i75(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7T(d,new B.a_Q(A.cV.gcB().aK(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.i_8(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7T(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cg.KI(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7T(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i_8(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwX().cKb(B.rf(d,A.i_,o,o),o,o,!1).cLV(0,"word/document.xml")
if(n==null)return""
w=n.cTV()
v=A.cg.KI(0,w==null?$.hqI():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cD(q,new C.frp(),B.a3(q).k("J.E"),t).h2(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7T:function a7T(d,e,f){this.a=d
this.b=e
this.c=f},
frp:function frp(){},
hHL(d,e,f,g,h,i,j,k,l){return new C.NM(l,e,d,g,f,i,h,j,k,null)},
NM:function NM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aE1:function aE1(d,e,f,g,h,i,j,k,l){var _=this
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
exM:function exM(d){this.a=d},
exK:function exK(){},
exL:function exL(d){this.a=d},
eu9:function eu9(){},
eua:function eua(){},
eub:function eub(d,e){this.a=d
this.b=e},
evK:function evK(d){this.a=d},
evy:function evy(){},
evz:function evz(){},
etx:function etx(){},
ewS:function ewS(d){this.a=d},
exI:function exI(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exw:function exw(){},
exx:function exx(){},
exy:function exy(d){this.a=d},
exz:function exz(){},
esW:function esW(d){this.a=d},
exJ:function exJ(){},
euR:function euR(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
esV:function esV(d){this.a=d},
evd:function evd(d){this.a=d},
eve:function eve(d,e,f){this.a=d
this.b=e
this.c=f},
evf:function evf(d){this.a=d},
euQ:function euQ(){},
euP:function euP(d){this.a=d},
euN:function euN(){},
euM:function euM(d){this.a=d},
euO:function euO(){},
eu5:function eu5(d){this.a=d},
eu6:function eu6(d){this.a=d},
euX:function euX(d){this.a=d},
euS:function euS(d){this.a=d},
euT:function euT(d){this.a=d},
euU:function euU(d){this.a=d},
euV:function euV(d){this.a=d},
euW:function euW(d){this.a=d},
euY:function euY(d,e){this.a=d
this.b=e},
esY:function esY(){},
esZ:function esZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev8:function ev8(){},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e,f){this.a=d
this.b=e
this.c=f},
ev7:function ev7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev0:function ev0(d,e,f){this.a=d
this.b=e
this.c=f},
ev1:function ev1(d,e,f){this.a=d
this.b=e
this.c=f},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d,e){this.a=d
this.b=e},
ev4:function ev4(d,e){this.a=d
this.b=e},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev_:function ev_(d,e){this.a=d
this.b=e},
evb:function evb(d){this.a=d},
evc:function evc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eva:function eva(d){this.a=d},
evt:function evt(){},
evu:function evu(){},
evv:function evv(){},
evw:function evw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evq:function evq(d){this.a=d},
evs:function evs(){},
evr:function evr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
evo:function evo(d,e,f){this.a=d
this.b=e
this.c=f},
evp:function evp(d,e){this.a=d
this.b=e},
evx:function evx(){},
euZ:function euZ(d,e){this.a=d
this.b=e},
ete:function ete(){},
etf:function etf(d,e,f){this.a=d
this.b=e
this.c=f},
etg:function etg(d){this.a=d},
eth:function eth(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etd:function etd(d){this.a=d},
evD:function evD(d){this.a=d},
evC:function evC(d,e){this.a=d
this.b=e},
evB:function evB(d,e){this.a=d
this.b=e},
evA:function evA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evE:function evE(d,e){this.a=d
this.b=e},
erT:function erT(d,e){this.a=d
this.b=e},
etc:function etc(d,e){this.a=d
this.b=e},
eta:function eta(d){this.a=d},
evM:function evM(d,e,f){this.a=d
this.b=e
this.c=f},
et6:function et6(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
evL:function evL(d,e,f){this.a=d
this.b=e
this.c=f},
esX:function esX(d){this.a=d},
ety:function ety(){},
ext:function ext(d,e){this.a=d
this.b=e},
exu:function exu(d,e,f){this.a=d
this.b=e
this.c=f},
ewT:function ewT(d,e,f){this.a=d
this.b=e
this.c=f},
erU:function erU(d){this.a=d},
erR:function erR(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
erE:function erE(d){this.a=d},
erD:function erD(d,e){this.a=d
this.b=e},
erF:function erF(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
esl:function esl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
esm:function esm(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
esr:function esr(d){this.a=d},
eso:function eso(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esp:function esp(d){this.a=d},
esn:function esn(){},
esk:function esk(d,e,f){this.a=d
this.b=e
this.c=f},
evn:function evn(d,e){this.a=d
this.b=e},
exC:function exC(d){this.a=d},
exD:function exD(d,e){this.a=d
this.b=e},
exE:function exE(d){this.a=d},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
exB:function exB(d){this.a=d},
ex8:function ex8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex7:function ex7(d,e,f){this.a=d
this.b=e
this.c=f},
ex6:function ex6(){},
ex5:function ex5(d,e,f){this.a=d
this.b=e
this.c=f},
ex4:function ex4(d,e){this.a=d
this.b=e},
ex1:function ex1(d,e,f){this.a=d
this.b=e
this.c=f},
ex_:function ex_(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex3:function ex3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ex2:function ex2(d){this.a=d},
eu1:function eu1(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
ewU:function ewU(){},
exs:function exs(d,e){this.a=d
this.b=e},
exq:function exq(d){this.a=d},
exr:function exr(d){this.a=d},
erM:function erM(d,e){this.a=d
this.b=e},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
erO:function erO(d,e,f){this.a=d
this.b=e
this.c=f},
erS:function erS(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e,f){this.a=d
this.b=e
this.c=f},
erI:function erI(d){this.a=d},
evJ:function evJ(d,e,f){this.a=d
this.b=e
this.c=f},
exA:function exA(d,e,f){this.a=d
this.b=e
this.c=f},
eu4:function eu4(d,e,f){this.a=d
this.b=e
this.c=f},
eu3:function eu3(){},
esu:function esu(d,e,f){this.a=d
this.b=e
this.c=f},
esv:function esv(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
etw:function etw(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erY:function erY(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
erX:function erX(d){this.a=d},
esa:function esa(d,e){this.a=d
this.b=e},
erW:function erW(d){this.a=d},
esd:function esd(d){this.a=d},
ese:function ese(d){this.a=d},
esf:function esf(d){this.a=d},
esg:function esg(d){this.a=d},
esh:function esh(d){this.a=d},
esi:function esi(){},
esj:function esj(){},
es0:function es0(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
es7:function es7(d){this.a=d},
es8:function es8(d){this.a=d},
es9:function es9(d){this.a=d},
esb:function esb(d){this.a=d},
esc:function esc(d,e){this.a=d
this.b=e},
etv:function etv(d,e,f){this.a=d
this.b=e
this.c=f},
etu:function etu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ett:function ett(d,e,f){this.a=d
this.b=e
this.c=f},
ets:function ets(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
esy:function esy(d){this.a=d},
esx:function esx(d){this.a=d},
esw:function esw(d,e){this.a=d
this.b=e},
esz:function esz(d){this.a=d},
esA:function esA(d){this.a=d},
esB:function esB(d,e){this.a=d
this.b=e},
etb:function etb(d){this.a=d},
evm:function evm(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evk:function evk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evi:function evi(d){this.a=d},
evj:function evj(d,e){this.a=d
this.b=e},
evg:function evg(){},
evh:function evh(){},
ewV:function ewV(){},
ewW:function ewW(d,e){this.a=d
this.b=e},
ewX:function ewX(){},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
et_:function et_(){},
et0:function et0(){},
et1:function et1(){},
et4:function et4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et3:function et3(d,e){this.a=d
this.b=e},
et2:function et2(d,e,f){this.a=d
this.b=e
this.c=f},
euv:function euv(d){this.a=d},
euu:function euu(){},
euw:function euw(d,e){this.a=d
this.b=e},
eux:function eux(d,e){this.a=d
this.b=e},
eut:function eut(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
eus:function eus(d){this.a=d},
euz:function euz(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
euA:function euA(d,e){this.a=d
this.b=e},
euq:function euq(d){this.a=d},
euB:function euB(d,e){this.a=d
this.b=e},
eup:function eup(d,e){this.a=d
this.b=e},
euC:function euC(d,e){this.a=d
this.b=e},
euo:function euo(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
eun:function eun(d){this.a=d},
eug:function eug(d,e){this.a=d
this.b=e},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
euf:function euf(d){this.a=d},
euj:function euj(d,e){this.a=d
this.b=e},
eue:function eue(d){this.a=d},
euk:function euk(d,e){this.a=d
this.b=e},
eud:function eud(d){this.a=d},
eul:function eul(d,e){this.a=d
this.b=e},
euc:function euc(d){this.a=d},
eum:function eum(d){this.a=d},
eto:function eto(d){this.a=d},
etp:function etp(d){this.a=d},
etr:function etr(d){this.a=d},
etj:function etj(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
etk:function etk(d,e){this.a=d
this.b=e},
etl:function etl(d){this.a=d},
etm:function etm(d){this.a=d},
etn:function etn(d,e){this.a=d
this.b=e},
etq:function etq(d){this.a=d},
exG:function exG(d){this.a=d},
exH:function exH(d){this.a=d},
euG:function euG(d,e){this.a=d
this.b=e},
euF:function euF(d,e){this.a=d
this.b=e},
euE:function euE(d,e){this.a=d
this.b=e},
euH:function euH(d){this.a=d},
euI:function euI(d){this.a=d},
ew4:function ew4(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d){this.a=d},
ewh:function ewh(d){this.a=d},
ews:function ews(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewi:function ewi(d){this.a=d},
ewj:function ewj(d){this.a=d},
ewk:function ewk(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewq:function ewq(d){this.a=d},
evV:function evV(d){this.a=d},
ewr:function ewr(d){this.a=d},
ew2:function ew2(d){this.a=d},
ewt:function ewt(d){this.a=d},
ew1:function ew1(d,e){this.a=d
this.b=e},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewv:function ewv(d,e){this.a=d
this.b=e},
ew0:function ew0(d,e,f){this.a=d
this.b=e
this.c=f},
evR:function evR(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
ewP:function ewP(d,e){this.a=d
this.b=e},
ewR:function ewR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
eww:function eww(d,e,f){this.a=d
this.b=e
this.c=f},
ew_:function ew_(d,e,f){this.a=d
this.b=e
this.c=f},
evQ:function evQ(d,e,f){this.a=d
this.b=e
this.c=f},
evO:function evO(d,e){this.a=d
this.b=e},
ewx:function ewx(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
evP:function evP(d,e){this.a=d
this.b=e},
evN:function evN(d,e){this.a=d
this.b=e},
ewy:function ewy(d){this.a=d},
evY:function evY(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewC:function ewC(d){this.a=d},
evX:function evX(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewG:function ewG(d,e){this.a=d
this.b=e},
evW:function evW(d){this.a=d},
ewH:function ewH(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
ewI:function ewI(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
est:function est(d,e,f){this.a=d
this.b=e
this.c=f},
ess:function ess(d,e){this.a=d
this.b=e},
exb:function exb(d,e){this.a=d
this.b=e},
exa:function exa(d,e){this.a=d
this.b=e},
exc:function exc(d,e){this.a=d
this.b=e},
ex9:function ex9(d,e){this.a=d
this.b=e},
etB:function etB(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
etC:function etC(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
eu8:function eu8(){},
eu7:function eu7(){},
exo:function exo(d){this.a=d},
exn:function exn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exm:function exm(d,e){this.a=d
this.b=e},
exh:function exh(d,e){this.a=d
this.b=e},
exl:function exl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exi:function exi(d,e){this.a=d
this.b=e},
exd:function exd(d){this.a=d},
exe:function exe(d){this.a=d},
exf:function exf(d){this.a=d},
exg:function exg(d){this.a=d},
exj:function exj(d,e){this.a=d
this.b=e},
exk:function exk(d,e){this.a=d
this.b=e},
exp:function exp(d){this.a=d},
esT:function esT(d){this.a=d},
esS:function esS(d,e,f){this.a=d
this.b=e
this.c=f},
esR:function esR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esG:function esG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
esH:function esH(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
esJ:function esJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esF:function esF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esK:function esK(d,e){this.a=d
this.b=e},
esM:function esM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esL:function esL(d,e){this.a=d
this.b=e},
esN:function esN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esE:function esE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esO:function esO(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
esP:function esP(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
esQ:function esQ(d,e){this.a=d
this.b=e},
euK:function euK(d){this.a=d},
euJ:function euJ(d){this.a=d},
euL:function euL(d,e){this.a=d
this.b=e},
etP:function etP(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
etR:function etR(d,e){this.a=d
this.b=e},
etN:function etN(d,e){this.a=d
this.b=e},
etS:function etS(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etU:function etU(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etV:function etV(d,e,f){this.a=d
this.b=e
this.c=f},
etJ:function etJ(d,e){this.a=d
this.b=e},
etW:function etW(d,e,f){this.a=d
this.b=e
this.c=f},
etI:function etI(d,e){this.a=d
this.b=e},
etX:function etX(d,e){this.a=d
this.b=e},
etH:function etH(d,e,f){this.a=d
this.b=e
this.c=f},
etE:function etE(d,e){this.a=d
this.b=e},
etY:function etY(d,e){this.a=d
this.b=e},
etG:function etG(d,e){this.a=d
this.b=e},
etZ:function etZ(d,e){this.a=d
this.b=e},
etF:function etF(d,e,f){this.a=d
this.b=e
this.c=f},
etD:function etD(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
eu2:function eu2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erC:function erC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evH:function evH(d,e){this.a=d
this.b=e},
evF:function evF(d){this.a=d},
evG:function evG(d,e){this.a=d
this.b=e},
af0:function af0(d,e,f){this.a=d
this.b=e
this.c=f},
ayy:function ayy(d,e){this.c=d
this.a=e},
bcl:function bcl(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b4$=e
_.c=_.a=null},
d0w:function d0w(d){this.a=d},
d0v:function d0v(d){this.a=d},
bcz:function bcz(d,e){this.c=d
this.a=e},
d0S:function d0S(d){this.a=d},
d0T:function d0T(d){this.a=d},
JG:function JG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bck:function bck(){this.d=!1
this.c=this.a=null},
d0t:function d0t(d){this.a=d},
d0p:function d0p(d){this.a=d},
d0u:function d0u(d){this.a=d},
d0o:function d0o(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0q:function d0q(d){this.a=d},
d0r:function d0r(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_j:function a_j(d,e,f){this.c=d
this.d=e
this.a=f},
aE4:function aE4(d,e,f){var _=this
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
eym:function eym(){},
eyc:function eyc(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyd:function eyd(d){this.a=d},
eye:function eye(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey9:function ey9(d,e){this.a=d
this.b=e},
eya:function eya(d){this.a=d},
eyb:function eyb(d,e,f){this.a=d
this.b=e
this.c=f},
eyj:function eyj(){},
eyk:function eyk(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyn:function eyn(d,e,f){this.a=d
this.b=e
this.c=f},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyo:function eyo(d){this.a=d},
JN:function JN(d,e){this.c=d
this.a=e},
bra:function bra(d,e){this.b=d
this.a=e},
bhd:function bhd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhc:function bhc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJM:function aJM(){},
aLO:function aLO(){},
bwV:function bwV(){},
aLP:function aLP(){},
fHo(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fHo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xa.c7().LW(B.a(["pdf"],x.s),A.tV,!0),$async$fHo)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bor(s,"data:application/pdf;base64,"+A.cV.gcB().aK(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHo,v)},
i7G(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cG(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c9(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gM(0)
if(t>0){s=J.aQs(t,1,200)
return s}}catch(r){}return 1},
fHf(d){return C.i7F(d)},
i7F(d){var w=0,v=B.j(x.T),u
var $async$fHf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHf,v)},
bCs(d,e,f,g){return C.i7P(d,e,f,g)},
i7P(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCs=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hp1(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lR(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lR(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lR(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lR(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.r0()
f=B.Dk(g,null)
a7=B.N()
a7.r=A.qS.gp(0)
f.b_(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bS
b1.e=A.fF
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pE()
w=7
return B.b(a3.zj(800,h),$async$bCs)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hv(A.h0),$async$bCs)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eU(A.dD.gaP(a5))
a7=A.cV.gcB().aK(a7)
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
return B.i($async$bCs,v)},
aPG(d,e,f){return C.i7D(d,e,f)},
i7D(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.ay:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahp(d,e,f,new C.fHd(r,q),q,"Sign document"),$async$aPG)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCs(q,t,r.b,r.c),$async$aPG)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0R(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPG,v)},
i7N(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hic(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hic(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b5(A.a.aV(A.o.fX(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b5(A.a.aV(A.o.fX(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lw&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hhP(q.ay)+";border:2px solid "+C.hhP(q.ch)+'"></div>'
break
case 5:l=C.h1h(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajv()
if(p==null)p=A.axx
n=B.T(p)
k=n.k("nn<1>")
j=new B.nn(p,0,8,k)
j.zI(p,0,8,n.c)
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
hhP(d){var w=A.o.aB(d,24)
return"rgba("+(A.o.aB(d,16)&255)+","+(A.o.aB(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hic(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCq(d,e){var w=0,v=B.j(x.H)
var $async$bCq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fHm(e,C.i7N(e),d),d,null,!0,!0,x.H),$async$bCq)
case 2:return B.h(null,v)}})
return B.i($async$bCq,v)},
bCr(){var w=0,v=B.j(x.T),u,t,s
var $async$bCr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GA(92,2400),$async$bCr)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fHf(s),$async$bCr)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCr,v)},
aPH(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h2w(d),$async$aPH)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fJK(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPH,v)},
hc7(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0R:function b0R(d,e,f){this.a=d
this.b=e
this.c=f},
fHd:function fHd(d,e){this.a=d
this.b=e},
fHm:function fHm(d,e,f){this.a=d
this.b=e
this.c=f},
fHj:function fHj(d){this.a=d},
fHk:function fHk(d,e,f){this.a=d
this.b=e
this.c=f},
fHl:function fHl(d,e,f){this.a=d
this.b=e
this.c=f},
i7E(d){return C.kx(d.w)},
i7L(d){var w,v,u,t
if(d.length===0||!A.d.d6(d,C.i9v()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yA(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.huK()
if(w.b.test(u))return u
return null},
hp3(d,e,f){var w,v,u=C.hDn(d),t=$.px()
for(w=0;w<80;++w){v=u+A.a.aV(A.o.u(t.aw(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aV(A.o.u(Date.now()%1000),3,"0")},
i7R(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f0(w,d.b);v.C();){u=w.gR(w).y
t=C.yA(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fHb(d,e){var w,v=d.y,u=C.yA(v==null?"":v)
if(u!=null)return d.y=u
w=C.i7R(new B.a_(e,new C.fHc(d),B.T(e).k("a_<1>")))
v=d.x
return d.y=C.hp3(v==null?"":v,null,w)},
i7Q(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kx(w.w))return null
v=w.y
return C.yA(v==null?"":v)},
hHN(){var w,v=$.px(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.h2(u)},
VQ(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VQ)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$VQ)
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
return B.i($async$VQ,v)},
VR(d){return C.hHO(d)},
hHO(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VR)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VR)
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
return B.i($async$VR,v)},
a7V(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7V=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7V)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VQ(),$async$a7V)
case 4:s=a6
r=C.yA(a2==null?"":a2)
if(r==null)r=a3!=null?C.hp3(a3,null,A.IL):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gi9(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yA(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdL(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aK(t)
g.n(0,"payload",A.cV.gcB().aK(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.T8.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yA(J.k(q==null?"":q))
if(f==null)f=C.hcc(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VR(s),$async$a7V)
case 7:u=new B.aFv(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hHN()
n=r==null
d=n?C.hcc(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aK(t)
q.n(0,"payload",A.cV.gcB().aK(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.T8.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VR(s),$async$a7V)
case 8:u=new B.aFv(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7V,v)},
hcc(d){var w,v,u=$.px()
for(w=0;w<200;++w){v="SL"+A.a.aV(A.o.u(u.aw(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aV(A.o.u(Date.now()%1000),3,"0")},
aqV(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqV)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VQ(),$async$aqV)
case 6:t=f
s=J.a4(t)
r=s.gM(t)
s.bq(t,new C.cee(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VR(t),$async$aqV)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqV,v)},
aqU(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yA(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqU)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VQ(),$async$aqU)
case 6:t=o.jz(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yA(J.k(q==null?"":q))===p){u=C.a7U(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqU,v)},
a7U(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7U=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7U)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VQ(),$async$a7U)
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
try{s=A.cg.cA(0,A.cI.aK(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.T8.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aJ(0,s,null)
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
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=7
return B.b(C.VR(p),$async$a7U)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7U,v)},
i7K(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("M<1,a5<m,@>>")
w=B.C(new B.M(d,new C.fHi(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fHq(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.S.ao(w,null)}return A.S.ao(C.i7K(d==null?B.a([],x.D):d,f,g),null)},
fHp(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fHp=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7V(h,d,e,f,g),$async$fHp)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yA(e==null?"":e)
u=new B.aFi(s,t)
w=1
break}t=A.dK.aK(h)
t=A.kk.gcB().aK(t)
u=new B.aFi(C.yA(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHp,v)},
h2y(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d0(q,"NGMYSLIDESYNC2|"))return!0
if(J.d0(q,"NGMYSLIDECODE|"))return!0
if(J.d0(q,"NGMY_SL:"))return!0
if(J.f2(q,s)||J.f2(q,r))return!0
if(J.d0(q,"{"))try{w=A.S.aJ(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i7O(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h2y(v))return v
u=A.a.cK(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b5(v,u))
if(C.h2y(t))return t}s=A.a.cK(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b5(v,s))
if(C.h2y(t))return t}}return null},
fHe(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d0(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d0(t,"NGMY_SL:"))w=v.a(A.S.aJ(0,A.cg.cA(0,A.cI.aK(J.mH(t,8))),null))
else w=v.a(A.S.aJ(0,t,null))
v=C.hRt(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aha(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aha=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqU(t[1]),$async$aha)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHe(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yA(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqU(r),$async$aha)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHe(s)
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
return B.b(C.a7U(t[1]),$async$aha)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHe(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fHe(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aha,v)},
hRt(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.T8.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h2v(C.VM(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cD(t,new C.feo(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h2v(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
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
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VM(B.a2(o,x.N,x.z))
if(e&&C.kx(p.w))p.Q=new B.S(Date.now(),0,!1).a7().bR(144e8).ac()
return p},
bCb(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gz(),$async$bCb)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aha(s),$async$bCb)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCb,v)},
fQ3(d){var w=0,v=B.j(x.T),u,t
var $async$fQ3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hW(D.WP,!0,"Dismiss",d,new C.fQ4(),new C.fQ5(),A.Fl,!0,x.N),$async$fQ3)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.eYr)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQ3,v)},
ibE(d,e,f,g,h){return B.a6(d,!1).cm(B.e9(new C.fQ6(h,e,g,f),!0,null,x.H))},
fHc:function fHc(d){this.a=d},
cee:function cee(d){this.a=d},
fHi:function fHi(){},
feo:function feo(d){this.a=d},
fQ4:function fQ4(){},
fQ5:function fQ5(){},
fQ6:function fQ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VO:function VO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aE2:function aE2(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
exT:function exT(){},
exP:function exP(d,e){this.a=d
this.b=e},
exS:function exS(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exR:function exR(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exY:function exY(d){this.a=d},
exZ:function exZ(d){this.a=d},
exX:function exX(d){this.a=d},
ey_:function ey_(d){this.a=d},
exW:function exW(d){this.a=d},
ey0:function ey0(d,e){this.a=d
this.b=e},
exO:function exO(d,e){this.a=d
this.b=e},
exN:function exN(d,e){this.a=d
this.b=e},
VP:function VP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk5:function bk5(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ey1:function ey1(d,e){this.a=d
this.b=e},
ey2:function ey2(d){this.a=d},
ey3:function ey3(){},
ey4:function ey4(d){this.a=d},
ey5:function ey5(d,e){this.a=d
this.b=e},
aE_:function aE_(d){this.a=d},
aE0:function aE0(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
erw:function erw(d){this.a=d},
erv:function erv(){},
erx:function erx(d){this.a=d},
ers:function ers(d){this.a=d},
err:function err(){},
ert:function ert(d){this.a=d},
eru:function eru(d){this.a=d},
bur:function bur(){},
aqW:function aqW(d){this.a=d},
aE3:function aE3(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ey7:function ey7(d){this.a=d},
ey6:function ey6(d){this.a=d},
hWE(){var w,v,u,t
for(v=0;v<4;++v){w=D.d4i[v]
try{if(Ac.bWR(w)){u=w
return u}}catch(t){}}return null},
QY(d,e){return C.i4v(d,e)},
i4v(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QY=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hWE()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.of?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qy(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.om(new C.fBx(c2,b7,o),!1,!1)
b6.lT(0,l)
b9=x.H
B.cb(null,A.d9,!1,null,new C.fBy(n,m),c6,null,!0,!0,b9)
k=new C.fBC(b7)
j=new C.fBD()
i=null
t=4
b3=c2.a
h=Aj.aRX(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fSO(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWS(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HJ.ym(i,"dataavailable",new C.fBz(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.HJ.ym(i,"stop",new C.fBA(d))
J.ahL(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QY)
case 8:w=7
return B.b(c5.$1(d0),$async$QY)
case 7:a0=d0
J.fSQ(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahL(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahL(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QY)
case 15:w=14
return B.b(c5.$1(d0),$async$QY)
case 14:a0=d0
case 13:J.fSQ(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahL(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.S(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fSQ(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QY)
case 18:w=16
break
case 17:J.ahL(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahL(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d7(0,A.nZ),$async$QY)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hR(e,a5)
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
J.La(b0)
J.lY(b0)
B.bN(A.pQ,new C.fBB(a7),b9)
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
J.lY(l)
if(p.py())p.eF()
c3=o
b3=$.aw()
c3.si0(b3)
J.aQw(c3,0)
c3=n
c3.si0(b3)
J.aQw(c3,0)
c3=m
c3.si0(b3)
J.aQw(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QY,v)},
fBx:function fBx(d,e,f){this.a=d
this.b=e
this.c=f},
fBw:function fBw(){},
fBy:function fBy(d,e){this.a=d
this.b=e},
fBC:function fBC(d){this.a=d},
fBD:function fBD(){},
fBz:function fBz(d){this.a=d},
fBA:function fBA(d){this.a=d},
fBB:function fBB(d){this.a=d},
buD:function buD(d,e,f){this.c=d
this.d=e
this.a=f},
f8L:function f8L(){},
f8M:function f8M(){},
ceB(d){var w=0,v=B.j(x.at),u,t,s
var $async$ceB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ar5(d,A.zp),$async$ceB)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bC(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ceB,v)},
ceA(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7B:function a7B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjP:function bjP(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
efG:function efG(d){this.a=d},
efE:function efE(d){this.a=d},
efF:function efF(d,e){this.a=d
this.b=e},
a8t:function a8t(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ot$=k
_.ou$=l
_.ov$=m
_.nO$=n},
a8u:function a8u(d,e){this.a=d
this.b=e},
b2u:function b2u(){},
cgN:function cgN(){},
cgO:function cgO(){},
cgP:function cgP(d,e,f,g,h,i,j,k,l){var _=this
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
hvK(d){return new C.ai2(d)},
a2F:function a2F(){},
ai2:function ai2(d){this.a=d},
aQR:function aQR(){},
awq:function awq(d,e){this.d=d
this.b=e
this.a=null},
aSm:function aSm(d){this.b=d
this.a=null},
fwJ(d,e){var w=0,v=B.j(x.H)
var $async$fwJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxy().LE(d,e),$async$fwJ)
case 2:B.fJQ()
return B.h(null,v)}})
return B.i($async$fwJ,v)},
hmk(d,e){return(A.rt[(d^e)&255]^A.o.aB(d,8))>>>0},
fu0(d,e,f,g,h,i){var w=C.i0R(d,A.dd,f,null,A.cZ,g,h,i)
return w},
hoc(d){var w=F.hoV(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hDn(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p7.h(0,w)
if(v!=null)return v
for(u=A.p7.gdL(A.p7),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hok(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.des[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAl(d,e){return C.hYq(d,e)},
hYq(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hR([d],"application/pdf")
n=x.z
q=B.aU0(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ek(B.k1(o,"share",[p]),x.H),$async$bAl)
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
return B.i($async$bAl,v)},
h2p(){var w=0,v=B.j(x.y),u,t,s
var $async$h2p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fm_
s=$.bzT
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAl(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2p,v)},
bBH(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fm_
l=$.bzT
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hiS()?3:4
break
case 3:w=5
return B.b(C.bAl(m,k),$async$bBH)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzU
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
J.La(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBH)
case 10:J.lY(q)
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
return B.i($async$bBH,v)},
h2g(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h2g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzU
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lA.qL(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h2g,v)},
h2x(d,e){var w=0,v=B.j(x.H),u,t
var $async$h2x=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hR([d],"text/html"))
t.toString
u=window
u.toString
A.lA.qL(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h2x,v)},
b1r(d,e){var w=0,v=B.j(x.y),u
var $async$b1r=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1t(d,e),$async$b1r)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1s(d),$async$b1r)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1r,v)}},D,H,I,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,L,Aq,A_,O,A0,Aa,M,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,K,Az,S,T,AA,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[196]
A5=c[66]
Ai=c[49]
A6=c[161]
Aj=c[57]
U=c[211]
A7=c[52]
Ak=c[139]
Al=c[221]
C=a.updateHolder(c[4],C)
D=c[209]
H=c[91]
I=c[127]
Am=c[36]
A8=c[213]
X=c[210]
V=c[199]
An=c[122]
G=c[180]
F=c[31]
E=c[212]
W=c[123]
Q=c[141]
Y=c[29]
Z=c[168]
Ao=c[223]
Ap=c[176]
A9=c[109]
L=c[214]
Aq=c[121]
A_=c[60]
O=c[190]
A0=c[75]
Aa=c[99]
M=c[149]
Ab=c[111]
Ar=c[89]
As=c[216]
P=c[115]
A1=c[130]
At=c[87]
Au=c[125]
Ac=c[53]
Ad=c[186]
Av=c[35]
Ae=c[73]
Af=c[140]
Ag=c[220]
Aw=c[222]
Ax=c[219]
R=c[67]
Ay=c[217]
K=c[165]
Az=c[177]
S=c[47]
T=c[215]
AA=c[224]
N=c[197]
A2=c[218]
A3=c[106]
A4=c[56]
C.nU.prototype={
v0(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tQ(t,v)
return new C.nU(t===0?!1:w,v,t)},
bLz(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D_()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tQ(w,u)
return new C.nU(r===0?!1:s,u,r)},
bM4(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D_()
w=o-d
if(w<=0)return p.a?$.h3W():$.D_()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tQ(w,u)
q=new C.nU(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a2s())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bLz(v)
u=w+v+1
t=new Uint16Array(u)
C.hft(r.b,w,e,t)
w=r.a
s=C.tQ(u,t)
return new C.nU(s===0?!1:w,t,s)},
mu(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bM4(v)
t=w-v
if(t<=0)return n.a?$.h3W():$.D_()
s=n.b
r=new Uint16Array(t)
C.hNs(s,w,e,r)
w=n.a
q=C.tQ(t,r)
p=new C.nU(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aC(0,$.a2s())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a2s())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEN(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7W(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7W(t,e)
if(s===0)return $.D_()
if(r===0)return t.a===e?t:t.v0(0)
w=s+1
v=new Uint16Array(w)
C.hNq(t.b,s,d.b,r,v)
u=C.tQ(w,v)
return new C.nU(u===0?!1:e,v,u)},
Hb(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D_()
w=d.c
if(w===0)return t.a===e?t:t.v0(0)
v=new Uint16Array(s)
C.b9y(t.b,s,d.b,w,v)
u=C.tQ(s,v)
return new C.nU(u===0?!1:e,v,u)},
byv(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tQ(r,u)
return new C.nU(!1,u,s)},
byu(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tQ(u,r)
return new C.nU(!1,r,v)},
byw(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tQ(p,m)
return new C.nU(s!==0,m,s)},
Uz(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D_()
w=t.a
if(w===e.a){if(w){w=$.a2s()
return t.Hb(w,!0).byw(e.Hb(w,!0),!0).a7W(w,!0)}return t.byv(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byu(v.Hb($.a2s(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7W(e,v)
if(C.cEN(u.b,t,e.b,w)>=0)return u.Hb(e,v)
return e.Hb(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v0(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7W(e,v)
if(C.cEN(u.b,t,e.b,w)>=0)return u.Hb(e,v)
return e.Hb(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D_()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hfu(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tQ(w,t)
return new C.nU(q===0?!1:r,t,q)},
bLy(d){var w,v,u,t
if(this.c<d.c)return $.D_()
this.aR9(d)
w=$.fYj.c7()-$.ax9.c7()
v=C.fYl($.fYi.c7(),$.ax9.c7(),$.fYj.c7(),w)
u=C.tQ(w,v)
t=new C.nU(!1,v,u)
return this.a!==d.a&&u>0?t.v0(0):t},
cnH(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aR9(d)
w=C.fYl($.fYi.c7(),0,$.ax9.c7(),$.ax9.c7())
v=C.tQ($.ax9.c7(),w)
u=new C.nU(!1,w,v)
if($.fYk.c7()>0)u=u.mu(0,$.fYk.c7())
return t.a&&u.c>0?u.v0(0):u},
aR9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hfq&&d.c===$.hfs&&g.b===$.hfp&&d.b===$.hfr)return
w=d.b
v=d.c
u=16-A.o.gajU(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hfo(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hfo(g.b,f,u,r)}else{r=C.fYl(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fYm(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEN(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9y(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9y(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hNr(p,r,i);--o
C.hfu(h,j,0,r,o,s)
if(r[i]<h){m=C.fYm(j,s,o,n)
C.b9y(r,l,n,m,r)
while(--h,r[i]<h)C.b9y(r,l,n,m,r)}--i}$.hfp=g.b
$.hfq=f
$.hfr=w
$.hfs=v
$.fYi.b=r
$.fYj.b=l
$.ax9.b=s
$.fYk.b=u},
gX(d){var w,v,u,t=new C.cEO(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEP().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nU&&this.aL(0,e)===0},
tc(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uV(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajU(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aB(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cEQ(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cER(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l8(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v0(0):r
while(v.c>1){u=$.hsG()
if(u.c===0)B.b8(D.b4_)
t=v.cnH(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLy(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).h2(0)},
$iaRA:1,
$ihL:1}
C.aR0.prototype={
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
cLV(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k5(w,w.length,B.T(w).k("k5<1>"))}}
C.RB.prototype={
cTV(){var w,v
if(this.as==null)this.bcv()
w=this.as
v=w==null?null:w.aoB()
return v==null?null:v.eM()},
bcv(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoB().eM()
this.as=new C.bNH(v)}},
gY(d){return this.at}}
C.a3D.prototype={
a5(){return"CompressionType."+this.b}}
C.bHg.prototype={
eA(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.yZ[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fI(u,t)&A.yZ[d])
s.c=t}return v}}
C.bFD.prototype={
cKa(d,e){var w,v,u,t,s,r=this,q=new C.bHg(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eA(8)!==66||q.eA(8)!==90||q.eA(8)!==104)return!1
w=r.a=q.eA(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.clY(q)
if(t<0)return!1
if(t===0){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
s=r.cm0(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
return!0}}return!0},
clY(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eA(8)
if(t!==D.dkZ[u])v=!1
if(t!==D.cYJ[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cm0(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eA(1),d2=((d3.eA(8)<<8|d3.eA(8))<<8|d3.eA(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1b()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eA(3)
if(q<2||q>6)return-1
v=d3.eA(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eA(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hqM(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eA(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eA(1)===0)break
i=d3.eA(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hqL()
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
if(f<h)h=f}c9.bXD(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.ats(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.ats(d3)}while(a3===0||a3===1);++a5
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
a3=c9.ats(d3)
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
c1=(c1<<8^D.He[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hg[b9];++b9
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
if(b8===0){b8=D.Hg[b9];++b9
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
if(b8===0){b8=D.Hg[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hg[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hg[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.He[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.He[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.He[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.He[c1>>>24&255^c7&255])>>>0
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
ats(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eA(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eA(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bXD(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1b(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwY.prototype={
aHu(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bOS(e)
if(q<0)return
e.c=q
if(e.aN()!==101010256)return
e.aW()
e.aW()
e.aW()
e.aW()
r.f=e.aN()
r.r=e.aN()
w=e.aW()
if(w>0)e.aHx(w,!1)
r.cml(e)
q=r.r
v=r.f
u=e.aKy(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aN()!==33639248)break
s=new C.b8e()
s.cTU(0,u,e,f)
q.push(s)}},
cml(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7z(20,r)
if(w.aN()!==117853008){d.c=s
return}w.aN()
v=w.t0()
w.aN()
d.c=v
if(d.aN()!==101075792){d.c=s
return}d.t0()
d.aW()
d.aW()
d.aN()
d.aN()
d.t0()
d.t0()
u=d.t0()
t=d.t0()
this.f=u
this.r=t
d.c=s},
bOS(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7z(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alC(A.i_)
o.aLP(r.eM(),A.i_,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aN()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwW.prototype={}
C.awO.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwZ.prototype={
aHu(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aN()!==67324752)return
e.aW()
o.b=e.aW()
w=D.aE3.h(0,e.aW())
o.c=w==null?D.LS:w
o.d=e.aW()
o.e=e.aW()
o.f=e.aN()
o.r=e.aN()
o.w=e.aN()
v=e.aW()
u=e.aW()
o.x=e.ano(v)
o.y=e.hk(u).eM()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aV0:D.DJ
o.ay=f
o.Q=e.hk(t)
if(o.at!==D.DJ&&u>2){w=o.y
w.toString
s=B.rf(w,A.i_,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aW()===39169){s.aW()
s.aW()
s.ano(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aW()
o.at=D.aV1
o.ax=new C.cwW(r,q)
w=D.aE3.h(0,q)
o.c=w==null?D.LS:w}}}if((o.b&8)!==0){p=e.aN()
if(p===134695760)o.f=e.aN()
else o.f=p
o.r=e.aN()
o.w=e.aN()}},
gM(d){return this.bm2().length},
aoB(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rf(new Uint8Array(0),A.i_,q,q)
w=r.at
if(w!==D.DJ)if(p.gM(0)<=0)r.at=D.DJ
else{if(w===D.aV0){p=r.bJR(p)
r.Q=p}else if(w===D.aV1){p=r.bJu(p)
r.Q=p}r.at=D.DJ}w=r.c
if(w===D.agC){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pw.Bs(p.eM(),!0,!1)
else{t=B.a8i(A.i_,r.w)
p=r.Q
p.toString
A.pw.a3G(p,t,!0,!1)
u.b=t.GM()}r.Q.c=v
return B.rf(u.bi(),A.i_,q,q)}else if(w===D.agD){s=B.a8i(A.i_,32768)
p=r.Q
v=p.c
C.hvV().cKa(p,s)
u=s.GM()
r.Q.c=v
return B.rf(u,A.i_,q,q)}else return B.rf(p.eM(),A.i_,q,q)},
bm2(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eM()},
u(d){return this.x},
b8o(d){var w=this.ch,v=C.JC(C.hmk(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Uz(0,C.JC(255)))
w[1]=v
w[1]=v.aG(0,C.JC(134775813)).ad(0,C.JC(1)).Uz(0,C.JC(4294967295))
w[2]=C.JC(C.hmk(w[2].N(0),w[1].mu(0,24).N(0)))},
aQx(){var w=(this.ch[2].Uz(0,C.JC(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJR(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rf(new Uint8Array(0),A.i_,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8o(u[v.c++]^r.aQx())}t=r.Q.eM()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQx()
r.b8o(s)
u&2&&B.aj(t)
t[w]=s}return B.rf(t,A.i_,q,q)},
bJu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hk(8).eM()
v=16}else if(k===2){w=d.hk(12).eM()
v=24}else{w=d.hk(16).eM()
v=32}u=d.hk(2).eM()
t=d.hk(d.gM(0)-10)
s=d.hk(10)
r=t.eM()
k=this.ay
k.toString
q=C.hN7(k,w,v)
p=new Uint8Array(B.ce(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.ds(q,v,k)))
if(!C.heT(A.aH.ds(q,k,k+2),u))throw B.V(B.fn("password error"))
k=new Uint8Array(16)
n=new C.bEd(k,new Uint8Array(16),p)
k=x.S
m=J.a52(0,k)
m=n.r=new C.cgC(m)
m.c=!0
m.b=m.bll(!0,new C.ast(p))
if(m.c)m.d=B.bo(D.oc,!0,k)
else m.d=B.bo(D.yQ,!0,k)
l=C.hd5(C.hd7(),64)
l.beR(new C.ast(o))
n.w=l
n.cTu(r,0,r.length)
k=s.eM()
m=n.x
m===$&&B.c()
if(!C.heT(k,m))throw B.V(B.fn("macs don't match"))
return B.rf(r,A.i_,null,null)}}
C.b8e.prototype={
cTU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aW()
e.aW()
e.aW()
e.aW()
e.aW()
e.aW()
e.aN()
n.w=e.aN()
n.x=e.aN()
w=e.aW()
v=e.aW()
u=e.aW()
n.y=e.aW()
e.aW()
n.Q=e.aN()
n.as=e.aN()
if(w>0)n.at=e.ano(w)
if(v>0){t=e.hk(v).eM()
n.ax=t
if(v>=4){s=B.rf(t,A.i_,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aW()
p=s.aW()
o=s.a7z(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t0()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t0()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t0()
p-=8}if(p>=4&&n.y===65535)n.y=o.aN()}}}}if(u>0)e.ano(u)
f.c=n.as
t=new C.cwZ(D.LS,n,D.DJ,B.a([C.JC(0),C.JC(0),C.JC(0)],x.f3))
n.ch=t
t.aHu(0,f,g)},
u(d){return this.at}}
C.cwX.prototype={
cKb(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwY(B.a([],x.fT))
this.a=g
g.aHu(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aR0(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RB(o,A.o.an(Date.now(),1000),0):C.h5j(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h5j(o,q.w,q)
if(k.as==null)k.bcv()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alC(A.i_)
j.aLP(o,A.i_,h,h)}i=j==null?h:j.eM()
if(i!=null)new B.FY(!1).Dr(i,0,h,!0)}}return v}}
C.bEd.prototype={
cTu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Co(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hvE(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dK("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dK("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bNd(u,0,w,0,o)}else{o===$&&B.c()
q.bJV(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KZ(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.lE(0)
w=w.d
w===$&&B.c()
l.Co(0,w,0,w.length)
return f}}
C.cgH.prototype={}
C.cgL.prototype={}
C.cgF.prototype={}
C.ast.prototype={}
C.cgK.prototype={
cKq(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.dY(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.beR(new C.ast(A.aH.fQ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOd(n.a,n.b,t,s,r)
r+=v}A.aH.hm(f,g,g+w,s)
return o.a.c},
bOd(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dK("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Co(0,d,0,d.length)
v.Co(0,f,0,4)
u=m.c
u===$&&B.c()
w.KZ(u,0)
u=m.c
A.aH.hm(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Co(0,s,0,s.length)
w.KZ(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cgG.prototype={}
C.cgE.prototype={}
C.asu.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asu){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tc(d,e){var w=this.a
w===$&&B.c()
w=A.o.tc(w,e.gbXU())
if(!w)e.gbXU()
return w},
aK_(d,e){this.a=0
this.b=d},
tg(d){return this.aK_(d,null)},
aKB(d){var w,v=this,u=v.b
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
w.b06(v,u)
u=w.b
u===$&&B.c()
w.b06(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b06(d,e){var w,v=A.o.fX(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgJ.prototype={
lE(d){var w,v=this
v.a.tg(0)
v.c=0
A.aH.h6(v.b,0,4,0)
v.w=0
w=v.r
A.d.h6(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ao5(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1B(u,0)
v.c=0}v.a.aKB(1)},
Co(d,e,f,g){var w=this.ckI(e,f,g)
f+=w
g-=w
w=this.ckJ(e,f,g)
this.ckz(e,f+w,g-w)},
KZ(d,e){var w,v=this,u=C.hd6(v.a),t=u.a
t===$&&B.c()
t=C.h30(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h30(w,3)
v.ckD()
v.ckA(u)
v.ash()
v.ceN(d,e)
v.lE(0)
return 20},
b1B(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o3(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ib===w.d)
if(w.w===16)w.ash()},
ash(){this.cTt()
this.w=0
A.d.h6(this.r,0,16,0)},
ckz(d,e,f){while(f>0){this.ao5(d[e]);++e;--f}},
ckJ(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1B(d,e)
e+=4
f-=4
w.aKB(4)
v+=4}return v},
ckI(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ao5(d[e]);++e;--f;++v}return v},
ckD(){this.ao5(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ao5(0)}},
ckA(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ash()
u=v.d
switch(u){case A.ib:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.E9:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ceN(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ib===this.d,s=0;s<w;++s){r=v[s]
q=J.o3(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgM.prototype={
cTt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qb[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qb[30]
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
C.cgI.prototype={
beR(d){var w,v,u,t,s=this,r=s.a
r.lE(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Co(0,w,0,v)
w=s.d
w===$&&B.c()
r.KZ(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hm(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h6(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hm(w,0,u,s.d)
s.b9z(s.d,u,54)
s.b9z(s.e,u,92)
u=s.d
r.Co(0,u,0,u.length)},
KZ(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KZ(s,w)
s=u.e
t.Co(0,s,0,s.length)
v=t.KZ(d,e)
s=u.e
A.aH.h6(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Co(0,s,0,s.length)
return v},
b9z(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cgD.prototype={}
C.cgC.prototype={
a20(d){return(D.oc[d&255]&255|(D.oc[d>>>8&255]&255)<<8|(D.oc[d>>>16&255]&255)<<16|D.oc[d>>>24&255]<<24)>>>0},
bll(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dK("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a20((m>>>8|(m&$.qb[24])<<24)>>>0)^D.cAR[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a20((k>>>8|(k&$.qb[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a20((k>>>8|(k&$.qb[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a20((g>>>8|(g&$.qb[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a20(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bNd(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o3(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.qb[8]
s=D.e8[b0>>>16&255]
r=$.qb[16]
q=D.e8[b1>>>24&255]
p=$.qb[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.ns(D.e8[a9>>>8&255],24)^C.ns(D.e8[b0>>>16&255],16)^C.ns(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.ns(D.e8[b0>>>8&255],24)^C.ns(D.e8[b1>>>16&255],16)^C.ns(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.ns(D.e8[b1>>>8&255],24)^C.ns(D.e8[a8>>>16&255],16)^C.ns(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.ns(D.e8[a8>>>8&255],24)^C.ns(D.e8[a9>>>16&255],16)^C.ns(D.e8[b0>>>24&255],8)^b6[w][3]
a7=D.oc[n&255]
b0=D.oc[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oc[l>>>8&255]
a9=D.oc[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oc[b1>>>8&255]
h=D.oc[n>>>16&255]
g=D.oc[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oc[l>>>24&255]
s=s[3]
a1=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bJV(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.qb[8]
t=D.e7[a5>>>16&255]
s=$.qb[16]
r=D.e7[a4>>>24&255]
q=$.qb[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.ns(D.e7[b0>>>8&255],24)^C.ns(D.e7[a5>>>16&255],16)^C.ns(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.ns(D.e7[a6>>>8&255],24)^C.ns(D.e7[b0>>>16&255],16)^C.ns(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.ns(D.e7[a4>>>8&255],24)^C.ns(D.e7[a6>>>16&255],16)^C.ns(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.ns(D.e7[a5>>>8&255],24)^C.ns(D.e7[a4>>>16&255],16)^C.ns(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yQ[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yQ[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yQ[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yQ[o>>>8&255]
i=D.yQ[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yQ[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o3(A.aH.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNG.prototype={}
C.bNH.prototype={
gM(d){var w=this.a.length
return w},
aoB(){return B.rf(this.a,A.i_,null,null)}}
C.b9N.prototype={
uX(d){return C.hQm(d)}}
C.cqK.prototype={
MB(d){var w=d.w,v=Math.max(1,A.k.dk(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9V(v,t+20,u+16,t,u,B.tZ(d.x))},
no(d){return!1}}
C.bOz.prototype={
cEr(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bA(new C.bOA(),x.E))},
mJ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mJ)
case 6:w=5
return B.b(p.fwJ(f,r),$async$mJ)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mJ,v)}}
C.avv.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8g.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a8g&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wQ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fI4)return"["+(w+B.e5(this.a))+"]"
return"[ObjectKey "+(w+B.e5(this.a))+"]"}}
C.aVu.prototype={
c1(d){var w=new C.aAm(!0,this.e,null,new B.dh(),B.cj())
w.c_()
w.scF(null)
return w},
ca(d,e){var w
x.cQ.a(e)
e.syD(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aG6()}}}
C.aAm.prototype={
syD(d,e){return},
gpu(){var w=this.aa$
return w!=null},
gl6(){var w=this.aa$
return w!=null},
Mq(d){var w=d==null?B.h7M(null):d
w.sa4A(this.ak)
return w}}
C.a0G.prototype={
S(){return new C.aIL(B.aX(x.N))},
cRE(d){return this.d.$1(d)},
cPr(){return this.e.$0()}}
C.aIL.prototype={
a_(){this.a1()
this.OZ()},
OZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cPr(),$async$OZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f7d(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OZ,v)},
YL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f7h(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f7i(t))
w=3
return B.b(C.anm(p),$async$YL)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f7j(t,s,p))
w=4
return B.b(t.OZ(),$async$YL)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YL,v)},
a0Y(d){return this.coV(d)},
coV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f7e(t))
s=J.q(d,"id")
w=3
return B.b(C.bZm(J.k(s==null?"":s)),$async$a0Y)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f7f(t))
w=1
break}q=C.h2v(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cRE(B.a([q],x.D)),$async$a0Y)
case 4:if(t.c==null){w=1
break}t.m(new C.f7g(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0Y,v)},
OY(d,e){return this.bKl(0,e)},
bKl(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.f78(q),r,null,!0,!0,x.y),$async$OY)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f79(t))
s=s.h(e,"id")
w=4
return B.b(C.anl(J.k(s==null?"":s)),$async$OY)
case 4:if(t.c==null){w=1
break}t.m(new C.f7a(t))
w=5
return B.b(t.OZ(),$async$OY)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OY,v)},
cDt(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.im[B.bH(v)-1]+" "+B.bR(v)},
aQo(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Oo,A.n),w,e,w,w,w,w,w,e)},
aQn(d){return this.aQo(d,44)},
b6K(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Oo:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J_,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J_,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bya,u,u,u)],p))}return B.E(B.aC(A.c7,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hz,u,u,u,A.tO,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f7n(this,d),u,u,u,u,u,u,!1,A.a7),1)},
ciG(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d_.j(0.14):D.XL,n=B.n(18),m=p?A.d_:A.dm
m=B.I(m,A.q,p?1.8:1)
w=this.aQn(A.q7)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aRp,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRr,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Oo:q
u=p?q:B.I(A.b_,A.q,1.6)
r=p?D.bOJ:q
return B.aC(q,B.df(q,B.B(B.a([w,A.be,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a5),A.fB,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fB,q,q,A.da,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f7c(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cqu(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cDt(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dm,A.q,1)
v=r.aQn(A.NB)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aRp,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRr,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b3l(A.hC,A.bv,"Bring it back",r.r?q:new C.f7k(r,d))
return B.p(q,B.B(B.a([v,A.be,t,p,A.bp,r.b3l(A.e6,A.c9,"Delete",r.r?q:new C.f7l(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XL,q,w,o,q,q,A.n),q,q,q,A.da,D.bsG,q,q,q)},
b3l(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hw(B.aC(w,B.p(w,B.X(d,v?A.b_:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asx(d,e,f){var w=null
return new B.D(D.brL,B.x(B.a([B.X(d,A.b_,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.feF,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.f78,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b_,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQo(A.yC,46),A.be,D.bz2],t)
if(j.r)s.push(D.ecp)
s.push(B.aH(i,i,i,i,A.rp,i,i,i,new C.f7q(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dm,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bve,s,i),B.p(i,B.B(B.a([j.b6K(0,A.yd,"Save",j.a.c.length),j.b6K(1,A.NP,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bui,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c9:A.bv).j(0.12)
s=B.n(14)
r=B.I((j.y?A.c9:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.NC:A.eg
n=B.X(n,p?A.c9:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a8_,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bue,A.ik,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.faI,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aC(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fdM,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f7r(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asx(A.q7,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.ciG(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ebY)
else if(j.e==null)s.push(j.asx(A.alo,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asx(A.oS,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cqu(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.co,B.cw(u,i,X.ais,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc3I()
p=s?i:D.Oo
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yd,m?A.ji:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.buR,B.aC(i,B.df(i,B.B(B.a([k,A.a7q,new B.dq(1,A.co,B.f7(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.ji:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.ei),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hz,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b0W,i,i,i,i,i,i,i,i)}}
C.ok.prototype={
ah(){return B.F(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a7().ac()],x.N,x.z)}}
C.Yq.prototype={
S(){return new C.axl(B.a([],x.k),B.f9(null,x.H))},
ge1(){return this.c}}
C.axl.prototype={
a_(){this.a1()
this.P6()},
P6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1F(t.a.c),$async$P6)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cGb(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
cwJ(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qj(t.d,new C.cGe(d))
v=w<0
if(v&&C.hNu(d))return t.f
u=t.d
if(v)J.pB(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fU6(new C.cGf(t),v)
return t.f=t.f.bA(new C.cGg(t,d),v).eR(new C.cGh())},
Ix(d,e,f){return this.ccj(0,e,f)},
aY9(d,e){return this.Ix(0,e,!1)},
ccj(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ix=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cm(B.e9(new C.cGa(t,e),!1,null,x.H)),$async$Ix)
case 3:w=4
return B.b(t.f,$async$Ix)
case 4:w=5
return B.b(t.P6(),$async$Ix)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
aXq(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dy1:d
this.Ix(0,new C.ok(w,v,new B.S(Date.now(),0,!1)),!0)},
c3c(){return this.aXq(null)},
ad9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ad9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cGi(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ad9)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXq(s)
case 1:return B.h(u,v)}})
return B.i($async$ad9,v)},
Iw(d,e){return this.bKd(0,e)},
bKd(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cG5(e),s,null,!0,!0,x.y),$async$Iw)
case 3:if(g!==!0){w=1
break}t.m(new C.cG6(t,e))
w=4
return B.b(t.f,$async$Iw)
case 4:w=5
return B.b(C.ag9(t.a.c,e.a),$async$Iw)
case 5:w=6
return B.b(t.P6(),$async$Iw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Iw,v)},
Da(d){return this.bCk(d)},
bCk(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cG1(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Da)
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
return B.b(t.aY9(0,d),$async$Da)
case 9:w=5
break
case 7:w=10
return B.b(F.h32(r,d.b,null),$async$Da)
case 10:w=5
break
case 8:w=11
return B.b(t.Iw(0,d),$async$Da)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
bXR(){var w,v,u=null,t=[D.dy4,D.dy2,D.dy3],s=new C.cG8(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.y(D.dhz[w],u,A.os,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.o3,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fDx,A.O,B.bW(A.bB,n,A.br,6,6),A.aR,B.aC(u,B.p(u,D.eQz,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.aiQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cG7(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bX_,A.n),u,u,u,u,D.bvo,u,u,u)},
bCi(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.W,v,A.b1,A.r,B.a([B.f7(A.A,F.anU(d.b),A.f,A.bV),D.ehW,B.ao(v,B.aC(v,B.p(v,D.bPw,A.f,v,v,D.b1S,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFX(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f4u,v,v,v)
w=u===1?"":"s"
return B.aC(v,B.x(B.a([new B.fK(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.faU,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFY(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFZ(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.D(I.ahk,B.hw(B.aC(s,B.p(s,A.ao3,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.w6,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc4t(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n5,s,s,s,!0,s,s,s,s,s,D.fDB,s,s,s,1,s,!0)
if(t.e)r=D.b5g
else{w=t.bXR()
v=B.a([D.fpc,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f3W,s,s,s),A.f,s,s,new B.o(D.ba_,s,s,u,s,s,A.n),s,s,s,s,A.xW,s,s,s))}r=B.a([new B.nR(A5.Z4,new B.ma(w,s),s),new B.nR(D.buL,new B.ma(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eX4)
else r.push(new B.nR(D.bug,B.OL(new B.oq(new C.cGj(t),J.ad(t.d),!0,!0,!0,0,B.rZ(),s),D.b4y),s))
r=B.vy(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c7(q,D.b8P,r,s,!1,!1,s,s)}}
C.Yo.prototype={
S(){return new C.axh(B.a([],x.bx))},
TN(d){return this.d.$1(d)}}
C.aED.prototype={}
C.axh.prototype={
b08(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aO),w),u=this.gaY8()
v.aQ(0,u)
w=new B.as(new B.bb(e,A.b5,A.aO),w)
w.aQ(0,u)
return new C.aED(v,w,f)},
E0(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a6(0)
v.x=B.cM(A.pW,new C.cFq(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aO),v)
t=m.gaY8()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aO),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aO),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aO),v)
o.aQ(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aO),v)
n.aQ(0,t)
r.push(new C.aED(o,n,p.c))}if(r.length===0)r.push(m.b08("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a6(0)
if(r.y){r.a.c.b=r.gp9()
q=r.a
q.TN(q.c)}q=r.d
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
gp9(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.K)(s),++q){p=s[q]
t.push(new F.mt(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rk(n,w,v,t,u)},
AJ(){var w=0,v=B.j(x.H),u=this,t
var $async$AJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a6(0)
u.y=!1
u.a.c.b=u.gp9()
t=u.a
w=2
return B.b(t.TN(t.c),$async$AJ)
case 2:return B.h(null,v)}})
return B.i($async$AJ,v)},
c4r(){this.m(new C.cFp(this))
this.E0()},
aX7(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cFs(w,d,v))
w.E0()},
c4s(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cFA())
this.E0()
$.aW.x1$.push(new C.cFB(w))},
Qh(d){return this.ciw(d)},
ciw(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(80,1400,A.eJ),$async$Qh)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$Qh)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahG(o,".png")?"image/png":"image/jpeg"
r.m(new C.cFt(d,n,p))
r.E0()
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
return B.i($async$Qh,v)},
xG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hq_(r,t.gp9()),$async$xG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cFr(t,s))
t.E0()
case 1:return B.h(u,v)}})
return B.i($async$xG,v)},
ciO(d){var w,v=this,u=null,t=F.fAO(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hl(D.bIP,D.frG,new C.cFv(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.n(12),B.fP(t,A.A,u,u,A.ci,A.bV,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3m(A.kw,new C.cFw(v,d)),A.bp,v.b3m(A.cD,new C.cFx(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3m(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hA,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ah)},
Iy(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AJ(),$async$Iy)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h32(s,t.gp9(),new C.cFz(t)),$async$Iy)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.D(A.pX,B.hl(D.bNu,D.fxG,n.gawe(),B.fy(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.ao2,m,m,m,new C.cFC(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WV,m,1,m,m,m,!1,m,!1,E.n5,m,m,m,!0,m,m,m,m,m,D.fsx,m,m,m,1,m,!0),j=Av.aUb(O.li,A.c,Ae.VP,A.o8,D.ftg,n.gc4q()),i=B.n(18),h=n.gawd(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.ju,12)],x.V)
g=B.aC(m,B.p(m,new B.a7(92,142.1818181818182,B.f7(A.A,F.anU(n.gp9()),A.f,A.dv),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fF8,A.au,B.d(F.h1y(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fgn,m,m,m),A.R,B.dn(E.anl,E.aSc,h,B.bn(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WV,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.op,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aR],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.li.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bMd,m,m,m,v===0?m:new C.cFD(n,v),m,m,m,m,"Move up",A.ce)
r=i.length
q=B.aH(m,m,m,m,D.bSu,m,m,m,v===r-1?m:new C.cFE(n,v),m,m,m,m,"Move down",A.ce)
r=r===1?m:new C.cFF(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.x(B.a([new B.cl(A.aP,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fgV,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oM,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ce)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dh),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.ciO(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dh),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n5,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a8g(h),A.e5,D.bsV,m,m,m))}return B.on(!0,B.c7(k,E.afx,B.cw(g,m,D.btm,m,m,A.ag,!1),m,!1,!1,j,m),new C.cFG(n),x.C)}}
C.axj.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c9:E.n5,q=B.n(16),p=B.n(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.d5.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eI,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(u.e,t,t,t,t,t,t,D.aQL,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aq2.prototype={
S(){return new C.aDp()}}
C.aDp.prototype={
a_(){this.a1()
this.Zp()},
bv(d){this.bG(d)
if(d.c!=this.a.c)this.a0N()},
a0N(){var w=0,v=B.j(x.H),u=this,t
var $async$a0N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dS(t,x.H),$async$a0N)
case 2:u.d=null
if(u.c!=null)u.m(new C.eau(u))
w=3
return B.b(u.Zp(),$async$a0N)
case 3:return B.h(null,v)}})
return B.i($async$a0N,v)},
Zp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d0(n,"http://")||J.d0(n,"https://")||J.d0(n,"data:")){o=B.Y2(B.cE(n,0,null),new B.P7(!0))
r.d=o}else{o=B.fn("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ii(0).d7(0,A.pS),$async$Zp)
case 7:if(r.c==null){w=1
break}r.d.ti(!1)
r.m(new C.eas(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.eat(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zp,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c7b(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.ha(0)
w.m(new C.eav(w))}else{v.pT(0)
w.m(new C.eaw(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jf.j(0.92),D.KT.j(0.95)],x.O)
w=B.I(A.c0.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.qa,A.c0,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.N,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.az,A.aC,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.av(B.X(A.amD,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b65
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.f7(A.A,new B.a7(r,q,new B.A9(s,o),o),A.r,A.bV)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iJ,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aC(o,B.bw(n,new B.an(A.W,o,A.b1,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7a(),o,o,o,o,o,o,!1,A.a7)}}
C.xx.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.ad7.prototype={
B(d){return B.oT(new C.dYr(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acw.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jf.j(t?0.35:0.4),A.q,1),p=t?D.Lt:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.n(10),l=B.I(A.c0.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i4Q(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajj,u,u,u,u),1)
m=D.jf.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jf,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bga,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ahB,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xA.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nH.prototype={}
C.biR.prototype={
Zy(d){var w=null
return new B.bI(A.a3,w,w,B.Bf(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c7D(){return this.Zy(1)},
awS(d){var w=null,v=B.n(8),u=B.I(A.i1,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adu,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i1,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dW(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i1,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awS("TAARIFA ZA WANANDOA"),A.am,w.c7D(),A.cU,w.Zy(0.9),A.cU,w.Zy(0.7),A.O,w.awS("TAMKO LA MAKUBALIANO"),A.fQ,w.Zy(1),A.cU,w.Zy(0.95),A.O,w.awS("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ada.prototype={
B(d){return B.oT(new C.efJ(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeR.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ax.j(q?0.35:0.4),A.q,1),m=q?D.bfM:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.n(10),i=B.I(A.ax.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h23(w.a)
if(v==null)v=A.d.gI(D.QV)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.W,r,A.b1,A.r,B.a([B.bZ(0,B.fP(C.h22(v.d),A.A,r,r,A.ci,A.bV,!0,r,!1,r,r),0,0,0),new B.D(A.aij,new C.biR(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajj,r,r,r,r),1)
j=A.ax.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lu,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b9j,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ahB,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kU.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7K.prototype={}
C.VA.prototype={
S(){var w=$.aw()
return new C.aDI(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mB(0,null,null),A.d.gI(D.a2Z),D.dIm,B.a([],x.L),B.a([],x.gE))}}
C.aDI.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zv(C.fEH(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fDD().bA(new C.ej0(v),w)
$.qU().jG(0,"assets/images/ngmy_logo.png").bA(new C.ej1(v),w).eR(new C.ej2())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
ah3(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(88,1600,A.eJ),$async$IR)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$IR)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hqg(m,p),$async$IR)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCQ(new B.pQ(o,1),m),$async$IR)
case 10:if(r.c!=null)r.m(new C.eiD(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ah3("Could not open that picture. "+B.u(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IR,v)},
WB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hqg(s,q),$async$WB)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCQ(new B.pQ(r,1),s),$async$WB)
case 4:if(t.c!=null)t.m(new C.eiz(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WB,v)},
adZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eiK(q))
t=4
q.a.toString
p=C.i9h()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adZ)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eiL(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ah3(B.u(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adZ,v)},
ZD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eiF(q,i))
t=4
q.a.toString
p=C.i9g()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZD)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eiG(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eiH(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiI(q))
$.aW.x1$.push(new C.eiJ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZD,v)},
c7T(d){this.m(new C.eiE(this,d))},
Eh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eiB(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Eh)
case 7:w=8
return B.b(B.bN(A.nc,null,x.H),$async$Eh)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q_))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m1(1800/p.gY(0).a),$async$Eh)
case 9:o=e
w=10
return B.b(o.hv(A.h0),$async$Eh)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.agc(J.eU(A.dD.gaP(n)),"ngmy_news.png","image/png"),$async$Eh)
case 11:m=e
q.ah3(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ah3(B.u(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiC(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eh,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l2,a2,a2,a2,new C.eiS(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bO_,a2,a2,a2,new C.eiT(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.p0,a2,a2,a2,a4?a1.gaZl():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.AY,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eQJ,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.f7(A.A,new B.ex(new C.b0s(t,s,r,a1.x,a2),a1.d),A.f,A.dv),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.wz,a2,a2,a2)
t=a1.as?a2:a1.gc7S()
t=B.a([B.E(B.dn(D.bOK,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.tu,a2,a2,a2,A.c,A.fP,a2,a2,new B.b7(B.n(14),P.v5),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fP(r,A.A,a2,a2,A.ci,A.bV,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aH(a2,a2,a2,a2,D.bLw,a2,a2,a2,a1.as?a2:a1.gbIP(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.wz,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aSf("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dbY[o]
p.push(B.mJ(a2,D.tu,new B.y(n.a,a2,A.pi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hG,new C.eiU(a1,n),a2,a2,P.v5,a2))}p=B.bW(A.bB,p,A.br,6,8)
m=a1.Q
m=B.bW(A.bB,B.a([D.fDK,A.be,B.j9(a2,a2,a2,D.fnY,a2,new C.eiV(a1),m==="en",a2,a2,a2,a2),A.ab,B.j9(a2,a2,a2,D.fnT,a2,new C.eiW(a1),m==="sw",a2,a2,a2,a2)],w),A.t3,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.wz,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.db(D.a2Z,0,B.dI(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQJ(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aP,!1)
i=B.a([],w)
for(j=B.db(D.a2Z,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQJ(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aP,!1)
i=a1.as?a2:a1.gc7V()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cw,s,a2),t,A.aB,new B.D(A.cw,r,a2),q,A.O,p,A.R,m,A.aB,new B.D(A.cw,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aR,B.aC(a2,B.p(A.A,B.B(B.a([D.bOE,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fR,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uf,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dsU,A.at,D.bzm],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tu
p=new B.aT(16,16)
d=new B.ay(A.bE,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fer,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.VD,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.ik,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cZa[o]
t.push(B.mJ(a2,D.tu,new B.y(a0,a2,A.Jd,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hG,new C.eiX(a1,a0),a2,a2,P.v5,a2))}u.push(B.bW(A.bB,t,A.br,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aSf("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eiY(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc7U()
u.push(B.B(B.a([t,A.ab,B.HF(A.yH,s,B.nB(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZl()
u.push(B.dn(A.p0,D.fzg,t,B.bn(A.cR,a2,a2,a2,a2,A.IY,a2,a2,new B.b7(B.n(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ai5,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jX.j(0.5),A.q,1)
v.push(B.bZ(0,B.en(B.av(B.p(a2,B.B(B.a([E.a7r,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iP,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.AQ,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bvG,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.AY,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aSf(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.Y),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tu,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.J8,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQJ(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bD:A.bE
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kW,t,t,t,t),A.fQ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.brY,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jn,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aC(t,B.p(t,B.x(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.ij,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eiA(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zv.prototype={
bbH(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zv(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cHW(d){var w=null
return this.bbH(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ccA(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fH(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ccy(),B.T(w).k("M<1,m>")).c0(0,new C.ccz())
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
return this.bbH(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFt(d){return this.f}}
C.tl.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bt.prototype={
a5(){return"NewsFrame."+this.b}}
C.lg.prototype={}
C.b0s.prototype={
rl(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZn(d,e,f,g){return this.rl(d,e,null,1.25,f,A.bo,g)},
PD(d,e,f,g,h){return this.rl(d,e,f,1.25,g,A.bo,h)},
awY(d,e,f,g,h){return this.rl(d,e,null,f,g,A.bo,h)},
awX(d,e,f,g,h){return this.rl(d,e,f,g,0,A.bo,h)},
aZp(d,e,f,g,h){return this.rl(d,e,null,f,0,g,h)},
c7Z(d,e,f,g,h,i){return this.rl(d,e,f,g,0,h,i)},
awW(d,e,f,g){return this.rl(d,e,null,f,0,A.bo,g)},
ae1(d,e,f){return this.rl(d,e,null,f,0,A.bo,A.cN)},
aZo(d,e,f,g,h){return this.rl(d,e,f,g,0,h,A.cN)},
c7Y(d,e,f,g){return this.rl(d,e,null,f,0,g,A.cN)},
c7X(d,e,f,g){return this.rl(d,e,f,g,0,A.bo,A.cN)},
ae2(d,e,f,g,h,i){return this.rl(d,e,f,g,h,A.bo,i)},
aZm(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kk(new B.es(d,u,u,A.cO,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c6,new B.jv(1),u,u,h,u,A.c5,u)
v.wD(g)
if(!v.b.a.c.gaE_())return w
w-=2}return j},
ae_(d,e,f,g,h,i,j,k){return this.aZm(d,e,f,g,h,i,j,k,A.bo)},
az5(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
az4(d){return this.az5(null,!1,d)},
agS(d,e){return this.az5(null,d,e)},
cpD(d,e){return this.az5(d,!1,e)},
gb0w(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUT(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Ou(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ae_(w.gaUT(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaUT(),v,g,A.a2,v,v,v,w.awX(u,t,f,1.02,A.P),e,v,v)},
aUY(d){return this.Ou(d,A.L,null,2,78,30)},
abp(d,e,f,g,h){return this.Ou(d,e,null,f,g,h)},
bXJ(d,e,f,g,h){return this.Ou(d,A.L,e,f,g,h)},
bXI(d,e,f){return this.Ou(d,A.L,null,e,f,30)},
Rz(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jH,B.d(s,u,g,A.a2,u,u,u,v.aZo(w,v.aZm(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b6p(d){return this.Rz(d,A.L,null,3,24)},
aAB(d,e,f,g){return this.Rz(d,e,null,f,g)},
cxc(d,e,f){return this.Rz(d,A.L,e,3,f)},
b6q(d,e){return this.Rz(d,e,null,3,24)},
cxa(d,e){return this.Rz(d,A.L,null,3,e)},
cxb(d,e,f){return this.Rz(d,e,null,3,f)},
aqy(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fY,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PD("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nr(){return this.aqy(null,!0)},
aqx(d){return this.aqy(null,d)},
bEH(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i3,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7Y(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vt(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb0w(),h=A.o.an(j.bC(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hXP(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZn(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ae_(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ae_(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eF,l,l,l,m.ae2(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bC5(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hE,A.j,0,l,l),A.am,m.agS(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eF,l,l,l,m.awW(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bC5(j),l,l,l,l,l,l,m.PD(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hE,A.j,0,l,l),A.O,m.cpD(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0w()
v=B.d("NGMY",l,l,l,l,l,l,m.awY(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eJ(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rl(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ae2(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dN,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hE,A.j,0,l,l)
t=m.agS(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awW(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agS(!0,1.4),A.au,B.d(C.bC5(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.az4(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awY(v,u,1,3,A.P),A.L,l,l),A.O,m.agS(!0,1.2),A.au,B.B(B.a([B.d(C.bC5(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hE,A.j,0,l,l),A.au,m.az4(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acx(d){return this.vt(d,!1)},
ae0(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ae2("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c7W(d,e){return this.ae0(d,null,e,null)},
aX_(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.awX("Roboto",15,t,1,A.cx),r=B.X(E.akL,t,w,w,w,18),q=A.a.ap(A.p4[B.bH(v)-1],0,3),p=A.a.aV(A.o.u(B.h2(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fM,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avH(){return this.aX_(A.mz)},
b3A(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ae2("Roboto",this.ae_(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
az8(d,e,f){return this.b3A(d,e,f,30)},
aAE(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vu,B.d(v,w,e,A.a2,w,w,w,this.c7X("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6u(d){return this.aAE(d,3,22)},
cxn(d,e){return this.aAE(d,e,22)},
tB(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fP(r,A.A,s,s,A.ci,A.bV,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dm(D.byr,w,s)
if(v==="sepia")w=new B.Dm(D.byq,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.y8,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.WR.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.W,s,A.b1,A.r,v,s),s)},
qo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tB(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lS,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e8t,14)],x.V)
v=l.tB(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eJ(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aZo(j.as,13.5,D.baR,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.be8,k,k,k,w,k,A.n),k,e,k,k,D.bth,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.tB(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hX(l.tB(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lS,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e8j,10)],x.V)
return B.eJ(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tB(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rc,k,k,k),0,0,0),B.ao(k,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nw(l.tB(d,e),A.aq,D.h1L),new C.bc0(j,k),k,k,A.aw),k)
case 7:j=x.p
w=B.a([l.tB(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bn(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bN,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cl(A.aP,A.qf,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b1,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bxH,k,k,d)
case 8:w=d/2
v=B.wY(A.hf,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wY(A.hF,new B.aT(w,w)),l.tB(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fO,22)],x.V)
return B.p(k,l.tB(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a7(d,e,B.nw(l.tB(d,e),A.aq,D.h86),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tB(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aOg(d,e){return this.d.e===D.Ry?A.bI:this.bEH(d,e)},
W9(d){return this.aOg(d,A.L)},
gazV(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azU(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZp(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PD("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ae1(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jA(B.x(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gcg3(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a96(d,e,f,g){return B.cq(new C.ccB(this,e,d,f,g))},
a95(d){return this.a96(d,22,!0,18)},
Wk(d,e){return this.a96(d,22,!0,e)},
aPi(d,e,f){return this.a96(d,22,e,f)},
bGJ(d,e,f){return this.a96(d,e,!0,f)},
b9p(d,e,f,g){return B.cq(new C.ccC(this,e,d,g,!0,f))},
ceS(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.acx(824),A.aB,k.aUY(824),k.b6p(824),A.O,k.Nr(),A.ac,B.av(k.qo(824,360),j,j,j),k.W9(824),A.ac,B.E(k.a95(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.acx(824),A.aR,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.abp(440,A.bi,3,62,26),k.aAB(440,A.bi,2,20),A.b7,k.aqy(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.IZ,B.x(B.a([k.qo(362,310),k.W9(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.az4(2),A.ac,B.E(k.a95(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vt(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bXJ(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cxc(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bj,j,j,j)
u=B.a([B.av(k.qo(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Ry){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awX(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lQ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Nr(),A.R,B.E(k.Wk(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vt(824,!0)
w=k.qo(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Ou(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.bvZ,j,j,j),j,j,0,0,j,j)],u),j),k.b6q(824,A.bi),A.O,k.Nr(),A.R,B.E(k.a95(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.acx(824),A.aB,k.aUY(824),k.b6p(824),A.O,k.Nr(),A.ac,B.E(k.b9p(3,300,B.x(B.a([k.qo(300,300),k.W9(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vt(824,!0)
v=x.p
u=B.x(B.a([k.abp(440,A.bi,3,62,26),k.aAB(440,A.bi,2,20),A.b7,k.aqx(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aOL,new B.D(A.i3,k.qo(364,h.e===D.Ry?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wk(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.acx(824),A.ac,k.bXI(824,2,70),k.cxa(824,21),A.O,k.Nr(),A.ac,B.E(k.b9p(3,340,B.av(k.qo(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vt(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bC5(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PD(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZp(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b7)
if(k.gazV())v.push(k.azU(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahz,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.abp(570,A.bi,3,62,28),k.cxb(570,A.bi,20),A.O,k.aqx(!1),A.O,B.av(k.qo(570,330),j,j,j),k.W9(570),A.R,B.E(k.aPi(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vt(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PD(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ac,B.p(j,B.x(B.a([t,A.am,k.Ou(788,A.bi,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.buj,j,j,j),k.b6q(824,A.bi),A.R,B.av(k.qo(824,310),j,j,j),k.W9(824),A.O,k.Nr(),A.R,B.E(k.a95(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vt(824,!0),A.aR,new B.an(A.W,j,A.aa,A.r,B.a([k.qo(824,430),B.ao(18,k.c7W(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.az8(824,3,66),k.b6u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avH(),A.aB,B.E(k.Wk(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vt(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.ae0(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b3A(410,4,58,28),k.aAE(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aOM,k.qo(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avH(),A.aR,B.E(k.Wk(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vt(824,!0)
v=k.qo(824,420)
u=B.hAy(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fv(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7Z(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bwe,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.az8(824,3,62),k.b6u(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aX_(A.lq),A.aB,B.E(k.Wk(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vt(824,!0)
u=h.w
t=x.p
w=B.a([k.qo(824,380),B.ao(j,k.ae0(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.az8(824,2,60)
r=k.cxn(824,2)
p=k.avH()
o=B.E(k.aPi(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.W,j,A.aa,A.r,w,j),A.aR,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.tB(150,104),A.aq),A.ol,B.E(B.x(B.a([k.ae0("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.awW(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.N,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vt(824,!0),A.by,k.abp(824,A.bi,3,62,30),k.aAB(824,A.bi,2,22),A.R,k.aqx(!1),A.R,B.av(k.qo(824,330),j,j,j),k.aOg(824,A.bi),A.aR,B.E(k.bGJ(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.az,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8w(B.b0(q.w),s),A.aw),0,0,0))
w=q.w
n.push(new B.D(D.bwL,B.x(B.a([B.E(t.ceS(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fQ,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZn(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PD(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hE,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e_(B.b3(s,s,s,new C.br7(v.j(q.ch?0.07:0.06),s),A.aw),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hX(B.fP(q,A.A,s,s,A.ci,A.bV,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mz,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awY(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e_(B.de(B.p(s,B.B(o,A.m,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bxP,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jA(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bc1.prototype={
jd(d){return C.hfA(d)},
jR(d){return!1}}
C.bc0.prototype={
a4(d,e){var w,v=C.hfA(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aR(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.btE.prototype={
jd(d){var w,v,u,t,s,r,q,p,o=new B.eE()
o.dt(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bB(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bB(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jR(d){return!1}}
C.b8w.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eE()
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.KU.j(0.13),A.K],v),l,l).av(0,B.bU(new B.v(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.br7.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.h3(u,u,u,u,B.d3(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c6,u,A.dP,A.c5)
s.em()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.ja(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.v(-v/2,-t.gbd(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.VD.prototype={
S(){return new C.aDM()}}
C.aDM.prototype={
a_(){var w=this
w.a1()
B.h0T(w.a.c,null).bA(new C.ekb(),x.g7).bA(new C.ekc(w),x.a)
w.a.toString},
gaN4(){var w=D.avk[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawZ(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaN4()
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
ZF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ejZ(r))
t=4
q=r.gawZ()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.r0()
m=B.Dk(n,null)
i=B.N()
i.Q=A.fZ
m.qz(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pE().zj(J.h53(p),J.h53(o)),$async$ZF)
case 7:l=e
w=8
return B.b(l.hv(A.h0),$async$ZF)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eU(J.vp(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ek_(r))
r.c.K(x.q).f.U(D.eZF)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZF,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l2,s,s,s,new C.ek5(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fBN,s,s,!0,s,s,t.y||r==null?s:t.gc8_(),s,s)],p),s,s,!0,!0,A.AY,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fFK,s,s,s,1,s,!0)
if(r==null)p=A.lH
else{w=B.E(new B.D(A.bQ,B.av(new B.fK(t.gaN4(),B.cq(new C.ek6(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.ij,B.j9(s,s,s,new B.y(D.avk[u].a,s,E.aQz,s,s,s,s,s,s,s,s,s),s,new C.ek7(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aP,!1),s),B.B(B.a([D.bPn,B.E(B.l0(s,s,s,6,1,new C.ek8(t),t.f),1),D.bP_],p),A.m,s,A.e,A.j,0,s,s),D.fza,A.am,B.bK(!1,D.fyU,s,s,!0,s,s,new C.ek9(t,d),s,s)],p),A.m,s,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,D.X4,s,s,s,s,s,s,D.btF,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c7(q,A.AY,p,s,!1,!1,s,s)}}
C.bby.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.ci
return d.qz(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_H.prototype={
S(){var w=$.aw(),v=x.A
return new C.aF8(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aO),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a3A),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oy.prototype={}
C.aF8.prototype={
gaV5(){var w,v,u=this
if(u.p1)w=new B.vH(1,u.p2,0.9,u.p3).iG().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eTM(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Yi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qU().jG(0,"assets/images/ngmy_logo.png"),$async$Yi)
case 7:q=e
p=J.eU(J.vp(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCQ(new B.pQ(p,1),o),$async$Yi)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eSE(r,p))
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
return B.i($async$Yi,v)},
PG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(92,1800,A.eJ),$async$PG)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$PG)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCQ(new B.pQ(p,1),n),$async$PG)
case 9:if(r.c==null){w=1
break}r.m(new C.eT1(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PG,v)},
b2X(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aD=w.aM=w.aF=w.aA=w.Z=w.b8=w.bk=w.y2=0
w.b3=null
w.b0=0.25
w.bb=null
w.bK=0.5
w.aI=1
w.c5=w.bF=w.bh=0
w.cI=w.c6=!1},
aWK(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzx(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.deN)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzx(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzx(C.h_X(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzx(C.h_X(1-a0*0.5,n,n,n),w)}return a1?C.bzx(C.h_X(-1,255,255,255),w):w},
aAK(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zc(u,v,w)
this.dx.pa(new C.eTb(t),!0)
return t},
b5t(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAK()
w=C.i6Z(e.d.a.a,e.db)
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
return C.i3t(d,k,v,a0,j,e.gaV5(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cv7(){return this.b5t(null)},
D9(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$D9)
case 3:w=4
return B.b(B.bN(A.eM,null,x.H),$async$D9)
case 4:w=5
return B.b($.aW.gmF(),$async$D9)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q_)){u=null
w=1
break}w=7
return B.b(r.m1(1080/r.gY(0).a),$async$D9)
case 7:w=6
return B.b(e.hv(A.h0),$async$D9)
case 6:q=e
u=q==null?null:J.eU(A.dD.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D9,v)},
a9Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eSn(q))
t=4
w=7
return B.b(q.D9(),$async$a9Y)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cV.gcB().aK(p)
n=C.BG(null,null,null,null,D.of,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5t(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eSo(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9Y,v)},
Ar(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ar=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eSl(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Ar)
case 7:w=8
return B.b(B.bN(A.o0,null,x.H),$async$Ar)
case 8:w=9
return B.b($.aW.gmF(),$async$Ar)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q_))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m1(1080/p.gY(0).a),$async$Ar)
case 10:o=e
w=11
return B.b(o.hv(A.h0),$async$Ar)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.agc(J.eU(A.dD.gaP(n)),"ngmy_quote.png","image/png"),$async$Ar)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.U(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eSm(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ar,v)},
chY(){var w=this.p4
w.toString
return B.cq(new C.eSV(this,w))},
aZw(d,e){var w=null
return B.bs(w,w,w,w,w,D.f9_,w,w,!0,new B.b4(4,B.n(16),P.v5),w,w,w,w,w,D.tu,!0,w,w,w,w,new B.b4(4,B.n(16),D.aZA),w,w,w,w,w,w,w,w,A1.DA,e,w,w,w,w,w,w,w,D.fei,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xO(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aRm,w,w,w))
return new B.D(H.ahp,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZv(d,e){var w=null,v=B.n(18),u=B.I(A.bE,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jL),A.f,w,w,new B.o(D.tu,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vA(d){return this.aZv(d,A.bA)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uf:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bE,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.ji,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.ji,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aC(r,B.df(r,B.B(s,A.m,r,A.e,A.N,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hz,r,r,r,A.Fr,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afR(d,e,f){return this.oa(d,null,e,f)},
ax2(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eC:A.bE,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hz,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aC(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZz(d,e,f,g,h,i){return this.ax2(d,e,f,g,h,5,i)},
km(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f6_,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aC(u,D.ec1,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eT7(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQr,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Zw,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auV(w).cJj(A.b6,A.bE,A.b6.j(0.2),A.c,D.eQ0,4)
return new B.D(A.xG,B.x(B.a([s,B.a9R(B.l0(u,u,u,g,f,new C.eT8(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahS(d,e,f,g,h,i){return this.km(d,e,f,g,h,null,i)},
aii(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dm:B.b0(u)
r=d==u
q=r?A.c:A.b_
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bIr:o
n.push(B.aC(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eTa(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bW(A.bB,n,A.br,10,10)},
bKT(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3A
else{v=x.a8
w=B.C(new B.a_(D.a3A,new C.eSd(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZw("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eSe(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8q,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZw("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eSf(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dp,!0,A.a4,n,A.an,n,n,n,n)
t=o.xO("DESIGNS",A.u1)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cQK[q]
r.push(new B.D(A.ij,o.afR(p,o.x===p,new C.eSg(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.c8(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aP),A.ac,new B.a7(n,118,B.hM(n,new C.eSh(o,w),w.length,n,n,A.aP,new C.eSi(),!1),n),A.O,o.aZv(B.x(B.a([B.iH(A.b6,n,n,A.af,!0,new C.eSj(o),n,D.fqj,n,D.fmE,o.k3),B.iH(A.b6,n,n,A.af,!0,new C.eSk(o),n,n,n,D.fjU,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ai4)],s),A.F,n,A.e,A.j,0,A.p)},
cDJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAK()
if(a7.length===0)return a5.vA(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jm,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("co.E"))
A.d.fq(m)
l=m.length!==0&&A.d.d6(m,new C.eTB(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eTI(a5)
j=new C.eTK()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jm,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eC:A.bE
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a6
o.push(B.aC(a6,B.p(a6,new B.y(e,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.MM,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eTC(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vA(B.bW(A.bB,o,A.t3,6,6))
i=B.a([a5.oa("All words",L.amk,!1,new C.eTD(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afR("Sentence "+a3,!1,new C.eTE(a5,a7,v,a2)))
a2=a3}}i.push(a5.afR("Clear picks",!1,new C.eTF(a5)))
i=B.bW(A.bB,i,A.br,8,8)
g=a5.xO("SIZE OF THE PICKED WORDS",D.alO)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dky[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eTG(e,k)
f.push(a5.afR(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bW(A.bB,f,A.br,8,8),A.R,a5.oa("Make every word normal",A.lp,!1,new C.eTH(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cyS(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bz_,B.d(A.d.h7(D.ax2,new C.eTk(q)).b,p,p,p,p,p,p,D.f7t,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eTl(q)),l=q.xO("HIGHLIGHT BEHIND THE WORDS",A.a0p),k=q.p1?-1:q.k4
k=q.aii(k,new C.eTm(q),D.d0f)
w=q.p1
v=w?A.c:A.b_
n=B.a([n,A.R,m,l,B.bW(A.bB,B.a([k,B.aC(p,B.p(p,D.bLq,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f1g,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eTp(q),p,p,p,p,p,p,!1,A.a7)],o),A.t3,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jm,p,p,p)],o)
if(q.gaV5()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahS("Colour",l,0,360,new C.eTq(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahS("Shade",k,0.15,0.9,new C.eTr(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.km("Strength",l,0.15,1,new C.eTs(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vA(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xO("LOOK",A.yv))
m=B.a([q.oa("Bold",K.alM,q.fy,new C.eTt(q)),q.oa("Italic",K.alN,q.go,new C.eTu(q))],o)
for(u=0;u<3;++u){l={}
k=D.cRV[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uf:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bE,1,A.q,-1)
m.push(B.aC(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eTv(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bW(A.bB,m,A.t3,8,8))
n.push(q.xO("COLOUR",A.nl))
n.push(q.aii(q.fx,new C.eTw(q),D.dbr))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jm,p,p,p))
n.push(q.xO("SIZE AND PLACE",A.Gr))
m=q.fr
m=q.km("Text size",m,0.5,1.6,new C.eTn(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vA(B.x(B.a([m,q.km("Up / down",l,0.12,0.5,new C.eTo(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.F,p,A.e,A.j,0,A.p)},
chZ(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bD.j(0.12)],x.O)
return B.aC(p,B.p(p,B.x(B.a([B.p(p,D.bQO,A.f,p,p,D.b1y,p,62,p,p,p,p,p,62),A.aB,D.fnR,A.am,D.fsv],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tu,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.buQ,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZy(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fP(o,A.A,120,p,A.ci,A.bV,!1,p,!1,p,p),p),A.aq),A.be,B.E(B.x(B.a([D.fno,A.O,B.bW(A.bB,B.a([q.oa("Change",A.kw,!1,q.gaZy()),q.oa("Remove",A.e6,!1,new C.eSZ(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d7L[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eT_(q,t)))}u=B.bW(A.bB,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.c0F(o)
break A}if(1===r){s=q.c_E()
break A}if(2===r){s=q.bGI()
break A}if(3===r){s=q.bN3()
break A}s=q.bIQ()
break A}return B.x(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.lp,!1,new C.eT0(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c0F(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bB,B.a([w.oa("Auto enhance",E.a03,!1,new C.eSR(w)),w.oa("Make words easy to read",A.oY,!1,new C.eSS(w))],v),A.br,8,8),A.aB,B.cq(new C.eST(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c_E(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.km("Exposure",n,-1.5,1.5,new C.eSv(o),0,A.k.ab(n,1))
w=o.RG
w=o.km("Brightness",w,-0.5,0.5,new C.eSw(o),0,""+A.k.V(w*100))
v=o.rx
v=o.km("Contrast",v,0.4,2,new C.eSx(o),1,""+A.k.V(v*100))
u=o.xr
u=o.km("Fade",u,0,1,new C.eSy(o),0,""+A.k.V(u*100))
t=o.aF
t=o.km("Spotlight",t,0,1,new C.eSz(o),0,""+A.k.V(t*100))
s=o.Z
s=o.km("Darken",s,0,0.85,new C.eSA(o),0,""+A.k.V(s*100))
r=o.b8
r=o.km("Vignette",r,0,0.9,new C.eSB(o),0,""+A.k.V(r*100))
q=o.aD
q=o.km("Shade behind words",q,0,0.85,new C.eSC(o),0,""+A.k.V(q*100))
p=o.aM
return o.vA(B.x(B.a([n,w,v,u,t,s,r,q,o.km("Shade top & bottom",p,0,0.85,new C.eSD(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bGI(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.km("Colour strength",q,0,2.2,new C.eRR(s),1,""+A.k.V(q*100))
w=s.to
w=s.km("Warmth",w,-1,1,new C.eRS(s),0,""+A.k.V(w*100))
v=s.x1
v=s.km("Tint",v,-1,1,new C.eRT(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vA(B.x(B.a([q,w,v,s.km("Shift colours",u,-180,180,new C.eRU(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bGo,s.y1,new C.eRV(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xO("COLOUR WASH",A.NK)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.avL)
t=B.a([u,v,s.aii(w,new C.eRW(s),q),A.O],t)
if(s.b3!=null){q=s.b0
t.push(s.vA(s.ahS("Wash strength",q,0,0.9,new C.eRX(s),""+A.k.V(q*100))))}return B.x(t,A.F,r,A.e,A.j,0,A.p)},
bN3(){var w,v,u,t,s,r=this,q=r.y2
q=r.km("Blur",q,0,24,new C.eSp(r),0,A.o.u(A.k.V(q)))
w=r.bk
w=r.km("Soft focus",w,0,1,new C.eSq(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vA(B.x(B.a([q,w,r.km("Film grain",v,0,1,new C.eSr(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xO("LIGHT LEAK",I.alI)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.db(D.avL,0,B.dI(8,"count",s),s))
u=B.a([v,w,r.aii(q,new C.eSs(r),t),A.O],u)
if(r.bb!=null){q=r.bK
u.push(r.vA(r.ahS("Leak strength",q,0,1,new C.eSt(r),""+A.k.V(q*100))))}return B.x(u,A.F,null,A.e,A.j,0,A.p)},
bIQ(){var w,v,u,t,s=this,r=s.aI
r=s.km("Zoom",r,1,3,new C.eS0(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.km("Left / right",w,-1,1,new C.eS1(s),0,""+A.k.V(w*100))
v=s.bF
v=s.km("Up / down",v,-1,1,new C.eS2(s),0,""+A.k.V(v*100))
u=s.c5
t=x.p
return B.x(B.a([s.vA(B.x(B.a([r,w,v,s.km("Turn",u,-180,180,new C.eS3(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bW(A.bB,B.a([s.oa("Turn 90\xb0",H.amR,!1,new C.eS4(s)),s.oa("Flip sideways",A.Gd,s.c6,new C.eS5(s)),s.oa("Flip upside down",A.Gd,s.cI,new C.eS6(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c3l(){var w=null,v=B.n(22),u=B.I(A.bE,A.q,1)
return B.p(w,B.x(B.a([D.eQc,A.R,D.fpl,A.aB,B.aC(w,B.p(A.A,D.eQp,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uf,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSU(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tu,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c0t(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eSM(p),m=x.p,l=B.B(B.a([D.bz5,p.oa("Reset",A.lp,!1,new C.eSI(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jm,o,o,o),j=p.xO("SHAPE",A.amN),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cf[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZz(n.$2(t,p.cy),62,u.b,s===t,new C.eSJ(v,p),62))}}i=B.bW(A.bB,i,A.br,8,8)
v=p.xO("RING",A.re)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ca[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZz(n.$2(p.cx,t),62,r.b,q===t,new C.eSK(s,p),62))}u=B.bW(A.bB,u,A.br,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ac,p.vA(p.km("Size",s,0.12,0.4,new C.eSL(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1u(d){return new B.a7(null,d,new B.fK(0.5625,B.cq(new C.eT4(this)),null),null)},
cy8(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bE,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uf:q
t=new B.aT(14,14)
s=D.d9T[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bh,B.aC(A.c7,B.df(q,B.x(B.a([r,A.cU,new B.qo(A.ei,A.A,A.f,new B.y(s.b,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.N,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bqA,q,q,q,A.hP,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eTd(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bsD,A.lS,q,q,q)},
aPP(){var w,v,u=this,t=null,s=u.cy8(),r=u.as
A:{if(0===r){w=u.bKT()
break A}if(1===r){w=u.cDJ()
break A}if(2===r){w=u.cyS()
break A}if(3===r){w=u.chZ()
break A}if(4===r){w=u.c0t()
break A}w=u.c3l()
break A}v=x.p
return B.bw(A.t9,B.en(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,D.btG,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.X4,!0),A.aq)},
aM1(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc8q(),p=B.n(16)
q=B.E(B.aC(r,B.p(r,D.eQA,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b_,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbME()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eVZ)
else t.push(D.bKv)
t.push(A.ab)
t.push(D.bAT)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aC(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uf,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b0F,r,r,r,r,G.ahT,r,r,r)},
aZx(){var w=null
return new B.D(T.Zr,B.B(B.a([B.aH(w,w,w,w,A.mD,w,w,w,new C.eSu(this),w,w,w,w,w,w),D.fEH,A.b7,D.bT5],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.AY,B.bm(!0,B.cq(new C.eTL(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bf6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eE()
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
s.drawRect(B.c0(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
au(d){return d.b!==this.b}}
C.ru.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m7.prototype={}
C.zx.prototype={
ah(){var w=this
return B.F(["at",w.a.a7().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nL.prototype={}
C.w_.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7S.prototype={}
C.aqS.prototype={}
C.a0d.prototype={
S(){return new C.aH3(new B.as(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1),D.dB5,B.a([],x.s),B.ev([D.I4],x.Q))}}
C.aH3.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a0_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().C3(90,700,700,A.eJ),$async$a0_)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$a0_)
case 8:p=e
if(r.c!=null)r.m(new C.eZZ(r,p,q))
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
return B.i($async$a0_,v)},
a02(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a02=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i0().aHc(78,n,1100,1100),$async$a02)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fn(),$async$a02)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cV.gcB().aK(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f__(r,p))
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
return B.i($async$a02,v)},
b3z(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fP(A.cI.aK(A.d.gal(d.split(","))),A.A,u,u,A.ci,A.bV,!0,u,!1,u,u)
return w}catch(v){}return D.boK},
c0z(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cqy(C.fC3(w,this.b3z(d),f),g)},
aci(d,e,f,g,h){var w=null,v=new C.eZX(f,e),u=new C.eZY(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bE:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BT:A.NA,A.bY,w,w,w,26),w,w,w),D.ehK],x.p),w),w)
else p=this.c0z(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bKc],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mu,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZW(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aWQ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.n(8),B.fP(A.cI.aK(A.d.gal(h.split(","))),A.A,p,p,A.ci,A.bV,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bE:A.bd.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.er,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.U7,p,p,p),1)],x.p)
if(f!=null)n.push(B.aC(p,D.a1i,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8q(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8q=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fFu(),$async$a8q)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eZF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.eZG(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8q,v)},
aea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aea=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eZI(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eZJ(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eZK(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ci(p,h)}w=7
return B.b(C.fAM(q,r.cx,j,new C.b0Q(r.z,r.Q,r.as,r.at),new C.eZL(r),i,m,p,k),$async$aea)
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
if(r.c!=null)r.m(new C.eZM(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aea,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eG,g).w
g=B.aI(d,A.bW,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b_,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aC(h,B.p(h,D.bNp,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bd.j(0.5),A.J,24)],v),D.bX9,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_c(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a1i,h,h,h,i.ax?h:new C.f_d(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbBF()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hw(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vR:A.ho,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w6,A.a5),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aZ7),h,h,h,h,h,h,h,h,A0.J8,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.ij,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aQN,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f_e(i)
s=i.aWQ(A.lr,q,r,i.gcip(),s)
r=i.z
r=B.E(i.aci(new C.f_g(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.aci(new C.f_h(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f_i(i)
s=i.aWQ(A.vO,r,p,i.gcix(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.aci(new C.f_j(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.ftK,A.au,D.fwB,A.by,u,A.O,D.fv0,A.aB,v,A.by,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.aci(new C.f_k(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fyk],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bgY,A.q,1)
w=C.agK(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bOu,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fd1,h,h,h),B.aL(!1,h,!0,D.ech,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f_l(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.ba5,h,u,v,h,h,A.n),h,h,h,h,D.bsk,h,h,h),h)],t))}o.push(A.by)
o.push(D.fkB)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d2m[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bE,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bB(1,A.bh,new B.D(A.jn,B.aC(h,B.df(A.A,new B.y(""+l,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a5),A.eH,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_m(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fCW)
o.push(A.O)
o.push(B.cq(new C.f_n(i)))
o.push(A.by)
o.push(D.frS)
o.push(A.O)
w=B.a([i.b6n("auto","Let AI choose",A.dX,A.Qj)],t)
for(v=x.O,m=0;m<11;++m){j=D.wb[m]
u=j.d
w.push(i.b6n(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bW(A.bB,w,A.br,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bd.j(0.5):A.bE,A.q,1)
o.push(B.p(h,B.iH(h,A.bd,h,h,h,new C.f_f(i),D.bJE,D.fCa,h,D.fmS,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aQ1,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc8u()
v=B.fp(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eVP:A.GD
o.push(new B.a7(h,54,B.lw(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ph,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.c8(B.x(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vF,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.abp,h,h,h,h,h,h,h,h),h)},
bOa(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eZN(this,p,d)
if(d===D.CU)return new C.aDB(p,o,q)
w=B.n(16)
v=p?E.w6:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bE,A.q,1)
s=B.X(p?A.eg:C.hHA(d),A.c,q,q,q,20)
r=C.hHB(d)
return B.aC(q,B.df(q,B.x(B.a([s,A.au,B.f7(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.ei)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hz,q,64,q,A.hA,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b6n(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bE
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aC(v,B.df(v,B.B(B.a([w,M.J_,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a6,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,M.aja,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f_1(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a0c.prototype={
S(){return new C.aH2(new B.as(A.as,$.aw()))}}
C.aH2.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
aeb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aeb=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eZy(r))
w=1
break}B.eV()
r.m(new C.eZz(r))
t=4
q=C.i7S(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i7C(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eZA(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h_D()
f=$.CE.h(0,k.a)
o=f==null||J.cn(f)?null:J.fr(f)
if(o==null){r.m(new C.eZB(r))
w=1
break}n=C.i7A(o,r.a.c)
C.i7w(r.a.c.a)
$.fZU=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h2s(j)
h=C.h2t(r.a.c)
e=C.h2u(r.a.c)
w=7
return B.b(C.bBK(k,r.a.c.a,j,h,new C.eZC(r),i,e,a0),$async$aeb)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.eZD(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eG,i).w
i=B.aI(d,A.bW,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b_,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.an5,A.f,j,j,D.b0k,j,34,j,j,j,j,j,34),A.at,D.bzH],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a87,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),As.aaT),j,j,j,j,j,j,j,j,A0.J8,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aQN,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cZB[q]
o=A.c.j(0.06)
n=k.e?j:new C.eZE(k,p)
r.push(B.mJ(j,o,new B.y(p,j,Ay.TI,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v5,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bW(A.bB,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aQ1,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gc8v()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bd.j(0.5),A.eB.j(0.5)],x.O):D.cxz
o=B.a([new B.ac(0,A.G,A.bd.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ecd:D.bO3
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eH(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hH,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.c8(B.x(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vF,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.abp,j,j,j,j,j,j,j,j),j)}}
C.b0Q.prototype={}
C.aDB.prototype={
S(){return new C.bjM(null,null)}}
C.bjM.prototype={
gax3(){var w,v=this,u=v.d
if(u===$){w=B.bk(null,A.pU,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gax3().q()
this.bvx()},
B(d){var w=null,v=this.a.d
return B.aC(w,B.c6(this.gax3(),new C.ef8(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bhj.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d4y[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xv.j(0.25+r*0.6).gp(0)
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
C.arr.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zz.prototype={
S(){return new C.aB3()}}
C.aB3.prototype={
gaif(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agX(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAb(){var w=this.e
return w===$?this.e=C.h2s(this.a.c).t(0,D.CU):w},
a8d(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8d=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.diN(s))
u=3
r=A.d.h7(D.wb,new C.diO(s))
q=B.dd(C.h2s(s.a.c),x.Q)
l=q
J.hx(l,D.CU)
p=l
if(s.gAb())J.ci(p,D.CU)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAb()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h2t(i.c)
g=C.h2u(s.a.c)
w=6
return B.b(C.bBK(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8d)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agX(q,s.gaif())
f=q==null?null:q.b
n=f==null?s.gaif():f
if(!J.A(n,r.a)&&!s.gAb())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.diP(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8d,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bE:A.aL,A.q,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bC,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.diS(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wb[w]
u=o.gaif()
t=o.f?n:new C.diT(o,v)
f.push(new C.bse(v,u===v.a,t,n))}f=B.m2(1.25,f,3,10,10,n,A.dS,!0)
u=B.n(18)
t=o.gAb()?D.bZV:n
if(o.gAb())s=n
else s=m?A.bn:A.bL
r=B.X(A.dX,o.gAb()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAb()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAb()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAb()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aal(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.diU(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ahW,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fdl,n,n,n)],g))
f=B.c8(B.x(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fz,n,n,A.ag)
u=o.f?n:o.gbAE()
t=B.bn(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.Y),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bvj,e,n),new B.dq(1,A.co,f,n),new B.D(A.Fy,new B.a7(1/0,50,B.bG(B.eH(B.av(o.f?A.rS:D.fud,n,n,n),n,new B.o(n,n,n,s,n,D.bYt,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tP,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bse.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.ld,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lC,w,w,B.d(v.b,w,w,w,w,w,w,D.fdj,w,w,w),w)],x.p)
if(q)v.push(D.aXb)
return B.aC(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.az,A.aC,A.x,r,w,w),A.n),A.eH,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.ef5.prototype={
aEL(d,e,f){return e+"@"+A.a.aV(A.o.fX(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wu(d,e){return this.aEL(0,e,null)}}
C.aLC.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.b0M.prototype={
B(d){var w,v,u=null,t=C.h1h(this.c)
if(t==null)w=D.bng
else{w=B.aI(d,u,x.w).w.cIL(D.brR,D.eV2)
v=this.d
w=B.ti(B.e_(B.anN(!1,t,!1,v,!1,390),!v,u),w)}return B.f7(A.A,new B.a7(416,870,new C.blp(w,u),u),A.f,A.dv)}}
C.blp.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dgu[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aoZ,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dhH[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aoZ,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.n(64),D.cPr,D.bWS,A.n),A.bf),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bZ(13,B.bw(B.n(51),B.en(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aXn,B.p(t,t,A.f,t,t,D.b0D,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e_(B.bw(B.n(51),D.boQ,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e_(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.ld.prototype={
px(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.er(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mK,D.cQ,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.er(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a6,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.de,D.cQ,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.rv(i,l,0,0,B.a([f,w,C.er(A.bi,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a6,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cn,D.f4,0.3,0.35,0.72)],s),C.cB(),D.mJ,"","","Welcome",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
w=C.cB()
w=C.rv(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uv,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mJ,"","","Agenda",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
f=C.cB()
f=C.rv(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,21,A.bo,A.a6,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mJ,"","","Key Point 1",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
r=C.cB()
r=C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cQ,0.4,0.08,0.24)
q=C.cB()
q=C.rv(i,l,0,0,B.a([u,r,C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cQ,0.4,0.52,0.24)],s),C.cB(),D.mJ,"","","Key Point 2",D.de)
r=C.cB()
r=C.er(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.de,D.cQ,0.8,0.1,0.32)
e=C.cB()
p=C.BG(l,l,l,l,D.CQ,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rv(i,l,0,0,B.a([r,C.er(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cn,D.cQ,0.7,0.15,0.58)],s),C.cB(),D.mJ,"","",h,D.de)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EC.prototype={
bB(d){return this.e.$1(d)}}
C.ew.prototype={}
C.j0.prototype={}
C.Et.prototype={
gaKA(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agK(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3n(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Et(v,u,t,d==null?w.d:d)},
FA(d){return this.a3n(null,d,null,null)},
aDu(d){return this.a3n(null,null,null,d)},
cIJ(d,e){return this.a3n(d,e,null,null)},
bby(d){return this.a3n(d,null,null,null)},
bbF(d){return this.a3n(null,null,d,null)}}
C.Nk.prototype={
S(){return new C.bj8(new B.eN(0,$.aw()),null,null)}}
C.bj8.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(new C.dUb(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.j2(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.bv_()},
B(d){var w=C.agK(this.a.c.a)
if(w==null)w=A.d.gI(D.GY)
return B.cq(new C.dUa(this,w,C.hhq(this.a.c.d)))}}
C.bqN.prototype={
B(d){return B.nQ(A.Vt,this.e,new C.eYM(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bec.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSu(d,e,v)
break
case"confetti":w.bHe(d,e,v)
break
case"crown":w.bIR(d,e,v)
break
case"aurora":w.bBJ(d,e,v)
break
case"champagne":w.bF2(d,e,v)
break
case"diamonds":w.bL1(d,e,v)
break
case"starburst":w.cvP(d,e,v)
break
case"balloons":w.bBX(d,e,v)
break
case"galaxy":w.bPY(d,e,v)
break
case"redcarpet":w.cmK(d,e,v)
break
case"coins":w.bGA(d,e,v)
break
case"lanterns":w.c_9(d,e,v)
break
case"hearts":w.bXN(d,e,v)
break
case"petals":w.chR(d,e,v)
break
case"butterflies":w.bE0(d,e,v)
break
case"neon":w.c35(d,e,v)
break
case"disco":w.bLc(d,e,v)
break
case"sunrise":w.cxp(d,e,v)
break
case"pearls":w.cgV(d,e,v)
break
case"snow":w.cvu(d,e,v)
break
case"laurel":w.c_f(d,e,v)
break
case"ribbons":w.cph(d,e,v)
break
case"kente":w.bZY(d,e,v)
break
case"trophy":w.cB4(d,e,v)
break
case"shooting":w.cth(d,e,v)
break
case"bokeh":w.bCh(d,e,v)
break
case"orbits":w.cey(d,e,v)
break
case"flowers":w.bPd(d,e,v)
break
case"music":w.c2O(d,e,v)
break
case"mandala":w.c1f(d,e,v)
break
case"sparklers":w.cvD(d,e,v)
break
case"city":w.bFS(d,e,v)
break}},
rB(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nH
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
lN(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rB(d,new B.v(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSu(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lN(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aF],w),B.a([A.iy,A.bD],w),B.a([A.ev,A.aN],w),B.a([A.c,A.ax],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bn(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lj(new B.v(g,c1),new B.v(f,e),A.cu.az(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.ry(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bS
a2=B.lj(new B.v(g,c1),a0,0.75)
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
a8.z=new B.hB(A.G,o)
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
b9.d=A.bS
b9.a=A.nH
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rB(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHe(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.az,A.aC,A.x,D.db6,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.b_(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.PL[A.o.D(A.k.bn(C.cY(u,7)*5),0,4)]
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
if(r!=null)s.bB(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cC(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.cg(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lN(a1,a2,a3,25,A.bM,30)},
bIR(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bbY],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbM().a.snapshot()
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
n.saq(new B.a8(A.b0,A.b4,A.x,D.d9O,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aR(i,n)
for(v=[D.erA,D.el3,D.eAM],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.i0.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x8(i),u=B.a([],x.X),o=new B.vC(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jY(y.M));--f
o.jy()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cA([new B.Hl(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fF
f.r=A.bM.gp(0)
l=f.H()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cC(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rB(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lN(a8,a9,b0,45,A.bM,40)},
bBJ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lN(a8,a9,b0,60,A.c,50)
w=[D.eLV,D.eLD,D.eLx,D.eMT]
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
if(a1!=null)d.bB(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bB(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nH
n.z=new B.hB(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nH
n.z=new B.hB(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vq.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.nH
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bF2(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hK.j(0.25+0.1*h),D.Xe],x.O),l,l).av(0,B.bU(new B.v(g,f),e)))
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
if(q!=null)d.bB(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.PL[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cC(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rB(a1,new B.v(r,n),m*2.4,A.bM,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xl.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bL1(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lN(a9,b0,b1,30,A.lf,60)
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
g.saq(new B.a8(A.az,A.aC,A.x,D.d5z,a5,a5).av(0,B.cg(A.J,k*1.2,o)))
a2=g.H()
g=f.gbM().a.snapshot()
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
if(a4>0.85)this.rB(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cvP(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
r=n.gbM().a.snapshot()
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
m.delete()}j=A.k.bn(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bod.az(0,k)*(0.5+0.5*C.cY(t,v)))
this.rB(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.PL[A.o.D(A.k.bn(C.cY(t,4)*5),0,4)],u)}},
bBX(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aw9[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bB(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cC(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cg(new B.v(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aXq,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.aw0,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c0(a2),a1)
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
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cC(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cg(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.aw9[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bPY(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lN(b1,b2,b3,50,A.c,70)
for(w=[D.eM2,D.eLJ,D.eLP],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bU(new B.v(r,m),l)))
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
a0.a=A.nH
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.xl.j(0.55),D.afz],u),a4,a4).av(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bn(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.lj(a3,a3.ad(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lj(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.ry(a3,a5)))
a8.c=a7*0.005
a8.d=A.bS
b1.bE(a6,a5,a8)}},
cmK(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.xl.j(0.28),D.afz],w),b5,b5).av(0,B.bU(new B.v(q,u),t)))
o.a=A.nH
l=o.H()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cC(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eq:A.eK)
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
a9.saq(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cC(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hK.gp(0)
b1.c=o
b1.d=A.bS
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
v.saq(D.bYn.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aR(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rB(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bGA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.cg(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.az,A.aC,A.x,n>0?D.dl5:D.cDi,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bl2.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rB(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lN(d,e,f,30,A.bM,110)},
c_9(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lN(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.Xs.j(0.45*k),D.aep],u),d,d).av(0,B.bU(new B.v(l,m),j)))
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
i=B.aq(D.bc7,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b0,A.b4,A.x,B.a([D.bgA,i],u),d,d).av(0,B.cg(new B.v(l,m),o*1.4,o)))
g=j.H()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cC(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bXN(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
l.push(new B.pG(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pG(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cXv[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.t6,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a2r,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cC(m)).a,e)
e.delete()
v.restore()}this.lN(a3,a4,a5,30,A.iy,130)},
chR(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
m=(q&1)===0?D.cxy:D.d6S
n.saq(new B.a8(A.a3,A.a8,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cC(n)).a,j)
j.delete()
v.restore()}this.lN(d,e,a0,25,A.bM,140)},
bE0(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lN(b0,b1,b2,40,A.bM,150)
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
a3.push(new B.pG(f,e,l,d,h,0))
a3.push(new B.pG(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a8,A.x,i?D.d6B:D.d9h,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cC(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AS.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cC(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bkl.gp(0)
p.c=q*0.1
p.d=A.bS
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c35(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.axe[t].j((1-s)*0.9).gp(0)
q.z=new B.hB(A.G,v)
p=r*0.3
p=B.bx(B.cg(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.et(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.axe[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hB(A.aaH,p)
o=j.H()
u.drawRRect(B.et(i),o)
o.delete()}},
bLc(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nM,A.ds][A.o.E(p,4)]
j=C.cY(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nH
i.z=new B.hB(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bE(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.N()
t.r=A.dy.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.k4(B.bU(v,u)))
a3.qv(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bl,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c0(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rB(a3,v.ad(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cxp(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.az(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
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
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cC(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b87.j(0.6),D.aep],x.O),h,h).av(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.eiA.av(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cg(new B.v(l,k),r,u)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()
i=B.cg(new B.v(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()}this.lN(a2,a3,a4,20,A.i0,180)},
cgV(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bB(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bB(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bB(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cz,A.jc,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cC(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.ps,0.5,A.x,f,0,D.dcK,f,f).av(0,B.bU(new B.v(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lN(a1,a2,a3,25,A.c,190)},
cvu(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bS
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
h.delete()}v.restore()}this.lN(d,a0,a1,40,A.ev,200)},
c_f(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dk(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cg(new B.v(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bYa.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bco.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rB(a3,w.ad(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lN(a3,a4,a5,40,A.bM,210)},
cph(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hK,A.i0],a6),B.a([A.oJ,A.iy],a6),B.a([A.aE,A.eC],a6)]
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
if(a1!=null)f.bB(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bB(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dx(i,s),l=new B.bQ(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bB(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bB(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.awR,new B.mp(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cC(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lN(a8,a9,b0,40,A.c,220)},
bZY(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bn(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2u[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a2u[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rB(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.a2u[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cB4(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
f=B.cg(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.ax.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c0(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a8(A.a3,A.a8,A.x,D.dfd,A.awg,null).av(0,new B.a9(v,a2,r,j)))
a4.aR(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rB(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHf(a4,a5,a6,60)},
bHf(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cg(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.PL[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
cth(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lN(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.E(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bn((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).av(0,B.ry(new B.v(l,h),i)))
g.c=r
g.d=A.bS
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rB(a0,i,p,A.c,1-m)}},
bCh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.E(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ayL[l].j(n).gp(0)
m.a=A.nH
m.z=new B.hB(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ayL[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cey(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cg(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c0(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.i0.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hK.j(0.4).gp(0)
k.z=new B.hB(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lN(d,e,f,45,A.bM,270)},
bPd(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.E(a7+C.cY(o,2)*4,4)/4
j=A.ew.az(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d3J[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cg(new B.v(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b0,A.b4,A.x,B.a([A.c,g],u),null,null).av(0,B.cg(new B.v(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hK.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lN(a5,a6,a7,30,A.i0,280)},
c2O(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.avl[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avl[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cg(A.J,d,d*1.5)
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
c1f(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d.r=B.aq(A.bM,A.nM,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cC(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.i0.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hK.j(0.25),D.Xe],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lN(a7,a8,a9,30,A.bM,300)},
cvD(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bS
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.i0,A.hK.j(0.6),D.Xe],o),null,null).av(0,B.bU(new B.v(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.E(b2+C.cY(f,2)*e,e)/e
a0=A.k.bn((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.i0,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bS
a6.a=A.nH
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
bFS(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSu(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bZ5.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bn(m/q)
f=A.k.bn(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bM.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aZG.prototype={
B(d){var w,v=null,u=new C.c8v(),t=new C.c8x(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ao7,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8w(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GY[w]))
return B.bW(A.bB,s,A.br,12,10)}}
C.Z7.prototype={
S(){return new C.azr()}}
C.azr.prototype={
gvB(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aO),$.aw())}return v},
gax4(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKA()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aO),v)}return t},
q(){var w=this.gaZC(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gax4()
w.T$=v
w.P$=0
this.a2()},
ZQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().C3(90,700,700,A.eJ),$async$ZQ)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$ZQ)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahG(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7Z(r,n,p))
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
return B.i($async$ZQ,v)},
aZB(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aQS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agK(p.gvB().a)
if(n==null)n=A.d.gI(D.GY)
w=p.gvB()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Nk(p.gvB(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HF(A.mD,new C.d83(d),B.nB(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HF(D.bIy,new C.d84(p),B.nB(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aQM,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaZC(0),o,o,o,o,o,2,p.aZB("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d85(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hu,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hK.j(0.6),A.q,1)
if(p.gvB().d.length===0)q=D.bLU
else{q=C.hhq(p.gvB().d)
if(q==null)q=new Uint8Array(0)
q=B.hX(B.fP(q,A.A,o,o,A.ci,A.bV,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aC(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc8w(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvB().d.length!==0)r.push(B.aH(o,o,o,o,D.a1i,o,o,o,new C.d86(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gax4(),o,o,o,o,o,2,p.aZB("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d87(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dp,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bKN,D.fDR,new C.d88(p,d),B.bn(A.ax,o,o,o,A.w,o,A.cm,o,new B.b7(B.n(14),A.Y),o,o,o))],u),A.ai,o,A.e,A.N,0,A.p),A.f,o,o,D.b0P,o,o,o,o,A.Fv,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aL5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.Zs.prototype={
S(){return new C.bfG(new B.as(A.as,$.aw()))}}
C.bfG.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bE:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.deM(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cOT[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pk,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.deN(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hP,new B.y(v.a.toUpperCase(),o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cg(A.bB,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bn:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aRL,new C.deO(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dq(1,A.co,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tP,A.Z7,o,o,o),!0,!1,A.af,!0,!0)}}
C.bf3.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eE()
a2.dt(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Ro
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aw(4))+n)
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
C.beL.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kd),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lv
a6.aE(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iM(a1))
v=new B.Sp(new B.vC(B.x8(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jy()
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
j.d=A.bS
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cA([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cA([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cA([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}}a4.jy()
e=u[a3].MG(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mI
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
C.bnF.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eE()
e.dt(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hi()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gamf()*1.4
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
j.saq(B.aUK(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jt
g=j.H()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cC(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.b9F.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
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
e.z=new B.hB(A.G,k*0.35)
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
C.b9i.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
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
if(e!=null)i.bB(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bS
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hB(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cC(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.buA.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cWh,null).av(0,u))
d.b_(u,w)
w=u.cw(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jt
d.b_(w,v)},
au(d){return d.b!==this.b}}
C.brA.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bn(d)*7,p=0;p<7;++p){o=new B.eE()
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
i.d=A.bS
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
g.z=new B.hB(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.bqJ.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nH
v.saq(new B.a8(A.az,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.b_(w,v)},
au(d){return d.b!==this.b}}
C.be5.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdE(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bS
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.ry
r=new C.d7G(this,r*0.16,d,u,w)
t=e.gdE()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xz.prototype={}
C.IF.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqR.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uH.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mx.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hE.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eM.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.hVA(v.z))
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
C.lG.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,eM>")
n=B.C(new B.M(n,new C.cdW(),m),m.k("ak.E"))
return C.rv(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,a5<m,@>>")
n=B.C(new B.M(n,new C.cdX(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gb9T(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gS7(){if(!C.kx(this.w))return!1
var w=this.gb9T()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bU())},
hH(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("M<1,lG>")
r=B.C(new B.M(r,new C.cdL(),q),q.k("ak.E"))
return C.BG(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ah(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ac())
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
v=B.T(w).k("M<1,a5<m,@>>")
w=B.C(new B.M(w,new C.cdM(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jH.prototype={}
C.b0P.prototype={
B(d){return B.cq(new C.cdR(this))}}
C.ao2.prototype={
S(){return new C.biT(null,null)}}
C.biT.prototype={
gaZD(){var w,v=this,u=v.d
if(u===$){w=B.bk(null,A.fX,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZD().q()
this.buK()},
B(d){return B.c6(this.gaZD(),new C.dGq(),this.a.c)}}
C.aKR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.add.prototype={
PJ(d,e,f,g){return this.bOU(d,e,f,g)},
bOU(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PJ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PJ)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b_,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dj,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adv(A.hC,"Download",A.c0,new C.ery(w,d),!0,v),1),A.at,B.E(new C.adv(A.vT,"Share",A.bj,new C.erz(w,d),!1,v),1),A.at,B.E(new C.adv(A.hp,"Safari",A.aZ,new C.erA(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.erB(d),v,v))
return B.bm(!0,new B.D(A.pY,B.x(B.a([B.p(v,B.x(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iW,v,t,u,s,v,A.n),v,v,v,v,A.FC,v,v,1/0)],m),A.m,v,A.e,A.N,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adv.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eH(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bxG,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b0N.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aq2(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c8x().akr(1.35)
s=B.avl(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAe(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bTU,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.ww,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zH,A.an,h,A.Tz,h,h)
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
w=n?t.cIw(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eF:A.Dq
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Tq:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fF
j.r=A.ay.gp(0)
j=i.cpk(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cpi(k,t,l?A.Tq:s)],x.p),h)}else w=i.cpj(p,t,g.k2?A.Tq:s,m)
v=new B.nh(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aC(A.c7,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bYs()
case 3:return i.cgU()
case 2:return B.b3(h,h,h,new C.b0K(g,h),A.f5)
case 5:g=g.r
return new C.b0M(g,!i.e&&i.z==null,h)}},
c8x(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k3
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.aen,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.ay
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mP
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bD,new B.v(v,v),0)],x.r)
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
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.av,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=W.KS
break
case"ice":v=o.d
e=B.a([new B.cR(A.aN,A.J,10*v),new B.cR(A.cz,A.J,22*v)],x.r)
k=A.P
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k3
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cYi[q]
u.push(new B.cR(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bWz.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.KH,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bWU.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
w=l
k=A.a6
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
k=A.k3
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
az1(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eS8.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdP(h)
v=r.k2?C.i7b(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eF:A.Dq
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XE(B.d3(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cpk(d,e,f,g){return this.az1(d,e,f,!1,g)},
cpi(d,e,f){return this.az1(d,e,f,!1,null)},
cpj(d,e,f,g){return this.az1(d,e,f,g,null)},
bAe(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bYs(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l5?A.Gy:A.BE,A.aA,t,t,t,32),t,t,t)}w=u.bDe(r)
if(s.b===D.l5){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNJ(r,!0)
return C.fC3(s.go,v,s.id)}return w},
aNJ(d,e){var w,v,u,t
try{w=C.i7u(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cq(new C.cdO(this,w,v,e))
return u}catch(t){return D.ac4}},
bDe(d){return this.aNJ(d,!1)},
cgU(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b66
return C.i7M(v,w.db,w.dx)}}
C.b0K.prototype={
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
switch(f.ax.a){case 0:d.b_(s,g)
d.b_(s,w)
break
case 1:d.hU(s,g)
d.hU(s,w)
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
if(v!=null)h.bB(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bB(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIs.prototype={
S(){return new C.bu6(null,null)}}
C.bu6.prototype={
a_(){var w,v=this
v.a1()
w=B.bk(null,A.ii,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bx2()},
aNU(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.dj,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAs(){var w,v=this,u=null,t=v.aNU("Slide A",A.bj),s=v.aNU("Slide B",A.aZ)
if(v.a.c===D.cn)return new B.an(A.W,u,A.b1,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f6j(v,s,t),u)},
B(d){return this.bAs()}}
C.aJ4.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jR(d){return d.b!==this.b}}
C.UP.prototype={
S(){return new C.bj5(null,null)}}
C.bj5.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bk(null,A.B5,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dSo(u),x.a)},
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
else B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dSn(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.buZ()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dSm(this),v.d)}}
C.IE.prototype={
B(d){return B.cq(new C.cdH(this))}}
C.azb.prototype={
S(){return new C.bdz()}}
C.bdz.prototype={
a_(){this.a1()
if(this.a.c!==D.cn)B.bN(A.M8,new C.d4V(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UP(C.er(A.bi,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a6,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f4,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cc,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bi,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a6,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UP(t,B.p(p,D.fpw,A.f,p,p,new B.o(s,p,B.I(A.b_,A.q,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b1o,A.bf)}}
C.a7A.prototype={
S(){return new C.bjK(null,null)}}
C.bjK.prototype={
gb_a(){var w=this.a
if(w.e)w=D.eSh.t(0,w.c)||D.aNX.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gb_a()){w=C.i5R(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bk(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bvv()},
B(d){var w,v=this,u=v.d
if(!v.gb_a()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.eeP(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZJ.prototype={
B(d){var w=null
return B.av(C.b0O(!0,w,!1,C.er(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a6,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cn,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.beJ.prototype={
jd(d){return C.a2d(this.b,new B.a9(0,0,0+d.a,0+d.b).cw(-this.c))},
jR(d){return d.b!==this.b||d.c!==this.c}}
C.bpG.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cw(-this.d),g=this.b,f=C.a2d(g,h),e=a1.gdE(),d=new C.eWp()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aPu.av(0,h))
a0.aR(f,w)
g=C.a2d(g,h.cw(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bkP.gp(0)
a0.aR(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.f1d.av(0,h))
a0.aR(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hB(A.G,e*0.04)
a0.aR(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aR(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.f1b.av(0,h))
a0.aR(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2d(g,h.cw(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aR(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hB(A.G,e*0.035)
a0.aR(f,g)
g=d.$1(e*0.016)
g.r=A.oK.gp(0)
a0.aR(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.f16.av(0,h))
a0.aR(f,w)
w=C.a2d(g,h.cw(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b9z.gp(0)
a0.aR(w,v)
g=C.a2d(g,h.cw(e*0.03))
v=d.$1(e*0.004)
v.r=D.bcb.gp(0)
a0.aR(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aPu.av(0,h))
a0.aR(f,g)
for(g=B.x8(f),w=B.a([],x.X),g=new B.vC(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jY(y.M));--q
g.jy()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bn(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jy()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jy()
m=w[q].MG(p*n/o).a
l=D.cVB[A.o.E(n,4)]
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
g.saq(D.f1f.av(0,h))
g.z=new B.hB(A.G,e*0.03)
a0.aR(f,g)
g=d.$1(e*0.018)
g.saq(D.f1c.av(0,h))
a0.aR(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2d(g,h.cw(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nO.gp(0)
a0.aR(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqG.prototype={
a4(d,e){d.FQ(C.a2d(this.b,new B.a9(0,0,0+e.a,0+e.b).cw(-this.c)),A.w,e.gdE()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aL4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.aLA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.aMX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.a7T.prototype={}
C.NM.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aE1(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge1(){return this.c},
gTs(){return this.r},
gTt(){return this.w},
gLu(){return this.x}}
C.aE1.prototype={
a_(){var w,v=this
v.a1()
$.aW.bT$.push(v)
C.fH_()
$.hp4=new C.exM(v)
w=B.bk(null,A.B3,null,1,null,v)
w.fh(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ik()},
bv(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ol(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ik()}},
j6(d){if(d===A.Aa||d===A.t8||d===A.t7||d===A.pt)this.ty()},
q(){var w,v,u,t=this
$.aW.hL(t)
w=t.at
if(w!=null)w.a6(0)
t.ty()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.hb()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bvJ()},
gabj(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOF(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abO(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gS7())return!1
return!0},
kj(){return this.abO(null)},
aiy(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.f_v)},
qg(){if(!this.kj())return!1
this.aiy()
return!0},
aqD(d){var w,v,u,t,s,r=this
if(r.abO(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hob(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zQ(){return this.aqD(null)},
Ik(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ik=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqT(k),$async$Ik)
case 3:j=e
w=4
return B.b(C.apv(k),$async$Ik)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fWq(j,t.c0k())
w=t.gabj()?5:7
break
case 5:r=t.gOF()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZX(r),$async$Ik)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eu9())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eua())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yA(m==null?"":m)!=null)continue
C.fHb(n,s)
p=!0}t.m(new C.eub(t,s))
if(p||s.length>J.ad(j))t.ty()
case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
c0k(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kx(w)&&w!==q}if(w)p.push(r)
return p},
cnJ(d){var w,v=this,u=d.w
if(!C.kx(u)||u==="hati_kiapo_uongozi")return
v.aa7(d)
w=A.d.bg(v.d,new C.evK(d))
u=v.d
if(w>=0){u[w]=d.hH()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cj(u,0,d.hH())
v.db=!1},
chQ(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kx(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cnJ(t)
s=u.d
w=B.T(s)
v=w.k("cO<1,i3>")
s=B.C(new B.cO(new B.a_(s,new C.evy(),w.k("a_<1>")),new C.evz(),v),v.k("J.E"))
return s},
Ol(d){return this.bPh(d)},
ty(){return this.Ol(null)},
bPh(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ol=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.chQ()
w=3
return B.b(C.VN(d==null?t.a.c:d,s),$async$Ol)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqD(r)?4:5
break
case 4:w=6
return B.b(C.a75(r),$async$Ol)
case 6:q=r.x
p=A.a.i(q==null?t.gOF():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.etx())
q=t.d
if(o>=0)q[o]=r.hH()
else A.d.cj(q,0,r.hH())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ol,v)},
pj(){var w,v=this,u=v.at
if(u!=null)u.a6(0)
u=v.e
w=(u==null?null:C.kx(u.w))===!0?A.hz:A.lO
v.at=B.cM(w,new C.ewS(v))},
aZE(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.af0(u.hH(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.a8(v.ay)},
cBl(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.af0(w.e.hH(),w.f,w.r))
w.m(new C.exI(w,v.pop()))
w.pj()},
cmP(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.af0(w.e.hH(),w.f,w.r))
w.m(new C.evI(w,v.pop()))
w.pj()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.exv(u))
if(w>=0){u.d[w]=u.e.hH()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xo(d){var w,v,u,t,s=this.gdu()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xs(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.hb()}w.a8(0)},
K0(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdu()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cO<1,m>")
t=B.dd(new B.cO(new B.a_(w,new C.exw(),v.k("a_<1>")),new C.exx(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.hb()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c9(0,p,new C.exy(n))
s.c9(0,p,new C.exz())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
HE(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b6(u.d,new C.esW(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOF()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hH())}u.of()
u.pj()},
aiU(d,e){var w,v,u,t,s=this
if(s.kj())return
w=s.Xo(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kx(v.w))===!0
if(u){C.i5V(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdu()
if(t!=null)C.i5W(t,w.d+w.f*0.5)}}s.HE()
s.of()
s.pj()
if(u&&s.c!=null)s.m(new C.exJ())},
cCp(d,e){var w=this,v=w.gdu()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HE()
w.of()
w.pj()},
gdu(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gql(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i3X(o)
if(w!=null)return w
v=q.gdu()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bYH(v)
t=q.bYG(v)
s=B.b0(v.e)
r=v.f
return new C.jH(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hHM(o)},
bYH(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bYG(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aJ},
aeQ(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabj()){w.c.K(x.q).f.U(D.eZ7)
return}w.aa7(d)
w.b_R(C.bBL(d))
return}if(C.ceA(v)){w.aa7(d)
w.b_R(d)
return}w.m(new C.euR(w,d))},
ard(){var w,v,u,t,s,r,q=this
q.a1W(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kx(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.esU(q))
if(r&&q.c!=null){u.toString
q.JB(u,s)}return}q.ty()
q.m(new C.esV(q))},
b_Q(d){this.aa7(d)
this.a_q(d,!0)},
aa7(d){if(!C.kx(d.w))return
C.fHb(d,this.d)},
a_q(d,e){return this.cdK(d,e)},
b_R(d){return this.a_q(d,!1)},
cdK(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBL(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOF():r)
t.dy.W(0,q.toLowerCase())
C.apw(t.a.c,q)}r=s}else r=d
w=C.ceA(r.w)?3:4
break
case 3:w=5
return B.b(t.aa8(r),$async$a_q)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b6(t.d,new C.evd(l))
o=l.a.hH()
n=C.kx(o.w)&&C.i76(o)
t.m(new C.eve(t,o,p))
if(n){m=A.d.bg(t.d,new C.evf(o))
if(m>=0){t.d[m]=o.hH()
t.ty()}}if(!t.abO(l.a))t.Yy()
r=!1
if(t.c!=null)if(!t.abO(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqD(r)&&C.fDe(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.eZH)
case 1:return B.h(u,v)}})
return B.i($async$a_q,v)},
aa8(d){return this.bNt(d)},
bNt(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aa8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lh(r.c,A.zp),$async$aa8)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kW(!1,r,s.c,s.d,null,A.zp,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aa8,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ceA(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdZ(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aex(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.euQ(),s,null,!0,!0,x.H),$async$aex)
case 3:if(t.c==null){w=1
break}t.ard()
case 1:return B.h(u,v)}})
return B.i($async$aex,v)},
aew(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.euN(),s,null,!0,!0,x.H),$async$aew)
case 3:if(t.c==null){w=1
break}t.m(new C.euO())
t.ard()
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
Yy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Yy)
case 3:r=e
if(B.jN(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Yy)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eXL)
case 1:return B.h(u,v)}})
return B.i($async$Yy,v)},
JB(d,e){return this.co9(d,e)},
co9(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JB=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agl(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JB)
case 9:w=4
break
case 6:w=10
return B.b(C.agm(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JB)
case 10:w=4
break
case 7:w=11
return B.b(C.agn(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JB)
case 11:w=4
break
case 8:w=12
return B.b(C.ago(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JB)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JB,v)},
c_d(){var w,v,u,t,s=this
if(!s.gabj()){s.c.K(x.q).f.U(D.eXY)
return}w=s.gOF()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agk(u,t,v,new C.eu5(s),new C.eu6(s),w)},
aeR(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bS(A.dH,null,new C.euX(u),s,!0,!0,!1,A.lx,!1,!1,x.N),$async$aeR)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ago(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agl(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agm(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agn(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_d()
return B.h(null,v)}})
return B.i($async$aeR,v)},
ccR(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZE()
w=C.cB()
v=C.BG(t,t,t,t,D.CQ,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.euY(u,v))},
a9z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ibD(s),$async$a9z)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d6(q.r,new C.esY())
t.d2(new C.esZ(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9z,v)},
agP(d,e,f,g){var w=null,v=g?A.dm:A.bL,u=B.I(g?A.b_:A.cr,A.q,1)
return B.hw(B.aC(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_p(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qg()){w=1
break}s=t.jV()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.ev8(),q),q.k("J.E"))}o=s!=null&&s.b===D.lw?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.eZS)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.ev9(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_p)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_p,v)},
af7(){return this.cdJ()},
cdJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$af7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ibp(s,t.f+1,o),$async$af7)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kG(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.evb(q))
t.d2(new C.evc(p,t,o,q,r))
t.c.K(x.q).f.U(D.f_g)
case 1:return B.h(u,v)}})
return B.i($async$af7,v)},
afe(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()||!t.zQ()){w=1
break}s=t.gdu()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.evt(),q),q.k("J.E"))
if(p.length===0){t.c.K(x.q).f.U(D.eXw)
w=1
break}o=new B.M(p,new C.evu(),B.T(p).k("M<1,L>")).ff(0,new C.evv())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aO),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bS(A.K,null,new C.evw(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afe)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.evx())
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
aeU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qg()){w=1
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
return B.b(C.hqb(s,new C.Et(r,q,p,o==null?"":o)),$async$aeU)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d2(new C.euZ(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agK(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeU,v)},
aa1(){return this.bMP()},
bMP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aa1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ibC(s,t.f+1,l),$async$aa1)
case 3:r=e
q=$.fZU
$.fZU=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d2(new C.ete())
t.c.K(x.q).f.U(D.eXn)
w=1
break}if(!q){s=r.CW
s=C.hp2(l,s==null?"":s,!1)}else s=!1
if(s){t.d2(new C.etf(t,l,r))
t.c.K(x.q).f.U(D.f_K)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kG(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.etg(p))
o=s.length
t.d2(new C.eth(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa1,v)},
aQ1(d,e){if(e){this.afH()
return}this.ccR(d,!1)},
bIr(){return this.aQ1(null,!1)},
afH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.c_,null,new C.evD(t),r,!0,!0,!0,A.pd,!1,!1,x.N),$async$afH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.evE(t,C.i3W(s).px()))
case 1:return B.h(u,v)}})
return B.i($async$afH,v)},
d2(d){var w=this
if(w.qg())return
w.HE()
w.aZE()
w.m(d)
w.K0()
w.of()
w.pj()},
a82(){this.d2(new C.erT(this,D.mJ))},
aRw(){var w=this.gdu()
if(w==null)return
this.d2(new C.etc(this,w))},
aQE(){var w=this.e
if(w==null||w.r.length<=1)return
this.d2(new C.eta(this))},
b2R(d,e){if(this.e==null||d===e)return
this.d2(new C.evM(this,d,e))},
NT(d){return this.bKr(d)},
bKr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOF():s)
w=5
return B.b(C.apu(t.a.c,r),$async$NT)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aqV(s)
w=6
return B.b(C.b0S(t.a.c,s),$async$NT)
case 6:if(t.c==null){w=1
break}t.m(new C.et6(t,d))
w=7
return B.b(t.ty(),$async$NT)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NT,v)},
co6(d,e){var w=this
if(d.z){w.aiy()
return}w.m(new C.evL(w,d,e))
w.pj()},
jV(){var w,v,u,t,s,r=this.gdu()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wp(d){return this.ch.c9(0,d.a,new C.esX(d))},
at4(d){return this.CW.c9(0,d.a,new C.ety())},
a1W(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xo(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jL()},
b6h(){return this.a1W(!0)},
a1T(d){var w,v,u=this
if(u.qg())return
if(!u.zQ())return
w=u.Xo(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wp(w).saX(0,"")}u.m(new C.ext(u,d))
$.aW.x1$.push(new C.exu(u,d,w))},
b6P(d){var w=this
if(d.b===D.cQ&&!w.kj()&&w.zQ()){w.a1T(d.a)
return}w.azr(d.a)},
azr(d){var w,v,u,t,s,r=this
if(r.kj())return
w=r.r
if(w!=null&&w!==d){v=r.Xo(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ewT(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jL()}},
aMh(){this.d2(new C.erU(this))},
p_(d){return this.bzv(d)},
bzv(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p_)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d2(new C.erR(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p_,v)},
Vy(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GA(78,1920),$async$Vy)
case 3:s=e
if(s==null||t.gdu()==null){w=1
break}t.d2(new C.erH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vy,v)},
Vs(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdu()==null){w=1
break}w=3
return B.b(S.CQ(t.a.c),$async$Vs)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gam(s)){t.c.K(x.q).f.U(D.f0j)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bS(null,null,new C.erE(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vs)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdu()==null){w=1
break}t.d2(new C.erF(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vs,v)},
as2(){var w=this,v=w.r
if(v==null||w.gdu()==null)return
if(A.d.b6(w.gdu().z,new C.et8(v))){w.c.K(x.q).f.U(D.f_k)
return}if(w.w===v)w.a1W(!0)
w.d2(new C.et9(w,v))},
bGG(){var w=this.jV(),v=w==null
if((v?null:w.b)===D.f4)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMZ(d,e){var w=this,v=w.jV(),u=w.gdu(),t=w.e
if(t==null)return
w.d2(new C.esl(w,v,d,e,t,u))},
bB5(d){return this.aMZ(d,null)},
a8k(d){return this.bBd(d)},
bBd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a70.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a8k)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jV()
if(s!=null){r=s.b
if(r===D.cQ)t.bB5(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f4){r=d.c
t.aMZ(r.j(0.88),r)}w=1
break}t.d2(new C.esq(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8k,v)},
a8j(d){return this.bBb(d)},
bBb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jV()
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
return B.b(t.o6(),$async$a8j)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.eso(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8j,v)},
bAW(d){var w=this.gdu()
if(w==null)return
this.d2(new C.esk(this,w,d))},
a_v(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iby(r),$async$a_v)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.evn(t,s))
w=4
return B.b(t.ty(),$async$a_v)
case 4:if(t.c!=null)t.aeQ(s)
case 1:return B.h(u,v)}})
return B.i($async$a_v,v)},
a9U(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1W(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.QY(s,q),$async$a9U)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9U,v)},
Dx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPH(m),$async$Dx)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aP7(o,q,m.b),$async$Dx)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dx,v)},
Fb(d,e){return this.cAL(d,e)},
cAL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fb=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qg()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1W(!0)
t.of()
s=h.a=t.e.hH()}else{r=A.d.bg(t.d,new C.exC(d))
s=h.a=r>=0?t.d[r].hH():d.hH()}s=s.w
q=s==null
p=C.i4U(q?"":s)
o=C.hnY(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a_<1>")
n=B.C(new B.a_(s,new C.exD(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cu0(n.length,o,s),$async$Fb)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i4O(h.a)
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
return B.b(t.cu_(n,o),$async$Fb)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h7(t.d,new C.exE(s))
s=h.a.b
w=11
return B.b(t.ctY(k.b,s),$async$Fb)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hH()
case 5:j=C.i4T(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.f0u)
w=1
break}w=12
return B.b(t.ctZ(j.a,s,o,j.c),$async$Fb)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.exF(h,t,i))
t.pj()
case 1:return B.h(u,v)}})
return B.i($async$Fb,v)},
cu0(d,e,f){var w=this.c
w.toString
return B.bS(A.K,null,new C.ex8(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cu_(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.ex7(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctY(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.ex1(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ctZ(d,e,f,g){var w=this.c
w.toString
return B.bS(A.K,null,new C.ex3(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abn(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abo(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.c_,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.az,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.faV,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a6,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUP(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.U4,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aUS(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.az,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nC,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a6,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BH,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eu1(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bXC(d,e,f,g,h,i){return this.aUS(d,e,f,!1,g,h,i)},
auo(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dj,w,w,w),A.bC,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Zu,w,w,w)},
aUR(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nA,w,w,w),new C.eu0(d,f),v)},
aUQ(d,e){return this.aUR(d,e,null)},
JS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p9(l,s.c,s.d),$async$JS)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aG("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f0(l,new C.ewU());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9K(l.charCodeAt(0)==0?l:l,r.b),$async$JS)
case 4:l=t.a
w=5
return B.b(B.p8(l.c,l.d),$async$JS)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JS,v)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p9(q,s.c,s.d),$async$HZ)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9K(A.S.ao(r.ah(),null),r.b+".json"),$async$HZ)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.d),$async$HZ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
b61(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.ty()
w=u.c
w.toString
v=B.e9(new C.exs(u,t),!1,null,x.z)
B.a6(w,!1).cm(v)},
Hd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Hd)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fHo(),$async$Hd)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i7G(s.a)
q=t.c
q.toString
w=5
return B.b(B.bS(A.ay,null,new C.erM(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hd)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d2(new C.erN(t,s))
w=1
break}if(p==="split")t.d2(new C.erO(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hd,v)},
Ne(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ne=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}w=3
return B.b(t.o6(),$async$Ne)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPG(s,null,null),$async$Ne)
case 4:r=e
if(r==null||t.gdu()==null){w=1
break}t.d2(new C.erS(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Ne,v)},
b2E(d){var w=this.e
if(w==null||!C.kx(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOh(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPG(s,t==null?null:B.b0(t),u)},
a80(d){return this.bzm(d)},
bzm(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a80=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f0J)
w=1
break}w=3
return B.b(t.aOh(),$async$a80)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d2(new C.erJ(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a80,v)},
ags(d){return this.cmS(d)},
cmS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ags=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f_S)
w=1
break}w=3
return B.b(t.aOh(),$async$ags)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d2(new C.evJ(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ags,v)},
c9y(){var w,v,u=this
if(u.kj())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bC(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.czM()}},
czM(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d2(new C.exA(this,r,(A.o.aB(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bXX(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d2(new C.eu4(this,r,u.d))},
c1B(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kx(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fE_(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c1C(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kx(w.w))!==!0)return!0
if(!this.zQ())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fE_(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nn(d){return this.bBD(d)},
bBD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eZI)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apy(p),$async$Nn)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.f_m)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a75(r)
w=1
break}t.m(new C.esu(t,d,o))
t.of()
$.aW.x1$.push(new C.esv(t))
case 1:return B.h(u,v)}})
return B.i($async$Nn,v)},
Vw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Vw)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCr(),$async$Vw)
case 4:s=e
if(s==null||t.gdu()==null){w=1
break}t.d2(new C.erG(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vw,v)},
O6(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$O6)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jV()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fHf(r),$async$O6)
case 4:q=e
if(q==null){w=1
break}t.d2(new C.etw(s,q))
case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
j3(d){this.d2(new C.erP(this,d))},
q6(d){return this.bAP(d)},
bAP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qg()){w=1
break}m=!D.aO_.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$q6)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hd()
w=1
break A
case"sign_paper":t.Ne()
w=1
break A
case"hd_photo":t.Vw()
w=1
break A
case"sharpen":t.O6()
w=1
break A
case"print":t.Dx()
w=1
break A
case"rotate":s=t.jV()
if(s!=null)t.d2(new C.erY(s))
w=1
break A
case"text_box":t.aMh()
w=1
break A
case"picture":t.Vy()
w=1
break A
case"present":t.b61()
w=1
break A
case"new_slide":t.a82()
w=1
break A
case"export_json":t.HZ()
w=1
break A
case"outline_share":t.JS()
w=1
break A
case"flashcard_tool":t.v9(D.I_)
w=1
break A
case"quiz_tool":t.v9(D.I0)
w=1
break A
case"worksheet_tool":t.v9(D.I1)
w=1
break A
case"duplicate_el":s=t.jV()
if(s==null){w=1
break A}t.d2(new C.erZ(t,s))
w=1
break A
case"delete_el":t.as2()
w=1
break A
case"bring_fwd":s=t.jV()
if(s==null||t.gdu()==null){w=1
break A}t.d2(new C.es_(t,s))
w=1
break A
case"send_back":s=t.jV()
if(s==null||t.gdu()==null){w=1
break A}t.d2(new C.esa(t,s))
w=1
break A
case"align_left":s=t.jV()
if(s!=null)t.d2(new C.esd(s))
w=1
break A
case"align_center":s=t.jV()
if(s!=null)t.d2(new C.ese(s))
w=1
break A
case"align_right":s=t.jV()
if(s!=null)t.d2(new C.esf(s))
w=1
break A
case"grayscale":case"brighten":t.O6()
w=1
break A
case"flip_h":s=t.jV()
if(s!=null)t.d2(new C.esg(s))
w=1
break A
case"flip_v":s=t.jV()
if(s!=null)t.d2(new C.esh(s))
w=1
break A
case"rectangle":t.p_(D.bg)
w=1
break A
case"circle":t.p_(D.eN)
w=1
break A
case"triangle":t.p_(D.jP)
w=1
break A
case"arrow":t.p_(D.CS)
w=1
break A
case"line":case"divider":t.p_(D.fs)
w=1
break A
case"word_count":r=t.gdu()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f0(q,new C.esi()),o=0;p.C();){n=A.a.fH(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.esj(),B.T(n).k("a_<1>")).gM(0)}t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.j3(C.iX(A.L,!1,t.gql().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mK,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.j3(C.iX(A.L,!1,t.gql().e.l(),A.aD,22,A.bo,A.a6,0.12,q,"Subtitle goes here",0,D.de,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j3(C.iX(A.bi,!0,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uv,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j3(C.iX(A.bi,!1,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.uu,0.8,0.1,0.22))
w=1
break A
case"quote":t.j3(C.iX(A.L,!1,4279310375,A.aD,24,A.cF,A.a6,0.25,C.cB(),'"Insert meaningful quote here."',0,D.de,0.8,0.1,0.3))
w=1
break A
case"citation":t.j3(C.iX(A.bi,!1,4284773515,A.aD,14,A.bo,A.a6,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.uv,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j3(C.iX(A.dN,!1,4279310375,A.aD,14,A.bo,A.a6,0.08,C.cB(),C.bCt(),0,D.de,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j3(C.iX(A.dN,!1,4279310375,A.aD,13,A.bo,A.a6,0.06,C.cB(),"Page "+(t.f+1),0,D.de,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d2(new C.es0(t))
w=1
break A
case"footer_bar":t.d2(new C.es1(t))
w=1
break A
case"highlight":t.d2(new C.es2(t))
w=1
break A
case"redact":t.d2(new C.es3(t))
w=1
break A
case"callout":t.d2(new C.es4(t))
w=1
break A
case"checkboxes":t.j3(C.iX(A.bi,!1,4279310375,A.aD,20,A.bo,A.a6,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.de,0.8,0.1,0.2))
w=1
break A
case"table":t.j3(C.iX(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.de,0.8,0.1,0.18))
w=1
break A
case"memo":t.d2(new C.es5(t))
w=1
break A
case"letter":t.j3(C.iX(A.bi,!1,4279179050,A.aD,17,A.bo,A.a6,0.82,C.cB(),C.bCt()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.de,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j3(C.iX(A.bi,!1,4279310375,A.aD,22,A.bo,A.P,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uv,0.8,0.1,0.12))
w=1
break A
case"toc":t.j3(C.iX(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.de,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j3(C.iX(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Signature: _________________________",0,D.de,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j3(C.iX(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Initials: ______",0,D.de,0.3,0.65,0.78))
w=1
break A
case"approved":t.j3(C.iX(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cB(),"APPROVED",0,D.mK,0.32,0.62,0.08))
w=1
break A
case"draft":t.j3(C.iX(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cB(),"DRAFT",0,D.de,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j3(C.iX(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.de,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d2(new C.es6(t))
w=1
break A
case"progress":t.d2(new C.es7(t))
w=1
break A
case"stars":t.j3(C.iX(A.L,!1,4279310375,A.aD,36,A.bo,A.a6,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.ql,0.8,0.1,0.4))
w=1
break A
case"equation":t.j3(C.iX(A.L,!1,4279310375,A.aD,32,A.bo,A.P,0.14,C.cB(),"y = mx + b",0,D.de,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j3(C.iX(A.L,!1,4279310375,A.aD,18,A.bo,A.a6,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uu,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d2(new C.es8(t))
w=1
break A
case"compare":t.d2(new C.es9(t))
w=1
break A
case"link_text":t.j3(C.iX(A.bi,!1,4280640491,A.mP,16,A.bo,A.a6,0.1,C.cB(),"https://example.com",0,D.de,0.8,0.1,0.5))
w=1
break A
case"phone":t.j3(C.iX(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.1,C.cB(),"(555) 123-4567",0,D.de,0.8,0.1,0.5))
w=1
break A
case"email":t.j3(C.iX(A.bi,!1,4280640491,A.aD,18,A.bo,A.a6,0.1,C.cB(),"name@email.com",0,D.de,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d2(new C.esb(t))
w=1
break A
case"cover_page":r=t.gdu()
if(r==null){w=1
break A}t.d2(new C.esc(t,r))
w=1
break A
case"invoice":t.j3(C.iX(A.bi,!1,4279179050,A.aD,16,A.bo,A.a6,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.de,0.8,0.1,0.08))
w=1
break A
case"resume":t.j3(C.iX(A.bi,!1,4279179050,A.aD,17,A.bo,A.a6,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.de,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j3(C.iX(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bCt()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.de,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j3(C.iX(A.bi,!1,4279310375,A.aD,17,A.bo,A.a6,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.de,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j3(C.iX(A.bi,!1,4279310375,A.aD,15,A.bo,A.a6,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.de,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q6,v)},
cts(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eSd.t(0,this.z)},
ctr(d){if(this.jV()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7F(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bE
u=B.I(u,A.q,o&&e?2:1)
t=C.i7v(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.O9,A.f,p,p,D.E7,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fC,B.aC(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bN4(d){var w,v=null,u=this.jV()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.QF,new C.etv(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v9(d){return this.bzu(d)},
bzu(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aNU.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$v9)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.erQ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eQV
w=h.e
if(w==null)return h.bDk()
v=h.gdu()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eG,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c_:D.bbE
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gS7()}else j=!1
if(j)k.push(new C.a7B(h.a.c,!1,h.e.gb9T(),h.gc9v(),g))
else if(s&&h.e!=null&&!h.kj()&&C.ceA(h.e.w)){j=h.a
k.push(new C.a7B(j.c,j.d,g,h.gcaE(),g))}if(s)k.push(h.bN0(w,t,r))
if(s&&h.kj()){w=t?A.fz:A.ks
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bNF,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fz,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Ba,A.ik,g,g,g))}w=!n
if(w&&!h.kj())k.push(h.c2x(t,r))
if(w&&h.kj())k.push(h.cAM(t))
if(r&&h.jV()!=null&&w&&!h.kj())k.push(h.c2t(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5v(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5v(t,!1),g))
i.push(B.E(new B.bI(A.b0,g,g,h.bEE(v,t,!s||p),g),1))
if(h.cts(r)&&u&&s&&!h.kj())i.push(h.c9i(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kj()&&h.ctr(!1))j.push(new B.a7(240,g,h.bPF(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c2u(t))
return B.c7(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bDk(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.c_:A.bL
v=r.a.e
u=r.c8y(A.bj,A.q1,new C.esy(r),r.gccO(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aM_(A.bj,A.hB,"Blank Presentation",new C.esz(r)),1),A.at,B.E(r.aM_(A.aZ,A.w_,"Class Template",new C.esA(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mO,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bAh(w))
else{t=new B.i1(t,B.T(t).k("i1<1>"))
A.d.v(u,t.gdL(t).dz(0,new C.esB(r,w),x.l))}return B.c7(q,p,B.bm(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLf(){this.m(new C.etb(this))
var w=this.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jL()}},
af8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jV()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.evm(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$af8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$af8,v)},
AO(d,e){return this.ctO(d,e)},
ctO(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hW(D.WP,!0,"Dismiss",j,new C.ewV(),new C.ewW(d,e),A.iF,!0,x.N),$async$AO)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiy()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gS7()){r.aiy()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPH(d),$async$AO)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aP7(j,q,d.b),$async$AO)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fb(d,!1),$async$AO)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hW(D.WP,!0,"Dismiss",j,new C.ewX(),new C.ewY(d),A.a1,!0,x.y),$async$AO)
case 20:if(g===!0)r.NT(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agb("Rename presentation",d.b),$async$AO)
case 24:l=g
if(l!=null)r.co6(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ewZ(r,k))
r.pj()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AO,v)},
b0v(d,e){var w=null
return B.bK(!1,D.fzA,w,w,!0,w,w,e,w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.aw,w,A.lQ,w,w,w,w,w,A.k9,w,w))},
bAh(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.erV(this,d),null)},
bJl(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.et_(),x.dv).c0(0,new C.et0()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahu,this.aMz(v,e,new C.et1(),f),null)},
aMz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ed)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bq,n,n,n,10),A.qt],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cl(A.aP,A.e,A.N,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.ni,n,n,n))
A.d.v(l,u)}return B.f7(A.a3,B.B(l,A.m,n,A.e,A.N,0,n,n),A.f,A.ei)},
bAf(d,e,f){return this.aMz(d,e,null,f)},
bJn(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dfv
else if(v==="hati_kuhoweya")w=D.d14
else{if(v==="hati_kiapo_uongozi")v=D.cON
else v=C.kx(v)?D.cVW:A.Qf
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.et4(this,f,d,e,w),null)},
c2u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jV()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wp(i)
v=k.at4(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bd,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.fvc,j,j,!0,j,j,new C.euv(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.ay:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h8,B.c_(new B.D(A.eR,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bTC,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.ww,j,j,j,j,j,j,!1,"\u2022",j,new C.euw(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zH,A.an,j,A.Tz,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.n(16)
p=d?A.bn:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.c8(B.B(B.a([k.tY(G.N9,j,new C.eux(k,i),d),k.tY(G.a_E,j,new C.euy(k,i),d),k.tY(K.alP,j,new C.euz(k,i),d),k.tY(K.a0j,j,new C.euA(k,i),d),k.tY(k.bAd(i.as),j,new C.euB(k,i),d),k.tY(D.amW,j,new C.euC(k,i),d),k.tY(D.amV,j,new C.euD(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aP),1)
m=A.k.N(i.w)
return B.bZ(0,B.aF(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(H.ahD,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ll,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c2t(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jV()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.n(18)
t=x.O
t=d?B.a([A.bn,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b49(A.jp,"Edit",new C.eug(o,m),d,!0))
if(w===D.lw)p.push(o.b49(A.Gu,"Shape & ring",new C.euh(o),d,!0))
p.push(o.tY(A.C_,"Format",new C.eui(o),d))
if(v)A.d.v(p,B.a([o.tY(G.N9,n,new C.euj(o,m),d),o.tY(D.amW,n,new C.euk(o,m),d),o.tY(D.amV,n,new C.eul(o,m),d)],q))
p.push(A.b7)
p.push(o.crB(A.e6,n,o.gaQC(),d,!0))
p.push(o.tY(A.ho,"Done",new C.eum(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bb,A.ll,n,n,n)},
bAd(d){switch(d.a){case 2:return D.a0g
case 1:case 5:return D.a0i
default:return D.a0h}},
c3m(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dN
default:return A.bi}},
azq(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.n(12)
u=B.n(12)
t=h?L.GN:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ed,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pX,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eH(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
tY(d,e,f,g){return this.azq(d,e,f,g,!1,!1)},
b49(d,e,f,g,h){return this.azq(d,e,f,g,h,!1)},
crB(d,e,f,g,h){return this.azq(d,e,f,g,!1,h)},
bN0(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bn,A.M],m):B.a([A.c,A.mY],m)
w=B.I(e?A.aJ:A.oD,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a2m(A.eE,"Back",p.gbGq(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.co,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bY:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tE,o,A.e,A.j,0,A.cY,o),1)],q)
if(!p.kj()){u=p.a2m(A.rm,"Undo",p.ax.length===0?o:p.gcBk(),e)
A.d.v(r,B.a([u,p.a2m(D.bHb,"Redo",p.ay.length===0?o:p.gcmO(),e)],q))}r.push(p.a2m(A.ya,"PDF",new C.eto(p),e))
r.push(p.a2m(A.hC,"Download as video",new C.etp(p),e))
if(!p.kj())r.push(B.BU(o,o,B.X(A.o6,e?A.ad:A.bq,o,o,o,o),new C.etq(p),A.J,new C.etr(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eH(D.eck,o,new B.o(o,o,o,B.n(14),o,L.GN,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAg(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.az,A.aC,A.x,m,o,o),A.n),o,o,o,D.bsn,D.bxv,o,o,o)},
cAM(d){var w=this,v=null,u=B.n(18),t=d?A.ay.j(0.92):A.c.j(0.96),s=B.I(d?A.ct:A.aL,A.q,1)
return B.p(v,B.c8(B.B(B.a([w.iN(A.u8,"Print",new C.exG(w),d),w.iN(A.ya,"Download PDF",new C.exH(w),d),w.iN(A.q7,"Present",w.gaAg(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aP),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Ba,G.ajh,v,v,v)},
a2m(d,e,f,g){var w,v=null
if(f==null)w=g?A.b_:A.dr
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c2x(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.ay.j(0.92):A.c.j(0.96)
u=B.I(d?A.ct:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.euG(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aiX,new B.fh(new C.euH(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vG,r.agP(A.lm,"Ending celebration",r.gcd0(),d),q),new B.D(R.vG,r.agP(A.Gu,"Logo ring & frame",r.gcdH(),d),q)],x.p):A.hb)
A.d.v(t,w?B.a([new B.D(R.vG,r.agP(A.nl,"Look and feel",r.gcdI(),d),q),new B.D(R.vG,r.agP(A.p_,"Edit this slide's text",r.gcee(),d),q)],x.p):A.hb)
t.push(new B.D(R.vG,B.hw(B.aC(q,B.p(q,D.eQk,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.li.j(0.4),A.J,10)],x.V),D.aoT,A.n),q,34,q,q,A.fY,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euI(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c8(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bxY,q,q,A.aP)
s=e?8:10
return B.p(q,B.x(B.a([t,B.c8(r.cpg(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aP)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Ba,q,q,q,q)},
cpg(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d94[v]
u.a=null
s=u.a=t.b
w.push(e.lK(e.cr_(s),t.a,new C.ew4(u,e),a3,D.aNU.t(0,s)))}w.push(e.iN(A.l_,"Notes Slide",new C.ew5(e),a3))
w.push(e.lK(A.Gt,"Quiz",new C.ew6(e),a3,!0))
w.push(e.lK(M.G3,"Worksheet",new C.ewh(e),a3,!0))
w.push(e.lK(V.Gw,"Flashcard",new C.ews(e),a3,!0))
w.push(e.lK(A.O_,"Lab Report",new C.ewD(e),a3,!0))
w.push(e.lK(A.u2,"Rubric",new C.ewK(e),a3,!0))
w.push(e.lK(A.oU,"Minutes",new C.ewL(e),a3,!0))
w.push(e.lK(A.o5,"Syllabus",new C.ewM(e),a3,!0))
w.push(e.lK(A.O5,"Timeline",new C.ewN(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dam[v]
w.push(e.lK(r.b,r.c,new C.ewO(e,r),a3,!D.aO_.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iN(A.yv,a0,e.gaMg(),a3),e.iN(A.u5,"Picture",new C.ew7(e),a3),e.iN(A.yp,"Bio link",new C.ew8(e),a3),e.iN(A.a0M,"Table",new C.ew9(e),a3),e.iN(A.O3,"Sticky",new C.ewa(e),a3),e.iN(A.u4,"Divider",new C.ewb(e),a3),e.iN(A.C0,"Header",new C.ewc(e),a3),e.lK(A3.vQ,"Rectangle",new C.ewd(e),a3,!0),e.lK(A.re,"Circle",new C.ewe(e),a3,!0),e.lK(A.a09,"Triangle",new C.ewf(e),a3,!0),e.lK(A.j1,"Arrow",new C.ewg(e),a3,!0),e.lK(D.bFE,"Parallelogram",new C.ewi(e),a3,!0),e.lK(D.bI9,"Hexagon",new C.ewj(e),a3,!0),e.lK(A.u4,"Line",new C.ewk(e),a3,!0),e.lK(A.ya,"PDF",new C.ewl(e),a3,!0),e.lK(O.a0W,"Signature",new C.ewm(e),a3,!0),e.iN(A2.BP,"Quote",new C.ewn(e),a3),e.iN(D.a_M,a1,new C.ewo(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aN5("Wide 16:9",D.CQ,a3),e.aN5("Short 9:16",D.of,a3),new B.D(A.fC,B.mJ(D.bKi,d,D.fry,d,new C.ewp(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bGF("This slide",!e.Q,a3,new C.ewq(e)),A.bp,e.aPh("All slides",e.Q,a3,new C.ewr(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bGG()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bY:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a6,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2K,new C.ewt(e),n),n.k("ak.E"))
n=B.c8(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dbn[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dr:A.b_,1.5,A.q,-1)
l.push(new B.D(A.fC,B.aC(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ewu(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.c8(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDK()
g=B.T(h).k("M<1,D>")
h=B.C(new B.M(h,new C.ewv(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.c8(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP),A.am,e.c_k(a3)],u),A.F,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.jV()
w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=new C.ew3(e)
t=new C.ewP(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QF,f.dy,new C.eww(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdu()
q=q==null?d:q.r
p.push(t.$4(D.QF,q,new C.ewx(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.x(p,A.F,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iN(A.l_,w,new C.ewy(e),a3),e.iN(A.u8,"Print deck",new C.ewz(e),a3),e.lK(D.akS,"Export JSON",new C.ewA(e),a3,!0),e.iN(A.fN,"Duplicate Slide",e.gaRv(),a3),e.iN(A.e6,a2,e.gaQD(),a3),e.cv8(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jV()
w=x.p
u=B.a([e.iN(D.a_M,a1,new C.ewB(e),a3),e.iN(A.fN,"Duplicate",e.gaRv(),a3),e.iN(A.e6,a2,e.gaQD(),a3),e.iN(A.q7,"Present",e.gaAg(),a3),e.iN(A.BZ,a0,e.gaMg(),a3),e.iN(A.BS,"Fit Text",new C.ewC(e),a3),e.iN(A.ya,"Download PDF",new C.ewE(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iN(A.kw,"Transfer",new C.ewF(e),a3))
if(f!=null){w=B.a([A.ab,e.iN(G.N9,"Bold",new C.ewG(e,f),a3),e.iN(G.a_E,"Italic",new C.ewH(e,f),a3),e.iN(G.akt,"Underline",new C.ewI(e,f),a3),e.iN(Ae.Na,"Bullets",new C.ewJ(e,f),a3),e.bPo(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bN4(a3))
w.push(e.iN(D.bEh,"Delete",e.gaQC(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aN5(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.of
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8z,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bJu],v))
return new B.D(A.fC,B.j9(t,t,t,B.B(u,A.m,t,A.e,A.N,0,t,t),t,new C.est(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cv8(d){var w,v,u,t,s,r=this,q=null,p=r.gdu()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b_:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.G1,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.anT,q,q,q,new C.exb(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.anK,q,q,q,new C.exc(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FI,A.mu,q,q,q)},
cr_(d){switch(d.a){case 6:return V.Gw
case 7:return A.Gt
case 8:return M.G3
case 4:return A.C0
default:return A.l_}},
bPo(d,e){var w=null,v=B.I(e?A.b_:A.cr,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.anT,w,w,w,new C.etB(this,d),w,w,w,w,w,A.ce),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.anK,w,w,w,new C.etC(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xU,A.mu,w,w,w)},
c_k(d){var w=null
return B.BU(B.Dj(B.X(A5.a_P,d?A.ad:A.bq,w,w,w,16),w,w,D.fx2,w,w,w),w,w,new C.eu8(),A.J,this.gbAV(),A.cp,"Slide layout",x.fO)},
lK(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dm:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.O9,A.f,w,w,D.E7,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fC,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eH(new B.D(A.h8,B.x(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bq,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iN(d,e,f,g){return this.lK(d,e,f,g,!1)},
b5v(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aP
v=B.hM(t,new C.exn(u,s,e,d),s.r.length,A.cp,t,w,new C.exo(e),!1)
s=d?A.ay:A.bL
w=B.a([],x.p)
if(e&&!u.kj())w.push(new B.D(A.cp,B.HF(E.ao5,new C.exp(u),B.nB(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aOE,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bEE(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.of?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b0,v,v,new B.fK(w,B.aC(v,B.cq(new C.esS(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.esT(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bEG(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kx(a9.w))===!0,b1=b0&&C.fE_(b3),b2=b0&&b3.b===D.l5&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kj())v=!b0||a7.c1C(b3)
else v=!1
if(!a7.kj())u=!b0||a7.c1B(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h1T(b3))o=a8
else if(p&&!a7.kj())o=a7.gc9x()
else o=a7.kj()?a8:new C.esG(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c7:A.jI
i=w&&C.h1T(b3)&&a7.zQ()?new C.esH(a7,b3):a8
h=v&&b3.b===D.cQ?new C.esI(a7,b3):a8
g=u?new C.esJ(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.c0:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c0.j(0.08)
else a0=b3.b===D.l5?A.K:a8
if(b1){a1=a7.kj()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c0.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zQ()
a3=b3.b===D.cQ
a4=a3?a7.Wp(b3):a8
a5=a3?a7.at4(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.esK(a7,b3):a8
a3=v&&a3?new C.esL(a7,b3):a8
a6=C.b0O(q,a4,a1,b3,a5,a2,a3,new C.esM(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aC(a8,B.p(a8,D.bMj,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esN(a7,b3,b4,b5),a8,a8,new C.esO(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kj()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bMY,A.f,a8,a8,new B.o(A.dy,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbXW(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kj()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bOw,A.f,a8,a8,new B.o(A.c0,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esP(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aC(a8,B.p(a8,D.fFR,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kX,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esQ(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aC(j,B.eJ(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPh(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bE,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.O9,A.f,r,r,D.E7,r,12,r,r,r,r,r,12)],s))
return B.aC(r,B.p(r,B.B(t,A.m,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bGF(d,e,f,g){return this.aPh(d,e,f,g,!1)},
c9i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aO),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.ay:A.aQ
t=f?A.wZ:l
if(f)s=new B.bO(new B.ay(e?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rH,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bq,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b0v(e,new C.euK(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bY:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dh),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.euL(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSN(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jV()
if(a2==null)return A.bI
w=new C.etP(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b0v(a3,a0.gbLe())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fs2,B.E(B.l0(a1,a1,a1,u,0.05,new C.etQ(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fEi,B.E(B.l0(a1,a1,a1,t,0.05,new C.etR(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.flP,B.E(B.l0(a1,a1,a1,96,10,new C.etS(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lw
if(l||n===D.l5||n===D.S_)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fxM,B.E(B.l0(a1,a1,a1,s,0,new C.etT(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fFz,B.E(B.l0(a1,a1,a1,r,0,new C.etU(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cf[j]
i.a=null
g=h.a
i.a=g
k.push(B.j9(a1,a1,a1,new B.y(h.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etV(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bB,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ca[j]
f.a=null
g=e.a
f.a=g
h.push(B.j9(a1,a1,a1,new B.y(e.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etW(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bW(A.bB,h,A.br,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.etX(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bB,l,A.br,6,6),A.ac,B.hdY(new C.etY(w,a2),D.cpT,B.ev([a2.as],k),!0,a1,k)],p))}if(n===D.f4){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.etZ(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bB,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bOi,D.fzL,new C.eu_(a0,a5),B.bn(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.ct:A.c
p=a4?A.wZ:a1
if(a4)o=new B.bO(new B.ay(a3?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rH,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fq,a1,a1,a1)},
bPF(d){return this.aSN(d,!1,!1,null)},
c8y(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.eu2(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fbP,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bC,A.cU,r.bAf(D.cTo,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dW(B.hw(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eH(D.eW9,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c0.j(0.4),A.em,8)],p),D.aoY,A.a5),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b8k,D.b8I],v):B.a([A.c,A.ks],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a8(A.az,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aM_(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.erC(this,g,d,e,f),null)},
agb(d,e){return this.cl1(d,e)},
cl1(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.evH(d,q),p,null,!0,!0,x.N),$async$agb)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
PK(d){var w=d.bU()
return""+B.bH(w)+"/"+B.bR(w)+"/"+B.bA(w)}}
C.af0.prototype={}
C.ayy.prototype={
S(){return new C.bcl(null,null)}}
C.bcl.prototype={
gcxm(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bk(u,A.pU,u,1,u,v)
w.fh(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bk(u,D.bqU,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.btC()},
IU(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.az(0,new B.hS(w,v,A.cu).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bwm,B.c6(new B.ha(B.a([u,w],x.dS)),new C.d0w(this),v),v),v,v,v)}}
C.bcz.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.av(new B.D(D.bwD,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.x(B.a([new B.D(D.bvO,B.x(B.a([B.p(w,D.bN3,A.f,w,w,new B.o(A.av.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fBS,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fcZ,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bpY,B.B(B.a([B.E(B.bK(!1,D.fqh,w,w,!0,w,w,new C.d0S(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nf,w,A.oj,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bn,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fvx,w,w,!0,w,w,new C.d0T(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.nf,w,A.oj,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.N,0,A.p),A.aq),A.f,w,A8.VD,new B.o(A.ay,w,u,v,D.cTJ,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JG.prototype={
S(){return new C.bck()}}
C.bck.prototype={
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
return B.dW(B.de(B.aC(o,B.vr(B.df(o,B.B(B.a([r,A.at,new B.dq(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f0:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.N,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,A.ng,o,o,1/0),A.cu,A.jk,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d0r(p,d),new C.d0s(p),new C.d0t(p),new C.d0u(p),o,o,o,!1,A.a7),k),new B.v(0,(1-k)*16))}}
C.Pq.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.az,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nC,v,v,v),A.bC,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_j.prototype={
S(){return new C.aE4(D.de,null,null)}}
C.aE4.prototype={
gYE(){var w,v=this,u=v.w
if(u===$){w=B.bk(null,D.bqu,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5W(d){if(!this.a.c.ay)return
this.x=d
this.gYE().iE(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avs(D.f1v)
C.i4r()
v.R9()},
q(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.gYE().q()
v=w.z
if(v!=null)v.a6(0)
C.avs(D.f1w)
C.i4u()
w.bvK()},
cA8(){B.jl()
this.m(new C.eym())
var w=this.c.K(x.q).f
w.a4u()
if($.bk6)w.U(D.eZn)},
R9(){var w,v=this,u=v.f
if(u!=null)u.a6(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dE(0,0,0,0,0,A.o.D(C.hc7(u,w),1,120)),new C.eyc(v))},
czO(){var w,v=this
v.m(new C.eyl(v))
if(v.r)v.R9()
else{w=v.f
if(w!=null)w.a6(0)}},
gaUI(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ctU(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.m(new C.eyd(w))
v=w.z
if(v!=null)v.a6(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lk,new C.eye(w))},
avW(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a6(0)
if(u.a.c.ch){u.m(new C.ey8(u))
u.R9()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUI()){u.ctU()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ey9(u,A.o.E(w+1,s)))
u.b5W(w)
u.R9()}},
cjG(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a6(0)
v.m(new C.eya(v))
v.R9()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eyb(v,w,t))
v.b5W(w)
v.R9()}},
cvk(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.nh(d,new B.cx(u,x.ac))}w=v.cvl(u)
u=v.d
u===$&&B.c()
return B.ql(new B.nh(d,new B.cx(u,x.ac)),w,new C.eyj(),A.bc,A.bc,new C.eyk(v))},
cvl(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bqQ
case 16:return A.ku
case 18:return A.nc
default:return A.nd}},
cvj(d,e,f){var w,v,u,t=null,s=B.cH(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uD,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sf,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.iq,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uC,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.eyf(s),e)
case 9:return B.c6(s,new C.eyg(s),e)
case 10:return B.c6(s,new C.eyh(s),e)
case 11:return B.c6(s,new C.eyi(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.is(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jA(B.jr(e,new B.bf(s,new B.bq(A.uD,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bra(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sf,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mN((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jO(v,u,v,1)
return B.fv(A.A,B.de(e,s.gp(0)),t,w,!0)
case 20:return B.eJ(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jA(new C.ao2(B.c6(n.gYE(),new C.eyn(n,v,w),m),m),A.r,m)}else{t=B.rB(new C.IE(w,!0,!1,m))
l=B.b0(w.e)
u=n.cvk(B.en(B.jA(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hc7(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.os,m,m,m),A.bp,D.bPl],k),A.m,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fL,m,m,m)
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
l.push(B.bZ(0,new C.Nk(new C.Et(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.of?0.5625:1.7777777777777777
l.push(B.av(new B.fK(r,B.jA(B.us(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bk6){r=B.HF(A.l2,new C.eyo(d),B.nB(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HF(B.X(n.r?Ak.yn:A.iJ,m,m,m,m,m),n.gczN(),B.nB(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hu,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fL,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aC(A.c7,B.p(A.ld,$.bk6?A.bI:s,A.f,m,m,m,m,64,m,m,D.brB,m,m,150),A.y,!1,m,n.gcA7(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aC(m,new B.an(A.W,m,A.b1,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eyp(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JN.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aiJ,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b16,w,w,w,w,w,w,w,w)}}
C.bra.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jR(d){return d.b!==this.b}}
C.bhd.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aYT
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w6,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hz,r,64,r,r,r,r,64)
return B.aC(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bhc.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.doc.h(0,p)
if(o==null)o=D.dax
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.an6:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ek,q,q,52)
return B.aC(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJM.prototype={
aT(){this.b1()
this.aZ()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aLO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.bwV.prototype={}
C.aLP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.b0R.prototype={}
C.VO.prototype={
S(){return new C.aE2()},
bgv(d){return this.e.$1(d)}}
C.aE2.prototype={
gb4f(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaah(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb4f()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNW(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4f()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5u(){return A.d.cJ(this.gaah(),0,new C.exT())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QK()},
QK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1r(s.c,s.f),$async$QK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.exP(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QK,v)},
IW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaah()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fHb(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p9(o,q.c,q.f),$async$IW)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.exS(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cm(q),$async$IW)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.f),$async$IW)
case 5:w=6
return B.b(t.QK(),$async$IW)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IW,v)},
R6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hD(o,D.e10,!0,"NgmySlidesTransferScan",x.N),$async$R6)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.exQ(t))
w=4
return B.b(C.aha(s),$async$R6)
case 4:r=e
t.m(new C.exR(t))
o=J.a4(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.eYg)
w=1
break}w=5
return B.b(t.a.bgv(r),$async$R6)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$R6,v)},
IV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaah()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p9(s,r.c,r.f),$async$IV)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fHq(null,A.d.gI(n),s,t.a.f)}else q=C.fHq(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Go(q,"ngmy_slides_"+p,!1),$async$IV)
case 4:o=e
s=t.a
w=5
return B.b(B.p8(s.c,s.f),$async$IV)
case 5:w=6
return B.b(t.QK(),$async$IV)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
a2x(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exU(t))
w=3
return B.b(C.bCb(),$async$a2x)
case 3:s=e
t.m(new C.exV(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bgv(s),$async$a2x)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a4(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2x,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bL,k=o.gaah().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.exY(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zF],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q1,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bPS,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bAD],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hw(B.aC(A.c7,D.eWb,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gceq(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1q,A.n),n,n,n,n,E.Zh,n,n,1/0),A.dY,o.ax5(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aX0(A.q7,m,new C.exZ(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aX0(D.bFw,m,new C.ey_(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.ax5(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.ay:A.c
t=B.n(16)
s=B.I(m?A.bE:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.M(u,new C.ey0(o,m),B.T(u).k("M<1,r>")))
A.d.v(w,v)}w.push(A.mO)
w.push(o.ax5(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apN(A.aN,k,!0,A.js,m,o.r,o.gc8C(),"Scan on another device","Show QR"),1),A.at,B.E(o.aM0(A.jY,!0,A.j2,m,o.gcqz(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.byK(A.aV,k,A.hC,m,o.r,o.gc8z(),"Download .json","Backup file"),1),A.at,B.E(o.aM0(A.aF,!0,Ax.yx,m,o.gcCA(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lo,A.bj.j(0.9),n,n,n,18)
r=o.gaNW()
q=o.gb5u()
p=o.gb5u()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bq,n,n,n,n,n,n,n,n,12,n,n,A.a6,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ag.ML,i,n),B.E(B.cw(w,n,D.buX,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VW,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afl(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.iaP(s,t.d,t.e),$async$afl)
case 2:return B.h(null,v)}})
return B.i($async$afl,v)},
ax5(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aX0(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.ay:A.c
if(g)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cA,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eH(new B.D(A.bA,B.x(B.a([t,A.R,u,A.bC,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bJm(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.ay:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bQ2,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eg:A.re
if(p)r=A.bj
else r=e?A.b_:A.dr
return new B.D(A.cw,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.exO(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
apN(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.ay:A.c
if(f)w=d.j(0.45)
else w=h?A.bE:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rc,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anE,A.f,s,s,D.b0T,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.de(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eH(new B.D(E.YW,B.x(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bC,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aM0(d,e,f,g,h,i,j){return this.apN(d,e,!1,f,g,!1,h,i,j)},
byK(d,e,f,g,h,i,j,k){return this.apN(d,e,!1,f,g,h,i,j,k)}}
C.VP.prototype={
S(){return new C.bk5()}}
C.bk5.prototype={
a_(){this.a1()
this.aec()},
aec(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aec=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fHq(null,A.d.gI(m),k,r.a.f):C.fHq(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kx(A.d.gI(n).w))C.fHb(A.d.gI(r.a.d),D.d8o)
n=r.a
m=n.c
n=C.i7L(n.d)
w=7
return B.b(C.fHp(p,C.i7Q(r.a.d),n,m,q),$async$aec)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ey1(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ey2(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aec,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.ey3())
v=B.aH(j,j,j,j,B.X(A.eE,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ey4(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zF],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dj,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1q,A.n),j,j,j,j,E.Zh,j,j,1/0)
q=B.n(24)
s=B.I(A.aN.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7U,A.L,j,j))
else if(k.d==null)r.push(D.ebU)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fqK,A.am,B.aC(j,B.p(j,B.B(B.a([D.bRA,A.at,B.d(m,j,j,j,j,j,j,D.fdn,j,j,j)],u),A.m,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bWn,A.n),j,j,j,j,A_.aiv,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ey5(k,d),j,j,j,j,j,j,!1,A.a7),A.O,D.fv3,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bE,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pS(j,j,!1,l,j,!0,!0,j,!1,D.bmb),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hg,A.L,j,j))
return B.c7(j,h,B.bm(!0,B.x(B.a([new B.D(Ag.ML,v,j),B.E(B.c8(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bYj,A.n),j,j,j,j,A.tT,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aiO,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aE_.prototype={
S(){return new C.aE0(new B.as(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1))}}
C.aE0.prototype={
a_(){var w=this
w.a1()
w.e.aQ(0,new C.erw(w))
$.aW.x1$.push(new C.erx(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZG(){var w,v=this.c
v.toString
w=C.yA(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eG,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uB,36),D.abz],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bN6,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fnS,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a6,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b1j,k,k,k,k,A.xT,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.ay:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bh,B.df(A.A,new B.y(p,k,D.f6Z,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hz,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J_)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.de(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bUk,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uj(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bq(5,k),new C.bur()],x.aS),k,k,A.aPT,k,5,k,1,k,k,!1,"\u2022",k,new C.ers(l),k,new C.ert(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m5,k,k,k,k),0),0,0,0)],a1)
d=C.yA(w.a.a.toUpperCase())==null?k:l.gc8D()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ad.Kr,B.p(k,B.bw(e,B.x(B.a([a0,new B.D(D.bvr,B.x(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.R,D.fme,A.by,new B.a7(1/0,50,B.bG(D.fCL,d,B.bn(A.bj,A.bn,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nD,k,k,!0,k,k,new C.eru(a2),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.bur.prototype={
oz(d,e){var w=e.a.toUpperCase()
return e.cIO(B.hg(A.bw,w.length),w)}}
C.aqW.prototype={
S(){return new C.aE3(B.ze(A.M2,A.nK,A.ui))}}
C.aE3.prototype={
q(){this.d.q()
this.a2()},
aZF(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iQ(w,d)},
aab(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aab=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fQ3(s),$async$aab)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZF("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aab,v)},
c8B(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.i7O(w[u])
if(t!=null){this.aZF(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.w3,s,s,s,t.gbNA(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.X(q?A.rh:Al.NH,s,s,s,s,s),s,s,s,new C.ey7(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fDZ,s,s,s,1,s,!0)
r=B.zd(t.d,A.bV,t.gc8A())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c7(p,A.w,new B.an(A.W,s,A.b1,A.r,B.a([r,w,B.ao(32,B.p(s,D.frO,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buD.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,H.ani,A.f,w,w,D.b12,w,56,w,w,w,w,w,56),A.aR,D.fDF,A.am,new B.jM(this.c,new C.f8L(),w,w,x.cI),A.aR,new B.jM(this.d,new C.f8M(),w,w,x.cl),A.ac,D.fDC],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,Ad.Kr,new B.o(A.ay,w,u,v,w,w,A.n),w,w,w,L.Zo,D.bw4,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7B.prototype={
S(){return new C.bjP(A.bx)},
gde(){return this.c}}
C.bjP.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZR()
w.d=B.dt(A.fX,new C.efG(w))},
q(){var w=this.d
if(w!=null)w.a6(0)
this.a2()},
ZR(){return this.cmV()},
cmV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.efE(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bC(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ceB(p.c),$async$ZR)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.efF(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZR,v)},
bPw(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aV(A.o.u(w),2,"0")+"m "+A.a.aV(A.o.u(v),2,"0")+"s left"
return A.a.aV(A.o.u(w),2,"0")+":"+A.a.aV(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.av:A.c0
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.G1,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bPw(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ahy,A.ik,r,r,1/0)}}
C.a8t.prototype={
ne(){var w,v,u,t=this
t.xc()
w=t.cx
v=t.c
w.bqg(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pY(B.F(["/S",D.efz,"/URI",new B.rw(B.Wm(w.as),A.uE,!0)],x.N,u),u))}}
C.a8u.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2u.prototype={
bxN(d,e,f,g,h,i,j,k,l,m){var w=B.ev([D.edS],x.di)
this.w!==$&&B.aP()
this.w=w},
gcM6(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jR(w,new C.cgN(),B.a3(w).k("jR<co.E,G>")).ff(0,new C.cgO())},
aCD(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tx(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.tx(H.apn))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h1(t.gcM6()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pY(w,x.Y))}}
C.cgP.prototype={}
C.a2F.prototype={}
C.ai2.prototype={}
C.aQR.prototype={
h3(d){var w,v,u,t,s,r,q=this,p=null
q.lk(d)
q.LS(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfT(w)
u=x.N
t=x.Y
s=new C.cgP(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bxN(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pY(B.F(["/Type",D.efx],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8t(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awq.prototype={}
C.aSm.prototype={
h3(d){var w,v,u,t,s=this
s.lk(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.ia()
t=s.a
t.toString
u.L_(t)
u.Sn(0)
u.oU(0,v)
w.h3(d)
u.nh(0)}}}
var z=a.updateTypes(["aA<~>()","~(lG)","R(i3)","~()","R(eM)","R(ok)","R(lG)","~(i3)","R(eM,eM)","JN(Y)","R(nL)","R(ld)","aA<R>()","G(G,i3)","a5<m,@>(i3)","ai<zx>()","m(nL)","R(a7S)","m(lG)","m(w_)","R(EC)","G(i3,i3)","m(eM)","r(eM)","cL(eM)","r(hE)","~(hE)","eM(uH,L,L,L,L,G{fx:m,key:m,rotation:L})","eM(m,L,G)","G(ok,ok)","R(zx)","R(m,ai<zx>)","a5<m,@>(ok)","nL()","Yq(Y)","eM(m,L,L,L,L,L{align:q3,anim:hE,bullets:R,color:G?,delay:G,fx:m,key:m,style:HA,weight:oU})","a0G(Y)","eM(m,L,L,L,L{anim:hE,delay:G,fx:m,key:m})","aA<~>(ok)","R(mt)","Yo(Y)","a0d(Y)","a0c(Y)","Pg(Y)","Zz(Y)","eM(uH,L,L,L,L,G,m,m{anim:hE,delay:G,rotation:L,stroke:G,strokeWidth:L})","eM(m,L,L,L,L,L,m,m,G)","eM(L,L,m,G{size:L})","r(rk,L,L)","ld()","ok(a5<@,@>)","~(ux)","EC()","fg(eM)","r(j0)","Z7(Y)","~(Et)","Zs(Y)","G(eM,eM)","eM(eM)","a5<m,@>(eM)","eM(a5<@,@>)","lG(lG)","a5<m,@>(lG)","lG(a5<@,@>)","R(jH)","jH()","m(i3)","~(ai<ok>)","S(ai<i3>)","S(i3)","ai<i3>(m?)","acw(Y,G)","~(R(eM,eM))","ada(Y)","aeR(Y,G)","w(lG,R)","VA(Y)","add(Y)","VD(Y)","~(mx)","i3(i3)","L(eM)","a_H(Y)","a_j(Y)","i3()","ai<EY>()","aA<~>(ai<i3>)","r(bv<G,i3>)","D(jH)","D(EC)","aA<~>(hE,~())","r(ai<hE>,hE?,~(hE),w)","R(m7)","ai<jq<mx>>(Y)","jq<mx>(mx)","i3(a5<@,@>)","VO(Y)","eM(m,L,L,L,L,L,G{align:q3,style:HA,weight:oU})","VP(Y)","r(i3)","~(m0)","IE(Y,lG,r?)","G(a8u)","aA<ai<a5<m,@>>?>()","m(m)","aA<zv>({paper:m?,photo:dL?,request:m,template!lg})","aA<a7K>({doc!zv,history:ai<+(m,m)>,instruction!m,photo:dL?,template!lg})","ad7(Y)"])
C.cEO.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cEP.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cEQ.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajU(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mu(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:76}
C.cER.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOA.prototype={
$1(d){return J.f_(A.dD.gaP(d),d.byteOffset,d.byteLength)},
$S:1665}
C.fu_.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iK(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iK(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iK(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iK(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1666}
C.bZk.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:27}
C.bZl.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bZn.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fK7.prototype={
$1(d){return new C.a0G(this.a,this.b,C.i8G(),null)},
$S:z+36}
C.f7d.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f7h.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f7i.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f7j.prototype={
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
C.f7e.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f7f.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f7g.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f78.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hG,w,w,w)
return B.em(B.a([B.bK(!1,D.fqd,w,w,!0,w,w,new C.f76(d),w,w),B.bK(!1,D.fpi,w,w,!0,w,w,new C.f77(d),w,w)],x.p),w,w,D.XL,v,w,w,w,w,D.fEh,w)},
$S:20}
C.f76.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f77.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f79.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f7a.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f7n.prototype={
$0(){var w=this.a
return w.m(new C.f7m(w,this.b))},
$S:0}
C.f7m.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f7c.prototype={
$0(){var w=this.a
return w.m(new C.f7b(w,this.b,this.c))},
$S:0}
C.f7b.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f7k.prototype={
$0(){return this.a.a0Y(this.b)},
$S:0}
C.f7l.prototype={
$0(){return this.a.OY(0,this.b)},
$S:0}
C.f7q.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f7r.prototype={
$0(){var w=this.a
return w.m(new C.f7p(w,this.b))},
$S:0}
C.f7p.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f7o(),B.T(w).k("M<1,m>")))}},
$S:0}
C.f7o.prototype={
$1(d){return d.a},
$S:z+67}
C.fep.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h9m(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cC)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.ok(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.feq.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fwO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbr())q=n===o.gbr()&&p.b>o.gcC()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fwM.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fwN.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fJC.prototype={
$1(d){return d.ah()},
$S:z+32}
C.ftE.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fKt.prototype={
$1(d){return new C.Yq(this.a,null)},
$S:z+34}
C.cG9.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cGb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGe.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGf.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGd())},
$S:11}
C.cGd.prototype={
$0(){},
$S:0}
C.cGg.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1F(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cGc(r))
if(p<0)q.cj(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahj(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:274}
C.cGc.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGh.prototype={
$1(d){},
$S:28}
C.cGa.prototype={
$1(d){return new C.Yo(this.b,this.a.gcwI(),null)},
$S:z+40}
C.cGi.prototype={
$1(d){return D.h0F},
$S:z+43}
C.cG5.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.Xq,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bvR,B.x(B.a([B.p(w,D.bKj,A.f,w,w,new B.o(A.av.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aR,D.foi,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fcn,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pY,B.B(B.a([B.E(B.dV(D.fv5,new C.cG3(d),B.di(w,w,w,w,w,w,w,w,w,E.n5,w,w,A.cm,w,new B.b7(B.n(14),A.Y),D.aZj,w,w,w,w)),1),A.at,B.E(B.bG(D.fB0,new C.cG4(d),B.bn(A.bz,w,w,w,w,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.N,0,A.p),A.f,w,A.x1,new B.o(D.adf,w,u,v,D.cYf,w,A.n),w,w,w,L.Zo,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1667}
C.cG3.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cG4.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cG6.prototype={
$0(){return J.nt(this.a.d,new C.cG2(this.b))},
$S:0}
C.cG2.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cG1.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.Xq,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bPe,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aoT,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRy,t,t,t),A.bC,D.fAX],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.djj[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axj(u[1],u[2],u[3],new C.cG_(v,d),!1,t))}q.push(A.am)
q.push(D.bq0)
q.push(A.am)
q.push(new C.axj(A.e6,"Delete book","Remove it from this device",new C.cG0(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.F,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.adf,t,r,s,t,t,A.n),t,t,t,A.tP,E.Z1,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cG_.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cG0.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cG8.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aHf,12)],x.V)
return B.dW(B.eJ(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.f7(A.A,F.anU(d),A.f,A.dv),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cG7.prototype={
$0(){return this.a.c3c()},
$S:0}
C.cFZ.prototype={
$0(){return this.a.aY9(0,this.b)},
$S:0}
C.cFY.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cFX.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGj.prototype={
$2(d,e){var w=this.a
return w.bCi(J.q(w.d,e))},
$S:42}
C.cFq.prototype={
$0(){var w=this.a
if(w.c!=null)w.AJ()},
$S:0}
C.cFp.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b08("Page "+(v.length+1),"",""))},
$S:0}
C.cFs.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cFA.prototype={
$0(){},
$S:0}
C.cFB.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:9}
C.cFt.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cV.gcB().aK(this.c)},
$S:0}
C.cFr.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFv.prototype={
$0(){return this.a.Qh(this.b)},
$S:0}
C.cFw.prototype={
$0(){return this.a.Qh(this.b)},
$S:0}
C.cFx.prototype={
$0(){var w=this.a
w.m(new C.cFu(this.b))
w.E0()},
$S:0}
C.cFu.prototype={
$0(){return this.a.c=""},
$S:0}
C.cFz.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cFy(w,d))
w.E0()},
$S:z+51}
C.cFy.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFG.prototype={
$2(d,e){if(d)this.a.AJ()},
$S:119}
C.cFC.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AJ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.f_M)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cFD.prototype={
$0(){return this.a.aX7(this.b,-1)},
$S:0}
C.cFE.prototype={
$0(){return this.a.aX7(this.b,1)},
$S:0}
C.cFF.prototype={
$0(){return this.a.c4s(0,this.b)},
$S:0}
C.fBh.prototype={
$1(d){return C.hjk()},
$S:45}
C.fBi.prototype={
$1(d){return null},
$S:28}
C.fiP.prototype={
$1(d){return null},
$S:28}
C.fCg.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:317}
C.fCf.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:247}
C.fCm.prototype={
$1(d){var w=this.a
return C.h1K(d)===w||C.hnU(d)===w},
$S:z+4}
C.fhS.prototype={
$1(d){return A.a.aV(A.o.u(d),2,"0")},
$S:83}
C.c8U.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBf.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fBg.prototype={
$1(d){return C.fE_(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fw9.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvH,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GE,D.fpU,new C.fw7(d),B.bn(A.c0,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.R,B.eD(A.w2,D.fwX,new C.fw8(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fw7.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fw8.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwa.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,D.fm6,w,w,!0,w,w,new C.fw5(d),w,w),B.bG(D.fDi,new C.fw6(d),w)],x.p),w,w,w,D.fFc,w,w,w,w,D.fm_,w)},
$S:20}
C.fw5.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fw6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eau.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.eas.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eat.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eav.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eaw.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fCl.prototype={
$1(d){return A.a.aV(A.o.u(d),2,"0")},
$S:83}
C.fCh.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bf(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1668}
C.fCj.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fdA,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:141}
C.fCk.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i1,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dW(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i1,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1669}
C.fCi.prototype={
$2$female$size(d,e){var w=null,v=d?D.afb:this.a,u=B.I(A.i1,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adu,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1670}
C.fNV.prototype={
$1(d){return new C.ad7(this.a,this.b,null)},
$S:z+108}
C.dYr.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bmH:A.Lx,q=B.I(D.jf.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c0.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.anD,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jf.j(0.35),A.em,10)],x.V),D.bYV,A.n),t,t,t,t,A.xJ,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(I.Zd,B.x(B.a([p,A.aB,B.B(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jf,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fcQ,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aOV,new C.dYq(w,this.c),v,D.aiq,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mc,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dYq.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acw(w,new C.dYp(this.b,w),null)},
$S:z+72}
C.dYp.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fwd.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fwe.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fz6,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GE,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwb(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eD(A.o8,D.Ub,new C.fwc(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwb.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwc.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwh.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fwi.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fn5,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GE,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwf(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eD(A.o8,D.Ub,new C.fwg(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwf.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwg.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwl.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fwm.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.ftv,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GE,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwj(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eD(A.o8,D.Ub,new C.fwk(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwj.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwk.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fPn.prototype={
$1(d){return D.h4K},
$S:z+74}
C.efJ.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.beo:A.Lx,s=B.I(A.ax.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.ax.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bRw,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c0.j(0.35),A.em,10)],x.V),D.aoY,A.n),v,v,v,v,A.xJ,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(I.Zd,B.x(B.a([r,A.aB,B.B(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lu,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bC,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fak,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aOV,new C.efI(this.b),19,D.aiq,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mc,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.efI.prototype={
$2(d,e){var w=D.QV[e]
return new C.aeR(w,new C.efH(this.a,w),null)},
$S:z+75}
C.efH.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fE3.prototype={
$0(){return B.h0G(C.hXa(this.a))},
$S:291}
C.fE2.prototype={
$0(){var w=C.h22(this.a)
return"data:image/png;base64,"+A.cV.gcB().aK(w)},
$S:22}
C.ffY.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1C(this.a,C.fB(4291404327),v)},
$S:663}
C.fPy.prototype={
$1(d){return new C.VA(this.a,null)},
$S:z+77}
C.ej0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ej_())},
$S:30}
C.ej_.prototype={
$0(){},
$S:0}
C.ej1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eiZ(w,d))},
$S:1672}
C.eiZ.prototype={
$0(){return this.a.x=J.eU(A.dD.gaP(this.b))},
$S:0}
C.ej2.prototype={
$1(d){},
$S:28}
C.eiD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiK.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eiL.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.epv)},
$S:0}
C.eiM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiF.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c8)},
$S:0}
C.eiG.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.eiH.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.eiI.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiJ.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.md(v,A.dV,A.ih)}},
$S:9}
C.eiE.prototype={
$0(){var w=this.a,v=w.z,u=C.fEH(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cHW(C.fEH(t))},
$S:0}
C.eiB.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eiC.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiS.prototype={
$0(){return B.a6(this.a,!1).lz()},
$S:0}
C.eiT.prototype={
$0(){var w=this.a
return w.m(new C.eiR(w))},
$S:0}
C.eiR.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eiU.prototype={
$0(){var w=this.a
return w.m(new C.eiQ(w,this.b))},
$S:0}
C.eiQ.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.eiV.prototype={
$1(d){var w=this.a
return w.m(new C.eiP(w))},
$S:8}
C.eiP.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eiW.prototype={
$1(d){var w=this.a
return w.m(new C.eiO(w))},
$S:8}
C.eiO.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eiX.prototype={
$0(){var w=this.a
return w.m(new C.eiN(w,this.b))},
$S:0}
C.eiN.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.eiY.prototype={
$1(d){return this.a.ZD()},
$S:2}
C.eiA.prototype={
$0(){return this.a.c7T(this.b)},
$S:0}
C.ccA.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cQ(w.h(0,d))):null},
$S:334}
C.ccy.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ccz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDE.prototype={
bkZ(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOz(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cEr($.qU().jG(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mJ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkZ(d,e)},
$S:1673}
C.fBW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBY.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:83}
C.fBX.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h3(t,t,t,t,B.d3(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qw,A.c6,t,A.dP,A.c5)
v=this.a
w.wD(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:33}
C.ffy.prototype={
$1(d){var w=A.a.fH(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.ffz(),B.T(w).k("a_<1>")).gM(0)},
$S:253}
C.ffz.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffw.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.ffx.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.ccB.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazV()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h1J(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZy(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcg3(),"\n\n")
d=B.h3(a6,a6,a6,a6,B.d3(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ae1(k,q,1.28),j),A.qw,A.c6,a6,A.dP,A.c5)
d.wD(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h1J(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZy(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ae1(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bh,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qw,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azU(s,j))
i.push(new B.a7(s,a6,B.x(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:387}
C.ccC.prototype={
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
n=o.gazV()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h1J(f,new B.H(!0,e,a5,i,a5,a5,h,A.cN,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fZy(g.length===0?B.a([a6],n):g,l))break}a1=o.ae1(i,h,1.28)
a2=new C.ccD(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.IZ,new B.a7(v,a5,a4.f,a5),A.IZ,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.by9,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bh,new B.y(l[2+a3],a5,a1,a5,A.qw,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azU(r,g))
f.push(new B.a7(r,a5,B.x(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.ccD.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qw,w,w),w)},
$S:1674}
C.fPB.prototype={
$1(d){return new C.VD(this.a,this.b,null)},
$S:z+79}
C.ekb.prototype={
$1(d){return d.m3()},
$S:1675}
C.ekc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eka(w,d))},
$S:1676}
C.eka.prototype={
$0(){var w=this.b
return this.a.d=w.gfw(w)},
$S:0}
C.ejZ.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ek_.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ek5.prototype={
$0(){return B.a6(this.a,!1).eF()},
$S:0}
C.ek6.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bD,A.q,2.5)
return B.aC(w,B.p(w,B.b3(w,w,w,new C.bby(u,v.gawZ(),w),A.f5),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ek3(v),new C.ek4(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:35}
C.ek3.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:272}
C.ek4.prototype={
$1(d){var w=this.a
w.m(new C.ek0(w,d,this.b,this.c))},
$S:222}
C.ek0.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawZ()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ek7.prototype={
$1(d){var w=this.a
return w.m(new C.ek2(w,this.b))},
$S:8}
C.ek2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ek8.prototype={
$1(d){var w=this.a
return w.m(new C.ek1(w,d))},
$S:6}
C.ek1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ek9.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fPR.prototype={
$1(d){return D.h7x},
$S:z+83}
C.eTM.prototype={
$1(d){return this.a.Yi()},
$S:9}
C.eSE.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cV.gcB().aK(v)},
$S:0}
C.eT1.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eTb.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eSn.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eSo.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eSl.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eSm.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eSV.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eSW(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jA(B.rB(p>0.2?C.fUj(q,B.a4V(p,p,A.x)):q),A.r,u)],x.p)
w=s.bk
if(w>0.02){v=B.a4V(12,12,A.x)
p.push(B.jA(B.de(B.rB(C.fUj(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b0>0)p.push(B.en(u,B.b0(r).j(s.b0),!0))
r=s.bb
if(r!=null&&s.bK>0){r=B.b0(r).j(s.bK)
w=s.bb
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aXA,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aF
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aXl,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aM
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aM)],x.O),D.cWR,u),A.n),A.bf))
if(s.aD>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aD),A.w.j(s.aD),A.w.j(0)],x.O),D.d6Q,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.en(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d3V,u),A.n),A.bf))
s=s.aA
if(s>0)p.push(B.b3(u,u,u,new C.bf6(s,u),A.aw))
return new B.an(A.W,u,A.b1,A.r,p,u)},
$S:62}
C.eSW.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fP(r.b,A.A,q,q,A.ci,A.bV,!0,q,!1,q,q),o=r.a,n=o.aWK(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c5,l=m*3.141592653589793/180
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
s=o.c6?-1:1
return B.dW(B.ef(A.A,B.eJ(A.A,l,B.fv(A.A,new B.Dm(new B.yU(q,q,n,A.Aw),p,q),q,B.vN(s,o.cI?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.eT7.prototype={
$0(){return this.a.m(new C.eT6(this.b,this.c))},
$S:0}
C.eT6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eT8.prototype={
$1(d){return this.a.m(new C.eT5(this.b,d))},
$S:6}
C.eT5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTa.prototype={
$0(){return this.a.m(new C.eT9(this.b,this.c))},
$S:0}
C.eT9.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSd.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eSe.prototype={
$1(d){var w=this.a
return w.m(w.gcy6())},
$S:2}
C.eSf.prototype={
$1(d){return this.a.m(new C.eSc())},
$S:2}
C.eSc.prototype={
$0(){},
$S:0}
C.eSg.prototype={
$0(){var w=this.a
return w.m(new C.eSb(w,this.b))},
$S:0}
C.eSb.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eSi.prototype={
$2(d,e){return A.at},
$S:36}
C.eSh.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bE
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b4,A.x,r,w,w),A.n),A.hz,w,94,w,w,w,w,70)
return B.aC(w,new B.a7(70,w,B.x(B.a([r,A.fQ,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSa(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:78}
C.eSa.prototype={
$0(){var w=this.a
return w.m(new C.eS7(w,this.b))},
$S:0}
C.eS7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eSj.prototype={
$1(d){var w=this.a
return w.m(new C.eS9(w,d))},
$S:8}
C.eS9.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eSk.prototype={
$1(d){var w=this.a
return w.m(new C.eS8(w,d))},
$S:8}
C.eS8.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eTB.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:33}
C.eTI.prototype={
$1(d){var w=this.a
return w.m(new C.eTJ(w,d))},
$S:29}
C.eTJ.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eb(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eTK.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eTC.prototype={
$0(){var w=this.a
return w.m(new C.eTA(w,this.b))},
$S:0}
C.eTA.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eTD.prototype={
$0(){var w=this.a
return w.m(new C.eTz(w,this.b))},
$S:0}
C.eTz.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eTE.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eTy(v,w.b,w.c,w.d))},
$S:0}
C.eTy.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eTF.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grF(v))},
$S:0}
C.eTG.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eTH.prototype={
$0(){var w=this.a
return w.m(new C.eTx(w))},
$S:0}
C.eTx.prototype={
$0(){var w=this.a.db
return A.d.h6(w,0,w.length,0)},
$S:0}
C.eTk.prototype={
$1(d){return d.a===this.a.dy},
$S:208}
C.eTl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ax2[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ax2(new B.nb(new B.bp(n,n,n,n),A.aq,new B.kR(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.aZJ(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eTj(r,v),2,i))}return B.bW(A.bB,h,A.br,7,7)},
$S:174}
C.eTj.prototype={
$0(){var w=this.b
return w.m(new C.eTe(this.a,w))},
$S:0}
C.eTe.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eTm.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:217}
C.eTp.prototype={
$0(){var w=this.a
return w.m(new C.eTi(w))},
$S:0}
C.eTi.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eTq.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eTr.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eTs.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eTt.prototype={
$0(){var w=this.a
return w.m(new C.eTh(w))},
$S:0}
C.eTh.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eTu.prototype={
$0(){var w=this.a
return w.m(new C.eTg(w))},
$S:0}
C.eTg.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eTv.prototype={
$0(){var w=this.b
return w.m(new C.eTf(this.a,w))},
$S:0}
C.eTf.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eTw.prototype={
$1(d){return this.a.fx=d},
$S:217}
C.eTn.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eTo.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eSZ.prototype={
$0(){var w=this.a
return w.m(new C.eSY(w))},
$S:0}
C.eSY.prototype={
$0(){var w=this.a
w.p4=null
w.b2X()},
$S:0}
C.eT_.prototype={
$0(){var w=this.a
return w.m(new C.eSX(w,this.b))},
$S:0}
C.eSX.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eT0.prototype={
$0(){var w=this.a
return w.m(w.gcoy())},
$S:0}
C.eSR.prototype={
$0(){var w=this.a
return w.m(new C.eSQ(w))},
$S:0}
C.eSQ.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eSS.prototype={
$0(){var w=this.a
return w.m(new C.eSP(w))},
$S:0}
C.eSP.prototype={
$0(){var w=this.a
w.aD=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eST.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d4j[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.ax2(new B.nb(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dm(new B.yU(o,o,v.aWK(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Aw),B.fP(u,A.A,140,o,A.ci,A.bV,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eSO(v,s),3,n))}return B.bW(A.bB,m,A.br,10,8)},
$S:174}
C.eSO.prototype={
$0(){var w=this.a
return w.m(new C.eSN(w,this.b))},
$S:0}
C.eSN.prototype={
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
C.eSv.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eSw.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eSx.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eSy.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eSz.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eSA.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eSB.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eSC.prototype={
$1(d){return this.a.aD=d},
$S:6}
C.eSD.prototype={
$1(d){return this.a.aM=d},
$S:6}
C.eRR.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eRS.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eRT.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eRU.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eRV.prototype={
$0(){var w=this.a
return w.m(new C.eRQ(w))},
$S:0}
C.eRQ.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eRW.prototype={
$1(d){return this.a.b3=d},
$S:217}
C.eRX.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eSp.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eSq.prototype={
$1(d){return this.a.bk=d},
$S:6}
C.eSr.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eSs.prototype={
$1(d){return this.a.bb=d},
$S:217}
C.eSt.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.eS0.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.eS1.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eS2.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.eS3.prototype={
$1(d){return this.a.c5=d},
$S:6}
C.eS4.prototype={
$0(){var w=this.a
return w.m(new C.eS_(w))},
$S:0}
C.eS_.prototype={
$0(){var w=this.a
return w.c5=A.k.E(w.c5+90+180,360)-180},
$S:0}
C.eS5.prototype={
$0(){var w=this.a
return w.m(new C.eRZ(w))},
$S:0}
C.eRZ.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.eS6.prototype={
$0(){var w=this.a
return w.m(new C.eRY(w))},
$S:0}
C.eRY.prototype={
$0(){var w=this.a
return w.cI=!w.cI},
$S:0}
C.eSU.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ibs(v,w.p4)},
$S:0}
C.eSM.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bn0:B.fP(v,A.A,w,w,A.ci,A.bV,!1,w,!1,w,w)
return C.fC3(d.length===0?"rounded":d,u,e)},
$S:135}
C.eSI.prototype={
$0(){var w=this.a
return w.m(new C.eSH(w))},
$S:0}
C.eSH.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eSJ.prototype={
$0(){var w=this.b
return w.m(new C.eSG(this.a,w))},
$S:0}
C.eSG.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eSK.prototype={
$0(){var w=this.b
return w.m(new C.eSF(this.a,w))},
$S:0}
C.eSF.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eSL.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eT4.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ex(n.chY(),n.r))
l.push(new C.IE(n.cv7(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ex(new B.an(A.W,t,A.b1,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aC(A.c7,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eT3(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:204}
C.eT3.prototype={
$1(d){var w=this.a
return w.m(new C.eT2(w,d,this.b,this.c))},
$S:18}
C.eT2.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eTd.prototype={
$0(){var w=this.a
return w.m(new C.eTc(w,this.b))},
$S:0}
C.eTc.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eSu.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lz()},
$S:0}
C.eTL.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.aZx(),B.E(B.av(w.b1u(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aPP(),1),w.aM1()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.aZx(),new B.D(A.hP,B.av(s.b1u(u),t,t,t),t),B.E(s.aPP(),1),s.aM1()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:478}
C.fzk.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bA7(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.P)},
$S:z+98}
C.fzj.prototype={
$3(d,e,f){var w=this,v=C.bA7(),u=w.b?A.H:A.cx,t=w.c?A.cF:A.bo
return C.er(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cn,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdY.prototype={
$1(d){return B.u(d)},
$S:17}
C.fH0.prototype={
$0(){return this.a},
$S:z+15}
C.fna.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.fnb.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fH2.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fH5.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fH6.prototype={
$0(){return A.d.gI(D.wb)},
$S:z+33}
C.fGZ.prototype={
$1(d){return d.a},
$S:z+16}
C.fH1.prototype={
$1(d){return d.a},
$S:z+16}
C.fEZ.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fF_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fF0.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fzo.prototype={
$0(){return C.cB()},
$S:22}
C.fzr.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.er(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,"","",A.bo,A.a6)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,"",j,A.bo,A.a6)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,j,k,A.bo,A.a6)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bo,A.a6)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bo,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.de,!1,k,l,"",m,A.bo,A.a6)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,null,0,"",k,A.bo,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,j,k,"",l,A.bo,A.a6)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,k,0,l,m,A.bo,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,k,l,m,"",n,A.bo,A.a6)},
$S:z+35}
C.fzq.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.f4,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fzp.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.lw,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.ql,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fzn.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fBP.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hkm.c9(0,A.a.i(s.w).toLowerCase(),new C.fBN(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c9(0,s.r,new C.fBO(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bo6(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1680}
C.fBN.prototype={
$0(){return F.aNo(this.a.w)},
$S:193}
C.fBO.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bz1("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cg,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:193}
C.fft.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.ffu.prototype={
$1(d){return d.a},
$S:z+18}
C.ffv.prototype={
$1(d){return d.b},
$S:z+19}
C.fQ2.prototype={
$1(d){return D.h7O},
$S:z+41}
C.eZZ.prototype={
$0(){return this.a.x=C.hOT(this.b,this.c.b)},
$S:0}
C.f__.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eZX.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:437}
C.eZY.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:437}
C.eZW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bS(A.ay,null,new C.eZR(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kC,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b5(s,7)
if(r.length===0){n.m(new C.eZS(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hqc(o,m.cIJ(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eZT(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eZR.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eZV(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b5K,A.f,p,p,D.b0M,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ca:D.Cf,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fC3(v,i.b3z(h),u),p)))}t=B.m2(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bm(!0,new B.D(A9.xP,t,p),!0,!1,A.af,!0,!0)
s=new C.eZU(i,d)
m=B.aI(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GY[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.c8(B.x(B.a([D.frX,A.R,t,A.dY,D.eQs,A.au,D.fCE,A.R,B.m2(1.15,l,3,10,10,p,A.dS,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xP,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eZV.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dm
return B.aC(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hA,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eZQ(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1681}
C.eZQ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eZU.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bM:A.bE
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ao7,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e_(new C.Nk(u.FA(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aC(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bM:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZP(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:135}
C.eZP.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eZS.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.eZT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eZF.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eZG.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eZI.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eZJ.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eZK.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eZL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eZH(w,d))},
$S:2}
C.eZH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eZM.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.u(this.b)},
$S:0}
C.f_c.prototype={
$0(){return this.a.f.fO()},
$S:0}
C.f_d.prototype={
$0(){var w=this.a
return w.m(new C.f_b(w))},
$S:0}
C.f_b.prototype={
$0(){return this.a.e=null},
$S:0}
C.f_e.prototype={
$0(){var w=this.a
return w.m(new C.f_a(w))},
$S:0}
C.f_a.prototype={
$0(){return this.a.x=null},
$S:0}
C.f_g.prototype={
$1(d){var w=this.a
return w.m(new C.f_9(w,d))},
$S:32}
C.f_9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f_h.prototype={
$1(d){var w=this.a
return w.m(new C.f_8(w,d))},
$S:32}
C.f_8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f_i.prototype={
$0(){var w=this.a
return w.m(new C.f_7(w))},
$S:0}
C.f_7.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f_j.prototype={
$1(d){var w=this.a
return w.m(new C.f_6(w,d))},
$S:32}
C.f_6.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f_k.prototype={
$1(d){var w=this.a
return w.m(new C.f_5(w,d))},
$S:32}
C.f_5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f_l.prototype={
$0(){var w=this.a
return w.m(new C.f_4(w))},
$S:0}
C.f_4.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.f_m.prototype={
$0(){var w=this.a
return w.m(new C.f_3(w,this.b))},
$S:0}
C.f_3.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f_n.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bOa(D.a36[v]),null))
return B.bW(A.bB,t,A.br,8,8)},
$S:174}
C.f_f.prototype={
$1(d){var w=this.a
return w.m(new C.f_2(w,d))},
$S:8}
C.f_2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eZN.prototype={
$0(){var w=this.a
return w.m(new C.eZO(w,this.b,this.c))},
$S:0}
C.eZO.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.f_1.prototype={
$0(){var w=this.a
return w.m(new C.f_0(w,this.b))},
$S:0}
C.f_0.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fQ1.prototype={
$1(d){return new C.a0c(this.a,this.b,null)},
$S:z+42}
C.eZy.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eZz.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eZA.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aGF?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eZB.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eZC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eZx(w,d))},
$S:2}
C.eZx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eZD.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.u(this.b)},
$S:0}
C.eZE.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hg(A.bw,w.length),A.aO))},
$S:0}
C.fmq.prototype={
$1(d){return d.a===this.a},
$S:208}
C.ef8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gax3(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cQV:D.d6A
t=D.xv.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xv.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bZ(0,B.b3(q,q,q,new C.bhj(n*6.283,q),A.aw),0,0,0)
o=o.x
o=B.bZ(0,B.bOQ(B.eJ(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bcJ.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.x(B.a([B.X(p.a.c?A.eg:A.lV,D.xv,q,q,q,20),A.au,B.f7(A.A,B.nQ(A.jx,D.flu,new C.ef7()),A.f,A.ei)],r),A.m,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fi8,A.f,q,q,new B.o(D.xv,q,q,B.n(6),q,q,A.n),q,q,q,q,M.aj5,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.az,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.ef7.prototype={
$1(d){return D.bX8.av(0,d)},
$S:67}
C.fH7.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fH8.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:208}
C.fH9.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1682}
C.fHa.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fH3.prototype={
$1(d){return d.a},
$S:z+18}
C.fH4.prototype={
$1(d){return d.b},
$S:z+19}
C.fPf.prototype={
$1(d){return new C.Zz(this.a,this.b,null)},
$S:z+44}
C.diN.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.diO.prototype={
$1(d){return d.a===this.a.gaif()},
$S:z+10}
C.diP.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.diS.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.diT.prototype={
$0(){var w=this.a
return w.m(new C.diR(w,this.b))},
$S:0}
C.diR.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.diU.prototype={
$1(d){var w=this.a
return w.m(new C.diQ(w,d))},
$S:8}
C.diQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ef6.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.fp(w,this.a)
return B.db(w,0,B.dI(e,"count",x.S),B.T(w).c).dJ(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1683}
C.fc0.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f4,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fc2.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mK,D.cQ,g,e,f)},
$S:z+46}
C.fc1.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wu(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mK,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fc_.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fAv.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fAw.prototype={
$0(){return A.d.gI(D.H6)},
$S:z+49}
C.fAx.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fdX.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fGA.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGB.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGC.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jQ,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jQ,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGN.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jQ,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jQ,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jP,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGS.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jP,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGT.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jQ,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGU.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cPV[w]
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.bg,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kk
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGV.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mm,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.CS,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kk
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGW.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jP,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGX.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jQ,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGY.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jQ,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGD.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jP,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jP,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fGE.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jP,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jP,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jP,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fGF.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jQ,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jP,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fGG.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jP,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jP,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fGH.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.l6,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.l6,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.l6,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.l6,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.l6,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGI.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jQ,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGJ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mm,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.CS,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kk
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGK.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f4,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a6,A.bo,A.aD,s,A.bi,null,D.fs,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kk
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGL.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fGM.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j2
$.j2=t+1
t=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.55,0.14+v,0.38,0.18,"",24,A.a6,A.bo,A.aD,r,A.bi,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kk
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dc,A.cl,w/2).l()
t=Date.now()
s=$.j2
$.j2=s+1
u=new C.eM("design_"+(""+1000*t+"_"+s),D.f4,0.57,0.16+v,0.06,0.14,"",24,A.a6,A.bo,A.aD,r,A.bi,null,D.bg,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kk
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jP,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGO.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jQ,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jQ,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jQ,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jQ,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bg,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eN,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGP.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bg,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eN,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eN,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eN,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jQ,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGQ.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f4,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.eN,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kk
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fGR.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jQ,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jQ,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fyl.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fym.prototype={
$0(){return A.d.gI($.bDK())},
$S:z+52}
C.flZ.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.flY.prototype={
$1(d){return C.hW6(d,this.a,this.b)},
$S:z+53}
C.fHg.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vN(1.0375,1.01875,1)
return new B.fS(v,u,new C.aSm(B.hLU(A.v3,C.hW9(w.c,w.d,v,u),t)))},
$S:438}
C.dUb.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dUa.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bT(A.K6,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jA(new B.an(A.W,w,A.b1,A.r,B.a([t,new B.ex(B.b3(w,w,w,new C.bec(u.a,r,q,r),A.aw),w),B.av(new B.jM(r,new C.dU9(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:408}
C.dU9.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hX(B.fP(i,A.A,r,r,A.ci,A.bV,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mp(e*0.8)),A.a5),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqN(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.de(B.dW(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKA(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a6,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.N,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.de(B.ef(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.eYM.prototype={
$1(d){var w=this.b
return new B.a8(A.az,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:67}
C.c8v.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bM:A.bE
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hK.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.n(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v)
return B.aC(v,new B.a7(112,v,B.x(B.a([w,A.fQ,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bM:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1684}
C.c8w.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FA(""))},
$S:0}
C.c8x.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e_(new C.Nk(v.FA(u),!0,!1,null),!0,null),d.b,new C.c8y(w,this.c,d),v.a===u)},
$S:z+54}
C.c8y.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hqc(u.b,t.c.FA(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fNF.prototype={
$1(d){return new C.Z7(this.a,null)},
$S:z+55}
C.d7Z.prototype={
$0(){var w=this.a
w.d=w.gvB().bby("data:"+this.b+";base64,"+A.cV.gcB().aK(this.c));++w.r},
$S:0}
C.d83.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d84.prototype={
$0(){var w=this.a
return w.m(new C.d82(w))},
$S:0}
C.d82.prototype={
$0(){return this.a.r++},
$S:0}
C.d85.prototype={
$1(d){var w=this.a
return w.m(new C.d81(w,d))},
$S:2}
C.d81.prototype={
$0(){var w=this.a
return w.d=w.gvB().aDu(this.b)},
$S:0}
C.d86.prototype={
$0(){var w=this.a
return w.m(new C.d80(w))},
$S:0}
C.d80.prototype={
$0(){var w=this.a
return w.d=w.gvB().bby("")},
$S:0}
C.d87.prototype={
$1(d){var w=this.a
return w.m(new C.d8_(w,d))},
$S:2}
C.d8_.prototype={
$0(){var w=this.a
return w.d=w.gvB().bbF(this.b)},
$S:0}
C.d88.prototype={
$0(){var w=this.a
w=w.gvB().bbF(w.gax4().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fNE.prototype={
$1(d){var w={}
w.a=this.a
return new B.e2(new C.fND(w),null)},
$S:21}
C.fND.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.85),B.c8(B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fzK,A.au,D.fA_,A.aB,new C.aZG(v.a,new C.fNC(v,e,d),!0,w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1k,w,w,w,w,A.Mw,w,w,w)},
$S:161}
C.fNC.prototype={
$1(d){this.b.$1(new C.fNB(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fNB.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fQ0.prototype={
$1(d){return D.h2S},
$S:z+57}
C.deM.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.deN.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.deO.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fDX.prototype={
$1(d){var w=this.b
return new B.a8(A.az,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:67}
C.d7G.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cW(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cW(w,q+p,w,q+p*1.2))
u.F(new B.D3(B.bU(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aR(u,v.d)
s.aR(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.v(w,o),2.2,p)},
$S:667}
C.fE0.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fwp.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fwq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fip,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GE,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwn(d),B.bn(A.c0,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eD(A.o8,D.Ub,new C.fwo(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwn.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwo.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cdW.prototype={
$1(d){return d.hH()},
$S:z+59}
C.cdX.prototype={
$1(d){return d.ah()},
$S:z+60}
C.cdV.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a6.gdN(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hRX(b2.h(0,"type"))
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
n=A.ayT[A.o.D(b4,0,8)]
m=D.cSO[A.o.D(w,0,1)]
l=C.hVz(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avy[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hYo(b2.h(0,"shape"))
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
a3=C.hlt(b2.h(0,"textTransition"))
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
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cdL.prototype={
$1(d){return d.hH()},
$S:z+62}
C.cdM.prototype={
$1(d){return d.ah()},
$S:z+63}
C.cdI.prototype={
$1(d){return B.u(d)},
$S:17}
C.cdJ.prototype={
$1(d){return B.u(d)},
$S:17}
C.cdK.prototype={
$1(d){return C.hc8(B.a2(d,x.N,x.z))},
$S:z+64}
C.cec.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ced.prototype={
$0(){return A.d.gI(D.a2K)},
$S:z+66}
C.ce7.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hH())},
$S:z+7}
C.ce6.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ce2.prototype={
$1(d){return new B.M(d,new C.ce3(),B.T(d).k("M<1,S>")).ff(0,new C.ce4())},
$S:z+69}
C.ce3.prototype={
$1(d){return d.f},
$S:z+70}
C.ce4.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:668}
C.ce5.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hHJ(d)},
$S:z+71}
C.ce8.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ce9.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cea.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fEz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fEv.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fEw.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fEx.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fEy.prototype={
$2(d,e){return d.b===D.f4&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdR.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i66(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cdQ(),b5.k("J.E"),x.N)
w=B.dd(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pP.az(0,A.k.D(b1,0,1))
u=new C.cdS()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdT(a9,b7.d)
r=new C.cdU(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jD.az(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.k.D(1-k,0,1),B.dW(B.ef(A.A,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.f4){a4=i.hH()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lw&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b1,A.r,B.a([new B.kH(A.k.D(o,0,1),r.$1(l),a8),new B.kH(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iI(B.wh(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.mK
p.push(s.$5(i.c,i.d,i.e,i.f,C.hnJ(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:445}
C.cdQ.prototype={
$1(d){return d.a},
$S:z+22}
C.cdS.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdT.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1688}
C.cdU.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7A(v,C.b0O(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dGq.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ef(new B.dc(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:47}
C.ce_.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ce0.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fHn.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:316}
C.fGu.prototype={
$1(d){return new C.add(this.a,this.b,null)},
$S:z+78}
C.ery.prototype={
$0(){return this.a.PJ(this.b,C.i9s(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.erz.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PJ(this.b,C.i9u(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.erA.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PJ(this.b,C.i9t(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.erB.prototype={
$0(){Y.hnt()
B.a6(this.a,!1).O(null)},
$S:0}
C.cdP.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1689}
C.cdO.prototype={
$2(d,e){var w,v=this,u=null,t=B.dO(d,A.nF),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lR(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bV:A.dv
return B.fP(t,A.A,o,new C.cdN(),A.ci,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1690}
C.cdN.prototype={
$3(d,e,f){return D.ac4},
$S:211}
C.fEu.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.db(r,0,B.dI(6,"count",x.S),B.T(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fEt(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1691}
C.fEt.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0O(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fox.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fov(d))
w=B.aI(d,A.bW,x.w).w
v=B.n(22)
u=B.I(A.bE,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fO,28)],x.V)
s=x.p
return new B.d_(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kg,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zT,q,q,!0,q,q,new C.fow(p,d),q,B.fy(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Fs,q,new B.b7(B.n(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.ay,q,u,v,t,q,A.n),q,q,q,A.fM,A.FB,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.fov.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).py())B.a6(w,!0).eF()},
$S:0}
C.fow.prototype={
$0(){var w=this.a.a
if(w!=null)w.a6(0)
B.a6(this.b,!0).eF()},
$S:0}
C.f6j.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fE(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k8(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(r*1.2)
s.k8(r*0.5)
return B.fv(A.A,B.de(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(-r*1.4)
return B.fv(A.a8,B.de(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.ef(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJ4(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJ4(1-r,t))],x.p),t)
case 16:v=D.b4K.az(0,r)
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.en(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mN(r*6.28)
s.jO(r,r,r,1)
return B.fv(A.A,u.b,t,s,!0)
case 20:return B.eJ(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t),t)}},
$S:61}
C.dSo.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dSn.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dSm.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hnJ(v,w,e)},
$S:61}
C.cdH.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a3,A.a8,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("M<1,cL>")
q=B.C(new B.M(v,new C.cdG(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:445}
C.cdG.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7A(m,new C.UP(d,C.b0O(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d4V.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4U(w))},
$S:11}
C.d4U.prototype={
$0(){return this.a.d++},
$S:0}
C.eeP.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNX.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i5Q(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fE(Math.sin(t)*0.32)
s.k8(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jO(w,w,w,1)
return B.fv(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dW(B.ef(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.de(B.ef(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:61}
C.eWp.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fF
return w},
$S:1692}
C.fC4.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdE()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqG(u,t,r),A.aw))
w.push(B.nw(s.d,A.aq,new C.beJ(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpG(u,q,t,r),A.aw))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b1,A.r,w,r),r),r,r,r)},
$S:242}
C.frp.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:317}
C.exM.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CQ(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.exK(),new C.exL(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1693}
C.exK.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:187}
C.exL.prototype={
$0(){return J.fr(this.a)},
$S:1695}
C.eu9.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eua.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eub.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.evK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evy.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.evz.prototype={
$1(d){return d.hH()},
$S:z+81}
C.etx.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ewS.prototype={
$0(){this.a.ty()},
$S:0}
C.exI.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K0()},
$S:0}
C.evI.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K0()},
$S:0}
C.exv.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exw.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exx.prototype={
$1(d){return d.a},
$S:z+22}
C.exy.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aO),$.aw())},
$S:255}
C.exz.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:672}
C.esW.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exJ.prototype={
$0(){},
$S:0}
C.euR.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()
w.K0()},
$S:0}
C.esU.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xs()},
$S:0}
C.esV.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xs()},
$S:0}
C.evd.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eve.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()
w.K0()
w.z="Home"},
$S:0}
C.evf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euQ.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ua,w,w,!0,w,w,new C.euP(d),w,w)],x.p),w,w,w,D.fBw,w,w,w,w,D.fiR,w)},
$S:20}
C.euP.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euN.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ua,w,w,!0,w,w,new C.euM(d),w,w)],x.p),w,w,w,D.fmO,w,w,w,w,D.fkz,w)},
$S:20}
C.euM.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euO.prototype={
$0(){},
$S:0}
C.eu5.prototype={
$1(d){return this.a.b_Q(C.bBL(d))},
$S:z+7}
C.eu6.prototype={
$1(d){return this.a.aeQ(C.bBL(d))},
$S:z+7}
C.euX.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fBA,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pq(A.vR,D.awV,"HATI YA KUHOWA","Hati ya mahari",new C.euS(d),w),A.R,new C.Pq(A.ha,D.d4l,"HATI YA KUHOWESHA","Hati ya kupokea",new C.euT(d),w),A.R,new C.Pq(A.i5,D.cR_,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.euU(d),w),A.R,new C.Pq(A.hR,D.cPe,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.euV(d),w)],v)
if(this.a.gabj())A.d.v(u,B.a([A.R,new C.Pq(A.j3,D.cAj,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.euW(d),w)],v))
return B.bm(!0,B.c8(B.x(u,A.ai,w,A.e,A.N,0,A.p),A.r,w,A.y,w,E.xS,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:26}
C.euS.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.euT.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.euU.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.euV.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.euW.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.euY.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()},
$S:0}
C.esY.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.esZ.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ml(r,v.f+1,q);++v.f
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
C.ev8.prototype={
$1(d){return d.b===D.lw},
$S:z+4}
C.ev9.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e2(new C.ev6(w,this.a,v),null)},
$S:21}
C.ev6.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ev7(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bn:A.bL,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bE:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bC,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.ev2(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cf[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhd(t,u.b,p.a===t,i,k,new C.ev3(v,m),q))}a1=B.bW(A.bB,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ca[w]
s.a=null
t=s.a=r.a
u.push(new C.bhc(t,r.b,p.b===t,k,j,new C.ev4(s,m),q))}return B.bm(!0,B.p(q,B.c8(B.x(B.a([d,A.aR,a0,A.R,a1,A.by,v,A.R,B.bW(A.bB,u,A.br,12,12),A.by,new B.a7(1/0,48,B.eD(D.bTb,D.fE0,new C.ev5(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.Y),D.aZQ,q,q,q,q)),q)],e),A.F,q,A.e,A.N,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tP,D.buA,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.ev7.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ev0(w.a,d,e))
w.b.d2(new C.ev1(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1698}
C.ev0.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ev1.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ev2.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ev3.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ev4.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.ev5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GA(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d2(new C.ev_(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev_.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.evb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evc.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eva(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ml(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xs()},
$S:0}
C.eva.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evt.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evu.prototype={
$1(d){return d.w},
$S:z+82}
C.evv.prototype={
$2(d,e){return d>e?d:e},
$S:86}
C.evw.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bn:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bE:A.aL,A.q,1),n=B.aI(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bMU,A.f,v,v,D.b0c,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.evq(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.co,B.hM(v,new C.evr(m,k,w.c,s,w.d,t,r),k.length,A.fC,v,A.ag,new C.evs(),!0),v)],l),A.F,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tP,A.Z7,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.evq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evs.prototype={
$2(d,e){return A.ac},
$S:36}
C.evr.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cx
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bQ1,q,q,q,new C.evo(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bwQ,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.Y),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aZv),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.evp(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:673}
C.evo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ibB(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oK(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hg(A.bw,o+s.length),A.aO))
l.aiU(k,m)
l.pj()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evp.prototype={
$1(d){var w=this.a
w.aiU(this.b.a,d)
w.pj()},
$S:2}
C.evx.prototype={
$0(){},
$S:0}
C.euZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ete.prototype={
$0(){},
$S:0}
C.etf.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hp2(this.b,w,!0)
w=this.a
w.r=null
w.xs()},
$S:0}
C.etg.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eth.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.etd(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ml(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xs()},
$S:0}
C.etd.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evD.prototype={
$1(d){return B.oT(new C.evC(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:144}
C.evC.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aiM,B.x(B.a([D.fz8,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.eWK,new C.evB(this.a,this.b),20,A.tR,w,A.ag,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:448}
C.evB.prototype={
$2(d,e){var w=null,v=D.H6[e],u=C.hHE(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fE,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eQo,A.f,w,w,new B.o(A.dM.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.ni,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evA(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:75}
C.evA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdZ(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evE.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()},
$S:0}
C.erT.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rv(4294967295,null,0,0,null,C.cB(),D.mJ,"","","",D.de),s=this.b
C.ceb(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.etc.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j2
$.j2=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.hc8(q));++v.f},
$S:0}
C.eta.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.evM.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.et6.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.et5(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.et5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evL.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.esX.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aO),$.aw())},
$S:255}
C.ety.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:672}
C.ext.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.exu.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.at4(w).fO()
v=u.Wp(w)
v.stf(B.hg(A.bw,v.a.a.length))},
$S:9}
C.ewT.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xo(v)
if(u!=null&&u.b===D.cQ)w.Wp(u).saX(0,u.r)}else w.w=null},
$S:0}
C.erU.prototype={
$0(){var w=C.cB(),v=this.a,u=C.er(A.bi,!1,v.gql().e.l(),A.aD,"",4280640491,24,A.bo,A.a6,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.erR.prototype={
$0(){var w=C.cB(),v=this.a,u=C.er(A.bi,!1,4279310375,A.aD,"",v.gql().c.j(0.25).l(),24,A.bo,A.a6,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gql().c.l(),2,"",0,0,"",D.cn,D.f4,0.25,0.3,0.3)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.erH.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,0.6,0.2,0.18),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.erE.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c_5],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajv().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bKC,r,r,r,r,new C.erD(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.erD.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.erF.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ah(),null),s=C.er(A.bi,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a6,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cn,D.a5l,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdu().z,s)
t.r=s.a},
$S:0}
C.et8.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.et9.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdu().z,new C.et7(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.et7.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.esl.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f4){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.esm(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.esm.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.esq.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.esr(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdu()
if(t!=null)v.$1(t)}},
$S:0}
C.esr.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eso.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.esp(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.esp.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f0(w,new C.esn()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.esn.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esk.prototype={
$0(){return C.ceb(this.b,this.c,this.a.gql())},
$S:0}
C.evn.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.exC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exD.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.exE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exF.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.bg(s,new C.exB(v))
if(w>=0)t.d[w]=v.b}if(v.a.gS7()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hH()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xs()
t.K0()}},
$S:0}
C.exB.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ex8.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abn(),s=w.b,r=u.abo(A.fd,A.kw,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aUP(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bKI,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aUP(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.az,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.by,u.aUS(A.fd,d,D.bGN,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bXC(A.aN,d,A.u3,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUQ(d,"Not now"))
return new C.JN(B.x(p,A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.ex7.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JN(B.x(B.a([v.abn(),A.O,v.abo(A.aN,D.bGs,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.42),B.hM(w,new C.ex5(v,u,d),u.length,w,w,A.ag,new C.ex6(),!0),w),A.aB,v.aUQ(d,"Cancel")],x.p),A.ai,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.ex6.prototype={
$2(d,e){return A.R},
$S:36}
C.ex5.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anD,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bX3,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nC,w,w,w),A.cU,B.d("Updated "+this.a.PK(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ex4(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:75}
C.ex4.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ex1.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abn()
t=t.abo(A.aF,A.uc,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JN(B.x(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dV(A.a8H,new C.ex_(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b7(B.n(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.fl8,new C.ex0(d),B.bn(A.fd,u,u,u,A.c,u,A.cm,u,new B.b7(B.n(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.ex_.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ex0.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ex3.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abn(),s=w.b,r=u.abo(A.aV,A.eg,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auo("Names",""+w.c),1),A.ab,B.E(u.auo("Fields",""+w.d),1),A.ab,B.E(u.auo("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bj,v,v,v,A.c,v,A.xH,v,new B.b7(B.n(14),A.Y),v,v,v)
return new C.JN(B.x(B.a([t,A.O,r,A.aR,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nA,v,v,v),new C.ex2(d),o),A.R,u.aUR(d,"Stay here",!1)],q),A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.ex2.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eu1.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eu0.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ewU.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exs.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_j(A.d.dM(w.d,new C.exq(v),new C.exr(v)).hH(),w.f,null)},
$S:z+84}
C.exq.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exr.prototype={
$0(){return this.a},
$S:z+85}
C.erM.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hu,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bMu,w,w,w,w,new C.erK(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fja,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNE,w,w,w,w,new C.erL(d),!1,w,w,w,w,w,D.fFd,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dp,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.erK.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.erL.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.erN.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bi,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a6,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cn,D.S_,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.erO.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j2
$.j2=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j2
$.j2=k+1
m.push(new C.eM(""+1000*l+"_"+k,D.S_,0.04,0.06,0.92,0.88,v,24,A.a6,A.bo,A.aD,4279310375,A.bi,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lG(""+1000*p+"_"+o,r+n,"",D.qk,4294967295,null,D.de,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.erS.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.kx(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bi,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a6,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.l5,0.35,0.55,0.62)
A.d.L(u.gdu().z,w)
u.r=w.a},
$S:0}
C.erJ.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2E(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.eg(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a6,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.l5,s,u,t)
A.d.L(p.gdu().z,q)
A.d.bq(p.gdu().z,new C.erI(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i5z(p)}},
$S:0}
C.erI.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evJ.prototype={
$0(){var w=this.a,v=this.b
w.b2E(v)
this.c.at=v.a
w.r=null},
$S:0}
C.exA.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eu4.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.eu3())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eu3.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.esu.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.esv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ty()},
$S:9}
C.erG.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a6,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,0.8,0.1,0.1),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.etw.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.erP.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdu().z,v)
w.r=v.a},
$S:0}
C.erY.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.erZ.prototype={
$0(){var w=this.b.hH(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdu().z,f)
t.r=f.a},
$S:0}
C.es_.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.erX(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.erX.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esa.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.erW(v))
if(u>0){A.d.cz(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.erW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esd.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.ese.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.esf.prototype={
$0(){return this.a.as=A.dN},
$S:0}
C.esg.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.esh.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.esi.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esj.prototype={
$1(d){return d.length!==0},
$S:3}
C.es0.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CV(w.gql().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdu().z
v=C.cB()
A.d.L(u,C.iX(A.bi,!1,w.gql().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.de,0.9,0.05,0.02))},
$S:0}
C.es1.prototype={
$0(){var w,v=this.a,u=v.gdu().z,t=C.cB()
A.d.L(u,C.CV(v.gql().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdu().z
u=C.cB()
w=C.bCt()
A.d.L(t,C.iX(A.L,!1,v.gql().e.l(),A.aD,12,A.bo,A.a6,0.06,u,"Footer \xb7 "+w,0,D.de,0.9,0.05,0.92))},
$S:0}
C.es2.prototype={
$0(){A.d.L(this.a.gdu().z,C.CV(1727914055,0.12,C.cB(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.es3.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdu().z,C.CV(w,0.08,C.cB(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.es4.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CV(w.gql().c.j(0.35).l(),0.12,u,D.CS,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdu().z,C.iX(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.15,C.cB(),"Important note",0,D.ql,0.5,0.38,0.52))},
$S:0}
C.es5.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CV(4294507260,0.78,C.cB(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdu().z,C.iX(A.bi,!1,4279179050,A.aD,16,A.bo,A.a6,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCt()+"\n\nSubject:\n\nBody text\u2026",0,D.de,0.76,0.12,0.14))},
$S:0}
C.es6.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CV(4294897802,0.28,C.cB(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdu().z,C.iX(A.bi,!1,4285611794,A.aD,15,A.bo,A.a6,0.24,C.cB(),"Sticky note",0,D.aGu,0.26,0.64,0.14))},
$S:0}
C.es7.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdu().z,C.CV(4293060848,0.04,C.cB(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdu().z,C.CV(w,0.04,C.cB(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.es8.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.iX(A.bi,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.I2,0.42,0.06,0.18))
A.d.L(v.gdu().z,C.iX(A.bi,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uu,0.42,0.52,0.18))},
$S:0}
C.es9.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CV(858088427,0.62,C.cB(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdu().z,C.CV(856004201,0.62,C.cB(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdu().z,C.iX(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option A",0,D.de,0.36,0.08,0.2))
A.d.L(v.gdu().z,C.iX(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option B",0,D.de,0.36,0.56,0.2))},
$S:0}
C.esb.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CV(4294967295,0.36,C.cB(),D.bg,w,2,0.24,0.38,0.28))
A.d.L(v.gdu().z,C.iX(A.L,!1,w,A.aD,14,A.bo,A.a6,0.12,C.cB(),"[ QR CODE ]",0,D.de,0.24,0.38,0.4))},
$S:0}
C.esc.prototype={
$0(){return C.ceb(this.b,D.S0,this.a.gql())},
$S:0}
C.etv.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7_.t(0,d),t=this.a
return t.b7F(d,v===d,A.aZ,this.c,new C.etu(t,u,d,w),u)},
$S:z+25}
C.etu.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDf(r,new C.ett(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ett.prototype={
$0(){return this.a.d2(new C.ets(this.b,this.c))},
$S:0}
C.ets.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.erQ.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rv(4294967295,null,0,0,null,C.cB(),D.mJ,"","","",D.de),s=this.b
C.ceb(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.esy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ibE(p,q.d,s,new C.esx(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ty(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esx.prototype={
$1(d){return this.bkp(d)},
bkp(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.esw(t,d))
w=2
return B.b(t.ty(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.esw.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.esz.prototype={
$0(){return this.a.bIr()},
$S:0}
C.esA.prototype={
$0(){return this.a.aQ1("Class Presentation",!0)},
$S:0}
C.esB.prototype={
$1(d){return this.a.bJn(d.b,this.b,d.a)},
$S:z+88}
C.etb.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.evm.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eG,x.w).w.f.d),new B.e2(new C.evl(this.a,this.b),null),null)},
$S:60}
C.evl.prototype={
$2(d,e){return B.oT(new C.evk(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:590}
C.evk.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.ay:A.c,s=B.I(u?A.bE:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b_,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.aid,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zT,v,v,!0,v,v,new C.evi(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aSN(u,!0,!0,new C.evj(p,w.d))],q),e,D.bsr,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kL,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.evi.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evj.prototype={
$0(){this.b.$1(new C.evg())
var w=this.a
if(w.c!=null)w.m(new C.evh())},
$S:0}
C.evg.prototype={
$0(){},
$S:0}
C.evh.prototype={
$0(){},
$S:0}
C.ewV.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.ewW.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.ayy(this.a,null),0.94+w*0.06,null,null),w)},
$S:449}
C.ewX.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.ewY.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.bcz(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:449}
C.ewZ.prototype={
$0(){return A.d.cj(this.a.d,0,C.VM(this.b))},
$S:0}
C.erV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.ay.j(0.72)],t):B.a([A.c.j(0.88),A.pC.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_Y,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.u1(A.fx,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.az,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:335}
C.et_.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.et0.prototype={
$1(d){return d.length!==0},
$S:3}
C.et1.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jK
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0t:A.BC}return w},
$S:676}
C.et4.prototype={
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
s=t?B.a([A.c.j(0.1+w*0.04),A.ay.j(0.78)],s):B.a([A.c.j(0.92),A.mY.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kx(v.w)?A.vR:A.q7,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PK(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PK(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PK(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.PK(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PK(v.f)
r=k.bJl(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a7L(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.Mt,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o6,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.et2(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.az,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.et3(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:94}
C.et3.prototype={
$0(){return this.a.aeQ(this.b)},
$S:0}
C.et2.prototype={
$0(){return this.a.AO(this.b,this.c)},
$S:0}
C.euv.prototype={
$0(){var w=this.a
w.b6h()
w.m(new C.euu())},
$S:0}
C.euu.prototype={
$0(){},
$S:0}
C.euw.prototype={
$1(d){return this.a.aiU(this.b.a,d)},
$S:2}
C.eux.prototype={
$0(){this.a.d2(new C.eut(this.b))},
$S:0}
C.eut.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.euy.prototype={
$0(){this.a.d2(new C.eus(this.b))},
$S:0}
C.eus.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.euz.prototype={
$0(){this.a.d2(new C.eur(this.b))},
$S:0}
C.eur.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.euA.prototype={
$0(){this.a.d2(new C.euq(this.b))},
$S:0}
C.euq.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.euB.prototype={
$0(){var w=this.a
w.d2(new C.eup(w,this.b))},
$S:0}
C.eup.prototype={
$0(){var w=this.b
return w.as=this.a.c3m(w.as)},
$S:0}
C.euC.prototype={
$0(){return this.a.d2(new C.euo(this.b))},
$S:0}
C.euo.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.euD.prototype={
$0(){return this.a.d2(new C.eun(this.b))},
$S:0}
C.eun.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eug.prototype={
$0(){return this.a.a1T(this.b.a)},
$S:0}
C.euh.prototype={
$0(){this.a.a_p()
return null},
$S:0}
C.eui.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bW,x.w).w.a.a<900)w.af8()
else w.m(new C.euf(w))},
$S:0}
C.euf.prototype={
$0(){return this.a.as=!0},
$S:0}
C.euj.prototype={
$0(){this.a.d2(new C.eue(this.b))},
$S:0}
C.eue.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.euk.prototype={
$0(){return this.a.d2(new C.eud(this.b))},
$S:0}
C.eud.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eul.prototype={
$0(){return this.a.d2(new C.euc(this.b))},
$S:0}
C.euc.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eum.prototype={
$0(){return this.a.azr(null)},
$S:0}
C.eto.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.etp.prototype={
$0(){this.a.a9U()
return null},
$S:0}
C.etr.prototype={
$1(d){return this.bkq(d)},
bkq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JS(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bS(A.ay,null,new C.etj(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d2(new C.etk(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.etl(r))
s=s.c.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.etm(r))
s=s.c.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hqb(q,new C.Et(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d2(new C.etn(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agK(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.etj.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ecx],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bMB:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eti(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dp,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eti.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.etk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etl.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.etm.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.etn.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.etq.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zI(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zI(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zI(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agK(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ehB,q,v,u,B.zI(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:136}
C.exG.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCq(w,v)}},
$S:0}
C.exH.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.euG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bWY:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aS:A.bq
return new B.D(A.fC,B.aC(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,A.lQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.euF(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:143}
C.euF.prototype={
$0(){var w=this.a
return w.m(new C.euE(w,this.b))},
$S:0}
C.euE.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.euH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3h:E.ax0
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbMO():t.gbIM()
return B.hw(B.aC(u,B.p(u,D.an5,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1703}
C.euI.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iaU(v,w.a.c)},
$S:0}
C.ew4.prototype={
$0(){return this.b.v9(this.a.a)},
$S:0}
C.ew5.prototype={
$0(){return this.a.v9(D.mJ)},
$S:0}
C.ew6.prototype={
$0(){return this.a.v9(D.I0)},
$S:0}
C.ewh.prototype={
$0(){return this.a.v9(D.I1)},
$S:0}
C.ews.prototype={
$0(){return this.a.v9(D.I_)},
$S:0}
C.ewD.prototype={
$0(){return this.a.q6("lab_report")},
$S:0}
C.ewK.prototype={
$0(){return this.a.q6("rubric")},
$S:0}
C.ewL.prototype={
$0(){return this.a.q6("minutes")},
$S:0}
C.ewM.prototype={
$0(){return this.a.q6("agenda")},
$S:0}
C.ewN.prototype={
$0(){return this.a.q6("timeline")},
$S:0}
C.ewO.prototype={
$0(){return this.a.q6(this.b.a)},
$S:0}
C.ew7.prototype={
$0(){this.a.Vy()
return null},
$S:0}
C.ew8.prototype={
$0(){this.a.Vs()
return null},
$S:0}
C.ew9.prototype={
$0(){return this.a.q6("table")},
$S:0}
C.ewa.prototype={
$0(){return this.a.q6("sticky")},
$S:0}
C.ewb.prototype={
$0(){return this.a.q6("divider")},
$S:0}
C.ewc.prototype={
$0(){return this.a.q6("header_bar")},
$S:0}
C.ewd.prototype={
$0(){return this.a.p_(D.bg)},
$S:0}
C.ewe.prototype={
$0(){return this.a.p_(D.eN)},
$S:0}
C.ewf.prototype={
$0(){return this.a.p_(D.jP)},
$S:0}
C.ewg.prototype={
$0(){return this.a.p_(D.CS)},
$S:0}
C.ewi.prototype={
$0(){return this.a.p_(D.jQ)},
$S:0}
C.ewj.prototype={
$0(){return this.a.p_(D.l6)},
$S:0}
C.ewk.prototype={
$0(){return this.a.p_(D.fs)},
$S:0}
C.ewl.prototype={
$0(){this.a.Hd()
return null},
$S:0}
C.ewm.prototype={
$0(){this.a.Ne()
return null},
$S:0}
C.ewn.prototype={
$0(){return this.a.q6("quote")},
$S:0}
C.ewo.prototype={
$0(){return this.a.a82()},
$S:0}
C.ewp.prototype={
$0(){this.a.a_v()
return null},
$S:0}
C.ewq.prototype={
$0(){var w=this.a
return w.m(new C.evV(w))},
$S:0}
C.evV.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ewr.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ew2(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew2.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ewt.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jV()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a70.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b_
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a70.t(0,q))u.push(B.ao(s,B.p(s,D.O9,A.f,s,s,D.E7,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fC,B.aC(s,B.hw(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ew1(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.ew1.prototype={
$0(){this.a.a8k(this.b)
return null},
$S:0}
C.ewu.prototype={
$0(){this.a.a8j(this.b)
return null},
$S:0}
C.ewv.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hHF(d),p=this.a,o=B.n(8),n=p.gdu()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b_
v=p.gdu()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rv(4294967295,r,0,0,r,"preview_"+w,D.qk,"","","",D.de)
C.hn6(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hor(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anE,A.f,r,r,D.E7,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.ij,B.aC(r,B.x(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ew0(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.ew0.prototype={
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
return B.b(s.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d2(new C.evR(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evR.prototype={
$0(){return C.hn6(this.a,this.b.a)},
$S:0}
C.ew3.prototype={
bkr(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7_.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkr(d,e)},
$S:z+91}
C.ewP.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("M<1,r>")
v=B.C(new B.M(d,new C.ewR(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c8(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP)},
$S:z+92}
C.ewR.prototype={
$1(d){var w=this
return w.a.b7F(d,w.b===d,w.c,w.d,new C.ewQ(w.e,d),!D.a7_.t(0,d))},
$S:z+25}
C.ewQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eww.prototype={
$1(d){this.b.$2(d,new C.ew_(this.a,d,this.c))
return null},
$S:z+26}
C.ew_.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDf(u,new C.evQ(v,this.c,w),w)},
$S:0}
C.evQ.prototype={
$0(){return this.a.d2(new C.evO(this.b,this.c))},
$S:0}
C.evO.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ewx.prototype={
$1(d){this.b.$2(d,new C.evZ(this.a,d))
return null},
$S:z+26}
C.evZ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fQP(u,new C.evP(v,w),w)},
$S:0}
C.evP.prototype={
$0(){var w=this.a
return w.d2(new C.evN(w,this.b))},
$S:0}
C.evN.prototype={
$0(){return this.a.gdu().r=this.b},
$S:0}
C.ewy.prototype={
$0(){var w=this.a
return w.m(new C.evY(w))},
$S:0}
C.evY.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ewz.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCq(w,v)}},
$S:0}
C.ewA.prototype={
$0(){this.a.HZ()
return null},
$S:0}
C.ewB.prototype={
$0(){return this.a.a82()},
$S:0}
C.ewC.prototype={
$0(){var w=this.a,v=w.jV()
if(v!=null&&v.b===D.cQ)w.d2(new C.evX(v))},
$S:0}
C.evX.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.ewE.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.ewF.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fb(v,!0)
return null},
$S:0}
C.ewG.prototype={
$0(){this.a.d2(new C.evW(this.b))},
$S:0}
C.evW.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ewH.prototype={
$0(){this.a.d2(new C.evU(this.b))},
$S:0}
C.evU.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.ewI.prototype={
$0(){this.a.d2(new C.evT(this.b))},
$S:0}
C.evT.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.ewJ.prototype={
$0(){this.a.d2(new C.evS(this.b))},
$S:0}
C.evS.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.est.prototype={
$1(d){return this.bko(d)},
bko(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d2(new C.ess(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:186}
C.ess.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.exb.prototype={
$0(){var w=this.a
return w.d2(new C.exa(w,this.b))},
$S:0}
C.exa.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.exc.prototype={
$0(){var w=this.a
return w.d2(new C.ex9(w,this.b))},
$S:0}
C.ex9.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.etB.prototype={
$0(){return this.a.d2(new C.etA(this.b))},
$S:0}
C.etA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etC.prototype={
$0(){return this.a.d2(new C.etz(this.b))},
$S:0}
C.etz.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eu8.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apl,new C.eu7(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eu7.prototype={
$1(d){var w=null
return B.zI(B.d(d.b,w,w,w,w,w,w,A.m8,w,w,w),48,d,x.fO)},
$S:z+95}
C.exo.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.exn.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kj()?q:new C.exl(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.b_:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.ct:A.c
t=B.bZ(0,C.hor(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aC(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.ny,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aj6,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.exm(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:78}
C.exm.prototype={
$0(){var w=this.a
return w.m(new C.exh(w,this.b))},
$S:0}
C.exh.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K0()},
$S:0}
C.exl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bS(null,null,new C.exi(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.exj(q,s))
q.aRw()}else if(r==="del"){q=t.a
q.m(new C.exk(q,s))
q.aQE()}else if(r==="up")t.a.b2R(s,s-1)
else if(r==="down")t.a.b2R(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exi.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOf,w,w,w,w,new C.exd(d),!1,w,w,w,w,w,w,w,D.fk7,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bO8,w,w,w,w,new C.exe(d),!1,w,w,w,w,w,w,w,A.wD,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNq,w,w,w,w,new C.exf(d),!1,w,w,w,w,w,w,w,D.fsc,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bPs,w,w,w,w,new C.exg(d),!1,w,w,w,w,w,w,w,D.fjX,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.exd.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.exe.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.exf.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.exg.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.exj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exk.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exp.prototype={
$0(){return this.a.a82()},
$S:0}
C.esT.prototype={
$0(){var w=this.a
w.b6h()
w.azr(null)},
$S:0}
C.esS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.az,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c_(A.kE,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.esR(this.a,e.b,e.d,q),B.T(r).k("M<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a6,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:445}
C.esR.prototype={
$1(d){var w=this
return w.a.bEG(d,w.b,w.c,w.d)},
$S:z+23}
C.esG.prototype={
$0(){var w=this
if(w.b){w.a.Nn(w.c)
return}if(w.d){w.a.a80(w.c)
return}if(w.e){w.a.ags(w.c)
return}if(w.f)w.a.b6P(w.c)},
$S:0}
C.esH.prototype={
$0(){this.a.Nn(this.b)
return null},
$S:0}
C.esI.prototype={
$0(){return this.a.a1T(this.b.a)},
$S:0}
C.esJ.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.esF(u,d,w.c,w.d))
v.HE()
v.of()
v.pj()},
$S:18}
C.esF.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.esK.prototype={
$1(d){return this.a.aiU(this.b.a,d)},
$S:2}
C.esM.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h1T(w))u.a.Nn(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6P(v)},
$S:0}
C.esL.prototype={
$0(){return this.a.a1T(this.b.a)},
$S:0}
C.esN.prototype={
$1(d){var w=this,v=w.a
v.m(new C.esE(w.b,d,w.c,w.d))
v.HE()
v.of()
v.pj()},
$S:18}
C.esE.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.esO.prototype={
$1(d){var w=this.a
w.m(new C.esD(this.b,d))
w.HE()
w.of()
w.pj()},
$S:222}
C.esD.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.esP.prototype={
$0(){var w=this.a
w.m(new C.esC(this.b))
w.HE()
w.of()
w.pj()},
$S:0}
C.esC.prototype={
$0(){this.a.r=C.hnW()},
$S:0}
C.esQ.prototype={
$0(){return this.a.a1T(this.b.a)},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.m(new C.euJ(w))},
$S:0}
C.euJ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euL.prototype={
$1(d){return this.a.cCp(this.b.a,d)},
$S:2}
C.etP.prototype={
$1(d){var w
this.a.d2(d)
w=this.b
if(w!=null)w.$0()},
$S:169}
C.etQ.prototype={
$1(d){return this.a.$1(new C.etO(this.b,d))},
$S:6}
C.etO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etR.prototype={
$1(d){return this.a.$1(new C.etN(this.b,d))},
$S:6}
C.etN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etS.prototype={
$1(d){return this.a.$1(new C.etM(this.b,d))},
$S:6}
C.etM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etT.prototype={
$1(d){return this.a.$1(new C.etL(this.b,d))},
$S:6}
C.etL.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.etU.prototype={
$1(d){return this.a.$1(new C.etK(this.b,d))},
$S:6}
C.etK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etV.prototype={
$1(d){return this.b.$1(new C.etJ(this.a,this.c))},
$S:8}
C.etJ.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.etW.prototype={
$1(d){return this.b.$1(new C.etI(this.a,this.c))},
$S:8}
C.etI.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.etX.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cX
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etH(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:444}
C.etH.prototype={
$0(){return this.a.$1(new C.etE(this.b,this.c))},
$S:0}
C.etE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.etY.prototype={
$1(d){return this.a.$1(new C.etG(this.b,d))},
$S:1704}
C.etG.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.etZ.prototype={
$1(d){var w=null
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etF(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:444}
C.etF.prototype={
$0(){return this.a.$1(new C.etD(this.b,this.c))},
$S:0}
C.etD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eu_.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).py()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eF()}v.a.as2()},
$S:0}
C.eu2.prototype={
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
r.push(B.ao(2,B.p(n,B.X(A.uc,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mt,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eH(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.az,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:129}
C.erC.prototype={
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
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eH(B.x(B.a([B.ef(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j8,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.az,A.aC,A.x,u,p,p),A.n),p,A.Fw,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:129}
C.evH.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aou,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.em(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.evF(d),w,w),B.bG(A.pn,new C.evG(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.evF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evG.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d0w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.az(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.az(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.az(0,i)
v=B.n(22)
t=B.aq(A.aJ,A.d.gI(C.kx(j.a.c.w)?D.un:N.nq),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kx(j.a.c.w)?D.un:N.nq).j(0.18+w*0.12),A.J,32+w*10),D.abz],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b0,0.9,A.x,k,0,B.a([A.d.gI(C.kx(j.a.c.w)?D.un:N.nq).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kx(j.a.c.w)?D.un:N.nq).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kx(j.a.c.w)?D.un:N.nq).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kx(m)?D.un:N.nq
s=B.a([new B.ac(0,A.G,A.d.gI(C.kx(m)?D.un:N.nq).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ef(A.A,B.p(k,B.X(C.kx(j.a.c.w)?A.vR:A.q7,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.az,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kx(j.a.c.w)?D.un:N.nq).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fQ,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fcl,A.L,k,k),A.au,B.d(j.gcxm(),k,k,k,k,k,k,D.fgS,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gS7()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kx(j.a.c.w)?D.un:N.nq).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JG(A.ya,"Download PDF","pdf",A.d_,j.IU(0),!1,k))
p=j.a.c
if(!p.z||p.gS7()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JG(A.kw,"Transfer to "+C.hnY(p==null?"":p),"transfer_hati",A.aV,j.IU(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IU(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JG(D.bFQ,"Rename presentation","rename",A.cb,n,!1,k),A.am,new C.JG(A.akO,"Duplicate","duplicate",A.b6,j.IU(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JG(A.e6,"Delete presentation","delete",A.av,j.IU(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IU(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IU(n)
s.push(B.dW(B.de(B.bK(!1,E.aRI,k,k,!0,k,k,new C.d0v(d),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.aw,k,D.bvw,k,k,k,k,k,A.k9,k,k)),n),new B.v(0,(1-p)*8)))
return B.ef(A.A,B.de(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.buF,B.x(s,A.m,k,A.e,A.N,0,A.p),k)],m),k),A.aq),A.f,k,A.VC,new B.o(A.ay,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:47}
C.d0v.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d0S.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d0T.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d0t.prototype={
$1(d){var w=this.a
return w.m(new C.d0p(w))},
$S:23}
C.d0p.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d0u.prototype={
$1(d){var w=this.a
return w.m(new C.d0o(w))},
$S:51}
C.d0o.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0s.prototype={
$0(){var w=this.a
return w.m(new C.d0q(w))},
$S:0}
C.d0q.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0r.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eym.prototype={
$0(){return $.bk6=!$.bk6},
$S:0}
C.eyc.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUI())u.avW()},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eyd.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eye.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avW()},
$S:0}
C.ey8.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ey9.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eya.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eyb.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.eyj.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.r,w,null)},
$S:1705}
C.eyk.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hZ)return new B.d_(e,!1,d,null)
w=this.a
return w.cvj(w.e,d,e)},
$S:450}
C.eyf.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fE((1-v.gp(0))*1.5708)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyg.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k8((1-v.gp(0))*1.5708)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyh.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fE(v.gp(0)*0.8)
w.k8(v.gp(0)*0.35)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyi.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fE(-v.gp(0)*1.2)
return B.fv(A.a8,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyn.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYE().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYE().x
t===$&&B.c()
return new C.b0P(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IE(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:656}
C.eyp.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bW,x.w).w.a.a*0.55)w.avW()
else w.cjG()},
$S:51}
C.eyo.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fHd.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:451}
C.fHm.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.fHj(d),w,w),B.bK(!1,D.fzt,w,w,!0,w,w,new C.fHk(d,this.b,v),w,w),B.bG(A.aRZ,new C.fHl(d,v,this.c),w)],x.p),w,w,M.tw,new B.a7(320,w,t,w),w,w,w,w,D.fAW,w)},
$S:20}
C.fHj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fHk.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.h2x(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHl.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPH(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aP7(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHc.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cee.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:535}
C.fHi.prototype={
$1(d){return d.ah()},
$S:z+14}
C.feo.prototype={
$1(d){return C.h2v(C.VM(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fQ4.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.fQ5.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,D.h4M,0.94+w*0.06,null,null),w)},
$S:449}
C.fQ6.prototype={
$1(d){var w=this
return new C.VO(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.exT.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.exS.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VP(u,this.b,w.gaNW(),v,null)},
$S:z+99}
C.exQ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exU.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exY.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.exZ.prototype={
$0(){var w=this.a
return w.m(new C.exX(w))},
$S:0}
C.exX.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ey_.prototype={
$0(){var w=this.a
return w.m(new C.exW(w))},
$S:0}
C.exW.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ey0.prototype={
$1(d){return this.a.bJm(d,this.b)},
$S:z+100}
C.exO.prototype={
$0(){var w=this.a
return w.m(new C.exN(w,this.b))},
$S:0}
C.exN.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ey1.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ey2.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ey3.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ey4.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ey5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fN(new B.fE(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.eZJ)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.erv())},
$S:0}
C.erv.prototype={
$0(){},
$S:0}
C.erx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:9}
C.ers.prototype={
$1(d){return this.a.m(new C.err())},
$S:2}
C.err.prototype={
$0(){},
$S:0}
C.ert.prototype={
$1(d){return this.a.aZG()},
$S:2}
C.eru.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ey7.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ey6(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ey6.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fBx.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ex(new B.jM(this.c,new C.fBw(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:228}
C.fBw.prototype={
$3(d,e,f){return new C.IE(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fBy.prototype={
$1(d){var w=null
return B.on(!1,B.av(new C.buD(this.a,this.b,w),w,w,w),w,x.z)},
$S:324}
C.fBC.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bN(A.nd,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmF(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q_))throw B.V("Could not draw the slide.")
u=r.m1(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.fBD.prototype={
bkW(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hv(A.h0),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hR([J.eU(A.dD.gaP(r))],"image/png"))
t.toString
s=Am.fUh(t)
w=4
return B.b(new B.q5(s,"load",!1,x.ev).gI(0).d7(0,A.jE),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkW(d)},
$S:1709}
C.fBz.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:151}
C.fBA.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:151}
C.fBB.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f8L.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f8R,A.L,w,w)},
$S:1710}
C.f8M.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m5(A.bn,w,A.dR,8,w,e===0?w:e,w),A.aq)},
$S:564}
C.efG.prototype={
$1(d){this.a.ZR()
return null},
$S:12}
C.efE.prototype={
$0(){return this.a.e=D.bqK},
$S:0}
C.efF.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgN.prototype={
$1(d){return A.o.dB(1,d.a)},
$S:z+103}
C.cgO.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aLC.prototype
w.bvx=w.q
w=C.aL5.prototype
w.bv_=w.q
w=C.aKR.prototype
w.buK=w.q
w=C.aL4.prototype
w.buZ=w.q
w=C.aLA.prototype
w.bvv=w.q
w=C.aMX.prototype
w.bx2=w.q
w=C.aJM.prototype
w.btC=w.q
w=C.aLO.prototype
w.bvJ=w.q
w=C.aLP.prototype
w.bvK=w.q
w=C.b2u.prototype
w.bqg=w.aCD})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i8G","ank",104)
v(C.aIL.prototype,"gc3I","YL",0)
var r
u(r=C.axl.prototype,"gcwI","cwJ",38)
v(r,"gc4t","ad9",0)
v(r=C.axh.prototype,"gaY8","E0",3)
v(r,"gc4q","c4r",3)
v(r,"gawd","xG",0)
v(r,"gawe","Iy",0)
t(C,"i96","hFp",105)
v(C.aDp.prototype,"gc7a","c7b",3)
s(C,"i9h",0,null,["$4$paper$photo$request$template"],["fIC"],106,0)
s(C,"i9g",0,null,["$5$doc$history$instruction$photo$template"],["bBJ"],107,0)
v(r=C.aDI.prototype,"gc7S","IR",0)
v(r,"gbIP","WB",0)
v(r,"gc7V","adZ",0)
v(r,"gc7U","ZD",0)
v(r,"gaZl","Eh",0)
v(C.aDM.prototype,"gc8_","ZF",0)
v(r=C.aF8.prototype,"gaZy","PG",0)
v(r,"gcoy","b2X",3)
v(r,"gcy6","aAK",86)
v(r,"gbME","a9Y",0)
v(r,"gc8q","Ar",0)
v(r=C.aH3.prototype,"gcip","a0_",0)
v(r,"gcix","a02",0)
v(r,"gbBF","a8q",0)
v(r,"gc8u","aea",0)
v(C.aH2.prototype,"gc8v","aeb",0)
v(C.aB3.prototype,"gbAE","a8d",0)
v(C.azr.prototype,"gc8w","ZQ",0)
w(C,"i9u","i7n",12)
w(C,"i9s","i4k",12)
w(C,"i9t","i6n",12)
v(r=C.aE1.prototype,"gcBk","cBl",3)
v(r,"gcmO","cmP",3)
u(r,"gEn","aeQ",7)
v(r,"gbGq","ard",3)
u(r,"gEo","b_Q",7)
v(r,"gcaE","aex",0)
v(r,"gc9v","aew",0)
v(r,"gccO","aeR",0)
v(r,"gbIM","a9z",0)
v(r,"gcdH","a_p",0)
v(r,"gcdI","af7",0)
v(r,"gcee","afe",0)
v(r,"gcd0","aeU",0)
v(r,"gbMO","aa1",0)
v(r,"gaRv","aRw",3)
v(r,"gaQD","aQE",3)
v(r,"gaMg","aMh",3)
v(r,"gaQC","as2",3)
u(r,"gbAV","bAW",80)
v(r,"gaAg","b61",3)
v(r,"gc9x","c9y",3)
v(r,"gbXW","bXX",3)
v(r,"gbLe","bLf",3)
v(r=C.aE4.prototype,"gcA7","cA8",3)
v(r,"gczN","czO",3)
t(C,"i9v","i7E",2)
v(r=C.aE2.prototype,"gc8C","IW",0)
v(r,"gcqz","R6",0)
v(r,"gc8z","IV",0)
v(r,"gcCA","a2x",0)
v(r,"gceq","afl",0)
v(C.aE0.prototype,"gc8D","aZG",3)
v(r=C.aE3.prototype,"gbNA","aab",0)
u(r,"gc8A","c8B",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nU,C.RB,C.bHg,C.bFD,C.cwY,C.cwW,C.bNG,C.b8e,C.cwX,C.bEd,C.cgH,C.cgF,C.cgG,C.cgE,C.asu,C.cgD,C.bOz,C.ok,C.aED,C.jo,C.nH,C.a7K,C.zv,C.lg,C.oy,C.m7,C.zx,C.nL,C.a7S,C.aqS,C.b0Q,C.ef5,C.ld,C.EC,C.ew,C.j0,C.Et,C.xz,C.eM,C.lG,C.i3,C.jH,C.a7T,C.af0,C.b0R,C.b2u,C.a2F])
u(B.km,[C.cEO,C.bZl,C.fwN,C.cGj,C.cFG,C.fCf,C.dYr,C.dYq,C.efJ,C.efI,C.fDE,C.ffw,C.ffx,C.ccB,C.ccC,C.ccD,C.ek6,C.eSV,C.eSi,C.eSh,C.eTl,C.eST,C.eSM,C.eT4,C.eTL,C.fnb,C.eZV,C.eZU,C.f_n,C.ef8,C.fH9,C.dUa,C.fND,C.fE0,C.ce6,C.ce4,C.ce9,C.fEv,C.fEw,C.fEx,C.fEy,C.cdR,C.cdS,C.dGq,C.cdO,C.fEu,C.f6j,C.dSm,C.cdH,C.eeP,C.fC4,C.ev6,C.evv,C.evs,C.evr,C.evC,C.evB,C.ex6,C.ex5,C.evl,C.evk,C.erV,C.et4,C.ew3,C.exo,C.exn,C.esS,C.eu2,C.erC,C.d0w,C.eyj,C.eyk,C.eyf,C.eyg,C.eyh,C.eyi,C.eyn,C.cee,C.exT,C.ey3,C.cgO])
u(B.hY,[C.cEP,C.cEQ,C.bOA,C.fu_,C.bZk,C.bZn,C.fK7,C.f7h,C.f78,C.f7o,C.fep,C.feq,C.fwO,C.fwM,C.fJC,C.ftE,C.fKt,C.cG9,C.cGe,C.cGg,C.cGc,C.cGh,C.cGa,C.cGi,C.cG5,C.cG2,C.cG1,C.cG8,C.cFB,C.cFz,C.fBh,C.fBi,C.fiP,C.fCg,C.fCm,C.fhS,C.c8U,C.fBf,C.fBg,C.fw9,C.fwa,C.fCl,C.fCh,C.fCj,C.fCk,C.fCi,C.fNV,C.fwd,C.fwe,C.fwh,C.fwi,C.fwl,C.fwm,C.fPn,C.ffY,C.fPy,C.ej0,C.ej1,C.ej2,C.eiJ,C.eiV,C.eiW,C.eiY,C.ccA,C.ccy,C.ccz,C.fBW,C.fBY,C.fBX,C.ffy,C.ffz,C.fPB,C.ekb,C.ekc,C.ek3,C.ek4,C.ek7,C.ek8,C.fPR,C.eTM,C.eTb,C.eSW,C.eT8,C.eSd,C.eSe,C.eSf,C.eSj,C.eSk,C.eTB,C.eTI,C.eTK,C.eTk,C.eTm,C.eTq,C.eTr,C.eTs,C.eTw,C.eTn,C.eTo,C.eSv,C.eSw,C.eSx,C.eSy,C.eSz,C.eSA,C.eSB,C.eSC,C.eSD,C.eRR,C.eRS,C.eRT,C.eRU,C.eRW,C.eRX,C.eSp,C.eSq,C.eSr,C.eSs,C.eSt,C.eS0,C.eS1,C.eS2,C.eS3,C.eSL,C.eT3,C.fzk,C.fzj,C.cdY,C.fna,C.fH5,C.fGZ,C.fH1,C.fEZ,C.fF_,C.fF0,C.fzr,C.fzq,C.fzp,C.fzn,C.fft,C.ffu,C.ffv,C.fQ2,C.eZX,C.eZY,C.eZR,C.eZL,C.f_g,C.f_h,C.f_j,C.f_k,C.f_f,C.fQ1,C.eZC,C.fmq,C.ef7,C.fH7,C.fH8,C.fHa,C.fH3,C.fH4,C.fPf,C.diO,C.diU,C.ef6,C.fc0,C.fc2,C.fc1,C.fc_,C.fAv,C.fAx,C.fdX,C.fGA,C.fGB,C.fGC,C.fGN,C.fGS,C.fGT,C.fGU,C.fGV,C.fGW,C.fGX,C.fGY,C.fGD,C.fGE,C.fGF,C.fGG,C.fGH,C.fGI,C.fGJ,C.fGK,C.fGL,C.fGM,C.fGO,C.fGP,C.fGQ,C.fGR,C.fyl,C.flZ,C.flY,C.fHg,C.dUb,C.dU9,C.eYM,C.c8v,C.c8x,C.fNF,C.d85,C.d87,C.fNE,C.fNC,C.fQ0,C.fDX,C.d7G,C.fwp,C.fwq,C.cdW,C.cdX,C.cdV,C.cdL,C.cdM,C.cdI,C.cdJ,C.cdK,C.cec,C.ce7,C.ce2,C.ce3,C.ce5,C.ce8,C.cea,C.fEz,C.cdQ,C.cdT,C.cdU,C.ce_,C.ce0,C.fHn,C.fGu,C.cdP,C.cdN,C.fEt,C.fox,C.cdG,C.eWp,C.frp,C.exK,C.eu9,C.eua,C.evK,C.evy,C.evz,C.etx,C.exv,C.exw,C.exx,C.esW,C.evd,C.evf,C.euQ,C.euN,C.eu5,C.eu6,C.euX,C.esY,C.ev8,C.ev9,C.ev7,C.evb,C.eva,C.evt,C.evu,C.evw,C.evp,C.etg,C.etd,C.evD,C.et5,C.exu,C.erE,C.et8,C.et7,C.esm,C.esr,C.esp,C.esn,C.exC,C.exD,C.exE,C.exB,C.ex8,C.ex7,C.ex1,C.ex3,C.ewU,C.exs,C.exq,C.erM,C.erI,C.eu3,C.esv,C.erX,C.erW,C.esi,C.esj,C.etv,C.esx,C.esB,C.evm,C.ewV,C.ewW,C.ewX,C.ewY,C.et_,C.et0,C.et1,C.euw,C.etr,C.etj,C.etq,C.euG,C.euH,C.ewt,C.ewv,C.ewP,C.ewR,C.eww,C.ewx,C.est,C.eu8,C.eu7,C.exi,C.esR,C.esJ,C.esK,C.esN,C.esO,C.euL,C.etP,C.etQ,C.etR,C.etS,C.etT,C.etU,C.etV,C.etW,C.etX,C.etY,C.etZ,C.evH,C.d0t,C.d0u,C.eyp,C.fHd,C.fHm,C.fHc,C.fHi,C.feo,C.fQ4,C.fQ5,C.fQ6,C.exS,C.ey0,C.erx,C.ers,C.ert,C.fBx,C.fBw,C.fBy,C.fBD,C.fBz,C.fBA,C.f8L,C.f8M,C.efG,C.cgN])
u(B.ja,[C.cER,C.f7d,C.f7i,C.f7j,C.f7e,C.f7f,C.f7g,C.f76,C.f77,C.f79,C.f7a,C.f7n,C.f7m,C.f7c,C.f7b,C.f7k,C.f7l,C.f7q,C.f7r,C.f7p,C.cGb,C.cGf,C.cGd,C.cG3,C.cG4,C.cG6,C.cG_,C.cG0,C.cG7,C.cFZ,C.cFY,C.cFX,C.cFq,C.cFp,C.cFs,C.cFA,C.cFt,C.cFr,C.cFv,C.cFw,C.cFx,C.cFu,C.cFy,C.cFC,C.cFD,C.cFE,C.cFF,C.fw7,C.fw8,C.fw5,C.fw6,C.eau,C.eas,C.eat,C.eav,C.eaw,C.dYp,C.fwb,C.fwc,C.fwf,C.fwg,C.fwj,C.fwk,C.efH,C.fE3,C.fE2,C.ej_,C.eiZ,C.eiD,C.eiz,C.eiK,C.eiL,C.eiM,C.eiF,C.eiG,C.eiH,C.eiI,C.eiE,C.eiB,C.eiC,C.eiS,C.eiT,C.eiR,C.eiU,C.eiQ,C.eiP,C.eiO,C.eiX,C.eiN,C.eiA,C.eka,C.ejZ,C.ek_,C.ek5,C.ek0,C.ek2,C.ek1,C.ek9,C.eSE,C.eT1,C.eSn,C.eSo,C.eSl,C.eSm,C.eT7,C.eT6,C.eT5,C.eTa,C.eT9,C.eSc,C.eSg,C.eSb,C.eSa,C.eS7,C.eS9,C.eS8,C.eTJ,C.eTC,C.eTA,C.eTD,C.eTz,C.eTE,C.eTy,C.eTF,C.eTG,C.eTH,C.eTx,C.eTj,C.eTe,C.eTp,C.eTi,C.eTt,C.eTh,C.eTu,C.eTg,C.eTv,C.eTf,C.eSZ,C.eSY,C.eT_,C.eSX,C.eT0,C.eSR,C.eSQ,C.eSS,C.eSP,C.eSO,C.eSN,C.eRV,C.eRQ,C.eS4,C.eS_,C.eS5,C.eRZ,C.eS6,C.eRY,C.eSU,C.eSI,C.eSH,C.eSJ,C.eSG,C.eSK,C.eSF,C.eT2,C.eTd,C.eTc,C.eSu,C.fH0,C.fH2,C.fH6,C.fzo,C.fBP,C.fBN,C.fBO,C.eZZ,C.f__,C.eZW,C.eZQ,C.eZP,C.eZS,C.eZT,C.eZF,C.eZG,C.eZI,C.eZJ,C.eZK,C.eZH,C.eZM,C.f_c,C.f_d,C.f_b,C.f_e,C.f_a,C.f_9,C.f_8,C.f_i,C.f_7,C.f_6,C.f_5,C.f_l,C.f_4,C.f_m,C.f_3,C.f_2,C.eZN,C.eZO,C.f_1,C.f_0,C.eZy,C.eZz,C.eZA,C.eZB,C.eZx,C.eZD,C.eZE,C.diN,C.diP,C.diS,C.diT,C.diR,C.diQ,C.fAw,C.fym,C.c8w,C.c8y,C.d7Z,C.d83,C.d84,C.d82,C.d81,C.d86,C.d80,C.d8_,C.d88,C.fNB,C.deM,C.deN,C.deO,C.fwn,C.fwo,C.ced,C.ery,C.erz,C.erA,C.erB,C.fov,C.fow,C.dSo,C.dSn,C.d4V,C.d4U,C.exM,C.exL,C.eub,C.ewS,C.exI,C.evI,C.exy,C.exz,C.exJ,C.euR,C.esU,C.esV,C.eve,C.euP,C.euM,C.euO,C.euS,C.euT,C.euU,C.euV,C.euW,C.euY,C.esZ,C.ev0,C.ev1,C.ev2,C.ev3,C.ev4,C.ev5,C.ev_,C.evc,C.evq,C.evo,C.evx,C.euZ,C.ete,C.etf,C.eth,C.evA,C.evE,C.erT,C.etc,C.eta,C.evM,C.et6,C.evL,C.esX,C.ety,C.ext,C.ewT,C.erU,C.erR,C.erH,C.erD,C.erF,C.et9,C.esl,C.esq,C.eso,C.esk,C.evn,C.exF,C.ex4,C.ex_,C.ex0,C.ex2,C.eu1,C.eu0,C.exr,C.erK,C.erL,C.erN,C.erO,C.erS,C.erJ,C.evJ,C.exA,C.eu4,C.esu,C.erG,C.etw,C.erP,C.erY,C.erZ,C.es_,C.esa,C.esd,C.ese,C.esf,C.esg,C.esh,C.es0,C.es1,C.es2,C.es3,C.es4,C.es5,C.es6,C.es7,C.es8,C.es9,C.esb,C.esc,C.etu,C.ett,C.ets,C.erQ,C.esy,C.esw,C.esz,C.esA,C.etb,C.evi,C.evj,C.evg,C.evh,C.ewZ,C.et3,C.et2,C.euv,C.euu,C.eux,C.eut,C.euy,C.eus,C.euz,C.eur,C.euA,C.euq,C.euB,C.eup,C.euC,C.euo,C.euD,C.eun,C.eug,C.euh,C.eui,C.euf,C.euj,C.eue,C.euk,C.eud,C.eul,C.euc,C.eum,C.eto,C.etp,C.eti,C.etk,C.etl,C.etm,C.etn,C.exG,C.exH,C.euF,C.euE,C.euI,C.ew4,C.ew5,C.ew6,C.ewh,C.ews,C.ewD,C.ewK,C.ewL,C.ewM,C.ewN,C.ewO,C.ew7,C.ew8,C.ew9,C.ewa,C.ewb,C.ewc,C.ewd,C.ewe,C.ewf,C.ewg,C.ewi,C.ewj,C.ewk,C.ewl,C.ewm,C.ewn,C.ewo,C.ewp,C.ewq,C.evV,C.ewr,C.ew2,C.ew1,C.ewu,C.ew0,C.evR,C.ewQ,C.ew_,C.evQ,C.evO,C.evZ,C.evP,C.evN,C.ewy,C.evY,C.ewz,C.ewA,C.ewB,C.ewC,C.evX,C.ewE,C.ewF,C.ewG,C.evW,C.ewH,C.evU,C.ewI,C.evT,C.ewJ,C.evS,C.ess,C.exb,C.exa,C.exc,C.ex9,C.etB,C.etA,C.etC,C.etz,C.exm,C.exh,C.exl,C.exd,C.exe,C.exf,C.exg,C.exj,C.exk,C.exp,C.esT,C.esG,C.esH,C.esI,C.esF,C.esM,C.esL,C.esE,C.esD,C.esP,C.esC,C.esQ,C.euK,C.euJ,C.etO,C.etN,C.etM,C.etL,C.etK,C.etJ,C.etI,C.etH,C.etE,C.etG,C.etF,C.etD,C.eu_,C.evF,C.evG,C.d0v,C.d0S,C.d0T,C.d0p,C.d0o,C.d0s,C.d0q,C.d0r,C.eym,C.eyc,C.eyl,C.eyd,C.eye,C.ey8,C.ey9,C.eya,C.eyb,C.eyo,C.fHj,C.fHk,C.fHl,C.exP,C.exQ,C.exR,C.exU,C.exV,C.exY,C.exZ,C.exX,C.ey_,C.exW,C.exO,C.exN,C.ey1,C.ey2,C.ey4,C.ey5,C.erw,C.erv,C.err,C.eru,C.ey7,C.ey6,C.fBC,C.fBB,C.efE,C.efF])
t(C.aR0,B.J)
u(B.mc,[C.a3D,C.awO,C.avv,C.xx,C.xA,C.kU,C.tl,C.Bt,C.ru,C.w_,C.arr,C.IF,C.aqR,C.uH,C.mx,C.hE,C.a8u])
u(C.bNG,[C.cwZ,C.bNH])
u(C.cgH,[C.cgL,C.ast])
t(C.cgK,C.cgF)
t(C.cgJ,C.cgE)
t(C.cgM,C.cgJ)
t(C.cgI,C.cgG)
t(C.cgC,C.cgD)
t(C.b9N,B.oR)
t(C.cqK,B.auX)
t(C.a8g,B.xk)
t(C.aVu,B.dH)
t(C.aAm,B.atP)
u(B.ag,[C.a0G,C.Yq,C.Yo,C.aq2,C.VA,C.VD,C.a_H,C.a0d,C.a0c,C.aDB,C.Zz,C.Nk,C.Z7,C.Zs,C.ao2,C.aIs,C.UP,C.azb,C.a7A,C.NM,C.ayy,C.JG,C.a_j,C.VO,C.VP,C.aE_,C.aqW,C.a7B])
u(B.ah,[C.aIL,C.axl,C.axh,C.aDp,C.aDI,C.aDM,C.aF8,C.aH3,C.aH2,C.aLC,C.aB3,C.aL5,C.azr,C.bfG,C.aKR,C.aMX,C.aL4,C.bdz,C.aLA,C.aLO,C.aJM,C.bck,C.aLP,C.aE2,C.bk5,C.aE0,C.aE3,C.bjP])
u(B.au,[C.axj,C.ad7,C.acw,C.biR,C.ada,C.aeR,C.b0s,C.bse,C.b0M,C.blp,C.bqN,C.aZG,C.b0P,C.add,C.adv,C.b0N,C.IE,C.aZJ,C.bcz,C.Pq,C.JN,C.bhd,C.bhc,C.buD])
u(B.H9,[C.bc1,C.btE,C.aJ4,C.beJ,C.bra])
u(B.mN,[C.bc0,C.b8w,C.br7,C.bby,C.bf6,C.bhj,C.bec,C.bf3,C.beL,C.bnF,C.b9F,C.b9i,C.buA,C.brA,C.bqJ,C.be5,C.b0K,C.bpG,C.bqG])
t(C.bjM,C.aLC)
t(C.bj8,C.aL5)
t(C.biT,C.aKR)
t(C.bu6,C.aMX)
t(C.bj5,C.aL4)
t(C.bjK,C.aLA)
t(C.bwV,C.aLO)
t(C.aE1,C.bwV)
t(C.bcl,C.aJM)
t(C.aE4,C.aLP)
t(C.bur,B.iT)
t(C.a8t,B.kt)
t(C.cgP,C.b2u)
t(C.ai2,C.a2F)
u(B.Xr,[C.aQR,C.aSm])
t(C.awq,C.aQR)
w(C.aLC,B.ca)
w(C.aL5,B.ca)
w(C.aKR,B.ca)
w(C.aL4,B.ca)
w(C.aLA,B.ca)
w(C.aMX,B.ca)
w(C.aJM,B.eT)
w(C.aLO,B.ca)
v(C.bwV,B.eA)
w(C.aLP,B.ca)})()
B.k0(b.typeUniverse,JSON.parse('{"aRA":{"hL":["aRA"]},"nU":{"aRA":[],"hL":["aRA"]},"aR0":{"J":["RB"],"J.E":"RB"},"b9N":{"oR":[]},"a8g":{"xk":[],"od":[]},"aVu":{"dH":[],"cy":[],"r":[]},"aAm":{"aS":[],"d7":["aS"],"aR":[],"cv":[]},"a0G":{"ag":[],"r":[]},"aIL":{"ah":["a0G"]},"Yq":{"ag":[],"r":[]},"Yo":{"ag":[],"r":[]},"axl":{"ah":["Yq"]},"axh":{"ah":["Yo"]},"axj":{"au":[],"r":[]},"aq2":{"ag":[],"r":[]},"aDp":{"ah":["aq2"]},"ad7":{"au":[],"r":[]},"acw":{"au":[],"r":[]},"ada":{"au":[],"r":[]},"aeR":{"au":[],"r":[]},"biR":{"au":[],"r":[]},"VA":{"ag":[],"r":[]},"aDI":{"ah":["VA"]},"b0s":{"au":[],"r":[]},"bc1":{"aB":[]},"bc0":{"aB":[]},"btE":{"aB":[]},"b8w":{"aB":[]},"br7":{"aB":[]},"VD":{"ag":[],"r":[]},"aDM":{"ah":["VD"]},"bby":{"aB":[]},"a_H":{"ag":[],"r":[]},"aF8":{"ah":["a_H"]},"bf6":{"aB":[]},"a0d":{"ag":[],"r":[]},"a0c":{"ag":[],"r":[]},"aDB":{"ag":[],"r":[]},"Zz":{"ag":[],"r":[]},"aH3":{"ah":["a0d"]},"aH2":{"ah":["a0c"]},"bjM":{"ah":["aDB"]},"bhj":{"aB":[]},"aB3":{"ah":["Zz"]},"bse":{"au":[],"r":[]},"b0M":{"au":[],"r":[]},"blp":{"au":[],"r":[]},"Nk":{"ag":[],"r":[]},"Z7":{"ag":[],"r":[]},"bj8":{"ah":["Nk"]},"bqN":{"au":[],"r":[]},"bec":{"aB":[]},"aZG":{"au":[],"r":[]},"azr":{"ah":["Z7"]},"Zs":{"ag":[],"r":[]},"bfG":{"ah":["Zs"]},"bf3":{"aB":[]},"beL":{"aB":[]},"bnF":{"aB":[]},"b9F":{"aB":[]},"b9i":{"aB":[]},"buA":{"aB":[]},"brA":{"aB":[]},"bqJ":{"aB":[]},"be5":{"aB":[]},"ao2":{"ag":[],"r":[]},"b0P":{"au":[],"r":[]},"biT":{"ah":["ao2"]},"add":{"au":[],"r":[]},"adv":{"au":[],"r":[]},"aIs":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"IE":{"au":[],"r":[]},"azb":{"ag":[],"r":[]},"a7A":{"ag":[],"r":[]},"b0N":{"au":[],"r":[]},"b0K":{"aB":[]},"bu6":{"ah":["aIs"]},"aJ4":{"aB":[]},"bj5":{"ah":["UP"]},"bdz":{"ah":["azb"]},"bjK":{"ah":["a7A"]},"aZJ":{"au":[],"r":[]},"beJ":{"aB":[]},"bpG":{"aB":[]},"bqG":{"aB":[]},"ayy":{"ag":[],"r":[]},"JG":{"ag":[],"r":[]},"a_j":{"ag":[],"r":[]},"JN":{"au":[],"r":[]},"NM":{"ag":[],"r":[]},"aE1":{"ah":["NM"],"eA":[]},"bcl":{"ah":["ayy"]},"bcz":{"au":[],"r":[]},"bck":{"ah":["JG"]},"Pq":{"au":[],"r":[]},"aE4":{"ah":["a_j"]},"bra":{"aB":[]},"bhd":{"au":[],"r":[]},"bhc":{"au":[],"r":[]},"VO":{"ag":[],"r":[]},"VP":{"ag":[],"r":[]},"aE_":{"ag":[],"r":[]},"aqW":{"ag":[],"r":[]},"aE2":{"ah":["VO"]},"bk5":{"ah":["VP"]},"aE0":{"ah":["aE_"]},"bur":{"iT":[]},"aE3":{"ah":["aqW"]},"buD":{"au":[],"r":[]},"a7B":{"ag":[],"r":[]},"bjP":{"ah":["a7B"]},"a8t":{"kt":["fu<eR>"],"kh":["fu<eR>"]},"ai2":{"a2F":[]},"aQR":{"j4":[],"fg":[]},"awq":{"j4":[],"fg":[]},"aSm":{"j4":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Ly"),U:w("vu<q3>"),bz:w("w"),M:w("dD<m>"),bo:w("jC"),g7:w("M3"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("Mg"),fS:w("DU"),an:w("HQ"),bm:w("O<RB>"),X:w("O<a2N>"),f3:w("O<aRA>"),aK:w("O<na>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<ly>"),d5:w("O<aA<bv<G,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dL>>"),fG:w("O<aA<~>>"),aF:w("O<ng>"),cd:w("O<ai<jo>>"),ez:w("O<a5<m,aD>>"),d:w("O<a5<m,@>>"),B:w("O<mt>"),h:w("O<jo>"),gE:w("O<zv>"),k:w("O<ok>"),g:w("O<lG>"),D:w("O<i3>"),u:w("O<eM>"),m:w("O<uH>"),i:w("O<hE>"),aC:w("O<a7S>"),o:w("O<zx>"),e3:w("O<aD>"),dN:w("O<v>"),v:w("O<hu>"),cR:w("O<iR>"),J:w("O<jg>"),gx:w("O<pb<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(L,L)>"),ek:w("O<+(G,m)>"),n:w("O<+(G,G)>"),r:w("O<cR>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<r>"),eR:w("O<fg>"),fT:w("O<b8e>"),bx:w("O<aED>"),gz:w("O<af0>"),x:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),bA:w("O<v?>"),Z:w("O<G?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<ok>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bv<G,+icon3d,picture(m?,m?)>"),P:w("a5<m,@>"),f:w("a5<@,@>"),gI:w("a5<G,+icon3d,picture(m?,m?)>"),bR:w("M<hE,r>"),eC:w("M<nL,m>"),cT:w("M<jH,D>"),dv:w("M<m,m>"),f0:w("M<m,r>"),gN:w("M<G,pI>"),gh:w("M<mx,jq<mx>>"),w:w("iD"),ei:w("iA"),g2:w("rk"),fB:w("Et"),b6:w("zv"),gX:w("a7K"),dt:w("lg"),ea:w("ok"),bt:w("lG"),I:w("i3"),F:w("eM"),fO:w("mx"),ff:w("uH"),fP:w("hE"),Q:w("w_"),dO:w("aqS"),a:w("cr"),C:w("aD"),dw:w("asu"),di:w("a8u"),Y:w("eR"),fz:w("+(m,m)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("EY"),dB:w("dx<v>"),bJ:w("dx<m>"),_:w("e1<m>"),N:w("m"),fw:w("q3"),bO:w("as"),K:w("bq<v>"),b:w("bq<L>"),E:w("dL"),W:w("cx<m>"),ac:w("cx<G>"),ex:w("jM<lG>"),cI:w("jM<m>"),cl:w("jM<L>"),b4:w("a_<ld>"),a8:w("a_<m7>"),fR:w("a_<+(m,m)>"),co:w("ea<v>"),l:w("r"),b2:w("bX<~>"),ev:w("q5<dY>"),dT:w("bg<~>"),cQ:w("aAm"),q:w("n2"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),at:w("ba?"),gw:w("ai<a5<m,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i3?"),go:w("b0R?"),a6:w("a7T?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dL,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXb=new B.bI(A.az,null,null,H.aoe,null)
D.aXl=new B.dc(0,-0.15)
D.aXn=new B.dc(0.62,0)
D.aXq=new B.dc(-0.35,-0.45)
D.aXA=new B.dc(0.9,-0.85)
D.aYT=new B.bp(H.SG,H.SG,A.hf,A.hf)
D.aZ7=new B.ay(A.b6,1,A.q,-1)
D.bhQ=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aZj=new B.ay(D.bhQ,1,A.q,-1)
D.aZv=new B.ay(A.aE,1.5,A.q,-1)
D.aZA=new B.ay(A.b6,1.6,A.q,-1)
D.aZQ=new B.ay(A.aE,1.4,A.q,-1)
D.b0c=new B.o(null,null,null,null,null,L.GN,A.a5)
D.bY8=new B.a8(A.a3,A.a8,A.x,G.a3h,null,null)
D.b0k=new B.o(null,null,null,null,null,D.bY8,A.a5)
D.abp=new B.o(A.ay,null,null,A.t9,null,null,A.n)
D.bbP=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bhN=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cVy=w([D.bbP,D.bhN],x.O)
D.ej_=new B.bT(A.A,0.5,A.x,null,0,D.cVy,null,null)
D.b0D=new B.o(null,null,null,null,null,D.ej_,A.a5)
D.X4=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_5=new B.bO(P.v5,A.Y,A.Y,A.Y)
D.b0F=new B.o(D.X4,null,D.b_5,null,null,null,A.n)
D.bZT=new B.a8(A.a3,A.a8,A.x,A.Qj,null,null)
D.b0M=new B.o(null,null,null,null,null,D.bZT,A.a5)
D.acY=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b0P=new B.o(D.acY,null,null,A.qI,null,null,A.n)
D.b0T=new B.o(A.jC,null,null,null,null,null,A.a5)
D.b0W=new B.o(Z.ae4,null,H.ab3,A.mc,null,null,A.n)
D.E7=new B.o(A.dM,null,null,null,null,null,A.a5)
D.b12=new B.o(null,null,null,null,null,E.w6,A.a5)
D.d_t=w([E.aeZ,A.c_],x.O)
D.bZu=new B.a8(A.b0,A.b4,A.x,D.d_t,null,null)
D.b16=new B.o(null,null,null,A.mc,null,D.bZu,A.n)
D.dae=w([A.bj,A.dM,A.jY],x.O)
D.a1q=new B.a8(A.az,A.aC,A.x,D.dae,null,null)
D.b1j=new B.o(null,null,null,null,null,D.a1q,A.n)
D.b1k=new B.o(D.acY,null,null,A.kL,null,null,A.n)
D.cq6=w([A.dc,A.bj],x.O)
D.bZl=new B.a8(A.az,A.aC,A.x,D.cq6,null,null)
D.b1o=new B.o(null,null,null,null,null,D.bZl,A.n)
D.b1y=new B.o(null,null,null,null,null,G.uf,A.a5)
D.b1S=new B.o(A.af0,null,null,null,null,null,A.a5)
D.bcE=new B.w(0.5647058823529412,0,0,0,A.t)
D.abz=new B.ac(0,A.G,D.bcE,A.Sb,28)
D.b4_=new B.aVH()
D.b4y=new C.cqK()
D.b4K=new C.b9N()
D.ac4=new B.cp(A.A,null,null,A.a1f,null)
D.b7h=new B.fk(null,null,null,null,null,E.n5,null,null,null,null)
D.b5g=new B.cp(A.A,null,null,D.b7h,null)
D.bIO=new B.ae(A.dX,28,A.c,null,null,null)
D.b5K=new B.cp(A.A,null,null,D.bIO,null)
D.b7e=new B.fk(2,null,null,null,null,A.c0,null,null,null,null)
D.b65=new B.cp(A.A,null,null,D.b7e,null)
D.bJ8=new B.ae(L.NW,40,A.bz,null,null,null)
D.b66=new B.cp(A.A,null,null,D.bJ8,null)
D.b87=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b8k=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b8I=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b8P=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b9j=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b9z=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b9A=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KT=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.ba_=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.ba5=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adf=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.baR=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bbE=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adu=new B.w(1,1,1,0.9725490196078431,A.t)
D.bbY=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bc7=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bcb=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bco=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcJ=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.be8=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WP=new B.w(0.8509803921568627,0,0,0,A.t)
D.beh=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.beo=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aen=new B.w(0.6,0,0,0,A.t)
D.aep=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bfM=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tu=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bga=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bgA=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bgY=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.afb=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xe=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AS=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lt=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jf=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afz=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xq=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bkl=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bkP=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bl2=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XL=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bmb=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xv=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bmH=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bn0=new B.hK(A.b_,!0,null,null)
D.ff8=new B.H(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF5=new B.y("Bio link",null,D.ff8,null,null,null,null,null,null,null,null,null)
D.b6_=new B.cp(A.A,null,null,D.fF5,null)
D.bng=new B.hK(A.Wb,!0,D.b6_,null)
D.LS=new C.a3D(0,"none")
D.agC=new C.a3D(1,"deflate")
D.agD=new C.a3D(2,"bzip2")
D.bod=new B.ko(0.165,0.84,0.44,1)
D.d_N=w([A.cc,A.dR,A.aE],x.O)
D.bYC=new B.a8(A.az,A.aC,A.x,D.d_N,null,null)
D.b0h=new B.o(null,null,null,null,null,D.bYC,A.n)
D.bS_=new B.ae(A.eT,null,A.ad,null,null,null)
D.b6B=new B.cp(A.A,null,null,D.bS_,null)
D.boK=new B.kR(D.b0h,A.bf,D.b6B,null)
D.bkB=new B.w(0.058823529411764705,1,1,1,A.t)
D.d31=w([A.bE,A.qS,A.qS,D.bkB],x.O)
D.cHl=w([0,0.32,0.7,1],x.x)
D.bZa=new B.a8(A.az,A.aC,A.x,D.d31,D.cHl,null)
D.b06=new B.o(null,null,null,null,null,D.bZa,A.n)
D.boQ=new B.kR(D.b06,A.bf,null,null)
D.bpY=new B.mm(1,1,null,null,null,A.bn,null)
D.bq0=new B.mm(1,null,null,null,null,D.Xq,null)
D.bqu=new B.ba(125e4)
D.bqA=new B.ba(17e4)
D.bqK=new B.ba(35964e8)
D.bqQ=new B.ba(55e4)
D.bqU=new B.ba(68e4)
D.brk=new B.ij(0,0,0,5)
D.brB=new B.Q(0,16,16,0)
D.brL=new B.Q(0,36,0,36)
D.brR=new B.Q(0,54,0,0)
D.brY=new B.Q(10,0,10,3)
D.bs8=new B.ij(10,16,10,10)
D.bsk=new B.Q(10,6,4,6)
D.bsn=new B.Q(10,8,10,6)
D.ahB=new B.Q(11,8,11,11)
D.bsr=new B.Q(12,0,12,24)
D.bsD=new B.Q(12,12,12,4)
D.bsG=new B.Q(12,12,8,12)
D.bsV=new B.Q(12,8,8,12)
D.bth=new B.Q(14,14,14,0)
D.btm=new B.Q(14,14,14,90)
D.btF=new B.Q(16,10,16,16)
D.btG=new B.Q(16,10,16,20)
D.aiq=new B.Q(16,6,16,28)
D.bue=new B.Q(18,0,18,10)
D.bug=new B.Q(18,0,18,30)
D.bui=new B.Q(18,10,18,12)
D.buj=new B.Q(18,10,18,14)
D.buA=new B.Q(18,16,14,18)
D.buF=new B.Q(18,18,18,12)
D.buL=new B.Q(18,26,18,12)
D.buQ=new B.Q(18,34,18,34)
D.buR=new B.Q(18,4,18,14)
D.buX=new B.Q(18,8,18,24)
D.bve=new B.Q(20,16,14,4)
D.bvj=new B.Q(20,18,12,4)
D.bvo=new B.Q(20,20,12,20)
D.bvr=new B.Q(20,22,20,20)
D.bvw=new B.Q(20,6,20,6)
D.bvG=new B.Q(22,18,22,18)
D.bvO=new B.Q(22,24,22,0)
D.bvR=new B.Q(22,24,22,4)
D.bvZ=new B.Q(22,60,22,22)
D.bw4=new B.Q(24,24,24,22)
D.bwe=new B.Q(26,10,60,10)
D.bwm=new B.Q(28,44,28,44)
D.bwD=new B.Q(32,44,32,44)
D.bwL=new B.Q(38,30,38,20)
D.bwQ=new B.Q(4,0,0,6)
D.bx1=new B.ij(4,4,4,4)
D.bxr=new B.ij(6,5,6,5)
D.bxv=new B.Q(6,6,8,6)
D.bxG=new B.Q(8,14,8,14)
D.bxH=new B.Q(8,22,8,22)
D.bxP=new B.Q(8,6,12,6)
D.bxY=new B.Q(8,8,8,4)
D.ajj=new B.Q(9,9,9,6)
D.by8=new B.ij(2.5,2.5,2.5,2.5)
D.by9=new B.Q(10.5,0,10.5,0)
D.bya=new B.Q(7,1.5,7,1.5)
D.cSD=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.byq=new B.yU(null,null,D.cSD,A.Aw)
D.cPG=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.byr=new B.yU(null,null,D.cPG,A.Aw)
D.aRm=new B.H(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEp=new B.y("WORD DESIGN",null,D.aRm,null,null,null,null,null,null,null,null,null)
D.bz_=new B.bB(1,A.bh,D.fEp,null)
D.fE4=new B.y("Slides database",null,Ab.rU,null,null,null,null,null,null,null,null,null)
D.fBi=new B.y("Admin only \xb7 keep as many as you like",null,U.aQQ,null,null,null,null,null,null,null,null,null)
D.dit=w([D.fE4,A.bC,D.fBi],x.p)
D.bnG=new B.fm(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.dit,null)
D.bz2=new B.bB(1,A.bh,D.bnG,null)
D.fvM=new B.y("NGMY logo",null,A.fR,null,null,null,null,null,null,null,null,null)
D.bz5=new B.bB(1,A.bh,D.fvM,null)
D.fd0=new B.H(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new B.y("TALK TO THE EDITOR",null,D.fd0,null,null,null,null,null,null,null,null,null)
D.bzm=new B.bB(1,A.bh,D.fGl,null)
D.fpC=new B.y("Tell the AI what to change",null,Ab.rU,null,null,null,null,null,null,null,null,null)
D.bzH=new B.bB(1,A.bh,D.fpC,null)
D.bAz=new B.DJ(!0,"video/mp4")
D.fbi=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnE=new B.y("Move presentations between devices",null,D.fbi,null,null,null,!1,null,null,1,null,null)
D.bAD=new B.qo(A.ei,A.a3,A.f,D.fnE,null)
D.foP=new B.y("Edit in Slides",null,A.j8,null,null,null,null,null,null,null,null,null)
D.bAE=new B.qo(A.ei,A.A,A.f,D.foP,null)
D.bAT=new B.dq(1,A.co,D.bAE,null)
D.a_M=new B.a0(60988,"MaterialIcons",!1)
D.bEh=new B.a0(61352,"MaterialIcons",!1)
D.akS=new B.a0(61531,"MaterialIcons",!1)
D.bFw=new B.a0(63062,"MaterialIcons",!1)
D.bFE=new B.a0(63109,"MaterialIcons",!1)
D.bFQ=new B.a0(63206,"MaterialIcons",!1)
D.alC=new B.a0(63238,"MaterialIcons",!1)
D.a0g=new B.a0(63365,"MaterialIcons",!1)
D.a0h=new B.a0(63367,"MaterialIcons",!1)
D.a0i=new B.a0(63368,"MaterialIcons",!1)
D.alO=new B.a0(63384,"MaterialIcons",!1)
D.bGo=new B.a0(63525,"MaterialIcons",!1)
D.bGs=new B.a0(63568,"MaterialIcons",!1)
D.bGN=new B.a0(983072,"MaterialIcons",!1)
D.bHb=new B.a0(983271,"MaterialIcons",!0)
D.amV=new B.a0(983965,"MaterialIcons",!1)
D.amW=new B.a0(983966,"MaterialIcons",!1)
D.bI9=new B.a0(984592,"MaterialIcons",!1)
D.bIr=new B.ae(A.u_,16,A.aA,null,null,null)
D.bIy=new B.ae(A.mA,null,A.c,null,null,null)
D.an5=new B.ae(A.q6,18,A.c,null,null,null)
D.bIP=new B.ae(A.BB,18,O.li,null,null,null)
D.bJu=new B.ae(A.jq,11,null,null,null,null)
D.bJE=new B.ae(A.a01,null,A.er,null,null,null)
D.bKc=new B.ae(A.rg,18,A.aA,null,null,null)
D.bKi=new B.ae(A2.BP,14,null,null,null,null)
D.bKj=new B.ae(A.e6,28,A.c9,null,null,null)
D.bKv=new B.ae(A.q7,20,A.c,null,null,null)
D.bKC=new B.ae(A.yp,null,null,null,null,null)
D.bKI=new B.ae(A.j1,18,A.hm,null,null,null)
D.bKN=new B.ae(A.lm,null,null,null,null,null)
D.bFz=new B.a0(63065,"MaterialIcons",!1)
D.bLq=new B.ae(D.bFz,15,A.c,null,null,null)
D.bFF=new B.a0(63113,"MaterialIcons",!1)
D.bLw=new B.ae(D.bFF,null,A.ad,null,null,null)
D.bLU=new B.ae(A.vO,22,A.bM,null,null,null)
D.bMd=new B.ae(A.vP,18,null,null,null,null)
D.bMj=new B.ae(A.BS,12,A.c,null,null,null)
D.bHM=new B.a0(983687,"MaterialIcons",!1)
D.bMu=new B.ae(D.bHM,null,A.bj,null,null,null)
D.bMB=new B.ae(A.ho,null,A.bj,null,null,null)
D.bMU=new B.ae(A.p_,22,A.c,null,null,null)
D.bMY=new B.ae(A.cD,13,A.c,null,null,null)
D.bN3=new B.ae(A.e6,26,A.av,null,null,null)
D.bN6=new B.ae(A.rl,26,A.c,null,null,null)
D.O9=new B.ae(A.jq,8,A.c,null,null,null)
D.bNp=new B.ae(A.q6,40,A.c,null,null,null)
D.bNq=new B.ae(A.bDe,null,null,null,null,null)
D.bNu=new B.ae(A.u8,20,null,null,null,null)
D.bHL=new B.a0(983683,"MaterialIcons",!1)
D.bNE=new B.ae(D.bHL,null,A.aZ,null,null,null)
D.bNF=new B.ae(A.jq,16,A.bj,null,null,null)
D.bO_=new B.ae(A.rm,null,null,null,null,null)
D.anD=new B.ae(A.vR,22,A.c,null,null,null)
D.bO3=new B.ae(A.dX,17,A.c,null,null,null)
D.anE=new B.ae(A.jq,9,A.c,null,null,null)
D.bO8=new B.ae(A.vL,null,null,null,null,null)
D.bDv=new B.a0(57744,"MaterialIcons",!1)
D.bOf=new B.ae(D.bDv,null,null,null,null,null)
D.bOi=new B.ae(A.vL,16,null,null,null,null)
D.bIi=new B.a0(985181,"MaterialIcons",!1)
D.GE=new B.ae(D.bIi,null,null,null,null,null)
D.bOu=new B.ae(A.lm,16,A.bM,null,null,null)
D.bHD=new B.a0(983615,"MaterialIcons",!1)
D.bOw=new B.ae(D.bHD,12,A.c,null,null,null)
D.anK=new B.ae(A.y7,16,null,null,null,null)
D.bOE=new B.ae(A.dX,21,A.c,null,null,null)
D.bOJ=new B.ae(A.ho,17,A.c,null,null,null)
D.bOK=new B.ae(A.vO,null,null,null,null,null)
D.bP_=new B.ae(A.a0U,20,A.aA,null,null,null)
D.bPe=new B.ae(A.o5,22,E.n5,null,null,null)
D.bPl=new B.ae(A.q5,13,A.ad,null,null,null)
D.bPn=new B.ae(A.amH,20,A.aA,null,null,null)
D.bDc=new B.a0(57495,"MaterialIcons",!1)
D.bPs=new B.ae(D.bDc,null,null,null,null,null)
D.bPw=new B.ae(A.o6,18,A.c,null,null,null)
D.bPS=new B.ae(A.uc,28,A.c,null,null,null)
D.bQ1=new B.ae(D.alC,null,A.aE,null,null,null)
D.bQ2=new B.ae(A.q7,22,A.c,null,null,null)
D.anT=new B.ae(A.a_I,16,null,null,null,null)
D.bQO=new B.ae(A.vO,32,A.c,null,null,null)
D.bRw=new B.ae(A.j3,22,A.c,null,null,null)
D.bRA=new B.ae(A.rl,22,A.ad,null,null,null)
D.ao7=new B.ae(A.u_,null,A.bY,null,null,null)
D.bSu=new B.ae(A.tZ,18,null,null,null,null)
D.bT5=new B.ae(A.dX,18,A.bH,null,null,null)
D.a1i=new B.ae(A.cD,18,A.aA,null,null,null)
D.bTb=new B.ae(A.amB,null,null,null,null,null)
D.bTC=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aR9,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.f3u=new B.H(!0,A.bK,null,null,null,null,null,A.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bTU=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f3u,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.bUk=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.cWu=w([A.dM,A.aE],x.O)
D.bWn=new B.a8(A.a3,A.a8,A.x,D.cWu,null,null)
D.bWz=new B.a8(A.b0,A.b4,A.Ui,A.avb,null,null)
D.b8y=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bcM=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bfN=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.baJ=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cHn=w([D.b8y,D.bcM,D.bfN,D.baJ],x.O)
D.bWS=new B.a8(A.az,A.aC,A.x,D.cHn,A.Hc,null)
D.diC=w([A.cs,A.bD,A.b6],x.O)
D.bWU=new B.a8(A.b0,A.b4,A.Ui,D.diC,null,null)
D.dk1=w([A.bj,A.cb],x.O)
D.bWY=new B.a8(A.a3,A.a8,A.x,D.dk1,null,null)
D.df_=w([A.hl,A.d5,A.aF],x.O)
D.bX_=new B.a8(A.az,A.aC,A.x,D.df_,null,null)
D.d1t=w([A.cS,A.fd],x.O)
D.bX3=new B.a8(A.a3,A.a8,A.x,D.d1t,null,null)
D.div=w([O.li,A.d5],x.O)
D.aoT=new B.a8(A.a3,A.a8,A.x,D.div,null,null)
D.bdn=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dis=w([D.bdn,D.xv,A.c0],x.O)
D.bX8=new B.a8(A.a3,A.a8,A.x,D.dis,null,null)
D.cYa=w([A.b2,A.cR,A.eB],x.O)
D.bX9=new B.a8(A.az,A.aC,A.x,D.cYa,null,null)
D.Oo=new B.a8(A.a3,A.a8,A.x,A.Hp,null,null)
D.blp=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cAo=w([D.blp,A.c0,A.jh],x.O)
D.aoY=new B.a8(A.az,A.aC,A.x,D.cAo,null,null)
D.d6K=w([A.vg,A.ax,D.AS],x.O)
D.bYa=new B.a8(A.a3,A.a8,A.x,D.d6K,null,null)
D.bmI=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bbD=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bgN=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cXg=w([D.bmI,D.bbD,D.bgN],x.O)
D.aoZ=new B.a8(A.a3,A.a8,A.x,D.cXg,null,null)
D.bdp=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c_8=w([Aw.agj,D.bdp],x.O)
D.bYj=new B.a8(A.b0,A.b4,A.x,D.c_8,null,null)
D.cVm=w([A.n4,A.bz],x.O)
D.bYn=new B.a8(A.b0,A.b4,A.x,D.cVm,null,null)
D.dbR=w([A.aE,A.dR],x.O)
D.bYt=new B.a8(A.a3,A.a8,A.x,D.dbR,null,null)
D.afl=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awV=w([D.afl,D.jf,D.KT],x.O)
D.bYV=new B.a8(A.az,A.aC,A.x,D.awV,null,null)
D.cAg=w([A.dx,A.dI],x.O)
D.bZ5=new B.a8(A.b0,A.b4,A.x,D.cAg,null,null)
D.d8T=w([A.vc,Az.EL],x.O)
D.bZV=new B.a8(A.a3,A.a8,A.x,D.d8T,null,null)
D.fxi=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c_5=new B.pP(null,D.fxi,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yQ=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5e=new C.kU(2,"elegantNavy")
D.hbB=w([A.Xc,D.jf,A.c0],x.O)
D.jO=new C.xx(0,"classic")
D.a51=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5e,4294967035,4279378237,4290283019,D.jO)
D.aGa=new C.kU(3,"elegantGold")
D.b86=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b92=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adU=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hb3=w([D.b86,D.b92,D.adU],x.O)
D.a5_=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGa,4294966515,4281016592,4289102906,D.jO)
D.dFx=new C.kU(22,"goldRibbon")
D.hb_=w([A.Xc,D.jf,A.i1],x.O)
D.a4T=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dFx,4294967035,4279378237,4291404327,D.jO)
D.dFy=new C.kU(23,"goldBaroque")
D.aey=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hb5=w([D.aey,A.ax,A.jh],x.O)
D.a4U=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dFy,4294964964,4283053072,4292128567,D.jO)
D.dFA=new C.kU(4,"elegantEmerald")
D.bab=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bb6=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hbb=w([D.bab,D.bb6,A.i1],x.O)
D.a4V=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dFA,4294376440,4279122734,4291404327,D.jO)
D.dFB=new C.kU(5,"elegantBurgundy")
D.beN=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hbi=w([D.beN,A.ad7,A.i1],x.O)
D.a4Y=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dFB,4294965238,4283043359,4291404327,D.jO)
D.dFu=new C.kU(19,"goldFiligree")
D.LA=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hb6=w([D.LA,A.ax,A.jh],x.O)
D.a4W=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dFu,4294966259,4279378237,4292128567,D.jO)
D.dFv=new C.kU(20,"goldLaurel")
D.blf=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hbj=w([A.KL,A.i1,D.blf],x.O)
D.a4X=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dFv,4294966776,4282000405,4291404327,D.jO)
D.dFw=new C.kU(21,"goldCrest")
D.ad0=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.blm=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hb8=w([D.ad0,A.ax,D.blm],x.O)
D.a50=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dFw,4294965484,4283053072,4292128567,D.jO)
D.dFz=new C.kU(24,"goldStar")
D.bmA=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hbc=w([D.bmA,A.ax,D.jf],x.O)
D.a4Z=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dFz,4294966518,4279378237,4292128567,D.jO)
D.GP=w([D.a51,D.a5_,D.a4T,D.a4U,D.a4V,D.a4Y,D.a4W,D.a4X,D.a50,D.a4Z],x.h)
D.qk=new C.mx(0,"blank")
D.S0=new C.mx(1,"title")
D.mJ=new C.mx(2,"titleContent")
D.e_a=new C.mx(3,"twoColumn")
D.CR=new C.mx(4,"section")
D.e_b=new C.mx(5,"comparison")
D.I_=new C.mx(6,"flashcard")
D.I0=new C.mx(7,"quiz")
D.I1=new C.mx(8,"worksheet")
D.apl=w([D.qk,D.S0,D.mJ,D.e_a,D.CR,D.e_b,D.I_,D.I0,D.I1],B.ax("O<mx>"))
D.axX=w([Ao.WA,A.dI],x.O)
D.ky=w([A.c0,A.bM,A.i0,A.hK,D.AS],x.O)
D.dBq=new C.j0("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axX,D.ky)
D.blx=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.beL=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cVz=w([D.blx,D.beL],x.O)
D.dBh=new C.j0("confetti","Golden Confetti","Together we rise",D.cVz,D.ky)
D.cSI=w([A.nL,A.We],x.O)
D.dBi=new C.j0("crown","Crown of Glory","Built for our community",D.cSI,D.ky)
D.bbt=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.beq=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cZt=w([D.bbt,D.beq],x.O)
D.uh=w([A.bK,A.aQ,A.c,A.aL,A.ak],x.O)
D.dBc=new C.j0("aurora","Aurora Gala","A brighter future, together",D.cZt,D.uh)
D.bfP=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d8Z=w([G.acE,D.bfP],x.O)
D.dBt=new C.j0("champagne","Champagne Toast","Cheers to every member",D.d8Z,D.ky)
D.dBu=new C.j0("diamonds","Diamond Rain","Every member is a jewel",X.ayA,D.uh)
D.b8V=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bdW=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.deg=w([D.b8V,D.bdW],x.O)
D.dB7=new C.j0("starburst","Golden Starburst","Thank you!",D.deg,D.ky)
D.c_f=w([A.fc,A.xp],x.O)
D.acN=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PX=w([A.oJ,A.iy,A.vr,A.nM,D.acN],x.O)
D.dBB=new C.j0("balloons","Luxury Balloons","Let's celebrate",D.c_f,D.PX)
D.cS0=w([A.Wo,A.w],x.O)
D.dBp=new C.j0("galaxy","Galaxy Spiral","The sky is not the limit",D.cS0,D.uh)
D.bjB=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d5w=w([A.kr,D.bjB],x.O)
D.dBk=new C.j0("redcarpet","Red Carpet","Tonight we shine",D.d5w,D.ky)
D.bhq=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bfC=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d9V=w([D.bhq,D.bfC],x.O)
D.dB9=new C.j0("coins","Gold Coin Rain","Every contribution counts",D.d9V,D.ky)
D.dgV=w([A.dx,A.hJ],x.O)
D.dBf=new C.j0("lanterns","Sky Lanterns","Lighting the way together",D.dgV,D.ky)
D.bcs=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cQ_=w([A.xr,D.bcs],x.O)
D.dBb=new C.j0("hearts","Floating Hearts","Made with love",D.cQ_,D.PX)
D.b9s=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.bah=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.diq=w([D.b9s,D.bah],x.O)
D.dBA=new C.j0("petals","Rose Petals","Thank you, from our hearts",D.diq,D.PX)
D.bkz=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.deB=w([A.lh,D.bkz],x.O)
D.dB6=new C.j0("butterflies","Golden Butterflies","New beginnings",D.deB,D.ky)
D.bgK=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cQY=w([D.bgK,A.w],x.O)
D.dBs=new C.j0("neon","Neon Night","Let's go!",D.cQY,D.uh)
D.bdC=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.dc1=w([A.La,D.bdC],x.O)
D.dBv=new C.j0("disco","Disco Ball","Party time",D.dc1,D.uh)
D.bhh=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dbz=w([A.hl,D.bhh],x.O)
D.dBa=new C.j0("sunrise","Golden Sunrise","A new day for our community",D.dbz,D.ky)
D.dbb=w([A.qV,A.dI],x.O)
D.dBw=new C.j0("pearls","Ocean Pearls","Deep roots, bright future",D.dbb,D.uh)
D.bby=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dbp=w([D.bby,A.dI],x.O)
D.dBz=new C.j0("snow","Winter Gala","Warm wishes to all",D.dbp,D.uh)
D.b8g=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9d=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dhk=w([D.b8g,D.b9d],x.O)
D.dBo=new C.j0("laurel","Laurel Victory","We did it together",D.dhk,D.ky)
D.b85=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bem=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cP3=w([D.b85,D.bem],x.O)
D.dBy=new C.j0("ribbons","Silk Ribbons","Elegance in every step",D.cP3,D.ky)
D.bfl=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cAd=w([G.AR,D.bfl],x.O)
D.dBl=new C.j0("kente","Kente Pride","Proud of our roots",D.cAd,D.ky)
D.bhZ=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bkT=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d0a=w([D.bhZ,D.bkT],x.O)
D.dBg=new C.j0("trophy","Trophy Shine","Winners together",D.d0a,D.ky)
D.dbv=w([Ap.KZ,A.w],x.O)
D.dB8=new C.j0("shooting","Shooting Stars","Make a wish",D.dbv,D.uh)
D.b8n=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ag7=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dhB=w([D.b8n,D.ag7],x.O)
D.dBm=new C.j0("bokeh","Golden Bokeh","Shine bright",D.dhB,D.ky)
D.b8K=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d6m=w([D.b8K,A.w],x.O)
D.dBe=new C.j0("orbits","Golden Orbits","Always moving forward",D.d6m,D.ky)
D.bkA=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d2V=w([A.adQ,D.bkA],x.O)
D.dBj=new C.j0("flowers","Blooming Garden","Growing together",D.d2V,D.PX)
D.b8w=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b97=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dgp=w([D.b8w,D.b97],x.O)
D.dBd=new C.j0("music","Music Party","Celebrate with us",D.dgp,D.uh)
D.ba0=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bli=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cQc=w([D.ba0,D.bli],x.O)
D.dBx=new C.j0("mandala","Royal Mandala","Harmony and unity",D.cQc,D.ky)
D.d3_=w([G.AR,D.ag7],x.O)
D.dBr=new C.j0("sparklers","Golden Sparklers","Light up the night",D.d3_,D.ky)
D.dBn=new C.j0("city","City Lights","The whole city celebrates",D.axX,D.ky)
D.GY=w([D.dBq,D.dBh,D.dBi,D.dBc,D.dBt,D.dBu,D.dB7,D.dBB,D.dBp,D.dBk,D.dB9,D.dBf,D.dBb,D.dBA,D.dB6,D.dBs,D.dBv,D.dBa,D.dBw,D.dBz,D.dBo,D.dBy,D.dBl,D.dBg,D.dB8,D.dBm,D.dBe,D.dBj,D.dBd,D.dBx,D.dBr,D.dBn],B.ax("O<j0>"))
D.eoG=new B.z("","No ring")
D.eEf=new B.z("platinum","Platinum")
D.eAz=new B.z("glow","Glow")
D.ese=new B.z("double","Double line")
D.er8=new B.z("framed","Gallery frame")
D.eof=new B.z("rosegold","Rose gold")
D.eBk=new B.z("jewels","Jeweled")
D.ey0=new B.z("aurora","Aurora")
D.Ca=w([D.eoG,A.a6u,D.eEf,D.eAz,I.aMI,D.ese,A.a6w,D.er8,D.eof,D.eBk,D.ey0],x.L)
D.cjG=w([D.a4W,D.a4X,D.a50,D.a4T,D.a4U,D.a4Z],x.h)
D.bOS=new B.ae(G.aks,16,null,null,null,null)
D.b3l=new B.vu(A.bi,D.bOS,null,x.U)
D.bDE=new B.a0(58027,"MaterialIcons",!1)
D.bIx=new B.ae(D.bDE,16,null,null,null,null)
D.b3j=new B.vu(A.L,D.bIx,null,x.U)
D.bDF=new B.a0(58030,"MaterialIcons",!1)
D.bMA=new B.ae(D.bDF,16,null,null,null,null)
D.b3m=new B.vu(A.dN,D.bMA,null,x.U)
D.cpT=w([D.b3l,D.b3j,D.b3m],B.ax("O<vu<q3>>"))
D.cxy=w([A.AV,A.hi],x.O)
D.cxz=w([A.b2,A.bd,A.eB],x.O)
D.PL=w([A.bM,A.hK,A.i0,A.ax,A.nM],x.O)
D.cAj=w([A.c0,D.jf,D.KT],x.O)
D.cAR=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.em3=new B.z(4278913286,4280030216)
D.eml=new B.z(4279373061,4278518787)
D.ems=new B.z(4279898630,4278847235)
D.d_x=w([D.em3,D.eml,D.ems],x.n)
D.cWe=w(["\u265b","\u269c","\u2726"],x.s)
D.dFs=new C.xz("Royal Onyx & Gold",D.d_x,4292128567,4294370209,4294965479,3874020544,D.cWe)
D.elR=new B.z(4278326799,4278598442)
D.elT=new B.z(4278395929,4278258953)
D.em_=new B.z(4278599728,4278327826)
D.dgM=w([D.elR,D.elT,D.em_],x.n)
D.cQQ=w(["\u269c","\u2756","\u2727"],x.s)
D.dFp=new C.xz("Imperial Emerald",D.dgM,4293050997,4294699968,4294180856,3872254170,D.cQQ)
D.elU=new B.z(4278455076,4278918747)
D.elZ=new B.z(4278587439,4278322714)
D.emc=new B.z(4279051376,4278455076)
D.deW=w([D.elU,D.elZ,D.emc],x.n)
D.d71=w(["\u2654","\u2726","\u2748"],x.s)
D.dFj=new C.xz("Sapphire Crown",D.deW,4291417834,4294967295,4294310143,3871986666,D.d71)
D.emq=new B.z(4279894534,4283041554)
D.emC=new B.z(4281008906,4279042307)
D.emK=new B.z(4284221976,4279894534)
D.dkF=w([D.emq,D.emC,D.emK],x.n)
D.cS9=w(["\u265b","\u2766","\u2726"],x.s)
D.dFl=new C.xz("Ruby Throne",D.dkF,4293378685,4294963145,4294964466,3874213833,D.cS9)
D.emk=new B.z(4279371039,4281995100)
D.emu=new B.z(4280092723,4278714896)
D.emH=new B.z(4283045242,4279371039)
D.dh8=w([D.emk,D.emu,D.emH],x.n)
D.dfi=w(["\u2655","\u2756","\u2727"],x.s)
D.dFq=new C.xz("Amethyst Palace",D.dh8,4293314984,4294963421,4294702591,3873229802,D.dfi)
D.elW=new B.z(4278519045,4280032287)
D.emd=new B.z(4279111184,4278321666)
D.emz=new B.z(4280492839,4278716426)
D.ddM=w([D.elW,D.emd,D.emz],x.n)
D.d5j=w(["\u2726","\u25c6","\u2742"],x.s)
D.dFn=new C.xz("Obsidian & Platinum",D.ddM,4293256418,4294967295,4294638330,3872378836,D.d5j)
D.emr=new B.z(4279896588,4282194463)
D.emA=new B.z(4280553487,4279043334)
D.emI=new B.z(4283048488,4279896588)
D.d4N=w([D.emr,D.emA,D.emI],x.n)
D.diS=w(["\u2766","\u273f","\u2727"],x.s)
D.dFk=new C.xz("Rose Gold Velvet",D.d4N,4293440672,4294960345,4294964979,3874214602,D.diS)
D.elX=new B.z(4278520340,4279180595)
D.em1=new B.z(4278718495,4278322443)
D.emo=new B.z(4279510591,4278520340)
D.cH4=w([D.elX,D.em1,D.emo],x.n)
D.d60=w(["\u269c","\u2736","\u2756"],x.s)
D.dFo=new C.xz("Midnight Brass",D.cH4,4291405148,4293975208,4294439914,3872837564,D.d60)
D.emX=new B.z(4294703086,4293780428)
D.emT=new B.z(4294307549,4293187253)
D.emY=new B.z(4294966517,4293977807)
D.cUg=w([D.emX,D.emT,D.emY],x.n)
D.d6q=w(["\u269c","\u265b","\u2726"],x.s)
D.dFr=new C.xz("Ivory Marble & Gold",D.cUg,4289760572,4286209048,4280951062,3863625518,D.d6q)
D.em7=new B.z(4278978566,4280555024)
D.emn=new B.z(4279504137,4278518530)
D.emE=new B.z(4281211923,4278978566)
D.cS_=w([D.em7,D.emn,D.emE],x.n)
D.dg2=w(["\u2742","\u2726","\u265c"],x.s)
D.dFm=new C.xz("Onyx & Copper",D.cS_,4291856987,4294365880,4294964718,3873885630,D.dg2)
D.cAZ=w([D.dFs,D.dFp,D.dFj,D.dFl,D.dFq,D.dFn,D.dFk,D.dFo,D.dFr,D.dFm],B.ax("O<xz>"))
D.cDi=w([A.ax,D.AS,A.hK],x.O)
D.eul=new B.z("Original",null)
D.eut=new B.z("Wide 16:9",1.7777777777777777)
D.ewI=new B.z("Landscape 3:2",1.5)
D.etO=new B.z("Photo 4:3",1.3333333333333333)
D.evx=new B.z("Square",1)
D.eHR=new B.z("Portrait 3:4",0.75)
D.avk=w([D.eul,D.eut,D.ewI,D.etO,D.evx,D.eHR],B.ax("O<+(m,L?)>"))
D.avl=w([A.hK,A.bX,A.b8,A.bu],x.O)
D.ewT=new B.z("","Original")
D.eyL=new B.z("circle","Circle")
D.eF_=new B.z("rounded","Rounded")
D.eFU=new B.z("triangle","Triangle")
D.eAO=new B.z("hexagon","Hexagon")
D.eza=new B.z("diamond","Diamond")
D.ey_=new B.z("arch","Arch")
D.Cf=w([D.ewT,D.eyL,D.eF_,D.eFU,D.eAO,D.eza,D.ey_],x.L)
D.dAw=new C.ld("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ks,A.dc,A.aJ)
D.dAM=new C.ld("campus_green","Campus Green","Normal",A.aZ,A.n2,A.tr,A.h6,A.eb)
D.dAD=new C.ld("warm_sand","Warm Sand","Normal",A.dU,A.i0,A.bM,A.ie,A.nQ)
D.dAK=new C.ld("slate_minimal","Slate Minimal","Normal",A.bq,A.aQ,A.aL,A.M,A.aJ)
D.dAv=new C.ld("coral_fresh","Coral Fresh","Normal",A.cc,A.iA,A.qP,A.k_,A.tk)
D.dAL=new C.ld("lavender_calm","Lavender Calm","Normal",A.b6,A.pA,A.AH,A.pE,A.jd)
D.dAx=new C.ld("ocean_breeze","Ocean Breeze","Normal",A.fd,A.r_,A.tg,A.tm,A.nR)
D.afr=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dAI=new C.ld("berry_pop","Berry Pop","Normal",A.f_,D.afr,A.km,G.XJ,A.F5)
D.dAy=new C.ld("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.km,A.cr)
D.dAH=new C.ld("executive_navy","Executive Navy","Professional",A.d_,A.aeN,A.dc,A.lf,A.bK)
D.dAF=new C.ld("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bn,A.M,A.aQ,A.cr)
D.dAz=new C.ld("corporate_steel","Corporate Steel","Professional",A.n0,A.M,A.mm,A.f9,A.bK)
D.dAC=new C.ld("gold_luxe","Gold Luxe","Luxury",A.n_,A.dH,A.oI,A.lJ,A.bM)
D.bhl=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dAG=new C.ld("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bhl,A.Xx,A.iy,A.nM)
D.dAJ=new C.ld("platinum_night","Platinum Night","Luxury",A.cr,A.dI,A.bn,A.aQ,A.aL)
D.dAN=new C.ld("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pH,A.f1,A.pO,A.jA)
D.dAu=new C.ld("royal_purple","Royal Purple","Luxury",A.n1,A.WG,A.jd,A.km,A.KK)
D.dAE=new C.ld("neon_pitch","Neon Pitch","Bold",A.b8,A.dI,A.M,A.b3,A.aL)
D.dAB=new C.ld("crimson_impact","Crimson Impact","Bold",A.bz,A.kr,A.eq,A.tD,A.f0)
D.dAA=new C.ld("sunset_gallery","Sunset Gallery","Bold",A.fl,A.tk,A.k_,A.qP,A.mk)
D.H6=w([D.dAw,D.dAM,D.dAD,D.dAK,D.dAv,D.dAL,D.dAx,D.dAI,D.dAy,D.dAH,D.dAF,D.dAz,D.dAC,D.dAG,D.dAJ,D.dAN,D.dAu,D.dAE,D.dAB,D.dAA],B.ax("O<ld>"))
D.cON=w([A.c0,D.jf],x.O)
D.d53=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.exM=new B.z("Faces & people",D.d53)
D.cDm=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ekN=new B.z("Ideas & work",D.cDm)
D.cWJ=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eAT=new B.z("Nature",D.cWJ)
D.d5c=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.euj=new B.z("Places & things",D.d5c)
D.d_5=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ey4=new B.z("Symbols",D.d_5)
D.cOT=w([D.exM,D.ekN,D.eAT,D.euj,D.ey4],B.ax("O<+(m,ai<m>)>"))
D.b8B=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cPe=w([A.c0,D.adU,D.b8B],x.O)
D.b2H=new B.ac(0,A.G,A.KH,A.aH_,40)
D.b2n=new B.ac(0,A.G,A.nO,A.em,8)
D.cPr=w([D.b2H,D.b2n],x.V)
D.cPV=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.avL=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2u=w([A.hK,A.eB,A.bz,A.ay,A.cc],x.O)
D.cQK=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ae9=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cQV=w([A.Xm,D.ae9,A.Xm],x.O)
D.cR_=w([A.i1,D.jf,D.KT],x.O)
D.eu6=new B.z(A.bi,D.a0h)
D.evs=new B.z(A.L,D.a0g)
D.epq=new B.z(A.dN,D.a0i)
D.cRV=w([D.eu6,D.evs,D.epq],B.ax("O<+(q3,a0)>"))
D.cQ=new C.IF(0,"text")
D.lw=new C.IF(1,"image")
D.f4=new C.IF(2,"shape")
D.S_=new C.IF(3,"pdf")
D.l5=new C.IF(4,"signature")
D.a5l=new C.IF(5,"bio")
D.cSN=w([D.cQ,D.lw,D.f4,D.S_,D.l5,D.a5l],B.ax("O<IF>"))
D.cSO=w([A.bo,A.cF],B.ax("O<HA>"))
D.cTo=w(["School","Documents","Sign & present"],x.s)
D.b2M=new B.ac(0,A.G,A.afY,A.uB,28)
D.cTJ=w([D.b2M],x.V)
D.cU1=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Q4=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aw9=w([A.hK,A.F4,A.aL,A.c,A.oJ,A.ax],x.O)
D.eHf=new B.z(0.1,0.08)
D.eAR=new B.z(0.3,0.05)
D.eoU=new B.z(0.55,0.1)
D.et6=new B.z(0.8,0.06)
D.ewb=new B.z(0.92,0.16)
D.evH=new B.z(0.2,0.2)
D.etz=new B.z(0.7,0.22)
D.ezx=new B.z(0.05,0.4)
D.ewA=new B.z(0.95,0.45)
D.epF=new B.z(0.12,0.7)
D.erT=new B.z(0.88,0.75)
D.es0=new B.z(0.4,0.9)
D.end=new B.z(0.65,0.93)
D.esK=new B.z(0.25,0.97)
D.eu3=new B.z(0.85,0.9)
D.equ=new B.z(0.5,0.04)
D.cVu=w([D.eHf,D.eAR,D.eoU,D.et6,D.ewb,D.evH,D.etz,D.ezx,D.ewA,D.epF,D.erT,D.es0,D.end,D.esK,D.eu3,D.equ],x.G)
D.cVB=w([A.c,A.hi,A.aN,A.aV],x.O)
D.e0N=new C.jH("office_blue","Office Blue",A.bj,A.dc,A.aJ,A.c,A.ks)
D.e0Y=new C.jH("campus_green","Campus Green",A.aZ,A.h6,A.eb,A.n2,A.tr)
D.e0O=new C.jH("sunset","Sunset",A.fl,A.k_,A.nQ,A.iA,A.qP)
D.e0P=new C.jH("midnight","Midnight",A.aE,A.km,A.cr,A.M,A.dx)
D.e1_=new C.jH("classic","Classic",A.d5,A.dH,A.lK,A.i0,A.fV)
D.e0X=new C.jH("rose_gold","Rose Gold",A.hi,A.xs,A.xr,A.vr,A.AV)
D.e0I=new C.jH("ocean_teal","Ocean Teal",A.fd,A.tm,A.nR,A.r_,A.tg)
D.e0H=new C.jH("slate_pro","Slate Pro",A.bq,A.M,A.aJ,A.aQ,A.aL)
D.e0G=new C.jH("neon_night","Neon Night",A.b8,A.b3,A.aL,A.dI,A.M)
D.e0S=new C.jH("lavender","Lavender",A.b6,A.pE,A.jd,A.pA,A.AH)
D.e0U=new C.jH("coral","Coral",A.cc,A.k_,A.tk,A.iA,A.mk)
D.e0J=new C.jH("forest","Forest",A.hk,A.dZ,A.ct,A.lL,A.er)
D.e0K=new C.jH("berry","Berry",A.f_,G.XJ,A.F5,D.afr,A.km)
D.e0R=new C.jH("sand","Sand",A.dU,A.ie,A.nQ,A.i0,A.bM)
D.e0W=new C.jH("ice","Ice",A.n0,A.Lb,A.aJ,A.mY,A.f9)
D.e0M=new C.jH("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bn,A.M)
D.e0F=new C.jH("mint","Mint",A.aV,A.fy,A.h6,A.lL,A.pO)
D.e0V=new C.jH("crimson","Crimson",A.bz,A.n4,A.kr,A.F2,A.tD)
D.bb5=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e0Q=new C.jH("gold","Gold",A.n_,A.vc,A.oI,D.bb5,A.lJ)
D.e0T=new C.jH("aqua","Aqua",A.bP,A.ET,A.oF,A.pC,A.oK)
D.e0L=new C.jH("plum","Plum",A.n1,A.xp,A.F5,A.EH,A.qY)
D.e0Z=new C.jH("steel","Steel",A.d_,A.dc,A.bn,A.ks,A.lf)
D.a2K=w([D.e0N,D.e0Y,D.e0O,D.e0P,D.e1_,D.e0X,D.e0I,D.e0H,D.e0G,D.e0S,D.e0U,D.e0J,D.e0K,D.e0R,D.e0W,D.e0M,D.e0F,D.e0V,D.e0Q,D.e0T,D.e0L,D.e0Z],B.ax("O<jH>"))
D.cVW=w([A.c0,A.jh],x.O)
D.S1=new C.hE(10,"rotate3d")
D.I3=new C.hE(8,"flip")
D.aGt=new C.hE(19,"spiral")
D.ql=new C.hE(16,"bounce")
D.aGw=new C.hE(9,"flipVertical")
D.cVX=w([D.S1,D.I3,D.aGt,D.ql,D.aGw],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cWh=w([0.62,1],x.x)
D.cWR=w([0,0.32,0.68,1],x.x)
D.mK=new C.hE(6,"zoom")
D.uv=new C.hE(4,"slideUp")
D.uu=new C.hE(2,"slideLeft")
D.cX_=w([D.mK,D.I3,D.uv,D.S1,D.uu],x.i)
D.cXv=w([A.bX,A.hi,A.iy,A.hK,A.c],x.O)
D.b2C=new B.ac(0,A.G,D.aen,A.uB,30)
D.cYf=w([D.b2C],x.V)
D.eaP=new B.v(0,-2.5)
D.eaF=new B.v(-2.5,0)
D.e9n=new B.v(2.5,0)
D.cYi=w([A.Sh,A.a5I,A.aHv,A.a5H,D.eaP,I.aHr,D.eaF,D.e9n],x.dN)
D.He=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cYJ=w([23,114,69,56,80,144],x.t)
D.cZa=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cZB=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d0f=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d0j=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uH(0,"rectangle")
D.eN=new C.uH(1,"circle")
D.l6=new C.uH(6,"hexagon")
D.d0x=w([D.bg,D.eN,D.l6],x.m)
D.oc=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afy=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d14=w([D.afy,A.dZ],x.O)
D.ep8=new B.z("","Classic")
D.ens=new B.z("caps","Bold caps")
D.ezA=new B.z("elegant","Elegant")
D.eFi=new B.z("shadow","Shadow")
D.ets=new B.z("neon","Neon glow")
D.eDW=new B.z("outline","Outline")
D.eD6=new B.z("marker","Highlighter")
D.eFt=new B.z("stamp","Stamp")
D.eEV=new B.z("retro","Retro")
D.esq=new B.z("threed","3D")
D.eA6=new B.z("fire","Fire")
D.eB2=new B.z("ice","Ice")
D.eyK=new B.z("chalk","Chalk")
D.eyP=new B.z("comic","Comic")
D.eFv=new B.z("sunset","Sunset")
D.eGC=new B.z("softglow","Soft glow")
D.eC0=new B.z("lowercase","Lowercase")
D.ezh=new B.z("double","Echo")
D.eGL=new B.z("whisper","Whisper")
D.ax2=w([D.ep8,D.ens,D.ezA,D.eFi,D.ets,D.eDW,D.eD6,D.eFt,D.eEV,D.esq,I.aME,D.eA6,D.eB2,D.eyK,D.eyP,A.a6u,D.eFv,D.eGC,D.eC0,D.ezh,D.eGL],x.L)
D.d2m=w([3,5,7,10,12,15],x.t)
D.d3J=w([A.bX,A.bM,A.c,A.eC,A.cs],x.O)
D.dsa=new C.tl(10,"cardWorld")
D.CJ=new C.Bt(3,"rounded")
D.dIt=new C.lg("world","NGMY World",D.dsa,D.CJ,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dsb=new C.tl(11,"cardSplit")
D.dIp=new C.lg("business","Business Wire",D.dsb,D.CJ,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dsc=new C.tl(12,"cardBreaking")
D.dIC=new C.lg("breaking","Breaking Red",D.dsc,D.CJ,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dsd=new C.tl(13,"cardFeature")
D.dIv=new C.lg("feature","Tech Feature",D.dsd,D.CJ,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aF_=new C.tl(6,"circle")
D.aEU=new C.Bt(4,"circle")
D.dIz=new C.lg("parchment","Royal Circle",D.aF_,D.aEU,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dIo=new C.lg("ocean","Blue Ocean",D.aF_,D.aEU,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dsg=new C.tl(7,"rail")
D.aET=new C.Bt(1,"double")
D.dIq=new C.lg("forest","Green Leaf",D.dsg,D.aET,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEX=new C.tl(1,"sideBySide")
D.dIE=new C.lg("herald","NGMY Herald",D.aEX,D.CJ,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEW=new C.tl(0,"classic")
D.a4y=new C.Bt(9,"shadow")
D.dID=new C.lg("daily","The Daily",D.aEW,D.a4y,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dse=new C.tl(2,"splash")
D.aEV=new C.Bt(6,"cutCorner")
D.dIn=new C.lg("tabloid","Big Tabloid",D.dse,D.aEV,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aF0=new C.tl(9,"minimal")
D.dIy=new C.lg("modern","Modern Digest",D.aF0,D.CJ,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEY=new C.tl(3,"magazine")
D.aES=new C.Bt(0,"plain")
D.dIu=new C.lg("midnight","Midnight Edition",D.aEY,D.aES,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dsh=new C.tl(8,"banner")
D.dIw=new C.lg("metro","Metro Wire",D.dsh,D.aEV,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.ds9=new C.Bt(8,"arch")
D.dIx=new C.lg("sunrise","Sunrise Post",D.aEY,D.ds9,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEZ=new C.tl(5,"scrapbook")
D.ds8=new C.Bt(5,"tape")
D.dIs=new C.lg("neon","Neon Beat",D.aEZ,D.ds8,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dsf=new C.tl(4,"wrap")
D.dIF=new C.lg("gold","Golden Press",D.dsf,D.a4y,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dIG=new C.lg("minimal","Paper White",D.aF0,D.a4y,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dIr=new C.lg("gazette","Fresh Gazette",D.aEW,D.aET,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dIB=new C.lg("times","Classic Times",D.aEX,D.aES,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Ry=new C.Bt(2,"polaroid")
D.dIA=new C.lg("scrapbook","Memory Scrapbook",D.aEZ,D.Ry,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2Z=w([D.dIt,D.dIp,D.dIC,D.dIv,D.dIz,D.dIo,D.dIq,D.dIE,D.dID,D.dIn,D.dIy,D.dIu,D.dIw,D.dIx,D.dIs,D.dIF,D.dIG,D.dIr,D.dIB,D.dIA],B.ax("O<lg>"))
D.d3V=w([0.45,1],x.x)
D.Hg=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d4i=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h6u=new C.oy("Original",0,1,1,0,0,0)
D.h6y=new C.oy("Black & white",0,1.1,0,0,0,0)
D.h6l=new C.oy("Noir",-0.05,1.55,0,0,0,0)
D.h6p=new C.oy("Sepia",0,1,0.25,0.9,0,0)
D.h6o=new C.oy("Vivid",0,1.15,1.6,0,0,0)
D.h6h=new C.oy("Pop",0,1.3,1.9,0,0,0)
D.h6j=new C.oy("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h6v=new C.oy("Matte",0,0.9,0.85,0,0,0.55)
D.h6q=new C.oy("Cool",0,1.05,1,-0.8,0,0)
D.h6x=new C.oy("Warm",0.03,1.05,1.1,0.8,0,0)
D.h6i=new C.oy("Golden hour",0.04,1,1.25,1,0,0)
D.h6n=new C.oy("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h6w=new C.oy("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h6m=new C.oy("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h6s=new C.oy("Retro",0,0.9,0.7,0.4,0,0.35)
D.h6r=new C.oy("Forest",0,1,1.2,-0.1,-0.45,0)
D.h6t=new C.oy("Rose",0,1,1.1,0.3,0.4,0)
D.h6k=new C.oy("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d4j=w([D.h6u,D.h6y,D.h6l,D.h6p,D.h6o,D.h6h,D.h6j,D.h6v,D.h6q,D.h6x,D.h6i,D.h6n,D.h6w,D.h6m,D.h6s,D.h6r,D.h6t,D.h6k],B.ax("O<oy>"))
D.b81=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d4l=w([D.afy,A.dZ,D.b81],x.O)
D.ekG=new B.z(0.12,0.3)
D.eBd=new B.z(0.26,0.75)
D.ezw=new B.z(0.8,0.22)
D.eFD=new B.z(0.9,0.7)
D.eC_=new B.z(0.5,0.15)
D.eDY=new B.z(0.65,0.85)
D.er_=new B.z(0.08,0.85)
D.d4y=w([D.ekG,D.eBd,D.ezw,D.eFD,D.eC_,D.eDY,D.er_],x.G)
D.axe=w([A.b8,A.bX,A.bu,A.b2],x.O)
D.d5n=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d5z=w([A.c,A.f9,A.ds,A.ve],x.O)
D.bbj=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d6A=w([D.bbj,D.ae9],x.O)
D.d6B=w([A.vg,A.ax],x.O)
D.d6Q=w([0,0.25,0.75,1],x.x)
D.d6S=w([A.xh,A.oJ],x.O)
D.aG3=new C.kU(10,"kenteSunset")
D.hb1=w([D.aey,A.jW,A.ax],x.O)
D.dDK=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aG3,4294964964,4282000405,4279983648,D.jO)
D.aG4=new C.kU(11,"indigoMudcloth")
D.b8Z=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hbf=w([D.b8Z,A.ae5,A.i1],x.O)
D.dDS=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aG4,4294439140,4279903102,4279903102,D.jO)
D.aG5=new C.kU(12,"adinkraRoyal")
D.bm_=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hbg=w([D.ad0,D.bm_,A.ax],x.O)
D.dDU=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aG5,4294965484,4285218591,4287322667,D.jO)
D.aG6=new C.kU(13,"nileLotus")
D.big=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bf0=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hbl=w([D.big,D.bf0,A.i1],x.O)
D.dDT=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aG6,4294244340,4279196764,4279196764,D.jO)
D.aG7=new C.kU(14,"shweshweIvory")
D.bdd=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bc1=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b9r=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hb2=w([D.bdd,D.bc1,D.b9r],x.O)
D.dDP=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aG7,4294505710,4279970378,4291058750,D.jO)
D.rD=new C.kU(15,"certIvoryNavy")
D.hb0=w([D.LA,D.jf,A.i1],x.O)
D.aFz=new C.xx(1,"ringsNdoa")
D.dDM=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rD,4294966259,4279378237,4291404327,D.aFz)
D.a53=new C.xx(2,"coupleCards")
D.dDH=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rD,4294966259,4279378237,4291404327,D.a53)
D.CM=new C.kU(18,"certIvoryNavyBar")
D.ad_=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hbe=w([D.ad_,D.jf,A.i1],x.O)
D.aFA=new C.xx(3,"kuhoweshaForm")
D.dDF=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CM,4294966519,4279378237,4291404327,D.aFA)
D.ael=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hby=w([D.LA,D.ael,A.i1],x.O)
D.a54=new C.xx(4,"mahariPande")
D.dDI=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rD,4294966259,4279904068,4291404327,D.a54)
D.aG8=new C.kU(16,"certIvoryGreen")
D.bcC=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hb4=w([A.KL,D.bcC,A.i1],x.O)
D.aFB=new C.xx(5,"familiaMti")
D.dDO=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aG8,4294966776,4280241466,4291404327,D.aFB)
D.a55=new C.xx(6,"ndoaSafi")
D.dDG=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CM,4294966519,4279378237,4291404327,D.a55)
D.bgJ=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hb7=w([D.LA,A.i1,D.bgJ],x.O)
D.a56=new C.xx(7,"peteWide")
D.dDL=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rD,4294966259,4282001936,4291404327,D.a56)
D.dDV=new C.xx(8,"muhuriCrest")
D.dDE=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rD,4294966259,4279378237,4291404327,D.dDV)
D.hbh=w([D.ad_,D.ael,A.i1],x.O)
D.dDW=new C.xx(9,"fomuWazi")
D.dDR=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CM,4294966519,4279904068,4291404327,D.dDW)
D.aG9=new C.kU(17,"certIvoryRose")
D.bdh=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hbk=w([D.bdh,D.afb,A.i1],x.O)
D.a52=new C.xx(10,"upendoOrnate")
D.dDN=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aG9,4294965493,4286200650,4291404327,D.a52)
D.d7h=w([D.dDK,D.dDS,D.dDU,D.dDT,D.dDP,D.dDM,D.dDH,D.dDF,D.dDI,D.dDO,D.dDG,D.dDL,D.dDE,D.dDR,D.dDN],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.I4=new C.w_(0,"emojis")
D.CT=new C.w_(1,"pictures")
D.I5=new C.w_(2,"icons3d")
D.a5n=new C.w_(3,"animations")
D.S3=new C.w_(4,"videoMotion")
D.CU=new C.w_(5,"luxe")
D.a36=w([D.I4,D.CT,D.I5,D.a5n,D.S3,D.CU],B.ax("O<w_>"))
D.eEy=new B.z(A.dX,"Looks")
D.et_=new B.z(A.yB,"Light")
D.esX=new B.z(A.nl,"Colour")
D.er0=new B.z(A.yc,"Effects")
D.alw=new B.a0(63112,"MaterialIcons",!1)
D.enI=new B.z(D.alw,"Crop")
D.d7L=w([D.eEy,D.et_,D.esX,D.er0,D.enI],x.f2)
D.d8o=w([],x.D)
D.hbv=w([],x.L)
D.erd=new B.z("Flashcard",D.I_)
D.euV=new B.z("Quiz",D.I0)
D.ewO=new B.z("Worksheet",D.I1)
D.etZ=new B.z("Notes",D.mJ)
D.evq=new B.z("Section",D.CR)
D.d94=w([D.erd,D.euV,D.ewO,D.etZ,D.evq],B.ax("O<+(m,mx)>"))
D.dFC=new C.kU(6,"beadedPearl")
D.bfF=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hbz=w([H.Xw,D.bfF,A.i1],x.O)
D.aFx=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dFC,4294966774,4286209070,4291404327,D.jO)
D.dFD=new C.kU(7,"artDeco")
D.bjv=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bmi=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hbx=w([D.bjv,D.bmi,A.c0],x.O)
D.aFy=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dFD,4294440434,4280228630,4290283019,D.jO)
D.dFE=new C.kU(8,"rosetteCorners")
D.bls=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bbo=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bfA=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hba=w([D.bls,D.bbo,D.bfA],x.O)
D.aFw=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dFE,4294702831,4285218602,4291394365,D.jO)
D.dFF=new C.kU(9,"modernLedger")
D.hb9=w([A.c,D.jf,D.jf],x.O)
D.aFv=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dFF,4294967295,4279378237,4279378237,D.jO)
D.d98=w([D.aFx,D.aFy,D.aFw,D.aFv],x.h)
D.d9h=w([A.iy,A.oJ],x.O)
D.cn=new C.hE(0,"none")
D.de=new C.hE(1,"fade")
D.I2=new C.hE(3,"slideRight")
D.aGv=new C.hE(5,"slideDown")
D.e_h=new C.hE(7,"zoomOut")
D.a5m=new C.hE(11,"cube")
D.e_c=new C.hE(12,"blur")
D.aGs=new C.hE(13,"dissolve")
D.e_d=new C.hE(14,"wipeLeft")
D.e_e=new C.hE(15,"wipeRight")
D.S2=new C.hE(17,"push")
D.e_f=new C.hE(18,"flash")
D.aGu=new C.hE(20,"swing")
D.e_g=new C.hE(21,"curtain")
D.QF=w([D.cn,D.de,D.uu,D.I2,D.uv,D.aGv,D.mK,D.e_h,D.I3,D.aGw,D.S1,D.a5m,D.e_c,D.aGs,D.e_d,D.e_e,D.ql,D.S2,D.e_f,D.aGt,D.aGu,D.e_g],x.i)
D.QG=w([D.a51,D.a5_,D.a4T,D.a4U,D.a4V,D.a4Y,D.a4W,D.a4X,D.a50,D.a4Z,D.aFx,D.aFy,D.aFw,D.aFv],x.h)
D.d9K=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d9O=w([A.xl,A.hK,A.c0],x.O)
D.esk=new B.z(A.u1,"Design")
D.eG2=new B.z(D.alO,"Word sizes")
D.eBK=new B.z(A.BZ,"Text")
D.bH1=new B.a0(983182,"MaterialIcons",!1)
D.eBO=new B.z(D.bH1,"Photo")
D.eng=new B.z(A.lr,"Logo")
D.eHd=new B.z(A.GB,"News")
D.d9T=w([D.esk,D.eG2,D.eBK,D.eBO,D.eng,D.eHd],x.f2)
D.d9U=w(["golddust","sparkle","sheen"],x.s)
D.e0E=new C.ew("upload_pdf",L.NW,"Upload PDF")
D.e_O=new C.ew("sign_paper",A.Gy,"Sign Paper")
D.bGh=new B.a0(63438,"MaterialIcons",!1)
D.e0A=new C.ew("hd_photo",D.bGh,"HD Photo")
D.e_G=new C.ew("sharpen",E.a03,"Sharpen")
D.e_Q=new C.ew("print",L.NW,"Download PDF")
D.e0h=new C.ew("rotate",D.alw,"Rotate")
D.e_Z=new C.ew("text_box",A.BZ,"Text Box")
D.e00=new C.ew("picture",A.u5,"Picture")
D.e_X=new C.ew("title",A.yv,"Title")
D.e_T=new C.ew("subtitle",T.amm,"Subtitle")
D.e0q=new C.ew("bullets",K.a0j,"Bullet List")
D.e_U=new C.ew("numbered",A.NL,"Numbered")
D.e0t=new C.ew("quote",A2.BP,"Quote")
D.e05=new C.ew("citation",A.o5,"Citation")
D.e0w=new C.ew("date_stamp",Ah.a08,"Date Stamp")
D.e0j=new C.ew("page_number",A.yu,"Page #")
D.e0n=new C.ew("header_bar",A.C0,"Header")
D.e0_=new C.ew("footer_bar",Aq.a0P,"Footer")
D.e_P=new C.ew("divider",A.u4,"Divider")
D.e_L=new C.ew("highlight",A.a0p,"Highlight")
D.e0p=new C.ew("redact",A.yy,"Redact")
D.e0c=new C.ew("callout",A.BK,"Callout")
D.e0y=new C.ew("checkboxes",K.akM,"Checklist")
D.e09=new C.ew("table",A.a0M,"Table")
D.e03=new C.ew("memo",K.a0z,"Memo")
D.e0d=new C.ew("letter",A.Go,"Letter")
D.bFU=new B.a0(63259,"MaterialIcons",!0)
D.e_F=new C.ew("agenda",D.bFU,"Agenda")
D.e_R=new C.ew("toc",AA.am_,"Contents")
D.bGd=new B.a0(63406,"MaterialIcons",!1)
D.e0a=new C.ew("sig_line",D.bGd,"Sign Line")
D.e_y=new C.ew("initial_line",A.jp,"Initials")
D.e_B=new C.ew("approved",A.lr,"APPROVED")
D.e0f=new C.ew("draft",A.p_,"DRAFT")
D.e0l=new C.ew("confidential",A.jq,"Confidential")
D.e0o=new C.ew("sticky",A.O3,"Sticky Note")
D.e0x=new C.ew("progress",A.alZ,"Progress")
D.bHv=new B.a0(983507,"MaterialIcons",!1)
D.e_M=new C.ew("stars",D.bHv,"Star Rating")
D.e_w=new C.ew("equation",A.alQ,"Equation")
D.e_H=new C.ew("timeline",A.O5,"Timeline")
D.e04=new C.ew("two_col",A.a0Q,"Two Columns")
D.e_J=new C.ew("compare",A1.a0b,"Compare")
D.e_u=new C.ew("duplicate_el",A.fN,"Duplicate")
D.e0C=new C.ew("delete_el",A.e6,"Delete")
D.e0s=new C.ew("bring_fwd",H.alK,"Bring Front")
D.e_z=new C.ew("send_back",H.alJ,"Send Back")
D.e0e=new C.ew("align_left",D.a0h,"Align L")
D.e0k=new C.ew("align_center",D.a0g,"Align C")
D.e0B=new C.ew("align_right",D.a0i,"Align R")
D.e_Y=new C.ew("word_count",A_.a_N,"Word Count")
D.e_V=new C.ew("link_text",A.hq,"Link")
D.e0i=new C.ew("phone",A.iI,"Phone")
D.e_K=new C.ew("email",A.BN,"Email")
D.e0D=new C.ew("qr_placeholder",A.js,"QR Placeholder")
D.e_E=new C.ew("rectangle",A3.vQ,"Rectangle")
D.e08=new C.ew("circle",A.re,"Circle")
D.e_A=new C.ew("arrow",A.j1,"Arrow")
D.e0r=new C.ew("line",A.u4,"Line")
D.e_N=new C.ew("triangle",A.a09,"Triangle")
D.bG1=new B.a0(63318,"MaterialIcons",!1)
D.e_S=new C.ew("grayscale",D.bG1,"Grayscale")
D.e01=new C.ew("brighten",K.al5,"Brighten")
D.e06=new C.ew("flip_h",A.Gd,"Flip H")
D.bG8=new B.a0(63348,"MaterialIcons",!1)
D.e0z=new C.ew("flip_v",D.bG8,"Flip V")
D.e0m=new C.ew("cover_page",A.q1,"Cover Page")
D.e_x=new C.ew("invoice",A.ha,"Invoice")
D.e_I=new C.ew("resume",A.mv,"Resume")
D.e_W=new C.ew("minutes",A.oU,"Minutes")
D.e_C=new C.ew("lab_report",A.O_,"Lab Report")
D.e_D=new C.ew("rubric",A.u2,"Rubric")
D.e07=new C.ew("flashcard_tool",V.Gw,"Flashcard")
D.e0u=new C.ew("quiz_tool",A.Gt,"Quiz Block")
D.e0b=new C.ew("worksheet_tool",M.G3,"Worksheet")
D.e0g=new C.ew("outline_share",A.O1,"Share Outline")
D.e0v=new C.ew("export_json",D.akS,"Export JSON")
D.e_v=new C.ew("new_slide",D.a_M,"New Slide")
D.e02=new C.ew("present",A.q7,"Present")
D.dam=w([D.e0E,D.e_O,D.e0A,D.e_G,D.e_Q,D.e0h,D.e_Z,D.e00,D.e_X,D.e_T,D.e0q,D.e_U,D.e0t,D.e05,D.e0w,D.e0j,D.e0n,D.e0_,D.e_P,D.e_L,D.e0p,D.e0c,D.e0y,D.e09,D.e03,D.e0d,D.e_F,D.e_R,D.e0a,D.e_y,D.e_B,D.e0f,D.e0l,D.e0o,D.e0x,D.e_M,D.e_w,D.e_H,D.e04,D.e_J,D.e_u,D.e0C,D.e0s,D.e_z,D.e0e,D.e0k,D.e0B,D.e_Y,D.e_V,D.e0i,D.e_K,D.e0D,D.e_E,D.e08,D.e_A,D.e0r,D.e_N,D.e_S,D.e01,D.e06,D.e0z,D.e0m,D.e_x,D.e_I,D.e_W,D.e_C,D.e_D,D.e07,D.e0u,D.e0b,D.e0g,D.e0v,D.e_v,D.e02],B.ax("O<ew>"))
D.dax=w([A.cr,A.ak],x.O)
D.emO=new B.z(4286331629,4292552567)
D.emB=new B.z(4280640491,4278630100)
D.emW=new B.z(4294538006,4292943176)
D.elY=new B.z(4278556265,4280640491)
D.d4I=w([D.emO,D.emB,D.emW,D.elY],x.n)
D.ctE=w([4294626325,4280472558,4294210230],x.t)
D.e_p=new C.nL("colorful","Colorful",A.nl,D.d4I,4294967295,3875536895,D.ctE,D.mK)
D.emp=new B.z(4279522093,4279657780)
D.emF=new B.z(4281750292,4283268111)
D.em0=new B.z(4278603323,4279203438)
D.emG=new B.z(4282343954,4279599165)
D.cEz=w([D.emp,D.emF,D.em0,D.emG],x.n)
D.ctm=w([4288931381,4294829706,4287033260],x.t)
D.e_l=new C.nL("nature","Nature",A.Gz,D.cEz,4294442727,3874290891,D.ctm,D.de)
D.emj=new B.z(4279369771,4283178389)
D.emg=new B.z(4279179050,4286456526)
D.emx=new B.z(4280163147,4290648157)
D.elQ=new B.z(4278322711,4285343961)
D.cW9=w([D.emj,D.emg,D.emx,D.elQ],x.n)
D.ctA=w([4294210230,4280472558,4289170426],x.t)
D.e_j=new C.nL("vibe","Vibe",A.a0n,D.cW9,4294967295,3874869502,D.ctA,D.uu)
D.emS=new B.z(4290007817,4292552567)
D.emM=new B.z(4286328082,4294286859)
D.emR=new B.z(4288485197,4294538006)
D.emL=new B.z(4285343961,4293675161)
D.c_G=w([D.emS,D.emM,D.emR,D.emL],x.n)
D.ctF=w([4294829706,4294967295,4284999929],x.t)
D.e_k=new C.nL("celebration","Celebration",A.lm,D.c_G,4294967295,4009752557,D.ctF,D.ql)
D.eme=new B.z(4279179050,4280171146)
D.emi=new B.z(4279310375,4280232247)
D.em6=new B.z(4278916151,4280172719)
D.emf=new B.z(4279179050,4281549141)
D.cP7=w([D.eme,D.emi,D.em6,D.emf],x.n)
D.cth=w([4281908728,4294626325,4287931320],x.t)
D.e_o=new C.nL("professional","Professional",A.BI,D.cP7,4294967295,3872118241,D.cth,D.S2)
D.ema=new B.z(4278995566,4278413729)
D.em2=new B.z(4278727492,4279137424)
D.emy=new B.z(4280171146,4278751666)
D.emb=new B.z(4278995566,4279590517)
D.cxr=w([D.ema,D.em2,D.emy,D.emb],x.n)
D.ctk=w([4286436348,4284410580,4294829706],x.t)
D.e_q=new C.nL("ocean","Ocean",K.a0S,D.cxr,4294967295,3873501950,D.ctk,D.uv)
D.emN=new B.z(4286328082,4294538006)
D.emP=new B.z(4286781507,4294677052)
D.emJ=new B.z(4283178389,4294197086)
D.emQ=new B.z(4288295954,4294688548)
D.cLm=w([D.emN,D.emP,D.emJ,D.emQ],x.n)
D.ctG=w([4294829706,4294967295,4294747557],x.t)
D.e_r=new C.nL("sunset","Sunset",A.O6,D.cLm,4294967295,4009749973,D.ctG,D.de)
D.en_=new B.z(4294967295,4294047225)
D.emV=new B.z(4294507260,4294967295)
D.emZ=new B.z(4294967295,4293060848)
D.emU=new B.z(4294507260,4294047225)
D.cZg=w([D.en_,D.emV,D.emZ,D.emU],x.n)
D.ctf=w([4280640491,4279179050,4287931320],x.t)
D.e_n=new C.nL("minimal","Minimal",A3.vQ,D.cZg,4279179050,4282865001,D.ctf,D.de)
D.em9=new B.z(4278979081,4280886564)
D.emt=new B.z(4280031511,4278979081)
D.emh=new B.z(4279308561,4281148438)
D.em8=new B.z(4278979081,4280031511)
D.dcw=w([D.em9,D.emt,D.emh,D.em8],x.n)
D.ctt=w([4292128567,4294829706,4289241758],x.t)
D.e_s=new C.nL("elegant","Elegant",A.lV,D.dcw,4294898631,3873957348,D.ctt,D.aGs)
D.emv=new B.z(4280159034,4282058596)
D.em5=new B.z(4278916151,4280163147)
D.emD=new B.z(4281208933,4278916151)
D.emm=new B.z(4279502891,4283178389)
D.djt=w([D.emv,D.em5,D.emD,D.emm],x.n)
D.ctC=w([4294296657,4292128567,4291081725],x.t)
D.e_m=new C.nL("royal","Royal Gold",A.j3,D.djt,4294965222,3874084351,D.ctC,D.mK)
D.elV=new B.z(4278464302,4280163147)
D.em4=new B.z(4278916151,4279455306)
D.emw=new B.z(4280163147,4283040846)
D.elS=new B.z(4278332450,4281413249)
D.d4o=w([D.elV,D.em4,D.emw,D.elS],x.n)
D.ctg=w([4281193663,4289170426,4294210230],x.t)
D.e_t=new C.nL("aurora","Aurora Glow",A.dX,D.d4o,4293983738,3869766608,D.ctg,D.de)
D.wb=w([D.e_p,D.e_l,D.e_j,D.e_k,D.e_o,D.e_q,D.e_r,D.e_n,D.e_s,D.e_m,D.e_t],B.ax("O<nL>"))
D.bg8=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.db6=w([A.qS,D.bg8,A.qS],x.O)
D.dbn=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dbr=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eBD=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.erV=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ewo=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ejz=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ev3=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.etk=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.exB=new B.z("Surprise me","")
D.dbY=w([D.eBD,D.erV,D.ewo,D.ejz,D.ev3,D.etk,D.exB],x.L)
D.b9t=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bk_=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.dcK=w([A.c,D.b9t,D.bk_],x.O)
D.des=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about a minute of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about a minute and a half of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.deN=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aG1=new C.kU(0,"heritageGold")
D.beP=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hbA=w([D.beP,W.aev,A.ax],x.O)
D.dDQ=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aG1,4294570461,4284234270,4292128567,D.jO)
D.aG2=new C.kU(1,"heritageCrimson")
D.b7Y=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bde=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bjQ=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hbd=w([D.b7Y,D.bde,D.bjQ],x.O)
D.dDJ=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aG2,4294635750,4285213214,4292912216,D.jO)
D.deR=w([D.a51,D.a5_,D.dDQ,D.dDJ,D.a4V,D.a4Y],x.h)
D.dJJ=new C.ru(1,"circuit")
D.dKb=new C.m7("neural","Neural Link","Robotic",D.dJJ,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dJI=new C.ru(0,"grid")
D.dK8=new C.m7("signal","Signal Grid","Robotic",D.dJI,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dJO=new C.ru(2,"hexes")
D.dJU=new C.m7("core","Core Protocol","Robotic",D.dJO,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGp=new C.ru(11,"diagonal")
D.dK4=new C.m7("steel","Steel Tech","Robotic",D.aGp,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGq=new C.ru(3,"rings")
D.dJT=new C.m7("vault","Vault Gold","Robotic",D.aGq,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dJM=new C.ru(13,"leaves")
D.dJW=new C.m7("forest","Forest Morning","Nature",D.dJM,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGr=new C.ru(5,"waves")
D.dK2=new C.m7("ocean","Ocean Calm","Nature",D.aGr,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dJP=new C.ru(6,"sunset")
D.dK7=new C.m7("sunset","Sunset Glow","Nature",D.dJP,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dJQ=new C.ru(7,"mountains")
D.dJV=new C.m7("mountain","Mountain Air","Nature",D.dJQ,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dJR=new C.ru(8,"stars")
D.dK1=new C.m7("night","Night Sky","Nature",D.dJR,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5k=new C.ru(4,"orbs")
D.dK_=new C.m7("aurora","Aurora","Nature",D.a5k,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dK9=new C.m7("sand","Sand Dune","Nature",D.aGr,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dJS=new C.ru(9,"rays")
D.dJZ=new C.m7("golden","Golden Hour","Warm",D.dJS,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dJX=new C.m7("royal","Royal Purple","Warm",D.aGp,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dJY=new C.m7("rose","Rose Petal","Warm",D.a5k,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dJL=new C.ru(12,"blocks")
D.dK0=new C.m7("electric","Electric Blue","Bold",D.dJL,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dKa=new C.m7("mint","Fresh Mint","Bold",D.a5k,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dJN=new C.ru(14,"minimal")
D.dK6=new C.m7("white","Clean White","Clean",D.dJN,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dJK=new C.ru(10,"frame")
D.dK3=new C.m7("midnight","Midnight Gold","Clean",D.dJK,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dK5=new C.m7("community","Community Green","Clean",D.aGq,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3A=w([D.dKb,D.dK8,D.dJU,D.dK4,D.dJT,D.dJW,D.dK2,D.dK7,D.dJV,D.dK1,D.dK_,D.dK9,D.dJZ,D.dJX,D.dJY,D.dK0,D.dKa,D.dK6,D.dK3,D.dK5],B.ax("O<m7>"))
D.dfd=w([D.AS,A.vg,A.hK,A.c0],x.O)
D.dfv=w([D.afl,D.jf],x.O)
D.dfG=w(["pdf","docx","txt","md"],x.s)
D.eKG=new B.bj(-3,150,34)
D.eKH=new B.bj(-3,214,62)
D.eKI=new B.bj(-3,288,62)
D.dgu=w([D.eKG,D.eKH,D.eKI],B.ax("O<+(L,L,L)>"))
D.dgX=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dhz=w(["Write","Design","Print & fold"],x.s)
D.jP=new C.uH(2,"triangle")
D.CS=new C.uH(3,"arrow")
D.fs=new C.uH(4,"line")
D.jQ=new C.uH(5,"parallelogram")
D.dhC=w([D.bg,D.eN,D.jP,D.CS,D.fs,D.jQ,D.l6],x.m)
D.ekV=new B.z(240,96)
D.enA=new B.z(560,46)
D.dhH=w([D.ekV,D.enA],x.G)
D.hbL=new C.xA(0,"classic")
D.dFI=new C.nH("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aG1,4294570461,4282000405,4284234270)
D.dFU=new C.nH("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aG2,4294635750,4281999378,4285213214)
D.dFJ=new C.nH("elegant_navy","Umoja Mzuri",y.s,D.a5e,4294967035,4279378237,4290283019)
D.dFW=new C.nH("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGa,4294966515,4281016592,4289102906)
D.dFY=new C.nH("kente_sunset","Kente ya Jua",y.H,D.aG3,4294964964,4282000405,4279983648)
D.dFG=new C.nH("indigo_mudcloth","Nguo ya Indigo",y.n,D.aG4,4294439140,4279903102,4279903102)
D.dFL=new C.nH("adinkra_royal","Muhuri wa Adinkra",y.z,D.aG5,4294965484,4285218591,4287322667)
D.dFQ=new C.nH("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aG6,4294244340,4279196764,4279196764)
D.dFS=new C.nH("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aG7,4294505710,4279970378,4291058750)
D.hbM=new C.xA(1,"ringsNdoa")
D.dFK=new C.nH("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rD,4294966259,4279378237,4291404327)
D.hbO=new C.xA(2,"coupleCards")
D.dFV=new C.nH("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rD,4294966259,4279378237,4291404327)
D.hbP=new C.xA(3,"kuhoweshaForm")
D.dFR=new C.nH("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CM,4294966519,4279378237,4291404327)
D.hbQ=new C.xA(4,"mahariPande")
D.dFH=new C.nH("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rD,4294966259,4279904068,4291404327)
D.hbR=new C.xA(5,"familiaMti")
D.dFX=new C.nH("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aG8,4294966776,4280241466,4291404327)
D.hbS=new C.xA(6,"ndoaSafi")
D.dFO=new C.nH("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CM,4294966519,4279378237,4291404327)
D.hbT=new C.xA(7,"peteWide")
D.dFN=new C.nH("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rD,4294966259,4282001936,4291404327)
D.hbU=new C.xA(8,"muhuriCrest")
D.dFM=new C.nH("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rD,4294966259,4279378237,4291404327)
D.hbV=new C.xA(9,"fomuWazi")
D.dFP=new C.nH("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CM,4294966519,4279904068,4291404327)
D.hbN=new C.xA(10,"upendoOrnate")
D.dFT=new C.nH("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aG9,4294965493,4286200650,4291404327)
D.QV=w([D.dFI,D.dFU,D.dFJ,D.dFW,D.dFY,D.dFG,D.dFL,D.dFQ,D.dFS,D.dFK,D.dFV,D.dFR,D.dFH,D.dFX,D.dFO,D.dFN,D.dFM,D.dFP,D.dFT],B.ax("O<nH>"))
D.CQ=new C.aqR(0,"landscape169")
D.of=new C.aqR(1,"portrait916")
D.diu=w([D.CQ,D.of],B.ax("O<aqR>"))
D.ayL=w([A.hK,A.bM,A.cs,A.iy,A.c],x.O)
D.un=w([A.c0,A.ie],x.O)
D.ek2=new B.z(1000,"M")
D.eoZ=new B.z(900,"CM")
D.enu=new B.z(500,"D")
D.elL=new B.z(400,"CD")
D.ek3=new B.z(100,"C")
D.ep_=new B.z(90,"XC")
D.env=new B.z(50,"L")
D.elM=new B.z(40,"XL")
D.ek9=new B.z(10,"X")
D.epa=new B.z(9,"IX")
D.enM=new B.z(5,"V")
D.enf=new B.z(4,"IV")
D.ekB=new B.z(1,"I")
D.dj9=w([D.ek2,D.eoZ,D.enu,D.elL,D.ek3,D.ep_,D.env,D.elM,D.ek9,D.epa,D.enM,D.enf,D.ekB],x.ek)
D.eLH=new B.cA(["open",A.jp,"Open & write","Keep writing this book"])
D.eM7=new B.cA(["print",A.u8,"Print as a book","Fold and staple it"])
D.djj=w([D.eLH,D.eM7],B.ax("O<+(m,a0,m,m)>"))
D.dk0=w([D.a5m,D.mK,D.I3,D.S2,D.de,D.S1],x.i)
D.eCh=new B.z(-1,"Small")
D.ejO=new B.z(0,"Normal")
D.ekA=new B.z(1,"Big")
D.ela=new B.z(2,"Huge")
D.dky=w([D.eCh,D.ejO,D.ekA,D.ela],x.ek)
D.dkZ=w([49,65,89,38,83,89],x.t)
D.dl5=w([A.vg,A.hK,A.c0],x.O)
D.dlx=w([D.de,D.mK,D.uu,D.a5m,D.I3,D.S2],x.i)
D.aE3=new B.du([0,D.LS,8,D.agC,12,D.agD],B.ax("du<G,a3D>"))
D.e5s={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bjH=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cPi=w([A.bM,D.bjH],x.O)
D.d8R=w([A.b3,A.bj],x.O)
D.d3v=w([A.bX,A.aN,A.bH],x.O)
D.djk=w([A.cr,A.bq],x.O)
D.cX3=w([A.b8,A.f_],x.O)
D.d6d=w([A.b6,A.fc],x.O)
D.bcY=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d5u=w([D.bcY,A.oJ],x.O)
D.d0_=w([A.h3,A.xm],x.O)
D.cWS=w([A.bv,A.cb],x.O)
D.doc=new B.bl(D.e5s,[D.cPi,I.aph,D.d8R,D.d3v,D.djk,D.cX3,D.d6d,D.d5u,D.d0_,D.cWS],B.ax("bl<m,ai<w>>"))
D.e4z={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4c=new B.bl(D.e4z,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bl<m,m>"))
D.a4j=new B.bl(A.hW,[],B.ax("bl<G,+icon3d,picture(m?,m?)>"))
D.dsU=new F.MO(30,null)
D.dxY=new F.mt("Chapter 1","","","")
D.dif=w([D.dxY],x.B)
D.dy1=new F.rk("My Book","","",D.dif,E.aFl)
D.dy_=new F.ux("starry",null,null,null,null,"","","")
D.dy2=new F.rk("Dream Big","","",E.a3f,D.dy_)
D.dy0=new F.ux("story",null,null,null,null,"","","")
D.dy3=new F.rk("Little Lion","","",E.a3f,D.dy0)
D.dxZ=new F.ux("vintage",null,null,null,null,"","","")
D.dy4=new F.rk("Our Story","","",E.a3f,D.dxZ)
D.dB5=new C.Et("","NGMY","","")
D.dIm=new C.zv("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.e_i=new C.b0Q(null,null,null,null)
D.e10=new C.aqW(null)
D.e1d=new C.arr(0,"smaller")
D.e1e=new C.arr(1,"bigger")
D.aGF=new C.arr(2,"fit")
D.e8j=new B.v(3,6)
D.e8t=new B.v(4,8)
D.ebU=new B.D(E.ahs,T.acm,null)
D.ebY=new B.D(A.YH,A.lH,null)
D.bIN=new B.ae(A.lp,16,A.bY,null,null,null)
D.ec1=new B.D(A.ij,D.bIN,null)
D.b7m=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.ecd=new B.D(A.FH,D.b7m,null)
D.bT3=new B.ae(A.cD,16,A.aA,null,null,null)
D.ech=new B.D(A.ek,D.bT3,null)
D.fqZ=new B.y("Play",null,A.nB,null,null,null,null,null,null,null,null,null)
D.d95=w([U.anL,A.rQ,D.fqZ],x.p)
D.eQi=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d95,null)
D.eck=new B.D(A.ng,D.eQi,null)
D.b7v=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.eW4=new B.a7(20,20,D.b7v,null)
D.ecp=new B.D(A.ij,D.eW4,null)
D.fA3=new B.y("Seconds per slide",null,A.hu,null,null,null,null,null,null,null,null,null)
D.ecx=new B.D(A.bm,D.fA3,null)
D.edS=new C.a8u(2,"print")
D.edV=new B.iR(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.efx=new B.he("/Annot")
D.efz=new B.he("/URI")
D.flh=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ehB=new B.jq("share",48,D.flh,null,B.ax("jq<m>"))
D.bSY=new B.ae(A.dX,14,A.eC,null,null,null)
D.ehK=new B.cL(null,-2,-2,null,null,null,D.bSY,null)
D.cRl=w([H.af_,A.K],x.O)
D.bZt=new B.a8(A.a3,A.a8,A.x,D.cRl,null,null)
D.b09=new B.o(null,null,null,null,null,D.bZt,A.n)
D.boH=new B.kR(D.b09,A.bf,null,null)
D.ehW=new B.cL(0,0,null,0,8,null,D.boH,null)
D.ddN=w([A.i0,A.mk,A.cc],x.O)
D.eiA=new B.bT(A.A,0.5,A.x,null,0,D.ddN,null,null)
D.el3=new B.z(0.22,A.bj)
D.epv=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.erA=new B.z(0.5,A.hi)
D.eAM=new B.z(0.78,A.aV)
D.eLx=new B.cA([A.bu,0.22,0.7,2.6])
D.eLD=new B.cA([A.b8,0.36,1.2,1.3])
D.eLJ=new B.cA([A.dR,0.28,0.2,0.4])
D.eLP=new B.cA([A.cz,0.05,0.3,0.35])
D.eLV=new B.cA([A.bv,0.28,0.9,0])
D.eM2=new B.cA([A.aE,-0.25,-0.15,0.45])
D.eMT=new B.cA([A.bX,0.42,1,4.1])
D.eQ0=new B.a9r(9)
D.bJU=new B.ae(A.GB,28,A.bH,null,null,null)
D.fAB=new B.y("NGMY News",null,A.dj,null,null,null,null,null,null,null,null,null)
D.byy=new B.bB(1,A.bh,D.fAB,null)
D.dh_=w([D.bJU,A.at,D.byy],x.p)
D.eQc=new B.cl(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dh_,null)
D.bK4=new B.ae(A.o5,16,A.c,null,null,null)
D.fC6=new B.y("Book",null,A.oo,null,null,null,null,null,null,null,null,null)
D.dl4=w([D.bK4,A.ed,D.fC6],x.p)
D.eQk=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.dl4,null)
D.bQz=new B.ae(A.jq,10,A.c,null,null,null)
D.fp3=new B.y("Pro",null,A.ny,null,null,null,null,null,null,null,null,null)
D.d9a=w([D.bQz,A.qt,D.fp3],x.p)
D.eQo=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d9a,null)
D.fA1=new B.y("Make a newspaper",null,Au.U1,null,null,null,null,null,null,null,null,null)
D.c_E=w([E.a1c,A.ab,D.fA1],x.p)
D.eQp=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.c_E,null)
D.bP6=new B.ae(A.lm,18,A.bM,null,null,null)
D.frc=new B.y("Ending celebration",null,A.hH,null,null,null,null,null,null,null,null,null)
D.dg5=w([D.bP6,A.bp,D.frc],x.p)
D.eQs=new B.cl(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dg5,null)
D.bQl=new B.ae(A.jp,18,A.k_,null,null,null)
D.f5J=new B.H(!0,A.k_,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCo=new B.y("Write",null,D.f5J,null,null,null,null,null,null,null,null,null)
D.cZ4=w([D.bQl,A.ab,D.fCo],x.p)
D.eQz=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cZ4,null)
D.fp1=new B.y("Download picture",null,A.on,null,null,null,null,null,null,null,null,null)
D.bAG=new B.qo(A.ei,A.A,A.f,D.fp1,null)
D.bAR=new B.dq(1,A.co,D.bAG,null)
D.d9z=w([L.anB,A.ab,D.bAR],x.p)
D.eQA=new B.cl(A.aP,A.b9,A.j,A.m,null,A.p,null,0,D.d9z,null)
D.bLS=new B.ae(A.GB,22,A.bH,null,null,null)
D.fyD=new B.y("NGMY NEWS",null,I.a7X,null,null,null,null,null,null,null,null,null)
D.cQN=w([D.bLS,A.ab,D.fyD],x.p)
D.eQJ=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cQN,null)
D.eQV=new B.pc(!1,!1,null,T.VW,null,A.c_,null,null,null)
D.a7_=new B.jk([D.cn,D.de,D.uu,D.I2,D.uv,D.aGv],B.ax("jk<hE>"))
D.e77={title:0,quote:1,closing:2,bio:3}
D.eS5=new B.dD(D.e77,4,x.M)
D.e4S={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eS8=new B.dD(D.e4S,5,x.M)
D.e6p={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a70=new B.dD(D.e6p,8,x.M)
D.e5C={Design:0,Transitions:1,Insert:2}
D.eSd=new B.dD(D.e5C,3,x.M)
D.hc2=new B.jk([D.a5n],B.ax("jk<w_>"))
D.e5L={float3d:0,drift:1,pulse:2}
D.eSh=new B.dD(D.e5L,3,x.M)
D.aNU=new B.jk([D.I_,D.I0,D.I1],B.ax("jk<mx>"))
D.e4P={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNX=new B.dD(D.e4P,14,x.M)
D.hc3=new B.dD(A.hW,0,B.ax("dD<w_>"))
D.e5I={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.T8=new B.dD(D.e5I,4,x.M)
D.e4H={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aO_=new B.dD(D.e4H,30,x.M)
D.e5R={circle:0,triangle:1,hexagon:2,diamond:3}
D.eSD=new B.dD(D.e5R,4,x.M)
D.eV2=new B.ar(390,844)
D.eVP=new B.a7(20,20,A6.KE,null)
D.aON=new B.a7(null,2.5,null,null)
D.eVZ=new B.a7(18,18,A6.KE,null)
D.bQp=new B.ae(A.j3,19,A.c,null,null,null)
D.eW9=new B.a7(38,38,D.bQp,null)
D.bOG=new B.ae(A.yC,22,A.c,null,null,null)
D.eWb=new B.a7(40,40,D.bOG,null)
D.eWK=new B.hP(2,10,10,1.15,null)
D.aOV=new B.hP(2,16,14,0.62,null)
D.bwC=new B.Q(32,30,32,40)
D.b8R=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bJR=new B.ae(A.q1,56,D.b8R,null,null,null)
D.afP=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f7I=new B.H(!0,D.afP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvF=new B.y("Your books will live here.",null,D.f7I,null,A.L,null,null,null,null,null,null,null)
D.d0W=w([D.bJR,A.R,D.fvF],x.p)
D.bnF=new B.fm(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d0W,null)
D.ecv=new B.D(D.bwC,D.bnF,null)
D.eX4=new B.ma(D.ecv,null)
D.fvC=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eXm=new B.b1(D.fvC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftJ=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eXn=new B.b1(D.ftJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyH=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eXw=new B.b1(D.fyH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fze=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new B.b1(D.fze,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsp=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eXY=new B.b1(D.fsp,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fGi=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new B.b1(D.fGi,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fDr=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eYr=new B.b1(D.fDr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzm=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new B.b1(D.fzm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnh=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZn=new B.b1(D.fnh,null,null,null,null,null,null,null,A.iu,null,null,null,null,A.pR,!1,null,null,null,A.r,null)
D.fpa=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eZF=new B.b1(D.fpa,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvi=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new B.b1(D.fvi,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuZ=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZI=new B.b1(D.fuZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fBo=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eZJ=new B.b1(D.fBo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fju=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new B.b1(D.fju,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqk=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f_e=new B.b1(D.fqk,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fF3=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f_g=new B.b1(D.fF3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fEB=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f_k=new B.b1(D.fEB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiu=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_m=new B.b1(D.fiu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAw=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f_v=new B.b1(D.fAw,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fEb=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f_K=new B.b1(D.fEb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fE2=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new B.b1(D.fE2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fim=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new B.b1(D.fim,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmh=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new B.b1(D.fmh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fDe=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0u=new B.b1(D.fDe,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fm5=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new B.b1(D.fm5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bfR=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cPw=w([A.iy,A.oJ,D.bfR,D.acN,A.iy],x.O)
D.f16=new B.fW(A.A,0,6.283185307179586,A.x,D.cPw,null,null)
D.cYj=w([A.bM,A.c0,A.hK,D.AS,A.bM],x.O)
D.aPu=new B.fW(A.A,0,6.283185307179586,A.x,D.cYj,null,null)
D.dbl=w([A.bX,A.bu,A.b8,A.b2,A.bH,A.bX],x.O)
D.f1b=new B.fW(A.A,0,6.283185307179586,A.x,D.dbl,null,null)
D.cRz=w([A.pO,A.oK,A.AH,A.iy,A.pO],x.O)
D.f1c=new B.fW(A.A,0,6.283185307179586,A.x,D.cRz,null,null)
D.dbf=w([A.aQ,A.bK,A.aL,A.ak,A.aQ],x.O)
D.f1d=new B.fW(A.A,0,6.283185307179586,A.x,D.dbf,null,null)
D.dj_=w([A.bv,A.b8,A.bu,A.bX,A.bv],x.O)
D.f1f=new B.fW(A.A,0,6.283185307179586,A.x,D.dj_,null,null)
D.bg7=new B.w(1,0,1,1,A.t)
D.ba2=new B.w(1,1,0,1,A.t)
D.df5=w([A.Ex,A.aeI,I.adA,D.bg7,I.ae0,D.ba2,A.Ex],x.O)
D.f1g=new B.fW(A.A,0,6.283185307179586,A.x,D.df5,null,null)
D.f1v=new C.avv(2,"immersiveSticky")
D.f1w=new C.avv(3,"edgeToEdge")
D.f1x=new C.avv(4,"manual")
D.f3W=new B.H(!0,A.oE,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ1=new B.H(!0,A.f0,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4u=new B.H(!0,E.n5,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6_=new B.H(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new B.H(!0,A.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7t=new B.H(!0,A.eC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9_=new B.H(!0,A.ji,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new B.rF(!0,A.Il,null,null,null,null,A.dt,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9H=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fak=new B.H(!0,A.jh,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faI=new B.H(!0,A.aA,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.edY=new B.iR(1,1,0.7568627450980392,0.027450980392156862)
D.faM=new B.rF(!0,D.edY,null,null,null,null,A.dt,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeP=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQL=new B.H(!0,D.aeP,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faU=new B.H(!0,D.afP,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faV=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQN=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbx=new B.rF(!0,A.pa,null,null,null,null,A.dt,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcl=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new B.H(!0,D.aeP,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jm=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcQ=new B.H(!0,A.c0,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcZ=new B.H(!0,A.bK,null,null,null,null,14,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd1=new B.H(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awt,null,null,null)
D.fdl=new B.H(!0,A.c9,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdA=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdM=new B.H(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fei=new B.H(!0,A.aS,null,null,null,null,null,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fer=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feF=new B.H(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRp=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRr=new B.H(!0,A.bY,null,null,null,null,11.5,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blh=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fgn=new B.H(!0,D.blh,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRy=new B.H(!0,E.n5,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new B.H(!0,A.bK,null,null,null,null,11,A.a6,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new B.H(!0,O.li,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new B.y("NEW",null,D.f9W,null,null,null,null,null,null,null,null,null)
D.fip=new B.y("Hati ya Kuhowesha",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fiR=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fja=new B.y("Scrollable PDF on this slide",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fjU=new B.y("Big quote mark",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fjX=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fkz=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new B.y("How many slides?",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fl8=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f5M=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flu=new B.y("Luxury FX",null,D.f5M,null,null,null,null,null,null,null,null,null)
D.flP=new B.y("Font",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fm_=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fm6=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.ffW=new B.H(!0,A.bK,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fme=new B.y("Example  GA847",null,D.ffW,null,null,null,null,null,null,null,null,null)
D.fmE=new B.y("Design shapes",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fmO=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fmS=new B.y("Non-stop (loop)",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fn5=new B.y("Hati ya Kuhoweya",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fno=new B.y("Photo studio",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fnR=new B.y("Add your picture",null,A.kg,null,null,null,null,null,null,null,null,null)
D.f9e=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnS=new B.y("Enter document code",null,D.f9e,null,A.L,null,null,null,null,null,null,null)
D.fnT=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f6P=new B.H(!0,E.n5,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foi=new B.y("Delete this book?",null,D.f6P,null,A.L,null,null,null,null,null,null,null)
D.fbn=new B.H(!0,E.n5,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new B.y("Your library",null,D.fbn,null,null,null,null,null,null,null,null,null)
D.fpi=new B.y("Delete",null,A.aQF,null,null,null,null,null,null,null,null,null)
D.fpl=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Dx,null,null,null,null,null,null,null,null,null)
D.fpw=new B.y("Element flies in",null,A.aQR,null,null,null,null,null,null,null,null,null)
D.Ub=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new B.y("Cancel",null,E.aR1,null,null,null,null,null,null,null,null,null)
D.fqj=new B.y("The lines and circles that come with the design",null,A.hg,null,null,null,null,null,null,null,null,null)
D.feN=new B.H(!0,A.fW,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqK=new B.y("DOCUMENT CODE",null,D.feN,null,null,null,null,null,null,null,null,null)
D.fry=new B.y("Quotes",null,G.a8z,null,null,null,null,null,null,null,null,null)
D.f8E=new B.H(!0,O.li,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frG=new B.y("Add a picture",null,D.f8E,null,null,null,null,null,null,null,null,null)
D.frO=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8g,null,A.L,null,null,null,null,null,null,null)
D.frS=new B.y("Look & feel",null,A.hu,null,null,null,null,null,null,null,null,null)
D.frX=new B.y("Rings",null,A.hH,null,null,null,null,null,null,null,null,null)
D.fs2=new B.y("W",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fsc=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fsv=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TY,null,A.L,null,null,null,null,null,null,null)
D.fsx=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.ftg=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.ftv=new B.y("Malipo ya Awamu ya Mahari",null,A.ft,null,null,null,null,null,null,null,null,null)
D.f93=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new B.y("Create with AI",null,D.f93,null,A.L,null,null,null,null,null,null,null)
D.fud=new B.y("Apply look",null,A.hH,null,null,null,null,null,null,null,null,null)
D.f9M=new B.H(!0,A.er,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new B.y("Type your presentation below",null,D.f9M,null,A.L,null,null,null,null,null,null,null)
D.fv3=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aRC,null,A.L,null,null,null,null,null,null,null)
D.fv5=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f4L=new B.H(!0,A.cl,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvc=new B.y("Done",null,D.f4L,null,null,null,null,null,null,null,null,null)
D.fvx=new B.y("Delete",null,A.nA,null,null,null,null,null,null,null,null,null)
D.fvH=new B.y("Hati ya Kiapo cha Uongozi",null,A.ft,null,null,null,null,null,null,null,null,null)
D.f8_=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f8_,null,A.L,null,null,null,null,null,null,null)
D.fwX=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new B.y("Layout",null,A.U3,null,null,null,null,null,null,null,null,null)
D.fxG=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fxM=new B.y("X",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fyk=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.Jh,null,null,null,null,null,null,null,null,null)
D.fyU=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new B.y("Hati ya Kuhowa",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fz8=new B.y("Choose a class template",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fza=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fzg=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fzt=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fzA=new B.y("Done",null,A.aRo,null,null,null,null,null,null,null,null,null)
D.fzK=new B.y("Ending celebration",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fzL=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fA_=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.zO,null,null,null,null,null,null,null,null,null)
D.fAW=new B.y("Export presentation",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fAX=new B.y("What would you like to do?",null,D.aQL,null,null,null,null,null,null,null,null,null)
D.fB0=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fBw=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fBA=new B.y("Hati (Documents)",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fBN=new B.y("Done",null,A.lb,null,null,null,null,null,null,null,null,null)
D.ffM=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new B.y("Delete presentation?",null,D.ffM,null,A.L,null,null,null,null,null,null,null)
D.fCa=new B.y("After the last slide it starts again from the first",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fCm=new B.y("\ud83c\udf33",null,A.Jf,null,A.L,null,null,null,null,null,null,null)
D.fCE=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fCL=new B.y("Transfer document",null,A.ph,null,null,null,null,null,null,null,null,null)
D.fCW=new B.y("Add to the slides",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fDi=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new B.y("Make a book",null,K.aQj,null,null,null,null,null,null,null,null,null)
D.fDB=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.f8x=new B.H(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDC=new B.y("Keep this page open until it finishes.",null,D.f8x,null,null,null,null,null,null,null,null,null)
D.fDF=new B.y("Making your video",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fDK=new B.y("LANGUAGE",null,H.wz,null,null,null,null,null,null,null,null,null)
D.fDR=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fDZ=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fE0=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fEh=new B.y("Delete from the database?",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fEi=new B.y("H",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fEH=new B.y("NGMY Quotes",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fF8=new B.y("Cover",null,D.aRy,null,null,null,null,null,null,null,null,null)
D.fFc=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fFd=new B.y("Each page becomes its own slide you can present",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fFz=new B.y("Y",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fFK=new B.y("Crop the picture",null,A.lb,null,null,null,null,null,null,null,null,null)
D.fFR=new B.y("Edit text",null,A.Jg,null,null,null,null,null,null,null,null,null)
D.fI4=B.dU("a8g")
D.DJ=new C.awO(0,"none")
D.aV0=new C.awO(1,"zipCrypto")
D.aV1=new C.awO(2,"aes")
D.h0F=new F.Pg("","",null)
D.h1L=new C.bc1(null)
D.h2S=new C.Zs(null)
D.h4K=new C.ada(null)
D.h4M=new C.aE_(null)
D.h7x=new C.a_H(null)
D.h7O=new C.a0d(null)
D.h86=new C.btE(null)})();(function staticFields(){$.hfp=null
$.hfq=null
$.hfr=null
$.hfs=null
$.fYi=B.v6("_lastQuoRemDigits")
$.fYj=B.v6("_lastQuoRemUsed")
$.ax9=B.v6("_lastRemUsed")
$.fYk=B.v6("_lastRem_nsh")
$.qb=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a74=B.U(x.N,x.I)
$.fVP=!1
$.hkc=B.U(B.ax("kU"),x.N)
$.hkp=B.U(B.ax("kU"),x.E)
$.hiq=!1
$.bzf="q"
$.Qd=0
$.CE=B.U(x.N,B.ax("ai<zx>"))
$.hiM=!1
$.fZU=!1
$.hp4=null
$.hTf=B.U(x.N,B.ax("aA<m?>"))
$.Kk=""
$.j2=0
$.hca=function(){var w=x.N
return B.U(w,w)}()
$.hc9=B.U(x.N,x.R)
$.h_e=!1
$.afS=B.U(x.N,x.E)
$.h01=0
$.bk6=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ihz","D_",()=>C.b9x(0))
w($,"ihx","a2s",()=>C.b9x(1))
w($,"ihy","hsI",()=>C.b9x(2))
w($,"ihw","h3W",()=>$.a2s().v0(0))
w($,"ihu","hsG",()=>C.b9x(1e4))
w($,"ihv","hsH",()=>B.Eb(8))
w($,"idl","hqI",()=>B.Eb(0))
w($,"idt","hqM",()=>B.Eb(0))
w($,"ids","hqL",()=>B.bYf(0))
w($,"ilf","huI",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4c.gdL(D.a4c),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ilG","bDK",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mV(new C.fGA(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mV(new C.fGB(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mV(new C.fGC(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mV(new C.fGN(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mV(new C.fGS(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mV(new C.fGT(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mV(new C.fGU(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mV(new C.fGV(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mV(new C.fGW(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mV(new C.fGX(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mV(new C.fGY(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mV(new C.fGD(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mV(new C.fGE(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mV(new C.fGF(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mV(new C.fGG(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mV(new C.fGH(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mV(new C.fGI(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mV(new C.fGJ(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mV(new C.fGK(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mV(new C.fGL(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mV(new C.fGM(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mV(new C.fGO(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mV(new C.fGP(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mV(new C.fGQ(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mV(new C.fGR(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<EC>"))})
w($,"ili","huK",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["1KHTAcxtUMq4419htJzoFV1eeB8="]=a.current})($__dart_deferred_initializers__);