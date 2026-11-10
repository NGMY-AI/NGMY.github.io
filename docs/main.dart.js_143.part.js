((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,U,A7,Al,Am,C={
u_(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h21(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
K3(d){var w
if(d===0)return $.Dh()
if(d===1)return $.a32()
if(d===2)return $.hxP()
if(Math.abs(d)<4294967296)return C.baQ(A.o.N(d))
w=C.hSE(d)
return w},
baQ(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.u_(4,w)
return new C.o3(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.u_(1,w)
return new C.o3(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.u_(2,w)
return new C.o3(v===0?!1:s,w,v)}v=A.o.ao(A.o.gakJ(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.u_(v,w)
return new C.o3(v===0?!1:s,w,v)},
hSE(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dh()
w=$.hxO()
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
q=new C.o3(!1,r,4)
if(s<0)p=q.mt(0,-s)
else p=s>0?q.dU(0,s):q
return p},
h22(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hkj(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fK(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hke(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h22(d,e,s,g)
w=e+s+1
C.hkj(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hSH(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fK(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fK(u,r)}w&2&&B.aj(g)
g[n]=o},
cKb(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hSF(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
baR(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hkk(d,e,f,g,h,i){var w,v,u,t,s,r
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
hSG(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o3:function o3(d,e,f){this.a=d
this.b=e
this.c=f},
cKc:function cKc(){},
cKd:function cKd(){},
cKe:function cKe(d,e){this.a=d
this.b=e},
cKf:function cKf(d){this.a=d},
aS8:function aS8(d,e){this.a=d
this.b=e},
ha6(d,e,f){var w=new C.Sc(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
Sc:function Sc(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4b:function a4b(d,e){this.a=d
this.b=e},
bIE:function bIE(d){this.a=d
this.c=this.b=0},
hB2(){return new C.bGZ()},
bGZ:function bGZ(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cCl:function cCl(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hSm(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.ck(d.gcZD(d)))
v=f*2+2
u=C.hhY(C.hi_(),64)
t=new C.clA(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.clB(e,1000,v)
s=new Uint8Array(v)
return A.aG.ds(s,0,t.cMP(w,0,s,0))},
cCj:function cCj(d,e){this.c=d
this.d=e},
axM:function axM(d,e){this.a=d
this.b=e},
cCm:function cCm(d,e,f,g){var _=this
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
b9x:function b9x(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cCk:function cCk(){this.a=$},
hjK(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hAM(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bFz:function bFz(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h7L(d,e){e&=31
return(d&$.qj[e])<<e>>>0},
nw(d,e){e&=31
return(d>>>e|C.h7L(d,32-e))>>>0},
hhZ(d){var w,v=new C.atn()
if(B.iK(d))v.aL_(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hi_(){var w=C.hhZ(0),v=new Uint8Array(4),u=x.S
u=new C.clC(w,v,A.EE,5,B.c3(5,0,!1,u),B.c3(80,0,!1,u))
u.ke(0)
return u},
hhY(d,e){var w=new C.cly(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
clx:function clx(){},
clB:function clB(d,e,f){this.a=d
this.b=e
this.c=f},
clv:function clv(){},
atm:function atm(d){this.a=d},
clA:function clA(d){this.a=$
this.b=d
this.c=$},
clw:function clw(){},
clu:function clu(){},
atn:function atn(){this.b=this.a=$},
clz:function clz(){},
clC:function clC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cly:function cly(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
clt:function clt(){},
cls:function cls(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bQE:function bQE(){},
bQF:function bQF(d){this.a=d},
hVD(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bb5:function bb5(){},
cvT:function cvT(){},
bRH:function bRH(d,e){this.a=d
this.b=!1
this.c=e},
bRI:function bRI(){},
i3I(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
awo(d){var w=0,v=B.j(x.H),u
var $async$awo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fcj?2:4
break
case 2:w=5
return B.b(A.kp.h0("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$awo)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kp.h0("SystemChrome.setEnabledSystemUIOverlays",C.i3I(null),u),$async$awo)
case 6:case 3:return B.h(null,v)}})
return B.i($async$awo,v)},
awr:function awr(d,e){this.a=d
this.b=e},
a8N:function a8N(d){this.a=d},
i6q(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fy_(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fy_:function fy_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ao5(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ao5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ahh("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$ao5)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.dc(s,x.f)
t=B.cF(t,new C.c1C(),t.$ti.k("L.E"),x.P)
r=B.C(t,B.a6(t).k("L.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.c1D())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao5,v)},
ao7(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ao7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ao5(),$async$ao7)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gR(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).a7().ae()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nv("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$ao7)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.M)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
w=10
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],t,q),null),$async$ao7)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao7,v)},
c1E(d){return C.hGC(d)},
hGC(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c1E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ahh("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.hX),$async$c1E)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Wj(B.a2(q,x.N,x.z))
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
return B.i($async$c1E,v)},
ao6(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ao6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ao5(),$async$ao6)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nz(r,new C.c1F(d))
w=4
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],x.N,x.z),null),$async$ao6)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aQ8("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$ao6)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao6,v)},
c1C:function c1C(){},
c1D:function c1D(){},
c1F:function c1F(d){this.a=d},
igv(d,e,f){return B.bU(A.K,null,new C.fOt(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fOt:function fOt(d,e,f){this.a=d
this.b=e
this.c=f},
a1j:function a1j(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJU:function aJU(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fae:function fae(d,e){this.a=d
this.b=e},
fai:function fai(d){this.a=d},
faj:function faj(d){this.a=d},
fak:function fak(d,e,f){this.a=d
this.b=e
this.c=f},
faf:function faf(d){this.a=d},
fag:function fag(d){this.a=d},
fah:function fah(d,e){this.a=d
this.b=e},
fa9:function fa9(d){this.a=d},
fa7:function fa7(d){this.a=d},
fa8:function fa8(d){this.a=d},
faa:function faa(d){this.a=d},
fab:function fab(d){this.a=d},
fao:function fao(d,e){this.a=d
this.b=e},
fan:function fan(d,e){this.a=d
this.b=e},
fad:function fad(d,e,f){this.a=d
this.b=e
this.c=f},
fac:function fac(d,e,f){this.a=d
this.b=e
this.c=f},
fal:function fal(d,e){this.a=d
this.b=e},
fam:function fam(d,e){this.a=d
this.b=e},
far:function far(d){this.a=d},
fas:function fas(d,e){this.a=d
this.b=e},
faq:function faq(d,e){this.a=d
this.b=e},
fap:function fap(){},
hmL(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dc(w,x.f)
v=B.cF(v,new C.fhO(),v.$ti.k("L.E"),x.ea)
u=B.a6(v).k("Z<L.E>")
v=B.C(new B.Z(v,new C.fhP(),u),u.k("L.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2g(d){return C.i7G(d)},
i7G(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2g=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fAR(n)
t=4
j=m
i=C
w=7
return B.b(B.a2Q("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2g)
case 7:j.$1(i.hmL(f))
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
return B.b(B.az(),$async$a2g)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hmL(B.aU(J.r(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("Z<L.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fhX(d),$async$a2g)
case 13:p=j.C(new i.Z(h,new g.fAP(f),o),o.k("L.E"))
A.d.aY(p,new C.fAQ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2g,v)},
ahS(d,e){return C.iga(d,e)},
iga(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahS=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fNY(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.ap(n,null)
q=!1
t=4
w=7
return B.b(B.ahK("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahS)
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
return B.b(B.az(),$async$ahS)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahS)
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
return B.i($async$ahS,v)},
fhX(d){return C.hX_(d)},
hX_(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fhX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fhX)
case 7:r=f
q=r.tw("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k3(q,B.T(q).c)
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
return B.i($async$fhX,v)},
agH(d,e){return C.i6j(d,e)},
i6j(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agH=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agH)
case 6:s=g
r=B.aY(x.N)
q=s.tw("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("ct.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$agH)
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
return B.b(C.a2g(d),$async$agH)
case 8:n=g
J.nz(n,new C.fxE(e))
w=9
return B.b(C.ahS(d,n),$async$agH)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agH,v)},
igA(d,e){return B.a4(d,!1).cc(B.dX(new C.fOP(e),!0,null,x.H))},
hSJ(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d5(w.d,new C.cLz())},
ot:function ot(d,e,f){this.a=d
this.b=e
this.c=f},
fhO:function fhO(){},
fhP:function fhP(){},
fAR:function fAR(d){this.a=d},
fAP:function fAP(d){this.a=d},
fAQ:function fAQ(){},
fNY:function fNY(){},
fxE:function fxE(d){this.a=d},
fOP:function fOP(d){this.a=d},
Z_:function Z_(d,e){this.c=d
this.a=e},
ayk:function ayk(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cLz:function cLz(){},
cLB:function cLB(d,e){this.a=d
this.b=e},
cLE:function cLE(d){this.a=d},
cLF:function cLF(d){this.a=d},
cLD:function cLD(){},
cLG:function cLG(d,e){this.a=d
this.b=e},
cLC:function cLC(d){this.a=d},
cLH:function cLH(){},
cLA:function cLA(d,e){this.a=d
this.b=e},
cLI:function cLI(){},
cLv:function cLv(d){this.a=d},
cLt:function cLt(d){this.a=d},
cLu:function cLu(d){this.a=d},
cLw:function cLw(d,e){this.a=d
this.b=e},
cLs:function cLs(d){this.a=d},
cLr:function cLr(d){this.a=d},
cLp:function cLp(d,e){this.a=d
this.b=e},
cLq:function cLq(d){this.a=d},
cLy:function cLy(){},
cLx:function cLx(d){this.a=d},
cLo:function cLo(d,e){this.a=d
this.b=e},
cLn:function cLn(d,e){this.a=d
this.b=e},
cLm:function cLm(d,e){this.a=d
this.b=e},
cLJ:function cLJ(d){this.a=d},
YY:function YY(d,e,f){this.c=d
this.d=e
this.a=f},
aFI:function aFI(d,e,f){this.a=d
this.b=e
this.c=f},
ayg:function ayg(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cKQ:function cKQ(d){this.a=d},
cKP:function cKP(d){this.a=d},
cKS:function cKS(d,e,f){this.a=d
this.b=e
this.c=f},
cL_:function cL_(){},
cL0:function cL0(d){this.a=d},
cKT:function cKT(d,e,f){this.a=d
this.b=e
this.c=f},
cKR:function cKR(d,e){this.a=d
this.b=e},
cKV:function cKV(d,e){this.a=d
this.b=e},
cKW:function cKW(d,e){this.a=d
this.b=e},
cKX:function cKX(d,e){this.a=d
this.b=e},
cKU:function cKU(d){this.a=d},
cKZ:function cKZ(d){this.a=d},
cKY:function cKY(d,e){this.a=d
this.b=e},
cL5:function cL5(d){this.a=d},
cL1:function cL1(d,e){this.a=d
this.b=e},
cL2:function cL2(d,e){this.a=d
this.b=e},
cL3:function cL3(d,e){this.a=d
this.b=e},
cL4:function cL4(d,e){this.a=d
this.b=e},
ayi:function ayi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ia2(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eb(v,x.cK).bM(new C.fFm(),x.H).eP(new C.fFn())}}else if(s)C.hog()}catch(t){}},
hog(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eb(v,x.cK).eP(new C.fm3())}catch(u){}},
ia5(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fFm:function fFm(){},
fFn:function fFn(){},
fm3:function fm3(){},
hsW(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ea(v,w,"").split(":"))},
hsT(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lg)return null
return A.a.b7(w,14)},
h6t(d){var w
if(d.b!==D.lg)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b7(w,21)},
iav(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hsX(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
iaq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l9(0,f)
t=x.N
u=B.cF(u,new C.fGl(),B.a6(u).k("L.E"),t)
s=B.C(u,B.a6(u).k("L.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l9(0,f),u=new B.K2(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.RU(A.a.aq(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.RU(A.a.b7(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cB(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
iao(d,e){var w,v,u,t,s,r=B.a6(e).k("cv<1>"),q=B.C(new B.cv(e,r),r.k("L.E"))
A.d.aY(q,new C.fGk())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.M)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aR7(w,u,s,0)}return w},
ias(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a5z:$.hzQ(),s=x.N,r=B.U(s,s)
for(s=t.gdV(t),s=s.gaf(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
hsU(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fiQ(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
if(C.hsW(q)===e)return q}return null},
iat(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b7(v,u)
return A.d.gI(D.Hs).a},
iau(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aet(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aet(0,0,0)
v=C.fiQ(b6,b0)
u=C.fiQ(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ias(b2,C.iaq(C.hsU(b2),v.r))
if(s.a!==0){u.r=C.iao(C.hsU(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){l=C.hsW(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.eo(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fiQ(b6,n)
i=C.fiQ(b5,n)
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
a0=C.h6t(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.M)(a1),++a7){a8=a1[a7]
if(C.hsT(a8)===a0||C.h6t(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Rp(a1,new C.fGr(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eO(""+1000*a6+"_"+a9,D.lg,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,d.at,D.bh,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aet(k,t,e)},
iap(d){var w=C.iat(d)
if(d.w==="hati_kuhowa")return C.hsg("",w)
return C.hsf("",w)},
fGl:function fGl(){},
fGk:function fGk(){},
fGr:function fGr(d){this.a=d},
hnZ(){var w=new B.V(Date.now(),0,!1),v=new C.fl6()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
h6C(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fHj(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lg&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hta(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fHj(d)
w=B.bi(u)
if(w==null)return!C.fHj(d)
return new B.V(Date.now(),0,!1).a7().d0(w.a7().bS(18e9))},
iba(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a7().ae()},
hKF(d){return A.a.i(d).toLowerCase()},
aqn(d){return C.hKH(d)},
hKH(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqn=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqn)
case 7:r=f
p=r.tw("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Y:p
o=q
o=new B.N(o,C.ieM(),B.T(o).k("N<1,n>")).c0(0,new C.ccV())
o=B.df(o,o.$ti.k("L.E"))
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
return B.i($async$aqn,v)},
aqm(d,e){return C.hKG(d,e)},
hKG(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqm=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqn(d),$async$aqm)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqm)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qs(r)),$async$aqm)
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
return B.i($async$aqm,v)},
aqo(d,e){return C.hKI(d,e)},
hKI(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqo=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqn(d),$async$aqo)
case 3:r=g
if(!J.hz(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqo)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qs(r)),$async$aqo)
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
return B.i($async$aqo,v)},
VH(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$VH=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h_o&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$VH)
case 7:r=a7
q=B.aU(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aN(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jZ(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aI(o,J.k(n.a),C.Wj(B.a2(f.a(n.b),e,a0)))}$.a7A=o}}t=2
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
return B.b(B.c8(),$async$VH)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uf("civic_hati_kiapo_uongozi",null,A.eo),$async$VH)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jZ(f.a(J.r(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aI(k,J.k(j.a),C.Wj(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7A.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a7A.n(0,i.a,i.b)}w=20
return B.b(C.aqp(),$async$VH)
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
case 16:case 9:$.h_o=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VH,v)},
aqp(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqp=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqp)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7A,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aI(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.ap(r,null)),$async$aqp)
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
return B.i($async$aqp,v)},
b0a(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b0a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.VH(!1),$async$b0a)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7A.h(0,t)
r=s==null?null:s.hJ()
if(r==null){u=null
w=1
break}u=C.bD4(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0a,v)},
a7B(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7B=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7A.n(0,d,o)
$.h_o=!0
w=3
return B.b(C.aqp(),$async$a7B)
case 3:w=4
return B.b(B.c8(),$async$a7B)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7A,n=new B.cH(n,B.a6(n).k("cH<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aI(r,q.a,q.b.ag())}w=9
return B.b(B.nv("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a7().ae()],e,x.z),null),$async$a7B)
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
return B.i($async$a7B,v)},
aqq(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a6d(A.eK),$async$aqq)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fk(),$async$aqq)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b09(t,d),$async$aqq)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqq,v)},
b09(d,e){return C.hKJ(d,e)},
hKJ(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b09=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b09)
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
return B.b(p.xd(q,new Uint8Array(B.ck(d)),D.bGk),$async$b09)
case 8:n=p.CP(q)
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
return B.i($async$b09,v)},
KS(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cT,l,m,n)},
fky(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
h3z(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.k.E(i*0.0017,0.02,0.06)
return C.es(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cT,g,e,f)},
fk6(d,e,f,g){return C.fky(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h3A(d,e,f,g,h,i,j,k){var w=C.cE()
return C.es(A.qJ,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cT,g,e,f)},
hnY(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ea(v,w,"").split(":"))},
bD4(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.M)(t),++n){m=t[n]
l=C.hnY(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lg&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hJ()}h=C.h67(u)
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
l=C.hnY(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lg&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fFk(a2))}else A.d.bs(a1.z,new C.fFl())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fHj(a0))a0.ax=a6.f.a7().ae()
return a0},
h67(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fI6(D.a6z),l=C.cE(),k=x.u,j=B.a([C.es(A.bi,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cE(),m,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cl,D.lK,1,0,0)],k),i=B.a([],k)
i.push(C.KS("NGMY",A.L,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KS("TAREHE:",A.bi,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h3z("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hnZ()))
i.push(C.fk6(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KS("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KS("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fky(0,0.002,D.fD,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h3A("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h3A("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h3A("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fky(268435456,0.175,D.bh,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KS("VIDEO YA KIAPO",A.bi,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.es(A.bi,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cl,D.lK,0.77,0.115,0.492))
i.push(C.KS("Rais Anayeapa:",A.bi,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KS("Jina:",A.bi,p,13,A.bp,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h3z("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fk6(0.195,0.7130000000000001,0.62,n))
i.push(C.KS("Sahihi:",A.bi,p,13,A.bp,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.es(A.bi,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,0.38,0.21500000000000002,0.73))
i.push(C.fk6(0.21500000000000002,0.795,0.38,n))
i.push(C.KS("Tarehe:",A.bi,p,13,A.bp,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h3z("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hnZ()))
i.push(C.fk6(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fky(0,0.032,D.bh,o,1,"state_box",0.72,0.14,0.875),C.KS("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bp,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rE(4294967035,t,0,0,j,l,D.qz,"","",u,D.dh)
return C.BW(t,t,t,t,D.ov,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agT(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agT=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.f73)
w=1
break}w=3
return B.b(C.VH(!0),$async$agT)
case 3:w=4
return B.b(C.b0a(p),$async$agT)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hta(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bit,null,new C.fAc(p),f,!0,!0,!1,A.lL,!1,!1,x.N),$async$agT)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ci(null,null,!0,null,new C.fAd(),f,null,!0,!0,x.y),$async$agT)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h67(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h67(p))
case 1:return B.h(u,v)}})
return B.i($async$agT,v)},
fl6:function fl6(){},
ccV:function ccV(){},
fFk:function fFk(d){this.a=d},
fFl:function fFl(){},
fAc:function fAc(d){this.a=d},
fAa:function fAa(d){this.a=d},
fAb:function fAb(d){this.a=d},
fAd:function fAd(){},
fA8:function fA8(d){this.a=d},
fA9:function fA9(d){this.a=d},
aqV:function aqV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEw:function aEw(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
efF:function efF(d){this.a=d},
efD:function efD(d){this.a=d},
efE:function efE(d){this.a=d},
efG:function efG(d){this.a=d},
efH:function efH(d){this.a=d},
wK(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bh,4280172719,2,d,0,0,"",D.cl,D.cT,l,m,n)},
hnB(d,e,f){var w=4291404327
return B.a([C.qi(0,f,D.eS,w,2,"ring_l",f,d-f*0.42,e),C.qi(0,f,D.eS,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fjx(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qi(4294967288,f,D.eS,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qi(h,s,D.eS,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qi(h,f*0.46,D.eS,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qi(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
fjw(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.es(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,l,0,0,"",D.cl,D.cT,g,e,f)},
bAu(d,e,f,g){return C.qi(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hnA(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qi(0,0.036,D.bh,h,1.4,"banner_box_"+d,w,v,e),C.wK(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hsV(){var w=new B.V(Date.now(),0,!1),v=new C.fGq()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hnC(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wK(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fjw("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bAu(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wK("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,s,t,g-0.004),C.bAu(t,g+0.044,s,w)],x.u)},
ahj(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dmM,D.cpM,D.deO,D.dgJ],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.M)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
h2P(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fI6(d.d),v=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),w,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,1,0,0)],x.u)
A.d.v(v,C.hZx(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hZx(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wK("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hnB(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hnB(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fjx(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fjx(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wK("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qi(0,0.062,D.eS,b1,1.6,"crest_o",0.11,0.445,0.012),C.qi(0,0.046,D.eS,b1,1,"crest_i",0.084,0.458,0.02),C.wK("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qi(0,0.002,D.fD,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qi(b9,0.016,D.lh,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qi(0,0.002,D.fD,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wK("TAREHE:",A.bi,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fjw("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hsV()),C.bAu(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wK(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qi(c0,0.0026,D.bh,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qi(c3.e,0.138,D.bh,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.es(A.bi,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cy,"",0.128,s,a9,"","",0,!1,"",0,D.bh,b3,2,c5,0,0,"",D.cl,D.cT,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qi(0,0.036,D.bh,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.es(A.L,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bh,b3,2,c7,0,0,"",D.cl,D.cT,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hnA(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wK(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fjw("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
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
d=B.a([new C.eO(""+1000*i+"_"+h,D.cT,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bi,a9,D.bh,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eO(""+1000*f+"_"+e,D.f8,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.fD,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eO(""+1000*s+"_"+p,D.cT,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dV,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eO(""+1000*i+"_"+h,D.f8,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eO(""+1000*g+"_"+f,D.cT,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.L,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eO(""+1000*e+"_"+a3,D.f8,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hnA("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a6o||w===D.a6q||w===D.a6n||w===D.a6p){w=t-0.008
A.d.v(c2,C.fjx(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fjx(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qi(0,a4,D.bh,c0,1.3,"wit_table_border",0.82,0.09,t),C.qi(c0,a4,D.bh,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qi(0,0.0022,D.fD,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wK("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wK("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hnC("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hnC("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qi(0,0.11,D.bh,c0,1.2,"mw_box",0.82,0.09,t),C.wK("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wK("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fjw("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bAu(0.215,p,0.3116,b5),C.wK("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.es(A.bi,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,0.3161999999999999,0.5738,s-0.044),C.bAu(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qi(0,0.032,D.bh,c0,1,"state_box",0.7,0.15,a8),C.wK("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
iar(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.h6M(d.d),p=new C.fGm(s),o=new C.fGn(s),n=d.z,m=n===D.a6o||n===D.a6q||n===D.a6n||n===D.a6p,l=n===D.aHx||n===D.a6r||n===D.aHy,k=B.bT(0,B.fQ(q,A.A,t,t,A.cg,A.bV,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a6r?26:16
i.push(new C.fGp().$1$size(w))}if(n===D.aHz)i.push(D.fOD)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iG,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.J(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aQS,p.$1$w(0.9),D.aQS,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bd1,t,n,w,t,t,A.n),t,t,t,t,A.al1,t,t,t))
i.push(A.am)
i.push(new C.fGo(r).$1("NIMETOWE"))
i.push(A.fQ)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.N4,new B.cd(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bA(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b0)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.a_,t,A.b1,A.t,B.a([k,new B.D(A.ajD,B.x(i,A.ak,t,A.e,A.i,0,A.p),t)],j),t)},
hsf(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahj(e,t)
if(r==null)r=A.d.gI(D.Hs)
w=C.cE()
v=C.rE(r.e,t,0,0,C.h2P(r,0.165,y.O,D.dhk,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qz,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BW(t,t,t,t,D.ov,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hsg(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahj(e,t)
if(r==null)r=A.d.gI(D.Hs)
w=C.cE()
v=C.rE(r.e,t,0,0,C.h2P(r,0.165,y.f,D.dcQ,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qz,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BW(t,t,t,t,D.ov,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bEq(d,e,f){var w=0,v=B.j(x.T),u
var $async$bEq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fSh(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEq,v)},
agU(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agU=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fAg(),q),q.k("L.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Mf,null,new C.fAh(p),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agU)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bEq(d,"Hati ya Kuhowa",D.Hs),$async$agU)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lx(d,"Tafuta jimbo\u2026","",A.kj,"Chagua jimbo"),$async$agU)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hsf(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
agV(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agV=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fAk(),q),q.k("L.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Mf,null,new C.fAl(p),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agV)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bEq(d,"Hati ya Kuhoweya",D.Hs),$async$agV)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lx(d,"Tafuta jimbo\u2026","",A.kj,"Chagua jimbo"),$async$agV)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hsg(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agV,v)},
agW(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agW=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fAo(),n),n.k("L.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Mf,null,new C.fAp(m),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agW)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bEq(d,"Malipo ya Awamu ya Mahari",D.Rn),$async$agW)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lx(d,"Tafuta jimbo\u2026","",A.kj,"Chagua jimbo"),$async$agW)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahj(s,D.Rn)
if(q==null)q=A.d.gI(D.Rn)
n=C.cE()
p=C.rE(q.e,null,0,0,C.h2P(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d7t,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qz,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BW(null,null,null,null,D.ov,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agW,v)},
xN:function xN(d,e){this.a=d
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
fGq:function fGq(){},
fGm:function fGm(d){this.a=d},
fGo:function fGo(d){this.a=d},
fGp:function fGp(){},
fGn:function fGn(d){this.a=d},
fSh:function fSh(d,e){this.a=d
this.b=e},
adC:function adC(d,e,f){this.c=d
this.d=e
this.a=f},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e){this.a=d
this.b=e},
ad0:function ad0(d,e,f){this.c=d
this.d=e
this.a=f},
fAg:function fAg(){},
fAh:function fAh(d){this.a=d},
fAe:function fAe(d){this.a=d},
fAf:function fAf(d){this.a=d},
fAk:function fAk(){},
fAl:function fAl(d){this.a=d},
fAi:function fAi(d){this.a=d},
fAj:function fAj(d){this.a=d},
fAo:function fAo(){},
fAp:function fAp(d){this.a=d},
fAm:function fAm(d){this.a=d},
fAn:function fAn(d){this.a=d},
KV(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.es(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cT,k,l,m)},
D_(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
hoj(d,e,f){return C.D_(0,0.002,D.fD,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bAE(d,e,f,g,h){return B.a([C.D_(4294967288,0.032,D.bh,4291404327,1.15,"pill_"+d,g,f,e),C.KV(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h3E(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.D_(0,0.002,D.fD,g,1,"orn_l_"+t,u,d,v),C.D_(h,0.016,D.lh,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.D_(0,0.002,D.fD,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1G(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KV(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.es(A.L,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cD,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cT,t,u,g-0.002),C.hoj(u,g+0.018,t)],x.u)},
hok(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.D_(h,0.028,D.bh,h,0,"chv_"+d,g,e,f),C.D_(w,0.024,D.lh,w,0,"chv_l_"+d,0.024,e-0.008,v),C.D_(w,0.024,D.lh,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KV(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bAD(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KV("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,v,w,f-0.006),C.hoj(w,f+0.016,v)],x.u)},
h6N(d){var w,v
for(w=0;w<19;++w){v=D.RC[w]
if(v.a===d)return v}return null},
icK(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahj(A.a.b7(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahj(A.a.b7(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b7(k,18)
w=C.ahj(u,D.Rn)
v=w==null?l:w.d
if(v==null){w=C.ahj(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h6N(A.a.b7(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hp8.a9(0)
$.hpl.a9(0)
t=C.fI6(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.M)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h7T(d){var w=0,v=B.j(x.T),u
var $async$h7T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fTK(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h7T,v)},
xQ:function xQ(d,e){this.a=d
this.b=e},
nP:function nP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bkd:function bkd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fTK:function fTK(){},
adF:function adF(d){this.a=d},
ek1:function ek1(d,e){this.a=d
this.b=e},
ek0:function ek0(d){this.a=d},
ek_:function ek_(d,e){this.a=d
this.b=e},
afk:function afk(d,e,f){this.c=d
this.d=e
this.a=f},
h6M(d){return $.hpl.c3(0,d,new C.fI8(d))},
fI6(d){return $.hp8.c3(0,d,new C.fI7(d))},
fC(d){return B.fXY(d>>>16&255,d>>>8&255,d&255,255)},
i1F(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hqt(4294570461,4293910718,4284234270,u)
case 1:return C.hqt(4294635750,4293975240,t,4292912216)
case 2:w=C.fi4(s,4294505966,r)
C.bAo(w,14,16,p)
C.kD(w,8,9,464,836,u,1.2)
C.CW(w,2,2,1,1,u,10)
C.CW(w,478,2,-1,1,u,10)
C.CW(w,2,852,1,-1,u,10)
C.CW(w,478,852,-1,-1,u,10)
return w
case 3:return C.fi4(4294966515,4294373082,4289102906)
case 4:return C.hXg(C.fi4(4294376440,4293653998,4290287194))
case 5:w=C.fi4(4294965238,4294437098,4288444980)
C.bAo(w,14,16,4283043359)
C.kD(w,6,7,468,840,u,1)
C.kD(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,n,4294175448)
C.t_(v,n)
C.kD(v,24,24,432,806,4286209070,1)
C.a1t(v,12,12,468,12,o,3,20)
C.a1t(v,12,842,468,842,o,3,20)
C.a1t(v,12,12,12,842,o,3,20)
C.a1t(v,468,12,468,842,o,3,20)
return v
case 7:return C.hVh(4294440434,4293518297,4280228630,r)
case 8:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,m,4293911504)
C.t_(v,m)
C.kD(v,28,28,424,798,l,1)
C.frz(v,28,28,l,k)
C.frz(v,452,28,l,k)
C.frz(v,28,826,l,k)
C.frz(v,452,826,l,k)
return v
case 9:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,j,4294111986)
C.t_(v,j)
C.kD(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fC(p),0,13,0,853)
return v
case 10:return C.hZj(i,4294173372)
case 11:return C.i_q(4294439140,4293449662)
case 12:return C.hV9(h,4294239432)
case 13:return C.hZS(4294244340,4293193448)
case 14:return C.i3f(4294505710,4293780694)
case 15:return C.fh0(4294966259,4294439138,o,p,q)
case 16:return C.fh0(4294966776,4294178544,o,g,g)
case 17:return C.fh0(4294965493,4294504170,o,4286200650,q)
case 18:return C.fh0(4294966519,4294373862,o,p,p)
case 19:return C.hYp()
case 20:return C.hYq()
case 21:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,h,4293976768)
C.t_(v,h)
C.bAo(v,14,16,p)
B.iM(v,!0,C.fC(u),4,475,4,9)
B.iM(v,!0,C.fC(u),4,475,844,849)
B.iM(v,!0,C.fC(u),4,9,4,849)
B.iM(v,!0,C.fC(u),470,475,4,849)
C.a1t(v,10,12,470,12,u,2,16)
C.a1t(v,10,842,470,842,u,2,16)
C.a1t(v,10,12,10,842,u,2,18)
C.a1t(v,470,12,470,842,u,2,18)
C.CW(v,2,2,1,1,t,10)
C.CW(v,478,2,-1,1,t,10)
C.CW(v,2,852,1,-1,t,10)
C.CW(v,478,852,-1,-1,t,10)
C.kD(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,s,4294438872)
C.t_(v,s)
C.kD(v,14,16,452,822,o,2.2)
C.kD(v,22,24,436,806,o,1)
C.h4Z(v,!1,!1,o,p,p,36,14,16)
C.kR(v,240,20,7,o,!0)
C.kR(v,240,834,7,o,!0)
C.kR(v,18,427,7,o,!0)
C.kR(v,462,427,7,o,!0)
return v
case 23:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,i,4293910712)
C.t_(v,i)
B.iM(v,!0,C.fC(u),0,479,0,20)
B.iM(v,!0,C.fC(u),0,479,834,853)
B.iM(v,!0,C.fC(u),0,20,0,853)
B.iM(v,!0,C.fC(u),460,479,0,853)
B.iM(v,!0,C.fC(f),5,474,5,9)
B.iM(v,!0,C.fC(f),5,474,844,848)
B.iM(v,!0,C.fC(f),5,9,5,848)
B.iM(v,!0,C.fC(f),470,474,5,848)
C.kD(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yH(v,e,4294174404)
C.t_(v,e)
C.bAo(v,14,16,p)
B.iM(v,!0,C.fC(u),3,476,3,8)
B.iM(v,!0,C.fC(u),3,476,845,850)
B.iM(v,!0,C.fC(u),3,8,3,850)
B.iM(v,!0,C.fC(u),471,476,3,850)
C.kD(v,9,10,462,834,t,1)
C.kD(v,14,16,452,822,u,1.8)
C.kR(v,240,8,4,u,!0)
C.kR(v,240,846,4,u,!0)
C.kR(v,8,427,4,u,!0)
C.kR(v,472,427,4,u,!0)
C.kR(v,8,8,3,t,!0)
C.kR(v,472,8,3,t,!0)
C.kR(v,8,846,3,t,!0)
C.kR(v,472,846,3,t,!0)
return v}},
yH(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kT(d,!1,A.dg,new B.Sx(s),r,A.d_,1,0,w-1,k,k);++k}},
t_(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e9()
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
if(p!=null)p.jX(u,t,v,r,q,255)}},
kD(d,e,f,g,h,i,j){var w,v=null,u=C.fC(i),t=e+g
B.kT(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kT(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kT(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kT(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
CW(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kT(d,!0,A.dg,C.fC(i),u,A.d_,2,e,e+g*j,f,f)
B.kT(d,!0,A.dg,C.fC(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kT(d,!0,A.dg,C.fC(i),u,A.d_,1,w,e+g*t,v,v)
B.kT(d,!0,A.dg,C.fC(i),u,A.d_,1,w,w,v,f+h*t)},
hqt(d,e,f,g){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yH(v,d,e)
C.t_(v,d)
B.iM(v,!0,C.fC(f),0,479,0,28)
B.iM(v,!0,C.fC(f),0,479,826,853)
B.iM(v,!0,C.fC(f),0,28,0,853)
B.iM(v,!0,C.fC(f),452,479,0,853)
C.kD(v,5,5,470,844,g,1.1)
C.kD(v,28,28,424,798,g,1.6)
C.CW(v,2,2,1,1,g,11)
C.CW(v,478,2,-1,1,g,11)
C.CW(v,2,852,1,-1,g,11)
C.CW(v,478,852,-1,-1,g,11)
return v},
fi4(d,e,f){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yH(v,d,e)
C.t_(v,d)
C.kD(v,14,16,452,822,f,1.6)
C.kD(v,20,22,440,810,f,0.8)
return v},
bAo(d,e,f,g){var w,v=C.fC(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hXg(d){var w,v,u=4291404327
C.bAo(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kR(d,w,8,3,u,!0)
C.kR(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kR(d,7,v,3,u,!0)
C.kR(d,473,v,3,u,!0)}return d},
fuI(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ji(e,f),new B.ji(e+g*n,f),new B.ji(e,f+h*n)],t)
B.a2d(d,C.fC(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ji(s,u),new B.ji(e+g*v,u),new B.ji(s,f+h*v)],t)
B.a2d(d,C.fC(k),t)
t=A.k.V(n*0.39)
C.kR(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kR(d,e+g*t,f+h*3,4,k,!0)
C.kR(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kR(d,e+g*t,f,5,k,!0)
C.kR(d,e,f+h*t,5,k,!0)}},
h4Z(d,e,f,g,h,i,j,k,l){var w,v
C.fuI(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fuI(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fuI(d,k,v,1,-1,e,f,g,h,i,j)
C.fuI(d,w,v,-1,-1,e,f,g,h,i,j)},
a1t(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l9(d,!0,A.dg,new B.ra(p),null,A.d_,j,r,q)}},
ftH(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kT(d,!0,A.dg,new B.ra(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kT(d,!0,A.dg,new B.ra(o),null,A.d_,1.4,q,q,p,p+h*r)}},
hVh(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hq(o,o,A.c7,0,A.e0,854,o,0,3,o,A.c7,480,!1)
C.yH(n,d,e)
C.t_(n,d)
C.kD(n,20,20,440,814,f,1.2)
C.ftH(n,0,0,1,1,g)
C.ftH(n,480,0,-1,1,g)
C.ftH(n,0,854,1,-1,g)
C.ftH(n,480,854,-1,-1,g)
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
B.kT(n,!0,A.dg,new B.ra(p),o,A.d_,1.2,240,r,60,q)}return n},
frz(d,e,f,g,h){var w
C.fy0(d,!0,C.fC(g),13,e,f)
C.fy0(d,!0,C.fC(g),9,e,f)
w=B.a([new B.ji(e,f-4),new B.ji(e+4,f),new B.ji(e,f+4),new B.ji(e-4,f)],x.J)
B.a2d(d,C.fC(h),w)},
kR(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ji(e,v),new B.ji(u,f),new B.ji(e,t),new B.ji(s,f)],x.J)
if(i){B.a2d(d,C.fC(h),r)
return}B.kT(d,!0,A.dg,C.fC(h),w,A.d_,1,e,u,v,f)
B.kT(d,!0,A.dg,C.fC(h),w,A.d_,1,u,e,f,t)
B.kT(d,!0,A.dg,C.fC(h),w,A.d_,1,e,s,t,f)
B.kT(d,!0,A.dg,C.fC(h),w,A.d_,1,s,e,f,v)},
fh_(d,e,f,g,h,i,j){var w,v=B.a([new B.ji(e,f),new B.ji(e+g*28,f),new B.ji(e,f+h*28)],x.J)
B.a2d(d,C.fC(i),v)
v=e+g*14
w=f+h*14
C.kR(d,v,w,6,j,!0)
C.kR(d,v,w,3,i,!0)},
fh0(d,e,f,g,h){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yH(v,d,e)
C.t_(v,d)
C.kD(v,18,18,444,818,f,2)
C.kD(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fC(h),28,451,28,34)
C.fh_(v,18,18,1,1,g,f)
C.fh_(v,462,18,-1,1,g,f)
C.fh_(v,18,836,1,-1,g,f)
C.fh_(v,462,836,-1,-1,g,f)
return v},
hYp(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hq(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
C.yH(r,u,4294240980)
C.t_(r,u)
C.kD(r,10,12,460,830,t,3.2)
C.kD(r,18,20,444,814,s,1.2)
C.kD(r,24,26,432,802,t,1.8)
C.h4Z(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kR(r,w,16,3,t,!0)
C.kR(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kR(r,16,w,3,t,!0)
C.kR(r,464,w,3,t,!0)}return r},
hYq(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hq(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
C.yH(p,s,4294373080)
C.t_(p,s)
C.kD(p,16,18,448,818,r,2.4)
C.kD(p,24,26,432,802,4286209044,1)
w=new C.fjo(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h4Z(p,!1,!0,r,q,q,34,16,18)
return p},
bB4(d,e,f,g,h,i){B.iM(d,!0,C.fC(i),e,e+g,f,f+h)},
bBW(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kT(d,!1,A.dg,new B.Sx(i),null,A.d_,1,e,w,l,l)}},
hZi(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kT(d,!1,A.dg,new B.ra(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
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
B.kT(d,!1,A.dg,new B.ra(r),null,A.d_,1,t,t,f,s);++q}},
hZj(d,e){var w,v,u=null,t=B.hq(u,u,A.c7,0,A.e0,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hZi(t,v,w,30,D.d_O,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bB4(t,44,44,392,766,d)
C.bBW(t,44,44,392,766,d,e)
C.t_(t,d)
C.kD(t,44,44,392,766,4292128567,2.2)
C.kD(t,50,50,380,754,4279898632,0.8)
return t},
i_p(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kR(d,e,f,7,h,!0)
C.kR(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kT(d,!0,A.dg,C.fC(h),o,A.d_,1.6,w,u,v,t)
B.kT(d,!0,A.dg,C.fC(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kT(d,!0,A.dg,new B.ra(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kT(d,!0,A.dg,C.fC(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kT(d,!0,A.dg,C.fC(h),o,A.d_,1.5,e,e,f-8,f+8)
B.l9(d,!0,A.dg,C.fC(h),o,A.d_,2,e,f)}},
i_q(d,e){var w,v,u,t,s=null,r=B.hq(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
B.iM(r,!0,C.fC(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i_p(r,u,v,w,4292391514)}C.bB4(r,46,46,388,762,d)
C.bBW(r,46,46,388,762,d,e)
C.t_(r,d)
C.kD(r,46,46,388,762,4291404327,1.8)
return r},
hlM(d,e,f,g){C.fy0(d,!0,C.fC(g),16,e,f)
C.fy0(d,!0,C.fC(g),11,e,f)
C.kR(d,e,f,6,g,!0)
B.kT(d,!0,A.dg,C.fC(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kT(d,!0,A.dg,C.fC(g),null,A.d_,1.3,e,e,f-14,f+14)},
hV9(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hq(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
B.iM(s,!0,C.fC(4280948752),0,479,0,853)
B.iM(s,!0,C.fC(u),0,479,0,78)
B.iM(s,!0,C.fC(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hlM(s,w,39,t)
C.hlM(s,w,815,t)}C.bB4(s,38,92,404,670,d)
C.bBW(s,38,92,404,670,d,e)
C.t_(s,d)
C.kD(s,38,92,404,670,t,1.8)
C.kD(s,45,99,390,656,4287322667,0.8)
return s},
hZR(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ji(e,f),new B.ji(q-5,w),new B.ji(q,f-(18-Math.abs(r)*3)),new B.ji(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2d(d,new B.ra(o),p)}B.l9(d,!0,A.dg,C.fC(4292128567),null,A.d_,3,e,f)},
hZS(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hq(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
C.yH(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kT(q,!0,A.dg,new B.ra(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kT(q,!0,A.dg,new B.ra(u),s,A.d_,1.1,v,v,0,853)}B.iM(q,!0,C.fC(r),0,479,0,70)
B.iM(q,!0,C.fC(r),0,479,798,853)
for(t=0;t<5;++t)C.hZR(q,70+t*85,48,4292128567)
C.bB4(q,48,78,384,712,d)
C.bBW(q,48,78,384,712,d,e)
C.t_(q,d)
C.kD(q,48,78,384,712,4291404327,1.6)
return q},
i3f(d,e){var w,v,u,t=null,s=4279970378,r=B.hq(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
B.iM(r,!0,C.fC(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kR(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l9(r,!0,A.dg,new B.ra(u),t,A.d_,1,v,w)}C.bB4(r,40,40,400,774,d)
C.bBW(r,40,40,400,774,d,e)
C.t_(r,d)
C.kD(r,40,40,400,774,4291058750,2)
C.kD(r,48,48,384,758,s,0.8)
return r},
l0:function l0(d,e){this.a=d
this.b=e},
fI8:function fI8(d){this.a=d},
fI7:function fI7(d){this.a=d},
fjo:function fjo(d){this.a=d},
fIM(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
i_j(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h3x(d){var w,v,u,t=null,s=A.a.cu(d,"{"),r=A.a.oM(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aN(0,Aj.ahf(A.a.aq(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afJ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vv(null,""),$async$afJ)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nc(n)
if(e==null)s=A.hN
else{r=C.i_j(e)
s=B.a([new B.a0r(A.cJ.gct().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r1(t,d,s,"news",E.FT),$async$afJ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.Lm(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
bDy(d){return C.icq(d)},
icq(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bDy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.ap(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afJ(r,null),$async$bDy)
case 7:q=f
p=C.h3x(q)
if(p==null){u=d
w=1
break}o=d.aDk(p)
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
return B.i($async$bDy,v)},
hpJ(d){var w,v=F.h63(d)
v=B.aL(v,"book","newspaper")
if(F.a2w(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fML(d,e,f,g){return C.iej(d,e,f,g)},
iej(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fML=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fIM(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.htj()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afJ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hpJ(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fML)
case 3:r=m.h3x(i)
if(r==null)throw B.W(y.S)
q=new C.zN(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","").aDk(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a2w(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2w(A.d.aH(t," "))==="sw"?C.bDy(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fML,v)},
bD2(d,e,f,g,h){return C.ia0(d,e,f,g,h)},
ia0(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bD2=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fJ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.M)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.htj()
k=A.X.ap(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afJ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hpJ(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bD2)
case 3:p=j.h3x(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cL(o)){n=d.aDk(B.a2(o,x.N,x.z))
m=A.X.ap(n.ag(),null)!==A.X.ap(d.ag(),null)}else{n=d
m=!1}w=m&&F.a2w(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bDy(n),$async$bD2)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8e(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bD2,v)},
a8e:function a8e(d,e,f){this.a=d
this.b=e
this.c=f},
ih8(d,e){return B.a4(d,!1).cc(B.dX(new C.fTV(e),!0,null,x.H))},
fTV:function fTV(d){this.a=d},
W9:function W9(d,e){this.c=d
this.a=e},
aEN:function aEN(d,e,f,g,h,i,j,k){var _=this
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
emZ:function emZ(d){this.a=d},
emY:function emY(){},
en_:function en_(d){this.a=d},
emX:function emX(d,e){this.a=d
this.b=e},
en0:function en0(){},
emB:function emB(d,e){this.a=d
this.b=e},
emx:function emx(d,e){this.a=d
this.b=e},
emI:function emI(d){this.a=d},
emJ:function emJ(d,e){this.a=d
this.b=e},
emK:function emK(d){this.a=d},
emD:function emD(d,e){this.a=d
this.b=e},
emE:function emE(d,e){this.a=d
this.b=e},
emF:function emF(d,e){this.a=d
this.b=e},
emG:function emG(d){this.a=d},
emH:function emH(d){this.a=d},
emC:function emC(d,e){this.a=d
this.b=e},
emz:function emz(d){this.a=d},
emA:function emA(d){this.a=d},
emQ:function emQ(d){this.a=d},
emR:function emR(d){this.a=d},
emP:function emP(d){this.a=d},
emS:function emS(d,e){this.a=d
this.b=e},
emO:function emO(d,e){this.a=d
this.b=e},
emT:function emT(d){this.a=d},
emN:function emN(d){this.a=d},
emU:function emU(d){this.a=d},
emM:function emM(d){this.a=d},
emV:function emV(d,e){this.a=d
this.b=e},
emL:function emL(d,e){this.a=d
this.b=e},
emW:function emW(d){this.a=d},
emy:function emy(d,e){this.a=d
this.b=e},
fHI(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fHI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hnj){w=1
break}r=new C.fHJ()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fHI)
case 7:$.hnj=!0
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
return B.i($async$fHI,v)},
bDp(d){return A.CP[B.mg(d)-1]+", "+A.oq[B.bL(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
i2j(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dri[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h6s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fG0(),B.T(v).k("Z<1>")))
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
continue}o=new C.fG2(j,h)
n=new C.fG1(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
h3g(d,e){var w=new C.fiY()
return A.d.cI(e,0,new C.fiW(w))>=A.d.cI(d,0,new C.fiX(w))},
hkq(d){var w,v,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
u.D(new B.aX(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bs())
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
cgA:function cgA(d){this.a=d},
cgy:function cgy(){},
cgz:function cgz(){},
tu:function tu(d,e){this.a=d
this.b=e},
BI:function BI(d,e){this.a=d
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
fHJ:function fHJ(){},
fG0:function fG0(){},
fG2:function fG2(d,e){this.a=d
this.b=e},
fG1:function fG1(d,e,f){this.a=d
this.b=e
this.c=f},
fiY:function fiY(){},
fiZ:function fiZ(){},
fiW:function fiW(d){this.a=d},
fiX:function fiX(d){this.a=d},
b1F:function b1F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgB:function cgB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgC:function cgC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cgD:function cgD(d){this.a=d},
bdn:function bdn(d){this.a=d},
bdm:function bdm(d,e){this.b=d
this.a=e},
bv_:function bv_(d){this.a=d},
b9P:function b9P(d,e){this.b=d
this.a=e},
bsu:function bsu(d,e){this.b=d
this.a=e},
hvn(d,e){return B.a4(d,!1).cc(B.dX(new C.fTY(e,null),!0,null,x.E))},
fTY:function fTY(d,e){this.a=d
this.b=e},
Wa:function Wa(d,e,f){this.c=d
this.d=e
this.a=f},
aEP:function aEP(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
enw:function enw(){},
enx:function enx(d){this.a=d},
env:function env(d,e){this.a=d
this.b=e},
enj:function enj(d){this.a=d},
enk:function enk(d){this.a=d},
enq:function enq(d){this.a=d},
enr:function enr(d,e){this.a=d
this.b=e},
eno:function eno(d){this.a=d},
enp:function enp(d,e,f){this.a=d
this.b=e
this.c=f},
enl:function enl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ens:function ens(d,e){this.a=d
this.b=e},
enn:function enn(d,e){this.a=d
this.b=e},
ent:function ent(d){this.a=d},
enm:function enm(d,e){this.a=d
this.b=e},
enu:function enu(d,e){this.a=d
this.b=e},
bcU:function bcU(d,e,f){this.b=d
this.c=e
this.a=f},
ihe(d){return B.a4(d,!1).cc(B.dX(new C.fUd(),!0,null,x.I))},
bAQ(d,e){var w,v,u,t,s,r,q=B.c3(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h4G(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fUd:function fUd(){},
a0i:function a0i(d){this.a=d},
oG:function oG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGe:function aGe(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aL=_.aE=_.aA=_.a_=_.b8=_.bj=_.y2=0
_.b1=null
_.b0=0.25
_.be=null
_.bL=0.5
_.aJ=1
_.c8=_.bG=_.bi=0
_.cL=_.c5=!1
_.c=_.a=null},
eWw:function eWw(d){this.a=d},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVM:function eVM(d,e){this.a=d
this.b=e},
eVW:function eVW(d){this.a=d},
eV7:function eV7(d){this.a=d},
eV8:function eV8(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV6:function eV6(d){this.a=d},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVG:function eVG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVS:function eVS(d,e,f){this.a=d
this.b=e
this.c=f},
eVR:function eVR(d,e){this.a=d
this.b=e},
eVT:function eVT(d,e){this.a=d
this.b=e},
eVQ:function eVQ(d,e){this.a=d
this.b=e},
eVV:function eVV(d,e,f){this.a=d
this.b=e
this.c=f},
eVU:function eVU(d,e){this.a=d
this.b=e},
eUY:function eUY(d){this.a=d},
eUZ:function eUZ(d){this.a=d},
eV_:function eV_(d){this.a=d},
eUX:function eUX(){},
eV0:function eV0(d,e){this.a=d
this.b=e},
eUW:function eUW(d,e){this.a=d
this.b=e},
eV2:function eV2(){},
eV1:function eV1(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUS:function eUS(d,e){this.a=d
this.b=e},
eV3:function eV3(d){this.a=d},
eUU:function eUU(d,e){this.a=d
this.b=e},
eV4:function eV4(d){this.a=d},
eUT:function eUT(d,e){this.a=d
this.b=e},
eWl:function eWl(d,e){this.a=d
this.b=e},
eWs:function eWs(d){this.a=d},
eWt:function eWt(d,e){this.a=d
this.b=e},
eWu:function eWu(){},
eWm:function eWm(d,e){this.a=d
this.b=e},
eWk:function eWk(d,e){this.a=d
this.b=e},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWj:function eWj(d,e){this.a=d
this.b=e},
eWo:function eWo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWi:function eWi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWp:function eWp(d){this.a=d},
eWq:function eWq(d,e){this.a=d
this.b=e},
eWr:function eWr(d){this.a=d},
eWh:function eWh(d){this.a=d},
eW4:function eW4(d){this.a=d},
eW5:function eW5(d){this.a=d},
eW3:function eW3(d,e){this.a=d
this.b=e},
eVZ:function eVZ(d,e){this.a=d
this.b=e},
eW6:function eW6(d){this.a=d},
eW9:function eW9(d){this.a=d},
eW2:function eW2(d){this.a=d},
eWa:function eWa(d){this.a=d},
eWb:function eWb(d){this.a=d},
eWc:function eWc(d){this.a=d},
eWd:function eWd(d){this.a=d},
eW1:function eW1(d){this.a=d},
eWe:function eWe(d){this.a=d},
eW0:function eW0(d){this.a=d},
eWf:function eWf(d,e){this.a=d
this.b=e},
eW_:function eW_(d,e){this.a=d
this.b=e},
eWg:function eWg(d){this.a=d},
eW7:function eW7(d){this.a=d},
eW8:function eW8(d){this.a=d},
eVJ:function eVJ(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVK:function eVK(d,e){this.a=d
this.b=e},
eVH:function eVH(d,e){this.a=d
this.b=e},
eVL:function eVL(d){this.a=d},
eVB:function eVB(d){this.a=d},
eVA:function eVA(d){this.a=d},
eVC:function eVC(d){this.a=d},
eVz:function eVz(d){this.a=d},
eVD:function eVD(d,e){this.a=d
this.b=e},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVx:function eVx(d,e){this.a=d
this.b=e},
eVf:function eVf(d){this.a=d},
eVg:function eVg(d){this.a=d},
eVh:function eVh(d){this.a=d},
eVi:function eVi(d){this.a=d},
eVj:function eVj(d){this.a=d},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVm:function eVm(d){this.a=d},
eVn:function eVn(d){this.a=d},
eUB:function eUB(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUD:function eUD(d){this.a=d},
eUE:function eUE(d){this.a=d},
eUF:function eUF(d){this.a=d},
eUA:function eUA(d){this.a=d},
eUG:function eUG(d){this.a=d},
eUH:function eUH(d){this.a=d},
eV9:function eV9(d){this.a=d},
eVa:function eVa(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVc:function eVc(d){this.a=d},
eVd:function eVd(d){this.a=d},
eUL:function eUL(d){this.a=d},
eUM:function eUM(d){this.a=d},
eUN:function eUN(d){this.a=d},
eUO:function eUO(d){this.a=d},
eUP:function eUP(d){this.a=d},
eUK:function eUK(d){this.a=d},
eUQ:function eUQ(d){this.a=d},
eUJ:function eUJ(d){this.a=d},
eUR:function eUR(d){this.a=d},
eUI:function eUI(d){this.a=d},
eVE:function eVE(d){this.a=d},
eVw:function eVw(d){this.a=d},
eVs:function eVs(d){this.a=d},
eVr:function eVr(d){this.a=d},
eVt:function eVt(d,e){this.a=d
this.b=e},
eVq:function eVq(d,e){this.a=d
this.b=e},
eVu:function eVu(d,e){this.a=d
this.b=e},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVv:function eVv(d){this.a=d},
eVP:function eVP(d){this.a=d},
eVO:function eVO(d,e,f){this.a=d
this.b=e
this.c=f},
eVN:function eVN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVY:function eVY(d,e){this.a=d
this.b=e},
eVX:function eVX(d,e){this.a=d
this.b=e},
eVe:function eVe(d){this.a=d},
eWv:function eWv(d){this.a=d},
bgu:function bgu(d,e){this.b=d
this.a=e},
icB(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
icC(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l9(0,d),m=B.C(n,B.a6(n).k("L.E"))
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
bBq(){var w=$.bAy,v=$.QP
$.QP=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bBq(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
o6(d,e,f,g){var w=f*9
return C.ig(D.eS,d-f/2,e-w/32,f,w/16,g,0)},
hWP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bAy
p=$.QP
$.QP=p+1
w.push(new C.eO(q+"_"+p,D.f8,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bAy
p=$.QP
$.QP=p+1
w.push(new C.eO(q+"_"+p,D.f8,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o6(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o6(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bh,0.08,0.08,0.5,0.003,v,0),C.ig(D.bh,0.58,0.08,0.004,0.06,v,0),C.ig(D.bh,0.58,0.14,0.34,0.003,v,0),C.ig(D.bh,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bh,0.08,0.8,0.004,0.14,t,0),C.ig(D.bh,0.08,0.94,0.6,0.003,t,0),C.o6(0.58,0.08,0.05,e),C.o6(0.92,0.22,0.05,e),C.o6(0.08,0.8,0.05,f),C.o6(0.68,0.94,0.05,f),C.o6(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.lh,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.lh,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.lh,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.lh,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o6(0.5,0.5,1.5,w|335544320),C.o6(0.5,0.5,1.15,w|402653184),C.o6(0.5,0.5,0.8,v|436207616),C.o6(0.95,0.05,0.4,v|855638016),C.o6(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o6(0.85,0.08,0.7,w|1140850688),C.o6(0.1,0.35,0.5,v|855638016),C.o6(0.9,0.62,0.55,v|771751936),C.o6(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bh,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bh,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bh,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bh,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o6(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o6(0.5,0.2,0.65,(w|3422552064)>>>0),C.o6(0.5,0.2,0.95,w|855638016),C.ig(D.bh,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bh,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.k_,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.k_,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.k_,0.15,0.86,0.6,0.14,1712265002,0),C.o6(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d1j[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bAy
l=$.QP
$.QP=l+1
w.push(new C.eO(m+"_"+l,D.f8,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.eS,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o6(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.k_,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.k_,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.k_,0.65,-0.1,0.3,0.55,v,0.5),C.o6(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bh,0.06,0.04,0.88,0.002,e,0),C.ig(D.bh,0.06,0.96,0.88,0.002,e,0),C.ig(D.bh,0.06,0.04,0.004,0.92,e,0),C.ig(D.bh,0.936,0.04,0.004,0.92,e,0),C.ig(D.bh,0.09,0.07,0.82,0.001,w,0),C.ig(D.bh,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.k0,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.k0,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.k0,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bh,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bh,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bh,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bh,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eS,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eS,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eS,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eS,-0.05,0.9,0.4,0.12,v,-0.9),C.o6(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bh,0.09,0.12,0.16,0.006,e,0),C.ig(D.bh,0.05,0.03,0.9,0.001,w,0),C.ig(D.bh,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i93(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bAy=j
$.QP=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fDp()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bBq(),g,"","",0,!1,"",0,D.bh,l,2,"",0,0,"",D.cl,D.lK,1,0,0))
if(a9)A.d.v(q,C.hWP(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.icB(B.aL(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fDo(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bBq(),a0,"","",0,!1,a2,0,D.bh,l,2,"",0,0,"",D.cl,D.lK,a3,a4,a5))
return C.rE(s,r,0,0,q,j+"_slide",D.qz,"","","",D.dh)},
rD:function rD(d,e){this.a=d
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
fDp:function fDp(){},
fDo:function fDo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hMS(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ci_(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zO(u,t,s,B.w(w==null?"":w))},
fL7(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fL7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hnG){w=1
break}$.hnG=!0
t=4
w=7
return B.b(B.az(),$async$fL7)
case 7:r=e
q=B.aU(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aN(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jZ(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gR(h)
l=C.hMS(m)
if(l!=null)J.cc(n,l)}$.CX.c3(0,B.w(o.a),new C.fL8(n))}C.h4l()
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
return B.i($async$fL7,v)},
h4l(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dq($.CX,$.CX.r,$.CX.e);w.C();)J.nz(w.d,new C.fqM(v))
$.CX.bs($.CX,new C.fqN())},
aOO(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aOO=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aOO)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cH($.CX,B.a6($.CX).k("cH<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gR(h)
g=o
J.cc(p,B.G(["at",g.a.a7().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aI(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.X.ap(n,null)),$async$aOO)
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
return B.i($async$aOO,v)},
ide(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h4l()
w=$.CX.c3(0,d,new C.fLa())
v=Date.now()
u=B.C(e,B.a6(e).k("ct.E"))
J.pH(w,0,new C.zO(new B.V(v,0,!1),f,u,g))
C.aOO()},
idb(d){var w,v=$.CX.h(0,d)
if(v==null||J.cs(v))return
w=J.cD(v)
w.cE(v,0)
if(w.gan(v))$.CX.W(0,d)
C.aOO()},
zO:function zO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ci_:function ci_(){},
fL8:function fL8(d){this.a=d},
fqM:function fqM(d){this.a=d},
fqN:function fqN(){},
fLa:function fLa(){},
idg(d){return A.d.dK(D.wx,new C.fLd(d),new C.fLe())},
hMQ(d){var w
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
hMP(d){var w
switch(d.a){case 0:w=D.ano
break
case 1:w=A.yR
break
case 2:w=A.aor
break
case 3:w=K.an2
break
case 4:w=A.anU
break
case 5:w=A.m8
break
default:w=null}return w},
hZX(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.QN[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.QN[w]
if(!B.cT(v.toLowerCase(),t,0))u=B.cT(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hMR(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
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
o.push(q)}return A.X.ap(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
idc(d,e,f,g,h){var w=new B.N(D.wx,new C.fL6(),x.eC).aH(0,", "),v=""+d,u=C.htb(h),t=F.fEO(h),s=C.hpj(g),r=e.t(0,D.IJ)?'- New slides get an "emoji".\n':"",q=e.t(0,D.IK)?'- New slides get an "icon3d" from: '+A.d.aH(D.QN,", ")+".\n":"",p=e.t(0,D.Do)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
idd(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wx,new C.fL9(),x.eC).aH(0,", "),p=new B.fg("")
if(e.t(0,D.IJ)){p.a=s
w=s}else w=""
if(e.t(0,D.IK))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.QN,", ")+".\n")
if(e.t(0,D.Do))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.htb(d)
v=F.fEO(d)
u=C.hpj(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahv(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Dk(a3,"{"),a5=J.fXv(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.LF(a3,a4,a5+1)
try{w=A.X.aN(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.cs(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fJ4(),m).c0(0,new C.fJ5())
k=B.C(l,l.$ti.k("L.E"))}else k=B.a([],n)
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
f=C.hZX(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.cb(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a8m(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.b3(D.wx,new C.fJ6(r))?r:a7
o=C.fq0(J.r(w,"logo_frame"),D.CL)
n=C.fq0(J.r(w,"logo_ring"),D.CF)
m=C.fq0(J.r(w,"photo_frame"),D.CL)
l=C.fq0(J.r(w,"photo_ring"),D.CF)
return new C.arK(q,p,u,o,n,m,l)}catch(a0){return a1}},
a24(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hsi(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Dp),f7=f6?C.hTv():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e9()
v.d3(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.dZ(t,v)
s=u.c
s=new C.nT("luxe",u.a,A.m8,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.idg(f9.b)
r=g2.t(0,D.a6I)||f6
q=g2.t(0,D.IJ)
p=g2.t(0,D.SN)
o=new C.fDt()
n=B.a([],x.g)
m=new C.fDw(o,w,r)
l=new C.fDv(o,r)
k=new C.fDu(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b3(u,new C.fDs(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d2Y[b8]
c0=D.d1P[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f1I.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eS,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eS,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eS,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mT,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qA,500,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.SK
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eS,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lh,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bh,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Dm
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eS,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eS,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mT,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qA,500,f2,f0))
d3=D.mS
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eS,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bh,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uN:D.cl
c1.push(new C.eO(b4,D.a6G,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bi,e4,D.bh,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mS
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eS,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eS,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mT,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qA,450,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.SK
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eS,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eS,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bh,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bh,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.IH,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mS}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hV8(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dtM[A.o.F(b1,6)]:s
n.push(new C.lR(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BW(e4,e4,e4,e4,D.Dl,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aq(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fFR(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fFR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Do)
n=e.t(0,D.IK)
if(!o&&!n){u=D.a5F
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fFU(o,s[r],n,$.hYG,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fFR)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFR,v)},
fER(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fER=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.idd(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aO7(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fER)
case 3:u=s.aOt(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fER,v)},
bD3(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bD3=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.eo(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ide(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahv(i,"colorful")
t=C.idc(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aO7(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hN),$async$bD3)
case 3:u=o.aOt(m,f,h,g,D.e6Z,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bD3,v)},
aO7(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aO7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vv(null,""),$async$aO7)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nc(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r1(t,d,g,"slides",null),$async$aO7)
case 7:q=i
p=q.b
if(p!=null){o=C.ahv(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Lm(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aO7,v)},
aOt(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aOt=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Do)||e.t(0,D.IK)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.df(e,x.Q)
t.W(0,D.Do)}w=6
return B.b(C.fFR(d,t),$async$aOt)
case 6:s=k
w=4
break
case 5:s=D.a5F
case 4:t=d.c
w=A.d.b3(t,new C.fiS())?7:9
break
case 7:r=$.hu3
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dU(r,x.aP),$async$aOt)
case 10:q=k
p=q!=null?A.X.ap(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hsi(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hMR(new C.arK(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fiT(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("k1<ct.E,n>")
t=B.C(new B.k1(e,new C.fiU(),t),t.k("L.E"))
l.cy=t
l.ay=e.t(0,D.SN)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOt,v)},
h7b(d){var w,v,u,t=d.cy
if(t==null)t=A.Y
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a4u[v]
if(A.d.t(t,u.b))w.M(0,u)}return w},
ihj(d){return B.bU(A.K,null,new C.fUp(),d,!0,!0,!0,null,!1,!1,x.I)},
hU7(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aM(d)},
ihi(d,e,f){return B.bU(A.K,null,new C.fUo(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h7c(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h7d(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fq0(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.fq1(w))?w:""},
hpj(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hu1(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahv(a1==null?"":a1,a0),a3=C.ahv(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.Y
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.T(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.M)(t),++p){o=B.pQ(new B.Z(r,new C.fLf(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("L.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.Z(k,new C.fLg(),v),r)
A.d.aY(g,new C.fLh())
if(g.length===0)continue
f=new C.fLi(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.M)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
idx(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aID
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e8T
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e8U
return null},
hoV(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dg(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
idh(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.ov
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.M)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.M)(q),++o){n=q[o]
if(n.b!==D.cT)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hoV(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hoV(n,i,v,u))if(n.w>10){f=h+1
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
idf(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahv(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a4u[r]
if(q.b===s)w.M(0,q)}}v=C.h7c(e)
u=C.h7d(e)
p=C.hsi(n,D.a5F,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fLb(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k1<ct.E,n>")
o=B.C(new B.k1(w,new C.fLc(),o),o.k("L.E"))
p.cy=o
p.ay=w.t(0,D.SN)
return p},
ih5(d,e,f){return B.bU(A.K,null,new C.fTC(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hTv(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e9()
s.d3(t)
w=D.cHg[s.au(10)]
v=new C.ejP(s)
u=x.N
return new C.ejO(w,s.au(4),J.fq(v.$1$2(D.d7I,1,x.ff)),w.r[s.au(3)],v.$1$2(D.doY,2+s.au(2),u),v.$1$2(D.dhv,2,u),v.$1$2(D.dsa,4,x.fP),t)},
hV8(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e9()
a1.d3(a5.w+a3*13)
w=new C.ffj(a4)
v=new C.ffl(a4,d)
u=new C.ffk(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.M)(a2),++q){p=a2[q]
if(p.b===D.cT){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fX(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fX(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c6(a2,0,w.$8(D.eS,0.1+a1.ah()*0.45,0.05+a1.ah()*0.3,0.45,0.75,C.a24(a0,52),"lux_spot",a5.wK(0,"spotlight")))
else A.d.c6(a2,0,w.$8(D.bh,0,0,1,1,0,"lux_back",a5.wK(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c6(a2,1,w.$8(D.bh,0,0,1,1,0,"lux_back2",a5.aFN(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.022,0.038,0.956,0.924,0,g,a5.wK(0,f),D.dh,150,C.a24(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.018,0.032,0.964,0.936,0,g,a5.wK(0,f),D.dh,120,C.a24(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a24(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bh,0,0,1,1,0,"lux_filigree",a5.wK(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bh,0.08,0.06,0.84,0.004,C.a24(a0,208),"lux_rule",a5.aFN(0,"shimmer",r),D.uM,150))
a2.push(w.$10$anim$delay(D.bh,0.08,0.936,0.84,0.004,C.a24(a0,144),"lux_rule2","",D.IH,220))}l=!A.d.b3(a2,new C.ffi())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wK(0,"crest"),350))
else{o=a1.hh()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wK(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a24(r,242)
j=a5.wK(0,"orbit")
i=s===D.bh?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qA,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eS,t-0.007,0.9495,0.014,0.025,C.a24(r,242),"lux_g2",a5.wK(0,"orbit"),D.qA,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){h=t[q]
a2.push(w.$8(D.bh,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fX(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bh,0,0,1,1,0,"lux_velvet",a5.wK(0,"velvet")))},
nT:function nT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fLd:function fLd(d){this.a=d},
fLe:function fLe(){},
w8:function w8(d,e){this.a=d
this.b=e},
a8m:function a8m(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
arK:function arK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fL6:function fL6(){},
fL9:function fL9(){},
fJ4:function fJ4(){},
fJ5:function fJ5(){},
fJ6:function fJ6(d){this.a=d},
fDt:function fDt(){},
fDw:function fDw(d,e,f){this.a=d
this.b=e
this.c=f},
fDv:function fDv(d,e){this.a=d
this.b=e},
fDu:function fDu(d,e){this.a=d
this.b=e},
fDs:function fDs(d){this.a=d},
fFU:function fFU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFS:function fFS(d){this.a=d},
fFT:function fFT(d){this.a=d},
fiS:function fiS(){},
fiT:function fiT(){},
fiU:function fiU(){},
fUp:function fUp(){},
a0P:function a0P(d){this.a=d},
aIb:function aIb(d,e,f,g,h){var _=this
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
f1U:function f1U(d,e,f){this.a=d
this.b=e
this.c=f},
f1V:function f1V(d,e){this.a=d
this.b=e},
f1S:function f1S(d,e){this.a=d
this.b=e},
f1T:function f1T(d,e){this.a=d
this.b=e},
f1R:function f1R(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f1M:function f1M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f1Q:function f1Q(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1K:function f1K(d,e){this.a=d
this.b=e},
f1N:function f1N(d){this.a=d},
f1O:function f1O(d,e){this.a=d
this.b=e},
f1A:function f1A(d,e){this.a=d
this.b=e},
f1B:function f1B(d,e){this.a=d
this.b=e},
f1D:function f1D(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1H:function f1H(d,e){this.a=d
this.b=e},
f27:function f27(d){this.a=d},
f28:function f28(d){this.a=d},
f26:function f26(d){this.a=d},
f29:function f29(d){this.a=d},
f25:function f25(d){this.a=d},
f2b:function f2b(d){this.a=d},
f24:function f24(d,e){this.a=d
this.b=e},
f2c:function f2c(d){this.a=d},
f23:function f23(d,e){this.a=d
this.b=e},
f2d:function f2d(d){this.a=d},
f22:function f22(d){this.a=d},
f2e:function f2e(d){this.a=d},
f21:function f21(d,e){this.a=d
this.b=e},
f2f:function f2f(d){this.a=d},
f20:function f20(d,e){this.a=d
this.b=e},
f2g:function f2g(d){this.a=d},
f2_:function f2_(d){this.a=d},
f2h:function f2h(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f2i:function f2i(d){this.a=d},
f2a:function f2a(d){this.a=d},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f1I:function f1I(d,e,f){this.a=d
this.b=e
this.c=f},
f1J:function f1J(d,e,f){this.a=d
this.b=e
this.c=f},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1W:function f1W(d,e){this.a=d
this.b=e},
fUo:function fUo(d,e){this.a=d
this.b=e},
a0O:function a0O(d,e,f){this.c=d
this.d=e
this.a=f},
aIa:function aIa(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f1t:function f1t(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1v:function f1v(d,e){this.a=d
this.b=e},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1s:function f1s(d,e){this.a=d
this.b=e},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1z:function f1z(d,e){this.a=d
this.b=e},
fq1:function fq1(d){this.a=d},
b23:function b23(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEH:function aEH(d,e,f){this.c=d
this.d=e
this.a=f},
bl5:function bl5(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
ejR:function ejR(d){this.a=d},
ejQ:function ejQ(){},
biJ:function biJ(d,e){this.b=d
this.a=e},
fLf:function fLf(d){this.a=d},
fLg:function fLg(){},
fLh:function fLh(){},
fLi:function fLi(d){this.a=d},
ash:function ash(d,e){this.a=d
this.b=e},
fLb:function fLb(){},
fLc:function fLc(){},
fTC:function fTC(d,e){this.a=d
this.b=e},
a_a:function a_a(d,e,f){this.c=d
this.d=e
this.a=f},
aCc:function aCc(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dos:function dos(d){this.a=d},
dot:function dot(d){this.a=d},
dou:function dou(d,e){this.a=d
this.b=e},
dox:function dox(d){this.a=d},
doy:function doy(d,e){this.a=d
this.b=e},
dow:function dow(d,e){this.a=d
this.b=e},
doz:function doz(d){this.a=d},
dov:function dov(d,e){this.a=d
this.b=e},
btB:function btB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ejO:function ejO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ejP:function ejP(d){this.a=d},
ffj:function ffj(d){this.a=d},
ffl:function ffl(d,e){this.a=d
this.b=e},
ffk:function ffk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffi:function ffi(){},
aMJ:function aMJ(){},
h60(d){var w,v,u
try{w=A.X.aN(0,d,null)
if(x.f.b(w)){v=B.w1(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b2_:function b2_(d,e,f){this.c=d
this.d=e
this.a=f},
bmF:function bmF(d,e){this.c=d
this.a=e},
i9x(d){return A.d.dK(D.HK,new C.fEA(d),new C.fEB())},
i9y(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b7(t,6)
if(w.length===0)return null
v=new B.Z(D.HK,new C.fEC(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jO("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lm:function lm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEA:function fEA(d){this.a=d},
fEB:function fEB(){},
fEC:function fEC(d){this.a=d},
n1(d,e,f,g,h){return new C.EY(f,g,d)},
hWk(d){var w=d.z,v=B.T(w).k("Z<1>")
w=B.C(new B.Z(w,new C.fhj(),v),v.k("L.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.KK
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c6(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
hs5(d,e){var w
C.hWk(d)
w=A.d.dK($.bF5(),new C.fCq(e),new C.fCr())
$.KK=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.KK=""}d.z=B.bq(d.z,!0,x.F)},
EY:function EY(d,e,f){this.a=d
this.b=e
this.e=f},
fhj:function fhj(){},
fKI:function fKI(){},
fKJ:function fKJ(){},
fKK:function fKK(){},
fKV:function fKV(){},
fL_:function fL_(){},
fL0:function fL0(){},
fL1:function fL1(){},
fL2:function fL2(){},
fL3:function fL3(){},
fL4:function fL4(){},
fL5:function fL5(){},
fKL:function fKL(){},
fKM:function fKM(){},
fKN:function fKN(){},
fKO:function fKO(){},
fKP:function fKP(){},
fKQ:function fKQ(){},
fKR:function fKR(){},
fKS:function fKS(){},
fKT:function fKT(){},
fKU:function fKU(){},
fKW:function fKW(){},
fKX:function fKX(){},
fKY:function fKY(){},
fKZ:function fKZ(){},
fCq:function fCq(d){this.a=d},
fCr:function fCr(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.es(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bh,4280172719,2,m,n,0,"",o,D.cT,p,q,r)},
Dc(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
bDN(){var w=new B.V(Date.now(),0,!1)
return A.iE[B.bL(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bBa(d){return new B.iS((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i0B(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anq(A.cF.aM(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i0F(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fpk(),x.dv).aH(0,"\n")},
i0E(d){switch(d.a){case 2:return A.nD
case 1:case 5:return A.fcO
default:return A.Uh}},
i0y(d){switch(d.a){case 2:return A.vr
case 1:case 5:return A.Wj
default:return A.abP}},
i0C(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bBa(u),q=(s&255)===0?v:C.bBa(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nB(q,p,A.kV)
w=new B.pI(t,t,t,t)}switch(d.ax.a){case 1:return B.lG(v,v,v,new B.kK(r,w,v,A.ad6,v),v,v,v,v)
case 4:return u?new B.fT(v,v,v):B.xf(B.lG(v,v,q,v,p+0.4,v,v,v))
default:return B.lG(v,v,v,new B.kK(r,w,B.vE(4),A.hQ,v),v,v,v,v)}},
i0A(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f8?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i0y(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i0F(d)
t=C.bBa(d.Q)
s=d.x.a>=700?A.ev:A.w1
r=d.y===A.cD?A.yu:A.alU
q=d.z
p=new B.Dn(w,l,l,B.fc(u,l,l,l,B.hb(l,t,1===q.a?A.aRP:A.aRO,l,l,l,l,l,l,A.dy,l,l,v,r,s,l,!0,l,l,l,l),C.i0E(d.as)))
break
case 1:case 4:o=C.i0B(d.at)
n=i===D.lK&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xf(B.fc(w,l,l,l,B.hb(l,A.rV,l,l,l,l,l,l,l,A.dy,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ic(o,n?A.ad2:A.WH,l,l)
break
case 3:w=new B.nB(A.J3,1,A.kV)
u=B.vE(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lG(A.vr,B.fc(t,l,l,l,B.hb(l,D.emR,l,l,l,l,l,l,l,A.dy,l,l,11,l,A.ev,l,!0,l,l,l,l),A.nD),l,new B.kK(E.aK0,new B.pI(w,w,w,w),u,A.hQ,l),l,l,l,l)
break
case 2:p=C.i0C(d,e)
break
case 5:p=C.i0z(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hjE(-w,p)
w=i===D.cT
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.at4(m/255,p)}if(w)return new F.we(k,l,j,l,new B.SE(new B.kJ(g,g,f,1/0),p))
if(i===D.lg){i=new B.nB(A.J3,1,A.kV)
i=B.lG(A.vr,p,l,new B.kK(A.pn,new B.pI(i,i,i,i),B.vE(4),A.hQ,l),l,l,D.bCn,l)}else i=p
return new F.we(k,l,j,l,new B.fT(g,f,i))},
i0D(d,e,f,g){var w,v=null,u=C.bBa(d.e),t=d.f
t=B.a([F.hig(t!=null?B.lG(v,v,v,new B.kK(v,v,v,A.hQ,new B.aXv(E.Wl,A.abJ,B.a([u,C.bBa(t)],x.cR),v)),v,v,v,v):B.lG(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fpj(f,g),B.T(w).k("N<1,fh>")))
return F.cwl(t)},
h7f(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h7f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4E(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){p=t[q]
o=new B.WT(A.wG,A.J0,D.bDx,null,null,null,!1,null)
o=new B.C0(o,new C.fLo(607,787,p,d))
o.N1(n,null)
r.push(o)}u=n.jx(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h7f,v)},
i0z(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h60(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakl()
if(h==null)h=A.azr
j=B.tG(4279308564)
w=B.vE(18)
v=new B.nB(B.tG(4287531653),3,A.kV)
u=i.length===0?"My links":i
u=B.a([B.xf(B.fc(u,m,m,m,B.hb(m,A.pn,m,m,m,m,m,m,m,A.dy,m,m,12,m,A.ev,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xf(B.fc(A.a.i(l.c),m,m,m,D.fko,m)))
u.push(new B.fT(m,8,m))
for(t=B.d0(h,0,B.dA(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bR(t,t.gL(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tG(4280690220)
o=new B.a9H(8,8)
n=A.a.i(r.b)
u.push(new B.nU(D.bww,new C.axm(new C.aiA(q),B.lG(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fmL,A.nD),m,new B.kK(p,m,new B.aj0(o,o,o,o),A.hQ,m),m,m,D.bCP,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xf(B.fc(k,m,m,m,D.fm_,m))
u.push(new C.axm(C.hAS(k),t))}return B.lG(m,B.z5(u,A.MM,A.lI),m,new B.kK(j,new B.pI(v,v,v,v),w,A.hQ,m),m,m,D.bxl,m)},
fpk:function fpk(){},
fpj:function fpj(d,e){this.a=d
this.b=e},
fLo:function fLo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahi(d){var w,v
for(w=0;w<32;++w){v=D.HB[w]
if(v.a===d)return v}return null},
hmi(d){var w,v,u=A.a.cu(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aM(A.a.b7(d,u+1))
return w}catch(v){return null}},
d_(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hvj(d,e){return B.a4(d,!1).cc(B.dX(new C.fS1(e),!0,null,x.fB))},
hvi(d,e){return B.bU(A.K,null,new C.fS0(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
EP:function EP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NN:function NN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bku:function bku(d,e,f){var _=this
_.d=d
_.e=$
_.bz$=e
_.aa$=f
_.c=_.a=null},
dZ7:function dZ7(d){this.a=d},
dZ6:function dZ6(d,e,f){this.a=d
this.b=e
this.c=f},
dZ5:function dZ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs9:function bs9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f0H:function f0H(d,e){this.a=d
this.b=e},
bfA:function bfA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_U:function b_U(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccw:function ccw(){},
ccx:function ccx(d){this.a=d},
ccy:function ccy(d,e,f){this.a=d
this.b=e
this.c=f},
ccz:function ccz(d,e,f){this.a=d
this.b=e
this.c=f},
fS1:function fS1(d){this.a=d},
ZI:function ZI(d,e){this.c=d
this.a=e},
aAA:function aAA(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
ddJ:function ddJ(d,e,f){this.a=d
this.b=e
this.c=f},
ddO:function ddO(d){this.a=d},
ddP:function ddP(d){this.a=d},
ddN:function ddN(d){this.a=d},
ddQ:function ddQ(d){this.a=d},
ddM:function ddM(d,e){this.a=d
this.b=e},
ddR:function ddR(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddK:function ddK(d,e){this.a=d
this.b=e},
ddT:function ddT(d,e){this.a=d
this.b=e},
fS0:function fS0(d){this.a=d},
fS_:function fS_(d){this.a=d},
fRZ:function fRZ(d,e,f){this.a=d
this.b=e
this.c=f},
fRY:function fRY(d,e){this.a=d
this.b=e},
aMf:function aMf(){},
ihh(d){return B.bU(A.K,null,new C.fUn(),d,!0,!0,!0,null,!1,!1,x.N)},
fUn:function fUn(){},
a_2:function a_2(d){this.a=d},
bh4:function bh4(d){this.d=d
this.c=this.a=null},
dku:function dku(d){this.a=d},
dkv:function dkv(d,e){this.a=d
this.b=e},
dkw:function dkw(d){this.a=d},
hXV(d){var w,v=d.split("@")
if(v.length>1){w=B.cb(v[1],16)
if(w!=null)return B.b1(w)}return D.xU},
ibs(d){var w,v=A.d.gI(d.split("@"))
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
ibr(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hXV(d)
switch(q){case"shimmer":return B.nY(A.L6,g,new C.fI1(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bgq(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.d9(F.bV8(g,B.TF(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bg8(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.d9(B.eL(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fG(e)
u.mO(Math.sin(e)*0.3)
return B.dP(B.fv(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e0(B.b4(r,r,r,new C.boY(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e0(B.b4(r,r,r,new C.baY(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e0(B.b4(r,r,r,new C.baC(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bvX(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bsX(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bs5(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e0(B.b4(r,r,r,new C.bft(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ab,A.f,B.a([B.bT(0,B.e0(B.ed(A.A,B.c2(r,new B.o(r,r,r,r,r,new B.c1(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bg),1.6+s*0.15,r,r),!0,r),0,0,0),B.eL(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fI1:function fI1(d,e){this.a=d
this.b=e},
bgq:function bgq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bg8:function bg8(d,e,f){this.b=d
this.c=e
this.a=f},
boY:function boY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baY:function baY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baC:function baC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvX:function bvX(d,e,f){this.b=d
this.c=e
this.a=f},
bsX:function bsX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bs5:function bs5(d,e,f){this.b=d
this.c=e
this.a=f},
bft:function bft(d,e,f){this.b=d
this.d=e
this.a=f},
ddq:function ddq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xP:function xP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fI4(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lg},
ibx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fI5())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.M)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aR7(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ibw(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cY(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cY(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
agX(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agX=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fAs(),f),f.k("L.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dO,null,new C.fAt(e),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agX)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h7T(d),$async$agX)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lx(d,"Search states\u2026","",A.kj,"Choose state"),$async$agX)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h6N(s)
if(p==null)p=A.d.gI(D.RC)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fI6(p.d)
k=x.u
j=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),l,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.D_(i,0.016,D.lh,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.D_(0,0.058,D.eS,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.D_(0,0.058,D.eS,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KV("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KV("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h3E(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bAE("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1G("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1G("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1G("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1G("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bAE("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.D_(m,0.082,D.bh,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.es(A.bi,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cy,"",0.074,g,null,"","",0,!1,"",0,D.bh,4280172719,2,y.O,0,0,"",D.cl,D.cT,0.78,0.11,0.388))
A.d.v(k,C.h3E(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bAE("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hok("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hok("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1G("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1G("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bAD("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bAD("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bAE("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KV("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KV("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bAD("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bAD("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bAE("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1G("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bAD("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1G("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h3E(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KV("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KV("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BW(null,null,null,null,D.ov,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rE(m,null,0,0,j,n,D.qz,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agX,v)},
fI5:function fI5(){},
fAs:function fAs(){},
fAt:function fAt(d){this.a=d},
fAq:function fAq(d){this.a=d},
fAr:function fAr(d){this.a=d},
i01(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i00(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mY
case"lineThrough":return A.wP
default:return A.aF}},
es(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eO(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hqr(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Rm[w]
if(v.b===u)return v}return D.dh},
hXh(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cZt[w]
if(v.b===u)return v}return D.cT},
i2T(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dpG[w]
if(v.b===u)return v}return D.bh},
rE(d,e,f,g,h,i,j,k,l,m,n){return new C.lR(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hh1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hZn(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hqr(d.h(0,"transition"))
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
n=B.cF(n,new C.chX(),n.$ti.k("L.E"),x.F)
n=B.C(n,B.a6(n).k("L.E"))}return C.rE(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hZn(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ar6[w]
if(v.b===u)return v}return D.mS},
BW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rE(4294967295,null,0,0,null,C.cE(),D.qz,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Wj(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hVo(a6.h(0,"aspectRatio"))
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
o=C.kF(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kF(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.chK(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.chL(),x.N)
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
g=B.cF(g,new C.chM(),g.$ti.k("L.E"),x.bt)
g=B.C(g,B.a6(g).k("L.E"))}return C.BW(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rE(4294967295,a3,0,0,a3,C.cE(),D.qz,"","","",D.dh)],x.g):g,v,p,o,s)},
kF(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hVo(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dqA[w]
if(v.b===u)return v}return D.Dl},
cE(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
cid(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Dm){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.es(A.L,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cl,D.cT,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cy,"",0.12,u,p,"","",0,!1,"",0,D.bh,m,2,"Click to add subtitle",0,0,"",D.cl,D.cT,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cl,D.cT,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cy,"",0.68,u,p,"","",0,!1,"",0,D.bh,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cT,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Two Column Slide",0,0,"",D.cl,D.cT,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bh,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cT,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bh,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cT,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.es(A.L,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bh,m,2,"Section Header",0,0,"",D.cl,D.cT,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Compare",0,0,"",D.cl,D.cT,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.es(A.bi,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bh,t.l(),2,"",0,0,"",D.cl,D.f8,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bh,m,2,"Option A",0,0,"",D.cl,D.cT,0.38,0.08,0.26)
q=C.cE()
t=C.es(A.bi,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bh,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f8,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bh,m,2,"Option B",0,0,"",D.cl,D.cT,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.es(A.L,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bh,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cT,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cy,"",0.35,u,p,"","",0,!1,"",0,D.bh,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cT,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bh,m,2,"Quiz Question",0,0,"",D.cl,D.cT,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bh,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cT,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bh,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cT,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bh,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cT,0.88,0.06,0.16)],x.u))
break}},
hN0(d){return A.d.dK(D.a49,new C.cie(d),new C.cif())},
hMY(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.cc(v,C.Wj(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h0_(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.ci9(t)
for(w=J.aW(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.M)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("L.E"))
A.d.aY(u,new C.ci8())
return u},
hh4(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ci4()
if(u!==w)return u>=w?d:e
return v.$1(d).ce(v.$1(e))?d:e},
arL(d){return C.hMW(d)},
hMW(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ci7()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2Q(m),$async$arL)
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
return B.b(B.az(),$async$arL)
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
case 11:o=l.$1($.hh3.h(0,m))
n=C.h0_(C.h0_(j,r),o)
if(n.length===0){u=C.hh4(C.hh4(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arL,v)},
ci3(d){return C.hMV(d)},
hMV(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ci3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ci3)
case 7:r=f
q=r.tw("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k3(q,B.T(q).c)
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
return B.i($async$ci3,v)},
b25(d,e){return C.hMX(d,e)},
hMX(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b25=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b25)
case 6:s=g
q=s.tw("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LE(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b25)
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
return B.i($async$b25,v)},
Wk(d,e){return C.hMZ(d,e)},
hMZ(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Wk=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hh2.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arL(a3),$async$Wk)
case 5:p=a6
case 4:w=6
return B.b(C.ci3(a3),$async$Wk)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gR(m)
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
l=m.k("Z<L.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.cia(o),l),l.k("L.E"))
A.d.aY(e,new C.cib())
$.hh2.n(0,a0,e)
n=B.T(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.cic(),n),n.k("ak.E"))
r=A.X.ap(n,null)
$.hh3.n(0,a0,r)
t=8
w=11
return B.b(B.ahK(a0,r),$async$Wk)
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
return B.b(B.az(),$async$Wk)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Wk)
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
return B.i($async$Wk,v)},
J5:function J5(d,e){this.a=d
this.b=e},
arJ:function arJ(d,e){this.a=d
this.b=e},
uU:function uU(d,e){this.a=d
this.b=e},
mG:function mG(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eO:function eO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
chY:function chY(){},
chZ:function chZ(){},
chX:function chX(){},
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
chN:function chN(){},
chO:function chO(){},
chK:function chK(){},
chL:function chL(){},
chM:function chM(){},
jO:function jO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cie:function cie(d){this.a=d},
cif:function cif(){},
ci9:function ci9(d){this.a=d},
ci8:function ci8(){},
ci4:function ci4(){},
ci5:function ci5(){},
ci6:function ci6(){},
ci7:function ci7(){},
cia:function cia(d){this.a=d},
cib:function cib(){},
cic:function cic(){},
ibI(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fIE(e,v,d,B.aY(w))
w.$1(new C.fIA())
w.$1(new C.fIB())
w.$1(new C.fIC())
w.$1(new C.fID())
return v},
fIE:function fIE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIA:function fIA(){},
fIB:function fIB(){},
fIC:function fIC(){},
fID:function fID(){},
b22:function b22(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chT:function chT(d){this.a=d},
chS:function chS(){},
chU:function chU(){},
chV:function chV(d,e){this.a=d
this.b=e},
chW:function chW(d){this.a=d},
aoV:function aoV(d,e){this.c=d
this.a=e},
bkf:function bkf(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dLD:function dLD(){},
aM1:function aM1(){},
ci0(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ci0=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fa_)
u=!1
w=1
break}u=B.l2(!1,d,t,!1,null,A.a6K,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ci0,v)},
hMT(d){var w=A.d.bg(D.HK,new C.ci1(d))
if(w<0)return!0
return w>=4},
hMU(d){var w=A.d.bg($.bF5(),new C.ci2(d))
if(w<0)return!0
return w>=5},
ci1:function ci1(d){this.a=d},
ci2:function ci2(d){this.a=d},
idr(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.x3()
$.pD().oT(t,new C.fLv(s),!0)
u=B.a([B.Bv(v,A.po,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fkR,v,v,v),A.f,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.mI,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b1,A.t,u,v)},
fLv:function fLv(d){this.a=d},
id2(){return C.h78()},
i9W(){return C.bD0()},
ic0(){return C.h7_()},
aQb(d,e,f){var w=0,v=B.j(x.H),u
var $async$aQb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fKB(d,f),$async$aQb)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aQb,v)},
fKB(d,e){var w=0,v=B.j(x.H),u
var $async$fKB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bBb
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.K,null,new C.fKC(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fKB)
case 2:return B.h(null,v)}})
return B.i($async$fKB,v)},
fKC:function fKC(d,e){this.a=d
this.b=e},
adI:function adI(d,e,f){this.c=d
this.d=e
this.a=f},
euU:function euU(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
euW:function euW(d,e){this.a=d
this.b=e},
euX:function euX(d){this.a=d},
adZ:function adZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b21(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b20(g,m,f,d,e,h,l,k,j,o,i,null)},
htq(d){return B.cz(new C.fIz(d))},
h7a(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ida(d){if(d===D.cl)return"None"
return C.h7a(d)},
bBH(d,e,f,g){return C.i3_(d,e,f,g)},
i3_(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bBH=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.h3X&&t.pK())t.eM()
$.h3X=!0
s.a=null
w=3
return B.b(B.i0(A.bl,!0,"Animation preview",d,new C.fs7(s,e,g,f),null,A.eN,!0,x.H),$async$bBH)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h3X=!1
case 1:return B.h(u,v)}})
return B.i($async$bBH,v)},
fVb(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fVb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aJ(d,A.bX,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h7a(f)+" Slide transition preview"
s=s?Ag.FX:A.vO
w=3
return B.b(C.bBH(d,s,new B.a7(t,t*0.56,B.bx(B.m(14),new C.aJA(f,null),A.ap),null),r),$async$fVb)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fVb,v)},
hsI(d,e,f){var w,v,u=null,t=A.cu.av(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d9(f,t)
case 2:case 17:return B.dP(B.d9(f,t),new B.t((1-t)*48,0))
case 3:return B.dP(B.d9(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d9(f,t),new B.t(0,(1-t)*36))
case 5:return B.dP(B.d9(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.d9(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.d9(f,t),1.4-t*0.4,u,u)
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
w.kg((1-t)*1.2)
return B.fv(A.A,B.d9(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mO((1-t)*0.8)
v=0.6+t*0.4
w.jV(v,v,v,1)
return B.fv(A.A,B.d9(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d9(f,t),new B.t((1-t)*24,0))}},
bEz(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bEz=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aJ(d,A.bX,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h7a(f)+" Element animation preview"
s=s?Ag.FX:A.vO
w=3
return B.b(C.bBH(d,s,new B.a7(t,t*0.62,B.bx(B.m(14),new C.aAf(f,null),A.ap),null),r),$async$bEz)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bEz,v)},
id9(d){var w,v,u,t,s=$.ago.W(0,d)
if(s!=null){$.ago.n(0,d,s)
return s}w=A.cF.aM(A.a.b7(d,A.a.cu(d,",")+1))
$.ago.n(0,d,w)
v=$.h4L=$.h4L+w.length
u=B.a6($.ago).k("cv<1>")
for(;;){if(!(v>41943040&&$.ago.a>1))break
t=new B.cv($.ago,u).gaf(0)
if(!t.C())B.b8(B.fs())
v-=$.ago.W(0,t.gR(0)).length
$.h4L=v}return w},
icP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l9(0,d),j=B.C(k,B.a6(k).k("L.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.M)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aq(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.T6(s,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.T6(t,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.T6(u,A.cy))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b7(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2P(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.jE(e))
return m
case"rounded":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.gdC()*0.18
m.D(new B.iN(B.bt(e,new B.aQ(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aX(e.gbK().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bs())
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
v.e=null}}v.D(new B.bs())
return v
case"diamond":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aX(e.gbK().a,e.b))
m.D(new B.aq(e.c,e.gbK().b))
m.D(new B.aq(e.gbK().a,e.d))
m.D(new B.aq(e.a,e.gbK().b))
m.D(new B.bs())
return m
case"arch":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aX(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bbh(new B.t(t,p),new B.aQ(s,s))
m.D(new B.aq(t,u))
m.D(new B.bs())
return m
default:m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.oe(e))
return m}},
fG8(d,e,f){return B.cz(new C.fG9(D.f2g.t(0,d),d,f,e))},
b20:function b20(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
chR:function chR(d){this.a=d},
chQ:function chQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chP:function chP(){},
b1Y:function b1Y(d,e){this.b=d
this.a=e},
fIz:function fIz(d){this.a=d},
fIy:function fIy(d,e){this.a=d
this.b=e},
fs7:function fs7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs5:function fs5(d){this.a=d},
fs6:function fs6(d,e){this.a=d
this.b=e},
aJA:function aJA(d,e){this.c=d
this.a=e},
bvs:function bvs(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
f9e:function f9e(d,e,f){this.a=d
this.b=e
this.c=f},
aKh:function aKh(d,e){this.b=d
this.a=e},
Vr:function Vr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkq:function bkq(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dWR:function dWR(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dWP:function dWP(d){this.a=d},
J4:function J4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chJ:function chJ(d){this.a=d},
chI:function chI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAf:function aAf(d,e){this.c=d
this.a=e},
beU:function beU(){this.d=0
this.c=this.a=null},
daF:function daF(d){this.a=d},
daE:function daE(d){this.a=d},
a84:function a84(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl3:function bl3(d,e){var _=this
_.d=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
ejx:function ejx(d,e,f){this.a=d
this.b=e
this.c=f},
b_X:function b_X(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bg6:function bg6(d,e,f){this.b=d
this.c=e
this.a=f},
br0:function br0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eZ9:function eZ9(){},
fG9:function fG9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs2:function bs2(d,e,f){this.b=d
this.c=e
this.a=f},
aMe:function aMe(){},
aMH:function aMH(){},
aNZ:function aNZ(){},
fJA(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fJA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xq.ca().Mo(D.dnA,A.u8,!0),$async$fJA)
case 3:r=e
if(r==null||J.cs(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.icJ(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJA,v)},
icJ(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a8n(d,new B.a0r(A.cJ.gct().aM(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.i4G(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8n(d,null,w.length>6e4?A.a.aq(w,0,6e4):w)}w=A.cf.L9(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8n(d,null,w.length>6e4?A.a.aq(w,0,6e4):w)},
i4G(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cCk().cMA(B.ro(d,A.ic,o,o),o,o,!1).cOo(0,"word/document.xml")
if(n==null)return""
w=n.cWv()
v=A.cf.L9(0,w==null?$.hvP():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l9(0,r)
p=A.a.i(B.cF(q,new C.fv6(),B.a6(q).k("L.E"),t).hx(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8n:function a8n(d,e,f){this.a=d
this.b=e
this.c=f},
fv6:function fv6(){},
hN_(d,e,f,g,h,i,j,k,l){return new C.Og(l,e,d,g,f,i,h,j,k,null)},
Og:function Og(d,e,f,g,h,i,j,k,l,m){var _=this
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
aF4:function aF4(d,e,f,g,h,i,j,k,l){var _=this
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
eB7:function eB7(d){this.a=d},
eB5:function eB5(){},
eB6:function eB6(d){this.a=d},
exv:function exv(){},
exw:function exw(){},
exx:function exx(d,e){this.a=d
this.b=e},
ez5:function ez5(d){this.a=d},
eyU:function eyU(){},
eyV:function eyV(){},
ewT:function ewT(){},
eAd:function eAd(d){this.a=d},
eB3:function eB3(d,e){this.a=d
this.b=e},
ez3:function ez3(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
eAS:function eAS(){},
eAT:function eAT(){},
eAU:function eAU(d){this.a=d},
eAV:function eAV(){},
ewh:function ewh(d){this.a=d},
eB4:function eB4(){},
eyc:function eyc(d,e){this.a=d
this.b=e},
ewf:function ewf(d){this.a=d},
ewg:function ewg(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d,e,f){this.a=d
this.b=e
this.c=f},
eyB:function eyB(d){this.a=d},
eyb:function eyb(){},
eya:function eya(d){this.a=d},
ey8:function ey8(){},
ey7:function ey7(d){this.a=d},
ey9:function ey9(){},
exr:function exr(d){this.a=d},
exs:function exs(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyd:function eyd(d){this.a=d},
eye:function eye(d){this.a=d},
eyf:function eyf(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyj:function eyj(d,e){this.a=d
this.b=e},
ewj:function ewj(){},
ewk:function ewk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyu:function eyu(){},
eyv:function eyv(d,e){this.a=d
this.b=e},
eys:function eys(d,e,f){this.a=d
this.b=e
this.c=f},
eyt:function eyt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eym:function eym(d,e,f){this.a=d
this.b=e
this.c=f},
eyn:function eyn(d,e,f){this.a=d
this.b=e
this.c=f},
eyo:function eyo(d){this.a=d},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyr:function eyr(d,e){this.a=d
this.b=e},
eyl:function eyl(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eyw:function eyw(d){this.a=d},
eyP:function eyP(){},
eyQ:function eyQ(){},
eyR:function eyR(){},
eyS:function eyS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyM:function eyM(d){this.a=d},
eyO:function eyO(){},
eyN:function eyN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eyK:function eyK(d,e,f){this.a=d
this.b=e
this.c=f},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyT:function eyT(){},
eyk:function eyk(d,e){this.a=d
this.b=e},
ewA:function ewA(){},
ewB:function ewB(d,e,f){this.a=d
this.b=e
this.c=f},
ewC:function ewC(d){this.a=d},
ewD:function ewD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewz:function ewz(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
eyY:function eyY(d,e){this.a=d
this.b=e},
eyX:function eyX(d,e){this.a=d
this.b=e},
eyW:function eyW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ez_:function ez_(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
ewy:function ewy(d,e){this.a=d
this.b=e},
eww:function eww(d){this.a=d},
ez7:function ez7(d,e,f){this.a=d
this.b=e
this.c=f},
ews:function ews(d,e){this.a=d
this.b=e},
ewr:function ewr(d){this.a=d},
ez6:function ez6(d,e,f){this.a=d
this.b=e
this.c=f},
ewi:function ewi(d){this.a=d},
ewU:function ewU(){},
eAP:function eAP(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d,e,f){this.a=d
this.b=e
this.c=f},
eAe:function eAe(d,e,f){this.a=d
this.b=e
this.c=f},
evf:function evf(d){this.a=d},
evc:function evc(d,e){this.a=d
this.b=e},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev_:function ev_(d){this.a=d},
euZ:function euZ(d,e){this.a=d
this.b=e},
ev0:function ev0(d,e){this.a=d
this.b=e},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewt:function ewt(d){this.a=d},
evH:function evH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
evI:function evI(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evN:function evN(d){this.a=d},
evK:function evK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evL:function evL(d){this.a=d},
evJ:function evJ(){},
evG:function evG(d,e,f){this.a=d
this.b=e
this.c=f},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eAY:function eAY(d){this.a=d},
eAZ:function eAZ(d,e){this.a=d
this.b=e},
eB_:function eB_(d){this.a=d},
eB0:function eB0(d,e,f){this.a=d
this.b=e
this.c=f},
eAX:function eAX(d){this.a=d},
eAu:function eAu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAt:function eAt(d,e,f){this.a=d
this.b=e
this.c=f},
eAs:function eAs(){},
eAr:function eAr(d,e,f){this.a=d
this.b=e
this.c=f},
eAq:function eAq(d,e){this.a=d
this.b=e},
eAn:function eAn(d,e,f){this.a=d
this.b=e
this.c=f},
eAl:function eAl(d){this.a=d},
eAm:function eAm(d){this.a=d},
eAp:function eAp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eAo:function eAo(d){this.a=d},
exn:function exn(d,e){this.a=d
this.b=e},
exm:function exm(d,e){this.a=d
this.b=e},
eAf:function eAf(){},
eAO:function eAO(d,e){this.a=d
this.b=e},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d){this.a=d},
ev7:function ev7(d,e){this.a=d
this.b=e},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev8:function ev8(d,e){this.a=d
this.b=e},
ev9:function ev9(d,e,f){this.a=d
this.b=e
this.c=f},
evd:function evd(d,e){this.a=d
this.b=e},
ev4:function ev4(d,e,f){this.a=d
this.b=e
this.c=f},
ev3:function ev3(d){this.a=d},
ez4:function ez4(d,e,f){this.a=d
this.b=e
this.c=f},
eAW:function eAW(d,e,f){this.a=d
this.b=e
this.c=f},
exq:function exq(d,e,f){this.a=d
this.b=e
this.c=f},
exp:function exp(){},
evQ:function evQ(d,e,f){this.a=d
this.b=e
this.c=f},
evR:function evR(d){this.a=d},
ev1:function ev1(d,e){this.a=d
this.b=e},
ewS:function ewS(d,e){this.a=d
this.b=e},
eva:function eva(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
evk:function evk(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evi:function evi(d){this.a=d},
evw:function evw(d,e){this.a=d
this.b=e},
evh:function evh(d){this.a=d},
evz:function evz(d){this.a=d},
evA:function evA(d){this.a=d},
evB:function evB(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(){},
evF:function evF(){},
evm:function evm(d){this.a=d},
evn:function evn(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evt:function evt(d){this.a=d},
evu:function evu(d){this.a=d},
evv:function evv(d){this.a=d},
evx:function evx(d){this.a=d},
evy:function evy(d,e){this.a=d
this.b=e},
ewR:function ewR(d,e,f){this.a=d
this.b=e
this.c=f},
ewQ:function ewQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewP:function ewP(d,e,f){this.a=d
this.b=e
this.c=f},
ewO:function ewO(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evT:function evT(d){this.a=d},
evS:function evS(d,e){this.a=d
this.b=e},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evX:function evX(d,e){this.a=d
this.b=e},
ewx:function ewx(d){this.a=d},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyG:function eyG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d,e){this.a=d
this.b=e},
eyC:function eyC(){},
eyD:function eyD(){},
eAg:function eAg(){},
eAh:function eAh(d,e){this.a=d
this.b=e},
eAi:function eAi(){},
eAj:function eAj(d){this.a=d},
eAk:function eAk(d,e){this.a=d
this.b=e},
evg:function evg(d,e){this.a=d
this.b=e},
ewl:function ewl(){},
ewm:function ewm(){},
ewn:function ewn(){},
ewq:function ewq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewo:function ewo(d,e,f){this.a=d
this.b=e
this.c=f},
exR:function exR(d){this.a=d},
exQ:function exQ(){},
exS:function exS(d,e){this.a=d
this.b=e},
exT:function exT(d,e){this.a=d
this.b=e},
exP:function exP(d){this.a=d},
exU:function exU(d,e){this.a=d
this.b=e},
exO:function exO(d){this.a=d},
exV:function exV(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
exW:function exW(d,e){this.a=d
this.b=e},
exM:function exM(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exL:function exL(d,e){this.a=d
this.b=e},
exY:function exY(d,e){this.a=d
this.b=e},
exK:function exK(d){this.a=d},
exZ:function exZ(d,e){this.a=d
this.b=e},
exJ:function exJ(d){this.a=d},
exC:function exC(d,e){this.a=d
this.b=e},
exD:function exD(d){this.a=d},
exE:function exE(d){this.a=d},
exB:function exB(d){this.a=d},
exF:function exF(d,e){this.a=d
this.b=e},
exA:function exA(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exz:function exz(d){this.a=d},
exH:function exH(d,e){this.a=d
this.b=e},
exy:function exy(d){this.a=d},
exI:function exI(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewE:function ewE(d,e){this.a=d
this.b=e},
ewG:function ewG(d,e){this.a=d
this.b=e},
ewH:function ewH(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewM:function ewM(d){this.a=d},
eB1:function eB1(d){this.a=d},
eB2:function eB2(d){this.a=d},
ey1:function ey1(d,e){this.a=d
this.b=e},
ey0:function ey0(d,e){this.a=d
this.b=e},
ey_:function ey_(d,e){this.a=d
this.b=e},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezr:function ezr(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
eA5:function eA5(d){this.a=d},
eA6:function eA6(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA8:function eA8(d){this.a=d},
eA9:function eA9(d,e){this.a=d
this.b=e},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezx:function ezx(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezF:function ezF(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezI:function ezI(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezM:function ezM(d){this.a=d},
ezg:function ezg(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezo:function ezo(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezn:function ezn(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezR:function ezR(d,e){this.a=d
this.b=e},
ezm:function ezm(d,e,f){this.a=d
this.b=e
this.c=f},
ezc:function ezc(d,e){this.a=d
this.b=e},
ezp:function ezp(d){this.a=d},
eAa:function eAa(d,e){this.a=d
this.b=e},
eAc:function eAc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eAb:function eAb(d,e){this.a=d
this.b=e},
ezS:function ezS(d,e,f){this.a=d
this.b=e
this.c=f},
ezl:function ezl(d,e,f){this.a=d
this.b=e
this.c=f},
ezb:function ezb(d,e,f){this.a=d
this.b=e
this.c=f},
ez9:function ez9(d,e){this.a=d
this.b=e},
ezT:function ezT(d,e){this.a=d
this.b=e},
ezk:function ezk(d,e){this.a=d
this.b=e},
eza:function eza(d,e){this.a=d
this.b=e},
ez8:function ez8(d,e){this.a=d
this.b=e},
ezU:function ezU(d){this.a=d},
ezj:function ezj(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezi:function ezi(d){this.a=d},
eA_:function eA_(d){this.a=d},
eA0:function eA0(d){this.a=d},
eA1:function eA1(d,e){this.a=d
this.b=e},
ezh:function ezh(d){this.a=d},
eA2:function eA2(d,e){this.a=d
this.b=e},
ezf:function ezf(d){this.a=d},
eA3:function eA3(d,e){this.a=d
this.b=e},
eze:function eze(d){this.a=d},
eA4:function eA4(d,e){this.a=d
this.b=e},
ezd:function ezd(d){this.a=d},
evP:function evP(d,e,f){this.a=d
this.b=e
this.c=f},
evO:function evO(d,e){this.a=d
this.b=e},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAw:function eAw(d,e){this.a=d
this.b=e},
eAy:function eAy(d,e){this.a=d
this.b=e},
eAv:function eAv(d,e){this.a=d
this.b=e},
ewX:function ewX(d,e){this.a=d
this.b=e},
ewW:function ewW(d){this.a=d},
ewY:function ewY(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
exu:function exu(){},
ext:function ext(){},
eAK:function eAK(d){this.a=d},
eAJ:function eAJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAI:function eAI(d,e){this.a=d
this.b=e},
eAD:function eAD(d,e){this.a=d
this.b=e},
eAH:function eAH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAE:function eAE(d,e){this.a=d
this.b=e},
eAz:function eAz(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAB:function eAB(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAF:function eAF(d,e){this.a=d
this.b=e},
eAG:function eAG(d,e){this.a=d
this.b=e},
eAL:function eAL(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewd:function ewd(d,e,f){this.a=d
this.b=e
this.c=f},
ewc:function ewc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew1:function ew1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ew2:function ew2(d,e){this.a=d
this.b=e},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew0:function ew0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew5:function ew5(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew6:function ew6(d,e){this.a=d
this.b=e},
ew8:function ew8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew_:function ew_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew9:function ew9(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
ewa:function ewa(d,e){this.a=d
this.b=e},
evY:function evY(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
ey5:function ey5(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey6:function ey6(d,e){this.a=d
this.b=e},
exa:function exa(d,e){this.a=d
this.b=e},
exb:function exb(d,e){this.a=d
this.b=e},
ex9:function ex9(d,e){this.a=d
this.b=e},
exc:function exc(d,e){this.a=d
this.b=e},
ex8:function ex8(d,e){this.a=d
this.b=e},
exd:function exd(d,e){this.a=d
this.b=e},
ex7:function ex7(d,e){this.a=d
this.b=e},
exe:function exe(d,e){this.a=d
this.b=e},
ex6:function ex6(d,e){this.a=d
this.b=e},
exf:function exf(d,e){this.a=d
this.b=e},
ex5:function ex5(d,e){this.a=d
this.b=e},
exg:function exg(d,e,f){this.a=d
this.b=e
this.c=f},
ex4:function ex4(d,e){this.a=d
this.b=e},
exh:function exh(d,e,f){this.a=d
this.b=e
this.c=f},
ex3:function ex3(d,e){this.a=d
this.b=e},
exi:function exi(d,e){this.a=d
this.b=e},
ex2:function ex2(d,e,f){this.a=d
this.b=e
this.c=f},
ex_:function ex_(d,e){this.a=d
this.b=e},
exj:function exj(d,e){this.a=d
this.b=e},
ex1:function ex1(d,e){this.a=d
this.b=e},
exk:function exk(d,e){this.a=d
this.b=e},
ex0:function ex0(d,e,f){this.a=d
this.b=e
this.c=f},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
exl:function exl(d,e){this.a=d
this.b=e},
exo:function exo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euY:function euY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez2:function ez2(d,e){this.a=d
this.b=e},
ez0:function ez0(d){this.a=d},
ez1:function ez1(d,e){this.a=d
this.b=e},
afu:function afu(d,e,f){this.a=d
this.b=e
this.c=f},
azC:function azC(d,e){this.c=d
this.a=e},
bdH:function bdH(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b5$=e
_.c=_.a=null},
d6j:function d6j(d){this.a=d},
d6i:function d6i(d){this.a=d},
bdV:function bdV(d,e){this.c=d
this.a=e},
d6F:function d6F(d){this.a=d},
d6G:function d6G(d){this.a=d},
K7:function K7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdG:function bdG(){this.d=!1
this.c=this.a=null},
d6g:function d6g(d){this.a=d},
d6c:function d6c(d){this.a=d},
d6h:function d6h(d){this.a=d},
d6b:function d6b(d){this.a=d},
d6f:function d6f(d){this.a=d},
d6d:function d6d(d){this.a=d},
d6e:function d6e(d,e){this.a=d
this.b=e},
PY:function PY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_V:function a_V(d,e,f){this.c=d
this.d=e
this.a=f},
aF7:function aF7(d,e,f){var _=this
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
eBI:function eBI(){},
eBy:function eBy(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBz:function eBz(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBw:function eBw(d){this.a=d},
eBx:function eBx(d,e,f){this.a=d
this.b=e
this.c=f},
eBF:function eBF(){},
eBG:function eBG(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBJ:function eBJ(d,e,f){this.a=d
this.b=e
this.c=f},
eBL:function eBL(d,e){this.a=d
this.b=e},
eBK:function eBK(d){this.a=d},
Kd:function Kd(d,e){this.c=d
this.a=e},
bsx:function bsx(d,e){this.b=d
this.a=e},
biD:function biD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biC:function biC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aKZ:function aKZ(){},
aMS:function aMS(){},
bye:function bye(){},
aMT:function aMT(){},
fLw(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fLw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xq.ca().Mo(B.a(["pdf"],x.s),A.u8,!0),$async$fLw)
case 3:q=e
if(q==null||J.cs(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bpJ(s,"data:application/pdf;base64,"+A.cJ.gct().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLw,v)},
idl(d){var w,v,u,t,s,r
try{w=B.jw(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cB(w)
if(v!=null){s=v.b[1]
s.toString
u=B.cb(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l9(0,w).gL(0)
if(t>0){s=J.aRA(t,1,200)
return s}}catch(r){}return 1},
fLn(d){return C.idk(d)},
idk(d){var w=0,v=B.j(x.T),u
var $async$fLn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLn,v)},
bDM(d,e,f,g){return C.idu(d,e,f,g)},
idu(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bDM=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ee(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hu0(b9,new B.au(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jV(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jV(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jV(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jV(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.oX()
f=B.z4(g,null)
a7=B.I()
a7.r=A.r5.gp(0)
f.aP(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.I()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bE
b1.e=A.dT
b1.b=A.aa
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
return B.b(a3.x8(800,h),$async$bDM)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.h8),$async$bDM)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eR(A.dH.gaR(a5))
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
return B.i($async$bDM,v)},
aQK(d,e,f){return C.idi(d,e,f)},
idi(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahY(d,e,f,new C.fLl(r,q),q,"Sign document"),$async$aQK)
case 3:if(!new B.ee(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bDM(q,t,r.b,r.c),$async$aQK)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b24(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQK,v)},
ids(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hn5(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hn5(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b7(A.a.aU(A.o.fX(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b7(A.a.aU(A.o.fX(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hmH(q.ay)+";border:2px solid "+C.hmH(q.ch)+'"></div>'
break
case 5:l=C.h60(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakl()
if(p==null)p=A.azr
n=B.T(p)
k=n.k("jx<1>")
j=new B.jx(p,0,8,k)
j.pe(p,0,8,n.c)
j=new B.bR(j,j.gL(0),k.k("bR<ak.E>"))
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
hmH(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hn5(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bDK(d,e){var w=0,v=B.j(x.H)
var $async$bDK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ci(null,null,!0,null,new C.fLu(e,C.ids(e),d),d,null,!0,!0,x.H),$async$bDK)
case 2:return B.h(null,v)}})
return B.i($async$bDK,v)},
bDL(){var w=0,v=B.j(x.T),u,t,s
var $async$bDL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GX(92,2400),$async$bDL)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fLn(s),$async$bDL)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDL,v)},
aQL(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h7f(d),$async$aQL)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=Z.fO5(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQL,v)},
hh0(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b24:function b24(d,e,f){this.a=d
this.b=e
this.c=f},
fLl:function fLl(d,e){this.a=d
this.b=e},
fLu:function fLu(d,e,f){this.a=d
this.b=e
this.c=f},
fLr:function fLr(d){this.a=d},
fLs:function fLs(d,e,f){this.a=d
this.b=e
this.c=f},
fLt:function fLt(d,e,f){this.a=d
this.b=e
this.c=f},
idj(d){return C.kF(d.w)},
idq(d){var w,v,u,t
if(d.length===0||!A.d.d5(d,C.ifa()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yR(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hzS()
if(w.b.test(u))return u
return null},
hu2(d,e,f){var w,v,u=C.hID(d),t=$.pE()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.au(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
idw(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.f5(w,d.b);v.C();){u=w.gR(w).y
t=C.yR(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fLj(d,e){var w,v=d.y,u=C.yR(v==null?"":v)
if(u!=null)return d.y=u
w=C.idw(new B.Z(e,new C.fLk(d),B.T(e).k("Z<1>")))
v=d.x
return d.y=C.hu2(v==null?"":v,null,w)},
idv(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kF(w.w))return null
v=w.y
return C.yR(v==null?"":v)},
hN1(){var w,v=$.pE(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"SL"+A.d.hx(u)},
Wn(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Wn)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Wn)
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
$.am.$1("[slides qr stash] load: "+B.w(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wn,v)},
Wo(d){return C.hN2(d)},
hN2(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Wo=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Wo)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,A.cG,null),$async$Wo)
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
return B.i($async$Wo,v)},
a8p(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8p=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8p)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Wn(),$async$a8p)
case 4:s=a6
r=C.yR(a2==null?"":a2)
if(r==null)r=a3!=null?C.hu2(a3,null,A.v6):null
q=x.N
p=B.aY(q)
for(o=J.dn(s),n=J.aW(o.gi_(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yR(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdV(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dN.aM(t)
g.n(0,"payload",A.cJ.gct().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a7().ae())
if(D.TT.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yR(J.k(q==null?"":q))
if(f==null)f=C.hh5(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Wo(s),$async$a8p)
case 7:u=new B.aGC(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hN1()
n=r==null
d=n?C.hh5(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dN.aM(t)
q.n(0,"payload",A.cJ.gct().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a7().ae())
if(D.TT.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Wo(s),$async$a8p)
case 8:u=new B.aGC(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8p,v)},
hh5(d){var w,v,u=$.pE()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.au(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
arN(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$arN)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Wn(),$async$arN)
case 6:t=f
s=J.a5(t)
r=s.gL(t)
s.bs(t,new C.cig(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.Wo(t),$async$arN)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arN,v)},
arM(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yR(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$arM)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Wn(),$async$arM)
case 6:t=o.jZ(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yR(J.k(q==null?"":q))===p){u=C.a8o(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arM,v)},
a8o(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8o=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8o)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Wn(),$async$a8o)
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
try{s=A.cf.cA(0,A.cF.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.TT.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aN(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aI(q,"sharedByAdmin",!0)
s=A.X.ap(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dR(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a7().ae())
o.n(p,g,l)}w=7
return B.b(C.Wo(p),$async$a8o)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8o,v)},
idp(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a7().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fLq(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fLy(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a7().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.X.ap(w,null)}return A.X.ap(C.idp(d==null?B.a([],x.D):d,f,g),null)},
fLx(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fLx=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8p(h,d,e,f,g),$async$fLx)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yR(e==null?"":e)
u=new B.aGo(s,t)
w=1
break}t=A.dN.aM(h)
t=A.kv.gct().aM(t)
u=new B.aGo(C.yR(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLx,v)},
h7h(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d3(q,"{"))try{w=A.X.aN(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
idt(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h7h(v))return v
u=A.a.cu(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b7(v,u))
if(C.h7h(t))return t}s=A.a.cu(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b7(v,s))
if(C.h7h(t))return t}}return null},
fLm(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.X.aN(0,A.cf.cA(0,A.cF.aM(J.nf(t,8))),null))
else w=v.a(A.X.aN(0,t,null))
v=C.hWL(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahJ(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arM(t[1]),$async$ahJ)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fLm(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yR(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arM(r),$async$ahJ)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fLm(s)
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
return B.b(C.a8o(t[1]),$async$ahJ)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fLm(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fLm(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahJ,v)},
hWL(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.TT.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h7e(C.Wj(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dc(u,x.f)
t=B.cF(t,new C.fhN(w),t.$ti.k("L.E"),x.I)
t=B.C(t,B.a6(t).k("L.E"))
return t}return B.a([],x.D)},
h7e(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j3
$.j3=q+1
J.aI(s,"id",""+1000*r+"_"+q)}}p=C.Wj(B.a2(o,x.N,x.z))
if(e&&C.kF(p.w))p.Q=new B.V(Date.now(),0,!1).a7().bS(144e8).ae()
return p},
bDv(){var w=0,v=B.j(x.aT),u,t,s
var $async$bDv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GW(),$async$bDv)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahJ(s),$async$bDv)
case 4:t=e
u=J.cs(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDv,v)},
fUq(d){var w=0,v=B.j(x.T),u,t
var $async$fUq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.XU,!0,"Dismiss",d,new C.fUr(),new C.fUs(),A.FV,!0,x.N),$async$fUq)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f88)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUq,v)},
ihk(d,e,f,g,h){return B.a4(d,!1).cc(B.dX(new C.fUt(h,e,g,f),!0,null,x.H))},
fLk:function fLk(d){this.a=d},
cig:function cig(d){this.a=d},
fLq:function fLq(){},
fhN:function fhN(d){this.a=d},
fUr:function fUr(){},
fUs:function fUs(){},
fUt:function fUt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wl:function Wl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF5:function aF5(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eBe:function eBe(){},
eBa:function eBa(d,e){this.a=d
this.b=e},
eBd:function eBd(d,e){this.a=d
this.b=e},
eBb:function eBb(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBf:function eBf(d){this.a=d},
eBg:function eBg(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBi:function eBi(d){this.a=d},
eBl:function eBl(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBm:function eBm(d,e){this.a=d
this.b=e},
eB9:function eB9(d,e){this.a=d
this.b=e},
eB8:function eB8(d,e){this.a=d
this.b=e},
Wm:function Wm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blo:function blo(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBo:function eBo(d){this.a=d},
eBp:function eBp(){},
eBq:function eBq(d){this.a=d},
eBr:function eBr(d,e){this.a=d
this.b=e},
aF2:function aF2(d){this.a=d},
aF3:function aF3(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
euS:function euS(d){this.a=d},
euR:function euR(){},
euT:function euT(d){this.a=d},
euO:function euO(d){this.a=d},
euN:function euN(){},
euP:function euP(d){this.a=d},
euQ:function euQ(d){this.a=d},
bvN:function bvN(){},
arO:function arO(d){this.a=d},
aF6:function aF6(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eBt:function eBt(d){this.a=d},
eBs:function eBs(d){this.a=d},
i17(){var w,v,u,t
for(v=0;v<4;++v){w=D.dbI[v]
try{if(Ad.c_7(w)){u=w
return u}}catch(t){}}return null},
Ry(d,e){return C.ia6(d,e)},
ia6(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Ry=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i17()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.ov?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qH(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cB(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.ez(b8,b9)
n=new B.ez("Getting ready\u2026",b9)
m=new B.ez(0,b9)
l=B.ov(new C.fFC(c2,b7,o),!1,!1)
b6.lX(0,l)
b9=x.H
B.ci(null,A.de,!1,null,new C.fFD(n,m),c6,null,!0,!0,b9)
k=new C.fFH(b7)
j=new C.fFI()
i=null
t=4
b3=c2.a
h=Ak.aT4(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fXm(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aY3(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.In.yC(i,"dataavailable",new C.fFE(e))
d=new B.bY(new B.bh($.bB,x.dT),x.b2)
A.In.yC(i,"stop",new C.fFF(d))
J.aii(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Ry)
case 8:w=7
return B.b(c5.$1(d0),$async$Ry)
case 7:a0=d0
J.fXo(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aii(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aii(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Ry)
case 15:w=14
return B.b(c5.$1(d0),$async$Ry)
case 14:a0=d0
case 13:J.fXo(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aii(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fXo(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.fi,null,b9),$async$Ry)
case 18:w=16
break
case 17:J.aii(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aii(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.da(0,A.oa),$async$Ry)
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
J.Hc(b0)
J.lB(b0)
B.bP(A.q4,new C.fFG(a7),b9)
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
if(p.pK())p.eM()
c3=o
b3=$.aw()
c3.si3(b3)
J.aRE(c3,0)
c3=n
c3.si3(b3)
J.aRE(c3,0)
c3=m
c3.si3(b3)
J.aRE(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ry,v)},
fFC:function fFC(d,e,f){this.a=d
this.b=e
this.c=f},
fFB:function fFB(){},
fFD:function fFD(d,e){this.a=d
this.b=e},
fFH:function fFH(d){this.a=d},
fFI:function fFI(){},
fFE:function fFE(d){this.a=d},
fFF:function fFF(d){this.a=d},
fFG:function fFG(d){this.a=d},
bw0:function bw0(d,e,f){this.c=d
this.d=e
this.a=f},
fbM:function fbM(){},
fbN:function fbN(){},
ciC(d){var w=0,v=B.j(x.at),u,t,s
var $async$ciC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arW(d,A.zP),$async$ciC)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bF
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ciC,v)},
ciB(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a85:function a85(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl7:function bl7(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ejZ:function ejZ(d){this.a=d},
ejX:function ejX(d){this.a=d},
ejY:function ejY(d,e){this.a=d
this.b=e},
a9_:function a9_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a90:function a90(d,e){this.a=d
this.b=e},
b3J:function b3J(){},
clD:function clD(){},
clE:function clE(){},
clF:function clF(d,e,f,g,h,i,j,k,l){var _=this
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
hAS(d){return new C.aiA(d)},
a3f:function a3f(){},
aiA:function aiA(d){this.a=d},
aRZ:function aRZ(){},
axm:function axm(d,e){this.d=d
this.b=e
this.a=null},
aTv:function aTv(d){this.b=d
this.a=null},
fAM(d,e){var w=0,v=B.j(x.H)
var $async$fAM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxN().M6(d,e),$async$fAM)
case 2:B.fOb()
return B.h(null,v)}})
return B.i($async$fAM,v)},
hrk(d,e){return(A.rH[(d^e)&255]^A.o.aD(d,8))>>>0},
fy0(d,e,f,g,h,i){var w=C.i6q(d,A.dg,f,null,A.d_,g,h,i)
return w},
htb(d){var w=F.htU(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hID(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pj.h(0,w)
if(v!=null)return v
for(u=A.pj.gdV(A.pj),u=u.gaf(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aq(s,0,2)
return A.a.aq(s+"XX",0,2)},
htj(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.dhx[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bBE(d,e){return C.i2V(d,e)},
i2V(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBE=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aVb(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cA(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eb(B.jU(o,"share",[p]),x.H),$async$bBE)
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
return B.i($async$bBE,v)},
h78(){var w=0,v=B.j(x.y),u,t,s
var $async$h78=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fpl
s=$.bBb
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bBE(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h78,v)},
bD0(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bD0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fpl
l=$.bBb
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hnM()?3:4
break
case 3:w=5
return B.b(C.bBE(m,k),$async$bD0)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bBc
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
J.Hc(q)
w=10
return B.b(B.bP(A.a2,null,x.H),$async$bD0)
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
return B.i($async$bD0,v)},
h7_(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h7_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bBc
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
return B.i($async$h7_,v)},
h7g(d,e){var w=0,v=B.j(x.H),u,t
var $async$h7g=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lQ.qZ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h7g,v)},
b2G(d,e){var w=0,v=B.j(x.y),u
var $async$b2G=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b2I(d,e),$async$b2G)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b2H(d),$async$b2G)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2G,v)}},D,A8,H,An,A9,Y,V,Ao,G,F,E,I,W,Q,Z,A_,Aa,Ap,X,Ab,L,Aq,A0,O,A1,M,Ac,Ar,As,P,A2,Ad,Ae,At,Af,Ag,Ah,Au,Av,R,Aw,K,Ax,S,T,Ay,N,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[197]
A6=c[71]
Aj=c[52]
Ak=c[62]
U=c[213]
A7=c[55]
Al=c[138]
Am=c[223]
C=a.updateHolder(c[5],C)
D=c[211]
A8=c[224]
H=c[130]
An=c[38]
A9=c[215]
Y=c[212]
V=c[201]
Ao=c[126]
G=c[181]
F=c[33]
E=c[214]
I=c[93]
W=c[115]
Q=c[140]
Z=c[30]
A_=c[170]
Aa=c[150]
Ap=c[177]
X=c[103]
Ab=c[112]
L=c[216]
Aq=c[125]
A0=c[65]
O=c[191]
A1=c[80]
M=c[152]
Ac=c[113]
Ar=c[91]
As=c[218]
P=c[117]
A2=c[132]
Ad=c[56]
Ae=c[187]
At=c[37]
Af=c[78]
Ag=c[139]
Ah=c[222]
Au=c[225]
Av=c[221]
R=c[72]
Aw=c[219]
K=c[167]
Ax=c[178]
S=c[50]
T=c[217]
Ay=c[226]
N=c[198]
A3=c[220]
A4=c[108]
A5=c[61]
C.o3.prototype={
vh(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.u_(t,v)
return new C.o3(t===0?!1:w,v,t)},
bNd(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dh()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.u_(w,u)
return new C.o3(r===0?!1:s,u,r)},
bNK(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dh()
w=o-d
if(w<=0)return p.a?$.h8G():$.Dh()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.u_(w,u)
q=new C.o3(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a32())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bNd(v)
u=w+v+1
t=new Uint16Array(u)
C.hkj(r.b,w,e,t)
w=r.a
s=C.u_(u,t)
return new C.o3(s===0?!1:w,t,s)},
mt(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bNK(v)
t=w-v
if(t<=0)return n.a?$.h8G():$.Dh()
s=n.b
r=new Uint16Array(t)
C.hSH(s,w,e,r)
w=n.a
q=C.u_(t,r)
p=new C.o3(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aF(0,$.a32())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a32())}return p},
aK(d,e){var w,v=this.a
if(v===e.a){w=C.cKb(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8G(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8G(t,e)
if(s===0)return $.Dh()
if(r===0)return t.a===e?t:t.vh(0)
w=s+1
v=new Uint16Array(w)
C.hSF(t.b,s,d.b,r,v)
u=C.u_(w,v)
return new C.o3(u===0?!1:e,v,u)},
Hx(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dh()
w=d.c
if(w===0)return t.a===e?t:t.vh(0)
v=new Uint16Array(s)
C.baR(t.b,s,d.b,w,v)
u=C.u_(s,v)
return new C.o3(u===0?!1:e,v,u)},
bAb(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.u_(r,u)
return new C.o3(!1,u,s)},
bAa(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.u_(u,r)
return new C.o3(!1,r,v)},
bAc(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.u_(p,m)
return new C.o3(s!==0,m,s)},
V8(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dh()
w=t.a
if(w===e.a){if(w){w=$.a32()
return t.Hx(w,!0).bAc(e.Hx(w,!0),!0).a8G(w,!0)}return t.bAb(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bAa(v.Hx($.a32(),!1),!1)},
a8(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8G(e,v)
if(C.cKb(u.b,t,e.b,w)>=0)return u.Hx(e,v)
return e.Hx(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vh(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8G(e,v)
if(C.cKb(u.b,t,e.b,w)>=0)return u.Hx(e,v)
return e.Hx(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dh()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hkk(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.u_(w,t)
return new C.o3(q===0?!1:r,t,q)},
bNc(d){var w,v,u,t
if(this.c<d.c)return $.Dh()
this.aSa(d)
w=$.h2_.ca()-$.ay8.ca()
v=C.h21($.h1Z.ca(),$.ay8.ca(),$.h2_.ca(),w)
u=C.u_(w,v)
t=new C.o3(!1,v,u)
return this.a!==d.a&&u>0?t.vh(0):t},
cpT(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aSa(d)
w=C.h21($.h1Z.ca(),0,$.ay8.ca(),$.ay8.ca())
v=C.u_($.ay8.ca(),w)
u=new C.o3(!1,w,v)
if($.h20.ca()>0)u=u.mt(0,$.h20.ca())
return t.a&&u.c>0?u.vh(0):u},
aSa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hkg&&d.c===$.hki&&g.b===$.hkf&&d.b===$.hkh)return
w=d.b
v=d.c
u=16-A.o.gakJ(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hke(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hke(g.b,f,u,r)}else{r=C.h21(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h22(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cKb(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.baR(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.baR(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hSG(p,r,i);--o
C.hkk(h,j,0,r,o,s)
if(r[i]<h){m=C.h22(j,s,o,n)
C.baR(r,l,n,m,r)
while(--h,r[i]<h)C.baR(r,l,n,m,r)}--i}$.hkf=g.b
$.hkg=f
$.hkh=w
$.hki=v
$.h1Z.b=r
$.h2_.b=l
$.ay8.b=s
$.h20.b=u},
gX(d){var w,v,u,t=new C.cKc(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cKd().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o3&&this.aK(0,e)===0},
tx(d,e){return this.aK(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vc(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakJ(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cKe(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cKf(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lf(A.aG.gaR(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vh(0):r
while(v.c>1){u=$.hxN()
if(u.c===0)B.b8(D.b73)
t=v.cpT(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bNc(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).hx(0)},
$iaSI:1,
$ihN:1}
C.aS8.prototype={
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
cOo(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.kc(w,w.length,B.T(w).k("kc<1>"))}}
C.Sc.prototype={
cWv(){var w,v
if(this.as==null)this.bdG()
w=this.as
v=w==null?null:w.apB()
return v==null?null:v.eS()},
bdG(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apB().eS()
this.as=new C.bQF(v)}},
gY(d){return this.at}}
C.a4b.prototype={
a5(){return"CompressionType."+this.b}}
C.bIE.prototype={
eE(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cr()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.zo[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cr()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fK(u,t)&A.zo[d])
s.c=t}return v}}
C.bGZ.prototype={
cMz(d,e){var w,v,u,t,s,r=this,q=new C.bIE(d)
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
t=r.coa(q)
if(t<0)return!1
if(t===0){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
s=r.cod(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
return!0}}return!0},
coa(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eE(8)
if(t!==D.dtc[u])v=!1
if(t!==D.d4M[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cod(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eE(1),d2=((d3.eE(8)<<8|d3.eE(8))<<8|d3.eE(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c37()
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
u[w]=l}c9.fr=B.c3(6,$.hvT(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eE(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eE(1)===0)break
i=d3.eE(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hvS()
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
if(f<h)h=f}c9.bZv(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.auy(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.auy(d3)}while(a3===0||a3===1);++a5
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
a3=c9.auy(d3)
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
d4.bt(c3)
c1=(c1<<8^D.HQ[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.HT[b9];++b9
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
if(b8===0){b8=D.HT[b9];++b9
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
if(b8===0){b8=D.HT[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.HT[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.HT[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bt(c3)
c1=c1<<8^D.HQ[c1>>>24&255^v];--c2}d4.bt(c3)
c1=(c1<<8^D.HQ[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bt(c7)
c1=(c1<<8^D.HQ[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bt(c7)
c1=(c1<<8^D.HQ[c1>>>24&255^c7&255])>>>0
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
auy(d){var w,v,u,t,s=this,r=s.ay
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
bZv(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c37(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cCl.prototype={
aIt(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bQI(e)
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
if(w>0)e.aIw(w,!1)
r.coy(e)
q=r.r
v=r.f
u=e.aLA(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aQ()!==33639248)break
s=new C.b9x()
s.cWu(0,u,e,f)
q.push(s)}},
coy(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8j(20,r)
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
bQI(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8j(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amo(A.ic)
o.aMR(r.eS(),A.ic,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aQ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cCj.prototype={}
C.axM.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cCm.prototype={
aIt(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aQ()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aG0.h(0,e.b_())
o.c=w==null?D.MG:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aQ()
o.r=e.aQ()
o.w=e.aQ()
v=e.b_()
u=e.b_()
o.x=e.aok(v)
o.y=e.hj(u).eS()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aXe:D.Ed
o.ay=f
o.Q=e.hj(t)
if(o.at!==D.Ed&&u>2){w=o.y
w.toString
s=B.ro(w,A.ic,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.aok(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aXf
o.ax=new C.cCj(r,q)
w=D.aG0.h(0,q)
o.c=w==null?D.MG:w}}}if((o.b&8)!==0){p=e.aQ()
if(p===134695760)o.f=e.aQ()
else o.f=p
o.r=e.aQ()
o.w=e.aQ()}},
gL(d){return this.bnq().length},
apB(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.ro(new Uint8Array(0),A.ic,q,q)
w=r.at
if(w!==D.Ed)if(p.gL(0)<=0)r.at=D.Ed
else{if(w===D.aXe){p=r.bLv(p)
r.Q=p}else if(w===D.aXf){p=r.bL8(p)
r.Q=p}r.at=D.Ed}w=r.c
if(w===D.aiv){v=p.c
u=B.dm()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pI.BD(p.eS(),!0,!1)
else{t=B.a8P(A.ic,r.w)
p=r.Q
p.toString
A.pI.a4s(p,t,!0,!1)
u.b=t.H4()}r.Q.c=v
return B.ro(u.bk(),A.ic,q,q)}else if(w===D.aiw){s=B.a8P(A.ic,32768)
p=r.Q
v=p.c
C.hB2().cMz(p,s)
u=s.H4()
r.Q.c=v
return B.ro(u,A.ic,q,q)}else return B.ro(p.eS(),A.ic,q,q)},
bnq(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eS()},
u(d){return this.x},
b9y(d){var w=this.ch,v=C.K3(C.hrk(w[0].N(0),d))
w[0]=v
v=w[1].a8(0,v.V8(0,C.K3(255)))
w[1]=v
w[1]=v.aI(0,C.K3(134775813)).a8(0,C.K3(1)).V8(0,C.K3(4294967295))
w[2]=C.K3(C.hrk(w[2].N(0),w[1].mt(0,24).N(0)))},
aRz(){var w=(this.ch[2].V8(0,C.K3(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bLv(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.ro(new Uint8Array(0),A.ic,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b9y(u[v.c++]^r.aRz())}t=r.Q.eS()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aRz()
r.b9y(s)
u&2&&B.aj(t)
t[w]=s}return B.ro(t,A.ic,q,q)},
bL8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hj(8).eS()
v=16}else if(k===2){w=d.hj(12).eS()
v=24}else{w=d.hj(16).eS()
v=32}u=d.hj(2).eS()
t=d.hj(d.gL(0)-10)
s=d.hj(10)
r=t.eS()
k=this.ay
k.toString
q=C.hSm(k,w,v)
p=new Uint8Array(B.ck(A.aG.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ck(A.aG.ds(q,v,k)))
if(!C.hjK(A.aG.ds(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bFz(k,new Uint8Array(16),p)
k=x.S
m=J.a5A(0,k)
m=n.r=new C.cls(m)
m.c=!0
m.b=m.bmI(!0,new C.atm(p))
if(m.c)m.d=B.bq(D.os,!0,k)
else m.d=B.bq(D.zc,!0,k)
l=C.hhY(C.hi_(),64)
l.bg2(new C.atm(o))
n.w=l
n.cW4(r,0,r.length)
k=s.eS()
m=n.x
m===$&&B.c()
if(!C.hjK(k,m))throw B.W(B.fm("macs don't match"))
return B.ro(r,A.ic,null,null)}}
C.b9x.prototype={
cWu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.aok(w)
if(v>0){t=e.hj(v).eS()
n.ax=t
if(v>=4){s=B.ro(t,A.ic,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a8j(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.ti()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.ti()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.ti()
p-=8}if(p>=4&&n.y===65535)n.y=o.aQ()}}}}if(u>0)e.aok(u)
f.c=n.as
t=new C.cCm(D.MG,n,D.Ed,B.a([C.K3(0),C.K3(0),C.K3(0)],x.f3))
n.ch=t
t.aIt(0,f,g)},
u(d){return this.at}}
C.cCk.prototype={
cMA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cCl(B.a([],x.fT))
this.a=g
g.aIt(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aS8(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.M)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Sc(o,A.o.ao(Date.now(),1000),0):C.ha6(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.ha6(o,q.w,q)
if(k.as==null)k.bdG()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amo(A.ic)
j.aMR(o,A.ic,h,h)}i=j==null?h:j.eS()
if(i!=null)new B.Gk(!1).DH(i,0,h,!0)}}return v}}
C.bFz.prototype={
cW4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CB(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hAM(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bOZ(u,0,w,0,o)}else{o===$&&B.c()
q.bLz(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lq(w,0)
m.x=A.aG.ds(m.x,0,10)
w=m.w
l=w.a
l.ke(0)
w=w.d
w===$&&B.c()
l.CB(0,w,0,w.length)
return f}}
C.clx.prototype={}
C.clB.prototype={}
C.clv.prototype={}
C.atm.prototype={}
C.clA.prototype={
cMP(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bg2(new C.atm(A.aG.fJ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bQ2(n.a,n.b,t,s,r)
r+=v}A.aG.h9(f,g,g+w,s)
return o.a.c},
bQ2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CB(0,d,0,d.length)
v.CB(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lq(u,0)
u=m.c
A.aG.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CB(0,s,0,s.length)
w.Lq(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.clw.prototype={}
C.clu.prototype={}
C.atn.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.atn){v=this.a
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
w=A.o.tx(w,e.gbZM())
if(!w)e.gbZM()
return w},
aL_(d,e){this.a=0
this.b=d},
tA(d){return this.aL_(d,null)},
aLD(d){var w,v=this,u=v.b
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
w.b1f(v,u)
u=w.b
u===$&&B.c()
w.b1f(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b1f(d,e){var w,v=A.o.fX(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bv(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.clz.prototype={
ke(d){var w,v=this
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
ap4(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b2I(u,0)
v.c=0}v.a.aLD(1)},
CB(d,e,f,g){var w=this.cmV(e,f,g)
f+=w
g-=w
w=this.cmW(e,f,g)
this.cmM(e,f+w,g-w)},
Lq(d,e){var w,v=this,u=C.hhZ(v.a),t=u.a
t===$&&B.c()
t=C.h7L(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h7L(w,3)
v.cmQ()
v.cmN(u)
v.atn()
v.cgX(d,e)
v.ke(0)
return 20},
b2I(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.od(A.aG.gaR(d),d.byteOffset,d.length).getUint32(e,A.ir===w.d)
if(w.w===16)w.atn()},
atn(){this.cW3()
this.w=0
A.d.hv(this.r,0,16,0)},
cmM(d,e,f){while(f>0){this.ap4(d[e]);++e;--f}},
cmW(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b2I(d,e)
e+=4
f-=4
w.aLD(4)
v+=4}return v},
cmV(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ap4(d[e]);++e;--f;++v}return v},
cmQ(){this.ap4(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ap4(0)}},
cmN(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.atn()
u=v.d
switch(u){case A.ir:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.EE:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bd("Invalid endianness: "+u.u(0)))}},
cgX(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ir===this.d,s=0;s<w;++s){r=v[s]
q=J.od(A.aG.gaR(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.clC.prototype={
cW3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qj[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qj[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qj[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qj[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qj[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qj[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qj[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qj[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qj[30]
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
C.cly.prototype={
bg2(d){var w,v,u,t,s=this,r=s.a
r.ke(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CB(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lq(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hv(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.h9(w,0,u,s.d)
s.baL(s.d,u,54)
s.baL(s.e,u,92)
u=s.d
r.CB(0,u,0,u.length)},
Lq(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lq(s,w)
s=u.e
t.CB(0,s,0,s.length)
v=t.Lq(d,e)
s=u.e
A.aG.hv(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CB(0,s,0,s.length)
return v},
baL(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.clt.prototype={}
C.cls.prototype={
a2K(d){return(D.os[d&255]&255|(D.os[d>>>8&255]&255)<<8|(D.os[d>>>16&255]&255)<<16|D.os[d>>>24&255]<<24)>>>0},
bmI(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c3(4,0,!1,u)
switch(v){case 4:q=J.od(A.aG.gaR(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2K((m>>>8|(m&$.qj[24])<<24)>>>0)^D.cH8[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.od(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2K((k>>>8|(k&$.qj[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2K((k>>>8|(k&$.qj[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.od(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2K((g>>>8|(g&$.qj[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2K(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bd("Should never get here"))}return s},
bOZ(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.od(A.aG.gaR(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ef[a8&255]
u=D.ef[a9>>>8&255]
t=$.qj[8]
s=D.ef[b0>>>16&255]
r=$.qj[16]
q=D.ef[b1>>>24&255]
p=$.qj[24]
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
a7=D.os[n&255]
b0=D.os[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.os[l>>>8&255]
a9=D.os[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.os[b1>>>8&255]
h=D.os[n>>>16&255]
g=D.os[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.os[l>>>24&255]
s=s[3]
a1=J.od(A.aG.gaR(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.od(A.aG.gaR(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.od(A.aG.gaR(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.od(A.aG.gaR(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bLz(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.od(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.od(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.od(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.od(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ee[a6&255]
v=D.ee[b0>>>8&255]
u=$.qj[8]
t=D.ee[a5>>>16&255]
s=$.qj[16]
r=D.ee[a4>>>24&255]
q=$.qj[24]
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
a4=D.zc[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zc[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zc[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zc[o>>>8&255]
i=D.zc[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zc[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.od(A.aG.gaR(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bQE.prototype={}
C.bQF.prototype={
gL(d){var w=this.a.length
return w},
apB(){return B.ro(this.a,A.ic,null,null)}}
C.bb5.prototype={
vd(d){return C.hVD(d)}}
C.cvT.prototype={
N5(d){var w=d.w,v=Math.max(1,A.k.dg(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aar(v,t+20,u+16,t,u,B.u9(d.x))},
nu(d){return!1}}
C.bRH.prototype={
cGI(d){if(this.b)throw B.W(B.bd("FontLoader is already loaded"))
this.c.push(d.bM(new C.bRI(),x.E))},
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
return B.b(p.fAM(f,r),$async$mK)
case 5:case 3:t.length===s||(0,B.M)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mK,v)}}
C.awr.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8N.prototype={
A(d,e){if(e==null)return!1
if(J.bQ(e)!==B.b0(this))return!1
return e instanceof C.a8N&&e.a===this.a},
gX(d){return B.bv(B.b0(this),B.x_(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.fUv)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.a1j.prototype={
T(){return new C.aJU(B.aY(x.N))},
cUa(d){return this.d.$1(d)},
cRT(){return this.e.$0()}}
C.aJU.prototype={
Z(){this.a2()
this.Ps()},
Ps(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ps=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cRT(),$async$Ps)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fae(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ps,v)},
Zr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.fai(t),q),q.k("L.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.faj(t))
w=3
return B.b(C.ao7(p),$async$Zr)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fak(t,s,p))
w=4
return B.b(t.Ps(),$async$Zr)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Zr,v)},
a1E(d){return this.cr4(d)},
cr4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.faf(t))
s=J.r(d,"id")
w=3
return B.b(C.c1E(J.k(s==null?"":s)),$async$a1E)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fag(t))
w=1
break}q=C.h7e(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cUa(B.a([q],x.D)),$async$a1E)
case 4:if(t.c==null){w=1
break}t.m(new C.fah(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1E,v)},
Pr(d,e){return this.bM0(0,e)},
bM0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ci(null,null,!0,null,new C.fa9(q),r,null,!0,!0,x.y),$async$Pr)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.faa(t))
s=s.h(e,"id")
w=4
return B.b(C.ao6(J.k(s==null?"":s)),$async$Pr)
case 4:if(t.c==null){w=1
break}t.m(new C.fab(t))
w=5
return B.b(t.Ps(),$async$Pr)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pr,v)},
cFI(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iE[B.bL(v)-1]+" "+B.bV(v)},
aRq(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.P7,A.n),w,e,w,w,w,w,w,e)},
aRp(d){return this.aRq(d,44)},
b7R(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.P7:u,r=B.m(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.JH,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.JH,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bDz,u,u,u)],p))}return B.E(B.aB(A.c8,B.dd(u,B.B(q,A.m,u,A.b8,A.i,0,u,u),u,u,A.b6,new B.o(u,u,u,r,u,s,A.n),A.hq,u,u,u,A.tZ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fao(this,d),u,u,u,u,u,u,!1,A.a4),1)},
ckT(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d2.j(0.14):D.YV,n=B.m(18),m=p?A.d2:A.ds
m=B.J(m,A.r,p?1.8:1)
w=this.aRp(A.qn)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aTy,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cL,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aTA,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.P7:q
u=p?q:B.J(A.aZ,A.r,1.6)
r=p?D.bUv:q
return B.aB(q,B.dd(q,B.B(B.a([w,A.bd,t,B.dd(q,r,q,q,A.b6,new B.o(q,q,u,q,q,v,A.a6),A.fN,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b6,new B.o(o,q,m,n,q,q,A.n),A.fN,q,q,A.d3,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fad(this,p,d),q,q,q,q,q,q,!1,A.a4)},
csH(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cFI(J.k(o==null?"":o))
o=B.m(18)
w=B.J(A.ds,A.r,1)
v=r.aRp(A.On)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aTy,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cL,B.d(p+" slides"+t,q,q,q,q,q,q,D.aTA,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b4o(A.hM,A.bt,"Bring it back",r.r?q:new C.fal(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bo,r.b4o(A.e9,A.cs,"Delete",r.r?q:new C.fam(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.YV,q,w,o,q,q,A.n),q,q,q,A.d3,D.bxU,q,q,q)},
b4o(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hc(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
atD(d,e,f){var w=null
return new B.D(D.bwW,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fq7,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fid,A.L,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aJ(d,A.bX,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aRq(A.z_,46),A.bd,D.bEs],t)
if(j.r)s.push(D.elj)
s.push(B.aH(i,i,i,i,A.rB,i,i,i,new C.far(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.J(A.ds,A.r,1)
o=J.a5(h)
q=B.a([A.W,u,new B.D(D.bAA,s,i),B.p(i,B.B(B.a([j.b7R(0,A.yH,"Save",j.a.c.length),j.b7R(1,A.OA,"Saved",o.gL(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bzB,A.eB,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bt).j(0.12)
s=B.m(14)
r=B.J((j.y?A.cs:A.bt).j(0.4),A.r,1)
p=j.y
n=p?A.Op:A.ed
n=B.X(n,p?A.cs:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ac,B.E(B.d(m,i,i,i,i,i,i,A.Uz,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bzx,A.iB,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.flW,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fp8,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fas(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.B(s,A.m,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.atD(A.qn,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.M)(r),++l)s.push(j.ckT(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ekR)
else if(j.e==null)s.push(j.atD(A.a1n,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.atD(A.p5,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.csH(r.gR(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cn,B.cr(u,i,Y.akj,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc5H()
p=s?i:D.P7
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yH,m?A.jM:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bAc,B.aB(i,B.dd(i,B.B(B.a([k,A.a8T,new B.ds(1,A.cn,B.eN(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jM:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.m,i,A.b8,A.i,0,i,i),i,i,A.b6,new B.o(s,i,i,o,n,p,A.n),A.hq,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.p(i,B.bl(!0,B.x(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b3W,i,i,i,i,i,i,i,i)}}
C.ot.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ae()],x.N,x.z)}}
C.Z_.prototype={
T(){return new C.ayk(B.a([],x.k),B.f8(null,x.H))},
ge1(){return this.c}}
C.ayk.prototype={
Z(){this.a2()
this.PC()},
PC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2g(t.a.c),$async$PC)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cLB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PC,v)},
cz_(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qr(t.d,new C.cLE(d))
v=w<0
if(v&&C.hSJ(d))return t.f
u=t.d
if(v)J.pH(u,0,d)
else J.aI(u,w,d)
v=x.a
B.fYI(new C.cLF(t),v)
return t.f=t.f.bM(new C.cLG(t,d),v).eP(new C.cLH())},
IV(d,e,f){return this.ces(0,e,f)},
aZf(d,e){return this.IV(0,e,!1)},
ces(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cc(B.dX(new C.cLA(t,e),!1,null,x.H)),$async$IV)
case 3:w=4
return B.b(t.f,$async$IV)
case 4:w=5
return B.b(t.PC(),$async$IV)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
aYw(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dFT:d
this.IV(0,new C.ot(w,v,new B.V(Date.now(),0,!1)),!0)},
c59(){return this.aYw(null)},
adX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cLI(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adX)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aYw(s)
case 1:return B.h(u,v)}})
return B.i($async$adX,v)},
IU(d,e){return this.bLS(0,e)},
bLS(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ci(null,null,!0,null,new C.cLv(e),s,null,!0,!0,x.y),$async$IU)
case 3:if(g!==!0){w=1
break}t.m(new C.cLw(t,e))
w=4
return B.b(t.f,$async$IU)
case 4:w=5
return B.b(C.agH(t.a.c,e.a),$async$IU)
case 5:w=6
return B.b(t.PC(),$async$IU)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IU,v)},
Dp(d){return this.bE0(d)},
bE0(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cLr(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dp)
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
return B.b(t.aZf(0,d),$async$Dp)
case 9:w=5
break
case 7:w=10
return B.b(F.h7N(r,d.b,null),$async$Dp)
case 10:w=5
break
case 8:w=11
return B.b(t.IU(0,d),$async$Dp)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dp,v)},
bZJ(){var w,v,u=null,t=[D.dFW,D.dFU,D.dFV],s=new C.cLy(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d1.j(0.4),A.f_,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aQ(999,999)
n.push(B.p(u,new B.y(D.dpD[w],u,A.oI,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bj(v,v,v,v),u,u,A.n),u,u,u,u,A.od,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fPO,A.O,B.bW(A.bC,n,A.bq,u,6,6),A.aN,B.aB(u,B.p(u,D.f0b,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.akI,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cLx(this),u,u,u,u,u,u,!1,A.a4)],o),A.E,u,A.e,A.i,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.ab,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c1Y,A.n),u,u,u,u,D.bAK,u,u,u)},
bDZ(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bx(B.m(6),new B.an(A.a_,v,A.b1,A.t,B.a([B.eN(A.A,F.aoH(d.b),A.f,A.bV),D.eqY,B.ao(v,B.aB(v,B.p(v,D.bVk,A.f,v,v,D.b4T,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cLm(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.ffk,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fD(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fm7,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cLn(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cLo(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.D(H.aje,B.hc(B.aB(s,B.p(s,A.apS,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.I,12)],x.V),E.wr,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc6w(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.ne,s,s,s,!0,s,s,s,s,s,D.fPS,s,s,s,1,s,!0)
if(t.e)r=D.b8m
else{w=t.bZJ()
v=B.a([D.fB3,A.ac],r)
if(J.cL(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.feL,s,s,s),A.f,s,s,new B.o(D.bdu,s,s,u,s,s,A.n),s,s,s,s,A.ym,s,s,s))}r=B.a([new B.nZ(A6.a_e,new B.mj(w,s),s),new B.nZ(D.bA6,new B.mj(B.B(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cs(t.d))r.push(D.f6M)
else r.push(new B.nZ(D.bzz,B.Ph(new B.oz(new C.cLJ(t),J.ad(t.d),!0,!0,!0,0,B.t5(),s),D.b7C),s))
r=B.vJ(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c7(q,D.bc8,r,s,!1,!1,s,s)}}
C.YY.prototype={
T(){return new C.ayg(B.a([],x.bx))},
Um(d){return this.d.$1(d)}}
C.aFI.prototype={}
C.ayg.prototype={
b1h(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b3,A.aO),w),u=this.gaZe()
v.aS(0,u)
w=new B.as(new B.bb(e,A.b3,A.aO),w)
w.aS(0,u)
return new C.aFI(v,w,f)},
Eg(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cK(A.qa,new C.cKQ(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b3,A.aO),v)
t=m.gaZe()
u.aS(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b3,A.aO),v)
u.aS(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b3,A.aO),v)
u.aS(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.M)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b3,A.aO),v)
o.aS(0,t)
n=new B.as(new B.bb(p.b,A.b3,A.aO),v)
n.aS(0,t)
r.push(new C.aFI(o,n,p.c))}if(r.length===0)r.push(m.b1h("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpm()
q=r.a
q.Um(q.c)}q=r.d
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
s.P$=0}r.a1()},
gpm(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mC(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rt(n,w,v,t,u)},
AT(){var w=0,v=B.j(x.H),u=this,t
var $async$AT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpm()
t=u.a
w=2
return B.b(t.Um(t.c),$async$AT)
case 2:return B.h(null,v)}})
return B.i($async$AT,v)},
c6u(){this.m(new C.cKP(this))
this.Eg()},
aYd(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cKS(w,d,v))
w.Eg()},
c6v(d,e){var w=A.d.cE(this.w,e)
this.m(new C.cL_())
this.Eg()
$.aV.x1$.push(new C.cL0(w))},
QQ(d){return this.ckJ(d)},
ckJ(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l_(80,1400,A.eK),$async$QQ)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$QQ)
case 8:p=f
o=q.b.toLowerCase()
n=J.aie(o,".png")?"image/png":"image/jpeg"
r.m(new C.cKT(d,n,p))
r.Eg()
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
return B.i($async$QQ,v)},
xV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hv6(r,t.gpm()),$async$xV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cKR(t,s))
t.Eg()
case 1:return B.h(u,v)}})
return B.i($async$xV,v)},
cl0(d){var w,v=this,u=null,t=F.fET(d.c)
if(t==null)return new B.bM(A.a5,u,u,B.hr(D.bOv,D.fDB,new C.cKV(v,d),u),u)
w=x.p
return new B.D(A.ct,new B.an(A.a_,u,A.ab,A.t,B.a([B.bx(B.m(12),B.fQ(t,A.A,u,u,A.cg,A.bV,!0,140,!1,u,1/0),A.ap),B.ao(u,B.B(B.a([v.b4p(A.ki,new C.cKW(v,d)),A.bo,v.b4p(A.cz,new C.cKX(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b4p(d,e){var w=null
return B.aG(!1,A.a2,!0,w,B.aO(!1,w,!0,new B.D(A.hK,B.X(d,A.c,w,w,w,18),w),A.cM,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aT,0,w,w,A.cM,w,w,A.ai)},
IW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AT(),$async$IW)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h7N(s,t.gpm(),new C.cKZ(t)),$async$IW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eH(B.a([new B.D(A.qb,B.hr(D.bTf,D.fJJ,n.gaxl(),B.fy(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.apR,m,m,m,new C.cL1(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Y_,m,1,m,m,m,!1,m,!1,E.ne,m,m,m,!0,m,m,m,m,m,D.fEs,m,m,m,1,m,!0),j=At.aVn(O.lv,A.c,Af.WP,A.on,D.fFd,n.gc6t()),i=B.m(18),h=n.gaxk(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j0,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eN(A.A,F.aoH(n.gpm()),A.f,A.dw),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a4)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.x(B.a([D.fRr,A.au,B.d(F.h6h(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.frT,m,m,m),A.W,B.dl(E.ap9,E.aUl,h,B.bo(A.d1,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.i,0,A.p),1)],l),A.m,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(E.Y_,m,m,i,m,m,A.n),m,m,m,m,A.bf,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oE,!0,A.a3,m,A.ao,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.O,w,A.O,B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aQ(16,16)
u=new B.ay(O.lv.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bRV,m,m,m,v===0?m:new C.cL2(n,v),m,m,m,m,"Move up",A.cd)
r=i.length
q=B.aH(m,m,m,m,D.bYo,m,m,m,v===r-1?m:new C.cL3(n,v),m,m,m,m,"Move down",A.cd)
r=r===1?m:new C.cL4(n,v)
p=new B.aQ(12,12)
o=new B.aQ(12,12)
g.push(B.p(m,B.x(B.a([new B.cd(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fsr,m,m,m,m,m,m,m,m,m),A.b0,s,q,B.aH(m,m,m,m,B.X(A.e9,A.oZ,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cd)],l),m),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bj(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ch,!0,A.a3,m,A.ao,m,m,m,m),A.am,n.cl0(i[v]),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bj(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m)],l),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(E.ne,m,new B.bK(u,u,u,u),new B.bj(w,w,w,w),m,m,A.n),m,m,new C.a8N(h),A.ec,D.by8,m,m,m))}return B.ow(!0,B.c7(k,E.ahh,B.cr(g,m,D.byD,m,m,A.ah,!1),m,!1,!1,j,m),new C.cL5(n),x.C)}}
C.ayi.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.ne,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d1.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eH,B.aG(!1,A.a2,!0,t,B.aO(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(u.e,t,t,t,t,t,t,D.aSV,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bf,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ai),t)}}
C.aqV.prototype={
T(){return new C.aEw()}}
C.aEw.prototype={
Z(){this.a2()
this.a_6()},
bx(d){this.bH(d)
if(d.c!=this.a.c)this.a1t()},
a1t(){var w=0,v=B.j(x.H),u=this,t
var $async$a1t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dU(t,x.H),$async$a1t)
case 2:u.d=null
if(u.c!=null)u.m(new C.efF(u))
w=3
return B.b(u.a_6(),$async$a1t)
case 3:return B.h(null,v)}})
return B.i($async$a1t,v)},
a_6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.YC(B.cG(n,0,null),new B.PE(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.ip(0).da(0,A.q6),$async$a_6)
case 7:if(r.c==null){w=1
break}r.d.tC(!1)
r.m(new C.efD(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.efE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_6,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a1()},
c9b(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h8(0)
w.m(new C.efG(w))}else{v.q8(0)
w.m(new C.efH(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jr.j(0.92),D.LG.j(0.95)],x.O)
w=B.J(A.c1.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qq,A.c1,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c2(B.at(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),A.bg)}if(p.f)return B.at(B.X(A.aop,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b9d
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eN(A.A,new B.a7(r,q,new B.Al(s,o),o),A.t,A.bV)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.i1,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bx(n,new B.an(A.a_,o,A.b1,A.t,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc9a(),o,o,o,o,o,o,!1,A.a4)}}
C.xN.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jr.prototype={}
C.adC.prototype={
B(d){return B.p_(new C.e2e(this,B.P(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.ad0.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.J(D.jr.j(t?0.35:0.4),A.r,1),p=t?D.Mf:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.J(A.c1.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],o)
w=this.c
o=B.E(B.p(u,new B.fD(0.5625,C.iar(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.alb,u,u,u,u),1)
m=D.jr.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jr,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a2,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cL,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aB:D.bkH,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bK(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ajv,u,u,u)],v),A.ak,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ai)}}
C.xQ.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nP.prototype={}
C.bkd.prototype={
a_f(d){var w=null
return new B.bM(A.a5,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c9F(){return this.a_f(1)},
axX(d){var w=null,v=B.m(8),u=B.J(A.ih,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.af5,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ih,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ih,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b8,A.i,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axX("TAARIFA ZA WANANDOA"),A.am,w.c9F(),A.cL,w.a_f(0.9),A.cL,w.a_f(0.7),A.O,w.axX("TAMKO LA MAKUBALIANO"),A.fQ,w.a_f(1),A.cL,w.a_f(0.95),A.O,w.axX("MASHAHIDI"),A.b0,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.adF.prototype={
B(d){return B.p_(new C.ek1(B.P(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afk.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.J(A.az.j(q?0.35:0.4),A.r,1),m=q?D.bkd:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.J(A.az.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],l)
w=this.c
v=C.h6N(w.a)
if(v==null)v=A.d.gI(D.RC)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fD(0.5625,new B.an(A.a_,r,A.b1,A.t,B.a([B.bT(0,B.fQ(C.h6M(v.d),A.A,r,r,A.cg,A.bV,!0,r,!1,r,r),0,0,0),new B.D(A.aka,new C.bkd(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.alb,r,r,r,r),1)
j=A.az.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Mg,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a2,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cL,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aB:D.bcJ,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bK(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ajv,r,r,r)],s),A.ak,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ai)}}
C.l0.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8e.prototype={}
C.W9.prototype={
T(){var w=$.aw()
return new C.aEN(new B.cB(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mK(0,null,null),A.d.gI(D.a4n),D.dQ4,B.a([],x.L),B.a([],x.gE))}}
C.aEN.prototype={
Z(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zN(C.fIM(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
w=x.a
C.fHI().bM(new C.emZ(v),w)
$.r3().jM(0,"assets/images/ngmy_logo.png").bM(new C.en_(v),w).eP(new C.en0())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a1()},
aeL(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Jd(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l_(88,1600,A.eK),$async$Jd)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Jd)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hvn(m,p),$async$Jd)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bEa(new B.pV(o,1),m),$async$Jd)
case 10:if(r.c!=null)r.m(new C.emB(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aeL("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jd,v)},
Xf(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Xf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hvn(s,q),$async$Xf)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bEa(new B.pV(r,1),s),$async$Xf)
case 4:if(t.c!=null)t.m(new C.emx(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Xf,v)},
aeM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.emI(q))
t=4
q.a.toString
p=C.ieX()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeM)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.emJ(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aeL(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.emK(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeM,v)},
a_k(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.emD(q,i))
t=4
q.a.toString
p=C.ieW()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_k)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.emE(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.emF(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.emG(q))
$.aV.x1$.push(new C.emH(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_k,v)},
c9V(d){this.m(new C.emC(this,d))},
Ex(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ex=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.emz(q))
t=4
w=7
return B.b($.aV.gmF(),$async$Ex)
case 7:w=8
return B.b(B.bP(A.mC,null,x.H),$async$Ex)
case 8:k=$.aV.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.q5))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m4(1800/p.gY(0).a),$async$Ex)
case 9:o=e
w=10
return B.b(o.hr(A.h8),$async$Ex)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.agL(J.eR(A.dH.gaR(n)),"ngmy_news.png","image/png"),$async$Ex)
case 11:m=e
q.aeL(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aeL(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.emA(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ex,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.lc,a2,a2,a2,new C.emQ(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bTL,a2,a2,a2,new C.emR(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.om,a2,a2,a2,a4?a1.gb_o():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eH(v,a2,a2,!0,!0,A.Bs,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f0l,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fD(0.7142857142857143,B.eN(A.A,new B.ex(new C.b1F(t,s,r,a1.x,a2),a1.d),A.f,A.dw),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.t8,a2,a2,a2)
t=a1.as?a2:a1.gc9U()
t=B.a([B.E(B.dl(D.bUw,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ch,a2,a2,a2),t,B.bo(D.tH,a2,a2,a2,A.c,A.h_,a2,a2,new B.b7(B.m(14),P.vt),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.m(10),B.fQ(r,A.A,a2,a2,A.cg,A.bV,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.at,r,B.aH(a2,a2,a2,a2,D.bRc,a2,a2,a2,a1.as?a2:a1.gbKt(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.t8,a2,a2,a2)
q=B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aTg("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a3,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.djG[o]
p.push(B.mQ(a2,D.tH,new B.y(n.a,a2,A.pw,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hl,new C.emS(a1,n),a2,a2,P.vt,a2))}p=B.bW(A.bC,p,A.bq,a2,6,8)
m=a1.Q
m=B.bW(A.bC,B.a([D.fQ_,A.bd,B.j0(a2,a2,a2,D.fzK,a2,new C.emT(a1),m==="en",a2,a2,a2,a2),A.ac,B.j0(a2,a2,a2,D.fzF,a2,new C.emU(a1),m==="sw",a2,a2,a2,a2)],w),A.vm,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.t8,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d0(D.a4n,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gL(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aRK(g==null?h.a(g):g))}k=B.cr(k,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d0(D.a4n,10,a2,j),h=j.$ti,j=new B.bR(j,j.gL(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aRK(g==null?h.a(g):g))}j=B.cr(i,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gc9X()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.I,18)],v)
v=B.a([u,A.aA,new B.D(A.ct,s,a2),t,A.aA,new B.D(A.ct,r,a2),q,A.O,p,A.W,m,A.aA,new B.D(A.ct,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aN,B.aB(a2,B.p(A.A,B.B(B.a([D.bUq,A.ac,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fw,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.ux,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dS,B.B(B.a([D.dAL,A.at,D.bEO],w),A.m,a2,A.e,A.i,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a5
q=e?A.b5.j(0.35):D.tH
p=new B.aQ(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fpS,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.WD,new B.o(q,a2,new B.bK(d,d,d,d),new B.bj(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.ct,A.iB,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d5f[o]
t.push(B.mQ(a2,D.tH,new B.y(a0,a2,A.JV,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hl,new C.emV(a1,a0),a2,a2,P.vt,a2))}u.push(B.bW(A.bC,t,A.bq,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aTg("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.emW(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a3,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc9W()
u.push(B.B(B.a([t,A.ac,B.I5(A.z3,s,B.nI(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gb_o()
u.push(B.dl(A.om,D.fLq,t,B.bo(A.cU,a2,a2,a2,a2,A.JF,a2,a2,new B.b7(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cr(v,a1.r,A.ajW,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.J(E.ka.j(0.5),A.r,1)
v.push(B.bT(0,B.ec(B.at(B.p(a2,B.B(B.a([E.a8U,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jl,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Bi,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bB1,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.Bs,new B.an(A.a_,a2,A.ab,A.t,v,a2),a2,!1,!1,a2,a2)},
aTg(d){var w=null
return B.br(w,new B.b5(4,B.m(14),A.a0),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tH,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.JQ,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aRK(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b1(d.f),p=s?A.bA:A.bz
p=B.J(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.l3,t,t,t,t),A.fQ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bxa,t,t,t,t))
w.push(A.cL)
w.push(new B.D(A.jz,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b8,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iA,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.emy(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.zN.prototype={
bcS(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zN(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cKl(d){var w=null
return this.bcS(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aDk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cgA(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cgy(),B.T(w).k("N<1,n>")).c0(0,new C.cgz())
t=B.C(w,w.$ti.k("L.E"))}else t=k
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
return this.bcS(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFL(d){return this.f}}
C.tu.prototype={
a5(){return"NewsLayout."+this.b}}
C.BI.prototype={
a5(){return"NewsFrame."+this.b}}
C.lp.prototype={}
C.b1F.prototype={
rC(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b_q(d,e,f,g){return this.rC(d,e,null,1.25,f,A.bp,g)},
Qa(d,e,f,g,h){return this.rC(d,e,f,1.25,g,A.bp,h)},
ay2(d,e,f,g,h){return this.rC(d,e,null,f,g,A.bp,h)},
ay1(d,e,f,g,h){return this.rC(d,e,f,g,0,A.bp,h)},
b_s(d,e,f,g,h){return this.rC(d,e,null,f,0,g,h)},
ca0(d,e,f,g,h,i){return this.rC(d,e,f,g,0,h,i)},
ay0(d,e,f,g){return this.rC(d,e,null,f,0,A.bp,g)},
aeP(d,e,f){return this.rC(d,e,null,f,0,A.bp,A.cP)},
b_r(d,e,f,g,h){return this.rC(d,e,f,g,0,h,A.cP)},
ca_(d,e,f,g){return this.rC(d,e,null,f,0,g,A.cP)},
c9Z(d,e,f,g){return this.rC(d,e,f,g,0,A.bp,A.cP)},
aeQ(d,e,f,g,h,i){return this.rC(d,e,f,g,h,A.bp,i)},
b_p(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.jR(new B.eu(d,u,u,A.cQ,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a3,A.bZ,new B.jA(1),u,u,h,u,A.bW,u)
v.nY(g)
if(!v.b.a.c.gaF1())return w
w-=2}return j},
aeN(d,e,f,g,h,i,j,k){return this.b_p(d,e,f,g,h,i,j,k,A.bp)},
aA8(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aA7(d){return this.aA8(null,!1,d)},
ahI(d,e){return this.aA8(null,d,e)},
crO(d,e){return this.aA8(d,!1,e)},
gb1E(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVW(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OX(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aeN(w.gaVW(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaVW(),v,g,A.a1,v,v,v,w.ay1(u,t,f,1.02,A.P),e,v,v)},
aW0(d){return this.OX(d,A.L,null,2,78,30)},
ac9(d,e,f,g,h){return this.OX(d,e,null,f,g,h)},
bZB(d,e,f,g,h){return this.OX(d,A.L,e,f,g,h)},
bZA(d,e,f){return this.OX(d,A.L,null,e,f,30)},
S6(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jy,B.d(s,u,g,A.a1,u,u,u,v.b_r(w,v.b_p(t,w,A.cP,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b7v(d){return this.S6(d,A.L,null,3,24)},
aBC(d,e,f,g){return this.S6(d,e,null,f,g)},
czt(d,e,f){return this.S6(d,A.L,e,3,f)},
b7w(d,e){return this.S6(d,e,null,3,24)},
czr(d,e){return this.S6(d,A.L,null,3,e)},
czs(d,e,f){return this.S6(d,e,null,3,f)},
arF(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fj,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qa("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
NT(){return this.arF(null,!0)},
arE(d){return this.arF(null,d)},
bGq(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.hY,new B.a7(d,w,B.d(v,w,2,A.a1,w,w,w,this.ca_(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vI(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb1E(),h=A.o.ao(j.bD(B.c5(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i2j(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b_q(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aeN(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aeN(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eL,l,l,l,m.aeQ(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bDp(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iG,A.i,0,l,l),A.am,m.ahI(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eL,l,l,l,m.ay0(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.W,B.B(B.a([B.d(C.bDp(j),l,l,l,l,l,l,m.Qa(k,13,B.b1(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iG,A.i,0,l,l),A.O,m.crO(B.b1(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb1E()
v=B.d("NGMY",l,l,l,l,l,l,m.ay2(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ac,B.eL(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rC(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b0,new B.ds(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.aeQ(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.P),A.dV,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.O,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iG,A.i,0,l,l)
t=m.ahI(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ay0(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ahI(!0,1.4),A.au,B.d(C.bDp(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.aA7(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ay2(v,u,1,3,A.P),A.L,l,l),A.O,m.ahI(!0,1.2),A.au,B.B(B.a([B.d(C.bDp(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iG,A.i,0,l,l),A.au,m.aA7(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adj(d){return this.vI(d,!1)},
aeO(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aeQ("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c9Y(d,e){return this.aeO(d,null,e,null)},
aY5(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.de(v),12)===0?12:A.o.F(B.de(v),12),t=B.b1(this.d.w).j(0.75),s=this.ay1("Roboto",15,t,1,A.cy),r=B.X(E.amB,t,w,w,w,18),q=A.a.aq(A.oq[B.bL(v)-1],0,3),p=A.a.aU(A.o.u(B.fN(v)),2,"0"),o=B.de(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ac,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fY,w,w,w,1),B.X(d,t,w,w,w,19),A.ac,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
awN(){return this.aY5(A.nu)},
b4D(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.aeQ("Roboto",this.aeN(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aAb(d,e,f){return this.b4D(d,e,f,30)},
aBF(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vP,B.d(v,w,e,A.a1,w,w,w,this.c9Z("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b7A(d){return this.aBF(d,3,22)},
czE(d,e){return this.aBF(d,e,22)},
tS(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fQ(r,A.A,s,s,A.cg,A.bV,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bg(D.bDQ,w,s)
if(v==="sepia")w=new B.Bg(D.bDP,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.yB,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c2(s,new B.o(s,s,s,s,s,new B.c1(A.A,0.95,A.x,s,0,B.a([A.K,A.XW.j(0.38)],x.O),s,s),A.n),A.bg))
return new B.a7(d,e,new B.an(A.a_,s,A.b1,A.t,v,s),s)},
qF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.J(B.b1(j),A.r,3)
j=B.J(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tS(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eB,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m4,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.egG,14)],x.V)
v=l.tS(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eL(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.at(B.d(u,k,2,A.a1,k,k,k,l.b_r(j.as,13.5,D.bet,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.i,0,A.p),A.f,k,k,new B.o(D.bij,k,k,k,w,k,A.n),k,e,k,k,D.byy,k,k,d),k)
case 3:w=B.m(30)
j=B.J(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.m(25),l.tS(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.J(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a7(d,e,B.at(B.p(k,B.hT(l.tS(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m4,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.egm,10)],x.V)
return B.eL(A.A,0.025,new B.a7(d,e,new B.an(A.a_,k,A.ab,A.f,B.a([B.bT(0,B.p(k,l.tS(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rq,k,k,k),0,0,0),B.ao(k,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a7(d,e,B.b4(B.nC(l.tS(d,e),A.ap,D.hgv),new C.bdm(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tS(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bh(u));++n){m=new B.aQ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bj(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.cd(A.aM,A.qu,A.i,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b1,A.t,w,k),A.f,A.eh,k,k,k,e,k,k,D.bD5,k,k,d)
case 8:w=d/2
v=B.x9(A.fE,new B.aQ(w,w))
j=B.J(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.x9(A.hz,new B.aQ(w,w)),l.tS(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fZ,22)],x.V)
return B.p(k,l.tS(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nC(l.tS(d,e),A.ap,D.hnI),k)
case 0:j=B.J(B.b1(j.w),A.r,2.4)
return B.p(k,l.tS(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eB,k,k,d)}},
aPj(d,e){return this.d.e===D.Sg?A.bJ:this.bGq(d,e)},
WM(d){return this.aPj(d,A.L)},
gaAW(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAV(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.b_s(v.Q,19,1.15,A.cD,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.Qa("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.aeP(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jF(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bf,n,n,d)},
gcie(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9R(d,e,f,g){return B.cz(new C.cgB(this,e,d,f,g))},
a9Q(d){return this.a9R(d,22,!0,18)},
WZ(d,e){return this.a9R(d,22,!0,e)},
aQl(d,e,f){return this.a9R(d,22,e,f)},
bIq(d,e,f){return this.a9R(d,e,!0,f)},
bay(d,e,f,g){return B.cz(new C.cgC(this,e,d,g,!0,f))},
ch1(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adj(824),A.aA,k.aW0(824),k.b7v(824),A.O,k.NT(),A.ae,B.at(k.qF(824,360),j,j,j),k.WM(824),A.ae,B.E(k.a9Q(3),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adj(824),A.aN,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.ac9(440,A.bi,3,62,26),k.aBC(440,A.bi,2,20),A.b0,k.arF(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.JG,B.x(B.a([k.qF(362,310),k.WM(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aA7(2),A.ae,B.E(k.a9Q(3),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 2:w=k.vI(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.bZB(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.czt(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.BO,j,j,j)
u=B.a([B.at(k.qF(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Sg){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.ay1(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lA,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a_,j,A.ab,A.t,u,j),A.O,k.NT(),A.W,B.E(k.WZ(2,21),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 3:h=k.vI(824,!0)
w=k.qF(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b7,j,A.ab,A.t,B.a([w,B.ao(0,B.p(j,k.OX(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b4,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bBk,j,j,j),j,j,0,0,j,j)],u),j),k.b7w(824,A.bi),A.O,k.NT(),A.W,B.E(k.a9Q(3),1)],u),A.ak,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adj(824),A.aA,k.aW0(824),k.b7v(824),A.O,k.NT(),A.ae,B.E(k.bay(3,300,B.x(B.a([k.qF(300,300),k.WM(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.ak,j,A.e,A.i,0,A.p)
case 5:w=k.vI(824,!0)
v=x.p
u=B.x(B.a([k.ac9(440,A.bi,3,62,26),k.aBC(440,A.bi,2,20),A.b0,k.arE(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bv,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aQQ,new B.D(A.hY,k.qF(364,h.e===D.Sg?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aA,B.E(k.WZ(2,21),1)],v),A.ak,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adj(824),A.ae,k.bZA(824,2,70),k.czr(824,21),A.O,k.NT(),A.ae,B.E(k.bay(3,340,B.at(k.qF(340,340),j,j,j),350),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 7:w=k.vI(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bDp(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qa(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bf,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b_s(h.Q,24,1.15,A.cD,A.P),j,j,j))
v.push(A.b0)
if(k.gaAW())v.push(k.aAV(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.ak,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.ajt,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.ac9(570,A.bi,3,62,28),k.czs(570,A.bi,20),A.O,k.arE(!1),A.O,B.at(k.qF(570,330),j,j,j),k.WM(570),A.W,B.E(k.aQl(2,!1,17),1)],t),A.ak,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 8:w=k.vI(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qa(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.p(j,B.x(B.a([t,A.am,k.OX(788,A.bi,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bzC,j,j,j),k.b7w(824,A.bi),A.W,B.at(k.qF(824,310),j,j,j),k.WM(824),A.O,k.NT(),A.W,B.E(k.a9Q(3),1)],s),A.ak,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vI(824,!0),A.aN,new B.an(A.a_,j,A.ab,A.t,B.a([k.qF(824,430),B.ao(18,k.c9Y(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.aAb(824,3,66),k.b7A(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.awN(),A.aA,B.E(k.WZ(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vI(824,!0),A.bv,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.aeO(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aN,k.b4D(410,4,58,28),k.aBF(410,6,20),A.b0],w),A.E,j,A.e,A.i,0,A.p),j),U.aQR,k.qF(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aA,k.awN(),A.aN,B.E(k.WZ(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 12:w=k.vI(824,!0)
v=k.qF(824,420)
u=B.hFM(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aN,new B.an(A.a_,j,A.ab,A.t,B.a([v,B.ao(22,B.fv(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.ca0(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bBA,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.aAb(824,3,62),k.b7A(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.aY5(A.lE),A.aA,B.E(k.WZ(2,18),1)],r),A.ak,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vI(824,!0)
u=h.w
t=x.p
w=B.a([k.qF(824,380),B.ao(j,k.aeO(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aAb(824,2,60)
r=k.czE(824,2)
p=k.awN()
o=B.E(k.aQl(2,!1,18),1)
n=B.J(B.b1(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aN,new B.an(A.a_,j,A.ab,A.t,w,j),A.aN,s,r,A.W,p,A.aA,o,A.ae,B.p(j,B.B(B.a([B.bx(B.m(14),k.tS(150,104),A.ap),A.oB,B.E(B.x(B.a([k.aeO("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.O,B.d(q,j,2,A.a1,j,j,j,k.ay0(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bf,j,j,j)],t),A.ak,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.vI(824,!0),A.bv,k.ac9(824,A.bi,3,62,30),k.aBC(824,A.bi,2,22),A.W,k.arE(!1),A.W,B.at(k.qF(824,330),j,j,j),k.aPj(824,A.bi),A.aN,B.E(k.bIq(2,40,21),1)],x.p),A.ak,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c2(s,new B.o(s,s,s,s,s,new B.a9(A.ay,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bg),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b4(s,s,s,new C.b9P(B.b1(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bC6,B.x(B.a([B.E(t.ch1(),1),A.O,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fQ,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b_q(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qa(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iG,A.i,0,s,s)],o),A.ak,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bT(0,B.e0(B.b4(s,s,s,new C.bsu(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.J(B.b1(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fQ(q,A.A,s,s,A.cg,A.bV,!1,30,!1,s,30),A.ap))
else o.push(B.X(A.nu,B.b1(w),s,s,s,28))
o.push(A.ac)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ay2(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e0(B.d9(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bDd,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jF(new B.an(A.a_,s,A.ab,A.t,n,s),A.t,s),s)}}
C.bdn.prototype={
jk(d){return C.hkq(d)},
jZ(d){return!1}}
C.bdm.prototype={
a3(d,e){var w,v=C.hkq(e)
$.S()
w=B.I()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.aG(v,w)},
aw(d){return!d.b.A(0,this.b)}}
C.bv_.prototype={
jk(d){var w,v,u,t,s,r,q,p,o=new B.e9()
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
u.D(new B.bs())
return u},
jZ(d){return!1}}
C.b9P.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e9()
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
w.sam(new B.c1(A.A,0.5,A.x,l,0,B.a([A.Xo.j(0.13),A.K],v),l,l).aB(0,B.bX(new B.t(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
aw(d){return!1}}
C.bsu.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fu(u,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a3,A.bZ,u,A.dA,A.bW)
s.el()
w=d.a
J.bm(w.save())
w.translate(t/2,e.b*0.52)
d.ie(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.t(-v/2,-t.gbb(t)/2))
w.restore()},
aw(d){return!d.b.A(0,this.b)}}
C.Wa.prototype={
T(){return new C.aEP()}}
C.aEP.prototype={
Z(){var w=this
w.a2()
B.fzi(w.a.c,null).bM(new C.enw(),x.g7).bM(new C.enx(w),x.a)
w.a.toString},
gaO7(){var w=D.ax7[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gay3(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaO7()
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
a_m(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_m=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.enj(r))
t=4
q=r.gay3()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.oX()
m=B.z4(n,null)
i=B.I()
i.Q=A.h6
m.ox(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.ne().x8(J.h9Q(p),J.h9Q(o)),$async$a_m)
case 7:l=e
w=8
return B.b(l.hr(A.h8),$async$a_m)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.O(J.eR(J.vA(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.enk(r))
r.c.K(x.q).f.U(D.f9q)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_m,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.lc,s,s,s,new C.enq(d),s,s,s,s,s,s),p=x.p
q=B.eH(B.a([B.bN(!1,D.fO2,s,s,!0,s,s,t.y||r==null?s:t.gca1(),s,s)],p),s,s,!0,!0,A.Bs,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fS5,s,s,s,1,s,!0)
if(r==null)p=A.ms
else{w=B.E(new B.D(A.bQ,B.at(new B.fD(t.gaO7(),B.cz(new C.enr(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iA,B.j0(s,s,s,new B.y(D.ax7[u].a,s,E.aSH,s,s,s,s,s,s,s,s,s),s,new C.ens(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bl(!0,B.x(B.a([new B.a7(s,40,B.cr(v,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bVb,B.E(B.kO(s,s,s,6,1,new C.ent(t),t.f),1),D.bUN],p),A.m,s,A.e,A.i,0,s,s),D.fLj,A.am,B.bN(!1,D.fL1,s,s,!0,s,s,new C.enu(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Y9,s,s,s,s,s,s,D.byX,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c7(q,A.Bs,p,s,!1,!1,s,s)}}
C.bcU.prototype={
a3(d,e){var w
$.S()
w=B.I()
w.Q=A.cg
return d.ox(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
aw(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0i.prototype={
T(){var w=$.aw(),v=x.A
return new C.aGe(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b3,A.aO),w),new B.cB(null,v),new B.cB(null,v),A.d.gI(D.a4X),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oG.prototype={}
C.aGe.prototype={
gaW8(){var w,v,u=this
if(u.p1)w=new B.vQ(1,u.p2,0.9,u.p3).lH().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eWw(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a1()},
YY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.r3().jM(0,"assets/images/ngmy_logo.png"),$async$YY)
case 7:q=e
p=J.eR(J.vA(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bEa(new B.pV(p,1),o),$async$YY)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eVo(r,p))
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
return B.i($async$YY,v)},
Qd(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l_(92,1800,A.eK),$async$Qd)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Qd)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bEa(new B.pV(p,1),n),$async$Qd)
case 9:if(r.c==null){w=1
break}r.m(new C.eVM(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qd,v)},
b3Z(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aL=w.aE=w.aA=w.a_=w.b8=w.bj=w.y2=0
w.b1=null
w.b0=0.25
w.be=null
w.bL=0.5
w.aJ=1
w.c8=w.bG=w.bi=0
w.cL=w.c5=!1},
aXQ(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bAQ(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dmI)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bAQ(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bAQ(C.h4G(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bAQ(C.h4G(1-a0*0.5,n,n,n),w)}return a1?C.bAQ(C.h4G(-1,255,255,255),w):w},
aBL(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l9(0,this.d.a.a),t=B.C(u,B.a6(u).k("L.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zp(u,v,w)
this.dx.pn(new C.eVW(t),!0)
return t},
b6w(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aBL()
w=C.icC(e.d.a.a,e.db)
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
return C.i93(d,k,v,a0,j,e.gaW8(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cxj(){return this.b6w(null)},
Do(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Do=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmF(),$async$Do)
case 3:w=4
return B.b(B.bP(A.eQ,null,x.H),$async$Do)
case 4:w=5
return B.b($.aV.gmF(),$async$Do)
case 5:s=$.aV.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.q5)){u=null
w=1
break}w=7
return B.b(r.m4(1080/r.gY(0).a),$async$Do)
case 7:w=6
return B.b(e.hr(A.h8),$async$Do)
case 6:q=e
u=q==null?null:J.eR(A.dH.gaR(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Do,v)},
aaI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eV7(q))
t=4
w=7
return B.b(q.Do(),$async$aaI)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aM(p)
n=C.BW(null,null,null,null,D.ov,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b6w(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eV8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaI,v)},
AC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eV5(q))
t=4
w=7
return B.b($.aV.gmF(),$async$AC)
case 7:w=8
return B.b(B.bP(A.nl,null,x.H),$async$AC)
case 8:w=9
return B.b($.aV.gmF(),$async$AC)
case 9:k=$.aV.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.q5))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m4(1080/p.gY(0).a),$async$AC)
case 10:o=e
w=11
return B.b(o.hr(A.h8),$async$AC)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.agL(J.eR(A.dH.gaR(n)),"ngmy_quote.png","image/png"),$async$AC)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eV6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AC,v)},
ck9(){var w=this.p4
w.toString
return B.cz(new C.eVF(this,w))},
b_z(d,e){var w=null
return B.br(w,w,w,w,w,D.fka,w,w,!0,new B.b5(4,B.m(16),P.vt),w,w,w,w,w,D.tH,!0,w,w,w,w,new B.b5(4,B.m(16),D.b1A),w,w,w,w,w,w,w,w,A2.E5,e,w,w,w,w,w,w,w,D.fpJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
y5(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b5,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aTv,w,w,w))
return new B.D(I.ajj,B.B(u,A.m,w,A.e,A.i,0,w,w),w)},
b_y(d,e){var w=null,v=B.m(18),u=B.J(A.bz,A.r,1)
return B.p(w,B.aG(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jW),A.f,w,w,new B.o(D.tH,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vP(d){return this.b_y(d,A.bB)},
oi(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ux:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.J(f?A.K:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jM,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jM,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.dd(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b6,new B.o(w,r,u,v,r,p,A.n),A.hq,r,r,r,A.G0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
agI(d,e,f){return this.oi(d,null,e,f)},
ay7(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eG:A.bz,s=x.p
v=B.a([B.dd(w,d,w,w,A.b6,new B.o(u,w,B.J(t,A.r,g?2:1),v,w,w,A.n),A.hq,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b_C(d,e,f,g,h,i){return this.ay7(d,e,f,g,h,5,i)},
ks(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aSh,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ekV,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eVS(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aSx,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_G,u,u,u))
s=B.B(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.avS(w).cLI(A.b5,A.bz,A.b5.j(0.2),A.c,D.f_D,4)
return new B.D(A.y4,B.x(B.a([s,B.aan(B.kO(u,u,u,g,f,new C.eVT(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
aiI(d,e,f,g,h,i){return this.ks(d,e,f,g,h,null,i)},
aj7(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.M)(f),++v){u=f[v]
t=u==null
s=t?A.ds:B.b1(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bO5:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bK(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eVV(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bC,n,A.bq,o,10,10)},
bMx(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a4X
else{v=x.a8
w=B.C(new B.Z(D.a4X,new C.eUY(o),v),v.k("L.E"))}v=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b_z("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eUZ(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a9O,!0,A.a3,n,A.ao,n,n,n,n)
u=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b_z("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eV_(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a3,n,A.ao,n,n,n,n)
t=o.y5("DESIGNS",A.uf)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cXj[q]
r.push(new B.D(A.iA,o.agI(p,o.x===p,new C.eV0(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ce(B.B(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aM),A.ae,new B.a7(n,118,B.hO(n,new C.eV1(o,w),w.length,n,n,A.aM,new C.eV2(),!1),n),A.O,o.b_y(B.x(B.a([B.iI(A.b5,n,n,A.af,!0,new C.eV3(o),n,D.fCb,n,D.fyo,o.k3),B.iI(A.b5,n,n,A.af,!0,new C.eV4(o),n,n,n,D.fvC,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.ajV)],s),A.E,n,A.e,A.i,0,A.p)},
cG_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aBL()
if(a7.length===0)return a5.vP(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.K3,a6,a6,a6))
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
m=B.C(u,B.a6(u).k("ct.E"))
A.d.fd(m)
l=m.length!==0&&A.d.d5(m,new C.eWl(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eWs(a5)
j=new C.eWu()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.K3,a6,a6,a6)
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
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bK(d,d,d,d),new B.bj(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.NC,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eWm(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.vP(B.bW(A.bC,o,A.vm,a6,6,6))
i=B.a([a5.oi("All words",L.ao7,!1,new C.eWn(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agI("Sentence "+a3,!1,new C.eWo(a5,a7,v,a2)))
a2=a3}}i.push(a5.agI("Clear picks",!1,new C.eWp(a5)))
i=B.bW(A.bC,i,A.bq,a6,8,8)
g=a5.y5("SIZE OF THE PICKED WORDS",D.anz)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dsL[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eWq(e,k)
f.push(a5.agI(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bW(A.bC,f,A.bq,a6,8,8),A.W,a5.oi("Make every word normal",A.kH,!1,new C.eWr(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cB7(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bEp,B.d(A.d.fW(D.ayU,new C.eW4(q)).b,p,p,p,p,p,p,D.fiz,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cz(new C.eW5(q)),l=q.y5("HIGHLIGHT BEHIND THE WORDS",A.a1F),k=q.p1?-1:q.k4
k=q.aj7(k,new C.eW6(q),D.d7p)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.W,m,l,B.bW(A.bC,B.a([k,B.aB(p,B.p(p,D.bR6,A.f,p,p,new B.o(p,p,B.J(v,A.r,w?3:1),p,p,D.fc2,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eW9(q),p,p,p,p,p,p,!1,A.a4)],o),A.vm,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.K3,p,p,p)],o)
if(q.gaW8()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aiI("Colour",l,0,360,new C.eWa(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aiI("Shade",k,0.15,0.9,new C.eWb(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ks("Strength",l,0.15,1,new C.eWc(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vP(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.y5("LOOK",A.yW))
m=B.a([q.oi("Bold",K.anx,q.fy,new C.eWd(q)),q.oi("Italic",K.any,q.go,new C.eWe(q))],o)
for(u=0;u<3;++u){l={}
k=D.cYw[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ux:p
w=w?p:A.c.j(0.07)
s=new B.aQ(14,14)
r=new B.ay(q.id===l.a?A.K:A.bz,1,A.r,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bK(r,r,r,r),new B.bj(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eWf(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bC,m,A.vm,p,8,8))
n.push(q.y5("COLOUR",A.ns))
n.push(q.aj7(q.fx,new C.eWg(q),D.dj7))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.K3,p,p,p))
n.push(q.y5("SIZE AND PLACE",A.H1))
m=q.fr
m=q.ks("Text size",m,0.5,1.6,new C.eW7(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vP(B.x(B.a([m,q.ks("Up / down",l,0.12,0.5,new C.eW8(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cka(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.J(A.b5.j(0.6),A.r,1.6)
u=B.a([A.b5.j(0.18),A.bA.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bWF,A.f,p,p,D.b4y,p,62,p,p,p,p,p,62),A.aA,D.fzD,A.am,D.fEq],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(D.tH,p,v,w,p,new B.a9(A.a5,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bAb,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb_B(),p,p,p,p,p,p,!1,A.a4)}w=x.p
v=B.B(B.a([B.bx(B.m(12),new B.a7(46,62,B.fQ(o,A.A,120,p,A.cg,A.bV,!1,p,!1,p,p),p),A.ap),A.bd,B.E(B.x(B.a([D.fz9,A.O,B.bW(A.bC,B.a([q.oi("Change",A.ki,!1,q.gb_B()),q.oi("Remove",A.e9,!1,new C.eVJ(q))],w),A.bq,p,6,6)],w),A.E,p,A.e,A.i,0,A.p),1)],w),A.m,p,A.e,A.i,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dfk[t]
u.push(q.oi(s.b,s.a,q.at===t,new C.eVK(q,t)))}u=B.bW(A.bC,u,A.bq,p,8,8)
r=q.at
A:{if(0===r){s=q.c2B(o)
break A}if(1===r){s=q.c1x()
break A}if(2===r){s=q.bIp()
break A}if(3===r){s=q.bON()
break A}s=q.bKu()
break A}return B.x(B.a([v,A.ae,u,A.aA,s,A.W,new B.bM(A.a5,p,p,q.oi("Reset the whole picture",A.kH,!1,new C.eVL(q)),p)],w),A.E,p,A.e,A.i,0,A.p)},
c2B(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bC,B.a([w.oi("Auto enhance",E.a1f,!1,new C.eVB(w)),w.oi("Make words easy to read",A.pb,!1,new C.eVC(w))],v),A.bq,null,8,8),A.aA,B.cz(new C.eVD(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c1x(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ks("Exposure",n,-1.5,1.5,new C.eVf(o),0,A.k.ac(n,1))
w=o.RG
w=o.ks("Brightness",w,-0.5,0.5,new C.eVg(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ks("Contrast",v,0.4,2,new C.eVh(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ks("Fade",u,0,1,new C.eVi(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ks("Spotlight",t,0,1,new C.eVj(o),0,""+A.k.V(t*100))
s=o.a_
s=o.ks("Darken",s,0,0.85,new C.eVk(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ks("Vignette",r,0,0.9,new C.eVl(o),0,""+A.k.V(r*100))
q=o.aC
q=o.ks("Shade behind words",q,0,0.85,new C.eVm(o),0,""+A.k.V(q*100))
p=o.aL
return o.vP(B.x(B.a([n,w,v,u,t,s,r,q,o.ks("Shade top & bottom",p,0,0.85,new C.eVn(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bIp(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ks("Colour strength",q,0,2.2,new C.eUB(s),1,""+A.k.V(q*100))
w=s.to
w=s.ks("Warmth",w,-1,1,new C.eUC(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ks("Tint",v,-1,1,new C.eUD(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vP(B.x(B.a([q,w,v,s.ks("Shift colours",u,-180,180,new C.eUE(s),0,""+A.k.V(u)+"\xb0"),new B.bM(A.a5,r,r,s.oi("Negative",D.bM7,s.y1,new C.eUF(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.y5("COLOUR WASH",A.Ow)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.axw)
t=B.a([u,v,s.aj7(w,new C.eUG(s),q),A.O],t)
if(s.b1!=null){q=s.b0
t.push(s.vP(s.aiI("Wash strength",q,0,0.9,new C.eUH(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bON(){var w,v,u,t,s,r=this,q=r.y2
q=r.ks("Blur",q,0,24,new C.eV9(r),0,A.o.u(A.k.V(q)))
w=r.bj
w=r.ks("Soft focus",w,0,1,new C.eVa(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vP(B.x(B.a([q,w,r.ks("Film grain",v,0,1,new C.eVb(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.y5("LIGHT LEAK",D.bLR)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d0(D.axw,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.aj7(q,new C.eVc(r),t),A.O],u)
if(r.be!=null){q=r.bL
u.push(r.vP(r.aiI("Leak strength",q,0,1,new C.eVd(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bKu(){var w,v,u,t,s=this,r=s.aJ
r=s.ks("Zoom",r,1,3,new C.eUL(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.ks("Left / right",w,-1,1,new C.eUM(s),0,""+A.k.V(w*100))
v=s.bG
v=s.ks("Up / down",v,-1,1,new C.eUN(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.vP(B.x(B.a([r,w,v,s.ks("Turn",u,-180,180,new C.eUO(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.W,B.bW(A.bC,B.a([s.oi("Turn 90\xb0",I.aoD,!1,new C.eUP(s)),s.oi("Flip sideways",A.GO,s.c5,new C.eUQ(s)),s.oi("Flip upside down",A.GO,s.cL,new C.eUR(s))],t),A.bq,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c5i(){var w=null,v=B.m(22),u=B.J(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.f_P,A.W,D.fBc,A.aA,B.aB(w,B.p(A.A,D.f01,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.ux,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eVE(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.tH,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c2o(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eVw(p),m=x.p,l=B.B(B.a([D.bEv,p.oi("Reset",A.kH,!1,new C.eVs(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.K3,o,o,o),j=p.y5("SHAPE",A.aoz),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CL[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b_C(n.$2(t,p.cy),62,u.b,s===t,new C.eVt(v,p),62))}}i=B.bW(A.bC,i,A.bq,o,8,8)
v=p.y5("RING",A.rr)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CF[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b_C(n.$2(p.cx,t),62,r.b,q===t,new C.eVu(s,p),62))}u=B.bW(A.bC,u,A.bq,o,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ae,p.vP(p.ks("Size",s,0.12,0.4,new C.eVv(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b2B(d){return new B.a7(null,d,new B.fD(0.5625,B.cz(new C.eVP(this)),null),null)},
cAo(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.J(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ux:q
t=new B.aQ(14,14)
s=D.dhu[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bA(1,A.bc,B.aB(A.c8,B.dd(q,B.x(B.a([r,A.cL,new B.qx(A.e2,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b6,new B.o(q,q,q,new B.bj(t,t,t,t),q,u,A.n),D.bvL,q,q,q,A.hs,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eVY(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.B(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bxR,A.m4,q,q,q)},
aQS(){var w,v,u=this,t=null,s=u.cAo(),r=u.as
A:{if(0===r){w=u.bMx()
break A}if(1===r){w=u.cG_()
break A}if(2===r){w=u.cB7()
break A}if(3===r){w=u.cka()
break A}if(4===r){w=u.c2o()
break A}w=u.c5i()
break A}v=x.p
return B.bx(A.tm,B.ec(B.x(B.a([s,B.E(B.cr(B.a([w],v),t,D.byY,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Y9,!0),A.ap)},
aN3(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcas(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.f0c,A.f,r,r,new B.o(A.c.j(0.08),r,B.J(A.aZ,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbOl()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f5E)
else t.push(D.bQc)
t.push(A.ac)
t.push(D.bGE)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b8,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.ux,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b3F,r,r,r,r,G.ajK,r,r,r)},
b_A(){var w=null
return new B.D(T.a_B,B.B(B.a([B.aH(w,w,w,w,A.mN,w,w,w,new C.eVe(this),w,w,w,w,w,w),D.fQY,A.b0,D.bZ_],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.Bs,B.bl(!0,B.cz(new C.eWv(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bgu.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.e9()
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
C.rD.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.mf.prototype={}
C.zO.prototype={
ag(){var w=this
return B.G(["at",w.a.a7().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nT.prototype={}
C.w8.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a8m.prototype={}
C.arK.prototype={}
C.a0P.prototype={
T(){return new C.aIb(new B.as(A.as,$.aw()),B.k2(!0,null,!0,!0,null,null,!1),D.dIT,B.a([],x.s),B.eC([D.IJ],x.Q))}}
C.aIb.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a1()},
a0H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Cg(90,700,700,A.eK),$async$a0H)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a0H)
case 8:p=e
if(r.c!=null)r.m(new C.f1U(r,p,q))
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
return B.i($async$a0H,v)},
a0K(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0K=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aIb(78,n,1100,1100),$async$a0K)
case 7:q=e
if(J.cs(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fk(),$async$a0K)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cJ.gct().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f1V(r,p))
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
return B.i($async$a0K,v)},
b4C(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fQ(A.cF.aM(A.d.gak(d.split(","))),A.A,u,u,A.cg,A.bV,!0,u,!1,u,u)
return w}catch(v){}return D.btV},
c2v(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cvH(C.fG8(w,this.b4C(d),f),g)},
ad2(d,e,f,g,h){var w=null,v=new C.f1S(f,e),u=new C.f1T(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.J(p?A.bz:A.b5.j(0.6),A.r,1)
if(p)p=new B.a7(34,30,new B.an(A.a_,w,A.ab,A.f,B.a([B.at(B.X(f?A.Ck:A.Om,A.bY,w,w,w,26),w,w,w),D.eqM],x.p),w),w)
else p=this.c2v(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a2,!0,s,B.aO(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bPU],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1R(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
aXW(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bx(B.m(8),B.fQ(A.cF.aM(A.d.gak(h.split(","))),A.A,p,p,A.cg,A.bV,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.J(n?A.bz:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ac,B.E(B.d(e,p,1,A.a1,p,p,p,A.Ka,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a2B,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aG(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l3,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
a9a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fJA(),$async$a9a)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f1A(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f1B(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9a,v)},
aeY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeY=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f1D(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f1E(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f1F(r))
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
return B.b(C.fER(q,r.cx,j,new C.b23(r.z,r.Q,r.as,r.at),new C.f1G(r),i,m,p,k),$async$aeY)
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
if(r.c!=null)r.m(new C.f1H(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aJ(d,A.eM,g).w
g=B.aJ(d,A.bX,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aB(h,B.p(h,D.bTa,A.f,h,h,new B.o(h,h,B.J(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.I,24)],v),D.c27,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f27(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a2B,h,h,h,i.ax?h:new C.f28(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbDl()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.I,10)],v)
s.push(B.hc(B.aG(!1,A.a2,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wb:A.hu,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wr,A.a6),h,40,h,h,h,h,h,40),A.cM,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cM,h,h,A.ai),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b17),h,h,h,h,h,h,h,h,A1.JQ,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iA,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aSX,!0,A.a3,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f29(i)
s=i.aXW(A.lF,q,r,i.gckC(),s)
r=i.z
r=B.E(i.ad2(new C.f2b(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bo,B.E(i.ad2(new C.f2c(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f2d(i)
s=i.aXW(A.ua,r,p,i.gckK(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.ad2(new C.f2e(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fFK,A.au,D.fIB,A.bv,u,A.O,D.fH0,A.aA,v,A.bv,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bo,B.E(i.ad2(new C.f2f(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fKs],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.J(D.bly,A.r,1)
w=C.ahi(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bM(A.a5,h,h,B.p(h,B.B(B.a([D.bUg,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fok,h,h,h),B.aO(!1,h,!0,D.ela,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f2g(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.bdC,h,u,v,h,h,A.n),h,h,h,h,D.bxx,h,h,h),h)],t))}o.push(A.bv)
o.push(D.fwk)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d9z[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.r,-1)
u=u?A.u:A.P
w.push(new B.bA(1,A.bc,new B.D(A.jz,B.aB(h,B.dd(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b6,new B.o(v,h,new B.bK(k,k,k,k),h,h,h,A.a6),A.eN,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f2h(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.B(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bv)
o.push(D.fPc)
o.push(A.O)
o.push(B.cz(new C.f2i(i)))
o.push(A.bv)
o.push(D.fDN)
o.push(A.O)
w=B.a([i.b7t("auto","Let AI choose",A.e5,A.R1)],t)
for(v=x.O,m=0;m<11;++m){j=D.wx[m]
u=j.d
w.push(i.b7t(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bW(A.bC,w,A.bq,h,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.J(i.r?A.be.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iI(h,A.be,h,h,h,new C.f2a(i),D.bPm,D.fOr,h,D.fyD,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aS4,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gcaw()
v=B.fo(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f5u:A.Hg
o.push(new B.a7(h,54,B.lH(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oF,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.ce(B.x(o,A.ak,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.vY,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.acW,h,h,h,h,h,h,h,h),h)},
bQ_(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f1I(this,p,d)
if(d===D.Dp)return new C.aEH(p,o,q)
w=B.m(16)
v=p?E.wr:q
u=p?q:A.c.j(0.05)
t=B.J(p?A.aB:A.bz,A.r,1)
s=B.X(p?A.ed:C.hMP(d),A.c,q,q,q,20)
r=C.hMQ(d)
return B.aB(q,B.dd(q,B.x(B.a([s,A.au,B.eN(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.m,q,A.b8,A.i,0,A.p),q,q,A.b6,new B.o(u,q,t,w,q,v,A.n),A.hq,q,64,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b7t(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bz
r=B.J(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aB(v,B.dd(v,B.B(B.a([w,M.JH,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b6,new B.o(s,v,r,t,v,v,A.n),A.eN,v,v,v,M.al2,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f1X(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a0O.prototype={
T(){return new C.aIa(new B.as(A.as,$.aw()))}}
C.aIa.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a1()},
aeZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aeZ=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f1t(r))
w=1
break}B.f1()
r.m(new C.f1u(r))
t=4
q=C.idx(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.idh(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f1v(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h4l()
f=$.CX.h(0,k.a)
o=f==null||J.cs(f)?null:J.fq(f)
if(o==null){r.m(new C.f1w(r))
w=1
break}n=C.idf(o,r.a.c)
C.idb(r.a.c.a)
$.h3C=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h7b(j)
h=C.h7c(r.a.c)
e=C.h7d(r.a.c)
w=7
return B.b(C.bD3(k,r.a.c.a,j,h,new C.f1x(r),i,e,a0),$async$aeZ)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f1y(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aJ(d,A.eM,i).w
i=B.aJ(d,A.bX,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.aoR,A.f,j,j,D.b3k,j,34,j,j,j,j,j,34),A.at,D.bF8],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a9u,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),As.acn),j,j,j,j,j,j,j,j,A1.JQ,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aSX,!0,A.a3,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d5I[q]
o=A.c.j(0.06)
n=k.e?j:new C.f1z(k,p)
r.push(B.mQ(j,o,new B.y(p,j,Aw.Ux,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vt,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.W,B.bW(A.bC,r,A.bq,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aS4,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gcax()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.ei.j(0.5)],x.O):D.cDO
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.el6:D.bTQ
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a2,!0,j,B.aO(!1,s,!0,B.eJ(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hD,j,j,j)],v),A.m,j,A.b8,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a5,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.ce(B.x(w,A.ak,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.vY,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.acW,j,j,j,j,j,j,j,j),j)}}
C.b23.prototype={}
C.aEH.prototype={
T(){return new C.bl5(null,null)}}
C.bl5.prototype={
gay8(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.q8,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gay8().q()
this.bxf()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.ca(this.gay8(),new C.ejR(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.biJ.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.dbZ[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=D.xU.j(0.25+r*0.6).gp(0)
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
C.ash.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.a_a.prototype={
T(){return new C.aCc()}}
C.aCc.prototype={
gaj4(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahv(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAm(){var w=this.e
return w===$?this.e=C.h7b(this.a.c).t(0,D.Dp):w},
a8Y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8Y=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dos(s))
u=3
r=A.d.fW(D.wx,new C.dot(s))
q=B.df(C.h7b(s.a.c),x.Q)
l=q
J.hz(l,D.Dp)
p=l
if(s.gAm())J.cc(p,D.Dp)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAm()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h7c(i.c)
g=C.h7d(s.a.c)
w=6
return B.b(C.bD3(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8Y)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahv(q,s.gaj4())
f=q==null?null:q.b
n=f==null?s.gaj4():f
if(!J.A(n,r.a)&&!s.gAm())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dou(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8Y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.c:A.M,k=m?A.aR:A.al,j=m?A.M:A.c,i=B.m(28),h=B.J(m?A.bz:A.aL,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bD,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dox(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wx[w]
u=o.gaj4()
t=o.f?n:new C.doy(o,v)
f.push(new C.btB(v,u===v.a,t,n))}f=B.kN(1.25,f,3,10,10,n,A.dR,!0)
u=B.m(18)
t=o.gAm()?D.c4U:n
if(o.gAm())s=n
else s=m?A.bn:A.bN
r=B.X(A.e5,o.gAm()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAm()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAm()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAm()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.at,q,B.Y7(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.doz(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ajN,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.foF,n,n,n)],g))
f=B.ce(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.G7,n,n,A.ah)
u=o.f?n:o.gbCk()
t=B.bo(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bl(!0,B.p(n,B.x(B.a([new B.D(D.bAF,e,n),new B.ds(1,A.cn,f,n),new B.D(A.G6,new B.a7(1/0,50,B.bH(B.eJ(B.at(o.f?A.t5:D.fGd,n,n,n),n,new B.o(n,n,n,s,n,D.c3t,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.u1,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.btB.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.J(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bM(A.lo,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bM(A.lS,w,w,B.d(v.b,w,w,w,w,w,w,D.foC,w,w,w),w)],x.p)
if(q)v.push(D.aZB)
return B.aB(w,B.dd(w,new B.an(A.a_,w,A.ab,A.t,v,w),w,w,A.b6,new B.o(w,w,p,t,s,new B.a9(A.ay,A.aE,A.x,r,w,w),A.n),A.eN,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.ejO.prototype={
aFN(d,e,f){return e+"@"+A.a.aU(A.o.fX(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wK(d,e){return this.aFN(0,e,null)}}
C.aMJ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.b2_.prototype={
B(d){var w,v,u=null,t=C.h60(this.c)
if(t==null)w=D.bsp
else{w=B.aJ(d,u,x.w).w.cLa(D.bx3,D.f4F)
v=this.d
w=B.rq(B.e0(B.aoA(!1,t,!1,v,!1,390),!v,u),w)}return B.eN(A.A,new B.a7(416,870,new C.bmF(w,u),u),A.f,A.dw)}}
C.bmF.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dos[w]
u=new B.aQ(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bj(u,u,u,u),t,D.aqM,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dpM[w]
u=new B.aQ(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bj(u,u,u,u),t,D.aqM,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c2(t,new B.o(t,t,t,B.m(64),D.cVR,D.c1P,A.n),A.bg),0,0,0))
s.push(B.bT(3,B.c2(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bg),3,3,3))
s.push(B.bT(13,B.bx(B.m(51),B.ec(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.at(B.p(D.aZM,B.p(t,t,A.f,t,t,D.b3D,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.e0(B.bx(B.m(51),D.bu0,A.ap),!0,t),13,13,13))
s.push(B.ao(22,B.e0(B.at(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.ab,A.f,s,t)}}
C.lm.prototype={
pJ(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.es(A.L,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bh,j,2,"Your Presentation Title",0,0,"",D.mT,D.cT,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.es(A.L,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bh,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cT,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rE(i,l,0,0,B.a([f,w,C.es(A.bi,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fD,t.l(),3,"",0,0,"",D.cl,D.f8,0.3,0.35,0.72)],s),C.cE(),D.mS,"","","Welcome",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Agenda",0,0,"",D.cl,D.cT,0.84,0.08,0.08)
w=C.cE()
w=C.rE(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bh,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uN,D.cT,0.8,0.1,0.26)],s),C.cE(),D.mS,"","","Agenda",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Main Idea",0,0,"",D.cl,D.cT,0.84,0.08,0.08)
f=C.cE()
f=C.rE(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bh,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cT,0.8,0.1,0.26)],s),C.cE(),D.mS,"","","Key Point 1",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bh,j,2,"Compare & Contrast",0,0,"",D.cl,D.cT,0.84,0.08,0.08)
r=C.cE()
r=C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bh,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cT,0.4,0.08,0.24)
q=C.cE()
q=C.rE(i,l,0,0,B.a([u,r,C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bh,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cT,0.4,0.52,0.24)],s),C.cE(),D.mS,"","","Key Point 2",D.dh)
r=C.cE()
r=C.es(A.L,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bh,j,2,h,0,0,"",D.dh,D.cT,0.8,0.1,0.32)
e=C.cE()
p=C.BW(l,l,l,l,D.Dl,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rE(i,l,0,0,B.a([r,C.es(A.L,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bh,j,2,"Questions?",0,0,"",D.cl,D.cT,0.7,0.15,0.58)],s),C.cE(),D.mS,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.M)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EY.prototype={
by(d){return this.e.$1(d)}}
C.ew.prototype={}
C.j2.prototype={}
C.EP.prototype={
gaLC(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahi(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a47(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.EP(v,u,t,d==null?w.d:d)},
FT(d){return this.a47(null,d,null,null)},
aEx(d){return this.a47(null,null,null,d)},
cL8(d,e){return this.a47(d,e,null,null)},
bcJ(d){return this.a47(d,null,null,null)},
bcQ(d){return this.a47(null,null,d,null)}}
C.NN.prototype={
T(){return new C.bku(new B.ez(0,$.aw()),null,null)}}
C.bku.prototype={
Z(){var w,v=this
v.a2()
w=v.qO(new C.dZ7(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.h2(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.bwL()},
B(d){var w=C.ahi(this.a.c.a)
if(w==null)w=A.d.gI(D.HB)
return B.cz(new C.dZ6(this,w,C.hmi(this.a.c.d)))}}
C.bs9.prototype={
B(d){return B.nY(A.Wt,this.e,new C.f0H(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bfA.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aTv(d,e,v)
break
case"confetti":w.bIT(d,e,v)
break
case"crown":w.bKv(d,e,v)
break
case"aurora":w.bDp(d,e,v)
break
case"champagne":w.bGL(d,e,v)
break
case"diamonds":w.bMG(d,e,v)
break
case"starburst":w.cy2(d,e,v)
break
case"balloons":w.bDD(d,e,v)
break
case"galaxy":w.bRQ(d,e,v)
break
case"redcarpet":w.coW(d,e,v)
break
case"coins":w.bIh(d,e,v)
break
case"lanterns":w.c13(d,e,v)
break
case"hearts":w.bZF(d,e,v)
break
case"petals":w.ck1(d,e,v)
break
case"butterflies":w.bFK(d,e,v)
break
case"neon":w.c52(d,e,v)
break
case"disco":w.bMR(d,e,v)
break
case"sunrise":w.czG(d,e,v)
break
case"pearls":w.cj5(d,e,v)
break
case"snow":w.cxK(d,e,v)
break
case"laurel":w.c19(d,e,v)
break
case"ribbons":w.crq(d,e,v)
break
case"kente":w.c0S(d,e,v)
break
case"trophy":w.cDh(d,e,v)
break
case"shooting":w.cvu(d,e,v)
break
case"bokeh":w.bDY(d,e,v)
break
case"orbits":w.cgI(d,e,v)
break
case"flowers":w.bR5(d,e,v)
break
case"music":w.c4L(d,e,v)
break
case"mandala":w.c3b(d,e,v)
break
case"sparklers":w.cxR(d,e,v)
break
case"city":w.bHy(d,e,v)
break}},
rR(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.I()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oO
u=new B.aF(w.r,A.ag,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aX(w,s))
u.D(new B.c4(w,t,w+f,t))
u.D(new B.c4(w,t,w,t+f))
u.D(new B.c4(w,t,w-f,t))
u.D(new B.c4(w,t,w,s))
u.D(new B.bs())
d.aG(u,v)
d.ad(e,f*0.18,v)},
lR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.d_(q,v)*2.5)+C.d_(q,u)*6.28)+1)/2
this.rR(d,new B.t(C.d_(q,t)*o,C.d_(q,s)*n),m*(0.006+0.014*C.d_(q,r))*(0.5+p),h,p*p)}},
aTv(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lR(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aC],w),B.a([A.id,A.bA],w),B.a([A.ez,A.aQ],w),B.a([A.c,A.az],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bh(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.d_(h,1))
f=g+c0*(C.d_(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.d_(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.ky(new B.t(g,c1),new B.t(f,e),A.cu.av(0,i/0.22))
a0.toString
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.a5,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aB(0,B.rG(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bE
a2=B.ky(new B.t(g,c1),a0,0.75)
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
a6=A.cu.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.d_(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ap(A.R,A.N,A.U,A.V,A.S)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hg(A.G,o)
a3=a8.G()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.d_(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.d_(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.S()
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bE
b9.a=A.oO
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.d_(h,b1+120)>0.5)this.rR(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bIT(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.I()
a0.sam(new B.a9(A.ay,A.aE,A.x,D.diN,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aB(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.d_(u,1)))+C.d_(u,2)*w,w)
s=C.d_(u,3)
r=Math.sin(a3*(0.8+C.d_(u,4))+u)
q=h*(0.012+0.012*C.d_(u,5))
p=Math.cos(a3*(2+3*C.d_(u,6))+u)
o=D.Qu[A.o.E(A.k.bh(C.d_(u,7)*5),0,4)]
J.bm(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.d_(u,8)*2)+u)*180/3.141592653589793,0,0)
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
t.b=A.aa
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cl(m.gbw().a.snapshot()):t).a,k)
k.delete()}else{t=B.bJ(A.I,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bF(t),k)
k.delete()}f.restore()}this.lR(a1,a2,a3,25,A.bL,30)},
bKv(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
n.push(new B.bs())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c1(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bfG],v),a4,a4).aB(0,B.bX(w,u)))
l=o.G()
o=m.gbw().a.snapshot()
t.drawPath((m.e=new B.cl(o)).a,l)
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
i.D(new B.bs())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.I()
n.sam(new B.a9(A.b4,A.b7,A.x,D.dho,a4,a4).aB(0,new B.a3(a5,a6,o,v)))
a8.aG(i,n)
for(v=[D.eAY,D.eu9,D.eKw],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=A.ad.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.hT.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xo(i),u=B.a([],x.X),o=new B.tk(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.ju(y.M));--f
o.ik()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aF(n,v.b,a4,new B.cw([new B.Bo(o,f),0,d*h,!0]),B.a([],r))
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.b=A.aa
f.c=g
f.e=A.dT
f.r=A.bL.gp(0)
l=f.G()
f=d.gbw().a.snapshot()
t.drawPath((d.e=new B.cl(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rR(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lR(a8,a9,b0,45,A.bL,40)},
bDp(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lR(a8,a9,b0,60,A.c,50)
w=[D.eW5,D.eVO,D.eVI,D.eX3]
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
n.b=A.aa
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oO
n.z=new B.hg(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cl(h.gbw().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.b=A.aa
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oO
n.z=new B.hg(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cl(h.gbw().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.d_(a4,1))+C.d_(a4,2)*a3,a3)
r=C.d_(a4,3)
q=Math.sin(b0+a4)
p=C.d_(a4,4)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=A.vL.j(0.4+0.5*C.d_(a4,5)).gp(0)
n.a=A.oO
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bGL(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.I()
a0.sam(new B.c1(A.A,0.5,A.x,l,0,B.a([A.hS.j(0.25+0.1*h),D.Yk],x.O),l,l).aB(0,B.bX(new B.t(g,f),e)))
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
a0.b=A.aa
a0.c=h
a0.r=D.Qu[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cl(u.gbw().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.d_(w,1)))+C.d_(w,2)*o,o)
r=k*(0.1+0.8*C.d_(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.d_(w,4))
if(n<f){this.rR(a1,new B.t(r,n),m*2.4,A.bL,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.aa
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xK.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bMG(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lR(a9,b0,b1,30,A.l_,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.d_(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.d_(p,2))+C.d_(p,3)*n,n)-o*2
l=C.d_(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bm(v.save())
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
g.push(new B.bs())
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.ay,A.aE,A.x,D.dd1,a5,a5).aB(0,B.bJ(A.I,k*1.2,o)))
a2=g.G()
g=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cl(g)).a,a2)
a2.delete()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.b=A.aa
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
cy2(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
o.push(new B.bs())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbw().a.snapshot()
w.drawPath((n.e=new B.cl(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bh(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.d_(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bto.av(0,k)*(0.5+0.5*C.d_(t,v)))
this.rR(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.d_(t,3)),D.Qu[A.o.E(A.k.bh(C.d_(t,4)*5),0,4)],u)}},
bDD(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.d_(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.d_(o,2))+C.d_(o,3)*m,m)
j=C.d_(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.axX[A.o.F(o,6)]
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
d.b=A.aa
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cl(f.gbw().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bJ(new B.t(j,k),n*2.3,l)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c1(D.aZP,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.axN,a3).aB(0,a2))
a1=l.G()
u.drawOval(B.bF(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aF(g.r,A.ag,a3,a3,l)
d=n*0.12
l.push(new B.aX(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.bs())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbw().a.snapshot()
u.drawPath((g.e=new B.cl(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.d_(o,11))+C.d_(o,12)*m,m)
r=C.d_(o,13)
J.bm(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bJ(A.I,t,v)
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.axX[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bF(s),a1)
a1.delete()
u.restore()}},
bRQ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lR(b1,b2,b3,50,A.c,70)
for(w=[D.eWd,D.eVU,D.eW_],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.sam(new B.c1(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aB(0,B.bX(new B.t(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.d_(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.d_(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eG,g)
k.toString
d=C.d_(i,3)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=k.j(0.5+0.5*C.d_(i,4)).gp(0)
a0.a=A.oO
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.I()
a9.sam(new B.c1(A.A,0.5,A.x,a4,0,B.a([A.xK.j(0.55),D.ahj],u),a4,a4).aB(0,B.bX(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bh(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.d_(a2,9)),a6*0.1*C.d_(a2,8))
a5=B.ky(a3,a3.a8(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.ky(a3,a5,0.6)
a6.toString
a8=B.I()
a8.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aB(0,B.rG(a3,a5)))
a8.c=a7*0.005
a8.d=A.bE
b1.bo(a6,a5,a8)}},
coW(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
n.push(new B.bs())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c1(A.A,0.5,A.x,b5,0,B.a([A.xK.j(0.28),D.ahj],w),b5,b5).aB(0,B.bX(new B.t(q,u),t)))
o.a=A.oO
l=o.G()
q=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cl(q)).a,l)
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
b0.push(new B.c4(a9,k,a5?g:a1,b7))
b0.push(new B.aq(a5?0:b6,b7))
b0.push(new B.bs())
a9=new B.ap(A.R,A.N,A.U,A.V,A.S)
a9.sam(new B.a9(A.a5,A.a8,A.x,a7,b5,b5).aB(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cl(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.r=A.hS.gp(0)
b1.c=o
b1.d=A.bE
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aF($.S().r,A.ag,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.aX(b6*0.42,w))
b2.D(new B.aq(b6*0.58,w))
b2.D(new B.aq(b6*0.8,b7))
b2.D(new B.aq(b6*0.2,b7))
b2.D(new B.bs())
v=B.I()
v.sam(D.c3m.aB(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aG(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.d_(r,1))+C.d_(r,2)*b3,b3)
u=C.d_(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rR(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.d_(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bIh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.d_(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.d_(t,2))+C.d_(t,3)*r,r)-q
o=C.d_(t,4)*i
n=Math.cos(f*(2+3*C.d_(t,5))+t)
m=Math.abs(n)
l=B.bJ(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.sam(new B.a9(A.ay,A.aE,A.x,n>0?D.dti:D.cJD,null,null).aB(0,l))
k=q.G()
v.drawOval(B.bF(l),k)
k.delete()
q=-(s*0.22)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.aa
j.c=Math.max(0.6,s*0.08)
j.r=D.bq1.gp(0)
k=j.G()
v.drawOval(B.bF(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rR(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lR(d,e,f,30,A.bL,110)},
c13(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lR(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.d_(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.sam(new B.c1(A.A,0.5,A.x,d,0,B.a([X.Mq.j(0.45*k),D.ag0],u),d,d).aB(0,B.bX(new B.t(l,m),j)))
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
j.push(new B.bs())
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
i=B.ar(D.bfV,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b4,A.b7,A.x,B.a([D.bl8,i],u),d,d).aB(0,B.bJ(new B.t(l,m),o*1.4,o)))
g=j.G()
j=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cl(j)).a,g)
g.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bZF(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.d_(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bm(v.save())
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
l.push(new B.kX(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.kX(m,g,o*1.8,h,0,m))
l.push(new B.bs())
f=D.d3s[A.o.F(p,5)]
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c1(A.tj,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a3R,d).aB(0,B.bX(A.I,o*1.4)))
e=m.G()
m=i.gbw().a.snapshot()
v.drawPath((i.e=new B.cl(m)).a,e)
e.delete()
v.restore()}this.lR(a3,a4,a5,30,A.id,130)},
ck1(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.d_(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.d_(q,2))+C.d_(q,3)*o,o)
m=C.d_(q,4)
l=Math.sin(s+q*0.7)
J.bm(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.d_(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ag,i,i,m)
n=-p
m.push(new B.aX(0,n))
l=n*0.2
m.push(new B.c4(p,l,0,p))
m.push(new B.c4(n,l,0,n))
m.push(new B.bs())
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
m=(q&1)===0?D.cDN:D.den
n.sam(new B.a9(A.a5,A.a8,A.x,m,i,i).aB(0,B.bX(A.I,p)))
j=n.G()
n=k.gbw().a.snapshot()
v.drawPath((k.e=new B.cl(n)).a,j)
j.delete()
v.restore()}this.lR(d,e,a0,25,A.bL,140)},
bFK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lR(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.d_(r,1))
p=Math.sin(b2*(0.15+0.1*C.d_(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.d_(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bm(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bm(v.save())
v.scale(a1*n,1)
a2=$.S()
a3=B.a([],u)
a4=new B.aF(a2.r,A.ag,a6,a6,a3)
a3.push(new B.aX(0,0))
a3.push(new B.kX(f,e,l,d,h,0))
a3.push(new B.kX(q,h,g,q,0,h))
a3.push(new B.bs())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.sam(new B.a9(A.a5,A.a8,A.x,i?D.de6:D.dgS,a6,a6).aB(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbw().a.snapshot()
v.drawPath((a4.e=new B.cl(a2)).a,a5)
a5.delete()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.b=A.aa
a2.c=Math.max(0.6,o)
a2.r=D.Bk.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cl(a4.gbw().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.bpg.gp(0)
p.c=q*0.1
p.d=A.bE
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c52(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.c=v
q.r=D.az5[t].j((1-s)*0.9).gp(0)
q.z=new B.hg(A.G,v)
p=r*0.3
p=B.bt(B.bJ(e,r,r*1.6),new B.aQ(p,p))
o=q.G()
u.drawRRect(B.el(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.d_(m,1)*4)+m)))
k=D.az5[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bt(new B.a3(j,i,j+w,i+l),new B.aQ(v,v))
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=k.j(0.85).gp(0)
j.z=new B.hg(A.acb,p)
o=j.G()
u.drawRRect(B.el(i),o)
o.delete()}},
bMR(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.d_(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.d_(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nR,A.dt][A.o.F(p,4)]
j=C.d_(p,3)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=k.j(0.75).gp(0)
i.a=A.oO
i.z=new B.hg(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.I()
t.r=A.aB.gp(0)
t.c=1.2
a3.bo(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.I()
t.r=A.dv.gp(0)
a3.ad(v,u,t)
J.bm(q.save())
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
czG(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.av(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.S()
q=B.a([],u)
p=new B.aF(r.r,A.ag,h,h,q)
q.push(new B.aX(d,a0))
r=s-0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bs())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.bL.j(0.1).gp(0)
o=r.G()
r=p.gbw().a.snapshot()
w.drawPath((p.e=new B.cl(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.I()
a0.sam(new B.c1(A.A,0.5,A.x,h,0,B.a([D.bbk.j(0.6),D.ag0],x.O),h,h).aB(0,B.bX(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.I()
d.sam(D.erC.aB(0,B.bX(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.d_(t,1)*g*1.4,a0)-v
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
cj5(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r=new B.bs()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=B.ar(A.cw,A.j6,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cl(p.gbw().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.d_(i,1))
g=d-A.k.F(u*(0.04+0.05*C.d_(i,2))+C.d_(i,3)*j,j)
n=C.d_(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.sam(new B.c1(Ao.xh,0.5,A.x,f,0,D.dku,f,f).aB(0,B.bX(new B.t(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lR(a1,a2,a3,25,A.c,190)},
cxK(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.d_(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.d_(r,2))+C.d_(r,3)*p,p)
n=C.d_(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.j(0.6+0.4*C.d_(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bE
J.bm(v.save())
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
h.delete()}v.restore()}this.lR(d,a0,a1,40,A.ez,200)},
c19(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dg(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bm(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bJ(new B.t(p,0),q,r)
$.S()
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.sam(D.c39.aB(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bF(g),e)
e.delete()
s.restore()}}$.S()
a0=B.I()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.bgf.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.rR(a3,w.a8(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lR(a3,a4,a5,40,A.bL,210)},
crq(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hS,A.hT],a6),B.a([A.oX,A.id],a6),B.a([A.aD,A.eG],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
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
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dw(i,s),l=new B.bR(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aq(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bs()
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
l.sam(new B.a9(A.a5,A.a8,A.x,B.a([h,k[1],h],a6),Aa.zh,new B.my(w)).aB(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cl(j.gbw().a.snapshot()):l).a,a2)
a2.delete()}this.lR(a8,a9,b0,40,A.c,220)},
c0S(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.a3U[a3].gp(0)
a4=a2.G()
s.drawRect(B.bF(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.a3U[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bF(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.d_(a0,1))+C.d_(a0,2)*a6,a6)
v=C.d_(a0,3)
t=C.d_(a0,4)
this.rR(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a3U[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cDh(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.c=v
p.r=A.bL.j(0.06).gp(0)
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
l.D(new B.c4(w,r,p,k))
w=a2+m*0.95
l.D(new B.aq(p,w))
p=n*0.3
j=a2+m
l.D(new B.aq(a1+p,j))
l.D(new B.aq(a1-p,j))
q=a1-q
l.D(new B.aq(q,w))
l.D(new B.aq(q,k))
l.D(new B.c4(v,r,v,a2))
l.D(new B.bs())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bJ(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.aa
d.c=q
d.r=A.az.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bF(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.I()
a1.sam(new B.a9(A.a5,A.a8,A.x,D.dn8,A.ay4,null).aB(0,new B.a3(v,a2,r,j)))
a4.aG(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rR(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bIU(a4,a5,a6,60)},
bIU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.d_(p,31))+C.d_(p,32)*v,v)
n=C.d_(p,33)
J.bm(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bJ(A.I,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.Qu[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bF(o),m)
m.delete()
u.restore()}},
cvu(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lR(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.d_(o,1)*1.6
m=A.k.F(a2+C.d_(o,2)*n,n)/n
l=e*(C.d_(o*7+A.k.bh((a2+C.d_(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aB(0,B.rG(new B.t(l,h),i)))
g.c=r
g.d=A.bE
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rR(a0,i,p,A.c,1-m)}},
bDY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.d_(r,1))
p=A.k.F(C.d_(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.d_(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=A.o.F(r,5)
m.r=D.aAJ[l].j(n).gp(0)
m.a=A.oO
m.z=new B.hg(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.aa
m.c=Math.max(0.6,q*0.05)
m.r=D.aAJ[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
cgI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bm(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bJ(A.I,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.aa
o.c=u
o.r=A.bL.j(0.45).gp(0)
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
w.restore()}this.lR(d,e,f,45,A.bL,270)},
bR5(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.d_(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.d_(o,2)*4,4)/4
j=A.et.av(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.d_(o,3))*(j*i)
if(h<=0.5)continue
g=D.db5[A.o.F(o,5)]
J.bm(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bJ(new B.t(0,l),i,j)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.c,g],u),null,null).aB(0,B.bJ(new B.t(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bF(d),a1)
a1.delete()}$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.hS.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lR(a5,a6,a7,30,A.hT,280)},
c4L(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bX(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.aa
j.c=v
j.r=D.ax8[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bF(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.d_(g,1))+C.d_(g,2)*h,h)
e=C.d_(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.d_(g,4))
a0=D.ax8[A.o.F(g,4)]
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(0)
J.bm(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bJ(A.I,d,d*1.5)
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
c3b(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bm(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aF(d.r,A.ag,a3,a3,a0)
a0.push(new B.aX(0,i))
a0.push(new B.c4(h,m,0,g))
a0.push(new B.c4(j,m,0,i))
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.aa
d.c=t
d.r=B.ar(A.bL,A.nR,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbw().a.snapshot()
v.drawPath((a1.e=new B.cl(d)).a,a2)
a2.delete()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.hT.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.I()
a5.sam(new B.c1(A.A,0.5,A.x,a3,0,B.a([A.hS.j(0.25),D.Yk],x.O),a3,a3).aB(0,B.bX(w,a4)))
a7.ad(w,a4,a5)
this.lR(a7,a8,a9,30,A.bL,300)},
cxR(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.bm.gp(0)
h.c=q
h.d=A.bE
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.sam(new B.c1(A.A,0.5,A.x,null,0,B.a([A.hT,A.hS.j(0.6),D.Yk],o),null,null).aB(0,B.bX(new B.t(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.d_(f,1)
d=A.k.F(b2+C.d_(f,2)*e,e)/e
a0=A.k.bh((b2+C.d_(f,2)*e)/e)
a1=C.d_(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.d_(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.hT,A.aC,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bE
a6.a=A.oO
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
g.delete()}}}this.lR(b0,b1,b2,35,A.bL,310)},
bHy(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aTv(a9,new B.au(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.d_(n,1))
l=a8*(0.14+0.24*C.d_(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(D.c45.aB(0,j))
h=i.G()
r.drawRect(B.bF(j),h)
h.delete()
g=A.k.bh(m/q)
f=A.k.bh(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.d_(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=A.bL.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bF(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.b_U.prototype={
B(d){var w,v=null,u=new C.ccw(),t=new C.ccy(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.apW,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ccx(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.HB[w]))
return B.bW(A.bC,s,A.bq,v,12,10)}}
C.ZI.prototype={
T(){return new C.aAA()}}
C.aAA.prototype={
gvQ(){var w=this.d
return w===$?this.d=this.a.c:w},
gb_F(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b3,A.aO),$.aw())}return v},
gay9(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaLC()
v=$.aw()
u.f!==$&&B.bG()
t=u.f=new B.as(new B.bb(w,A.b3,A.aO),v)}return t},
q(){var w=this.gb_F(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gay9()
w.S$=v
w.P$=0
this.a1()},
a_x(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_x=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Cg(90,700,700,A.eK),$async$a_x)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a_x)
case 8:p=e
o=q.b.toLowerCase()
n=J.aie(o,".png")?"image/png":"image/jpeg"
r.m(new C.ddJ(r,n,p))
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
return B.i($async$a_x,v)},
b_E(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.UJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahi(p.gvQ().a)
if(n==null)n=A.d.gI(D.HB)
w=p.gvQ()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.ab,A.t,B.a([B.bT(0,new C.NN(p.gvQ(),!1,!0,new B.c0(w.a+v,x.W)),0,0,0),B.ao(o,B.I5(A.mN,new C.ddO(d),B.nI(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.I5(D.bOc,new C.ddP(p),B.nI(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aSW,o,o,o)
t=B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gb_F(0),o,o,o,o,o,2,p.b_E("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.ddQ(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.fS,!0,A.a3,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.J(A.hS.j(0.6),A.r,1)
if(p.gvQ().d.length===0)q=D.bRA
else{q=C.hmi(p.gvQ().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fQ(q,A.A,o,o,A.cg,A.bV,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ac,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcay(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gvQ().d.length!==0)r.push(B.aH(o,o,o,o,D.a2B,o,o,o,new C.ddR(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bl(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.i,0,o,o),A.O,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gay9(),o,o,o,o,o,2,p.b_E("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.ddS(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a3,o,A.ao,o,o,o,o),A.ae,B.dl(D.bQu,D.fQ6,new C.ddT(p,d),B.bo(A.az,o,o,o,A.w,o,A.ck,o,new B.b7(B.m(14),A.a0),o,o,o))],u),A.ak,o,A.e,A.Q,0,A.p),A.f,o,o,D.b3P,o,o,o,o,A.G3,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aMf.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.a_2.prototype={
T(){return new C.bh4(new B.as(A.as,$.aw()))}}
C.bh4.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.J,m=n?A.c:A.M,l=n?A.aR:A.al,k=B.aJ(d,A.bX,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.J(n?A.bz:A.aL,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.dku(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cVh[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gR(t)
r=new B.aQ(12,12)
q=new B.aQ(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aO(!1,new B.bj(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.py,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bj(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dkv(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hs,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cy(A.bC,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bn:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a3,o,A.ao,o,o,o,o),1),A.ac,B.bH(A.aTU,o,new C.dkw(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.O)
return B.bl(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cn,B.cr(e,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.u1,A.a_h,o,o,o),!0,!1,A.af,!0,!0)}}
C.bgq.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e9()
a2.d3(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.I()
u.z=A.S7
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
C.bg8.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bt(new B.a3(0,0,0+a7.a,0+a7.b),A.kN),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.I()
a5.b=A.aa
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mR
a6.az(a1,a5)
a5=x.v
a4=new B.aF(a4.r,A.ag,a0,a0,B.a([],a5))
a4.D(new B.iN(a1))
v=new B.T0(new B.tk(B.xo(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ik()
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
j.b=A.aa
j.d=A.bE
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aF(r,k,a0,new B.cw([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cl(f)).a,g)
g.delete()}else{k=new B.aF(r,k,a0,new B.cw([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cl(f)).a,g)
g.delete()
k=new B.aF(r,a2.b,a0,new B.cw([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cl(f)).a,g)
g.delete()}}a4.ik()
e=u[a3].Ha(n).a
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
C.boY.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e9()
e.d3(this.c)
w=a0.a*(0.2+e.ah()*0.6)
v=e.hh()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.ganb()*1.4
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
i.push(new B.bs())
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.sam(B.tn(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lJ
g=j.G()
j=h.gbw().a.snapshot()
q.drawPath((h.e=new B.cl(j)).a,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.baY.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
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
e.b=A.aa
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.baC.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
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
i.b=A.aa
i.c=r
i.d=A.bE
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hg(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cl(g.gbw().a.snapshot()):i).a,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.bvX.prototype={
a3(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.I()
t=(0.5+0.5*t)*0.12
w.sam(new B.c1(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.d2c,null).aB(0,u))
d.aP(u,w)
w=u.cq(-3)
v=B.I()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lJ
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bsX.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
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
i.d=A.bE
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
C.bs5.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.I()
v.a=A.oO
v.sam(new B.a9(A.ay,A.aE,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aB(0,w))
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bft.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdC(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.I()
w.b=A.aa
w.c=1.4
w.d=A.bE
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.I()
u.b=A.aa
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uG
r=new C.ddq(this,r*0.16,d,u,w)
t=e.gdC()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
aw(d){return d.b!==this.b}}
C.xP.prototype={}
C.J5.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.arJ.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uU.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mG.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eO.prototype={
hJ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.es(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdM(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.i01(v.z))
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
hJ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eO>")
n=B.C(new B.N(n,new C.chY(),m),m.k("ak.E"))
return C.rE(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.chZ(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbb3(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSG(){if(!C.kF(this.w))return!1
var w=this.gbb3()
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
q=B.T(r).k("N<1,lR>")
r=B.C(new B.N(r,new C.chN(),q),q.k("ak.E"))
return C.BW(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
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
v=B.T(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.chO(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jO.prototype={}
C.b22.prototype={
B(d){return B.cz(new C.chT(this))}}
C.aoV.prototype={
T(){return new C.bkf(null,null)}}
C.bkf.prototype={
gb_G(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fA,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gb_G().q()
this.bww()},
B(d){return B.ca(this.gb_G(),new C.dLD(),this.a.c)}}
C.aM1.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.adI.prototype={
Qg(d,e,f,g){return this.bQK(d,e,f,g)},
bQK(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qg=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qg)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eo,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qg,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.J(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dd,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.E(new C.adZ(A.hM,"Download",A.c1,new C.euU(w,d),!0,v),1),A.at,B.E(new C.adZ(A.um,"Share",A.bk,new C.euV(w,d),!1,v),1),A.at,B.E(new C.adZ(A.hv,"Safari",A.b_,new C.euW(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aA)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.euX(d),v,v))
return B.bl(!0,new B.D(A.qc,B.x(B.a([B.p(v,B.x(n,A.ak,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.j9,v,t,u,s,v,A.n),v,v,v,v,A.Ga,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adZ.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.J(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a2,!0,v,B.aO(!1,u,!0,B.eJ(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bD4,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ai)}}
C.b20.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqV(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.caz().alg(1.35)
s=B.awi(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bBV(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.w,A.bk,h,h,h,h,2,D.bZP,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.c0("slide_tf_"+g.a,x.W),h,A.wQ,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.A6,A.ao,h,A.Uk,h,h)
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
w=n?t.cKW(B.b1(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eL:A.DX
p=B.d(f,new B.c0("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Ub:s
$.S()
j=B.I()
j.b=A.aa
j.c=3*w
j.e=A.dT
j.r=A.av.gp(0)
j=i.crt(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.ab,A.t,B.a([j,i.crr(k,t,l?A.Ub:s)],x.p),h)}else w=i.crs(p,t,g.k2?A.Ub:s,m)
v=new B.mY(w,new B.c0("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.c8,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c_l()
case 3:return i.cj4()
case 2:return B.b4(h,h,h,new C.b1Y(g,h),A.fF)
case 5:g=g.r
return new C.b2_(g,!i.e&&i.z==null,h)}},
caz(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.je
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cX(D.afZ,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cX(l,A.I,6*v),new B.cX(l,A.I,16*v),new B.cX(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bG
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mY
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cX(A.bA,new B.t(v,v),0)],x.r)
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
e=B.a([new B.cX(A.cR,A.I,8*v),new B.cX(A.aw,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=X.xz
break
case"ice":v=o.d
e=B.a([new B.cX(A.aQ,A.I,10*v),new B.cX(A.cw,A.I,22*v)],x.r)
k=A.P
w=A.ez
break
case"chalk":h=o.d
e=B.a([new B.cX(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.je
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d4f[q]
u.push(new B.cX(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cX(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.I()
v=o.d
f.sam(D.c1w.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cX(A.Lv,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.I()
v=o.d
f.sam(D.c1R.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cX(l,A.I,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cy
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cX(l.j(0.45),new B.t(u,u),0),new B.cX(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.je
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aA4(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f1L.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.chR(h)
v=r.k2?C.icP(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eL:A.DX
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Yb(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
crt(d,e,f,g){return this.aA4(d,e,f,!1,g)},
crr(d,e,f){return this.aA4(d,e,f,!1,null)},
crs(d,e,f,g){return this.aA4(d,e,f,g,null)},
bBV(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a5}},
c_l(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.at(B.X(s.b===D.lg?A.Hb:A.C3,A.aB,t,t,t,32),t,t,t)}w=u.bEY(r)
if(s.b===D.lg){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.J(A.cr,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dB,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aOM(r,!0)
return C.fG8(s.go,v,s.id)}return w},
aOM(d,e){var w,v,u,t
try{w=C.id9(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cz(new C.chQ(this,w,v,e))
return u}catch(t){return D.adB}},
bEY(d){return this.aOM(d,!1)},
cj4(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b9e
return C.idr(v,w.db,w.dx)}}
C.b1Y.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.I(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.I()
w.r=B.b1(f.ch).gp(0)
w.b=A.aa
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
r.D(new B.bs())
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
r.D(new B.bs())
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
r.D(new B.bs())
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
r.e=null}}r.D(new B.bs())
d.aG(r,g)
d.aG(r,w)
break}},
aw(d){return d.b!==this.b}}
C.aJA.prototype={
T(){return new C.bvs(null,null)}}
C.bvs.prototype={
Z(){var w,v=this
v.a2()
w=B.bn(null,A.hr,null,1,null,v)
w.cM(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.byG()},
aOX(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c2(B.at(B.d(d,w,w,w,w,w,w,A.dd,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a5,A.a8,A.x,v,w,w),A.n),A.bg)},
bC8(){var w,v=this,u=null,t=v.aOX("Slide A",A.bk),s=v.aOX("Slide B",A.b_)
if(v.a.c===D.cl)return new B.an(A.a_,u,A.b1,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.ca(w,new C.f9e(v,s,t),u)},
B(d){return this.bC8()}}
C.aKh.prototype={
jk(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jZ(d){return d.b!==this.b}}
C.Vr.prototype={
T(){return new C.bkq(null,null)}}
C.bkq.prototype={
Z(){var w,v,u=this
u.a2()
w=B.bn(null,A.BB,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bP(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dWR(u),x.a)},
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
else B.bP(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dWQ(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwK()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.ca(w,new C.dWP(this),v.d)}}
C.J4.prototype={
B(d){return B.cz(new C.chJ(this))}}
C.aAf.prototype={
T(){return new C.beU()}}
C.beU.prototype={
Z(){this.a2()
if(this.a.c!==D.cl)B.bP(A.MX,new C.daF(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Vr(C.es(A.bi,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bh,o,2,"",0,0,"",u,D.f8,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.c0("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.es(A.bi,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bh,o,2,"Element flies in",0,0,"",q.a.c,D.cT,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.ab,A.t,B.a([w,B.ao(32,new C.Vr(t,B.p(p,D.fBo,A.f,p,p,new B.o(s,p,B.J(A.aZ,A.r,1),r,p,p,A.n),p,p,p,p,A.jd,p,p,1/0),!0,1,new B.c0("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c2(n,D.b4o,A.bg)}}
C.a84.prototype={
T(){return new C.bl3(null,null)}}
C.bl3.prototype={
gb0i(){var w=this.a
if(w.e)w=D.f1U.t(0,w.c)||D.aQ2.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a2()
if(v.gb0i()){w=C.ibs(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bxd()},
B(d){var w,v=this,u=v.d
if(!v.gb0i()||u==null)return v.a.d
w=v.a
return B.ca(u,new C.ejx(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_X.prototype={
B(d){var w=null
return B.at(C.b21(!0,w,!1,C.es(A.L,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bh,4280172719,2,"Aa",0,0,this.c,D.cl,D.cT,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bg6.prototype={
jk(d){return C.a2P(this.b,new B.a3(0,0,0+d.a,0+d.b).cq(-this.c))},
jZ(d){return d.b!==this.b||d.c!==this.c}}
C.br0.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cq(-this.d),g=this.b,f=C.a2P(g,h),e=a1.gdC(),d=new C.eZ9()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aRx.aB(0,h))
a0.aG(f,w)
g=C.a2P(g,h.cq(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bpM.gp(0)
a0.aG(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.fc_.aB(0,h))
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
g.sam(D.fbY.aB(0,h))
a0.aG(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a2P(g,h.cq(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aG(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hg(A.G,e*0.035)
a0.aG(f,g)
g=d.$1(e*0.016)
g.r=A.oY.gp(0)
a0.aG(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.fbT.aB(0,h))
a0.aG(f,w)
w=C.a2P(g,h.cq(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bd_.gp(0)
a0.aG(w,v)
g=C.a2P(g,h.cq(e*0.03))
v=d.$1(e*0.004)
v.r=D.bfZ.gp(0)
a0.aG(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aRx.aB(0,h))
a0.aG(f,g)
for(g=B.xo(f),w=B.a([],x.X),g=new B.tk(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.ju(y.M));--q
g.ik()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bh(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ik()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ik()
m=w[q].Ha(p*n/o).a
l=D.d1t[A.o.F(n,4)]
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
g.sam(D.fc1.aB(0,h))
g.z=new B.hg(A.G,e*0.03)
a0.aG(f,g)
g=d.$1(e*0.018)
g.sam(D.fbZ.aB(0,h))
a0.aG(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a2P(g,h.cq(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nV.gp(0)
a0.aG(g,w)
break}},
aw(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bs2.prototype={
a3(d,e){d.G8(C.a2P(this.b,new B.a3(0,0,0+e.a,0+e.b).cq(-this.c)),A.w,e.gdC()*0.05,!1)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.aMe.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aMH.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aNZ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.a8n.prototype={}
C.Og.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aF4(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
ge1(){return this.c},
gU1(){return this.r},
gU2(){return this.w},
gLX(){return this.x}}
C.aF4.prototype={
Z(){var w,v=this
v.a2()
$.aV.bZ$.push(v)
C.fL7()
$.hu3=new C.eB7(v)
w=B.bn(null,A.By,null,1,null,v)
w.fm(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.IG()},
bx(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.OO(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IG()}},
jd(d){if(d===A.AC||d===A.tl||d===A.tk||d===A.pF)this.tP()},
q(){var w,v,u,t=this
$.aV.hO(t)
w=t.at
if(w!=null)w.a4(0)
t.tP()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bP(0)
v.ha()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bxo()},
gac3(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gP7(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acy(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSG())return!1
return!0},
kp(){return this.acy(null)},
ajm(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.fag)},
qx(){if(!this.kp())return!1
this.ajm()
return!0},
arK(d){var w,v,u,t,s,r=this
if(r.acy(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hta(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A0(){return this.arK(null)},
IG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arL(k),$async$IG)
case 3:j=e
w=4
return B.b(C.aqn(k),$async$IG)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h0_(j,t.c2e())
w=t.gac3()?5:7
break
case 5:r=t.gP7()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b0a(r),$async$IG)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.exv())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c6(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.exw())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.M)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yR(m==null?"":m)!=null)continue
C.fLj(n,s)
p=!0}t.m(new C.exx(t,s))
if(p||s.length>J.ad(j))t.tP()
case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
c2e(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kF(w)&&w!==q}if(w)p.push(r)
return p},
cpV(d){var w,v=this,u=d.w
if(!C.kF(u)||u==="hati_kiapo_uongozi")return
v.aaS(d)
w=A.d.bg(v.d,new C.ez5(d))
u=v.d
if(w>=0){u[w]=d.hJ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c6(u,0,d.hJ())
v.db=!1},
ck0(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kF(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cpV(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,i4>")
s=B.C(new B.cQ(new B.Z(s,new C.eyU(),w.k("Z<1>")),new C.eyV(),v),v.k("L.E"))
return s},
OO(d){return this.bR9(d)},
tP(){return this.OO(null)},
bR9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$OO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ck0()
w=3
return B.b(C.Wk(d==null?t.a.c:d,s),$async$OO)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.arK(r)?4:5
break
case 4:w=6
return B.b(C.a7B(r),$async$OO)
case 6:q=r.x
p=A.a.i(q==null?t.gP7():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.ewT())
q=t.d
if(o>=0)q[o]=r.hJ()
else A.d.c6(q,0,r.hJ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$OO,v)},
pw(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.kF(u.w))===!0?A.hq:A.ly
v.at=B.cK(w,new C.eAd(v))},
b_H(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afu(u.hJ(),v.f,v.r))
if(w.length>40)A.d.cE(w,0)
A.d.a9(v.ay)},
cDy(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afu(w.e.hJ(),w.f,w.r))
w.m(new C.eB3(w,v.pop()))
w.pw()},
cp0(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afu(w.e.hJ(),w.f,w.r))
w.m(new C.ez3(w,v.pop()))
w.pw()},
oo(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.eAR(u))
if(w>=0){u.d[w]=u.e.hJ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Y2(d){var w,v,u,t,s=this.gdw()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xH(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bP(0)
u.ha()}w.a9(0)},
Kp(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdw()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.df(new B.cQ(new B.Z(w,new C.eAS(),v.k("Z<1>")),new C.eAT(),u),u.k("L.E"))
w=this.ch
v=B.a6(w).k("cv<1>")
v=B.C(new B.cv(w,v),v.k("L.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.M)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bP(0)
p.ha()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.M)(v),++r){n=v[r]
if(n.b!==D.cT)continue
p=n.a
m=w.c3(0,p,new C.eAU(n))
s.c3(0,p,new C.eAV())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
I_(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.ewh(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gP7()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c6(u.d,0,u.e.hJ())}u.oo()
u.pw()},
ajI(d,e){var w,v,u,t,s=this
if(s.kp())return
w=s.Y2(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kF(v.w))===!0
if(u){C.ibw(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdw()
if(t!=null)C.ibx(t,w.d+w.f*0.5)}}s.I_()
s.oo()
s.pw()
if(u&&s.c!=null)s.m(new C.eB4())},
cEC(d,e){var w=this,v=w.gdw()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.I_()
w.oo()
w.pw()},
gdw(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqD(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i9y(o)
if(w!=null)return w
v=q.gdw()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c_A(v)
t=q.c_z(v)
s=B.b1(v.e)
r=v.f
return new C.jO(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hN0(o)},
c_A(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(t.b===D.cT)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.M},
c_z(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cT&&t.w<28)return B.b1(t.Q)}return A.aJ},
afH(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gac3()){w.c.K(x.q).f.U(D.f8S)
return}w.aaS(d)
w.b1_(C.bD4(d))
return}if(C.ciB(v)){w.aaS(d)
w.b1_(d)
return}w.m(new C.eyc(w,d))},
asi(){var w,v,u,t,s,r,q=this
q.a2F(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kF(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.ewf(q))
if(r&&q.c!=null){u.toString
q.JZ(u,s)}return}q.tP()
q.m(new C.ewg(q))},
b0Z(d){this.aaS(d)
this.a07(d,!0)},
aaS(d){if(!C.kF(d.w))return
C.fLj(d,this.d)},
a07(d,e){return this.cfU(d,e)},
b1_(d){return this.a07(d,!1)},
cfU(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a07=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bD4(d)
if(e){r=s.x
q=A.a.i(r==null?t.gP7():r)
t.dy.W(0,q.toLowerCase())
C.aqo(t.a.c,q)}r=s}else r=d
w=C.ciB(r.w)?3:4
break
case 3:w=5
return B.b(t.aaT(r),$async$a07)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.eyz(l))
o=l.a.hJ()
n=C.kF(o.w)&&C.icK(o)
t.m(new C.eyA(t,o,p))
if(n){m=A.d.bg(t.d,new C.eyB(o))
if(m>=0){t.d[m]=o.hJ()
t.tP()}}if(!t.acy(l.a))t.Zd()
r=!1
if(t.c!=null)if(!t.acy(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.arK(r)&&C.fHj(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.f9s)
case 1:return B.h(u,v)}})
return B.i($async$a07,v)},
aaT(d){return this.bPe(d)},
bPe(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lq(r.c,A.zP),$async$aaT)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l2(!1,r,s.c,s.d,null,A.zP,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaT,v)},
od(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$od=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ciB(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ci0(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$od,v)},
afo(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ci(null,null,!1,null,new C.eyb(),s,null,!0,!0,x.H),$async$afo)
case 3:if(t.c==null){w=1
break}t.asi()
case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
afn(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ci(null,null,!1,null,new C.ey8(),s,null,!0,!0,x.H),$async$afn)
case 3:if(t.c==null){w=1
break}t.m(new C.ey9())
t.asi()
case 1:return B.h(u,v)}})
return B.i($async$afn,v)},
Zd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zd)
case 3:r=e
if(B.jT(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Zd)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f7s)
case 1:return B.h(u,v)}})
return B.i($async$Zd,v)},
JZ(d,e){return this.cqj(d,e)},
cqj(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JZ=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agU(s,t.gEE(),t.gED(),!0,e,t.d),$async$JZ)
case 9:w=4
break
case 6:w=10
return B.b(C.agV(s,t.gEE(),t.gED(),!0,e,t.d),$async$JZ)
case 10:w=4
break
case 7:w=11
return B.b(C.agW(s,t.gEE(),t.gED(),!0,e,t.d),$async$JZ)
case 11:w=4
break
case 8:w=12
return B.b(C.agX(s,t.gEE(),t.gED(),!0,e,t.d),$async$JZ)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JZ,v)},
c17(){var w,v,u,t,s=this
if(!s.gac3()){s.c.K(x.q).f.U(D.f7F)
return}w=s.gP7()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agT(u,t,v,new C.exr(s),new C.exs(s),w)},
afI(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dO,null,new C.eyi(u),s,!0,!0,!1,A.lL,!1,!1,x.N),$async$afI)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agX(s,u.gEE(),u.gED(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agU(s,u.gEE(),u.gED(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agV(s,u.gEE(),u.gED(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agW(s,u.gEE(),u.gED(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c17()
return B.h(null,v)}})
return B.i($async$afI,v)},
cf_(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b_H()
w=C.cE()
v=C.BW(t,t,t,t,D.Dl,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eyj(u,v))},
aai(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aai=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qx()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ihj(s),$async$aai)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d5(q.r,new C.ewj())
t.d7(new C.ewk(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aai,v)},
ahF(d,e,f,g){var w=null,v=g?A.ds:A.bN,u=B.J(g?A.aZ:A.cr,A.r,1)
return B.hc(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a06(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a06=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qx()){w=1
break}s=t.k5()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.eyu(),q),q.k("L.E"))}o=s!=null&&s.b===D.lK?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.f9D)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.eyv(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a06)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a06,v)},
afZ(){return this.cfT()},
cfT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qx()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ih5(s,t.f+1,o),$async$afZ)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Y
q=B.k3(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.eyx(q))
t.d7(new C.eyy(p,t,o,q,r))
t.c.K(x.q).f.U(D.fa1)
case 1:return B.h(u,v)}})
return B.i($async$afZ,v)},
ag5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ag5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qx()||!t.A0()){w=1
break}s=t.gdw()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.eyP(),q),q.k("L.E"))
if(p.length===0){t.c.K(x.q).f.U(D.f7d)
w=1
break}o=new B.N(p,new C.eyQ(),B.T(p).k("N<1,K>")).fb(0,new C.eyR())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.M)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b3,A.aO),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.K,null,new C.eyS(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ag5)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eyT())
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
afL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afL=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hvi(s,new C.EP(r,q,p,o==null?"":o)),$async$afL)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d7(new C.eyk(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahi(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afL,v)},
aaM(){return this.bOy()},
bOy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aaM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qx()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ihi(s,t.f+1,l),$async$aaM)
case 3:r=e
q=$.h3C
$.h3C=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d7(new C.ewA())
t.c.K(x.q).f.U(D.f74)
w=1
break}if(!q){s=r.CW
s=C.hu1(l,s==null?"":s,!1)}else s=!1
if(s){t.d7(new C.ewB(t,l,r))
t.c.K(x.q).f.U(D.fav)
w=1
break}s=l.cx
if(s==null)s=A.Y
p=B.k3(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.ewC(p))
o=s.length
t.d7(new C.ewD(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaM,v)},
aR4(d,e){if(e){this.agy()
return}this.cf_(d,!1)},
bK5(){return this.aR4(null,!1)},
agy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c0,null,new C.eyZ(t),r,!0,!0,!0,A.pr,!1,!1,x.N),$async$agy)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ez_(t,C.i9x(s).pJ()))
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
d7(d){var w=this
if(w.qx())return
w.I_()
w.b_H()
w.m(d)
w.Kp()
w.oo()
w.pw()},
a8N(){this.d7(new C.eve(this,D.mS))},
aSy(){var w=this.gdw()
if(w==null)return
this.d7(new C.ewy(this,w))},
aRG(){var w=this.e
if(w==null||w.r.length<=1)return
this.d7(new C.eww(this))},
b3U(d,e){if(this.e==null||d===e)return
this.d7(new C.ez7(this,d,e))},
Ok(d){return this.bM6(d)},
bM6(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ok=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gP7():s)
w=5
return B.b(C.aqm(t.a.c,r),$async$Ok)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.arN(s)
w=6
return B.b(C.b25(t.a.c,s),$async$Ok)
case 6:if(t.c==null){w=1
break}t.m(new C.ews(t,d))
w=7
return B.b(t.tP(),$async$Ok)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ok,v)},
cqg(d,e){var w=this
if(d.z){w.ajm()
return}w.m(new C.ez6(w,d,e))
w.pw()},
k5(){var w,v,u,t,s,r=this.gdw()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
X3(d){return this.ch.c3(0,d.a,new C.ewi(d))},
aua(d){return this.CW.c3(0,d.a,new C.ewU())},
a2F(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Y2(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.al$.d.c
if(u!=null)u.ji()},
b7n(){return this.a2F(!0)},
a2B(d){var w,v,u=this
if(u.qx())return
if(!u.A0())return
w=u.Y2(d)
if(w==null||w.b!==D.cT)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.X3(w).saX(0,"")}u.m(new C.eAP(u,d))
$.aV.x1$.push(new C.eAQ(u,d,w))},
b7W(d){var w=this
if(d.b===D.cT&&!w.kp()&&w.A0()){w.a2B(d.a)
return}w.aAu(d.a)},
aAu(d){var w,v,u,t,s,r=this
if(r.kp())return
w=r.r
if(w!=null&&w!==d){v=r.Y2(w)
if(v!=null&&v.b===D.cT){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eAe(r,s,d))
if(s||d==null){t=$.aV.al$.d.c
if(t!=null)t.ji()}},
aNj(){this.d7(new C.evf(this))},
pf(d){return this.bBb(d)},
bBb(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$pf)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d7(new C.evc(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pf,v)},
W9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$W9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GX(78,1920),$async$W9)
case 3:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.ev2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$W9,v)},
W3(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdw()==null){w=1
break}w=3
return B.b(S.D7(t.a.c),$async$W3)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.fb4)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.ev_(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$W3)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdw()==null){w=1
break}t.d7(new C.ev0(t,q))
case 1:return B.h(u,v)}})
return B.i($async$W3,v)},
at8(){var w=this,v=w.r
if(v==null||w.gdw()==null)return
if(A.d.b3(w.gdw().z,new C.ewu(v))){w.c.K(x.q).f.U(D.fa5)
return}if(w.w===v)w.a2F(!0)
w.d7(new C.ewv(w,v))},
bIn(){var w=this.k5(),v=w==null
if((v?null:w.b)===D.f8)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cT)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aO0(d,e){var w=this,v=w.k5(),u=w.gdw(),t=w.e
if(t==null)return
w.d7(new C.evH(w,v,d,e,t,u))},
bCM(d){return this.aO0(d,null)},
a94(d){return this.bCU(d)},
bCU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a94=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a8t.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.od(),$async$a94)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k5()
if(s!=null){r=s.b
if(r===D.cT)t.bCM(s.w>=28||s.x.gdM(0)>=A.H.gdM(0)?d.d:d.e)
else if(r===D.f8){r=d.c
t.aO0(r.j(0.88),r)}w=1
break}t.d7(new C.evM(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a94,v)},
a93(d){return this.bCS(d)},
bCS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a93=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k5()
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
return B.b(t.od(),$async$a93)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.evK(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a93,v)},
bCC(d){var w=this.gdw()
if(w==null)return
this.d7(new C.evG(this,w,d))},
a0c(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ihe(r),$async$a0c)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oo()
t.m(new C.eyJ(t,s))
w=4
return B.b(t.tP(),$async$a0c)
case 4:if(t.c!=null)t.afH(s)
case 1:return B.h(u,v)}})
return B.i($async$a0c,v)},
aaE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2F(!0)
t.oo()
s=t.c
s.toString
w=3
return B.b(C.Ry(s,q),$async$aaE)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaE,v)},
DN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oo()
t=4
w=7
return B.b(C.aQL(m),$async$DN)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aQb(o,q,m.b),$async$DN)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DN,v)},
Fs(d,e){return this.cCY(d,e)},
cCY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fs=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qx()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2F(!0)
t.oo()
s=h.a=t.e.hJ()}else{r=A.d.bg(t.d,new C.eAY(d))
s=h.a=r>=0?t.d[r].hJ():d.hJ()}s=s.w
q=s==null
p=C.iav(q?"":s)
o=C.hsX(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Z<1>")
n=B.C(new B.Z(s,new C.eAZ(h,p),q),q.k("L.E"))
s=h.a.b
w=3
return B.b(t.cwb(n.length,o,s),$async$Fs)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.iap(h.a)
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
return B.b(t.cwa(n,o),$async$Fs)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fW(t.d,new C.eB_(s))
s=h.a.b
w=11
return B.b(t.cw8(k.b,s),$async$Fs)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hJ()
case 5:j=C.iau(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.fbg)
w=1
break}w=12
return B.b(t.cw9(j.a,s,o,j.c),$async$Fs)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eB0(h,t,i))
t.pw()
case 1:return B.h(u,v)}})
return B.i($async$Fs,v)},
cwb(d,e,f){var w=this.c
w.toString
return B.bU(A.K,null,new C.eAu(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cwa(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.eAt(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cw8(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.eAn(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cw9(d,e,f,g){var w=this.c
w.toString
return B.bU(A.K,null,new C.eAp(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ac7(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ac8(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c0,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dq,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ay,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fm8,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aVS(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.J(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.UY,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aVV(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.ay,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.J(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a2,!0,w,B.aO(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.n_,w,w,w),A.cL,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.yF,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.exn(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
bZu(d,e,f,g,h,i){return this.aVV(d,e,f,!1,g,h,i)},
avv(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.J(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dd,w,w,w),A.bD,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_E,w,w,w)},
aVU(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.m(14),A.a0),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nG,w,w,w),w,new C.exm(d,f),v)},
aVT(d,e){return this.aVU(d,e,null)},
Kg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pf(l,s.c,s.d),$async$Kg)
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
for(l=A.d.gaf(o.z),n=new B.f5(l,new C.eAf());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aag(l.charCodeAt(0)==0?l:l,r.b),$async$Kg)
case 4:l=t.a
w=5
return B.b(B.pe(l.c,l.d),$async$Kg)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kg,v)},
Il(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Il=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pf(q,s.c,s.d),$async$Il)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aag(A.X.ap(r.ag(),null),r.b+".json"),$async$Il)
case 4:q=t.a
w=5
return B.b(B.pe(q.c,q.d),$async$Il)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
b76(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oo()
u.tP()
w=u.c
w.toString
v=B.dX(new C.eAO(u,t),!1,null,x.z)
B.a4(w,!1).cc(v)},
Hz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$Hz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fLw(),$async$Hz)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.idl(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.av,null,new C.ev7(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hz)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d7(new C.ev8(t,s))
w=1
break}if(p==="split")t.d7(new C.ev9(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hz,v)},
NH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}w=3
return B.b(t.od(),$async$NH)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQK(s,null,null),$async$NH)
case 4:r=e
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.evd(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NH,v)},
b3H(d){var w=this.e
if(w==null||!C.kF(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aPk(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQK(s,t==null?null:B.b1(t),u)},
a8L(d){return this.bB2(d)},
bB2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A0()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fbv)
w=1
break}w=3
return B.b(t.aPk(),$async$a8L)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.ev4(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8L,v)},
ahh(d){return this.cp3(d)},
cp3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A0()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.faD)
w=1
break}w=3
return B.b(t.aPk(),$async$ahh)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.ez4(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
cbH(){var w,v,u=this
if(u.kp())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cC1()}},
cC1(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d7(new C.eAW(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bZP(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d7(new C.exq(this,r,u.d))},
c3x(d){var w
if(this.kp())return!1
w=this.e
if((w==null?null:C.kF(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fI4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lg&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c3y(d){var w
if(this.kp())return!1
w=this.e
if((w==null?null:C.kF(w.w))!==!0)return!0
if(!this.A0())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fI4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lg&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NP(d){return this.bDj(d)},
bDj(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A0()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f9t)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqq(p),$async$NP)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.fa7)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7B(r)
w=1
break}t.m(new C.evQ(t,d,o))
t.oo()
$.aV.x1$.push(new C.evR(t))
case 1:return B.h(u,v)}})
return B.i($async$NP,v)},
W7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$W7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$W7)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bDL(),$async$W7)
case 4:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.ev1(t,s))
case 1:return B.h(u,v)}})
return B.i($async$W7,v)},
Oz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$Oz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k5()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fLn(r),$async$Oz)
case 4:q=e
if(q==null){w=1
break}t.d7(new C.ewS(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oz,v)},
ja(d){this.d7(new C.eva(this,d))},
qn(d){return this.bCv(d)},
bCv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qx()){w=1
break}m=!D.aQ5.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.od(),$async$qn)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hz()
w=1
break A
case"sign_paper":t.NH()
w=1
break A
case"hd_photo":t.W7()
w=1
break A
case"sharpen":t.Oz()
w=1
break A
case"print":t.DN()
w=1
break A
case"rotate":s=t.k5()
if(s!=null)t.d7(new C.evj(s))
w=1
break A
case"text_box":t.aNj()
w=1
break A
case"picture":t.W9()
w=1
break A
case"present":t.b76()
w=1
break A
case"new_slide":t.a8N()
w=1
break A
case"export_json":t.Il()
w=1
break A
case"outline_share":t.Kg()
w=1
break A
case"flashcard_tool":t.vq(D.IE)
w=1
break A
case"quiz_tool":t.vq(D.IF)
w=1
break A
case"worksheet_tool":t.vq(D.IG)
w=1
break A
case"duplicate_el":s=t.k5()
if(s==null){w=1
break A}t.d7(new C.evk(t,s))
w=1
break A
case"delete_el":t.at8()
w=1
break A
case"bring_fwd":s=t.k5()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.evl(t,s))
w=1
break A
case"send_back":s=t.k5()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.evw(t,s))
w=1
break A
case"align_left":s=t.k5()
if(s!=null)t.d7(new C.evz(s))
w=1
break A
case"align_center":s=t.k5()
if(s!=null)t.d7(new C.evA(s))
w=1
break A
case"align_right":s=t.k5()
if(s!=null)t.d7(new C.evB(s))
w=1
break A
case"grayscale":case"brighten":t.Oz()
w=1
break A
case"flip_h":s=t.k5()
if(s!=null)t.d7(new C.evC(s))
w=1
break A
case"flip_v":s=t.k5()
if(s!=null)t.d7(new C.evD(s))
w=1
break A
case"rectangle":t.pf(D.bh)
w=1
break A
case"circle":t.pf(D.eS)
w=1
break A
case"triangle":t.pf(D.k_)
w=1
break A
case"arrow":t.pf(D.Dn)
w=1
break A
case"line":case"divider":t.pf(D.fD)
w=1
break A
case"word_count":r=t.gdw()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f5(q,new C.evE()),o=0;p.C();){n=A.a.fD(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.evF(),B.T(n).k("Z<1>")).gL(0)}t.c.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.ja(C.iY(A.L,!1,t.gqD().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mT,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.ja(C.iY(A.L,!1,t.gqD().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.ja(C.iY(A.bi,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uN,0.8,0.1,0.22))
w=1
break A
case"numbered":t.ja(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.uM,0.8,0.1,0.22))
w=1
break A
case"quote":t.ja(C.iY(A.L,!1,4279310375,A.aF,24,A.cD,A.a7,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.ja(C.iY(A.bi,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.uN,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.ja(C.iY(A.dV,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cE(),C.bDN(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.ja(C.iY(A.dV,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cE(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d7(new C.evm(t))
w=1
break A
case"footer_bar":t.d7(new C.evn(t))
w=1
break A
case"highlight":t.d7(new C.evo(t))
w=1
break A
case"redact":t.d7(new C.evp(t))
w=1
break A
case"callout":t.d7(new C.evq(t))
w=1
break A
case"checkboxes":t.ja(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.ja(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d7(new C.evr(t))
w=1
break A
case"letter":t.ja(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cE(),C.bDN()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.ja(C.iY(A.bi,!1,4279310375,A.aF,22,A.bp,A.P,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uN,0.8,0.1,0.12))
w=1
break A
case"toc":t.ja(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.ja(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.ja(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.ja(C.iY(A.L,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cE(),"APPROVED",0,D.mT,0.32,0.62,0.08))
w=1
break A
case"draft":t.ja(C.iY(A.L,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cE(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.ja(C.iY(A.L,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d7(new C.evs(t))
w=1
break A
case"progress":t.d7(new C.evt(t))
w=1
break A
case"stars":t.ja(C.iY(A.L,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.qA,0.8,0.1,0.4))
w=1
break A
case"equation":t.ja(C.iY(A.L,!1,4279310375,A.aF,32,A.bp,A.P,0.14,C.cE(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.ja(C.iY(A.L,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uM,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d7(new C.evu(t))
w=1
break A
case"compare":t.d7(new C.evv(t))
w=1
break A
case"link_text":t.ja(C.iY(A.bi,!1,4280640491,A.mY,16,A.bp,A.a7,0.1,C.cE(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.ja(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cE(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.ja(C.iY(A.bi,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cE(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d7(new C.evx(t))
w=1
break A
case"cover_page":r=t.gdw()
if(r==null){w=1
break A}t.d7(new C.evy(t,r))
w=1
break A
case"invoice":t.ja(C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.ja(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.ja(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bDN()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.ja(C.iY(A.bi,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.ja(C.iY(A.bi,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qn,v)},
cvD(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f1Q.t(0,this.z)},
cvC(d){if(this.k5()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b8P(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.J(u,A.r,o&&e?2:1)
t=C.ida(d)
s=o?12:18
r=o?A.H:A.cP
if(o)if(e)q=f
else q=g?A.ad:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.OS,A.f,p,p,D.EC,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aB(p,new B.an(A.a_,p,A.ab,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bOP(d){var w,v=null,u=this.k5()
if(u==null)return A.bJ
w=B.a([A.ac,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.N(D.Rm,new C.ewR(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.i,0,v,v)},
vq(d){return this.bBa(d)},
bBa(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aQ_.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.od(),$async$vq)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.evb(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f0x
w=h.e
if(w==null)return h.bF3()
v=h.gdw()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aJ(u,A.bX,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aJ(u,A.eM,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c0:D.bfm
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSG()}else j=!1
if(j)k.push(new C.a85(h.a.c,!1,h.e.gbb3(),h.gcbE(),g))
else if(s&&h.e!=null&&!h.kp()&&C.ciB(h.e.w)){j=h.a
k.push(new C.a85(j.c,j.d,g,h.gccN(),g))}if(s)k.push(h.bOK(w,t,r))
if(s&&h.kp()){w=t?A.fM:A.kB
j=B.m(14)
i=B.J(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bTq,A.ac,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fM,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.BG,A.iB,g,g,g))}w=!n
if(w&&!h.kp())k.push(h.c4u(t,r))
if(w&&h.kp())k.push(h.cCZ(t))
if(r&&h.k5()!=null&&w&&!h.kp())k.push(h.c4p(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b6y(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b6y(t,!1),g))
i.push(B.E(new B.bM(A.b4,g,g,h.bGn(v,t,!s||p),g),1))
if(h.cvD(r)&&u&&s&&!h.kp())i.push(h.cbq(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kp()&&h.cvC(!1))j.push(new B.a7(240,g,h.bRx(t),g))
k.push(B.E(B.B(j,A.ak,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c4q(t))
return B.c7(g,m,B.bl(!1,new B.an(A.a_,g,A.ab,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bF3(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.J
p=w?A.c0:A.bN
v=r.a.e
u=r.caA(A.bk,A.qi,new C.evU(r),r.gceX(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aN1(A.bk,A.hL,"Blank Presentation",new C.evV(r)),1),A.at,B.E(r.aN1(A.b_,A.wl,"Class Template",new C.evW(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bv,s,A.mX,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ae],t)
t=r.d
if(t.length===0)u.push(r.bBY(w))
else{t=new B.i2(t,B.T(t).k("i2<1>"))
A.d.v(u,t.gdV(t).dF(0,new C.evX(r,w),x.l))}return B.c7(q,p,B.bl(!1,B.cr(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bMU(){this.m(new C.ewx(this))
var w=this.c
w.toString
if(B.aJ(w,A.bX,x.w).w.a.a<900){w=$.aV.al$.d.c
if(w!=null)w.ji()}},
ag_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k5()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.eyI(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$ag_)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ag_,v)},
AY(d,e){return this.cvZ(d,e)},
cvZ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AY=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.XU,!0,"Dismiss",j,new C.eAg(),new C.eAh(d,e),A.iy,!0,x.N),$async$AY)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajm()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSG()){r.ajm()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQL(d),$async$AY)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aQb(j,q,d.b),$async$AY)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fs(d,!1),$async$AY)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.XU,!0,"Dismiss",j,new C.eAi(),new C.eAj(d),A.a2,!0,x.y),$async$AY)
case 20:if(g===!0)r.Ok(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ah1("Rename presentation",d.b),$async$AY)
case 24:l=g
if(l!=null)r.cqg(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eAk(r,k))
r.pw()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AY,v)},
b1D(d,e){var w=null
return B.bN(!1,D.fLK,w,w,!0,w,w,e,w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.ax,w,A.lA,w,w,w,w,w,A.km,w,w))},
bBY(d){var w=this.fy
w===$&&B.c()
return B.ca(w,new C.evg(this,d),null)},
bL_(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.ewl(),x.dv).c0(0,new C.ewm()),v=B.C(w,w.$ti.k("L.E"))
return new B.D(G.ajo,this.aNC(v,e,new C.ewn(),f),null)},
aNC(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.em)
t=e.j(g?0.14:0.1)
s=new B.aQ(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.br,n,n,n,10),A.qG],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cd(A.aM,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bK(r,r,r,r),new B.bj(s,s,s,s),n,n,A.n),n,n,n,n,A.mI,n,n,n))
A.d.v(l,u)}return B.eN(A.a5,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.e2)},
bBW(d,e,f){return this.aNC(d,e,null,f)},
bL1(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dnq
else if(v==="hati_kuhoweya")w=D.d8f
else{if(v==="hati_kiapo_uongozi")v=D.cVb
else v=C.kF(v)?D.d1O:A.QY
w=v}v=this.fy
v===$&&B.c()
return B.ca(v,new C.ewq(this,f,d,e,w),null)},
c4q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k5()
if(i==null||i.b!==D.cT)return A.bJ
w=k.X3(i)
v=k.aua(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.BI,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b0,B.bN(!1,D.fHc,j,j,!0,j,j,new C.exR(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.J(A.bk.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hg,B.c2(new B.D(A.eR,B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),w,A.bk,j,j,j,j,2,D.bZx,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wQ,j,j,j,j,j,j,!1,"\u2022",j,new C.exS(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a3,A.A6,A.ao,j,A.Uk,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bg),j),1)
q=B.m(16)
p=d?A.bn:A.c
o=B.J(d?A.aJ:A.aL,A.r,1)
n=B.E(B.ce(B.B(B.a([k.ug(G.O0,j,new C.exT(k,i),d),k.ug(G.a0N,j,new C.exU(k,i),d),k.ug(K.anA,j,new C.exV(k,i),d),k.ug(K.a1y,j,new C.exW(k,i),d),k.ug(k.bBU(i.as),j,new C.exX(k,i),d),k.ug(D.aoI,j,new C.exY(k,i),d),k.ug(D.aoH,j,new C.exZ(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aM),1)
m=A.k.N(i.w)
return B.bT(0,B.aG(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(I.ajx,B.p(j,B.B(B.a([n,A.ac,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lB,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c4p(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k5()
if(m==null)return A.bJ
w=m.b
v=w===D.cT
u=B.m(18)
t=x.O
t=d?B.a([A.bn,A.M],t):B.a([A.c,A.aP],t)
s=B.J(d?A.aJ:A.aL,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b5c(A.iW,"Edit",new C.exC(o,m),d,!0))
if(w===D.lK)p.push(o.b5c(A.H4,"Shape & ring",new C.exD(o),d,!0))
p.push(o.ug(A.Cr,"Format",new C.exE(o),d))
if(v)A.d.v(p,B.a([o.ug(G.O0,n,new C.exF(o,m),d),o.ug(D.aoI,n,new C.exG(o,m),d),o.ug(D.aoH,n,new C.exH(o,m),d)],q))
p.push(A.b0)
p.push(o.ctP(A.e9,n,o.gaRE(),d,!0))
p.push(o.ug(A.hu,"Done",new C.exI(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a5,A.a8,A.x,t,n,n),A.n),n,n,n,A.BH,A.lB,n,n,n)},
bBU(d){switch(d.a){case 2:return D.a1v
case 1:case 5:return D.a1x
default:return D.a1w}},
c5k(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dV
default:return A.bi}},
aAt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.Hq:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.em,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qb,B.aG(!1,A.a2,!0,n,B.aO(!1,v,!1,B.eJ(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ai),n)},
ug(d,e,f,g){return this.aAt(d,e,f,g,!1,!1)},
b5c(d,e,f,g,h){return this.aAt(d,e,f,g,h,!1)},
ctP(d,e,f,g,h){return this.aAt(d,e,f,g,!1,h)},
bOK(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bn,A.M],m):B.a([A.c,A.n7],m)
w=B.J(e?A.aJ:A.nU,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a35(A.eJ,"Back",p.gbI7(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.ds(1,A.cn,t,o),A.ac,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bY:A.al,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tQ,o,A.e,A.i,0,A.cY,o),1)],q)
if(!p.kp()){u=p.a35(A.rz,"Undo",p.ax.length===0?o:p.gcDx(),e)
A.d.v(r,B.a([u,p.a35(D.bMU,"Redo",p.ay.length===0?o:p.gcp_(),e)],q))}r.push(p.a35(A.yD,"PDF",new C.ewK(p),e))
r.push(p.a35(A.hM,"Download as video",new C.ewL(p),e))
if(!p.kp())r.push(B.C9(o,o,B.X(A.oh,e?A.ad:A.br,o,o,o,o),new C.ewM(p),A.I,new C.ewN(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aG(!1,A.a2,!0,o,B.aO(!1,B.m(14),!0,B.eJ(D.eld,o,new B.o(o,o,o,B.m(14),o,L.Hq,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaBh(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ai))
return B.p(o,B.B(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),o,o,o,D.bxA,D.bCU,o,o,o)},
cCZ(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.J(d?A.cp:A.aL,A.r,1)
return B.p(v,B.ce(B.B(B.a([w.iW(A.uo,"Print",new C.eB1(w),d),w.iW(A.yD,"Download PDF",new C.eB2(w),d),w.iW(A.qn,"Present",w.gaBh(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.BG,G.al9,v,v,v)},
a35(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dm
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cd)},
c4u(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.J(d?A.cp:A.aL,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.ey1(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.akP,new B.fe(new C.ey2(r),q),q))
A.d.v(t,w?B.a([new B.D(R.w_,r.ahF(A.l7,"Ending celebration",r.gcf9(),d),q),new B.D(R.w_,r.ahF(A.H4,"Logo ring & frame",r.gcfR(),d),q)],x.p):A.fu)
A.d.v(t,w?B.a([new B.D(R.w_,r.ahF(A.ns,"Look and feel",r.gcfS(),d),q),new B.D(R.w_,r.ahF(A.pd,"Edit this slide's text",r.gcgo(),d),q)],x.p):A.fu)
t.push(new B.D(R.w_,B.hc(B.aB(q,B.p(q,D.f_X,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lv.j(0.4),A.I,10)],x.V),D.aqG,A.n),q,34,q,q,A.fj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ey3(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ce(B.B(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bDm,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ce(r.crp(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.ak,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.BG,q,q,q,q)},
crp(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dgF[v]
u.a=null
s=u.a=t.b
w.push(e.lO(e.ctc(s),t.a,new C.ezq(u,e),a3,D.aQ_.t(0,s)))}w.push(e.iW(A.l9,"Notes Slide",new C.ezr(e),a3))
w.push(e.lO(A.H3,"Quiz",new C.ezs(e),a3,!0))
w.push(e.lO(M.GB,"Worksheet",new C.ezD(e),a3,!0))
w.push(e.lO(V.H9,"Flashcard",new C.ezO(e),a3,!0))
w.push(e.lO(A.OJ,"Lab Report",new C.ezZ(e),a3,!0))
w.push(e.lO(A.ug,"Rubric",new C.eA5(e),a3,!0))
w.push(e.lO(A.p8,"Minutes",new C.eA6(e),a3,!0))
w.push(e.lO(A.og,"Syllabus",new C.eA7(e),a3,!0))
w.push(e.lO(A.a24,"Timeline",new C.eA8(e),a3,!0))
return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.di1[v]
w.push(e.lO(r.b,r.c,new C.eA9(e,r),a3,!D.aQ5.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.B(B.a([e.iW(A.yW,a0,e.gaNi(),a3),e.iW(A.ul,"Picture",new C.ezt(e),a3),e.iW(A.yQ,"Bio link",new C.ezu(e),a3),e.iW(A.a23,"Table",new C.ezv(e),a3),e.iW(A.H7,"Sticky",new C.ezw(e),a3),e.iW(A.uk,"Divider",new C.ezx(e),a3),e.iW(A.Cs,"Header",new C.ezy(e),a3),e.lO(A4.wa,"Rectangle",new C.ezz(e),a3,!0),e.lO(A.rr,"Circle",new C.ezA(e),a3,!0),e.lO(A.a1m,"Triangle",new C.ezB(e),a3,!0),e.lO(A.jS,"Arrow",new C.ezC(e),a3,!0),e.lO(D.bLm,"Parallelogram",new C.ezE(e),a3,!0),e.lO(D.bNN,"Hexagon",new C.ezF(e),a3,!0),e.lO(A.uk,"Line",new C.ezG(e),a3,!0),e.lO(A.yD,"PDF",new C.ezH(e),a3,!0),e.lO(O.a2d,"Signature",new C.ezI(e),a3,!0),e.iW(A3.Ce,"Quote",new C.ezJ(e),a3),e.iW(D.a0V,a1,new C.ezK(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aJ(w,A.bX,x.w).w
u=x.p
t=B.B(B.a([e.aO8("Wide 16:9",D.Dl,a3),e.aO8("Short 9:16",D.ov,a3),new B.D(A.fB,B.mQ(D.bQ_,d,D.fDs,d,new C.ezL(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.B(B.a([e.bIm("This slide",!e.Q,a3,new C.ezM(e)),A.bo,e.aQk("All slides",e.Q,a3,new C.ezN(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bIn()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bY:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a49,new C.ezP(e),n),n.k("ak.E"))
n=B.ce(B.B(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dj3[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dm:A.aZ,1.5,A.r,-1)
l.push(new B.D(A.fB,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bK(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ezQ(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ce(B.B(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bF5()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.ezR(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.ce(B.B(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM),A.am,e.c1e(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.k5()
w=e.c
w.toString
w=B.aJ(w,A.bX,x.w).w
u=new C.ezp(e)
t=new C.eAa(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Rm,f.dy,new C.ezS(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdw()
q=q==null?d:q.r
p.push(t.$4(D.Rm,q,new C.ezT(e,u),A.bk))
return new B.a7(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iW(A.l9,w,new C.ezU(e),a3),e.iW(A.uo,"Print deck",new C.ezV(e),a3),e.lO(D.amI,"Export JSON",new C.ezW(e),a3,!0),e.iW(A.fP,"Duplicate Slide",e.gaSx(),a3),e.iW(A.e9,a2,e.gaRF(),a3),e.cxk(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.k5()
w=x.p
u=B.a([e.iW(D.a0V,a1,new C.ezX(e),a3),e.iW(A.fP,"Duplicate",e.gaSx(),a3),e.iW(A.e9,a2,e.gaRF(),a3),e.iW(A.qn,"Present",e.gaBh(),a3),e.iW(A.Cp,a0,e.gaNi(),a3),e.iW(A.Ci,"Fit Text",new C.ezY(e),a3),e.iW(A.yD,"Download PDF",new C.eA_(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iW(A.ki,"Transfer",new C.eA0(e),a3))
if(f!=null){w=B.a([A.ac,e.iW(G.O0,"Bold",new C.eA1(e,f),a3),e.iW(G.a0N,"Italic",new C.eA2(e,f),a3),e.iW(G.amj,"Underline",new C.eA3(e,f),a3),e.iW(Af.O1,"Bullets",new C.eA4(e,f),a3),e.bRg(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bOP(a3))
w.push(e.iW(D.bK2,"Delete",e.gaRE(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.i,0,d,d)}},
aO8(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.ov
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a9W,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bPb],v))
return new B.D(A.fB,B.j0(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.evP(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cxk(d){var w,v,u,t,s,r=this,q=null,p=r.gdw()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.J(d?A.aZ:A.cr,A.r,1)
u=B.m(8)
t=B.X(A.Gz,d?A.aB:A.al,q,q,q,14)
s=B.aH(q,q,q,q,D.apH,q,q,q,new C.eAx(r,p),q,q,q,q,q,A.cd)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bl,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.apy,q,q,q,new C.eAy(r,p),q,q,q,q,q,A.cd)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Gf,A.mH,q,q,q)},
ctc(d){switch(d.a){case 6:return V.H9
case 7:return A.H3
case 8:return M.GB
case 4:return A.Cs
default:return A.l9}},
bRg(d,e){var w=null,v=B.J(e?A.aZ:A.cr,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.apH,w,w,w,new C.ewX(this,d),w,w,w,w,w,A.cd),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bl,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.apy,w,w,w,new C.ewY(this,d),w,w,w,w,w,A.cd)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vZ,A.mH,w,w,w)},
c1e(d){var w=null
return B.C9(B.DD(B.X(A6.a0Y,d?A.ad:A.br,w,w,w,16),w,w,D.fJ5,w,w,w),w,w,new C.exu(),A.I,this.gbCB(),A.cm,"Slide layout",x.fO)},
lO(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.J(g?A.ds:A.aL,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dt:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.OS,A.f,w,w,D.EC,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aG(!1,A.a2,!0,w,B.aO(!1,v,!0,B.eJ(new B.D(A.hg,B.x(B.a([new B.an(A.a_,w,A.ab,A.f,q,w),A.cL,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w)},
iW(d,e,f,g){return this.lO(d,e,f,g,!1)},
b6y(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aM
v=B.hO(t,new C.eAJ(u,s,e,d),s.r.length,A.cm,t,w,new C.eAK(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.kp())w.push(new B.D(A.cm,B.I5(E.apU,new C.eAL(u),B.nI(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aQJ,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bGn(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.ov?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bM(A.b4,v,v,new B.fD(w,B.aB(v,B.cz(new C.ewd(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ewe(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bGp(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kF(a9.w))===!0,b1=b0&&C.fI4(b3),b2=b0&&b3.b===D.lg&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kp())v=!b0||a7.c3y(b3)
else v=!1
if(!a7.kp())u=!b0||a7.c3x(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h6C(b3))o=a8
else if(p&&!a7.kp())o=a7.gcbG()
else o=a7.kp()?a8:new C.ew1(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c8:A.jA
i=w&&C.h6C(b3)&&a7.A0()?new C.ew2(a7,b3):a8
h=v&&b3.b===D.cT?new C.ew3(a7,b3):a8
g=u?new C.ew4(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c1:r
else e=A.K
e=B.J(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c1.j(0.08)
else a0=b3.b===D.lg?A.K:a8
if(b1){a1=a7.kp()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c1.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aJ(a1,A.bX,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A0()
a3=b3.b===D.cT
a4=a3?a7.X3(b3):a8
a5=a3?a7.aua(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aJ(a6,A.bX,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ew5(a7,b3):a8
a3=v&&a3?new C.ew6(a7,b3):a8
a6=C.b21(q,a4,a1,b3,a5,a2,a3,new C.ew7(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bS0,A.f,a8,a8,new B.o(r,a8,B.J(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ew8(a7,b3,b4,b5),a8,a8,new C.ew9(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kp()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bSH,A.f,a8,a8,new B.o(A.dv,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbZO(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kp()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bUi,A.f,a8,a8,new B.o(A.c1,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ewa(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cT)if(a7.w!==a9){e=a7.c
e.toString
e=B.aJ(e,A.bX,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aB(a8,B.p(a8,D.fSc,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l4,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ewb(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eL(A.A,f,new B.an(A.a_,a8,A.ab,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.c0("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aQk(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.J(e?A.bk:A.bz,A.r,1)
if(e)t=A.bk
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.OS,A.f,r,r,D.EC,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bIm(d,e,f,g){return this.aQk(d,e,f,g,!1)},
cbq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b3,A.aO),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xk:l
if(f)s=new B.bK(new B.ay(e?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rU,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b0,m.b1D(e,new C.ey5(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bY:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ey6(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a3,l,A.ao,l,l,l,l),1)],q),A.ak,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aTP(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k5()
if(a2==null)return A.bJ
w=new C.exa(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b0,a0.b1D(a3,a0.gbMT())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fDY,B.E(B.kO(a1,a1,a1,u,0.05,new C.exb(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.B(B.a([D.fQy,B.E(B.kO(a1,a1,a1,t,0.05,new C.exc(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cT
if(m)o.push(B.B(B.a([D.fxz,B.E(B.kO(a1,a1,a1,96,10,new C.exd(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lK
if(l||n===D.lg||n===D.SJ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fJS,B.E(B.kO(a1,a1,a1,s,0,new C.exe(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.B(B.a([D.fRU,B.E(B.kO(a1,a1,a1,r,0,new C.exf(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CL[j]
i.a=null
g=h.a
i.a=g
k.push(B.j0(a1,a1,a1,new B.y(h.b,a1,A.px,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.exg(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bC,k,A.bq,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CF[j]
f.a=null
g=e.a
f.a=g
h.push(B.j0(a1,a1,a1,new B.y(e.b,a1,A.px,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.exh(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bW(A.bC,h,A.bq,a1,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.exi(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bC,l,A.bq,a1,6,6),A.ae,B.hiQ(new C.exj(w,a2),D.cw4,B.eC([a2.as],k),!0,a1,k)],p))}if(n===D.f8){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.exk(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bC,m,A.bq,a1,0,6)],p))}o.push(A.ae)
o.push(B.dl(D.bU4,D.fLW,new C.exl(a0,a5),B.bo(A.by,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cr(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.xk:a1
if(a4)o=new B.bK(new B.ay(a3?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rU,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FZ,a1,a1,a1)},
bRx(d){return this.aTP(d,!1,!1,null)},
caA(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.ca(p,new C.exo(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fn1,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bD,A.cL,r.bBW(D.d_7,d,B.P(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ac,B.dP(B.hc(B.aG(!1,A.a2,!0,q,B.aO(!1,q,!0,B.eJ(D.f5Q,q,new B.o(q,q,B.J(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c1.j(0.4),A.ep,8)],p),D.aqL,A.a6),q,q,q),A.cM,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q,"Documents (Hati)",q,q),A.I)],u))
t=B.B(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.bbw,D.bbZ],v):B.a([A.c,A.kB],v)
u=B.J(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a9(A.ay,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aN1(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.ca(w,new C.euY(this,g,d,e,f),null)},
ah1(d,e){return this.cne(d,e)},
cne(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ah1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b3,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.ci(null,null,!0,null,new C.ez2(d,q),p,null,!0,!0,x.N),$async$ah1)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah1,v)},
Qh(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.afu.prototype={}
C.azC.prototype={
T(){return new C.bdH(null,null)}}
C.bdH.prototype={
gczD(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a2()
w=B.bn(u,A.q8,u,1,u,v)
w.fm(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bn(u,D.bw5,u,1,u,v)
w.cp(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bvq()},
Jg(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.av(0,new B.hW(w,v,A.cu).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bBI,B.ca(new B.h5(B.a([u,w],x.dS)),new C.d6j(this),v),v),v,v,v)}}
C.bdV.prototype={
B(d){var w=null,v=B.m(22),u=B.J(A.aJ,A.r,1),t=x.p
return B.at(new B.D(D.bBZ,B.aG(!1,A.a2,!0,w,B.p(w,B.bx(B.m(22),B.x(B.a([new B.D(D.bB9,B.x(B.a([B.p(w,D.bSN,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.fO7,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fog,A.L,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dS,D.bv8,B.B(B.a([B.E(B.bN(!1,D.fC9,w,w,!0,w,w,new C.d6F(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.nn,w,A.oz,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bn,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fHx,w,w,!0,w,w,new C.d6G(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.nn,w,A.oz,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.ap),A.f,w,A9.WD,new B.o(A.av,w,u,v,D.d_v,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.K7.prototype={
T(){return new C.bdG()}}
C.bdG.prototype={
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
return B.dP(B.d9(B.aB(o,B.vC(B.dd(o,B.B(B.a([r,A.at,new B.ds(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.eO:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.Q,0,o,o),o,o,A.b6,new B.o(n,o,u,v,t,o,A.n),A.eN,o,o,o,A.no,o,o,1/0),A.cu,A.jw,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d6e(p,d),new C.d6f(p),new C.d6g(p),new C.d6h(p),o,o,o,!1,A.a4),k),new B.t(0,(1-k)*16))}}
C.PY.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.J(A.c.j(0.5),A.r,1.2),p=x.p
return B.aG(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ay,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.n_,v,v,v),A.bD,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a_V.prototype={
T(){return new C.aF7(D.dh,null,null)}}
C.aF7.prototype={
gZk(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bvF,null,1,null,v)
v.w!==$&&B.bG()
v.w=w
u=w}return u},
b70(d){if(!this.a.c.ay)return
this.x=d
this.gZk().iN(0,0)},
Z(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.awo(D.fch)
C.ia2()
v.RH()},
q(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gZk().q()
v=w.z
if(v!=null)v.a4(0)
C.awo(D.fci)
C.ia5()
w.bxp()},
cCo(){B.jJ()
this.m(new C.eBI())
var w=this.c.K(x.q).f
w.a5g()
if($.blp)w.U(D.f98)},
RH(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cK(B.dE(0,0,0,0,0,A.o.E(C.hh0(u,w),1,120)),new C.eBy(v))},
cC3(){var w,v=this
v.m(new C.eBH(v))
if(v.r)v.RH()
else{w=v.f
if(w!=null)w.a4(0)}},
gaVL(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cw4(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.eBz(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cK(A.lz,new C.eBA(w))},
aya(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.eBu(u))
u.RH()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaVL()){u.cw4()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eBv(u,A.o.F(w+1,s)))
u.b70(w)
u.RH()}},
clS(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.eBw(v))
v.RH()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eBx(v,w,t))
v.b70(w)
v.RH()}},
cxA(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.mY(d,new B.c0(u,x.ac))}w=v.cxB(u)
u=v.d
u===$&&B.c()
return B.oU(new B.mY(d,new B.c0(u,x.ac)),w,new C.eBF(),A.b6,A.b6,new C.eBG(v))},
cxB(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bw1
case 16:return A.iU
case 18:return A.mC
default:return A.mD}},
cxz(d,e,f){var w,v,u,t=null,s=B.cJ(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jv(e,new B.bf(s,new B.bp(A.uW,A.I,w),w.k("bf<bO.T>")),t,!0)
case 3:w=x.K
return B.jv(e,new B.bf(s,new B.bp(A.SX,A.I,w),w.k("bf<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jv(e,new B.bf(s,new B.bp(A.i6,A.I,w),w.k("bf<bO.T>")),t,!0)
case 5:w=x.K
return B.jv(e,new B.bf(s,new B.bp(A.rT,A.I,w),w.k("bf<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.ir(A.A,new B.d2(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bO.T>")))
case 7:w=x.b
return B.ir(A.A,new B.d2(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bO.T>")))
case 8:return B.ca(s,new C.eBB(s),e)
case 9:return B.ca(s,new C.eBC(s),e)
case 10:return B.ca(s,new C.eBD(s),e)
case 11:return B.ca(s,new C.eBE(s),e)
case 12:w=x.b
return new B.d2(s,!1,B.ir(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jF(B.jv(e,new B.bf(s,new B.bp(A.uW,A.I,v),v.k("bf<bO.T>")),t,!0),A.t,new C.bsx(w,t))
case 15:w=x.K
return B.jv(e,new B.bf(s,new B.bp(A.SX,A.I,w),w.k("bf<bO.T>")),t,!0)
case 19:w=B.dr()
w.mO((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jV(v,u,v,1)
return B.fv(A.A,B.d9(e,s.gp(0)),t,w,!0)
case 20:return B.eL(A.A,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jF(new C.aoV(B.ca(n.gZk(),new C.eBJ(n,v,w),m),m),A.t,m)}else{t=B.rK(new C.J4(w,!0,!1,m))
l=B.b1(w.e)
u=n.cxA(B.ec(B.jF(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hh0(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oI,m,m,m),A.bo,D.bV9],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.h5,m,m,m)
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
l.push(B.bT(0,new C.NN(new C.EP(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.ov?0.5625:1.7777777777777777
l.push(B.at(new B.fD(r,B.jF(B.uF(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.blp){r=B.I5(A.lc,new C.eBK(d),B.nI(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ac,B.I5(B.X(n.r?Al.yP:A.i1,m,m,m,m,m),n.gcC2(),B.nI(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fS,m,m,m),A.f,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.h5,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aB(A.c8,B.p(A.lo,$.blp?A.bJ:s,A.f,m,m,m,m,64,m,m,D.bwM,m,m,150),A.y,!1,m,n.gcCn(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aB(m,new B.an(A.a_,m,A.b1,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eBL(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.Kd.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.akB,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b46,w,w,w,w,w,w,w,w)}}
C.bsx.prototype={
jk(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jZ(d){return d.b!==this.b}}
C.biD.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b0T
break A}w=B.m(6)
break A}v=s.e
u=B.J(v?A.aD:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dd(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wr,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b6,new B.o(s.f,r,u,w,r,r,A.n),A.hq,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.biC.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dws.h(0,p)
if(o==null)o=D.dib
p=p==="none"
w=p?q:new B.a9(A.a5,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.J(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?K.aoT:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eB,q,q,52)
return B.aB(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aKZ.prototype={
aW(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aMS.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bye.prototype={}
C.aMT.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.b24.prototype={}
C.Wl.prototype={
T(){return new C.aF5()},
bhG(d){return this.e.$1(d)}}
C.aF5.prototype={
gb5i(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gab1(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb5i()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOZ(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb5i()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb6x(){return A.d.cI(this.gab1(),0,new C.eBe())},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Rj()},
Rj(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Rj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b2G(s.c,s.f),$async$Rj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eBa(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Rj,v)},
Ji(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ji=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gab1()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.M)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fLj(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pf(o,q.c,q.f),$async$Ji)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.dX(new C.eBd(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cc(q),$async$Ji)
case 4:q=t.a
w=5
return B.b(B.pe(q.c,q.f),$async$Ji)
case 5:w=6
return B.b(t.Rj(),$async$Ji)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ji,v)},
RE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e8H,!0,"NgmySlidesTransferScan",x.N),$async$RE)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eBb(t))
w=4
return B.b(C.ahJ(s),$async$RE)
case 4:r=e
t.m(new C.eBc(t))
o=J.a5(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.f7Y)
w=1
break}w=5
return B.b(t.a.bhG(r),$async$RE)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RE,v)},
Jh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gab1()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pf(s,r.c,r.f),$async$Jh)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fLy(null,A.d.gI(n),s,t.a.f)}else q=C.fLy(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GK(q,"ngmy_slides_"+p,!1),$async$Jh)
case 4:o=e
s=t.a
w=5
return B.b(B.pe(s.c,s.f),$async$Jh)
case 5:w=6
return B.b(t.Rj(),$async$Jh)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
a3g(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eBf(t))
w=3
return B.b(C.bDv(),$async$a3g)
case 3:s=e
t.m(new C.eBg(t))
if(s==null||J.cs(s)){w=1
break}w=4
return B.b(t.a.bhG(s),$async$a3g)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a5(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3g,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.de:A.bN,k=o.gab1().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c1(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cz,m?A.ad:A.al,n,n,n,n),n,n,n,new C.eBj(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.A4],h),A.m,n,A.e,A.i,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.f_,24)],x.V)
u=B.ao(n,B.X(A.qi,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bVH,A.f,n,n,new B.o(t,n,B.J(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bGo],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hc(B.aB(A.c8,D.f5S,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcgA(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.ab,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a2K,A.n),n,n,n,n,E.a_s,n,n,1/0),A.dS,o.ayb(m,"What to transfer"),A.ae,B.B(B.a([B.E(o.aY6(A.qn,m,new C.eBk(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aY6(D.bLf,m,new C.eBl(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.ayb(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.J(m?A.bz:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eBm(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mX)
w.push(o.ayb(m,"Transfer options"))
w.push(A.ae)
w.push(B.B(B.a([B.E(o.aqR(A.aQ,k,!0,A.jC,m,o.r,o.gcaE(),"Scan on another device","Show QR"),1),A.at,B.E(o.aN2(A.kb,!0,A.jf,m,o.gcsM(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bAq(A.aW,k,A.hM,m,o.r,o.gcaB(),"Download .json","Backup file"),1),A.at,B.E(o.aN2(A.aC,!0,Av.yX,m,o.gcEN(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.J(A.bk.j(0.28),A.r,1)
s=B.X(A.lD,A.bk.j(0.9),n,n,n,18)
r=o.gaOZ()
q=o.gb6x()
p=o.gb6x()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bl(!0,B.x(B.a([new B.D(Ah.NB,i,n),B.E(B.cr(w,n,D.bAh,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.WV,A.f,A.dE,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.a_,n,A.ab,A.t,j,n),n,!1,!1,n,n)},
agc(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.igv(s,t.d,t.e),$async$agc)
case 2:return B.h(null,v)}})
return B.i($async$agc,v)},
ayb(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ac,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aY6(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cx,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a2,!0,s,B.aO(!1,r,!0,B.eJ(new B.D(A.bB,B.x(B.a([t,A.W,u,A.bD,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ai)},
bL0(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,p?2:1)
v=B.p(q,D.bVT,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a5,A.a8,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ed:A.rr
if(p)r=A.bk
else r=e?A.aZ:A.dm
return new B.D(A.ct,B.aG(!1,A.a2,!0,q,B.aO(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eB9(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q)},
aqR(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aL
w=B.J(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rq,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.aps,A.f,s,s,D.b3T,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d9(B.aG(!1,A.a2,!0,s,B.aO(!1,p,!0,B.eJ(new B.D(E.a_5,B.x(B.a([new B.an(A.a_,s,A.ab,A.f,u,s),A.ae,v,A.bD,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ai),r)},
aN2(d,e,f,g,h,i,j){return this.aqR(d,e,!1,f,g,!1,h,i,j)},
bAq(d,e,f,g,h,i,j,k){return this.aqR(d,e,!1,f,g,h,i,j,k)}}
C.Wm.prototype={
T(){return new C.blo()}}
C.blo.prototype={
Z(){this.a2()
this.af_()},
af_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$af_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fLy(null,A.d.gI(m),k,r.a.f):C.fLy(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kF(A.d.gI(n).w))C.fLj(A.d.gI(r.a.d),D.dfZ)
n=r.a
m=n.c
n=C.idq(n.d)
w=7
return B.b(C.fLx(p,C.idv(r.a.d),n,m,q),$async$af_)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eBn(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eBo(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.J,h=i?A.de:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eBp())
v=B.aH(j,j,j,j,B.X(A.eJ,i?A.ad:A.al,j,j,j,18),j,j,j,new C.eBq(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.A4],u),A.m,j,A.e,A.i,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dd,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a2K,A.n),j,j,j,j,E.a_s,j,j,1/0)
q=B.m(24)
s=B.J(A.aQ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Us,A.L,j,j))
else if(k.d==null)r.push(D.ekN)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fCC,A.am,B.aB(j,B.p(j,B.B(B.a([D.bXr,A.at,B.d(m,j,j,j,j,j,j,D.foH,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c1l,A.n),j,j,j,j,A0.akm,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eBr(k,d),j,j,j,j,j,j,!1,A.a4),A.O,D.fH3,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.J(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pX(j,j,!1,l,j,!0,!0,j,!1,D.brh),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hm,A.L,j,j))
return B.c7(j,h,B.bl(!0,B.x(B.a([new B.D(Ah.NB,v,j),B.E(B.ce(B.x(B.a([t,A.aN,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c3i,A.n),j,j,j,j,A.u6,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.akG,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aF2.prototype={
T(){return new C.aF3(new B.as(A.as,$.aw()),B.k2(!0,null,!0,!0,null,null,!1))}}
C.aF3.prototype={
Z(){var w=this
w.a2()
w.e.aS(0,new C.euS(w))
$.aV.x1$.push(new C.euT(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a1()},
b_J(){var w,v=this.c
v.toString
w=C.yR(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aJ(a2,A.eM,x.w).w,i=B.m(28),h=B.J(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.uT,36),D.ad5],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bSR,A.f,k,k,new B.o(d,k,B.J(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fzE,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b4j,k,k,k,k,A.yi,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gee()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aQ(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.I,12)],g):k
t.push(new B.bA(1,A.bc,B.dd(A.A,new B.y(p,k,D.fi3,k,k,k,k,k,k,k,k,k),k,k,A.b6,new B.o(s,k,new B.bK(m,m,m,m),new B.bj(o,o,o,o),n,k,A.n),A.hq,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.JH)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.i,0,k,k),B.bT(0,B.d9(B.aM(k,A.Y,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c_f,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uw(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BF(5,k),new C.bvN()],x.aS),k,k,A.aRV,k,5,k,1,k,k,!1,"\u2022",k,new C.euO(l),k,new C.euP(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a3,k,A.mj,k,k,k,k),0),0,0,0)],a1)
d=C.yR(w.a.a.toUpperCase())==null?k:l.gcaF()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a2,!0,k,new B.cU(Ae.Lb,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bAN,B.x(B.a([new B.an(A.a_,k,A.ab,A.t,g,k),A.W,D.fxZ,A.bv,new B.a7(1/0,50,B.bH(D.fP1,k,d,B.bo(A.bk,A.bn,A.al,k,A.c,k,k,k,new B.b7(B.m(16),A.a0),k,k,k)),k),A.am,B.bN(!1,A.nJ,k,k,!0,k,k,new C.euQ(a2),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.ap),A.f,k,k,new B.o(A.de,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bvN.prototype={
oI(d,e){var w=e.a.toUpperCase()
return e.cLd(B.hk(A.bx,w.length),w)}}
C.arO.prototype={
T(){return new C.aF6(B.zv(A.MR,A.nP,A.uA))}}
C.aF6.prototype={
q(){this.d.q()
this.a1()},
b_I(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aaX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fUq(s),$async$aaX)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b_I("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aaX,v)},
caD(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=C.idt(w[u])
if(t!=null){this.b_I(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.wo,s,s,s,t.gbPl(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aH(s,s,s,s,B.X(q?A.uh:Am.Ot,s,s,s,s,s),s,s,s,new C.eBt(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.de,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fQe,s,s,s,1,s,!0)
r=B.zu(t.d,A.bV,t.gcaC())
w=B.m(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.J(A.bk,A.r,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c7(p,A.w,new B.an(A.a_,s,A.b1,A.t,B.a([r,w,B.ao(32,B.p(s,D.fDJ,A.f,s,s,new B.o(v,s,B.J(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jd,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bw0.prototype={
B(d){var w=null,v=B.m(24),u=B.J(A.aJ,A.r,1)
return B.aG(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,I.ap7,A.f,w,w,D.b42,w,56,w,w,w,w,w,56),A.aN,D.fPV,A.am,new B.jS(this.c,new C.fbM(),w,w,x.cI),A.aN,new B.jS(this.d,new C.fbN(),w,w,x.cl),A.ae,D.fPT],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ae.Lb,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.a_y,D.bBq,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)}}
C.a85.prototype={
T(){return new C.bl7(A.bF)},
gcZ(){return this.c}}
C.bl7.prototype={
Z(){var w=this
w.a2()
if(w.a.d)return
w.a_y()
w.d=B.dg(A.fA,new C.ejZ(w))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
a_y(){return this.cp6()},
cp6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ejX(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ciC(p.c),$async$a_y)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.ejY(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_y,v)},
bRo(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.aw:A.c1
w=v.j(0.14)
u=B.m(14)
t=B.J(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.Gz,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bRo(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A8.ajs,A.iB,r,r,1/0)}}
C.a9_.prototype={
nm(){var w,v,u,t=this
t.xs()
w=t.cx
v=t.c
w.brY(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q3(B.G(["/S",D.eov,"/URI",new B.rF(B.WU(w.as),A.uX,!0)],x.N,u),u))}}
C.a90.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b3J.prototype={
bzs(d,e,f,g,h,i,j,k,l,m){var w=B.eC([D.emO],x.di)
this.w!==$&&B.aP()
this.w=w},
gcOz(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k1(w,new C.clD(),B.a6(w).k("k1<ct.E,H>")).fb(0,new C.clE())},
aDE(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hh(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tF(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jh(d.a,d.b))
s.n(0,"/Border",B.tF(I.ar8))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcOz()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q3(w,x.Y))}}
C.clF.prototype={}
C.a3f.prototype={}
C.aiA.prototype={}
C.aRZ.prototype={
h1(d){var w,v,u,t,s,r,q=this,p=null
q.lq(d)
q.Mk(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bh3(w)
u=x.N
t=x.Y
s=new C.clF(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bzs(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q3(B.G(["/Type",D.eot],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9_(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.axm.prototype={}
C.aTv.prototype={
h1(d){var w,v,u,t,s=this
s.lq(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ef(u.a,u.b,0,1)
u=d.b
u.ig()
t=s.a
t.toString
u.Lr(t)
u.SV(0)
u.p7(0,v)
w.h1(d)
u.np(0)}}}
var z=a.updateTypes(["aA<~>()","~(lR)","R(i4)","~()","R(eO)","R(ot)","R(lR)","~(i4)","R(eO,eO)","Kd(Y)","R(nT)","R(lm)","aA<R>()","H(H,i4)","a8<n,@>(i4)","ai<zO>()","n(nT)","R(a8m)","n(lR)","n(w8)","R(EY)","H(i4,i4)","n(eO)","v(eO)","cN(eO)","v(hF)","~(hF)","eO(uU,K,K,K,K,H{fx:n,key:n,rotation:K})","eO(n,K,H)","H(ot,ot)","R(zO)","R(n,ai<zO>)","a8<n,@>(ot)","nT()","Z_(Y)","eO(n,K,K,K,K,K{align:q9,anim:hF,bullets:R,color:H?,delay:H,fx:n,key:n,style:I0,weight:nG})","a1j(Y)","eO(n,K,K,K,K{anim:hF,delay:H,fx:n,key:n})","aA<~>(ot)","R(mC)","YY(Y)","a0P(Y)","a0O(Y)","PO(Y)","a_a(Y)","eO(uU,K,K,K,K,H,n,n{anim:hF,delay:H,rotation:K,stroke:H,strokeWidth:K})","eO(n,K,K,K,K,K,n,n,H)","eO(K,K,n,H{size:K})","v(rt,K,K)","lm()","ot(a8<@,@>)","~(uK)","EY()","fh(eO)","v(j2)","ZI(Y)","~(EP)","a_2(Y)","H(eO,eO)","eO(eO)","a8<n,@>(eO)","eO(a8<@,@>)","lR(lR)","a8<n,@>(lR)","lR(a8<@,@>)","R(jO)","jO()","n(i4)","~(ai<ot>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","ad0(Y,H)","~(R(eO,eO))","adF(Y)","afk(Y,H)","u(lR,R)","W9(Y)","adI(Y)","Wa(Y)","~(mG)","i4(i4)","K(eO)","a0i(Y)","a_V(Y)","i4()","ai<Fj>()","aA<~>(ai<i4>)","v(bz<H,i4>)","D(jO)","D(EY)","aA<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","R(mf)","ai<jt<mG>>(Y)","jt<mG>(mG)","i4(a8<@,@>)","Wl(Y)","eO(n,K,K,K,K,K,H{align:q9,style:I0,weight:nG})","Wm(Y)","v(i4)","~(m9)","J4(Y,lR,v?)","H(a90)","aA<ai<a8<n,@>>?>()","n(n)","aA<zN>({paper:n?,photo:dK?,request:n,template!lp})","aA<a8e>({doc!zN,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lp})","adC(Y)"])
C.cKc.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:70}
C.cKd.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cKe.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakJ(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mt(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:74}
C.cKf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bRI.prototype={
$1(d){return J.eG(A.dH.gaR(d),d.byteOffset,d.byteLength)},
$S:1676}
C.fy_.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1677}
C.c1C.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c1D.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aK(v,J.k(w==null?"":w))},
$S:42}
C.c1F.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fOt.prototype={
$1(d){return new C.a1j(this.a,this.b,C.iel(),null)},
$S:z+36}
C.fae.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fai.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.faj.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fak.prototype={
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
C.faf.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fag.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fah.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fa9.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hl,w,w,w)
return B.en(B.a([B.bN(!1,E.aU0,w,w,!0,w,w,new C.fa7(d),w,w),B.bN(!1,D.fB9,w,w,!0,w,w,new C.fa8(d),w,w)],x.p),w,w,D.YV,v,w,w,w,w,D.fQx,w)},
$S:18}
C.fa7.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fa8.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.faa.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fab.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fao.prototype={
$0(){var w=this.a
return w.m(new C.fan(w,this.b))},
$S:0}
C.fan.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fad.prototype={
$0(){var w=this.a
return w.m(new C.fac(w,this.b,this.c))},
$S:0}
C.fac.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.fal.prototype={
$0(){return this.a.a1E(this.b)},
$S:0}
C.fam.prototype={
$0(){return this.a.Pr(0,this.b)},
$S:0}
C.far.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fas.prototype={
$0(){var w=this.a
return w.m(new C.faq(w,this.b))},
$S:0}
C.faq.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fap(),B.T(w).k("N<1,n>")))}},
$S:0}
C.fap.prototype={
$1(d){return d.a},
$S:z+67}
C.fhO.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hec(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.ot(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fhP.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fAR.prototype={
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
C.fAP.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fAQ.prototype={
$2(d,e){return e.c.aK(0,d.c)},
$S:z+29}
C.fNY.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fxE.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fOP.prototype={
$1(d){return new C.Z_(this.a,null)},
$S:z+34}
C.cLz.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cLB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cLE.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cLF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cLD())},
$S:12}
C.cLD.prototype={
$0(){},
$S:0}
C.cLG.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2g(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bg(s,new C.cLC(r))
if(p<0)q.c6(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahS(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:291}
C.cLC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cLH.prototype={
$1(d){},
$S:28}
C.cLA.prototype={
$1(d){return new C.YY(this.b,this.a.gcyZ(),null)},
$S:z+40}
C.cLI.prototype={
$1(d){return D.hfo},
$S:z+43}
C.cLv.prototype={
$1(d){var w=null,v=B.m(24),u=B.J(D.Yw,A.r,1),t=x.p
return B.at(B.aG(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.bBc,B.x(B.a([B.p(w,D.bQ0,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aN,D.fA4,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fnB,A.L,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dS,new B.D(A.qc,B.B(B.a([B.E(B.dI(D.fH5,new C.cLt(d),B.di(w,w,w,w,w,w,w,w,w,E.ne,w,w,A.ck,w,new B.b7(B.m(14),A.a0),D.b1j,w,w,w,w)),1),A.at,B.E(B.bH(D.fNf,w,new C.cLu(d),B.bo(A.by,w,w,w,w,w,A.ck,w,new B.b7(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.xn,new B.o(D.aeR,w,u,v,D.d4c,w,A.n),w,w,w,L.a_y,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1678}
C.cLt.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cLu.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cLw.prototype={
$0(){return J.nz(this.a.d,new C.cLs(this.b))},
$S:0}
C.cLs.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cLr.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.J(D.Yw,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bV1,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.aqG,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aTG,t,t,t),A.bD,D.fNa],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.drt[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ayi(u[1],u[2],u[3],new C.cLp(v,d),!1,t))}q.push(A.am)
q.push(D.bvb)
q.push(A.am)
q.push(new C.ayi(A.e9,"Delete book","Remove it from this device",new C.cLq(d),!0,t))
return B.bl(!0,B.p(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.aeR,t,r,s,t,t,A.n),t,t,t,A.u1,E.a_b,t,t,t),!0,!1,A.af,!0,!0)},
$S:25}
C.cLp.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cLq.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cLy.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aJf,12)],x.V)
return B.dP(B.eL(A.A,e,B.p(w,B.bx(B.m(4),new B.a7(62,95.81818181818181,B.eN(A.A,F.aoH(d),A.f,A.dw),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cLx.prototype={
$0(){return this.a.c59()},
$S:0}
C.cLo.prototype={
$0(){return this.a.aZf(0,this.b)},
$S:0}
C.cLn.prototype={
$0(){return this.a.Dp(this.b)},
$S:0}
C.cLm.prototype={
$0(){return this.a.Dp(this.b)},
$S:0}
C.cLJ.prototype={
$2(d,e){var w=this.a
return w.bDZ(J.r(w.d,e))},
$S:43}
C.cKQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.AT()},
$S:0}
C.cKP.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b1h("Page "+(v.length+1),"",""))},
$S:0}
C.cKS.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cL_.prototype={
$0(){},
$S:0}
C.cL0.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cKT.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aM(this.c)},
$S:0}
C.cKR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cKV.prototype={
$0(){return this.a.QQ(this.b)},
$S:0}
C.cKW.prototype={
$0(){return this.a.QQ(this.b)},
$S:0}
C.cKX.prototype={
$0(){var w=this.a
w.m(new C.cKU(this.b))
w.Eg()},
$S:0}
C.cKU.prototype={
$0(){return this.a.c=""},
$S:0}
C.cKZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cKY(w,d))
w.Eg()},
$S:z+51}
C.cKY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cL5.prototype={
$2(d,e){if(d)this.a.AT()},
$S:123}
C.cL1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AT(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.fax)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cL2.prototype={
$0(){return this.a.aYd(this.b,-1)},
$S:0}
C.cL3.prototype={
$0(){return this.a.aYd(this.b,1)},
$S:0}
C.cL4.prototype={
$0(){return this.a.c6v(0,this.b)},
$S:0}
C.fFm.prototype={
$1(d){return C.hog()},
$S:44}
C.fFn.prototype={
$1(d){return null},
$S:28}
C.fm3.prototype={
$1(d){return null},
$S:28}
C.fGl.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:325}
C.fGk.prototype={
$2(d,e){return A.o.aK(e.length,d.length)},
$S:226}
C.fGr.prototype={
$1(d){var w=this.a
return C.h6t(d)===w||C.hsT(d)===w},
$S:z+4}
C.fl6.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:78}
C.ccV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFk.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fFl.prototype={
$1(d){return C.fI4(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fAc.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.yh,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fHH,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hh,D.fBM,new C.fAa(d),B.bo(A.c1,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.W,B.et(A.uv,D.fJ_,new C.fAb(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.xl,w,w,w,w))],x.p),A.ak,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fAa.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fAb.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fAd.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,D.fxR,w,w,!0,w,w,new C.fA8(d),w,w),B.bH(D.fPz,w,new C.fA9(d),w)],x.p),w,w,w,D.fRv,w,w,w,w,D.fxK,w)},
$S:18}
C.fA8.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fA9.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.efF.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.efD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.efE.prototype={
$0(){return this.a.f=!0},
$S:0}
C.efG.prototype={
$0(){return this.a.r=!1},
$S:0}
C.efH.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fGq.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:78}
C.fGm.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a5,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1679}
C.fGo.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.foW,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:139}
C.fGp.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ih,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ih,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b8,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1680}
C.fGn.prototype={
$2$female$size(d,e){var w=null,v=d?D.agR:this.a,u=B.J(A.ih,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ab,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.af5,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1681}
C.fSh.prototype={
$1(d){return new C.adC(this.a,this.b,null)},
$S:z+108}
C.e2e.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.brP:A.Mk,q=B.J(D.jr.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c1.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.apr,A.f,t,t,new B.o(t,t,B.J(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jr.j(0.35),A.ep,10)],x.V),D.c3V,A.n),t,t,t,t,A.y8,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(H.a_o,B.x(B.a([p,A.aA,B.B(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jr,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fo5,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.iy(!0,t,e,A.y,D.aQZ,new C.e2d(w,this.c),v,D.akh,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mp,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:117}
C.e2d.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ad0(w,new C.e2c(this.b,w),null)},
$S:z+72}
C.e2c.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fAg.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fAh.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yh,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fLf,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hh,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fAe(d),B.bo(D.jr,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.W,B.et(A.on,D.V4,new C.fAf(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.xl,w,w,w,w))],x.p),A.ak,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fAe.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fAf.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fAk.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fAl.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yh,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fyR,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hh,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fAi(d),B.bo(D.jr,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.W,B.et(A.on,D.V4,new C.fAj(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.xl,w,w,w,w))],x.p),A.ak,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fAi.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fAj.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fAo.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fAp.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yh,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fFu,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hh,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fAm(d),B.bo(D.jr,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.W,B.et(A.on,D.V4,new C.fAn(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.xl,w,w,w,w))],x.p),A.ak,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fAm.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fAn.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fTK.prototype={
$1(d){return D.hkk},
$S:z+74}
C.ek1.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.biA:A.Mk,s=B.J(A.az.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.az.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bXn,A.f,v,v,new B.o(v,v,B.J(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c1.j(0.35),A.ep,10)],x.V),D.aqL,A.n),v,v,v,v,A.y8,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(H.a_o,B.x(B.a([r,A.aA,B.B(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Mg,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bD,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fly,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.iy(!0,v,e,A.y,D.aQZ,new C.ek0(this.b),19,D.akh,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mp,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.ek0.prototype={
$2(d,e){var w=D.RC[e]
return new C.afk(w,new C.ek_(this.a,w),null)},
$S:z+75}
C.ek_.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fI8.prototype={
$0(){return B.h5q(C.i1F(this.a))},
$S:315}
C.fI7.prototype={
$0(){var w=C.h6M(this.a)
return"data:image/png;base64,"+A.cJ.gct().aM(w)},
$S:22}
C.fjo.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ji(d,e),new B.ji(w,e+v),new B.ji(d+f*14,e),new B.ji(w,e-v)],x.J)
B.a2d(this.a,C.fC(4291404327),v)},
$S:704}
C.fTV.prototype={
$1(d){return new C.W9(this.a,null)},
$S:z+77}
C.emZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.emY())},
$S:30}
C.emY.prototype={
$0(){},
$S:0}
C.en_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.emX(w,d))},
$S:1683}
C.emX.prototype={
$0(){return this.a.x=J.eR(A.dH.gaR(this.b))},
$S:0}
C.en0.prototype={
$1(d){},
$S:28}
C.emB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.emx.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.emI.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.emJ.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eyM)},
$S:0}
C.emK.prototype={
$0(){return this.a.as=!1},
$S:0}
C.emD.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c9)},
$S:0}
C.emE.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.emF.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.emG.prototype={
$0(){return this.a.as=!1},
$S:0}
C.emH.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dU,A.iz)}},
$S:9}
C.emC.prototype={
$0(){var w=this.a,v=w.z,u=C.fIM(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cKl(C.fIM(t))},
$S:0}
C.emz.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.emA.prototype={
$0(){return this.a.as=!1},
$S:0}
C.emQ.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.emR.prototype={
$0(){var w=this.a
return w.m(new C.emP(w))},
$S:0}
C.emP.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.emS.prototype={
$0(){var w=this.a
return w.m(new C.emO(w,this.b))},
$S:0}
C.emO.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.emT.prototype={
$1(d){var w=this.a
return w.m(new C.emN(w))},
$S:8}
C.emN.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.emU.prototype={
$1(d){var w=this.a
return w.m(new C.emM(w))},
$S:8}
C.emM.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.emV.prototype={
$0(){var w=this.a
return w.m(new C.emL(w,this.b))},
$S:0}
C.emL.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.emW.prototype={
$1(d){return this.a.a_k()},
$S:2}
C.emy.prototype={
$0(){return this.a.c9V(this.b)},
$S:0}
C.cgA.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:320}
C.cgy.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cgz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHJ.prototype={
bml(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bRH(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.M)(e),++t){s=e[t]
r.cGI($.r3().jM(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mK(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bml(d,e)},
$S:1684}
C.fG0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fG2.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fG1.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fu(t,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qJ,A.bZ,t,A.dA,A.bW)
v=this.a
w.nY(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:34}
C.fiY.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fiZ(),B.T(w).k("Z<1>")).gL(0)},
$S:246}
C.fiZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiW.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.fiX.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.cgB.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAW()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h6s(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h3g(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcie(),"\n\n")
d=B.fu(a6,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aeP(k,q,1.28),j),A.qJ,A.bZ,a6,A.dA,A.bW)
d.nY(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h6s(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h3g(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aeP(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bA(1,A.bc,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qJ,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAV(s,j))
i.push(new B.a7(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:350}
C.cgC.prototype={
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
n=o.gaAW()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h6s(f,new B.F(!0,e,a5,i,a5,a5,h,A.cP,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h3g(g.length===0?B.a([a6],n):g,l))break}a1=o.aeP(i,h,1.28)
a2=new C.cgD(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.JG,new B.a7(v,a5,a4.f,a5),A.JG,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bDy,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bA(1,A.bc,new B.y(l[2+a3],a5,a1,a5,A.qJ,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAV(r,g))
f.push(new B.a7(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ae,B.E(B.B(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:147}
C.cgD.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qJ,w,w),w)},
$S:1685}
C.fTY.prototype={
$1(d){return new C.Wa(this.a,this.b,null)},
$S:z+79}
C.enw.prototype={
$1(d){return d.lK()},
$S:1686}
C.enx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.env(w,d))},
$S:1687}
C.env.prototype={
$0(){var w=this.b
return this.a.d=w.gfA(w)},
$S:0}
C.enj.prototype={
$0(){return this.a.y=!0},
$S:0}
C.enk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.enq.prototype={
$0(){return B.a4(this.a,!1).eM()},
$S:0}
C.enr.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.J(A.bA,A.r,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bcU(u,v.gay3(),w),A.fF),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eno(v),new C.enp(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.eno.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:240}
C.enp.prototype={
$1(d){var w=this.a
w.m(new C.enl(w,d,this.b,this.c))},
$S:234}
C.enl.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gay3()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ens.prototype={
$1(d){var w=this.a
return w.m(new C.enn(w,this.b))},
$S:8}
C.enn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ent.prototype={
$1(d){var w=this.a
return w.m(new C.enm(w,d))},
$S:6}
C.enm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.enu.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fUd.prototype={
$1(d){return D.hn7},
$S:z+83}
C.eWw.prototype={
$1(d){return this.a.YY()},
$S:9}
C.eVo.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aM(v)},
$S:0}
C.eVM.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eVW.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eV7.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eV8.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eV5.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eV6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eVF.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eVG(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jF(B.rK(p>0.2?F.bV8(q,B.TF(p,p,A.x)):q),A.t,u)],x.p)
w=s.bj
if(w>0.02){v=B.TF(12,12,A.x)
p.push(B.jF(B.d9(B.rK(F.bV8(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b1
if(r!=null&&s.b0>0)p.push(B.ec(u,B.b1(r).j(s.b0),!0))
r=s.be
if(r!=null&&s.bL>0){r=B.b1(r).j(s.bL)
w=s.be
w.toString
p.push(B.c2(u,new B.o(u,u,u,u,u,new B.c1(D.aZZ,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bg))}r=s.aE
if(r>0)p.push(B.c2(u,new B.o(u,u,u,u,u,new B.c1(D.aZK,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bg))
r=s.aL
if(r>0)p.push(B.c2(u,new B.o(u,u,u,u,u,new B.a9(A.b4,A.b7,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aL)],x.O),D.d2P,u),A.n),A.bg))
if(s.aC>0){r=s.k1
p.push(B.ao(u,B.c2(u,new B.o(u,u,u,u,u,new B.a9(A.b4,A.b7,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.del,u),A.n),A.bg),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.ec(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c2(u,new B.o(u,u,u,u,u,new B.c1(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.dbh,u),A.n),A.bg))
s=s.aA
if(s>0)p.push(B.b4(u,u,u,new C.bgu(s,u),A.ax))
return new B.an(A.a_,u,A.b1,A.t,p,u)},
$S:66}
C.eVG.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fQ(r.b,A.A,q,q,A.cg,A.bV,!0,q,!1,q,q),o=r.a,n=o.aXQ(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bi
v=o.aJ
u=v-1
t=o.bG
s=o.c5?-1:1
return B.dP(B.ed(A.A,B.eL(A.A,l,B.fv(A.A,new B.Bg(new B.xn(q,q,n,A.AY),p,q),q,B.vW(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:608}
C.eVS.prototype={
$0(){return this.a.m(new C.eVR(this.b,this.c))},
$S:0}
C.eVR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eVT.prototype={
$1(d){return this.a.m(new C.eVQ(this.b,d))},
$S:6}
C.eVQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eVV.prototype={
$0(){return this.a.m(new C.eVU(this.b,this.c))},
$S:0}
C.eVU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eUY.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eUZ.prototype={
$1(d){var w=this.a
return w.m(w.gcAm())},
$S:2}
C.eV_.prototype={
$1(d){return this.a.m(new C.eUX())},
$S:2}
C.eUX.prototype={
$0(){},
$S:0}
C.eV0.prototype={
$0(){var w=this.a
return w.m(new C.eUW(w,this.b))},
$S:0}
C.eUW.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eV2.prototype={
$2(d,e){return A.at},
$S:36}
C.eV1.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.J(q,A.r,t?2.5:1)
r=B.dd(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b6,new B.o(w,w,q,s,w,new B.a9(A.b4,A.b7,A.x,r,w,w),A.n),A.hq,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.x(B.a([r,A.fQ,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUV(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.eUV.prototype={
$0(){var w=this.a
return w.m(new C.eUS(w,this.b))},
$S:0}
C.eUS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eV3.prototype={
$1(d){var w=this.a
return w.m(new C.eUU(w,d))},
$S:8}
C.eUU.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eV4.prototype={
$1(d){var w=this.a
return w.m(new C.eUT(w,d))},
$S:8}
C.eUT.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eWl.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.eWs.prototype={
$1(d){var w=this.a
return w.m(new C.eWt(w,d))},
$S:29}
C.eWt.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eo(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eWu.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:251}
C.eWm.prototype={
$0(){var w=this.a
return w.m(new C.eWk(w,this.b))},
$S:0}
C.eWk.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eWn.prototype={
$0(){var w=this.a
return w.m(new C.eWj(w,this.b))},
$S:0}
C.eWj.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eWo.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eWi(v,w.b,w.c,w.d))},
$S:0}
C.eWi.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eWp.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBw(v))},
$S:0}
C.eWq.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eWr.prototype={
$0(){var w=this.a
return w.m(new C.eWh(w))},
$S:0}
C.eWh.prototype={
$0(){var w=this.a.db
return A.d.hv(w,0,w.length,0)},
$S:0}
C.eW4.prototype={
$1(d){return d.a===this.a.dy},
$S:208}
C.eW5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ayU[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aQ(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ay7(new B.nh(new B.bj(n,n,n,n),A.ap,new B.kY(new B.o(j,j,j,j,j,new B.a9(A.a5,A.a8,A.x,m,j,j),A.n),A.bg,new C.b_X(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eW3(r,v),2,i))}return B.bW(A.bC,h,A.bq,j,7,7)},
$S:170}
C.eW3.prototype={
$0(){var w=this.b
return w.m(new C.eVZ(this.a,w))},
$S:0}
C.eVZ.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eW6.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:187}
C.eW9.prototype={
$0(){var w=this.a
return w.m(new C.eW2(w))},
$S:0}
C.eW2.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eWa.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eWb.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eWc.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eWd.prototype={
$0(){var w=this.a
return w.m(new C.eW1(w))},
$S:0}
C.eW1.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eWe.prototype={
$0(){var w=this.a
return w.m(new C.eW0(w))},
$S:0}
C.eW0.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eWf.prototype={
$0(){var w=this.b
return w.m(new C.eW_(this.a,w))},
$S:0}
C.eW_.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eWg.prototype={
$1(d){return this.a.fx=d},
$S:187}
C.eW7.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eW8.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eVJ.prototype={
$0(){var w=this.a
return w.m(new C.eVI(w))},
$S:0}
C.eVI.prototype={
$0(){var w=this.a
w.p4=null
w.b3Z()},
$S:0}
C.eVK.prototype={
$0(){var w=this.a
return w.m(new C.eVH(w,this.b))},
$S:0}
C.eVH.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eVL.prototype={
$0(){var w=this.a
return w.m(w.gcqI())},
$S:0}
C.eVB.prototype={
$0(){var w=this.a
return w.m(new C.eVA(w))},
$S:0}
C.eVA.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eVC.prototype={
$0(){var w=this.a
return w.m(new C.eVz(w))},
$S:0}
C.eVz.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eVD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dbJ[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aQ(9,9)
m.push(v.ay7(new B.nh(new B.bj(p,p,p,p),A.ap,new B.a7(1/0,1/0,new B.Bg(new B.xn(o,o,v.aXQ(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AY),B.fQ(u,A.A,140,o,A.cg,A.bV,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eVy(v,s),3,n))}return B.bW(A.bC,m,A.bq,o,10,8)},
$S:170}
C.eVy.prototype={
$0(){var w=this.a
return w.m(new C.eVx(w,this.b))},
$S:0}
C.eVx.prototype={
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
C.eVf.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eVg.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eVh.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eVi.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eVj.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eVk.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eVl.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eVm.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eVn.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.eUB.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eUC.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eUD.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eUE.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eUF.prototype={
$0(){var w=this.a
return w.m(new C.eUA(w))},
$S:0}
C.eUA.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eUG.prototype={
$1(d){return this.a.b1=d},
$S:187}
C.eUH.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eV9.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eVa.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eVb.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eVc.prototype={
$1(d){return this.a.be=d},
$S:187}
C.eVd.prototype={
$1(d){return this.a.bL=d},
$S:6}
C.eUL.prototype={
$1(d){return this.a.aJ=d},
$S:6}
C.eUM.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eUN.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.eUO.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eUP.prototype={
$0(){var w=this.a
return w.m(new C.eUK(w))},
$S:0}
C.eUK.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.eUQ.prototype={
$0(){var w=this.a
return w.m(new C.eUJ(w))},
$S:0}
C.eUJ.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eUR.prototype={
$0(){var w=this.a
return w.m(new C.eUI(w))},
$S:0}
C.eUI.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eVE.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ih8(v,w.p4)},
$S:0}
C.eVw.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bs9:B.fQ(v,A.A,w,w,A.cg,A.bV,!1,w,!1,w,w)
return C.fG8(d.length===0?"rounded":d,u,e)},
$S:138}
C.eVs.prototype={
$0(){var w=this.a
return w.m(new C.eVr(w))},
$S:0}
C.eVr.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eVt.prototype={
$0(){var w=this.b
return w.m(new C.eVq(this.a,w))},
$S:0}
C.eVq.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eVu.prototype={
$0(){var w=this.b
return w.m(new C.eVp(this.a,w))},
$S:0}
C.eVp.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eVv.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.eVP.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ex(n.ck9(),n.r))
l.push(new C.J4(n.cxj(),!1,!1,t))
o=B.bT(0,B.bx(o,new B.ex(new B.an(A.a_,t,A.b1,A.t,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.ab,A.t,B.a([o,B.ao(t,B.aB(A.c8,B.c2(t,new B.o(t,t,B.J(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bg),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eVO(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:232}
C.eVO.prototype={
$1(d){var w=this.a
return w.m(new C.eVN(w,d,this.b,this.c))},
$S:21}
C.eVN.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eVY.prototype={
$0(){var w=this.a
return w.m(new C.eVX(w,this.b))},
$S:0}
C.eVX.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eVe.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ic()},
$S:0}
C.eWv.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.b_A(),B.E(B.at(w.b2B(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aQS(),1),w.aN3()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b_A(),new B.D(A.hs,B.at(s.b2B(u),t,t,t),t),B.E(s.aQS(),1),s.aN3()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:573}
C.fDp.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.es(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bBq(),null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cT,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,A.P)},
$S:z+98}
C.fDo.prototype={
$3(d,e,f){var w=this,v=C.bBq(),u=w.b?A.H:A.cy,t=w.c?A.cD:A.bp
return C.es(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bh,4280172719,2,d,0,w.f,w.e,D.cl,D.cT,0.82,0.09,w.a)},
$S:z+28}
C.ci_.prototype={
$1(d){return B.w(d)},
$S:17}
C.fL8.prototype={
$0(){return this.a},
$S:z+15}
C.fqM.prototype={
$1(d){return d.a.d0(this.a)},
$S:z+30}
C.fqN.prototype={
$2(d,e){return J.cs(e)},
$S:z+31}
C.fLa.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fLd.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fLe.prototype={
$0(){return A.d.gI(D.wx)},
$S:z+33}
C.fL6.prototype={
$1(d){return d.a},
$S:z+16}
C.fL9.prototype={
$1(d){return d.a},
$S:z+16}
C.fJ4.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fJ5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJ6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fDt.prototype={
$0(){return C.cE()},
$S:22}
C.fDw.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.es(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bh,4280172719,2,d,s,0,"",t,D.cT,g,e,f)},
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
C.fDv.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fDu.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bh,4280172719,2,"",t,0,"",u,D.lK,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qA,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fDs.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fFU.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hpi.c3(0,A.a.i(s.w).toLowerCase(),new C.fFS(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fFT(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bz(t.e,new B.bpo(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1691}
C.fFS.prototype={
$0(){return F.aOq(this.a.w)},
$S:178}
C.fFT.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bAk("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:178}
C.fiS.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fiT.prototype={
$1(d){return d.a},
$S:z+18}
C.fiU.prototype={
$1(d){return d.b},
$S:z+19}
C.fUp.prototype={
$1(d){return D.hnn},
$S:z+41}
C.f1U.prototype={
$0(){return this.a.x=C.hU7(this.b,this.c.b)},
$S:0}
C.f1V.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f1S.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:416}
C.f1T.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:416}
C.f1R.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.av,null,new C.f1M(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k1,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b7(s,7)
if(r.length===0){n.m(new C.f1N(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hvj(o,m.cL8(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f1O(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f1M.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f1Q(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b8R,A.f,p,p,D.b3M,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CF:D.CL,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fG8(v,i.b4C(h),u),p)))}t=B.kN(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(Ab.yf,t,p),!0,!1,A.af,!0,!0)
s=new C.f1P(i,d)
m=B.aJ(d,A.bX,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.HB[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,m.a.b*0.85),B.ce(B.x(B.a([D.fDS,A.W,t,A.dS,D.f04,A.au,D.fOV,A.W,B.kN(1.15,l,3,10,10,p,A.dR,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yf,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:25}
C.f1Q.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.bw:A.ds
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.J(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hK,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1L(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1692}
C.f1L.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.f1P.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bz
r=B.J(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.apW,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e0(new C.NN(u.FT(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f1K(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:138}
C.f1K.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f1N.prototype={
$0(){var w=this.a
return w.w=w.w.FT("")},
$S:0}
C.f1O.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1A.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f1B.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f1D.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f1E.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f1F.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f1G.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f1C(w,d))},
$S:2}
C.f1C.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f1H.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f27.prototype={
$0(){return this.a.f.fP()},
$S:0}
C.f28.prototype={
$0(){var w=this.a
return w.m(new C.f26(w))},
$S:0}
C.f26.prototype={
$0(){return this.a.e=null},
$S:0}
C.f29.prototype={
$0(){var w=this.a
return w.m(new C.f25(w))},
$S:0}
C.f25.prototype={
$0(){return this.a.x=null},
$S:0}
C.f2b.prototype={
$1(d){var w=this.a
return w.m(new C.f24(w,d))},
$S:35}
C.f24.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f2c.prototype={
$1(d){var w=this.a
return w.m(new C.f23(w,d))},
$S:35}
C.f23.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f2d.prototype={
$0(){var w=this.a
return w.m(new C.f22(w))},
$S:0}
C.f22.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f2e.prototype={
$1(d){var w=this.a
return w.m(new C.f21(w,d))},
$S:35}
C.f21.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f2f.prototype={
$1(d){var w=this.a
return w.m(new C.f20(w,d))},
$S:35}
C.f20.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2g.prototype={
$0(){var w=this.a
return w.m(new C.f2_(w))},
$S:0}
C.f2_.prototype={
$0(){var w=this.a
return w.w=w.w.FT("")},
$S:0}
C.f2h.prototype={
$0(){var w=this.a
return w.m(new C.f1Z(w,this.b))},
$S:0}
C.f1Z.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f2i.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bQ_(D.a4u[v]),null))
return B.bW(A.bC,t,A.bq,null,8,8)},
$S:170}
C.f2a.prototype={
$1(d){var w=this.a
return w.m(new C.f1Y(w,d))},
$S:8}
C.f1Y.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f1I.prototype={
$0(){var w=this.a
return w.m(new C.f1J(w,this.b,this.c))},
$S:0}
C.f1J.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f1X.prototype={
$0(){var w=this.a
return w.m(new C.f1W(w,this.b))},
$S:0}
C.f1W.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fUo.prototype={
$1(d){return new C.a0O(this.a,this.b,null)},
$S:z+42}
C.f1t.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f1u.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f1v.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aID?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f1w.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f1x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f1s(w,d))},
$S:2}
C.f1s.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f1y.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f1z.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.aq(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.hk(A.bx,w.length),A.aO))},
$S:0}
C.fq1.prototype={
$1(d){return d.a===this.a},
$S:208}
C.ejR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gay8(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cXu:D.de4
t=D.xU.j(v?1:0.55)
v=p.a.c
t=B.J(t,A.r,v?1.8:1.2)
s=D.xU.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bT(0,B.b4(q,q,q,new C.biJ(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bT(0,B.bRY(B.eL(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a5,A.a8,A.x,B.a([A.K,D.bgE.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.ab,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ed:A.m8,D.xU,q,q,q,20),A.au,B.eN(A.A,B.nY(A.jF,D.fxe,new C.ejQ()),A.f,A.e2)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.ftI,A.f,q,q,new B.o(D.xU,q,q,B.m(6),q,q,A.n),q,q,q,q,M.akY,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ay,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:96}
C.ejQ.prototype={
$1(d){return D.c26.aB(0,d)},
$S:68}
C.fLf.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fLg.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:208}
C.fLh.prototype={
$2(d,e){return A.o.aK(e.a.length,d.a.length)},
$S:1693}
C.fLi.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fLb.prototype={
$1(d){return d.a},
$S:z+18}
C.fLc.prototype={
$1(d){return d.b},
$S:z+19}
C.fTC.prototype={
$1(d){return new C.a_a(this.a,this.b,null)},
$S:z+44}
C.dos.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dot.prototype={
$1(d){return d.a===this.a.gaj4()},
$S:z+10}
C.dou.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dox.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.doy.prototype={
$0(){var w=this.a
return w.m(new C.dow(w,this.b))},
$S:0}
C.dow.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.doz.prototype={
$1(d){var w=this.a
return w.m(new C.dov(w,d))},
$S:8}
C.dov.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ejP.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.dZ(w,this.a)
return B.d0(w,0,B.dA(e,"count",x.S),B.T(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1694}
C.ffj.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f8,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.ffl.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.es(A.L,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cP,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bh,4280172719,2,d,l,0,"",D.mT,D.cT,g,e,f)},
$S:z+46}
C.ffk.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wK(0,"twinkle")
w=t===D.bh?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mT,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.ffi.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fEA.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fEB.prototype={
$0(){return A.d.gI(D.HK)},
$S:z+49}
C.fEC.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fhj.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fKI.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bh,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bh,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fD,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fKJ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bh,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bh,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bh,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fD,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fD,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fKK.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bh,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.k0,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.k0,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fD,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fKV.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.k0,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.k0,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.k_,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bh,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fL_.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.k_,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bh,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fD,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bh,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fL0.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.k0,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bh,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fD,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fL1.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cWo[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f8,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.bh,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KK
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fD,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fL2.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mz,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f8,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dn,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KK
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fD,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fL3.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bh,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.k_,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fD,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fL4.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bh,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fD,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.k0,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fL5.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.k0,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bh,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bh,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fKL.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.k_,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.k_,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fD,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fKM.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.k_,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.k_,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.k_,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eS,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fKN.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bh,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bh,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.k0,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.k_,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fD,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fKO.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bh,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.k_,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.k_,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fD,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fKP.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lh,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lh,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lh,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lh,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lh,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fD,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fKQ.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.k0,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eS,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fD,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fKR.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mz,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f8,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dn,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KK
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bh,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fD,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fKS.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bi,null,D.fD,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KK
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bh,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bh,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fD,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fKT.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bh,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fD,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fKU.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eO("design_"+(""+1000*u+"_"+t),D.f8,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KK
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,t)
u=B.ar(A.d7,A.co,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eO("design_"+(""+1000*t+"_"+s),D.f8,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KK
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bh,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.k_,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fKW.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.k0,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.k0,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.k0,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.k0,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bh,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eS,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fKX.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bh,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eS,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eS,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eS,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.k0,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fKY.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bh,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bh,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bh,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eS,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fD,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.eS,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KK
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fKZ.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.k0,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.k0,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bh,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fCq.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fCr.prototype={
$0(){return A.d.gI($.bF5())},
$S:z+52}
C.fpk.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fpj.prototype={
$1(d){return C.i0A(d,this.a,this.b)},
$S:z+53}
C.fLo.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vW(1.0375,1.01875,1)
return new B.fT(v,u,new C.aTv(B.hR8(A.vr,C.i0D(w.c,w.d,v,u),t)))},
$S:419}
C.dZ7.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dZ6.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c2(w,new B.o(w,w,w,w,w,new B.c1(A.KQ,1.2,A.x,w,0,u.d,w,w),A.n),A.bg),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jF(new B.an(A.a_,w,A.b1,A.t,B.a([t,new B.ex(B.b4(w,w,w,new C.bfA(u.a,r,q,r),A.ax),w),B.at(new B.jS(r,new C.dZ5(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:478}
C.dZ5.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.av(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fQ(i,A.A,r,r,A.cg,A.bV,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.my(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bs9(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cX(i[1].j(0.6),A.I,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d9(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a5,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaLC(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.d9(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f0H.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aB(0,d)},
$S:68}
C.ccw.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bz
t=B.J(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hS.j(0.4),A.I,14)],x.V):v
w=B.dd(v,B.bx(B.m(12),d,A.ap),v,v,A.b6,new B.o(v,v,t,u,w,v,A.n),A.eN,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.x(B.a([w,A.fQ,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1695}
C.ccx.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FT(""))},
$S:0}
C.ccy.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e0(new C.NN(v.FT(u),!0,!1,null),!0,null),d.b,new C.ccz(w,this.c,d),v.a===u)},
$S:z+54}
C.ccz.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hvj(u.b,t.c.FT(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fS1.prototype={
$1(d){return new C.ZI(this.a,null)},
$S:z+55}
C.ddJ.prototype={
$0(){var w=this.a
w.d=w.gvQ().bcJ("data:"+this.b+";base64,"+A.cJ.gct().aM(this.c));++w.r},
$S:0}
C.ddO.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddP.prototype={
$0(){var w=this.a
return w.m(new C.ddN(w))},
$S:0}
C.ddN.prototype={
$0(){return this.a.r++},
$S:0}
C.ddQ.prototype={
$1(d){var w=this.a
return w.m(new C.ddM(w,d))},
$S:2}
C.ddM.prototype={
$0(){var w=this.a
return w.d=w.gvQ().aEx(this.b)},
$S:0}
C.ddR.prototype={
$0(){var w=this.a
return w.m(new C.ddL(w))},
$S:0}
C.ddL.prototype={
$0(){var w=this.a
return w.d=w.gvQ().bcJ("")},
$S:0}
C.ddS.prototype={
$1(d){var w=this.a
return w.m(new C.ddK(w,d))},
$S:2}
C.ddK.prototype={
$0(){var w=this.a
return w.d=w.gvQ().bcQ(this.b)},
$S:0}
C.ddT.prototype={
$0(){var w=this.a
w=w.gvQ().bcQ(w.gay9().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fS0.prototype={
$1(d){var w={}
w.a=this.a
return new B.dZ(new C.fS_(w),null)},
$S:20}
C.fS_.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cU(new B.aZ(0,1/0,0,B.aJ(d,A.bX,x.w).w.a.b*0.85),B.ce(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fLV,A.au,D.fMa,A.aA,new C.b_U(v.a,new C.fRZ(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b4k,w,w,w,w,A.Nl,w,w,w)},
$S:156}
C.fRZ.prototype={
$1(d){this.b.$1(new C.fRY(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fRY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fUn.prototype={
$1(d){return D.hhF},
$S:z+57}
C.dku.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dkv.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.dkw.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fI1.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aB(0,d)},
$S:68}
C.ddq.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aX(t+r*1.2,o))
u.D(new B.c4(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c4(w,q+p,w,q+p*1.2))
u.D(new B.Dm(B.bX(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aG(u,v.d)
s.aG(u,v.e)
p=B.I()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.t(w,o),2.2,p)},
$S:435}
C.fI5.prototype={
$2(d,e){return A.k.aK(d.c,e.c)},
$S:z+58}
C.fAs.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fAt.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yh,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fu_,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hh,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fAq(d),B.bo(A.c1,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.W,B.et(A.on,D.V4,new C.fAr(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.xl,w,w,w,w))],x.p),A.ak,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fAq.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fAr.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.chY.prototype={
$1(d){return d.hJ()},
$S:z+59}
C.chZ.prototype={
$1(d){return d.ag()},
$S:z+60}
C.chX.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdM(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hXh(b2.h(0,"type"))
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
n=A.aAP[A.o.E(b4,0,8)]
m=D.cZu[A.o.E(w,0,1)]
l=C.i00(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.axl[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i2T(b2.h(0,"shape"))
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
a3=C.hqr(b2.h(0,"textTransition"))
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
C.chN.prototype={
$1(d){return d.hJ()},
$S:z+62}
C.chO.prototype={
$1(d){return d.ag()},
$S:z+63}
C.chK.prototype={
$1(d){return B.w(d)},
$S:17}
C.chL.prototype={
$1(d){return B.w(d)},
$S:17}
C.chM.prototype={
$1(d){return C.hh1(B.a2(d,x.N,x.z))},
$S:z+64}
C.cie.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cif.prototype={
$0(){return A.d.gI(D.a49)},
$S:z+66}
C.ci9.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ce(d.f))w.n(0,u,d.hJ())},
$S:z+7}
C.ci8.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.ci4.prototype={
$1(d){return new B.N(d,new C.ci5(),B.T(d).k("N<1,V>")).fb(0,new C.ci6())},
$S:z+69}
C.ci5.prototype={
$1(d){return d.f},
$S:z+70}
C.ci6.prototype={
$2(d,e){return d.ce(e)?d:e},
$S:706}
C.ci7.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hMY(d)},
$S:z+71}
C.cia.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cib.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.cic.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fIE.prototype={
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
C.fIA.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fIB.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fIC.prototype={
$2(d,e){var w
if(d.b===D.cT){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fID.prototype={
$2(d,e){return d.b===D.f8&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.chT.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ibI(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.chS(),b5.k("L.E"),x.N)
w=B.df(b5,B.a6(b5).k("L.E"))
b1=b1.e
v=A.q3.av(0,A.k.E(b1,0,1))
u=new C.chU()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.chV(a9,b7.d)
r=new C.chW(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.M)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jN.av(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kz(A.k.E(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.M)(b2),++m){i=b2[m]
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
a5=r.$1(a4)}else a5=a2===D.lK&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b1,A.t,B.a([new B.kz(A.k.E(o,0,1),r.$1(l),a8),new B.kz(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.ws(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mT
p.push(s.$5(i.c,i.d,i.e,i.f,C.hsI(a7,a6,r.$1(i))))}}return B.c2(new B.an(A.a_,a8,A.ab,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a5,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bg)},
$S:436}
C.chS.prototype={
$1(d){return d.a},
$S:z+22}
C.chU.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.chV.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1699}
C.chW.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a84(v,C.b21(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dLD.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.dh(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ci1.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ci2.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fLv.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:324}
C.fKC.prototype={
$1(d){return new C.adI(this.a,this.b,null)},
$S:z+78}
C.euU.prototype={
$0(){return this.a.Qg(this.b,C.if7(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.euV.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qg(this.b,C.if9(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.euW.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qg(this.b,C.if8(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.euX.prototype={
$0(){Z.hss()
B.a4(this.a,!1).O(null)},
$S:0}
C.chR.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1700}
C.chQ.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nL),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jV(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bV:A.dw
return B.fQ(t,A.A,o,new C.chP(),A.cg,w,!0,u,!1,new B.c0("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1701}
C.chP.prototype={
$3(d,e,f){return D.adB},
$S:215}
C.fIz.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d0(r,0,B.dA(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fIy(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c2(new B.an(A.a_,t,A.ab,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bg),A.ap)},
$S:1702}
C.fIy.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b21(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fs7.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cK(r.b,new C.fs5(d))
w=B.aJ(d,A.bX,x.w).w
v=B.m(22)
u=B.J(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fZ,28)],x.V)
s=x.p
return new B.d2(e,!1,B.at(B.aG(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k4,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bN(!1,A.Aj,q,q,!0,q,q,new C.fs6(p,d),q,B.fy(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.BK,q,new B.b7(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fY,A.G9,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:254}
C.fs5.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pK())B.a4(w,!0).eM()},
$S:0}
C.fs6.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a4(this.b,!0).eM()},
$S:0}
C.f9e.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),1.3-r*0.3,t,t)],x.p),t)
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
s.kg(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(r*1.2)
s.kg(r*0.5)
return B.fv(A.A,B.d9(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(-r*1.4)
return B.fv(A.a8,B.d9(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d9(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.jF(u.b,A.t,new C.aKh(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.jF(u.b,A.t,new C.aKh(1-r,t))],x.p),t)
case 16:v=D.b7O.av(0,r)
return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d9(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.mO(r*6.28)
s.jV(r,r,r,1)
return B.fv(A.A,u.b,t,s,!0)
case 20:return B.eL(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t),t)}},
$S:62}
C.dWR.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dWQ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dWP.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hsI(v,w,e)},
$S:62}
C.chJ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a9(A.a5,A.a8,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.T(v).k("N<1,cN>")
q=B.C(new B.N(v,new C.chI(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c2(new B.an(A.a_,r,A.ab,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bg)},
$S:436}
C.chI.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a84(m,new C.Vr(d,C.b21(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.daF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.daE(w))},
$S:12}
C.daE.prototype={
$0(){return this.a.d++},
$S:0}
C.ejx.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aQ2.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ibr(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ef(0,w*7,0,1)
s.fG(Math.sin(t)*0.32)
s.kg(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jV(w,w,w,1)
return B.fv(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.d9(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:62}
C.eZ9.prototype={
$1(d){var w
$.S()
w=B.I()
w.b=A.aa
w.c=d
w.e=A.dT
return w},
$S:1703}
C.fG9.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bs2(u,t,r),A.ax))
w.push(B.nC(s.d,A.ap,new C.bg6(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.br0(u,q,t,r),A.ax))
return B.at(new B.a7(v.a,v.b,new B.an(A.a_,r,A.b1,A.t,w,r),r),r,r,r)},
$S:224}
C.fv6.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:325}
C.eB7.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.D7(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gan(s)){u=null
w=1
break}u=r.dK(s,new C.eB5(),new C.eB6(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1704}
C.eB5.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:186}
C.eB6.prototype={
$0(){return J.fq(this.a)},
$S:1706}
C.exv.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.exw.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.exx.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ez5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eyU.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eyV.prototype={
$1(d){return d.hJ()},
$S:z+81}
C.ewT.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eAd.prototype={
$0(){this.a.tP()},
$S:0}
C.eB3.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oo()
w.Kp()},
$S:0}
C.ez3.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oo()
w.Kp()},
$S:0}
C.eAR.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eAS.prototype={
$1(d){return d.b===D.cT},
$S:z+4}
C.eAT.prototype={
$1(d){return d.a},
$S:z+22}
C.eAU.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b3,A.aO),$.aw())},
$S:269}
C.eAV.prototype={
$0(){return B.k2(!0,null,!0,!0,null,null,!1)},
$S:708}
C.ewh.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eB4.prototype={
$0(){},
$S:0}
C.eyc.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xH()
w.Kp()},
$S:0}
C.ewf.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xH()},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xH()},
$S:0}
C.eyz.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eyA.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xH()
w.Kp()
w.z="Home"},
$S:0}
C.eyB.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eyb.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.V3,w,w,!0,w,w,new C.eya(d),w,w)],x.p),w,w,w,D.fNM,w,w,w,w,D.fut,w)},
$S:18}
C.eya.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ey8.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.V3,w,w,!0,w,w,new C.ey7(d),w,w)],x.p),w,w,w,D.fyz,w,w,w,w,D.fwi,w)},
$S:18}
C.ey7.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ey9.prototype={
$0(){},
$S:0}
C.exr.prototype={
$1(d){return this.a.b0Z(C.bD4(d))},
$S:z+7}
C.exs.prototype={
$1(d){return this.a.afH(C.bD4(d))},
$S:z+7}
C.eyi.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fNQ,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.PY(A.wb,D.ayJ,"HATI YA KUHOWA","Hati ya mahari",new C.eyd(d),w),A.W,new C.PY(A.hi,D.dbL,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eye(d),w),A.W,new C.PY(A.i_,D.cXA,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eyf(d),w),A.W,new C.PY(A.i0,D.cVE,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eyg(d),w)],v)
if(this.a.gac3())A.d.v(u,B.a([A.W,new C.PY(A.jg,D.cGB,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eyh(d),w)],v))
return B.bl(!0,B.ce(B.x(u,A.ak,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yh,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:25}
C.eyd.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eye.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eyf.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eyg.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eyh.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xH()},
$S:0}
C.ewj.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ewk.prototype={
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
C.eyu.prototype={
$1(d){return d.b===D.lK},
$S:z+4}
C.eyv.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.dZ(new C.eys(w,this.a,v),null)},
$S:20}
C.eys.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eyt(p,o,a3,n),l=B.P(a2).ax.a===A.J,k=l?A.c:A.M,j=l?A.aR:A.al,i=l?A.bn:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.J(l?A.bz:A.aL,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bD,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aH(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eyo(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CL[w]
v.a=null
t=v.a=u.a
a1.push(new C.biD(t,u.b,p.a===t,i,k,new C.eyp(v,m),q))}a1=B.bW(A.bC,a1,A.bq,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CF[w]
s.a=null
t=s.a=r.a
u.push(new C.biC(t,r.b,p.b===t,k,j,new C.eyq(s,m),q))}return B.bl(!0,B.p(q,B.ce(B.x(B.a([d,A.aN,a0,A.W,a1,A.bv,v,A.W,B.bW(A.bC,u,A.bq,q,12,12),A.bv,new B.a7(1/0,48,B.et(D.bZ6,D.fQg,new C.eyr(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b7(B.m(16),A.a0),D.b1Q,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.u1,D.bzW,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.eyt.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eym(w.a,d,e))
w.b.d7(new C.eyn(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1709}
C.eym.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eyn.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eyo.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eyp.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eyq.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eyr.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GX(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d7(new C.eyl(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyl.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eyx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eyy.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eyw(t.d))
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
s.xH()},
$S:0}
C.eyw.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eyP.prototype={
$1(d){return d.b===D.cT},
$S:z+4}
C.eyQ.prototype={
$1(d){return d.w},
$S:z+82}
C.eyR.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.eyS.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.J,t=u?A.c:A.M,s=u?A.aR:A.al,r=u?A.bn:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.J(u?A.bz:A.aL,A.r,1),n=B.aJ(d,A.bX,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bSD,A.f,v,v,D.b3c,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aH(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eyM(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aA,new B.ds(1,A.cn,B.hO(v,new C.eyN(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.eyO(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.u1,A.a_h,v,v,v),!0,!1,A.af,!0,!0)},
$S:25}
C.eyM.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eyO.prototype={
$2(d,e){return A.ae},
$S:36}
C.eyN.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cy
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bVS,q,q,q,new C.eyK(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bCb,n,q),B.aM(q,A.Y,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b5(4,B.m(16),A.a0),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b1v),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eyL(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a3,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:709}
C.eyK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ihh(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geL()?p.a:q.a.length
n=p.geL()?p.b:q.a.length
m=A.a.oU(q.a,o,n,s)
r.bO(0,new B.bb(m,B.hk(A.bx,o+s.length),A.aO))
l.ajI(k,m)
l.pw()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyL.prototype={
$1(d){var w=this.a
w.ajI(this.b.a,d)
w.pw()},
$S:2}
C.eyT.prototype={
$0(){},
$S:0}
C.eyk.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ewA.prototype={
$0(){},
$S:0}
C.ewB.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hu1(this.b,w,!0)
w=this.a
w.r=null
w.xH()},
$S:0}
C.ewC.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ewD.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.ewz(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nl(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xH()},
$S:0}
C.ewz.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eyZ.prototype={
$1(d){return B.p_(new C.eyY(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:143}
C.eyY.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.akE,B.x(B.a([D.fLh,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.iy(!0,w,e,A.y,D.f6q,new C.eyX(this.a,this.b),20,A.u4,w,A.ah,!1),1)],v),A.ak,w,A.e,A.i,0,A.p)},
$S:439}
C.eyX.prototype={
$2(d,e){var w=null,v=D.HK[e],u=C.hMT(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.J(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fO,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.p(w,D.f00,A.f,w,w,new B.o(A.dI.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mI,w,w,w)],m))
return B.aG(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.i,0,w,w),A.b0,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a5,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyW(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
$S:79}
C.eyW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ci0(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ez_.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xH()},
$S:0}
C.eve.prototype={
$0(){var w,v=this.a,u=v.gqD(),t=C.rE(4294967295,null,0,0,null,C.cE(),D.mS,"","","",D.dh),s=this.b
C.cid(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dm){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ewy.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aI(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c6(v.e.r,v.f+1,C.hh1(q));++v.f},
$S:0}
C.eww.prototype={
$0(){var w=this.a
A.d.cE(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ez7.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cE(v.e.r,u),s=this.c
A.d.c6(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ews.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.ewr(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ewr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ez6.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ewi.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b3,A.aO),$.aw())},
$S:269}
C.ewU.prototype={
$0(){return B.k2(!0,null,!0,!0,null,null,!1)},
$S:708}
C.eAP.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eAQ.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aua(w).fP()
v=u.X3(w)
v.stz(B.hk(A.bx,v.a.a.length))},
$S:9}
C.eAe.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Y2(v)
if(u!=null&&u.b===D.cT)w.X3(u).saX(0,u.r)}else w.w=null},
$S:0}
C.evf.prototype={
$0(){var w=C.cE(),v=this.a,u=C.es(A.bi,!1,v.gqD().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bh,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cT,0.7,0.15,0.2)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.evc.prototype={
$0(){var w=C.cE(),v=this.a,u=C.es(A.bi,!1,4279310375,A.aF,"",v.gqD().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqD().c.l(),2,"",0,0,"",D.cl,D.f8,0.25,0.3,0.3)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.ev2.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,0.6,0.2,0.18),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.ev_.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c54],x.p)
for(w=J.aW(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gakl().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dF(!1,r,r,r,!0,r,r,r,!0,r,r,D.bQj,r,r,r,r,new C.euZ(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cr(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:25}
C.euZ.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ev0.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.ap(u.ag(),null),s=C.es(A.bi,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bh,4280172719,2,t,0,0,"",D.cl,D.a6G,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdw().z,s)
t.r=s.a},
$S:0}
C.ewu.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ewv.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdw().z,new C.ewt(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.ewt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.evH.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cT)s.Q=t.c.l()
else if(w===D.f8){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.evI(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.M)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.evI.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.evM.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.evN(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.M)(s),++u)v.$1(s[u])}else{t=s.gdw()
if(t!=null)v.$1(t)}},
$S:0}
C.evN.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.evK.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cT){s.Q=t.c
return}w=new C.evL(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.M)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.evL.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f5(w,new C.evJ()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.evJ.prototype={
$1(d){return d.b===D.cT},
$S:z+4}
C.evG.prototype={
$0(){return C.cid(this.b,this.c,this.a.gqD())},
$S:0}
C.eyJ.prototype={
$0(){return A.d.c6(this.a.d,0,this.b)},
$S:0}
C.eAY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eAZ.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eB_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eB0.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c6(s,0,v.b)
else{w=A.d.bg(s,new C.eAX(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSG()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hJ()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xH()
t.Kp()}},
$S:0}
C.eAX.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eAu.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ac7(),s=w.b,r=u.ac8(A.ff,A.ki,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.J(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.O,r,A.bv,B.p(v,B.B(B.a([B.E(u.aVS(w.c,A.al),1),new B.D(A.fC,B.p(v,D.bQp,A.f,v,v,new B.o(A.ff.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aVS(s,A.ff),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ay,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bv,u.aVV(A.ff,d,D.bMv,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.bZu(A.aQ,d,A.ui,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aVT(d,"Not now"))
return new C.Kd(B.x(p,A.ak,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eAt.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kd(B.x(B.a([v.ac7(),A.O,v.ac8(A.aQ,D.bMa,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.cU(new B.aZ(0,1/0,0,B.aJ(d,A.bX,x.w).w.a.b*0.42),B.hO(w,new C.eAr(v,u,d),u.length,w,w,A.ah,new C.eAs(),!0),w),A.aA,v.aVT(d,"Cancel")],x.p),A.ak,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eAs.prototype={
$2(d,e){return A.W},
$S:36}
C.eAr.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.J(A.c.j(0.08),A.r,1),q=x.p
return B.aG(!1,A.a2,!0,w,B.aO(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.apr,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c21,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.n_,w,w,w),A.cL,B.d("Updated "+this.a.Qh(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eAq(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
$S:79}
C.eAq.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eAn.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ac7()
t=t.ac8(A.aC,A.ur,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kd(B.x(B.a([s,A.O,t,A.bv,B.B(B.a([B.E(B.dI(A.aa3,new C.eAl(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.at,B.E(B.bH(D.fwT,u,new C.eAm(d),B.bo(A.ff,u,u,u,A.c,u,A.ck,u,new B.b7(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.ak,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eAl.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eAm.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eAp.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ac7(),s=w.b,r=u.ac8(A.aW,A.ed,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.avv("Names",""+w.c),1),A.ac,B.E(u.avv("Fields",""+w.d),1),A.ac,B.E(u.avv("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bk,v,v,v,A.c,v,A.y5,v,new B.b7(B.m(14),A.a0),v,v,v)
return new C.Kd(B.x(B.a([t,A.O,r,A.aN,p,A.bv,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nG,v,v,v),v,new C.eAo(d),o),A.W,u.aVU(d,"Stay here",!1)],q),A.ak,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eAo.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.exn.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.exm.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eAf.prototype={
$1(d){return d.b===D.cT},
$S:z+4}
C.eAO.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_V(A.d.dK(w.d,new C.eAM(v),new C.eAN(v)).hJ(),w.f,null)},
$S:z+84}
C.eAM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eAN.prototype={
$0(){return this.a},
$S:z+85}
C.ev7.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fS,w,w,w),w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bSb,w,w,w,w,new C.ev5(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fuS,w,w,w)],x.p)
if(v>1)t.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTp,w,w,w,w,new C.ev6(d),!1,w,w,w,w,w,D.fRw,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bl(!0,B.x(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.ev5.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.ev6.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.ev8.prototype={
$0(){var w=this.b,v=w.c,u=C.es(A.bi,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bh,4280172719,2,v,0,0,"",D.cl,D.SJ,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.ev9.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eO(""+1000*l+"_"+k,D.SJ,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bi,u,D.bh,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c6(j.e.r,i+q-1,new C.lR(""+1000*p+"_"+o,r+n,"",D.qz,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.evd.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kF(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.es(A.bi,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lg,0.35,0.55,0.62)
A.d.M(u.gdw().z,w)
u.r=w.a},
$S:0}
C.ev4.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b3H(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.ea(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lg,s,u,t)
A.d.M(p.gdw().z,q)
A.d.bs(p.gdw().z,new C.ev3(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.iba(p)}},
$S:0}
C.ev3.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ez4.prototype={
$0(){var w=this.a,v=this.b
w.b3H(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eAW.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.exq.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.exp())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.exp.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.evQ.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.evR.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tP()},
$S:9}
C.ev1.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,0.8,0.1,0.1),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.ewS.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eva.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdw().z,v)
w.r=v.a},
$S:0}
C.evj.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.evk.prototype={
$0(){var w=this.b.hJ(),v=C.cE(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.es(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdw().z,f)
t.r=f.a},
$S:0}
C.evl.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.evi(v))
if(u>=0&&u<w.length-1){A.d.cE(w,u)
A.d.c6(w,u+1,v)}},
$S:0}
C.evi.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evw.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.evh(v))
if(u>0){A.d.cE(w,u)
A.d.c6(w,u-1,v)}},
$S:0}
C.evh.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evz.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.evA.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.evB.prototype={
$0(){return this.a.as=A.dV},
$S:0}
C.evC.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.evD.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.evE.prototype={
$1(d){return d.b===D.cT},
$S:z+4}
C.evF.prototype={
$1(d){return d.length!==0},
$S:3}
C.evm.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.Dc(w.gqD().c.j(0.18).l(),0.1,u,D.bh,0,2,1,0,0))
u=w.gdw().z
v=C.cE()
A.d.M(u,C.iY(A.bi,!1,w.gqD().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.evn.prototype={
$0(){var w,v=this.a,u=v.gdw().z,t=C.cE()
A.d.M(u,C.Dc(v.gqD().c.j(0.12).l(),0.1,t,D.bh,0,2,1,0,0.9))
t=v.gdw().z
u=C.cE()
w=C.bDN()
A.d.M(t,C.iY(A.L,!1,v.gqD().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.evo.prototype={
$0(){A.d.M(this.a.gdw().z,C.Dc(1727914055,0.12,C.cE(),D.bh,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.evp.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdw().z,C.Dc(w,0.08,C.cE(),D.bh,w,2,0.5,0.2,0.4))},
$S:0}
C.evq.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.Dc(w.gqD().c.j(0.35).l(),0.12,u,D.Dn,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cE(),"Important note",0,D.qA,0.5,0.38,0.52))},
$S:0}
C.evr.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Dc(4294507260,0.78,C.cE(),D.bh,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bDN()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.evs.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Dc(4294897802,0.28,C.cE(),D.bh,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cE(),"Sticky note",0,D.aIs,0.26,0.64,0.14))},
$S:0}
C.evt.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdw().z,C.Dc(4293060848,0.04,C.cE(),D.bh,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdw().z,C.Dc(w,0.04,C.cE(),D.bh,w,2,0.55,0.1,0.48))},
$S:0}
C.evu.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.IH,0.42,0.06,0.18))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uM,0.42,0.52,0.18))},
$S:0}
C.evv.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Dc(858088427,0.62,C.cE(),D.bh,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdw().z,C.Dc(856004201,0.62,C.cE(),D.bh,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.evx.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Dc(4294967295,0.36,C.cE(),D.bh,w,2,0.24,0.38,0.28))
A.d.M(v.gdw().z,C.iY(A.L,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cE(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.evy.prototype={
$0(){return C.cid(this.b,D.SK,this.a.gqD())},
$S:0}
C.ewR.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a8s.t(0,d),t=this.a
return t.b8P(d,v===d,A.b_,this.c,new C.ewQ(t,u,d,w),u)},
$S:z+25}
C.ewQ.prototype={
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
C.bEz(r,new C.ewP(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewP.prototype={
$0(){return this.a.d7(new C.ewO(this.b,this.c))},
$S:0}
C.ewO.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.evb.prototype={
$0(){var w,v=this.a,u=v.gqD(),t=C.rE(4294967295,null,0,0,null,C.cE(),D.mS,"","","",D.dh),s=this.b
C.cid(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dm){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.evU.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ihk(p,q.d,s,new C.evT(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tP(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evT.prototype={
$1(d){return this.blM(d)},
blM(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.evS(t,d))
w=2
return B.b(t.tP(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.evS.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c6(v.d,0,u)}},
$S:0}
C.evV.prototype={
$0(){return this.a.bK5()},
$S:0}
C.evW.prototype={
$0(){return this.a.aR4("Class Presentation",!0)},
$S:0}
C.evX.prototype={
$1(d){return this.a.bL1(d.b,this.b,d.a)},
$S:z+88}
C.ewx.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aJ(w,A.bX,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eyI.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aJ(d,A.eM,x.w).w.f.d),new B.dZ(new C.eyH(this.a,this.b),null),null)},
$S:58}
C.eyH.prototype={
$2(d,e){return B.p_(new C.eyG(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:658}
C.eyG.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.J(u?A.bz:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.ak4,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b0,B.bN(!1,A.Aj,v,v,!0,v,v,new C.eyE(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cr(B.a([p.aTP(u,!0,!0,new C.eyF(p,w.d))],q),e,D.bxF,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.kU,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:117}
C.eyE.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eyF.prototype={
$0(){this.b.$1(new C.eyC())
var w=this.a
if(w.c!=null)w.m(new C.eyD())},
$S:0}
C.eyC.prototype={
$0(){},
$S:0}
C.eyD.prototype={
$0(){},
$S:0}
C.eAg.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.eAh.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,new C.azC(this.a,null),0.94+w*0.06,null,null),w)},
$S:440}
C.eAi.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.eAj.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,new C.bdV(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:440}
C.eAk.prototype={
$0(){return A.d.c6(this.a.d,0,C.Wj(this.b))},
$S:0}
C.evg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dx.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pP.j(0.75)],t)
r=B.J(A.b2.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b2.j(0.35+q),A.cc.j(0.18),A.K],t)
q=B.J(A.b2.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.a16,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c1(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.ue(A.fK,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ay,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.eu,p,p,1/0),14,!1),A.ap)},
$S:286}
C.ewl.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ewm.prototype={
$1(d){return d.length!==0},
$S:3}
C.ewn.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jU
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a1J:A.C1}return w},
$S:710}
C.ewq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dx.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.n7.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.J(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kF(v.w)?A.wb:A.qn,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a5,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qh(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qh(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qh(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qh(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qh(v.f)
r=k.bL_(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a8f(B.aG(!1,A.a2,!0,l,B.aO(!1,l,!0,B.p(l,B.dF(!1,A.Ni,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.oh,t?A.aB:A.bM,l,l,l,l),l,l,l,new C.ewo(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ay,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ewp(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ai),l),A.ap),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:96}
C.ewp.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.ewo.prototype={
$0(){return this.a.AY(this.b,this.c)},
$S:0}
C.exR.prototype={
$0(){var w=this.a
w.b7n()
w.m(new C.exQ())},
$S:0}
C.exQ.prototype={
$0(){},
$S:0}
C.exS.prototype={
$1(d){return this.a.ajI(this.b.a,d)},
$S:2}
C.exT.prototype={
$0(){this.a.d7(new C.exP(this.b))},
$S:0}
C.exP.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cy:A.P},
$S:0}
C.exU.prototype={
$0(){this.a.d7(new C.exO(this.b))},
$S:0}
C.exO.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.exV.prototype={
$0(){this.a.d7(new C.exN(this.b))},
$S:0}
C.exN.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mY},
$S:0}
C.exW.prototype={
$0(){this.a.d7(new C.exM(this.b))},
$S:0}
C.exM.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.exX.prototype={
$0(){var w=this.a
w.d7(new C.exL(w,this.b))},
$S:0}
C.exL.prototype={
$0(){var w=this.b
return w.as=this.a.c5k(w.as)},
$S:0}
C.exY.prototype={
$0(){return this.a.d7(new C.exK(this.b))},
$S:0}
C.exK.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.exZ.prototype={
$0(){return this.a.d7(new C.exJ(this.b))},
$S:0}
C.exJ.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.exC.prototype={
$0(){return this.a.a2B(this.b.a)},
$S:0}
C.exD.prototype={
$0(){this.a.a06()
return null},
$S:0}
C.exE.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aJ(v,A.bX,x.w).w.a.a<900)w.ag_()
else w.m(new C.exB(w))},
$S:0}
C.exB.prototype={
$0(){return this.a.as=!0},
$S:0}
C.exF.prototype={
$0(){this.a.d7(new C.exA(this.b))},
$S:0}
C.exA.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cy:A.P},
$S:0}
C.exG.prototype={
$0(){return this.a.d7(new C.exz(this.b))},
$S:0}
C.exz.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.exH.prototype={
$0(){return this.a.d7(new C.exy(this.b))},
$S:0}
C.exy.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.exI.prototype={
$0(){return this.a.aAu(null)},
$S:0}
C.ewK.prototype={
$0(){this.a.DN()
return null},
$S:0}
C.ewL.prototype={
$0(){this.a.aaE()
return null},
$S:0}
C.ewN.prototype={
$1(d){return this.blN(d)},
blN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kg(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.av,null,new C.ewF(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d7(new C.ewG(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.ewH(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.ewI(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hvi(q,new C.EP(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d7(new C.ewJ(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahi(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.ewF.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.elt],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bSk:r
q.push(B.dF(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,r,new C.ewE(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.x(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.ewE.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ewG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ewH.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ewI.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ewJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ewM.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zZ(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zZ(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zZ(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahi(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eqD,q,v,u,B.zZ(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:134}
C.eB1.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bDK(w,v)}},
$S:0}
C.eB2.prototype={
$0(){this.a.DN()
return null},
$S:0}
C.ey1.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c1W:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.br
return new B.D(A.fB,B.aB(u,B.dd(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b6,new B.o(w,u,u,r,u,q,A.n),A.eN,u,u,u,A.lA,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ey0(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:136}
C.ey0.prototype={
$0(){var w=this.a
return w.m(new C.ey_(w,this.b))},
$S:0}
C.ey_.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ey2.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a4F:E.ayP
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbOx():t.gbKq()
return B.hc(B.aB(u,B.p(u,D.aoR,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.I,10)],x.V),new B.a9(A.a5,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1714}
C.ey3.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.igA(v,w.a.c)},
$S:0}
C.ezq.prototype={
$0(){return this.b.vq(this.a.a)},
$S:0}
C.ezr.prototype={
$0(){return this.a.vq(D.mS)},
$S:0}
C.ezs.prototype={
$0(){return this.a.vq(D.IF)},
$S:0}
C.ezD.prototype={
$0(){return this.a.vq(D.IG)},
$S:0}
C.ezO.prototype={
$0(){return this.a.vq(D.IE)},
$S:0}
C.ezZ.prototype={
$0(){return this.a.qn("lab_report")},
$S:0}
C.eA5.prototype={
$0(){return this.a.qn("rubric")},
$S:0}
C.eA6.prototype={
$0(){return this.a.qn("minutes")},
$S:0}
C.eA7.prototype={
$0(){return this.a.qn("agenda")},
$S:0}
C.eA8.prototype={
$0(){return this.a.qn("timeline")},
$S:0}
C.eA9.prototype={
$0(){return this.a.qn(this.b.a)},
$S:0}
C.ezt.prototype={
$0(){this.a.W9()
return null},
$S:0}
C.ezu.prototype={
$0(){this.a.W3()
return null},
$S:0}
C.ezv.prototype={
$0(){return this.a.qn("table")},
$S:0}
C.ezw.prototype={
$0(){return this.a.qn("sticky")},
$S:0}
C.ezx.prototype={
$0(){return this.a.qn("divider")},
$S:0}
C.ezy.prototype={
$0(){return this.a.qn("header_bar")},
$S:0}
C.ezz.prototype={
$0(){return this.a.pf(D.bh)},
$S:0}
C.ezA.prototype={
$0(){return this.a.pf(D.eS)},
$S:0}
C.ezB.prototype={
$0(){return this.a.pf(D.k_)},
$S:0}
C.ezC.prototype={
$0(){return this.a.pf(D.Dn)},
$S:0}
C.ezE.prototype={
$0(){return this.a.pf(D.k0)},
$S:0}
C.ezF.prototype={
$0(){return this.a.pf(D.lh)},
$S:0}
C.ezG.prototype={
$0(){return this.a.pf(D.fD)},
$S:0}
C.ezH.prototype={
$0(){this.a.Hz()
return null},
$S:0}
C.ezI.prototype={
$0(){this.a.NH()
return null},
$S:0}
C.ezJ.prototype={
$0(){return this.a.qn("quote")},
$S:0}
C.ezK.prototype={
$0(){return this.a.a8N()},
$S:0}
C.ezL.prototype={
$0(){this.a.a0c()
return null},
$S:0}
C.ezM.prototype={
$0(){var w=this.a
return w.m(new C.ezg(w))},
$S:0}
C.ezg.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ezN.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.od(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ezo(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezo.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ezP.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k5()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a8t.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.J(t,A.r,v?2.5:1),s,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a8t.t(0,q))u.push(B.ao(s,B.p(s,D.OS,A.f,s,s,D.EC,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aB(s,B.hc(new B.an(A.a_,s,A.ab,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ezn(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.ezn.prototype={
$0(){this.a.a94(this.b)
return null},
$S:0}
C.ezQ.prototype={
$0(){this.a.a93(this.b)
return null},
$S:0}
C.ezR.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hMU(d),p=this.a,o=B.m(8),n=p.gdw()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.aZ
v=p.gdw()
n=B.J(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rE(4294967295,r,0,0,r,"preview_"+w,D.qz,"","","",D.dh)
C.hs5(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.htq(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ao(r,B.p(r,D.aps,A.f,r,r,D.EC,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iA,B.aB(r,B.x(B.a([new B.an(A.a_,r,A.ab,A.t,u,r),A.cL,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ezm(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.ezm.prototype={
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
break}s.d7(new C.ezc(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezc.prototype={
$0(){return C.hs5(this.a,this.b.a)},
$S:0}
C.ezp.prototype={
blO(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a8s.t(0,d)
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
$2(d,e){return this.blO(d,e)},
$S:z+91}
C.eAa.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eAc(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ce(B.B(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.eAc.prototype={
$1(d){var w=this
return w.a.b8P(d,w.b===d,w.c,w.d,new C.eAb(w.e,d),!D.a8s.t(0,d))},
$S:z+25}
C.eAb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ezS.prototype={
$1(d){this.b.$2(d,new C.ezl(this.a,d,this.c))
return null},
$S:z+26}
C.ezl.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bEz(u,new C.ezb(v,this.c,w),w)},
$S:0}
C.ezb.prototype={
$0(){return this.a.d7(new C.ez9(this.b,this.c))},
$S:0}
C.ez9.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ezT.prototype={
$1(d){this.b.$2(d,new C.ezk(this.a,d))
return null},
$S:z+26}
C.ezk.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fVb(u,new C.eza(v,w),w)},
$S:0}
C.eza.prototype={
$0(){var w=this.a
return w.d7(new C.ez8(w,this.b))},
$S:0}
C.ez8.prototype={
$0(){return this.a.gdw().r=this.b},
$S:0}
C.ezU.prototype={
$0(){var w=this.a
return w.m(new C.ezj(w))},
$S:0}
C.ezj.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ezV.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bDK(w,v)}},
$S:0}
C.ezW.prototype={
$0(){this.a.Il()
return null},
$S:0}
C.ezX.prototype={
$0(){return this.a.a8N()},
$S:0}
C.ezY.prototype={
$0(){var w=this.a,v=w.k5()
if(v!=null&&v.b===D.cT)w.d7(new C.ezi(v))},
$S:0}
C.ezi.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eA_.prototype={
$0(){this.a.DN()
return null},
$S:0}
C.eA0.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fs(v,!0)
return null},
$S:0}
C.eA1.prototype={
$0(){this.a.d7(new C.ezh(this.b))},
$S:0}
C.ezh.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cy:A.P},
$S:0}
C.eA2.prototype={
$0(){this.a.d7(new C.ezf(this.b))},
$S:0}
C.ezf.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eA3.prototype={
$0(){this.a.d7(new C.eze(this.b))},
$S:0}
C.eze.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mY},
$S:0}
C.eA4.prototype={
$0(){this.a.d7(new C.ezd(this.b))},
$S:0}
C.ezd.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.evP.prototype={
$1(d){return this.blL(d)},
blL(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d7(new C.evO(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:180}
C.evO.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eAx.prototype={
$0(){var w=this.a
return w.d7(new C.eAw(w,this.b))},
$S:0}
C.eAw.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eAy.prototype={
$0(){var w=this.a
return w.d7(new C.eAv(w,this.b))},
$S:0}
C.eAv.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.ewX.prototype={
$0(){return this.a.d7(new C.ewW(this.b))},
$S:0}
C.ewW.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.ewY.prototype={
$0(){return this.a.d7(new C.ewV(this.b))},
$S:0}
C.ewV.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.exu.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.ar6,new C.ext(),w),w.k("ak.E"))
return w},
$S:z+94}
C.ext.prototype={
$1(d){var w=null
return B.zZ(B.d(d.b,w,w,w,w,w,w,A.ml,w,w,w),48,d,x.fO)},
$S:z+95}
C.eAK.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.eAJ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kp()?q:new C.eAH(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.aZ:A.cr
v=B.J(v,A.r,o?2:1)
u=r.d?A.cp:A.c
t=B.bT(0,C.htq(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.a_,q,A.ab,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nE,q,q,q),A.f,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.akZ,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eAI(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:83}
C.eAI.prototype={
$0(){var w=this.a
return w.m(new C.eAD(w,this.b))},
$S:0}
C.eAD.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kp()},
$S:0}
C.eAH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eAE(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eAF(q,s))
q.aSy()}else if(r==="del"){q=t.a
q.m(new C.eAG(q,s))
q.aRG()}else if(r==="up")t.a.b3U(s,s-1)
else if(r==="down")t.a.b3U(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAE.prototype={
$1(d){var w=null,v=B.a([B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bU1,w,w,w,w,new C.eAz(d),!1,w,w,w,w,w,w,w,D.fvR,w,w,w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTV,w,w,w,w,new C.eAA(d),!1,w,w,w,w,w,w,w,A.wY,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTb,w,w,w,w,new C.eAB(d),!1,w,w,w,w,w,w,w,D.fE7,w,w,w))
if(u<this.b.r.length-1)v.push(B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,D.bVg,w,w,w,w,new C.eAC(d),!1,w,w,w,w,w,w,w,D.fvF,w,w,w))
return B.bl(!0,B.x(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.eAz.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.eAA.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.eAB.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.eAC.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.eAF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAL.prototype={
$0(){return this.a.a8N()},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
w.b7n()
w.aAu(null)},
$S:0}
C.ewd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.ay,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c2(A.kP,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bg),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.ewc(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c2(new B.an(A.a_,p,A.ab,A.f,s,new B.c0("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bg)},
$S:436}
C.ewc.prototype={
$1(d){var w=this
return w.a.bGp(d,w.b,w.c,w.d)},
$S:z+23}
C.ew1.prototype={
$0(){var w=this
if(w.b){w.a.NP(w.c)
return}if(w.d){w.a.a8L(w.c)
return}if(w.e){w.a.ahh(w.c)
return}if(w.f)w.a.b7W(w.c)},
$S:0}
C.ew2.prototype={
$0(){this.a.NP(this.b)
return null},
$S:0}
C.ew3.prototype={
$0(){return this.a.a2B(this.b.a)},
$S:0}
C.ew4.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ew0(u,d,w.c,w.d))
v.I_()
v.oo()
v.pw()},
$S:21}
C.ew0.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ew5.prototype={
$1(d){return this.a.ajI(this.b.a,d)},
$S:2}
C.ew7.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h6C(w))u.a.NP(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b7W(v)},
$S:0}
C.ew6.prototype={
$0(){return this.a.a2B(this.b.a)},
$S:0}
C.ew8.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ew_(w.b,d,w.c,w.d))
v.I_()
v.oo()
v.pw()},
$S:21}
C.ew_.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cT)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.ew9.prototype={
$1(d){var w=this.a
w.m(new C.evZ(this.b,d))
w.I_()
w.oo()
w.pw()},
$S:234}
C.evZ.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cT)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.ewa.prototype={
$0(){var w=this.a
w.m(new C.evY(this.b))
w.I_()
w.oo()
w.pw()},
$S:0}
C.evY.prototype={
$0(){this.a.r=C.hsV()},
$S:0}
C.ewb.prototype={
$0(){return this.a.a2B(this.b.a)},
$S:0}
C.ey5.prototype={
$0(){var w=this.a
return w.m(new C.ey4(w))},
$S:0}
C.ey4.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ey6.prototype={
$1(d){return this.a.cEC(this.b.a,d)},
$S:2}
C.exa.prototype={
$1(d){var w
this.a.d7(d)
w=this.b
if(w!=null)w.$0()},
$S:159}
C.exb.prototype={
$1(d){return this.a.$1(new C.ex9(this.b,d))},
$S:6}
C.ex9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.exc.prototype={
$1(d){return this.a.$1(new C.ex8(this.b,d))},
$S:6}
C.ex8.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exd.prototype={
$1(d){return this.a.$1(new C.ex7(this.b,d))},
$S:6}
C.ex7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.exe.prototype={
$1(d){return this.a.$1(new C.ex6(this.b,d))},
$S:6}
C.ex6.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.exf.prototype={
$1(d){return this.a.$1(new C.ex5(this.b,d))},
$S:6}
C.ex5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.exg.prototype={
$1(d){return this.b.$1(new C.ex4(this.a,this.c))},
$S:8}
C.ex4.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.exh.prototype={
$1(d){return this.b.$1(new C.ex3(this.a,this.c))},
$S:8}
C.ex3.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.exi.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bk:A.cX
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.J(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ex2(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:430}
C.ex2.prototype={
$0(){return this.a.$1(new C.ex_(this.b,this.c))},
$S:0}
C.ex_.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.exj.prototype={
$1(d){return this.a.$1(new C.ex1(this.b,d))},
$S:1715}
C.ex1.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.exk.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ex0(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:430}
C.ex0.prototype={
$0(){return this.a.$1(new C.ewZ(this.b,this.c))},
$S:0}
C.ewZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.exl.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pK()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eM()}v.a.at8()},
$S:0}
C.exo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dx.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b2,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.J(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.J(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.X(A.ur,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nq,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a2,!0,n,B.aO(!1,m,!0,B.eJ(new B.a7(48,48,new B.an(A.A,n,A.ab,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ay,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ai)},
$S:137}
C.euY.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dx.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b2,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.J(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.J(A.c.j(0.4+w*0.15),A.r,1)
return B.aG(!1,A.a2,!0,p,B.aO(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.b8,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ay,A.aE,A.x,u,p,p),A.n),p,A.G4,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ai)},
$S:137}
C.ez2.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Y,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.aqg,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a3,w,A.ao,w,w,w,w)
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.ez0(d),w,w),B.bH(A.qL,w,new C.ez1(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.ez0.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ez1.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d6j.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dx.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.av(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.av(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw),w*0.35)
t.toString
t=B.J(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw).j(0.18+w*0.12),A.I,32+w*10),D.ad5],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c1(A.b4,0.9,A.x,k,0,B.a([A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c1(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kF(j.a.c.w)?D.uD:N.nw).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kF(m)?D.uD:N.nw
s=B.a([new B.ac(0,A.G,A.d.gI(C.kF(m)?D.uD:N.nw).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kF(j.a.c.w)?A.wb:A.qn,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ay,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ab,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fQ,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.fnz,A.L,k,k),A.au,B.d(j.gczD(),k,k,k,k,k,k,D.fso,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSG()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kF(j.a.c.w)?D.uD:N.nw).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ae],m))}s.push(new C.K7(A.yD,"Download PDF","pdf",A.d2,j.Jg(0),!1,k))
p=j.a.c
if(!p.z||p.gSG()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K7(A.ki,"Transfer to "+C.hsX(p==null?"":p),"transfer_hati",A.aW,j.Jg(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jg(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K7(D.bLz,"Rename presentation","rename",A.cc,n,!1,k),A.am,new C.K7(A.amE,"Duplicate","duplicate",A.b5,j.Jg(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.K7(A.e9,"Delete presentation","delete",A.aw,j.Jg(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jg(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jg(n)
s.push(B.dP(B.d9(B.bN(!1,E.aTR,k,k,!0,k,k,new C.d6i(d),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.ax,k,D.bAS,k,k,k,k,k,A.km,k,k)),n),new B.t(0,(1-p)*8)))
return B.ed(A.A,B.d9(B.aG(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.ab,A.t,B.a([o,new B.D(D.bA0,B.x(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.ap),A.f,k,A.WC,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ai),i),0.88+u*0.12,k,k)},
$S:45}
C.d6i.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d6F.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d6G.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d6g.prototype={
$1(d){var w=this.a
return w.m(new C.d6c(w))},
$S:23}
C.d6c.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d6h.prototype={
$1(d){var w=this.a
return w.m(new C.d6b(w))},
$S:67}
C.d6b.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d6f.prototype={
$0(){var w=this.a
return w.m(new C.d6d(w))},
$S:0}
C.d6d.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d6e.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.eBI.prototype={
$0(){return $.blp=!$.blp},
$S:0}
C.eBy.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaVL())u.aya()},
$S:0}
C.eBH.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eBz.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eBA.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aya()},
$S:0}
C.eBu.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eBv.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eBw.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eBx.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eBF.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.t,w,null)},
$S:1716}
C.eBG.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ib)return new B.d2(e,!1,d,null)
w=this.a
return w.cxz(w.e,d,e)},
$S:441}
C.eBB.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fG((1-v.gp(0))*1.5708)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:45}
C.eBC.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kg((1-v.gp(0))*1.5708)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:45}
C.eBD.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fG(v.gp(0)*0.8)
w.kg(v.gp(0)*0.35)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:45}
C.eBE.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fG(-v.gp(0)*1.2)
return B.fv(A.a8,B.d9(e,v.gp(0)),null,w,!0)},
$S:45}
C.eBJ.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZk().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZk().x
t===$&&B.c()
return new C.b22(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.J4(v.c,t,!0,new B.c0("cine"+u,x.W))},
$S:699}
C.eBL.prototype={
$1(d){var w=this.a
if(d.b.a>B.aJ(this.b,A.bX,x.w).w.a.a*0.55)w.aya()
else w.clS()},
$S:67}
C.eBK.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fLl.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:442}
C.fLu.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.fLr(d),w,w),B.bN(!1,D.fLD,w,w,!0,w,w,new C.fLs(d,this.b,v),w,w),B.bH(A.aU7,w,new C.fLt(d,v,this.c),w)],x.p),w,w,M.tK,new B.a7(320,w,t,w),w,w,w,w,D.fN9,w)},
$S:18}
C.fLr.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fLs.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.h7g(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aQL(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aQb(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cig.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:632}
C.fLq.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fhN.prototype={
$1(d){return C.h7e(C.Wj(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fUr.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:93}
C.fUs.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,D.hkm,0.94+w*0.06,null,null),w)},
$S:440}
C.fUt.prototype={
$1(d){var w=this
return new C.Wl(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eBe.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eBa.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eBd.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wm(u,this.b,w.gaOZ(),v,null)},
$S:z+99}
C.eBb.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eBc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eBf.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eBg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eBj.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBk.prototype={
$0(){var w=this.a
return w.m(new C.eBi(w))},
$S:0}
C.eBi.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eBl.prototype={
$0(){var w=this.a
return w.m(new C.eBh(w))},
$S:0}
C.eBh.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eBm.prototype={
$1(d){return this.a.bL0(d,this.b)},
$S:z+100}
C.eB9.prototype={
$0(){var w=this.a
return w.m(new C.eB8(w,this.b))},
$S:0}
C.eB8.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eBn.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eBo.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eBp.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eBq.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBr.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fH(new B.fB(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.f9u)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.euR())},
$S:0}
C.euR.prototype={
$0(){},
$S:0}
C.euT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fP()},
$S:9}
C.euO.prototype={
$1(d){return this.a.m(new C.euN())},
$S:2}
C.euN.prototype={
$0(){},
$S:0}
C.euP.prototype={
$1(d){return this.a.b_J()},
$S:2}
C.euQ.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eBt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qb(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eBs(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBs.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fFC.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ex(new B.jS(this.c,new C.fFB(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:202}
C.fFB.prototype={
$3(d,e,f){return new C.J4(e,!1,!1,new B.c0(e.a,x.W))},
$S:z+102}
C.fFD.prototype={
$1(d){var w=null
return B.ow(!1,B.at(new C.bw0(this.a,this.b,w),w,w,w),w,x.z)},
$S:314}
C.fFH.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmF(),$async$$0)
case 3:w=4
return B.b(B.bP(A.mD,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmF(),$async$$0)
case 5:s=$.aV.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.q5))throw B.W("Could not draw the slide.")
u=r.m4(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1719}
C.fFI.prototype={
bmi(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.h8),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eR(A.dH.gaR(r))],"image/png"))
t.toString
s=An.fYS(t)
w=4
return B.b(new B.qc(s,"load",!1,x.ev).gI(0).da(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bmi(d)},
$S:1720}
C.fFE.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:153}
C.fFF.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:153}
C.fFG.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fbM.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fk0,A.L,w,w)},
$S:1721}
C.fbN.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bx(v,B.ll(A.bn,w,A.dF,8,w,e===0?w:e,w),A.ap)},
$S:645}
C.ejZ.prototype={
$1(d){this.a.a_y()
return null},
$S:11}
C.ejX.prototype={
$0(){return this.a.e=D.bvV},
$S:0}
C.ejY.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.clD.prototype={
$1(d){return A.o.dt(1,d.a)},
$S:z+103}
C.clE.prototype={
$2(d,e){return(d|e)>>>0},
$S:70};(function aliases(){var w=C.aMJ.prototype
w.bxf=w.q
w=C.aMf.prototype
w.bwL=w.q
w=C.aM1.prototype
w.bww=w.q
w=C.aMe.prototype
w.bwK=w.q
w=C.aMH.prototype
w.bxd=w.q
w=C.aNZ.prototype
w.byG=w.q
w=C.aKZ.prototype
w.bvq=w.q
w=C.aMS.prototype
w.bxo=w.q
w=C.aMT.prototype
w.bxp=w.q
w=C.b3J.prototype
w.brY=w.aDE})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iel","ao5",104)
v(C.aJU.prototype,"gc5H","Zr",0)
var r
u(r=C.ayk.prototype,"gcyZ","cz_",38)
v(r,"gc6w","adX",0)
v(r=C.ayg.prototype,"gaZe","Eg",3)
v(r,"gc6t","c6u",3)
v(r,"gaxk","xV",0)
v(r,"gaxl","IW",0)
t(C,"ieM","hKF",105)
v(C.aEw.prototype,"gc9a","c9b",3)
s(C,"ieX",0,null,["$4$paper$photo$request$template"],["fML"],106,0)
s(C,"ieW",0,null,["$5$doc$history$instruction$photo$template"],["bD2"],107,0)
v(r=C.aEN.prototype,"gc9U","Jd",0)
v(r,"gbKt","Xf",0)
v(r,"gc9X","aeM",0)
v(r,"gc9W","a_k",0)
v(r,"gb_o","Ex",0)
v(C.aEP.prototype,"gca1","a_m",0)
v(r=C.aGe.prototype,"gb_B","Qd",0)
v(r,"gcqI","b3Z",3)
v(r,"gcAm","aBL",86)
v(r,"gbOl","aaI",0)
v(r,"gcas","AC",0)
v(r=C.aIb.prototype,"gckC","a0H",0)
v(r,"gckK","a0K",0)
v(r,"gbDl","a9a",0)
v(r,"gcaw","aeY",0)
v(C.aIa.prototype,"gcax","aeZ",0)
v(C.aCc.prototype,"gbCk","a8Y",0)
v(C.aAA.prototype,"gcay","a_x",0)
w(C,"if9","id2",12)
w(C,"if7","i9W",12)
w(C,"if8","ic0",12)
v(r=C.aF4.prototype,"gcDx","cDy",3)
v(r,"gcp_","cp0",3)
u(r,"gED","afH",7)
v(r,"gbI7","asi",3)
u(r,"gEE","b0Z",7)
v(r,"gccN","afo",0)
v(r,"gcbE","afn",0)
v(r,"gceX","afI",0)
v(r,"gbKq","aai",0)
v(r,"gcfR","a06",0)
v(r,"gcfS","afZ",0)
v(r,"gcgo","ag5",0)
v(r,"gcf9","afL",0)
v(r,"gbOx","aaM",0)
v(r,"gaSx","aSy",3)
v(r,"gaRF","aRG",3)
v(r,"gaNi","aNj",3)
v(r,"gaRE","at8",3)
u(r,"gbCB","bCC",80)
v(r,"gaBh","b76",3)
v(r,"gcbG","cbH",3)
v(r,"gbZO","bZP",3)
v(r,"gbMT","bMU",3)
v(r=C.aF7.prototype,"gcCn","cCo",3)
v(r,"gcC2","cC3",3)
t(C,"ifa","idj",2)
v(r=C.aF5.prototype,"gcaE","Ji",0)
v(r,"gcsM","RE",0)
v(r,"gcaB","Jh",0)
v(r,"gcEN","a3g",0)
v(r,"gcgA","agc",0)
v(C.aF3.prototype,"gcaF","b_J",3)
v(r=C.aF6.prototype,"gbPl","aaX",0)
u(r,"gcaC","caD",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o3,C.Sc,C.bIE,C.bGZ,C.cCl,C.cCj,C.bQE,C.b9x,C.cCk,C.bFz,C.clx,C.clv,C.clw,C.clu,C.atn,C.clt,C.bRH,C.ot,C.aFI,C.jr,C.nP,C.a8e,C.zN,C.lp,C.oG,C.mf,C.zO,C.nT,C.a8m,C.arK,C.b23,C.ejO,C.lm,C.EY,C.ew,C.j2,C.EP,C.xP,C.eO,C.lR,C.i4,C.jO,C.a8n,C.afu,C.b24,C.b3J,C.a3f])
u(B.ke,[C.cKc,C.c1D,C.fAQ,C.cLJ,C.cL5,C.fGk,C.e2e,C.e2d,C.ek1,C.ek0,C.fHJ,C.fiW,C.fiX,C.cgB,C.cgC,C.cgD,C.enr,C.eVF,C.eV2,C.eV1,C.eW5,C.eVD,C.eVw,C.eVP,C.eWv,C.fqN,C.f1Q,C.f1P,C.f2i,C.ejR,C.fLh,C.dZ6,C.fS_,C.fI5,C.ci8,C.ci6,C.cib,C.fIA,C.fIB,C.fIC,C.fID,C.chT,C.chU,C.dLD,C.chQ,C.fIz,C.f9e,C.dWP,C.chJ,C.ejx,C.fG9,C.eys,C.eyR,C.eyO,C.eyN,C.eyY,C.eyX,C.eAs,C.eAr,C.eyH,C.eyG,C.evg,C.ewq,C.ezp,C.eAK,C.eAJ,C.ewd,C.exo,C.euY,C.d6j,C.eBF,C.eBG,C.eBB,C.eBC,C.eBD,C.eBE,C.eBJ,C.cig,C.eBe,C.eBp,C.clE])
u(B.hL,[C.cKd,C.cKe,C.bRI,C.fy_,C.c1C,C.c1F,C.fOt,C.fai,C.fa9,C.fap,C.fhO,C.fhP,C.fAR,C.fAP,C.fNY,C.fxE,C.fOP,C.cLz,C.cLE,C.cLG,C.cLC,C.cLH,C.cLA,C.cLI,C.cLv,C.cLs,C.cLr,C.cLy,C.cL0,C.cKZ,C.fFm,C.fFn,C.fm3,C.fGl,C.fGr,C.fl6,C.ccV,C.fFk,C.fFl,C.fAc,C.fAd,C.fGq,C.fGm,C.fGo,C.fGp,C.fGn,C.fSh,C.fAg,C.fAh,C.fAk,C.fAl,C.fAo,C.fAp,C.fTK,C.fjo,C.fTV,C.emZ,C.en_,C.en0,C.emH,C.emT,C.emU,C.emW,C.cgA,C.cgy,C.cgz,C.fG0,C.fG2,C.fG1,C.fiY,C.fiZ,C.fTY,C.enw,C.enx,C.eno,C.enp,C.ens,C.ent,C.fUd,C.eWw,C.eVW,C.eVG,C.eVT,C.eUY,C.eUZ,C.eV_,C.eV3,C.eV4,C.eWl,C.eWs,C.eWu,C.eW4,C.eW6,C.eWa,C.eWb,C.eWc,C.eWg,C.eW7,C.eW8,C.eVf,C.eVg,C.eVh,C.eVi,C.eVj,C.eVk,C.eVl,C.eVm,C.eVn,C.eUB,C.eUC,C.eUD,C.eUE,C.eUG,C.eUH,C.eV9,C.eVa,C.eVb,C.eVc,C.eVd,C.eUL,C.eUM,C.eUN,C.eUO,C.eVv,C.eVO,C.fDp,C.fDo,C.ci_,C.fqM,C.fLd,C.fL6,C.fL9,C.fJ4,C.fJ5,C.fJ6,C.fDw,C.fDv,C.fDu,C.fDs,C.fiS,C.fiT,C.fiU,C.fUp,C.f1S,C.f1T,C.f1M,C.f1G,C.f2b,C.f2c,C.f2e,C.f2f,C.f2a,C.fUo,C.f1x,C.fq1,C.ejQ,C.fLf,C.fLg,C.fLi,C.fLb,C.fLc,C.fTC,C.dot,C.doz,C.ejP,C.ffj,C.ffl,C.ffk,C.ffi,C.fEA,C.fEC,C.fhj,C.fKI,C.fKJ,C.fKK,C.fKV,C.fL_,C.fL0,C.fL1,C.fL2,C.fL3,C.fL4,C.fL5,C.fKL,C.fKM,C.fKN,C.fKO,C.fKP,C.fKQ,C.fKR,C.fKS,C.fKT,C.fKU,C.fKW,C.fKX,C.fKY,C.fKZ,C.fCq,C.fpk,C.fpj,C.fLo,C.dZ7,C.dZ5,C.f0H,C.ccw,C.ccy,C.fS1,C.ddQ,C.ddS,C.fS0,C.fRZ,C.fUn,C.fI1,C.ddq,C.fAs,C.fAt,C.chY,C.chZ,C.chX,C.chN,C.chO,C.chK,C.chL,C.chM,C.cie,C.ci9,C.ci4,C.ci5,C.ci7,C.cia,C.cic,C.fIE,C.chS,C.chV,C.chW,C.ci1,C.ci2,C.fLv,C.fKC,C.chR,C.chP,C.fIy,C.fs7,C.chI,C.eZ9,C.fv6,C.eB5,C.exv,C.exw,C.ez5,C.eyU,C.eyV,C.ewT,C.eAR,C.eAS,C.eAT,C.ewh,C.eyz,C.eyB,C.eyb,C.ey8,C.exr,C.exs,C.eyi,C.ewj,C.eyu,C.eyv,C.eyt,C.eyx,C.eyw,C.eyP,C.eyQ,C.eyS,C.eyL,C.ewC,C.ewz,C.eyZ,C.ewr,C.eAQ,C.ev_,C.ewu,C.ewt,C.evI,C.evN,C.evL,C.evJ,C.eAY,C.eAZ,C.eB_,C.eAX,C.eAu,C.eAt,C.eAn,C.eAp,C.eAf,C.eAO,C.eAM,C.ev7,C.ev3,C.exp,C.evR,C.evi,C.evh,C.evE,C.evF,C.ewR,C.evT,C.evX,C.eyI,C.eAg,C.eAh,C.eAi,C.eAj,C.ewl,C.ewm,C.ewn,C.exS,C.ewN,C.ewF,C.ewM,C.ey1,C.ey2,C.ezP,C.ezR,C.eAa,C.eAc,C.ezS,C.ezT,C.evP,C.exu,C.ext,C.eAE,C.ewc,C.ew4,C.ew5,C.ew8,C.ew9,C.ey6,C.exa,C.exb,C.exc,C.exd,C.exe,C.exf,C.exg,C.exh,C.exi,C.exj,C.exk,C.ez2,C.d6g,C.d6h,C.eBL,C.fLl,C.fLu,C.fLk,C.fLq,C.fhN,C.fUr,C.fUs,C.fUt,C.eBd,C.eBm,C.euT,C.euO,C.euP,C.fFC,C.fFB,C.fFD,C.fFI,C.fFE,C.fFF,C.fbM,C.fbN,C.ejZ,C.clD])
u(B.jc,[C.cKf,C.fae,C.faj,C.fak,C.faf,C.fag,C.fah,C.fa7,C.fa8,C.faa,C.fab,C.fao,C.fan,C.fad,C.fac,C.fal,C.fam,C.far,C.fas,C.faq,C.cLB,C.cLF,C.cLD,C.cLt,C.cLu,C.cLw,C.cLp,C.cLq,C.cLx,C.cLo,C.cLn,C.cLm,C.cKQ,C.cKP,C.cKS,C.cL_,C.cKT,C.cKR,C.cKV,C.cKW,C.cKX,C.cKU,C.cKY,C.cL1,C.cL2,C.cL3,C.cL4,C.fAa,C.fAb,C.fA8,C.fA9,C.efF,C.efD,C.efE,C.efG,C.efH,C.e2c,C.fAe,C.fAf,C.fAi,C.fAj,C.fAm,C.fAn,C.ek_,C.fI8,C.fI7,C.emY,C.emX,C.emB,C.emx,C.emI,C.emJ,C.emK,C.emD,C.emE,C.emF,C.emG,C.emC,C.emz,C.emA,C.emQ,C.emR,C.emP,C.emS,C.emO,C.emN,C.emM,C.emV,C.emL,C.emy,C.env,C.enj,C.enk,C.enq,C.enl,C.enn,C.enm,C.enu,C.eVo,C.eVM,C.eV7,C.eV8,C.eV5,C.eV6,C.eVS,C.eVR,C.eVQ,C.eVV,C.eVU,C.eUX,C.eV0,C.eUW,C.eUV,C.eUS,C.eUU,C.eUT,C.eWt,C.eWm,C.eWk,C.eWn,C.eWj,C.eWo,C.eWi,C.eWp,C.eWq,C.eWr,C.eWh,C.eW3,C.eVZ,C.eW9,C.eW2,C.eWd,C.eW1,C.eWe,C.eW0,C.eWf,C.eW_,C.eVJ,C.eVI,C.eVK,C.eVH,C.eVL,C.eVB,C.eVA,C.eVC,C.eVz,C.eVy,C.eVx,C.eUF,C.eUA,C.eUP,C.eUK,C.eUQ,C.eUJ,C.eUR,C.eUI,C.eVE,C.eVs,C.eVr,C.eVt,C.eVq,C.eVu,C.eVp,C.eVN,C.eVY,C.eVX,C.eVe,C.fL8,C.fLa,C.fLe,C.fDt,C.fFU,C.fFS,C.fFT,C.f1U,C.f1V,C.f1R,C.f1L,C.f1K,C.f1N,C.f1O,C.f1A,C.f1B,C.f1D,C.f1E,C.f1F,C.f1C,C.f1H,C.f27,C.f28,C.f26,C.f29,C.f25,C.f24,C.f23,C.f2d,C.f22,C.f21,C.f20,C.f2g,C.f2_,C.f2h,C.f1Z,C.f1Y,C.f1I,C.f1J,C.f1X,C.f1W,C.f1t,C.f1u,C.f1v,C.f1w,C.f1s,C.f1y,C.f1z,C.dos,C.dou,C.dox,C.doy,C.dow,C.dov,C.fEB,C.fCr,C.ccx,C.ccz,C.ddJ,C.ddO,C.ddP,C.ddN,C.ddM,C.ddR,C.ddL,C.ddK,C.ddT,C.fRY,C.dku,C.dkv,C.dkw,C.fAq,C.fAr,C.cif,C.euU,C.euV,C.euW,C.euX,C.fs5,C.fs6,C.dWR,C.dWQ,C.daF,C.daE,C.eB7,C.eB6,C.exx,C.eAd,C.eB3,C.ez3,C.eAU,C.eAV,C.eB4,C.eyc,C.ewf,C.ewg,C.eyA,C.eya,C.ey7,C.ey9,C.eyd,C.eye,C.eyf,C.eyg,C.eyh,C.eyj,C.ewk,C.eym,C.eyn,C.eyo,C.eyp,C.eyq,C.eyr,C.eyl,C.eyy,C.eyM,C.eyK,C.eyT,C.eyk,C.ewA,C.ewB,C.ewD,C.eyW,C.ez_,C.eve,C.ewy,C.eww,C.ez7,C.ews,C.ez6,C.ewi,C.ewU,C.eAP,C.eAe,C.evf,C.evc,C.ev2,C.euZ,C.ev0,C.ewv,C.evH,C.evM,C.evK,C.evG,C.eyJ,C.eB0,C.eAq,C.eAl,C.eAm,C.eAo,C.exn,C.exm,C.eAN,C.ev5,C.ev6,C.ev8,C.ev9,C.evd,C.ev4,C.ez4,C.eAW,C.exq,C.evQ,C.ev1,C.ewS,C.eva,C.evj,C.evk,C.evl,C.evw,C.evz,C.evA,C.evB,C.evC,C.evD,C.evm,C.evn,C.evo,C.evp,C.evq,C.evr,C.evs,C.evt,C.evu,C.evv,C.evx,C.evy,C.ewQ,C.ewP,C.ewO,C.evb,C.evU,C.evS,C.evV,C.evW,C.ewx,C.eyE,C.eyF,C.eyC,C.eyD,C.eAk,C.ewp,C.ewo,C.exR,C.exQ,C.exT,C.exP,C.exU,C.exO,C.exV,C.exN,C.exW,C.exM,C.exX,C.exL,C.exY,C.exK,C.exZ,C.exJ,C.exC,C.exD,C.exE,C.exB,C.exF,C.exA,C.exG,C.exz,C.exH,C.exy,C.exI,C.ewK,C.ewL,C.ewE,C.ewG,C.ewH,C.ewI,C.ewJ,C.eB1,C.eB2,C.ey0,C.ey_,C.ey3,C.ezq,C.ezr,C.ezs,C.ezD,C.ezO,C.ezZ,C.eA5,C.eA6,C.eA7,C.eA8,C.eA9,C.ezt,C.ezu,C.ezv,C.ezw,C.ezx,C.ezy,C.ezz,C.ezA,C.ezB,C.ezC,C.ezE,C.ezF,C.ezG,C.ezH,C.ezI,C.ezJ,C.ezK,C.ezL,C.ezM,C.ezg,C.ezN,C.ezo,C.ezn,C.ezQ,C.ezm,C.ezc,C.eAb,C.ezl,C.ezb,C.ez9,C.ezk,C.eza,C.ez8,C.ezU,C.ezj,C.ezV,C.ezW,C.ezX,C.ezY,C.ezi,C.eA_,C.eA0,C.eA1,C.ezh,C.eA2,C.ezf,C.eA3,C.eze,C.eA4,C.ezd,C.evO,C.eAx,C.eAw,C.eAy,C.eAv,C.ewX,C.ewW,C.ewY,C.ewV,C.eAI,C.eAD,C.eAH,C.eAz,C.eAA,C.eAB,C.eAC,C.eAF,C.eAG,C.eAL,C.ewe,C.ew1,C.ew2,C.ew3,C.ew0,C.ew7,C.ew6,C.ew_,C.evZ,C.ewa,C.evY,C.ewb,C.ey5,C.ey4,C.ex9,C.ex8,C.ex7,C.ex6,C.ex5,C.ex4,C.ex3,C.ex2,C.ex_,C.ex1,C.ex0,C.ewZ,C.exl,C.ez0,C.ez1,C.d6i,C.d6F,C.d6G,C.d6c,C.d6b,C.d6f,C.d6d,C.d6e,C.eBI,C.eBy,C.eBH,C.eBz,C.eBA,C.eBu,C.eBv,C.eBw,C.eBx,C.eBK,C.fLr,C.fLs,C.fLt,C.eBa,C.eBb,C.eBc,C.eBf,C.eBg,C.eBj,C.eBk,C.eBi,C.eBl,C.eBh,C.eB9,C.eB8,C.eBn,C.eBo,C.eBq,C.eBr,C.euS,C.euR,C.euN,C.euQ,C.eBt,C.eBs,C.fFH,C.fFG,C.ejX,C.ejY])
t(C.aS8,B.L)
u(B.lZ,[C.a4b,C.axM,C.awr,C.xN,C.xQ,C.l0,C.tu,C.BI,C.rD,C.w8,C.ash,C.J5,C.arJ,C.uU,C.mG,C.hF,C.a90])
u(C.bQE,[C.cCm,C.bQF])
u(C.clx,[C.clB,C.atm])
t(C.clA,C.clv)
t(C.clz,C.clu)
t(C.clC,C.clz)
t(C.cly,C.clw)
t(C.cls,C.clt)
t(C.bb5,B.oY)
t(C.cvT,B.avU)
t(C.a8N,B.xA)
u(B.ag,[C.a1j,C.Z_,C.YY,C.aqV,C.W9,C.Wa,C.a0i,C.a0P,C.a0O,C.aEH,C.a_a,C.NN,C.ZI,C.a_2,C.aoV,C.aJA,C.Vr,C.aAf,C.a84,C.Og,C.azC,C.K7,C.a_V,C.Wl,C.Wm,C.aF2,C.arO,C.a85])
u(B.ah,[C.aJU,C.ayk,C.ayg,C.aEw,C.aEN,C.aEP,C.aGe,C.aIb,C.aIa,C.aMJ,C.aCc,C.aMf,C.aAA,C.bh4,C.aM1,C.aNZ,C.aMe,C.beU,C.aMH,C.aMS,C.aKZ,C.bdG,C.aMT,C.aF5,C.blo,C.aF3,C.aF6,C.bl7])
u(B.ax,[C.ayi,C.adC,C.ad0,C.bkd,C.adF,C.afk,C.b1F,C.btB,C.b2_,C.bmF,C.bs9,C.b_U,C.b22,C.adI,C.adZ,C.b20,C.J4,C.b_X,C.bdV,C.PY,C.Kd,C.biD,C.biC,C.bw0])
u(B.HA,[C.bdn,C.bv_,C.aKh,C.bg6,C.bsx])
u(B.mV,[C.bdm,C.b9P,C.bsu,C.bcU,C.bgu,C.biJ,C.bfA,C.bgq,C.bg8,C.boY,C.baY,C.baC,C.bvX,C.bsX,C.bs5,C.bft,C.b1Y,C.br0,C.bs2])
t(C.bl5,C.aMJ)
t(C.bku,C.aMf)
t(C.bkf,C.aM1)
t(C.bvs,C.aNZ)
t(C.bkq,C.aMe)
t(C.bl3,C.aMH)
t(C.bye,C.aMS)
t(C.aF4,C.bye)
t(C.bdH,C.aKZ)
t(C.aF7,C.aMT)
t(C.bvN,B.iU)
t(C.a9_,B.kA)
t(C.clF,C.b3J)
t(C.aiA,C.a3f)
u(B.XY,[C.aRZ,C.aTv])
t(C.axm,C.aRZ)
w(C.aMJ,B.cp)
w(C.aMf,B.cp)
w(C.aM1,B.cp)
w(C.aMe,B.cp)
w(C.aMH,B.cp)
w(C.aNZ,B.cp)
w(C.aKZ,B.eP)
w(C.aMS,B.cp)
v(C.bye,B.eD)
w(C.aMT,B.cp)})()
B.jk(b.typeUniverse,JSON.parse('{"aSI":{"hN":["aSI"]},"o3":{"aSI":[],"hN":["aSI"]},"aS8":{"L":["Sc"],"L.E":"Sc"},"bb5":{"oY":[]},"a8N":{"xA":[],"on":[]},"a1j":{"ag":[],"v":[]},"aJU":{"ah":["a1j"]},"Z_":{"ag":[],"v":[]},"YY":{"ag":[],"v":[]},"ayk":{"ah":["Z_"]},"ayg":{"ah":["YY"]},"ayi":{"ax":[],"v":[]},"aqV":{"ag":[],"v":[]},"aEw":{"ah":["aqV"]},"adC":{"ax":[],"v":[]},"ad0":{"ax":[],"v":[]},"adF":{"ax":[],"v":[]},"afk":{"ax":[],"v":[]},"bkd":{"ax":[],"v":[]},"W9":{"ag":[],"v":[]},"aEN":{"ah":["W9"]},"b1F":{"ax":[],"v":[]},"bdn":{"aC":[]},"bdm":{"aC":[]},"bv_":{"aC":[]},"b9P":{"aC":[]},"bsu":{"aC":[]},"Wa":{"ag":[],"v":[]},"aEP":{"ah":["Wa"]},"bcU":{"aC":[]},"a0i":{"ag":[],"v":[]},"aGe":{"ah":["a0i"]},"bgu":{"aC":[]},"a0P":{"ag":[],"v":[]},"a0O":{"ag":[],"v":[]},"aEH":{"ag":[],"v":[]},"a_a":{"ag":[],"v":[]},"aIb":{"ah":["a0P"]},"aIa":{"ah":["a0O"]},"bl5":{"ah":["aEH"]},"biJ":{"aC":[]},"aCc":{"ah":["a_a"]},"btB":{"ax":[],"v":[]},"b2_":{"ax":[],"v":[]},"bmF":{"ax":[],"v":[]},"NN":{"ag":[],"v":[]},"ZI":{"ag":[],"v":[]},"bku":{"ah":["NN"]},"bs9":{"ax":[],"v":[]},"bfA":{"aC":[]},"b_U":{"ax":[],"v":[]},"aAA":{"ah":["ZI"]},"a_2":{"ag":[],"v":[]},"bh4":{"ah":["a_2"]},"bgq":{"aC":[]},"bg8":{"aC":[]},"boY":{"aC":[]},"baY":{"aC":[]},"baC":{"aC":[]},"bvX":{"aC":[]},"bsX":{"aC":[]},"bs5":{"aC":[]},"bft":{"aC":[]},"aoV":{"ag":[],"v":[]},"b22":{"ax":[],"v":[]},"bkf":{"ah":["aoV"]},"adI":{"ax":[],"v":[]},"adZ":{"ax":[],"v":[]},"aJA":{"ag":[],"v":[]},"Vr":{"ag":[],"v":[]},"J4":{"ax":[],"v":[]},"aAf":{"ag":[],"v":[]},"a84":{"ag":[],"v":[]},"b20":{"ax":[],"v":[]},"b1Y":{"aC":[]},"bvs":{"ah":["aJA"]},"aKh":{"aC":[]},"bkq":{"ah":["Vr"]},"beU":{"ah":["aAf"]},"bl3":{"ah":["a84"]},"b_X":{"ax":[],"v":[]},"bg6":{"aC":[]},"br0":{"aC":[]},"bs2":{"aC":[]},"azC":{"ag":[],"v":[]},"K7":{"ag":[],"v":[]},"a_V":{"ag":[],"v":[]},"Kd":{"ax":[],"v":[]},"Og":{"ag":[],"v":[]},"aF4":{"ah":["Og"],"eD":[]},"bdH":{"ah":["azC"]},"bdV":{"ax":[],"v":[]},"bdG":{"ah":["K7"]},"PY":{"ax":[],"v":[]},"aF7":{"ah":["a_V"]},"bsx":{"aC":[]},"biD":{"ax":[],"v":[]},"biC":{"ax":[],"v":[]},"Wl":{"ag":[],"v":[]},"Wm":{"ag":[],"v":[]},"aF2":{"ag":[],"v":[]},"arO":{"ag":[],"v":[]},"aF5":{"ah":["Wl"]},"blo":{"ah":["Wm"]},"aF3":{"ah":["aF2"]},"bvN":{"iU":[]},"aF6":{"ah":["arO"]},"bw0":{"ax":[],"v":[]},"a85":{"ag":[],"v":[]},"bl7":{"ah":["a85"]},"a9_":{"kA":["ft<eV>"],"km":["ft<eV>"]},"aiA":{"a3f":[]},"aRZ":{"j6":[],"fh":[]},"axm":{"j6":[],"fh":[]},"aTv":{"j6":[],"fh":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.av
return{bu:w("LZ"),U:w("vF<q9>"),bz:w("u"),M:w("dD<n>"),bo:w("jH"),g7:w("Mx"),gc:w("aA<iB?>"),bq:w("aA<~>"),cc:w("MJ"),fS:w("Ed"),an:w("Ig"),bm:w("O<Sc>"),X:w("O<a3n>"),f3:w("O<aSI>"),aK:w("O<ng>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lJ>"),d5:w("O<aA<bz<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dK>>"),fG:w("O<aA<~>>"),aF:w("O<nm>"),cd:w("O<ai<jr>>"),ez:w("O<a8<n,aD>>"),d:w("O<a8<n,@>>"),B:w("O<mC>"),h:w("O<jr>"),gE:w("O<zN>"),k:w("O<ot>"),g:w("O<lR>"),D:w("O<i4>"),u:w("O<eO>"),m:w("O<uU>"),i:w("O<hF>"),aC:w("O<a8m>"),o:w("O<zO>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<h9>"),cR:w("O<iS>"),J:w("O<ji>"),gx:w("O<ph<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cX>"),s:w("O<n>"),aS:w("O<iU>"),p:w("O<v>"),eR:w("O<fh>"),fT:w("O<b9x>"),bx:w("O<aFI>"),gz:w("O<afu>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cB<ah<ag>>"),gL:w("ai<ot>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bz<H,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<nT,n>"),cT:w("N<jO,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,pN>"),gh:w("N<mG,jt<mG>>"),w:w("iF"),ei:w("iB"),g2:w("rt"),fB:w("EP"),b6:w("zN"),gX:w("a8e"),dt:w("lp"),ea:w("ot"),bt:w("lR"),I:w("i4"),F:w("eO"),fO:w("mG"),ff:w("uU"),fP:w("hF"),Q:w("w8"),dO:w("arK"),a:w("cu"),C:w("aD"),dw:w("atn"),di:w("a90"),Y:w("eV"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Fj"),dB:w("dw<t>"),bJ:w("dw<n>"),_:w("e2<n>"),N:w("n"),fw:w("q9"),bO:w("as"),K:w("bp<t>"),b:w("bp<K>"),E:w("dK"),W:w("c0<n>"),ac:w("c0<H>"),ex:w("jS<lR>"),cI:w("jS<n>"),cl:w("jS<K>"),b4:w("Z<lm>"),a8:w("Z<mf>"),fR:w("Z<+(n,n)>"),co:w("ee<t>"),l:w("v"),b2:w("bY<~>"),ev:w("qc<dW>"),dT:w("bh<~>"),q:w("n7"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iB?"),af:w("i4?"),go:w("b24?"),a6:w("a8n?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZB=new B.bM(A.ay,null,null,I.aq1,null)
D.aZK=new B.dh(0,-0.15)
D.aZM=new B.dh(0.62,0)
D.aZP=new B.dh(-0.35,-0.45)
D.aZZ=new B.dh(0.9,-0.85)
D.b0T=new B.bj(I.To,I.To,A.fE,A.fE)
D.b17=new B.ay(A.b5,1,A.r,-1)
D.bmx=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b1j=new B.ay(D.bmx,1,A.r,-1)
D.b1v=new B.ay(A.aD,1.5,A.r,-1)
D.b1A=new B.ay(A.b5,1.6,A.r,-1)
D.b1Q=new B.ay(A.aD,1.4,A.r,-1)
D.b3c=new B.o(null,null,null,null,null,L.Hq,A.a6)
D.c37=new B.a9(A.a5,A.a8,A.x,G.a4F,null,null)
D.b3k=new B.o(null,null,null,null,null,D.c37,A.a6)
D.acW=new B.o(A.av,null,null,A.tm,null,null,A.n)
D.bfx=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bmu=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d1n=w([D.bfx,D.bmu],x.O)
D.es0=new B.c1(A.A,0.5,A.x,null,0,D.d1n,null,null)
D.b3D=new B.o(null,null,null,null,null,D.es0,A.a6)
D.Y9=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b25=new B.bK(P.vt,A.a0,A.a0,A.a0)
D.b3F=new B.o(D.Y9,null,D.b25,null,null,null,A.n)
D.c4S=new B.a9(A.a5,A.a8,A.x,A.R1,null,null)
D.b3M=new B.o(null,null,null,null,null,D.c4S,A.a6)
D.aex=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b3P=new B.o(D.aex,null,null,A.qW,null,null,A.n)
D.b3T=new B.o(A.ju,null,null,null,null,null,A.a6)
D.b3W=new B.o(A_.afG,null,I.acy,A.mp,null,null,A.n)
D.EC=new B.o(A.dI,null,null,null,null,null,A.a6)
D.b42=new B.o(null,null,null,null,null,E.wr,A.a6)
D.d6C=w([E.agE,A.c0],x.O)
D.c4t=new B.a9(A.b4,A.b7,A.x,D.d6C,null,null)
D.b46=new B.o(null,null,null,A.mp,null,D.c4t,A.n)
D.dhS=w([A.bk,A.dI,A.kb],x.O)
D.a2K=new B.a9(A.ay,A.aE,A.x,D.dhS,null,null)
D.b4j=new B.o(null,null,null,null,null,D.a2K,A.n)
D.b4k=new B.o(D.aex,null,null,A.kU,null,null,A.n)
D.cwj=w([A.d7,A.bk],x.O)
D.c4k=new B.a9(A.ay,A.aE,A.x,D.cwj,null,null)
D.b4o=new B.o(null,null,null,null,null,D.c4k,A.n)
D.b4y=new B.o(null,null,null,null,null,G.ux,A.a6)
D.b4T=new B.o(A.agG,null,null,null,null,null,A.a6)
D.bgy=new B.u(0.5647058823529412,0,0,0,A.q)
D.ad5=new B.ac(0,A.G,D.bgy,A.IU,28)
D.b73=new B.aWU()
D.b7C=new C.cvT()
D.b7O=new C.bb5()
D.adB=new B.cg(A.A,null,null,A.a2y,null)
D.bat=new B.fj(null,null,null,null,null,E.ne,null,null,null,null)
D.b8m=new B.cg(A.A,null,null,D.bat,null)
D.bOu=new B.ae(A.e5,28,A.c,null,null,null)
D.b8R=new B.cg(A.A,null,null,D.bOu,null)
D.baq=new B.fj(2,null,null,null,null,A.c1,null,null,null,null)
D.b9d=new B.cg(A.A,null,null,D.baq,null)
D.bOP=new B.ae(L.OF,40,A.by,null,null,null)
D.b9e=new B.cg(A.A,null,null,D.bOP,null)
D.bbk=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bbw=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bbZ=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bc8=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bcJ=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bd_=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bd1=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.LG=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bdu=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bdC=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aeR=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bet=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bfm=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.af5=new B.u(1,1,1,0.9725490196078431,A.q)
D.bfG=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bfV=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bfZ=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bgf=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bgE=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bij=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.XU=new B.u(0.8509803921568627,0,0,0,A.q)
D.bit=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.biA=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.afZ=new B.u(0.6,0,0,0,A.q)
D.ag0=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bkd=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tH=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bkH=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bl8=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bly=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agR=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Yk=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Bk=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Mf=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jr=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ahj=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Yw=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bpg=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bpM=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bq1=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.YV=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.brh=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.xU=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.brP=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bs9=new B.hM(A.aZ,!0,null,null)
D.fqC=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRo=new B.y("Bio link",null,D.fqC,null,null,null,null,null,null,null,null,null)
D.b97=new B.cg(A.A,null,null,D.fRo,null)
D.bsp=new B.hM(A.EQ,!0,D.b97,null)
D.MG=new C.a4b(0,"none")
D.aiv=new C.a4b(1,"deflate")
D.aiw=new C.a4b(2,"bzip2")
D.bto=new B.ks(0.165,0.84,0.44,1)
D.d6W=w([A.cb,A.dF,A.aD],x.O)
D.c3C=new B.a9(A.ay,A.aE,A.x,D.d6W,null,null)
D.b3h=new B.o(null,null,null,null,null,D.c3C,A.n)
D.bXT=new B.ae(A.eY,null,A.ad,null,null,null)
D.b9O=new B.cg(A.A,null,null,D.bXT,null)
D.btV=new B.kY(D.b3h,A.bg,D.b9O,null)
D.bpw=new B.u(0.058823529411764705,1,1,1,A.q)
D.dak=w([A.bz,A.r5,A.r5,D.bpw],x.O)
D.cNH=w([0,0.32,0.7,1],x.x)
D.c4a=new B.a9(A.ay,A.aE,A.x,D.dak,D.cNH,null)
D.b36=new B.o(null,null,null,null,null,D.c4a,A.n)
D.bu0=new B.kY(D.b36,A.bg,null,null)
D.bv8=new B.mv(1,1,null,null,null,A.bn,null)
D.bvb=new B.mv(1,null,null,null,null,D.Yw,null)
D.bvF=new B.b9(125e4)
D.bvL=new B.b9(17e4)
D.bvV=new B.b9(35964e8)
D.bw1=new B.b9(55e4)
D.bw5=new B.b9(68e4)
D.bww=new B.ii(0,0,0,5)
D.bwM=new B.Q(0,16,16,0)
D.bwW=new B.Q(0,36,0,36)
D.bx3=new B.Q(0,54,0,0)
D.bxa=new B.Q(10,0,10,3)
D.bxl=new B.ii(10,16,10,10)
D.bxx=new B.Q(10,6,4,6)
D.bxA=new B.Q(10,8,10,6)
D.ajv=new B.Q(11,8,11,11)
D.bxF=new B.Q(12,0,12,24)
D.bxR=new B.Q(12,12,12,4)
D.bxU=new B.Q(12,12,8,12)
D.by8=new B.Q(12,8,8,12)
D.byy=new B.Q(14,14,14,0)
D.byD=new B.Q(14,14,14,90)
D.byX=new B.Q(16,10,16,16)
D.byY=new B.Q(16,10,16,20)
D.akh=new B.Q(16,6,16,28)
D.bzx=new B.Q(18,0,18,10)
D.bzz=new B.Q(18,0,18,30)
D.bzB=new B.Q(18,10,18,12)
D.bzC=new B.Q(18,10,18,14)
D.bzW=new B.Q(18,16,14,18)
D.bA0=new B.Q(18,18,18,12)
D.bA6=new B.Q(18,26,18,12)
D.bAb=new B.Q(18,34,18,34)
D.bAc=new B.Q(18,4,18,14)
D.bAh=new B.Q(18,8,18,24)
D.bAA=new B.Q(20,16,14,4)
D.bAF=new B.Q(20,18,12,4)
D.bAK=new B.Q(20,20,12,20)
D.bAN=new B.Q(20,22,20,20)
D.bAS=new B.Q(20,6,20,6)
D.bB1=new B.Q(22,18,22,18)
D.bB9=new B.Q(22,24,22,0)
D.bBc=new B.Q(22,24,22,4)
D.bBk=new B.Q(22,60,22,22)
D.bBq=new B.Q(24,24,24,22)
D.bBA=new B.Q(26,10,60,10)
D.bBI=new B.Q(28,44,28,44)
D.bBZ=new B.Q(32,44,32,44)
D.bC6=new B.Q(38,30,38,20)
D.bCb=new B.Q(4,0,0,6)
D.bCn=new B.ii(4,4,4,4)
D.bCP=new B.ii(6,5,6,5)
D.bCU=new B.Q(6,6,8,6)
D.bD4=new B.Q(8,14,8,14)
D.bD5=new B.Q(8,22,8,22)
D.bDd=new B.Q(8,6,12,6)
D.bDm=new B.Q(8,8,8,4)
D.alb=new B.Q(9,9,9,6)
D.bDx=new B.ii(2.5,2.5,2.5,2.5)
D.bDy=new B.Q(10.5,0,10.5,0)
D.bDz=new B.Q(7,1.5,7,1.5)
D.cZh=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bDP=new B.xn(null,null,D.cZh,A.AY)
D.cW8=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bDQ=new B.xn(null,null,D.cW8,A.AY)
D.aTv=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQG=new B.y("WORD DESIGN",null,D.aTv,null,null,null,null,null,null,null,null,null)
D.bEp=new B.bA(1,A.bc,D.fQG,null)
D.fQk=new B.y("Slides database",null,Ac.t6,null,null,null,null,null,null,null,null,null)
D.fNx=new B.y("Admin only \xb7 keep as many as you like",null,U.aT_,null,null,null,null,null,null,null,null,null)
D.dqz=w([D.fQk,A.bD,D.fNx],x.p)
D.bsQ=new B.fi(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dqz,null)
D.bEs=new B.bA(1,A.bc,D.bsQ,null)
D.fHM=new B.y("NGMY logo",null,A.fw,null,null,null,null,null,null,null,null,null)
D.bEv=new B.bA(1,A.bc,D.fHM,null)
D.foj=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new B.y("TALK TO THE EDITOR",null,D.foj,null,null,null,null,null,null,null,null,null)
D.bEO=new B.bA(1,A.bc,D.fSL,null)
D.fBu=new B.y("Tell the AI what to change",null,Ac.t6,null,null,null,null,null,null,null,null,null)
D.bF8=new B.bA(1,A.bc,D.fBu,null)
D.bGk=new B.E2(!0,"video/mp4")
D.fmw=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new B.y("Move presentations between devices",null,D.fmw,null,null,null,!1,null,null,1,null,null)
D.bGo=new B.qx(A.e2,A.a5,A.f,D.fzp,null)
D.fAE=new B.y("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.bGp=new B.qx(A.e2,A.A,A.f,D.fAE,null)
D.bGE=new B.ds(1,A.cn,D.bGp,null)
D.a0V=new B.a0(60988,"MaterialIcons",!1)
D.bK2=new B.a0(61352,"MaterialIcons",!1)
D.amI=new B.a0(61531,"MaterialIcons",!1)
D.bLf=new B.a0(63062,"MaterialIcons",!1)
D.bLm=new B.a0(63109,"MaterialIcons",!1)
D.bLz=new B.a0(63206,"MaterialIcons",!1)
D.ano=new B.a0(63238,"MaterialIcons",!1)
D.bLR=new B.a0(63338,"MaterialIcons",!1)
D.a1v=new B.a0(63365,"MaterialIcons",!1)
D.a1w=new B.a0(63367,"MaterialIcons",!1)
D.a1x=new B.a0(63368,"MaterialIcons",!1)
D.anz=new B.a0(63384,"MaterialIcons",!1)
D.bM7=new B.a0(63525,"MaterialIcons",!1)
D.bMa=new B.a0(63568,"MaterialIcons",!1)
D.bMv=new B.a0(983072,"MaterialIcons",!1)
D.bMU=new B.a0(983271,"MaterialIcons",!0)
D.aoH=new B.a0(983965,"MaterialIcons",!1)
D.aoI=new B.a0(983966,"MaterialIcons",!1)
D.bNN=new B.a0(984592,"MaterialIcons",!1)
D.bO5=new B.ae(A.ud,16,A.aB,null,null,null)
D.bOc=new B.ae(A.oj,null,A.c,null,null,null)
D.aoR=new B.ae(A.qm,18,A.c,null,null,null)
D.bOv=new B.ae(A.C0,18,O.lv,null,null,null)
D.bPb=new B.ae(A.jT,11,null,null,null,null)
D.bPm=new B.ae(A.a1d,null,A.es,null,null,null)
D.bPU=new B.ae(A.rt,18,A.aB,null,null,null)
D.bQ_=new B.ae(A3.Ce,14,null,null,null,null)
D.bQ0=new B.ae(A.e9,28,A.cs,null,null,null)
D.bQc=new B.ae(A.qn,20,A.c,null,null,null)
D.bQj=new B.ae(A.yQ,null,null,null,null,null)
D.bQp=new B.ae(A.jS,18,A.iQ,null,null,null)
D.bQu=new B.ae(A.l7,null,null,null,null,null)
D.bLh=new B.a0(63065,"MaterialIcons",!1)
D.bR6=new B.ae(D.bLh,15,A.c,null,null,null)
D.bLn=new B.a0(63113,"MaterialIcons",!1)
D.bRc=new B.ae(D.bLn,null,A.ad,null,null,null)
D.bRA=new B.ae(A.ua,22,A.bL,null,null,null)
D.bRV=new B.ae(A.w9,18,null,null,null,null)
D.bS0=new B.ae(A.Ci,12,A.c,null,null,null)
D.bNq=new B.a0(983687,"MaterialIcons",!1)
D.bSb=new B.ae(D.bNq,null,A.bk,null,null,null)
D.bSk=new B.ae(A.hu,null,A.bk,null,null,null)
D.bSD=new B.ae(A.pd,22,A.c,null,null,null)
D.bSH=new B.ae(A.cz,13,A.c,null,null,null)
D.bSN=new B.ae(A.e9,26,A.aw,null,null,null)
D.bSR=new B.ae(A.rx,26,A.c,null,null,null)
D.OS=new B.ae(A.jT,8,A.c,null,null,null)
D.bTa=new B.ae(A.qm,40,A.c,null,null,null)
D.bTb=new B.ae(A.bJ_,null,null,null,null,null)
D.bTf=new B.ae(A.uo,20,null,null,null,null)
D.bNp=new B.a0(983683,"MaterialIcons",!1)
D.bTp=new B.ae(D.bNp,null,A.b_,null,null,null)
D.bTq=new B.ae(A.jT,16,A.bk,null,null,null)
D.bTL=new B.ae(A.rz,null,null,null,null,null)
D.apr=new B.ae(A.wb,22,A.c,null,null,null)
D.bTQ=new B.ae(A.e5,17,A.c,null,null,null)
D.aps=new B.ae(A.jT,9,A.c,null,null,null)
D.bTV=new B.ae(A.w6,null,null,null,null,null)
D.bJg=new B.a0(57744,"MaterialIcons",!1)
D.bU1=new B.ae(D.bJg,null,null,null,null,null)
D.bU4=new B.ae(A.w6,16,null,null,null,null)
D.bNX=new B.a0(985181,"MaterialIcons",!1)
D.Hh=new B.ae(D.bNX,null,null,null,null,null)
D.bUg=new B.ae(A.l7,16,A.bL,null,null,null)
D.bNi=new B.a0(983615,"MaterialIcons",!1)
D.bUi=new B.ae(D.bNi,12,A.c,null,null,null)
D.apy=new B.ae(A.yA,16,null,null,null,null)
D.bUq=new B.ae(A.e5,21,A.c,null,null,null)
D.bUv=new B.ae(A.hu,17,A.c,null,null,null)
D.bUw=new B.ae(A.ua,null,null,null,null,null)
D.bUN=new B.ae(A.a2b,20,A.aB,null,null,null)
D.bV1=new B.ae(A.og,22,E.ne,null,null,null)
D.bV9=new B.ae(A.rv,13,A.ad,null,null,null)
D.bVb=new B.ae(A.aot,20,A.aB,null,null,null)
D.bIY=new B.a0(57495,"MaterialIcons",!1)
D.bVg=new B.ae(D.bIY,null,null,null,null,null)
D.bVk=new B.ae(A.oh,18,A.c,null,null,null)
D.bVH=new B.ae(A.ur,28,A.c,null,null,null)
D.bVS=new B.ae(D.ano,null,A.aD,null,null,null)
D.bVT=new B.ae(A.qn,22,A.c,null,null,null)
D.apH=new B.ae(A.a0R,16,null,null,null,null)
D.bWF=new B.ae(A.ua,32,A.c,null,null,null)
D.bXn=new B.ae(A.jg,22,A.c,null,null,null)
D.bXr=new B.ae(A.rx,22,A.ad,null,null,null)
D.apW=new B.ae(A.ud,null,A.bY,null,null,null)
D.bYo=new B.ae(A.uc,18,null,null,null,null)
D.bZ_=new B.ae(A.e5,18,A.bG,null,null,null)
D.a2B=new B.ae(A.cz,18,A.aB,null,null,null)
D.bZ6=new B.ae(A.aon,null,null,null,null,null)
D.bZx=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aTk,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.feh=new B.F(!0,A.bM,null,null,null,null,null,A.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZP=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.feh,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.c_f=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.d2r=w([A.dI,A.aD],x.O)
D.c1l=new B.a9(A.a5,A.a8,A.x,D.d2r,null,null)
D.c1w=new B.a9(A.b4,A.b7,A.Vb,A.awZ,null,null)
D.bbO=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bgI=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bke=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bel=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cNJ=w([D.bbO,D.bgI,D.bke,D.bel],x.O)
D.c1P=new B.a9(A.ay,A.aE,A.x,D.cNJ,A.HO,null)
D.dqI=w([A.cR,A.bA,A.b5],x.O)
D.c1R=new B.a9(A.b4,A.b7,A.Vb,D.dqI,null,null)
D.dsb=w([A.bk,A.cc],x.O)
D.c1W=new B.a9(A.a5,A.a8,A.x,D.dsb,null,null)
D.dmV=w([A.hI,A.d1,A.aC],x.O)
D.c1Y=new B.a9(A.ay,A.aE,A.x,D.dmV,null,null)
D.d8F=w([A.cO,A.ff],x.O)
D.c21=new B.a9(A.a5,A.a8,A.x,D.d8F,null,null)
D.dqB=w([O.lv,A.d1],x.O)
D.aqG=new B.a9(A.a5,A.a8,A.x,D.dqB,null,null)
D.bhq=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dqy=w([D.bhq,D.xU,A.c1],x.O)
D.c26=new B.a9(A.a5,A.a8,A.x,D.dqy,null,null)
D.d47=w([A.bj,A.cU,A.ei],x.O)
D.c27=new B.a9(A.ay,A.aE,A.x,D.d47,null,null)
D.P7=new B.a9(A.a5,A.a8,A.x,A.I2,null,null)
D.bqq=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cGG=w([D.bqq,A.c1,A.jt],x.O)
D.aqL=new B.a9(A.ay,A.aE,A.x,D.cGG,null,null)
D.def=w([A.tB,A.az,D.Bk],x.O)
D.c39=new B.a9(A.a5,A.a8,A.x,D.def,null,null)
D.brQ=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bfl=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.blm=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d3e=w([D.brQ,D.bfl,D.blm],x.O)
D.aqM=new B.a9(A.a5,A.a8,A.x,D.d3e,null,null)
D.bhs=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c57=w([Au.aia,D.bhs],x.O)
D.c3i=new B.a9(A.b4,A.b7,A.x,D.c57,null,null)
D.d1c=w([A.nc,A.by],x.O)
D.c3m=new B.a9(A.b4,A.b7,A.x,D.d1c,null,null)
D.djz=w([A.aD,A.dF],x.O)
D.c3t=new B.a9(A.a5,A.a8,A.x,D.djz,null,null)
D.ah2=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.ayJ=w([D.ah2,D.jr,D.LG],x.O)
D.c3V=new B.a9(A.ay,A.aE,A.x,D.ayJ,null,null)
D.cGy=w([A.du,A.dJ],x.O)
D.c45=new B.a9(A.b4,A.b7,A.x,D.cGy,null,null)
D.dgt=w([A.xC,Ax.Fl],x.O)
D.c4U=new B.a9(A.a5,A.a8,A.x,D.dgt,null,null)
D.fJl=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c54=new B.pU(null,D.fJl,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zc=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a6z=new C.l0(2,"elegantNavy")
D.hrd=w([A.Yi,D.jr,A.c1],x.O)
D.jZ=new C.xN(0,"classic")
D.a6m=new C.jr("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a6z,4294967035,4279378237,4290283019,D.jZ)
D.aI8=new C.l0(3,"elegantGold")
D.bbj=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bcq=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.afv=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hqG=w([D.bbj,D.bcq,D.afv],x.O)
D.a6k=new C.jr("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aI8,4294966515,4281016592,4289102906,D.jZ)
D.dNg=new C.l0(22,"goldRibbon")
D.hqC=w([A.Yi,D.jr,A.ih],x.O)
D.a6d=new C.jr("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dNg,4294967035,4279378237,4291404327,D.jZ)
D.dNh=new C.l0(23,"goldBaroque")
D.agc=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hqI=w([D.agc,A.az,A.jt],x.O)
D.a6e=new C.jr("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dNh,4294964964,4283053072,4292128567,D.jZ)
D.dNj=new C.l0(4,"elegantEmerald")
D.bdJ=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.beK=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hqO=w([D.bdJ,D.beK,A.ih],x.O)
D.a6f=new C.jr("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dNj,4294376440,4279122734,4291404327,D.jZ)
D.dNk=new C.l0(5,"elegantBurgundy")
D.bj0=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hqV=w([D.bj0,A.aeJ,A.ih],x.O)
D.a6i=new C.jr("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dNk,4294965238,4283043359,4291404327,D.jZ)
D.dNd=new C.l0(19,"goldFiligree")
D.Mn=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hqJ=w([D.Mn,A.az,A.jt],x.O)
D.a6g=new C.jr("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dNd,4294966259,4279378237,4292128567,D.jZ)
D.dNe=new C.l0(20,"goldLaurel")
D.bqg=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hqW=w([A.Lz,A.ih,D.bqg],x.O)
D.a6h=new C.jr("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dNe,4294966776,4282000405,4291404327,D.jZ)
D.dNf=new C.l0(21,"goldCrest")
D.aeA=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bqn=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hqL=w([D.aeA,A.az,D.bqn],x.O)
D.a6l=new C.jr("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dNf,4294965484,4283053072,4292128567,D.jZ)
D.dNi=new C.l0(24,"goldStar")
D.brH=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hqP=w([D.brH,A.az,D.jr],x.O)
D.a6j=new C.jr("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dNi,4294966518,4279378237,4292128567,D.jZ)
D.Hs=w([D.a6m,D.a6k,D.a6d,D.a6e,D.a6f,D.a6i,D.a6g,D.a6h,D.a6l,D.a6j],x.h)
D.qz=new C.mG(0,"blank")
D.SK=new C.mG(1,"title")
D.mS=new C.mG(2,"titleContent")
D.e6R=new C.mG(3,"twoColumn")
D.Dm=new C.mG(4,"section")
D.e6S=new C.mG(5,"comparison")
D.IE=new C.mG(6,"flashcard")
D.IF=new C.mG(7,"quiz")
D.IG=new C.mG(8,"worksheet")
D.ar6=w([D.qz,D.SK,D.mS,D.e6R,D.Dm,D.e6S,D.IE,D.IF,D.IG],B.av("O<mG>"))
D.azQ=w([Aa.XF,A.dJ],x.O)
D.kJ=w([A.c1,A.bL,A.hT,A.hS,D.Bk],x.O)
D.dJd=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.azQ,D.kJ)
D.bqB=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.biZ=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d1o=w([D.bqB,D.biZ],x.O)
D.dJ4=new C.j2("confetti","Golden Confetti","Together we rise",D.d1o,D.kJ)
D.cZn=w([A.nQ,A.Xg],x.O)
D.dJ5=new C.j2("crown","Crown of Glory","Built for our community",D.cZn,D.kJ)
D.bf8=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.biC=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d5z=w([D.bf8,D.biC],x.O)
D.uz=w([A.bM,A.aP,A.c,A.aL,A.al],x.O)
D.dJ_=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d5z,D.uz)
D.bkg=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dgz=w([G.aec,D.bkg],x.O)
D.dJg=new C.j2("champagne","Champagne Toast","Cheers to every member",D.dgz,D.kJ)
D.dJh=new C.j2("diamonds","Diamond Rain","Every member is a jewel",Y.aAw,D.uz)
D.bcf=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bi4=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dm9=w([D.bcf,D.bi4],x.O)
D.dIV=new C.j2("starburst","Golden Starburst","Thank you!",D.dm9,D.kJ)
D.c5e=w([A.fa,A.xO],x.O)
D.aem=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.QF=w([A.oX,A.id,A.vM,A.nR,D.aem],x.O)
D.dJo=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c5e,D.QF)
D.cYC=w([A.Xt,A.w],x.O)
D.dJc=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cYC,D.uz)
D.bot=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dcZ=w([A.jL,D.bot],x.O)
D.dJ7=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.dcZ,D.kJ)
D.bm2=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bk1=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dhw=w([D.bm2,D.bk1],x.O)
D.dIX=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.dhw,D.kJ)
D.doW=w([A.du,A.hR],x.O)
D.dJ2=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.doW,D.kJ)
D.bgk=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cWt=w([A.xQ,D.bgk],x.O)
D.dIZ=new C.j2("hearts","Floating Hearts","Made with love",D.cWt,D.QF)
D.bcS=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bdQ=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dqw=w([D.bcS,D.bdQ],x.O)
D.dJn=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dqw,D.QF)
D.bpu=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dmw=w([A.l1,D.bpu],x.O)
D.dIU=new C.j2("butterflies","Golden Butterflies","New beginnings",D.dmw,D.kJ)
D.bli=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cXx=w([D.bli,A.w],x.O)
D.dJf=new C.j2("neon","Neon Night","Let's go!",D.cXx,D.uz)
D.bhI=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.djL=w([A.LZ,D.bhI],x.O)
D.dJi=new C.j2("disco","Disco Ball","Party time",D.djL,D.uz)
D.blT=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.djg=w([A.hI,D.blT],x.O)
D.dIY=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.djg,D.kJ)
D.diS=w([A.pR,A.dJ],x.O)
D.dJj=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.diS,D.uz)
D.bff=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dj5=w([D.bff,A.dJ],x.O)
D.dJm=new C.j2("snow","Winter Gala","Warm wishes to all",D.dj5,D.uz)
D.bbs=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bcD=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dpm=w([D.bbs,D.bcD],x.O)
D.dJb=new C.j2("laurel","Laurel Victory","We did it together",D.dpm,D.kJ)
D.bbi=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.biy=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cVs=w([D.bbi,D.biy],x.O)
D.dJl=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cVs,D.kJ)
D.bjI=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cGv=w([G.Bj,D.bjI],x.O)
D.dJ8=new C.j2("kente","Kente Pride","Proud of our roots",D.cGv,D.kJ)
D.bmH=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bpR=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d7k=w([D.bmH,D.bpR],x.O)
D.dJ3=new C.j2("trophy","Trophy Shine","Winners together",D.d7k,D.kJ)
D.djc=w([Ap.LM,A.w],x.O)
D.dIW=new C.j2("shooting","Shooting Stars","Make a wish",D.djc,D.uz)
D.bbA=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ahX=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dpF=w([D.bbA,D.ahX],x.O)
D.dJ9=new C.j2("bokeh","Golden Bokeh","Shine bright",D.dpF,D.kJ)
D.bc0=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.ddP=w([D.bc0,A.w],x.O)
D.dJ1=new C.j2("orbits","Golden Orbits","Always moving forward",D.ddP,D.kJ)
D.bpv=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dac=w([A.afr,D.bpv],x.O)
D.dJ6=new C.j2("flowers","Blooming Garden","Growing together",D.dac,D.QF)
D.bbM=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bcv=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.don=w([D.bbM,D.bcv],x.O)
D.dJ0=new C.j2("music","Music Party","Celebrate with us",D.don,D.uz)
D.bdv=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bqj=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cWG=w([D.bdv,D.bqj],x.O)
D.dJk=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cWG,D.kJ)
D.dai=w([G.Bj,D.ahX],x.O)
D.dJe=new C.j2("sparklers","Golden Sparklers","Light up the night",D.dai,D.kJ)
D.dJa=new C.j2("city","City Lights","The whole city celebrates",D.azQ,D.kJ)
D.HB=w([D.dJd,D.dJ4,D.dJ5,D.dJ_,D.dJg,D.dJh,D.dIV,D.dJo,D.dJc,D.dJ7,D.dIX,D.dJ2,D.dIZ,D.dJn,D.dIU,D.dJf,D.dJi,D.dIY,D.dJj,D.dJm,D.dJb,D.dJl,D.dJ8,D.dJ3,D.dIW,D.dJ9,D.dJ1,D.dJ6,D.dJ0,D.dJk,D.dJe,D.dJa],B.av("O<j2>"))
D.exV=new B.z("","No ring")
D.eO8=new B.z("platinum","Platinum")
D.eKh=new B.z("glow","Glow")
D.eBD=new B.z("double","Double line")
D.eAx=new B.z("framed","Gallery frame")
D.exr=new B.z("rosegold","Rose gold")
D.eL5=new B.z("jewels","Jeweled")
D.eHL=new B.z("aurora","Aurora")
D.CF=w([D.exV,A.Tu,D.eO8,D.eKh,H.aOQ,D.eBD,A.aOO,D.eAx,D.exr,D.eL5,D.eHL],x.L)
D.cpM=w([D.a6g,D.a6h,D.a6l,D.a6d,D.a6e,D.a6j],x.h)
D.bUE=new B.ae(G.ami,16,null,null,null,null)
D.b6p=new B.vF(A.bi,D.bUE,null,x.U)
D.bJp=new B.a0(58027,"MaterialIcons",!1)
D.bOb=new B.ae(D.bJp,16,null,null,null,null)
D.b6n=new B.vF(A.L,D.bOb,null,x.U)
D.bJq=new B.a0(58030,"MaterialIcons",!1)
D.bSi=new B.ae(D.bJq,16,null,null,null,null)
D.b6q=new B.vF(A.dV,D.bSi,null,x.U)
D.cw4=w([D.b6p,D.b6n,D.b6q],B.av("O<vF<q9>>"))
D.cDN=w([A.Bo,A.ho],x.O)
D.cDO=w([A.bj,A.be,A.ei],x.O)
D.Qu=w([A.bL,A.hS,A.hT,A.az,A.nR],x.O)
D.cGB=w([A.c1,D.jr,D.LG],x.O)
D.cH8=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eve=new B.z(4278913286,4280030216)
D.evw=new B.z(4279373061,4278518787)
D.evD=new B.z(4279898630,4278847235)
D.d6G=w([D.eve,D.evw,D.evD],x.n)
D.d29=w(["\u265b","\u269c","\u2726"],x.s)
D.dNc=new C.xP("Royal Onyx & Gold",D.d6G,4292128567,4294370209,4294965479,3874020544,D.d29)
D.ev1=new B.z(4278326799,4278598442)
D.ev3=new B.z(4278395929,4278258953)
D.eva=new B.z(4278599728,4278327826)
D.doN=w([D.ev1,D.ev3,D.eva],x.n)
D.cXp=w(["\u269c","\u2756","\u2727"],x.s)
D.dN9=new C.xP("Imperial Emerald",D.doN,4293050997,4294699968,4294180856,3872254170,D.cXp)
D.ev4=new B.z(4278455076,4278918747)
D.ev9=new B.z(4278587439,4278322714)
D.evn=new B.z(4279051376,4278455076)
D.dmR=w([D.ev4,D.ev9,D.evn],x.n)
D.dex=w(["\u2654","\u2726","\u2748"],x.s)
D.dN3=new C.xP("Sapphire Crown",D.dmR,4291417834,4294967295,4294310143,3871986666,D.dex)
D.evB=new B.z(4279894534,4283041554)
D.evN=new B.z(4281008906,4279042307)
D.evV=new B.z(4284221976,4279894534)
D.dsT=w([D.evB,D.evN,D.evV],x.n)
D.cYL=w(["\u265b","\u2766","\u2726"],x.s)
D.dN5=new C.xP("Ruby Throne",D.dsT,4293378685,4294963145,4294964466,3874213833,D.cYL)
D.evv=new B.z(4279371039,4281995100)
D.evF=new B.z(4280092723,4278714896)
D.evS=new B.z(4283045242,4279371039)
D.dp9=w([D.evv,D.evF,D.evS],x.n)
D.dnd=w(["\u2655","\u2756","\u2727"],x.s)
D.dNa=new C.xP("Amethyst Palace",D.dp9,4293314984,4294963421,4294702591,3873229802,D.dnd)
D.ev6=new B.z(4278519045,4280032287)
D.evo=new B.z(4279111184,4278321666)
D.evK=new B.z(4280492839,4278716426)
D.dlD=w([D.ev6,D.evo,D.evK],x.n)
D.dcM=w(["\u2726","\u25c6","\u2742"],x.s)
D.dN7=new C.xP("Obsidian & Platinum",D.dlD,4293256418,4294967295,4294638330,3872378836,D.dcM)
D.evC=new B.z(4279896588,4282194463)
D.evL=new B.z(4280553487,4279043334)
D.evT=new B.z(4283048488,4279896588)
D.dcf=w([D.evC,D.evL,D.evT],x.n)
D.dqZ=w(["\u2766","\u273f","\u2727"],x.s)
D.dN4=new C.xP("Rose Gold Velvet",D.dcf,4293440672,4294960345,4294964979,3874214602,D.dqZ)
D.ev7=new B.z(4278520340,4279180595)
D.evc=new B.z(4278718495,4278322443)
D.evz=new B.z(4279510591,4278520340)
D.cNq=w([D.ev7,D.evc,D.evz],x.n)
D.ddt=w(["\u269c","\u2736","\u2756"],x.s)
D.dN8=new C.xP("Midnight Brass",D.cNq,4291405148,4293975208,4294439914,3872837564,D.ddt)
D.ew7=new B.z(4294703086,4293780428)
D.ew3=new B.z(4294307549,4293187253)
D.ew8=new B.z(4294966517,4293977807)
D.d02=w([D.ew7,D.ew3,D.ew8],x.n)
D.ddT=w(["\u269c","\u265b","\u2726"],x.s)
D.dNb=new C.xP("Ivory Marble & Gold",D.d02,4289760572,4286209048,4280951062,3863625518,D.ddT)
D.evi=new B.z(4278978566,4280555024)
D.evy=new B.z(4279504137,4278518530)
D.evP=new B.z(4281211923,4278978566)
D.cYB=w([D.evi,D.evy,D.evP],x.n)
D.dnY=w(["\u2742","\u2726","\u265c"],x.s)
D.dN6=new C.xP("Onyx & Copper",D.cYB,4291856987,4294365880,4294964718,3873885630,D.dnY)
D.cHg=w([D.dNc,D.dN9,D.dN3,D.dN5,D.dNa,D.dN7,D.dN4,D.dN8,D.dNb,D.dN6],B.av("O<xP>"))
D.cJD=w([A.az,D.Bk,A.hS],x.O)
D.eDT=new B.z("Original",null)
D.eE2=new B.z("Wide 16:9",1.7777777777777777)
D.eGo=new B.z("Landscape 3:2",1.5)
D.eDj=new B.z("Photo 4:3",1.3333333333333333)
D.eRZ=new B.z("Portrait 3:4",0.75)
D.ax7=w([D.eDT,D.eE2,D.eGo,D.eDj,H.aOE,D.eRZ],B.av("O<+(n,K?)>"))
D.ax8=w([A.hS,A.c5,A.b9,A.bw],x.O)
D.eGA=new B.z("","Original")
D.eIt=new B.z("circle","Circle")
D.eOW=new B.z("rounded","Rounded")
D.ePV=new B.z("triangle","Triangle")
D.eKy=new B.z("hexagon","Hexagon")
D.eIT=new B.z("diamond","Diamond")
D.eHK=new B.z("arch","Arch")
D.CL=w([D.eGA,D.eIt,D.eOW,D.ePV,D.eKy,D.eIT,D.eHK],x.L)
D.dIl=new C.lm("classic_blue","Classic Blue","Normal",A.bk,A.c,A.kB,A.d7,A.aJ)
D.dIB=new C.lm("campus_green","Campus Green","Normal",A.b_,A.na,A.tE,A.h3,A.e7)
D.dIs=new C.lm("warm_sand","Warm Sand","Normal",A.dY,A.hT,A.bL,A.ij,A.nX)
D.dIz=new C.lm("slate_minimal","Slate Minimal","Normal",A.br,A.aP,A.aL,A.M,A.aJ)
D.dIk=new C.lm("coral_fresh","Coral Fresh","Normal",A.cb,A.ie,A.pK,A.kd,A.tw)
D.dIA=new C.lm("lavender_calm","Lavender Calm","Normal",A.b5,A.pN,A.xJ,A.oW,A.jp)
D.dIm=new C.lm("ocean_breeze","Ocean Breeze","Normal",A.ff,A.rd,A.tt,A.ty,A.nY)
D.aha=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dIx=new C.lm("berry_pop","Berry Pop","Normal",A.f4,D.aha,A.kx,G.YS,A.Bp)
D.dIn=new C.lm("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.du,A.kx,A.cr)
D.dIw=new C.lm("executive_navy","Executive Navy","Professional",A.d2,A.agr,A.d7,A.l_,A.bM)
D.dIu=new C.lm("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bn,A.M,A.aP,A.cr)
D.dIo=new C.lm("corporate_steel","Corporate Steel","Professional",A.o0,A.M,A.mz,A.fh,A.bM)
D.dIr=new C.lm("gold_luxe","Gold Luxe","Luxury",A.mu,A.dO,A.o4,A.lX,A.bL)
D.blY=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dIv=new C.lm("rose_gold_elite","Rose Gold Elite","Luxury",A.ho,D.blY,A.YD,A.id,A.nR)
D.dIy=new C.lm("platinum_night","Platinum Night","Luxury",A.cr,A.dJ,A.bn,A.aP,A.aL)
D.dIC=new C.lm("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.pU,A.f5,A.q1,A.jI)
D.dIj=new C.lm("royal_purple","Royal Purple","Luxury",A.n9,A.XL,A.jp,A.kx,A.Ly)
D.dIt=new C.lm("neon_pitch","Neon Pitch","Bold",A.b9,A.dJ,A.M,A.b2,A.aL)
D.dIq=new C.lm("crimson_impact","Crimson Impact","Bold",A.by,A.jL,A.ej,A.re,A.eO)
D.dIp=new C.lm("sunset_gallery","Sunset Gallery","Bold",A.fr,A.tw,A.kd,A.pK,A.my)
D.HK=w([D.dIl,D.dIB,D.dIs,D.dIz,D.dIk,D.dIA,D.dIm,D.dIx,D.dIn,D.dIw,D.dIu,D.dIo,D.dIr,D.dIv,D.dIy,D.dIC,D.dIj,D.dIt,D.dIq,D.dIp],B.av("O<lm>"))
D.cVb=w([A.c1,D.jr],x.O)
D.dcw=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eHw=new B.z("Faces & people",D.dcw)
D.cJH=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.etT=new B.z("Ideas & work",D.cJH)
D.d2G=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eKD=new B.z("Nature",D.d2G)
D.dcF=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eDR=new B.z("Places & things",D.dcF)
D.d6d=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eHP=new B.z("Symbols",D.d6d)
D.cVh=w([D.eHw,D.etT,D.eKD,D.eDR,D.eHP],B.av("O<+(n,ai<n>)>"))
D.bbR=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cVE=w([A.c1,D.afv,D.bbR],x.O)
D.b5J=new B.ac(0,A.G,A.Lv,A.aIW,40)
D.b5p=new B.ac(0,A.G,A.nV,A.ep,8)
D.cVR=w([D.b5J,D.b5p],x.V)
D.cWo=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.axw=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a3U=w([A.hS,A.ei,A.by,A.av,A.cb],x.O)
D.cXj=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.afK=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cXu=w([A.Ys,D.afK,A.Ys],x.O)
D.cXA=w([A.ih,D.jr,D.LG],x.O)
D.eDD=new B.z(A.bi,D.a1w)
D.eF3=new B.z(A.L,D.a1v)
D.eyH=new B.z(A.dV,D.a1x)
D.cYw=w([D.eDD,D.eF3,D.eyH],B.av("O<+(q9,a0)>"))
D.cT=new C.J5(0,"text")
D.lK=new C.J5(1,"image")
D.f8=new C.J5(2,"shape")
D.SJ=new C.J5(3,"pdf")
D.lg=new C.J5(4,"signature")
D.a6G=new C.J5(5,"bio")
D.cZt=w([D.cT,D.lK,D.f8,D.SJ,D.lg,D.a6G],B.av("O<J5>"))
D.cZu=w([A.bp,A.cD],B.av("O<I0>"))
D.d_7=w(["School","Documents","Sign & present"],x.s)
D.b5O=new B.ac(0,A.G,A.ahM,A.uT,28)
D.d_v=w([D.b5O],x.V)
D.d_O=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.QN=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.axX=w([A.hS,A.FF,A.aL,A.c,A.oX,A.az],x.O)
D.eRn=new B.z(0.1,0.08)
D.eKB=new B.z(0.3,0.05)
D.ey9=new B.z(0.55,0.1)
D.eCz=new B.z(0.8,0.06)
D.eFP=new B.z(0.92,0.16)
D.eFi=new B.z(0.2,0.2)
D.eD3=new B.z(0.7,0.22)
D.eJf=new B.z(0.05,0.4)
D.eGg=new B.z(0.95,0.45)
D.eyX=new B.z(0.12,0.7)
D.eBh=new B.z(0.88,0.75)
D.eBp=new B.z(0.4,0.9)
D.ewp=new B.z(0.65,0.93)
D.eCc=new B.z(0.25,0.97)
D.eDA=new B.z(0.85,0.9)
D.ezR=new B.z(0.5,0.04)
D.d1j=w([D.eRn,D.eKB,D.ey9,D.eCz,D.eFP,D.eFi,D.eD3,D.eJf,D.eGg,D.eyX,D.eBh,D.eBp,D.ewp,D.eCc,D.eDA,D.ezR],x.G)
D.d1t=w([A.c,A.ho,A.aQ,A.aW],x.O)
D.e8t=new C.jO("office_blue","Office Blue",A.bk,A.d7,A.aJ,A.c,A.kB)
D.e8E=new C.jO("campus_green","Campus Green",A.b_,A.h3,A.e7,A.na,A.tE)
D.e8u=new C.jO("sunset","Sunset",A.fr,A.kd,A.nX,A.ie,A.pK)
D.e8v=new C.jO("midnight","Midnight",A.aD,A.kx,A.cr,A.M,A.du)
D.e8G=new C.jO("classic","Classic",A.d1,A.dO,A.lY,A.hT,A.fU)
D.e8D=new C.jO("rose_gold","Rose Gold",A.ho,A.xR,A.xQ,A.vM,A.Bo)
D.e8o=new C.jO("ocean_teal","Ocean Teal",A.ff,A.ty,A.nY,A.rd,A.tt)
D.e8n=new C.jO("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aP,A.aL)
D.e8m=new C.jO("neon_night","Neon Night",A.b9,A.b2,A.aL,A.dJ,A.M)
D.e8y=new C.jO("lavender","Lavender",A.b5,A.oW,A.jp,A.pN,A.xJ)
D.e8A=new C.jO("coral","Coral",A.cb,A.kd,A.tw,A.ie,A.my)
D.e8p=new C.jO("forest","Forest",A.hc,A.e_,A.cp,A.lZ,A.es)
D.e8q=new C.jO("berry","Berry",A.f4,G.YS,A.Bp,D.aha,A.kx)
D.e8x=new C.jO("sand","Sand",A.dY,A.ij,A.nX,A.hT,A.bL)
D.e8C=new C.jO("ice","Ice",A.o0,A.Ff,A.aJ,A.n7,A.fh)
D.e8s=new C.jO("charcoal","Charcoal",A.al,A.aP,A.cr,A.bn,A.M)
D.e8l=new C.jO("mint","Mint",A.aW,A.fL,A.h3,A.lZ,A.q1)
D.e8B=new C.jO("crimson","Crimson",A.by,A.nc,A.jL,A.FD,A.re)
D.beJ=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.e8w=new C.jO("gold","Gold",A.mu,A.xC,A.o4,D.beJ,A.lX)
D.e8z=new C.jO("aqua","Aqua",A.bS,A.Fs,A.oU,A.pP,A.oY)
D.e8r=new C.jO("plum","Plum",A.n9,A.xO,A.Bp,A.Fg,A.ra)
D.e8F=new C.jO("steel","Steel",A.d2,A.d7,A.bn,A.kB,A.l_)
D.a49=w([D.e8t,D.e8E,D.e8u,D.e8v,D.e8G,D.e8D,D.e8o,D.e8n,D.e8m,D.e8y,D.e8A,D.e8p,D.e8q,D.e8x,D.e8C,D.e8s,D.e8l,D.e8B,D.e8w,D.e8z,D.e8r,D.e8F],B.av("O<jO>"))
D.d1O=w([A.c1,A.jt],x.O)
D.SL=new C.hF(10,"rotate3d")
D.II=new C.hF(8,"flip")
D.aIr=new C.hF(19,"spiral")
D.qA=new C.hF(16,"bounce")
D.aIu=new C.hF(9,"flipVertical")
D.d1P=w([D.SL,D.II,D.aIr,D.qA,D.aIu],x.i)
D.ee=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d2c=w([0.62,1],x.x)
D.d2P=w([0,0.32,0.68,1],x.x)
D.mT=new C.hF(6,"zoom")
D.uN=new C.hF(4,"slideUp")
D.uM=new C.hF(2,"slideLeft")
D.d2Y=w([D.mT,D.II,D.uN,D.SL,D.uM],x.i)
D.d3s=w([A.c5,A.ho,A.id,A.hS,A.c],x.O)
D.b5E=new B.ac(0,A.G,D.afZ,A.uT,30)
D.d4c=w([D.b5E],x.V)
D.ejE=new B.t(0,-2.5)
D.eju=new B.t(-2.5,0)
D.ehI=new B.t(2.5,0)
D.d4f=w([A.SZ,A.a76,A.aJy,A.a75,D.ejE,H.aJu,D.eju,D.ehI],x.dN)
D.HQ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d4M=w([23,114,69,56,80,144],x.t)
D.d5f=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d5I=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d7p=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d7t=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bh=new C.uU(0,"rectangle")
D.eS=new C.uU(1,"circle")
D.lh=new C.uU(6,"hexagon")
D.d7I=w([D.bh,D.eS,D.lh],x.m)
D.os=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ahi=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d8f=w([D.ahi,A.e_],x.O)
D.eyq=new B.z("","Classic")
D.ewE=new B.z("caps","Bold caps")
D.eJi=new B.z("elegant","Elegant")
D.ePf=new B.z("shadow","Shadow")
D.eCX=new B.z("neon","Neon glow")
D.eN_=new B.z("marker","Highlighter")
D.ePt=new B.z("stamp","Stamp")
D.eBP=new B.z("threed","3D")
D.eJP=new B.z("fire","Fire")
D.eKN=new B.z("ice","Ice")
D.eIs=new B.z("chalk","Chalk")
D.eIx=new B.z("comic","Comic")
D.ePw=new B.z("sunset","Sunset")
D.eQK=new B.z("softglow","Soft glow")
D.eLO=new B.z("lowercase","Lowercase")
D.eJ0=new B.z("double","Echo")
D.eQT=new B.z("whisper","Whisper")
D.ayU=w([D.eyq,D.ewE,D.eJi,D.ePf,D.eCX,H.aOP,D.eN_,D.ePt,H.aOR,D.eBP,H.aOJ,D.eJP,D.eKN,D.eIs,D.eIx,A.Tu,D.ePw,D.eQK,D.eLO,D.eJ0,D.eQT],x.L)
D.d9z=w([3,5,7,10,12,15],x.t)
D.db5=w([A.c5,A.bL,A.c,A.eG,A.cR],x.O)
D.dA1=new C.tu(10,"cardWorld")
D.De=new C.BI(3,"rounded")
D.dQb=new C.lp("world","NGMY World",D.dA1,D.De,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dA2=new C.tu(11,"cardSplit")
D.dQ7=new C.lp("business","Business Wire",D.dA2,D.De,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dA3=new C.tu(12,"cardBreaking")
D.dQk=new C.lp("breaking","Breaking Red",D.dA3,D.De,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dA4=new C.tu(13,"cardFeature")
D.dQd=new C.lp("feature","Tech Feature",D.dA4,D.De,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aGY=new C.tu(6,"circle")
D.aGS=new C.BI(4,"circle")
D.dQh=new C.lp("parchment","Royal Circle",D.aGY,D.aGS,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dQ6=new C.lp("ocean","Blue Ocean",D.aGY,D.aGS,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dA7=new C.tu(7,"rail")
D.aGR=new C.BI(1,"double")
D.dQ8=new C.lp("forest","Green Leaf",D.dA7,D.aGR,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aGV=new C.tu(1,"sideBySide")
D.dQm=new C.lp("herald","NGMY Herald",D.aGV,D.De,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aGU=new C.tu(0,"classic")
D.a5T=new C.BI(9,"shadow")
D.dQl=new C.lp("daily","The Daily",D.aGU,D.a5T,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dA5=new C.tu(2,"splash")
D.aGT=new C.BI(6,"cutCorner")
D.dQ5=new C.lp("tabloid","Big Tabloid",D.dA5,D.aGT,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aGZ=new C.tu(9,"minimal")
D.dQg=new C.lp("modern","Modern Digest",D.aGZ,D.De,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aGW=new C.tu(3,"magazine")
D.aGQ=new C.BI(0,"plain")
D.dQc=new C.lp("midnight","Midnight Edition",D.aGW,D.aGQ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dA8=new C.tu(8,"banner")
D.dQe=new C.lp("metro","Metro Wire",D.dA8,D.aGT,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dA0=new C.BI(8,"arch")
D.dQf=new C.lp("sunrise","Sunrise Post",D.aGW,D.dA0,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aGX=new C.tu(5,"scrapbook")
D.dA_=new C.BI(5,"tape")
D.dQa=new C.lp("neon","Neon Beat",D.aGX,D.dA_,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dA6=new C.tu(4,"wrap")
D.dQn=new C.lp("gold","Golden Press",D.dA6,D.a5T,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dQo=new C.lp("minimal","Paper White",D.aGZ,D.a5T,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dQ9=new C.lp("gazette","Fresh Gazette",D.aGU,D.aGR,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dQj=new C.lp("times","Classic Times",D.aGV,D.aGQ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Sg=new C.BI(2,"polaroid")
D.dQi=new C.lp("scrapbook","Memory Scrapbook",D.aGX,D.Sg,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a4n=w([D.dQb,D.dQ7,D.dQk,D.dQd,D.dQh,D.dQ6,D.dQ8,D.dQm,D.dQl,D.dQ5,D.dQg,D.dQc,D.dQe,D.dQf,D.dQa,D.dQn,D.dQo,D.dQ9,D.dQj,D.dQi],B.av("O<lp>"))
D.dbh=w([0.45,1],x.x)
D.HT=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dbI=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hm4=new C.oG("Original",0,1,1,0,0,0)
D.hm8=new C.oG("Black & white",0,1.1,0,0,0,0)
D.hlW=new C.oG("Noir",-0.05,1.55,0,0,0,0)
D.hm_=new C.oG("Sepia",0,1,0.25,0.9,0,0)
D.hlZ=new C.oG("Vivid",0,1.15,1.6,0,0,0)
D.hlS=new C.oG("Pop",0,1.3,1.9,0,0,0)
D.hlU=new C.oG("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hm5=new C.oG("Matte",0,0.9,0.85,0,0,0.55)
D.hm0=new C.oG("Cool",0,1.05,1,-0.8,0,0)
D.hm7=new C.oG("Warm",0.03,1.05,1.1,0.8,0,0)
D.hlT=new C.oG("Golden hour",0.04,1,1.25,1,0,0)
D.hlY=new C.oG("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hm6=new C.oG("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hlX=new C.oG("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hm2=new C.oG("Retro",0,0.9,0.7,0.4,0,0.35)
D.hm1=new C.oG("Forest",0,1,1.2,-0.1,-0.45,0)
D.hm3=new C.oG("Rose",0,1,1.1,0.3,0.4,0)
D.hlV=new C.oG("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dbJ=w([D.hm4,D.hm8,D.hlW,D.hm_,D.hlZ,D.hlS,D.hlU,D.hm5,D.hm0,D.hm7,D.hlT,D.hlY,D.hm6,D.hlX,D.hm2,D.hm1,D.hm3,D.hlV],B.av("O<oG>"))
D.bbd=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dbL=w([D.ahi,A.e_,D.bbd],x.O)
D.etM=new B.z(0.12,0.3)
D.eKY=new B.z(0.26,0.75)
D.eJe=new B.z(0.8,0.22)
D.ePF=new B.z(0.9,0.7)
D.eLN=new B.z(0.5,0.15)
D.eNS=new B.z(0.65,0.85)
D.eAn=new B.z(0.08,0.85)
D.dbZ=w([D.etM,D.eKY,D.eJe,D.ePF,D.eLN,D.eNS,D.eAn],x.G)
D.az5=w([A.b9,A.c5,A.bw,A.bj],x.O)
D.dcQ=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dd1=w([A.c,A.fh,A.dt,A.vB],x.O)
D.beZ=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.de4=w([D.beZ,D.afK],x.O)
D.de6=w([A.tB,A.az],x.O)
D.del=w([0,0.25,0.75,1],x.x)
D.den=w([A.xF,A.oX],x.O)
D.aI1=new C.l0(10,"kenteSunset")
D.hqE=w([D.agc,A.k8,A.az],x.O)
D.dLw=new C.jr("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aI1,4294964964,4282000405,4279983648,D.jZ)
D.aI2=new C.l0(11,"indigoMudcloth")
D.bck=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hqS=w([D.bck,A.afH,A.ih],x.O)
D.dLE=new C.jr("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aI2,4294439140,4279903102,4279903102,D.jZ)
D.aI3=new C.l0(12,"adinkraRoyal")
D.br4=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hqT=w([D.aeA,D.br4,A.az],x.O)
D.dLG=new C.jr("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aI3,4294965484,4285218591,4287322667,D.jZ)
D.aI4=new C.l0(13,"nileLotus")
D.bn1=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bjj=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hqY=w([D.bn1,D.bjj,A.ih],x.O)
D.dLF=new C.jr("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aI4,4294244340,4279196764,4279196764,D.jZ)
D.aI5=new C.l0(14,"shweshweIvory")
D.bhe=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bfN=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bcR=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hqF=w([D.bhe,D.bfN,D.bcR],x.O)
D.dLB=new C.jr("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aI5,4294505710,4279970378,4291058750,D.jZ)
D.rP=new C.l0(15,"certIvoryNavy")
D.hqD=w([D.Mn,D.jr,A.ih],x.O)
D.aHx=new C.xN(1,"ringsNdoa")
D.dLy=new C.jr("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rP,4294966259,4279378237,4291404327,D.aHx)
D.a6o=new C.xN(2,"coupleCards")
D.dLt=new C.jr("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rP,4294966259,4279378237,4291404327,D.a6o)
D.Dh=new C.l0(18,"certIvoryNavyBar")
D.aez=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hqR=w([D.aez,D.jr,A.ih],x.O)
D.aHy=new C.xN(3,"kuhoweshaForm")
D.dLr=new C.jr("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Dh,4294966519,4279378237,4291404327,D.aHy)
D.afX=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hra=w([D.Mn,D.afX,A.ih],x.O)
D.a6p=new C.xN(4,"mahariPande")
D.dLu=new C.jr("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rP,4294966259,4279904068,4291404327,D.a6p)
D.aI6=new C.l0(16,"certIvoryGreen")
D.bgv=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hqH=w([A.Lz,D.bgv,A.ih],x.O)
D.aHz=new C.xN(5,"familiaMti")
D.dLA=new C.jr("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aI6,4294966776,4280241466,4291404327,D.aHz)
D.a6q=new C.xN(6,"ndoaSafi")
D.dLs=new C.jr("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Dh,4294966519,4279378237,4291404327,D.a6q)
D.blh=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hqK=w([D.Mn,A.ih,D.blh],x.O)
D.a6r=new C.xN(7,"peteWide")
D.dLx=new C.jr("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rP,4294966259,4282001936,4291404327,D.a6r)
D.dLH=new C.xN(8,"muhuriCrest")
D.dLq=new C.jr("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rP,4294966259,4279378237,4291404327,D.dLH)
D.hqU=w([D.aez,D.afX,A.ih],x.O)
D.dLI=new C.xN(9,"fomuWazi")
D.dLD=new C.jr("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Dh,4294966519,4279904068,4291404327,D.dLI)
D.aI7=new C.l0(17,"certIvoryRose")
D.bhj=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hqX=w([D.bhj,D.agR,A.ih],x.O)
D.a6n=new C.xN(10,"upendoOrnate")
D.dLz=new C.jr("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aI7,4294965493,4286200650,4291404327,D.a6n)
D.deO=w([D.dLw,D.dLE,D.dLG,D.dLF,D.dLB,D.dLy,D.dLt,D.dLr,D.dLu,D.dLA,D.dLs,D.dLx,D.dLq,D.dLD,D.dLz],x.h)
D.ef=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.IJ=new C.w8(0,"emojis")
D.Do=new C.w8(1,"pictures")
D.IK=new C.w8(2,"icons3d")
D.a6I=new C.w8(3,"animations")
D.SN=new C.w8(4,"videoMotion")
D.Dp=new C.w8(5,"luxe")
D.a4u=w([D.IJ,D.Do,D.IK,D.a6I,D.SN,D.Dp],B.av("O<w8>"))
D.eOt=new B.z(A.e5,"Looks")
D.eCs=new B.z(A.Cv,"Light")
D.eCp=new B.z(A.ns,"Colour")
D.eAo=new B.z(A.yG,"Effects")
D.ani=new B.a0(63112,"MaterialIcons",!1)
D.ewU=new B.z(D.ani,"Crop")
D.dfk=w([D.eOt,D.eCs,D.eCp,D.eAo,D.ewU],x.f2)
D.dfZ=w([],x.D)
D.hr7=w([],x.L)
D.eAC=new B.z("Flashcard",D.IE)
D.eEu=new B.z("Quiz",D.IF)
D.eGv=new B.z("Worksheet",D.IG)
D.eDv=new B.z("Notes",D.mS)
D.eF1=new B.z("Section",D.Dm)
D.dgF=w([D.eAC,D.eEu,D.eGv,D.eDv,D.eF1],B.av("O<+(n,mG)>"))
D.dNl=new C.l0(6,"beadedPearl")
D.bk4=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hrb=w([I.YC,D.bk4,A.ih],x.O)
D.aHv=new C.jr("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dNl,4294966774,4286209070,4291404327,D.jZ)
D.dNm=new C.l0(7,"artDeco")
D.bon=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.brp=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hr9=w([D.bon,D.brp,A.c1],x.O)
D.aHw=new C.jr("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dNm,4294440434,4280228630,4290283019,D.jZ)
D.dNn=new C.l0(8,"rosetteCorners")
D.bqu=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bf3=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bk_=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hqN=w([D.bqu,D.bf3,D.bk_],x.O)
D.aHu=new C.jr("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dNn,4294702831,4285218602,4291394365,D.jZ)
D.dNo=new C.l0(9,"modernLedger")
D.hqM=w([A.c,D.jr,D.jr],x.O)
D.aHt=new C.jr("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dNo,4294967295,4279378237,4279378237,D.jZ)
D.dgJ=w([D.aHv,D.aHw,D.aHu,D.aHt],x.h)
D.dgS=w([A.id,A.oX],x.O)
D.cl=new C.hF(0,"none")
D.dh=new C.hF(1,"fade")
D.IH=new C.hF(3,"slideRight")
D.aIt=new C.hF(5,"slideDown")
D.e6Y=new C.hF(7,"zoomOut")
D.a6H=new C.hF(11,"cube")
D.e6T=new C.hF(12,"blur")
D.aIq=new C.hF(13,"dissolve")
D.e6U=new C.hF(14,"wipeLeft")
D.e6V=new C.hF(15,"wipeRight")
D.SM=new C.hF(17,"push")
D.e6W=new C.hF(18,"flash")
D.aIs=new C.hF(20,"swing")
D.e6X=new C.hF(21,"curtain")
D.Rm=w([D.cl,D.dh,D.uM,D.IH,D.uN,D.aIt,D.mT,D.e6Y,D.II,D.aIu,D.SL,D.a6H,D.e6T,D.aIq,D.e6U,D.e6V,D.qA,D.SM,D.e6W,D.aIr,D.aIs,D.e6X],x.i)
D.Rn=w([D.a6m,D.a6k,D.a6d,D.a6e,D.a6f,D.a6i,D.a6g,D.a6h,D.a6l,D.a6j,D.aHv,D.aHw,D.aHu,D.aHt],x.h)
D.dhk=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dho=w([A.xK,A.hS,A.c1],x.O)
D.eBJ=new B.z(A.uf,"Design")
D.eQ3=new B.z(D.anz,"Word sizes")
D.eLx=new B.z(A.Cp,"Text")
D.bMK=new B.a0(983182,"MaterialIcons",!1)
D.eLB=new B.z(D.bMK,"Photo")
D.ews=new B.z(A.lF,"Logo")
D.eRl=new B.z(A.He,"News")
D.dhu=w([D.eBJ,D.eQ3,D.eLx,D.eLB,D.ews,D.eRl],x.f2)
D.dhv=w(["golddust","sparkle","sheen"],x.s)
D.dhx=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and its own apps: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), Notes, Calculator, Clock (clock, stopwatch, timer) and Settings (phone name, six wallpapers, brightness, reset). Everything on the virtual phone is kept on its own and a reset clears only it. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.e8k=new C.ew("upload_pdf",L.OF,"Upload PDF")
D.e7u=new C.ew("sign_paper",A.Hb,"Sign Paper")
D.bM1=new B.a0(63438,"MaterialIcons",!1)
D.e8g=new C.ew("hd_photo",D.bM1,"HD Photo")
D.e7m=new C.ew("sharpen",E.a1f,"Sharpen")
D.e7w=new C.ew("print",L.OF,"Download PDF")
D.e7Y=new C.ew("rotate",D.ani,"Rotate")
D.e7F=new C.ew("text_box",A.Cp,"Text Box")
D.e7H=new C.ew("picture",A.ul,"Picture")
D.e7D=new C.ew("title",A.yW,"Title")
D.e7z=new C.ew("subtitle",T.ao9,"Subtitle")
D.e86=new C.ew("bullets",K.a1y,"Bullet List")
D.e7A=new C.ew("numbered",A.Ox,"Numbered")
D.e89=new C.ew("quote",A3.Ce,"Quote")
D.e7M=new C.ew("citation",A.og,"Citation")
D.e8c=new C.ew("date_stamp",Ai.a1k,"Date Stamp")
D.e8_=new C.ew("page_number",A.yV,"Page #")
D.e83=new C.ew("header_bar",A.Cs,"Header")
D.e7G=new C.ew("footer_bar",Aq.a26,"Footer")
D.e7v=new C.ew("divider",A.uk,"Divider")
D.e7r=new C.ew("highlight",A.a1F,"Highlight")
D.e85=new C.ew("redact",A.ut,"Redact")
D.e7T=new C.ew("callout",A.C8,"Callout")
D.e8e=new C.ew("checkboxes",K.amC,"Checklist")
D.e7Q=new C.ew("table",A.a23,"Table")
D.e7K=new C.ew("memo",K.a1R,"Memo")
D.e7U=new C.ew("letter",A.GZ,"Letter")
D.bLD=new B.a0(63259,"MaterialIcons",!0)
D.e7l=new C.ew("agenda",D.bLD,"Agenda")
D.e7x=new C.ew("toc",Ay.anN,"Contents")
D.bLY=new B.a0(63406,"MaterialIcons",!1)
D.e7R=new C.ew("sig_line",D.bLY,"Sign Line")
D.e7e=new C.ew("initial_line",A.iW,"Initials")
D.e7h=new C.ew("approved",A.lF,"APPROVED")
D.e7W=new C.ew("draft",A.pd,"DRAFT")
D.e81=new C.ew("confidential",A.jT,"Confidential")
D.e84=new C.ew("sticky",A.H7,"Sticky Note")
D.e8d=new C.ew("progress",A.anM,"Progress")
D.bNa=new B.a0(983507,"MaterialIcons",!1)
D.e7s=new C.ew("stars",D.bNa,"Star Rating")
D.e7c=new C.ew("equation",A.anB,"Equation")
D.e7n=new C.ew("timeline",A.a24,"Timeline")
D.e7L=new C.ew("two_col",A.a27,"Two Columns")
D.e7p=new C.ew("compare",A2.a1p,"Compare")
D.e7a=new C.ew("duplicate_el",A.fP,"Duplicate")
D.e8i=new C.ew("delete_el",A.e9,"Delete")
D.e88=new C.ew("bring_fwd",I.anv,"Bring Front")
D.e7f=new C.ew("send_back",I.anu,"Send Back")
D.e7V=new C.ew("align_left",D.a1w,"Align L")
D.e80=new C.ew("align_center",D.a1v,"Align C")
D.e8h=new C.ew("align_right",D.a1x,"Align R")
D.e7E=new C.ew("word_count",A0.a0W,"Word Count")
D.e7B=new C.ew("link_text",A.hw,"Link")
D.e7Z=new C.ew("phone",A.iX,"Phone")
D.e7q=new C.ew("email",A.Cb,"Email")
D.e8j=new C.ew("qr_placeholder",A.jC,"QR Placeholder")
D.e7k=new C.ew("rectangle",A4.wa,"Rectangle")
D.e7P=new C.ew("circle",A.rr,"Circle")
D.e7g=new C.ew("arrow",A.jS,"Arrow")
D.e87=new C.ew("line",A.uk,"Line")
D.e7t=new C.ew("triangle",A.a1m,"Triangle")
D.bLL=new B.a0(63318,"MaterialIcons",!1)
D.e7y=new C.ew("grayscale",D.bLL,"Grayscale")
D.e7I=new C.ew("brighten",K.amX,"Brighten")
D.e7N=new C.ew("flip_h",A.GO,"Flip H")
D.bLT=new B.a0(63348,"MaterialIcons",!1)
D.e8f=new C.ew("flip_v",D.bLT,"Flip V")
D.e82=new C.ew("cover_page",A.qi,"Cover Page")
D.e7d=new C.ew("invoice",A.hi,"Invoice")
D.e7o=new C.ew("resume",A.mJ,"Resume")
D.e7C=new C.ew("minutes",A.p8,"Minutes")
D.e7i=new C.ew("lab_report",A.OJ,"Lab Report")
D.e7j=new C.ew("rubric",A.ug,"Rubric")
D.e7O=new C.ew("flashcard_tool",V.H9,"Flashcard")
D.e8a=new C.ew("quiz_tool",A.H3,"Quiz Block")
D.e7S=new C.ew("worksheet_tool",M.GB,"Worksheet")
D.e7X=new C.ew("outline_share",A.OL,"Share Outline")
D.e8b=new C.ew("export_json",D.amI,"Export JSON")
D.e7b=new C.ew("new_slide",D.a0V,"New Slide")
D.e7J=new C.ew("present",A.qn,"Present")
D.di1=w([D.e8k,D.e7u,D.e8g,D.e7m,D.e7w,D.e7Y,D.e7F,D.e7H,D.e7D,D.e7z,D.e86,D.e7A,D.e89,D.e7M,D.e8c,D.e8_,D.e83,D.e7G,D.e7v,D.e7r,D.e85,D.e7T,D.e8e,D.e7Q,D.e7K,D.e7U,D.e7l,D.e7x,D.e7R,D.e7e,D.e7h,D.e7W,D.e81,D.e84,D.e8d,D.e7s,D.e7c,D.e7n,D.e7L,D.e7p,D.e7a,D.e8i,D.e88,D.e7f,D.e7V,D.e80,D.e8h,D.e7E,D.e7B,D.e7Z,D.e7q,D.e8j,D.e7k,D.e7P,D.e7g,D.e87,D.e7t,D.e7y,D.e7I,D.e7N,D.e8f,D.e82,D.e7d,D.e7o,D.e7C,D.e7i,D.e7j,D.e7O,D.e8a,D.e7S,D.e7X,D.e8b,D.e7b,D.e7J],B.av("O<ew>"))
D.dib=w([A.cr,A.al],x.O)
D.evZ=new B.z(4286331629,4292552567)
D.evM=new B.z(4280640491,4278630100)
D.ew6=new B.z(4294538006,4292943176)
D.ev8=new B.z(4278556265,4280640491)
D.dca=w([D.evZ,D.evM,D.ew6,D.ev8],x.n)
D.czR=w([4294626325,4280472558,4294210230],x.t)
D.e75=new C.nT("colorful","Colorful",A.ns,D.dca,4294967295,3875536895,D.czR,D.mT)
D.evA=new B.z(4279522093,4279657780)
D.evQ=new B.z(4281750292,4283268111)
D.evb=new B.z(4278603323,4279203438)
D.evR=new B.z(4282343954,4279599165)
D.cKV=w([D.evA,D.evQ,D.evb,D.evR],x.n)
D.czz=w([4288931381,4294829706,4287033260],x.t)
D.e71=new C.nT("nature","Nature",A.Hc,D.cKV,4294442727,3874290891,D.czz,D.dh)
D.evu=new B.z(4279369771,4283178389)
D.evr=new B.z(4279179050,4286456526)
D.evI=new B.z(4280163147,4290648157)
D.ev0=new B.z(4278322711,4285343961)
D.d23=w([D.evu,D.evr,D.evI,D.ev0],x.n)
D.czN=w([4294210230,4280472558,4289170426],x.t)
D.e7_=new C.nT("vibe","Vibe",A.a1D,D.d23,4294967295,3874869502,D.czN,D.uM)
D.ew2=new B.z(4290007817,4292552567)
D.evX=new B.z(4286328082,4294286859)
D.ew1=new B.z(4288485197,4294538006)
D.evW=new B.z(4285343961,4293675161)
D.c5G=w([D.ew2,D.evX,D.ew1,D.evW],x.n)
D.czS=w([4294829706,4294967295,4284999929],x.t)
D.e70=new C.nT("celebration","Celebration",A.l7,D.c5G,4294967295,4009752557,D.czS,D.qA)
D.evp=new B.z(4279179050,4280171146)
D.evt=new B.z(4279310375,4280232247)
D.evh=new B.z(4278916151,4280172719)
D.evq=new B.z(4279179050,4281549141)
D.cVx=w([D.evp,D.evt,D.evh,D.evq],x.n)
D.czu=w([4281908728,4294626325,4287931320],x.t)
D.e74=new C.nT("professional","Professional",A.C6,D.cVx,4294967295,3872118241,D.czu,D.SM)
D.evl=new B.z(4278995566,4278413729)
D.evd=new B.z(4278727492,4279137424)
D.evJ=new B.z(4280171146,4278751666)
D.evm=new B.z(4278995566,4279590517)
D.cDF=w([D.evl,D.evd,D.evJ,D.evm],x.n)
D.czx=w([4286436348,4284410580,4294829706],x.t)
D.e76=new C.nT("ocean","Ocean",K.a29,D.cDF,4294967295,3873501950,D.czx,D.uN)
D.evY=new B.z(4286328082,4294538006)
D.ew_=new B.z(4286781507,4294677052)
D.evU=new B.z(4283178389,4294197086)
D.ew0=new B.z(4288295954,4294688548)
D.cRJ=w([D.evY,D.ew_,D.evU,D.ew0],x.n)
D.czT=w([4294829706,4294967295,4294747557],x.t)
D.e77=new C.nT("sunset","Sunset",A.OP,D.cRJ,4294967295,4009749973,D.czT,D.dh)
D.ewa=new B.z(4294967295,4294047225)
D.ew5=new B.z(4294507260,4294967295)
D.ew9=new B.z(4294967295,4293060848)
D.ew4=new B.z(4294507260,4294047225)
D.d5l=w([D.ewa,D.ew5,D.ew9,D.ew4],x.n)
D.czs=w([4280640491,4279179050,4287931320],x.t)
D.e73=new C.nT("minimal","Minimal",A4.wa,D.d5l,4279179050,4282865001,D.czs,D.dh)
D.evk=new B.z(4278979081,4280886564)
D.evE=new B.z(4280031511,4278979081)
D.evs=new B.z(4279308561,4281148438)
D.evj=new B.z(4278979081,4280031511)
D.dkf=w([D.evk,D.evE,D.evs,D.evj],x.n)
D.czG=w([4292128567,4294829706,4289241758],x.t)
D.e78=new C.nT("elegant","Elegant",A.m8,D.dkf,4294898631,3873957348,D.czG,D.aIq)
D.evG=new B.z(4280159034,4282058596)
D.evg=new B.z(4278916151,4280163147)
D.evO=new B.z(4281208933,4278916151)
D.evx=new B.z(4279502891,4283178389)
D.drD=w([D.evG,D.evg,D.evO,D.evx],x.n)
D.czP=w([4294296657,4292128567,4291081725],x.t)
D.e72=new C.nT("royal","Royal Gold",A.jg,D.drD,4294965222,3874084351,D.czP,D.mT)
D.ev5=new B.z(4278464302,4280163147)
D.evf=new B.z(4278916151,4279455306)
D.evH=new B.z(4280163147,4283040846)
D.ev2=new B.z(4278332450,4281413249)
D.dbO=w([D.ev5,D.evf,D.evH,D.ev2],x.n)
D.czt=w([4281193663,4289170426,4294210230],x.t)
D.e79=new C.nT("aurora","Aurora Glow",A.e5,D.dbO,4293983738,3869766608,D.czt,D.dh)
D.wx=w([D.e75,D.e71,D.e7_,D.e70,D.e74,D.e76,D.e77,D.e73,D.e78,D.e72,D.e79],B.av("O<nT>"))
D.bkF=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.diN=w([A.r5,D.bkF,A.r5],x.O)
D.dj3=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dj7=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eLp=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eBj=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eG3=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.esA=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eEF=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eCP=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eHl=new B.z("Surprise me","")
D.djG=w([D.eLp,D.eBj,D.eG3,D.esA,D.eEF,D.eCP,D.eHl],x.L)
D.bcT=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.boU=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dku=w([A.c,D.bcT,D.boU],x.O)
D.dmI=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aI_=new C.l0(0,"heritageGold")
D.bj3=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hrc=w([D.bj3,A8.ag8,A.az],x.O)
D.dLC=new C.jr("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aI_,4294570461,4284234270,4292128567,D.jZ)
D.aI0=new C.l0(1,"heritageCrimson")
D.bb9=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bhg=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.boI=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hqQ=w([D.bb9,D.bhg,D.boI],x.O)
D.dLv=new C.jr("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aI0,4294635750,4285213214,4292912216,D.jZ)
D.dmM=w([D.a6m,D.a6k,D.dLC,D.dLv,D.a6f,D.a6i],x.h)
D.dRp=new C.rD(1,"circuit")
D.dRS=new C.mf("neural","Neural Link","Robotic",D.dRp,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dRo=new C.rD(0,"grid")
D.dRP=new C.mf("signal","Signal Grid","Robotic",D.dRo,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dRu=new C.rD(2,"hexes")
D.dRA=new C.mf("core","Core Protocol","Robotic",D.dRu,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aIn=new C.rD(11,"diagonal")
D.dRL=new C.mf("steel","Steel Tech","Robotic",D.aIn,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aIo=new C.rD(3,"rings")
D.dRz=new C.mf("vault","Vault Gold","Robotic",D.aIo,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dRs=new C.rD(13,"leaves")
D.dRC=new C.mf("forest","Forest Morning","Nature",D.dRs,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aIp=new C.rD(5,"waves")
D.dRJ=new C.mf("ocean","Ocean Calm","Nature",D.aIp,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dRv=new C.rD(6,"sunset")
D.dRO=new C.mf("sunset","Sunset Glow","Nature",D.dRv,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dRw=new C.rD(7,"mountains")
D.dRB=new C.mf("mountain","Mountain Air","Nature",D.dRw,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dRx=new C.rD(8,"stars")
D.dRI=new C.mf("night","Night Sky","Nature",D.dRx,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a6F=new C.rD(4,"orbs")
D.dRG=new C.mf("aurora","Aurora","Nature",D.a6F,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dRQ=new C.mf("sand","Sand Dune","Nature",D.aIp,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dRy=new C.rD(9,"rays")
D.dRF=new C.mf("golden","Golden Hour","Warm",D.dRy,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dRD=new C.mf("royal","Royal Purple","Warm",D.aIn,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dRE=new C.mf("rose","Rose Petal","Warm",D.a6F,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dRr=new C.rD(12,"blocks")
D.dRH=new C.mf("electric","Electric Blue","Bold",D.dRr,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dRR=new C.mf("mint","Fresh Mint","Bold",D.a6F,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dRt=new C.rD(14,"minimal")
D.dRN=new C.mf("white","Clean White","Clean",D.dRt,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dRq=new C.rD(10,"frame")
D.dRK=new C.mf("midnight","Midnight Gold","Clean",D.dRq,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dRM=new C.mf("community","Community Green","Clean",D.aIo,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a4X=w([D.dRS,D.dRP,D.dRA,D.dRL,D.dRz,D.dRC,D.dRJ,D.dRO,D.dRB,D.dRI,D.dRG,D.dRQ,D.dRF,D.dRD,D.dRE,D.dRH,D.dRR,D.dRN,D.dRK,D.dRM],B.av("O<mf>"))
D.dn8=w([D.Bk,A.tB,A.hS,A.c1],x.O)
D.dnq=w([D.ah2,D.jr],x.O)
D.dnA=w(["pdf","docx","txt","md"],x.s)
D.eUP=new B.bk(-3,150,34)
D.eUQ=new B.bk(-3,214,62)
D.eUR=new B.bk(-3,288,62)
D.dos=w([D.eUP,D.eUQ,D.eUR],B.av("O<+(K,K,K)>"))
D.doY=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dpD=w(["Write","Design","Print & fold"],x.s)
D.k_=new C.uU(2,"triangle")
D.Dn=new C.uU(3,"arrow")
D.fD=new C.uU(4,"line")
D.k0=new C.uU(5,"parallelogram")
D.dpG=w([D.bh,D.eS,D.k_,D.Dn,D.fD,D.k0,D.lh],x.m)
D.eu0=new B.z(240,96)
D.ewM=new B.z(560,46)
D.dpM=w([D.eu0,D.ewM],x.G)
D.hrn=new C.xQ(0,"classic")
D.dNr=new C.nP("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aI_,4294570461,4282000405,4284234270)
D.dND=new C.nP("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aI0,4294635750,4281999378,4285213214)
D.dNs=new C.nP("elegant_navy","Umoja Mzuri",y.s,D.a6z,4294967035,4279378237,4290283019)
D.dNF=new C.nP("elegant_gold","Umoja wa Dhahabu",y.Q,D.aI8,4294966515,4281016592,4289102906)
D.dNH=new C.nP("kente_sunset","Kente ya Jua",y.H,D.aI1,4294964964,4282000405,4279983648)
D.dNp=new C.nP("indigo_mudcloth","Nguo ya Indigo",y.n,D.aI2,4294439140,4279903102,4279903102)
D.dNu=new C.nP("adinkra_royal","Muhuri wa Adinkra",y.z,D.aI3,4294965484,4285218591,4287322667)
D.dNz=new C.nP("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aI4,4294244340,4279196764,4279196764)
D.dNB=new C.nP("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aI5,4294505710,4279970378,4291058750)
D.hro=new C.xQ(1,"ringsNdoa")
D.dNt=new C.nP("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rP,4294966259,4279378237,4291404327)
D.hrq=new C.xQ(2,"coupleCards")
D.dNE=new C.nP("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rP,4294966259,4279378237,4291404327)
D.hrr=new C.xQ(3,"kuhoweshaForm")
D.dNA=new C.nP("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Dh,4294966519,4279378237,4291404327)
D.hrs=new C.xQ(4,"mahariPande")
D.dNq=new C.nP("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rP,4294966259,4279904068,4291404327)
D.hrt=new C.xQ(5,"familiaMti")
D.dNG=new C.nP("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aI6,4294966776,4280241466,4291404327)
D.hru=new C.xQ(6,"ndoaSafi")
D.dNx=new C.nP("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Dh,4294966519,4279378237,4291404327)
D.hrv=new C.xQ(7,"peteWide")
D.dNw=new C.nP("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rP,4294966259,4282001936,4291404327)
D.hrw=new C.xQ(8,"muhuriCrest")
D.dNv=new C.nP("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rP,4294966259,4279378237,4291404327)
D.hrx=new C.xQ(9,"fomuWazi")
D.dNy=new C.nP("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Dh,4294966519,4279904068,4291404327)
D.hrp=new C.xQ(10,"upendoOrnate")
D.dNC=new C.nP("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aI7,4294965493,4286200650,4291404327)
D.RC=w([D.dNr,D.dND,D.dNs,D.dNF,D.dNH,D.dNp,D.dNu,D.dNz,D.dNB,D.dNt,D.dNE,D.dNA,D.dNq,D.dNG,D.dNx,D.dNw,D.dNv,D.dNy,D.dNC],B.av("O<nP>"))
D.Dl=new C.arJ(0,"landscape169")
D.ov=new C.arJ(1,"portrait916")
D.dqA=w([D.Dl,D.ov],B.av("O<arJ>"))
D.aAJ=w([A.hS,A.bL,A.cR,A.id,A.c],x.O)
D.uD=w([A.c1,A.ij],x.O)
D.et3=new B.z(1000,"M")
D.eyf=new B.z(900,"CM")
D.ewG=new B.z(500,"D")
D.euW=new B.z(400,"CD")
D.et4=new B.z(100,"C")
D.eyg=new B.z(90,"XC")
D.ewH=new B.z(50,"L")
D.euX=new B.z(40,"XL")
D.eta=new B.z(10,"X")
D.eys=new B.z(9,"IX")
D.ewY=new B.z(5,"V")
D.ewr=new B.z(4,"IV")
D.etF=new B.z(1,"I")
D.dri=w([D.et3,D.eyf,D.ewG,D.euW,D.et4,D.eyg,D.ewH,D.euX,D.eta,D.eys,D.ewY,D.ewr,D.etF],x.ek)
D.eVS=new B.cw(["open",A.iW,"Open & write","Keep writing this book"])
D.eWi=new B.cw(["print",A.uo,"Print as a book","Fold and staple it"])
D.drt=w([D.eVS,D.eWi],B.av("O<+(n,a0,n,n)>"))
D.dsa=w([D.a6H,D.mT,D.II,D.SM,D.dh,D.SL],x.i)
D.eM7=new B.z(-1,"Small")
D.esP=new B.z(0,"Normal")
D.etE=new B.z(1,"Big")
D.eug=new B.z(2,"Huge")
D.dsL=w([D.eM7,D.esP,D.etE,D.eug],x.ek)
D.dtc=w([49,65,89,38,83,89],x.t)
D.dti=w([A.tB,A.hS,A.c1],x.O)
D.dtM=w([D.dh,D.mT,D.uM,D.a6H,D.II,D.SM],x.i)
D.aG0=new B.du([0,D.MG,8,D.aiv,12,D.aiw],B.av("du<H,a4b>"))
D.ecZ={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.boy=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cVI=w([A.bL,D.boy],x.O)
D.dgr=w([A.b2,A.bk],x.O)
D.daS=w([A.c5,A.aQ,A.bG],x.O)
D.dru=w([A.cr,A.br],x.O)
D.d31=w([A.b9,A.f4],x.O)
D.ddG=w([A.b5,A.fa],x.O)
D.bgU=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dcX=w([D.bgU,A.oX],x.O)
D.d78=w([A.ha,A.xL],x.O)
D.d2Q=w([A.bt,A.cc],x.O)
D.dws=new B.bw(D.ecZ,[D.cVI,H.ar3,D.dgr,D.daS,D.dru,D.d31,D.ddG,D.dcX,D.d78,D.d2Q],B.av("bw<n,ai<u>>"))
D.ecf={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a5z=new B.bw(D.ecf,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.av("bw<n,n>"))
D.a5F=new B.bw(A.hO,[],B.av("bw<H,+icon3d,picture(n?,n?)>"))
D.dAL=new F.Ng(30,null)
D.dFP=new F.mC("Chapter 1","","","")
D.dql=w([D.dFP],x.B)
D.dFT=new F.rt("My Book","","",D.dql,E.aHj)
D.dFR=new F.uK("starry",null,null,null,null,"","","")
D.dFU=new F.rt("Dream Big","","",E.a4C,D.dFR)
D.dFS=new F.uK("story",null,null,null,null,"","","")
D.dFV=new F.rt("Little Lion","","",E.a4C,D.dFS)
D.dFQ=new F.uK("vintage",null,null,null,null,"","","")
D.dFW=new F.rt("Our Story","","",E.a4C,D.dFQ)
D.dIT=new C.EP("","NGMY","","")
D.dQ4=new C.zN("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
D.e6Z=new C.b23(null,null,null,null)
D.e8H=new C.arO(null)
D.e8T=new C.ash(0,"smaller")
D.e8U=new C.ash(1,"bigger")
D.aID=new C.ash(2,"fit")
D.egm=new B.t(3,6)
D.egG=new B.t(4,8)
D.ekN=new B.D(E.ajn,T.adT,null)
D.ekR=new B.D(A.ZS,A.ms,null)
D.bOt=new B.ae(A.kH,16,A.bY,null,null,null)
D.ekV=new B.D(A.iA,D.bOt,null)
D.bay=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.el6=new B.D(A.Ge,D.bay,null)
D.bYY=new B.ae(A.cz,16,A.aB,null,null,null)
D.ela=new B.D(A.eB,D.bYY,null)
D.fCT=new B.y("Play",null,A.nI,null,null,null,null,null,null,null,null,null)
D.dgG=w([U.apz,A.t3,D.fCT],x.p)
D.f_V=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.dgG,null)
D.eld=new B.D(A.no,D.f_V,null)
D.baH=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.f5L=new B.a7(20,20,D.baH,null)
D.elj=new B.D(A.iA,D.f5L,null)
D.fMe=new B.y("Seconds per slide",null,A.fS,null,null,null,null,null,null,null,null,null)
D.elt=new B.D(A.bf,D.fMe,null)
D.emO=new C.a90(2,"print")
D.emR=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eot=new B.hh("/Annot")
D.eov=new B.hh("/URI")
D.fx0=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eqD=new B.jt("share",48,D.fx0,null,B.av("jt<n>"))
D.bYS=new B.ae(A.e5,14,A.eG,null,null,null)
D.eqM=new B.cN(null,-2,-2,null,null,null,D.bYS,null)
D.cXW=w([I.agF,A.K],x.O)
D.c4s=new B.a9(A.a5,A.a8,A.x,D.cXW,null,null)
D.b39=new B.o(null,null,null,null,null,D.c4s,A.n)
D.btS=new B.kY(D.b39,A.bg,null,null)
D.eqY=new B.cN(0,0,null,0,8,null,D.btS,null)
D.dlE=w([A.hT,A.my,A.cb],x.O)
D.erC=new B.c1(A.A,0.5,A.x,null,0,D.dlE,null,null)
D.eu9=new B.z(0.22,A.bk)
D.eyM=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eAY=new B.z(0.5,A.ho)
D.eKw=new B.z(0.78,A.aW)
D.eVI=new B.cw([A.bw,0.22,0.7,2.6])
D.eVO=new B.cw([A.b9,0.36,1.2,1.3])
D.eVU=new B.cw([A.dF,0.28,0.2,0.4])
D.eW_=new B.cw([A.cw,0.05,0.3,0.35])
D.eW5=new B.cw([A.bt,0.28,0.9,0])
D.eWd=new B.cw([A.aD,-0.25,-0.15,0.45])
D.eX3=new B.cw([A.c5,0.42,1,4.1])
D.f_D=new B.a9Y(9)
D.bPB=new B.ae(A.He,28,A.bG,null,null,null)
D.fMN=new B.y("NGMY News",null,A.dd,null,null,null,null,null,null,null,null,null)
D.bDY=new B.bA(1,A.bc,D.fMN,null)
D.dp0=w([D.bPB,A.at,D.bDY],x.p)
D.f_P=new B.cd(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dp0,null)
D.bPM=new B.ae(A.og,16,A.c,null,null,null)
D.fOn=new B.y("Book",null,A.oD,null,null,null,null,null,null,null,null,null)
D.dth=w([D.bPM,A.em,D.fOn],x.p)
D.f_X=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.dth,null)
D.bWq=new B.ae(A.jT,10,A.c,null,null,null)
D.fAU=new B.y("Pro",null,A.nE,null,null,null,null,null,null,null,null,null)
D.dgL=w([D.bWq,A.qG,D.fAU],x.p)
D.f00=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.dgL,null)
D.fMc=new B.y("Make a newspaper",null,A.UT,null,null,null,null,null,null,null,null,null)
D.c5E=w([E.a2v,A.ac,D.fMc],x.p)
D.f01=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.c5E,null)
D.bUU=new B.ae(A.l7,18,A.bL,null,null,null)
D.fD6=new B.y("Ending celebration",null,A.hD,null,null,null,null,null,null,null,null,null)
D.do0=w([D.bUU,A.bo,D.fD6],x.p)
D.f04=new B.cd(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.do0,null)
D.bWc=new B.ae(A.iW,18,A.kd,null,null,null)
D.fgG=new B.F(!0,A.kd,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOG=new B.y("Write",null,D.fgG,null,null,null,null,null,null,null,null,null)
D.d59=w([D.bWc,A.ac,D.fOG],x.p)
D.f0b=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.d59,null)
D.fAS=new B.y("Download picture",null,A.nF,null,null,null,null,null,null,null,null,null)
D.bGr=new B.qx(A.e2,A.A,A.f,D.fAS,null)
D.bGC=new B.ds(1,A.cn,D.bGr,null)
D.dh9=w([L.apq,A.ac,D.bGC],x.p)
D.f0c=new B.cd(A.aM,A.b8,A.i,A.m,null,A.p,null,0,D.dh9,null)
D.bRy=new B.ae(A.He,22,A.bG,null,null,null)
D.fKL=new B.y("NGMY NEWS",null,H.a9l,null,null,null,null,null,null,null,null,null)
D.cXm=w([D.bRy,A.ac,D.fKL],x.p)
D.f0l=new B.cd(A.aM,A.e,A.Q,A.m,null,A.p,null,0,D.cXm,null)
D.f0x=new B.pi(!1,!1,null,T.WV,null,A.c0,null,null,null)
D.a8s=new B.jn([D.cl,D.dh,D.uM,D.IH,D.uN,D.aIt],B.av("jn<hF>"))
D.eeE={title:0,quote:1,closing:2,bio:3}
D.f1I=new B.dD(D.eeE,4,x.M)
D.ecy={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f1L=new B.dD(D.ecy,5,x.M)
D.edX={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a8t=new B.dD(D.edX,8,x.M)
D.ed9={Design:0,Transitions:1,Insert:2}
D.f1Q=new B.dD(D.ed9,3,x.M)
D.hrG=new B.jn([D.a6I],B.av("jn<w8>"))
D.edi={float3d:0,drift:1,pulse:2}
D.f1U=new B.dD(D.edi,3,x.M)
D.aQ_=new B.jn([D.IE,D.IF,D.IG],B.av("jn<mG>"))
D.ecw={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aQ2=new B.dD(D.ecw,14,x.M)
D.hrH=new B.dD(A.hO,0,B.av("dD<w8>"))
D.edf={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.TT=new B.dD(D.edf,4,x.M)
D.ecp={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aQ5=new B.dD(D.ecp,30,x.M)
D.edo={circle:0,triangle:1,hexagon:2,diamond:3}
D.f2g=new B.dD(D.edo,4,x.M)
D.f4F=new B.au(390,844)
D.f5u=new B.a7(20,20,A.Ls,null)
D.aQS=new B.a7(null,2.5,null,null)
D.f5E=new B.a7(18,18,A.Ls,null)
D.bWg=new B.ae(A.jg,19,A.c,null,null,null)
D.f5Q=new B.a7(38,38,D.bWg,null)
D.bUs=new B.ae(A.z_,22,A.c,null,null,null)
D.f5S=new B.a7(40,40,D.bUs,null)
D.f6q=new B.hR(2,10,10,1.15,null)
D.aQZ=new B.hR(2,16,14,0.62,null)
D.bBY=new B.Q(32,30,32,40)
D.bca=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bPy=new B.ae(A.qi,56,D.bca,null,null,null)
D.ahB=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fiP=new B.F(!0,D.ahB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHF=new B.y("Your books will live here.",null,D.fiP,null,A.L,null,null,null,null,null,null,null)
D.d86=w([D.bPy,A.W,D.fHF],x.p)
D.bsP=new B.fi(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.d86,null)
D.elr=new B.D(D.bBY,D.bsP,null)
D.f6M=new B.mj(D.elr,null)
D.fHC=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f73=new B.b2(D.fHC,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fFJ=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f74=new B.b2(D.fFJ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fKP=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f7d=new B.b2(D.fKP,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fLn=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f7s=new B.b2(D.fLn,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fEk=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f7F=new B.b2(D.fEk,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fSI=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f7Y=new B.b2(D.fSI,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPI=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f88=new B.b2(D.fPI,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fLw=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new B.b2(D.fLw,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fz2=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f98=new B.b2(D.fz2,null,null,null,null,null,null,null,A.iJ,null,null,null,null,A.q5,!1,null,null,null,A.t,null)
D.fB1=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f9q=new B.b2(D.fB1,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fHi=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f9s=new B.b2(D.fHi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fGZ=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f9t=new B.b2(D.fGZ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fND=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f9u=new B.b2(D.fND,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fvb=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f9D=new B.b2(D.fvb,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fCc=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new B.b2(D.fCc,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRm=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fa1=new B.b2(D.fRm,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fQS=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fa5=new B.b2(D.fQS,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fu5=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fa7=new B.b2(D.fu5,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fMI=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fag=new B.b2(D.fMI,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fQr=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fav=new B.b2(D.fQr,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fQi=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fax=new B.b2(D.fQi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.ftX=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.faD=new B.b2(D.ftX,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fy1=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new B.b2(D.fy1,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPv=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new B.b2(D.fPv,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fxQ=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fbv=new B.b2(D.fxQ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.bkj=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cVY=w([A.id,A.oX,D.bkj,D.aem,A.id],x.O)
D.fbT=new B.fY(A.A,0,6.283185307179586,A.x,D.cVY,null,null)
D.d4g=w([A.bL,A.c1,A.hS,D.Bk,A.bL],x.O)
D.aRx=new B.fY(A.A,0,6.283185307179586,A.x,D.d4g,null,null)
D.dj1=w([A.c5,A.bw,A.b9,A.bj,A.bG,A.c5],x.O)
D.fbY=new B.fY(A.A,0,6.283185307179586,A.x,D.dj1,null,null)
D.cYa=w([A.q1,A.oY,A.xJ,A.id,A.q1],x.O)
D.fbZ=new B.fY(A.A,0,6.283185307179586,A.x,D.cYa,null,null)
D.diW=w([A.aP,A.bM,A.aL,A.al,A.aP],x.O)
D.fc_=new B.fY(A.A,0,6.283185307179586,A.x,D.diW,null,null)
D.dr6=w([A.bt,A.b9,A.bw,A.c5,A.bt],x.O)
D.fc1=new B.fY(A.A,0,6.283185307179586,A.x,D.dr6,null,null)
D.bfM=new B.u(1,0,1,0,A.q)
D.bkE=new B.u(1,0,1,1,A.q)
D.bhD=new B.u(1,0,0,1,A.q)
D.bdx=new B.u(1,1,0,1,A.q)
D.dn0=w([A.LJ,A.agm,D.bfM,D.bkE,D.bhD,D.bdx,A.LJ],x.O)
D.fc2=new B.fY(A.A,0,6.283185307179586,A.x,D.dn0,null,null)
D.fch=new C.awr(2,"immersiveSticky")
D.fci=new C.awr(3,"edgeToEdge")
D.fcj=new C.awr(4,"manual")
D.feL=new B.F(!0,A.oT,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS4=new B.F(!0,A.eO,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new B.F(!0,E.ne,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi3=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fid=new B.F(!0,A.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new B.F(!0,A.eG,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk0=new B.F(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fka=new B.F(!0,A.jM,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.rO(!0,A.J3,null,null,null,null,A.dy,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fly=new B.F(!0,A.jt,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flW=new B.F(!0,A.aB,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emU=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fm_=new B.rO(!0,D.emU,null,null,null,null,A.dy,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.agt=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aSV=new B.F(!0,D.agt,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.F(!0,D.ahB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSX=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new B.rO(!0,A.pn,null,null,null,null,A.dy,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn1=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new B.F(!0,D.agt,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.K3=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo5=new B.F(!0,A.c1,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fog=new B.F(!0,A.bM,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fok=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foC=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ayj,null,null,null)
D.foF=new B.F(!0,A.cs,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foW=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new B.F(!0,A.dt,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpS=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new B.F(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTy=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTA=new B.F(!0,A.bY,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqi=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.frT=new B.F(!0,D.bqi,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTG=new B.F(!0,E.ne,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fso=new B.F(!0,A.bM,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsr=new B.F(!0,O.lv,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl5=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new B.y("NEW",null,D.fl5,null,null,null,null,null,null,null,null,null)
D.fu_=new B.y("Hati ya Kuhowesha",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fut=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fvC=new B.y("Big quote mark",null,A.jl,null,null,null,null,null,null,null,null,null)
D.fvF=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fvR=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fwi=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fwk=new B.y("How many slides?",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fwT=new B.y("Transfer",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fgJ=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new B.y("Luxury FX",null,D.fgJ,null,null,null,null,null,null,null,null,null)
D.fxz=new B.y("Font",null,A.t7,null,null,null,null,null,null,null,null,null)
D.fxK=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fxR=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.frr=new B.F(!0,A.bM,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.y("Example  GA847",null,D.frr,null,null,null,null,null,null,null,null,null)
D.fyo=new B.y("Design shapes",null,A.jl,null,null,null,null,null,null,null,null,null)
D.fyz=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new B.y("Non-stop (loop)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fyR=new B.y("Hati ya Kuhoweya",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fz9=new B.y("Photo studio",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fzD=new B.y("Add your picture",null,A.k4,null,null,null,null,null,null,null,null,null)
D.fkp=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzE=new B.y("Enter document code",null,D.fkp,null,A.L,null,null,null,null,null,null,null)
D.fzF=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new B.F(!0,E.ne,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new B.y("Delete this book?",null,D.fhS,null,A.L,null,null,null,null,null,null,null)
D.fmB=new B.F(!0,E.ne,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB3=new B.y("Your library",null,D.fmB,null,null,null,null,null,null,null,null,null)
D.fB9=new B.y("Delete",null,A.aSO,null,null,null,null,null,null,null,null,null)
D.fBc=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,A.Ag,null,null,null,null,null,null,null,null,null)
D.fBo=new B.y("Element flies in",null,A.aT0,null,null,null,null,null,null,null,null,null)
D.V4=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.y("Cancel",null,E.aTa,null,null,null,null,null,null,null,null,null)
D.fCb=new B.y("The lines and circles that come with the design",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fqf=new B.F(!0,A.he,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCC=new B.y("DOCUMENT CODE",null,D.fqf,null,null,null,null,null,null,null,null,null)
D.fDs=new B.y("Quotes",null,G.a9W,null,null,null,null,null,null,null,null,null)
D.fjN=new B.F(!0,O.lv,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDB=new B.y("Add a picture",null,D.fjN,null,null,null,null,null,null,null,null,null)
D.fDJ=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.UG,null,A.L,null,null,null,null,null,null,null)
D.fDN=new B.y("Look & feel",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fDS=new B.y("Rings",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fDY=new B.y("W",null,A.t7,null,null,null,null,null,null,null,null,null)
D.fE7=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.UQ,null,A.L,null,null,null,null,null,null,null)
D.fEs=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fFd=new B.y("Add page",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fFu=new B.y("Malipo ya Awamu ya Mahari",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fke=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new B.y("Create with AI",null,D.fke,null,A.L,null,null,null,null,null,null,null)
D.fGd=new B.y("Apply look",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fkW=new B.F(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH0=new B.y("Type your presentation below",null,D.fkW,null,A.L,null,null,null,null,null,null,null)
D.fH3=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aTK,null,A.L,null,null,null,null,null,null,null)
D.fH5=new B.y("Keep it",null,A.ch,null,null,null,null,null,null,null,null,null)
D.ffD=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new B.y("Done",null,D.ffD,null,null,null,null,null,null,null,null,null)
D.fHx=new B.y("Delete",null,A.nG,null,null,null,null,null,null,null,null,null)
D.fHH=new B.y("Hati ya Kiapo cha Uongozi",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fj6=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIB=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fj6,null,A.L,null,null,null,null,null,null,null)
D.fJ_=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fJ5=new B.y("Layout",null,A.UV,null,null,null,null,null,null,null,null,null)
D.fJJ=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fJS=new B.y("X",null,A.t7,null,null,null,null,null,null,null,null,null)
D.fKs=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,X.E2,null,null,null,null,null,null,null,null,null)
D.fL1=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fLf=new B.y("Hati ya Kuhowa",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fLh=new B.y("Choose a class template",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fLj=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fLq=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fLD=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fLK=new B.y("Done",null,A.aTx,null,null,null,null,null,null,null,null,null)
D.fLV=new B.y("Ending celebration",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fLW=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fMa=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,X.vb,null,null,null,null,null,null,null,null,null)
D.fN9=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fNa=new B.y("What would you like to do?",null,D.aSV,null,null,null,null,null,null,null,null,null)
D.fNf=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNM=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.y("Hati (Documents)",null,A.fv,null,null,null,null,null,null,null,null,null)
D.fO2=new B.y("Done",null,A.lm,null,null,null,null,null,null,null,null,null)
D.frh=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO7=new B.y("Delete presentation?",null,D.frh,null,A.L,null,null,null,null,null,null,null)
D.fOr=new B.y("After the last slide it starts again from the first",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fOD=new B.y("\ud83c\udf33",null,A.E1,null,A.L,null,null,null,null,null,null,null)
D.fOV=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fP1=new B.y("Transfer document",null,A.oF,null,null,null,null,null,null,null,null,null)
D.fPc=new B.y("Add to the slides",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fPz=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fPO=new B.y("Make a book",null,K.aSn,null,null,null,null,null,null,null,null,null)
D.fPS=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fjG=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPT=new B.y("Keep this page open until it finishes.",null,D.fjG,null,null,null,null,null,null,null,null,null)
D.fPV=new B.y("Making your video",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fQ_=new B.y("LANGUAGE",null,W.t8,null,null,null,null,null,null,null,null,null)
D.fQ6=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fQe=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQg=new B.y("Upload a different logo",null,A.ch,null,null,null,null,null,null,null,null,null)
D.fQx=new B.y("Delete from the database?",null,A.k4,null,null,null,null,null,null,null,null,null)
D.fQy=new B.y("H",null,A.t7,null,null,null,null,null,null,null,null,null)
D.fQY=new B.y("NGMY Quotes",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fRr=new B.y("Cover",null,D.aTG,null,null,null,null,null,null,null,null,null)
D.fRv=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fRw=new B.y("Each page becomes its own slide you can present",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fRU=new B.y("Y",null,A.t7,null,null,null,null,null,null,null,null,null)
D.fS5=new B.y("Crop the picture",null,A.lm,null,null,null,null,null,null,null,null,null)
D.fSc=new B.y("Edit text",null,A.JZ,null,null,null,null,null,null,null,null,null)
D.fUv=B.dV("a8N")
D.Ed=new C.axM(0,"none")
D.aXe=new C.axM(1,"zipCrypto")
D.aXf=new C.axM(2,"aes")
D.hfo=new F.PO("","",null)
D.hgv=new C.bdn(null)
D.hhF=new C.a_2(null)
D.hkk=new C.adF(null)
D.hkm=new C.aF2(null)
D.hn7=new C.a0i(null)
D.hnn=new C.a0P(null)
D.hnI=new C.bv_(null)})();(function staticFields(){$.hkf=null
$.hkg=null
$.hkh=null
$.hki=null
$.h1Z=B.vh("_lastQuoRemDigits")
$.h2_=B.vh("_lastQuoRemUsed")
$.ay8=B.vh("_lastRemUsed")
$.h20=B.vh("_lastRem_nsh")
$.qj=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7A=B.U(x.N,x.I)
$.h_o=!1
$.hp8=B.U(B.av("l0"),x.N)
$.hpl=B.U(B.av("l0"),x.E)
$.hnj=!1
$.bAy="q"
$.QP=0
$.CX=B.U(x.N,B.av("ai<zO>"))
$.hnG=!1
$.h3C=!1
$.hu3=null
$.hYG=B.U(x.N,B.av("aA<n?>"))
$.KK=""
$.j3=0
$.hh3=function(){var w=x.N
return B.U(w,w)}()
$.hh2=B.U(x.N,x.R)
$.h3X=!1
$.ago=B.U(x.N,x.E)
$.h4L=0
$.blp=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"inh","Dh",()=>C.baQ(0))
w($,"inf","a32",()=>C.baQ(1))
w($,"ing","hxP",()=>C.baQ(2))
w($,"ine","h8G",()=>$.a32().vh(0))
w($,"inc","hxN",()=>C.baQ(1e4))
w($,"ind","hxO",()=>B.Ev(8))
w($,"ij2","hvP",()=>B.Ev(0))
w($,"ija","hvT",()=>B.Ev(0))
w($,"ij9","hvS",()=>B.c0w(0))
w($,"ir1","hzQ",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a5z.gdV(D.a5z),v=v.gaf(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"irs","bF5",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n1(new C.fKI(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.n1(new C.fKJ(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.n1(new C.fKK(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.n1(new C.fKV(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.n1(new C.fL_(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.n1(new C.fL0(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.n1(new C.fL1(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.n1(new C.fL2(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.n1(new C.fL3(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.n1(new C.fL4(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.n1(new C.fL5(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.n1(new C.fKL(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.n1(new C.fKM(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.n1(new C.fKN(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.n1(new C.fKO(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.n1(new C.fKP(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.n1(new C.fKQ(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.n1(new C.fKR(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.n1(new C.fKS(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.n1(new C.fKT(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.n1(new C.fKU(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.n1(new C.fKW(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.n1(new C.fKX(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.n1(new C.fKY(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.n1(new C.fKZ(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.av("O<EY>"))})
w($,"ir4","hzS",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["ld7jO260cj1t1GW1qJoENjxOBV4="]=a.current})($__dart_deferred_initializers__);