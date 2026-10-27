((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,U,A4,Af,Ag,A5,Ah,Ai,C={
th(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fIE(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Iz(d){var w
if(d===0)return $.C7()
if(d===1)return $.a15()
if(d===2)return $.hci()
if(Math.abs(d)<4294967296)return C.b7m(A.o.N(d))
w=C.hwP(d)
return w},
b7m(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.th(4,w)
return new C.nz(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.th(1,w)
return new C.nz(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.az(d,16)
v=C.th(2,w)
return new C.nz(v===0?!1:s,w,v)}v=A.o.am(A.o.gahU(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.am(d,65536)}v=C.th(v,w)
return new C.nz(v===0?!1:s,w,v)},
hwP(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.S(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.C7()
w=$.hch()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kW(A.aG.gaO(w))
v.$flags&2&&B.ah(v,13)
v.setFloat64(0,d,!0)
v=w[7]
t=w[6]
s=(v<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new C.nz(!1,r,4)
if(s<0)p=q.m_(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fIF(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
h_l(d,e,f,g){var w,v,u,t,s,r=A.o.am(f,16),q=A.o.G(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fp(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
h_g(d,e,f,g){var w,v,u,t,s=A.o.am(f,16)
if(A.o.G(f,16)===0)return C.fIF(d,e,s,g)
w=e+s+1
C.h_l(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hwS(d,e,f,g){var w,v,u,t,s=A.o.am(f,16),r=A.o.G(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fp(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fp(u,r)}w&2&&B.ah(g)
g[n]=o},
cAp(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hwQ(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b7n(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}},
h_m(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.am(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.am(r,65536)}},
hwR(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ee((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nz:function nz(d,e,f){this.a=d
this.b=e
this.c=f},
cAq:function cAq(){},
cAr:function cAr(){},
cAs:function cAs(d,e){this.a=d
this.b=e},
cAt:function cAt(d){this.a=d},
aP7:function aP7(d,e){this.a=d
this.b=e},
fQn(d,e,f){var w=new C.Qq(d,A.o.am(Date.now(),1000),e)
w.Q=f
return w},
Qq:function Qq(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a2g:function a2g(d,e){this.a=d
this.b=e},
bEO:function bEO(d){this.a=d
this.c=this.b=0},
hfv(){return new C.bD9()},
bD9:function bD9(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
csA:function csA(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hwx(d,e,f){var w,v,u,t,s
if(d.gaj(d))return new Uint8Array(0)
w=new Uint8Array(B.co(d.gcOK(d)))
v=f*2+2
u=C.fY0(C.fY2(),64)
t=new C.cdg(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cdh(e,1000,v)
s=new Uint8Array(v)
return A.aG.dj(s,0,t.cCG(w,0,s,0))},
csy:function csy(d,e){this.c=d
this.d=e},
av1:function av1(d,e){this.a=d
this.b=e},
csB:function csB(d,e,f,g){var _=this
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
b63:function b63(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
csz:function csz(){this.a=$},
fZM(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hfe(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bBK:function bBK(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fO8(d,e){e&=31
return(d&$.pJ[e])<<e>>>0},
n6(d,e){e&=31
return(d>>>e|C.fO8(d,32-e))>>>0},
fY1(d){var w,v=new C.aqL()
if(B.iC(d))v.aH3(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fY2(){var w=C.fY1(0),v=new Uint8Array(4),u=x.S
u=new C.cdi(w,v,A.CY,5,B.c0(5,0,!1,u),B.c0(80,0,!1,u))
u.lb(0)
return u},
fY0(d,e){var w=new C.cde(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cdd:function cdd(){},
cdh:function cdh(d,e,f){this.a=d
this.b=e
this.c=f},
cdb:function cdb(){},
aqK:function aqK(d){this.a=d},
cdg:function cdg(d){this.a=$
this.b=d
this.c=$},
cdc:function cdc(){},
cda:function cda(){},
aqL:function aqL(){this.b=this.a=$},
cdf:function cdf(){},
cdi:function cdi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cde:function cde(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cd9:function cd9(){},
cd8:function cd8(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bKK:function bKK(){},
bKL:function bKL(d){this.a=d},
hzJ(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b7C:function b7C(){},
bLD:function bLD(d,e){this.a=d
this.b=!1
this.c=e},
bLE:function bLE(){},
hIs(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
atG(d){var w=0,v=B.j(x.H),u
var $async$atG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eGj?2:4
break
case 2:w=5
return B.b(A.jS.fN("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$atG)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jS.fN("SystemChrome.setEnabledSystemUIOverlays",C.hIs(null),u),$async$atG)
case 6:case 3:return B.h(null,v)}})
return B.i($async$atG,v)},
atJ:function atJ(d,e){this.a=d
this.b=e},
a6Q:function a6Q(d){this.a=d},
fEF(d,e){return new C.aTr(e,d,null)},
aTr:function aTr(d,e,f){this.e=d
this.c=e
this.a=f},
ayA:function ayA(d,e,f,g,h){var _=this
_.ad=d
_.ah=e
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
hL3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.ffo(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bv(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
ffo:function ffo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
alF(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$alF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.af7("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$alF)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d7(s,x.f)
t=B.cC(t,new C.bVQ(),t.$ti.k("G.E"),x.P)
r=B.B(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bVR())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alF,v)},
alH(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$alH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alF(),$async$alH)
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
l=new B.Q(Date.now(),0,!1).a4().ab()
p=m.a
k=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n5("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$alH)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("G.E"))
w=10
return B.b(B.n5("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],t,q),null),$async$alH)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alH,v)},
bVS(d){return C.hkT(d)},
hkT(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bVS=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.af7("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hC),$async$bVS)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Uu(B.a_(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a7(m)
$.al.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bVS,v)},
alG(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$alG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alF(),$async$alG)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n7(r,new C.bVT(d))
w=4
return B.b(B.n5("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),null),$async$alG)
case 4:t=f
w=t?5:6
break
case 5:s=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aN9("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$alG)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alG,v)},
bVQ:function bVQ(){},
bVR:function bVR(){},
bVT:function bVT(d){this.a=d},
hUS(d,e,f){return B.c2(A.K,null,new C.fuR(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fuR:function fuR(d,e,f){this.a=d
this.b=e
this.c=f},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGV:function aGV(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVs:function eVs(d){this.a=d},
eVt:function eVt(d){this.a=d},
eVu:function eVu(d,e,f){this.a=d
this.b=e
this.c=f},
eVp:function eVp(d){this.a=d},
eVq:function eVq(d){this.a=d},
eVr:function eVr(d,e){this.a=d
this.b=e},
eVj:function eVj(d){this.a=d},
eVh:function eVh(d){this.a=d},
eVi:function eVi(d){this.a=d},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVx:function eVx(d,e){this.a=d
this.b=e},
eVn:function eVn(d,e,f){this.a=d
this.b=e
this.c=f},
eVm:function eVm(d,e,f){this.a=d
this.b=e
this.c=f},
eVv:function eVv(d,e){this.a=d
this.b=e},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVB:function eVB(d){this.a=d},
eVC:function eVC(d,e){this.a=d
this.b=e},
eVA:function eVA(d,e){this.a=d
this.b=e},
eVz:function eVz(){},
h1I(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aF(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d7(w,x.f)
v=B.cC(v,new C.f1A(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a3<G.E>")
v=B.B(new B.a3(v,new C.f1B(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0g(d){return C.hMj(d)},
hMj(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0g=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fhI(n)
t=4
j=m
i=C
w=7
return B.b(B.a0Q("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0g)
case 7:j.$1(i.h1I(f))
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
return B.b(B.ay(),$async$a0g)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.h1I(B.aT(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a3<G.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.f1J(d),$async$a0g)
case 13:p=j.B(new i.a3(h,new g.fhG(f),o),o.k("G.E"))
A.d.b0(p,new C.fhH())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0g,v)},
afH(d,e){return C.hUx(d,e)},
hUx(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$afH=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fuo(),x.P)
n=B.B(n,n.$ti.k("ai.E"))
r=A.R.an(n,null)
q=!1
t=4
w=7
return B.b(B.afz("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afH)
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
return B.b(B.ay(),$async$afH)
case 12:p=g
w=13
return B.b(p.ap("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afH)
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
return B.i($async$afH,v)},
f1J(d){return C.hB6(d)},
hB6(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f1J=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$f1J)
case 7:r=f
q=r.rA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kr(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.b0(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f1J,v)},
aex(d,e){return C.hKW(d,e)},
hKW(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aex=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aex)
case 6:s=g
r=B.b0(x.N)
q=s.rA("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fW(r,q)
J.cd(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a2(q).k("cn.E"))
w=7
return B.b(s.ap("StringList","ngmy_books_deleted_v1_"+r,q),$async$aex)
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
return B.b(C.a0g(d),$async$aex)
case 8:n=g
J.n7(n,new C.ff4(e))
w=9
return B.b(C.afH(d,n),$async$aex)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aex,v)},
hUX(d,e){return B.a6(d,!1).ck(B.eu(new C.fvc(e),!0,null,x.H))},
hwU(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e2(w.d,new C.cBM())},
o0:function o0(d,e,f){this.a=d
this.b=e
this.c=f},
f1A:function f1A(){},
f1B:function f1B(){},
fhI:function fhI(d){this.a=d},
fhG:function fhG(d){this.a=d},
fhH:function fhH(){},
fuo:function fuo(){},
ff4:function ff4(d){this.a=d},
fvc:function fvc(d){this.a=d},
X4:function X4(d,e){this.c=d
this.a=e},
avz:function avz(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cBM:function cBM(){},
cBO:function cBO(d,e){this.a=d
this.b=e},
cBR:function cBR(d){this.a=d},
cBS:function cBS(d){this.a=d},
cBQ:function cBQ(){},
cBT:function cBT(d,e){this.a=d
this.b=e},
cBP:function cBP(d){this.a=d},
cBU:function cBU(){},
cBN:function cBN(d,e){this.a=d
this.b=e},
cBV:function cBV(){},
cBI:function cBI(d){this.a=d},
cBG:function cBG(d){this.a=d},
cBH:function cBH(d){this.a=d},
cBJ:function cBJ(d,e){this.a=d
this.b=e},
cBF:function cBF(d){this.a=d},
cBE:function cBE(d){this.a=d},
cBC:function cBC(d,e){this.a=d
this.b=e},
cBD:function cBD(d){this.a=d},
cBL:function cBL(){},
cBK:function cBK(d){this.a=d},
cBB:function cBB(d,e){this.a=d
this.b=e},
cBA:function cBA(d,e){this.a=d
this.b=e},
cBz:function cBz(d,e){this.a=d
this.b=e},
cBW:function cBW(d){this.a=d},
X2:function X2(d,e,f){this.c=d
this.d=e
this.a=f},
aCO:function aCO(d,e,f){this.a=d
this.b=e
this.c=f},
avv:function avv(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cB2:function cB2(d){this.a=d},
cB1:function cB1(d){this.a=d},
cB4:function cB4(d,e,f){this.a=d
this.b=e
this.c=f},
cBc:function cBc(){},
cBd:function cBd(d){this.a=d},
cB5:function cB5(d,e,f){this.a=d
this.b=e
this.c=f},
cB3:function cB3(d,e){this.a=d
this.b=e},
cB7:function cB7(d,e){this.a=d
this.b=e},
cB8:function cB8(d,e){this.a=d
this.b=e},
cB9:function cB9(d,e){this.a=d
this.b=e},
cB6:function cB6(d){this.a=d},
cBb:function cBb(d){this.a=d},
cBa:function cBa(d,e){this.a=d
this.b=e},
cBi:function cBi(d){this.a=d},
cBe:function cBe(d,e){this.a=d
this.b=e},
cBf:function cBf(d,e){this.a=d
this.b=e},
cBg:function cBg(d,e){this.a=d
this.b=e},
cBh:function cBh(d,e){this.a=d
this.b=e},
avx:function avx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hOE(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ed(v,x.cK).by(new C.fme(),x.H).eN(new C.fmf())}}else if(s)C.h37()}catch(t){}},
h37(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ed(v,x.cK).eN(new C.f6_())}catch(u){}},
hOH(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fme:function fme(){},
fmf:function fmf(){},
f6_:function f6_(){},
h7C(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gK(A.a.e4(v,w,"").split(":"))},
h7z(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kN)return null
return A.a.aY(w,14)},
fMT(d){var w
if(d.b!==D.kN)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aY(w,21)},
hP6(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h7D(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hP1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ae("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.ae("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ae("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kz(0,f)
t=x.N
u=B.cC(u,new C.fnd(),B.a2(u).k("G.E"),t)
s=B.B(u,B.a2(u).k("G.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kz(0,f),u=new B.Iy(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Q7(A.a.ao(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Q7(A.a.aY(f,q)):p)+"\\.?$"
l=B.ae(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cA(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hP_(d,e){var w,v,u,t,s,r=B.a2(e).k("cy<1>"),q=B.B(new B.cy(e,r),r.k("G.E"))
A.d.b0(q,new C.fnc())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aO6(w,u,s,0)}return w},
hP3(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a1e:$.hei(),s=x.N,r=B.T(s,s)
for(s=t.gdL(t),s=s.gai(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
h7A(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f2B(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h7C(q)===e)return q}return null},
hP4(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aY(v,u)
return A.d.gK(D.FA).a},
hP5(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.acs(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.acs(0,0,0)
v=C.f2B(b6,b0)
u=C.f2B(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hP3(b2,C.hP1(C.h7A(b2),v.r))
if(s.a!==0){u.r=C.hP_(C.h7A(b4),s)
t=s.a}}r=B.b0(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h7C(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.eh(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f2B(b6,n)
i=C.f2B(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gK(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fMT(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h7z(a8)===a0||C.fMT(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.PF(a1,new C.fnj(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iV
$.iV=a9+1
A.d.L(a1,new C.eD(""+1000*a6+"_"+a9,D.kN,a2,a3,a4,a5,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,d.at,D.bd,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cf,0,"","","","","",!1,0));++e}b5.f=new B.Q(Date.now(),0,!1)
return new B.acs(k,t,e)},
hP0(d){var w=C.hP4(d)
if(d.w==="hati_kuhowa")return C.h6X("",w)
return C.h6W("",w)},
fnd:function fnd(){},
fnc:function fnc(){},
fnj:function fnj(d){this.a=d},
h2R(){var w=new B.Q(Date.now(),0,!1),v=new C.f52()
return B.t(v.$1(B.bP(w)))+"/"+B.t(v.$1(B.bF(w)))+"/"+B.bx(w)},
fN0(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fob(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kN&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h7Q(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fob(d)
w=B.bi(u)
if(w==null)return!C.fob(d)
return new B.Q(Date.now(),0,!1).a4().cV(w.a4().bM(18e9))},
hPM(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.Q(Date.now(),0,!1).a4().ab()},
hoT(d){return A.a.i(d).toLowerCase()},
anO(d){return C.hoV(d)},
hoV(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$anO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$anO)
case 7:r=f
p=r.rA("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hTh(),B.U(o).k("J<1,n>")).bX(0,new C.c5s())
o=B.d8(o,o.$ti.k("G.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.b0(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$anO,v)},
anN(d,e){return C.hoU(d,e)},
hoU(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.anO(d),$async$anN)
case 3:r=g
if(!J.cd(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$anN)
case 8:q=g
w=9
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pS(r)),$async$anN)
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
return B.i($async$anN,v)},
anP(d,e){return C.hoW(d,e)},
hoW(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.anO(d),$async$anP)
case 3:r=g
if(!J.hG(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$anP)
case 8:q=g
w=9
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pS(r)),$async$anP)
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
return B.i($async$anP,v)},
TO(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$TO=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fG9&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$TO)
case 7:r=a7
q=B.aT(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aF(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jn(p),d=d.gai(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Uu(B.a_(f.a(n.b),e,a0)))}$.a5F=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a7(a2)
$.al.$1("[kiapo] local load: "+B.t(m))
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
return B.b(B.c_(),$async$TO)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tw("civic_hati_kiapo_uongozi",null,A.ef),$async$TO)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jn(f.a(J.q(l,"byState"))),e=e.gai(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Uu(B.a_(f.a(j.b),o,d)))}for(o=k,o=new B.cP(o,B.a2(o).k("cP<1,2>")).gai(0);o.C();){f=o.d
f.toString
i=f
h=$.a5F.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbn())f=d===e.gbn()&&f.b<e.gct()
else f=!0
f=!f}else f=!0
if(f)$.a5F.n(0,i.a,i.b)}w=20
return B.b(C.anQ(),$async$TO)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a7(a3)
$.al.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fG9=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TO,v)},
anQ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$anQ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$anQ)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a5F,o=new B.cP(o,B.a2(o).k("cP<1,2>")).gai(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ac())}w=7
return B.b(s.ap("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.an(r,null)),$async$anQ)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a7(l)
$.al.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$anQ,v)},
aXT(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aXT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.TO(!1),$async$aXT)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a5F.h(0,t)
r=s==null?null:s.ht()
if(r==null){u=null
w=1
break}u=C.bzi(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXT,v)},
a5G(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5G=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.Q(Date.now(),0,!1)
o=a1.ht()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5F.n(0,d,o)
$.fG9=!0
w=3
return B.b(C.anQ(),$async$a5G)
case 3:w=4
return B.b(B.c_(),$async$a5G)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a5F,n=new B.cP(n,B.a2(n).k("cP<1,2>")).gai(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ac())}w=9
return B.b(B.n5("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab()],e,x.z),null),$async$a5G)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a7(a0)
$.al.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5G,v)},
anR(d){var w=0,v=B.j(x.T),u,t,s
var $async$anR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a3O(A.eE),$async$anR)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$anR)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aXS(t,d),$async$anR)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anR,v)},
aXS(d,e){return C.hoX(d,e)},
hoX(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aXS=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c_(),$async$aXS)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ae("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eQ().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hX("media")
w=8
return B.b(p.wj(q,new Uint8Array(B.co(d)),D.bqO),$async$aXS)
case 8:n=p.BP(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a7(k)
$.al.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aXS,v)},
Jp(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.ek(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bd,4280172719,2,d,0,0,"",D.cf,D.cP,l,m,n)},
f4h(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.ek(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eY,j,k,l)},
fK6(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ek(h,!1,j,A.aB,"marriage_field_"+d+":"+A.k.a9(g,3),4280640491,i,A.cC,A.O,"",v,w,null,"","",0,!1,"",0,D.bd,4280172719,2,k,0,0,"",D.cf,D.cP,g,e,f)},
f3Q(d,e,f,g){return C.f4h(0,0.002,D.fm,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fK7(d,e,f,g,h,i,j,k){var w=C.cB()
return C.ek(A.pO,!1,j,A.aB,"marriage_field_"+d+":"+A.k.a9(g,3),4280640491,i,A.bi,A.a4,"",h,w,null,"","",0,!1,"",0,D.bd,4280172719,2,k,0,0,"",D.cf,D.cP,g,e,f)},
h2Q(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gK(A.a.e4(v,w,"").split(":"))},
bzi(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.h2Q(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kN&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.ht()}h=C.fMx(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.AO(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.h2Q(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kN&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fmc(a2))}else A.d.bm(a1.z,new C.fmd())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fob(a0))a0.ax=a6.f.a4().ab()
return a0},
fMx(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fp_(D.a2e),l=C.cB(),k=x.u,j=B.a([C.ek(A.bg,!1,s,A.aB,"marriage_locked_bg",r,24,A.bi,A.a4,"",1,C.cB(),m,"","",0,!1,"",0,D.bd,q,2,"",0,0,"",D.cf,D.ld,1,0,0)],k),i=B.a([],k)
i.push(C.Jp("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Jp("TAREHE:",A.bg,o,16,A.bi,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fK6("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.h2R()))
i.push(C.f3Q(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Jp("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Jp("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cC,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f4h(0,0.002,D.fm,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fK7("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fK7("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fK7("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f4h(268435456,0.175,D.bd,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Jp("VIDEO YA KIAPO",A.bg,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ek(A.bg,!1,s,A.aB,"__kiapo_video__",r,24,A.bi,A.a4,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bd,q,2,"",0,0,"",D.cf,D.ld,0.77,0.115,0.492))
i.push(C.Jp("Rais Anayeapa:",A.bg,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Jp("Jina:",A.bg,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fK6("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.f3Q(0.195,0.7130000000000001,0.62,n))
i.push(C.Jp("Sahihi:",A.bg,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ek(A.bg,!1,s,A.aB,"marriage_sign_rais",0,24,A.bi,A.a4,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bd,0,2,"",0,0,"",D.cf,D.eY,0.38,0.21500000000000002,0.73))
i.push(C.f3Q(0.21500000000000002,0.795,0.38,n))
i.push(C.Jp("Tarehe:",A.bg,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fK6("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.h2R()))
i.push(C.f3Q(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f4h(0,0.032,D.bd,o,1,"state_box",0.72,0.14,0.875),C.Jp("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.r1(4294967035,t,0,0,j,l,D.pD,"","",u,D.dc)
return C.AO(t,t,t,t,D.nH,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aeI(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aeI=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.P(D.eB8)
w=1
break}w=3
return B.b(C.TO(!0),$async$aeI)
case 3:w=4
return B.b(C.aXT(p),$async$aeI)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h7Q(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c2(D.b6c,null,new C.fh3(p),f,!0,!0,!1,A.le,!1,!1,x.N),$async$aeI)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fh4(),f,null,!0,!0,x.y),$async$aeI)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fMx(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.P(B.b2(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fMx(p))
case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
f52:function f52(){},
c5s:function c5s(){},
fmc:function fmc(d){this.a=d},
fmd:function fmd(){},
fh3:function fh3(d){this.a=d},
fh1:function fh1(d){this.a=d},
fh2:function fh2(d){this.a=d},
fh4:function fh4(){},
fh_:function fh_(d){this.a=d},
fh0:function fh0(d){this.a=d},
aol:function aol(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBD:function aBD(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e0v:function e0v(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d){this.a=d},
vW(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.ek(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.bd,4280172719,2,d,0,0,"",D.cf,D.cP,l,m,n)},
h2u(d,e,f){var w=4291404327
return B.a([C.pI(0,f,D.eG,w,2,"ring_l",f,d-f*0.42,e),C.pI(0,f,D.eG,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f3g(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pI(4294967288,f,D.eG,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pI(h,s,D.eG,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pI(h,f*0.46,D.eG,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pI(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.ek(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eY,j,k,l)},
f3f(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ek(h,!1,k,A.aB,i?u+A.k.a9(g,3)+":"+A.o.a9(j,1):u+A.k.a9(g,3),4280640491,j,A.cC,A.O,"",v,w,null,"","",0,!1,"",0,D.bd,4280172719,2,l,0,0,"",D.cf,D.cP,g,e,f)},
bwK(d,e,f,g){return C.pI(0,0.002,D.fm,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h2t(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pI(0,0.036,D.bd,h,1.4,"banner_box_"+d,w,v,e),C.vW(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h7B(){var w=new B.Q(Date.now(),0,!1),v=new C.fni()
return B.t(v.$1(B.bP(w)))+"/"+B.t(v.$1(B.bF(w)))+"/"+B.bx(w)},
h2v(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vW(r+".",A.bg,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f3f("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bwK(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vW("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ek(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a4,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bd,0,2,"",0,0,"",D.cf,D.eY,s,t,g-0.004),C.bwK(t,g+0.044,s,w)],x.u)},
af9(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d_g,D.c6E,D.cTA,D.cVk],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gai(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fJr(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fp_(d.d),v=B.a([C.ek(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cB(),w,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.ld,1,0,0)],x.u)
A.d.v(v,C.hDt(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hDt(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vW("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h2u(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h2u(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f3g(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f3g(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vW("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pI(0,0.062,D.eG,b1,1.6,"crest_o",0.11,0.445,0.012),C.pI(0,0.046,D.eG,b1,1,"crest_i",0.084,0.458,0.02),C.vW("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pI(0,0.002,D.fm,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pI(b9,0.016,D.kO,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pI(0,0.002,D.fm,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vW("TAREHE:",A.bg,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f3f("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.h7B()),C.bwK(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vW(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pI(c0,0.0026,D.bd,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pI(c3.e,0.138,D.bd,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.ek(A.bg,!1,b9,A.aB,"marriage_field_utangulizi:"+A.k.a9(0.82,3),b2,19,A.bi,A.cq,"",0.128,s,a9,"","",0,!1,"",0,D.bd,b3,2,c5,0,0,"",D.cf,D.cP,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pI(0,0.036,D.bd,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.ek(A.L,!1,c0,A.aB,"marriage_field_nimetowe_label:"+A.k.a9(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bd,b3,2,c7,0,0,"",D.cf,D.cP,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h2t(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vW(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f3f("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iV
$.iV=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iV
$.iV=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eD(""+1000*i+"_"+h,D.cP,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.aB,c0,A.bg,a9,D.bd,b2,b3,2,0,!1,s,0,D.cf,0,"","","","","",!1,0),j,new C.eD(""+1000*f+"_"+e,D.eY,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.fm,0,b5,0.8,0,!1,g,0,D.cf,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iV
$.iV=p+1
i=Date.now()
h=$.iV
$.iV=h+1
g=Date.now()
f=$.iV
$.iV=f+1
e=Date.now()
a3=$.iV
$.iV=a3+1
A.d.v(d,B.a([new C.eD(""+1000*s+"_"+p,D.cP,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.aB,b7,A.dJ,a9,D.bd,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cf,0,"","","","","",!1,0),new C.eD(""+1000*i+"_"+h,D.eY,a1,a2,0.046,0.025875,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.bd,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cf,0,"","","","","",!1,0),new C.eD(""+1000*g+"_"+f,D.cP,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.aB,b7,A.L,a9,D.bd,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cf,0,"","","","","",!1,0),new C.eD(""+1000*e+"_"+a3,D.eY,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.bd,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cf,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h2t("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a23||w===D.a25||w===D.a22||w===D.a24){w=t-0.008
A.d.v(c2,C.f3g(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f3g(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pI(0,a4,D.bd,c0,1.3,"wit_table_border",0.82,0.09,t),C.pI(c0,a4,D.bd,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pI(0,0.0022,D.fm,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vW("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vW("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h2v("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h2v("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pI(0,0.11,D.bd,c0,1.2,"mw_box",0.82,0.09,t),C.vW("MWANDISHI",A.bg,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vW("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f3f("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bwK(0.215,p,0.3116,b5),C.vW("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.ek(A.bg,!1,b6,A.aB,"marriage_sign_mwandishi",0,24,A.bi,A.a4,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bd,0,2,"",0,0,"",D.cf,D.eY,0.3161999999999999,0.5738,s-0.044),C.bwK(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pI(0,0.032,D.bd,c0,1,"state_box",0.7,0.15,a8),C.vW("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hP2(d){var w,v,u,t=null,s=B.b_(d.f),r=B.b_(d.r),q=C.fNa(d.d),p=new C.fne(s),o=new C.fnf(s),n=d.z,m=n===D.a23||n===D.a25||n===D.a22||n===D.a24,l=n===D.aBg||n===D.a26||n===D.aBh,k=B.bZ(0,B.fI(q,A.A,t,t,A.cn,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a26?26:16
i.push(new C.fnh().$1$size(w))}if(n===D.aBi)i.push(D.fe7)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hH,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.aq)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aK6,p.$1$w(0.9),D.aK6,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b29,t,n,w,t,t,A.n),t,t,t,t,A.afk,t,t,t))
i.push(A.aq)
i.push(new C.fng(r).$1("NIMETOWE"))
i.push(A.ha)
v=J.e1(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Kx,new B.cx(A.aX,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bH(1,A.bo,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.X,t,A.b_,A.q,B.a([k,new B.C(A.adY,B.v(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
h6W(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.af9(e,t)
if(r==null)r=A.d.gK(D.FA)
w=C.cB()
v=C.r1(r.e,t,0,0,C.fJr(r,0.165,y.O,D.cVS,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pD,"","",s,D.dc)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.AO(t,t,t,t,D.nH,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h6X(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.af9(e,t)
if(r==null)r=A.d.gK(D.FA)
w=C.cB()
v=C.r1(r.e,t,0,0,C.fJr(r,0.165,y.f,D.cRP,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pD,"","",s,D.dc)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.AO(t,t,t,t,D.nH,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bAE(d,e,f){var w=0,v=B.j(x.T),u
var $async$bAE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fyE(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAE,v)},
aeJ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aeJ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a3<1>")
p=B.B(new B.a3(i,new C.fh7(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.JO,null,new C.fh8(p),d,!0,!0,!1,A.le,!1,!1,x.N),$async$aeJ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).ht())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bAE(d,"Hati ya Kuhowa",D.FA),$async$aeJ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.K2(d,"Tafuta jimbo\u2026","",A.jO,"Chagua jimbo"),$async$aeJ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h6W(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
aeK(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aeK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a3<1>")
p=B.B(new B.a3(i,new C.fhb(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.JO,null,new C.fhc(p),d,!0,!0,!1,A.le,!1,!1,x.N),$async$aeK)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).ht())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bAE(d,"Hati ya Kuhoweya",D.FA),$async$aeK)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.K2(d,"Tafuta jimbo\u2026","",A.jO,"Chagua jimbo"),$async$aeK)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h6X(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aeK,v)},
aeL(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aeL=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a3<1>")
m=B.B(new B.a3(i,new C.fhf(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(D.JO,null,new C.fhg(m),d,!0,!0,!1,A.le,!1,!1,x.N),$async$aeL)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).ht())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bAE(d,"Malipo ya Awamu ya Mahari",D.OM),$async$aeL)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.K2(d,"Tafuta jimbo\u2026","",A.jO,"Chagua jimbo"),$async$aeL)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.af9(s,D.OM)
if(q==null)q=A.d.gK(D.OM)
n=C.cB()
p=C.r1(q.e,null,0,0,C.fJr(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cN7,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pD,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dc)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.AO(null,null,null,null,D.nH,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeL,v)},
wW:function wW(d,e){this.a=d
this.b=e},
je:function je(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fni:function fni(){},
fne:function fne(d){this.a=d},
fng:function fng(d){this.a=d},
fnh:function fnh(){},
fnf:function fnf(d){this.a=d},
fyE:function fyE(d,e){this.a=d
this.b=e},
abz:function abz(d,e,f){this.c=d
this.d=e
this.a=f},
dSU:function dSU(d,e,f){this.a=d
this.b=e
this.c=f},
dST:function dST(d,e){this.a=d
this.b=e},
dSS:function dSS(d,e){this.a=d
this.b=e},
aaZ:function aaZ(d,e,f){this.c=d
this.d=e
this.a=f},
fh7:function fh7(){},
fh8:function fh8(d){this.a=d},
fh5:function fh5(d){this.a=d},
fh6:function fh6(d){this.a=d},
fhb:function fhb(){},
fhc:function fhc(d){this.a=d},
fh9:function fh9(d){this.a=d},
fha:function fha(d){this.a=d},
fhf:function fhf(){},
fhg:function fhg(d){this.a=d},
fhd:function fhd(d){this.a=d},
fhe:function fhe(d){this.a=d},
Js(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.ek(e,!1,f,A.aB,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.bd,4280172719,2,d,0,0,"",D.cf,D.cP,k,l,m)},
BQ(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.ek(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eY,j,k,l)},
h3a(d,e,f){return C.BQ(0,0.002,D.fm,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bwU(d,e,f,g,h){return B.a([C.BQ(4294967288,0.032,D.bd,4291404327,1.15,"pill_"+d,g,f,e),C.Js(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fKb(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.BQ(0,0.002,D.fm,g,1,"orn_l_"+t,u,d,v),C.BQ(h,0.016,D.kO,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.BQ(0,0.002,D.fm,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_E(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Js(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.ek(A.L,!1,j,A.aB,"marriage_field_"+e+":"+A.k.a9(t,3),4280640491,i,A.cC,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bd,4280172719,2,k,0,0,"",D.cf,D.cP,t,u,g-0.002),C.h3a(u,g+0.018,t)],x.u)},
h3b(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.BQ(h,0.028,D.bd,h,0,"chv_"+d,g,e,f),C.BQ(w,0.024,D.kO,w,0,"chv_l_"+d,0.024,e-0.008,v),C.BQ(w,0.024,D.kO,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Js(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bwT(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Js("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ek(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d,0,24,A.bi,A.a4,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bd,0,2,"",0,0,"",D.cf,D.eY,v,w,f-0.006),C.h3a(w,f+0.016,v)],x.u)},
fNb(d){var w,v
for(w=0;w<19;++w){v=D.OY[w]
if(v.a===d)return v}return null},
hRj(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.af9(A.a.aY(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.af9(A.a.aY(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aY(k,18)
w=C.af9(u,D.OM)
v=w==null?l:w.d
if(v==null){w=C.af9(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fNb(A.a.aY(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h4_.a7(0)
$.h4b.a7(0)
t=C.fp_(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fOf(d){var w=0,v=B.j(x.T),u
var $async$fOf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c2(A.K,null,new C.fA6(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOf,v)},
wZ:function wZ(d,e){this.a=d
this.b=e},
nm:function nm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bgz:function bgz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fA6:function fA6(){},
abC:function abC(d){this.a=d},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5J:function e5J(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
adg:function adg(d,e,f){this.c=d
this.d=e
this.a=f},
fNa(d){return $.h4b.ce(0,d,new C.fp1(d))},
fp_(d){return $.h4_.ce(0,d,new C.fp0(d))},
fw(d){return B.fDN(d>>>16&255,d>>>8&255,d&255,255)},
hGs(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h5e(4294570461,4293910718,4284234270,u)
case 1:return C.h5e(4294635750,4293975240,t,4292912216)
case 2:w=C.f1Q(s,4294505966,r)
C.bwE(w,14,16,p)
C.kj(w,8,9,464,836,u,1.2)
C.BM(w,2,2,1,1,u,10)
C.BM(w,478,2,-1,1,u,10)
C.BM(w,2,852,1,-1,u,10)
C.BM(w,478,852,-1,-1,u,10)
return w
case 3:return C.f1Q(4294966515,4294373082,4289102906)
case 4:return C.hBi(C.f1Q(4294376440,4293653998,4290287194))
case 5:w=C.f1Q(4294965238,4294437098,4288444980)
C.bwE(w,14,16,4283043359)
C.kj(w,6,7,468,840,u,1)
C.kj(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,n,4294175448)
C.rl(v,n)
C.kj(v,24,24,432,806,4286209070,1)
C.a_s(v,12,12,468,12,o,3,20)
C.a_s(v,12,842,468,842,o,3,20)
C.a_s(v,12,12,12,842,o,3,20)
C.a_s(v,468,12,468,842,o,3,20)
return v
case 7:return C.hzp(4294440434,4293518297,4280228630,r)
case 8:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,m,4293911504)
C.rl(v,m)
C.kj(v,28,28,424,798,l,1)
C.fag(v,28,28,l,k)
C.fag(v,452,28,l,k)
C.fag(v,28,826,l,k)
C.fag(v,452,826,l,k)
return v
case 9:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,j,4294111986)
C.rl(v,j)
C.kj(v,18,18,444,818,4292401368,0.7)
B.iE(v,!0,C.fw(p),0,13,0,853)
return v
case 10:return C.hDf(i,4294173372)
case 11:return C.hEk(4294439140,4293449662)
case 12:return C.hzi(h,4294239432)
case 13:return C.hDM(4294244340,4293193448)
case 14:return C.hI_(4294505710,4293780694)
case 15:return C.f0Q(4294966259,4294439138,o,p,q)
case 16:return C.f0Q(4294966776,4294178544,o,g,g)
case 17:return C.f0Q(4294965493,4294504170,o,4286200650,q)
case 18:return C.f0Q(4294966519,4294373862,o,p,p)
case 19:return C.hCm()
case 20:return C.hCn()
case 21:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,h,4293976768)
C.rl(v,h)
C.bwE(v,14,16,p)
B.iE(v,!0,C.fw(u),4,475,4,9)
B.iE(v,!0,C.fw(u),4,475,844,849)
B.iE(v,!0,C.fw(u),4,9,4,849)
B.iE(v,!0,C.fw(u),470,475,4,849)
C.a_s(v,10,12,470,12,u,2,16)
C.a_s(v,10,842,470,842,u,2,16)
C.a_s(v,10,12,10,842,u,2,18)
C.a_s(v,470,12,470,842,u,2,18)
C.BM(v,2,2,1,1,t,10)
C.BM(v,478,2,-1,1,t,10)
C.BM(v,2,852,1,-1,t,10)
C.BM(v,478,852,-1,-1,t,10)
C.kj(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,s,4294438872)
C.rl(v,s)
C.kj(v,14,16,452,822,o,2.2)
C.kj(v,22,24,436,806,o,1)
C.fLt(v,!1,!1,o,p,p,36,14,16)
C.kw(v,240,20,7,o,!0)
C.kw(v,240,834,7,o,!0)
C.kw(v,18,427,7,o,!0)
C.kw(v,462,427,7,o,!0)
return v
case 23:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,i,4293910712)
C.rl(v,i)
B.iE(v,!0,C.fw(u),0,479,0,20)
B.iE(v,!0,C.fw(u),0,479,834,853)
B.iE(v,!0,C.fw(u),0,20,0,853)
B.iE(v,!0,C.fw(u),460,479,0,853)
B.iE(v,!0,C.fw(f),5,474,5,9)
B.iE(v,!0,C.fw(f),5,474,844,848)
B.iE(v,!0,C.fw(f),5,9,5,848)
B.iE(v,!0,C.fw(f),470,474,5,848)
C.kj(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hi(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xO(v,e,4294174404)
C.rl(v,e)
C.bwE(v,14,16,p)
B.iE(v,!0,C.fw(u),3,476,3,8)
B.iE(v,!0,C.fw(u),3,476,845,850)
B.iE(v,!0,C.fw(u),3,8,3,850)
B.iE(v,!0,C.fw(u),471,476,3,850)
C.kj(v,9,10,462,834,t,1)
C.kj(v,14,16,452,822,u,1.8)
C.kw(v,240,8,4,u,!0)
C.kw(v,240,846,4,u,!0)
C.kw(v,8,427,4,u,!0)
C.kw(v,472,427,4,u,!0)
C.kw(v,8,8,3,t,!0)
C.kw(v,472,8,3,t,!0)
C.kw(v,8,846,3,t,!0)
C.kw(v,472,846,3,t,!0)
return v}},
xO(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.k.U(q*w+p*t),0,255)
u=A.o.D(A.k.U(o*w+n*t),0,255)
w=A.o.D(A.k.U(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.ky(d,!1,A.d9,new B.QJ(s),r,A.cW,1,0,w-1,k,k);++k}},
rl(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f5()
n.dU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aD(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aD(v==null?0:v)
v=d.a
s=v==null?o:v.dK(u,t,o)
if(s==null)s=new B.iz()
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbd())-3,0,255)
q=A.o.D(A.k.N(s.gbe(s))-2,0,255)
p=d.a
if(p!=null)p.jk(u,t,v,r,q,255)}},
kj(d,e,f,g,h,i,j){var w,v=null,u=C.fw(i),t=e+g
B.ky(d,!0,A.d9,u,v,A.cW,j,e,t,f,f)
w=f+h
B.ky(d,!0,A.d9,u,v,A.cW,j,e,t,w,w)
B.ky(d,!0,A.d9,u,v,A.cW,j,e,e,f,w)
B.ky(d,!0,A.d9,u,v,A.cW,j,t,t,f,w)},
BM(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.ky(d,!0,A.d9,C.fw(i),u,A.cW,2,e,e+g*j,f,f)
B.ky(d,!0,A.d9,C.fw(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.ky(d,!0,A.d9,C.fw(i),u,A.cW,1,w,e+g*t,v,v)
B.ky(d,!0,A.d9,C.fw(i),u,A.cW,1,w,w,v,f+h*t)},
h5e(d,e,f,g){var w=null,v=B.hi(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xO(v,d,e)
C.rl(v,d)
B.iE(v,!0,C.fw(f),0,479,0,28)
B.iE(v,!0,C.fw(f),0,479,826,853)
B.iE(v,!0,C.fw(f),0,28,0,853)
B.iE(v,!0,C.fw(f),452,479,0,853)
C.kj(v,5,5,470,844,g,1.1)
C.kj(v,28,28,424,798,g,1.6)
C.BM(v,2,2,1,1,g,11)
C.BM(v,478,2,-1,1,g,11)
C.BM(v,2,852,1,-1,g,11)
C.BM(v,478,852,-1,-1,g,11)
return v},
f1Q(d,e,f){var w=null,v=B.hi(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xO(v,d,e)
C.rl(v,d)
C.kj(v,14,16,452,822,f,1.6)
C.kj(v,20,22,440,810,f,0.8)
return v},
bwE(d,e,f,g){var w,v=C.fw(g)
B.iE(d,!0,v,0,479,0,f-1)
w=854-f
B.iE(d,!0,v,0,479,w,853);--w
B.iE(d,!0,v,0,e-1,f,w)
B.iE(d,!0,v,480-e,479,f,w)},
hBi(d){var w,v,u=4291404327
C.bwE(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kw(d,w,8,3,u,!0)
C.kw(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kw(d,7,v,3,u,!0)
C.kw(d,473,v,3,u,!0)}return d},
fdi(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j6(e,f),new B.j6(e+g*n,f),new B.j6(e,f+h*n)],t)
B.a0d(d,C.fw(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j6(s,u),new B.j6(e+g*v,u),new B.j6(s,f+h*v)],t)
B.a0d(d,C.fw(k),t)
t=A.k.U(n*0.39)
C.kw(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kw(d,e+g*t,f+h*3,4,k,!0)
C.kw(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kw(d,e+g*t,f,5,k,!0)
C.kw(d,e,f+h*t,5,k,!0)}},
fLt(d,e,f,g,h,i,j,k,l){var w,v
C.fdi(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fdi(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fdi(d,k,v,1,-1,e,f,g,h,i,j)
C.fdi(d,w,v,-1,-1,e,f,g,h,i,j)},
a_s(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kS(d,!0,A.d9,new B.qz(p),null,A.cW,j,r,q)}},
fcr(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ky(d,!0,A.d9,new B.qz(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ky(d,!0,A.d9,new B.qz(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hzp(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hi(o,o,A.c9,0,A.dZ,854,o,0,3,o,A.c9,480,!1)
C.xO(n,d,e)
C.rl(n,d)
C.kj(n,20,20,440,814,f,1.2)
C.fcr(n,0,0,1,1,g)
C.fcr(n,480,0,-1,1,g)
C.fcr(n,0,854,1,-1,g)
C.fcr(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.k.U(240+24*r)
q=A.k.U(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ky(n,!0,A.d9,new B.qz(p),o,A.cW,1.2,240,r,60,q)}return n},
fag(d,e,f,g,h){var w
C.ffp(d,!0,C.fw(g),13,e,f)
C.ffp(d,!0,C.fw(g),9,e,f)
w=B.a([new B.j6(e,f-4),new B.j6(e+4,f),new B.j6(e,f+4),new B.j6(e-4,f)],x.J)
B.a0d(d,C.fw(h),w)},
kw(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j6(e,v),new B.j6(u,f),new B.j6(e,t),new B.j6(s,f)],x.J)
if(i){B.a0d(d,C.fw(h),r)
return}B.ky(d,!0,A.d9,C.fw(h),w,A.cW,1,e,u,v,f)
B.ky(d,!0,A.d9,C.fw(h),w,A.cW,1,u,e,f,t)
B.ky(d,!0,A.d9,C.fw(h),w,A.cW,1,e,s,t,f)
B.ky(d,!0,A.d9,C.fw(h),w,A.cW,1,s,e,f,v)},
f0P(d,e,f,g,h,i,j){var w,v=B.a([new B.j6(e,f),new B.j6(e+g*28,f),new B.j6(e,f+h*28)],x.J)
B.a0d(d,C.fw(i),v)
v=e+g*14
w=f+h*14
C.kw(d,v,w,6,j,!0)
C.kw(d,v,w,3,i,!0)},
f0Q(d,e,f,g,h){var w=null,v=B.hi(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xO(v,d,e)
C.rl(v,d)
C.kj(v,18,18,444,818,f,2)
C.kj(v,26,26,428,802,f,0.9)
if(h!=null)B.iE(v,!0,C.fw(h),28,451,28,34)
C.f0P(v,18,18,1,1,g,f)
C.f0P(v,462,18,-1,1,g,f)
C.f0P(v,18,836,1,-1,g,f)
C.f0P(v,462,836,-1,-1,g,f)
return v},
hCm(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hi(v,v,A.c9,0,A.dZ,854,v,0,3,v,A.c9,480,!1)
C.xO(r,u,4294240980)
C.rl(r,u)
C.kj(r,10,12,460,830,t,3.2)
C.kj(r,18,20,444,814,s,1.2)
C.kj(r,24,26,432,802,t,1.8)
C.fLt(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kw(r,w,16,3,t,!0)
C.kw(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kw(r,16,w,3,t,!0)
C.kw(r,464,w,3,t,!0)}return r},
hCn(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hi(t,t,A.c9,0,A.dZ,854,t,0,3,t,A.c9,480,!1)
C.xO(p,s,4294373080)
C.rl(p,s)
C.kj(p,16,18,448,818,r,2.4)
C.kj(p,24,26,432,802,4286209044,1)
w=new C.f36(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fLt(p,!1,!0,r,q,q,34,16,18)
return p},
bxk(d,e,f,g,h,i){B.iE(d,!0,C.fw(i),e,e+g,f,f+h)},
by9(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.k.U(v*l+u*m),0,255)
j=A.o.D(A.k.U(t*l+s*m),0,255)
l=A.o.D(A.k.U(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.ky(d,!1,A.d9,new B.QJ(i),null,A.cW,1,e,w,l,l)}},
hDe(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.G(A.o.am(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ky(d,!1,A.d9,new B.qz(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.G(A.o.am(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ky(d,!1,A.d9,new B.qz(r),null,A.cW,1,t,t,f,s);++q}},
hDf(d,e){var w,v,u=null,t=B.hi(u,u,A.c9,0,A.dZ,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hDe(t,v,w,30,D.cGm,(A.o.am(v,30)+A.o.am(w,30)&1)===0)
C.bxk(t,44,44,392,766,d)
C.by9(t,44,44,392,766,d,e)
C.rl(t,d)
C.kj(t,44,44,392,766,4292128567,2.2)
C.kj(t,50,50,380,754,4279898632,0.8)
return t},
hEj(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.G(g,4)){case 0:C.kw(d,e,f,7,h,!0)
C.kw(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.ky(d,!0,A.d9,C.fw(h),o,A.cW,1.6,w,u,v,t)
B.ky(d,!0,A.d9,C.fw(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.ky(d,!0,A.d9,new B.qz(p),o,A.cW,1.2,w,v,q,q)}break
default:B.ky(d,!0,A.d9,C.fw(h),o,A.cW,1.5,e-8,e+8,f,f)
B.ky(d,!0,A.d9,C.fw(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kS(d,!0,A.d9,C.fw(h),o,A.cW,2,e,f)}},
hEk(d,e){var w,v,u,t,s=null,r=B.hi(s,s,A.c9,0,A.dZ,854,s,0,3,s,A.c9,480,!1)
B.iE(r,!0,C.fw(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hEj(r,u,v,w,4292391514)}C.bxk(r,46,46,388,762,d)
C.by9(r,46,46,388,762,d,e)
C.rl(r,d)
C.kj(r,46,46,388,762,4291404327,1.8)
return r},
h0N(d,e,f,g){C.ffp(d,!0,C.fw(g),16,e,f)
C.ffp(d,!0,C.fw(g),11,e,f)
C.kw(d,e,f,6,g,!0)
B.ky(d,!0,A.d9,C.fw(g),null,A.cW,1.3,e-14,e+14,f,f)
B.ky(d,!0,A.d9,C.fw(g),null,A.cW,1.3,e,e,f-14,f+14)},
hzi(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hi(v,v,A.c9,0,A.dZ,854,v,0,3,v,A.c9,480,!1)
B.iE(s,!0,C.fw(4280948752),0,479,0,853)
B.iE(s,!0,C.fw(u),0,479,0,78)
B.iE(s,!0,C.fw(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h0N(s,w,39,t)
C.h0N(s,w,815,t)}C.bxk(s,38,92,404,670,d)
C.by9(s,38,92,404,670,d,e)
C.rl(s,d)
C.kj(s,38,92,404,670,t,1.8)
C.kj(s,45,99,390,656,4287322667,0.8)
return s},
hDL(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j6(e,f),new B.j6(q-5,w),new B.j6(q,f-(18-Math.abs(r)*3)),new B.j6(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a0d(d,new B.qz(o),p)}B.kS(d,!0,A.d9,C.fw(4292128567),null,A.cW,3,e,f)},
hDM(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hi(s,s,A.c9,0,A.dZ,854,s,0,3,s,A.c9,480,!1)
C.xO(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.ky(q,!0,A.d9,new B.qz(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.ky(q,!0,A.d9,new B.qz(u),s,A.cW,1.1,v,v,0,853)}B.iE(q,!0,C.fw(r),0,479,0,70)
B.iE(q,!0,C.fw(r),0,479,798,853)
for(t=0;t<5;++t)C.hDL(q,70+t*85,48,4292128567)
C.bxk(q,48,78,384,712,d)
C.by9(q,48,78,384,712,d,e)
C.rl(q,d)
C.kj(q,48,78,384,712,4291404327,1.6)
return q},
hI_(d,e){var w,v,u,t=null,s=4279970378,r=B.hi(t,t,A.c9,0,A.dZ,854,t,0,3,t,A.c9,480,!1)
B.iE(r,!0,C.fw(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kw(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kS(r,!0,A.d9,new B.qz(u),t,A.cW,1,v,w)}C.bxk(r,40,40,400,774,d)
C.by9(r,40,40,400,774,d,e)
C.rl(r,d)
C.kj(r,40,40,400,774,4291058750,2)
C.kj(r,48,48,384,758,s,0.8)
return r},
kH:function kH(d,e){this.a=d
this.b=e},
fp1:function fp1(d){this.a=d},
fp0:function fp0(d){this.a=d},
f36:function f36(d){this.a=d},
fpF(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hEd(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fK4(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.o6(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aF(0,Af.af5(A.a.ao(d,s,r+1)),t)
v=x.f.b(w)?B.a_(w,x.N,x.z):t
return v}catch(u){return t}},
adC(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$adC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uP(null,""),$async$adC)
case 3:n=g
if(A.a.i(n).length===0)throw B.S("AI is not available right now. Please try again later.")
t=B.mP(n)
if(e==null)s=A.hg
else{r=C.hEd(e)
s=B.a([new B.Zt(A.cS.gcs().aG(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qr(t,d,s,E.E7),$async$adC)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.S(q!=null&&B.JS(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$adC,v)},
bzM(d){return C.hR_(d)},
hR_(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bzM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.an(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.adC(r,null),$async$bzM)
case 7:q=f
p=C.fK4(q)
if(p==null){u=d
w=1
break}o=d.azK(p)
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
return B.i($async$bzM,v)},
h4z(d){var w,v=F.fMt(d)
v=B.aJ(v,"book","newspaper")
if(F.a0w(d)!=="sw"){w=B.ae("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
ftA(d,e,f,g){return C.hSR(d,e,f,g)},
hSR(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$ftA=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fpF(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h7Z()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.adC('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h4z(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$ftA)
case 3:r=m.fK4(i)
if(r==null)throw B.S(y.S)
q=new C.yJ(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").azK(r)
t=q.r
if(t.length===0)throw B.S("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a0w(s)!=="sw"){p=B.ae("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a0w(A.d.aH(t," "))==="sw"?C.bzM(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ftA,v)},
bzg(d,e,f,g,h){return C.hOC(d,e,f,g,h)},
hOC(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bzg=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fC(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.h7Z()
k=A.R.an(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.adC('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h4z(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bzg)
case 3:p=j.fK4(a0)
if(p==null)throw B.S(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cu(o)){n=d.azK(B.a_(o,x.N,x.z))
m=A.R.an(n.ac(),null)!==A.R.an(d.ac(),null)}else{n=d
m=!1}w=m&&F.a0w(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bzM(n),$async$bzg)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a6j(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzg,v)},
a6j:function a6j(d,e,f){this.a=d
this.b=e
this.c=f},
hVv(d,e){return B.a6(d,!1).ck(B.eu(new C.fAh(e),!0,null,x.H))},
fAh:function fAh(d){this.a=d},
Uj:function Uj(d,e){this.c=d
this.a=e},
aBW:function aBW(d,e,f,g,h,i,j,k){var _=this
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
e91:function e91(d){this.a=d},
e90:function e90(){},
e92:function e92(d){this.a=d},
e9_:function e9_(d,e){this.a=d
this.b=e},
e93:function e93(){},
e8E:function e8E(d,e){this.a=d
this.b=e},
e8A:function e8A(d,e){this.a=d
this.b=e},
e8L:function e8L(d){this.a=d},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8N:function e8N(d){this.a=d},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8H:function e8H(d,e){this.a=d
this.b=e},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8J:function e8J(d){this.a=d},
e8K:function e8K(d){this.a=d},
e8F:function e8F(d,e){this.a=d
this.b=e},
e8C:function e8C(d){this.a=d},
e8D:function e8D(d){this.a=d},
e8T:function e8T(d){this.a=d},
e8U:function e8U(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8V:function e8V(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8Y:function e8Y(d,e){this.a=d
this.b=e},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d){this.a=d},
e8B:function e8B(d,e){this.a=d
this.b=e},
foB(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$foB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h2c){w=1
break}r=new C.foC()
t=4
q=x.s
w=7
return B.b(B.iG(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$foB)
case 7:$.h2c=!0
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
return B.i($async$foB,v)},
bzD(d){return A.FV[B.mg(d)-1]+", "+A.os[B.bF(d)-1]+" "+B.bP(d)+", "+B.bx(d)},
hH5(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d39[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fMS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fo(d[w],B.ae("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a3(v,new C.fmT(),B.U(v).k("a3<1>")))
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
continue}o=new C.fmV(j,h)
n=new C.fmU(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.am(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iQ(o.$1(l)))
j.a+=l}return u},
fJP(d,e){var w=new C.f2I()
return A.d.cG(e,0,new C.f2G(w))>=A.d.cG(d,0,new C.f2H(w))},
h_s(d){var w,v,u=new B.aP($.V().r,A.ap,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ao(w,0))
v=d.b
u.E(new B.ao(w,v-46))
u.E(new B.ao(w-46,v))
u.E(new B.ao(0,v))
u.E(new B.ao(0,46))
u.E(new B.bE())
return u},
yJ:function yJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
c97:function c97(d){this.a=d},
c95:function c95(){},
c96:function c96(){},
rN:function rN(d,e){this.a=d
this.b=e},
AB:function AB(d,e){this.a=d
this.b=e},
l3:function l3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
foC:function foC(){},
fmT:function fmT(){},
fmV:function fmV(d,e){this.a=d
this.b=e},
fmU:function fmU(d,e,f){this.a=d
this.b=e
this.c=f},
f2I:function f2I(){},
f2J:function f2J(){},
f2G:function f2G(d){this.a=d},
f2H:function f2H(d){this.a=d},
aZn:function aZn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c98:function c98(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c99:function c99(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c9a:function c9a(d){this.a=d},
b9P:function b9P(d){this.a=d},
b9O:function b9O(d,e){this.b=d
this.a=e},
brb:function brb(d){this.a=d},
b6l:function b6l(d,e){this.b=d
this.a=e},
boG:function boG(d,e){this.b=d
this.a=e},
h9V(d,e){return B.a6(d,!1).ck(B.eu(new C.fAk(e,null),!0,null,x.E))},
fAk:function fAk(d,e){this.a=d
this.b=e},
Um:function Um(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eac:function eac(){},
ead:function ead(d){this.a=d},
eab:function eab(d,e){this.a=d
this.b=e},
ea_:function ea_(d){this.a=d},
ea0:function ea0(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea7:function ea7(d,e){this.a=d
this.b=e},
ea4:function ea4(d){this.a=d},
ea5:function ea5(d,e,f){this.a=d
this.b=e
this.c=f},
ea1:function ea1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea3:function ea3(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
ea2:function ea2(d,e){this.a=d
this.b=e},
eaa:function eaa(d,e){this.a=d
this.b=e},
b9l:function b9l(d,e,f){this.b=d
this.c=e
this.a=f},
hVB(d){return B.a6(d,!1).ck(B.eu(new C.fAA(),!0,null,x.I))},
bx5(d,e){var w,v,u,t,s,r,q=B.c0(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fLb(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fAA:function fAA(){},
Zm:function Zm(d){this.a=d},
oc:function oc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDk:function aDk(d,e,f,g,h,i,j,k,l){var _=this
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
_.aE=_.aN=_.aC=_.aw=_.Y=_.b4=_.bg=_.y2=0
_.b2=null
_.aZ=0.25
_.b8=null
_.bI=0.5
_.aQ=1
_.c4=_.bQ=_.bh=0
_.cT=_.cQ=!1
_.c=_.a=null},
eHj:function eHj(d){this.a=d},
eGb:function eGb(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFU:function eFU(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGF:function eGF(d,e,f){this.a=d
this.b=e
this.c=f},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGD:function eGD(d,e){this.a=d
this.b=e},
eGI:function eGI(d,e,f){this.a=d
this.b=e
this.c=f},
eGH:function eGH(d,e){this.a=d
this.b=e},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFK:function eFK(){},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFQ:function eFQ(){},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFS:function eFS(d){this.a=d},
eFG:function eFG(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e){this.a=d
this.b=e},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHh:function eHh(){},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eHa:function eHa(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eHb:function eHb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH5:function eH5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHe:function eHe(d){this.a=d},
eH4:function eH4(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGU:function eGU(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eGP:function eGP(d){this.a=d},
eH1:function eH1(d){this.a=d},
eGO:function eGO(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eH3:function eH3(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGy:function eGy(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGl:function eGl(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eG2:function eG2(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFz:function eFz(d){this.a=d},
eFA:function eFA(d){this.a=d},
eFB:function eFB(d){this.a=d},
eFC:function eFC(d){this.a=d},
eFx:function eFx(d){this.a=d},
eFD:function eFD(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFE:function eFE(d){this.a=d},
eFv:function eFv(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGg:function eGg(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGi:function eGi(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGB:function eGB(d,e,f){this.a=d
this.b=e
this.c=f},
eGA:function eGA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGK:function eGK(d,e){this.a=d
this.b=e},
eG1:function eG1(d){this.a=d},
eHi:function eHi(d){this.a=d},
bcS:function bcS(d,e){this.b=d
this.a=e},
hRa(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hRb(d,e){var w,v,u,t,s,r,q,p,o,n=B.ae("\\S+",!0,!1,!1,!1).kz(0,d),m=B.B(n,B.a2(n).k("G.E"))
if(m.length===0)return d
w=new B.fa("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.ao(d,v,n)
p=m[r].b
p=A.a.ao(d,n,p.index+p[0].length)
n=B.ae("[*~^]",!0,!1,!1,!1)
o=B.aJ(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.aY(d,v)
return n.charCodeAt(0)==0?n:n},
bxG(){var w=$.bwO,v=$.P4
$.P4=v+1
return w+"_"+v},
i3(d,e,f,g,h,i,j){return C.ek(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,C.bxG(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cf,D.eY,g,e,f)},
nD(d,e,f,g){var w=f*9
return C.i3(D.eG,d-f/2,e-w/32,f,w/16,g,0)},
hAW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bwO
p=$.P4
$.P4=p+1
w.push(new C.eD(q+"_"+p,D.eY,0,r,1,0.0016,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.bd,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bwO
p=$.P4
$.P4=p+1
w.push(new C.eD(q+"_"+p,D.eY,o,0,0.004,1,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.bd,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}w.push(C.nD(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nD(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i3(D.bd,0.08,0.08,0.5,0.003,v,0),C.i3(D.bd,0.58,0.08,0.004,0.06,v,0),C.i3(D.bd,0.58,0.14,0.34,0.003,v,0),C.i3(D.bd,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i3(D.bd,0.08,0.8,0.004,0.14,t,0),C.i3(D.bd,0.08,0.94,0.6,0.003,t,0),C.nD(0.58,0.08,0.05,e),C.nD(0.92,0.22,0.05,e),C.nD(0.08,0.8,0.05,f),C.nD(0.68,0.94,0.05,f),C.nD(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i3(D.kO,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i3(D.kO,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i3(D.kO,0.7,0.8,0.22,0.12,w|1140850688,0),C.i3(D.kO,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nD(0.5,0.5,1.5,w|335544320),C.nD(0.5,0.5,1.15,w|402653184),C.nD(0.5,0.5,0.8,v|436207616),C.nD(0.95,0.05,0.4,v|855638016),C.nD(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nD(0.85,0.08,0.7,w|1140850688),C.nD(0.1,0.35,0.5,v|855638016),C.nD(0.9,0.62,0.55,v|771751936),C.nD(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i3(D.bd,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i3(D.bd,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i3(D.bd,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i3(D.bd,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nD(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nD(0.5,0.2,0.65,(w|3422552064)>>>0),C.nD(0.5,0.2,0.95,w|855638016),C.i3(D.bd,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i3(D.bd,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i3(D.jv,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i3(D.jv,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i3(D.jv,0.15,0.86,0.6,0.14,1712265002,0),C.nD(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cHH[n]
u=A.o.G(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bwO
l=$.P4
$.P4=l+1
w.push(new C.eD(m+"_"+l,D.eY,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.eG,q,q,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}w.push(C.nD(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i3(D.jv,0.35,-0.1,0.3,0.62,w|855638016,0),C.i3(D.jv,0.05,-0.1,0.3,0.55,v,-0.5),C.i3(D.jv,0.65,-0.1,0.3,0.55,v,0.5),C.nD(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i3(D.bd,0.06,0.04,0.88,0.002,e,0),C.i3(D.bd,0.06,0.96,0.88,0.002,e,0),C.i3(D.bd,0.06,0.04,0.004,0.92,e,0),C.i3(D.bd,0.936,0.04,0.004,0.92,e,0),C.i3(D.bd,0.09,0.07,0.82,0.001,w,0),C.i3(D.bd,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i3(D.jw,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i3(D.jw,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i3(D.jw,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i3(D.bd,0,0,0.3,0.09,w|1140850688,0),C.i3(D.bd,0.7,0.9,0.3,0.1,v|1426063360,0),C.i3(D.bd,0.82,0.04,0.12,0.07,w|771751936,0),C.i3(D.bd,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i3(D.eG,0.62,0.02,0.5,0.16,v,0.6),C.i3(D.eG,0.78,0.12,0.4,0.12,u,0.9),C.i3(D.eG,-0.12,0.8,0.5,0.16,u,-0.6),C.i3(D.eG,-0.05,0.9,0.4,0.12,v,-0.9),C.nD(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i3(D.bd,0.09,0.12,0.16,0.006,e,0),C.i3(D.bd,0.05,0.03,0.9,0.001,w,0),C.i3(D.bd,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hNG(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bwO=j
$.P4=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fkh()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ek(A.bg,!1,n,A.aB,"ngmy_quote_background",m,24,A.bi,A.a4,"",1,C.bxG(),g,"","",0,!1,"",0,D.bd,l,2,"",0,0,"",D.cf,D.ld,1,0,0))
if(a9)A.d.v(q,C.hAW(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ae("[*~^]",!0,!1,!1,!1)
p=C.hRa(B.aJ(w,p,""))
o=A.a.t(w,B.ae("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fkg(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cC,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.ek(A.bg,!1,n,A.aB,"ngmy_quote_logo",m,24,A.bi,A.a4,a1,a3*9/16,C.bxG(),a0,"","",0,!1,a2,0,D.bd,l,2,"",0,0,"",D.cf,D.ld,a3,a4,a5))
return C.r1(s,r,0,0,q,j+"_slide",D.pD,"","","",D.dc)},
r0:function r0(d,e){this.a=d
this.b=e},
lR:function lR(d,e,f,g,h,i,j,k,l,m){var _=this
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
fkh:function fkh(){},
fkg:function fkg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hr5(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cau(),x.N)
s=B.B(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yL(u,t,s,B.t(w==null?"":w))},
frY(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$frY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h2z){w=1
break}$.h2z=!0
t=4
w=7
return B.b(B.ay(),$async$frY)
case 7:r=e
q=B.aT(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aF(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jn(p),k=k.gai(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hr5(m)
if(l!=null)J.cd(n,l)}$.BN.ce(0,B.t(o.a),new C.frZ(n))}C.fKS()
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
return B.i($async$frY,v)},
fKS(){var w,v=new B.Q(Date.now(),0,!1).bM(-12e8)
for(w=new B.dw($.BN,$.BN.r,$.BN.e);w.C();)J.n7(w.d,new C.f9t(v))
$.BN.bm($.BN,new C.f9u())},
aLS(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aLS=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aLS)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cP($.BN,B.a2($.BN).k("cP<1,2>")).gai(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.cd(p,B.E(["at",g.a.a4().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ap("String","ngmy_slides_ai_history_v1",A.R.an(n,null)),$async$aLS)
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
return B.i($async$aLS,v)},
hRM(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fKS()
w=$.BN.ce(0,d,new C.fs0())
v=Date.now()
u=B.B(e,B.a2(e).k("cn.E"))
J.p9(w,0,new C.yL(new B.Q(v,0,!1),f,u,g))
C.aLS()},
hRJ(d){var w,v=$.BN.h(0,d)
if(v==null||J.ck(v))return
w=J.cD(v)
w.cv(v,0)
if(w.gaj(v))$.BN.W(0,d)
C.aLS()},
yL:function yL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cau:function cau(){},
frZ:function frZ(d){this.a=d},
f9t:function f9t(d){this.a=d},
f9u:function f9u(){},
fs0:function fs0(){},
hRO(d){return A.d.dH(D.va,new C.fs3(d),new C.fs4())},
hr3(d){var w
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
hr2(d){var w
switch(d.a){case 0:w=D.ahE
break
case 1:w=A.xp
break
case 2:w=A.aiJ
break
case 3:w=I.ahj
break
case 4:w=A.ai8
break
case 5:w=A.lz
break
default:w=null}return w},
hDR(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Od[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Od[w]
if(!B.dr(v.toLowerCase(),t,0))u=B.dr(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hr4(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
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
o.push(q)}return A.R.an(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hRK(d,e,f,g,h){var w=new B.J(D.va,new C.frX(),x.eC).aH(0,", "),v=""+d,u=C.h7R(h),t=F.flG(h),s=C.h4a(g),r=e.t(0,D.GO)?'- New slides get an "emoji".\n':"",q=e.t(0,D.GP)?'- New slides get an "icon3d" from: '+A.d.aH(D.Od,", ")+".\n":"",p=e.t(0,D.BI)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hRL(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.va,new C.fs_(),x.eC).aH(0,", "),p=new B.fa("")
if(e.t(0,D.GO)){p.a=s
w=s}else w=""
if(e.t(0,D.GP))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.Od,", ")+".\n")
if(e.t(0,D.BI))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h7R(d)
v=F.flG(d)
u=C.h4a(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
afl(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.C9(a3,"{"),a5=J.fDn(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Kc(a3,a4,a5+1)
try{w=A.R.aF(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fpX(),m).bX(0,new C.fpY())
k=B.B(l,l.$ti.k("G.E"))}else k=B.a([],n)
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
f=C.hDR(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cd(u,new C.a6r(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ab(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fm(u).b:q))
p=A.d.ba(D.va,new C.fpZ(r))?r:a7
o=C.f8I(J.q(w,"logo_frame"),D.B7)
n=C.f8I(J.q(w,"logo_ring"),D.B2)
m=C.f8I(J.q(w,"photo_frame"),D.B7)
l=C.f8I(J.q(w,"photo_ring"),D.B2)
return new C.ap9(q,p,u,o,n,m,l)}catch(a0){return a1}},
a02(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h6Z(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.BJ),f7=f6?C.hxG():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f5()
v.dU(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fB(t,v)
s=u.c
s=new C.nq("luxe",u.a,A.lz,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dc)
w=s}if(w==null)w=C.hRO(f9.b)
r=g2.t(0,D.a2n)||f6
q=g2.t(0,D.GO)
p=g2.t(0,D.Q5)
o=new C.fkl()
n=B.a([],x.g)
m=new C.fko(o,w,r)
l=new C.fkn(o,r)
k=new C.fkm(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.ba(u,new C.fkk(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.G(b1,a3.length)]
b4=A.o.G(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.G(b1,5)
b9=D.cJ8[b8]
c0=D.cI8[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ewi.t(0,b2.a)){c7=b0+1
c5=g8[A.o.G(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eG,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eG,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eG,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mk,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pE,500,f2,f0))
c1.push(l.$8$fx$key(D.bd,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Q2
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eG,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kO,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bd,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.BG
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eG,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eG,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mk,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cC,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pE,500,f2,f0))
d3=D.mj
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eG,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bd,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tB:D.cf
c1.push(new C.eD(b4,D.a2l,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bi,A.aB,4279310375,A.bg,e4,D.bd,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mj
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eG,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eG,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mk,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pE,450,f2,f0))
c1.push(l.$8$fx$key(D.bd,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Q2
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eG,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eG,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bd,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bd,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.GM,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mj}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dc,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hzh(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.G(b1,b8.length)]}else b8=r?D.d5f[A.o.G(b1,6)]:s
n.push(new C.lt(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.AO(e4,e4,e4,e4,D.BF,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ao(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fmJ(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fmJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.BI)
n=e.t(0,D.GP)
if(!o&&!n){u=D.a1k
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fmM(o,s[r],n,$.hCC,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iG(t,x.e),$async$fmJ)
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
return B.i($async$fmJ,v)},
flJ(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$flJ=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hRL(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aLd(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$flJ)
case 3:u=s.aLy(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$flJ,v)},
bzh(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bzh=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.b0(x.N)
for(s=B.eh(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.hRM(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.afl(i,"colorful")
t=C.hRK(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aLd(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hg),$async$bzh)
case 3:u=o.aLy(m,f,h,g,D.dJb,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzh,v)},
aLd(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aLd=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uP(null,""),$async$aLd)
case 3:n=i
if(A.a.i(n).length===0)throw B.S("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mP(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qr(t,d,g,null),$async$aLd)
case 7:q=i
p=q.b
if(p!=null){o=C.afl(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.S(s!=null&&B.JS(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aLd,v)},
aLy(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aLy=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.BI)||e.t(0,D.GP)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d8(e,x.Q)
t.W(0,D.BI)}w=6
return B.b(C.fmJ(d,t),$async$aLy)
case 6:s=k
w=4
break
case 5:s=D.a1k
case 4:t=d.c
w=A.d.ba(t,new C.f2D())?7:9
break
case 7:r=$.h8J
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aLy)
case 10:q=k
p=q!=null?A.R.an(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h6Z(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hr4(new C.ap9(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.B(new B.J(m,new C.f2E(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jG<cn.E,n>")
t=B.B(new B.jG(e,new C.f2F(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.Q5)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aLy,v)},
fNA(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.b0(x.Q)
for(v=0;v<6;++v){u=D.a0e[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
hVG(d){return B.c2(A.K,null,new C.fAM(),d,!0,!0,!0,null,!1,!1,x.I)},
hyh(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcs().aG(d)},
hVF(d,e,f){return B.c2(A.K,null,new C.fAL(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fNB(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fNC(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f8I(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.ba(e,new C.f8J(w))?w:""},
h4a(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h8H(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.afl(a1==null?"":a1,a0),a3=C.afl(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a3<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qN(new B.a3(r,new C.fs5(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("G.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.B(new B.a3(k,new C.fs6(),v),r)
A.d.b0(g,new C.fs7())
if(g.length===0)continue
f=new C.fs8(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hS4(d){var w=d.toLowerCase(),v=B.ae("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aCl
v=B.ae("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dL6
v=B.ae("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dL7
return null},
h3M(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bv(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dE(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hRP(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nH
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cP)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.h3M(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h3M(n,i,v,u))if(n.w>10){f=h+1
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
hRN(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.afl(o,"colorful")
if(n==null)throw B.S("That earlier version could not be read.")
w=B.b0(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a0e[r]
if(q.b===s)w.L(0,q)}}v=C.fNB(e)
u=C.fNC(e)
p=C.h6Z(n,D.a1k,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.B(new B.J(o,new C.fs1(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jG<cn.E,n>")
o=B.B(new B.jG(w,new C.fs2(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.Q5)
return p},
hVs(d,e,f){return B.c2(A.K,null,new C.fzZ(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hxG(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f5()
s.dU(t)
w=D.cnJ[s.aD(10)]
v=new C.e57(s)
u=x.N
return new C.e56(w,s.aD(4),J.fm(v.$1$2(D.cNj,1,x.ff)),w.r[s.aD(3)],v.$1$2(D.d1g,2+s.aD(2),u),v.$1$2(D.cW1,2,u),v.$1$2(D.d3S,4,x.fP),t)},
hzh(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f5()
a1.dU(a5.w+a3*13)
w=new C.f_a(a4)
v=new C.f_c(a4,d)
u=new C.f_b(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cP){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fI(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fI(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.G(a3,t.length)]
if(n==="spotlight")A.d.cl(a2,0,w.$8(D.eG,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a02(a0,52),"lux_spot",a5.vU(0,"spotlight")))
else A.d.cl(a2,0,w.$8(D.bd,0,0,1,1,0,"lux_back",a5.vU(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cl(a2,1,w.$8(D.bd,0,0,1,1,0,"lux_back2",a5.aC3(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bd,0.022,0.038,0.956,0.924,0,g,a5.vU(0,f),D.dc,150,C.a02(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bd,0.018,0.032,0.964,0.936,0,g,a5.vU(0,f),D.dc,120,C.a02(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bd,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dc,260,C.a02(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bd,0,0,1,1,0,"lux_filigree",a5.vU(0,"filigree"),D.dc,200))
break
default:a2.push(w.$10$anim$delay(D.bd,0.08,0.06,0.84,0.004,C.a02(a0,208),"lux_rule",a5.aC3(0,"shimmer",r),D.tA,150))
a2.push(w.$10$anim$delay(D.bd,0.08,0.936,0.84,0.004,C.a02(a0,144),"lux_rule2","",D.GM,220))}l=!A.d.ba(a2,new C.f_9())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vU(0,"crest"),350))
else{o=a1.hf()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vU(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a02(r,242)
j=a5.vU(0,"orbit")
i=s===D.bd?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pE,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eG,t-0.007,0.9495,0.014,0.025,C.a02(r,242),"lux_g2",a5.vU(0,"orbit"),D.pE,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bd,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fI(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.bd,0,0,1,1,0,"lux_velvet",a5.vU(0,"velvet")))},
nq:function nq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fs3:function fs3(d){this.a=d},
fs4:function fs4(){},
vo:function vo(d,e){this.a=d
this.b=e},
a6r:function a6r(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ap9:function ap9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
frX:function frX(){},
fs_:function fs_(){},
fpX:function fpX(){},
fpY:function fpY(){},
fpZ:function fpZ(d){this.a=d},
fkl:function fkl(){},
fko:function fko(d,e,f){this.a=d
this.b=e
this.c=f},
fkn:function fkn(d,e){this.a=d
this.b=e},
fkm:function fkm(d,e){this.a=d
this.b=e},
fkk:function fkk(d){this.a=d},
fmM:function fmM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmK:function fmK(d){this.a=d},
fmL:function fmL(d){this.a=d},
f2D:function f2D(){},
f2E:function f2E(){},
f2F:function f2F(){},
fAM:function fAM(){},
ZR:function ZR(d){this.a=d},
aFe:function aFe(d,e,f,g,h){var _=this
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
eNi:function eNi(d,e,f){this.a=d
this.b=e
this.c=f},
eNj:function eNj(d,e){this.a=d
this.b=e},
eNg:function eNg(d,e){this.a=d
this.b=e},
eNh:function eNh(d,e){this.a=d
this.b=e},
eNf:function eNf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eNa:function eNa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eNe:function eNe(d,e){this.a=d
this.b=e},
eN9:function eN9(d,e){this.a=d
this.b=e},
eNd:function eNd(d,e){this.a=d
this.b=e},
eN8:function eN8(d,e){this.a=d
this.b=e},
eNb:function eNb(d){this.a=d},
eNc:function eNc(d,e){this.a=d
this.b=e},
eMZ:function eMZ(d,e){this.a=d
this.b=e},
eN_:function eN_(d,e){this.a=d
this.b=e},
eN1:function eN1(d){this.a=d},
eN2:function eN2(d){this.a=d},
eN3:function eN3(d){this.a=d},
eN4:function eN4(d){this.a=d},
eN0:function eN0(d,e){this.a=d
this.b=e},
eN5:function eN5(d,e){this.a=d
this.b=e},
eNw:function eNw(d){this.a=d},
eNx:function eNx(d){this.a=d},
eNv:function eNv(d){this.a=d},
eNy:function eNy(d){this.a=d},
eNu:function eNu(d){this.a=d},
eNA:function eNA(d){this.a=d},
eNt:function eNt(d,e){this.a=d
this.b=e},
eNB:function eNB(d){this.a=d},
eNs:function eNs(d,e){this.a=d
this.b=e},
eNC:function eNC(d){this.a=d},
eNr:function eNr(d){this.a=d},
eND:function eND(d){this.a=d},
eNq:function eNq(d,e){this.a=d
this.b=e},
eNE:function eNE(d){this.a=d},
eNp:function eNp(d,e){this.a=d
this.b=e},
eNF:function eNF(d){this.a=d},
eNo:function eNo(d){this.a=d},
eNG:function eNG(d,e){this.a=d
this.b=e},
eNn:function eNn(d,e){this.a=d
this.b=e},
eNH:function eNH(d){this.a=d},
eNz:function eNz(d){this.a=d},
eNm:function eNm(d,e){this.a=d
this.b=e},
eN6:function eN6(d,e,f){this.a=d
this.b=e
this.c=f},
eN7:function eN7(d,e,f){this.a=d
this.b=e
this.c=f},
eNl:function eNl(d,e){this.a=d
this.b=e},
eNk:function eNk(d,e){this.a=d
this.b=e},
fAL:function fAL(d,e){this.a=d
this.b=e},
ZQ:function ZQ(d,e,f){this.c=d
this.d=e
this.a=f},
aFd:function aFd(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eMS:function eMS(d){this.a=d},
eMT:function eMT(d){this.a=d},
eMU:function eMU(d,e){this.a=d
this.b=e},
eMV:function eMV(d){this.a=d},
eMW:function eMW(d){this.a=d},
eMR:function eMR(d,e){this.a=d
this.b=e},
eMX:function eMX(d,e){this.a=d
this.b=e},
eMY:function eMY(d,e){this.a=d
this.b=e},
f8J:function f8J(d){this.a=d},
aZL:function aZL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBP:function aBP(d,e,f){this.c=d
this.d=e
this.a=f},
bhs:function bhs(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
e59:function e59(d){this.a=d},
e58:function e58(){},
bf3:function bf3(d,e){this.b=d
this.a=e},
fs5:function fs5(d){this.a=d},
fs6:function fs6(){},
fs7:function fs7(){},
fs8:function fs8(d){this.a=d},
apJ:function apJ(d,e){this.a=d
this.b=e},
fs1:function fs1(){},
fs2:function fs2(){},
fzZ:function fzZ(d,e){this.a=d
this.b=e},
Ye:function Ye(d,e,f){this.c=d
this.d=e
this.a=f},
azh:function azh(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
ddU:function ddU(d){this.a=d},
ddV:function ddV(d){this.a=d},
ddW:function ddW(d,e){this.a=d
this.b=e},
ddZ:function ddZ(d){this.a=d},
de_:function de_(d,e){this.a=d
this.b=e},
ddY:function ddY(d,e){this.a=d
this.b=e},
de0:function de0(d){this.a=d},
ddX:function ddX(d,e){this.a=d
this.b=e},
bpM:function bpM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e56:function e56(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e57:function e57(d){this.a=d},
f_a:function f_a(d){this.a=d},
f_c:function f_c(d,e){this.a=d
this.b=e},
f_b:function f_b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_9:function f_9(){},
aJM:function aJM(){},
fMq(d){var w,v,u
try{w=A.R.aF(0,d,null)
if(x.f.b(w)){v=B.vg(B.a_(w,x.N,x.z))
return v}}catch(u){}return null},
aZH:function aZH(d,e,f){this.c=d
this.d=e
this.a=f},
bj4:function bj4(d,e){this.c=d
this.a=e},
hO8(d){return A.d.dH(D.FS,new C.fls(d),new C.flt())},
hO9(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aY(t,6)
if(w.length===0)return null
v=new B.a3(D.FS,new C.flu(w),x.b4)
if(!v.gai(0).C())return null
u=v.gK(0)
return new C.jw("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l0:function l0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fls:function fls(d){this.a=d},
flt:function flt(){},
flu:function flu(d){this.a=d},
mD(d,e,f,g,h){return new C.DI(f,g,d)},
hAt(d){var w=d.z,v=B.U(w).k("a3<1>")
w=B.B(new B.a3(w,new C.f18(),v),v.k("G.E"))
d.z=w
d.x=""},
ds(d,e){var w=$.Jh
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cl(d.z,0,e)},
dt(d,e,f,g,h,i,j,k,l){return C.ek(A.bg,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cf,D.eY,j,k,l)},
h6M(d,e){var w
C.hAt(d)
w=A.d.dH($.bBg(),new C.fji(e),new C.fjj())
$.Jh=w.a
d.x=w.a;++d.y
try{w.bw(d)}finally{$.Jh=""}d.z=B.bl(d.z,!0,x.F)},
DI:function DI(d,e,f){this.a=d
this.b=e
this.e=f},
f18:function f18(){},
fry:function fry(){},
frz:function frz(){},
frA:function frA(){},
frL:function frL(){},
frQ:function frQ(){},
frR:function frR(){},
frS:function frS(){},
frT:function frT(){},
frU:function frU(){},
frV:function frV(){},
frW:function frW(){},
frB:function frB(){},
frC:function frC(){},
frD:function frD(){},
frE:function frE(){},
frF:function frF(){},
frG:function frG(){},
frH:function frH(){},
frI:function frI(){},
frJ:function frJ(){},
frK:function frK(){},
frM:function frM(){},
frN:function frN(){},
frO:function frO(){},
frP:function frP(){},
fji:function fji(d){this.a=d},
fjj:function fjj(){},
iP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ek(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bd,4280172719,2,m,n,0,"",o,D.cP,p,q,r)},
C2(d,e,f,g,h,i,j,k,l){return C.ek(A.bg,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cf,D.eY,j,k,l)},
bA0(){var w=new B.Q(Date.now(),0,!1)
return A.i6[B.bF(w)-1]+" "+B.bP(w)+", "+B.bx(w)},
em:function em(d,e,f){this.a=d
this.b=e
this.c=f},
bxq(d){return new B.iK((A.o.az(d,24)&255)/255,(A.o.az(d,16)&255)/255,(A.o.az(d,8)&255)/255,(d&255)/255)},
hFr(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.akZ(A.cA.aG(A.d.gak(d.split(","))))
return w}catch(v){return null}},
hFv(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f8w(),x.dv).aH(0,"\n")},
hFu(d){switch(d.a){case 2:return A.n0
case 1:case 5:return A.eGD
default:return A.Rq}},
hFo(d){switch(d.a){case 2:return A.u9
case 1:case 5:return A.T6
default:return A.a7d}},
hFs(d,e){var w,v=null,u=d.ay,t=A.o.az(u,24),s=A.o.az(d.ch,24),r=(t&255)===0?v:C.bxq(u),q=(s&255)===0?v:C.bxq(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n9(q,p,A.kq)
w=new B.pa(t,t,t,t)}switch(d.ax.a){case 1:return B.li(v,v,v,new B.ko(r,w,v,A.a8s,v),v,v,v,v)
case 4:return u?new B.fL(v,v,v):B.wo(B.li(v,v,q,v,p+0.4,v,v,v))
default:return B.li(v,v,v,new B.ko(r,w,B.uV(4),A.hw,v),v,v,v,v)}},
hFq(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eY?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hFo(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hFv(d)
t=C.bxq(d.Q)
s=d.x.a>=700?A.eg:A.uH
r=d.y===A.cC?A.x1:A.agb
q=d.z
p=new B.Cc(w,l,l,B.f4(u,l,l,l,B.h0(l,t,1===q.a?A.aL4:A.aL3,l,l,l,l,l,l,A.dq,l,l,v,r,s,l,!0,l,l,l,l),C.hFu(d.as)))
break
case 1:case 4:o=C.hFr(d.at)
n=i===D.ld&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wo(B.f4(w,l,l,l,B.h0(l,A.qS,l,l,l,l,l,l,l,A.dq,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.GH(o,n?A.a8o:A.Tr,l,l)
break
case 3:w=new B.n9(A.H4,1,A.kq)
u=B.uV(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.li(A.u9,B.f4(t,l,l,l,B.h0(l,D.dWS,l,l,l,l,l,l,l,A.dq,l,l,11,l,A.eg,l,!0,l,l,l,l),A.n0),l,new B.ko(E.aDu,new B.pa(w,w,w,w),u,A.hw,l),l,l,l,l)
break
case 2:p=C.hFs(d,e)
break
case 5:p=C.hFp(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fZF(-w,p)
w=i===D.cP
if(w){m=A.o.az(d.Q,24)&255
if(m<255)p=new B.aqt(m/255,p)}if(w)return new F.vv(k,l,j,l,new B.QQ(new B.kn(g,g,f,1/0),p))
if(i===D.kN){i=new B.n9(A.H4,1,A.kq)
i=B.li(A.u9,p,l,new B.ko(A.oy,new B.pa(i,i,i,i),B.uV(4),A.hw,l),l,l,D.bnF,l)}else i=p
return new F.vv(k,l,j,l,new B.fL(g,f,i))},
hFt(d,e,f,g){var w,v=null,u=C.bxq(d.e),t=d.f
t=B.a([F.fYj(t!=null?B.li(v,v,v,new B.ko(v,v,v,A.hw,new B.aUf(E.T7,A.a77,B.a([u,C.bxq(t)],x.cR),v)),v,v,v,v):B.li(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f8v(f,g),B.U(w).k("J<1,fb>")))
return F.cn2(t)},
fNE(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fNE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2E(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.V3(A.vn,A.H1,D.boL,null,null,null,!1,null)
o=new B.AU(o,new C.fse(607,787,p,d))
o.Lu(n,null)
r.push(o)}u=n.jE(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNE,v)},
hFp(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fMq(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gahv()
if(h==null)h=A.atq
j=B.t_(4279308564)
w=B.uV(18)
v=new B.n9(B.t_(4287531653),3,A.kq)
u=i.length===0?"My links":i
u=B.a([B.wo(B.f4(u,m,m,m,B.h0(m,A.oy,m,m,m,m,m,m,m,A.dq,m,m,12,m,A.eg,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wo(B.f4(A.a.i(l.c),m,m,m,D.eNC,m)))
u.push(new B.fL(m,8,m))
for(t=B.d9(h,0,B.dI(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bV(t,t.gJ(0),s.k("bV<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.t_(4280690220)
o=new B.a7G(8,8)
n=A.a.i(r.b)
u.push(new B.nr(D.bhR,new C.auE(new C.agn(q),B.li(m,B.f4(n.length===0?A.a.i(r.c):n,m,m,m,D.ePP,A.n0),m,new B.ko(p,m,new B.agP(o,o,o,o),A.hw,m),m,m,D.bo4,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wo(B.f4(k,m,m,m,D.eP6,m))
u.push(new C.auE(C.hfk(k),t))}return B.li(m,B.y6(u,A.Kf,A.lb),m,new B.ko(j,new B.pa(v,v,v,v),w,A.hw,m),m,m,D.biI,m)},
f8w:function f8w(){},
f8v:function f8v(d,e){this.a=d
this.b=e},
fse:function fse(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af8(d){var w,v
for(w=0;w<32;++w){v=D.FJ[w]
if(v.a===d)return v}return null},
h1f(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cA.aG(A.a.aY(d,u+1))
return w}catch(v){return null}},
cS(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h9R(d,e){return B.a6(d,!1).ck(B.eu(new C.fyo(e),!0,null,x.fB))},
h9Q(d,e){return B.c2(A.K,null,new C.fyn(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iT:function iT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dz:function Dz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Mc:function Mc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgP:function bgP(d,e,f){var _=this
_.d=d
_.e=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
dOE:function dOE(d){this.a=d},
dOD:function dOD(d,e,f){this.a=d
this.b=e
this.c=f},
dOC:function dOC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bol:function bol(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eM5:function eM5(d,e){this.a=d
this.b=e},
bbY:function bbY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aXC:function aXC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c53:function c53(){},
c54:function c54(d){this.a=d},
c55:function c55(d,e,f){this.a=d
this.b=e
this.c=f},
c56:function c56(d,e,f){this.a=d
this.b=e
this.c=f},
fyo:function fyo(d){this.a=d},
XM:function XM(d,e){this.c=d
this.a=e},
axF:function axF(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d37:function d37(d,e,f){this.a=d
this.b=e
this.c=f},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3b:function d3b(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3a:function d3a(d,e){this.a=d
this.b=e},
d3f:function d3f(d){this.a=d},
d39:function d39(d){this.a=d},
d3g:function d3g(d){this.a=d},
d38:function d38(d,e){this.a=d
this.b=e},
d3h:function d3h(d,e){this.a=d
this.b=e},
fyn:function fyn(d){this.a=d},
fym:function fym(d){this.a=d},
fyl:function fyl(d,e,f){this.a=d
this.b=e
this.c=f},
fyk:function fyk(d,e){this.a=d
this.b=e},
aJf:function aJf(){},
hVE(d){return B.c2(A.K,null,new C.fAK(),d,!0,!0,!0,null,!1,!1,x.N)},
fAK:function fAK(){},
Y6:function Y6(d){this.a=d},
bdr:function bdr(d){this.d=d
this.c=this.a=null},
d9T:function d9T(d){this.a=d},
d9U:function d9U(d,e){this.a=d
this.b=e},
d9V:function d9V(d){this.a=d},
hBV(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b_(w)}return D.wx},
hQ3(d){var w,v=A.d.gK(d.split("@"))
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
hQ2(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hBV(d)
switch(q){case"shimmer":return B.nv(A.a7z,g,new C.foV(p,A.k.G(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.bcP(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dS(B.e8(A.A,B.db(C.fEF(g,B.a3w(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.bcw(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.ey(A.A,e*0.5,B.e8(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dj()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fm(e)
u.mk(Math.sin(e)*0.3)
return B.dS(B.fq(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.am(A.X,r,A.b_,A.q,B.a([B.e3(B.b3(r,r,r,new C.blf(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.X,r,A.b_,A.q,B.a([B.e3(B.b3(r,r,r,new C.b7u(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.X,r,A.b_,A.q,B.a([B.e3(B.b3(r,r,r,new C.b77(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.bs7(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.bp8(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.boh(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e3(B.b3(r,r,r,new C.bbR(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.f,B.a([B.bZ(0,B.e3(B.e8(A.A,B.bW(r,new B.o(r,r,r,r,r,new B.bS(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bc),1.6+s*0.15,r,r),!0,r),0,0,0),B.ey(A.A,s*0.06,B.e8(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
foV:function foV(d,e){this.a=d
this.b=e},
bcP:function bcP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcw:function bcw(d,e,f){this.b=d
this.c=e
this.a=f},
blf:function blf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7u:function b7u(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b77:function b77(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bs7:function bs7(d,e,f){this.b=d
this.c=e
this.a=f},
bp8:function bp8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boh:function boh(d,e,f){this.b=d
this.c=e
this.a=f},
bbR:function bbR(d,e,f){this.b=d
this.d=e
this.a=f},
d2P:function d2P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wY:function wY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
foY(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kN},
hQ8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.foZ())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gK(B.aO6(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hQ7(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d3(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d3(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
aeM(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeM=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a3<1>")
e=B.B(new B.a3(a4,new C.fhj(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c2(A.dB,null,new C.fhk(e),d,!0,!0,!1,A.le,!1,!1,x.N),$async$aeM)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).ht())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fOf(d),$async$aeM)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.K2(d,"Search states\u2026","",A.jO,"Choose state"),$async$aeM)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fNb(s)
if(p==null)p=A.d.gK(D.OY)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fp_(p.d)
k=x.u
j=B.a([C.ek(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cB(),l,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.ld,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.BQ(i,0.016,D.kO,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.BQ(0,0.058,D.eG,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.BQ(0,0.058,D.eG,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Js("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Js("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fKb(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bwU("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_E("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_E("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_E("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_E("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bwU("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.BQ(m,0.082,D.bd,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.ek(A.bg,!1,i,A.aB,"marriage_field_utangulizi:"+A.k.a9(0.78,3),4280640491,9.5,A.bi,A.cq,"",0.074,g,null,"","",0,!1,"",0,D.bd,4280172719,2,y.O,0,0,"",D.cf,D.cP,0.78,0.11,0.388))
A.d.v(k,C.fKb(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bwU("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h3b("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h3b("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_E("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_E("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bwT("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bwT("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bwU("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Js("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Js("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bwT("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bwT("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bwU("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_E("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bwT("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_E("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fKb(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Js("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Js("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.AO(null,null,null,null,D.nH,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.r1(m,null,0,0,j,n,D.pD,"","","Hati ya Ndoa",D.dc)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeM,v)},
foZ:function foZ(){},
fhj:function fhj(){},
fhk:function fhk(d){this.a=d},
fhh:function fhh(d){this.a=d},
fhi:function fhi(d){this.a=d},
hEW(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hEV(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mo
case"lineThrough":return A.yF
default:return A.aB}},
ek(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eD(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h5c(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.OL[w]
if(v.b===u)return v}return D.dc},
hBj(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cF9[w]
if(v.b===u)return v}return D.cP},
hHE(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.d1R[w]
if(v.b===u)return v}return D.bd},
r1(d,e,f,g,h,i,j,k,l,m,n){return new C.lt(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fX3(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hDj(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h5c(d.h(0,"transition"))
q=B.aN(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aN(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d7(n,x.f)
n=B.cC(n,new C.car(),n.$ti.k("G.E"),x.F)
n=B.B(n,B.a2(n).k("G.E"))}return C.r1(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hDj(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.all[w]
if(v.b===u)return v}return D.mj},
AO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.Q(Date.now(),0,!1):a4
return new C.hW(p,t,a1,h,i,w,a0==null?B.a([C.r1(4294967295,null,0,0,null,C.cB(),D.pD,"","","",D.dc)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Uu(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hzw(a6.h(0,"aspectRatio"))
t=B.aN(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.Q(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kl(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kl(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aN(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aN(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cae(),x.N)
f=B.B(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.caf(),x.N)
e=B.B(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d7(g,x.f)
g=B.cC(g,new C.cag(),g.$ti.k("G.E"),x.bt)
g=B.B(g,B.a2(g).k("G.E"))}return C.AO(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.r1(4294967295,a3,0,0,a3,C.cB(),D.pD,"","","",D.dc)],x.g):g,v,p,o,s)},
kl(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hzw(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d2C[w]
if(v.b===u)return v}return D.BF},
cB(){var w=Date.now(),v=$.iV
$.iV=v+1
return""+1000*w+"_"+v},
caI(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.BG){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.ek(A.L,!1,f.d.l(),A.aB,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bd,m,2,o,0,0,"",D.cf,D.cP,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.ek(A.L,!1,f.e.l(),A.aB,"",n,20,A.bi,A.cq,"",0.12,u,p,"","",0,!1,"",0,D.bd,m,2,"Click to add subtitle",0,0,"",D.cf,D.cP,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.ek(A.bg,!1,f.d.l(),A.aB,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bd,m,2,o,0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.ek(A.bg,!0,f.e.l(),A.aB,"",n,20,A.bi,A.cq,"",0.68,u,p,"","",0,!1,"",0,D.bd,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cf,D.cP,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.ek(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bd,m,2,"Two Column Slide",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.ek(A.bg,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.bd,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cf,D.cP,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.ek(A.bg,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.bd,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cf,D.cP,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.ek(A.L,!1,4294967295,A.aB,"",n,42,A.bi,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bd,m,2,"Section Header",0,0,"",D.cf,D.cP,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.ek(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bd,m,2,"Compare",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.ek(A.bg,!1,l,A.aB,"",t.j(0.12).l(),24,A.bi,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.bd,t.l(),2,"",0,0,"",D.cf,D.eY,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.ek(A.bg,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bd,m,2,"Option A",0,0,"",D.cf,D.cP,0.38,0.08,0.26)
q=C.cB()
t=C.ek(A.bg,!1,l,A.aB,"",t.j(0.06).l(),24,A.bi,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.bd,t.j(0.5).l(),2,"",0,0,"",D.cf,D.eY,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.ek(A.bg,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bd,m,2,"Option B",0,0,"",D.cf,D.cP,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.ek(A.L,!1,f.d.l(),A.aB,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bd,m,2,"TERM / QUESTION",0,0,"",D.cf,D.cP,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.ek(A.L,!1,f.e.l(),A.aB,"",n,22,A.bi,A.cq,"",0.35,u,p,"","",0,!1,"",0,D.bd,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cf,D.cP,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.ek(A.bg,!1,f.d.l(),A.aB,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bd,m,2,"Quiz Question",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.ek(A.bg,!1,f.e.l(),A.aB,"",n,20,A.bi,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.bd,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cf,D.cP,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.ek(A.bg,!1,f.d.l(),A.aB,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bd,m,2,"Worksheet / Assignment",0,0,"",D.cf,D.cP,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.ek(A.bg,!1,f.e.l(),A.aB,"",n,18,A.bi,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.bd,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cf,D.cP,0.88,0.06,0.16)],x.u))
break}},
hre(d){return A.d.dH(D.a_U,new C.caJ(d),new C.caK())},
hrb(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aF(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cd(v,C.Uu(B.a_(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fGL(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.caE(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("G.E"))
A.d.b0(u,new C.caD())
return u},
fX6(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.caz()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
apa(d){return C.hr9(d)},
hr9(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$apa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.caC()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0Q(m),$async$apa)
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
return B.b(B.ay(),$async$apa)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.fX5.h(0,m))
n=C.fGL(C.fGL(j,r),o)
if(n.length===0){u=C.fX6(C.fX6(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apa,v)},
cay(d){return C.hr8(d)},
hr8(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cay=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$cay)
case 7:r=f
q=r.rA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kr(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.b0(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cay,v)},
aZN(d,e){return C.hra(d,e)},
hra(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aZN=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aZN)
case 6:s=g
q=s.rA("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ab(r)>500?J.Kb(r,J.ab(r)-500):r
w=7
return B.b(s.ap("StringList","ngmy_slides_deleted_"+p,o),$async$aZN)
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
return B.i($async$aZN,v)},
Uv(d,e){return C.hrc(d,e)},
hrc(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Uv=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ab(a0)===0){w=1
break}p=$.fX4.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.apa(a3),$async$Uv)
case 5:p=a6
case 4:w=6
return B.b(C.cay(a3),$async$Uv)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbn())k=f===g.gbn()&&k.b>g.gct()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a3<G.E>")
e=B.B(new B.a3(new B.bc(n,m),new C.caF(o),l),l.k("G.E"))
A.d.b0(e,new C.caG())
$.fX4.n(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.B(new B.J(e,new C.caH(),n),n.k("ai.E"))
r=A.R.an(n,null)
$.fX5.n(0,a0,r)
t=8
w=11
return B.b(B.afz(a0,r),$async$Uv)
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
return B.b(B.ay(),$async$Uv)
case 16:q=a6
w=17
return B.b(q.ap("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Uv)
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
return B.i($async$Uv,v)},
HC:function HC(d,e){this.a=d
this.b=e},
ap8:function ap8(d,e){this.a=d
this.b=e},
ud:function ud(d,e){this.a=d
this.b=e},
me:function me(d,e){this.a=d
this.b=e},
hs:function hs(d,e){this.a=d
this.b=e},
eD:function eD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lt:function lt(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cas:function cas(){},
cat:function cat(){},
car:function car(){},
hW:function hW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cah:function cah(){},
cai:function cai(){},
cae:function cae(){},
caf:function caf(){},
cag:function cag(){},
jw:function jw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
caJ:function caJ(d){this.a=d},
caK:function caK(){},
caE:function caE(d){this.a=d},
caD:function caD(){},
caz:function caz(){},
caA:function caA(){},
caB:function caB(){},
caC:function caC(){},
caF:function caF(d){this.a=d},
caG:function caG(){},
caH:function caH(){},
hQj(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fpx(e,v,d,B.b0(w))
w.$1(new C.fpt())
w.$1(new C.fpu())
w.$1(new C.fpv())
w.$1(new C.fpw())
return v},
fpx:function fpx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpt:function fpt(){},
fpu:function fpu(){},
fpv:function fpv(){},
fpw:function fpw(){},
aZK:function aZK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
can:function can(d){this.a=d},
cam:function cam(){},
cao:function cao(){},
cap:function cap(d,e){this.a=d
this.b=e},
caq:function caq(d){this.a=d},
amn:function amn(d,e){this.c=d
this.a=e},
bgB:function bgB(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dBv:function dBv(){},
aJ0:function aJ0(){},
cav(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cav=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.P(D.eE0)
u=!1
w=1
break}u=B.kJ(!1,d,t,!1,null,A.a2p,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cav,v)},
hr6(d){var w=A.d.bi(D.FS,new C.caw(d))
if(w<0)return!0
return w>=4},
hr7(d){var w=A.d.bi($.bBg(),new C.cax(d))
if(w<0)return!0
return w>=5},
caw:function caw(d){this.a=d},
cax:function cax(d){this.a=d},
hRZ(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xY()
$.pP().ph(t,new C.fsl(s),!0)
u=B.a([B.CW(v,A.pH,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eO5,v,v,v),A.f,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nv,v,v,v),v,v,4,v,4,v))}return new B.am(A.X,v,A.b_,A.q,u,v)},
fsl:function fsl(d){this.a=d},
hRA(){return C.fNx()},
hOx(){return C.bze()},
hQA(){return C.fNo()},
aNc(d,e,f){var w=0,v=B.j(x.H),u
var $async$aNc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.frr(d,f),$async$aNc)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aNc,v)},
frr(d,e){var w=0,v=B.j(x.H),u
var $async$frr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bxr
if(u==null)u=e+".pdf"
w=2
return B.b(B.c2(A.K,null,new C.frs(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$frr)
case 2:return B.h(null,v)}})
return B.i($async$frr,v)},
frs:function frs(d,e){this.a=d
this.b=e},
abF:function abF(d,e,f){this.c=d
this.d=e
this.a=f},
efb:function efb(d,e){this.a=d
this.b=e},
efc:function efc(d,e){this.a=d
this.b=e},
efd:function efd(d,e){this.a=d
this.b=e},
efe:function efe(d){this.a=d},
abX:function abX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZJ(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aZI(g,m,f,d,e,h,l,k,j,o,i,null)},
h85(d){return B.cl(new C.fps(d))},
fNz(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hRI(d){if(d===D.cf)return"None"
return C.fNz(d)},
bxX(d,e,f,g){return C.hHL(d,e,f,g)},
hHL(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bxX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fKu&&t.oY())t.eD()
$.fKu=!0
s.a=null
w=3
return B.b(B.hP(A.bh,!0,"Animation preview",d,new C.faP(s,e,g,f),null,A.eL,!0,x.H),$async$bxX)
case 3:s=s.a
if(s!=null)s.a8(0)
$.fKu=!1
case 1:return B.h(u,v)}})
return B.i($async$bxX,v)},
fBy(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fBy=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bR,x.w).w.a.a*0.88,280,440)
s=f===D.cf
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fNz(f)+" Slide transition preview"
s=s?Ac.Ec:A.ut
w=3
return B.b(C.bxX(d,s,new B.a4(t,t*0.56,B.bu(B.m(14),new C.aGC(f,null),A.ao),null),r),$async$fBy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fBy,v)},
h7o(d,e,f){var w,v,u=null,t=A.cp.au(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dS(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dS(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dS(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dS(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e8(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.e8(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dj()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fm((1-t)*1.2)
return B.fq(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dj()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jA((1-t)*1.2)
return B.fq(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dj()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.mk((1-t)*0.8)
v=0.6+t*0.4
w.jj(v,v,v,1)
return B.fq(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dS(B.db(f,t),new B.u((1-t)*24,0))}},
bAN(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bAN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bR,x.w).w.a.a*0.88,300,440)
s=f===D.cf
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fNz(f)+" Element animation preview"
s=s?Ac.Ec:A.ut
w=3
return B.b(C.bxX(d,s,new B.a4(t,t*0.62,B.bu(B.m(14),new C.axo(f,null),A.ao),null),r),$async$bAN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bAN,v)},
hRH(d){var w,v,u,t,s=$.aef.W(0,d)
if(s!=null){$.aef.n(0,d,s)
return s}w=A.cA.aG(A.a.aY(d,A.a.cJ(d,",")+1))
$.aef.n(0,d,w)
v=$.fLg=$.fLg+w.length
u=B.a2($.aef).k("cy<1>")
for(;;){if(!(v>41943040&&$.aef.a>1))break
t=new B.cy($.aef,u).gai(0)
if(!t.C())B.ba(B.fB())
v-=$.aef.W(0,t.gT(0)).length
$.fLg=v}return w},
hRo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ae("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kz(0,d),j=B.B(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ao(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cQ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Rl(s,A.u))
v.push(new B.ep(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Rl(t,A.u))
v.push(new B.ep(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Rl(u,A.cq))
v.push(new B.ep(n,l,l,A.cQ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aY(d,r)
v.push(B.dn(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0P(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
m.E(new B.kB(e))
return m
case"rounded":m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
w=e.ge9()*0.18
m.E(new B.iR(B.by(e,new B.aZ(w,w))))
return m
case"triangle":m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbO().a,e.b))
w=e.d
m.E(new B.ao(e.c,w))
m.E(new B.ao(e.a,w))
m.E(new B.bE())
return m
case"hexagon":w=$.V()
m=B.a([],m)
v=new B.aP(w.r,A.ap,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bw(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ao(p,o)
m.push(p)
o=v.f
if(o!=null)p.bw(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbO().a,e.b))
m.E(new B.ao(e.c,e.gbO().b))
m.E(new B.ao(e.gbO().a,e.d))
m.E(new B.ao(e.a,e.gbO().b))
m.E(new B.bE())
return m
case"arch":m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ao(w,p))
m.b5Y(new B.u(t,p),new B.aZ(s,s))
m.E(new B.ao(t,u))
m.E(new B.bE())
return m
default:m=new B.aP($.V().r,A.ap,n,n,B.a([],m))
m.E(new B.nM(e))
return m}},
fn0(d,e,f){return B.cl(new C.fn1(D.ewH.t(0,d),d,f,e))},
aZI:function aZI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cal:function cal(d){this.a=d},
cak:function cak(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
caj:function caj(){},
aZF:function aZF(d,e){this.b=d
this.a=e},
fps:function fps(d){this.a=d},
fpr:function fpr(d,e){this.a=d
this.b=e},
faP:function faP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faN:function faN(d){this.a=d},
faO:function faO(d,e){this.a=d
this.b=e},
aGC:function aGC(d,e){this.c=d
this.a=e},
brE:function brE(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eUu:function eUu(d,e,f){this.a=d
this.b=e
this.c=f},
aHe:function aHe(d,e){this.b=d
this.a=e},
Ty:function Ty(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgM:function bgM(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dMR:function dMR(d){this.a=d},
dMQ:function dMQ(d){this.a=d},
dMP:function dMP(d){this.a=d},
HB:function HB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cad:function cad(d){this.a=d},
cac:function cac(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axo:function axo(d,e){this.c=d
this.a=e},
bbl:function bbl(){this.d=0
this.c=this.a=null},
d03:function d03(d){this.a=d},
d02:function d02(d){this.a=d},
a69:function a69(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhq:function bhq(d,e){var _=this
_.d=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
e4Q:function e4Q(d,e,f){this.a=d
this.b=e
this.c=f},
aXF:function aXF(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bcu:function bcu(d,e,f){this.b=d
this.c=e
this.a=f},
bng:function bng(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eJL:function eJL(){},
fn1:function fn1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boe:function boe(d,e,f){this.b=d
this.c=e
this.a=f},
aJe:function aJe(){},
aJK:function aJK(){},
aL4:function aL4(){},
fqs(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fqs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wx.c2().KT(D.d00,A.t1,!0),$async$fqs)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fm(r.a)
s=t.c
if(s==null)throw B.S("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.S("That file is too big. Use a file under 8 MB.")
u=C.hRi(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fqs,v)},
hRi(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a6s(d,new B.Zt(A.cS.gcs().aG(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hJm(e)
if(A.a.i(w).length===0)throw B.S("No readable words were found in that Word file.")
return new C.a6s(d,null,w.length>6e4?A.a.ao(w,0,6e4):w)}w=A.c4.JH(0,e,!0)
if(A.a.i(w).length===0)throw B.S("That file is empty.")
return new C.a6s(d,null,w.length>6e4?A.a.ao(w,0,6e4):w)},
hJm(d){var w,v,u,t,s,r,q,p,o=null,n=new C.csz().cCr(B.qM(d,A.hP,o,o),o,o,!1).cE6(0,"word/document.xml")
if(n==null)return""
w=n.cLQ()
v=A.c4.JH(0,w==null?$.haj():w,!0).split("</w:p>")
u=new B.fa("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ae("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kz(0,r)
p=A.a.i(B.cC(q,new C.fdG(),B.a2(q).k("G.E"),t).fO(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a6s:function a6s(d,e,f){this.a=d
this.b=e
this.c=f},
fdG:function fdG(){},
hrd(d,e,f,g,h,i,j,k,l){return new C.MD(l,e,d,g,f,i,h,j,k,null)},
MD:function MD(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCc:function aCc(d,e,f,g,h,i,j,k,l){var _=this
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
_.bp$=k
_.a6$=l
_.c=_.a=null},
elp:function elp(d){this.a=d},
eln:function eln(){},
elo:function elo(d){this.a=d},
ehN:function ehN(){},
ehO:function ehO(){},
ehP:function ehP(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ejb:function ejb(){},
ejc:function ejc(){},
eha:function eha(){},
ekv:function ekv(d){this.a=d},
ell:function ell(d,e){this.a=d
this.b=e},
ejl:function ejl(d,e){this.a=d
this.b=e},
el8:function el8(d){this.a=d},
el9:function el9(){},
ela:function ela(){},
elb:function elb(d){this.a=d},
elc:function elc(){},
egz:function egz(d){this.a=d},
elm:function elm(){},
eiu:function eiu(d,e){this.a=d
this.b=e},
egx:function egx(d){this.a=d},
egy:function egy(d){this.a=d},
eiR:function eiR(d){this.a=d},
eiS:function eiS(d,e,f){this.a=d
this.b=e
this.c=f},
eiT:function eiT(d){this.a=d},
eit:function eit(){},
eis:function eis(d){this.a=d},
eiq:function eiq(){},
eip:function eip(d){this.a=d},
eir:function eir(){},
ehJ:function ehJ(d){this.a=d},
ehK:function ehK(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiv:function eiv(d){this.a=d},
eiw:function eiw(d){this.a=d},
eix:function eix(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiB:function eiB(d,e){this.a=d
this.b=e},
egB:function egB(){},
egC:function egC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiM:function eiM(){},
eiN:function eiN(d,e){this.a=d
this.b=e},
eiK:function eiK(d,e,f){this.a=d
this.b=e
this.c=f},
eiL:function eiL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiE:function eiE(d,e,f){this.a=d
this.b=e
this.c=f},
eiF:function eiF(d,e,f){this.a=d
this.b=e
this.c=f},
eiG:function eiG(d){this.a=d},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiI:function eiI(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiD:function eiD(d,e){this.a=d
this.b=e},
eiP:function eiP(d){this.a=d},
eiQ:function eiQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eiO:function eiO(d){this.a=d},
ej6:function ej6(){},
ej7:function ej7(){},
ej8:function ej8(){},
ej9:function ej9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ej3:function ej3(d){this.a=d},
ej5:function ej5(){},
ej4:function ej4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ej1:function ej1(d,e,f){this.a=d
this.b=e
this.c=f},
ej2:function ej2(d,e){this.a=d
this.b=e},
eja:function eja(){},
eiC:function eiC(d,e){this.a=d
this.b=e},
egS:function egS(){},
egT:function egT(d,e,f){this.a=d
this.b=e
this.c=f},
egU:function egU(d){this.a=d},
egV:function egV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egR:function egR(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
eje:function eje(d,e){this.a=d
this.b=e},
ejd:function ejd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejh:function ejh(d,e){this.a=d
this.b=e},
efw:function efw(d,e){this.a=d
this.b=e},
egQ:function egQ(d,e){this.a=d
this.b=e},
egO:function egO(d){this.a=d},
ejp:function ejp(d,e,f){this.a=d
this.b=e
this.c=f},
egK:function egK(d,e){this.a=d
this.b=e},
egJ:function egJ(d){this.a=d},
ejo:function ejo(d,e,f){this.a=d
this.b=e
this.c=f},
egA:function egA(d){this.a=d},
ehb:function ehb(){},
el6:function el6(d,e){this.a=d
this.b=e},
el7:function el7(d,e,f){this.a=d
this.b=e
this.c=f},
ekw:function ekw(d,e,f){this.a=d
this.b=e
this.c=f},
efx:function efx(d){this.a=d},
efu:function efu(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
efh:function efh(d){this.a=d},
efg:function efg(d,e){this.a=d
this.b=e},
efi:function efi(d,e){this.a=d
this.b=e},
egM:function egM(d){this.a=d},
egN:function egN(d,e){this.a=d
this.b=e},
egL:function egL(d){this.a=d},
efZ:function efZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eg_:function eg_(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
eg4:function eg4(d){this.a=d},
eg1:function eg1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eg2:function eg2(d){this.a=d},
eg0:function eg0(){},
efY:function efY(d,e,f){this.a=d
this.b=e
this.c=f},
ej0:function ej0(d,e){this.a=d
this.b=e},
elf:function elf(d){this.a=d},
elg:function elg(d,e){this.a=d
this.b=e},
elh:function elh(d){this.a=d},
eli:function eli(d,e,f){this.a=d
this.b=e
this.c=f},
ele:function ele(d){this.a=d},
ekM:function ekM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekL:function ekL(d,e,f){this.a=d
this.b=e
this.c=f},
ekK:function ekK(){},
ekJ:function ekJ(d,e,f){this.a=d
this.b=e
this.c=f},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekF:function ekF(d,e,f){this.a=d
this.b=e
this.c=f},
ekD:function ekD(d){this.a=d},
ekE:function ekE(d){this.a=d},
ekH:function ekH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ekG:function ekG(d){this.a=d},
ehF:function ehF(d,e){this.a=d
this.b=e},
ehE:function ehE(d,e){this.a=d
this.b=e},
ekx:function ekx(){},
el5:function el5(d,e){this.a=d
this.b=e},
el3:function el3(d){this.a=d},
el4:function el4(d){this.a=d},
efp:function efp(d,e){this.a=d
this.b=e},
efn:function efn(d){this.a=d},
efo:function efo(d){this.a=d},
efq:function efq(d,e){this.a=d
this.b=e},
efr:function efr(d,e,f){this.a=d
this.b=e
this.c=f},
efv:function efv(d,e){this.a=d
this.b=e},
efm:function efm(d,e,f){this.a=d
this.b=e
this.c=f},
efl:function efl(d){this.a=d},
ejm:function ejm(d,e,f){this.a=d
this.b=e
this.c=f},
eld:function eld(d,e,f){this.a=d
this.b=e
this.c=f},
ehI:function ehI(d,e,f){this.a=d
this.b=e
this.c=f},
ehH:function ehH(){},
eg7:function eg7(d,e,f){this.a=d
this.b=e
this.c=f},
eg8:function eg8(d){this.a=d},
efj:function efj(d,e){this.a=d
this.b=e},
eh9:function eh9(d,e){this.a=d
this.b=e},
efs:function efs(d,e){this.a=d
this.b=e},
efB:function efB(d){this.a=d},
efC:function efC(d,e){this.a=d
this.b=e},
efD:function efD(d,e){this.a=d
this.b=e},
efA:function efA(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efz:function efz(d){this.a=d},
efR:function efR(d){this.a=d},
efS:function efS(d){this.a=d},
efT:function efT(d){this.a=d},
efU:function efU(d){this.a=d},
efV:function efV(d){this.a=d},
efW:function efW(){},
efX:function efX(){},
efE:function efE(d){this.a=d},
efF:function efF(d){this.a=d},
efG:function efG(d){this.a=d},
efH:function efH(d){this.a=d},
efI:function efI(d){this.a=d},
efJ:function efJ(d){this.a=d},
efK:function efK(d){this.a=d},
efL:function efL(d){this.a=d},
efM:function efM(d){this.a=d},
efN:function efN(d){this.a=d},
efP:function efP(d){this.a=d},
efQ:function efQ(d,e){this.a=d
this.b=e},
eh8:function eh8(d,e,f){this.a=d
this.b=e
this.c=f},
eh7:function eh7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh6:function eh6(d,e,f){this.a=d
this.b=e
this.c=f},
eh5:function eh5(d,e){this.a=d
this.b=e},
eft:function eft(d,e){this.a=d
this.b=e},
egb:function egb(d){this.a=d},
ega:function ega(d){this.a=d},
eg9:function eg9(d,e){this.a=d
this.b=e},
egc:function egc(d){this.a=d},
egd:function egd(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
egP:function egP(d){this.a=d},
ej_:function ej_(d,e){this.a=d
this.b=e},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
eiY:function eiY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiW:function eiW(d){this.a=d},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiU:function eiU(){},
eiV:function eiV(){},
eky:function eky(){},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekA:function ekA(){},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d,e){this.a=d
this.b=e},
efy:function efy(d,e){this.a=d
this.b=e},
egD:function egD(){},
egE:function egE(){},
egF:function egF(){},
egI:function egI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egH:function egH(d,e){this.a=d
this.b=e},
egG:function egG(d,e,f){this.a=d
this.b=e
this.c=f},
ei8:function ei8(d){this.a=d},
ei7:function ei7(){},
ei9:function ei9(d,e){this.a=d
this.b=e},
eia:function eia(d,e){this.a=d
this.b=e},
ei6:function ei6(d){this.a=d},
eib:function eib(d,e){this.a=d
this.b=e},
ei5:function ei5(d){this.a=d},
eic:function eic(d,e){this.a=d
this.b=e},
ei4:function ei4(d){this.a=d},
eid:function eid(d,e){this.a=d
this.b=e},
ei3:function ei3(d){this.a=d},
eie:function eie(d,e){this.a=d
this.b=e},
ei2:function ei2(d,e){this.a=d
this.b=e},
eif:function eif(d,e){this.a=d
this.b=e},
ei1:function ei1(d){this.a=d},
eig:function eig(d,e){this.a=d
this.b=e},
ei0:function ei0(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehV:function ehV(d){this.a=d},
ehW:function ehW(d){this.a=d},
ehT:function ehT(d){this.a=d},
ehX:function ehX(d,e){this.a=d
this.b=e},
ehS:function ehS(d){this.a=d},
ehY:function ehY(d,e){this.a=d
this.b=e},
ehR:function ehR(d){this.a=d},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d){this.a=d},
ei_:function ei_(d){this.a=d},
eh1:function eh1(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh4:function eh4(d){this.a=d},
egX:function egX(d){this.a=d},
egW:function egW(d,e){this.a=d
this.b=e},
egY:function egY(d,e){this.a=d
this.b=e},
egZ:function egZ(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh3:function eh3(d){this.a=d},
elj:function elj(d){this.a=d},
elk:function elk(d){this.a=d},
eij:function eij(d,e){this.a=d
this.b=e},
eii:function eii(d,e){this.a=d
this.b=e},
eih:function eih(d,e){this.a=d
this.b=e},
eik:function eik(d){this.a=d},
eil:function eil(d){this.a=d},
ejI:function ejI(d,e){this.a=d
this.b=e},
ejJ:function ejJ(d){this.a=d},
ejK:function ejK(d){this.a=d},
ejV:function ejV(d){this.a=d},
ek5:function ek5(d){this.a=d},
ekg:function ekg(d){this.a=d},
ekn:function ekn(d){this.a=d},
eko:function eko(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d,e){this.a=d
this.b=e},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejP:function ejP(d){this.a=d},
ejQ:function ejQ(d){this.a=d},
ejR:function ejR(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejT:function ejT(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejW:function ejW(d){this.a=d},
ejX:function ejX(d){this.a=d},
ejY:function ejY(d){this.a=d},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d){this.a=d},
ek0:function ek0(d){this.a=d},
ek1:function ek1(d){this.a=d},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d){this.a=d},
ejy:function ejy(d){this.a=d},
ek4:function ek4(d){this.a=d},
ejG:function ejG(d){this.a=d},
ek6:function ek6(d){this.a=d},
ejF:function ejF(d,e){this.a=d
this.b=e},
ek7:function ek7(d,e){this.a=d
this.b=e},
ek8:function ek8(d,e){this.a=d
this.b=e},
ejE:function ejE(d,e,f){this.a=d
this.b=e
this.c=f},
eju:function eju(d,e){this.a=d
this.b=e},
ejH:function ejH(d){this.a=d},
eks:function eks(d,e){this.a=d
this.b=e},
eku:function eku(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ekt:function ekt(d,e){this.a=d
this.b=e},
ek9:function ek9(d,e,f){this.a=d
this.b=e
this.c=f},
ejD:function ejD(d,e,f){this.a=d
this.b=e
this.c=f},
ejt:function ejt(d,e,f){this.a=d
this.b=e
this.c=f},
ejr:function ejr(d,e){this.a=d
this.b=e},
eka:function eka(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e){this.a=d
this.b=e},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejq:function ejq(d,e){this.a=d
this.b=e},
ekb:function ekb(d){this.a=d},
ejB:function ejB(d){this.a=d},
ekc:function ekc(d){this.a=d},
ekd:function ekd(d){this.a=d},
eke:function eke(d){this.a=d},
ekf:function ekf(d){this.a=d},
ejA:function ejA(d){this.a=d},
ekh:function ekh(d){this.a=d},
eki:function eki(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ejz:function ejz(d){this.a=d},
ekk:function ekk(d,e){this.a=d
this.b=e},
ejx:function ejx(d){this.a=d},
ekl:function ekl(d,e){this.a=d
this.b=e},
ejw:function ejw(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
ejv:function ejv(d){this.a=d},
eg6:function eg6(d,e,f){this.a=d
this.b=e
this.c=f},
eg5:function eg5(d,e){this.a=d
this.b=e},
ekP:function ekP(d,e){this.a=d
this.b=e},
ekO:function ekO(d,e){this.a=d
this.b=e},
ekQ:function ekQ(d,e){this.a=d
this.b=e},
ekN:function ekN(d,e){this.a=d
this.b=e},
ehe:function ehe(d,e){this.a=d
this.b=e},
ehd:function ehd(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehc:function ehc(d){this.a=d},
ehM:function ehM(){},
ehL:function ehL(){},
el1:function el1(d){this.a=d},
el0:function el0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
el_:function el_(d,e){this.a=d
this.b=e},
ekV:function ekV(d,e){this.a=d
this.b=e},
ekZ:function ekZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekW:function ekW(d,e){this.a=d
this.b=e},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekU:function ekU(d){this.a=d},
ekX:function ekX(d,e){this.a=d
this.b=e},
ekY:function ekY(d,e){this.a=d
this.b=e},
el2:function el2(d){this.a=d},
egw:function egw(d){this.a=d},
egv:function egv(d,e,f){this.a=d
this.b=e
this.c=f},
egu:function egu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egj:function egj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
egk:function egk(d,e){this.a=d
this.b=e},
egl:function egl(d,e){this.a=d
this.b=e},
egm:function egm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egi:function egi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egn:function egn(d,e){this.a=d
this.b=e},
egp:function egp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ego:function ego(d,e){this.a=d
this.b=e},
egq:function egq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egh:function egh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egr:function egr(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
egs:function egs(d,e){this.a=d
this.b=e},
egf:function egf(d){this.a=d},
egt:function egt(d,e){this.a=d
this.b=e},
ein:function ein(d){this.a=d},
eim:function eim(d){this.a=d},
eio:function eio(d,e){this.a=d
this.b=e},
ehs:function ehs(d,e){this.a=d
this.b=e},
eht:function eht(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehq:function ehq(d,e){this.a=d
this.b=e},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehw:function ehw(d,e){this.a=d
this.b=e},
eho:function eho(d,e){this.a=d
this.b=e},
ehx:function ehx(d,e){this.a=d
this.b=e},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehy:function ehy(d,e,f){this.a=d
this.b=e
this.c=f},
ehm:function ehm(d,e){this.a=d
this.b=e},
ehz:function ehz(d,e,f){this.a=d
this.b=e
this.c=f},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehk:function ehk(d,e,f){this.a=d
this.b=e
this.c=f},
ehh:function ehh(d,e){this.a=d
this.b=e},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehj:function ehj(d,e){this.a=d
this.b=e},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehi:function ehi(d,e,f){this.a=d
this.b=e
this.c=f},
ehg:function ehg(d,e){this.a=d
this.b=e},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehG:function ehG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eff:function eff(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ejk:function ejk(d,e){this.a=d
this.b=e},
eji:function eji(d){this.a=d},
ejj:function ejj(d,e){this.a=d
this.b=e},
adq:function adq(d,e,f){this.a=d
this.b=e
this.c=f},
awL:function awL(d,e){this.c=d
this.a=e},
ba8:function ba8(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b1$=e
_.c=_.a=null},
cX6:function cX6(d){this.a=d},
cX5:function cX5(d){this.a=d},
bam:function bam(d,e){this.c=d
this.a=e},
cXs:function cXs(d){this.a=d},
cXt:function cXt(d){this.a=d},
ID:function ID(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ba7:function ba7(){this.d=!1
this.c=this.a=null},
cX3:function cX3(d){this.a=d},
cX_:function cX_(d){this.a=d},
cX4:function cX4(d){this.a=d},
cWZ:function cWZ(d){this.a=d},
cX2:function cX2(d){this.a=d},
cX0:function cX0(d){this.a=d},
cX1:function cX1(d,e){this.a=d
this.b=e},
Of:function Of(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
YZ:function YZ(d,e,f){this.c=d
this.d=e
this.a=f},
aCf:function aCf(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bp$=e
_.a6$=f
_.c=_.a=null},
em_:function em_(){},
elQ:function elQ(d){this.a=d},
elZ:function elZ(d){this.a=d},
elR:function elR(d){this.a=d},
elS:function elS(d){this.a=d},
elM:function elM(d){this.a=d},
elN:function elN(d,e){this.a=d
this.b=e},
elO:function elO(d){this.a=d},
elP:function elP(d,e,f){this.a=d
this.b=e
this.c=f},
elX:function elX(){},
elY:function elY(d){this.a=d},
elT:function elT(d){this.a=d},
elU:function elU(d){this.a=d},
elV:function elV(d){this.a=d},
elW:function elW(d){this.a=d},
em0:function em0(d,e,f){this.a=d
this.b=e
this.c=f},
em2:function em2(d,e){this.a=d
this.b=e},
em1:function em1(d){this.a=d},
IK:function IK(d,e){this.c=d
this.a=e},
boJ:function boJ(d,e){this.b=d
this.a=e},
beY:function beY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beX:function beX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHW:function aHW(){},
aJY:function aJY(){},
bus:function bus(){},
aJZ:function aJZ(){},
fsm(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fsm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wx.c2().KT(B.a(["pdf"],x.s),A.t1,!0),$async$fsm)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fm(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bm1(s,"data:application/pdf;base64,"+A.cS.gcs().aG(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fsm,v)},
hRT(d){var w,v,u,t,s,r
try{w=B.ji(d,0,null)
v=B.ae("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cA(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ae("/Type\\s*/Page\\b",!0,!1,!1,!1).kz(0,w).gJ(0)
if(t>0){s=J.aOy(t,1,200)
return s}}catch(r){}return 1},
fsd(d){return C.hRS(d)},
hRS(d){var w=0,v=B.j(x.T),u
var $async$fsd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fsd,v)},
bA_(d,e,f,g){return C.hS1(d,e,f,g)},
hS1(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bA_=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e4(b6,x.co).gai(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h8G(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lD(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lD(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lD(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lD(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.V()
g=new B.rD()
f=B.G2(g,null)
a7=B.L()
a7.r=A.qc.gp(0)
f.aW(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fw
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pY()
w=7
return B.b(a3.yD(800,h),$async$bA_)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hg(A.fQ),$async$bA_)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.f8(A.dD.gaO(a5))
a7=A.cS.gcs().aG(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a7(b5)
$.al.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bA_,v)},
aNM(d,e,f){return C.hRQ(d,e,f)},
hRQ(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aNM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.afN(d,e,f,new C.fsb(r,q),q,"Sign document"),$async$aNM)
case 3:if(!new B.e4(q,x.co).gai(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bA_(q,t,r.b,r.c),$async$aNM)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aZM(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNM,v)},
hS_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h2_(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h2_(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aY(A.a.aU(A.o.fI(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.a9(q.c*100,2)+"%;top:"+A.k.a9(q.d*100,2)+"%;width:"+A.k.a9(q.e*100,2)+"%;height:"+A.k.a9(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aY(A.a.aU(A.o.fI(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.ld&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.h1E(q.ay)+";border:2px solid "+C.h1E(q.ch)+'"></div>'
break
case 5:l=C.fMq(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gahv()
if(p==null)p=A.atq
n=B.U(p)
k=n.k("pA<1>")
j=new B.pA(p,0,8,k)
j.Gg(p,0,8,n.c)
j=new B.bV(j,j.gJ(0),k.k("bV<ai.E>"))
k=k.k("ai.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
p=B.aJ(p,'"',e)
n=B.aJ(i,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aJ(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
h1E(d){var w=A.o.az(d,24)
return"rgba("+(A.o.az(d,16)&255)+","+(A.o.az(d,8)&255)+","+(d&255)+","+A.k.a9((w&255)/255,3)+")"},
h2_(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bzY(d,e){var w=0,v=B.j(x.H)
var $async$bzY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fsk(e,C.hS_(e),d),d,null,!0,!0,x.H),$async$bzY)
case 2:return B.h(null,v)}})
return B.i($async$bzY,v)},
bzZ(){var w=0,v=B.j(x.T),u,t,s
var $async$bzZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FB(92,2400),$async$bzZ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fsd(s),$async$bzZ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzZ,v)},
aNN(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aNN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fNE(d),$async$aNN)
case 3:t=f
s=A.a.i(d.b)
r=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=X.fuw(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNN,v)},
fX2(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aZM:function aZM(d,e,f){this.a=d
this.b=e
this.c=f},
fsb:function fsb(d,e){this.a=d
this.b=e},
fsk:function fsk(d,e,f){this.a=d
this.b=e
this.c=f},
fsh:function fsh(d){this.a=d},
fsi:function fsi(d,e,f){this.a=d
this.b=e
this.c=f},
fsj:function fsj(d,e,f){this.a=d
this.b=e
this.c=f},
hRR(d){return C.kl(d.w)},
hRY(d){var w,v,u,t
if(d.length===0||!A.d.e2(d,C.hTG()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xW(d){var w=A.a.i(d),v=B.ae("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hek()
if(w.b.test(u))return u
return null},
h8I(d,e,f){var w,v,u=C.hmS(d),t=$.p5()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aD(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
hS3(d){var w,v,u,t,s=B.b0(x.N)
for(w=J.aV(d.a),v=new B.hE(w,d.b);v.C();){u=w.gT(w).y
t=C.xW(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fs9(d,e){var w,v=d.y,u=C.xW(v==null?"":v)
if(u!=null)return d.y=u
w=C.hS3(new B.a3(e,new C.fsa(d),B.U(e).k("a3<1>")))
v=d.x
return d.y=C.h8I(v==null?"":v,null,w)},
hS2(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.kl(w.w))return null
v=w.y
return C.xW(v==null?"":v)},
hrf(){var w,v=$.p5(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"SL"+A.d.fO(u)},
Uy(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Uy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c_(),$async$Uy)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eY("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$Uy)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a7(m)
$.al.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uy,v)},
Uz(d){return C.hrg(d)},
hrg(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Uz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c_(),$async$Uz)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hx("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,A.cE,null),$async$Uz)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a7(p)
$.al.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uz,v)},
a6u(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6u=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c_(),$async$a6u)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Uy(),$async$a6u)
case 4:s=a6
r=C.xW(a2==null?"":a2)
if(r==null)r=a3!=null?C.h8I(a3,null,A.Hr):null
q=x.N
p=B.b0(q)
for(o=J.dg(s),n=J.aV(o.ghR(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xW(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdL(s),n=n.gai(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a_(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dF.aG(t)
g.n(0,"payload",A.cS.gcs().aG(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.R2.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xW(J.k(q==null?"":q))
if(f==null)f=C.fX7(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Uz(s),$async$a6u)
case 7:u=new B.aDG(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hrf()
n=r==null
d=n?C.fX7(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dF.aG(t)
q.n(0,"payload",A.cS.gcs().aG(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.Q(Date.now(),0,!1).a4().ab())
if(D.R2.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Uz(s),$async$a6u)
case 8:u=new B.aDG(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6u,v)},
fX7(d){var w,v,u=$.p5()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aD(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
apc(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$apc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c_(),$async$apc)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Uy(),$async$apc)
case 6:t=f
s=J.a8(t)
r=s.gJ(t)
s.bm(t,new C.caL(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Uz(t),$async$apc)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$apc,v)},
apb(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$apb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xW(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c_(),$async$apb)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Uy(),$async$apb)
case 6:t=o.jn(f),t=t.gai(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xW(J.k(q==null?"":q))===p){u=C.a6t(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apb,v)},
a6t(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a6t=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c_(),$async$a6t)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Uy(),$async$a6t)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aN(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=A.c4.c6(0,A.cA.aG(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.R2.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aF(0,s,null)
if(m.b(r)){q=B.a_(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.an(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dU(B.a_(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.Q(Date.now(),0,!1).a4().ab())
o.n(p,g,l)}w=7
return B.b(C.Uz(p),$async$a6t)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6t,v)},
hRX(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.B(new B.J(d,new C.fsg(),w),w.k("ai.E"))
v.n(0,"decks",w)
return v},
fso(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.Q(Date.now(),0,!1).a4().ab())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ac())
return A.R.an(w,null)}return A.R.an(C.hRX(d==null?B.a([],x.D):d,f,g),null)},
fsn(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fsn=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a6u(h,d,e,f,g),$async$fsn)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xW(e==null?"":e)
u=new B.aDt(s,t)
w=1
break}t=A.dF.aG(h)
t=A.jZ.gcs().aG(t)
u=new B.aDt(C.xW(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fsn,v)},
fNG(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ab(q)===0)return!1
if(J.cY(q,"NGMYSLIDESYNC2|"))return!0
if(J.cY(q,"NGMYSLIDECODE|"))return!0
if(J.cY(q,"NGMY_SL:"))return!0
if(J.eV(q,s)||J.eV(q,r))return!0
if(J.cY(q,"{"))try{w=A.R.aF(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hS0(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fNG(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aY(v,u))
if(C.fNG(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aY(v,s))
if(C.fNG(t))return t}}return null},
fsc(d){var w,v,u,t=A.a.i(d)
if(J.ab(t)===0||J.cY(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cY(t,"NGMY_SL:"))w=v.a(A.R.aF(0,A.c4.c6(0,A.cA.aG(J.mp(t,8))),null))
else w=v.a(A.R.aF(0,t,null))
v=C.hAT(w)
return v}catch(u){v=B.a([],x.D)
return v}},
afy(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$afy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.apb(t[1]),$async$afy)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fsc(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xW(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.apb(r),$async$afy)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fsc(s)
w=1
break}u=B.a([],x.D)
w=1
break
case 9:w=A.a.a_(q,"NGMYSLIDESYNC2|")?11:12
break
case 11:t=q.split("|")
w=t.length>=2?13:14
break
case 13:w=15
return B.b(C.a6t(t[1]),$async$afy)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fsc(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fsc(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
hAT(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.R2.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fND(C.Uu(B.a_(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d7(u,x.f)
t=B.cC(t,new C.f1z(w),t.$ti.k("G.E"),x.I)
t=B.B(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fND(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iV
$.iV=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Uu(B.a_(o,x.N,x.z))
if(e&&C.kl(p.w))p.Q=new B.Q(Date.now(),0,!1).a4().bM(144e8).ab()
return p},
bzJ(){var w=0,v=B.j(x.aT),u,t,s
var $async$bzJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.FA(),$async$bzJ)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.afy(s),$async$bzJ)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzJ,v)},
fAN(d){var w=0,v=B.j(x.T),u,t
var $async$fAN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hP(D.Ur,!0,"Dismiss",d,new C.fAO(),new C.fAP(),A.E9,!0,x.N),$async$fAN)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.P(D.eCd)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAN,v)},
hVH(d,e,f,g,h){return B.a6(d,!1).ck(B.eu(new C.fAQ(h,e,g,f),!0,null,x.H))},
fsa:function fsa(d){this.a=d},
caL:function caL(d){this.a=d},
fsg:function fsg(){},
f1z:function f1z(d){this.a=d},
fAO:function fAO(){},
fAP:function fAP(){},
fAQ:function fAQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Uw:function Uw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCd:function aCd(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
elw:function elw(){},
els:function els(d,e){this.a=d
this.b=e},
elv:function elv(d,e){this.a=d
this.b=e},
elt:function elt(d){this.a=d},
elu:function elu(d){this.a=d},
elx:function elx(d){this.a=d},
ely:function ely(d){this.a=d},
elB:function elB(d){this.a=d},
elC:function elC(d){this.a=d},
elA:function elA(d){this.a=d},
elD:function elD(d){this.a=d},
elz:function elz(d){this.a=d},
elE:function elE(d,e){this.a=d
this.b=e},
elr:function elr(d,e){this.a=d
this.b=e},
elq:function elq(d,e){this.a=d
this.b=e},
Ux:function Ux(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhM:function bhM(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
elF:function elF(d,e){this.a=d
this.b=e},
elG:function elG(d){this.a=d},
elH:function elH(){},
elI:function elI(d){this.a=d},
elJ:function elJ(d,e){this.a=d
this.b=e},
aCa:function aCa(d){this.a=d},
aCb:function aCb(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ef9:function ef9(d){this.a=d},
ef8:function ef8(){},
efa:function efa(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef4:function ef4(){},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
brZ:function brZ(){},
apd:function apd(d){this.a=d},
aCe:function aCe(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
elL:function elL(d){this.a=d},
elK:function elK(d){this.a=d},
hFX(){var w,v,u,t
for(v=0;v<4;++v){w=D.cQQ[v]
try{if(A9.bTn(w)){u=w
return u}}catch(t){}}return null},
PO(d,e){return C.hOI(d,e)},
hOI(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$PO=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hFX()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nH?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.G(b4,2)
c2.b=b5-A.o.G(b5,2)
b6=B.q7(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cq(null,x.A)
b8=A.d.gK(c3)
b9=$.av()
o=new B.eI(b8,b9)
n=new B.eI("Getting ready\u2026",b9)
m=new B.eI(0,b9)
l=B.o1(new C.fmu(c2,b7,o),!1,!1)
b6.lr(0,l)
b9=x.H
B.cg(null,A.da,!1,null,new C.fmv(n,m),c6,null,!0,!0,b9)
k=new C.fmz(b7)
j=new C.fmA()
i=null
t=4
b3=c2.a
h=Ag.aQ2(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fDe(h,30)
e=B.a([],x.aK)
b3=x.z
i=A9.aUP(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Gs.xG(i,"dataavailable",new C.fmw(e))
d=new B.bQ(new B.bg($.bw,x.dT),x.b2)
A.Gs.xG(i,"stop",new C.fmx(d))
J.ag5(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$PO)
case 8:w=7
return B.b(c5.$1(d0),$async$PO)
case 7:a0=d0
J.fDg(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ag5(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ag5(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$PO)
case 15:w=14
return B.b(c5.$1(d0),$async$PO)
case 14:a0=d0
case 13:J.fDg(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ag5(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.Q(Date.now(),0,!1).bM(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbn())b3=b3===b8.gbn()&&0<b8.gct()
else b3=!0
if(!b3){w=17
break}J.fDg(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bO(A.fu,null,b9),$async$PO)
case 18:w=16
break
case 17:J.ag5(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ag5(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cK(0,A.nq),$async$PO)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hH(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mR(a7)
c0.download=B.t(J.ab(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.K8(b0)
J.lJ(b0)
B.bO(A.np,new C.fmy(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a7(c4)
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
J.lJ(l)
if(p.oY())p.eD()
c3=o
b3=$.av()
c3.shJ(b3)
J.aOD(c3,0)
c3=n
c3.shJ(b3)
J.aOD(c3,0)
c3=m
c3.shJ(b3)
J.aOD(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PO,v)},
fmu:function fmu(d,e,f){this.a=d
this.b=e
this.c=f},
fmt:function fmt(){},
fmv:function fmv(d,e){this.a=d
this.b=e},
fmz:function fmz(d){this.a=d},
fmA:function fmA(){},
fmw:function fmw(d){this.a=d},
fmx:function fmx(d){this.a=d},
fmy:function fmy(d){this.a=d},
bsa:function bsa(d,e,f){this.c=d
this.d=e
this.a=f},
eWW:function eWW(){},
eWX:function eWX(){},
cb7(d){var w=0,v=B.j(x.at),u,t,s
var $async$cb7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.apn(d,A.ym),$async$cb7)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bx(new B.Q(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cb7,v)},
cb6(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a6a:function a6a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhv:function bhv(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e5H:function e5H(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
a72:function a72(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nX$=k
_.nY$=l
_.nZ$=m
_.nk$=n},
a73:function a73(d,e){this.a=d
this.b=e},
b0p:function b0p(){},
cdj:function cdj(){},
cdk:function cdk(){},
cdl:function cdl(d,e,f,g,h,i,j,k,l){var _=this
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
hfk(d){return new C.agn(d)},
a1k:function a1k(){},
agn:function agn(d){this.a=d},
aOY:function aOY(){},
auE:function auE(d,e){this.d=d
this.b=e
this.a=null},
aQr:function aQr(d){this.b=d
this.a=null},
fhD(d,e){var w=0,v=B.j(x.H)
var $async$fhD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.V().gwS().KC(d,e),$async$fhD)
case 2:B.fuC()
return B.h(null,v)}})
return B.i($async$fhD,v)},
h6_(d,e){return(A.qE[(d^e)&255]^A.o.az(d,8))>>>0},
ffp(d,e,f,g,h,i){var w=C.hL3(d,A.d9,f,null,A.cW,g,h,i)
return w},
h7R(d){var w=F.h8z(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hmS(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.ov.h(0,w)
if(v!=null)return v
for(u=A.ov.gdL(A.ov),u=u.gai(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ae("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ao(s,0,2)
return A.a.ao(s+"XX",0,2)},
h7Z(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<33;++w)v+="- "+D.cKQ[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bxU(d,e){return C.hHG(d,e)},
hHG(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bxU=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hH([d],"application/pdf")
n=x.z
q=B.aS0(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cA(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ed(B.jP(o,"share",[p]),x.H),$async$bxU)
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
return B.i($async$bxU,v)},
fNx(){var w=0,v=B.j(x.y),u,t,s
var $async$fNx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f8x
s=$.bxr
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bxU(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNx,v)},
bze(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bze=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f8x
l=$.bxr
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.h2F()?3:4
break
case 3:w=5
return B.b(C.bxU(m,k),$async$bze)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bxs
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
J.K8(q)
w=10
return B.b(B.bO(A.a1,null,x.H),$async$bze)
case 10:J.lJ(q)
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
return B.i($async$bze,v)},
fNo(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fNo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bxs
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.li.u6(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fNo,v)},
fNF(d,e){var w=0,v=B.j(x.H),u,t
var $async$fNF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hH([d],"text/html"))
t.toString
u=window
u.toString
A.li.u6(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fNF,v)},
b_m(d,e){var w=0,v=B.j(x.y),u
var $async$b_m=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b_o(d,e),$async$b_m)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b_n(d),$async$b_m)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_m,v)}},D,Aj,H,Ak,A6,W,O,P,Al,G,F,E,Q,X,Y,Z,Am,A7,K,A_,N,V,L,A8,An,A0,Ao,Ap,A9,Aa,Aq,Ab,Ac,Ad,Ar,As,R,At,I,Au,Av,S,T,M,A1,A2,A3,Aw,Ae
J=c[1]
B=c[0]
A=c[2]
U=c[182]
A4=c[132]
Af=c[48]
Ag=c[56]
A5=c[51]
Ah=c[103]
Ai=c[193]
C=a.updateHolder(c[4],C)
D=c[180]
Aj=c[27]
H=c[88]
Ak=c[35]
A6=c[185]
W=c[181]
O=c[170]
P=c[184]
Al=c[97]
G=c[151]
F=c[30]
E=c[183]
Q=c[105]
X=c[28]
Y=c[139]
Z=c[109]
Am=c[147]
A7=c[111]
K=c[186]
A_=c[59]
N=c[161]
V=c[73]
L=c[120]
A8=c[114]
An=c[188]
A0=c[95]
Ao=c[83]
Ap=c[86]
A9=c[52]
Aa=c[157]
Aq=c[34]
Ab=c[71]
Ac=c[104]
Ad=c[192]
Ar=c[194]
As=c[191]
R=c[65]
At=c[189]
I=c[136]
Au=c[148]
Av=c[195]
S=c[46]
T=c[187]
M=c[168]
A1=c[190]
A2=c[91]
A3=c[55]
Aw=c[167]
Ae=c[64]
C.nz.prototype={
us(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.th(t,v)
return new C.nz(t===0?!1:w,v,t)},
bGz(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.C7()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.th(w,u)
return new C.nz(r===0?!1:s,u,r)},
bGZ(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.C7()
w=o-d
if(w<=0)return p.a?$.fP_():$.C7()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.th(w,u)
q=new C.nz(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a15())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.S(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.am(e,16)
if(A.o.G(e,16)===0)return r.bGz(v)
u=w+v+1
t=new Uint16Array(u)
C.h_l(r.b,w,e,t)
w=r.a
s=C.th(u,t)
return new C.nz(s===0?!1:w,t,s)},
m_(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.S(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.am(e,16)
u=A.o.G(e,16)
if(u===0)return n.bGZ(v)
t=w-v
if(t<=0)return n.a?$.fP_():$.C7()
s=n.b
r=new Uint16Array(t)
C.hwS(s,w,e,r)
w=n.a
q=C.th(t,r)
p=new C.nz(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aB(0,$.a15())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a15())}return p},
aK(d,e){var w,v=this.a
if(v===e.a){w=C.cAp(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a6b(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a6b(t,e)
if(s===0)return $.C7()
if(r===0)return t.a===e?t:t.us(0)
w=s+1
v=new Uint16Array(w)
C.hwQ(t.b,s,d.b,r,v)
u=C.th(w,v)
return new C.nz(u===0?!1:e,v,u)},
Gh(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.C7()
w=d.c
if(w===0)return t.a===e?t:t.us(0)
v=new Uint16Array(s)
C.b7n(t.b,s,d.b,w,v)
u=C.th(s,v)
return new C.nz(u===0?!1:e,v,u)},
btP(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.th(r,u)
return new C.nz(!1,u,s)},
btO(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.th(u,r)
return new C.nz(!1,r,v)},
btQ(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.th(p,m)
return new C.nz(s!==0,m,s)},
Th(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.C7()
w=t.a
if(w===e.a){if(w){w=$.a15()
return t.Gh(w,!0).btQ(e.Gh(w,!0),!0).a6b(w,!0)}return t.btP(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.btO(v.Gh($.a15(),!1),!1)},
af(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a6b(e,v)
if(C.cAp(u.b,t,e.b,w)>=0)return u.Gh(e,v)
return e.Gh(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.us(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a6b(e,v)
if(C.cAp(u.b,t,e.b,w)>=0)return u.Gh(e,v)
return e.Gh(u,!v)},
aJ(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.C7()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h_m(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.th(w,t)
return new C.nz(q===0?!1:r,t,q)},
bGy(d){var w,v,u,t
if(this.c<d.c)return $.C7()
this.aO3(d)
w=$.fIC.c2()-$.avn.c2()
v=C.fIE($.fIB.c2(),$.avn.c2(),$.fIC.c2(),w)
u=C.th(w,v)
t=new C.nz(!1,v,u)
return this.a!==d.a&&u>0?t.us(0):t},
cgU(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aO3(d)
w=C.fIE($.fIB.c2(),0,$.avn.c2(),$.avn.c2())
v=C.th($.avn.c2(),w)
u=new C.nz(!1,w,v)
if($.fID.c2()>0)u=u.m_(0,$.fID.c2())
return t.a&&u.c>0?u.us(0):u},
aO3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h_i&&d.c===$.h_k&&g.b===$.h_h&&d.b===$.h_j)return
w=d.b
v=d.c
u=16-A.o.gahU(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h_g(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h_g(g.b,f,u,r)}else{r=C.fIE(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fIF(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cAp(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b7n(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b7n(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hwR(p,r,i);--o
C.h_m(h,j,0,r,o,s)
if(r[i]<h){m=C.fIF(j,s,o,n)
C.b7n(r,l,n,m,r)
while(--h,r[i]<h)C.b7n(r,l,n,m,r)}--i}$.h_h=g.b
$.h_i=f
$.h_j=w
$.h_k=v
$.fIB.b=r
$.fIC.b=l
$.avn.b=s
$.fID.b=u},
gV(d){var w,v,u,t=new C.cAq(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cAr().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nz&&this.aK(0,e)===0},
rB(d,e){return this.aK(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
ul(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gahU(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.az(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cAs(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cAt(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kW(A.aG.gaO(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.us(0):r
while(v.c>1){u=$.hcg()
if(u.c===0)B.ba(D.aXT)
t=v.cgU(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bGy(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fO(0)},
$iaPH:1,
$ihA:1}
C.aP7.prototype={
L(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gJ(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cE6(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gak(d){return A.d.gak(this.a)},
gaj(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gai(d){var w=this.a
return new J.jS(w,w.length,B.U(w).k("jS<1>"))}}
C.Qq.prototype={
cLQ(){var w,v
if(this.as==null)this.b8m()
w=this.as
v=w==null?null:w.amA()
return v==null?null:v.ey()},
b8m(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.amA().ey()
this.as=new C.bKL(v)}},
gX(d){return this.at}}
C.a2g.prototype={
a3(){return"CompressionType."+this.b}}
C.bEO.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cm()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dP(v,u)+(s.b&A.xW[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cm()}w=A.o.dP(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fp(u,t)&A.xW[d])
s.c=t}return v}}
C.bD9.prototype={
cCq(d,e){var w,v,u,t,s,r=this,q=new C.bEO(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.em(8)!==66||q.em(8)!==90||q.em(8)!==104)return!1
w=r.a=q.em(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cfe(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cfh(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cfe(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d4H[u])v=!1
if(t!==D.cKO[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cfh(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bWv()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.em(3)
if(q<2||q>6)return-1
v=d3.em(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.em(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.ah(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ah(u)
u[w]=l}c9.fr=B.c0(6,$.han(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.ham()
u=x.an
c9.y=B.c0(6,v,!1,u)
c9.z=B.c0(6,v,!1,u)
c9.Q=B.c0(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bSa(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.ah(v)
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
a3=c9.ark(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.ark(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.ah(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.ah(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.ah(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.ah(u)
u[o]=n;--a8}v&2&&B.ah(u)
u[a9]=a7}else{b1=A.o.am(a8,16)
b2=A.o.G(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.ah(u)
u[a9]=n}v.$flags&2&&B.ah(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.ah(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.ah(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.ah(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.ah(n)
n[a4]=u;++a4
a3=c9.ark(d3)
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
u.$flags&2&&B.ah(u)
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
d4.bE(c3)
c1=(c1<<8^D.FZ[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.G0[b9];++b9
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
if(b8===0){b8=D.G0[b9];++b9
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
if(b8===0){b8=D.G0[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.G0[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.G0[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bE(c3)
c1=c1<<8^D.FZ[c1>>>24&255^v];--c2}d4.bE(c3)
c1=(c1<<8^D.FZ[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bE(c7)
c1=(c1<<8^D.FZ[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bE(c7)
c1=(c1<<8^D.FZ[c1>>>24&255^c7&255])>>>0
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
ark(d){var w,v,u,t,s=this,r=s.ay
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
t=d.em(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.em(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bSa(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.ah(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.ah(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.ah(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.ah(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.ah(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.ah(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.ah(e)
e[v]=(s+1<<1>>>0)-r}},
bWv(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.csA.prototype={
aEI(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bJD(e)
if(q<0)return
e.c=q
if(e.aI()!==101010256)return
e.aS()
e.aS()
e.aS()
e.aS()
r.f=e.aI()
r.r=e.aI()
w=e.aS()
if(w>0)e.aEL(w,!1)
r.cfC(e)
q=r.r
v=r.f
u=e.aHA(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aI()!==33639248)break
s=new C.b63()
s.cLP(0,u,e,f)
q.push(s)}},
cfC(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5P(20,r)
if(w.aI()!==117853008){d.c=s
return}w.aI()
v=w.rn()
w.aI()
d.c=v
if(d.aI()!==101075792){d.c=s
return}d.rn()
d.aS()
d.aS()
d.aI()
d.aI()
d.rn()
d.rn()
u=d.rn()
t=d.rn()
this.f=u
this.r=t
d.c=s},
bJD(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5P(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajX(A.hP)
o.aIR(r.ey(),A.hP,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aI()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.csy.prototype={}
C.av1.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.csB.prototype={
aEI(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aI()!==67324752)return
e.aS()
o.b=e.aS()
w=D.azO.h(0,e.aS())
o.c=w==null?D.K9:w
o.d=e.aS()
o.e=e.aS()
o.f=e.aI()
o.r=e.aI()
o.w=e.aI()
v=e.aS()
u=e.aS()
o.x=e.alm(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aOP:D.Cw
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.Cw&&u>2){w=o.y
w.toString
s=B.qM(w,A.hP,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aS()===39169){s.aS()
s.aS()
s.alm(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aS()
o.at=D.aOQ
o.ax=new C.csy(r,q)
w=D.azO.h(0,q)
o.c=w==null?D.K9:w}}}if((o.b&8)!==0){p=e.aI()
if(p===134695760)o.f=e.aI()
else o.f=p
o.r=e.aI()
o.w=e.aI()}},
gJ(d){return this.bhC().length},
amA(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qM(new Uint8Array(0),A.hP,q,q)
w=r.at
if(w!==D.Cw)if(p.gJ(0)<=0)r.at=D.Cw
else{if(w===D.aOP){p=r.bET(p)
r.Q=p}else if(w===D.aOQ){p=r.bEw(p)
r.Q=p}r.at=D.Cw}w=r.c
if(w===D.acU){v=p.c
u=B.de()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.oT.AI(p.ey(),!0,!1)
else{t=B.a6S(A.hP,r.w)
p=r.Q
p.toString
A.oT.a27(p,t,!0,!1)
u.b=t.FQ()}r.Q.c=v
return B.qM(u.b9(),A.hP,q,q)}else if(w===D.acV){s=B.a6S(A.hP,32768)
p=r.Q
v=p.c
C.hfv().cCq(p,s)
u=s.FQ()
r.Q.c=v
return B.qM(u,A.hP,q,q)}else return B.qM(p.ey(),A.hP,q,q)},
bhC(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b4h(d){var w=this.ch,v=C.Iz(C.h6_(w[0].N(0),d))
w[0]=v
v=w[1].af(0,v.Th(0,C.Iz(255)))
w[1]=v
w[1]=v.aJ(0,C.Iz(134775813)).af(0,C.Iz(1)).Th(0,C.Iz(4294967295))
w[2]=C.Iz(C.h6_(w[2].N(0),w[1].m_(0,24).N(0)))},
aNu(){var w=(this.ch[2].Th(0,C.Iz(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bET(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qM(new Uint8Array(0),A.hP,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b4h(u[v.c++]^r.aNu())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aNu()
r.b4h(s)
u&2&&B.ah(t)
t[w]=s}return B.qM(t,A.hP,q,q)},
bEw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gJ(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hwx(k,w,v)
p=new Uint8Array(B.co(A.aG.dj(q,0,v)))
k=v*2
o=new Uint8Array(B.co(A.aG.dj(q,v,k)))
if(!C.fZM(A.aG.dj(q,k,k+2),u))throw B.S(B.fj("password error"))
k=new Uint8Array(16)
n=new C.bBK(k,new Uint8Array(16),p)
k=x.S
m=J.a3E(0,k)
m=n.r=new C.cd8(m)
m.c=!0
m.b=m.bgW(!0,new C.aqK(p))
if(m.c)m.d=B.bl(D.nF,!0,k)
else m.d=B.bl(D.xP,!0,k)
l=C.fY0(C.fY2(),64)
l.baE(new C.aqK(o))
n.w=l
n.cLq(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fZM(k,m))throw B.S(B.fj("macs don't match"))
return B.qM(r,A.hP,null,null)}}
C.b63.prototype={
cLP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aS()
e.aS()
e.aS()
e.aS()
e.aS()
e.aS()
e.aI()
n.w=e.aI()
n.x=e.aI()
w=e.aS()
v=e.aS()
u=e.aS()
n.y=e.aS()
e.aS()
n.Q=e.aI()
n.as=e.aI()
if(w>0)n.at=e.alm(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qM(t,A.hP,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aS()
p=s.aS()
o=s.a5P(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rn()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rn()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rn()
p-=8}if(p>=4&&n.y===65535)n.y=o.aI()}}}}if(u>0)e.alm(u)
f.c=n.as
t=new C.csB(D.K9,n,D.Cw,B.a([C.Iz(0),C.Iz(0),C.Iz(0)],x.f3))
n.ch=t
t.aEI(0,f,g)},
u(d){return this.at}}
C.csz.prototype={
cCr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.csA(B.a([],x.fT))
this.a=g
g.aEI(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aP7(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Qq(o,A.o.am(Date.now(),1000),0):C.fQn(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fQn(o,q.w,q)
if(k.as==null)k.b8m()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajX(A.hP)
j.aIR(o,A.hP,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.Je(!1).GS(i,0,h,!0)}}return v}}
C.bBK.prototype={
cLq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.BC(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hfe(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bI3(u,0,w,0,o)}else{o===$&&B.c()
q.bEX(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.JY(w,0)
m.x=A.aG.dj(m.x,0,10)
w=m.w
l=w.a
l.lb(0)
w=w.d
w===$&&B.c()
l.BC(0,w,0,w.length)
return f}}
C.cdd.prototype={}
C.cdh.prototype={}
C.cdb.prototype={}
C.aqK.prototype={}
C.cdg.prototype={
cCG(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ee(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.baE(new C.aqK(A.aG.fC(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bJ1(n.a,n.b,t,s,r)
r+=v}A.aG.hb(f,g,g+w,s)
return o.a.c},
bJ1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.S(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.BC(0,d,0,d.length)
v.BC(0,f,0,4)
u=m.c
u===$&&B.c()
w.JY(u,0)
u=m.c
A.aG.hb(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.BC(0,s,0,s.length)
w.JY(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.cdc.prototype={}
C.cda.prototype={}
C.aqL.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aqL){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rB(d,e){var w=this.a
w===$&&B.c()
w=A.o.rB(w,e.gbSr())
if(!w)e.gbSr()
return w},
aH3(d,e){this.a=0
this.b=d},
rF(d){return this.aH3(d,null)},
aHD(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fa(""),u=w.a
u===$&&B.c()
w.aXl(v,u)
u=w.b
u===$&&B.c()
w.aXl(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aXl(d,e){var w,v=A.o.fI(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bp(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cdf.prototype={
lb(d){var w,v=this
v.a.rF(0)
v.c=0
A.aG.hj(v.b,0,4,0)
v.w=0
w=v.r
A.d.hj(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
am4(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aYN(u,0)
v.c=0}v.a.aHD(1)},
BC(d,e,f,g){var w=this.ce6(e,f,g)
f+=w
g-=w
w=this.ce7(e,f,g)
this.cdY(e,f+w,g-w)},
JY(d,e){var w,v=this,u=C.fY1(v.a),t=u.a
t===$&&B.c()
t=C.fO8(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fO8(w,3)
v.ce1()
v.cdZ(u)
v.aqa()
v.c8g(d,e)
v.lb(0)
return 20},
aYN(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nK(A.aG.gaO(d),d.byteOffset,d.length).getUint32(e,A.i1===w.d)
if(w.w===16)w.aqa()},
aqa(){this.cLp()
this.w=0
A.d.hj(this.r,0,16,0)},
cdY(d,e,f){while(f>0){this.am4(d[e]);++e;--f}},
ce7(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aYN(d,e)
e+=4
f-=4
w.aHD(4)
v+=4}return v},
ce6(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.am4(d[e]);++e;--f;++v}return v},
ce1(){this.am4(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.am4(0)}},
cdZ(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aqa()
u=v.d
switch(u){case A.i1:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.CY:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.S(B.bd("Invalid endianness: "+u.u(0)))}},
c8g(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i1===this.d,s=0;s<w;++s){r=v[s]
q=J.nK(A.aG.gaO(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cdi.prototype={
cLp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pJ[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pJ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pJ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pJ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pJ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pJ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pJ[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pJ[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pJ[30]
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
C.cde.prototype={
baE(d){var w,v,u,t,s=this,r=s.a
r.lb(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.BC(0,w,0,v)
w=s.d
w===$&&B.c()
r.JY(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hb(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hj(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hb(w,0,u,s.d)
s.b5q(s.d,u,54)
s.b5q(s.e,u,92)
u=s.d
r.BC(0,u,0,u.length)},
JY(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.JY(s,w)
s=u.e
t.BC(0,s,0,s.length)
v=t.JY(d,e)
s=u.e
A.aG.hj(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.BC(0,s,0,s.length)
return v},
b5q(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cd9.prototype={}
C.cd8.prototype={
a0t(d){return(D.nF[d&255]&255|(D.nF[d>>>8&255]&255)<<8|(D.nF[d>>>16&255]&255)<<16|D.nF[d>>>24&255]<<24)>>>0},
bgW(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.S(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e1(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c0(4,0,!1,u)
switch(v){case 4:q=J.nK(A.aG.gaO(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a0t((m>>>8|(m&$.pJ[24])<<24)>>>0)^D.cnB[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nK(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a0t((k>>>8|(k&$.pJ[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a0t((k>>>8|(k&$.pJ[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nK(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a0t((g>>>8|(g&$.pJ[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a0t(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.S(B.bd("Should never get here"))}return s},
bI3(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nK(A.aG.gaO(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e5[a8&255]
u=D.e5[a9>>>8&255]
t=$.pJ[8]
s=D.e5[b0>>>16&255]
r=$.pJ[16]
q=D.e5[b1>>>24&255]
p=$.pJ[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e5[a9&255]
s=D.e5[b0>>>8&255]
u=D.e5[b1>>>16&255]
v=D.e5[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e5[b0&255]
u=D.e5[b1>>>8&255]
s=D.e5[a8>>>16&255]
q=D.e5[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e5[b1&255]
a8=D.e5[a8>>>8&255]
a9=D.e5[a9>>>16&255]
b0=D.e5[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e5[n&255]
b0=D.e5[m>>>8&255]
a9=D.e5[l>>>16&255]
a8=D.e5[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e5[m&255]
b0=D.e5[l>>>8&255]
o=D.e5[b1>>>16&255]
s=D.e5[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e5[l&255]
o=D.e5[b1>>>8&255]
b0=D.e5[n>>>16&255]
u=D.e5[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e5[b1&255]
o=D.e5[n>>>8&255]
s=D.e5[m>>>16&255]
v=D.e5[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e5[a8&255]^C.n6(D.e5[a9>>>8&255],24)^C.n6(D.e5[b0>>>16&255],16)^C.n6(D.e5[b1>>>24&255],8)^b6[w][0]
m=D.e5[a9&255]^C.n6(D.e5[b0>>>8&255],24)^C.n6(D.e5[b1>>>16&255],16)^C.n6(D.e5[a8>>>24&255],8)^b6[w][1]
l=D.e5[b0&255]^C.n6(D.e5[b1>>>8&255],24)^C.n6(D.e5[a8>>>16&255],16)^C.n6(D.e5[a9>>>24&255],8)^b6[w][2]
b1=D.e5[b1&255]^C.n6(D.e5[a8>>>8&255],24)^C.n6(D.e5[a9>>>16&255],16)^C.n6(D.e5[b0>>>24&255],8)^b6[w][3]
a7=D.nF[n&255]
b0=D.nF[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nF[l>>>8&255]
a9=D.nF[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nF[b1>>>8&255]
h=D.nF[n>>>16&255]
g=D.nF[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nF[l>>>24&255]
s=s[3]
a1=J.nK(A.aG.gaO(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nK(A.aG.gaO(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nK(A.aG.gaO(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nK(A.aG.gaO(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bEX(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nK(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nK(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nK(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nK(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e4[a6&255]
v=D.e4[b0>>>8&255]
u=$.pJ[8]
t=D.e4[a5>>>16&255]
s=$.pJ[16]
r=D.e4[a4>>>24&255]
q=$.pJ[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e4[a4&255]
t=D.e4[a6>>>8&255]
v=D.e4[b0>>>16&255]
w=D.e4[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e4[a5&255]
v=D.e4[a4>>>8&255]
t=D.e4[a6>>>16&255]
r=D.e4[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e4[b0&255]
a5=D.e4[a5>>>8&255]
a4=D.e4[a4>>>16&255]
a6=D.e4[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e4[p&255]
a6=D.e4[b0>>>8&255]
a4=D.e4[n>>>16&255]
a5=D.e4[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e4[o&255]
a4=D.e4[p>>>8&255]
a7=D.e4[b0>>>16&255]
t=D.e4[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e4[n&255]
a7=D.e4[o>>>8&255]
a5=D.e4[p>>>16&255]
v=D.e4[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e4[b0&255]
a7=D.e4[n>>>8&255]
t=D.e4[o>>>16&255]
w=D.e4[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e4[a6&255]^C.n6(D.e4[b0>>>8&255],24)^C.n6(D.e4[a5>>>16&255],16)^C.n6(D.e4[a4>>>24&255],8)^b5[a9][0]
o=D.e4[a4&255]^C.n6(D.e4[a6>>>8&255],24)^C.n6(D.e4[b0>>>16&255],16)^C.n6(D.e4[a5>>>24&255],8)^b5[a9][1]
n=D.e4[a5&255]^C.n6(D.e4[a4>>>8&255],24)^C.n6(D.e4[a6>>>16&255],16)^C.n6(D.e4[b0>>>24&255],8)^b5[a9][2]
b0=D.e4[b0&255]^C.n6(D.e4[a5>>>8&255],24)^C.n6(D.e4[a4>>>16&255],16)^C.n6(D.e4[a6>>>24&255],8)^b5[a9][3]
a4=D.xP[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xP[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xP[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xP[o>>>8&255]
i=D.xP[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xP[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nK(A.aG.gaO(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bKK.prototype={}
C.bKL.prototype={
gJ(d){var w=this.a.length
return w},
amA(){return B.qM(this.a,A.hP,null,null)}}
C.b7C.prototype={
un(d){return C.hzJ(d)}}
C.bLD.prototype={
cwY(d){if(this.b)throw B.S(B.bd("FontLoader is already loaded"))
this.c.push(d.by(new C.bLE(),x.E))},
mf(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.S(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mf)
case 6:w=5
return B.b(p.fhD(f,r),$async$mf)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mf,v)}}
C.atJ.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6Q.prototype={
A(d,e){if(e==null)return!1
if(J.bK(e)!==B.aY(this))return!1
return e instanceof C.a6Q&&e.a===this.a},
gV(d){return B.bp(B.aY(this),B.wa(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.aY(this)===D.fjD)return"["+(w+B.e_(this.a))+"]"
return"[ObjectKey "+(w+B.e_(this.a))+"]"}}
C.aTr.prototype={
bY(d){var w=new C.ayA(!0,this.e,null,new B.dc(),B.ce())
w.bW()
w.scz(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxX(0,!0)
w=this.e
if(!w.A(0,e.ah)){e.ah=w
e.aDl()}}}
C.ayA.prototype={
sxX(d,e){return},
goV(){var w=this.aa$
return w!=null},
gkI(){var w=this.aa$
return w!=null},
Ln(d){var w=d==null?B.fSJ(null):d
w.sa3_(this.ah)
return w}}
C.a_i.prototype={
S(){return new C.aGV(B.b0(x.N))},
cJG(d){return this.d.$1(d)},
cHv(){return this.e.$0()}}
C.aGV.prototype={
Z(){this.a0()
this.NT()},
NT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$NT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cHv(),$async$NT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eVo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$NT,v)},
Xp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Xp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a3<1>")
p=B.B(new B.a3(r,new C.eVs(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.eVt(t))
w=3
return B.b(C.alH(p),$async$Xp)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eVu(t,s,p))
w=4
return B.b(t.NT(),$async$Xp)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Xp,v)},
a_u(d){return this.ci6(d)},
ci6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.eVp(t))
s=J.q(d,"id")
w=3
return B.b(C.bVS(J.k(s==null?"":s)),$async$a_u)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.eVq(t))
w=1
break}q=C.fND(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cJG(B.a([q],x.D)),$async$a_u)
case 4:if(t.c==null){w=1
break}t.m(new C.eVr(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_u,v)},
NS(d,e){return this.bFl(0,e)},
bFl(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eVj(q),r,null,!0,!0,x.y),$async$NS)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.eVk(t))
s=s.h(e,"id")
w=4
return B.b(C.alG(J.k(s==null?"":s)),$async$NS)
case 4:if(t.c==null){w=1
break}t.m(new C.eVl(t))
w=5
return B.b(t.NT(),$async$NS)
case 5:case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
cw1(d){var w=B.bi(d),v=w==null?null:w.bP()
if(v==null)return""
return A.i6[B.bF(v)-1]+" "+B.bP(v)},
aNl(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.My,A.n),w,e,w,w,w,w,w,e)},
aNk(d){return this.aNl(d,44)},
b2G(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.My:u,r=B.m(14),q=B.W(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.HD,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.HD,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.boN,u,u,u)],p))}return B.D(B.aH(A.c5,B.dh(u,B.A(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hU,u,u,u,A.uw,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eVy(this,d),u,u,u,u,u,u,!1,A.ac),1)},
cc7(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.Ve,n=B.m(18),m=p?A.d6:A.du
m=B.I(m,A.r,p?1.8:1)
w=this.aNk(A.pq)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aMB,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d5,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aMD,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.My:q
u=p?q:B.I(A.b9,A.r,1.6)
r=p?D.bCZ:q
return B.aH(q,B.dh(q,B.A(B.a([w,A.be,t,B.dh(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a6),A.h0,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.h0,q,q,A.db,A.bm,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eVn(this,p,d),q,q,q,q,q,q,!1,A.ac)},
cjB(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cw1(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.du,A.r,1)
v=r.aNk(A.LN)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aMB,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d5,B.d(p+" slides"+t,q,q,q,q,q,q,D.aMD,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b_p(A.hu,A.bs,"Bring it back",r.r?q:new C.eVv(r,d))
return B.p(q,B.A(B.a([v,A.be,t,p,A.bp,r.b_p(A.e8,A.cx,"Delete",r.r?q:new C.eVw(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Ve,q,w,o,q,q,A.n),q,q,q,A.db,D.bji,q,q,q)},
b_p(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hl(B.aH(w,B.p(w,B.W(d,v?A.b9:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ac),w,f,w,w)},
aqq(d,e,f){var w=null
return new B.C(D.bij,B.v(B.a([B.W(d,A.b9,w,w,w,46),A.aa,B.d(e,w,w,w,w,w,w,D.eSU,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eLC,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bR,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b9,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aNl(A.xC,46),A.be,D.bpy],t)
if(j.r)s.push(D.dVn)
s.push(B.aG(i,i,i,i,A.Mj,i,i,i,new C.eVB(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.du,A.r,1)
o=J.a8(h)
q=B.a([A.S,u,new B.C(D.blS,s,i),B.p(i,B.A(B.a([j.b2G(0,A.xb,"Save",j.a.c.length),j.b2G(1,A.M2,"Saved",o.gJ(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bkW,A.em,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cx:A.bs).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cx:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.LP:A.eh
n=B.W(n,p?A.cx:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a52,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bkS,A.j4,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eP2,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aH(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eS_,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eVC(j,v),i,i,i,i,i,i,!1,A.ac))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.aqq(A.pq,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cc7(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dUW)
else if(j.e==null)s.push(j.aqq(A.ahs,"Could not reach the database","Check the connection, then open this again."))
else if(o.gaj(h))s.push(j.aqq(A.og,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gai(h);r.C();)s.push(j.cjB(r.gT(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.ch,B.cL(u,i,W.aeF,i,i,A.aj,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbYY()
p=s?i:D.My
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b2.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xb,m?A.j2:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.blu,B.aH(i,B.dh(i,B.A(B.a([k,A.a4s,new B.dl(1,A.ch,B.f1(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j2:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.ec),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hU,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ac),i))}else q.push(A.S)
return B.p(i,B.bq(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!1),A.f,i,new B.aX(0,1/0,0,w.a.b*0.9),D.aV0,i,i,i,i,i,i,i,i)}}
C.o0.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().ab()],x.N,x.z)}}
C.X4.prototype={
S(){return new C.avz(B.a([],x.k),B.fc(null,x.H))},
gdS(){return this.c}}
C.avz.prototype={
Z(){this.a0()
this.O_()},
O_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$O_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0g(t.a.c),$async$O_)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cBO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$O_,v)},
cpv(d){var w,v,u,t=this
d.c=new B.Q(Date.now(),0,!1)
w=J.pR(t.d,new C.cBR(d))
v=w<0
if(v&&C.hwU(d))return t.f
u=t.d
if(v)J.p9(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fEv(new C.cBS(t),v)
return t.f=t.f.by(new C.cBT(t,d),v).eN(new C.cBU())},
HD(d,e,f){return this.c5T(0,e,f)},
aUK(d,e){return this.HD(0,e,!1)},
c5T(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$HD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ck(B.eu(new C.cBN(t,e),!1,null,x.H)),$async$HD)
case 3:w=4
return B.b(t.f,$async$HD)
case 4:w=5
return B.b(t.O_(),$async$HD)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HD,v)},
aU1(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dgY:d
this.HD(0,new C.o0(w,v,new B.Q(Date.now(),0,!1)),!0)},
bYt(){return this.aU1(null)},
abj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cBV(),r,!1,!1,!0,null,!1,!1,x.g2),$async$abj)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aU1(s)
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
HC(d,e){return this.bFd(0,e)},
bFd(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$HC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cBI(e),s,null,!0,!0,x.y),$async$HC)
case 3:if(g!==!0){w=1
break}t.m(new C.cBJ(t,e))
w=4
return B.b(t.f,$async$HC)
case 4:w=5
return B.b(C.aex(t.a.c,e.a),$async$HC)
case 5:w=6
return B.b(t.O_(),$async$HC)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HC,v)},
Ck(d){return this.bxx(d)},
bxx(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ck=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.cBE(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Ck)
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
return B.b(t.aUK(0,d),$async$Ck)
case 9:w=5
break
case 7:w=10
return B.b(F.fOa(r,d.b,null),$async$Ck)
case 10:w=5
break
case 8:w=11
return B.b(t.HC(0,d),$async$Ck)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ck,v)},
bSo(){var w,v,u=null,t=[D.dh0,D.dgZ,D.dh_],s=new C.cBL(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.dn.j(0.4),A.eQ,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aZ(999,999)
n.push(B.p(u,new B.x(D.d1P[w],u,A.oK,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.nw,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.ffg,A.P,B.c6(A.bF,n,A.bx,6,6),A.aN,B.aH(u,B.p(u,D.euR,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.af1,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cBK(this),u,u,u,u,u,u,!1,A.ac)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a4(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bKg,A.n),u,u,u,u,D.bm1,u,u,u)},
bxv(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.X,v,A.b_,A.q,B.a([B.f1(A.A,F.ame(d.b),A.f,A.bQ),D.e_D,B.an(v,B.aH(v,B.p(v,D.bDL,A.f,v,v,D.aVU,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cBz(this,d),v,v,v,v,v,v,!1,A.ac),v,v,v,4,4,v)],r),v),A.ao),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eJ4,v,v,v)
w=u===1?"":"s"
return B.aH(v,B.v(B.a([new B.fE(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.ePc,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cBA(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cBB(this,d),v,v,v,v,v,v,!1,A.ac)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.adB,B.hl(B.aH(s,B.p(s,A.ak4,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b2.j(0.5),A.J,12)],x.V),E.v5,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbZJ(),s,s,s,s,s,s,!1,A.ac),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mE,s,s,s,!0,s,s,s,s,s,D.ffk,s,s,s,1,s,!0)
if(t.e)r=D.aZ8
else{w=t.bSo()
v=B.a([D.f1X,A.ab],r)
if(J.cu(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ab(t.d),s,s,s,s,s,s,D.eIv,s,s,s),A.f,s,s,new B.o(D.b2v,s,s,u,s,s,A.n),s,s,s,s,A.Ew,s,s,s))}r=B.a([new B.nw(Ae.Wn,new B.lU(w,s),s),new B.nw(D.blo,new B.lU(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eAR)
else r.push(new B.nw(D.bkU,B.NB(new B.o5(new C.cBW(t),J.ab(t.d),!0,!0,!0,0,B.rr(),s),D.eAP),s))
r=B.v_(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.aj,!1,r)}return B.cb(q,D.b1o,r,s,!1,!1,s,s)}}
C.X2.prototype={
S(){return new C.avv(B.a([],x.bx))},
Sy(d){return this.d.$1(d)}}
C.aCO.prototype={}
C.avv.prototype={
aXn(d,e,f){var w=$.av(),v=new B.ap(new B.bb(d,A.b0,A.aM),w),u=this.gaUJ()
v.aL(0,u)
w=new B.ap(new B.bb(e,A.b0,A.aM),w)
w.aL(0,u)
return new C.aCO(v,w,f)},
D9(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a8(0)
v.x=B.cM(A.pf,new C.cB2(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.av()
u=new B.ap(new B.bb(w.a,A.b0,A.aM),v)
t=m.gaUJ()
u.aL(0,t)
m.d!==$&&B.aR()
m.d=u
u=new B.ap(new B.bb(w.b,A.b0,A.aM),v)
u.aL(0,t)
m.e!==$&&B.aR()
m.e=u
u=new B.ap(new B.bb(w.c,A.b0,A.aM),v)
u.aL(0,t)
m.f!==$&&B.aR()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ap(new B.bb(p.a,A.b0,A.aM),v)
o.aL(0,t)
n=new B.ap(new B.bb(p.b,A.b0,A.aM),v)
n.aL(0,t)
r.push(new C.aCO(o,n,p.c))}if(r.length===0)r.push(m.aXn("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a8(0)
if(r.y){r.a.c.b=r.goA()
q=r.a
q.Sy(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.av()
q.O$=0
q=r.e
q===$&&B.c()
q.R$=w
q.O$=0
q=r.f
q===$&&B.c()
q.R$=w
q.O$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.R$=w
s.O$=0
s=t.b
s.R$=w
s.O$=0}r.a1()},
goA(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.ma(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qR(n,w,v,t,u)},
A_(){var w=0,v=B.j(x.H),u=this,t
var $async$A_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a8(0)
u.y=!1
u.a.c.b=u.goA()
t=u.a
w=2
return B.b(t.Sy(t.c),$async$A_)
case 2:return B.h(null,v)}})
return B.i($async$A_,v)},
bZH(){this.m(new C.cB1(this))
this.D9()},
aTK(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cB4(w,d,v))
w.D9()},
bZI(d,e){var w=A.d.cv(this.w,e)
this.m(new C.cBc())
this.D9()
$.aU.x1$.push(new C.cBd(w))},
P6(d){return this.cbY(d)},
cbY(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kL(80,1400,A.eE),$async$P6)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$P6)
case 8:p=f
o=q.b.toLowerCase()
n=J.ag1(o,".png")?"image/png":"image/jpeg"
r.m(new C.cB5(d,n,p))
r.D9()
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
return B.i($async$P6,v)},
x_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$x_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h9E(r,t.goA()),$async$x_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cB3(t,s))
t.D9()
case 1:return B.h(u,v)}})
return B.i($async$x_,v)},
ccf(d){var w,v=this,u=null,t=F.flL(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.ha(D.bx8,D.f4h,new C.cB7(v,d),u),u)
w=x.p
return new B.C(A.cM,new B.am(A.X,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fI(t,A.A,u,u,A.cn,A.bQ,!0,140,!1,u,1/0),A.ao),B.an(u,B.A(B.a([v.b_q(A.kI,new C.cB8(v,d)),A.bp,v.b_q(A.cu,new C.cB9(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b_q(d,e){var w=null
return B.aE(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hr,B.W(d,A.c,w,w,w,18),w),A.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aV,0,w,w,A.cJ,w,w,A.ad)},
HE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$HE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.A_(),$async$HE)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fOa(s,t.goA(),new C.cBb(t)),$async$HE)
case 4:case 1:return B.h(u,v)}})
return B.i($async$HE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qq,B.ha(D.bBK,D.f9U,n.gau1(),B.ft(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aG(m,m,m,m,A.ak3,m,m,m,new C.cBe(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Uw,m,1,m,m,m,!1,m,!1,E.mE,m,m,m,!0,m,m,m,m,m,D.f51,m,m,m,1,m,!0),j=Aq.aSb(N.l_,A.c,Ab.Tz,A.nB,D.f5J,n.gbZG()),i=B.m(18),h=n.gau0(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jb,12)],x.V)
g=B.aH(m,B.p(m,new B.a4(92,142.1818181818182,B.f1(A.A,F.ame(n.goA()),A.f,A.ds),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ac)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eA,B.D(B.v(B.a([D.fgM,A.av,B.d(F.fMH(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eUB,m,m,m),A.S,B.dp(E.ajl,E.aNk,h,B.bk(A.dn,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Uw,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.U,!1,m,!0,A.q,m,B.aM(),h,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nO,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.U,!1,m,!0,A.q,m,B.aM(),w,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aL(m,A.U,!1,m,!0,A.q,m,B.aM(),g,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aZ(16,16)
u=new B.az(N.l_.j(0.18),1,A.r,-1)
t=v+1
s=B.aG(m,m,m,m,D.bAv,m,m,m,v===0?m:new C.cBf(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aG(m,m,m,m,D.bGE,m,m,m,v===r-1?m:new C.cBg(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cBh(n,v)
p=new B.aZ(12,12)
o=new B.aZ(12,12)
g.push(B.p(m,B.v(B.a([new B.cx(A.aX,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.eV6,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aG(m,m,m,m,B.W(A.e8,A.o7,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.U,!1,m,!0,A.q,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.dZ(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bv(p,p,p,p),A.df),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cb,!0,A.a5,m,A.am,m,m,m,m),A.aq,n.ccf(i[v]),B.aL(m,A.U,!1,m,!0,A.q,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.dZ(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bv(o,o,o,o),A.df),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mE,m,new B.bY(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a6Q(h),A.e3,D.bjx,m,m,m))}return B.o2(!0,B.cb(k,E.abT,B.cL(g,m,D.bjZ,m,m,A.aj,!1),m,!1,!1,j,m),new C.cBi(n),x.C)}}
C.avx.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cx:E.mE,q=B.m(16),p=B.m(16),o=s?A.aE.j(0.08):A.c.j(0.04)
s=s?A.aE.j(0.16):A.dn.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.ff,B.aE(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aM_,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.en,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ad),t)}}
C.aol.prototype={
S(){return new C.aBD()}}
C.aBD.prototype={
Z(){this.a0()
this.XZ()},
bq(d){this.bD(d)
if(d.c!=this.a.c)this.a_j()},
a_j(){var w=0,v=B.j(x.H),u=this,t
var $async$a_j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a_j)
case 2:u.d=null
if(u.c!=null)u.m(new C.e0v(u))
w=3
return B.b(u.XZ(),$async$a_j)
case 3:return B.h(null,v)}})
return B.i($async$a_j,v)},
XZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ab(n)===0){w=1
break}t=4
if(J.cY(n,"http://")||J.cY(n,"https://")||J.cY(n,"data:")){o=B.WG(B.ct(n,0,null),new B.NZ(!0))
r.d=o}else{o=B.fj("unsupported video ref")
throw B.S(o)}w=7
return B.b(o.hY(0).cK(0,A.pa),$async$XZ)
case 7:if(r.c==null){w=1
break}r.d.rH(!1)
r.m(new C.e0t(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a7(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e0u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XZ,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a1()},
c0N(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.m(new C.e0w(w))}else{v.pg(0)
w.m(new C.e0x(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bG
n=B.m(8*n.d)
m=B.a([D.iZ.j(0.92),D.Jo.j(0.95)],x.O)
w=B.I(A.bU.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.pt,A.bU,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bW(B.au(B.v(B.a([t,new B.a4(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a5(A.ax,A.aC,A.x,m,o,o),A.n),A.bc)}if(p.f)return B.au(B.W(A.aiH,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aZV
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f1(A.A,new B.a4(r,q,new B.zk(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.au(B.p(o,B.W(A.iN,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.N(w,w,w,w),o,o,o),o,o,o))}return B.aH(o,B.bu(n,new B.am(A.X,o,A.b_,A.q,m,o),A.ao),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc0M(),o,o,o,o,o,o,!1,A.ac)}}
C.wW.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.je.prototype={}
C.abz.prototype={
B(d){return B.ot(new C.dSU(this,B.M(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aaZ.prototype={
B(d){var w,v,u=null,t=B.M(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.I(D.iZ.j(t?0.35:0.4),A.r,1),p=t?D.JO:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.I(A.bU.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],o)
w=this.c
o=B.D(B.p(u,new B.fE(0.5625,C.hP2(w),u),A.ao,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aft,u,u,u,u),1)
m=D.iZ.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iZ,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aE(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d5,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.b82,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bY(new B.az(m,1,A.r,-1),A.Z,A.Z,A.Z),u,u,u,A.n),u,u,u,u,D.adQ,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ad)}}
C.wZ.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nm.prototype={}
C.bgz.prototype={
Uz(d){var w=null
return new B.bI(A.a3,w,w,B.CV(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bxe(){return this.Uz(1)},
auy(d){var w=null,v=B.m(8),u=B.I(A.hR,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.aa9,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hR,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dS(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hR,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.aq,w.auy("TAARIFA ZA WANANDOA"),A.aq,w.bxe(),A.d5,w.Uz(0.9),A.d5,w.Uz(0.7),A.P,w.auy("TAMKO LA MAKUBALIANO"),A.ha,w.Uz(1),A.d5,w.Uz(0.95),A.P,w.auy("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.abC.prototype={
B(d){return B.ot(new C.e5K(B.M(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.adg.prototype={
B(d){var w,v,u,t,s,r=null,q=B.M(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.I(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b7E:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.I(A.au.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],l)
w=this.c
v=C.fNb(w.a)
if(v==null)v=A.d.gK(D.OY)
u=B.b_(v.f)
t=B.b_(v.r)
s=x.p
l=B.D(B.p(r,new B.fE(0.5625,new B.am(A.X,r,A.b_,A.q,B.a([B.bZ(0,B.fI(C.fNa(v.d),A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.aew,new C.bgz(v,u,t,r),r)],s),r),r),A.ao,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aft,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.JP,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aE(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d5,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b1S,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bY(new B.az(j,1,A.r,-1),A.Z,A.Z,A.Z),r,r,r,A.n),r,r,r,r,D.adQ,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ad)}}
C.kH.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a6j.prototype={}
C.Uj.prototype={
S(){var w=$.av()
return new C.aBW(new B.cq(null,x.A),new B.ap(A.as,w),new B.ap(A.as,w),B.mi(0,null,null),A.d.gK(D.a07),D.drg,B.a([],x.L),B.a([],x.gE))}}
C.aBW.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yJ(C.fpF(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.foB().by(new C.e91(v),w)
$.tD().jW(0,"assets/images/ngmy_logo.png").by(new C.e92(v),w).eN(new C.e93())},
q(){var w=this,v=w.e,u=$.av()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.q()
w.a1()},
af7(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.P(B.b2(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
HU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$HU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kL(88,1600,A.eE),$async$HU)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$HU)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h9V(m,p),$async$HU)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bAn(new B.po(o,1),m),$async$HU)
case 10:if(r.c!=null)r.m(new C.e8E(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a7(k)
r.af7("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$HU,v)},
Vh(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h9V(s,q),$async$Vh)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bAn(new B.po(r,1),s),$async$Vh)
case 4:if(t.c!=null)t.m(new C.e8A(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Vh,v)},
ac2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ac2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.e8L(q))
t=4
q.a.toString
p=C.hTs()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ac2)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.e8M(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a7(i)
q.af7(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e8N(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ac2,v)},
Yb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Yb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ab(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.e8G(q,i))
t=4
q.a.toString
p=C.hTr()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Yb)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.e8H(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a7(g)
if(q.c!=null)q.m(new C.e8I(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e8J(q))
$.aU.x1$.push(new C.e8K(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Yb,v)},
c1t(d){this.m(new C.e8F(this,d))},
Dp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Dp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.e8C(q))
t=4
w=7
return B.b($.aU.gm9(),$async$Dp)
case 7:w=8
return B.b(B.bO(A.mK,null,x.H),$async$Dp)
case 8:k=$.aU.ah$.x.h(0,q.d)
p=k==null?null:k.gb6()
if(!(p instanceof B.qa))throw B.S("The page is not ready yet.")
w=9
return B.b(p.lU(1800/p.gX(0).a),$async$Dp)
case 9:o=e
w=10
return B.b(o.hg(A.fQ),$async$Dp)
case 10:n=e
if(n==null)throw B.S("Could not make the picture.")
w=11
return B.b(A5.aeA(J.f8(A.dD.gaO(n)),"ngmy_news.png","image/png"),$async$Dp)
case 11:m=e
q.af7(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a7(i)
q.af7(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e8D(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dp,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.kK,a2,a2,a2,new C.e8T(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bCf,a2,a2,a2,new C.e8U(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oo,a2,a2,a2,a4?a1.gaVB():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zQ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.ev_,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eQ,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fE(0.7142857142857143,B.f1(A.A,new B.en(new C.aZn(t,s,r,a1.x,a2),a1.d),A.f,A.ds),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.RP,a2,a2,a2)
t=a1.as?a2:a1.gc1s()
t=B.a([B.D(B.dp(D.bD_,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cb,a2,a2,a2),t,B.bk(D.rz,a2,a2,a2,A.c,A.fH,a2,a2,new B.b7(B.m(14),P.w_),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fI(r,A.A,a2,a2,A.cn,A.bQ,!1,48,!1,a2,48),A.ao)
A.d.v(t,B.a([A.aw,r,B.aG(a2,a2,a2,a2,D.bzO,a2,a2,a2,a1.as?a2:a1.gbDR(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.RP,a2,a2,a2)
q=B.aL(a2,A.U,!1,a2,!0,A.q,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aP5("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cXP[o]
p.push(B.mr(a2,D.rz,new B.x(n.a,a2,A.oI,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hv,new C.e8V(a1,n),a2,a2,P.w_,a2))}p=B.c6(A.bF,p,A.bx,6,8)
m=a1.Q
m=B.c6(A.bF,B.a([D.fft,A.be,B.jE(a2,a2,a2,D.f0P,a2,new C.e8W(a1),m==="en",a2,a2,a2,a2),A.ab,B.jE(a2,a2,a2,D.f0K,a2,new C.e8X(a1),m==="sw",a2,a2,a2,a2)],w),A.ra,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.RP,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d9(D.a07,0,B.dI(10,"count",x.S),j),h=i.$ti,i=new B.bV(i,i.gJ(0),h.k("bV<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aNE(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.aX,!1)
i=B.a([],w)
for(j=B.d9(D.a07,10,a2,j),h=j.$ti,j=new B.bV(j,j.gJ(0),h.k("bV<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aNE(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.aX,!1)
i=a1.as?a2:a1.gc1v()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.by.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cM,s,a2),t,A.ay,new B.C(A.cM,r,a2),q,A.P,p,A.S,m,A.ay,new B.C(A.cM,l,a2),new B.a4(a2,78,k,a2),A.P,new B.a4(a2,78,j,a2),A.aN,B.aH(a2,B.p(A.A,B.A(B.a([D.bCU,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fT,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tn,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ac)],w)
if(a4){u=B.a([A.e_,B.A(B.a([D.dbP,A.aw,D.bpQ],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b2.j(0.35):D.rz
p=new B.aZ(16,16)
d=new B.az(A.bH,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.eSF,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A6.Tn,new B.o(q,a2,new B.bY(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cM,A.j4,a2,a2,a2),a2))}u.push(A.aq)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cLd[o]
t.push(B.mr(a2,D.rz,new B.x(a0,a2,A.HP,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hv,new C.e8Y(a1,a0),a2,a2,P.w_,a2))}u.push(B.c6(A.bF,t,A.bx,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.U,!1,a2,!0,A.q,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aP5("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e8Z(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc1u()
u.push(B.A(B.a([t,A.ab,B.GB(A.xH,s,B.ng(a2,A.b2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaVB()
u.push(B.dp(A.oo,D.fbl,t,B.bk(A.d1,a2,a2,a2,a2,A.HB,a2,a2,new B.b7(B.m(16),A.Z),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.aej,a2,a2,A.aj,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jD.j(0.5),A.r,1)
v.push(B.bZ(0,B.ef(B.au(B.p(a2,B.A(B.a([E.a4t,A.eA,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.zH,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bmj,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cb(a3,A.zQ,new B.am(A.X,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aP5(d){var w=null
return B.bo(w,new B.b4(4,B.m(14),A.Z),w,A.eN,w,w,w,w,!0,w,w,w,w,w,w,D.rz,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,V.HJ,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aNE(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b_(d.f),p=s?A.by:A.bH
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b_(d.x),t,t,t,5,t,A.lv,t,t,t,t),A.ha],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b_(v).j(0.5),t,t,t,2,t,D.bix,t,t,t,t))
w.push(A.d5)
w.push(new B.C(A.jn,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b_(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aH(t,B.p(t,B.v(w,A.m,t,A.b7,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jm,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e8B(this,d),t,t,t,t,t,t,!1,A.ac)}}
C.yJ.prototype={
b7x(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yJ(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cAe(d){var w=null
return this.b7x(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
azK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c97(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fo(g,B.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c95(),B.U(w).k("J<1,n>")).bX(0,new C.c96())
t=B.B(w,w.$ti.k("G.E"))}else t=k
w=h.$1("paper")
w=J.ab(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.ab(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.ab(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b7x(p,r,q,J.ab(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEz(d){return this.f}}
C.rN.prototype={
a3(){return"NewsLayout."+this.b}}
C.AB.prototype={
a3(){return"NewsFrame."+this.b}}
C.l3.prototype={}
C.aZn.prototype={
qG(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b_(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aVD(d,e,f,g){return this.qG(d,e,null,1.25,f,A.bi,g)},
Os(d,e,f,g,h){return this.qG(d,e,f,1.25,g,A.bi,h)},
auE(d,e,f,g,h){return this.qG(d,e,null,f,g,A.bi,h)},
auD(d,e,f,g,h){return this.qG(d,e,f,g,0,A.bi,h)},
aVF(d,e,f,g,h){return this.qG(d,e,null,f,0,g,h)},
c1z(d,e,f,g,h,i){return this.qG(d,e,f,g,0,h,i)},
auC(d,e,f,g){return this.qG(d,e,null,f,0,A.bi,g)},
ac5(d,e,f){return this.qG(d,e,null,f,0,A.bi,A.cN)},
aVE(d,e,f,g,h){return this.qG(d,e,f,g,0,h,A.cN)},
c1y(d,e,f,g){return this.qG(d,e,null,f,0,g,A.cN)},
c1x(d,e,f,g){return this.qG(d,e,f,g,0,A.bi,A.cN)},
ac6(d,e,f,g,h,i){return this.qG(d,e,f,g,h,A.bi,i)},
aVC(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kt(new B.ep(d,u,u,A.cQ,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ci,new B.jB(1),u,u,h,u,A.cg,u)
v.B5(g)
if(!v.b.a.c.gaBk())return w
w-=2}return j},
ac3(d,e,f,g,h,i,j,k){return this.aVC(d,e,f,g,h,i,j,k,A.bi)},
awH(d,e,f){var w=null,v=d==null?B.b_(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a4(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
awG(d){return this.awH(null,!1,d)},
aeW(d,e){return this.awH(null,d,e)},
ciL(d,e){return this.awH(d,!1,e)},
gaXL(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaRC(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Np(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ac3(w.gaRC(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaRC(),v,g,A.a2,v,v,v,w.auD(u,t,f,1.02,A.O),e,v,v)},
aRH(d){return this.Np(d,A.L,null,2,78,30)},
a9C(d,e,f,g,h){return this.Np(d,e,null,f,g,h)},
bSg(d,e,f,g,h){return this.Np(d,A.L,e,f,g,h)},
bSf(d,e,f){return this.Np(d,A.L,null,e,f,30)},
Qm(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bG
w=v.d.as
return new B.C(A.kB,B.d(s,u,g,A.a2,u,u,u,v.aVE(w,v.aVC(t,w,A.cN,d,g,h,15,1.2,A.cC),f,1.2,A.cC),e,u,u),u)},
b2m(d){return this.Qm(d,A.L,null,3,24)},
ay9(d,e,f,g){return this.Qm(d,e,null,f,g)},
cpZ(d,e,f){return this.Qm(d,A.L,e,3,f)},
b2n(d,e){return this.Qm(d,e,null,3,24)},
cpX(d,e){return this.Qm(d,A.L,null,3,e)},
cpY(d,e,f){return this.Qm(d,e,null,3,f)},
aot(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.is,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Os("Roboto",12,d==null?B.b_(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b_(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b_(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Mm(){return this.aot(null,!0)},
aos(d){return this.aot(null,d)},
bzO(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bG
return new B.C(A.ir,new B.a4(d,w,B.d(v,w,2,A.a2,w,w,w,this.c1y(this.d.as,13.5,1.2,A.cC),e,w,w),w),w)},
uU(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.Q(Date.now(),0,!1),i=m.gaXL(),h=A.o.am(j.bx(B.bX(B.bx(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hH5(Math.max(1,B.bx(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aVD(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ac3(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ac3(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b_(h.x)
h=h.ch?B.b_(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.ac6(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.N(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bzD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hH,A.j,0,l,l),A.aq,m.aeW(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b_(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eA,B.D(B.d(i,l,1,A.eB,l,l,l,m.auC(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bzD(j),l,l,l,l,l,l,m.Os(k,13,B.b_(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hH,A.j,0,l,l),A.P,m.ciL(B.b_(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaXL()
v=B.d("NGMY",l,l,l,l,l,l,m.auE(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b_(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.ey(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qG(k,r*0.72,o,1.05,-0.5,A.cC,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.N(t,s,t,s),l,l,l),l),A.b6,new B.dl(1,A.ch,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ac6(k,12.5,B.b_(h).j(0.85),1.3,1.2,A.O),A.dJ,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b_(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l)
t=m.aeW(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.auC(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.av,t,new B.a4(l,s,l,l),v,new B.a4(l,q,l,l),m.aeW(!0,1.4),A.av,B.d(C.bzD(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.awG(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.auE(v,u,1,3,A.O),A.L,l,l),A.P,m.aeW(!0,1.2),A.av,B.A(B.a([B.d(C.bzD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hH,A.j,0,l,l),A.av,m.awG(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aaI(d){return this.uU(d,!1)},
ac4(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b_(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ac6("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.N(v,u,v,u),w,w,w)},
c1w(d,e){return this.ac4(d,null,e,null)},
aTC(d){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.G(B.dk(v),12)===0?12:A.o.G(B.dk(v),12),t=B.b_(this.d.w).j(0.75),s=this.auD("Roboto",15,t,1,A.cq),r=B.W(E.agQ,t,w,w,w,18),q=A.a.ao(A.os[B.bF(v)-1],0,3),p=A.a.aU(A.o.u(B.h_(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bP(v)+", "+B.bx(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fC,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
atw(){return this.aTC(A.m9)},
b_E(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ac6("Roboto",this.ac3(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
awK(d,e,f){return this.b_E(d,e,f,30)},
ayc(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bG
return new B.C(A.uv,B.d(v,w,e,A.a2,w,w,w,this.c1x("Roboto",f,B.b_(this.d.w).j(0.88),1.35),w,w,w),w)},
b2r(d){return this.ayc(d,3,22)},
cq9(d,e){return this.ayc(d,e,22)},
rZ(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fI(r,A.A,s,s,A.cn,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Cu(D.bp3,w,s)
if(v==="sepia")w=new B.Cu(D.bp2,w,s)}else{r=this.d
v=r.w
u=B.b_(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.W(A.x6,B.b_(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bW(s,new B.o(s,s,s,s,s,new B.bS(A.A,0.95,A.x,s,0,B.a([A.K,A.Us.j(0.38)],x.O),s,s),A.n),A.bc))
return new B.a4(d,e,new B.am(A.X,s,A.b_,A.q,v,s),s)},
pM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b_(j),A.r,3)
j=B.I(B.b_(j),A.r,1)
return B.p(k,B.p(k,l.rZ(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.em,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m3,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.dRA,14)],x.V)
v=l.rZ(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.ey(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.au(B.d(u,k,2,A.a2,k,k,k,l.aVE(j.as,13.5,D.b3f,1.1,A.cC),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.b64,k,k,k,w,k,A.n),k,e,k,k,D.bjU,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b_(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rZ(d-10,e-10),A.ao),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b_(j.x),A.r,6)
j=B.b_(j.f)
v=t-10
return new B.a4(d,e,B.au(B.p(k,B.hQ(l.rZ(v,v),A.ao),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m3,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.dRq,10)],x.V)
return B.ey(A.A,0.025,new B.a4(d,e,new B.am(A.X,k,A.a9,A.f,B.a([B.bZ(0,B.p(k,l.rZ(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qs,k,k,k),0,0,0),B.an(k,B.ey(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.ey(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b_(j.x)
return new B.a4(d,e,B.b3(B.na(l.rZ(d,e),A.ao,D.frL),new C.b9O(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rZ(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bv(u));++n){m=new B.aZ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bX,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cI(0,q,0,p,k,k,new B.cx(A.aX,A.py,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.X,k,A.b_,A.q,w,k),A.f,A.ed,k,k,k,e,k,k,D.bok,k,k,d)
case 8:w=d/2
v=B.wk(A.h9,new B.aZ(w,w))
j=B.I(B.b_(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.wk(A.i0,new B.aZ(w,w)),l.rZ(d-10,e-10),A.ao),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fG,22)],x.V)
return B.p(k,l.rZ(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a4(d,e,B.na(l.rZ(d,e),A.ao,D.fxl),k)
case 0:j=B.I(B.b_(j.w),A.r,2.4)
return B.p(k,l.rZ(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.em,k,k,d)}},
aLg(d,e){return this.d.e===D.PA?A.bG:this.bzO(d,e)},
UQ(d){return this.aLg(d,A.L)},
gaxv(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
axu(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b_(v.w),A.r,1.6)
t=v.x
s=B.b_(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aVF(v.Q,19,1.15,A.cC,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Os("Roboto",12.5,B.b_(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.ac5(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jo(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gc9v(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a7m(d,e,f,g){return B.cl(new C.c98(this,e,d,f,g))},
a7l(d){return this.a7m(d,22,!0,18)},
V0(d,e){return this.a7m(d,22,!0,e)},
aMi(d,e,f){return this.a7m(d,22,e,f)},
bBN(d,e,f){return this.a7m(d,e,!0,f)},
b5g(d,e,f,g){return B.cl(new C.c99(this,e,d,g,!0,f))},
c8k(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aaI(824),A.ay,k.aRH(824),k.b2m(824),A.P,k.Mm(),A.aa,B.au(k.pM(824,360),j,j,j),k.UQ(824),A.aa,B.D(k.a7l(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aaI(824),A.aN,new B.a4(j,350,B.A(B.a([new B.a4(440,j,B.v(B.a([k.a9C(440,A.bg,3,62,26),k.ay9(440,A.bg,2,20),A.b6,k.aot(B.b_(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.HC,B.v(B.a([k.pM(362,310),k.UQ(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.awG(2),A.aa,B.D(k.a7l(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.uU(824,!0)
v=B.b_(h.x)
u=h.ch
t=x.p
s=B.a([k.bSg(788,u?B.b_(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cpZ(788,u?B.b_(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Ae,j,j,j)
u=B.a([B.au(k.pM(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.PA){h=A.w.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.auD(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lw,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.aa,v,A.aa,new B.am(A.X,j,A.a9,A.q,u,j),A.P,k.Mm(),A.S,B.D(k.V0(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.uU(824,!0)
w=k.pM(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.aa,new B.am(A.b3,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.Np(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a5(A.b1,A.b3,A.x,v,j,j),A.n),j,j,j,j,D.bmC,j,j,j),j,j,0,0,j,j)],u),j),k.b2n(824,A.bg),A.P,k.Mm(),A.S,B.D(k.a7l(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aaI(824),A.ay,k.aRH(824),k.b2m(824),A.P,k.Mm(),A.aa,B.D(k.b5g(3,300,B.v(B.a([k.pM(300,300),k.UQ(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.uU(824,!0)
v=x.p
u=B.v(B.a([k.a9C(440,A.bg,3,62,26),k.ay9(440,A.bg,2,20),A.b6,k.aos(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a4(j,400,B.A(B.a([new B.a4(440,j,u,j),A.aK4,new B.C(A.ir,k.pM(364,h.e===D.PA?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.V0(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aaI(824),A.aa,k.bSf(824,2,70),k.cpX(824,21),A.P,k.Mm(),A.aa,B.D(k.b5g(3,340,B.au(k.pM(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.uU(824,!0)
v=B.b_(h.x)
u=Date.now()
u=C.bzD(new B.Q(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Os(i,13,h.ch?B.b_(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aVF(h.Q,24,1.15,A.cC,A.O),j,j,j))
v.push(A.b6)
if(k.gaxv())v.push(k.axu(230,250))
return B.v(B.a([w,A.ay,B.D(B.A(B.a([new B.a4(230,j,B.v(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b_(h.w),j,j,j,j,j,A.adP,j,j,j,1.2),new B.a4(570,j,B.v(B.a([k.a9C(570,A.bg,3,62,28),k.cpY(570,A.bg,20),A.P,k.aos(!1),A.P,B.au(k.pM(570,330),j,j,j),k.UQ(570),A.S,B.D(k.aMi(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.uU(824,!0)
v=h.ch
u=v?B.b_(h.x):B.b_(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Os(i,13,v?A.w:B.b_(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.aa,B.p(j,B.v(B.a([t,A.aq,k.Np(788,A.bg,v?A.w:B.b_(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bkX,j,j,j),k.b2n(824,A.bg),A.S,B.au(k.pM(824,310),j,j,j),k.UQ(824),A.P,k.Mm(),A.S,B.D(k.a7l(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.uU(824,!0),A.aN,new B.am(A.X,j,A.a9,A.q,B.a([k.pM(824,430),B.an(18,k.c1w(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.awK(824,3,66),k.b2r(824),A.aa,B.p(j,j,A.f,B.b_(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.atw(),A.ay,B.D(k.V0(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.uU(824,!0),A.bu,new B.a4(j,500,B.A(B.a([new B.a4(410,j,B.v(B.a([k.ac4(k.c.b,B.b_(h).j(0.14),15,B.b_(h)),A.aN,k.b_E(410,4,58,28),k.ayc(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aK5,k.pM(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.atw(),A.aN,B.D(k.V0(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.uU(824,!0)
v=k.pM(824,420)
u=B.hk2(-0.25)
t=B.b_(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aN,new B.am(A.X,j,A.a9,A.q,B.a([v,B.an(22,B.fq(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c1z(i,30,A.c,1,A.cC,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bmS,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.awK(824,3,62),k.b2r(824),A.aa,B.p(j,j,A.f,B.b_(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.aTC(A.l7),A.ay,B.D(k.V0(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uU(824,!0)
u=h.w
t=x.p
w=B.a([k.pM(824,380),B.an(j,k.ac4(w.b,B.b_(u).j(0.85),15,B.b_(h.f)),j,j,16,j,16,j)],t)
s=k.awK(824,2,60)
r=k.cq9(824,2)
p=k.atw()
o=B.D(k.aMi(2,!1,18),1)
n=B.I(B.b_(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b_(h).j(0.05)
return B.v(B.a([v,A.aN,new B.am(A.X,j,A.a9,A.q,w,j),A.aN,s,r,A.S,p,A.ay,o,A.aa,B.p(j,B.A(B.a([B.bu(B.m(14),k.rZ(150,104),A.ao),A.nN,B.D(B.v(B.a([k.ac4("RELATED",B.b_(h).j(0.14),12,B.b_(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.auC(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.en,B.b_(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.uU(824,!0),A.bu,k.a9C(824,A.bg,3,62,30),k.ay9(824,A.bg,2,22),A.S,k.aos(!1),A.S,B.au(k.pM(824,330),j,j,j),k.aLg(824,A.bg),A.aN,B.D(k.bBN(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.bW(s,new B.o(s,s,s,s,s,new B.a5(A.ax,A.aC,A.x,B.a([B.b_(p),B.b_(q.r)],x.O),s,s),A.n),A.bc),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b6l(B.b_(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bnn,B.v(B.a([B.D(t.c8k(),1),A.P,B.p(s,s,A.f,B.b_(w),s,s,s,1.4,s,s,s,s,s,s),A.ha,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aVD(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Os(r,11,B.b_(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hH,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b_(w)
n.push(B.bZ(0,B.e3(B.b3(s,s,s,new C.boG(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.b_(p).j(0.75)
v=B.I(B.b_(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hQ(B.fI(q,A.A,s,s,A.cn,A.bQ,!1,30,!1,s,30),A.ao))
else o.push(B.W(A.m9,B.b_(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.auE(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e3(B.db(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bot,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a4(900,1260,B.jo(new B.am(A.X,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b9P.prototype={
iK(d){return C.h_s(d)},
jm(d){return!1}}
C.b9O.prototype={
a5(d,e){var w,v=C.h_s(e)
$.V()
w=B.L()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aM(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.brb.prototype={
iK(d){var w,v,u,t,s,r,q,p,o=new B.f5()
o.dU(3)
w=$.V()
v=B.a([],x.v)
u=new B.aP(w.r,A.ap,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ao(s,o.ag()*14)
v.push(w)
r=u.f
if(r!=null)w.bw(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ao(t,8))
w=d.b
r=w-8
u.E(new B.ao(t,r))
for(;t>0;t-=14){q=new B.ao(t,w-o.ag()*14)
v.push(q)
p=u.f
if(p!=null)q.bw(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ao(0,r))
u.E(new B.bE())
return u},
jm(d){return!1}}
C.b6l.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f5()
k.dU(7)
$.V()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ag()*0.07).gp(0)
q=k.ag()
p=k.ag()
o=k.ag()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ag()*u
p=k.ag()*t
m=50+k.ag()*90
w.sar(new B.bS(A.A,0.5,A.x,l,0,B.a([A.Jp.j(0.13),A.K],v),l,l).av(0,B.bT(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
aq(d){return!1}}
C.boG.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.ig(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ci,u,A.eq,A.cg)
s.eP()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.iV(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbb(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.Um.prototype={
S(){return new C.aC_()}}
C.aC_.prototype={
Z(){var w=this
w.a0()
B.h69(w.a.c,null).by(new C.eac(),x.g7).by(new C.ead(w),x.a)
w.a.toString},
gaK5(){var w=D.ari[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gauF(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaK5()
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
Yd(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Yd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ea_(r))
t=4
q=r.gauF()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.V()
n=new B.rD()
m=B.G2(n,null)
i=B.L()
i.Q=A.fO
m.AO(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pY().yD(J.fQ7(p),J.fQ7(o)),$async$Yd)
case 7:l=e
w=8
return B.b(l.hg(A.fQ),$async$Yd)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.M(J.f8(J.we(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ea0(r))
r.c.I(x.q).f.P(D.eDr)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Yd,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.kK,s,s,s,new C.ea6(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bJ(!1,D.fdC,s,s,!0,s,s,t.y||r==null?s:t.gc1A(),s,s)],p),s,s,!0,!0,A.zQ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fhm,s,s,s,1,s,!0)
if(r==null)p=A.lS
else{w=B.D(new B.C(A.c2,B.au(new B.fE(t.gaK5(),B.cl(new C.ea7(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jm,B.jE(s,s,s,new B.x(D.ari[u].a,s,E.aLP,s,s,s,s,s,s,s,s,s),s,new C.ea8(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bq(!0,B.v(B.a([new B.a4(s,40,B.cL(v,s,s,s,s,A.aX,!1),s),B.A(B.a([D.bDC,B.D(B.kP(s,s,s,6,1,new C.ea9(t),t.f),1),D.bDe],p),A.m,s,A.e,A.j,0,s,s),D.fbf,A.aq,B.bJ(!1,D.fb0,s,s,!0,s,s,new C.eaa(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!1),A.f,D.UI,s,s,s,s,s,s,D.bki,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cb(q,A.zQ,p,s,!1,!1,s,s)}}
C.b9l.prototype={
a5(d,e){var w
$.V()
w=B.L()
w.Q=A.cn
return d.AO(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.Zm.prototype={
S(){var w=$.av(),v=x.A
return new C.aDk(new B.ap(A.as,w),new B.ap(new B.bb("NGMY",A.b0,A.aM),w),new B.cq(null,v),new B.cq(null,v),A.d.gK(D.a0F),"quote"+1000*Date.now(),B.a([],x.t),B.b0(x.S),A.L)}}
C.oc.prototype={}
C.aDk.prototype={
gaRP(){var w,v,u=this
if(u.p1)w=new B.wA(1,u.p2,0.9,u.p3).iv().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.eHj(w))},
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a1()},
WX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tD().jW(0,"assets/images/ngmy_logo.png"),$async$WX)
case 7:q=e
p=J.f8(J.we(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bAn(new B.po(p,1),o),$async$WX)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eGb(r,p))
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
return B.i($async$WX,v)},
Ov(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ov=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kL(92,1800,A.eE),$async$Ov)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Ov)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bAn(new B.po(p,1),n),$async$Ov)
case 9:if(r.c==null){w=1
break}r.m(new C.eGz(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a7(l)
n=r.c
if(n!=null)n.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ov,v)},
b_2(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aE=w.aN=w.aC=w.aw=w.Y=w.b4=w.bg=w.y2=0
w.b2=null
w.aZ=0.25
w.b8=null
w.bI=0.5
w.aQ=1
w.c4=w.bQ=w.bh=0
w.cT=w.cQ=!1},
aTm(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bx5(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d_c)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bx5(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bx5(C.fLb(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bx5(C.fLb(1-a0*0.5,n,n,n),w)}return a1?C.bx5(C.fLb(-1,255,255,255),w):w},
ayh(){var w,v,u=B.ae("\\S+",!0,!1,!1,!1).kz(0,this.d.a.a),t=B.B(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yx(u,v,w)
this.dx.pD(new C.eGJ(t),!0)
return t},
b1w(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.ayh()
w=C.hRb(e.d.a.a,e.db)
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
return C.hNG(d,k,v,a0,j,e.gaRP(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
co3(){return this.b1w(null)},
Cj(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Cj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gm9(),$async$Cj)
case 3:w=4
return B.b(B.bO(A.eM,null,x.H),$async$Cj)
case 4:w=5
return B.b($.aU.gm9(),$async$Cj)
case 5:s=$.aU.ah$.x.h(0,t.r)
r=s==null?null:s.gb6()
if(!(r instanceof B.qa)){u=null
w=1
break}w=7
return B.b(r.lU(1080/r.gX(0).a),$async$Cj)
case 7:w=6
return B.b(e.hg(A.fQ),$async$Cj)
case 6:q=e
u=q==null?null:J.f8(A.dD.gaO(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Cj,v)},
a8d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a8d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eFV(q))
t=4
w=7
return B.b(q.Cj(),$async$a8d)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcs().aG(p)
n=C.AO(null,null,null,null,D.nH,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b1w(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).M(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a7(j)
l=q.c
if(l!=null)l.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eFW(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8d,v)},
zI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eFT(q))
t=4
w=7
return B.b($.aU.gm9(),$async$zI)
case 7:w=8
return B.b(B.bO(A.oa,null,x.H),$async$zI)
case 8:w=9
return B.b($.aU.gm9(),$async$zI)
case 9:k=$.aU.ah$.x.h(0,q.f)
p=k==null?null:k.gb6()
if(!(p instanceof B.qa))throw B.S("The picture is not ready yet.")
w=10
return B.b(p.lU(1080/p.gX(0).a),$async$zI)
case 10:o=e
w=11
return B.b(o.hg(A.fQ),$async$zI)
case 11:n=e
if(n==null)throw B.S("Could not make the picture.")
w=12
return B.b(A5.aeA(J.f8(A.dD.gaO(n)),"ngmy_quote.png","image/png"),$async$zI)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.P(B.b2(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a7(i)
k=q.c
if(k!=null)k.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eFU(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zI,v)},
cbp(){var w=this.p4
w.toString
return B.cl(new C.eGs(this,w))},
aVM(d,e){var w=null
return B.bo(w,w,w,w,w,D.eNo,w,w,!0,new B.b4(4,B.m(16),P.w_),w,w,w,w,w,D.rz,!0,w,w,w,w,new B.b4(4,B.m(16),D.aSL),w,w,w,w,w,w,w,w,A0.Co,e,w,w,w,w,w,w,w,D.eSw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
x9(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b2,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aMy,w,w,w))
return new B.C(D.bib,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aVL(d,e){var w=null,v=B.m(18),u=B.I(A.bH,A.r,1)
return B.p(w,B.aE(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.js),A.f,w,w,new B.o(D.rz,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
v_(d){return this.aVL(d,A.bA)},
nF(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tn:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bH,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j2,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j2,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aH(r,B.dh(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hU,r,r,r,A.Ef,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ac)},
adW(d,e,f){return this.nF(d,null,e,f)},
auJ(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b2.j(0.28):A.c.j(0.05),t=g?A.ex:A.bH,s=x.p
v=B.a([B.dh(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hU,w,e,w,new B.N(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aH(w,new B.a4(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ac)},
aVP(d,e,f,g,h,i){return this.auJ(d,e,f,g,h,5,i)},
jO(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eKu,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aH(u,D.dV_,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eGF(this,h,i),u,u,u,u,u,u,!1,A.ac))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aLG,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.WO,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.at9(w).cBB(A.b2,A.bH,A.b2.j(0.2),A.c,D.eul,4)
return new B.C(A.wI,B.v(B.a([s,B.a8m(B.kP(u,u,u,g,f,new C.eGG(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
afW(d,e,f,g,h,i){return this.jO(d,e,f,g,h,null,i)},
agl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.b_(u)
r=d==u
q=r?A.c:A.b9
p=new B.az(q,r?3:1,A.r,-1)
t=t?D.bwL:o
n.push(B.aH(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bY(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eGI(this,e,u),o,o,o,o,o,o,!1,A.ac))}return B.c6(A.bF,n,A.bx,10,10)},
bFT(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a0F
else{v=x.a8
w=B.B(new B.a3(D.a0F,new C.eFL(o),v),v.k("G.E"))}v=B.aL(n,A.U,!1,n,!0,A.q,n,B.aM(),o.d,n,n,n,n,n,2,o.aVM("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eFM(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a5w,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.U,!1,n,!0,A.q,n,B.aM(),o.e,n,n,n,n,n,2,o.aVM("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eFN(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.dj,!0,A.a5,n,A.am,n,n,n,n)
t=o.x9("DESIGNS",A.t9)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cDe[q]
r.push(new B.C(A.jm,o.adW(p,o.x===p,new C.eFO(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.ci(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aX),A.aa,new B.a4(n,118,B.hK(n,new C.eFP(o,w),w.length,n,n,A.aX,new C.eFQ(),!1),n),A.P,o.aVL(B.v(B.a([B.iA(A.b2,n,n,A.ah,!0,new C.eFR(o),n,D.f2Z,n,D.f_A,o.k3),B.iA(A.b2,n,n,A.ah,!0,new C.eFS(o),n,n,n,D.eXW,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aei)],s),A.F,n,A.e,A.j,0,A.p)},
cwg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.ayh()
if(a7.length===0)return a5.v_(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.HV,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ae('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ao(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.B(u,B.a2(u).k("cn.E"))
A.d.fn(m)
l=m.length!==0&&A.d.e2(m,new C.eH8(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eHf(a5)
j=new C.eHh()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.HV,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aZ(11,11)
f=u.t(0,h)?A.b2.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ex:A.bH
d=new B.az(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ao(w,a0,a0+e[0].length)
a0=B.ae("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aH(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bY(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.L_,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eH9(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ac))}o=a5.v_(B.c6(A.bF,o,A.ra,6,6))
i=B.a([a5.nF("All words",K.ain,!1,new C.eHa(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adW("Sentence "+a3,!1,new C.eHb(a5,a7,v,a2)))
a2=a3}}i.push(a5.adW("Clear picks",!1,new C.eHc(a5)))
i=B.c6(A.bF,i,A.bx,8,8)
g=a5.x9("SIZE OF THE PICKED WORDS",D.ahP)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d4j[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eHd(e,k)
f.push(a5.adW(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c6(A.bF,f,A.bx,8,8),A.S,a5.nF("Make every word normal",A.l6,!1,new C.eHe(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
crC(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bpv,B.d(A.d.kF(D.asY,new C.eGS(q)).b,p,p,p,p,p,p,D.eLX,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cl(new C.eGT(q)),l=q.x9("HIGHLIGHT BEHIND THE WORDS",A.Yy),k=q.p1?-1:q.k4
k=q.agl(k,new C.eGU(q),D.cN3)
w=q.p1
v=w?A.c:A.b9
n=B.a([n,A.S,m,l,B.c6(A.bF,B.a([k,B.aH(p,B.p(p,D.bzI,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.eG2,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eGX(q),p,p,p,p,p,p,!1,A.ac)],o),A.ra,10,10),A.aq,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.HV,p,p,p)],o)
if(q.gaRP()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.afW("Colour",l,0,360,new C.eGY(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.afW("Shade",k,0.15,0.9,new C.eGZ(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jO("Strength",l,0.15,1,new C.eH_(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.S,q.v_(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.x9("LOOK",A.xv))
m=B.a([q.nF("Bold",I.ahM,q.fy,new C.eH0(q)),q.nF("Italic",I.ahN,q.go,new C.eH1(q))],o)
for(u=0;u<3;++u){l={}
k=D.cEk[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tn:p
w=w?p:A.c.j(0.07)
s=new B.aZ(14,14)
r=new B.az(q.id===l.a?A.K:A.bH,1,A.r,-1)
m.push(B.aH(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bY(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eH2(l,q),p,p,p,p,p,p,!1,A.ac))}n.push(B.c6(A.bF,m,A.ra,8,8))
n.push(q.x9("COLOUR",A.nz))
n.push(q.agl(q.fx,new C.eH3(q),D.cXl))
n.push(A.aq)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.HV,p,p,p))
n.push(q.x9("SIZE AND PLACE",A.F8))
m=q.fr
m=q.jO("Text size",m,0.5,1.6,new C.eGV(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.v_(B.v(B.a([m,q.jO("Up / down",l,0.12,0.5,new C.eGW(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cbq(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b2.j(0.6),A.r,1.6)
u=B.a([A.b2.j(0.18),A.by.j(0.12)],x.O)
return B.aH(p,B.p(p,B.v(B.a([B.p(p,D.bF0,A.f,p,p,D.aVC,p,62,p,p,p,p,p,62),A.ay,D.f0I,A.aq,D.f5_],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.rz,p,v,w,p,new B.a5(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.blt,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaVO(),p,p,p,p,p,p,!1,A.ac)}w=x.p
v=B.A(B.a([B.bu(B.m(12),new B.a4(46,62,B.fI(o,A.A,120,p,A.cn,A.bQ,!1,p,!1,p,p),p),A.ao),A.be,B.D(B.v(B.a([D.f0i,A.P,B.c6(A.bF,B.a([q.nF("Change",A.kI,!1,q.gaVO()),q.nF("Remove",A.e8,!1,new C.eGw(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cU3[t]
u.push(q.nF(s.b,s.a,q.at===t,new C.eGx(q,t)))}u=B.c6(A.bF,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bW_(o)
break A}if(1===r){s=q.bV4()
break A}if(2===r){s=q.bBM()
break A}if(3===r){s=q.bHV()
break A}s=q.bDS()
break A}return B.v(B.a([v,A.aa,u,A.ay,s,A.S,new B.bI(A.a3,p,p,q.nF("Reset the whole picture",A.l6,!1,new C.eGy(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bW_(d){var w=this,v=x.p
return B.v(B.a([B.c6(A.bF,B.a([w.nF("Auto enhance",E.Yc,!1,new C.eGo(w)),w.nF("Make words easy to read",A.ol,!1,new C.eGp(w))],v),A.bx,8,8),A.ay,B.cl(new C.eGq(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bV4(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jO("Exposure",n,-1.5,1.5,new C.eG2(o),0,A.k.a9(n,1))
w=o.RG
w=o.jO("Brightness",w,-0.5,0.5,new C.eG3(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jO("Contrast",v,0.4,2,new C.eG4(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jO("Fade",u,0,1,new C.eG5(o),0,""+A.k.U(u*100))
t=o.aC
t=o.jO("Spotlight",t,0,1,new C.eG6(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jO("Darken",s,0,0.85,new C.eG7(o),0,""+A.k.U(s*100))
r=o.b4
r=o.jO("Vignette",r,0,0.9,new C.eG8(o),0,""+A.k.U(r*100))
q=o.aE
q=o.jO("Shade behind words",q,0,0.85,new C.eG9(o),0,""+A.k.U(q*100))
p=o.aN
return o.v_(B.v(B.a([n,w,v,u,t,s,r,q,o.jO("Shade top & bottom",p,0,0.85,new C.eGa(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bBM(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jO("Colour strength",q,0,2.2,new C.eFo(s),1,""+A.k.U(q*100))
w=s.to
w=s.jO("Warmth",w,-1,1,new C.eFp(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jO("Tint",v,-1,1,new C.eFq(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.v_(B.v(B.a([q,w,v,s.jO("Shift colours",u,-180,180,new C.eFr(s),0,""+A.k.U(u)+"\xb0"),new B.bI(A.a3,r,r,s.nF("Negative",D.buL,s.y1,new C.eFs(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.x9("COLOUR WASH",A.LY)
w=s.b2
q=B.a([null],x.Z)
A.d.v(q,D.arI)
t=B.a([u,v,s.agl(w,new C.eFt(s),q),A.P],t)
if(s.b2!=null){q=s.aZ
t.push(s.v_(s.afW("Wash strength",q,0,0.9,new C.eFu(s),""+A.k.U(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bHV(){var w,v,u,t,s,r=this,q=r.y2
q=r.jO("Blur",q,0,24,new C.eFX(r),0,A.o.u(A.k.U(q)))
w=r.bg
w=r.jO("Soft focus",w,0,1,new C.eFY(r),0,""+A.k.U(w*100))
v=r.aw
u=x.p
v=r.v_(B.v(B.a([q,w,r.jO("Film grain",v,0,1,new C.eFZ(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.x9("LIGHT LEAK",H.ahK)
q=r.b8
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d9(D.arI,0,B.dI(8,"count",s),s))
u=B.a([v,w,r.agl(q,new C.eG_(r),t),A.P],u)
if(r.b8!=null){q=r.bI
u.push(r.v_(r.afW("Leak strength",q,0,1,new C.eG0(r),""+A.k.U(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bDS(){var w,v,u,t,s=this,r=s.aQ
r=s.jO("Zoom",r,1,3,new C.eFy(s),1,""+A.k.U(r*100)+"%")
w=s.bh
w=s.jO("Left / right",w,-1,1,new C.eFz(s),0,""+A.k.U(w*100))
v=s.bQ
v=s.jO("Up / down",v,-1,1,new C.eFA(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.v_(B.v(B.a([r,w,v,s.jO("Turn",u,-180,180,new C.eFB(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c6(A.bF,B.a([s.nF("Turn 90\xb0",D.bwl,!1,new C.eFC(s)),s.nF("Flip sideways",A.EY,s.cQ,new C.eFD(s)),s.nF("Flip upside down",A.EY,s.cT,new C.eFE(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bYC(){var w=null,v=B.m(22),u=B.I(A.bH,A.r,1)
return B.p(w,B.v(B.a([D.eux,A.S,D.f22,A.ay,B.aH(w,B.p(A.A,D.euJ,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tn,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eGr(this),w,w,w,w,w,w,!1,A.ac)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.rz,w,u,v,w,w,A.n),w,w,w,w,A.c2,w,w,w)},
bVS(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eGj(p),m=x.p,l=B.A(B.a([D.bpB,p.nF("Reset",A.l6,!1,new C.eGf(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.HV,o,o,o),j=p.x9("SHAPE",A.aiQ),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.B7[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aVP(n.$2(t,p.cy),62,u.b,s===t,new C.eGg(v,p),62))}}i=B.c6(A.bF,i,A.bx,8,8)
v=p.x9("RING",A.t4)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.B2[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aVP(n.$2(p.cx,t),62,r.b,q===t,new C.eGh(s,p),62))}u=B.c6(A.bF,u,A.bx,8,8)
s=p.CW
return B.v(B.a([l,A.av,k,j,i,v,u,A.aa,p.v_(p.jO("Size",s,0.12,0.4,new C.eGi(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aYG(d){return new B.a4(null,d,new B.fE(0.5625,B.cl(new C.eGC(this)),null),null)},
cqU(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bH,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tn:q
t=new B.aZ(14,14)
s=D.cW0[w]
r=v?A.c:A.aA
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bH(1,A.bo,B.aH(A.c5,B.dh(q,B.v(B.a([r,A.d5,new B.pW(A.ec,A.A,A.f,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bh7,q,q,q,A.hD,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eGL(this,w),q,q,q,q,q,q,!1,A.ac),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bjf,A.m3,q,q,q)},
aMO(){var w,v,u=this,t=null,s=u.cqU(),r=u.as
A:{if(0===r){w=u.bFT()
break A}if(1===r){w=u.cwg()
break A}if(2===r){w=u.crC()
break A}if(3===r){w=u.cbq()
break A}if(4===r){w=u.bVS()
break A}w=u.bYC()
break A}v=x.p
return B.bu(A.rg,B.ef(B.v(B.a([s,B.D(B.cL(B.a([w],v),t,D.bkj,t,t,A.aj,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.UI,!0),A.ao)},
aJ3(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc20(),p=B.m(16)
q=B.D(B.aH(r,B.p(r,D.euS,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b9,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ac),1)
p=s.Q?r:s.gbHv()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.by.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.ezK)
else t.push(D.byP)
t.push(A.ab)
t.push(D.br7)
return B.p(r,B.A(B.a([q,A.aw,B.D(B.aH(r,B.p(r,B.A(t,A.m,r,A.b7,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tn,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ac),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aUL,r,r,r,r,G.ae6,r,r,r)},
aVN(){var w=null
return new B.C(T.WJ,B.A(B.a([B.aG(w,w,w,w,A.md,w,w,w,new C.eG1(this),w,w,w,w,w,w),D.fgn,A.b6,D.bHf],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cb(w,A.zQ,B.bq(!0,B.cl(new C.eHi(this)),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)}}
C.bcS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f5()
m.dU(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.V()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.ag()*w
o=m.ag()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c4(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.r0.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lR.prototype={}
C.yL.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nq.prototype={}
C.vo.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a6r.prototype={}
C.ap9.prototype={}
C.ZR.prototype={
S(){return new C.aFe(new B.ap(A.as,$.av()),B.kc(!0,null,!0,!0,null,null,!1),D.dk0,B.a([],x.s),B.eM([D.GO],x.Q))}}
C.aFe.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.f.q()
this.a1()},
Zw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Zw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().Bh(90,700,700,A.eE),$async$Zw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Zw)
case 8:p=e
if(r.c!=null)r.m(new C.eNi(r,p,q))
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
return B.i($async$Zw,v)},
Zz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Zz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aEq(78,n,1100,1100),$async$Zz)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ab(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$Zz)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cd(p,"data:"+k+";base64,"+A.cS.gcs().aG(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eNj(r,p))
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
return B.i($async$Zz,v)},
b_D(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fI(A.cA.aG(A.d.gak(d.split(","))),A.A,u,u,A.cn,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bfp},
bVY(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cmp(C.fn0(w,this.b_D(d),f),g)},
aat(d,e,f,g,h){var w=null,v=new C.eNg(f,e),u=new C.eNh(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bH:A.b2.j(0.6),A.r,1)
if(p)p=new B.a4(34,30,new B.am(A.X,w,A.a9,A.f,B.a([B.au(B.W(f?A.AP:A.LL,A.bZ,w,w,w,26),w,w,w),D.e_r],x.p),w),w)
else p=this.bVY(g,v.$1(h),u.$1(h),34)
return B.aE(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.au(p,w,w,w),1),D.byw],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.m4,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNf(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ad)},
aTs(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bu(B.m(8),B.fI(A.cA.aG(A.d.gak(h.split(","))),A.A,p,p,A.cn,A.bQ,!1,30,!1,p,30),A.ao)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bH:A.bl.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.ew,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.a5B,p,p,p),1)],x.p)
if(f!=null)n.push(B.aH(p,D.Zu,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ac))
return B.aE(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lv,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ad)},
a6G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fqs(),$async$a6G)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eMZ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a7(n)
if(r.c!=null)r.m(new C.eN_(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6G,v)},
ace(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ace=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eN1(r))
w=1
break}if(r.x==null){m=B.ae("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eN2(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eN3(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cd(p,h)}w=7
return B.b(C.flJ(q,r.cx,j,new C.aZL(r.z,r.Q,r.as,r.at),new C.eN4(r),i,m,p,k),$async$ace)
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
if(p!=null)B.a6(p,!1).M(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a7(e)
if(r.c!=null)r.m(new C.eN5(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ace,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eC,g).w
g=B.aI(d,A.bR,g).w
w=B.au(B.p(h,h,A.f,h,h,new B.o(A.b9,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aH(h,B.p(h,D.bBF,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bl.j(0.5),A.J,24)],v),D.bKq,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eNw(i),h,h,h,h,h,h,!1,A.ac),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,D.Zu,h,h,h,i.ax?h:new C.eNx(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbwW()
v=B.a([new B.ac(0,A.G,A.b2.j(0.45),A.J,10)],v)
s.push(B.hl(B.aE(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.uQ:A.ht,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.v5,A.a6),h,40,h,h,h,h,h,40),A.cJ,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cJ,h,h,A.ad),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.U,!1,h,!0,A.q,h,B.aM(),i.d,h,h,h,h,h,2,B.bo(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aSi),h,h,h,h,h,h,h,h,V.HJ,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jm,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ag,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aM1,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eNy(i)
s=i.aTs(A.l8,q,r,i.gcbR(),s)
r=i.z
r=B.D(i.aat(new C.eNA(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.aq,B.A(B.a([r,A.bp,B.D(i.aat(new C.eNB(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eNC(i)
s=i.aTs(A.uN,r,p,i.gcbZ(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.D(i.aat(new C.eND(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.ay,D.f6b,A.av,D.f8T,A.bu,u,A.P,D.f7p,A.ay,v,A.bu,B.A(B.a([q,A.aw,B.D(B.v(B.a([s,A.aq,B.A(B.a([p,A.bp,B.D(i.aat(new C.eNE(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.aq,D.faw],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.b8M,A.r,1)
w=C.af8(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bCK,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eRi,h,h,h),B.aK(!1,h,!0,D.dVf,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eNF(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b2A,h,u,v,h,h,A.n),h,h,h,h,D.biV,h,h,h),h)],t))}o.push(A.bu)
o.push(D.eYD)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cP3[m]
v=i.ch===l?A.b2:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bH,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bH(1,A.bo,new B.C(A.jn,B.aH(h,B.dh(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bY(k,k,k,k),h,h,h,A.a6),A.eL,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eNG(i,l),h,h,h,h,h,h,!1,A.ac),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.feG)
o.push(A.P)
o.push(B.cl(new C.eNH(i)))
o.push(A.bu)
o.push(D.f4r)
o.push(A.P)
w=B.a([i.b2k("auto","Let AI choose",A.dS,A.Or)],t)
for(v=x.O,m=0;m<11;++m){j=D.va[m]
u=j.d
w.push(i.b2k(j.a,j.b,j.c,B.a([B.b_(A.d.gK(u).a),B.b_(A.d.gK(u).b)],v)))}o.push(B.c6(A.bF,w,A.bx,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bl.j(0.5):A.bH,A.r,1)
o.push(B.p(h,B.iA(h,A.bl,h,h,h,new C.eNz(i),D.bxY,D.fdX,h,D.f_M,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aLj,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc24()
v=B.fk(h,h,A.b2,A.b2.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Z),h,h,h,h,h)
u=i.ax
t=u?D.ezA:A.Fo
o.push(new B.a4(h,54,B.lj(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oH,h,h,h),w,v),h))
return new B.C(new B.N(0,0,0,f.f.d),B.p(h,B.bq(!0,B.ci(B.v(o,A.ai,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.uF,h,h,A.aj),!0,!1,A.ah,!0,!1),A.f,h,new B.aX(0,680,0,g.a.b*0.92),D.a8h,h,h,h,h,h,h,h,h),h)},
bIZ(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eN6(this,p,d)
if(d===D.BJ)return new C.aBP(p,o,q)
w=B.m(16)
v=p?E.v5:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bH,A.r,1)
s=B.W(p?A.eh:C.hr2(d),A.c,q,q,q,20)
r=C.hr3(d)
return B.aH(q,B.dh(q,B.v(B.a([s,A.av,B.f1(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.ec)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hU,q,64,q,A.hr,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ac)},
b2k(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.af:A.bH
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a5(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aH(v,B.dh(v,B.A(B.a([w,L.HD,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eL,v,v,v,L.afl,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eNl(this,d),v,v,v,v,v,v,!1,A.ac)}}
C.ZQ.prototype={
S(){return new C.aFd(new B.ap(A.as,$.av()))}}
C.aFd.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a1()},
acf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$acf=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ab(a0)<3){r.m(new C.eMS(r))
w=1
break}B.eL()
r.m(new C.eMT(r))
t=4
q=C.hS4(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ae("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hRP(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eMU(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ae("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fKS()
f=$.BN.h(0,k.a)
o=f==null||J.ck(f)?null:J.fm(f)
if(o==null){r.m(new C.eMV(r))
w=1
break}n=C.hRN(o,r.a.c)
C.hRJ(r.a.c.a)
$.fK9=!0
k=r.c
if(k!=null)B.a6(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fNA(j)
h=C.fNB(r.a.c)
e=C.fNC(r.a.c)
w=7
return B.b(C.bzh(k,r.a.c.a,j,h,new C.eMW(r),i,e,a0),$async$acf)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a7(a1)
if(r.c!=null)r.m(new C.eMX(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eC,i).w
i=B.aI(d,A.bR,i).w
w=B.au(B.p(j,j,A.f,j,j,new B.o(A.b9,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.aj6,A.f,j,j,D.aUs,j,34,j,j,j,j,j,34),A.aw,D.bq9],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,V.aLK,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.U,!0,j,!0,A.q,j,B.aM(),k.d,j,j,j,j,j,2,B.bo(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),An.a7M),j,j,j,j,j,j,j,j,V.HJ,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aM1,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cLC[q]
o=A.c.j(0.06)
n=k.e?j:new C.eMY(k,p)
r.push(B.mr(j,o,new B.x(p,j,At.RB,j,j,j,j,j,j,j,j,j),j,n,j,j,P.w_,j))}w=B.a([w,A.ay,u,A.aq,t,A.ay,s,A.S,B.c6(A.bF,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.aa,B.d(u,j,j,j,j,j,j,D.aLj,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gc25()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bl.j(0.5),A.ft.j(0.5)],x.O):D.ckn
o=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dVb:D.bCj
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aE(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ev(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.iU,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a5(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ad))
return new B.C(new B.N(0,0,0,h.f.d),B.p(j,B.bq(!0,B.ci(B.v(w,A.ai,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.uF,j,j,A.aj),!0,!1,A.ah,!0,!1),A.f,j,new B.aX(0,680,0,i.a.b*0.85),D.a8h,j,j,j,j,j,j,j,j),j)}}
C.aZL.prototype={}
C.aBP.prototype={
S(){return new C.bhs(null,null)}}
C.bhs.prototype={
gauK(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pc,null,1,null,v)
w.cE(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gauK().q()
this.br0()},
B(d){var w=null,v=this.a.d
return B.aH(w,B.c5(this.gauK(),new C.e59(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ac)}}
C.bf3.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cR2[s]
p=q.a*v
q=q.b*u
$.V()
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=D.wx.j(0.25+r*0.6).gp(0)
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
aq(d){return d.b!==this.b}}
C.apJ.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Ye.prototype={
S(){return new C.azh()}}
C.azh.prototype={
gagi(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.afl(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzu(){var w=this.e
return w===$?this.e=C.fNA(this.a.c).t(0,D.BJ):w},
a6t(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6t=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.ddU(s))
u=3
r=A.d.kF(D.va,new C.ddV(s))
q=B.d8(C.fNA(s.a.c),x.Q)
l=q
J.hG(l,D.BJ)
p=l
if(s.gzu())J.cd(p,D.BJ)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzu()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fNB(i.c)
g=C.fNC(s.a.c)
w=6
return B.b(C.bzh(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a6t)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.afl(q,s.gagi())
f=q==null?null:q.b
n=f==null?s.gagi():f
if(!J.y(n,r.a)&&!s.gzu())throw B.S("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a7(d)
if(s.c!=null)s.m(new C.ddW(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a6t,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bH:A.aK,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.ddZ(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.W(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.va[w]
u=o.gagi()
t=o.f?n:new C.de_(o,v)
f.push(new C.bpM(v,u===v.a,t,n))}f=B.lN(1.25,f,3,10,10,n,A.dO,!0)
u=B.m(18)
t=o.gzu()?D.bN3:n
if(o.gzu())s=n
else s=m?A.bj:A.bN
r=B.W(A.dS,o.gzu()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzu()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzu()?A.af:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzu()
f=B.a([f,A.ay,B.p(n,B.A(B.a([r,A.aw,q,B.fI3(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.de0(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ae9,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.eRA,n,n,n)],g))
f=B.ci(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.KP,n,n,A.aj)
u=o.f?n:o.gbvV()
t=B.bk(A.K,n,n,n,n,n,A.ah,n,new B.b7(B.m(16),A.Z),n,n,n)
s=B.m(16)
return B.bq(!0,B.p(n,B.v(B.a([new B.C(D.blX,e,n),new B.dl(1,A.ch,f,n),new B.C(A.Em,new B.a4(1/0,50,B.bM(B.ev(B.au(o.f?A.r1:D.f6E,n,n,n),n,new B.o(n,n,n,s,n,D.bLF,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rT,n,n,n,n),!0,!1,A.ah,!0,!0)}}
C.bpM.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.b_(s),B.b_(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b_(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kV,w,w,B.W(v.c,A.af,w,w,w,18),w),new B.bI(A.lk,w,w,B.d(v.b,w,w,w,w,w,w,D.eRy,w,w,w),w)],x.p)
if(q)v.push(D.aQp)
return B.aH(w,B.dh(w,new B.am(A.X,w,A.a9,A.q,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a5(A.ax,A.aC,A.x,r,w,w),A.n),A.eL,w,w,w,A.cm,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ac)}}
C.e56.prototype={
aC3(d,e,f){return e+"@"+A.a.aU(A.o.fI(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vU(d,e){return this.aC3(0,e,null)}}
C.aJM.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aZH.prototype={
B(d){var w,v,u=null,t=C.fMq(this.c)
if(t==null)w=D.beb
else{w=B.aI(d,u,x.w).w.cB3(D.biq,D.eyP)
v=this.d
w=B.u0(B.e3(B.am7(!1,t,!1,v,!1,390),!v,u),w)}return B.f1(A.A,new B.a4(416,870,new C.bj4(w,u),u),A.f,A.ds)}}
C.bj4.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d0P[w]
u=new B.aZ(3,3)
s.push(new B.cI(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.al_,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d1W[w]
u=new B.aZ(3,3)
s.push(new B.cI(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.al_,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.bW(t,new B.o(t,t,t,B.m(64),D.cC1,D.bK8,A.n),A.bc),0,0,0))
s.push(B.bZ(3,B.bW(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bc),3,3,3))
s.push(B.bZ(13,B.bu(B.m(51),B.ef(this.c,A.w,!0),A.ao),13,13,13))
u=B.m(20)
s.push(B.an(t,B.au(B.p(D.aQA,B.p(t,t,A.f,t,t,D.aUJ,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e3(B.bu(B.m(51),D.bfv,A.ao),!0,t),13,13,13))
s.push(B.an(22,B.e3(B.au(B.p(t,t,A.f,t,t,new B.o(A.af,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.X,t,A.a9,A.f,s,t)}}
C.l0.prototype={
oX(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.ek(A.L,!1,e.l(),A.aB,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bd,j,2,"Your Presentation Title",0,0,"",D.mk,D.cP,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.ek(A.L,!1,v.l(),A.aB,"",k,20,A.bi,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.bd,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dc,D.cP,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.r1(i,l,0,0,B.a([f,w,C.ek(A.bg,!1,4279310375,A.aB,"",t.j(0.8).l(),24,A.bi,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fm,t.l(),3,"",0,0,"",D.cf,D.eY,0.3,0.35,0.72)],s),C.cB(),D.mj,"","","Welcome",D.dc)
u=C.cB()
u=C.ek(A.bg,!1,e.l(),A.aB,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bd,j,2,"Agenda",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
w=C.cB()
w=C.r1(i,l,0,0,B.a([u,C.ek(A.bg,!0,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.bd,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tB,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mj,"","","Agenda",D.dc)
u=C.cB()
u=C.ek(A.bg,!1,e.l(),A.aB,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bd,j,2,"Main Idea",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
f=C.cB()
f=C.r1(i,l,0,0,B.a([u,C.ek(A.bg,!0,v.l(),A.aB,"",k,21,A.bi,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.bd,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cf,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mj,"","","Key Point 1",D.dc)
u=C.cB()
u=C.ek(A.bg,!1,e.l(),A.aB,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bd,j,2,"Compare & Contrast",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
r=C.cB()
r=C.ek(A.bg,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.bd,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cf,D.cP,0.4,0.08,0.24)
q=C.cB()
q=C.r1(i,l,0,0,B.a([u,r,C.ek(A.bg,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.bd,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cf,D.cP,0.4,0.52,0.24)],s),C.cB(),D.mj,"","","Key Point 2",D.dc)
r=C.cB()
r=C.ek(A.L,!1,e.l(),A.aB,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bd,j,2,h,0,0,"",D.dc,D.cP,0.8,0.1,0.32)
e=C.cB()
p=C.AO(l,l,l,l,D.BF,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.r1(i,l,0,0,B.a([r,C.ek(A.L,!1,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.bd,j,2,"Questions?",0,0,"",D.cf,D.cP,0.7,0.15,0.58)],s),C.cB(),D.mj,"","",h,D.dc)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.DI.prototype={
bw(d){return this.e.$1(d)}}
C.em.prototype={}
C.iT.prototype={}
C.Dz.prototype={
gaHC(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.af8(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1N(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Dz(v,u,t,d==null?w.d:d)},
EG(d){return this.a1N(null,d,null,null)},
aAQ(d){return this.a1N(null,null,null,d)},
cB1(d,e){return this.a1N(d,e,null,null)},
b7o(d){return this.a1N(d,null,null,null)},
b7v(d){return this.a1N(null,null,d,null)}}
C.Mc.prototype={
S(){return new C.bgP(new B.eI(0,$.av()),null,null)}}
C.bgP.prototype={
Z(){var w,v=this
v.a0()
w=v.pW(new C.dOE(v))
v.e!==$&&B.aR()
v.e=w
if(v.a.e)w.ka(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.R$=$.av()
w.O$=0
this.bqt()},
B(d){var w=C.af8(this.a.c.a)
if(w==null)w=A.d.gK(D.FJ)
return B.cl(new C.dOD(this,w,C.h1f(this.a.c.d)))}}
C.bol.prototype={
B(d){return B.nv(A.Tf,this.e,new C.eM5(this,A.k.G(this.d*0.35,1.6)-0.3))}}
C.bbY.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aPk(d,e,v)
break
case"confetti":w.bCh(d,e,v)
break
case"crown":w.bDT(d,e,v)
break
case"aurora":w.bx_(d,e,v)
break
case"champagne":w.bA8(d,e,v)
break
case"diamonds":w.bG1(d,e,v)
break
case"starburst":w.coI(d,e,v)
break
case"balloons":w.bxd(d,e,v)
break
case"galaxy":w.bKF(d,e,v)
break
case"redcarpet":w.cfY(d,e,v)
break
case"coins":w.bBE(d,e,v)
break
case"lanterns":w.bUD(d,e,v)
break
case"hearts":w.bSk(d,e,v)
break
case"petals":w.cbi(d,e,v)
break
case"butterflies":w.bza(d,e,v)
break
case"neon":w.bYm(d,e,v)
break
case"disco":w.bGc(d,e,v)
break
case"sunrise":w.cqb(d,e,v)
break
case"pearls":w.cam(d,e,v)
break
case"snow":w.coq(d,e,v)
break
case"laurel":w.bUJ(d,e,v)
break
case"ribbons":w.cis(d,e,v)
break
case"kente":w.bUs(d,e,v)
break
case"trophy":w.ctL(d,e,v)
break
case"shooting":w.cmi(d,e,v)
break
case"bokeh":w.bxu(d,e,v)
break
case"orbits":w.c84(d,e,v)
break
case"flowers":w.bJY(d,e,v)
break
case"music":w.bY7(d,e,v)
break
case"mandala":w.bWz(d,e,v)
break
case"sparklers":w.coy(d,e,v)
break
case"city":w.bAY(d,e,v)
break}},
qU(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.V()
v=B.L()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.n9
u=new B.aP(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cR(w,t,w+f,t))
u.E(new B.cR(w,t,w,t+f))
u.E(new B.cR(w,t,w-f,t))
u.E(new B.cR(w,t,w,s))
u.E(new B.bE())
d.aM(u,v)
d.ae(e,f*0.18,v)},
lk(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cS(q,v)*2.5)+C.cS(q,u)*6.28)+1)/2
this.qU(d,new B.u(C.cS(q,t)*o,C.cS(q,s)*n),m*(0.006+0.014*C.cS(q,r))*(0.5+p),h,p*p)}},
aPk(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lk(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aR],w),B.a([A.ig,A.by],w),B.a([A.er,A.aY],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bv(k/2.8)
i=A.k.G(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cS(h,1))
f=g+c0*(C.cS(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cS(h,3))
d=v[Math.abs(A.o.G(h,4))]
if(i<0.22){a0=B.l6(new B.u(g,c1),new B.u(f,e),A.cp.au(0,i/0.22))
a0.toString
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.sar(new B.a5(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.r3(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.l6(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cp.au(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cS(h,4)
if(a5<0.15){a4=1-a5/0.15
$.V()
a8=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hp(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cS(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cS(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.V()
b9=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.n9
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cS(h,b1+120)>0.5)this.qU(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bCh(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.G(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.V(),a0=B.L()
a0.sar(new B.a5(A.ax,A.aC,A.x,D.cX2,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aW(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.G(a3*(h*(0.08+0.12*C.cS(u,1)))+C.cS(u,2)*w,w)
s=C.cS(u,3)
r=Math.sin(a3*(0.8+C.cS(u,4))+u)
q=h*(0.012+0.012*C.cS(u,5))
p=Math.cos(a3*(2+3*C.cS(u,6))+u)
o=D.NV[A.o.D(A.k.bv(C.cS(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cS(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.G(u,5)===0){t=B.a([],v)
m=new B.aP(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ao(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bw(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.V()
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=B.b_(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbH().a.snapshot()):t).a,k)
k.delete()}else{t=B.cr(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c4(t),k)
k.delete()}f.restore()}this.lk(a1,a2,a3,25,A.bJ,30)},
bDT(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.V()
n=B.a([],r)
m=new B.aP(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b4b],v),a4,a4).av(0,B.bT(w,u)))
l=o.H()
o=m.gbH().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aP($.V().r,A.ap,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.E(new B.ao(a5,s))
o=a6+j*0.6
i.E(new B.ao(a5+k*0.22,o))
i.E(new B.ao(a5+k*0.5,a6))
i.E(new B.ao(a5+k*0.78,o))
o=a5+k
i.E(new B.ao(o,s))
i.E(new B.ao(o,v))
i.E(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sar(new B.a5(A.b1,A.b3,A.x,D.cVW,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aM(i,n)
for(v=[D.e82,D.e2n,D.egP],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=A.af.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.hQ.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wv(i),u=B.a([],x.X),o=new B.v2(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jN(y.M));--f
o.j3()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aP(n,v.b,a4,new B.cJ([new B.Gk(o,f),0,d*h,!0]),B.a([],r))
f=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.b=A.ae
f.c=g
f.e=A.fw
f.r=A.bJ.gp(0)
l=f.H()
f=d.gbH().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.G(b0*0.5,1)
this.qU(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lk(a8,a9,b0,45,A.bJ,40)},
bx_(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lk(a8,a9,b0,60,A.c,50)
w=[D.eqy,D.eqg,D.eqb,D.err]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.V()
i=B.a([],p)
h=new B.aP(n.r,A.ap,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bw(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ao(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bw(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.n9
n.z=new B.hp(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbH().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.n9
n.z=new B.hp(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbH().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.G(t*(0.05+0.06*C.cS(a4,1))+C.cS(a4,2)*a3,a3)
r=C.cS(a4,3)
q=Math.sin(b0+a4)
p=C.cS(a4,4)
$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.ww.j(0.4+0.5*C.cS(a4,5)).gp(0)
n.a=A.n9
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bA8(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.V(),a0=B.L()
a0.sar(new B.bS(A.A,0.5,A.x,l,0,B.a([A.hz.j(0.25+0.1*h),D.UQ],x.O),l,l).av(0,B.bT(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aP(d.r,A.ap,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ao(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bw(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.b=A.ae
a0.c=h
a0.r=D.NV[A.o.G(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbH().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.G(a3*(i*(0.07+0.12*C.cS(w,1)))+C.cS(w,2)*o,o)
r=k*(0.1+0.8*C.cS(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cS(w,4))
if(n<f){this.qU(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.zB.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bG1(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lk(a9,b0,b1,30,A.kX,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cS(p,1))
n=a7+o*4
m=A.k.G(t*(0.04+0.06*C.cS(p,2))+C.cS(p,3)*n,n)-o*2
l=C.cS(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bA(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.V()
g=B.a([],q)
f=new B.aP(h.r,A.ap,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b5(e,i))
h*=0.28
j*=0.6
g.push(new B.ao(h,j))
d=o*0.28
g.push(new B.ao(d,j))
a0=o*0.5
g.push(new B.ao(a0,i))
a1=k*0.6
g.push(new B.ao(0,a1))
g.push(new B.bE())
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.sar(new B.a5(A.ax,A.aC,A.x,D.cS0,a5,a5).av(0,B.cr(A.J,k*1.2,o)))
a2=g.H()
g=f.gbH().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
a2.delete()
a3=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
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
if(a4>0.85)this.qU(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
coI(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.V()
o=B.a([],v)
n=new B.aP(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbH().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.G(a0+l*0.6,1.8)/1.8
$.V()
u=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bv(a0/2.4)
k=A.k.G(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cS(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.beS.au(0,k)*(0.5+0.5*C.cS(t,v)))
this.qU(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cS(t,3)),D.NV[A.o.D(A.k.bv(C.cS(t,4)*5),0,4)],u)}},
bxd(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cS(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.G(q*(0.05+0.05*C.cS(o,2))+C.cS(o,3)*m,m)
j=C.cS(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.as5[A.o.G(o,6)]
h=$.V()
g=B.a([],s)
f=new B.aP(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ao(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bw(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbH().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cr(new B.u(j,k),n*2.3,l)
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d=B.ar(i,A.w,0.35)
d.toString
l.sar(new B.bS(D.aQD,0.9,A.x,a3,0,B.a([A.c,i,d],t),O.arX,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c4(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aP(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ao(j+d,h))
l.push(new B.ao(j,k+n))
l.push(new B.bE())
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbH().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.G(q*(0.1+0.1*C.cS(o,11))+C.cS(o,12)*m,m)
r=C.cS(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cr(A.J,t,v)
$.V()
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=D.as5[A.o.G(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c4(s),a1)
a1.delete()
u.restore()}},
bKF(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lk(b1,b2,b3,50,A.c,70)
for(w=[D.eqG,D.eqm,D.eqs],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.V()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.sar(new B.bS(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bT(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.G(i,3)
g=C.cS(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cS(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bJ,A.ex,g)
k.toString
d=C.cS(i,3)
$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.r=k.j(0.5+0.5*C.cS(i,4)).gp(0)
a0.a=A.n9
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.V()
a9=B.L()
a9.sar(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.zB.j(0.55),D.abV],u),a4,a4).av(0,B.bT(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.G(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bv(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cS(a2,9)),a6*0.1*C.cS(a2,8))
a5=B.l6(a3,a3.af(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l6(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sar(new B.a5(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.r3(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bz(a6,a5,a8)}},
cfY(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.V()
n=B.a([],s)
m=new B.aP(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(new B.bS(A.A,0.5,A.x,b5,0,B.a([A.zB.j(0.28),D.abV],w),b5,b5).av(0,B.bT(new B.u(q,u),t)))
o.a=A.n9
l=o.H()
q=m.gbH().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eK:A.f0)
a9=$.V()
b0=B.a([],s)
m=new B.aP(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ao(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cR(a9,k,a5?g:a1,b7))
b0.push(new B.ao(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a9.sar(new B.a5(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbH().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
b1.r=A.hz.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aP($.V().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ao(b6*0.58,w))
b2.E(new B.ao(b6*0.8,b7))
b2.E(new B.ao(b6*0.2,b7))
b2.E(new B.bE())
v=B.L()
v.sar(D.bLz.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aM(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.G(b7*(0.05+0.07*C.cS(r,1))+C.cS(r,2)*b3,b3)
u=C.cS(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qU(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cS(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bBE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cS(t,1))
r=h+s*4
q=s*2
p=A.k.G(u*(0.12+0.12*C.cS(t,2))+C.cS(t,3)*r,r)-q
o=C.cS(t,4)*i
n=Math.cos(f*(2+3*C.cS(t,5))+t)
m=Math.abs(n)
l=B.cr(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.V()
q=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.sar(new B.a5(A.ax,A.aC,A.x,n>0?D.d4O:D.cq_,null,null).av(0,l))
k=q.H()
v.drawOval(B.c4(l),k)
k.delete()
q=-(s*0.22)
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bcj.gp(0)
k=j.H()
v.drawOval(B.c4(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qU(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lk(d,e,f,30,A.bJ,110)},
bUD(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lk(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cS(p,1))
n=a1+o*4
m=a1+o*2-A.k.G(t*(0.03+0.04*C.cS(p,2))+C.cS(p,3)*n,n)
l=C.cS(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.V()
h=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.sar(new B.bS(A.A,0.5,A.x,d,0,B.a([H.ac2.j(0.45*k),D.aaY],u),d,d).av(0,B.bT(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aP(i.r,A.ap,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ao(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ao(l+i,h))
j.push(new B.ao(l-i,h))
j.push(new B.bE())
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i=B.ar(D.b4l,A.c,0.2*k)
i.toString
j.sar(new B.a5(A.b1,A.b3,A.x,B.a([D.b8r,i],u),d,d).av(0,B.cr(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbH().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bSk(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cS(p,1))
n=a1+o*4
m=A.k.G(s*(0.05+0.06*C.cS(p,2))+C.cS(p,3)*n,n)
l=C.cS(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bA(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.V()
l=B.a([],t)
i=new B.aP(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pf(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pf(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cJC[A.o.G(p,5)]
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l=B.ar(f,A.w,0.25)
l.toString
m.sar(new B.bS(A.rd,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a_C,d).av(0,B.bT(A.J,o*1.4)))
e=m.H()
m=i.gbH().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lk(a3,a4,a5,30,A.ig,130)},
cbi(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cS(q,1))
o=g+p*4
n=A.k.G(t*(0.05+0.06*C.cS(q,2))+C.cS(q,3)*o,o)
m=C.cS(q,4)
l=Math.sin(s+q*0.7)
J.bA(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cS(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.V()
m=B.a([],u)
k=new B.aP(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cR(p,l,0,p))
m.push(new B.cR(n,l,0,n))
m.push(new B.bE())
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
m=(q&1)===0?D.ckm:D.cTc
n.sar(new B.a5(A.a3,A.a7,A.x,m,i,i).av(0,B.bT(A.J,p)))
j=n.H()
n=k.gbH().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lk(d,e,a0,25,A.bJ,140)},
bza(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lk(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cS(r,1))
p=Math.sin(b2*(0.15+0.1*C.cS(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cS(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bA(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bA(v.save())
v.scale(a1*n,1)
a2=$.V()
a3=B.a([],u)
a4=new B.aP(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pf(f,e,l,d,h,0))
a3.push(new B.pf(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.sar(new B.a5(A.a3,A.a7,A.x,i?D.cSX:D.cVs,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbH().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.zJ.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbH().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=D.bbJ.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bYm(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.G(w+t/4,1)
r=f*(0.2+0.7*s)
$.V()
q=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=v
q.r=D.at7[t].j((1-s)*0.9).gp(0)
q.z=new B.hp(A.G,v)
p=r*0.3
p=B.by(B.cr(e,r,r*1.6),new B.aZ(p,p))
o=q.H()
u.drawRRect(B.et(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cS(m,1)*4)+m)))
k=D.at7[A.o.G(m,4)]
j=m*n+h
i=g-l
i=B.by(new B.a9(j,i,j+w,i+l),new B.aZ(v,v))
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=k.j(0.85).gp(0)
j.z=new B.hp(A.a7A,p)
o=j.H()
u.drawRRect(B.et(i),o)
o.delete()}},
bGc(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cS(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cS(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.nX,A.dy][A.o.G(p,4)]
j=C.cS(p,3)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=k.j(0.75).gp(0)
i.a=A.n9
i.z=new B.hp(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.V()
t=B.L()
t.r=A.aA.gp(0)
t.c=1.2
a3.bz(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.dX.gp(0)
a3.ae(v,u,t)
J.bA(q.save())
a1=new B.aP(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kB(B.bT(v,u)))
a3.ty(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.G(a1,g)
i=Math.sin(e*1.7+l+s)
$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c4(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qU(a3,v.af(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cqb(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cp.au(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.V()
q=B.a([],u)
p=new B.aP(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.bJ.j(0.1).gp(0)
o=r.H()
r=p.gbH().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.V()
a0=B.L()
a0.sar(new B.bS(A.A,0.5,A.x,h,0,B.a([D.b0L.j(0.6),D.aaY],x.O),h,h).av(0,B.bT(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.L()
d.sar(D.e0g.av(0,B.bT(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.G(d*(1+t*0.3)+C.cS(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.c.j(0.18).gp(0)
i=B.cr(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()
i=B.cr(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()}this.lk(a2,a3,a4,20,A.hQ,180)},
cam(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.V()
q=B.a([],t)
p=new B.aP(r.r,A.ap,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ao(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bw(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ao(e,d)
q.push(r)
o=p.f
if(o!=null)r.bw(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bw(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.V()
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=B.ar(A.ct,A.iY,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbH().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cS(i,1))
g=d-A.k.G(u*(0.04+0.05*C.cS(i,2))+C.cS(i,3)*j,j)
n=C.cS(i,4)*e+Math.sin(a3+i)*a0*0.02
$.V()
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.sar(new B.bS(Al.pZ,0.5,A.x,f,0,D.cYw,f,f).av(0,B.bT(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lk(a1,a2,a3,25,A.c,190)},
coq(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cS(r,1))
p=f+q*4
o=A.k.G(u*(0.03+0.05*C.cS(r,2))+C.cS(r,3)*p,p)
n=C.cS(r,4)
m=Math.sin(t+r)
$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.c.j(0.6+0.4*C.cS(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.bA(v.save())
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
h.delete()}v.restore()}this.lk(d,a0,a1,40,A.er,200)},
bUJ(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dE(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cr(new B.u(p,0),q,r)
$.V()
f=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.sar(D.bLm.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c4(g),e)
e.delete()
s.restore()}}$.V()
a0=B.L()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b4w.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.qU(a3,w.af(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lk(a3,a4,a5,40,A.bJ,210)},
cis(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hz,A.hQ],a6),B.a([A.o2,A.ig],a6),B.a([A.aD,A.ex],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bV<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.V()
k=B.a([],o)
j=new B.aP(l.r,A.ap,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bw(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ao(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bw(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bV(l,l.gJ(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ao(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bw(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bw(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k=a7[m]
h=k[0]
l.sar(new B.a5(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.asM,new B.m5(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbH().a.snapshot()):l).a,a2)
a2.delete()}this.lk(a8,a9,b0,40,A.c,220)},
bUs(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.G(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.G(A.k.bv(g/t),5)
a1=g+t
$.V()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3=Math.abs(a0)
a2.r=D.a_F[a3].gp(0)
a4=a2.H()
s.drawRect(B.c4(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a5.r=D.a_F[A.o.G(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c4(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.G(n*(0.04+0.05*C.cS(a0,1))+C.cS(a0,2)*a6,a6)
v=C.cS(a0,3)
t=C.cS(a0,4)
this.qU(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a_F[A.o.G(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
ctL(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.c=v
p.r=A.bJ.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aP($.V().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ao(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cR(w,r,p,k))
w=a2+m*0.95
l.E(new B.ao(p,w))
p=n*0.3
j=a2+m
l.E(new B.ao(a1+p,j))
l.E(new B.ao(a1-p,j))
q=a1-q
l.E(new B.ao(q,w))
l.E(new B.ao(q,k))
l.E(new B.cR(v,r,v,a2))
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cr(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=q
d.r=A.au.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c4(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sar(new B.a5(A.a3,A.a7,A.x,D.d_C,A.asc,null).av(0,new B.a9(v,a2,r,j)))
a4.aM(l,a1)
a0=A.k.G(a6*0.6,1.4)
if(a0<1)this.qU(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bCi(a4,a5,a6,60)},
bCi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.G(k*(0.1+0.1*C.cS(p,31))+C.cS(p,32)*v,v)
n=C.cS(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cr(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=D.NV[A.o.G(p,5)].gp(0)
m=n.H()
u.drawRect(B.c4(o),m)
m.delete()
u.restore()}},
cmi(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lk(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cS(o,1)*1.6
m=A.k.G(a2+C.cS(o,2)*n,n)/n
l=e*(C.cS(o*7+A.k.bv((a2+C.cS(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.V()
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.sar(new B.a5(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).av(0,B.r3(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qU(a0,i,p,A.c,1-m)}},
bxu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cS(r,1))
p=A.k.G(C.cS(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.G(C.cS(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.V()
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l=A.o.G(r,5)
m.r=D.auw[l].j(n).gp(0)
m.a=A.n9
m.z=new B.hp(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.auw[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
c84(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cr(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.V()
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c4(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.hQ.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.hz.j(0.4).gp(0)
k.z=new B.hp(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lk(d,e,f,45,A.bJ,270)},
bJY(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.G(o,4)
m=C.cS(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.G(a7+C.cS(o,2)*4,4)/4
j=A.et.au(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cS(o,3))*(j*i)
if(h<=0.5)continue
g=D.cQj[A.o.G(o,5)]
J.bA(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cr(new B.u(0,l),i,j)
$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.sar(new B.a5(A.b1,A.b3,A.x,B.a([A.c,g],u),null,null).av(0,B.cr(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c4(d),a1)
a1.delete()}$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.hz.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lk(a5,a6,a7,30,A.hQ,280)},
bY7(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.G(t+n/4,1)
l=B.bT(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=v
j.r=D.arj[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c4(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.G(v*(0.06+0.06*C.cS(g,1))+C.cS(g,2)*h,h)
e=C.cS(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cS(g,4))
a0=D.arj[A.o.G(g,4)]
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=a0.gp(0)
J.bA(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cr(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c4(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bWz(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bA(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.V()
a0=B.a([],s)
a1=new B.aP(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cR(h,m,0,g))
a0.push(new B.cR(j,m,0,i))
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=t
d.r=B.ar(A.bJ,A.nX,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbH().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=A.hQ.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.V()
a5=B.L()
a5.sar(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.hz.j(0.25),D.UQ],x.O),a3,a3).av(0,B.bT(w,a4)))
a7.ae(w,a4,a5)
this.lk(a7,a8,a9,30,A.bJ,300)},
coy(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.V()
h=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.sar(new B.bS(A.A,0.5,A.x,null,0,B.a([A.hQ,A.hz.j(0.6),D.UQ],o),null,null).av(0,B.bT(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cS(f,1)
d=A.k.G(b2+C.cS(f,2)*e,e)/e
a0=A.k.bv((b2+C.cS(f,2)*e)/e)
a1=C.cS(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cS(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=B.ar(A.hQ,A.aR,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.n9
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
g.delete()}}}this.lk(b0,b1,b2,35,A.bJ,310)},
bAY(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aPk(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cS(n,1))
l=a8*(0.14+0.24*C.cS(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.sar(D.bMh.av(0,j))
h=i.H()
r.drawRect(B.c4(j),h)
h.delete()
g=A.k.bv(m/q)
f=A.k.bv(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cS(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.V()
a6=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c4(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aXC.prototype={
B(d){var w,v=null,u=new C.c53(),t=new C.c55(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ak8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c54(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.FJ[w]))
return B.c6(A.bF,s,A.bx,12,10)}}
C.XM.prototype={
S(){return new C.axF()}}
C.axF.prototype={
gv0(){var w=this.d
return w===$?this.d=this.a.c:w},
gaVS(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ap(new B.bb(w.b,A.b0,A.aM),$.av())}return v},
gauL(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaHC()
v=$.av()
u.f!==$&&B.bL()
t=u.f=new B.ap(new B.bb(w,A.b0,A.aM),v)}return t},
q(){var w=this.gaVS(0),v=$.av()
w.R$=v
w.O$=0
w=this.gauL()
w.R$=v
w.O$=0
this.a1()},
Yo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Yo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().Bh(90,700,700,A.eE),$async$Yo)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Yo)
case 8:p=e
o=q.b.toLowerCase()
n=J.ag1(o,".png")?"image/png":"image/jpeg"
r.m(new C.d37(r,n,p))
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
return B.i($async$Yo,v)},
aVR(d){var w=null,v=A.c.j(0.07)
return B.bo(w,new B.b4(4,B.m(12),A.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aM6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.af8(p.gv0().a)
if(n==null)n=A.d.gK(D.FJ)
w=p.gv0()
v=p.r
u=x.p
v=B.D(new B.am(A.X,o,A.a9,A.q,B.a([B.bZ(0,new C.Mc(p.gv0(),!1,!0,new B.cz(w.a+v,x.W)),0,0,0),B.an(o,B.GB(A.md,new C.d3c(d),B.ng(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.GB(D.bwS,new C.d3d(p),B.ng(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aM0,o,o,o)
t=B.D(B.aL(o,A.U,!1,o,!0,A.q,o,B.aM(),p.gaVS(0),o,o,o,o,o,2,p.aVR("Big words"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d3e(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hj,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hz.j(0.6),A.r,1)
if(p.gv0().d.length===0)q=D.bAb
else{q=C.h1f(p.gv0().d)
if(q==null)q=new Uint8Array(0)
q=B.hQ(B.fI(q,A.A,o,o,A.cn,A.bQ,!1,o,!1,o,o),A.ao)}r=B.a([t,A.ab,B.aH(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc26(),o,o,o,o,o,o,!1,A.ac)],u)
if(p.gv0().d.length!==0)r.push(B.aG(o,o,o,o,D.Zu,o,o,o,new C.d3f(p),o,o,o,o,"Remove logo",o))
return B.cb(o,A.w,B.bq(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.U,!1,o,!0,A.q,o,B.aM(),p.gauL(),o,o,o,o,o,2,p.aVR("Line under it"),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d3g(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a5,o,A.am,o,o,o,o),A.aa,B.dp(D.bz6,D.ffA,new C.d3h(p,d),B.bk(A.au,o,o,o,A.w,o,A.ce,o,new B.b7(B.m(14),A.Z),o,o,o))],u),A.ai,o,A.e,A.Q,0,A.p),A.f,o,o,D.aUU,o,o,o,o,A.Ej,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.aJf.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.Y6.prototype={
S(){return new C.bdr(new B.ap(A.as,$.av()))}}
C.bdr.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.M(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.ak,k=B.aI(d,A.bR,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bH:A.aK,A.r,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.W(A.cu,l,o,o,o,o),o,o,o,new C.d9T(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cBv[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.aZ(12,12)
q=new B.aZ(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aK(!1,new B.bv(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.vA,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d9U(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hD,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ex(A.bF,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aO
e.push(B.A(B.a([B.D(B.aL(o,A.U,!1,o,!0,A.q,o,B.aM(),this.d,o,o,o,o,o,2,B.bo(o,new B.b4(4,B.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bM(A.aMV,new C.d9V(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bq(!0,B.p(o,B.v(B.a([f,new B.dl(1,A.ch,B.cL(e,o,o,o,o,A.aj,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rT,A.Wq,o,o,o),!0,!1,A.ah,!0,!0)}}
C.bcP.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f5()
a2.dU(this.c)
w=this.b
v=w/6.283185307179586
$.V()
u=B.L()
u.z=A.Pq
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ag()
l=a2.ag()
k=a2.ag()
j=0.8+a2.ag()*2.2
i=Math.sin(w*(3+a2.aD(4))+n)
h=A.k.G(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ag()<0.25){f=B.ar(r,A.c,0.85)
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
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aq(d){return d.b!==this.b}}
C.bcw.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.by(new B.a9(0,0,0+a7.a,0+a7.b),A.kg),a2=this.b,a3=Math.sin(a2*2),a4=$.V(),a5=B.L()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lc
a6.aA(a1,a5)
a5=x.v
a4=new B.aP(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iR(a1))
v=new B.Ra(new B.v2(B.wv(a4),!1,B.a([],x.X))).gK(0)
a4=v.a
a3=v.b
a4.j3()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.G(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.G(n-p*(1-m/10),t)
h=A.k.G(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aP(r,k,a0,new B.cJ([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbH().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aP(r,k,a0,new B.cJ([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbH().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aP(r,a2.b,a0,new B.cJ([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbH().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.j3()
e=u[a3].LD(n).a
$.V()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=w.gp(0)
k.z=A0.mi
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.blf.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f5()
e.dU(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.hf()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gakg()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.V()
i=B.a([],n)
h=new B.aP(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.sar(B.aSJ(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.ja
g=j.H()
j=h.gbH().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b7u.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dU(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ag()
l=a0.ag()
k=Math.min(t,r)*(0.03+a0.ag()*0.09)
j=a0.ag()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.V()
e=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.r=f.j(g).gp(0)
e.z=new B.hp(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b77.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dU(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ag()-0.5)*0.1)
k=v*(0.06+a0.ag()*0.05)
j=a0.ag()*3.141592653589793*2
i=$.V()
h=B.a([],n)
g=new B.aP(i.r,A.ap,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ao(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bw(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.b=A.ae
i.c=r
i.d=A.bO
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hp(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbH().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.bs7.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.V()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sar(new B.bS(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cIs,null).av(0,u))
d.aW(u,w)
w=u.cD(-3)
v=B.L()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.ja
d.aW(w,v)},
aq(d){return d.b!==this.b}}
C.bp8.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bv(d)*7,p=0;p<7;++p){o=new B.f5()
o.dU(q+p)
n=o.ag()*w
m=o.ag()*u
l=Math.sin(A.k.G(A.k.G(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ag()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
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
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hp(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.boh.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.V()
v=B.L()
v.a=A.n9
v.sar(new B.a5(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aW(w,v)},
aq(d){return d.b!==this.b}}
C.bbR.prototype={
a5(d,e){var w,v,u,t,s,r=e.ge9(),q=0.55+0.45*Math.sin(this.b)
$.V()
w=B.L()
w.b=A.ae
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.qI
r=new C.d2P(this,r*0.16,d,u,w)
t=e.ge9()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.wY.prototype={}
C.HC.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.ap8.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.ud.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.me.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hs.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.eD.prototype={
ht(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ek(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ac(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdC(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hEW(v.z))
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
C.lt.prototype={
ht(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,eD>")
n=B.B(new B.J(n,new C.cas(),m),m.k("ai.E"))
return C.r1(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.B(new B.J(n,new C.cat(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hW.prototype={
gb5K(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gQT(){if(!C.kl(this.w))return!1
var w=this.gb5K()
if(w==null)return!1
return new B.Q(Date.now(),0,!1).cV(w.bP())},
ht(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("J<1,lt>")
r=B.B(new B.J(r,new C.cah(),q),q.k("ai.E"))
return C.AO(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ac(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a4().ab())
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
v=B.U(w).k("J<1,a1<n,@>>")
w=B.B(new B.J(w,new C.cai(),v),v.k("ai.E"))
t.n(0,"slides",w)
return t}}
C.jw.prototype={}
C.aZK.prototype={
B(d){return B.cl(new C.can(this))}}
C.amn.prototype={
S(){return new C.bgB(null,null)}}
C.bgB.prototype={
gaVT(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.hc,null,1,null,v)
w.cE(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaVT().q()
this.bqd()},
B(d){return B.c5(this.gaVT(),new C.dBv(),this.a.c)}}
C.aJ0.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.abF.prototype={
Oy(d,e,f,g){return this.bJF(d,e,f,g)},
bJF(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Oy=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Oy)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).M(null)
t=d.I(x.q).f
t.P(B.b2(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oy,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.b9,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.aq,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d4)
n.push(B.A(B.a([B.D(new C.abX(A.hu,"Download",A.bU,new C.efb(w,d),!0,v),1),A.aw,B.D(new C.abX(A.uS,"Share",A.bk,new C.efc(w,d),!1,v),1),A.aw,B.D(new C.abX(A.he,"Safari",A.aZ,new C.efd(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bJ(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.efe(d),v,v))
return B.bq(!0,new B.C(A.pg,B.v(B.a([B.p(v,B.v(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iJ,v,t,u,s,v,A.n),v,v,v,v,A.Ep,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ah,!0,!0)}}
C.abX.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aE(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ev(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.boj,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ad)}}
C.aZI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.aol(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.N(v,w,v,w)}else{v=6*w
u=new B.N(v,10*w,v,12*w)}t=i.c27().ais(1.35)
s=B.atz(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bvv(v)
if(i.e&&i.w!=null)q=B.aL(h,A.U,!1,h,!0,A.q,h,B.aM(),i.w,A.bk,h,h,h,h,2,D.bI2,A.z,!0,h,!0,h,!1,i.x,A.ag,h,h,h,new B.cz("slide_tf_"+g.a,x.W),h,A.vx,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yE,A.am,h,A.Rt,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.t(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gV(v)
w=n?t.cAP(B.b_(g.Q).j(0.45),A.cC):t
p=g.as
l=m?1:h
k=m?A.eB:A.Cg
p=B.d(f,new B.cz("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Rk:s
$.V()
j=B.L()
j.b=A.ae
j.c=3*w
j.e=A.fw
j.r=A.az.gp(0)
j=i.civ(p,t,k,j)
k=g.r
w=new B.am(A.X,h,A.a9,A.q,B.a([j,i.cit(k,t,l?A.Rk:s)],x.p),h)}else w=i.ciu(p,t,g.k2?A.Rk:s,m)
v=new B.mY(w,new B.cz("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aH(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ac)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bSX()
case 3:return i.cal()
case 2:return B.b3(h,h,h,new C.aZF(g,h),A.eS)
case 5:g=g.r
return new C.aZH(g,!i.e&&i.z==null,h)}},
c27(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b_(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kE
j=A.cC
break
case"shadow":v=o.d
e=B.a([new B.cO(D.aaW,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cO(l,A.J,6*v),new B.cO(l,A.J,16*v),new B.cO(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cr
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mo
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cO(A.by,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cO(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cO(A.b8,new B.u(-3*v,0),0),new B.cO(A.aE,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cO(A.cL,A.J,8*v),new B.cO(A.aE,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=H.a9L
break
case"ice":v=o.d
e=B.a([new B.cO(A.aY,A.J,10*v),new B.cO(A.ct,A.J,22*v)],x.r)
k=A.O
w=A.er
break
case"chalk":h=o.d
e=B.a([new B.cO(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kE
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cKm[q]
u.push(new B.cO(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cO(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.V()
f=B.L()
v=o.d
f.sar(D.bJQ.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cO(A.Je,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.V()
f=B.L()
v=o.d
f.sar(D.bKa.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cO(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cq
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cO(l.j(0.45),new B.u(u,u),0),new B.cO(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kE
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b_(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
awD(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ewk.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cal(h)
v=r.k2?C.hRo(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.Cg
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Wi(B.dn(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
civ(d,e,f,g){return this.awD(d,e,f,!1,g)},
cit(d,e,f){return this.awD(d,e,f,!1,null)},
ciu(d,e,f,g){return this.awD(d,e,f,g,null)},
bvv(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bSX(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bG
return B.au(B.W(s.b===D.kN?A.Fj:A.Az,A.aA,t,t,t,32),t,t,t)}w=u.byp(r)
if(s.b===D.kN){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cl,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dz,6)],x.V),t,A.n),t,1/0,t,t,new B.N(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aKK(r,!0)
return C.fn0(s.go,v,s.id)}return w},
aKK(d,e){var w,v,u,t
try{w=C.hRH(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cl(new C.cak(this,w,v,e))
return u}catch(t){return D.a8X}},
byp(d){return this.aKK(d,!1)},
cal(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aZW
return C.hRZ(v,w.db,w.dx)}}
C.aZF.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.V(),g=B.L(),f=this.b
g.r=B.b_(f.ay).gp(0)
w=B.L()
w.r=B.b_(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aW(s,g)
d.aW(s,w)
break
case 1:d.hV(s,g)
d.hV(s,w)
break
case 2:r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ao(u,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 3:r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b5(0,h))
f=u*0.65
r.E(new B.ao(f,h))
r.E(new B.ao(f,t*0.2))
r.E(new B.ao(u,t*0.5))
r.E(new B.ao(f,t*0.8))
t*=0.55
r.E(new B.ao(f,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 4:h=t/2
w.c=v+2
d.bz(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aP(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ao(u,0))
r.E(new B.ao(u-q,t))
r.E(new B.ao(0,t))
r.E(new B.bE())
d.aM(r,g)
d.aM(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aP(h.r,A.ap,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bw(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ao(k,j)
f.push(h)
v=r.f
if(v!=null)h.bw(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bE())
d.aM(r,g)
d.aM(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aGC.prototype={
S(){return new C.brE(null,null)}}
C.brE.prototype={
Z(){var w,v=this
v.a0()
w=B.bj(null,A.iq,null,1,null,v)
w.cE(0)
v.d!==$&&B.aR()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bst()},
aKV(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bW(B.au(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a5(A.a3,A.a7,A.x,v,w,w),A.n),A.bc)},
bvJ(){var w,v=this,u=null,t=v.aKV("Slide A",A.bk),s=v.aKV("Slide B",A.aZ)
if(v.a.c===D.cf)return new B.am(A.X,u,A.b_,A.q,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c5(w,new C.eUu(v,s,t),u)},
B(d){return this.bvJ()}}
C.aHe.prototype={
iK(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jm(d){return d.b!==this.b}}
C.Ty.prototype={
S(){return new C.bgM(null,null)}}
C.bgM.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bj(null,A.zY,null,1,null,u)
u.d!==$&&B.aR()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cf){w.sp(0,1)
return}B.bO(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dMR(u),x.a)},
bq(d){var w,v,u,t=this
t.bD(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cf)w.sp(0,1)
else B.bO(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dMQ(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bqs()},
B(d){var w,v=this.a
if(v.c.dy===D.cf||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c5(w,new C.dMP(this),v.d)}}
C.HB.prototype={
B(d){return B.cl(new C.cad(this))}}
C.axo.prototype={
S(){return new C.bbl()}}
C.bbl.prototype={
Z(){this.a0()
if(this.a.c!==D.cf)B.bO(A.Kp,new C.d03(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cf)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.Ty(C.ek(A.bg,!1,4279310375,A.aB,"",4294538006,24,A.bi,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bd,o,2,"",0,0,"",u,D.eY,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cz("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ek(A.bg,!1,4294967295,A.aB,"",4280640491,22,A.bi,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bd,o,2,"Element flies in",0,0,"",q.a.c,D.cP,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.X,p,A.a9,A.q,B.a([w,B.an(32,new C.Ty(t,B.p(p,D.f2d,A.f,p,p,new B.o(s,p,B.I(A.b9,A.r,1),r,p,p,A.n),p,p,p,p,A.j5,p,p,1/0),!0,1,new B.cz("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bW(n,D.aVs,A.bc)}}
C.a69.prototype={
S(){return new C.bhq(null,null)}}
C.bhq.prototype={
gaWp(){var w=this.a
if(w.e)w=D.ewr.t(0,w.c)||D.aJh.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaWp()){w=C.hQ3(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dA(0,0,0,w,0,0),null,1,null,v)
w.cE(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bqZ()},
B(d){var w,v=this,u=v.d
if(!v.gaWp()||u==null)return v.a.d
w=v.a
return B.c5(u,new C.e4Q(v,u,A.o.G(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aXF.prototype={
B(d){var w=null
return B.au(C.aZJ(!0,w,!1,C.ek(A.L,!1,this.e.l(),A.aB,"",4280640491,this.f,A.bi,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.bd,4280172719,2,"Aa",0,0,this.c,D.cf,D.cP,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bcu.prototype={
iK(d){return C.a0P(this.b,new B.a9(0,0,0+d.a,0+d.b).cD(-this.c))},
jm(d){return d.b!==this.b||d.c!==this.c}}
C.bng.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0P(g,h),e=a1.ge9(),d=new C.eJL()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aKO.av(0,h))
a0.aM(f,w)
g=C.a0P(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bc5.gp(0)
a0.aM(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.eG_.av(0,h))
a0.aM(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hp(A.G,e*0.04)
a0.aM(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aM(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.eFY.av(0,h))
a0.aM(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aM(f,w)
g=C.a0P(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aM(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hp(A.G,e*0.035)
a0.aM(f,g)
g=d.$1(e*0.016)
g.r=A.o5.gp(0)
a0.aM(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.eFT.av(0,h))
a0.aM(f,w)
w=C.a0P(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b28.gp(0)
a0.aM(w,v)
g=C.a0P(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b4n.gp(0)
a0.aM(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aKO.av(0,h))
a0.aM(f,g)
for(g=B.wv(f),w=B.a([],x.X),g=new B.v2(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jN(y.M));--q
g.j3()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bv(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.j3()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.j3()
m=w[q].LD(p*n/o).a
l=D.cHO[A.o.G(n,4)]
$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.eG1.av(0,h))
g.z=new B.hp(A.G,e*0.03)
a0.aM(f,g)
g=d.$1(e*0.018)
g.sar(D.eFZ.av(0,h))
a0.aM(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aM(f,w)
g=C.a0P(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nf.gp(0)
a0.aM(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.boe.prototype={
a5(d,e){d.EV(C.a0P(this.b,new B.a9(0,0,0+e.a,0+e.b).cD(-this.c)),A.w,e.ge9()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aJe.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aJK.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aL4.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.a6s.prototype={}
C.MD.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aCc(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.b0(v),null,null)},
gdS(){return this.c},
gSd(){return this.r},
gSe(){return this.w},
gKt(){return this.x}}
C.aCc.prototype={
Z(){var w,v=this
v.a0()
$.aU.c_$.push(v)
C.frY()
$.h8J=new C.elp(v)
w=B.bj(null,A.zW,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aR()
v.fy=w
v.Hq()},
bq(d){var w,v,u=this
u.bD(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ng(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Hq()}},
iF(d){if(d===A.z2||d===A.rf||d===A.re||d===A.oR)this.rW()},
q(){var w,v,u,t=this
$.aU.hw(t)
w=t.at
if(w!=null)w.a8(0)
t.rW()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}for(w=t.CW,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bJ(0)
v.fU()}for(w=t.cx,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}t.brc()},
ga9w(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gNA(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
aa_(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQT())return!1
return!0},
jL(){return this.aa_(null)},
agA(){var w=this.c
if(w==null)return
w.I(x.q).f.P(D.eEh)},
pF(){if(!this.jL())return!1
this.agA()
return!0},
aoy(d){var w,v,u,t,s,r=this
if(r.aa_(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h7Q(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
z9(){return this.aoy(null)},
Hq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Hq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.apa(k),$async$Hq)
case 3:j=e
w=4
return B.b(C.anO(k),$async$Hq)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fGL(j,t.bVJ())
w=t.ga9w()?5:7
break
case 5:r=t.gNA()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aXT(r),$async$Hq)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.ehN())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cl(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.ehO())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xW(m==null?"":m)!=null)continue
C.fs9(n,s)
p=!0}t.m(new C.ehP(t,s))
if(p||s.length>J.ab(j))t.rW()
case 1:return B.h(u,v)}})
return B.i($async$Hq,v)},
bVJ(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kl(w)&&w!==q}if(w)p.push(r)
return p},
cgW(d){var w,v=this,u=d.w
if(!C.kl(u)||u==="hati_kiapo_uongozi")return
v.a8n(d)
w=A.d.bi(v.d,new C.ejn(d))
u=v.d
if(w>=0){u[w]=d.ht()
v.d[w].f=new B.Q(Date.now(),0,!1)}else A.d.cl(u,0,d.ht())
v.db=!1},
cbh(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kl(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cgW(t)
s=u.d
w=B.U(s)
v=w.k("cW<1,hW>")
s=B.B(new B.cW(new B.a3(s,new C.ejb(),w.k("a3<1>")),new C.ejc(),v),v.k("G.E"))
return s},
Ng(d){return this.bK1(d)},
rW(){return this.Ng(null)},
bK1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ng=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cbh()
w=3
return B.b(C.Uv(d==null?t.a.c:d,s),$async$Ng)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aoy(r)?4:5
break
case 4:w=6
return B.b(C.a5G(r),$async$Ng)
case 6:q=r.x
p=A.a.i(q==null?t.gNA():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bi(t.d,new C.eha())
q=t.d
if(o>=0)q[o]=r.ht()
else A.d.cl(q,0,r.ht())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ng,v)},
oK(){var w,v=this,u=v.at
if(u!=null)u.a8(0)
u=v.e
w=(u==null?null:C.kl(u.w))===!0?A.hU:A.lu
v.at=B.cM(w,new C.ekv(v))},
aVU(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.adq(u.ht(),v.f,v.r))
if(w.length>40)A.d.cv(w,0)
A.d.a7(v.ay)},
ctX(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.adq(w.e.ht(),w.f,w.r))
w.m(new C.ell(w,v.pop()))
w.oK()},
cg2(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.adq(w.e.ht(),w.f,w.r))
w.m(new C.ejl(w,v.pop()))
w.oK()},
nJ(){var w,v,u=this
if(u.e==null)return
w=A.d.bi(u.d,new C.el8(u))
if(w>=0){u.d[w]=u.e.ht()
u.d[w].f=new B.Q(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.Q(Date.now(),0,!1)},
W4(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wM(){var w,v,u,t
for(w=this.ch,v=new B.dw(w,w.r,w.e);v.C();){u=v.d
u.R$=$.av()
u.O$=0}w.a7(0)
for(w=this.CW,v=new B.dw(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bJ(0)
u.fU()}w.a7(0)},
J3(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cW<1,n>")
t=B.d8(new B.cW(new B.a3(w,new C.el9(),v.k("a3<1>")),new C.ela(),u),u.k("G.E"))
w=this.ch
v=B.a2(w).k("cy<1>")
v=B.B(new B.cy(w,v),v.k("G.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.av()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bJ(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cP)continue
p=n.a
m=w.ce(0,p,new C.elb(n))
s.ce(0,p,new C.elc())
p=m.a.a
o=n.r
if(p!==o)m.saT(0,o)}},
GK(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.ba(u.d,new C.egz(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gNA()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cl(u.d,0,u.e.ht())}u.nJ()
u.oK()},
agV(d,e){var w,v,u,t,s=this
if(s.jL())return
w=s.W4(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kl(v.w))===!0
if(u){C.hQ7(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hQ8(t,w.d+w.f*0.5)}}s.GK()
s.nJ()
s.oK()
if(u&&s.c!=null)s.m(new C.elm())},
cv_(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.GK()
w.nJ()
w.oK()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpJ(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hO9(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b_(p==null?v.e:p)
u=q.bTb(v)
t=q.bTa(v)
s=B.b_(v.e)
r=v.f
return new C.jw(o,"Class template",p,u,t,s,r==null?null:B.b_(r))}return C.hre(o)},
bTb(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cP)s=t.w>=28||A.o.D(A.o.am(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b_(t.Q)}return A.M},
bTa(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cP&&t.w<28)return B.b_(t.Q)}return A.aJ},
acU(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga9w()){w.c.I(x.q).f.P(D.eCU)
return}w.a8n(d)
w.aX5(C.bzi(d))
return}if(C.cb6(v)){w.a8n(d)
w.aX5(d)
return}w.m(new C.eiu(w,d))},
ap6(){var w,v,u,t,s,r,q=this
q.a0o(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kl(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.egx(q))
if(r&&q.c!=null){u.toString
q.IE(u,s)}return}q.rW()
q.m(new C.egy(q))},
aX4(d){this.a8n(d)
this.YZ(d,!0)},
a8n(d){if(!C.kl(d.w))return
C.fs9(d,this.d)},
YZ(d,e){return this.c7i(d,e)},
aX5(d){return this.YZ(d,!1)},
c7i(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bzi(d)
if(e){r=s.x
q=A.a.i(r==null?t.gNA():r)
t.dy.W(0,q.toLowerCase())
C.anP(t.a.c,q)}r=s}else r=d
w=C.cb6(r.w)?3:4
break
case 3:w=5
return B.b(t.a8o(r),$async$YZ)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.ba(t.d,new C.eiR(l))
o=l.a.ht()
n=C.kl(o.w)&&C.hRj(o)
t.m(new C.eiS(t,o,p))
if(n){m=A.d.bi(t.d,new C.eiT(o))
if(m>=0){t.d[m]=o.ht()
t.rW()}}if(!t.aa_(l.a))t.Xc()
r=!1
if(t.c!=null)if(!t.aa_(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aoy(r)&&C.fob(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.P(D.eDt)
case 1:return B.h(u,v)}})
return B.i($async$YZ,v)},
a8o(d){return this.bIj(d)},
bIj(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a8o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l4(r.c,A.ym),$async$a8o)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kJ(!1,r,s.c,s.d,null,A.ym,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8o,v)},
nB(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cb6(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cav(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nB,v)},
acB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eit(),s,null,!0,!0,x.H),$async$acB)
case 3:if(t.c==null){w=1
break}t.ap6()
case 1:return B.h(u,v)}})
return B.i($async$acB,v)},
acA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eiq(),s,null,!0,!0,x.H),$async$acA)
case 3:if(t.c==null){w=1
break}t.m(new C.eir())
t.ap6()
case 1:return B.h(u,v)}})
return B.i($async$acA,v)},
Xc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Xc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$Xc)
case 3:r=e
if(B.k7(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ap("Bool","ngmy_marriage_hint_seen",!0),$async$Xc)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eBx)
case 1:return B.h(u,v)}})
return B.i($async$Xc,v)},
IE(d,e){return this.chm(d,e)},
chm(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IE=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.aeJ(s,t.gDw(),t.gDv(),!0,e,t.d),$async$IE)
case 9:w=4
break
case 6:w=10
return B.b(C.aeK(s,t.gDw(),t.gDv(),!0,e,t.d),$async$IE)
case 10:w=4
break
case 7:w=11
return B.b(C.aeL(s,t.gDw(),t.gDv(),!0,e,t.d),$async$IE)
case 11:w=4
break
case 8:w=12
return B.b(C.aeM(s,t.gDw(),t.gDv(),!0,e,t.d),$async$IE)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
bUH(){var w,v,u,t,s=this
if(!s.ga9w()){s.c.I(x.q).f.P(D.eBK)
return}w=s.gNA()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aeI(u,t,v,new C.ehJ(s),new C.ehK(s),w)},
acV(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c2(A.dB,null,new C.eiA(u),s,!0,!0,!1,A.le,!1,!1,x.N),$async$acV)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeM(s,u.gDw(),u.gDv(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.aeJ(s,u.gDw(),u.gDv(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aeK(s,u.gDw(),u.gDv(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aeL(s,u.gDw(),u.gDv(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bUH()
return B.h(null,v)}})
return B.i($async$acV,v)},
c6p(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aVU()
w=C.cB()
v=C.AO(t,t,t,t,D.BF,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eiB(u,v))},
a7P(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pF()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hVG(s),$async$a7P)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e2(q.r,new C.egB())
t.cZ(new C.egC(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.P(B.b2(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7P,v)},
aeT(d,e,f,g){var w=null,v=g?A.du:A.bN,u=B.I(g?A.b9:A.cl,A.r,1)
return B.hl(B.aH(w,B.p(w,B.W(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ac),w,e,w,w)},
YY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pF()){w=1
break}s=t.jp()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a3<1>")
p=B.B(new B.a3(r,new C.eiM(),q),q.k("G.E"))}o=s!=null&&s.b===D.ld?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.P(D.eDE)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.eiN(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$YY)
case 3:case 1:return B.h(u,v)}})
return B.i($async$YY,v)},
adb(){return this.c7h()},
c7h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$adb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pF()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hVs(s,t.f+1,o),$async$adb)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kr(s,B.U(s).c)
p.a=A.d.bi(o.r,new C.eiP(q))
t.cZ(new C.eiQ(p,t,o,q,r))
t.c.I(x.q).f.P(D.eE2)
case 1:return B.h(u,v)}})
return B.i($async$adb,v)},
adj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$adj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pF()||!t.z9()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a3<1>")
p=B.B(new B.a3(r,new C.ej6(),q),q.k("G.E"))
if(p.length===0){t.c.I(x.q).f.P(D.eBi)
w=1
break}o=new B.J(p,new C.ej7(),B.U(p).k("J<1,O>")).fv(0,new C.ej8())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ap(new B.bb(l,A.b0,A.aM),$.av()))}q=t.c
q.toString
w=3
return B.b(B.c2(A.K,null,new C.ej9(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$adj)
case 3:for(r=new B.dw(r,r.r,r.e);r.C();){q=r.d
q.R$=$.av()
q.O$=0}if(t.c!=null)t.m(new C.eja())
case 1:return B.h(u,v)}})
return B.i($async$adj,v)},
acY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$acY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pF()){w=1
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
return B.b(C.h9Q(s,new C.Dz(r,q,p,o==null?"":o)),$async$acY)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.eiC(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.af8(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b2(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$acY,v)},
a8h(){return this.bHG()},
bHG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a8h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pF()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hVF(s,t.f+1,l),$async$a8h)
case 3:r=e
q=$.fK9
$.fK9=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.egS())
t.c.I(x.q).f.P(D.eB9)
w=1
break}if(!q){s=r.CW
s=C.h8H(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.egT(t,l,r))
t.c.I(x.q).f.P(D.eEw)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kr(s,B.U(s).c)
s=l.r
m.a=A.d.bi(s,new C.egU(p))
o=s.length
t.cZ(new C.egV(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b2(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8h,v)},
aN_(d,e){if(e){this.adM()
return}this.c6p(d,!1)},
bDt(){return this.aN_(null,!1)},
adM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c2(A.bW,null,new C.ejg(t),r,!0,!0,!0,A.oB,!1,!1,x.N),$async$adM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ejh(t,C.hO8(s).oX()))
case 1:return B.h(u,v)}})
return B.i($async$adM,v)},
cZ(d){var w=this
if(w.pF())return
w.GK()
w.aVU()
w.m(d)
w.J3()
w.nJ()
w.oK()},
a6i(){this.cZ(new C.efw(this,D.mj))},
aOn(){var w=this.gdk()
if(w==null)return
this.cZ(new C.egQ(this,w))},
aNA(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.egO(this))},
aZX(d,e){if(this.e==null||d===e)return
this.cZ(new C.ejp(this,d,e))},
MO(d){return this.bFr(d)},
bFr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gNA():s)
w=5
return B.b(C.anN(t.a.c,r),$async$MO)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.apc(s)
w=6
return B.b(C.aZN(t.a.c,s),$async$MO)
case 6:if(t.c==null){w=1
break}t.m(new C.egK(t,d))
w=7
return B.b(t.rW(),$async$MO)
case 7:case 1:return B.h(u,v)}})
return B.i($async$MO,v)},
chj(d,e){var w=this
if(d.z){w.agA()
return}w.m(new C.ejo(w,d,e))
w.oK()},
jp(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
V5(d){return this.ch.ce(0,d.a,new C.egA(d))},
aqW(d){return this.CW.ce(0,d.a,new C.ehb())},
a0o(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.W4(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ah$.d.c
if(u!=null)u.jg()},
b2e(){return this.a0o(!0)},
a0m(d){var w,v,u=this
if(u.pF())return
if(!u.z9())return
w=u.W4(d)
if(w==null||w.b!==D.cP)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.V5(w).saT(0,"")}u.m(new C.el6(u,d))
$.aU.x1$.push(new C.el7(u,d,w))},
b2K(d){var w=this
if(d.b===D.cP&&!w.jL()&&w.z9()){w.a0m(d.a)
return}w.ax2(d.a)},
ax2(d){var w,v,u,t,s,r=this
if(r.jL())return
w=r.r
if(w!=null&&w!==d){v=r.W4(w)
if(v!=null&&v.b===D.cP){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ekw(r,s,d))
if(s||d==null){t=$.aU.ah$.d.c
if(t!=null)t.jg()}},
aJi(){this.cZ(new C.efx(this))},
ou(d){return this.buN(d)},
buN(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ou=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nB(),$async$ou)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.efu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ou,v)},
Uf(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Uf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FB(78,1920),$async$Uf)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.efk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Uf,v)},
U9(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$U9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(S.BY(t.a.c),$async$U9)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gaj(s)){t.c.I(x.q).f.P(D.eF5)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c2(null,null,new C.efh(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$U9)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.efi(t,q))
case 1:return B.h(u,v)}})
return B.i($async$U9,v)},
apW(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.ba(w.gdk().z,new C.egM(v))){w.c.I(x.q).f.P(D.eE6)
return}if(w.w===v)w.a0o(!0)
w.cZ(new C.egN(w,v))},
bBK(){var w=this.jp(),v=w==null
if((v?null:w.b)===D.eY)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cP)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aK_(d,e){var w=this,v=w.jp(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.efZ(w,v,d,e,t,u))},
bwm(d){return this.aK_(d,null)},
a6A(d){return this.bwu(d)},
bwu(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a6A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a41.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nB(),$async$a6A)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jp()
if(s!=null){r=s.b
if(r===D.cP)t.bwm(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eY){r=d.c
t.aK_(r.j(0.88),r)}w=1
break}t.cZ(new C.eg3(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a6A,v)},
a6z(d){return this.bws(d)},
bws(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a6z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jp()
r=t.gdk()
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
return B.b(t.nB(),$async$a6z)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.eg1(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a6z,v)},
bwc(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.efY(this,w,d))},
Z2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Z2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hVB(r),$async$Z2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nJ()
t.m(new C.ej0(t,s))
w=4
return B.b(t.rW(),$async$Z2)
case 4:if(t.c!=null)t.acU(s)
case 1:return B.h(u,v)}})
return B.i($async$Z2,v)},
a89(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a89=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a0o(!0)
t.nJ()
s=t.c
s.toString
w=3
return B.b(C.PO(s,q),$async$a89)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.P(B.b2(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a89,v)},
CG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$CG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nJ()
t=4
w=7
return B.b(C.aNN(m),$async$CG)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aNc(o,q,m.b),$async$CG)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a7(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$CG,v)},
Ej(d,e){return this.cts(d,e)},
cts(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ej=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pF()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a0o(!0)
t.nJ()
s=h.a=t.e.ht()}else{r=A.d.bi(t.d,new C.elf(d))
s=h.a=r>=0?t.d[r].ht():d.ht()}s=s.w
q=s==null
p=C.hP6(q?"":s)
o=C.h7D(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a3<1>")
n=B.B(new B.a3(s,new C.elg(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.cn_(n.length,o,s),$async$Ej)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hP0(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gK(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cmZ(n,o),$async$Ej)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kF(t.d,new C.elh(s))
s=h.a.b
w=11
return B.b(t.cmX(k.b,s),$async$Ej)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.ht()
case 5:j=C.hP5(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.P(D.eFg)
w=1
break}w=12
return B.b(t.cmY(j.a,s,o,j.c),$async$Ej)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eli(h,t,i))
t.oK()
case 1:return B.h(u,v)}})
return B.i($async$Ej,v)},
cn_(d,e,f){var w=this.c
w.toString
return B.c2(A.K,null,new C.ekM(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cmZ(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ekL(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cmX(d,e){var w=this.c
w.toString
return B.c2(A.K,null,new C.ekF(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cmY(d,e,f,g){var w=this.c
w.toString
return B.c2(A.K,null,new C.ekH(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a9A(){var w=null
return B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a9B(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a5(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eA,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.ePd,u,u,u),A.aq,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aRy(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.RW,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aRB(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a5(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aE(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.n3,w,w,w),A.d5,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.AD,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ehF(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad)},
bS9(d,e,f,g,h,i){return this.aRB(d,e,f,!1,g,h,i)},
asf(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.WM,w,w,w)},
aRA(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.ce,w,new B.b7(B.m(14),A.Z),w,w,w)
return B.bM(B.d(e,w,w,w,w,w,w,A.n2,w,w,w),new C.ehE(d,f),v)},
aRz(d,e){return this.aRA(d,e,null)},
IV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oK(l,s.c,s.d),$async$IV)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aJ("=",l.length)+"\n\n"
q=new B.fa(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gai(o.z),n=new B.hE(l,new C.ekx());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a8f(l.charCodeAt(0)==0?l:l,r.b),$async$IV)
case 4:l=t.a
w=5
return B.b(B.oJ(l.c,l.d),$async$IV)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
H5(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$H5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oK(q,s.c,s.d),$async$H5)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a8f(A.R.an(r.ac(),null),r.b+".json"),$async$H5)
case 4:q=t.a
w=5
return B.b(B.oJ(q.c,q.d),$async$H5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$H5,v)},
b21(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nJ()
u.rW()
w=u.c
w.toString
v=B.eu(new C.el5(u,t),!1,null,x.z)
B.a6(w,!1).ck(v)},
Gj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Gj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nB(),$async$Gj)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fsm(),$async$Gj)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hRT(s.a)
q=t.c
q.toString
w=5
return B.b(B.c2(A.az,null,new C.efp(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Gj)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.efq(t,s))
w=1
break}if(p==="split")t.cZ(new C.efr(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Gj,v)},
M9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$M9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pF()){w=1
break}w=3
return B.b(t.nB(),$async$M9)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aNM(s,null,null),$async$M9)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.efv(t,r))
case 1:return B.h(u,v)}})
return B.i($async$M9,v)},
aZK(d){var w=this.e
if(w==null||!C.kl(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aLh(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aNM(s,t==null?null:B.b_(t),u)},
a6g(d){return this.buE(d)},
buE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a6g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pF()){w=1
break}if(!t.z9()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eFv)
w=1
break}w=3
return B.b(t.aLh(),$async$a6g)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.efm(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a6g,v)},
aew(d){return this.cg5(d)},
cg5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aew=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pF()){w=1
break}if(!t.z9()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eEE)
w=1
break}w=3
return B.b(t.aLh(),$async$aew)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ejm(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
c37(){var w,v,u=this
if(u.jL())return
w=new B.Q(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bx(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.csw()}},
csw(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.eld(this,r,(A.o.az(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bSu(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.ehI(this,r,u.d))},
bWV(d){var w
if(this.jL())return!1
w=this.e
if((w==null?null:C.kl(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.foY(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bWW(d){var w
if(this.jL())return!1
w=this.e
if((w==null?null:C.kl(w.w))!==!0)return!0
if(!this.z9())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.foY(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Mi(d){return this.bwU(d)},
bwU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Mi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pF()){w=1
break}if(!t.z9()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eDu)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.anR(p),$async$Mi)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.P(D.eE8)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5G(r)
w=1
break}t.m(new C.eg7(t,d,o))
t.nJ()
$.aU.x1$.push(new C.eg8(t))
case 1:return B.h(u,v)}})
return B.i($async$Mi,v)},
Ud(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ud=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nB(),$async$Ud)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bzZ(),$async$Ud)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.efj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ud,v)},
N1(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$N1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nB(),$async$N1)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jp()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fsd(r),$async$N1)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.eh9(s,q))
case 1:return B.h(u,v)}})
return B.i($async$N1,v)},
iD(d){this.cZ(new C.efs(this,d))},
pu(d){return this.bw5(d)},
bw5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pF()){w=1
break}m=!D.aJk.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nB(),$async$pu)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Gj()
w=1
break A
case"sign_paper":t.M9()
w=1
break A
case"hd_photo":t.Ud()
w=1
break A
case"sharpen":t.N1()
w=1
break A
case"print":t.CG()
w=1
break A
case"rotate":s=t.jp()
if(s!=null)t.cZ(new C.efB(s))
w=1
break A
case"text_box":t.aJi()
w=1
break A
case"picture":t.Uf()
w=1
break A
case"present":t.b21()
w=1
break A
case"new_slide":t.a6i()
w=1
break A
case"export_json":t.H5()
w=1
break A
case"outline_share":t.IV()
w=1
break A
case"flashcard_tool":t.uA(D.GJ)
w=1
break A
case"quiz_tool":t.uA(D.GK)
w=1
break A
case"worksheet_tool":t.uA(D.GL)
w=1
break A
case"duplicate_el":s=t.jp()
if(s==null){w=1
break A}t.cZ(new C.efC(t,s))
w=1
break A
case"delete_el":t.apW()
w=1
break A
case"bring_fwd":s=t.jp()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.efD(t,s))
w=1
break A
case"send_back":s=t.jp()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.efO(t,s))
w=1
break A
case"align_left":s=t.jp()
if(s!=null)t.cZ(new C.efR(s))
w=1
break A
case"align_center":s=t.jp()
if(s!=null)t.cZ(new C.efS(s))
w=1
break A
case"align_right":s=t.jp()
if(s!=null)t.cZ(new C.efT(s))
w=1
break A
case"grayscale":case"brighten":t.N1()
w=1
break A
case"flip_h":s=t.jp()
if(s!=null)t.cZ(new C.efU(s))
w=1
break A
case"flip_v":s=t.jp()
if(s!=null)t.cZ(new C.efV(s))
w=1
break A
case"rectangle":t.ou(D.bd)
w=1
break A
case"circle":t.ou(D.eG)
w=1
break A
case"triangle":t.ou(D.jv)
w=1
break A
case"arrow":t.ou(D.BH)
w=1
break A
case"line":case"divider":t.ou(D.fm)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gai(r.z),p=new B.hE(q,new C.efW()),o=0;p.C();){n=A.a.fo(A.a.i(q.gT(0).r),B.ae("\\s+",!0,!1,!1,!1))
o+=new B.a3(n,new C.efX(),B.U(n).k("a3<1>")).gJ(0)}t.c.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.iD(C.iP(A.L,!1,t.gpJ().d.l(),A.aB,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.mk,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.iD(C.iP(A.L,!1,t.gpJ().e.l(),A.aB,22,A.bi,A.a4,0.12,q,"Subtitle goes here",0,D.dc,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iD(C.iP(A.bg,!0,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tB,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iD(C.iP(A.bg,!1,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.tA,0.8,0.1,0.22))
w=1
break A
case"quote":t.iD(C.iP(A.L,!1,4279310375,A.aB,24,A.cC,A.a4,0.25,C.cB(),'"Insert meaningful quote here."',0,D.dc,0.8,0.1,0.3))
w=1
break A
case"citation":t.iD(C.iP(A.bg,!1,4284773515,A.aB,14,A.bi,A.a4,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.tB,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iD(C.iP(A.dJ,!1,4279310375,A.aB,14,A.bi,A.a4,0.08,C.cB(),C.bA0(),0,D.dc,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iD(C.iP(A.dJ,!1,4279310375,A.aB,13,A.bi,A.a4,0.06,C.cB(),"Page "+(t.f+1),0,D.dc,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.efE(t))
w=1
break A
case"footer_bar":t.cZ(new C.efF(t))
w=1
break A
case"highlight":t.cZ(new C.efG(t))
w=1
break A
case"redact":t.cZ(new C.efH(t))
w=1
break A
case"callout":t.cZ(new C.efI(t))
w=1
break A
case"checkboxes":t.iD(C.iP(A.bg,!1,4279310375,A.aB,20,A.bi,A.a4,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dc,0.8,0.1,0.2))
w=1
break A
case"table":t.iD(C.iP(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dc,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.efJ(t))
w=1
break A
case"letter":t.iD(C.iP(A.bg,!1,4279179050,A.aB,17,A.bi,A.a4,0.82,C.cB(),C.bA0()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iD(C.iP(A.bg,!1,4279310375,A.aB,22,A.bi,A.O,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tB,0.8,0.1,0.12))
w=1
break A
case"toc":t.iD(C.iP(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dc,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iD(C.iP(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cB(),"Signature: _________________________",0,D.dc,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iD(C.iP(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cB(),"Initials: ______",0,D.dc,0.3,0.65,0.78))
w=1
break A
case"approved":t.iD(C.iP(A.L,!1,4278556265,A.aB,28,A.bi,A.u,0.12,C.cB(),"APPROVED",0,D.mk,0.32,0.62,0.08))
w=1
break A
case"draft":t.iD(C.iP(A.L,!1,4292617766,A.aB,28,A.bi,A.u,0.12,C.cB(),"DRAFT",0,D.dc,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iD(C.iP(A.L,!1,871318596,A.aB,36,A.bi,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.dc,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.efK(t))
w=1
break A
case"progress":t.cZ(new C.efL(t))
w=1
break A
case"stars":t.iD(C.iP(A.L,!1,4279310375,A.aB,36,A.bi,A.a4,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.pE,0.8,0.1,0.4))
w=1
break A
case"equation":t.iD(C.iP(A.L,!1,4279310375,A.aB,32,A.bi,A.O,0.14,C.cB(),"y = mx + b",0,D.dc,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iD(C.iP(A.L,!1,4279310375,A.aB,18,A.bi,A.a4,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tA,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.efM(t))
w=1
break A
case"compare":t.cZ(new C.efN(t))
w=1
break A
case"link_text":t.iD(C.iP(A.bg,!1,4280640491,A.mo,16,A.bi,A.a4,0.1,C.cB(),"https://example.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"phone":t.iD(C.iP(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.1,C.cB(),"(555) 123-4567",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"email":t.iD(C.iP(A.bg,!1,4280640491,A.aB,18,A.bi,A.a4,0.1,C.cB(),"name@email.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.efP(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.efQ(t,r))
w=1
break A
case"invoice":t.iD(C.iP(A.bg,!1,4279179050,A.aB,16,A.bi,A.a4,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"resume":t.iD(C.iP(A.bg,!1,4279179050,A.aB,17,A.bi,A.a4,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iD(C.iP(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bA0()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iD(C.iP(A.bg,!1,4279310375,A.aB,17,A.bi,A.a4,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iD(C.iP(A.bg,!1,4279310375,A.aB,15,A.bi,A.a4,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dc,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pu,v)},
cmr(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ewo.t(0,this.z)},
cmq(d){if(this.jp()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b3y(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cf,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bH
u=B.I(u,A.r,o&&e?2:1)
t=C.hRI(d)
s=o?12:18
r=o?A.I:A.cN
if(o)if(e)q=f
else q=g?A.af:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.N(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Mk,A.f,p,p,D.CV,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fM,B.aH(p,new B.am(A.X,p,A.a9,A.f,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ac),p)},
bHW(d){var w,v=null,u=this.jp()
if(u==null)return A.bG
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.J(D.OL,new C.eh8(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uA(d){return this.buM(d)},
buM(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aJe.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nB(),$async$uA)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.eft(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eva
w=h.e
if(w==null)return h.byv()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.M(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bR,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eC,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b3V
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQT()}else j=!1
if(j)k.push(new C.a6a(h.a.c,!1,h.e.gb5K(),h.gc34(),g))
else if(s&&h.e!=null&&!h.jL()&&C.cb6(h.e.w)){j=h.a
k.push(new C.a6a(j.c,j.d,g,h.gc4d(),g))}if(s)k.push(h.bHS(w,t,r))
if(s&&h.jL()){w=t?A.fs:A.k6
j=B.m(14)
i=B.I(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bBV,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fs,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.A4,A.j4,g,g,g))}w=!n
if(w&&!h.jL())k.push(h.bXR(t,r))
if(w&&h.jL())k.push(h.ctt(t))
if(r&&h.jp()!=null&&w&&!h.jL())k.push(h.bXN(t))
j=B.a([],l)
if(q&&w)j.push(new B.a4(132,g,h.b1y(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a4(g,72,h.b1y(t,!1),g))
i.push(B.D(new B.bI(A.b1,g,g,h.bzL(v,t,!s||p),g),1))
if(h.cmr(r)&&u&&s&&!h.jL())i.push(h.c2T(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jL()&&h.cmq(!1))j.push(new B.a4(240,g,h.bKp(t),g))
k.push(B.D(B.A(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a4(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bXO(t))
return B.cb(g,m,B.bq(!1,new B.am(A.X,g,A.a9,A.q,w,g),!0,!1,A.ah,!0,!0),g,!1,!1,g,!1)},
byv(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.M(p).ax.a===A.H
p=w?A.bW:A.bN
v=r.a.e
u=r.c28(A.bk,A.pj,new C.egb(r),r.gc6m(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aJ1(A.bk,A.hs,"Blank Presentation",new C.egc(r)),1),A.aw,B.D(r.aJ1(A.aZ,A.xs,"Class Template",new C.egd(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.mn,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.aa],t)
t=r.d
if(t.length===0)u.push(r.bvy(w))
else{t=new B.hU(t,B.U(t).k("hU<1>"))
A.d.v(u,t.gdL(t).dn(0,new C.ege(r,w),x.l))}return B.cb(q,p,B.bq(!1,B.cL(u,q,new B.N(18,12,18,v),q,q,A.aj,!1),!0,!1,A.ah,!0,!0),q,!1,!1,q,q)},
bGf(){this.m(new C.egP(this))
var w=this.c
w.toString
if(B.aI(w,A.bR,x.w).w.a.a<900){w=$.aU.ah$.d.c
if(w!=null)w.jg()}},
adc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jp()==null){w=1
break}s=t.c
s.toString
s=B.M(s)
r=t.c
r.toString
w=3
return B.b(B.c2(A.K,null,new C.ej_(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$adc)
case 3:case 1:return B.h(u,v)}})
return B.i($async$adc,v)},
A4(d,e){return this.cmN(d,e)},
cmN(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$A4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hP(D.Ur,!0,"Dismiss",j,new C.eky(),new C.ekz(d,e),A.io,!0,x.N),$async$A4)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.agA()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQT()){r.agA()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aNN(d),$async$A4)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aNc(j,q,d.b),$async$A4)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a7(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Ej(d,!1),$async$A4)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hP(D.Ur,!0,"Dismiss",j,new C.ekA(),new C.ekB(d),A.a1,!0,x.y),$async$A4)
case 20:if(g===!0)r.MO(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aeg("Rename presentation",d.b),$async$A4)
case 24:l=g
if(l!=null)r.chj(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ekC(r,k))
r.oK()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A4,v)},
aXK(d,e){var w=null
return B.bJ(!1,D.fbD,w,w,!0,w,w,e,w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.at,w,A.lw,w,w,w,w,w,A.kc,w,w))},
bvy(d){var w=this.fy
w===$&&B.c()
return B.c5(w,new C.efy(this,d),null)},
bEn(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.egD(),x.dv).bX(0,new C.egE()),v=B.B(w,w.$ti.k("G.E"))
return new B.C(G.adK,this.aJA(v,e,new C.egF(),f),null)},
aJA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e9)
t=e.j(g?0.14:0.1)
s=new B.aZ(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.af:A.bv,n,n,n,10),A.tS],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cx(A.aX,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bY(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.nv,n,n,n))
A.d.v(l,u)}return B.f1(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.ec)},
bvw(d,e,f){return this.aJA(d,e,null,f)},
bEp(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d_S
else if(v==="hati_kuhoweya")w=D.cNR
else{if(v==="hati_kiapo_uongozi")v=D.cBp
else v=C.kl(v)?D.cI7:A.On
w=v}v=this.fy
v===$&&B.c()
return B.c5(v,new C.egI(this,f,d,e,w),null)},
bXO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jp()
if(i==null||i.b!==D.cP)return A.bG
w=k.V5(i)
v=k.aqW(i)
u=A.w.j(0.55)
t=x.p
s=B.bq(!1,new B.C(A.A8,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bJ(!1,D.f7B,j,j,!0,j,j,new C.ei8(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ah,!0,!0)
r=d?A.az:A.c
q=B.m(18)
p=B.I(A.bk.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h2,B.bW(new B.C(A.eN,B.aL(j,A.U,!0,j,!0,A.q,j,B.aM(),w,A.bk,j,j,j,j,2,D.bHL,A.z,!0,j,!0,j,!0,v,A.ag,j,j,j,j,j,A.vx,j,j,j,j,j,j,!1,"\u2022",j,new C.ei9(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yE,A.am,j,A.Rt,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bc),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.I(d?A.aJ:A.aK,A.r,1)
n=B.D(B.ci(B.A(B.a([k.tj(G.Ll,j,new C.eia(k,i),d),k.tj(G.XM,j,new C.eib(k,i),d),k.tj(I.ahQ,j,new C.eic(k,i),d),k.tj(I.Yt,j,new C.eid(k,i),d),k.tj(k.bvu(i.as),j,new C.eie(k,i),d),k.tj(D.aiX,j,new C.eif(k,i),d),k.tj(D.aiW,j,new C.eig(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aX),1)
m=A.k.N(i.w)
return B.bZ(0,B.aE(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bj2,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.kD,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ad),0,0,0)},
bXN(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jp()
if(m==null)return A.bG
w=m.b
v=w===D.cP
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aO],t)
s=B.I(d?A.aJ:A.aK,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b0d(A.j6,"Edit",new C.ehU(o,m),d,!0))
if(w===D.ld)p.push(o.b0d(A.Fb,"Shape & ring",new C.ehV(o),d,!0))
p.push(o.tj(A.AT,"Format",new C.ehW(o),d))
if(v)A.d.v(p,B.a([o.tj(G.Ll,n,new C.ehX(o,m),d),o.tj(D.aiX,n,new C.ehY(o,m),d),o.tj(D.aiW,n,new C.ehZ(o,m),d)],q))
p.push(A.b6)
p.push(o.ckG(A.e8,n,o.gaNy(),d,!0))
p.push(o.tj(A.ht,"Done",new C.ei_(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a5(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.Ee,A.kD,n,n,n)},
bvu(d){switch(d.a){case 2:return D.Yq
case 1:case 5:return D.Ys
default:return D.Yr}},
bYD(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dJ
default:return A.bg}},
ax1(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aE
else if(h)w=A.c
else{v=g?A.af:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Fy:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e9,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qq,B.aE(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ev(new B.C(new B.N(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ad),n)},
tj(d,e,f,g){return this.ax1(d,e,f,g,!1,!1)},
b0d(d,e,f,g,h){return this.ax1(d,e,f,g,h,!1)},
ckG(d,e,f,g,h){return this.ax1(d,e,f,g,!1,h)},
bHS(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mx],m)
w=B.I(e?A.aJ:A.oV,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a0O(A.ez,"Back",p.gbBu(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dl(1,A.ch,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bZ:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rK,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jL()){u=p.a0O(A.tl,"Undo",p.ax.length===0?o:p.gctW(),e)
A.d.v(r,B.a([u,p.a0O(D.bvw,"Redo",p.ay.length===0?o:p.gcg1(),e)],q))}r.push(p.a0O(A.x8,"PDF",new C.eh1(p),e))
r.push(p.a0O(A.hu,"Download as video",new C.eh2(p),e))
if(!p.jL())r.push(B.B1(o,o,B.W(A.ny,e?A.af:A.bv,o,o,o,o),new C.eh3(p),A.J,new C.eh4(p),A.ah,"More",x.N))
r.push(A.d8)
r.push(B.aE(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ev(D.dVi,o,new B.o(o,o,o,B.m(14),o,K.Fy,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaxR(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ad))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a5(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.biY,D.bo8,o,o,o)},
ctt(d){var w=this,v=null,u=B.m(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cB:A.aK,A.r,1)
return B.p(v,B.ci(B.A(B.a([w.il(A.tg,"Print",new C.elj(w),d),w.il(A.x8,"Download PDF",new C.elk(w),d),w.il(A.pq,"Present",w.gaxR(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aX),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.A4,G.afr,v,v,v)},
a0O(d,e,f,g){var w,v=null
if(f==null)w=g?A.b9:A.dl
else w=g?A.af:A.aJ
return B.aG(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
bXR(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cB:A.aK,A.r,1)
t=x.f0
t=B.B(new B.J(p,new C.eij(r,d),t),t.k("ai.E"))
t.push(new B.C(W.af8,new B.fi(new C.eik(r),q),q))
A.d.v(t,w?B.a([new B.C(R.uG,r.aeT(A.l3,"Ending celebration",r.gc6z(),d),q),new B.C(R.uG,r.aeT(A.Fb,"Logo ring & frame",r.gc7f(),d),q)],x.p):A.h5)
A.d.v(t,w?B.a([new B.C(R.uG,r.aeT(A.nz,"Look and feel",r.gc7g(),d),q),new B.C(R.uG,r.aeT(A.on,"Edit this slide's text",r.gc7M(),d),q)],x.p):A.h5)
t.push(new B.C(R.uG,B.hl(B.aH(q,B.p(q,D.euE,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.l_.j(0.4),A.J,10)],x.V),D.akU,A.n),q,34,q,q,A.is,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eil(r),q,q,q,q,q,q,!1,A.ac),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.boC,q,q,A.aX)
s=e?8:10
return B.p(q,B.v(B.a([t,B.ci(r.cir(d),A.q,q,A.z,q,new B.N(8,2,8,s),q,q,A.aX)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.A4,q,q,q,q)},
cir(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cVg[v]
u.a=null
s=u.a=t.b
w.push(e.lh(e.ck5(s),t.a,new C.ejI(u,e),a3,D.aJe.t(0,s)))}w.push(e.il(A.kG,"Notes Slide",new C.ejJ(e),a3))
w.push(e.lh(A.Fa,"Quiz",new C.ejK(e),a3,!0))
w.push(e.lh(L.ER,"Worksheet",new C.ejV(e),a3,!0))
w.push(e.lh(O.Fe,"Flashcard",new C.ek5(e),a3,!0))
w.push(e.lh(A.Mb,"Lab Report",new C.ekg(e),a3,!0))
w.push(e.lh(A.xe,"Rubric",new C.ekn(e),a3,!0))
w.push(e.lh(A.oh,"Minutes",new C.eko(e),a3,!0))
w.push(e.lh(A.po,"Syllabus",new C.ekp(e),a3,!0))
w.push(e.lh(A.Mf,"Timeline",new C.ekq(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cWr[v]
w.push(e.lh(r.b,r.c,new C.ekr(e,r),a3,!D.aJk.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.il(A.xv,a0,e.gaJh(),a3),e.il(A.td,"Picture",new C.ejL(e),a3),e.il(A.xo,"Bio link",new C.ejM(e),a3),e.il(A.YZ,"Table",new C.ejN(e),a3),e.il(A.Me,"Sticky",new C.ejO(e),a3),e.il(A.uR,"Divider",new C.ejP(e),a3),e.il(A.Fi,"Header",new C.ejQ(e),a3),e.lh(A2.AH,"Rectangle",new C.ejR(e),a3,!0),e.lh(A.t4,"Circle",new C.ejS(e),a3,!0),e.lh(A.Yi,"Triangle",new C.ejT(e),a3,!0),e.lh(A.jr,"Arrow",new C.ejU(e),a3,!0),e.lh(D.bu_,"Parallelogram",new C.ejW(e),a3,!0),e.lh(D.bwv,"Hexagon",new C.ejX(e),a3,!0),e.lh(A.uR,"Line",new C.ejY(e),a3,!0),e.lh(A.x8,"PDF",new C.ejZ(e),a3,!0),e.lh(N.Z7,"Signature",new C.ek_(e),a3,!0),e.il(A1.AL,"Quote",new C.ek0(e),a3),e.il(D.XU,a1,new C.ek1(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bR,x.w).w
u=x.p
t=B.A(B.a([e.aK6("Wide 16:9",D.BF,a3),e.aK6("Short 9:16",D.nH,a3),new B.C(A.fM,B.mr(D.byC,d,D.f49,d,new C.ek2(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bBJ("This slide",!e.Q,a3,new C.ek3(e)),A.bp,e.aMh("All slides",e.Q,a3,new C.ek4(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bBK()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bZ:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.J(D.a_U,new C.ek6(e),n),n.k("ai.E"))
n=B.ci(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aX)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cXh[v]
j=B.b_(k)
i=new B.az(k===4294967295?A.dl:A.b9,1.5,A.r,-1)
l.push(new B.C(A.fM,B.aH(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bY(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ek7(e,k),d,d,d,d,d,d,!1,A.ac),d))}l=B.ci(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aX)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bBg()
g=B.U(h).k("J<1,C>")
h=B.B(new B.J(h,new C.ek8(e,a3),g),g.k("ai.E"))
return new B.a4(w.a.a-20,d,B.v(B.a([t,A.P,q,A.aq,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ci(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aX),A.aq,e.bUO(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jp()
w=e.c
w.toString
w=B.aI(w,A.bR,x.w).w
u=new C.ejH(e)
t=new C.eks(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.OL,f.dy,new C.ek9(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.OL,q,new C.eka(e,u),A.bk))
return new B.a4(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.il(A.kG,w,new C.ekb(e),a3),e.il(A.tg,"Print deck",new C.ekc(e),a3),e.lh(D.agX,"Export JSON",new C.ekd(e),a3,!0),e.il(A.fE,"Duplicate Slide",e.gaOm(),a3),e.il(A.e8,a2,e.gaNz(),a3),e.co4(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jp()
w=x.p
u=B.a([e.il(D.XU,a1,new C.eke(e),a3),e.il(A.fE,"Duplicate",e.gaOm(),a3),e.il(A.e8,a2,e.gaNz(),a3),e.il(A.pq,"Present",e.gaxR(),a3),e.il(A.AS,a0,e.gaJh(),a3),e.il(A.AO,"Fit Text",new C.ekf(e),a3),e.il(A.x8,"Download PDF",new C.ekh(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.il(A.kI,"Transfer",new C.eki(e),a3))
if(f!=null){w=B.a([A.ab,e.il(G.Ll,"Bold",new C.ekj(e,f),a3),e.il(G.XM,"Italic",new C.ekk(e,f),a3),e.il(G.agy,"Underline",new C.ekl(e,f),a3),e.il(Ab.Lm,"Bullets",new C.ekm(e,f),a3),e.bK8(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bHW(a3))
w.push(e.il(D.bsH,"Delete",e.gaNy(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aK6(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nH
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a5F,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bxO],v))
return new B.C(A.fM,B.jE(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eg6(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
co4(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bG
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b9:A.cl,A.r,1)
u=B.m(8)
t=B.W(A.EP,d?A.aA:A.ak,q,q,q,14)
s=B.aG(q,q,q,q,D.ajU,q,q,q,new C.ekP(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.ajL,q,q,q,new C.ekQ(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Eu,A.m4,q,q,q)},
ck5(d){switch(d.a){case 6:return O.Fe
case 7:return A.Fa
case 8:return L.ER
case 4:return A.Fi
default:return A.kG}},
bK8(d,e){var w=null,v=B.I(e?A.b9:A.cl,A.r,1),u=B.m(8),t=B.aG(w,w,w,w,D.ajU,w,w,w,new C.ehe(this,d),w,w,w,w,w,A.c7),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.ajL,w,w,w,new C.ehf(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wT,A.m4,w,w,w)},
bUO(d){var w=null
return B.B1(B.Cs(B.W(Ae.XX,d?A.af:A.bv,w,w,w,16),w,w,D.f9j,w,w,w),w,w,new C.ehM(),A.J,this.gbwb(),A.cm,"Slide layout",x.fO)},
lh(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.du:A.aK,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bk,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Mk,A.f,w,w,D.CV,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fM,B.aE(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ev(new B.C(A.h2,B.v(B.a([new B.am(A.X,w,A.a9,A.f,q,w),A.d5,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad),w)},
il(d,e,f,g){return this.lh(d,e,f,g,!1)},
b1y(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.aj:A.aX
v=B.hK(t,new C.el0(u,s,e,d),s.r.length,A.cm,t,w,new C.el1(e),!1)
s=d?A.az:A.bN
w=B.a([],x.p)
if(e&&!u.jL())w.push(new B.C(A.cm,B.GB(E.ak6,new C.el2(u),B.ng(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aJY,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bzL(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nH?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.N(u,u,u,u),new B.bI(A.b1,v,v,new B.fE(w,B.aH(v,B.cl(new C.egv(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.egw(this),v,v,v,v,v,v,!1,A.ac),v),v),v)},
bzN(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kl(a9.w))===!0,b1=b0&&C.foY(b3),b2=b0&&b3.b===D.kN&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jL())v=!b0||a7.bWW(b3)
else v=!1
if(!a7.jL())u=!b0||a7.bWV(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cd:A.bk
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fN0(b3))o=a8
else if(p&&!a7.jL())o=a7.gc36()
else o=a7.jL()?a8:new C.egj(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jo
i=w&&C.fN0(b3)&&a7.z9()?new C.egk(a7,b3):a8
h=v&&b3.b===D.cP?new C.egl(a7,b3):a8
g=u?new C.egm(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bl
else e=q?A.bU:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bU.j(0.08)
else a0=b3.b===D.kN?A.K:a8
if(b1){a1=a7.jL()?"":"Tap to sign"
a1=B.au(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bU.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bR,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.z9()
a3=b3.b===D.cP
a4=a3?a7.V5(b3):a8
a5=a3?a7.aqW(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bR,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.egn(a7,b3):a8
a3=v&&a3?new C.ego(a7,b3):a8
a6=C.aZJ(q,a4,a1,b3,a5,a2,a3,new C.egp(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aH(a8,B.p(a8,D.bAA,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.egq(a7,b3,b4,b5),a8,a8,new C.egr(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ac),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jL()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aH(a8,B.p(a8,D.bBe,A.f,a8,a8,new B.o(A.dX,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbSt(),a8,a8,a8,a8,a8,a8,!1,A.ac),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jL()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aH(a8,B.p(a8,D.bCM,A.f,a8,a8,new B.o(A.bU,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.egs(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ac),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cP)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bR,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.au(B.aH(a8,B.p(a8,D.fhr,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kC,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.egt(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ac),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aH(j,B.ey(A.A,f,new B.am(A.X,a8,A.a9,A.f,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ac),k*b5,new B.cz("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aMh(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bk:A.bH,A.r,1)
if(e)t=A.bk
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Mk,A.f,r,r,D.CV,r,12,r,r,r,r,r,12)],s))
return B.aH(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h1,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ac)},
bBJ(d,e,f,g){return this.aMh(d,e,f,g,!1)},
c2T(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.av()
v.O$=0}v=d.c
w.n(0,k,new B.ap(new B.bb(v,A.b0,A.aM),$.av()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aO
t=f?A.vX:l
if(f)s=new B.bY(new B.az(e?A.bH:A.aK,1,A.r,-1),A.Z,A.Z,A.Z)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.qR,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.af:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.aXK(e,new C.ein(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bZ:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.aq,B.D(B.aL(l,A.U,!1,l,!0,A.q,l,B.aM(),k,l,l,l,l,l,2,B.bo(l,new B.b4(4,B.m(10),A.df),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eio(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.N(12,w,12,v),l,l,l)},
aPC(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jp()
if(a2==null)return A.bG
w=new C.ehs(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dO:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.aXK(a3,a0.gbGe())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.f4A,B.D(B.kP(a1,a1,a1,u,0.05,new C.eht(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fg_,B.D(B.kP(a1,a1,a1,t,0.05,new C.ehu(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cP
if(m)o.push(B.A(B.a([D.eZN,B.D(B.kP(a1,a1,a1,96,10,new C.ehv(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.ld
if(l||n===D.kN||n===D.Q1)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.f9Y,B.D(B.kP(a1,a1,a1,s,0,new C.ehw(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fhb,B.D(B.kP(a1,a1,a1,r,0,new C.ehx(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.B7[j]
i.a=null
g=h.a
i.a=g
k.push(B.jE(a1,a1,a1,new B.x(h.b,a1,A.pQ,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ehy(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c6(A.bF,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.B2[j]
f.a=null
g=e.a
f.a=g
h.push(B.jE(a1,a1,a1,new B.x(e.b,a1,A.pQ,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ehz(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.aq,k,A.P,i,A.aq,B.c6(A.bF,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.J(v,new C.ehA(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.aq,B.c6(A.bF,l,A.bx,6,6),A.aa,B.fYS(new C.ehB(w,a2),D.ccO,B.eM([a2.as],k),!0,a1,k)],p))}if(n===D.eY){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.J(v,new C.ehC(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c6(A.bF,m,A.bx,0,6)],p))}o.push(A.aa)
o.push(B.dp(D.bCy,D.fbO,new C.ehD(a0,a5),B.bk(A.bM,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.aj,a5)
if(a5)return d
q=a3?A.cB:A.c
p=a4?A.vX:a1
if(a4)o=new B.bY(new B.az(a3?A.bH:A.aK,1,A.r,-1),A.Z,A.Z,A.Z)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.qR,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.A5,a1,a1,a1)},
bKp(d){return this.aPC(d,!1,!1,null)},
c28(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c5(p,new C.ehG(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eQ7,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.D(B.v(B.a([w,A.bB,A.d5,r.bvw(D.cFL,d,B.M(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dS(B.hl(B.aE(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ev(D.ezV,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.bU.j(0.4),A.ei,8)],p),D.akZ,A.a6),q,q,q),A.cJ,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ad),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.M(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b0W,D.b1i],v):B.a([A.c,A.k6],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a5(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aJ1(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c5(w,new C.eff(this,g,d,e,f),null)},
aeg(d,e){return this.ceq(d,e)},
ceq(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aeg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.av()
q=new B.ap(new B.bb(e,A.b0,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.ejk(d,q),p,null,!0,!0,x.N),$async$aeg)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
Oz(d){var w=d.bP()
return""+B.bF(w)+"/"+B.bP(w)+"/"+B.bx(w)}}
C.adq.prototype={}
C.awL.prototype={
S(){return new C.ba8(null,null)}}
C.ba8.prototype={
gcq8(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bF(u)+"/"+B.bP(u)+"/"+B.bx(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bj(u,A.pc,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aR()
v.d=w
w=B.bj(u,D.bhr,u,1,u,v)
w.cn(0)
v.e!==$&&B.aR()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bp5()},
HX(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cp.au(0,new B.hI(w,v,A.cp).au(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.C(D.bmZ,B.c5(new B.h1(B.a([u,w],x.dS)),new C.cX6(this),v),v),v,v,v)}}
C.bam.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aJ,A.r,1),t=x.p
return B.au(new B.C(D.bnf,B.aE(!1,A.a1,!0,w,B.p(w,B.bu(B.m(22),B.v(B.a([new B.C(D.bmr,B.v(B.a([B.p(w,D.bBk,A.f,w,w,new B.o(A.aE.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.fdG,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eRf,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e_,D.bgv,B.A(B.a([B.D(B.bJ(!1,D.f2X,w,w,!0,w,w,new C.cXs(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mL,w,A.nL,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bJ(!1,D.f7U,w,w,!0,w,w,new C.cXt(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.aE,w,w,w,w,w,A.mL,w,A.nL,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.ao),A.f,w,A6.Tn,new B.o(A.az,w,u,v,D.cG4,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad),w),w,w,w)}}
C.ID.prototype={
S(){return new C.ba7()}}
C.ba7.prototype={
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
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dS(B.db(B.aH(o,B.wf(B.dh(o,B.A(B.a([r,A.aw,new B.dl(1,A.ch,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f8:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eL,o,o,o,A.oc,o,o,1/0),A.cp,A.jk,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cX1(p,d),new C.cX2(p),new C.cX3(p),new C.cX4(p),o,o,o,!1,A.ac),k),new B.u(0,(1-k)*16))}}
C.Of.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aE(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eN,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a5(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eA,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.n3,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.en,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ad)}}
C.YZ.prototype={
S(){return new C.aCf(D.dc,null,null)}}
C.aCf.prototype={
gXi(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bh1,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b1X(d){if(!this.a.c.ay)return
this.x=d
this.gXi().ih(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.atG(D.eGh)
C.hOE()
v.PY()},
q(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.gXi().q()
v=w.z
if(v!=null)v.a8(0)
C.atG(D.eGi)
C.hOH()
w.brd()},
csT(){B.jb()
this.m(new C.em_())
var w=this.c.I(x.q).f
w.a2U()
if($.bhN)w.P(D.eD9)},
PY(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dA(0,0,0,0,0,A.o.D(C.fX2(u,w),1,120)),new C.elQ(v))},
csy(){var w,v=this
v.m(new C.elZ(v))
if(v.r)v.PY()
else{w=v.f
if(w!=null)w.a8(0)}},
gaRr(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cmT(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.m(new C.elR(w))
v=w.z
if(v!=null)v.a8(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l1,new C.elS(w))},
atJ(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a8(0)
if(u.a.c.ch){u.m(new C.elM(u))
u.PY()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaRr()){u.cmT()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.elN(u,A.o.G(w+1,s)))
u.b1X(w)
u.PY()}},
cd5(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a8(0)
v.m(new C.elO(v))
v.PY()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.elP(v,w,t))
v.b1X(w)
v.PY()}},
cog(d){var w,v=this,u=v.e
if(u===D.cf){u=v.d
u===$&&B.c()
return new B.mY(d,new B.cz(u,x.ac))}w=v.coh(u)
u=v.d
u===$&&B.c()
return B.pT(new B.mY(d,new B.cz(u,x.ac)),w,new C.elX(),A.bb,A.bb,new C.elY(v))},
coh(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bhn
case 16:return A.ky
case 18:return A.mK
default:return A.pe}},
cof(d,e,f){var w,v,u,t=null,s=B.cH(A.cp,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cV(s,!1,e,t)
case 2:case 17:w=x.K
return B.jh(e,new B.bf(s,new B.bm(A.tJ,A.J,w),w.k("bf<bG.T>")),t,!0)
case 3:w=x.K
return B.jh(e,new B.bf(s,new B.bm(A.Qh,A.J,w),w.k("bf<bG.T>")),t,!0)
case 4:case 21:w=x.K
return B.jh(e,new B.bf(s,new B.bm(A.i9,A.J,w),w.k("bf<bG.T>")),t,!0)
case 5:w=x.K
return B.jh(e,new B.bf(s,new B.bm(A.tI,A.J,w),w.k("bf<bG.T>")),t,!0)
case 6:case 16:w=x.b
return B.ie(A.A,new B.cV(s,!1,e,t),t,new B.bf(s,new B.bm(0.82,1,w),w.k("bf<bG.T>")))
case 7:w=x.b
return B.ie(A.A,new B.cV(s,!1,e,t),t,new B.bf(s,new B.bm(1.18,1,w),w.k("bf<bG.T>")))
case 8:return B.c5(s,new C.elT(s),e)
case 9:return B.c5(s,new C.elU(s),e)
case 10:return B.c5(s,new C.elV(s),e)
case 11:return B.c5(s,new C.elW(s),e)
case 12:w=x.b
return new B.cV(s,!1,B.ie(A.A,e,t,new B.bf(s,new B.bm(1.03,1,w),w.k("bf<bG.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jo(B.jh(e,new B.bf(s,new B.bm(A.tJ,A.J,v),v.k("bf<bG.T>")),t,!0),A.q,new C.boJ(w,t))
case 15:w=x.K
return B.jh(e,new B.bf(s,new B.bm(A.Qh,A.J,w),w.k("bf<bG.T>")),t,!0)
case 19:w=B.dj()
w.mk((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jj(v,u,v,1)
return B.fq(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.ey(A.A,(1-s.gp(0))*0.2,new B.cV(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jo(new C.amn(B.c5(n.gXi(),new C.em0(n,v,w),m),m),A.q,m)}else{t=B.r5(new C.HB(w,!0,!1,m))
l=B.b_(w.e)
u=n.cog(B.ef(B.jo(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.fX2(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oK,m,m,m),A.bp,D.bDA],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fN,m,m,m)
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
l.push(B.bZ(0,new C.Mc(new C.Dz(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nH?0.5625:1.7777777777777777
l.push(B.au(new B.fE(r,B.jo(B.tX(A.ah,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bhN){r=B.GB(A.kK,new C.em1(d),B.ng(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.bq(!0,B.A(B.a([r,A.ab,B.GB(B.W(n.r?Ah.xm:A.iN,m,m,m,m,m),n.gcsx(),B.ng(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ah,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.bq(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hj,m,m,m),A.f,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fN,m,m,m),!0,!1,A.ah,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.bq(!0,B.aH(A.c5,B.p(A.kV,$.bhN?A.bG:s,A.f,m,m,m,m,64,m,m,D.bi8,m,m,150),A.z,!1,m,n.gcsS(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ac),!0,!1,A.ah,!0,!0),m,m,m,0,0,m))
return B.cb(m,A.w,B.aH(m,new B.am(A.X,m,A.b_,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.em2(n,d),m,m,m,!1,A.ac),m,!1,!1,m,m)}}
C.IK.prototype={
B(d){var w=null
return B.p(w,B.bq(!0,new B.C(E.aeW,this.c,w),!0,!1,A.ah,!0,!1),A.f,w,w,D.aVb,w,w,w,w,w,w,w,w)}}
C.boJ.prototype={
iK(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jm(d){return d.b!==this.b}}
C.beY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aS4
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aD:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dh(r,B.au(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.v5,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hU,r,64,r,r,r,r,64)
return B.aH(r,new B.a4(78,r,B.v(B.a([w,A.aq,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ac)}}
C.beX.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d7R.h(0,p)
if(o==null)o=D.cWz
p=p==="none"
w=p?q:new B.a5(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aj7:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.em,q,q,52)
return B.aH(q,new B.a4(66,q,B.v(B.a([w,A.aq,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ac)}}
C.aHW.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
C.aJY.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.bus.prototype={}
C.aJZ.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aZM.prototype={}
C.Uw.prototype={
S(){return new C.aCd()},
bch(d){return this.e.$1(d)}}
C.aCd.prototype={
gb0j(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga8x(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb0j()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaKX(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb0j()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb1x(){return A.d.cG(this.ga8x(),0,new C.elw())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.Pz()},
Pz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b_m(s.c,s.f),$async$Pz)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.els(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Pz,v)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga8x()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fs9(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oK(o,q.c,q.f),$async$HZ)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eu(new C.elv(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ck(q),$async$HZ)
case 4:q=t.a
w=5
return B.b(B.oJ(q.c,q.f),$async$HZ)
case 5:w=6
return B.b(t.Pz(),$async$HZ)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
PW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hr(o,D.dKU,!0,"NgmySlidesTransferScan",x.N),$async$PW)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.elt(t))
w=4
return B.b(C.afy(s),$async$PW)
case 4:r=e
t.m(new C.elu(t))
o=J.a8(r)
if(o.gaj(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.P(D.eC2)
w=1
break}w=5
return B.b(t.a.bch(r),$async$PW)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).M(null)
q=t.c.I(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.P(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PW,v)},
HY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga8x()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oK(s,r.c,r.f),$async$HY)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fso(null,A.d.gK(n),s,t.a.f)}else q=C.fso(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.ae("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Fp(q,"ngmy_slides_"+p,!1),$async$HY)
case 4:o=e
s=t.a
w=5
return B.b(B.oJ(s.c,s.f),$async$HY)
case 5:w=6
return B.b(t.Pz(),$async$HY)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(B.b2(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HY,v)},
a0Z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.elx(t))
w=3
return B.b(C.bzJ(),$async$a0Z)
case 3:s=e
t.m(new C.ely(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.bch(s),$async$a0Z)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).M(null)
r=t.c.I(x.q).f
q=J.a8(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.P(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0Z,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.da:A.bN,k=o.ga8x().length!==0,j=B.an(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.W(A.cu,m?A.af:A.ak,n,n,n,n),n,n,n,new C.elB(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yB],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.eQ,24)],x.V)
u=B.an(n,B.W(A.pj,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bE5,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eA,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bqS],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hl(B.aH(A.c5,D.ezX,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc7Y(),n,n,n,n,n,n,!1,A.ac),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.X,n,A.a9,A.f,s,n),A.ao,n,n,new B.o(n,n,n,w,v,D.ZC,A.n),n,n,n,n,E.Wz,n,n,1/0),A.e_,o.auM(m,"What to transfer"),A.aa,B.A(B.a([B.D(o.aTD(A.pq,m,new C.elC(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aTD(D.btT,m,new C.elD(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.auM(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.m(16)
s=B.I(m?A.bH:A.aK,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c2,n,n,n))}else A.d.v(v,new B.J(u,new C.elE(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mn)
w.push(o.auM(m,"Transfer options"))
w.push(A.aa)
w.push(B.A(B.a([B.D(o.anI(A.aY,k,!0,A.j9,m,o.r,o.gc2c(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aJ2(A.jE,!0,A.iO,m,o.gcjG(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bu3(A.aT,k,A.hu,m,o.r,o.gc29(),"Download .json","Backup file"),1),A.aw,B.D(o.aJ2(A.aR,!0,As.xx,m,o.gcva(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bk.j(0.28),A.r,1)
s=B.W(A.l5,A.bk.j(0.9),n,n,n,18)
r=o.gaKX()
q=o.gb1x()
p=o.gb1x()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.A(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.af:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.bq(!0,B.v(B.a([new B.C(Ad.KZ,i,n),B.D(B.cL(w,n,D.blA,n,n,A.aj,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)],h)
if(o.f)j.push(B.p(n,T.TG,A.f,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cb(n,l,new B.am(A.X,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
adq(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hUS(s,t.d,t.e),$async$adq)
case 2:return B.h(null,v)}})
return B.i($async$adq,v)},
auM(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aTD(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.az:A.c
if(g)w=A.bk
else w=e?A.bH:A.aK
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cv,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aE(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ev(new B.C(A.bA,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ad)},
bEo(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.az:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bH:A.aK
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bEg,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a5(A.a3,A.a7,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eh:A.t4
if(p)r=A.bk
else r=e?A.b9:A.dl
return new B.C(A.cM,B.aE(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.be,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.elr(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ad),q)},
anI(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bH:A.aK
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qs,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ajF,A.f,s,s,D.aUY,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aE(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ev(new B.C(E.We,B.v(B.a([new B.am(A.X,s,A.a9,A.f,u,s),A.aa,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ad),r)},
aJ2(d,e,f,g,h,i,j){return this.anI(d,e,!1,f,g,!1,h,i,j)},
bu3(d,e,f,g,h,i,j,k){return this.anI(d,e,!1,f,g,h,i,j,k)}}
C.Ux.prototype={
S(){return new C.bhM()}}
C.bhM.prototype={
Z(){this.a0()
this.acg()},
acg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$acg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fso(null,A.d.gK(m),k,r.a.f):C.fso(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kl(A.d.gK(n).w))C.fs9(A.d.gK(r.a.d),D.cUF)
n=r.a
m=n.c
n=C.hRY(n.d)
w=7
return B.b(C.fsn(p,C.hS2(r.a.d),n,m,q),$async$acg)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.elF(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.elG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acg,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.M(d).ax.a===A.H,h=i?A.da:A.bN,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.elH())
v=B.aG(j,j,j,j,B.W(A.ez,i?A.af:A.ak,j,j,j,18),j,j,j,new C.elI(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yB],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.ZC,A.n),j,j,j,j,E.Wz,j,j,1/0)
q=B.m(24)
s=B.I(A.aY.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a4W,A.L,j,j))
else if(k.d==null)r.push(D.dUS)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.f3p,A.aq,B.aH(j,B.p(j,B.A(B.a([D.bFL,A.aw,B.d(m,j,j,j,j,j,j,D.eRC,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bJE,A.n),j,j,j,j,A_.aeI,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.elJ(k,d),j,j,j,j,j,j,!1,A.ac),A.P,D.f7s,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bH,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pq(j,j,!1,l,j,!0,!0,j,!1,D.bdi),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hk,A.L,j,j))
return B.cb(j,h,B.bq(!0,B.v(B.a([new B.C(Ad.KZ,v,j),B.D(B.ci(B.v(B.a([t,A.aN,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bLv,A.n),j,j,j,j,A.rZ,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.af0,j,j,A.aj),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),j,!1,!1,j,j)}}
C.aCa.prototype={
S(){return new C.aCb(new B.ap(A.as,$.av()),B.kc(!0,null,!0,!0,null,null,!1))}}
C.aCb.prototype={
Z(){var w=this
w.a0()
w.e.aL(0,new C.ef9(w))
$.aU.x1$.push(new C.efa(w))},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.q()
this.a1()},
aVW(){var w,v=this.c
v.toString
w=C.xW(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eC,x.w).w,i=B.m(28),h=B.I(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.tH,36),D.a8r],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bBn,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.aa,D.f0J,A.aq,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aVn,k,k,k,k,A.wS,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aZ(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bH(1,A.bo,B.dh(A.A,new B.x(p,k,D.eLt,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bY(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hU,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.HD)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.db(B.aL(k,A.U,!0,k,!0,A.q,k,B.aM(),w,k,k,k,k,k,2,D.bIt,A.z,!0,k,!0,k,!1,v,A.ag,k,k,B.a([new B.tO(B.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ax(5,k),new C.brZ()],x.aS),k,k,A.aLb,k,5,k,1,k,k,!1,"\u2022",k,new C.ef5(l),k,new C.ef6(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lJ,k,k,k,k),0),0,0,0)],a1)
d=C.xW(w.a.a.toUpperCase())==null?k:l.gc2d()
return B.au(new B.C(new B.N(24,24,24,24+j.f.d),B.aE(!1,A.a1,!0,k,new B.cZ(Aa.J_,B.p(k,B.bu(e,B.v(B.a([a0,new B.C(D.bm4,B.v(B.a([new B.am(A.X,k,A.a9,A.q,g,k),A.S,D.f_b,A.bu,new B.a4(1/0,50,B.bM(D.few,d,B.bk(A.bk,A.bj,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Z),k,k,k)),k),A.aq,B.bJ(!1,A.n5,k,k,!0,k,k,new C.ef7(a2),k,B.ft(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.ao),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ad),k),k,k,k)}}
C.brZ.prototype={
o2(d,e){var w=e.a.toUpperCase()
return e.cB6(B.h6(A.bt,w.length),w)}}
C.apd.prototype={
S(){return new C.aCe(B.ys(A.Kk,A.nc,A.tp))}}
C.aCe.prototype={
q(){this.d.q()
this.a1()},
aVV(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iJ(w,d)},
a8r(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fAN(s),$async$a8r)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aVV("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a8r,v)},
c2b(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hS0(w[u])
if(t!=null){this.aVV(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.v2,s,s,s,t.gbIq(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aG(s,s,s,s,B.W(q?A.ta:Ai.LU,s,s,s,s,s),s,s,s,new C.elL(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.ffI,s,s,s,1,s,!0)
r=B.yr(t.d,A.bQ,t.gc2a())
w=B.m(28)
w=B.au(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bk,A.r,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cb(p,A.w,new B.am(A.X,s,A.b_,A.q,B.a([r,w,B.an(32,B.p(s,D.f4o,A.f,s,s,new B.o(v,s,B.I(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j5,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bsa.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aJ,A.r,1)
return B.aE(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bzz,A.f,w,w,D.aV7,w,56,w,w,w,w,w,56),A.aN,D.ffo,A.aq,new B.k6(this.c,new C.eWW(),w,w,x.cI),A.aN,new B.k6(this.d,new C.eWX(),w,w,x.cl),A.aa,D.ffl],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Aa.J_,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,K.WG,D.bmI,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad)}}
C.a6a.prototype={
S(){return new C.bhv(A.bw)},
gd6(){return this.c}}
C.bhv.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.Yp()
w.d=B.dF(A.hc,new C.e5H(w))},
q(){var w=this.d
if(w!=null)w.a8(0)
this.a1()},
Yp(){return this.cg8()},
cg8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e5F(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bx(new B.Q(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cb7(p.c),$async$Yp)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.e5G(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Yp,v)},
bKg(d){var w,v,u=d.a,t=A.o.am(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.am(u,6e7)%60
v=A.o.am(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bG
w=s.e.a
v=A.o.am(w,6e7)<30&&A.o.am(w,36e8)<999?A.aE:A.bU
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.W(A.EP,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bKg(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.biS,A.j4,r,r,1/0)}}
C.a72.prototype={
mM(){var w,v,u,t=this
t.wx()
w=t.cx
v=t.c
w.blK(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pw(B.E(["/S",D.dYw,"/URI",new B.r2(B.V4(w.as),A.tK,!0)],x.N,u),u))}}
C.a73.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b0p.prototype={
bta(d,e,f,g,h,i,j,k,l,m){var w=B.eM([D.dWP],x.di)
this.w!==$&&B.aR()
this.w=w},
gcEg(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jG(w,new C.cdj(),B.a2(w).k("jG<cn.E,H>")).fv(0,new C.cdk())},
aA_(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h4(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.rZ(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j5(d.a,d.b))
s.n(0,"/Border",B.rZ(D.bNt))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fU(t.gcEg()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pw(w,x.Y))}}
C.cdl.prototype={}
C.a1k.prototype={}
C.agn.prototype={}
C.aOY.prototype={
fP(d){var w,v,u,t,s,r,q=this,p=null
q.kU(d)
q.KP(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bbF(w)
u=x.N
t=x.Y
s=new C.cdl(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bta(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pw(B.E(["/Type",D.dYu],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a72(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.auE.prototype={}
C.aQr.prototype={
fP(d){var w,v,u,t,s=this
s.kU(d)
w=s.b
if(w!=null){v=B.dj()
u=s.a
v.dZ(u.a,u.b,0,1)
u=d.b
u.hS()
t=s.a
t.toString
u.JZ(t)
u.R9(0)
u.on(0,v)
w.fP(d)
u.mP(0)}}}
var z=a.updateTypes(["ax<~>()","~(lt)","R(hW)","~()","R(eD)","R(o0)","R(lt)","~(hW)","R(eD,eD)","IK(Y)","R(nq)","R(l0)","ax<R>()","H(H,hW)","a1<n,@>(hW)","ak<yL>()","n(nq)","R(a6r)","n(lt)","n(vo)","R(DI)","H(hW,hW)","n(eD)","r(eD)","cI(eD)","r(hs)","~(hs)","eD(ud,O,O,O,O,H{fx:n,key:n,rotation:O})","eD(n,O,H)","H(o0,o0)","R(yL)","R(n,ak<yL>)","a1<n,@>(o0)","nq()","X4(Y)","eD(n,O,O,O,O,O{align:pC,anim:hs,bullets:R,color:H?,delay:H,fx:n,key:n,style:Gx,weight:pY})","a_i(Y)","eD(n,O,O,O,O{anim:hs,delay:H,fx:n,key:n})","ax<~>(o0)","R(ma)","X2(Y)","ZR(Y)","ZQ(Y)","O5(Y)","Ye(Y)","eD(ud,O,O,O,O,H,n,n{anim:hs,delay:H,rotation:O,stroke:H,strokeWidth:O})","eD(n,O,O,O,O,O,n,n,H)","eD(O,O,n,H{size:O})","r(qR,O,O)","l0()","o0(a1<@,@>)","~(u3)","DI()","fb(eD)","r(iT)","XM(Y)","~(Dz)","Y6(Y)","H(eD,eD)","eD(eD)","a1<n,@>(eD)","eD(a1<@,@>)","lt(lt)","a1<n,@>(lt)","lt(a1<@,@>)","R(jw)","jw()","n(hW)","~(ak<o0>)","Q(ak<hW>)","Q(hW)","ak<hW>(n?)","aaZ(Y,H)","~(R(eD,eD))","abC(Y)","adg(Y,H)","w(lt,R)","Uj(Y)","abF(Y)","Um(Y)","~(me)","hW(hW)","O(eD)","Zm(Y)","YZ(Y)","hW()","ak<E3>()","ax<~>(ak<hW>)","r(bt<H,hW>)","C(jw)","C(DI)","ax<~>(hs,~())","r(ak<hs>,hs?,~(hs),w)","R(lR)","ak<jg<me>>(Y)","jg<me>(me)","hW(a1<@,@>)","Uw(Y)","eD(n,O,O,O,O,O,H{align:pC,style:Gx,weight:pY})","Ux(Y)","r(hW)","~(lL)","HB(Y,lt,r?)","H(a73)","ax<ak<a1<n,@>>?>()","n(n)","ax<yJ>({paper:n?,photo:dB?,request:n,template!l3})","ax<a6j>({doc!yJ,history:ak<+(n,n)>,instruction!n,photo:dB?,template!l3})","abz(Y)"])
C.cAq.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.cAr.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:85}
C.cAs.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gahU(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.m_(v,t)
w.b=v-A.o.dP(q,t)
w.a=t
return q},
$S:85}
C.cAt.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bLE.prototype={
$1(d){return J.eR(A.dD.gaO(d),d.byteOffset,d.byteLength)},
$S:1666}
C.ffo.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iD(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iD(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iD(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iD(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bVQ.prototype={
$1(d){return B.a_(d,x.N,x.z)},
$S:26}
C.bVR.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aK(v,J.k(w==null?"":w))},
$S:43}
C.bVT.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fuR.prototype={
$1(d){return new C.a_i(this.a,this.b,C.hST(),null)},
$S:z+36}
C.eVo.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eVs.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eVt.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eVu.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.a7(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.eVp.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eVq.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eVr.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eVj.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hv,w,w,w)
return B.eq(B.a([B.bJ(!1,D.f2T,w,w,!0,w,w,new C.eVh(d),w,w),B.bJ(!1,D.f20,w,w,!0,w,w,new C.eVi(d),w,w)],x.p),w,w,D.Ve,v,w,w,w,w,D.ffZ,w)},
$S:19}
C.eVh.prototype={
$0(){B.a6(this.a,!1).M(!1)
return null},
$S:0}
C.eVi.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.eVk.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eVl.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eVy.prototype={
$0(){var w=this.a
return w.m(new C.eVx(w,this.b))},
$S:0}
C.eVx.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eVn.prototype={
$0(){var w=this.a
return w.m(new C.eVm(w,this.b,this.c))},
$S:0}
C.eVm.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.eVv.prototype={
$0(){return this.a.a_u(this.b)},
$S:0}
C.eVw.prototype={
$0(){return this.a.NS(0,this.b)},
$S:0}
C.eVB.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.eVC.prototype={
$0(){var w=this.a
return w.m(new C.eVA(w,this.b))},
$S:0}
C.eVA.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eVz(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eVz.prototype={
$1(d){return d.a},
$S:z+67}
C.f1A.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a_(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fUi(w.b(t.h(0,"doc"))?B.a_(w.a(t.h(0,"doc")),v,u):A.cy)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.o0(s,v,u==null?new B.Q(Date.now(),0,!1):u)},
$S:z+50}
C.f1B.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fhI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbn())q=n===o.gbn()&&p.b>o.gct()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fhG.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fhH.prototype={
$2(d,e){return e.c.aK(0,d.c)},
$S:z+29}
C.fuo.prototype={
$1(d){return d.ac()},
$S:z+32}
C.ff4.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fvc.prototype={
$1(d){return new C.X4(this.a,null)},
$S:z+34}
C.cBM.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cBO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cBR.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cBS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cBQ())},
$S:11}
C.cBQ.prototype={
$0(){},
$S:0}
C.cBT.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0g(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bi(s,new C.cBP(r))
if(p<0)q.cl(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.afH(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:294}
C.cBP.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cBU.prototype={
$1(d){},
$S:29}
C.cBN.prototype={
$1(d){return new C.X2(this.b,this.a.gcpu(),null)},
$S:z+40}
C.cBV.prototype={
$1(d){return D.fqF},
$S:z+43}
C.cBI.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.UY,A.r,1),t=x.p
return B.au(B.aE(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bmu,B.v(B.a([B.p(w,D.byD,A.f,w,w,new B.o(A.aE.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aN,D.f16,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eQF,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e_,new B.C(A.pg,B.A(B.a([B.D(B.dX(D.f7u,new C.cBG(d),B.dd(w,w,w,w,w,w,w,w,w,E.mE,w,w,A.ce,w,new B.b7(B.m(14),A.Z),D.aSu,w,w,w,w)),1),A.aw,B.D(B.bM(D.fcV,new C.cBH(d),B.bk(A.bM,w,w,w,w,w,A.ce,w,new B.b7(B.m(14),A.Z),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.w0,new B.o(D.a9V,w,u,v,D.cKj,w,A.n),w,w,w,K.WG,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad),w,w,w)},
$S:1668}
C.cBG.prototype={
$0(){B.a6(this.a,!1).M(!1)
return null},
$S:0}
C.cBH.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.cBJ.prototype={
$0(){return J.n7(this.a.d,new C.cBF(this.b))},
$S:0}
C.cBF.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cBE.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.UY,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bDt,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.akU,A.n),t,44,t,t,t,t,t,44),A.be,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aML,t,t,t),A.bB,D.fcS],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.d3h[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.avx(u[1],u[2],u[3],new C.cBC(v,d),!1,t))}q.push(A.aq)
q.push(D.bgy)
q.push(A.aq)
q.push(new C.avx(A.e8,"Delete book","Remove it from this device",new C.cBD(d),!0,t))
return B.bq(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.a9V,t,r,s,t,t,A.n),t,t,t,A.rT,E.Wk,t,t,t),!0,!1,A.ah,!0,!0)},
$S:33}
C.cBC.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).M(w)
return null},
$S:0}
C.cBD.prototype={
$0(){B.a6(this.a,!1).M("delete")
return null},
$S:0}
C.cBL.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aCU,12)],x.V)
return B.dS(B.ey(A.A,e,B.p(w,B.bu(B.m(4),new B.a4(62,95.81818181818181,B.f1(A.A,F.ame(d),A.f,A.ds),w),A.ao),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cBK.prototype={
$0(){return this.a.bYt()},
$S:0}
C.cBB.prototype={
$0(){return this.a.aUK(0,this.b)},
$S:0}
C.cBA.prototype={
$0(){return this.a.Ck(this.b)},
$S:0}
C.cBz.prototype={
$0(){return this.a.Ck(this.b)},
$S:0}
C.cBW.prototype={
$2(d,e){var w=this.a
return w.bxv(J.q(w.d,e))},
$S:42}
C.cB2.prototype={
$0(){var w=this.a
if(w.c!=null)w.A_()},
$S:0}
C.cB1.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aXn("Page "+(v.length+1),"",""))},
$S:0}
C.cB4.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cBc.prototype={
$0(){},
$S:0}
C.cBd.prototype={
$1(d){var w=this.a,v=w.a,u=$.av()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cB5.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcs().aG(this.c)},
$S:0}
C.cB3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cB7.prototype={
$0(){return this.a.P6(this.b)},
$S:0}
C.cB8.prototype={
$0(){return this.a.P6(this.b)},
$S:0}
C.cB9.prototype={
$0(){var w=this.a
w.m(new C.cB6(this.b))
w.D9()},
$S:0}
C.cB6.prototype={
$0(){return this.a.c=""},
$S:0}
C.cBb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cBa(w,d))
w.D9()},
$S:z+51}
C.cBa.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cBi.prototype={
$2(d,e){if(d)this.a.A_()},
$S:121}
C.cBe.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.A_(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.P(D.eEy)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cBf.prototype={
$0(){return this.a.aTK(this.b,-1)},
$S:0}
C.cBg.prototype={
$0(){return this.a.aTK(this.b,1)},
$S:0}
C.cBh.prototype={
$0(){return this.a.bZI(0,this.b)},
$S:0}
C.fme.prototype={
$1(d){return C.h37()},
$S:41}
C.fmf.prototype={
$1(d){return null},
$S:29}
C.f6_.prototype={
$1(d){return null},
$S:29}
C.fnd.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:317}
C.fnc.prototype={
$2(d,e){return A.o.aK(e.length,d.length)},
$S:248}
C.fnj.prototype={
$1(d){var w=this.a
return C.fMT(d)===w||C.h7z(d)===w},
$S:z+4}
C.f52.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.c5s.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmc.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fmd.prototype={
$1(d){return C.foY(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fh3.prototype={
$1(d){var w=null
return B.bq(!0,new B.C(E.wR,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f82,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dp(D.Fp,D.f2A,new C.fh1(d),B.bk(A.bU,w,w,w,A.w,w,A.ce,w,w,w,w,w)),A.S,B.ex(A.v1,D.f9d,new C.fh2(d),B.dd(w,w,w,w,w,w,w,w,w,A.af,w,w,A.ce,w,w,Q.vY,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:33}
C.fh1.prototype={
$0(){B.a6(this.a,!1).M("continue")
return null},
$S:0}
C.fh2.prototype={
$0(){B.a6(this.a,!1).M("new")
return null},
$S:0}
C.fh4.prototype={
$1(d){var w=null
return B.eq(B.a([B.bJ(!1,D.f_3,w,w,!0,w,w,new C.fh_(d),w,w),B.bM(D.ff1,new C.fh0(d),w)],x.p),w,w,w,D.fgQ,w,w,w,w,D.eZY,w)},
$S:19}
C.fh_.prototype={
$0(){B.a6(this.a,!1).M(!1)
return null},
$S:0}
C.fh0.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.e0v.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e0t.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e0u.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e0w.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e0x.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fni.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.fne.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.CV(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fng.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eRP,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:195}
C.fnh.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hR,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dS(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hR,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fnf.prototype={
$2$female$size(d,e){var w=null,v=d?D.abz:this.a,u=B.I(A.hR,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.aa9,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fyE.prototype={
$1(d){return new C.abz(this.a,this.b,null)},
$S:z+108}
C.dSU.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bdF:A.JS,q=B.I(D.iZ.j(0.25),A.r,1),p=B.au(B.p(t,t,A.f,t,t,new B.o(A.bU.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ajE,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.iZ.j(0.35),A.ei,10)],x.V),D.bM6,A.n),t,t,t,t,A.KB,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Wv,B.v(B.a([p,A.ay,B.A(B.a([o,A.be,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iZ,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eR7,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ia(!0,t,e,A.z,D.aKe,new C.dST(w,this.c),v,D.aeD,t,A.aj,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lO,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dST.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aaZ(w,new C.dSS(this.b,w),null)},
$S:z+72}
C.dSS.prototype={
$0(){B.a6(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fh7.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fh8.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wR,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fbb,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dp(D.Fp,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fh5(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ex(A.nB,D.S3,new C.fh6(d),B.dd(w,w,w,w,w,w,w,w,w,A.af,w,w,A.ce,w,w,Q.vY,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:33}
C.fh5.prototype={
$0(){B.a6(this.a,!1).M("continue")
return null},
$S:0}
C.fh6.prototype={
$0(){B.a6(this.a,!1).M("new")
return null},
$S:0}
C.fhb.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fhc.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wR,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f0_,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dp(D.Fp,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fh9(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ex(A.nB,D.S3,new C.fha(d),B.dd(w,w,w,w,w,w,w,w,w,A.af,w,w,A.ce,w,w,Q.vY,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:33}
C.fh9.prototype={
$0(){B.a6(this.a,!1).M("continue")
return null},
$S:0}
C.fha.prototype={
$0(){B.a6(this.a,!1).M("new")
return null},
$S:0}
C.fhf.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fhg.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wR,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f5X,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dp(D.Fp,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fhd(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ex(A.nB,D.S3,new C.fhe(d),B.dd(w,w,w,w,w,w,w,w,w,A.af,w,w,A.ce,w,w,Q.vY,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:33}
C.fhd.prototype={
$0(){B.a6(this.a,!1).M("continue")
return null},
$S:0}
C.fhe.prototype={
$0(){B.a6(this.a,!1).M("new")
return null},
$S:0}
C.fA6.prototype={
$1(d){return D.fu_},
$S:z+74}
C.e5K.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b6i:A.JS,s=B.I(A.au.j(0.25),A.r,1),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bFH,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.bU.j(0.35),A.ei,10)],x.V),D.akZ,A.n),v,v,v,v,A.KB,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Wv,B.v(B.a([r,A.ay,B.A(B.a([q,A.be,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.JP,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eOG,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ia(!0,v,e,A.z,D.aKe,new C.e5J(this.b),19,D.aeD,v,A.aj,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lO,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.e5J.prototype={
$2(d,e){var w=D.OY[e]
return new C.adg(w,new C.e5I(this.a,w),null)},
$S:z+75}
C.e5I.prototype={
$0(){B.a6(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fp1.prototype={
$0(){return B.fLS(C.hGs(this.a))},
$S:335}
C.fp0.prototype={
$0(){var w=C.fNa(this.a)
return"data:image/png;base64,"+A.cS.gcs().aG(w)},
$S:22}
C.f36.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j6(d,e),new B.j6(w,e+v),new B.j6(d+f*14,e),new B.j6(w,e-v)],x.J)
B.a0d(this.a,C.fw(4291404327),v)},
$S:700}
C.fAh.prototype={
$1(d){return new C.Uj(this.a,null)},
$S:z+77}
C.e91.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e90())},
$S:28}
C.e90.prototype={
$0(){},
$S:0}
C.e92.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e9_(w,d))},
$S:1673}
C.e9_.prototype={
$0(){return this.a.x=J.f8(A.dD.gaO(this.b))},
$S:0}
C.e93.prototype={
$1(d){},
$S:29}
C.e8E.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e8A.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e8L.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e8M.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.e65)},
$S:0}
C.e8N.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e8G.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bL(0,A.c3)},
$S:0}
C.e8H.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.e8I.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.e8J.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e8K.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcW(v).Q
v.toString
w.lJ(v,A.dU,A.i5)}},
$S:8}
C.e8F.prototype={
$0(){var w=this.a,v=w.z,u=C.fpF(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cAe(C.fpF(t))},
$S:0}
C.e8C.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e8D.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e8T.prototype={
$0(){return B.a6(this.a,!1).mg()},
$S:0}
C.e8U.prototype={
$0(){var w=this.a
return w.m(new C.e8S(w))},
$S:0}
C.e8S.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e8V.prototype={
$0(){var w=this.a
return w.m(new C.e8R(w,this.b))},
$S:0}
C.e8R.prototype={
$0(){var w=this.b.b
this.a.e.saT(0,w)
return w},
$S:0}
C.e8W.prototype={
$1(d){var w=this.a
return w.m(new C.e8Q(w))},
$S:9}
C.e8Q.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e8X.prototype={
$1(d){var w=this.a
return w.m(new C.e8P(w))},
$S:9}
C.e8P.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e8Y.prototype={
$0(){var w=this.a
return w.m(new C.e8O(w,this.b))},
$S:0}
C.e8O.prototype={
$0(){var w=this.b
this.a.f.saT(0,w)
return w},
$S:0}
C.e8Z.prototype={
$1(d){return this.a.Yb()},
$S:2}
C.e8B.prototype={
$0(){return this.a.c1t(this.b)},
$S:0}
C.c97.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cN(w.h(0,d))):null},
$S:383}
C.c95.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c96.prototype={
$1(d){return d.length!==0},
$S:3}
C.foC.prototype={
bgz(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bLD(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cwY($.tD().jW(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mf(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bgz(d,e)},
$S:1674}
C.fmT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmV.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dj(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:81}
C.fmU.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ig(t,t,t,t,B.dn(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pO,A.ci,t,A.eq,A.cg)
v=this.a
w.B5(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:54}
C.f2I.prototype={
$1(d){var w=A.a.fo(d,B.ae("\\s+",!0,!1,!1,!1))
return new B.a3(w,new C.f2J(),B.U(w).k("a3<1>")).gJ(0)},
$S:263}
C.f2J.prototype={
$1(d){return d.length!==0},
$S:3}
C.f2G.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:204}
C.f2H.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:204}
C.c98.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaxv()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b_(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fMS(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fJP(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gc9v(),"\n\n")
d=B.ig(a6,a6,a6,a6,B.dn(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ac5(k,q,1.28),j),A.pO,A.ci,a6,A.eq,A.cg)
d.B5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b_(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fMS(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fJP(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ac5(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.N(v,0,v,0),B.p(a6,a6,A.f,B.b_(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bH(1,A.bo,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.pO,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.axu(s,j))
i.push(new B.a4(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:420}
C.c99.prototype={
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
n=o.gaxv()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b_(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fMS(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bi,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fJP(g.length===0?B.a([a6],n):g,l))break}a1=o.ac5(i,h,1.28)
a2=new C.c9a(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.HC,new B.a4(v,a5,a4.f,a5),A.HC,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.boM,B.p(a5,a5,A.f,B.b_(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bH(1,A.bo,new B.x(l[2+a3],a5,a1,a5,A.pO,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.axu(r,g))
f.push(new B.a4(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a4(a5,q,v,a5),A.aa,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:143}
C.c9a.prototype={
$2(d,e){var w=null
return new B.a4(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pO,w,w),w)},
$S:1675}
C.fAk.prototype={
$1(d){return new C.Um(this.a,this.b,null)},
$S:z+79}
C.eac.prototype={
$1(d){return d.lX()},
$S:1676}
C.ead.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eab(w,d))},
$S:1677}
C.eab.prototype={
$0(){var w=this.b
return this.a.d=w.gff(w)},
$S:0}
C.ea_.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ea0.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ea6.prototype={
$0(){return B.a6(this.a,!1).eD()},
$S:0}
C.ea7.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.by,A.r,2.5)
return B.aH(w,B.p(w,B.b3(w,w,w,new C.b9l(u,v.gauF(),w),A.eS),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ea4(v),new C.ea5(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ac)},
$S:34}
C.ea4.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:242}
C.ea5.prototype={
$1(d){var w=this.a
w.m(new C.ea1(w,d,this.b,this.c))},
$S:220}
C.ea1.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gauF()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ea8.prototype={
$1(d){var w=this.a
return w.m(new C.ea3(w,this.b))},
$S:9}
C.ea3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ea9.prototype={
$1(d){var w=this.a
return w.m(new C.ea2(w,d))},
$S:6}
C.ea2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eaa.prototype={
$0(){return B.a6(this.b,!1).M(this.a.a.c)},
$S:0}
C.fAA.prototype={
$1(d){return D.fwN},
$S:z+83}
C.eHj.prototype={
$1(d){return this.a.WX()},
$S:8}
C.eGb.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcs().aG(v)},
$S:0}
C.eGz.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eGJ.prototype={
$1(d){return d>=this.a.length},
$S:54}
C.eFV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eFW.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eFT.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eFU.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGs.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eGt(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jo(B.r5(p>0.2?C.fEF(q,B.a3w(p,p,A.x)):q),A.q,u)],x.p)
w=s.bg
if(w>0.02){v=B.a3w(12,12,A.x)
p.push(B.jo(B.db(B.r5(C.fEF(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b2
if(r!=null&&s.aZ>0)p.push(B.ef(u,B.b_(r).j(s.aZ),!0))
r=s.b8
if(r!=null&&s.bI>0){r=B.b_(r).j(s.bI)
w=s.b8
w.toString
p.push(B.bW(u,new B.o(u,u,u,u,u,new B.bS(D.aQN,1.15,A.x,u,0,B.a([r,B.b_(w).j(0)],x.O),u,u),A.n),A.bc))}r=s.aC
if(r>0)p.push(B.bW(u,new B.o(u,u,u,u,u,new B.bS(D.aQy,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bc))
r=s.aN
if(r>0)p.push(B.bW(u,new B.o(u,u,u,u,u,new B.a5(A.b1,A.b3,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cJ_,u),A.n),A.bc))
if(s.aE>0){r=s.k1
p.push(B.an(u,B.bW(u,new B.o(u,u,u,u,u,new B.a5(A.b1,A.b3,A.x,B.a([A.w.j(0),A.w.j(s.aE),A.w.j(s.aE),A.w.j(0)],x.O),D.cTa,u),A.n),A.bc),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ef(u,A.w.j(r),!0))
r=s.b4
if(r>0)p.push(B.bW(u,new B.o(u,u,u,u,u,new B.bS(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cQv,u),A.n),A.bc))
s=s.aw
if(s>0)p.push(B.b3(u,u,u,new C.bcS(s,u),A.at))
return new B.am(A.X,u,A.b_,A.q,p,u)},
$S:63}
C.eGt.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fI(r.b,A.A,q,q,A.cn,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aTm(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aQ
u=v-1
t=o.bQ
s=o.cQ?-1:1
return B.dS(B.e8(A.A,B.ey(A.A,l,B.fq(A.A,new B.Cu(new B.y9(q,q,n,A.zo),p,q),q,B.vc(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:570}
C.eGF.prototype={
$0(){return this.a.m(new C.eGE(this.b,this.c))},
$S:0}
C.eGE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGG.prototype={
$1(d){return this.a.m(new C.eGD(this.b,d))},
$S:6}
C.eGD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGI.prototype={
$0(){return this.a.m(new C.eGH(this.b,this.c))},
$S:0}
C.eGH.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eFL.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eFM.prototype={
$1(d){var w=this.a
return w.m(w.gcqS())},
$S:2}
C.eFN.prototype={
$1(d){return this.a.m(new C.eFK())},
$S:2}
C.eFK.prototype={
$0(){},
$S:0}
C.eFO.prototype={
$0(){var w=this.a
return w.m(new C.eFJ(w,this.b))},
$S:0}
C.eFJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eFQ.prototype={
$2(d,e){return A.aw},
$S:36}
C.eFP.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b_(v.e),B.b_(v.f)],x.O),q=t?A.c:A.bH
q=B.I(q,A.r,t?2.5:1)
r=B.dh(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b_(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a5(A.b1,A.b3,A.x,r,w,w),A.n),A.hU,w,94,w,w,w,w,70)
return B.aH(w,new B.a4(70,w,B.v(B.a([r,A.ha,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eFI(u,v),w,w,w,w,w,w,!1,A.ac)},
$S:73}
C.eFI.prototype={
$0(){var w=this.a
return w.m(new C.eFF(w,this.b))},
$S:0}
C.eFF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eFR.prototype={
$1(d){var w=this.a
return w.m(new C.eFH(w,d))},
$S:9}
C.eFH.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eFS.prototype={
$1(d){var w=this.a
return w.m(new C.eFG(w,d))},
$S:9}
C.eFG.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eH8.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:54}
C.eHf.prototype={
$1(d){var w=this.a
return w.m(new C.eHg(w,d))},
$S:27}
C.eHg.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eh(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eHh.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:259}
C.eH9.prototype={
$0(){var w=this.a
return w.m(new C.eH7(w,this.b))},
$S:0}
C.eH7.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eHa.prototype={
$0(){var w=this.a
return w.m(new C.eH6(w,this.b))},
$S:0}
C.eH6.prototype={
$0(){var w,v=this.b.length,u=J.e1(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eHb.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eH5(v,w.b,w.c,w.d))},
$S:0}
C.eH5.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eHc.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gqZ(v))},
$S:0}
C.eHd.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eHe.prototype={
$0(){var w=this.a
return w.m(new C.eH4(w))},
$S:0}
C.eH4.prototype={
$0(){var w=this.a.db
return A.d.hj(w,0,w.length,0)},
$S:0}
C.eGS.prototype={
$1(d){return d.a===this.a.dy},
$S:201}
C.eGT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.asY[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aZ(9,9)
m=B.a([B.b_(v.w.e),B.b_(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.auJ(new B.nP(new B.bv(n,n,n,n),A.ao,new B.kE(new B.o(j,j,j,j,j,new B.a5(A.a3,A.a7,A.x,m,j,j),A.n),A.bc,new C.aXF(l,B.b_(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eGR(r,v),2,i))}return B.c6(A.bF,h,A.bx,7,7)},
$S:155}
C.eGR.prototype={
$0(){var w=this.b
return w.m(new C.eGM(this.a,w))},
$S:0}
C.eGM.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eGU.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:258}
C.eGX.prototype={
$0(){var w=this.a
return w.m(new C.eGQ(w))},
$S:0}
C.eGQ.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eGY.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eGZ.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eH_.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eH0.prototype={
$0(){var w=this.a
return w.m(new C.eGP(w))},
$S:0}
C.eGP.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eH1.prototype={
$0(){var w=this.a
return w.m(new C.eGO(w))},
$S:0}
C.eGO.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eH2.prototype={
$0(){var w=this.b
return w.m(new C.eGN(this.a,w))},
$S:0}
C.eGN.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eH3.prototype={
$1(d){return this.a.fx=d},
$S:258}
C.eGV.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eGW.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eGw.prototype={
$0(){var w=this.a
return w.m(new C.eGv(w))},
$S:0}
C.eGv.prototype={
$0(){var w=this.a
w.p4=null
w.b_2()},
$S:0}
C.eGx.prototype={
$0(){var w=this.a
return w.m(new C.eGu(w,this.b))},
$S:0}
C.eGu.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eGy.prototype={
$0(){var w=this.a
return w.m(w.gchL())},
$S:0}
C.eGo.prototype={
$0(){var w=this.a
return w.m(new C.eGn(w))},
$S:0}
C.eGn.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eGp.prototype={
$0(){var w=this.a
return w.m(new C.eGm(w))},
$S:0}
C.eGm.prototype={
$0(){var w=this.a
w.aE=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eGq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cQR[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aZ(9,9)
m.push(v.auJ(new B.nP(new B.bv(p,p,p,p),A.ao,new B.a4(1/0,1/0,new B.Cu(new B.y9(o,o,v.aTm(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.zo),B.fI(u,A.A,140,o,A.cn,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eGl(v,s),3,n))}return B.c6(A.bF,m,A.bx,10,8)},
$S:155}
C.eGl.prototype={
$0(){var w=this.a
return w.m(new C.eGk(w,this.b))},
$S:0}
C.eGk.prototype={
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
C.eG2.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eG3.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eG4.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eG5.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eG6.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eG7.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eG8.prototype={
$1(d){return this.a.b4=d},
$S:6}
C.eG9.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eGa.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eFo.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eFp.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eFq.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eFr.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eFs.prototype={
$0(){var w=this.a
return w.m(new C.eFn(w))},
$S:0}
C.eFn.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eFt.prototype={
$1(d){return this.a.b2=d},
$S:258}
C.eFu.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eFX.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eFY.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eFZ.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.eG_.prototype={
$1(d){return this.a.b8=d},
$S:258}
C.eG0.prototype={
$1(d){return this.a.bI=d},
$S:6}
C.eFy.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eFz.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eFA.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eFB.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eFC.prototype={
$0(){var w=this.a
return w.m(new C.eFx(w))},
$S:0}
C.eFx.prototype={
$0(){var w=this.a
return w.c4=A.k.G(w.c4+90+180,360)-180},
$S:0}
C.eFD.prototype={
$0(){var w=this.a
return w.m(new C.eFw(w))},
$S:0}
C.eFw.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eFE.prototype={
$0(){var w=this.a
return w.m(new C.eFv(w))},
$S:0}
C.eFv.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eGr.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hVv(v,w.p4)},
$S:0}
C.eGj.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bdW:B.fI(v,A.A,w,w,A.cn,A.bQ,!1,w,!1,w,w)
return C.fn0(d.length===0?"rounded":d,u,e)},
$S:137}
C.eGf.prototype={
$0(){var w=this.a
return w.m(new C.eGe(w))},
$S:0}
C.eGe.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eGg.prototype={
$0(){var w=this.b
return w.m(new C.eGd(this.a,w))},
$S:0}
C.eGd.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eGh.prototype={
$0(){var w=this.b
return w.m(new C.eGc(this.a,w))},
$S:0}
C.eGc.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eGi.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eGC.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b2.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.cbp(),n.r))
l.push(new C.HB(n.co3(),!1,!1,t))
o=B.bZ(0,B.bu(o,new B.en(new B.am(A.X,t,A.b_,A.q,l,t),n.f),A.ao),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.X,t,A.a9,A.q,B.a([o,B.an(t,B.aH(A.c5,B.bW(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bc),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eGB(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ac),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:209}
C.eGB.prototype={
$1(d){var w=this.a
return w.m(new C.eGA(w,d,this.b,this.c))},
$S:18}
C.eGA.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eGL.prototype={
$0(){var w=this.a
return w.m(new C.eGK(w,this.b))},
$S:0}
C.eGK.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eG1.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).mg()},
$S:0}
C.eHi.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a4(Math.min(s*0.4,460),t,B.v(B.a([w.aVN(),B.D(B.au(w.aYG(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aMO(),1),w.aJ3()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aVN(),new B.C(A.hD,B.au(s.aYG(u),t,t,t),t),B.D(s.aMO(),1),s.aJ3()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:739}
C.fkh.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ek(k,!1,j,A.aB,"",4280640491,i,l,m,"",h,C.bxG(),null,"","",0,!1,"",0,D.bd,4280172719,2,d,0,0,"",D.cf,D.cP,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+98}
C.fkg.prototype={
$3(d,e,f){var w=this,v=C.bxG(),u=w.b?A.I:A.cq,t=w.c?A.cC:A.bi
return C.ek(w.d,!1,f,A.aB,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bd,4280172719,2,d,0,w.f,w.e,D.cf,D.cP,0.82,0.09,w.a)},
$S:z+28}
C.cau.prototype={
$1(d){return B.t(d)},
$S:17}
C.frZ.prototype={
$0(){return this.a},
$S:z+15}
C.f9t.prototype={
$1(d){return d.a.cV(this.a)},
$S:z+30}
C.f9u.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fs0.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fs3.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fs4.prototype={
$0(){return A.d.gK(D.va)},
$S:z+33}
C.frX.prototype={
$1(d){return d.a},
$S:z+16}
C.fs_.prototype={
$1(d){return d.a},
$S:z+16}
C.fpX.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fpY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpZ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fkl.prototype={
$0(){return C.cB()},
$S:22}
C.fko.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cf,s=u?n:0
return C.ek(j,l,v,A.aB,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bd,4280172719,2,d,s,0,"",t,D.cP,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"","",A.bi,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"",j,A.bi,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,j,k,A.bi,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dc,!1,k,l,"",m,A.bi,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,j,k,"",l,A.bi,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bi,A.a4)},
$S:z+35}
C.fkn.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ek(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cf,D.eY,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fkm.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cf,t=v?j:0
return C.ek(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.bd,4280172719,2,"",t,0,"",u,D.ld,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pE,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fkk.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fmM.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h49.ce(0,A.a.i(s.w).toLowerCase(),new C.fmK(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fmL(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bt(t.e,new B.blH(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fmK.prototype={
$0(){return F.aLv(this.a.w)},
$S:196}
C.fmL.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bwA("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hw(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:196}
C.f2D.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f2E.prototype={
$1(d){return d.a},
$S:z+18}
C.f2F.prototype={
$1(d){return d.b},
$S:z+19}
C.fAM.prototype={
$1(d){return D.fx2},
$S:z+41}
C.eNi.prototype={
$0(){return this.a.x=C.hyh(this.b,this.c.b)},
$S:0}
C.eNj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eNg.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:372}
C.eNh.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:372}
C.eNf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c2(A.az,null,new C.eNa(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.vr,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aY(s,7)
if(r.length===0){n.m(new C.eNb(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h9R(o,m.cB1(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eNc(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eNa.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eNe(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aZA,A.f,p,p,D.aUS,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.B2:D.B7,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a4(64,64,C.fn0(v,i.b_D(h),u),p)))}t=B.lN(1,m,4,10,10,p,A.dO,!0)
if(!l)return B.bq(!0,new B.C(A7.Ac,t,p),!0,!1,A.ah,!0,!0)
s=new C.eNd(i,d)
m=B.aI(d,A.bR,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.FJ[e]
l.push(s.$2(r.a,r.b))}return B.bq(!0,new B.cZ(new B.aX(0,1/0,0,m.a.b*0.85),B.ci(B.v(B.a([D.f4v,A.S,t,A.e_,D.euM,A.av,D.fep,A.S,B.lN(1.15,l,3,10,10,p,A.dO,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A7.Ac,p,p,A.aj),p),!0,!1,A.ah,!0,!0)},
$S:33}
C.eNe.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b2.j(0.22):A.c.j(0.04),s=v?A.bz:A.du
return B.aH(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hr,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eN9(this.b,d),w,w,w,w,w,w,!1,A.ac)},
$S:1682}
C.eN9.prototype={
$0(){B.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.eNd.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bH
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bu(w,d.length===0?B.p(v,D.ak8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e3(new C.Mc(u.EG(d),!0,!1,v),!0,v),A.ao),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aH(v,B.v(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.af,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eN8(this.b,d),v,v,v,v,v,v,!1,A.ac)},
$S:137}
C.eN8.prototype={
$0(){B.a6(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eNb.prototype={
$0(){var w=this.a
return w.w=w.w.EG("")},
$S:0}
C.eNc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eMZ.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eN_.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eN1.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eN2.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eN3.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eN4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eN0(w,d))},
$S:2}
C.eN0.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eN5.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eNw.prototype={
$0(){return this.a.f.fw()},
$S:0}
C.eNx.prototype={
$0(){var w=this.a
return w.m(new C.eNv(w))},
$S:0}
C.eNv.prototype={
$0(){return this.a.e=null},
$S:0}
C.eNy.prototype={
$0(){var w=this.a
return w.m(new C.eNu(w))},
$S:0}
C.eNu.prototype={
$0(){return this.a.x=null},
$S:0}
C.eNA.prototype={
$1(d){var w=this.a
return w.m(new C.eNt(w,d))},
$S:32}
C.eNt.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eNB.prototype={
$1(d){var w=this.a
return w.m(new C.eNs(w,d))},
$S:32}
C.eNs.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eNC.prototype={
$0(){var w=this.a
return w.m(new C.eNr(w))},
$S:0}
C.eNr.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eND.prototype={
$1(d){var w=this.a
return w.m(new C.eNq(w,d))},
$S:32}
C.eNq.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eNE.prototype={
$1(d){var w=this.a
return w.m(new C.eNp(w,d))},
$S:32}
C.eNp.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eNF.prototype={
$0(){var w=this.a
return w.m(new C.eNo(w))},
$S:0}
C.eNo.prototype={
$0(){var w=this.a
return w.w=w.w.EG("")},
$S:0}
C.eNG.prototype={
$0(){var w=this.a
return w.m(new C.eNn(w,this.b))},
$S:0}
C.eNn.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eNH.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a4(u,null,w.bIZ(D.a0e[v]),null))
return B.c6(A.bF,t,A.bx,8,8)},
$S:155}
C.eNz.prototype={
$1(d){var w=this.a
return w.m(new C.eNm(w,d))},
$S:9}
C.eNm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eN6.prototype={
$0(){var w=this.a
return w.m(new C.eN7(w,this.b,this.c))},
$S:0}
C.eN7.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eNl.prototype={
$0(){var w=this.a
return w.m(new C.eNk(w,this.b))},
$S:0}
C.eNk.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fAL.prototype={
$1(d){return new C.ZQ(this.a,this.b,null)},
$S:z+42}
C.eMS.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eMT.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eMU.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aCl?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eMV.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eMW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eMR(w,d))},
$S:2}
C.eMR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eMX.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eMY.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.ao(w,0,w.length-1)
this.a.d.bL(0,new B.bb(w,B.h6(A.bt,w.length),A.aM))},
$S:0}
C.f8J.prototype={
$1(d){return d.a===this.a},
$S:201}
C.e59.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gauK(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cDp:D.cSW
t=D.wx.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.wx.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bf3(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bZ(0,B.bLU(B.ey(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a5(A.a3,A.a7,A.x,B.a([A.K,D.b4R.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.X,q,A.a9,A.q,B.a([n,o,B.au(B.v(B.a([B.W(p.a.c?A.eh:A.lz,D.wx,q,q,q,20),A.av,B.f1(A.A,B.nv(A.je,D.eZt,new C.e58()),A.f,A.ec)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.an(q,B.p(q,D.eWh,A.f,q,q,new B.o(D.wx,q,q,B.m(6),q,q,A.n),q,q,q,q,L.afg,q,q,q),q,q,q,4,4,q)],r),q),A.ao),A.f,q,q,new B.o(q,q,t,w,v,new B.a5(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.e58.prototype={
$1(d){return D.bKp.av(0,d)},
$S:65}
C.fs5.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fs6.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:201}
C.fs7.prototype={
$2(d,e){return A.o.aK(e.a.length,d.a.length)},
$S:1683}
C.fs8.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fs1.prototype={
$1(d){return d.a},
$S:z+18}
C.fs2.prototype={
$1(d){return d.b},
$S:z+19}
C.fzZ.prototype={
$1(d){return new C.Ye(this.a,this.b,null)},
$S:z+44}
C.ddU.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ddV.prototype={
$1(d){return d.a===this.a.gagi()},
$S:z+10}
C.ddW.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.ddZ.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.de_.prototype={
$0(){var w=this.a
return w.m(new C.ddY(w,this.b))},
$S:0}
C.ddY.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.de0.prototype={
$1(d){var w=this.a
return w.m(new C.ddX(w,d))},
$S:9}
C.ddX.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e57.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fB(w,this.a)
return B.d9(w,0,B.dI(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f_a.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ek(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eY,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cf,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f_c.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ek(A.L,!1,this.b.d,A.aB,"",4280640491,i,A.bi,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bd,4280172719,2,d,l,0,"",D.mk,D.cP,g,e,f)},
$S:z+46}
C.f_b.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vU(0,"twinkle")
w=t===D.bd?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mk,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f_9.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fls.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.flt.prototype={
$0(){return A.d.gK(D.FS)},
$S:z+49}
C.flu.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f18.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fry.prototype={
$1(d){var w=2450411,v=4281908728
C.ds(d,C.dt(4280171146,1,0,D.bd,w,0,0.52,0,0))
C.ds(d,C.dt(v,1,0,D.bd,w,0,0.04,0.48,0))
C.ds(d,C.dt(4294047225,0.38,0,D.bd,w,0,0.48,0.52,0.62))
C.ds(d,C.dt(v,0.006,0,D.fm,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frz.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.ds(d,C.dt(4280172719,0.8,0,D.bd,w,0,0.36,0.58,0.1))
C.ds(d,C.dt(v,0.64,0,D.bd,w,0,0.28,0.64,0.18))
C.ds(d,C.dt(4282090230,0.44,0,D.bd,w,0,0.2,0.7,0.28))
C.ds(d,C.dt(v,0.006,0,D.fm,v,3,0.22,0.08,0.12))
C.ds(d,C.dt(u,0.004,0,D.fm,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.frA.prototype={
$1(d){var w=2450411,v=4279548070
C.ds(d,C.dt(4279080072,0.11,0,D.bd,w,0,1,0,0))
C.ds(d,C.dt(4279310375,0.11,0,D.bd,w,0,1,0,0.89))
C.ds(d,C.dt(856528008,0.72,0,D.jw,w,0,0.28,0.72,0.14))
C.ds(d,C.dt(1426953352,0.2,0,D.jw,w,0,0.2,0.78,0.22))
C.ds(d,C.dt(v,0.004,0,D.fm,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.frL.prototype={
$1(d){var w=2450411
C.ds(d,C.dt(4279203438,0.55,0,D.jw,w,0,0.5,0.55,-0.05))
C.ds(d,C.dt(4280171146,0.5,0,D.jw,w,0,0.45,0.62,0.35))
C.ds(d,C.dt(4280640491,0.4,0.3,D.jv,w,0,0.35,0.68,0.55))
C.ds(d,C.dt(571438702,0.12,0,D.bd,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.frQ.prototype={
$1(d){var w=4280472558
C.ds(d,C.dt(4279310375,0.75,-0.4,D.jv,2450411,0,0.75,-0.15,0.35))
C.ds(d,C.dt(w,0.55,0,D.bd,2450411,0,0.06,0.42,0.38))
C.ds(d,C.dt(w,0.006,0,D.fm,w,3,0.35,0.08,0.08))
C.ds(d,C.dt(2282478,0.12,0,D.bd,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frR.prototype={
$1(d){var w=2450411,v=4280640491
C.ds(d,C.dt(3423541034,0.48,0,D.bd,w,0,1,0,0))
C.ds(d,C.dt(v,0.12,-0.08,D.jw,w,0,1.1,-0.05,0.38))
C.ds(d,C.dt(858088427,0.35,0,D.bd,w,0,0.42,0.55,0.05))
C.ds(d,C.dt(v,0.006,0,D.fm,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.frS.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cCt[w]
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eD("design_"+(""+1000*u+"_"+t),D.eY,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.bd,v,4294967295,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.Jh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cl(d.z,0,v)}C.ds(d,C.dt(s,0.006,0,D.fm,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.frT.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.lX,A.dy,w/3).l()
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eD("design_"+(""+1000*u+"_"+t),D.eY,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.BH,v,2450411,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.Jh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cl(d.z,0,v)}C.ds(d,C.dt(s,0.006,0,D.fm,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.frU.prototype={
$1(d){var w=4294967295
C.ds(d,C.dt(4280640491,1,0,D.bd,2450411,0,0.42,0,0))
C.ds(d,C.dt(4280110808,1.1,1.57,D.jv,2450411,0,0.18,0.35,-0.05))
C.ds(d,C.dt(w,0.006,0,D.fm,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frV.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.ds(d,C.dt(w,0.1,0,D.bd,v,0,1,0,0))
C.ds(d,C.dt(u,0.012,0,D.bd,v,0,1,0,0.1))
C.ds(d,C.dt(u,0.006,0,D.fm,u,3,0.42,0.06,0.14))
C.ds(d,C.dt(403446057,0.68,0,D.jw,v,0,0.22,0.72,0.18))
C.ds(d,C.dt(w,0.1,0,D.bd,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frW.prototype={
$1(d){var w=4278630100
C.ds(d,C.dt(4279310375,1.2,0.15,D.jw,2450411,0,0.55,-0.2,-0.1))
C.ds(d,C.dt(w,1.1,0.15,D.bd,2450411,0,0.08,0.15,-0.05))
C.ds(d,C.dt(1120295,0.18,0,D.bd,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frB.prototype={
$1(d){var w=4292617766
C.ds(d,C.dt(4282714634,0.65,-0.2,D.jv,2450411,0,0.65,-0.1,0.45))
C.ds(d,C.dt(w,0.5,-0.15,D.jv,2450411,0,0.5,0.05,0.55))
C.ds(d,C.dt(w,0.006,0,D.fm,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.frC.prototype={
$1(d){var w=2450411
C.ds(d,C.dt(4278413729,0.35,3.14,D.jv,w,0,0.45,-0.05,0.7))
C.ds(d,C.dt(4278355143,0.3,3.14,D.jv,w,0,0.4,0.25,0.75))
C.ds(d,C.dt(4279150057,0.32,3.14,D.jv,w,0,0.5,0.55,0.72))
C.ds(d,C.dt(863884284,0.22,0,D.eG,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.frD.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.ds(d,C.dt(w,0.14,0,D.bd,v,0,0.14,0.02,0.02))
C.ds(d,C.dt(2282478,0.14,0,D.bd,u,3,0.14,0.84,0.02))
C.ds(d,C.dt(w,0.28,0,D.jw,v,0,0.35,-0.08,0.78))
C.ds(d,C.dt(u,0.22,0.5,D.jv,v,0,0.3,0.72,0.78))
C.ds(d,C.dt(w,0.006,0,D.fm,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.frE.prototype={
$1(d){var w=4293571336,v=1156231944
C.ds(d,C.dt(1841431,0.92,0,D.bd,w,3,0.92,0.04,0.04))
C.ds(d,C.dt(v,0.15,0,D.jv,2450411,0,0.15,0.02,0.02))
C.ds(d,C.dt(v,0.15,3.14,D.jv,2450411,0,0.15,0.83,0.83))
C.ds(d,C.dt(w,0.004,0,D.fm,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.frF.prototype={
$1(d){var w=4279080072,v=2450411
C.ds(d,C.dt(w,0.14,0,D.kO,v,0,0.14,0.68,0.18))
C.ds(d,C.dt(4279548070,0.14,0,D.kO,v,0,0.14,0.78,0.28))
C.ds(d,C.dt(4281193663,0.14,0,D.kO,v,0,0.14,0.68,0.38))
C.ds(d,C.dt(4284410580,0.14,0,D.kO,v,0,0.14,0.78,0.48))
C.ds(d,C.dt(4279203438,0.14,0,D.kO,v,0,0.14,0.68,0.58))
C.ds(d,C.dt(w,0.006,0,D.fm,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.frG.prototype={
$1(d){var w=2450411,v=4280640491
C.ds(d,C.dt(3708753706,0.42,0,D.bd,w,0,1,0,0))
C.ds(d,C.dt(v,0.06,-0.05,D.jw,w,0,1,0,0.38))
C.ds(d,C.dt(859356664,0.25,0,D.eG,w,0,0.25,0.7,0.08))
C.ds(d,C.dt(v,0.006,0,D.fm,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.frH.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.lX,A.dy,w/3).l()
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eD("design_"+(""+1000*u+"_"+t),D.eY,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.BH,v,2450411,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.Jh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cl(d.z,0,v)}C.ds(d,C.dt(4280172719,0.08,0,D.bd,2450411,0,1,0,0))
C.ds(d,C.dt(s,0.006,0,D.fm,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.frI.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iV
$.iV=u+1
u=new C.eD("design_"+(""+1000*v+"_"+u),D.eY,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bi,A.aB,s,A.bg,null,D.fm,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.Jh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cl(d.z,0,u)}C.ds(d,C.dt(s,0.75,0,D.bd,2450411,0,0.22,0.72,0.1))
C.ds(d,C.dt(872415231,0.16,0,D.bd,2450411,0,0.16,0.75,0.15))
C.ds(d,C.dt(s,0.006,0,D.fm,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frJ.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.ds(d,C.dt(4674921,0.9,0,D.bd,4287931320,2,0.9,0.05,0.05))
C.ds(d,C.dt(w,0.08,0,D.bd,v,0,0.08,0.03,0.03))
C.ds(d,C.dt(u,0.08,0,D.bd,v,0,0.08,0.89,0.03))
C.ds(d,C.dt(u,0.08,0,D.bd,v,0,0.08,0.03,0.89))
C.ds(d,C.dt(w,0.08,0,D.bd,v,0,0.08,0.89,0.89))
C.ds(d,C.dt(w,0.004,0,D.fm,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.frK.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iV
$.iV=t+1
t=new C.eD("design_"+(""+1000*u+"_"+t),D.eY,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bi,A.aB,r,A.bg,null,D.bd,4294967295,4280640491,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.Jh
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cl(d.z,0,t)
u=B.ar(A.dm,A.cw,w/2).l()
t=Date.now()
s=$.iV
$.iV=s+1
u=new C.eD("design_"+(""+1000*t+"_"+s),D.eY,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bi,A.aB,r,A.bg,null,D.bd,u,q,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.Jh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cl(d.z,0,u)}C.ds(d,C.dt(4280171146,1,0,D.bd,q,0,0.48,0,0))
C.ds(d,C.dt(4280172719,1.1,1.57,D.jv,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.frM.prototype={
$1(d){var w=2450411
C.ds(d,C.dt(870995980,0.55,0.45,D.jw,w,0,0.55,-0.12,-0.08))
C.ds(d,C.dt(856996006,0.45,0.45,D.jw,w,0,0.45,0.62,-0.05))
C.ds(d,C.dt(16777215,0.38,0.45,D.jw,4293548044,5,0.38,0.52,0.12))
C.ds(d,C.dt(585783308,0.3,0.45,D.jw,w,0,0.3,0.56,0.16))
C.ds(d,C.dt(4279548070,0.06,0,D.bd,w,0,0.16,0.38,0.04))
C.ds(d,C.dt(1156208652,0.28,0,D.eG,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.frN.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.ds(d,C.dt(w,1,0,D.bd,v,0,0.07,0,0))
C.ds(d,C.dt(u,0.1,0,D.bd,t,1,0.46,0.48,0.14))
C.ds(d,C.dt(u,0.1,0,D.bd,t,1,0.46,0.48,0.28))
C.ds(d,C.dt(u,0.1,0,D.bd,t,1,0.46,0.48,0.42))
C.ds(d,C.dt(s,0.08,0,D.eG,v,0,0.08,0.5,0.16))
C.ds(d,C.dt(w,0.08,0,D.eG,v,0,0.08,0.5,0.3))
C.ds(d,C.dt(4279548070,0.08,0,D.eG,v,0,0.08,0.5,0.44))
C.ds(d,C.dt(16777215,0.32,0.45,D.jw,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.frO.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.ds(d,C.dt(4294047225,0.08,0,D.bd,t,2,0.1,0.02,0.06))
C.ds(d,C.dt(s,0.42,0,D.bd,2450411,0,0.36,0.58,0.18))
C.ds(d,C.dt(872415231,0.12,0,D.bd,2450411,0,0.28,0.62,0.24))
C.ds(d,C.dt(16777215,0.28,0,D.eG,s,4,0.32,0,0.72))
C.ds(d,C.dt(r,0.006,0,D.fm,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iV
$.iV=u+1
u=new C.eD("design_"+(""+1000*v+"_"+u),D.eY,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.eG,16777215,t,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.Jh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cl(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.frP.prototype={
$1(d){var w=2450411,v=4279548070
C.ds(d,C.dt(3423541034,0.55,0,D.bd,w,0,1,0,0))
C.ds(d,C.dt(4009754623,0.56,0.45,D.jw,w,0,0.56,0.22,0.18))
C.ds(d,C.dt(3439329279,0.44,0.45,D.jw,w,0,0.44,0.28,0.24))
C.ds(d,C.dt(v,0.07,0,D.bd,w,0,0.22,0.34,0.62))
C.ds(d,C.dt(v,1,0,D.bd,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fji.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fjj.prototype={
$0(){return A.d.gK($.bBg())},
$S:z+52}
C.f8w.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f8v.prototype={
$1(d){return C.hFq(d,this.a,this.b)},
$S:z+53}
C.fse.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vc(1.0375,1.01875,1)
return new B.fL(v,u,new C.aQr(B.hvj(A.u9,C.hFt(w.c,w.d,v,u),t)))},
$S:364}
C.dOE.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dOD.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bW(w,new B.o(w,w,w,w,w,new B.bS(A.IE,1.2,A.x,w,0,u.d,w,w),A.n),A.bc),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jo(new B.am(A.X,w,A.b_,A.q,B.a([t,new B.en(B.b3(w,w,w,new C.bbY(u.a,r,q,r),A.at),w),B.au(new B.k6(r,new C.dOC(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:346}
C.dOC.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.au(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hQ(B.fI(i,A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),A.ao),A.f,r,r,new B.o(r,r,r,r,u,new B.fP(A.A,0,6.283185307179586,A.x,t,r,new B.m5(e*0.8)),A.a6),r,w,r,r,new B.N(v,v,v,v),r,r,w),new B.a4(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bol(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cO(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a4(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dS(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a5(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a4(r,m*0.022,r,r),B.d(w.a.c.gaHC(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.e8(A.A,new B.C(new B.N(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eM5.prototype={
$1(d){var w=this.b
return new B.a5(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c53.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bH
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hz.j(0.4),A.J,14)],x.V):v
w=B.dh(v,B.bu(B.m(12),d,A.ao),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eL,v,72,v,v,v,v,v)
return B.aH(v,new B.a4(112,v,B.v(B.a([w,A.ha,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.af,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ac)},
$S:1685}
C.c54.prototype={
$0(){var w=this.a
return w.d.$1(w.c.EG(""))},
$S:0}
C.c55.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e3(new C.Mc(v.EG(u),!0,!1,null),!0,null),d.b,new C.c56(w,this.c,d),v.a===u)},
$S:z+54}
C.c56.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h9R(u.b,t.c.EG(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fyo.prototype={
$1(d){return new C.XM(this.a,null)},
$S:z+55}
C.d37.prototype={
$0(){var w=this.a
w.d=w.gv0().b7o("data:"+this.b+";base64,"+A.cS.gcs().aG(this.c));++w.r},
$S:0}
C.d3c.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.d3d.prototype={
$0(){var w=this.a
return w.m(new C.d3b(w))},
$S:0}
C.d3b.prototype={
$0(){return this.a.r++},
$S:0}
C.d3e.prototype={
$1(d){var w=this.a
return w.m(new C.d3a(w,d))},
$S:2}
C.d3a.prototype={
$0(){var w=this.a
return w.d=w.gv0().aAQ(this.b)},
$S:0}
C.d3f.prototype={
$0(){var w=this.a
return w.m(new C.d39(w))},
$S:0}
C.d39.prototype={
$0(){var w=this.a
return w.d=w.gv0().b7o("")},
$S:0}
C.d3g.prototype={
$1(d){var w=this.a
return w.m(new C.d38(w,d))},
$S:2}
C.d38.prototype={
$0(){var w=this.a
return w.d=w.gv0().b7v(this.b)},
$S:0}
C.d3h.prototype={
$0(){var w=this.a
w=w.gv0().b7v(w.gauL().a.a)
B.a6(this.b,!1).M(w)
return null},
$S:0}
C.fyn.prototype={
$1(d){var w={}
w.a=this.a
return new B.e7(new C.fym(w),null)},
$S:21}
C.fym.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bq(!0,new B.cZ(new B.aX(0,1/0,0,B.aI(d,A.bR,x.w).w.a.b*0.85),B.ci(B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.fbN,A.av,D.fc0,A.ay,new C.aXC(v.a,new C.fyl(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.aj),w),!0,!1,A.ah,!0,!1),A.f,w,w,D.aVo,w,w,w,w,A.KJ,w,w,w)},
$S:184}
C.fyl.prototype={
$1(d){this.b.$1(new C.fyk(this.a,d))
B.a6(this.c,!1).M(d)},
$S:z+56}
C.fyk.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fAK.prototype={
$1(d){return D.fsP},
$S:z+57}
C.d9T.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.d9U.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).M(this.b)
return null},
$S:0}
C.d9V.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).M(v)}},
$S:0}
C.foV.prototype={
$1(d){var w=this.b
return new B.a5(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d2P.prototype={
$3(d,e,f){var w,v=this,u=new B.aP($.V().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cR(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cR(w,q+p,w,q+p*1.2))
u.E(new B.Cb(B.bT(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aM(u,v.d)
s.aM(u,v.e)
p=B.L()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:709}
C.foZ.prototype={
$2(d,e){return A.k.aK(d.c,e.c)},
$S:z+58}
C.fhj.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fhk.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.wR,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eWx,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dp(D.Fp,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fhh(d),B.bk(A.bU,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ex(A.nB,D.S3,new C.fhi(d),B.dd(w,w,w,w,w,w,w,w,w,A.af,w,w,A.ce,w,w,Q.vY,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:33}
C.fhh.prototype={
$0(){B.a6(this.a,!1).M("continue")
return null},
$S:0}
C.fhi.prototype={
$0(){B.a6(this.a,!1).M("new")
return null},
$S:0}
C.cas.prototype={
$1(d){return d.ht()},
$S:z+59}
C.cat.prototype={
$1(d){return d.ac()},
$S:z+60}
C.car.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a_(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a4.gdC(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hBj(b2.h(0,"type"))
t=B.aN(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aN(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aN(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aN(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aN(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.auE[A.o.D(b4,0,8)]
m=D.cFa[A.o.D(w,0,1)]
l=C.hEV(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.arv[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hHE(b2.h(0,"shape"))
g=B.aN(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aN(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aN(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aN(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aN(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.h5c(b2.h(0,"textTransition"))
a4=B.aN(b2.h(0,"textAnimDelayMs"))
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
b0=J.y(b2.h(0,"rich"),!0)
b2=B.aN(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ek(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cah.prototype={
$1(d){return d.ht()},
$S:z+62}
C.cai.prototype={
$1(d){return d.ac()},
$S:z+63}
C.cae.prototype={
$1(d){return B.t(d)},
$S:17}
C.caf.prototype={
$1(d){return B.t(d)},
$S:17}
C.cag.prototype={
$1(d){return C.fX3(B.a_(d,x.N,x.z))},
$S:z+64}
C.caJ.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.caK.prototype={
$0(){return A.d.gK(D.a_U)},
$S:z+66}
C.caE.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.n(0,u,d.ht())},
$S:z+7}
C.caD.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.caz.prototype={
$1(d){return new B.J(d,new C.caA(),B.U(d).k("J<1,Q>")).fv(0,new C.caB())},
$S:z+69}
C.caA.prototype={
$1(d){return d.f},
$S:z+70}
C.caB.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:714}
C.caC.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hrb(d)},
$S:z+71}
C.caF.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.caG.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.caH.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fpx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.al(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fpt.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fpu.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fpv.prototype={
$2(d,e){var w
if(d.b===D.cP){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fpw.prototype={
$2(d,e){return d.b===D.eY&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.can.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hQj(b2,b3),b5=B.a2(b4).k("bc<2>")
b5=B.cC(new B.bc(b4,b5),new C.cam(),b5.k("G.E"),x.N)
w=B.d8(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.p8.au(0,A.k.D(b1,0,1))
u=new C.cao()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cap(a9,b7.d)
r=new C.caq(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jG.au(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kL(A.k.D(1-k,0,1),B.dS(B.e8(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eY){a4=i.ht()
a4.ay=B.ar(B.b_(l.ay),B.b_(i.ay),v).l()
a4.ch=B.ar(B.b_(l.ch),B.b_(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.ld&&l.at==i.at?r.$1(i):new B.am(A.X,a8,A.b_,A.q,B.a([new B.kL(A.k.D(o,0,1),r.$1(l),a8),new B.kL(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iB(B.vG(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cf)a7=D.mk
p.push(s.$5(i.c,i.d,i.e,i.f,C.h7o(a7,a6,r.$1(i))))}}return B.bW(new B.am(A.X,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a5(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bc)},
$S:357}
C.cam.prototype={
$1(d){return d.a},
$S:z+22}
C.cao.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b_(w)},
$S:z+76}
C.cap.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.caq.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a69(v,C.aZJ(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dBv.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e8(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.caw.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cax.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fsl.prototype={
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
C.frs.prototype={
$1(d){return new C.abF(this.a,this.b,null)},
$S:z+78}
C.efb.prototype={
$0(){return this.a.Oy(this.b,C.hTD(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.efc.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Oy(this.b,C.hTF(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.efd.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Oy(this.b,C.hTE(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.efe.prototype={
$0(){X.h78()
B.a6(this.a,!1).M(null)},
$S:0}
C.cal.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cak.prototype={
$2(d,e){var w,v=this,u=null,t=B.dK(d,A.n7),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lD(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.ds
return B.fI(t,A.A,o,new C.caj(),A.cn,w,!0,u,!1,new B.cz("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.caj.prototype={
$3(d,e,f){return D.a8X},
$S:221}
C.fps.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b_(r.e)
v=r.f
v.toString
v=new B.a5(A.ax,A.aC,A.x,B.a([w,B.b_(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b_(r.e):t
r=r.z
r=B.d9(r,0,B.dI(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cI>")
r=B.B(new B.J(r,new C.fpr(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bW(new B.am(A.X,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bc),A.ao)},
$S:1692}
C.fpr.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aZJ(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.faP.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.faN(d))
w=B.aI(d,A.bR,x.w).w
v=B.m(22)
u=B.I(A.bH,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fG,28)],x.V)
s=x.p
return new B.cV(e,!1,B.au(B.aE(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kS,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bJ(!1,A.yM,q,q,!0,q,q,new C.faO(p,d),q,B.ft(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Eg,q,new B.b7(B.m(12),A.Z),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fC,A.Eo,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ad),q,q,q),q)},
$C:"$3",
$R:3,
$S:249}
C.faN.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).oY())B.a6(w,!0).eD()},
$S:0}
C.faO.prototype={
$0(){var w=this.a.a
if(w!=null)w.a8(0)
B.a6(this.b,!0).eD()},
$S:0}
C.eUu.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dS(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dS(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dS(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dS(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e8(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e8(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dj()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fm(r*3.14159)
return B.fq(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dj()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jA(r*3.14159)
return B.fq(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dj()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fm(r*1.2)
s.jA(r*0.5)
return B.fq(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dj()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fm(-r*1.4)
return B.fq(A.a7,B.db(u.b,r),t,s,!0)
case 12:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.db(B.e8(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.jo(u.b,A.q,new C.aHe(r,t))],x.p),t)
case 15:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.jo(u.b,A.q,new C.aHe(1-r,t))],x.p),t)
case 16:v=D.aYC.au(0,r)
return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e8(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.db(B.ef(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dj()
s.mk(r*6.28)
s.jj(r,r,r,1)
return B.fq(A.A,u.b,t,s,!0)
case 20:return B.ey(A.A,(r-0.5)*0.35,new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:59}
C.dMR.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dMQ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dMP.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h7o(v,w,e)},
$S:59}
C.cad.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b_(v.e)
t=v.f
t.toString
t=new B.a5(A.a3,A.a7,A.x,B.a([u,B.b_(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b_(v.e):r
v=v.z
s=B.U(v).k("J<1,cI>")
q=B.B(new B.J(v,new C.cac(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bW(new B.am(A.X,r,A.a9,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bc)},
$S:357}
C.cac.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cf?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a69(m,new C.Ty(d,C.aZJ(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d03.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d02(w))},
$S:11}
C.d02.prototype={
$0(){return this.a.d++},
$S:0}
C.e4Q.prototype={
$2(d,e){var w,v=null,u=A.o.am(this.b.e.a,1000),t=A.o.G(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aJh.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hQ2(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dj()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fm(Math.sin(t)*0.32)
s.jA(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jj(w,w,w,1)
return B.fq(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dS(B.e8(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.e8(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eJL.prototype={
$1(d){var w
$.V()
w=B.L()
w.b=A.ae
w.c=d
w.e=A.fw
return w},
$S:1693}
C.fn1.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge9()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.boe(u,t,r),A.at))
w.push(B.na(s.d,A.ao,new C.bcu(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bng(u,q,t,r),A.at))
return B.au(new B.a4(v.a,v.b,new B.am(A.X,r,A.b_,A.q,w,r),r),r,r,r)},
$S:261}
C.fdG.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:317}
C.elp.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.BY(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gaj(s)){u=null
w=1
break}u=r.dH(s,new C.eln(),new C.elo(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.eln.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:185}
C.elo.prototype={
$0(){return J.fm(this.a)},
$S:1696}
C.ehN.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ehO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ehP.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ejn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ejb.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ejc.prototype={
$1(d){return d.ht()},
$S:z+81}
C.eha.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ekv.prototype={
$0(){this.a.rW()},
$S:0}
C.ell.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nJ()
w.J3()},
$S:0}
C.ejl.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nJ()
w.J3()},
$S:0}
C.el8.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.el9.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.ela.prototype={
$1(d){return d.a},
$S:z+22}
C.elb.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bb(w,A.b0,A.aM),$.av())},
$S:256}
C.elc.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:719}
C.egz.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.elm.prototype={
$0(){},
$S:0}
C.eiu.prototype={
$0(){var w=this.a
w.e=this.b.ht()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wM()
w.J3()},
$S:0}
C.egx.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wM()},
$S:0}
C.egy.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wM()},
$S:0}
C.eiR.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eiS.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wM()
w.J3()
w.z="Home"},
$S:0}
C.eiT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eit.prototype={
$1(d){var w=null
return B.eq(B.a([B.bJ(!1,A.S2,w,w,!0,w,w,new C.eis(d),w,w)],x.p),w,w,w,D.fdm,w,w,w,w,D.eWY,w)},
$S:19}
C.eis.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.eiq.prototype={
$1(d){var w=null
return B.eq(B.a([B.bJ(!1,A.S2,w,w,!0,w,w,new C.eip(d),w,w)],x.p),w,w,w,D.f_I,w,w,w,w,D.eYC,w)},
$S:19}
C.eip.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.eir.prototype={
$0(){},
$S:0}
C.ehJ.prototype={
$1(d){return this.a.aX4(C.bzi(d))},
$S:z+7}
C.ehK.prototype={
$1(d){return this.a.acU(C.bzi(d))},
$S:z+7}
C.eiA.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b9,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fdq,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.Of(A.uQ,D.asQ,"HATI YA KUHOWA","Hati ya mahari",new C.eiv(d),w),A.S,new C.Of(A.h4,D.cQS,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eiw(d),w),A.S,new C.Of(A.hW,D.cDt,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eix(d),w),A.S,new C.Of(A.hF,D.cBR,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eiy(d),w)],v)
if(this.a.ga9w())A.d.v(u,B.a([A.S,new C.Of(A.iP,D.cn3,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eiz(d),w)],v))
return B.bq(!0,B.ci(B.v(u,A.ai,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,E.wR,w,w,A.aj),!0,!1,A.ah,!0,!0)},
$S:33}
C.eiv.prototype={
$0(){B.a6(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.eiw.prototype={
$0(){B.a6(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.eix.prototype={
$0(){B.a6(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.eiy.prototype={
$0(){B.a6(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.eiz.prototype={
$0(){B.a6(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.eiB.prototype={
$0(){var w=this.a
w.e=this.b.ht()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wM()},
$S:0}
C.egB.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.egC.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a7(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mL(r,v.f+1,q);++v.f
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
C.eiM.prototype={
$1(d){return d.b===D.ld},
$S:z+4}
C.eiN.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.e7(new C.eiK(w,this.a,v),null)},
$S:21}
C.eiK.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eiL(p,o,a3,n),l=B.M(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.ak,i=l?A.bj:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bH:A.aK,A.r,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aG(q,q,q,q,B.W(A.cu,j,q,q,q,q),q,q,q,new C.eiG(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.B7[w]
v.a=null
t=v.a=u.a
a1.push(new C.beY(t,u.b,p.a===t,i,k,new C.eiH(v,m),q))}a1=B.c6(A.bF,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.B2[w]
s.a=null
t=s.a=r.a
u.push(new C.beX(t,r.b,p.b===t,k,j,new C.eiI(s,m),q))}return B.bq(!0,B.p(q,B.ci(B.v(B.a([d,A.aN,a0,A.S,a1,A.bu,v,A.S,B.c6(A.bF,u,A.bx,12,12),A.bu,new B.a4(1/0,48,B.ex(D.bHl,D.ffJ,new C.eiJ(o,n),B.dd(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b7(B.m(16),A.Z),D.aT0,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.z,q,q,q,q,A.aj),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rT,D.bld,q,q,q),!0,!1,A.ah,!0,!0)},
$S:108}
C.eiL.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eiE(w.a,d,e))
w.b.cZ(new C.eiF(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eiE.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eiF.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eiG.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.eiH.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eiI.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eiJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FB(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.eiD(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eiD.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eiP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eiQ.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.eiO(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mL(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wM()},
$S:0}
C.eiO.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ej6.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.ej7.prototype={
$1(d){return d.w},
$S:z+82}
C.ej8.prototype={
$2(d,e){return d>e?d:e},
$S:91}
C.ej9.prototype={
$1(d){var w=this,v=null,u=B.M(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.ak,r=u?A.bj:A.aO,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bH:A.aK,A.r,1),n=B.aI(d,A.bR,x.w).w,m=w.a,l=x.p,k=w.b
return B.bq(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bBa,A.f,v,v,D.aUk,v,38,v,v,v,v,v,38),A.be,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aG(v,v,v,v,B.W(A.cu,s,v,v,v,v),v,v,v,new C.ej3(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dl(1,A.ch,B.hK(v,new C.ej4(m,k,w.c,s,w.d,t,r),k.length,A.fM,v,A.aj,new C.ej5(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rT,A.Wq,v,v,v),!0,!1,A.ah,!0,!0)},
$S:33}
C.ej3.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.ej5.prototype={
$2(d,e){return A.aa},
$S:36}
C.ej4.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cq
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.bEf,q,q,q,new C.ej1(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bns,n,q),B.aL(q,A.U,!1,q,!0,A.q,q,B.aM(),v,q,q,q,q,q,2,B.bo(q,new B.b4(4,B.m(16),A.Z),q,A.eN,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aSG),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ag,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.ej2(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1700}
C.ej1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hVE(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.od(q.a,o,n,s)
r.bL(0,new B.bb(m,B.h6(A.bt,o+s.length),A.aM))
l.agV(k,m)
l.oK()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ej2.prototype={
$1(d){var w=this.a
w.agV(this.b.a,d)
w.oK()},
$S:2}
C.eja.prototype={
$0(){},
$S:0}
C.eiC.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.egS.prototype={
$0(){},
$S:0}
C.egT.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h8H(this.b,w,!0)
w=this.a
w.r=null
w.wM()},
$S:0}
C.egU.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.egV.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.egR(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mL(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wM()},
$S:0}
C.egR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ejg.prototype={
$1(d){return B.ot(new C.ejf(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:126}
C.ejf.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.aeZ,B.v(B.a([D.fbd,A.aq,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ia(!0,w,e,A.z,D.eAu,new C.eje(this.a,this.b),20,A.rX,w,A.aj,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:409}
C.eje.prototype={
$2(d,e){var w=null,v=D.FS[e],u=C.hr6(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fD,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.euI,A.f,w,w,new B.o(A.dW.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nv,w,w,w)],m))
return B.aE(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a5(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ejd(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad)},
$S:74}
C.ejd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cav(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ejh.prototype={
$0(){var w=this.a
w.e=this.b.ht()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wM()},
$S:0}
C.efw.prototype={
$0(){var w,v=this.a,u=v.gpJ(),t=C.r1(4294967295,null,0,0,null,C.cB(),D.mj,"","","",D.dc),s=this.b
C.caI(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.BG){t.e=w.e
t.f=w.f}A.d.cl(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.egQ.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iV
$.iV=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cl(v.e.r,v.f+1,C.fX3(q));++v.f},
$S:0}
C.egO.prototype={
$0(){var w=this.a
A.d.cv(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ejp.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cv(v.e.r,u),s=this.c
A.d.cl(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.egK.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.egJ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.egJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ejo.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.Q(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.egA.prototype={
$0(){var w=this.a.r
return new B.ap(new B.bb(w,A.b0,A.aM),$.av())},
$S:256}
C.ehb.prototype={
$0(){return B.kc(!0,null,!0,!0,null,null,!1)},
$S:719}
C.el6.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.el7.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aqW(w).fw()
v=u.V5(w)
v.srE(B.h6(A.bt,v.a.a.length))},
$S:8}
C.ekw.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.W4(v)
if(u!=null&&u.b===D.cP)w.V5(u).saT(0,u.r)}else w.w=null},
$S:0}
C.efx.prototype={
$0(){var w=C.cB(),v=this.a,u=C.ek(A.bg,!1,v.gpJ().e.l(),A.aB,"",4280640491,24,A.bi,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.bd,4280172719,2,"Tap to edit text",0,0,"",D.cf,D.cP,0.7,0.15,0.2)
A.d.L(v.gdk().z,u)
v.r=u.a},
$S:0}
C.efu.prototype={
$0(){var w=C.cB(),v=this.a,u=C.ek(A.bg,!1,4279310375,A.aB,"",v.gpJ().c.j(0.25).l(),24,A.bi,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpJ().c.l(),2,"",0,0,"",D.cf,D.eY,0.25,0.3,0.3)
A.d.L(v.gdk().z,u)
v.r=u.a},
$S:0}
C.efk.prototype={
$0(){var w=C.ek(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.ld,0.6,0.2,0.18),v=this.a
A.d.L(v.gdk().z,w)
v.r=w.a},
$S:0}
C.efh.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bNe],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gahv().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dM(!1,r,r,r,!0,r,r,r,!0,r,D.byW,r,r,r,r,new C.efg(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bq(!0,B.cL(q,r,r,r,r,A.aj,!0),!0,!1,A.ah,!0,!0)},
$S:33}
C.efg.prototype={
$0(){B.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.efi.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.R.an(u.ac(),null),s=C.ek(A.bg,!1,4279310375,A.aB,u.b,4280640491,24,A.bi,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.bd,4280172719,2,t,0,0,"",D.cf,D.a2l,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdk().z,s)
t.r=s.a},
$S:0}
C.egM.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.egN.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.egL(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.av()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.egL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.efZ.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cP)s.Q=t.c.l()
else if(w===D.eY){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eg_(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eg_.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eg3.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eg4(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.eg4.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eg1.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cP){s.Q=t.c
return}w=new C.eg2(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eg2.prototype={
$1(d){var w,v,u
for(w=A.d.gai(d.z),v=new B.hE(w,new C.eg0()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.eg0.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.efY.prototype={
$0(){return C.caI(this.b,this.c,this.a.gpJ())},
$S:0}
C.ej0.prototype={
$0(){return A.d.cl(this.a.d,0,this.b)},
$S:0}
C.elf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.elg.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.elh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eli.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cl(s,0,v.b)
else{w=A.d.bi(s,new C.ele(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQT()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.ht()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wM()
t.J3()}},
$S:0}
C.ele.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ekM.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9A(),s=w.b,r=u.a9B(A.f5,A.kI,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.A(B.a([B.D(u.aRy(w.c,A.ak),1),new B.C(A.fl,B.p(v,D.bz1,A.f,v,v,new B.o(A.f5.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aRy(s,A.f5),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a5(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.bu,u.aRB(A.f5,d,D.bv7,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bS9(A.aY,d,A.tb,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aRz(d,"Not now"))
return new C.IK(B.v(p,A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ekL.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.IK(B.v(B.a([v.a9A(),A.P,v.a9B(A.aY,D.buO,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.cZ(new B.aX(0,1/0,0,B.aI(d,A.bR,x.w).w.a.b*0.42),B.hK(w,new C.ekJ(v,u,d),u.length,w,w,A.aj,new C.ekK(),!0),w),A.ay,v.aRz(d,"Cancel")],x.p),A.ai,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.ekK.prototype={
$2(d,e){return A.S},
$S:36}
C.ekJ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aE(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ajE,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bKk,A.n),w,42,w,w,w,w,w,42),A.be,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.n3,w,w,w),A.d5,B.d("Updated "+this.a.Oz(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.en,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ekI(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ad)},
$S:74}
C.ekI.prototype={
$0(){B.a6(this.a,!1).M(this.b.a)
return null},
$S:0}
C.ekF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a9A()
t=t.a9B(A.aR,A.tk,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.IK(B.v(B.a([s,A.P,t,A.bu,B.A(B.a([B.D(B.dX(A.a5M,new C.ekD(d),B.dd(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ce,u,new B.b7(B.m(14),A.Z),new B.az(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bM(D.eZ9,new C.ekE(d),B.bk(A.f5,u,u,u,A.c,u,A.ce,u,new B.b7(B.m(14),A.Z),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.ekD.prototype={
$0(){B.a6(this.a,!1).M(!1)
return null},
$S:0}
C.ekE.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.ekH.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9A(),s=w.b,r=u.a9B(A.aT,A.eh,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.asf("Names",""+w.c),1),A.ab,B.D(u.asf("Fields",""+w.d),1),A.ab,B.D(u.asf("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bk,v,v,v,A.c,v,A.wJ,v,new B.b7(B.m(14),A.Z),v,v,v)
return new C.IK(B.v(B.a([t,A.P,r,A.aN,p,A.bu,B.bM(B.d("Open "+s,v,v,v,v,v,v,A.n2,v,v,v),new C.ekG(d),o),A.S,u.aRA(d,"Stay here",!1)],q),A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ekG.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.ehF.prototype={
$0(){B.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.ehE.prototype={
$0(){B.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.ekx.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.el5.prototype={
$1(d){var w=this.a,v=this.b
return new C.YZ(A.d.dH(w.d,new C.el3(v),new C.el4(v)).ht(),w.f,null)},
$S:z+84}
C.el3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.el4.prototype={
$0(){return this.a},
$S:z+85}
C.efp.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hj,w,w,w),w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bAL,w,w,w,w,new C.efn(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eXh,w,w,w)],x.p)
if(v>1)t.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bBU,w,w,w,w,new C.efo(d),!1,w,w,w,w,w,D.fgR,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dj,w,w,w),w,w,w))
return B.bq(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:33}
C.efn.prototype={
$0(){B.a6(this.a,!1).M("scroll")
return null},
$S:0}
C.efo.prototype={
$0(){B.a6(this.a,!1).M("split")
return null},
$S:0}
C.efq.prototype={
$0(){var w=this.b,v=w.c,u=C.ek(A.bg,!1,4279310375,A.aB,v,4280640491,24,A.bi,A.a4,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bd,4280172719,2,v,0,0,"",D.cf,D.Q1,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdk().z,u)
v.r=u.a},
$S:0}
C.efr.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iV
$.iV=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iV
$.iV=k+1
m.push(new C.eD(""+1000*l+"_"+k,D.Q1,0.04,0.06,0.92,0.88,v,24,A.a4,A.bi,A.aB,4279310375,A.bg,u,D.bd,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cf,0,"","","","","",!1,0))
A.d.cl(j.e.r,i+q-1,new C.lt(""+1000*p+"_"+o,r+n,"",D.pD,4294967295,null,D.dc,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.efv.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.kl(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ek(A.bg,!1,4279310375,A.aB,t,4280640491,24,A.bi,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.kN,0.35,0.55,0.62)
A.d.L(u.gdk().z,w)
u.r=w.a},
$S:0}
C.efm.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aZK(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ek(A.bg,!1,4279310375,A.aB,"marriage_sign_placed_"+A.a.e4(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.kN,s,u,t)
A.d.L(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.efl(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hPM(p)}},
$S:0}
C.efl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ejm.prototype={
$0(){var w=this.a,v=this.b
w.aZK(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eld.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ehI.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.ehH())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ehH.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eg7.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eg8.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rW()},
$S:8}
C.efj.prototype={
$0(){var w=C.ek(A.bg,!1,4279310375,A.aB,"HD Photo",4280640491,24,A.bi,A.a4,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bd,4280172719,2,"",0,0,"",D.cf,D.ld,0.8,0.1,0.1),v=this.a
A.d.L(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eh9.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.efs.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdk().z,v)
w.r=v.a},
$S:0}
C.efB.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.efC.prototype={
$0(){var w=this.b.ht(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ek(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdk().z,f)
t.r=f.a},
$S:0}
C.efD.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.efA(v))
if(u>=0&&u<w.length-1){A.d.cv(w,u)
A.d.cl(w,u+1,v)}},
$S:0}
C.efA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.efO.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bi(w,new C.efz(v))
if(u>0){A.d.cv(w,u)
A.d.cl(w,u-1,v)}},
$S:0}
C.efz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.efR.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.efS.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.efT.prototype={
$0(){return this.a.as=A.dJ},
$S:0}
C.efU.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.efV.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.efW.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.efX.prototype={
$1(d){return d.length!==0},
$S:3}
C.efE.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cB()
A.d.L(v,C.C2(w.gpJ().c.j(0.18).l(),0.1,u,D.bd,0,2,1,0,0))
u=w.gdk().z
v=C.cB()
A.d.L(u,C.iP(A.bg,!1,w.gpJ().d.l(),A.aB,18,A.bi,A.I,0.07,v,"Document Header",0,D.dc,0.9,0.05,0.02))},
$S:0}
C.efF.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cB()
A.d.L(u,C.C2(v.gpJ().c.j(0.12).l(),0.1,t,D.bd,0,2,1,0,0.9))
t=v.gdk().z
u=C.cB()
w=C.bA0()
A.d.L(t,C.iP(A.L,!1,v.gpJ().e.l(),A.aB,12,A.bi,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dc,0.9,0.05,0.92))},
$S:0}
C.efG.prototype={
$0(){A.d.L(this.a.gdk().z,C.C2(1727914055,0.12,C.cB(),D.bd,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.efH.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdk().z,C.C2(w,0.08,C.cB(),D.bd,w,2,0.5,0.2,0.4))},
$S:0}
C.efI.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cB()
A.d.L(v,C.C2(w.gpJ().c.j(0.35).l(),0.12,u,D.BH,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdk().z,C.iP(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.15,C.cB(),"Important note",0,D.pE,0.5,0.38,0.52))},
$S:0}
C.efJ.prototype={
$0(){var w=this.a
A.d.L(w.gdk().z,C.C2(4294507260,0.78,C.cB(),D.bd,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdk().z,C.iP(A.bg,!1,4279179050,A.aB,16,A.bi,A.a4,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bA0()+"\n\nSubject:\n\nBody text\u2026",0,D.dc,0.76,0.12,0.14))},
$S:0}
C.efK.prototype={
$0(){var w=this.a
A.d.L(w.gdk().z,C.C2(4294897802,0.28,C.cB(),D.bd,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdk().z,C.iP(A.bg,!1,4285611794,A.aB,15,A.bi,A.a4,0.24,C.cB(),"Sticky note",0,D.aCa,0.26,0.64,0.14))},
$S:0}
C.efL.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdk().z,C.C2(4293060848,0.04,C.cB(),D.bd,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdk().z,C.C2(w,0.04,C.cB(),D.bd,w,2,0.55,0.1,0.48))},
$S:0}
C.efM.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdk().z,C.iP(A.bg,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.GM,0.42,0.06,0.18))
A.d.L(v.gdk().z,C.iP(A.bg,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tA,0.42,0.52,0.18))},
$S:0}
C.efN.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdk().z,C.C2(858088427,0.62,C.cB(),D.bd,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdk().z,C.C2(856004201,0.62,C.cB(),D.bd,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdk().z,C.iP(A.bg,!1,w,A.aB,20,A.bi,A.I,0.1,C.cB(),"Option A",0,D.dc,0.36,0.08,0.2))
A.d.L(v.gdk().z,C.iP(A.bg,!1,w,A.aB,20,A.bi,A.I,0.1,C.cB(),"Option B",0,D.dc,0.36,0.56,0.2))},
$S:0}
C.efP.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdk().z,C.C2(4294967295,0.36,C.cB(),D.bd,w,2,0.24,0.38,0.28))
A.d.L(v.gdk().z,C.iP(A.L,!1,w,A.aB,14,A.bi,A.a4,0.12,C.cB(),"[ QR CODE ]",0,D.dc,0.24,0.38,0.4))},
$S:0}
C.efQ.prototype={
$0(){return C.caI(this.b,D.Q2,this.a.gpJ())},
$S:0}
C.eh8.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a40.t(0,d),t=this.a
return t.b3y(d,v===d,A.aZ,this.c,new C.eh7(t,u,d,w),u)},
$S:z+25}
C.eh7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nB(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bAN(r,new C.eh6(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eh6.prototype={
$0(){return this.a.cZ(new C.eh5(this.b,this.c))},
$S:0}
C.eh5.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eft.prototype={
$0(){var w,v=this.a,u=v.gpJ(),t=C.r1(4294967295,null,0,0,null,C.cB(),D.mj,"","","",D.dc),s=this.b
C.caI(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.BG){t.e=w.e
t.f=w.f}A.d.cl(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.egb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hVH(p,q.d,s,new C.ega(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rW(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ega.prototype={
$1(d){return this.bfZ(d)},
bfZ(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eg9(t,d))
w=2
return B.b(t.rW(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eg9.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.cl(v.d,0,u)}},
$S:0}
C.egc.prototype={
$0(){return this.a.bDt()},
$S:0}
C.egd.prototype={
$0(){return this.a.aN_("Class Presentation",!0)},
$S:0}
C.ege.prototype={
$1(d){return this.a.bEp(d.b,this.b,d.a)},
$S:z+88}
C.egP.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bR,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ej_.prototype={
$1(d){return new B.C(new B.N(0,0,0,B.aI(d,A.eC,x.w).w.f.d),new B.e7(new C.eiZ(this.a,this.b),null),null)},
$S:60}
C.eiZ.prototype={
$2(d,e){return B.ot(new C.eiY(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:524}
C.eiY.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bH:A.aK,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.b9,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.aeq,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bJ(!1,A.yM,v,v,!0,v,v,new C.eiW(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cL(B.a([p.aPC(u,!0,!0,new C.eiX(p,w.d))],q),e,D.bj3,v,v,A.aj,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kp,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.eiW.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.eiX.prototype={
$0(){this.b.$1(new C.eiU())
var w=this.a
if(w.c!=null)w.m(new C.eiV())},
$S:0}
C.eiU.prototype={
$0(){},
$S:0}
C.eiV.prototype={
$0(){},
$S:0}
C.eky.prototype={
$3(d,e,f){return A.bG},
$C:"$3",
$R:3,
$S:89}
C.ekz.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.db(B.e8(A.A,new C.awL(this.a,null),0.94+w*0.06,null,null),w)},
$S:403}
C.ekA.prototype={
$3(d,e,f){return A.bG},
$C:"$3",
$R:3,
$S:89}
C.ekB.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.db(B.e8(A.A,new C.bam(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:403}
C.ekC.prototype={
$0(){return A.d.cl(this.a.d,0,C.Uu(this.b))},
$S:0}
C.efy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.au(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.oZ.j(0.75)],t)
r=B.I(A.ba.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.ba.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.ba.j(0.45+q),A.r,1)
t=B.p(p,B.W(A_.Y5,u?A.af:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.tv(A.fq,B.p(p,B.v(B.a([t,A.ay,q,A.aq,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a5(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.ao)},
$S:280}
C.egD.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.egE.prototype={
$1(d){return d.length!==0},
$S:3}
C.egF.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k9
else{w=B.ae("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.YD:A.Ax}return w},
$S:721}
C.egI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dH.au(0,A.k.G(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mx.j(0.82)],s)
r=m.e
q=A.d.gK(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kl(v.w)?A.uQ:A.pq,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a5(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Oz(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Oz(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Oz(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Oz(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Oz(v.f)
r=k.bEn(n,A.d.gK(r),t)
return B.p(l,B.bu(j,new B.a6k(B.aE(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dM(!1,A.KG,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.W(A.ny,t?A.aA:A.bI,l,l,l,l),l,l,l,new C.egG(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a5(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.egH(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ad),l),A.ao),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:94}
C.egH.prototype={
$0(){return this.a.acU(this.b)},
$S:0}
C.egG.prototype={
$0(){return this.a.A4(this.b,this.c)},
$S:0}
C.ei8.prototype={
$0(){var w=this.a
w.b2e()
w.m(new C.ei7())},
$S:0}
C.ei7.prototype={
$0(){},
$S:0}
C.ei9.prototype={
$1(d){return this.a.agV(this.b.a,d)},
$S:2}
C.eia.prototype={
$0(){this.a.cZ(new C.ei6(this.b))},
$S:0}
C.ei6.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eib.prototype={
$0(){this.a.cZ(new C.ei5(this.b))},
$S:0}
C.ei5.prototype={
$0(){var w=this.a
return w.y=w.y===A.cC?A.bi:A.cC},
$S:0}
C.eic.prototype={
$0(){this.a.cZ(new C.ei4(this.b))},
$S:0}
C.ei4.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mo},
$S:0}
C.eid.prototype={
$0(){this.a.cZ(new C.ei3(this.b))},
$S:0}
C.ei3.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eie.prototype={
$0(){var w=this.a
w.cZ(new C.ei2(w,this.b))},
$S:0}
C.ei2.prototype={
$0(){var w=this.b
return w.as=this.a.bYD(w.as)},
$S:0}
C.eif.prototype={
$0(){return this.a.cZ(new C.ei1(this.b))},
$S:0}
C.ei1.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eig.prototype={
$0(){return this.a.cZ(new C.ei0(this.b))},
$S:0}
C.ei0.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ehU.prototype={
$0(){return this.a.a0m(this.b.a)},
$S:0}
C.ehV.prototype={
$0(){this.a.YY()
return null},
$S:0}
C.ehW.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bR,x.w).w.a.a<900)w.adc()
else w.m(new C.ehT(w))},
$S:0}
C.ehT.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ehX.prototype={
$0(){this.a.cZ(new C.ehS(this.b))},
$S:0}
C.ehS.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.ehY.prototype={
$0(){return this.a.cZ(new C.ehR(this.b))},
$S:0}
C.ehR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ehZ.prototype={
$0(){return this.a.cZ(new C.ehQ(this.b))},
$S:0}
C.ehQ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ei_.prototype={
$0(){return this.a.ax2(null)},
$S:0}
C.eh1.prototype={
$0(){this.a.CG()
return null},
$S:0}
C.eh2.prototype={
$0(){this.a.a89()
return null},
$S:0}
C.eh4.prototype={
$1(d){return this.bg_(d)},
bg_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.IV(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c2(A.az,null,new C.egX(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.egY(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.egZ(r))
s=s.c.I(x.q).f
s.P(B.b2(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.eh_(r))
s=s.c.I(x.q).f
s.P(B.b2(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h9Q(q,new C.Dz(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.eh0(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.af8(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b2(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:92}
C.egX.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dVu],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bAS:r
q.push(B.dM(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.egW(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dj,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bq(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:33}
C.egW.prototype={
$0(){B.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.egY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.egZ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eh_.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eh0.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eh3.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yW(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yW(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yW(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.af8(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e_i,q,v,u,B.yW(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:125}
C.elj.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bzY(w,v)}},
$S:0}
C.elk.prototype={
$0(){this.a.CG()
return null},
$S:0}
C.eij.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bKe:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aP:A.bv
return new B.C(A.fM,B.aH(u,B.dh(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eL,u,u,u,A.lw,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eii(t,d),u,u,u,u,u,u,!1,A.ac),u)},
$S:133}
C.eii.prototype={
$0(){var w=this.a
return w.m(new C.eih(w,this.b))},
$S:0}
C.eih.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eik.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a0r:E.asV
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbHF():t.gbDO()
return B.hl(B.aH(u,B.p(u,D.aj6,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a5(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ac),u,s,u,u)},
$S:1704}
C.eil.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hUX(v,w.a.c)},
$S:0}
C.ejI.prototype={
$0(){return this.b.uA(this.a.a)},
$S:0}
C.ejJ.prototype={
$0(){return this.a.uA(D.mj)},
$S:0}
C.ejK.prototype={
$0(){return this.a.uA(D.GK)},
$S:0}
C.ejV.prototype={
$0(){return this.a.uA(D.GL)},
$S:0}
C.ek5.prototype={
$0(){return this.a.uA(D.GJ)},
$S:0}
C.ekg.prototype={
$0(){return this.a.pu("lab_report")},
$S:0}
C.ekn.prototype={
$0(){return this.a.pu("rubric")},
$S:0}
C.eko.prototype={
$0(){return this.a.pu("minutes")},
$S:0}
C.ekp.prototype={
$0(){return this.a.pu("agenda")},
$S:0}
C.ekq.prototype={
$0(){return this.a.pu("timeline")},
$S:0}
C.ekr.prototype={
$0(){return this.a.pu(this.b.a)},
$S:0}
C.ejL.prototype={
$0(){this.a.Uf()
return null},
$S:0}
C.ejM.prototype={
$0(){this.a.U9()
return null},
$S:0}
C.ejN.prototype={
$0(){return this.a.pu("table")},
$S:0}
C.ejO.prototype={
$0(){return this.a.pu("sticky")},
$S:0}
C.ejP.prototype={
$0(){return this.a.pu("divider")},
$S:0}
C.ejQ.prototype={
$0(){return this.a.pu("header_bar")},
$S:0}
C.ejR.prototype={
$0(){return this.a.ou(D.bd)},
$S:0}
C.ejS.prototype={
$0(){return this.a.ou(D.eG)},
$S:0}
C.ejT.prototype={
$0(){return this.a.ou(D.jv)},
$S:0}
C.ejU.prototype={
$0(){return this.a.ou(D.BH)},
$S:0}
C.ejW.prototype={
$0(){return this.a.ou(D.jw)},
$S:0}
C.ejX.prototype={
$0(){return this.a.ou(D.kO)},
$S:0}
C.ejY.prototype={
$0(){return this.a.ou(D.fm)},
$S:0}
C.ejZ.prototype={
$0(){this.a.Gj()
return null},
$S:0}
C.ek_.prototype={
$0(){this.a.M9()
return null},
$S:0}
C.ek0.prototype={
$0(){return this.a.pu("quote")},
$S:0}
C.ek1.prototype={
$0(){return this.a.a6i()},
$S:0}
C.ek2.prototype={
$0(){this.a.Z2()
return null},
$S:0}
C.ek3.prototype={
$0(){var w=this.a
return w.m(new C.ejy(w))},
$S:0}
C.ejy.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ek4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nB(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ejG(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ejG.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ek6.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jp()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a41.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b9
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a5(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a41.t(0,q))u.push(B.an(s,B.p(s,D.Mk,A.f,s,s,D.CV,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fM,B.aH(s,B.hl(new B.am(A.X,s,A.a9,A.f,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ejF(r,d),s,s,s,s,s,s,!1,A.ac),s)},
$S:z+89}
C.ejF.prototype={
$0(){this.a.a6A(this.b)
return null},
$S:0}
C.ek7.prototype={
$0(){this.a.a6z(this.b)
return null},
$S:0}
C.ek8.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hr7(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.b9
v=p.gdk()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.r1(4294967295,r,0,0,r,"preview_"+w,D.pD,"","","",D.dc)
C.h6M(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h85(s),A.ao),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ao)],w)
if(q)u.push(B.an(r,B.p(r,D.ajF,A.f,r,r,D.CV,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jm,B.aH(r,B.v(B.a([new B.am(A.X,r,A.a9,A.q,u,r),A.d5,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ejE(p,q,d),r,r,r,r,r,r,!1,A.ac),r)},
$S:z+90}
C.ejE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdk()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nB(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cZ(new C.eju(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eju.prototype={
$0(){return C.h6M(this.a,this.b.a)},
$S:0}
C.ejH.prototype={
bg0(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a40.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nB(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bg0(d,e)},
$S:z+91}
C.eks.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.B(new B.J(d,new C.eku(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ci(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aX)},
$S:z+92}
C.eku.prototype={
$1(d){var w=this
return w.a.b3y(d,w.b===d,w.c,w.d,new C.ekt(w.e,d),!D.a40.t(0,d))},
$S:z+25}
C.ekt.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ek9.prototype={
$1(d){this.b.$2(d,new C.ejD(this.a,d,this.c))
return null},
$S:z+26}
C.ejD.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bAN(u,new C.ejt(v,this.c,w),w)},
$S:0}
C.ejt.prototype={
$0(){return this.a.cZ(new C.ejr(this.b,this.c))},
$S:0}
C.ejr.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eka.prototype={
$1(d){this.b.$2(d,new C.ejC(this.a,d))
return null},
$S:z+26}
C.ejC.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fBy(u,new C.ejs(v,w),w)},
$S:0}
C.ejs.prototype={
$0(){var w=this.a
return w.cZ(new C.ejq(w,this.b))},
$S:0}
C.ejq.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.ekb.prototype={
$0(){var w=this.a
return w.m(new C.ejB(w))},
$S:0}
C.ejB.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ekc.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bzY(w,v)}},
$S:0}
C.ekd.prototype={
$0(){this.a.H5()
return null},
$S:0}
C.eke.prototype={
$0(){return this.a.a6i()},
$S:0}
C.ekf.prototype={
$0(){var w=this.a,v=w.jp()
if(v!=null&&v.b===D.cP)w.cZ(new C.ejA(v))},
$S:0}
C.ejA.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.ekh.prototype={
$0(){this.a.CG()
return null},
$S:0}
C.eki.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Ej(v,!0)
return null},
$S:0}
C.ekj.prototype={
$0(){this.a.cZ(new C.ejz(this.b))},
$S:0}
C.ejz.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.ekk.prototype={
$0(){this.a.cZ(new C.ejx(this.b))},
$S:0}
C.ejx.prototype={
$0(){var w=this.a
return w.y=w.y===A.cC?A.bi:A.cC},
$S:0}
C.ekl.prototype={
$0(){this.a.cZ(new C.ejw(this.b))},
$S:0}
C.ejw.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mo},
$S:0}
C.ekm.prototype={
$0(){this.a.cZ(new C.ejv(this.b))},
$S:0}
C.ejv.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eg6.prototype={
$1(d){return this.bfY(d)},
bfY(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nB(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cZ(new C.eg5(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:197}
C.eg5.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ekP.prototype={
$0(){var w=this.a
return w.cZ(new C.ekO(w,this.b))},
$S:0}
C.ekO.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ekQ.prototype={
$0(){var w=this.a
return w.cZ(new C.ekN(w,this.b))},
$S:0}
C.ekN.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ehe.prototype={
$0(){return this.a.cZ(new C.ehd(this.b))},
$S:0}
C.ehd.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ehf.prototype={
$0(){return this.a.cZ(new C.ehc(this.b))},
$S:0}
C.ehc.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ehM.prototype={
$1(d){var w=x.gh
w=B.B(new B.J(D.all,new C.ehL(),w),w.k("ai.E"))
return w},
$S:z+94}
C.ehL.prototype={
$1(d){var w=null
return B.yW(B.d(d.b,w,w,w,w,w,w,A.mq,w,w,w),48,d,x.fO)},
$S:z+95}
C.el1.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a4(v,w?8:0,null,null)},
$S:36}
C.el0.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jL()?q:new C.ekZ(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.b9:A.cl
v=B.I(v,A.r,o?2:1)
u=r.d?A.cB:A.c
t=B.bZ(0,C.h85(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aH(q,B.p(q,new B.am(A.X,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.n1,q,q,q),A.f,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.afh,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.el_(p,e),q,q,q,q,q,q,!1,A.ac)},
$S:73}
C.el_.prototype={
$0(){var w=this.a
return w.m(new C.ekV(w,this.b))},
$S:0}
C.ekV.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.J3()},
$S:0}
C.ekZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c2(null,null,new C.ekW(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ekX(q,s))
q.aOn()}else if(r==="del"){q=t.a
q.m(new C.ekY(q,s))
q.aNA()}else if(r==="up")t.a.aZX(s,s-1)
else if(r==="down")t.a.aZX(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ekW.prototype={
$1(d){var w=null,v=B.a([B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bCv,w,w,w,w,new C.ekR(d),!1,w,w,w,w,w,w,w,D.eY9,w,w,w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bCo,w,w,w,w,new C.ekS(d),!1,w,w,w,w,w,w,w,A.vC,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bBG,w,w,w,w,new C.ekT(d),!1,w,w,w,w,w,w,w,D.f4J,w,w,w))
if(u<this.b.r.length-1)v.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bDH,w,w,w,w,new C.ekU(d),!1,w,w,w,w,w,w,w,D.eXZ,w,w,w))
return B.bq(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:33}
C.ekR.prototype={
$0(){B.a6(this.a,!1).M("dup")
return null},
$S:0}
C.ekS.prototype={
$0(){B.a6(this.a,!1).M("del")
return null},
$S:0}
C.ekT.prototype={
$0(){B.a6(this.a,!1).M("up")
return null},
$S:0}
C.ekU.prototype={
$0(){B.a6(this.a,!1).M("down")
return null},
$S:0}
C.ekX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ekY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.el2.prototype={
$0(){return this.a.a6i()},
$S:0}
C.egw.prototype={
$0(){var w=this.a
w.b2e()
w.ax2(null)},
$S:0}
C.egv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b_(m.e)
v=m.f
v.toString
v=new B.a5(A.ax,A.aC,A.x,B.a([w,B.b_(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b_(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b_(m.e)
q=m.f
q.toString
q=new B.a5(A.ax,A.aC,A.x,B.a([r,B.b_(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bW(A.ki,new B.o(m.f==null?B.b_(m.e):p,p,p,p,p,r,A.n),A.bc),A.ao)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.egu(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bW(new B.am(A.X,p,A.a9,A.f,s,new B.cz("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bc)},
$S:357}
C.egu.prototype={
$1(d){var w=this
return w.a.bzN(d,w.b,w.c,w.d)},
$S:z+23}
C.egj.prototype={
$0(){var w=this
if(w.b){w.a.Mi(w.c)
return}if(w.d){w.a.a6g(w.c)
return}if(w.e){w.a.aew(w.c)
return}if(w.f)w.a.b2K(w.c)},
$S:0}
C.egk.prototype={
$0(){this.a.Mi(this.b)
return null},
$S:0}
C.egl.prototype={
$0(){return this.a.a0m(this.b.a)},
$S:0}
C.egm.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.egi(u,d,w.c,w.d))
v.GK()
v.nJ()
v.oK()},
$S:18}
C.egi.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.egn.prototype={
$1(d){return this.a.agV(this.b.a,d)},
$S:2}
C.egp.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fN0(w))u.a.Mi(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b2K(v)},
$S:0}
C.ego.prototype={
$0(){return this.a.a0m(this.b.a)},
$S:0}
C.egq.prototype={
$1(d){var w=this,v=w.a
v.m(new C.egh(w.b,d,w.c,w.d))
v.GK()
v.nJ()
v.oK()},
$S:18}
C.egh.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cP)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.egr.prototype={
$1(d){var w=this.a
w.m(new C.egg(this.b,d))
w.GK()
w.nJ()
w.oK()},
$S:220}
C.egg.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cP)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.egs.prototype={
$0(){var w=this.a
w.m(new C.egf(this.b))
w.GK()
w.nJ()
w.oK()},
$S:0}
C.egf.prototype={
$0(){this.a.r=C.h7B()},
$S:0}
C.egt.prototype={
$0(){return this.a.a0m(this.b.a)},
$S:0}
C.ein.prototype={
$0(){var w=this.a
return w.m(new C.eim(w))},
$S:0}
C.eim.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eio.prototype={
$1(d){return this.a.cv_(this.b.a,d)},
$S:2}
C.ehs.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.eht.prototype={
$1(d){return this.a.$1(new C.ehr(this.b,d))},
$S:6}
C.ehr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehu.prototype={
$1(d){return this.a.$1(new C.ehq(this.b,d))},
$S:6}
C.ehq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehv.prototype={
$1(d){return this.a.$1(new C.ehp(this.b,d))},
$S:6}
C.ehp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehw.prototype={
$1(d){return this.a.$1(new C.eho(this.b,d))},
$S:6}
C.eho.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ehx.prototype={
$1(d){return this.a.$1(new C.ehn(this.b,d))},
$S:6}
C.ehn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ehy.prototype={
$1(d){return this.b.$1(new C.ehm(this.a,this.c))},
$S:9}
C.ehm.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ehz.prototype={
$1(d){return this.b.$1(new C.ehl(this.a,this.c))},
$S:9}
C.ehl.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ehA.prototype={
$1(d){var w=null,v=this.b,u=B.b_(d),t=v.Q===d,s=t?A.bk:A.cU
return B.aH(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehk(this.a,v,d),w,w,w,w,w,w,!1,A.ac)},
$S:414}
C.ehk.prototype={
$0(){return this.a.$1(new C.ehh(this.b,this.c))},
$S:0}
C.ehh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ehB.prototype={
$1(d){return this.a.$1(new C.ehj(this.b,d))},
$S:1705}
C.ehj.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.ehC.prototype={
$1(d){var w=null
return B.aH(w,B.p(w,w,A.f,w,w,new B.o(B.b_(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehi(this.a,this.b,d),w,w,w,w,w,w,!1,A.ac)},
$S:414}
C.ehi.prototype={
$0(){return this.a.$1(new C.ehg(this.b,this.c))},
$S:0}
C.ehg.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ehD.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).oY()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eD()}v.a.apW()},
$S:0}
C.ehG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dH.au(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.ba,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.W(A.tk,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mN,n,n,n),n,n,n,2,n,n))
return B.aE(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ev(new B.a4(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a5(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ad)},
$S:130}
C.eff.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.au(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.ba,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aE(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ev(B.v(B.a([B.e8(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.aa,B.d(q.e,p,p,p,p,p,p,A.jV,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a5(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Ek,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ad)},
$S:130}
C.ejk.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.U,!0,w,!0,A.q,w,B.aM(),u,w,w,w,w,w,2,A.akv,A.z,!0,w,!0,w,!1,w,A.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eq(B.a([B.bJ(!1,A.dd,w,w,!0,w,w,new C.eji(d),w,w),B.bM(A.oL,new C.ejj(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eji.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.ejj.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).M(w)
return null},
$S:0}
C.cX6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dH.au(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.au(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.au(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT).j(0.18+w*0.12),A.J,32+w*10),D.a8r],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.b1,0.9,A.x,k,0,B.a([A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kl(j.a.c.w)?D.ts:M.mT).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kl(m)?D.ts:M.mT
s=B.a([new B.ac(0,A.G,A.d.gK(C.kl(m)?D.ts:M.mT).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e8(A.A,B.p(k,B.W(C.kl(j.a.c.w)?A.uQ:A.pq,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a5(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.ha,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eQD,A.L,k,k),A.av,B.d(j.gcq8(),k,k,k,k,k,k,D.eV3,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQT()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kl(j.a.c.w)?D.ts:M.mT).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.aa],m))}s.push(new C.ID(A.x8,"Download PDF","pdf",A.d6,j.HX(0),!1,k))
p=j.a.c
if(!p.z||p.gQT()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.aq,new C.ID(A.kI,"Transfer to "+C.h7D(p==null?"":p),"transfer_hati",A.aT,j.HX(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.HX(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.aq,new C.ID(D.bub,"Rename presentation","rename",A.c8,n,!1,k),A.aq,new C.ID(A.agT,"Duplicate","duplicate",A.b2,j.HX(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.ID(A.e8,"Delete presentation","delete",A.aE,j.HX(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.HX(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.HX(n)
s.push(B.dS(B.db(B.bJ(!1,E.aMS,k,k,!0,k,k,new C.cX5(d),k,B.ft(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bm9,k,k,k,k,k,A.kc,k,k)),n),new B.u(0,(1-p)*8)))
return B.e8(A.A,B.db(B.aE(!1,A.a1,!0,k,B.p(k,B.bu(q,new B.am(A.X,k,A.a9,A.q,B.a([o,new B.C(D.bli,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.ao),A.f,k,A.Tm,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ad),i),0.88+u*0.12,k,k)},
$S:44}
C.cX5.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.cXs.prototype={
$0(){B.a6(this.a,!1).M(!1)
return null},
$S:0}
C.cXt.prototype={
$0(){B.a6(this.a,!1).M(!0)
return null},
$S:0}
C.cX3.prototype={
$1(d){var w=this.a
return w.m(new C.cX_(w))},
$S:23}
C.cX_.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cX4.prototype={
$1(d){var w=this.a
return w.m(new C.cWZ(w))},
$S:48}
C.cWZ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cX2.prototype={
$0(){var w=this.a
return w.m(new C.cX0(w))},
$S:0}
C.cX0.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cX1.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).M(w)
return null},
$S:0}
C.em_.prototype={
$0(){return $.bhN=!$.bhN},
$S:0}
C.elQ.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaRr())u.atJ()},
$S:0}
C.elZ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.elR.prototype={
$0(){return this.a.y=!0},
$S:0}
C.elS.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.atJ()},
$S:0}
C.elM.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.elN.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.elO.prototype={
$0(){return this.a.y=!1},
$S:0}
C.elP.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.G(w-1+v,v)},
$S:0}
C.elX.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.elY.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hO)return new B.cV(e,!1,d,null)
w=this.a
return w.cof(w.e,d,e)},
$S:397}
C.elT.prototype={
$2(d,e){var w=B.dj(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fm((1-v.gp(0))*1.5708)
return B.fq(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:44}
C.elU.prototype={
$2(d,e){var w=B.dj(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jA((1-v.gp(0))*1.5708)
return B.fq(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:44}
C.elV.prototype={
$2(d,e){var w=B.dj(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fm(v.gp(0)*0.8)
w.jA(v.gp(0)*0.35)
return B.fq(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:44}
C.elW.prototype={
$2(d,e){var w=B.dj(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fm(-v.gp(0)*1.2)
return B.fq(A.a7,B.db(e,v.gp(0)),null,w,!0)},
$S:44}
C.em0.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gXi().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gXi().x
t===$&&B.c()
return new C.aZK(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.HB(v.c,t,!0,new B.cz("cine"+u,x.W))},
$S:679}
C.em2.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bR,x.w).w.a.a*0.55)w.atJ()
else w.cd5()},
$S:48}
C.em1.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.fsb.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:394}
C.fsk.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eq(B.a([B.bJ(!1,A.dd,w,w,!0,w,w,new C.fsh(d),w,w),B.bJ(!1,D.fbw,w,w,!0,w,w,new C.fsi(d,this.b,v),w,w),B.bM(A.aN8,new C.fsj(d,v,this.c),w)],x.p),w,w,L.rC,new B.a4(320,w,t,w),w,w,w,w,D.fcR,w)},
$S:19}
C.fsh.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.fsi.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).M(null)
C.fNF(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fsj.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).M(null)
t=u.b
w=2
return B.b(C.aNN(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aNc(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fsa.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.caL.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:506}
C.fsg.prototype={
$1(d){return d.ac()},
$S:z+14}
C.f1z.prototype={
$1(d){return C.fND(C.Uu(B.a_(d,x.N,x.z)),this.a)},
$S:z+96}
C.fAO.prototype={
$3(d,e,f){return A.bG},
$C:"$3",
$R:3,
$S:89}
C.fAP.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.db(B.e8(A.A,D.fu1,0.94+w*0.06,null,null),w)},
$S:403}
C.fAQ.prototype={
$1(d){var w=this
return new C.Uw(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.elw.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.els.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.elv.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Ux(u,this.b,w.gaKX(),v,null)},
$S:z+99}
C.elt.prototype={
$0(){return this.a.f=!0},
$S:0}
C.elu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.elx.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ely.prototype={
$0(){return this.a.f=!1},
$S:0}
C.elB.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.elC.prototype={
$0(){var w=this.a
return w.m(new C.elA(w))},
$S:0}
C.elA.prototype={
$0(){return this.a.d="one"},
$S:0}
C.elD.prototype={
$0(){var w=this.a
return w.m(new C.elz(w))},
$S:0}
C.elz.prototype={
$0(){return this.a.d="all"},
$S:0}
C.elE.prototype={
$1(d){return this.a.bEo(d,this.b)},
$S:z+100}
C.elr.prototype={
$0(){var w=this.a
return w.m(new C.elq(w,this.b))},
$S:0}
C.elq.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.elF.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.elG.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.elH.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.elI.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.elJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fz(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.P(D.eDv)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ef9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ef8())},
$S:0}
C.ef8.prototype={
$0(){},
$S:0}
C.efa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:8}
C.ef5.prototype={
$1(d){return this.a.m(new C.ef4())},
$S:2}
C.ef4.prototype={
$0(){},
$S:0}
C.ef6.prototype={
$1(d){return this.a.aVW()},
$S:2}
C.ef7.prototype={
$0(){B.a6(this.a,!1).M(null)
return null},
$S:0}
C.elL.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pk(),$async$$0)
case 2:if(t.c!=null)t.m(new C.elK(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.elK.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fmu.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.en(new B.k6(this.c,new C.fmt(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:205}
C.fmt.prototype={
$3(d,e,f){return new C.HB(e,!1,!1,new B.cz(e.a,x.W))},
$S:z+102}
C.fmv.prototype={
$1(d){var w=null
return B.o2(!1,B.au(new C.bsa(this.a,this.b,w),w,w,w),w,x.z)},
$S:326}
C.fmz.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gm9(),$async$$0)
case 3:w=4
return B.b(B.bO(A.pe,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gm9(),$async$$0)
case 5:s=$.aU.ah$.x.h(0,t.a)
r=s==null?null:s.gb6()
if(!(r instanceof B.qa))throw B.S("Could not draw the slide.")
u=r.lU(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fmA.prototype={
bgw(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hg(A.fQ),$async$$1)
case 3:r=f
if(r==null)throw B.S("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hH([J.f8(A.dD.gaO(r))],"image/png"))
t.toString
s=Ak.fED(t)
w=4
return B.b(new B.pD(s,"load",!1,x.ev).gK(0).cK(0,A.kw),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bgw(d)},
$S:1710}
C.fmw.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:147}
C.fmx.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fF(0)},
$S:147}
C.fmy.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eWW.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eNf,A.L,w,w)},
$S:1711}
C.eWX.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.m7(A.bj,w,A.dM,8,w,e===0?w:e,w),A.ao)},
$S:484}
C.e5H.prototype={
$1(d){this.a.Yp()
return null},
$S:14}
C.e5F.prototype={
$0(){return this.a.e=D.bhh},
$S:0}
C.e5G.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cdj.prototype={
$1(d){return A.o.dr(1,d.a)},
$S:z+103}
C.cdk.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aJM.prototype
w.br0=w.q
w=C.aJf.prototype
w.bqt=w.q
w=C.aJ0.prototype
w.bqd=w.q
w=C.aJe.prototype
w.bqs=w.q
w=C.aJK.prototype
w.bqZ=w.q
w=C.aL4.prototype
w.bst=w.q
w=C.aHW.prototype
w.bp5=w.q
w=C.aJY.prototype
w.brc=w.q
w=C.aJZ.prototype
w.brd=w.q
w=C.b0p.prototype
w.blK=w.aA_})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hST","alF",104)
v(C.aGV.prototype,"gbYY","Xp",0)
var r
u(r=C.avz.prototype,"gcpu","cpv",38)
v(r,"gbZJ","abj",0)
v(r=C.avv.prototype,"gaUJ","D9",3)
v(r,"gbZG","bZH",3)
v(r,"gau0","x_",0)
v(r,"gau1","HE",0)
t(C,"hTh","hoT",105)
v(C.aBD.prototype,"gc0M","c0N",3)
s(C,"hTs",0,null,["$4$paper$photo$request$template"],["ftA"],106,0)
s(C,"hTr",0,null,["$5$doc$history$instruction$photo$template"],["bzg"],107,0)
v(r=C.aBW.prototype,"gc1s","HU",0)
v(r,"gbDR","Vh",0)
v(r,"gc1v","ac2",0)
v(r,"gc1u","Yb",0)
v(r,"gaVB","Dp",0)
v(C.aC_.prototype,"gc1A","Yd",0)
v(r=C.aDk.prototype,"gaVO","Ov",0)
v(r,"gchL","b_2",3)
v(r,"gcqS","ayh",86)
v(r,"gbHv","a8d",0)
v(r,"gc20","zI",0)
v(r=C.aFe.prototype,"gcbR","Zw",0)
v(r,"gcbZ","Zz",0)
v(r,"gbwW","a6G",0)
v(r,"gc24","ace",0)
v(C.aFd.prototype,"gc25","acf",0)
v(C.azh.prototype,"gbvV","a6t",0)
v(C.axF.prototype,"gc26","Yo",0)
w(C,"hTF","hRA",12)
w(C,"hTD","hOx",12)
w(C,"hTE","hQA",12)
v(r=C.aCc.prototype,"gctW","ctX",3)
v(r,"gcg1","cg2",3)
u(r,"gDv","acU",7)
v(r,"gbBu","ap6",3)
u(r,"gDw","aX4",7)
v(r,"gc4d","acB",0)
v(r,"gc34","acA",0)
v(r,"gc6m","acV",0)
v(r,"gbDO","a7P",0)
v(r,"gc7f","YY",0)
v(r,"gc7g","adb",0)
v(r,"gc7M","adj",0)
v(r,"gc6z","acY",0)
v(r,"gbHF","a8h",0)
v(r,"gaOm","aOn",3)
v(r,"gaNz","aNA",3)
v(r,"gaJh","aJi",3)
v(r,"gaNy","apW",3)
u(r,"gbwb","bwc",80)
v(r,"gaxR","b21",3)
v(r,"gc36","c37",3)
v(r,"gbSt","bSu",3)
v(r,"gbGe","bGf",3)
v(r=C.aCf.prototype,"gcsS","csT",3)
v(r,"gcsx","csy",3)
t(C,"hTG","hRR",2)
v(r=C.aCd.prototype,"gc2c","HZ",0)
v(r,"gcjG","PW",0)
v(r,"gc29","HY",0)
v(r,"gcva","a0Z",0)
v(r,"gc7Y","adq",0)
v(C.aCb.prototype,"gc2d","aVW",3)
v(r=C.aCe.prototype,"gbIq","a8r",0)
u(r,"gc2a","c2b",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nz,C.Qq,C.bEO,C.bD9,C.csA,C.csy,C.bKK,C.b63,C.csz,C.bBK,C.cdd,C.cdb,C.cdc,C.cda,C.aqL,C.cd9,C.bLD,C.o0,C.aCO,C.je,C.nm,C.a6j,C.yJ,C.l3,C.oc,C.lR,C.yL,C.nq,C.a6r,C.ap9,C.aZL,C.e56,C.l0,C.DI,C.em,C.iT,C.Dz,C.wY,C.eD,C.lt,C.hW,C.jw,C.a6s,C.adq,C.aZM,C.b0p,C.a1k])
u(B.kC,[C.cAq,C.bVR,C.fhH,C.cBW,C.cBi,C.fnc,C.dSU,C.dST,C.e5K,C.e5J,C.foC,C.f2G,C.f2H,C.c98,C.c99,C.c9a,C.ea7,C.eGs,C.eFQ,C.eFP,C.eGT,C.eGq,C.eGj,C.eGC,C.eHi,C.f9u,C.eNe,C.eNd,C.eNH,C.e59,C.fs7,C.dOD,C.fym,C.foZ,C.caD,C.caB,C.caG,C.fpt,C.fpu,C.fpv,C.fpw,C.can,C.cao,C.dBv,C.cak,C.fps,C.eUu,C.dMP,C.cad,C.e4Q,C.fn1,C.eiK,C.ej8,C.ej5,C.ej4,C.ejf,C.eje,C.ekK,C.ekJ,C.eiZ,C.eiY,C.efy,C.egI,C.ejH,C.el1,C.el0,C.egv,C.ehG,C.eff,C.cX6,C.elX,C.elY,C.elT,C.elU,C.elV,C.elW,C.em0,C.caL,C.elw,C.elH,C.cdk])
u(B.i6,[C.cAr,C.cAs,C.bLE,C.ffo,C.bVQ,C.bVT,C.fuR,C.eVs,C.eVj,C.eVz,C.f1A,C.f1B,C.fhI,C.fhG,C.fuo,C.ff4,C.fvc,C.cBM,C.cBR,C.cBT,C.cBP,C.cBU,C.cBN,C.cBV,C.cBI,C.cBF,C.cBE,C.cBL,C.cBd,C.cBb,C.fme,C.fmf,C.f6_,C.fnd,C.fnj,C.f52,C.c5s,C.fmc,C.fmd,C.fh3,C.fh4,C.fni,C.fne,C.fng,C.fnh,C.fnf,C.fyE,C.fh7,C.fh8,C.fhb,C.fhc,C.fhf,C.fhg,C.fA6,C.f36,C.fAh,C.e91,C.e92,C.e93,C.e8K,C.e8W,C.e8X,C.e8Z,C.c97,C.c95,C.c96,C.fmT,C.fmV,C.fmU,C.f2I,C.f2J,C.fAk,C.eac,C.ead,C.ea4,C.ea5,C.ea8,C.ea9,C.fAA,C.eHj,C.eGJ,C.eGt,C.eGG,C.eFL,C.eFM,C.eFN,C.eFR,C.eFS,C.eH8,C.eHf,C.eHh,C.eGS,C.eGU,C.eGY,C.eGZ,C.eH_,C.eH3,C.eGV,C.eGW,C.eG2,C.eG3,C.eG4,C.eG5,C.eG6,C.eG7,C.eG8,C.eG9,C.eGa,C.eFo,C.eFp,C.eFq,C.eFr,C.eFt,C.eFu,C.eFX,C.eFY,C.eFZ,C.eG_,C.eG0,C.eFy,C.eFz,C.eFA,C.eFB,C.eGi,C.eGB,C.fkh,C.fkg,C.cau,C.f9t,C.fs3,C.frX,C.fs_,C.fpX,C.fpY,C.fpZ,C.fko,C.fkn,C.fkm,C.fkk,C.f2D,C.f2E,C.f2F,C.fAM,C.eNg,C.eNh,C.eNa,C.eN4,C.eNA,C.eNB,C.eND,C.eNE,C.eNz,C.fAL,C.eMW,C.f8J,C.e58,C.fs5,C.fs6,C.fs8,C.fs1,C.fs2,C.fzZ,C.ddV,C.de0,C.e57,C.f_a,C.f_c,C.f_b,C.f_9,C.fls,C.flu,C.f18,C.fry,C.frz,C.frA,C.frL,C.frQ,C.frR,C.frS,C.frT,C.frU,C.frV,C.frW,C.frB,C.frC,C.frD,C.frE,C.frF,C.frG,C.frH,C.frI,C.frJ,C.frK,C.frM,C.frN,C.frO,C.frP,C.fji,C.f8w,C.f8v,C.fse,C.dOE,C.dOC,C.eM5,C.c53,C.c55,C.fyo,C.d3e,C.d3g,C.fyn,C.fyl,C.fAK,C.foV,C.d2P,C.fhj,C.fhk,C.cas,C.cat,C.car,C.cah,C.cai,C.cae,C.caf,C.cag,C.caJ,C.caE,C.caz,C.caA,C.caC,C.caF,C.caH,C.fpx,C.cam,C.cap,C.caq,C.caw,C.cax,C.fsl,C.frs,C.cal,C.caj,C.fpr,C.faP,C.cac,C.eJL,C.fdG,C.eln,C.ehN,C.ehO,C.ejn,C.ejb,C.ejc,C.eha,C.el8,C.el9,C.ela,C.egz,C.eiR,C.eiT,C.eit,C.eiq,C.ehJ,C.ehK,C.eiA,C.egB,C.eiM,C.eiN,C.eiL,C.eiP,C.eiO,C.ej6,C.ej7,C.ej9,C.ej2,C.egU,C.egR,C.ejg,C.egJ,C.el7,C.efh,C.egM,C.egL,C.eg_,C.eg4,C.eg2,C.eg0,C.elf,C.elg,C.elh,C.ele,C.ekM,C.ekL,C.ekF,C.ekH,C.ekx,C.el5,C.el3,C.efp,C.efl,C.ehH,C.eg8,C.efA,C.efz,C.efW,C.efX,C.eh8,C.ega,C.ege,C.ej_,C.eky,C.ekz,C.ekA,C.ekB,C.egD,C.egE,C.egF,C.ei9,C.eh4,C.egX,C.eh3,C.eij,C.eik,C.ek6,C.ek8,C.eks,C.eku,C.ek9,C.eka,C.eg6,C.ehM,C.ehL,C.ekW,C.egu,C.egm,C.egn,C.egq,C.egr,C.eio,C.ehs,C.eht,C.ehu,C.ehv,C.ehw,C.ehx,C.ehy,C.ehz,C.ehA,C.ehB,C.ehC,C.ejk,C.cX3,C.cX4,C.em2,C.fsb,C.fsk,C.fsa,C.fsg,C.f1z,C.fAO,C.fAP,C.fAQ,C.elv,C.elE,C.efa,C.ef5,C.ef6,C.fmu,C.fmt,C.fmv,C.fmA,C.fmw,C.fmx,C.eWW,C.eWX,C.e5H,C.cdj])
u(B.jp,[C.cAt,C.eVo,C.eVt,C.eVu,C.eVp,C.eVq,C.eVr,C.eVh,C.eVi,C.eVk,C.eVl,C.eVy,C.eVx,C.eVn,C.eVm,C.eVv,C.eVw,C.eVB,C.eVC,C.eVA,C.cBO,C.cBS,C.cBQ,C.cBG,C.cBH,C.cBJ,C.cBC,C.cBD,C.cBK,C.cBB,C.cBA,C.cBz,C.cB2,C.cB1,C.cB4,C.cBc,C.cB5,C.cB3,C.cB7,C.cB8,C.cB9,C.cB6,C.cBa,C.cBe,C.cBf,C.cBg,C.cBh,C.fh1,C.fh2,C.fh_,C.fh0,C.e0v,C.e0t,C.e0u,C.e0w,C.e0x,C.dSS,C.fh5,C.fh6,C.fh9,C.fha,C.fhd,C.fhe,C.e5I,C.fp1,C.fp0,C.e90,C.e9_,C.e8E,C.e8A,C.e8L,C.e8M,C.e8N,C.e8G,C.e8H,C.e8I,C.e8J,C.e8F,C.e8C,C.e8D,C.e8T,C.e8U,C.e8S,C.e8V,C.e8R,C.e8Q,C.e8P,C.e8Y,C.e8O,C.e8B,C.eab,C.ea_,C.ea0,C.ea6,C.ea1,C.ea3,C.ea2,C.eaa,C.eGb,C.eGz,C.eFV,C.eFW,C.eFT,C.eFU,C.eGF,C.eGE,C.eGD,C.eGI,C.eGH,C.eFK,C.eFO,C.eFJ,C.eFI,C.eFF,C.eFH,C.eFG,C.eHg,C.eH9,C.eH7,C.eHa,C.eH6,C.eHb,C.eH5,C.eHc,C.eHd,C.eHe,C.eH4,C.eGR,C.eGM,C.eGX,C.eGQ,C.eH0,C.eGP,C.eH1,C.eGO,C.eH2,C.eGN,C.eGw,C.eGv,C.eGx,C.eGu,C.eGy,C.eGo,C.eGn,C.eGp,C.eGm,C.eGl,C.eGk,C.eFs,C.eFn,C.eFC,C.eFx,C.eFD,C.eFw,C.eFE,C.eFv,C.eGr,C.eGf,C.eGe,C.eGg,C.eGd,C.eGh,C.eGc,C.eGA,C.eGL,C.eGK,C.eG1,C.frZ,C.fs0,C.fs4,C.fkl,C.fmM,C.fmK,C.fmL,C.eNi,C.eNj,C.eNf,C.eN9,C.eN8,C.eNb,C.eNc,C.eMZ,C.eN_,C.eN1,C.eN2,C.eN3,C.eN0,C.eN5,C.eNw,C.eNx,C.eNv,C.eNy,C.eNu,C.eNt,C.eNs,C.eNC,C.eNr,C.eNq,C.eNp,C.eNF,C.eNo,C.eNG,C.eNn,C.eNm,C.eN6,C.eN7,C.eNl,C.eNk,C.eMS,C.eMT,C.eMU,C.eMV,C.eMR,C.eMX,C.eMY,C.ddU,C.ddW,C.ddZ,C.de_,C.ddY,C.ddX,C.flt,C.fjj,C.c54,C.c56,C.d37,C.d3c,C.d3d,C.d3b,C.d3a,C.d3f,C.d39,C.d38,C.d3h,C.fyk,C.d9T,C.d9U,C.d9V,C.fhh,C.fhi,C.caK,C.efb,C.efc,C.efd,C.efe,C.faN,C.faO,C.dMR,C.dMQ,C.d03,C.d02,C.elp,C.elo,C.ehP,C.ekv,C.ell,C.ejl,C.elb,C.elc,C.elm,C.eiu,C.egx,C.egy,C.eiS,C.eis,C.eip,C.eir,C.eiv,C.eiw,C.eix,C.eiy,C.eiz,C.eiB,C.egC,C.eiE,C.eiF,C.eiG,C.eiH,C.eiI,C.eiJ,C.eiD,C.eiQ,C.ej3,C.ej1,C.eja,C.eiC,C.egS,C.egT,C.egV,C.ejd,C.ejh,C.efw,C.egQ,C.egO,C.ejp,C.egK,C.ejo,C.egA,C.ehb,C.el6,C.ekw,C.efx,C.efu,C.efk,C.efg,C.efi,C.egN,C.efZ,C.eg3,C.eg1,C.efY,C.ej0,C.eli,C.ekI,C.ekD,C.ekE,C.ekG,C.ehF,C.ehE,C.el4,C.efn,C.efo,C.efq,C.efr,C.efv,C.efm,C.ejm,C.eld,C.ehI,C.eg7,C.efj,C.eh9,C.efs,C.efB,C.efC,C.efD,C.efO,C.efR,C.efS,C.efT,C.efU,C.efV,C.efE,C.efF,C.efG,C.efH,C.efI,C.efJ,C.efK,C.efL,C.efM,C.efN,C.efP,C.efQ,C.eh7,C.eh6,C.eh5,C.eft,C.egb,C.eg9,C.egc,C.egd,C.egP,C.eiW,C.eiX,C.eiU,C.eiV,C.ekC,C.egH,C.egG,C.ei8,C.ei7,C.eia,C.ei6,C.eib,C.ei5,C.eic,C.ei4,C.eid,C.ei3,C.eie,C.ei2,C.eif,C.ei1,C.eig,C.ei0,C.ehU,C.ehV,C.ehW,C.ehT,C.ehX,C.ehS,C.ehY,C.ehR,C.ehZ,C.ehQ,C.ei_,C.eh1,C.eh2,C.egW,C.egY,C.egZ,C.eh_,C.eh0,C.elj,C.elk,C.eii,C.eih,C.eil,C.ejI,C.ejJ,C.ejK,C.ejV,C.ek5,C.ekg,C.ekn,C.eko,C.ekp,C.ekq,C.ekr,C.ejL,C.ejM,C.ejN,C.ejO,C.ejP,C.ejQ,C.ejR,C.ejS,C.ejT,C.ejU,C.ejW,C.ejX,C.ejY,C.ejZ,C.ek_,C.ek0,C.ek1,C.ek2,C.ek3,C.ejy,C.ek4,C.ejG,C.ejF,C.ek7,C.ejE,C.eju,C.ekt,C.ejD,C.ejt,C.ejr,C.ejC,C.ejs,C.ejq,C.ekb,C.ejB,C.ekc,C.ekd,C.eke,C.ekf,C.ejA,C.ekh,C.eki,C.ekj,C.ejz,C.ekk,C.ejx,C.ekl,C.ejw,C.ekm,C.ejv,C.eg5,C.ekP,C.ekO,C.ekQ,C.ekN,C.ehe,C.ehd,C.ehf,C.ehc,C.el_,C.ekV,C.ekZ,C.ekR,C.ekS,C.ekT,C.ekU,C.ekX,C.ekY,C.el2,C.egw,C.egj,C.egk,C.egl,C.egi,C.egp,C.ego,C.egh,C.egg,C.egs,C.egf,C.egt,C.ein,C.eim,C.ehr,C.ehq,C.ehp,C.eho,C.ehn,C.ehm,C.ehl,C.ehk,C.ehh,C.ehj,C.ehi,C.ehg,C.ehD,C.eji,C.ejj,C.cX5,C.cXs,C.cXt,C.cX_,C.cWZ,C.cX2,C.cX0,C.cX1,C.em_,C.elQ,C.elZ,C.elR,C.elS,C.elM,C.elN,C.elO,C.elP,C.em1,C.fsh,C.fsi,C.fsj,C.els,C.elt,C.elu,C.elx,C.ely,C.elB,C.elC,C.elA,C.elD,C.elz,C.elr,C.elq,C.elF,C.elG,C.elI,C.elJ,C.ef9,C.ef8,C.ef4,C.ef7,C.elL,C.elK,C.fmz,C.fmy,C.e5F,C.e5G])
t(C.aP7,B.G)
u(B.ml,[C.a2g,C.av1,C.atJ,C.wW,C.wZ,C.kH,C.rN,C.AB,C.r0,C.vo,C.apJ,C.HC,C.ap8,C.ud,C.me,C.hs,C.a73])
u(C.bKK,[C.csB,C.bKL])
u(C.cdd,[C.cdh,C.aqK])
t(C.cdg,C.cdb)
t(C.cdf,C.cda)
t(C.cdi,C.cdf)
t(C.cde,C.cdc)
t(C.cd8,C.cd9)
t(C.b7C,B.or)
t(C.a6Q,B.wI)
t(C.aTr,B.dE)
t(C.ayA,B.as4)
u(B.af,[C.a_i,C.X4,C.X2,C.aol,C.Uj,C.Um,C.Zm,C.ZR,C.ZQ,C.aBP,C.Ye,C.Mc,C.XM,C.Y6,C.amn,C.aGC,C.Ty,C.axo,C.a69,C.MD,C.awL,C.ID,C.YZ,C.Uw,C.Ux,C.aCa,C.apd,C.a6a])
u(B.ag,[C.aGV,C.avz,C.avv,C.aBD,C.aBW,C.aC_,C.aDk,C.aFe,C.aFd,C.aJM,C.azh,C.aJf,C.axF,C.bdr,C.aJ0,C.aL4,C.aJe,C.bbl,C.aJK,C.aJY,C.aHW,C.ba7,C.aJZ,C.aCd,C.bhM,C.aCb,C.aCe,C.bhv])
u(B.at,[C.avx,C.abz,C.aaZ,C.bgz,C.abC,C.adg,C.aZn,C.bpM,C.aZH,C.bj4,C.bol,C.aXC,C.aZK,C.abF,C.abX,C.aZI,C.HB,C.aXF,C.bam,C.Of,C.IK,C.beY,C.beX,C.bsa])
u(B.G8,[C.b9P,C.brb,C.aHe,C.bcu,C.boJ])
u(B.nc,[C.b9O,C.b6l,C.boG,C.b9l,C.bcS,C.bf3,C.bbY,C.bcP,C.bcw,C.blf,C.b7u,C.b77,C.bs7,C.bp8,C.boh,C.bbR,C.aZF,C.bng,C.boe])
t(C.bhs,C.aJM)
t(C.bgP,C.aJf)
t(C.bgB,C.aJ0)
t(C.brE,C.aL4)
t(C.bgM,C.aJe)
t(C.bhq,C.aJK)
t(C.bus,C.aJY)
t(C.aCc,C.bus)
t(C.ba8,C.aHW)
t(C.aCf,C.aJZ)
t(C.brZ,B.iM)
t(C.a72,B.kg)
t(C.cdl,C.b0p)
t(C.agn,C.a1k)
u(B.W5,[C.aOY,C.aQr])
t(C.auE,C.aOY)
w(C.aJM,B.c8)
w(C.aJf,B.c8)
w(C.aJ0,B.c8)
w(C.aJe,B.c8)
w(C.aJK,B.c8)
w(C.aL4,B.c8)
w(C.aHW,B.eO)
w(C.aJY,B.c8)
v(C.bus,B.er)
w(C.aJZ,B.c8)})()
B.ki(b.typeUniverse,JSON.parse('{"aPH":{"hA":["aPH"]},"nz":{"aPH":[],"hA":["aPH"]},"aP7":{"G":["Qq"],"G.E":"Qq"},"b7C":{"or":[]},"a6Q":{"wI":[],"nV":[]},"aTr":{"dE":[],"cw":[],"r":[]},"ayA":{"aS":[],"d4":["aS"],"aQ":[],"cs":[]},"a_i":{"af":[],"r":[]},"aGV":{"ag":["a_i"]},"X4":{"af":[],"r":[]},"X2":{"af":[],"r":[]},"avz":{"ag":["X4"]},"avv":{"ag":["X2"]},"avx":{"at":[],"r":[]},"aol":{"af":[],"r":[]},"aBD":{"ag":["aol"]},"abz":{"at":[],"r":[]},"aaZ":{"at":[],"r":[]},"abC":{"at":[],"r":[]},"adg":{"at":[],"r":[]},"bgz":{"at":[],"r":[]},"Uj":{"af":[],"r":[]},"aBW":{"ag":["Uj"]},"aZn":{"at":[],"r":[]},"b9P":{"aB":[]},"b9O":{"aB":[]},"brb":{"aB":[]},"b6l":{"aB":[]},"boG":{"aB":[]},"Um":{"af":[],"r":[]},"aC_":{"ag":["Um"]},"b9l":{"aB":[]},"Zm":{"af":[],"r":[]},"aDk":{"ag":["Zm"]},"bcS":{"aB":[]},"ZR":{"af":[],"r":[]},"ZQ":{"af":[],"r":[]},"aBP":{"af":[],"r":[]},"Ye":{"af":[],"r":[]},"aFe":{"ag":["ZR"]},"aFd":{"ag":["ZQ"]},"bhs":{"ag":["aBP"]},"bf3":{"aB":[]},"azh":{"ag":["Ye"]},"bpM":{"at":[],"r":[]},"aZH":{"at":[],"r":[]},"bj4":{"at":[],"r":[]},"Mc":{"af":[],"r":[]},"XM":{"af":[],"r":[]},"bgP":{"ag":["Mc"]},"bol":{"at":[],"r":[]},"bbY":{"aB":[]},"aXC":{"at":[],"r":[]},"axF":{"ag":["XM"]},"Y6":{"af":[],"r":[]},"bdr":{"ag":["Y6"]},"bcP":{"aB":[]},"bcw":{"aB":[]},"blf":{"aB":[]},"b7u":{"aB":[]},"b77":{"aB":[]},"bs7":{"aB":[]},"bp8":{"aB":[]},"boh":{"aB":[]},"bbR":{"aB":[]},"amn":{"af":[],"r":[]},"aZK":{"at":[],"r":[]},"bgB":{"ag":["amn"]},"abF":{"at":[],"r":[]},"abX":{"at":[],"r":[]},"aGC":{"af":[],"r":[]},"Ty":{"af":[],"r":[]},"HB":{"at":[],"r":[]},"axo":{"af":[],"r":[]},"a69":{"af":[],"r":[]},"aZI":{"at":[],"r":[]},"aZF":{"aB":[]},"brE":{"ag":["aGC"]},"aHe":{"aB":[]},"bgM":{"ag":["Ty"]},"bbl":{"ag":["axo"]},"bhq":{"ag":["a69"]},"aXF":{"at":[],"r":[]},"bcu":{"aB":[]},"bng":{"aB":[]},"boe":{"aB":[]},"awL":{"af":[],"r":[]},"ID":{"af":[],"r":[]},"YZ":{"af":[],"r":[]},"IK":{"at":[],"r":[]},"MD":{"af":[],"r":[]},"aCc":{"ag":["MD"],"er":[]},"ba8":{"ag":["awL"]},"bam":{"at":[],"r":[]},"ba7":{"ag":["ID"]},"Of":{"at":[],"r":[]},"aCf":{"ag":["YZ"]},"boJ":{"aB":[]},"beY":{"at":[],"r":[]},"beX":{"at":[],"r":[]},"Uw":{"af":[],"r":[]},"Ux":{"af":[],"r":[]},"aCa":{"af":[],"r":[]},"apd":{"af":[],"r":[]},"aCd":{"ag":["Uw"]},"bhM":{"ag":["Ux"]},"aCb":{"ag":["aCa"]},"brZ":{"iM":[]},"aCe":{"ag":["apd"]},"bsa":{"at":[],"r":[]},"a6a":{"af":[],"r":[]},"bhv":{"ag":["a6a"]},"a72":{"kg":["fp<eG>"],"k3":["fp<eG>"]},"agn":{"a1k":[]},"aOY":{"iX":[],"fb":[]},"auE":{"iX":[],"fb":[]},"aQr":{"iX":[],"fb":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aA
return{bu:w("Ku"),U:w("uW<pC>"),bz:w("w"),M:w("eS<n>"),bo:w("jr"),g7:w("KZ"),gc:w("ax<ir?>"),bq:w("ax<~>"),cc:w("a3l"),fS:w("D0"),an:w("ajZ"),bm:w("P<Qq>"),X:w("P<agD>"),f3:w("P<aPH>"),aK:w("P<mS>"),V:w("P<ac>"),O:w("P<w>"),fA:w("P<ll>"),d5:w("P<ax<bt<H,+icon3d,picture(n?,n?)>>>"),bH:w("P<ax<dB>>"),fG:w("P<ax<~>>"),aF:w("P<mX>"),cd:w("P<ak<je>>"),ez:w("P<a1<n,aC>>"),d:w("P<a1<n,@>>"),B:w("P<ma>"),h:w("P<je>"),gE:w("P<yJ>"),k:w("P<o0>"),g:w("P<lt>"),D:w("P<hW>"),u:w("P<eD>"),m:w("P<ud>"),i:w("P<hs>"),aC:w("P<a6r>"),o:w("P<yL>"),e3:w("P<aC>"),dN:w("P<u>"),v:w("P<hB>"),cR:w("P<iK>"),J:w("P<j6>"),gx:w("P<oM<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(O,O)>"),ek:w("P<+(H,n)>"),n:w("P<+(H,H)>"),r:w("P<cO>"),s:w("P<n>"),aS:w("P<iM>"),p:w("P<r>"),eR:w("P<fb>"),fT:w("P<b63>"),bx:w("P<aCO>"),gz:w("P<adq>"),x:w("P<O>"),t:w("P<H>"),dS:w("P<aB?>"),bA:w("P<u?>"),Z:w("P<H?>"),cA:w("P<cj>"),A:w("cq<ag<af>>"),gL:w("ak<o0>"),R:w("ak<hW>"),j:w("ak<@>"),bW:w("ak<H>"),e:w("bt<H,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<H,+icon3d,picture(n?,n?)>"),bR:w("J<hs,r>"),eC:w("J<nq,n>"),cT:w("J<jw,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<H,ph>"),gh:w("J<me,jg<me>>"),w:w("iH"),ei:w("ir"),g2:w("qR"),fB:w("Dz"),b6:w("yJ"),gX:w("a6j"),dt:w("l3"),ea:w("o0"),bt:w("lt"),I:w("hW"),F:w("eD"),fO:w("me"),ff:w("ud"),fP:w("hs"),Q:w("vo"),dO:w("ap9"),a:w("cm"),C:w("aC"),dw:w("aqL"),di:w("a73"),Y:w("eG"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("E3"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("dY<n>"),N:w("n"),fw:w("pC"),bO:w("ap"),K:w("bm<u>"),b:w("bm<O>"),E:w("dB"),W:w("cz<n>"),ac:w("cz<H>"),ex:w("k6<lt>"),cI:w("k6<n>"),cl:w("k6<O>"),b4:w("a3<l0>"),a8:w("a3<lR>"),fR:w("a3<+(n,n)>"),co:w("e4<u>"),l:w("r"),b2:w("bQ<~>"),ev:w("pD<dT>"),dT:w("bg<~>"),cQ:w("ayA"),q:w("mK"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hW>?"),c:w("ak<@>?"),aP:w("ir?"),af:w("hW?"),go:w("aZM?"),a6:w("a6s?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dB,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dB?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aQp=new B.bI(A.ax,null,null,H.akf,null)
D.aQy=new B.da(0,-0.15)
D.aQA=new B.da(0.62,0)
D.aQD=new B.da(-0.35,-0.45)
D.aQN=new B.da(0.9,-0.85)
D.aHX=new B.aZ(30,30)
D.aS4=new B.bv(D.aHX,D.aHX,A.h9,A.h9)
D.aSi=new B.az(A.b2,1,A.r,-1)
D.b9x=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aSu=new B.az(D.b9x,1,A.r,-1)
D.aSG=new B.az(A.aD,1.5,A.r,-1)
D.aSL=new B.az(A.b2,1.6,A.r,-1)
D.aT0=new B.az(A.aD,1.4,A.r,-1)
D.aUk=new B.o(null,null,null,null,null,K.Fy,A.a6)
D.bLl=new B.a5(A.a3,A.a7,A.x,G.a0r,null,null)
D.aUs=new B.o(null,null,null,null,null,D.bLl,A.a6)
D.a8h=new B.o(A.az,null,null,A.rg,null,null,A.n)
D.b44=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b9v=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cHL=w([D.b44,D.b9v],x.O)
D.e0E=new B.bS(A.A,0.5,A.x,null,0,D.cHL,null,null)
D.aUJ=new B.o(null,null,null,null,null,D.e0E,A.a6)
D.UI=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aUL=new B.o(D.UI,null,H.a7W,null,null,null,A.n)
D.bN1=new B.a5(A.a3,A.a7,A.x,A.Or,null,null)
D.aUS=new B.o(null,null,null,null,null,D.bN1,A.a6)
D.a9F=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aUU=new B.o(D.a9F,null,null,A.rh,null,null,A.n)
D.aUY=new B.o(A.k4,null,null,null,null,null,A.a6)
D.aTj=new B.bY(A.zb,A.Z,A.Z,A.Z)
D.aV0=new B.o(Y.aaF,null,D.aTj,A.lO,null,null,A.n)
D.CV=new B.o(A.dW,null,null,null,null,null,A.a6)
D.aV7=new B.o(null,null,null,null,null,E.v5,A.a6)
D.cMn=w([E.abm,A.bW],x.O)
D.bME=new B.a5(A.b1,A.b3,A.x,D.cMn,null,null)
D.aVb=new B.o(null,null,null,A.lO,null,D.bME,A.n)
D.cWk=w([A.bk,A.dW,A.jE],x.O)
D.ZC=new B.a5(A.ax,A.aC,A.x,D.cWk,null,null)
D.aVn=new B.o(null,null,null,null,null,D.ZC,A.n)
D.aVo=new B.o(D.a9F,null,null,A.kp,null,null,A.n)
D.cd_=w([A.dm,A.bk],x.O)
D.bMw=new B.a5(A.ax,A.aC,A.x,D.cd_,null,null)
D.aVs=new B.o(null,null,null,null,null,D.bMw,A.n)
D.aVC=new B.o(null,null,null,null,null,G.tn,A.a6)
D.aVU=new B.o(A.abn,null,null,null,null,null,A.a6)
D.b4L=new B.w(0.5647058823529412,0,0,0,A.t)
D.a8r=new B.ac(0,A.G,D.b4L,A.Qd,28)
D.aXT=new B.aTE()
D.aYC=new C.b7C()
D.a8X=new B.cv(A.A,null,null,A.Zr,null)
D.b01=new B.fg(null,null,null,null,null,E.mE,null,null,null,null)
D.aZ8=new B.cv(A.A,null,null,D.b01,null)
D.bx7=new B.ad(A.dS,28,A.c,null,null,null)
D.aZA=new B.cv(A.A,null,null,D.bx7,null)
D.b_Z=new B.fg(2,null,null,null,null,A.bU,null,null,null,null)
D.aZV=new B.cv(A.A,null,null,D.b_Z,null)
D.bxs=new B.ad(K.M8,40,A.bM,null,null,null)
D.aZW=new B.cv(A.A,null,null,D.bxs,null)
D.b0L=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b0W=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b1i=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b1o=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b1S=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b28=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b29=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Jo=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b2v=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b2A=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a9V=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b3f=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b3V=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.aa9=new B.w(1,1,1,0.9725490196078431,A.t)
D.b4b=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b4l=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b4n=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b4w=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b4R=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b64=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Ur=new B.w(0.8509803921568627,0,0,0,A.t)
D.b6c=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b6i=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aaW=new B.w(0.6,0,0,0,A.t)
D.aaY=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b7E=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rz=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b82=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b8r=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b8M=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abz=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.UQ=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zJ=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.JO=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iZ=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.abV=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.UY=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bbJ=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bc5=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bcj=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Ve=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bdi=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wx=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bdF=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bdW=new B.hz(A.b9,!0,null,null)
D.eTn=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgJ=new B.x("Bio link",null,D.eTn,null,null,null,null,null,null,null,null,null)
D.aZP=new B.cv(A.A,null,null,D.fgJ,null)
D.beb=new B.hz(A.TW,!0,D.aZP,null)
D.K9=new C.a2g(0,"none")
D.acU=new C.a2g(1,"deflate")
D.acV=new C.a2g(2,"bzip2")
D.beS=new B.ka(0.165,0.84,0.44,1)
D.cMG=w([A.cd,A.dM,A.aD],x.O)
D.bLO=new B.a5(A.ax,A.aC,A.x,D.cMG,null,null)
D.aUp=new B.o(null,null,null,null,null,D.bLO,A.n)
D.bG9=new B.ad(A.eO,null,A.af,null,null,null)
D.b_p=new B.cv(A.A,null,null,D.bG9,null)
D.bfp=new B.kE(D.aUp,A.bc,D.b_p,null)
D.bbW=new B.w(0.058823529411764705,1,1,1,A.t)
D.cPI=w([A.bH,A.qc,A.qc,D.bbW],x.O)
D.ctZ=w([0,0.32,0.7,1],x.x)
D.bMl=new B.a5(A.ax,A.aC,A.x,D.cPI,D.ctZ,null)
D.aUe=new B.o(null,null,null,null,null,D.bMl,A.n)
D.bfv=new B.kE(D.aUe,A.bc,null,null)
D.bgv=new B.m2(1,1,null,null,null,A.bj,null)
D.bgy=new B.m2(1,null,null,null,null,D.UY,null)
D.bh1=new B.b9(125e4)
D.bh7=new B.b9(17e4)
D.bhh=new B.b9(35964e8)
D.bhn=new B.b9(55e4)
D.bhr=new B.b9(68e4)
D.bhR=new B.i7(0,0,0,5)
D.bi8=new B.N(0,16,16,0)
D.bib=new B.N(0,18,0,8)
D.bij=new B.N(0,36,0,36)
D.biq=new B.N(0,54,0,0)
D.bix=new B.N(10,0,10,3)
D.biI=new B.i7(10,16,10,10)
D.biS=new B.N(10,6,10,0)
D.biV=new B.N(10,6,4,6)
D.biY=new B.N(10,8,10,6)
D.adQ=new B.N(11,8,11,11)
D.bj2=new B.N(12,0,12,10)
D.bj3=new B.N(12,0,12,24)
D.bjf=new B.N(12,12,12,4)
D.bji=new B.N(12,12,8,12)
D.bjx=new B.N(12,8,8,12)
D.bjU=new B.N(14,14,14,0)
D.bjZ=new B.N(14,14,14,90)
D.bki=new B.N(16,10,16,16)
D.bkj=new B.N(16,10,16,20)
D.aeD=new B.N(16,6,16,28)
D.bkS=new B.N(18,0,18,10)
D.bkU=new B.N(18,0,18,30)
D.bkW=new B.N(18,10,18,12)
D.bkX=new B.N(18,10,18,14)
D.bld=new B.N(18,16,14,18)
D.bli=new B.N(18,18,18,12)
D.blo=new B.N(18,26,18,12)
D.blt=new B.N(18,34,18,34)
D.blu=new B.N(18,4,18,14)
D.blA=new B.N(18,8,18,24)
D.blS=new B.N(20,16,14,4)
D.blX=new B.N(20,18,12,4)
D.bm1=new B.N(20,20,12,20)
D.bm4=new B.N(20,22,20,20)
D.bm9=new B.N(20,6,20,6)
D.bmj=new B.N(22,18,22,18)
D.bmr=new B.N(22,24,22,0)
D.bmu=new B.N(22,24,22,4)
D.bmC=new B.N(22,60,22,22)
D.bmI=new B.N(24,24,24,22)
D.bmS=new B.N(26,10,60,10)
D.bmZ=new B.N(28,44,28,44)
D.bnf=new B.N(32,44,32,44)
D.bnn=new B.N(38,30,38,20)
D.bns=new B.N(4,0,0,6)
D.bnF=new B.i7(4,4,4,4)
D.bo4=new B.i7(6,5,6,5)
D.bo8=new B.N(6,6,8,6)
D.boj=new B.N(8,14,8,14)
D.bok=new B.N(8,22,8,22)
D.bot=new B.N(8,6,12,6)
D.boC=new B.N(8,8,8,4)
D.aft=new B.N(9,9,9,6)
D.boL=new B.i7(2.5,2.5,2.5,2.5)
D.boM=new B.N(10.5,0,10.5,0)
D.boN=new B.N(7,1.5,7,1.5)
D.cF0=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bp2=new B.y9(null,null,D.cF0,A.zo)
D.cCg=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bp3=new B.y9(null,null,D.cCg,A.zo)
D.aMy=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg5=new B.x("WORD DESIGN",null,D.aMy,null,null,null,null,null,null,null,null,null)
D.bpv=new B.bH(1,A.bo,D.fg5,null)
D.ffM=new B.x("Slides database",null,A8.yI,null,null,null,null,null,null,null,null,null)
D.fda=new B.x("Admin only \xb7 keep as many as you like",null,U.aM4,null,null,null,null,null,null,null,null,null)
D.d2B=w([D.ffM,A.bB,D.fda],x.p)
D.beA=new B.fo(A.aj,A.e,A.j,A.F,null,A.p,null,0,D.d2B,null)
D.bpy=new B.bH(1,A.bo,D.beA,null)
D.f87=new B.x("NGMY logo",null,A.fT,null,null,null,null,null,null,null,null,null)
D.bpB=new B.bH(1,A.bo,D.f87,null)
D.eRh=new B.F(!0,A.af,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new B.x("TALK TO THE EDITOR",null,D.eRh,null,null,null,null,null,null,null,null,null)
D.bpQ=new B.bH(1,A.bo,D.fhU,null)
D.f2j=new B.x("Tell the AI what to change",null,A8.yI,null,null,null,null,null,null,null,null,null)
D.bq9=new B.bH(1,A.bo,D.f2j,null)
D.bqO=new B.CR(!0,"video/mp4")
D.ePz=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0y=new B.x("Move presentations between devices",null,D.ePz,null,null,null,!1,null,null,1,null,null)
D.bqS=new B.pW(A.ec,A.a3,A.f,D.f0y,null)
D.f1A=new B.x("Edit in Slides",null,A.jV,null,null,null,null,null,null,null,null,null)
D.bqT=new B.pW(A.ec,A.A,A.f,D.f1A,null)
D.br7=new B.dl(1,A.ch,D.bqT,null)
D.XU=new B.a0(60988,"MaterialIcons",!1)
D.bsH=new B.a0(61352,"MaterialIcons",!1)
D.agX=new B.a0(61531,"MaterialIcons",!1)
D.btT=new B.a0(63062,"MaterialIcons",!1)
D.bu_=new B.a0(63109,"MaterialIcons",!1)
D.bub=new B.a0(63206,"MaterialIcons",!1)
D.ahE=new B.a0(63238,"MaterialIcons",!1)
D.Yq=new B.a0(63365,"MaterialIcons",!1)
D.Yr=new B.a0(63367,"MaterialIcons",!1)
D.Ys=new B.a0(63368,"MaterialIcons",!1)
D.ahP=new B.a0(63384,"MaterialIcons",!1)
D.buL=new B.a0(63525,"MaterialIcons",!1)
D.buO=new B.a0(63568,"MaterialIcons",!1)
D.bv7=new B.a0(983072,"MaterialIcons",!1)
D.bvw=new B.a0(983271,"MaterialIcons",!0)
D.bwl=new B.a0(983924,"MaterialIcons",!1)
D.aiW=new B.a0(983965,"MaterialIcons",!1)
D.aiX=new B.a0(983966,"MaterialIcons",!1)
D.bwv=new B.a0(984592,"MaterialIcons",!1)
D.bwL=new B.ad(A.t7,16,A.aA,null,null,null)
D.bwS=new B.ad(A.ma,null,A.c,null,null,null)
D.aj6=new B.ad(A.pp,18,A.c,null,null,null)
D.bx8=new B.ad(A.Aw,18,N.l_,null,null,null)
D.bxO=new B.ad(A.j7,11,null,null,null,null)
D.bxY=new B.ad(A.Ya,null,A.ew,null,null,null)
D.byw=new B.ad(A.qv,18,A.aA,null,null,null)
D.byC=new B.ad(A1.AL,14,null,null,null,null)
D.byD=new B.ad(A.e8,28,A.cx,null,null,null)
D.byP=new B.ad(A.pq,20,A.c,null,null,null)
D.byW=new B.ad(A.xo,null,null,null,null,null)
D.bz1=new B.ad(A.jr,18,A.hq,null,null,null)
D.bz6=new B.ad(A.l3,null,null,null,null,null)
D.bzz=new B.ad(A.YI,28,A.c,null,null,null)
D.btW=new B.a0(63065,"MaterialIcons",!1)
D.bzI=new B.ad(D.btW,15,A.c,null,null,null)
D.bu1=new B.a0(63113,"MaterialIcons",!1)
D.bzO=new B.ad(D.bu1,null,A.af,null,null,null)
D.bAb=new B.ad(A.uN,22,A.bJ,null,null,null)
D.bAv=new B.ad(A.x9,18,null,null,null,null)
D.bAA=new B.ad(A.AO,12,A.c,null,null,null)
D.bw6=new B.a0(983687,"MaterialIcons",!1)
D.bAL=new B.ad(D.bw6,null,A.bk,null,null,null)
D.bAS=new B.ad(A.ht,null,A.bk,null,null,null)
D.bBa=new B.ad(A.on,22,A.c,null,null,null)
D.bBe=new B.ad(A.cu,13,A.c,null,null,null)
D.bBk=new B.ad(A.e8,26,A.aE,null,null,null)
D.bBn=new B.ad(A.qy,26,A.c,null,null,null)
D.Mk=new B.ad(A.j7,8,A.c,null,null,null)
D.bBF=new B.ad(A.pp,40,A.c,null,null,null)
D.bBG=new B.ad(A.brE,null,null,null,null,null)
D.bBK=new B.ad(A.tg,20,null,null,null,null)
D.bw5=new B.a0(983683,"MaterialIcons",!1)
D.bBU=new B.ad(D.bw5,null,A.aZ,null,null,null)
D.bBV=new B.ad(A.j7,16,A.bk,null,null,null)
D.bCf=new B.ad(A.tl,null,null,null,null,null)
D.ajE=new B.ad(A.uQ,22,A.c,null,null,null)
D.bCj=new B.ad(A.dS,17,A.c,null,null,null)
D.ajF=new B.ad(A.j7,9,A.c,null,null,null)
D.bCo=new B.ad(A.uK,null,null,null,null,null)
D.brV=new B.a0(57744,"MaterialIcons",!1)
D.bCv=new B.ad(D.brV,null,null,null,null,null)
D.bCy=new B.ad(A.uK,16,null,null,null,null)
D.bwC=new B.a0(985181,"MaterialIcons",!1)
D.Fp=new B.ad(D.bwC,null,null,null,null,null)
D.bCK=new B.ad(A.l3,16,A.bJ,null,null,null)
D.bvY=new B.a0(983615,"MaterialIcons",!1)
D.bCM=new B.ad(D.bvY,12,A.c,null,null,null)
D.ajL=new B.ad(A.x5,16,null,null,null,null)
D.bCU=new B.ad(A.dS,21,A.c,null,null,null)
D.bCZ=new B.ad(A.ht,17,A.c,null,null,null)
D.bD_=new B.ad(A.uN,null,null,null,null,null)
D.bDe=new B.ad(A.Z5,20,A.aA,null,null,null)
D.bDt=new B.ad(A.po,22,E.mE,null,null,null)
D.bDA=new B.ad(A.pn,13,A.af,null,null,null)
D.bDC=new B.ad(A.aiL,20,A.aA,null,null,null)
D.brC=new B.a0(57495,"MaterialIcons",!1)
D.bDH=new B.ad(D.brC,null,null,null,null,null)
D.bDL=new B.ad(A.ny,18,A.c,null,null,null)
D.bE5=new B.ad(A.tk,28,A.c,null,null,null)
D.bEf=new B.ad(D.ahE,null,A.aD,null,null,null)
D.bEg=new B.ad(A.pq,22,A.c,null,null,null)
D.ajU=new B.ad(A.XQ,16,null,null,null,null)
D.bF0=new B.ad(A.uN,32,A.c,null,null,null)
D.bFH=new B.ad(A.iP,22,A.c,null,null,null)
D.bFL=new B.ad(A.qy,22,A.af,null,null,null)
D.ak8=new B.ad(A.t7,null,A.bZ,null,null,null)
D.bGE=new B.ad(A.uO,18,null,null,null,null)
D.bHf=new B.ad(A.dS,18,A.cr,null,null,null)
D.Zu=new B.ad(A.cu,18,A.aA,null,null,null)
D.bHl=new B.ad(A.aiE,null,null,null,null,null)
D.bHL=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aMm,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.eI3=new B.F(!0,A.bI,null,null,null,null,null,A.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bI2=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eI3,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.bIt=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.cIE=w([A.dW,A.aD],x.O)
D.bJE=new B.a5(A.a3,A.a7,A.x,D.cIE,null,null)
D.bJQ=new B.a5(A.b1,A.b3,A.Sa,A.ara,null,null)
D.b19=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b4U=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b7F=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b37=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cu0=w([D.b19,D.b4U,D.b7F,D.b37],x.O)
D.bK8=new B.a5(A.ax,A.aC,A.x,D.cu0,A.FY,null)
D.d2I=w([A.cL,A.by,A.b2],x.O)
D.bKa=new B.a5(A.b1,A.b3,A.Sa,D.d2I,null,null)
D.d3T=w([A.bk,A.c8],x.O)
D.bKe=new B.a5(A.a3,A.a7,A.x,D.d3T,null,null)
D.d_o=w([A.hp,A.dn,A.aR],x.O)
D.bKg=new B.a5(A.ax,A.aC,A.x,D.d_o,null,null)
D.cOe=w([A.cY,A.f5],x.O)
D.bKk=new B.a5(A.a3,A.a7,A.x,D.cOe,null,null)
D.d2D=w([N.l_,A.dn],x.O)
D.akU=new B.a5(A.a3,A.a7,A.x,D.d2D,null,null)
D.b5p=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d2A=w([D.b5p,D.wx,A.bU],x.O)
D.bKp=new B.a5(A.a3,A.a7,A.x,D.d2A,null,null)
D.cKe=w([A.bf,A.d1,A.ft],x.O)
D.bKq=new B.a5(A.ax,A.aC,A.x,D.cKe,null,null)
D.My=new B.a5(A.a3,A.a7,A.x,A.G9,null,null)
D.bcD=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cn8=w([D.bcD,A.bU,A.j0],x.O)
D.akZ=new B.a5(A.ax,A.aC,A.x,D.cn8,null,null)
D.cT5=w([A.wm,A.au,D.zJ],x.O)
D.bLm=new B.a5(A.a3,A.a7,A.x,D.cT5,null,null)
D.bdG=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b3U=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b8C=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cJo=w([D.bdG,D.b3U,D.b8C],x.O)
D.al_=new B.a5(A.a3,A.a7,A.x,D.cJo,null,null)
D.b5q=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bNh=w([Ar.acC,D.b5q],x.O)
D.bLv=new B.a5(A.b1,A.b3,A.x,D.bNh,null,null)
D.cHz=w([A.mD,A.bM],x.O)
D.bLz=new B.a5(A.b1,A.b3,A.x,D.cHz,null,null)
D.cXJ=w([A.aD,A.dM],x.O)
D.bLF=new B.a5(A.a3,A.a7,A.x,D.cXJ,null,null)
D.abI=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.asQ=w([D.abI,D.iZ,D.Jo],x.O)
D.bM6=new B.a5(A.ax,A.aC,A.x,D.asQ,null,null)
D.cn0=w([A.dt,A.dI],x.O)
D.bMh=new B.a5(A.b1,A.b3,A.x,D.cn0,null,null)
D.cV4=w([A.uf,Au.Dw],x.O)
D.bN3=new B.a5(A.a3,A.a7,A.x,D.cV4,null,null)
D.f9z=new B.x("Which Bio link?",null,A.cs,null,null,null,null,null,null,null,null,null)
D.bNe=new B.pn(null,D.f9z,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xP=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a2e=new C.kH(2,"elegantNavy")
D.fAz=w([A.UO,D.iZ,A.bU],x.O)
D.ju=new C.wW(0,"classic")
D.a21=new C.je("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a2e,4294967035,4279378237,4290283019,D.ju)
D.aBR=new C.kH(3,"elegantGold")
D.b0K=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b1A=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.aau=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fA1=w([D.b0K,D.b1A,D.aau],x.O)
D.a2_=new C.je("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aBR,4294966515,4281016592,4289102906,D.ju)
D.dor=new C.kH(22,"goldRibbon")
D.fzY=w([A.UO,D.iZ,A.hR],x.O)
D.a1T=new C.je("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dor,4294967035,4279378237,4291404327,D.ju)
D.dos=new C.kH(23,"goldBaroque")
D.ab3=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fA3=w([D.ab3,A.au,A.j0],x.O)
D.a1U=new C.je("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dos,4294964964,4283053072,4292128567,D.ju)
D.dou=new C.kH(4,"elegantEmerald")
D.b2H=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b3u=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fA9=w([D.b2H,D.b3u,A.hR],x.O)
D.a1V=new C.je("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dou,4294376440,4279122734,4291404327,D.ju)
D.dov=new C.kH(5,"elegantBurgundy")
D.b6H=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fAg=w([D.b6H,A.a9O,A.hR],x.O)
D.a1Y=new C.je("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dov,4294965238,4283043359,4291404327,D.ju)
D.doo=new C.kH(19,"goldFiligree")
D.JU=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fA4=w([D.JU,A.au,A.j0],x.O)
D.a1W=new C.je("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.doo,4294966259,4279378237,4292128567,D.ju)
D.dop=new C.kH(20,"goldLaurel")
D.bct=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fAh=w([A.Ji,A.hR,D.bct],x.O)
D.a1X=new C.je("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dop,4294966776,4282000405,4291404327,D.ju)
D.doq=new C.kH(21,"goldCrest")
D.a9I=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bcA=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fA6=w([D.a9I,A.au,D.bcA],x.O)
D.a20=new C.je("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.doq,4294965484,4283053072,4292128567,D.ju)
D.dot=new C.kH(24,"goldStar")
D.bdC=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fAa=w([D.bdC,A.au,D.iZ],x.O)
D.a1Z=new C.je("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dot,4294966518,4279378237,4292128567,D.ju)
D.FA=w([D.a21,D.a2_,D.a1T,D.a1U,D.a1V,D.a1Y,D.a1W,D.a1X,D.a20,D.a1Z],x.h)
D.pD=new C.me(0,"blank")
D.Q2=new C.me(1,"title")
D.mj=new C.me(2,"titleContent")
D.dJ3=new C.me(3,"twoColumn")
D.BG=new C.me(4,"section")
D.dJ4=new C.me(5,"comparison")
D.GJ=new C.me(6,"flashcard")
D.GK=new C.me(7,"quiz")
D.GL=new C.me(8,"worksheet")
D.all=w([D.pD,D.Q2,D.mj,D.dJ3,D.BG,D.dJ4,D.GJ,D.GK,D.GL],B.aA("P<me>"))
D.bNt=w([0,0,0],x.cA)
D.atM=w([Z.Uh,A.dI],x.O)
D.kb=w([A.bU,A.bJ,A.hQ,A.hz,D.zJ],x.O)
D.dkl=new C.iT("fireworks","Royal Fireworks","Thank you for celebrating with us",D.atM,D.kb)
D.bcL=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b6F=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cHM=w([D.bcL,D.b6F],x.O)
D.dkc=new C.iT("confetti","Golden Confetti","Together we rise",D.cHM,D.kb)
D.cF5=w([A.nd,A.TZ],x.O)
D.dkd=new C.iT("crown","Crown of Glory","Built for our community",D.cF5,D.kb)
D.b3L=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b6k=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cLv=w([D.b3L,D.b6k],x.O)
D.to=w([A.bI,A.aO,A.c,A.aK,A.ak],x.O)
D.dk7=new C.iT("aurora","Aurora Gala","A brighter future, together",D.cLv,D.to)
D.b7H=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cVa=w([G.a9q,D.b7H],x.O)
D.dko=new C.iT("champagne","Champagne Toast","Cheers to every member",D.cVa,D.kb)
D.dkp=new C.iT("diamonds","Diamond Rain","Every member is a jewel",W.auk,D.to)
D.b1s=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b5S=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cZI=w([D.b1s,D.b5S],x.O)
D.dk2=new C.iT("starburst","Golden Starburst","Thank you!",D.cZI,D.kb)
D.bNm=w([A.f4,A.wr],x.O)
D.a9x=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.O5=w([A.o2,A.ig,A.ur,A.nX,D.a9x],x.O)
D.dkw=new C.iT("balloons","Luxury Balloons","Let's celebrate",D.bNm,D.O5)
D.cEq=w([A.U4,A.w],x.O)
D.dkk=new C.iT("galaxy","Galaxy Spiral","The sky is not the limit",D.cEq,D.to)
D.bb7=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cRY=w([A.k3,D.bb7],x.O)
D.dkf=new C.iT("redcarpet","Red Carpet","Tonight we shine",D.cRY,D.kb)
D.b99=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b7v=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cW2=w([D.b99,D.b7v],x.O)
D.dk4=new C.iT("coins","Gold Coin Rain","Every contribution counts",D.cW2,D.kb)
D.d1e=w([A.dt,A.hx],x.O)
D.dka=new C.iT("lanterns","Sky Lanterns","Lighting the way together",D.d1e,D.kb)
D.b4A=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cCx=w([A.wt,D.b4A],x.O)
D.dk6=new C.iT("hearts","Floating Hearts","Made with love",D.cCx,D.O5)
D.b20=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b2N=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.d2y=w([D.b20,D.b2N],x.O)
D.dkv=new C.iT("petals","Rose Petals","Thank you, from our hearts",D.d2y,D.O5)
D.bbU=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d_1=w([A.kZ,D.bbU],x.O)
D.dk1=new C.iT("butterflies","Golden Butterflies","New beginnings",D.d_1,D.kb)
D.b8z=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cDr=w([D.b8z,A.w],x.O)
D.dkn=new C.iT("neon","Neon Night","Let's go!",D.cDr,D.to)
D.b5B=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cXT=w([A.JD,D.b5B],x.O)
D.dkq=new C.iT("disco","Disco Ball","Party time",D.cXT,D.to)
D.b91=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cXs=w([A.hp,D.b91],x.O)
D.dk5=new C.iT("sunrise","Golden Sunrise","A new day for our community",D.cXs,D.kb)
D.cX6=w([A.qg,A.dI],x.O)
D.dkr=new C.iT("pearls","Ocean Pearls","Deep roots, bright future",D.cX6,D.to)
D.b3Q=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cXj=w([D.b3Q,A.dI],x.O)
D.dku=new C.iT("snow","Winter Gala","Warm wishes to all",D.cXj,D.to)
D.b0S=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b1M=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.d1B=w([D.b0S,D.b1M],x.O)
D.dkj=new C.iT("laurel","Laurel Victory","We did it together",D.d1B,D.kb)
D.b0J=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b6g=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cBG=w([D.b0J,D.b6g],x.O)
D.dkt=new C.iT("ribbons","Silk Ribbons","Elegance in every step",D.cBG,D.kb)
D.b7f=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cmY=w([G.zI,D.b7f],x.O)
D.dkg=new C.iT("kente","Kente Pride","Proud of our roots",D.cmY,D.kb)
D.b9G=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bca=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cN_=w([D.b9G,D.bca],x.O)
D.dkb=new C.iT("trophy","Trophy Shine","Winners together",D.cN_,D.kb)
D.cXp=w([Am.Ju,A.w],x.O)
D.dk3=new C.iT("shooting","Shooting Stars","Make a wish",D.cXp,D.to)
D.b0Z=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.acs=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.d1Q=w([D.b0Z,D.acs],x.O)
D.dkh=new C.iT("bokeh","Golden Bokeh","Shine bright",D.d1Q,D.kb)
D.b1j=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cSK=w([D.b1j,A.w],x.O)
D.dk9=new C.iT("orbits","Golden Orbits","Always moving forward",D.cSK,D.kb)
D.bbV=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cPB=w([A.aas,D.bbV],x.O)
D.dke=new C.iT("flowers","Blooming Garden","Growing together",D.cPB,D.O5)
D.b17=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b1F=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d0K=w([D.b17,D.b1F],x.O)
D.dk8=new C.iT("music","Music Party","Celebrate with us",D.d0K,D.to)
D.b2w=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bcw=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cCJ=w([D.b2w,D.bcw],x.O)
D.dks=new C.iT("mandala","Royal Mandala","Harmony and unity",D.cCJ,D.kb)
D.cPG=w([G.zI,D.acs],x.O)
D.dkm=new C.iT("sparklers","Golden Sparklers","Light up the night",D.cPG,D.kb)
D.dki=new C.iT("city","City Lights","The whole city celebrates",D.atM,D.kb)
D.FJ=w([D.dkl,D.dkc,D.dkd,D.dk7,D.dko,D.dkp,D.dk2,D.dkw,D.dkk,D.dkf,D.dk4,D.dka,D.dk6,D.dkv,D.dk1,D.dkn,D.dkq,D.dk5,D.dkr,D.dku,D.dkj,D.dkt,D.dkg,D.dkb,D.dk3,D.dkh,D.dk9,D.dke,D.dk8,D.dks,D.dkm,D.dki],B.aA("P<iT>"))
D.e5q=new B.z("","No ring")
D.ejo=new B.z("platinum","Platinum")
D.egD=new B.z("glow","Glow")
D.e8H=new B.z("double","Double line")
D.e7D=new B.z("framed","Gallery frame")
D.e55=new B.z("rosegold","Rose gold")
D.ehj=new B.z("jewels","Jeweled")
D.eea=new B.z("aurora","Aurora")
D.B2=w([D.e5q,A.a3w,D.ejo,D.egD,H.aIa,D.e8H,A.a3y,D.e7D,D.e55,D.ehj,D.eea],x.L)
D.c6E=w([D.a1W,D.a1X,D.a20,D.a1T,D.a1U,D.a1Z],x.h)
D.bD7=new B.ad(G.agx,16,null,null,null,null)
D.aXe=new B.uW(A.bg,D.bD7,null,x.U)
D.bs3=new B.a0(58027,"MaterialIcons",!1)
D.bwR=new B.ad(D.bs3,16,null,null,null,null)
D.aXc=new B.uW(A.L,D.bwR,null,x.U)
D.bs4=new B.a0(58030,"MaterialIcons",!1)
D.bAR=new B.ad(D.bs4,16,null,null,null,null)
D.aXf=new B.uW(A.dJ,D.bAR,null,x.U)
D.ccO=w([D.aXe,D.aXc,D.aXf],B.aA("P<uW<pC>>"))
D.ckm=w([A.zO,A.hy],x.O)
D.ckn=w([A.bf,A.bl,A.ft],x.O)
D.NV=w([A.bJ,A.hz,A.hQ,A.au,A.nX],x.O)
D.cn3=w([A.bU,D.iZ,D.Jo],x.O)
D.cnB=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.e3b=new B.z(4278913286,4280030216)
D.e3t=new B.z(4279373061,4278518787)
D.e3A=new B.z(4279898630,4278847235)
D.cMr=w([D.e3b,D.e3t,D.e3A],x.n)
D.cIp=w(["\u265b","\u269c","\u2726"],x.s)
D.dom=new C.wY("Royal Onyx & Gold",D.cMr,4292128567,4294370209,4294965479,3874020544,D.cIp)
D.e2Z=new B.z(4278326799,4278598442)
D.e30=new B.z(4278395929,4278258953)
D.e37=new B.z(4278599728,4278327826)
D.d15=w([D.e2Z,D.e30,D.e37],x.n)
D.cDk=w(["\u269c","\u2756","\u2727"],x.s)
D.doj=new C.wY("Imperial Emerald",D.d15,4293050997,4294699968,4294180856,3872254170,D.cDk)
D.e31=new B.z(4278455076,4278918747)
D.e36=new B.z(4278587439,4278322714)
D.e3k=new B.z(4279051376,4278455076)
D.d_k=w([D.e31,D.e36,D.e3k],x.n)
D.cTk=w(["\u2654","\u2726","\u2748"],x.s)
D.dod=new C.wY("Sapphire Crown",D.d_k,4291417834,4294967295,4294310143,3871986666,D.cTk)
D.e3y=new B.z(4279894534,4283041554)
D.e3K=new B.z(4281008906,4279042307)
D.e3S=new B.z(4284221976,4279894534)
D.d4o=w([D.e3y,D.e3K,D.e3S],x.n)
D.cEy=w(["\u265b","\u2766","\u2726"],x.s)
D.dof=new C.wY("Ruby Throne",D.d4o,4293378685,4294963145,4294964466,3874213833,D.cEy)
D.e3s=new B.z(4279371039,4281995100)
D.e3C=new B.z(4280092723,4278714896)
D.e3P=new B.z(4283045242,4279371039)
D.d1r=w([D.e3s,D.e3C,D.e3P],x.n)
D.d_G=w(["\u2655","\u2756","\u2727"],x.s)
D.dok=new C.wY("Amethyst Palace",D.d1r,4293314984,4294963421,4294702591,3873229802,D.d_G)
D.e33=new B.z(4278519045,4280032287)
D.e3l=new B.z(4279111184,4278321666)
D.e3H=new B.z(4280492839,4278716426)
D.cZf=w([D.e33,D.e3l,D.e3H],x.n)
D.cRL=w(["\u2726","\u25c6","\u2742"],x.s)
D.doh=new C.wY("Obsidian & Platinum",D.cZf,4293256418,4294967295,4294638330,3872378836,D.cRL)
D.e3z=new B.z(4279896588,4282194463)
D.e3I=new B.z(4280553487,4279043334)
D.e3Q=new B.z(4283048488,4279896588)
D.cRh=w([D.e3z,D.e3I,D.e3Q],x.n)
D.d2V=w(["\u2766","\u273f","\u2727"],x.s)
D.doe=new C.wY("Rose Gold Velvet",D.cRh,4293440672,4294960345,4294964979,3874214602,D.d2V)
D.e34=new B.z(4278520340,4279180595)
D.e39=new B.z(4278718495,4278322443)
D.e3w=new B.z(4279510591,4278520340)
D.ctJ=w([D.e34,D.e39,D.e3w],x.n)
D.cSp=w(["\u269c","\u2736","\u2756"],x.s)
D.doi=new C.wY("Midnight Brass",D.ctJ,4291405148,4293975208,4294439914,3872837564,D.cSp)
D.e44=new B.z(4294703086,4293780428)
D.e40=new B.z(4294307549,4293187253)
D.e45=new B.z(4294966517,4293977807)
D.cGz=w([D.e44,D.e40,D.e45],x.n)
D.cSN=w(["\u269c","\u265b","\u2726"],x.s)
D.dol=new C.wY("Ivory Marble & Gold",D.cGz,4289760572,4286209048,4280951062,3863625518,D.cSN)
D.e3f=new B.z(4278978566,4280555024)
D.e3v=new B.z(4279504137,4278518530)
D.e3M=new B.z(4281211923,4278978566)
D.cEp=w([D.e3f,D.e3v,D.e3M],x.n)
D.d0n=w(["\u2742","\u2726","\u265c"],x.s)
D.dog=new C.wY("Onyx & Copper",D.cEp,4291856987,4294365880,4294964718,3873885630,D.d0n)
D.cnJ=w([D.dom,D.doj,D.dod,D.dof,D.dok,D.doh,D.doe,D.doi,D.dol,D.dog],B.aA("P<wY>"))
D.cq_=w([A.au,D.zJ,A.hz],x.O)
D.eaH=new B.z("Original",null)
D.eaP=new B.z("Wide 16:9",1.7777777777777777)
D.ecZ=new B.z("Landscape 3:2",1.5)
D.eab=new B.z("Photo 4:3",1.3333333333333333)
D.ebQ=new B.z("Square",1)
D.emQ=new B.z("Portrait 3:4",0.75)
D.ari=w([D.eaH,D.eaP,D.ecZ,D.eab,D.ebQ,D.emQ],B.aA("P<+(n,O?)>"))
D.arj=w([A.hz,A.bY,A.b8,A.bz],x.O)
D.ed8=new B.z("","Original")
D.eeT=new B.z("circle","Circle")
D.ek8=new B.z("rounded","Rounded")
D.el0=new B.z("triangle","Triangle")
D.egR=new B.z("hexagon","Hexagon")
D.efh=new B.z("diamond","Diamond")
D.ee9=new B.z("arch","Arch")
D.B7=w([D.ed8,D.eeT,D.ek8,D.el0,D.egR,D.efh,D.ee9],x.L)
D.djs=new C.l0("classic_blue","Classic Blue","Normal",A.bk,A.c,A.k6,A.dm,A.aJ)
D.djI=new C.l0("campus_green","Campus Green","Normal",A.aZ,A.mB,A.rx,A.h_,A.es)
D.djz=new C.l0("warm_sand","Warm Sand","Normal",A.e1,A.hQ,A.bJ,A.il,A.nh)
D.djG=new C.l0("slate_minimal","Slate Minimal","Normal",A.bv,A.aO,A.aK,A.M,A.aJ)
D.djr=new C.l0("coral_fresh","Coral Fresh","Normal",A.cd,A.ii,A.q8,A.k5,A.rs)
D.djH=new C.l0("lavender_calm","Lavender Calm","Normal",A.b2,A.oX,A.zy,A.p_,A.jg)
D.djt=new C.l0("ocean_breeze","Ocean Breeze","Normal",A.f5,A.qj,A.ro,A.uh,A.ni)
D.abO=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.djE=new C.l0("berry_pop","Berry Pop","Normal",A.fd,D.abO,A.k0,G.Vd,A.DU)
D.dju=new C.l0("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.dt,A.k0,A.cl)
D.djD=new C.l0("executive_navy","Executive Navy","Professional",A.d6,A.abd,A.dm,A.kX,A.bI)
D.djB=new C.l0("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bj,A.M,A.aO,A.cl)
D.djv=new C.l0("corporate_steel","Corporate Steel","Professional",A.mz,A.M,A.lX,A.fk,A.bI)
D.djy=new C.l0("gold_luxe","Gold Luxe","Luxury",A.o0,A.dB,A.o1,A.lq,A.bJ)
D.b94=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.djC=new C.l0("rose_gold_elite","Rose Gold Elite","Luxury",A.hy,D.b94,A.V3,A.ig,A.nX)
D.djF=new C.l0("platinum_night","Platinum Night","Luxury",A.cl,A.dI,A.bj,A.aO,A.aK)
D.djJ=new C.l0("emerald_prestige","Emerald Prestige","Luxury",A.aT,A.p1,A.eV,A.p7,A.jh)
D.djq=new C.l0("royal_purple","Royal Purple","Luxury",A.mA,A.Uk,A.jg,A.k0,A.Jh)
D.djA=new C.l0("neon_pitch","Neon Pitch","Bold",A.b8,A.dI,A.M,A.ba,A.aK)
D.djx=new C.l0("crimson_impact","Crimson Impact","Bold",A.bM,A.k3,A.eK,A.rJ,A.f8)
D.djw=new C.l0("sunset_gallery","Sunset Gallery","Bold",A.fz,A.rs,A.k5,A.q8,A.o3)
D.FS=w([D.djs,D.djI,D.djz,D.djG,D.djr,D.djH,D.djt,D.djE,D.dju,D.djD,D.djB,D.djv,D.djy,D.djC,D.djF,D.djJ,D.djq,D.djA,D.djx,D.djw],B.aA("P<l0>"))
D.cBp=w([A.bU,D.iZ],x.O)
D.cRw=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.edX=new B.z("Faces & people",D.cRw)
D.cq3=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.e29=new B.z("Ideas & work",D.cq3)
D.cIS=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.egW=new B.z("Nature",D.cIS)
D.cRE=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eaF=new B.z("Places & things",D.cRE)
D.cM1=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eee=new B.z("Symbols",D.cM1)
D.cBv=w([D.edX,D.e29,D.egW,D.eaF,D.eee],B.aA("P<+(n,ak<n>)>"))
D.b1c=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cBR=w([A.bU,D.aau,D.b1c],x.O)
D.aWI=new B.ac(0,A.G,A.Je,A.aCE,40)
D.aWp=new B.ac(0,A.G,A.nf,A.ei,8)
D.cC1=w([D.aWI,D.aWp],x.V)
D.cCt=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.arI=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a_F=w([A.hz,A.ft,A.bM,A.az,A.cd],x.O)
D.cDe=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aaK=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cDp=w([A.UW,D.aaK,A.UW],x.O)
D.cDt=w([A.hR,D.iZ,D.Jo],x.O)
D.eau=new B.z(A.bg,D.Yr)
D.ebL=new B.z(A.L,D.Yq)
D.e62=new B.z(A.dJ,D.Ys)
D.cEk=w([D.eau,D.ebL,D.e62],B.aA("P<+(pC,a0)>"))
D.cP=new C.HC(0,"text")
D.ld=new C.HC(1,"image")
D.eY=new C.HC(2,"shape")
D.Q1=new C.HC(3,"pdf")
D.kN=new C.HC(4,"signature")
D.a2l=new C.HC(5,"bio")
D.cF9=w([D.cP,D.ld,D.eY,D.Q1,D.kN,D.a2l],B.aA("P<HC>"))
D.cFa=w([A.bi,A.cC],B.aA("P<Gx>"))
D.cFL=w(["School","Documents","Sign & present"],x.s)
D.aWN=new B.ac(0,A.G,A.ack,A.tH,28)
D.cG4=w([D.aWN],x.V)
D.cGm=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Od=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.as5=w([A.hz,A.DT,A.aK,A.c,A.o2,A.au],x.O)
D.emf=new B.z(0.1,0.08)
D.egU=new B.z(0.3,0.05)
D.e5A=new B.z(0.55,0.1)
D.e9w=new B.z(0.8,0.06)
D.ecs=new B.z(0.92,0.16)
D.ec_=new B.z(0.2,0.2)
D.e9Y=new B.z(0.7,0.22)
D.efC=new B.z(0.05,0.4)
D.ecR=new B.z(0.95,0.45)
D.e6f=new B.z(0.12,0.7)
D.e8l=new B.z(0.88,0.75)
D.e8t=new B.z(0.4,0.9)
D.e4i=new B.z(0.65,0.93)
D.e99=new B.z(0.25,0.97)
D.ear=new B.z(0.85,0.9)
D.e73=new B.z(0.5,0.04)
D.cHH=w([D.emf,D.egU,D.e5A,D.e9w,D.ecs,D.ec_,D.e9Y,D.efC,D.ecR,D.e6f,D.e8l,D.e8t,D.e4i,D.e99,D.ear,D.e73],x.G)
D.cHO=w([A.c,A.hy,A.aY,A.aT],x.O)
D.dKG=new C.jw("office_blue","Office Blue",A.bk,A.dm,A.aJ,A.c,A.k6)
D.dKR=new C.jw("campus_green","Campus Green",A.aZ,A.h_,A.es,A.mB,A.rx)
D.dKH=new C.jw("sunset","Sunset",A.fz,A.k5,A.nh,A.ii,A.q8)
D.dKI=new C.jw("midnight","Midnight",A.aD,A.k0,A.cl,A.M,A.dt)
D.dKT=new C.jw("classic","Classic",A.dn,A.dB,A.lr,A.hQ,A.fW)
D.dKQ=new C.jw("rose_gold","Rose Gold",A.hy,A.wu,A.wt,A.ur,A.zO)
D.dKB=new C.jw("ocean_teal","Ocean Teal",A.f5,A.uh,A.ni,A.qj,A.ro)
D.dKA=new C.jw("slate_pro","Slate Pro",A.bv,A.M,A.aJ,A.aO,A.aK)
D.dKz=new C.jw("neon_night","Neon Night",A.b8,A.ba,A.aK,A.dI,A.M)
D.dKL=new C.jw("lavender","Lavender",A.b2,A.p_,A.jg,A.oX,A.zy)
D.dKN=new C.jw("coral","Coral",A.cd,A.k5,A.rs,A.ii,A.o3)
D.dKC=new C.jw("forest","Forest",A.fX,A.ee,A.cB,A.ls,A.ew)
D.dKD=new C.jw("berry","Berry",A.fd,G.Vd,A.DU,D.abO,A.k0)
D.dKK=new C.jw("sand","Sand",A.e1,A.il,A.nh,A.hQ,A.bJ)
D.dKP=new C.jw("ice","Ice",A.mz,A.JE,A.aJ,A.mx,A.fk)
D.dKF=new C.jw("charcoal","Charcoal",A.ak,A.aO,A.cl,A.bj,A.M)
D.dKy=new C.jw("mint","Mint",A.aT,A.fr,A.h_,A.ls,A.p7)
D.dKO=new C.jw("crimson","Crimson",A.bM,A.mD,A.k3,A.DR,A.rJ)
D.b3t=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dKJ=new C.jw("gold","Gold",A.o0,A.uf,A.o1,D.b3t,A.lq)
D.dKM=new C.jw("aqua","Aqua",A.bL,A.DE,A.nZ,A.oZ,A.o5)
D.dKE=new C.jw("plum","Plum",A.mA,A.wr,A.DU,A.Dt,A.rD)
D.dKS=new C.jw("steel","Steel",A.d6,A.dm,A.bj,A.k6,A.kX)
D.a_U=w([D.dKG,D.dKR,D.dKH,D.dKI,D.dKT,D.dKQ,D.dKB,D.dKA,D.dKz,D.dKL,D.dKN,D.dKC,D.dKD,D.dKK,D.dKP,D.dKF,D.dKy,D.dKO,D.dKJ,D.dKM,D.dKE,D.dKS],B.aA("P<jw>"))
D.cI7=w([A.bU,A.j0],x.O)
D.Q3=new C.hs(10,"rotate3d")
D.GN=new C.hs(8,"flip")
D.aC9=new C.hs(19,"spiral")
D.pE=new C.hs(16,"bounce")
D.aCc=new C.hs(9,"flipVertical")
D.cI8=w([D.Q3,D.GN,D.aC9,D.pE,D.aCc],x.i)
D.e4=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cIs=w([0.62,1],x.x)
D.cJ_=w([0,0.32,0.68,1],x.x)
D.mk=new C.hs(6,"zoom")
D.tB=new C.hs(4,"slideUp")
D.tA=new C.hs(2,"slideLeft")
D.cJ8=w([D.mk,D.GN,D.tB,D.Q3,D.tA],x.i)
D.cJC=w([A.bY,A.hy,A.ig,A.hz,A.c],x.O)
D.aWD=new B.ac(0,A.G,D.aaW,A.tH,30)
D.cKj=w([D.aWD],x.V)
D.dTV=new B.u(0,-2.5)
D.dTL=new B.u(-2.5,0)
D.dSt=new B.u(2.5,0)
D.cKm=w([A.Qj,A.a2I,A.aD9,A.a2H,D.dTV,H.aD5,D.dTL,D.dSt],x.dN)
D.FZ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cKO=w([23,114,69,56,80,144],x.t)
D.cKQ=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CONSTRUCTION LAB: a trade school in real looking 3D, opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 9 apps inside the TV screen: NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, Growth Income, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cLd=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cLC=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cN3=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cN7=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bd=new C.ud(0,"rectangle")
D.eG=new C.ud(1,"circle")
D.kO=new C.ud(6,"hexagon")
D.cNj=w([D.bd,D.eG,D.kO],x.m)
D.nF=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.abU=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cNR=w([D.abU,A.ee],x.O)
D.e5L=new B.z("","Classic")
D.e4v=new B.z("caps","Bold caps")
D.efF=new B.z("elegant","Elegant")
D.ekq=new B.z("shadow","Shadow")
D.e9S=new B.z("neon","Neon glow")
D.ej4=new B.z("outline","Outline")
D.eij=new B.z("marker","Highlighter")
D.ekB=new B.z("stamp","Stamp")
D.ek3=new B.z("retro","Retro")
D.e8S=new B.z("threed","3D")
D.ega=new B.z("fire","Fire")
D.eh3=new B.z("ice","Ice")
D.eeS=new B.z("chalk","Chalk")
D.eeX=new B.z("comic","Comic")
D.ekD=new B.z("sunset","Sunset")
D.elH=new B.z("softglow","Soft glow")
D.ei0=new B.z("lowercase","Lowercase")
D.efo=new B.z("double","Echo")
D.elO=new B.z("whisper","Whisper")
D.asY=w([D.e5L,D.e4v,D.efF,D.ekq,D.e9S,D.ej4,D.eij,D.ekB,D.ek3,D.e8S,H.aI8,D.ega,D.eh3,D.eeS,D.eeX,A.a3w,D.ekD,D.elH,D.ei0,D.efo,D.elO],x.L)
D.cP3=w([3,5,7,10,12,15],x.t)
D.cQj=w([A.bY,A.bJ,A.c,A.ex,A.cL],x.O)
D.db5=new C.rN(10,"cardWorld")
D.By=new C.AB(3,"rounded")
D.drn=new C.l3("world","NGMY World",D.db5,D.By,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.db6=new C.rN(11,"cardSplit")
D.drj=new C.l3("business","Business Wire",D.db6,D.By,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.db7=new C.rN(12,"cardBreaking")
D.drw=new C.l3("breaking","Breaking Red",D.db7,D.By,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.db8=new C.rN(13,"cardFeature")
D.drp=new C.l3("feature","Tech Feature",D.db8,D.By,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aAH=new C.rN(6,"circle")
D.aAB=new C.AB(4,"circle")
D.drt=new C.l3("parchment","Royal Circle",D.aAH,D.aAB,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dri=new C.l3("ocean","Blue Ocean",D.aAH,D.aAB,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dbb=new C.rN(7,"rail")
D.aAA=new C.AB(1,"double")
D.drk=new C.l3("forest","Green Leaf",D.dbb,D.aAA,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aAE=new C.rN(1,"sideBySide")
D.dry=new C.l3("herald","NGMY Herald",D.aAE,D.By,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aAD=new C.rN(0,"classic")
D.a1y=new C.AB(9,"shadow")
D.drx=new C.l3("daily","The Daily",D.aAD,D.a1y,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.db9=new C.rN(2,"splash")
D.aAC=new C.AB(6,"cutCorner")
D.drh=new C.l3("tabloid","Big Tabloid",D.db9,D.aAC,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aAI=new C.rN(9,"minimal")
D.drs=new C.l3("modern","Modern Digest",D.aAI,D.By,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aAF=new C.rN(3,"magazine")
D.aAz=new C.AB(0,"plain")
D.dro=new C.l3("midnight","Midnight Edition",D.aAF,D.aAz,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dbc=new C.rN(8,"banner")
D.drq=new C.l3("metro","Metro Wire",D.dbc,D.aAC,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.db4=new C.AB(8,"arch")
D.drr=new C.l3("sunrise","Sunrise Post",D.aAF,D.db4,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aAG=new C.rN(5,"scrapbook")
D.db3=new C.AB(5,"tape")
D.drm=new C.l3("neon","Neon Beat",D.aAG,D.db3,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dba=new C.rN(4,"wrap")
D.drz=new C.l3("gold","Golden Press",D.dba,D.a1y,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.drA=new C.l3("minimal","Paper White",D.aAI,D.a1y,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.drl=new C.l3("gazette","Fresh Gazette",D.aAD,D.aAA,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.drv=new C.l3("times","Classic Times",D.aAE,D.aAz,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.PA=new C.AB(2,"polaroid")
D.dru=new C.l3("scrapbook","Memory Scrapbook",D.aAG,D.PA,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a07=w([D.drn,D.drj,D.drw,D.drp,D.drt,D.dri,D.drk,D.dry,D.drx,D.drh,D.drs,D.dro,D.drq,D.drr,D.drm,D.drz,D.drA,D.drl,D.drv,D.dru],B.aA("P<l3>"))
D.cQv=w([0.45,1],x.x)
D.G0=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cQQ=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fvK=new C.oc("Original",0,1,1,0,0,0)
D.fvO=new C.oc("Black & white",0,1.1,0,0,0,0)
D.fvB=new C.oc("Noir",-0.05,1.55,0,0,0,0)
D.fvF=new C.oc("Sepia",0,1,0.25,0.9,0,0)
D.fvE=new C.oc("Vivid",0,1.15,1.6,0,0,0)
D.fvx=new C.oc("Pop",0,1.3,1.9,0,0,0)
D.fvz=new C.oc("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fvL=new C.oc("Matte",0,0.9,0.85,0,0,0.55)
D.fvG=new C.oc("Cool",0,1.05,1,-0.8,0,0)
D.fvN=new C.oc("Warm",0.03,1.05,1.1,0.8,0,0)
D.fvy=new C.oc("Golden hour",0.04,1,1.25,1,0,0)
D.fvD=new C.oc("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fvM=new C.oc("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fvC=new C.oc("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fvI=new C.oc("Retro",0,0.9,0.7,0.4,0,0.35)
D.fvH=new C.oc("Forest",0,1,1.2,-0.1,-0.45,0)
D.fvJ=new C.oc("Rose",0,1,1.1,0.3,0.4,0)
D.fvA=new C.oc("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cQR=w([D.fvK,D.fvO,D.fvB,D.fvF,D.fvE,D.fvx,D.fvz,D.fvL,D.fvG,D.fvN,D.fvy,D.fvD,D.fvM,D.fvC,D.fvI,D.fvH,D.fvJ,D.fvA],B.aA("P<oc>"))
D.b0G=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cQS=w([D.abU,A.ee,D.b0G],x.O)
D.e22=new B.z(0.12,0.3)
D.ehd=new B.z(0.26,0.75)
D.efB=new B.z(0.8,0.22)
D.ekL=new B.z(0.9,0.7)
D.ei_=new B.z(0.5,0.15)
D.ej6=new B.z(0.65,0.85)
D.e7w=new B.z(0.08,0.85)
D.cR2=w([D.e22,D.ehd,D.efB,D.ekL,D.ei_,D.ej6,D.e7w],x.G)
D.at7=w([A.b8,A.bY,A.bz,A.bf],x.O)
D.cRP=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cS0=w([A.c,A.fk,A.dy,A.ui],x.O)
D.b3F=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cSW=w([D.b3F,D.aaK],x.O)
D.cSX=w([A.wm,A.au],x.O)
D.cTa=w([0,0.25,0.75,1],x.x)
D.cTc=w([A.wg,A.o2],x.O)
D.aBK=new C.kH(10,"kenteSunset")
D.fA_=w([D.ab3,A.jC,A.au],x.O)
D.dmF=new C.je("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aBK,4294964964,4282000405,4279983648,D.ju)
D.aBL=new C.kH(11,"indigoMudcloth")
D.b1w=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fAd=w([D.b1w,A.aaG,A.hR],x.O)
D.dmN=new C.je("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aBL,4294439140,4279903102,4279903102,D.ju)
D.aBM=new C.kH(12,"adinkraRoyal")
D.bd9=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fAe=w([D.a9I,D.bd9,A.au],x.O)
D.dmP=new C.je("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aBM,4294965484,4285218591,4287322667,D.ju)
D.aBN=new C.kH(13,"nileLotus")
D.b9T=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b6V=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fAj=w([D.b9T,D.b6V,A.hR],x.O)
D.dmO=new C.je("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aBN,4294244340,4279196764,4279196764,D.ju)
D.aBO=new C.kH(14,"shweshweIvory")
D.b5h=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b4f=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b2_=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fA0=w([D.b5h,D.b4f,D.b2_],x.O)
D.dmK=new C.je("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aBO,4294505710,4279970378,4291058750,D.ju)
D.qN=new C.kH(15,"certIvoryNavy")
D.fzZ=w([D.JU,D.iZ,A.hR],x.O)
D.aBg=new C.wW(1,"ringsNdoa")
D.dmH=new C.je("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qN,4294966259,4279378237,4291404327,D.aBg)
D.a23=new C.wW(2,"coupleCards")
D.dmC=new C.je("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qN,4294966259,4279378237,4291404327,D.a23)
D.BB=new C.kH(18,"certIvoryNavyBar")
D.a9G=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fAc=w([D.a9G,D.iZ,A.hR],x.O)
D.aBh=new C.wW(3,"kuhoweshaForm")
D.dmA=new C.je("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.BB,4294966519,4279378237,4291404327,D.aBh)
D.aaU=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fAw=w([D.JU,D.aaU,A.hR],x.O)
D.a24=new C.wW(4,"mahariPande")
D.dmD=new C.je("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qN,4294966259,4279904068,4291404327,D.a24)
D.aBP=new C.kH(16,"certIvoryGreen")
D.b4K=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fA2=w([A.Ji,D.b4K,A.hR],x.O)
D.aBi=new C.wW(5,"familiaMti")
D.dmJ=new C.je("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aBP,4294966776,4280241466,4291404327,D.aBi)
D.a25=new C.wW(6,"ndoaSafi")
D.dmB=new C.je("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.BB,4294966519,4279378237,4291404327,D.a25)
D.b8y=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fA5=w([D.JU,A.hR,D.b8y],x.O)
D.a26=new C.wW(7,"peteWide")
D.dmG=new C.je("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qN,4294966259,4282001936,4291404327,D.a26)
D.dmQ=new C.wW(8,"muhuriCrest")
D.dmz=new C.je("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qN,4294966259,4279378237,4291404327,D.dmQ)
D.fAf=w([D.a9G,D.aaU,A.hR],x.O)
D.dmR=new C.wW(9,"fomuWazi")
D.dmM=new C.je("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.BB,4294966519,4279904068,4291404327,D.dmR)
D.aBQ=new C.kH(17,"certIvoryRose")
D.b5j=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fAi=w([D.b5j,D.abz,A.hR],x.O)
D.a22=new C.wW(10,"upendoOrnate")
D.dmI=new C.je("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aBQ,4294965493,4286200650,4291404327,D.a22)
D.cTA=w([D.dmF,D.dmN,D.dmP,D.dmO,D.dmK,D.dmH,D.dmC,D.dmA,D.dmD,D.dmJ,D.dmB,D.dmG,D.dmz,D.dmM,D.dmI],x.h)
D.e5=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.GO=new C.vo(0,"emojis")
D.BI=new C.vo(1,"pictures")
D.GP=new C.vo(2,"icons3d")
D.a2n=new C.vo(3,"animations")
D.Q5=new C.vo(4,"videoMotion")
D.BJ=new C.vo(5,"luxe")
D.a0e=w([D.GO,D.BI,D.GP,D.a2n,D.Q5,D.BJ],B.aA("P<vo>"))
D.ejH=new B.z(A.dS,"Looks")
D.e9p=new B.z(A.xB,"Light")
D.e9l=new B.z(A.nz,"Colour")
D.e7x=new B.z(A.xa,"Effects")
D.ahz=new B.a0(63112,"MaterialIcons",!1)
D.e4I=new B.z(D.ahz,"Crop")
D.cU3=w([D.ejH,D.e9p,D.e9l,D.e7x,D.e4I],x.f2)
D.cUF=w([],x.D)
D.fAt=w([],x.L)
D.e7I=new B.z("Flashcard",D.GJ)
D.ebf=new B.z("Quiz",D.GK)
D.ed3=new B.z("Worksheet",D.GL)
D.eam=new B.z("Notes",D.mj)
D.ebJ=new B.z("Section",D.BG)
D.cVg=w([D.e7I,D.ebf,D.ed3,D.eam,D.ebJ],B.aA("P<+(n,me)>"))
D.dow=new C.kH(6,"beadedPearl")
D.b7x=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fAx=w([H.V2,D.b7x,A.hR],x.O)
D.aBe=new C.je("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dow,4294966774,4286209070,4291404327,D.ju)
D.dox=new C.kH(7,"artDeco")
D.bb1=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bdo=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fAv=w([D.bb1,D.bdo,A.bU],x.O)
D.aBf=new C.je("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dox,4294440434,4280228630,4290283019,D.ju)
D.doy=new C.kH(8,"rosetteCorners")
D.bcG=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b3H=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b7t=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fA8=w([D.bcG,D.b3H,D.b7t],x.O)
D.aBd=new C.je("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.doy,4294702831,4285218602,4291394365,D.ju)
D.doz=new C.kH(9,"modernLedger")
D.fA7=w([A.c,D.iZ,D.iZ],x.O)
D.aBc=new C.je("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.doz,4294967295,4279378237,4279378237,D.ju)
D.cVk=w([D.aBe,D.aBf,D.aBd,D.aBc],x.h)
D.cVs=w([A.ig,A.o2],x.O)
D.cf=new C.hs(0,"none")
D.dc=new C.hs(1,"fade")
D.GM=new C.hs(3,"slideRight")
D.aCb=new C.hs(5,"slideDown")
D.dJa=new C.hs(7,"zoomOut")
D.a2m=new C.hs(11,"cube")
D.dJ5=new C.hs(12,"blur")
D.aC8=new C.hs(13,"dissolve")
D.dJ6=new C.hs(14,"wipeLeft")
D.dJ7=new C.hs(15,"wipeRight")
D.Q4=new C.hs(17,"push")
D.dJ8=new C.hs(18,"flash")
D.aCa=new C.hs(20,"swing")
D.dJ9=new C.hs(21,"curtain")
D.OL=w([D.cf,D.dc,D.tA,D.GM,D.tB,D.aCb,D.mk,D.dJa,D.GN,D.aCc,D.Q3,D.a2m,D.dJ5,D.aC8,D.dJ6,D.dJ7,D.pE,D.Q4,D.dJ8,D.aC9,D.aCa,D.dJ9],x.i)
D.OM=w([D.a21,D.a2_,D.a1T,D.a1U,D.a1V,D.a1Y,D.a1W,D.a1X,D.a20,D.a1Z,D.aBe,D.aBf,D.aBd,D.aBc],x.h)
D.cVS=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cVW=w([A.zB,A.hz,A.bU],x.O)
D.e8N=new B.z(A.t9,"Design")
D.el9=new B.z(D.ahP,"Word sizes")
D.ehK=new B.z(A.AS,"Text")
D.bvm=new B.a0(983182,"MaterialIcons",!1)
D.ehO=new B.z(D.bvm,"Photo")
D.e4k=new B.z(A.l8,"Logo")
D.emd=new B.z(A.Fm,"News")
D.cW0=w([D.e8N,D.el9,D.ehK,D.ehO,D.e4k,D.emd],x.f2)
D.cW1=w(["golddust","sparkle","sheen"],x.s)
D.dKx=new C.em("upload_pdf",K.M8,"Upload PDF")
D.dJH=new C.em("sign_paper",A.Fj,"Sign Paper")
D.buE=new B.a0(63438,"MaterialIcons",!1)
D.dKt=new C.em("hd_photo",D.buE,"HD Photo")
D.dJz=new C.em("sharpen",E.Yc,"Sharpen")
D.dJJ=new C.em("print",K.M8,"Download PDF")
D.dKa=new C.em("rotate",D.ahz,"Rotate")
D.dJS=new C.em("text_box",A.AS,"Text Box")
D.dJU=new C.em("picture",A.td,"Picture")
D.dJQ=new C.em("title",A.xv,"Title")
D.dJM=new C.em("subtitle",T.aip,"Subtitle")
D.dKj=new C.em("bullets",I.Yt,"Bullet List")
D.dJN=new C.em("numbered",A.LZ,"Numbered")
D.dKm=new C.em("quote",A1.AL,"Quote")
D.dJZ=new C.em("citation",A.po,"Citation")
D.dKp=new C.em("date_stamp",Aw.Yh,"Date Stamp")
D.dKc=new C.em("page_number",A.xu,"Page #")
D.dKg=new C.em("header_bar",A.Fi,"Header")
D.dJT=new C.em("footer_bar",O.aiF,"Footer")
D.dJI=new C.em("divider",A.uR,"Divider")
D.dJE=new C.em("highlight",A.Yy,"Highlight")
D.dKi=new C.em("redact",A.xy,"Redact")
D.dK5=new C.em("callout",A.AG,"Callout")
D.dKr=new C.em("checkboxes",I.agR,"Checklist")
D.dK2=new C.em("table",A.YZ,"Table")
D.dJX=new C.em("memo",I.YL,"Memo")
D.dK6=new C.em("letter",A.F6,"Letter")
D.bue=new B.a0(63259,"MaterialIcons",!0)
D.dJy=new C.em("agenda",D.bue,"Agenda")
D.dJK=new C.em("toc",Av.ai1,"Contents")
D.buA=new B.a0(63406,"MaterialIcons",!1)
D.dK3=new C.em("sig_line",D.buA,"Sign Line")
D.dJr=new C.em("initial_line",A.j6,"Initials")
D.dJu=new C.em("approved",A.l8,"APPROVED")
D.dK8=new C.em("draft",A.on,"DRAFT")
D.dKe=new C.em("confidential",A.j7,"Confidential")
D.dKh=new C.em("sticky",A.Me,"Sticky Note")
D.dKq=new C.em("progress",A.ai0,"Progress")
D.bvQ=new B.a0(983507,"MaterialIcons",!1)
D.dJF=new C.em("stars",D.bvQ,"Star Rating")
D.dJp=new C.em("equation",A.ahS,"Equation")
D.dJA=new C.em("timeline",A.Mf,"Timeline")
D.dJY=new C.em("two_col",A.Z1,"Two Columns")
D.dJC=new C.em("compare",A0.Yk,"Compare")
D.dJn=new C.em("duplicate_el",A.fE,"Duplicate")
D.dKv=new C.em("delete_el",A.e8,"Delete")
D.buv=new B.a0(63352,"MaterialIcons",!1)
D.dKl=new C.em("bring_fwd",D.buv,"Bring Front")
D.buu=new B.a0(63351,"MaterialIcons",!1)
D.dJs=new C.em("send_back",D.buu,"Send Back")
D.dK7=new C.em("align_left",D.Yr,"Align L")
D.dKd=new C.em("align_center",D.Yq,"Align C")
D.dKu=new C.em("align_right",D.Ys,"Align R")
D.dJR=new C.em("word_count",A_.XV,"Word Count")
D.dJO=new C.em("link_text",A.hf,"Link")
D.dKb=new C.em("phone",A.iv,"Phone")
D.dJD=new C.em("email",A.AJ,"Email")
D.dKw=new C.em("qr_placeholder",A.j9,"QR Placeholder")
D.dJx=new C.em("rectangle",A2.AH,"Rectangle")
D.dK1=new C.em("circle",A.t4,"Circle")
D.dJt=new C.em("arrow",A.jr,"Arrow")
D.dKk=new C.em("line",A.uR,"Line")
D.dJG=new C.em("triangle",A.Yi,"Triangle")
D.bum=new B.a0(63318,"MaterialIcons",!1)
D.dJL=new C.em("grayscale",D.bum,"Grayscale")
D.dJV=new C.em("brighten",I.aha,"Brighten")
D.dK_=new C.em("flip_h",A.EY,"Flip H")
D.but=new B.a0(63348,"MaterialIcons",!1)
D.dKs=new C.em("flip_v",D.but,"Flip V")
D.dKf=new C.em("cover_page",A.pj,"Cover Page")
D.dJq=new C.em("invoice",A.h4,"Invoice")
D.dJB=new C.em("resume",A.m5,"Resume")
D.dJP=new C.em("minutes",A.oh,"Minutes")
D.dJv=new C.em("lab_report",A.Mb,"Lab Report")
D.dJw=new C.em("rubric",A.xe,"Rubric")
D.dK0=new C.em("flashcard_tool",O.Fe,"Flashcard")
D.dKn=new C.em("quiz_tool",A.Fa,"Quiz Block")
D.dK4=new C.em("worksheet_tool",L.ER,"Worksheet")
D.dK9=new C.em("outline_share",A.Mc,"Share Outline")
D.dKo=new C.em("export_json",D.agX,"Export JSON")
D.dJo=new C.em("new_slide",D.XU,"New Slide")
D.dJW=new C.em("present",A.pq,"Present")
D.cWr=w([D.dKx,D.dJH,D.dKt,D.dJz,D.dJJ,D.dKa,D.dJS,D.dJU,D.dJQ,D.dJM,D.dKj,D.dJN,D.dKm,D.dJZ,D.dKp,D.dKc,D.dKg,D.dJT,D.dJI,D.dJE,D.dKi,D.dK5,D.dKr,D.dK2,D.dJX,D.dK6,D.dJy,D.dJK,D.dK3,D.dJr,D.dJu,D.dK8,D.dKe,D.dKh,D.dKq,D.dJF,D.dJp,D.dJA,D.dJY,D.dJC,D.dJn,D.dKv,D.dKl,D.dJs,D.dK7,D.dKd,D.dKu,D.dJR,D.dJO,D.dKb,D.dJD,D.dKw,D.dJx,D.dK1,D.dJt,D.dKk,D.dJG,D.dJL,D.dJV,D.dK_,D.dKs,D.dKf,D.dJq,D.dJB,D.dJP,D.dJv,D.dJw,D.dK0,D.dKn,D.dK4,D.dK9,D.dKo,D.dJo,D.dJW],B.aA("P<em>"))
D.cWz=w([A.cl,A.ak],x.O)
D.e3W=new B.z(4286331629,4292552567)
D.e3J=new B.z(4280640491,4278630100)
D.e43=new B.z(4294538006,4292943176)
D.e35=new B.z(4278556265,4280640491)
D.cRc=w([D.e3W,D.e3J,D.e43,D.e35],x.n)
D.cgu=w([4294626325,4280472558,4294210230],x.t)
D.dJi=new C.nq("colorful","Colorful",A.nz,D.cRc,4294967295,3875536895,D.cgu,D.mk)
D.e3x=new B.z(4279522093,4279657780)
D.e3N=new B.z(4281750292,4283268111)
D.e38=new B.z(4278603323,4279203438)
D.e3O=new B.z(4282343954,4279599165)
D.crf=w([D.e3x,D.e3N,D.e38,D.e3O],x.n)
D.cgc=w([4288931381,4294829706,4287033260],x.t)
D.dJe=new C.nq("nature","Nature",A.Fk,D.crf,4294442727,3874290891,D.cgc,D.dc)
D.e3r=new B.z(4279369771,4283178389)
D.e3o=new B.z(4279179050,4286456526)
D.e3F=new B.z(4280163147,4290648157)
D.e2Y=new B.z(4278322711,4285343961)
D.cIk=w([D.e3r,D.e3o,D.e3F,D.e2Y],x.n)
D.cgq=w([4294210230,4280472558,4289170426],x.t)
D.dJc=new C.nq("vibe","Vibe",A.Yv,D.cIk,4294967295,3874869502,D.cgq,D.tA)
D.e4_=new B.z(4290007817,4292552567)
D.e3U=new B.z(4286328082,4294286859)
D.e3Z=new B.z(4288485197,4294538006)
D.e3T=new B.z(4285343961,4293675161)
D.bNM=w([D.e4_,D.e3U,D.e3Z,D.e3T],x.n)
D.cgv=w([4294829706,4294967295,4284999929],x.t)
D.dJd=new C.nq("celebration","Celebration",A.l3,D.bNM,4294967295,4009752557,D.cgv,D.pE)
D.e3m=new B.z(4279179050,4280171146)
D.e3q=new B.z(4279310375,4280232247)
D.e3e=new B.z(4278916151,4280172719)
D.e3n=new B.z(4279179050,4281549141)
D.cBK=w([D.e3m,D.e3q,D.e3e,D.e3n],x.n)
D.cg7=w([4281908728,4294626325,4287931320],x.t)
D.dJh=new C.nq("professional","Professional",A.AE,D.cBK,4294967295,3872118241,D.cg7,D.Q4)
D.e3i=new B.z(4278995566,4278413729)
D.e3a=new B.z(4278727492,4279137424)
D.e3G=new B.z(4280171146,4278751666)
D.e3j=new B.z(4278995566,4279590517)
D.ckf=w([D.e3i,D.e3a,D.e3G,D.e3j],x.n)
D.cga=w([4286436348,4284410580,4294829706],x.t)
D.dJj=new C.nq("ocean","Ocean",I.Z3,D.ckf,4294967295,3873501950,D.cga,D.tB)
D.e3V=new B.z(4286328082,4294538006)
D.e3X=new B.z(4286781507,4294677052)
D.e3R=new B.z(4283178389,4294197086)
D.e3Y=new B.z(4288295954,4294688548)
D.cxZ=w([D.e3V,D.e3X,D.e3R,D.e3Y],x.n)
D.cgw=w([4294829706,4294967295,4294747557],x.t)
D.dJk=new C.nq("sunset","Sunset",A.Mg,D.cxZ,4294967295,4009749973,D.cgw,D.dc)
D.e47=new B.z(4294967295,4294047225)
D.e42=new B.z(4294507260,4294967295)
D.e46=new B.z(4294967295,4293060848)
D.e41=new B.z(4294507260,4294047225)
D.cLj=w([D.e47,D.e42,D.e46,D.e41],x.n)
D.cg5=w([4280640491,4279179050,4287931320],x.t)
D.dJg=new C.nq("minimal","Minimal",A2.AH,D.cLj,4279179050,4282865001,D.cg5,D.dc)
D.e3h=new B.z(4278979081,4280886564)
D.e3B=new B.z(4280031511,4278979081)
D.e3p=new B.z(4279308561,4281148438)
D.e3g=new B.z(4278979081,4280031511)
D.cYk=w([D.e3h,D.e3B,D.e3p,D.e3g],x.n)
D.cgj=w([4292128567,4294829706,4289241758],x.t)
D.dJl=new C.nq("elegant","Elegant",A.lz,D.cYk,4294898631,3873957348,D.cgj,D.aC8)
D.e3D=new B.z(4280159034,4282058596)
D.e3d=new B.z(4278916151,4280163147)
D.e3L=new B.z(4281208933,4278916151)
D.e3u=new B.z(4279502891,4283178389)
D.d3r=w([D.e3D,D.e3d,D.e3L,D.e3u],x.n)
D.cgs=w([4294296657,4292128567,4291081725],x.t)
D.dJf=new C.nq("royal","Royal Gold",A.iP,D.d3r,4294965222,3874084351,D.cgs,D.mk)
D.e32=new B.z(4278464302,4280163147)
D.e3c=new B.z(4278916151,4279455306)
D.e3E=new B.z(4280163147,4283040846)
D.e3_=new B.z(4278332450,4281413249)
D.cQV=w([D.e32,D.e3c,D.e3E,D.e3_],x.n)
D.cg6=w([4281193663,4289170426,4294210230],x.t)
D.dJm=new C.nq("aurora","Aurora Glow",A.dS,D.cQV,4293983738,3869766608,D.cg6,D.dc)
D.va=w([D.dJi,D.dJe,D.dJc,D.dJd,D.dJh,D.dJj,D.dJk,D.dJg,D.dJl,D.dJf,D.dJm],B.aA("P<nq>"))
D.b80=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cX2=w([A.qc,D.b80,A.qc],x.O)
D.cXh=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cXl=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ehC=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e8n=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ecF=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.e1d=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ebo=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e9K=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.edN=new B.z("Surprise me","")
D.cXP=w([D.ehC,D.e8n,D.ecF,D.e1d,D.ebo,D.e9K,D.edN],x.L)
D.b21=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bbr=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cYw=w([A.c,D.b21,D.bbr],x.O)
D.d_c=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aBI=new C.kH(0,"heritageGold")
D.b6J=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fAy=w([D.b6J,H.ab0,A.au],x.O)
D.dmL=new C.je("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aBI,4294570461,4284234270,4292128567,D.ju)
D.aBJ=new C.kH(1,"heritageCrimson")
D.b0C=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b5i=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bbj=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fAb=w([D.b0C,D.b5i,D.bbj],x.O)
D.dmE=new C.je("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aBJ,4294635750,4285213214,4292912216,D.ju)
D.d_g=w([D.a21,D.a2_,D.dmL,D.dmE,D.a1V,D.a1Y],x.h)
D.dsD=new C.r0(1,"circuit")
D.dt5=new C.lR("neural","Neural Link","Robotic",D.dsD,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dsC=new C.r0(0,"grid")
D.dt2=new C.lR("signal","Signal Grid","Robotic",D.dsC,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dsI=new C.r0(2,"hexes")
D.dsO=new C.lR("core","Core Protocol","Robotic",D.dsI,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aC5=new C.r0(11,"diagonal")
D.dsZ=new C.lR("steel","Steel Tech","Robotic",D.aC5,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aC6=new C.r0(3,"rings")
D.dsN=new C.lR("vault","Vault Gold","Robotic",D.aC6,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dsG=new C.r0(13,"leaves")
D.dsQ=new C.lR("forest","Forest Morning","Nature",D.dsG,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aC7=new C.r0(5,"waves")
D.dsX=new C.lR("ocean","Ocean Calm","Nature",D.aC7,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dsJ=new C.r0(6,"sunset")
D.dt1=new C.lR("sunset","Sunset Glow","Nature",D.dsJ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dsK=new C.r0(7,"mountains")
D.dsP=new C.lR("mountain","Mountain Air","Nature",D.dsK,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dsL=new C.r0(8,"stars")
D.dsW=new C.lR("night","Night Sky","Nature",D.dsL,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a2k=new C.r0(4,"orbs")
D.dsU=new C.lR("aurora","Aurora","Nature",D.a2k,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dt3=new C.lR("sand","Sand Dune","Nature",D.aC7,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dsM=new C.r0(9,"rays")
D.dsT=new C.lR("golden","Golden Hour","Warm",D.dsM,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dsR=new C.lR("royal","Royal Purple","Warm",D.aC5,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dsS=new C.lR("rose","Rose Petal","Warm",D.a2k,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dsF=new C.r0(12,"blocks")
D.dsV=new C.lR("electric","Electric Blue","Bold",D.dsF,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dt4=new C.lR("mint","Fresh Mint","Bold",D.a2k,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dsH=new C.r0(14,"minimal")
D.dt0=new C.lR("white","Clean White","Clean",D.dsH,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dsE=new C.r0(10,"frame")
D.dsY=new C.lR("midnight","Midnight Gold","Clean",D.dsE,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dt_=new C.lR("community","Community Green","Clean",D.aC6,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a0F=w([D.dt5,D.dt2,D.dsO,D.dsZ,D.dsN,D.dsQ,D.dsX,D.dt1,D.dsP,D.dsW,D.dsU,D.dt3,D.dsT,D.dsR,D.dsS,D.dsV,D.dt4,D.dt0,D.dsY,D.dt_],B.aA("P<lR>"))
D.d_C=w([D.zJ,A.wm,A.hz,A.bU],x.O)
D.d_S=w([D.abI,D.iZ],x.O)
D.d00=w(["pdf","docx","txt","md"],x.s)
D.epq=new B.bz(-3,150,34)
D.epr=new B.bz(-3,214,62)
D.eps=new B.bz(-3,288,62)
D.d0P=w([D.epq,D.epr,D.eps],B.aA("P<+(O,O,O)>"))
D.d1g=w(["rays","bokeh","aurora","spotlight"],x.s)
D.d1P=w(["Write","Design","Print & fold"],x.s)
D.jv=new C.ud(2,"triangle")
D.BH=new C.ud(3,"arrow")
D.fm=new C.ud(4,"line")
D.jw=new C.ud(5,"parallelogram")
D.d1R=w([D.bd,D.eG,D.jv,D.BH,D.fm,D.jw,D.kO],x.m)
D.e2g=new B.z(240,96)
D.e4B=new B.z(560,46)
D.d1W=w([D.e2g,D.e4B],x.G)
D.fAJ=new C.wZ(0,"classic")
D.doC=new C.nm("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aBI,4294570461,4282000405,4284234270)
D.doO=new C.nm("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aBJ,4294635750,4281999378,4285213214)
D.doD=new C.nm("elegant_navy","Umoja Mzuri",y.s,D.a2e,4294967035,4279378237,4290283019)
D.doQ=new C.nm("elegant_gold","Umoja wa Dhahabu",y.Q,D.aBR,4294966515,4281016592,4289102906)
D.doS=new C.nm("kente_sunset","Kente ya Jua",y.H,D.aBK,4294964964,4282000405,4279983648)
D.doA=new C.nm("indigo_mudcloth","Nguo ya Indigo",y.n,D.aBL,4294439140,4279903102,4279903102)
D.doF=new C.nm("adinkra_royal","Muhuri wa Adinkra",y.z,D.aBM,4294965484,4285218591,4287322667)
D.doK=new C.nm("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aBN,4294244340,4279196764,4279196764)
D.doM=new C.nm("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aBO,4294505710,4279970378,4291058750)
D.fAK=new C.wZ(1,"ringsNdoa")
D.doE=new C.nm("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qN,4294966259,4279378237,4291404327)
D.fAM=new C.wZ(2,"coupleCards")
D.doP=new C.nm("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qN,4294966259,4279378237,4291404327)
D.fAN=new C.wZ(3,"kuhoweshaForm")
D.doL=new C.nm("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.BB,4294966519,4279378237,4291404327)
D.fAO=new C.wZ(4,"mahariPande")
D.doB=new C.nm("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qN,4294966259,4279904068,4291404327)
D.fAP=new C.wZ(5,"familiaMti")
D.doR=new C.nm("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aBP,4294966776,4280241466,4291404327)
D.fAQ=new C.wZ(6,"ndoaSafi")
D.doI=new C.nm("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.BB,4294966519,4279378237,4291404327)
D.fAR=new C.wZ(7,"peteWide")
D.doH=new C.nm("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qN,4294966259,4282001936,4291404327)
D.fAS=new C.wZ(8,"muhuriCrest")
D.doG=new C.nm("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qN,4294966259,4279378237,4291404327)
D.fAT=new C.wZ(9,"fomuWazi")
D.doJ=new C.nm("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.BB,4294966519,4279904068,4291404327)
D.fAL=new C.wZ(10,"upendoOrnate")
D.doN=new C.nm("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aBQ,4294965493,4286200650,4291404327)
D.OY=w([D.doC,D.doO,D.doD,D.doQ,D.doS,D.doA,D.doF,D.doK,D.doM,D.doE,D.doP,D.doL,D.doB,D.doR,D.doI,D.doH,D.doG,D.doJ,D.doN],B.aA("P<nm>"))
D.BF=new C.ap8(0,"landscape169")
D.nH=new C.ap8(1,"portrait916")
D.d2C=w([D.BF,D.nH],B.aA("P<ap8>"))
D.auw=w([A.hz,A.bJ,A.cL,A.ig,A.c],x.O)
D.ts=w([A.bU,A.il],x.O)
D.e1y=new B.z(1000,"M")
D.e5C=new B.z(900,"CM")
D.e4w=new B.z(500,"D")
D.e2W=new B.z(400,"CD")
D.e1z=new B.z(100,"C")
D.e5D=new B.z(90,"XC")
D.e4x=new B.z(50,"L")
D.e2X=new B.z(40,"XL")
D.e1D=new B.z(10,"X")
D.e5N=new B.z(9,"IX")
D.e4L=new B.z(5,"V")
D.e4j=new B.z(4,"IV")
D.e1Y=new B.z(1,"I")
D.d39=w([D.e1y,D.e5C,D.e4w,D.e2W,D.e1z,D.e5D,D.e4x,D.e2X,D.e1D,D.e5N,D.e4L,D.e4j,D.e1Y],x.ek)
D.eqk=new B.cJ(["open",A.j6,"Open & write","Keep writing this book"])
D.eqJ=new B.cJ(["print",A.tg,"Print as a book","Fold and staple it"])
D.d3h=w([D.eqk,D.eqJ],B.aA("P<+(n,a0,n,n)>"))
D.d3S=w([D.a2m,D.mk,D.GN,D.Q4,D.dc,D.Q3],x.i)
D.ei7=new B.z(-1,"Small")
D.e1m=new B.z(0,"Normal")
D.e1X=new B.z(1,"Big")
D.e2u=new B.z(2,"Huge")
D.d4j=w([D.ei7,D.e1m,D.e1X,D.e2u],x.ek)
D.d4H=w([49,65,89,38,83,89],x.t)
D.d4O=w([A.wm,A.hz,A.bU],x.O)
D.d5f=w([D.dc,D.mk,D.tA,D.a2m,D.GN,D.Q4],x.i)
D.azO=new B.dQ([0,D.K9,8,D.acU,12,D.acV],B.aA("dQ<H,a2g>"))
D.dP2={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bbd=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cBU=w([A.bJ,D.bbd],x.O)
D.cV2=w([A.ba,A.bk],x.O)
D.cQ7=w([A.bY,A.aY,A.cr],x.O)
D.d3i=w([A.cl,A.bv],x.O)
D.cJb=w([A.b8,A.fd],x.O)
D.cSB=w([A.b2,A.f4],x.O)
D.b53=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cRW=w([D.b53,A.o2],x.O)
D.cMR=w([A.fU,A.wn],x.O)
D.cJ0=w([A.bs,A.c8],x.O)
D.d7R=new B.bs(D.dP2,[D.cBU,H.alh,D.cV2,D.cQ7,D.d3i,D.cJb,D.cSB,D.cRW,D.cMR,D.cJ0],B.aA("bs<n,ak<w>>"))
D.dOd={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a1e=new B.bs(D.dOd,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aA("bs<n,n>"))
D.a1k=new B.bs(A.iz,[],B.aA("bs<H,+icon3d,picture(n?,n?)>"))
D.dbP=new F.LG(30,null)
D.dgU=new F.ma("Chapter 1","","","")
D.d2p=w([D.dgU],x.B)
D.dgY=new F.qR("My Book","","",D.d2p,E.aB2)
D.dgW=new F.u3("starry",null,null,null,null,"","","")
D.dgZ=new F.qR("Dream Big","","",E.a0p,D.dgW)
D.dgX=new F.u3("story",null,null,null,null,"","","")
D.dh_=new F.qR("Little Lion","","",E.a0p,D.dgX)
D.dgV=new F.u3("vintage",null,null,null,null,"","","")
D.dh0=new F.qR("Our Story","","",E.a0p,D.dgV)
D.dk0=new C.Dz("","NGMY","","")
D.drg=new C.yJ("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dJb=new C.aZL(null,null,null,null)
D.dKU=new C.apd(null)
D.dL6=new C.apJ(0,"smaller")
D.dL7=new C.apJ(1,"bigger")
D.aCl=new C.apJ(2,"fit")
D.dRq=new B.u(3,6)
D.dRA=new B.u(4,8)
D.dUS=new B.C(E.adJ,T.a9c,null)
D.dUW=new B.C(A.VZ,A.lS,null)
D.bx6=new B.ad(A.l6,16,A.bZ,null,null,null)
D.dV_=new B.C(A.jm,D.bx6,null)
D.b06=new B.fg(2.2,null,null,null,null,A.c,null,null,null,null)
D.dVb=new B.C(A.Et,D.b06,null)
D.bHd=new B.ad(A.cu,16,A.aA,null,null,null)
D.dVf=new B.C(A.em,D.bHd,null)
D.f3C=new B.x("Play",null,A.nP,null,null,null,null,null,null,null,null,null)
D.cVh=w([U.ajM,A.r_,D.f3C],x.p)
D.euC=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.cVh,null)
D.dVi=new B.C(A.oc,D.euC,null)
D.b0f=new B.fg(2.4,null,null,null,null,null,null,null,null,null)
D.ezQ=new B.a4(20,20,D.b0f,null)
D.dVn=new B.C(A.jm,D.ezQ,null)
D.fc3=new B.x("Seconds per slide",null,A.hj,null,null,null,null,null,null,null,null,null)
D.dVu=new B.C(A.bm,D.fc3,null)
D.dWP=new C.a73(2,"print")
D.dWS=new B.iK(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dYu=new B.h4("/Annot")
D.dYw=new B.h4("/URI")
D.eZi=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e_i=new B.jg("share",48,D.eZi,null,B.aA("jg<n>"))
D.bH7=new B.ad(A.dS,14,A.ex,null,null,null)
D.e_r=new B.cI(null,-2,-2,null,null,null,D.bH7,null)
D.b8o=new B.w(0.3333333333333333,0,0,0,A.t)
D.cDM=w([D.b8o,A.K],x.O)
D.bMD=new B.a5(A.a3,A.a7,A.x,D.cDM,null,null)
D.aUh=new B.o(null,null,null,null,null,D.bMD,A.n)
D.bfm=new B.kE(D.aUh,A.bc,null,null)
D.e_D=new B.cI(0,0,null,0,8,null,D.bfm,null)
D.cZg=w([A.hQ,A.o3,A.cd],x.O)
D.e0g=new B.bS(A.A,0.5,A.x,null,0,D.cZg,null,null)
D.e2n=new B.z(0.22,A.bk)
D.e65=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e82=new B.z(0.5,A.hy)
D.egP=new B.z(0.78,A.aT)
D.eqb=new B.cJ([A.bz,0.22,0.7,2.6])
D.eqg=new B.cJ([A.b8,0.36,1.2,1.3])
D.eqm=new B.cJ([A.dM,0.28,0.2,0.4])
D.eqs=new B.cJ([A.ct,0.05,0.3,0.35])
D.eqy=new B.cJ([A.bs,0.28,0.9,0])
D.eqG=new B.cJ([A.aD,-0.25,-0.15,0.45])
D.err=new B.cJ([A.bY,0.42,1,4.1])
D.eul=new B.a7W(9)
D.byd=new B.ad(A.Fm,28,A.cr,null,null,null)
D.fcz=new B.x("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bp8=new B.bH(1,A.bo,D.fcz,null)
D.d1j=w([D.byd,A.aw,D.bp8],x.p)
D.eux=new B.cx(A.aX,A.e,A.j,A.m,null,A.p,null,0,D.d1j,null)
D.byo=new B.ad(A.po,16,A.c,null,null,null)
D.fdT=new B.x("Book",null,A.r3,null,null,null,null,null,null,null,null,null)
D.d4N=w([D.byo,A.e9,D.fdT],x.p)
D.euE=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.d4N,null)
D.bEM=new B.ad(A.j7,10,A.c,null,null,null)
D.f1P=new B.x("Pro",null,A.n1,null,null,null,null,null,null,null,null,null)
D.cVm=w([D.bEM,A.tS,D.f1P],x.p)
D.euI=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.cVm,null)
D.fc2=new B.x("Make a newspaper",null,Ap.RT,null,null,null,null,null,null,null,null,null)
D.bNK=w([E.Zo,A.ab,D.fc2],x.p)
D.euJ=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.bNK,null)
D.bDl=new B.ad(A.l3,18,A.bJ,null,null,null)
D.f3Q=new B.x("Ending celebration",null,A.iU,null,null,null,null,null,null,null,null,null)
D.d0q=w([D.bDl,A.bp,D.f3Q],x.p)
D.euM=new B.cx(A.aX,A.e,A.j,A.m,null,A.p,null,0,D.d0q,null)
D.bEy=new B.ad(A.j6,18,A.k5,null,null,null)
D.eKd=new B.F(!0,A.k5,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe9=new B.x("Write",null,D.eKd,null,null,null,null,null,null,null,null,null)
D.cL8=w([D.bEy,A.ab,D.fe9],x.p)
D.euR=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.cL8,null)
D.f1N=new B.x("Download picture",null,A.pP,null,null,null,null,null,null,null,null,null)
D.bqV=new B.pW(A.ec,A.A,A.f,D.f1N,null)
D.br5=new B.dl(1,A.ch,D.bqV,null)
D.cVI=w([K.ajC,A.ab,D.br5],x.p)
D.euS=new B.cx(A.aX,A.b7,A.j,A.m,null,A.p,null,0,D.cVI,null)
D.bA9=new B.ad(A.Fm,22,A.cr,null,null,null)
D.faN=new B.x("NGMY NEWS",null,H.a50,null,null,null,null,null,null,null,null,null)
D.cDh=w([D.bA9,A.ab,D.faN],x.p)
D.ev_=new B.cx(A.aX,A.e,A.Q,A.m,null,A.p,null,0,D.cDh,null)
D.eva=new B.oN(!1,!1,null,T.TG,null,A.bW,null,null,null)
D.a40=new B.jH([D.cf,D.dc,D.tA,D.GM,D.tB,D.aCb],B.aA("jH<hs>"))
D.dQe={title:0,quote:1,closing:2,bio:3}
D.ewi=new B.eS(D.dQe,4,x.M)
D.dOu={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ewk=new B.eS(D.dOu,5,x.M)
D.dPM={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a41=new B.eS(D.dPM,8,x.M)
D.dPa={Design:0,Transitions:1,Insert:2}
D.ewo=new B.eS(D.dPa,3,x.M)
D.fB0=new B.jH([D.a2n],B.aA("jH<vo>"))
D.dPh={float3d:0,drift:1,pulse:2}
D.ewr=new B.eS(D.dPh,3,x.M)
D.aJe=new B.jH([D.GJ,D.GK,D.GL],B.aA("jH<me>"))
D.dOr={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aJh=new B.eS(D.dOr,14,x.M)
D.fB1=new B.eS(A.iz,0,B.aA("eS<vo>"))
D.dPe={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.R2=new B.eS(D.dPe,4,x.M)
D.dOl={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aJk=new B.eS(D.dOl,30,x.M)
D.dPm={circle:0,triangle:1,hexagon:2,diamond:3}
D.ewH=new B.eS(D.dPm,4,x.M)
D.eyP=new B.as(390,844)
D.ezA=new B.a4(20,20,A4.Jc,null)
D.aK6=new B.a4(null,2.5,null,null)
D.ezK=new B.a4(18,18,A4.Jc,null)
D.bEC=new B.ad(A.iP,19,A.c,null,null,null)
D.ezV=new B.a4(38,38,D.bEC,null)
D.bCW=new B.ad(A.xC,22,A.c,null,null,null)
D.ezX=new B.a4(40,40,D.bCW,null)
D.eAu=new B.hM(2,10,10,1.15,null)
D.aKe=new B.hM(2,16,14,0.62,null)
D.eAP=new Aj.b3D(170,20,16,0.52,null)
D.bne=new B.N(32,30,32,40)
D.b1p=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bya=new B.ad(A.pj,56,D.b1p,null,null,null)
D.acc=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eMa=new B.F(!0,D.acc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f80=new B.x("Your books will live here.",null,D.eMa,null,A.L,null,null,null,null,null,null,null)
D.cNI=w([D.bya,A.S,D.f80],x.p)
D.bez=new B.fo(A.aj,A.e,A.j,A.m,null,A.p,null,0,D.cNI,null)
D.dVs=new B.C(D.bne,D.bez,null)
D.eAR=new B.lU(D.dVs,null)
D.f7Y=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eB8=new B.b1(D.f7Y,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f6a=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eB9=new B.b1(D.f6a,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.faP=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eBi=new B.b1(D.faP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fbj=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eBx=new B.b1(D.fbj,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f4V=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eBK=new B.b1(D.f4V,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fhR=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eC2=new B.b1(D.fhR,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.ffa=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eCd=new B.b1(D.ffa,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fbr=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eCU=new B.b1(D.fbr,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f0b=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eD9=new B.b1(D.f0b,null,null,null,null,null,null,null,A.ib,null,null,null,null,A.p9,!1,null,null,null,A.q,null)
D.f1V=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eDr=new B.b1(D.f1V,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f7G=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eDt=new B.b1(D.f7G,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f7n=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eDu=new B.b1(D.f7n,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fdf=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eDv=new B.b1(D.fdf,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eXx=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eDE=new B.b1(D.eXx,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f3_=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eE0=new B.b1(D.f3_,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fgH=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eE2=new B.b1(D.fgH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fgh=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eE6=new B.b1(D.fgh,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eWC=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eE8=new B.b1(D.eWC,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fcu=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eEh=new B.b1(D.fcu,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.ffT=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eEw=new B.b1(D.ffT,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.ffK=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eEy=new B.b1(D.ffK,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eWu=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eEE=new B.b1(D.eWu,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f_e=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eF5=new B.b1(D.f_e,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.feY=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eFg=new B.b1(D.feY,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f_2=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new B.b1(D.f_2,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.b7J=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cC6=w([A.ig,A.o2,D.b7J,D.a9x,A.ig],x.O)
D.eFT=new B.fP(A.A,0,6.283185307179586,A.x,D.cC6,null,null)
D.cKn=w([A.bJ,A.bU,A.hz,D.zJ,A.bJ],x.O)
D.aKO=new B.fP(A.A,0,6.283185307179586,A.x,D.cKn,null,null)
D.cXf=w([A.bY,A.bz,A.b8,A.bf,A.cr,A.bY],x.O)
D.eFY=new B.fP(A.A,0,6.283185307179586,A.x,D.cXf,null,null)
D.cE_=w([A.p7,A.o5,A.zy,A.ig,A.p7],x.O)
D.eFZ=new B.fP(A.A,0,6.283185307179586,A.x,D.cE_,null,null)
D.cX9=w([A.aO,A.bI,A.aK,A.ak,A.aO],x.O)
D.eG_=new B.fP(A.A,0,6.283185307179586,A.x,D.cX9,null,null)
D.d30=w([A.bs,A.b8,A.bz,A.bY,A.bs],x.O)
D.eG1=new B.fP(A.A,0,6.283185307179586,A.x,D.d30,null,null)
D.b8_=new B.w(1,0,1,1,A.t)
D.b2y=new B.w(1,1,0,1,A.t)
D.d_u=w([A.Dk,A.ab9,H.aae,D.b8_,H.aaB,D.b2y,A.Dk],x.O)
D.eG2=new B.fP(A.A,0,6.283185307179586,A.x,D.d_u,null,null)
D.eGh=new C.atJ(2,"immersiveSticky")
D.eGi=new C.atJ(3,"edgeToEdge")
D.eGj=new C.atJ(4,"manual")
D.eIv=new B.F(!0,A.nY,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLj=new B.F(!0,A.f8,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ4=new B.F(!0,E.mE,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKu=new B.F(!0,A.af,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLt=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLC=new B.F(!0,A.bZ,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLX=new B.F(!0,A.ex,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNf=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNo=new B.F(!0,A.j2,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNC=new B.r9(!0,A.H4,null,null,null,null,A.dq,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOG=new B.F(!0,A.j0,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dWV=new B.iK(1,1,0.7568627450980392,0.027450980392156862)
D.eP6=new B.r9(!0,D.dWV,null,null,null,null,A.dq,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.abf=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aM_=new B.F(!0,D.abf,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new B.F(!0,D.acc,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aM1=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePP=new B.r9(!0,A.oy,null,null,null,null,A.dq,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.RP=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQD=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQF=new B.F(!0,D.abf,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.HV=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR7=new B.F(!0,A.bU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRf=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRi=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.asq,null,null,null)
D.eRA=new B.F(!0,A.cx,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRP=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS_=new B.F(!0,A.dy,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSw=new B.F(!0,A.aP,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSF=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new B.F(!0,A.af,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMB=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMD=new B.F(!0,A.bZ,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bcv=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eUB=new B.F(!0,D.bcv,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aML=new B.F(!0,E.mE,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV3=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV6=new B.F(!0,N.l_,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOi=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWh=new B.x("NEW",null,D.eOi,null,null,null,null,null,null,null,null,null)
D.eWx=new B.x("Hati ya Kuhowesha",null,A.hl,null,null,null,null,null,null,null,null,null)
D.eWY=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eXh=new B.x("Scrollable PDF on this slide",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eXW=new B.x("Big quote mark",null,A.iC,null,null,null,null,null,null,null,null,null)
D.eXZ=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eY9=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eYC=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eYD=new B.x("How many slides?",null,A.hj,null,null,null,null,null,null,null,null,null)
D.eZ9=new B.x("Transfer",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eKg=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new B.x("Luxury FX",null,D.eKg,null,null,null,null,null,null,null,null,null)
D.eZN=new B.x("Font",null,A.r4,null,null,null,null,null,null,null,null,null)
D.eZY=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eU8=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_b=new B.x("Example  GA847",null,D.eU8,null,null,null,null,null,null,null,null,null)
D.f_A=new B.x("Design shapes",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f_I=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new B.x("Non-stop (loop)",null,A.hj,null,null,null,null,null,null,null,null,null)
D.f0_=new B.x("Hati ya Kuhoweya",null,A.hl,null,null,null,null,null,null,null,null,null)
D.f0i=new B.x("Photo studio",null,A.fT,null,null,null,null,null,null,null,null,null)
D.f0I=new B.x("Add your picture",null,A.kS,null,null,null,null,null,null,null,null,null)
D.eND=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new B.x("Enter document code",null,D.eND,null,A.L,null,null,null,null,null,null,null)
D.f0K=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.f0P=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eLj=new B.F(!0,E.mE,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f16=new B.x("Delete this book?",null,D.eLj,null,A.L,null,null,null,null,null,null,null)
D.ePE=new B.F(!0,E.mE,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1X=new B.x("Your library",null,D.ePE,null,null,null,null,null,null,null,null,null)
D.f20=new B.x("Delete",null,A.aLU,null,null,null,null,null,null,null,null,null)
D.f22=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ao.HT,null,null,null,null,null,null,null,null,null)
D.f2d=new B.x("Element flies in",null,A.aM5,null,null,null,null,null,null,null,null,null)
D.S3=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.f2A=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.f2T=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.f2X=new B.x("Cancel",null,E.aMf,null,null,null,null,null,null,null,null,null)
D.f2Z=new B.x("The lines and circles that come with the design",null,A.hk,null,null,null,null,null,null,null,null,null)
D.eT1=new B.F(!0,A.fZ,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new B.x("DOCUMENT CODE",null,D.eT1,null,null,null,null,null,null,null,null,null)
D.f49=new B.x("Quotes",null,G.a5F,null,null,null,null,null,null,null,null,null)
D.eN2=new B.F(!0,N.l_,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new B.x("Add a picture",null,D.eN2,null,null,null,null,null,null,null,null,null)
D.f4o=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a5g,null,A.L,null,null,null,null,null,null,null)
D.f4r=new B.x("Look & feel",null,A.hj,null,null,null,null,null,null,null,null,null)
D.f4v=new B.x("Rings",null,A.iU,null,null,null,null,null,null,null,null,null)
D.f4A=new B.x("W",null,A.r4,null,null,null,null,null,null,null,null,null)
D.f4J=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a5q,null,A.L,null,null,null,null,null,null,null)
D.f51=new B.x("Write your book",null,A.cs,null,null,null,null,null,null,null,null,null)
D.f5J=new B.x("Add page",null,A.cb,null,null,null,null,null,null,null,null,null)
D.f5X=new B.x("Malipo ya Awamu ya Mahari",null,A.hl,null,null,null,null,null,null,null,null,null)
D.eNr=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6b=new B.x("Create with AI",null,D.eNr,null,A.L,null,null,null,null,null,null,null)
D.f6E=new B.x("Apply look",null,A.iU,null,null,null,null,null,null,null,null,null)
D.eOa=new B.F(!0,A.ew,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7p=new B.x("Type your presentation below",null,D.eOa,null,A.L,null,null,null,null,null,null,null)
D.f7s=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aMN,null,A.L,null,null,null,null,null,null,null)
D.f7u=new B.x("Keep it",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eJk=new B.F(!0,A.cw,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7B=new B.x("Done",null,D.eJk,null,null,null,null,null,null,null,null,null)
D.f7U=new B.x("Delete",null,A.n2,null,null,null,null,null,null,null,null,null)
D.f82=new B.x("Hati ya Kiapo cha Uongozi",null,A.hl,null,null,null,null,null,null,null,null,null)
D.eMq=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eMq,null,A.L,null,null,null,null,null,null,null)
D.f9d=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f9j=new B.x("Layout",null,A.RV,null,null,null,null,null,null,null,null,null)
D.f9U=new B.x("Print",null,A.cs,null,null,null,null,null,null,null,null,null)
D.f9Y=new B.x("X",null,A.r4,null,null,null,null,null,null,null,null,null)
D.faw=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a5i,null,null,null,null,null,null,null,null,null)
D.fb0=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fbb=new B.x("Hati ya Kuhowa",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fbd=new B.x("Choose a class template",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fbf=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fbl=new B.x("Download the newspaper picture",null,A.cs,null,null,null,null,null,null,null,null,null)
D.fbw=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new B.x("Done",null,A.aMA,null,null,null,null,null,null,null,null,null)
D.fbN=new B.x("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.fbO=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fc0=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a54,null,null,null,null,null,null,null,null,null)
D.fcR=new B.x("Export presentation",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fcS=new B.x("What would you like to do?",null,D.aM_,null,null,null,null,null,null,null,null,null)
D.fcV=new B.x("Delete",null,A.cs,null,null,null,null,null,null,null,null,null)
D.fdm=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fdq=new B.x("Hati (Documents)",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fdC=new B.x("Done",null,A.kT,null,null,null,null,null,null,null,null,null)
D.eU_=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdG=new B.x("Delete presentation?",null,D.eU_,null,A.L,null,null,null,null,null,null,null)
D.fdX=new B.x("After the last slide it starts again from the first",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fe7=new B.x("\ud83c\udf33",null,A.HQ,null,A.L,null,null,null,null,null,null,null)
D.fep=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.few=new B.x("Transfer document",null,A.oH,null,null,null,null,null,null,null,null,null)
D.feG=new B.x("Add to the slides",null,A.hj,null,null,null,null,null,null,null,null,null)
D.ff1=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new B.x("Make a book",null,I.aLz,null,null,null,null,null,null,null,null,null)
D.ffk=new B.x("Books",null,A.cs,null,null,null,null,null,null,null,null,null)
D.eMW=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffl=new B.x("Keep this page open until it finishes.",null,D.eMW,null,null,null,null,null,null,null,null,null)
D.ffo=new B.x("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.fft=new B.x("LANGUAGE",null,D.RP,null,null,null,null,null,null,null,null,null)
D.ffA=new B.x("Use this ending",null,A.cs,null,null,null,null,null,null,null,null,null)
D.ffI=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.ffJ=new B.x("Upload a different logo",null,A.cb,null,null,null,null,null,null,null,null,null)
D.ffZ=new B.x("Delete from the database?",null,A.kS,null,null,null,null,null,null,null,null,null)
D.fg_=new B.x("H",null,A.r4,null,null,null,null,null,null,null,null,null)
D.fgn=new B.x("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.fgM=new B.x("Cover",null,D.aML,null,null,null,null,null,null,null,null,null)
D.fgQ=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new B.x("Each page becomes its own slide you can present",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fhb=new B.x("Y",null,A.r4,null,null,null,null,null,null,null,null,null)
D.fhm=new B.x("Crop the picture",null,A.kT,null,null,null,null,null,null,null,null,null)
D.fhr=new B.x("Edit text",null,A.HR,null,null,null,null,null,null,null,null,null)
D.fjD=B.dO("a6Q")
D.Cw=new C.av1(0,"none")
D.aOP=new C.av1(1,"zipCrypto")
D.aOQ=new C.av1(2,"aes")
D.fqF=new F.O5("","",null)
D.frL=new C.b9P(null)
D.fsP=new C.Y6(null)
D.fu_=new C.abC(null)
D.fu1=new C.aCa(null)
D.fwN=new C.Zm(null)
D.fx2=new C.ZR(null)
D.fxl=new C.brb(null)})();(function staticFields(){$.h_h=null
$.h_i=null
$.h_j=null
$.h_k=null
$.fIB=B.uB("_lastQuoRemDigits")
$.fIC=B.uB("_lastQuoRemUsed")
$.avn=B.uB("_lastRemUsed")
$.fID=B.uB("_lastRem_nsh")
$.pJ=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5F=B.T(x.N,x.I)
$.fG9=!1
$.h4_=B.T(B.aA("kH"),x.N)
$.h4b=B.T(B.aA("kH"),x.E)
$.h2c=!1
$.bwO="q"
$.P4=0
$.BN=B.T(x.N,B.aA("ak<yL>"))
$.h2z=!1
$.fK9=!1
$.h8J=null
$.hCC=B.T(x.N,B.aA("ax<n?>"))
$.Jh=""
$.iV=0
$.fX5=function(){var w=x.N
return B.T(w,w)}()
$.fX4=B.T(x.N,x.R)
$.fKu=!1
$.aef=B.T(x.N,x.E)
$.fLg=0
$.bhN=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i0A","C7",()=>C.b7m(0))
w($,"i0y","a15",()=>C.b7m(1))
w($,"i0z","hci",()=>C.b7m(2))
w($,"i0x","fP_",()=>$.a15().us(0))
w($,"i0v","hcg",()=>C.b7m(1e4))
w($,"i0w","hch",()=>B.Dh(8))
w($,"hXn","haj",()=>B.Dh(0))
w($,"hXv","han",()=>B.Dh(0))
w($,"hXu","ham",()=>B.bUM(0))
w($,"i4e","hei",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a1e.gdL(D.a1e),v=v.gai(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"i4E","bBg",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mD(new C.fry(),v,"biz_plan_blue","Business Plan",B.a([B.b_(u),B.b_(t)],h)),C.mD(new C.frz(),v,"exec_summary","Executive",B.a([B.b_(s),B.b_(t)],h)),C.mD(new C.frA(),v,"teal_corporate","Teal Corp",B.a([B.b_(r),B.b_(4279310375)],h)),C.mD(new C.frL(),q,"geometric_overlap","Geometric",B.a([B.b_(4279203438),B.b_(u)],h)),C.mD(new C.frQ(),p,"midnight_cyan","Midnight Cyan",B.a([B.b_(o),B.b_(n)],h)),C.mD(new C.frR(),q,"diagonal_hero","Diagonal Hero",B.a([B.b_(m),B.b_(l)],h)),C.mD(new C.frS(),v,"swot_grid","SWOT Grid",B.a([B.b_(u),B.b_(4278556265)],h)),C.mD(new C.frT(),v,"layered_chevrons","Chevrons",B.a([B.b_(4280172719),B.b_(k)],h)),C.mD(new C.frU(),q,"split_triangle","Split Panel",B.a([B.b_(s),B.b_(t)],h)),C.mD(new C.frV(),v,"corporate_navy","Navy Pro",B.a([B.b_(4278982953),B.b_(4282090230)],h)),C.mD(new C.frW(),p,"cyan_slash","Cyan Slash",B.a([B.b_(o),B.b_(4278630100)],h)),C.mD(new C.frB(),p,"crimson_impact","Crimson",B.a([B.b_(4282714634),B.b_(4292617766)],h)),C.mD(new C.frC(),q,"ocean_waves","Ocean Waves",B.a([B.b_(4278413729),B.b_(4286436348)],h)),C.mD(new C.frD(),p,"mono_geometric","Mono Geo",B.a([B.b_(o),B.b_(n)],h)),C.mD(new C.frE(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b_(4280031511),B.b_(4293571336)],h)),C.mD(new C.frF(),q,"hex_infographic","Hex Stack",B.a([B.b_(r),B.b_(4284410580)],h)),C.mD(new C.frG(),q,"photo_banner","Photo Banner",B.a([B.b_(m),B.b_(4281908728)],h)),C.mD(new C.frH(),v,"process_steps","Process",B.a([B.b_(s),B.b_(k)],h)),C.mD(new C.frI(),"Minimal","grid_modern","Grid Modern",B.a([B.b_(l),B.b_(t)],h)),C.mD(new C.frJ(),"Luxury","platinum_frame","Platinum",B.a([B.b_(4282865001),B.b_(4293060848)],h)),C.mD(new C.frK(),v,"agenda_cards","Agenda Cards",B.a([B.b_(u),B.b_(4292602622)],h)),C.mD(new C.frM(),q,"headline_orange","Headline Orange",B.a([B.b_(j),B.b_(i)],h)),C.mD(new C.frN(),q,"infographic_teal","Infographic",B.a([B.b_(r),B.b_(j)],h)),C.mD(new C.frO(),q,"content_year","Year Feature",B.a([B.b_(j),B.b_(t)],h)),C.mD(new C.frP(),q,"photo_cta","Photo CTA",B.a([B.b_(m),B.b_(i)],h))],B.aA("P<DI>"))})
w($,"i4h","hek",()=>B.ae("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["AvcBIweoN8X0Bt3+5NLgjaGFEQM="]=a.current})($__dart_deferred_initializers__);