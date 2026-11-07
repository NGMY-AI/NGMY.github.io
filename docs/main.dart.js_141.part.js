((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A7,Ai,Aj,U,A8,Ak,Al,C={
tU(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fYm(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JM(d){var w
if(d===0)return $.D1()
if(d===1)return $.a2C()
if(d===2)return $.ht_()
if(Math.abs(d)<4294967296)return C.b9Q(A.o.O(d))
w=C.hNP(d)
return w},
b9Q(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tU(4,w)
return new C.nY(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tU(1,w)
return new C.nY(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tU(2,w)
return new C.nY(v===0?!1:s,w,v)}v=A.o.an(A.o.gakc(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tU(v,w)
return new C.nY(v===0?!1:s,w,v)},
hNP(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D1()
w=$.hsZ()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lc(A.aH.gaP(w))
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
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dZ(0,s):q
return p},
fYn(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hfE(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dZ(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fI(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dZ(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hfz(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fYn(d,e,s,g)
w=e+s+1
C.hfE(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hNS(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dZ(1,r)-1,o=A.o.fI(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dZ(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fI(u,r)}w&2&&B.aj(g)
g[n]=o},
cGR(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hNQ(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9R(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hfF(d,e,f,g,h,i){var w,v,u,t,s,r
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
hNR(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e6((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
cGS:function cGS(){},
cGT:function cGT(){},
cGU:function cGU(d,e){this.a=d
this.b=e},
cGV:function cGV(d){this.a=d},
aRg:function aRg(d,e){this.a=d
this.b=e},
h5r(d,e,f){var w=new C.RS(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
RS:function RS(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3N:function a3N(d,e){this.a=d
this.b=e},
bHk:function bHk(d){this.a=d
this.c=this.b=0},
hwd(){return new C.bFF()},
bFF:function bFF(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cz0:function cz0(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hNx(d,e,f){var w,v,u,t,s
if(d.gal(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gcXE(d)))
v=f*2+2
u=C.hdg(C.hdi(),64)
t=new C.ciN(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ciO(e,1000,v)
s=new Uint8Array(v)
return A.aH.du(s,0,t.cL1(w,0,s,0))},
cyZ:function cyZ(d,e){this.c=d
this.d=e},
axf:function axf(d,e){this.a=d
this.b=e},
cz1:function cz1(d,e,f,g){var _=this
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
b8z:function b8z(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cz_:function cz_(){this.a=$},
hf3(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hvX(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEf:function bEf(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h35(d,e){e&=31
return(d&$.qe[e])<<e>>>0},
nt(d,e){e&=31
return(d>>>e|C.h35(d,32-e))>>>0},
hdh(d){var w,v=new C.asW()
if(B.iJ(d))v.aKm(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hdi(){var w=C.hdh(0),v=new Uint8Array(4),u=x.S
u=new C.ciP(w,v,A.En,5,B.c3(5,0,!1,u),B.c3(80,0,!1,u))
u.jO(0)
return u},
hdg(d,e){var w=new C.ciL(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ciK:function ciK(){},
ciO:function ciO(d,e,f){this.a=d
this.b=e
this.c=f},
ciI:function ciI(){},
asV:function asV(d){this.a=d},
ciN:function ciN(d){this.a=$
this.b=d
this.c=$},
ciJ:function ciJ(){},
ciH:function ciH(){},
asW:function asW(){this.b=this.a=$},
ciM:function ciM(){},
ciP:function ciP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ciL:function ciL(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ciG:function ciG(){},
ciF:function ciF(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bOQ:function bOQ(){},
bOR:function bOR(d){this.a=d},
hQN(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
ba5:function ba5(){},
csP:function csP(){},
bPJ:function bPJ(d,e){this.a=d
this.b=!1
this.c=e},
bPK:function bPK(){},
hZH(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avU(d){var w=0,v=B.j(x.H),u
var $async$avU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f4h?2:4
break
case 2:w=5
return B.b(A.kk.h_("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$avU)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kk.h_("SystemChrome.setEnabledSystemUIOverlays",C.hZH(null),u),$async$avU)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avU,v)},
avX:function avX(d,e){this.a=d
this.b=e},
a8r:function a8r(d){this.a=d},
fUg(d,e){return new C.aVL(e,d,null)},
aVL:function aVL(d,e,f){this.e=d
this.c=e
this.a=f},
aAP:function aAP(d,e,f,g,h){var _=this
_.ah=d
_.aj=e
_.a9$=f
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
i1q(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.ftC(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
ftC:function ftC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anF(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$anF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agT("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$anF)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cE(t,new C.c_F(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a5(t).k("J.E"))}else r=B.a([],x.d)
A.d.aW(r,new C.c_G())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anF,v)},
anH(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anF(),$async$anH)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.T(Date.now(),0,!1).a7().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.ns("ngmy_menu_lib_v1_zzslide_"+B.aM(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$anH)
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
return B.b(B.ns("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.T(Date.now(),0,!1).a7().ac()],t,q),null),$async$anH)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anH,v)},
c_H(d){return C.hBO(d)},
hBO(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c_H=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agT("ngmy_menu_lib_v1_zzslide_"+B.aM(d,o,""),A.hP),$async$c_H)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VX(B.a2(q,x.N,x.z))
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
return B.i($async$c_H,v)},
anG(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anF(),$async$anG)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nu(r,new C.c_I(d))
w=4
return B.b(B.ns("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.T(Date.now(),0,!1).a7().ac()],x.N,x.z),null),$async$anG)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPj("ngmy_menu_lib_v1_zzslide_"+B.aM(d,s,"")),$async$anG)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anG,v)},
c_F:function c_F(){},
c_G:function c_G(){},
c_I:function c_I(d){this.a=d},
ibn(d,e,f){return B.bR(A.K,null,new C.fJT(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fJT:function fJT(d,e,f){this.a=d
this.b=e
this.c=f},
a0R:function a0R(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJ8:function aJ8(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f6g:function f6g(d,e){this.a=d
this.b=e},
f6k:function f6k(d){this.a=d},
f6l:function f6l(d){this.a=d},
f6m:function f6m(d,e,f){this.a=d
this.b=e
this.c=f},
f6h:function f6h(d){this.a=d},
f6i:function f6i(d){this.a=d},
f6j:function f6j(d,e){this.a=d
this.b=e},
f6b:function f6b(d){this.a=d},
f69:function f69(d){this.a=d},
f6a:function f6a(d){this.a=d},
f6c:function f6c(d){this.a=d},
f6d:function f6d(d){this.a=d},
f6q:function f6q(d,e){this.a=d
this.b=e},
f6p:function f6p(d,e){this.a=d
this.b=e},
f6f:function f6f(d,e,f){this.a=d
this.b=e
this.c=f},
f6e:function f6e(d,e,f){this.a=d
this.b=e
this.c=f},
f6n:function f6n(d,e){this.a=d
this.b=e},
f6o:function f6o(d,e){this.a=d
this.b=e},
f6t:function f6t(d){this.a=d},
f6u:function f6u(d,e){this.a=d
this.b=e},
f6s:function f6s(d,e){this.a=d
this.b=e},
f6r:function f6r(){},
hi4(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aM(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cE(v,new C.fdH(),v.$ti.k("J.E"),x.ea)
u=B.a5(v).k("Z<J.E>")
v=B.C(new B.Z(v,new C.fdI(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1Q(d){return C.i2G(d)},
i2G(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1Q=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fws(n)
t=4
j=m
i=C
w=7
return B.b(B.a2p("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1Q)
case 7:j.$1(i.hi4(f))
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
return B.b(B.az(),$async$a1Q)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hi4(B.aU(J.r(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fdQ(d),$async$a1Q)
case 13:p=j.C(new i.Z(h,new g.fwq(f),o),o.k("J.E"))
A.d.aW(p,new C.fwr())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1Q,v)},
aht(d,e){return C.ib2(d,e)},
ib2(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aht=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fJn(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahl("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aht)
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
return B.b(B.az(),$async$aht)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aht)
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
return B.i($async$aht,v)},
fdQ(d){return C.hS8(d)},
hS8(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fdQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fdQ)
case 7:r=f
q=r.ti("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.jV(q,B.S(q).c)
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
return B.i($async$fdQ,v)},
agi(d,e){return C.i1i(d,e)},
i1i(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agi=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agi)
case 6:s=g
r=B.aY(x.N)
q=s.ti("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h4(r,q)
J.ca(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a5(q).k("co.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$agi)
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
return B.b(C.a1Q(d),$async$agi)
case 8:n=g
J.nu(n,new C.ftg(e))
w=9
return B.b(C.aht(d,n),$async$agi)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agi,v)},
ibs(d,e){return B.a3(d,!1).cg(B.e_(new C.fKe(e),!0,null,x.H))},
hNU(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d8(w.d,new C.cId())},
op:function op(d,e,f){this.a=d
this.b=e
this.c=f},
fdH:function fdH(){},
fdI:function fdI(){},
fws:function fws(d){this.a=d},
fwq:function fwq(d){this.a=d},
fwr:function fwr(){},
fJn:function fJn(){},
ftg:function ftg(d){this.a=d},
fKe:function fKe(d){this.a=d},
YA:function YA(d,e){this.c=d
this.a=e},
axN:function axN(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cId:function cId(){},
cIf:function cIf(d,e){this.a=d
this.b=e},
cIi:function cIi(d){this.a=d},
cIj:function cIj(d){this.a=d},
cIh:function cIh(){},
cIk:function cIk(d,e){this.a=d
this.b=e},
cIg:function cIg(d){this.a=d},
cIl:function cIl(){},
cIe:function cIe(d,e){this.a=d
this.b=e},
cIm:function cIm(){},
cI9:function cI9(d){this.a=d},
cI7:function cI7(d){this.a=d},
cI8:function cI8(d){this.a=d},
cIa:function cIa(d,e){this.a=d
this.b=e},
cI6:function cI6(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI3:function cI3(d,e){this.a=d
this.b=e},
cI4:function cI4(d){this.a=d},
cIc:function cIc(){},
cIb:function cIb(d){this.a=d},
cI2:function cI2(d,e){this.a=d
this.b=e},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI0:function cI0(d,e){this.a=d
this.b=e},
cIn:function cIn(d){this.a=d},
Yy:function Yy(d,e,f){this.c=d
this.d=e
this.a=f},
aF_:function aF_(d,e,f){this.a=d
this.b=e
this.c=f},
axJ:function axJ(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cHu:function cHu(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHw:function cHw(d,e,f){this.a=d
this.b=e
this.c=f},
cHE:function cHE(){},
cHF:function cHF(d){this.a=d},
cHx:function cHx(d,e,f){this.a=d
this.b=e
this.c=f},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHz:function cHz(d,e){this.a=d
this.b=e},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHB:function cHB(d,e){this.a=d
this.b=e},
cHy:function cHy(d){this.a=d},
cHD:function cHD(d){this.a=d},
cHC:function cHC(d,e){this.a=d
this.b=e},
cHK:function cHK(d){this.a=d},
cHG:function cHG(d,e){this.a=d
this.b=e},
cHH:function cHH(d,e){this.a=d
this.b=e},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHJ:function cHJ(d,e){this.a=d
this.b=e},
axL:function axL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i50(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bK(new C.fAY(),x.H).eU(new C.fAZ())}}else if(s)C.hjy()}catch(t){}},
hjy(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eU(new C.fhW())}catch(u){}},
i53(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fAY:function fAY(){},
fAZ:function fAZ(){},
fhW:function fhW(){},
hob(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.eh(v,w,"").split(":"))},
ho8(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lc)return null
return A.a.b2(w,14)},
h1N(d){var w
if(d.b!==D.lc)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
i5t(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hoc(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i5o(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aM(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aM(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l4(0,f)
t=x.N
u=B.cE(u,new C.fBX(),B.a5(u).k("J.E"),t)
s=B.C(u,B.a5(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l4(0,f),u=new B.JL(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ry(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ry(A.a.b2(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i5m(d,e){var w,v,u,t,s,r=B.a5(e).k("cr<1>"),q=B.C(new B.cr(e,r),r.k("J.E"))
A.d.aW(q,new C.fBW())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQf(w,u,s,0)}return w},
i5q(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4w:$.hv0(),s=x.N,r=B.U(s,s)
for(s=t.gdR(t),s=s.gae(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
ho9(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
feJ(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hob(q)===e)return q}return null},
i5r(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.H1).a},
i5s(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ae8(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ae8(0,0,0)
v=C.feJ(b6,b0)
u=C.feJ(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i5q(b2,C.i5o(C.ho9(b2),v.r))
if(s.a!==0){u.r=C.i5m(C.ho9(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hob(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.em(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.feJ(b6,n)
i=C.feJ(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.h1N(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.ho8(a8)===a0||C.h1N(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.R6(a1,new C.fC2(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eI(""+1000*a6+"_"+a9,D.lc,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aE,4279310375,A.bh,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.T(Date.now(),0,!1)
return new B.ae8(k,t,e)},
i5n(d){var w=C.i5r(d)
if(d.w==="hati_kuhowa")return C.hnw("",w)
return C.hnv("",w)},
fBX:function fBX(){},
fBW:function fBW(){},
fC2:function fC2(d){this.a=d},
hjh(){var w=new B.T(Date.now(),0,!1),v=new C.fgZ()
return B.u(v.$1(B.bT(w)))+"/"+B.u(v.$1(B.bI(w)))+"/"+B.bB(w)},
h1W(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fCV(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lc&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hoq(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fCV(d)
w=B.bi(u)
if(w==null)return!C.fCV(d)
return new B.T(Date.now(),0,!1).a7().d_(w.a7().bS(18e9))},
i68(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.T(Date.now(),0,!1).a7().ac()},
hFR(d){return A.a.i(d).toLowerCase()},
apX(d){return C.hFT(d)},
hFT(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$apX)
case 7:r=f
p=r.ti("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.i9F(),B.S(o).k("M<1,n>")).c0(0,new C.caX())
o=B.de(o,o.$ti.k("J.E"))
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
return B.i($async$apX,v)},
apW(d,e){return C.hFS(d,e)},
hFS(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apW=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apX(d),$async$apW)
case 3:r=g
if(!J.ca(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apW)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qn(r)),$async$apW)
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
return B.i($async$apW,v)},
apY(d,e){return C.hFU(d,e)},
hFU(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apY=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apX(d),$async$apY)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apY)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qn(r)),$async$apY)
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
return B.i($async$apY,v)},
Vk(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vk=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fVM&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Vk)
case 7:r=a7
q=B.aU(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aM(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jP(p),d=d.gae(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VX(B.a2(f.a(n.b),e,a0)))}$.a7e=o}}t=2
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
return B.b(B.c5(),$async$Vk)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u7("civic_hati_kiapo_uongozi",null,A.ek),$async$Vk)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jP(f.a(J.r(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VX(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a5(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a7e.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a7e.n(0,i.a,i.b)}w=20
return B.b(C.apZ(),$async$Vk)
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
case 16:case 9:$.fVM=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vk,v)},
apZ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apZ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$apZ)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7e,o=new B.cI(o,B.a5(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apZ)
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
return B.i($async$apZ,v)},
b_g(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vk(!1),$async$b_g)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7e.h(0,t)
r=s==null?null:s.hH()
if(r==null){u=null
w=1
break}u=C.bBM(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_g,v)},
a7f(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7f=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.T(Date.now(),0,!1)
o=a1.hH()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7e.n(0,d,o)
$.fVM=!0
w=3
return B.b(C.apZ(),$async$a7f)
case 3:w=4
return B.b(B.c5(),$async$a7f)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7e,n=new B.cI(n,B.a5(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.ns("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.T(Date.now(),0,!1).a7().ac()],e,x.z),null),$async$a7f)
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
return B.i($async$a7f,v)},
aq_(d){var w=0,v=B.j(x.T),u,t,s
var $async$aq_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a5O(A.eI),$async$aq_)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$aq_)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_f(t,d),$async$aq_)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq_,v)},
b_f(d,e){return C.hFV(d,e)},
hFV(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_f=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c5(),$async$b_f)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aM(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ik("media")
w=8
return B.b(p.x6(q,new Uint8Array(B.cf(d)),D.bCI),$async$b_f)
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
return B.i($async$b_f,v)},
KA(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.eq(e,!1,f,A.aE,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
fgq(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.eq(A.bh,!1,4279310375,A.aE,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f6,j,k,l)},
fZS(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eq(h,!1,j,A.aE,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
ffZ(d,e,f,g){return C.fgq(0,0.002,D.fw,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
fZT(d,e,f,g,h,i,j,k){var w=C.cD()
return C.eq(A.qx,!1,j,A.aE,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
hjg(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.eh(v,w,"").split(":"))},
bBM(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gH(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hjg(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lc&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hH()}h=C.h1r(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BK(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hjg(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lc&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fAW(a2))}else A.d.bs(a1.z,new C.fAX())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fCV(a0))a0.ax=a6.f.a7().ac()
return a0},
h1r(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fDI(D.a5x),l=C.cD(),k=x.u,j=B.a([C.eq(A.bh,!1,s,A.aE,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cD(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lD,1,0,0)],k),i=B.a([],k)
i.push(C.KA("NGMY",A.L,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KA("TAREHE:",A.bh,o,16,A.bp,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fZS("tarehe",0.8059999999999999,0.026,0.18,A.bh,16,p,C.hjh()))
i.push(C.ffZ(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KA("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KA("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cE,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fgq(0,0.002,D.fw,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fZT("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fZT("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fZT("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fgq(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KA("VIDEO YA KIAPO",A.bh,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eq(A.bh,!1,s,A.aE,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lD,0.77,0.115,0.492))
i.push(C.KA("Rais Anayeapa:",A.bh,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KA("Jina:",A.bh,p,13,A.bp,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fZS("rais_jina",0.195,0.6930000000000001,0.62,A.bh,13,p,""))
i.push(C.ffZ(0.195,0.7130000000000001,0.62,n))
i.push(C.KA("Sahihi:",A.bh,p,13,A.bp,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eq(A.bh,!1,s,A.aE,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f6,0.38,0.21500000000000002,0.73))
i.push(C.ffZ(0.21500000000000002,0.795,0.38,n))
i.push(C.KA("Tarehe:",A.bh,p,13,A.bp,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fZS("rais_tarehe",0.745,0.74,0.2,A.bh,12,p,C.hjh()))
i.push(C.ffZ(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fgq(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.KA("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bp,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rz(4294967035,t,0,0,j,l,D.qm,"","",u,D.dg)
return C.BK(t,t,t,t,D.oj,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agu(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agu=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.f_1)
w=1
break}w=3
return B.b(C.Vk(!0),$async$agu)
case 3:w=4
return B.b(C.b_g(p),$async$agu)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hoq(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bfD,null,new C.fvO(p),f,!0,!0,!1,A.lE,!1,!1,x.N),$async$agu)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cd(null,null,!0,null,new C.fvP(),f,null,!0,!0,x.y),$async$agu)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h1r(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h1r(p))
case 1:return B.h(u,v)}})
return B.i($async$agu,v)},
fgZ:function fgZ(){},
caX:function caX(){},
fAW:function fAW(d){this.a=d},
fAX:function fAX(){},
fvO:function fvO(d){this.a=d},
fvM:function fvM(d){this.a=d},
fvN:function fvN(d){this.a=d},
fvP:function fvP(){},
fvK:function fvK(d){this.a=d},
fvL:function fvL(d){this.a=d},
aqv:function aqv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDQ:function aDQ(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ebN:function ebN(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebO:function ebO(d){this.a=d},
ebP:function ebP(d){this.a=d},
wC(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.eq(e,!1,f,A.aE,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
hiU(d,e,f){var w=4291404327
return B.a([C.qd(0,f,D.eP,w,2,"ring_l",f,d-f*0.42,e),C.qd(0,f,D.eP,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
ffp(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qd(4294967288,f,D.eP,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qd(h,s,D.eP,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qd(h,f*0.46,D.eP,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qd(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.eq(A.bh,!1,4279310375,A.aE,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f6,j,k,l)},
ffo(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eq(h,!1,k,A.aE,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cl,D.cQ,g,e,f)},
bze(d,e,f,g){return C.qd(0,0.002,D.fw,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hiT(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qd(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wC(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hoa(){var w=new B.T(Date.now(),0,!1),v=new C.fC1()
return B.u(v.$1(B.bT(w)))+"/"+B.u(v.$1(B.bI(w)))+"/"+B.bB(w)},
hiV(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wC(r+".",A.bh,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.ffo("witness_"+d+"_"+r+"_name",q,g,p,A.bh,!0,16,j,"[Jina la Shahidi]"),C.bze(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wC("Sahihi:",A.bh,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eq(A.bh,!1,4279310375,A.aE,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f6,s,t,g-0.004),C.bze(t,g+0.044,s,w)],x.u)},
agV(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dhH,D.clX,D.da_,D.dbS],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fZ9(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fDI(d.d),v=B.a([C.eq(A.bh,!1,4279310375,A.aE,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cD(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,1,0,0)],x.u)
A.d.v(v,C.hUy(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hUy(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wC("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hiU(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hiU(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.ffp(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.ffp(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wC("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qd(0,0.062,D.eP,b1,1.6,"crest_o",0.11,0.445,0.012),C.qd(0,0.046,D.eP,b1,1,"crest_i",0.084,0.458,0.02),C.wC("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qd(0,0.002,D.fw,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qd(b9,0.016,D.ld,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qd(0,0.002,D.fw,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wC("TAREHE:",A.bh,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.ffo("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bh,!1,21,b9,C.hoa()),C.bze(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wC(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qd(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qd(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.eq(A.bh,!1,b9,A.aE,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bp,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cl,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qd(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.eq(A.L,!1,c0,A.aE,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cl,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hiT(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wC(c9,A.bh,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.ffo("mahari_"+p,0.132,k,m,A.bh,!1,16,b9,s)
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
d=B.a([new C.eI(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aE,c0,A.bh,a9,D.bg,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eI(""+1000*f+"_"+e,D.f6,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aE,b6,A.bh,a9,D.fw,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eI(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aE,b7,A.dQ,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eI(""+1000*i+"_"+h,D.f6,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aE,b6,A.bh,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eI(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aE,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eI(""+1000*e+"_"+a3,D.f6,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aE,b6,A.bh,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hiT("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a5m||w===D.a5o||w===D.a5l||w===D.a5n){w=t-0.008
A.d.v(c2,C.ffp(0.21,w,0.044,!0,b0))
A.d.v(c2,C.ffp(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qd(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.qd(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qd(0,0.0022,D.fw,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wC("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wC("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hiV("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hiV("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qd(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wC("MWANDISHI",A.bh,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wC("Jina:",A.bh,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.ffo("mwandishi_jina",0.215,w,0.3116,A.bh,!0,15,b9,""),C.bze(0.215,p,0.3116,b5),C.wC("Sahihi:",A.bh,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.eq(A.bh,!1,b6,A.aE,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f6,0.3161999999999999,0.5738,s-0.044),C.bze(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qd(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wC("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i5p(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h25(d.d),p=new C.fBY(s),o=new C.fBZ(s),n=d.z,m=n===D.a5m||n===D.a5o||n===D.a5l||n===D.a5n,l=n===D.aFV||n===D.a5p||n===D.aFW,k=B.bS(0,B.fO(q,A.A,t,t,A.ce,A.bU,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5p?26:16
i.push(new C.fC0().$1$size(w))}if(n===D.aFX)i.push(D.fFW)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iv,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.al)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.w(B.a([p.$0(),D.aP4,p.$1$w(0.9),D.aP4,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.baP,t,n,w,t,t,A.n),t,t,t,t,A.ajt,t,t,t))
i.push(A.al)
i.push(new C.fC_(r).$1("NIMETOWE"))
i.push(A.fH)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mv,new B.c9(A.aM,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a4),t,7,t,t,t,t,t,7),A.db,new B.by(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b0)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.V,t,A.b2,A.r,B.a([k,new B.D(A.ai5,B.w(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hnv(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agV(e,t)
if(r==null)r=A.d.gH(D.H1)
w=C.cD()
v=C.rz(r.e,t,0,0,C.fZ9(r,0.165,y.O,D.dct,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qm,"","",s,D.dg)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.BK(t,t,t,t,D.oj,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hnw(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agV(e,t)
if(r==null)r=A.d.gH(D.H1)
w=C.cD()
v=C.rz(r.e,t,0,0,C.fZ9(r,0.165,y.f,D.d84,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qm,"","",s,D.dg)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.BK(t,t,t,t,D.oj,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bD7(d,e,f){var w=0,v=B.j(x.T),u
var $async$bD7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fNG(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bD7,v)},
agv(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agv=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fvS(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.LI,null,new C.fvT(p),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agv)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD7(d,"Hati ya Kuhowa",D.H1),$async$agv)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.ke,"Chagua jimbo"),$async$agv)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnv(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agv,v)},
agw(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agw=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fvW(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.LI,null,new C.fvX(p),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agw)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD7(d,"Hati ya Kuhoweya",D.H1),$async$agw)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.ke,"Chagua jimbo"),$async$agw)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnw(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
agx(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agx=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fw_(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.LI,null,new C.fw0(m),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agx)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bD7(d,"Malipo ya Awamu ya Mahari",D.QU),$async$agx)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Tafuta jimbo\u2026","",A.ke,"Chagua jimbo"),$async$agx)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agV(s,D.QU)
if(q==null)q=A.d.gH(D.QU)
n=C.cD()
p=C.rz(q.e,null,0,0,C.fZ9(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d2Z,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qm,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dg)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BK(null,null,null,null,D.oj,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agx,v)},
xB:function xB(d,e){this.a=d
this.b=e},
jn:function jn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fC1:function fC1(){},
fBY:function fBY(d){this.a=d},
fC_:function fC_(d){this.a=d},
fC0:function fC0(){},
fBZ:function fBZ(d){this.a=d},
fNG:function fNG(d,e){this.a=d
this.b=e},
ade:function ade(d,e,f){this.c=d
this.d=e
this.a=f},
dZo:function dZo(d,e,f){this.a=d
this.b=e
this.c=f},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e){this.a=d
this.b=e},
acE:function acE(d,e,f){this.c=d
this.d=e
this.a=f},
fvS:function fvS(){},
fvT:function fvT(d){this.a=d},
fvQ:function fvQ(d){this.a=d},
fvR:function fvR(d){this.a=d},
fvW:function fvW(){},
fvX:function fvX(d){this.a=d},
fvU:function fvU(d){this.a=d},
fvV:function fvV(d){this.a=d},
fw_:function fw_(){},
fw0:function fw0(d){this.a=d},
fvY:function fvY(d){this.a=d},
fvZ:function fvZ(d){this.a=d},
KD(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.eq(e,!1,f,A.aE,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,k,l,m)},
CK(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.eq(A.bh,!1,4279310375,A.aE,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f6,j,k,l)},
hjB(d,e,f){return C.CK(0,0.002,D.fw,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
bzo(d,e,f,g,h){return B.a([C.CK(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.KD(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fZX(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CK(0,0.002,D.fw,g,1,"orn_l_"+t,u,d,v),C.CK(h,0.016,D.ld,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CK(0,0.002,D.fw,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1e(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KD(d,A.bh,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.eq(A.L,!1,j,A.aE,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cE,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,t,u,g-0.002),C.hjB(u,g+0.018,t)],x.u)},
hjC(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CK(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CK(w,0.024,D.ld,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CK(w,0.024,D.ld,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KD(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzn(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KD("Sahihi:",A.bh,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eq(A.bh,!1,4279310375,A.aE,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f6,v,w,f-0.006),C.hjB(w,f+0.016,v)],x.u)},
h26(d){var w,v
for(w=0;w<19;++w){v=D.R8[w]
if(v.a===d)return v}return null},
i7G(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agV(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agV(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.agV(u,D.QU)
v=w==null?l:w.d
if(v==null){w=C.agV(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h26(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hkq.a8(0)
$.hkD.a8(0)
t=C.fDI(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h3d(d){var w=0,v=B.j(x.T),u
var $async$h3d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fP8(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3d,v)},
xE:function xE(d,e){this.a=d
this.b=e},
nK:function nK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bj3:function bj3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fP8:function fP8(){},
adh:function adh(d){this.a=d},
eg9:function eg9(d,e){this.a=d
this.b=e},
eg8:function eg8(d){this.a=d},
eg7:function eg7(d,e){this.a=d
this.b=e},
aeX:function aeX(d,e,f){this.c=d
this.d=e
this.a=f},
h25(d){return $.hkD.c4(0,d,new C.fDK(d))},
fDI(d){return $.hkq.c4(0,d,new C.fDJ(d))},
fB(d){return B.fTi(d>>>16&255,d>>>8&255,d&255,255)},
hXE(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hlK(4294570461,4293910718,4284234270,u)
case 1:return C.hlK(4294635750,4293975240,t,4292912216)
case 2:w=C.fdY(s,4294505966,r)
C.bz8(w,14,16,p)
C.kw(w,8,9,464,836,u,1.2)
C.CG(w,2,2,1,1,u,10)
C.CG(w,478,2,-1,1,u,10)
C.CG(w,2,852,1,-1,u,10)
C.CG(w,478,852,-1,-1,u,10)
return w
case 3:return C.fdY(4294966515,4294373082,4289102906)
case 4:return C.hSn(C.fdY(4294376440,4293653998,4290287194))
case 5:w=C.fdY(4294965238,4294437098,4288444980)
C.bz8(w,14,16,4283043359)
C.kw(w,6,7,468,840,u,1)
C.kw(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,n,4294175448)
C.rX(v,n)
C.kw(v,24,24,432,806,4286209070,1)
C.a11(v,12,12,468,12,o,3,20)
C.a11(v,12,842,468,842,o,3,20)
C.a11(v,12,12,12,842,o,3,20)
C.a11(v,468,12,468,842,o,3,20)
return v
case 7:return C.hQt(4294440434,4293518297,4280228630,r)
case 8:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,m,4293911504)
C.rX(v,m)
C.kw(v,28,28,424,798,l,1)
C.fn8(v,28,28,l,k)
C.fn8(v,452,28,l,k)
C.fn8(v,28,826,l,k)
C.fn8(v,452,826,l,k)
return v
case 9:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,j,4294111986)
C.rX(v,j)
C.kw(v,18,18,444,818,4292401368,0.7)
B.iL(v,!0,C.fB(p),0,13,0,853)
return v
case 10:return C.hUk(i,4294173372)
case 11:return C.hVr(4294439140,4293449662)
case 12:return C.hQl(h,4294239432)
case 13:return C.hUT(4294244340,4293193448)
case 14:return C.hZe(4294505710,4293780694)
case 15:return C.fcU(4294966259,4294439138,o,p,q)
case 16:return C.fcU(4294966776,4294178544,o,g,g)
case 17:return C.fcU(4294965493,4294504170,o,4286200650,q)
case 18:return C.fcU(4294966519,4294373862,o,p,p)
case 19:return C.hTs()
case 20:return C.hTt()
case 21:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,h,4293976768)
C.rX(v,h)
C.bz8(v,14,16,p)
B.iL(v,!0,C.fB(u),4,475,4,9)
B.iL(v,!0,C.fB(u),4,475,844,849)
B.iL(v,!0,C.fB(u),4,9,4,849)
B.iL(v,!0,C.fB(u),470,475,4,849)
C.a11(v,10,12,470,12,u,2,16)
C.a11(v,10,842,470,842,u,2,16)
C.a11(v,10,12,10,842,u,2,18)
C.a11(v,470,12,470,842,u,2,18)
C.CG(v,2,2,1,1,t,10)
C.CG(v,478,2,-1,1,t,10)
C.CG(v,2,852,1,-1,t,10)
C.CG(v,478,852,-1,-1,t,10)
C.kw(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,s,4294438872)
C.rX(v,s)
C.kw(v,14,16,452,822,o,2.2)
C.kw(v,22,24,436,806,o,1)
C.h0h(v,!1,!1,o,p,p,36,14,16)
C.kM(v,240,20,7,o,!0)
C.kM(v,240,834,7,o,!0)
C.kM(v,18,427,7,o,!0)
C.kM(v,462,427,7,o,!0)
return v
case 23:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,i,4293910712)
C.rX(v,i)
B.iL(v,!0,C.fB(u),0,479,0,20)
B.iL(v,!0,C.fB(u),0,479,834,853)
B.iL(v,!0,C.fB(u),0,20,0,853)
B.iL(v,!0,C.fB(u),460,479,0,853)
B.iL(v,!0,C.fB(f),5,474,5,9)
B.iL(v,!0,C.fB(f),5,474,844,848)
B.iL(v,!0,C.fB(f),5,9,5,848)
B.iL(v,!0,C.fB(f),470,474,5,848)
C.kw(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hv(q,q,A.ca,0,A.e7,854,q,0,3,q,A.ca,480,!1)
C.yx(v,e,4294174404)
C.rX(v,e)
C.bz8(v,14,16,p)
B.iL(v,!0,C.fB(u),3,476,3,8)
B.iL(v,!0,C.fB(u),3,476,845,850)
B.iL(v,!0,C.fB(u),3,8,3,850)
B.iL(v,!0,C.fB(u),471,476,3,850)
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
yx(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kO(d,!1,A.de,new B.Sc(s),r,A.cX,1,0,w-1,k,k);++k}},
rX(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.ez()
n.dr(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.ar(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.ar(v==null?0:v)
v=d.a
s=v==null?o:v.dU(u,t,o)
if(s==null)s=new B.iG()
v=A.o.D(A.k.O(s.gb7(s))-3,0,255)
r=A.o.D(A.k.O(s.gbe())-3,0,255)
q=A.o.D(A.k.O(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jU(u,t,v,r,q,255)}},
kw(d,e,f,g,h,i,j){var w,v=null,u=C.fB(i),t=e+g
B.kO(d,!0,A.de,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kO(d,!0,A.de,u,v,A.cX,j,e,t,w,w)
B.kO(d,!0,A.de,u,v,A.cX,j,e,e,f,w)
B.kO(d,!0,A.de,u,v,A.cX,j,t,t,f,w)},
CG(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kO(d,!0,A.de,C.fB(i),u,A.cX,2,e,e+g*j,f,f)
B.kO(d,!0,A.de,C.fB(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kO(d,!0,A.de,C.fB(i),u,A.cX,1,w,e+g*t,v,v)
B.kO(d,!0,A.de,C.fB(i),u,A.cX,1,w,w,v,f+h*t)},
hlK(d,e,f,g){var w=null,v=B.hv(w,w,A.ca,0,A.e7,854,w,0,3,w,A.ca,480,!1)
C.yx(v,d,e)
C.rX(v,d)
B.iL(v,!0,C.fB(f),0,479,0,28)
B.iL(v,!0,C.fB(f),0,479,826,853)
B.iL(v,!0,C.fB(f),0,28,0,853)
B.iL(v,!0,C.fB(f),452,479,0,853)
C.kw(v,5,5,470,844,g,1.1)
C.kw(v,28,28,424,798,g,1.6)
C.CG(v,2,2,1,1,g,11)
C.CG(v,478,2,-1,1,g,11)
C.CG(v,2,852,1,-1,g,11)
C.CG(v,478,852,-1,-1,g,11)
return v},
fdY(d,e,f){var w=null,v=B.hv(w,w,A.ca,0,A.e7,854,w,0,3,w,A.ca,480,!1)
C.yx(v,d,e)
C.rX(v,d)
C.kw(v,14,16,452,822,f,1.6)
C.kw(v,20,22,440,810,f,0.8)
return v},
bz8(d,e,f,g){var w,v=C.fB(g)
B.iL(d,!0,v,0,479,0,f-1)
w=854-f
B.iL(d,!0,v,0,479,w,853);--w
B.iL(d,!0,v,0,e-1,f,w)
B.iL(d,!0,v,480-e,479,f,w)},
hSn(d){var w,v,u=4291404327
C.bz8(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kM(d,w,8,3,u,!0)
C.kM(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kM(d,7,v,3,u,!0)
C.kM(d,473,v,3,u,!0)}return d},
fqj(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1N(d,C.fB(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1N(d,C.fB(k),t)
t=A.k.V(n*0.39)
C.kM(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kM(d,e+g*t,f+h*3,4,k,!0)
C.kM(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kM(d,e+g*t,f,5,k,!0)
C.kM(d,e,f+h*t,5,k,!0)}},
h0h(d,e,f,g,h,i,j,k,l){var w,v
C.fqj(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fqj(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fqj(d,k,v,1,-1,e,f,g,h,i,j)
C.fqj(d,w,v,-1,-1,e,f,g,h,i,j)},
a11(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l6(d,!0,A.de,new B.r5(p),null,A.cX,j,r,q)}},
fph(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.de,new B.r5(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.de,new B.r5(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hQt(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hv(o,o,A.ca,0,A.e7,854,o,0,3,o,A.ca,480,!1)
C.yx(n,d,e)
C.rX(n,d)
C.kw(n,20,20,440,814,f,1.2)
C.fph(n,0,0,1,1,g)
C.fph(n,480,0,-1,1,g)
C.fph(n,0,854,1,-1,g)
C.fph(n,480,854,-1,-1,g)
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
B.kO(n,!0,A.de,new B.r5(p),o,A.cX,1.2,240,r,60,q)}return n},
fn8(d,e,f,g,h){var w
C.ftD(d,!0,C.fB(g),13,e,f)
C.ftD(d,!0,C.fB(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1N(d,C.fB(h),w)},
kM(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1N(d,C.fB(h),r)
return}B.kO(d,!0,A.de,C.fB(h),w,A.cX,1,e,u,v,f)
B.kO(d,!0,A.de,C.fB(h),w,A.cX,1,u,e,f,t)
B.kO(d,!0,A.de,C.fB(h),w,A.cX,1,e,s,t,f)
B.kO(d,!0,A.de,C.fB(h),w,A.cX,1,s,e,f,v)},
fcT(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1N(d,C.fB(i),v)
v=e+g*14
w=f+h*14
C.kM(d,v,w,6,j,!0)
C.kM(d,v,w,3,i,!0)},
fcU(d,e,f,g,h){var w=null,v=B.hv(w,w,A.ca,0,A.e7,854,w,0,3,w,A.ca,480,!1)
C.yx(v,d,e)
C.rX(v,d)
C.kw(v,18,18,444,818,f,2)
C.kw(v,26,26,428,802,f,0.9)
if(h!=null)B.iL(v,!0,C.fB(h),28,451,28,34)
C.fcT(v,18,18,1,1,g,f)
C.fcT(v,462,18,-1,1,g,f)
C.fcT(v,18,836,1,-1,g,f)
C.fcT(v,462,836,-1,-1,g,f)
return v},
hTs(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hv(v,v,A.ca,0,A.e7,854,v,0,3,v,A.ca,480,!1)
C.yx(r,u,4294240980)
C.rX(r,u)
C.kw(r,10,12,460,830,t,3.2)
C.kw(r,18,20,444,814,s,1.2)
C.kw(r,24,26,432,802,t,1.8)
C.h0h(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kM(r,w,16,3,t,!0)
C.kM(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kM(r,16,w,3,t,!0)
C.kM(r,464,w,3,t,!0)}return r},
hTt(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hv(t,t,A.ca,0,A.e7,854,t,0,3,t,A.ca,480,!1)
C.yx(p,s,4294373080)
C.rX(p,s)
C.kw(p,16,18,448,818,r,2.4)
C.kw(p,24,26,432,802,4286209044,1)
w=new C.ffg(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h0h(p,!1,!0,r,q,q,34,16,18)
return p},
bzP(d,e,f,g,h,i){B.iL(d,!0,C.fB(i),e,e+g,f,f+h)},
bAE(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kO(d,!1,A.de,new B.Sc(i),null,A.cX,1,e,w,l,l)}},
hUj(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kO(d,!1,A.de,new B.r5(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kO(d,!1,A.de,new B.r5(r),null,A.cX,1,t,t,f,s);++q}},
hUk(d,e){var w,v,u=null,t=B.hv(u,u,A.ca,0,A.e7,854,u,0,3,u,A.ca,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hUj(t,v,w,30,D.cWz,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzP(t,44,44,392,766,d)
C.bAE(t,44,44,392,766,d,e)
C.rX(t,d)
C.kw(t,44,44,392,766,4292128567,2.2)
C.kw(t,50,50,380,754,4279898632,0.8)
return t},
hVq(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kM(d,e,f,7,h,!0)
C.kM(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kO(d,!0,A.de,C.fB(h),o,A.cX,1.6,w,u,v,t)
B.kO(d,!0,A.de,C.fB(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kO(d,!0,A.de,new B.r5(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kO(d,!0,A.de,C.fB(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kO(d,!0,A.de,C.fB(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l6(d,!0,A.de,C.fB(h),o,A.cX,2,e,f)}},
hVr(d,e){var w,v,u,t,s=null,r=B.hv(s,s,A.ca,0,A.e7,854,s,0,3,s,A.ca,480,!1)
B.iL(r,!0,C.fB(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hVq(r,u,v,w,4292391514)}C.bzP(r,46,46,388,762,d)
C.bAE(r,46,46,388,762,d,e)
C.rX(r,d)
C.kw(r,46,46,388,762,4291404327,1.8)
return r},
hh6(d,e,f,g){C.ftD(d,!0,C.fB(g),16,e,f)
C.ftD(d,!0,C.fB(g),11,e,f)
C.kM(d,e,f,6,g,!0)
B.kO(d,!0,A.de,C.fB(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kO(d,!0,A.de,C.fB(g),null,A.cX,1.3,e,e,f-14,f+14)},
hQl(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hv(v,v,A.ca,0,A.e7,854,v,0,3,v,A.ca,480,!1)
B.iL(s,!0,C.fB(4280948752),0,479,0,853)
B.iL(s,!0,C.fB(u),0,479,0,78)
B.iL(s,!0,C.fB(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hh6(s,w,39,t)
C.hh6(s,w,815,t)}C.bzP(s,38,92,404,670,d)
C.bAE(s,38,92,404,670,d,e)
C.rX(s,d)
C.kw(s,38,92,404,670,t,1.8)
C.kw(s,45,99,390,656,4287322667,0.8)
return s},
hUS(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1N(d,new B.r5(o),p)}B.l6(d,!0,A.de,C.fB(4292128567),null,A.cX,3,e,f)},
hUT(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hv(s,s,A.ca,0,A.e7,854,s,0,3,s,A.ca,480,!1)
C.yx(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kO(q,!0,A.de,new B.r5(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kO(q,!0,A.de,new B.r5(u),s,A.cX,1.1,v,v,0,853)}B.iL(q,!0,C.fB(r),0,479,0,70)
B.iL(q,!0,C.fB(r),0,479,798,853)
for(t=0;t<5;++t)C.hUS(q,70+t*85,48,4292128567)
C.bzP(q,48,78,384,712,d)
C.bAE(q,48,78,384,712,d,e)
C.rX(q,d)
C.kw(q,48,78,384,712,4291404327,1.6)
return q},
hZe(d,e){var w,v,u,t=null,s=4279970378,r=B.hv(t,t,A.ca,0,A.e7,854,t,0,3,t,A.ca,480,!1)
B.iL(r,!0,C.fB(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kM(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l6(r,!0,A.de,new B.r5(u),t,A.cX,1,v,w)}C.bzP(r,40,40,400,774,d)
C.bAE(r,40,40,400,774,d,e)
C.rX(r,d)
C.kw(r,40,40,400,774,4291058750,2)
C.kw(r,48,48,384,758,s,0.8)
return r},
kV:function kV(d,e){this.a=d
this.b=e},
fDK:function fDK(d){this.a=d},
fDJ:function fDJ(d){this.a=d},
ffg:function ffg(d){this.a=d},
fEn(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hVk(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fZQ(d){var w,v,u,t=null,s=A.a.cD(d,"{"),r=A.a.oG(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aM(0,Ai.agR(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afl(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vn(null,""),$async$afl)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n6(n)
if(e==null)s=A.hF
else{r=C.hVk(e)
s=B.a([new B.a0_(A.cJ.gct().aL(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qX(t,d,s,"news",E.Fx),$async$afl)
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
return B.i($async$afl,v)},
bCf(d){return C.i7m(d)},
i7m(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afl(r,null),$async$bCf)
case 7:q=f
p=C.fZQ(q)
if(p==null){u=d
w=1
break}o=d.aCI(p)
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
return B.i($async$bCf,v)},
hl0(d){var w,v=F.h1n(d)
v=B.aM(v,"book","newspaper")
if(F.a25(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fIi(d,e,f,g){return C.i9d(d,e,f,g)},
i9d(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fIi=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fEn(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hoz()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afl('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hl0(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fIi)
case 3:r=m.fZQ(i)
if(r==null)throw B.V(y.S)
q=new C.zD(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCI(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a25(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a25(A.d.aG(t," "))==="sw"?C.bCf(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIi,v)},
bBK(d,e,f,g,h){return C.i4Z(d,e,f,g,h)},
i4Z(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBK=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hoz()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afl('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hl0(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBK)
case 3:p=j.fZQ(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCI(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a25(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCf(n),$async$bBK)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7T(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBK,v)},
a7T:function a7T(d,e,f){this.a=d
this.b=e
this.c=f},
ic0(d,e){return B.a3(d,!1).cg(B.e_(new C.fPj(e),!0,null,x.H))},
fPj:function fPj(d){this.a=d},
VN:function VN(d,e){this.c=d
this.a=e},
aE6:function aE6(d,e,f,g,h,i,j,k){var _=this
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
ej6:function ej6(d){this.a=d},
ej5:function ej5(){},
ej7:function ej7(d){this.a=d},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej8:function ej8(){},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiS:function eiS(d){this.a=d},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiM:function eiM(d,e){this.a=d
this.b=e},
eiN:function eiN(d,e){this.a=d
this.b=e},
eiO:function eiO(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiK:function eiK(d,e){this.a=d
this.b=e},
eiH:function eiH(d){this.a=d},
eiI:function eiI(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
eiX:function eiX(d){this.a=d},
ej_:function ej_(d,e){this.a=d
this.b=e},
eiW:function eiW(d,e){this.a=d
this.b=e},
ej0:function ej0(d){this.a=d},
eiV:function eiV(d){this.a=d},
ej1:function ej1(d){this.a=d},
eiU:function eiU(d){this.a=d},
ej2:function ej2(d,e){this.a=d
this.b=e},
eiT:function eiT(d,e){this.a=d
this.b=e},
ej3:function ej3(d){this.a=d},
eiG:function eiG(d,e){this.a=d
this.b=e},
fDj(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fDj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiD){w=1
break}r=new C.fDk()
t=4
q=x.s
w=7
return B.b(B.iO(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fDj)
case 7:$.hiD=!0
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
return B.i($async$fDj,v)},
bC6(d){return A.Hm[B.mF(d)-1]+", "+A.p9[B.bI(d)-1]+" "+B.bT(d)+", "+B.bB(d)},
hYi(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dm5[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h1M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fH(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fBC(),B.S(v).k("Z<1>")))
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
continue}o=new C.fBE(j,h)
n=new C.fBD(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iY(o.$1(l)))
j.a+=l}return u},
fZz(d,e){var w=new C.feR()
return A.d.cM(e,0,new C.feP(w))>=A.d.cM(d,0,new C.feQ(w))},
hfL(d){var w,v,u=new B.aO($.X().r,A.ao,null,null,B.a([],x.v))
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
zD:function zD(d,e,f,g,h,i,j,k,l,m){var _=this
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
ceD:function ceD(d){this.a=d},
ceB:function ceB(){},
ceC:function ceC(){},
tp:function tp(d,e){this.a=d
this.b=e},
Bw:function Bw(d,e){this.a=d
this.b=e},
lm:function lm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fDk:function fDk(){},
fBC:function fBC(){},
fBE:function fBE(d,e){this.a=d
this.b=e},
fBD:function fBD(d,e,f){this.a=d
this.b=e
this.c=f},
feR:function feR(){},
feS:function feS(){},
feP:function feP(d){this.a=d},
feQ:function feQ(d){this.a=d},
b0L:function b0L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ceE:function ceE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceF:function ceF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ceG:function ceG(d){this.a=d},
bcj:function bcj(d){this.a=d},
bci:function bci(d,e){this.b=d
this.a=e},
btM:function btM(d){this.a=d},
b8R:function b8R(d,e){this.b=d
this.a=e},
brg:function brg(d,e){this.b=d
this.a=e},
hqz(d,e){return B.a3(d,!1).cg(B.e_(new C.fPm(e,null),!0,null,x.E))},
fPm:function fPm(d,e){this.a=d
this.b=e},
VO:function VO(d,e,f){this.c=d
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
ejE:function ejE(){},
ejF:function ejF(d){this.a=d},
ejD:function ejD(d,e){this.a=d
this.b=e},
ejr:function ejr(d){this.a=d},
ejs:function ejs(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejw:function ejw(d){this.a=d},
ejx:function ejx(d,e,f){this.a=d
this.b=e
this.c=f},
ejt:function ejt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejv:function ejv(d,e){this.a=d
this.b=e},
ejB:function ejB(d){this.a=d},
eju:function eju(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d,e,f){this.b=d
this.c=e
this.a=f},
ic6(d){return B.a3(d,!1).cg(B.e_(new C.fPC(),!0,null,x.I))},
bzA(d,e){var w,v,u,t,s,r,q=B.c3(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h_Z(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fPC:function fPC(){},
a_R:function a_R(d){this.a=d},
oD:function oD(d,e,f,g,h,i,j){var _=this
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
_.aB=_.aJ=_.aE=_.az=_.Z=_.b8=_.bi=_.y2=0
_.b0=null
_.b_=0.25
_.bb=null
_.bJ=0.5
_.aH=1
_.c7=_.bB=_.bh=0
_.cK=_.c5=!1
_.c=_.a=null},
eSP:function eSP(d){this.a=d},
eRH:function eRH(d,e){this.a=d
this.b=e},
eS4:function eS4(d,e){this.a=d
this.b=e},
eSe:function eSe(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRY:function eRY(d,e){this.a=d
this.b=e},
eRZ:function eRZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSa:function eSa(d,e,f){this.a=d
this.b=e
this.c=f},
eS9:function eS9(d,e){this.a=d
this.b=e},
eSb:function eSb(d,e){this.a=d
this.b=e},
eS8:function eS8(d,e){this.a=d
this.b=e},
eSd:function eSd(d,e,f){this.a=d
this.b=e
this.c=f},
eSc:function eSc(d,e){this.a=d
this.b=e},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRf:function eRf(){},
eRj:function eRj(d,e){this.a=d
this.b=e},
eRe:function eRe(d,e){this.a=d
this.b=e},
eRl:function eRl(){},
eRk:function eRk(d,e){this.a=d
this.b=e},
eRd:function eRd(d,e){this.a=d
this.b=e},
eRa:function eRa(d,e){this.a=d
this.b=e},
eRm:function eRm(d){this.a=d},
eRc:function eRc(d,e){this.a=d
this.b=e},
eRn:function eRn(d){this.a=d},
eRb:function eRb(d,e){this.a=d
this.b=e},
eSE:function eSE(d,e){this.a=d
this.b=e},
eSL:function eSL(d){this.a=d},
eSM:function eSM(d,e){this.a=d
this.b=e},
eSN:function eSN(){},
eSF:function eSF(d,e){this.a=d
this.b=e},
eSD:function eSD(d,e){this.a=d
this.b=e},
eSG:function eSG(d,e){this.a=d
this.b=e},
eSC:function eSC(d,e){this.a=d
this.b=e},
eSH:function eSH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSB:function eSB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSI:function eSI(d){this.a=d},
eSJ:function eSJ(d,e){this.a=d
this.b=e},
eSK:function eSK(d){this.a=d},
eSA:function eSA(d){this.a=d},
eSn:function eSn(d){this.a=d},
eSo:function eSo(d){this.a=d},
eSm:function eSm(d,e){this.a=d
this.b=e},
eSh:function eSh(d,e){this.a=d
this.b=e},
eSp:function eSp(d){this.a=d},
eSs:function eSs(d){this.a=d},
eSl:function eSl(d){this.a=d},
eSt:function eSt(d){this.a=d},
eSu:function eSu(d){this.a=d},
eSv:function eSv(d){this.a=d},
eSw:function eSw(d){this.a=d},
eSk:function eSk(d){this.a=d},
eSx:function eSx(d){this.a=d},
eSj:function eSj(d){this.a=d},
eSy:function eSy(d,e){this.a=d
this.b=e},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSz:function eSz(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSr:function eSr(d){this.a=d},
eS1:function eS1(d){this.a=d},
eS0:function eS0(d){this.a=d},
eS2:function eS2(d,e){this.a=d
this.b=e},
eS_:function eS_(d,e){this.a=d
this.b=e},
eS3:function eS3(d){this.a=d},
eRU:function eRU(d){this.a=d},
eRT:function eRT(d){this.a=d},
eRV:function eRV(d){this.a=d},
eRS:function eRS(d){this.a=d},
eRW:function eRW(d,e){this.a=d
this.b=e},
eRR:function eRR(d,e){this.a=d
this.b=e},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eRy:function eRy(d){this.a=d},
eRz:function eRz(d){this.a=d},
eRA:function eRA(d){this.a=d},
eRB:function eRB(d){this.a=d},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRF:function eRF(d){this.a=d},
eRG:function eRG(d){this.a=d},
eQU:function eQU(d){this.a=d},
eQV:function eQV(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQX:function eQX(d){this.a=d},
eQY:function eQY(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQZ:function eQZ(d){this.a=d},
eR_:function eR_(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRt:function eRt(d){this.a=d},
eRu:function eRu(d){this.a=d},
eRv:function eRv(d){this.a=d},
eRw:function eRw(d){this.a=d},
eR3:function eR3(d){this.a=d},
eR4:function eR4(d){this.a=d},
eR5:function eR5(d){this.a=d},
eR6:function eR6(d){this.a=d},
eR7:function eR7(d){this.a=d},
eR2:function eR2(d){this.a=d},
eR8:function eR8(d){this.a=d},
eR1:function eR1(d){this.a=d},
eR9:function eR9(d){this.a=d},
eR0:function eR0(d){this.a=d},
eRX:function eRX(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRL:function eRL(d){this.a=d},
eRK:function eRK(d){this.a=d},
eRM:function eRM(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d,e){this.a=d
this.b=e},
eRN:function eRN(d,e){this.a=d
this.b=e},
eRI:function eRI(d,e){this.a=d
this.b=e},
eRO:function eRO(d){this.a=d},
eS7:function eS7(d){this.a=d},
eS6:function eS6(d,e,f){this.a=d
this.b=e
this.c=f},
eS5:function eS5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSg:function eSg(d,e){this.a=d
this.b=e},
eSf:function eSf(d,e){this.a=d
this.b=e},
eRx:function eRx(d){this.a=d},
eSO:function eSO(d){this.a=d},
bfn:function bfn(d,e){this.b=d
this.a=e},
i7x(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i7y(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l4(0,d),m=B.C(n,B.a5(n).k("J.E"))
if(m.length===0)return d
w=new B.fg("")
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
o=B.aM(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bAa(){var w=$.bzi,v=$.Qu
$.Qu=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.eq(A.bh,!1,4279310375,A.aE,"",i,24,A.bp,A.a7,"",h,C.bAa(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f6,g,e,f)},
o0(d,e,f,g){var w=f*9
return C.ig(D.eP,d-f/2,e-w/32,f,w/16,g,0)},
hRY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzi
p=$.Qu
$.Qu=p+1
w.push(new C.eI(q+"_"+p,D.f6,0,r,1,0.0016,"",24,A.a7,A.bp,A.aE,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzi
p=$.Qu
$.Qu=p+1
w.push(new C.eI(q+"_"+p,D.f6,o,0,0.004,1,"",24,A.a7,A.bp,A.aE,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o0(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o0(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bg,0.08,0.08,0.5,0.003,v,0),C.ig(D.bg,0.58,0.08,0.004,0.06,v,0),C.ig(D.bg,0.58,0.14,0.34,0.003,v,0),C.ig(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bg,0.08,0.8,0.004,0.14,t,0),C.ig(D.bg,0.08,0.94,0.6,0.003,t,0),C.o0(0.58,0.08,0.05,e),C.o0(0.92,0.22,0.05,e),C.o0(0.08,0.8,0.05,f),C.o0(0.68,0.94,0.05,f),C.o0(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.ld,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.ld,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.ld,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.ld,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o0(0.5,0.5,1.5,w|335544320),C.o0(0.5,0.5,1.15,w|402653184),C.o0(0.5,0.5,0.8,v|436207616),C.o0(0.95,0.05,0.4,v|855638016),C.o0(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o0(0.85,0.08,0.7,w|1140850688),C.o0(0.1,0.35,0.5,v|855638016),C.o0(0.9,0.62,0.55,v|771751936),C.o0(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o0(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o0(0.5,0.2,0.65,(w|3422552064)>>>0),C.o0(0.5,0.2,0.95,w|855638016),C.ig(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jT,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jT,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jT,0.15,0.86,0.6,0.14,1712265002,0),C.o0(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cY3[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzi
l=$.Qu
$.Qu=l+1
w.push(new C.eI(m+"_"+l,D.f6,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aE,k,A.bh,null,D.eP,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o0(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jT,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jT,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jT,0.65,-0.1,0.3,0.55,v,0.5),C.o0(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bg,0.06,0.04,0.88,0.002,e,0),C.ig(D.bg,0.06,0.96,0.88,0.002,e,0),C.ig(D.bg,0.06,0.04,0.004,0.92,e,0),C.ig(D.bg,0.936,0.04,0.004,0.92,e,0),C.ig(D.bg,0.09,0.07,0.82,0.001,w,0),C.ig(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jU,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jU,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jU,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eP,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eP,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eP,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eP,-0.05,0.9,0.4,0.12,v,-0.9),C.o0(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bg,0.09,0.12,0.16,0.006,e,0),C.ig(D.bg,0.05,0.03,0.9,0.001,w,0),C.ig(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i42(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzi=j
$.Qu=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fz0()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eq(A.bh,!1,n,A.aE,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bAa(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cl,D.lD,1,0,0))
if(a9)A.d.v(q,C.hRY(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i7x(B.aM(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fz_(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.eq(A.bh,!1,n,A.aE,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bAa(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cl,D.lD,a3,a4,a5))
return C.rz(s,r,0,0,q,j+"_slide",D.qm,"","","",D.dg)},
ry:function ry(d,e){this.a=d
this.b=e},
ma:function ma(d,e,f,g,h,i,j,k,l,m){var _=this
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
fz0:function fz0(){},
fz_:function fz_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hI2(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.u(w.h(d,"at")))
u=w.h(d,"outline")
t=B.u(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cg1(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zE(u,t,s,B.u(w==null?"":w))},
fGG(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fGG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiZ){w=1
break}$.hiZ=!0
t=4
w=7
return B.b(B.az(),$async$fGG)
case 7:r=e
q=B.aU(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aM(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jP(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hI2(m)
if(l!=null)J.ca(n,l)}$.CH.c4(0,B.u(o.a),new C.fGH(n))}C.h_E()
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
return B.i($async$fGG,v)},
h_E(){var w,v=new B.T(Date.now(),0,!1).bS(-12e8)
for(w=new B.dt($.CH,$.CH.r,$.CH.e);w.C();)J.nu(w.d,new C.fml(v))
$.CH.bs($.CH,new C.fmm())},
aO_(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aO_=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aO_)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CH,B.a5($.CH).k("cI<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.ca(p,B.G(["at",g.a.a7().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aO_)
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
return B.i($async$aO_,v)},
i88(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h_E()
w=$.CH.c4(0,d,new C.fGJ())
v=Date.now()
u=B.C(e,B.a5(e).k("co.E"))
J.pB(w,0,new C.zE(new B.T(v,0,!1),f,u,g))
C.aO_()},
i85(d){var w,v=$.CH.h(0,d)
if(v==null||J.cn(v))return
w=J.cB(v)
w.cG(v,0)
if(w.gal(v))$.CH.W(0,d)
C.aO_()},
zE:function zE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg1:function cg1(){},
fGH:function fGH(d){this.a=d},
fml:function fml(d){this.a=d},
fmm:function fmm(){},
fGJ:function fGJ(){},
i8a(d){return A.d.dM(D.wq,new C.fGM(d),new C.fGN())},
hI0(d){var w
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
hI_(d){var w
switch(d.a){case 0:w=D.alV
break
case 1:w=A.yI
break
case 2:w=A.amZ
break
case 3:w=I.alx
break
case 4:w=A.amq
break
case 5:w=A.m0
break
default:w=null}return w},
hUY(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Qi[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Qi[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hI1(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i86(d,e,f,g,h){var w=new B.M(D.wq,new C.fGF(),x.eC).aG(0,", "),v=""+d,u=C.hor(h),t=F.fAp(h),s=C.hkB(g),r=e.q(0,D.Ii)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Ij)?'- New slides get an "icon3d" from: '+A.d.aG(D.Qi,", ")+".\n":"",p=e.q(0,D.D5)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i87(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wq,new C.fGI(),x.eC).aG(0,", "),p=new B.fg("")
if(e.q(0,D.Ii)){p.a=s
w=s}else w=""
if(e.q(0,D.Ij))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Qi,", ")+".\n")
if(e.q(0,D.D5))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hor(d)
v=F.fAp(d)
u=C.hkB(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ah6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D3(a3,"{"),a5=J.fSR(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lo(a3,a4,a5+1)
try{w=A.S.aM(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fEF(),m).c0(0,new C.fEG())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.r(t,"kind")
l=A.a.i(B.u(l==null?a2:l))
j=J.r(t,"title")
j=A.a.i(B.u(j==null?"":j))
i=J.r(t,"subtitle")
i=A.a.i(B.u(i==null?"":i))
h=J.r(t,"notes")
h=A.a.i(B.u(h==null?"":h))
g=J.r(t,"emoji")
g=A.a.i(B.u(g==null?"":g))
f=J.r(t,"icon3d")
f=C.hUY(B.u(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.r(t,"picture")
d=B.c8(B.u(d==null?0:d),a1)
if(d==null)d=0
J.ca(u,new C.a80(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.u(q==null?J.fr(u).b:q))
p=A.d.b3(D.wq,new C.fEH(r))?r:a7
o=C.flA(J.r(w,"logo_frame"),D.Cv)
n=C.flA(J.r(w,"logo_ring"),D.Cq)
m=C.flA(J.r(w,"photo_frame"),D.Cv)
l=C.flA(J.r(w,"photo_ring"),D.Cq)
return new C.ark(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1D(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hny(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.D6),f7=f6?C.hOG():e4,f8=f7==null
if(f8)w=e4
else{v=new B.ez()
v.dr(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.ea(t,v)
s=u.c
s=new C.nO("luxe",u.a,A.m0,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dg)
w=s}if(w==null)w=C.i8a(f9.b)
r=g2.q(0,D.a5G)||f6
q=g2.q(0,D.Ii)
p=g2.q(0,D.Si)
o=new C.fz4()
n=B.a([],x.g)
m=new C.fz7(o,w,r)
l=new C.fz6(o,r)
k=new C.fz5(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b3(u,new C.fz3(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cZC[b8]
c0=D.cYw[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eUH.q(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eP,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eP,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eP,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mK,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qn,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Sf
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eP,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.ld,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.D3
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eP,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eP,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mK,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cE,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qn,500,f2,f0))
d3=D.mJ
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eP,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uF:D.cl
c1.push(new C.eI(b4,D.a5E,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aE,4279310375,A.bh,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mJ
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eP,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eP,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mK,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qn,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Sf
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eP,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eP,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bg,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bg,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ig,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mJ}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dg,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hQk(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dot[A.o.E(b1,6)]:s
n.push(new C.lL(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BK(e4,e4,e4,e4,D.D2,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fBs(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fBs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.D5)
n=e.q(0,D.Ij)
if(!o&&!n){u=D.a4D
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fBv(o,s[r],n,$.hTH,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iO(t,x.e),$async$fBs)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBs,v)},
fAs(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fAs=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i87(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNj(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fAs)
case 3:u=s.aNF(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAs,v)},
bBL(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBL=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.em(f,f.r,B.a5(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.i88(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ah6(i,"colorful")
t=C.i86(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNj(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hF),$async$bBL)
case 3:u=o.aNF(m,f,h,g,D.e1E,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBL,v)},
aNj(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNj=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vn(null,""),$async$aNj)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n6(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qX(t,d,g,"slides",null),$async$aNj)
case 7:q=i
p=q.b
if(p!=null){o=C.ah6(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L4(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNj,v)},
aNF(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNF=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.D5)||e.q(0,D.Ij)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.de(e,x.Q)
t.W(0,D.D5)}w=6
return B.b(C.fBs(d,t),$async$aNF)
case 6:s=k
w=4
break
case 5:s=D.a4D
case 4:t=d.c
w=A.d.b3(t,new C.feL())?7:9
break
case 7:r=$.hpj
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dS(r,x.aP),$async$aNF)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hny(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hI1(new C.ark(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("M<1,n>")
t=B.C(new B.M(m,new C.feM(),n),n.k("ak.E"))
l.cx=t
t=B.a5(e).k("jT<co.E,n>")
t=B.C(new B.jT(e,new C.feN(),t),t.k("J.E"))
l.cy=t
l.ay=e.q(0,D.Si)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNF,v)},
h2v(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a3t[v]
if(A.d.q(t,u.b))w.M(0,u)}return w},
icb(d){return B.bR(A.K,null,new C.fPO(),d,!0,!0,!0,null,!1,!1,x.I)},
hPi(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aL(d)},
ica(d,e,f){return B.bR(A.K,null,new C.fPN(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h2w(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h2x(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
flA(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.flB(w))?w:""},
hkB(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hph(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ah6(a1==null?"":a1,a0),a3=C.ah6(a5,a0)
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
for(v=t.length,r=a4.r,q=B.S(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.pN(new B.Z(r,new C.fGO(t[p]),q))
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
g=B.C(new B.Z(k,new C.fGP(),v),r)
A.d.aW(g,new C.fGQ())
if(g.length===0)continue
f=new C.fGR(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i8r(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aH0
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e3y
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e3z
return null},
hkc(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dk(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i8b(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oj
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
if(C.hkc(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hkc(n,i,v,u))if(n.w>10){f=h+1
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
i89(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ah6(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3t[r]
if(q.b===s)w.M(0,q)}}v=C.h2w(e)
u=C.h2x(e)
p=C.hny(n,D.a4D,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("M<1,n>")
o=B.C(new B.M(o,new C.fGK(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jT<co.E,n>")
o=B.C(new B.jT(w,new C.fGL(),o),o.k("J.E"))
p.cy=o
p.ay=w.q(0,D.Si)
return p},
ibY(d,e,f){return B.bR(A.K,null,new C.fP0(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hOG(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.ez()
s.dr(t)
w=D.cDl[s.ar(10)]
v=new C.efX(s)
u=x.N
return new C.efW(w,s.ar(4),J.fr(v.$1$2(D.d3c,1,x.ff)),w.r[s.ar(3)],v.$1$2(D.djQ,2+s.ar(2),u),v.$1$2(D.dcD,2,u),v.$1$2(D.dmX,4,x.fP),t)},
hQk(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.ez()
a1.dr(a5.w+a3*13)
w=new C.fbd(a4)
v=new C.fbf(a4,d)
u=new C.fbe(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aY(A.o.fV(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aY(A.o.fV(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eP,0.1+a1.am()*0.45,0.05+a1.am()*0.3,0.45,0.75,C.a1D(a0,52),"lux_spot",a5.wD(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wD(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aF9(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wD(0,f),D.dg,150,C.a1D(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wD(0,f),D.dg,120,C.a1D(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dg,260,C.a1D(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wD(0,"filigree"),D.dg,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1D(a0,208),"lux_rule",a5.aF9(0,"shimmer",r),D.uE,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1D(a0,144),"lux_rule2","",D.Ig,220))}l=!A.d.b3(a2,new C.fbc())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wD(0,"crest"),350))
else{o=a1.ht()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wD(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1D(r,242)
j=a5.wD(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qn,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eP,t-0.007,0.9495,0.014,0.025,C.a1D(r,242),"lux_g2",a5.wD(0,"orbit"),D.qn,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aY(A.o.fV(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wD(0,"velvet")))},
nO:function nO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGM:function fGM(d){this.a=d},
fGN:function fGN(){},
w3:function w3(d,e){this.a=d
this.b=e},
a80:function a80(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ark:function ark(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fGF:function fGF(){},
fGI:function fGI(){},
fEF:function fEF(){},
fEG:function fEG(){},
fEH:function fEH(d){this.a=d},
fz4:function fz4(){},
fz7:function fz7(d,e,f){this.a=d
this.b=e
this.c=f},
fz6:function fz6(d,e){this.a=d
this.b=e},
fz5:function fz5(d,e){this.a=d
this.b=e},
fz3:function fz3(d){this.a=d},
fBv:function fBv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBt:function fBt(d){this.a=d},
fBu:function fBu(d){this.a=d},
feL:function feL(){},
feM:function feM(){},
feN:function feN(){},
fPO:function fPO(){},
a0n:function a0n(d){this.a=d},
aHr:function aHr(d,e,f,g,h){var _=this
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
eZ1:function eZ1(d,e,f){this.a=d
this.b=e
this.c=f},
eZ2:function eZ2(d,e){this.a=d
this.b=e},
eZ_:function eZ_(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d,e){this.a=d
this.b=e},
eYZ:function eYZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eYU:function eYU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eYY:function eYY(d,e){this.a=d
this.b=e},
eYT:function eYT(d,e){this.a=d
this.b=e},
eYX:function eYX(d,e){this.a=d
this.b=e},
eYS:function eYS(d,e){this.a=d
this.b=e},
eYV:function eYV(d){this.a=d},
eYW:function eYW(d,e){this.a=d
this.b=e},
eYI:function eYI(d,e){this.a=d
this.b=e},
eYJ:function eYJ(d,e){this.a=d
this.b=e},
eYL:function eYL(d){this.a=d},
eYM:function eYM(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYO:function eYO(d){this.a=d},
eYK:function eYK(d,e){this.a=d
this.b=e},
eYP:function eYP(d,e){this.a=d
this.b=e},
eZf:function eZf(d){this.a=d},
eZg:function eZg(d){this.a=d},
eZe:function eZe(d){this.a=d},
eZh:function eZh(d){this.a=d},
eZd:function eZd(d){this.a=d},
eZj:function eZj(d){this.a=d},
eZc:function eZc(d,e){this.a=d
this.b=e},
eZk:function eZk(d){this.a=d},
eZb:function eZb(d,e){this.a=d
this.b=e},
eZl:function eZl(d){this.a=d},
eZa:function eZa(d){this.a=d},
eZm:function eZm(d){this.a=d},
eZ9:function eZ9(d,e){this.a=d
this.b=e},
eZn:function eZn(d){this.a=d},
eZ8:function eZ8(d,e){this.a=d
this.b=e},
eZo:function eZo(d){this.a=d},
eZ7:function eZ7(d){this.a=d},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZ6:function eZ6(d,e){this.a=d
this.b=e},
eZq:function eZq(d){this.a=d},
eZi:function eZi(d){this.a=d},
eZ5:function eZ5(d,e){this.a=d
this.b=e},
eYQ:function eYQ(d,e,f){this.a=d
this.b=e
this.c=f},
eYR:function eYR(d,e,f){this.a=d
this.b=e
this.c=f},
eZ4:function eZ4(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d,e){this.a=d
this.b=e},
fPN:function fPN(d,e){this.a=d
this.b=e},
a0m:function a0m(d,e,f){this.c=d
this.d=e
this.a=f},
aHq:function aHq(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eYB:function eYB(d){this.a=d},
eYC:function eYC(d){this.a=d},
eYD:function eYD(d,e){this.a=d
this.b=e},
eYE:function eYE(d){this.a=d},
eYF:function eYF(d){this.a=d},
eYA:function eYA(d,e){this.a=d
this.b=e},
eYG:function eYG(d,e){this.a=d
this.b=e},
eYH:function eYH(d,e){this.a=d
this.b=e},
flB:function flB(d){this.a=d},
b19:function b19(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aE0:function aE0(d,e,f){this.c=d
this.d=e
this.a=f},
bjW:function bjW(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
efZ:function efZ(d){this.a=d},
efY:function efY(){},
bhz:function bhz(d,e){this.b=d
this.a=e},
fGO:function fGO(d){this.a=d},
fGP:function fGP(){},
fGQ:function fGQ(){},
fGR:function fGR(d){this.a=d},
arS:function arS(d,e){this.a=d
this.b=e},
fGK:function fGK(){},
fGL:function fGL(){},
fP0:function fP0(d,e){this.a=d
this.b=e},
ZK:function ZK(d,e,f){this.c=d
this.d=e
this.a=f},
aBw:function aBw(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dkI:function dkI(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkK:function dkK(d,e){this.a=d
this.b=e},
dkN:function dkN(d){this.a=d},
dkO:function dkO(d,e){this.a=d
this.b=e},
dkM:function dkM(d,e){this.a=d
this.b=e},
dkP:function dkP(d){this.a=d},
dkL:function dkL(d,e){this.a=d
this.b=e},
bsn:function bsn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
efW:function efW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
efX:function efX(d){this.a=d},
fbd:function fbd(d){this.a=d},
fbf:function fbf(d,e){this.a=d
this.b=e},
fbe:function fbe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbc:function fbc(){},
aLU:function aLU(){},
h1k(d){var w,v,u
try{w=A.S.aM(0,d,null)
if(x.f.b(w)){v=B.vX(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b15:function b15(d,e,f){this.c=d
this.d=e
this.a=f},
blv:function blv(d,e){this.c=d
this.a=e},
i4v(d){return A.d.dM(D.Hj,new C.fAb(d),new C.fAc())},
i4w(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Z(D.Hj,new C.fAd(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jF("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lj:function lj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAb:function fAb(d){this.a=d},
fAc:function fAc(){},
fAd:function fAd(d){this.a=d},
mW(d,e,f,g,h){return new C.EF(f,g,d)},
hRt(d){var w=d.z,v=B.S(w).k("Z<1>")
w=B.C(new B.Z(w,new C.fdc(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Ks
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aE,"",d,24,A.bp,A.a7,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f6,j,k,l)},
hnl(d,e){var w
C.hRt(d)
w=A.d.dM($.bDM(),new C.fy1(e),new C.fy2())
$.Ks=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Ks=""}d.z=B.bo(d.z,!0,x.F)},
EF:function EF(d,e,f){this.a=d
this.b=e
this.e=f},
fdc:function fdc(){},
fGg:function fGg(){},
fGh:function fGh(){},
fGi:function fGi(){},
fGt:function fGt(){},
fGy:function fGy(){},
fGz:function fGz(){},
fGA:function fGA(){},
fGB:function fGB(){},
fGC:function fGC(){},
fGD:function fGD(){},
fGE:function fGE(){},
fGj:function fGj(){},
fGk:function fGk(){},
fGl:function fGl(){},
fGm:function fGm(){},
fGn:function fGn(){},
fGo:function fGo(){},
fGp:function fGp(){},
fGq:function fGq(){},
fGr:function fGr(){},
fGs:function fGs(){},
fGu:function fGu(){},
fGv:function fGv(){},
fGw:function fGw(){},
fGx:function fGx(){},
fy1:function fy1(d){this.a=d},
fy2:function fy2(){},
iX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eq(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CX(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aE,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f6,j,k,l)},
bCu(){var w=new B.T(Date.now(),0,!1)
return A.it[B.bI(w)-1]+" "+B.bT(w)+", "+B.bB(w)},
et:function et(d,e,f){this.a=d
this.b=e
this.c=f},
bzV(d){return new B.iR((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hWB(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amZ(A.cF.aL(A.d.gak(d.split(","))))
return w}catch(v){return null}},
hWF(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fl9(),x.dv).aG(0,"\n")},
hWE(d){switch(d.a){case 2:return A.nv
case 1:case 5:return A.f4M
default:return A.TK}},
hWy(d){switch(d.a){case 2:return A.vh
case 1:case 5:return A.VB
default:return A.aaE}},
hWC(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bzV(u),q=(s&255)===0?v:C.bzV(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nw(q,p,A.kT)
w=new B.pC(t,t,t,t)}switch(d.ax.a){case 1:return B.lA(v,v,v,new B.kD(r,w,v,A.abV,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.x5(B.lA(v,v,q,v,p+0.4,v,v,v))
default:return B.lA(v,v,v,new B.kD(r,w,B.vv(4),A.hJ,v),v,v,v,v)}},
hWA(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f6?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hWy(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hWF(d)
t=C.bzV(d.Q)
s=d.x.a>=700?A.eo:A.vV
r=d.y===A.cE?A.ym:A.akl
q=d.z
p=new B.D6(w,l,l,B.fb(u,l,l,l,B.h9(l,t,1===q.a?A.aQ2:A.aQ1,l,l,l,l,l,l,A.du,l,l,v,r,s,l,!0,l,l,l,l),C.hWE(d.as)))
break
case 1:case 4:o=C.hWB(d.at)
n=i===D.lD&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x5(B.fb(w,l,l,l,B.h9(l,A.rH,l,l,l,l,l,l,l,A.du,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HV(o,n?A.abR:A.VZ,l,l)
break
case 3:w=new B.nw(A.IA,1,A.kT)
u=B.vv(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lA(A.vh,B.fb(t,l,l,l,B.h9(l,D.eg8,l,l,l,l,l,l,l,A.du,l,l,11,l,A.eo,l,!0,l,l,l,l),A.nv),l,new B.kD(E.aIh,new B.pC(w,w,w,w),u,A.hJ,l),l,l,l,l)
break
case 2:p=C.hWC(d,e)
break
case 5:p=C.hWz(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.heX(-w,p)
w=i===D.cQ
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.asD(m/255,p)}if(w)return new F.w8(k,l,j,l,new B.Sj(new B.kC(g,g,f,1/0),p))
if(i===D.lc){i=new B.nw(A.IA,1,A.kT)
i=B.lA(A.vh,p,l,new B.kD(A.pg,new B.pC(i,i,i,i),B.vv(4),A.hJ,l),l,l,D.byN,l)}else i=p
return new F.w8(k,l,j,l,new B.fR(g,f,i))},
hWD(d,e,f,g){var w,v=null,u=C.bzV(d.e),t=d.f
t=B.a([F.hdz(t!=null?B.lA(v,v,v,new B.kD(v,v,v,A.hJ,new B.aWz(E.VD,A.aay,B.a([u,C.bzV(t)],x.cR),v)),v,v,v,v):B.lA(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fl8(f,g),B.S(w).k("M<1,fh>")))
return F.cth(t)},
h2z(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h2z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4f(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wv(A.wB,A.Ix,D.bzW,null,null,null,!1,null)
o=new B.BP(o,new C.fGX(607,787,p,d))
o.ML(n,null)
r.push(o)}u=n.js(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2z,v)},
hWz(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h1k(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajO()
if(h==null)h=A.axR
j=B.tC(4279308564)
w=B.vv(18)
v=new B.nw(B.tC(4287531653),3,A.kT)
u=i.length===0?"My links":i
u=B.a([B.x5(B.fb(u,m,m,m,B.h9(m,A.pg,m,m,m,m,m,m,m,A.du,m,m,12,m,A.eo,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x5(B.fb(A.a.i(l.c),m,m,m,D.fcf,m)))
u.push(new B.fR(m,8,m))
for(t=B.d0(h,0,B.dB(8,"count",x.S),B.S(h).c),s=t.$ti,t=new B.bQ(t,t.gK(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tC(4280690220)
o=new B.a9l(8,8)
n=A.a.i(r.b)
u.push(new B.nP(D.bsX,new C.awS(new C.aib(q),B.lA(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.fez,A.nv),m,new B.kD(p,m,new B.aiC(o,o,o,o),A.hJ,m),m,m,D.bzd,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x5(B.fb(k,m,m,m,D.fdO,m))
u.push(new C.awS(C.hw2(k),t))}return B.lA(m,B.yW(u,A.Mb,A.lB),m,new B.kD(j,new B.pC(v,v,v,v),w,A.hJ,m),m,m,D.btN,m)},
fl9:function fl9(){},
fl8:function fl8(d,e){this.a=d
this.b=e},
fGX:function fGX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agU(d){var w,v
for(w=0;w<32;++w){v=D.Ha[w]
if(v.a===d)return v}return null},
hhC(d){var w,v,u=A.a.cD(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aL(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hqv(d,e){return B.a3(d,!1).cg(B.e_(new C.fNq(e),!0,null,x.fB))},
hqu(d,e){return B.bR(A.K,null,new C.fNp(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ew:function Ew(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nx:function Nx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjk:function bjk(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.aa$=f
_.c=_.a=null},
dVk:function dVk(d){this.a=d},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqW:function bqW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXP:function eXP(d,e){this.a=d
this.b=e},
beu:function beu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b__:function b__(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cay:function cay(){},
caz:function caz(d){this.a=d},
caA:function caA(d,e,f){this.a=d
this.b=e
this.c=f},
caB:function caB(d,e,f){this.a=d
this.b=e
this.c=f},
fNq:function fNq(d){this.a=d},
Zh:function Zh(d,e){this.c=d
this.a=e},
azU:function azU(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d9Z:function d9Z(d,e,f){this.a=d
this.b=e
this.c=f},
da3:function da3(d){this.a=d},
da4:function da4(d){this.a=d},
da2:function da2(d){this.a=d},
da5:function da5(d){this.a=d},
da1:function da1(d,e){this.a=d
this.b=e},
da6:function da6(d){this.a=d},
da0:function da0(d){this.a=d},
da7:function da7(d){this.a=d},
da_:function da_(d,e){this.a=d
this.b=e},
da8:function da8(d,e){this.a=d
this.b=e},
fNp:function fNp(d){this.a=d},
fNo:function fNo(d){this.a=d},
fNn:function fNn(d,e,f){this.a=d
this.b=e
this.c=f},
fNm:function fNm(d,e){this.a=d
this.b=e},
aLq:function aLq(){},
ic9(d){return B.bR(A.K,null,new C.fPM(),d,!0,!0,!0,null,!1,!1,x.N)},
fPM:function fPM(){},
ZC:function ZC(d){this.a=d},
bfX:function bfX(d){this.d=d
this.c=this.a=null},
dgL:function dgL(d){this.a=d},
dgM:function dgM(d,e){this.a=d
this.b=e},
dgN:function dgN(d){this.a=d},
hT_(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xM},
i6q(d){var w,v=A.d.gH(d.split("@"))
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
i6p(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.hT_(d)
switch(q){case"shimmer":return B.nT(A.ab0,g,new C.fDD(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.bfk(e,f,p,r),A.az),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dd(C.fUg(g,B.a55(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.x(w*60,v*26))
case"goldframe":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.bf2(e,p,r),A.az),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dd(B.eG(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dk()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fz(e)
u.mK(Math.sin(e)*0.3)
return B.dU(B.fo(A.A,g,r,u,!0),new B.x(w*22,v*12))
case"rays":return new B.an(A.V,r,A.b2,A.r,B.a([B.e2(B.b3(r,r,r,new C.bnN(e,f,p,r),A.az),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.V,r,A.b2,A.r,B.a([B.e2(B.b3(r,r,r,new C.b9Y(e,f,p,r),A.az),!0,r),g],x.p),r)
case"aurora":return new B.an(A.V,r,A.b2,A.r,B.a([B.e2(B.b3(r,r,r,new C.b9C(e,f,p,r),A.az),!0,r),g],x.p),r)
case"velvet":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.buI(e,p,r),A.az),!0,r)],x.p),r)
case"sparkle":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.brJ(e,f,p,r),A.az),!0,r)],x.p),r)
case"sheen":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.bqS(e,p,r),A.az),!0,r)],x.p),r)
case"filigree":return new B.an(A.V,r,A.b2,A.r,B.a([g,B.e2(B.b3(r,r,r,new C.ben(e,p,r),A.az),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bS(0,B.e2(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a4),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fDD:function fDD(d,e){this.a=d
this.b=e},
bfk:function bfk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bf2:function bf2(d,e,f){this.b=d
this.c=e
this.a=f},
bnN:function bnN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9Y:function b9Y(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9C:function b9C(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buI:function buI(d,e,f){this.b=d
this.c=e
this.a=f},
brJ:function brJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqS:function bqS(d,e,f){this.b=d
this.c=e
this.a=f},
ben:function ben(d,e,f){this.b=d
this.d=e
this.a=f},
d9G:function d9G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xD:function xD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fDG(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lc},
i6v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aW(j,new C.fDH())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aQf(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i6u(d,e){var w,v,u,t,s,r=d.db
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
agy(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agy=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fw3(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dG,null,new C.fw4(e),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agy)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h3d(d),$async$agy)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lf(d,"Search states\u2026","",A.ke,"Choose state"),$async$agy)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h26(s)
if(p==null)p=A.d.gH(D.R8)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fDI(p.d)
k=x.u
j=B.a([C.eq(A.bh,!1,4279310375,A.aE,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cD(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CK(i,0.016,D.ld,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CK(0,0.058,D.eP,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CK(0,0.058,D.eP,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KD("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KD("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fZX(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzo("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1e("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1e("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1e("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1e("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzo("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CK(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.eq(A.bh,!1,i,A.aE,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bp,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cl,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fZX(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzo("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hjC("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hjC("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1e("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1e("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzn("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzn("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzo("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KD("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KD("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzn("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzn("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzo("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1e("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzn("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1e("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fZX(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KD("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KD("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BK(null,null,null,null,D.oj,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rz(m,null,0,0,j,n,D.qm,"","","Hati ya Ndoa",D.dg)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
fDH:function fDH(){},
fw3:function fw3(){},
fw4:function fw4(d){this.a=d},
fw1:function fw1(d){this.a=d},
fw2:function fw2(d){this.a=d},
hW2(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hW1(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mO
case"lineThrough":return A.zW
default:return A.aE}},
eq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eI(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hlI(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QT[w]
if(v.b===u)return v}return D.dg},
hSo(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cVj[w]
if(v.b===u)return v}return D.cQ},
hYS(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dkv[w]
if(v.b===u)return v}return D.bg},
rz(d,e,f,g,h,i,j,k,l,m,n){return new C.lL(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hck(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hUo(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hlI(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.O(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.k.O(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.da(n,x.f)
n=B.cE(n,new C.cfZ(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a5(n).k("J.E"))}return C.rz(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hUo(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apC[w]
if(v.b===u)return v}return D.mJ},
BK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.T(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rz(4294967295,null,0,0,null,C.cD(),D.qm,"","","",D.dg)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VX(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hQA(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.O(t),1,120)
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
else{f=J.b6(f,new C.cfM(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cfN(),x.N)
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
g=B.cE(g,new C.cfO(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a5(g).k("J.E"))}return C.BK(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rz(4294967295,a3,0,0,a3,C.cD(),D.qm,"","","",D.dg)],x.g):g,v,p,o,s)},
ky(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hQA(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dlo[w]
if(v.b===u)return v}return D.D2},
cD(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
cgf(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.D3){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.eq(A.L,!1,f.d.l(),A.aE,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aE,"",n,20,A.bp,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cl,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.eq(A.bh,!1,f.d.l(),A.aE,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.eq(A.bh,!0,f.e.l(),A.aE,"",n,20,A.bp,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.eq(A.bh,!1,f.d.l(),A.aE,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.eq(A.bh,!0,t.l(),A.aE,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cQ,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.eq(A.bh,!0,t.l(),A.aE,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.eq(A.L,!1,4294967295,A.aE,"",n,42,A.bp,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cl,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.eq(A.bh,!1,f.d.l(),A.aE,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.eq(A.bh,!1,l,A.aE,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cl,D.f6,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.eq(A.bh,!1,r.l(),A.aE,"",n,20,A.bp,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cl,D.cQ,0.38,0.08,0.26)
q=C.cD()
t=C.eq(A.bh,!1,l,A.aE,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f6,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.eq(A.bh,!1,r.l(),A.aE,"",n,20,A.bp,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cl,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.eq(A.L,!1,f.d.l(),A.aE,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cQ,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aE,"",n,22,A.bp,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.eq(A.bh,!1,f.d.l(),A.aE,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aE,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.eq(A.bh,!1,f.d.l(),A.aE,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cQ,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aE,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hIb(d){return A.d.dM(D.a37,new C.cgg(d),new C.cgh())},
hI8(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aM(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ca(v,C.VX(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fWn(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cgb(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aW(u,new C.cga())
return u},
hcn(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cg6()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
arl(d){return C.hI6(d)},
hI6(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cg9()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2p(m),$async$arl)
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
return B.b(B.az(),$async$arl)
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
case 11:o=l.$1($.hcm.h(0,m))
n=C.fWn(C.fWn(j,r),o)
if(n.length===0){u=C.hcn(C.hcn(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arl,v)},
cg5(d){return C.hI5(d)},
hI5(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cg5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cg5)
case 7:r=f
q=r.ti("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.jV(q,B.S(q).c)
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
return B.i($async$cg5,v)},
b1b(d,e){return C.hI7(d,e)},
hI7(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1b=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1b)
case 6:s=g
q=s.ti("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Ln(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b1b)
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
return B.i($async$b1b,v)},
VY(d,e){return C.hI9(d,e)},
hI9(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VY=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hcl.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arl(a3),$async$VY)
case 5:p=a6
case 4:w=6
return B.b(C.cg5(a3),$async$VY)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("Z<J.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.cgc(o),l),l.k("J.E"))
A.d.aW(e,new C.cgd())
$.hcl.n(0,a0,e)
n=B.S(e).k("M<1,a6<n,@>>")
n=B.C(new B.M(e,new C.cge(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.hcm.n(0,a0,r)
t=8
w=11
return B.b(B.ahl(a0,r),$async$VY)
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
return B.b(B.az(),$async$VY)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VY)
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
return B.i($async$VY,v)},
IP:function IP(d,e){this.a=d
this.b=e},
arj:function arj(d,e){this.a=d
this.b=e},
uM:function uM(d,e){this.a=d
this.b=e},
mC:function mC(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
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
lL:function lL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cg_:function cg_(){},
cg0:function cg0(){},
cfZ:function cfZ(){},
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
cfP:function cfP(){},
cfQ:function cfQ(){},
cfM:function cfM(){},
cfN:function cfN(){},
cfO:function cfO(){},
jF:function jF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cgg:function cgg(d){this.a=d},
cgh:function cgh(){},
cgb:function cgb(d){this.a=d},
cga:function cga(){},
cg6:function cg6(){},
cg7:function cg7(){},
cg8:function cg8(){},
cg9:function cg9(){},
cgc:function cgc(d){this.a=d},
cgd:function cgd(){},
cge:function cge(){},
i6G(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fEf(e,v,d,B.aY(w))
w.$1(new C.fEb())
w.$1(new C.fEc())
w.$1(new C.fEd())
w.$1(new C.fEe())
return v},
fEf:function fEf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEb:function fEb(){},
fEc:function fEc(){},
fEd:function fEd(){},
fEe:function fEe(){},
b18:function b18(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfV:function cfV(d){this.a=d},
cfU:function cfU(){},
cfW:function cfW(){},
cfX:function cfX(d,e){this.a=d
this.b=e},
cfY:function cfY(d){this.a=d},
aou:function aou(d,e){this.c=d
this.a=e},
bj5:function bj5(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dHT:function dHT(){},
aLc:function aLc(){},
cg2(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cg2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.f1Y)
u=!1
w=1
break}u=B.kX(!1,d,t,!1,null,A.a5I,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cg2,v)},
hI3(d){var w=A.d.bf(D.Hj,new C.cg3(d))
if(w<0)return!0
return w>=4},
hI4(d){var w=A.d.bf($.bDM(),new C.cg4(d))
if(w<0)return!0
return w>=5},
cg3:function cg3(d){this.a=d},
cg4:function cg4(d){this.a=d},
i8l(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yL()
$.qk().q_(t,new C.fH3(s),!0)
u=B.a([B.DQ(v,A.qq,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fcI,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.ni,v,v,v),v,v,4,v,4,v))}return new B.an(A.V,v,A.b2,A.r,u,v)},
fH3:function fH3(d){this.a=d},
i7X(){return C.h2s()},
i4U(){return C.bBI()},
i6X(){return C.h2j()},
aPm(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fG9(d,f),$async$aPm)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPm,v)},
fG9(d,e){var w=0,v=B.j(x.H),u
var $async$fG9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzW
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fGa(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fG9)
case 2:return B.h(null,v)}})
return B.i($async$fG9,v)},
fGa:function fGa(d,e){this.a=d
this.b=e},
adk:function adk(d,e,f){this.c=d
this.d=e
this.a=f},
er1:function er1(d,e){this.a=d
this.b=e},
er2:function er2(d,e){this.a=d
this.b=e},
er3:function er3(d,e){this.a=d
this.b=e},
er4:function er4(d){this.a=d},
adB:function adB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b17(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b16(g,m,f,d,e,h,l,k,j,o,i,null)},
hoG(d){return B.cA(new C.fEa(d))},
h2u(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i84(d){if(d===D.cl)return"None"
return C.h2u(d)},
bAr(d,e,f,g){return C.hYZ(d,e,f,g)},
hYZ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAr=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a3(d,!0)
if($.h_f&&t.pC())t.eG()
$.h_f=!0
s.a=null
w=3
return B.b(B.hZ(A.bk,!0,"Animation preview",d,new C.fnH(s,e,g,f),null,A.eL,!0,x.H),$async$bAr)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h_f=!1
case 1:return B.h(u,v)}})
return B.i($async$bAr,v)},
fQA(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fQA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h2u(f)+" Slide transition preview"
s=s?Af.FB:A.vG
w=3
return B.b(C.bAr(d,s,new B.a7(t,t*0.56,B.bv(B.m(14),new C.aIQ(f,null),A.aq),null),r),$async$fQA)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fQA,v)},
hnY(d,e,f){var w,v,u=null,t=A.ct.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dd(f,t)
case 2:case 17:return B.dU(B.dd(f,t),new B.x((1-t)*48,0))
case 3:return B.dU(B.dd(f,t),new B.x(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dd(f,t),new B.x(0,(1-t)*36))
case 5:return B.dU(B.dd(f,t),new B.x(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.dd(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.dd(f,t),1.4-t*0.4,u,u)
case 8:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fz((1-t)*1.2)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 9:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kc((1-t)*1.2)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 10:case 19:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mK((1-t)*0.8)
v=0.6+t*0.4
w.jT(v,v,v,1)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dd(f,t),new B.x((1-t)*24,0))}},
bDg(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h2u(f)+" Element animation preview"
s=s?Af.FB:A.vG
w=3
return B.b(C.bAr(d,s,new B.a7(t,t*0.62,B.bv(B.m(14),new C.azE(f,null),A.aq),null),r),$async$bDg)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDg,v)},
i83(d){var w,v,u,t,s=$.ag_.W(0,d)
if(s!=null){$.ag_.n(0,d,s)
return s}w=A.cF.aL(A.a.b2(d,A.a.cD(d,",")+1))
$.ag_.n(0,d,w)
v=$.h03=$.h03+w.length
u=B.a5($.ag_).k("cr<1>")
for(;;){if(!(v>41943040&&$.ag_.a>1))break
t=new B.cr($.ag_,u).gae(0)
if(!t.C())B.b8(B.ft())
v-=$.ag_.W(0,t.gT(0)).length
$.h03=v}return w},
i7L(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l4(0,d),j=B.C(k,B.a5(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SQ(s,A.u))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SQ(t,A.u))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SQ(u,A.cv))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.d1(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2o(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
m.F(new B.jQ(e))
return m
case"rounded":m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
w=e.gdG()*0.18
m.F(new B.iM(B.bz(e,new B.aQ(w,w))))
return m
case"triangle":m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbN().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bE())
return m
case"hexagon":w=$.X()
m=B.a([],m)
v=new B.aO(w.r,A.ao,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bE())
return v
case"diamond":m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbN().a,e.b))
m.F(new B.ap(e.c,e.gbN().b))
m.F(new B.ap(e.gbN().a,e.d))
m.F(new B.ap(e.a,e.gbN().b))
m.F(new B.bE())
return m
case"arch":m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.bak(new B.x(t,p),new B.aQ(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.X().r,A.ao,n,n,B.a([],m))
m.F(new B.o9(e))
return m}},
fBK(d,e,f){return B.cA(new C.fBL(D.eVf.q(0,d),d,f,e))},
b16:function b16(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cfT:function cfT(d){this.a=d},
cfS:function cfS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfR:function cfR(){},
b13:function b13(d,e){this.b=d
this.a=e},
fEa:function fEa(d){this.a=d},
fE9:function fE9(d,e){this.a=d
this.b=e},
fnH:function fnH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnF:function fnF(d){this.a=d},
fnG:function fnG(d,e){this.a=d
this.b=e},
aIQ:function aIQ(d,e){this.c=d
this.a=e},
bue:function bue(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f5m:function f5m(d,e,f){this.a=d
this.b=e
this.c=f},
aJs:function aJs(d,e){this.b=d
this.a=e},
V4:function V4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjg:function bjg(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dT6:function dT6(d){this.a=d},
dT5:function dT5(d){this.a=d},
dT4:function dT4(d){this.a=d},
IO:function IO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfL:function cfL(d){this.a=d},
cfK:function cfK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azE:function azE(d,e){this.c=d
this.a=e},
bdR:function bdR(){this.d=0
this.c=this.a=null},
d6V:function d6V(d){this.a=d},
d6U:function d6U(d){this.a=d},
a7J:function a7J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjU:function bjU(d,e){var _=this
_.d=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
b_2:function b_2(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bf0:function bf0(d,e,f){this.b=d
this.c=e
this.a=f},
bpP:function bpP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eVs:function eVs(){},
fBL:function fBL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqP:function bqP(d,e,f){this.b=d
this.c=e
this.a=f},
aLp:function aLp(){},
aLS:function aLS(){},
aNa:function aNa(){},
fFa(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fFa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xf.c8().M8(D.div,A.u_,!0),$async$fFa)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i7F(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFa,v)},
i7F(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a81(d,new B.a0_(A.cJ.gct().aL(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i_F(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a81(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cf.KW(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a81(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i_F(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cz_().cKN(B.rj(d,A.i1,o,o),o,o,!1).cMw(0,"word/document.xml")
if(n==null)return""
w=n.cUz()
v=A.cf.KW(0,w==null?$.hr_():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l4(0,r)
p=A.a.i(B.cE(q,new C.fqI(),B.a5(q).k("J.E"),t).hs(0))
if(p.length!==0){q=B.aM(p,"&lt;","<")
q=B.aM(q,"&gt;",">")
q=B.aM(q,"&quot;",'"')
q=B.aM(q,"&apos;","'")
q=B.aM(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a81:function a81(d,e,f){this.a=d
this.b=e
this.c=f},
fqI:function fqI(){},
hIa(d,e,f,g,h,i,j,k,l){return new C.NZ(l,e,d,g,f,i,h,j,k,null)},
NZ:function NZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.bw$=k
_.aa$=l
_.c=_.a=null},
exf:function exf(d){this.a=d},
exd:function exd(){},
exe:function exe(d){this.a=d},
etD:function etD(){},
etE:function etE(){},
etF:function etF(d,e){this.a=d
this.b=e},
evd:function evd(d){this.a=d},
ev1:function ev1(){},
ev2:function ev2(){},
et0:function et0(){},
ewl:function ewl(d){this.a=d},
exb:function exb(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d){this.a=d},
ex_:function ex_(){},
ex0:function ex0(){},
ex1:function ex1(d){this.a=d},
ex2:function ex2(){},
esp:function esp(d){this.a=d},
exc:function exc(){},
euk:function euk(d,e){this.a=d
this.b=e},
esn:function esn(d){this.a=d},
eso:function eso(d){this.a=d},
euH:function euH(d){this.a=d},
euI:function euI(d,e,f){this.a=d
this.b=e
this.c=f},
euJ:function euJ(d){this.a=d},
euj:function euj(){},
eui:function eui(d){this.a=d},
eug:function eug(){},
euf:function euf(d){this.a=d},
euh:function euh(){},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
euq:function euq(d){this.a=d},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
euo:function euo(d){this.a=d},
eup:function eup(d){this.a=d},
eur:function eur(d,e){this.a=d
this.b=e},
esr:function esr(){},
ess:function ess(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euC:function euC(){},
euD:function euD(d,e){this.a=d
this.b=e},
euA:function euA(d,e,f){this.a=d
this.b=e
this.c=f},
euB:function euB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euu:function euu(d,e,f){this.a=d
this.b=e
this.c=f},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
euw:function euw(d){this.a=d},
eux:function eux(d,e){this.a=d
this.b=e},
euy:function euy(d,e){this.a=d
this.b=e},
euz:function euz(d,e){this.a=d
this.b=e},
eut:function eut(d,e){this.a=d
this.b=e},
euF:function euF(d){this.a=d},
euG:function euG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euE:function euE(d){this.a=d},
euX:function euX(){},
euY:function euY(){},
euZ:function euZ(){},
ev_:function ev_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euU:function euU(d){this.a=d},
euW:function euW(){},
euV:function euV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
euS:function euS(d,e,f){this.a=d
this.b=e
this.c=f},
euT:function euT(d,e){this.a=d
this.b=e},
ev0:function ev0(){},
eus:function eus(d,e){this.a=d
this.b=e},
esI:function esI(){},
esJ:function esJ(d,e,f){this.a=d
this.b=e
this.c=f},
esK:function esK(d){this.a=d},
esL:function esL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esH:function esH(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev4:function ev4(d,e){this.a=d
this.b=e},
ev3:function ev3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev7:function ev7(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
esG:function esG(d,e){this.a=d
this.b=e},
esE:function esE(d){this.a=d},
evf:function evf(d,e,f){this.a=d
this.b=e
this.c=f},
esA:function esA(d,e){this.a=d
this.b=e},
esz:function esz(d){this.a=d},
eve:function eve(d,e,f){this.a=d
this.b=e
this.c=f},
esq:function esq(d){this.a=d},
et1:function et1(){},
ewX:function ewX(d,e){this.a=d
this.b=e},
ewY:function ewY(d,e,f){this.a=d
this.b=e
this.c=f},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ern:function ern(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
er6:function er6(d,e){this.a=d
this.b=e},
er8:function er8(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
erP:function erP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
erQ:function erQ(d,e){this.a=d
this.b=e},
erU:function erU(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
erS:function erS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erT:function erT(d){this.a=d},
erR:function erR(){},
erO:function erO(d,e,f){this.a=d
this.b=e
this.c=f},
euR:function euR(d,e){this.a=d
this.b=e},
ex5:function ex5(d){this.a=d},
ex6:function ex6(d,e){this.a=d
this.b=e},
ex7:function ex7(d){this.a=d},
ex8:function ex8(d,e,f){this.a=d
this.b=e
this.c=f},
ex4:function ex4(d){this.a=d},
ewC:function ewC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewB:function ewB(d,e,f){this.a=d
this.b=e
this.c=f},
ewA:function ewA(){},
ewz:function ewz(d,e,f){this.a=d
this.b=e
this.c=f},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewv:function ewv(d,e,f){this.a=d
this.b=e
this.c=f},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewx:function ewx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eww:function eww(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
etu:function etu(d,e){this.a=d
this.b=e},
ewn:function ewn(){},
ewW:function ewW(d,e){this.a=d
this.b=e},
ewU:function ewU(d){this.a=d},
ewV:function ewV(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erh:function erh(d,e,f){this.a=d
this.b=e
this.c=f},
erl:function erl(d,e){this.a=d
this.b=e},
erc:function erc(d,e,f){this.a=d
this.b=e
this.c=f},
erb:function erb(d){this.a=d},
evc:function evc(d,e,f){this.a=d
this.b=e
this.c=f},
ex3:function ex3(d,e,f){this.a=d
this.b=e
this.c=f},
ety:function ety(d,e,f){this.a=d
this.b=e
this.c=f},
etx:function etx(){},
erY:function erY(d,e,f){this.a=d
this.b=e
this.c=f},
erZ:function erZ(d){this.a=d},
er9:function er9(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
err:function err(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
erq:function erq(d){this.a=d},
erE:function erE(d,e){this.a=d
this.b=e},
erp:function erp(d){this.a=d},
erH:function erH(d){this.a=d},
erI:function erI(d){this.a=d},
erJ:function erJ(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erM:function erM(){},
erN:function erN(){},
eru:function eru(d){this.a=d},
erv:function erv(d){this.a=d},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d){this.a=d},
erC:function erC(d){this.a=d},
erD:function erD(d){this.a=d},
erF:function erF(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e,f){this.a=d
this.b=e
this.c=f},
esY:function esY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esX:function esX(d,e,f){this.a=d
this.b=e
this.c=f},
esW:function esW(d,e){this.a=d
this.b=e},
erj:function erj(d,e){this.a=d
this.b=e},
es1:function es1(d){this.a=d},
es0:function es0(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d,e){this.a=d
this.b=e},
esF:function esF(d){this.a=d},
euQ:function euQ(d,e){this.a=d
this.b=e},
euP:function euP(d,e){this.a=d
this.b=e},
euO:function euO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euM:function euM(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
euK:function euK(){},
euL:function euL(){},
ewo:function ewo(){},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewq:function ewq(){},
ewr:function ewr(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
est:function est(){},
esu:function esu(){},
esv:function esv(){},
esy:function esy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esx:function esx(d,e){this.a=d
this.b=e},
esw:function esw(d,e,f){this.a=d
this.b=e
this.c=f},
etZ:function etZ(d){this.a=d},
etY:function etY(){},
eu_:function eu_(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
eu1:function eu1(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
eu2:function eu2(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
etU:function etU(d){this.a=d},
eu4:function eu4(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
eu5:function eu5(d,e){this.a=d
this.b=e},
etS:function etS(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
etR:function etR(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etJ:function etJ(d){this.a=d},
etN:function etN(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
etO:function etO(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etG:function etG(d){this.a=d},
etQ:function etQ(d){this.a=d},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
esV:function esV(d){this.a=d},
esN:function esN(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esO:function esO(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
esQ:function esQ(d){this.a=d},
esR:function esR(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
ex9:function ex9(d){this.a=d},
exa:function exa(d){this.a=d},
eu9:function eu9(d,e){this.a=d
this.b=e},
eu8:function eu8(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
evy:function evy(d,e){this.a=d
this.b=e},
evz:function evz(d){this.a=d},
evA:function evA(d){this.a=d},
evL:function evL(d){this.a=d},
evW:function evW(d){this.a=d},
ew6:function ew6(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewh:function ewh(d,e){this.a=d
this.b=e},
evB:function evB(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(d){this.a=d},
evF:function evF(d){this.a=d},
evG:function evG(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evJ:function evJ(d){this.a=d},
evK:function evK(d){this.a=d},
evM:function evM(d){this.a=d},
evN:function evN(d){this.a=d},
evO:function evO(d){this.a=d},
evP:function evP(d){this.a=d},
evQ:function evQ(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d){this.a=d},
evT:function evT(d){this.a=d},
evU:function evU(d){this.a=d},
evo:function evo(d){this.a=d},
evV:function evV(d){this.a=d},
evw:function evw(d){this.a=d},
evX:function evX(d){this.a=d},
evv:function evv(d,e){this.a=d
this.b=e},
evY:function evY(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
evu:function evu(d,e,f){this.a=d
this.b=e
this.c=f},
evk:function evk(d,e){this.a=d
this.b=e},
evx:function evx(d){this.a=d},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewj:function ewj(d,e){this.a=d
this.b=e},
ew_:function ew_(d,e,f){this.a=d
this.b=e
this.c=f},
evt:function evt(d,e,f){this.a=d
this.b=e
this.c=f},
evj:function evj(d,e,f){this.a=d
this.b=e
this.c=f},
evh:function evh(d,e){this.a=d
this.b=e},
ew0:function ew0(d,e){this.a=d
this.b=e},
evs:function evs(d,e){this.a=d
this.b=e},
evi:function evi(d,e){this.a=d
this.b=e},
evg:function evg(d,e){this.a=d
this.b=e},
ew1:function ew1(d){this.a=d},
evr:function evr(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew3:function ew3(d){this.a=d},
ew4:function ew4(d){this.a=d},
ew5:function ew5(d){this.a=d},
evq:function evq(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew9:function ew9(d,e){this.a=d
this.b=e},
evp:function evp(d){this.a=d},
ewa:function ewa(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
ewc:function ewc(d,e){this.a=d
this.b=e},
evl:function evl(d){this.a=d},
erX:function erX(d,e,f){this.a=d
this.b=e
this.c=f},
erW:function erW(d,e){this.a=d
this.b=e},
ewF:function ewF(d,e){this.a=d
this.b=e},
ewE:function ewE(d,e){this.a=d
this.b=e},
ewG:function ewG(d,e){this.a=d
this.b=e},
ewD:function ewD(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
et3:function et3(d){this.a=d},
et5:function et5(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
etC:function etC(){},
etB:function etB(){},
ewS:function ewS(d){this.a=d},
ewR:function ewR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewP:function ewP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewH:function ewH(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewN:function ewN(d,e){this.a=d
this.b=e},
ewO:function ewO(d,e){this.a=d
this.b=e},
ewT:function ewT(d){this.a=d},
esm:function esm(d){this.a=d},
esl:function esl(d,e,f){this.a=d
this.b=e
this.c=f},
esk:function esk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es9:function es9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
esa:function esa(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
esc:function esc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es8:function es8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esd:function esd(d,e){this.a=d
this.b=e},
esf:function esf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ese:function ese(d,e){this.a=d
this.b=e},
esg:function esg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es7:function es7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esh:function esh(d,e){this.a=d
this.b=e},
es6:function es6(d,e){this.a=d
this.b=e},
esi:function esi(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
eud:function eud(d){this.a=d},
euc:function euc(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
etk:function etk(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
etl:function etl(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
etn:function etn(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
eto:function eto(d,e,f){this.a=d
this.b=e
this.c=f},
etc:function etc(d,e){this.a=d
this.b=e},
etp:function etp(d,e,f){this.a=d
this.b=e
this.c=f},
etb:function etb(d,e){this.a=d
this.b=e},
etq:function etq(d,e){this.a=d
this.b=e},
eta:function eta(d,e,f){this.a=d
this.b=e
this.c=f},
et7:function et7(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
et9:function et9(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
et8:function et8(d,e,f){this.a=d
this.b=e
this.c=f},
et6:function et6(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etw:function etw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er5:function er5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eva:function eva(d,e){this.a=d
this.b=e},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d,e){this.a=d
this.b=e},
af6:function af6(d,e,f){this.a=d
this.b=e
this.c=f},
az_:function az_(d,e){this.c=d
this.a=e},
bcD:function bcD(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b4$=e
_.c=_.a=null},
d2z:function d2z(d){this.a=d},
d2y:function d2y(d){this.a=d},
bcR:function bcR(d,e){this.c=d
this.a=e},
d2V:function d2V(d){this.a=d},
d2W:function d2W(d){this.a=d},
JQ:function JQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcC:function bcC(){this.d=!1
this.c=this.a=null},
d2w:function d2w(d){this.a=d},
d2s:function d2s(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d,e){this.a=d
this.b=e},
PE:function PE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_u:function a_u(d,e,f){this.c=d
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
_.bw$=e
_.aa$=f
_.c=_.a=null},
exQ:function exQ(){},
exG:function exG(d){this.a=d},
exP:function exP(d){this.a=d},
exH:function exH(d){this.a=d},
exI:function exI(d){this.a=d},
exC:function exC(d){this.a=d},
exD:function exD(d,e){this.a=d
this.b=e},
exE:function exE(d){this.a=d},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
exN:function exN(){},
exO:function exO(d){this.a=d},
exJ:function exJ(d){this.a=d},
exK:function exK(d){this.a=d},
exL:function exL(d){this.a=d},
exM:function exM(d){this.a=d},
exR:function exR(d,e,f){this.a=d
this.b=e
this.c=f},
exT:function exT(d,e){this.a=d
this.b=e},
exS:function exS(d){this.a=d},
JW:function JW(d,e){this.c=d
this.a=e},
brj:function brj(d,e){this.b=d
this.a=e},
bht:function bht(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhs:function bhs(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aK9:function aK9(){},
aM2:function aM2(){},
bwZ:function bwZ(){},
aM3:function aM3(){},
fH4(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fH4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xf.c8().M8(B.a(["pdf"],x.s),A.u_,!0),$async$fH4)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boy(s,"data:application/pdf;base64,"+A.cJ.gct().aL(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fH4,v)},
i8f(d){var w,v,u,t,s,r
try{w=B.jr(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l4(0,w).gK(0)
if(t>0){s=J.aQI(t,1,200)
return s}}catch(r){}return 1},
fGW(d){return C.i8e(d)},
i8e(d){var w=0,v=B.j(x.T),u
var $async$fGW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGW,v)},
bCt(d,e,f,g){return C.i8o(d,e,f,g)},
i8o(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCt=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hpg(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jL(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jL(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jL(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jL(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.qp()
f=B.B8(g,null)
a7=B.N()
a7.r=A.qU.gp(0)
f.b1(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bV
b1.e=A.hr
b1.b=A.ag
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.x((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.L()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.or()
w=7
return B.b(a3.zq(800,h),$async$bCt)
case 7:a4=c1
a3.t()
w=8
return B.b(a4.hu(A.h4),$async$bCt)
case 8:a5=c1
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eV(A.dC.gaP(a5))
a7=A.cJ.gct().aL(a7)
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
return B.i($async$bCt,v)},
aPV(d,e,f){return C.i8c(d,e,f)},
i8c(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahz(d,e,f,new C.fGU(r,q),q,"Sign document"),$async$aPV)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCt(q,t,r.b,r.c),$async$aPV)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1a(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPV,v)},
i8m(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hip(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hip(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.aY(A.o.fV(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.aY(A.o.fV(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aM(n,"&",h)
n=B.aM(n,"<",g)
n=B.aM(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aM(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lD&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aM(p,"&",h)
p=B.aM(p,"<",g)
p=B.aM(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aM(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hi0(q.ay)+";border:2px solid "+C.hi0(q.ch)+'"></div>'
break
case 5:l=C.h1k(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aM(n,"&",h)
n=B.aM(n,"<",g)
n=B.aM(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aM(n,'"',e)+"</div>")
p=p?null:l.gajO()
if(p==null)p=A.axR
n=B.S(p)
k=n.k("lP<1>")
j=new B.lP(p,0,8,k)
j.vf(p,0,8,n.c)
j=new B.bQ(j,j.gK(0),k.k("bQ<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aM(p,"&",h)
p=B.aM(p,"<",g)
p=B.aM(p,">",f)
p=B.aM(p,'"',e)
n=B.aM(i,"&",h)
n=B.aM(n,"<",g)
n=B.aM(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aM(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hi0(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hip(d){var w=B.aM(d,"&","&amp;")
w=B.aM(w,"<","&lt;")
w=B.aM(w,">","&gt;")
return B.aM(w,'"',"&quot;")},
bCr(d,e){var w=0,v=B.j(x.H)
var $async$bCr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cd(null,null,!0,null,new C.fH2(e,C.i8m(e),d),d,null,!0,!0,x.H),$async$bCr)
case 2:return B.h(null,v)}})
return B.i($async$bCr,v)},
bCs(){var w=0,v=B.j(x.T),u,t,s
var $async$bCs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.GH(92,2400),$async$bCs)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fGW(s),$async$bCs)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCs,v)},
aPW(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h2z(d),$async$aPW)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aM(s,r,"_"))
u=Z.fJv(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPW,v)},
hcj(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b1a:function b1a(d,e,f){this.a=d
this.b=e
this.c=f},
fGU:function fGU(d,e){this.a=d
this.b=e},
fH2:function fH2(d,e,f){this.a=d
this.b=e
this.c=f},
fH_:function fH_(d){this.a=d},
fH0:function fH0(d,e,f){this.a=d
this.b=e
this.c=f},
fH1:function fH1(d,e,f){this.a=d
this.b=e
this.c=f},
i8d(d){return C.ky(d.w)},
i8k(d){var w,v,u,t
if(d.length===0||!A.d.d8(d,C.ia3()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yH(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aM(w.toUpperCase(),v,"")
w=$.hv2()
if(w.b.test(u))return u
return null},
hpi(d,e,f){var w,v,u=C.hDP(d),t=$.px()
for(w=0;w<80;++w){v=u+A.a.aY(A.o.u(t.ar(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
i8q(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.f5(w,d.b);v.C();){u=w.gT(w).y
t=C.yH(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fGS(d,e){var w,v=d.y,u=C.yH(v==null?"":v)
if(u!=null)return d.y=u
w=C.i8q(new B.Z(e,new C.fGT(d),B.S(e).k("Z<1>")))
v=d.x
return d.y=C.hpi(v==null?"":v,null,w)},
i8p(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.ky(w.w))return null
v=w.y
return C.yH(v==null?"":v)},
hIc(){var w,v=$.px(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"SL"+A.d.hs(u)},
W0(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$W0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c5(),$async$W0)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$W0)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
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
return B.i($async$W0,v)},
W1(d){return C.hId(d)},
hId(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$W1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c5(),$async$W1)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.T(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,A.cG,null),$async$W1)
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
return B.i($async$W1,v)},
a83(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a83=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c5(),$async$a83)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.W0(),$async$a83)
case 4:s=a6
r=C.yH(a2==null?"":a2)
if(r==null)r=a3!=null?C.hpi(a3,null,A.J_):null
q=x.N
p=B.aY(q)
for(o=J.dm(s),n=J.aW(o.gib(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yH(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdR(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aL(t)
g.n(0,"payload",A.cJ.gct().aL(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.T(Date.now(),0,!1).a7().ac())
if(D.Tm.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yH(J.k(q==null?"":q))
if(f==null)f=C.hco(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.W1(s),$async$a83)
case 7:u=new B.aFT(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hIc()
n=r==null
d=n?C.hco(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aL(t)
q.n(0,"payload",A.cJ.gct().aL(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.T(Date.now(),0,!1).a7().ac())
if(D.Tm.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.W1(s),$async$a83)
case 8:u=new B.aFT(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a83,v)},
hco(d){var w,v,u=$.px()
for(w=0;w<200;++w){v="SL"+A.a.aY(A.o.u(u.ar(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
arn(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c5(),$async$arn)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.W0(),$async$arn)
case 6:t=f
s=J.a4(t)
r=s.gK(t)
s.bs(t,new C.cgi(q))
w=s.gK(t)!==r?7:8
break
case 7:w=9
return B.b(C.W1(t),$async$arn)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arn,v)},
arm(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yH(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c5(),$async$arm)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.W0(),$async$arm)
case 6:t=o.jP(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yH(J.k(q==null?"":q))===p){u=C.a82(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arm,v)},
a82(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a82=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c5(),$async$a82)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.W0(),$async$a82)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cf.cz(0,A.cF.aL(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Tm.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aM(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.S.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.T(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=7
return B.b(C.W1(p),$async$a82)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a82,v)},
i8j(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.T(Date.now(),0,!1).a7().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.S(d).k("M<1,a6<n,@>>")
w=B.C(new B.M(d,new C.fGZ(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fH6(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.T(Date.now(),0,!1).a7().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.i8j(d==null?B.a([],x.D):d,f,g),null)},
fH5(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fH5=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a83(h,d,e,f,g),$async$fH5)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yH(e==null?"":e)
u=new B.aFF(s,t)
w=1
break}t=A.dK.aL(h)
t=A.kp.gct().aL(t)
u=new B.aFF(C.yH(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fH5,v)},
h2B(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d2(q,"{"))try{w=A.S.aM(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i8n(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h2B(v))return v
u=A.a.cD(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b2(v,u))
if(C.h2B(t))return t}s=A.a.cD(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b2(v,s))
if(C.h2B(t))return t}}return null},
fGV(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.S.aM(0,A.cf.cz(0,A.cF.aL(J.na(t,8))),null))
else w=v.a(A.S.aM(0,t,null))
v=C.hRU(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahk(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arm(t[1]),$async$ahk)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGV(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yH(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arm(r),$async$ahk)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGV(s)
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
return B.b(C.a82(t[1]),$async$ahk)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGV(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fGV(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahk,v)},
hRU(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Tm.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h2y(C.VX(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cE(t,new C.fdG(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a5(t).k("J.E"))
return t}return B.a([],x.D)},
h2y(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.j3
$.j3=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VX(B.a2(o,x.N,x.z))
if(e&&C.ky(p.w))p.Q=new B.T(Date.now(),0,!1).a7().bS(144e8).ac()
return p},
bCc(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GG(),$async$bCc)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahk(s),$async$bCc)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCc,v)},
fPP(d){var w=0,v=B.j(x.T),u,t
var $async$fPP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.X9,!0,"Dismiss",d,new C.fPQ(),new C.fPR(),A.Fz,!0,x.N),$async$fPP)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.f06)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPP,v)},
icc(d,e,f,g,h){return B.a3(d,!1).cg(B.e_(new C.fPS(h,e,g,f),!0,null,x.H))},
fGT:function fGT(d){this.a=d},
cgi:function cgi(d){this.a=d},
fGZ:function fGZ(){},
fdG:function fdG(d){this.a=d},
fPQ:function fPQ(){},
fPR:function fPR(){},
fPS:function fPS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VZ:function VZ(d,e,f,g,h){var _=this
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
exm:function exm(){},
exi:function exi(d,e){this.a=d
this.b=e},
exl:function exl(d,e){this.a=d
this.b=e},
exj:function exj(d){this.a=d},
exk:function exk(d){this.a=d},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exr:function exr(d){this.a=d},
exs:function exs(d){this.a=d},
exq:function exq(d){this.a=d},
ext:function ext(d){this.a=d},
exp:function exp(d){this.a=d},
exu:function exu(d,e){this.a=d
this.b=e},
exh:function exh(d,e){this.a=d
this.b=e},
exg:function exg(d,e){this.a=d
this.b=e},
W_:function W_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bke:function bke(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
exv:function exv(d,e){this.a=d
this.b=e},
exw:function exw(d){this.a=d},
exx:function exx(){},
exy:function exy(d){this.a=d},
exz:function exz(d,e){this.a=d
this.b=e},
aEm:function aEm(d){this.a=d},
aEn:function aEn(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
er_:function er_(d){this.a=d},
eqZ:function eqZ(){},
er0:function er0(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqV:function eqV(){},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d){this.a=d},
buz:function buz(){},
aro:function aro(d){this.a=d},
aEq:function aEq(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
exB:function exB(d){this.a=d},
exA:function exA(d){this.a=d},
hX7(){var w,v,u,t
for(v=0;v<4;++v){w=D.d6Z[v]
try{if(Ac.bY2(w)){u=w
return u}}catch(t){}}return null},
Rd(d,e){return C.i54(d,e)},
i54(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Rd=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hX7()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oj?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qC(c6,!0)
b6.toString
p=B.a3(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eK(b8,b9)
n=new B.eK("Getting ready\u2026",b9)
m=new B.eK(0,b9)
l=B.or(new C.fBd(c2,b7,o),!1,!1)
b6.lS(0,l)
b9=x.H
B.cd(null,A.dc,!1,null,new C.fBe(n,m),c6,null,!0,!0,b9)
k=new C.fBi(b7)
j=new C.fBj()
i=null
t=4
b3=c2.a
h=Aj.aSc(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fSI(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aX7(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HX.yv(i,"dataavailable",new C.fBf(e))
d=new B.bX(new B.bg($.bA,x.dT),x.b2)
A.HX.yv(i,"stop",new C.fBg(d))
J.ahU(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Rd)
case 8:w=7
return B.b(c5.$1(d0),$async$Rd)
case 7:a0=d0
J.fSK(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahU(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahU(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Rd)
case 15:w=14
return B.b(c5.$1(d0),$async$Rd)
case 14:a0=d0
case 13:J.fSK(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahU(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.T(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fSK(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$Rd)
case 18:w=16
break
case 17:J.ahU(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahU(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d9(0,A.o0),$async$Rd)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hR(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aM(c3,b3,"_"))
c0=B.nb(a7)
c0.download=B.u(J.ad(a9)===0?"presentation":a9)+"."+B.u(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lk(b0)
J.m1(b0)
B.bN(A.pU,new C.fBh(a7),b9)
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
J.m1(l)
if(p.pC())p.eG()
c3=o
b3=$.ax()
c3.si2(b3)
J.aQM(c3,0)
c3=n
c3.si2(b3)
J.aQM(c3,0)
c3=m
c3.si2(b3)
J.aQM(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rd,v)},
fBd:function fBd(d,e,f){this.a=d
this.b=e
this.c=f},
fBc:function fBc(){},
fBe:function fBe(d,e){this.a=d
this.b=e},
fBi:function fBi(d){this.a=d},
fBj:function fBj(){},
fBf:function fBf(d){this.a=d},
fBg:function fBg(d){this.a=d},
fBh:function fBh(d){this.a=d},
buL:function buL(d,e,f){this.c=d
this.d=e
this.a=f},
f7O:function f7O(){},
f7P:function f7P(){},
cgE(d){var w=0,v=B.j(x.at),u,t,s
var $async$cgE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arw(d,A.zD),$async$cgE)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bz(new B.T(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgE,v)},
cgD(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7K:function a7K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjY:function bjY(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eg6:function eg6(d){this.a=d},
eg4:function eg4(d){this.a=d},
eg5:function eg5(d,e){this.a=d
this.b=e},
a8E:function a8E(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ow$=k
_.ox$=l
_.oy$=m
_.nQ$=n},
a8F:function a8F(d,e){this.a=d
this.b=e},
b2P:function b2P(){},
ciQ:function ciQ(){},
ciR:function ciR(){},
ciS:function ciS(d,e,f,g,h,i,j,k,l){var _=this
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
hw2(d){return new C.aib(d)},
a2P:function a2P(){},
aib:function aib(d){this.a=d},
aR6:function aR6(){},
awS:function awS(d,e){this.d=d
this.b=e
this.a=null},
aSD:function aSD(d){this.b=d
this.a=null},
fwn(d,e){var w=0,v=B.j(x.H)
var $async$fwn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxG().LS(d,e),$async$fwn)
case 2:B.fJB()
return B.h(null,v)}})
return B.i($async$fwn,v)},
hmy(d,e){return(A.rt[(d^e)&255]^A.o.aC(d,8))>>>0},
ftD(d,e,f,g,h,i){var w=C.i1q(d,A.de,f,null,A.cX,g,h,i)
return w},
hor(d){var w=F.hp9(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hDP(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pc.h(0,w)
if(v!=null)return v
for(u=A.pc.gdR(A.pc),u=u.gae(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aM(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hoz(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.dbA[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAo(d,e){return C.hYU(d,e)},
hYU(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAo=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hR([d],"application/pdf")
n=x.z
q=B.aUh(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cz(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.k2(o,"share",[p]),x.H),$async$bAo)
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
return B.i($async$bAo,v)},
h2s(){var w=0,v=B.j(x.y),u,t,s
var $async$h2s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fla
s=$.bzW
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAo(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2s,v)},
bBI(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fla
l=$.bzW
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hj4()?3:4
break
case 3:w=5
return B.b(C.bAo(m,k),$async$bBI)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzX
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
J.Lk(q)
w=10
return B.b(B.bN(A.a2,null,x.H),$async$bBI)
case 10:J.m1(q)
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
return B.i($async$bBI,v)},
h2j(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h2j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzX
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lJ.qQ(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h2j,v)},
h2A(d,e){var w=0,v=B.j(x.H),u,t
var $async$h2A=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hR([d],"text/html"))
t.toString
u=window
u.toString
A.lJ.qQ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h2A,v)},
b1M(d,e){var w=0,v=B.j(x.y),u
var $async$b1M=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1O(d,e),$async$b1M)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1N(d),$async$b1M)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1M,v)}},D,H,K,Am,A9,X,Y,V,G,F,E,W,Q,Z,A_,An,Ao,A0,Ap,Aa,L,Aq,A1,O,A2,M,Ab,Ar,As,P,A3,At,Ac,Ad,Au,Ae,Af,Ag,Av,Aw,R,Ax,I,Ay,S,T,Az,N,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Ah=c[196]
A7=c[68]
Ai=c[51]
Aj=c[59]
U=c[212]
A8=c[54]
Ak=c[138]
Al=c[222]
C=a.updateHolder(c[4],C)
D=c[210]
H=c[92]
K=c[128]
Am=c[37]
A9=c[214]
X=c[211]
Y=c[125]
V=c[200]
G=c[180]
F=c[32]
E=c[213]
W=c[115]
Q=c[140]
Z=c[29]
A_=c[168]
An=c[224]
Ao=c[176]
A0=c[103]
Ap=c[133]
Aa=c[112]
L=c[215]
Aq=c[124]
A1=c[62]
O=c[190]
A2=c[77]
M=c[150]
Ab=c[113]
Ar=c[91]
As=c[217]
P=c[117]
A3=c[132]
At=c[90]
Ac=c[55]
Ad=c[186]
Au=c[36]
Ae=c[75]
Af=c[139]
Ag=c[221]
Av=c[223]
Aw=c[220]
R=c[69]
Ax=c[218]
I=c[165]
Ay=c[177]
S=c[49]
T=c[216]
Az=c[225]
N=c[197]
A4=c[219]
A5=c[108]
A6=c[58]
C.nY.prototype={
v6(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tU(t,v)
return new C.nY(t===0?!1:w,v,t)},
bLT(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D1()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tU(w,u)
return new C.nY(r===0?!1:s,u,r)},
bMo(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D1()
w=o-d
if(w<=0)return p.a?$.h41():$.D1()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tU(w,u)
q=new C.nY(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2C())
return q},
dZ(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bLT(v)
u=w+v+1
t=new Uint16Array(u)
C.hfE(r.b,w,e,t)
w=r.a
s=C.tU(u,t)
return new C.nY(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bMo(v)
t=w-v
if(t<=0)return n.a?$.h41():$.D1()
s=n.b
r=new Uint16Array(t)
C.hNS(s,w,e,r)
w=n.a
q=C.tU(t,r)
p=new C.nY(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dZ(1,u)-1)!==0)return p.aF(0,$.a2C())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2C())}return p},
aK(d,e){var w,v=this.a
if(v===e.a){w=C.cGR(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8h(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8h(t,e)
if(s===0)return $.D1()
if(r===0)return t.a===e?t:t.v6(0)
w=s+1
v=new Uint16Array(w)
C.hNQ(t.b,s,d.b,r,v)
u=C.tU(w,v)
return new C.nY(u===0?!1:e,v,u)},
Hn(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D1()
w=d.c
if(w===0)return t.a===e?t:t.v6(0)
v=new Uint16Array(s)
C.b9R(t.b,s,d.b,w,v)
u=C.tU(s,v)
return new C.nY(u===0?!1:e,v,u)},
byS(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tU(r,u)
return new C.nY(!1,u,s)},
byR(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tU(u,r)
return new C.nY(!1,r,v)},
byT(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tU(p,m)
return new C.nY(s!==0,m,s)},
US(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D1()
w=t.a
if(w===e.a){if(w){w=$.a2C()
return t.Hn(w,!0).byT(e.Hn(w,!0),!0).a8h(w,!0)}return t.byS(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byR(v.Hn($.a2C(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8h(e,v)
if(C.cGR(u.b,t,e.b,w)>=0)return u.Hn(e,v)
return e.Hn(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v6(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8h(e,v)
if(C.cGR(u.b,t,e.b,w)>=0)return u.Hn(e,v)
return e.Hn(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D1()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hfF(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tU(w,t)
return new C.nY(q===0?!1:r,t,q)},
bLS(d){var w,v,u,t
if(this.c<d.c)return $.D1()
this.aRv(d)
w=$.fYk.c8()-$.axB.c8()
v=C.fYm($.fYj.c8(),$.axB.c8(),$.fYk.c8(),w)
u=C.tU(w,v)
t=new C.nY(!1,v,u)
return this.a!==d.a&&u>0?t.v6(0):t},
coa(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRv(d)
w=C.fYm($.fYj.c8(),0,$.axB.c8(),$.axB.c8())
v=C.tU($.axB.c8(),w)
u=new C.nY(!1,w,v)
if($.fYl.c8()>0)u=u.mq(0,$.fYl.c8())
return t.a&&u.c>0?u.v6(0):u},
aRv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hfB&&d.c===$.hfD&&g.b===$.hfA&&d.b===$.hfC)return
w=d.b
v=d.c
u=16-A.o.gakc(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hfz(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hfz(g.b,f,u,r)}else{r=C.fYm(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fYn(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cGR(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9R(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9R(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hNR(p,r,i);--o
C.hfF(h,j,0,r,o,s)
if(r[i]<h){m=C.fYn(j,s,o,n)
C.b9R(r,l,n,m,r)
while(--h,r[i]<h)C.b9R(r,l,n,m,r)}--i}$.hfA=g.b
$.hfB=f
$.hfC=w
$.hfD=v
$.fYj.b=r
$.fYk.b=l
$.axB.b=s
$.fYl.b=u},
gX(d){var w,v,u,t=new C.cGS(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cGT().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nY&&this.aK(0,e)===0},
tj(d,e){return this.aK(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
v1(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakc(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aC(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cGU(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cGV(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lc(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v6(0):r
while(v.c>1){u=$.hsY()
if(u.c===0)B.b8(D.b56)
t=v.coa(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLS(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hs(0)},
$iaRQ:1,
$ihL:1}
C.aRg.prototype={
M(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gK(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cMw(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gak(d){return A.d.gak(this.a)},
gal(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k4(w,w.length,B.S(w).k("k4<1>"))}}
C.RS.prototype={
cUz(){var w,v
if(this.as==null)this.bcL()
w=this.as
v=w==null?null:w.ap_()
return v==null?null:v.eM()},
bcL(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ap_().eM()
this.as=new C.bOR(v)}},
gY(d){return this.at}}
C.a3N.prototype={
a3(){return"CompressionType."+this.b}}
C.bHk.prototype={
eA(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dZ(v,u)+(s.b&A.zc[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dZ(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fI(u,t)&A.zc[d])
s.c=t}return v}}
C.bFF.prototype={
cKM(d,e){var w,v,u,t,s,r=this,q=new C.bHk(d)
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
t=r.cms(q)
if(t<0)return!1
if(t===0){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
s=r.cmv(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
return!0}}return!0},
cms(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eA(8)
if(t!==D.dnV[u])v=!1
if(t!==D.d0m[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cmv(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eA(1),d2=((d3.eA(8)<<8|d3.eA(8))<<8|d3.eA(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1G()
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
u[w]=l}c9.fr=B.c3(6,$.hr3(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eA(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eA(1)===0)break
i=d3.eA(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hr2()
u=x.an
c9.y=B.c3(6,v,!1,u)
c9.z=B.c3(6,v,!1,u)
c9.Q=B.c3(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bY5(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atV(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atV(d3)}while(a3===0||a3===1);++a5
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
a3=c9.atV(d3)
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
d4.bI(c3)
c1=(c1<<8^D.Hq[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hs[b9];++b9
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
if(b8===0){b8=D.Hs[b9];++b9
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
if(b8===0){b8=D.Hs[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hs[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hs[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bI(c3)
c1=c1<<8^D.Hq[c1>>>24&255^v];--c2}d4.bI(c3)
c1=(c1<<8^D.Hq[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bI(c7)
c1=(c1<<8^D.Hq[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bI(c7)
c1=(c1<<8^D.Hq[c1>>>24&255^c7&255])>>>0
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
atV(d){var w,v,u,t,s=this,r=s.ay
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
bY5(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1G(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cz0.prototype={
aHU(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bPl(e)
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
if(w>0)e.aHX(w,!1)
r.cmQ(e)
q=r.r
v=r.f
u=e.aKW(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aO()!==33639248)break
s=new C.b8z()
s.cUy(0,u,e,f)
q.push(s)}},
cmQ(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7V(20,r)
if(w.aO()!==117853008){d.c=s
return}w.aO()
v=w.t7()
w.aO()
d.c=v
if(d.aO()!==101075792){d.c=s
return}d.t7()
d.aZ()
d.aZ()
d.aO()
d.aO()
d.t7()
d.t7()
u=d.t7()
t=d.t7()
this.f=u
this.r=t
d.c=s},
bPl(d){var w,v,u,t,s,r,q,p,o,n
if(d.gK(0)<=4)return-1
w=d.c
v=d.gK(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7V(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alW(A.i1)
o.aMc(r.eM(),A.i1,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aO()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cyZ.prototype={}
C.axf.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cz1.prototype={
aHU(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aO()!==67324752)return
e.aZ()
o.b=e.aZ()
w=D.aEp.h(0,e.aZ())
o.c=w==null?D.M5:w
o.d=e.aZ()
o.e=e.aZ()
o.f=e.aO()
o.r=e.aO()
o.w=e.aO()
v=e.aZ()
u=e.aZ()
o.x=e.anK(v)
o.y=e.he(u).eM()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aVn:D.DX
o.ay=f
o.Q=e.he(t)
if(o.at!==D.DX&&u>2){w=o.y
w.toString
s=B.rj(w,A.i1,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aZ()===39169){s.aZ()
s.aZ()
s.anK(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aZ()
o.at=D.aVo
o.ax=new C.cyZ(r,q)
w=D.aEp.h(0,q)
o.c=w==null?D.M5:w}}}if((o.b&8)!==0){p=e.aO()
if(p===134695760)o.f=e.aO()
else o.f=p
o.r=e.aO()
o.w=e.aO()}},
gK(d){return this.bmp().length},
ap_(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rj(new Uint8Array(0),A.i1,q,q)
w=r.at
if(w!==D.DX)if(p.gK(0)<=0)r.at=D.DX
else{if(w===D.aVn){p=r.bKa(p)
r.Q=p}else if(w===D.aVo){p=r.bJO(p)
r.Q=p}r.at=D.DX}w=r.c
if(w===D.agZ){v=p.c
u=B.dj()
p=r.Q
if(p.gK(0)<=524288e3)u.b=A.pz.BA(p.eM(),!0,!1)
else{t=B.a8t(A.i1,r.w)
p=r.Q
p.toString
A.pz.a42(p,t,!0,!1)
u.b=t.GW()}r.Q.c=v
return B.rj(u.bj(),A.i1,q,q)}else if(w===D.ah_){s=B.a8t(A.i1,32768)
p=r.Q
v=p.c
C.hwd().cKM(p,s)
u=s.GW()
r.Q.c=v
return B.rj(u,A.i1,q,q)}else return B.rj(p.eM(),A.i1,q,q)},
bmp(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eM()},
u(d){return this.x},
b8D(d){var w=this.ch,v=C.JM(C.hmy(w[0].O(0),d))
w[0]=v
v=w[1].ad(0,v.US(0,C.JM(255)))
w[1]=v
w[1]=v.aI(0,C.JM(134775813)).ad(0,C.JM(1)).US(0,C.JM(4294967295))
w[2]=C.JM(C.hmy(w[2].O(0),w[1].mq(0,24).O(0)))},
aQU(){var w=(this.ch[2].US(0,C.JM(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bKa(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rj(new Uint8Array(0),A.i1,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8D(u[v.c++]^r.aQU())}t=r.Q.eM()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQU()
r.b8D(s)
u&2&&B.aj(t)
t[w]=s}return B.rj(t,A.i1,q,q)},
bJO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.he(8).eM()
v=16}else if(k===2){w=d.he(12).eM()
v=24}else{w=d.he(16).eM()
v=32}u=d.he(2).eM()
t=d.he(d.gK(0)-10)
s=d.he(10)
r=t.eM()
k=this.ay
k.toString
q=C.hNx(k,w,v)
p=new Uint8Array(B.cf(A.aH.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aH.du(q,v,k)))
if(!C.hf3(A.aH.du(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bEf(k,new Uint8Array(16),p)
k=x.S
m=J.a5d(0,k)
m=n.r=new C.ciF(m)
m.c=!0
m.b=m.blI(!0,new C.asV(p))
if(m.c)m.d=B.bo(D.og,!0,k)
else m.d=B.bo(D.z2,!0,k)
l=C.hdg(C.hdi(),64)
l.bf7(new C.asV(o))
n.w=l
n.cU8(r,0,r.length)
k=s.eM()
m=n.x
m===$&&B.c()
if(!C.hf3(k,m))throw B.V(B.fm("macs don't match"))
return B.rj(r,A.i1,null,null)}}
C.b8z.prototype={
cUy(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.anK(w)
if(v>0){t=e.he(v).eM()
n.ax=t
if(v>=4){s=B.rj(t,A.i1,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aZ()
p=s.aZ()
o=s.a7V(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t7()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t7()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t7()
p-=8}if(p>=4&&n.y===65535)n.y=o.aO()}}}}if(u>0)e.anK(u)
f.c=n.as
t=new C.cz1(D.M5,n,D.DX,B.a([C.JM(0),C.JM(0),C.JM(0)],x.f3))
n.ch=t
t.aHU(0,f,g)},
u(d){return this.at}}
C.cz_.prototype={
cKN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cz0(B.a([],x.fT))
this.a=g
g.aHU(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aRg(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RS(o,A.o.an(Date.now(),1000),0):C.h5r(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h5r(o,q.w,q)
if(k.as==null)k.bcL()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alW(A.i1)
j.aMc(o,A.i1,h,h)}i=j==null?h:j.eM()
if(i!=null)new B.G4(!1).DA(i,0,h,!0)}}return v}}
C.bEf.prototype={
cU8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cv(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hvX(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bND(u,0,w,0,o)}else{o===$&&B.c()
q.bKe(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lc(w,0)
m.x=A.aH.du(m.x,0,10)
w=m.w
l=w.a
l.jO(0)
w=w.d
w===$&&B.c()
l.Cv(0,w,0,w.length)
return f}}
C.ciK.prototype={}
C.ciO.prototype={}
C.ciI.prototype={}
C.asV.prototype={}
C.ciN.prototype={
cL1(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e6(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bf7(new C.asV(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOH(n.a,n.b,t,s,r)
r+=v}A.aH.hg(f,g,g+w,s)
return o.a.c},
bOH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cv(0,d,0,d.length)
v.Cv(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lc(u,0)
u=m.c
A.aH.hg(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cv(0,s,0,s.length)
w.Lc(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ciJ.prototype={}
C.ciH.prototype={}
C.asW.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asW){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tj(d,e){var w=this.a
w===$&&B.c()
w=A.o.tj(w,e.gbYm())
if(!w)e.gbYm()
return w},
aKm(d,e){this.a=0
this.b=d},
tm(d){return this.aKm(d,null)},
aKZ(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fg(""),u=w.a
u===$&&B.c()
w.b0l(v,u)
u=w.b
u===$&&B.c()
w.b0l(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0l(d,e){var w,v=A.o.fV(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ciM.prototype={
jO(d){var w,v=this
v.a.tm(0)
v.c=0
A.aH.hq(v.b,0,4,0)
v.w=0
w=v.r
A.d.hq(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aot(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1P(u,0)
v.c=0}v.a.aKZ(1)},
Cv(d,e,f,g){var w=this.clb(e,f,g)
f+=w
g-=w
w=this.clc(e,f,g)
this.cl2(e,f+w,g-w)},
Lc(d,e){var w,v=this,u=C.hdh(v.a),t=u.a
t===$&&B.c()
t=C.h35(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h35(w,3)
v.cl6()
v.cl3(u)
v.asK()
v.cfe(d,e)
v.jO(0)
return 20},
b1P(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o8(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ie===w.d)
if(w.w===16)w.asK()},
asK(){this.cU7()
this.w=0
A.d.hq(this.r,0,16,0)},
cl2(d,e,f){while(f>0){this.aot(d[e]);++e;--f}},
clc(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1P(d,e)
e+=4
f-=4
w.aKZ(4)
v+=4}return v},
clb(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aot(d[e]);++e;--f;++v}return v},
cl6(){this.aot(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aot(0)}},
cl3(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asK()
u=v.d
switch(u){case A.ie:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.En:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cfe(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ie===this.d,s=0;s<w;++s){r=v[s]
q=J.o8(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.ciP.prototype={
cU7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qe[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qe[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qe[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qe[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qe[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qe[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qe[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qe[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qe[30]
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
C.ciL.prototype={
bf7(d){var w,v,u,t,s=this,r=s.a
r.jO(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cv(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lc(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hg(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hq(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hg(w,0,u,s.d)
s.b9N(s.d,u,54)
s.b9N(s.e,u,92)
u=s.d
r.Cv(0,u,0,u.length)},
Lc(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lc(s,w)
s=u.e
t.Cv(0,s,0,s.length)
v=t.Lc(d,e)
s=u.e
A.aH.hq(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cv(0,s,0,s.length)
return v},
b9N(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ciG.prototype={}
C.ciF.prototype={
a2k(d){return(D.og[d&255]&255|(D.og[d>>>8&255]&255)<<8|(D.og[d>>>16&255]&255)<<16|D.og[d>>>24&255]<<24)>>>0},
blI(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c3(4,0,!1,u)
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
for(r=1;r<=10;++r){p=(p^f.a2k((m>>>8|(m&$.qe[24])<<24)>>>0)^D.cDd[r-1])>>>0
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
p=(p^f.a2k((k>>>8|(k&$.qe[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2k((k>>>8|(k&$.qe[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a2k((g>>>8|(g&$.qe[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2k(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bND(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o8(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ed[a8&255]
u=D.ed[a9>>>8&255]
t=$.qe[8]
s=D.ed[b0>>>16&255]
r=$.qe[16]
q=D.ed[b1>>>24&255]
p=$.qe[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ed[a9&255]
s=D.ed[b0>>>8&255]
u=D.ed[b1>>>16&255]
v=D.ed[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ed[b0&255]
u=D.ed[b1>>>8&255]
s=D.ed[a8>>>16&255]
q=D.ed[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ed[b1&255]
a8=D.ed[a8>>>8&255]
a9=D.ed[a9>>>16&255]
b0=D.ed[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ed[n&255]
b0=D.ed[m>>>8&255]
a9=D.ed[l>>>16&255]
a8=D.ed[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ed[m&255]
b0=D.ed[l>>>8&255]
o=D.ed[b1>>>16&255]
s=D.ed[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ed[l&255]
o=D.ed[b1>>>8&255]
b0=D.ed[n>>>16&255]
u=D.ed[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ed[b1&255]
o=D.ed[n>>>8&255]
s=D.ed[m>>>16&255]
v=D.ed[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ed[a8&255]^C.nt(D.ed[a9>>>8&255],24)^C.nt(D.ed[b0>>>16&255],16)^C.nt(D.ed[b1>>>24&255],8)^b6[w][0]
m=D.ed[a9&255]^C.nt(D.ed[b0>>>8&255],24)^C.nt(D.ed[b1>>>16&255],16)^C.nt(D.ed[a8>>>24&255],8)^b6[w][1]
l=D.ed[b0&255]^C.nt(D.ed[b1>>>8&255],24)^C.nt(D.ed[a8>>>16&255],16)^C.nt(D.ed[a9>>>24&255],8)^b6[w][2]
b1=D.ed[b1&255]^C.nt(D.ed[a8>>>8&255],24)^C.nt(D.ed[a9>>>16&255],16)^C.nt(D.ed[b0>>>24&255],8)^b6[w][3]
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
bKe(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o8(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ec[a6&255]
v=D.ec[b0>>>8&255]
u=$.qe[8]
t=D.ec[a5>>>16&255]
s=$.qe[16]
r=D.ec[a4>>>24&255]
q=$.qe[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ec[a4&255]
t=D.ec[a6>>>8&255]
v=D.ec[b0>>>16&255]
w=D.ec[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ec[a5&255]
v=D.ec[a4>>>8&255]
t=D.ec[a6>>>16&255]
r=D.ec[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ec[b0&255]
a5=D.ec[a5>>>8&255]
a4=D.ec[a4>>>16&255]
a6=D.ec[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ec[p&255]
a6=D.ec[b0>>>8&255]
a4=D.ec[n>>>16&255]
a5=D.ec[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ec[o&255]
a4=D.ec[p>>>8&255]
a7=D.ec[b0>>>16&255]
t=D.ec[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ec[n&255]
a7=D.ec[o>>>8&255]
a5=D.ec[p>>>16&255]
v=D.ec[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ec[b0&255]
a7=D.ec[n>>>8&255]
t=D.ec[o>>>16&255]
w=D.ec[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ec[a6&255]^C.nt(D.ec[b0>>>8&255],24)^C.nt(D.ec[a5>>>16&255],16)^C.nt(D.ec[a4>>>24&255],8)^b5[a9][0]
o=D.ec[a4&255]^C.nt(D.ec[a6>>>8&255],24)^C.nt(D.ec[b0>>>16&255],16)^C.nt(D.ec[a5>>>24&255],8)^b5[a9][1]
n=D.ec[a5&255]^C.nt(D.ec[a4>>>8&255],24)^C.nt(D.ec[a6>>>16&255],16)^C.nt(D.ec[b0>>>24&255],8)^b5[a9][2]
b0=D.ec[b0&255]^C.nt(D.ec[a5>>>8&255],24)^C.nt(D.ec[a4>>>16&255],16)^C.nt(D.ec[a6>>>24&255],8)^b5[a9][3]
a4=D.z2[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.z2[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.z2[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.z2[o>>>8&255]
i=D.z2[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.z2[b0&255]
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
C.bOQ.prototype={}
C.bOR.prototype={
gK(d){var w=this.a.length
return w},
ap_(){return B.rj(this.a,A.i1,null,null)}}
C.ba5.prototype={
v2(d){return C.hQN(d)}}
C.csP.prototype={
MP(d){var w=d.w,v=Math.max(1,A.k.dk(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aa5(v,t+20,u+16,t,u,B.u2(d.x))},
no(d){return!1}}
C.bPJ.prototype={
cEX(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bK(new C.bPK(),x.E))},
mG(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mG)
case 6:w=5
return B.b(p.fwn(f,r),$async$mG)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mG,v)}}
C.avX.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a8r.prototype={
A(d,e){if(e==null)return!1
if(J.bO(e)!==B.b_(this))return!1
return e instanceof C.a8r&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wS(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fLH)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.aVL.prototype={
c1(d){var w=new C.aAP(!0,this.e,null,new B.di(),B.ci())
w.c_()
w.scF(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syL(0,!0)
w=this.e
if(!w.A(0,e.aj)){e.aj=w
e.aGv()}}}
C.aAP.prototype={
syL(d,e){return},
gpz(){var w=this.a9$
return w!=null},
glb(){var w=this.a9$
return w!=null},
ME(d){var w=d==null?B.h7W(null):d
w.sa4X(this.aj)
return w}}
C.a0R.prototype={
U(){return new C.aJ8(B.aY(x.N))},
cSf(d){return this.d.$1(d)},
cQ2(){return this.e.$0()}}
C.aJ8.prototype={
a_(){this.a1()
this.Pc()},
Pc(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cQ2(),$async$Pc)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6g(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pc,v)},
Z3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Z3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.f6k(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f6l(t))
w=3
return B.b(C.anH(p),$async$Z3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6m(t,s,p))
w=4
return B.b(t.Pc(),$async$Z3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Z3,v)},
a1f(d){return this.cpm(d)},
cpm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f6h(t))
s=J.r(d,"id")
w=3
return B.b(C.c_H(J.k(s==null?"":s)),$async$a1f)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f6i(t))
w=1
break}q=C.h2y(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cSf(B.a([q],x.D)),$async$a1f)
case 4:if(t.c==null){w=1
break}t.m(new C.f6j(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1f,v)},
Pb(d,e){return this.bKG(0,e)},
bKG(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cd(null,null,!0,null,new C.f6b(q),r,null,!0,!0,x.y),$async$Pb)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f6c(t))
s=s.h(e,"id")
w=4
return B.b(C.anG(J.k(s==null?"":s)),$async$Pb)
case 4:if(t.c==null){w=1
break}t.m(new C.f6d(t))
w=5
return B.b(t.Pc(),$async$Pb)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pb,v)},
cDX(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.it[B.bI(v)-1]+" "+B.bT(v)},
aQL(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.OD,A.n),w,e,w,w,w,w,w,e)},
aQK(d){return this.aQL(d,44)},
b6Y(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.OD:u,r=B.m(14),q=B.W(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.Je,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.Je,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bzY,u,u,u)],p))}return B.E(B.aB(A.ch,B.db(u,B.B(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hl,u,u,u,A.tR,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f6q(this,d),u,u,u,u,u,u,!1,A.a5),1)},
cja(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d0.j(0.14):D.Y4,n=B.m(18),m=p?A.d0:A.dr
m=B.I(m,A.q,p?1.8:1)
w=this.aQK(A.qa)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aRH,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.w(B.a([v,A.cO,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRJ,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.OD:q
u=p?q:B.I(A.aZ,A.q,1.6)
r=p?D.bQM:q
return B.aB(q,B.db(q,B.B(B.a([w,A.bc,t,B.db(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a4),A.fE,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fE,q,q,A.d3,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f6f(this,p,d),q,q,q,q,q,q,!1,A.a5)},
cqZ(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cDX(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dr,A.q,1)
v=r.aQK(A.NR)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aRH,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.w(B.a([u,A.cO,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRJ,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b3w(A.hE,A.bu,"Bring it back",r.r?q:new C.f6n(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bn,r.b3w(A.eb,A.cs,"Delete",r.r?q:new C.f6o(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Y4,q,w,o,q,q,A.n),q,q,q,A.d3,D.bul,q,q,q)},
b3w(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aB(w,B.p(w,B.W(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a4),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),w,f,w,w)},
at_(d,e,f){var w=null
return new B.D(D.btn,B.w(B.a([B.W(d,A.aZ,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.fhK,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fa4,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c4
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQL(A.yQ,46),A.bc,D.bAR],t)
if(j.r)s.push(D.eeD)
s.push(B.aI(i,i,i,i,A.ro,i,i,i,new C.f6t(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dr,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bx_,s,i),B.p(i,B.B(B.a([j.b6Y(0,A.yx,"Save",j.a.c.length),j.b6Y(1,A.O4,"Saved",o.gK(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bw0,A.ex,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cs:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.NT:A.ea
n=B.W(n,p?A.cs:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.TZ,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bvX,A.iO,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fdK,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fgO,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f6u(j,v),i,i,i,i,i,i,!1,A.a5))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.at_(A.qa,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cja(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eea)
else if(j.e==null)s.push(j.at_(A.alH,"Could not reach the database","Check the connection, then open this again."))
else if(o.gal(h))s.push(j.at_(A.oX,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cqZ(r.gT(r)))
A.d.v(u,s)}q.push(new B.dr(1,A.cn,B.cs(u,i,X.aiL,i,i,A.af,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc4d()
p=s?i:D.OD
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.W(A.yx,m?A.k5:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bwC,B.aB(i,B.db(i,B.B(B.a([k,A.a7N,new B.dr(1,A.cn,B.eN(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.k5:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e_),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hl,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a5),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.w(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!1),A.f,i,new B.aX(0,1/0,0,w.a.b*0.9),D.b20,i,i,i,i,i,i,i,i)}}
C.op.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ac()],x.N,x.z)}}
C.YA.prototype={
U(){return new C.axN(B.a([],x.k),B.f8(null,x.H))},
gdY(){return this.c}}
C.axN.prototype={
a_(){this.a1()
this.Pm()},
Pm(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1Q(t.a.c),$async$Pm)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cIf(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pm,v)},
cxg(d){var w,v,u,t=this
d.c=new B.T(Date.now(),0,!1)
w=J.qm(t.d,new C.cIi(d))
v=w<0
if(v&&C.hNU(d))return t.f
u=t.d
if(v)J.pB(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fU3(new C.cIj(t),v)
return t.f=t.f.bK(new C.cIk(t,d),v).eU(new C.cIl())},
IL(d,e,f){return this.ccK(0,e,f)},
aYt(d,e){return this.IL(0,e,!1)},
ccK(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IL=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a3(s,!1).cg(B.e_(new C.cIe(t,e),!1,null,x.H)),$async$IL)
case 3:w=4
return B.b(t.f,$async$IL)
case 4:w=5
return B.b(t.Pm(),$async$IL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IL,v)},
aXK(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dAy:d
this.IL(0,new C.op(w,v,new B.T(Date.now(),0,!1)),!0)},
c3I(){return this.aXK(null)},
adv(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cIm(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXK(s)
case 1:return B.h(u,v)}})
return B.i($async$adv,v)},
IK(d,e){return this.bKx(0,e)},
bKx(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cd(null,null,!0,null,new C.cI9(e),s,null,!0,!0,x.y),$async$IK)
case 3:if(g!==!0){w=1
break}t.m(new C.cIa(t,e))
w=4
return B.b(t.f,$async$IK)
case 4:w=5
return B.b(C.agi(t.a.c,e.a),$async$IK)
case 5:w=6
return B.b(t.Pm(),$async$IK)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IK,v)},
Di(d){return this.bCH(d)},
bCH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Di=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cI5(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Di)
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
return B.b(t.aYt(0,d),$async$Di)
case 9:w=5
break
case 7:w=10
return B.b(F.h37(r,d.b,null),$async$Di)
case 10:w=5
break
case 8:w=11
return B.b(t.IK(0,d),$async$Di)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Di,v)},
bYj(){var w,v,u=null,t=[D.dAB,D.dAz,D.dAA],s=new C.cIc(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eW,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aQ(999,999)
n.push(B.p(u,new B.y(D.dks[w],u,A.ox,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bk(v,v,v,v),u,u,A.n),u,u,u,u,A.o3,u,u,u))}return B.p(u,B.B(B.a([B.E(B.w(B.a([D.fH6,A.N,B.bV(A.bB,n,A.bs,6,6),A.aO,B.aB(u,B.p(u,D.eTa,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.aj9,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cIb(this),u,u,u,u,u,u,!1,A.a5)],o),A.E,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bZ8,A.n),u,u,u,u,D.bx9,u,u,u)},
bCF(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.an(A.V,v,A.b2,A.r,B.a([B.eN(A.A,F.aog(d.b),A.f,A.bU),D.ek9,B.ao(v,B.aB(v,B.p(v,D.bRA,A.f,v,v,D.b2Y,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cI0(this,d),v,v,v,v,v,v,!1,A.a5),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.f7g,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.w(B.a([new B.fK(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fdW,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cI1(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cI2(this,d),v,v,v,v,v,v,!1,A.a5)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.D(K.ahH,B.hp(B.aB(s,B.p(s,A.aom,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.wk,A.a4),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc52(),s,s,s,s,s,s,!1,A.a5),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n2,s,s,s,!0,s,s,s,s,s,D.fHa,s,s,s,1,s,!0)
if(t.e)r=D.b6o
else{w=t.bYj()
v=B.a([D.fsy,A.ab],r)
if(J.cJ(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f6G,s,s,s),A.f,s,s,new B.o(D.bbd,s,s,u,s,s,A.n),s,s,s,s,A.ye,s,s,s))}r=B.a([new B.nU(A7.Zl,new B.md(w,s),s),new B.nU(D.bww,new B.md(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eZK)
else r.push(new B.nU(D.bvZ,B.OZ(new B.ov(new C.cIn(t),J.ad(t.d),!0,!0,!0,0,B.t4(),s),D.b5F),s))
r=B.vB(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.af,!1,r)}return B.c4(q,D.ba2,r,s,!1,!1,s,s)}}
C.Yy.prototype={
U(){return new C.axJ(B.a([],x.bx))},
U4(d){return this.d.$1(d)}}
C.aF_.prototype={}
C.axJ.prototype={
b0n(d,e,f){var w=$.ax(),v=new B.aq(new B.ba(d,A.b4,A.aN),w),u=this.gaYs()
v.aQ(0,u)
w=new B.aq(new B.ba(e,A.b4,A.aN),w)
w.aQ(0,u)
return new C.aF_(v,w,f)},
E9(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cL(A.q_,new C.cHu(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.ax()
u=new B.aq(new B.ba(w.a,A.b4,A.aN),v)
t=m.gaYs()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.aq(new B.ba(w.b,A.b4,A.aN),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.aq(new B.ba(w.c,A.b4,A.aN),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.aq(new B.ba(p.a,A.b4,A.aN),v)
o.aQ(0,t)
n=new B.aq(new B.ba(p.b,A.b4,A.aN),v)
n.aQ(0,t)
r.push(new C.aF_(o,n,p.c))}if(r.length===0)r.push(m.b0n("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpe()
q=r.a
q.U4(q.c)}q=r.d
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
t.push(new F.my(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.ro(n,w,v,t,u)},
AQ(){var w=0,v=B.j(x.H),u=this,t
var $async$AQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpe()
t=u.a
w=2
return B.b(t.U4(t.c),$async$AQ)
case 2:return B.h(null,v)}})
return B.i($async$AQ,v)},
c50(){this.m(new C.cHt(this))
this.E9()},
aXr(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cHw(w,d,v))
w.E9()},
c51(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cHE())
this.E9()
$.aV.x1$.push(new C.cHF(w))},
Qy(d){return this.cj0(d)},
cj0(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(80,1400,A.eI),$async$Qy)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Qy)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahQ(o,".png")?"image/png":"image/jpeg"
r.m(new C.cHx(d,n,p))
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
return B.i($async$Qy,v)},
xO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hqj(r,t.gpe()),$async$xO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cHv(t,s))
t.E9()
case 1:return B.h(u,v)}})
return B.i($async$xO,v)},
cji(d){var w,v=this,u=null,t=F.fAu(d.c)
if(t==null)return new B.bK(A.a3,u,u,B.ho(D.bKO,D.fv1,new C.cHz(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.V,u,A.aa,A.r,B.a([B.bv(B.m(12),B.fO(t,A.A,u,u,A.ce,A.bU,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3x(A.kd,new C.cHA(v,d)),A.bn,v.b3x(A.cw,new C.cHB(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3x(d,e){var w=null
return B.aF(!1,A.a2,!0,w,B.aK(!1,w,!0,new B.D(A.hB,B.W(d,A.c,w,w,w,18),w),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cK,w,w,A.ah)},
IM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AQ(),$async$IM)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h37(s,t.gpe(),new C.cHD(t)),$async$IM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.D(A.q0,B.ho(D.bPw,D.fB5,n.gawJ(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aI(m,m,m,m,A.aol,m,m,m,new C.cHG(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Xf,m,1,m,m,m,!1,m,!1,E.n2,m,m,m,!0,m,m,m,m,m,D.fvV,m,m,m,1,m,!0),j=Au.aUs(O.lo,A.c,Ae.W6,A.oc,D.fwF,n.gc5_()),i=B.m(18),h=n.gawI(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.iV,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eN(A.A,F.aog(n.gpe()),A.f,A.dw),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a5)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.w(B.a([D.fII,A.au,B.d(F.h1B(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fjv,m,m,m),A.R,B.dp(E.anF,E.aSv,h,B.bn(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Xf,m,m,i,m,m,A.n),m,m,m,m,A.bj,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ot,!0,A.a6,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.an,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aQ(16,16)
u=new B.ay(O.lo.j(0.18),1,A.q,-1)
t=v+1
s=B.aI(m,m,m,m,D.bOc,m,m,m,v===0?m:new C.cHH(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aI(m,m,m,m,D.bUz,m,m,m,v===r-1?m:new C.cHI(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cHJ(n,v)
p=new B.aQ(12,12)
o=new B.aQ(12,12)
g.push(B.p(m,B.w(B.a([new B.c9(A.aM,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fk2,m,m,m,m,m,m,m,m,m),A.b0,s,q,B.aI(m,m,m,m,B.W(A.eb,A.oR,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bk(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a6,m,A.an,m,m,m,m),A.al,n.cji(i[v]),B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bk(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n2,m,new B.bJ(u,u,u,u),new B.bk(w,w,w,w),m,m,A.n),m,m,new C.a8r(h),A.e9,D.buA,m,m,m))}return B.os(!0,B.c4(k,E.afR,B.cs(g,m,D.bv1,m,m,A.af,!1),m,!1,!1,j,m),new C.cHK(n),x.C)}}
C.axL.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.n2,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eF,B.aF(!1,A.a2,!0,t,B.aK(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.w(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aR4,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.W(A.eC,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aqv.prototype={
U(){return new C.aDQ()}}
C.aDQ.prototype={
a_(){this.a1()
this.ZI()},
bu(d){this.bC(d)
if(d.c!=this.a.c)this.a14()},
a14(){var w=0,v=B.j(x.H),u=this,t
var $async$a14=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dS(t,x.H),$async$a14)
case 2:u.d=null
if(u.c!=null)u.m(new C.ebN(u))
w=3
return B.b(u.ZI(),$async$a14)
case 3:return B.h(null,v)}})
return B.i($async$a14,v)},
ZI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Yc(B.cF(n,0,null),new B.Pl(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.il(0).d9(0,A.pW),$async$ZI)
case 7:if(r.c==null){w=1
break}r.d.tp(!1)
r.m(new C.ebL(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.ebM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZI,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
c7z(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.ebO(w))}else{v.pZ(0)
w.m(new C.ebP(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.m(8*n.d)
m=B.a([D.jn.j(0.92),D.L8.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.W(A.qd,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.at(B.w(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.at(B.W(A.amX,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b7g
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eN(A.A,new B.a7(r,q,new B.Ad(s,o),o),A.r,A.bU)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.W(A.is,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a4),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bv(n,new B.an(A.V,o,A.b2,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7y(),o,o,o,o,o,o,!1,A.a5)}}
C.xB.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jn.prototype={}
C.ade.prototype={
B(d){return B.oU(new C.dZo(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acE.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.jn.j(t?0.35:0.4),A.q,1),p=t?D.LI:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.m(10),l=B.I(A.c_.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i5p(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajD,u,u,u,u),1)
m=D.jn.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jn,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a2,!0,u,B.aK(!1,s,!0,B.p(u,B.w(B.a([o,B.p(u,B.w(B.a([l,A.cO,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aB:D.bhC,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bJ(new B.ay(m,1,A.q,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,D.ahX,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xE.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nK.prototype={}
C.bj3.prototype={
ZR(d){var w=null
return new B.bK(A.a3,w,w,B.Bi(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c81(){return this.ZR(1)},
axk(d){var w=null,v=B.m(8),u=B.I(A.i4,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adP,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.w(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i4,A.q,1.6),v,v,v,A.a4),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i4,A.q,1.6),v,v,v,A.a4),v,22,v,v,v,v,v,22),new B.x(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.al,w.axk("TAARIFA ZA WANANDOA"),A.al,w.c81(),A.cO,w.ZR(0.9),A.cO,w.ZR(0.7),A.N,w.axk("TAMKO LA MAKUBALIANO"),A.fH,w.ZR(1),A.cO,w.ZR(0.95),A.N,w.axk("MASHAHIDI"),A.b0,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.adh.prototype={
B(d){return B.oU(new C.eg9(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeX.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.ay.j(q?0.35:0.4),A.q,1),m=q?D.bhd:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.m(10),i=B.I(A.ay.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],l)
w=this.c
v=C.h26(w.a)
if(v==null)v=A.d.gH(D.R8)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.V,r,A.b2,A.r,B.a([B.bS(0,B.fO(C.h25(v.d),A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),0,0,0),new B.D(A.aiC,new C.bj3(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajD,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.LJ,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a2,!0,r,B.aK(!1,p,!0,B.p(r,B.w(B.a([l,B.p(r,B.w(B.a([i,A.cO,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aB:D.bax,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bJ(new B.ay(j,1,A.q,-1),A.X,A.X,A.X),r,r,r,A.n),r,r,r,r,D.ahX,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kV.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7T.prototype={}
C.VN.prototype={
U(){var w=$.ax()
return new C.aE6(new B.cw(null,x.A),new B.aq(A.at,w),new B.aq(A.at,w),B.mH(0,null,null),A.d.gH(D.a3m),D.dKK,B.a([],x.L),B.a([],x.gE))}}
C.aE6.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zD(C.fEn(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fDj().bK(new C.ej6(v),w)
$.qZ().jI(0,"assets/images/ngmy_logo.png").bK(new C.ej7(v),w).eU(new C.ej8())},
t(){var w=this,v=w.e,u=$.ax()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.t()
w.a2()},
ahl(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
J4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(88,1600,A.eI),$async$J4)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$J4)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hqz(m,p),$async$J4)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCR(new B.pS(o,1),m),$async$J4)
case 10:if(r.c!=null)r.m(new C.eiJ(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ahl("Could not open that picture. "+B.u(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$J4,v)},
WU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hqz(s,q),$async$WU)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCR(new B.pS(r,1),s),$async$WU)
case 4:if(t.c!=null)t.m(new C.eiF(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WU,v)},
aeh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eiQ(q))
t=4
q.a.toString
p=C.i9Q()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeh)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eiR(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ahl(B.u(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiS(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeh,v)},
ZW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eiL(q,i))
t=4
q.a.toString
p=C.i9P()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZW)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eiM(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eiN(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiO(q))
$.aV.x1$.push(new C.eiP(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZW,v)},
c8h(d){this.m(new C.eiK(this,d))},
Eq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eiH(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Eq)
case 7:w=8
return B.b(B.bN(A.na,null,x.H),$async$Eq)
case 8:k=$.aV.aj$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q2))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m0(1800/p.gY(0).a),$async$Eq)
case 9:o=e
w=10
return B.b(o.hu(A.h4),$async$Eq)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A8.agm(J.eV(A.dC.gaP(n)),"ngmy_news.png","image/png"),$async$Eq)
case 11:m=e
q.ahl(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ahl(B.u(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiI(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eq,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.l9,a2,a2,a2,new C.eiY(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bQ1,a2,a2,a2,new C.eiZ(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.p5,a2,a2,a2,a4?a1.gaZz():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.B9,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eTk,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eW,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eN(A.A,new B.eJ(new C.b0L(t,s,r,a1.x,a2),a1.d),A.f,A.dw),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.rW,a2,a2,a2)
t=a1.as?a2:a1.gc8g()
t=B.a([B.E(B.dp(D.bQN,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.tx,a2,a2,a2,A.c,A.fU,a2,a2,new B.b7(B.m(14),P.vj),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fO(r,A.A,a2,a2,A.ce,A.bU,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.as,r,B.aI(a2,a2,a2,a2,D.bNv,a2,a2,a2,a1.as?a2:a1.gbJ8(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.rW,a2,a2,a2)
q=B.aL(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aSA("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dd,!0,A.a6,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.deK[o]
p.push(B.mN(a2,D.tx,new B.y(n.a,a2,A.pn,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.he,new C.ej_(a1,n),a2,a2,P.vj,a2))}p=B.bV(A.bB,p,A.bs,6,8)
m=a1.Q
m=B.bV(A.bB,B.a([D.fHi,A.bc,B.j_(a2,a2,a2,D.frg,a2,new C.ej0(a1),m==="en",a2,a2,a2,a2),A.ab,B.j_(a2,a2,a2,D.frb,a2,new C.ej1(a1),m==="sw",a2,a2,a2,a2)],w),A.t6,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.rW,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d0(D.a3m,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gK(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aR4(g==null?h.a(g):g))}k=B.cs(k,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d0(D.a3m,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gK(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aR4(g==null?h.a(g):g))}j=B.cs(i,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gc8j()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.cu,s,a2),t,A.aA,new B.D(A.cu,r,a2),q,A.N,p,A.R,m,A.aA,new B.D(A.cu,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aO,B.aB(a2,B.p(A.A,B.B(B.a([D.bQH,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fV,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uo,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a5)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.dvq,A.as,D.bBb],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b5.j(0.35):D.tx
p=new B.aQ(16,16)
d=new B.ay(A.bz,1,A.q,-1)
u.push(new B.bK(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fhv,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.VV,new B.o(q,a2,new B.bJ(d,d,d,d),new B.bk(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.iO,a2,a2,a2),a2))}u.push(A.al)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d0O[o]
t.push(B.mN(a2,D.tx,new B.y(a0,a2,A.Js,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.he,new C.ej2(a1,a0),a2,a2,P.vj,a2))}u.push(B.bV(A.bB,t,A.bs,6,8))
u.push(A.R)
t=B.E(B.aL(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aSA("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ej3(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dd,!0,A.a6,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc8i()
u.push(B.B(B.a([t,A.ab,B.HP(A.yU,s,B.nD(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaZz()
u.push(B.dp(A.p5,D.fCM,t,B.bn(A.cS,a2,a2,a2,a2,A.Jc,a2,a2,new B.b7(B.m(16),A.X),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cs(v,a1.r,A.aio,a2,a2,A.af,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.k2.j(0.5),A.q,1)
v.push(B.bS(0,B.el(B.at(B.p(a2,B.B(B.a([E.a7O,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jg,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.B0,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bxr,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.B9,new B.an(A.V,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aSA(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.X),w,A.eO,w,w,w,w,!0,w,w,w,w,w,w,D.tx,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A2.Jn,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aR4(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bD:A.bz
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l0,t,t,t,t),A.fH],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.btC,t,t,t,t))
w.push(A.cO)
w.push(new B.D(A.jw,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.w(w,A.m,t,A.b7,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.ip,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eiG(this,d),t,t,t,t,t,t,!1,A.a5)}}
C.zD.prototype={
bbW(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zD(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cIx(d){var w=null
return this.bbW(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ceD(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fH(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ceB(),B.S(w).k("M<1,n>")).c0(0,new C.ceC())
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
return this.bbW(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFD(d){return this.f}}
C.tp.prototype={
a3(){return"NewsLayout."+this.b}}
C.Bw.prototype={
a3(){return"NewsFrame."+this.b}}
C.lm.prototype={}
C.b0L.prototype={
rq(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZB(d,e,f,g){return this.rq(d,e,null,1.25,f,A.bp,g)},
PU(d,e,f,g,h){return this.rq(d,e,f,1.25,g,A.bp,h)},
axq(d,e,f,g,h){return this.rq(d,e,null,f,g,A.bp,h)},
axp(d,e,f,g,h){return this.rq(d,e,f,g,0,A.bp,h)},
aZD(d,e,f,g,h){return this.rq(d,e,null,f,0,g,h)},
c8n(d,e,f,g,h,i){return this.rq(d,e,f,g,0,h,i)},
axo(d,e,f,g){return this.rq(d,e,null,f,0,A.bp,g)},
aek(d,e,f){return this.rq(d,e,null,f,0,A.bp,A.cN)},
aZC(d,e,f,g,h){return this.rq(d,e,f,g,0,h,A.cN)},
c8m(d,e,f,g){return this.rq(d,e,null,f,0,g,A.cN)},
c8l(d,e,f,g){return this.rq(d,e,f,g,0,A.bp,A.cN)},
ael(d,e,f,g,h,i){return this.rq(d,e,f,g,h,A.bp,i)},
aZA(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.l3(new B.eS(d,u,u,A.d_,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.cb,new B.kK(1),u,u,h,u,A.c7,u)
v.uF(g)
if(!v.b.a.c.gaEo())return w
w-=2}return j},
aei(d,e,f,g,h,i,j,k){return this.aZA(d,e,f,g,h,i,j,k,A.bp)},
azw(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.w(t,A.m,w,A.e,A.j,0,A.p)},
azv(d){return this.azw(null,!1,d)},
ah9(d,e){return this.azw(null,d,e)},
cq6(d,e){return this.azw(d,!1,e)},
gb0L(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVd(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OH(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aei(w.gaVd(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaVd(),v,g,A.a1,v,v,v,w.axp(u,t,f,1.02,A.O),e,v,v)},
aVi(d){return this.OH(d,A.L,null,2,78,30)},
abK(d,e,f,g,h){return this.OH(d,e,null,f,g,h)},
bYb(d,e,f,g,h){return this.OH(d,A.L,e,f,g,h)},
bYa(d,e,f){return this.OH(d,A.L,null,e,f,30)},
RP(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jJ,B.d(s,u,g,A.a1,u,u,u,v.aZC(w,v.aZA(t,w,A.cN,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b6C(d){return this.RP(d,A.L,null,3,24)},
aB_(d,e,f,g){return this.RP(d,e,null,f,g)},
cxK(d,e,f){return this.RP(d,A.L,e,3,f)},
b6D(d,e){return this.RP(d,e,null,3,24)},
cxI(d,e){return this.RP(d,A.L,null,3,e)},
cxJ(d,e,f){return this.RP(d,e,null,3,f)},
ar_(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fQ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PU("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
ND(){return this.ar_(null,!0)},
aqZ(d){return this.ar_(null,d)},
bF5(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i7,new B.a7(d,w,B.d(v,w,2,A.a1,w,w,w,this.c8m(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vz(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.T(Date.now(),0,!1),i=m.gb0L(),h=A.o.an(j.bz(B.c1(B.bB(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hYi(Math.max(1,B.bB(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZB(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aei(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aei(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.w(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eJ,l,l,l,m.ael(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bC6(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iv,A.j,0,l,l),A.al,m.ah9(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.w(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eJ,l,l,l,m.axo(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bC6(j),l,l,l,l,l,l,m.PU(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iv,A.j,0,l,l),A.N,m.cq6(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0L()
v=B.d("NGMY",l,l,l,l,l,l,m.axq(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.w(B.a([B.B(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rq(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b0,new B.dr(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.ael(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dQ,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iv,A.j,0,l,l)
t=m.ah9(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axo(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.w(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ah9(!0,1.4),A.au,B.d(C.bC6(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.azv(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.w(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axq(v,u,1,3,A.O),A.L,l,l),A.N,m.ah9(!0,1.2),A.au,B.B(B.a([B.d(C.bC6(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iv,A.j,0,l,l),A.au,m.azv(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acS(d){return this.vz(d,!1)},
aej(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ael("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c8k(d,e){return this.aej(d,null,e,null)},
aXj(d){var w=null,v=new B.T(Date.now(),0,!1),u=A.o.E(B.dl(v),12)===0?12:A.o.E(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.axp("Roboto",15,t,1,A.cv),r=B.W(E.al3,t,w,w,w,18),q=A.a.ap(A.p9[B.bI(v)-1],0,3),p=A.a.aY(A.o.u(B.h1(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bT(v)+", "+B.bB(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fR,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aw9(){return this.aXj(A.o7)},
b3L(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.ael("Roboto",this.aei(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azz(d,e,f){return this.b3L(d,e,f,30)},
aB2(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vH,B.d(v,w,e,A.a1,w,w,w,this.c8l("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6H(d){return this.aB2(d,3,22)},
cxV(d,e){return this.aB2(d,e,22)},
tG(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.ce,A.bU,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dn(D.bAe,w,s)
if(v==="sepia")w=new B.Dn(D.bAd,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.W(A.yr,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.K,A.Xb.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.V,s,A.b2,A.r,v,s),s)},
qw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tG(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ex,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lY,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.eaE,14)],x.V)
v=l.tG(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.w(B.a([v,B.E(B.at(B.d(u,k,2,A.a1,k,k,k,l.aZC(j.as,13.5,D.bc4,1.1,A.cE),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bfu,k,k,k,w,k,A.n),k,e,k,k,D.buX,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bv(B.m(25),l.tG(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.at(B.p(k,B.i_(l.tG(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a4),k,t,k,k,A.lY,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.eau,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.V,k,A.aa,A.f,B.a([B.bS(0,B.p(k,l.tG(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rd,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nx(l.tG(d,e),A.aq,D.h7d),new C.bci(j,k),k,k,A.az),k)
case 7:j=x.p
w=B.a([l.tG(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aQ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bP,k,k,new B.bk(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cM(0,q,0,p,k,k,new B.c9(A.aM,A.rx,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.V,k,A.b2,A.r,w,k),A.f,A.ef,k,k,k,e,k,k,D.bzu,k,k,d)
case 8:w=d/2
v=B.x0(A.hH,new B.aQ(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bv(B.x0(A.hG,new B.aQ(w,w)),l.tG(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fT,22)],x.V)
return B.p(k,l.tG(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nx(l.tG(d,e),A.aq,D.heh),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tG(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ex,k,k,d)}},
aOE(d,e){return this.d.e===D.RM?A.bI:this.bF5(d,e)},
Ws(d){return this.aOE(d,A.L)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.aZD(v.Q,19,1.15,A.cE,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.PU("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.aek(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jx(B.w(q,A.E,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bj,n,n,d)},
gcgw(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9r(d,e,f,g){return B.cA(new C.ceE(this,e,d,f,g))},
a9q(d){return this.a9r(d,22,!0,18)},
WD(d,e){return this.a9r(d,22,!0,e)},
aPG(d,e,f){return this.a9r(d,22,e,f)},
bH5(d,e,f){return this.a9r(d,e,!0,f)},
b9D(d,e,f,g){return B.cA(new C.ceF(this,e,d,g,!0,f))},
cfj(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.w(B.a([k.acS(824),A.aA,k.aVi(824),k.b6C(824),A.N,k.ND(),A.ac,B.at(k.qw(824,360),j,j,j),k.Ws(824),A.ac,B.E(k.a9q(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.w(B.a([k.acS(824),A.aO,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.w(B.a([k.abK(440,A.bh,3,62,26),k.aB_(440,A.bh,2,20),A.b0,k.ar_(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Jd,B.w(B.a([k.qw(362,310),k.Ws(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.R,k.azv(2),A.ac,B.E(k.a9q(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vz(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bYb(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cxK(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.w(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.y8,j,j,j)
u=B.a([B.at(k.qw(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RM){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.axp(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.ls,j,j,j),j,j,0,0,j,j))}return B.w(B.a([w,A.ac,v,A.ac,new B.an(A.V,j,A.aa,A.r,u,j),A.N,k.ND(),A.R,B.E(k.WD(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vz(824,!0)
w=k.qw(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.w(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.OH(780,A.bh,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b3,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bxK,j,j,j),j,j,0,0,j,j)],u),j),k.b6D(824,A.bh),A.N,k.ND(),A.R,B.E(k.a9q(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.w(B.a([k.acS(824),A.aA,k.aVi(824),k.b6C(824),A.N,k.ND(),A.ac,B.E(k.b9D(3,300,B.w(B.a([k.qw(300,300),k.Ws(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vz(824,!0)
v=x.p
u=B.w(B.a([k.abK(440,A.bh,3,62,26),k.aB_(440,A.bh,2,20),A.b0,k.aqZ(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.w(B.a([w,A.bv,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aP2,new B.D(A.i7,k.qw(364,h.e===D.RM?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.WD(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.w(B.a([k.acS(824),A.ac,k.bYa(824,2,70),k.cxI(824,21),A.N,k.ND(),A.ac,B.E(k.b9D(3,340,B.at(k.qw(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vz(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bC6(new B.T(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PU(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bj,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZD(h.Q,24,1.15,A.cE,A.O),j,j,j))
v.push(A.b0)
if(k.gaAj())v.push(k.aAi(230,250))
return B.w(B.a([w,A.aA,B.E(B.B(B.a([new B.a7(230,j,B.w(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahV,j,j,j,1.2),new B.a7(570,j,B.w(B.a([k.abK(570,A.bh,3,62,28),k.cxJ(570,A.bh,20),A.N,k.aqZ(!1),A.N,B.at(k.qw(570,330),j,j,j),k.Ws(570),A.R,B.E(k.aPG(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vz(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PU(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.w(B.a([w,A.ac,B.p(j,B.w(B.a([t,A.al,k.OH(788,A.bh,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bw1,j,j,j),k.b6D(824,A.bh),A.R,B.at(k.qw(824,310),j,j,j),k.Ws(824),A.N,k.ND(),A.R,B.E(k.a9q(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.w(B.a([k.vz(824,!0),A.aO,new B.an(A.V,j,A.aa,A.r,B.a([k.qw(824,430),B.ao(18,k.c8k(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.azz(824,3,66),k.b6H(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aw9(),A.aA,B.E(k.WD(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.w(B.a([k.vz(824,!0),A.bv,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.w(B.a([k.aej(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b3L(410,4,58,28),k.aB2(410,6,20),A.b0],w),A.E,j,A.e,A.j,0,A.p),j),U.aP3,k.qw(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aA,k.aw9(),A.aO,B.E(k.WD(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vz(824,!0)
v=k.qw(824,420)
u=B.hAY(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.w(B.a([w,A.aO,new B.an(A.V,j,A.aa,A.r,B.a([v,B.ao(22,B.fo(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c8n(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.by_,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.azz(824,3,62),k.b6H(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aXj(A.lw),A.aA,B.E(k.WD(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vz(824,!0)
u=h.w
t=x.p
w=B.a([k.qw(824,380),B.ao(j,k.aej(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.azz(824,2,60)
r=k.cxV(824,2)
p=k.aw9()
o=B.E(k.aPG(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.w(B.a([v,A.aO,new B.an(A.V,j,A.aa,A.r,w,j),A.aO,s,r,A.R,p,A.aA,o,A.ac,B.p(j,B.B(B.a([B.bv(B.m(14),k.tG(150,104),A.aq),A.op,B.E(B.w(B.a([k.aej("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a1,j,j,j,k.axo(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.W(A.eC,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bj,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.w(B.a([k.vz(824,!0),A.bv,k.abK(824,A.bh,3,62,30),k.aB_(824,A.bh,2,22),A.R,k.aqZ(!1),A.R,B.at(k.qw(824,330),j,j,j),k.aOE(824,A.bh),A.aO,B.E(k.bH5(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b3(s,s,s,new C.b8R(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.byw,B.w(B.a([B.E(t.cfj(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fH,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZB(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PU(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iv,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bS(0,B.e2(B.b3(s,s,s,new C.brg(v.j(q.ch?0.07:0.06),s),A.az),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i_(B.fO(q,A.A,s,s,A.ce,A.bU,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.o7,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axq(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.dd(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bzC,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jx(new B.an(A.V,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bcj.prototype={
je(d){return C.hfL(d)},
jW(d){return!1}}
C.bci.prototype={
a6(d,e){var w,v=C.hfL(e)
$.X()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ag
w.c=6
return d.aS(v,w)},
aw(d){return!d.b.A(0,this.b)}}
C.btM.prototype={
je(d){var w,v,u,t,s,r,q,p,o=new B.ez()
o.dr(3)
w=$.X()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.am()*14)
v.push(w)
r=u.f
if(r!=null)w.bA(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.am()*14)
v.push(q)
p=u.f
if(p!=null)q.bA(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jW(d){return!1}}
C.b8R.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.ez()
k.dr(7)
$.X()
w=B.N()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.am()*0.07).gp(0)
q=k.am()
p=k.am()
o=k.am()
n=w.L()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.am()*u
p=k.am()*t
m=50+k.am()*90
w.sau(new B.c_(A.A,0.5,A.x,l,0,B.a([A.WF.j(0.13),A.K],v),l,l).aA(0,B.bU(new B.x(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aw(d){return!1}}
C.brg.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.h2(u,u,u,u,B.d1(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.cb,u,A.dS,A.c7)
s.eQ()
w=d.a
J.bx(w.save())
w.translate(t/2,e.b*0.52)
d.jq(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.x(-v/2,-t.gbg(t)/2))
w.restore()},
aw(d){return!d.b.A(0,this.b)}}
C.VO.prototype={
U(){return new C.aE8()}}
C.aE8.prototype={
a_(){var w=this
w.a1()
B.fuU(w.a.c,null).bK(new C.ejE(),x.g7).bK(new C.ejF(w),x.a)
w.a.toString},
gaNs(){var w=D.avD[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxr(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaNs()
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
ZY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ejr(r))
t=4
q=r.gaxr()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.qp()
m=B.B8(n,null)
i=B.N()
i.Q=A.h2
m.oq(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.or().zq(J.h5a(p),J.h5a(o)),$async$ZY)
case 7:l=e
w=8
return B.b(l.hu(A.h4),$async$ZY)
case 8:k=e
j=r.c
if(j!=null){j=B.a3(j,!1)
i=k
i.toString
j.N(J.eV(J.vr(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ejs(r))
r.c.I(x.q).f.R(D.f1o)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZY,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.l9,s,s,s,new C.ejy(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bM(!1,D.fFl,s,s,!0,s,s,t.y||r==null?s:t.gc8o(),s,s)],p),s,s,!0,!0,A.B9,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fJj,s,s,s,1,s,!0)
if(r==null)p=A.mk
else{w=B.E(new B.D(A.bQ,B.at(new B.fK(t.gaNs(),B.cA(new C.ejz(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.ip,B.j_(s,s,s,new B.y(D.avD[u].a,s,E.aQS,s,s,s,s,s,s,s,s,s),s,new C.ejA(t,u),t.e===u,s,s,s,s),s))
p=B.w(B.a([w,B.p(s,B.bm(!0,B.w(B.a([new B.a7(s,40,B.cs(v,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bRr,B.E(B.l2(s,s,s,6,1,new C.ejB(t),t.f),1),D.bR3],p),A.m,s,A.e,A.j,0,s,s),D.fCF,A.al,B.bM(!1,D.fCn,s,s,!0,s,s,new C.ejC(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!1),A.f,D.Xo,s,s,s,s,s,s,D.bvm,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c4(q,A.B9,p,s,!1,!1,s,s)}}
C.bbQ.prototype={
a6(d,e){var w
$.X()
w=B.N()
w.Q=A.ce
return d.oq(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
aw(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_R.prototype={
U(){var w=$.ax(),v=x.A
return new C.aFv(new B.aq(A.at,w),new B.aq(new B.ba("NGMY",A.b4,A.aN),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a3U),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oD.prototype={}
C.aFv.prototype={
gaVq(){var w,v,u=this
if(u.p1)w=new B.vK(1,u.p2,0.9,u.p3).m_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eSP(w))},
t(){var w=this.d,v=$.ax()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
YA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qZ().jI(0,"assets/images/ngmy_logo.png"),$async$YA)
case 7:q=e
p=J.eV(J.vr(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCR(new B.pS(p,1),o),$async$YA)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eRH(r,p))
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
return B.i($async$YA,v)},
PX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(92,1800,A.eI),$async$PX)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$PX)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCR(new B.pS(p,1),n),$async$PX)
case 9:if(r.c==null){w=1
break}r.m(new C.eS4(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PX,v)},
b36(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aJ=w.aE=w.az=w.Z=w.b8=w.bi=w.y2=0
w.b0=null
w.b_=0.25
w.bb=null
w.bJ=0.5
w.aH=1
w.c7=w.bB=w.bh=0
w.cK=w.c5=!1},
aX3(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzA(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dhD)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzA(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzA(C.h_Z(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzA(C.h_Z(1-a0*0.5,n,n,n),w)}return a1?C.bzA(C.h_Z(-1,255,255,255),w):w},
aB8(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l4(0,this.d.a.a),t=B.C(u,B.a5(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zj(u,v,w)
this.dx.pf(new C.eSe(t),!0)
return t},
b5F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aB8()
w=C.i7y(e.d.a.a,e.db)
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
return C.i42(d,k,v,a0,j,e.gaVq(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cvA(){return this.b5F(null)},
Dh(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmB(),$async$Dh)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$Dh)
case 4:w=5
return B.b($.aV.gmB(),$async$Dh)
case 5:s=$.aV.aj$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q2)){u=null
w=1
break}w=7
return B.b(r.m0(1080/r.gY(0).a),$async$Dh)
case 7:w=6
return B.b(e.hu(A.h4),$async$Dh)
case 6:q=e
u=q==null?null:J.eV(A.dC.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dh,v)},
aai(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aai=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRq(q))
t=4
w=7
return B.b(q.Dh(),$async$aai)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aL(p)
n=C.BK(null,null,null,null,D.oj,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5F(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a3(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRr(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aai,v)},
Ax(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ax=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRo(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Ax)
case 7:w=8
return B.b(B.bN(A.nb,null,x.H),$async$Ax)
case 8:w=9
return B.b($.aV.gmB(),$async$Ax)
case 9:k=$.aV.aj$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q2))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m0(1080/p.gY(0).a),$async$Ax)
case 10:o=e
w=11
return B.b(o.hu(A.h4),$async$Ax)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A8.agm(J.eV(A.dC.gaP(n)),"ngmy_quote.png","image/png"),$async$Ax)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRp(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ax,v)},
cir(){var w=this.p4
w.toString
return B.cA(new C.eRY(this,w))},
aZK(d,e){var w=null
return B.br(w,w,w,w,w,D.fc0,w,w,!0,new B.b4(4,B.m(16),P.vj),w,w,w,w,w,D.tx,!0,w,w,w,w,new B.b4(4,B.m(16),D.b_E),w,w,w,w,w,w,w,w,A3.DP,e,w,w,w,w,w,w,w,D.fhm,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xX(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b5,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aRE,w,w,w))
return new B.D(H.ahM,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZJ(d,e){var w=null,v=B.m(18),u=B.I(A.bz,A.q,1)
return B.p(w,B.aF(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jP),A.f,w,w,new B.o(D.tx,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vG(d){return this.aZJ(d,A.bC)},
ob(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uo:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bz,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.k5,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.k5,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.db(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hl,r,r,r,A.FF,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
ag9(d,e,f){return this.ob(d,null,e,f)},
axw(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eE:A.bz,s=x.p
v=B.a([B.db(w,d,w,w,A.b8,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hl,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.w(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a5)},
aZN(d,e,f,g,h,i){return this.axw(d,e,f,g,h,5,i)},
ko(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f8S,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.eee,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eSa(this,h,i),u,u,u,u,u,u,!1,A.a5))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQL,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.ZN,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avn(w).cJU(A.b5,A.bz,A.b5.j(0.2),A.c,D.eSC,4)
return new B.D(A.xX,B.w(B.a([s,B.aa1(B.l2(u,u,u,g,f,new C.eSb(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ai9(d,e,f,g,h,i){return this.ko(d,e,f,g,h,null,i)},
aiB(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bKp:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bJ(p,p,p,p),o,o,o,A.a4),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eSd(this,e,u),o,o,o,o,o,o,!1,A.a5))}return B.bV(A.bB,n,A.bs,10,10)},
bLc(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3U
else{v=x.a8
w=B.C(new B.Z(D.a3U,new C.eRg(o),v),v.k("J.E"))}v=B.aL(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZK("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eRh(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8I,!0,A.a6,n,A.an,n,n,n,n)
u=B.aL(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZK("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eRi(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dd,!0,A.a6,n,A.an,n,n,n,n)
t=o.xX("DESIGNS",A.u7)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cTf[q]
r.push(new B.D(A.ip,o.ag9(p,o.x===p,new C.eRj(o,p)),n))}return B.w(B.a([v,A.R,u,t,B.cc(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aM),A.ac,new B.a7(n,118,B.hM(n,new C.eRk(o,w),w.length,n,n,A.aM,new C.eRl(),!1),n),A.N,o.aZJ(B.w(B.a([B.iH(A.b5,n,n,A.ae,!0,new C.eRm(o),n,D.ftF,n,D.fpV,o.k3),B.iH(A.b5,n,n,A.ae,!0,new C.eRn(o),n,n,n,D.fn9,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ain)],s),A.E,n,A.e,A.j,0,A.p)},
cEe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aB8()
if(a7.length===0)return a5.vG(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.JC,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.L)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a5(u).k("co.E"))
A.d.fc(m)
l=m.length!==0&&A.d.d8(m,new C.eSE(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.eSL(a5)
j=new C.eSN()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.JC,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aQ(11,11)
f=u.q(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eE:A.bz
d=new B.ay(e,u.q(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aM(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bJ(d,d,d,d),new B.bk(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.N3,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eSF(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a5))}o=a5.vG(B.bV(A.bB,o,A.t6,6,6))
i=B.a([a5.ob("All words",L.amE,!1,new C.eSG(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ag9("Sentence "+a3,!1,new C.eSH(a5,a7,v,a2)))
a2=a3}}i.push(a5.ag9("Clear picks",!1,new C.eSI(a5)))
i=B.bV(A.bB,i,A.bs,8,8)
g=a5.xX("SIZE OF THE PICKED WORDS",D.am5)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dnv[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eSJ(e,k)
f.push(a5.ag9(a0.b,l===a4,e))}return B.w(B.a([q,A.R,o,A.R,i,g,B.bV(A.bB,f,A.bs,8,8),A.R,a5.ob("Make every word normal",A.l6,!1,new C.eSK(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
czo(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bAO,B.d(A.d.fZ(D.axk,new C.eSn(q)).b,p,p,p,p,p,p,D.fap,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cA(new C.eSo(q)),l=q.xX("HIGHLIGHT BEHIND THE WORDS",A.a0I),k=q.p1?-1:q.k4
k=q.aiB(k,new C.eSp(q),D.d2V)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.R,m,l,B.bV(A.bB,B.a([k,B.aB(p,B.p(p,D.bNp,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f40,A.a4),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSs(q),p,p,p,p,p,p,!1,A.a5)],o),A.t6,10,10),A.al,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.JC,p,p,p)],o)
if(q.gaVq()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ai9("Colour",l,0,360,new C.eSt(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ai9("Shade",k,0.15,0.9,new C.eSu(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ko("Strength",l,0.15,1,new C.eSv(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vG(B.w(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xX("LOOK",A.yN))
m=B.a([q.ob("Bold",I.am3,q.fy,new C.eSw(q)),q.ob("Italic",I.am4,q.go,new C.eSx(q))],o)
for(u=0;u<3;++u){l={}
k=D.cUr[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uo:p
w=w?p:A.c.j(0.07)
s=new B.aQ(14,14)
r=new B.ay(q.id===l.a?A.K:A.bz,1,A.q,-1)
m.push(B.aB(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSy(l,q),p,p,p,p,p,p,!1,A.a5))}n.push(B.bV(A.bB,m,A.t6,8,8))
n.push(q.xX("COLOUR",A.nl))
n.push(q.aiB(q.fx,new C.eSz(q),D.deb))
n.push(A.al)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.JC,p,p,p))
n.push(q.xX("SIZE AND PLACE",A.GB))
m=q.fr
m=q.ko("Text size",m,0.5,1.6,new C.eSq(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vG(B.w(B.a([m,q.ko("Up / down",l,0.12,0.5,new C.eSr(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.w(n,A.E,p,A.e,A.j,0,A.p)},
cis(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b5.j(0.6),A.q,1.6)
u=B.a([A.b5.j(0.18),A.bD.j(0.12)],x.O)
return B.aB(p,B.p(p,B.w(B.a([B.p(p,D.bST,A.f,p,p,D.b2D,p,62,p,p,p,p,p,62),A.aA,D.fr9,A.al,D.fvT],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tx,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bwB,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZM(),p,p,p,p,p,p,!1,A.a5)}w=x.p
v=B.B(B.a([B.bv(B.m(12),new B.a7(46,62,B.fO(o,A.A,120,p,A.ce,A.bU,!1,p,!1,p,p),p),A.aq),A.bc,B.E(B.w(B.a([D.fqG,A.N,B.bV(A.bB,B.a([q.ob("Change",A.kd,!1,q.gaZM()),q.ob("Remove",A.eb,!1,new C.eS1(q))],w),A.bs,6,6)],w),A.E,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dat[t]
u.push(q.ob(s.b,s.a,q.at===t,new C.eS2(q,t)))}u=B.bV(A.bB,u,A.bs,8,8)
r=q.at
A:{if(0===r){s=q.c19(o)
break A}if(1===r){s=q.c06()
break A}if(2===r){s=q.bH4()
break A}if(3===r){s=q.bNs()
break A}s=q.bJ9()
break A}return B.w(B.a([v,A.ac,u,A.aA,s,A.R,new B.bK(A.a3,p,p,q.ob("Reset the whole picture",A.l6,!1,new C.eS3(q)),p)],w),A.E,p,A.e,A.j,0,A.p)},
c19(d){var w=this,v=x.p
return B.w(B.a([B.bV(A.bB,B.a([w.ob("Auto enhance",E.a0k,!1,new C.eRU(w)),w.ob("Make words easy to read",A.p2,!1,new C.eRV(w))],v),A.bs,8,8),A.aA,B.cA(new C.eRW(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c06(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ko("Exposure",n,-1.5,1.5,new C.eRy(o),0,A.k.ab(n,1))
w=o.RG
w=o.ko("Brightness",w,-0.5,0.5,new C.eRz(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ko("Contrast",v,0.4,2,new C.eRA(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ko("Fade",u,0,1,new C.eRB(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ko("Spotlight",t,0,1,new C.eRC(o),0,""+A.k.V(t*100))
s=o.Z
s=o.ko("Darken",s,0,0.85,new C.eRD(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ko("Vignette",r,0,0.9,new C.eRE(o),0,""+A.k.V(r*100))
q=o.aB
q=o.ko("Shade behind words",q,0,0.85,new C.eRF(o),0,""+A.k.V(q*100))
p=o.aJ
return o.vG(B.w(B.a([n,w,v,u,t,s,r,q,o.ko("Shade top & bottom",p,0,0.85,new C.eRG(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bH4(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ko("Colour strength",q,0,2.2,new C.eQU(s),1,""+A.k.V(q*100))
w=s.to
w=s.ko("Warmth",w,-1,1,new C.eQV(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ko("Tint",v,-1,1,new C.eQW(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vG(B.w(B.a([q,w,v,s.ko("Shift colours",u,-180,180,new C.eQX(s),0,""+A.k.V(u)+"\xb0"),new B.bK(A.a3,r,r,s.ob("Negative",D.bIu,s.y1,new C.eQY(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xX("COLOUR WASH",A.O0)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.aw2)
t=B.a([u,v,s.aiB(w,new C.eQZ(s),q),A.N],t)
if(s.b0!=null){q=s.b_
t.push(s.vG(s.ai9("Wash strength",q,0,0.9,new C.eR_(s),""+A.k.V(q*100))))}return B.w(t,A.E,r,A.e,A.j,0,A.p)},
bNs(){var w,v,u,t,s,r=this,q=r.y2
q=r.ko("Blur",q,0,24,new C.eRs(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ko("Soft focus",w,0,1,new C.eRt(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vG(B.w(B.a([q,w,r.ko("Film grain",v,0,1,new C.eRu(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xX("LIGHT LEAK",D.bId)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d0(D.aw2,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.aiB(q,new C.eRv(r),t),A.N],u)
if(r.bb!=null){q=r.bJ
u.push(r.vG(r.ai9("Leak strength",q,0,1,new C.eRw(r),""+A.k.V(q*100))))}return B.w(u,A.E,null,A.e,A.j,0,A.p)},
bJ9(){var w,v,u,t,s=this,r=s.aH
r=s.ko("Zoom",r,1,3,new C.eR3(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.ko("Left / right",w,-1,1,new C.eR4(s),0,""+A.k.V(w*100))
v=s.bB
v=s.ko("Up / down",v,-1,1,new C.eR5(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.w(B.a([s.vG(B.w(B.a([r,w,v,s.ko("Turn",u,-180,180,new C.eR6(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bV(A.bB,B.a([s.ob("Turn 90\xb0",H.ana,!1,new C.eR7(s)),s.ob("Flip sideways",A.Go,s.c5,new C.eR8(s)),s.ob("Flip upside down",A.Go,s.cK,new C.eR9(s))],t),A.bs,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c3R(){var w=null,v=B.m(22),u=B.I(A.bz,A.q,1)
return B.p(w,B.w(B.a([D.eSO,A.R,D.fsH,A.aA,B.aB(w,B.p(A.A,D.eT0,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.uo,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRX(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tx,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c0Y(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eRP(p),m=x.p,l=B.B(B.a([D.bAU,p.ob("Reset",A.l6,!1,new C.eRL(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.JC,o,o,o),j=p.xX("SHAPE",A.an6),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cv[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZN(n.$2(t,p.cy),62,u.b,s===t,new C.eRM(v,p),62))}}i=B.bV(A.bB,i,A.bs,8,8)
v=p.xX("RING",A.rf)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cq[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZN(n.$2(p.cx,t),62,r.b,q===t,new C.eRN(s,p),62))}u=B.bV(A.bB,u,A.bs,8,8)
s=p.CW
return B.w(B.a([l,A.au,k,j,i,v,u,A.ac,p.vG(p.ko("Size",s,0.12,0.4,new C.eRO(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b1I(d){return new B.a7(null,d,new B.fK(0.5625,B.cA(new C.eS7(this)),null),null)},
cyF(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bz,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uo:q
t=new B.aQ(14,14)
s=D.dcC[w]
r=v?A.c:A.aB
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.by(1,A.bd,B.aB(A.ch,B.db(q,B.w(B.a([r,A.cO,new B.qs(A.e_,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.bk(t,t,t,t),q,u,A.n),D.bsc,q,q,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eSg(this,w),q,q,q,q,q,q,!1,A.a5),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bui,A.lY,q,q,q)},
aQc(){var w,v,u=this,t=null,s=u.cyF(),r=u.as
A:{if(0===r){w=u.bLc()
break A}if(1===r){w=u.cEe()
break A}if(2===r){w=u.czo()
break A}if(3===r){w=u.cis()
break A}if(4===r){w=u.c0Y()
break A}w=u.c3R()
break A}v=x.p
return B.bv(A.tc,B.el(B.w(B.a([s,B.E(B.cs(B.a([w],v),t,D.bvn,t,t,A.af,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Xo,!0),A.aq)},
aMp(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc8Q(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.eTb,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.aZ,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1)
p=s.Q?r:s.gbN0()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eYD)
else t.push(D.bMu)
t.push(A.ab)
t.push(D.bD1)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b7,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uo,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a5),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b1K,r,r,r,r,G.aic,r,r,r)},
aZL(){var w=null
return new B.D(T.ZI,B.B(B.a([B.aI(w,w,w,w,A.mE,w,w,w,new C.eRx(this),w,w,w,w,w,w),D.fIf,A.b0,D.bVa],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.B9,B.bm(!0,B.cA(new C.eSO(this)),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)}}
C.bfn.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.ez()
m.dr(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.X()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.N()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.am()*w
o=m.am()*v
n=((q&1)===0?t:r).L()
s.drawRect(B.bW(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aw(d){return d.b!==this.b}}
C.ry.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.ma.prototype={}
C.zE.prototype={
ag(){var w=this
return B.G(["at",w.a.a7().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nO.prototype={}
C.w3.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a80.prototype={}
C.ark.prototype={}
C.a0n.prototype={
U(){return new C.aHr(new B.aq(A.at,$.ax()),B.jU(!0,null,!0,!0,null,null,!1),D.dDy,B.a([],x.s),B.ex([D.Ii],x.Q))}}
C.aHr.prototype={
t(){var w=this.d
w.S$=$.ax()
w.P$=0
this.f.t()
this.a2()},
a0i(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0i=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().Ca(90,700,700,A.eI),$async$a0i)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a0i)
case 8:p=e
if(r.c!=null)r.m(new C.eZ1(r,p,q))
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
return B.i($async$a0i,v)},
a0l(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0l=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aHC(78,n,1100,1100),$async$a0l)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fi(),$async$a0l)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.ca(p,"data:"+k+";base64,"+A.cJ.gct().aL(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eZ2(r,p))
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
return B.i($async$a0l,v)},
b3K(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fO(A.cF.aL(A.d.gak(d.split(","))),A.A,u,u,A.ce,A.bU,!0,u,!1,u,u)
return w}catch(v){}return D.bqm},
c13(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.csD(C.fBK(w,this.b3K(d),f),g)},
acD(d,e,f,g,h){var w=null,v=new C.eZ_(f,e),u=new C.eZ0(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bz:A.b5.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.V,w,A.aa,A.f,B.a([B.at(B.W(f?A.C5:A.NQ,A.bX,w,w,w,26),w,w,w),D.ejY],x.p),w),w)
else p=this.c13(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a2,!0,s,B.aK(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bMb],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYZ(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aX9(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bv(B.m(8),B.fO(A.cF.aL(A.d.gak(h.split(","))),A.A,p,p,A.ce,A.bU,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bz:A.be.j(0.6),A.q,1)
q=o
n=q==null?B.W(d,A.em,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a1,p,p,p,A.JI,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1D,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a5))
return B.aF(!1,A.a2,!0,u,B.aK(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l0,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fFa(),$async$a8M)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eYI(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.eYJ(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8M,v)},
aet(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aet=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eYL(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eYM(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eYN(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ca(p,h)}w=7
return B.b(C.fAs(q,r.cx,j,new C.b19(r.z,r.Q,r.as,r.at),new C.eYO(r),i,m,p,k),$async$aet)
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
if(r.c!=null)r.m(new C.eYP(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aet,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eK,g).w
g=B.aH(d,A.bW,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aB(h,B.p(h,D.bPr,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.J,24)],v),D.bZi,A.a4),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZf(i),h,h,h,h,h,h,!1,A.a5),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,D.a1D,h,h,h,i.ax?h:new C.eZg(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbC1()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hp(B.aF(!1,A.a2,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.w3:A.hD,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wk,A.a4),h,40,h,h,h,h,h,40),A.cK,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cK,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.b_b),h,h,h,h,h,h,h,h,A2.Jn,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.ip,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aR6,!0,A.a6,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eZh(i)
s=i.aX9(A.lx,q,r,i.gciU(),s)
r=i.z
r=B.E(i.acD(new C.eZj(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.w(B.a([s,A.al,B.B(B.a([r,A.bn,B.E(i.acD(new C.eZk(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.eZl(i)
s=i.aX9(A.u2,r,p,i.gcj1(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.acD(new C.eZm(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aA,D.fx8,A.au,D.fA_,A.bv,u,A.N,D.fyp,A.aA,v,A.bv,B.B(B.a([q,A.as,B.E(B.w(B.a([s,A.al,B.B(B.a([p,A.bn,B.E(i.acD(new C.eZn(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.al,D.fBO],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bir,A.q,1)
w=C.agU(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bK(A.a3,h,h,B.p(h,B.B(B.a([D.bQx,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fg3,h,h,h),B.aK(!1,h,!0,D.eeu,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eZo(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bbj,h,u,v,h,h,A.n),h,h,h,h,D.btZ,h,h,h),h)],t))}o.push(A.bv)
o.push(D.fnR)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d50[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.by(1,A.bd,new B.D(A.jw,B.aB(h,B.db(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.bJ(k,k,k,k),h,h,h,A.a4),A.eL,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZp(i,l),h,h,h,h,h,h,!1,A.a5),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.fGv)
o.push(A.N)
o.push(B.cA(new C.eZq(i)))
o.push(A.bv)
o.push(D.fvd)
o.push(A.N)
w=B.a([i.b6A("auto","Let AI choose",A.e2,A.Qx)],t)
for(v=x.O,m=0;m<11;++m){j=D.wq[m]
u=j.d
w.push(i.b6A(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bV(A.bB,w,A.bs,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.be.j(0.5):A.bz,A.q,1)
o.push(B.p(h,B.iH(h,A.be,h,h,h,new C.eZi(i),D.bLE,D.fFK,h,D.fq9,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aQj,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc8U()
v=B.fp(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.X),h,h,h,h,h)
u=i.ax
t=u?D.eYt:A.GQ
o.push(new B.a7(h,54,B.lB(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ou,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cc(B.w(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vR,h,h,A.af),!0,!1,A.ae,!0,!1),A.f,h,new B.aX(0,680,0,g.a.b*0.92),D.abK,h,h,h,h,h,h,h,h),h)},
bOE(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eYQ(this,p,d)
if(d===D.D6)return new C.aE0(p,o,q)
w=B.m(16)
v=p?E.wk:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aB:A.bz,A.q,1)
s=B.W(p?A.ea:C.hI_(d),A.c,q,q,q,20)
r=C.hI0(d)
return B.aB(q,B.db(q,B.w(B.a([s,A.au,B.eN(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e_)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hl,q,64,q,A.hB,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a5)},
b6A(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bz
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a4),v,26,v,v,v,v,v,26)
return B.aB(v,B.db(v,B.B(B.a([w,M.Je,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eL,v,v,v,M.aju,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZ4(this,d),v,v,v,v,v,v,!1,A.a5)}}
C.a0m.prototype={
U(){return new C.aHq(new B.aq(A.at,$.ax()))}}
C.aHq.prototype={
t(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a2()},
aeu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aeu=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eYB(r))
w=1
break}B.f_()
r.m(new C.eYC(r))
t=4
q=C.i8r(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i8b(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eYD(r,q))
w=1
break}k=r.c
if(k!=null)B.a3(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h_E()
f=$.CH.h(0,k.a)
o=f==null||J.cn(f)?null:J.fr(f)
if(o==null){r.m(new C.eYE(r))
w=1
break}n=C.i89(o,r.a.c)
C.i85(r.a.c.a)
$.fZV=!0
k=r.c
if(k!=null)B.a3(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h2v(j)
h=C.h2w(r.a.c)
e=C.h2x(r.a.c)
w=7
return B.b(C.bBL(k,r.a.c.a,j,h,new C.eYF(r),i,e,a0),$async$aeu)
case 7:m=a3
k=r.c
if(k!=null)B.a3(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.eYG(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eK,i).w
i=B.aH(d,A.bW,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ano,A.f,j,j,D.b1p,j,34,j,j,j,j,j,34),A.as,D.bBw],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a8m,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.abd),j,j,j,j,j,j,j,j,A2.Jn,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aR6,!0,A.a6,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d1g[q]
o=A.c.j(0.06)
n=k.e?j:new C.eYH(k,p)
r.push(B.mN(j,o,new B.y(p,j,Ax.TY,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vj,j))}w=B.a([w,A.aA,u,A.al,t,A.aA,s,A.R,B.bV(A.bB,r,A.bs,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aQj,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc8V()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.eg.j(0.5)],x.O):D.czV
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eeq:D.bQ6
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a4),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a2,!0,j,B.aK(!1,s,!0,B.eF(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hI,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cc(B.w(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vR,j,j,A.af),!0,!1,A.ae,!0,!1),A.f,j,new B.aX(0,680,0,i.a.b*0.85),D.abK,j,j,j,j,j,j,j,j),j)}}
C.b19.prototype={}
C.aE0.prototype={
U(){return new C.bjW(null,null)}}
C.bjW.prototype={
gaxx(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.pY,null,1,null,v)
w.cL(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaxx().t()
this.bvW()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c7(this.gaxx(),new C.efZ(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
C.bhz.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d7f[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=D.xM.j(0.25+r*0.6).gp(0)
n=o.L()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.L()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.L()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
aw(d){return d.b!==this.b}}
C.arS.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.ZK.prototype={
U(){return new C.aBw()}}
C.aBw.prototype={
gaiy(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ah6(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAi(){var w=this.e
return w===$?this.e=C.h2v(this.a.c).q(0,D.D6):w},
a8z(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8z=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dkI(s))
u=3
r=A.d.fZ(D.wq,new C.dkJ(s))
q=B.de(C.h2v(s.a.c),x.Q)
l=q
J.hy(l,D.D6)
p=l
if(s.gAi())J.ca(p,D.D6)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAi()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h2w(i.c)
g=C.h2x(s.a.c)
w=6
return B.b(C.bBL(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8z)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ah6(q,s.gaiy())
f=q==null?null:q.b
n=f==null?s.gaiy():f
if(!J.A(n,r.a)&&!s.gAi())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a3(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dkK(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aQ:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bz:A.aL,A.q,1),g=x.p,f=B.E(B.w(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dkN(d)
e=B.B(B.a([f,B.aI(n,n,n,n,B.W(A.cw,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wq[w]
u=o.gaiy()
t=o.f?n:new C.dkO(o,v)
f.push(new C.bsn(v,u===v.a,t,n))}f=B.kG(1.25,f,3,10,10,n,A.dO,!0)
u=B.m(18)
t=o.gAi()?D.c14:n
if(o.gAi())s=n
else s=m?A.bm:A.bM
r=B.W(A.e2,o.gAi()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAi()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.w(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAi()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAi()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.as,q,B.XK(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dkP(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,K.aif,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fgn,n,n,n)],g))
f=B.cc(B.w(f,A.E,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FM,n,n,A.af)
u=o.f?n:o.gbB0()
t=B.bn(A.K,n,n,n,n,n,A.ae,n,new B.b7(B.m(16),A.X),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.w(B.a([new B.D(D.bx4,e,n),new B.dr(1,A.cn,f,n),new B.D(A.FL,new B.a7(1/0,50,B.bH(B.eF(B.at(o.f?A.rS:D.fxC,n,n,n),n,new B.o(n,n,n,s,n,D.c_E,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tT,n,n,n,n),!0,!1,A.ae,!0,!0)}}
C.bsn.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bK(A.lk,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bK(A.lL,w,w,B.d(v.b,w,w,w,w,w,w,D.fgk,w,w,w),w)],x.p)
if(q)v.push(D.aXF)
return B.aB(w,B.db(w,new B.an(A.V,w,A.aa,A.r,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eL,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a5)}}
C.efW.prototype={
aF9(d,e,f){return e+"@"+A.a.aY(A.o.fV(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wD(d,e){return this.aF9(0,e,null)}}
C.aLU.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.b15.prototype={
B(d){var w,v,u=null,t=C.h1k(this.c)
if(t==null)w=D.boS
else{w=B.aH(d,u,x.w).w.cJm(D.btv,D.eXE)
v=this.d
w=B.rl(B.e2(B.ao9(!1,t,!1,v,!1,390),!v,u),w)}return B.eN(A.A,new B.a7(416,870,new C.blv(w,u),u),A.f,A.dw)}}
C.blv.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.djl[w]
u=new B.aQ(3,3)
s.push(new B.cM(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.aph,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dkB[w]
u=new B.aQ(3,3)
s.push(new B.cM(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.aph,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,B.c0(t,new B.o(t,t,t,B.m(64),D.cRU,D.bZ_,A.n),A.bf),0,0,0))
s.push(B.bS(3,B.c0(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bS(13,B.bv(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.at(B.p(D.aXQ,B.p(t,t,A.f,t,t,D.b1I,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,B.e2(B.bv(B.m(51),D.bqs,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.at(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.V,t,A.aa,A.f,s,t)}}
C.lj.prototype={
pB(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.eq(A.L,!1,e.l(),A.aE,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mK,D.cQ,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.eq(A.L,!1,v.l(),A.aE,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dg,D.cQ,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rz(i,l,0,0,B.a([f,w,C.eq(A.bh,!1,4279310375,A.aE,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fw,t.l(),3,"",0,0,"",D.cl,D.f6,0.3,0.35,0.72)],s),C.cD(),D.mJ,"","","Welcome",D.dg)
u=C.cD()
u=C.eq(A.bh,!1,e.l(),A.aE,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
w=C.cD()
w=C.rz(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aE,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uF,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mJ,"","","Agenda",D.dg)
u=C.cD()
u=C.eq(A.bh,!1,e.l(),A.aE,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
f=C.cD()
f=C.rz(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aE,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mJ,"","","Key Point 1",D.dg)
u=C.cD()
u=C.eq(A.bh,!1,e.l(),A.aE,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
r=C.cD()
r=C.eq(A.bh,!0,v.l(),A.aE,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.08,0.24)
q=C.cD()
q=C.rz(i,l,0,0,B.a([u,r,C.eq(A.bh,!0,v.l(),A.aE,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.52,0.24)],s),C.cD(),D.mJ,"","","Key Point 2",D.dg)
r=C.cD()
r=C.eq(A.L,!1,e.l(),A.aE,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.dg,D.cQ,0.8,0.1,0.32)
e=C.cD()
p=C.BK(l,l,l,l,D.D2,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rz(i,l,0,0,B.a([r,C.eq(A.L,!1,v.l(),A.aE,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cl,D.cQ,0.7,0.15,0.58)],s),C.cD(),D.mJ,"","",h,D.dg)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EF.prototype={
bA(d){return this.e.$1(d)}}
C.et.prototype={}
C.j2.prototype={}
C.Ew.prototype={
gaKY(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agU(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3I(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ew(v,u,t,d==null?w.d:d)},
FK(d){return this.a3I(null,d,null,null)},
aDS(d){return this.a3I(null,null,null,d)},
cJk(d,e){return this.a3I(d,e,null,null)},
bbN(d){return this.a3I(d,null,null,null)},
bbU(d){return this.a3I(null,null,d,null)}}
C.Nx.prototype={
U(){return new C.bjk(new B.eK(0,$.ax()),null,null)}}
C.bjk.prototype={
a_(){var w,v=this
v.a1()
w=v.wr(new C.dVk(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.hQ(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.S$=$.ax()
w.P$=0
this.bvr()},
B(d){var w=C.agU(this.a.c.a)
if(w==null)w=A.d.gH(D.Ha)
return B.cA(new C.dVj(this,w,C.hhC(this.a.c.d)))}}
C.bqW.prototype={
B(d){return B.nT(A.VL,this.e,new C.eXP(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.beu.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSP(d,e,v)
break
case"confetti":w.bHy(d,e,v)
break
case"crown":w.bJa(d,e,v)
break
case"aurora":w.bC5(d,e,v)
break
case"champagne":w.bFq(d,e,v)
break
case"diamonds":w.bLl(d,e,v)
break
case"starburst":w.cwj(d,e,v)
break
case"balloons":w.bCj(d,e,v)
break
case"galaxy":w.bQr(d,e,v)
break
case"redcarpet":w.cnd(d,e,v)
break
case"coins":w.bGX(d,e,v)
break
case"lanterns":w.c_C(d,e,v)
break
case"hearts":w.bYf(d,e,v)
break
case"petals":w.cij(d,e,v)
break
case"butterflies":w.bEp(d,e,v)
break
case"neon":w.c3B(d,e,v)
break
case"disco":w.bLw(d,e,v)
break
case"sunrise":w.cxX(d,e,v)
break
case"pearls":w.chn(d,e,v)
break
case"snow":w.cw0(d,e,v)
break
case"laurel":w.c_I(d,e,v)
break
case"ribbons":w.cpJ(d,e,v)
break
case"kente":w.c_q(d,e,v)
break
case"trophy":w.cBy(d,e,v)
break
case"shooting":w.ctM(d,e,v)
break
case"bokeh":w.bCE(d,e,v)
break
case"orbits":w.cf_(d,e,v)
break
case"flowers":w.bPH(d,e,v)
break
case"music":w.c3j(d,e,v)
break
case"mandala":w.c1K(d,e,v)
break
case"sparklers":w.cw7(d,e,v)
break
case"city":w.bGd(d,e,v)
break}},
rG(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.oD
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cR(w,t,w+f,t))
u.F(new B.cR(w,t,w,t+f))
u.F(new B.cR(w,t,w-f,t))
u.F(new B.cR(w,t,w,s))
u.F(new B.bE())
d.aS(u,v)
d.af(e,f*0.18,v)},
lM(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rG(d,new B.x(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSP(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lM(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.i2,A.bD],w),B.a([A.eA,A.aR],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.ks(new B.x(g,c1),new B.x(f,e),A.ct.av(0,i/0.22))
a0.toString
$.X()
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.sau(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rC(new B.x(g,c1),a0)))
a1.c=n
a1.d=A.bV
a2=B.ks(new B.x(g,c1),a0,0.75)
a2.toString
a3=a1.L()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.L()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cY(h,4)
if(a5<0.15){a4=1-a5/0.15
$.X()
a8=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hC(A.G,o)
a3=a8.L()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cY(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cY(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.X()
b9=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bV
b9.a=A.oD
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rG(c3,new B.x(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHy(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.N()
a0.sau(new B.a8(A.ax,A.aC,A.x,D.ddR,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aA(0,new B.a9(0,0,f,e)))
a1.b1(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.Q_[A.o.D(A.k.bm(C.cY(u,7)*5),0,4)]
J.bx(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bA(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.X()
t=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ag
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cC(m.gbE().a.snapshot()):t).a,k)
k.delete()}else{t=B.cj(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.bW(t),k)
k.delete()}f.restore()}this.lM(a1,a2,a3,25,A.bL,30)},
bJa(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.x(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.X()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.sau(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bdb],v),a4,a4).aA(0,B.bU(w,u)))
l=o.L()
o=m.gbE().a.snapshot()
t.drawPath((m.e=new B.cC(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.X().r,A.ao,a4,a4,B.a([],r))
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
n.sau(new B.a8(A.b3,A.b6,A.x,D.dcx,a4,a4).aA(0,new B.a9(a5,a6,o,v)))
a8.aS(i,n)
for(v=[D.etZ,D.enj,D.eDa],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.L()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.L()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.r=A.hM.gp(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xd(i),u=B.a([],x.X),o=new B.vF(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.k_(y.M));--f
o.jB()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cv([new B.Hu(o,f),0,d*h,!0]),B.a([],r))
f=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
f.b=A.ag
f.c=g
f.e=A.hr
f.r=A.bL.gp(0)
l=f.L()
f=d.gbE().a.snapshot()
t.drawPath((d.e=new B.cC(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rG(a8,new B.x(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lM(a8,a9,b0,45,A.bL,40)},
bC5(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lM(a8,a9,b0,60,A.c,50)
w=[D.eOx,D.eOf,D.eO9,D.ePv]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.X()
i=B.a([],p)
h=new B.aO(n.r,A.ao,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.X()
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.b=A.ag
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oD
n.z=new B.hC(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbE().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.b=A.ag
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oD
n.z=new B.hC(A.G,v)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbE().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.X()
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.r=A.vD.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.oD
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFq(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.N()
a0.sau(new B.c_(A.A,0.5,A.x,l,0,B.a([A.hL.j(0.25+0.1*h),D.Xy],x.O),l,l).aA(0,B.bU(new B.x(g,f),e)))
a1.af(new B.x(g,f),e,a0)
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
if(q!=null)d.bA(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.X()
a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a0.b=A.ag
a0.c=h
a0.r=D.Q_[A.o.E(w,4)].j(0.7).gp(0)
p=a0.L()
a0=u.e
g.drawPath((a0==null?u.e=new B.cC(u.gbE().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rG(a1,new B.x(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.X()
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.b=A.ag
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xC.j(0.75).gp(0)
p=d.L()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.L()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLl(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lM(a9,b0,b1,30,A.kX,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bx(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.X()
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
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.sau(new B.a8(A.ax,A.aC,A.x,D.d8g,a5,a5).aA(0,B.cj(A.J,k*1.2,o)))
a2=g.L()
g=f.gbE().a.snapshot()
v.drawPath((f.e=new B.cC(g)).a,a2)
a2.delete()
a3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3.b=A.ag
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.L()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.L()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.L()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.rG(a9,new B.x(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cwj(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.X()
o=B.a([],v)
n=new B.aO(p.r,A.ao,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.L()
r=n.gbE().a.snapshot()
w.drawPath((n.e=new B.cC(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.X()
u=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
u.b=A.ag
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.L()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bpQ.av(0,k)*(0.5+0.5*C.cY(t,v)))
this.rG(d,new B.x(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Q_[A.o.D(A.k.bm(C.cY(t,4)*5),0,4)],u)}},
bCj(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.awr[A.o.E(o,6)]
h=$.X()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bA(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.X()
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.b=A.ag
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.L()
d=f.e
u.drawPath((d==null?f.e=new B.cC(f.gbE().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cj(new B.x(j,k),n*2.3,l)
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d=B.ar(i,A.w,0.35)
d.toString
l.sau(new B.c_(D.aXT,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.awi,a3).aA(0,a2))
a1=l.L()
u.drawOval(B.bW(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.L()
l=g.gbE().a.snapshot()
u.drawPath((g.e=new B.cC(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.bx(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cj(A.J,t,v)
$.X()
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=D.awr[A.o.E(o,6)].j(0.85).gp(0)
a1=r.L()
u.drawRect(B.bW(s),a1)
a1.delete()
u.restore()}},
bQr(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.x(a8,a9)
this.lM(b1,b2,b3,50,A.c,70)
for(w=[D.eOF,D.eOl,D.eOr],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.X()
k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.sau(new B.c_(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bU(new B.x(r,m),l)))
j=k.L()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cY(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cY(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eE,g)
k.toString
d=C.cY(i,3)
$.X()
a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cY(i,4)).gp(0)
a0.a=A.oD
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.N()
a9.sau(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.xC.j(0.55),D.afT],u),a4,a4).aA(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.x(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.ks(a3,a3.ad(0,new B.x(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.ks(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sau(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rC(a3,a5)))
a8.c=a7*0.005
a8.d=A.bV
b1.bL(a6,a5,a8)}},
cnd(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.X()
n=B.a([],s)
m=new B.aO(o.r,A.ao,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.sau(new B.c_(A.A,0.5,A.x,b5,0,B.a([A.xC.j(0.28),D.afT],w),b5,b5).aA(0,B.bU(new B.x(q,u),t)))
o.a=A.oD
l=o.L()
q=m.gbE().a.snapshot()
v.drawPath((m.e=new B.cC(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eu:A.en)
a9=$.X()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cR(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a9.sau(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).aA(0,new B.a9(a6,0,a6+i,j)))
l=a9.L()
a9=m.gbE().a.snapshot()
v.drawPath((m.e=new B.cC(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b1.r=A.hL.gp(0)
b1.c=o
b1.d=A.bV
l=b1.L()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.X().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bE())
v=B.N()
v.sau(D.c_x.aA(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aS(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rG(b9,new B.x(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bGX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.cj(new B.x(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.sau(new B.a8(A.ax,A.aC,A.x,n>0?D.do1:D.cFI,null,null).aA(0,l))
k=q.L()
v.drawOval(B.bW(l),k)
k.delete()
q=-(s*0.22)
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.b=A.ag
j.c=Math.max(0.6,s*0.08)
j.r=D.bmB.gp(0)
k=j.L()
v.drawOval(B.bW(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rG(d,new B.x(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lM(d,e,f,30,A.bL,110)},
c_C(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lM(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.sau(new B.c_(A.A,0.5,A.x,d,0,B.a([Y.XL.j(0.45*k),D.aeJ],u),d,d).aA(0,B.bU(new B.x(l,m),j)))
g=h.L()
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
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i=B.ar(D.bdn,A.c,0.2*k)
i.toString
j.sau(new B.a8(A.b3,A.b6,A.x,B.a([D.bi1,i],u),d,d).aA(0,B.cj(new B.x(l,m),o*1.4,o)))
g=j.L()
j=f.gbE().a.snapshot()
v.drawPath((f.e=new B.cC(j)).a,g)
g.delete()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bYf(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bx(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.X()
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
f=D.d_6[A.o.E(p,5)]
m=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l=B.ar(f,A.w,0.25)
l.toString
m.sau(new B.c_(A.t9,0.5,A.x,d,0,B.a([A.c,f,l],u),K.a2P,d).aA(0,B.bU(A.J,o*1.4)))
e=m.L()
m=i.gbE().a.snapshot()
v.drawPath((i.e=new B.cC(m)).a,e)
e.delete()
v.restore()}this.lM(a3,a4,a5,30,A.i2,130)},
cij(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bx(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.X()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cR(p,l,0,p))
m.push(new B.cR(n,l,0,n))
m.push(new B.bE())
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
m=(q&1)===0?D.czU:D.d9z
n.sau(new B.a8(A.a3,A.a8,A.x,m,i,i).aA(0,B.bU(A.J,p)))
j=n.L()
n=k.gbE().a.snapshot()
v.drawPath((k.e=new B.cC(n)).a,j)
j.delete()
v.restore()}this.lM(d,e,a0,25,A.bL,140)},
bEp(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lM(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cY(r,1))
p=Math.sin(b2*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bx(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bx(v.save())
v.scale(a1*n,1)
a2=$.X()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pH(f,e,l,d,h,0))
a3.push(new B.pH(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a2.sau(new B.a8(A.a3,A.a8,A.x,i?D.d9i:D.dc0,a6,a6).aA(0,new B.a9(0,m,k,j)))
a5=a2.L()
a2=a4.gbE().a.snapshot()
v.drawPath((a4.e=new B.cC(a2)).a,a5)
a5.delete()
a2=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a2.b=A.ag
a2.c=Math.max(0.6,o)
a2.r=D.B2.gp(0)
a5=a2.L()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cC(a4.gbE().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=D.blT.gp(0)
p.c=q*0.1
p.d=A.bV
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c3B(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.x(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.c=v
q.r=D.axw[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bz(B.cj(e,r,r*1.6),new B.aQ(p,p))
o=q.L()
u.drawRRect(B.eU(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.axw[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.a9(j,i,j+w,i+l),new B.aQ(v,v))
$.X()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.ab1,p)
o=j.L()
u.drawRRect(B.eU(i),o)
o.delete()}},
bLw(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.x(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nI,A.ds][A.o.E(p,4)]
j=C.cY(p,3)
$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.oD
i.z=new B.hC(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.N()
t.r=A.aB.gp(0)
t.c=1.2
a3.bL(new B.x(a0,0),new B.x(a0,w-u),t)
t=B.N()
t.r=A.dt.gp(0)
a3.af(v,u,t)
J.bx(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.jQ(B.bU(v,u)))
a3.pE(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.r=B.ar(A.bl,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.L()
q.drawRect(B.bW(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rG(a3,v.ad(0,new B.x(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cxX(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.av(0,A.k.D(a4/3,0,1))),a1=new B.x(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.X()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.L()
r=p.gbE().a.snapshot()
w.drawPath((p.e=new B.cC(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.N()
a0.sau(new B.c_(A.A,0.5,A.x,h,0,B.a([D.b9k.j(0.6),D.aeJ],x.O),h,h).aA(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.sau(D.ekN.aA(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cj(new B.x(l,k),r,u)
o=j.L()
w.drawOval(B.bW(i),o)
o.delete()
i=B.cj(new B.x(l+q,k-n),r,m)
o=j.L()
w.drawOval(B.bW(i),o)
o.delete()}this.lM(a2,a3,a4,20,A.hM,180)},
chn(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.X()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bA(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bA(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bA(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.X()
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=B.ar(A.cC,A.jk,s/3).j(0.55).gp(0)
k=r.L()
r=p.e
w.drawPath((r==null?p.e=new B.cC(p.gbE().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
t.sau(new B.c_(Ap.xa,0.5,A.x,f,0,D.dfx,f,f).aA(0,B.bU(new B.x(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lM(a1,a2,a3,25,A.c,190)},
cw0(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.X()
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bV
J.bx(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.L()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.L()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.L()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lM(d,a0,a1,40,A.eA,200)},
c_I(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.x(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dk(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bx(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cj(new B.x(p,0),q,r)
$.X()
f=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
f.sau(D.c_k.aA(0,new B.a9(0,o,n,m)))
e=f.L()
s.drawOval(B.bW(g),e)
e.delete()
s.restore()}}$.X()
a0=B.N()
a0.b=A.ag
a0.c=a2*0.003
a0.r=D.bdF.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rG(a3,w.ad(0,new B.x(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lM(a3,a4,a5,40,A.bL,210)},
cpJ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hL,A.hM],a6),B.a([A.oO,A.i2],a6),B.a([A.aD,A.eE],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bQ<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
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
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.x(e,d+a0))}for(l=new B.dx(i,s),l=new B.bQ(l,l.gK(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bA(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bA(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.X()
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sau(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),D.d17,new B.mu(w)).aA(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cC(j.gbE().a.snapshot()):l).a,a2)
a2.delete()}this.lM(a8,a9,b0,40,A.c,220)},
c_q(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bm(g/t),5)
a1=g+t
$.X()
a2=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2S[a3].gp(0)
a4=a2.L()
s.drawRect(B.bW(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a5.r=D.a2S[A.o.E(a3+2,5)].gp(0)
a4=a5.L()
s.drawRect(B.bW(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rG(b1,new B.x(v*a7,l-a8),a9*(0.01+0.012*t),D.a2S[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cBy(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bL.j(0.06).gp(0)
o=p.L()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.X().r,A.ao,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cR(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cR(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cj(new B.x(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.b=A.ag
d.c=q
d.r=A.ay.gp(0)
o=d.L()
u.drawArc.apply(u,[B.bW(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sau(new B.a8(A.a3,A.a8,A.x,D.di3,A.awy,null).aA(0,new B.a9(v,a2,r,j)))
a4.aS(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rG(a4,new B.x(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHz(a4,a5,a6,60)},
bHz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bx(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cj(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.r=D.Q_[A.o.E(p,5)].gp(0)
m=n.L()
u.drawRect(B.bW(o),m)
m.delete()
u.restore()}},
ctM(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lM(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.E(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bm((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.x(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.sau(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aA(0,B.rC(new B.x(l,h),i)))
g.c=r
g.d=A.bV
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rG(a0,i,p,A.c,1-m)}},
bCE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.E(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.az8[l].j(n).gp(0)
m.a=A.oD
m.z=new B.hC(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
m.b=A.ag
m.c=Math.max(0.6,q*0.05)
m.r=D.az8[l].j(n*1.4).gp(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
cf_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bx(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cj(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.b=A.ag
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.L()
w.drawOval(B.bW(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.r=A.hM.gp(0)
n=k.L()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.r=A.hL.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.L()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lM(d,e,f,45,A.bL,270)},
bPH(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.x(m*a2,p)
break A}if(1===n){l=new B.x(m*a2,q)
break A}if(2===n){l=new B.x(r,m*a3)
break A}l=new B.x(s,m*a3)
break A}k=A.k.E(a7+C.cY(o,2)*4,4)/4
j=A.ev.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d6p[A.o.E(o,5)]
J.bx(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cj(new B.x(0,l),i,j)
$.X()
a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a0.sau(new B.a8(A.b3,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.cj(new B.x(0,l),f,h)))
a1=a0.L()
v.drawOval(B.bW(d),a1)
a1.delete()}$.X()
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=A.hL.gp(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lM(a5,a6,a7,30,A.hM,280)},
c3j(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.x(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.b=A.ag
j.c=v
j.r=D.avE[n].j((1-m)*0.8).gp(0)
i=j.L()
u.drawArc.apply(u,[B.bW(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avE[A.o.E(g,4)]
$.X()
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bx(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cj(A.J,d,d*1.5)
i=a1.L()
u.drawOval(B.bW(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.L()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.L()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c1K(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.x(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bx(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.X()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cR(h,m,0,g))
a0.push(new B.cR(j,m,0,i))
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.b=A.ag
d.c=t
d.r=B.ar(A.bL,A.nI,k).j(0.7).gp(0)
a2=d.L()
d=a1.gbE().a.snapshot()
v.drawPath((a1.e=new B.cC(d)).a,a2)
a2.delete()
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.r=A.hM.j(0.8).gp(0)
a2=d.L()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.X()
a5=B.N()
a5.sau(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.hL.j(0.25),D.Xy],x.O),a3,a3).aA(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lM(a7,a8,a9,30,A.bL,300)},
cw7(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bV
g=h.L()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.sau(new B.c_(A.A,0.5,A.x,null,0,B.a([A.hM,A.hL.j(0.6),D.Xy],o),null,null).aA(0,B.bU(new B.x(j,i),p)))
g=l.L()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.E(b2+C.cY(f,2)*e,e)/e
a0=A.k.bm((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a6.r=B.ar(A.hM,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bV
a6.a=A.oD
g=a6.L()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.L()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.L()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lM(b0,b1,b2,35,A.bL,310)},
bGd(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSP(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.sau(D.c0g.aA(0,j))
h=i.L()
r.drawRect(B.bW(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.L()
r.drawRect(B.bW(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.b__.prototype={
B(d){var w,v=null,u=new C.cay(),t=new C.caA(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aoq,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.caz(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ha[w]))
return B.bV(A.bB,s,A.bs,12,10)}}
C.Zh.prototype={
U(){return new C.azU()}}
C.azU.prototype={
gvH(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZQ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.aq(new B.ba(w.b,A.b4,A.aN),$.ax())}return v},
gaxy(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKY()
v=$.ax()
u.f!==$&&B.bF()
t=u.f=new B.aq(new B.ba(w,A.b4,A.aN),v)}return t},
t(){var w=this.gaZQ(0),v=$.ax()
w.S$=v
w.P$=0
w=this.gaxy()
w.S$=v
w.P$=0
this.a2()},
a_8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().Ca(90,700,700,A.eI),$async$a_8)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_8)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahQ(o,".png")?"image/png":"image/jpeg"
r.m(new C.d9Z(r,n,p))
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
return B.i($async$a_8,v)},
aZP(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.U6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agU(p.gvH().a)
if(n==null)n=A.d.gH(D.Ha)
w=p.gvH()
v=p.r
u=x.p
v=B.E(new B.an(A.V,o,A.aa,A.r,B.a([B.bS(0,new C.Nx(p.gvH(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HP(A.mE,new C.da3(d),B.nD(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HP(D.bKw,new C.da4(p),B.nD(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aR5,o,o,o)
t=B.E(B.aL(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZQ(0),o,o,o,o,o,2,p.aZP("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.da5(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.fJ,!0,A.a6,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hL.j(0.6),A.q,1)
if(p.gvH().d.length===0)q=D.bNT
else{q=C.hhC(p.gvH().d)
if(q==null)q=new Uint8Array(0)
q=B.i_(B.fO(q,A.A,o,o,A.ce,A.bU,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a4),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc8W(),o,o,o,o,o,o,!1,A.a5)],u)
if(p.gvH().d.length!==0)r.push(B.aI(o,o,o,o,D.a1D,o,o,o,new C.da6(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.w(B.a([v,B.p(o,B.w(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aL(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaxy(),o,o,o,o,o,2,p.aZP("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.da7(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dd,!0,A.a6,o,A.an,o,o,o,o),A.ac,B.dp(D.bMM,D.fHp,new C.da8(p,d),B.bn(A.ay,o,o,o,A.w,o,A.cj,o,new B.b7(B.m(14),A.X),o,o,o))],u),A.ai,o,A.e,A.P,0,A.p),A.f,o,o,D.b1U,o,o,o,o,A.FI,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),o,!1,!1,o,o)}}
C.aLq.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.ZC.prototype={
U(){return new C.bfX(new B.aq(A.at,$.ax()))}}
C.bfX.prototype={
t(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aQ:A.ak,k=B.aH(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bz:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.W(A.cw,l,o,o,o,o),o,o,o,new C.dgL(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cRk[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.aQ(12,12)
q=new B.aQ(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aK(!1,new B.bk(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pp,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bk(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dgM(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hz,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cj(A.bB,6,6,A.bs,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.B(B.a([B.E(B.aL(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.an,o,o,o,o),1),A.ab,B.bH(A.aS2,new C.dgN(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.w(B.a([f,new B.dr(1,A.cn,B.cs(e,o,o,o,o,A.af,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tT,A.Zo,o,o,o),!0,!1,A.ae,!0,!0)}}
C.bfk.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.ez()
a2.dr(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.N()
u.z=A.RC
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.am()
l=a2.am()
k=a2.am()
j=0.8+a2.am()*2.2
i=Math.sin(w*(3+a2.ar(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.am()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.L()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.L()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.X()
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.L()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.L()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aw(d){return d.b!==this.b}}
C.bf2.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.a9(0,0,0+a7.a,0+a7.b),A.kK),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.N()
a5.b=A.ag
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mI
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iM(a1))
v=new B.SG(new B.vF(B.xd(a4),!1,B.a([],x.X))).gH(0)
a4=v.a
a3=v.b
a4.jB()
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
$.X()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.b=A.ag
j.d=A.bV
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cv([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbE().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cv([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbE().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cv([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbE().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}}a4.jB()
e=u[a3].MU(n).a
$.X()
k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A3.pd
g=k.L()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.L()
q.drawCircle(k,f,2,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.bnN.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.ez()
e.dr(this.c)
w=a0.a*(0.2+e.am()*0.6)
v=e.ht()?-0.1:1.1
v=a0.b*v
u=new B.x(w,v)
t=a0.gaGp()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.X()
i=B.a([],n)
h=new B.aO(j.r,A.ao,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.sau(B.aV0(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lC
g=j.L()
j=h.gbE().a.snapshot()
q.drawPath((h.e=new B.cC(j)).a,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.b9Y.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.ez()
a0.dr(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.am()
l=a0.am()
k=Math.min(t,r)*(0.03+a0.am()*0.09)
j=a0.am()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.X()
e=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hC(A.G,k*0.35)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
e.b=A.ag
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.b9C.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.ez()
a0.dr(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.am()-0.5)*0.1)
k=v*(0.06+a0.am()*0.05)
j=a0.am()*3.141592653589793*2
i=$.X()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bA(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.b=A.ag
i.c=r
i.d=A.bV
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.L()
i=g.e
t.drawPath((i==null?g.e=new B.cC(g.gbE().a.snapshot()):i).a,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.buI.prototype={
a6(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sau(new B.c_(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cYS,null).aA(0,u))
d.b1(u,w)
w=u.cs(-3)
v=B.N()
v.b=A.ag
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lC
d.b1(w,v)},
aw(d){return d.b!==this.b}}
C.brJ.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.ez()
o.dr(q+p)
n=o.am()*w
m=o.am()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.am()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bV
h=i.L()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.L()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.L()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.L()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hC(A.G,k*0.3)
h=g.L()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aw(d){return d.b!==this.b}}
C.bqS.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.X()
v=B.N()
v.a=A.oD
v.sau(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aA(0,w))
d.b1(w,v)},
aw(d){return d.b!==this.b}}
C.ben.prototype={
a6(d,e){var w,v,u,t,s,r=e.gdG(),q=0.55+0.45*Math.sin(this.b)
$.X()
w=B.N()
w.b=A.ag
w.c=1.4
w.d=A.bV
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ag
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uy
r=new C.d9G(this,r*0.16,d,u,w)
t=e.gdG()*0.045
r.$3(new B.x(t,t),1,1)
v=e.a-t
r.$3(new B.x(v,t),-1,1)
s=e.b-t
r.$3(new B.x(t,s),1,-1)
r.$3(new B.x(v,s),-1,-1)},
aw(d){return d.b!==this.b}}
C.xD.prototype={}
C.IP.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.arj.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.uM.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mC.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.eI.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eq(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
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
u.n(0,"decoration",C.hW2(v.z))
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
C.lL.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,eI>")
n=B.C(new B.M(n,new C.cg_(),m),m.k("ak.E"))
return C.rz(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("M<1,a6<n,@>>")
n=B.C(new B.M(n,new C.cg0(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gba6(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSo(){if(!C.ky(this.w))return!1
var w=this.gba6()
if(w==null)return!1
return new B.T(Date.now(),0,!1).d_(w.bU())},
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
q=B.S(r).k("M<1,lL>")
r=B.C(new B.M(r,new C.cfP(),q),q.k("ak.E"))
return C.BK(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
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
v=B.S(w).k("M<1,a6<n,@>>")
w=B.C(new B.M(w,new C.cfQ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jF.prototype={}
C.b18.prototype={
B(d){return B.cA(new C.cfV(this))}}
C.aou.prototype={
U(){return new C.bj5(null,null)}}
C.bj5.prototype={
gaZR(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fO,null,1,null,v)
w.cL(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaZR().t()
this.bvc()},
B(d){return B.c7(this.gaZR(),new C.dHT(),this.a.c)}}
C.aLc.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.adk.prototype={
Q_(d,e,f,g){return this.bPn(d,e,f,g)},
bPn(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Q_=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Q_)
case 3:s=i
if(d.e==null){w=1
break}B.a3(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ek,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q_,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.df,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.al,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.B(B.a([B.E(new C.adB(A.hE,"Download",A.c_,new C.er1(w,d),!0,v),1),A.as,B.E(new C.adB(A.w5,"Share",A.bi,new C.er2(w,d),!1,v),1),A.as,B.E(new C.adB(A.ho,"Safari",A.b_,new C.er3(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.er4(d),v,v))
return B.bm(!0,new B.D(A.q1,B.w(B.a([B.p(v,B.w(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.j4,v,t,u,s,v,A.n),v,v,v,v,A.FP,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.ae,!0,!0)}}
C.adB.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aF(!1,A.a2,!0,v,B.aK(!1,u,!0,B.eF(B.w(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bzt,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b16.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqv(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c8X().akK(1.35)
s=B.avO(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAB(v)
if(i.e&&i.w!=null)q=B.aL(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bi,h,h,h,h,2,D.bVZ,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wL,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zV,A.an,h,A.TN,h,h)
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
w=n?t.cJ7(B.b0(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eJ:A.DD
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.TE:s
$.X()
j=B.N()
j.b=A.ag
j.c=3*w
j.e=A.hr
j.r=A.av.gp(0)
j=i.cpM(p,t,k,j)
k=g.r
w=new B.an(A.V,h,A.aa,A.r,B.a([j,i.cpK(k,t,l?A.TE:s)],x.p),h)}else w=i.cpL(p,t,g.k2?A.TE:s,m)
v=new B.nj(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.ch,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a5)}return new B.D(u,new B.bK(r,h,h,q,h),h)
case 1:case 4:return i.bYU()
case 3:return i.chm()
case 2:return B.b3(h,h,h,new C.b13(g,h),A.fG)
case 5:g=g.r
return new C.b15(g,!i.e&&i.z==null,h)}},
c8X(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ka
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cS(D.aeH,new B.x(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mO
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cS(A.bD,new B.x(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cS(v,new B.x(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cS(A.bb,new B.x(-3*v,0),0),new B.cS(A.aw,new B.x(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cS(A.cY,A.J,8*v),new B.cS(A.aw,new B.x(0,-3*v),18*v)],x.r)
k=A.u
w=A0.EG
break
case"ice":v=o.d
e=B.a([new B.cS(A.aR,A.J,10*v),new B.cS(A.cC,A.J,22*v)],x.r)
k=A.O
w=A.eA
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.ka
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d_U[q]
u.push(new B.cS(v,new B.x(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.x(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.N()
v=o.d
f.sau(D.bYH.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.KY,new B.x(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.N()
v=o.d
f.sau(D.bZ1.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cS(l,A.J,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cv
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cS(l.j(0.45),new B.x(u,u),0),new B.cS(l.j(0.2),new B.x(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.ka
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azs(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eUK.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cfT(h)
v=r.k2?C.i7L(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eJ:A.DD
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XO(B.d1(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cpM(d,e,f,g){return this.azs(d,e,f,!1,g)},
cpK(d,e,f){return this.azs(d,e,f,!1,null)},
cpL(d,e,f,g){return this.azs(d,e,f,g,null)},
bAB(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bYU(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.at(B.W(s.b===D.lc?A.GL:A.BP,A.aB,t,t,t,32),t,t,t)}w=u.bDD(r)
if(s.b===D.lc){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dD,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aO6(r,!0)
return C.fBK(s.go,v,s.id)}return w},
aO6(d,e){var w,v,u,t
try{w=C.i83(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cA(new C.cfS(this,w,v,e))
return u}catch(t){return D.acp}},
bDD(d){return this.aO6(d,!1)},
chm(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b7h
return C.i8l(v,w.db,w.dx)}}
C.b13.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.ag
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.b1(s,g)
d.b1(s,w)
break
case 1:d.hI(s,g)
d.hI(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
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
d.aS(r,g)
d.aS(r,w)
break
case 4:h=t/2
w.c=v+2
d.bL(new B.x(0,h),new B.x(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
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
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
break}},
aw(d){return d.b!==this.b}}
C.aIQ.prototype={
U(){return new C.bue(null,null)}}
C.bue.prototype={
a_(){var w,v=this
v.a1()
w=B.bl(null,A.io,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bxn()},
aOh(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c0(B.at(B.d(d,w,w,w,w,w,w,A.df,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAP(){var w,v=this,u=null,t=v.aOh("Slide A",A.bi),s=v.aOh("Slide B",A.b_)
if(v.a.c===D.cl)return new B.an(A.V,u,A.b2,A.r,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.f5m(v,s,t),u)},
B(d){return this.bAP()}}
C.aJs.prototype={
je(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jW(d){return d.b!==this.b}}
C.V4.prototype={
U(){return new C.bjg(null,null)}}
C.bjg.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bl(null,A.Bi,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dT6(u),x.a)},
bu(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dT5(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bvq()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.dT4(this),v.d)}}
C.IO.prototype={
B(d){return B.cA(new C.cfL(this))}}
C.azE.prototype={
U(){return new C.bdR()}}
C.bdR.prototype={
a_(){this.a1()
if(this.a.c!==D.cl)B.bN(A.Mm,new C.d6V(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.V4(C.eq(A.bh,!1,4279310375,A.aE,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f6,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c9,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eq(A.bh,!1,4294967295,A.aE,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.V,p,A.aa,A.r,B.a([w,B.ao(32,new C.V4(t,B.p(p,D.fsT,A.f,p,p,new B.o(s,p,B.I(A.aZ,A.q,1),r,p,p,A.n),p,p,p,p,A.jv,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b2t,A.bf)}}
C.a7J.prototype={
U(){return new C.bjU(null,null)}}
C.bjU.prototype={
gb_o(){var w=this.a
if(w.e)w=D.eUT.q(0,w.c)||D.aOe.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gb_o()){w=C.i6q(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bvU()},
B(d){var w,v=this,u=v.d
if(!v.gb_o()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.efF(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_2.prototype={
B(d){var w=null
return B.at(C.b17(!0,w,!1,C.eq(A.L,!1,this.e.l(),A.aE,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cl,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bf0.prototype={
je(d){return C.a2o(this.b,new B.a9(0,0,0+d.a,0+d.b).cs(-this.c))},
jW(d){return d.b!==this.b||d.c!==this.c}}
C.bpP.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cs(-this.d),g=this.b,f=C.a2o(g,h),e=a1.gdG(),d=new C.eVs()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aPL.aA(0,h))
a0.aS(f,w)
g=C.a2o(g,h.cs(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bmn.gp(0)
a0.aS(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.f3Y.aA(0,h))
a0.aS(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aS(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aS(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.f3W.aA(0,h))
a0.aS(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a2o(g,h.cs(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aS(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bb.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aS(f,g)
g=d.$1(e*0.016)
g.r=A.oP.gp(0)
a0.aS(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.f3R.aA(0,h))
a0.aS(f,w)
w=C.a2o(g,h.cs(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.baO.gp(0)
a0.aS(w,v)
g=C.a2o(g,h.cs(e*0.03))
v=d.$1(e*0.004)
v.r=D.bdr.gp(0)
a0.aS(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aPL.aA(0,h))
a0.aS(f,g)
for(g=B.xd(f),w=B.a([],x.X),g=new B.vF(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.k_(y.M));--q
g.jB()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bm(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jB()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jB()
m=w[q].MU(p*n/o).a
l=D.cYa[A.o.E(n,4)]
$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.L()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.L()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sau(D.f4_.aA(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aS(f,g)
g=d.$1(e*0.018)
g.sau(D.f3X.aA(0,h))
a0.aS(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a2o(g,h.cs(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nN.gp(0)
a0.aS(g,w)
break}},
aw(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqP.prototype={
a6(d,e){d.G_(C.a2o(this.b,new B.a9(0,0,0+e.a,0+e.b).cs(-this.c)),A.w,e.gdG()*0.05,!1)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.aLp.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aLS.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aNa.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.a81.prototype={}
C.NZ.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aEo(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
gdY(){return this.c},
gTK(){return this.r},
gTL(){return this.w},
gLI(){return this.x}}
C.aEo.prototype={
a_(){var w,v=this
v.a1()
$.aV.bY$.push(v)
C.fGG()
$.hpj=new C.exf(v)
w=B.bl(null,A.Bf,null,1,null,v)
w.fk(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Iw()},
bu(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Oy(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Iw()}},
j7(d){if(d===A.Al||d===A.tb||d===A.ta||d===A.pw)this.tD()},
t(){var w,v,u,t=this
$.aV.hN(t)
w=t.at
if(w!=null)w.a4(0)
t.tD()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.h6()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.ax()
v.P$=0}t.bw4()},
gabE(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOS(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ac8(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSo())return!1
return!0},
kl(){return this.ac8(null)},
aiQ(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.f2e)},
qn(){if(!this.kl())return!1
this.aiQ()
return!0},
ar4(d){var w,v,u,t,s,r=this
if(r.ac8(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hoq(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zX(){return this.ar4(null)},
Iw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Iw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arl(k),$async$Iw)
case 3:j=e
w=4
return B.b(C.apX(k),$async$Iw)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fWn(j,t.c0P())
w=t.gabE()?5:7
break
case 5:r=t.gOS()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_g(r),$async$Iw)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.etD())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.etE())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yH(m==null?"":m)!=null)continue
C.fGS(n,s)
p=!0}t.m(new C.etF(t,s))
if(p||s.length>J.ad(j))t.tD()
case 1:return B.h(u,v)}})
return B.i($async$Iw,v)},
c0P(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ky(w)&&w!==q}if(w)p.push(r)
return p},
coc(d){var w,v=this,u=d.w
if(!C.ky(u)||u==="hati_kiapo_uongozi")return
v.aas(d)
w=A.d.bf(v.d,new C.evd(d))
u=v.d
if(w>=0){u[w]=d.hH()
v.d[w].f=new B.T(Date.now(),0,!1)}else A.d.c9(u,0,d.hH())
v.db=!1},
cii(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ky(s)&&s!=="hati_kiapo_uongozi"}if(s)u.coc(t)
s=u.d
w=B.S(s)
v=w.k("cP<1,i4>")
s=B.C(new B.cP(new B.Z(s,new C.ev1(),w.k("Z<1>")),new C.ev2(),v),v.k("J.E"))
return s},
Oy(d){return this.bPL(d)},
tD(){return this.Oy(null)},
bPL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Oy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cii()
w=3
return B.b(C.VY(d==null?t.a.c:d,s),$async$Oy)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.ar4(r)?4:5
break
case 4:w=6
return B.b(C.a7f(r),$async$Oy)
case 6:q=r.x
p=A.a.i(q==null?t.gOS():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bf(t.d,new C.et0())
q=t.d
if(o>=0)q[o]=r.hH()
else A.d.c9(q,0,r.hH())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oy,v)},
po(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.ky(u.w))===!0?A.hl:A.lW
v.at=B.cL(w,new C.ewl(v))},
aZS(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.af6(u.hH(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a8(v.ay)},
cBP(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.af6(w.e.hH(),w.f,w.r))
w.m(new C.exb(w,v.pop()))
w.po()},
cni(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.af6(w.e.hH(),w.f,w.r))
w.m(new C.evb(w,v.pop()))
w.po()},
og(){var w,v,u=this
if(u.e==null)return
w=A.d.bf(u.d,new C.ewZ(u))
if(w>=0){u.d[w]=u.e.hH()
u.d[w].f=new B.T(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.T(Date.now(),0,!1)},
XH(d){var w,v,u,t,s=this.gdv()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xA(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.h6()}w.a8(0)},
Kf(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdv()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cP<1,n>")
t=B.de(new B.cP(new B.Z(w,new C.ex_(),v.k("Z<1>")),new C.ex0(),u),u.k("J.E"))
w=this.ch
v=B.a5(w).k("cr<1>")
v=B.C(new B.cr(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c4(0,p,new C.ex1(n))
s.c4(0,p,new C.ex2())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
HQ(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.esp(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOS()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hH())}u.og()
u.po()},
ajb(d,e){var w,v,u,t,s=this
if(s.kl())return
w=s.XH(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ky(v.w))===!0
if(u){C.i6u(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdv()
if(t!=null)C.i6v(t,w.d+w.f*0.5)}}s.HQ()
s.og()
s.po()
if(u&&s.c!=null)s.m(new C.exc())},
cCT(d,e){var w=this,v=w.gdv()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HQ()
w.og()
w.po()},
gdv(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqt(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i4w(o)
if(w!=null)return w
v=q.gdv()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bZ8(v)
t=q.bZ7(v)
s=B.b0(v.e)
r=v.f
return new C.jF(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hIb(o)},
bZ8(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bZ7(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aJ},
af8(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabE()){w.c.I(x.q).f.R(D.f0Q)
return}w.aas(d)
w.b05(C.bBM(d))
return}if(C.cgD(v)){w.aas(d)
w.b05(d)
return}w.m(new C.euk(w,d))},
arG(){var w,v,u,t,s,r,q=this
q.a2f(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ky(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.esn(q))
if(r&&q.c!=null){u.toString
q.JP(u,s)}return}q.tD()
q.m(new C.eso(q))},
b04(d){this.aas(d)
this.a_J(d,!0)},
aas(d){if(!C.ky(d.w))return
C.fGS(d,this.d)},
a_J(d,e){return this.ceb(d,e)},
b05(d){return this.a_J(d,!1)},
ceb(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBM(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOS():r)
t.dy.W(0,q.toLowerCase())
C.apY(t.a.c,q)}r=s}else r=d
w=C.cgD(r.w)?3:4
break
case 3:w=5
return B.b(t.aat(r),$async$a_J)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.euH(l))
o=l.a.hH()
n=C.ky(o.w)&&C.i7G(o)
t.m(new C.euI(t,o,p))
if(n){m=A.d.bf(t.d,new C.euJ(o))
if(m>=0){t.d[m]=o.hH()
t.tD()}}if(!t.ac8(l.a))t.YQ()
r=!1
if(t.c!=null)if(!t.ac8(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.ar4(r)&&C.fCV(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.f1q)
case 1:return B.h(u,v)}})
return B.i($async$a_J,v)},
aat(d){return this.bNT(d)},
bNT(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aat=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ln(r.c,A.zD),$async$aat)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kX(!1,r,s.c,s.d,null,A.zD,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aat,v)},
o7(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cgD(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cg2(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o7,v)},
aeQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cd(null,null,!1,null,new C.euj(),s,null,!0,!0,x.H),$async$aeQ)
case 3:if(t.c==null){w=1
break}t.arG()
case 1:return B.h(u,v)}})
return B.i($async$aeQ,v)},
aeP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cd(null,null,!1,null,new C.eug(),s,null,!0,!0,x.H),$async$aeP)
case 3:if(t.c==null){w=1
break}t.m(new C.euh())
t.arG()
case 1:return B.h(u,v)}})
return B.i($async$aeP,v)},
YQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$YQ)
case 3:r=e
if(B.jK(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YQ)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f_q)
case 1:return B.h(u,v)}})
return B.i($async$YQ,v)},
JP(d,e){return this.coB(d,e)},
coB(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JP=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agv(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JP)
case 9:w=4
break
case 6:w=10
return B.b(C.agw(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JP)
case 10:w=4
break
case 7:w=11
return B.b(C.agx(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JP)
case 11:w=4
break
case 8:w=12
return B.b(C.agy(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JP)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JP,v)},
c_G(){var w,v,u,t,s=this
if(!s.gabE()){s.c.I(x.q).f.R(D.f_D)
return}w=s.gOS()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agu(u,t,v,new C.etz(s),new C.etA(s),w)},
af9(){var w=0,v=B.j(x.H),u=this,t,s
var $async$af9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dG,null,new C.euq(u),s,!0,!0,!1,A.lE,!1,!1,x.N),$async$af9)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agy(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agv(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agw(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agx(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_G()
return B.h(null,v)}})
return B.i($async$af9,v)},
cdh(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZS()
w=C.cD()
v=C.BK(t,t,t,t,D.D2,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eur(u,v))},
a9T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qn()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.icb(s),$async$a9T)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d8(q.r,new C.esr())
t.d4(new C.ess(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9T,v)},
ah6(d,e,f,g){var w=null,v=g?A.dr:A.bM,u=B.I(g?A.aZ:A.cr,A.q,1)
return B.hp(B.aB(w,B.p(w,B.W(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a4),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a5),w,e,w,w)},
a_I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qn()){w=1
break}s=t.jZ()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.euC(),q),q.k("J.E"))}o=s!=null&&s.b===D.lD?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.f1B)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.euD(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_I)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
afq(){return this.cea()},
cea(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qn()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ibY(s,t.f+1,o),$async$afq)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.jV(s,B.S(s).c)
p.a=A.d.bf(o.r,new C.euF(q))
t.d4(new C.euG(p,t,o,q,r))
t.c.I(x.q).f.R(D.f2_)
case 1:return B.h(u,v)}})
return B.i($async$afq,v)},
afx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qn()||!t.zX()){w=1
break}s=t.gdv()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.euX(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.f_b)
w=1
break}o=new B.M(p,new C.euY(),B.S(p).k("M<1,K>")).f9(0,new C.euZ())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.aq(new B.ba(l,A.b4,A.aN),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.ev_(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afx)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.ev0())
case 1:return B.h(u,v)}})
return B.i($async$afx,v)},
afc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qn()){w=1
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
return B.b(C.hqu(s,new C.Ew(r,q,p,o==null?"":o)),$async$afc)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.eus(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agU(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afc,v)},
aam(){return this.bNd()},
bNd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aam=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qn()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ica(s,t.f+1,l),$async$aam)
case 3:r=e
q=$.fZV
$.fZV=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.esI())
t.c.I(x.q).f.R(D.f_2)
w=1
break}if(!q){s=r.CW
s=C.hph(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.esJ(t,l,r))
t.c.I(x.q).f.R(D.f2t)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.jV(s,B.S(s).c)
s=l.r
m.a=A.d.bf(s,new C.esK(p))
o=s.length
t.d4(new C.esL(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aam,v)},
aQp(d,e){if(e){this.ag_()
return}this.cdh(d,!1)},
bIL(){return this.aQp(null,!1)},
ag_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bZ,null,new C.ev6(t),r,!0,!0,!0,A.pj,!1,!1,x.N),$async$ag_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ev7(t,C.i4v(s).pB()))
case 1:return B.h(u,v)}})
return B.i($async$ag_,v)},
d4(d){var w=this
if(w.qn())return
w.HQ()
w.aZS()
w.m(d)
w.Kf()
w.og()
w.po()},
a8o(){this.d4(new C.erm(this,D.mJ))},
aRS(){var w=this.gdv()
if(w==null)return
this.d4(new C.esG(this,w))},
aR0(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.esE(this))},
b30(d,e){if(this.e==null||d===e)return
this.d4(new C.evf(this,d,e))},
O4(d){return this.bKM(d)},
bKM(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOS():s)
w=5
return B.b(C.apW(t.a.c,r),$async$O4)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.arn(s)
w=6
return B.b(C.b1b(t.a.c,s),$async$O4)
case 6:if(t.c==null){w=1
break}t.m(new C.esA(t,d))
w=7
return B.b(t.tD(),$async$O4)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
coy(d,e){var w=this
if(d.z){w.aiQ()
return}w.m(new C.eve(w,d,e))
w.po()},
jZ(){var w,v,u,t,s,r=this.gdv()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
WI(d){return this.ch.c4(0,d.a,new C.esq(d))},
atx(d){return this.CW.c4(0,d.a,new C.et1())},
a2f(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.XH(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.aj$.d.c
if(u!=null)u.jQ()},
b6u(){return this.a2f(!0)},
a2b(d){var w,v,u=this
if(u.qn())return
if(!u.zX())return
w=u.XH(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.WI(w).saU(0,"")}u.m(new C.ewX(u,d))
$.aV.x1$.push(new C.ewY(u,d,w))},
b72(d){var w=this
if(d.b===D.cQ&&!w.kl()&&w.zX()){w.a2b(d.a)
return}w.azS(d.a)},
azS(d){var w,v,u,t,s,r=this
if(r.kl())return
w=r.r
if(w!=null&&w!==d){v=r.XH(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ewm(r,s,d))
if(s||d==null){t=$.aV.aj$.d.c
if(t!=null)t.jQ()}},
aMF(){this.d4(new C.ern(this))},
p7(d){return this.bzS(d)},
bzS(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o7(),$async$p7)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.erk(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p7,v)},
VR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.GH(78,1920),$async$VR)
case 3:s=e
if(s==null||t.gdv()==null){w=1
break}t.d4(new C.era(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VR,v)},
VL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdv()==null){w=1
break}w=3
return B.b(S.CS(t.a.c),$async$VL)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gal(s)){t.c.I(x.q).f.R(D.f32)
w=1
break}w=r.gK(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.er7(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VL)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdv()==null){w=1
break}t.d4(new C.er8(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VL,v)},
asv(){var w=this,v=w.r
if(v==null||w.gdv()==null)return
if(A.d.b3(w.gdv().z,new C.esC(v))){w.c.I(x.q).f.R(D.f23)
return}if(w.w===v)w.a2f(!0)
w.d4(new C.esD(w,v))},
bH2(){var w=this.jZ(),v=w==null
if((v?null:w.b)===D.f6)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aNl(d,e){var w=this,v=w.jZ(),u=w.gdv(),t=w.e
if(t==null)return
w.d4(new C.erP(w,v,d,e,t,u))},
bBs(d){return this.aNl(d,null)},
a8G(d){return this.bBA(d)},
bBA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a7n.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o7(),$async$a8G)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jZ()
if(s!=null){r=s.b
if(r===D.cQ)t.bBs(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f6){r=d.c
t.aNl(r.j(0.88),r)}w=1
break}t.d4(new C.erU(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8G,v)},
a8F(d){return this.bBy(d)},
bBy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jZ()
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
return B.b(t.o7(),$async$a8F)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.erS(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8F,v)},
bBi(d){var w=this.gdv()
if(w==null)return
this.d4(new C.erO(this,w,d))},
a_O(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ic6(r),$async$a_O)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.og()
t.m(new C.euR(t,s))
w=4
return B.b(t.tD(),$async$a_O)
case 4:if(t.c!=null)t.af8(s)
case 1:return B.h(u,v)}})
return B.i($async$a_O,v)},
aae(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aae=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2f(!0)
t.og()
s=t.c
s.toString
w=3
return B.b(C.Rd(s,q),$async$aae)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aae,v)},
DG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.og()
t=4
w=7
return B.b(C.aPW(m),$async$DG)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPm(o,q,m.b),$async$DG)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DG,v)},
Fk(d,e){return this.cBe(d,e)},
cBe(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fk=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qn()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2f(!0)
t.og()
s=h.a=t.e.hH()}else{r=A.d.bf(t.d,new C.ex5(d))
s=h.a=r>=0?t.d[r].hH():d.hH()}s=s.w
q=s==null
p=C.i5t(q?"":s)
o=C.hoc(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("Z<1>")
n=B.C(new B.Z(s,new C.ex6(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cut(n.length,o,s),$async$Fk)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i5n(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gH(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cus(n,o),$async$Fk)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fZ(t.d,new C.ex7(s))
s=h.a.b
w=11
return B.b(t.cuq(k.b,s),$async$Fk)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hH()
case 5:j=C.i5s(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.f3e)
w=1
break}w=12
return B.b(t.cur(j.a,s,o,j.c),$async$Fk)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ex8(h,t,i))
t.po()
case 1:return B.h(u,v)}})
return B.i($async$Fk,v)},
cut(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.ewC(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cus(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.ewB(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuq(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.ewv(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cur(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.ewx(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abI(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abJ(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.bZ,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.w(B.a([B.d(g,u,u,u,u,u,u,D.fdX,u,u,u),A.al,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aV9(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.Uk,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aVc(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a2,!0,w,B.aK(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.w(B.a([B.d(i,w,w,w,w,w,w,A.nz,w,w,w),A.cO,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.W(A.yv,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etv(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bY4(d,e,f,g,h,i){return this.aVc(d,e,f,!1,g,h,i)},
auR(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.w(B.a([B.d(e,w,w,w,w,w,w,A.df,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ZL,w,w,w)},
aVb(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cj,w,new B.b7(B.m(14),A.X),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nx,w,w,w),new C.etu(d,f),v)},
aVa(d,e){return this.aVb(d,e,null)},
K6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p9(l,s.c,s.d),$async$K6)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.fg(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f5(l,new C.ewn());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aM(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9V(l.charCodeAt(0)==0?l:l,r.b),$async$K6)
case 4:l=t.a
w=5
return B.b(B.p8(l.c,l.d),$async$K6)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K6,v)},
Ib(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ib=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p9(q,s.c,s.d),$async$Ib)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9V(A.S.ao(r.ag(),null),r.b+".json"),$async$Ib)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.d),$async$Ib)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ib,v)},
b6d(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.og()
u.tD()
w=u.c
w.toString
v=B.e_(new C.ewW(u,t),!1,null,x.z)
B.a3(w,!1).cg(v)},
Hp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o7(),$async$Hp)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fH4(),$async$Hp)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i8f(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.av,null,new C.erf(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hp)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.erg(t,s))
w=1
break}if(p==="split")t.d4(new C.erh(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hp,v)},
Nr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}w=3
return B.b(t.o7(),$async$Nr)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPV(s,null,null),$async$Nr)
case 4:r=e
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.erl(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nr,v)},
b2O(d){var w=this.e
if(w==null||!C.ky(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOF(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPV(s,t==null?null:B.b0(t),u)},
a8m(d){return this.bzJ(d)},
bzJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8m=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zX()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f3t)
w=1
break}w=3
return B.b(t.aOF(),$async$a8m)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.erc(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8m,v)},
agJ(d){return this.cnl(d)},
cnl(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zX()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f2B)
w=1
break}w=3
return B.b(t.aOF(),$async$agJ)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d4(new C.evc(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agJ,v)},
c9Z(){var w,v,u=this
if(u.kl())return
w=new B.T(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bz(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cAi()}},
cAi(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.ex3(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bYp(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.ety(this,r,u.d))},
c25(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fDG(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lc&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c26(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
if(!this.zX())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fDG(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lc&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nz(d){return this.bC_(d)},
bC_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zX()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f1r)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aq_(p),$async$Nz)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.f25)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7f(r)
w=1
break}t.m(new C.erY(t,d,o))
t.og()
$.aV.x1$.push(new C.erZ(t))
case 1:return B.h(u,v)}})
return B.i($async$Nz,v)},
VP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o7(),$async$VP)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCs(),$async$VP)
case 4:s=e
if(s==null||t.gdv()==null){w=1
break}t.d4(new C.er9(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VP,v)},
Oj(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o7(),$async$Oj)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jZ()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fGW(r),$async$Oj)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.et_(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oj,v)},
j4(d){this.d4(new C.eri(this,d))},
qd(d){return this.bBb(d)},
bBb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qn()){w=1
break}m=!D.aOh.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o7(),$async$qd)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hp()
w=1
break A
case"sign_paper":t.Nr()
w=1
break A
case"hd_photo":t.VP()
w=1
break A
case"sharpen":t.Oj()
w=1
break A
case"print":t.DG()
w=1
break A
case"rotate":s=t.jZ()
if(s!=null)t.d4(new C.err(s))
w=1
break A
case"text_box":t.aMF()
w=1
break A
case"picture":t.VR()
w=1
break A
case"present":t.b6d()
w=1
break A
case"new_slide":t.a8o()
w=1
break A
case"export_json":t.Ib()
w=1
break A
case"outline_share":t.K6()
w=1
break A
case"flashcard_tool":t.vh(D.Id)
w=1
break A
case"quiz_tool":t.vh(D.Ie)
w=1
break A
case"worksheet_tool":t.vh(D.If)
w=1
break A
case"duplicate_el":s=t.jZ()
if(s==null){w=1
break A}t.d4(new C.ers(t,s))
w=1
break A
case"delete_el":t.asv()
w=1
break A
case"bring_fwd":s=t.jZ()
if(s==null||t.gdv()==null){w=1
break A}t.d4(new C.ert(t,s))
w=1
break A
case"send_back":s=t.jZ()
if(s==null||t.gdv()==null){w=1
break A}t.d4(new C.erE(t,s))
w=1
break A
case"align_left":s=t.jZ()
if(s!=null)t.d4(new C.erH(s))
w=1
break A
case"align_center":s=t.jZ()
if(s!=null)t.d4(new C.erI(s))
w=1
break A
case"align_right":s=t.jZ()
if(s!=null)t.d4(new C.erJ(s))
w=1
break A
case"grayscale":case"brighten":t.Oj()
w=1
break A
case"flip_h":s=t.jZ()
if(s!=null)t.d4(new C.erK(s))
w=1
break A
case"flip_v":s=t.jZ()
if(s!=null)t.d4(new C.erL(s))
w=1
break A
case"rectangle":t.p7(D.bg)
w=1
break A
case"circle":t.p7(D.eP)
w=1
break A
case"triangle":t.p7(D.jT)
w=1
break A
case"arrow":t.p7(D.D4)
w=1
break A
case"line":case"divider":t.p7(D.fw)
w=1
break A
case"word_count":r=t.gdv()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f5(q,new C.erM()),o=0;p.C();){n=A.a.fH(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.erN(),B.S(n).k("Z<1>")).gK(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.j4(C.iX(A.L,!1,t.gqt().d.l(),A.aE,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mK,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.j4(C.iX(A.L,!1,t.gqt().e.l(),A.aE,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dg,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j4(C.iX(A.bh,!0,4279310375,A.aE,20,A.bp,A.a7,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uF,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j4(C.iX(A.bh,!1,4279310375,A.aE,20,A.bp,A.a7,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.uE,0.8,0.1,0.22))
w=1
break A
case"quote":t.j4(C.iX(A.L,!1,4279310375,A.aE,24,A.cE,A.a7,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dg,0.8,0.1,0.3))
w=1
break A
case"citation":t.j4(C.iX(A.bh,!1,4284773515,A.aE,14,A.bp,A.a7,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.uF,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j4(C.iX(A.dQ,!1,4279310375,A.aE,14,A.bp,A.a7,0.08,C.cD(),C.bCu(),0,D.dg,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j4(C.iX(A.dQ,!1,4279310375,A.aE,13,A.bp,A.a7,0.06,C.cD(),"Page "+(t.f+1),0,D.dg,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.eru(t))
w=1
break A
case"footer_bar":t.d4(new C.erv(t))
w=1
break A
case"highlight":t.d4(new C.erw(t))
w=1
break A
case"redact":t.d4(new C.erx(t))
w=1
break A
case"callout":t.d4(new C.ery(t))
w=1
break A
case"checkboxes":t.j4(C.iX(A.bh,!1,4279310375,A.aE,20,A.bp,A.a7,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dg,0.8,0.1,0.2))
w=1
break A
case"table":t.j4(C.iX(A.bh,!1,4279310375,A.aE,16,A.bp,A.a7,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dg,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.erz(t))
w=1
break A
case"letter":t.j4(C.iX(A.bh,!1,4279179050,A.aE,17,A.bp,A.a7,0.82,C.cD(),C.bCu()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j4(C.iX(A.bh,!1,4279310375,A.aE,22,A.bp,A.O,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uF,0.8,0.1,0.12))
w=1
break A
case"toc":t.j4(C.iX(A.bh,!1,4279310375,A.aE,18,A.bp,A.a7,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dg,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j4(C.iX(A.bh,!1,4279310375,A.aE,16,A.bp,A.a7,0.08,C.cD(),"Signature: _________________________",0,D.dg,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j4(C.iX(A.bh,!1,4279310375,A.aE,16,A.bp,A.a7,0.08,C.cD(),"Initials: ______",0,D.dg,0.3,0.65,0.78))
w=1
break A
case"approved":t.j4(C.iX(A.L,!1,4278556265,A.aE,28,A.bp,A.u,0.12,C.cD(),"APPROVED",0,D.mK,0.32,0.62,0.08))
w=1
break A
case"draft":t.j4(C.iX(A.L,!1,4292617766,A.aE,28,A.bp,A.u,0.12,C.cD(),"DRAFT",0,D.dg,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j4(C.iX(A.L,!1,871318596,A.aE,36,A.bp,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dg,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.erA(t))
w=1
break A
case"progress":t.d4(new C.erB(t))
w=1
break A
case"stars":t.j4(C.iX(A.L,!1,4279310375,A.aE,36,A.bp,A.a7,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qn,0.8,0.1,0.4))
w=1
break A
case"equation":t.j4(C.iX(A.L,!1,4279310375,A.aE,32,A.bp,A.O,0.14,C.cD(),"y = mx + b",0,D.dg,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j4(C.iX(A.L,!1,4279310375,A.aE,18,A.bp,A.a7,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uE,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.erC(t))
w=1
break A
case"compare":t.d4(new C.erD(t))
w=1
break A
case"link_text":t.j4(C.iX(A.bh,!1,4280640491,A.mO,16,A.bp,A.a7,0.1,C.cD(),"https://example.com",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"phone":t.j4(C.iX(A.bh,!1,4279310375,A.aE,18,A.bp,A.a7,0.1,C.cD(),"(555) 123-4567",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"email":t.j4(C.iX(A.bh,!1,4280640491,A.aE,18,A.bp,A.a7,0.1,C.cD(),"name@email.com",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.erF(t))
w=1
break A
case"cover_page":r=t.gdv()
if(r==null){w=1
break A}t.d4(new C.erG(t,r))
w=1
break A
case"invoice":t.j4(C.iX(A.bh,!1,4279179050,A.aE,16,A.bp,A.a7,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"resume":t.j4(C.iX(A.bh,!1,4279179050,A.aE,17,A.bp,A.a7,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j4(C.iX(A.bh,!1,4279310375,A.aE,16,A.bp,A.a7,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bCu()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dg,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j4(C.iX(A.bh,!1,4279310375,A.aE,17,A.bp,A.a7,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dg,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j4(C.iX(A.bh,!1,4279310375,A.aE,15,A.bp,A.a7,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dg,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qd,v)},
ctV(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eUP.q(0,this.z)},
ctU(d){if(this.jZ()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7U(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.I(u,A.q,o&&e?2:1)
t=C.i84(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.On,A.f,p,p,D.El,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fu,B.aB(p,new B.an(A.V,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a5),p)},
bNu(d){var w,v=null,u=this.jZ()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.M(D.QT,new C.esZ(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vh(d){return this.bzR(d)},
bzR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aOb.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o7(),$async$vh)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.erj(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eTw
w=h.e
if(w==null)return h.bDJ()
v=h.gdv()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aH(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eK,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bZ:D.bcS
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSo()}else j=!1
if(j)k.push(new C.a7K(h.a.c,!1,h.e.gba6(),h.gc9W(),g))
else if(s&&h.e!=null&&!h.kl()&&C.cgD(h.e.w)){j=h.a
k.push(new C.a7K(j.c,j.d,g,h.gcb4(),g))}if(s)k.push(h.bNp(w,t,r))
if(s&&h.kl()){w=t?A.fD:A.kx
j=B.m(14)
i=B.I(A.bi.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bPH,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fD,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bn,A.iO,g,g,g))}w=!n
if(w&&!h.kl())k.push(h.c32(t,r))
if(w&&h.kl())k.push(h.cBf(t))
if(r&&h.jZ()!=null&&w&&!h.kl())k.push(h.c2Y(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5H(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5H(t,!1),g))
i.push(B.E(new B.bK(A.b3,g,g,h.bF2(v,t,!s||p),g),1))
if(h.ctV(r)&&u&&s&&!h.kl())i.push(h.c9I(v,t,r))
j.push(B.E(B.w(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kl()&&h.ctU(!1))j.push(new B.a7(240,g,h.bQ8(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.w(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c2Z(t))
return B.c4(g,m,B.bm(!1,new B.an(A.V,g,A.aa,A.r,w,g),!0,!1,A.ae,!0,!0),g,!1,!1,g,!1)},
bDJ(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bZ:A.bM
v=r.a.e
u=r.c8Y(A.bi,A.q5,new C.es1(r),r.gcde(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMn(A.bi,A.hC,"Blank Presentation",new C.es2(r)),1),A.as,B.E(r.aMn(A.b_,A.wd,"Class Template",new C.es3(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.mN,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bAE(w))
else{t=new B.i2(t,B.S(t).k("i2<1>"))
A.d.v(u,t.gdR(t).dE(0,new C.es4(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cs(u,q,new B.Q(18,12,18,v),q,q,A.af,!1),!0,!1,A.ae,!0,!0),q,!1,!1,q,q)},
bLz(){this.m(new C.esF(this))
var w=this.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900){w=$.aV.aj$.d.c
if(w!=null)w.jQ()}},
afr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jZ()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.euQ(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afr)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afr,v)},
AV(d,e){return this.cug(d,e)},
cug(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.X9,!0,"Dismiss",j,new C.ewo(),new C.ewp(d,e),A.iM,!0,x.N),$async$AV)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiQ()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSo()){r.aiQ()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPW(d),$async$AV)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPm(j,q,d.b),$async$AV)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fk(d,!1),$async$AV)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.X9,!0,"Dismiss",j,new C.ewq(),new C.ewr(d),A.a2,!0,x.y),$async$AV)
case 20:if(g===!0)r.O4(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agt("Rename presentation",d.b),$async$AV)
case 24:l=g
if(l!=null)r.coy(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ews(r,k))
r.po()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AV,v)},
b0K(d,e){var w=null
return B.bM(!1,D.fD5,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bi,w,w,w,A.az,w,A.ls,w,w,w,w,w,A.kh,w,w))},
bAE(d){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.ero(this,d),null)},
bJF(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.est(),x.dv).c0(0,new C.esu()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahQ,this.aMX(v,e,new C.esv(),f),null)},
aMX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ei)
t=e.j(g?0.14:0.1)
s=new B.aQ(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.br,n,n,n,10),A.qu],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.c9(A.aM,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),n,n,A.n),n,n,n,n,A.ni,n,n,n))
A.d.v(l,u)}return B.eN(A.a3,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e_)},
bAC(d,e,f){return this.aMX(d,e,null,f)},
bJH(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dil
else if(v==="hati_kuhoweya")w=D.d3K
else{if(v==="hati_kiapo_uongozi")v=D.cRe
else v=C.ky(v)?D.cYv:A.Qt
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.esy(this,f,d,e,w),null)},
c2Z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jZ()
if(i==null||i.b!==D.cQ)return A.bI
w=k.WI(i)
v=k.atx(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bp,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b0,B.bM(!1,D.fyB,j,j,!0,j,j,new C.etZ(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ae,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.I(A.bi.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.ha,B.c0(new B.D(A.eO,B.aL(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bi,j,j,j,j,2,D.bVH,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wL,j,j,j,j,j,j,!1,"\u2022",j,new C.eu_(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.zV,A.an,j,A.TN,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cc(B.B(B.a([k.u1(G.Nr,j,new C.eu0(k,i),d),k.u1(G.a_U,j,new C.eu1(k,i),d),k.u1(I.am6,j,new C.eu2(k,i),d),k.u1(I.a0B,j,new C.eu3(k,i),d),k.u1(k.bAA(i.as),j,new C.eu4(k,i),d),k.u1(D.anf,j,new C.eu5(k,i),d),k.u1(D.ane,j,new C.eu6(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aM),1)
m=A.k.O(i.w)
return B.bS(0,B.aF(!1,A.a2,!0,j,B.w(B.a([s,r,new B.D(H.ahZ,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lt,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c2Y(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jZ()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4k(A.j9,"Edit",new C.etK(o,m),d,!0))
if(w===D.lD)p.push(o.b4k(A.GE,"Shape & ring",new C.etL(o),d,!0))
p.push(o.u1(A.Cb,"Format",new C.etM(o),d))
if(v)A.d.v(p,B.a([o.u1(G.Nr,n,new C.etN(o,m),d),o.u1(D.anf,n,new C.etO(o,m),d),o.u1(D.ane,n,new C.etP(o,m),d)],q))
p.push(A.b0)
p.push(o.cs4(A.eb,n,o.gaQZ(),d,!0))
p.push(o.u1(A.hD,"Done",new C.etQ(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bo,A.lt,n,n,n)},
bAA(d){switch(d.a){case 2:return D.a0y
case 1:case 5:return D.a0A
default:return D.a0z}},
c3S(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dQ
default:return A.bh}},
azR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.H_:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ei,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.q0,B.aF(!1,A.a2,!0,n,B.aK(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
u1(d,e,f,g){return this.azR(d,e,f,g,!1,!1)},
b4k(d,e,f,g,h){return this.azR(d,e,f,g,h,!1)},
cs4(d,e,f,g,h){return this.azR(d,e,f,g,!1,h)},
bNp(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mV],m)
w=B.I(e?A.aJ:A.nM,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bi.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a2G(A.eH,"Back",p.gbGN(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dr(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bX:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tI,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.kl()){u=p.a2G(A.rm,"Undo",p.ax.length===0?o:p.gcBO(),e)
A.d.v(r,B.a([u,p.a2G(D.bJf,"Redo",p.ay.length===0?o:p.gcnh(),e)],q))}r.push(p.a2G(A.yt,"PDF",new C.esS(p),e))
r.push(p.a2G(A.hE,"Download as video",new C.esT(p),e))
if(!p.kl())r.push(B.BX(o,o,B.W(A.o6,e?A.ad:A.br,o,o,o,o),new C.esU(p),A.J,new C.esV(p),A.ae,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a2,!0,o,B.aK(!1,B.m(14),!0,B.eF(D.eex,o,new B.o(o,o,o,B.m(14),o,L.H_,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAF(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bu1,D.bzi,o,o,o)},
cBf(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.I(d?A.cp:A.aL,A.q,1)
return B.p(v,B.cc(B.B(B.a([w.iQ(A.ug,"Print",new C.ex9(w),d),w.iQ(A.yt,"Download PDF",new C.exa(w),d),w.iQ(A.qa,"Present",w.gaAF(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bn,G.ajB,v,v,v)},
a2G(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dq
else w=g?A.ad:A.aJ
return B.aI(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c32(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.I(d?A.cp:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.eu9(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ajg,new B.fd(new C.eua(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vT,r.ah6(A.l3,"Ending celebration",r.gcdr(),d),q),new B.D(R.vT,r.ah6(A.GE,"Logo ring & frame",r.gce8(),d),q)],x.p):A.hT)
A.d.v(t,w?B.a([new B.D(R.vT,r.ah6(A.nl,"Look and feel",r.gce9(),d),q),new B.D(R.vT,r.ah6(A.p4,"Edit this slide's text",r.gceG(),d),q)],x.p):A.hT)
t.push(new B.D(R.vT,B.hp(B.aB(q,B.p(q,D.eSW,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lo.j(0.4),A.J,10)],x.V),D.apb,A.n),q,34,q,q,A.fQ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eub(r),q,q,q,q,q,q,!1,A.a5),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cc(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bzL,q,q,A.aM)
s=e?8:10
return B.p(q,B.w(B.a([t,B.cc(r.cpI(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bn,q,q,q,q)},
cpI(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dbO[v]
u.a=null
s=u.a=t.b
w.push(e.lJ(e.cru(s),t.a,new C.evy(u,e),a3,D.aOb.q(0,s)))}w.push(e.iQ(A.l5,"Notes Slide",new C.evz(e),a3))
w.push(e.lJ(A.GD,"Quiz",new C.evA(e),a3,!0))
w.push(e.lJ(M.Gf,"Worksheet",new C.evL(e),a3,!0))
w.push(e.lJ(V.GJ,"Flashcard",new C.evW(e),a3,!0))
w.push(e.lJ(A.Oe,"Lab Report",new C.ew6(e),a3,!0))
w.push(e.lJ(A.u8,"Rubric",new C.ewd(e),a3,!0))
w.push(e.lJ(A.p_,"Minutes",new C.ewe(e),a3,!0))
w.push(e.lJ(A.o5,"Syllabus",new C.ewf(e),a3,!0))
w.push(e.lJ(A.a16,"Timeline",new C.ewg(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dd7[v]
w.push(e.lJ(r.b,r.c,new C.ewh(e,r),a3,!D.aOh.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iQ(A.yN,a0,e.gaME(),a3),e.iQ(A.ud,"Picture",new C.evB(e),a3),e.iQ(A.yH,"Bio link",new C.evC(e),a3),e.iQ(A.a15,"Table",new C.evD(e),a3),e.iQ(A.Oi,"Sticky",new C.evE(e),a3),e.iQ(A.uc,"Divider",new C.evF(e),a3),e.iQ(A.Cc,"Header",new C.evG(e),a3),e.lJ(A5.w2,"Rectangle",new C.evH(e),a3,!0),e.lJ(A.rf,"Circle",new C.evI(e),a3,!0),e.lJ(A.a0r,"Triangle",new C.evJ(e),a3,!0),e.lJ(A.kE,"Arrow",new C.evK(e),a3,!0),e.lJ(D.bHK,"Parallelogram",new C.evM(e),a3,!0),e.lJ(D.bK7,"Hexagon",new C.evN(e),a3,!0),e.lJ(A.uc,"Line",new C.evO(e),a3,!0),e.lJ(A.yt,"PDF",new C.evP(e),a3,!0),e.lJ(O.a1f,"Signature",new C.evQ(e),a3,!0),e.iQ(A4.C_,"Quote",new C.evR(e),a3),e.iQ(D.a01,a1,new C.evS(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aNt("Wide 16:9",D.D2,a3),e.aNt("Short 9:16",D.oj,a3),new B.D(A.fu,B.mN(D.bMh,d,D.fuU,d,new C.evT(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bH1("This slide",!e.Q,a3,new C.evU(e)),A.bn,e.aPF("All slides",e.Q,a3,new C.evV(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bH2()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bX:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a37,new C.evX(e),n),n.k("ak.E"))
n=B.cc(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.de7[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.aZ,1.5,A.q,-1)
l.push(new B.D(A.fu,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bJ(i,i,i,i),d,d,d,A.a4),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.evY(e,k),d,d,d,d,d,d,!1,A.a5),d))}l=B.cc(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDM()
g=B.S(h).k("M<1,D>")
h=B.C(new B.M(h,new C.evZ(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.w(B.a([t,A.N,q,A.al,p,A.N,o,A.au,n,A.N,m,A.au,l,A.N,j,A.au,B.cc(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aM),A.al,e.c_N(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.jZ()
w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=new C.evx(e)
t=new C.ewi(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QT,f.dy,new C.ew_(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdv()
q=q==null?d:q.r
p.push(t.$4(D.QT,q,new C.ew0(e,u),A.bi))
return new B.a7(w.a.a-20,d,B.w(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iQ(A.l5,w,new C.ew1(e),a3),e.iQ(A.ug,"Print deck",new C.ew2(e),a3),e.lJ(D.ala,"Export JSON",new C.ew3(e),a3,!0),e.iQ(A.fS,"Duplicate Slide",e.gaRR(),a3),e.iQ(A.eb,a2,e.gaR_(),a3),e.cvB(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jZ()
w=x.p
u=B.a([e.iQ(D.a01,a1,new C.ew4(e),a3),e.iQ(A.fS,"Duplicate",e.gaRR(),a3),e.iQ(A.eb,a2,e.gaR_(),a3),e.iQ(A.qa,"Present",e.gaAF(),a3),e.iQ(A.C9,a0,e.gaME(),a3),e.iQ(A.C3,"Fit Text",new C.ew5(e),a3),e.iQ(A.yt,"Download PDF",new C.ew7(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iQ(A.kd,"Transfer",new C.ew8(e),a3))
if(f!=null){w=B.a([A.ab,e.iQ(G.Nr,"Bold",new C.ew9(e,f),a3),e.iQ(G.a_U,"Italic",new C.ewa(e,f),a3),e.iQ(G.akM,"Underline",new C.ewb(e,f),a3),e.iQ(Ae.Ns,"Bullets",new C.ewc(e,f),a3),e.bPS(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNu(a3))
w.push(e.iQ(D.bGq,"Delete",e.gaQZ(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aNt(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oj
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8Q,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bLu],v))
return new B.D(A.fu,B.j_(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.erX(this,w,e),s===e,A.bi.j(0.25),t,t,t),t)},
cvB(d){var w,v,u,t,s,r=this,q=null,p=r.gdv()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.aZ:A.cr,A.q,1)
u=B.m(8)
t=B.W(A.Gd,d?A.aB:A.ak,q,q,q,14)
s=B.aI(q,q,q,q,D.aob,q,q,q,new C.ewF(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.ao2,q,q,q,new C.ewG(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FU,A.mx,q,q,q)},
cru(d){switch(d.a){case 6:return V.GJ
case 7:return A.GD
case 8:return M.Gf
case 4:return A.Cc
default:return A.l5}},
bPS(d,e){var w=null,v=B.I(e?A.aZ:A.cr,A.q,1),u=B.m(8),t=B.aI(w,w,w,w,D.aob,w,w,w,new C.et4(this,d),w,w,w,w,w,A.cc),s=A.k.O(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.ao2,w,w,w,new C.et5(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vS,A.mx,w,w,w)},
c_N(d){var w=null
return B.BX(B.Dl(B.W(A7.a04,d?A.ad:A.br,w,w,w,16),w,w,D.fAs,w,w,w),w,w,new C.etC(),A.J,this.gbBh(),A.cm,"Slide layout",x.fO)},
lJ(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dr:A.aL,A.q,1),r=x.p,q=B.a([B.W(d,g?A.ds:A.bi,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.On,A.f,w,w,D.El,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fu,B.aF(!1,A.a2,!0,w,B.aK(!1,v,!0,B.eF(new B.D(A.ha,B.w(B.a([new B.an(A.V,w,A.aa,A.f,q,w),A.cO,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iQ(d,e,f,g){return this.lJ(d,e,f,g,!1)},
b5H(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.af:A.aM
v=B.hM(t,new C.ewR(u,s,e,d),s.r.length,A.cm,t,w,new C.ewS(e),!1)
s=d?A.av:A.bM
w=B.a([],x.p)
if(e&&!u.kl())w.push(new B.D(A.cm,B.HP(E.aoo,new C.ewT(u),B.nD(t,A.bi,t,t,t,t,t,t,t,t,t,t,E.aOW,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.w(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bF2(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oj?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bK(A.b3,v,v,new B.fK(w,B.aB(v,B.cA(new C.esl(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.esm(this),v,v,v,v,v,v,!1,A.a5),v),v),v)},
bF4(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ky(a9.w))===!0,b1=b0&&C.fDG(b3),b2=b0&&b3.b===D.lc&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kl())v=!b0||a7.c26(b3)
else v=!1
if(!a7.kl())u=!b0||a7.c25(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.c9:A.bi
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h1W(b3))o=a8
else if(p&&!a7.kl())o=a7.gc9Y()
else o=a7.kl()?a8:new C.es9(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.ch:A.jK
i=w&&C.h1W(b3)&&a7.zX()?new C.esa(a7,b3):a8
h=v&&b3.b===D.cQ?new C.esb(a7,b3):a8
g=u?new C.esc(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.lc?A.K:a8
if(b1){a1=a7.kl()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zX()
a3=b3.b===D.cQ
a4=a3?a7.WI(b3):a8
a5=a3?a7.atx(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.esd(a7,b3):a8
a3=v&&a3?new C.ese(a7,b3):a8
a6=C.b17(q,a4,a1,b3,a5,a2,a3,new C.esf(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bOi,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esg(a7,b3,b4,b5),a8,a8,new C.esh(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kl()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bOZ,A.f,a8,a8,new B.o(A.dt,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a4),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbYo(),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kl()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bQz,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a4),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esi(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aB(a8,B.p(a8,D.fJq,A.f,a8,a8,new B.o(A.bi,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l1,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esj(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eG(A.A,f,new B.an(A.V,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a5),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPF(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bi.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bi:A.bz,A.q,1)
if(e)t=A.bi
else t=f?A.aB:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.On,A.f,r,r,D.El,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
bH1(d,e,f,g){return this.aPF(d,e,f,g,!1)},
c9I(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.aq(new B.ba(v,A.b4,A.aN),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xd:l
if(f)s=new B.bJ(new B.ay(e?A.bz:A.aL,1,A.q,-1),A.X,A.X,A.X)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rG,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b0,m.b0K(e,new C.eud(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bX:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.w(B.a([p,A.al,B.E(B.aL(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dj),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eue(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aT8(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jZ()
if(a2==null)return A.bI
w=new C.eti(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dO:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b0,a0.b0K(a3,a0.gbLy())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fvp,B.E(B.l2(a1,a1,a1,u,0.05,new C.etj(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fHR,B.E(B.l2(a1,a1,a1,t,0.05,new C.etk(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fp4,B.E(B.l2(a1,a1,a1,96,10,new C.etl(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lD
if(l||n===D.lc||n===D.Se)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fBd,B.E(B.l2(a1,a1,a1,s,0,new C.etm(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fJ8,B.E(B.l2(a1,a1,a1,r,0,new C.etn(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cv[j]
i.a=null
g=h.a
i.a=g
k.push(B.j_(a1,a1,a1,new B.y(h.b,a1,A.po,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eto(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bB,k,A.bs,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cq[j]
f.a=null
g=e.a
f.a=g
h.push(B.j_(a1,a1,a1,new B.y(e.b,a1,A.po,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etp(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.al,k,A.N,i,A.al,B.bV(A.bB,h,A.bs,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.etq(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.al,B.bV(A.bB,l,A.bs,6,6),A.ac,B.he8(new C.etr(w,a2),D.csd,B.ex([a2.as],k),!0,a1,k)],p))}if(n===D.f6){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.ets(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bB,m,A.bs,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bQl,D.fDg,new C.ett(a0,a5),B.bn(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cs(o,a1,a1,q,a1,A.af,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.xd:a1
if(a4)o=new B.bJ(new B.ay(a3?A.bz:A.aL,1,A.q,-1),A.X,A.X,A.X)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rG,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FE,a1,a1,a1)},
bQ8(d){return this.aT8(d,!1,!1,null)},
c8Y(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c7(p,new C.etw(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.feR,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.E(B.w(B.a([w,A.bA,A.cO,r.bAC(D.cVW,d,B.P(v).ax.a===A.I)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hp(B.aF(!1,A.a2,!0,q,B.aK(!1,q,!0,B.eF(D.eYO,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.ep,8)],p),D.apg,A.a4),q,q,q),A.cK,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b9w,D.b9W],v):B.a([A.c,A.kx],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cz,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aMn(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.er5(this,g,d,e,f),null)},
agt(d,e){return this.clv(d,e)},
clv(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.aq(new B.ba(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.cd(null,null,!0,null,new C.eva(d,q),p,null,!0,!0,x.N),$async$agt)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agt,v)},
Q0(d){var w=d.bU()
return""+B.bI(w)+"/"+B.bT(w)+"/"+B.bB(w)}}
C.af6.prototype={}
C.az_.prototype={
U(){return new C.bcD(null,null)}}
C.bcD.prototype={
gcxU(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bI(u)+"/"+B.bT(u)+"/"+B.bB(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bl(u,A.pY,u,1,u,v)
w.fk(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bl(u,D.bsx,u,1,u,v)
w.cr(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bu6()},
J7(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.av(0,new B.hU(w,v,A.ct).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.by7,B.c7(new B.ha(B.a([u,w],x.dS)),new C.d2z(this),v),v),v,v,v)}}
C.bcR.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.at(new B.D(D.byo,B.aF(!1,A.a2,!0,w,B.p(w,B.bv(B.m(22),B.w(B.a([new B.D(D.bxz,B.w(B.a([B.p(w,D.bP4,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fFq,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fg_,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.brA,B.B(B.a([B.E(B.bM(!1,D.ftD,w,w,!0,w,w,new C.d2V(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.ne,w,A.on,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fyW,w,w,!0,w,w,new C.d2W(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.ne,w,A.on,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.aq),A.f,w,A9.VV,new B.o(A.av,w,u,v,D.cWg,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JQ.prototype={
U(){return new C.bcC()}}
C.bcC.prototype={
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
return B.dU(B.dd(B.aB(o,B.vt(B.db(o,B.B(B.a([r,A.as,new B.dr(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.f2:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.P,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eL,o,o,o,A.nf,o,o,1/0),A.ct,A.js,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d2u(p,d),new C.d2v(p),new C.d2w(p),new C.d2x(p),o,o,o,!1,A.a5),k),new B.x(0,(1-k)*16))}}
C.PE.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a2,!0,t,B.aK(!1,s,!0,new B.D(A.eO,B.B(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.w(B.a([B.d(w.e,v,v,v,v,v,v,A.nz,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.W(A.eC,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_u.prototype={
U(){return new C.aEr(D.dg,null,null)}}
C.aEr.prototype={
gYX(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bs6,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b67(d){if(!this.a.c.ay)return
this.x=d
this.gYX().iK(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avU(D.f4f)
C.i50()
v.Ro()},
t(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gYX().t()
v=w.z
if(v!=null)v.a4(0)
C.avU(D.f4g)
C.i53()
w.bw5()},
cAF(){B.jB()
this.m(new C.exQ())
var w=this.c.I(x.q).f
w.a4R()
if($.bkf)w.R(D.f16)},
Ro(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cL(B.dE(0,0,0,0,0,A.o.D(C.hcj(u,w),1,120)),new C.exG(v))},
cAk(){var w,v=this
v.m(new C.exP(v))
if(v.r)v.Ro()
else{w=v.f
if(w!=null)w.a4(0)}},
gaV2(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cum(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.exH(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cL(A.lr,new C.exI(w))},
awn(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.exC(u))
u.Ro()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaV2()){u.cum()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.exD(u,A.o.E(w+1,s)))
u.b67(w)
u.Ro()}},
ck9(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.exE(v))
v.Ro()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.exF(v,w,t))
v.b67(w)
v.Ro()}},
cvR(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nj(d,new B.cx(u,x.ac))}w=v.cvS(u)
u=v.d
u===$&&B.c()
return B.qo(new B.nj(d,new B.cx(u,x.ac)),w,new C.exN(),A.b8,A.b8,new C.exO(v))},
cvS(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bst
case 16:return A.kB
case 18:return A.na
default:return A.nc}},
cvQ(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.uN,A.J,w),w.k("bf<bL.T>")),t,!0)
case 3:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.Su,A.J,w),w.k("bf<bL.T>")),t,!0)
case 4:case 21:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.ix,A.J,w),w.k("bf<bL.T>")),t,!0)
case 5:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.uM,A.J,w),w.k("bf<bL.T>")),t,!0)
case 6:case 16:w=x.b
return B.iq(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bL.T>")))
case 7:w=x.b
return B.iq(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bL.T>")))
case 8:return B.c7(s,new C.exJ(s),e)
case 9:return B.c7(s,new C.exK(s),e)
case 10:return B.c7(s,new C.exL(s),e)
case 11:return B.c7(s,new C.exM(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.iq(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bL.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jx(B.jq(e,new B.bf(s,new B.bp(A.uN,A.J,v),v.k("bf<bL.T>")),t,!0),A.r,new C.brj(w,t))
case 15:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.Su,A.J,w),w.k("bf<bL.T>")),t,!0)
case 19:w=B.dk()
w.mK((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jT(v,u,v,1)
return B.fo(A.A,B.dd(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jx(new C.aou(B.c7(n.gYX(),new C.exR(n,v,w),m),m),A.r,m)}else{t=B.rH(new C.IO(w,!0,!1,m))
l=B.b0(w.e)
u=n.cvR(B.el(B.jx(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hcj(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ox,m,m,m),A.bn,D.bRp],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.h1,m,m,m)
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
l.push(B.bS(0,new C.Nx(new C.Ew(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oj?0.5625:1.7777777777777777
l.push(B.at(new B.fK(r,B.jx(B.ux(A.ae,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bkf){r=B.HP(A.l9,new C.exS(d),B.nD(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HP(B.W(n.r?Ak.yG:A.is,m,m,m,m,m),n.gcAj(),B.nD(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ae,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fJ,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.h1,m,m,m),!0,!1,A.ae,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aB(A.ch,B.p(A.lk,$.bkf?A.bI:s,A.f,m,m,m,m,64,m,m,D.btc,m,m,150),A.y,!1,m,n.gcAE(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a5),!0,!1,A.ae,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aB(m,new B.an(A.V,m,A.b2,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.exT(n,d),m,m,m,!1,A.a5),m,!1,!1,m,m)}}
C.JW.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aj2,this.c,w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b2b,w,w,w,w,w,w,w,w)}}
C.brj.prototype={
je(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jW(d){return d.b!==this.b}}
C.bht.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aZX
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aD:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.db(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wk,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hl,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.w(B.a([w,A.al,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a5)}}
C.bhs.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dr8.h(0,p)
if(o==null)o=D.ddh
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aD,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.anp:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a4),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a4),q,52,q,q,A.ex,q,q,52)
return B.aB(q,new B.a7(66,q,B.w(B.a([w,A.al,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a5)}}
C.aK9.prototype={
aX(){this.b6()
this.b5()
this.dL()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdH())
w.b4$=null
w.a2()}}
C.aM2.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwZ.prototype={}
C.aM3.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.b1a.prototype={}
C.VZ.prototype={
U(){return new C.aEp()},
bgL(d){return this.e.$1(d)}}
C.aEp.prototype={
gb4q(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaaC(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb4q()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOj(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4q()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5G(){return A.d.cM(this.gaaC(),0,new C.exm())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.R0()},
R0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$R0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1M(s.c,s.f),$async$R0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.exi(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$R0,v)},
J9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaaC()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fGS(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p9(o,q.c,q.f),$async$J9)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e_(new C.exl(t,p),!1,null,x.H)
w=4
return B.b(B.a3(o,!1).cg(q),$async$J9)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.f),$async$J9)
case 5:w=6
return B.b(t.R0(),$async$J9)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
Rm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e3m,!0,"NgmySlidesTransferScan",x.N),$async$Rm)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.exj(t))
w=4
return B.b(C.ahk(s),$async$Rm)
case 4:r=e
t.m(new C.exk(t))
o=J.a4(r)
if(o.gal(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.f_W)
w=1
break}w=5
return B.b(t.a.bgL(r),$async$Rm)
case 5:q=t.c
if(q==null){w=1
break}B.a3(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gK(r)
o=o.gK(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rm,v)},
J8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaaC()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p9(s,r.c,r.f),$async$J8)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fH6(null,A.d.gH(n),s,t.a.f)}else q=C.fH6(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aM(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gv(q,"ngmy_slides_"+p,!1),$async$J8)
case 4:o=e
s=t.a
w=5
return B.b(B.p8(s.c,s.f),$async$J8)
case 5:w=6
return B.b(t.R0(),$async$J8)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J8,v)},
a2R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exn(t))
w=3
return B.b(C.bCc(),$async$a2R)
case 3:s=e
t.m(new C.exo(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bgL(s),$async$a2R)
case 4:r=t.c
if(r==null){w=1
break}B.a3(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a4(s)
p=q.gK(s)
q=q.gK(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2R,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dc:A.bM,k=o.gaaC().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bi.j(0.22),A.K],x.O),n,n),A.a4),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.W(A.cw,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.exr(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zT],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.eW,24)],x.V)
u=B.ao(n,B.W(A.q5,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bRW,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.w(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bCM],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aB(A.ch,D.eYQ,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gceS(),n,n,n,n,n,n,!1,A.a5),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.V,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1L,A.n),n,n,n,n,E.Zz,n,n,1/0),A.dW,o.axz(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aXk(A.qa,m,new C.exs(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aXk(D.bHD,m,new C.ext(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.axz(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.I(m?A.bz:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.M(u,new C.exu(o,m),B.S(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mN)
w.push(o.axz(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.aqd(A.aR,k,!0,A.jy,m,o.r,o.gc91(),"Scan on another device","Show QR"),1),A.as,B.E(o.aMo(A.k3,!0,A.ja,m,o.gcr3(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bz6(A.aV,k,A.hE,m,o.r,o.gc8Z(),"Download .json","Backup file"),1),A.as,B.E(o.aMo(A.aF,!0,Aw.yO,m,o.gcD3(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bi.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bi.j(0.28),A.q,1)
s=B.W(A.lv,A.bi.j(0.9),n,n,n,18)
r=o.gaOj()
q=o.gb5G()
p=o.gb5G()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.w(B.a([new B.D(Ag.N2,i,n),B.E(B.cs(w,n,D.bwH,n,n,A.af,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Wd,A.f,A.dI,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.V,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ibn(s,t.d,t.e),$async$afE)
case 2:return B.h(null,v)}})
return B.i($async$afE,v)},
axz(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bi,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXk(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bi
else w=e?A.bz:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bi.j(0.2),A.cz,14)],x.V):s
u=A.bi.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bi,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a2,!0,s,B.aK(!1,r,!0,B.eF(new B.D(A.bC,B.w(B.a([t,A.R,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bJG(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bi
else w=e?A.bz:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bS7,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bi,A.bi.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.w(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ea:A.rf
if(p)r=A.bi
else r=e?A.aZ:A.dq
return new B.D(A.cu,B.aF(!1,A.a2,!0,q,B.aK(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.exh(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
aqd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rd,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anX,A.f,s,s,D.b1Y,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dd(B.aF(!1,A.a2,!0,s,B.aK(!1,p,!0,B.eF(new B.D(E.Zc,B.w(B.a([new B.an(A.V,s,A.aa,A.f,u,s),A.ac,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aMo(d,e,f,g,h,i,j){return this.aqd(d,e,!1,f,g,!1,h,i,j)},
bz6(d,e,f,g,h,i,j,k){return this.aqd(d,e,!1,f,g,h,i,j,k)}}
C.W_.prototype={
U(){return new C.bke()}}
C.bke.prototype={
a_(){this.a1()
this.aev()},
aev(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aev=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fH6(null,A.d.gH(m),k,r.a.f):C.fH6(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ky(A.d.gH(n).w))C.fGS(A.d.gH(r.a.d),D.db7)
n=r.a
m=n.c
n=C.i8k(n.d)
w=7
return B.b(C.fH5(p,C.i8p(r.a.d),n,m,q),$async$aev)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.exv(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.exw(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aev,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dc:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cM(k.a.d,0,new C.exx())
v=B.aI(j,j,j,j,B.W(A.eH,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.exy(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zT],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.df,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.w(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1L,A.n),j,j,j,j,E.Zz,j,j,1/0)
q=B.m(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.TT,A.L,j,j))
else if(k.d==null)r.push(D.ee6)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fu4,A.al,B.aB(j,B.p(j,B.B(B.a([D.bTF,A.as,B.d(m,j,j,j,j,j,j,D.fgp,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bYw,A.n),j,j,j,j,A1.aiO,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.exz(k,d),j,j,j,j,j,j,!1,A.a5),A.N,D.fys,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bz,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pU(j,j,!1,l,j,!0,!0,j,!1,D.bnL),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c4(j,h,B.bm(!0,B.w(B.a([new B.D(Ag.N2,v,j),B.E(B.cc(B.w(B.a([t,A.aO,B.p(j,B.w(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c_t,A.n),j,j,j,j,A.tY,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aj7,j,j,A.af),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),j,!1,!1,j,j)}}
C.aEm.prototype={
U(){return new C.aEn(new B.aq(A.at,$.ax()),B.jU(!0,null,!0,!0,null,null,!1))}}
C.aEn.prototype={
a_(){var w=this
w.a1()
w.e.aQ(0,new C.er_(w))
$.aV.x1$.push(new C.er0(w))},
t(){var w=this.d
w.S$=$.ax()
w.P$=0
this.e.t()
this.a2()},
aZU(){var w,v=this.c
v.toString
w=C.yH(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a3(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eK,x.w).w,i=B.m(28),h=B.I(A.bi.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bi.j(0.28),A.uL,36),D.abU],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.w(B.a([B.p(k,D.bP8,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fra,A.al,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b2o,k,k,k,k,A.yb,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aQ(14,14)
if(q)n=A.bi
else n=r?A.bi.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bi.j(0.28),A.J,12)],g):k
t.push(new B.by(1,A.bd,B.db(A.A,new B.y(p,k,D.f9V,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.bJ(m,m,m,m),new B.bk(o,o,o,o),n,k,A.n),A.hl,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.Je)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bS(0,B.dd(B.aL(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bWp,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uo(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bt(5,k),new C.buz()],x.aS),k,k,A.aQ9,k,5,k,1,k,k,!1,"\u2022",k,new C.eqW(l),k,new C.eqX(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.ma,k,k,k,k),0),0,0,0)],a1)
d=C.yH(w.a.a.toUpperCase())==null?k:l.gc92()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a2,!0,k,new B.cT(Ad.KI,B.p(k,B.bv(e,B.w(B.a([a0,new B.D(D.bxc,B.w(B.a([new B.an(A.V,k,A.aa,A.r,g,k),A.R,D.fpv,A.bv,new B.a7(1/0,50,B.bH(D.fGk,d,B.bn(A.bi,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.X),k,k,k)),k),A.al,B.bM(!1,A.nA,k,k,!0,k,k,new C.eqY(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.buz.prototype={
oC(d,e){var w=e.a.toUpperCase()
return e.cJp(B.hh(A.bw,w.length),w)}}
C.aro.prototype={
U(){return new C.aEq(B.zm(A.Mg,A.nG,A.ur))}}
C.aEq.prototype={
t(){this.d.t()
this.a2()},
aZT(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iQ(w,d)},
aax(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aax=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fPP(s),$async$aax)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZT("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aax,v)},
c90(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i8n(w[u])
if(t!=null){this.aZT(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.wh,s,s,s,t.gbO_(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aI(s,s,s,s,B.W(q?A.u9:Al.NY,s,s,s,s,s),s,s,s,new C.exB(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fHx,s,s,s,1,s,!0)
r=B.zl(t.d,A.bU,t.gc9_())
w=B.m(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bi,A.q,3),w,B.a([new B.ac(2,A.G,A.bi.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.V,s,A.b2,A.r,B.a([r,w,B.ao(32,B.p(s,D.fv9,A.f,s,s,new B.o(v,s,B.I(A.bi.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jv,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buL.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a2,!0,w,B.p(w,B.w(B.a([B.p(w,H.anD,A.f,w,w,D.b27,w,56,w,w,w,w,w,56),A.aO,D.fHd,A.al,new B.jI(this.c,new C.f7O(),w,w,x.cI),A.aO,new B.jI(this.d,new C.f7P(),w,w,x.cl),A.ac,D.fHb],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Ad.KI,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.ZF,D.bxQ,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7K.prototype={
U(){return new C.bjY(A.bE)},
gd7(){return this.c}}
C.bjY.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.a_9()
w.d=B.dq(A.fO,new C.eg6(w))},
t(){var w=this.d
if(w!=null)w.a4(0)
this.a2()},
a_9(){return this.cno()},
cno(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eg4(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bz(new B.T(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cgE(p.c),$async$a_9)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.eg5(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_9,v)},
bQ_(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aY(A.o.u(w),2,"0")+"m "+A.a.aY(A.o.u(v),2,"0")+"s left"
return A.a.aY(A.o.u(w),2,"0")+":"+A.a.aY(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aw:A.c_
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.W(A.Gd,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bQ_(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Y.ahU,A.iO,r,r,1/0)}}
C.a8E.prototype={
nf(){var w,v,u,t=this
t.xk()
w=t.cx
v=t.c
w.bqL(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q0(B.G(["/S",D.ehN,"/URI",new B.rA(B.Ww(w.as),A.uO,!0)],x.N,u),u))}}
C.a8F.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b2P.prototype={
by8(d,e,f,g,h,i,j,k,l,m){var w=B.ex([D.eg5],x.di)
this.w!==$&&B.aP()
this.w=w},
gcMI(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jT(w,new C.ciQ(),B.a5(w).k("jT<co.E,H>")).f9(0,new C.ciR())},
aD_(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tB(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.tB(H.apE))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h0(t.gcMI()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q0(w,x.Y))}}
C.ciS.prototype={}
C.a2P.prototype={}
C.aib.prototype={}
C.aR6.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.lk(d)
q.M4(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bg8(w)
u=x.N
t=x.Y
s=new C.ciS(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.by8(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q0(B.G(["/Type",D.ehL],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8E(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.awS.prototype={}
C.aSD.prototype={
h0(d){var w,v,u,t,s=this
s.lk(d)
w=s.b
if(w!=null){v=B.dk()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.ic()
t=s.a
t.toString
u.Ld(t)
u.SE(0)
u.oX(0,v)
w.h0(d)
u.ni(0)}}}
var z=a.updateTypes(["aA<~>()","~(lL)","R(i4)","~()","R(eI)","R(op)","R(lL)","~(i4)","R(eI,eI)","JW(Y)","R(nO)","R(lj)","aA<R>()","H(H,i4)","a6<n,@>(i4)","ai<zE>()","n(nO)","R(a80)","n(lL)","n(w3)","R(EF)","H(i4,i4)","n(eI)","t(eI)","cM(eI)","t(hF)","~(hF)","eI(uM,K,K,K,K,H{fx:n,key:n,rotation:K})","eI(n,K,H)","H(op,op)","R(zE)","R(n,ai<zE>)","a6<n,@>(op)","nO()","YA(Y)","eI(n,K,K,K,K,K{align:q6,anim:hF,bullets:R,color:H?,delay:H,fx:n,key:n,style:HK,weight:nB})","a0R(Y)","eI(n,K,K,K,K{anim:hF,delay:H,fx:n,key:n})","aA<~>(op)","R(my)","Yy(Y)","a0n(Y)","a0m(Y)","Pu(Y)","ZK(Y)","eI(uM,K,K,K,K,H,n,n{anim:hF,delay:H,rotation:K,stroke:H,strokeWidth:K})","eI(n,K,K,K,K,K,n,n,H)","eI(K,K,n,H{size:K})","t(ro,K,K)","lj()","op(a6<@,@>)","~(uC)","EF()","fh(eI)","t(j2)","Zh(Y)","~(Ew)","ZC(Y)","H(eI,eI)","eI(eI)","a6<n,@>(eI)","eI(a6<@,@>)","lL(lL)","a6<n,@>(lL)","lL(a6<@,@>)","R(jF)","jF()","n(i4)","~(ai<op>)","T(ai<i4>)","T(i4)","ai<i4>(n?)","acE(Y,H)","~(R(eI,eI))","adh(Y)","aeX(Y,H)","v(lL,R)","VN(Y)","adk(Y)","VO(Y)","~(mC)","i4(i4)","K(eI)","a_R(Y)","a_u(Y)","i4()","ai<F2>()","aA<~>(ai<i4>)","t(bw<H,i4>)","D(jF)","D(EF)","aA<~>(hF,~())","t(ai<hF>,hF?,~(hF),v)","R(ma)","ai<jp<mC>>(Y)","jp<mC>(mC)","i4(a6<@,@>)","VZ(Y)","eI(n,K,K,K,K,K,H{align:q6,style:HK,weight:nB})","W_(Y)","t(i4)","~(m4)","IO(Y,lL,t?)","H(a8F)","aA<ai<a6<n,@>>?>()","n(n)","aA<zD>({paper:n?,photo:dI?,request:n,template!lm})","aA<a7T>({doc!zD,history:ai<+(n,n)>,instruction!n,photo:dI?,template!lm})","ade(Y)"])
C.cGS.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:72}
C.cGT.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:73}
C.cGU.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakc(s):16;--w.c}w.b=A.o.dZ(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mq(v,t)
w.b=v-A.o.dZ(q,t)
w.a=t
return q},
$S:73}
C.cGV.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bPK.prototype={
$1(d){return J.eZ(A.dC.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.ftC.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iK(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iK(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iK(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iK(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.c_F.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.c_G.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aK(v,J.k(w==null?"":w))},
$S:40}
C.c_I.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fJT.prototype={
$1(d){return new C.a0R(this.a,this.b,C.i9f(),null)},
$S:z+36}
C.f6g.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f6k.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.f6l.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6m.prototype={
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
C.f6h.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6i.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f6j.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f6b.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.he,w,w,w)
return B.ek(B.a([B.bM(!1,E.aS9,w,w,!0,w,w,new C.f69(d),w,w),B.bM(!1,D.fsE,w,w,!0,w,w,new C.f6a(d),w,w)],x.p),w,w,D.Y4,v,w,w,w,w,D.fHQ,w)},
$S:18}
C.f69.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.f6a.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.f6c.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f6d.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f6q.prototype={
$0(){var w=this.a
return w.m(new C.f6p(w,this.b))},
$S:0}
C.f6p.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f6f.prototype={
$0(){var w=this.a
return w.m(new C.f6e(w,this.b,this.c))},
$S:0}
C.f6e.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.f6n.prototype={
$0(){return this.a.a1f(this.b)},
$S:0}
C.f6o.prototype={
$0(){return this.a.Pb(0,this.b)},
$S:0}
C.f6t.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.f6u.prototype={
$0(){var w=this.a
return w.m(new C.f6s(w,this.b))},
$S:0}
C.f6s.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f6r(),B.S(w).k("M<1,n>")))}},
$S:0}
C.f6r.prototype={
$1(d){return d.a},
$S:z+67}
C.fdH.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h9w(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cy)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.op(s,v,u==null?new B.T(Date.now(),0,!1):u)},
$S:z+50}
C.fdI.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fws.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcA()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fwq.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fwr.prototype={
$2(d,e){return e.c.aK(0,d.c)},
$S:z+29}
C.fJn.prototype={
$1(d){return d.ag()},
$S:z+32}
C.ftg.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fKe.prototype={
$1(d){return new C.YA(this.a,null)},
$S:z+34}
C.cId.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cIf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cIi.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cIj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cIh())},
$S:11}
C.cIh.prototype={
$0(){},
$S:0}
C.cIk.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1Q(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.bf(s,new C.cIg(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aht(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:306}
C.cIg.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cIl.prototype={
$1(d){},
$S:29}
C.cIe.prototype={
$1(d){return new C.Yy(this.b,this.a.gcxf(),null)},
$S:z+40}
C.cIm.prototype={
$1(d){return D.h67},
$S:z+43}
C.cI9.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.XJ,A.q,1),t=x.p
return B.at(B.aF(!1,A.a2,!0,w,B.p(w,B.w(B.a([new B.D(D.bxC,B.w(B.a([B.p(w,D.bMi,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a4),w,56,w,w,w,w,w,56),A.aO,D.frB,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.ffo,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.D(A.q1,B.B(B.a([B.E(B.dQ(D.fyu,new C.cI7(d),B.dg(w,w,w,w,w,w,w,w,w,E.n2,w,w,A.cj,w,new B.b7(B.m(14),A.X),D.b_n,w,w,w,w)),1),A.as,B.E(B.bH(D.fEy,new C.cI8(d),B.bn(A.bx,w,w,w,w,w,A.cj,w,new B.b7(B.m(14),A.X),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xg,new B.o(D.adA,w,u,v,D.d_R,w,A.n),w,w,w,L.ZF,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1671}
C.cI7.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.cI8.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.cIa.prototype={
$0(){return J.nu(this.a.d,new C.cI6(this.b))},
$S:0}
C.cI6.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cI5.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.XJ,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bRi,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.apb,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.w(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aRP,t,t,t),A.bA,D.fEt],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dmf[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axL(u[1],u[2],u[3],new C.cI3(v,d),!1,t))}q.push(A.al)
q.push(D.brD)
q.push(A.al)
q.push(new C.axL(A.eb,"Delete book","Remove it from this device",new C.cI4(d),!0,t))
return B.bm(!0,B.p(t,B.w(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.adA,t,r,s,t,t,A.n),t,t,t,A.tT,E.Zi,t,t,t),!0,!1,A.ae,!0,!0)},
$S:27}
C.cI3.prototype={
$0(){var w=this.a.a
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.cI4.prototype={
$0(){B.a3(this.a,!1).N("delete")
return null},
$S:0}
C.cIc.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aHz,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bv(B.m(4),new B.a7(62,95.81818181818181,B.eN(A.A,F.aog(d),A.f,A.dw),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.x(f,0))},
$S:z+48}
C.cIb.prototype={
$0(){return this.a.c3I()},
$S:0}
C.cI2.prototype={
$0(){return this.a.aYt(0,this.b)},
$S:0}
C.cI1.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
C.cI0.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
C.cIn.prototype={
$2(d,e){var w=this.a
return w.bCF(J.r(w.d,e))},
$S:41}
C.cHu.prototype={
$0(){var w=this.a
if(w.c!=null)w.AQ()},
$S:0}
C.cHt.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0n("Page "+(v.length+1),"",""))},
$S:0}
C.cHw.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cHE.prototype={
$0(){},
$S:0}
C.cHF.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cHx.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aL(this.c)},
$S:0}
C.cHv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cHz.prototype={
$0(){return this.a.Qy(this.b)},
$S:0}
C.cHA.prototype={
$0(){return this.a.Qy(this.b)},
$S:0}
C.cHB.prototype={
$0(){var w=this.a
w.m(new C.cHy(this.b))
w.E9()},
$S:0}
C.cHy.prototype={
$0(){return this.a.c=""},
$S:0}
C.cHD.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cHC(w,d))
w.E9()},
$S:z+51}
C.cHC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cHK.prototype={
$2(d,e){if(d)this.a.AQ()},
$S:123}
C.cHG.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AQ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.f2v)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cHH.prototype={
$0(){return this.a.aXr(this.b,-1)},
$S:0}
C.cHI.prototype={
$0(){return this.a.aXr(this.b,1)},
$S:0}
C.cHJ.prototype={
$0(){return this.a.c51(0,this.b)},
$S:0}
C.fAY.prototype={
$1(d){return C.hjy()},
$S:44}
C.fAZ.prototype={
$1(d){return null},
$S:29}
C.fhW.prototype={
$1(d){return null},
$S:29}
C.fBX.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:276}
C.fBW.prototype={
$2(d,e){return A.o.aK(e.length,d.length)},
$S:260}
C.fC2.prototype={
$1(d){var w=this.a
return C.h1N(d)===w||C.ho8(d)===w},
$S:z+4}
C.fgZ.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:79}
C.caX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAW.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fAX.prototype={
$1(d){return C.fDG(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fvO.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.ya,B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fz5,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GR,D.ftg,new C.fvM(d),B.bn(A.c_,w,w,w,A.w,w,A.cj,w,w,w,w,w)),A.R,B.er(A.wg,D.fAm,new C.fvN(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cj,w,w,Q.xe,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:27}
C.fvM.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fvN.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fvP.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,D.fpn,w,w,!0,w,w,new C.fvK(d),w,w),B.bH(D.fGS,new C.fvL(d),w)],x.p),w,w,w,D.fIM,w,w,w,w,D.fpg,w)},
$S:18}
C.fvK.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.fvL.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.ebN.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ebL.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ebM.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ebO.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ebP.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fC1.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:79}
C.fBY.prototype={
$2$h$w(d,e){var w=null
return new B.bK(A.a3,w,w,B.Bi(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fC_.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fgC,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:143}
C.fC0.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i4,A.q,1.5),w,w,w,A.a4),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i4,A.q,1.5),w,w,w,A.a4),w,d,w,w,w,w,w,d),new B.x(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fBZ.prototype={
$2$female$size(d,e){var w=null,v=d?D.afu:this.a,u=B.I(A.i4,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a4),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adP,w,u,w,w,w,A.a4),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fNG.prototype={
$1(d){return new C.ade(this.a,this.b,null)},
$S:z+108}
C.dZo.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.boh:A.LN,q=B.I(D.jn.j(0.25),A.q,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.anW,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jn.j(0.35),A.ep,10)],x.V),D.c05,A.n),t,t,t,t,A.y_,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.w(B.a([new B.D(K.Zv,B.w(B.a([p,A.aA,B.B(B.a([o,A.bc,B.E(B.w(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jn,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.ffR,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.iw(!0,t,e,A.y,D.aPc,new C.dZn(w,this.c),v,D.aiJ,t,A.af,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mh,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:117}
C.dZn.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acE(w,new C.dZm(this.b,w),null)},
$S:z+72}
C.dZm.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fvS.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fvT.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fCB,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GR,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvQ(d),B.bn(D.jn,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.er(A.oc,D.Uq,new C.fvR(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cj,w,w,Q.xe,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:27}
C.fvQ.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fvR.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fvW.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fvX.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fqn,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GR,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvU(d),B.bn(D.jn,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.er(A.oc,D.Uq,new C.fvV(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cj,w,w,Q.xe,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:27}
C.fvU.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fvV.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fw_.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fw0.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fwU,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GR,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvY(d),B.bn(D.jn,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.er(A.oc,D.Uq,new C.fvZ(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cj,w,w,Q.xe,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:27}
C.fvY.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fvZ.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fP8.prototype={
$1(d){return D.haW},
$S:z+74}
C.eg9.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bfK:A.LN,s=B.I(A.ay.j(0.25),A.q,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bTB,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.ep,10)],x.V),D.apg,A.n),v,v,v,v,A.y_,v,v,v)
w=x.p
return B.p(v,B.w(B.a([new B.D(K.Zv,B.w(B.a([r,A.aA,B.B(B.a([q,A.bc,B.E(B.w(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.LJ,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fdm,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.iw(!0,v,e,A.y,D.aPc,new C.eg8(this.b),19,D.aiJ,v,A.af,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mh,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.eg8.prototype={
$2(d,e){var w=D.R8[e]
return new C.aeX(w,new C.eg7(this.a,w),null)},
$S:z+75}
C.eg7.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fDK.prototype={
$0(){return B.h0J(C.hXE(this.a))},
$S:336}
C.fDJ.prototype={
$0(){var w=C.h25(this.a)
return"data:image/png;base64,"+A.cJ.gct().aL(w)},
$S:22}
C.ffg.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1N(this.a,C.fB(4291404327),v)},
$S:561}
C.fPj.prototype={
$1(d){return new C.VN(this.a,null)},
$S:z+77}
C.ej6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ej5())},
$S:30}
C.ej5.prototype={
$0(){},
$S:0}
C.ej7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ej4(w,d))},
$S:1676}
C.ej4.prototype={
$0(){return this.a.x=J.eV(A.dC.gaP(this.b))},
$S:0}
C.ej8.prototype={
$1(d){},
$S:29}
C.eiJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiQ.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eiR.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.erT)},
$S:0}
C.eiS.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiL.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c5)},
$S:0}
C.eiM.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.eiN.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.eiO.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiP.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.mb(v,A.dY,A.im)}},
$S:9}
C.eiK.prototype={
$0(){var w=this.a,v=w.z,u=C.fEn(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cIx(C.fEn(t))},
$S:0}
C.eiH.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eiI.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eiY.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.eiZ.prototype={
$0(){var w=this.a
return w.m(new C.eiX(w))},
$S:0}
C.eiX.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ej_.prototype={
$0(){var w=this.a
return w.m(new C.eiW(w,this.b))},
$S:0}
C.eiW.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.ej0.prototype={
$1(d){var w=this.a
return w.m(new C.eiV(w))},
$S:8}
C.eiV.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ej1.prototype={
$1(d){var w=this.a
return w.m(new C.eiU(w))},
$S:8}
C.eiU.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ej2.prototype={
$0(){var w=this.a
return w.m(new C.eiT(w,this.b))},
$S:0}
C.eiT.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.ej3.prototype={
$1(d){return this.a.ZW()},
$S:2}
C.eiG.prototype={
$0(){return this.a.c8h(this.b)},
$S:0}
C.ceD.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:339}
C.ceB.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ceC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDk.prototype={
bll(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bPJ(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cEX($.qZ().jI(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mG(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bll(d,e)},
$S:1677}
C.fBC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBE.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.du(this.b,w,w+d)," ")
w=B.aM(w," \n\n ","\n\n")
w=B.aM(w," \n\n","\n\n")
return B.aM(w,"\n\n ","\n\n")},
$S:79}
C.fBD.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h2(t,t,t,t,B.d1(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qx,A.cb,t,A.dS,A.c7)
v=this.a
w.uF(v.b)
u=w.b.a.c
return u.gbg(u)<=v.a},
$S:33}
C.feR.prototype={
$1(d){var w=A.a.fH(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.feS(),B.S(w).k("Z<1>")).gK(0)},
$S:242}
C.feS.prototype={
$1(d){return d.length!==0},
$S:3}
C.feP.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.feQ.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.ceE.prototype={
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
o=C.h1M(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZz(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gcgw(),"\n\n")
d=B.h2(a6,a6,a6,a6,B.d1(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aek(k,q,1.28),j),A.qx,A.cb,a6,A.dS,A.c7)
d.uF(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbg(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h1M(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZz(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aek(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bd,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qx,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAi(s,j))
i.push(new B.a7(s,a6,B.w(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:415}
C.ceF.prototype={
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
l=C.h1M(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fZz(g.length===0?B.a([a6],n):g,l))break}a1=o.aek(i,h,1.28)
a2=new C.ceG(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Jd,new B.a7(v,a5,a4.f,a5),A.Jd,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bzX,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bd,new B.y(l[2+a3],a5,a1,a5,A.qx,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAi(r,g))
f.push(new B.a7(r,a5,B.w(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.w(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:152}
C.ceG.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qx,w,w),w)},
$S:1678}
C.fPm.prototype={
$1(d){return new C.VO(this.a,this.b,null)},
$S:z+79}
C.ejE.prototype={
$1(d){return d.lE()},
$S:1679}
C.ejF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejD(w,d))},
$S:1680}
C.ejD.prototype={
$0(){var w=this.b
return this.a.d=w.gfv(w)},
$S:0}
C.ejr.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ejs.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ejy.prototype={
$0(){return B.a3(this.a,!1).eG()},
$S:0}
C.ejz.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bD,A.q,2.5)
return B.aB(w,B.p(w,B.b3(w,w,w,new C.bbQ(u,v.gaxr(),w),A.fG),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ejw(v),new C.ejx(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a5)},
$S:37}
C.ejw.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:248}
C.ejx.prototype={
$1(d){var w=this.a
w.m(new C.ejt(w,d,this.b,this.c))},
$S:225}
C.ejt.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaxr()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ejA.prototype={
$1(d){var w=this.a
return w.m(new C.ejv(w,this.b))},
$S:8}
C.ejv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ejB.prototype={
$1(d){var w=this.a
return w.m(new C.eju(w,d))},
$S:7}
C.eju.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ejC.prototype={
$0(){return B.a3(this.b,!1).N(this.a.a.c)},
$S:0}
C.fPC.prototype={
$1(d){return D.hdJ},
$S:z+83}
C.eSP.prototype={
$1(d){return this.a.YA()},
$S:9}
C.eRH.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aL(v)},
$S:0}
C.eS4.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eSe.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eRq.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRr.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRo.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRp.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRY.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eRZ(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jx(B.rH(p>0.2?C.fUg(q,B.a55(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a55(12,12,A.x)
p.push(B.jx(B.dd(B.rH(C.fUg(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b_>0)p.push(B.el(u,B.b0(r).j(s.b_),!0))
r=s.bb
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aY2,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aXO,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aJ
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b3,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aJ)],x.O),D.cZt,u),A.n),A.bf))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b3,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.d9x,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d6B,u),A.n),A.bf))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bfn(s,u),A.az))
return new B.an(A.V,u,A.b2,A.r,p,u)},
$S:68}
C.eRZ.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.ce,A.bU,!0,q,!1,q,q),o=r.a,n=o.aX3(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
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
t=o.bB
s=o.c5?-1:1
return B.dU(B.ed(A.A,B.eG(A.A,l,B.fo(A.A,new B.Dn(new B.z0(q,q,n,A.AH),p,q),q,B.vR(s,o.cK?-1:1,1),!0),q),v*w,q,q),new B.x(-m*r.d*u/2,-t*r.c*u/2))},
$S:678}
C.eSa.prototype={
$0(){return this.a.m(new C.eS9(this.b,this.c))},
$S:0}
C.eS9.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSb.prototype={
$1(d){return this.a.m(new C.eS8(this.b,d))},
$S:7}
C.eS8.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSd.prototype={
$0(){return this.a.m(new C.eSc(this.b,this.c))},
$S:0}
C.eSc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRg.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eRh.prototype={
$1(d){var w=this.a
return w.m(w.gcyD())},
$S:2}
C.eRi.prototype={
$1(d){return this.a.m(new C.eRf())},
$S:2}
C.eRf.prototype={
$0(){},
$S:0}
C.eRj.prototype={
$0(){var w=this.a
return w.m(new C.eRe(w,this.b))},
$S:0}
C.eRe.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eRl.prototype={
$2(d,e){return A.as},
$S:36}
C.eRk.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bz
q=B.I(q,A.q,t?2.5:1)
r=B.db(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a8(A.b3,A.b6,A.x,r,w,w),A.n),A.hl,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.w(B.a([r,A.fH,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRd(u,v),w,w,w,w,w,w,!1,A.a5)},
$S:82}
C.eRd.prototype={
$0(){var w=this.a
return w.m(new C.eRa(w,this.b))},
$S:0}
C.eRa.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRm.prototype={
$1(d){var w=this.a
return w.m(new C.eRc(w,d))},
$S:8}
C.eRc.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eRn.prototype={
$1(d){var w=this.a
return w.m(new C.eRb(w,d))},
$S:8}
C.eRb.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eSE.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.eSL.prototype={
$1(d){var w=this.a
return w.m(new C.eSM(w,d))},
$S:31}
C.eSM.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.em(v,v.r,B.a5(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eSN.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:265}
C.eSF.prototype={
$0(){var w=this.a
return w.m(new C.eSD(w,this.b))},
$S:0}
C.eSD.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eSG.prototype={
$0(){var w=this.a
return w.m(new C.eSC(w,this.b))},
$S:0}
C.eSC.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eSH.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eSB(v,w.b,w.c,w.d))},
$S:0}
C.eSB.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eSI.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBt(v))},
$S:0}
C.eSJ.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eSK.prototype={
$0(){var w=this.a
return w.m(new C.eSA(w))},
$S:0}
C.eSA.prototype={
$0(){var w=this.a.db
return A.d.hq(w,0,w.length,0)},
$S:0}
C.eSn.prototype={
$1(d){return d.a===this.a.dy},
$S:217}
C.eSo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.axk[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aQ(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.axw(new B.nd(new B.bk(n,n,n,n),A.aq,new B.kS(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.b_2(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eSm(r,v),2,i))}return B.bV(A.bB,h,A.bs,7,7)},
$S:175}
C.eSm.prototype={
$0(){var w=this.b
return w.m(new C.eSh(this.a,w))},
$S:0}
C.eSh.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eSp.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:196}
C.eSs.prototype={
$0(){var w=this.a
return w.m(new C.eSl(w))},
$S:0}
C.eSl.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eSt.prototype={
$1(d){return this.a.p2=d},
$S:7}
C.eSu.prototype={
$1(d){return this.a.p3=d},
$S:7}
C.eSv.prototype={
$1(d){return this.a.ok=d},
$S:7}
C.eSw.prototype={
$0(){var w=this.a
return w.m(new C.eSk(w))},
$S:0}
C.eSk.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eSx.prototype={
$0(){var w=this.a
return w.m(new C.eSj(w))},
$S:0}
C.eSj.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eSy.prototype={
$0(){var w=this.b
return w.m(new C.eSi(this.a,w))},
$S:0}
C.eSi.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eSz.prototype={
$1(d){return this.a.fx=d},
$S:196}
C.eSq.prototype={
$1(d){return this.a.fr=d},
$S:7}
C.eSr.prototype={
$1(d){return this.a.k1=d},
$S:7}
C.eS1.prototype={
$0(){var w=this.a
return w.m(new C.eS0(w))},
$S:0}
C.eS0.prototype={
$0(){var w=this.a
w.p4=null
w.b36()},
$S:0}
C.eS2.prototype={
$0(){var w=this.a
return w.m(new C.eS_(w,this.b))},
$S:0}
C.eS_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eS3.prototype={
$0(){var w=this.a
return w.m(w.gcp_())},
$S:0}
C.eRU.prototype={
$0(){var w=this.a
return w.m(new C.eRT(w))},
$S:0}
C.eRT.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eRV.prototype={
$0(){var w=this.a
return w.m(new C.eRS(w))},
$S:0}
C.eRS.prototype={
$0(){var w=this.a
w.aB=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eRW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d7_[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aQ(9,9)
m.push(v.axw(new B.nd(new B.bk(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dn(new B.z0(o,o,v.aX3(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AH),B.fO(u,A.A,140,o,A.ce,A.bU,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eRR(v,s),3,n))}return B.bV(A.bB,m,A.bs,10,8)},
$S:175}
C.eRR.prototype={
$0(){var w=this.a
return w.m(new C.eRQ(w,this.b))},
$S:0}
C.eRQ.prototype={
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
C.eRy.prototype={
$1(d){return this.a.R8=d},
$S:7}
C.eRz.prototype={
$1(d){return this.a.RG=d},
$S:7}
C.eRA.prototype={
$1(d){return this.a.rx=d},
$S:7}
C.eRB.prototype={
$1(d){return this.a.xr=d},
$S:7}
C.eRC.prototype={
$1(d){return this.a.aE=d},
$S:7}
C.eRD.prototype={
$1(d){return this.a.Z=d},
$S:7}
C.eRE.prototype={
$1(d){return this.a.b8=d},
$S:7}
C.eRF.prototype={
$1(d){return this.a.aB=d},
$S:7}
C.eRG.prototype={
$1(d){return this.a.aJ=d},
$S:7}
C.eQU.prototype={
$1(d){return this.a.ry=d},
$S:7}
C.eQV.prototype={
$1(d){return this.a.to=d},
$S:7}
C.eQW.prototype={
$1(d){return this.a.x1=d},
$S:7}
C.eQX.prototype={
$1(d){return this.a.x2=d},
$S:7}
C.eQY.prototype={
$0(){var w=this.a
return w.m(new C.eQT(w))},
$S:0}
C.eQT.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eQZ.prototype={
$1(d){return this.a.b0=d},
$S:196}
C.eR_.prototype={
$1(d){return this.a.b_=d},
$S:7}
C.eRs.prototype={
$1(d){return this.a.y2=d},
$S:7}
C.eRt.prototype={
$1(d){return this.a.bi=d},
$S:7}
C.eRu.prototype={
$1(d){return this.a.az=d},
$S:7}
C.eRv.prototype={
$1(d){return this.a.bb=d},
$S:196}
C.eRw.prototype={
$1(d){return this.a.bJ=d},
$S:7}
C.eR3.prototype={
$1(d){return this.a.aH=d},
$S:7}
C.eR4.prototype={
$1(d){return this.a.bh=d},
$S:7}
C.eR5.prototype={
$1(d){return this.a.bB=d},
$S:7}
C.eR6.prototype={
$1(d){return this.a.c7=d},
$S:7}
C.eR7.prototype={
$0(){var w=this.a
return w.m(new C.eR2(w))},
$S:0}
C.eR2.prototype={
$0(){var w=this.a
return w.c7=A.k.E(w.c7+90+180,360)-180},
$S:0}
C.eR8.prototype={
$0(){var w=this.a
return w.m(new C.eR1(w))},
$S:0}
C.eR1.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eR9.prototype={
$0(){var w=this.a
return w.m(new C.eR0(w))},
$S:0}
C.eR0.prototype={
$0(){var w=this.a
return w.cK=!w.cK},
$S:0}
C.eRX.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ic0(v,w.p4)},
$S:0}
C.eRP.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.boC:B.fO(v,A.A,w,w,A.ce,A.bU,!1,w,!1,w,w)
return C.fBK(d.length===0?"rounded":d,u,e)},
$S:131}
C.eRL.prototype={
$0(){var w=this.a
return w.m(new C.eRK(w))},
$S:0}
C.eRK.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eRM.prototype={
$0(){var w=this.b
return w.m(new C.eRJ(this.a,w))},
$S:0}
C.eRJ.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eRN.prototype={
$0(){var w=this.b
return w.m(new C.eRI(this.a,w))},
$S:0}
C.eRI.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eRO.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:7}
C.eS7.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eJ(n.cir(),n.r))
l.push(new C.IO(n.cvA(),!1,!1,t))
o=B.bS(0,B.bv(o,new B.eJ(new B.an(A.V,t,A.b2,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.V,t,A.aa,A.r,B.a([o,B.ao(t,B.aB(A.ch,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eS6(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a5),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:224}
C.eS6.prototype={
$1(d){var w=this.a
return w.m(new C.eS5(w,d,this.b,this.c))},
$S:21}
C.eS5.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eSg.prototype={
$0(){var w=this.a
return w.m(new C.eSf(w,this.b))},
$S:0}
C.eSf.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eRx.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).iW()},
$S:0}
C.eSO.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.w(B.a([w.aZL(),B.E(B.at(w.b1I(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.w(B.a([B.E(w.aQc(),1),w.aMp()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.w(B.a([s.aZL(),new B.D(A.hz,B.at(s.b1I(u),t,t,t),t),B.E(s.aQc(),1),s.aMp()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:641}
C.fz0.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eq(k,!1,j,A.aE,"",4280640491,i,l,m,"",h,C.bAa(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,A.O)},
$S:z+98}
C.fz_.prototype={
$3(d,e,f){var w=this,v=C.bAa(),u=w.b?A.H:A.cv,t=w.c?A.cE:A.bp
return C.eq(w.d,!1,f,A.aE,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cl,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cg1.prototype={
$1(d){return B.u(d)},
$S:17}
C.fGH.prototype={
$0(){return this.a},
$S:z+15}
C.fml.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.fmm.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fGJ.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fGM.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fGN.prototype={
$0(){return A.d.gH(D.wq)},
$S:z+33}
C.fGF.prototype={
$1(d){return d.a},
$S:z+16}
C.fGI.prototype={
$1(d){return d.a},
$S:z+16}
C.fEF.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fEG.prototype={
$1(d){return d.length!==0},
$S:3}
C.fEH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fz4.prototype={
$0(){return C.cD()},
$S:22}
C.fz7.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.eq(j,l,v,A.aE,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,"","",A.bp,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,"",j,A.bp,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,j,k,A.bp,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bp,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bp,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dg,!1,k,l,"",m,A.bp,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,null,0,"",k,A.bp,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,j,k,"",l,A.bp,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,k,0,l,m,A.bp,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,k,l,m,"",n,A.bp,A.a7)},
$S:z+35}
C.fz6.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eq(A.bh,!1,4279310375,A.aE,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f6,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fz5.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.eq(A.bh,!1,4279310375,A.aE,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.lD,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qn,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fz3.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fBv.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hkA.c4(0,A.a.i(s.w).toLowerCase(),new C.fBt(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fBu(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bw(t.e,new B.bod(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fBt.prototype={
$0(){return F.aNC(this.a.w)},
$S:183}
C.fBu.prototype={
$0(){var w=this.a.r,v=B.aM(w.toLowerCase()," ","_")
return F.bz4("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:183}
C.feL.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.feM.prototype={
$1(d){return d.a},
$S:z+18}
C.feN.prototype={
$1(d){return d.b},
$S:z+19}
C.fPO.prototype={
$1(d){return D.hdZ},
$S:z+41}
C.eZ1.prototype={
$0(){return this.a.x=C.hPi(this.b,this.c.b)},
$S:0}
C.eZ2.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eZ_.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:446}
C.eZ0.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:446}
C.eYZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.av,null,new C.eYU(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jV,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.eYV(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hqv(o,m.cJk(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eYW(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eYU.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eYY(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b6U,A.f,p,p,D.b1R,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cq:D.Cv,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fBK(v,i.b3K(h),u),p)))}t=B.kG(1,m,4,10,10,p,A.dO,!0)
if(!l)return B.bm(!0,new B.D(Aa.y7,t,p),!0,!1,A.ae,!0,!0)
s=new C.eYX(i,d)
m=B.aH(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ha[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,m.a.b*0.85),B.cc(B.w(B.a([D.fvj,A.R,t,A.dW,D.eT3,A.au,D.fGd,A.R,B.kG(1.15,l,3,10,10,p,A.dO,!0)],n),A.E,p,A.e,A.j,0,A.p),A.r,p,A.y,p,Aa.y7,p,p,A.af),p),!0,!1,A.ae,!0,!0)},
$S:27}
C.eYY.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.dr
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hB,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eYT(this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:1685}
C.eYT.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.eYX.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bz
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bv(w,d.length===0?B.p(v,D.aoq,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.Nx(u.FK(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.w(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYS(this.b,d),v,v,v,v,v,v,!1,A.a5)},
$S:131}
C.eYS.prototype={
$0(){B.a3(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eYV.prototype={
$0(){var w=this.a
return w.w=w.w.FK("")},
$S:0}
C.eYW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYI.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eYJ.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eYL.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eYM.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eYN.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eYO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYK(w,d))},
$S:2}
C.eYK.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eYP.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.u(this.b)},
$S:0}
C.eZf.prototype={
$0(){return this.a.f.fN()},
$S:0}
C.eZg.prototype={
$0(){var w=this.a
return w.m(new C.eZe(w))},
$S:0}
C.eZe.prototype={
$0(){return this.a.e=null},
$S:0}
C.eZh.prototype={
$0(){var w=this.a
return w.m(new C.eZd(w))},
$S:0}
C.eZd.prototype={
$0(){return this.a.x=null},
$S:0}
C.eZj.prototype={
$1(d){var w=this.a
return w.m(new C.eZc(w,d))},
$S:34}
C.eZc.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eZk.prototype={
$1(d){var w=this.a
return w.m(new C.eZb(w,d))},
$S:34}
C.eZb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eZl.prototype={
$0(){var w=this.a
return w.m(new C.eZa(w))},
$S:0}
C.eZa.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eZm.prototype={
$1(d){var w=this.a
return w.m(new C.eZ9(w,d))},
$S:34}
C.eZ9.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZn.prototype={
$1(d){var w=this.a
return w.m(new C.eZ8(w,d))},
$S:34}
C.eZ8.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZo.prototype={
$0(){var w=this.a
return w.m(new C.eZ7(w))},
$S:0}
C.eZ7.prototype={
$0(){var w=this.a
return w.w=w.w.FK("")},
$S:0}
C.eZp.prototype={
$0(){var w=this.a
return w.m(new C.eZ6(w,this.b))},
$S:0}
C.eZ6.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eZq.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bOE(D.a3t[v]),null))
return B.bV(A.bB,t,A.bs,8,8)},
$S:175}
C.eZi.prototype={
$1(d){var w=this.a
return w.m(new C.eZ5(w,d))},
$S:8}
C.eZ5.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eYQ.prototype={
$0(){var w=this.a
return w.m(new C.eYR(w,this.b,this.c))},
$S:0}
C.eYR.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.eZ4.prototype={
$0(){var w=this.a
return w.m(new C.eZ3(w,this.b))},
$S:0}
C.eZ3.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fPN.prototype={
$1(d){return new C.a0m(this.a,this.b,null)},
$S:z+42}
C.eYB.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eYC.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eYD.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aH0?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eYE.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eYF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYA(w,d))},
$S:2}
C.eYA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eYG.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.u(this.b)},
$S:0}
C.eYH.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bw,w.length),A.aN))},
$S:0}
C.flB.prototype={
$1(d){return d.a===this.a},
$S:217}
C.efZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaxx(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cTq:D.d9h
t=D.xM.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xM.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bS(0,B.b3(q,q,q,new C.bhz(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bQ_(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.be_.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.x(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.V,q,A.aa,A.r,B.a([n,o,B.at(B.w(B.a([B.W(p.a.c?A.ea:A.m0,D.xM,q,q,q,20),A.au,B.eN(A.A,B.nT(A.jB,D.foK,new C.efY()),A.f,A.e_)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.p(q,D.fli,A.f,q,q,new B.o(D.xM,q,q,B.m(6),q,q,A.n),q,q,q,q,M.ajp,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:92}
C.efY.prototype={
$1(d){return D.bZh.aA(0,d)},
$S:67}
C.fGO.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fGP.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:217}
C.fGQ.prototype={
$2(d,e){return A.o.aK(e.a.length,d.a.length)},
$S:1686}
C.fGR.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aM(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aM(u,p,q.toUpperCase())}return u},
$S:14}
C.fGK.prototype={
$1(d){return d.a},
$S:z+18}
C.fGL.prototype={
$1(d){return d.b},
$S:z+19}
C.fP0.prototype={
$1(d){return new C.ZK(this.a,this.b,null)},
$S:z+44}
C.dkI.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dkJ.prototype={
$1(d){return d.a===this.a.gaiy()},
$S:z+10}
C.dkK.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dkN.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dkO.prototype={
$0(){var w=this.a
return w.m(new C.dkM(w,this.b))},
$S:0}
C.dkM.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dkP.prototype={
$1(d){var w=this.a
return w.m(new C.dkL(w,d))},
$S:8}
C.dkL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.efX.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.ea(w,this.a)
return B.d0(w,0,B.dB(e,"count",x.S),B.S(w).c).dB(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.fbd.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eq(A.bh,!1,4279310375,A.aE,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f6,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fbf.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eq(A.L,!1,this.b.d,A.aE,"",4280640491,i,A.bp,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mK,D.cQ,g,e,f)},
$S:z+46}
C.fbe.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wD(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mK,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fbc.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fAb.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fAc.prototype={
$0(){return A.d.gH(D.Hj)},
$S:z+49}
C.fAd.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fdc.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fGg.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fw,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGh.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fw,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fw,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGi.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jU,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jU,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fw,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGt.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jU,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jU,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jT,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGy.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jT,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fw,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGz.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jU,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fw,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGA.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cSn[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f6,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aE,4279310375,A.bh,null,D.bg,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fw,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGB.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mq,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f6,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aE,4279310375,A.bh,null,D.D4,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fw,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGC.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jT,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fw,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGD.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fw,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jU,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGE.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jU,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGj.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jT,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jT,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fw,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fGk.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jT,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jT,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jT,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eP,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fGl.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jU,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jT,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fw,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fGm.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jT,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jT,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fw,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fGn.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.ld,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.ld,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.ld,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.ld,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.ld,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fw,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGo.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jU,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eP,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fw,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGp.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mq,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f6,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aE,4279310375,A.bh,null,D.D4,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ks
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fw,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGq.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f6,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aE,s,A.bh,null,D.fw,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fw,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGr.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fw,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fGs.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eI("design_"+(""+1000*u+"_"+t),D.f6,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aE,r,A.bh,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ks
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.d7,A.co,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eI("design_"+(""+1000*t+"_"+s),D.f6,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aE,r,A.bh,null,D.bg,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jT,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGu.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jU,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jU,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jU,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jU,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bg,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eP,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGv.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bg,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eP,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eP,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eP,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jU,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGw.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eP,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fw,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f6,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aE,4279310375,A.bh,null,D.eP,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ks
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fGx.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jU,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jU,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fy1.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fy2.prototype={
$0(){return A.d.gH($.bDM())},
$S:z+52}
C.fl9.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fl8.prototype={
$1(d){return C.hWA(d,this.a,this.b)},
$S:z+53}
C.fGX.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vR(1.0375,1.01875,1)
return new B.fR(v,u,new C.aSD(B.hMj(A.vh,C.hWD(w.c,w.d,v,u),t)))},
$S:448}
C.dVk.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dVj.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.c_(A.Kn,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jx(new B.an(A.V,w,A.b2,A.r,B.a([t,new B.eJ(B.b3(w,w,w,new C.beu(u.a,r,q,r),A.az),w),B.at(new B.jI(r,new C.dVi(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:437}
C.dVi.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.i_(B.fO(i,A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mu(e*0.8)),A.a4),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqW(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dd(B.dU(B.w(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKY(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.x(0,(1-o)*m*0.03)),o))
return B.dd(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.w(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eXP.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:67}
C.cay.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bz
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hL.j(0.4),A.J,14)],x.V):v
w=B.db(v,B.bv(B.m(12),d,A.aq),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eL,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.w(B.a([w,A.fH,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a5)},
$S:1688}
C.caz.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FK(""))},
$S:0}
C.caA.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.Nx(v.FK(u),!0,!1,null),!0,null),d.b,new C.caB(w,this.c,d),v.a===u)},
$S:z+54}
C.caB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hqv(u.b,t.c.FK(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fNq.prototype={
$1(d){return new C.Zh(this.a,null)},
$S:z+55}
C.d9Z.prototype={
$0(){var w=this.a
w.d=w.gvH().bbN("data:"+this.b+";base64,"+A.cJ.gct().aL(this.c));++w.r},
$S:0}
C.da3.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.da4.prototype={
$0(){var w=this.a
return w.m(new C.da2(w))},
$S:0}
C.da2.prototype={
$0(){return this.a.r++},
$S:0}
C.da5.prototype={
$1(d){var w=this.a
return w.m(new C.da1(w,d))},
$S:2}
C.da1.prototype={
$0(){var w=this.a
return w.d=w.gvH().aDS(this.b)},
$S:0}
C.da6.prototype={
$0(){var w=this.a
return w.m(new C.da0(w))},
$S:0}
C.da0.prototype={
$0(){var w=this.a
return w.d=w.gvH().bbN("")},
$S:0}
C.da7.prototype={
$1(d){var w=this.a
return w.m(new C.da_(w,d))},
$S:2}
C.da_.prototype={
$0(){var w=this.a
return w.d=w.gvH().bbU(this.b)},
$S:0}
C.da8.prototype={
$0(){var w=this.a
w=w.gvH().bbU(w.gaxy().a.a)
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.fNp.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fNo(w),null)},
$S:19}
C.fNo.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.85),B.cc(B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fDf,A.au,D.fDv,A.aA,new C.b__(v.a,new C.fNn(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.r,w,A.y,w,w,w,w,A.af),w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b2p,w,w,w,w,A.MO,w,w,w)},
$S:157}
C.fNn.prototype={
$1(d){this.b.$1(new C.fNm(this.a,d))
B.a3(this.c,!1).N(d)},
$S:z+56}
C.fNm.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fPM.prototype={
$1(d){return D.h8p},
$S:z+57}
C.dgL.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dgM.prototype={
$0(){var w=this.a.c
w.toString
B.a3(w,!1).N(this.b)
return null},
$S:0}
C.dgN.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a3(w,!1).N(v)}},
$S:0}
C.fDD.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:67}
C.d9G.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.X().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cR(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cR(w,q+p,w,q+p*1.2))
u.F(new B.D5(B.bU(new B.x(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aS(u,v.d)
s.aS(u,v.e)
p=B.N()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.af(new B.x(w,o),2.2,p)},
$S:456}
C.fDH.prototype={
$2(d,e){return A.k.aK(d.c,e.c)},
$S:z+58}
C.fw3.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fw4.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.w(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.flA,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GR,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fw1(d),B.bn(A.c_,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.er(A.oc,D.Uq,new C.fw2(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cj,w,w,Q.xe,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:27}
C.fw1.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fw2.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.cg_.prototype={
$1(d){return d.hH()},
$S:z+59}
C.cg0.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cfZ.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a7.gdN(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hSo(b2.h(0,"type"))
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
n=A.aze[A.o.D(b4,0,8)]
m=D.cVk[A.o.D(w,0,1)]
l=C.hW1(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.avR[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hYS(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.O(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.O(f)
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
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.hlI(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
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
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.eq(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cfP.prototype={
$1(d){return d.hH()},
$S:z+62}
C.cfQ.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cfM.prototype={
$1(d){return B.u(d)},
$S:17}
C.cfN.prototype={
$1(d){return B.u(d)},
$S:17}
C.cfO.prototype={
$1(d){return C.hck(B.a2(d,x.N,x.z))},
$S:z+64}
C.cgg.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cgh.prototype={
$0(){return A.d.gH(D.a37)},
$S:z+66}
C.cgb.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hH())},
$S:z+7}
C.cga.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.cg6.prototype={
$1(d){return new B.M(d,new C.cg7(),B.S(d).k("M<1,T>")).f9(0,new C.cg8())},
$S:z+69}
C.cg7.prototype={
$1(d){return d.f},
$S:z+70}
C.cg8.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:559}
C.cg9.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hI8(d)},
$S:z+71}
C.cgc.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cgd.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.cge.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fEf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fEb.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fEc.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fEd.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fEe.prototype={
$2(d,e){return d.b===D.f6&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cfV.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i6G(b2,b3),b5=B.a5(b4).k("bc<2>")
b5=B.cE(new B.bc(b4,b5),new C.cfU(),b5.k("J.E"),x.N)
w=B.de(b5,B.a5(b5).k("J.E"))
b1=b1.e
v=A.pT.av(0,A.k.D(b1,0,1))
u=new C.cfW()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cfX(a9,b7.d)
r=new C.cfY(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jH.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.x(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f6){a4=i.hH()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lD&&l.at==i.at?r.$1(i):new B.an(A.V,a8,A.b2,A.r,B.a([new B.kH(A.k.D(o,0,1),r.$1(l),a8),new B.kH(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iI(B.wk(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mK
p.push(s.$5(i.c,i.d,i.e,i.f,C.hnY(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.V,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:457}
C.cfU.prototype={
$1(d){return d.a},
$S:z+22}
C.cfW.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cfX.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cfY.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7J(v,C.b17(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dHT.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.df(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cg3.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cg4.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fH3.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:275}
C.fGa.prototype={
$1(d){return new C.adk(this.a,this.b,null)},
$S:z+78}
C.er1.prototype={
$0(){return this.a.Q_(this.b,C.ia0(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.er2.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Q_(this.b,C.ia2(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.er3.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Q_(this.b,C.ia1(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.er4.prototype={
$0(){Z.hnI()
B.a3(this.a,!1).N(null)},
$S:0}
C.cfT.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cfS.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nC),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.jL(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bU:A.dw
return B.fO(t,A.A,o,new C.cfR(),A.ce,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.cfR.prototype={
$3(d,e,f){return D.acp},
$S:201}
C.fEa.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.d0(r,0,B.dB(6,"count",x.S),B.S(r).c)
u=r.$ti.k("M<ak.E,cM>")
r=B.C(new B.M(r,new C.fE9(e.b,e.d),u),u.k("ak.E"))
return B.bv(s,B.c0(new B.an(A.V,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1695}
C.fE9.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b17(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fnH.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cL(r.b,new C.fnF(d))
w=B.aH(d,A.bW,x.w).w
v=B.m(22)
u=B.I(A.bz,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fT,28)],x.V)
s=x.p
return new B.d_(e,!1,B.at(B.aF(!1,A.a2,!0,q,B.p(q,B.w(B.a([B.B(B.a([B.E(B.w(B.a([B.d(r.c,q,q,q,q,q,q,A.jY,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bM(!1,A.A4,q,q,!0,q,q,new C.fnG(p,d),q,B.fx(q,q,A.bi,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Br,q,new B.b7(B.m(12),A.X),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fR,A.FO,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:255}
C.fnF.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a3(w,!0).pC())B.a3(w,!0).eG()},
$S:0}
C.fnG.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a3(this.b,!0).eG()},
$S:0}
C.f5m.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dd(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dU(u.b,new B.x((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dU(u.b,new B.x(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dU(u.b,new B.x(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dU(u.b,new B.x(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fz(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kc(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fz(r*1.2)
s.kc(r*0.5)
return B.fo(A.A,B.dd(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fz(-r*1.4)
return B.fo(A.a8,B.dd(u.b,r),t,s,!0)
case 12:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dd(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aJs(r,t))],x.p),t)
case 15:return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aJs(1-r,t))],x.p),t)
case 16:v=D.b5R.av(0,r)
return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dd(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dk()
s.mK(r*6.28)
s.jT(r,r,r,1)
return B.fo(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.V,t,A.b2,A.r,B.a([u.c,B.dd(u.b,r)],x.p),t),t)}},
$S:60}
C.dT6.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dT5.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dT4.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hnY(v,w,e)},
$S:60}
C.cfL.prototype={
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
s=B.S(v).k("M<1,cM>")
q=B.C(new B.M(v,new C.cfK(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.V,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:457}
C.cfK.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7J(m,new C.V4(d,C.b17(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d6V.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d6U(w))},
$S:11}
C.d6U.prototype={
$0(){return this.a.d++},
$S:0}
C.efF.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aOe.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i6p(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fz(Math.sin(t)*0.32)
s.kc(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jT(w,w,w,1)
return B.fo(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.x(s*14,w*10))
default:s=Math.sin(t)
return B.dd(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.eVs.prototype={
$1(d){var w
$.X()
w=B.N()
w.b=A.ag
w.c=d
w.e=A.hr
return w},
$S:1696}
C.fBL.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdG()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqP(u,t,r),A.az))
w.push(B.nx(s.d,A.aq,new C.bf0(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpP(u,q,t,r),A.az))
return B.at(new B.a7(v.a,v.b,new B.an(A.V,r,A.b2,A.r,w,r),r),r,r,r)},
$S:262}
C.fqI.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:276}
C.exf.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CS(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gal(s)){u=null
w=1
break}u=r.dM(s,new C.exd(),new C.exe(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.exd.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:195}
C.exe.prototype={
$0(){return J.fr(this.a)},
$S:1699}
C.etD.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etE.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etF.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.evd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev1.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ev2.prototype={
$1(d){return d.hH()},
$S:z+81}
C.et0.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ewl.prototype={
$0(){this.a.tD()},
$S:0}
C.exb.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.og()
w.Kf()},
$S:0}
C.evb.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.og()
w.Kf()},
$S:0}
C.ewZ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ex_.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ex0.prototype={
$1(d){return d.a},
$S:z+22}
C.ex1.prototype={
$0(){var w=this.a.r
return new B.aq(new B.ba(w,A.b4,A.aN),$.ax())},
$S:266}
C.ex2.prototype={
$0(){return B.jU(!0,null,!0,!0,null,null,!1)},
$S:558}
C.esp.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exc.prototype={
$0(){},
$S:0}
C.euk.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xA()
w.Kf()},
$S:0}
C.esn.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xA()},
$S:0}
C.eso.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xA()},
$S:0}
C.euH.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.euI.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xA()
w.Kf()
w.z="Home"},
$S:0}
C.euJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euj.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.Up,w,w,!0,w,w,new C.eui(d),w,w)],x.p),w,w,w,D.fF4,w,w,w,w,D.fm1,w)},
$S:18}
C.eui.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.eug.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.Up,w,w,!0,w,w,new C.euf(d),w,w)],x.p),w,w,w,D.fq5,w,w,w,w,D.fnP,w)},
$S:18}
C.euf.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euh.prototype={
$0(){},
$S:0}
C.etz.prototype={
$1(d){return this.a.b04(C.bBM(d))},
$S:z+7}
C.etA.prototype={
$1(d){return this.a.af8(C.bBM(d))},
$S:z+7}
C.euq.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fF8,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.PE(A.w3,D.axa,"HATI YA KUHOWA","Hati ya mahari",new C.eul(d),w),A.R,new C.PE(A.hb,D.d71,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eum(d),w),A.R,new C.PE(A.i8,D.cTw,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eun(d),w),A.R,new C.PE(A.hR,D.cRH,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.euo(d),w)],v)
if(this.a.gabE())A.d.v(u,B.a([A.R,new C.PE(A.jb,D.cCG,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eup(d),w)],v))
return B.bm(!0,B.cc(B.w(u,A.ai,w,A.e,A.P,0,A.p),A.r,w,A.y,w,E.ya,w,w,A.af),!0,!1,A.ae,!0,!0)},
$S:27}
C.eul.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eum.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eun.prototype={
$0(){B.a3(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.euo.prototype={
$0(){B.a3(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eup.prototype={
$0(){B.a3(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eur.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xA()},
$S:0}
C.esr.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ess.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ne(r,v.f+1,q);++v.f
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
C.euC.prototype={
$1(d){return d.b===D.lD},
$S:z+4}
C.euD.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.euA(w,this.a,v),null)},
$S:19}
C.euA.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.euB(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aQ:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bz:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.w(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.W(A.cw,j,q,q,q,q),q,q,q,new C.euw(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cv[w]
v.a=null
t=v.a=u.a
a1.push(new C.bht(t,u.b,p.a===t,i,k,new C.eux(v,m),q))}a1=B.bV(A.bB,a1,A.bs,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cq[w]
s.a=null
t=s.a=r.a
u.push(new C.bhs(t,r.b,p.b===t,k,j,new C.euy(s,m),q))}return B.bm(!0,B.p(q,B.cc(B.w(B.a([d,A.aO,a0,A.R,a1,A.bv,v,A.R,B.bV(A.bB,u,A.bs,12,12),A.bv,new B.a7(1/0,48,B.er(D.bVg,D.fHz,new C.euz(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b7(B.m(16),A.X),D.b_U,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.r,q,A.y,q,q,q,q,A.af),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tT,D.bwl,q,q,q),!0,!1,A.ae,!0,!0)},
$S:86}
C.euB.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.euu(w.a,d,e))
w.b.d4(new C.euv(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.euu.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.euv.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.euw.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.eux.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.euy.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.euz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.GH(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.eut(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eut.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.euF.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.euG.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.euE(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ne(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xA()},
$S:0}
C.euE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.euX.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euY.prototype={
$1(d){return d.w},
$S:z+82}
C.euZ.prototype={
$2(d,e){return d>e?d:e},
$S:78}
C.ev_.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aQ:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bz:A.aL,A.q,1),n=B.aH(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.w(B.a([B.B(B.a([B.p(v,D.bOV,A.f,v,v,D.b1h,v,38,v,v,v,v,v,38),A.bc,B.E(B.w(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.W(A.cw,s,v,v,v,v),v,v,v,new C.euU(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dr(1,A.cn,B.hM(v,new C.euV(m,k,w.c,s,w.d,t,r),k.length,A.fu,v,A.af,new C.euW(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tT,A.Zo,v,v,v),!0,!1,A.ae,!0,!0)},
$S:27}
C.euU.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euW.prototype={
$2(d,e){return A.ac},
$S:36}
C.euV.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.bS6,q,q,q,new C.euS(s,w,p),q,q,q,q,"Add an icon",q)
return B.w(B.a([new B.D(D.byB,n,q),B.aL(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.X),q,A.eO,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.b_z),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.euT(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.an,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:557}
C.euS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ic9(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geF()?p.a:q.a.length
n=p.geF()?p.b:q.a.length
m=A.a.oN(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bw,o+s.length),A.aN))
l.ajb(k,m)
l.po()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euT.prototype={
$1(d){var w=this.a
w.ajb(this.b.a,d)
w.po()},
$S:2}
C.ev0.prototype={
$0(){},
$S:0}
C.eus.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.esI.prototype={
$0(){},
$S:0}
C.esJ.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hph(this.b,w,!0)
w=this.a
w.r=null
w.xA()},
$S:0}
C.esK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.esL.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.esH(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ne(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xA()},
$S:0}
C.esH.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ev6.prototype={
$1(d){return B.oU(new C.ev5(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.ev5.prototype={
$2(d,e){var w=null,v=x.p
return B.w(B.a([new B.D(E.aj5,B.w(B.a([D.fCD,A.al,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.iw(!0,w,e,A.y,D.eZo,new C.ev4(this.a,this.b),20,A.tV,w,A.af,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:458}
C.ev4.prototype={
$2(d,e){var w=null,v=D.Hj[e],u=C.hI3(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fF,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.eT_,A.f,w,w,new B.o(A.dL.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.ni,w,w,w)],m))
return B.aF(!1,A.a2,!0,w,B.aK(!1,t,!0,B.p(w,B.w(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b0,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ev3(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:80}
C.ev3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cg2(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a3(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev7.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xA()},
$S:0}
C.erm.prototype={
$0(){var w,v=this.a,u=v.gqt(),t=C.rz(4294967295,null,0,0,null,C.cD(),D.mJ,"","","",D.dg),s=this.b
C.cgf(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.D3){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.esG.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hck(q));++v.f},
$S:0}
C.esE.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.evf.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.esA.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.esz(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.esz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eve.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.T(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.esq.prototype={
$0(){var w=this.a.r
return new B.aq(new B.ba(w,A.b4,A.aN),$.ax())},
$S:266}
C.et1.prototype={
$0(){return B.jU(!0,null,!0,!0,null,null,!1)},
$S:558}
C.ewX.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ewY.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.atx(w).fN()
v=u.WI(w)
v.stl(B.hh(A.bw,v.a.a.length))},
$S:9}
C.ewm.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.XH(v)
if(u!=null&&u.b===D.cQ)w.WI(u).saU(0,u.r)}else w.w=null},
$S:0}
C.ern.prototype={
$0(){var w=C.cD(),v=this.a,u=C.eq(A.bh,!1,v.gqt().e.l(),A.aE,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cQ,0.7,0.15,0.2)
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.erk.prototype={
$0(){var w=C.cD(),v=this.a,u=C.eq(A.bh,!1,4279310375,A.aE,"",v.gqt().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqt().c.l(),2,"",0,0,"",D.cl,D.f6,0.25,0.3,0.3)
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.era.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aE,"",4280640491,24,A.bp,A.a7,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,0.6,0.2,0.18),v=this.a
A.d.M(v.gdv().z,w)
v.r=w.a},
$S:0}
C.er7.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c1f],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajO().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bMB,r,r,r,r,new C.er6(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cs(q,r,r,r,r,A.af,!0),!0,!1,A.ae,!0,!0)},
$S:27}
C.er6.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.er8.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.S.ao(u.ag(),null),s=C.eq(A.bh,!1,4279310375,A.aE,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cl,D.a5E,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdv().z,s)
t.r=s.a},
$S:0}
C.esC.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.esD.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdv().z,new C.esB(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.esB.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.erP.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f6){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.erQ(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.erQ.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.erU.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.erV(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdv()
if(t!=null)v.$1(t)}},
$S:0}
C.erV.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.erS.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.erT(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.erT.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f5(w,new C.erR()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.erR.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.erO.prototype={
$0(){return C.cgf(this.b,this.c,this.a.gqt())},
$S:0}
C.euR.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.ex5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ex6.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ex7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ex8.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bf(s,new C.ex4(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSo()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hH()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xA()
t.Kf()}},
$S:0}
C.ex4.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ewC.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abI(),s=w.b,r=u.abJ(A.fd,A.kd,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.bv,B.p(v,B.B(B.a([B.E(u.aV9(w.c,A.ak),1),new B.D(A.fv,B.p(v,D.bMH,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a4),v,34,v,v,v,v,v,34),v),B.E(u.aV9(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bv,u.aVc(A.fd,d,D.bIS,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bY4(A.aR,d,A.ua,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aVa(d,"Not now"))
return new C.JW(B.w(p,A.ai,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.ewB.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JW(B.w(B.a([v.abI(),A.N,v.abJ(A.aR,D.bIx,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.42),B.hM(w,new C.ewz(v,u,d),u.length,w,w,A.af,new C.ewA(),!0),w),A.aA,v.aVa(d,"Cancel")],x.p),A.ai,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.ewA.prototype={
$2(d,e){return A.R},
$S:36}
C.ewz.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a2,!0,w,B.aK(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anW,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bZc,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.w(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.nz,w,w,w),A.cO,B.d("Updated "+this.a.Q0(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.W(A.eC,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewy(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:80}
C.ewy.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.ewv.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abI()
t=t.abJ(A.aF,A.uj,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JW(B.w(B.a([s,A.N,t,A.bv,B.B(B.a([B.E(B.dQ(A.a8X,new C.ewt(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cj,u,new B.b7(B.m(14),A.X),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.as,B.E(B.bH(D.foo,new C.ewu(d),B.bn(A.fd,u,u,u,A.c,u,A.cj,u,new B.b7(B.m(14),A.X),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.ewt.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.ewu.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.ewx.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abI(),s=w.b,r=u.abJ(A.aV,A.ea,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auR("Names",""+w.c),1),A.ab,B.E(u.auR("Fields",""+w.d),1),A.ab,B.E(u.auR("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bi,v,v,v,A.c,v,A.xY,v,new B.b7(B.m(14),A.X),v,v,v)
return new C.JW(B.w(B.a([t,A.N,r,A.aO,p,A.bv,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nx,v,v,v),new C.eww(d),o),A.R,u.aVb(d,"Stay here",!1)],q),A.ai,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eww.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.etv.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.etu.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.ewn.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewW.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_u(A.d.dM(w.d,new C.ewU(v),new C.ewV(v)).hH(),w.f,null)},
$S:z+84}
C.ewU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewV.prototype={
$0(){return this.a},
$S:z+85}
C.erf.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fJ,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bOt,w,w,w,w,new C.erd(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fmp,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bPG,w,w,w,w,new C.ere(d),!1,w,w,w,w,w,D.fIN,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dd,w,w,w),w,w,w))
return B.bm(!0,B.w(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!0)},
$S:27}
C.erd.prototype={
$0(){B.a3(this.a,!1).N("scroll")
return null},
$S:0}
C.ere.prototype={
$0(){B.a3(this.a,!1).N("split")
return null},
$S:0}
C.erg.prototype={
$0(){var w=this.b,v=w.c,u=C.eq(A.bh,!1,4279310375,A.aE,v,4280640491,24,A.bp,A.a7,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cl,D.Se,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.erh.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eI(""+1000*l+"_"+k,D.Se,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aE,4279310375,A.bh,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lL(""+1000*p+"_"+o,r+n,"",D.qm,4294967295,null,D.dg,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.erl.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.ky(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eq(A.bh,!1,4279310375,A.aE,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lc,0.35,0.55,0.62)
A.d.M(u.gdv().z,w)
u.r=w.a},
$S:0}
C.erc.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2O(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eq(A.bh,!1,4279310375,A.aE,"marriage_sign_placed_"+A.a.eh(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lc,s,u,t)
A.d.M(p.gdv().z,q)
A.d.bs(p.gdv().z,new C.erb(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.i68(p)}},
$S:0}
C.erb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evc.prototype={
$0(){var w=this.a,v=this.b
w.b2O(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ex3.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ety.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.etx())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.etx.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.erY.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.erZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tD()},
$S:9}
C.er9.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aE,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,0.8,0.1,0.1),v=this.a
A.d.M(v.gdv().z,w)
v.r=w.a},
$S:0}
C.et_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eri.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdv().z,v)
w.r=v.a},
$S:0}
C.err.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ers.prototype={
$0(){var w=this.b.hH(),v=C.cD(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eq(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdv().z,f)
t.r=f.a},
$S:0}
C.ert.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bf(w,new C.erq(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.erq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.erE.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bf(w,new C.erp(v))
if(u>0){A.d.cG(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.erp.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.erH.prototype={
$0(){return this.a.as=A.bh},
$S:0}
C.erI.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.erJ.prototype={
$0(){return this.a.as=A.dQ},
$S:0}
C.erK.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.erL.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.erM.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.erN.prototype={
$1(d){return d.length!==0},
$S:3}
C.eru.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cD()
A.d.M(v,C.CX(w.gqt().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdv().z
v=C.cD()
A.d.M(u,C.iX(A.bh,!1,w.gqt().d.l(),A.aE,18,A.bp,A.H,0.07,v,"Document Header",0,D.dg,0.9,0.05,0.02))},
$S:0}
C.erv.prototype={
$0(){var w,v=this.a,u=v.gdv().z,t=C.cD()
A.d.M(u,C.CX(v.gqt().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdv().z
u=C.cD()
w=C.bCu()
A.d.M(t,C.iX(A.L,!1,v.gqt().e.l(),A.aE,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dg,0.9,0.05,0.92))},
$S:0}
C.erw.prototype={
$0(){A.d.M(this.a.gdv().z,C.CX(1727914055,0.12,C.cD(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.erx.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdv().z,C.CX(w,0.08,C.cD(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.ery.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cD()
A.d.M(v,C.CX(w.gqt().c.j(0.35).l(),0.12,u,D.D4,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdv().z,C.iX(A.bh,!1,4279310375,A.aE,18,A.bp,A.a7,0.15,C.cD(),"Important note",0,D.qn,0.5,0.38,0.52))},
$S:0}
C.erz.prototype={
$0(){var w=this.a
A.d.M(w.gdv().z,C.CX(4294507260,0.78,C.cD(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdv().z,C.iX(A.bh,!1,4279179050,A.aE,16,A.bp,A.a7,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCu()+"\n\nSubject:\n\nBody text\u2026",0,D.dg,0.76,0.12,0.14))},
$S:0}
C.erA.prototype={
$0(){var w=this.a
A.d.M(w.gdv().z,C.CX(4294897802,0.28,C.cD(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdv().z,C.iX(A.bh,!1,4285611794,A.aE,15,A.bp,A.a7,0.24,C.cD(),"Sticky note",0,D.aGQ,0.26,0.64,0.14))},
$S:0}
C.erB.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdv().z,C.CX(4293060848,0.04,C.cD(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdv().z,C.CX(w,0.04,C.cD(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.erC.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.iX(A.bh,!1,w,A.aE,18,A.bp,A.a7,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ig,0.42,0.06,0.18))
A.d.M(v.gdv().z,C.iX(A.bh,!1,w,A.aE,18,A.bp,A.a7,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uE,0.42,0.52,0.18))},
$S:0}
C.erD.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.CX(858088427,0.62,C.cD(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdv().z,C.CX(856004201,0.62,C.cD(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdv().z,C.iX(A.bh,!1,w,A.aE,20,A.bp,A.H,0.1,C.cD(),"Option A",0,D.dg,0.36,0.08,0.2))
A.d.M(v.gdv().z,C.iX(A.bh,!1,w,A.aE,20,A.bp,A.H,0.1,C.cD(),"Option B",0,D.dg,0.36,0.56,0.2))},
$S:0}
C.erF.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.CX(4294967295,0.36,C.cD(),D.bg,w,2,0.24,0.38,0.28))
A.d.M(v.gdv().z,C.iX(A.L,!1,w,A.aE,14,A.bp,A.a7,0.12,C.cD(),"[ QR CODE ]",0,D.dg,0.24,0.38,0.4))},
$S:0}
C.erG.prototype={
$0(){return C.cgf(this.b,D.Sf,this.a.gqt())},
$S:0}
C.esZ.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7m.q(0,d),t=this.a
return t.b7U(d,v===d,A.b_,this.c,new C.esY(t,u,d,w),u)},
$S:z+25}
C.esY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o7(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDg(r,new C.esX(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esX.prototype={
$0(){return this.a.d4(new C.esW(this.b,this.c))},
$S:0}
C.esW.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.erj.prototype={
$0(){var w,v=this.a,u=v.gqt(),t=C.rz(4294967295,null,0,0,null,C.cD(),D.mJ,"","","",D.dg),s=this.b
C.cgf(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.D3){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.es1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.icc(p,q.d,s,new C.es0(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tD(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.es0.prototype={
$1(d){return this.bkM(d)},
bkM(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.es_(t,d))
w=2
return B.b(t.tD(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.es_.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.es2.prototype={
$0(){return this.a.bIL()},
$S:0}
C.es3.prototype={
$0(){return this.a.aQp("Class Presentation",!0)},
$S:0}
C.es4.prototype={
$1(d){return this.a.bJH(d.b,this.b,d.a)},
$S:z+88}
C.esF.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.euQ.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eK,x.w).w.f.d),new B.dY(new C.euP(this.a,this.b),null),null)},
$S:58}
C.euP.prototype={
$2(d,e){return B.oU(new C.euO(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:624}
C.euO.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.I(u?A.bz:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.w(B.a([A.R,r,new B.D(A.aiw,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b0,B.bM(!1,A.A4,v,v,!0,v,v,new C.euM(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cs(B.a([p.aT8(u,!0,!0,new C.euN(p,w.d))],q),e,D.bu6,v,v,A.af,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kS,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.euM.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euN.prototype={
$0(){this.b.$1(new C.euK())
var w=this.a
if(w.c!=null)w.m(new C.euL())},
$S:0}
C.euK.prototype={
$0(){},
$S:0}
C.euL.prototype={
$0(){},
$S:0}
C.ewo.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.ewp.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,new C.az_(this.a,null),0.94+w*0.06,null,null),w)},
$S:459}
C.ewq.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.ewr.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,new C.bcR(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:459}
C.ews.prototype={
$0(){return A.d.c9(this.a.d,0,C.VX(this.b))},
$S:0}
C.ero.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dz.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pG.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.W(A1.a0d,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a4),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.u6(A.fB,B.p(p,B.w(B.a([t,A.aA,q,A.al,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eB,p,p,1/0),14,!1),A.aq)},
$S:298}
C.est.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.esu.prototype={
$1(d){return d.length!==0},
$S:3}
C.esv.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jN
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0M:A.BN}return w},
$S:556}
C.esy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dz.av(0,A.k.E(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.mV.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.W(C.ky(v.w)?A.w3:A.qa,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Q0(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Q0(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Q0(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.Q0(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Q0(v.f)
r=k.bJF(n,A.d.gH(r),t)
return B.p(l,B.bv(j,new B.a7U(B.aF(!1,A.a2,!0,l,B.aK(!1,l,!0,B.p(l,B.dL(!1,A.ML,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aI(l,l,l,l,B.W(A.o6,t?A.aB:A.bK,l,l,l,l),l,l,l,new C.esw(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.esx(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:92}
C.esx.prototype={
$0(){return this.a.af8(this.b)},
$S:0}
C.esw.prototype={
$0(){return this.a.AV(this.b,this.c)},
$S:0}
C.etZ.prototype={
$0(){var w=this.a
w.b6u()
w.m(new C.etY())},
$S:0}
C.etY.prototype={
$0(){},
$S:0}
C.eu_.prototype={
$1(d){return this.a.ajb(this.b.a,d)},
$S:2}
C.eu0.prototype={
$0(){this.a.d4(new C.etX(this.b))},
$S:0}
C.etX.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.eu1.prototype={
$0(){this.a.d4(new C.etW(this.b))},
$S:0}
C.etW.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.eu2.prototype={
$0(){this.a.d4(new C.etV(this.b))},
$S:0}
C.etV.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aE:A.mO},
$S:0}
C.eu3.prototype={
$0(){this.a.d4(new C.etU(this.b))},
$S:0}
C.etU.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eu4.prototype={
$0(){var w=this.a
w.d4(new C.etT(w,this.b))},
$S:0}
C.etT.prototype={
$0(){var w=this.b
return w.as=this.a.c3S(w.as)},
$S:0}
C.eu5.prototype={
$0(){return this.a.d4(new C.etS(this.b))},
$S:0}
C.etS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eu6.prototype={
$0(){return this.a.d4(new C.etR(this.b))},
$S:0}
C.etR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etK.prototype={
$0(){return this.a.a2b(this.b.a)},
$S:0}
C.etL.prototype={
$0(){this.a.a_I()
return null},
$S:0}
C.etM.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bW,x.w).w.a.a<900)w.afr()
else w.m(new C.etJ(w))},
$S:0}
C.etJ.prototype={
$0(){return this.a.as=!0},
$S:0}
C.etN.prototype={
$0(){this.a.d4(new C.etI(this.b))},
$S:0}
C.etI.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.etO.prototype={
$0(){return this.a.d4(new C.etH(this.b))},
$S:0}
C.etH.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etP.prototype={
$0(){return this.a.d4(new C.etG(this.b))},
$S:0}
C.etG.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etQ.prototype={
$0(){return this.a.azS(null)},
$S:0}
C.esS.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.esT.prototype={
$0(){this.a.aae()
return null},
$S:0}
C.esV.prototype={
$1(d){return this.bkN(d)},
bkN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K6(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.av,null,new C.esN(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.esO(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.esP(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.esQ(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hqu(q,new C.Ew(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.esR(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agU(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:91}
C.esN.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.eeL],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bOC:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.esM(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dd,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.w(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!0)},
$S:27}
C.esM.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.esO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esP.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.esQ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.esR.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.esU.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zP(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zP(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zP(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agU(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ejP,q,v,u,B.zP(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:142}
C.ex9.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCr(w,v)}},
$S:0}
C.exa.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.eu9.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bZ6:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aQ:A.br
return new B.D(A.fu,B.aB(u,B.db(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eL,u,u,u,A.ls,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eu8(t,d),u,u,u,u,u,u,!1,A.a5),u)},
$S:133}
C.eu8.prototype={
$0(){var w=this.a
return w.m(new C.eu7(w,this.b))},
$S:0}
C.eu7.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eua.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3D:E.axg
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbNc():t.gbJ5()
return B.hp(B.aB(u,B.p(u,D.ano,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a4),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a5),u,s,u,u)},
$S:1707}
C.eub.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ibs(v,w.a.c)},
$S:0}
C.evy.prototype={
$0(){return this.b.vh(this.a.a)},
$S:0}
C.evz.prototype={
$0(){return this.a.vh(D.mJ)},
$S:0}
C.evA.prototype={
$0(){return this.a.vh(D.Ie)},
$S:0}
C.evL.prototype={
$0(){return this.a.vh(D.If)},
$S:0}
C.evW.prototype={
$0(){return this.a.vh(D.Id)},
$S:0}
C.ew6.prototype={
$0(){return this.a.qd("lab_report")},
$S:0}
C.ewd.prototype={
$0(){return this.a.qd("rubric")},
$S:0}
C.ewe.prototype={
$0(){return this.a.qd("minutes")},
$S:0}
C.ewf.prototype={
$0(){return this.a.qd("agenda")},
$S:0}
C.ewg.prototype={
$0(){return this.a.qd("timeline")},
$S:0}
C.ewh.prototype={
$0(){return this.a.qd(this.b.a)},
$S:0}
C.evB.prototype={
$0(){this.a.VR()
return null},
$S:0}
C.evC.prototype={
$0(){this.a.VL()
return null},
$S:0}
C.evD.prototype={
$0(){return this.a.qd("table")},
$S:0}
C.evE.prototype={
$0(){return this.a.qd("sticky")},
$S:0}
C.evF.prototype={
$0(){return this.a.qd("divider")},
$S:0}
C.evG.prototype={
$0(){return this.a.qd("header_bar")},
$S:0}
C.evH.prototype={
$0(){return this.a.p7(D.bg)},
$S:0}
C.evI.prototype={
$0(){return this.a.p7(D.eP)},
$S:0}
C.evJ.prototype={
$0(){return this.a.p7(D.jT)},
$S:0}
C.evK.prototype={
$0(){return this.a.p7(D.D4)},
$S:0}
C.evM.prototype={
$0(){return this.a.p7(D.jU)},
$S:0}
C.evN.prototype={
$0(){return this.a.p7(D.ld)},
$S:0}
C.evO.prototype={
$0(){return this.a.p7(D.fw)},
$S:0}
C.evP.prototype={
$0(){this.a.Hp()
return null},
$S:0}
C.evQ.prototype={
$0(){this.a.Nr()
return null},
$S:0}
C.evR.prototype={
$0(){return this.a.qd("quote")},
$S:0}
C.evS.prototype={
$0(){return this.a.a8o()},
$S:0}
C.evT.prototype={
$0(){this.a.a_O()
return null},
$S:0}
C.evU.prototype={
$0(){var w=this.a
return w.m(new C.evo(w))},
$S:0}
C.evo.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.evV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o7(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.evw(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evw.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.evX.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jZ()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a7n.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a4),s,26,s,s,s,s,s,26)],x.p)
if(D.a7n.q(0,q))u.push(B.ao(s,B.p(s,D.On,A.f,s,s,D.El,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fu,B.aB(s,B.hp(new B.an(A.V,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.evv(r,d),s,s,s,s,s,s,!1,A.a5),s)},
$S:z+89}
C.evv.prototype={
$0(){this.a.a8G(this.b)
return null},
$S:0}
C.evY.prototype={
$0(){this.a.a8F(this.b)
return null},
$S:0}
C.evZ.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hI4(d),p=this.a,o=B.m(8),n=p.gdv()
n=n==null?r:n.x
w=d.a
n=n===w?A.bi:A.aZ
v=p.gdv()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rz(4294967295,r,0,0,r,"preview_"+w,D.qm,"","","",D.dg)
C.hnl(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hoG(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anX,A.f,r,r,D.El,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.ip,B.aB(r,B.w(B.a([new B.an(A.V,r,A.aa,A.r,u,r),A.cO,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.evu(p,q,d),r,r,r,r,r,r,!1,A.a5),r)},
$S:z+90}
C.evu.prototype={
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
return B.b(s.o7(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d4(new C.evk(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evk.prototype={
$0(){return C.hnl(this.a,this.b.a)},
$S:0}
C.evx.prototype={
bkO(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7m.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o7(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkO(d,e)},
$S:z+91}
C.ewi.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("M<1,t>")
v=B.C(new B.M(d,new C.ewk(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cc(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.ewk.prototype={
$1(d){var w=this
return w.a.b7U(d,w.b===d,w.c,w.d,new C.ewj(w.e,d),!D.a7m.q(0,d))},
$S:z+25}
C.ewj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ew_.prototype={
$1(d){this.b.$2(d,new C.evt(this.a,d,this.c))
return null},
$S:z+26}
C.evt.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDg(u,new C.evj(v,this.c,w),w)},
$S:0}
C.evj.prototype={
$0(){return this.a.d4(new C.evh(this.b,this.c))},
$S:0}
C.evh.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ew0.prototype={
$1(d){this.b.$2(d,new C.evs(this.a,d))
return null},
$S:z+26}
C.evs.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fQA(u,new C.evi(v,w),w)},
$S:0}
C.evi.prototype={
$0(){var w=this.a
return w.d4(new C.evg(w,this.b))},
$S:0}
C.evg.prototype={
$0(){return this.a.gdv().r=this.b},
$S:0}
C.ew1.prototype={
$0(){var w=this.a
return w.m(new C.evr(w))},
$S:0}
C.evr.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ew2.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCr(w,v)}},
$S:0}
C.ew3.prototype={
$0(){this.a.Ib()
return null},
$S:0}
C.ew4.prototype={
$0(){return this.a.a8o()},
$S:0}
C.ew5.prototype={
$0(){var w=this.a,v=w.jZ()
if(v!=null&&v.b===D.cQ)w.d4(new C.evq(v))},
$S:0}
C.evq.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.ew7.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.ew8.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fk(v,!0)
return null},
$S:0}
C.ew9.prototype={
$0(){this.a.d4(new C.evp(this.b))},
$S:0}
C.evp.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.ewa.prototype={
$0(){this.a.d4(new C.evn(this.b))},
$S:0}
C.evn.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.ewb.prototype={
$0(){this.a.d4(new C.evm(this.b))},
$S:0}
C.evm.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aE:A.mO},
$S:0}
C.ewc.prototype={
$0(){this.a.d4(new C.evl(this.b))},
$S:0}
C.evl.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erX.prototype={
$1(d){return this.bkL(d)},
bkL(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o7(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d4(new C.erW(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:200}
C.erW.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ewF.prototype={
$0(){var w=this.a
return w.d4(new C.ewE(w,this.b))},
$S:0}
C.ewE.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ewG.prototype={
$0(){var w=this.a
return w.d4(new C.ewD(w,this.b))},
$S:0}
C.ewD.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.et4.prototype={
$0(){return this.a.d4(new C.et3(this.b))},
$S:0}
C.et3.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.et5.prototype={
$0(){return this.a.d4(new C.et2(this.b))},
$S:0}
C.et2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etC.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apC,new C.etB(),w),w.k("ak.E"))
return w},
$S:z+94}
C.etB.prototype={
$1(d){var w=null
return B.zP(B.d(d.b,w,w,w,w,w,w,A.md,w,w,w),48,d,x.fO)},
$S:z+95}
C.ewS.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ewR.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kl()?q:new C.ewP(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bi
else v=r.d?A.aZ:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cp:A.c
t=B.bS(0,C.hoG(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.V,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nw,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.ajq,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ewQ(p,e),q,q,q,q,q,q,!1,A.a5)},
$S:82}
C.ewQ.prototype={
$0(){var w=this.a
return w.m(new C.ewL(w,this.b))},
$S:0}
C.ewL.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kf()},
$S:0}
C.ewP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.ewM(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ewN(q,s))
q.aRS()}else if(r==="del"){q=t.a
q.m(new C.ewO(q,s))
q.aR0()}else if(r==="up")t.a.b30(s,s-1)
else if(r==="down")t.a.b30(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewM.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bQi,w,w,w,w,new C.ewH(d),!1,w,w,w,w,w,w,w,D.fnn,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bQb,w,w,w,w,new C.ewI(d),!1,w,w,w,w,w,w,w,A.wR,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bPs,w,w,w,w,new C.ewJ(d),!1,w,w,w,w,w,w,w,D.fvz,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bRw,w,w,w,w,new C.ewK(d),!1,w,w,w,w,w,w,w,D.fnc,w,w,w))
return B.bm(!0,B.w(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!0)},
$S:27}
C.ewH.prototype={
$0(){B.a3(this.a,!1).N("dup")
return null},
$S:0}
C.ewI.prototype={
$0(){B.a3(this.a,!1).N("del")
return null},
$S:0}
C.ewJ.prototype={
$0(){B.a3(this.a,!1).N("up")
return null},
$S:0}
C.ewK.prototype={
$0(){B.a3(this.a,!1).N("down")
return null},
$S:0}
C.ewN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ewO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ewT.prototype={
$0(){return this.a.a8o()},
$S:0}
C.esm.prototype={
$0(){var w=this.a
w.b6u()
w.azS(null)},
$S:0}
C.esl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
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
s=B.a([B.bv(s,B.c0(A.kM,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.esk(this.a,e.b,e.d,q),B.S(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.V,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:457}
C.esk.prototype={
$1(d){var w=this
return w.a.bF4(d,w.b,w.c,w.d)},
$S:z+23}
C.es9.prototype={
$0(){var w=this
if(w.b){w.a.Nz(w.c)
return}if(w.d){w.a.a8m(w.c)
return}if(w.e){w.a.agJ(w.c)
return}if(w.f)w.a.b72(w.c)},
$S:0}
C.esa.prototype={
$0(){this.a.Nz(this.b)
return null},
$S:0}
C.esb.prototype={
$0(){return this.a.a2b(this.b.a)},
$S:0}
C.esc.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.es8(u,d,w.c,w.d))
v.HQ()
v.og()
v.po()},
$S:21}
C.es8.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.esd.prototype={
$1(d){return this.a.ajb(this.b.a,d)},
$S:2}
C.esf.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h1W(w))u.a.Nz(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b72(v)},
$S:0}
C.ese.prototype={
$0(){return this.a.a2b(this.b.a)},
$S:0}
C.esg.prototype={
$1(d){var w=this,v=w.a
v.m(new C.es7(w.b,d,w.c,w.d))
v.HQ()
v.og()
v.po()},
$S:21}
C.es7.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.esh.prototype={
$1(d){var w=this.a
w.m(new C.es6(this.b,d))
w.HQ()
w.og()
w.po()},
$S:225}
C.es6.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.esi.prototype={
$0(){var w=this.a
w.m(new C.es5(this.b))
w.HQ()
w.og()
w.po()},
$S:0}
C.es5.prototype={
$0(){this.a.r=C.hoa()},
$S:0}
C.esj.prototype={
$0(){return this.a.a2b(this.b.a)},
$S:0}
C.eud.prototype={
$0(){var w=this.a
return w.m(new C.euc(w))},
$S:0}
C.euc.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eue.prototype={
$1(d){return this.a.cCT(this.b.a,d)},
$S:2}
C.eti.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:161}
C.etj.prototype={
$1(d){return this.a.$1(new C.eth(this.b,d))},
$S:7}
C.eth.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etk.prototype={
$1(d){return this.a.$1(new C.etg(this.b,d))},
$S:7}
C.etg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etl.prototype={
$1(d){return this.a.$1(new C.etf(this.b,d))},
$S:7}
C.etf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etm.prototype={
$1(d){return this.a.$1(new C.ete(this.b,d))},
$S:7}
C.ete.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.etn.prototype={
$1(d){return this.a.$1(new C.etd(this.b,d))},
$S:7}
C.etd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eto.prototype={
$1(d){return this.b.$1(new C.etc(this.a,this.c))},
$S:8}
C.etc.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.etp.prototype={
$1(d){return this.b.$1(new C.etb(this.a,this.c))},
$S:8}
C.etb.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.etq.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bi:A.cU
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a4),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eta(this.a,v,d),w,w,w,w,w,w,!1,A.a5)},
$S:454}
C.eta.prototype={
$0(){return this.a.$1(new C.et7(this.b,this.c))},
$S:0}
C.et7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.etr.prototype={
$1(d){return this.a.$1(new C.et9(this.b,d))},
$S:1708}
C.et9.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.ets.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a4),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.et8(this.a,this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:454}
C.et8.prototype={
$0(){return this.a.$1(new C.et6(this.b,this.c))},
$S:0}
C.et6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ett.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a3(w,!1).pC()}else w=!1
if(w){w=v.a.c
w.toString
B.a3(w,!1).eG()}v.a.asv()},
$S:0}
C.etw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dz.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.W(A.uj,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nh,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a2,!0,n,B.aK(!1,m,!0,B.eF(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:138}
C.er5.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dz.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a2,!0,p,B.aK(!1,o,!0,B.eF(B.w(B.a([B.ed(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a4),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.iZ,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.FJ,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:138}
C.eva.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aoM,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.an,w,w,w,w)
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.ev8(d),w,w),B.bH(A.qz,new C.ev9(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.ev8.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ev9.prototype={
$0(){var w=this.b.a.a
B.a3(this.a,!1).N(w)
return null},
$S:0}
C.d2z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dz.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dY.av(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gH(C.ky(j.a.c.w)?D.uv:N.no),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.ky(j.a.c.w)?D.uv:N.no).j(0.18+w*0.12),A.J,32+w*10),D.abU],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b3,0.9,A.x,k,0,B.a([A.d.gH(C.ky(j.a.c.w)?D.uv:N.no).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.ky(j.a.c.w)?D.uv:N.no).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.ky(j.a.c.w)?D.uv:N.no).j(0.08),A.K],p),k,k),A.a4),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ky(m)?D.uv:N.no
s=B.a([new B.ac(0,A.G,A.d.gH(C.ky(m)?D.uv:N.no).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.W(C.ky(j.a.c.w)?A.w3:A.qa,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.ky(j.a.c.w)?D.uv:N.no).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fH,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.ffm,A.L,k,k),A.au,B.d(j.gcxU(),k,k,k,k,k,k,D.fk_,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSo()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.ky(j.a.c.w)?D.uv:N.no).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JQ(A.yt,"Download PDF","pdf",A.d0,j.J7(0),!1,k))
p=j.a.c
if(!p.z||p.gSo()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.al,new C.JQ(A.kd,"Transfer to "+C.hoc(p==null?"":p),"transfer_hati",A.aV,j.J7(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J7(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.al,new C.JQ(D.bHW,"Rename presentation","rename",A.c8,n,!1,k),A.al,new C.JQ(A.al6,"Duplicate","duplicate",A.b5,j.J7(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JQ(A.eb,"Delete presentation","delete",A.aw,j.J7(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J7(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J7(n)
s.push(B.dU(B.dd(B.bM(!1,E.aS_,k,k,!0,k,k,new C.d2y(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bxh,k,k,k,k,k,A.kh,k,k)),n),new B.x(0,(1-p)*8)))
return B.ed(A.A,B.dd(B.aF(!1,A.a2,!0,k,B.p(k,B.bv(q,new B.an(A.V,k,A.aa,A.r,B.a([o,new B.D(D.bwq,B.w(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.VU,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d2y.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.d2V.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d2W.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d2w.prototype={
$1(d){var w=this.a
return w.m(new C.d2s(w))},
$S:23}
C.d2s.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d2x.prototype={
$1(d){var w=this.a
return w.m(new C.d2r(w))},
$S:64}
C.d2r.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d2v.prototype={
$0(){var w=this.a
return w.m(new C.d2t(w))},
$S:0}
C.d2t.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d2u.prototype={
$0(){var w=this.a.a.e
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.exQ.prototype={
$0(){return $.bkf=!$.bkf},
$S:0}
C.exG.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaV2())u.awn()},
$S:0}
C.exP.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.exH.prototype={
$0(){return this.a.y=!0},
$S:0}
C.exI.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.awn()},
$S:0}
C.exC.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.exD.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.exE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.exF.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.exN.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.r,w,null)},
$S:1709}
C.exO.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i0)return new B.d_(e,!1,d,null)
w=this.a
return w.cvQ(w.e,d,e)},
$S:460}
C.exJ.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fz((1-v.gp(0))*1.5708)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.exK.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kc((1-v.gp(0))*1.5708)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.exL.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fz(v.gp(0)*0.8)
w.kc(v.gp(0)*0.35)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.exM.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fz(-v.gp(0)*1.2)
return B.fo(A.a8,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.exR.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYX().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYX().x
t===$&&B.c()
return new C.b18(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IO(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:568}
C.exT.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bW,x.w).w.a.a*0.55)w.awn()
else w.ck9()},
$S:64}
C.exS.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fGU.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:344}
C.fH2.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.fH_(d),w,w),B.bM(!1,D.fCZ,w,w,!0,w,w,new C.fH0(d,this.b,v),w,w),B.bH(A.aSh,new C.fH1(d,v,this.c),w)],x.p),w,w,M.tz,new B.a7(320,w,t,w),w,w,w,w,D.fEs,w)},
$S:18}
C.fH_.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fH0.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
C.h2A(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fH1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aPW(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPm(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fGT.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cgi.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:650}
C.fGZ.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fdG.prototype={
$1(d){return C.h2y(C.VX(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fPQ.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.fPR.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,D.haY,0.94+w*0.06,null,null),w)},
$S:459}
C.fPS.prototype={
$1(d){var w=this
return new C.VZ(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.exm.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.exl.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.W_(u,this.b,w.gaOj(),v,null)},
$S:z+99}
C.exj.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exn.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exr.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exs.prototype={
$0(){var w=this.a
return w.m(new C.exq(w))},
$S:0}
C.exq.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ext.prototype={
$0(){var w=this.a
return w.m(new C.exp(w))},
$S:0}
C.exp.prototype={
$0(){return this.a.d="all"},
$S:0}
C.exu.prototype={
$1(d){return this.a.bJG(d,this.b)},
$S:z+100}
C.exh.prototype={
$0(){var w=this.a
return w.m(new C.exg(w,this.b))},
$S:0}
C.exg.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.exv.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.exw.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.exx.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exy.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fM(new B.fE(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.f1s)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.er_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eqZ())},
$S:0}
C.eqZ.prototype={
$0(){},
$S:0}
C.er0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fN()},
$S:9}
C.eqW.prototype={
$1(d){return this.a.m(new C.eqV())},
$S:2}
C.eqV.prototype={
$0(){},
$S:0}
C.eqX.prototype={
$1(d){return this.a.aZU()},
$S:2}
C.eqY.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q2(),$async$$0)
case 2:if(t.c!=null)t.m(new C.exA(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.exA.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fBd.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eJ(new B.jI(this.c,new C.fBc(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:212}
C.fBc.prototype={
$3(d,e,f){return new C.IO(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fBe.prototype={
$1(d){var w=null
return B.os(!1,B.at(new C.buL(this.a,this.b,w),w,w,w),w,x.z)},
$S:327}
C.fBi.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmB(),$async$$0)
case 3:w=4
return B.b(B.bN(A.nc,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmB(),$async$$0)
case 5:s=$.aV.aj$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q2))throw B.V("Could not draw the slide.")
u=r.m0(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fBj.prototype={
bli(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hu(A.h4),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hR([J.eV(A.dC.gaP(r))],"image/png"))
t.toString
s=Am.fUe(t)
w=4
return B.b(new B.q8(s,"load",!1,x.ev).gH(0).d9(0,A.jr),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bli(d)},
$S:1713}
C.fBf.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:147}
C.fBg.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fT(0)},
$S:147}
C.fBh.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f7O.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fbR,A.L,w,w)},
$S:1714}
C.f7P.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.li(A.bm,w,A.dM,8,w,e===0?w:e,w),A.aq)},
$S:636}
C.eg6.prototype={
$1(d){this.a.a_9()
return null},
$S:12}
C.eg4.prototype={
$0(){return this.a.e=D.bsm},
$S:0}
C.eg5.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.ciQ.prototype={
$1(d){return A.o.dC(1,d.a)},
$S:z+103}
C.ciR.prototype={
$2(d,e){return(d|e)>>>0},
$S:72};(function aliases(){var w=C.aLU.prototype
w.bvW=w.t
w=C.aLq.prototype
w.bvr=w.t
w=C.aLc.prototype
w.bvc=w.t
w=C.aLp.prototype
w.bvq=w.t
w=C.aLS.prototype
w.bvU=w.t
w=C.aNa.prototype
w.bxn=w.t
w=C.aK9.prototype
w.bu6=w.t
w=C.aM2.prototype
w.bw4=w.t
w=C.aM3.prototype
w.bw5=w.t
w=C.b2P.prototype
w.bqL=w.aD_})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i9f","anF",104)
v(C.aJ8.prototype,"gc4d","Z3",0)
var r
u(r=C.axN.prototype,"gcxf","cxg",38)
v(r,"gc52","adv",0)
v(r=C.axJ.prototype,"gaYs","E9",3)
v(r,"gc5_","c50",3)
v(r,"gawI","xO",0)
v(r,"gawJ","IM",0)
t(C,"i9F","hFR",105)
v(C.aDQ.prototype,"gc7y","c7z",3)
s(C,"i9Q",0,null,["$4$paper$photo$request$template"],["fIi"],106,0)
s(C,"i9P",0,null,["$5$doc$history$instruction$photo$template"],["bBK"],107,0)
v(r=C.aE6.prototype,"gc8g","J4",0)
v(r,"gbJ8","WU",0)
v(r,"gc8j","aeh",0)
v(r,"gc8i","ZW",0)
v(r,"gaZz","Eq",0)
v(C.aE8.prototype,"gc8o","ZY",0)
v(r=C.aFv.prototype,"gaZM","PX",0)
v(r,"gcp_","b36",3)
v(r,"gcyD","aB8",86)
v(r,"gbN0","aai",0)
v(r,"gc8Q","Ax",0)
v(r=C.aHr.prototype,"gciU","a0i",0)
v(r,"gcj1","a0l",0)
v(r,"gbC1","a8M",0)
v(r,"gc8U","aet",0)
v(C.aHq.prototype,"gc8V","aeu",0)
v(C.aBw.prototype,"gbB0","a8z",0)
v(C.azU.prototype,"gc8W","a_8",0)
w(C,"ia2","i7X",12)
w(C,"ia0","i4U",12)
w(C,"ia1","i6X",12)
v(r=C.aEo.prototype,"gcBO","cBP",3)
v(r,"gcnh","cni",3)
u(r,"gEw","af8",7)
v(r,"gbGN","arG",3)
u(r,"gEx","b04",7)
v(r,"gcb4","aeQ",0)
v(r,"gc9W","aeP",0)
v(r,"gcde","af9",0)
v(r,"gbJ5","a9T",0)
v(r,"gce8","a_I",0)
v(r,"gce9","afq",0)
v(r,"gceG","afx",0)
v(r,"gcdr","afc",0)
v(r,"gbNc","aam",0)
v(r,"gaRR","aRS",3)
v(r,"gaR_","aR0",3)
v(r,"gaME","aMF",3)
v(r,"gaQZ","asv",3)
u(r,"gbBh","bBi",80)
v(r,"gaAF","b6d",3)
v(r,"gc9Y","c9Z",3)
v(r,"gbYo","bYp",3)
v(r,"gbLy","bLz",3)
v(r=C.aEr.prototype,"gcAE","cAF",3)
v(r,"gcAj","cAk",3)
t(C,"ia3","i8d",2)
v(r=C.aEp.prototype,"gc91","J9",0)
v(r,"gcr3","Rm",0)
v(r,"gc8Z","J8",0)
v(r,"gcD3","a2R",0)
v(r,"gceS","afE",0)
v(C.aEn.prototype,"gc92","aZU",3)
v(r=C.aEq.prototype,"gbO_","aax",0)
u(r,"gc9_","c90",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nY,C.RS,C.bHk,C.bFF,C.cz0,C.cyZ,C.bOQ,C.b8z,C.cz_,C.bEf,C.ciK,C.ciI,C.ciJ,C.ciH,C.asW,C.ciG,C.bPJ,C.op,C.aF_,C.jn,C.nK,C.a7T,C.zD,C.lm,C.oD,C.ma,C.zE,C.nO,C.a80,C.ark,C.b19,C.efW,C.lj,C.EF,C.et,C.j2,C.Ew,C.xD,C.eI,C.lL,C.i4,C.jF,C.a81,C.af6,C.b1a,C.b2P,C.a2P])
u(B.k6,[C.cGS,C.c_G,C.fwr,C.cIn,C.cHK,C.fBW,C.dZo,C.dZn,C.eg9,C.eg8,C.fDk,C.feP,C.feQ,C.ceE,C.ceF,C.ceG,C.ejz,C.eRY,C.eRl,C.eRk,C.eSo,C.eRW,C.eRP,C.eS7,C.eSO,C.fmm,C.eYY,C.eYX,C.eZq,C.efZ,C.fGQ,C.dVj,C.fNo,C.fDH,C.cga,C.cg8,C.cgd,C.fEb,C.fEc,C.fEd,C.fEe,C.cfV,C.cfW,C.dHT,C.cfS,C.fEa,C.f5m,C.dT4,C.cfL,C.efF,C.fBL,C.euA,C.euZ,C.euW,C.euV,C.ev5,C.ev4,C.ewA,C.ewz,C.euP,C.euO,C.ero,C.esy,C.evx,C.ewS,C.ewR,C.esl,C.etw,C.er5,C.d2z,C.exN,C.exO,C.exJ,C.exK,C.exL,C.exM,C.exR,C.cgi,C.exm,C.exx,C.ciR])
u(B.hS,[C.cGT,C.cGU,C.bPK,C.ftC,C.c_F,C.c_I,C.fJT,C.f6k,C.f6b,C.f6r,C.fdH,C.fdI,C.fws,C.fwq,C.fJn,C.ftg,C.fKe,C.cId,C.cIi,C.cIk,C.cIg,C.cIl,C.cIe,C.cIm,C.cI9,C.cI6,C.cI5,C.cIc,C.cHF,C.cHD,C.fAY,C.fAZ,C.fhW,C.fBX,C.fC2,C.fgZ,C.caX,C.fAW,C.fAX,C.fvO,C.fvP,C.fC1,C.fBY,C.fC_,C.fC0,C.fBZ,C.fNG,C.fvS,C.fvT,C.fvW,C.fvX,C.fw_,C.fw0,C.fP8,C.ffg,C.fPj,C.ej6,C.ej7,C.ej8,C.eiP,C.ej0,C.ej1,C.ej3,C.ceD,C.ceB,C.ceC,C.fBC,C.fBE,C.fBD,C.feR,C.feS,C.fPm,C.ejE,C.ejF,C.ejw,C.ejx,C.ejA,C.ejB,C.fPC,C.eSP,C.eSe,C.eRZ,C.eSb,C.eRg,C.eRh,C.eRi,C.eRm,C.eRn,C.eSE,C.eSL,C.eSN,C.eSn,C.eSp,C.eSt,C.eSu,C.eSv,C.eSz,C.eSq,C.eSr,C.eRy,C.eRz,C.eRA,C.eRB,C.eRC,C.eRD,C.eRE,C.eRF,C.eRG,C.eQU,C.eQV,C.eQW,C.eQX,C.eQZ,C.eR_,C.eRs,C.eRt,C.eRu,C.eRv,C.eRw,C.eR3,C.eR4,C.eR5,C.eR6,C.eRO,C.eS6,C.fz0,C.fz_,C.cg1,C.fml,C.fGM,C.fGF,C.fGI,C.fEF,C.fEG,C.fEH,C.fz7,C.fz6,C.fz5,C.fz3,C.feL,C.feM,C.feN,C.fPO,C.eZ_,C.eZ0,C.eYU,C.eYO,C.eZj,C.eZk,C.eZm,C.eZn,C.eZi,C.fPN,C.eYF,C.flB,C.efY,C.fGO,C.fGP,C.fGR,C.fGK,C.fGL,C.fP0,C.dkJ,C.dkP,C.efX,C.fbd,C.fbf,C.fbe,C.fbc,C.fAb,C.fAd,C.fdc,C.fGg,C.fGh,C.fGi,C.fGt,C.fGy,C.fGz,C.fGA,C.fGB,C.fGC,C.fGD,C.fGE,C.fGj,C.fGk,C.fGl,C.fGm,C.fGn,C.fGo,C.fGp,C.fGq,C.fGr,C.fGs,C.fGu,C.fGv,C.fGw,C.fGx,C.fy1,C.fl9,C.fl8,C.fGX,C.dVk,C.dVi,C.eXP,C.cay,C.caA,C.fNq,C.da5,C.da7,C.fNp,C.fNn,C.fPM,C.fDD,C.d9G,C.fw3,C.fw4,C.cg_,C.cg0,C.cfZ,C.cfP,C.cfQ,C.cfM,C.cfN,C.cfO,C.cgg,C.cgb,C.cg6,C.cg7,C.cg9,C.cgc,C.cge,C.fEf,C.cfU,C.cfX,C.cfY,C.cg3,C.cg4,C.fH3,C.fGa,C.cfT,C.cfR,C.fE9,C.fnH,C.cfK,C.eVs,C.fqI,C.exd,C.etD,C.etE,C.evd,C.ev1,C.ev2,C.et0,C.ewZ,C.ex_,C.ex0,C.esp,C.euH,C.euJ,C.euj,C.eug,C.etz,C.etA,C.euq,C.esr,C.euC,C.euD,C.euB,C.euF,C.euE,C.euX,C.euY,C.ev_,C.euT,C.esK,C.esH,C.ev6,C.esz,C.ewY,C.er7,C.esC,C.esB,C.erQ,C.erV,C.erT,C.erR,C.ex5,C.ex6,C.ex7,C.ex4,C.ewC,C.ewB,C.ewv,C.ewx,C.ewn,C.ewW,C.ewU,C.erf,C.erb,C.etx,C.erZ,C.erq,C.erp,C.erM,C.erN,C.esZ,C.es0,C.es4,C.euQ,C.ewo,C.ewp,C.ewq,C.ewr,C.est,C.esu,C.esv,C.eu_,C.esV,C.esN,C.esU,C.eu9,C.eua,C.evX,C.evZ,C.ewi,C.ewk,C.ew_,C.ew0,C.erX,C.etC,C.etB,C.ewM,C.esk,C.esc,C.esd,C.esg,C.esh,C.eue,C.eti,C.etj,C.etk,C.etl,C.etm,C.etn,C.eto,C.etp,C.etq,C.etr,C.ets,C.eva,C.d2w,C.d2x,C.exT,C.fGU,C.fH2,C.fGT,C.fGZ,C.fdG,C.fPQ,C.fPR,C.fPS,C.exl,C.exu,C.er0,C.eqW,C.eqX,C.fBd,C.fBc,C.fBe,C.fBj,C.fBf,C.fBg,C.f7O,C.f7P,C.eg6,C.ciQ])
u(B.j0,[C.cGV,C.f6g,C.f6l,C.f6m,C.f6h,C.f6i,C.f6j,C.f69,C.f6a,C.f6c,C.f6d,C.f6q,C.f6p,C.f6f,C.f6e,C.f6n,C.f6o,C.f6t,C.f6u,C.f6s,C.cIf,C.cIj,C.cIh,C.cI7,C.cI8,C.cIa,C.cI3,C.cI4,C.cIb,C.cI2,C.cI1,C.cI0,C.cHu,C.cHt,C.cHw,C.cHE,C.cHx,C.cHv,C.cHz,C.cHA,C.cHB,C.cHy,C.cHC,C.cHG,C.cHH,C.cHI,C.cHJ,C.fvM,C.fvN,C.fvK,C.fvL,C.ebN,C.ebL,C.ebM,C.ebO,C.ebP,C.dZm,C.fvQ,C.fvR,C.fvU,C.fvV,C.fvY,C.fvZ,C.eg7,C.fDK,C.fDJ,C.ej5,C.ej4,C.eiJ,C.eiF,C.eiQ,C.eiR,C.eiS,C.eiL,C.eiM,C.eiN,C.eiO,C.eiK,C.eiH,C.eiI,C.eiY,C.eiZ,C.eiX,C.ej_,C.eiW,C.eiV,C.eiU,C.ej2,C.eiT,C.eiG,C.ejD,C.ejr,C.ejs,C.ejy,C.ejt,C.ejv,C.eju,C.ejC,C.eRH,C.eS4,C.eRq,C.eRr,C.eRo,C.eRp,C.eSa,C.eS9,C.eS8,C.eSd,C.eSc,C.eRf,C.eRj,C.eRe,C.eRd,C.eRa,C.eRc,C.eRb,C.eSM,C.eSF,C.eSD,C.eSG,C.eSC,C.eSH,C.eSB,C.eSI,C.eSJ,C.eSK,C.eSA,C.eSm,C.eSh,C.eSs,C.eSl,C.eSw,C.eSk,C.eSx,C.eSj,C.eSy,C.eSi,C.eS1,C.eS0,C.eS2,C.eS_,C.eS3,C.eRU,C.eRT,C.eRV,C.eRS,C.eRR,C.eRQ,C.eQY,C.eQT,C.eR7,C.eR2,C.eR8,C.eR1,C.eR9,C.eR0,C.eRX,C.eRL,C.eRK,C.eRM,C.eRJ,C.eRN,C.eRI,C.eS5,C.eSg,C.eSf,C.eRx,C.fGH,C.fGJ,C.fGN,C.fz4,C.fBv,C.fBt,C.fBu,C.eZ1,C.eZ2,C.eYZ,C.eYT,C.eYS,C.eYV,C.eYW,C.eYI,C.eYJ,C.eYL,C.eYM,C.eYN,C.eYK,C.eYP,C.eZf,C.eZg,C.eZe,C.eZh,C.eZd,C.eZc,C.eZb,C.eZl,C.eZa,C.eZ9,C.eZ8,C.eZo,C.eZ7,C.eZp,C.eZ6,C.eZ5,C.eYQ,C.eYR,C.eZ4,C.eZ3,C.eYB,C.eYC,C.eYD,C.eYE,C.eYA,C.eYG,C.eYH,C.dkI,C.dkK,C.dkN,C.dkO,C.dkM,C.dkL,C.fAc,C.fy2,C.caz,C.caB,C.d9Z,C.da3,C.da4,C.da2,C.da1,C.da6,C.da0,C.da_,C.da8,C.fNm,C.dgL,C.dgM,C.dgN,C.fw1,C.fw2,C.cgh,C.er1,C.er2,C.er3,C.er4,C.fnF,C.fnG,C.dT6,C.dT5,C.d6V,C.d6U,C.exf,C.exe,C.etF,C.ewl,C.exb,C.evb,C.ex1,C.ex2,C.exc,C.euk,C.esn,C.eso,C.euI,C.eui,C.euf,C.euh,C.eul,C.eum,C.eun,C.euo,C.eup,C.eur,C.ess,C.euu,C.euv,C.euw,C.eux,C.euy,C.euz,C.eut,C.euG,C.euU,C.euS,C.ev0,C.eus,C.esI,C.esJ,C.esL,C.ev3,C.ev7,C.erm,C.esG,C.esE,C.evf,C.esA,C.eve,C.esq,C.et1,C.ewX,C.ewm,C.ern,C.erk,C.era,C.er6,C.er8,C.esD,C.erP,C.erU,C.erS,C.erO,C.euR,C.ex8,C.ewy,C.ewt,C.ewu,C.eww,C.etv,C.etu,C.ewV,C.erd,C.ere,C.erg,C.erh,C.erl,C.erc,C.evc,C.ex3,C.ety,C.erY,C.er9,C.et_,C.eri,C.err,C.ers,C.ert,C.erE,C.erH,C.erI,C.erJ,C.erK,C.erL,C.eru,C.erv,C.erw,C.erx,C.ery,C.erz,C.erA,C.erB,C.erC,C.erD,C.erF,C.erG,C.esY,C.esX,C.esW,C.erj,C.es1,C.es_,C.es2,C.es3,C.esF,C.euM,C.euN,C.euK,C.euL,C.ews,C.esx,C.esw,C.etZ,C.etY,C.eu0,C.etX,C.eu1,C.etW,C.eu2,C.etV,C.eu3,C.etU,C.eu4,C.etT,C.eu5,C.etS,C.eu6,C.etR,C.etK,C.etL,C.etM,C.etJ,C.etN,C.etI,C.etO,C.etH,C.etP,C.etG,C.etQ,C.esS,C.esT,C.esM,C.esO,C.esP,C.esQ,C.esR,C.ex9,C.exa,C.eu8,C.eu7,C.eub,C.evy,C.evz,C.evA,C.evL,C.evW,C.ew6,C.ewd,C.ewe,C.ewf,C.ewg,C.ewh,C.evB,C.evC,C.evD,C.evE,C.evF,C.evG,C.evH,C.evI,C.evJ,C.evK,C.evM,C.evN,C.evO,C.evP,C.evQ,C.evR,C.evS,C.evT,C.evU,C.evo,C.evV,C.evw,C.evv,C.evY,C.evu,C.evk,C.ewj,C.evt,C.evj,C.evh,C.evs,C.evi,C.evg,C.ew1,C.evr,C.ew2,C.ew3,C.ew4,C.ew5,C.evq,C.ew7,C.ew8,C.ew9,C.evp,C.ewa,C.evn,C.ewb,C.evm,C.ewc,C.evl,C.erW,C.ewF,C.ewE,C.ewG,C.ewD,C.et4,C.et3,C.et5,C.et2,C.ewQ,C.ewL,C.ewP,C.ewH,C.ewI,C.ewJ,C.ewK,C.ewN,C.ewO,C.ewT,C.esm,C.es9,C.esa,C.esb,C.es8,C.esf,C.ese,C.es7,C.es6,C.esi,C.es5,C.esj,C.eud,C.euc,C.eth,C.etg,C.etf,C.ete,C.etd,C.etc,C.etb,C.eta,C.et7,C.et9,C.et8,C.et6,C.ett,C.ev8,C.ev9,C.d2y,C.d2V,C.d2W,C.d2s,C.d2r,C.d2v,C.d2t,C.d2u,C.exQ,C.exG,C.exP,C.exH,C.exI,C.exC,C.exD,C.exE,C.exF,C.exS,C.fH_,C.fH0,C.fH1,C.exi,C.exj,C.exk,C.exn,C.exo,C.exr,C.exs,C.exq,C.ext,C.exp,C.exh,C.exg,C.exv,C.exw,C.exy,C.exz,C.er_,C.eqZ,C.eqV,C.eqY,C.exB,C.exA,C.fBi,C.fBh,C.eg4,C.eg5])
t(C.aRg,B.J)
u(B.lU,[C.a3N,C.axf,C.avX,C.xB,C.xE,C.kV,C.tp,C.Bw,C.ry,C.w3,C.arS,C.IP,C.arj,C.uM,C.mC,C.hF,C.a8F])
u(C.bOQ,[C.cz1,C.bOR])
u(C.ciK,[C.ciO,C.asV])
t(C.ciN,C.ciI)
t(C.ciM,C.ciH)
t(C.ciP,C.ciM)
t(C.ciL,C.ciJ)
t(C.ciF,C.ciG)
t(C.ba5,B.oS)
t(C.csP,B.avp)
t(C.a8r,B.xp)
t(C.aVL,B.dG)
t(C.aAP,B.aug)
u(B.ag,[C.a0R,C.YA,C.Yy,C.aqv,C.VN,C.VO,C.a_R,C.a0n,C.a0m,C.aE0,C.ZK,C.Nx,C.Zh,C.ZC,C.aou,C.aIQ,C.V4,C.azE,C.a7J,C.NZ,C.az_,C.JQ,C.a_u,C.VZ,C.W_,C.aEm,C.aro,C.a7K])
u(B.ah,[C.aJ8,C.axN,C.axJ,C.aDQ,C.aE6,C.aE8,C.aFv,C.aHr,C.aHq,C.aLU,C.aBw,C.aLq,C.azU,C.bfX,C.aLc,C.aNa,C.aLp,C.bdR,C.aLS,C.aM2,C.aK9,C.bcC,C.aM3,C.aEp,C.bke,C.aEn,C.aEq,C.bjY])
u(B.au,[C.axL,C.ade,C.acE,C.bj3,C.adh,C.aeX,C.b0L,C.bsn,C.b15,C.blv,C.bqW,C.b__,C.b18,C.adk,C.adB,C.b16,C.IO,C.b_2,C.bcR,C.PE,C.JW,C.bht,C.bhs,C.buL])
u(B.Hi,[C.bcj,C.btM,C.aJs,C.bf0,C.brj])
u(B.mq,[C.bci,C.b8R,C.brg,C.bbQ,C.bfn,C.bhz,C.beu,C.bfk,C.bf2,C.bnN,C.b9Y,C.b9C,C.buI,C.brJ,C.bqS,C.ben,C.b13,C.bpP,C.bqP])
t(C.bjW,C.aLU)
t(C.bjk,C.aLq)
t(C.bj5,C.aLc)
t(C.bue,C.aNa)
t(C.bjg,C.aLp)
t(C.bjU,C.aLS)
t(C.bwZ,C.aM2)
t(C.aEo,C.bwZ)
t(C.bcD,C.aK9)
t(C.aEr,C.aM3)
t(C.buz,B.iT)
t(C.a8E,B.kt)
t(C.ciS,C.b2P)
t(C.aib,C.a2P)
u(B.XA,[C.aR6,C.aSD])
t(C.awS,C.aR6)
w(C.aLU,B.cp)
w(C.aLq,B.cp)
w(C.aLc,B.cp)
w(C.aLp,B.cp)
w(C.aLS,B.cp)
w(C.aNa,B.cp)
w(C.aK9,B.eT)
w(C.aM2,B.cp)
v(C.bwZ,B.ey)
w(C.aM3,B.cp)})()
B.jJ(b.typeUniverse,JSON.parse('{"aRQ":{"hL":["aRQ"]},"nY":{"aRQ":[],"hL":["aRQ"]},"aRg":{"J":["RS"],"J.E":"RS"},"ba5":{"oS":[]},"a8r":{"xp":[],"oj":[]},"aVL":{"dG":[],"cy":[],"t":[]},"aAP":{"aT":[],"d7":["aT"],"aS":[],"cu":[]},"a0R":{"ag":[],"t":[]},"aJ8":{"ah":["a0R"]},"YA":{"ag":[],"t":[]},"Yy":{"ag":[],"t":[]},"axN":{"ah":["YA"]},"axJ":{"ah":["Yy"]},"axL":{"au":[],"t":[]},"aqv":{"ag":[],"t":[]},"aDQ":{"ah":["aqv"]},"ade":{"au":[],"t":[]},"acE":{"au":[],"t":[]},"adh":{"au":[],"t":[]},"aeX":{"au":[],"t":[]},"bj3":{"au":[],"t":[]},"VN":{"ag":[],"t":[]},"aE6":{"ah":["VN"]},"b0L":{"au":[],"t":[]},"bcj":{"aC":[]},"bci":{"aC":[]},"btM":{"aC":[]},"b8R":{"aC":[]},"brg":{"aC":[]},"VO":{"ag":[],"t":[]},"aE8":{"ah":["VO"]},"bbQ":{"aC":[]},"a_R":{"ag":[],"t":[]},"aFv":{"ah":["a_R"]},"bfn":{"aC":[]},"a0n":{"ag":[],"t":[]},"a0m":{"ag":[],"t":[]},"aE0":{"ag":[],"t":[]},"ZK":{"ag":[],"t":[]},"aHr":{"ah":["a0n"]},"aHq":{"ah":["a0m"]},"bjW":{"ah":["aE0"]},"bhz":{"aC":[]},"aBw":{"ah":["ZK"]},"bsn":{"au":[],"t":[]},"b15":{"au":[],"t":[]},"blv":{"au":[],"t":[]},"Nx":{"ag":[],"t":[]},"Zh":{"ag":[],"t":[]},"bjk":{"ah":["Nx"]},"bqW":{"au":[],"t":[]},"beu":{"aC":[]},"b__":{"au":[],"t":[]},"azU":{"ah":["Zh"]},"ZC":{"ag":[],"t":[]},"bfX":{"ah":["ZC"]},"bfk":{"aC":[]},"bf2":{"aC":[]},"bnN":{"aC":[]},"b9Y":{"aC":[]},"b9C":{"aC":[]},"buI":{"aC":[]},"brJ":{"aC":[]},"bqS":{"aC":[]},"ben":{"aC":[]},"aou":{"ag":[],"t":[]},"b18":{"au":[],"t":[]},"bj5":{"ah":["aou"]},"adk":{"au":[],"t":[]},"adB":{"au":[],"t":[]},"aIQ":{"ag":[],"t":[]},"V4":{"ag":[],"t":[]},"IO":{"au":[],"t":[]},"azE":{"ag":[],"t":[]},"a7J":{"ag":[],"t":[]},"b16":{"au":[],"t":[]},"b13":{"aC":[]},"bue":{"ah":["aIQ"]},"aJs":{"aC":[]},"bjg":{"ah":["V4"]},"bdR":{"ah":["azE"]},"bjU":{"ah":["a7J"]},"b_2":{"au":[],"t":[]},"bf0":{"aC":[]},"bpP":{"aC":[]},"bqP":{"aC":[]},"az_":{"ag":[],"t":[]},"JQ":{"ag":[],"t":[]},"a_u":{"ag":[],"t":[]},"JW":{"au":[],"t":[]},"NZ":{"ag":[],"t":[]},"aEo":{"ah":["NZ"],"ey":[]},"bcD":{"ah":["az_"]},"bcR":{"au":[],"t":[]},"bcC":{"ah":["JQ"]},"PE":{"au":[],"t":[]},"aEr":{"ah":["a_u"]},"brj":{"aC":[]},"bht":{"au":[],"t":[]},"bhs":{"au":[],"t":[]},"VZ":{"ag":[],"t":[]},"W_":{"ag":[],"t":[]},"aEm":{"ag":[],"t":[]},"aro":{"ag":[],"t":[]},"aEp":{"ah":["VZ"]},"bke":{"ah":["W_"]},"aEn":{"ah":["aEm"]},"buz":{"iT":[]},"aEq":{"ah":["aro"]},"buL":{"au":[],"t":[]},"a7K":{"ag":[],"t":[]},"bjY":{"ah":["a7K"]},"a8E":{"kt":["fu<eQ>"],"kh":["fu<eQ>"]},"aib":{"a2P":[]},"aR6":{"j5":[],"fh":[]},"awS":{"j5":[],"fh":[]},"aSD":{"j5":[],"fh":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.av
return{bu:w("LI"),U:w("vw<q6>"),bz:w("v"),M:w("dD<n>"),bo:w("jz"),g7:w("Mg"),gc:w("aA<iz?>"),bq:w("aA<~>"),cc:w("Mt"),fS:w("DV"),an:w("I_"),bm:w("O<RS>"),X:w("O<a2X>"),f3:w("O<aRQ>"),aK:w("O<nc>"),V:w("O<ac>"),O:w("O<v>"),fA:w("O<lD>"),d5:w("O<aA<bw<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dI>>"),fG:w("O<aA<~>>"),aF:w("O<ni>"),cd:w("O<ai<jn>>"),ez:w("O<a6<n,aD>>"),d:w("O<a6<n,@>>"),B:w("O<my>"),h:w("O<jn>"),gE:w("O<zD>"),k:w("O<op>"),g:w("O<lL>"),D:w("O<i4>"),u:w("O<eI>"),m:w("O<uM>"),i:w("O<hF>"),aC:w("O<a80>"),o:w("O<zE>"),e3:w("O<aD>"),dN:w("O<x>"),v:w("O<he>"),cR:w("O<iR>"),J:w("O<jg>"),gx:w("O<pb<n>>"),f2:w("O<+(a1,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cS>"),s:w("O<n>"),aS:w("O<iT>"),p:w("O<t>"),eR:w("O<fh>"),fT:w("O<b8z>"),bx:w("O<aF_>"),gz:w("O<af6>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<x?>"),Z:w("O<H?>"),cA:w("O<cg>"),A:w("cw<ah<ag>>"),gL:w("ai<op>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bw<H,+icon3d,picture(n?,n?)>"),P:w("a6<n,@>"),f:w("a6<@,@>"),gI:w("a6<H,+icon3d,picture(n?,n?)>"),bR:w("M<hF,t>"),eC:w("M<nO,n>"),cT:w("M<jF,D>"),dv:w("M<n,n>"),f0:w("M<n,t>"),gN:w("M<H,pJ>"),gh:w("M<mC,jp<mC>>"),w:w("iD"),ei:w("iz"),g2:w("ro"),fB:w("Ew"),b6:w("zD"),gX:w("a7T"),dt:w("lm"),ea:w("op"),bt:w("lL"),I:w("i4"),F:w("eI"),fO:w("mC"),ff:w("uM"),fP:w("hF"),Q:w("w3"),dO:w("ark"),a:w("cq"),C:w("aD"),dw:w("asW"),di:w("a8F"),Y:w("eQ"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("F2"),dB:w("dx<x>"),bJ:w("dx<n>"),_:w("e1<n>"),N:w("n"),fw:w("q6"),bO:w("aq"),K:w("bp<x>"),b:w("bp<K>"),E:w("dI"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("jI<lL>"),cI:w("jI<n>"),cl:w("jI<K>"),b4:w("Z<lj>"),a8:w("Z<ma>"),fR:w("Z<+(n,n)>"),co:w("ea<x>"),l:w("t"),b2:w("bX<~>"),ev:w("q8<dW>"),dT:w("bg<~>"),cQ:w("aAP"),q:w("n1"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("bb?"),gw:w("ai<a6<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iz?"),af:w("i4?"),go:w("b1a?"),a6:w("a81?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dI,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXF=new B.bK(A.ax,null,null,H.aow,null)
D.aXO=new B.df(0,-0.15)
D.aXQ=new B.df(0.62,0)
D.aXT=new B.df(-0.35,-0.45)
D.aY2=new B.df(0.9,-0.85)
D.aZX=new B.bk(H.SV,H.SV,A.hH,A.hH)
D.b_b=new B.ay(A.b5,1,A.q,-1)
D.bjl=new B.v(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.b_n=new B.ay(D.bjl,1,A.q,-1)
D.b_z=new B.ay(A.aD,1.5,A.q,-1)
D.b_E=new B.ay(A.b5,1.6,A.q,-1)
D.b_U=new B.ay(A.aD,1.4,A.q,-1)
D.b1h=new B.o(null,null,null,null,null,L.H_,A.a4)
D.c_i=new B.a8(A.a3,A.a8,A.x,G.a3D,null,null)
D.b1p=new B.o(null,null,null,null,null,D.c_i,A.a4)
D.abK=new B.o(A.av,null,null,A.tc,null,null,A.n)
D.bd2=new B.v(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bji=new B.v(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cY7=w([D.bd2,D.bji],x.O)
D.elb=new B.c_(A.A,0.5,A.x,null,0,D.cY7,null,null)
D.b1I=new B.o(null,null,null,null,null,D.elb,A.a4)
D.Xo=new B.v(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b09=new B.bJ(P.vj,A.X,A.X,A.X)
D.b1K=new B.o(D.Xo,null,D.b09,null,null,null,A.n)
D.c12=new B.a8(A.a3,A.a8,A.x,A.Qx,null,null)
D.b1R=new B.o(null,null,null,null,null,D.c12,A.a4)
D.adi=new B.v(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b1U=new B.o(D.adi,null,null,A.qK,null,null,A.n)
D.b1Y=new B.o(A.jq,null,null,null,null,null,A.a4)
D.b20=new B.o(A_.aep,null,H.abo,A.mh,null,null,A.n)
D.El=new B.o(A.dL,null,null,null,null,null,A.a4)
D.b27=new B.o(null,null,null,null,null,E.wk,A.a4)
D.d29=w([E.afh,A.bZ],x.O)
D.c0E=new B.a8(A.b3,A.b6,A.x,D.d29,null,null)
D.b2b=new B.o(null,null,null,A.mh,null,D.c0E,A.n)
D.dcY=w([A.bi,A.dL,A.k3],x.O)
D.a1L=new B.a8(A.ax,A.aC,A.x,D.dcY,null,null)
D.b2o=new B.o(null,null,null,null,null,D.a1L,A.n)
D.b2p=new B.o(D.adi,null,null,A.kS,null,null,A.n)
D.csr=w([A.d7,A.bi],x.O)
D.c0v=new B.a8(A.ax,A.aC,A.x,D.csr,null,null)
D.b2t=new B.o(null,null,null,null,null,D.c0v,A.n)
D.b2D=new B.o(null,null,null,null,null,G.uo,A.a4)
D.b2Y=new B.o(A.afj,null,null,null,null,null,A.a4)
D.bdV=new B.v(0.5647058823529412,0,0,0,A.t)
D.abU=new B.ac(0,A.G,D.bdV,A.Sq,28)
D.b56=new B.aVY()
D.b5F=new C.csP()
D.b5R=new C.ba5()
D.acp=new B.cm(A.A,null,null,A.a1A,null)
D.b8t=new B.fj(null,null,null,null,null,E.n2,null,null,null,null)
D.b6o=new B.cm(A.A,null,null,D.b8t,null)
D.bKN=new B.ae(A.e2,28,A.c,null,null,null)
D.b6U=new B.cm(A.A,null,null,D.bKN,null)
D.b8q=new B.fj(2,null,null,null,null,A.c_,null,null,null,null)
D.b7g=new B.cm(A.A,null,null,D.b8q,null)
D.bL7=new B.ae(L.Oa,40,A.bx,null,null,null)
D.b7h=new B.cm(A.A,null,null,D.bL7,null)
D.b9k=new B.v(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b9w=new B.v(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b9W=new B.v(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.ba2=new B.v(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.bax=new B.v(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.baO=new B.v(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.baP=new B.v(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.L8=new B.v(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.bbd=new B.v(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.bbj=new B.v(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adA=new B.v(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.bc4=new B.v(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bcS=new B.v(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adP=new B.v(1,1,1,0.9725490196078431,A.t)
D.bdb=new B.v(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bdn=new B.v(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bdr=new B.v(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bdF=new B.v(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.be_=new B.v(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bfu=new B.v(1,1,0.996078431372549,0.9725490196078431,A.t)
D.X9=new B.v(0.8509803921568627,0,0,0,A.t)
D.bfD=new B.v(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bfK=new B.v(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aeH=new B.v(0.6,0,0,0,A.t)
D.aeJ=new B.v(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bhd=new B.v(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tx=new B.v(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bhC=new B.v(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bi1=new B.v(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bir=new B.v(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.afu=new B.v(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xy=new B.v(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.B2=new B.v(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.LI=new B.v(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jn=new B.v(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afT=new B.v(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.XJ=new B.v(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.blT=new B.v(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bmn=new B.v(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bmB=new B.v(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Y4=new B.v(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bnL=new B.v(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xM=new B.v(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.boh=new B.v(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.boC=new B.hK(A.aZ,!0,null,null)
D.fie=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIF=new B.y("Bio link",null,D.fie,null,null,null,null,null,null,null,null,null)
D.b7a=new B.cm(A.A,null,null,D.fIF,null)
D.boS=new B.hK(A.Wt,!0,D.b7a,null)
D.M5=new C.a3N(0,"none")
D.agZ=new C.a3N(1,"deflate")
D.ah_=new C.a3N(2,"bzip2")
D.bpQ=new B.km(0.165,0.84,0.44,1)
D.d2t=w([A.c9,A.dM,A.aD],x.O)
D.c_N=new B.a8(A.ax,A.aC,A.x,D.d2t,null,null)
D.b1m=new B.o(null,null,null,null,null,D.c_N,A.n)
D.bU4=new B.ae(A.eU,null,A.ad,null,null,null)
D.b7N=new B.cm(A.A,null,null,D.bU4,null)
D.bqm=new B.kS(D.b1m,A.bf,D.b7N,null)
D.bm8=new B.v(0.058823529411764705,1,1,1,A.t)
D.d5H=w([A.bz,A.qU,A.qU,D.bm8],x.O)
D.cJM=w([0,0.32,0.7,1],x.x)
D.c0l=new B.a8(A.ax,A.aC,A.x,D.d5H,D.cJM,null)
D.b1b=new B.o(null,null,null,null,null,D.c0l,A.n)
D.bqs=new B.kS(D.b1b,A.bf,null,null)
D.brA=new B.mr(1,1,null,null,null,A.bm,null)
D.brD=new B.mr(1,null,null,null,null,D.XJ,null)
D.bs6=new B.bb(125e4)
D.bsc=new B.bb(17e4)
D.bsm=new B.bb(35964e8)
D.bst=new B.bb(55e4)
D.bsx=new B.bb(68e4)
D.bsX=new B.ii(0,0,0,5)
D.btc=new B.Q(0,16,16,0)
D.btn=new B.Q(0,36,0,36)
D.btv=new B.Q(0,54,0,0)
D.btC=new B.Q(10,0,10,3)
D.btN=new B.ii(10,16,10,10)
D.btZ=new B.Q(10,6,4,6)
D.bu1=new B.Q(10,8,10,6)
D.ahX=new B.Q(11,8,11,11)
D.bu6=new B.Q(12,0,12,24)
D.bui=new B.Q(12,12,12,4)
D.bul=new B.Q(12,12,8,12)
D.buA=new B.Q(12,8,8,12)
D.buX=new B.Q(14,14,14,0)
D.bv1=new B.Q(14,14,14,90)
D.bvm=new B.Q(16,10,16,16)
D.bvn=new B.Q(16,10,16,20)
D.aiJ=new B.Q(16,6,16,28)
D.bvX=new B.Q(18,0,18,10)
D.bvZ=new B.Q(18,0,18,30)
D.bw0=new B.Q(18,10,18,12)
D.bw1=new B.Q(18,10,18,14)
D.bwl=new B.Q(18,16,14,18)
D.bwq=new B.Q(18,18,18,12)
D.bww=new B.Q(18,26,18,12)
D.bwB=new B.Q(18,34,18,34)
D.bwC=new B.Q(18,4,18,14)
D.bwH=new B.Q(18,8,18,24)
D.bx_=new B.Q(20,16,14,4)
D.bx4=new B.Q(20,18,12,4)
D.bx9=new B.Q(20,20,12,20)
D.bxc=new B.Q(20,22,20,20)
D.bxh=new B.Q(20,6,20,6)
D.bxr=new B.Q(22,18,22,18)
D.bxz=new B.Q(22,24,22,0)
D.bxC=new B.Q(22,24,22,4)
D.bxK=new B.Q(22,60,22,22)
D.bxQ=new B.Q(24,24,24,22)
D.by_=new B.Q(26,10,60,10)
D.by7=new B.Q(28,44,28,44)
D.byo=new B.Q(32,44,32,44)
D.byw=new B.Q(38,30,38,20)
D.byB=new B.Q(4,0,0,6)
D.byN=new B.ii(4,4,4,4)
D.bzd=new B.ii(6,5,6,5)
D.bzi=new B.Q(6,6,8,6)
D.bzt=new B.Q(8,14,8,14)
D.bzu=new B.Q(8,22,8,22)
D.bzC=new B.Q(8,6,12,6)
D.bzL=new B.Q(8,8,8,4)
D.ajD=new B.Q(9,9,9,6)
D.bzW=new B.ii(2.5,2.5,2.5,2.5)
D.bzX=new B.Q(10.5,0,10.5,0)
D.bzY=new B.Q(7,1.5,7,1.5)
D.cV9=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bAd=new B.z0(null,null,D.cV9,A.AH)
D.cS7=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bAe=new B.z0(null,null,D.cS7,A.AH)
D.aRE=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHY=new B.y("WORD DESIGN",null,D.aRE,null,null,null,null,null,null,null,null,null)
D.bAO=new B.by(1,A.bd,D.fHY,null)
D.fHD=new B.y("Slides database",null,Ab.rU,null,null,null,null,null,null,null,null,null)
D.fEQ=new B.y("Admin only \xb7 keep as many as you like",null,U.aR9,null,null,null,null,null,null,null,null,null)
D.dln=w([D.fHD,A.bA,D.fEQ],x.p)
D.bph=new B.fk(A.af,A.e,A.j,A.E,null,A.p,null,0,D.dln,null)
D.bAR=new B.by(1,A.bd,D.bph,null)
D.fza=new B.y("NGMY logo",null,A.fV,null,null,null,null,null,null,null,null,null)
D.bAU=new B.by(1,A.bd,D.fza,null)
D.fg2=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new B.y("TALK TO THE EDITOR",null,D.fg2,null,null,null,null,null,null,null,null,null)
D.bBb=new B.by(1,A.bd,D.fJY,null)
D.fsZ=new B.y("Tell the AI what to change",null,Ab.rU,null,null,null,null,null,null,null,null,null)
D.bBw=new B.by(1,A.bd,D.fsZ,null)
D.bCI=new B.DK(!0,"video/mp4")
D.fek=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqW=new B.y("Move presentations between devices",null,D.fek,null,null,null,!1,null,null,1,null,null)
D.bCM=new B.qs(A.e_,A.a3,A.f,D.fqW,null)
D.fs9=new B.y("Edit in Slides",null,A.iZ,null,null,null,null,null,null,null,null,null)
D.bCN=new B.qs(A.e_,A.A,A.f,D.fs9,null)
D.bD1=new B.dr(1,A.cn,D.bCN,null)
D.a01=new B.a1(60988,"MaterialIcons",!1)
D.bGq=new B.a1(61352,"MaterialIcons",!1)
D.ala=new B.a1(61531,"MaterialIcons",!1)
D.bHD=new B.a1(63062,"MaterialIcons",!1)
D.bHK=new B.a1(63109,"MaterialIcons",!1)
D.bHW=new B.a1(63206,"MaterialIcons",!1)
D.alV=new B.a1(63238,"MaterialIcons",!1)
D.bId=new B.a1(63338,"MaterialIcons",!1)
D.a0y=new B.a1(63365,"MaterialIcons",!1)
D.a0z=new B.a1(63367,"MaterialIcons",!1)
D.a0A=new B.a1(63368,"MaterialIcons",!1)
D.am5=new B.a1(63384,"MaterialIcons",!1)
D.bIu=new B.a1(63525,"MaterialIcons",!1)
D.bIx=new B.a1(63568,"MaterialIcons",!1)
D.bIS=new B.a1(983072,"MaterialIcons",!1)
D.bJf=new B.a1(983271,"MaterialIcons",!0)
D.ane=new B.a1(983965,"MaterialIcons",!1)
D.anf=new B.a1(983966,"MaterialIcons",!1)
D.bK7=new B.a1(984592,"MaterialIcons",!1)
D.bKp=new B.ae(A.u5,16,A.aB,null,null,null)
D.bKw=new B.ae(A.o9,null,A.c,null,null,null)
D.ano=new B.ae(A.q9,18,A.c,null,null,null)
D.bKO=new B.ae(A.BM,18,O.lo,null,null,null)
D.bLu=new B.ae(A.jM,11,null,null,null,null)
D.bLE=new B.ae(A.a0i,null,A.em,null,null,null)
D.bMb=new B.ae(A.rh,18,A.aB,null,null,null)
D.bMh=new B.ae(A4.C_,14,null,null,null,null)
D.bMi=new B.ae(A.eb,28,A.cs,null,null,null)
D.bMu=new B.ae(A.qa,20,A.c,null,null,null)
D.bMB=new B.ae(A.yH,null,null,null,null,null)
D.bMH=new B.ae(A.kE,18,A.iH,null,null,null)
D.bMM=new B.ae(A.l3,null,null,null,null,null)
D.bHF=new B.a1(63065,"MaterialIcons",!1)
D.bNp=new B.ae(D.bHF,15,A.c,null,null,null)
D.bHL=new B.a1(63113,"MaterialIcons",!1)
D.bNv=new B.ae(D.bHL,null,A.ad,null,null,null)
D.bNT=new B.ae(A.u2,22,A.bL,null,null,null)
D.bOc=new B.ae(A.w1,18,null,null,null,null)
D.bOi=new B.ae(A.C3,12,A.c,null,null,null)
D.bJL=new B.a1(983687,"MaterialIcons",!1)
D.bOt=new B.ae(D.bJL,null,A.bi,null,null,null)
D.bOC=new B.ae(A.hD,null,A.bi,null,null,null)
D.bOV=new B.ae(A.p4,22,A.c,null,null,null)
D.bOZ=new B.ae(A.cw,13,A.c,null,null,null)
D.bP4=new B.ae(A.eb,26,A.aw,null,null,null)
D.bP8=new B.ae(A.rl,26,A.c,null,null,null)
D.On=new B.ae(A.jM,8,A.c,null,null,null)
D.bPr=new B.ae(A.q9,40,A.c,null,null,null)
D.bPs=new B.ae(A.bFn,null,null,null,null,null)
D.bPw=new B.ae(A.ug,20,null,null,null,null)
D.bJK=new B.a1(983683,"MaterialIcons",!1)
D.bPG=new B.ae(D.bJK,null,A.b_,null,null,null)
D.bPH=new B.ae(A.jM,16,A.bi,null,null,null)
D.bQ1=new B.ae(A.rm,null,null,null,null,null)
D.anW=new B.ae(A.w3,22,A.c,null,null,null)
D.bQ6=new B.ae(A.e2,17,A.c,null,null,null)
D.anX=new B.ae(A.jM,9,A.c,null,null,null)
D.bQb=new B.ae(A.vZ,null,null,null,null,null)
D.bFE=new B.a1(57744,"MaterialIcons",!1)
D.bQi=new B.ae(D.bFE,null,null,null,null,null)
D.bQl=new B.ae(A.vZ,16,null,null,null,null)
D.bKg=new B.a1(985181,"MaterialIcons",!1)
D.GR=new B.ae(D.bKg,null,null,null,null,null)
D.bQx=new B.ae(A.l3,16,A.bL,null,null,null)
D.bJD=new B.a1(983615,"MaterialIcons",!1)
D.bQz=new B.ae(D.bJD,12,A.c,null,null,null)
D.ao2=new B.ae(A.yq,16,null,null,null,null)
D.bQH=new B.ae(A.e2,21,A.c,null,null,null)
D.bQM=new B.ae(A.hD,17,A.c,null,null,null)
D.bQN=new B.ae(A.u2,null,null,null,null,null)
D.bR3=new B.ae(A.a1d,20,A.aB,null,null,null)
D.bRi=new B.ae(A.o5,22,E.n2,null,null,null)
D.bRp=new B.ae(A.rj,13,A.ad,null,null,null)
D.bRr=new B.ae(A.an0,20,A.aB,null,null,null)
D.bFl=new B.a1(57495,"MaterialIcons",!1)
D.bRw=new B.ae(D.bFl,null,null,null,null,null)
D.bRA=new B.ae(A.o6,18,A.c,null,null,null)
D.bRW=new B.ae(A.uj,28,A.c,null,null,null)
D.bS6=new B.ae(D.alV,null,A.aD,null,null,null)
D.bS7=new B.ae(A.qa,22,A.c,null,null,null)
D.aob=new B.ae(A.a_Y,16,null,null,null,null)
D.bST=new B.ae(A.u2,32,A.c,null,null,null)
D.bTB=new B.ae(A.jb,22,A.c,null,null,null)
D.bTF=new B.ae(A.rl,22,A.ad,null,null,null)
D.aoq=new B.ae(A.u5,null,A.bX,null,null,null)
D.bUz=new B.ae(A.u4,18,null,null,null,null)
D.bVa=new B.ae(A.e2,18,A.bH,null,null,null)
D.a1D=new B.ae(A.cw,18,A.aB,null,null,null)
D.bVg=new B.ae(A.amV,null,null,null,null,null)
D.bVH=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aRs,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eD,!0,null,null,null,null)
D.f6c=new B.F(!0,A.bK,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bVZ=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f6c,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eD,!0,null,null,null,null)
D.bWp=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eD,!0,null,null,null,null)
D.cZ5=w([A.dL,A.aD],x.O)
D.bYw=new B.a8(A.a3,A.a8,A.x,D.cZ5,null,null)
D.bYH=new B.a8(A.b3,A.b6,A.Ux,A.avu,null,null)
D.b9M=new B.v(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.be2=new B.v(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bhe=new B.v(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.bbX=new B.v(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cJO=w([D.b9M,D.be2,D.bhe,D.bbX],x.O)
D.bZ_=new B.a8(A.ax,A.aC,A.x,D.cJO,A.Ho,null)
D.dlw=w([A.cY,A.bD,A.b5],x.O)
D.bZ1=new B.a8(A.b3,A.b6,A.Ux,D.dlw,null,null)
D.dmY=w([A.bi,A.c8],x.O)
D.bZ6=new B.a8(A.a3,A.a8,A.x,D.dmY,null,null)
D.dhQ=w([A.hy,A.d8,A.aF],x.O)
D.bZ8=new B.a8(A.ax,A.aC,A.x,D.dhQ,null,null)
D.d48=w([A.cM,A.fd],x.O)
D.bZc=new B.a8(A.a3,A.a8,A.x,D.d48,null,null)
D.dlp=w([O.lo,A.d8],x.O)
D.apb=new B.a8(A.a3,A.a8,A.x,D.dlp,null,null)
D.beF=new B.v(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dlm=w([D.beF,D.xM,A.c_],x.O)
D.bZh=new B.a8(A.a3,A.a8,A.x,D.dlm,null,null)
D.d_M=w([A.bo,A.cS,A.eg],x.O)
D.bZi=new B.a8(A.ax,A.aC,A.x,D.d_M,null,null)
D.OD=new B.a8(A.a3,A.a8,A.x,A.HB,null,null)
D.bmZ=new B.v(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cCL=w([D.bmZ,A.c_,A.jp],x.O)
D.apg=new B.a8(A.ax,A.aC,A.x,D.cCL,null,null)
D.d9r=w([A.vt,A.ay,D.B2],x.O)
D.c_k=new B.a8(A.a3,A.a8,A.x,D.d9r,null,null)
D.boi=new B.v(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bcR=new B.v(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.big=new B.v(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cZT=w([D.boi,D.bcR,D.big],x.O)
D.aph=new B.a8(A.a3,A.a8,A.x,D.cZT,null,null)
D.beH=new B.v(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c1i=w([Av.agF,D.beH],x.O)
D.c_t=new B.a8(A.b3,A.b6,A.x,D.c1i,null,null)
D.cXW=w([A.n0,A.bx],x.O)
D.c_x=new B.a8(A.b3,A.b6,A.x,D.cXW,null,null)
D.deD=w([A.aD,A.dM],x.O)
D.c_E=new B.a8(A.a3,A.a8,A.x,D.deD,null,null)
D.afF=new B.v(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.axa=w([D.afF,D.jn,D.L8],x.O)
D.c05=new B.a8(A.ax,A.aC,A.x,D.axa,null,null)
D.cCD=w([A.dx,A.dH],x.O)
D.c0g=new B.a8(A.b3,A.b6,A.x,D.cCD,null,null)
D.dbC=w([A.xu,Ay.F_],x.O)
D.c14=new B.a8(A.a3,A.a8,A.x,D.dbC,null,null)
D.fAI=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c1f=new B.pR(null,D.fAI,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.z2=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5x=new C.kV(2,"elegantNavy")
D.hhM=w([A.Xw,D.jn,A.c_],x.O)
D.jS=new C.xB(0,"classic")
D.a5k=new C.jn("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5x,4294967035,4279378237,4290283019,D.jS)
D.aGw=new C.kV(3,"elegantGold")
D.b9j=new B.v(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.bag=new B.v(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.aee=new B.v(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hhe=w([D.b9j,D.bag,D.aee],x.O)
D.a5i=new C.jn("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGw,4294966515,4281016592,4289102906,D.jS)
D.dHW=new C.kV(22,"goldRibbon")
D.hha=w([A.Xw,D.jn,A.i4],x.O)
D.a5b=new C.jn("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dHW,4294967035,4279378237,4291404327,D.jS)
D.dHX=new C.kV(23,"goldBaroque")
D.aeS=new B.v(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hhg=w([D.aeS,A.ay,A.jp],x.O)
D.a5c=new C.jn("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dHX,4294964964,4283053072,4292128567,D.jS)
D.dHZ=new C.kV(4,"elegantEmerald")
D.bbp=new B.v(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bcj=new B.v(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hhm=w([D.bbp,D.bcj,A.i4],x.O)
D.a5d=new C.jn("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dHZ,4294376440,4279122734,4291404327,D.jS)
D.dI_=new C.kV(5,"elegantBurgundy")
D.bg9=new B.v(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hht=w([D.bg9,A.ads,A.i4],x.O)
D.a5g=new C.jn("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dI_,4294965238,4283043359,4291404327,D.jS)
D.dHT=new C.kV(19,"goldFiligree")
D.LQ=new B.v(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hhh=w([D.LQ,A.ay,A.jp],x.O)
D.a5e=new C.jn("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dHT,4294966259,4279378237,4292128567,D.jS)
D.dHU=new C.kV(20,"goldLaurel")
D.bmP=new B.v(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hhu=w([A.L1,A.i4,D.bmP],x.O)
D.a5f=new C.jn("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dHU,4294966776,4282000405,4291404327,D.jS)
D.dHV=new C.kV(21,"goldCrest")
D.adl=new B.v(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bmW=new B.v(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hhj=w([D.adl,A.ay,D.bmW],x.O)
D.a5j=new C.jn("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dHV,4294965484,4283053072,4292128567,D.jS)
D.dHY=new C.kV(24,"goldStar")
D.boa=new B.v(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hhn=w([D.boa,A.ay,D.jn],x.O)
D.a5h=new C.jn("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dHY,4294966518,4279378237,4292128567,D.jS)
D.H1=w([D.a5k,D.a5i,D.a5b,D.a5c,D.a5d,D.a5g,D.a5e,D.a5f,D.a5j,D.a5h],x.h)
D.qm=new C.mC(0,"blank")
D.Sf=new C.mC(1,"title")
D.mJ=new C.mC(2,"titleContent")
D.e1w=new C.mC(3,"twoColumn")
D.D3=new C.mC(4,"section")
D.e1x=new C.mC(5,"comparison")
D.Id=new C.mC(6,"flashcard")
D.Ie=new C.mC(7,"quiz")
D.If=new C.mC(8,"worksheet")
D.apC=w([D.qm,D.Sf,D.mJ,D.e1w,D.D3,D.e1x,D.Id,D.Ie,D.If],B.av("O<mC>"))
D.ayh=w([An.WU,A.dH],x.O)
D.kG=w([A.c_,A.bL,A.hM,A.hL,D.B2],x.O)
D.dDT=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.ayh,D.kG)
D.bn7=new B.v(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bg7=new B.v(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cY8=w([D.bn7,D.bg7],x.O)
D.dDK=new C.j2("confetti","Golden Confetti","Together we rise",D.cY8,D.kG)
D.cVe=w([A.nH,A.Wx],x.O)
D.dDL=new C.j2("crown","Crown of Glory","Built for our community",D.cVe,D.kG)
D.bcH=new B.v(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bfM=new B.v(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.d16=w([D.bcH,D.bfM],x.O)
D.uq=w([A.bK,A.aP,A.c,A.aL,A.ak],x.O)
D.dDF=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d16,D.uq)
D.bhg=new B.v(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.dbI=w([G.acZ,D.bhg],x.O)
D.dDW=new C.j2("champagne","Champagne Toast","Cheers to every member",D.dbI,D.kG)
D.dDX=new C.j2("diamonds","Diamond Rain","Every member is a jewel",X.ayX,D.uq)
D.ba8=new B.v(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bfg=new B.v(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.dh6=w([D.ba8,D.bfg],x.O)
D.dDA=new C.j2("starburst","Golden Starburst","Thank you!",D.dh6,D.kG)
D.c1p=w([A.fc,A.xG],x.O)
D.ad7=new B.v(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Qa=w([A.oO,A.i2,A.vE,A.nI,D.ad7],x.O)
D.dE3=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c1p,D.Qa)
D.cUx=w([A.WI,A.w],x.O)
D.dDS=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cUx,D.uq)
D.bl9=new B.v(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d8d=w([A.kw,D.bl9],x.O)
D.dDN=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.d8d,D.kG)
D.biW=new B.v(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bh3=new B.v(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.dcE=w([D.biW,D.bh3],x.O)
D.dDC=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.dcE,D.kG)
D.djO=w([A.dx,A.hK],x.O)
D.dDI=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.djO,D.kG)
D.bdJ=new B.v(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cSs=w([A.xI,D.bdJ],x.O)
D.dDE=new C.j2("hearts","Floating Hearts","Made with love",D.cSs,D.Qa)
D.baG=new B.v(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.bbv=new B.v(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dlk=w([D.baG,D.bbv],x.O)
D.dE2=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dlk,D.Qa)
D.bm6=new B.v(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dhr=w([A.ln,D.bm6],x.O)
D.dDz=new C.j2("butterflies","Golden Butterflies","New beginnings",D.dhr,D.kG)
D.bic=new B.v(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cTt=w([D.bic,A.w],x.O)
D.dDV=new C.j2("neon","Neon Night","Let's go!",D.cTt,D.uq)
D.beW=new B.v(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.deP=w([A.Lq,D.beW],x.O)
D.dDY=new C.j2("disco","Disco Ball","Party time",D.deP,D.uq)
D.biL=new B.v(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dek=w([A.hy,D.biL],x.O)
D.dDD=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.dek,D.kG)
D.ddW=w([A.qX,A.dH],x.O)
D.dDZ=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.ddW,D.uq)
D.bcM=new B.v(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.de9=w([D.bcM,A.dH],x.O)
D.dE1=new C.j2("snow","Winter Gala","Warm wishes to all",D.de9,D.uq)
D.b9s=new B.v(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.bar=new B.v(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dkc=w([D.b9s,D.bar],x.O)
D.dDR=new C.j2("laurel","Laurel Victory","We did it together",D.dkc,D.kG)
D.b9i=new B.v(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bfI=new B.v(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cRv=w([D.b9i,D.bfI],x.O)
D.dE0=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cRv,D.kG)
D.bgN=new B.v(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cCA=w([G.B1,D.bgN],x.O)
D.dDO=new C.j2("kente","Kente Pride","Proud of our roots",D.cCA,D.kG)
D.bju=new B.v(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bmr=new B.v(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d2Q=w([D.bju,D.bmr],x.O)
D.dDJ=new C.j2("trophy","Trophy Shine","Winners together",D.d2Q,D.kG)
D.deg=w([Ao.Le,A.w],x.O)
D.dDB=new C.j2("shooting","Shooting Stars","Make a wish",D.deg,D.uq)
D.b9z=new B.v(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ags=new B.v(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dku=w([D.b9z,D.ags],x.O)
D.dDP=new C.j2("bokeh","Golden Bokeh","Shine bright",D.dku,D.kG)
D.b9Y=new B.v(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d93=w([D.b9Y,A.w],x.O)
D.dDH=new C.j2("orbits","Golden Orbits","Always moving forward",D.d93,D.kG)
D.bm7=new B.v(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d5A=w([A.aea,D.bm7],x.O)
D.dDM=new C.j2("flowers","Blooming Garden","Growing together",D.d5A,D.Qa)
D.b9K=new B.v(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.bal=new B.v(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.djg=w([D.b9K,D.bal],x.O)
D.dDG=new C.j2("music","Music Party","Celebrate with us",D.djg,D.uq)
D.bbe=new B.v(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bmS=new B.v(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cSF=w([D.bbe,D.bmS],x.O)
D.dE_=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cSF,D.kG)
D.d5F=w([G.B1,D.ags],x.O)
D.dDU=new C.j2("sparklers","Golden Sparklers","Light up the night",D.d5F,D.kG)
D.dDQ=new C.j2("city","City Lights","The whole city celebrates",D.ayh,D.kG)
D.Ha=w([D.dDT,D.dDK,D.dDL,D.dDF,D.dDW,D.dDX,D.dDA,D.dE3,D.dDS,D.dDN,D.dDC,D.dDI,D.dDE,D.dE2,D.dDz,D.dDV,D.dDY,D.dDD,D.dDZ,D.dE1,D.dDR,D.dE0,D.dDO,D.dDJ,D.dDB,D.dDP,D.dDH,D.dDM,D.dDG,D.dE_,D.dDU,D.dDQ],B.av("O<j2>"))
D.er3=new B.z("","No ring")
D.eGN=new B.z("platinum","Platinum")
D.eCX=new B.z("glow","Glow")
D.euD=new B.z("double","Double line")
D.ety=new B.z("framed","Gallery frame")
D.eqB=new B.z("rosegold","Rose gold")
D.eDJ=new B.z("jewels","Jeweled")
D.eAv=new B.z("aurora","Aurora")
D.Cq=w([D.er3,A.a6M,D.eGN,D.eCX,K.aN3,D.euD,A.a6P,D.ety,D.eqB,D.eDJ,D.eAv],x.L)
D.clX=w([D.a5e,D.a5f,D.a5j,D.a5b,D.a5c,D.a5h],x.h)
D.bQV=new B.ae(G.akL,16,null,null,null,null)
D.b4s=new B.vw(A.bh,D.bQV,null,x.U)
D.bFN=new B.a1(58027,"MaterialIcons",!1)
D.bKv=new B.ae(D.bFN,16,null,null,null,null)
D.b4q=new B.vw(A.L,D.bKv,null,x.U)
D.bFO=new B.a1(58030,"MaterialIcons",!1)
D.bOA=new B.ae(D.bFO,16,null,null,null,null)
D.b4t=new B.vw(A.dQ,D.bOA,null,x.U)
D.csd=w([D.b4s,D.b4q,D.b4t],B.av("O<vw<q6>>"))
D.czU=w([A.B6,A.hh],x.O)
D.czV=w([A.bo,A.be,A.eg],x.O)
D.Q_=w([A.bL,A.hL,A.hM,A.ay,A.nI],x.O)
D.cCG=w([A.c_,D.jn,D.L8],x.O)
D.cDd=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eoo=new B.z(4278913286,4280030216)
D.eoG=new B.z(4279373061,4278518787)
D.eoN=new B.z(4279898630,4278847235)
D.d2d=w([D.eoo,D.eoG,D.eoN],x.n)
D.cYP=w(["\u265b","\u269c","\u2726"],x.s)
D.dHS=new C.xD("Royal Onyx & Gold",D.d2d,4292128567,4294370209,4294965479,3874020544,D.cYP)
D.eob=new B.z(4278326799,4278598442)
D.eod=new B.z(4278395929,4278258953)
D.eok=new B.z(4278599728,4278327826)
D.djF=w([D.eob,D.eod,D.eok],x.n)
D.cTl=w(["\u269c","\u2756","\u2727"],x.s)
D.dHP=new C.xD("Imperial Emerald",D.djF,4293050997,4294699968,4294180856,3872254170,D.cTl)
D.eoe=new B.z(4278455076,4278918747)
D.eoj=new B.z(4278587439,4278322714)
D.eox=new B.z(4279051376,4278455076)
D.dhM=w([D.eoe,D.eoj,D.eox],x.n)
D.d9J=w(["\u2654","\u2726","\u2748"],x.s)
D.dHJ=new C.xD("Sapphire Crown",D.dhM,4291417834,4294967295,4294310143,3871986666,D.d9J)
D.eoL=new B.z(4279894534,4283041554)
D.eoX=new B.z(4281008906,4279042307)
D.ep4=new B.z(4284221976,4279894534)
D.dnC=w([D.eoL,D.eoX,D.ep4],x.n)
D.cUG=w(["\u265b","\u2766","\u2726"],x.s)
D.dHL=new C.xD("Ruby Throne",D.dnC,4293378685,4294963145,4294964466,3874213833,D.cUG)
D.eoF=new B.z(4279371039,4281995100)
D.eoP=new B.z(4280092723,4278714896)
D.ep1=new B.z(4283045242,4279371039)
D.dk0=w([D.eoF,D.eoP,D.ep1],x.n)
D.di8=w(["\u2655","\u2756","\u2727"],x.s)
D.dHQ=new C.xD("Amethyst Palace",D.dk0,4293314984,4294963421,4294702591,3873229802,D.di8)
D.eog=new B.z(4278519045,4280032287)
D.eoy=new B.z(4279111184,4278321666)
D.eoU=new B.z(4280492839,4278716426)
D.dgA=w([D.eog,D.eoy,D.eoU],x.n)
D.d80=w(["\u2726","\u25c6","\u2742"],x.s)
D.dHN=new C.xD("Obsidian & Platinum",D.dgA,4293256418,4294967295,4294638330,3872378836,D.d80)
D.eoM=new B.z(4279896588,4282194463)
D.eoV=new B.z(4280553487,4279043334)
D.ep2=new B.z(4283048488,4279896588)
D.d7u=w([D.eoM,D.eoV,D.ep2],x.n)
D.dlO=w(["\u2766","\u273f","\u2727"],x.s)
D.dHK=new C.xD("Rose Gold Velvet",D.d7u,4293440672,4294960345,4294964979,3874214602,D.dlO)
D.eoh=new B.z(4278520340,4279180595)
D.eom=new B.z(4278718495,4278322443)
D.eoJ=new B.z(4279510591,4278520340)
D.cJv=w([D.eoh,D.eom,D.eoJ],x.n)
D.d8I=w(["\u269c","\u2736","\u2756"],x.s)
D.dHO=new C.xD("Midnight Brass",D.cJv,4291405148,4293975208,4294439914,3872837564,D.d8I)
D.eph=new B.z(4294703086,4293780428)
D.epd=new B.z(4294307549,4293187253)
D.epi=new B.z(4294966517,4293977807)
D.cWO=w([D.eph,D.epd,D.epi],x.n)
D.d97=w(["\u269c","\u265b","\u2726"],x.s)
D.dHR=new C.xD("Ivory Marble & Gold",D.cWO,4289760572,4286209048,4280951062,3863625518,D.d97)
D.eos=new B.z(4278978566,4280555024)
D.eoI=new B.z(4279504137,4278518530)
D.eoZ=new B.z(4281211923,4278978566)
D.cUw=w([D.eos,D.eoI,D.eoZ],x.n)
D.diT=w(["\u2742","\u2726","\u265c"],x.s)
D.dHM=new C.xD("Onyx & Copper",D.cUw,4291856987,4294365880,4294964718,3873885630,D.diT)
D.cDl=w([D.dHS,D.dHP,D.dHJ,D.dHL,D.dHQ,D.dHN,D.dHK,D.dHO,D.dHR,D.dHM],B.av("O<xD>"))
D.cFI=w([A.ay,D.B2,A.hL],x.O)
D.ewO=new B.z("Original",null)
D.ewW=new B.z("Wide 16:9",1.7777777777777777)
D.ezc=new B.z("Landscape 3:2",1.5)
D.ewf=new B.z("Photo 4:3",1.3333333333333333)
D.ey0=new B.z("Square",1)
D.eKq=new B.z("Portrait 3:4",0.75)
D.avD=w([D.ewO,D.ewW,D.ezc,D.ewf,D.ey0,D.eKq],B.av("O<+(n,K?)>"))
D.avE=w([A.hL,A.c6,A.bb,A.by],x.O)
D.ezn=new B.z("","Original")
D.eBd=new B.z("circle","Circle")
D.eHx=new B.z("rounded","Rounded")
D.eIq=new B.z("triangle","Triangle")
D.eDc=new B.z("hexagon","Hexagon")
D.eBD=new B.z("diamond","Diamond")
D.eAu=new B.z("arch","Arch")
D.Cv=w([D.ezn,D.eBd,D.eHx,D.eIq,D.eDc,D.eBD,D.eAu],x.L)
D.dD0=new C.lj("classic_blue","Classic Blue","Normal",A.bi,A.c,A.kx,A.d7,A.aJ)
D.dDg=new C.lj("campus_green","Campus Green","Normal",A.b_,A.mZ,A.tu,A.h_,A.e4)
D.dD7=new C.lj("warm_sand","Warm Sand","Normal",A.dT,A.hM,A.bL,A.ik,A.nP)
D.dDe=new C.lj("slate_minimal","Slate Minimal","Normal",A.br,A.aP,A.aL,A.M,A.aJ)
D.dD_=new C.lj("coral_fresh","Coral Fresh","Normal",A.c9,A.ii,A.pB,A.k6,A.tn)
D.dDf=new C.lj("lavender_calm","Lavender Calm","Normal",A.b5,A.pE,A.xB,A.oM,A.jl)
D.dD1=new C.lj("ocean_breeze","Ocean Breeze","Normal",A.fd,A.r1,A.tj,A.tp,A.nQ)
D.afL=new B.v(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dDc=new C.lj("berry_pop","Berry Pop","Normal",A.f1,D.afL,A.kr,G.Y2,A.Fj)
D.dD2=new C.lj("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.dx,A.kr,A.cr)
D.dDb=new C.lj("executive_navy","Executive Navy","Professional",A.d0,A.af5,A.d7,A.kX,A.bK)
D.dD9=new C.lj("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cr)
D.dD3=new C.lj("corporate_steel","Corporate Steel","Professional",A.nT,A.M,A.mq,A.fg,A.bK)
D.dD6=new C.lj("gold_luxe","Gold Luxe","Luxury",A.mX,A.dG,A.oN,A.lS,A.bL)
D.biR=new B.v(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dDa=new C.lj("rose_gold_elite","Rose Gold Elite","Luxury",A.hh,D.biR,A.XR,A.i2,A.nI)
D.dDd=new C.lj("platinum_night","Platinum Night","Luxury",A.cr,A.dH,A.bm,A.aP,A.aL)
D.dDh=new C.lj("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pK,A.f3,A.pR,A.jE)
D.dCZ=new C.lj("royal_purple","Royal Purple","Luxury",A.mY,A.X_,A.jl,A.kr,A.L0)
D.dD8=new C.lj("neon_pitch","Neon Pitch","Bold",A.bb,A.dH,A.M,A.b1,A.aL)
D.dD5=new C.lj("crimson_impact","Crimson Impact","Bold",A.bx,A.kw,A.eu,A.tH,A.f2)
D.dD4=new C.lj("sunset_gallery","Sunset Gallery","Bold",A.fn,A.tn,A.k6,A.pB,A.mp)
D.Hj=w([D.dD0,D.dDg,D.dD7,D.dDe,D.dD_,D.dDf,D.dD1,D.dDc,D.dD2,D.dDb,D.dD9,D.dD3,D.dD6,D.dDa,D.dDd,D.dDh,D.dCZ,D.dD8,D.dD5,D.dD4],B.av("O<lj>"))
D.cRe=w([A.c_,D.jn],x.O)
D.d7L=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eAg=new B.z("Faces & people",D.d7L)
D.cFM=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.en2=new B.z("Ideas & work",D.cFM)
D.cZk=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eDh=new B.z("Nature",D.cZk)
D.d7U=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ewM=new B.z("Places & things",D.d7U)
D.d1L=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eAz=new B.z("Symbols",D.d1L)
D.cRk=w([D.eAg,D.en2,D.eDh,D.ewM,D.eAz],B.av("O<+(n,ai<n>)>"))
D.b9P=new B.v(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cRH=w([A.c_,D.aee,D.b9P],x.O)
D.b3O=new B.ac(0,A.G,A.KY,A.aHj,40)
D.b3u=new B.ac(0,A.G,A.nN,A.ep,8)
D.cRU=w([D.b3O,D.b3u],x.V)
D.cSn=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aw2=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2S=w([A.hL,A.eg,A.bx,A.av,A.c9],x.O)
D.cTf=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aeu=new B.v(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cTq=w([A.XF,D.aeu,A.XF],x.O)
D.cTw=w([A.i4,D.jn,D.L8],x.O)
D.ewz=new B.z(A.bh,D.a0z)
D.exW=new B.z(A.L,D.a0y)
D.erO=new B.z(A.dQ,D.a0A)
D.cUr=w([D.ewz,D.exW,D.erO],B.av("O<+(q6,a1)>"))
D.cQ=new C.IP(0,"text")
D.lD=new C.IP(1,"image")
D.f6=new C.IP(2,"shape")
D.Se=new C.IP(3,"pdf")
D.lc=new C.IP(4,"signature")
D.a5E=new C.IP(5,"bio")
D.cVj=w([D.cQ,D.lD,D.f6,D.Se,D.lc,D.a5E],B.av("O<IP>"))
D.cVk=w([A.bp,A.cE],B.av("O<HK>"))
D.cVW=w(["School","Documents","Sign & present"],x.s)
D.b3T=new B.ac(0,A.G,A.agi,A.uL,28)
D.cWg=w([D.b3T],x.V)
D.cWz=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Qi=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.awr=w([A.hL,A.Fi,A.aL,A.c,A.oO,A.ay],x.O)
D.eJP=new B.z(0.1,0.08)
D.eDf=new B.z(0.3,0.05)
D.erh=new B.z(0.55,0.1)
D.evw=new B.z(0.8,0.06)
D.eyF=new B.z(0.92,0.16)
D.eya=new B.z(0.2,0.2)
D.ew0=new B.z(0.7,0.22)
D.eBZ=new B.z(0.05,0.4)
D.ez4=new B.z(0.95,0.45)
D.es2=new B.z(0.12,0.7)
D.euh=new B.z(0.88,0.75)
D.eup=new B.z(0.4,0.9)
D.epy=new B.z(0.65,0.93)
D.ev9=new B.z(0.25,0.97)
D.eww=new B.z(0.85,0.9)
D.esT=new B.z(0.5,0.04)
D.cY3=w([D.eJP,D.eDf,D.erh,D.evw,D.eyF,D.eya,D.ew0,D.eBZ,D.ez4,D.es2,D.euh,D.eup,D.epy,D.ev9,D.eww,D.esT],x.G)
D.cYa=w([A.c,A.hh,A.aR,A.aV],x.O)
D.e38=new C.jF("office_blue","Office Blue",A.bi,A.d7,A.aJ,A.c,A.kx)
D.e3j=new C.jF("campus_green","Campus Green",A.b_,A.h_,A.e4,A.mZ,A.tu)
D.e39=new C.jF("sunset","Sunset",A.fn,A.k6,A.nP,A.ii,A.pB)
D.e3a=new C.jF("midnight","Midnight",A.aD,A.kr,A.cr,A.M,A.dx)
D.e3l=new C.jF("classic","Classic",A.d8,A.dG,A.lT,A.hM,A.fL)
D.e3i=new C.jF("rose_gold","Rose Gold",A.hh,A.xJ,A.xI,A.vE,A.B6)
D.e33=new C.jF("ocean_teal","Ocean Teal",A.fd,A.tp,A.nQ,A.r1,A.tj)
D.e32=new C.jF("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aP,A.aL)
D.e31=new C.jF("neon_night","Neon Night",A.bb,A.b1,A.aL,A.dH,A.M)
D.e3d=new C.jF("lavender","Lavender",A.b5,A.oM,A.jl,A.pE,A.xB)
D.e3f=new C.jF("coral","Coral",A.c9,A.k6,A.tn,A.ii,A.mp)
D.e34=new C.jF("forest","Forest",A.hj,A.dV,A.cp,A.lU,A.em)
D.e35=new C.jF("berry","Berry",A.f1,G.Y2,A.Fj,D.afL,A.kr)
D.e3c=new C.jF("sand","Sand",A.dT,A.ik,A.nP,A.hM,A.bL)
D.e3h=new C.jF("ice","Ice",A.nT,A.Lr,A.aJ,A.mV,A.fg)
D.e37=new C.jF("charcoal","Charcoal",A.ak,A.aP,A.cr,A.bm,A.M)
D.e30=new C.jF("mint","Mint",A.aV,A.fC,A.h_,A.lU,A.pR)
D.e3g=new C.jF("crimson","Crimson",A.bx,A.n0,A.kw,A.Fg,A.tH)
D.bci=new B.v(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e3b=new C.jF("gold","Gold",A.mX,A.xu,A.oN,D.bci,A.lS)
D.e3e=new C.jF("aqua","Aqua",A.bR,A.F7,A.oK,A.pG,A.oP)
D.e36=new C.jF("plum","Plum",A.mY,A.xG,A.Fj,A.EW,A.r_)
D.e3k=new C.jF("steel","Steel",A.d0,A.d7,A.bm,A.kx,A.kX)
D.a37=w([D.e38,D.e3j,D.e39,D.e3a,D.e3l,D.e3i,D.e33,D.e32,D.e31,D.e3d,D.e3f,D.e34,D.e35,D.e3c,D.e3h,D.e37,D.e30,D.e3g,D.e3b,D.e3e,D.e36,D.e3k],B.av("O<jF>"))
D.cYv=w([A.c_,A.jp],x.O)
D.Sg=new C.hF(10,"rotate3d")
D.Ih=new C.hF(8,"flip")
D.aGP=new C.hF(19,"spiral")
D.qn=new C.hF(16,"bounce")
D.aGS=new C.hF(9,"flipVertical")
D.cYw=w([D.Sg,D.Ih,D.aGP,D.qn,D.aGS],x.i)
D.ec=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cYS=w([0.62,1],x.x)
D.cZt=w([0,0.32,0.68,1],x.x)
D.mK=new C.hF(6,"zoom")
D.uF=new C.hF(4,"slideUp")
D.uE=new C.hF(2,"slideLeft")
D.cZC=w([D.mK,D.Ih,D.uF,D.Sg,D.uE],x.i)
D.d_6=w([A.c6,A.hh,A.i2,A.hL,A.c],x.O)
D.b3J=new B.ac(0,A.G,D.aeH,A.uL,30)
D.d_R=w([D.b3J],x.V)
D.ed_=new B.x(0,-2.5)
D.ecQ=new B.x(-2.5,0)
D.eby=new B.x(2.5,0)
D.d_U=w([A.Sw,A.a6_,A.aHP,A.a5Z,D.ed_,K.aHL,D.ecQ,D.eby],x.dN)
D.Hq=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d0m=w([23,114,69,56,80,144],x.t)
D.d0O=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d17=w([0,0.5,1],x.x)
D.d1g=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d2V=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d2Z=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uM(0,"rectangle")
D.eP=new C.uM(1,"circle")
D.ld=new C.uM(6,"hexagon")
D.d3c=w([D.bg,D.eP,D.ld],x.m)
D.og=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afS=new B.v(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d3K=w([D.afS,A.dV],x.O)
D.erx=new B.z("","Classic")
D.epN=new B.z("caps","Bold caps")
D.eC1=new B.z("elegant","Elegant")
D.eHR=new B.z("shadow","Shadow")
D.evU=new B.z("neon","Neon glow")
D.eGu=new B.z("outline","Outline")
D.eFF=new B.z("marker","Highlighter")
D.eI1=new B.z("stamp","Stamp")
D.eHs=new B.z("retro","Retro")
D.euP=new B.z("threed","3D")
D.eCy=new B.z("fire","Fire")
D.eDr=new B.z("ice","Ice")
D.eBc=new B.z("chalk","Chalk")
D.eBh=new B.z("comic","Comic")
D.eI3=new B.z("sunset","Sunset")
D.eJc=new B.z("softglow","Soft glow")
D.eEq=new B.z("lowercase","Lowercase")
D.eBK=new B.z("double","Echo")
D.eJl=new B.z("whisper","Whisper")
D.axk=w([D.erx,D.epN,D.eC1,D.eHR,D.evU,D.eGu,D.eFF,D.eI1,D.eHs,D.euP,K.aMZ,D.eCy,D.eDr,D.eBc,D.eBh,A.a6M,D.eI3,D.eJc,D.eEq,D.eBK,D.eJl],x.L)
D.d50=w([3,5,7,10,12,15],x.t)
D.d6p=w([A.c6,A.bL,A.c,A.eE,A.cY],x.O)
D.duH=new C.tp(10,"cardWorld")
D.CW=new C.Bw(3,"rounded")
D.dKR=new C.lm("world","NGMY World",D.duH,D.CW,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.duI=new C.tp(11,"cardSplit")
D.dKN=new C.lm("business","Business Wire",D.duI,D.CW,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.duJ=new C.tp(12,"cardBreaking")
D.dL_=new C.lm("breaking","Breaking Red",D.duJ,D.CW,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.duK=new C.tp(13,"cardFeature")
D.dKT=new C.lm("feature","Tech Feature",D.duK,D.CW,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aFl=new C.tp(6,"circle")
D.aFf=new C.Bw(4,"circle")
D.dKX=new C.lm("parchment","Royal Circle",D.aFl,D.aFf,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dKM=new C.lm("ocean","Blue Ocean",D.aFl,D.aFf,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.duN=new C.tp(7,"rail")
D.aFe=new C.Bw(1,"double")
D.dKO=new C.lm("forest","Green Leaf",D.duN,D.aFe,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aFi=new C.tp(1,"sideBySide")
D.dL1=new C.lm("herald","NGMY Herald",D.aFi,D.CW,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aFh=new C.tp(0,"classic")
D.a4R=new C.Bw(9,"shadow")
D.dL0=new C.lm("daily","The Daily",D.aFh,D.a4R,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.duL=new C.tp(2,"splash")
D.aFg=new C.Bw(6,"cutCorner")
D.dKL=new C.lm("tabloid","Big Tabloid",D.duL,D.aFg,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aFm=new C.tp(9,"minimal")
D.dKW=new C.lm("modern","Modern Digest",D.aFm,D.CW,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aFj=new C.tp(3,"magazine")
D.aFd=new C.Bw(0,"plain")
D.dKS=new C.lm("midnight","Midnight Edition",D.aFj,D.aFd,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.duO=new C.tp(8,"banner")
D.dKU=new C.lm("metro","Metro Wire",D.duO,D.aFg,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.duG=new C.Bw(8,"arch")
D.dKV=new C.lm("sunrise","Sunrise Post",D.aFj,D.duG,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aFk=new C.tp(5,"scrapbook")
D.duF=new C.Bw(5,"tape")
D.dKQ=new C.lm("neon","Neon Beat",D.aFk,D.duF,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.duM=new C.tp(4,"wrap")
D.dL2=new C.lm("gold","Golden Press",D.duM,D.a4R,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dL3=new C.lm("minimal","Paper White",D.aFm,D.a4R,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dKP=new C.lm("gazette","Fresh Gazette",D.aFh,D.aFe,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dKZ=new C.lm("times","Classic Times",D.aFi,D.aFd,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RM=new C.Bw(2,"polaroid")
D.dKY=new C.lm("scrapbook","Memory Scrapbook",D.aFk,D.RM,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a3m=w([D.dKR,D.dKN,D.dL_,D.dKT,D.dKX,D.dKM,D.dKO,D.dL1,D.dL0,D.dKL,D.dKW,D.dKS,D.dKU,D.dKV,D.dKQ,D.dL2,D.dL3,D.dKP,D.dKZ,D.dKY],B.av("O<lm>"))
D.d6B=w([0.45,1],x.x)
D.Hs=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d6Z=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hcG=new C.oD("Original",0,1,1,0,0,0)
D.hcK=new C.oD("Black & white",0,1.1,0,0,0,0)
D.hcx=new C.oD("Noir",-0.05,1.55,0,0,0,0)
D.hcB=new C.oD("Sepia",0,1,0.25,0.9,0,0)
D.hcA=new C.oD("Vivid",0,1.15,1.6,0,0,0)
D.hct=new C.oD("Pop",0,1.3,1.9,0,0,0)
D.hcv=new C.oD("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hcH=new C.oD("Matte",0,0.9,0.85,0,0,0.55)
D.hcC=new C.oD("Cool",0,1.05,1,-0.8,0,0)
D.hcJ=new C.oD("Warm",0.03,1.05,1.1,0.8,0,0)
D.hcu=new C.oD("Golden hour",0.04,1,1.25,1,0,0)
D.hcz=new C.oD("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hcI=new C.oD("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hcy=new C.oD("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hcE=new C.oD("Retro",0,0.9,0.7,0.4,0,0.35)
D.hcD=new C.oD("Forest",0,1,1.2,-0.1,-0.45,0)
D.hcF=new C.oD("Rose",0,1,1.1,0.3,0.4,0)
D.hcw=new C.oD("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d7_=w([D.hcG,D.hcK,D.hcx,D.hcB,D.hcA,D.hct,D.hcv,D.hcH,D.hcC,D.hcJ,D.hcu,D.hcz,D.hcI,D.hcy,D.hcE,D.hcD,D.hcF,D.hcw],B.av("O<oD>"))
D.b9d=new B.v(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d71=w([D.afS,A.dV,D.b9d],x.O)
D.emX=new B.z(0.12,0.3)
D.eDC=new B.z(0.26,0.75)
D.eBY=new B.z(0.8,0.22)
D.eIa=new B.z(0.9,0.7)
D.eEp=new B.z(0.5,0.15)
D.eGw=new B.z(0.65,0.85)
D.etp=new B.z(0.08,0.85)
D.d7f=w([D.emX,D.eDC,D.eBY,D.eIa,D.eEp,D.eGw,D.etp],x.G)
D.axw=w([A.bb,A.c6,A.by,A.bo],x.O)
D.d84=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d8g=w([A.c,A.fg,A.ds,A.vr],x.O)
D.bcx=new B.v(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d9h=w([D.bcx,D.aeu],x.O)
D.d9i=w([A.vt,A.ay],x.O)
D.d9x=w([0,0.25,0.75,1],x.x)
D.d9z=w([A.xx,A.oO],x.O)
D.aGp=new C.kV(10,"kenteSunset")
D.hhc=w([D.aeS,A.k1,A.ay],x.O)
D.dGb=new C.jn("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aGp,4294964964,4282000405,4279983648,D.jS)
D.aGq=new C.kV(11,"indigoMudcloth")
D.bac=new B.v(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hhq=w([D.bac,A.aeq,A.i4],x.O)
D.dGj=new C.jn("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aGq,4294439140,4279903102,4279903102,D.jS)
D.aGr=new C.kV(12,"adinkraRoyal")
D.bnz=new B.v(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hhr=w([D.adl,D.bnz,A.ay],x.O)
D.dGl=new C.jn("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aGr,4294965484,4285218591,4287322667,D.jS)
D.aGs=new C.kV(13,"nileLotus")
D.bjN=new B.v(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bgq=new B.v(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hhw=w([D.bjN,D.bgq,A.i4],x.O)
D.dGk=new C.jn("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGs,4294244340,4279196764,4279196764,D.jS)
D.aGt=new C.kV(14,"shweshweIvory")
D.bev=new B.v(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bdh=new B.v(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.baF=new B.v(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hhd=w([D.bev,D.bdh,D.baF],x.O)
D.dGg=new C.jn("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGt,4294505710,4279970378,4291058750,D.jS)
D.rC=new C.kV(15,"certIvoryNavy")
D.hhb=w([D.LQ,D.jn,A.i4],x.O)
D.aFV=new C.xB(1,"ringsNdoa")
D.dGd=new C.jn("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rC,4294966259,4279378237,4291404327,D.aFV)
D.a5m=new C.xB(2,"coupleCards")
D.dG8=new C.jn("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rC,4294966259,4279378237,4291404327,D.a5m)
D.CZ=new C.kV(18,"certIvoryNavyBar")
D.adk=new B.v(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hhp=w([D.adk,D.jn,A.i4],x.O)
D.aFW=new C.xB(3,"kuhoweshaForm")
D.dG6=new C.jn("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CZ,4294966519,4279378237,4291404327,D.aFW)
D.aeF=new B.v(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hhJ=w([D.LQ,D.aeF,A.i4],x.O)
D.a5n=new C.xB(4,"mahariPande")
D.dG9=new C.jn("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rC,4294966259,4279904068,4291404327,D.a5n)
D.aGu=new C.kV(16,"certIvoryGreen")
D.bdT=new B.v(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hhf=w([A.L1,D.bdT,A.i4],x.O)
D.aFX=new C.xB(5,"familiaMti")
D.dGf=new C.jn("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aGu,4294966776,4280241466,4291404327,D.aFX)
D.a5o=new C.xB(6,"ndoaSafi")
D.dG7=new C.jn("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CZ,4294966519,4279378237,4291404327,D.a5o)
D.bib=new B.v(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hhi=w([D.LQ,A.i4,D.bib],x.O)
D.a5p=new C.xB(7,"peteWide")
D.dGc=new C.jn("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rC,4294966259,4282001936,4291404327,D.a5p)
D.dGm=new C.xB(8,"muhuriCrest")
D.dG5=new C.jn("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rC,4294966259,4279378237,4291404327,D.dGm)
D.hhs=w([D.adk,D.aeF,A.i4],x.O)
D.dGn=new C.xB(9,"fomuWazi")
D.dGi=new C.jn("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CZ,4294966519,4279904068,4291404327,D.dGn)
D.aGv=new C.kV(17,"certIvoryRose")
D.bez=new B.v(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hhv=w([D.bez,D.afu,A.i4],x.O)
D.a5l=new C.xB(10,"upendoOrnate")
D.dGe=new C.jn("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aGv,4294965493,4286200650,4291404327,D.a5l)
D.da_=w([D.dGb,D.dGj,D.dGl,D.dGk,D.dGg,D.dGd,D.dG8,D.dG6,D.dG9,D.dGf,D.dG7,D.dGc,D.dG5,D.dGi,D.dGe],x.h)
D.ed=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Ii=new C.w3(0,"emojis")
D.D5=new C.w3(1,"pictures")
D.Ij=new C.w3(2,"icons3d")
D.a5G=new C.w3(3,"animations")
D.Si=new C.w3(4,"videoMotion")
D.D6=new C.w3(5,"luxe")
D.a3t=w([D.Ii,D.D5,D.Ij,D.a5G,D.Si,D.D6],B.av("O<w3>"))
D.eH5=new B.z(A.e2,"Looks")
D.evp=new B.z(A.Cf,"Light")
D.evm=new B.z(A.nl,"Colour")
D.etq=new B.z(A.yw,"Effects")
D.alP=new B.a1(63112,"MaterialIcons",!1)
D.eq3=new B.z(D.alP,"Crop")
D.dat=w([D.eH5,D.evp,D.evm,D.etq,D.eq3],x.f2)
D.db7=w([],x.D)
D.hhG=w([],x.L)
D.dbA=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a 3D African village at night where the oldest person in the tree sits by the fire, teaches a fact and asks the children, and the fire grows with every right answer), Memory Drums (match each person with a clue about them), Elder Order (put children from oldest to youngest, or the generations in order) and a Family Test (10 questions, a grade, a certificate and the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.etD=new B.z("Flashcard",D.Id)
D.exn=new B.z("Quiz",D.Ie)
D.ezi=new B.z("Worksheet",D.If)
D.ewr=new B.z("Notes",D.mJ)
D.exU=new B.z("Section",D.D3)
D.dbO=w([D.etD,D.exn,D.ezi,D.ewr,D.exU],B.av("O<+(n,mC)>"))
D.dI0=new C.kV(6,"beadedPearl")
D.bh6=new B.v(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hhK=w([H.XQ,D.bh6,A.i4],x.O)
D.aFT=new C.jn("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dI0,4294966774,4286209070,4291404327,D.jS)
D.dI1=new C.kV(7,"artDeco")
D.bl3=new B.v(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bnS=new B.v(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hhI=w([D.bl3,D.bnS,A.c_],x.O)
D.aFU=new C.jn("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dI1,4294440434,4280228630,4290283019,D.jS)
D.dI2=new C.kV(8,"rosetteCorners")
D.bn1=new B.v(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bcC=new B.v(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bh1=new B.v(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hhl=w([D.bn1,D.bcC,D.bh1],x.O)
D.aFS=new C.jn("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dI2,4294702831,4285218602,4291394365,D.jS)
D.dI3=new C.kV(9,"modernLedger")
D.hhk=w([A.c,D.jn,D.jn],x.O)
D.aFR=new C.jn("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dI3,4294967295,4279378237,4279378237,D.jS)
D.dbS=w([D.aFT,D.aFU,D.aFS,D.aFR],x.h)
D.dc0=w([A.i2,A.oO],x.O)
D.cl=new C.hF(0,"none")
D.dg=new C.hF(1,"fade")
D.Ig=new C.hF(3,"slideRight")
D.aGR=new C.hF(5,"slideDown")
D.e1D=new C.hF(7,"zoomOut")
D.a5F=new C.hF(11,"cube")
D.e1y=new C.hF(12,"blur")
D.aGO=new C.hF(13,"dissolve")
D.e1z=new C.hF(14,"wipeLeft")
D.e1A=new C.hF(15,"wipeRight")
D.Sh=new C.hF(17,"push")
D.e1B=new C.hF(18,"flash")
D.aGQ=new C.hF(20,"swing")
D.e1C=new C.hF(21,"curtain")
D.QT=w([D.cl,D.dg,D.uE,D.Ig,D.uF,D.aGR,D.mK,D.e1D,D.Ih,D.aGS,D.Sg,D.a5F,D.e1y,D.aGO,D.e1z,D.e1A,D.qn,D.Sh,D.e1B,D.aGP,D.aGQ,D.e1C],x.i)
D.QU=w([D.a5k,D.a5i,D.a5b,D.a5c,D.a5d,D.a5g,D.a5e,D.a5f,D.a5j,D.a5h,D.aFT,D.aFU,D.aFS,D.aFR],x.h)
D.dct=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dcx=w([A.xC,A.hL,A.c_],x.O)
D.euJ=new B.z(A.u7,"Design")
D.eIz=new B.z(D.am5,"Word sizes")
D.eE9=new B.z(A.C9,"Text")
D.bJ5=new B.a1(983182,"MaterialIcons",!1)
D.eEd=new B.z(D.bJ5,"Photo")
D.epB=new B.z(A.lx,"Logo")
D.eJN=new B.z(A.GO,"News")
D.dcC=w([D.euJ,D.eIz,D.eE9,D.eEd,D.epB,D.eJN],x.f2)
D.dcD=w(["golddust","sparkle","sheen"],x.s)
D.e3_=new C.et("upload_pdf",L.Oa,"Upload PDF")
D.e29=new C.et("sign_paper",A.GL,"Sign Paper")
D.bIo=new B.a1(63438,"MaterialIcons",!1)
D.e2W=new C.et("hd_photo",D.bIo,"HD Photo")
D.e21=new C.et("sharpen",E.a0k,"Sharpen")
D.e2b=new C.et("print",L.Oa,"Download PDF")
D.e2D=new C.et("rotate",D.alP,"Rotate")
D.e2k=new C.et("text_box",A.C9,"Text Box")
D.e2m=new C.et("picture",A.ud,"Picture")
D.e2i=new C.et("title",A.yN,"Title")
D.e2e=new C.et("subtitle",T.amG,"Subtitle")
D.e2M=new C.et("bullets",I.a0B,"Bullet List")
D.e2f=new C.et("numbered",A.O1,"Numbered")
D.e2P=new C.et("quote",A4.C_,"Quote")
D.e2r=new C.et("citation",A.o5,"Citation")
D.e2S=new C.et("date_stamp",Ah.a0p,"Date Stamp")
D.e2F=new C.et("page_number",A.yM,"Page #")
D.e2J=new C.et("header_bar",A.Cc,"Header")
D.e2l=new C.et("footer_bar",Aq.a18,"Footer")
D.e2a=new C.et("divider",A.uc,"Divider")
D.e26=new C.et("highlight",A.a0I,"Highlight")
D.e2L=new C.et("redact",A.ul,"Redact")
D.e2y=new C.et("callout",A.BU,"Callout")
D.e2U=new C.et("checkboxes",I.al4,"Checklist")
D.e2v=new C.et("table",A.a15,"Table")
D.e2p=new C.et("memo",I.a0T,"Memo")
D.e2z=new C.et("letter",A.Gy,"Letter")
D.bI_=new B.a1(63259,"MaterialIcons",!0)
D.e20=new C.et("agenda",D.bI_,"Agenda")
D.e2c=new C.et("toc",Az.amj,"Contents")
D.bIk=new B.a1(63406,"MaterialIcons",!1)
D.e2w=new C.et("sig_line",D.bIk,"Sign Line")
D.e1U=new C.et("initial_line",A.j9,"Initials")
D.e1X=new C.et("approved",A.lx,"APPROVED")
D.e2B=new C.et("draft",A.p4,"DRAFT")
D.e2H=new C.et("confidential",A.jM,"Confidential")
D.e2K=new C.et("sticky",A.Oi,"Sticky Note")
D.e2T=new C.et("progress",A.ami,"Progress")
D.bJv=new B.a1(983507,"MaterialIcons",!1)
D.e27=new C.et("stars",D.bJv,"Star Rating")
D.e1S=new C.et("equation",A.am7,"Equation")
D.e22=new C.et("timeline",A.a16,"Timeline")
D.e2q=new C.et("two_col",A.a19,"Two Columns")
D.e24=new C.et("compare",A3.a0t,"Compare")
D.e1Q=new C.et("duplicate_el",A.fS,"Duplicate")
D.e2Y=new C.et("delete_el",A.eb,"Delete")
D.e2O=new C.et("bring_fwd",H.am1,"Bring Front")
D.e1V=new C.et("send_back",H.am0,"Send Back")
D.e2A=new C.et("align_left",D.a0z,"Align L")
D.e2G=new C.et("align_center",D.a0y,"Align C")
D.e2X=new C.et("align_right",D.a0A,"Align R")
D.e2j=new C.et("word_count",A1.a02,"Word Count")
D.e2g=new C.et("link_text",A.hp,"Link")
D.e2E=new C.et("phone",A.iQ,"Phone")
D.e25=new C.et("email",A.BX,"Email")
D.e2Z=new C.et("qr_placeholder",A.jy,"QR Placeholder")
D.e2_=new C.et("rectangle",A5.w2,"Rectangle")
D.e2u=new C.et("circle",A.rf,"Circle")
D.e1W=new C.et("arrow",A.kE,"Arrow")
D.e2N=new C.et("line",A.uc,"Line")
D.e28=new C.et("triangle",A.a0r,"Triangle")
D.bI7=new B.a1(63318,"MaterialIcons",!1)
D.e2d=new C.et("grayscale",D.bI7,"Grayscale")
D.e2n=new C.et("brighten",I.alp,"Brighten")
D.e2s=new C.et("flip_h",A.Go,"Flip H")
D.bIf=new B.a1(63348,"MaterialIcons",!1)
D.e2V=new C.et("flip_v",D.bIf,"Flip V")
D.e2I=new C.et("cover_page",A.q5,"Cover Page")
D.e1T=new C.et("invoice",A.hb,"Invoice")
D.e23=new C.et("resume",A.my,"Resume")
D.e2h=new C.et("minutes",A.p_,"Minutes")
D.e1Y=new C.et("lab_report",A.Oe,"Lab Report")
D.e1Z=new C.et("rubric",A.u8,"Rubric")
D.e2t=new C.et("flashcard_tool",V.GJ,"Flashcard")
D.e2Q=new C.et("quiz_tool",A.GD,"Quiz Block")
D.e2x=new C.et("worksheet_tool",M.Gf,"Worksheet")
D.e2C=new C.et("outline_share",A.Og,"Share Outline")
D.e2R=new C.et("export_json",D.ala,"Export JSON")
D.e1R=new C.et("new_slide",D.a01,"New Slide")
D.e2o=new C.et("present",A.qa,"Present")
D.dd7=w([D.e3_,D.e29,D.e2W,D.e21,D.e2b,D.e2D,D.e2k,D.e2m,D.e2i,D.e2e,D.e2M,D.e2f,D.e2P,D.e2r,D.e2S,D.e2F,D.e2J,D.e2l,D.e2a,D.e26,D.e2L,D.e2y,D.e2U,D.e2v,D.e2p,D.e2z,D.e20,D.e2c,D.e2w,D.e1U,D.e1X,D.e2B,D.e2H,D.e2K,D.e2T,D.e27,D.e1S,D.e22,D.e2q,D.e24,D.e1Q,D.e2Y,D.e2O,D.e1V,D.e2A,D.e2G,D.e2X,D.e2j,D.e2g,D.e2E,D.e25,D.e2Z,D.e2_,D.e2u,D.e1W,D.e2N,D.e28,D.e2d,D.e2n,D.e2s,D.e2V,D.e2I,D.e1T,D.e23,D.e2h,D.e1Y,D.e1Z,D.e2t,D.e2Q,D.e2x,D.e2C,D.e2R,D.e1R,D.e2o],B.av("O<et>"))
D.ddh=w([A.cr,A.ak],x.O)
D.ep8=new B.z(4286331629,4292552567)
D.eoW=new B.z(4280640491,4278630100)
D.epg=new B.z(4294538006,4292943176)
D.eoi=new B.z(4278556265,4280640491)
D.d7p=w([D.ep8,D.eoW,D.epg,D.eoi],x.n)
D.cvZ=w([4294626325,4280472558,4294210230],x.t)
D.e1L=new C.nO("colorful","Colorful",A.nl,D.d7p,4294967295,3875536895,D.cvZ,D.mK)
D.eoK=new B.z(4279522093,4279657780)
D.ep_=new B.z(4281750292,4283268111)
D.eol=new B.z(4278603323,4279203438)
D.ep0=new B.z(4282343954,4279599165)
D.cH_=w([D.eoK,D.ep_,D.eol,D.ep0],x.n)
D.cvH=w([4288931381,4294829706,4287033260],x.t)
D.e1H=new C.nO("nature","Nature",A.GM,D.cH_,4294442727,3874290891,D.cvH,D.dg)
D.eoE=new B.z(4279369771,4283178389)
D.eoB=new B.z(4279179050,4286456526)
D.eoS=new B.z(4280163147,4290648157)
D.eoa=new B.z(4278322711,4285343961)
D.cYK=w([D.eoE,D.eoB,D.eoS,D.eoa],x.n)
D.cvV=w([4294210230,4280472558,4289170426],x.t)
D.e1F=new C.nO("vibe","Vibe",A.a0G,D.cYK,4294967295,3874869502,D.cvV,D.uE)
D.epc=new B.z(4290007817,4292552567)
D.ep6=new B.z(4286328082,4294286859)
D.epb=new B.z(4288485197,4294538006)
D.ep5=new B.z(4285343961,4293675161)
D.c1R=w([D.epc,D.ep6,D.epb,D.ep5],x.n)
D.cw_=w([4294829706,4294967295,4284999929],x.t)
D.e1G=new C.nO("celebration","Celebration",A.l3,D.c1R,4294967295,4009752557,D.cw_,D.qn)
D.eoz=new B.z(4279179050,4280171146)
D.eoD=new B.z(4279310375,4280232247)
D.eor=new B.z(4278916151,4280172719)
D.eoA=new B.z(4279179050,4281549141)
D.cRA=w([D.eoz,D.eoD,D.eor,D.eoA],x.n)
D.cvC=w([4281908728,4294626325,4287931320],x.t)
D.e1K=new C.nO("professional","Professional",A.BS,D.cRA,4294967295,3872118241,D.cvC,D.Sh)
D.eov=new B.z(4278995566,4278413729)
D.eon=new B.z(4278727492,4279137424)
D.eoT=new B.z(4280171146,4278751666)
D.eow=new B.z(4278995566,4279590517)
D.czN=w([D.eov,D.eon,D.eoT,D.eow],x.n)
D.cvF=w([4286436348,4284410580,4294829706],x.t)
D.e1M=new C.nO("ocean","Ocean",I.a1b,D.czN,4294967295,3873501950,D.cvF,D.uF)
D.ep7=new B.z(4286328082,4294538006)
D.ep9=new B.z(4286781507,4294677052)
D.ep3=new B.z(4283178389,4294197086)
D.epa=new B.z(4288295954,4294688548)
D.cNP=w([D.ep7,D.ep9,D.ep3,D.epa],x.n)
D.cw0=w([4294829706,4294967295,4294747557],x.t)
D.e1N=new C.nO("sunset","Sunset",A.Ok,D.cNP,4294967295,4009749973,D.cw0,D.dg)
D.epk=new B.z(4294967295,4294047225)
D.epf=new B.z(4294507260,4294967295)
D.epj=new B.z(4294967295,4293060848)
D.epe=new B.z(4294507260,4294047225)
D.d0U=w([D.epk,D.epf,D.epj,D.epe],x.n)
D.cvA=w([4280640491,4279179050,4287931320],x.t)
D.e1J=new C.nO("minimal","Minimal",A5.w2,D.d0U,4279179050,4282865001,D.cvA,D.dg)
D.eou=new B.z(4278979081,4280886564)
D.eoO=new B.z(4280031511,4278979081)
D.eoC=new B.z(4279308561,4281148438)
D.eot=new B.z(4278979081,4280031511)
D.dfj=w([D.eou,D.eoO,D.eoC,D.eot],x.n)
D.cvO=w([4292128567,4294829706,4289241758],x.t)
D.e1O=new C.nO("elegant","Elegant",A.m0,D.dfj,4294898631,3873957348,D.cvO,D.aGO)
D.eoQ=new B.z(4280159034,4282058596)
D.eoq=new B.z(4278916151,4280163147)
D.eoY=new B.z(4281208933,4278916151)
D.eoH=new B.z(4279502891,4283178389)
D.dmp=w([D.eoQ,D.eoq,D.eoY,D.eoH],x.n)
D.cvX=w([4294296657,4292128567,4291081725],x.t)
D.e1I=new C.nO("royal","Royal Gold",A.jb,D.dmp,4294965222,3874084351,D.cvX,D.mK)
D.eof=new B.z(4278464302,4280163147)
D.eop=new B.z(4278916151,4279455306)
D.eoR=new B.z(4280163147,4283040846)
D.eoc=new B.z(4278332450,4281413249)
D.d74=w([D.eof,D.eop,D.eoR,D.eoc],x.n)
D.cvB=w([4281193663,4289170426,4294210230],x.t)
D.e1P=new C.nO("aurora","Aurora Glow",A.e2,D.d74,4293983738,3869766608,D.cvB,D.dg)
D.wq=w([D.e1L,D.e1H,D.e1F,D.e1G,D.e1K,D.e1M,D.e1N,D.e1J,D.e1O,D.e1I,D.e1P],B.av("O<nO>"))
D.bhA=new B.v(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.ddR=w([A.qU,D.bhA,A.qU],x.O)
D.de7=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.deb=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eE1=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.euj=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eyT=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.elL=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.exx=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.evM=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eA5=new B.z("Surprise me","")
D.deK=w([D.eE1,D.euj,D.eyT,D.elL,D.exx,D.evM,D.eA5],x.L)
D.baH=new B.v(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.blx=new B.v(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.dfx=w([A.c,D.baH,D.blx],x.O)
D.dhD=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aGn=new C.kV(0,"heritageGold")
D.bgc=new B.v(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hhL=w([D.bgc,Y.aeP,A.ay],x.O)
D.dGh=new C.jn("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aGn,4294570461,4284234270,4292128567,D.jS)
D.aGo=new C.kV(1,"heritageCrimson")
D.b99=new B.v(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bew=new B.v(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bln=new B.v(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hho=w([D.b99,D.bew,D.bln],x.O)
D.dGa=new C.jn("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aGo,4294635750,4285213214,4292912216,D.jS)
D.dhH=w([D.a5k,D.a5i,D.dGh,D.dGa,D.a5d,D.a5g],x.h)
D.dM4=new C.ry(1,"circuit")
D.dMx=new C.ma("neural","Neural Link","Robotic",D.dM4,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dM3=new C.ry(0,"grid")
D.dMu=new C.ma("signal","Signal Grid","Robotic",D.dM3,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dM9=new C.ry(2,"hexes")
D.dMf=new C.ma("core","Core Protocol","Robotic",D.dM9,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGL=new C.ry(11,"diagonal")
D.dMq=new C.ma("steel","Steel Tech","Robotic",D.aGL,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGM=new C.ry(3,"rings")
D.dMe=new C.ma("vault","Vault Gold","Robotic",D.aGM,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dM7=new C.ry(13,"leaves")
D.dMh=new C.ma("forest","Forest Morning","Nature",D.dM7,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGN=new C.ry(5,"waves")
D.dMo=new C.ma("ocean","Ocean Calm","Nature",D.aGN,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dMa=new C.ry(6,"sunset")
D.dMt=new C.ma("sunset","Sunset Glow","Nature",D.dMa,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dMb=new C.ry(7,"mountains")
D.dMg=new C.ma("mountain","Mountain Air","Nature",D.dMb,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dMc=new C.ry(8,"stars")
D.dMn=new C.ma("night","Night Sky","Nature",D.dMc,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5D=new C.ry(4,"orbs")
D.dMl=new C.ma("aurora","Aurora","Nature",D.a5D,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dMv=new C.ma("sand","Sand Dune","Nature",D.aGN,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dMd=new C.ry(9,"rays")
D.dMk=new C.ma("golden","Golden Hour","Warm",D.dMd,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dMi=new C.ma("royal","Royal Purple","Warm",D.aGL,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dMj=new C.ma("rose","Rose Petal","Warm",D.a5D,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dM6=new C.ry(12,"blocks")
D.dMm=new C.ma("electric","Electric Blue","Bold",D.dM6,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dMw=new C.ma("mint","Fresh Mint","Bold",D.a5D,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dM8=new C.ry(14,"minimal")
D.dMs=new C.ma("white","Clean White","Clean",D.dM8,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dM5=new C.ry(10,"frame")
D.dMp=new C.ma("midnight","Midnight Gold","Clean",D.dM5,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dMr=new C.ma("community","Community Green","Clean",D.aGM,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3U=w([D.dMx,D.dMu,D.dMf,D.dMq,D.dMe,D.dMh,D.dMo,D.dMt,D.dMg,D.dMn,D.dMl,D.dMv,D.dMk,D.dMi,D.dMj,D.dMm,D.dMw,D.dMs,D.dMp,D.dMr],B.av("O<ma>"))
D.di3=w([D.B2,A.vt,A.hL,A.c_],x.O)
D.dil=w([D.afF,D.jn],x.O)
D.div=w(["pdf","docx","txt","md"],x.s)
D.eNf=new B.bj(-3,150,34)
D.eNg=new B.bj(-3,214,62)
D.eNh=new B.bj(-3,288,62)
D.djl=w([D.eNf,D.eNg,D.eNh],B.av("O<+(K,K,K)>"))
D.djQ=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dks=w(["Write","Design","Print & fold"],x.s)
D.jT=new C.uM(2,"triangle")
D.D4=new C.uM(3,"arrow")
D.fw=new C.uM(4,"line")
D.jU=new C.uM(5,"parallelogram")
D.dkv=w([D.bg,D.eP,D.jT,D.D4,D.fw,D.jU,D.ld],x.m)
D.ena=new B.z(240,96)
D.epW=new B.z(560,46)
D.dkB=w([D.ena,D.epW],x.G)
D.hhW=new C.xE(0,"classic")
D.dI6=new C.nK("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aGn,4294570461,4282000405,4284234270)
D.dIi=new C.nK("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aGo,4294635750,4281999378,4285213214)
D.dI7=new C.nK("elegant_navy","Umoja Mzuri",y.s,D.a5x,4294967035,4279378237,4290283019)
D.dIk=new C.nK("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGw,4294966515,4281016592,4289102906)
D.dIm=new C.nK("kente_sunset","Kente ya Jua",y.H,D.aGp,4294964964,4282000405,4279983648)
D.dI4=new C.nK("indigo_mudcloth","Nguo ya Indigo",y.n,D.aGq,4294439140,4279903102,4279903102)
D.dI9=new C.nK("adinkra_royal","Muhuri wa Adinkra",y.z,D.aGr,4294965484,4285218591,4287322667)
D.dIe=new C.nK("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGs,4294244340,4279196764,4279196764)
D.dIg=new C.nK("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGt,4294505710,4279970378,4291058750)
D.hhX=new C.xE(1,"ringsNdoa")
D.dI8=new C.nK("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rC,4294966259,4279378237,4291404327)
D.hhZ=new C.xE(2,"coupleCards")
D.dIj=new C.nK("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rC,4294966259,4279378237,4291404327)
D.hi_=new C.xE(3,"kuhoweshaForm")
D.dIf=new C.nK("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CZ,4294966519,4279378237,4291404327)
D.hi0=new C.xE(4,"mahariPande")
D.dI5=new C.nK("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rC,4294966259,4279904068,4291404327)
D.hi1=new C.xE(5,"familiaMti")
D.dIl=new C.nK("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aGu,4294966776,4280241466,4291404327)
D.hi2=new C.xE(6,"ndoaSafi")
D.dIc=new C.nK("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CZ,4294966519,4279378237,4291404327)
D.hi3=new C.xE(7,"peteWide")
D.dIb=new C.nK("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rC,4294966259,4282001936,4291404327)
D.hi4=new C.xE(8,"muhuriCrest")
D.dIa=new C.nK("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rC,4294966259,4279378237,4291404327)
D.hi5=new C.xE(9,"fomuWazi")
D.dId=new C.nK("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CZ,4294966519,4279904068,4291404327)
D.hhY=new C.xE(10,"upendoOrnate")
D.dIh=new C.nK("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aGv,4294965493,4286200650,4291404327)
D.R8=w([D.dI6,D.dIi,D.dI7,D.dIk,D.dIm,D.dI4,D.dI9,D.dIe,D.dIg,D.dI8,D.dIj,D.dIf,D.dI5,D.dIl,D.dIc,D.dIb,D.dIa,D.dId,D.dIh],B.av("O<nK>"))
D.D2=new C.arj(0,"landscape169")
D.oj=new C.arj(1,"portrait916")
D.dlo=w([D.D2,D.oj],B.av("O<arj>"))
D.az8=w([A.hL,A.bL,A.cY,A.i2,A.c],x.O)
D.uv=w([A.c_,A.ik],x.O)
D.eme=new B.z(1000,"M")
D.erm=new B.z(900,"CM")
D.epP=new B.z(500,"D")
D.eo5=new B.z(400,"CD")
D.emf=new B.z(100,"C")
D.ern=new B.z(90,"XC")
D.epQ=new B.z(50,"L")
D.eo6=new B.z(40,"XL")
D.eml=new B.z(10,"X")
D.erz=new B.z(9,"IX")
D.eq7=new B.z(5,"V")
D.epA=new B.z(4,"IV")
D.emQ=new B.z(1,"I")
D.dm5=w([D.eme,D.erm,D.epP,D.eo5,D.emf,D.ern,D.epQ,D.eo6,D.eml,D.erz,D.eq7,D.epA,D.emQ],x.ek)
D.eOj=new B.cv(["open",A.j9,"Open & write","Keep writing this book"])
D.eOK=new B.cv(["print",A.ug,"Print as a book","Fold and staple it"])
D.dmf=w([D.eOj,D.eOK],B.av("O<+(n,a1,n,n)>"))
D.dmX=w([D.a5F,D.mK,D.Ih,D.Sh,D.dg,D.Sg],x.i)
D.eEK=new B.z(-1,"Small")
D.em_=new B.z(0,"Normal")
D.emP=new B.z(1,"Big")
D.enq=new B.z(2,"Huge")
D.dnv=w([D.eEK,D.em_,D.emP,D.enq],x.ek)
D.dnV=w([49,65,89,38,83,89],x.t)
D.do1=w([A.vt,A.hL,A.c_],x.O)
D.dot=w([D.dg,D.mK,D.uE,D.a5F,D.Ih,D.Sh],x.i)
D.aEp=new B.dv([0,D.M5,8,D.agZ,12,D.ah_],B.av("dv<H,a3N>"))
D.e7D={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.ble=new B.v(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cRL=w([A.bL,D.ble],x.O)
D.dbz=w([A.b1,A.bi],x.O)
D.d6b=w([A.c6,A.aR,A.bH],x.O)
D.dmg=w([A.cr,A.br],x.O)
D.cZG=w([A.bb,A.f1],x.O)
D.d8V=w([A.b5,A.fc],x.O)
D.bee=new B.v(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d8b=w([D.bee,A.oO],x.O)
D.d2F=w([A.h6,A.xD],x.O)
D.cZu=w([A.bu,A.c8],x.O)
D.dr8=new B.bt(D.e7D,[D.cRL,K.apz,D.dbz,D.d6b,D.dmg,D.cZG,D.d8V,D.d8b,D.d2F,D.cZu],B.av("bt<n,ai<v>>"))
D.e6U={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4w=new B.bt(D.e6U,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.av("bt<n,n>"))
D.a4D=new B.bt(A.hX,[],B.av("bt<H,+icon3d,picture(n?,n?)>"))
D.dvq=new F.N0(30,null)
D.dAu=new F.my("Chapter 1","","","")
D.dl9=w([D.dAu],x.B)
D.dAy=new F.ro("My Book","","",D.dl9,E.aFH)
D.dAw=new F.uC("starry",null,null,null,null,"","","")
D.dAz=new F.ro("Dream Big","","",E.a3B,D.dAw)
D.dAx=new F.uC("story",null,null,null,null,"","","")
D.dAA=new F.ro("Little Lion","","",E.a3B,D.dAx)
D.dAv=new F.uC("vintage",null,null,null,null,"","","")
D.dAB=new F.ro("Our Story","","",E.a3B,D.dAv)
D.dDy=new C.Ew("","NGMY","","")
D.dKK=new C.zD("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e1E=new C.b19(null,null,null,null)
D.e3m=new C.aro(null)
D.e3y=new C.arS(0,"smaller")
D.e3z=new C.arS(1,"bigger")
D.aH0=new C.arS(2,"fit")
D.eau=new B.x(3,6)
D.eaE=new B.x(4,8)
D.ee6=new B.D(E.ahP,T.acH,null)
D.eea=new B.D(A.Z_,A.mk,null)
D.bKM=new B.ae(A.l6,16,A.bX,null,null,null)
D.eee=new B.D(A.ip,D.bKM,null)
D.b8y=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.eeq=new B.D(A.FT,D.b8y,null)
D.bV8=new B.ae(A.cw,16,A.aB,null,null,null)
D.eeu=new B.D(A.ex,D.bV8,null)
D.fuk=new B.y("Play",null,A.ov,null,null,null,null,null,null,null,null,null)
D.dbP=w([U.ao3,A.rQ,D.fuk],x.p)
D.eSU=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dbP,null)
D.eex=new B.D(A.nf,D.eSU,null)
D.b8H=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eYJ=new B.a7(20,20,D.b8H,null)
D.eeD=new B.D(A.ip,D.eYJ,null)
D.fDz=new B.y("Seconds per slide",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.eeL=new B.D(A.bj,D.fDz,null)
D.eg5=new C.a8F(2,"print")
D.eg8=new B.iR(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ehL=new B.hf("/Annot")
D.ehN=new B.hf("/URI")
D.fox=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ejP=new B.jp("share",48,D.fox,null,B.av("jp<n>"))
D.bV2=new B.ae(A.e2,14,A.eE,null,null,null)
D.ejY=new B.cM(null,-2,-2,null,null,null,D.bV2,null)
D.cTS=w([H.afi,A.K],x.O)
D.c0D=new B.a8(A.a3,A.a8,A.x,D.cTS,null,null)
D.b1e=new B.o(null,null,null,null,null,D.c0D,A.n)
D.bqj=new B.kS(D.b1e,A.bf,null,null)
D.ek9=new B.cM(0,0,null,0,8,null,D.bqj,null)
D.dgB=w([A.hM,A.mp,A.c9],x.O)
D.ekN=new B.c_(A.A,0.5,A.x,null,0,D.dgB,null,null)
D.enj=new B.z(0.22,A.bi)
D.erT=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.etZ=new B.z(0.5,A.hh)
D.eDa=new B.z(0.78,A.aV)
D.eO9=new B.cv([A.by,0.22,0.7,2.6])
D.eOf=new B.cv([A.bb,0.36,1.2,1.3])
D.eOl=new B.cv([A.dM,0.28,0.2,0.4])
D.eOr=new B.cv([A.cC,0.05,0.3,0.35])
D.eOx=new B.cv([A.bu,0.28,0.9,0])
D.eOF=new B.cv([A.aD,-0.25,-0.15,0.45])
D.ePv=new B.cv([A.c6,0.42,1,4.1])
D.eSC=new B.a9C(9)
D.bLT=new B.ae(A.GO,28,A.bH,null,null,null)
D.fE7=new B.y("NGMY News",null,A.df,null,null,null,null,null,null,null,null,null)
D.bAm=new B.by(1,A.bd,D.fE7,null)
D.djT=w([D.bLT,A.as,D.bAm],x.p)
D.eSO=new B.c9(A.aM,A.e,A.j,A.m,null,A.p,null,0,D.djT,null)
D.bM3=new B.ae(A.o5,16,A.c,null,null,null)
D.fFG=new B.y("Book",null,A.os,null,null,null,null,null,null,null,null,null)
D.do0=w([D.bM3,A.ei,D.fFG],x.p)
D.eSW=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.do0,null)
D.bSE=new B.ae(A.jM,10,A.c,null,null,null)
D.fso=new B.y("Pro",null,A.nw,null,null,null,null,null,null,null,null,null)
D.dbU=w([D.bSE,A.qu,D.fso],x.p)
D.eT_=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dbU,null)
D.fDx=new B.y("Make a newspaper",null,A.Ug,null,null,null,null,null,null,null,null,null)
D.c1P=w([E.a1x,A.ab,D.fDx],x.p)
D.eT0=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.c1P,null)
D.bRa=new B.ae(A.l3,18,A.bL,null,null,null)
D.fuy=new B.y("Ending celebration",null,A.hI,null,null,null,null,null,null,null,null,null)
D.diW=w([D.bRa,A.bn,D.fuy],x.p)
D.eT3=new B.c9(A.aM,A.e,A.j,A.m,null,A.p,null,0,D.diW,null)
D.bSq=new B.ae(A.j9,18,A.k6,null,null,null)
D.f8A=new B.F(!0,A.k6,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.y("Write",null,D.f8A,null,null,null,null,null,null,null,null,null)
D.d0I=w([D.bSq,A.ab,D.fFZ],x.p)
D.eTa=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.d0I,null)
D.fsm=new B.y("Download picture",null,A.or,null,null,null,null,null,null,null,null,null)
D.bCP=new B.qs(A.e_,A.A,A.f,D.fsm,null)
D.bD_=new B.dr(1,A.cn,D.bCP,null)
D.dci=w([L.anV,A.ab,D.bD_],x.p)
D.eTb=new B.c9(A.aM,A.b7,A.j,A.m,null,A.p,null,0,D.dci,null)
D.bNR=new B.ae(A.GO,22,A.bH,null,null,null)
D.fC6=new B.y("NGMY NEWS",null,K.a8d,null,null,null,null,null,null,null,null,null)
D.cTi=w([D.bNR,A.ab,D.fC6],x.p)
D.eTk=new B.c9(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.cTi,null)
D.eTw=new B.pc(!1,!1,null,T.Wd,null,A.bZ,null,null,null)
D.a7m=new B.jk([D.cl,D.dg,D.uE,D.Ig,D.uF,D.aGR],B.av("jk<hF>"))
D.e9i={title:0,quote:1,closing:2,bio:3}
D.eUH=new B.dD(D.e9i,4,x.M)
D.e7c={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eUK=new B.dD(D.e7c,5,x.M)
D.e8B={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a7n=new B.dD(D.e8B,8,x.M)
D.e7O={Design:0,Transitions:1,Insert:2}
D.eUP=new B.dD(D.e7O,3,x.M)
D.hid=new B.jk([D.a5G],B.av("jk<w3>"))
D.e7X={float3d:0,drift:1,pulse:2}
D.eUT=new B.dD(D.e7X,3,x.M)
D.aOb=new B.jk([D.Id,D.Ie,D.If],B.av("jk<mC>"))
D.e7a={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aOe=new B.dD(D.e7a,14,x.M)
D.hie=new B.dD(A.hX,0,B.av("dD<w3>"))
D.e7U={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Tm=new B.dD(D.e7U,4,x.M)
D.e73={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aOh=new B.dD(D.e73,30,x.M)
D.e82={circle:0,triangle:1,hexagon:2,diamond:3}
D.eVf=new B.dD(D.e82,4,x.M)
D.eXE=new B.as(390,844)
D.eYt=new B.a7(20,20,A.KV,null)
D.aP4=new B.a7(null,2.5,null,null)
D.eYD=new B.a7(18,18,A.KV,null)
D.bSu=new B.ae(A.jb,19,A.c,null,null,null)
D.eYO=new B.a7(38,38,D.bSu,null)
D.bQJ=new B.ae(A.yQ,22,A.c,null,null,null)
D.eYQ=new B.a7(40,40,D.bQJ,null)
D.eZo=new B.hP(2,10,10,1.15,null)
D.aPc=new B.hP(2,16,14,0.62,null)
D.byn=new B.Q(32,30,32,40)
D.ba4=new B.v(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bLQ=new B.ae(A.q5,56,D.ba4,null,null,null)
D.ag9=new B.v(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.faF=new B.F(!0,D.ag9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz3=new B.y("Your books will live here.",null,D.faF,null,A.L,null,null,null,null,null,null,null)
D.d3B=w([D.bLQ,A.R,D.fz3],x.p)
D.bpg=new B.fk(A.af,A.e,A.j,A.m,null,A.p,null,0,D.d3B,null)
D.eeJ=new B.D(D.byn,D.bpg,null)
D.eZK=new B.md(D.eeJ,null)
D.fz0=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new B.b1(D.fz0,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fx7=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f_2=new B.b1(D.fx7,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fCa=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f_b=new B.b1(D.fCa,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fCJ=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new B.b1(D.fCJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fvN=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new B.b1(D.fvN,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fJV=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f_W=new B.b1(D.fJV,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fH0=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f06=new B.b1(D.fH0,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fCS=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new B.b1(D.fCS,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fqz=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f16=new B.b1(D.fqz,null,null,null,null,null,null,null,A.iB,null,null,null,null,A.pV,!1,null,null,null,A.r,null)
D.fsw=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new B.b1(D.fsw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fyH=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new B.b1(D.fyH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fyn=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f1r=new B.b1(D.fyn,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEW=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new B.b1(D.fEW,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fmJ=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f1B=new B.b1(D.fmJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ftG=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f1Y=new B.b1(D.ftG,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fID=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f2_=new B.b1(D.fID,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fI9=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f23=new B.b1(D.fI9,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.flF=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f25=new B.b1(D.flF,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fE2=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new B.b1(D.fE2,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fHK=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f2t=new B.b1(D.fHK,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fHB=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new B.b1(D.fHB,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.flx=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f2B=new B.b1(D.flx,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fpy=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f32=new B.b1(D.fpy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGO=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f3e=new B.b1(D.fGO,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fpm=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f3t=new B.b1(D.fpm,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bhi=new B.v(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cRZ=w([A.i2,A.oO,D.bhi,D.ad7,A.i2],x.O)
D.f3R=new B.fW(A.A,0,6.283185307179586,A.x,D.cRZ,null,null)
D.d_V=w([A.bL,A.c_,A.hL,D.B2,A.bL],x.O)
D.aPL=new B.fW(A.A,0,6.283185307179586,A.x,D.d_V,null,null)
D.de5=w([A.c6,A.by,A.bb,A.bo,A.bH,A.c6],x.O)
D.f3W=new B.fW(A.A,0,6.283185307179586,A.x,D.de5,null,null)
D.cU6=w([A.pR,A.oP,A.xB,A.i2,A.pR],x.O)
D.f3X=new B.fW(A.A,0,6.283185307179586,A.x,D.cU6,null,null)
D.de_=w([A.aP,A.bK,A.aL,A.ak,A.aP],x.O)
D.f3Y=new B.fW(A.A,0,6.283185307179586,A.x,D.de_,null,null)
D.dlW=w([A.bu,A.bb,A.by,A.c6,A.bu],x.O)
D.f4_=new B.fW(A.A,0,6.283185307179586,A.x,D.dlW,null,null)
D.bdg=new B.v(1,0,1,0,A.t)
D.bhz=new B.v(1,0,1,1,A.t)
D.beR=new B.v(1,0,0,1,A.t)
D.bbg=new B.v(1,1,0,1,A.t)
D.dhW=w([A.Lb,A.af0,D.bdg,D.bhz,D.beR,D.bbg,A.Lb],x.O)
D.f40=new B.fW(A.A,0,6.283185307179586,A.x,D.dhW,null,null)
D.f4f=new C.avX(2,"immersiveSticky")
D.f4g=new C.avX(3,"edgeToEdge")
D.f4h=new C.avX(4,"manual")
D.f6G=new B.F(!0,A.oJ,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQj=new B.F(!0,A.f2,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7g=new B.F(!0,E.n2,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new B.F(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9V=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa4=new B.F(!0,A.bX,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fap=new B.F(!0,A.eE,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbR=new B.F(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc0=new B.F(!0,A.k5,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new B.rL(!0,A.IA,null,null,null,null,A.du,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcI=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new B.F(!0,A.jp,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdK=new B.F(!0,A.aB,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.egb=new B.iR(1,1,0.7568627450980392,0.027450980392156862)
D.fdO=new B.rL(!0,D.egb,null,null,null,null,A.du,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.af7=new B.v(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aR4=new B.F(!0,D.af7,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdW=new B.F(!0,D.ag9,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdX=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR6=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fez=new B.rL(!0,A.pg,null,null,null,null,A.du,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.feR=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffm=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new B.F(!0,D.af7,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JC=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffR=new B.F(!0,A.c_,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg_=new B.F(!0,A.bK,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgk=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awL,null,null,null)
D.fgn=new B.F(!0,A.cs,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgC=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgO=new B.F(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new B.F(!0,A.aQ,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new B.F(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRH=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRJ=new B.F(!0,A.bX,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmR=new B.v(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fjv=new B.F(!0,D.bmR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRP=new B.F(!0,E.n2,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk_=new B.F(!0,A.bK,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk2=new B.F(!0,O.lo,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcW=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fli=new B.y("NEW",null,D.fcW,null,null,null,null,null,null,null,null,null)
D.flA=new B.y("Hati ya Kuhowesha",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fm1=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fmp=new B.y("Scrollable PDF on this slide",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fn9=new B.y("Big quote mark",null,A.jg,null,null,null,null,null,null,null,null,null)
D.fnc=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fnP=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new B.y("How many slides?",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.foo=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f8D=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new B.y("Luxury FX",null,D.f8D,null,null,null,null,null,null,null,null,null)
D.fp4=new B.y("Font",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fpg=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fj3=new B.F(!0,A.bK,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpv=new B.y("Example  GA847",null,D.fj3,null,null,null,null,null,null,null,null,null)
D.fpV=new B.y("Design shapes",null,A.jg,null,null,null,null,null,null,null,null,null)
D.fq5=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new B.y("Non-stop (loop)",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.fqn=new B.y("Hati ya Kuhoweya",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fqG=new B.y("Photo studio",null,A.fV,null,null,null,null,null,null,null,null,null)
D.fr9=new B.y("Add your picture",null,A.jY,null,null,null,null,null,null,null,null,null)
D.fcg=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fra=new B.y("Enter document code",null,D.fcg,null,A.L,null,null,null,null,null,null,null)
D.frb=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f9L=new B.F(!0,E.n2,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frB=new B.y("Delete this book?",null,D.f9L,null,A.L,null,null,null,null,null,null,null)
D.fep=new B.F(!0,E.n2,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsy=new B.y("Your library",null,D.fep,null,null,null,null,null,null,null,null,null)
D.fsE=new B.y("Delete",null,A.aQZ,null,null,null,null,null,null,null,null,null)
D.fsH=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.DM,null,null,null,null,null,null,null,null,null)
D.fsT=new B.y("Element flies in",null,A.aRa,null,null,null,null,null,null,null,null,null)
D.Uq=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new B.y("Cancel",null,E.aRk,null,null,null,null,null,null,null,null,null)
D.ftF=new B.y("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fhS=new B.F(!0,A.hk,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu4=new B.y("DOCUMENT CODE",null,D.fhS,null,null,null,null,null,null,null,null,null)
D.fuU=new B.y("Quotes",null,G.a8Q,null,null,null,null,null,null,null,null,null)
D.fbD=new B.F(!0,O.lo,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv1=new B.y("Add a picture",null,D.fbD,null,null,null,null,null,null,null,null,null)
D.fv9=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8v,null,A.L,null,null,null,null,null,null,null)
D.fvd=new B.y("Look & feel",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.fvj=new B.y("Rings",null,A.hI,null,null,null,null,null,null,null,null,null)
D.fvp=new B.y("W",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fvz=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Ud,null,A.L,null,null,null,null,null,null,null)
D.fvV=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fwF=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fwU=new B.y("Malipo ya Awamu ya Mahari",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fc5=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new B.y("Create with AI",null,D.fc5,null,A.L,null,null,null,null,null,null,null)
D.fxC=new B.y("Apply look",null,A.hI,null,null,null,null,null,null,null,null,null)
D.fcN=new B.F(!0,A.em,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.y("Type your presentation below",null,D.fcN,null,A.L,null,null,null,null,null,null,null)
D.fys=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,K.aRU,null,A.L,null,null,null,null,null,null,null)
D.fyu=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f7y=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new B.y("Done",null,D.f7y,null,null,null,null,null,null,null,null,null)
D.fyW=new B.y("Delete",null,A.nx,null,null,null,null,null,null,null,null,null)
D.fz5=new B.y("Hati ya Kiapo cha Uongozi",null,A.fx,null,null,null,null,null,null,null,null,null)
D.faX=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA_=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.faX,null,A.L,null,null,null,null,null,null,null)
D.fAm=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new B.y("Layout",null,A.Ui,null,null,null,null,null,null,null,null,null)
D.fB5=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fBd=new B.y("X",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fBO=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A0.DL,null,null,null,null,null,null,null,null,null)
D.fCn=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fCB=new B.y("Hati ya Kuhowa",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fCD=new B.y("Choose a class template",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fCF=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fCM=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fCZ=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fD5=new B.y("Done",null,A.aRG,null,null,null,null,null,null,null,null,null)
D.fDf=new B.y("Ending celebration",null,A.df,null,null,null,null,null,null,null,null,null)
D.fDg=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fDv=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A0.v1,null,null,null,null,null,null,null,null,null)
D.fEs=new B.y("Export presentation",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fEt=new B.y("What would you like to do?",null,D.aR4,null,null,null,null,null,null,null,null,null)
D.fEy=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fF4=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new B.y("Hati (Documents)",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fFl=new B.y("Done",null,A.li,null,null,null,null,null,null,null,null,null)
D.fiU=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFq=new B.y("Delete presentation?",null,D.fiU,null,A.L,null,null,null,null,null,null,null)
D.fFK=new B.y("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fFW=new B.y("\ud83c\udf33",null,A.Jw,null,A.L,null,null,null,null,null,null,null)
D.fGd=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fGk=new B.y("Transfer document",null,A.ou,null,null,null,null,null,null,null,null,null)
D.fGv=new B.y("Add to the slides",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.fGS=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fH6=new B.y("Make a book",null,I.aQC,null,null,null,null,null,null,null,null,null)
D.fHa=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fbw=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHb=new B.y("Keep this page open until it finishes.",null,D.fbw,null,null,null,null,null,null,null,null,null)
D.fHd=new B.y("Making your video",null,A.df,null,null,null,null,null,null,null,null,null)
D.fHi=new B.y("LANGUAGE",null,W.rW,null,null,null,null,null,null,null,null,null)
D.fHp=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fHx=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fHQ=new B.y("Delete from the database?",null,A.jY,null,null,null,null,null,null,null,null,null)
D.fHR=new B.y("H",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fIf=new B.y("NGMY Quotes",null,A.df,null,null,null,null,null,null,null,null,null)
D.fII=new B.y("Cover",null,D.aRP,null,null,null,null,null,null,null,null,null)
D.fIM=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fIN=new B.y("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fJ8=new B.y("Y",null,A.rV,null,null,null,null,null,null,null,null,null)
D.fJj=new B.y("Crop the picture",null,A.li,null,null,null,null,null,null,null,null,null)
D.fJq=new B.y("Edit text",null,A.Jx,null,null,null,null,null,null,null,null,null)
D.fLH=B.dT("a8r")
D.DX=new C.axf(0,"none")
D.aVn=new C.axf(1,"zipCrypto")
D.aVo=new C.axf(2,"aes")
D.h67=new F.Pu("","",null)
D.h7d=new C.bcj(null)
D.h8p=new C.ZC(null)
D.haW=new C.adh(null)
D.haY=new C.aEm(null)
D.hdJ=new C.a_R(null)
D.hdZ=new C.a0n(null)
D.heh=new C.btM(null)})();(function staticFields(){$.hfA=null
$.hfB=null
$.hfC=null
$.hfD=null
$.fYj=B.v9("_lastQuoRemDigits")
$.fYk=B.v9("_lastQuoRemUsed")
$.axB=B.v9("_lastRemUsed")
$.fYl=B.v9("_lastRem_nsh")
$.qe=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7e=B.U(x.N,x.I)
$.fVM=!1
$.hkq=B.U(B.av("kV"),x.N)
$.hkD=B.U(B.av("kV"),x.E)
$.hiD=!1
$.bzi="q"
$.Qu=0
$.CH=B.U(x.N,B.av("ai<zE>"))
$.hiZ=!1
$.fZV=!1
$.hpj=null
$.hTH=B.U(x.N,B.av("aA<n?>"))
$.Ks=""
$.j3=0
$.hcm=function(){var w=x.N
return B.U(w,w)}()
$.hcl=B.U(x.N,x.R)
$.h_f=!1
$.ag_=B.U(x.N,x.E)
$.h03=0
$.bkf=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ii8","D1",()=>C.b9Q(0))
w($,"ii6","a2C",()=>C.b9Q(1))
w($,"ii7","ht_",()=>C.b9Q(2))
w($,"ii5","h41",()=>$.a2C().v6(0))
w($,"ii3","hsY",()=>C.b9Q(1e4))
w($,"ii4","hsZ",()=>B.Ec(8))
w($,"idU","hr_",()=>B.Ec(0))
w($,"ie1","hr3",()=>B.Ec(0))
w($,"ie0","hr2",()=>B.bZA(0))
w($,"ilS","hv0",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4w.gdR(D.a4w),v=v.gae(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"imi","bDM",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mW(new C.fGg(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mW(new C.fGh(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fGi(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mW(new C.fGt(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mW(new C.fGy(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fGz(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mW(new C.fGA(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mW(new C.fGB(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mW(new C.fGC(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fGD(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mW(new C.fGE(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mW(new C.fGj(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mW(new C.fGk(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mW(new C.fGl(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fGm(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mW(new C.fGn(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mW(new C.fGo(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mW(new C.fGp(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mW(new C.fGq(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mW(new C.fGr(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mW(new C.fGs(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mW(new C.fGu(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mW(new C.fGv(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mW(new C.fGw(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mW(new C.fGx(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.av("O<EF>"))})
w($,"ilV","hv2",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["7BK8xjSqCKQs9IeMG7BzBvAKzT8="]=a.current})($__dart_deferred_initializers__);