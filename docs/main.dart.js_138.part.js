((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ag,A5,Ah,Ai,U,A6,Aj,Ak,C={
tW(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h_Y(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JM(d){var w
if(d===0)return $.D6()
if(d===1)return $.a2G()
if(d===2)return $.hvv()
if(Math.abs(d)<4294967296)return C.b9Z(A.o.N(d))
w=C.hQe(d)
return w},
b9Z(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tW(4,w)
return new C.nY(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tW(1,w)
return new C.nY(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.tW(2,w)
return new C.nY(v===0?!1:s,w,v)}v=A.o.am(A.o.gakd(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.am(d,65536)}v=C.tW(v,w)
return new C.nY(v===0?!1:s,w,v)},
hQe(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dK("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D6()
w=$.hvu()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lb(A.aH.gaP(w))
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
else p=s>0?q.dZ(0,s):q
return p},
h_Z(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hia(d,e,f,g){var w,v,u,t,s,r=A.o.am(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dZ(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fJ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dZ(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hi5(d,e,f,g){var w,v,u,t,s=A.o.am(f,16)
if(A.o.E(f,16)===0)return C.h_Z(d,e,s,g)
w=e+s+1
C.hia(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hQh(d,e,f,g){var w,v,u,t,s=A.o.am(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dZ(1,r)-1,o=A.o.fJ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dZ(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fJ(u,r)}w&2&&B.aj(g)
g[n]=o},
cGi(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hQf(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
ba_(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hib(d,e,f,g,h,i){var w,v,u,t,s,r
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
hQg(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.dS((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
cGj:function cGj(){},
cGk:function cGk(){},
cGl:function cGl(d,e){this.a=d
this.b=e},
cGm:function cGm(d){this.a=d},
aRo:function aRo(d,e){this.a=d
this.b=e},
h8_(d,e,f){var w=new C.RM(d,A.o.am(Date.now(),1000),e)
w.Q=f
return w},
RM:function RM(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3S:function a3S(d,e){this.a=d
this.b=e},
bHO:function bHO(d){this.a=d
this.c=this.b=0},
hyI(){return new C.bG8()},
bG8:function bG8(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cyr:function cyr(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hPX(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cg(d.gcXV(d)))
v=f*2+2
u=C.hfN(C.hfP(),64)
t=new C.cic(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cid(e,1000,v)
s=new Uint8Array(v)
return A.aH.du(s,0,t.cLk(w,0,s,0))},
cyp:function cyp(d,e){this.c=d
this.d=e},
axa:function axa(d,e){this.a=d
this.b=e},
cys:function cys(d,e,f,g){var _=this
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
b8G:function b8G(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cyq:function cyq(){this.a=$},
hhA(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hyr(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEJ:function bEJ(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h5G(d,e){e&=31
return(d&$.qc[e])<<e>>>0},
nu(d,e){e&=31
return(d>>>e|C.h5G(d,32-e))>>>0},
hfO(d){var w,v=new C.asS()
if(B.iK(d))v.aKk(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hfP(){var w=C.hfO(0),v=new Uint8Array(4),u=x.S
u=new C.cie(w,v,A.Ei,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.kC(0)
return u},
hfN(d,e){var w=new C.cia(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ci9:function ci9(){},
cid:function cid(d,e,f){this.a=d
this.b=e
this.c=f},
ci7:function ci7(){},
asR:function asR(d){this.a=d},
cic:function cic(d){this.a=$
this.b=d
this.c=$},
ci8:function ci8(){},
ci6:function ci6(){},
asS:function asS(){this.b=this.a=$},
cib:function cib(){},
cie:function cie(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cia:function cia(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ci5:function ci5(){},
ci4:function ci4(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bOp:function bOp(){},
bOq:function bOq(d){this.a=d},
hTb(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bae:function bae(){},
csd:function csd(){},
bPi:function bPi(d,e){this.a=d
this.b=!1
this.c=e},
bPj:function bPj(){},
i16(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avP(d){var w=0,v=B.j(x.H),u
var $async$avP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f3G?2:4
break
case 2:w=5
return B.b(A.ki.h2("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avP)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.ki.h2("SystemChrome.setEnabledSystemUIOverlays",C.i16(null),u),$async$avP)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avP,v)},
avS:function avS(d,e){this.a=d
this.b=e},
a8v:function a8v(d){this.a=d},
fWU(d,e){return new C.aVU(e,d,null)},
aVU:function aVU(d,e,f){this.e=d
this.c=e
this.a=f},
aAJ:function aAJ(d,e,f,g,h){var _=this
_.ah=d
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
i3M(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fwt(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bk(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fwt:function fwt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anC(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$anC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ah1("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$anC)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.db(s,x.f)
t=B.cD(t,new C.c_5(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.c_6())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anC,v)},
anE(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anC(),$async$anE)
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
return B.b(B.nt("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$anE)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nt("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],t,q),null),$async$anE)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anE,v)},
c_7(d){return C.hEd(d)},
hEd(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c_7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ah1("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hS),$async$c_7)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.W0(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ab(m)
$.am.$1("[admin slides vault] load "+d+": "+B.v(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c_7,v)},
anD(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anC(),$async$anD)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nv(r,new C.c_8(d))
w=4
return B.b(B.nt("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$anD)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPr("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anD)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anD,v)},
c_5:function c_5(){},
c_6:function c_6(){},
c_8:function c_8(d){this.a=d},
idJ(d,e,f){return B.bT(A.K,null,new C.fMG(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fMG:function fMG(d,e,f){this.a=d
this.b=e
this.c=f},
a0V:function a0V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJ7:function aJ7(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f96:function f96(d,e){this.a=d
this.b=e},
f9a:function f9a(d){this.a=d},
f9b:function f9b(d){this.a=d},
f9c:function f9c(d,e,f){this.a=d
this.b=e
this.c=f},
f97:function f97(d){this.a=d},
f98:function f98(d){this.a=d},
f99:function f99(d,e){this.a=d
this.b=e},
f91:function f91(d){this.a=d},
f9_:function f9_(d){this.a=d},
f90:function f90(d){this.a=d},
f92:function f92(d){this.a=d},
f93:function f93(d){this.a=d},
f9g:function f9g(d,e){this.a=d
this.b=e},
f9f:function f9f(d,e){this.a=d
this.b=e},
f95:function f95(d,e,f){this.a=d
this.b=e
this.c=f},
f94:function f94(d,e,f){this.a=d
this.b=e
this.c=f},
f9d:function f9d(d,e){this.a=d
this.b=e},
f9e:function f9e(d,e){this.a=d
this.b=e},
f9j:function f9j(d){this.a=d},
f9k:function f9k(d,e){this.a=d
this.b=e},
f9i:function f9i(d,e){this.a=d
this.b=e},
f9h:function f9h(){},
hkB(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.db(w,x.f)
v=B.cD(v,new C.fgp(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fgq(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1U(d){return C.i51(d)},
i51(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1U=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fzi(n)
t=4
j=m
i=C
w=7
return B.b(B.a2t("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1U)
case 7:j.$1(i.hkB(f))
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
return B.b(B.ay(),$async$a1U)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hkB(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fgy(d),$async$a1U)
case 13:p=j.C(new i.a_(h,new g.fzg(f),o),o.k("J.E"))
A.d.b_(p,new C.fzh())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1U,v)},
ahC(d,e){return C.ido(d,e)},
ido(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahC=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fMa(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahu("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahC)
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
return B.b(B.ay(),$async$ahC)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahC)
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
return B.i($async$ahC,v)},
fgy(d){return C.hUx(d)},
hUx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fgy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$fgy)
case 7:r=f
q=r.th("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kI(q,B.S(q).c)
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
return B.i($async$fgy,v)},
agr(d,e){return C.i3E(d,e)},
i3E(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agr=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$agr)
case 6:s=g
r=B.aX(x.N)
q=s.th("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$agr)
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
return B.b(C.a1U(d),$async$agr)
case 8:n=g
J.nv(n,new C.fw7(e))
w=9
return B.b(C.ahC(d,n),$async$agr)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agr,v)},
idO(d,e){return B.a5(d,!1).cm(B.ea(new C.fN1(e),!0,null,x.H))},
hQj(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cHF())},
op:function op(d,e,f){this.a=d
this.b=e
this.c=f},
fgp:function fgp(){},
fgq:function fgq(){},
fzi:function fzi(d){this.a=d},
fzg:function fzg(d){this.a=d},
fzh:function fzh(){},
fMa:function fMa(){},
fw7:function fw7(d){this.a=d},
fN1:function fN1(d){this.a=d},
YF:function YF(d,e){this.c=d
this.a=e},
axI:function axI(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cHF:function cHF(){},
cHH:function cHH(d,e){this.a=d
this.b=e},
cHK:function cHK(d){this.a=d},
cHL:function cHL(d){this.a=d},
cHJ:function cHJ(){},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHI:function cHI(d){this.a=d},
cHN:function cHN(){},
cHG:function cHG(d,e){this.a=d
this.b=e},
cHO:function cHO(){},
cHB:function cHB(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHC:function cHC(d,e){this.a=d
this.b=e},
cHy:function cHy(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHw:function cHw(d){this.a=d},
cHE:function cHE(){},
cHD:function cHD(d){this.a=d},
cHu:function cHu(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHs:function cHs(d,e){this.a=d
this.b=e},
cHP:function cHP(d){this.a=d},
YD:function YD(d,e,f){this.c=d
this.d=e
this.a=f},
aF_:function aF_(d,e,f){this.a=d
this.b=e
this.c=f},
axE:function axE(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cGW:function cGW(d){this.a=d},
cGV:function cGV(d){this.a=d},
cGY:function cGY(d,e,f){this.a=d
this.b=e
this.c=f},
cH5:function cH5(){},
cH6:function cH6(d){this.a=d},
cGZ:function cGZ(d,e,f){this.a=d
this.b=e
this.c=f},
cGX:function cGX(d,e){this.a=d
this.b=e},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH1:function cH1(d,e){this.a=d
this.b=e},
cH2:function cH2(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cH4:function cH4(d){this.a=d},
cH3:function cH3(d,e){this.a=d
this.b=e},
cHb:function cHb(d){this.a=d},
cH7:function cH7(d,e){this.a=d
this.b=e},
cH8:function cH8(d,e){this.a=d
this.b=e},
cH9:function cH9(d,e){this.a=d
this.b=e},
cHa:function cHa(d,e){this.a=d
this.b=e},
axG:function axG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i7m(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ek(v,x.cK).bC(new C.fDN(),x.H).eS(new C.fDO())}}else if(s)C.hm3()}catch(t){}},
hm3(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ek(v,x.cK).eS(new C.fkQ())}catch(u){}},
i7p(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fDN:function fDN(){},
fDO:function fDO(){},
fkQ:function fkQ(){},
hqG(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
hqD(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.la)return null
return A.a.b6(w,14)},
h4o(d){var w
if(d.b!==D.la)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b6(w,21)},
i7P(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hqH(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i7K(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l3(0,f)
t=x.N
u=B.cD(u,new C.fEM(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l3(0,f),u=new B.JL(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Rt(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Rt(A.a.b6(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cG(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i7I(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b_(q,new C.fEL())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQn(w,u,s,0)}return w},
i7M(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4p:$.hxw(),s=x.N,r=B.U(s,s)
for(s=t.gdM(t),s=s.gaf(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hqE(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fhr(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hqG(q)===e)return q}return null},
i7N(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b6(v,u)
return A.d.gI(D.GY).a},
i7O(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aei(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aei(0,0,0)
v=C.fhr(b6,b0)
u=C.fhr(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i7M(b2,C.i7K(C.hqE(b2),v.r))
if(s.a!==0){u.r=C.i7I(C.hqE(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hqG(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fhr(b6,n)
i=C.fhr(b5,n)
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
a0=C.h4o(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hqD(a8)===a0||C.h4o(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.R3(a1,new C.fES(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j2
$.j2=a9+1
A.d.L(a1,new C.eM(""+1000*a6+"_"+a9,D.la,a2,a3,a4,a5,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,d.at,D.bh,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.T(Date.now(),0,!1)
return new B.aei(k,t,e)},
i7J(d){var w=C.i7N(d)
if(d.w==="hati_kuhowa")return C.hq0("",w)
return C.hq_("",w)},
fEM:function fEM(){},
fEL:function fEL(){},
fES:function fES(d){this.a=d},
hlN(){var w=new B.T(Date.now(),0,!1),v=new C.fjT()
return B.v(v.$1(B.bV(w)))+"/"+B.v(v.$1(B.bH(w)))+"/"+B.bA(w)},
h4x(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fFK(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.la&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hqV(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fFK(d)
w=B.bj(u)
if(w==null)return!C.fFK(d)
return new B.T(Date.now(),0,!1).a6().d_(w.a6().bS(18e9))},
i8u(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.T(Date.now(),0,!1).a6().ac()},
hIg(d){return A.a.i(d).toLowerCase()},
apU(d){return C.hIi(d)},
hIi(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$apU)
case 7:r=f
p=r.th("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.ic0(),B.S(o).k("M<1,m>")).c0(0,new C.can())
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
return B.i($async$apU,v)},
apT(d,e){return C.hIh(d,e)},
hIh(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apT=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apU(d),$async$apT)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apT)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apT)
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
return B.i($async$apT,v)},
apV(d,e){return C.hIj(d,e)},
hIj(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apU(d),$async$apV)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apV)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apV)
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
return B.i($async$apV,v)},
Vi(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vi=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fYp&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$Vi)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aL(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jz(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.W0(B.a2(f.a(n.b),e,a0)))}$.a7i=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.ab(a2)
$.am.$1("[kiapo] local load: "+B.v(m))
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
return B.b(B.c3(),$async$Vi)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u9("civic_hati_kiapo_uongozi",null,A.ei),$async$Vi)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jz(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.W0(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7i.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a7i.n(0,i.a,i.b)}w=20
return B.b(C.apW(),$async$Vi)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.ab(a3)
$.am.$1("[kiapo] cloud load: "+B.v(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fYp=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vi,v)},
apW(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apW=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$apW)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7i,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apW)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ab(l)
$.am.$1("[kiapo] local save: "+B.v(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$apW,v)},
b_o(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vi(!1),$async$b_o)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7i.h(0,t)
r=s==null?null:s.hK()
if(r==null){u=null
w=1
break}u=C.bCf(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_o,v)},
a7j(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7j=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7i.n(0,d,o)
$.fYp=!0
w=3
return B.b(C.apW(),$async$a7j)
case 3:w=4
return B.b(B.c3(),$async$a7j)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7i,n=new B.cI(n,B.a3(n).k("cI<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.nt("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.T(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a7j)
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
$.am.$1("[kiapo] cloud save: "+B.v(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7j,v)},
apX(d){var w=0,v=B.j(x.T),u,t,s
var $async$apX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a5H(A.eG),$async$apX)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fe(),$async$apX)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_n(t,d),$async$apX)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apX,v)},
b_n(d,e){return C.hIk(d,e)},
hIk(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_n=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$b_n)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.v(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.im("media")
w=8
return B.b(p.x4(q,new Uint8Array(B.cg(d)),D.bBA),$async$b_n)
case 8:n=p.CE(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ab(k)
$.am.$1("[kiapo] video upload: "+B.v(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b_n,v)},
KC(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cS,l,m,n)},
fj8(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
h1t(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cS,g,e,f)},
fiH(d,e,f,g){return C.fj8(0,0.002,D.ft,g,0.8,"ul_"+B.v(d)+"_"+B.v(e),f,d,e+0.002)},
h1u(d,e,f,g,h,i,j,k){var w=C.cC()
return C.er(A.qA,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bo,A.a7,"",h,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cS,g,e,f)},
hlM(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
bCf(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hlM(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.la&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hK()}h=C.h42(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BO(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hlM(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.la&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.br(a1.z,new C.fDL(a2))}else A.d.br(a1.z,new C.fDM())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fFK(a0))a0.ax=a6.f.a6().ac()
return a0},
h42(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fGx(D.a5q),l=C.cC(),k=x.u,j=B.a([C.er(A.bi,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a7,"",1,C.cC(),m,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cn,D.lB,1,0,0)],k),i=B.a([],k)
i.push(C.KC("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KC("TAREHE:",A.bi,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h1t("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hlN()))
i.push(C.fiH(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KC("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KC("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fj8(0,0.002,D.ft,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h1u("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h1u("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h1u("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fj8(268435456,0.175,D.bh,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KC("VIDEO YA KIAPO",A.bi,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bi,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a7,"",0.131,C.cC(),t,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cn,D.lB,0.77,0.115,0.492))
i.push(C.KC("Rais Anayeapa:",A.bi,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KC("Jina:",A.bi,p,13,A.bo,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h1t("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fiH(0.195,0.7130000000000001,0.62,n))
i.push(C.KC("Sahihi:",A.bi,p,13,A.bo,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bi,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a7,"",0.07,C.cC(),t,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,0.38,0.21500000000000002,0.73))
i.push(C.fiH(0.21500000000000002,0.795,0.38,n))
i.push(C.KC("Tarehe:",A.bi,p,13,A.bo,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h1t("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hlN()))
i.push(C.fiH(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fj8(0,0.032,D.bh,o,1,"state_box",0.72,0.14,0.875),C.KC("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rz(4294967035,t,0,0,j,l,D.qo,"","",u,D.df)
return C.BO(t,t,t,t,D.oj,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agD(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agD=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.eZs)
w=1
break}w=3
return B.b(C.Vi(!0),$async$agD)
case 3:w=4
return B.b(C.b_o(p),$async$agD)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hqV(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bf7,null,new C.fyE(p),f,!0,!0,!1,A.lC,!1,!1,x.N),$async$agD)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fyF(),f,null,!0,!0,x.y),$async$agD)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h42(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h42(p))
case 1:return B.h(u,v)}})
return B.i($async$agD,v)},
fjT:function fjT(){},
can:function can(){},
fDL:function fDL(d){this.a=d},
fDM:function fDM(){},
fyE:function fyE(d){this.a=d},
fyC:function fyC(d){this.a=d},
fyD:function fyD(d){this.a=d},
fyF:function fyF(){},
fyA:function fyA(d){this.a=d},
fyB:function fyB(d){this.a=d},
aqs:function aqs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDM:function aDM(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ecl:function ecl(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
wF(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bh,4280172719,2,d,0,0,"",D.cn,D.cS,l,m,n)},
hlq(d,e,f){var w=4291404327
return B.a([C.qb(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.qb(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fi7(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qb(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qb(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qb(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qb(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
fi6(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,l,0,0,"",D.cn,D.cS,g,e,f)},
bzG(d,e,f,g){return C.qb(0,0.002,D.ft,g,0.8,"ul_"+B.v(d)+"_"+B.v(e),f,d,e+0.002)},
hlp(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qb(0,0.036,D.bh,h,1.4,"banner_box_"+d,w,v,e),C.wF(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hqF(){var w=new B.T(Date.now(),0,!1),v=new C.fER()
return B.v(v.$1(B.bV(w)))+"/"+B.v(v.$1(B.bH(w)))+"/"+B.bA(w)},
hlr(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wF(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fi6("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bzG(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wF("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a7,"",0.05,C.cC(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,s,t,g-0.004),C.bzG(t,g+0.044,s,w)],x.u)},
ah3(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dgg,D.ckQ,D.d8C,D.dat],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
h0L(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fGx(d.d),v=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a7,"",1,C.cC(),w,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lB,1,0,0)],x.u)
A.d.v(v,C.hWX(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hWX(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wF("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hlq(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hlq(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fi7(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fi7(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wF("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qb(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.qb(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wF("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qb(0,0.002,D.ft,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qb(b9,0.016,D.lb,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qb(0,0.002,D.ft,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wF("TAREHE:",A.bi,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fi6("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hqF()),C.bzG(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wF(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qb(c0,0.0026,D.bh,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qb(c3.e,0.138,D.bh,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.er(A.bi,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bo,A.cx,"",0.128,s,a9,"","",0,!1,"",0,D.bh,b3,2,c5,0,0,"",D.cn,D.cS,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qb(0,0.036,D.bh,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.er(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bh,b3,2,c7,0,0,"",D.cn,D.cS,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hlp(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wF(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fi6("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
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
d=B.a([new C.eM(""+1000*i+"_"+h,D.cS,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bi,a9,D.bh,b2,b3,2,0,!1,s,0,D.cn,0,"","","","","",!1,0),j,new C.eM(""+1000*f+"_"+e,D.f5,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.ft,0,b5,0.8,0,!1,g,0,D.cn,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eM(""+1000*s+"_"+p,D.cS,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dP,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*i+"_"+h,D.f5,a1,a2,0.046,0.025875,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.bh,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*g+"_"+f,D.cS,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*e+"_"+a3,D.f5,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bo,A.aD,b6,A.bi,a9,D.bh,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cn,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hlp("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a5f||w===D.a5h||w===D.a5e||w===D.a5g){w=t-0.008
A.d.v(c2,C.fi7(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fi7(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qb(0,a4,D.bh,c0,1.3,"wit_table_border",0.82,0.09,t),C.qb(c0,a4,D.bh,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qb(0,0.0022,D.ft,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wF("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wF("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hlr("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hlr("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qb(0,0.11,D.bh,c0,1.2,"mw_box",0.82,0.09,t),C.wF("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wF("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fi6("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bzG(0.215,p,0.3116,b5),C.wF("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bi,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a7,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,0.3161999999999999,0.5738,s-0.044),C.bzG(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qb(0,0.032,D.bh,c0,1,"state_box",0.7,0.15,a8),C.wF("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i7L(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h4H(d.d),p=new C.fEN(s),o=new C.fEO(s),n=d.z,m=n===D.a5f||n===D.a5h||n===D.a5e||n===D.a5g,l=n===D.aFU||n===D.a5i||n===D.aFV,k=B.bW(0,B.fR(q,A.A,t,t,A.cg,A.bX,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5i?26:16
i.push(new C.fEQ().$1$size(w))}if(n===D.aFW)i.push(D.fEF)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hH,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aP4,p.$1$w(0.9),D.aP4,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.bal,t,n,w,t,t,A.n),t,t,t,t,A.ajr,t,t,t))
i.push(A.am)
i.push(new C.fEP(r).$1("NIMETOWE"))
i.push(A.fF)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mo,new B.ci(A.aP,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dc,new B.bB(1,A.bg,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b8)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.Z,t,A.b2,A.r,B.a([k,new B.D(A.ai2,B.x(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hq_(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ah3(e,t)
if(r==null)r=A.d.gI(D.GY)
w=C.cC()
v=C.rz(r.e,t,0,0,C.h0L(r,0.165,y.O,D.db5,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qo,"","",s,D.df)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.BO(t,t,t,t,D.oj,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hq0(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ah3(e,t)
if(r==null)r=A.d.gI(D.GY)
w=C.cC()
v=C.rz(r.e,t,0,0,C.h0L(r,0.165,y.f,D.d6H,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qo,"","",s,D.df)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.BO(t,t,t,t,D.oj,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bDB(d,e,f){var w=0,v=B.j(x.T),u
var $async$bDB=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fQt(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDB,v)},
agE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agE=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fyI(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LB,null,new C.fyJ(p),d,!0,!0,!1,A.lC,!1,!1,x.N),$async$agE)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDB(d,"Hati ya Kuhowa",D.GY),$async$agE)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lh(d,"Tafuta jimbo\u2026","",A.kc,"Chagua jimbo"),$async$agE)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hq_(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
agF(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fyM(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LB,null,new C.fyN(p),d,!0,!0,!1,A.lC,!1,!1,x.N),$async$agF)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDB(d,"Hati ya Kuhoweya",D.GY),$async$agF)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lh(d,"Tafuta jimbo\u2026","",A.kc,"Chagua jimbo"),$async$agF)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hq0(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
agG(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agG=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fyQ(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LB,null,new C.fyR(m),d,!0,!0,!1,A.lC,!1,!1,x.N),$async$agG)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDB(d,"Malipo ya Awamu ya Mahari",D.QP),$async$agG)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lh(d,"Tafuta jimbo\u2026","",A.kc,"Chagua jimbo"),$async$agG)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ah3(s,D.QP)
if(q==null)q=A.d.gI(D.QP)
n=C.cC()
p=C.rz(q.e,null,0,0,C.h0L(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d1C,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qo,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.df)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BO(null,null,null,null,D.oj,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agG,v)},
xE:function xE(d,e){this.a=d
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
fER:function fER(){},
fEN:function fEN(d){this.a=d},
fEP:function fEP(d){this.a=d},
fEQ:function fEQ(){},
fEO:function fEO(d){this.a=d},
fQt:function fQt(d,e){this.a=d
this.b=e},
adn:function adn(d,e,f){this.c=d
this.d=e
this.a=f},
dZY:function dZY(d,e,f){this.a=d
this.b=e
this.c=f},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
acM:function acM(d,e,f){this.c=d
this.d=e
this.a=f},
fyI:function fyI(){},
fyJ:function fyJ(d){this.a=d},
fyG:function fyG(d){this.a=d},
fyH:function fyH(d){this.a=d},
fyM:function fyM(){},
fyN:function fyN(d){this.a=d},
fyK:function fyK(d){this.a=d},
fyL:function fyL(d){this.a=d},
fyQ:function fyQ(){},
fyR:function fyR(d){this.a=d},
fyO:function fyO(d){this.a=d},
fyP:function fyP(d){this.a=d},
KF(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.er(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cS,k,l,m)},
CP(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f5,j,k,l)},
hm6(d,e,f){return C.CP(0,0.002,D.ft,4293056712,0.8,"ul_"+B.v(d)+"_"+B.v(e),f,d,e+0.022)},
bzQ(d,e,f,g,h){return B.a([C.CP(4294967288,0.032,D.bh,4291404327,1.15,"pill_"+d,g,f,e),C.KF(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h1y(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.v(e)
return B.a([C.CP(0,0.002,D.ft,g,1,"orn_l_"+t,u,d,v),C.CP(h,0.016,D.lb,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CP(0,0.002,D.ft,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1h(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KF(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.er(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cn,D.cS,t,u,g-0.002),C.hm6(u,g+0.018,t)],x.u)},
hm7(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CP(h,0.028,D.bh,h,0,"chv_"+d,g,e,f),C.CP(w,0.024,D.lb,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CP(w,0.024,D.lb,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KF(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzP(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KF("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a7,"",0.032,C.cC(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cn,D.f5,v,w,f-0.006),C.hm6(w,f+0.016,v)],x.u)},
h4I(d){var w,v
for(w=0;w<19;++w){v=D.R3[w]
if(v.a===d)return v}return null},
ia1(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ah3(A.a.b6(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ah3(A.a.b6(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b6(k,18)
w=C.ah3(u,D.QP)
v=w==null?l:w.d
if(v==null){w=C.ah3(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h4I(A.a.b6(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hmW.a8(0)
$.hn8.a8(0)
t=C.fGx(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h5O(d){var w=0,v=B.j(x.T),u
var $async$h5O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fRW(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5O,v)},
xH:function xH(d,e){this.a=d
this.b=e},
nK:function nK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bji:function bji(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fRW:function fRW(){},
adq:function adq(d){this.a=d},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehz:function ehz(d){this.a=d},
ehy:function ehy(d,e){this.a=d
this.b=e},
af6:function af6(d,e,f){this.c=d
this.d=e
this.a=f},
h4H(d){return $.hn8.ca(0,d,new C.fGz(d))},
fGx(d){return $.hmW.ca(0,d,new C.fGy(d))},
fC(d){return B.fVX(d>>>16&255,d>>>8&255,d&255,255)},
i_3(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hod(4294570461,4293910718,4284234270,u)
case 1:return C.hod(4294635750,4293975240,t,4292912216)
case 2:w=C.fgG(s,4294505966,r)
C.bzA(w,14,16,p)
C.ky(w,8,9,464,836,u,1.2)
C.CL(w,2,2,1,1,u,10)
C.CL(w,478,2,-1,1,u,10)
C.CL(w,2,852,1,-1,u,10)
C.CL(w,478,852,-1,-1,u,10)
return w
case 3:return C.fgG(4294966515,4294373082,4289102906)
case 4:return C.hUM(C.fgG(4294376440,4293653998,4290287194))
case 5:w=C.fgG(4294965238,4294437098,4288444980)
C.bzA(w,14,16,4283043359)
C.ky(w,6,7,468,840,u,1)
C.ky(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,n,4294175448)
C.rW(v,n)
C.ky(v,24,24,432,806,4286209070,1)
C.a14(v,12,12,468,12,o,3,20)
C.a14(v,12,842,468,842,o,3,20)
C.a14(v,12,12,12,842,o,3,20)
C.a14(v,468,12,468,842,o,3,20)
return v
case 7:return C.hSS(4294440434,4293518297,4280228630,r)
case 8:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,m,4293911504)
C.rW(v,m)
C.ky(v,28,28,424,798,l,1)
C.fq4(v,28,28,l,k)
C.fq4(v,452,28,l,k)
C.fq4(v,28,826,l,k)
C.fq4(v,452,826,l,k)
return v
case 9:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,j,4294111986)
C.rW(v,j)
C.ky(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fC(p),0,13,0,853)
return v
case 10:return C.hWJ(i,4294173372)
case 11:return C.hXQ(4294439140,4293449662)
case 12:return C.hSK(h,4294239432)
case 13:return C.hXh(4294244340,4293193448)
case 14:return C.i0E(4294505710,4293780694)
case 15:return C.ffC(4294966259,4294439138,o,p,q)
case 16:return C.ffC(4294966776,4294178544,o,g,g)
case 17:return C.ffC(4294965493,4294504170,o,4286200650,q)
case 18:return C.ffC(4294966519,4294373862,o,p,p)
case 19:return C.hVR()
case 20:return C.hVS()
case 21:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,h,4293976768)
C.rW(v,h)
C.bzA(v,14,16,p)
B.iM(v,!0,C.fC(u),4,475,4,9)
B.iM(v,!0,C.fC(u),4,475,844,849)
B.iM(v,!0,C.fC(u),4,9,4,849)
B.iM(v,!0,C.fC(u),470,475,4,849)
C.a14(v,10,12,470,12,u,2,16)
C.a14(v,10,842,470,842,u,2,16)
C.a14(v,10,12,10,842,u,2,18)
C.a14(v,470,12,470,842,u,2,18)
C.CL(v,2,2,1,1,t,10)
C.CL(v,478,2,-1,1,t,10)
C.CL(v,2,852,1,-1,t,10)
C.CL(v,478,852,-1,-1,t,10)
C.ky(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,s,4294438872)
C.rW(v,s)
C.ky(v,14,16,452,822,o,2.2)
C.ky(v,22,24,436,806,o,1)
C.h2T(v,!1,!1,o,p,p,36,14,16)
C.kN(v,240,20,7,o,!0)
C.kN(v,240,834,7,o,!0)
C.kN(v,18,427,7,o,!0)
C.kN(v,462,427,7,o,!0)
return v
case 23:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,i,4293910712)
C.rW(v,i)
B.iM(v,!0,C.fC(u),0,479,0,20)
B.iM(v,!0,C.fC(u),0,479,834,853)
B.iM(v,!0,C.fC(u),0,20,0,853)
B.iM(v,!0,C.fC(u),460,479,0,853)
B.iM(v,!0,C.fC(f),5,474,5,9)
B.iM(v,!0,C.fC(f),5,474,844,848)
B.iM(v,!0,C.fC(f),5,9,5,848)
B.iM(v,!0,C.fC(f),470,474,5,848)
C.ky(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ht(q,q,A.cd,0,A.e5,854,q,0,3,q,A.cd,480,!1)
C.yA(v,e,4294174404)
C.rW(v,e)
C.bzA(v,14,16,p)
B.iM(v,!0,C.fC(u),3,476,3,8)
B.iM(v,!0,C.fC(u),3,476,845,850)
B.iM(v,!0,C.fC(u),3,8,3,850)
B.iM(v,!0,C.fC(u),471,476,3,850)
C.ky(v,9,10,462,834,t,1)
C.ky(v,14,16,452,822,u,1.8)
C.kN(v,240,8,4,u,!0)
C.kN(v,240,846,4,u,!0)
C.kN(v,8,427,4,u,!0)
C.kN(v,472,427,4,u,!0)
C.kN(v,8,8,3,t,!0)
C.kN(v,472,8,3,t,!0)
C.kN(v,8,846,3,t,!0)
C.kN(v,472,846,3,t,!0)
return v}},
yA(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kP(d,!1,A.dd,new B.S6(s),r,A.cZ,1,0,w-1,k,k);++k}},
rW(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.ez()
n.dl(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dV(u,t,o)
if(s==null)s=new B.iH()
v=A.o.D(A.k.N(s.gb7(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbd(s))-2,0,255)
p=d.a
if(p!=null)p.jT(u,t,v,r,q,255)}},
ky(d,e,f,g,h,i,j){var w,v=null,u=C.fC(i),t=e+g
B.kP(d,!0,A.dd,u,v,A.cZ,j,e,t,f,f)
w=f+h
B.kP(d,!0,A.dd,u,v,A.cZ,j,e,t,w,w)
B.kP(d,!0,A.dd,u,v,A.cZ,j,e,e,f,w)
B.kP(d,!0,A.dd,u,v,A.cZ,j,t,t,f,w)},
CL(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kP(d,!0,A.dd,C.fC(i),u,A.cZ,2,e,e+g*j,f,f)
B.kP(d,!0,A.dd,C.fC(i),u,A.cZ,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kP(d,!0,A.dd,C.fC(i),u,A.cZ,1,w,e+g*t,v,v)
B.kP(d,!0,A.dd,C.fC(i),u,A.cZ,1,w,w,v,f+h*t)},
hod(d,e,f,g){var w=null,v=B.ht(w,w,A.cd,0,A.e5,854,w,0,3,w,A.cd,480,!1)
C.yA(v,d,e)
C.rW(v,d)
B.iM(v,!0,C.fC(f),0,479,0,28)
B.iM(v,!0,C.fC(f),0,479,826,853)
B.iM(v,!0,C.fC(f),0,28,0,853)
B.iM(v,!0,C.fC(f),452,479,0,853)
C.ky(v,5,5,470,844,g,1.1)
C.ky(v,28,28,424,798,g,1.6)
C.CL(v,2,2,1,1,g,11)
C.CL(v,478,2,-1,1,g,11)
C.CL(v,2,852,1,-1,g,11)
C.CL(v,478,852,-1,-1,g,11)
return v},
fgG(d,e,f){var w=null,v=B.ht(w,w,A.cd,0,A.e5,854,w,0,3,w,A.cd,480,!1)
C.yA(v,d,e)
C.rW(v,d)
C.ky(v,14,16,452,822,f,1.6)
C.ky(v,20,22,440,810,f,0.8)
return v},
bzA(d,e,f,g){var w,v=C.fC(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hUM(d){var w,v,u=4291404327
C.bzA(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kN(d,w,8,3,u,!0)
C.kN(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kN(d,7,v,3,u,!0)
C.kN(d,473,v,3,u,!0)}return d},
ftb(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1R(d,C.fC(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1R(d,C.fC(k),t)
t=A.k.V(n*0.39)
C.kN(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kN(d,e+g*t,f+h*3,4,k,!0)
C.kN(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kN(d,e+g*t,f,5,k,!0)
C.kN(d,e,f+h*t,5,k,!0)}},
h2T(d,e,f,g,h,i,j,k,l){var w,v
C.ftb(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.ftb(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.ftb(d,k,v,1,-1,e,f,g,h,i,j)
C.ftb(d,w,v,-1,-1,e,f,g,h,i,j)},
a14(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l5(d,!0,A.dd,new B.r4(p),null,A.cZ,j,r,q)}},
fsc(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kP(d,!0,A.dd,new B.r4(o),null,A.cZ,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kP(d,!0,A.dd,new B.r4(o),null,A.cZ,1.4,q,q,p,p+h*r)}},
hSS(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ht(o,o,A.cd,0,A.e5,854,o,0,3,o,A.cd,480,!1)
C.yA(n,d,e)
C.rW(n,d)
C.ky(n,20,20,440,814,f,1.2)
C.fsc(n,0,0,1,1,g)
C.fsc(n,480,0,-1,1,g)
C.fsc(n,0,854,1,-1,g)
C.fsc(n,480,854,-1,-1,g)
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
B.kP(n,!0,A.dd,new B.r4(p),o,A.cZ,1.2,240,r,60,q)}return n},
fq4(d,e,f,g,h){var w
C.fwu(d,!0,C.fC(g),13,e,f)
C.fwu(d,!0,C.fC(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1R(d,C.fC(h),w)},
kN(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1R(d,C.fC(h),r)
return}B.kP(d,!0,A.dd,C.fC(h),w,A.cZ,1,e,u,v,f)
B.kP(d,!0,A.dd,C.fC(h),w,A.cZ,1,u,e,f,t)
B.kP(d,!0,A.dd,C.fC(h),w,A.cZ,1,e,s,t,f)
B.kP(d,!0,A.dd,C.fC(h),w,A.cZ,1,s,e,f,v)},
ffB(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1R(d,C.fC(i),v)
v=e+g*14
w=f+h*14
C.kN(d,v,w,6,j,!0)
C.kN(d,v,w,3,i,!0)},
ffC(d,e,f,g,h){var w=null,v=B.ht(w,w,A.cd,0,A.e5,854,w,0,3,w,A.cd,480,!1)
C.yA(v,d,e)
C.rW(v,d)
C.ky(v,18,18,444,818,f,2)
C.ky(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fC(h),28,451,28,34)
C.ffB(v,18,18,1,1,g,f)
C.ffB(v,462,18,-1,1,g,f)
C.ffB(v,18,836,1,-1,g,f)
C.ffB(v,462,836,-1,-1,g,f)
return v},
hVR(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ht(v,v,A.cd,0,A.e5,854,v,0,3,v,A.cd,480,!1)
C.yA(r,u,4294240980)
C.rW(r,u)
C.ky(r,10,12,460,830,t,3.2)
C.ky(r,18,20,444,814,s,1.2)
C.ky(r,24,26,432,802,t,1.8)
C.h2T(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kN(r,w,16,3,t,!0)
C.kN(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kN(r,16,w,3,t,!0)
C.kN(r,464,w,3,t,!0)}return r},
hVS(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ht(t,t,A.cd,0,A.e5,854,t,0,3,t,A.cd,480,!1)
C.yA(p,s,4294373080)
C.rW(p,s)
C.ky(p,16,18,448,818,r,2.4)
C.ky(p,24,26,432,802,4286209044,1)
w=new C.fhZ(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h2T(p,!1,!0,r,q,q,34,16,18)
return p},
bAh(d,e,f,g,h,i){B.iM(d,!0,C.fC(i),e,e+g,f,f+h)},
bB6(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kP(d,!1,A.dd,new B.S6(i),null,A.cZ,1,e,w,l,l)}},
hWI(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kP(d,!1,A.dd,new B.r4(r),null,A.cZ,1,e,s,t,t);++v}return}w=f+g-1
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
B.kP(d,!1,A.dd,new B.r4(r),null,A.cZ,1,t,t,f,s);++q}},
hWJ(d,e){var w,v,u=null,t=B.ht(u,u,A.cd,0,A.e5,854,u,0,3,u,A.cd,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hWI(t,v,w,30,D.cVj,(A.o.am(v,30)+A.o.am(w,30)&1)===0)
C.bAh(t,44,44,392,766,d)
C.bB6(t,44,44,392,766,d,e)
C.rW(t,d)
C.ky(t,44,44,392,766,4292128567,2.2)
C.ky(t,50,50,380,754,4279898632,0.8)
return t},
hXP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kN(d,e,f,7,h,!0)
C.kN(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kP(d,!0,A.dd,C.fC(h),o,A.cZ,1.6,w,u,v,t)
B.kP(d,!0,A.dd,C.fC(h),o,A.cZ,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kP(d,!0,A.dd,new B.r4(p),o,A.cZ,1.2,w,v,q,q)}break
default:B.kP(d,!0,A.dd,C.fC(h),o,A.cZ,1.5,e-8,e+8,f,f)
B.kP(d,!0,A.dd,C.fC(h),o,A.cZ,1.5,e,e,f-8,f+8)
B.l5(d,!0,A.dd,C.fC(h),o,A.cZ,2,e,f)}},
hXQ(d,e){var w,v,u,t,s=null,r=B.ht(s,s,A.cd,0,A.e5,854,s,0,3,s,A.cd,480,!1)
B.iM(r,!0,C.fC(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hXP(r,u,v,w,4292391514)}C.bAh(r,46,46,388,762,d)
C.bB6(r,46,46,388,762,d,e)
C.rW(r,d)
C.ky(r,46,46,388,762,4291404327,1.8)
return r},
hjD(d,e,f,g){C.fwu(d,!0,C.fC(g),16,e,f)
C.fwu(d,!0,C.fC(g),11,e,f)
C.kN(d,e,f,6,g,!0)
B.kP(d,!0,A.dd,C.fC(g),null,A.cZ,1.3,e-14,e+14,f,f)
B.kP(d,!0,A.dd,C.fC(g),null,A.cZ,1.3,e,e,f-14,f+14)},
hSK(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ht(v,v,A.cd,0,A.e5,854,v,0,3,v,A.cd,480,!1)
B.iM(s,!0,C.fC(4280948752),0,479,0,853)
B.iM(s,!0,C.fC(u),0,479,0,78)
B.iM(s,!0,C.fC(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hjD(s,w,39,t)
C.hjD(s,w,815,t)}C.bAh(s,38,92,404,670,d)
C.bB6(s,38,92,404,670,d,e)
C.rW(s,d)
C.ky(s,38,92,404,670,t,1.8)
C.ky(s,45,99,390,656,4287322667,0.8)
return s},
hXg(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1R(d,new B.r4(o),p)}B.l5(d,!0,A.dd,C.fC(4292128567),null,A.cZ,3,e,f)},
hXh(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ht(s,s,A.cd,0,A.e5,854,s,0,3,s,A.cd,480,!1)
C.yA(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kP(q,!0,A.dd,new B.r4(v),s,A.cZ,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kP(q,!0,A.dd,new B.r4(u),s,A.cZ,1.1,v,v,0,853)}B.iM(q,!0,C.fC(r),0,479,0,70)
B.iM(q,!0,C.fC(r),0,479,798,853)
for(t=0;t<5;++t)C.hXg(q,70+t*85,48,4292128567)
C.bAh(q,48,78,384,712,d)
C.bB6(q,48,78,384,712,d,e)
C.rW(q,d)
C.ky(q,48,78,384,712,4291404327,1.6)
return q},
i0E(d,e){var w,v,u,t=null,s=4279970378,r=B.ht(t,t,A.cd,0,A.e5,854,t,0,3,t,A.cd,480,!1)
B.iM(r,!0,C.fC(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kN(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l5(r,!0,A.dd,new B.r4(u),t,A.cZ,1,v,w)}C.bAh(r,40,40,400,774,d)
C.bB6(r,40,40,400,774,d,e)
C.rW(r,d)
C.ky(r,40,40,400,774,4291058750,2)
C.ky(r,48,48,384,758,s,0.8)
return r},
kW:function kW(d,e){this.a=d
this.b=e},
fGz:function fGz(d){this.a=d},
fGy:function fGy(d){this.a=d},
fhZ:function fhZ(d){this.a=d},
fHc(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hXJ(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h1r(d){var w,v,u,t=null,s=A.a.cH(d,"{"),r=A.a.oH(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aL(0,Ah.ah_(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afu(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vp(null,""),$async$afu)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n7(n)
if(e==null)s=A.hG
else{r=C.hXJ(e)
s=B.a([new B.a04(A.cL.gcu().aK(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qV(t,d,s,"news",E.Fu),$async$afu)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.L6(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afu,v)},
bCJ(d){return C.i9I(d)},
i9I(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afu(r,null),$async$bCJ)
case 7:q=f
p=C.h1r(q)
if(p==null){u=d
w=1
break}o=d.aCH(p)
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
return B.i($async$bCJ,v)},
hnw(d){var w,v=F.h3Z(d)
v=B.aK(v,"book","newspaper")
if(F.a29(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fL7(d,e,f,g){return C.ibz(d,e,f,g)},
ibz(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fL7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fHc(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hr3()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afu('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hnw(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fL7)
case 3:r=m.h1r(i)
if(r==null)throw B.V(y.S)
q=new C.zF(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCH(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a29(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a29(A.d.aG(t," "))==="sw"?C.bCJ(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fL7,v)},
bCd(d,e,f,g,h){return C.i7k(d,e,f,g,h)},
i7k(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bCd=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fQ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hr3()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afu('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hnw(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bCd)
case 3:p=j.h1r(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCH(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a29(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCJ(n),$async$bCd)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7X(A.a.i(B.v(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCd,v)},
a7X:function a7X(d,e,f){this.a=d
this.b=e
this.c=f},
iem(d,e){return B.a5(d,!1).cm(B.ea(new C.fS6(e),!0,null,x.H))},
fS6:function fS6(d){this.a=d},
VP:function VP(d,e){this.c=d
this.a=e},
aE4:function aE4(d,e,f,g,h,i,j,k){var _=this
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
ekS:function ekS(d){this.a=d},
ekR:function ekR(){},
ekT:function ekT(d){this.a=d},
ekQ:function ekQ(d,e){this.a=d
this.b=e},
ekU:function ekU(){},
eku:function eku(d,e){this.a=d
this.b=e},
ekq:function ekq(d,e){this.a=d
this.b=e},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d,e){this.a=d
this.b=e},
ekD:function ekD(d){this.a=d},
ekw:function ekw(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e){this.a=d
this.b=e},
eky:function eky(d,e){this.a=d
this.b=e},
ekz:function ekz(d){this.a=d},
ekA:function ekA(d){this.a=d},
ekv:function ekv(d,e){this.a=d
this.b=e},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
ekJ:function ekJ(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekI:function ekI(d){this.a=d},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekM:function ekM(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekO:function ekO(d,e){this.a=d
this.b=e},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekP:function ekP(d){this.a=d},
ekr:function ekr(d,e){this.a=d
this.b=e},
fG8(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fG8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hl9){w=1
break}r=new C.fG9()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fG8)
case 7:$.hl9=!0
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
return B.i($async$fG8,v)},
bCA(d){return A.Hi[B.mB(d)-1]+", "+A.p8[B.bH(d)-1]+" "+B.bV(d)+", "+B.bA(d)},
i_I(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dkC[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h4n(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fI(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fEr(),B.S(v).k("a_<1>")))
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
continue}o=new C.fEt(j,h)
n=new C.fEs(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.am(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
h1a(d,e){var w=new C.fhz()
return A.d.cJ(e,0,new C.fhx(w))>=A.d.cJ(d,0,new C.fhy(w))},
hih(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
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
zF:function zF(d,e,f,g,h,i,j,k,l,m){var _=this
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
ce3:function ce3(d){this.a=d},
ce1:function ce1(){},
ce2:function ce2(){},
tq:function tq(d,e){this.a=d
this.b=e},
BA:function BA(d,e){this.a=d
this.b=e},
lj:function lj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fG9:function fG9(){},
fEr:function fEr(){},
fEt:function fEt(d,e){this.a=d
this.b=e},
fEs:function fEs(d,e,f){this.a=d
this.b=e
this.c=f},
fhz:function fhz(){},
fhA:function fhA(){},
fhx:function fhx(d){this.a=d},
fhy:function fhy(d){this.a=d},
b0T:function b0T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ce4:function ce4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ce5:function ce5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ce6:function ce6(d){this.a=d},
bct:function bct(d){this.a=d},
bcs:function bcs(d,e){this.b=d
this.a=e},
bu7:function bu7(d){this.a=d},
b8Y:function b8Y(d,e){this.b=d
this.a=e},
brB:function brB(d,e){this.b=d
this.a=e},
ht3(d,e){return B.a5(d,!1).cm(B.ea(new C.fS9(e,null),!0,null,x.E))},
fS9:function fS9(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f){this.c=d
this.d=e
this.a=f},
aE8:function aE8(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
em3:function em3(){},
em4:function em4(d){this.a=d},
em2:function em2(d,e){this.a=d
this.b=e},
elR:function elR(d){this.a=d},
elS:function elS(d){this.a=d},
elY:function elY(d){this.a=d},
elZ:function elZ(d,e){this.a=d
this.b=e},
elW:function elW(d){this.a=d},
elX:function elX(d,e,f){this.a=d
this.b=e
this.c=f},
elT:function elT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
em_:function em_(d,e){this.a=d
this.b=e},
elV:function elV(d,e){this.a=d
this.b=e},
em0:function em0(d){this.a=d},
elU:function elU(d,e){this.a=d
this.b=e},
em1:function em1(d,e){this.a=d
this.b=e},
bc_:function bc_(d,e,f){this.b=d
this.c=e
this.a=f},
ies(d){return B.a5(d,!1).cm(B.ea(new C.fSp(),!0,null,x.I))},
bA1(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h2A(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fSp:function fSp(){},
a_W:function a_W(d){this.a=d},
oC:function oC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFv:function aFv(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aJ=_.aF=_.aA=_.a_=_.b8=_.bi=_.y2=0
_.b2=null
_.b1=0.25
_.bb=null
_.bL=0.5
_.aI=1
_.c6=_.bE=_.bh=0
_.cL=_.c4=!1
_.c=_.a=null},
eVF:function eVF(d){this.a=d},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eV4:function eV4(d){this.a=d},
eUg:function eUg(d){this.a=d},
eUh:function eUh(d){this.a=d},
eUe:function eUe(d){this.a=d},
eUf:function eUf(d){this.a=d},
eUO:function eUO(d,e){this.a=d
this.b=e},
eUP:function eUP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV0:function eV0(d,e,f){this.a=d
this.b=e
this.c=f},
eV_:function eV_(d,e){this.a=d
this.b=e},
eV1:function eV1(d,e){this.a=d
this.b=e},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eV3:function eV3(d,e,f){this.a=d
this.b=e
this.c=f},
eV2:function eV2(d,e){this.a=d
this.b=e},
eU6:function eU6(d){this.a=d},
eU7:function eU7(d){this.a=d},
eU8:function eU8(d){this.a=d},
eU5:function eU5(){},
eU9:function eU9(d,e){this.a=d
this.b=e},
eU4:function eU4(d,e){this.a=d
this.b=e},
eUb:function eUb(){},
eUa:function eUa(d,e){this.a=d
this.b=e},
eU3:function eU3(d,e){this.a=d
this.b=e},
eU0:function eU0(d,e){this.a=d
this.b=e},
eUc:function eUc(d){this.a=d},
eU2:function eU2(d,e){this.a=d
this.b=e},
eUd:function eUd(d){this.a=d},
eU1:function eU1(d,e){this.a=d
this.b=e},
eVu:function eVu(d,e){this.a=d
this.b=e},
eVB:function eVB(d){this.a=d},
eVC:function eVC(d,e){this.a=d
this.b=e},
eVD:function eVD(){},
eVv:function eVv(d,e){this.a=d
this.b=e},
eVt:function eVt(d,e){this.a=d
this.b=e},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVs:function eVs(d,e){this.a=d
this.b=e},
eVx:function eVx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVr:function eVr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVy:function eVy(d){this.a=d},
eVz:function eVz(d,e){this.a=d
this.b=e},
eVA:function eVA(d){this.a=d},
eVq:function eVq(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVe:function eVe(d){this.a=d},
eVc:function eVc(d,e){this.a=d
this.b=e},
eV7:function eV7(d,e){this.a=d
this.b=e},
eVf:function eVf(d){this.a=d},
eVi:function eVi(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVj:function eVj(d){this.a=d},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVm:function eVm(d){this.a=d},
eVa:function eVa(d){this.a=d},
eVn:function eVn(d){this.a=d},
eV9:function eV9(d){this.a=d},
eVo:function eVo(d,e){this.a=d
this.b=e},
eV8:function eV8(d,e){this.a=d
this.b=e},
eVp:function eVp(d){this.a=d},
eVg:function eVg(d){this.a=d},
eVh:function eVh(d){this.a=d},
eUS:function eUS(d){this.a=d},
eUR:function eUR(d){this.a=d},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUU:function eUU(d){this.a=d},
eUK:function eUK(d){this.a=d},
eUJ:function eUJ(d){this.a=d},
eUL:function eUL(d){this.a=d},
eUI:function eUI(d){this.a=d},
eUM:function eUM(d,e){this.a=d
this.b=e},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUG:function eUG(d,e){this.a=d
this.b=e},
eUo:function eUo(d){this.a=d},
eUp:function eUp(d){this.a=d},
eUq:function eUq(d){this.a=d},
eUr:function eUr(d){this.a=d},
eUs:function eUs(d){this.a=d},
eUt:function eUt(d){this.a=d},
eUu:function eUu(d){this.a=d},
eUv:function eUv(d){this.a=d},
eUw:function eUw(d){this.a=d},
eTK:function eTK(d){this.a=d},
eTL:function eTL(d){this.a=d},
eTM:function eTM(d){this.a=d},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
eTJ:function eTJ(d){this.a=d},
eTP:function eTP(d){this.a=d},
eTQ:function eTQ(d){this.a=d},
eUi:function eUi(d){this.a=d},
eUj:function eUj(d){this.a=d},
eUk:function eUk(d){this.a=d},
eUl:function eUl(d){this.a=d},
eUm:function eUm(d){this.a=d},
eTU:function eTU(d){this.a=d},
eTV:function eTV(d){this.a=d},
eTW:function eTW(d){this.a=d},
eTX:function eTX(d){this.a=d},
eTY:function eTY(d){this.a=d},
eTT:function eTT(d){this.a=d},
eTZ:function eTZ(d){this.a=d},
eTS:function eTS(d){this.a=d},
eU_:function eU_(d){this.a=d},
eTR:function eTR(d){this.a=d},
eUN:function eUN(d){this.a=d},
eUF:function eUF(d){this.a=d},
eUB:function eUB(d){this.a=d},
eUA:function eUA(d){this.a=d},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUz:function eUz(d,e){this.a=d
this.b=e},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUE:function eUE(d){this.a=d},
eUY:function eUY(d){this.a=d},
eUX:function eUX(d,e,f){this.a=d
this.b=e
this.c=f},
eUW:function eUW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV6:function eV6(d,e){this.a=d
this.b=e},
eV5:function eV5(d,e){this.a=d
this.b=e},
eUn:function eUn(d){this.a=d},
eVE:function eVE(d){this.a=d},
bfy:function bfy(d,e){this.b=d
this.a=e},
i9T(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i9U(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l3(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
bAD(){var w=$.bzK,v=$.Qp
$.Qp=v+1
return w+"_"+v},
ih(d,e,f,g,h,i,j){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,C.bAD(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.f5,g,e,f)},
o0(d,e,f,g){var w=f*9
return C.ih(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hUm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzK
p=$.Qp
$.Qp=p+1
w.push(new C.eM(q+"_"+p,D.f5,0,r,1,0.0016,"",24,A.a7,A.bo,A.aD,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzK
p=$.Qp
$.Qp=p+1
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
return B.a([C.ih(D.lb,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ih(D.lb,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ih(D.lb,0.7,0.8,0.22,0.12,w|1140850688,0),C.ih(D.lb,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
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
return B.a([C.ih(D.jS,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ih(D.jS,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ih(D.jS,0.15,0.86,0.6,0.14,1712265002,0),C.o0(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cWM[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzK
l=$.Qp
$.Qp=l+1
w.push(new C.eM(m+"_"+l,D.f5,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bo,A.aD,k,A.bi,null,D.eN,q,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.o0(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ih(D.jS,0.35,-0.1,0.3,0.62,w|855638016,0),C.ih(D.jS,0.05,-0.1,0.3,0.55,v,-0.5),C.ih(D.jS,0.65,-0.1,0.3,0.55,v,0.5),C.o0(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ih(D.bh,0.06,0.04,0.88,0.002,e,0),C.ih(D.bh,0.06,0.96,0.88,0.002,e,0),C.ih(D.bh,0.06,0.04,0.004,0.92,e,0),C.ih(D.bh,0.936,0.04,0.004,0.92,e,0),C.ih(D.bh,0.09,0.07,0.82,0.001,w,0),C.ih(D.bh,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ih(D.jT,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ih(D.jT,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ih(D.jT,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ih(D.bh,0,0,0.3,0.09,w|1140850688,0),C.ih(D.bh,0.7,0.9,0.3,0.1,v|1426063360,0),C.ih(D.bh,0.82,0.04,0.12,0.07,w|771751936,0),C.ih(D.bh,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ih(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ih(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ih(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ih(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.o0(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ih(D.bh,0.09,0.12,0.16,0.006,e,0),C.ih(D.bh,0.05,0.03,0.9,0.001,w,0),C.ih(D.bh,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i6o(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzK=j
$.Qp=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fBQ()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a7,"",1,C.bAD(),g,"","",0,!1,"",0,D.bh,l,2,"",0,0,"",D.cn,D.lB,1,0,0))
if(a9)A.d.v(q,C.hUm(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i9T(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fBP(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a7,a1,a3*9/16,C.bAD(),a0,"","",0,!1,a2,0,D.bh,l,2,"",0,0,"",D.cn,D.lB,a3,a4,a5))
return C.rz(s,r,0,0,q,j+"_slide",D.qo,"","","",D.df)},
ry:function ry(d,e){this.a=d
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
fBQ:function fBQ(){},
fBP:function fBP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hKs(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bj(B.v(w.h(d,"at")))
u=w.h(d,"outline")
t=B.v(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cfr(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zH(u,t,s,B.v(w==null?"":w))},
fJv(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fJv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hlv){w=1
break}$.hlv=!0
t=4
w=7
return B.b(B.ay(),$async$fJv)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aL(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jz(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hKs(m)
if(l!=null)J.cf(n,l)}$.CM.ca(0,B.v(o.a),new C.fJw(n))}C.h2f()
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
return B.i($async$fJv,v)},
h2f(){var w,v=new B.T(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.CM,$.CM.r,$.CM.e);w.C();)J.nv(w.d,new C.fph(v))
$.CM.br($.CM,new C.fpi())},
aO8(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aO8=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aO8)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CM,B.a3($.CM).k("cI<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.cf(p,B.G(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aO8)
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
return B.i($async$aO8,v)},
iau(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h2f()
w=$.CM.ca(0,d,new C.fJy())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pC(w,0,new C.zH(new B.T(v,0,!1),f,u,g))
C.aO8()},
iar(d){var w,v=$.CM.h(0,d)
if(v==null||J.cn(v))return
w=J.cF(v)
w.cA(v,0)
if(w.gan(v))$.CM.W(0,d)
C.aO8()},
zH:function zH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfr:function cfr(){},
fJw:function fJw(d){this.a=d},
fph:function fph(d){this.a=d},
fpi:function fpi(){},
fJy:function fJy(){},
iaw(d){return A.d.dN(D.wf,new C.fJB(d),new C.fJC())},
hKq(d){var w
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
hKp(d){var w
switch(d.a){case 0:w=D.alU
break
case 1:w=A.yx
break
case 2:w=A.amY
break
case 3:w=K.alw
break
case 4:w=A.amp
break
case 5:w=A.m_
break
default:w=null}return w},
hXm(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Qc[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Qc[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hKr(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.S.ao(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ias(d,e,f,g,h){var w=new B.M(D.wf,new C.fJu(),x.eC).aG(0,", "),v=""+d,u=C.hqW(h),t=F.fDe(h),s=C.hn6(g),r=e.t(0,D.Id)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Ie)?'- New slides get an "icon3d" from: '+A.d.aG(D.Qc,", ")+".\n":"",p=e.t(0,D.D0)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iat(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wf,new C.fJx(),x.eC).aG(0,", "),p=new B.ff("")
if(e.t(0,D.Id)){p.a=s
w=s}else w=""
if(e.t(0,D.Ie))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Qc,", ")+".\n")
if(e.t(0,D.D0))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hqW(d)
v=F.fDe(d)
u=C.hn6(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahf(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D8(a3,"{"),a5=J.fVv(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lq(a3,a4,a5+1)
try{w=A.S.aL(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fHu(),m).c0(0,new C.fHv())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.v(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.v(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.v(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.v(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.v(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hXm(B.v(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.v(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.v(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a84(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.v(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.v(q==null?J.fs(u).b:q))
p=A.d.b4(D.wf,new C.fHw(r))?r:a7
o=C.fow(J.q(w,"logo_frame"),D.Co)
n=C.fow(J.q(w,"logo_ring"),D.Cj)
m=C.fow(J.q(w,"photo_frame"),D.Co)
l=C.fow(J.q(w,"photo_ring"),D.Cj)
return new C.arh(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1G(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hq2(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.D1),f7=f6?C.hR5():e4,f8=f7==null
if(f8)w=e4
else{v=new B.ez()
v.dl(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.fp(t,v)
s=u.c
s=new C.nO("luxe",u.a,A.m_,t,u.e,u.f,B.a([s,u.d,s],x.t),D.df)
w=s}if(w==null)w=C.iaw(f9.b)
r=g2.t(0,D.a5z)||f6
q=g2.t(0,D.Id)
p=g2.t(0,D.Se)
o=new C.fBU()
n=B.a([],x.g)
m=new C.fBX(o,w,r)
l=new C.fBW(o,r)
k=new C.fBV(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b4(u,new C.fBT(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cYh[b8]
c0=D.cXe[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eU7.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mN,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qp,500,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Sb
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lb,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bh,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CZ
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mN,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qp,500,f2,f0))
d3=D.mM
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bh,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uy:D.cn
c1.push(new C.eM(b4,D.a5x,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bo,A.aD,4279310375,A.bi,e4,D.bh,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mM
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mN,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qp,450,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Sb
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ib,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mM}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.df,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hSJ(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dn_[A.o.E(b1,6)]:s
n.push(new C.lI(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BO(e4,e4,e4,e4,D.CY,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fEh(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fEh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.D0)
n=e.t(0,D.Ie)
if(!o&&!n){u=D.a4w
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fEk(o,s[r],n,$.hW5,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fEh)
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
return B.i($async$fEh,v)},
fDh(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fDh=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iat(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNs(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fDh)
case 3:u=s.aNO(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDh,v)},
bCe(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bCe=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.iau(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahf(i,"colorful")
t=C.ias(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNs(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hG),$async$bCe)
case 3:u=o.aNO(m,f,h,g,D.e0M,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCe,v)},
aNs(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNs=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vp(null,""),$async$aNs)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n7(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qV(t,d,g,"slides",null),$async$aNs)
case 7:q=i
p=q.b
if(p!=null){o=C.ahf(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L6(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNs,v)},
aNO(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNO=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.D0)||e.t(0,D.Ie)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dd(e,x.Q)
t.W(0,D.D0)}w=6
return B.b(C.fEh(d,t),$async$aNO)
case 6:s=k
w=4
break
case 5:s=D.a4w
case 4:t=d.c
w=A.d.b4(t,new C.fht())?7:9
break
case 7:r=$.hrO
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dT(r,x.aP),$async$aNO)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hq2(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hKr(new C.arh(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("M<1,m>")
t=B.C(new B.M(m,new C.fhu(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jV<co.E,m>")
t=B.C(new B.jV(e,new C.fhv(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Se)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNO,v)},
h56(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a3i[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
iex(d){return B.bT(A.K,null,new C.fSB(),d,!0,!0,!0,null,!1,!1,x.I)},
hRI(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cL.gcu().aK(d)},
iew(d,e,f){return B.bT(A.K,null,new C.fSA(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h57(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h58(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fow(d,e){var w=A.a.i(B.v(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fox(w))?w:""},
hn6(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hrM(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahf(a1==null?"":a1,a0),a3=C.ahf(a5,a0)
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
for(v=t.length,r=a4.r,q=B.S(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.rj(new B.a_(r,new C.fJD(t[p]),q))
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
g=B.C(new B.a_(k,new C.fJE(),v),r)
A.d.b_(g,new C.fJF())
if(g.length===0)continue
f=new C.fJG(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iaN(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aH_
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e2H
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e2I
return null},
hmI(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bk(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dh(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iax(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oj
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cS)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hmI(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hmI(n,i,v,u))if(n.w>10){f=h+1
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
iav(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahf(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3i[r]
if(q.b===s)w.L(0,q)}}v=C.h57(e)
u=C.h58(e)
p=C.hq2(n,D.a4w,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fJz(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jV<co.E,m>")
o=B.C(new B.jV(w,new C.fJA(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Se)
return p},
iej(d,e,f){return B.bT(A.K,null,new C.fRO(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hR5(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.ez()
s.dl(t)
w=D.cC9[s.aw(10)]
v=new C.egY(s)
u=x.N
return new C.egX(w,s.aw(4),J.fs(v.$1$2(D.d1Q,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.din,2+s.aw(2),u),v.$1$2(D.dbf,2,u),v.$1$2(D.dlt,4,x.fP),t)},
hSJ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.ez()
a1.dl(a5.w+a3*13)
w=new C.fdV(a4)
v=new C.fdX(a4,d)
u=new C.fdW(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cS){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aY(A.o.fY(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aY(A.o.fY(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eN,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1G(a0,52),"lux_spot",a5.wB(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bh,0,0,1,1,0,"lux_back",a5.wB(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bh,0,0,1,1,0,"lux_back2",a5.aF6(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.022,0.038,0.956,0.924,0,g,a5.wB(0,f),D.df,150,C.a1G(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.018,0.032,0.964,0.936,0,g,a5.wB(0,f),D.df,120,C.a1G(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.df,260,C.a1G(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bh,0,0,1,1,0,"lux_filigree",a5.wB(0,"filigree"),D.df,200))
break
default:a2.push(w.$10$anim$delay(D.bh,0.08,0.06,0.84,0.004,C.a1G(a0,208),"lux_rule",a5.aF6(0,"shimmer",r),D.ux,150))
a2.push(w.$10$anim$delay(D.bh,0.08,0.936,0.84,0.004,C.a1G(a0,144),"lux_rule2","",D.Ib,220))}l=!A.d.b4(a2,new C.fdU())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wB(0,"crest"),350))
else{o=a1.hi()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wB(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1G(r,242)
j=a5.wB(0,"orbit")
i=s===D.bh?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qp,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1G(r,242),"lux_g2",a5.wB(0,"orbit"),D.qp,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bh,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aY(A.o.fY(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bh,0,0,1,1,0,"lux_velvet",a5.wB(0,"velvet")))},
nO:function nO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fJB:function fJB(d){this.a=d},
fJC:function fJC(){},
w5:function w5(d,e){this.a=d
this.b=e},
a84:function a84(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
arh:function arh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fJu:function fJu(){},
fJx:function fJx(){},
fHu:function fHu(){},
fHv:function fHv(){},
fHw:function fHw(d){this.a=d},
fBU:function fBU(){},
fBX:function fBX(d,e,f){this.a=d
this.b=e
this.c=f},
fBW:function fBW(d,e){this.a=d
this.b=e},
fBV:function fBV(d,e){this.a=d
this.b=e},
fBT:function fBT(d){this.a=d},
fEk:function fEk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEi:function fEi(d){this.a=d},
fEj:function fEj(d){this.a=d},
fht:function fht(){},
fhu:function fhu(){},
fhv:function fhv(){},
fSB:function fSB(){},
a0s:function a0s(d){this.a=d},
aHq:function aHq(d,e,f,g,h){var _=this
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
f0S:function f0S(d,e,f){this.a=d
this.b=e
this.c=f},
f0T:function f0T(d,e){this.a=d
this.b=e},
f0Q:function f0Q(d,e){this.a=d
this.b=e},
f0R:function f0R(d,e){this.a=d
this.b=e},
f0P:function f0P(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f0K:function f0K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f0O:function f0O(d,e){this.a=d
this.b=e},
f0J:function f0J(d,e){this.a=d
this.b=e},
f0N:function f0N(d,e){this.a=d
this.b=e},
f0I:function f0I(d,e){this.a=d
this.b=e},
f0L:function f0L(d){this.a=d},
f0M:function f0M(d,e){this.a=d
this.b=e},
f0y:function f0y(d,e){this.a=d
this.b=e},
f0z:function f0z(d,e){this.a=d
this.b=e},
f0B:function f0B(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0F:function f0F(d,e){this.a=d
this.b=e},
f15:function f15(d){this.a=d},
f16:function f16(d){this.a=d},
f14:function f14(d){this.a=d},
f17:function f17(d){this.a=d},
f13:function f13(d){this.a=d},
f19:function f19(d){this.a=d},
f12:function f12(d,e){this.a=d
this.b=e},
f1a:function f1a(d){this.a=d},
f11:function f11(d,e){this.a=d
this.b=e},
f1b:function f1b(d){this.a=d},
f10:function f10(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1_:function f1_(d,e){this.a=d
this.b=e},
f1d:function f1d(d){this.a=d},
f0Z:function f0Z(d,e){this.a=d
this.b=e},
f1e:function f1e(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f1f:function f1f(d,e){this.a=d
this.b=e},
f0X:function f0X(d,e){this.a=d
this.b=e},
f1g:function f1g(d){this.a=d},
f18:function f18(d){this.a=d},
f0W:function f0W(d,e){this.a=d
this.b=e},
f0G:function f0G(d,e,f){this.a=d
this.b=e
this.c=f},
f0H:function f0H(d,e,f){this.a=d
this.b=e
this.c=f},
f0V:function f0V(d,e){this.a=d
this.b=e},
f0U:function f0U(d,e){this.a=d
this.b=e},
fSA:function fSA(d,e){this.a=d
this.b=e},
a0r:function a0r(d,e,f){this.c=d
this.d=e
this.a=f},
aHp:function aHp(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f0r:function f0r(d){this.a=d},
f0s:function f0s(d){this.a=d},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0u:function f0u(d){this.a=d},
f0v:function f0v(d){this.a=d},
f0q:function f0q(d,e){this.a=d
this.b=e},
f0w:function f0w(d,e){this.a=d
this.b=e},
f0x:function f0x(d,e){this.a=d
this.b=e},
fox:function fox(d){this.a=d},
b1g:function b1g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDY:function aDY(d,e,f){this.c=d
this.d=e
this.a=f},
bkd:function bkd(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
eh_:function eh_(d){this.a=d},
egZ:function egZ(){},
bhL:function bhL(d,e){this.b=d
this.a=e},
fJD:function fJD(d){this.a=d},
fJE:function fJE(){},
fJF:function fJF(){},
fJG:function fJG(d){this.a=d},
arP:function arP(d,e){this.a=d
this.b=e},
fJz:function fJz(){},
fJA:function fJA(){},
fRO:function fRO(d,e){this.a=d
this.b=e},
ZO:function ZO(d,e,f){this.c=d
this.d=e
this.a=f},
aBq:function aBq(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dki:function dki(d){this.a=d},
dkj:function dkj(d){this.a=d},
dkk:function dkk(d,e){this.a=d
this.b=e},
dkn:function dkn(d){this.a=d},
dko:function dko(d,e){this.a=d
this.b=e},
dkm:function dkm(d,e){this.a=d
this.b=e},
dkp:function dkp(d){this.a=d},
dkl:function dkl(d,e){this.a=d
this.b=e},
bsI:function bsI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
egX:function egX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
egY:function egY(d){this.a=d},
fdV:function fdV(d){this.a=d},
fdX:function fdX(d,e){this.a=d
this.b=e},
fdW:function fdW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdU:function fdU(){},
aLZ:function aLZ(){},
h3W(d){var w,v,u
try{w=A.S.aL(0,d,null)
if(x.f.b(w)){v=B.vY(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b1c:function b1c(d,e,f){this.c=d
this.d=e
this.a=f},
blR:function blR(d,e){this.c=d
this.a=e},
i6R(d){return A.d.dN(D.Hf,new C.fD0(d),new C.fD1())},
i6S(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b6(t,6)
if(w.length===0)return null
v=new B.a_(D.Hf,new C.fD2(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jH("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lg:function lg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fD0:function fD0(d){this.a=d},
fD1:function fD1(){},
fD2:function fD2(d){this.a=d},
mW(d,e,f,g,h){return new C.EK(f,g,d)},
hTS(d){var w=d.z,v=B.S(w).k("a_<1>")
w=B.C(new B.a_(w,new C.ffV(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Ku
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a7,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.f5,j,k,l)},
hpQ(d,e){var w
C.hTS(d)
w=A.d.dN($.bEf(),new C.fAR(e),new C.fAS())
$.Ku=w.a
d.x=w.a;++d.y
try{w.bB(d)}finally{$.Ku=""}d.z=B.bp(d.z,!0,x.F)},
EK:function EK(d,e,f){this.a=d
this.b=e
this.e=f},
ffV:function ffV(){},
fJ5:function fJ5(){},
fJ6:function fJ6(){},
fJ7:function fJ7(){},
fJi:function fJi(){},
fJn:function fJn(){},
fJo:function fJo(){},
fJp:function fJp(){},
fJq:function fJq(){},
fJr:function fJr(){},
fJs:function fJs(){},
fJt:function fJt(){},
fJ8:function fJ8(){},
fJ9:function fJ9(){},
fJa:function fJa(){},
fJb:function fJb(){},
fJc:function fJc(){},
fJd:function fJd(){},
fJe:function fJe(){},
fJf:function fJf(){},
fJg:function fJg(){},
fJh:function fJh(){},
fJj:function fJj(){},
fJk:function fJk(){},
fJl:function fJl(){},
fJm:function fJm(){},
fAR:function fAR(d){this.a=d},
fAS:function fAS(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bh,4280172719,2,m,n,0,"",o,D.cS,p,q,r)},
D1(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.f5,j,k,l)},
bCY(){var w=new B.T(Date.now(),0,!1)
return A.it[B.bH(w)-1]+" "+B.bV(w)+", "+B.bA(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bAn(d){return new B.iS((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
hZ0(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amW(A.cG.aK(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hZ4(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fo4(),x.dv).aG(0,"\n")},
hZ3(d){switch(d.a){case 2:return A.nB
case 1:case 5:return A.f4a
default:return A.TG}},
hYY(d){switch(d.a){case 2:return A.v7
case 1:case 5:return A.Vt
default:return A.aaD}},
hZ1(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bAn(u),q=(s&255)===0?v:C.bAn(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nx(q,p,A.kQ)
w=new B.pD(t,t,t,t)}switch(d.ax.a){case 1:return B.lx(v,v,v,new B.kF(r,w,v,A.abU,v),v,v,v,v)
case 4:return u?new B.fU(v,v,v):B.x8(B.lx(v,v,q,v,p+0.4,v,v,v))
default:return B.lx(v,v,v,new B.kF(r,w,B.vy(4),A.hL,v),v,v,v,v)}},
hZ_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f5?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hYY(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hZ4(d)
t=C.bAn(d.Q)
s=d.x.a>=700?A.en:A.vK
r=d.y===A.cF?A.ya:A.akk
q=d.z
p=new B.Db(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aQ3:A.aQ2,l,l,l,l,l,l,A.du,l,l,v,r,s,l,!0,l,l,l,l),C.hZ3(d.as)))
break
case 1:case 4:o=C.hZ0(d.at)
n=i===D.lB&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x8(B.fc(w,l,l,l,B.ha(l,A.rK,l,l,l,l,l,l,l,A.du,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HW(o,n?A.abQ:A.VQ,l,l)
break
case 3:w=new B.nx(A.Iv,1,A.kQ)
u=B.vy(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lx(A.v7,B.fc(t,l,l,l,B.ha(l,D.efp,l,l,l,l,l,l,l,A.du,l,l,11,l,A.en,l,!0,l,l,l,l),A.nB),l,new B.kF(E.aIi,new B.pD(w,w,w,w),u,A.hL,l),l,l,l,l)
break
case 2:p=C.hZ1(d,e)
break
case 5:p=C.hYZ(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hht(-w,p)
w=i===D.cS
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.asA(m/255,p)}if(w)return new F.wb(k,l,j,l,new B.Sd(new B.kE(g,g,f,1/0),p))
if(i===D.la){i=new B.nx(A.Iv,1,A.kQ)
i=B.lx(A.v7,p,l,new B.kF(A.pe,new B.pD(i,i,i,i),B.vy(4),A.hL,l),l,l,D.by2,l)}else i=p
return new F.wb(k,l,j,l,new B.fU(g,f,i))},
hZ2(d,e,f,g){var w,v=null,u=C.bAn(d.e),t=d.f
t=B.a([F.hg5(t!=null?B.lx(v,v,v,new B.kF(v,v,v,A.hL,new B.aWJ(E.Vu,A.aax,B.a([u,C.bAn(t)],x.cR),v)),v,v,v,v):B.lx(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fo3(f,g),B.S(w).k("M<1,fg>")))
return F.csG(t)},
h5a(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h5a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4k(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.WA(A.wr,A.Is,D.bz9,null,null,null,!1,null)
o=new B.BU(o,new C.fJM(607,787,p,d))
o.ML(n,null)
r.push(o)}u=n.ke(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5a,v)},
hYZ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h3W(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajP()
if(h==null)h=A.axQ
j=B.tD(4279308564)
w=B.vy(18)
v=new B.nx(B.tD(4287531653),3,A.kQ)
u=i.length===0?"My links":i
u=B.a([B.x8(B.fc(u,m,m,m,B.ha(m,A.pe,m,m,m,m,m,m,m,A.du,m,m,12,m,A.en,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x8(B.fc(A.a.i(l.c),m,m,m,D.fbp,m)))
u.push(new B.fU(m,8,m))
for(t=B.d9(h,0,B.dG(8,"count",x.S),B.S(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tD(4280690220)
o=new B.a9q(8,8)
n=A.a.i(r.b)
u.push(new B.nP(D.bsi,new C.awN(new C.aik(q),B.lx(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fdJ,A.nB),m,new B.kF(p,m,new B.aiL(o,o,o,o),A.hL,m),m,m,D.bys,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x8(B.fc(k,m,m,m,D.fcY,m))
u.push(new C.awN(C.hyx(k),t))}return B.lx(m,B.yZ(u,A.M5,A.lz),m,new B.kF(j,new B.pD(v,v,v,v),w,A.hL,m),m,m,D.bt8,m)},
fo4:function fo4(){},
fo3:function fo3(d,e){this.a=d
this.b=e},
fJM:function fJM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ah2(d){var w,v
for(w=0;w<32;++w){v=D.H6[w]
if(v.a===d)return v}return null},
hk8(d){var w,v,u=A.a.cH(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aK(A.a.b6(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
ht_(d,e){return B.a5(d,!1).cm(B.ea(new C.fQd(e),!0,null,x.fB))},
hsZ(d,e){return B.bT(A.K,null,new C.fQc(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j1:function j1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
EB:function EB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nw:function Nw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjA:function bjA(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dVI:function dVI(d){this.a=d},
dVH:function dVH(d,e,f){this.a=d
this.b=e
this.c=f},
dVG:function dVG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brg:function brg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_F:function f_F(d,e){this.a=d
this.b=e},
beE:function beE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_7:function b_7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9Z:function c9Z(){},
ca_:function ca_(d){this.a=d},
ca0:function ca0(d,e,f){this.a=d
this.b=e
this.c=f},
ca1:function ca1(d,e,f){this.a=d
this.b=e
this.c=f},
fQd:function fQd(d){this.a=d},
Zm:function Zm(d,e){this.c=d
this.a=e},
azO:function azO(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d9u:function d9u(d,e,f){this.a=d
this.b=e
this.c=f},
d9z:function d9z(d){this.a=d},
d9A:function d9A(d){this.a=d},
d9y:function d9y(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9x:function d9x(d,e){this.a=d
this.b=e},
d9C:function d9C(d){this.a=d},
d9w:function d9w(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9v:function d9v(d,e){this.a=d
this.b=e},
d9E:function d9E(d,e){this.a=d
this.b=e},
fQc:function fQc(d){this.a=d},
fQb:function fQb(d){this.a=d},
fQa:function fQa(d,e,f){this.a=d
this.b=e
this.c=f},
fQ9:function fQ9(d,e){this.a=d
this.b=e},
aLs:function aLs(){},
iev(d){return B.bT(A.K,null,new C.fSz(),d,!0,!0,!0,null,!1,!1,x.N)},
fSz:function fSz(){},
ZH:function ZH(d){this.a=d},
bg7:function bg7(d){this.d=d
this.c=this.a=null},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgj:function dgj(d){this.a=d},
hVo(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xC},
i8M(d){var w,v=A.d.gI(d.split("@"))
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
i8L(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hVo(d)
switch(q){case"shimmer":return B.nT(A.ab_,g,new C.fGs(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bfv(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dX(B.ef(A.A,B.de(C.fWU(g,B.a5a(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bfc(e,p,r),A.ax),!0,r)],x.p),r)
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
return B.dX(B.fw(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.Z,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.bo6(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.Z,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.ba6(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.Z,r,A.b2,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9K(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bv3(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bs3(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brc(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.Z,r,A.b2,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bex(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bW(0,B.e1(B.ef(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bS(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eJ(A.A,s*0.06,B.ef(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fGs:function fGs(d,e){this.a=d
this.b=e},
bfv:function bfv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfc:function bfc(d,e,f){this.b=d
this.c=e
this.a=f},
bo6:function bo6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ba6:function ba6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9K:function b9K(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bv3:function bv3(d,e,f){this.b=d
this.c=e
this.a=f},
bs3:function bs3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brc:function brc(d,e,f){this.b=d
this.c=e
this.a=f},
bex:function bex(d,e,f){this.b=d
this.d=e
this.a=f},
d9b:function d9b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xG:function xG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fGv(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.la},
i8R(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fGw())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQn(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i8Q(d,e){var w,v,u,t,s,r=d.db
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
agH(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agH=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fyU(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dH,null,new C.fyV(e),d,!0,!0,!1,A.lC,!1,!1,x.N),$async$agH)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h5O(d),$async$agH)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lh(d,"Search states\u2026","",A.kc,"Choose state"),$async$agH)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h4I(s)
if(p==null)p=A.d.gI(D.R3)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fGx(p.d)
k=x.u
j=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a7,"",1,C.cC(),l,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lB,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CP(i,0.016,D.lb,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CP(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CP(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KF("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KF("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h1y(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzQ("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1h("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1h("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1h("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1h("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzQ("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CP(m,0.082,D.bh,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.er(A.bi,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bo,A.cx,"",0.074,g,null,"","",0,!1,"",0,D.bh,4280172719,2,y.O,0,0,"",D.cn,D.cS,0.78,0.11,0.388))
A.d.v(k,C.h1y(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzQ("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hm7("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hm7("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1h("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1h("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzP("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzP("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzQ("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KF("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KF("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzP("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzP("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzQ("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1h("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzP("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1h("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h1y(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KF("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KF("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BO(null,null,null,null,D.oj,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rz(m,null,0,0,j,n,D.qo,"","","Hati ya Ndoa",D.df)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agH,v)},
fGw:function fGw(){},
fyU:function fyU(){},
fyV:function fyV(d){this.a=d},
fyS:function fyS(d){this.a=d},
fyT:function fyT(d){this.a=d},
hYr(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hYq(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mR
case"lineThrough":return A.zQ
default:return A.aD}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eM(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hob(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QO[w]
if(v.b===u)return v}return D.df},
hUN(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cU3[w]
if(v.b===u)return v}return D.cS},
i0h(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dj2[w]
if(v.b===u)return v}return D.bh},
rz(d,e,f,g,h,i,j,k,l,m,n){return new C.lI(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
heR(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hWN(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hob(d.h(0,"transition"))
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
n=B.cD(n,new C.cfo(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rz(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hWN(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apC[w]
if(v.b===u)return v}return D.mM},
BO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.T(Date.now(),0,!1):a4
return new C.i5(p,t,a1,h,i,w,a0==null?B.a([C.rz(4294967295,null,0,0,null,C.cC(),D.qo,"","","",D.df)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
W0(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hSZ(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bj(J.k(s==null?"":s))
if(s==null)s=new B.T(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kA(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kA(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cfb(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cfc(),x.N)
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
g=B.cD(g,new C.cfd(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.BO(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rz(4294967295,a3,0,0,a3,C.cC(),D.qo,"","","",D.df)],x.g):g,v,p,o,s)},
kA(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hSZ(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.djW[w]
if(v.b===u)return v}return D.CY},
cC(){var w=Date.now(),v=$.j2
$.j2=v+1
return""+1000*w+"_"+v},
cfF(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CZ){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cn,D.cS,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.12,u,p,"","",0,!1,"",0,D.bh,m,2,"Click to add subtitle",0,0,"",D.cn,D.cS,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cn,D.cS,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.er(A.bi,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.68,u,p,"","",0,!1,"",0,D.bh,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.cS,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Two Column Slide",0,0,"",D.cn,D.cS,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bh,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.cS,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bh,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.cS,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.er(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.bh,m,2,"Section Header",0,0,"",D.cn,D.cS,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Compare",0,0,"",D.cn,D.cS,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.er(A.bi,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bh,t.l(),2,"",0,0,"",D.cn,D.f5,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bh,m,2,"Option A",0,0,"",D.cn,D.cS,0.38,0.08,0.26)
q=C.cC()
t=C.er(A.bi,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bh,t.j(0.5).l(),2,"",0,0,"",D.cn,D.f5,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bh,m,2,"Option B",0,0,"",D.cn,D.cS,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bh,m,2,"TERM / QUESTION",0,0,"",D.cn,D.cS,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cx,"",0.35,u,p,"","",0,!1,"",0,D.bh,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.cS,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bh,m,2,"Quiz Question",0,0,"",D.cn,D.cS,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bh,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.cS,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bh,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.cS,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bh,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.cS,0.88,0.06,0.16)],x.u))
break}},
hKB(d){return A.d.dN(D.a2W,new C.cfG(d),new C.cfH())},
hKy(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.cf(v,C.W0(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fZ0(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cfB(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b_(u,new C.cfA())
return u},
heU(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cfw()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
ari(d){return C.hKw(d)},
hKw(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$ari=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cfz()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2t(m),$async$ari)
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
return B.b(B.ay(),$async$ari)
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
case 11:o=l.$1($.heT.h(0,m))
n=C.fZ0(C.fZ0(j,r),o)
if(n.length===0){u=C.heU(C.heU(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ari,v)},
cfv(d){return C.hKv(d)},
hKv(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cfv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$cfv)
case 7:r=f
q=r.th("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kI(q,B.S(q).c)
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
return B.i($async$cfv,v)},
b1i(d,e){return C.hKx(d,e)},
hKx(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1i=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b1i)
case 6:s=g
q=s.th("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lp(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b1i)
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
return B.i($async$b1i,v)},
W1(d,e){return C.hKz(d,e)},
hKz(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$W1=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.heS.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.ari(a3),$async$W1)
case 5:p=a6
case 4:w=6
return B.b(C.cfv(a3),$async$W1)
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
e=B.C(new B.a_(new B.bc(n,m),new C.cfC(o),l),l.k("J.E"))
A.d.b_(e,new C.cfD())
$.heS.n(0,a0,e)
n=B.S(e).k("M<1,a6<m,@>>")
n=B.C(new B.M(e,new C.cfE(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.heT.n(0,a0,r)
t=8
w=11
return B.b(B.ahu(a0,r),$async$W1)
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
return B.b(B.ay(),$async$W1)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$W1)
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
return B.i($async$W1,v)},
IQ:function IQ(d,e){this.a=d
this.b=e},
arg:function arg(d,e){this.a=d
this.b=e},
uO:function uO(d,e){this.a=d
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
lI:function lI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cfp:function cfp(){},
cfq:function cfq(){},
cfo:function cfo(){},
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
cfe:function cfe(){},
cff:function cff(){},
cfb:function cfb(){},
cfc:function cfc(){},
cfd:function cfd(){},
jH:function jH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cfG:function cfG(d){this.a=d},
cfH:function cfH(){},
cfB:function cfB(d){this.a=d},
cfA:function cfA(){},
cfw:function cfw(){},
cfx:function cfx(){},
cfy:function cfy(){},
cfz:function cfz(){},
cfC:function cfC(d){this.a=d},
cfD:function cfD(){},
cfE:function cfE(){},
i91(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fH4(e,v,d,B.aX(w))
w.$1(new C.fH0())
w.$1(new C.fH1())
w.$1(new C.fH2())
w.$1(new C.fH3())
return v},
fH4:function fH4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH0:function fH0(){},
fH1:function fH1(){},
fH2:function fH2(){},
fH3:function fH3(){},
b1f:function b1f(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfk:function cfk(d){this.a=d},
cfj:function cfj(){},
cfl:function cfl(){},
cfm:function cfm(d,e){this.a=d
this.b=e},
cfn:function cfn(d){this.a=d},
aor:function aor(d,e){this.c=d
this.a=e},
bjk:function bjk(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dHW:function dHW(){},
aLd:function aLd(){},
cfs(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cfs=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f1m)
u=!1
w=1
break}u=B.kY(!1,d,t,!1,null,A.a5B,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfs,v)},
hKt(d){var w=A.d.bg(D.Hf,new C.cft(d))
if(w<0)return!0
return w>=4},
hKu(d){var w=A.d.bg($.bEf(),new C.cfu(d))
if(w<0)return!0
return w>=5},
cft:function cft(d){this.a=d},
cfu:function cfu(d){this.a=d},
iaH(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yO()
$.qi().pY(t,new C.fJT(s),!0)
u=B.a([B.DV(v,A.qs,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fbT,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nm,v,v,v),v,v,4,v,4,v))}return new B.an(A.Z,v,A.b2,A.r,u,v)},
fJT:function fJT(d){this.a=d},
iai(){return C.h53()},
i7f(){return C.bCb()},
i9i(){return C.h4V()},
aPu(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fIZ(d,f),$async$aPu)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPu,v)},
fIZ(d,e){var w=0,v=B.j(x.H),u
var $async$fIZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bAo
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.K,null,new C.fJ_(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fIZ)
case 2:return B.h(null,v)}})
return B.i($async$fIZ,v)},
fJ_:function fJ_(d,e){this.a=d
this.b=e},
adt:function adt(d,e,f){this.c=d
this.d=e
this.a=f},
etr:function etr(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
adL:function adL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b1e(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b1d(g,m,f,d,e,h,l,k,j,o,i,null)},
hra(d){return B.cq(new C.fH_(d))},
h55(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
iaq(d){if(d===D.cn)return"None"
return C.h55(d)},
bAU(d,e,f,g){return C.i0o(d,e,f,g)},
i0o(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.h1R&&t.pC())t.eF()
$.h1R=!0
s.a=null
w=3
return B.b(B.hZ(A.bk,!0,"Animation preview",d,new C.fqD(s,e,g,f),null,A.eJ,!0,x.H),$async$bAU)
case 3:s=s.a
if(s!=null)s.a7(0)
$.h1R=!1
case 1:return B.h(u,v)}})
return B.i($async$bAU,v)},
fTn(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fTn=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bY,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h55(f)+" Slide transition preview"
s=s?Ae.Fy:A.vx
w=3
return B.b(C.bAU(d,s,new B.a7(t,t*0.56,B.by(B.n(14),new C.aIP(f,null),A.aq),null),r),$async$fTn)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fTn,v)},
hqs(d,e,f){var w,v,u=null,t=A.cu.az(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.de(f,t)
case 2:case 17:return B.dX(B.de(f,t),new B.u((1-t)*48,0))
case 3:return B.dX(B.de(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dX(B.de(f,t),new B.u(0,(1-t)*36))
case 5:return B.dX(B.de(f,t),new B.u(0,-(1-t)*36))
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
w.jS(v,v,v,1)
return B.fw(A.A,B.de(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dX(B.de(f,t),new B.u((1-t)*24,0))}},
bDK(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bY,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h55(f)+" Element animation preview"
s=s?Ae.Fy:A.vx
w=3
return B.b(C.bAU(d,s,new B.a7(t,t*0.62,B.by(B.n(14),new C.azy(f,null),A.aq),null),r),$async$bDK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDK,v)},
iap(d){var w,v,u,t,s=$.ag8.W(0,d)
if(s!=null){$.ag8.n(0,d,s)
return s}w=A.cG.aK(A.a.b6(d,A.a.cH(d,",")+1))
$.ag8.n(0,d,w)
v=$.h2F=$.h2F+w.length
u=B.a3($.ag8).k("cu<1>")
for(;;){if(!(v>41943040&&$.ag8.a>1))break
t=new B.cu($.ag8,u).gaf(0)
if(!t.C())B.b8(B.fu())
v-=$.ag8.W(0,t.gR(0)).length
$.h2F=v}return w},
ia6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l3(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.et(n,l,l,A.cP,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SM(s,A.u))
v.push(new B.et(n,l,l,A.cP,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SM(t,A.u))
v.push(new B.et(n,l,l,A.cP,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SM(u,A.cx))
v.push(new B.et(n,l,l,A.cP,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b6(d,r)
v.push(B.cX(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2s(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.jS(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdt()*0.18
m.F(new B.iN(B.bu(e,new B.aR(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbO().a,e.b))
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
m.F(new B.b5(e.gbO().a,e.b))
m.F(new B.ap(e.c,e.gbO().b))
m.F(new B.ap(e.gbO().a,e.d))
m.F(new B.ap(e.a,e.gbO().b))
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
m.bat(new B.u(t,p),new B.aR(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o9(e))
return m}},
fEz(d,e,f){return B.cq(new C.fEA(D.eUG.t(0,d),d,f,e))},
b1d:function b1d(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cfi:function cfi(d){this.a=d},
cfh:function cfh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfg:function cfg(){},
b1a:function b1a(d,e){this.b=d
this.a=e},
fH_:function fH_(d){this.a=d},
fGZ:function fGZ(d,e){this.a=d
this.b=e},
fqD:function fqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqB:function fqB(d){this.a=d},
fqC:function fqC(d,e){this.a=d
this.b=e},
aIP:function aIP(d,e){this.c=d
this.a=e},
buA:function buA(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
f8c:function f8c(d,e,f){this.a=d
this.b=e
this.c=f},
aJr:function aJr(d,e){this.b=d
this.a=e},
V2:function V2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjx:function bjx(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dTV:function dTV(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTT:function dTT(d){this.a=d},
IP:function IP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfa:function cfa(d){this.a=d},
cf9:function cf9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azy:function azy(d,e){this.c=d
this.a=e},
be0:function be0(){this.d=0
this.c=this.a=null},
d6q:function d6q(d){this.a=d},
d6p:function d6p(d){this.a=d},
a7N:function a7N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkb:function bkb(d,e){var _=this
_.d=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
egG:function egG(d,e,f){this.a=d
this.b=e
this.c=f},
b_a:function b_a(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bfa:function bfa(d,e,f){this.b=d
this.c=e
this.a=f},
bq9:function bq9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eYi:function eYi(){},
fEA:function fEA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
br9:function br9(d,e,f){this.b=d
this.c=e
this.a=f},
aLr:function aLr(){},
aLX:function aLX(){},
aNj:function aNj(){},
fI_(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fI_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xi.c7().M6(D.dh5,A.tY,!0),$async$fI_)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.ia0(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fI_,v)},
ia0(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a85(d,new B.a04(A.cL.gcu().aK(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i21(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a85(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.ch.KT(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a85(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i21(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cyq().cL5(B.ri(d,A.i3,o,o),o,o,!1).cMP(0,"word/document.xml")
if(n==null)return""
w=n.cUR()
v=A.ch.KT(0,w==null?$.htv():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l3(0,r)
p=A.a.i(B.cD(q,new C.ftA(),B.a3(q).k("J.E"),t).h3(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a85:function a85(d,e,f){this.a=d
this.b=e
this.c=f},
ftA:function ftA(){},
hKA(d,e,f,g,h,i,j,k,l){return new C.NY(l,e,d,g,f,i,h,j,k,null)},
NY:function NY(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEo:function aEo(d,e,f,g,h,i,j,k,l){var _=this
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
ezF:function ezF(d){this.a=d},
ezD:function ezD(){},
ezE:function ezE(d){this.a=d},
ew2:function ew2(){},
ew3:function ew3(){},
ew4:function ew4(d,e){this.a=d
this.b=e},
exD:function exD(d){this.a=d},
exr:function exr(){},
exs:function exs(){},
evq:function evq(){},
eyL:function eyL(d){this.a=d},
ezB:function ezB(d,e){this.a=d
this.b=e},
exB:function exB(d,e){this.a=d
this.b=e},
ezo:function ezo(d){this.a=d},
ezp:function ezp(){},
ezq:function ezq(){},
ezr:function ezr(d){this.a=d},
ezs:function ezs(){},
euP:function euP(d){this.a=d},
ezC:function ezC(){},
ewK:function ewK(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
euO:function euO(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d,e,f){this.a=d
this.b=e
this.c=f},
ex8:function ex8(d){this.a=d},
ewJ:function ewJ(){},
ewI:function ewI(d){this.a=d},
ewG:function ewG(){},
ewF:function ewF(d){this.a=d},
ewH:function ewH(){},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewR:function ewR(d,e){this.a=d
this.b=e},
euR:function euR(){},
euS:function euS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex1:function ex1(){},
ex2:function ex2(d,e){this.a=d
this.b=e},
ex_:function ex_(d,e,f){this.a=d
this.b=e
this.c=f},
ex0:function ex0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewU:function ewU(d,e,f){this.a=d
this.b=e
this.c=f},
ewV:function ewV(d,e,f){this.a=d
this.b=e
this.c=f},
ewW:function ewW(d){this.a=d},
ewX:function ewX(d,e){this.a=d
this.b=e},
ewY:function ewY(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
ewT:function ewT(d,e){this.a=d
this.b=e},
ex4:function ex4(d){this.a=d},
ex5:function ex5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ex3:function ex3(d){this.a=d},
exm:function exm(){},
exn:function exn(){},
exo:function exo(){},
exp:function exp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exj:function exj(d){this.a=d},
exl:function exl(){},
exk:function exk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
exh:function exh(d,e,f){this.a=d
this.b=e
this.c=f},
exi:function exi(d,e){this.a=d
this.b=e},
exq:function exq(){},
ewS:function ewS(d,e){this.a=d
this.b=e},
ev7:function ev7(){},
ev8:function ev8(d,e,f){this.a=d
this.b=e
this.c=f},
ev9:function ev9(d){this.a=d},
eva:function eva(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev6:function ev6(d){this.a=d},
exw:function exw(d){this.a=d},
exv:function exv(d,e){this.a=d
this.b=e},
exu:function exu(d,e){this.a=d
this.b=e},
ext:function ext(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exx:function exx(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev3:function ev3(d){this.a=d},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
ev_:function ev_(d,e){this.a=d
this.b=e},
euZ:function euZ(d){this.a=d},
exE:function exE(d,e,f){this.a=d
this.b=e
this.c=f},
euQ:function euQ(d){this.a=d},
evr:function evr(){},
ezm:function ezm(d,e){this.a=d
this.b=e},
ezn:function ezn(d,e,f){this.a=d
this.b=e
this.c=f},
eyM:function eyM(d,e,f){this.a=d
this.b=e
this.c=f},
etN:function etN(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etA:function etA(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev0:function ev0(d){this.a=d},
eue:function eue(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
euf:function euf(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
euh:function euh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eui:function eui(d){this.a=d},
eug:function eug(){},
eud:function eud(d,e,f){this.a=d
this.b=e
this.c=f},
exg:function exg(d,e){this.a=d
this.b=e},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d,e){this.a=d
this.b=e},
ezx:function ezx(d){this.a=d},
ezy:function ezy(d,e,f){this.a=d
this.b=e
this.c=f},
ezu:function ezu(d){this.a=d},
ez1:function ez1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ez0:function ez0(d,e,f){this.a=d
this.b=e
this.c=f},
ez_:function ez_(){},
eyZ:function eyZ(d,e,f){this.a=d
this.b=e
this.c=f},
eyY:function eyY(d,e){this.a=d
this.b=e},
eyV:function eyV(d,e,f){this.a=d
this.b=e
this.c=f},
eyT:function eyT(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyX:function eyX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eyW:function eyW(d){this.a=d},
evV:function evV(d,e){this.a=d
this.b=e},
evU:function evU(d,e){this.a=d
this.b=e},
eyN:function eyN(){},
ezl:function ezl(d,e){this.a=d
this.b=e},
ezj:function ezj(d){this.a=d},
ezk:function ezk(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etG:function etG(d,e){this.a=d
this.b=e},
etH:function etH(d,e,f){this.a=d
this.b=e
this.c=f},
etL:function etL(d,e){this.a=d
this.b=e},
etC:function etC(d,e,f){this.a=d
this.b=e
this.c=f},
etB:function etB(d){this.a=d},
exC:function exC(d,e,f){this.a=d
this.b=e
this.c=f},
ezt:function ezt(d,e,f){this.a=d
this.b=e
this.c=f},
evY:function evY(d,e,f){this.a=d
this.b=e
this.c=f},
evX:function evX(){},
eun:function eun(d,e,f){this.a=d
this.b=e
this.c=f},
euo:function euo(d){this.a=d},
etz:function etz(d,e){this.a=d
this.b=e},
evp:function evp(d,e){this.a=d
this.b=e},
etI:function etI(d,e){this.a=d
this.b=e},
etR:function etR(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
etP:function etP(d){this.a=d},
eu6:function eu6(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(){},
euc:function euc(){},
etU:function etU(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d,e){this.a=d
this.b=e},
evo:function evo(d,e,f){this.a=d
this.b=e
this.c=f},
evn:function evn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evm:function evm(d,e,f){this.a=d
this.b=e
this.c=f},
evl:function evl(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
euq:function euq(d){this.a=d},
eup:function eup(d,e){this.a=d
this.b=e},
eus:function eus(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(d,e){this.a=d
this.b=e},
ev4:function ev4(d){this.a=d},
exf:function exf(d,e){this.a=d
this.b=e},
exe:function exe(d,e){this.a=d
this.b=e},
exd:function exd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exb:function exb(d){this.a=d},
exc:function exc(d,e){this.a=d
this.b=e},
ex9:function ex9(){},
exa:function exa(){},
eyO:function eyO(){},
eyP:function eyP(d,e){this.a=d
this.b=e},
eyQ:function eyQ(){},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
euT:function euT(){},
euU:function euU(){},
euV:function euV(){},
euY:function euY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euX:function euX(d,e){this.a=d
this.b=e},
euW:function euW(d,e,f){this.a=d
this.b=e
this.c=f},
ewo:function ewo(d){this.a=d},
ewn:function ewn(){},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewm:function ewm(d){this.a=d},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewl:function ewl(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
ewk:function ewk(d){this.a=d},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewh:function ewh(d){this.a=d},
eww:function eww(d,e){this.a=d
this.b=e},
ewg:function ewg(d){this.a=d},
ew9:function ew9(d,e){this.a=d
this.b=e},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ew8:function ew8(d){this.a=d},
ewc:function ewc(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
ewe:function ewe(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
ewf:function ewf(d){this.a=d},
evh:function evh(d){this.a=d},
evi:function evi(d){this.a=d},
evk:function evk(d){this.a=d},
evc:function evc(d){this.a=d},
evb:function evb(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
eve:function eve(d){this.a=d},
evf:function evf(d){this.a=d},
evg:function evg(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ewz:function ewz(d,e){this.a=d
this.b=e},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
exY:function exY(d,e){this.a=d
this.b=e},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d){this.a=d},
eya:function eya(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d,e){this.a=d
this.b=e},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey7:function ey7(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey9:function ey9(d){this.a=d},
eyb:function eyb(d){this.a=d},
eyc:function eyc(d){this.a=d},
eyd:function eyd(d){this.a=d},
eye:function eye(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyj:function eyj(d){this.a=d},
exO:function exO(d){this.a=d},
eyk:function eyk(d){this.a=d},
exW:function exW(d){this.a=d},
eym:function eym(d){this.a=d},
exV:function exV(d,e){this.a=d
this.b=e},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyo:function eyo(d,e){this.a=d
this.b=e},
exU:function exU(d,e,f){this.a=d
this.b=e
this.c=f},
exK:function exK(d,e){this.a=d
this.b=e},
exX:function exX(d){this.a=d},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyK:function eyK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e,f){this.a=d
this.b=e
this.c=f},
exT:function exT(d,e,f){this.a=d
this.b=e
this.c=f},
exJ:function exJ(d,e,f){this.a=d
this.b=e
this.c=f},
exH:function exH(d,e){this.a=d
this.b=e},
eyq:function eyq(d,e){this.a=d
this.b=e},
exS:function exS(d,e){this.a=d
this.b=e},
exI:function exI(d,e){this.a=d
this.b=e},
exG:function exG(d,e){this.a=d
this.b=e},
eyr:function eyr(d){this.a=d},
exR:function exR(d){this.a=d},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyv:function eyv(d){this.a=d},
exQ:function exQ(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyz:function eyz(d,e){this.a=d
this.b=e},
exP:function exP(d){this.a=d},
eyA:function eyA(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
exM:function exM(d){this.a=d},
eyC:function eyC(d,e){this.a=d
this.b=e},
exL:function exL(d){this.a=d},
eum:function eum(d,e,f){this.a=d
this.b=e
this.c=f},
eul:function eul(d,e){this.a=d
this.b=e},
ez4:function ez4(d,e){this.a=d
this.b=e},
ez3:function ez3(d,e){this.a=d
this.b=e},
ez5:function ez5(d,e){this.a=d
this.b=e},
ez2:function ez2(d,e){this.a=d
this.b=e},
evu:function evu(d,e){this.a=d
this.b=e},
evt:function evt(d){this.a=d},
evv:function evv(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
ew1:function ew1(){},
ew0:function ew0(){},
ezh:function ezh(d){this.a=d},
ezg:function ezg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezf:function ezf(d,e){this.a=d
this.b=e},
eza:function eza(d,e){this.a=d
this.b=e},
eze:function eze(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezb:function ezb(d,e){this.a=d
this.b=e},
ez6:function ez6(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez8:function ez8(d){this.a=d},
ez9:function ez9(d){this.a=d},
ezc:function ezc(d,e){this.a=d
this.b=e},
ezd:function ezd(d,e){this.a=d
this.b=e},
ezi:function ezi(d){this.a=d},
euM:function euM(d){this.a=d},
euL:function euL(d,e,f){this.a=d
this.b=e
this.c=f},
euK:function euK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euz:function euz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
euA:function euA(d,e){this.a=d
this.b=e},
euB:function euB(d,e){this.a=d
this.b=e},
euC:function euC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euy:function euy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euD:function euD(d,e){this.a=d
this.b=e},
euF:function euF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euE:function euE(d,e){this.a=d
this.b=e},
euG:function euG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eux:function eux(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euH:function euH(d,e){this.a=d
this.b=e},
euw:function euw(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
euv:function euv(d){this.a=d},
euJ:function euJ(d,e){this.a=d
this.b=e},
ewD:function ewD(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewE:function ewE(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
evJ:function evJ(d,e){this.a=d
this.b=e},
evH:function evH(d,e){this.a=d
this.b=e},
evK:function evK(d,e){this.a=d
this.b=e},
evG:function evG(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
evF:function evF(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evE:function evE(d,e){this.a=d
this.b=e},
evN:function evN(d,e){this.a=d
this.b=e},
evD:function evD(d,e){this.a=d
this.b=e},
evO:function evO(d,e,f){this.a=d
this.b=e
this.c=f},
evC:function evC(d,e){this.a=d
this.b=e},
evP:function evP(d,e,f){this.a=d
this.b=e
this.c=f},
evB:function evB(d,e){this.a=d
this.b=e},
evQ:function evQ(d,e){this.a=d
this.b=e},
evA:function evA(d,e,f){this.a=d
this.b=e
this.c=f},
evx:function evx(d,e){this.a=d
this.b=e},
evR:function evR(d,e){this.a=d
this.b=e},
evz:function evz(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
evy:function evy(d,e,f){this.a=d
this.b=e
this.c=f},
evw:function evw(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evW:function evW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etv:function etv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exA:function exA(d,e){this.a=d
this.b=e},
exy:function exy(d){this.a=d},
exz:function exz(d,e){this.a=d
this.b=e},
afg:function afg(d,e,f){this.a=d
this.b=e
this.c=f},
ayV:function ayV(d,e){this.c=d
this.a=e},
bcN:function bcN(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
d21:function d21(d){this.a=d},
d20:function d20(d){this.a=d},
bd0:function bd0(d,e){this.c=d
this.a=e},
d2n:function d2n(d){this.a=d},
d2o:function d2o(d){this.a=d},
JQ:function JQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcM:function bcM(){this.d=!1
this.c=this.a=null},
d1Z:function d1Z(d){this.a=d},
d1V:function d1V(d){this.a=d},
d2_:function d2_(d){this.a=d},
d1U:function d1U(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d,e){this.a=d
this.b=e},
PC:function PC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_y:function a_y(d,e,f){this.c=d
this.d=e
this.a=f},
aEr:function aEr(d,e,f){var _=this
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
eAf:function eAf(){},
eA5:function eA5(d){this.a=d},
eAe:function eAe(d){this.a=d},
eA6:function eA6(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA1:function eA1(d){this.a=d},
eA2:function eA2(d,e){this.a=d
this.b=e},
eA3:function eA3(d){this.a=d},
eA4:function eA4(d,e,f){this.a=d
this.b=e
this.c=f},
eAc:function eAc(){},
eAd:function eAd(d){this.a=d},
eA8:function eA8(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(d){this.a=d},
eAb:function eAb(d){this.a=d},
eAg:function eAg(d,e,f){this.a=d
this.b=e
this.c=f},
eAi:function eAi(d,e){this.a=d
this.b=e},
eAh:function eAh(d){this.a=d},
JX:function JX(d,e){this.c=d
this.a=e},
brE:function brE(d,e){this.b=d
this.a=e},
bhF:function bhF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhE:function bhE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aK8:function aK8(){},
aMa:function aMa(){},
bxp:function bxp(){},
aMb:function aMb(){},
fJU(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fJU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xi.c7().M6(B.a(["pdf"],x.s),A.tY,!0),$async$fJU)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boT(s,"data:application/pdf;base64,"+A.cL.gcu().aK(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJU,v)},
iaB(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cG(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l3(0,w).gM(0)
if(t>0){s=J.aQQ(t,1,200)
return s}}catch(r){}return 1},
fJL(d){return C.iaA(d)},
iaA(d){var w=0,v=B.j(x.T),u
var $async$fJL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJL,v)},
bCX(d,e,f,g){return C.iaK(d,e,f,g)},
iaK(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCX=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.eb(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hrL(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jP(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jP(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jP(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jP(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qn()
f=B.Bc(g,null)
a7=B.N()
a7.r=A.qV.gp(0)
f.aX(new B.a8(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bQ
b1.e=A.fG
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
b2.delete()}a0=a2}a3=g.ot()
w=7
return B.b(a3.zn(800,h),$async$bCX)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hx(A.h2),$async$bCX)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eX(A.dD.gaP(a5))
a7=A.cL.gcu().aK(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
$.am.$1("[slides signature] "+B.v(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bCX,v)},
aQ2(d,e,f){return C.iay(d,e,f)},
iay(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQ2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aw:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahI(d,e,f,new C.fJJ(r,q),q,"Sign document"),$async$aQ2)
case 3:if(!new B.eb(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCX(q,t,r.b,r.c),$async$aQ2)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1h(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ2,v)},
iaI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hkW(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hkW(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b6(A.a.aY(A.o.fY(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b6(A.a.aY(A.o.fY(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.v(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lB&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hkx(q.ay)+";border:2px solid "+C.hkx(q.ch)+'"></div>'
break
case 5:l=C.h3W(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajP()
if(p==null)p=A.axQ
n=B.S(p)
k=n.k("np<1>")
j=new B.np(p,0,8,k)
j.zN(p,0,8,n.c)
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
hkx(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hkW(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCV(d,e){var w=0,v=B.j(x.H)
var $async$bCV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fJS(e,C.iaI(e),d),d,null,!0,!0,x.H),$async$bCV)
case 2:return B.h(null,v)}})
return B.i($async$bCV,v)},
bCW(){var w=0,v=B.j(x.T),u,t,s
var $async$bCW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GI(92,2400),$async$bCW)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fJL(s),$async$bCW)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCW,v)},
aQ3(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQ3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h5a(d),$async$aQ3)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fMi(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ3,v)},
heQ(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b1h:function b1h(d,e,f){this.a=d
this.b=e
this.c=f},
fJJ:function fJJ(d,e){this.a=d
this.b=e},
fJS:function fJS(d,e,f){this.a=d
this.b=e
this.c=f},
fJP:function fJP(d){this.a=d},
fJQ:function fJQ(d,e,f){this.a=d
this.b=e
this.c=f},
fJR:function fJR(d,e,f){this.a=d
this.b=e
this.c=f},
iaz(d){return C.kA(d.w)},
iaG(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.icp()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yK(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hxy()
if(w.b.test(u))return u
return null},
hrN(d,e,f){var w,v,u=C.hGe(d),t=$.pz()
for(w=0;w<80;++w){v=u+A.a.aY(A.o.u(t.aw(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
iaM(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f2(w,d.b);v.C();){u=w.gR(w).y
t=C.yK(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fJH(d,e){var w,v=d.y,u=C.yK(v==null?"":v)
if(u!=null)return d.y=u
w=C.iaM(new B.a_(e,new C.fJI(d),B.S(e).k("a_<1>")))
v=d.x
return d.y=C.hrN(v==null?"":v,null,w)},
iaL(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kA(w.w))return null
v=w.y
return C.yK(v==null?"":v)},
hKC(){var w,v=$.pz(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.h3(u)},
W4(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$W4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$W4)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f7("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$W4)
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
$.am.$1("[slides qr stash] load: "+B.v(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W4,v)},
W5(d){return C.hKD(d)},
hKD(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$W5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$W5)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cI,null),$async$W5)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ab(p)
$.am.$1("[slides qr stash] save: "+B.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W5,v)},
a87(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a87=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a87)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.W4(),$async$a87)
case 4:s=a6
r=C.yK(a2==null?"":a2)
if(r==null)r=a3!=null?C.hrN(a3,null,A.IV):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gic(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yK(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdM(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aK(t)
g.n(0,"payload",A.cL.gcu().aK(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.T(Date.now(),0,!1).a6().ac())
if(D.Ti.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yK(J.k(q==null?"":q))
if(f==null)f=C.heV(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.W5(s),$async$a87)
case 7:u=new B.aFS(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hKC()
n=r==null
d=n?C.heV(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aK(t)
q.n(0,"payload",A.cL.gcu().aK(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.T(Date.now(),0,!1).a6().ac())
if(D.Ti.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.W5(s),$async$a87)
case 8:u=new B.aFS(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a87,v)},
heV(d){var w,v,u=$.pz()
for(w=0;w<200;++w){v="SL"+A.a.aY(A.o.u(u.aw(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
ark(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ark=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$ark)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.W4(),$async$ark)
case 6:t=f
s=J.a4(t)
r=s.gM(t)
s.br(t,new C.cfI(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.W5(t),$async$ark)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$ark,v)},
arj(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yK(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$arj)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.W4(),$async$arj)
case 6:t=o.jz(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yK(J.k(q==null?"":q))===p){u=C.a86(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arj,v)},
a86(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a86=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a86)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.W4(),$async$a86)
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
if(D.Ti.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aL(0,s,null)
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
return B.b(C.W5(p),$async$a86)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a86,v)},
iaF(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.T(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.S(d).k("M<1,a6<m,@>>")
w=B.C(new B.M(d,new C.fJO(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fJW(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.T(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.iaF(d==null?B.a([],x.D):d,f,g),null)},
fJV(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fJV=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a87(h,d,e,f,g),$async$fJV)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yK(e==null?"":e)
u=new B.aFF(s,t)
w=1
break}t=A.dK.aK(h)
t=A.kq.gcu().aK(t)
u=new B.aFF(C.yK(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJV,v)},
h5c(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
iaJ(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h5c(v))return v
u=A.a.cH(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b6(v,u))
if(C.h5c(t))return t}s=A.a.cH(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b6(v,s))
if(C.h5c(t))return t}}return null},
fJK(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d1(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d1(t,"NGMY_SL:"))w=v.a(A.S.aL(0,A.ch.cB(0,A.cG.aK(J.mJ(t,8))),null))
else w=v.a(A.S.aL(0,t,null))
v=C.hUi(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aht(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aht=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arj(t[1]),$async$aht)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJK(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yK(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arj(r),$async$aht)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJK(s)
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
return B.b(C.a86(t[1]),$async$aht)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJK(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fJK(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aht,v)},
hUi(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Ti.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h59(C.W0(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.db(u,x.f)
t=B.cD(t,new C.fgo(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h59(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cC())
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
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.W0(B.a2(o,x.N,x.z))
if(e&&C.kA(p.w))p.Q=new B.T(Date.now(),0,!1).a6().bS(144e8).ac()
return p},
bCG(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GH(),$async$bCG)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aht(s),$async$bCG)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCG,v)},
fSC(d){var w=0,v=B.j(x.T),u,t
var $async$fSC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.X_,!0,"Dismiss",d,new C.fSD(),new C.fSE(),A.Fw,!0,x.N),$async$fSC)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f_x)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSC,v)},
iey(d,e,f,g,h){return B.a5(d,!1).cm(B.ea(new C.fSF(h,e,g,f),!0,null,x.H))},
fJI:function fJI(d){this.a=d},
cfI:function cfI(d){this.a=d},
fJO:function fJO(){},
fgo:function fgo(d){this.a=d},
fSD:function fSD(){},
fSE:function fSE(){},
fSF:function fSF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W2:function W2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEp:function aEp(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ezM:function ezM(){},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezL:function ezL(d,e){this.a=d
this.b=e},
ezJ:function ezJ(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
ezT:function ezT(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezU:function ezU(d,e){this.a=d
this.b=e},
ezH:function ezH(d,e){this.a=d
this.b=e},
ezG:function ezG(d,e){this.a=d
this.b=e},
W3:function W3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkx:function bkx(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ezV:function ezV(d,e){this.a=d
this.b=e},
ezW:function ezW(d){this.a=d},
ezX:function ezX(){},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d,e){this.a=d
this.b=e},
aEm:function aEm(d){this.a=d},
aEn:function aEn(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
etp:function etp(d){this.a=d},
eto:function eto(){},
etq:function etq(d){this.a=d},
etl:function etl(d){this.a=d},
etk:function etk(){},
etm:function etm(d){this.a=d},
etn:function etn(d){this.a=d},
buV:function buV(){},
arl:function arl(d){this.a=d},
aEq:function aEq(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eA0:function eA0(d){this.a=d},
eA_:function eA_(d){this.a=d},
hZx(){var w,v,u,t
for(v=0;v<4;++v){w=D.d5C[v]
try{if(Ab.bXC(w)){u=w
return u}}catch(t){}}return null},
R8(d,e){return C.i7q(d,e)},
i7q(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$R8=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hZx()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oj?0.5625:1.7777777777777777
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
l=B.or(new C.fE2(c2,b7,o),!1,!1)
b6.lV(0,l)
b9=x.H
B.cb(null,A.db,!1,null,new C.fE3(n,m),c6,null,!0,!0,b9)
k=new C.fE7(b7)
j=new C.fE8()
i=null
t=4
b3=c2.a
h=Ai.aSl(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fVm(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ab.aXh(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HS.yt(i,"dataavailable",new C.fE4(e))
d=new B.bY(new B.bg($.bz,x.dT),x.b2)
A.HS.yt(i,"stop",new C.fE5(d))
J.ai2(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$R8)
case 8:w=7
return B.b(c5.$1(d0),$async$R8)
case 7:a0=d0
J.fVo(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ai2(n,"Drawing slide "+B.v(a1+1)+" of "+b8+"\u2026")
J.ai2(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$R8)
case 15:w=14
return B.b(c5.$1(d0),$async$R8)
case 14:a0=d0
case 13:J.fVo(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ai2(n,"Recording slide "+B.v(a1+1)+" of "+c3.length+" \xb7 "+B.v(a3)+" s")
a4=new B.T(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fVo(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bM(A.fr,null,b9),$async$R8)
case 18:w=16
break
case 17:J.ai2(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ai2(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d8(0,A.o4),$async$R8)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hS(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.nb(a7)
c0.download=B.v(J.ad(a9)===0?"presentation":a9)+"."+B.v(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lm(b0)
J.lY(b0)
B.bM(A.pU,new C.fE6(a7),b9)
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
try{if(i!=null&&i.state!=="inactive")i.stop()}catch(c8){}c3=B.v(b1)
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
if(p.pC())p.eF()
c3=o
b3=$.aw()
c3.si4(b3)
J.aQU(c3,0)
c3=n
c3.si4(b3)
J.aQU(c3,0)
c3=m
c3.si4(b3)
J.aQU(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$R8,v)},
fE2:function fE2(d,e,f){this.a=d
this.b=e
this.c=f},
fE1:function fE1(){},
fE3:function fE3(d,e){this.a=d
this.b=e},
fE7:function fE7(d){this.a=d},
fE8:function fE8(){},
fE4:function fE4(d){this.a=d},
fE5:function fE5(d){this.a=d},
fE6:function fE6(d){this.a=d},
bv6:function bv6(d,e,f){this.c=d
this.d=e
this.a=f},
faE:function faE(){},
faF:function faF(){},
cg3(d){var w=0,v=B.j(x.at),u,t,s
var $async$cg3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.art(d,A.zx),$async$cg3)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.T(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cg3,v)},
cg2(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7O:function a7O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkg:function bkg(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ehx:function ehx(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d,e){this.a=d
this.b=e},
a8I:function a8I(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oy$=k
_.oz$=l
_.oA$=m
_.nR$=n},
a8J:function a8J(d,e){this.a=d
this.b=e},
b2W:function b2W(){},
cif:function cif(){},
cig:function cig(){},
cih:function cih(d,e,f,g,h,i,j,k,l){var _=this
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
hyx(d){return new C.aik(d)},
a2U:function a2U(){},
aik:function aik(d){this.a=d},
aRe:function aRe(){},
awN:function awN(d,e){this.d=d
this.b=e
this.a=null},
aSM:function aSM(d){this.b=d
this.a=null},
fzd(d,e){var w=0,v=B.j(x.H)
var $async$fzd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxE().LP(d,e),$async$fzd)
case 2:B.fMo()
return B.h(null,v)}})
return B.i($async$fzd,v)},
hp3(d,e){return(A.rv[(d^e)&255]^A.o.aD(d,8))>>>0},
fwu(d,e,f,g,h,i){var w=C.i3M(d,A.dd,f,null,A.cZ,g,h,i)
return w},
hqW(d){var w=F.hrE(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hGe(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pb.h(0,w)
if(v!=null)return v
for(u=A.pb.gdM(A.pb),u=u.gaf(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hr3(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.daD[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAR(d,e){return C.i0j(d,e)},
i0j(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hS([d],"application/pdf")
n=x.z
q=B.aUq(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cA(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ek(B.k5(o,"share",[p]),x.H),$async$bAR)
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
return B.i($async$bAR,v)},
h53(){var w=0,v=B.j(x.y),u,t,s
var $async$h53=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fo5
s=$.bAo
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAR(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h53,v)},
bCb(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bCb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fo5
l=$.bAo
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hlB()?3:4
break
case 3:w=5
return B.b(C.bAR(m,k),$async$bCb)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bAp
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.nb(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Lm(q)
w=10
return B.b(B.bM(A.a1,null,x.H),$async$bCb)
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
return B.i($async$bCb,v)},
h4V(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h4V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bAp
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lG.qN(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h4V,v)},
h5b(d,e){var w=0,v=B.j(x.H),u,t
var $async$h5b=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hS([d],"text/html"))
t.toString
u=window
u.toString
A.lG.qN(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h5b,v)},
b1T(d,e){var w=0,v=B.j(x.y),u
var $async$b1T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1V(d,e),$async$b1T)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1U(d),$async$b1T)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1T,v)}},D,H,I,Al,A7,X,V,W,Am,G,F,E,Q,Y,Z,An,Ao,A8,L,Ap,A_,O,A0,A9,M,Aa,Aq,Ar,P,A1,As,Ab,Ac,At,Ad,Ae,Af,Au,Av,R,Aw,K,Ax,S,T,Ay,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ag=c[193]
A5=c[66]
Ah=c[49]
Ai=c[57]
U=c[208]
A6=c[52]
Aj=c[137]
Ak=c[218]
C=a.updateHolder(c[4],C)
D=c[206]
H=c[91]
I=c[126]
Al=c[36]
A7=c[210]
X=c[207]
V=c[123]
W=c[196]
Am=c[121]
G=c[177]
F=c[31]
E=c[209]
Q=c[139]
Y=c[29]
Z=c[165]
An=c[220]
Ao=c[173]
A8=c[109]
L=c[211]
Ap=c[120]
A_=c[60]
O=c[187]
A0=c[75]
A9=c[100]
M=c[147]
Aa=c[110]
Aq=c[89]
Ar=c[213]
P=c[114]
A1=c[129]
As=c[87]
Ab=c[53]
Ac=c[183]
At=c[35]
Ad=c[73]
Ae=c[138]
Af=c[217]
Au=c[219]
Av=c[216]
R=c[67]
Aw=c[214]
K=c[162]
Ax=c[174]
S=c[47]
T=c[212]
Ay=c[221]
N=c[194]
A2=c[215]
A3=c[106]
A4=c[56]
C.nY.prototype={
v4(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tW(t,v)
return new C.nY(t===0?!1:w,v,t)},
bM6(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D6()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tW(w,u)
return new C.nY(r===0?!1:s,u,r)},
bMC(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D6()
w=o-d
if(w<=0)return p.a?$.h6B():$.D6()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tW(w,u)
q=new C.nY(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2G())
return q},
dZ(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.am(e,16)
if(A.o.E(e,16)===0)return r.bM6(v)
u=w+v+1
t=new Uint16Array(u)
C.hia(r.b,w,e,t)
w=r.a
s=C.tW(u,t)
return new C.nY(s===0?!1:w,t,s)},
mu(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.am(e,16)
u=A.o.E(e,16)
if(u===0)return n.bMC(v)
t=w-v
if(t<=0)return n.a?$.h6B():$.D6()
s=n.b
r=new Uint16Array(t)
C.hQh(s,w,e,r)
w=n.a
q=C.tW(t,r)
p=new C.nY(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dZ(1,u)-1)!==0)return p.aB(0,$.a2G())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2G())}return p},
aM(d,e){var w,v=this.a
if(v===e.a){w=C.cGi(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8a(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8a(t,e)
if(s===0)return $.D6()
if(r===0)return t.a===e?t:t.v4(0)
w=s+1
v=new Uint16Array(w)
C.hQf(t.b,s,d.b,r,v)
u=C.tW(w,v)
return new C.nY(u===0?!1:e,v,u)},
Hi(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D6()
w=d.c
if(w===0)return t.a===e?t:t.v4(0)
v=new Uint16Array(s)
C.ba_(t.b,s,d.b,w,v)
u=C.tW(s,v)
return new C.nY(u===0?!1:e,v,u)},
bz0(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tW(r,u)
return new C.nY(!1,u,s)},
bz_(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tW(u,r)
return new C.nY(!1,r,v)},
bz1(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tW(p,m)
return new C.nY(s!==0,m,s)},
UN(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D6()
w=t.a
if(w===e.a){if(w){w=$.a2G()
return t.Hi(w,!0).bz1(e.Hi(w,!0),!0).a8a(w,!0)}return t.bz0(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bz_(v.Hi($.a2G(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8a(e,v)
if(C.cGi(u.b,t,e.b,w)>=0)return u.Hi(e,v)
return e.Hi(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v4(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8a(e,v)
if(C.cGi(u.b,t,e.b,w)>=0)return u.Hi(e,v)
return e.Hi(u,!v)},
aH(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D6()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hib(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tW(w,t)
return new C.nY(q===0?!1:r,t,q)},
bM5(d){var w,v,u,t
if(this.c<d.c)return $.D6()
this.aRt(d)
w=$.h_W.c7()-$.axw.c7()
v=C.h_Y($.h_V.c7(),$.axw.c7(),$.h_W.c7(),w)
u=C.tW(w,v)
t=new C.nY(!1,v,u)
return this.a!==d.a&&u>0?t.v4(0):t},
cor(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRt(d)
w=C.h_Y($.h_V.c7(),0,$.axw.c7(),$.axw.c7())
v=C.tW($.axw.c7(),w)
u=new C.nY(!1,w,v)
if($.h_X.c7()>0)u=u.mu(0,$.h_X.c7())
return t.a&&u.c>0?u.v4(0):u},
aRt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hi7&&d.c===$.hi9&&g.b===$.hi6&&d.b===$.hi8)return
w=d.b
v=d.c
u=16-A.o.gakd(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hi5(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hi5(g.b,f,u,r)}else{r=C.h_Y(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h_Z(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cGi(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.ba_(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.ba_(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hQg(p,r,i);--o
C.hib(h,j,0,r,o,s)
if(r[i]<h){m=C.h_Z(j,s,o,n)
C.ba_(r,l,n,m,r)
while(--h,r[i]<h)C.ba_(r,l,n,m,r)}--i}$.hi6=g.b
$.hi7=f
$.hi8=w
$.hi9=v
$.h_V.b=r
$.h_W.b=l
$.axw.b=s
$.h_X.b=u},
gX(d){var w,v,u,t=new C.cGj(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cGk().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nY&&this.aM(0,e)===0},
ti(d,e){return this.aM(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uZ(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakd(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cGl(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cGm(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lb(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v4(0):r
while(v.c>1){u=$.hvt()
if(u.c===0)B.b8(D.b4K)
t=v.cor(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bM5(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).h3(0)},
$iaRZ:1,
$ihM:1}
C.aRo.prototype={
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
cMP(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gan(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k8(w,w.length,B.S(w).k("k8<1>"))}}
C.RM.prototype={
cUR(){var w,v
if(this.as==null)this.bcV()
w=this.as
v=w==null?null:w.aoV()
return v==null?null:v.eM()},
bcV(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoV().eM()
this.as=new C.bOq(v)}},
gY(d){return this.at}}
C.a3S.prototype={
a5(){return"CompressionType."+this.b}}
C.bHO.prototype={
ez(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dZ(v,u)+(s.b&A.z6[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dZ(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fJ(u,t)&A.z6[d])
s.c=t}return v}}
C.bG8.prototype={
cL4(d,e){var w,v,u,t,s,r=this,q=new C.bHO(d)
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
t=r.cmJ(q)
if(t<0)return!1
if(t===0){q.ez(8)
q.ez(8)
q.ez(8)
q.ez(8)
s=r.cmM(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ez(8)
q.ez(8)
q.ez(8)
q.ez(8)
return!0}}return!0},
cmJ(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ez(8)
if(t!==D.dmr[u])v=!1
if(t!==D.d__[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cmM(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ez(1),d2=((d3.ez(8)<<8|d3.ez(8))<<8|d3.ez(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ez(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ez(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1R()
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
u[w]=l}c9.fr=B.c2(6,$.htz(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ez(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ez(1)===0)break
i=d3.ez(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hty()
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
if(f<h)h=f}c9.bYh(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atO(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atO(d3)}while(a3===0||a3===1);++a5
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
a3=c9.atO(d3)
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
d4.bK(c3)
c1=(c1<<8^D.Hn[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hp[b9];++b9
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
if(b8===0){b8=D.Hp[b9];++b9
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
if(b8===0){b8=D.Hp[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hp[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hp[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bK(c3)
c1=c1<<8^D.Hn[c1>>>24&255^v];--c2}d4.bK(c3)
c1=(c1<<8^D.Hn[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bK(c7)
c1=(c1<<8^D.Hn[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bK(c7)
c1=(c1<<8^D.Hn[c1>>>24&255^c7&255])>>>0
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
atO(d){var w,v,u,t,s=this,r=s.ay
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
bYh(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1R(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cyr.prototype={
aHQ(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bPw(e)
if(q<0)return
e.c=q
if(e.aO()!==101010256)return
e.aZ()
e.aZ()
e.aZ()
e.aZ()
r.f=e.aO()
r.r=e.aO()
w=e.aZ()
if(w>0)e.aHT(w,!1)
r.cn6(e)
q=r.r
v=r.f
u=e.aKT(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aO()!==33639248)break
s=new C.b8G()
s.cUQ(0,u,e,f)
q.push(s)}},
cn6(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7O(20,r)
if(w.aO()!==117853008){d.c=s
return}w.aO()
v=w.t6()
w.aO()
d.c=v
if(d.aO()!==101075792){d.c=s
return}d.t6()
d.aZ()
d.aZ()
d.aO()
d.aO()
d.t6()
d.t6()
u=d.t6()
t=d.t6()
this.f=u
this.r=t
d.c=s},
bPw(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7O(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alU(A.i3)
o.aM9(r.eM(),A.i3,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aO()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cyp.prototype={}
C.axa.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cys.prototype={
aHQ(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aO()!==67324752)return
e.aZ()
o.b=e.aZ()
w=D.aEo.h(0,e.aZ())
o.c=w==null?D.M_:w
o.d=e.aZ()
o.e=e.aZ()
o.f=e.aO()
o.r=e.aO()
o.w=e.aO()
v=e.aZ()
u=e.aZ()
o.x=e.anI(v)
o.y=e.hk(u).eM()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aVi:D.DS
o.ay=f
o.Q=e.hk(t)
if(o.at!==D.DS&&u>2){w=o.y
w.toString
s=B.ri(w,A.i3,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aZ()===39169){s.aZ()
s.aZ()
s.anI(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aZ()
o.at=D.aVj
o.ax=new C.cyp(r,q)
w=D.aEo.h(0,q)
o.c=w==null?D.M_:w}}}if((o.b&8)!==0){p=e.aO()
if(p===134695760)o.f=e.aO()
else o.f=p
o.r=e.aO()
o.w=e.aO()}},
gM(d){return this.bmu().length},
aoV(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.ri(new Uint8Array(0),A.i3,q,q)
w=r.at
if(w!==D.DS)if(p.gM(0)<=0)r.at=D.DS
else{if(w===D.aVi){p=r.bKo(p)
r.Q=p}else if(w===D.aVj){p=r.bK1(p)
r.Q=p}r.at=D.DS}w=r.c
if(w===D.agX){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pz.Bw(p.eM(),!0,!1)
else{t=B.a8x(A.i3,r.w)
p=r.Q
p.toString
A.pz.a3W(p,t,!0,!1)
u.b=t.GR()}r.Q.c=v
return B.ri(u.bj(),A.i3,q,q)}else if(w===D.agY){s=B.a8x(A.i3,32768)
p=r.Q
v=p.c
C.hyI().cL4(p,s)
u=s.GR()
r.Q.c=v
return B.ri(u,A.i3,q,q)}else return B.ri(p.eM(),A.i3,q,q)},
bmu(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eM()},
u(d){return this.x},
b8L(d){var w=this.ch,v=C.JM(C.hp3(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.UN(0,C.JM(255)))
w[1]=v
w[1]=v.aH(0,C.JM(134775813)).ad(0,C.JM(1)).UN(0,C.JM(4294967295))
w[2]=C.JM(C.hp3(w[2].N(0),w[1].mu(0,24).N(0)))},
aQR(){var w=(this.ch[2].UN(0,C.JM(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bKo(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.ri(new Uint8Array(0),A.i3,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8L(u[v.c++]^r.aQR())}t=r.Q.eM()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQR()
r.b8L(s)
u&2&&B.aj(t)
t[w]=s}return B.ri(t,A.i3,q,q)},
bK1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hk(8).eM()
v=16}else if(k===2){w=d.hk(12).eM()
v=24}else{w=d.hk(16).eM()
v=32}u=d.hk(2).eM()
t=d.hk(d.gM(0)-10)
s=d.hk(10)
r=t.eM()
k=this.ay
k.toString
q=C.hPX(k,w,v)
p=new Uint8Array(B.cg(A.aH.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cg(A.aH.du(q,v,k)))
if(!C.hhA(A.aH.du(q,k,k+2),u))throw B.V(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bEJ(k,new Uint8Array(16),p)
k=x.S
m=J.a5i(0,k)
m=n.r=new C.ci4(m)
m.c=!0
m.b=m.blN(!0,new C.asR(p))
if(m.c)m.d=B.bp(D.og,!0,k)
else m.d=B.bp(D.yW,!0,k)
l=C.hfN(C.hfP(),64)
l.bfg(new C.asR(o))
n.w=l
n.cUq(r,0,r.length)
k=s.eM()
m=n.x
m===$&&B.c()
if(!C.hhA(k,m))throw B.V(B.fo("macs don't match"))
return B.ri(r,A.i3,null,null)}}
C.b8G.prototype={
cUQ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aZ()
e.aZ()
e.aZ()
e.aZ()
e.aZ()
e.aZ()
e.aO()
n.w=e.aO()
n.x=e.aO()
w=e.aZ()
v=e.aZ()
u=e.aZ()
n.y=e.aZ()
e.aZ()
n.Q=e.aO()
n.as=e.aO()
if(w>0)n.at=e.anI(w)
if(v>0){t=e.hk(v).eM()
n.ax=t
if(v>=4){s=B.ri(t,A.i3,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aZ()
p=s.aZ()
o=s.a7O(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t6()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t6()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t6()
p-=8}if(p>=4&&n.y===65535)n.y=o.aO()}}}}if(u>0)e.anI(u)
f.c=n.as
t=new C.cys(D.M_,n,D.DS,B.a([C.JM(0),C.JM(0),C.JM(0)],x.f3))
n.ch=t
t.aHQ(0,f,g)},
u(d){return this.at}}
C.cyq.prototype={
cL5(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cyr(B.a([],x.fT))
this.a=g
g.aHQ(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aRo(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RM(o,A.o.am(Date.now(),1000),0):C.h8_(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h8_(o,q.w,q)
if(k.as==null)k.bcV()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alU(A.i3)
j.aM9(o,A.i3,h,h)}i=j==null?h:j.eM()
if(i!=null)new B.G6(!1).Dv(i,0,h,!0)}}return v}}
C.bEJ.prototype={
cUq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cr(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hyr(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dK("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dK("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bNO(u,0,w,0,o)}else{o===$&&B.c()
q.bKs(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.L9(w,0)
m.x=A.aH.du(m.x,0,10)
w=m.w
l=w.a
l.kC(0)
w=w.d
w===$&&B.c()
l.Cr(0,w,0,w.length)
return f}}
C.ci9.prototype={}
C.cid.prototype={}
C.ci7.prototype={}
C.asR.prototype={}
C.cic.prototype={
cLk(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.dS(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bfg(new C.asR(A.aH.fQ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOS(n.a,n.b,t,s,r)
r+=v}A.aH.hm(f,g,g+w,s)
return o.a.c},
bOS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dK("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cr(0,d,0,d.length)
v.Cr(0,f,0,4)
u=m.c
u===$&&B.c()
w.L9(u,0)
u=m.c
A.aH.hm(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cr(0,s,0,s.length)
w.L9(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ci8.prototype={}
C.ci6.prototype={}
C.asS.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asS){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
ti(d,e){var w=this.a
w===$&&B.c()
w=A.o.ti(w,e.gbYy())
if(!w)e.gbYy()
return w},
aKk(d,e){this.a=0
this.b=d},
tl(d){return this.aKk(d,null)},
aKW(d){var w,v=this,u=v.b
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
w.b0s(v,u)
u=w.b
u===$&&B.c()
w.b0s(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0s(d,e){var w,v=A.o.fY(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cib.prototype={
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
aoo(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1X(u,0)
v.c=0}v.a.aKW(1)},
Cr(d,e,f,g){var w=this.cls(e,f,g)
f+=w
g-=w
w=this.clt(e,f,g)
this.clj(e,f+w,g-w)},
L9(d,e){var w,v=this,u=C.hfO(v.a),t=u.a
t===$&&B.c()
t=C.h5G(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h5G(w,3)
v.cln()
v.clk(u)
v.asE()
v.cfv(d,e)
v.kC(0)
return 20},
b1X(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o8(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ih===w.d)
if(w.w===16)w.asE()},
asE(){this.cUp()
this.w=0
A.d.h7(this.r,0,16,0)},
clj(d,e,f){while(f>0){this.aoo(d[e]);++e;--f}},
clt(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1X(d,e)
e+=4
f-=4
w.aKW(4)
v+=4}return v},
cls(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aoo(d[e]);++e;--f;++v}return v},
cln(){this.aoo(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aoo(0)}},
clk(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asE()
u=v.d
switch(u){case A.ih:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ei:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cfv(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ih===this.d,s=0;s<w;++s){r=v[s]
q=J.o8(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cie.prototype={
cUp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cia.prototype={
bfg(d){var w,v,u,t,s=this,r=s.a
r.kC(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cr(0,w,0,v)
w=s.d
w===$&&B.c()
r.L9(w,0)
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
s.b9W(s.d,u,54)
s.b9W(s.e,u,92)
u=s.d
r.Cr(0,u,0,u.length)},
L9(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.L9(s,w)
s=u.e
t.Cr(0,s,0,s.length)
v=t.L9(d,e)
s=u.e
A.aH.h7(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cr(0,s,0,s.length)
return v},
b9W(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ci5.prototype={}
C.ci4.prototype={
a2g(d){return(D.og[d&255]&255|(D.og[d>>>8&255]&255)<<8|(D.og[d>>>16&255]&255)<<16|D.og[d>>>24&255]<<24)>>>0},
blN(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dK("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
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
for(r=1;r<=10;++r){p=(p^f.a2g((m>>>8|(m&$.qc[24])<<24)>>>0)^D.cC1[r-1])>>>0
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
p=(p^f.a2g((k>>>8|(k&$.qc[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2g((k>>>8|(k&$.qc[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a2g((g>>>8|(g&$.qc[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2g(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bNO(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o8(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ec[a8&255]
u=D.ec[a9>>>8&255]
t=$.qc[8]
s=D.ec[b0>>>16&255]
r=$.qc[16]
q=D.ec[b1>>>24&255]
p=$.qc[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ec[a9&255]
s=D.ec[b0>>>8&255]
u=D.ec[b1>>>16&255]
v=D.ec[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ec[b0&255]
u=D.ec[b1>>>8&255]
s=D.ec[a8>>>16&255]
q=D.ec[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ec[b1&255]
a8=D.ec[a8>>>8&255]
a9=D.ec[a9>>>16&255]
b0=D.ec[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ec[n&255]
b0=D.ec[m>>>8&255]
a9=D.ec[l>>>16&255]
a8=D.ec[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ec[m&255]
b0=D.ec[l>>>8&255]
o=D.ec[b1>>>16&255]
s=D.ec[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ec[l&255]
o=D.ec[b1>>>8&255]
b0=D.ec[n>>>16&255]
u=D.ec[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ec[b1&255]
o=D.ec[n>>>8&255]
s=D.ec[m>>>16&255]
v=D.ec[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ec[a8&255]^C.nu(D.ec[a9>>>8&255],24)^C.nu(D.ec[b0>>>16&255],16)^C.nu(D.ec[b1>>>24&255],8)^b6[w][0]
m=D.ec[a9&255]^C.nu(D.ec[b0>>>8&255],24)^C.nu(D.ec[b1>>>16&255],16)^C.nu(D.ec[a8>>>24&255],8)^b6[w][1]
l=D.ec[b0&255]^C.nu(D.ec[b1>>>8&255],24)^C.nu(D.ec[a8>>>16&255],16)^C.nu(D.ec[a9>>>24&255],8)^b6[w][2]
b1=D.ec[b1&255]^C.nu(D.ec[a8>>>8&255],24)^C.nu(D.ec[a9>>>16&255],16)^C.nu(D.ec[b0>>>24&255],8)^b6[w][3]
a7=D.og[n&255]
b0=D.og[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.og[l>>>8&255]
a9=D.og[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.og[b1>>>8&255]
h=D.og[n>>>16&255]
g=D.og[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.og[l>>>24&255]
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
bKs(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.eb[a6&255]
v=D.eb[b0>>>8&255]
u=$.qc[8]
t=D.eb[a5>>>16&255]
s=$.qc[16]
r=D.eb[a4>>>24&255]
q=$.qc[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.eb[a4&255]
t=D.eb[a6>>>8&255]
v=D.eb[b0>>>16&255]
w=D.eb[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.eb[a5&255]
v=D.eb[a4>>>8&255]
t=D.eb[a6>>>16&255]
r=D.eb[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.eb[b0&255]
a5=D.eb[a5>>>8&255]
a4=D.eb[a4>>>16&255]
a6=D.eb[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.eb[p&255]
a6=D.eb[b0>>>8&255]
a4=D.eb[n>>>16&255]
a5=D.eb[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.eb[o&255]
a4=D.eb[p>>>8&255]
a7=D.eb[b0>>>16&255]
t=D.eb[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.eb[n&255]
a7=D.eb[o>>>8&255]
a5=D.eb[p>>>16&255]
v=D.eb[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.eb[b0&255]
a7=D.eb[n>>>8&255]
t=D.eb[o>>>16&255]
w=D.eb[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.eb[a6&255]^C.nu(D.eb[b0>>>8&255],24)^C.nu(D.eb[a5>>>16&255],16)^C.nu(D.eb[a4>>>24&255],8)^b5[a9][0]
o=D.eb[a4&255]^C.nu(D.eb[a6>>>8&255],24)^C.nu(D.eb[b0>>>16&255],16)^C.nu(D.eb[a5>>>24&255],8)^b5[a9][1]
n=D.eb[a5&255]^C.nu(D.eb[a4>>>8&255],24)^C.nu(D.eb[a6>>>16&255],16)^C.nu(D.eb[b0>>>24&255],8)^b5[a9][2]
b0=D.eb[b0&255]^C.nu(D.eb[a5>>>8&255],24)^C.nu(D.eb[a4>>>16&255],16)^C.nu(D.eb[a6>>>24&255],8)^b5[a9][3]
a4=D.yW[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yW[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yW[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yW[o>>>8&255]
i=D.yW[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yW[b0&255]
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
C.bOp.prototype={}
C.bOq.prototype={
gM(d){var w=this.a.length
return w},
aoV(){return B.ri(this.a,A.i3,null,null)}}
C.bae.prototype={
v0(d){return C.hTb(d)}}
C.csd.prototype={
MP(d){var w=d.w,v=Math.max(1,A.k.dh(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaa(v,t+20,u+16,t,u,B.u4(d.x))},
nr(d){return!1}}
C.bPi.prototype={
cFm(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bC(new C.bPj(),x.E))},
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
return B.b(p.fzd(f,r),$async$mK)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mK,v)}}
C.avS.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8v.prototype={
A(d,e){if(e==null)return!1
if(J.bN(e)!==B.b_(this))return!1
return e instanceof C.a8v&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wV(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fKr)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.aVU.prototype={
c1(d){var w=new C.aAJ(!0,this.e,null,new B.di(),B.ck())
w.c_()
w.scF(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syJ(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aGs()}}}
C.aAJ.prototype={
syJ(d,e){return},
gpz(){var w=this.aa$
return w!=null},
glb(){var w=this.aa$
return w!=null},
ME(d){var w=d==null?B.has(null):d
w.sa4Q(this.ak)
return w}}
C.a0V.prototype={
S(){return new C.aJ7(B.aX(x.N))},
cSy(d){return this.d.$1(d)},
cQl(){return this.e.$0()}}
C.aJ7.prototype={
Z(){this.a1()
this.Pb()},
Pb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cQl(),$async$Pb)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f96(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pb,v)},
YZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f9a(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f9b(t))
w=3
return B.b(C.anE(p),$async$YZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f9c(t,s,p))
w=4
return B.b(t.Pb(),$async$YZ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YZ,v)},
a1c(d){return this.cpF(d)},
cpF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f97(t))
s=J.q(d,"id")
w=3
return B.b(C.c_7(J.k(s==null?"":s)),$async$a1c)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f98(t))
w=1
break}q=C.h59(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cSy(B.a([q],x.D)),$async$a1c)
case 4:if(t.c==null){w=1
break}t.m(new C.f99(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1c,v)},
Pa(d,e){return this.bKT(0,e)},
bKT(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.f91(q),r,null,!0,!0,x.y),$async$Pa)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f92(t))
s=s.h(e,"id")
w=4
return B.b(C.anD(J.k(s==null?"":s)),$async$Pa)
case 4:if(t.c==null){w=1
break}t.m(new C.f93(t))
w=5
return B.b(t.Pb(),$async$Pa)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pa,v)},
cEn(d){var w=B.bj(d),v=w==null?null:w.bU()
if(v==null)return""
return A.it[B.bH(v)-1]+" "+B.bV(v)},
aQI(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ox,A.n),w,e,w,w,w,w,w,e)},
aQH(d){return this.aQI(d,44)},
b76(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ox:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J9,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J9,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bzb,u,u,u)],p))}return B.E(B.aB(A.c7,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bd,new B.o(u,u,u,r,u,s,A.n),A.hB,u,u,u,A.tQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f9g(this,d),u,u,u,u,u,u,!1,A.a5),1)},
cjq(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d_.j(0.14):D.XV,n=B.n(18),m=p?A.d_:A.dn
m=B.I(m,A.q,p?1.8:1)
w=this.aQH(A.qb)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aRG,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRI,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Ox:q
u=p?q:B.I(A.aZ,A.q,1.6)
r=p?D.bPK:q
return B.aB(q,B.df(q,B.B(B.a([w,A.be,t,B.df(q,r,q,q,A.bd,new B.o(q,q,u,q,q,v,A.a6),A.fB,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bd,new B.o(o,q,m,n,q,q,A.n),A.fB,q,q,A.d9,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f95(this,p,d),q,q,q,q,q,q,!1,A.a5)},
crg(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cEn(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dn,A.q,1)
v=r.aQH(A.NK)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aRG,q,q,q)
p=p.h(d,"slides")
p=B.v(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRI,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b3H(A.hF,A.bv,"Bring it back",r.r?q:new C.f9d(r,d))
return B.p(q,B.B(B.a([v,A.be,t,p,A.bp,r.b3H(A.ea,A.c8,"Delete",r.r?q:new C.f9e(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XV,q,w,o,q,q,A.n),q,q,q,A.d9,D.btH,q,q,q)},
b3H(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hx(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),w,f,w,w)},
asU(d,e,f){var w=null
return new B.D(D.bsK,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.fgS,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.f9j,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bY,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQI(A.yI,46),A.be,D.bA3],t)
if(j.r)s.push(D.edU)
s.push(B.aH(i,i,i,i,A.rq,i,i,i,new C.f9j(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dn,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bwf,s,i),B.p(i,B.B(B.a([j.b76(0,A.yk,"Save",j.a.c.length),j.b76(1,A.NY,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bvj,A.em,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c8:A.bv).j(0.12)
s=B.n(14)
r=B.I((j.y?A.c8:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.NL:A.e9
n=B.X(n,p?A.c8:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.TT,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bvf,A.i9,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fcU,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.ffY,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f9k(j,v),i,i,i,i,i,i,!1,A.a5))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asU(A.qb,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cjq(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eds)
else if(j.e==null)s.push(j.asU(A.alG,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.asU(A.oW,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.crg(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.co,B.cw(u,i,X.aiK,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc4n()
p=s?i:D.Ox
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cC,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yk,m?A.jm:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bvS,B.aB(i,B.df(i,B.B(B.a([k,A.a7H,new B.dq(1,A.co,B.eQ(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jm:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e_),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bd,new B.o(s,i,i,o,n,p,A.n),A.hB,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a5),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b1G,i,i,i,i,i,i,i,i)}}
C.op.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.YF.prototype={
S(){return new C.axI(B.a([],x.k),B.f9(null,x.H))},
ge2(){return this.c}}
C.axI.prototype={
Z(){this.a1()
this.Pk()},
Pk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1U(t.a.c),$async$Pk)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cHH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pk,v)},
cxz(d){var w,v,u,t=this
d.c=new B.T(Date.now(),0,!1)
w=J.qk(t.d,new C.cHK(d))
v=w<0
if(v&&C.hQj(d))return t.f
u=t.d
if(v)J.pC(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fWH(new C.cHL(t),v)
return t.f=t.f.bC(new C.cHM(t,d),v).eS(new C.cHN())},
IH(d,e,f){return this.cd1(0,e,f)},
aYu(d,e){return this.IH(0,e,!1)},
cd1(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).cm(B.ea(new C.cHG(t,e),!1,null,x.H)),$async$IH)
case 3:w=4
return B.b(t.f,$async$IH)
case 4:w=5
return B.b(t.Pk(),$async$IH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IH,v)},
aXL(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dzv:d
this.IH(0,new C.op(w,v,new B.T(Date.now(),0,!1)),!0)},
c3S(){return this.aXL(null)},
adr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cHO(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adr)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXL(s)
case 1:return B.h(u,v)}})
return B.i($async$adr,v)},
IG(d,e){return this.bKL(0,e)},
bKL(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cHB(e),s,null,!0,!0,x.y),$async$IG)
case 3:if(g!==!0){w=1
break}t.m(new C.cHC(t,e))
w=4
return B.b(t.f,$async$IG)
case 4:w=5
return B.b(C.agr(t.a.c,e.a),$async$IG)
case 5:w=6
return B.b(t.Pk(),$async$IG)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
Dd(d){return this.bCQ(d)},
bCQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cHx(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dd)
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
return B.b(t.aYu(0,d),$async$Dd)
case 9:w=5
break
case 7:w=10
return B.b(F.h5I(r,d.b,null),$async$Dd)
case 10:w=5
break
case 8:w=11
return B.b(t.IG(0,d),$async$Dd)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dd,v)},
bYv(){var w,v,u=null,t=[D.dzy,D.dzw,D.dzx],s=new C.cHE(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d6.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aR(999,999)
n.push(B.p(u,new B.y(D.dj_[w],u,A.ox,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bn(v,v,v,v),u,u,A.n),u,u,u,u,A.o7,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fFQ,A.O,B.bU(A.bA,n,A.bq,6,6),A.aR,B.aB(u,B.p(u,D.eSB,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.aj7,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cHD(this),u,u,u,u,u,u,!1,A.a5)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bY4,A.n),u,u,u,u,D.bwp,u,u,u)},
bCO(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cC,14)],x.V),r=x.p
s=B.p(v,B.by(B.n(6),new B.an(A.Z,v,A.b2,A.r,B.a([B.eQ(A.A,F.aod(d.b),A.f,A.bX),D.ejq,B.ao(v,B.aB(v,B.p(v,D.bQy,A.f,v,v,D.b2C,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cHs(this,d),v,v,v,v,v,v,!1,A.a5),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f6E,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fM(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fd5,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cHt(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cHu(this,d),v,v,v,v,v,v,!1,A.a5)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.D(I.ahE,B.hx(B.aB(s,B.p(s,A.aol,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.w8,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc5b(),s,s,s,s,s,s,!1,A.a5),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n7,s,s,s,!0,s,s,s,s,s,D.fFU,s,s,s,1,s,!0)
if(t.e)r=D.b60
else{w=t.bYv()
v=B.a([D.frs,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f65,s,s,s),A.f,s,s,new B.o(D.baK,s,s,u,s,s,A.n),s,s,s,s,A.y2,s,s,s))}r=B.a([new B.nU(A5.Zf,new B.mb(w,s),s),new B.nU(D.bvM,new B.mb(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eZa)
else r.push(new B.nU(D.bvh,B.OX(new B.ov(new C.cHP(t),J.ad(t.d),!0,!0,!0,0,B.t2(),s),D.b5i),s))
r=B.vD(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c6(q,D.b9A,r,s,!1,!1,s,s)}}
C.YD.prototype={
S(){return new C.axE(B.a([],x.bx))},
U0(d){return this.d.$1(d)}}
C.aF_.prototype={}
C.axE.prototype={
b0u(d,e,f){var w=$.aw(),v=new B.at(new B.bb(d,A.b4,A.aO),w),u=this.gaYt()
v.aR(0,u)
w=new B.at(new B.bb(e,A.b4,A.aO),w)
w.aR(0,u)
return new C.aF_(v,w,f)},
E4(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.q_,new C.cGW(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.at(new B.bb(w.a,A.b4,A.aO),v)
t=m.gaYt()
u.aR(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.at(new B.bb(w.b,A.b4,A.aO),v)
u.aR(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.at(new B.bb(w.c,A.b4,A.aO),v)
u.aR(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.at(new B.bb(p.a,A.b4,A.aO),v)
o.aR(0,t)
n=new B.at(new B.bb(p.b,A.b4,A.aO),v)
n.aR(0,t)
r.push(new C.aF_(o,n,p.c))}if(r.length===0)r.push(m.b0u("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gpe()
q=r.a
q.U0(q.c)}q=r.d
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
gpe(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mu(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.ro(n,w,v,t,u)},
AN(){var w=0,v=B.j(x.H),u=this,t
var $async$AN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gpe()
t=u.a
w=2
return B.b(t.U0(t.c),$async$AN)
case 2:return B.h(null,v)}})
return B.i($async$AN,v)},
c59(){this.m(new C.cGV(this))
this.E4()},
aXs(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cGY(w,d,v))
w.E4()},
c5a(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cH5())
this.E4()
$.aW.x1$.push(new C.cH6(w))},
Qv(d){return this.cjg(d)},
cjg(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(80,1400,A.eG),$async$Qv)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Qv)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahZ(o,".png")?"image/png":"image/jpeg"
r.m(new C.cGZ(d,n,p))
r.E4()
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
return B.i($async$Qv,v)},
xM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hsO(r,t.gpe()),$async$xM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cGX(t,s))
t.E4()
case 1:return B.h(u,v)}})
return B.i($async$xM,v)},
cjy(d){var w,v=this,u=null,t=F.fDj(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hn(D.bJP,D.ftW,new C.cH0(v,d),u),u)
w=x.p
return new B.D(A.cv,new B.an(A.Z,u,A.aa,A.r,B.a([B.by(B.n(12),B.fR(t,A.A,u,u,A.cg,A.bX,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3I(A.kb,new C.cH1(v,d)),A.bp,v.b3I(A.cB,new C.cH2(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3I(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hD,B.X(d,A.c,w,w,w,18),w),A.cM,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cM,w,w,A.ah)},
II(){var w=0,v=B.j(x.H),u,t=this,s
var $async$II=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AN(),$async$II)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h5I(s,t.gpe(),new C.cH4(t)),$async$II)
case 4:case 1:return B.h(u,v)}})
return B.i($async$II,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.D(A.q0,B.hn(D.bOv,D.fzW,n.gawE(),B.fz(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.aok,m,m,m,new C.cH7(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.X5,m,1,m,m,m,!1,m,!1,E.n7,m,m,m,!0,m,m,m,m,m,D.fuN,m,m,m,1,m,!0),j=At.aUB(O.ln,A.c,Ad.VY,A.oc,D.fvw,n.gc58()),i=B.n(18),h=n.gawD(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jy,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eQ(A.A,F.aod(n.gpe()),A.f,A.dw),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a5)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eq,B.E(B.x(B.a([D.fHr,A.au,B.d(F.h4c(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fiB,m,m,m),A.R,B.dn(E.anD,E.aSt,h,B.bo(A.d6,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.X5,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ot,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aR],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aR(16,16)
u=new B.az(O.ln.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bNd,m,m,m,v===0?m:new C.cH8(n,v),m,m,m,m,"Move up",A.ce)
r=i.length
q=B.aH(m,m,m,m,D.bTy,m,m,m,v===r-1?m:new C.cH9(n,v),m,m,m,m,"Move down",A.ce)
r=r===1?m:new C.cHa(n,v)
p=new B.aR(12,12)
o=new B.aR(12,12)
g.push(B.p(m,B.x(B.a([new B.ci(A.aP,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fj8,m,m,m,m,m,m,m,m,m),A.b8,s,q,B.aH(m,m,m,m,B.X(A.ea,A.oQ,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ce)],l),m),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e5(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bn(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.cjy(i[v]),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e5(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bn(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n7,m,new B.bO(u,u,u,u),new B.bn(w,w,w,w),m,m,A.n),m,m,new C.a8v(h),A.e8,D.btW,m,m,m))}return B.os(!0,B.c6(k,E.afR,B.cw(g,m,D.bun,m,m,A.ag,!1),m,!1,!1,j,m),new C.cHb(n),x.C)}}
C.axG.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c8:E.n7,q=B.n(16),p=B.n(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.d6.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(u.e,t,t,t,t,t,t,D.aR2,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.eB,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aqs.prototype={
S(){return new C.aDM()}}
C.aDM.prototype={
Z(){this.a1()
this.ZE()},
bv(d){this.bG(d)
if(d.c!=this.a.c)this.a11()},
a11(){var w=0,v=B.j(x.H),u=this,t
var $async$a11=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dT(t,x.H),$async$a11)
case 2:u.d=null
if(u.c!=null)u.m(new C.ecl(u))
w=3
return B.b(u.ZE(),$async$a11)
case 3:return B.h(null,v)}})
return B.i($async$a11,v)},
ZE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d1(n,"http://")||J.d1(n,"https://")||J.d1(n,"data:")){o=B.Yh(B.cE(n,0,null),new B.Pj(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.io(0).d8(0,A.pW),$async$ZE)
case 7:if(r.c==null){w=1
break}r.d.tn(!1)
r.m(new C.ecj(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.v(q))
if(r.c!=null)r.m(new C.eck(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZE,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c7U(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.ha(0)
w.m(new C.ecm(w))}else{v.pX(0)
w.m(new C.ecn(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.ji.j(0.92),D.L2.j(0.95)],x.O)
w=B.I(A.c0.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.qe,A.c0,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.N,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.az,A.aC,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.av(B.X(A.amW,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b6Q
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eQ(A.A,new B.a7(r,q,new B.Ah(s,o),o),A.r,A.bX)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iO,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.by(n,new B.an(A.Z,o,A.b2,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7T(),o,o,o,o,o,o,!1,A.a5)}}
C.xE.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.adn.prototype={
B(d){return B.oW(new C.dZY(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acM.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.ji.j(t?0.35:0.4),A.q,1),p=t?D.LB:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cC,14)],o),m=B.n(10),l=B.I(A.c0.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fM(0.5625,C.i7L(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajB,u,u,u,u),1)
m=D.ji.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.ji,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bh1,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.az(m,1,A.q,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ahU,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xH.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nK.prototype={}
C.bji.prototype={
ZN(d){var w=null
return new B.bI(A.a3,w,w,B.Bm(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c8l(){return this.ZN(1)},
axg(d){var w=null,v=B.n(8),u=B.I(A.i6,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adO,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i6,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dX(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i6,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axg("TAARIFA ZA WANANDOA"),A.am,w.c8l(),A.cV,w.ZN(0.9),A.cV,w.ZN(0.7),A.O,w.axg("TAMKO LA MAKUBALIANO"),A.fF,w.ZN(1),A.cV,w.ZN(0.95),A.O,w.axg("MASHAHIDI"),A.b8,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.adq.prototype={
B(d){return B.oW(new C.ehA(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.af6.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ay.j(q?0.35:0.4),A.q,1),m=q?D.bgD:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cC,14)],l),j=B.n(10),i=B.I(A.ay.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h4I(w.a)
if(v==null)v=A.d.gI(D.R3)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fM(0.5625,new B.an(A.Z,r,A.b2,A.r,B.a([B.bW(0,B.fR(C.h4H(v.d),A.A,r,r,A.cg,A.bX,!0,r,!1,r,r),0,0,0),new B.D(A.aiB,new C.bji(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajB,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.LC,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.ba4,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.az(j,1,A.q,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ahU,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kW.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7X.prototype={}
C.VP.prototype={
S(){var w=$.aw()
return new C.aE4(new B.cs(null,x.A),new B.at(A.as,w),new B.at(A.as,w),B.mD(0,null,null),A.d.gI(D.a3a),D.dJQ,B.a([],x.L),B.a([],x.gE))}}
C.aE4.prototype={
Z(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zF(C.fHc(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fG8().bC(new C.ekS(v),w)
$.qY().jJ(0,"assets/images/ngmy_logo.png").bC(new C.ekT(v),w).eS(new C.ekU())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
ahl(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
J0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(88,1600,A.eG),$async$J0)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$J0)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.ht3(m,p),$async$J0)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bDk(new B.pR(o,1),m),$async$J0)
case 10:if(r.c!=null)r.m(new C.eku(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ahl("Could not open that picture. "+B.v(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$J0,v)},
WP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ht3(s,q),$async$WP)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bDk(new B.pR(r,1),s),$async$WP)
case 4:if(t.c!=null)t.m(new C.ekq(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WP,v)},
aeg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ekB(q))
t=4
q.a.toString
p=C.icb()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeg)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekC(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ahl(B.v(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekD(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeg,v)},
ZS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ekw(q,i))
t=4
q.a.toString
p=C.ica()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZS)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekx(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eky(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekz(q))
$.aW.x1$.push(new C.ekA(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZS,v)},
c8B(d){this.m(new C.ekv(this,d))},
El(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$El=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eks(q))
t=4
w=7
return B.b($.aW.gmF(),$async$El)
case 7:w=8
return B.b(B.bM(A.nf,null,x.H),$async$El)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m3(1800/p.gY(0).a),$async$El)
case 9:o=e
w=10
return B.b(o.hx(A.h2),$async$El)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A6.agv(J.eX(A.dD.gaP(n)),"ngmy_news.png","image/png"),$async$El)
case 11:m=e
q.ahl(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ahl(B.v(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekt(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$El,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l7,a2,a2,a2,new C.ekJ(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bP0,a2,a2,a2,new C.ekK(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.p4,a2,a2,a2,a4?a1.gaZH():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.B3,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eSL,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fM(0.7142857142857143,B.eQ(A.A,new B.ex(new C.b0T(t,s,r,a1.x,a2),a1.d),A.f,A.dw),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zW,a2,a2,a2)
t=a1.as?a2:a1.gc8A()
t=B.a([B.E(B.dn(D.bPL,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bo(D.tw,a2,a2,a2,A.c,A.fR,a2,a2,new B.b7(B.n(14),P.v9),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.n(10),B.fR(r,A.A,a2,a2,A.cg,A.bX,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aH(a2,a2,a2,a2,D.bMw,a2,a2,a2,a1.as?a2:a1.gbJm(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zW,a2,a2,a2)
q=B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aSz("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.ddk[o]
p.push(B.mL(a2,D.tw,new B.y(n.a,a2,A.pl,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hJ,new C.ekL(a1,n),a2,a2,P.v9,a2))}p=B.bU(A.bA,p,A.bq,6,8)
m=a1.Q
m=B.bU(A.bA,B.a([D.fG2,A.be,B.j9(a2,a2,a2,D.fqe,a2,new C.ekM(a1),m==="en",a2,a2,a2,a2),A.ab,B.j9(a2,a2,a2,D.fq9,a2,new C.ekN(a1),m==="sw",a2,a2,a2,a2)],w),A.t5,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zW,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d9(D.a3a,0,B.dG(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aR2(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aP,!1)
i=B.a([],w)
for(j=B.d9(D.a3a,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aR2(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aP,!1)
i=a1.as?a2:a1.gc8D()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cv,s,a2),t,A.aB,new B.D(A.cv,r,a2),q,A.O,p,A.R,m,A.aB,new B.D(A.cv,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aR,B.aB(a2,B.p(A.A,B.B(B.a([D.bPF,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fS,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uk,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a5)],w)
if(a4){u=B.a([A.dZ,B.B(B.a([D.dum,A.at,D.bAn],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tw
p=new B.aR(16,16)
d=new B.az(A.bE,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fgE,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A7.VM,new B.o(q,a2,new B.bO(d,d,d,d),new B.bn(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cv,A.i9,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d_r[o]
t.push(B.mL(a2,D.tw,new B.y(a0,a2,A.Jn,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hJ,new C.ekO(a1,a0),a2,a2,P.v9,a2))}u.push(B.bU(A.bA,t,A.bq,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aSz("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ekP(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc8C()
u.push(B.B(B.a([t,A.ab,B.HQ(A.yN,s,B.nE(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZH()
u.push(B.dn(A.p4,D.fBy,t,B.bo(A.cT,a2,a2,a2,a2,A.J7,a2,a2,new B.b7(B.n(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ain,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.k0.j(0.5),A.q,1)
v.push(B.bW(0,B.en(B.av(B.p(a2,B.B(B.a([E.a7I,A.eq,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iU,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.AW,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bwH,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.B3,new B.an(A.Z,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aSz(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.a0),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tw,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.Ji,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aR2(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bD:A.bE
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l_,t,t,t,t),A.fF],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bsY,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jr,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iq,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ekr(this,d),t,t,t,t,t,t,!1,A.a5)}}
C.zF.prototype={
bc3(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zF(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cIR(d){var w=null
return this.bc3(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ce3(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.v(u)).length!==0)w.push(A.a.i(B.v(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fI(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ce1(),B.S(w).k("M<1,m>")).c0(0,new C.ce2())
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
return this.bc3(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFy(d){return this.f}}
C.tq.prototype={
a5(){return"NewsLayout."+this.b}}
C.BA.prototype={
a5(){return"NewsFrame."+this.b}}
C.lj.prototype={}
C.b0T.prototype={
rp(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZJ(d,e,f,g){return this.rp(d,e,null,1.25,f,A.bo,g)},
PR(d,e,f,g,h){return this.rp(d,e,f,1.25,g,A.bo,h)},
axm(d,e,f,g,h){return this.rp(d,e,null,f,g,A.bo,h)},
axl(d,e,f,g,h){return this.rp(d,e,f,g,0,A.bo,h)},
aZL(d,e,f,g,h){return this.rp(d,e,null,f,0,g,h)},
c8H(d,e,f,g,h,i){return this.rp(d,e,f,g,0,h,i)},
axk(d,e,f,g){return this.rp(d,e,null,f,0,A.bo,g)},
aej(d,e,f){return this.rp(d,e,null,f,0,A.bo,A.cO)},
aZK(d,e,f,g,h){return this.rp(d,e,f,g,0,h,A.cO)},
c8G(d,e,f,g){return this.rp(d,e,null,f,0,g,A.cO)},
c8F(d,e,f,g){return this.rp(d,e,f,g,0,A.bo,A.cO)},
aek(d,e,f,g,h,i){return this.rp(d,e,f,g,h,A.bo,i)},
aZI(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.jM(new B.et(d,u,u,A.cP,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c4,new B.jv(1),u,u,h,u,A.c3,u)
v.uD(g)
if(!v.b.a.c.gaEm())return w
w-=2}return j},
aeh(d,e,f,g,h,i,j,k){return this.aZI(d,e,f,g,h,i,j,k,A.bo)},
azu(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
azt(d){return this.azu(null,!1,d)},
ah9(d,e){return this.azu(null,d,e)},
cqp(d,e){return this.azu(d,!1,e)},
gb0S(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVd(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OH(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aeh(w.gaVd(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaVd(),v,g,A.a2,v,v,v,w.axl(u,t,f,1.02,A.P),e,v,v)},
aVi(d){return this.OH(d,A.L,null,2,78,30)},
abG(d,e,f,g,h){return this.OH(d,e,null,f,g,h)},
bYn(d,e,f,g,h){return this.OH(d,A.L,e,f,g,h)},
bYm(d,e,f){return this.OH(d,A.L,null,e,f,30)},
RN(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jK,B.d(s,u,g,A.a2,u,u,u,v.aZK(w,v.aZI(t,w,A.cO,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b6M(d){return this.RN(d,A.L,null,3,24)},
aB_(d,e,f,g){return this.RN(d,e,null,f,g)},
cy2(d,e,f){return this.RN(d,A.L,e,3,f)},
b6N(d,e){return this.RN(d,e,null,3,24)},
cy0(d,e){return this.RN(d,A.L,null,3,e)},
cy1(d,e,f){return this.RN(d,e,null,3,f)},
aqU(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.h_,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PR("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
NE(){return this.aqU(null,!0)},
aqT(d){return this.aqU(null,d)},
bFe(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i8,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c8G(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vy(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.T(Date.now(),0,!1),i=m.gb0S(),h=A.o.am(j.bD(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i_I(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZJ(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aeh(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aeh(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eH,l,l,l,m.aek(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bCA(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hH,A.j,0,l,l),A.am,m.ah9(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eq,B.E(B.d(i,l,1,A.eH,l,l,l,m.axk(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bCA(j),l,l,l,l,l,l,m.PR(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hH,A.j,0,l,l),A.O,m.cqp(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0S()
v=B.d("NGMY",l,l,l,l,l,l,m.axm(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eJ(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rp(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b8,new B.dq(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.aek(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dP,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l)
t=m.ah9(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axk(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ah9(!0,1.4),A.au,B.d(C.bCA(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.azt(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axm(v,u,1,3,A.P),A.L,l,l),A.O,m.ah9(!0,1.2),A.au,B.B(B.a([B.d(C.bCA(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l),A.au,m.azt(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acO(d){return this.vy(d,!1)},
aei(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aek("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
c8E(d,e){return this.aei(d,null,e,null)},
aXk(d){var w=null,v=new B.T(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.axl("Roboto",15,t,1,A.cx),r=B.X(E.al2,t,w,w,w,18),q=A.a.ap(A.p8[B.bH(v)-1],0,3),p=A.a.aY(A.o.u(B.h4(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bV(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fO,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aw3(){return this.aXk(A.mC)},
b3W(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.aek("Roboto",this.aeh(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azx(d,e,f){return this.b3W(d,e,f,30)},
aB2(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vy,B.d(v,w,e,A.a2,w,w,w,this.c8F("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6R(d){return this.aB2(d,3,22)},
cyd(d,e){return this.aB2(d,e,22)},
tF(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cg,A.bX,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Ds(D.bzs,w,s)
if(v==="sepia")w=new B.Ds(D.bzr,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.yf,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bS(A.A,0.95,A.x,s,0,B.a([A.K,A.X1.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.Z,s,A.b2,A.r,v,s),s)},
qs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tF(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.em,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lX,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e9X,14)],x.V)
v=l.tF(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eJ(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aZK(j.as,13.5,D.bbB,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.beZ,k,k,k,w,k,A.n),k,e,k,k,D.bui,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.by(B.n(25),l.tF(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.i_(l.tF(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lX,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e9N,10)],x.V)
return B.eJ(A.A,0.025,new B.a7(d,e,new B.an(A.Z,k,A.aa,A.f,B.a([B.bW(0,B.p(k,l.tF(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rd,k,k,k),0,0,0),B.ao(k,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.ny(l.tF(d,e),A.aq,D.h5F),new C.bcs(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tF(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bk(u));++n){m=new B.aR(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bN,k,k,new B.bn(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.ci(A.aP,A.qj,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.Z,k,A.b2,A.r,w,k),A.f,A.ee,k,k,k,e,k,k,D.byI,k,k,d)
case 8:w=d/2
v=B.x2(A.hh,new B.aR(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.by(B.x2(A.hI,new B.aR(w,w)),l.tF(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fQ,22)],x.V)
return B.p(k,l.tF(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.ny(l.tF(d,e),A.aq,D.hcb),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tF(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.em,k,k,d)}},
aOB(d,e){return this.d.e===D.RI?A.bI:this.bFe(d,e)},
Wn(d){return this.aOB(d,A.L)},
gaAj(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAi(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZL(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PR("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aej(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jA(B.x(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcgM(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9l(d,e,f,g){return B.cq(new C.ce4(this,e,d,f,g))},
a9k(d){return this.a9l(d,22,!0,18)},
Wy(d,e){return this.a9l(d,22,!0,e)},
aPD(d,e,f){return this.a9l(d,22,e,f)},
bHh(d,e,f){return this.a9l(d,e,!0,f)},
b9M(d,e,f,g){return B.cq(new C.ce5(this,e,d,g,!0,f))},
cfA(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.acO(824),A.aB,k.aVi(824),k.b6M(824),A.O,k.NE(),A.ac,B.av(k.qs(824,360),j,j,j),k.Wn(824),A.ac,B.E(k.a9k(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.acO(824),A.aR,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.abG(440,A.bi,3,62,26),k.aB_(440,A.bi,2,20),A.b8,k.aqU(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.J8,B.x(B.a([k.qs(362,310),k.Wn(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.azt(2),A.ac,B.E(k.a9k(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vy(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bYn(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cy2(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bq,j,j,j)
u=B.a([B.av(k.qs(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RI){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axl(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lq,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ac,v,A.ac,new B.an(A.Z,j,A.aa,A.r,u,j),A.O,k.NE(),A.R,B.E(k.Wy(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vy(824,!0)
w=k.qs(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.OH(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b1,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bx_,j,j,j),j,j,0,0,j,j)],u),j),k.b6N(824,A.bi),A.O,k.NE(),A.R,B.E(k.a9k(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.acO(824),A.aB,k.aVi(824),k.b6M(824),A.O,k.NE(),A.ac,B.E(k.b9M(3,300,B.x(B.a([k.qs(300,300),k.Wn(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vy(824,!0)
v=x.p
u=B.x(B.a([k.abG(440,A.bi,3,62,26),k.aB_(440,A.bi,2,20),A.b8,k.aqT(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aP2,new B.D(A.i8,k.qs(364,h.e===D.RI?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wy(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.acO(824),A.ac,k.bYm(824,2,70),k.cy0(824,21),A.O,k.NE(),A.ac,B.E(k.b9M(3,340,B.av(k.qs(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vy(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bCA(new B.T(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PR(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZL(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b8)
if(k.gaAj())v.push(k.aAi(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahS,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.abG(570,A.bi,3,62,28),k.cy1(570,A.bi,20),A.O,k.aqT(!1),A.O,B.av(k.qs(570,330),j,j,j),k.Wn(570),A.R,B.E(k.aPD(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vy(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PR(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ac,B.p(j,B.x(B.a([t,A.am,k.OH(788,A.bi,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bvk,j,j,j),k.b6N(824,A.bi),A.R,B.av(k.qs(824,310),j,j,j),k.Wn(824),A.O,k.NE(),A.R,B.E(k.a9k(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vy(824,!0),A.aR,new B.an(A.Z,j,A.aa,A.r,B.a([k.qs(824,430),B.ao(18,k.c8E(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.azx(824,3,66),k.b6R(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aw3(),A.aB,B.E(k.Wy(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vy(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.aei(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b3W(410,4,58,28),k.aB2(410,6,20),A.b8],w),A.F,j,A.e,A.j,0,A.p),j),U.aP3,k.qs(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.aw3(),A.aR,B.E(k.Wy(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vy(824,!0)
v=k.qs(824,420)
u=B.hDn(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.Z,j,A.aa,A.r,B.a([v,B.ao(22,B.fw(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c8H(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bxf,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.azx(824,3,62),k.b6R(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aXk(A.lv),A.aB,B.E(k.Wy(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vy(824,!0)
u=h.w
t=x.p
w=B.a([k.qs(824,380),B.ao(j,k.aei(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.azx(824,2,60)
r=k.cyd(824,2)
p=k.aw3()
o=B.E(k.aPD(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.Z,j,A.aa,A.r,w,j),A.aR,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.by(B.n(14),k.tF(150,104),A.aq),A.op,B.E(B.x(B.a([k.aei("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.axk(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.N,0,A.p),1),B.X(A.eB,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vy(824,!0),A.by,k.abG(824,A.bi,3,62,30),k.aB_(824,A.bi,2,22),A.R,k.aqT(!1),A.R,B.av(k.qs(824,330),j,j,j),k.aOB(824,A.bi),A.aR,B.E(k.bHh(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bW(0,B.c0(s,new B.o(s,s,s,s,s,new B.a9(A.az,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bW(0,B.b3(s,s,s,new C.b8Y(B.b0(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bxM,B.x(B.a([B.E(t.cfA(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fF,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZJ(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PR(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hH,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bW(0,B.e1(B.b3(s,s,s,new C.brB(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i_(B.fR(q,A.A,s,s,A.cg,A.bX,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mC,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axm(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.de(B.p(s,B.B(o,A.m,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.byQ,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jA(new B.an(A.Z,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bct.prototype={
jg(d){return C.hih(d)},
jV(d){return!1}}
C.bcs.prototype={
a3(d,e){var w,v=C.hih(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aQ(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.bu7.prototype={
jg(d){var w,v,u,t,s,r,q,p,o=new B.ez()
o.dl(3)
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
jV(d){return!1}}
C.b8Y.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.ez()
k.dl(7)
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
w.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.L3.j(0.13),A.K],v),l,l).av(0,B.bQ(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.brB.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fN(u,u,u,u,B.cX(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c4,u,A.dL,A.c3)
s.eh()
w=d.a
J.bv(w.save())
w.translate(t/2,e.b*0.52)
d.jc(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.VS.prototype={
S(){return new C.aE8()}}
C.aE8.prototype={
Z(){var w=this
w.a1()
B.fxK(w.a.c,null).bC(new C.em3(),x.g7).bC(new C.em4(w),x.a)
w.a.toString},
gaNp(){var w=D.avD[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxn(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaNp()
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
ZU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.elR(r))
t=4
q=r.gaxn()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qn()
m=B.Bc(n,null)
i=B.N()
i.Q=A.h0
m.os(g,q,new B.a8(0,0,0+p,0+o),i)
w=7
return B.b(n.ot().zn(J.h7K(p),J.h7K(o)),$async$ZU)
case 7:l=e
w=8
return B.b(l.hx(A.h2),$async$ZU)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eX(J.vu(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.elS(r))
r.c.K(x.q).f.U(D.f0N)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZU,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l7,s,s,s,new C.elY(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fE5,s,s,!0,s,s,t.y||r==null?s:t.gc8I(),s,s)],p),s,s,!0,!0,A.B3,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fI2,s,s,s,1,s,!0)
if(r==null)p=A.lO
else{w=B.E(new B.D(A.bP,B.av(new B.fM(t.gaNp(),B.cq(new C.elZ(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iq,B.j9(s,s,s,new B.y(D.avD[u].a,s,E.aQR,s,s,s,s,s,s,s,s,s),s,new C.em_(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aP,!1),s),B.B(B.a([D.bQp,B.E(B.l2(s,s,s,6,1,new C.em0(t),t.f),1),D.bQ1],p),A.m,s,A.e,A.j,0,s,s),D.fBs,A.am,B.bK(!1,D.fBa,s,s,!0,s,s,new C.em1(t,d),s,s)],p),A.m,s,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Xf,s,s,s,s,s,s,D.buG,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c6(q,A.B3,p,s,!1,!1,s,s)}}
C.bc_.prototype={
a3(d,e){var w
$.W()
w=B.N()
w.Q=A.cg
return d.os(this.b,this.c,new B.a8(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_W.prototype={
S(){var w=$.aw(),v=x.A
return new C.aFv(new B.at(A.as,w),new B.at(new B.bb("NGMY",A.b4,A.aO),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a3L),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oC.prototype={}
C.aFv.prototype={
gaVq(){var w,v,u=this
if(u.p1)w=new B.vM(1,u.p2,0.9,u.p3).iM().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eVF(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Yw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qY().jJ(0,"assets/images/ngmy_logo.png"),$async$Yw)
case 7:q=e
p=J.eX(J.vu(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bDk(new B.pR(p,1),o),$async$Yw)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eUx(r,p))
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
return B.i($async$Yw,v)},
PU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(92,1800,A.eG),$async$PU)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$PU)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bDk(new B.pR(p,1),n),$async$PU)
case 9:if(r.c==null){w=1
break}r.m(new C.eUV(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.v(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PU,v)},
b3i(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aJ=w.aF=w.aA=w.a_=w.b8=w.bi=w.y2=0
w.b2=null
w.b1=0.25
w.bb=null
w.bL=0.5
w.aI=1
w.c6=w.bE=w.bh=0
w.cL=w.c4=!1},
aX4(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bA1(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dgc)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bA1(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bA1(C.h2A(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bA1(C.h2A(1-a0*0.5,n,n,n),w)}return a1?C.bA1(C.h2A(-1,255,255,255),w):w},
aB8(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l3(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zg(u,v,w)
this.dx.pf(new C.eV4(t),!0)
return t},
b5Q(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aB8()
w=C.i9U(e.d.a.a,e.db)
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
return C.i6o(d,k,v,a0,j,e.gaVq(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cvU(){return this.b5Q(null)},
Dc(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$Dc)
case 3:w=4
return B.b(B.bM(A.eM,null,x.H),$async$Dc)
case 4:w=5
return B.b($.aW.gmF(),$async$Dc)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.m3(1080/r.gY(0).a),$async$Dc)
case 7:w=6
return B.b(e.hx(A.h2),$async$Dc)
case 6:q=e
u=q==null?null:J.eX(A.dD.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dc,v)},
aad(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aad=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eUg(q))
t=4
w=7
return B.b(q.Dc(),$async$aad)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cL.gcu().aK(p)
n=C.BO(null,null,null,null,D.oj,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5Q(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.v(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eUh(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aad,v)},
Av(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Av=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eUe(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Av)
case 7:w=8
return B.b(B.bM(A.ng,null,x.H),$async$Av)
case 8:w=9
return B.b($.aW.gmF(),$async$Av)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m3(1080/p.gY(0).a),$async$Av)
case 10:o=e
w=11
return B.b(o.hx(A.h2),$async$Av)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A6.agv(J.eX(A.dD.gaP(n)),"ngmy_quote.png","image/png"),$async$Av)
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
if(k!=null)k.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.v(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eUf(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Av,v)},
ciH(){var w=this.p4
w.toString
return B.cq(new C.eUO(this,w))},
aZS(d,e){var w=null
return B.bs(w,w,w,w,w,D.fbb,w,w,!0,new B.b4(4,B.n(16),P.v9),w,w,w,w,w,D.tw,!0,w,w,w,w,new B.b4(4,B.n(16),D.b_k),w,w,w,w,w,w,w,w,A1.DJ,e,w,w,w,w,w,w,w,D.fgv,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xV(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aRD,w,w,w))
return new B.D(H.ahJ,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZR(d,e){var w=null,v=B.n(18),u=B.I(A.bE,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jO),A.f,w,w,new B.o(D.tw,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vF(d){return this.aZR(d,A.bB)},
od(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uk:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bE,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jm,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jm,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.df(r,B.B(s,A.m,r,A.e,A.N,0,r,r),r,r,A.bd,new B.o(w,r,u,v,r,p,A.n),A.hB,r,r,r,A.FB,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
ag8(d,e,f){return this.od(d,null,e,f)},
axr(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eD:A.bE,s=x.p
v=B.a([B.df(w,d,w,w,A.bd,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hB,w,e,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a5)},
aZV(d,e,f,g,h,i){return this.axr(d,e,f,g,h,5,i)},
ko(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f8a,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.edw,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eV0(this,h,i),u,u,u,u,u,u,!1,A.a5))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQJ,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.ZH,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avh(w).cKd(A.b6,A.bE,A.b6.j(0.2),A.c,D.eS2,4)
return new B.D(A.xN,B.x(B.a([s,B.aa6(B.l2(u,u,u,g,f,new C.eV1(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ai9(d,e,f,g,h,i){return this.ko(d,e,f,g,h,null,i)},
aiB(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dn:B.b0(u)
r=d==u
q=r?A.c:A.aZ
p=new B.az(q,r?3:1,A.q,-1)
t=t?D.bJr:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eV3(this,e,u),o,o,o,o,o,o,!1,A.a5))}return B.bU(A.bA,n,A.bq,10,10)},
bLq(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3L
else{v=x.a8
w=B.C(new B.a_(D.a3L,new C.eU6(o),v),v.k("J.E"))}v=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZS("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eU7(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8H,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZS("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eU8(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a4,n,A.an,n,n,n,n)
t=o.xV("DESIGNS",A.u5)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cS_[q]
r.push(new B.D(A.iq,o.ag8(p,o.x===p,new C.eU9(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aP),A.ac,new B.a7(n,118,B.hN(n,new C.eUa(o,w),w.length,n,n,A.aP,new C.eUb(),!1),n),A.O,o.aZR(B.x(B.a([B.iI(A.b6,n,n,A.af,!0,new C.eUc(o),n,D.fsz,n,D.foU,o.k3),B.iI(A.b6,n,n,A.af,!0,new C.eUd(o),n,n,n,D.fm8,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aim)],s),A.F,n,A.e,A.j,0,A.p)},
cEE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aB8()
if(a7.length===0)return a5.vF(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jw,a6,a6,a6))
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
l=m.length!==0&&A.d.d7(m,new C.eVu(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eVB(a5)
j=new C.eVD()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jw,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aR(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eD:A.bE
d=new B.az(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bn(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.MV,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eVv(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a5))}o=a5.vF(B.bU(A.bA,o,A.t5,6,6))
i=B.a([a5.od("All words",L.amD,!1,new C.eVw(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ag8("Sentence "+a3,!1,new C.eVx(a5,a7,v,a2)))
a2=a3}}i.push(a5.ag8("Clear picks",!1,new C.eVy(a5)))
i=B.bU(A.bA,i,A.bq,8,8)
g=a5.xV("SIZE OF THE PICKED WORDS",D.am5)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dm0[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eVz(e,k)
f.push(a5.ag8(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bU(A.bA,f,A.bq,8,8),A.R,a5.od("Make every word normal",A.l4,!1,new C.eVA(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
czK(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bA0,B.d(A.d.h1(D.axl,new C.eVd(q)).b,p,p,p,p,p,p,D.f9E,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eVe(q)),l=q.xV("HIGHLIGHT BEHIND THE WORDS",A.a0A),k=q.p1?-1:q.k4
k=q.aiB(k,new C.eVf(q),D.d1y)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.R,m,l,B.bU(A.bA,B.a([k,B.aB(p,B.p(p,D.bMq,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f3p,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eVi(q),p,p,p,p,p,p,!1,A.a5)],o),A.t5,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jw,p,p,p)],o)
if(q.gaVq()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ai9("Colour",l,0,360,new C.eVj(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ai9("Shade",k,0.15,0.9,new C.eVk(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ko("Strength",l,0.15,1,new C.eVl(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vF(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xV("LOOK",A.yC))
m=B.a([q.od("Bold",K.am3,q.fy,new C.eVm(q)),q.od("Italic",K.am4,q.go,new C.eVn(q))],o)
for(u=0;u<3;++u){l={}
k=D.cTb[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uk:p
w=w?p:A.c.j(0.07)
s=new B.aR(14,14)
r=new B.az(q.id===l.a?A.K:A.bE,1,A.q,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bn(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eVo(l,q),p,p,p,p,p,p,!1,A.a5))}n.push(B.bU(A.bA,m,A.t5,8,8))
n.push(q.xV("COLOUR",A.np))
n.push(q.aiB(q.fx,new C.eVp(q),D.dcN))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jw,p,p,p))
n.push(q.xV("SIZE AND PLACE",A.Gz))
m=q.fr
m=q.ko("Text size",m,0.5,1.6,new C.eVg(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vF(B.x(B.a([m,q.ko("Up / down",l,0.12,0.5,new C.eVh(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.F,p,A.e,A.j,0,A.p)},
ciI(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bD.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bRR,A.f,p,p,D.b2i,p,62,p,p,p,p,p,62),A.aB,D.fq7,A.am,D.fuL],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tw,p,v,w,p,new B.a9(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bvR,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZU(),p,p,p,p,p,p,!1,A.a5)}w=x.p
v=B.B(B.a([B.by(B.n(12),new B.a7(46,62,B.fR(o,A.A,120,p,A.cg,A.bX,!1,p,!1,p,p),p),A.aq),A.be,B.E(B.x(B.a([D.fpF,A.O,B.bU(A.bA,B.a([q.od("Change",A.kb,!1,q.gaZU()),q.od("Remove",A.ea,!1,new C.eUS(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d96[t]
u.push(q.od(s.b,s.a,q.at===t,new C.eUT(q,t)))}u=B.bU(A.bA,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c1k(o)
break A}if(1===r){s=q.c0j()
break A}if(2===r){s=q.bHg()
break A}if(3===r){s=q.bNE()
break A}s=q.bJn()
break A}return B.x(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.od("Reset the whole picture",A.l4,!1,new C.eUU(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c1k(d){var w=this,v=x.p
return B.x(B.a([B.bU(A.bA,B.a([w.od("Auto enhance",E.a0e,!1,new C.eUK(w)),w.od("Make words easy to read",A.p1,!1,new C.eUL(w))],v),A.bq,8,8),A.aB,B.cq(new C.eUM(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c0j(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ko("Exposure",n,-1.5,1.5,new C.eUo(o),0,A.k.ab(n,1))
w=o.RG
w=o.ko("Brightness",w,-0.5,0.5,new C.eUp(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ko("Contrast",v,0.4,2,new C.eUq(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ko("Fade",u,0,1,new C.eUr(o),0,""+A.k.V(u*100))
t=o.aF
t=o.ko("Spotlight",t,0,1,new C.eUs(o),0,""+A.k.V(t*100))
s=o.a_
s=o.ko("Darken",s,0,0.85,new C.eUt(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ko("Vignette",r,0,0.9,new C.eUu(o),0,""+A.k.V(r*100))
q=o.aC
q=o.ko("Shade behind words",q,0,0.85,new C.eUv(o),0,""+A.k.V(q*100))
p=o.aJ
return o.vF(B.x(B.a([n,w,v,u,t,s,r,q,o.ko("Shade top & bottom",p,0,0.85,new C.eUw(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bHg(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ko("Colour strength",q,0,2.2,new C.eTK(s),1,""+A.k.V(q*100))
w=s.to
w=s.ko("Warmth",w,-1,1,new C.eTL(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ko("Tint",v,-1,1,new C.eTM(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vF(B.x(B.a([q,w,v,s.ko("Shift colours",u,-180,180,new C.eTN(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.od("Negative",D.bHp,s.y1,new C.eTO(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xV("COLOUR WASH",A.NT)
w=s.b2
q=B.a([null],x.Z)
A.d.v(q,D.aw3)
t=B.a([u,v,s.aiB(w,new C.eTP(s),q),A.O],t)
if(s.b2!=null){q=s.b1
t.push(s.vF(s.ai9("Wash strength",q,0,0.9,new C.eTQ(s),""+A.k.V(q*100))))}return B.x(t,A.F,r,A.e,A.j,0,A.p)},
bNE(){var w,v,u,t,s,r=this,q=r.y2
q=r.ko("Blur",q,0,24,new C.eUi(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ko("Soft focus",w,0,1,new C.eUj(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vF(B.x(B.a([q,w,r.ko("Film grain",v,0,1,new C.eUk(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xV("LIGHT LEAK",I.am_)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d9(D.aw3,0,B.dG(8,"count",s),s))
u=B.a([v,w,r.aiB(q,new C.eUl(r),t),A.O],u)
if(r.bb!=null){q=r.bL
u.push(r.vF(r.ai9("Leak strength",q,0,1,new C.eUm(r),""+A.k.V(q*100))))}return B.x(u,A.F,null,A.e,A.j,0,A.p)},
bJn(){var w,v,u,t,s=this,r=s.aI
r=s.ko("Zoom",r,1,3,new C.eTU(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.ko("Left / right",w,-1,1,new C.eTV(s),0,""+A.k.V(w*100))
v=s.bE
v=s.ko("Up / down",v,-1,1,new C.eTW(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.x(B.a([s.vF(B.x(B.a([r,w,v,s.ko("Turn",u,-180,180,new C.eTX(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bU(A.bA,B.a([s.od("Turn 90\xb0",H.an9,!1,new C.eTY(s)),s.od("Flip sideways",A.Gm,s.c4,new C.eTZ(s)),s.od("Flip upside down",A.Gm,s.cL,new C.eU_(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c40(){var w=null,v=B.n(22),u=B.I(A.bE,A.q,1)
return B.p(w,B.x(B.a([D.eSe,A.R,D.frB,A.aB,B.aB(w,B.p(A.A,D.eSr,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uk,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUN(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tw,w,u,v,w,w,A.n),w,w,w,w,A.bP,w,w,w)},
c18(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eUF(p),m=x.p,l=B.B(B.a([D.bA6,p.od("Reset",A.l4,!1,new C.eUB(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jw,o,o,o),j=p.xV("SHAPE",A.an5),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Co[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZV(n.$2(t,p.cy),62,u.b,s===t,new C.eUC(v,p),62))}}i=B.bU(A.bA,i,A.bq,8,8)
v=p.xV("RING",A.rf)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cj[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZV(n.$2(p.cx,t),62,r.b,q===t,new C.eUD(s,p),62))}u=B.bU(A.bA,u,A.bq,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ac,p.vF(p.ko("Size",s,0.12,0.4,new C.eUE(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1Q(d){return new B.a7(null,d,new B.fM(0.5625,B.cq(new C.eUY(this)),null),null)},
cyZ(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bE,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uk:q
t=new B.aR(14,14)
s=D.dbe[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bg,B.aB(A.c7,B.df(q,B.x(B.a([r,A.cV,new B.qq(A.e_,A.A,A.f,new B.y(s.b,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.N,0,A.p),q,q,A.bd,new B.o(q,q,q,new B.bn(t,t,t,t),q,u,A.n),D.bry,q,q,q,A.hC,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eV6(this,w),q,q,q,q,q,q,!1,A.a5),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.btE,A.lX,q,q,q)},
aQ9(){var w,v,u=this,t=null,s=u.cyZ(),r=u.as
A:{if(0===r){w=u.bLq()
break A}if(1===r){w=u.cEE()
break A}if(2===r){w=u.czK()
break A}if(3===r){w=u.ciI()
break A}if(4===r){w=u.c18()
break A}w=u.c40()
break A}v=x.p
return B.by(A.tb,B.en(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,D.buH,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Xf,!0),A.aq)},
aMm(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc98(),p=B.n(16)
q=B.E(B.aB(r,B.p(r,D.eSC,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.aZ,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1)
p=s.Q?r:s.gbNc()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cC,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eY4)
else t.push(D.bLv)
t.push(A.ab)
t.push(D.bBU)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uk,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a5),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b1p,r,r,r,r,G.aia,r,r,r)},
aZT(){var w=null
return new B.D(T.ZC,B.B(B.a([B.aH(w,w,w,w,A.mG,w,w,w,new C.eUn(this),w,w,w,w,w,w),D.fH_,A.b8,D.bU9],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.B3,B.bm(!0,B.cq(new C.eVE(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bfy.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.ez()
m.dl(7)
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
C.ry.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m8.prototype={}
C.zH.prototype={
ag(){var w=this
return B.G(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nO.prototype={}
C.w5.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a84.prototype={}
C.arh.prototype={}
C.a0s.prototype={
S(){return new C.aHq(new B.at(A.as,$.aw()),B.jW(!0,null,!0,!0,null,null,!1),D.dCz,B.a([],x.s),B.ev([D.Id],x.Q))}}
C.aHq.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a0e(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0e=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C6(90,700,700,A.eG),$async$a0e)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a0e)
case 8:p=e
if(r.c!=null)r.m(new C.f0S(r,p,q))
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
return B.i($async$a0e,v)},
a0h(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0h=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aHy(78,n,1100,1100),$async$a0h)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bp(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fe(),$async$a0h)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cL.gcu().aK(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f0T(r,p))
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
return B.i($async$a0h,v)},
b3V(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fR(A.cG.aK(A.d.gal(d.split(","))),A.A,u,u,A.cg,A.bX,!0,u,!1,u,u)
return w}catch(v){}return D.bpI},
c1e(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cs1(C.fEz(w,this.b3V(d),f),g)},
acz(d,e,f,g,h){var w=null,v=new C.f0Q(f,e),u=new C.f0R(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bE:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.Z,w,A.aa,A.f,B.a([B.av(B.X(f?A.C1:A.NJ,A.bV,w,w,w,26),w,w,w),D.eje],x.p),w),w)
else p=this.c1e(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bLc],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0P(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aXa(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.by(B.n(8),B.fR(A.cG.aK(A.d.gal(h.split(","))),A.A,p,p,A.cg,A.bX,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bE:A.bc.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.ek,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.JB,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1t,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a5))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l_,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fI_(),$async$a8F)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f0y(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f0z(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8F,v)},
aes(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aes=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f0B(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f0C(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f0D(r))
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
return B.b(C.fDh(q,r.cx,j,new C.b1g(r.z,r.Q,r.as,r.at),new C.f0E(r),i,m,p,k),$async$aes)
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
if(r.c!=null)r.m(new C.f0F(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aes,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eI,g).w
g=B.aI(d,A.bY,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aB(h,B.p(h,D.bOq,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bc.j(0.5),A.J,24)],v),D.bYe,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f15(i),h,h,h,h,h,h,!1,A.a5),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a1t,h,h,h,i.ax?h:new C.f16(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbCa()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hx(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vT:A.ho,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w8,A.a6),h,40,h,h,h,h,h,40),A.cM,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cM,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aZS),h,h,h,h,h,h,h,h,A0.Ji,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iq,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aR4,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f17(i)
s=i.aXa(A.lw,q,r,i.gcj9(),s)
r=i.z
r=B.E(i.acz(new C.f19(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.acz(new C.f1a(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f1b(i)
s=i.aXa(A.u0,r,p,i.gcjh(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.acz(new C.f1c(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fw_,A.au,D.fyR,A.by,u,A.O,D.fxg,A.aB,v,A.by,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.acz(new C.f1d(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fAB],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bhP,A.q,1)
w=C.ah2(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bPv,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.ffd,h,h,h),B.aL(!1,h,!0,D.edM,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f1e(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.baQ,h,u,v,h,h,A.n),h,h,h,h,D.btk,h,h,h),h)],t))}o.push(A.by)
o.push(D.fmQ)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d3F[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bE,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bB(1,A.bg,new B.D(A.jr,B.aB(h,B.df(A.A,new B.y(""+l,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bd,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eJ,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f1f(i,l),h,h,h,h,h,h,!1,A.a5),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fFe)
o.push(A.O)
o.push(B.cq(new C.f1g(i)))
o.push(A.by)
o.push(D.fu7)
o.push(A.O)
w=B.a([i.b6K("auto","Let AI choose",A.dY,A.Qs)],t)
for(v=x.O,m=0;m<11;++m){j=D.wf[m]
u=j.d
w.push(i.b6K(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bU(A.bA,w,A.bq,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bc.j(0.5):A.bE,A.q,1)
o.push(B.p(h,B.iI(h,A.bc,h,h,h,new C.f18(i),D.bKE,D.fEt,h,D.fp8,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aQj,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc9c()
v=B.fq(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.eXV:A.GM
o.push(new B.a7(h,54,B.ly(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ov,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.x(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vJ,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.abJ,h,h,h,h,h,h,h,h),h)},
bOP(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f0G(this,p,d)
if(d===D.D1)return new C.aDY(p,o,q)
w=B.n(16)
v=p?E.w8:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bE,A.q,1)
s=B.X(p?A.e9:C.hKp(d),A.c,q,q,q,20)
r=C.hKq(d)
return B.aB(q,B.df(q,B.x(B.a([s,A.au,B.eQ(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e_)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bd,new B.o(u,q,t,w,q,v,A.n),A.hB,q,64,q,A.hD,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a5)},
b6K(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bE
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a3,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aB(v,B.df(v,B.B(B.a([w,M.J9,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v,v,A.bd,new B.o(s,v,r,t,v,v,A.n),A.eJ,v,v,v,M.ajs,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0V(this,d),v,v,v,v,v,v,!1,A.a5)}}
C.a0r.prototype={
S(){return new C.aHp(new B.at(A.as,$.aw()))}}
C.aHp.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
aet(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aet=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f0r(r))
w=1
break}B.eY()
r.m(new C.f0s(r))
t=4
q=C.iaN(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iax(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f0t(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h2f()
f=$.CM.h(0,k.a)
o=f==null||J.cn(f)?null:J.fs(f)
if(o==null){r.m(new C.f0u(r))
w=1
break}n=C.iav(o,r.a.c)
C.iar(r.a.c.a)
$.h1w=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h56(j)
h=C.h57(r.a.c)
e=C.h58(r.a.c)
w=7
return B.b(C.bCe(k,r.a.c.a,j,h,new C.f0v(r),i,e,a0),$async$aet)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f0w(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aet,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eI,i).w
i=B.aI(d,A.bY,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ano,A.f,j,j,D.b14,j,34,j,j,j,j,j,34),A.at,D.bAI],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Aq.a8n,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),Ar.abc),j,j,j,j,j,j,j,j,A0.Ji,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aR4,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d_T[q]
o=A.c.j(0.06)
n=k.e?j:new C.f0x(k,p)
r.push(B.mL(j,o,new B.y(p,j,Aw.TR,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v9,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bU(A.bA,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aQj,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gc9d()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bc.j(0.5),A.et.j(0.5)],x.O):D.cyK
o=B.a([new B.ac(0,A.G,A.bc.j(0.35),A.cC,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.edI:D.bP4
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eH(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hK,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.R(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.x(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vJ,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.abJ,j,j,j,j,j,j,j,j),j)}}
C.b1g.prototype={}
C.aDY.prototype={
S(){return new C.bkd(null,null)}}
C.bkd.prototype={
gaxs(){var w,v=this,u=v.d
if(u===$){w=B.bk(null,A.pY,null,1,null,v)
w.cM(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaxs().q()
this.bw1()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c7(this.gaxs(),new C.eh_(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
C.bhL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d5S[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=D.xC.j(0.25+r*0.6).gp(0)
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
C.arP.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.ZO.prototype={
S(){return new C.aBq()}}
C.aBq.prototype={
gaiy(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahf(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAg(){var w=this.e
return w===$?this.e=C.h56(this.a.c).t(0,D.D1):w},
a8s(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8s=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dki(s))
u=3
r=A.d.h1(D.wf,new C.dkj(s))
q=B.dd(C.h56(s.a.c),x.Q)
l=q
J.hy(l,D.D1)
p=l
if(s.gAg())J.cf(p,D.D1)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAg()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h57(i.c)
g=C.h58(s.a.c)
w=6
return B.b(C.bCe(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8s)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahf(q,s.gaiy())
f=q==null?null:q.b
n=f==null?s.gaiy():f
if(!J.A(n,r.a)&&!s.gAg())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dkk(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8s,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bE:A.aL,A.q,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bC,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dkn(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wf[w]
u=o.gaiy()
t=o.f?n:new C.dko(o,v)
f.push(new C.bsI(v,u===v.a,t,n))}f=B.m3(1.25,f,3,10,10,n,A.dT,!0)
u=B.n(18)
t=o.gAg()?D.c02:n
if(o.gAg())s=n
else s=m?A.bm:A.bM
r=B.X(A.dY,o.gAg()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAg()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAg()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAg()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aaB(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dkp(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.aid,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.ffx,n,n,n)],g))
f=B.cd(B.x(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FJ,n,n,A.ag)
u=o.f?n:o.gbB9()
t=B.bo(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.a0),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bwk,e,n),new B.dq(1,A.co,f,n),new B.D(A.FI,new B.a7(1/0,50,B.bG(B.eH(B.av(o.f?A.rU:D.fwt,n,n,n),n,new B.o(n,n,n,s,n,D.bZA,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tR,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bsI.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.li,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lI,w,w,B.d(v.b,w,w,w,w,w,w,D.ffv,w,w,w),w)],x.p)
if(q)v.push(D.aXt)
return B.aB(w,B.df(w,new B.an(A.Z,w,A.aa,A.r,v,w),w,w,A.bd,new B.o(w,w,p,t,s,new B.a9(A.az,A.aC,A.x,r,w,w),A.n),A.eJ,w,w,w,A.cq,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a5)}}
C.egX.prototype={
aF6(d,e,f){return e+"@"+A.a.aY(A.o.fY(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wB(d,e){return this.aF6(0,e,null)}}
C.aLZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.b1c.prototype={
B(d){var w,v,u=null,t=C.h3W(this.c)
if(t==null)w=D.boe
else{w=B.aI(d,u,x.w).w.cJG(D.bsR,D.eX5)
v=this.d
w=B.rl(B.e1(B.ao6(!1,t,!1,v,!1,390),!v,u),w)}return B.eQ(A.A,new B.a7(416,870,new C.blR(w,u),u),A.f,A.dw)}}
C.blR.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dhU[w]
u=new B.aR(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bn(u,u,u,u),t,D.apg,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dj7[w]
u=new B.aR(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bn(u,u,u,u),t,D.apg,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bW(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cQF,D.bXX,A.n),A.bf),0,0,0))
s.push(B.bW(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bW(13,B.by(B.n(51),B.en(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aXF,B.p(t,t,A.f,t,t,D.b1n,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bW(13,B.e1(B.by(B.n(51),D.bpO,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.Z,t,A.aa,A.f,s,t)}}
C.lg.prototype={
pB(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.er(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bh,j,2,"Your Presentation Title",0,0,"",D.mN,D.cS,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.er(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bh,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.df,D.cS,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rz(i,l,0,0,B.a([f,w,C.er(A.bi,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.ft,t.l(),3,"",0,0,"",D.cn,D.f5,0.3,0.35,0.72)],s),C.cC(),D.mM,"","","Welcome",D.df)
u=C.cC()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Agenda",0,0,"",D.cn,D.cS,0.84,0.08,0.08)
w=C.cC()
w=C.rz(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,22,A.bo,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bh,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uy,D.cS,0.8,0.1,0.26)],s),C.cC(),D.mM,"","","Agenda",D.df)
u=C.cC()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Main Idea",0,0,"",D.cn,D.cS,0.84,0.08,0.08)
f=C.cC()
f=C.rz(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,21,A.bo,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bh,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.cS,0.8,0.1,0.26)],s),C.cC(),D.mM,"","","Key Point 1",D.df)
u=C.cC()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bh,j,2,"Compare & Contrast",0,0,"",D.cn,D.cS,0.84,0.08,0.08)
r=C.cC()
r=C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bh,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cS,0.4,0.08,0.24)
q=C.cC()
q=C.rz(i,l,0,0,B.a([u,r,C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bh,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cS,0.4,0.52,0.24)],s),C.cC(),D.mM,"","","Key Point 2",D.df)
r=C.cC()
r=C.er(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bh,j,2,h,0,0,"",D.df,D.cS,0.8,0.1,0.32)
e=C.cC()
p=C.BO(l,l,l,l,D.CY,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rz(i,l,0,0,B.a([r,C.er(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bh,j,2,"Questions?",0,0,"",D.cn,D.cS,0.7,0.15,0.58)],s),C.cC(),D.mM,"","",h,D.df)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EK.prototype={
bB(d){return this.e.$1(d)}}
C.ew.prototype={}
C.j1.prototype={}
C.EB.prototype={
gaKV(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ah2(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3D(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.EB(v,u,t,d==null?w.d:d)},
FF(d){return this.a3D(null,d,null,null)},
aDR(d){return this.a3D(null,null,null,d)},
cJE(d,e){return this.a3D(d,e,null,null)},
bbV(d){return this.a3D(d,null,null,null)},
bc1(d){return this.a3D(null,null,d,null)}}
C.Nw.prototype={
S(){return new C.bjA(new B.eN(0,$.aw()),null,null)}}
C.bjA.prototype={
Z(){var w,v=this
v.a1()
w=v.qB(new C.dVI(v))
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
this.bvu()},
B(d){var w=C.ah2(this.a.c.a)
if(w==null)w=A.d.gI(D.H6)
return B.cq(new C.dVH(this,w,C.hk8(this.a.c.d)))}}
C.brg.prototype={
B(d){return B.nT(A.VC,this.e,new C.f_F(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.beE.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSO(d,e,v)
break
case"confetti":w.bHM(d,e,v)
break
case"crown":w.bJo(d,e,v)
break
case"aurora":w.bCe(d,e,v)
break
case"champagne":w.bFA(d,e,v)
break
case"diamonds":w.bLz(d,e,v)
break
case"starburst":w.cwB(d,e,v)
break
case"balloons":w.bCs(d,e,v)
break
case"galaxy":w.bQC(d,e,v)
break
case"redcarpet":w.cnu(d,e,v)
break
case"coins":w.bH8(d,e,v)
break
case"lanterns":w.c_P(d,e,v)
break
case"hearts":w.bYr(d,e,v)
break
case"petals":w.ciz(d,e,v)
break
case"butterflies":w.bEy(d,e,v)
break
case"neon":w.c3L(d,e,v)
break
case"disco":w.bLK(d,e,v)
break
case"sunrise":w.cyf(d,e,v)
break
case"pearls":w.chD(d,e,v)
break
case"snow":w.cwg(d,e,v)
break
case"laurel":w.c_V(d,e,v)
break
case"ribbons":w.cq1(d,e,v)
break
case"kente":w.c_D(d,e,v)
break
case"trophy":w.cBY(d,e,v)
break
case"shooting":w.cu5(d,e,v)
break
case"bokeh":w.bCN(d,e,v)
break
case"orbits":w.cfg(d,e,v)
break
case"flowers":w.bPS(d,e,v)
break
case"music":w.c3t(d,e,v)
break
case"mandala":w.c1V(d,e,v)
break
case"sparklers":w.cwp(d,e,v)
break
case"city":w.bGp(d,e,v)
break}},
rF(d,e,f,g,h){var w,v,u,t,s
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
u.F(new B.cQ(w,t,w+f,t))
u.F(new B.cQ(w,t,w,t+f))
u.F(new B.cQ(w,t,w-f,t))
u.F(new B.cQ(w,t,w,s))
u.F(new B.bE())
d.aQ(u,v)
d.ae(e,f*0.18,v)},
lP(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.rF(d,new B.u(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aSO(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lP(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aE],w),B.a([A.i4,A.bD],w),B.a([A.ez,A.aM],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bk(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cZ(h,1))
f=g+c0*(C.cZ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cZ(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.kv(new B.u(g,c1),new B.u(f,e),A.cu.az(0,i/0.22))
a0.toString
$.W()
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.saq(new B.a9(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rC(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bQ
a2=B.kv(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cu.az(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cZ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
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
$.W()
b9=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bQ
b9.a=A.nK
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cZ(h,b1+120)>0.5)this.rF(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHM(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a9(A.az,A.aC,A.x,D.dcs,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a8(0,0,f,e)))
a1.aX(new B.a8(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a3*(0.8+C.cZ(u,4))+u)
q=h*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a3*(2+3*C.cZ(u,6))+u)
o=D.PU[A.o.D(A.k.bk(C.cZ(u,7)*5),0,4)]
J.bv(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
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
t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cB(m.gbI().a.snapshot()):t).a,k)
k.delete()}else{t=B.c9(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lP(a1,a2,a3,25,A.bL,30)},
bJo(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
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
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bcI],v),a4,a4).av(0,B.bQ(w,u)))
l=o.H()
o=m.gbI().a.snapshot()
t.drawPath((m.e=new B.cB(o)).a,l)
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
n.saq(new B.a9(A.b1,A.b5,A.x,D.db9,a4,a4).av(0,new B.a8(a5,a6,o,v)))
a8.aQ(i,n)
for(v=[D.etb,D.emC,D.eCt],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.hO.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xg(i),u=B.a([],x.X),o=new B.vH(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.k1(y.M));--f
o.jC()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cx([new B.Hv(o,f),0,d*h,!0]),B.a([],r))
f=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
f.b=A.ae
f.c=g
f.e=A.fG
f.r=A.bL.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cB(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rF(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lP(a8,a9,b0,45,A.bL,40)},
bCe(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lP(a8,a9,b0,60,A.c,50)
w=[D.eNX,D.eNF,D.eNz,D.eOV]
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
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nK
n.z=new B.hC(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cB(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nK
n.z=new B.hC(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cB(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cZ(a4,1))+C.cZ(a4,2)*a3,a3)
r=C.cZ(a4,3)
q=Math.sin(b0+a4)
p=C.cZ(a4,4)
$.W()
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=A.vu.j(0.4+0.5*C.cZ(a4,5)).gp(0)
n.a=A.nK
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFA(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.hN.j(0.25+0.1*h),D.Xp],x.O),l,l).av(0,B.bQ(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
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
a0=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.b=A.ae
a0.c=h
a0.r=D.PU[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cB(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*o,o)
r=k*(0.1+0.8*C.cZ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cZ(w,4))
if(n<f){this.rF(a1,new B.u(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xr.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLz(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lP(a9,b0,b1,30,A.kU,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cZ(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bv(v.save())
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
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.saq(new B.a9(A.az,A.aC,A.x,D.d6T,a5,a5).av(0,B.c9(A.J,k*1.2,o)))
a2=g.H()
g=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cB(g)).a,a2)
a2.delete()
a3=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
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
if(a4>0.85)this.rF(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cwB(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cB(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bk(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bpb.az(0,k)*(0.5+0.5*C.cZ(t,v)))
this.rF(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.PU[A.o.D(A.k.bk(C.cZ(t,4)*5),0,4)],u)}},
bCs(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cZ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cZ(o,2))+C.cZ(o,3)*m,m)
j=C.cZ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aws[A.o.E(o,6)]
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
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cB(f.gbI().a.snapshot()):d).a,a1)
a1.delete()
a2=B.c9(new B.u(j,k),n*2.3,l)
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d=B.ar(i,A.w,0.35)
d.toString
l.saq(new B.bS(D.aXI,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.awj,a3).av(0,a2))
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
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cB(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cZ(o,11))+C.cZ(o,12)*m,m)
r=C.cZ(o,13)
J.bv(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.c9(A.J,t,v)
$.W()
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=D.aws[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bQC(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lP(b1,b2,b3,50,A.c,70)
for(w=[D.eO4,D.eNL,D.eNR],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bQ(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cZ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cZ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eD,g)
k.toString
d=C.cZ(i,3)
$.W()
a0=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.r=k.j(0.5+0.5*C.cZ(i,4)).gp(0)
a0.a=A.nK
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.xr.j(0.55),D.afT],u),a4,a4).av(0,B.bQ(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bk(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cZ(a2,9)),a6*0.1*C.cZ(a2,8))
a5=B.kv(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kv(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rC(a3,a5)))
a8.c=a7*0.005
a8.d=A.bQ
b1.bF(a6,a5,a8)}},
cnu(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.saq(new B.bS(A.A,0.5,A.x,b5,0,B.a([A.xr.j(0.28),D.afT],w),b5,b5).av(0,B.bQ(new B.u(q,u),t)))
o.a=A.nK
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cB(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eu:A.ey)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cQ(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a9.saq(new B.a9(A.a3,A.a8,A.x,a7,b5,b5).av(0,new B.a8(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cB(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
b1.r=A.hN.gp(0)
b1.c=o
b1.d=A.bQ
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
v.saq(D.bZt.av(0,new B.a8(0,w,0+b6,w+b7*0.22)))
b9.aQ(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cZ(r,1))+C.cZ(r,2)*b3,b3)
u=C.cZ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rF(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cZ(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bH8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cZ(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cZ(t,2))+C.cZ(t,3)*r,r)-q
o=C.cZ(t,4)*i
n=Math.cos(f*(2+3*C.cZ(t,5))+t)
m=Math.abs(n)
l=B.c9(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
q.saq(new B.a9(A.az,A.aC,A.x,n>0?D.dmy:D.cEv,null,null).av(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.blZ.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a8(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rF(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lP(d,e,f,30,A.bL,110)},
c_P(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lP(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cZ(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
h.saq(new B.bS(A.A,0.5,A.x,d,0,B.a([V.XC.j(0.45*k),D.aeJ],u),d,d).av(0,B.bQ(new B.u(l,m),j)))
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
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i=B.ar(D.bcT,A.c,0.2*k)
i.toString
j.saq(new B.a9(A.b1,A.b5,A.x,B.a([D.bhr,i],u),d,d).av(0,B.c9(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cB(j)).a,g)
g.delete()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bYr(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bv(v.save())
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
f=D.cYN[A.o.E(p,5)]
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l=B.ar(f,A.w,0.25)
l.toString
m.saq(new B.bS(A.t8,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a2D,d).av(0,B.bQ(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cB(m)).a,e)
e.delete()
v.restore()}this.lP(a3,a4,a5,30,A.i4,130)},
ciz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cZ(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bv(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cQ(p,l,0,p))
m.push(new B.cQ(n,l,0,n))
m.push(new B.bE())
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
m=(q&1)===0?D.cyJ:D.d8c
n.saq(new B.a9(A.a3,A.a8,A.x,m,i,i).av(0,B.bQ(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cB(n)).a,j)
j.delete()
v.restore()}this.lP(d,e,a0,25,A.bL,140)},
bEy(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lP(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bv(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bv(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pH(f,e,l,d,h,0))
a3.push(new B.pH(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.saq(new B.a9(A.a3,A.a8,A.x,i?D.d7W:D.daC,a6,a6).av(0,new B.a8(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cB(a2)).a,a5)
a5.delete()
a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AY.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cB(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=D.blh.gp(0)
p.c=q*0.1
p.d=A.bQ
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c3L(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.c=v
q.r=D.axx[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bu(B.c9(e,r,r*1.6),new B.aR(p,p))
o=q.H()
u.drawRRect(B.eA(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cZ(m,1)*4)+m)))
k=D.axx[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bu(new B.a8(j,i,j+w,i+l),new B.aR(v,v))
$.W()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.ab0,p)
o=j.H()
u.drawRRect(B.eA(i),o)
o.delete()}},
bLK(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cZ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cZ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nP,A.ds][A.o.E(p,4)]
j=C.cZ(p,3)
$.W()
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=k.j(0.75).gp(0)
i.a=A.nK
i.z=new B.hC(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bF(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dt.gp(0)
a3.ae(v,u,t)
J.bv(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.jS(B.bQ(v,u)))
a3.pE(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a8(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rF(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cyf(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.az(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.bL.j(0.1).gp(0)
o=r.H()
r=p.gbI().a.snapshot()
w.drawPath((p.e=new B.cB(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bS(A.A,0.5,A.x,h,0,B.a([D.b8S.j(0.6),D.aeJ],x.O),h,h).av(0,B.bQ(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.ek4.av(0,B.bQ(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cZ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.c.j(0.18).gp(0)
i=B.c9(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.c9(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lP(a2,a3,a4,20,A.hO,180)},
chD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=B.ar(A.cA,A.jf,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cB(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cZ(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cZ(i,2))+C.cZ(i,3)*j,j)
n=C.cZ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.saq(new B.bS(Am.pv,0.5,A.x,f,0,D.de6,f,f).av(0,B.bQ(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lP(a1,a2,a3,25,A.c,190)},
cwg(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cZ(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.W()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bQ
J.bv(v.save())
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
h.delete()}v.restore()}this.lP(d,a0,a1,40,A.ez,200)},
c_V(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dh(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bv(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.c9(new B.u(p,0),q,r)
$.W()
f=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
f.saq(D.bZg.av(0,new B.a8(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bda.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rF(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lP(a3,a4,a5,40,A.bL,210)},
cq1(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hN,A.hO],a6),B.a([A.oM,A.i4],a6),B.a([A.aF,A.eD],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dx(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
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
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k=a7[m]
h=k[0]
l.saq(new B.a9(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.ax9,new B.mq(w)).av(0,new B.a8(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cB(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lP(a8,a9,b0,40,A.c,220)},
c_D(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bk(g/t),5)
a1=g+t
$.W()
a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a3=Math.abs(a0)
a2.r=D.a2G[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a8(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a5.r=D.a2G[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a8(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a6,a6)
v=C.cZ(a0,3)
t=C.cZ(a0,4)
this.rF(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a2G[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cBY(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.c=v
p.r=A.bL.j(0.06).gp(0)
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
l.F(new B.cQ(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cQ(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.c9(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.b=A.ae
d.c=q
d.r=A.ay.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a9(A.a3,A.a8,A.x,D.dgD,A.awz,null).av(0,new B.a8(v,a2,r,j)))
a4.aQ(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rF(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHN(a4,a5,a6,60)},
bHN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bv(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.c9(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=D.PU[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
cu5(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lP(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cZ(o,1)*1.6
m=A.k.E(a2+C.cZ(o,2)*n,n)/n
l=e*(C.cZ(o*7+A.k.bk((a2+C.cZ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.saq(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).av(0,B.rC(new B.u(l,h),i)))
g.c=r
g.d=A.bQ
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rF(a0,i,p,A.c,1-m)}},
bCN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cZ(r,1))
p=A.k.E(C.cZ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cZ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l=A.o.E(r,5)
m.r=D.az6[l].j(n).gp(0)
m.a=A.nK
m.z=new B.hC(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.az6[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cfg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bv(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.c9(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.b=A.ae
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c_(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.hO.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.hN.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lP(d,e,f,45,A.bL,270)},
bPS(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cZ(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.E(a7+C.cZ(o,2)*4,4)/4
j=A.ev.az(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.d52[A.o.E(o,5)]
J.bv(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.c9(new B.u(0,l),i,j)
$.W()
a0=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a0.saq(new B.a9(A.b1,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.c9(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.hN.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lP(a5,a6,a7,30,A.hO,280)},
c3t(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bQ(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.b=A.ae
j.c=v
j.r=D.avE[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cZ(g,1))+C.cZ(g,2)*h,h)
e=C.cZ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cZ(g,4))
a0=D.avE[A.o.E(g,4)]
$.W()
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=a0.gp(0)
J.bv(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.c9(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c_(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c1V(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bv(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cQ(h,m,0,g))
a0.push(new B.cQ(j,m,0,i))
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.b=A.ae
d.c=t
d.r=B.ar(A.bL,A.nP,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbI().a.snapshot()
v.drawPath((a1.e=new B.cB(d)).a,a2)
a2.delete()
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=A.hO.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.hN.j(0.25),D.Xp],x.O),a3,a3).av(0,B.bQ(w,a4)))
a7.ae(w,a4,a5)
this.lP(a7,a8,a9,30,A.bL,300)},
cwp(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bQ
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.saq(new B.bS(A.A,0.5,A.x,null,0,B.a([A.hO,A.hN.j(0.6),D.Xp],o),null,null).av(0,B.bQ(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.k.E(b2+C.cZ(f,2)*e,e)/e
a0=A.k.bk((b2+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cZ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a6.r=B.ar(A.hO,A.aE,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bQ
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
g.delete()}}}this.lP(b0,b1,b2,35,A.bL,310)},
bGp(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSO(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cZ(n,1))
l=a8*(0.14+0.24*C.cZ(n,2))
k=a8-l
j=new B.a8(o,k,o+m,k+l)
$.W()
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.saq(D.c_c.av(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bk(m/q)
f=A.k.bk(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cZ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a6.r=A.bL.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a8(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.b_7.prototype={
B(d){var w,v=null,u=new C.c9Z(),t=new C.ca0(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aop,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ca_(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.H6[w]))
return B.bU(A.bA,s,A.bq,12,10)}}
C.Zm.prototype={
S(){return new C.azO()}}
C.azO.prototype={
gvG(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZY(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.at(new B.bb(w.b,A.b4,A.aO),$.aw())}return v},
gaxt(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKV()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.at(new B.bb(w,A.b4,A.aO),v)}return t},
q(){var w=this.gaZY(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gaxt()
w.T$=v
w.P$=0
this.a2()},
a_4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C6(90,700,700,A.eG),$async$a_4)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a_4)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahZ(o,".png")?"image/png":"image/jpeg"
r.m(new C.d9u(r,n,p))
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
return B.i($async$a_4,v)},
aZX(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.a8z,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ah2(p.gvG().a)
if(n==null)n=A.d.gI(D.H6)
w=p.gvG()
v=p.r
u=x.p
v=B.E(new B.an(A.Z,o,A.aa,A.r,B.a([B.bW(0,new C.Nw(p.gvG(),!1,!0,new B.cy(w.a+v,x.W)),0,0,0),B.ao(o,B.HQ(A.mG,new C.d9z(d),B.nE(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HQ(D.bJy,new C.d9A(p),B.nE(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aR3,o,o,o)
t=B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZY(0),o,o,o,o,o,2,p.aZX("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d9B(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hv,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hN.j(0.6),A.q,1)
if(p.gvG().d.length===0)q=D.bMU
else{q=C.hk8(p.gvG().d)
if(q==null)q=new Uint8Array(0)
q=B.i_(B.fR(q,A.A,o,o,A.cg,A.bX,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc9e(),o,o,o,o,o,o,!1,A.a5)],u)
if(p.gvG().d.length!==0)r.push(B.aH(o,o,o,o,D.a1t,o,o,o,new C.d9C(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaxt(),o,o,o,o,o,2,p.aZX("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d9D(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bLN,D.fG9,new C.d9E(p,d),B.bo(A.ay,o,o,o,A.w,o,A.cm,o,new B.b7(B.n(14),A.a0),o,o,o))],u),A.ai,o,A.e,A.N,0,A.p),A.f,o,o,D.b1z,o,o,o,o,A.FF,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLs.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.ZH.prototype={
S(){return new C.bg7(new B.at(A.as,$.aw()))}}
C.bg7.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bY,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bE:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.dgh(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cQ6[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aR(12,12)
q=new B.aR(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bn(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pn,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bn(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dgi(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hC,new B.y(v.a.toUpperCase(),o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Co(A.bA,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aS1,new C.dgj(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dq(1,A.co,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tR,A.Zi,o,o,o),!0,!1,A.af,!0,!0)}}
C.bfv.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.ez()
a2.dl(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Ry
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aw(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.aj()<0.25){f=B.ar(r,A.c,0.85)
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
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
au(d){return d.b!==this.b}}
C.bfc.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bu(new B.a8(0,0,0+a7.a,0+a7.b),A.kj),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lA
a6.aE(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iN(a1))
v=new B.SA(new B.vH(B.xg(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jC()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.E(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.b=A.ae
j.d=A.bQ
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cx([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cB(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cx([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cB(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cx([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cB(f)).a,g)
g.delete()}}a4.jC()
e=u[a3].MU(n).a
$.W()
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=w.gp(0)
k.z=A1.mL
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.bo6.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.ez()
e.dl(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hi()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gamz()*1.4
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
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.saq(B.aV9(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jx
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cB(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.ba6.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.ez()
a0.dl(this.c*7+3)
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
f=e}$.W()
e=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
e.r=f.j(g).gp(0)
e.z=new B.hC(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
e.b=A.ae
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.b9K.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.ez()
a0.dl(this.c+11)
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
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.b=A.ae
i.c=r
i.d=A.bQ
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cB(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.bv3.prototype={
a3(d,e){var w,v,u=new B.a8(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bS(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cXz,null).av(0,u))
d.aX(u,w)
w=u.ct(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jx
d.aX(w,v)},
au(d){return d.b!==this.b}}
C.bs3.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bk(d)*7,p=0;p<7;++p){o=new B.ez()
o.dl(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.W()
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=j.gp(0)
i.c=1.4
i.d=A.bQ
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
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hC(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.brc.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a8(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nK
v.saq(new B.a9(A.az,A.aC,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aX(w,v)},
au(d){return d.b!==this.b}}
C.bex.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdt(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bQ
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rA
r=new C.d9b(this,r*0.16,d,u,w)
t=e.gdt()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xG.prototype={}
C.IQ.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.arg.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uO.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.my.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eM.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdO(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hYr(v.z))
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
C.lI.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,eM>")
n=B.C(new B.M(n,new C.cfp(),m),m.k("ak.E"))
return C.rz(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,a6<m,@>>")
n=B.C(new B.M(n,new C.cfq(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i5.prototype={
gbaf(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gSl(){if(!C.kA(this.w))return!1
var w=this.gbaf()
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
q=B.S(r).k("M<1,lI>")
r=B.C(new B.M(r,new C.cfe(),q),q.k("ak.E"))
return C.BO(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
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
w=B.C(new B.M(w,new C.cff(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jH.prototype={}
C.b1f.prototype={
B(d){return B.cq(new C.cfk(this))}}
C.aor.prototype={
S(){return new C.bjk(null,null)}}
C.bjk.prototype={
gaZZ(){var w,v=this,u=v.d
if(u===$){w=B.bk(null,A.fZ,null,1,null,v)
w.cM(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZZ().q()
this.bve()},
B(d){return B.c7(this.gaZZ(),new C.dHW(),this.a.c)}}
C.aLd.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.adt.prototype={
PX(d,e,f,g){return this.bPy(d,e,f,g)},
bPy(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PX)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d8)
n.push(B.B(B.a([B.E(new C.adL(A.hF,"Download",A.c0,new C.etr(w,d),!0,v),1),A.at,B.E(new C.adL(A.vV,"Share",A.bj,new C.ets(w,d),!1,v),1),A.at,B.E(new C.adL(A.hp,"Safari",A.b0,new C.ett(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.etu(d),v,v))
return B.bm(!0,new B.D(A.q1,B.x(B.a([B.p(v,B.x(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.j_,v,t,u,s,v,A.n),v,v,v,v,A.FM,v,v,1/0)],m),A.m,v,A.e,A.N,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adL.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eH(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.byH,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b1d.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqs(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.c9f().akK(1.35)
s=B.avI(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAK(v)
if(i.e&&i.w!=null)q=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bUY,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cy("slide_tf_"+g.a,x.W),h,A.wA,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zP,A.an,h,A.TJ,h,h)
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
w=n?t.cJr(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eH:A.Dy
p=B.d(f,new B.cy("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.TA:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fG
j.r=A.aw.gp(0)
j=i.cq4(p,t,k,j)
k=g.r
w=new B.an(A.Z,h,A.aa,A.r,B.a([j,i.cq2(k,t,l?A.TA:s)],x.p),h)}else w=i.cq3(p,t,g.k2?A.TA:s,m)
v=new B.nj(w,new B.cy("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.c7,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a5)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bZ6()
case 3:return i.chC()
case 2:return B.b3(h,h,h,new C.b1a(g,h),A.f6)
case 5:g=g.r
return new C.b1c(g,!i.e&&i.z==null,h)}},
c9f(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k7
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cS(D.aeH,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.aw
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mR
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cS(A.bD,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cS(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cS(A.b7,new B.u(-3*v,0),0),new B.cS(A.av,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cS(A.ct,A.J,8*v),new B.cS(A.av,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=V.EB
break
case"ice":v=o.d
e=B.a([new B.cS(A.aM,A.J,10*v),new B.cS(A.cA,A.J,22*v)],x.r)
k=A.P
w=A.ez
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k7
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cZz[q]
u.push(new B.cS(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bXE.av(0,new B.a8(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.KS,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bXZ.av(0,new B.a8(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cS(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cS(l.j(0.45),new B.u(u,u),0),new B.cS(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k7
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azq(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eUa.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cfi(h)
v=r.k2?C.ia6(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eH:A.Dy
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XT(B.cX(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cq4(d,e,f,g){return this.azq(d,e,f,!1,g)},
cq2(d,e,f){return this.azq(d,e,f,!1,null)},
cq3(d,e,f,g){return this.azq(d,e,f,g,null)},
bAK(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bZ6(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.la?A.GH:A.BL,A.aA,t,t,t,32),t,t,t)}w=u.bDM(r)
if(s.b===D.la){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cs,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aO3(r,!0)
return C.fEz(s.go,v,s.id)}return w},
aO3(d,e){var w,v,u,t
try{w=C.iap(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cq(new C.cfh(this,w,v,e))
return u}catch(t){return D.aco}},
bDM(d){return this.aO3(d,!1)},
chC(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b6R
return C.iaH(v,w.db,w.dx)}}
C.b1a.prototype={
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
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.hL(s,g)
d.hL(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
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
d.aQ(r,g)
d.aQ(r,w)
break
case 4:h=t/2
w.c=v+2
d.bF(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
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
d.aQ(r,g)
d.aQ(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIP.prototype={
S(){return new C.buA(null,null)}}
C.buA.prototype={
Z(){var w,v=this
v.a1()
w=B.bk(null,A.ip,null,1,null,v)
w.cM(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bxx()},
aOe(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAY(){var w,v=this,u=null,t=v.aOe("Slide A",A.bj),s=v.aOe("Slide B",A.b0)
if(v.a.c===D.cn)return new B.an(A.Z,u,A.b2,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.f8c(v,s,t),u)},
B(d){return this.bAY()}}
C.aJr.prototype={
jg(d){return new B.a8(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jV(d){return d.b!==this.b}}
C.V2.prototype={
S(){return new C.bjx(null,null)}}
C.bjx.prototype={
Z(){var w,v,u=this
u.a1()
w=B.bk(null,A.Bc,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bM(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTV(u),x.a)},
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
else B.bM(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTU(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvt()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.dTT(this),v.d)}}
C.IP.prototype={
B(d){return B.cq(new C.cfa(this))}}
C.azy.prototype={
S(){return new C.be0()}}
C.be0.prototype={
Z(){this.a1()
if(this.a.c!==D.cn)B.bM(A.Mg,new C.d6q(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.V2(C.er(A.bi,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bh,o,2,"",0,0,"",u,D.f5,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cc,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cy("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bi,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bh,o,2,"Element flies in",0,0,"",q.a.c,D.cS,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.Z,p,A.aa,A.r,B.a([w,B.ao(32,new C.V2(t,B.p(p,D.frM,A.f,p,p,new B.o(s,p,B.I(A.aZ,A.q,1),r,p,p,A.n),p,p,p,p,A.jq,p,p,1/0),!0,1,new B.cy("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b28,A.bf)}}
C.a7N.prototype={
S(){return new C.bkb(null,null)}}
C.bkb.prototype={
gb_w(){var w=this.a
if(w.e)w=D.eUj.t(0,w.c)||D.aOe.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a1()
if(v.gb_w()){w=C.i8M(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bk(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bw_()},
B(d){var w,v=this,u=v.d
if(!v.gb_w()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.egG(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_a.prototype={
B(d){var w=null
return B.av(C.b1e(!0,w,!1,C.er(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bh,4280172719,2,"Aa",0,0,this.c,D.cn,D.cS,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bfa.prototype={
jg(d){return C.a2s(this.b,new B.a8(0,0,0+d.a,0+d.b).ct(-this.c))},
jV(d){return d.b!==this.b||d.c!==this.c}}
C.bq9.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a8(0,0,0+a1.a,0+a1.b).ct(-this.d),g=this.b,f=C.a2s(g,h),e=a1.gdt(),d=new C.eYi()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aPM.av(0,h))
a0.aQ(f,w)
g=C.a2s(g,h.ct(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.blL.gp(0)
a0.aQ(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.f3m.av(0,h))
a0.aQ(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aQ(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aQ(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.f3k.av(0,h))
a0.aQ(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aQ(f,w)
g=C.a2s(g,h.ct(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aQ(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aQ(f,g)
g=d.$1(e*0.016)
g.r=A.oN.gp(0)
a0.aQ(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.f3f.av(0,h))
a0.aQ(f,w)
w=C.a2s(g,h.ct(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bak.gp(0)
a0.aQ(w,v)
g=C.a2s(g,h.ct(e*0.03))
v=d.$1(e*0.004)
v.r=D.bcX.gp(0)
a0.aQ(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aPM.av(0,h))
a0.aQ(f,g)
for(g=B.xg(f),w=B.a([],x.X),g=new B.vH(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.k1(y.M));--q
g.jC()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bk(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jC()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jC()
m=w[q].MU(p*n/o).a
l=D.cWT[A.o.E(n,4)]
$.W()
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.saq(D.f3o.av(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aQ(f,g)
g=d.$1(e*0.018)
g.saq(D.f3l.av(0,h))
a0.aQ(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aQ(f,w)
g=C.a2s(g,h.ct(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nT.gp(0)
a0.aQ(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.br9.prototype={
a3(d,e){d.FV(C.a2s(this.b,new B.a8(0,0,0+e.a,0+e.b).ct(-this.c)),A.w,e.gdt()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aLr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.aNj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.a85.prototype={}
C.NY.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aEo(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge2(){return this.c},
gTG(){return this.r},
gTH(){return this.w},
gLF(){return this.x}}
C.aEo.prototype={
Z(){var w,v=this
v.a1()
$.aW.bY$.push(v)
C.fJv()
$.hrO=new C.ezF(v)
w=B.bk(null,A.B9,null,1,null,v)
w.fh(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Is()},
bv(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Oy(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Is()}},
j8(d){if(d===A.Ah||d===A.ta||d===A.t9||d===A.pw)this.tC()},
q(){var w,v,u,t=this
$.aW.hQ(t)
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
if(u!=null)u.bP(0)
v.hb()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bwd()},
gabA(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOS(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ac4(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSl())return!1
return!0},
kl(){return this.ac4(null)},
aiR(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.f1D)},
qk(){if(!this.kl())return!1
this.aiR()
return!0},
aqZ(d){var w,v,u,t,s,r=this
if(r.ac4(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hqV(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zV(){return this.aqZ(null)},
Is(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Is=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.ari(k),$async$Is)
case 3:j=e
w=4
return B.b(C.apU(k),$async$Is)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fZ0(j,t.c1_())
w=t.gabA()?5:7
break
case 5:r=t.gOS()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_o(r),$async$Is)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.br(s,new C.ew2())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.br(s,new C.ew3())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yK(m==null?"":m)!=null)continue
C.fJH(n,s)
p=!0}t.m(new C.ew4(t,s))
if(p||s.length>J.ad(j))t.tC()
case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
c1_(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kA(w)&&w!==q}if(w)p.push(r)
return p},
cot(d){var w,v=this,u=d.w
if(!C.kA(u)||u==="hati_kiapo_uongozi")return
v.aan(d)
w=A.d.bg(v.d,new C.exD(d))
u=v.d
if(w>=0){u[w]=d.hK()
v.d[w].f=new B.T(Date.now(),0,!1)}else A.d.c9(u,0,d.hK())
v.db=!1},
ciy(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kA(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cot(t)
s=u.d
w=B.S(s)
v=w.k("cP<1,i5>")
s=B.C(new B.cP(new B.a_(s,new C.exr(),w.k("a_<1>")),new C.exs(),v),v.k("J.E"))
return s},
Oy(d){return this.bPW(d)},
tC(){return this.Oy(null)},
bPW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Oy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ciy()
w=3
return B.b(C.W1(d==null?t.a.c:d,s),$async$Oy)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqZ(r)?4:5
break
case 4:w=6
return B.b(C.a7j(r),$async$Oy)
case 6:q=r.x
p=A.a.i(q==null?t.gOS():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.evq())
q=t.d
if(o>=0)q[o]=r.hK()
else A.d.c9(q,0,r.hK())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oy,v)},
po(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kA(u.w))===!0?A.hB:A.lU
v.at=B.cM(w,new C.eyL(v))},
b__(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afg(u.hK(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cCe(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afg(w.e.hK(),w.f,w.r))
w.m(new C.ezB(w,v.pop()))
w.po()},
cnz(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afg(w.e.hK(),w.f,w.r))
w.m(new C.exB(w,v.pop()))
w.po()},
oi(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.ezo(u))
if(w>=0){u.d[w]=u.e.hK()
u.d[w].f=new B.T(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.T(Date.now(),0,!1)},
XC(d){var w,v,u,t,s=this.gdv()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xy(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bP(0)
u.hb()}w.a8(0)},
Kb(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdv()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cP<1,m>")
t=B.dd(new B.cP(new B.a_(w,new C.ezp(),v.k("a_<1>")),new C.ezq(),u),u.k("J.E"))
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
if(o!=null)o.bP(0)
p.hb()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cS)continue
p=n.a
m=w.ca(0,p,new C.ezr(n))
s.ca(0,p,new C.ezs())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
HL(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.euP(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOS()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hK())}u.oi()
u.po()},
ajc(d,e){var w,v,u,t,s=this
if(s.kl())return
w=s.XC(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kA(v.w))===!0
if(u){C.i8Q(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdv()
if(t!=null)C.i8R(t,w.d+w.f*0.5)}}s.HL()
s.oi()
s.po()
if(u&&s.c!=null)s.m(new C.ezC())},
cDi(d,e){var w=this,v=w.gdv()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HL()
w.oi()
w.po()},
gdv(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqp(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i6S(o)
if(w!=null)return w
v=q.gdv()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bZl(v)
t=q.bZk(v)
s=B.b0(v.e)
r=v.f
return new C.jH(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hKB(o)},
bZl(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cS)s=t.w>=28||A.o.D(A.o.am(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bZk(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cS&&t.w<28)return B.b0(t.Q)}return A.aJ},
af7(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabA()){w.c.K(x.q).f.U(D.f0e)
return}w.aan(d)
w.b0c(C.bCf(d))
return}if(C.cg2(v)){w.aan(d)
w.b0c(d)
return}w.m(new C.ewK(w,d))},
arz(){var w,v,u,t,s,r,q=this
q.a2b(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kA(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.euN(q))
if(r&&q.c!=null){u.toString
q.JL(u,s)}return}q.tC()
q.m(new C.euO(q))},
b0b(d){this.aan(d)
this.a_F(d,!0)},
aan(d){if(!C.kA(d.w))return
C.fJH(d,this.d)},
a_F(d,e){return this.ces(d,e)},
b0c(d){return this.a_F(d,!1)},
ces(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_F=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bCf(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOS():r)
t.dy.W(0,q.toLowerCase())
C.apV(t.a.c,q)}r=s}else r=d
w=C.cg2(r.w)?3:4
break
case 3:w=5
return B.b(t.aao(r),$async$a_F)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.ex6(l))
o=l.a.hK()
n=C.kA(o.w)&&C.ia1(o)
t.m(new C.ex7(t,o,p))
if(n){m=A.d.bg(t.d,new C.ex8(o))
if(m>=0){t.d[m]=o.hK()
t.tC()}}if(!t.ac4(l.a))t.YM()
r=!1
if(t.c!=null)if(!t.ac4(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqZ(r)&&C.fFK(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.f0P)
case 1:return B.h(u,v)}})
return B.i($async$a_F,v)},
aao(d){return this.bO3(d)},
bO3(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aao=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lk(r.c,A.zx),$async$aao)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kY(!1,r,s.c,s.d,null,A.zx,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aao,v)},
o9(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cg2(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cfs(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o9,v)},
aeP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.ewJ(),s,null,!0,!0,x.H),$async$aeP)
case 3:if(t.c==null){w=1
break}t.arz()
case 1:return B.h(u,v)}})
return B.i($async$aeP,v)},
aeO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.ewG(),s,null,!0,!0,x.H),$async$aeO)
case 3:if(t.c==null){w=1
break}t.m(new C.ewH())
t.arz()
case 1:return B.h(u,v)}})
return B.i($async$aeO,v)},
YM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$YM)
case 3:r=e
if(B.jO(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$YM)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eZR)
case 1:return B.h(u,v)}})
return B.i($async$YM,v)},
JL(d,e){return this.coU(d,e)},
coU(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JL=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agE(s,t.gEs(),t.gEr(),!0,e,t.d),$async$JL)
case 9:w=4
break
case 6:w=10
return B.b(C.agF(s,t.gEs(),t.gEr(),!0,e,t.d),$async$JL)
case 10:w=4
break
case 7:w=11
return B.b(C.agG(s,t.gEs(),t.gEr(),!0,e,t.d),$async$JL)
case 11:w=4
break
case 8:w=12
return B.b(C.agH(s,t.gEs(),t.gEr(),!0,e,t.d),$async$JL)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JL,v)},
c_T(){var w,v,u,t,s=this
if(!s.gabA()){s.c.K(x.q).f.U(D.f_3)
return}w=s.gOS()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agD(u,t,v,new C.evZ(s),new C.ew_(s),w)},
af8(){var w=0,v=B.j(x.H),u=this,t,s
var $async$af8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dH,null,new C.ewQ(u),s,!0,!0,!1,A.lC,!1,!1,x.N),$async$af8)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agH(s,u.gEs(),u.gEr(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agE(s,u.gEs(),u.gEr(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agF(s,u.gEs(),u.gEr(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agG(s,u.gEs(),u.gEr(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_T()
return B.h(null,v)}})
return B.i($async$af8,v)},
cdz(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b__()
w=C.cC()
v=C.BO(t,t,t,t,D.CY,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.ewR(u,v))},
a9O(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iex(s),$async$a9O)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.euR())
t.d4(new C.euS(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9O,v)},
ah6(d,e,f,g){var w=null,v=g?A.dn:A.bM,u=B.I(g?A.aZ:A.cs,A.q,1)
return B.hx(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a5),w,e,w,w)},
a_E(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qk()){w=1
break}s=t.jY()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.ex1(),q),q.k("J.E"))}o=s!=null&&s.b===D.lB?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.f1_)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.ex2(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_E)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_E,v)},
afp(){return this.cer()},
cer(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iej(s,t.f+1,o),$async$afp)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kI(s,B.S(s).c)
p.a=A.d.bg(o.r,new C.ex4(q))
t.d4(new C.ex5(p,t,o,q,r))
t.c.K(x.q).f.U(D.f1o)
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
afw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()||!t.zV()){w=1
break}s=t.gdv()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("a_<1>")
p=B.C(new B.a_(r,new C.exm(),q),q.k("J.E"))
if(p.length===0){t.c.K(x.q).f.U(D.eZC)
w=1
break}o=new B.M(p,new C.exn(),B.S(p).k("M<1,K>")).ff(0,new C.exo())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.at(new B.bb(l,A.b4,A.aO),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.K,null,new C.exp(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afw)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.exq())
case 1:return B.h(u,v)}})
return B.i($async$afw,v)},
afb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qk()){w=1
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
return B.b(C.hsZ(s,new C.EB(r,q,p,o==null?"":o)),$async$afb)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.ewS(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ah2(r)
r=B.v(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afb,v)},
aah(){return this.bNp()},
bNp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aah=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iew(s,t.f+1,l),$async$aah)
case 3:r=e
q=$.h1w
$.h1w=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.ev7())
t.c.K(x.q).f.U(D.eZt)
w=1
break}if(!q){s=r.CW
s=C.hrM(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.ev8(t,l,r))
t.c.K(x.q).f.U(D.f1S)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kI(s,B.S(s).c)
s=l.r
m.a=A.d.bg(s,new C.ev9(p))
o=s.length
t.d4(new C.eva(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aah,v)},
aQm(d,e){if(e){this.afZ()
return}this.cdz(d,!1)},
bIZ(){return this.aQm(null,!1)},
afZ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c_,null,new C.exw(t),r,!0,!0,!0,A.ph,!1,!1,x.N),$async$afZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.exx(t,C.i6R(s).pB()))
case 1:return B.h(u,v)}})
return B.i($async$afZ,v)},
d4(d){var w=this
if(w.qk())return
w.HL()
w.b__()
w.m(d)
w.Kb()
w.oi()
w.po()},
a8h(){this.d4(new C.etM(this,D.mM))},
aRQ(){var w=this.gdv()
if(w==null)return
this.d4(new C.ev5(this,w))},
aQY(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.ev3(this))},
b3c(d,e){if(this.e==null||d===e)return
this.d4(new C.exF(this,d,e))},
O5(d){return this.bKZ(d)},
bKZ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOS():s)
w=5
return B.b(C.apT(t.a.c,r),$async$O5)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.ark(s)
w=6
return B.b(C.b1i(t.a.c,s),$async$O5)
case 6:if(t.c==null){w=1
break}t.m(new C.ev_(t,d))
w=7
return B.b(t.tC(),$async$O5)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O5,v)},
coR(d,e){var w=this
if(d.z){w.aiR()
return}w.m(new C.exE(w,d,e))
w.po()},
jY(){var w,v,u,t,s,r=this.gdv()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
WD(d){return this.ch.ca(0,d.a,new C.euQ(d))},
atq(d){return this.CW.ca(0,d.a,new C.evr())},
a2b(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.XC(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jP()},
b6E(){return this.a2b(!0)},
a27(d){var w,v,u=this
if(u.qk())return
if(!u.zV())return
w=u.XC(d)
if(w==null||w.b!==D.cS)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.WD(w).saV(0,"")}u.m(new C.ezm(u,d))
$.aW.x1$.push(new C.ezn(u,d,w))},
b7b(d){var w=this
if(d.b===D.cS&&!w.kl()&&w.zV()){w.a27(d.a)
return}w.azQ(d.a)},
azQ(d){var w,v,u,t,s,r=this
if(r.kl())return
w=r.r
if(w!=null&&w!==d){v=r.XC(w)
if(v!=null&&v.b===D.cS){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eyM(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jP()}},
aMC(){this.d4(new C.etN(this))},
p7(d){return this.bA0(d)},
bA0(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$p7)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.etK(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p7,v)},
VM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GI(78,1920),$async$VM)
case 3:s=e
if(s==null||t.gdv()==null){w=1
break}t.d4(new C.etA(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VM,v)},
VG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdv()==null){w=1
break}w=3
return B.b(S.CX(t.a.c),$async$VG)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.f2r)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.etx(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VG)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdv()==null){w=1
break}t.d4(new C.ety(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VG,v)},
asp(){var w=this,v=w.r
if(v==null||w.gdv()==null)return
if(A.d.b4(w.gdv().z,new C.ev1(v))){w.c.K(x.q).f.U(D.f1s)
return}if(w.w===v)w.a2b(!0)
w.d4(new C.ev2(w,v))},
bHe(){var w=this.jY(),v=w==null
if((v?null:w.b)===D.f5)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cS)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aNj(d,e){var w=this,v=w.jY(),u=w.gdv(),t=w.e
if(t==null)return
w.d4(new C.eue(w,v,d,e,t,u))},
bBB(d){return this.aNj(d,null)},
a8z(d){return this.bBJ(d)},
bBJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a7h.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o9(),$async$a8z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jY()
if(s!=null){r=s.b
if(r===D.cS)t.bBB(s.w>=28||s.x.gdO(0)>=A.H.gdO(0)?d.d:d.e)
else if(r===D.f5){r=d.c
t.aNj(r.j(0.88),r)}w=1
break}t.d4(new C.euj(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8z,v)},
a8y(d){return this.bBH(d)},
bBH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jY()
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
return B.b(t.o9(),$async$a8y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.euh(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8y,v)},
bBr(d){var w=this.gdv()
if(w==null)return
this.d4(new C.eud(this,w,d))},
a_K(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ies(r),$async$a_K)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oi()
t.m(new C.exg(t,s))
w=4
return B.b(t.tC(),$async$a_K)
case 4:if(t.c!=null)t.af7(s)
case 1:return B.h(u,v)}})
return B.i($async$a_K,v)},
aa9(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2b(!0)
t.oi()
s=t.c
s.toString
w=3
return B.b(C.R8(s,q),$async$aa9)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa9,v)},
DB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oi()
t=4
w=7
return B.b(C.aQ3(m),$async$DB)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPu(o,q,m.b),$async$DB)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.v(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DB,v)},
Ff(d,e){return this.cBE(d,e)},
cBE(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ff=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qk()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2b(!0)
t.oi()
s=h.a=t.e.hK()}else{r=A.d.bg(t.d,new C.ezv(d))
s=h.a=r>=0?t.d[r].hK():d.hK()}s=s.w
q=s==null
p=C.i7P(q?"":s)
o=C.hqH(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ezw(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cuN(n.length,o,s),$async$Ff)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i7J(h.a)
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
return B.b(t.cuM(n,o),$async$Ff)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h1(t.d,new C.ezx(s))
s=h.a.b
w=11
return B.b(t.cuK(k.b,s),$async$Ff)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hK()
case 5:j=C.i7O(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.f2D)
w=1
break}w=12
return B.b(t.cuL(j.a,s,o,j.c),$async$Ff)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ezy(h,t,i))
t.po()
case 1:return B.h(u,v)}})
return B.i($async$Ff,v)},
cuN(d,e,f){var w=this.c
w.toString
return B.bT(A.K,null,new C.ez1(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuM(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.ez0(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuK(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.eyV(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cuL(d,e,f,g){var w=this.c
w.toString
return B.bT(A.K,null,new C.eyX(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abE(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abF(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c_,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.az,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eq,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fd6,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aV9(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Ue,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aVc(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.az,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.mS,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BO,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evV(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bYg(d,e,f,g,h,i){return this.aVc(d,e,f,!1,g,h,i)},
auK(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bC,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ZF,w,w,w)},
aVb(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b7(B.n(14),A.a0),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nE,w,w,w),new C.evU(d,f),v)},
aVa(d,e){return this.aVb(d,e,null)},
K2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pb(l,s.c,s.d),$async$K2)
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
for(l=A.d.gaf(o.z),n=new B.f2(l,new C.eyN());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aa_(l.charCodeAt(0)==0?l:l,r.b),$async$K2)
case 4:l=t.a
w=5
return B.b(B.pa(l.c,l.d),$async$K2)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K2,v)},
I6(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pb(q,s.c,s.d),$async$I6)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aa_(A.S.ao(r.ag(),null),r.b+".json"),$async$I6)
case 4:q=t.a
w=5
return B.b(B.pa(q.c,q.d),$async$I6)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I6,v)},
b6o(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oi()
u.tC()
w=u.c
w.toString
v=B.ea(new C.ezl(u,t),!1,null,x.z)
B.a5(w,!1).cm(v)},
Hk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$Hk)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fJU(),$async$Hk)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iaB(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.aw,null,new C.etF(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hk)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.etG(t,s))
w=1
break}if(p==="split")t.d4(new C.etH(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hk,v)},
Nr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}w=3
return B.b(t.o9(),$async$Nr)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQ2(s,null,null),$async$Nr)
case 4:r=e
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.etL(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nr,v)},
b3_(d){var w=this.e
if(w==null||!C.kA(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOC(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQ2(s,t==null?null:B.b0(t),u)},
a8f(d){return this.bzS(d)},
bzS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zV()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f2S)
w=1
break}w=3
return B.b(t.aOC(),$async$a8f)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.etC(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8f,v)},
agK(d){return this.cnC(d)},
cnC(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zV()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f2_)
w=1
break}w=3
return B.b(t.aOC(),$async$agK)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.exC(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agK,v)},
cag(){var w,v,u=this
if(u.kl())return
w=new B.T(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cAE()}},
cAE(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.ezt(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bYB(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.evY(this,r,u.d))},
c2g(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.kA(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fGv(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.la&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c2h(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.kA(w.w))!==!0)return!0
if(!this.zV())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fGv(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.la&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NA(d){return this.bC8(d)},
bC8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zV()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f0Q)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apX(p),$async$NA)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.f1u)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7j(r)
w=1
break}t.m(new C.eun(t,d,o))
t.oi()
$.aW.x1$.push(new C.euo(t))
case 1:return B.h(u,v)}})
return B.i($async$NA,v)},
VK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$VK)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCW(),$async$VK)
case 4:s=e
if(s==null||t.gdv()==null){w=1
break}t.d4(new C.etz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VK,v)},
Oj(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$Oj)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jY()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fJL(r),$async$Oj)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.evp(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oj,v)},
j5(d){this.d4(new C.etI(this,d))},
qa(d){return this.bBk(d)},
bBk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qk()){w=1
break}m=!D.aOh.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o9(),$async$qa)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hk()
w=1
break A
case"sign_paper":t.Nr()
w=1
break A
case"hd_photo":t.VK()
w=1
break A
case"sharpen":t.Oj()
w=1
break A
case"print":t.DB()
w=1
break A
case"rotate":s=t.jY()
if(s!=null)t.d4(new C.etR(s))
w=1
break A
case"text_box":t.aMC()
w=1
break A
case"picture":t.VM()
w=1
break A
case"present":t.b6o()
w=1
break A
case"new_slide":t.a8h()
w=1
break A
case"export_json":t.I6()
w=1
break A
case"outline_share":t.K2()
w=1
break A
case"flashcard_tool":t.ve(D.I8)
w=1
break A
case"quiz_tool":t.ve(D.I9)
w=1
break A
case"worksheet_tool":t.ve(D.Ia)
w=1
break A
case"duplicate_el":s=t.jY()
if(s==null){w=1
break A}t.d4(new C.etS(t,s))
w=1
break A
case"delete_el":t.asp()
w=1
break A
case"bring_fwd":s=t.jY()
if(s==null||t.gdv()==null){w=1
break A}t.d4(new C.etT(t,s))
w=1
break A
case"send_back":s=t.jY()
if(s==null||t.gdv()==null){w=1
break A}t.d4(new C.eu3(t,s))
w=1
break A
case"align_left":s=t.jY()
if(s!=null)t.d4(new C.eu6(s))
w=1
break A
case"align_center":s=t.jY()
if(s!=null)t.d4(new C.eu7(s))
w=1
break A
case"align_right":s=t.jY()
if(s!=null)t.d4(new C.eu8(s))
w=1
break A
case"grayscale":case"brighten":t.Oj()
w=1
break A
case"flip_h":s=t.jY()
if(s!=null)t.d4(new C.eu9(s))
w=1
break A
case"flip_v":s=t.jY()
if(s!=null)t.d4(new C.eua(s))
w=1
break A
case"rectangle":t.p7(D.bh)
w=1
break A
case"circle":t.p7(D.eN)
w=1
break A
case"triangle":t.p7(D.jS)
w=1
break A
case"arrow":t.p7(D.D_)
w=1
break A
case"line":case"divider":t.p7(D.ft)
w=1
break A
case"word_count":r=t.gdv()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f2(q,new C.eub()),o=0;p.C();){n=A.a.fI(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.euc(),B.S(n).k("a_<1>")).gM(0)}t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.j5(C.iY(A.L,!1,t.gqp().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mN,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.j5(C.iY(A.L,!1,t.gqp().e.l(),A.aD,22,A.bo,A.a7,0.12,q,"Subtitle goes here",0,D.df,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j5(C.iY(A.bi,!0,4279310375,A.aD,20,A.bo,A.a7,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uy,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j5(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a7,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.ux,0.8,0.1,0.22))
w=1
break A
case"quote":t.j5(C.iY(A.L,!1,4279310375,A.aD,24,A.cF,A.a7,0.25,C.cC(),'"Insert meaningful quote here."',0,D.df,0.8,0.1,0.3))
w=1
break A
case"citation":t.j5(C.iY(A.bi,!1,4284773515,A.aD,14,A.bo,A.a7,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.uy,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j5(C.iY(A.dP,!1,4279310375,A.aD,14,A.bo,A.a7,0.08,C.cC(),C.bCY(),0,D.df,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j5(C.iY(A.dP,!1,4279310375,A.aD,13,A.bo,A.a7,0.06,C.cC(),"Page "+(t.f+1),0,D.df,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.etU(t))
w=1
break A
case"footer_bar":t.d4(new C.etV(t))
w=1
break A
case"highlight":t.d4(new C.etW(t))
w=1
break A
case"redact":t.d4(new C.etX(t))
w=1
break A
case"callout":t.d4(new C.etY(t))
w=1
break A
case"checkboxes":t.j5(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a7,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.df,0.8,0.1,0.2))
w=1
break A
case"table":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.df,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.etZ(t))
w=1
break A
case"letter":t.j5(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a7,0.82,C.cC(),C.bCY()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.df,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j5(C.iY(A.bi,!1,4279310375,A.aD,22,A.bo,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uy,0.8,0.1,0.12))
w=1
break A
case"toc":t.j5(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.df,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.08,C.cC(),"Signature: _________________________",0,D.df,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.08,C.cC(),"Initials: ______",0,D.df,0.3,0.65,0.78))
w=1
break A
case"approved":t.j5(C.iY(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cC(),"APPROVED",0,D.mN,0.32,0.62,0.08))
w=1
break A
case"draft":t.j5(C.iY(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cC(),"DRAFT",0,D.df,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j5(C.iY(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.df,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.eu_(t))
w=1
break A
case"progress":t.d4(new C.eu0(t))
w=1
break A
case"stars":t.j5(C.iY(A.L,!1,4279310375,A.aD,36,A.bo,A.a7,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.qp,0.8,0.1,0.4))
w=1
break A
case"equation":t.j5(C.iY(A.L,!1,4279310375,A.aD,32,A.bo,A.P,0.14,C.cC(),"y = mx + b",0,D.df,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j5(C.iY(A.L,!1,4279310375,A.aD,18,A.bo,A.a7,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ux,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.eu1(t))
w=1
break A
case"compare":t.d4(new C.eu2(t))
w=1
break A
case"link_text":t.j5(C.iY(A.bi,!1,4280640491,A.mR,16,A.bo,A.a7,0.1,C.cC(),"https://example.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"phone":t.j5(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.1,C.cC(),"(555) 123-4567",0,D.df,0.8,0.1,0.5))
w=1
break A
case"email":t.j5(C.iY(A.bi,!1,4280640491,A.aD,18,A.bo,A.a7,0.1,C.cC(),"name@email.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.eu4(t))
w=1
break A
case"cover_page":r=t.gdv()
if(r==null){w=1
break A}t.d4(new C.eu5(t,r))
w=1
break A
case"invoice":t.j5(C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a7,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.df,0.8,0.1,0.08))
w=1
break A
case"resume":t.j5(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a7,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.df,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j5(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a7,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bCY()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j5(C.iY(A.bi,!1,4279310375,A.aD,17,A.bo,A.a7,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j5(C.iY(A.bi,!1,4279310375,A.aD,15,A.bo,A.a7,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.df,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qa,v)},
cue(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eUf.t(0,this.z)},
cud(d){if(this.jY()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b81(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bE
u=B.I(u,A.q,o&&e?2:1)
t=C.iaq(d)
s=o?12:18
r=o?A.H:A.cO
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Oi,A.f,p,p,D.Eg,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fC,B.aB(p,new B.an(A.Z,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a5),p)},
bNF(d){var w,v=null,u=this.jY()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.QO,new C.evo(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
ve(d){return this.bA_(d)},
bA_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ve=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aOb.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o9(),$async$ve)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.etJ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ve,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eSX
w=h.e
if(w==null)return h.bDS()
v=h.gdv()
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
p=B.aI(u,A.eI,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c_:D.bco
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSl()}else j=!1
if(j)k.push(new C.a7O(h.a.c,!1,h.e.gbaf(),h.gcad(),g))
else if(s&&h.e!=null&&!h.kl()&&C.cg2(h.e.w)){j=h.a
k.push(new C.a7O(j.c,j.d,g,h.gcbm(),g))}if(s)k.push(h.bNB(w,t,r))
if(s&&h.kl()){w=t?A.fA:A.ky
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bOG,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fA,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bh,A.i9,g,g,g))}w=!n
if(w&&!h.kl())k.push(h.c3c(t,r))
if(w&&h.kl())k.push(h.cBF(t))
if(r&&h.jY()!=null&&w&&!h.kl())k.push(h.c38(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5S(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5S(t,!1),g))
i.push(B.E(new B.bI(A.b1,g,g,h.bFb(v,t,!s||p),g),1))
if(h.cue(r)&&u&&s&&!h.kl())i.push(h.ca0(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kl()&&h.cud(!1))j.push(new B.a7(240,g,h.bQj(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c39(t))
return B.c6(g,m,B.bm(!1,new B.an(A.Z,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bDS(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.c_:A.bM
v=r.a.e
u=r.c9g(A.bj,A.q5,new C.eur(r),r.gcdw(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMk(A.bj,A.hE,"Blank Presentation",new C.eus(r)),1),A.at,B.E(r.aMk(A.b0,A.w1,"Class Template",new C.eut(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mQ,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bAN(w))
else{t=new B.i3(t,B.S(t).k("i3<1>"))
A.d.v(u,t.gdM(t).dA(0,new C.euu(r,w),x.l))}return B.c6(q,p,B.bm(!1,B.cw(u,q,new B.R(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLN(){this.m(new C.ev4(this))
var w=this.c
w.toString
if(B.aI(w,A.bY,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jP()}},
afq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jY()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.exf(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afq)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afq,v)},
AS(d,e){return this.cuA(d,e)},
cuA(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AS=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.X_,!0,"Dismiss",j,new C.eyO(),new C.eyP(d,e),A.iK,!0,x.N),$async$AS)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiR()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSl()){r.aiR()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQ3(d),$async$AS)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPu(j,q,d.b),$async$AS)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.v(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Ff(d,!1),$async$AS)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.X_,!0,"Dismiss",j,new C.eyQ(),new C.eyR(d),A.a1,!0,x.y),$async$AS)
case 20:if(g===!0)r.O5(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agt("Rename presentation",d.b),$async$AS)
case 24:l=g
if(l!=null)r.coR(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eyS(r,k))
r.po()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AS,v)},
b0R(d,e){var w=null
return B.bK(!1,D.fBS,w,w,!0,w,w,e,w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.ax,w,A.lq,w,w,w,w,w,A.kf,w,w))},
bAN(d){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.etO(this,d),null)},
bJT(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.euT(),x.dv).c0(0,new C.euU()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahN,this.aMU(v,e,new C.euV(),f),null)},
aMU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aR(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.br,n,n,n,10),A.qx],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ci(A.aP,A.e,A.N,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bn(s,s,s,s),n,n,A.n),n,n,n,n,A.nm,n,n,n))
A.d.v(l,u)}return B.eQ(A.a3,B.B(l,A.m,n,A.e,A.N,0,n,n),A.f,A.e_)},
bAL(d,e,f){return this.aMU(d,e,null,f)},
bJV(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dgV
else if(v==="hati_kuhoweya")w=D.d2n
else{if(v==="hati_kiapo_uongozi")v=D.cQ0
else v=C.kA(v)?D.cXd:A.Qo
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.euY(this,f,d,e,w),null)},
c39(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jY()
if(i==null||i.b!==D.cS)return A.bI
w=k.WD(i)
v=k.atq(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bk,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b8,B.bK(!1,D.fxs,j,j,!0,j,j,new C.ewo(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aw:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hb,B.c0(new B.D(A.eR,B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bUG,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wA,j,j,j,j,j,j,!1,"\u2022",j,new C.ewp(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zP,A.an,j,A.TJ,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.n(16)
p=d?A.bm:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cd(B.B(B.a([k.u_(G.Ni,j,new C.ewq(k,i),d),k.u_(G.a_P,j,new C.ewr(k,i),d),k.u_(K.am6,j,new C.ews(k,i),d),k.u_(K.a0u,j,new C.ewt(k,i),d),k.u_(k.bAJ(i.as),j,new C.ewu(k,i),d),k.u_(D.ane,j,new C.ewv(k,i),d),k.u_(D.and,j,new C.eww(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aP),1)
m=A.k.N(i.w)
return B.bW(0,B.aF(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(H.ahW,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dc],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lr,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c38(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jY()
if(m==null)return A.bI
w=m.b
v=w===D.cS
u=B.n(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cC,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4v(A.js,"Edit",new C.ew9(o,m),d,!0))
if(w===D.lB)p.push(o.b4v(A.GC,"Shape & ring",new C.ewa(o),d,!0))
p.push(o.u_(A.C8,"Format",new C.ewb(o),d))
if(v)A.d.v(p,B.a([o.u_(G.Ni,n,new C.ewc(o,m),d),o.u_(D.ane,n,new C.ewd(o,m),d),o.u_(D.and,n,new C.ewe(o,m),d)],q))
p.push(A.b8)
p.push(o.csn(A.ea,n,o.gaQW(),d,!0))
p.push(o.u_(A.ho,"Done",new C.ewf(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bi,A.lr,n,n,n)},
bAJ(d){switch(d.a){case 2:return D.a0r
case 1:case 5:return D.a0t
default:return D.a0s}},
c41(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dP
default:return A.bi}},
azP(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.n(12)
u=B.n(12)
t=h?L.GW:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eg,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.q0,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eH(new B.D(new B.R(q,8,q,8),B.B(o,A.m,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
u_(d,e,f,g){return this.azP(d,e,f,g,!1,!1)},
b4v(d,e,f,g,h){return this.azP(d,e,f,g,h,!1)},
csn(d,e,f,g,h){return this.azP(d,e,f,g,!1,h)},
bNB(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.n_],m)
w=B.I(e?A.aJ:A.nS,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cC,18)],x.V)
u=p.a2B(A.eF,"Back",p.gbGZ(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dc,B.E(B.B(B.a([new B.dq(1,A.co,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bV:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tG,o,A.e,A.j,0,A.cY,o),1)],q)
if(!p.kl()){u=p.a2B(A.rn,"Undo",p.ax.length===0?o:p.gcCd(),e)
A.d.v(r,B.a([u,p.a2B(D.bIb,"Redo",p.ay.length===0?o:p.gcny(),e)],q))}r.push(p.a2B(A.yh,"PDF",new C.evh(p),e))
r.push(p.a2B(A.hF,"Download as video",new C.evi(p),e))
if(!p.kl())r.push(B.C1(o,o,B.X(A.oa,e?A.ad:A.br,o,o,o,o),new C.evj(p),A.J,new C.evk(p),A.af,"More",x.N))
r.push(A.dc)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eH(D.edP,o,new B.o(o,o,o,B.n(14),o,L.GW,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAF(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.az,A.aC,A.x,m,o,o),A.n),o,o,o,D.btn,D.byw,o,o,o)},
cBF(d){var w=this,v=null,u=B.n(18),t=d?A.aw.j(0.92):A.c.j(0.96),s=B.I(d?A.cp:A.aL,A.q,1)
return B.p(v,B.cd(B.B(B.a([w.iR(A.uc,"Print",new C.ezz(w),d),w.iR(A.yh,"Download PDF",new C.ezA(w),d),w.iR(A.qb,"Present",w.gaAF(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aP),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bh,G.ajz,v,v,v)},
a2B(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dr
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c3c(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.aw.j(0.92):A.c.j(0.96)
u=B.I(d?A.cp:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.ewz(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aje,new B.fh(new C.ewA(r),q),q))
A.d.v(t,w?B.a([new B.D(R.tW,r.ah6(A.ls,"Ending celebration",r.gcdJ(),d),q),new B.D(R.tW,r.ah6(A.GC,"Logo ring & frame",r.gcep(),d),q)],x.p):A.he)
A.d.v(t,w?B.a([new B.D(R.tW,r.ah6(A.np,"Look and feel",r.gceq(),d),q),new B.D(R.tW,r.ah6(A.p3,"Edit this slide's text",r.gceX(),d),q)],x.p):A.he)
t.push(new B.D(R.tW,B.hx(B.aB(q,B.p(q,D.eSm,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.ln.j(0.4),A.J,10)],x.V),D.apa,A.n),q,34,q,q,A.h_,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ewB(r),q,q,q,q,q,q,!1,A.a5),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.byZ,q,q,A.aP)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cd(r.cq0(d),A.r,q,A.y,q,new B.R(8,2,8,s),q,q,A.aP)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bh,q,q,q,q)},
cq0(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dap[v]
u.a=null
s=u.a=t.b
w.push(e.lM(e.crM(s),t.a,new C.exY(u,e),a3,D.aOb.t(0,s)))}w.push(e.iR(A.l3,"Notes Slide",new C.exZ(e),a3))
w.push(e.lM(A.GB,"Quiz",new C.ey_(e),a3,!0))
w.push(e.lM(M.Gd,"Worksheet",new C.eya(e),a3,!0))
w.push(e.lM(W.GF,"Flashcard",new C.eyl(e),a3,!0))
w.push(e.lM(A.O8,"Lab Report",new C.eyw(e),a3,!0))
w.push(e.lM(A.u6,"Rubric",new C.eyD(e),a3,!0))
w.push(e.lM(A.oY,"Minutes",new C.eyE(e),a3,!0))
w.push(e.lM(A.o9,"Syllabus",new C.eyF(e),a3,!0))
w.push(e.lM(A.Od,"Timeline",new C.eyG(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dbJ[v]
w.push(e.lM(r.b,r.c,new C.eyH(e,r),a3,!D.aOh.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iR(A.yC,a0,e.gaMB(),a3),e.iR(A.u9,"Picture",new C.ey0(e),a3),e.iR(A.yw,"Bio link",new C.ey1(e),a3),e.iR(A.a0X,"Table",new C.ey2(e),a3),e.iR(A.Oc,"Sticky",new C.ey3(e),a3),e.iR(A.u8,"Divider",new C.ey4(e),a3),e.iR(A.C9,"Header",new C.ey5(e),a3),e.lM(A3.vS,"Rectangle",new C.ey6(e),a3,!0),e.lM(A.rf,"Circle",new C.ey7(e),a3,!0),e.lM(A.a0k,"Triangle",new C.ey8(e),a3,!0),e.lM(A.j4,"Arrow",new C.ey9(e),a3,!0),e.lM(D.bGF,"Parallelogram",new C.eyb(e),a3,!0),e.lM(D.bJ9,"Hexagon",new C.eyc(e),a3,!0),e.lM(A.u8,"Line",new C.eyd(e),a3,!0),e.lM(A.yh,"PDF",new C.eye(e),a3,!0),e.lM(O.a15,"Signature",new C.eyf(e),a3,!0),e.iR(A2.BX,"Quote",new C.eyg(e),a3),e.iR(D.a_X,a1,new C.eyh(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bY,x.w).w
u=x.p
t=B.B(B.a([e.aNq("Wide 16:9",D.CY,a3),e.aNq("Short 9:16",D.oj,a3),new B.D(A.fC,B.mL(D.bLi,d,D.ftO,d,new C.eyi(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bHd("This slide",!e.Q,a3,new C.eyj(e)),A.bp,e.aPC("All slides",e.Q,a3,new C.eyk(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bHe()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bV:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2W,new C.eym(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dcJ[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dr:A.aZ,1.5,A.q,-1)
l.push(new B.D(A.fC,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eyn(e,k),d,d,d,d,d,d,!1,A.a5),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bEf()
g=B.S(h).k("M<1,D>")
h=B.C(new B.M(h,new C.eyo(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP),A.am,e.c0_(a3)],u),A.F,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.jY()
w=e.c
w.toString
w=B.aI(w,A.bY,x.w).w
u=new C.exX(e)
t=new C.eyI(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QO,f.dy,new C.eyp(e,u,f),A.b0)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdv()
q=q==null?d:q.r
p.push(t.$4(D.QO,q,new C.eyq(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.x(p,A.F,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iR(A.l3,w,new C.eyr(e),a3),e.iR(A.uc,"Print deck",new C.eys(e),a3),e.lM(D.al9,"Export JSON",new C.eyt(e),a3,!0),e.iR(A.fP,"Duplicate Slide",e.gaRP(),a3),e.iR(A.ea,a2,e.gaQX(),a3),e.cvV(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jY()
w=x.p
u=B.a([e.iR(D.a_X,a1,new C.eyu(e),a3),e.iR(A.fP,"Duplicate",e.gaRP(),a3),e.iR(A.ea,a2,e.gaQX(),a3),e.iR(A.qb,"Present",e.gaAF(),a3),e.iR(A.C7,a0,e.gaMB(),a3),e.iR(A.C0,"Fit Text",new C.eyv(e),a3),e.iR(A.yh,"Download PDF",new C.eyx(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iR(A.kb,"Transfer",new C.eyy(e),a3))
if(f!=null){w=B.a([A.ab,e.iR(G.Ni,"Bold",new C.eyz(e,f),a3),e.iR(G.a_P,"Italic",new C.eyA(e,f),a3),e.iR(G.akL,"Underline",new C.eyB(e,f),a3),e.iR(Ad.Nj,"Bullets",new C.eyC(e,f),a3),e.bQ2(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNF(a3))
w.push(e.iR(D.bFi,"Delete",e.gaQW(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aNq(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oj
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8Q,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dc,D.bKu],v))
return new B.D(A.fC,B.j9(t,t,t,B.B(u,A.m,t,A.e,A.N,0,t,t),t,new C.eum(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cvV(d){var w,v,u,t,s,r=this,q=null,p=r.gdv()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.aZ:A.cs,A.q,1)
u=B.n(8)
t=B.X(A.Gb,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.aoa,q,q,q,new C.ez4(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.ao1,q,q,q,new C.ez5(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FS,A.mx,q,q,q)},
crM(d){switch(d.a){case 6:return W.GF
case 7:return A.GB
case 8:return M.Gd
case 4:return A.C9
default:return A.l3}},
bQ2(d,e){var w=null,v=B.I(e?A.aZ:A.cs,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.aoa,w,w,w,new C.evu(this,d),w,w,w,w,w,A.ce),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.ao1,w,w,w,new C.evv(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.y0,A.mx,w,w,w)},
c0_(d){var w=null
return B.C1(B.Dq(B.X(A5.a0_,d?A.ad:A.br,w,w,w,16),w,w,D.fzi,w,w,w),w,w,new C.ew1(),A.J,this.gbBq(),A.cq,"Slide layout",x.fO)},
lM(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dn:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Oi,A.f,w,w,D.Eg,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fC,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eH(new B.D(A.hb,B.x(B.a([new B.an(A.Z,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iR(d,e,f,g){return this.lM(d,e,f,g,!1)},
b5S(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aP
v=B.hN(t,new C.ezg(u,s,e,d),s.r.length,A.cq,t,w,new C.ezh(e),!1)
s=d?A.aw:A.bM
w=B.a([],x.p)
if(e&&!u.kl())w.push(new B.D(A.cq,B.HQ(E.aon,new C.ezi(u),B.nE(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aOW,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bFb(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oj?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bI(A.b1,v,v,new B.fM(w,B.aB(v,B.cq(new C.euL(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.euM(this),v,v,v,v,v,v,!1,A.a5),v),v),v)},
bFd(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kA(a9.w))===!0,b1=b0&&C.fGv(b3),b2=b0&&b3.b===D.la&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kl())v=!b0||a7.c2h(b3)
else v=!1
if(!a7.kl())u=!b0||a7.c2g(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h4x(b3))o=a8
else if(p&&!a7.kl())o=a7.gcaf()
else o=a7.kl()?a8:new C.euz(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c7:A.jL
i=w&&C.h4x(b3)&&a7.zV()?new C.euA(a7,b3):a8
h=v&&b3.b===D.cS?new C.euB(a7,b3):a8
g=u?new C.euC(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bc
else e=q?A.c0:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c0.j(0.08)
else a0=b3.b===D.la?A.K:a8
if(b1){a1=a7.kl()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c0.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bY,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zV()
a3=b3.b===D.cS
a4=a3?a7.WD(b3):a8
a5=a3?a7.atq(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bY,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.euD(a7,b3):a8
a3=v&&a3?new C.euE(a7,b3):a8
a6=C.b1e(q,a4,a1,b3,a5,a2,a3,new C.euF(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bNj,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euG(a7,b3,b4,b5),a8,a8,new C.euH(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kl()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bNZ,A.f,a8,a8,new B.o(A.dt,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbYA(),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kl()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bPx,A.f,a8,a8,new B.o(A.c0,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euI(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cS)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bY,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aB(a8,B.p(a8,D.fI9,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l0,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euJ(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eJ(A.A,f,new B.an(A.Z,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a5),k*b5,new B.cy("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPC(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bE,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dc,B.p(r,D.Oi,A.f,r,r,D.Eg,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.ha,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
bHd(d,e,f,g){return this.aPC(d,e,f,g,!1)},
ca0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.at(new B.bb(v,A.b4,A.aO),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aw:A.aQ
t=f?A.x2:l
if(f)s=new B.bO(new B.az(e?A.bE:A.aL,1,A.q,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rJ,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b8,m.b0R(e,new C.ewD(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bV:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dj),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ewE(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aT7(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jY()
if(a2==null)return A.bI
w=new C.evI(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dT:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b8,a0.b0R(a3,a0.gbLM())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fui,B.E(B.l2(a1,a1,a1,u,0.05,new C.evJ(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fGB,B.E(B.l2(a1,a1,a1,t,0.05,new C.evK(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cS
if(m)o.push(B.B(B.a([D.fo3,B.E(B.l2(a1,a1,a1,96,10,new C.evL(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lB
if(l||n===D.la||n===D.Sa)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fA1,B.E(B.l2(a1,a1,a1,s,0,new C.evM(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fHS,B.E(B.l2(a1,a1,a1,r,0,new C.evN(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Co[j]
i.a=null
g=h.a
i.a=g
k.push(B.j9(a1,a1,a1,new B.y(h.b,a1,A.pm,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.evO(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bU(A.bA,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cj[j]
f.a=null
g=e.a
f.a=g
h.push(B.j9(a1,a1,a1,new B.y(e.b,a1,A.pm,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.evP(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bU(A.bA,h,A.bq,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.evQ(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bU(A.bA,l,A.bq,6,6),A.ac,B.hgF(new C.evR(w,a2),D.cr3,B.ev([a2.as],k),!0,a1,k)],p))}if(n===D.f5){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.evS(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bU(A.bA,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bPj,D.fC2,new C.evT(a0,a5),B.bo(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.x2:a1
if(a4)o=new B.bO(new B.az(a3?A.bE:A.aL,1,A.q,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rJ,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FA,a1,a1,a1)},
bQj(d){return this.aT7(d,!1,!1,null)},
c9g(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c7(p,new C.evW(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fe0,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bC,A.cV,r.bAL(D.cUF,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dX(B.hx(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eH(D.eYf,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c0.j(0.4),A.eo,8)],p),D.apf,A.a6),q,q,q),A.cM,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b94,D.b9t],v):B.a([A.c,A.ky],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cC,14)],p),new B.a9(A.az,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aMk(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.etv(this,g,d,e,f),null)},
agt(d,e){return this.clM(d,e)},
clM(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.at(new B.bb(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.exA(d,q),p,null,!0,!0,x.N),$async$agt)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agt,v)},
PY(d){var w=d.bU()
return""+B.bH(w)+"/"+B.bV(w)+"/"+B.bA(w)}}
C.afg.prototype={}
C.ayV.prototype={
S(){return new C.bcN(null,null)}}
C.bcN.prototype={
gcyc(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bH(u)+"/"+B.bV(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a1()
w=B.bk(u,A.pY,u,1,u,v)
w.fh(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bk(u,D.brS,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bu6()},
J3(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.az(0,new B.hU(w,v,A.cu).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bxn,B.c7(new B.hb(B.a([u,w],x.dS)),new C.d21(this),v),v),v,v,v)}}
C.bd0.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.av(new B.D(D.bxE,B.aF(!1,A.a1,!0,w,B.p(w,B.by(B.n(22),B.x(B.a([new B.D(D.bwP,B.x(B.a([B.p(w,D.bO4,A.f,w,w,new B.o(A.av.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fEa,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.ffa,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,D.bqW,B.B(B.a([B.E(B.bK(!1,D.fsx,w,w,!0,w,w,new C.d2n(d),w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nj,w,A.on,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fxN,w,w,!0,w,w,new C.d2o(d),w,B.fz(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.nj,w,A.on,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.N,0,A.p),A.aq),A.f,w,A7.VM,new B.o(A.aw,w,u,v,D.cV_,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JQ.prototype={
S(){return new C.bcM()}}
C.bcM.prototype={
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
return B.dX(B.de(B.aB(o,B.vw(B.df(o,B.B(B.a([r,A.at,new B.dq(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f1:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.N,0,o,o),o,o,A.bd,new B.o(n,o,u,v,t,o,A.n),A.eJ,o,o,o,A.nk,o,o,1/0),A.cu,A.jo,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d1X(p,d),new C.d1Y(p),new C.d1Z(p),new C.d2_(p),o,o,o,!1,A.a5),k),new B.u(0,(1-k)*16))}}
C.PC.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.az,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eq,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.mS,v,v,v),A.bC,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.eB,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_y.prototype={
S(){return new C.aEr(D.df,null,null)}}
C.aEr.prototype={
gYS(){var w,v=this,u=v.w
if(u===$){w=B.bk(null,D.brs,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b6i(d){if(!this.a.c.ay)return
this.x=d
this.gYS().iK(0,0)},
Z(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avP(D.f3E)
C.i7m()
v.Rm()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYS().q()
v=w.z
if(v!=null)v.a7(0)
C.avP(D.f3F)
C.i7p()
w.bwe()},
cB0(){B.jl()
this.m(new C.eAf())
var w=this.c.K(x.q).f
w.a4K()
if($.bky)w.U(D.f0v)},
Rm(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dE(0,0,0,0,0,A.o.D(C.heQ(u,w),1,120)),new C.eA5(v))},
cAG(){var w,v=this
v.m(new C.eAe(v))
if(v.r)v.Rm()
else{w=v.f
if(w!=null)w.a7(0)}},
gaV2(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cuG(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.eA6(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lp,new C.eA7(w))},
awi(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.eA1(u))
u.Rm()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaV2()){u.cuG()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eA2(u,A.o.E(w+1,s)))
u.b6i(w)
u.Rm()}},
ckq(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.eA3(v))
v.Rm()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eA4(v,w,t))
v.b6i(w)
v.Rm()}},
cw6(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.nj(d,new B.cy(u,x.ac))}w=v.cw7(u)
u=v.d
u===$&&B.c()
return B.qm(new B.nj(d,new B.cy(u,x.ac)),w,new C.eAc(),A.bd,A.bd,new C.eAd(v))},
cw7(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.brO
case 16:return A.kA
case 18:return A.nf
default:return A.nh}},
cw5(d,e,f){var w,v,u,t=null,s=B.cH(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uG,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sq,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.iw,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uF,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.is(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.is(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c7(s,new C.eA8(s),e)
case 9:return B.c7(s,new C.eA9(s),e)
case 10:return B.c7(s,new C.eAa(s),e)
case 11:return B.c7(s,new C.eAb(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.is(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jA(B.jr(e,new B.bf(s,new B.bq(A.uG,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.brE(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sq,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mO((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jS(v,u,v,1)
return B.fw(A.A,B.de(e,s.gp(0)),t,w,!0)
case 20:return B.eJ(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jA(new C.aor(B.c7(n.gYS(),new C.eAg(n,v,w),m),m),A.r,m)}else{t=B.rG(new C.IP(w,!0,!1,m))
l=B.b0(w.e)
u=n.cw6(B.en(B.jA(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.heQ(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ox,m,m,m),A.bp,D.bQn],k),A.m,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fN,m,m,m)
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
l.push(B.bW(0,new C.Nw(new C.EB(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oj?0.5625:1.7777777777777777
l.push(B.av(new B.fM(r,B.jA(B.uz(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bky){r=B.HQ(A.l7,new C.eAh(d),B.nE(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HQ(B.X(n.r?Aj.yu:A.iO,m,m,m,m,m),n.gcAF(),B.nE(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hv,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fN,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aB(A.c7,B.p(A.li,$.bky?A.bI:s,A.f,m,m,m,m,64,m,m,D.bsz,m,m,150),A.y,!1,m,n.gcB_(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a5),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aB(m,new B.an(A.Z,m,A.b2,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eAi(n,d),m,m,m,!1,A.a5),m,!1,!1,m,m)}}
C.JX.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aj0,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1R,w,w,w,w,w,w,w,w)}}
C.brE.prototype={
jg(d){return new B.a8(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jV(d){return d.b!==this.b}}
C.bhF.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aZD
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aF:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w8,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bd,new B.o(s.f,r,u,w,r,r,A.n),A.hB,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aF:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a5)}}
C.bhE.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dpF.h(0,p)
if(o==null)o=D.dbT
p=p==="none"
w=p?q:new B.a9(A.a3,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.I(A.aF,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.anp:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.em,q,q,52)
return B.aB(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aF:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a5)}}
C.aK8.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aMa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.bxp.prototype={}
C.aMb.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.b1h.prototype={}
C.W2.prototype={
S(){return new C.aEp()},
bgV(d){return this.e.$1(d)}}
C.aEp.prototype={
gb4B(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaay(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb4B()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOg(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4B()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5R(){return A.d.cJ(this.gaay(),0,new C.ezM())},
Z(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QY()},
QY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1T(s.c,s.f),$async$QY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ezI(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QY,v)},
J5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaay()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fJH(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pb(o,q.c,q.f),$async$J5)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ea(new C.ezL(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).cm(q),$async$J5)
case 4:q=t.a
w=5
return B.b(B.pa(q.c,q.f),$async$J5)
case 5:w=6
return B.b(t.QY(),$async$J5)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J5,v)},
Rk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e2u,!0,"NgmySlidesTransferScan",x.N),$async$Rk)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ezJ(t))
w=4
return B.b(C.aht(s),$async$Rk)
case 4:r=e
t.m(new C.ezK(t))
o=J.a4(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.f_m)
w=1
break}w=5
return B.b(t.a.bgV(r),$async$Rk)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rk,v)},
J4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaay()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pb(s,r.c,r.f),$async$J4)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fJW(null,A.d.gI(n),s,t.a.f)}else q=C.fJW(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gw(q,"ngmy_slides_"+p,!1),$async$J4)
case 4:o=e
s=t.a
w=5
return B.b(B.pa(s.c,s.f),$async$J4)
case 5:w=6
return B.b(t.QY(),$async$J4)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J4,v)},
a2M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ezN(t))
w=3
return B.b(C.bCG(),$async$a2M)
case 3:s=e
t.m(new C.ezO(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bgV(s),$async$a2M)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a4(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2M,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bM,k=o.gaay().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cB,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.ezR(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zN],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q5,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bQU,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eq,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bBE],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hx(B.aB(A.c7,D.eYh,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcf8(),n,n,n,n,n,n,!1,A.a5),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.Z,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1B,A.n),n,n,n,n,E.Zs,n,n,1/0),A.dZ,o.axu(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aXl(A.qb,m,new C.ezS(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aXl(D.bGx,m,new C.ezT(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.axu(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.aw:A.c
t=B.n(16)
s=B.I(m?A.bE:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bP,n,n,n))}else A.d.v(v,new B.M(u,new C.ezU(o,m),B.S(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mQ)
w.push(o.axu(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.aq7(A.aM,k,!0,A.jv,m,o.r,o.gc9k(),"Scan on another device","Show QR"),1),A.at,B.E(o.aMl(A.k1,!0,A.j5,m,o.gcrl(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bzf(A.aV,k,A.hF,m,o.r,o.gc9h(),"Download .json","Backup file"),1),A.at,B.E(o.aMl(A.aE,!0,Av.yE,m,o.gcDt(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lu,A.bj.j(0.9),n,n,n,18)
r=o.gaOg()
q=o.gb5R()
p=o.gb5R()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Af.MU,i,n),B.E(B.cw(w,n,D.bvY,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.W4,A.f,A.dC,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.Z,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afD(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.idJ(s,t.d,t.e),$async$afD)
case 2:return B.h(null,v)}})
return B.i($async$afD,v)},
axu(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXl(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.aw:A.c
if(g)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cC,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cq,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eH(new B.D(A.bB,B.x(B.a([t,A.R,u,A.bC,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bJU(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.aw:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bR5,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.e9:A.rf
if(p)r=A.bj
else r=e?A.aZ:A.dr
return new B.D(A.cv,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ezH(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
aq7(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.aw:A.c
if(f)w=d.j(0.45)
else w=h?A.bE:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rd,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anW,A.f,s,s,D.b1D,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.de(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eH(new B.D(E.Z6,B.x(B.a([new B.an(A.Z,s,A.aa,A.f,u,s),A.ac,v,A.bC,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aMl(d,e,f,g,h,i,j){return this.aq7(d,e,!1,f,g,!1,h,i,j)},
bzf(d,e,f,g,h,i,j,k){return this.aq7(d,e,!1,f,g,h,i,j,k)}}
C.W3.prototype={
S(){return new C.bkx()}}
C.bkx.prototype={
Z(){this.a1()
this.aeu()},
aeu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aeu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fJW(null,A.d.gI(m),k,r.a.f):C.fJW(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kA(A.d.gI(n).w))C.fJH(A.d.gI(r.a.d),D.d9K)
n=r.a
m=n.c
n=C.iaG(n.d)
w=7
return B.b(C.fJV(p,C.iaL(r.a.d),n,m,q),$async$aeu)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ezV(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ezW(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.ezX())
v=B.aH(j,j,j,j,B.X(A.eF,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ezY(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zN],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1B,A.n),j,j,j,j,E.Zs,j,j,1/0)
q=B.n(24)
s=B.I(A.aM.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a8a,A.L,j,j))
else if(k.d==null)r.push(D.edo)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aF.j(0.35),A.cC,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.ft_,A.am,B.aB(j,B.p(j,B.B(B.a([D.bSE,A.at,B.d(m,j,j,j,j,j,j,D.ffz,j,j,j)],u),A.m,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bXs,A.n),j,j,j,j,A_.aiN,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ezZ(k,d),j,j,j,j,j,j,!1,A.a5),A.O,D.fxj,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bE,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pT(j,j,!1,l,j,!0,!0,j,!1,D.bn9),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cq,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hi,A.L,j,j))
return B.c6(j,h,B.bm(!0,B.x(B.a([new B.D(Af.MU,v,j),B.E(B.cd(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bZp,A.n),j,j,j,j,A.tV,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aj5,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aEm.prototype={
S(){return new C.aEn(new B.at(A.as,$.aw()),B.jW(!0,null,!0,!0,null,null,!1))}}
C.aEn.prototype={
Z(){var w=this
w.a1()
w.e.aR(0,new C.etp(w))
$.aW.x1$.push(new C.etq(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
b_1(){var w,v=this.c
v.toString
w=C.yK(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eI,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uE,36),D.abT],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bO7,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fq8,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b23,k,k,k,k,A.y_,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aw:A.M
o=new B.aR(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bg,B.df(A.A,new B.y(p,k,D.f99,k,k,k,k,k,k,k,k,k),k,k,A.bd,new B.o(s,k,new B.bO(m,m,m,m),new B.bn(o,o,o,o),n,k,A.n),A.hB,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J9)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bW(0,B.de(B.aM(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bVo,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uq(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bx(5,k),new C.buV()],x.aS),k,k,A.aQa,k,5,k,1,k,k,!1,"\u2022",k,new C.etl(l),k,new C.etm(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.ma,k,k,k,k),0),0,0,0)],a1)
d=C.yK(w.a.a.toUpperCase())==null?k:l.gc9l()
return B.av(new B.D(new B.R(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ac.KC,B.p(k,B.by(e,B.x(B.a([a0,new B.D(D.bws,B.x(B.a([new B.an(A.Z,k,A.aa,A.r,g,k),A.R,D.fou,A.by,new B.a7(1/0,50,B.bG(D.fF3,d,B.bo(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.a0),k,k,k)),k),A.am,B.bK(!1,A.nG,k,k,!0,k,k,new C.etn(a2),k,B.fz(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.buV.prototype={
oD(d,e){var w=e.a.toUpperCase()
return e.cJJ(B.hi(A.bw,w.length),w)}}
C.arl.prototype={
S(){return new C.aEq(B.zo(A.Ma,A.nN,A.un))}}
C.aEq.prototype={
q(){this.d.q()
this.a2()},
b_0(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aas(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aas=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fSC(s),$async$aas)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b_0("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aas,v)},
c9j(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.iaJ(w[u])
if(t!=null){this.b_0(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.w5,s,s,s,t.gbOa(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.X(q?A.ri:Ak.NQ,s,s,s,s,s),s,s,s,new C.eA0(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fGh,s,s,s,1,s,!0)
r=B.zn(t.d,A.bX,t.gc9i())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c6(p,A.w,new B.an(A.Z,s,A.b2,A.r,B.a([r,w,B.ao(32,B.p(s,D.fu3,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jq,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bv6.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,H.anB,A.f,w,w,D.b1N,w,56,w,w,w,w,w,56),A.aR,D.fFY,A.am,new B.jN(this.c,new C.faE(),w,w,x.cI),A.aR,new B.jN(this.d,new C.faF(),w,w,x.cl),A.ac,D.fFV],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,Ac.KC,new B.o(A.aw,w,u,v,w,w,A.n),w,w,w,L.Zz,D.bx5,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7O.prototype={
S(){return new C.bkg(A.bx)},
gde(){return this.c}}
C.bkg.prototype={
Z(){var w=this
w.a1()
if(w.a.d)return
w.a_5()
w.d=B.dv(A.fZ,new C.ehx(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
a_5(){return this.cnF()},
cnF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ehv(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.T(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cg3(p.c),$async$a_5)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ehw(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_5,v)},
bQa(d){var w,v,u=d.a,t=A.o.am(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.am(u,6e7)%60
v=A.o.am(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aY(A.o.u(w),2,"0")+"m "+A.a.aY(A.o.u(v),2,"0")+"s left"
return A.a.aY(A.o.u(w),2,"0")+":"+A.a.aY(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.am(w,6e7)<30&&A.o.am(w,36e8)<999?A.av:A.c0
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.Gb,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bQa(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,V.ahR,A.i9,r,r,1/0)}}
C.a8I.prototype={
ni(){var w,v,u,t=this
t.xi()
w=t.cx
v=t.c
w.bqL(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pZ(B.G(["/S",D.eh3,"/URI",new B.rA(B.WB(w.as),A.uH,!0)],x.N,u),u))}}
C.a8J.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2W.prototype={
byh(d,e,f,g,h,i,j,k,l,m){var w=B.ev([D.efm],x.di)
this.w!==$&&B.aP()
this.w=w},
gcN0(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jV(w,new C.cif(),B.a3(w).k("jV<co.E,F>")).ff(0,new C.cig())},
aD_(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hg(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tC(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.tC(H.apE))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcN0()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pZ(w,x.Y))}}
C.cih.prototype={}
C.a2U.prototype={}
C.aik.prototype={}
C.aRe.prototype={
h4(d){var w,v,u,t,s,r,q=this,p=null
q.ln(d)
q.M2(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bgi(w)
u=x.N
t=x.Y
s=new C.cih(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.byh(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pZ(B.G(["/Type",D.eh1],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8I(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awN.prototype={}
C.aSM.prototype={
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
u.La(t)
u.SA(0)
u.oY(0,v)
w.h4(d)
u.nl(0)}}}
var z=a.updateTypes(["aA<~>()","~(lI)","Q(i5)","~()","Q(eM)","Q(op)","Q(lI)","~(i5)","Q(eM,eM)","JX(Y)","Q(nO)","Q(lg)","aA<Q>()","F(F,i5)","a6<m,@>(i5)","ai<zH>()","m(nO)","Q(a84)","m(lI)","m(w5)","Q(EK)","F(i5,i5)","m(eM)","t(eM)","cL(eM)","t(hF)","~(hF)","eM(uO,K,K,K,K,F{fx:m,key:m,rotation:K})","eM(m,K,F)","F(op,op)","Q(zH)","Q(m,ai<zH>)","a6<m,@>(op)","nO()","YF(Y)","eM(m,K,K,K,K,K{align:q4,anim:hF,bullets:Q,color:F?,delay:F,fx:m,key:m,style:HL,weight:nC})","a0V(Y)","eM(m,K,K,K,K{anim:hF,delay:F,fx:m,key:m})","aA<~>(op)","Q(mu)","YD(Y)","a0s(Y)","a0r(Y)","Ps(Y)","ZO(Y)","eM(uO,K,K,K,K,F,m,m{anim:hF,delay:F,rotation:K,stroke:F,strokeWidth:K})","eM(m,K,K,K,K,K,m,m,F)","eM(K,K,m,F{size:K})","t(ro,K,K)","lg()","op(a6<@,@>)","~(uE)","EK()","fg(eM)","t(j1)","Zm(Y)","~(EB)","ZH(Y)","F(eM,eM)","eM(eM)","a6<m,@>(eM)","eM(a6<@,@>)","lI(lI)","a6<m,@>(lI)","lI(a6<@,@>)","Q(jH)","jH()","m(i5)","~(ai<op>)","T(ai<i5>)","T(i5)","ai<i5>(m?)","acM(Y,F)","~(Q(eM,eM))","adq(Y)","af6(Y,F)","w(lI,Q)","VP(Y)","adt(Y)","VS(Y)","~(my)","i5(i5)","K(eM)","a_W(Y)","a_y(Y)","i5()","ai<F6>()","aA<~>(ai<i5>)","t(bx<F,i5>)","D(jH)","D(EK)","aA<~>(hF,~())","t(ai<hF>,hF?,~(hF),w)","Q(m8)","ai<jq<my>>(Y)","jq<my>(my)","i5(a6<@,@>)","W2(Y)","eM(m,K,K,K,K,K,F{align:q4,style:HL,weight:nC})","W3(Y)","t(i5)","~(m0)","IP(Y,lI,t?)","F(a8J)","aA<ai<a6<m,@>>?>()","m(m)","aA<zF>({paper:m?,photo:dL?,request:m,template!lj})","aA<a7X>({doc!zF,history:ai<+(m,m)>,instruction!m,photo:dL?,template!lj})","adn(Y)"])
C.cGj.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cGk.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cGl.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakd(s):16;--w.c}w.b=A.o.dZ(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mu(v,t)
w.b=v-A.o.dZ(q,t)
w.a=t
return q},
$S:74}
C.cGm.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bPj.prototype={
$1(d){return J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.fwt.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.c_5.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:30}
C.c_6.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aM(v,J.k(w==null?"":w))},
$S:43}
C.c_8.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fMG.prototype={
$1(d){return new C.a0V(this.a,this.b,C.ibB(),null)},
$S:z+36}
C.f96.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f9a.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f9b.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f9c.prototype={
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
C.f97.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f98.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f99.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f91.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hJ,w,w,w)
return B.em(B.a([B.bK(!1,D.fst,w,w,!0,w,w,new C.f9_(d),w,w),B.bK(!1,D.fry,w,w,!0,w,w,new C.f90(d),w,w)],x.p),w,w,D.XV,v,w,w,w,w,D.fGA,w)},
$S:20}
C.f9_.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f90.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f92.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f93.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f9g.prototype={
$0(){var w=this.a
return w.m(new C.f9f(w,this.b))},
$S:0}
C.f9f.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f95.prototype={
$0(){var w=this.a
return w.m(new C.f94(w,this.b,this.c))},
$S:0}
C.f94.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f9d.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
C.f9e.prototype={
$0(){return this.a.Pa(0,this.b)},
$S:0}
C.f9j.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f9k.prototype={
$0(){var w=this.a
return w.m(new C.f9i(w,this.b))},
$S:0}
C.f9i.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f9h(),B.S(w).k("M<1,m>")))}},
$S:0}
C.f9h.prototype={
$1(d){return d.a},
$S:z+67}
C.fgp.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hc2(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cy)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.op(s,v,u==null?new B.T(Date.now(),0,!1):u)},
$S:z+50}
C.fgq.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fzi.prototype={
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
C.fzg.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fzh.prototype={
$2(d,e){return e.c.aM(0,d.c)},
$S:z+29}
C.fMa.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fw7.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fN1.prototype={
$1(d){return new C.YF(this.a,null)},
$S:z+34}
C.cHF.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cHH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHK.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cHJ())},
$S:11}
C.cHJ.prototype={
$0(){},
$S:0}
C.cHM.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1U(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cHI(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahC(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:292}
C.cHI.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHN.prototype={
$1(d){},
$S:29}
C.cHG.prototype={
$1(d){return new C.YD(this.b,this.a.gcxy(),null)},
$S:z+40}
C.cHO.prototype={
$1(d){return D.h4z},
$S:z+43}
C.cHB.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.XA,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bwS,B.x(B.a([B.p(w,D.bLj,A.f,w,w,new B.o(A.av.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aR,D.fqz,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fez,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,new B.D(A.q1,B.B(B.a([B.E(B.dW(D.fxl,new C.cHz(d),B.dg(w,w,w,w,w,w,w,w,w,E.n7,w,w,A.cm,w,new B.b7(B.n(14),A.a0),D.b_3,w,w,w,w)),1),A.at,B.E(B.bG(D.fDj,new C.cHA(d),B.bo(A.bz,w,w,w,w,w,A.cm,w,new B.b7(B.n(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.N,0,A.p),A.f,w,A.x5,new B.o(D.adz,w,u,v,D.cZw,w,A.n),w,w,w,L.Zz,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1671}
C.cHz.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cHA.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cHC.prototype={
$0(){return J.nv(this.a.d,new C.cHy(this.b))},
$S:0}
C.cHy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cHx.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.XA,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bQg,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.apa,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRP,t,t,t),A.bC,D.fDf],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dkM[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axG(u[1],u[2],u[3],new C.cHv(v,d),!1,t))}q.push(A.am)
q.push(D.bqZ)
q.push(A.am)
q.push(new C.axG(A.ea,"Delete book","Remove it from this device",new C.cHw(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.F,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.adz,t,r,s,t,t,A.n),t,t,t,A.tR,E.Zc,t,t,t),!0,!1,A.af,!0,!0)},
$S:27}
C.cHv.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cHw.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cHE.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aHA,12)],x.V)
return B.dX(B.eJ(A.A,e,B.p(w,B.by(B.n(4),new B.a7(62,95.81818181818181,B.eQ(A.A,F.aod(d),A.f,A.dw),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cHD.prototype={
$0(){return this.a.c3S()},
$S:0}
C.cHu.prototype={
$0(){return this.a.aYu(0,this.b)},
$S:0}
C.cHt.prototype={
$0(){return this.a.Dd(this.b)},
$S:0}
C.cHs.prototype={
$0(){return this.a.Dd(this.b)},
$S:0}
C.cHP.prototype={
$2(d,e){var w=this.a
return w.bCO(J.q(w.d,e))},
$S:41}
C.cGW.prototype={
$0(){var w=this.a
if(w.c!=null)w.AN()},
$S:0}
C.cGV.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0u("Page "+(v.length+1),"",""))},
$S:0}
C.cGY.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cH5.prototype={
$0(){},
$S:0}
C.cH6.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cGZ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cL.gcu().aK(this.c)},
$S:0}
C.cGX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cH0.prototype={
$0(){return this.a.Qv(this.b)},
$S:0}
C.cH1.prototype={
$0(){return this.a.Qv(this.b)},
$S:0}
C.cH2.prototype={
$0(){var w=this.a
w.m(new C.cH_(this.b))
w.E4()},
$S:0}
C.cH_.prototype={
$0(){return this.a.c=""},
$S:0}
C.cH4.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cH3(w,d))
w.E4()},
$S:z+51}
C.cH3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cHb.prototype={
$2(d,e){if(d)this.a.AN()},
$S:122}
C.cH7.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AN(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.f1U)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cH8.prototype={
$0(){return this.a.aXs(this.b,-1)},
$S:0}
C.cH9.prototype={
$0(){return this.a.aXs(this.b,1)},
$S:0}
C.cHa.prototype={
$0(){return this.a.c5a(0,this.b)},
$S:0}
C.fDN.prototype={
$1(d){return C.hm3()},
$S:45}
C.fDO.prototype={
$1(d){return null},
$S:29}
C.fkQ.prototype={
$1(d){return null},
$S:29}
C.fEM.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:330}
C.fEL.prototype={
$2(d,e){return A.o.aM(e.length,d.length)},
$S:272}
C.fES.prototype={
$1(d){var w=this.a
return C.h4o(d)===w||C.hqD(d)===w},
$S:z+4}
C.fjT.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:79}
C.can.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDL.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fDM.prototype={
$1(d){return C.fGv(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fyE.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xZ,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fxX,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GN,D.fs9,new C.fyC(d),B.bo(A.c0,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.R,B.es(A.w4,D.fzc,new C.fyD(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x3,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fyC.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyD.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fyF.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,D.fol,w,w,!0,w,w,new C.fyA(d),w,w),B.bG(D.fFB,new C.fyB(d),w)],x.p),w,w,w,D.fHv,w,w,w,w,D.foe,w)},
$S:20}
C.fyA.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fyB.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ecl.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ecj.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eck.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ecm.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ecn.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fER.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:79}
C.fEN.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bm(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fEP.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.ffM,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:151}
C.fEQ.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i6,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dX(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i6,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fEO.prototype={
$2$female$size(d,e){var w=null,v=d?D.afv:this.a,u=B.I(A.i6,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adO,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fQt.prototype={
$1(d){return new C.adn(this.a,this.b,null)},
$S:z+108}
C.dZY.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bnF:A.LG,q=B.I(D.ji.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c0.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.anV,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.ji.j(0.35),A.eo,10)],x.V),D.c_1,A.n),t,t,t,t,A.xQ,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(I.Zo,B.x(B.a([p,A.aB,B.B(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.ji,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.ff1,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aPc,new C.dZX(w,this.c),v,D.aiI,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mg,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.dZX.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acM(w,new C.dZW(this.b,w),null)},
$S:z+72}
C.dZW.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fyI.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fyJ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xZ,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fBo,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GN,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyG(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.es(A.oc,D.Uk,new C.fyH(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x3,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fyG.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyH.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fyM.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fyN.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xZ,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fpm,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GN,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyK(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.es(A.oc,D.Uk,new C.fyL(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x3,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fyK.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyL.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fyQ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fyR.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xZ,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvL,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GN,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyO(d),B.bo(D.ji,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.es(A.oc,D.Uk,new C.fyP(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x3,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fyO.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyP.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fRW.prototype={
$1(d){return D.h8P},
$S:z+74}
C.ehA.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bfe:A.LG,s=B.I(A.ay.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bSA,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c0.j(0.35),A.eo,10)],x.V),D.apf,A.n),v,v,v,v,A.xQ,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(I.Zo,B.x(B.a([r,A.aB,B.B(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.LC,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bC,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fcw,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aPc,new C.ehz(this.b),19,D.aiI,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mg,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.ehz.prototype={
$2(d,e){var w=D.R3[e]
return new C.af6(w,new C.ehy(this.a,w),null)},
$S:z+75}
C.ehy.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fGz.prototype={
$0(){return B.h3k(C.i_3(this.a))},
$S:298}
C.fGy.prototype={
$0(){var w=C.h4H(this.a)
return"data:image/png;base64,"+A.cL.gcu().aK(w)},
$S:22}
C.fhZ.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1R(this.a,C.fC(4291404327),v)},
$S:665}
C.fS6.prototype={
$1(d){return new C.VP(this.a,null)},
$S:z+77}
C.ekS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekR())},
$S:31}
C.ekR.prototype={
$0(){},
$S:0}
C.ekT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekQ(w,d))},
$S:1676}
C.ekQ.prototype={
$0(){return this.a.x=J.eX(A.dD.gaP(this.b))},
$S:0}
C.ekU.prototype={
$1(d){},
$S:29}
C.eku.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ekq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ekB.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ekC.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.er5)},
$S:0}
C.ekD.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekw.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bQ(0,A.c9)},
$S:0}
C.ekx.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.eky.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.v(this.b)))},
$S:0}
C.ekz.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekA.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.me(v,A.dV,A.io)}},
$S:8}
C.ekv.prototype={
$0(){var w=this.a,v=w.z,u=C.fHc(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cIR(C.fHc(t))},
$S:0}
C.eks.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ekt.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekJ.prototype={
$0(){return B.a5(this.a,!1).ld()},
$S:0}
C.ekK.prototype={
$0(){var w=this.a
return w.m(new C.ekI(w))},
$S:0}
C.ekI.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ekL.prototype={
$0(){var w=this.a
return w.m(new C.ekH(w,this.b))},
$S:0}
C.ekH.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ekM.prototype={
$1(d){var w=this.a
return w.m(new C.ekG(w))},
$S:9}
C.ekG.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ekN.prototype={
$1(d){var w=this.a
return w.m(new C.ekF(w))},
$S:9}
C.ekF.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ekO.prototype={
$0(){var w=this.a
return w.m(new C.ekE(w,this.b))},
$S:0}
C.ekE.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ekP.prototype={
$1(d){return this.a.ZS()},
$S:2}
C.ekr.prototype={
$0(){return this.a.c8B(this.b)},
$S:0}
C.ce3.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:282}
C.ce1.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ce2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fG9.prototype={
blq(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bPi(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cFm($.qY().jJ(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mK(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.blq(d,e)},
$S:1677}
C.fEr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fEt.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.du(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:79}
C.fEs.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fN(t,t,t,t,B.cX(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qA,A.c4,t,A.dL,A.c3)
v=this.a
w.uD(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:32}
C.fhz.prototype={
$1(d){var w=A.a.fI(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.fhA(),B.S(w).k("a_<1>")).gM(0)},
$S:271}
C.fhA.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhx.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.fhy.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.ce4.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAj()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h4n(i,new B.H(!0,h,a6,k,a6,a6,q,A.cO,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h1a(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gcgM(),"\n\n")
d=B.fN(a6,a6,a6,a6,B.cX(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aej(k,q,1.28),j),A.qA,A.c4,a6,A.dL,A.c3)
d.uD(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h4n(i,new B.H(!0,h,a6,k,a6,a6,q,A.cO,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h1a(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aej(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bg,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qA,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAi(s,j))
i.push(new B.a7(s,a6,B.x(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:385}
C.ce5.prototype={
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
n=o.gaAj()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h4n(f,new B.H(!0,e,a5,i,a5,a5,h,A.cO,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h1a(g.length===0?B.a([a6],n):g,l))break}a1=o.aej(i,h,1.28)
a2=new C.ce6(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.J8,new B.a7(v,a5,a4.f,a5),A.J8,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bza,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bg,new B.y(l[2+a3],a5,a1,a5,A.qA,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAi(r,g))
f.push(new B.a7(r,a5,B.x(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:145}
C.ce6.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qA,w,w),w)},
$S:1678}
C.fS9.prototype={
$1(d){return new C.VS(this.a,this.b,null)},
$S:z+79}
C.em3.prototype={
$1(d){return d.lI()},
$S:1679}
C.em4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.em2(w,d))},
$S:1680}
C.em2.prototype={
$0(){var w=this.b
return this.a.d=w.gfz(w)},
$S:0}
C.elR.prototype={
$0(){return this.a.y=!0},
$S:0}
C.elS.prototype={
$0(){return this.a.y=!1},
$S:0}
C.elY.prototype={
$0(){return B.a5(this.a,!1).eF()},
$S:0}
C.elZ.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bD,A.q,2.5)
return B.aB(w,B.p(w,B.b3(w,w,w,new C.bc_(u,v.gaxn(),w),A.f6),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.elW(v),new C.elX(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a5)},
$S:36}
C.elW.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:253}
C.elX.prototype={
$1(d){var w=this.a
w.m(new C.elT(w,d,this.b,this.c))},
$S:204}
C.elT.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaxn()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.em_.prototype={
$1(d){var w=this.a
return w.m(new C.elV(w,this.b))},
$S:9}
C.elV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.em0.prototype={
$1(d){var w=this.a
return w.m(new C.elU(w,d))},
$S:6}
C.elU.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.em1.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fSp.prototype={
$1(d){return D.hbC},
$S:z+83}
C.eVF.prototype={
$1(d){return this.a.Yw()},
$S:8}
C.eUx.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cL.gcu().aK(v)},
$S:0}
C.eUV.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eV4.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eUg.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eUh.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eUe.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eUf.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eUO.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eUP(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jA(B.rG(p>0.2?C.fWU(q,B.a5a(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a5a(12,12,A.x)
p.push(B.jA(B.de(B.rG(C.fWU(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b2
if(r!=null&&s.b1>0)p.push(B.en(u,B.b0(r).j(s.b1),!0))
r=s.bb
if(r!=null&&s.bL>0){r=B.b0(r).j(s.bL)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bS(D.aXS,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aF
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bS(D.aXD,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aJ
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a9(A.b1,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aJ)],x.O),D.cY8,u),A.n),A.bf))
if(s.aC>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a9(A.b1,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.d8a,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.en(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bS(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d5e,u),A.n),A.bf))
s=s.aA
if(s>0)p.push(B.b3(u,u,u,new C.bfy(s,u),A.ax))
return new B.an(A.Z,u,A.b2,A.r,p,u)},
$S:65}
C.eUP.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cg,A.bX,!0,q,!1,q,q),o=r.a,n=o.aX4(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
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
t=o.bE
s=o.c4?-1:1
return B.dX(B.ef(A.A,B.eJ(A.A,l,B.fw(A.A,new B.Ds(new B.z3(q,q,n,A.AC),p,q),q,B.vS(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:484}
C.eV0.prototype={
$0(){return this.a.m(new C.eV_(this.b,this.c))},
$S:0}
C.eV_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eV1.prototype={
$1(d){return this.a.m(new C.eUZ(this.b,d))},
$S:6}
C.eUZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eV3.prototype={
$0(){return this.a.m(new C.eV2(this.b,this.c))},
$S:0}
C.eV2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eU6.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eU7.prototype={
$1(d){var w=this.a
return w.m(w.gcyX())},
$S:2}
C.eU8.prototype={
$1(d){return this.a.m(new C.eU5())},
$S:2}
C.eU5.prototype={
$0(){},
$S:0}
C.eU9.prototype={
$0(){var w=this.a
return w.m(new C.eU4(w,this.b))},
$S:0}
C.eU4.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eUb.prototype={
$2(d,e){return A.at},
$S:37}
C.eUa.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bE
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bd,new B.o(w,w,q,s,w,new B.a9(A.b1,A.b5,A.x,r,w,w),A.n),A.hB,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.x(B.a([r,A.fF,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eU3(u,v),w,w,w,w,w,w,!1,A.a5)},
$S:77}
C.eU3.prototype={
$0(){var w=this.a
return w.m(new C.eU0(w,this.b))},
$S:0}
C.eU0.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eUc.prototype={
$1(d){var w=this.a
return w.m(new C.eU2(w,d))},
$S:9}
C.eU2.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eUd.prototype={
$1(d){var w=this.a
return w.m(new C.eU1(w,d))},
$S:9}
C.eU1.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eVu.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:32}
C.eVB.prototype={
$1(d){var w=this.a
return w.m(new C.eVC(w,d))},
$S:28}
C.eVC.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eVD.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:258}
C.eVv.prototype={
$0(){var w=this.a
return w.m(new C.eVt(w,this.b))},
$S:0}
C.eVt.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eVw.prototype={
$0(){var w=this.a
return w.m(new C.eVs(w,this.b))},
$S:0}
C.eVs.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eVx.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eVr(v,w.b,w.c,w.d))},
$S:0}
C.eVr.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eVy.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grJ(v))},
$S:0}
C.eVz.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eVA.prototype={
$0(){var w=this.a
return w.m(new C.eVq(w))},
$S:0}
C.eVq.prototype={
$0(){var w=this.a.db
return A.d.h7(w,0,w.length,0)},
$S:0}
C.eVd.prototype={
$1(d){return d.a===this.a.dy},
$S:214}
C.eVe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.axl[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aR(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.axr(new B.nd(new B.bn(n,n,n,n),A.aq,new B.kT(new B.o(j,j,j,j,j,new B.a9(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.b_a(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eVc(r,v),2,i))}return B.bU(A.bA,h,A.bq,7,7)},
$S:176}
C.eVc.prototype={
$0(){var w=this.b
return w.m(new C.eV7(this.a,w))},
$S:0}
C.eV7.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eVf.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:235}
C.eVi.prototype={
$0(){var w=this.a
return w.m(new C.eVb(w))},
$S:0}
C.eVb.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eVj.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eVk.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eVl.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eVm.prototype={
$0(){var w=this.a
return w.m(new C.eVa(w))},
$S:0}
C.eVa.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eVn.prototype={
$0(){var w=this.a
return w.m(new C.eV9(w))},
$S:0}
C.eV9.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eVo.prototype={
$0(){var w=this.b
return w.m(new C.eV8(this.a,w))},
$S:0}
C.eV8.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eVp.prototype={
$1(d){return this.a.fx=d},
$S:235}
C.eVg.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eVh.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eUS.prototype={
$0(){var w=this.a
return w.m(new C.eUR(w))},
$S:0}
C.eUR.prototype={
$0(){var w=this.a
w.p4=null
w.b3i()},
$S:0}
C.eUT.prototype={
$0(){var w=this.a
return w.m(new C.eUQ(w,this.b))},
$S:0}
C.eUQ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eUU.prototype={
$0(){var w=this.a
return w.m(w.gcpi())},
$S:0}
C.eUK.prototype={
$0(){var w=this.a
return w.m(new C.eUJ(w))},
$S:0}
C.eUJ.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eUL.prototype={
$0(){var w=this.a
return w.m(new C.eUI(w))},
$S:0}
C.eUI.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eUM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d5D[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aR(9,9)
m.push(v.axr(new B.nd(new B.bn(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Ds(new B.z3(o,o,v.aX4(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AC),B.fR(u,A.A,140,o,A.cg,A.bX,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eUH(v,s),3,n))}return B.bU(A.bA,m,A.bq,10,8)},
$S:176}
C.eUH.prototype={
$0(){var w=this.a
return w.m(new C.eUG(w,this.b))},
$S:0}
C.eUG.prototype={
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
C.eUo.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eUp.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eUq.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eUr.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eUs.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eUt.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eUu.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eUv.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eUw.prototype={
$1(d){return this.a.aJ=d},
$S:6}
C.eTK.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eTL.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eTM.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eTN.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eTO.prototype={
$0(){var w=this.a
return w.m(new C.eTJ(w))},
$S:0}
C.eTJ.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eTP.prototype={
$1(d){return this.a.b2=d},
$S:235}
C.eTQ.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eUi.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eUj.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eUk.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eUl.prototype={
$1(d){return this.a.bb=d},
$S:235}
C.eUm.prototype={
$1(d){return this.a.bL=d},
$S:6}
C.eTU.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.eTV.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eTW.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.eTX.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.eTY.prototype={
$0(){var w=this.a
return w.m(new C.eTT(w))},
$S:0}
C.eTT.prototype={
$0(){var w=this.a
return w.c6=A.k.E(w.c6+90+180,360)-180},
$S:0}
C.eTZ.prototype={
$0(){var w=this.a
return w.m(new C.eTS(w))},
$S:0}
C.eTS.prototype={
$0(){var w=this.a
return w.c4=!w.c4},
$S:0}
C.eU_.prototype={
$0(){var w=this.a
return w.m(new C.eTR(w))},
$S:0}
C.eTR.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eUN.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iem(v,w.p4)},
$S:0}
C.eUF.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bnZ:B.fR(v,A.A,w,w,A.cg,A.bX,!1,w,!1,w,w)
return C.fEz(d.length===0?"rounded":d,u,e)},
$S:127}
C.eUB.prototype={
$0(){var w=this.a
return w.m(new C.eUA(w))},
$S:0}
C.eUA.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eUC.prototype={
$0(){var w=this.b
return w.m(new C.eUz(this.a,w))},
$S:0}
C.eUz.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eUD.prototype={
$0(){var w=this.b
return w.m(new C.eUy(this.a,w))},
$S:0}
C.eUy.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eUE.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eUY.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ex(n.ciH(),n.r))
l.push(new C.IP(n.cvU(),!1,!1,t))
o=B.bW(0,B.by(o,new B.ex(new B.an(A.Z,t,A.b2,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.Z,t,A.aa,A.r,B.a([o,B.ao(t,B.aB(A.c7,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eUX(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a5),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:228}
C.eUX.prototype={
$1(d){var w=this.a
return w.m(new C.eUW(w,d,this.b,this.c))},
$S:18}
C.eUW.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eV6.prototype={
$0(){var w=this.a
return w.m(new C.eV5(w,this.b))},
$S:0}
C.eV5.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eUn.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).ld()},
$S:0}
C.eVE.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.aZT(),B.E(B.av(w.b1Q(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aQ9(),1),w.aMm()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.aZT(),new B.D(A.hC,B.av(s.b1Q(u),t,t,t),t),B.E(s.aQ9(),1),s.aMm()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:569}
C.fBQ.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bAD(),null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cn,D.cS,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.P)},
$S:z+98}
C.fBP.prototype={
$3(d,e,f){var w=this,v=C.bAD(),u=w.b?A.H:A.cx,t=w.c?A.cF:A.bo
return C.er(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bh,4280172719,2,d,0,w.f,w.e,D.cn,D.cS,0.82,0.09,w.a)},
$S:z+28}
C.cfr.prototype={
$1(d){return B.v(d)},
$S:17}
C.fJw.prototype={
$0(){return this.a},
$S:z+15}
C.fph.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.fpi.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fJy.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fJB.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fJC.prototype={
$0(){return A.d.gI(D.wf)},
$S:z+33}
C.fJu.prototype={
$1(d){return d.a},
$S:z+16}
C.fJx.prototype={
$1(d){return d.a},
$S:z+16}
C.fHu.prototype={
$1(d){return A.a.i(B.v(d))},
$S:17}
C.fHv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHw.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fBU.prototype={
$0(){return C.cC()},
$S:22}
C.fBX.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.er(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bh,4280172719,2,d,s,0,"",t,D.cS,g,e,f)},
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
C.fBW.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.f5,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fBV.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bh,4280172719,2,"",t,0,"",u,D.lB,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qp,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fBT.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fEk.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hn5.ca(0,A.a.i(s.w).toLowerCase(),new C.fEi(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ca(0,s.r,new C.fEj(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bx(t.e,new B.boy(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fEi.prototype={
$0(){return F.aNL(this.a.w)},
$S:180}
C.fEj.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bzw("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ie(2,w,A.ch,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.fht.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fhu.prototype={
$1(d){return d.a},
$S:z+18}
C.fhv.prototype={
$1(d){return d.b},
$S:z+19}
C.fSB.prototype={
$1(d){return D.hbT},
$S:z+41}
C.f0S.prototype={
$0(){return this.a.x=C.hRI(this.b,this.c.b)},
$S:0}
C.f0T.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f0Q.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:434}
C.f0R.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:434}
C.f0P.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.aw,null,new C.f0K(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jU,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b6(s,7)
if(r.length===0){n.m(new C.f0L(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.ht_(o,m.cJE(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f0M(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f0K.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f0O(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b6u,A.f,p,p,D.b1w,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cj:D.Co,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fEz(v,i.b3V(h),u),p)))}t=B.m3(1,m,4,10,10,p,A.dT,!0)
if(!l)return B.bm(!0,new B.D(A8.xW,t,p),!0,!1,A.af,!0,!0)
s=new C.f0N(i,d)
m=B.aI(d,A.bY,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.H6[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.x(B.a([D.fuc,A.R,t,A.dZ,D.eSu,A.au,D.fEX,A.R,B.m3(1.15,l,3,10,10,p,A.dT,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A8.xW,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:27}
C.f0O.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dn
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hD,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0J(this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:1685}
C.f0J.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.f0N.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bE
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.by(w,d.length===0?B.p(v,D.aop,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Nw(u.FF(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0I(this.b,d),v,v,v,v,v,v,!1,A.a5)},
$S:127}
C.f0I.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f0L.prototype={
$0(){var w=this.a
return w.w=w.w.FF("")},
$S:0}
C.f0M.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0y.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f0z.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f0B.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f0C.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f0D.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f0E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f0A(w,d))},
$S:2}
C.f0A.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f0F.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.v(this.b)},
$S:0}
C.f15.prototype={
$0(){return this.a.f.fO()},
$S:0}
C.f16.prototype={
$0(){var w=this.a
return w.m(new C.f14(w))},
$S:0}
C.f14.prototype={
$0(){return this.a.e=null},
$S:0}
C.f17.prototype={
$0(){var w=this.a
return w.m(new C.f13(w))},
$S:0}
C.f13.prototype={
$0(){return this.a.x=null},
$S:0}
C.f19.prototype={
$1(d){var w=this.a
return w.m(new C.f12(w,d))},
$S:34}
C.f12.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f1a.prototype={
$1(d){var w=this.a
return w.m(new C.f11(w,d))},
$S:34}
C.f11.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f1b.prototype={
$0(){var w=this.a
return w.m(new C.f10(w))},
$S:0}
C.f10.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f1c.prototype={
$1(d){var w=this.a
return w.m(new C.f1_(w,d))},
$S:34}
C.f1_.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f1d.prototype={
$1(d){var w=this.a
return w.m(new C.f0Z(w,d))},
$S:34}
C.f0Z.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1e.prototype={
$0(){var w=this.a
return w.m(new C.f0Y(w))},
$S:0}
C.f0Y.prototype={
$0(){var w=this.a
return w.w=w.w.FF("")},
$S:0}
C.f1f.prototype={
$0(){var w=this.a
return w.m(new C.f0X(w,this.b))},
$S:0}
C.f0X.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f1g.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bOP(D.a3i[v]),null))
return B.bU(A.bA,t,A.bq,8,8)},
$S:176}
C.f18.prototype={
$1(d){var w=this.a
return w.m(new C.f0W(w,d))},
$S:9}
C.f0W.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f0G.prototype={
$0(){var w=this.a
return w.m(new C.f0H(w,this.b,this.c))},
$S:0}
C.f0H.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.f0V.prototype={
$0(){var w=this.a
return w.m(new C.f0U(w,this.b))},
$S:0}
C.f0U.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fSA.prototype={
$1(d){return new C.a0r(this.a,this.b,null)},
$S:z+42}
C.f0r.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f0s.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f0t.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aH_?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f0u.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f0v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f0q(w,d))},
$S:2}
C.f0q.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f0w.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.v(this.b)},
$S:0}
C.f0x.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bQ(0,new B.bb(w,B.hi(A.bw,w.length),A.aO))},
$S:0}
C.fox.prototype={
$1(d){return d.a===this.a},
$S:214}
C.eh_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaxs(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cSa:D.d7V
t=D.xC.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xC.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bW(0,B.b3(q,q,q,new C.bhL(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bW(0,B.bPz(B.eJ(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a3,A.a8,A.x,B.a([A.K,D.bdv.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.by(s,new B.an(A.Z,q,A.aa,A.r,B.a([n,o,B.av(B.x(B.a([B.X(p.a.c?A.e9:A.m_,D.xC,q,q,q,20),A.au,B.eQ(A.A,B.nT(A.jB,D.fnJ,new C.egZ()),A.f,A.e_)],r),A.m,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fkn,A.f,q,q,new B.o(D.xC,q,q,B.n(6),q,q,A.n),q,q,q,q,M.ajn,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.az,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.egZ.prototype={
$1(d){return D.bYd.av(0,d)},
$S:68}
C.fJD.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fJE.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:214}
C.fJF.prototype={
$2(d,e){return A.o.aM(e.a.length,d.a.length)},
$S:1686}
C.fJG.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fJz.prototype={
$1(d){return d.a},
$S:z+18}
C.fJA.prototype={
$1(d){return d.b},
$S:z+19}
C.fRO.prototype={
$1(d){return new C.ZO(this.a,this.b,null)},
$S:z+44}
C.dki.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dkj.prototype={
$1(d){return d.a===this.a.gaiy()},
$S:z+10}
C.dkk.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dkn.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dko.prototype={
$0(){var w=this.a
return w.m(new C.dkm(w,this.b))},
$S:0}
C.dkm.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dkp.prototype={
$1(d){var w=this.a
return w.m(new C.dkl(w,d))},
$S:9}
C.dkl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.egY.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.fp(w,this.a)
return B.d9(w,0,B.dG(e,"count",x.S),B.S(w).c).dJ(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.fdV.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f5,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fdX.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cO,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bh,4280172719,2,d,l,0,"",D.mN,D.cS,g,e,f)},
$S:z+46}
C.fdW.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wB(0,"twinkle")
w=t===D.bh?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mN,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fdU.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fD0.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fD1.prototype={
$0(){return A.d.gI(D.Hf)},
$S:z+49}
C.fD2.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ffV.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fJ5.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bh,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bh,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.ft,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJ6.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bh,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bh,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bh,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.ft,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.ft,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJ7.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bh,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jT,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jT,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.ft,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJi.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jT,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jT,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jS,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bh,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJn.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jS,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bh,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.ft,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bh,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJo.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jT,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bh,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.ft,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJp.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cR9[w]
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.bh,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ku
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.ft,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJq.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mp,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.D_,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ku
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.ft,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fJr.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bh,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jS,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.ft,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJs.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bh,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.ft,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jT,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJt.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jT,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bh,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bh,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJ8.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jS,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jS,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.ft,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fJ9.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jS,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jS,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jS,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fJa.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bh,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bh,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jT,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jS,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.ft,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fJb.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bh,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jS,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jS,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.ft,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fJc.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lb,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lb,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lb,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lb,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lb,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.ft,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJd.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jT,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.ft,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJe.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mp,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.D_,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ku
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bh,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.ft,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJf.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bo,A.aD,s,A.bi,null,D.ft,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ku
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bh,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bh,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.ft,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJg.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bh,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.ft,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fJh.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j2
$.j2=t+1
t=new C.eM("design_"+(""+1000*u+"_"+t),D.f5,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bo,A.aD,r,A.bi,null,D.bh,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Ku
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.d5,A.cl,w/2).l()
t=Date.now()
s=$.j2
$.j2=s+1
u=new C.eM("design_"+(""+1000*t+"_"+s),D.f5,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bo,A.aD,r,A.bi,null,D.bh,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ku
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bh,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jS,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fJj.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jT,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jT,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jT,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jT,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bh,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eN,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJk.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bh,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eN,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eN,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eN,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jT,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJl.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bh,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bh,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bh,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.ft,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bo,A.aD,4279310375,A.bi,null,D.eN,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Ku
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fJm.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jT,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jT,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bh,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fAR.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fAS.prototype={
$0(){return A.d.gI($.bEf())},
$S:z+52}
C.fo4.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fo3.prototype={
$1(d){return C.hZ_(d,this.a,this.b)},
$S:z+53}
C.fJM.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vS(1.0375,1.01875,1)
return new B.fU(v,u,new C.aSM(B.hOJ(A.v7,C.hZ2(w.c,w.d,v,u),t)))},
$S:436}
C.dVI.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dVH.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bS(A.Kh,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jA(new B.an(A.Z,w,A.b2,A.r,B.a([t,new B.ex(B.b3(w,w,w,new C.beE(u.a,r,q,r),A.ax),w),B.av(new B.jN(r,new C.dVG(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:350}
C.dVG.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.i_(B.fR(i,A.A,r,r,A.cg,A.bX,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fZ(A.A,0,6.283185307179586,A.x,t,r,new B.mq(e*0.8)),A.a6),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.brg(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.de(B.dX(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKV(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.N,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.de(B.ef(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.m,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:106}
C.f_F.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:68}
C.c9Z.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bE
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hN.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.by(B.n(12),d,A.aq),v,v,A.bd,new B.o(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.x(B.a([w,A.fF,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a5)},
$S:1688}
C.ca_.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FF(""))},
$S:0}
C.ca0.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Nw(v.FF(u),!0,!1,null),!0,null),d.b,new C.ca1(w,this.c,d),v.a===u)},
$S:z+54}
C.ca1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.ht_(u.b,t.c.FF(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fQd.prototype={
$1(d){return new C.Zm(this.a,null)},
$S:z+55}
C.d9u.prototype={
$0(){var w=this.a
w.d=w.gvG().bbV("data:"+this.b+";base64,"+A.cL.gcu().aK(this.c));++w.r},
$S:0}
C.d9z.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d9A.prototype={
$0(){var w=this.a
return w.m(new C.d9y(w))},
$S:0}
C.d9y.prototype={
$0(){return this.a.r++},
$S:0}
C.d9B.prototype={
$1(d){var w=this.a
return w.m(new C.d9x(w,d))},
$S:2}
C.d9x.prototype={
$0(){var w=this.a
return w.d=w.gvG().aDR(this.b)},
$S:0}
C.d9C.prototype={
$0(){var w=this.a
return w.m(new C.d9w(w))},
$S:0}
C.d9w.prototype={
$0(){var w=this.a
return w.d=w.gvG().bbV("")},
$S:0}
C.d9D.prototype={
$1(d){var w=this.a
return w.m(new C.d9v(w,d))},
$S:2}
C.d9v.prototype={
$0(){var w=this.a
return w.d=w.gvG().bc1(this.b)},
$S:0}
C.d9E.prototype={
$0(){var w=this.a
w=w.gvG().bc1(w.gaxt().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fQc.prototype={
$1(d){var w={}
w.a=this.a
return new B.e_(new C.fQb(w),null)},
$S:19}
C.fQb.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bY,x.w).w.a.b*0.85),B.cd(B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fC1,A.au,D.fCh,A.aB,new C.b_7(v.a,new C.fQa(v,e,d),!0,w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b24,w,w,w,w,A.MF,w,w,w)},
$S:165}
C.fQa.prototype={
$1(d){this.b.$1(new C.fQ9(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fQ9.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fSz.prototype={
$1(d){return D.h6M},
$S:z+57}
C.dgh.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dgi.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.dgj.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fGs.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aC,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:68}
C.d9b.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cQ(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cQ(w,q+p,w,q+p*1.2))
u.F(new B.Da(B.bQ(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aQ(u,v.d)
s.aQ(u,v.e)
p=B.N()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:448}
C.fGw.prototype={
$2(d,e){return A.k.aM(d.c,e.c)},
$S:z+58}
C.fyU.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fyV.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xZ,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fkE,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GN,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyS(d),B.bo(A.c0,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.es(A.oc,D.Uk,new C.fyT(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x3,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fyS.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fyT.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cfp.prototype={
$1(d){return d.hK()},
$S:z+59}
C.cfq.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cfo.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdO(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hUN(b2.h(0,"type"))
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
n=A.azd[A.o.D(b4,0,8)]
m=D.cU4[A.o.D(w,0,1)]
l=C.hYq(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avR[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i0h(b2.h(0,"shape"))
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
a3=C.hob(b2.h(0,"textTransition"))
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
C.cfe.prototype={
$1(d){return d.hK()},
$S:z+62}
C.cff.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cfb.prototype={
$1(d){return B.v(d)},
$S:17}
C.cfc.prototype={
$1(d){return B.v(d)},
$S:17}
C.cfd.prototype={
$1(d){return C.heR(B.a2(d,x.N,x.z))},
$S:z+64}
C.cfG.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cfH.prototype={
$0(){return A.d.gI(D.a2W)},
$S:z+66}
C.cfB.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hK())},
$S:z+7}
C.cfA.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cfw.prototype={
$1(d){return new B.M(d,new C.cfx(),B.S(d).k("M<1,T>")).ff(0,new C.cfy())},
$S:z+69}
C.cfx.prototype={
$1(d){return d.f},
$S:z+70}
C.cfy.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:670}
C.cfz.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hKy(d)},
$S:z+71}
C.cfC.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cfD.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cfE.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fH4.prototype={
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
C.fH0.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fH1.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fH2.prototype={
$2(d,e){var w
if(d.b===D.cS){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fH3.prototype={
$2(d,e){return d.b===D.f5&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cfk.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i91(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cfj(),b5.k("J.E"),x.N)
w=B.dd(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pT.az(0,A.k.D(b1,0,1))
u=new C.cfl()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cfm(a9,b7.d)
r=new C.cfn(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jH.az(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kJ(A.k.D(1-k,0,1),B.dX(B.ef(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lB&&l.at==i.at?r.$1(i):new B.an(A.Z,a8,A.b2,A.r,B.a([new B.kJ(A.k.D(o,0,1),r.$1(l),a8),new B.kJ(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wn(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.mN
p.push(s.$5(i.c,i.d,i.e,i.f,C.hqs(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.Z,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:449}
C.cfj.prototype={
$1(d){return d.a},
$S:z+22}
C.cfl.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cfm.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cfn.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7N(v,C.b1e(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dHW.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ef(new B.dc(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cft.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cfu.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fJT.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:345}
C.fJ_.prototype={
$1(d){return new C.adt(this.a,this.b,null)},
$S:z+78}
C.etr.prototype={
$0(){return this.a.PX(this.b,C.icm(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ets.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PX(this.b,C.ico(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ett.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PX(this.b,C.icn(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.etu.prototype={
$0(){Y.hqc()
B.a5(this.a,!1).O(null)},
$S:0}
C.cfi.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cfh.prototype={
$2(d,e){var w,v=this,u=null,t=B.dO(d,A.nI),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.jP(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bX:A.dw
return B.fR(t,A.A,o,new C.cfg(),A.cg,w,!0,u,!1,new B.cy("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.cfg.prototype={
$3(d,e,f){return D.aco},
$S:211}
C.fH_.prototype={
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
r=B.C(new B.M(r,new C.fGZ(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c0(new B.an(A.Z,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1695}
C.fGZ.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b1e(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fqD.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fqB(d))
w=B.aI(d,A.bY,x.w).w
v=B.n(22)
u=B.I(A.bE,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fQ,28)],x.V)
s=x.p
return new B.d0(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.km,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.A_,q,q,!0,q,q,new C.fqC(p,d),q,B.fz(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.FC,q,new B.b7(B.n(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aw,q,u,v,t,q,A.n),q,q,q,A.fO,A.FL,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:242}
C.fqB.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pC())B.a5(w,!0).eF()},
$S:0}
C.fqC.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eF()},
$S:0}
C.f8c.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.de(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.dX(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),1.3-r*0.3,t,t)],x.p),t)
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
case 12:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.de(B.ef(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJr(r,t))],x.p),t)
case 15:return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJr(1-r,t))],x.p),t)
case 16:v=D.b5u.az(0,r)
return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.de(B.en(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mO(r*6.28)
s.jS(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eJ(A.A,(r-0.5)*0.35,new B.an(A.Z,t,A.b2,A.r,B.a([u.c,B.de(u.b,r)],x.p),t),t)}},
$S:60}
C.dTV.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dTU.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dTT.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hqs(v,w,e)},
$S:60}
C.cfa.prototype={
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
q=B.C(new B.M(v,new C.cf9(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.Z,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:449}
C.cf9.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7N(m,new C.V2(d,C.b1e(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d6q.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d6p(w))},
$S:11}
C.d6p.prototype={
$0(){return this.a.d++},
$S:0}
C.egG.prototype={
$2(d,e){var w,v=null,u=A.o.am(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aOe.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i8L(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fF(Math.sin(t)*0.32)
s.kb(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jS(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dX(B.ef(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.de(B.ef(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.eYi.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fG
return w},
$S:1696}
C.fEA.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdt()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.br9(u,t,r),A.ax))
w.push(B.ny(s.d,A.aq,new C.bfa(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bq9(u,q,t,r),A.ax))
return B.av(new B.a7(v.a,v.b,new B.an(A.Z,r,A.b2,A.r,w,r),r),r,r,r)},
$S:251}
C.ftA.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:330}
C.ezF.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CX(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gan(s)){u=null
w=1
break}u=r.dN(s,new C.ezD(),new C.ezE(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.ezD.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:200}
C.ezE.prototype={
$0(){return J.fs(this.a)},
$S:1699}
C.ew2.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ew3.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ew4.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.exD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exr.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.exs.prototype={
$1(d){return d.hK()},
$S:z+81}
C.evq.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eyL.prototype={
$0(){this.a.tC()},
$S:0}
C.ezB.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oi()
w.Kb()},
$S:0}
C.exB.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oi()
w.Kb()},
$S:0}
C.ezo.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezp.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.ezq.prototype={
$1(d){return d.a},
$S:z+22}
C.ezr.prototype={
$0(){var w=this.a.r
return new B.at(new B.bb(w,A.b4,A.aO),$.aw())},
$S:261}
C.ezs.prototype={
$0(){return B.jW(!0,null,!0,!0,null,null,!1)},
$S:674}
C.euP.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezC.prototype={
$0(){},
$S:0}
C.ewK.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()
w.Kb()},
$S:0}
C.euN.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xy()},
$S:0}
C.euO.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xy()},
$S:0}
C.ex6.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ex7.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()
w.Kb()
w.z="Home"},
$S:0}
C.ex8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewJ.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Uj,w,w,!0,w,w,new C.ewI(d),w,w)],x.p),w,w,w,D.fDP,w,w,w,w,D.fl5,w)},
$S:20}
C.ewI.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewG.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Uj,w,w,!0,w,w,new C.ewF(d),w,w)],x.p),w,w,w,D.fp4,w,w,w,w,D.fmO,w)},
$S:20}
C.ewF.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewH.prototype={
$0(){},
$S:0}
C.evZ.prototype={
$1(d){return this.a.b0b(C.bCf(d))},
$S:z+7}
C.ew_.prototype={
$1(d){return this.a.af7(C.bCf(d))},
$S:z+7}
C.ewQ.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fDT,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.PC(A.vT,D.axd,"HATI YA KUHOWA","Hati ya mahari",new C.ewL(d),w),A.R,new C.PC(A.hd,D.d5F,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ewM(d),w),A.R,new C.PC(A.ia,D.cSg,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ewN(d),w),A.R,new C.PC(A.hV,D.cQs,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ewO(d),w)],v)
if(this.a.gabA())A.d.v(u,B.a([A.R,new C.PC(A.j6,D.cBu,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ewP(d),w)],v))
return B.bm(!0,B.cd(B.x(u,A.ai,w,A.e,A.N,0,A.p),A.r,w,A.y,w,E.xZ,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:27}
C.ewL.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.ewM.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.ewN.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.ewO.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.ewP.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.ewR.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()},
$S:0}
C.euR.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.euS.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nh(r,v.f+1,q);++v.f
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
C.ex1.prototype={
$1(d){return d.b===D.lB},
$S:z+4}
C.ex2.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e_(new C.ex_(w,this.a,v),null)},
$S:19}
C.ex_.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ex0(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bE:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bC,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.ewW(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Co[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhF(t,u.b,p.a===t,i,k,new C.ewX(v,m),q))}a1=B.bU(A.bA,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cj[w]
s.a=null
t=s.a=r.a
u.push(new C.bhE(t,r.b,p.b===t,k,j,new C.ewY(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.x(B.a([d,A.aR,a0,A.R,a1,A.by,v,A.R,B.bU(A.bA,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.es(D.bUf,D.fGj,new C.ewZ(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aF,q,q,q,q,new B.b7(B.n(16),A.a0),D.b_A,q,q,q,q)),q)],e),A.F,q,A.e,A.N,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tR,D.bvB,q,q,q),!0,!1,A.af,!0,!0)},
$S:90}
C.ex0.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ewU(w.a,d,e))
w.b.d4(new C.ewV(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.ewU.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ewV.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ewW.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ewX.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ewY.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.ewZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GI(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.ewT(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewT.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ex4.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ex5.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.ex3(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nh(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xy()},
$S:0}
C.ex3.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exm.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.exn.prototype={
$1(d){return d.w},
$S:z+82}
C.exo.prototype={
$2(d,e){return d>e?d:e},
$S:82}
C.exp.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bm:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bE:A.aL,A.q,1),n=B.aI(d,A.bY,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bNV,A.f,v,v,D.b0X,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.exj(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.co,B.hN(v,new C.exk(m,k,w.c,s,w.d,t,r),k.length,A.fC,v,A.ag,new C.exl(),!0),v)],l),A.F,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tR,A.Zi,v,v,v),!0,!1,A.af,!0,!0)},
$S:27}
C.exj.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.exl.prototype={
$2(d,e){return A.ac},
$S:37}
C.exk.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aF:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cx
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bR4,q,q,q,new C.exh(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bxR,n,q),B.aM(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.a0),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.b_f),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.exi(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:675}
C.exh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iev(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oO(q.a,o,n,s)
r.bQ(0,new B.bb(m,B.hi(A.bw,o+s.length),A.aO))
l.ajc(k,m)
l.po()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exi.prototype={
$1(d){var w=this.a
w.ajc(this.b.a,d)
w.po()},
$S:2}
C.exq.prototype={
$0(){},
$S:0}
C.ewS.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ev7.prototype={
$0(){},
$S:0}
C.ev8.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hrM(this.b,w,!0)
w=this.a
w.r=null
w.xy()},
$S:0}
C.ev9.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eva.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.ev6(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nh(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xy()},
$S:0}
C.ev6.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exw.prototype={
$1(d){return B.oW(new C.exv(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.exv.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aj3,B.x(B.a([D.fBq,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.eYQ,new C.exu(this.a,this.b),20,A.tT,w,A.ag,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:451}
C.exu.prototype={
$2(d,e){var w=null,v=D.Hf[e],u=C.hKt(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fE,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eSq,A.f,w,w,new B.o(A.dM.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.nm,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b8,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ext(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:78}
C.ext.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cfs(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exx.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()},
$S:0}
C.etM.prototype={
$0(){var w,v=this.a,u=v.gqp(),t=C.rz(4294967295,null,0,0,null,C.cC(),D.mM,"","","",D.df),s=this.b
C.cfF(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.CZ){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ev5.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j2
$.j2=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.heR(q));++v.f},
$S:0}
C.ev3.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.exF.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ev_.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.d,new C.euZ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.euZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exE.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.T(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.euQ.prototype={
$0(){var w=this.a.r
return new B.at(new B.bb(w,A.b4,A.aO),$.aw())},
$S:261}
C.evr.prototype={
$0(){return B.jW(!0,null,!0,!0,null,null,!1)},
$S:674}
C.ezm.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ezn.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.atq(w).fO()
v=u.WD(w)
v.stk(B.hi(A.bw,v.a.a.length))},
$S:8}
C.eyM.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.XC(v)
if(u!=null&&u.b===D.cS)w.WD(u).saV(0,u.r)}else w.w=null},
$S:0}
C.etN.prototype={
$0(){var w=C.cC(),v=this.a,u=C.er(A.bi,!1,v.gqp().e.l(),A.aD,"",4280640491,24,A.bo,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bh,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.cS,0.7,0.15,0.2)
A.d.L(v.gdv().z,u)
v.r=u.a},
$S:0}
C.etK.prototype={
$0(){var w=C.cC(),v=this.a,u=C.er(A.bi,!1,4279310375,A.aD,"",v.gqp().c.j(0.25).l(),24,A.bo,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqp().c.l(),2,"",0,0,"",D.cn,D.f5,0.25,0.3,0.3)
A.d.L(v.gdv().z,u)
v.r=u.a},
$S:0}
C.etA.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a7,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lB,0.6,0.2,0.18),v=this.a
A.d.L(v.gdv().z,w)
v.r=w.a},
$S:0}
C.etx.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c0d],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajP().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bLC,r,r,r,r,new C.etw(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:27}
C.etw.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.ety.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.S.ao(u.ag(),null),s=C.er(A.bi,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bh,4280172719,2,t,0,0,"",D.cn,D.a5x,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdv().z,s)
t.r=s.a},
$S:0}
C.ev1.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ev2.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.gdv().z,new C.ev0(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.ev0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eue.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cS)s.Q=t.c.l()
else if(w===D.f5){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.euf(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.euf.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.euj.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.euk(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdv()
if(t!=null)v.$1(t)}},
$S:0}
C.euk.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.euh.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cS){s.Q=t.c
return}w=new C.eui(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eui.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f2(w,new C.eug()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eug.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.eud.prototype={
$0(){return C.cfF(this.b,this.c,this.a.gqp())},
$S:0}
C.exg.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.ezv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezw.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ezx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezy.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bg(s,new C.ezu(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSl()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hK()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xy()
t.Kb()}},
$S:0}
C.ezu.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ez1.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abE(),s=w.b,r=u.abF(A.fd,A.kb,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aV9(w.c,A.ak),1),new B.D(A.fs,B.p(v,D.bLI,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aV9(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.az,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.by,u.aVc(A.fd,d,D.bHN,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bYg(A.aM,d,A.u7,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aVa(d,"Not now"))
return new C.JX(B.x(p,A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.ez0.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JX(B.x(B.a([v.abE(),A.O,v.abF(A.aM,D.bHs,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bY,x.w).w.a.b*0.42),B.hN(w,new C.eyZ(v,u,d),u.length,w,w,A.ag,new C.ez_(),!0),w),A.aB,v.aVa(d,"Cancel")],x.p),A.ai,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.ez_.prototype={
$2(d,e){return A.R},
$S:37}
C.eyZ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anV,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bY8,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mS,w,w,w),A.cV,B.d("Updated "+this.a.PY(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.eB,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyY(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:78}
C.eyY.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eyV.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abE()
t=t.abF(A.aE,A.ug,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JX(B.x(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dW(A.a8Y,new C.eyT(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b7(B.n(14),A.a0),new B.az(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.fnn,new C.eyU(d),B.bo(A.fd,u,u,u,A.c,u,A.cm,u,new B.b7(B.n(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.eyT.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eyU.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eyX.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abE(),s=w.b,r=u.abF(A.aV,A.e9,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auK("Names",""+w.c),1),A.ab,B.E(u.auK("Fields",""+w.d),1),A.ab,B.E(u.auK("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bo(A.bj,v,v,v,A.c,v,A.xO,v,new B.b7(B.n(14),A.a0),v,v,v)
return new C.JX(B.x(B.a([t,A.O,r,A.aR,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nE,v,v,v),new C.eyW(d),o),A.R,u.aVb(d,"Stay here",!1)],q),A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eyW.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.evV.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.evU.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eyN.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.ezl.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_y(A.d.dN(w.d,new C.ezj(v),new C.ezk(v)).hK(),w.f,null)},
$S:z+84}
C.ezj.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezk.prototype={
$0(){return this.a},
$S:z+85}
C.etF.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hv,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNu,w,w,w,w,new C.etD(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.flp,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOF,w,w,w,w,new C.etE(d),!1,w,w,w,w,w,D.fHw,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.etD.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.etE.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.etG.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bi,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a7,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.bh,4280172719,2,v,0,0,"",D.cn,D.Sa,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdv().z,u)
v.r=u.a},
$S:0}
C.etH.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j2
$.j2=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j2
$.j2=k+1
m.push(new C.eM(""+1000*l+"_"+k,D.Sa,0.04,0.06,0.92,0.88,v,24,A.a7,A.bo,A.aD,4279310375,A.bi,u,D.bh,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lI(""+1000*p+"_"+o,r+n,"",D.qo,4294967295,null,D.df,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.etL.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kA(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bi,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.la,0.35,0.55,0.62)
A.d.L(u.gdv().z,w)
u.r=w.a},
$S:0}
C.etC.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b3_(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ej(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.la,s,u,t)
A.d.L(p.gdv().z,q)
A.d.br(p.gdv().z,new C.etB(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i8u(p)}},
$S:0}
C.etB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exC.prototype={
$0(){var w=this.a,v=this.b
w.b3_(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ezt.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.evY.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.br(r.z,new C.evX())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.evX.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eun.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.euo.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tC()},
$S:8}
C.etz.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a7,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cn,D.lB,0.8,0.1,0.1),v=this.a
A.d.L(v.gdv().z,w)
v.r=w.a},
$S:0}
C.evp.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.etI.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdv().z,v)
w.r=v.a},
$S:0}
C.etR.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.etS.prototype={
$0(){var w=this.b.hK(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdv().z,f)
t.r=f.a},
$S:0}
C.etT.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bg(w,new C.etQ(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.etQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eu3.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bg(w,new C.etP(v))
if(u>0){A.d.cA(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.etP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eu6.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.eu7.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eu8.prototype={
$0(){return this.a.as=A.dP},
$S:0}
C.eu9.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eua.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eub.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.euc.prototype={
$1(d){return d.length!==0},
$S:3}
C.etU.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cC()
A.d.L(v,C.D1(w.gqp().c.j(0.18).l(),0.1,u,D.bh,0,2,1,0,0))
u=w.gdv().z
v=C.cC()
A.d.L(u,C.iY(A.bi,!1,w.gqp().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.df,0.9,0.05,0.02))},
$S:0}
C.etV.prototype={
$0(){var w,v=this.a,u=v.gdv().z,t=C.cC()
A.d.L(u,C.D1(v.gqp().c.j(0.12).l(),0.1,t,D.bh,0,2,1,0,0.9))
t=v.gdv().z
u=C.cC()
w=C.bCY()
A.d.L(t,C.iY(A.L,!1,v.gqp().e.l(),A.aD,12,A.bo,A.a7,0.06,u,"Footer \xb7 "+w,0,D.df,0.9,0.05,0.92))},
$S:0}
C.etW.prototype={
$0(){A.d.L(this.a.gdv().z,C.D1(1727914055,0.12,C.cC(),D.bh,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.etX.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdv().z,C.D1(w,0.08,C.cC(),D.bh,w,2,0.5,0.2,0.4))},
$S:0}
C.etY.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cC()
A.d.L(v,C.D1(w.gqp().c.j(0.35).l(),0.12,u,D.D_,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdv().z,C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a7,0.15,C.cC(),"Important note",0,D.qp,0.5,0.38,0.52))},
$S:0}
C.etZ.prototype={
$0(){var w=this.a
A.d.L(w.gdv().z,C.D1(4294507260,0.78,C.cC(),D.bh,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdv().z,C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a7,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCY()+"\n\nSubject:\n\nBody text\u2026",0,D.df,0.76,0.12,0.14))},
$S:0}
C.eu_.prototype={
$0(){var w=this.a
A.d.L(w.gdv().z,C.D1(4294897802,0.28,C.cC(),D.bh,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdv().z,C.iY(A.bi,!1,4285611794,A.aD,15,A.bo,A.a7,0.24,C.cC(),"Sticky note",0,D.aGP,0.26,0.64,0.14))},
$S:0}
C.eu0.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdv().z,C.D1(4293060848,0.04,C.cC(),D.bh,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdv().z,C.D1(w,0.04,C.cC(),D.bh,w,2,0.55,0.1,0.48))},
$S:0}
C.eu1.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdv().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a7,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ib,0.42,0.06,0.18))
A.d.L(v.gdv().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a7,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ux,0.42,0.52,0.18))},
$S:0}
C.eu2.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdv().z,C.D1(858088427,0.62,C.cC(),D.bh,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdv().z,C.D1(856004201,0.62,C.cC(),D.bh,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdv().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cC(),"Option A",0,D.df,0.36,0.08,0.2))
A.d.L(v.gdv().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cC(),"Option B",0,D.df,0.36,0.56,0.2))},
$S:0}
C.eu4.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdv().z,C.D1(4294967295,0.36,C.cC(),D.bh,w,2,0.24,0.38,0.28))
A.d.L(v.gdv().z,C.iY(A.L,!1,w,A.aD,14,A.bo,A.a7,0.12,C.cC(),"[ QR CODE ]",0,D.df,0.24,0.38,0.4))},
$S:0}
C.eu5.prototype={
$0(){return C.cfF(this.b,D.Sb,this.a.gqp())},
$S:0}
C.evo.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7g.t(0,d),t=this.a
return t.b81(d,v===d,A.b0,this.c,new C.evn(t,u,d,w),u)},
$S:z+25}
C.evn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDK(r,new C.evm(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evm.prototype={
$0(){return this.a.d4(new C.evl(this.b,this.c))},
$S:0}
C.evl.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.etJ.prototype={
$0(){var w,v=this.a,u=v.gqp(),t=C.rz(4294967295,null,0,0,null,C.cC(),D.mM,"","","",D.df),s=this.b
C.cfF(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.CZ){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eur.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iey(p,q.d,s,new C.euq(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tC(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euq.prototype={
$1(d){return this.bkR(d)},
bkR(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eup(t,d))
w=2
return B.b(t.tC(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eup.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eus.prototype={
$0(){return this.a.bIZ()},
$S:0}
C.eut.prototype={
$0(){return this.a.aQm("Class Presentation",!0)},
$S:0}
C.euu.prototype={
$1(d){return this.a.bJV(d.b,this.b,d.a)},
$S:z+88}
C.ev4.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bY,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.exf.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aI(d,A.eI,x.w).w.f.d),new B.e_(new C.exe(this.a,this.b),null),null)},
$S:62}
C.exe.prototype={
$2(d,e){return B.oW(new C.exd(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:592}
C.exd.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aw:A.c,s=B.I(u?A.bE:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.aiv,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b8,B.bK(!1,A.A_,v,v,!0,v,v,new C.exb(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aT7(u,!0,!0,new C.exc(p,w.d))],q),e,D.bts,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kP,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.exb.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.exc.prototype={
$0(){this.b.$1(new C.ex9())
var w=this.a
if(w.c!=null)w.m(new C.exa())},
$S:0}
C.ex9.prototype={
$0(){},
$S:0}
C.exa.prototype={
$0(){},
$S:0}
C.eyO.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.eyP.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.ayV(this.a,null),0.94+w*0.06,null,null),w)},
$S:452}
C.eyQ.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.eyR.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,new C.bd0(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:452}
C.eyS.prototype={
$0(){return A.d.c9(this.a.d,0,C.W0(this.b))},
$S:0}
C.etO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.az(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aw.j(0.72)],t):B.a([A.c.j(0.88),A.pG.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a08,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.u8(A.fy,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.az,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:323}
C.euT.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.euU.prototype={
$1(d){return d.length!==0},
$S:3}
C.euV.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jN
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0E:A.BJ}return w},
$S:678}
C.euY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dA.az(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aw.j(0.78)],s):B.a([A.c.j(0.92),A.n_.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kA(v.w)?A.vT:A.qb,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PY(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PY(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PY(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.v(n)+" \u2022 Updated "+k.PY(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PY(v.f)
r=k.bJT(n,A.d.gI(r),t)
return B.p(l,B.by(j,new B.a7Y(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.MC,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.oa,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.euW(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.az,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.euX(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d9,l,l,l,l)},
$S:95}
C.euX.prototype={
$0(){return this.a.af7(this.b)},
$S:0}
C.euW.prototype={
$0(){return this.a.AS(this.b,this.c)},
$S:0}
C.ewo.prototype={
$0(){var w=this.a
w.b6E()
w.m(new C.ewn())},
$S:0}
C.ewn.prototype={
$0(){},
$S:0}
C.ewp.prototype={
$1(d){return this.a.ajc(this.b.a,d)},
$S:2}
C.ewq.prototype={
$0(){this.a.d4(new C.ewm(this.b))},
$S:0}
C.ewm.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ewr.prototype={
$0(){this.a.d4(new C.ewl(this.b))},
$S:0}
C.ewl.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.ews.prototype={
$0(){this.a.d4(new C.ewk(this.b))},
$S:0}
C.ewk.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mR},
$S:0}
C.ewt.prototype={
$0(){this.a.d4(new C.ewj(this.b))},
$S:0}
C.ewj.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ewu.prototype={
$0(){var w=this.a
w.d4(new C.ewi(w,this.b))},
$S:0}
C.ewi.prototype={
$0(){var w=this.b
return w.as=this.a.c41(w.as)},
$S:0}
C.ewv.prototype={
$0(){return this.a.d4(new C.ewh(this.b))},
$S:0}
C.ewh.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eww.prototype={
$0(){return this.a.d4(new C.ewg(this.b))},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ew9.prototype={
$0(){return this.a.a27(this.b.a)},
$S:0}
C.ewa.prototype={
$0(){this.a.a_E()
return null},
$S:0}
C.ewb.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bY,x.w).w.a.a<900)w.afq()
else w.m(new C.ew8(w))},
$S:0}
C.ew8.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ewc.prototype={
$0(){this.a.d4(new C.ew7(this.b))},
$S:0}
C.ew7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ewd.prototype={
$0(){return this.a.d4(new C.ew6(this.b))},
$S:0}
C.ew6.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ewe.prototype={
$0(){return this.a.d4(new C.ew5(this.b))},
$S:0}
C.ew5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ewf.prototype={
$0(){return this.a.azQ(null)},
$S:0}
C.evh.prototype={
$0(){this.a.DB()
return null},
$S:0}
C.evi.prototype={
$0(){this.a.aa9()
return null},
$S:0}
C.evk.prototype={
$1(d){return this.bkS(d)},
bkS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K2(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.aw,null,new C.evc(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.evd(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.eve(r))
s=s.c.K(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.evf(r))
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
return B.b(C.hsZ(q,new C.EB(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.evg(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ah2(q)
q=B.v(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.evc.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ee1],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bNC:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.evb(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dg,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.evb.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.evd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eve.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.evf.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.evg.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.evj.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zS(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zS(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zS(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ah2(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ej5,q,v,u,B.zS(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:130}
C.ezz.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCV(w,v)}},
$S:0}
C.ezA.prototype={
$0(){this.a.DB()
return null},
$S:0}
C.ewz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bY2:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aS:A.br
return new B.D(A.fC,B.aB(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bd,new B.o(w,u,u,r,u,q,A.n),A.eJ,u,u,u,A.lq,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ewy(t,d),u,u,u,u,u,u,!1,A.a5),u)},
$S:137}
C.ewy.prototype={
$0(){var w=this.a
return w.m(new C.ewx(w,this.b))},
$S:0}
C.ewx.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ewA.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3t:E.axj
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbNo():t.gbJj()
return B.hx(B.aB(u,B.p(u,D.ano,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a9(A.a3,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a5),u,s,u,u)},
$S:1707}
C.ewB.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.idO(v,w.a.c)},
$S:0}
C.exY.prototype={
$0(){return this.b.ve(this.a.a)},
$S:0}
C.exZ.prototype={
$0(){return this.a.ve(D.mM)},
$S:0}
C.ey_.prototype={
$0(){return this.a.ve(D.I9)},
$S:0}
C.eya.prototype={
$0(){return this.a.ve(D.Ia)},
$S:0}
C.eyl.prototype={
$0(){return this.a.ve(D.I8)},
$S:0}
C.eyw.prototype={
$0(){return this.a.qa("lab_report")},
$S:0}
C.eyD.prototype={
$0(){return this.a.qa("rubric")},
$S:0}
C.eyE.prototype={
$0(){return this.a.qa("minutes")},
$S:0}
C.eyF.prototype={
$0(){return this.a.qa("agenda")},
$S:0}
C.eyG.prototype={
$0(){return this.a.qa("timeline")},
$S:0}
C.eyH.prototype={
$0(){return this.a.qa(this.b.a)},
$S:0}
C.ey0.prototype={
$0(){this.a.VM()
return null},
$S:0}
C.ey1.prototype={
$0(){this.a.VG()
return null},
$S:0}
C.ey2.prototype={
$0(){return this.a.qa("table")},
$S:0}
C.ey3.prototype={
$0(){return this.a.qa("sticky")},
$S:0}
C.ey4.prototype={
$0(){return this.a.qa("divider")},
$S:0}
C.ey5.prototype={
$0(){return this.a.qa("header_bar")},
$S:0}
C.ey6.prototype={
$0(){return this.a.p7(D.bh)},
$S:0}
C.ey7.prototype={
$0(){return this.a.p7(D.eN)},
$S:0}
C.ey8.prototype={
$0(){return this.a.p7(D.jS)},
$S:0}
C.ey9.prototype={
$0(){return this.a.p7(D.D_)},
$S:0}
C.eyb.prototype={
$0(){return this.a.p7(D.jT)},
$S:0}
C.eyc.prototype={
$0(){return this.a.p7(D.lb)},
$S:0}
C.eyd.prototype={
$0(){return this.a.p7(D.ft)},
$S:0}
C.eye.prototype={
$0(){this.a.Hk()
return null},
$S:0}
C.eyf.prototype={
$0(){this.a.Nr()
return null},
$S:0}
C.eyg.prototype={
$0(){return this.a.qa("quote")},
$S:0}
C.eyh.prototype={
$0(){return this.a.a8h()},
$S:0}
C.eyi.prototype={
$0(){this.a.a_K()
return null},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
return w.m(new C.exO(w))},
$S:0}
C.exO.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eyk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o9(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.exW(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exW.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eym.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jY()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a7h.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a7h.t(0,q))u.push(B.ao(s,B.p(s,D.Oi,A.f,s,s,D.Eg,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fC,B.aB(s,B.hx(new B.an(A.Z,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.exV(r,d),s,s,s,s,s,s,!1,A.a5),s)},
$S:z+89}
C.exV.prototype={
$0(){this.a.a8z(this.b)
return null},
$S:0}
C.eyn.prototype={
$0(){this.a.a8y(this.b)
return null},
$S:0}
C.eyo.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hKu(d),p=this.a,o=B.n(8),n=p.gdv()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.aZ
v=p.gdv()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rz(4294967295,r,0,0,r,"preview_"+w,D.qo,"","","",D.df)
C.hpQ(s,w)
w=x.p
u=B.a([B.by(o,B.p(r,B.by(t,C.hra(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anW,A.f,r,r,D.Eg,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iq,B.aB(r,B.x(B.a([new B.an(A.Z,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exU(p,q,d),r,r,r,r,r,r,!1,A.a5),r)},
$S:z+90}
C.exU.prototype={
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
return B.b(s.o9(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d4(new C.exK(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exK.prototype={
$0(){return C.hpQ(this.a,this.b.a)},
$S:0}
C.exX.prototype={
bkT(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7g.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkT(d,e)},
$S:z+91}
C.eyI.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("M<1,t>")
v=B.C(new B.M(d,new C.eyK(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP)},
$S:z+92}
C.eyK.prototype={
$1(d){var w=this
return w.a.b81(d,w.b===d,w.c,w.d,new C.eyJ(w.e,d),!D.a7g.t(0,d))},
$S:z+25}
C.eyJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyp.prototype={
$1(d){this.b.$2(d,new C.exT(this.a,d,this.c))
return null},
$S:z+26}
C.exT.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDK(u,new C.exJ(v,this.c,w),w)},
$S:0}
C.exJ.prototype={
$0(){return this.a.d4(new C.exH(this.b,this.c))},
$S:0}
C.exH.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eyq.prototype={
$1(d){this.b.$2(d,new C.exS(this.a,d))
return null},
$S:z+26}
C.exS.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fTn(u,new C.exI(v,w),w)},
$S:0}
C.exI.prototype={
$0(){var w=this.a
return w.d4(new C.exG(w,this.b))},
$S:0}
C.exG.prototype={
$0(){return this.a.gdv().r=this.b},
$S:0}
C.eyr.prototype={
$0(){var w=this.a
return w.m(new C.exR(w))},
$S:0}
C.exR.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eys.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCV(w,v)}},
$S:0}
C.eyt.prototype={
$0(){this.a.I6()
return null},
$S:0}
C.eyu.prototype={
$0(){return this.a.a8h()},
$S:0}
C.eyv.prototype={
$0(){var w=this.a,v=w.jY()
if(v!=null&&v.b===D.cS)w.d4(new C.exQ(v))},
$S:0}
C.exQ.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eyx.prototype={
$0(){this.a.DB()
return null},
$S:0}
C.eyy.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Ff(v,!0)
return null},
$S:0}
C.eyz.prototype={
$0(){this.a.d4(new C.exP(this.b))},
$S:0}
C.exP.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.eyA.prototype={
$0(){this.a.d4(new C.exN(this.b))},
$S:0}
C.exN.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.eyB.prototype={
$0(){this.a.d4(new C.exM(this.b))},
$S:0}
C.exM.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mR},
$S:0}
C.eyC.prototype={
$0(){this.a.d4(new C.exL(this.b))},
$S:0}
C.exL.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eum.prototype={
$1(d){return this.bkQ(d)},
bkQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d4(new C.eul(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:201}
C.eul.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ez4.prototype={
$0(){var w=this.a
return w.d4(new C.ez3(w,this.b))},
$S:0}
C.ez3.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ez5.prototype={
$0(){var w=this.a
return w.d4(new C.ez2(w,this.b))},
$S:0}
C.ez2.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.evu.prototype={
$0(){return this.a.d4(new C.evt(this.b))},
$S:0}
C.evt.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.evv.prototype={
$0(){return this.a.d4(new C.evs(this.b))},
$S:0}
C.evs.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ew1.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apC,new C.ew0(),w),w.k("ak.E"))
return w},
$S:z+94}
C.ew0.prototype={
$1(d){var w=null
return B.zS(B.d(d.b,w,w,w,w,w,w,A.mc,w,w,w),48,d,x.fO)},
$S:z+95}
C.ezh.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:37}
C.ezg.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kl()?q:new C.eze(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.aZ:A.cs
v=B.I(v,A.q,o?2:1)
u=r.d?A.cp:A.c
t=B.bW(0,C.hra(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aB(q,B.p(q,new B.an(A.Z,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nC,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.ajo,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ezf(p,e),q,q,q,q,q,q,!1,A.a5)},
$S:77}
C.ezf.prototype={
$0(){var w=this.a
return w.m(new C.eza(w,this.b))},
$S:0}
C.eza.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kb()},
$S:0}
C.eze.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.ezb(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ezc(q,s))
q.aRQ()}else if(r==="del"){q=t.a
q.m(new C.ezd(q,s))
q.aQY()}else if(r==="up")t.a.b3c(s,s-1)
else if(r==="down")t.a.b3c(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezb.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bPg,w,w,w,w,new C.ez6(d),!1,w,w,w,w,w,w,w,D.fmm,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bP9,w,w,w,w,new C.ez7(d),!1,w,w,w,w,w,w,w,A.wH,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOr,w,w,w,w,new C.ez8(d),!1,w,w,w,w,w,w,w,D.fus,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bQu,w,w,w,w,new C.ez9(d),!1,w,w,w,w,w,w,w,D.fmb,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.ez6.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.ez7.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.ez8.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.ez9.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.ezc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezd.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezi.prototype={
$0(){return this.a.a8h()},
$S:0}
C.euM.prototype={
$0(){var w=this.a
w.b6E()
w.azQ(null)},
$S:0}
C.euL.prototype={
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
s=B.a([B.by(s,B.c0(A.kI,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.euK(this.a,e.b,e.d,q),B.S(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.Z,p,A.aa,A.f,s,new B.cy("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:449}
C.euK.prototype={
$1(d){var w=this
return w.a.bFd(d,w.b,w.c,w.d)},
$S:z+23}
C.euz.prototype={
$0(){var w=this
if(w.b){w.a.NA(w.c)
return}if(w.d){w.a.a8f(w.c)
return}if(w.e){w.a.agK(w.c)
return}if(w.f)w.a.b7b(w.c)},
$S:0}
C.euA.prototype={
$0(){this.a.NA(this.b)
return null},
$S:0}
C.euB.prototype={
$0(){return this.a.a27(this.b.a)},
$S:0}
C.euC.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.euy(u,d,w.c,w.d))
v.HL()
v.oi()
v.po()},
$S:18}
C.euy.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.euD.prototype={
$1(d){return this.a.ajc(this.b.a,d)},
$S:2}
C.euF.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h4x(w))u.a.NA(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b7b(v)},
$S:0}
C.euE.prototype={
$0(){return this.a.a27(this.b.a)},
$S:0}
C.euG.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eux(w.b,d,w.c,w.d))
v.HL()
v.oi()
v.po()},
$S:18}
C.eux.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cS)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.euH.prototype={
$1(d){var w=this.a
w.m(new C.euw(this.b,d))
w.HL()
w.oi()
w.po()},
$S:204}
C.euw.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cS)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.euI.prototype={
$0(){var w=this.a
w.m(new C.euv(this.b))
w.HL()
w.oi()
w.po()},
$S:0}
C.euv.prototype={
$0(){this.a.r=C.hqF()},
$S:0}
C.euJ.prototype={
$0(){return this.a.a27(this.b.a)},
$S:0}
C.ewD.prototype={
$0(){var w=this.a
return w.m(new C.ewC(w))},
$S:0}
C.ewC.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewE.prototype={
$1(d){return this.a.cDi(this.b.a,d)},
$S:2}
C.evI.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:174}
C.evJ.prototype={
$1(d){return this.a.$1(new C.evH(this.b,d))},
$S:6}
C.evH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evK.prototype={
$1(d){return this.a.$1(new C.evG(this.b,d))},
$S:6}
C.evG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evL.prototype={
$1(d){return this.a.$1(new C.evF(this.b,d))},
$S:6}
C.evF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.evM.prototype={
$1(d){return this.a.$1(new C.evE(this.b,d))},
$S:6}
C.evE.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.evN.prototype={
$1(d){return this.a.$1(new C.evD(this.b,d))},
$S:6}
C.evD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evO.prototype={
$1(d){return this.b.$1(new C.evC(this.a,this.c))},
$S:9}
C.evC.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.evP.prototype={
$1(d){return this.b.$1(new C.evB(this.a,this.c))},
$S:9}
C.evB.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.evQ.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cX
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evA(this.a,v,d),w,w,w,w,w,w,!1,A.a5)},
$S:444}
C.evA.prototype={
$0(){return this.a.$1(new C.evx(this.b,this.c))},
$S:0}
C.evx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.evR.prototype={
$1(d){return this.a.$1(new C.evz(this.b,d))},
$S:1708}
C.evz.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.evS.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evy(this.a,this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:444}
C.evy.prototype={
$0(){return this.a.$1(new C.evw(this.b,this.c))},
$S:0}
C.evw.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.evT.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pC()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eF()}v.a.asp()},
$S:0}
C.evW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dA.az(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.ar(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.ug,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mw,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eH(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.az,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:132}
C.etv.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.az(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.ar(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eH(B.x(B.a([B.ef(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jb,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.az,A.aC,A.x,u,p,p),A.n),p,A.FG,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:132}
C.exA.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aoM,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.em(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.exy(d),w,w),B.bG(A.pq,new C.exz(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.exy.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.exz.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d21.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dA.az(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.az(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.az(0,i)
v=B.n(22)
t=B.ar(A.aJ,A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt).j(0.18+w*0.12),A.J,32+w*10),D.abT],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.b1,0.9,A.x,k,0,B.a([A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kA(j.a.c.w)?D.uq:N.nt).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kA(m)?D.uq:N.nt
s=B.a([new B.ac(0,A.G,A.d.gI(C.kA(m)?D.uq:N.nt).j(0.45+w*0.2),A.cC,18)],s)
m=x.p
l=B.a([p,B.ef(A.A,B.p(k,B.X(C.kA(j.a.c.w)?A.vT:A.qb,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.az,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fF,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fex,A.L,k,k),A.au,B.d(j.gcyc(),k,k,k,k,k,k,D.fj5,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSl()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kA(j.a.c.w)?D.uq:N.nt).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JQ(A.yh,"Download PDF","pdf",A.d_,j.J3(0),!1,k))
p=j.a.c
if(!p.z||p.gSl()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JQ(A.kb,"Transfer to "+C.hqH(p==null?"":p),"transfer_hati",A.aV,j.J3(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J3(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JQ(D.bGR,"Rename presentation","rename",A.cb,n,!1,k),A.am,new C.JQ(A.al5,"Duplicate","duplicate",A.b6,j.J3(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JQ(A.ea,"Delete presentation","delete",A.av,j.J3(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J3(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J3(n)
s.push(B.dX(B.de(B.bK(!1,E.aRZ,k,k,!0,k,k,new C.d20(d),k,B.fz(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.ax,k,D.bwx,k,k,k,k,k,A.kf,k,k)),n),new B.u(0,(1-p)*8)))
return B.ef(A.A,B.de(B.aF(!1,A.a1,!0,k,B.p(k,B.by(q,new B.an(A.Z,k,A.aa,A.r,B.a([o,new B.D(D.bvG,B.x(s,A.m,k,A.e,A.N,0,A.p),k)],m),k),A.aq),A.f,k,A.VL,new B.o(A.aw,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d20.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d2n.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d2o.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d1Z.prototype={
$1(d){var w=this.a
return w.m(new C.d1V(w))},
$S:23}
C.d1V.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d2_.prototype={
$1(d){var w=this.a
return w.m(new C.d1U(w))},
$S:50}
C.d1U.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d1Y.prototype={
$0(){var w=this.a
return w.m(new C.d1W(w))},
$S:0}
C.d1W.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d1X.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.eAf.prototype={
$0(){return $.bky=!$.bky},
$S:0}
C.eA5.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaV2())u.awi()},
$S:0}
C.eAe.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eA6.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eA7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.awi()},
$S:0}
C.eA1.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eA2.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eA3.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eA4.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.eAc.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.r,w,null)},
$S:1709}
C.eAd.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i2)return new B.d0(e,!1,d,null)
w=this.a
return w.cw5(w.e,d,e)},
$S:453}
C.eA8.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fF((1-v.gp(0))*1.5708)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.eA9.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kb((1-v.gp(0))*1.5708)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAa.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fF(v.gp(0)*0.8)
w.kb(v.gp(0)*0.35)
return B.fw(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAb.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fF(-v.gp(0)*1.2)
return B.fw(A.a8,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAg.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYS().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYS().x
t===$&&B.c()
return new C.b1f(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IP(v.c,t,!0,new B.cy("cine"+u,x.W))},
$S:658}
C.eAi.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bY,x.w).w.a.a*0.55)w.awi()
else w.ckq()},
$S:50}
C.eAh.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fJJ.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:454}
C.fJS.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.fJP(d),w,w),B.bK(!1,D.fBL,w,w,!0,w,w,new C.fJQ(d,this.b,v),w,w),B.bG(A.aSf,new C.fJR(d,v,this.c),w)],x.p),w,w,M.ty,new B.a7(320,w,t,w),w,w,w,w,D.fDe,w)},
$S:20}
C.fJP.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fJQ.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.h5b(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJR.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aQ3(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPu(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJI.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cfI.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fJO.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fgo.prototype={
$1(d){return C.h59(C.W0(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fSD.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.fSE.prototype={
$4(d,e,f,g){var w=A.cu.az(0,e.gp(0))
return B.de(B.ef(A.A,D.h8R,0.94+w*0.06,null,null),w)},
$S:452}
C.fSF.prototype={
$1(d){var w=this
return new C.W2(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ezM.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ezI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ezL.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.W3(u,this.b,w.gaOg(),v,null)},
$S:z+99}
C.ezJ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ezK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ezN.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ezO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ezR.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ezS.prototype={
$0(){var w=this.a
return w.m(new C.ezQ(w))},
$S:0}
C.ezQ.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ezT.prototype={
$0(){var w=this.a
return w.m(new C.ezP(w))},
$S:0}
C.ezP.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ezU.prototype={
$1(d){return this.a.bJU(d,this.b)},
$S:z+100}
C.ezH.prototype={
$0(){var w=this.a
return w.m(new C.ezG(w,this.b))},
$S:0}
C.ezG.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ezV.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ezW.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ezX.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ezY.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ezZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fP(new B.fF(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.f0R)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eto())},
$S:0}
C.eto.prototype={
$0(){},
$S:0}
C.etq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:8}
C.etl.prototype={
$1(d){return this.a.m(new C.etk())},
$S:2}
C.etk.prototype={
$0(){},
$S:0}
C.etm.prototype={
$1(d){return this.a.b_1()},
$S:2}
C.etn.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eA0.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q0(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eA_(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eA_.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fE2.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ex(new B.jN(this.c,new C.fE1(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:226}
C.fE1.prototype={
$3(d,e,f){return new C.IP(e,!1,!1,new B.cy(e.a,x.W))},
$S:z+102}
C.fE3.prototype={
$1(d){var w=null
return B.os(!1,B.av(new C.bv6(this.a,this.b,w),w,w,w),w,x.z)},
$S:315}
C.fE7.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bM(A.nh,null,x.H),$async$$0)
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
C.fE8.prototype={
bln(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hx(A.h2),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hS([J.eX(A.dD.gaP(r))],"image/png"))
t.toString
s=Al.fWS(t)
w=4
return B.b(new B.q6(s,"load",!1,x.ev).gI(0).d8(0,A.jn),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bln(d)},
$S:1713}
C.fE4.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:148}
C.fE5.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fV(0)},
$S:148}
C.fE6.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.faE.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fb2,A.L,w,w)},
$S:1714}
C.faF.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.by(v,B.m6(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.ehx.prototype={
$1(d){this.a.a_5()
return null},
$S:12}
C.ehv.prototype={
$0(){return this.a.e=D.brI},
$S:0}
C.ehw.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cif.prototype={
$1(d){return A.o.dC(1,d.a)},
$S:z+103}
C.cig.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLZ.prototype
w.bw1=w.q
w=C.aLs.prototype
w.bvu=w.q
w=C.aLd.prototype
w.bve=w.q
w=C.aLr.prototype
w.bvt=w.q
w=C.aLX.prototype
w.bw_=w.q
w=C.aNj.prototype
w.bxx=w.q
w=C.aK8.prototype
w.bu6=w.q
w=C.aMa.prototype
w.bwd=w.q
w=C.aMb.prototype
w.bwe=w.q
w=C.b2W.prototype
w.bqL=w.aD_})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ibB","anC",104)
v(C.aJ7.prototype,"gc4n","YZ",0)
var r
u(r=C.axI.prototype,"gcxy","cxz",38)
v(r,"gc5b","adr",0)
v(r=C.axE.prototype,"gaYt","E4",3)
v(r,"gc58","c59",3)
v(r,"gawD","xM",0)
v(r,"gawE","II",0)
t(C,"ic0","hIg",105)
v(C.aDM.prototype,"gc7T","c7U",3)
s(C,"icb",0,null,["$4$paper$photo$request$template"],["fL7"],106,0)
s(C,"ica",0,null,["$5$doc$history$instruction$photo$template"],["bCd"],107,0)
v(r=C.aE4.prototype,"gc8A","J0",0)
v(r,"gbJm","WP",0)
v(r,"gc8D","aeg",0)
v(r,"gc8C","ZS",0)
v(r,"gaZH","El",0)
v(C.aE8.prototype,"gc8I","ZU",0)
v(r=C.aFv.prototype,"gaZU","PU",0)
v(r,"gcpi","b3i",3)
v(r,"gcyX","aB8",86)
v(r,"gbNc","aad",0)
v(r,"gc98","Av",0)
v(r=C.aHq.prototype,"gcj9","a0e",0)
v(r,"gcjh","a0h",0)
v(r,"gbCa","a8F",0)
v(r,"gc9c","aes",0)
v(C.aHp.prototype,"gc9d","aet",0)
v(C.aBq.prototype,"gbB9","a8s",0)
v(C.azO.prototype,"gc9e","a_4",0)
w(C,"ico","iai",12)
w(C,"icm","i7f",12)
w(C,"icn","i9i",12)
v(r=C.aEo.prototype,"gcCd","cCe",3)
v(r,"gcny","cnz",3)
u(r,"gEr","af7",7)
v(r,"gbGZ","arz",3)
u(r,"gEs","b0b",7)
v(r,"gcbm","aeP",0)
v(r,"gcad","aeO",0)
v(r,"gcdw","af8",0)
v(r,"gbJj","a9O",0)
v(r,"gcep","a_E",0)
v(r,"gceq","afp",0)
v(r,"gceX","afw",0)
v(r,"gcdJ","afb",0)
v(r,"gbNo","aah",0)
v(r,"gaRP","aRQ",3)
v(r,"gaQX","aQY",3)
v(r,"gaMB","aMC",3)
v(r,"gaQW","asp",3)
u(r,"gbBq","bBr",80)
v(r,"gaAF","b6o",3)
v(r,"gcaf","cag",3)
v(r,"gbYA","bYB",3)
v(r,"gbLM","bLN",3)
v(r=C.aEr.prototype,"gcB_","cB0",3)
v(r,"gcAF","cAG",3)
t(C,"icp","iaz",2)
v(r=C.aEp.prototype,"gc9k","J5",0)
v(r,"gcrl","Rk",0)
v(r,"gc9h","J4",0)
v(r,"gcDt","a2M",0)
v(r,"gcf8","afD",0)
v(C.aEn.prototype,"gc9l","b_1",3)
v(r=C.aEq.prototype,"gbOa","aas",0)
u(r,"gc9i","c9j",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nY,C.RM,C.bHO,C.bG8,C.cyr,C.cyp,C.bOp,C.b8G,C.cyq,C.bEJ,C.ci9,C.ci7,C.ci8,C.ci6,C.asS,C.ci5,C.bPi,C.op,C.aF_,C.jo,C.nK,C.a7X,C.zF,C.lj,C.oC,C.m8,C.zH,C.nO,C.a84,C.arh,C.b1g,C.egX,C.lg,C.EK,C.ew,C.j1,C.EB,C.xG,C.eM,C.lI,C.i5,C.jH,C.a85,C.afg,C.b1h,C.b2W,C.a2U])
u(B.ko,[C.cGj,C.c_6,C.fzh,C.cHP,C.cHb,C.fEL,C.dZY,C.dZX,C.ehA,C.ehz,C.fG9,C.fhx,C.fhy,C.ce4,C.ce5,C.ce6,C.elZ,C.eUO,C.eUb,C.eUa,C.eVe,C.eUM,C.eUF,C.eUY,C.eVE,C.fpi,C.f0O,C.f0N,C.f1g,C.eh_,C.fJF,C.dVH,C.fQb,C.fGw,C.cfA,C.cfy,C.cfD,C.fH0,C.fH1,C.fH2,C.fH3,C.cfk,C.cfl,C.dHW,C.cfh,C.fH_,C.f8c,C.dTT,C.cfa,C.egG,C.fEA,C.ex_,C.exo,C.exl,C.exk,C.exv,C.exu,C.ez_,C.eyZ,C.exe,C.exd,C.etO,C.euY,C.exX,C.ezh,C.ezg,C.euL,C.evW,C.etv,C.d21,C.eAc,C.eAd,C.eA8,C.eA9,C.eAa,C.eAb,C.eAg,C.cfI,C.ezM,C.ezX,C.cig])
u(B.i0,[C.cGk,C.cGl,C.bPj,C.fwt,C.c_5,C.c_8,C.fMG,C.f9a,C.f91,C.f9h,C.fgp,C.fgq,C.fzi,C.fzg,C.fMa,C.fw7,C.fN1,C.cHF,C.cHK,C.cHM,C.cHI,C.cHN,C.cHG,C.cHO,C.cHB,C.cHy,C.cHx,C.cHE,C.cH6,C.cH4,C.fDN,C.fDO,C.fkQ,C.fEM,C.fES,C.fjT,C.can,C.fDL,C.fDM,C.fyE,C.fyF,C.fER,C.fEN,C.fEP,C.fEQ,C.fEO,C.fQt,C.fyI,C.fyJ,C.fyM,C.fyN,C.fyQ,C.fyR,C.fRW,C.fhZ,C.fS6,C.ekS,C.ekT,C.ekU,C.ekA,C.ekM,C.ekN,C.ekP,C.ce3,C.ce1,C.ce2,C.fEr,C.fEt,C.fEs,C.fhz,C.fhA,C.fS9,C.em3,C.em4,C.elW,C.elX,C.em_,C.em0,C.fSp,C.eVF,C.eV4,C.eUP,C.eV1,C.eU6,C.eU7,C.eU8,C.eUc,C.eUd,C.eVu,C.eVB,C.eVD,C.eVd,C.eVf,C.eVj,C.eVk,C.eVl,C.eVp,C.eVg,C.eVh,C.eUo,C.eUp,C.eUq,C.eUr,C.eUs,C.eUt,C.eUu,C.eUv,C.eUw,C.eTK,C.eTL,C.eTM,C.eTN,C.eTP,C.eTQ,C.eUi,C.eUj,C.eUk,C.eUl,C.eUm,C.eTU,C.eTV,C.eTW,C.eTX,C.eUE,C.eUX,C.fBQ,C.fBP,C.cfr,C.fph,C.fJB,C.fJu,C.fJx,C.fHu,C.fHv,C.fHw,C.fBX,C.fBW,C.fBV,C.fBT,C.fht,C.fhu,C.fhv,C.fSB,C.f0Q,C.f0R,C.f0K,C.f0E,C.f19,C.f1a,C.f1c,C.f1d,C.f18,C.fSA,C.f0v,C.fox,C.egZ,C.fJD,C.fJE,C.fJG,C.fJz,C.fJA,C.fRO,C.dkj,C.dkp,C.egY,C.fdV,C.fdX,C.fdW,C.fdU,C.fD0,C.fD2,C.ffV,C.fJ5,C.fJ6,C.fJ7,C.fJi,C.fJn,C.fJo,C.fJp,C.fJq,C.fJr,C.fJs,C.fJt,C.fJ8,C.fJ9,C.fJa,C.fJb,C.fJc,C.fJd,C.fJe,C.fJf,C.fJg,C.fJh,C.fJj,C.fJk,C.fJl,C.fJm,C.fAR,C.fo4,C.fo3,C.fJM,C.dVI,C.dVG,C.f_F,C.c9Z,C.ca0,C.fQd,C.d9B,C.d9D,C.fQc,C.fQa,C.fSz,C.fGs,C.d9b,C.fyU,C.fyV,C.cfp,C.cfq,C.cfo,C.cfe,C.cff,C.cfb,C.cfc,C.cfd,C.cfG,C.cfB,C.cfw,C.cfx,C.cfz,C.cfC,C.cfE,C.fH4,C.cfj,C.cfm,C.cfn,C.cft,C.cfu,C.fJT,C.fJ_,C.cfi,C.cfg,C.fGZ,C.fqD,C.cf9,C.eYi,C.ftA,C.ezD,C.ew2,C.ew3,C.exD,C.exr,C.exs,C.evq,C.ezo,C.ezp,C.ezq,C.euP,C.ex6,C.ex8,C.ewJ,C.ewG,C.evZ,C.ew_,C.ewQ,C.euR,C.ex1,C.ex2,C.ex0,C.ex4,C.ex3,C.exm,C.exn,C.exp,C.exi,C.ev9,C.ev6,C.exw,C.euZ,C.ezn,C.etx,C.ev1,C.ev0,C.euf,C.euk,C.eui,C.eug,C.ezv,C.ezw,C.ezx,C.ezu,C.ez1,C.ez0,C.eyV,C.eyX,C.eyN,C.ezl,C.ezj,C.etF,C.etB,C.evX,C.euo,C.etQ,C.etP,C.eub,C.euc,C.evo,C.euq,C.euu,C.exf,C.eyO,C.eyP,C.eyQ,C.eyR,C.euT,C.euU,C.euV,C.ewp,C.evk,C.evc,C.evj,C.ewz,C.ewA,C.eym,C.eyo,C.eyI,C.eyK,C.eyp,C.eyq,C.eum,C.ew1,C.ew0,C.ezb,C.euK,C.euC,C.euD,C.euG,C.euH,C.ewE,C.evI,C.evJ,C.evK,C.evL,C.evM,C.evN,C.evO,C.evP,C.evQ,C.evR,C.evS,C.exA,C.d1Z,C.d2_,C.eAi,C.fJJ,C.fJS,C.fJI,C.fJO,C.fgo,C.fSD,C.fSE,C.fSF,C.ezL,C.ezU,C.etq,C.etl,C.etm,C.fE2,C.fE1,C.fE3,C.fE8,C.fE4,C.fE5,C.faE,C.faF,C.ehx,C.cif])
u(B.ja,[C.cGm,C.f96,C.f9b,C.f9c,C.f97,C.f98,C.f99,C.f9_,C.f90,C.f92,C.f93,C.f9g,C.f9f,C.f95,C.f94,C.f9d,C.f9e,C.f9j,C.f9k,C.f9i,C.cHH,C.cHL,C.cHJ,C.cHz,C.cHA,C.cHC,C.cHv,C.cHw,C.cHD,C.cHu,C.cHt,C.cHs,C.cGW,C.cGV,C.cGY,C.cH5,C.cGZ,C.cGX,C.cH0,C.cH1,C.cH2,C.cH_,C.cH3,C.cH7,C.cH8,C.cH9,C.cHa,C.fyC,C.fyD,C.fyA,C.fyB,C.ecl,C.ecj,C.eck,C.ecm,C.ecn,C.dZW,C.fyG,C.fyH,C.fyK,C.fyL,C.fyO,C.fyP,C.ehy,C.fGz,C.fGy,C.ekR,C.ekQ,C.eku,C.ekq,C.ekB,C.ekC,C.ekD,C.ekw,C.ekx,C.eky,C.ekz,C.ekv,C.eks,C.ekt,C.ekJ,C.ekK,C.ekI,C.ekL,C.ekH,C.ekG,C.ekF,C.ekO,C.ekE,C.ekr,C.em2,C.elR,C.elS,C.elY,C.elT,C.elV,C.elU,C.em1,C.eUx,C.eUV,C.eUg,C.eUh,C.eUe,C.eUf,C.eV0,C.eV_,C.eUZ,C.eV3,C.eV2,C.eU5,C.eU9,C.eU4,C.eU3,C.eU0,C.eU2,C.eU1,C.eVC,C.eVv,C.eVt,C.eVw,C.eVs,C.eVx,C.eVr,C.eVy,C.eVz,C.eVA,C.eVq,C.eVc,C.eV7,C.eVi,C.eVb,C.eVm,C.eVa,C.eVn,C.eV9,C.eVo,C.eV8,C.eUS,C.eUR,C.eUT,C.eUQ,C.eUU,C.eUK,C.eUJ,C.eUL,C.eUI,C.eUH,C.eUG,C.eTO,C.eTJ,C.eTY,C.eTT,C.eTZ,C.eTS,C.eU_,C.eTR,C.eUN,C.eUB,C.eUA,C.eUC,C.eUz,C.eUD,C.eUy,C.eUW,C.eV6,C.eV5,C.eUn,C.fJw,C.fJy,C.fJC,C.fBU,C.fEk,C.fEi,C.fEj,C.f0S,C.f0T,C.f0P,C.f0J,C.f0I,C.f0L,C.f0M,C.f0y,C.f0z,C.f0B,C.f0C,C.f0D,C.f0A,C.f0F,C.f15,C.f16,C.f14,C.f17,C.f13,C.f12,C.f11,C.f1b,C.f10,C.f1_,C.f0Z,C.f1e,C.f0Y,C.f1f,C.f0X,C.f0W,C.f0G,C.f0H,C.f0V,C.f0U,C.f0r,C.f0s,C.f0t,C.f0u,C.f0q,C.f0w,C.f0x,C.dki,C.dkk,C.dkn,C.dko,C.dkm,C.dkl,C.fD1,C.fAS,C.ca_,C.ca1,C.d9u,C.d9z,C.d9A,C.d9y,C.d9x,C.d9C,C.d9w,C.d9v,C.d9E,C.fQ9,C.dgh,C.dgi,C.dgj,C.fyS,C.fyT,C.cfH,C.etr,C.ets,C.ett,C.etu,C.fqB,C.fqC,C.dTV,C.dTU,C.d6q,C.d6p,C.ezF,C.ezE,C.ew4,C.eyL,C.ezB,C.exB,C.ezr,C.ezs,C.ezC,C.ewK,C.euN,C.euO,C.ex7,C.ewI,C.ewF,C.ewH,C.ewL,C.ewM,C.ewN,C.ewO,C.ewP,C.ewR,C.euS,C.ewU,C.ewV,C.ewW,C.ewX,C.ewY,C.ewZ,C.ewT,C.ex5,C.exj,C.exh,C.exq,C.ewS,C.ev7,C.ev8,C.eva,C.ext,C.exx,C.etM,C.ev5,C.ev3,C.exF,C.ev_,C.exE,C.euQ,C.evr,C.ezm,C.eyM,C.etN,C.etK,C.etA,C.etw,C.ety,C.ev2,C.eue,C.euj,C.euh,C.eud,C.exg,C.ezy,C.eyY,C.eyT,C.eyU,C.eyW,C.evV,C.evU,C.ezk,C.etD,C.etE,C.etG,C.etH,C.etL,C.etC,C.exC,C.ezt,C.evY,C.eun,C.etz,C.evp,C.etI,C.etR,C.etS,C.etT,C.eu3,C.eu6,C.eu7,C.eu8,C.eu9,C.eua,C.etU,C.etV,C.etW,C.etX,C.etY,C.etZ,C.eu_,C.eu0,C.eu1,C.eu2,C.eu4,C.eu5,C.evn,C.evm,C.evl,C.etJ,C.eur,C.eup,C.eus,C.eut,C.ev4,C.exb,C.exc,C.ex9,C.exa,C.eyS,C.euX,C.euW,C.ewo,C.ewn,C.ewq,C.ewm,C.ewr,C.ewl,C.ews,C.ewk,C.ewt,C.ewj,C.ewu,C.ewi,C.ewv,C.ewh,C.eww,C.ewg,C.ew9,C.ewa,C.ewb,C.ew8,C.ewc,C.ew7,C.ewd,C.ew6,C.ewe,C.ew5,C.ewf,C.evh,C.evi,C.evb,C.evd,C.eve,C.evf,C.evg,C.ezz,C.ezA,C.ewy,C.ewx,C.ewB,C.exY,C.exZ,C.ey_,C.eya,C.eyl,C.eyw,C.eyD,C.eyE,C.eyF,C.eyG,C.eyH,C.ey0,C.ey1,C.ey2,C.ey3,C.ey4,C.ey5,C.ey6,C.ey7,C.ey8,C.ey9,C.eyb,C.eyc,C.eyd,C.eye,C.eyf,C.eyg,C.eyh,C.eyi,C.eyj,C.exO,C.eyk,C.exW,C.exV,C.eyn,C.exU,C.exK,C.eyJ,C.exT,C.exJ,C.exH,C.exS,C.exI,C.exG,C.eyr,C.exR,C.eys,C.eyt,C.eyu,C.eyv,C.exQ,C.eyx,C.eyy,C.eyz,C.exP,C.eyA,C.exN,C.eyB,C.exM,C.eyC,C.exL,C.eul,C.ez4,C.ez3,C.ez5,C.ez2,C.evu,C.evt,C.evv,C.evs,C.ezf,C.eza,C.eze,C.ez6,C.ez7,C.ez8,C.ez9,C.ezc,C.ezd,C.ezi,C.euM,C.euz,C.euA,C.euB,C.euy,C.euF,C.euE,C.eux,C.euw,C.euI,C.euv,C.euJ,C.ewD,C.ewC,C.evH,C.evG,C.evF,C.evE,C.evD,C.evC,C.evB,C.evA,C.evx,C.evz,C.evy,C.evw,C.evT,C.exy,C.exz,C.d20,C.d2n,C.d2o,C.d1V,C.d1U,C.d1Y,C.d1W,C.d1X,C.eAf,C.eA5,C.eAe,C.eA6,C.eA7,C.eA1,C.eA2,C.eA3,C.eA4,C.eAh,C.fJP,C.fJQ,C.fJR,C.ezI,C.ezJ,C.ezK,C.ezN,C.ezO,C.ezR,C.ezS,C.ezQ,C.ezT,C.ezP,C.ezH,C.ezG,C.ezV,C.ezW,C.ezY,C.ezZ,C.etp,C.eto,C.etk,C.etn,C.eA0,C.eA_,C.fE7,C.fE6,C.ehv,C.ehw])
t(C.aRo,B.J)
u(B.md,[C.a3S,C.axa,C.avS,C.xE,C.xH,C.kW,C.tq,C.BA,C.ry,C.w5,C.arP,C.IQ,C.arg,C.uO,C.my,C.hF,C.a8J])
u(C.bOp,[C.cys,C.bOq])
u(C.ci9,[C.cid,C.asR])
t(C.cic,C.ci7)
t(C.cib,C.ci6)
t(C.cie,C.cib)
t(C.cia,C.ci8)
t(C.ci4,C.ci5)
t(C.bae,B.oU)
t(C.csd,B.avj)
t(C.a8v,B.xs)
t(C.aVU,B.dI)
t(C.aAJ,B.aub)
u(B.ag,[C.a0V,C.YF,C.YD,C.aqs,C.VP,C.VS,C.a_W,C.a0s,C.a0r,C.aDY,C.ZO,C.Nw,C.Zm,C.ZH,C.aor,C.aIP,C.V2,C.azy,C.a7N,C.NY,C.ayV,C.JQ,C.a_y,C.W2,C.W3,C.aEm,C.arl,C.a7O])
u(B.ah,[C.aJ7,C.axI,C.axE,C.aDM,C.aE4,C.aE8,C.aFv,C.aHq,C.aHp,C.aLZ,C.aBq,C.aLs,C.azO,C.bg7,C.aLd,C.aNj,C.aLr,C.be0,C.aLX,C.aMa,C.aK8,C.bcM,C.aMb,C.aEp,C.bkx,C.aEn,C.aEq,C.bkg])
u(B.au,[C.axG,C.adn,C.acM,C.bji,C.adq,C.af6,C.b0T,C.bsI,C.b1c,C.blR,C.brg,C.b_7,C.b1f,C.adt,C.adL,C.b1d,C.IP,C.b_a,C.bd0,C.PC,C.JX,C.bhF,C.bhE,C.bv6])
u(B.Hj,[C.bct,C.bu7,C.aJr,C.bfa,C.brE])
u(B.mP,[C.bcs,C.b8Y,C.brB,C.bc_,C.bfy,C.bhL,C.beE,C.bfv,C.bfc,C.bo6,C.ba6,C.b9K,C.bv3,C.bs3,C.brc,C.bex,C.b1a,C.bq9,C.br9])
t(C.bkd,C.aLZ)
t(C.bjA,C.aLs)
t(C.bjk,C.aLd)
t(C.buA,C.aNj)
t(C.bjx,C.aLr)
t(C.bkb,C.aLX)
t(C.bxp,C.aMa)
t(C.aEo,C.bxp)
t(C.bcN,C.aK8)
t(C.aEr,C.aMb)
t(C.buV,B.iU)
t(C.a8I,B.kw)
t(C.cih,C.b2W)
t(C.aik,C.a2U)
u(B.XG,[C.aRe,C.aSM])
t(C.awN,C.aRe)
w(C.aLZ,B.ca)
w(C.aLs,B.ca)
w(C.aLd,B.ca)
w(C.aLr,B.ca)
w(C.aLX,B.ca)
w(C.aNj,B.ca)
w(C.aK8,B.eW)
w(C.aMa,B.ca)
v(C.bxp,B.eC)
w(C.aMb,B.ca)})()
B.k4(b.typeUniverse,JSON.parse('{"aRZ":{"hM":["aRZ"]},"nY":{"aRZ":[],"hM":["aRZ"]},"aRo":{"J":["RM"],"J.E":"RM"},"bae":{"oU":[]},"a8v":{"xs":[],"oi":[]},"aVU":{"dI":[],"cz":[],"t":[]},"aAJ":{"aT":[],"d7":["aT"],"aS":[],"cv":[]},"a0V":{"ag":[],"t":[]},"aJ7":{"ah":["a0V"]},"YF":{"ag":[],"t":[]},"YD":{"ag":[],"t":[]},"axI":{"ah":["YF"]},"axE":{"ah":["YD"]},"axG":{"au":[],"t":[]},"aqs":{"ag":[],"t":[]},"aDM":{"ah":["aqs"]},"adn":{"au":[],"t":[]},"acM":{"au":[],"t":[]},"adq":{"au":[],"t":[]},"af6":{"au":[],"t":[]},"bji":{"au":[],"t":[]},"VP":{"ag":[],"t":[]},"aE4":{"ah":["VP"]},"b0T":{"au":[],"t":[]},"bct":{"aC":[]},"bcs":{"aC":[]},"bu7":{"aC":[]},"b8Y":{"aC":[]},"brB":{"aC":[]},"VS":{"ag":[],"t":[]},"aE8":{"ah":["VS"]},"bc_":{"aC":[]},"a_W":{"ag":[],"t":[]},"aFv":{"ah":["a_W"]},"bfy":{"aC":[]},"a0s":{"ag":[],"t":[]},"a0r":{"ag":[],"t":[]},"aDY":{"ag":[],"t":[]},"ZO":{"ag":[],"t":[]},"aHq":{"ah":["a0s"]},"aHp":{"ah":["a0r"]},"bkd":{"ah":["aDY"]},"bhL":{"aC":[]},"aBq":{"ah":["ZO"]},"bsI":{"au":[],"t":[]},"b1c":{"au":[],"t":[]},"blR":{"au":[],"t":[]},"Nw":{"ag":[],"t":[]},"Zm":{"ag":[],"t":[]},"bjA":{"ah":["Nw"]},"brg":{"au":[],"t":[]},"beE":{"aC":[]},"b_7":{"au":[],"t":[]},"azO":{"ah":["Zm"]},"ZH":{"ag":[],"t":[]},"bg7":{"ah":["ZH"]},"bfv":{"aC":[]},"bfc":{"aC":[]},"bo6":{"aC":[]},"ba6":{"aC":[]},"b9K":{"aC":[]},"bv3":{"aC":[]},"bs3":{"aC":[]},"brc":{"aC":[]},"bex":{"aC":[]},"aor":{"ag":[],"t":[]},"b1f":{"au":[],"t":[]},"bjk":{"ah":["aor"]},"adt":{"au":[],"t":[]},"adL":{"au":[],"t":[]},"aIP":{"ag":[],"t":[]},"V2":{"ag":[],"t":[]},"IP":{"au":[],"t":[]},"azy":{"ag":[],"t":[]},"a7N":{"ag":[],"t":[]},"b1d":{"au":[],"t":[]},"b1a":{"aC":[]},"buA":{"ah":["aIP"]},"aJr":{"aC":[]},"bjx":{"ah":["V2"]},"be0":{"ah":["azy"]},"bkb":{"ah":["a7N"]},"b_a":{"au":[],"t":[]},"bfa":{"aC":[]},"bq9":{"aC":[]},"br9":{"aC":[]},"ayV":{"ag":[],"t":[]},"JQ":{"ag":[],"t":[]},"a_y":{"ag":[],"t":[]},"JX":{"au":[],"t":[]},"NY":{"ag":[],"t":[]},"aEo":{"ah":["NY"],"eC":[]},"bcN":{"ah":["ayV"]},"bd0":{"au":[],"t":[]},"bcM":{"ah":["JQ"]},"PC":{"au":[],"t":[]},"aEr":{"ah":["a_y"]},"brE":{"aC":[]},"bhF":{"au":[],"t":[]},"bhE":{"au":[],"t":[]},"W2":{"ag":[],"t":[]},"W3":{"ag":[],"t":[]},"aEm":{"ag":[],"t":[]},"arl":{"ag":[],"t":[]},"aEp":{"ah":["W2"]},"bkx":{"ah":["W3"]},"aEn":{"ah":["aEm"]},"buV":{"iU":[]},"aEq":{"ah":["arl"]},"bv6":{"au":[],"t":[]},"a7O":{"ag":[],"t":[]},"bkg":{"ah":["a7O"]},"a8I":{"kw":["fv<eT>"],"kk":["fv<eT>"]},"aik":{"a2U":[]},"aRe":{"j4":[],"fg":[]},"awN":{"j4":[],"fg":[]},"aSM":{"j4":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LK"),U:w("vz<q4>"),bz:w("w"),M:w("dD<m>"),bo:w("jC"),g7:w("Mf"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("Ms"),fS:w("E_"),an:w("I0"),bm:w("O<RM>"),X:w("O<a31>"),f3:w("O<aRZ>"),aK:w("O<nc>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lA>"),d5:w("O<aA<bx<F,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dL>>"),fG:w("O<aA<~>>"),aF:w("O<ni>"),cd:w("O<ai<jo>>"),ez:w("O<a6<m,aD>>"),d:w("O<a6<m,@>>"),B:w("O<mu>"),h:w("O<jo>"),gE:w("O<zF>"),k:w("O<op>"),g:w("O<lI>"),D:w("O<i5>"),u:w("O<eM>"),m:w("O<uO>"),i:w("O<hF>"),aC:w("O<a84>"),o:w("O<zH>"),e3:w("O<aD>"),dN:w("O<u>"),v:w("O<hv>"),cR:w("O<iS>"),J:w("O<jg>"),gx:w("O<pd<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(K,K)>"),ek:w("O<+(F,m)>"),n:w("O<+(F,F)>"),r:w("O<cS>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),eR:w("O<fg>"),fT:w("O<b8G>"),bx:w("O<aF_>"),gz:w("O<afg>"),x:w("O<K>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<u?>"),Z:w("O<F?>"),cA:w("O<ch>"),A:w("cs<ah<ag>>"),gL:w("ai<op>"),R:w("ai<i5>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bx<F,+icon3d,picture(m?,m?)>"),P:w("a6<m,@>"),f:w("a6<@,@>"),gI:w("a6<F,+icon3d,picture(m?,m?)>"),bR:w("M<hF,t>"),eC:w("M<nO,m>"),cT:w("M<jH,D>"),dv:w("M<m,m>"),f0:w("M<m,t>"),gN:w("M<F,pJ>"),gh:w("M<my,jq<my>>"),w:w("iE"),ei:w("iA"),g2:w("ro"),fB:w("EB"),b6:w("zF"),gX:w("a7X"),dt:w("lj"),ea:w("op"),bt:w("lI"),I:w("i5"),F:w("eM"),fO:w("my"),ff:w("uO"),fP:w("hF"),Q:w("w5"),dO:w("arh"),a:w("cr"),C:w("aD"),dw:w("asS"),di:w("a8J"),Y:w("eT"),fz:w("+(m,m)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("F6"),dB:w("dx<u>"),bJ:w("dx<m>"),_:w("e4<m>"),N:w("m"),fw:w("q4"),bO:w("at"),K:w("bq<u>"),b:w("bq<K>"),E:w("dL"),W:w("cy<m>"),ac:w("cy<F>"),ex:w("jN<lI>"),cI:w("jN<m>"),cl:w("jN<K>"),b4:w("a_<lg>"),a8:w("a_<m8>"),fR:w("a_<+(m,m)>"),co:w("eb<u>"),l:w("t"),b2:w("bY<~>"),ev:w("q6<dZ>"),dT:w("bg<~>"),cQ:w("aAJ"),q:w("n2"),y:w("Q"),gR:w("K"),z:w("@"),S:w("F"),at:w("ba?"),gw:w("ai<a6<m,@>>?"),aT:w("ai<i5>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i5?"),go:w("b1h?"),a6:w("a85?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dL,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXt=new B.bI(A.az,null,null,H.aow,null)
D.aXD=new B.dc(0,-0.15)
D.aXF=new B.dc(0.62,0)
D.aXI=new B.dc(-0.35,-0.45)
D.aXS=new B.dc(0.9,-0.85)
D.aZD=new B.bn(H.SR,H.SR,A.hh,A.hh)
D.aZS=new B.az(A.b6,1,A.q,-1)
D.biJ=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.b_3=new B.az(D.biJ,1,A.q,-1)
D.b_f=new B.az(A.aF,1.5,A.q,-1)
D.b_k=new B.az(A.b6,1.6,A.q,-1)
D.b_A=new B.az(A.aF,1.4,A.q,-1)
D.b0X=new B.o(null,null,null,null,null,L.GW,A.a6)
D.bZe=new B.a9(A.a3,A.a8,A.x,G.a3t,null,null)
D.b14=new B.o(null,null,null,null,null,D.bZe,A.a6)
D.abJ=new B.o(A.aw,null,null,A.tb,null,null,A.n)
D.bcz=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.biG=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cWQ=w([D.bcz,D.biG],x.O)
D.eku=new B.bS(A.A,0.5,A.x,null,0,D.cWQ,null,null)
D.b1n=new B.o(null,null,null,null,null,D.eku,A.a6)
D.Xf=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_Q=new B.bO(P.v9,A.a0,A.a0,A.a0)
D.b1p=new B.o(D.Xf,null,D.b_Q,null,null,null,A.n)
D.c00=new B.a9(A.a3,A.a8,A.x,A.Qs,null,null)
D.b1w=new B.o(null,null,null,null,null,D.c00,A.a6)
D.adh=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b1z=new B.o(D.adh,null,null,A.qM,null,null,A.n)
D.b1D=new B.o(A.jl,null,null,null,null,null,A.a6)
D.b1G=new B.o(Z.aeo,null,H.abn,A.mg,null,null,A.n)
D.Eg=new B.o(A.dM,null,null,null,null,null,A.a6)
D.b1N=new B.o(null,null,null,null,null,E.w8,A.a6)
D.d0M=w([E.afi,A.c_],x.O)
D.c_B=new B.a9(A.b1,A.b5,A.x,D.d0M,null,null)
D.b1R=new B.o(null,null,null,A.mg,null,D.c_B,A.n)
D.dbA=w([A.bj,A.dM,A.k1],x.O)
D.a1B=new B.a9(A.az,A.aC,A.x,D.dbA,null,null)
D.b23=new B.o(null,null,null,null,null,D.a1B,A.n)
D.b24=new B.o(D.adh,null,null,A.kP,null,null,A.n)
D.crh=w([A.d5,A.bj],x.O)
D.c_s=new B.a9(A.az,A.aC,A.x,D.crh,null,null)
D.b28=new B.o(null,null,null,null,null,D.c_s,A.n)
D.b2i=new B.o(null,null,null,null,null,G.uk,A.a6)
D.b2C=new B.o(A.afk,null,null,null,null,null,A.a6)
D.bdq=new B.w(0.5647058823529412,0,0,0,A.t)
D.abT=new B.ac(0,A.G,D.bdq,A.Sm,28)
D.b4K=new B.aW6()
D.b5i=new C.csd()
D.b5u=new C.bae()
D.aco=new B.cp(A.A,null,null,A.a1q,null)
D.b81=new B.fk(null,null,null,null,null,E.n7,null,null,null,null)
D.b60=new B.cp(A.A,null,null,D.b81,null)
D.bJO=new B.ae(A.dY,28,A.c,null,null,null)
D.b6u=new B.cp(A.A,null,null,D.bJO,null)
D.b7Z=new B.fk(2,null,null,null,null,A.c0,null,null,null,null)
D.b6Q=new B.cp(A.A,null,null,D.b7Z,null)
D.bK8=new B.ae(L.O4,40,A.bz,null,null,null)
D.b6R=new B.cp(A.A,null,null,D.bK8,null)
D.b8S=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b94=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b9t=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b9A=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.ba4=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.bak=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.bal=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.L2=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.baK=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.baQ=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adz=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.bbB=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bco=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adO=new B.w(1,1,1,0.9725490196078431,A.t)
D.bcI=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcT=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bcX=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bda=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bdv=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.beZ=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.X_=new B.w(0.8509803921568627,0,0,0,A.t)
D.bf7=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bfe=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aeH=new B.w(0.6,0,0,0,A.t)
D.aeJ=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bgD=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tw=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bh1=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bhr=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bhP=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.afv=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xp=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AY=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.LB=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.ji=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afT=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.XA=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.blh=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.blL=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.blZ=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XV=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bn9=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xC=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bnF=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bnZ=new B.hL(A.aZ,!0,null,null)
D.fhl=new B.H(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHo=new B.y("Bio link",null,D.fhl,null,null,null,null,null,null,null,null,null)
D.b6K=new B.cp(A.A,null,null,D.fHo,null)
D.boe=new B.hL(A.Wk,!0,D.b6K,null)
D.M_=new C.a3S(0,"none")
D.agX=new C.a3S(1,"deflate")
D.agY=new C.a3S(2,"bzip2")
D.bpb=new B.kq(0.165,0.84,0.44,1)
D.d15=w([A.cc,A.dO,A.aF],x.O)
D.bZJ=new B.a9(A.az,A.aC,A.x,D.d15,null,null)
D.b11=new B.o(null,null,null,null,null,D.bZJ,A.n)
D.bT3=new B.ae(A.eT,null,A.ad,null,null,null)
D.b7l=new B.cp(A.A,null,null,D.bT3,null)
D.bpI=new B.kT(D.b11,A.bf,D.b7l,null)
D.blx=new B.w(0.058823529411764705,1,1,1,A.t)
D.d4k=w([A.bE,A.qV,A.qV,D.blx],x.O)
D.cIz=w([0,0.32,0.7,1],x.x)
D.c_h=new B.a9(A.az,A.aC,A.x,D.d4k,D.cIz,null)
D.b0R=new B.o(null,null,null,null,null,D.c_h,A.n)
D.bpO=new B.kT(D.b0R,A.bf,null,null)
D.bqW=new B.mn(1,1,null,null,null,A.bm,null)
D.bqZ=new B.mn(1,null,null,null,null,D.XA,null)
D.brs=new B.ba(125e4)
D.bry=new B.ba(17e4)
D.brI=new B.ba(35964e8)
D.brO=new B.ba(55e4)
D.brS=new B.ba(68e4)
D.bsi=new B.ij(0,0,0,5)
D.bsz=new B.R(0,16,16,0)
D.bsK=new B.R(0,36,0,36)
D.bsR=new B.R(0,54,0,0)
D.bsY=new B.R(10,0,10,3)
D.bt8=new B.ij(10,16,10,10)
D.btk=new B.R(10,6,4,6)
D.btn=new B.R(10,8,10,6)
D.ahU=new B.R(11,8,11,11)
D.bts=new B.R(12,0,12,24)
D.btE=new B.R(12,12,12,4)
D.btH=new B.R(12,12,8,12)
D.btW=new B.R(12,8,8,12)
D.bui=new B.R(14,14,14,0)
D.bun=new B.R(14,14,14,90)
D.buG=new B.R(16,10,16,16)
D.buH=new B.R(16,10,16,20)
D.aiI=new B.R(16,6,16,28)
D.bvf=new B.R(18,0,18,10)
D.bvh=new B.R(18,0,18,30)
D.bvj=new B.R(18,10,18,12)
D.bvk=new B.R(18,10,18,14)
D.bvB=new B.R(18,16,14,18)
D.bvG=new B.R(18,18,18,12)
D.bvM=new B.R(18,26,18,12)
D.bvR=new B.R(18,34,18,34)
D.bvS=new B.R(18,4,18,14)
D.bvY=new B.R(18,8,18,24)
D.bwf=new B.R(20,16,14,4)
D.bwk=new B.R(20,18,12,4)
D.bwp=new B.R(20,20,12,20)
D.bws=new B.R(20,22,20,20)
D.bwx=new B.R(20,6,20,6)
D.bwH=new B.R(22,18,22,18)
D.bwP=new B.R(22,24,22,0)
D.bwS=new B.R(22,24,22,4)
D.bx_=new B.R(22,60,22,22)
D.bx5=new B.R(24,24,24,22)
D.bxf=new B.R(26,10,60,10)
D.bxn=new B.R(28,44,28,44)
D.bxE=new B.R(32,44,32,44)
D.bxM=new B.R(38,30,38,20)
D.bxR=new B.R(4,0,0,6)
D.by2=new B.ij(4,4,4,4)
D.bys=new B.ij(6,5,6,5)
D.byw=new B.R(6,6,8,6)
D.byH=new B.R(8,14,8,14)
D.byI=new B.R(8,22,8,22)
D.byQ=new B.R(8,6,12,6)
D.byZ=new B.R(8,8,8,4)
D.ajB=new B.R(9,9,9,6)
D.bz9=new B.ij(2.5,2.5,2.5,2.5)
D.bza=new B.R(10.5,0,10.5,0)
D.bzb=new B.R(7,1.5,7,1.5)
D.cTU=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bzr=new B.z3(null,null,D.cTU,A.AC)
D.cQU=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bzs=new B.z3(null,null,D.cQU,A.AC)
D.aRD=new B.H(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGI=new B.y("WORD DESIGN",null,D.aRD,null,null,null,null,null,null,null,null,null)
D.bA0=new B.bB(1,A.bg,D.fGI,null)
D.fGn=new B.y("Slides database",null,Aa.rW,null,null,null,null,null,null,null,null,null)
D.fDB=new B.y("Admin only \xb7 keep as many as you like",null,U.aR7,null,null,null,null,null,null,null,null,null)
D.djV=w([D.fGn,A.bC,D.fDB],x.p)
D.boE=new B.fn(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.djV,null)
D.bA3=new B.bB(1,A.bg,D.boE,null)
D.fy1=new B.y("NGMY logo",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bA6=new B.bB(1,A.bg,D.fy1,null)
D.ffc=new B.H(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new B.y("TALK TO THE EDITOR",null,D.ffc,null,null,null,null,null,null,null,null,null)
D.bAn=new B.bB(1,A.bg,D.fII,null)
D.frS=new B.y("Tell the AI what to change",null,Aa.rW,null,null,null,null,null,null,null,null,null)
D.bAI=new B.bB(1,A.bg,D.frS,null)
D.bBA=new B.DP(!0,"video/mp4")
D.fdu=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpV=new B.y("Move presentations between devices",null,D.fdu,null,null,null,!1,null,null,1,null,null)
D.bBE=new B.qq(A.e_,A.a3,A.f,D.fpV,null)
D.fr4=new B.y("Edit in Slides",null,A.jb,null,null,null,null,null,null,null,null,null)
D.bBF=new B.qq(A.e_,A.A,A.f,D.fr4,null)
D.bBU=new B.dq(1,A.co,D.bBF,null)
D.a_X=new B.a0(60988,"MaterialIcons",!1)
D.bFi=new B.a0(61352,"MaterialIcons",!1)
D.al9=new B.a0(61531,"MaterialIcons",!1)
D.bGx=new B.a0(63062,"MaterialIcons",!1)
D.bGF=new B.a0(63109,"MaterialIcons",!1)
D.bGR=new B.a0(63206,"MaterialIcons",!1)
D.alU=new B.a0(63238,"MaterialIcons",!1)
D.a0r=new B.a0(63365,"MaterialIcons",!1)
D.a0s=new B.a0(63367,"MaterialIcons",!1)
D.a0t=new B.a0(63368,"MaterialIcons",!1)
D.am5=new B.a0(63384,"MaterialIcons",!1)
D.bHp=new B.a0(63525,"MaterialIcons",!1)
D.bHs=new B.a0(63568,"MaterialIcons",!1)
D.bHN=new B.a0(983072,"MaterialIcons",!1)
D.bIb=new B.a0(983271,"MaterialIcons",!0)
D.and=new B.a0(983965,"MaterialIcons",!1)
D.ane=new B.a0(983966,"MaterialIcons",!1)
D.bJ9=new B.a0(984592,"MaterialIcons",!1)
D.bJr=new B.ae(A.u3,16,A.aA,null,null,null)
D.bJy=new B.ae(A.mD,null,A.c,null,null,null)
D.ano=new B.ae(A.qa,18,A.c,null,null,null)
D.bJP=new B.ae(A.BI,18,O.ln,null,null,null)
D.bKu=new B.ae(A.jt,11,null,null,null,null)
D.bKE=new B.ae(A.a0c,null,A.ek,null,null,null)
D.bLc=new B.ae(A.rh,18,A.aA,null,null,null)
D.bLi=new B.ae(A2.BX,14,null,null,null,null)
D.bLj=new B.ae(A.ea,28,A.c8,null,null,null)
D.bLv=new B.ae(A.qb,20,A.c,null,null,null)
D.bLC=new B.ae(A.yw,null,null,null,null,null)
D.bLI=new B.ae(A.j4,18,A.hm,null,null,null)
D.bLN=new B.ae(A.ls,null,null,null,null,null)
D.bGA=new B.a0(63065,"MaterialIcons",!1)
D.bMq=new B.ae(D.bGA,15,A.c,null,null,null)
D.bGG=new B.a0(63113,"MaterialIcons",!1)
D.bMw=new B.ae(D.bGG,null,A.ad,null,null,null)
D.bMU=new B.ae(A.u0,22,A.bL,null,null,null)
D.bNd=new B.ae(A.vR,18,null,null,null,null)
D.bNj=new B.ae(A.C0,12,A.c,null,null,null)
D.bIM=new B.a0(983687,"MaterialIcons",!1)
D.bNu=new B.ae(D.bIM,null,A.bj,null,null,null)
D.bNC=new B.ae(A.ho,null,A.bj,null,null,null)
D.bNV=new B.ae(A.p3,22,A.c,null,null,null)
D.bNZ=new B.ae(A.cB,13,A.c,null,null,null)
D.bO4=new B.ae(A.ea,26,A.av,null,null,null)
D.bO7=new B.ae(A.rm,26,A.c,null,null,null)
D.Oi=new B.ae(A.jt,8,A.c,null,null,null)
D.bOq=new B.ae(A.qa,40,A.c,null,null,null)
D.bOr=new B.ae(A.bEf,null,null,null,null,null)
D.bOv=new B.ae(A.uc,20,null,null,null,null)
D.bIL=new B.a0(983683,"MaterialIcons",!1)
D.bOF=new B.ae(D.bIL,null,A.b0,null,null,null)
D.bOG=new B.ae(A.jt,16,A.bj,null,null,null)
D.bP0=new B.ae(A.rn,null,null,null,null,null)
D.anV=new B.ae(A.vT,22,A.c,null,null,null)
D.bP4=new B.ae(A.dY,17,A.c,null,null,null)
D.anW=new B.ae(A.jt,9,A.c,null,null,null)
D.bP9=new B.ae(A.vO,null,null,null,null,null)
D.bEw=new B.a0(57744,"MaterialIcons",!1)
D.bPg=new B.ae(D.bEw,null,null,null,null,null)
D.bPj=new B.ae(A.vO,16,null,null,null,null)
D.bJi=new B.a0(985181,"MaterialIcons",!1)
D.GN=new B.ae(D.bJi,null,null,null,null,null)
D.bPv=new B.ae(A.ls,16,A.bL,null,null,null)
D.bID=new B.a0(983615,"MaterialIcons",!1)
D.bPx=new B.ae(D.bID,12,A.c,null,null,null)
D.ao1=new B.ae(A.ye,16,null,null,null,null)
D.bPF=new B.ae(A.dY,21,A.c,null,null,null)
D.bPK=new B.ae(A.ho,17,A.c,null,null,null)
D.bPL=new B.ae(A.u0,null,null,null,null,null)
D.bQ1=new B.ae(A.a13,20,A.aA,null,null,null)
D.bQg=new B.ae(A.o9,22,E.n7,null,null,null)
D.bQn=new B.ae(A.q9,13,A.ad,null,null,null)
D.bQp=new B.ae(A.an_,20,A.aA,null,null,null)
D.bEd=new B.a0(57495,"MaterialIcons",!1)
D.bQu=new B.ae(D.bEd,null,null,null,null,null)
D.bQy=new B.ae(A.oa,18,A.c,null,null,null)
D.bQU=new B.ae(A.ug,28,A.c,null,null,null)
D.bR4=new B.ae(D.alU,null,A.aF,null,null,null)
D.bR5=new B.ae(A.qb,22,A.c,null,null,null)
D.aoa=new B.ae(A.a_T,16,null,null,null,null)
D.bRR=new B.ae(A.u0,32,A.c,null,null,null)
D.bSA=new B.ae(A.j6,22,A.c,null,null,null)
D.bSE=new B.ae(A.rm,22,A.ad,null,null,null)
D.aop=new B.ae(A.u3,null,A.bV,null,null,null)
D.bTy=new B.ae(A.u2,18,null,null,null,null)
D.bU9=new B.ae(A.dY,18,A.bH,null,null,null)
D.a1t=new B.ae(A.cB,18,A.aA,null,null,null)
D.bUf=new B.ae(A.amU,null,null,null,null,null)
D.bUG=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aRq,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eC,!0,null,null,null,null)
D.f5D=new B.H(!0,A.bK,null,null,null,null,null,A.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bUY=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f5D,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eC,!0,null,null,null,null)
D.bVo=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eC,!0,null,null,null,null)
D.cXM=w([A.dM,A.aF],x.O)
D.bXs=new B.a9(A.a3,A.a8,A.x,D.cXM,null,null)
D.bXE=new B.a9(A.b1,A.b5,A.Ur,A.avu,null,null)
D.b9j=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bdy=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bgE=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.bbt=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cIB=w([D.b9j,D.bdy,D.bgE,D.bbt],x.O)
D.bXX=new B.a9(A.az,A.aC,A.x,D.cIB,A.Hl,null)
D.dk3=w([A.ct,A.bD,A.b6],x.O)
D.bXZ=new B.a9(A.b1,A.b5,A.Ur,D.dk3,null,null)
D.dlu=w([A.bj,A.cb],x.O)
D.bY2=new B.a9(A.a3,A.a8,A.x,D.dlu,null,null)
D.dgp=w([A.hA,A.d6,A.aE],x.O)
D.bY4=new B.a9(A.az,A.aC,A.x,D.dgp,null,null)
D.d2M=w([A.cQ,A.fd],x.O)
D.bY8=new B.a9(A.a3,A.a8,A.x,D.d2M,null,null)
D.djX=w([O.ln,A.d6],x.O)
D.apa=new B.a9(A.a3,A.a8,A.x,D.djX,null,null)
D.beb=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.djU=w([D.beb,D.xC,A.c0],x.O)
D.bYd=new B.a9(A.a3,A.a8,A.x,D.djU,null,null)
D.cZr=w([A.b_,A.cT,A.et],x.O)
D.bYe=new B.a9(A.az,A.aC,A.x,D.cZr,null,null)
D.Ox=new B.a9(A.a3,A.a8,A.x,A.Hy,null,null)
D.bmn=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cBz=w([D.bmn,A.c0,A.jk],x.O)
D.apf=new B.a9(A.az,A.aC,A.x,D.cBz,null,null)
D.d84=w([A.vk,A.ay,D.AY],x.O)
D.bZg=new B.a9(A.a3,A.a8,A.x,D.d84,null,null)
D.bnG=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bcn=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bhE=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cYy=w([D.bnG,D.bcn,D.bhE],x.O)
D.apg=new B.a9(A.a3,A.a8,A.x,D.cYy,null,null)
D.bed=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c0g=w([Au.agD,D.bed],x.O)
D.bZp=new B.a9(A.b1,A.b5,A.x,D.c0g,null,null)
D.cWE=w([A.n6,A.bz],x.O)
D.bZt=new B.a9(A.b1,A.b5,A.x,D.cWE,null,null)
D.ddd=w([A.aF,A.dO],x.O)
D.bZA=new B.a9(A.a3,A.a8,A.x,D.ddd,null,null)
D.afF=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.axd=w([D.afF,D.ji,D.L2],x.O)
D.c_1=new B.a9(A.az,A.aC,A.x,D.axd,null,null)
D.cBr=w([A.dy,A.dI],x.O)
D.c_c=new B.a9(A.b1,A.b5,A.x,D.cBr,null,null)
D.dad=w([A.vg,Ax.EW],x.O)
D.c02=new B.a9(A.a3,A.a8,A.x,D.dad,null,null)
D.fzy=new B.y("Which Bio link?",null,A.cD,null,null,null,null,null,null,null,null,null)
D.c0d=new B.pQ(null,D.fzy,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yW=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5q=new C.kW(2,"elegantNavy")
D.hfG=w([A.Xn,D.ji,A.c0],x.O)
D.jR=new C.xE(0,"classic")
D.a5d=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5q,4294967035,4279378237,4290283019,D.jR)
D.aGv=new C.kW(3,"elegantGold")
D.b8R=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b9O=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.aed=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hf8=w([D.b8R,D.b9O,D.aed],x.O)
D.a5b=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGv,4294966515,4281016592,4289102906,D.jR)
D.dH0=new C.kW(22,"goldRibbon")
D.hf4=w([A.Xn,D.ji,A.i6],x.O)
D.a54=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dH0,4294967035,4279378237,4291404327,D.jR)
D.dH1=new C.kW(23,"goldBaroque")
D.aeS=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hfa=w([D.aeS,A.ay,A.jk],x.O)
D.a55=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dH1,4294964964,4283053072,4292128567,D.jR)
D.dH3=new C.kW(4,"elegantEmerald")
D.baW=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bbQ=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hfg=w([D.baW,D.bbQ,A.i6],x.O)
D.a56=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dH3,4294376440,4279122734,4291404327,D.jR)
D.dH4=new C.kW(5,"elegantBurgundy")
D.bfD=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hfn=w([D.bfD,A.adr,A.i6],x.O)
D.a59=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dH4,4294965238,4283043359,4291404327,D.jR)
D.dGY=new C.kW(19,"goldFiligree")
D.LJ=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hfb=w([D.LJ,A.ay,A.jk],x.O)
D.a57=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dGY,4294966259,4279378237,4292128567,D.jR)
D.dGZ=new C.kW(20,"goldLaurel")
D.bmc=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hfo=w([A.KW,A.i6,D.bmc],x.O)
D.a58=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dGZ,4294966776,4282000405,4291404327,D.jR)
D.dH_=new C.kW(21,"goldCrest")
D.adk=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bmk=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hfd=w([D.adk,A.ay,D.bmk],x.O)
D.a5c=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dH_,4294965484,4283053072,4292128567,D.jR)
D.dH2=new C.kW(24,"goldStar")
D.bny=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hfh=w([D.bny,A.ay,D.ji],x.O)
D.a5a=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dH2,4294966518,4279378237,4292128567,D.jR)
D.GY=w([D.a5d,D.a5b,D.a54,D.a55,D.a56,D.a59,D.a57,D.a58,D.a5c,D.a5a],x.h)
D.qo=new C.my(0,"blank")
D.Sb=new C.my(1,"title")
D.mM=new C.my(2,"titleContent")
D.e0E=new C.my(3,"twoColumn")
D.CZ=new C.my(4,"section")
D.e0F=new C.my(5,"comparison")
D.I8=new C.my(6,"flashcard")
D.I9=new C.my(7,"quiz")
D.Ia=new C.my(8,"worksheet")
D.apC=w([D.qo,D.Sb,D.mM,D.e0E,D.CZ,D.e0F,D.I8,D.I9,D.Ia],B.ax("O<my>"))
D.ayh=w([An.WK,A.dI],x.O)
D.kD=w([A.c0,A.bL,A.hO,A.hN,D.AY],x.O)
D.dCU=new C.j1("fireworks","Royal Fireworks","Thank you for celebrating with us",D.ayh,D.kD)
D.bmv=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bfB=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cWR=w([D.bmv,D.bfB],x.O)
D.dCL=new C.j1("confetti","Golden Confetti","Together we rise",D.cWR,D.kD)
D.cTZ=w([A.nO,A.Wn],x.O)
D.dCM=new C.j1("crown","Crown of Glory","Built for our community",D.cTZ,D.kD)
D.bcd=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bfg=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.d_K=w([D.bcd,D.bfg],x.O)
D.um=w([A.bK,A.aQ,A.c,A.aL,A.ak],x.O)
D.dCG=new C.j1("aurora","Aurora Gala","A brighter future, together",D.d_K,D.um)
D.bgG=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.daj=w([G.acY,D.bgG],x.O)
D.dCX=new C.j1("champagne","Champagne Toast","Cheers to every member",D.daj,D.kD)
D.dCY=new C.j1("diamonds","Diamond Rain","Every member is a jewel",X.ayW,D.um)
D.b9G=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.beM=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.dfH=w([D.b9G,D.beM],x.O)
D.dCB=new C.j1("starburst","Golden Starburst","Thank you!",D.dfH,D.kD)
D.c0n=w([A.fc,A.xv],x.O)
D.ad6=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Q4=w([A.oM,A.i4,A.vv,A.nP,D.ad6],x.O)
D.dD4=new C.j1("balloons","Luxury Balloons","Let's celebrate",D.c0n,D.Q4)
D.cTh=w([A.Wy,A.w],x.O)
D.dCT=new C.j1("galaxy","Galaxy Spiral","The sky is not the limit",D.cTh,D.um)
D.bkx=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d6Q=w([A.kx,D.bkx],x.O)
D.dCO=new C.j1("redcarpet","Red Carpet","Tonight we shine",D.d6Q,D.kD)
D.bij=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bgt=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.dbg=w([D.bij,D.bgt],x.O)
D.dCD=new C.j1("coins","Gold Coin Rain","Every contribution counts",D.dbg,D.kD)
D.dil=w([A.dy,A.hM],x.O)
D.dCJ=new C.j1("lanterns","Sky Lanterns","Lighting the way together",D.dil,D.kD)
D.bde=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cRe=w([A.xx,D.bde],x.O)
D.dCF=new C.j1("hearts","Floating Hearts","Made with love",D.cRe,D.Q4)
D.bad=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.bb1=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.djS=w([D.bad,D.bb1],x.O)
D.dD3=new C.j1("petals","Rose Petals","Thank you, from our hearts",D.djS,D.Q4)
D.blv=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dg0=w([A.ll,D.blv],x.O)
D.dCA=new C.j1("butterflies","Golden Butterflies","New beginnings",D.dg0,D.kD)
D.bhB=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cSd=w([D.bhB,A.w],x.O)
D.dCW=new C.j1("neon","Neon Night","Let's go!",D.cSd,D.um)
D.ber=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.ddo=w([A.Lk,D.ber],x.O)
D.dCZ=new C.j1("disco","Disco Ball","Party time",D.ddo,D.um)
D.bi8=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dcW=w([A.hA,D.bi8],x.O)
D.dCE=new C.j1("sunrise","Golden Sunrise","A new day for our community",D.dcW,D.kD)
D.dcx=w([A.qY,A.dI],x.O)
D.dD_=new C.j1("pearls","Ocean Pearls","Deep roots, bright future",D.dcx,D.um)
D.bci=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dcL=w([D.bci,A.dI],x.O)
D.dD2=new C.j1("snow","Winter Gala","Warm wishes to all",D.dcL,D.um)
D.b90=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9Z=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.diL=w([D.b90,D.b9Z],x.O)
D.dCS=new C.j1("laurel","Laurel Victory","We did it together",D.diL,D.kD)
D.b8Q=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bfc=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cQh=w([D.b8Q,D.bfc],x.O)
D.dD1=new C.j1("ribbons","Silk Ribbons","Elegance in every step",D.cQh,D.kD)
D.bgc=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cBo=w([G.AX,D.bgc],x.O)
D.dCP=new C.j1("kente","Kente Pride","Proud of our roots",D.cBo,D.kD)
D.biS=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.blP=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d1t=w([D.biS,D.blP],x.O)
D.dCK=new C.j1("trophy","Trophy Shine","Winners together",D.d1t,D.kD)
D.dcS=w([Ao.L8,A.w],x.O)
D.dCC=new C.j1("shooting","Shooting Stars","Make a wish",D.dcS,D.um)
D.b97=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.agr=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dj1=w([D.b97,D.agr],x.O)
D.dCQ=new C.j1("bokeh","Golden Bokeh","Shine bright",D.dj1,D.kD)
D.b9v=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d7G=w([D.b9v,A.w],x.O)
D.dCI=new C.j1("orbits","Golden Orbits","Always moving forward",D.d7G,D.kD)
D.blw=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d4d=w([A.ae9,D.blw],x.O)
D.dCN=new C.j1("flowers","Blooming Garden","Growing together",D.d4d,D.Q4)
D.b9h=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b9T=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dhP=w([D.b9h,D.b9T],x.O)
D.dCH=new C.j1("music","Music Party","Celebrate with us",D.dhP,D.um)
D.baL=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bmf=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cRr=w([D.baL,D.bmf],x.O)
D.dD0=new C.j1("mandala","Royal Mandala","Harmony and unity",D.cRr,D.kD)
D.d4i=w([G.AX,D.agr],x.O)
D.dCV=new C.j1("sparklers","Golden Sparklers","Light up the night",D.d4i,D.kD)
D.dCR=new C.j1("city","City Lights","The whole city celebrates",D.ayh,D.kD)
D.H6=w([D.dCU,D.dCL,D.dCM,D.dCG,D.dCX,D.dCY,D.dCB,D.dD4,D.dCT,D.dCO,D.dCD,D.dCJ,D.dCF,D.dD3,D.dCA,D.dCW,D.dCZ,D.dCE,D.dD_,D.dD2,D.dCS,D.dD1,D.dCP,D.dCK,D.dCC,D.dCQ,D.dCI,D.dCN,D.dCH,D.dD0,D.dCV,D.dCR],B.ax("O<j1>"))
D.eqf=new B.z("","No ring")
D.eG2=new B.z("platinum","Platinum")
D.eCf=new B.z("glow","Glow")
D.etQ=new B.z("double","Double line")
D.esK=new B.z("framed","Gallery frame")
D.epO=new B.z("rosegold","Rose gold")
D.eD1=new B.z("jewels","Jeweled")
D.ezH=new B.z("aurora","Aurora")
D.Cj=w([D.eqf,A.a6G,D.eG2,D.eCf,I.aN3,D.etQ,A.a6J,D.esK,D.epO,D.eD1,D.ezH],x.L)
D.ckQ=w([D.a57,D.a58,D.a5c,D.a54,D.a55,D.a5a],x.h)
D.bPT=new B.ae(G.akK,16,null,null,null,null)
D.b45=new B.vz(A.bi,D.bPT,null,x.U)
D.bEF=new B.a0(58027,"MaterialIcons",!1)
D.bJx=new B.ae(D.bEF,16,null,null,null,null)
D.b43=new B.vz(A.L,D.bJx,null,x.U)
D.bEG=new B.a0(58030,"MaterialIcons",!1)
D.bNA=new B.ae(D.bEG,16,null,null,null,null)
D.b46=new B.vz(A.dP,D.bNA,null,x.U)
D.cr3=w([D.b45,D.b43,D.b46],B.ax("O<vz<q4>>"))
D.cyJ=w([A.B0,A.hk],x.O)
D.cyK=w([A.b_,A.bc,A.et],x.O)
D.PU=w([A.bL,A.hN,A.hO,A.ay,A.nP],x.O)
D.cBu=w([A.c0,D.ji,D.L2],x.O)
D.cC1=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.enC=new B.z(4278913286,4280030216)
D.enU=new B.z(4279373061,4278518787)
D.eo0=new B.z(4279898630,4278847235)
D.d0Q=w([D.enC,D.enU,D.eo0],x.n)
D.cXw=w(["\u265b","\u269c","\u2726"],x.s)
D.dGW=new C.xG("Royal Onyx & Gold",D.d0Q,4292128567,4294370209,4294965479,3874020544,D.cXw)
D.enp=new B.z(4278326799,4278598442)
D.enr=new B.z(4278395929,4278258953)
D.eny=new B.z(4278599728,4278327826)
D.dic=w([D.enp,D.enr,D.eny],x.n)
D.cS5=w(["\u269c","\u2756","\u2727"],x.s)
D.dGT=new C.xG("Imperial Emerald",D.dic,4293050997,4294699968,4294180856,3872254170,D.cS5)
D.ens=new B.z(4278455076,4278918747)
D.enx=new B.z(4278587439,4278322714)
D.enL=new B.z(4279051376,4278455076)
D.dgl=w([D.ens,D.enx,D.enL],x.n)
D.d8m=w(["\u2654","\u2726","\u2748"],x.s)
D.dGN=new C.xG("Sapphire Crown",D.dgl,4291417834,4294967295,4294310143,3871986666,D.d8m)
D.enZ=new B.z(4279894534,4283041554)
D.eoa=new B.z(4281008906,4279042307)
D.eoi=new B.z(4284221976,4279894534)
D.dm7=w([D.enZ,D.eoa,D.eoi],x.n)
D.cTq=w(["\u265b","\u2766","\u2726"],x.s)
D.dGP=new C.xG("Ruby Throne",D.dm7,4293378685,4294963145,4294964466,3874213833,D.cTq)
D.enT=new B.z(4279371039,4281995100)
D.eo2=new B.z(4280092723,4278714896)
D.eof=new B.z(4283045242,4279371039)
D.diz=w([D.enT,D.eo2,D.eof],x.n)
D.dgI=w(["\u2655","\u2756","\u2727"],x.s)
D.dGU=new C.xG("Amethyst Palace",D.diz,4293314984,4294963421,4294702591,3873229802,D.dgI)
D.enu=new B.z(4278519045,4280032287)
D.enM=new B.z(4279111184,4278321666)
D.eo7=new B.z(4280492839,4278716426)
D.dfb=w([D.enu,D.enM,D.eo7],x.n)
D.d6D=w(["\u2726","\u25c6","\u2742"],x.s)
D.dGR=new C.xG("Obsidian & Platinum",D.dfb,4293256418,4294967295,4294638330,3872378836,D.d6D)
D.eo_=new B.z(4279896588,4282194463)
D.eo8=new B.z(4280553487,4279043334)
D.eog=new B.z(4283048488,4279896588)
D.d66=w([D.eo_,D.eo8,D.eog],x.n)
D.dkk=w(["\u2766","\u273f","\u2727"],x.s)
D.dGO=new C.xG("Rose Gold Velvet",D.d66,4293440672,4294960345,4294964979,3874214602,D.dkk)
D.env=new B.z(4278520340,4279180595)
D.enA=new B.z(4278718495,4278322443)
D.enX=new B.z(4279510591,4278520340)
D.cIi=w([D.env,D.enA,D.enX],x.n)
D.d7k=w(["\u269c","\u2736","\u2756"],x.s)
D.dGS=new C.xG("Midnight Brass",D.cIi,4291405148,4293975208,4294439914,3872837564,D.d7k)
D.eov=new B.z(4294703086,4293780428)
D.eor=new B.z(4294307549,4293187253)
D.eow=new B.z(4294966517,4293977807)
D.cVy=w([D.eov,D.eor,D.eow],x.n)
D.d7K=w(["\u269c","\u265b","\u2726"],x.s)
D.dGV=new C.xG("Ivory Marble & Gold",D.cVy,4289760572,4286209048,4280951062,3863625518,D.d7K)
D.enG=new B.z(4278978566,4280555024)
D.enW=new B.z(4279504137,4278518530)
D.eoc=new B.z(4281211923,4278978566)
D.cTg=w([D.enG,D.enW,D.eoc],x.n)
D.dhs=w(["\u2742","\u2726","\u265c"],x.s)
D.dGQ=new C.xG("Onyx & Copper",D.cTg,4291856987,4294365880,4294964718,3873885630,D.dhs)
D.cC9=w([D.dGW,D.dGT,D.dGN,D.dGP,D.dGU,D.dGR,D.dGO,D.dGS,D.dGV,D.dGQ],B.ax("O<xG>"))
D.cEv=w([A.ay,D.AY,A.hN],x.O)
D.ew_=new B.z("Original",null)
D.ew7=new B.z("Wide 16:9",1.7777777777777777)
D.eyn=new B.z("Landscape 3:2",1.5)
D.evr=new B.z("Photo 4:3",1.3333333333333333)
D.exb=new B.z("Square",1)
D.eJI=new B.z("Portrait 3:4",0.75)
D.avD=w([D.ew_,D.ew7,D.eyn,D.evr,D.exb,D.eJI],B.ax("O<+(m,K?)>"))
D.avE=w([A.hN,A.bU,A.b7,A.bu],x.O)
D.eyy=new B.z("","Original")
D.eAr=new B.z("circle","Circle")
D.eGO=new B.z("rounded","Rounded")
D.eHI=new B.z("triangle","Triangle")
D.eCv=new B.z("hexagon","Hexagon")
D.eAR=new B.z("diamond","Diamond")
D.ezG=new B.z("arch","Arch")
D.Co=w([D.eyy,D.eAr,D.eGO,D.eHI,D.eCv,D.eAR,D.ezG],x.L)
D.dC_=new C.lg("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ky,A.d5,A.aJ)
D.dCf=new C.lg("campus_green","Campus Green","Normal",A.b0,A.n4,A.tt,A.fY,A.e2)
D.dC6=new C.lg("warm_sand","Warm Sand","Normal",A.dS,A.hO,A.bL,A.il,A.nV)
D.dCd=new C.lg("slate_minimal","Slate Minimal","Normal",A.br,A.aQ,A.aL,A.M,A.aJ)
D.dBZ=new C.lg("coral_fresh","Coral Fresh","Normal",A.cc,A.ik,A.pB,A.k3,A.tm)
D.dCe=new C.lg("lavender_calm","Lavender Calm","Normal",A.b6,A.pE,A.xq,A.oK,A.jg)
D.dC0=new C.lg("ocean_breeze","Ocean Breeze","Normal",A.fd,A.r2,A.ti,A.to,A.nW)
D.afL=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dCb=new C.lg("berry_pop","Berry Pop","Normal",A.f0,D.afL,A.ks,G.XT,A.Fg)
D.dC1=new C.lg("midnight_pro","Midnight Pro","Professional",A.aF,A.M,A.dy,A.ks,A.cs)
D.dCa=new C.lg("executive_navy","Executive Navy","Professional",A.d_,A.af6,A.d5,A.kU,A.bK)
D.dC8=new C.lg("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aQ,A.cs)
D.dC2=new C.lg("corporate_steel","Corporate Steel","Professional",A.n2,A.M,A.mp,A.f9,A.bK)
D.dC5=new C.lg("gold_luxe","Gold Luxe","Luxury",A.n1,A.dH,A.oL,A.lm,A.bL)
D.bie=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dC9=new C.lg("rose_gold_elite","Rose Gold Elite","Luxury",A.hk,D.bie,A.XH,A.i4,A.nP)
D.dCc=new C.lg("platinum_night","Platinum Night","Luxury",A.cs,A.dI,A.bm,A.aQ,A.aL)
D.dCg=new C.lg("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pK,A.f2,A.pR,A.jE)
D.dBY=new C.lg("royal_purple","Royal Purple","Luxury",A.n3,A.WQ,A.jg,A.ks,A.KV)
D.dC7=new C.lg("neon_pitch","Neon Pitch","Bold",A.b7,A.dI,A.M,A.b3,A.aL)
D.dC4=new C.lg("crimson_impact","Crimson Impact","Bold",A.bz,A.kx,A.eu,A.tF,A.f1)
D.dC3=new C.lg("sunset_gallery","Sunset Gallery","Bold",A.fl,A.tm,A.k3,A.pB,A.mn)
D.Hf=w([D.dC_,D.dCf,D.dC6,D.dCd,D.dBZ,D.dCe,D.dC0,D.dCb,D.dC1,D.dCa,D.dC8,D.dC2,D.dC5,D.dC9,D.dCc,D.dCg,D.dBY,D.dC7,D.dC4,D.dC3],B.ax("O<lg>"))
D.cQ0=w([A.c0,D.ji],x.O)
D.d6n=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ezs=new B.z("Faces & people",D.d6n)
D.cEz=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eml=new B.z("Ideas & work",D.cEz)
D.cY0=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eCA=new B.z("Nature",D.cY0)
D.d6w=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.evY=new B.z("Places & things",D.d6w)
D.d0o=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ezL=new B.z("Symbols",D.d0o)
D.cQ6=w([D.ezs,D.eml,D.eCA,D.evY,D.ezL],B.ax("O<+(m,ai<m>)>"))
D.b9m=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cQs=w([A.c0,D.aed,D.b9m],x.O)
D.b3r=new B.ac(0,A.G,A.KS,A.aHk,40)
D.b37=new B.ac(0,A.G,A.nT,A.eo,8)
D.cQF=w([D.b3r,D.b37],x.V)
D.cR9=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aw3=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2G=w([A.hN,A.et,A.bz,A.aw,A.cc],x.O)
D.cS_=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aet=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cSa=w([A.Xw,D.aet,A.Xw],x.O)
D.cSg=w([A.i6,D.ji,D.L2],x.O)
D.evL=new B.z(A.bi,D.a0s)
D.ex6=new B.z(A.L,D.a0r)
D.er0=new B.z(A.dP,D.a0t)
D.cTb=w([D.evL,D.ex6,D.er0],B.ax("O<+(q4,a0)>"))
D.cS=new C.IQ(0,"text")
D.lB=new C.IQ(1,"image")
D.f5=new C.IQ(2,"shape")
D.Sa=new C.IQ(3,"pdf")
D.la=new C.IQ(4,"signature")
D.a5x=new C.IQ(5,"bio")
D.cU3=w([D.cS,D.lB,D.f5,D.Sa,D.la,D.a5x],B.ax("O<IQ>"))
D.cU4=w([A.bo,A.cF],B.ax("O<HL>"))
D.cUF=w(["School","Documents","Sign & present"],x.s)
D.b3w=new B.ac(0,A.G,A.agh,A.uE,28)
D.cV_=w([D.b3w],x.V)
D.cVj=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Qc=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aws=w([A.hN,A.Ff,A.aL,A.c,A.oM,A.ay],x.O)
D.eJ6=new B.z(0.1,0.08)
D.eCy=new B.z(0.3,0.05)
D.eqt=new B.z(0.55,0.1)
D.euJ=new B.z(0.8,0.06)
D.exQ=new B.z(0.92,0.16)
D.exl=new B.z(0.2,0.2)
D.evc=new B.z(0.7,0.22)
D.eBd=new B.z(0.05,0.4)
D.eyf=new B.z(0.95,0.45)
D.erf=new B.z(0.12,0.7)
D.etu=new B.z(0.88,0.75)
D.etC=new B.z(0.4,0.9)
D.eoM=new B.z(0.65,0.93)
D.eum=new B.z(0.25,0.97)
D.evI=new B.z(0.85,0.9)
D.es4=new B.z(0.5,0.04)
D.cWM=w([D.eJ6,D.eCy,D.eqt,D.euJ,D.exQ,D.exl,D.evc,D.eBd,D.eyf,D.erf,D.etu,D.etC,D.eoM,D.eum,D.evI,D.es4],x.G)
D.cWT=w([A.c,A.hk,A.aM,A.aV],x.O)
D.e2g=new C.jH("office_blue","Office Blue",A.bj,A.d5,A.aJ,A.c,A.ky)
D.e2r=new C.jH("campus_green","Campus Green",A.b0,A.fY,A.e2,A.n4,A.tt)
D.e2h=new C.jH("sunset","Sunset",A.fl,A.k3,A.nV,A.ik,A.pB)
D.e2i=new C.jH("midnight","Midnight",A.aF,A.ks,A.cs,A.M,A.dy)
D.e2t=new C.jH("classic","Classic",A.d6,A.dH,A.lQ,A.hO,A.fV)
D.e2q=new C.jH("rose_gold","Rose Gold",A.hk,A.xy,A.xx,A.vv,A.B0)
D.e2b=new C.jH("ocean_teal","Ocean Teal",A.fd,A.to,A.nW,A.r2,A.ti)
D.e2a=new C.jH("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aQ,A.aL)
D.e29=new C.jH("neon_night","Neon Night",A.b7,A.b3,A.aL,A.dI,A.M)
D.e2l=new C.jH("lavender","Lavender",A.b6,A.oK,A.jg,A.pE,A.xq)
D.e2n=new C.jH("coral","Coral",A.cc,A.k3,A.tm,A.ik,A.mn)
D.e2c=new C.jH("forest","Forest",A.h7,A.dX,A.cp,A.lR,A.ek)
D.e2d=new C.jH("berry","Berry",A.f0,G.XT,A.Fg,D.afL,A.ks)
D.e2k=new C.jH("sand","Sand",A.dS,A.il,A.nV,A.hO,A.bL)
D.e2p=new C.jH("ice","Ice",A.n2,A.Ll,A.aJ,A.n_,A.f9)
D.e2f=new C.jH("charcoal","Charcoal",A.ak,A.aQ,A.cs,A.bm,A.M)
D.e28=new C.jH("mint","Mint",A.aV,A.fz,A.fY,A.lR,A.pR)
D.e2o=new C.jH("crimson","Crimson",A.bz,A.n6,A.kx,A.Fd,A.tF)
D.bbP=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e2j=new C.jH("gold","Gold",A.n1,A.vg,A.oL,D.bbP,A.lm)
D.e2m=new C.jH("aqua","Aqua",A.bR,A.F3,A.oI,A.pG,A.oN)
D.e2e=new C.jH("plum","Plum",A.n3,A.xv,A.Fg,A.ES,A.r0)
D.e2s=new C.jH("steel","Steel",A.d_,A.d5,A.bm,A.ky,A.kU)
D.a2W=w([D.e2g,D.e2r,D.e2h,D.e2i,D.e2t,D.e2q,D.e2b,D.e2a,D.e29,D.e2l,D.e2n,D.e2c,D.e2d,D.e2k,D.e2p,D.e2f,D.e28,D.e2o,D.e2j,D.e2m,D.e2e,D.e2s],B.ax("O<jH>"))
D.cXd=w([A.c0,A.jk],x.O)
D.Sc=new C.hF(10,"rotate3d")
D.Ic=new C.hF(8,"flip")
D.aGO=new C.hF(19,"spiral")
D.qp=new C.hF(16,"bounce")
D.aGR=new C.hF(9,"flipVertical")
D.cXe=w([D.Sc,D.Ic,D.aGO,D.qp,D.aGR],x.i)
D.eb=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cXz=w([0.62,1],x.x)
D.cY8=w([0,0.32,0.68,1],x.x)
D.mN=new C.hF(6,"zoom")
D.uy=new C.hF(4,"slideUp")
D.ux=new C.hF(2,"slideLeft")
D.cYh=w([D.mN,D.Ic,D.uy,D.Sc,D.ux],x.i)
D.cYN=w([A.bU,A.hk,A.i4,A.hN,A.c],x.O)
D.b3m=new B.ac(0,A.G,D.aeH,A.uE,30)
D.cZw=w([D.b3m],x.V)
D.eci=new B.u(0,-2.5)
D.ec8=new B.u(-2.5,0)
D.eaR=new B.u(2.5,0)
D.cZz=w([A.Ss,A.a5U,A.aHQ,A.a5T,D.eci,I.aHM,D.ec8,D.eaR],x.dN)
D.Hn=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d__=w([23,114,69,56,80,144],x.t)
D.d_r=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d_T=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d1y=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d1C=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bh=new C.uO(0,"rectangle")
D.eN=new C.uO(1,"circle")
D.lb=new C.uO(6,"hexagon")
D.d1Q=w([D.bh,D.eN,D.lb],x.m)
D.og=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afS=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d2n=w([D.afS,A.dX],x.O)
D.eqJ=new B.z("","Classic")
D.ep0=new B.z("caps","Bold caps")
D.eBg=new B.z("elegant","Elegant")
D.eH6=new B.z("shadow","Shadow")
D.ev5=new B.z("neon","Neon glow")
D.eFJ=new B.z("outline","Outline")
D.eEU=new B.z("marker","Highlighter")
D.eHh=new B.z("stamp","Stamp")
D.eGJ=new B.z("retro","Retro")
D.eu1=new B.z("threed","3D")
D.eBN=new B.z("fire","Fire")
D.eCK=new B.z("ice","Ice")
D.eAq=new B.z("chalk","Chalk")
D.eAv=new B.z("comic","Comic")
D.eHj=new B.z("sunset","Sunset")
D.eIt=new B.z("softglow","Soft glow")
D.eDJ=new B.z("lowercase","Lowercase")
D.eAY=new B.z("double","Echo")
D.eIC=new B.z("whisper","Whisper")
D.axl=w([D.eqJ,D.ep0,D.eBg,D.eH6,D.ev5,D.eFJ,D.eEU,D.eHh,D.eGJ,D.eu1,I.aMZ,D.eBN,D.eCK,D.eAq,D.eAv,A.a6G,D.eHj,D.eIt,D.eDJ,D.eAY,D.eIC],x.L)
D.d3F=w([3,5,7,10,12,15],x.t)
D.d52=w([A.bU,A.bL,A.c,A.eD,A.ct],x.O)
D.dtD=new C.tq(10,"cardWorld")
D.CR=new C.BA(3,"rounded")
D.dJX=new C.lj("world","NGMY World",D.dtD,D.CR,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dtE=new C.tq(11,"cardSplit")
D.dJT=new C.lj("business","Business Wire",D.dtE,D.CR,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dtF=new C.tq(12,"cardBreaking")
D.dK5=new C.lj("breaking","Breaking Red",D.dtF,D.CR,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dtG=new C.tq(13,"cardFeature")
D.dJZ=new C.lj("feature","Tech Feature",D.dtG,D.CR,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aFk=new C.tq(6,"circle")
D.aFe=new C.BA(4,"circle")
D.dK2=new C.lj("parchment","Royal Circle",D.aFk,D.aFe,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dJS=new C.lj("ocean","Blue Ocean",D.aFk,D.aFe,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dtJ=new C.tq(7,"rail")
D.aFd=new C.BA(1,"double")
D.dJU=new C.lj("forest","Green Leaf",D.dtJ,D.aFd,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aFh=new C.tq(1,"sideBySide")
D.dK7=new C.lj("herald","NGMY Herald",D.aFh,D.CR,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aFg=new C.tq(0,"classic")
D.a4K=new C.BA(9,"shadow")
D.dK6=new C.lj("daily","The Daily",D.aFg,D.a4K,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dtH=new C.tq(2,"splash")
D.aFf=new C.BA(6,"cutCorner")
D.dJR=new C.lj("tabloid","Big Tabloid",D.dtH,D.aFf,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aFl=new C.tq(9,"minimal")
D.dK1=new C.lj("modern","Modern Digest",D.aFl,D.CR,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aFi=new C.tq(3,"magazine")
D.aFc=new C.BA(0,"plain")
D.dJY=new C.lj("midnight","Midnight Edition",D.aFi,D.aFc,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dtK=new C.tq(8,"banner")
D.dK_=new C.lj("metro","Metro Wire",D.dtK,D.aFf,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dtC=new C.BA(8,"arch")
D.dK0=new C.lj("sunrise","Sunrise Post",D.aFi,D.dtC,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aFj=new C.tq(5,"scrapbook")
D.dtB=new C.BA(5,"tape")
D.dJW=new C.lj("neon","Neon Beat",D.aFj,D.dtB,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dtI=new C.tq(4,"wrap")
D.dK8=new C.lj("gold","Golden Press",D.dtI,D.a4K,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dK9=new C.lj("minimal","Paper White",D.aFl,D.a4K,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dJV=new C.lj("gazette","Fresh Gazette",D.aFg,D.aFd,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dK4=new C.lj("times","Classic Times",D.aFh,D.aFc,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RI=new C.BA(2,"polaroid")
D.dK3=new C.lj("scrapbook","Memory Scrapbook",D.aFj,D.RI,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a3a=w([D.dJX,D.dJT,D.dK5,D.dJZ,D.dK2,D.dJS,D.dJU,D.dK7,D.dK6,D.dJR,D.dK1,D.dJY,D.dK_,D.dK0,D.dJW,D.dK8,D.dK9,D.dJV,D.dK4,D.dK3],B.ax("O<lj>"))
D.d5e=w([0.45,1],x.x)
D.Hp=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d5C=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.haz=new C.oC("Original",0,1,1,0,0,0)
D.haD=new C.oC("Black & white",0,1.1,0,0,0,0)
D.haq=new C.oC("Noir",-0.05,1.55,0,0,0,0)
D.hau=new C.oC("Sepia",0,1,0.25,0.9,0,0)
D.hat=new C.oC("Vivid",0,1.15,1.6,0,0,0)
D.ham=new C.oC("Pop",0,1.3,1.9,0,0,0)
D.hao=new C.oC("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.haA=new C.oC("Matte",0,0.9,0.85,0,0,0.55)
D.hav=new C.oC("Cool",0,1.05,1,-0.8,0,0)
D.haC=new C.oC("Warm",0.03,1.05,1.1,0.8,0,0)
D.han=new C.oC("Golden hour",0.04,1,1.25,1,0,0)
D.has=new C.oC("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.haB=new C.oC("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.har=new C.oC("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hax=new C.oC("Retro",0,0.9,0.7,0.4,0,0.35)
D.haw=new C.oC("Forest",0,1,1.2,-0.1,-0.45,0)
D.hay=new C.oC("Rose",0,1,1.1,0.3,0.4,0)
D.hap=new C.oC("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d5D=w([D.haz,D.haD,D.haq,D.hau,D.hat,D.ham,D.hao,D.haA,D.hav,D.haC,D.han,D.has,D.haB,D.har,D.hax,D.haw,D.hay,D.hap],B.ax("O<oC>"))
D.b8M=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d5F=w([D.afS,A.dX,D.b8M],x.O)
D.eme=new B.z(0.12,0.3)
D.eCV=new B.z(0.26,0.75)
D.eBc=new B.z(0.8,0.22)
D.eHr=new B.z(0.9,0.7)
D.eDI=new B.z(0.5,0.15)
D.eFL=new B.z(0.65,0.85)
D.esB=new B.z(0.08,0.85)
D.d5S=w([D.eme,D.eCV,D.eBc,D.eHr,D.eDI,D.eFL,D.esB],x.G)
D.axx=w([A.b7,A.bU,A.bu,A.b_],x.O)
D.d6H=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d6T=w([A.c,A.f9,A.ds,A.vi],x.O)
D.bc3=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d7V=w([D.bc3,D.aet],x.O)
D.d7W=w([A.vk,A.ay],x.O)
D.d8a=w([0,0.25,0.75,1],x.x)
D.d8c=w([A.xm,A.oM],x.O)
D.aGo=new C.kW(10,"kenteSunset")
D.hf6=w([D.aeS,A.k_,A.ay],x.O)
D.dFd=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aGo,4294964964,4282000405,4279983648,D.jR)
D.aGp=new C.kW(11,"indigoMudcloth")
D.b9K=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hfk=w([D.b9K,A.aep,A.i6],x.O)
D.dFl=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aGp,4294439140,4279903102,4279903102,D.jR)
D.aGq=new C.kW(12,"adinkraRoyal")
D.bmY=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hfl=w([D.adk,D.bmY,A.ay],x.O)
D.dFn=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aGq,4294965484,4285218591,4287322667,D.jR)
D.aGr=new C.kW(13,"nileLotus")
D.bj9=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bfR=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hfq=w([D.bj9,D.bfR,A.i6],x.O)
D.dFm=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGr,4294244340,4279196764,4279196764,D.jR)
D.aGs=new C.kW(14,"shweshweIvory")
D.be0=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bcN=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.bac=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hf7=w([D.be0,D.bcN,D.bac],x.O)
D.dFi=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGs,4294505710,4279970378,4291058750,D.jR)
D.rF=new C.kW(15,"certIvoryNavy")
D.hf5=w([D.LJ,D.ji,A.i6],x.O)
D.aFU=new C.xE(1,"ringsNdoa")
D.dFf=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rF,4294966259,4279378237,4291404327,D.aFU)
D.a5f=new C.xE(2,"coupleCards")
D.dFa=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rF,4294966259,4279378237,4291404327,D.a5f)
D.CU=new C.kW(18,"certIvoryNavyBar")
D.adj=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hfj=w([D.adj,D.ji,A.i6],x.O)
D.aFV=new C.xE(3,"kuhoweshaForm")
D.dF8=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CU,4294966519,4279378237,4291404327,D.aFV)
D.aeF=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hfD=w([D.LJ,D.aeF,A.i6],x.O)
D.a5g=new C.xE(4,"mahariPande")
D.dFb=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rF,4294966259,4279904068,4291404327,D.a5g)
D.aGt=new C.kW(16,"certIvoryGreen")
D.bdo=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hf9=w([A.KW,D.bdo,A.i6],x.O)
D.aFW=new C.xE(5,"familiaMti")
D.dFh=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aGt,4294966776,4280241466,4291404327,D.aFW)
D.a5h=new C.xE(6,"ndoaSafi")
D.dF9=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CU,4294966519,4279378237,4291404327,D.a5h)
D.bhA=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hfc=w([D.LJ,A.i6,D.bhA],x.O)
D.a5i=new C.xE(7,"peteWide")
D.dFe=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rF,4294966259,4282001936,4291404327,D.a5i)
D.dFo=new C.xE(8,"muhuriCrest")
D.dF7=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rF,4294966259,4279378237,4291404327,D.dFo)
D.hfm=w([D.adj,D.aeF,A.i6],x.O)
D.dFp=new C.xE(9,"fomuWazi")
D.dFk=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CU,4294966519,4279904068,4291404327,D.dFp)
D.aGu=new C.kW(17,"certIvoryRose")
D.be4=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hfp=w([D.be4,D.afv,A.i6],x.O)
D.a5e=new C.xE(10,"upendoOrnate")
D.dFg=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aGu,4294965493,4286200650,4291404327,D.a5e)
D.d8C=w([D.dFd,D.dFl,D.dFn,D.dFm,D.dFi,D.dFf,D.dFa,D.dF8,D.dFb,D.dFh,D.dF9,D.dFe,D.dF7,D.dFk,D.dFg],x.h)
D.ec=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Id=new C.w5(0,"emojis")
D.D0=new C.w5(1,"pictures")
D.Ie=new C.w5(2,"icons3d")
D.a5z=new C.w5(3,"animations")
D.Se=new C.w5(4,"videoMotion")
D.D1=new C.w5(5,"luxe")
D.a3i=w([D.Id,D.D0,D.Ie,D.a5z,D.Se,D.D1],B.ax("O<w5>"))
D.eGm=new B.z(A.dY,"Looks")
D.euC=new B.z(A.yH,"Light")
D.euz=new B.z(A.np,"Colour")
D.esC=new B.z(A.yj,"Effects")
D.alO=new B.a0(63112,"MaterialIcons",!1)
D.epg=new B.z(D.alO,"Crop")
D.d96=w([D.eGm,D.euC,D.euz,D.esC,D.epg],x.f2)
D.d9K=w([],x.D)
D.hfA=w([],x.L)
D.esP=new B.z("Flashcard",D.I8)
D.ewz=new B.z("Quiz",D.I9)
D.eyt=new B.z("Worksheet",D.Ia)
D.evD=new B.z("Notes",D.mM)
D.ex4=new B.z("Section",D.CZ)
D.dap=w([D.esP,D.ewz,D.eyt,D.evD,D.ex4],B.ax("O<+(m,my)>"))
D.dH5=new C.kW(6,"beadedPearl")
D.bgw=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hfE=w([H.XG,D.bgw,A.i6],x.O)
D.aFS=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dH5,4294966774,4286209070,4291404327,D.jR)
D.dH6=new C.kW(7,"artDeco")
D.bkr=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bng=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hfC=w([D.bkr,D.bng,A.c0],x.O)
D.aFT=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dH6,4294440434,4280228630,4290283019,D.jR)
D.dH7=new C.kW(8,"rosetteCorners")
D.bmq=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bc8=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bgr=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hff=w([D.bmq,D.bc8,D.bgr],x.O)
D.aFR=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dH7,4294702831,4285218602,4291394365,D.jR)
D.dH8=new C.kW(9,"modernLedger")
D.hfe=w([A.c,D.ji,D.ji],x.O)
D.aFQ=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dH8,4294967295,4279378237,4279378237,D.jR)
D.dat=w([D.aFS,D.aFT,D.aFR,D.aFQ],x.h)
D.daC=w([A.i4,A.oM],x.O)
D.daD=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cn=new C.hF(0,"none")
D.df=new C.hF(1,"fade")
D.Ib=new C.hF(3,"slideRight")
D.aGQ=new C.hF(5,"slideDown")
D.e0L=new C.hF(7,"zoomOut")
D.a5y=new C.hF(11,"cube")
D.e0G=new C.hF(12,"blur")
D.aGN=new C.hF(13,"dissolve")
D.e0H=new C.hF(14,"wipeLeft")
D.e0I=new C.hF(15,"wipeRight")
D.Sd=new C.hF(17,"push")
D.e0J=new C.hF(18,"flash")
D.aGP=new C.hF(20,"swing")
D.e0K=new C.hF(21,"curtain")
D.QO=w([D.cn,D.df,D.ux,D.Ib,D.uy,D.aGQ,D.mN,D.e0L,D.Ic,D.aGR,D.Sc,D.a5y,D.e0G,D.aGN,D.e0H,D.e0I,D.qp,D.Sd,D.e0J,D.aGO,D.aGP,D.e0K],x.i)
D.QP=w([D.a5d,D.a5b,D.a54,D.a55,D.a56,D.a59,D.a57,D.a58,D.a5c,D.a5a,D.aFS,D.aFT,D.aFR,D.aFQ],x.h)
D.db5=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.db9=w([A.xr,A.hN,A.c0],x.O)
D.etW=new B.z(A.u5,"Design")
D.eHR=new B.z(D.am5,"Word sizes")
D.eDs=new B.z(A.C7,"Text")
D.bI1=new B.a0(983182,"MaterialIcons",!1)
D.eDw=new B.z(D.bI1,"Photo")
D.eoP=new B.z(A.lw,"Logo")
D.eJ4=new B.z(A.GK,"News")
D.dbe=w([D.etW,D.eHR,D.eDs,D.eDw,D.eoP,D.eJ4],x.f2)
D.dbf=w(["golddust","sparkle","sheen"],x.s)
D.e27=new C.ew("upload_pdf",L.O4,"Upload PDF")
D.e1h=new C.ew("sign_paper",A.GH,"Sign Paper")
D.bHi=new B.a0(63438,"MaterialIcons",!1)
D.e23=new C.ew("hd_photo",D.bHi,"HD Photo")
D.e19=new C.ew("sharpen",E.a0e,"Sharpen")
D.e1j=new C.ew("print",L.O4,"Download PDF")
D.e1L=new C.ew("rotate",D.alO,"Rotate")
D.e1s=new C.ew("text_box",A.C7,"Text Box")
D.e1u=new C.ew("picture",A.u9,"Picture")
D.e1q=new C.ew("title",A.yC,"Title")
D.e1m=new C.ew("subtitle",T.amF,"Subtitle")
D.e1U=new C.ew("bullets",K.a0u,"Bullet List")
D.e1n=new C.ew("numbered",A.NU,"Numbered")
D.e1X=new C.ew("quote",A2.BX,"Quote")
D.e1z=new C.ew("citation",A.o9,"Citation")
D.e2_=new C.ew("date_stamp",Ag.a0j,"Date Stamp")
D.e1N=new C.ew("page_number",A.yB,"Page #")
D.e1R=new C.ew("header_bar",A.C9,"Header")
D.e1t=new C.ew("footer_bar",Ap.a0Z,"Footer")
D.e1i=new C.ew("divider",A.u8,"Divider")
D.e1e=new C.ew("highlight",A.a0A,"Highlight")
D.e1T=new C.ew("redact",A.ui,"Redact")
D.e1G=new C.ew("callout",A.BR,"Callout")
D.e21=new C.ew("checkboxes",K.al3,"Checklist")
D.e1D=new C.ew("table",A.a0X,"Table")
D.e1x=new C.ew("memo",K.a0K,"Memo")
D.e1H=new C.ew("letter",A.Gw,"Letter")
D.bGV=new B.a0(63259,"MaterialIcons",!0)
D.e18=new C.ew("agenda",D.bGV,"Agenda")
D.e1k=new C.ew("toc",Ay.ami,"Contents")
D.bHe=new B.a0(63406,"MaterialIcons",!1)
D.e1E=new C.ew("sig_line",D.bHe,"Sign Line")
D.e11=new C.ew("initial_line",A.js,"Initials")
D.e14=new C.ew("approved",A.lw,"APPROVED")
D.e1J=new C.ew("draft",A.p3,"DRAFT")
D.e1P=new C.ew("confidential",A.jt,"Confidential")
D.e1S=new C.ew("sticky",A.Oc,"Sticky Note")
D.e20=new C.ew("progress",A.amh,"Progress")
D.bIv=new B.a0(983507,"MaterialIcons",!1)
D.e1f=new C.ew("stars",D.bIv,"Star Rating")
D.e1_=new C.ew("equation",A.am7,"Equation")
D.e1a=new C.ew("timeline",A.Od,"Timeline")
D.e1y=new C.ew("two_col",A.a1_,"Two Columns")
D.e1c=new C.ew("compare",A1.a0m,"Compare")
D.e0Y=new C.ew("duplicate_el",A.fP,"Duplicate")
D.e25=new C.ew("delete_el",A.ea,"Delete")
D.e1W=new C.ew("bring_fwd",H.am1,"Bring Front")
D.e12=new C.ew("send_back",H.am0,"Send Back")
D.e1I=new C.ew("align_left",D.a0s,"Align L")
D.e1O=new C.ew("align_center",D.a0r,"Align C")
D.e24=new C.ew("align_right",D.a0t,"Align R")
D.e1r=new C.ew("word_count",A_.a_Y,"Word Count")
D.e1o=new C.ew("link_text",A.hq,"Link")
D.e1M=new C.ew("phone",A.iN,"Phone")
D.e1d=new C.ew("email",A.BU,"Email")
D.e26=new C.ew("qr_placeholder",A.jv,"QR Placeholder")
D.e17=new C.ew("rectangle",A3.vS,"Rectangle")
D.e1C=new C.ew("circle",A.rf,"Circle")
D.e13=new C.ew("arrow",A.j4,"Arrow")
D.e1V=new C.ew("line",A.u8,"Line")
D.e1g=new C.ew("triangle",A.a0k,"Triangle")
D.bH2=new B.a0(63318,"MaterialIcons",!1)
D.e1l=new C.ew("grayscale",D.bH2,"Grayscale")
D.e1v=new C.ew("brighten",K.aln,"Brighten")
D.e1A=new C.ew("flip_h",A.Gm,"Flip H")
D.bH9=new B.a0(63348,"MaterialIcons",!1)
D.e22=new C.ew("flip_v",D.bH9,"Flip V")
D.e1Q=new C.ew("cover_page",A.q5,"Cover Page")
D.e10=new C.ew("invoice",A.hd,"Invoice")
D.e1b=new C.ew("resume",A.my,"Resume")
D.e1p=new C.ew("minutes",A.oY,"Minutes")
D.e15=new C.ew("lab_report",A.O8,"Lab Report")
D.e16=new C.ew("rubric",A.u6,"Rubric")
D.e1B=new C.ew("flashcard_tool",W.GF,"Flashcard")
D.e1Y=new C.ew("quiz_tool",A.GB,"Quiz Block")
D.e1F=new C.ew("worksheet_tool",M.Gd,"Worksheet")
D.e1K=new C.ew("outline_share",A.Oa,"Share Outline")
D.e1Z=new C.ew("export_json",D.al9,"Export JSON")
D.e0Z=new C.ew("new_slide",D.a_X,"New Slide")
D.e1w=new C.ew("present",A.qb,"Present")
D.dbJ=w([D.e27,D.e1h,D.e23,D.e19,D.e1j,D.e1L,D.e1s,D.e1u,D.e1q,D.e1m,D.e1U,D.e1n,D.e1X,D.e1z,D.e2_,D.e1N,D.e1R,D.e1t,D.e1i,D.e1e,D.e1T,D.e1G,D.e21,D.e1D,D.e1x,D.e1H,D.e18,D.e1k,D.e1E,D.e11,D.e14,D.e1J,D.e1P,D.e1S,D.e20,D.e1f,D.e1_,D.e1a,D.e1y,D.e1c,D.e0Y,D.e25,D.e1W,D.e12,D.e1I,D.e1O,D.e24,D.e1r,D.e1o,D.e1M,D.e1d,D.e26,D.e17,D.e1C,D.e13,D.e1V,D.e1g,D.e1l,D.e1v,D.e1A,D.e22,D.e1Q,D.e10,D.e1b,D.e1p,D.e15,D.e16,D.e1B,D.e1Y,D.e1F,D.e1K,D.e1Z,D.e0Z,D.e1w],B.ax("O<ew>"))
D.dbT=w([A.cs,A.ak],x.O)
D.eom=new B.z(4286331629,4292552567)
D.eo9=new B.z(4280640491,4278630100)
D.eou=new B.z(4294538006,4292943176)
D.enw=new B.z(4278556265,4280640491)
D.d61=w([D.eom,D.eo9,D.eou,D.enw],x.n)
D.cuP=w([4294626325,4280472558,4294210230],x.t)
D.e0T=new C.nO("colorful","Colorful",A.np,D.d61,4294967295,3875536895,D.cuP,D.mN)
D.enY=new B.z(4279522093,4279657780)
D.eod=new B.z(4281750292,4283268111)
D.enz=new B.z(4278603323,4279203438)
D.eoe=new B.z(4282343954,4279599165)
D.cFN=w([D.enY,D.eod,D.enz,D.eoe],x.n)
D.cux=w([4288931381,4294829706,4287033260],x.t)
D.e0P=new C.nO("nature","Nature",A.GI,D.cFN,4294442727,3874290891,D.cux,D.df)
D.enS=new B.z(4279369771,4283178389)
D.enP=new B.z(4279179050,4286456526)
D.eo5=new B.z(4280163147,4290648157)
D.eno=new B.z(4278322711,4285343961)
D.cXr=w([D.enS,D.enP,D.eo5,D.eno],x.n)
D.cuL=w([4294210230,4280472558,4289170426],x.t)
D.e0N=new C.nO("vibe","Vibe",A.a0y,D.cXr,4294967295,3874869502,D.cuL,D.ux)
D.eoq=new B.z(4290007817,4292552567)
D.eok=new B.z(4286328082,4294286859)
D.eop=new B.z(4288485197,4294538006)
D.eoj=new B.z(4285343961,4293675161)
D.c0N=w([D.eoq,D.eok,D.eop,D.eoj],x.n)
D.cuQ=w([4294829706,4294967295,4284999929],x.t)
D.e0O=new C.nO("celebration","Celebration",A.ls,D.c0N,4294967295,4009752557,D.cuQ,D.qp)
D.enN=new B.z(4279179050,4280171146)
D.enR=new B.z(4279310375,4280232247)
D.enF=new B.z(4278916151,4280172719)
D.enO=new B.z(4279179050,4281549141)
D.cQl=w([D.enN,D.enR,D.enF,D.enO],x.n)
D.cus=w([4281908728,4294626325,4287931320],x.t)
D.e0S=new C.nO("professional","Professional",A.BP,D.cQl,4294967295,3872118241,D.cus,D.Sd)
D.enJ=new B.z(4278995566,4278413729)
D.enB=new B.z(4278727492,4279137424)
D.eo6=new B.z(4280171146,4278751666)
D.enK=new B.z(4278995566,4279590517)
D.cyC=w([D.enJ,D.enB,D.eo6,D.enK],x.n)
D.cuv=w([4286436348,4284410580,4294829706],x.t)
D.e0U=new C.nO("ocean","Ocean",K.a11,D.cyC,4294967295,3873501950,D.cuv,D.uy)
D.eol=new B.z(4286328082,4294538006)
D.eon=new B.z(4286781507,4294677052)
D.eoh=new B.z(4283178389,4294197086)
D.eoo=new B.z(4288295954,4294688548)
D.cMA=w([D.eol,D.eon,D.eoh,D.eoo],x.n)
D.cuR=w([4294829706,4294967295,4294747557],x.t)
D.e0V=new C.nO("sunset","Sunset",A.Of,D.cMA,4294967295,4009749973,D.cuR,D.df)
D.eoy=new B.z(4294967295,4294047225)
D.eot=new B.z(4294507260,4294967295)
D.eox=new B.z(4294967295,4293060848)
D.eos=new B.z(4294507260,4294047225)
D.d_x=w([D.eoy,D.eot,D.eox,D.eos],x.n)
D.cuq=w([4280640491,4279179050,4287931320],x.t)
D.e0R=new C.nO("minimal","Minimal",A3.vS,D.d_x,4279179050,4282865001,D.cuq,D.df)
D.enI=new B.z(4278979081,4280886564)
D.eo1=new B.z(4280031511,4278979081)
D.enQ=new B.z(4279308561,4281148438)
D.enH=new B.z(4278979081,4280031511)
D.ddT=w([D.enI,D.eo1,D.enQ,D.enH],x.n)
D.cuE=w([4292128567,4294829706,4289241758],x.t)
D.e0W=new C.nO("elegant","Elegant",A.m_,D.ddT,4294898631,3873957348,D.cuE,D.aGN)
D.eo3=new B.z(4280159034,4282058596)
D.enE=new B.z(4278916151,4280163147)
D.eob=new B.z(4281208933,4278916151)
D.enV=new B.z(4279502891,4283178389)
D.dkW=w([D.eo3,D.enE,D.eob,D.enV],x.n)
D.cuN=w([4294296657,4292128567,4291081725],x.t)
D.e0Q=new C.nO("royal","Royal Gold",A.j6,D.dkW,4294965222,3874084351,D.cuN,D.mN)
D.ent=new B.z(4278464302,4280163147)
D.enD=new B.z(4278916151,4279455306)
D.eo4=new B.z(4280163147,4283040846)
D.enq=new B.z(4278332450,4281413249)
D.d5I=w([D.ent,D.enD,D.eo4,D.enq],x.n)
D.cur=w([4281193663,4289170426,4294210230],x.t)
D.e0X=new C.nO("aurora","Aurora Glow",A.dY,D.d5I,4293983738,3869766608,D.cur,D.df)
D.wf=w([D.e0T,D.e0P,D.e0N,D.e0O,D.e0S,D.e0U,D.e0V,D.e0R,D.e0W,D.e0Q,D.e0X],B.ax("O<nO>"))
D.bh_=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.dcs=w([A.qV,D.bh_,A.qV],x.O)
D.dcJ=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dcN=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eDk=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.etw=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ey2=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.el3=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ewI=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.euY=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.ezh=new B.z("Surprise me","")
D.ddk=w([D.eDk,D.etw,D.ey2,D.el3,D.ewI,D.euY,D.ezh],x.L)
D.bae=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bkW=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.de6=w([A.c,D.bae,D.bkW],x.O)
D.dgc=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aGm=new C.kW(0,"heritageGold")
D.bfF=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hfF=w([D.bfF,V.aeP,A.ay],x.O)
D.dFj=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aGm,4294570461,4284234270,4292128567,D.jR)
D.aGn=new C.kW(1,"heritageCrimson")
D.b8I=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.be1=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bkM=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hfi=w([D.b8I,D.be1,D.bkM],x.O)
D.dFc=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aGn,4294635750,4285213214,4292912216,D.jR)
D.dgg=w([D.a5d,D.a5b,D.dFj,D.dFc,D.a56,D.a59],x.h)
D.dLc=new C.ry(1,"circuit")
D.dLF=new C.m8("neural","Neural Link","Robotic",D.dLc,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dLb=new C.ry(0,"grid")
D.dLC=new C.m8("signal","Signal Grid","Robotic",D.dLb,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dLh=new C.ry(2,"hexes")
D.dLn=new C.m8("core","Core Protocol","Robotic",D.dLh,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGK=new C.ry(11,"diagonal")
D.dLy=new C.m8("steel","Steel Tech","Robotic",D.aGK,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGL=new C.ry(3,"rings")
D.dLm=new C.m8("vault","Vault Gold","Robotic",D.aGL,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dLf=new C.ry(13,"leaves")
D.dLp=new C.m8("forest","Forest Morning","Nature",D.dLf,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGM=new C.ry(5,"waves")
D.dLw=new C.m8("ocean","Ocean Calm","Nature",D.aGM,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dLi=new C.ry(6,"sunset")
D.dLB=new C.m8("sunset","Sunset Glow","Nature",D.dLi,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dLj=new C.ry(7,"mountains")
D.dLo=new C.m8("mountain","Mountain Air","Nature",D.dLj,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dLk=new C.ry(8,"stars")
D.dLv=new C.m8("night","Night Sky","Nature",D.dLk,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5w=new C.ry(4,"orbs")
D.dLt=new C.m8("aurora","Aurora","Nature",D.a5w,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dLD=new C.m8("sand","Sand Dune","Nature",D.aGM,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dLl=new C.ry(9,"rays")
D.dLs=new C.m8("golden","Golden Hour","Warm",D.dLl,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dLq=new C.m8("royal","Royal Purple","Warm",D.aGK,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dLr=new C.m8("rose","Rose Petal","Warm",D.a5w,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dLe=new C.ry(12,"blocks")
D.dLu=new C.m8("electric","Electric Blue","Bold",D.dLe,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dLE=new C.m8("mint","Fresh Mint","Bold",D.a5w,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dLg=new C.ry(14,"minimal")
D.dLA=new C.m8("white","Clean White","Clean",D.dLg,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dLd=new C.ry(10,"frame")
D.dLx=new C.m8("midnight","Midnight Gold","Clean",D.dLd,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dLz=new C.m8("community","Community Green","Clean",D.aGL,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3L=w([D.dLF,D.dLC,D.dLn,D.dLy,D.dLm,D.dLp,D.dLw,D.dLB,D.dLo,D.dLv,D.dLt,D.dLD,D.dLs,D.dLq,D.dLr,D.dLu,D.dLE,D.dLA,D.dLx,D.dLz],B.ax("O<m8>"))
D.dgD=w([D.AY,A.vk,A.hN,A.c0],x.O)
D.dgV=w([D.afF,D.ji],x.O)
D.dh5=w(["pdf","docx","txt","md"],x.s)
D.eMF=new B.bh(-3,150,34)
D.eMG=new B.bh(-3,214,62)
D.eMH=new B.bh(-3,288,62)
D.dhU=w([D.eMF,D.eMG,D.eMH],B.ax("O<+(K,K,K)>"))
D.din=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dj_=w(["Write","Design","Print & fold"],x.s)
D.jS=new C.uO(2,"triangle")
D.D_=new C.uO(3,"arrow")
D.ft=new C.uO(4,"line")
D.jT=new C.uO(5,"parallelogram")
D.dj2=w([D.bh,D.eN,D.jS,D.D_,D.ft,D.jT,D.lb],x.m)
D.emt=new B.z(240,96)
D.ep8=new B.z(560,46)
D.dj7=w([D.emt,D.ep8],x.G)
D.hfQ=new C.xH(0,"classic")
D.dHb=new C.nK("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aGm,4294570461,4282000405,4284234270)
D.dHn=new C.nK("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aGn,4294635750,4281999378,4285213214)
D.dHc=new C.nK("elegant_navy","Umoja Mzuri",y.s,D.a5q,4294967035,4279378237,4290283019)
D.dHp=new C.nK("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGv,4294966515,4281016592,4289102906)
D.dHr=new C.nK("kente_sunset","Kente ya Jua",y.H,D.aGo,4294964964,4282000405,4279983648)
D.dH9=new C.nK("indigo_mudcloth","Nguo ya Indigo",y.n,D.aGp,4294439140,4279903102,4279903102)
D.dHe=new C.nK("adinkra_royal","Muhuri wa Adinkra",y.z,D.aGq,4294965484,4285218591,4287322667)
D.dHj=new C.nK("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGr,4294244340,4279196764,4279196764)
D.dHl=new C.nK("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGs,4294505710,4279970378,4291058750)
D.hfR=new C.xH(1,"ringsNdoa")
D.dHd=new C.nK("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rF,4294966259,4279378237,4291404327)
D.hfT=new C.xH(2,"coupleCards")
D.dHo=new C.nK("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rF,4294966259,4279378237,4291404327)
D.hfU=new C.xH(3,"kuhoweshaForm")
D.dHk=new C.nK("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CU,4294966519,4279378237,4291404327)
D.hfV=new C.xH(4,"mahariPande")
D.dHa=new C.nK("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rF,4294966259,4279904068,4291404327)
D.hfW=new C.xH(5,"familiaMti")
D.dHq=new C.nK("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aGt,4294966776,4280241466,4291404327)
D.hfX=new C.xH(6,"ndoaSafi")
D.dHh=new C.nK("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CU,4294966519,4279378237,4291404327)
D.hfY=new C.xH(7,"peteWide")
D.dHg=new C.nK("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rF,4294966259,4282001936,4291404327)
D.hfZ=new C.xH(8,"muhuriCrest")
D.dHf=new C.nK("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rF,4294966259,4279378237,4291404327)
D.hg_=new C.xH(9,"fomuWazi")
D.dHi=new C.nK("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CU,4294966519,4279904068,4291404327)
D.hfS=new C.xH(10,"upendoOrnate")
D.dHm=new C.nK("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aGu,4294965493,4286200650,4291404327)
D.R3=w([D.dHb,D.dHn,D.dHc,D.dHp,D.dHr,D.dH9,D.dHe,D.dHj,D.dHl,D.dHd,D.dHo,D.dHk,D.dHa,D.dHq,D.dHh,D.dHg,D.dHf,D.dHi,D.dHm],B.ax("O<nK>"))
D.CY=new C.arg(0,"landscape169")
D.oj=new C.arg(1,"portrait916")
D.djW=w([D.CY,D.oj],B.ax("O<arg>"))
D.az6=w([A.hN,A.bL,A.ct,A.i4,A.c],x.O)
D.uq=w([A.c0,A.il],x.O)
D.ely=new B.z(1000,"M")
D.eqy=new B.z(900,"CM")
D.ep2=new B.z(500,"D")
D.enj=new B.z(400,"CD")
D.elz=new B.z(100,"C")
D.eqz=new B.z(90,"XC")
D.ep3=new B.z(50,"L")
D.enk=new B.z(40,"XL")
D.elF=new B.z(10,"X")
D.eqL=new B.z(9,"IX")
D.epk=new B.z(5,"V")
D.eoO=new B.z(4,"IV")
D.em9=new B.z(1,"I")
D.dkC=w([D.ely,D.eqy,D.ep2,D.enj,D.elz,D.eqz,D.ep3,D.enk,D.elF,D.eqL,D.epk,D.eoO,D.em9],x.ek)
D.eNJ=new B.cx(["open",A.js,"Open & write","Keep writing this book"])
D.eO9=new B.cx(["print",A.uc,"Print as a book","Fold and staple it"])
D.dkM=w([D.eNJ,D.eO9],B.ax("O<+(m,a0,m,m)>"))
D.dlt=w([D.a5y,D.mN,D.Ic,D.Sd,D.df,D.Sc],x.i)
D.eE2=new B.z(-1,"Small")
D.eli=new B.z(0,"Normal")
D.em8=new B.z(1,"Big")
D.emJ=new B.z(2,"Huge")
D.dm0=w([D.eE2,D.eli,D.em8,D.emJ],x.ek)
D.dmr=w([49,65,89,38,83,89],x.t)
D.dmy=w([A.vk,A.hN,A.c0],x.O)
D.dn_=w([D.df,D.mN,D.ux,D.a5y,D.Ic,D.Sd],x.i)
D.aEo=new B.dt([0,D.M_,8,D.agX,12,D.agY],B.ax("dt<F,a3S>"))
D.e6W={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bkD=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cQw=w([A.bL,D.bkD],x.O)
D.dab=w([A.b3,A.bj],x.O)
D.d4P=w([A.bU,A.aM,A.bH],x.O)
D.dkN=w([A.cs,A.br],x.O)
D.cYl=w([A.b7,A.f0],x.O)
D.d7x=w([A.b6,A.fc],x.O)
D.bdK=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d6O=w([D.bdK,A.oM],x.O)
D.d1i=w([A.h5,A.xs],x.O)
D.cY9=w([A.bv,A.cb],x.O)
D.dpF=new B.bl(D.e6W,[D.cQw,I.apy,D.dab,D.d4P,D.dkN,D.cYl,D.d7x,D.d6O,D.d1i,D.cY9],B.ax("bl<m,ai<w>>"))
D.e62={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4p=new B.bl(D.e62,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bl<m,m>"))
D.a4w=new B.bl(A.i_,[],B.ax("bl<F,+icon3d,picture(m?,m?)>"))
D.dum=new F.N_(30,null)
D.dzr=new F.mu("Chapter 1","","","")
D.djH=w([D.dzr],x.B)
D.dzv=new F.ro("My Book","","",D.djH,E.aFG)
D.dzt=new F.uE("starry",null,null,null,null,"","","")
D.dzw=new F.ro("Dream Big","","",E.a3r,D.dzt)
D.dzu=new F.uE("story",null,null,null,null,"","","")
D.dzx=new F.ro("Little Lion","","",E.a3r,D.dzu)
D.dzs=new F.uE("vintage",null,null,null,null,"","","")
D.dzy=new F.ro("Our Story","","",E.a3r,D.dzs)
D.dCz=new C.EB("","NGMY","","")
D.dJQ=new C.zF("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e0M=new C.b1g(null,null,null,null)
D.e2u=new C.arl(null)
D.e2H=new C.arP(0,"smaller")
D.e2I=new C.arP(1,"bigger")
D.aH_=new C.arP(2,"fit")
D.e9N=new B.u(3,6)
D.e9X=new B.u(4,8)
D.edo=new B.D(E.ahM,T.acG,null)
D.eds=new B.D(A.YR,A.lO,null)
D.bJN=new B.ae(A.l4,16,A.bV,null,null,null)
D.edw=new B.D(A.iq,D.bJN,null)
D.b86=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.edI=new B.D(A.FR,D.b86,null)
D.bU7=new B.ae(A.cB,16,A.aA,null,null,null)
D.edM=new B.D(A.em,D.bU7,null)
D.fte=new B.y("Play",null,A.nF,null,null,null,null,null,null,null,null,null)
D.daq=w([U.ao2,A.rS,D.fte],x.p)
D.eSk=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.daq,null)
D.edP=new B.D(A.nk,D.eSk,null)
D.b8f=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.eYa=new B.a7(20,20,D.b8f,null)
D.edU=new B.D(A.iq,D.eYa,null)
D.fCl=new B.y("Seconds per slide",null,A.hv,null,null,null,null,null,null,null,null,null)
D.ee1=new B.D(A.bl,D.fCl,null)
D.efm=new C.a8J(2,"print")
D.efp=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eh1=new B.hg("/Annot")
D.eh3=new B.hg("/URI")
D.fnw=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ej5=new B.jq("share",48,D.fnw,null,B.ax("jq<m>"))
D.bU1=new B.ae(A.dY,14,A.eD,null,null,null)
D.eje=new B.cL(null,-2,-2,null,null,null,D.bU1,null)
D.cSC=w([H.afj,A.K],x.O)
D.c_A=new B.a9(A.a3,A.a8,A.x,D.cSC,null,null)
D.b0U=new B.o(null,null,null,null,null,D.c_A,A.n)
D.bpF=new B.kT(D.b0U,A.bf,null,null)
D.ejq=new B.cL(0,0,null,0,8,null,D.bpF,null)
D.dfc=w([A.hO,A.mn,A.cc],x.O)
D.ek4=new B.bS(A.A,0.5,A.x,null,0,D.dfc,null,null)
D.emC=new B.z(0.22,A.bj)
D.er5=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.etb=new B.z(0.5,A.hk)
D.eCt=new B.z(0.78,A.aV)
D.eNz=new B.cx([A.bu,0.22,0.7,2.6])
D.eNF=new B.cx([A.b7,0.36,1.2,1.3])
D.eNL=new B.cx([A.dO,0.28,0.2,0.4])
D.eNR=new B.cx([A.cA,0.05,0.3,0.35])
D.eNX=new B.cx([A.bv,0.28,0.9,0])
D.eO4=new B.cx([A.aF,-0.25,-0.15,0.45])
D.eOV=new B.cx([A.bU,0.42,1,4.1])
D.eS2=new B.a9H(9)
D.bKU=new B.ae(A.GK,28,A.bH,null,null,null)
D.fCU=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bzz=new B.bB(1,A.bg,D.fCU,null)
D.diq=w([D.bKU,A.at,D.bzz],x.p)
D.eSe=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.diq,null)
D.bL4=new B.ae(A.o9,16,A.c,null,null,null)
D.fEp=new B.y("Book",null,A.os,null,null,null,null,null,null,null,null,null)
D.dmx=w([D.bL4,A.eg,D.fEp],x.p)
D.eSm=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.dmx,null)
D.bRC=new B.ae(A.jt,10,A.c,null,null,null)
D.frj=new B.y("Pro",null,A.nC,null,null,null,null,null,null,null,null,null)
D.dav=w([D.bRC,A.qx,D.frj],x.p)
D.eSq=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.dav,null)
D.fCj=new B.y("Make a newspaper",null,A.Ub,null,null,null,null,null,null,null,null,null)
D.c0L=w([E.a1n,A.ab,D.fCj],x.p)
D.eSr=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.c0L,null)
D.bQ8=new B.ae(A.ls,18,A.bL,null,null,null)
D.fts=new B.y("Ending celebration",null,A.hK,null,null,null,null,null,null,null,null,null)
D.dhv=w([D.bQ8,A.bp,D.fts],x.p)
D.eSu=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dhv,null)
D.bRo=new B.ae(A.js,18,A.k3,null,null,null)
D.f7U=new B.H(!0,A.k3,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new B.y("Write",null,D.f7U,null,null,null,null,null,null,null,null,null)
D.d_l=w([D.bRo,A.ab,D.fEH],x.p)
D.eSB=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d_l,null)
D.frh=new B.y("Download picture",null,A.or,null,null,null,null,null,null,null,null,null)
D.bBH=new B.qq(A.e_,A.A,A.f,D.frh,null)
D.bBS=new B.dq(1,A.co,D.bBH,null)
D.daV=w([L.anT,A.ab,D.bBS],x.p)
D.eSC=new B.ci(A.aP,A.b9,A.j,A.m,null,A.p,null,0,D.daV,null)
D.bMS=new B.ae(A.GK,22,A.bH,null,null,null)
D.fAU=new B.y("NGMY NEWS",null,I.a8d,null,null,null,null,null,null,null,null,null)
D.cS2=w([D.bMS,A.ab,D.fAU],x.p)
D.eSL=new B.ci(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cS2,null)
D.eSX=new B.pe(!1,!1,null,T.W4,null,A.c_,null,null,null)
D.a7g=new B.jk([D.cn,D.df,D.ux,D.Ib,D.uy,D.aGQ],B.ax("jk<hF>"))
D.e8B={title:0,quote:1,closing:2,bio:3}
D.eU7=new B.dD(D.e8B,4,x.M)
D.e6l={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eUa=new B.dD(D.e6l,5,x.M)
D.e7T={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a7h=new B.dD(D.e7T,8,x.M)
D.e75={Design:0,Transitions:1,Insert:2}
D.eUf=new B.dD(D.e75,3,x.M)
D.hg7=new B.jk([D.a5z],B.ax("jk<w5>"))
D.e7e={float3d:0,drift:1,pulse:2}
D.eUj=new B.dD(D.e7e,3,x.M)
D.aOb=new B.jk([D.I8,D.I9,D.Ia],B.ax("jk<my>"))
D.e6j={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aOe=new B.dD(D.e6j,14,x.M)
D.hg8=new B.dD(A.i_,0,B.ax("dD<w5>"))
D.e7b={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Ti=new B.dD(D.e7b,4,x.M)
D.e6b={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aOh=new B.dD(D.e6b,30,x.M)
D.e7k={circle:0,triangle:1,hexagon:2,diamond:3}
D.eUG=new B.dD(D.e7k,4,x.M)
D.eX5=new B.as(390,844)
D.eXV=new B.a7(20,20,A.KP,null)
D.aP4=new B.a7(null,2.5,null,null)
D.eY4=new B.a7(18,18,A.KP,null)
D.bRs=new B.ae(A.j6,19,A.c,null,null,null)
D.eYf=new B.a7(38,38,D.bRs,null)
D.bPH=new B.ae(A.yI,22,A.c,null,null,null)
D.eYh=new B.a7(40,40,D.bPH,null)
D.eYQ=new B.hQ(2,10,10,1.15,null)
D.aPc=new B.hQ(2,16,14,0.62,null)
D.bxD=new B.R(32,30,32,40)
D.b9C=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bKR=new B.ae(A.q5,56,D.b9C,null,null,null)
D.ag8=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f9T=new B.H(!0,D.ag8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Your books will live here.",null,D.f9T,null,A.L,null,null,null,null,null,null,null)
D.d2e=w([D.bKR,A.R,D.fxV],x.p)
D.boD=new B.fn(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d2e,null)
D.ee_=new B.D(D.bxD,D.boD,null)
D.eZa=new B.mb(D.ee_,null)
D.fxS=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eZs=new B.b1(D.fxS,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fvZ=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new B.b1(D.fvZ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAY=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new B.b1(D.fAY,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBw=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eZR=new B.b1(D.fBw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fuF=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new B.b1(D.fuF,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fIF=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f_m=new B.b1(D.fIF,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFK=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f_x=new B.b1(D.fFK,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBE=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f0e=new B.b1(D.fBE,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fpy=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new B.b1(D.fpy,null,null,null,null,null,null,null,A.iA,null,null,null,null,A.pV,!1,null,null,null,A.r,null)
D.frq=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f0N=new B.b1(D.frq,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fxy=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f0P=new B.b1(D.fxy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fxe=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new B.b1(D.fxe,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDH=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new B.b1(D.fDH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.flJ=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f1_=new B.b1(D.flJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fsA=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new B.b1(D.fsA,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fHm=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new B.b1(D.fHm,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGU=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new B.b1(D.fGU,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fkJ=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f1u=new B.b1(D.fkJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fCP=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f1D=new B.b1(D.fCP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGu=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f1S=new B.b1(D.fGu,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGl=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f1U=new B.b1(D.fGl,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fkB=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f2_=new B.b1(D.fkB,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fox=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f2r=new B.b1(D.fox,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFx=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f2D=new B.b1(D.fFx,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fok=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f2S=new B.b1(D.fok,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bgI=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cQK=w([A.i4,A.oM,D.bgI,D.ad6,A.i4],x.O)
D.f3f=new B.fZ(A.A,0,6.283185307179586,A.x,D.cQK,null,null)
D.cZA=w([A.bL,A.c0,A.hN,D.AY,A.bL],x.O)
D.aPM=new B.fZ(A.A,0,6.283185307179586,A.x,D.cZA,null,null)
D.dcH=w([A.bU,A.bu,A.b7,A.b_,A.bH,A.bU],x.O)
D.f3k=new B.fZ(A.A,0,6.283185307179586,A.x,D.dcH,null,null)
D.cSQ=w([A.pR,A.oN,A.xq,A.i4,A.pR],x.O)
D.f3l=new B.fZ(A.A,0,6.283185307179586,A.x,D.cSQ,null,null)
D.dcB=w([A.aQ,A.bK,A.aL,A.ak,A.aQ],x.O)
D.f3m=new B.fZ(A.A,0,6.283185307179586,A.x,D.dcB,null,null)
D.dks=w([A.bv,A.b7,A.bu,A.bU,A.bv],x.O)
D.f3o=new B.fZ(A.A,0,6.283185307179586,A.x,D.dks,null,null)
D.bgZ=new B.w(1,0,1,1,A.t)
D.baN=new B.w(1,1,0,1,A.t)
D.dgv=w([A.EH,A.af1,I.adU,D.bgZ,I.aek,D.baN,A.EH],x.O)
D.f3p=new B.fZ(A.A,0,6.283185307179586,A.x,D.dgv,null,null)
D.f3E=new C.avS(2,"immersiveSticky")
D.f3F=new C.avS(3,"edgeToEdge")
D.f3G=new C.avS(4,"manual")
D.f65=new B.H(!0,A.oH,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQj=new B.H(!0,A.f1,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6E=new B.H(!0,E.n7,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8a=new B.H(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f99=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9j=new B.H(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9E=new B.H(!0,A.eD,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbb=new B.H(!0,A.jm,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbp=new B.rK(!0,A.Iv,null,null,null,null,A.du,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbT=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new B.H(!0,A.jk,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcU=new B.H(!0,A.aA,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.efs=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fcY=new B.rK(!0,D.efs,null,null,null,null,A.du,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.af8=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aR2=new B.H(!0,D.af8,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new B.H(!0,D.ag8,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd6=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR4=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdJ=new B.rK(!0,A.pe,null,null,null,null,A.du,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe0=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fex=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fez=new B.H(!0,D.af8,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jw=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff1=new B.H(!0,A.c0,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffa=new B.H(!0,A.bK,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffd=new B.H(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awM,null,null,null)
D.ffx=new B.H(!0,A.c8,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffY=new B.H(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new B.H(!0,A.aS,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new B.H(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRG=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRI=new B.H(!0,A.bV,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bme=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fiB=new B.H(!0,D.bme,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRP=new B.H(!0,E.n7,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.H(!0,A.bK,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new B.H(!0,O.ln,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc7=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new B.y("NEW",null,D.fc7,null,null,null,null,null,null,null,null,null)
D.fkE=new B.y("Hati ya Kuhowesha",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fl5=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.flp=new B.y("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fm8=new B.y("Big quote mark",null,A.iU,null,null,null,null,null,null,null,null,null)
D.fmb=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fmm=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fmQ=new B.y("How many slides?",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fnn=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f7X=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnJ=new B.y("Luxury FX",null,D.f7X,null,null,null,null,null,null,null,null,null)
D.fo3=new B.y("Font",null,A.rX,null,null,null,null,null,null,null,null,null)
D.foe=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fol=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fi9=new B.H(!0,A.bK,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fou=new B.y("Example  GA847",null,D.fi9,null,null,null,null,null,null,null,null,null)
D.foU=new B.y("Design shapes",null,A.iU,null,null,null,null,null,null,null,null,null)
D.fp4=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new B.y("Non-stop (loop)",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fpm=new B.y("Hati ya Kuhoweya",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fpF=new B.y("Photo studio",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fq7=new B.y("Add your picture",null,A.km,null,null,null,null,null,null,null,null,null)
D.fbq=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq8=new B.y("Enter document code",null,D.fbq,null,A.L,null,null,null,null,null,null,null)
D.fq9=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fqe=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f9_=new B.H(!0,E.n7,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqz=new B.y("Delete this book?",null,D.f9_,null,A.L,null,null,null,null,null,null,null)
D.fdz=new B.H(!0,E.n7,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frs=new B.y("Your library",null,D.fdz,null,null,null,null,null,null,null,null,null)
D.fry=new B.y("Delete",null,A.aQX,null,null,null,null,null,null,null,null,null)
D.frB=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.DG,null,null,null,null,null,null,null,null,null)
D.frM=new B.y("Element flies in",null,A.aR8,null,null,null,null,null,null,null,null,null)
D.Uk=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fst=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fsx=new B.y("Cancel",null,E.aRi,null,null,null,null,null,null,null,null,null)
D.fsz=new B.y("The lines and circles that come with the design",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fh_=new B.H(!0,A.fX,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new B.y("DOCUMENT CODE",null,D.fh_,null,null,null,null,null,null,null,null,null)
D.ftO=new B.y("Quotes",null,G.a8Q,null,null,null,null,null,null,null,null,null)
D.faQ=new B.H(!0,O.ln,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftW=new B.y("Add a picture",null,D.faQ,null,null,null,null,null,null,null,null,null)
D.fu3=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8w,null,A.L,null,null,null,null,null,null,null)
D.fu7=new B.y("Look & feel",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fuc=new B.y("Rings",null,A.hK,null,null,null,null,null,null,null,null,null)
D.fui=new B.y("W",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fus=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fuL=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.U7,null,A.L,null,null,null,null,null,null,null)
D.fuN=new B.y("Write your book",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fvw=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fvL=new B.y("Malipo ya Awamu ya Mahari",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fbf=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw_=new B.y("Create with AI",null,D.fbf,null,A.L,null,null,null,null,null,null,null)
D.fwt=new B.y("Apply look",null,A.hK,null,null,null,null,null,null,null,null,null)
D.fbY=new B.H(!0,A.ek,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxg=new B.y("Type your presentation below",null,D.fbY,null,A.L,null,null,null,null,null,null,null)
D.fxj=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aRT,null,A.L,null,null,null,null,null,null,null)
D.fxl=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f6V=new B.H(!0,A.cl,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxs=new B.y("Done",null,D.f6V,null,null,null,null,null,null,null,null,null)
D.fxN=new B.y("Delete",null,A.nE,null,null,null,null,null,null,null,null,null)
D.fxX=new B.y("Hati ya Kiapo cha Uongozi",null,A.fu,null,null,null,null,null,null,null,null,null)
D.faa=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.faa,null,A.L,null,null,null,null,null,null,null)
D.fzc=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fzi=new B.y("Layout",null,A.Ud,null,null,null,null,null,null,null,null,null)
D.fzW=new B.y("Print",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fA1=new B.y("X",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fAB=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.Jr,null,null,null,null,null,null,null,null,null)
D.fBa=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fBo=new B.y("Hati ya Kuhowa",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fBq=new B.y("Choose a class template",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fBs=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fBy=new B.y("Download the newspaper picture",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fBL=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new B.y("Done",null,A.aRF,null,null,null,null,null,null,null,null,null)
D.fC1=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fC2=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fCh=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.uU,null,null,null,null,null,null,null,null,null)
D.fDe=new B.y("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fDf=new B.y("What would you like to do?",null,D.aR2,null,null,null,null,null,null,null,null,null)
D.fDj=new B.y("Delete",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fDP=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fDT=new B.y("Hati (Documents)",null,A.fu,null,null,null,null,null,null,null,null,null)
D.fE5=new B.y("Done",null,A.lg,null,null,null,null,null,null,null,null,null)
D.fhZ=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEa=new B.y("Delete presentation?",null,D.fhZ,null,A.L,null,null,null,null,null,null,null)
D.fEt=new B.y("After the last slide it starts again from the first",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fEF=new B.y("\ud83c\udf33",null,A.Jp,null,A.L,null,null,null,null,null,null,null)
D.fEX=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fF3=new B.y("Transfer document",null,A.ov,null,null,null,null,null,null,null,null,null)
D.fFe=new B.y("Add to the slides",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fFB=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.y("Make a book",null,K.aQB,null,null,null,null,null,null,null,null,null)
D.fFU=new B.y("Books",null,A.cD,null,null,null,null,null,null,null,null,null)
D.faJ=new B.H(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFV=new B.y("Keep this page open until it finishes.",null,D.faJ,null,null,null,null,null,null,null,null,null)
D.fFY=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fG2=new B.y("LANGUAGE",null,H.zW,null,null,null,null,null,null,null,null,null)
D.fG9=new B.y("Use this ending",null,A.cD,null,null,null,null,null,null,null,null,null)
D.fGh=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fGj=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fGA=new B.y("Delete from the database?",null,A.km,null,null,null,null,null,null,null,null,null)
D.fGB=new B.y("H",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fH_=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fHr=new B.y("Cover",null,D.aRP,null,null,null,null,null,null,null,null,null)
D.fHv=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fHw=new B.y("Each page becomes its own slide you can present",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fHS=new B.y("Y",null,A.rX,null,null,null,null,null,null,null,null,null)
D.fI2=new B.y("Crop the picture",null,A.lg,null,null,null,null,null,null,null,null,null)
D.fI9=new B.y("Edit text",null,A.Jq,null,null,null,null,null,null,null,null,null)
D.fKr=B.dV("a8v")
D.DS=new C.axa(0,"none")
D.aVi=new C.axa(1,"zipCrypto")
D.aVj=new C.axa(2,"aes")
D.h4z=new F.Ps("","",null)
D.h5F=new C.bct(null)
D.h6M=new C.ZH(null)
D.h8P=new C.adq(null)
D.h8R=new C.aEm(null)
D.hbC=new C.a_W(null)
D.hbT=new C.a0s(null)
D.hcb=new C.bu7(null)})();(function staticFields(){$.hi6=null
$.hi7=null
$.hi8=null
$.hi9=null
$.h_V=B.vb("_lastQuoRemDigits")
$.h_W=B.vb("_lastQuoRemUsed")
$.axw=B.vb("_lastRemUsed")
$.h_X=B.vb("_lastRem_nsh")
$.qc=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7i=B.U(x.N,x.I)
$.fYp=!1
$.hmW=B.U(B.ax("kW"),x.N)
$.hn8=B.U(B.ax("kW"),x.E)
$.hl9=!1
$.bzK="q"
$.Qp=0
$.CM=B.U(x.N,B.ax("ai<zH>"))
$.hlv=!1
$.h1w=!1
$.hrO=null
$.hW5=B.U(x.N,B.ax("aA<m?>"))
$.Ku=""
$.j2=0
$.heT=function(){var w=x.N
return B.U(w,w)}()
$.heS=B.U(x.N,x.R)
$.h1R=!1
$.ag8=B.U(x.N,x.E)
$.h2F=0
$.bky=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iku","D6",()=>C.b9Z(0))
w($,"iks","a2G",()=>C.b9Z(1))
w($,"ikt","hvv",()=>C.b9Z(2))
w($,"ikr","h6B",()=>$.a2G().v4(0))
w($,"ikp","hvt",()=>C.b9Z(1e4))
w($,"ikq","hvu",()=>B.Eh(8))
w($,"igf","htv",()=>B.Eh(0))
w($,"ign","htz",()=>B.Eh(0))
w($,"igm","hty",()=>B.bZ0(0))
w($,"iod","hxw",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4p.gdM(D.a4p),v=v.gaf(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ioE","bEf",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mW(new C.fJ5(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mW(new C.fJ6(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fJ7(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mW(new C.fJi(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mW(new C.fJn(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fJo(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mW(new C.fJp(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mW(new C.fJq(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mW(new C.fJr(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fJs(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mW(new C.fJt(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mW(new C.fJ8(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mW(new C.fJ9(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mW(new C.fJa(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fJb(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mW(new C.fJc(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mW(new C.fJd(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mW(new C.fJe(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mW(new C.fJf(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mW(new C.fJg(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mW(new C.fJh(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mW(new C.fJj(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mW(new C.fJk(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mW(new C.fJl(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mW(new C.fJm(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<EK>"))})
w($,"iog","hxy",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["03TEYSyRACHHO3hlCwV+TONhuFo="]=a.current})($__dart_deferred_initializers__);