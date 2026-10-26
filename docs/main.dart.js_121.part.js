((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,U,A2,Ad,Ae,A3,Af,Ag,C={
t6(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fCw(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
I_(d){var w
if(d===0)return $.BJ()
if(d===1)return $.a0t()
if(d===2)return $.h5O()
if(Math.abs(d)<4294967296)return C.b61(A.o.M(d))
w=C.hqi(d)
return w},
b61(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t6(4,w)
return new C.nq(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t6(1,w)
return new C.nq(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.au(d,16)
v=C.t6(2,w)
return new C.nq(v===0?!1:s,w,v)}v=A.o.ak(A.o.gah3(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t6(v,w)
return new C.nq(v===0?!1:s,w,v)},
hqi(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.O(B.dE("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BJ()
w=$.h5N()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kQ(A.aD.gaL(w))
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
q=new C.nq(!1,r,4)
if(s<0)p=q.lV(0,-s)
else p=s>0?q.dO(0,s):q
return p},
fCx(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fTY(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.J(f,16),p=16-q,o=A.o.dO(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fm(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dO(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fTT(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.J(f,16)===0)return C.fCx(d,e,s,g)
w=e+s+1
C.fTY(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hql(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.J(f,16),q=16-r,p=A.o.dO(1,r)-1,o=A.o.fm(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dO(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fm(u,r)}w&2&&B.ah(g)
g[n]=o},
cxV(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hqj(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b62(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.au(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.au(v,16)&1)}},
fTZ(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.ak(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.ak(r,65536)}},
hqk(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nq:function nq(d,e,f){this.a=d
this.b=e
this.c=f},
cxW:function cxW(){},
cxX:function cxX(){},
cxY:function cxY(d,e){this.a=d
this.b=e},
cxZ:function cxZ(d){this.a=d},
aNT:function aNT(d,e){this.a=d
this.b=e},
fK9(d,e,f){var w=new C.PR(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
PR:function PR(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1E:function a1E(d,e){this.a=d
this.b=e},
bCQ:function bCQ(d){this.a=d
this.c=this.b=0},
h90(){return new C.bBA()},
bBA:function bBA(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cqf:function cqf(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hq0(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gcMF(d)))
v=f*2+2
u=C.fRD(C.fRF(),64)
t=new C.cb_(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cb0(e,1000,v)
s=new Uint8Array(v)
return A.aD.dA(s,0,t.cAC(w,0,s,0))},
cqd:function cqd(d,e){this.c=d
this.d=e},
au9:function au9(d,e){this.a=d
this.b=e},
cqg:function cqg(d,e,f,g){var _=this
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
b4M:function b4M(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cqe:function cqe(){this.a=$},
fTo(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
h8K(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAa:function bAa(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fHV(d,e){e&=31
return(d&$.pC[e])<<e>>>0},
mZ(d,e){e&=31
return(d>>>e|C.fHV(d,32-e))>>>0},
fRE(d){var w,v=new C.apV()
if(B.iv(d))v.aFZ(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fRF(){var w=C.fRE(0),v=new Uint8Array(4),u=x.S
u=new C.cb1(w,v,A.Cn,5,B.bT(5,0,!1,u),B.bT(80,0,!1,u))
u.l2(0)
return u},
fRD(d,e){var w=new C.caY(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
caX:function caX(){},
cb0:function cb0(d,e,f){this.a=d
this.b=e
this.c=f},
caV:function caV(){},
apU:function apU(d){this.a=d},
cb_:function cb_(d){this.a=$
this.b=d
this.c=$},
caW:function caW(){},
caU:function caU(){},
apV:function apV(){this.b=this.a=$},
caZ:function caZ(){},
cb1:function cb1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
caY:function caY(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
caT:function caT(){},
caS:function caS(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bII:function bII(){},
bIJ:function bIJ(d){this.a=d},
htb(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6i:function b6i(){},
ckf:function ckf(){},
bJB:function bJB(d,e){this.a=d
this.b=!1
this.c=e},
bJC:function bJC(){},
hBz(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
asO(d){var w=0,v=B.j(x.H),u
var $async$asO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.emc?2:4
break
case 2:w=5
return B.b(A.jJ.fK("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$asO)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jJ.fK("SystemChrome.setEnabledSystemUIOverlays",C.hBz(null),u),$async$asO)
case 6:case 3:return B.h(null,v)}})
return B.i($async$asO,v)},
asR:function asR(d,e){this.a=d
this.b=e},
a68:function a68(d){this.a=d},
fyx(d,e){return new C.aSa(e,d,null)},
aSa:function aSa(d,e,f){this.e=d
this.c=e
this.a=f},
axB:function axB(d,e,f,g,h){var _=this
_.ac=d
_.ae=e
_.a7$=f
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
hE4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.f9P(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bK(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
f9P:function f9P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
akS(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$akS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ael("ngmy_menu_lib_v1_zzslides_index",A.bD),$async$akS)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d1(s,x.f)
t=B.cy(t,new C.bTI(),t.$ti.k("F.E"),x.P)
r=B.z(t,B.a2(t).k("F.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bTJ())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akS,v)},
akU(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$akU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akS(),$async$akU)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.R(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.N(Date.now(),0,!1).a4().aa()
p=m.a
k=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.ny("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.D(["deck",m.ad(),"savedAt",l],t,q),null),$async$akU)
case 7:if(!f){w=5
break}s.m(0,p,B.D(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bf<2>")
s=B.z(new B.bf(s,r),r.k("F.E"))
w=10
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.D(["items",s,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],t,q),null),$async$akU)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akU,v)},
bTK(d){return C.heo(d)},
heo(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bTK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ael("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hr),$async$bTK)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.TS(B.Z(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a4(m)
$.ak.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bTK,v)},
akT(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$akT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akS(),$async$akT)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n_(r,new C.bTL(d))
w=4
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.D(["items",r,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),null),$async$akT)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aLX("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$akT)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akT,v)},
bTI:function bTI(){},
bTJ:function bTJ(){},
bTL:function bTL(d){this.a=d},
hNG(d,e,f){return B.c0(A.K,null,new C.fp2(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fp2:function fp2(d,e,f){this.a=d
this.b=e
this.c=f},
ZE:function ZE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFS:function aFS(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQn:function eQn(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQp:function eQp(d,e,f){this.a=d
this.b=e
this.c=f},
eQk:function eQk(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQm:function eQm(d,e){this.a=d
this.b=e},
eQe:function eQe(d){this.a=d},
eQc:function eQc(d){this.a=d},
eQd:function eQd(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e,f){this.a=d
this.b=e
this.c=f},
eQh:function eQh(d,e,f){this.a=d
this.b=e
this.c=f},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQw:function eQw(d){this.a=d},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQu:function eQu(){},
fWk(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d1(w,x.f)
v=B.cy(v,new C.eXu(),v.$ti.k("F.E"),x.ea)
u=B.a2(v).k("a5<F.E>")
v=B.z(new B.a5(v,new C.eXv(),u),u.k("F.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_C(d){return C.hFg(d)},
hFg(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_C=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.R(x.N,x.ea)
m=new C.fc_(n)
t=4
j=m
i=C
w=7
return B.b(B.a0c("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_C)
case 7:j.$1(i.fWk(f))
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
return B.b(B.aw(),$async$a_C)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fWk(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bf<2>")
o=p.k("a5<F.E>")
j=B
i=B
h=new B.bf(n,p)
g=C
w=13
return B.b(C.eXD(d),$async$a_C)
case 13:p=j.z(new i.a5(h,new g.fbY(f),o),o.k("F.E"))
A.d.aY(p,new C.fbZ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_C,v)},
aeV(d,e){return C.hNl(d,e)},
hNl(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aeV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.foA(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.aj(n,null)
q=!1
t=4
w=7
return B.b(B.aeN("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeV)
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
return B.b(B.aw(),$async$aeV)
case 12:p=g
w=13
return B.b(p.an("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeV)
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
return B.i($async$aeV,v)},
eXD(d){return C.huu(d)},
huu(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eXD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$eXD)
case 7:r=f
q=r.rm("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.km(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$eXD,v)},
adM(d,e){return C.hDX(d,e)},
hDX(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adM=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$adM)
case 6:s=g
r=B.aZ(x.N)
q=s.rm("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fT(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("ck.E"))
w=7
return B.b(s.an("StringList","ngmy_books_deleted_v1_"+r,q),$async$adM)
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
return B.b(C.a_C(d),$async$adM)
case 8:n=g
J.n_(n,new C.f9v(e))
w=9
return B.b(C.aeV(d,n),$async$adM)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adM,v)},
hNL(d,e){return B.a7(d,!1).cr(B.eH(new C.fpo(e),!0,null,x.H))},
hqn(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e7(w.d,new C.czh())},
nS:function nS(d,e,f){this.a=d
this.b=e
this.c=f},
eXu:function eXu(){},
eXv:function eXv(){},
fc_:function fc_(d){this.a=d},
fbY:function fbY(d){this.a=d},
fbZ:function fbZ(){},
foA:function foA(){},
f9v:function f9v(d){this.a=d},
fpo:function fpo(d){this.a=d},
Wq:function Wq(d,e){this.c=d
this.a=e},
auF:function auF(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
czh:function czh(){},
czj:function czj(d,e){this.a=d
this.b=e},
czm:function czm(d){this.a=d},
czn:function czn(d){this.a=d},
czl:function czl(){},
czo:function czo(d,e){this.a=d
this.b=e},
czk:function czk(d){this.a=d},
czp:function czp(){},
czi:function czi(d,e){this.a=d
this.b=e},
czq:function czq(){},
czd:function czd(d){this.a=d},
czb:function czb(d){this.a=d},
czc:function czc(d){this.a=d},
cze:function cze(d,e){this.a=d
this.b=e},
cza:function cza(d){this.a=d},
cz9:function cz9(d){this.a=d},
cz7:function cz7(d,e){this.a=d
this.b=e},
cz8:function cz8(d){this.a=d},
czg:function czg(){},
czf:function czf(d){this.a=d},
cz6:function cz6(d,e){this.a=d
this.b=e},
cz5:function cz5(d,e){this.a=d
this.b=e},
cz4:function cz4(d,e){this.a=d
this.b=e},
czr:function czr(d){this.a=d},
Wo:function Wo(d,e,f){this.c=d
this.d=e
this.a=f},
aBN:function aBN(d,e,f){this.a=d
this.b=e
this.c=f},
auB:function auB(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cyy:function cyy(d){this.a=d},
cyx:function cyx(d){this.a=d},
cyA:function cyA(d,e,f){this.a=d
this.b=e
this.c=f},
cyI:function cyI(){},
cyJ:function cyJ(d){this.a=d},
cyB:function cyB(d,e,f){this.a=d
this.b=e
this.c=f},
cyz:function cyz(d,e){this.a=d
this.b=e},
cyD:function cyD(d,e){this.a=d
this.b=e},
cyE:function cyE(d,e){this.a=d
this.b=e},
cyF:function cyF(d,e){this.a=d
this.b=e},
cyC:function cyC(d){this.a=d},
cyH:function cyH(d){this.a=d},
cyG:function cyG(d,e){this.a=d
this.b=e},
cyO:function cyO(d){this.a=d},
cyK:function cyK(d,e){this.a=d
this.b=e},
cyL:function cyL(d,e){this.a=d
this.b=e},
cyM:function cyM(d,e){this.a=d
this.b=e},
cyN:function cyN(d,e){this.a=d
this.b=e},
auD:function auD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hHA(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bw(new C.fgw(),x.H).eL(new C.fgx())}}else if(s)C.fXJ()}catch(t){}},
fXJ(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eL(new C.f0I())}catch(u){}},
hHD(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fgw:function fgw(){},
fgx:function fgx(){},
f0I:function f0I(){},
h1b(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e0(v,w,"").split(":"))},
h18(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kE)return null
return A.a.aU(w,14)},
fGG(d){var w
if(d.b!==D.kE)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aU(w,21)},
hI_(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h1c(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hHV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.R(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kr(0,f)
t=x.N
u=B.cy(u,new C.fhu(),B.a2(u).k("F.E"),t)
s=B.z(u,B.a2(u).k("F.E"))
if(s.length===0)return B.R(t,t)
for(u=v.kr(0,f),u=new B.HZ(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Pz(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Pz(A.a.aU(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.R(t,t)
k=B.R(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hHT(d,e){var w,v,u,t,s,r=B.a2(e).k("cu<1>"),q=B.z(new B.cu(e,r),r.k("F.E"))
A.d.aY(q,new C.fht())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c5(s,"]"))continue
w=B.aMT(w,u,s,0)}return w},
hHX(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a09:$.h7N(),s=x.N,r=B.R(s,s)
for(s=t.gdH(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c5(u,"]"))continue
r.m(0,w.b,u)}return r},
h19(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eYu(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.h1b(q)===e)return q}return null},
hHY(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aU(v,u)
return A.d.gI(D.ES).a},
hHZ(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abJ(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abJ(0,0,0)
v=C.eYu(b6,b0)
u=C.eYu(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hHX(b2,C.hHV(C.h19(b2),v.r))
if(s.a!==0){u.r=C.hHT(C.h19(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.h1b(o[m])
if(l==null||l==="utangulizi")continue
r.H(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eYu(b6,n)
i=C.eYu(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.fGG(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.h18(a8)===a0||C.fGG(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pc(a1,new C.fhA(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iO
$.iO=a9+1
A.d.H(a1,new C.ex(""+1000*a6+"_"+a9,D.kE,a2,a3,a4,a5,"",24,A.a1,A.bg,A.az,4279310375,A.bf,d.at,D.b8,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cb,0,"","","","","",!1,0));++e}b5.f=new B.N(Date.now(),0,!1)
return new B.abJ(k,t,e)},
hHU(d){var w=C.hHY(d)
if(d.w==="hati_kuhowa")return C.h0w("",w)
return C.h0v("",w)},
fhu:function fhu(){},
fht:function fht(){},
fhA:function fhA(d){this.a=d},
fXt(){var w=new B.N(Date.now(),0,!1),v=new C.f_M()
return B.t(v.$1(B.bL(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fGO(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fis(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kE&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h1p(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fis(d)
w=B.bg(u)
if(w==null)return!C.fis(d)
return new B.N(Date.now(),0,!1).a4().cU(w.a4().bL(18e9))},
hIF(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.N(Date.now(),0,!1).a4().aa()},
his(d){return A.a.i(d).toLowerCase()},
an_(d){return C.hiu(d)},
hiu(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$an_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$an_)
case 7:r=f
p=r.rm("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.I(o,C.hM9(),B.T(o).k("I<1,n>")).bZ(0,new C.c3d())
o=B.d8(o,o.$ti.k("F.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$an_,v)},
amZ(d,e){return C.hit(d,e)},
hit(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amZ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.an_(d),$async$amZ)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$amZ)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pK(r)),$async$amZ)
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
return B.i($async$amZ,v)},
an0(d,e){return C.hiv(d,e)},
hiv(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$an0=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.an_(d),$async$an0)
case 3:r=g
if(!J.hB(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$an0)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pK(r)),$async$an0)
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
return B.i($async$an0,v)},
Tb(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Tb=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fA3&&!a5){w=1
break}t=4
w=7
return B.b(B.aw(),$async$Tb)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aC(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.R(e,x.I)
for(d=J.jj(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.TS(B.Z(f.a(n.b),e,a0)))}$.a4Z=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a4(a2)
$.ak.$1("[kiapo] local load: "+B.t(m))
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
return B.b(B.bV(),$async$Tb)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tl("civic_hati_kiapo_uongozi",null,A.ea),$async$Tb)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.R(o,x.I)
for(f=x.f,e=J.jj(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.TS(B.Z(f.a(j.b),o,d)))}for(o=k,o=new B.cN(o,B.a2(o).k("cN<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a4Z.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbn())f=d===e.gbn()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a4Z.m(0,i.a,i.b)}w=20
return B.b(C.an1(),$async$Tb)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a4(a3)
$.ak.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fA3=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tb,v)},
an1(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$an1=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$an1)
case 6:s=e
r=B.R(x.N,x.P)
for(o=$.a4Z,o=new B.cN(o,B.a2(o).k("cN<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ad())}w=7
return B.b(s.an("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.aj(r,null)),$async$an1)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a4(l)
$.ak.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$an1,v)},
aWD(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Tb(!1),$async$aWD)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a4Z.h(0,t)
r=s==null?null:s.hr()
if(r==null){u=null
w=1
break}u=C.bxN(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWD,v)},
a5_(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5_=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.N(Date.now(),0,!1)
o=a1.hr()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a4Z.m(0,d,o)
$.fA3=!0
w=3
return B.b(C.an1(),$async$a5_)
case 3:w=4
return B.b(B.bV(),$async$a5_)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.R(e,x.P)
for(n=$.a4Z,n=new B.cN(n,B.a2(n).k("cN<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ad())}w=9
return B.b(B.ny("civic_hati_kiapo_uongozi",B.D(["byState",r,"updatedAt",new B.N(Date.now(),0,!1).a4().aa()],e,x.z),null),$async$a5_)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a4(a0)
$.ak.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5_,v)},
an2(d){var w=0,v=B.j(x.T),u,t,s
var $async$an2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a37(A.et),$async$an2)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$an2)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWC(t,d),$async$an2)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an2,v)},
aWC(d,e){return C.hiw(d,e)},
hiw(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWC=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bV(),$async$aWC)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ad("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aI(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eM().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w3(q,new Uint8Array(B.cl(d)),D.blY),$async$aWC)
case 8:n=p.Bu(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a4(k)
$.ak.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWC,v)},
IP(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eh(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,l,m,n)},
f_0(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eh(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
fE_(d,e,f,g,h,i,j,k){var w=C.cx(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eh(h,!1,j,A.az,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cz,A.O,"",v,w,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,g,e,f)},
eZH(d,e,f,g){return C.f_0(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fE0(d,e,f,g,h,i,j,k){var w=C.cx()
return C.eh(A.px,!1,j,A.az,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bg,A.a1,"",h,w,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,g,e,f)},
fXs(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e0(v,w,"").split(":"))},
bxN(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.R(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.fXs(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kE&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hr()}h=C.fGk(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Aq(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.fXs(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kE&&A.a.c5(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bl(a1.z,new C.fgu(a2))}else A.d.bl(a1.z,new C.fgv())
A.d.H(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fis(a0))a0.ax=a6.f.a4().aa()
return a0},
fGk(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fje(D.a1a),l=C.cx(),k=x.u,j=B.a([C.eh(A.bf,!1,s,A.az,"marriage_locked_bg",r,24,A.bg,A.a1,"",1,C.cx(),m,"","",0,!1,"",0,D.b8,q,2,"",0,0,"",D.cb,D.l4,1,0,0)],k),i=B.a([],k)
i.push(C.IP("NGMY",A.L,236069181,52,A.bg,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IP("TAREHE:",A.bf,o,16,A.bg,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fE_("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.fXt()))
i.push(C.eZH(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IP("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bg,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IP("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cz,A.a1,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f_0(0,0.002,D.fb,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fE0("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fE0("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fE0("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f_0(268435456,0.175,D.b8,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IP("VIDEO YA KIAPO",A.bf,o,10,A.bg,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eh(A.bf,!1,s,A.az,"__kiapo_video__",r,24,A.bg,A.a1,"",0.131,C.cx(),t,"","",0,!1,"",0,D.b8,q,2,"",0,0,"",D.cb,D.l4,0.77,0.115,0.492))
i.push(C.IP("Rais Anayeapa:",A.bf,p,15,A.bg,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IP("Jina:",A.bf,p,13,A.bg,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fE_("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.eZH(0.195,0.7130000000000001,0.62,n))
i.push(C.IP("Sahihi:",A.bf,p,13,A.bg,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eh(A.bf,!1,s,A.az,"marriage_sign_rais",0,24,A.bg,A.a1,"",0.07,C.cx(),t,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,0.38,0.21500000000000002,0.73))
i.push(C.eZH(0.21500000000000002,0.795,0.38,n))
i.push(C.IP("Tarehe:",A.bf,p,13,A.bg,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fE_("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.fXt()))
i.push(C.eZH(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f_0(0,0.032,D.b8,o,1,"state_box",0.72,0.14,0.875),C.IP("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bg,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qR(4294967035,t,0,0,j,l,D.pm,"","",u,D.d8)
return C.Aq(t,t,t,t,D.nx,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cx(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
adW(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adW=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.F(x.q).f.P(D.eh1)
w=1
break}w=3
return B.b(C.Tb(!0),$async$adW)
case 3:w=4
return B.b(C.aWD(p),$async$adW)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h1p(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c0(D.b32,null,new C.fbm(p),f,!0,!0,!1,A.l5,!1,!1,x.N),$async$adW)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fbn(),f,null,!0,!0,x.y),$async$adW)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fGk(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.F(x.q).f
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fGk(p))
case 1:return B.h(u,v)}})
return B.i($async$adW,v)},
f_M:function f_M(){},
c3d:function c3d(){},
fgu:function fgu(d){this.a=d},
fgv:function fgv(){},
fbm:function fbm(d){this.a=d},
fbk:function fbk(d){this.a=d},
fbl:function fbl(d){this.a=d},
fbn:function fbn(){},
fbi:function fbi(d){this.a=d},
fbj:function fbj(d){this.a=d},
anx:function anx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAD:function aAD(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dXm:function dXm(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXl:function dXl(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXo:function dXo(d){this.a=d},
vF(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eh(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",j,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,l,m,n)},
fX6(d,e,f){var w=4291404327
return B.a([C.pB(0,f,D.ex,w,2,"ring_l",f,d-f*0.42,e),C.pB(0,f,D.ex,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
eZ8(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pB(4294967288,f,D.ex,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pB(h,s,D.ex,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pB(h,f*0.46,D.ex,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pB(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eh(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
eZ7(d,e,f,g,h,i,j,k,l){var w=C.cx(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eh(h,!1,k,A.az,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cz,A.O,"",v,w,null,"","",0,!1,"",0,D.b8,4280172719,2,l,0,0,"",D.cb,D.cJ,g,e,f)},
bvf(d,e,f,g){return C.pB(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fX5(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pB(0,0.036,D.b8,h,1.4,"banner_box_"+d,w,v,e),C.vF(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h1a(){var w=new B.N(Date.now(),0,!1),v=new C.fhz()
return B.t(v.$1(B.bL(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fX7(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vF(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.eZ7("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bvf(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vF("Sahihi:",A.bf,j,15,A.a1,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eh(A.bf,!1,4279310375,A.az,"marriage_sign_"+d+"_witness_"+r,0,24,A.bg,A.a1,"",0.05,C.cx(),null,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,s,t,g-0.004),C.bvf(t,g+0.044,s,w)],x.u)},
aen(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cU_,D.c1j,D.cNC,D.cPi],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fDj(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fje(d.d),v=B.a([C.eh(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a1,"",1,C.cx(),w,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l4,1,0,0)],x.u)
A.d.v(v,C.hwI(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hwI(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vF("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fX6(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fX6(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.eZ8(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.eZ8(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vF("\ud83c\udf33",A.L,4279898632,22,A.a1,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pB(0,0.062,D.ex,b1,1.6,"crest_o",0.11,0.445,0.012),C.pB(0,0.046,D.ex,b1,1,"crest_i",0.084,0.458,0.02),C.vF("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pB(0,0.002,D.fb,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pB(b9,0.016,D.kF,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pB(0,0.002,D.fb,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vF("TAREHE:",A.bf,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.eZ7("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h1a()),C.bvf(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vF(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pB(c0,0.0026,D.b8,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pB(c3.e,0.138,D.b8,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cx()
c2.push(C.eh(A.bf,!1,b9,A.az,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bg,A.cp,"",0.128,s,a9,"","",0,!1,"",0,D.b8,b3,2,c5,0,0,"",D.cb,D.cJ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pB(0,0.036,D.b8,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cx()
A.d.v(c2,B.a([s,C.eh(A.L,!1,c0,A.az,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bg,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.b8,b3,2,c7,0,0,"",D.cb,D.cJ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fX5(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vF(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.eZ7("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iO
$.iO=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iO
$.iO=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ex(""+1000*i+"_"+h,D.cJ,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bg,A.az,c0,A.bf,a9,D.b8,b2,b3,2,0,!1,s,0,D.cb,0,"","","","","",!1,0),j,new C.ex(""+1000*f+"_"+e,D.eQ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a1,A.bg,A.az,b6,A.bf,a9,D.fb,0,b5,0.8,0,!1,g,0,D.cb,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iO
$.iO=p+1
i=Date.now()
h=$.iO
$.iO=h+1
g=Date.now()
f=$.iO
$.iO=f+1
e=Date.now()
a3=$.iO
$.iO=a3+1
A.d.v(d,B.a([new C.ex(""+1000*s+"_"+p,D.cJ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bg,A.az,b7,A.dK,a9,D.b8,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*i+"_"+h,D.eQ,a1,a2,0.046,0.025875,"",24,A.a1,A.bg,A.az,b6,A.bf,a9,D.b8,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*g+"_"+f,D.cJ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bg,A.az,b7,A.L,a9,D.b8,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*e+"_"+a3,D.eQ,a0,k,a1+0.046-a0,l,"",24,A.a1,A.bg,A.az,b6,A.bf,a9,D.b8,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cb,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fX5("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a1_||w===D.a11||w===D.a0Z||w===D.a10){w=t-0.008
A.d.v(c2,C.eZ8(0.21,w,0.044,!0,b0))
A.d.v(c2,C.eZ8(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pB(0,a4,D.b8,c0,1.3,"wit_table_border",0.82,0.09,t),C.pB(c0,a4,D.b8,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pB(0,0.0022,D.fb,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vF("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vF("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fX7("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fX7("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pB(0,0.11,D.b8,c0,1.2,"mw_box",0.82,0.09,t),C.vF("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vF("Jina:",A.bf,b9,15,A.a1,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.eZ7("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bvf(0.215,p,0.3116,b5),C.vF("Sahihi:",A.bf,b9,15,A.a1,0.028,0,"mw_sl",0.09,0.5,w),C.eh(A.bf,!1,b6,A.az,"marriage_sign_mwandishi",0,24,A.bg,A.a1,"",0.044,C.cx(),a9,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,0.3161999999999999,0.5738,s-0.044),C.bvf(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pB(0,0.032,D.b8,c0,1,"state_box",0.7,0.15,a8),C.vF("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hHW(d){var w,v,u,t=null,s=B.aX(d.f),r=B.aX(d.r),q=C.fGY(d.d),p=new C.fhv(s),o=new C.fhw(s),n=d.z,m=n===D.a1_||n===D.a11||n===D.a0Z||n===D.a10,l=n===D.azm||n===D.a12||n===D.azn,k=B.bU(0,B.fD(q,A.B,t,t,A.ci,A.bM,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a12?26:16
i.push(new C.fhy().$1$size(w))}if(n===D.azo)i.push(D.eUl)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hu,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.G(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aHM,p.$1$w(0.9),D.aHM,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_8,t,n,w,t,t,A.n),t,t,t,t,A.adK,t,t,t))
i.push(A.ar)
i.push(new C.fhx(r).$1("NIMETOWE"))
i.push(A.fW)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.B(A.JE,new B.cC(A.aY,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d4,new B.bF(1,A.bn,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.V,t,A.aX,A.q,B.a([k,new B.B(A.acn,B.u(i,A.ad,t,A.e,A.j,0,A.p),t)],j),t)},
h0v(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aen(e,t)
if(r==null)r=A.d.gI(D.ES)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fDj(r,0.165,y.O,D.cPN,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pm,"","",s,D.d8)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Aq(t,t,t,t,D.nx,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h0w(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aen(e,t)
if(r==null)r=A.d.gI(D.ES)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fDj(r,0.165,y.f,D.cLR,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pm,"","",s,D.d8)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Aq(t,t,t,t,D.nx,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bz5(d,e,f){var w=0,v=B.j(x.T),u
var $async$bz5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c0(A.K,null,new C.fsO(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bz5,v)},
adX(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adX=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fbq(),q),q.k("F.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IY,null,new C.fbr(p),d,!0,!0,!1,A.l5,!1,!1,x.N),$async$adX)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bz5(d,"Hati ya Kuhowa",D.ES),$async$adX)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$adX)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h0v(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adX,v)},
adY(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adY=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fbu(),q),q.k("F.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IY,null,new C.fbv(p),d,!0,!0,!1,A.l5,!1,!1,x.N),$async$adY)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bz5(d,"Hati ya Kuhoweya",D.ES),$async$adY)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$adY)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h0w(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adY,v)},
adZ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$adZ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a5<1>")
m=B.z(new B.a5(i,new C.fby(),n),n.k("F.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IY,null,new C.fbz(m),d,!0,!0,!1,A.l5,!1,!1,x.N),$async$adZ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bz5(d,"Malipo ya Awamu ya Mahari",D.NU),$async$adZ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$adZ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aen(s,D.NU)
if(q==null)q=A.d.gI(D.NU)
n=C.cx()
p=C.qR(q.e,null,0,0,C.fDj(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cHg,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pm,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.d8)
n=C.cx()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Aq(null,null,null,null,D.nx,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adZ,v)},
wC:function wC(d,e){this.a=d
this.b=e},
j9:function j9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fhz:function fhz(){},
fhv:function fhv(d){this.a=d},
fhx:function fhx(d){this.a=d},
fhy:function fhy(){},
fhw:function fhw(d){this.a=d},
fsO:function fsO(d,e){this.a=d
this.b=e},
aaQ:function aaQ(d,e,f){this.c=d
this.d=e
this.a=f},
dOL:function dOL(d,e,f){this.a=d
this.b=e
this.c=f},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
aaf:function aaf(d,e,f){this.c=d
this.d=e
this.a=f},
fbq:function fbq(){},
fbr:function fbr(d){this.a=d},
fbo:function fbo(d){this.a=d},
fbp:function fbp(d){this.a=d},
fbu:function fbu(){},
fbv:function fbv(d){this.a=d},
fbs:function fbs(d){this.a=d},
fbt:function fbt(d){this.a=d},
fby:function fby(){},
fbz:function fbz(d){this.a=d},
fbw:function fbw(d){this.a=d},
fbx:function fbx(d){this.a=d},
IS(d,e,f,g,h,i,j,k,l,m){var w=C.cx()
return C.eh(e,!1,f,A.az,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,k,l,m)},
Br(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eh(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a1,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
fXM(d,e,f){return C.Br(0,0.002,D.fb,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvp(d,e,f,g,h){return B.a([C.Br(4294967288,0.032,D.b8,4291404327,1.15,"pill_"+d,g,f,e),C.IS(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fE4(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Br(0,0.002,D.fb,g,1,"orn_l_"+t,u,d,v),C.Br(h,0.016,D.kF,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Br(0,0.002,D.fb,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a__(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.IS(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cx()
return B.a([v,C.eh(A.L,!1,j,A.az,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cz,A.O,"",0.02,s,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,t,u,g-0.002),C.fXM(u,g+0.018,t)],x.u)},
fXN(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Br(h,0.028,D.b8,h,0,"chv_"+d,g,e,f),C.Br(w,0.024,D.kF,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Br(w,0.024,D.kF,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.IS(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvo(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.IS("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eh(A.bf,!1,4279310375,A.az,"marriage_sign_"+d,0,24,A.bg,A.a1,"",0.032,C.cx(),null,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,v,w,f-0.006),C.fXM(w,f+0.016,v)],x.u)},
fGZ(d){var w,v
for(w=0;w<19;++w){v=D.O6[w]
if(v.a===d)return v}return null},
hKb(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aen(A.a.aU(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aen(A.a.aU(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aU(k,18)
w=C.aen(u,D.NU)
v=w==null?l:w.d
if(v==null){w=C.aen(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fGZ(A.a.aU(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fYB.a8(0)
$.fYN.a8(0)
t=C.fje(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fI1(d){var w=0,v=B.j(x.T),u
var $async$fI1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c0(A.K,null,new C.fu2(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fI1,v)},
wF:function wF(d,e){this.a=d
this.b=e},
nd:function nd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bff:function bff(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fu2:function fu2(){},
aaT:function aaT(d){this.a=d},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1k:function e1k(d,e){this.a=d
this.b=e},
acw:function acw(d,e,f){this.c=d
this.d=e
this.a=f},
fGY(d){return $.fYN.cg(0,d,new C.fjg(d))},
fje(d){return $.fYB.cg(0,d,new C.fjf(d))},
fs(d){return B.fxF(d>>>16&255,d>>>8&255,d&255,255)},
hzF(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.fZQ(4294570461,4293910718,4284234270,u)
case 1:return C.fZQ(4294635750,4293975240,t,4292912216)
case 2:w=C.eXJ(s,4294505966,r)
C.bv9(w,14,16,p)
C.ke(w,8,9,464,836,u,1.2)
C.Bn(w,2,2,1,1,u,10)
C.Bn(w,478,2,-1,1,u,10)
C.Bn(w,2,852,1,-1,u,10)
C.Bn(w,478,852,-1,-1,u,10)
return w
case 3:return C.eXJ(4294966515,4294373082,4289102906)
case 4:return C.huF(C.eXJ(4294376440,4293653998,4290287194))
case 5:w=C.eXJ(4294965238,4294437098,4288444980)
C.bv9(w,14,16,4283043359)
C.ke(w,6,7,468,840,u,1)
C.ke(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,n,4294175448)
C.ra(v,n)
C.ke(v,24,24,432,806,4286209070,1)
C.ZO(v,12,12,468,12,o,3,20)
C.ZO(v,12,842,468,842,o,3,20)
C.ZO(v,12,12,12,842,o,3,20)
C.ZO(v,468,12,468,842,o,3,20)
return v
case 7:return C.hsT(4294440434,4293518297,4280228630,r)
case 8:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,m,4293911504)
C.ra(v,m)
C.ke(v,28,28,424,798,l,1)
C.f4Z(v,28,28,l,k)
C.f4Z(v,452,28,l,k)
C.f4Z(v,28,826,l,k)
C.f4Z(v,452,826,l,k)
return v
case 9:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,j,4294111986)
C.ra(v,j)
C.ke(v,18,18,444,818,4292401368,0.7)
B.ix(v,!0,C.fs(p),0,13,0,853)
return v
case 10:return C.hwv(i,4294173372)
case 11:return C.hxz(4294439140,4293449662)
case 12:return C.hsM(h,4294239432)
case 13:return C.hx0(4294244340,4293193448)
case 14:return C.hBa(4294505710,4293780694)
case 15:return C.eWL(4294966259,4294439138,o,p,q)
case 16:return C.eWL(4294966776,4294178544,o,g,g)
case 17:return C.eWL(4294965493,4294504170,o,4286200650,q)
case 18:return C.eWL(4294966519,4294373862,o,p,p)
case 19:return C.hvG()
case 20:return C.hvH()
case 21:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,h,4293976768)
C.ra(v,h)
C.bv9(v,14,16,p)
B.ix(v,!0,C.fs(u),4,475,4,9)
B.ix(v,!0,C.fs(u),4,475,844,849)
B.ix(v,!0,C.fs(u),4,9,4,849)
B.ix(v,!0,C.fs(u),470,475,4,849)
C.ZO(v,10,12,470,12,u,2,16)
C.ZO(v,10,842,470,842,u,2,16)
C.ZO(v,10,12,10,842,u,2,18)
C.ZO(v,470,12,470,842,u,2,18)
C.Bn(v,2,2,1,1,t,10)
C.Bn(v,478,2,-1,1,t,10)
C.Bn(v,2,852,1,-1,t,10)
C.Bn(v,478,852,-1,-1,t,10)
C.ke(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,s,4294438872)
C.ra(v,s)
C.ke(v,14,16,452,822,o,2.2)
C.ke(v,22,24,436,806,o,1)
C.fFl(v,!1,!1,o,p,p,36,14,16)
C.kr(v,240,20,7,o,!0)
C.kr(v,240,834,7,o,!0)
C.kr(v,18,427,7,o,!0)
C.kr(v,462,427,7,o,!0)
return v
case 23:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,i,4293910712)
C.ra(v,i)
B.ix(v,!0,C.fs(u),0,479,0,20)
B.ix(v,!0,C.fs(u),0,479,834,853)
B.ix(v,!0,C.fs(u),0,20,0,853)
B.ix(v,!0,C.fs(u),460,479,0,853)
B.ix(v,!0,C.fs(f),5,474,5,9)
B.ix(v,!0,C.fs(f),5,474,844,848)
B.ix(v,!0,C.fs(f),5,9,5,848)
B.ix(v,!0,C.fs(f),470,474,5,848)
C.ke(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hd(q,q,A.c4,0,A.dV,854,q,0,3,q,A.c4,480,!1)
C.xt(v,e,4294174404)
C.ra(v,e)
C.bv9(v,14,16,p)
B.ix(v,!0,C.fs(u),3,476,3,8)
B.ix(v,!0,C.fs(u),3,476,845,850)
B.ix(v,!0,C.fs(u),3,8,3,850)
B.ix(v,!0,C.fs(u),471,476,3,850)
C.ke(v,9,10,462,834,t,1)
C.ke(v,14,16,452,822,u,1.8)
C.kr(v,240,8,4,u,!0)
C.kr(v,240,846,4,u,!0)
C.kr(v,8,427,4,u,!0)
C.kr(v,472,427,4,u,!0)
C.kr(v,8,8,3,t,!0)
C.kr(v,472,8,3,t,!0)
C.kr(v,8,846,3,t,!0)
C.kr(v,472,846,3,t,!0)
return v}},
xt(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.ks(d,!1,A.d6,new B.Q9(s),r,A.cR,1,0,w-1,k,k);++k}},
ra(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f6()
n.dY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aG(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aG(v==null?0:v)
v=d.a
s=v==null?o:v.dK(u,t,o)
if(s==null)s=new B.is()
v=A.o.D(A.k.M(s.gb2(s))-3,0,255)
r=A.o.D(A.k.M(s.gb9())-3,0,255)
q=A.o.D(A.k.M(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.je(u,t,v,r,q,255)}},
ke(d,e,f,g,h,i,j){var w,v=null,u=C.fs(i),t=e+g
B.ks(d,!0,A.d6,u,v,A.cR,j,e,t,f,f)
w=f+h
B.ks(d,!0,A.d6,u,v,A.cR,j,e,t,w,w)
B.ks(d,!0,A.d6,u,v,A.cR,j,e,e,f,w)
B.ks(d,!0,A.d6,u,v,A.cR,j,t,t,f,w)},
Bn(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.ks(d,!0,A.d6,C.fs(i),u,A.cR,2,e,e+g*j,f,f)
B.ks(d,!0,A.d6,C.fs(i),u,A.cR,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.ks(d,!0,A.d6,C.fs(i),u,A.cR,1,w,e+g*t,v,v)
B.ks(d,!0,A.d6,C.fs(i),u,A.cR,1,w,w,v,f+h*t)},
fZQ(d,e,f,g){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xt(v,d,e)
C.ra(v,d)
B.ix(v,!0,C.fs(f),0,479,0,28)
B.ix(v,!0,C.fs(f),0,479,826,853)
B.ix(v,!0,C.fs(f),0,28,0,853)
B.ix(v,!0,C.fs(f),452,479,0,853)
C.ke(v,5,5,470,844,g,1.1)
C.ke(v,28,28,424,798,g,1.6)
C.Bn(v,2,2,1,1,g,11)
C.Bn(v,478,2,-1,1,g,11)
C.Bn(v,2,852,1,-1,g,11)
C.Bn(v,478,852,-1,-1,g,11)
return v},
eXJ(d,e,f){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xt(v,d,e)
C.ra(v,d)
C.ke(v,14,16,452,822,f,1.6)
C.ke(v,20,22,440,810,f,0.8)
return v},
bv9(d,e,f,g){var w,v=C.fs(g)
B.ix(d,!0,v,0,479,0,f-1)
w=854-f
B.ix(d,!0,v,0,479,w,853);--w
B.ix(d,!0,v,0,e-1,f,w)
B.ix(d,!0,v,480-e,479,f,w)},
huF(d){var w,v,u=4291404327
C.bv9(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kr(d,w,8,3,u,!0)
C.kr(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kr(d,7,v,3,u,!0)
C.kr(d,473,v,3,u,!0)}return d},
f7W(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.iZ(e,f),new B.iZ(e+g*n,f),new B.iZ(e,f+h*n)],t)
B.a_z(d,C.fs(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.iZ(s,u),new B.iZ(e+g*v,u),new B.iZ(s,f+h*v)],t)
B.a_z(d,C.fs(k),t)
t=A.k.U(n*0.39)
C.kr(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kr(d,e+g*t,f+h*3,4,k,!0)
C.kr(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kr(d,e+g*t,f,5,k,!0)
C.kr(d,e,f+h*t,5,k,!0)}},
fFl(d,e,f,g,h,i,j,k,l){var w,v
C.f7W(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f7W(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f7W(d,k,v,1,-1,e,f,g,h,i,j)
C.f7W(d,w,v,-1,-1,e,f,g,h,i,j)},
ZO(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kM(d,!0,A.d6,new B.qp(p),null,A.cR,j,r,q)}},
f76(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ks(d,!0,A.d6,new B.qp(o),null,A.cR,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.ks(d,!0,A.d6,new B.qp(o),null,A.cR,1.4,q,q,p,p+h*r)}},
hsT(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hd(o,o,A.c4,0,A.dV,854,o,0,3,o,A.c4,480,!1)
C.xt(n,d,e)
C.ra(n,d)
C.ke(n,20,20,440,814,f,1.2)
C.f76(n,0,0,1,1,g)
C.f76(n,480,0,-1,1,g)
C.f76(n,0,854,1,-1,g)
C.f76(n,480,854,-1,-1,g)
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
B.ks(n,!0,A.d6,new B.qp(p),o,A.cR,1.2,240,r,60,q)}return n},
f4Z(d,e,f,g,h){var w
C.f9Q(d,!0,C.fs(g),13,e,f)
C.f9Q(d,!0,C.fs(g),9,e,f)
w=B.a([new B.iZ(e,f-4),new B.iZ(e+4,f),new B.iZ(e,f+4),new B.iZ(e-4,f)],x.J)
B.a_z(d,C.fs(h),w)},
kr(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.iZ(e,v),new B.iZ(u,f),new B.iZ(e,t),new B.iZ(s,f)],x.J)
if(i){B.a_z(d,C.fs(h),r)
return}B.ks(d,!0,A.d6,C.fs(h),w,A.cR,1,e,u,v,f)
B.ks(d,!0,A.d6,C.fs(h),w,A.cR,1,u,e,f,t)
B.ks(d,!0,A.d6,C.fs(h),w,A.cR,1,e,s,t,f)
B.ks(d,!0,A.d6,C.fs(h),w,A.cR,1,s,e,f,v)},
eWK(d,e,f,g,h,i,j){var w,v=B.a([new B.iZ(e,f),new B.iZ(e+g*28,f),new B.iZ(e,f+h*28)],x.J)
B.a_z(d,C.fs(i),v)
v=e+g*14
w=f+h*14
C.kr(d,v,w,6,j,!0)
C.kr(d,v,w,3,i,!0)},
eWL(d,e,f,g,h){var w=null,v=B.hd(w,w,A.c4,0,A.dV,854,w,0,3,w,A.c4,480,!1)
C.xt(v,d,e)
C.ra(v,d)
C.ke(v,18,18,444,818,f,2)
C.ke(v,26,26,428,802,f,0.9)
if(h!=null)B.ix(v,!0,C.fs(h),28,451,28,34)
C.eWK(v,18,18,1,1,g,f)
C.eWK(v,462,18,-1,1,g,f)
C.eWK(v,18,836,1,-1,g,f)
C.eWK(v,462,836,-1,-1,g,f)
return v},
hvG(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
C.xt(r,u,4294240980)
C.ra(r,u)
C.ke(r,10,12,460,830,t,3.2)
C.ke(r,18,20,444,814,s,1.2)
C.ke(r,24,26,432,802,t,1.8)
C.fFl(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kr(r,w,16,3,t,!0)
C.kr(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kr(r,16,w,3,t,!0)
C.kr(r,464,w,3,t,!0)}return r},
hvH(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
C.xt(p,s,4294373080)
C.ra(p,s)
C.ke(p,16,18,448,818,r,2.4)
C.ke(p,24,26,432,802,4286209044,1)
w=new C.eZ_(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fFl(p,!1,!0,r,q,q,34,16,18)
return p},
bvQ(d,e,f,g,h,i){B.ix(d,!0,C.fs(i),e,e+g,f,f+h)},
bwF(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.ks(d,!1,A.d6,new B.Q9(i),null,A.cR,1,e,w,l,l)}},
hwu(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.J(A.o.ak(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ks(d,!1,A.d6,new B.qp(r),null,A.cR,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.J(A.o.ak(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.ks(d,!1,A.d6,new B.qp(r),null,A.cR,1,t,t,f,s);++q}},
hwv(d,e){var w,v,u=null,t=B.hd(u,u,A.c4,0,A.dV,854,u,0,3,u,A.c4,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hwu(t,v,w,30,D.cAK,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bvQ(t,44,44,392,766,d)
C.bwF(t,44,44,392,766,d,e)
C.ra(t,d)
C.ke(t,44,44,392,766,4292128567,2.2)
C.ke(t,50,50,380,754,4279898632,0.8)
return t},
hxy(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.J(g,4)){case 0:C.kr(d,e,f,7,h,!0)
C.kr(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.ks(d,!0,A.d6,C.fs(h),o,A.cR,1.6,w,u,v,t)
B.ks(d,!0,A.d6,C.fs(h),o,A.cR,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.ks(d,!0,A.d6,new B.qp(p),o,A.cR,1.2,w,v,q,q)}break
default:B.ks(d,!0,A.d6,C.fs(h),o,A.cR,1.5,e-8,e+8,f,f)
B.ks(d,!0,A.d6,C.fs(h),o,A.cR,1.5,e,e,f-8,f+8)
B.kM(d,!0,A.d6,C.fs(h),o,A.cR,2,e,f)}},
hxz(d,e){var w,v,u,t,s=null,r=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
B.ix(r,!0,C.fs(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hxy(r,u,v,w,4292391514)}C.bvQ(r,46,46,388,762,d)
C.bwF(r,46,46,388,762,d,e)
C.ra(r,d)
C.ke(r,46,46,388,762,4291404327,1.8)
return r},
fVp(d,e,f,g){C.f9Q(d,!0,C.fs(g),16,e,f)
C.f9Q(d,!0,C.fs(g),11,e,f)
C.kr(d,e,f,6,g,!0)
B.ks(d,!0,A.d6,C.fs(g),null,A.cR,1.3,e-14,e+14,f,f)
B.ks(d,!0,A.d6,C.fs(g),null,A.cR,1.3,e,e,f-14,f+14)},
hsM(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hd(v,v,A.c4,0,A.dV,854,v,0,3,v,A.c4,480,!1)
B.ix(s,!0,C.fs(4280948752),0,479,0,853)
B.ix(s,!0,C.fs(u),0,479,0,78)
B.ix(s,!0,C.fs(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fVp(s,w,39,t)
C.fVp(s,w,815,t)}C.bvQ(s,38,92,404,670,d)
C.bwF(s,38,92,404,670,d,e)
C.ra(s,d)
C.ke(s,38,92,404,670,t,1.8)
C.ke(s,45,99,390,656,4287322667,0.8)
return s},
hx_(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.iZ(e,f),new B.iZ(q-5,w),new B.iZ(q,f-(18-Math.abs(r)*3)),new B.iZ(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_z(d,new B.qp(o),p)}B.kM(d,!0,A.d6,C.fs(4292128567),null,A.cR,3,e,f)},
hx0(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hd(s,s,A.c4,0,A.dV,854,s,0,3,s,A.c4,480,!1)
C.xt(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.ks(q,!0,A.d6,new B.qp(v),s,A.cR,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.ks(q,!0,A.d6,new B.qp(u),s,A.cR,1.1,v,v,0,853)}B.ix(q,!0,C.fs(r),0,479,0,70)
B.ix(q,!0,C.fs(r),0,479,798,853)
for(t=0;t<5;++t)C.hx_(q,70+t*85,48,4292128567)
C.bvQ(q,48,78,384,712,d)
C.bwF(q,48,78,384,712,d,e)
C.ra(q,d)
C.ke(q,48,78,384,712,4291404327,1.6)
return q},
hBa(d,e){var w,v,u,t=null,s=4279970378,r=B.hd(t,t,A.c4,0,A.dV,854,t,0,3,t,A.c4,480,!1)
B.ix(r,!0,C.fs(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kr(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kM(r,!0,A.d6,new B.qp(u),t,A.cR,1,v,w)}C.bvQ(r,40,40,400,774,d)
C.bwF(r,40,40,400,774,d,e)
C.ra(r,d)
C.ke(r,40,40,400,774,4291058750,2)
C.ke(r,48,48,384,758,s,0.8)
return r},
kB:function kB(d,e){this.a=d
this.b=e},
fjg:function fjg(d){this.a=d},
fjf:function fjf(d){this.a=d},
eZ_:function eZ_(d){this.a=d},
fjU(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hxs(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fDY(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.nZ(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aC(0,Ae.aej(A.a.al(d,s,r+1)),t)
v=x.f.b(w)?B.Z(w,x.N,x.z):t
return v}catch(u){return t}},
acS(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$acS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ux(null,""),$async$acS)
case 3:n=g
if(A.a.i(n).length===0)throw B.O("AI is not available right now. Please try again later.")
t=B.mE(n)
if(e==null)s=A.h4
else{r=C.hxs(e)
s=B.a([new B.YO(A.cM.gcq().aE(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qh(t,d,s,E.Dn),$async$acS)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.O(q!=null&&B.Jg(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$acS,v)},
byd(d){return C.hJS(d)},
hJS(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Q.aj(d.ad(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.acS(r,null),$async$byd)
case 7:q=f
p=C.fDY(q)
if(p==null){u=d
w=1
break}o=d.ayF(p)
if(o.r.length===0||A.d.aF(o.r," ").length<A.d.aF(d.r," ").length*0.5){u=d
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
return B.i($async$byd,v)},
fZa(d){var w,v=F.fGg(d)
v=B.aI(v,"book","newspaper")
if(F.a_S(d)!=="sw"){w=B.ad("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fnP(d,e,f,g){return C.hLJ(d,e,f,g)},
hLJ(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fnP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fjU(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h1y()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.acS('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.fZa(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fnP)
case 3:r=m.fDY(i)
if(r==null)throw B.O(y.S)
q=new C.yo(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").ayF(r)
t=q.r
if(t.length===0)throw B.O("The AI did not write a story. Try again.")
s=n+" "+A.d.aF(t," ")
if(F.a_S(s)!=="sw"){p=B.ad("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a_S(A.d.aF(t," "))==="sw"?C.byd(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnP,v)},
bxL(d,e,f,g,h){return C.hHy(d,e,f,g,h)},
hHy(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bxL=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fT(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aF(l,"\n")
l=C.h1y()
k=A.Q.aj(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.acS('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.fZa(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bxL)
case 3:p=j.fDY(a0)
if(p==null)throw B.O(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cs(o)){n=d.ayF(B.Z(o,x.N,x.z))
m=A.Q.aj(n.ad(),null)!==A.Q.aj(d.ad(),null)}else{n=d
m=!1}w=m&&F.a_S(A.d.aF(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byd(n),$async$bxL)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5C(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxL,v)},
a5C:function a5C(d,e,f){this.a=d
this.b=e
this.c=f},
hOi(d,e){return B.a7(d,!1).cr(B.eH(new C.fud(e),!0,null,x.H))},
fud:function fud(d){this.a=d},
TH:function TH(d,e){this.c=d
this.a=e},
aAW:function aAW(d,e,f,g,h,i,j,k){var _=this
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
e4E:function e4E(d){this.a=d},
e4D:function e4D(){},
e4F:function e4F(d){this.a=d},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4G:function e4G(){},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4n:function e4n(d){this.a=d},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4p:function e4p(d){this.a=d},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4l:function e4l(d){this.a=d},
e4m:function e4m(d){this.a=d},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4e:function e4e(d){this.a=d},
e4f:function e4f(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4w:function e4w(d){this.a=d},
e4u:function e4u(d){this.a=d},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4y:function e4y(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4z:function e4z(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4B:function e4B(d){this.a=d},
e4d:function e4d(d,e){this.a=d
this.b=e},
fiR(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fiR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fWP){w=1
break}r=new C.fiS()
t=4
q=x.s
w=7
return B.b(B.iz(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fiR)
case 7:$.fWP=!0
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
return B.i($async$fiR,v)},
by4(d){return A.Fc[B.mu(d)-1]+", "+A.pe[B.bB(d)-1]+" "+B.bL(d)+", "+B.bw(d)},
hAh(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cXM[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fGF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fl(d[w],B.ad("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a5(v,new C.fhb(),B.T(v).k("a5<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.J)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fhd(j,h)
n=new C.fhc(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ak(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iK(o.$1(l)))
j.a+=l}return u},
fDI(d,e){var w=new C.eYB()
return A.d.cI(e,0,new C.eYz(w))>=A.d.cI(d,0,new C.eYA(w))},
fU4(d){var w,v,u=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v))
u.N(new B.bj(46,0))
w=d.a
u.N(new B.av(w,0))
v=d.b
u.N(new B.av(w,v-46))
u.N(new B.av(w-46,v))
u.N(new B.av(0,v))
u.N(new B.av(0,46))
u.N(new B.bW())
return u},
yo:function yo(d,e,f,g,h,i,j,k,l,m){var _=this
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
c6S:function c6S(d){this.a=d},
c6Q:function c6Q(){},
c6R:function c6R(){},
rC:function rC(d,e){this.a=d
this.b=e},
Ae:function Ae(d,e){this.a=d
this.b=e},
kY:function kY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fiS:function fiS(){},
fhb:function fhb(){},
fhd:function fhd(d,e){this.a=d
this.b=e},
fhc:function fhc(d,e,f){this.a=d
this.b=e
this.c=f},
eYB:function eYB(){},
eYC:function eYC(){},
eYz:function eYz(d){this.a=d},
eYA:function eYA(d){this.a=d},
aY7:function aY7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6T:function c6T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6U:function c6U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6V:function c6V(d){this.a=d},
b8v:function b8v(d){this.a=d},
b8u:function b8u(d,e){this.b=d
this.a=e},
bpM:function bpM(d){this.a=d},
b53:function b53(d,e){this.b=d
this.a=e},
bni:function bni(d,e){this.b=d
this.a=e},
h3s(d,e){return B.a7(d,!1).cr(B.eH(new C.fug(e,null),!0,null,x.E))},
fug:function fug(d,e){this.a=d
this.b=e},
TK:function TK(d,e,f){this.c=d
this.d=e
this.a=f},
aB_:function aB_(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e5P:function e5P(){},
e5Q:function e5Q(d){this.a=d},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5I:function e5I(d,e,f){this.a=d
this.b=e
this.c=f},
e5E:function e5E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5M:function e5M(d){this.a=d},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5N:function e5N(d,e){this.a=d
this.b=e},
b81:function b81(d,e,f){this.b=d
this.c=e
this.a=f},
hOo(d){return B.a7(d,!1).cr(B.eH(new C.fuw(),!0,null,x.I))},
bvB(d,e){var w,v,u,t,s,r,q=B.bT(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fF4(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fuw:function fuw(){},
YH:function YH(d){this.a=d},
o4:function o4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCh:function aCh(d,e,f,g,h,i,j,k,l){var _=this
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
_.aA=_.aK=_.az=_.aq=_.Y=_.b1=_.bc=_.y2=0
_.aZ=null
_.aW=0.25
_.b6=null
_.bE=0.5
_.aM=1
_.ci=_.bQ=_.bg=0
_.cT=_.cQ=!1
_.c=_.a=null},
eCo:function eCo(d){this.a=d},
eBg:function eBg(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBO:function eBO(d){this.a=d},
eB_:function eB_(d){this.a=d},
eB0:function eB0(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eBx:function eBx(d,e){this.a=d
this.b=e},
eBy:function eBy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBK:function eBK(d,e,f){this.a=d
this.b=e
this.c=f},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBL:function eBL(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBN:function eBN(d,e,f){this.a=d
this.b=e
this.c=f},
eBM:function eBM(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d){this.a=d},
eAR:function eAR(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAP:function eAP(){},
eAT:function eAT(d,e){this.a=d
this.b=e},
eAO:function eAO(d,e){this.a=d
this.b=e},
eAV:function eAV(){},
eAU:function eAU(d,e){this.a=d
this.b=e},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAK:function eAK(d,e){this.a=d
this.b=e},
eAW:function eAW(d){this.a=d},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAX:function eAX(d){this.a=d},
eAL:function eAL(d,e){this.a=d
this.b=e},
eCd:function eCd(d,e){this.a=d
this.b=e},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCm:function eCm(){},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCc:function eCc(d,e){this.a=d
this.b=e},
eCf:function eCf(d,e){this.a=d
this.b=e},
eCb:function eCb(d,e){this.a=d
this.b=e},
eCg:function eCg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCa:function eCa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d,e){this.a=d
this.b=e},
eCj:function eCj(d){this.a=d},
eC9:function eC9(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBW:function eBW(d,e){this.a=d
this.b=e},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d){this.a=d},
eC1:function eC1(d){this.a=d},
eBV:function eBV(d){this.a=d},
eC2:function eC2(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC5:function eC5(d){this.a=d},
eBU:function eBU(d){this.a=d},
eC6:function eC6(d){this.a=d},
eBT:function eBT(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eBS:function eBS(d,e){this.a=d
this.b=e},
eC8:function eC8(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC0:function eC0(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBD:function eBD(d){this.a=d},
eBt:function eBt(d){this.a=d},
eBs:function eBs(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBr:function eBr(d){this.a=d},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e){this.a=d
this.b=e},
eB7:function eB7(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d){this.a=d},
eBa:function eBa(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBd:function eBd(d){this.a=d},
eBe:function eBe(d){this.a=d},
eBf:function eBf(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAw:function eAw(d){this.a=d},
eAx:function eAx(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAy:function eAy(d){this.a=d},
eAz:function eAz(d){this.a=d},
eB1:function eB1(d){this.a=d},
eB2:function eB2(d){this.a=d},
eB3:function eB3(d){this.a=d},
eB4:function eB4(d){this.a=d},
eB5:function eB5(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAB:function eAB(d){this.a=d},
eAJ:function eAJ(d){this.a=d},
eAA:function eAA(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBo:function eBo(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBm:function eBm(d,e){this.a=d
this.b=e},
eBh:function eBh(d,e){this.a=d
this.b=e},
eBn:function eBn(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBG:function eBG(d,e,f){this.a=d
this.b=e
this.c=f},
eBF:function eBF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBP:function eBP(d,e){this.a=d
this.b=e},
eB6:function eB6(d){this.a=d},
eCn:function eCn(d){this.a=d},
bbx:function bbx(d,e){this.b=d
this.a=e},
hK2(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hK3(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).kr(0,d),m=B.z(n,B.a2(n).k("F.E"))
if(m.length===0)return d
w=new B.f4("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.al(d,v,n)
p=m[r].b
p=A.a.al(d,n,p.index+p[0].length)
n=B.ad("[*~^]",!0,!1,!1,!1)
o=B.aI(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.aU(d,v)
return n.charCodeAt(0)==0?n:n},
bwb(){var w=$.bvj,v=$.Ou
$.Ou=v+1
return w+"_"+v},
i_(d,e,f,g,h,i,j){return C.eh(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a1,"",h,C.bwb(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cb,D.eQ,g,e,f)},
nu(d,e,f,g){var w=f*9
return C.i_(D.ex,d-f/2,e-w/32,f,w/16,g,0)},
huj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvj
p=$.Ou
$.Ou=p+1
w.push(new C.ex(q+"_"+p,D.eQ,0,r,1,0.0016,"",24,A.a1,A.bg,A.az,k,A.bf,null,D.b8,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvj
p=$.Ou
$.Ou=p+1
w.push(new C.ex(q+"_"+p,D.eQ,o,0,0.004,1,"",24,A.a1,A.bg,A.az,k,A.bf,null,D.b8,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}w.push(C.nu(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nu(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i_(D.b8,0.08,0.08,0.5,0.003,v,0),C.i_(D.b8,0.58,0.08,0.004,0.06,v,0),C.i_(D.b8,0.58,0.14,0.34,0.003,v,0),C.i_(D.b8,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i_(D.b8,0.08,0.8,0.004,0.14,t,0),C.i_(D.b8,0.08,0.94,0.6,0.003,t,0),C.nu(0.58,0.08,0.05,e),C.nu(0.92,0.22,0.05,e),C.nu(0.08,0.8,0.05,f),C.nu(0.68,0.94,0.05,f),C.nu(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i_(D.kF,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i_(D.kF,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i_(D.kF,0.7,0.8,0.22,0.12,w|1140850688,0),C.i_(D.kF,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nu(0.5,0.5,1.5,w|335544320),C.nu(0.5,0.5,1.15,w|402653184),C.nu(0.5,0.5,0.8,v|436207616),C.nu(0.95,0.05,0.4,v|855638016),C.nu(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nu(0.85,0.08,0.7,w|1140850688),C.nu(0.1,0.35,0.5,v|855638016),C.nu(0.9,0.62,0.55,v|771751936),C.nu(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i_(D.b8,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i_(D.b8,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i_(D.b8,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i_(D.b8,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nu(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nu(0.5,0.2,0.65,(w|3422552064)>>>0),C.nu(0.5,0.2,0.95,w|855638016),C.i_(D.b8,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i_(D.b8,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i_(D.jl,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i_(D.jl,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i_(D.jl,0.15,0.86,0.6,0.14,1712265002,0),C.nu(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cC1[n]
u=A.o.J(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvj
l=$.Ou
$.Ou=l+1
w.push(new C.ex(m+"_"+l,D.eQ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a1,A.bg,A.az,k,A.bf,null,D.ex,q,q,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}w.push(C.nu(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i_(D.jl,0.35,-0.1,0.3,0.62,w|855638016,0),C.i_(D.jl,0.05,-0.1,0.3,0.55,v,-0.5),C.i_(D.jl,0.65,-0.1,0.3,0.55,v,0.5),C.nu(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i_(D.b8,0.06,0.04,0.88,0.002,e,0),C.i_(D.b8,0.06,0.96,0.88,0.002,e,0),C.i_(D.b8,0.06,0.04,0.004,0.92,e,0),C.i_(D.b8,0.936,0.04,0.004,0.92,e,0),C.i_(D.b8,0.09,0.07,0.82,0.001,w,0),C.i_(D.b8,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i_(D.jm,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i_(D.jm,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i_(D.jm,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i_(D.b8,0,0,0.3,0.09,w|1140850688,0),C.i_(D.b8,0.7,0.9,0.3,0.1,v|1426063360,0),C.i_(D.b8,0.82,0.04,0.12,0.07,w|771751936,0),C.i_(D.b8,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i_(D.ex,0.62,0.02,0.5,0.16,v,0.6),C.i_(D.ex,0.78,0.12,0.4,0.12,u,0.9),C.i_(D.ex,-0.12,0.8,0.5,0.16,u,-0.6),C.i_(D.ex,-0.05,0.9,0.4,0.12,v,-0.9),C.nu(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i_(D.b8,0.09,0.12,0.16,0.006,e,0),C.i_(D.b8,0.05,0.03,0.9,0.001,w,0),C.i_(D.b8,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hGC(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvj=j
$.Ou=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fez()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eh(A.bf,!1,n,A.az,"ngmy_quote_background",m,24,A.bg,A.a1,"",1,C.bwb(),g,"","",0,!1,"",0,D.b8,l,2,"",0,0,"",D.cb,D.l4,1,0,0))
if(a9)A.d.v(q,C.huj(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hK2(B.aI(w,p,""))
o=A.a.q(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fey(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cz,A.a1))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a1))
if(a0!=null&&a0.length!==0)q.push(C.eh(A.bf,!1,n,A.az,"ngmy_quote_logo",m,24,A.bg,A.a1,a1,a3*9/16,C.bwb(),a0,"","",0,!1,a2,0,D.b8,l,2,"",0,0,"",D.cb,D.l4,a3,a4,a5))
return C.qR(s,r,0,0,q,j+"_slide",D.pm,"","","",D.d8)},
qQ:function qQ(d,e){this.a=d
this.b=e},
lJ:function lJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
fez:function fez(){},
fey:function fey(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hkz(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bg(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c8c(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bO()
w=w.h(d,"request")
return new C.yq(u,t,s,B.t(w==null?"":w))},
fmc(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fmc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fXb){w=1
break}$.fXb=!0
t=4
w=7
return B.b(B.aw(),$async$fmc)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jj(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hkz(m)
if(l!=null)J.ci(n,l)}$.Bo.cg(0,B.t(o.a),new C.fmd(n))}C.fEL()
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
return B.i($async$fmc,v)},
fEL(){var w,v=new B.N(Date.now(),0,!1).bL(-12e8)
for(w=new B.dw($.Bo,$.Bo.r,$.Bo.e);w.C();)J.n_(w.d,new C.f4b(v))
$.Bo.bl($.Bo,new C.f4c())},
aKJ(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aKJ=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aKJ)
case 6:s=a0
m=x.N
l=x.z
r=B.R(m,l)
for(k=new B.cN($.Bo,B.a2($.Bo).k("cN<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.ci(p,B.D(["at",g.a.a4().aa(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.an("String","ngmy_slides_ai_history_v1",A.Q.aj(n,null)),$async$aKJ)
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
return B.i($async$aKJ,v)},
hKE(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fEL()
w=$.Bo.cg(0,d,new C.fmf())
v=Date.now()
u=B.z(e,B.a2(e).k("ck.E"))
J.p_(w,0,new C.yq(new B.N(v,0,!1),f,u,g))
C.aKJ()},
hKB(d){var w,v=$.Bo.h(0,d)
if(v==null||J.ch(v))return
w=J.cB(v)
w.cu(v,0)
if(w.gah(v))$.Bo.W(0,d)
C.aKJ()},
yq:function yq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8c:function c8c(){},
fmd:function fmd(d){this.a=d},
f4b:function f4b(d){this.a=d},
f4c:function f4c(){},
fmf:function fmf(){},
hKG(d){return A.d.dM(D.uO,new C.fmi(d),new C.fmj())},
hkx(d){var w
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
hkw(d){var w
switch(d.a){case 0:w=D.ag3
break
case 1:w=A.x2
break
case 2:w=A.ah5
break
case 3:w=I.afJ
break
case 4:w=A.agx
break
case 5:w=A.l0
break
default:w=null}return w},
hx5(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nn[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nn[w]
if(!B.dm(v.toLowerCase(),t,0))u=B.dm(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hky(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
q=B.R(u,t)
q.m(0,"kind",r.a)
q.m(0,"title",r.b)
q.m(0,"subtitle",r.c)
q.m(0,"bullets",r.d)
q.m(0,"notes",r.e)
q.m(0,"emoji",r.f)
q.m(0,"icon3d",r.r)
q.m(0,"image_query",r.w)
p=r.x
if(p>0)q.m(0,"picture",p)
o.push(q)}return A.Q.aj(B.D(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hKC(d,e,f,g,h){var w=new B.I(D.uO,new C.fmb(),x.eC).aF(0,", "),v=""+d,u=C.h1q(h),t=F.ffY(h),s=C.fYM(g),r=e.q(0,D.G5)?'- New slides get an "emoji".\n':"",q=e.q(0,D.G6)?'- New slides get an "icon3d" from: '+A.d.aF(D.Nn,", ")+".\n":"",p=e.q(0,D.B7)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hKD(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.I(D.uO,new C.fme(),x.eC).aF(0,", "),p=new B.f4("")
if(e.q(0,D.G5)){p.a=s
w=s}else w=""
if(e.q(0,D.G6))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aF(D.Nn,", ")+".\n")
if(e.q(0,D.B7))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h1q(d)
v=F.ffY(d)
u=C.fYM(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aez(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BM(a3,"{"),a5=J.fxf(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JA(a3,a4,a5+1)
try{w=A.Q.aC(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ch(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.fkb(),m).bZ(0,new C.fkc())
k=B.z(l,l.$ti.k("F.E"))}else k=B.a([],n)
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
f=C.hx5(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a5K(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fi(u).b:q))
p=A.d.be(D.uO,new C.fkd(r))?r:a7
o=C.f3q(J.q(w,"logo_frame"),D.Ax)
n=C.f3q(J.q(w,"logo_ring"),D.As)
m=C.f3q(J.q(w,"photo_frame"),D.Ax)
l=C.f3q(J.q(w,"photo_ring"),D.As)
return new C.aoj(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_o(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h0y(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.B8),f7=f6?C.hr9():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f6()
v.dY(f7.w+1)
u=f7.a
t=B.bi(u.b,!0,x.dL)
A.d.fN(t,v)
s=u.c
s=new C.nh("luxe",u.a,A.l0,t,u.e,u.f,B.a([s,u.d,s],x.t),D.d8)
w=s}if(w==null)w=C.hKG(f9.b)
r=g2.q(0,D.a1j)||f6
q=g2.q(0,D.G5)
p=g2.q(0,D.Pc)
o=new C.feD()
n=B.a([],x.g)
m=new C.feG(o,w,r)
l=new C.feF(o,r)
k=new C.feE(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.be(u,new C.feC(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.J(b1,a3.length)]
b4=A.o.J(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.J(b1,5)
b9=D.cDp[b8]
c0=D.cCv[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ech.q(0,b2.a)){c7=b0+1
c5=g8[A.o.J(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.ex,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.ex,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.m8,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pn,500,f2,f0))
c1.push(l.$8$fx$key(D.b8,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.P9
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ex,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kF,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.b8,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.B5
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ex,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.m8,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cz,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pn,500,f2,f0))
d3=D.m7
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ex,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.b8,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ti:D.cb
c1.push(new C.ex(b4,D.a1h,0.64,0.05,0.27,0.9,g1,24,A.a1,A.bg,A.az,4279310375,A.bf,e4,D.b8,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.m7
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ex,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ex,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.m8,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pn,450,f2,f0))
c1.push(l.$8$fx$key(D.b8,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.P9
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ex,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ex,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.b8,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.b8,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aF(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.G3,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.m7}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.d8,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hsL(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.J(b1,b8.length)]}else b8=r?D.cZL[A.o.J(b1,6)]:s
n.push(new C.ln(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Aq(e4,e4,e4,e4,D.B4,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fh1(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fh1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.B7)
n=e.q(0,D.G6)
if(!o&&!n){u=D.a0f
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fh4(o,s[r],n,$.hvU,r).$0())
s=B.R(x.S,x.aH)
m=J
w=3
return B.b(B.iz(t,x.e),$async$fh1)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fh1,v)},
fg0(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fg0=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hKD(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aK5(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fg0)
case 3:u=s.aKq(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fg0,v)},
bxM(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bxM=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.H(0,(q==null?r.a(q):q).b)}C.hKE(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aez(i,"colorful")
t=C.hKC(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aK5(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h4),$async$bxM)
case 3:u=o.aKq(m,f,h,g,D.dD_,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxM,v)},
aK5(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aK5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ux(null,""),$async$aK5)
case 3:n=i
if(A.a.i(n).length===0)throw B.O("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mE(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qh(t,d,g,null),$async$aK5)
case 7:q=i
p=q.b
if(p!=null){o=C.aez(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.O(s!=null&&B.Jg(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aK5,v)},
aKq(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKq=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.B7)||e.q(0,D.G6)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d8(e,x.Q)
t.W(0,D.B7)}w=6
return B.b(C.fh1(d,t),$async$aKq)
case 6:s=k
w=4
break
case 5:s=D.a0f
case 4:t=d.c
w=A.d.be(t,new C.eYw())?7:9
break
case 7:r=$.h2i
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aKq)
case 10:q=k
p=q!=null?A.Q.aj(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h0y(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hky(new C.aoj(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("I<1,n>")
t=B.z(new B.I(m,new C.eYx(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jA<ck.E,n>")
t=B.z(new B.jA(e,new C.eYy(),t),t.k("F.E"))
l.cy=t
l.ay=e.q(0,D.Pc)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKq,v)},
fHn(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_d[v]
if(A.d.q(t,u.b))w.H(0,u)}return w},
hOt(d){return B.c0(A.K,null,new C.fuI(),d,!0,!0,!0,null,!1,!1,x.I)},
hrL(d,e){var w,v=e.toLowerCase()
if(A.a.c5(v,".png"))w="image/png"
else w=A.a.c5(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cM.gcq().aE(d)},
hOs(d,e,f){return B.c0(A.K,null,new C.fuH(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fHo(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fHp(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
f3q(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.be(e,new C.f3r(w))?w:""},
fYM(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h2g(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aez(a1==null?"":a1,a0),a3=C.aez(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a5<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.qD(new B.a5(r,new C.fmk(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("F.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.S(m.b,l.b),new B.S(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.S(j[h],i[h]))
k.push(new B.S(m.e,l.e))
g=B.z(new B.a5(k,new C.fml(),v),r)
A.d.aY(g,new C.fmm())
if(g.length===0)continue
f=new C.fmn(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hKX(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAr
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEV
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEW
return null},
fYn(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bK(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hKH(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nx
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cJ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fYn(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fYn(n,i,v,u))if(n.w>10){f=h+1
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
hKF(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aez(o,"colorful")
if(n==null)throw B.O("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_d[r]
if(q.b===s)w.H(0,q)}}v=C.fHo(e)
u=C.fHp(e)
p=C.h0y(n,D.a0f,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("I<1,n>")
o=B.z(new B.I(o,new C.fmg(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jA<ck.E,n>")
o=B.z(new B.jA(w,new C.fmh(),o),o.k("F.E"))
p.cy=o
p.ay=w.q(0,D.Pc)
return p},
hOf(d,e,f){return B.c0(A.K,null,new C.ftV(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hr9(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f6()
s.dY(t)
w=D.cij[s.aG(10)]
v=new C.e0K(s)
u=x.N
return new C.e0J(w,s.aG(4),J.fi(v.$1$2(D.cHs,1,x.ff)),w.r[s.aG(3)],v.$1$2(D.cVV,2+s.aG(2),u),v.$1$2(D.cPX,2,u),v.$1$2(D.cYs,4,x.fP),t)},
hsL(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f6()
a1.dY(a5.w+a3*13)
w=new C.eV5(a4)
v=new C.eV7(a4,d)
u=new C.eV6(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cJ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fE(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fE(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.J(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.ex,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a_o(a0,52),"lux_spot",a5.vE(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.b8,0,0,1,1,0,"lux_back",a5.vE(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.b8,0,0,1,1,0,"lux_back2",a5.aB0(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.022,0.038,0.956,0.924,0,g,a5.vE(0,f),D.d8,150,C.a_o(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.018,0.032,0.964,0.936,0,g,a5.vE(0,f),D.d8,120,C.a_o(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.d8,260,C.a_o(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.b8,0,0,1,1,0,"lux_filigree",a5.vE(0,"filigree"),D.d8,200))
break
default:a2.push(w.$10$anim$delay(D.b8,0.08,0.06,0.84,0.004,C.a_o(a0,208),"lux_rule",a5.aB0(0,"shimmer",r),D.th,150))
a2.push(w.$10$anim$delay(D.b8,0.08,0.936,0.84,0.004,C.a_o(a0,144),"lux_rule2","",D.G3,220))}l=!A.d.be(a2,new C.eV4())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vE(0,"crest"),350))
else{o=a1.hd()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vE(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_o(r,242)
j=a5.vE(0,"orbit")
i=s===D.b8?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pn,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ex,t-0.007,0.9495,0.014,0.025,C.a_o(r,242),"lux_g2",a5.vE(0,"orbit"),D.pn,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.b8,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fE(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.b8,0,0,1,1,0,"lux_velvet",a5.vE(0,"velvet")))},
nh:function nh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmi:function fmi(d){this.a=d},
fmj:function fmj(){},
v7:function v7(d,e){this.a=d
this.b=e},
a5K:function a5K(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoj:function aoj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fmb:function fmb(){},
fme:function fme(){},
fkb:function fkb(){},
fkc:function fkc(){},
fkd:function fkd(d){this.a=d},
feD:function feD(){},
feG:function feG(d,e,f){this.a=d
this.b=e
this.c=f},
feF:function feF(d,e){this.a=d
this.b=e},
feE:function feE(d,e){this.a=d
this.b=e},
feC:function feC(d){this.a=d},
fh4:function fh4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh2:function fh2(d){this.a=d},
fh3:function fh3(d){this.a=d},
eYw:function eYw(){},
eYx:function eYx(){},
eYy:function eYy(){},
fuI:function fuI(){},
Zc:function Zc(d){this.a=d},
aEb:function aEb(d,e,f,g,h){var _=this
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
eIi:function eIi(d,e,f){this.a=d
this.b=e
this.c=f},
eIj:function eIj(d,e){this.a=d
this.b=e},
eIg:function eIg(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e){this.a=d
this.b=e},
eIf:function eIf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eIa:function eIa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eIe:function eIe(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eId:function eId(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI5:function eI5(d,e){this.a=d
this.b=e},
eIw:function eIw(d){this.a=d},
eIx:function eIx(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIy:function eIy(d){this.a=d},
eIu:function eIu(d){this.a=d},
eIA:function eIA(d){this.a=d},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIB:function eIB(d){this.a=d},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIC:function eIC(d){this.a=d},
eIr:function eIr(d){this.a=d},
eID:function eID(d){this.a=d},
eIq:function eIq(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIp:function eIp(d,e){this.a=d
this.b=e},
eIF:function eIF(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIG:function eIG(d,e){this.a=d
this.b=e},
eIn:function eIn(d,e){this.a=d
this.b=e},
eIH:function eIH(d){this.a=d},
eIz:function eIz(d){this.a=d},
eIm:function eIm(d,e){this.a=d
this.b=e},
eI6:function eI6(d,e,f){this.a=d
this.b=e
this.c=f},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e){this.a=d
this.b=e},
fuH:function fuH(d,e){this.a=d
this.b=e},
Zb:function Zb(d,e,f){this.c=d
this.d=e
this.a=f},
aEa:function aEa(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHV:function eHV(d){this.a=d},
eHW:function eHW(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
f3r:function f3r(d){this.a=d},
aYv:function aYv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAP:function aAP(d,e,f){this.c=d
this.d=e
this.a=f},
bg7:function bg7(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0M:function e0M(d){this.a=d},
e0L:function e0L(){},
bdK:function bdK(d,e){this.b=d
this.a=e},
fmk:function fmk(d){this.a=d},
fml:function fml(){},
fmm:function fmm(){},
fmn:function fmn(d){this.a=d},
aoT:function aoT(d,e){this.a=d
this.b=e},
fmg:function fmg(){},
fmh:function fmh(){},
ftV:function ftV(d,e){this.a=d
this.b=e},
XA:function XA(d,e,f){this.c=d
this.d=e
this.a=f},
ayh:function ayh(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dag:function dag(d){this.a=d},
dah:function dah(d){this.a=d},
dai:function dai(d,e){this.a=d
this.b=e},
dal:function dal(d){this.a=d},
dam:function dam(d,e){this.a=d
this.b=e},
dak:function dak(d,e){this.a=d
this.b=e},
dan:function dan(d){this.a=d},
daj:function daj(d,e){this.a=d
this.b=e},
bon:function bon(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e0J:function e0J(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e0K:function e0K(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV7:function eV7(d,e){this.a=d
this.b=e},
eV6:function eV6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV4:function eV4(){},
aIG:function aIG(){},
fGd(d){var w,v,u
try{w=A.Q.aC(0,d,null)
if(x.f.b(w)){v=B.uY(B.Z(w,x.N,x.z))
return v}}catch(u){}return null},
aYr:function aYr(d,e,f){this.c=d
this.d=e
this.a=f},
bhK:function bhK(d,e){this.c=d
this.a=e},
hH4(d){return A.d.dM(D.F9,new C.ffK(d),new C.ffL())},
hH5(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aU(t,6)
if(w.length===0)return null
v=new B.a5(D.F9,new C.ffM(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.js("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kV:function kV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ffK:function ffK(d){this.a=d},
ffL:function ffL(){},
ffM:function ffM(d){this.a=d},
mr(d,e,f,g,h){return new C.Dg(f,g,d)},
htU(d){var w=d.z,v=B.T(w).k("a5<1>")
w=B.z(new B.a5(w,new C.eX3(),v),v.k("F.E"))
d.z=w
d.x=""},
dp(d,e){var w=$.IH
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dq(d,e,f,g,h,i,j,k,l){return C.eh(A.bf,!1,4279310375,A.az,"",d,24,A.bg,A.a1,"",e,"design_"+C.cx(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cb,D.eQ,j,k,l)},
h0l(d,e){var w
C.htU(d)
w=A.d.dM($.bzI(),new C.fdA(e),new C.fdB())
$.IH=w.a
d.x=w.a;++d.y
try{w.bH(d)}finally{$.IH=""}d.z=B.bi(d.z,!0,x.F)},
Dg:function Dg(d,e,f){this.a=d
this.b=e
this.e=f},
eX3:function eX3(){},
flN:function flN(){},
flO:function flO(){},
flP:function flP(){},
fm_:function fm_(){},
fm4:function fm4(){},
fm5:function fm5(){},
fm6:function fm6(){},
fm7:function fm7(){},
fm8:function fm8(){},
fm9:function fm9(){},
fma:function fma(){},
flQ:function flQ(){},
flR:function flR(){},
flS:function flS(){},
flT:function flT(){},
flU:function flU(){},
flV:function flV(){},
flW:function flW(){},
flX:function flX(){},
flY:function flY(){},
flZ:function flZ(){},
fm0:function fm0(){},
fm1:function fm1(){},
fm2:function fm2(){},
fm3:function fm3(){},
fdA:function fdA(d){this.a=d},
fdB:function fdB(){},
iJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eh(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.b8,4280172719,2,m,n,0,"",o,D.cJ,p,q,r)},
BE(d,e,f,g,h,i,j,k,l){return C.eh(A.bf,!1,4279310375,A.az,"",d,24,A.bg,A.a1,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cb,D.eQ,j,k,l)},
bys(){var w=new B.N(Date.now(),0,!1)
return A.hW[B.bB(w)-1]+" "+B.bL(w)+", "+B.bw(w)},
el:function el(d,e,f){this.a=d
this.b=e
this.c=f},
bvW(d){return new B.iD((A.o.au(d,24)&255)/255,(A.o.au(d,16)&255)/255,(A.o.au(d,8)&255)/255,(d&255)/255)},
hyF(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.akb(A.cw.aE(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hyJ(d){var w=d.r
if(!d.cy)return w
return new B.I(B.a(w.split("\n"),x.s),new C.f3e(),x.dv).aF(0,"\n")},
hyI(d){switch(d.a){case 2:return A.mS
case 1:case 5:return A.emw
default:return A.Qv}},
hyC(d){switch(d.a){case 2:return A.tO
case 1:case 5:return A.Sd
default:return A.a5V}},
hyG(d,e){var w,v=null,u=d.ay,t=A.o.au(u,24),s=A.o.au(d.ch,24),r=(t&255)===0?v:C.bvW(u),q=(s&255)===0?v:C.bvW(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n1(q,p,A.ki)
w=new B.p0(t,t,t,t)}switch(d.ax.a){case 1:return B.lc(v,v,v,new B.kj(r,w,v,A.a77,v),v,v,v,v)
case 4:return u?new B.fG(v,v,v):B.w7(B.lc(v,v,q,v,p+0.4,v,v,v))
default:return B.lc(v,v,v,new B.kj(r,w,B.uD(4),A.hl,v),v,v,v,v)}},
hyE(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eQ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hyC(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hyJ(d)
t=C.bvW(d.Q)
s=d.x.a>=700?A.eb:A.uj
r=d.y===A.cz?A.wD:A.aeB
q=d.z
p=new B.BP(w,l,l,B.f0(u,l,l,l,B.fX(l,t,1===q.a?A.aIK:A.aIJ,l,l,l,l,l,l,A.dl,l,l,v,r,s,l,!0,l,l,l,l),C.hyI(d.as)))
break
case 1:case 4:o=C.hyF(d.at)
n=i===D.l4&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.w7(B.f0(w,l,l,l,B.fX(l,A.qF,l,l,l,l,l,l,l,A.dl,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gd(o,n?A.a73:A.Sz,l,l)
break
case 3:w=new B.n1(A.Gl,1,A.ki)
u=B.uD(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lc(A.tO,B.f0(t,l,l,l,B.fX(l,D.dNn,l,l,l,l,l,l,l,A.dl,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mS),l,new B.kj(E.aBq,new B.p0(w,w,w,w),u,A.hl,l),l,l,l,l)
break
case 2:p=C.hyG(d,e)
break
case 5:p=C.hyD(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fTh(-w,p)
w=i===D.cJ
if(w){m=A.o.au(d.Q,24)&255
if(m<255)p=new B.apC(m/255,p)}if(w)return new F.ve(k,l,j,l,new B.Qg(new B.ki(g,g,f,1/0),p))
if(i===D.kE){i=new B.n1(A.Gl,1,A.ki)
i=B.lc(A.tO,p,l,new B.kj(A.oj,new B.p0(i,i,i,i),B.uD(4),A.hl,l),l,l,D.bj2,l)}else i=p
return new F.ve(k,l,j,l,new B.fG(g,f,i))},
hyH(d,e,f,g){var w,v=null,u=C.bvW(d.e),t=d.f
t=B.a([F.fRW(t!=null?B.lc(v,v,v,new B.kj(v,v,v,A.hl,new B.aSZ(E.Se,A.a5Q,B.a([u,C.bvW(t)],x.cR),v)),v,v,v,v):B.lc(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.I(w,new C.f3d(f,g),B.T(w).k("I<1,f5>")))
return F.ckI(t)},
fHr(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fHr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a21(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.Uq(A.uY,A.Gi,D.bk5,null,null,null,!1,null)
o=new B.Aw(o,new C.fmt(607,787,p,d))
o.L2(n,null)
r.push(o)}u=n.jz(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHr,v)},
hyD(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fGd(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagF()
if(h==null)h=A.arI
j=B.rP(4279308564)
w=B.uD(18)
v=new B.n1(B.rP(4287531653),3,A.ki)
u=i.length===0?"My links":i
u=B.a([B.w7(B.f0(u,m,m,m,B.fX(m,A.oj,m,m,m,m,m,m,m,A.dl,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.w7(B.f0(A.a.i(l.c),m,m,m,D.etk,m)))
u.push(new B.fG(m,8,m))
for(t=B.dc(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bR(t,t.gG(0),s.k("bR<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rP(4280690220)
o=new B.a6Y(8,8)
n=A.a.i(r.b)
u.push(new B.ni(D.bdo,new C.atM(new C.afA(q),B.lc(m,B.f0(n.length===0?A.a.i(r.c):n,m,m,m,D.evt,A.mS),m,new B.kj(p,m,new B.ag0(o,o,o,o),A.hl,m),m,m,D.bjq,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.w7(B.f0(k,m,m,m,D.euN,m))
u.push(new C.atM(C.h8Q(k),t))}return B.lc(m,B.xL(u,A.Jl,A.l3),m,new B.kj(j,new B.p0(v,v,v,v),w,A.hl,m),m,m,D.bec,m)},
f3e:function f3e(){},
f3d:function f3d(d,e){this.a=d
this.b=e},
fmt:function fmt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aem(d){var w,v
for(w=0;w<32;++w){v=D.F0[w]
if(v.a===d)return v}return null},
fVS(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aE(A.a.aU(d,u+1))
return w}catch(v){return null}},
cM(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h3o(d,e){return B.a7(d,!1).cr(B.eH(new C.fsy(e),!0,null,x.fB))},
h3n(d,e){return B.c0(A.K,null,new C.fsx(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iM:function iM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D7:function D7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LB:function LB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfu:function bfu(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
dKv:function dKv(d){this.a=d},
dKu:function dKu(d,e,f){this.a=d
this.b=e
this.c=f},
dKt:function dKt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmY:function bmY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eH5:function eH5(d,e){this.a=d
this.b=e},
baD:function baD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWl:function aWl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2Q:function c2Q(){},
c2R:function c2R(d){this.a=d},
c2S:function c2S(d,e,f){this.a=d
this.b=e
this.c=f},
c2T:function c2T(d,e,f){this.a=d
this.b=e
this.c=f},
fsy:function fsy(d){this.a=d},
X8:function X8(d,e){this.c=d
this.a=e},
awI:function awI(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d_L:function d_L(d,e,f){this.a=d
this.b=e
this.c=f},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_O:function d_O(d,e){this.a=d
this.b=e},
d_T:function d_T(d){this.a=d},
d_N:function d_N(d){this.a=d},
d_U:function d_U(d){this.a=d},
d_M:function d_M(d,e){this.a=d
this.b=e},
d_V:function d_V(d,e){this.a=d
this.b=e},
fsx:function fsx(d){this.a=d},
fsw:function fsw(d){this.a=d},
fsv:function fsv(d,e,f){this.a=d
this.b=e
this.c=f},
fsu:function fsu(d,e){this.a=d
this.b=e},
aI9:function aI9(){},
hOr(d){return B.c0(A.K,null,new C.fuG(),d,!0,!0,!0,null,!1,!1,x.N)},
fuG:function fuG(){},
Xt:function Xt(d){this.a=d},
bc6:function bc6(d){this.d=d
this.c=this.a=null},
d6g:function d6g(d){this.a=d},
d6h:function d6h(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
hvg(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.aX(w)}return D.w5},
hIW(d){var w,v=A.d.gI(d.split("@"))
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
hIV(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hvg(d)
switch(q){case"shimmer":return B.nm(A.a6g,g,new C.fj9(p,A.k.J(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.bbu(e,f,p,r),A.as),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.e4(A.B,B.d4(C.fyx(g,B.a2S(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.bbb(e,p,r),A.as),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d4(B.et(A.B,e*0.5,B.e4(A.B,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.de()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.me(Math.sin(e)*0.3)
return B.dO(B.fm(A.B,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b2(r,r,r,new C.bjV(e,f,p,r),A.as),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b2(r,r,r,new C.b6a(e,f,p,r),A.as),!0,r),g],x.p),r)
case"aurora":return new B.am(A.V,r,A.aX,A.q,B.a([B.e8(B.b2(r,r,r,new C.b5N(e,f,p,r),A.as),!0,r),g],x.p),r)
case"velvet":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.bqH(e,p,r),A.as),!0,r)],x.p),r)
case"sparkle":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.bnL(e,f,p,r),A.as),!0,r)],x.p),r)
case"sheen":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.bmU(e,p,r),A.as),!0,r)],x.p),r)
case"filigree":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e8(B.b2(r,r,r,new C.baw(e,p,r),A.as),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.B,r,A.a9,A.h,B.a([B.bU(0,B.e8(B.e4(A.B,B.bQ(r,new B.o(r,r,r,r,r,new B.bS(A.B,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.b7),1.6+s*0.15,r,r),!0,r),0,0,0),B.et(A.B,s*0.06,B.e4(A.B,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fj9:function fj9(d,e){this.a=d
this.b=e},
bbu:function bbu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbb:function bbb(d,e,f){this.b=d
this.c=e
this.a=f},
bjV:function bjV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6a:function b6a(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b5N:function b5N(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqH:function bqH(d,e,f){this.b=d
this.c=e
this.a=f},
bnL:function bnL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmU:function bmU(d,e,f){this.b=d
this.c=e
this.a=f},
baw:function baw(d,e,f){this.b=d
this.d=e
this.a=f},
d_s:function d_s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wE:function wE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fjc(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kE},
hJ0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fjd())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gI(B.aMT(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hJ_(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
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
ae_(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ae_=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a5<1>")
e=B.z(new B.a5(a4,new C.fbC(),f),f.k("F.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(A.dw,null,new C.fbD(e),d,!0,!0,!1,A.l5,!1,!1,x.N),$async$ae_)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fI1(d),$async$ae_)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Jq(d,"Search states\u2026","",A.jG,"Choose state"),$async$ae_)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fGZ(s)
if(p==null)p=A.d.gI(D.O6)
f=C.cx()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cx()
m=p.e
l=C.fje(p.d)
k=x.u
j=B.a([C.eh(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a1,"",1,C.cx(),l,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l4,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Br(i,0.016,D.kF,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Br(0,0.058,D.ex,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Br(0,0.058,D.ex,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.IS("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.IS("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a1,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fE4(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvp("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a__("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a__("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a__("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a__("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvp("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Br(m,0.082,D.b8,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cx()
k.push(C.eh(A.bf,!1,i,A.az,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bg,A.cp,"",0.074,g,null,"","",0,!1,"",0,D.b8,4280172719,2,y.O,0,0,"",D.cb,D.cJ,0.78,0.11,0.388))
A.d.v(k,C.fE4(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvp("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fXN("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fXN("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a__("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a__("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvo("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvo("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvp("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.IS("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.IS("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvo("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvo("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvp("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a__("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvo("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a__("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fE4(0.22,0.83,0.56,4291404327,i),h)
h.push(C.IS("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.IS("Nakala ya Hati",A.L,4291404327,9,A.a1,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Aq(null,null,null,null,D.nx,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qR(m,null,0,0,j,n,D.pm,"","","Hati ya Ndoa",D.d8)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ae_,v)},
fjd:function fjd(){},
fbC:function fbC(){},
fbD:function fbD(d){this.a=d},
fbA:function fbA(d){this.a=d},
fbB:function fbB(d){this.a=d},
hya(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hy9(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mc
case"lineThrough":return A.ye
default:return A.az}},
eh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ex(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
fZO(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NT[w]
if(v.b===u)return v}return D.d8},
huG(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.czz[w]
if(v.b===u)return v}return D.cJ},
hAP(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cWv[w]
if(v.b===u)return v}return D.b8},
qR(d,e,f,g,h,i,j,k,l,m,n){return new C.ln(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fQG(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hwy(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.M(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.M(s)
r=C.fZO(d.h(0,"transition"))
q=B.aQ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aQ(d.h(0,"designRevision"))
o=o==null?m:A.k.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d1(n,x.f)
n=B.cy(n,new C.c89(),n.$ti.k("F.E"),x.F)
n=B.z(n,B.a2(n).k("F.E"))}return C.qR(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hwy(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajJ[w]
if(v.b===u)return v}return D.m7},
Aq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.N(Date.now(),0,!1):a4
return new C.hR(p,t,a1,h,i,w,a0==null?B.a([C.qR(4294967295,null,0,0,null,C.cx(),D.pm,"","","",D.d8)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
TS(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.ht_(a6.h(0,"aspectRatio"))
t=B.aQ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bg(J.k(s==null?"":s))
if(s==null)s=new B.N(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kg(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kg(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aQ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aQ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b4(f,new C.c7X(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c7Y(),x.N)
e=B.z(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d1(g,x.f)
g=B.cy(g,new C.c7Z(),g.$ti.k("F.E"),x.bt)
g=B.z(g,B.a2(g).k("F.E"))}return C.Aq(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qR(4294967295,a3,0,0,a3,C.cx(),D.pm,"","","",D.d8)],x.g):g,v,p,o,s)},
kg(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
ht_(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cXg[w]
if(v.b===u)return v}return D.B4},
cx(){var w=Date.now(),v=$.iO
$.iO=v+1
return""+1000*w+"_"+v},
c8q(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.B5){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cx()
v=C.eh(A.L,!1,f.d.l(),A.az,"",n,40,A.bg,A.u,"",0.2,v,p,"","",0,!1,"",0,D.b8,m,2,o,0,0,"",D.cb,D.cJ,0.84,0.08,0.3)
u=C.cx()
A.d.v(w,B.a([v,C.eh(A.L,!1,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.12,u,p,"","",0,!1,"",0,D.b8,m,2,"Click to add subtitle",0,0,"",D.cb,D.cJ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cx()
v=C.eh(A.bf,!1,f.d.l(),A.az,"",n,32,A.bg,A.u,"",0.14,v,p,"","",0,!1,"",0,D.b8,m,2,o,0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eh(A.bf,!0,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.68,u,p,"","",0,!1,"",0,D.b8,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cb,D.cJ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cx()
v=C.eh(A.bf,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b8,m,2,"Two Column Slide",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
t=f.e
u=C.eh(A.bf,!0,t.l(),A.az,"",n,18,A.bg,A.a1,"",0.7,u,p,"","",0,!1,"",0,D.b8,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cb,D.cJ,0.42,0.06,0.22)
s=C.cx()
A.d.v(w,B.a([v,u,C.eh(A.bf,!0,t.l(),A.az,"",n,18,A.bg,A.a1,"",0.7,s,p,"","",0,!1,"",0,D.b8,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cb,D.cJ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.H(d.z,C.eh(A.L,!1,4294967295,A.az,"",n,42,A.bg,A.u,"",0.2,C.cx(),p,"","",0,!1,"",0,D.b8,m,2,"Section Header",0,0,"",D.cb,D.cJ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cx()
v=C.eh(A.bf,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b8,m,2,"Compare",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
t=f.c
u=C.eh(A.bf,!1,l,A.az,"",t.j(0.12).l(),24,A.bg,A.a1,"",0.68,u,p,"","",0,!1,"",0,D.b8,t.l(),2,"",0,0,"",D.cb,D.eQ,0.42,0.06,0.22)
s=C.cx()
r=f.e
s=C.eh(A.bf,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,s,p,"","",0,!1,"",0,D.b8,m,2,"Option A",0,0,"",D.cb,D.cJ,0.38,0.08,0.26)
q=C.cx()
t=C.eh(A.bf,!1,l,A.az,"",t.j(0.06).l(),24,A.bg,A.a1,"",0.68,q,p,"","",0,!1,"",0,D.b8,t.j(0.5).l(),2,"",0,0,"",D.cb,D.eQ,0.42,0.52,0.22)
q=C.cx()
A.d.v(w,B.a([v,u,s,t,C.eh(A.bf,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,q,p,"","",0,!1,"",0,D.b8,m,2,"Option B",0,0,"",D.cb,D.cJ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cx()
v=C.eh(A.L,!1,f.d.l(),A.az,"",n,36,A.bg,A.u,"",0.35,v,p,"","",0,!1,"",0,D.b8,m,2,"TERM / QUESTION",0,0,"",D.cb,D.cJ,0.8,0.1,0.12)
u=C.cx()
A.d.v(w,B.a([v,C.eh(A.L,!1,f.e.l(),A.az,"",n,22,A.bg,A.cp,"",0.35,u,p,"","",0,!1,"",0,D.b8,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cb,D.cJ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cx()
v=C.eh(A.bf,!1,f.d.l(),A.az,"",n,28,A.bg,A.u,"",0.18,v,p,"","",0,!1,"",0,D.b8,m,2,"Quiz Question",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eh(A.bf,!1,f.e.l(),A.az,"",n,20,A.bg,A.a1,"",0.62,u,p,"","",0,!1,"",0,D.b8,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cb,D.cJ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cx()
v=C.eh(A.bf,!1,f.d.l(),A.az,"",n,26,A.bg,A.u,"",0.1,v,p,"","",0,!1,"",0,D.b8,m,2,"Worksheet / Assignment",0,0,"",D.cb,D.cJ,0.88,0.06,0.04)
u=C.cx()
A.d.v(w,B.a([v,C.eh(A.bf,!1,f.e.l(),A.az,"",n,18,A.bg,A.a1,"",0.78,u,p,"","",0,!1,"",0,D.b8,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cb,D.cJ,0.88,0.06,0.16)],x.u))
break}},
hkI(d){return A.d.dM(D.ZT,new C.c8r(d),new C.c8s())},
hkF(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ci(v,C.TS(B.Z(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fAD(d,e){var w,v,u,t=B.R(x.N,x.I),s=new C.c8m(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("bf<2>")
u=B.z(new B.bf(t,w),w.k("F.E"))
A.d.aY(u,new C.c8l())
return u},
fQJ(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c8h()
if(u!==w)return u>=w?d:e
return v.$1(d).c9(v.$1(e))?d:e},
aok(d){return C.hkD(d)},
hkD(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aok=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c8k()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0c(m),$async$aok)
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
return B.b(B.aw(),$async$aok)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aR(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.fQI.h(0,m))
n=C.fAD(C.fAD(j,r),o)
if(n.length===0){u=C.fQJ(C.fQJ(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aok,v)},
c8g(d){return C.hkC(d)},
hkC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c8g=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c8g)
case 7:r=f
q=r.rm("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.km(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aZ(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c8g,v)},
aYx(d,e){return C.hkE(d,e)},
hkE(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYx=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aYx)
case 6:s=g
q=s.rm("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.H(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.Jz(r,J.aa(r)-500):r
w=7
return B.b(s.an("StringList","ngmy_slides_deleted_"+p,o),$async$aYx)
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
return B.i($async$aYx,v)},
TT(d,e){return C.hkG(d,e)},
hkG(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$TT=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fQH.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aok(a3),$async$TT)
case 5:p=a6
case 4:w=6
return B.b(C.c8g(a3),$async$TT)
case 6:o=a6
n=B.R(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbn())k=f===g.gbn()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("bf<2>")
l=m.k("a5<F.E>")
e=B.z(new B.a5(new B.bf(n,m),new C.c8n(o),l),l.k("F.E"))
A.d.aY(e,new C.c8o())
$.fQH.m(0,a0,e)
n=B.T(e).k("I<1,a0<n,@>>")
n=B.z(new B.I(e,new C.c8p(),n),n.k("ai.E"))
r=A.Q.aj(n,null)
$.fQI.m(0,a0,r)
t=8
w=11
return B.b(B.aeN(a0,r),$async$TT)
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
return B.b(B.aw(),$async$TT)
case 16:q=a6
w=17
return B.b(q.an("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$TT)
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
return B.i($async$TT,v)},
H3:function H3(d,e){this.a=d
this.b=e},
aoi:function aoi(d,e){this.a=d
this.b=e},
tZ:function tZ(d,e){this.a=d
this.b=e},
m4:function m4(d,e){this.a=d
this.b=e},
hm:function hm(d,e){this.a=d
this.b=e},
ex:function ex(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ln:function ln(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c8a:function c8a(){},
c8b:function c8b(){},
c89:function c89(){},
hR:function hR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c8_:function c8_(){},
c80:function c80(){},
c7X:function c7X(){},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
js:function js(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c8r:function c8r(d){this.a=d},
c8s:function c8s(){},
c8m:function c8m(d){this.a=d},
c8l:function c8l(){},
c8h:function c8h(){},
c8i:function c8i(){},
c8j:function c8j(){},
c8k:function c8k(){},
c8n:function c8n(d){this.a=d},
c8o:function c8o(){},
c8p:function c8p(){},
hJb(d,e){var w=x.N,v=B.R(w,x.F)
w=new C.fjM(e,v,d,B.aZ(w))
w.$1(new C.fjI())
w.$1(new C.fjJ())
w.$1(new C.fjK())
w.$1(new C.fjL())
return v},
fjM:function fjM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjI:function fjI(){},
fjJ:function fjJ(){},
fjK:function fjK(){},
fjL:function fjL(){},
aYu:function aYu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c85:function c85(d){this.a=d},
c84:function c84(){},
c86:function c86(){},
c87:function c87(d,e){this.a=d
this.b=e},
c88:function c88(d){this.a=d},
alA:function alA(d,e){this.c=d
this.a=e},
bfh:function bfh(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dxQ:function dxQ(){},
aHW:function aHW(){},
c8d(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c8d=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.ejU)
u=!1
w=1
break}u=B.kD(!1,d,t,!1,null,A.a1l,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8d,v)},
hkA(d){var w=A.d.bf(D.F9,new C.c8e(d))
if(w<0)return!0
return w>=4},
hkB(d){var w=A.d.bf($.bzI(),new C.c8f(d))
if(w<0)return!0
return w>=5},
c8e:function c8e(d){this.a=d},
c8f:function c8f(d){this.a=d},
hKR(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xD()
$.pI().p6(t,new C.fmA(s),!0)
u=B.a([B.Cv(v,A.pq,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.etN,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nm,v,v,v),v,v,4,v,4,v))}return new B.am(A.V,v,A.aX,A.q,u,v)},
fmA:function fmA(d){this.a=d},
hKs(){return C.fHk()},
hHt(){return C.bxJ()},
hJs(){return C.fHb()},
aM_(d,e,f){var w=0,v=B.j(x.H),u
var $async$aM_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.flG(d,f),$async$aM_)
case 5:w=1
break
case 4:if(d.e!=null)d.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aM_,v)},
flG(d,e){var w=0,v=B.j(x.H),u
var $async$flG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bvX
if(u==null)u=e+".pdf"
w=2
return B.b(B.c0(A.K,null,new C.flH(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$flG)
case 2:return B.h(null,v)}})
return B.i($async$flG,v)},
flH:function flH(d,e){this.a=d
this.b=e},
aaW:function aaW(d,e,f){this.c=d
this.d=e
this.a=f},
eaO:function eaO(d,e){this.a=d
this.b=e},
eaP:function eaP(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eaR:function eaR(d){this.a=d},
abe:function abe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYt(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYs(g,m,f,d,e,h,l,k,j,o,i,null)},
h1F(d){return B.cj(new C.fjH(d))},
fHm(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hKA(d){if(d===D.cb)return"None"
return C.fHm(d)},
bws(d,e,f,g){return C.hAW(d,e,f,g)},
hAW(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bws=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a7(d,!0)
if($.fEn&&t.pI())t.eB()
$.fEn=!0
s.a=null
w=3
return B.b(B.hM(A.bi,!0,"Animation preview",d,new C.f5x(s,e,g,f),null,A.eD,!0,x.H),$async$bws)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fEn=!1
case 1:return B.h(u,v)}})
return B.i($async$bws,v)},
fvu(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fvu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bO,x.w).w.a.a*0.88,280,440)
s=f===D.cb
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fHm(f)+" Slide transition preview"
s=s?Aa.Dr:A.u6
w=3
return B.b(C.bws(d,s,new B.a3(t,t*0.56,B.bu(B.m(14),new C.aFz(f,null),A.ap),null),r),$async$fvu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fvu,v)},
h0Y(d,e,f){var w,v,u=null,t=A.co.ar(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d4(f,t)
case 2:case 17:return B.dO(B.d4(f,t),new B.v((1-t)*48,0))
case 3:return B.dO(B.d4(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dO(B.d4(f,t),new B.v(0,(1-t)*36))
case 5:return B.dO(B.d4(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e4(A.B,B.d4(f,t),0.5+t*0.5,u,u)
case 7:return B.e4(A.B,B.d4(f,t),1.4-t*0.4,u,u)
case 8:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fm(A.B,B.d4(f,t),u,w,!0)
case 9:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jw((1-t)*1.2)
return B.fm(A.B,B.d4(f,t),u,w,!0)
case 10:case 19:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.me((1-t)*0.8)
v=0.6+t*0.4
w.jd(v,v,v,1)
return B.fm(A.B,B.d4(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.d4(f,t),new B.v((1-t)*24,0))}},
bze(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bze=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bO,x.w).w.a.a*0.88,300,440)
s=f===D.cb
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fHm(f)+" Element animation preview"
s=s?Aa.Dr:A.u6
w=3
return B.b(C.bws(d,s,new B.a3(t,t*0.62,B.bu(B.m(14),new C.awt(f,null),A.ap),null),r),$async$bze)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bze,v)},
hKz(d){var w,v,u,t,s=$.adv.W(0,d)
if(s!=null){$.adv.m(0,d,s)
return s}w=A.cw.aE(A.a.aU(d,A.a.cP(d,",")+1))
$.adv.m(0,d,w)
v=$.fF9=$.fF9+w.length
u=B.a2($.adv).k("cu<1>")
for(;;){if(!(v>41943040&&$.adv.a>1))break
t=new B.cu($.adv,u).gaf(0)
if(!t.C())B.b8(B.fx())
v-=$.adv.W(0,t.gT(0)).length
$.fF9=v}return w},
hKg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kr(0,d),j=B.z(k,B.a2(k).k("F.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QR(s,A.u))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QR(t,A.u))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QR(u,A.cp))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aU(d,r)
v.push(B.dr(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0b(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.kv(e))
return m
case"rounded":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
w=e.gef()*0.18
m.N(new B.j2(B.c_(e,new B.b3(w,w))))
return m
case"triangle":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
w=e.d
m.N(new B.av(e.c,w))
m.N(new B.av(e.a,w))
m.N(new B.bW())
return m
case"hexagon":w=$.a1()
m=B.a([],m)
v=new B.b0(w.r,A.aw,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.bj(p,o)
m.push(p)
o=v.f
if(o!=null)p.bH(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.av(p,o)
m.push(p)
o=v.f
if(o!=null)p.bH(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.N(new B.bW())
return v
case"diamond":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
m.N(new B.av(e.c,e.gbN().b))
m.N(new B.av(e.gbN().a,e.d))
m.N(new B.av(e.a,e.gbN().b))
m.N(new B.bW())
return m
case"arch":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
w=e.a
u=e.d
m.N(new B.bj(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.N(new B.av(w,p))
m.b4K(new B.v(t,p),new B.b3(s,s))
m.N(new B.av(t,u))
m.N(new B.bW())
return m
default:m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.nD(e))
return m}},
fhj(d,e,f){return B.cj(new C.fhk(D.ecF.q(0,d),d,f,e))},
aYs:function aYs(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c83:function c83(d){this.a=d},
c82:function c82(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c81:function c81(){},
aYp:function aYp(d,e){this.b=d
this.a=e},
fjH:function fjH(d){this.a=d},
fjG:function fjG(d,e){this.a=d
this.b=e},
f5x:function f5x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5v:function f5v(d){this.a=d},
f5w:function f5w(d,e){this.a=d
this.b=e},
aFz:function aFz(d,e){this.c=d
this.a=e},
bqe:function bqe(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
ePp:function ePp(d,e,f){this.a=d
this.b=e
this.c=f},
aGb:function aGb(d,e){this.b=d
this.a=e},
SW:function SW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfr:function bfr(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dII:function dII(d){this.a=d},
dIH:function dIH(d){this.a=d},
dIG:function dIG(d){this.a=d},
H2:function H2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7W:function c7W(d){this.a=d},
c7V:function c7V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awt:function awt(d,e){this.c=d
this.a=e},
ba1:function ba1(){this.d=0
this.c=this.a=null},
cY6:function cY6(d){this.a=d},
cY5:function cY5(d){this.a=d},
a5s:function a5s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bg5:function bg5(d,e){var _=this
_.d=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
e0s:function e0s(d,e,f){this.a=d
this.b=e
this.c=f},
aWo:function aWo(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bb9:function bb9(d,e,f){this.b=d
this.c=e
this.a=f},
blU:function blU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eEQ:function eEQ(){},
fhk:function fhk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmR:function bmR(d,e,f){this.b=d
this.c=e
this.a=f},
aI8:function aI8(){},
aIE:function aIE(){},
aJX:function aJX(){},
fkH(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fkH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wf.c2().Ks(D.cUJ,A.rL,!0),$async$fkH)
case 3:r=e
if(r==null||J.ch(r.a)){u=null
w=1
break}t=J.fi(r.a)
s=t.c
if(s==null)throw B.O("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.O("That file is too big. Use a file under 8 MB.")
u=C.hKa(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fkH,v)},
hKa(d,e){var w,v=d.toLowerCase()
if(A.a.c5(v,".pdf"))return new C.a5L(d,new B.YO(A.cM.gcq().aE(e),"application/pdf"),"")
if(A.a.c5(v,".docx")){w=C.hCo(e)
if(A.a.i(w).length===0)throw B.O("No readable words were found in that Word file.")
return new C.a5L(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c0.Jh(0,e,!0)
if(A.a.i(w).length===0)throw B.O("That file is empty.")
return new C.a5L(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hCo(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cqe().cAn(B.qC(d,A.hB,o,o),o,o,!1).cC2(0,"word/document.xml")
if(n==null)return""
w=n.cJL()
v=A.c0.Jh(0,w==null?$.h3P():w,!0).split("</w:p>")
u=new B.f4("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kr(0,r)
p=A.a.i(B.cy(q,new C.f8j(),B.a2(q).k("F.E"),t).fL(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5L:function a5L(d,e,f){this.a=d
this.b=e
this.c=f},
f8j:function f8j(){},
hkH(d,e,f,g,h,i,j,k,l){return new C.M2(l,e,d,g,f,i,h,j,k,null)},
M2:function M2(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBc:function aBc(d,e,f,g,h,i,j,k,l){var _=this
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
_.a6$=l
_.c=_.a=null},
eh1:function eh1(d){this.a=d},
eh_:function eh_(){},
eh0:function eh0(d){this.a=d},
edp:function edp(){},
edq:function edq(){},
edr:function edr(d,e){this.a=d
this.b=e},
ef_:function ef_(d){this.a=d},
eeO:function eeO(){},
eeP:function eeP(){},
ecN:function ecN(){},
eg7:function eg7(d){this.a=d},
egY:function egY(d,e){this.a=d
this.b=e},
eeY:function eeY(d,e){this.a=d
this.b=e},
egL:function egL(d){this.a=d},
egM:function egM(){},
egN:function egN(){},
egO:function egO(d){this.a=d},
egP:function egP(){},
ecb:function ecb(d){this.a=d},
egZ:function egZ(){},
ee6:function ee6(d,e){this.a=d
this.b=e},
ec9:function ec9(d){this.a=d},
eca:function eca(d){this.a=d},
eet:function eet(d){this.a=d},
eeu:function eeu(d,e,f){this.a=d
this.b=e
this.c=f},
eev:function eev(d){this.a=d},
ee5:function ee5(){},
ee4:function ee4(d){this.a=d},
ee2:function ee2(){},
ee1:function ee1(d){this.a=d},
ee3:function ee3(){},
edl:function edl(d){this.a=d},
edm:function edm(d){this.a=d},
eec:function eec(d){this.a=d},
ee7:function ee7(d){this.a=d},
ee8:function ee8(d){this.a=d},
ee9:function ee9(d){this.a=d},
eea:function eea(d){this.a=d},
eeb:function eeb(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
ecd:function ecd(){},
ece:function ece(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeo:function eeo(){},
eep:function eep(d,e){this.a=d
this.b=e},
eem:function eem(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeg:function eeg(d,e,f){this.a=d
this.b=e
this.c=f},
eeh:function eeh(d,e,f){this.a=d
this.b=e
this.c=f},
eei:function eei(d){this.a=d},
eej:function eej(d,e){this.a=d
this.b=e},
eek:function eek(d,e){this.a=d
this.b=e},
eel:function eel(d,e){this.a=d
this.b=e},
eef:function eef(d,e){this.a=d
this.b=e},
eer:function eer(d){this.a=d},
ees:function ees(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eeq:function eeq(d){this.a=d},
eeJ:function eeJ(){},
eeK:function eeK(){},
eeL:function eeL(){},
eeM:function eeM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeG:function eeG(d){this.a=d},
eeI:function eeI(){},
eeH:function eeH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eeE:function eeE(d,e,f){this.a=d
this.b=e
this.c=f},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeN:function eeN(){},
eee:function eee(d,e){this.a=d
this.b=e},
ecu:function ecu(){},
ecv:function ecv(d,e,f){this.a=d
this.b=e
this.c=f},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ect:function ect(d){this.a=d},
eeT:function eeT(d){this.a=d},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeU:function eeU(d,e){this.a=d
this.b=e},
eb8:function eb8(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecq:function ecq(d){this.a=d},
ef1:function ef1(d,e,f){this.a=d
this.b=e
this.c=f},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecl:function ecl(d){this.a=d},
ef0:function ef0(d,e,f){this.a=d
this.b=e
this.c=f},
ecc:function ecc(d){this.a=d},
ecO:function ecO(){},
egJ:function egJ(d,e){this.a=d
this.b=e},
egK:function egK(d,e,f){this.a=d
this.b=e
this.c=f},
eg8:function eg8(d,e,f){this.a=d
this.b=e
this.c=f},
eb9:function eb9(d){this.a=d},
eb6:function eb6(d,e){this.a=d
this.b=e},
eaX:function eaX(d,e){this.a=d
this.b=e},
eaU:function eaU(d){this.a=d},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaV:function eaV(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecn:function ecn(d){this.a=d},
ebB:function ebB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebH:function ebH(d){this.a=d},
ebE:function ebE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebF:function ebF(d){this.a=d},
ebD:function ebD(){},
ebA:function ebA(d,e,f){this.a=d
this.b=e
this.c=f},
eeD:function eeD(d,e){this.a=d
this.b=e},
egS:function egS(d){this.a=d},
egT:function egT(d,e){this.a=d
this.b=e},
egU:function egU(d){this.a=d},
egV:function egV(d,e,f){this.a=d
this.b=e
this.c=f},
egR:function egR(d){this.a=d},
ego:function ego(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egn:function egn(d,e,f){this.a=d
this.b=e
this.c=f},
egm:function egm(){},
egl:function egl(d,e,f){this.a=d
this.b=e
this.c=f},
egk:function egk(d,e){this.a=d
this.b=e},
egh:function egh(d,e,f){this.a=d
this.b=e
this.c=f},
egf:function egf(d){this.a=d},
egg:function egg(d){this.a=d},
egj:function egj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egi:function egi(d){this.a=d},
edh:function edh(d,e){this.a=d
this.b=e},
edg:function edg(d,e){this.a=d
this.b=e},
eg9:function eg9(){},
egI:function egI(d,e){this.a=d
this.b=e},
egG:function egG(d){this.a=d},
egH:function egH(d){this.a=d},
eb1:function eb1(d,e){this.a=d
this.b=e},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb2:function eb2(d,e){this.a=d
this.b=e},
eb3:function eb3(d,e,f){this.a=d
this.b=e
this.c=f},
eb7:function eb7(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d,e,f){this.a=d
this.b=e
this.c=f},
eaY:function eaY(d){this.a=d},
eeZ:function eeZ(d,e,f){this.a=d
this.b=e
this.c=f},
egQ:function egQ(d,e,f){this.a=d
this.b=e
this.c=f},
edk:function edk(d,e,f){this.a=d
this.b=e
this.c=f},
edj:function edj(){},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebL:function ebL(d){this.a=d},
eaW:function eaW(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
eb4:function eb4(d,e){this.a=d
this.b=e},
ebd:function ebd(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebf:function ebf(d,e){this.a=d
this.b=e},
ebc:function ebc(d){this.a=d},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebb:function ebb(d){this.a=d},
ebt:function ebt(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebx:function ebx(d){this.a=d},
eby:function eby(){},
ebz:function ebz(){},
ebg:function ebg(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebo:function ebo(d){this.a=d},
ebp:function ebp(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebs:function ebs(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e,f){this.a=d
this.b=e
this.c=f},
ecK:function ecK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecJ:function ecJ(d,e,f){this.a=d
this.b=e
this.c=f},
ecI:function ecI(d,e){this.a=d
this.b=e},
eb5:function eb5(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebP:function ebP(d){this.a=d},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(d,e){this.a=d
this.b=e},
ecr:function ecr(d){this.a=d},
eeC:function eeC(d,e){this.a=d
this.b=e},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eey:function eey(d){this.a=d},
eez:function eez(d,e){this.a=d
this.b=e},
eew:function eew(){},
eex:function eex(){},
ega:function ega(){},
egb:function egb(d,e){this.a=d
this.b=e},
egc:function egc(){},
egd:function egd(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
eba:function eba(d,e){this.a=d
this.b=e},
ecf:function ecf(){},
ecg:function ecg(){},
ech:function ech(){},
eck:function eck(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ecj:function ecj(d,e){this.a=d
this.b=e},
eci:function eci(d,e,f){this.a=d
this.b=e
this.c=f},
edL:function edL(d){this.a=d},
edK:function edK(){},
edM:function edM(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edO:function edO(d,e){this.a=d
this.b=e},
edI:function edI(d){this.a=d},
edP:function edP(d,e){this.a=d
this.b=e},
edH:function edH(d){this.a=d},
edQ:function edQ(d,e){this.a=d
this.b=e},
edG:function edG(d){this.a=d},
edR:function edR(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edE:function edE(d){this.a=d},
edT:function edT(d,e){this.a=d
this.b=e},
edD:function edD(d){this.a=d},
edw:function edw(d,e){this.a=d
this.b=e},
edx:function edx(d){this.a=d},
edy:function edy(d){this.a=d},
edv:function edv(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
edu:function edu(d){this.a=d},
edA:function edA(d,e){this.a=d
this.b=e},
edt:function edt(d){this.a=d},
edB:function edB(d,e){this.a=d
this.b=e},
eds:function eds(d){this.a=d},
edC:function edC(d){this.a=d},
ecE:function ecE(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecB:function ecB(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecG:function ecG(d){this.a=d},
egW:function egW(d){this.a=d},
egX:function egX(d){this.a=d},
edW:function edW(d,e){this.a=d
this.b=e},
edV:function edV(d,e){this.a=d
this.b=e},
edU:function edU(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
edY:function edY(d){this.a=d},
efk:function efk(d,e){this.a=d
this.b=e},
efl:function efl(d){this.a=d},
efm:function efm(d){this.a=d},
efx:function efx(d){this.a=d},
efI:function efI(d){this.a=d},
efT:function efT(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d){this.a=d},
eg1:function eg1(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg3:function eg3(d,e){this.a=d
this.b=e},
efn:function efn(d){this.a=d},
efo:function efo(d){this.a=d},
efp:function efp(d){this.a=d},
efq:function efq(d){this.a=d},
efr:function efr(d){this.a=d},
efs:function efs(d){this.a=d},
eft:function eft(d){this.a=d},
efu:function efu(d){this.a=d},
efv:function efv(d){this.a=d},
efw:function efw(d){this.a=d},
efy:function efy(d){this.a=d},
efz:function efz(d){this.a=d},
efA:function efA(d){this.a=d},
efB:function efB(d){this.a=d},
efC:function efC(d){this.a=d},
efD:function efD(d){this.a=d},
efE:function efE(d){this.a=d},
efF:function efF(d){this.a=d},
efG:function efG(d){this.a=d},
efa:function efa(d){this.a=d},
efH:function efH(d){this.a=d},
efi:function efi(d){this.a=d},
efJ:function efJ(d){this.a=d},
efh:function efh(d,e){this.a=d
this.b=e},
efK:function efK(d,e){this.a=d
this.b=e},
efL:function efL(d,e){this.a=d
this.b=e},
efg:function efg(d,e,f){this.a=d
this.b=e
this.c=f},
ef6:function ef6(d,e){this.a=d
this.b=e},
efj:function efj(d){this.a=d},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg6:function eg6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eg5:function eg5(d,e){this.a=d
this.b=e},
efM:function efM(d,e,f){this.a=d
this.b=e
this.c=f},
eff:function eff(d,e,f){this.a=d
this.b=e
this.c=f},
ef5:function ef5(d,e,f){this.a=d
this.b=e
this.c=f},
ef3:function ef3(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
efe:function efe(d,e){this.a=d
this.b=e},
ef4:function ef4(d,e){this.a=d
this.b=e},
ef2:function ef2(d,e){this.a=d
this.b=e},
efO:function efO(d){this.a=d},
efd:function efd(d){this.a=d},
efP:function efP(d){this.a=d},
efQ:function efQ(d){this.a=d},
efR:function efR(d){this.a=d},
efS:function efS(d){this.a=d},
efc:function efc(d){this.a=d},
efU:function efU(d){this.a=d},
efV:function efV(d){this.a=d},
efW:function efW(d,e){this.a=d
this.b=e},
efb:function efb(d){this.a=d},
efX:function efX(d,e){this.a=d
this.b=e},
ef9:function ef9(d){this.a=d},
efY:function efY(d,e){this.a=d
this.b=e},
ef8:function ef8(d){this.a=d},
efZ:function efZ(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
ebJ:function ebJ(d,e,f){this.a=d
this.b=e
this.c=f},
ebI:function ebI(d,e){this.a=d
this.b=e},
egr:function egr(d,e){this.a=d
this.b=e},
egq:function egq(d,e){this.a=d
this.b=e},
egs:function egs(d,e){this.a=d
this.b=e},
egp:function egp(d,e){this.a=d
this.b=e},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
edo:function edo(){},
edn:function edn(){},
egE:function egE(d){this.a=d},
egD:function egD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egC:function egC(d,e){this.a=d
this.b=e},
egx:function egx(d,e){this.a=d
this.b=e},
egB:function egB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egy:function egy(d,e){this.a=d
this.b=e},
egt:function egt(d){this.a=d},
egu:function egu(d){this.a=d},
egv:function egv(d){this.a=d},
egw:function egw(d){this.a=d},
egz:function egz(d,e){this.a=d
this.b=e},
egA:function egA(d,e){this.a=d
this.b=e},
egF:function egF(d){this.a=d},
ec8:function ec8(d){this.a=d},
ec7:function ec7(d,e,f){this.a=d
this.b=e
this.c=f},
ec6:function ec6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebW:function ebW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebV:function ebV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec_:function ec_(d,e){this.a=d
this.b=e},
ec1:function ec1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec0:function ec0(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebU:function ebU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec3:function ec3(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ebS:function ebS(d){this.a=d},
ec5:function ec5(d,e){this.a=d
this.b=e},
ee_:function ee_(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee0:function ee0(d,e){this.a=d
this.b=e},
ed4:function ed4(d,e){this.a=d
this.b=e},
ed5:function ed5(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e){this.a=d
this.b=e},
ed6:function ed6(d,e){this.a=d
this.b=e},
ed2:function ed2(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
ed0:function ed0(d,e){this.a=d
this.b=e},
ed9:function ed9(d,e){this.a=d
this.b=e},
ed_:function ed_(d,e){this.a=d
this.b=e},
eda:function eda(d,e,f){this.a=d
this.b=e
this.c=f},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
edb:function edb(d,e,f){this.a=d
this.b=e
this.c=f},
ecY:function ecY(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ecU:function ecU(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
ecW:function ecW(d,e){this.a=d
this.b=e},
ede:function ede(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e,f){this.a=d
this.b=e
this.c=f},
ecT:function ecT(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
edi:function edi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaS:function eaS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeV:function eeV(d){this.a=d},
eeW:function eeW(d,e){this.a=d
this.b=e},
acG:function acG(d,e,f){this.a=d
this.b=e
this.c=f},
avR:function avR(d,e){this.c=d
this.a=e},
b8P:function b8P(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
cUC:function cUC(d){this.a=d},
cUB:function cUB(d){this.a=d},
b92:function b92(d,e){this.c=d
this.a=e},
cUY:function cUY(d){this.a=d},
cUZ:function cUZ(d){this.a=d},
I3:function I3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b8O:function b8O(){this.d=!1
this.c=this.a=null},
cUz:function cUz(d){this.a=d},
cUv:function cUv(d){this.a=d},
cUA:function cUA(d){this.a=d},
cUu:function cUu(d){this.a=d},
cUy:function cUy(d){this.a=d},
cUw:function cUw(d){this.a=d},
cUx:function cUx(d,e){this.a=d
this.b=e},
NG:function NG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yk:function Yk(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a6$=f
_.c=_.a=null},
ehC:function ehC(){},
ehs:function ehs(d){this.a=d},
ehB:function ehB(d){this.a=d},
eht:function eht(d){this.a=d},
ehu:function ehu(d){this.a=d},
eho:function eho(d){this.a=d},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d,e,f){this.a=d
this.b=e
this.c=f},
ehz:function ehz(){},
ehA:function ehA(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehD:function ehD(d,e,f){this.a=d
this.b=e
this.c=f},
ehF:function ehF(d,e){this.a=d
this.b=e},
ehE:function ehE(d){this.a=d},
Ia:function Ia(d,e){this.c=d
this.a=e},
bnl:function bnl(d,e){this.b=d
this.a=e},
bdE:function bdE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdD:function bdD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGR:function aGR(){},
aIS:function aIS(){},
bsY:function bsY(){},
aIT:function aIT(){},
fmB(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fmB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wf.c2().Ks(B.a(["pdf"],x.s),A.rL,!0),$async$fmB)
case 3:q=e
if(q==null||J.ch(q.a)){u=null
w=1
break}t=J.fi(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bkG(s,"data:application/pdf;base64,"+A.cM.gcq().aE(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmB,v)},
hKL(d){var w,v,u,t,s,r
try{w=B.jd(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).kr(0,w).gG(0)
if(t>0){s=J.aNk(t,1,200)
return s}}catch(r){}return 1},
fms(d){return C.hKK(d)},
hKK(d){var w=0,v=B.j(x.T),u
var $async$fms=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fms,v)},
byr(d,e,f,g){return C.hKU(d,e,f,g)},
hKU(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$byr=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e2(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h2f(b9,new B.ap(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lx(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lx(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lx(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lx(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a1()
g=new B.rs()
f=B.Fw(g,null)
a7=B.U()
a7.r=A.pY.gt(0)
f.bp(new B.af(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.U()
b1.r=b8.gt(b8)
b1.c=p*e
b1.d=A.bZ
b1.e=A.fk
b1.b=A.ak
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.J)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.L()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pM()
w=7
return B.b(a3.yk(800,h),$async$byr)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.he(A.fI),$async$byr)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f2(A.dz.gaL(a5))
a7=A.cM.gcq().aE(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a4(b5)
$.ak.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$byr,v)},
aMy(d,e,f){return C.hKI(d,e,f)},
hKI(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMy=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.af0(d,e,f,new C.fmq(r,q),q,"Sign document"),$async$aMy)
case 3:if(!new B.e2(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.byr(q,t,r.b,r.c),$async$aMy)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYw(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMy,v)},
hKS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fWC(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fWC(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aU(A.a.aT(A.o.fE(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aU(A.a.aT(A.o.fE(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aI(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l4&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fWg(q.ay)+";border:2px solid "+C.fWg(q.ch)+'"></div>'
break
case 5:l=C.fGd(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gagF()
if(p==null)p=A.arI
n=B.T(p)
k=n.k("pt<1>")
j=new B.pt(p,0,8,k)
j.FS(p,0,8,n.c)
j=new B.bR(j,j.gG(0),k.k("bR<ai.E>"))
k=k.k("ai.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
p=B.aI(p,'"',e)
n=B.aI(i,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aI(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
fWg(d){var w=A.o.au(d,24)
return"rgba("+(A.o.au(d,16)&255)+","+(A.o.au(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
fWC(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
byp(d,e){var w=0,v=B.j(x.H)
var $async$byp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fmz(e,C.hKS(e),d),d,null,!0,!0,x.H),$async$byp)
case 2:return B.h(null,v)}})
return B.i($async$byp,v)},
byq(){var w=0,v=B.j(x.T),u,t,s
var $async$byq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F5(92,2400),$async$byq)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fms(s),$async$byq)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byq,v)},
aMz(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fHr(d),$async$aMz)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=W.foI(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMz,v)},
fQF(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYw:function aYw(d,e,f){this.a=d
this.b=e
this.c=f},
fmq:function fmq(d,e){this.a=d
this.b=e},
fmz:function fmz(d,e,f){this.a=d
this.b=e
this.c=f},
fmw:function fmw(d){this.a=d},
fmx:function fmx(d,e,f){this.a=d
this.b=e
this.c=f},
fmy:function fmy(d,e,f){this.a=d
this.b=e
this.c=f},
hKJ(d){return C.kg(d.w)},
hKQ(d){var w,v,u,t
if(d.length===0||!A.d.e7(d,C.hMy()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xB(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.h7P()
if(w.b.test(u))return u
return null},
h2h(d,e,f){var w,v,u=C.hgn(d),t=$.oX()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aG(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hKW(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aW(d.a),v=new B.hX(w,d.b);v.C();){u=w.gT(w).y
t=C.xB(u==null?"":u)
if(t!=null)s.H(0,t)}return s},
fmo(d,e){var w,v=d.y,u=C.xB(v==null?"":v)
if(u!=null)return d.y=u
w=C.hKW(new B.a5(e,new C.fmp(d),B.T(e).k("a5<1>")))
v=d.x
return d.y=C.h2h(v==null?"":v,null,w)},
hKV(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kg(w.w))return null
v=w.y
return C.xB(v==null?"":v)},
hkJ(){var w,v=$.oX(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aG(32)]
return"SL"+A.d.fL(u)},
TW(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$TW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bV(),$async$TW)
case 3:if(!e){u=B.R(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eU("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bD),$async$TW)
case 8:r=e
if(r==null){u=B.R(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.Z(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a4(m)
$.ak.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.R(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TW,v)},
TX(d){return C.hkK(d)},
hkK(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$TX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bV(),$async$TX)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hs("ngmy_slides_transfer_qr_stashes_v1",B.D(["stashes",d,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,A.cy,null),$async$TX)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a4(p)
$.ak.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TX,v)},
a5N(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5N=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bV(),$async$a5N)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.TW(),$async$a5N)
case 4:s=a6
r=C.xB(a2==null?"":a2)
if(r==null)r=a3!=null?C.h2h(a3,null,A.a2W):null
q=x.N
p=B.aZ(q)
for(o=J.df(s),n=J.aW(o.ghP(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xB(J.k(k==null?"":k))
if(j!=null)p.H(0,j)}n=o.gdH(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Z(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dB.aE(t)
g.m(0,"payload",A.cM.gcq().aE(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q7.q(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xB(J.k(q==null?"":q))
if(f==null)f=C.fQK(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.TX(s),$async$a5N)
case 7:u=new B.aCD(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hkJ()
n=r==null
d=n?C.fQK(p):r
q=B.R(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dB.aE(t)
q.m(0,"payload",A.cM.gcq().aE(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.Q7.q(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.TX(s),$async$a5N)
case 8:u=new B.aCD(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5N,v)},
fQK(d){var w,v,u=$.oX()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aG(1000)),3,"0")
if(d.H(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aom(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aom=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bV(),$async$aom)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.TW(),$async$aom)
case 6:t=f
s=J.a6(t)
r=s.gG(t)
s.bl(t,new C.c8t(q))
w=s.gG(t)!==r?7:8
break
case 7:w=9
return B.b(C.TX(t),$async$aom)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aom,v)},
aol(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aol=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xB(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bV(),$async$aol)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.TW(),$async$aol)
case 6:t=o.jj(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xB(J.k(q==null?"":q))===p){u=C.a5M(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aol,v)},
a5M(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5M=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bV(),$async$a5M)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.TW(),$async$a5M)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
k=B.aQ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=A.c0.c4(0,A.cw.aE(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Q7.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aC(0,s,null)
if(m.b(r)){q=B.Z(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.aj(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dR(B.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=7
return B.b(C.TX(p),$async$a5M)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5M,v)},
hKP(d,e,f){var w,v=B.R(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.T(d).k("I<1,a0<n,@>>")
w=B.z(new B.I(d,new C.fmv(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
fmD(d,e,f,g){var w
if(e!=null){w=B.R(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ad())
return A.Q.aj(w,null)}return A.Q.aj(C.hKP(d==null?B.a([],x.D):d,f,g),null)},
fmC(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fmC=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5N(h,d,e,f,g),$async$fmC)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xB(e==null?"":e)
u=new B.aCq(s,t)
w=1
break}t=A.dB.aE(h)
t=A.jQ.gcq().aE(t)
u=new B.aCq(C.xB(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmC,v)},
fHt(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cS(q,"NGMYSLIDESYNC2|"))return!0
if(J.cS(q,"NGMYSLIDECODE|"))return!0
if(J.cS(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cS(q,"{"))try{w=A.Q.aC(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hKT(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fHt(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aU(v,u))
if(C.fHt(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aU(v,s))
if(C.fHt(t))return t}}return null},
fmr(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cS(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cS(t,"NGMY_SL:"))w=v.a(A.Q.aC(0,A.c0.c4(0,A.cw.aE(J.mf(t,8))),null))
else w=v.a(A.Q.aC(0,t,null))
v=C.hug(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aeM(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aeM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aol(t[1]),$async$aeM)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fmr(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xB(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aol(r),$async$aeM)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fmr(s)
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
return B.b(C.a5M(t[1]),$async$aeM)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fmr(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fmr(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeM,v)},
hug(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Q7.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fHq(C.TS(B.Z(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d1(u,x.f)
t=B.cy(t,new C.eXt(w),t.$ti.k("F.E"),x.I)
t=B.z(t,B.a2(t).k("F.E"))
return t}return B.a([],x.D)},
fHq(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.m(0,"id",C.cx())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iO
$.iO=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.TS(B.Z(o,x.N,x.z))
if(e&&C.kg(p.w))p.Q=new B.N(Date.now(),0,!1).a4().bL(144e8).aa()
return p},
bya(){var w=0,v=B.j(x.aT),u,t,s
var $async$bya=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.F4(),$async$bya)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeM(s),$async$bya)
case 4:t=e
u=J.ch(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bya,v)},
fuJ(d){var w=0,v=B.j(x.T),u,t
var $async$fuJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hM(D.Tv,!0,"Dismiss",d,new C.fuK(),new C.fuL(),A.Dp,!0,x.N),$async$fuJ)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.ei6)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fuJ,v)},
hOu(d,e,f,g,h){return B.a7(d,!1).cr(B.eH(new C.fuM(h,e,g,f),!0,null,x.H))},
fmp:function fmp(d){this.a=d},
c8t:function c8t(d){this.a=d},
fmv:function fmv(){},
eXt:function eXt(d){this.a=d},
fuK:function fuK(){},
fuL:function fuL(){},
fuM:function fuM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TU:function TU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBd:function aBd(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eh8:function eh8(){},
eh4:function eh4(d,e){this.a=d
this.b=e},
eh7:function eh7(d,e){this.a=d
this.b=e},
eh5:function eh5(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh9:function eh9(d){this.a=d},
eha:function eha(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehe:function ehe(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehg:function ehg(d,e){this.a=d
this.b=e},
eh3:function eh3(d,e){this.a=d
this.b=e},
eh2:function eh2(d,e){this.a=d
this.b=e},
TV:function TV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgr:function bgr(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ehh:function ehh(d,e){this.a=d
this.b=e},
ehi:function ehi(d){this.a=d},
ehj:function ehj(){},
ehk:function ehk(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
aBa:function aBa(d){this.a=d},
aBb:function aBb(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eaM:function eaM(d){this.a=d},
eaL:function eaL(){},
eaN:function eaN(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaH:function eaH(){},
eaJ:function eaJ(d){this.a=d},
eaK:function eaK(d){this.a=d},
bqy:function bqy(){},
aon:function aon(d){this.a=d},
aBe:function aBe(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ehn:function ehn(d){this.a=d},
ehm:function ehm(d){this.a=d},
hza(){var w,v,u,t
for(v=0;v<4;++v){w=D.cKR[v]
try{if(A7.bRl(w)){u=w
return u}}catch(t){}}return null},
Pf(d,e){return C.hHE(d,e)},
hHE(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Pf=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hza()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nx?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.J(b4,2)
c2.b=b5-A.o.J(b5,2)
b6=B.pY(c6,!0)
b6.toString
p=B.a7(c6,!0)
b7=new B.cn(null,x.A)
b8=A.d.gI(c3)
b9=$.at()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nT(new C.fgM(c2,b7,o),!1,!1)
b6.lk(0,l)
b9=x.H
B.cg(null,A.dd,!1,null,new C.fgN(n,m),c6,null,!0,!0,b9)
k=new C.fgR(b7)
j=new C.fgS()
i=null
t=4
b3=c2.a
h=Ad.aOP(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fx5(h,30)
e=B.a([],x.aK)
b3=x.z
i=A7.aTy(f,B.D(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FK.xm(i,"dataavailable",new C.fgO(e))
d=new B.bM(new B.bd($.bs,x.dT),x.b2)
A.FK.xm(i,"stop",new C.fgP(d))
J.afi(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Pf)
case 8:w=7
return B.b(c5.$1(d0),$async$Pf)
case 7:a0=d0
J.fx8(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afi(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afi(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Pf)
case 15:w=14
return B.b(c5.$1(d0),$async$Pf)
case 14:a0=d0
case 13:J.fx8(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afi(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.N(Date.now(),0,!1).bL(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbn())b3=b3===b8.gbn()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fx8(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fg,null,b9),$async$Pf)
case 18:w=16
break
case 17:J.afi(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afi(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.ng),$async$Pf)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hC(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mH(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Jw(b0)
J.lC(b0)
B.bK(A.nf,new C.fgQ(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a4(c4)
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
J.lC(l)
if(p.pI())p.eB()
c3=o
b3=$.at()
c3.shH(b3)
J.aNp(c3,0)
c3=n
c3.shH(b3)
J.aNp(c3,0)
c3=m
c3.shH(b3)
J.aNp(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pf,v)},
fgM:function fgM(d,e,f){this.a=d
this.b=e
this.c=f},
fgL:function fgL(){},
fgN:function fgN(d,e){this.a=d
this.b=e},
fgR:function fgR(d){this.a=d},
fgS:function fgS(){},
fgO:function fgO(d){this.a=d},
fgP:function fgP(d){this.a=d},
fgQ:function fgQ(d){this.a=d},
bqK:function bqK(d,e,f){this.c=d
this.d=e
this.a=f},
eRR:function eRR(){},
eRS:function eRS(){},
c8Q(d){var w=0,v=B.j(x.at),u,t,s
var $async$c8Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aox(d,A.xW),$async$c8Q)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.N(Date.now(),0,!1))
if(t.a<0){u=A.bu
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8Q,v)},
c8P(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5t:function a5t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bga:function bga(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e1j:function e1j(d){this.a=d},
e1h:function e1h(d){this.a=d},
e1i:function e1i(d,e){this.a=d
this.b=e},
a6k:function a6k(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nP$=k
_.nQ$=l
_.nR$=m
_.ne$=n},
a6l:function a6l(d,e){this.a=d
this.b=e},
b_9:function b_9(){},
cb2:function cb2(){},
cb3:function cb3(){},
cb4:function cb4(d,e,f,g,h,i,j,k,l){var _=this
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
h8Q(d){return new C.afA(d)},
a0I:function a0I(){},
afA:function afA(d){this.a=d},
aNJ:function aNJ(){},
atM:function atM(d,e){this.d=d
this.b=e
this.a=null},
aPd:function aPd(d){this.b=d
this.a=null},
fbW(d,e){var w=0,v=B.j(x.H)
var $async$fbW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a1().gwC().Kb(d,e),$async$fbW)
case 2:B.foO()
return B.h(null,v)}})
return B.i($async$fbW,v)},
h_z(d,e){return(A.qr[(d^e)&255]^A.o.au(d,8))>>>0},
f9Q(d,e,f,g,h,i){var w=C.hE4(d,A.d6,f,null,A.cR,g,h,i)
return w},
h1q(d){var w=F.h28(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hgn(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oh.h(0,w)
if(v!=null)return v
for(u=A.oh.gdH(A.oh),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
h1y(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<31;++w)v+="- "+D.cBY[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwp(d,e){return C.hAR(d,e)},
hAR(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hC([d],"application/pdf")
n=x.z
q=B.aQM(B.a([r],x.e3),e,B.D(["type","application/pdf"],n,n))
p=B.ct(B.D(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jJ(o,"share",[p]),x.H),$async$bwp)
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
return B.i($async$bwp,v)},
fHk(){var w=0,v=B.j(x.y),u,t,s
var $async$fHk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f3f
s=$.bvX
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwp(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHk,v)},
bxJ(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bxJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f3f
l=$.bvX
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=W.fXh()?3:4
break
case 3:w=5
return B.b(C.bwp(m,k),$async$bxJ)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bvY
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mH(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Jw(q)
w=10
return B.b(B.bK(A.X,null,x.H),$async$bxJ)
case 10:J.lC(q)
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
return B.i($async$bxJ,v)},
fHb(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fHb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bvY
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.la.tT(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fHb,v)},
fHs(d,e){var w=0,v=B.j(x.H),u,t
var $async$fHs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hC([d],"text/html"))
t.toString
u=window
u.toString
A.la.tT(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fHs,v)},
aZ6(d,e){var w=0,v=B.j(x.y),u
var $async$aZ6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZ8(d,e),$async$aZ6)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZ7(d),$async$aZ6)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZ6,v)}},D,H,Ah,N,V,A4,G,F,E,Ai,P,W,X,A5,K,Aj,Y,O,Q,L,A6,Ak,Z,Al,Am,A7,A8,An,A9,Aa,Ab,Ao,Ap,R,Aq,I,Ac,S,T,Ar,M,A_,A0,A1,As,At
J=c[1]
B=c[0]
A=c[2]
U=c[177]
A2=c[130]
Ad=c[55]
Ae=c[47]
A3=c[50]
Af=c[101]
Ag=c[189]
C=a.updateHolder(c[4],C)
D=c[175]
H=c[88]
Ah=c[34]
N=c[179]
V=c[176]
A4=c[184]
G=c[147]
F=c[29]
E=c[178]
Ai=c[96]
P=c[103]
W=c[27]
X=c[137]
A5=c[109]
K=c[180]
Aj=c[108]
Y=c[58]
O=c[157]
Q=c[72]
L=c[117]
A6=c[122]
Ak=c[182]
Z=c[92]
Al=c[83]
Am=c[86]
A7=c[51]
A8=c[153]
An=c[33]
A9=c[70]
Aa=c[102]
Ab=c[188]
Ao=c[190]
Ap=c[187]
R=c[64]
Aq=c[183]
I=c[134]
Ac=c[63]
S=c[45]
T=c[181]
Ar=c[191]
M=c[164]
A_=c[186]
A0=c[185]
A1=c[54]
As=c[163]
At=c[94]
C.nq.prototype={
ud(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t6(t,v)
return new C.nq(t===0?!1:w,v,t)},
bEY(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BJ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t6(w,u)
return new C.nq(r===0?!1:s,u,r)},
bFn(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BJ()
w=o-d
if(w<=0)return p.a?$.fIM():$.BJ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t6(w,u)
q=new C.nq(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a0t())
return q},
dO(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.O(B.dE("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.J(e,16)===0)return r.bEY(v)
u=w+v+1
t=new Uint16Array(u)
C.fTY(r.b,w,e,t)
w=r.a
s=C.t6(u,t)
return new C.nq(s===0?!1:w,t,s)},
lV(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.O(B.dE("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.J(e,16)
if(u===0)return n.bFn(v)
t=w-v
if(t<=0)return n.a?$.fIM():$.BJ()
s=n.b
r=new Uint16Array(t)
C.hql(s,w,e,r)
w=n.a
q=C.t6(t,r)
p=new C.nq(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dO(1,u)-1)!==0)return p.aD(0,$.a0t())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a0t())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cxV(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5v(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5v(t,e)
if(s===0)return $.BJ()
if(r===0)return t.a===e?t:t.ud(0)
w=s+1
v=new Uint16Array(w)
C.hqj(t.b,s,d.b,r,v)
u=C.t6(w,v)
return new C.nq(u===0?!1:e,v,u)},
FT(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BJ()
w=d.c
if(w===0)return t.a===e?t:t.ud(0)
v=new Uint16Array(s)
C.b62(t.b,s,d.b,w,v)
u=C.t6(s,v)
return new C.nq(u===0?!1:e,v,u)},
bsj(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t6(r,u)
return new C.nq(!1,u,s)},
bsi(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t6(u,r)
return new C.nq(!1,r,v)},
bsk(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t6(p,m)
return new C.nq(s!==0,m,s)},
SM(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BJ()
w=t.a
if(w===e.a){if(w){w=$.a0t()
return t.FT(w,!0).bsk(e.FT(w,!0),!0).a5v(w,!0)}return t.bsj(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bsi(v.FT($.a0t(),!1),!1)},
ap(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5v(e,v)
if(C.cxV(u.b,t,e.b,w)>=0)return u.FT(e,v)
return e.FT(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.ud(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5v(e,v)
if(C.cxV(u.b,t,e.b,w)>=0)return u.FT(e,v)
return e.FT(u,!v)},
aP(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BJ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fTZ(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t6(w,t)
return new C.nq(q===0?!1:r,t,q)},
bEX(d){var w,v,u,t
if(this.c<d.c)return $.BJ()
this.aMZ(d)
w=$.fCu.c2()-$.auu.c2()
v=C.fCw($.fCt.c2(),$.auu.c2(),$.fCu.c2(),w)
u=C.t6(w,v)
t=new C.nq(!1,v,u)
return this.a!==d.a&&u>0?t.ud(0):t},
ceU(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aMZ(d)
w=C.fCw($.fCt.c2(),0,$.auu.c2(),$.auu.c2())
v=C.t6($.auu.c2(),w)
u=new C.nq(!1,w,v)
if($.fCv.c2()>0)u=u.lV(0,$.fCv.c2())
return t.a&&u.c>0?u.ud(0):u},
aMZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fTV&&d.c===$.fTX&&g.b===$.fTU&&d.b===$.fTW)return
w=d.b
v=d.c
u=16-A.o.gah3(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fTT(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fTT(g.b,f,u,r)}else{r=C.fCw(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fCx(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cxV(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b62(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b62(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hqk(p,r,i);--o
C.fTZ(h,j,0,r,o,s)
if(r[i]<h){m=C.fCx(j,s,o,n)
C.b62(r,l,n,m,r)
while(--h,r[i]<h)C.b62(r,l,n,m,r)}--i}$.fTU=g.b
$.fTV=f
$.fTW=w
$.fTX=v
$.fCt.b=r
$.fCu.b=l
$.auu.b=s
$.fCv.b=u},
gV(d){var w,v,u,t=new C.cxW(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cxX().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nq&&this.aI(0,e)===0},
rn(d,e){return this.aI(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u6(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gah3(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.au(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cxY(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cxZ(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kQ(A.aD.gaL(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ud(0):r
while(v.c>1){u=$.h5M()
if(u.c===0)B.b8(D.aUY)
t=v.ceU(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bEX(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dv(w,x.bJ).fL(0)},
$iaOs:1,
$ihv:1}
C.aNT.prototype={
H(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gG(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
cC2(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gcf(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jM(w,w.length,B.T(w).k("jM<1>"))}}
C.PR.prototype={
cJL(){var w,v
if(this.as==null)this.b72()
w=this.as
v=w==null?null:w.alD()
return v==null?null:v.ex()},
b72(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alD().ex()
this.as=new C.bIJ(v)}},
gX(d){return this.at}}
C.a1E.prototype={
a3(){return"CompressionType."+this.b}}
C.bCQ.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.ck()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dO(v,u)+(s.b&A.xx[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.ck()}w=A.o.dO(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fm(u,t)&A.xx[d])
s.c=t}return v}}
C.bBA.prototype={
cAm(d,e){var w,v,u,t,s,r=this,q=new C.bCQ(d)
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
t=r.cde(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cdh(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cde(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.cZe[u])v=!1
if(t!==D.cF0[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cdh(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bUS()
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
u[w]=l}c9.fr=B.bT(6,$.h3T(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h3S()
u=x.an
c9.y=B.bT(6,v,!1,u)
c9.z=B.bT(6,v,!1,u)
c9.Q=B.bT(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bQx(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqk(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqk(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ak(a8,16)
b2=A.o.J(a8,16)
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
a3=c9.aqk(d3)
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
d4.bB(c3)
c1=(c1<<8^D.Fg[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Fi[b9];++b9
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
if(b8===0){b8=D.Fi[b9];++b9
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
if(b8===0){b8=D.Fi[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Fi[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Fi[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bB(c3)
c1=c1<<8^D.Fg[c1>>>24&255^v];--c2}d4.bB(c3)
c1=(c1<<8^D.Fg[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bB(c7)
c1=(c1<<8^D.Fg[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bB(c7)
c1=(c1<<8^D.Fg[c1>>>24&255^c7&255])>>>0
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
aqk(d){var w,v,u,t,s=this,r=s.ay
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
bQx(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bUS(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cqf.prototype={
aDE(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bI0(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aQ()
e.aQ()
e.aQ()
e.aQ()
r.f=e.aH()
r.r=e.aH()
w=e.aQ()
if(w>0)e.aDH(w,!1)
r.cdC(e)
q=r.r
v=r.f
u=e.aGv(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b4M()
s.cJK(0,u,e,f)
q.push(s)}},
cdC(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a58(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.ra()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.ra()
d.aQ()
d.aQ()
d.aH()
d.aH()
d.ra()
d.ra()
u=d.ra()
t=d.ra()
this.f=u
this.r=t
d.c=s},
bI0(d){var w,v,u,t,s,r,q,p,o,n
if(d.gG(0)<=4)return-1
w=d.c
v=d.gG(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a58(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aj9(A.hB)
o.aHM(r.ex(),A.hB,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cqd.prototype={}
C.au9.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cqg.prototype={
aDE(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aQ()
o.b=e.aQ()
w=D.axW.h(0,e.aQ())
o.c=w==null?D.Jf:w
o.d=e.aQ()
o.e=e.aQ()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aQ()
u=e.aQ()
o.x=e.akr(v)
o.y=e.h1(u).ex()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aLY:D.BW
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.BW&&u>2){w=o.y
w.toString
s=B.qC(w,A.hB,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aQ()===39169){s.aQ()
s.aQ()
s.akr(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aQ()
o.at=D.aLZ
o.ax=new C.cqd(r,q)
w=D.axW.h(0,q)
o.c=w==null?D.Jf:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gG(d){return this.bgc().length},
alD(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qC(new Uint8Array(0),A.hB,q,q)
w=r.at
if(w!==D.BW)if(p.gG(0)<=0)r.at=D.BW
else{if(w===D.aLY){p=r.bDh(p)
r.Q=p}else if(w===D.aLZ){p=r.bCV(p)
r.Q=p}r.at=D.BW}w=r.c
if(w===D.abl){v=p.c
u=B.da()
p=r.Q
if(p.gG(0)<=524288e3)u.b=A.oE.Ap(p.ex(),!0,!1)
else{t=B.a6a(A.hB,r.w)
p=r.Q
p.toString
A.oE.a1r(p,t,!0,!1)
u.b=t.Fs()}r.Q.c=v
return B.qC(u.b7(),A.hB,q,q)}else if(w===D.abm){s=B.a6a(A.hB,32768)
p=r.Q
v=p.c
C.h90().cAm(p,s)
u=s.Fs()
r.Q.c=v
return B.qC(u,A.hB,q,q)}else return B.qC(p.ex(),A.hB,q,q)},
bgc(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ex()},
u(d){return this.x},
b33(d){var w=this.ch,v=C.I_(C.h_z(w[0].M(0),d))
w[0]=v
v=w[1].ap(0,v.SM(0,C.I_(255)))
w[1]=v
w[1]=v.aP(0,C.I_(134775813)).ap(0,C.I_(1)).SM(0,C.I_(4294967295))
w[2]=C.I_(C.h_z(w[2].M(0),w[1].lV(0,24).M(0)))},
aMp(){var w=(this.ch[2].SM(0,C.I_(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bDh(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qC(new Uint8Array(0),A.hB,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b33(u[v.c++]^r.aMp())}t=r.Q.ex()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMp()
r.b33(s)
u&2&&B.ah(t)
t[w]=s}return B.qC(t,A.hB,q,q)},
bCV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ex()
v=16}else if(k===2){w=d.h1(12).ex()
v=24}else{w=d.h1(16).ex()
v=32}u=d.h1(2).ex()
t=d.h1(d.gG(0)-10)
s=d.h1(10)
r=t.ex()
k=this.ay
k.toString
q=C.hq0(k,w,v)
p=new Uint8Array(B.cl(A.aD.dA(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aD.dA(q,v,k)))
if(!C.fTo(A.aD.dA(q,k,k+2),u))throw B.O(B.fb("password error"))
k=new Uint8Array(16)
n=new C.bAa(k,new Uint8Array(16),p)
k=x.S
m=J.a2Z(0,k)
m=n.r=new C.caS(m)
m.c=!0
m.b=m.bfw(!0,new C.apU(p))
if(m.c)m.d=B.bi(D.nw,!0,k)
else m.d=B.bi(D.xq,!0,k)
l=C.fRD(C.fRF(),64)
l.b9h(new C.apU(o))
n.w=l
n.cJl(r,0,r.length)
k=s.ex()
m=n.x
m===$&&B.c()
if(!C.fTo(k,m))throw B.O(B.fb("macs don't match"))
return B.qC(r,A.hB,null,null)}}
C.b4M.prototype={
cJK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aQ()
v=e.aQ()
u=e.aQ()
n.y=e.aQ()
e.aQ()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akr(w)
if(v>0){t=e.h1(v).ex()
n.ax=t
if(v>=4){s=B.qC(t,A.hB,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aQ()
p=s.aQ()
o=s.a58(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.ra()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.ra()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.ra()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akr(u)
f.c=n.as
t=new C.cqg(D.Jf,n,D.BW,B.a([C.I_(0),C.I_(0),C.I_(0)],x.f3))
n.ch=t
t.aDE(0,f,g)},
u(d){return this.at}}
C.cqe.prototype={
cAn(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cqf(B.a([],x.fT))
this.a=g
g.aDE(0,d,f)
g=B.a([],x.bm)
w=B.R(x.N,x.S)
v=new C.aNT(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c5(o,"/")||A.a.c5(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.PR(o,A.o.ak(Date.now(),1000),0):C.fK9(o,q.w,q)
v.H(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fK9(o,q.w,q)
if(k.as==null)k.b72()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aj9(A.hB)
j.aHM(o,A.hB,h,h)}i=j==null?h:j.ex()
if(i!=null)new B.IE(!1).Gt(i,0,h,!0)}}return v}}
C.bAa.prototype={
cJl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bi(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.h8K(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dE("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dE("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bGr(u,0,w,0,o)}else{o===$&&B.c()
q.bDl(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Jy(w,0)
m.x=A.aD.dA(m.x,0,10)
w=m.w
l=w.a
l.l2(0)
w=w.d
w===$&&B.c()
l.Bi(0,w,0,w.length)
return f}}
C.caX.prototype={}
C.cb0.prototype={}
C.caV.prototype={}
C.apU.prototype={}
C.cb_.prototype={
cAC(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9h(new C.apU(A.aD.fT(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bHp(n.a,n.b,t,s,r)
r+=v}A.aD.ha(f,g,g+w,s)
return o.a.c},
bHp(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.O(B.dE("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bi(0,d,0,d.length)
v.Bi(0,f,0,4)
u=m.c
u===$&&B.c()
w.Jy(u,0)
u=m.c
A.aD.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bi(0,s,0,s.length)
w.Jy(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.caW.prototype={}
C.caU.prototype={}
C.apV.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.apV){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rn(d,e){var w=this.a
w===$&&B.c()
w=A.o.rn(w,e.gbQO())
if(!w)e.gbQO()
return w},
aFZ(d,e){this.a=0
this.b=d},
rp(d){return this.aFZ(d,null)},
aGy(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.f4(""),u=w.a
u===$&&B.c()
w.aW6(v,u)
u=w.b
u===$&&B.c()
w.aW6(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aW6(d,e){var w,v=A.o.fE(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bn(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.caZ.prototype={
l2(d){var w,v=this
v.a.rp(0)
v.c=0
A.aD.hh(v.b,0,4,0)
v.w=0
w=v.r
A.d.hh(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
al6(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aXx(u,0)
v.c=0}v.a.aGy(1)},
Bi(d,e,f,g){var w=this.cc6(e,f,g)
f+=w
g-=w
w=this.cc7(e,f,g)
this.cbY(e,f+w,g-w)},
Jy(d,e){var w,v=this,u=C.fRE(v.a),t=u.a
t===$&&B.c()
t=C.fHV(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fHV(w,3)
v.cc1()
v.cbZ(u)
v.apb()
v.c6j(d,e)
v.l2(0)
return 20},
aXx(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nB(A.aD.gaL(d),d.byteOffset,d.length).getUint32(e,A.hP===w.d)
if(w.w===16)w.apb()},
apb(){this.cJk()
this.w=0
A.d.hh(this.r,0,16,0)},
cbY(d,e,f){while(f>0){this.al6(d[e]);++e;--f}},
cc7(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aXx(d,e)
e+=4
f-=4
w.aGy(4)
v+=4}return v},
cc6(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.al6(d[e]);++e;--f;++v}return v},
cc1(){this.al6(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.al6(0)}},
cbZ(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.apb()
u=v.d
switch(u){case A.hP:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Cn:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.O(B.b9("Invalid endianness: "+u.u(0)))}},
c6j(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hP===this.d,s=0;s<w;++s){r=v[s]
q=J.nB(A.aD.gaL(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cb1.prototype={
cJk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pC[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pC[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pC[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pC[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pC[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pC[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pC[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pC[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pC[30]
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
C.caY.prototype={
b9h(d){var w,v,u,t,s=this,r=s.a
r.l2(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bi(0,w,0,v)
w=s.d
w===$&&B.c()
r.Jy(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aD.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aD.hh(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aD.ha(w,0,u,s.d)
s.b4c(s.d,u,54)
s.b4c(s.e,u,92)
u=s.d
r.Bi(0,u,0,u.length)},
Jy(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Jy(s,w)
s=u.e
t.Bi(0,s,0,s.length)
v=t.Jy(d,e)
s=u.e
A.aD.hh(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bi(0,s,0,s.length)
return v},
b4c(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.caT.prototype={}
C.caS.prototype={
a_Q(d){return(D.nw[d&255]&255|(D.nw[d>>>8&255]&255)<<8|(D.nw[d>>>16&255]&255)<<16|D.nw[d>>>24&255]<<24)>>>0},
bfw(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.O(B.dE("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bT(4,0,!1,u)
switch(v){case 4:q=J.nB(A.aD.gaL(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_Q((m>>>8|(m&$.pC[24])<<24)>>>0)^D.cic[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nB(A.aD.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Q((k>>>8|(k&$.pC[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_Q((k>>>8|(k&$.pC[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nB(A.aD.gaL(e),e.byteOffset,w)
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
p=(p^f.a_Q((g>>>8|(g&$.pC[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_Q(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.O(B.b9("Should never get here"))}return s},
bGr(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nB(A.aD.gaL(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e0[a8&255]
u=D.e0[a9>>>8&255]
t=$.pC[8]
s=D.e0[b0>>>16&255]
r=$.pC[16]
q=D.e0[b1>>>24&255]
p=$.pC[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e0[a9&255]
s=D.e0[b0>>>8&255]
u=D.e0[b1>>>16&255]
v=D.e0[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e0[b0&255]
u=D.e0[b1>>>8&255]
s=D.e0[a8>>>16&255]
q=D.e0[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e0[b1&255]
a8=D.e0[a8>>>8&255]
a9=D.e0[a9>>>16&255]
b0=D.e0[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e0[n&255]
b0=D.e0[m>>>8&255]
a9=D.e0[l>>>16&255]
a8=D.e0[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e0[m&255]
b0=D.e0[l>>>8&255]
o=D.e0[b1>>>16&255]
s=D.e0[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e0[l&255]
o=D.e0[b1>>>8&255]
b0=D.e0[n>>>16&255]
u=D.e0[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e0[b1&255]
o=D.e0[n>>>8&255]
s=D.e0[m>>>16&255]
v=D.e0[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e0[a8&255]^C.mZ(D.e0[a9>>>8&255],24)^C.mZ(D.e0[b0>>>16&255],16)^C.mZ(D.e0[b1>>>24&255],8)^b6[w][0]
m=D.e0[a9&255]^C.mZ(D.e0[b0>>>8&255],24)^C.mZ(D.e0[b1>>>16&255],16)^C.mZ(D.e0[a8>>>24&255],8)^b6[w][1]
l=D.e0[b0&255]^C.mZ(D.e0[b1>>>8&255],24)^C.mZ(D.e0[a8>>>16&255],16)^C.mZ(D.e0[a9>>>24&255],8)^b6[w][2]
b1=D.e0[b1&255]^C.mZ(D.e0[a8>>>8&255],24)^C.mZ(D.e0[a9>>>16&255],16)^C.mZ(D.e0[b0>>>24&255],8)^b6[w][3]
a7=D.nw[n&255]
b0=D.nw[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nw[l>>>8&255]
a9=D.nw[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nw[b1>>>8&255]
h=D.nw[n>>>16&255]
g=D.nw[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nw[l>>>24&255]
s=s[3]
a1=J.nB(A.aD.gaL(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nB(A.aD.gaL(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nB(A.aD.gaL(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nB(A.aD.gaL(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bDl(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nB(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nB(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nB(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nB(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e_[a6&255]
v=D.e_[b0>>>8&255]
u=$.pC[8]
t=D.e_[a5>>>16&255]
s=$.pC[16]
r=D.e_[a4>>>24&255]
q=$.pC[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e_[a4&255]
t=D.e_[a6>>>8&255]
v=D.e_[b0>>>16&255]
w=D.e_[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e_[a5&255]
v=D.e_[a4>>>8&255]
t=D.e_[a6>>>16&255]
r=D.e_[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e_[b0&255]
a5=D.e_[a5>>>8&255]
a4=D.e_[a4>>>16&255]
a6=D.e_[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e_[p&255]
a6=D.e_[b0>>>8&255]
a4=D.e_[n>>>16&255]
a5=D.e_[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e_[o&255]
a4=D.e_[p>>>8&255]
a7=D.e_[b0>>>16&255]
t=D.e_[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e_[n&255]
a7=D.e_[o>>>8&255]
a5=D.e_[p>>>16&255]
v=D.e_[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e_[b0&255]
a7=D.e_[n>>>8&255]
t=D.e_[o>>>16&255]
w=D.e_[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e_[a6&255]^C.mZ(D.e_[b0>>>8&255],24)^C.mZ(D.e_[a5>>>16&255],16)^C.mZ(D.e_[a4>>>24&255],8)^b5[a9][0]
o=D.e_[a4&255]^C.mZ(D.e_[a6>>>8&255],24)^C.mZ(D.e_[b0>>>16&255],16)^C.mZ(D.e_[a5>>>24&255],8)^b5[a9][1]
n=D.e_[a5&255]^C.mZ(D.e_[a4>>>8&255],24)^C.mZ(D.e_[a6>>>16&255],16)^C.mZ(D.e_[b0>>>24&255],8)^b5[a9][2]
b0=D.e_[b0&255]^C.mZ(D.e_[a5>>>8&255],24)^C.mZ(D.e_[a4>>>16&255],16)^C.mZ(D.e_[a6>>>24&255],8)^b5[a9][3]
a4=D.xq[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xq[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xq[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xq[o>>>8&255]
i=D.xq[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xq[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nB(A.aD.gaL(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bII.prototype={}
C.bIJ.prototype={
gG(d){var w=this.a.length
return w},
alD(){return B.qC(this.a,A.hB,null,null)}}
C.b6i.prototype={
u8(d){return C.htb(d)}}
C.ckf.prototype={
L6(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7I(v,t+20,u+16,t,u,B.th(d.x))},
mQ(d){return!1}}
C.bJB.prototype={
cuV(d){if(this.b)throw B.O(B.b9("FontLoader is already loaded"))
this.c.push(d.bw(new C.bJC(),x.E))},
ma(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$ma=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.O(B.b9("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$ma)
case 6:w=5
return B.b(p.fbW(f,r),$async$ma)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$ma,v)}}
C.asR.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a68.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aU(this))return!1
return e instanceof C.a68&&e.a===this.a},
gV(d){return B.bn(B.aU(this),B.vU(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aU(this)===D.eZL)return"["+(w+B.dX(this.a))+"]"
return"[ObjectKey "+(w+B.dX(this.a))+"]"}}
C.aSa.prototype={
bX(d){var w=new C.axB(!0,this.e,null,new B.d6(),B.c8())
w.bW()
w.scw(null)
return w},
c3(d,e){var w
x.cQ.a(e)
e.sxE(0,!0)
w=this.e
if(!w.A(0,e.ae)){e.ae=w
e.aCj()}}}
C.axB.prototype={
sxE(d,e){return},
goK(){var w=this.a7$
return w!=null},
gkx(){var w=this.a7$
return w!=null},
KW(d){var w=d==null?B.fMt(null):d
w.sa2j(this.ae)
return w}}
C.ZE.prototype={
S(){return new C.aFS(B.aZ(x.N))},
cHD(d){return this.d.$1(d)},
cFr(){return this.e.$0()}}
C.aFS.prototype={
Z(){this.a0()
this.Np()},
Np(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Np=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cFr(),$async$Np)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eQj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Np,v)},
WP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.eQn(t),q),q.k("F.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eQo(t))
w=3
return B.b(C.akU(p),$async$WP)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eQp(t,s,p))
w=4
return B.b(t.Np(),$async$WP)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WP,v)},
ZQ(d){return this.cg4(d)},
cg4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eQk(t))
s=J.q(d,"id")
w=3
return B.b(C.bTK(J.k(s==null?"":s)),$async$ZQ)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eQl(t))
w=1
break}q=C.fHq(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cHD(B.a([q],x.D)),$async$ZQ)
case 4:if(t.c==null){w=1
break}t.n(new C.eQm(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ZQ,v)},
No(d,e){return this.bDK(0,e)},
bDK(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$No=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eQe(q),r,null,!0,!0,x.y),$async$No)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eQf(t))
s=s.h(e,"id")
w=4
return B.b(C.akT(J.k(s==null?"":s)),$async$No)
case 4:if(t.c==null){w=1
break}t.n(new C.eQg(t))
w=5
return B.b(t.Np(),$async$No)
case 5:case 1:return B.h(u,v)}})
return B.i($async$No,v)},
ctZ(d){var w=B.bg(d),v=w==null?null:w.bO()
if(v==null)return""
return A.hW[B.bB(v)-1]+" "+B.bL(v)},
aMg(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LH,A.n),w,e,w,w,w,w,w,e)},
aMf(d){return this.aMg(d,44)},
b1s(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LH:u,r=B.m(14),q=B.V(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,L.GU,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.GU,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bk7,u,u,u)],p))}return B.C(B.aJ(A.c5,B.dg(u,B.A(q,A.m,u,A.b5,A.j,0,u,u),u,u,A.b9,new B.o(u,u,u,r,u,s,A.n),A.hG,u,u,u,A.wh,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQt(this,d),u,u,u,u,u,u,!1,A.af),1)},
caa(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.dc.j(0.14):D.U9,n=B.m(18),m=p?A.dc:A.du
m=B.G(m,A.r,p?1.8:1)
w=this.aMf(A.p8)
v=B.d(d.b,q,1,A.Z,q,q,q,D.aKg,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.C(B.u(B.a([v,A.d5,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aKi,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LH:q
u=p?q:B.G(A.be,A.r,1.6)
r=p?D.by0:q
return B.aJ(q,B.dg(q,B.A(B.a([w,A.ba,t,B.dg(q,r,q,q,A.b9,new B.o(q,q,u,q,q,v,A.a6),A.fQ,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b9,new B.o(o,q,m,n,q,q,A.n),A.fQ,q,q,A.d7,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQi(this,p,d),q,q,q,q,q,q,!1,A.af)},
chz(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.ctZ(J.k(o==null?"":o))
o=B.m(18)
w=B.G(A.du,A.r,1)
v=r.aMf(A.KU)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.Z,q,q,q,D.aKg,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.C(B.u(B.a([u,A.d5,B.d(p+" slides"+t,q,q,q,q,q,q,D.aKi,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZ9(A.hi,A.br,"Bring it back",r.r?q:new C.eQq(r,d))
return B.p(q,B.A(B.a([v,A.ba,t,p,A.bp,r.aZ9(A.e4,A.cN,"Delete",r.r?q:new C.eQr(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.U9,q,w,o,q,q,A.n),q,q,q,A.d7,D.beL,q,q,q)},
aZ9(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hJ(B.aJ(w,B.p(w,B.V(d,v?A.be:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.af),w,f,w,w)},
apr(d,e,f){var w=null
return new B.B(D.bdP,B.u(B.a([B.V(d,A.be,w,w,w,46),A.aa,B.d(e,w,w,w,w,w,w,D.eyw,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.ern,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c2
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bO,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.be,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMg(A.xd,46),A.ba,D.bkR],t)
if(j.r)s.push(D.dMR)
s.push(B.aF(i,i,i,i,A.Lr,i,i,i,new C.eQw(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.G(A.du,A.r,1)
o=J.a6(h)
q=B.a([A.T,u,new B.B(D.bhi,s,i),B.p(i,B.A(B.a([j.b1s(0,A.wO,"Save",j.a.c.length),j.b1s(1,A.L8,"Saved",o.gG(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bgm,A.ef,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cN:A.br).j(0.12)
s=B.m(14)
r=B.G((j.y?A.cN:A.br).j(0.4),A.r,1)
p=j.y
n=p?A.KV:A.ej
n=B.V(n,p?A.cN:A.br,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.C(B.d(m,i,i,i,i,i,i,A.a3U,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bgi,A.iD,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.C(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.euJ,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.exB,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eQx(j,v),i,i,i,i,i,i,!1,A.af))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apr(A.p8,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.caa(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dMs)
else if(j.e==null)s.push(j.apr(A.afR,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.apr(A.o5,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.chz(r.gT(r)))
A.d.v(u,s)}q.push(new B.dk(1,A.cj,B.cL(u,i,V.ad4,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbXk()
p=s?i:D.LH
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.a9(0,A.G,A.b0.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wO,m?A.ja:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.B(D.bgV,B.aJ(i,B.dg(i,B.A(B.a([k,A.a3k,new B.dk(1,A.cj,B.eY(A.B,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.ja:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b5,A.j,0,i,i),i,i,A.b9,new B.o(s,i,i,o,n,p,A.n),A.hG,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.af),i))}else q.push(A.T)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,i,new B.aV(0,1/0,0,w.a.b*0.9),D.aS8,i,i,i,i,i,i,i,i)}}
C.nS.prototype={
ad(){return B.D(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a4().aa()],x.N,x.z)}}
C.Wq.prototype={
S(){return new C.auF(B.a([],x.k),B.f7(null,x.H))},
gdQ(){return this.c}}
C.auF.prototype={
Z(){this.a0()
this.Nw()},
Nw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_C(t.a.c),$async$Nw)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.czj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nw,v)},
cns(d){var w,v,u,t=this
d.c=new B.N(Date.now(),0,!1)
w=J.pJ(t.d,new C.czm(d))
v=w<0
if(v&&C.hqn(d))return t.f
u=t.d
if(v)J.p_(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fyn(new C.czn(t),v)
return t.f=t.f.bw(new C.czo(t,d),v).eL(new C.czp())},
Hd(d,e,f){return this.c4_(0,e,f)},
aTC(d,e){return this.Hd(0,e,!1)},
c4_(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hd=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a7(s,!1).cr(B.eH(new C.czi(t,e),!1,null,x.H)),$async$Hd)
case 3:w=4
return B.b(t.f,$async$Hd)
case 4:w=5
return B.b(t.Nw(),$async$Hd)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hd,v)},
aSV(d){var w=A.o.u(1000*Date.now()),v=d==null?D.daM:d
this.Hd(0,new C.nS(w,v,new B.N(Date.now(),0,!1)),!0)},
bWQ(){return this.aSV(null)},
aaz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.czq(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aSV(s)
case 1:return B.h(u,v)}})
return B.i($async$aaz,v)},
Hc(d,e){return this.bDC(0,e)},
bDC(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.czd(e),s,null,!0,!0,x.y),$async$Hc)
case 3:if(g!==!0){w=1
break}t.n(new C.cze(t,e))
w=4
return B.b(t.f,$async$Hc)
case 4:w=5
return B.b(C.adM(t.a.c,e.a),$async$Hc)
case 5:w=6
return B.b(t.Nw(),$async$Hc)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hc,v)},
C_(d){return this.bw_(d)},
bw_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.cz9(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C_)
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
return B.b(t.aTC(0,d),$async$C_)
case 9:w=5
break
case 7:w=10
return B.b(F.fHX(r,d.b,null),$async$C_)
case 10:w=5
break
case 8:w=11
return B.b(t.Hc(0,d),$async$C_)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C_,v)},
bQL(){var w,v,u=null,t=[D.daP,D.daN,D.daO],s=new C.czg(),r=B.m(26),q=x.V,p=B.a([new B.a9(0,A.G,A.dC.j(0.4),A.eH,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b3(999,999)
n.push(B.p(u,new B.w(D.cWt[w],u,A.ov,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bv(v,v,v,v),u,u,A.n),u,u,u,u,A.nn,u,u,u))}return B.p(u,B.A(B.a([B.C(B.u(B.a([D.eVs,A.P,B.cb(A.bH,n,A.bx,6,6),A.aN,B.aJ(u,B.p(u,D.ebb,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.cD,10)],q),u,A.n),u,u,u,u,U.adr,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.czf(this),u,u,u,u,u,u,!1,A.af)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a3(130,110,new B.am(A.B,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bF5,A.n),u,u,u,u,D.bhs,u,u,u)},
bvY(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.a9(0,A.G,A.x.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bu(B.m(6),new B.am(A.V,v,A.aX,A.q,B.a([B.eY(A.B,F.alr(d.b),A.h,A.bM),D.dR4,B.an(v,B.aJ(v,B.p(v,D.byN,A.h,v,v,D.aT0,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cz4(this,d),v,v,v,v,v,v,!1,A.af),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.Z,v,v,v,D.eoS,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fN(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.euT,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cz5(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cz6(this,d),v,v,v,v,v,v,!1,A.af)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.B(H.abZ,B.hJ(B.aJ(s,B.p(s,A.aiv,A.h,s,s,new B.o(s,s,s,s,B.a([new B.a9(0,A.G,A.b0.j(0.5),A.J,12)],x.V),E.uJ,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbY4(),s,s,s,s,s,s,!1,A.af),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mr,s,s,s,!0,s,s,s,s,s,D.eVw,s,s,s,1,s,!0)
if(t.e)r=D.aWe
else{w=t.bQL()
v=B.a([D.eIl,A.ab],r)
if(J.cs(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.eol,s,s,s),A.h,s,s,new B.o(D.b_u,s,s,u,s,s,A.n),s,s,s,s,A.DL,s,s,s))}r=B.a([new B.nn(Ac.Vj,new B.lL(w,s),s),new B.nn(D.bgP,new B.lL(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ch(t.d))r.push(D.egK)
else r.push(new B.nn(D.bgk,B.N1(new B.nX(new C.czr(t),J.aa(t.d),!0,!0,!0,0,B.rg(),s),D.aVw),s))
r=B.uI(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.ce(q,D.aZq,r,s,!1,!1,s,s)}}
C.Wo.prototype={
S(){return new C.auB(B.a([],x.bx))},
S3(d){return this.d.$1(d)}}
C.aBN.prototype={}
C.auB.prototype={
aW8(d,e,f){var w=$.at(),v=new B.ao(new B.bb(d,A.aZ,A.aL),w),u=this.gaTB()
v.aJ(0,u)
w=new B.ao(new B.bb(e,A.aZ,A.aL),w)
w.aJ(0,u)
return new C.aBN(v,w,f)},
CN(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cV(A.oX,new C.cyy(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.at()
u=new B.ao(new B.bb(w.a,A.aZ,A.aL),v)
t=m.gaTB()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ao(new B.bb(w.b,A.aZ,A.aL),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ao(new B.bb(w.c,A.aZ,A.aL),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.ao(new B.bb(p.a,A.aZ,A.aL),v)
o.aJ(0,t)
n=new B.ao(new B.bb(p.b,A.aZ,A.aL),v)
n.aJ(0,t)
r.push(new C.aBN(o,n,p.c))}if(r.length===0)r.push(m.aW8("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goq()
q=r.a
q.S3(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.at()
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
s.O$=0}r.a2()},
goq(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.J)(s),++q){p=s[q]
t.push(new F.m0(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qH(n,w,v,t,u)},
zJ(){var w=0,v=B.j(x.H),u=this,t
var $async$zJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goq()
t=u.a
w=2
return B.b(t.S3(t.c),$async$zJ)
case 2:return B.h(null,v)}})
return B.i($async$zJ,v)},
bY2(){this.n(new C.cyx(this))
this.CN()},
aSD(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.cyA(w,d,v))
w.CN()},
bY3(d,e){var w=A.d.cu(this.w,e)
this.n(new C.cyI())
this.CN()
$.aS.x1$.push(new C.cyJ(w))},
OE(d){return this.ca0(d)},
ca0(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(80,1400,A.et),$async$OE)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$OE)
case 8:p=f
o=q.b.toLowerCase()
n=J.afe(o,".png")?"image/png":"image/jpeg"
r.n(new C.cyB(d,n,p))
r.CN()
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
return B.i($async$OE,v)},
wK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h3b(r,t.goq()),$async$wK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cyz(t,s))
t.CN()
case 1:return B.h(u,v)}})
return B.i($async$wK,v)},
cai(d){var w,v=this,u=null,t=F.fg2(d.c)
if(t==null)return new B.bE(A.a_,u,u,B.hg(D.bsb,D.eKC,new C.cyD(v,d),u),u)
w=x.p
return new B.B(A.cH,new B.am(A.V,u,A.a9,A.q,B.a([B.bu(B.m(12),B.fD(t,A.B,u,u,A.ci,A.bM,!0,140,!1,u,1/0),A.ap),B.an(u,B.A(B.a([v.aZa(A.k_,new C.cyE(v,d)),A.bp,v.aZa(A.cu,new C.cyF(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZa(d,e){var w=null
return B.aD(!1,A.X,!0,w,B.aH(!1,w,!0,new B.B(A.hf,B.V(d,A.c,w,w,w,18),w),A.cE,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cE,w,w,A.ac)},
He(){var w=0,v=B.j(x.H),u,t=this,s
var $async$He=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zJ(),$async$He)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fHX(s,t.goq(),new C.cyH(t)),$async$He)
case 4:case 1:return B.h(u,v)}})
return B.i($async$He,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.B(A.qc,B.hg(D.bwN,D.eQ9,n.gat0(),B.fp(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aiu,m,m,m,new C.cyK(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.TA,m,1,m,m,m,!1,m,!1,E.mr,m,m,m,!0,m,m,m,m,m,D.eLn,m,m,m,1,m,!0),j=An.aQX(O.kR,A.c,A9.SH,A.ns,D.eM3,n.gbY1()),i=B.m(18),h=n.gat_(),g=B.a([new B.a9(0,A.G,A.x.j(0.4),A.jn,12)],x.V)
g=B.aJ(m,B.p(m,new B.a3(92,142.1818181818182,B.eY(A.B,F.alr(n.goq()),A.h,A.dp),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.af)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.en,B.C(B.u(B.a([D.eWX,A.au,B.d(F.fGu(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eAe,m,m,m),A.T,B.dj(E.ahL,E.aL_,h,B.bk(A.dC,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.TA,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ae,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nF,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ae,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ae,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b3(16,16)
u=new B.ax(O.kR.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bvy,m,m,m,v===0?m:new C.cyL(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bBF,m,m,m,v===r-1?m:new C.cyM(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.cyN(n,v)
p=new B.b3(12,12)
o=new B.b3(12,12)
g.push(B.p(m,B.u(B.a([new B.cC(A.aY,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eAJ,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aF(m,m,m,m,B.V(A.e4,A.nX,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e0(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b1(4,new B.bv(p,p,p,p),A.da),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ae,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.cai(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e0(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b1(4,new B.bv(o,o,o,o),A.da),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ae,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mr,m,new B.c2(u,u,u,u),new B.bv(w,w,w,w),m,m,A.n),m,m,new C.a68(h),A.dZ,D.beZ,m,m,m))}return B.nU(!0,B.ce(k,E.aam,B.cL(g,m,D.bfq,m,m,A.ah,!1),m,!1,!1,j,m),new C.cyO(n),x.C)}}
C.auD.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cN:E.mr,q=B.m(16),p=B.m(16),o=s?A.aH.j(0.08):A.c.j(0.04)
s=s?A.aH.j(0.16):A.dC.j(0.22)
w=B.m(12)
v=x.p
return new B.B(A.fh,B.aD(!1,A.X,!0,t,B.aH(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.ba,B.C(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(u.e,t,t,t,t,t,t,D.aJG,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.ek,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anx.prototype={
S(){return new C.aAD()}}
C.aAD.prototype={
Z(){this.a0()
this.Xo()},
bo(d){this.bA(d)
if(d.c!=this.a.c)this.ZG()},
ZG(){var w=0,v=B.j(x.H),u=this,t
var $async$ZG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$ZG)
case 2:u.d=null
if(u.c!=null)u.n(new C.dXm(u))
w=3
return B.b(u.Xo(),$async$ZG)
case 3:return B.h(null,v)}})
return B.i($async$ZG,v)},
Xo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cS(n,"http://")||J.cS(n,"https://")||J.cS(n,"data:")){o=B.W1(B.cq(n,0,null),new B.Np(!0))
r.d=o}else{o=B.fb("unsupported video ref")
throw B.O(o)}w=7
return B.b(o.hW(0).cJ(0,A.oT),$async$Xo)
case 7:if(r.c==null){w=1
break}r.d.rr(!1)
r.n(new C.dXk(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a4(m)
$.ak.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dXl(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xo,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
bZW(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fS(0)
w.n(new C.dXn(w))}else{v.p5(0)
w.n(new C.dXo(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iS.j(0.92),D.Iy.j(0.95)],x.O)
w=B.G(A.bR.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pb,A.bR,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bQ(B.as(B.u(B.a([t,new B.a3(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),A.b7)}if(p.f)return B.as(B.V(A.ah3,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aWY
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eY(A.B,new B.a3(r,q,new B.yZ(s,o),o),A.q,A.bM)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.as(B.p(o,B.V(A.j0,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.L(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bu(n,new B.am(A.V,o,A.aX,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gbZV(),o,o,o,o,o,o,!1,A.af)}}
C.wC.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.j9.prototype={}
C.aaQ.prototype={
B(d){return B.p7(new C.dOL(this,B.K(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aaf.prototype={
B(d){var w,v,u=null,t=B.K(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.G(D.iS.j(t?0.35:0.4),A.r,1),p=t?D.IY:A.c,o=x.V,n=B.a([new B.a9(0,A.G,A.x.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.G(A.bR.j(0.5),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dG,6)],o)
w=this.c
o=B.C(B.p(u,new B.fN(0.5625,C.hHW(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.adT,u,u,u,u),1)
m=D.iS.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iS,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.X,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.d5,B.d(w.c,u,2,A.Z,u,u,u,B.l(u,u,t?A.aB:D.b4K,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c2(new B.ax(m,1,A.r,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.acf,u,u,u)],v),A.ad,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wF.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nd.prototype={}
C.bff.prototype={
U3(d){var w=null
return new B.bE(A.a_,w,w,B.G2(A.B,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bvH(){return this.U3(1)},
atu(d){var w=null,v=B.m(8),u=B.G(A.hE,A.r,0.9)
return B.p(A.B,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8G,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.A(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.G(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.h,v,v,new B.o(v,v,B.G(A.hE,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b5,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atu("TAARIFA ZA WANANDOA"),A.ar,w.bvH(),A.d5,w.U3(0.9),A.d5,w.U3(0.7),A.P,w.atu("TAMKO LA MAKUBALIANO"),A.fW,w.U3(1),A.d5,w.U3(0.95),A.P,w.atu("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.aaT.prototype={
B(d){return B.p7(new C.e1m(B.K(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acw.prototype={
B(d){var w,v,u,t,s,r=null,q=B.K(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.G(A.at.j(q?0.35:0.4),A.r,1),m=q?D.b4o:A.c,l=x.V,k=B.a([new B.a9(0,A.G,A.x.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.G(A.at.j(0.5),A.r,1)
l=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dG,6)],l)
w=this.c
v=C.fGZ(w.a)
if(v==null)v=A.d.gI(D.O6)
u=B.aX(v.f)
t=B.aX(v.r)
s=x.p
l=B.C(B.p(r,new B.fN(0.5625,new B.am(A.V,r,A.aX,A.q,B.a([B.bU(0,B.fD(C.fGY(v.d),A.B,r,r,A.ci,A.bM,!0,r,!1,r,r),0,0,0),new B.B(A.acW,new C.bff(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.adT,r,r,r,r),1)
j=A.at.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:X.IZ,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.d5,B.d(w.c,r,2,A.Z,r,r,r,B.l(r,r,q?A.aB:D.aZS,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c2(new B.ax(j,1,A.r,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.acf,r,r,r)],s),A.ad,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kB.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5C.prototype={}
C.TH.prototype={
S(){var w=$.at()
return new C.aAW(new B.cn(null,x.A),new B.ao(A.aq,w),new B.ao(A.aq,w),B.m6(0,null,null),A.d.gI(D.a_6),D.dl4,B.a([],x.L),B.a([],x.gE))}}
C.aAW.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yo(C.fjU(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fiR().bw(new C.e4E(v),w)
$.tr().jR(0,"assets/images/ngmy_logo.png").bw(new C.e4F(v),w).eL(new C.e4G())},
p(){var w=this,v=w.e,u=$.at()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aeh(d){var w=null,v=this.c
if(v!=null)v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Ht(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Ht=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(88,1600,A.et),$async$Ht)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Ht)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h3s(m,p),$async$Ht)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.byP(new B.ph(o,1),m),$async$Ht)
case 10:if(r.c!=null)r.n(new C.e4g(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a4(k)
r.aeh("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ht,v)},
UL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h3s(s,q),$async$UL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.byP(new B.ph(r,1),s),$async$UL)
case 4:if(t.c!=null)t.n(new C.e4c(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UL,v)},
abf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e4n(q))
t=4
q.a.toString
p=C.hMk()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abf)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4o(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a4(i)
q.aeh(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4p(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abf,v)},
XA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.aa(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e4i(q,i))
t=4
q.a.toString
p=C.hMj()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XA)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4j(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a4(g)
if(q.c!=null)q.n(new C.e4k(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4l(q))
$.aS.x1$.push(new C.e4m(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XA,v)},
c_D(d){this.n(new C.e4h(this,d))},
D1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e4e(q))
t=4
w=7
return B.b($.aS.gm4(),$async$D1)
case 7:w=8
return B.b(B.bK(A.ni,null,x.H),$async$D1)
case 8:k=$.aS.ae$.x.h(0,q.d)
p=k==null?null:k.gb3()
if(!(p instanceof B.q1))throw B.O("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gX(0).a),$async$D1)
case 9:o=e
w=10
return B.b(o.he(A.fI),$async$D1)
case 10:n=e
if(n==null)throw B.O("Could not make the picture.")
w=11
return B.b(A3.adP(J.f2(A.dz.gaL(n)),"ngmy_news.png","image/png"),$async$D1)
case 11:m=e
q.aeh(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
q.aeh(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4f(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D1,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kB,a2,a2,a2,new C.e4v(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bxi,a2,a2,a2,new C.e4w(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.oc,a2,a2,a2,a4?a1.gaUr():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zl,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.ebk,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.a9(0,A.G,A.x.j(0.6),A.eH,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fN(0.7142857142857143,B.eY(A.B,new B.eo(new C.aY7(t,s,r,a1.x,a2),a1.d),A.h,A.dp),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.QT,a2,a2,a2)
t=a1.as?a2:a1.gc_C()
t=B.a([B.C(B.dj(D.by1,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rj,a2,a2,a2,A.c,A.fV,a2,a2,new B.b5(B.m(14),N.vD),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.m(10),B.fD(r,A.B,a2,a2,A.ci,A.bM,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.av,r,B.aF(a2,a2,a2,a2,D.buS,a2,a2,a2,a1.as?a2:a1.gbCf(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.QT,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aO0("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.ae,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cRI[o]
p.push(B.mG(a2,D.rj,new B.w(n.a,a2,A.os,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hk,new C.e4x(a1,n),a2,a2,N.vD,a2))}p=B.cb(A.bH,p,A.bx,6,8)
m=a1.Q
m=B.cb(A.bH,B.a([D.eVF,A.ba,B.jO(a2,a2,a2,D.eHe,a2,new C.e4y(a1),m==="en",a2,a2,a2,a2),A.ab,B.jO(a2,a2,a2,D.eH9,a2,new C.e4z(a1),m==="sw",a2,a2,a2,a2)],w),A.qV,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.QT,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a_6,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gG(0),h.k("bR<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aMz(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.aY,!1)
i=B.a([],w)
for(j=B.dc(D.a_6,10,a2,j),h=j.$ti,j=new B.bR(j,j.gG(0),h.k("bR<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aMz(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.aY,!1)
i=a1.as?a2:a1.gc_F()
h=B.m(18)
v=B.a([new B.a9(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.B(A.cH,s,a2),t,A.ay,new B.B(A.cH,r,a2),q,A.P,p,A.T,m,A.ay,new B.B(A.cH,l,a2),new B.a3(a2,78,k,a2),A.P,new B.a3(a2,78,j,a2),A.aN,B.aJ(a2,B.p(A.B,B.A(B.a([D.bxW,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fL,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.t4,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.af)],w)
if(a4){u=B.a([A.dW,B.A(B.a([D.d5e,A.av,D.bl9],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a_
q=e?A.b0.j(0.35):D.rj
p=new B.b3(16,16)
d=new B.ax(A.bG,1,A.r,-1)
u.push(new B.bE(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eyh,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.Sv,new B.o(q,a2,new B.c2(d,d,d,d),new B.bv(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.iD,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cFp[o]
t.push(B.mG(a2,D.rj,new B.w(a0,a2,A.H6,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hk,new C.e4A(a1,a0),a2,a2,N.vD,a2))}u.push(B.cb(A.bH,t,A.bx,6,8))
u.push(A.T)
t=B.C(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aO0("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.ae,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e4B(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc_E()
u.push(B.A(B.a([t,A.ab,B.G6(A.xi,s,B.ol(a2,A.b0,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaUr()
u.push(B.dj(A.oc,D.eRA,t,B.bk(A.dk,a2,a2,a2,a2,A.GS,a2,a2,new B.b5(B.m(16),A.W),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.acJ,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.x.j(0.55)
t=B.m(20)
s=B.G(E.iQ.j(0.5),A.r,1)
v.push(B.bU(0,B.ec(B.as(B.p(a2,B.A(B.a([E.a3l,A.en,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.ir,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(E.zc,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bhK,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.ce(a3,A.zl,new B.am(A.V,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aO0(d){var w=null
return B.bl(w,new B.b1(4,B.m(14),A.W),w,A.eE,w,w,w,w,!0,w,w,w,w,w,w,D.rj,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Q.H0,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aMz(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aX(d.f),p=s?A.bz:A.bG
p=B.G(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aX(d.x),t,t,t,5,t,A.lT,t,t,t,t),A.fW],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aX(v).j(0.5),t,t,t,2,t,D.be2,t,t,t,t))
w.push(A.d5)
w.push(new B.B(A.jX,B.d(d.b,t,1,A.Z,t,t,t,B.l(t,t,B.aX(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aJ(t,B.p(t,B.u(w,A.m,t,A.b5,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kt,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e4d(this,d),t,t,t,t,t,t,!1,A.af)}}
C.yo.prototype={
b6h(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yo(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cyb(d){var w=null
return this.b6h(w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.D(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
ayF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c6S(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fl(g,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(w,new C.c6Q(),B.T(w).k("I<1,n>")).bZ(0,new C.c6R())
t=B.z(w,w.$ti.k("F.E"))}else t=k
w=h.$1("paper")
w=J.aa(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.aa(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.aa(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b6h(p,r,q,J.aa(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEb(d){return this.f}}
C.rC.prototype={
a3(){return"NewsLayout."+this.b}}
C.Ae.prototype={
a3(){return"NewsFrame."+this.b}}
C.kY.prototype={}
C.aY7.prototype={
qJ(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aX(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1n(d,e,f,g){return this.qJ(d,e,null,1.25,f,A.bg,g)},
PX(d,e,f,g,h){return this.qJ(d,e,f,1.25,g,A.bg,h)},
axc(d,e,f,g,h){return this.qJ(d,e,null,f,g,A.bg,h)},
axb(d,e,f,g,h){return this.qJ(d,e,f,g,0,A.bg,h)},
b1p(d,e,f,g,h){return this.qJ(d,e,null,f,0,g,h)},
coT(d,e,f,g,h,i){return this.qJ(d,e,f,g,0,h,i)},
axa(d,e,f,g){return this.qJ(d,e,null,f,0,A.bg,g)},
afy(d,e,f){return this.qJ(d,e,null,f,0,A.bg,A.cG)},
b1o(d,e,f,g,h){return this.qJ(d,e,f,g,0,h,A.cG)},
coS(d,e,f,g){return this.qJ(d,e,null,f,0,g,A.cG)},
coR(d,e,f,g){return this.qJ(d,e,f,g,0,A.bg,A.cG)},
afz(d,e,f,g,h,i){return this.qJ(d,e,f,g,h,A.bg,i)},
aUs(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ma(new B.ez(d,u,u,A.cT,u,u,u,u,u,u,new B.E(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.cn,new B.kc(1),u,u,h,u,A.cm,u)
v.EL(g)
if(!v.b.a.c.gaAh())return w
w-=2}return j},
abg(d,e,f,g,h,i,j,k){return this.aUs(d,e,f,g,h,i,j,k,A.bg)},
avA(d,e,f){var w=null,v=d==null?B.aX(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a3(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
avz(d){return this.avA(null,!1,d)},
ae5(d,e){return this.avA(null,d,e)},
cgJ(d,e){return this.avA(d,!1,e)},
gaWv(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaQx(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
MW(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abg(w.gaQx(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQx(),v,g,A.Z,v,v,v,w.axb(u,t,f,1.02,A.O),e,v,v)},
aQC(d){return this.MW(d,A.L,null,2,78,30)},
a8S(d,e,f,g,h){return this.MW(d,e,null,f,g,h)},
bQD(d,e,f,g,h){return this.MW(d,A.L,e,f,g,h)},
bQC(d,e,f){return this.MW(d,A.L,null,e,f,30)},
PT(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.B(A.ku,B.d(s,u,g,A.Z,u,u,u,v.b1o(w,v.aUs(t,w,A.cG,d,g,h,15,1.2,A.cz),f,1.2,A.cz),e,u,u),u)},
b15(d){return this.PT(d,A.L,null,3,24)},
ax1(d,e,f,g){return this.PT(d,e,null,f,g)},
cnW(d,e,f){return this.PT(d,A.L,e,3,f)},
b16(d,e){return this.PT(d,e,null,3,24)},
cnU(d,e){return this.PT(d,A.L,null,3,e)},
cnV(d,e,f){return this.PT(d,e,null,3,f)},
anv(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.B(A.ig,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PX("Roboto",12,d==null?B.aX(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.C(B.p(v,v,A.h,B.aX(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.C(B.p(v,v,A.h,B.aX(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LU(){return this.anv(null,!0)},
anu(d){return this.anv(null,d)},
byg(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.B(A.iW,new B.a3(d,w,B.d(v,w,2,A.Z,w,w,w,this.coS(this.d.as,13.5,1.2,A.cz),e,w,w),w),w)},
uG(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.N(Date.now(),0,!1),i=m.gaWv(),h=A.o.ak(j.bv(B.bY(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hAh(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1n(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abg(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abg(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aX(h.x)
h=h.ch?B.aX(h.f):A.c
s=x.p
return B.u(B.a([B.p(l,B.A(B.a([B.C(B.d(i.toUpperCase(),l,1,A.eA,l,l,l,m.afz(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.L(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.by4(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hu,A.j,0,l,l),A.ar,m.ae5(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.u(B.a([B.A(B.a([B.p(l,l,A.h,B.aX(h),l,l,l,u*0.8,l,l,l,l,l,14),A.en,B.C(B.d(i,l,1,A.eA,l,l,l,m.axa(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.A(B.a([B.d(C.by4(j),l,l,l,l,l,l,m.PX(k,13,B.aX(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hu,A.j,0,l,l),A.P,m.cgJ(B.aX(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaWv()
v=B.d("NGMY",l,l,l,l,l,l,m.axc(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aX(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.x:A.c
h=h.w
n=x.p
return B.u(B.a([B.A(B.a([v,A.ab,B.et(A.B,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qJ(k,r*0.72,o,1.05,-0.5,A.cz,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.L(t,s,t,s),l,l,l),l),A.b6,new B.dk(1,A.cj,B.d(w.toUpperCase(),l,2,A.Z,l,l,l,m.afz(k,12.5,B.aX(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aX(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hu,A.j,0,l,l)
t=m.ae5(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axa(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.u(B.a([w,A.au,t,new B.a3(l,s,l,l),v,new B.a3(l,q,l,l),m.ae5(!0,1.4),A.au,B.d(C.by4(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.avz(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.u(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axc(v,u,1,3,A.O),A.L,l,l),A.P,m.ae5(!0,1.2),A.au,B.A(B.a([B.d(C.by4(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hu,A.j,0,l,l),A.au,m.avz(3)],h),A.m,l,A.e,A.j,0,A.p)}},
a9Z(d){return this.uG(d,!1)},
abh(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aX(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afz("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.L(v,u,v,u),w,w,w)},
c_G(d,e){return this.abh(d,null,e,null)},
aSv(d){var w=null,v=new B.N(Date.now(),0,!1),u=A.o.J(B.dn(v),12)===0?12:A.o.J(B.dn(v),12),t=B.aX(this.d.w).j(0.75),s=this.axb("Roboto",15,t,1,A.cp),r=B.V(E.aff,t,w,w,w,18),q=A.a.al(A.pe[B.bB(v)-1],0,3),p=A.a.aT(A.o.u(B.hn(v)),2,"0"),o=B.dn(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bL(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fu,w,w,w,1),B.V(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asw(){return this.aSv(A.lZ)},
aZo(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.Z,w,w,w,this.afz("Roboto",this.abg(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
avD(d,e,f){return this.aZo(d,e,f,30)},
ax4(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.B(A.u9,B.d(v,w,e,A.Z,w,w,w,this.coR("Roboto",f,B.aX(this.d.w).j(0.88),1.35),w,w,w),w)},
b1a(d){return this.ax4(d,3,22)},
co6(d,e){return this.ax4(d,e,22)},
rL(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fD(r,A.B,s,s,A.ci,A.bM,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Fz(D.bkn,w,s)
if(v==="sepia")w=new B.Fz(D.bkm,w,s)}else{r=this.d
v=r.w
u=B.aX(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.V(A.wI,B.aX(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bQ(s,new B.o(s,s,s,s,s,new B.bS(A.B,0.95,A.w,s,0,B.a([A.K,A.Tw.j(0.38)],x.O),s,s),A.n),A.b7))
return new B.a3(d,e,new B.am(A.V,s,A.aX,A.q,v,s),s)},
pB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.G(B.aX(j),A.r,3)
j=B.G(B.aX(j),A.r,1)
return B.p(k,B.p(k,l.rL(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ef,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lU,k,k,d)
case 2:w=B.a([new B.a9(0,A.G,A.x.j(0.35),D.dJM,14)],x.V)
v=l.rL(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.et(A.B,-0.035,B.p(k,B.u(B.a([v,B.C(B.as(B.d(u,k,2,A.Z,k,k,k,l.b1o(j.as,13.5,D.b0d,1.1,A.cz),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b2V,k,k,k,w,k,A.n),k,e,k,k,D.bfl,k,k,d),k)
case 3:w=B.m(30)
j=B.G(B.aX(j.x),A.r,5)
return B.p(k,B.bu(B.m(25),l.rL(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.G(B.aX(j.x),A.r,6)
j=B.aX(j.f)
v=t-10
return new B.a3(d,e,B.as(B.p(k,B.hN(l.rL(v,v),A.ap),A.h,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lU,k,k,t),k,k,k),k)
case 5:j=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dJD,10)],x.V)
return B.et(A.B,0.025,new B.a3(d,e,new B.am(A.V,k,A.a9,A.h,B.a([B.bU(0,B.p(k,l.rL(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qe,k,k,k),0,0,0),B.an(k,B.et(A.B,-0.6,B.p(k,k,A.h,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.et(A.B,-0.6,B.p(k,k,A.h,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aX(j.x)
return new B.a3(d,e,B.b2(B.n2(l.rL(d,e),A.ap,D.f2a),new C.b8u(j,k),k,k,A.as),k)
case 7:j=x.p
w=B.a([l.rL(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bK(u));++n){m=new B.b3(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.cf,k,k,new B.bv(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cE(0,q,0,p,k,k,new B.cC(A.aY,A.qv,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.V,k,A.aX,A.q,w,k),A.h,A.el,k,k,k,e,k,k,D.bjG,k,k,d)
case 8:w=d/2
v=B.w3(A.fU,new B.b3(w,w))
j=B.G(B.aX(j.x),A.r,5)
w-=5
return B.p(k,B.bu(B.w3(A.k7,new B.b3(w,w)),l.rL(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.a9(0,A.G,A.x.j(0.35),A.fz,22)],x.V)
return B.p(k,l.rL(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a3(d,e,B.n2(l.rL(d,e),A.ap,D.f7H),k)
case 0:j=B.G(B.aX(j.w),A.r,2.4)
return B.p(k,l.rL(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ef,k,k,d)}},
aKc(d,e){return this.d.e===D.OH?A.bF:this.byg(d,e)},
Uj(d){return this.aKc(d,A.L)},
gawo(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awn(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.G(B.aX(v.w),A.r,1.6)
t=v.x
s=B.aX(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.C(B.as(B.d("\u201c"+m+"\u201d",n,7,A.Z,n,n,n,o.b1p(v.Q,19,1.15,A.cz,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.Z,n,n,n,o.PX("Roboto",12.5,B.aX(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.C(B.d(m,n,9,A.Z,n,n,n,o.afy(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jy(B.u(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gc7y(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6E(d,e,f,g){return B.cj(new C.c6T(this,e,d,f,g))},
a6D(d){return this.a6E(d,22,!0,18)},
Uu(d,e){return this.a6E(d,22,!0,e)},
aLe(d,e,f){return this.a6E(d,22,e,f)},
bAc(d,e,f){return this.a6E(d,e,!0,f)},
b42(d,e,f,g){return B.cj(new C.c6U(this,e,d,g,!0,f))},
c6n(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.u(B.a([k.a9Z(824),A.ay,k.aQC(824),k.b15(824),A.P,k.LU(),A.aa,B.as(k.pB(824,360),j,j,j),k.Uj(824),A.aa,B.C(k.a6D(3),1)],x.p),A.ad,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.u(B.a([k.a9Z(824),A.aN,new B.a3(j,350,B.A(B.a([new B.a3(440,j,B.u(B.a([k.a8S(440,A.bf,3,62,26),k.ax1(440,A.bf,2,20),A.b6,k.anv(B.aX(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.GT,B.u(B.a([k.pB(362,310),k.Uj(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.avz(2),A.aa,B.C(k.a6D(3),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 2:w=k.uG(824,!0)
v=B.aX(h.x)
u=h.ch
t=x.p
s=B.a([k.bQD(788,u?B.aX(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cnW(788,u?B.aX(h.f):A.c,22))
v=B.p(j,B.u(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zG,j,j,j)
u=B.a([B.as(k.pB(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.OH){h=A.x.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.Z,j,j,j,k.axb(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.ln,j,j,j),j,j,0,0,j,j))}return B.u(B.a([w,A.aa,v,A.aa,new B.am(A.V,j,A.a9,A.q,u,j),A.P,k.LU(),A.T,B.C(k.Uu(2,21),1)],t),A.ad,j,A.e,A.j,0,A.p)
case 3:h=k.uG(824,!0)
w=k.pB(824,560)
v=B.a([A.K,A.x.j(0.85)],x.O)
u=x.p
return B.u(B.a([h,A.aa,new B.am(A.bb,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.MW(780,A.bf,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a8(A.b4,A.bb,A.w,v,j,j),A.n),j,j,j,j,D.bi1,j,j,j),j,j,0,0,j,j)],u),j),k.b16(824,A.bf),A.P,k.LU(),A.T,B.C(k.a6D(3),1)],u),A.ad,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.u(B.a([k.a9Z(824),A.ay,k.aQC(824),k.b15(824),A.P,k.LU(),A.aa,B.C(k.b42(3,300,B.u(B.a([k.pB(300,300),k.Uj(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ad,j,A.e,A.j,0,A.p)
case 5:w=k.uG(824,!0)
v=x.p
u=B.u(B.a([k.a8S(440,A.bf,3,62,26),k.ax1(440,A.bf,2,20),A.b6,k.anu(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.u(B.a([w,A.bs,new B.a3(j,400,B.A(B.a([new B.a3(440,j,u,j),A.aHK,new B.B(A.iW,k.pB(364,h.e===D.OH?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.C(k.Uu(2,21),1)],v),A.ad,j,A.e,A.j,0,A.p)
case 6:return B.u(B.a([k.a9Z(824),A.aa,k.bQC(824,2,70),k.cnU(824,21),A.P,k.LU(),A.aa,B.C(k.b42(3,340,B.as(k.pB(340,340),j,j,j),350),1)],x.p),A.ad,j,A.e,A.j,0,A.p)
case 7:w=k.uG(824,!0)
v=B.aX(h.x)
u=Date.now()
u=C.by4(new B.N(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PX(i,13,h.ch?B.aX(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bk,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1p(h.Q,24,1.15,A.cz,A.O),j,j,j))
v.push(A.b6)
if(k.gawo())v.push(k.awn(230,250))
return B.u(B.a([w,A.ay,B.C(B.A(B.a([new B.a3(230,j,B.u(v,A.ad,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aX(h.w),j,j,j,j,j,A.ace,j,j,j,1.2),new B.a3(570,j,B.u(B.a([k.a8S(570,A.bf,3,62,28),k.cnV(570,A.bf,20),A.P,k.anu(!1),A.P,B.as(k.pB(570,330),j,j,j),k.Uj(570),A.T,B.C(k.aLe(2,!1,17),1)],t),A.ad,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ad,j,A.e,A.j,0,A.p)
case 8:w=k.uG(824,!0)
v=h.ch
u=v?B.aX(h.x):B.aX(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PX(i,13,v?A.x:B.aX(h.x),3,A.u),j,j,j)
s=x.p
return B.u(B.a([w,A.aa,B.p(j,B.u(B.a([t,A.ar,k.MW(788,A.bf,v?A.x:B.aX(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bgn,j,j,j),k.b16(824,A.bf),A.T,B.as(k.pB(824,310),j,j,j),k.Uj(824),A.P,k.LU(),A.T,B.C(k.a6D(3),1)],s),A.ad,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.u(B.a([k.uG(824,!0),A.aN,new B.am(A.V,j,A.a9,A.q,B.a([k.pB(824,430),B.an(18,k.c_G(k.c.b,17),j,j,18,j,j,j)],w),j),A.bs,k.avD(824,3,66),k.b1a(824),A.aa,B.p(j,j,A.h,B.aX(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.asw(),A.ay,B.C(k.Uu(2,18),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.u(B.a([k.uG(824,!0),A.bs,new B.a3(j,500,B.A(B.a([new B.a3(410,j,B.u(B.a([k.abh(k.c.b,B.aX(h).j(0.14),15,B.aX(h)),A.aN,k.aZo(410,4,58,28),k.ax4(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aHL,k.pB(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asw(),A.aN,B.C(k.Uu(2,18),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 12:w=k.uG(824,!0)
v=k.pB(824,420)
u=B.hdy(-0.25)
t=B.aX(h.x)
s=B.a([new B.a9(0,A.G,A.x.j(0.4),A.J,10)],x.V)
r=x.p
return B.u(B.a([w,A.aN,new B.am(A.V,j,A.a9,A.q,B.a([v,B.an(22,B.fm(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.coT(i,30,A.c,1,A.cz,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bih,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bs,k.avD(824,3,62),k.b1a(824),A.aa,B.p(j,j,A.h,B.aX(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.aSv(A.kZ),A.ay,B.C(k.Uu(2,18),1)],r),A.ad,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uG(824,!0)
u=h.w
t=x.p
w=B.a([k.pB(824,380),B.an(j,k.abh(w.b,B.aX(u).j(0.85),15,B.aX(h.f)),j,j,16,j,16,j)],t)
s=k.avD(824,2,60)
r=k.co6(824,2)
p=k.asw()
o=B.C(k.aLe(2,!1,18),1)
n=B.G(B.aX(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aX(h).j(0.05)
return B.u(B.a([v,A.aN,new B.am(A.V,j,A.a9,A.q,w,j),A.aN,s,r,A.T,p,A.ay,o,A.aa,B.p(j,B.A(B.a([B.bu(B.m(14),k.rL(150,104),A.ap),A.nC,B.C(B.u(B.a([k.abh("RELATED",B.aX(h).j(0.14),12,B.aX(h)),A.P,B.d(q,j,2,A.Z,j,j,j,k.axa(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.R,0,A.p),1),B.V(A.ek,B.aX(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.ad,j,A.e,A.j,0,A.p)
case 9:return B.u(B.a([k.uG(824,!0),A.bs,k.a8S(824,A.bf,3,62,30),k.ax1(824,A.bf,2,22),A.T,k.anu(!1),A.T,B.as(k.pB(824,330),j,j,j),k.aKc(824,A.bf),A.aN,B.C(k.bAc(2,40,21),1)],x.p),A.ad,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bU(0,B.bQ(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aE,A.w,B.a([B.aX(p),B.aX(q.r)],x.O),s,s),A.n),A.b7),0,0,0)],o)
if(q.ax)n.push(B.bU(0,B.b2(s,s,s,new C.b53(B.aX(q.w),s),A.as),0,0,0))
w=q.w
n.push(new B.B(D.biM,B.u(B.a([B.C(t.c6n(),1),A.P,B.p(s,s,A.h,B.aX(w),s,s,s,1.4,s,s,s,s,s,s),A.fW,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1n(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PX(r,11,B.aX(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hu,A.j,0,s,s)],o),A.ad,s,A.e,A.j,0,A.p),s))
v=B.aX(w)
n.push(B.bU(0,B.e8(B.b2(s,s,s,new C.bni(v.j(q.ch?0.07:0.06),s),A.as),!0,s),0,0,0))
p=B.aX(p).j(0.75)
v=B.G(B.aX(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hN(B.fD(q,A.B,s,s,A.ci,A.bM,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.lZ,B.aX(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axc(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e8(B.d4(B.p(s,B.A(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bjO,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a3(900,1260,B.jy(new B.am(A.V,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8v.prototype={
iE(d){return C.fU4(d)},
jg(d){return!1}}
C.b8u.prototype={
a5(d,e){var w,v=C.fU4(e)
$.a1()
w=B.U()
w.r=this.b.gt(0)
w.b=A.ak
w.c=6
return d.b4(v,w)},
ao(d){return!d.b.A(0,this.b)}}
C.bpM.prototype={
iE(d){var w,v,u,t,s,r,q,p,o=new B.f6()
o.dY(3)
w=$.a1()
v=B.a([],x.v)
u=new B.b0(w.r,A.aw,null,null,v)
u.N(new B.bj(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.av(s,o.ag()*14)
v.push(w)
r=u.f
if(r!=null)w.bH(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.N(new B.av(t,8))
w=d.b
r=w-8
u.N(new B.av(t,r))
for(;t>0;t-=14){q=new B.av(t,w-o.ag()*14)
v.push(q)
p=u.f
if(p!=null)q.bH(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.N(new B.av(0,r))
u.N(new B.bW())
return u},
jg(d){return!1}}
C.b53.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f6()
k.dY(7)
$.a1()
w=B.U()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ag()*0.07).gt(0)
q=k.ag()
p=k.ag()
o=k.ag()
n=w.L()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ag()*u
p=k.ag()*t
m=50+k.ag()*90
w.sav(new B.bS(A.B,0.5,A.w,l,0,B.a([A.Iz.j(0.13),A.K],v),l,l).aB(0,B.c1(new B.v(q,p),m)))
n=w.L()
s.drawCircle(q,p,m,n)
n.delete()}w.sav(l)},
ao(d){return!1}}
C.bni.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.j0(u,u,u,u,B.dr(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.cn,u,A.eL,A.cm)
s.fD()
w=d.a
J.bP(w.save())
w.translate(t/2,e.b*0.52)
d.q1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.v(-v/2,-t.gbd(t)/2))
w.restore()},
ao(d){return!d.b.A(0,this.b)}}
C.TK.prototype={
S(){return new C.aB_()}}
C.aB_.prototype={
Z(){var w=this
w.a0()
B.h_J(w.a.c,null).bw(new C.e5P(),x.g7).bw(new C.e5Q(w),x.a)
w.a.toString},
gaJ1(){var w=D.apC[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaty(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJ1()
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
return new B.af(q,w,q+s,w+t)},
XC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e5C(r))
t=4
q=r.gaty()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.a1()
n=new B.rs()
m=B.Fw(n,null)
i=B.U()
i.Q=A.fG
m.Av(g,q,new B.af(0,0,0+p,0+o),i)
w=7
return B.b(n.pM().yk(J.fJU(p),J.fJU(o)),$async$XC)
case 7:l=e
w=8
return B.b(l.he(A.fI),$async$XC)
case 8:k=e
j=r.c
if(j!=null){j=B.a7(j,!1)
i=k
i.toString
j.K(J.f2(J.vY(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e5D(r))
r.c.F(x.q).f.P(D.ejk)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XC,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kB,s,s,s,new C.e5J(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bG(!1,D.eTR,s,s,!0,s,s,t.y||r==null?s:t.gc_H(),s,s)],p),s,s,!0,!0,A.zl,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.eXx,s,s,s,1,s,!0)
if(r==null)p=A.lH
else{w=B.C(new B.B(A.c1,B.as(new B.fN(t.gaJ1(),B.cj(new C.e5K(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.B(A.kt,B.jO(s,s,s,new B.w(D.apC[u].a,s,E.aJu,s,s,s,s,s,s,s,s,s),s,new C.e5L(t,u),t.e===u,s,s,s,s),s))
p=B.u(B.a([w,B.p(s,B.br(!0,B.u(B.a([new B.a3(s,40,B.cL(v,s,s,s,s,A.aY,!1),s),B.A(B.a([D.byE,B.C(B.m8(s,s,s,6,1,new C.e5M(t),t.f),1),D.byf],p),A.m,s,A.e,A.j,0,s,s),D.eRu,A.ar,B.bG(!1,D.eRf,s,s,!0,s,s,new C.e5N(t,d),s,s)],p),A.m,s,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,D.TK,s,s,s,s,s,s,D.bfI,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.ce(q,A.zl,p,s,!1,!1,s,s)}}
C.b81.prototype={
a5(d,e){var w
$.a1()
w=B.U()
w.Q=A.ci
return d.Av(this.b,this.c,new B.af(0,0,0+e.a,0+e.b),w)},
ao(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.YH.prototype={
S(){var w=$.at(),v=x.A
return new C.aCh(new B.ao(A.aq,w),new B.ao(new B.bb("NGMY",A.aZ,A.aL),w),new B.cn(null,v),new B.cn(null,v),A.d.gI(D.a_C),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o4.prototype={}
C.aCh.prototype={
gaQJ(){var w,v,u=this
if(u.p1)w=new B.xT(1,u.p2,0.9,u.p3).iR().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aS.x1$.push(new C.eCo(w))},
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tr().jR(0,"assets/images/ngmy_logo.png"),$async$Wn)
case 7:q=e
p=J.f2(J.vY(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.byP(new B.ph(p,1),o),$async$Wn)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eBg(r,p))
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
return B.i($async$Wn,v)},
O2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().kA(92,1800,A.et),$async$O2)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$O2)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.byP(new B.ph(p,1),n),$async$O2)
case 9:if(r.c==null){w=1
break}r.n(new C.eBE(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a4(l)
n=r.c
if(n!=null)n.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O2,v)},
aYN(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aA=w.aK=w.az=w.aq=w.Y=w.b1=w.bc=w.y2=0
w.aZ=null
w.aW=0.25
w.b6=null
w.bE=0.5
w.aM=1
w.ci=w.bQ=w.bg=0
w.cT=w.cQ=!1},
aSf(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvB(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cTW)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvB(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvB(C.fF4(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvB(C.fF4(1-a0*0.5,n,n,n),w)}return a1?C.bvB(C.fF4(-1,255,255,255),w):w},
ax9(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).kr(0,this.d.a.a),t=B.z(u,B.a2(u).k("F.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.ye(u,v,w)
this.dx.pt(new C.eBO(t),!0)
return t},
b0g(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.ax9()
w=C.hK3(e.d.a.a,e.db)
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
return C.hGC(d,k,v,a0,j,e.gaQJ(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
clZ(){return this.b0g(null)},
BZ(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$BZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aS.gm4(),$async$BZ)
case 3:w=4
return B.b(B.bK(A.eU,null,x.H),$async$BZ)
case 4:w=5
return B.b($.aS.gm4(),$async$BZ)
case 5:s=$.aS.ae$.x.h(0,t.r)
r=s==null?null:s.gb3()
if(!(r instanceof B.q1)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gX(0).a),$async$BZ)
case 7:w=6
return B.b(e.he(A.fI),$async$BZ)
case 6:q=e
u=q==null?null:J.f2(A.dz.gaL(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$BZ,v)},
a7t(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7t=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eB_(q))
t=4
w=7
return B.b(q.BZ(),$async$a7t)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cM.gcq().aE(p)
n=C.Aq(null,null,null,null,D.nx,6,!1,null,null,null,null,null,C.cx(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0g(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a7(l,!1).K(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a4(j)
l=q.c
if(l!=null)l.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eB0(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7t,v)},
zr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eAY(q))
t=4
w=7
return B.b($.aS.gm4(),$async$zr)
case 7:w=8
return B.b(B.bK(A.o_,null,x.H),$async$zr)
case 8:w=9
return B.b($.aS.gm4(),$async$zr)
case 9:k=$.aS.ae$.x.h(0,q.f)
p=k==null?null:k.gb3()
if(!(p instanceof B.q1))throw B.O("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gX(0).a),$async$zr)
case 10:o=e
w=11
return B.b(o.he(A.fI),$async$zr)
case 11:n=e
if(n==null)throw B.O("Could not make the picture.")
w=12
return B.b(A3.adP(J.f2(A.dz.gaL(n)),"ngmy_quote.png","image/png"),$async$zr)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.F(x.q).f
k.P(B.b_(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
k=q.c
if(k!=null)k.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eAZ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zr,v)},
c9s(){var w=this.p4
w.toString
return B.cj(new C.eBx(this,w))},
aUz(d,e){var w=null
return B.bl(w,w,w,w,w,D.et7,w,w,!0,new B.b1(4,B.m(16),N.vD),w,w,w,w,w,D.rj,!0,w,w,w,w,new B.b1(4,B.m(16),D.aPS),w,w,w,w,w,w,w,w,Z.BL,e,w,w,w,w,w,w,w,D.ey8,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wQ(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b0,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aKd,w,w,w))
return new B.B(D.bdJ,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aUy(d,e){var w=null,v=B.m(18),u=B.G(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.X,!0,w,d,A.h,w,0,w,w,w,w,w,A.ji),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uL(d){return this.aUy(d,A.bA)},
nx(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t4:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.G(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.ja,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.ja,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.dg(r,B.A(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b9,new B.o(w,r,u,v,r,p,A.n),A.hG,r,r,r,A.Dw,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.af)},
ad4(d,e,f){return this.nx(d,null,e,f)},
atC(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b0.j(0.28):A.c.j(0.05),t=g?A.eN:A.bG,s=x.p
v=B.a([B.dg(w,d,w,w,A.b9,new B.o(u,w,B.G(t,A.r,g?2:1),v,w,w,A.n),A.hG,w,e,w,new B.L(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.Z,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a3(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.af)},
aUC(d,e,f,g,h,i){return this.atC(d,e,f,g,h,5,i)},
jJ(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.C(B.d(d,u,u,u,u,u,u,D.eqe,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dMw,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eBK(this,h,i),u,u,u,u,u,u,!1,A.af))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJm,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VJ,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.ash(w).czx(A.b0,A.bG,A.b0.j(0.2),A.c,D.eaG,4)
return new B.B(A.wg,B.u(B.a([s,B.a7E(B.m8(u,u,u,g,f,new C.eBL(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
af4(d,e,f,g,h,i){return this.jJ(d,e,f,g,h,null,i)},
afu(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.aX(u)
r=d==u
q=r?A.c:A.be
p=new B.ax(q,r?3:1,A.r,-1)
t=t?D.brO:o
n.push(B.aJ(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eBN(this,e,u),o,o,o,o,o,o,!1,A.af))}return B.cb(A.bH,n,A.bx,10,10)},
bEh(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_C
else{v=x.a8
w=B.z(new B.a5(D.a_C,new C.eAQ(o),v),v.k("F.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aUz("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ae,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eAR(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4k,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aUz("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ae,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eAS(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.am,n,n,n,n)
t=o.wQ("DESIGNS",A.rT)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cxF[q]
r.push(new B.B(A.kt,o.ad4(p,o.x===p,new C.eAT(o,p)),n))}return B.u(B.a([v,A.T,u,t,B.cf(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aY),A.aa,new B.a3(n,118,B.hF(n,new C.eAU(o,w),w.length,n,n,A.aY,new C.eAV(),!1),n),A.P,o.aUy(B.u(B.a([B.it(A.b0,n,n,A.ag,!0,new C.eAW(o),n,D.eJl,n,D.eG0,o.k3),B.it(A.b0,n,n,A.ag,!0,new C.eAX(o),n,n,n,D.eDq,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acI)],s),A.F,n,A.e,A.j,0,A.p)},
cud(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.ax9()
if(a7.length===0)return a5.uL(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hd,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ad('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.al(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gai(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("ck.E"))
A.d.fv(m)
l=m.length!==0&&A.d.e7(m,new C.eCd(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eCk(a5)
j=new C.eCm()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hd,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b3(11,11)
f=u.q(0,h)?A.b0.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eN:A.bG
d=new B.ax(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a1
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.E(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.bv(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.K8,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eCe(a5,h),a6,a6,a6,a6,a6,a6,!1,A.af))}o=a5.uL(B.cb(A.bH,o,A.qV,6,6))
i=B.a([a5.nx("All words",K.agM,!1,new C.eCf(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ad4("Sentence "+a3,!1,new C.eCg(a5,a7,v,a2)))
a2=a3}}i.push(a5.ad4("Clear picks",!1,new C.eCh(a5)))
i=B.cb(A.bH,i,A.bx,8,8)
g=a5.wQ("SIZE OF THE PICKED WORDS",D.agd)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cYQ[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eCi(e,k)
f.push(a5.ad4(a0.b,l===a4,e))}return B.u(B.a([q,A.T,o,A.T,i,g,B.cb(A.bH,f,A.bx,8,8),A.T,a5.nx("Make every word normal",A.mG,!1,new C.eCj(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cpA(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bkO,B.d(A.d.kU(D.arg,new C.eBX(q)).b,p,p,p,p,p,p,D.erI,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cj(new C.eBY(q)),l=q.wQ("HIGHLIGHT BEHIND THE WORDS",A.Xy),k=q.p1?-1:q.k4
k=q.afu(k,new C.eBZ(q),D.cHb)
w=q.p1
v=w?A.c:A.be
n=B.a([n,A.T,m,l,B.cb(A.bH,B.a([k,B.aJ(p,B.p(p,D.buM,A.h,p,p,new B.o(p,p,B.G(v,A.r,w?3:1),p,p,D.elW,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eC1(q),p,p,p,p,p,p,!1,A.af)],o),A.qV,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hd,p,p,p)],o)
if(q.gaQJ()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.af4("Colour",l,0,360,new C.eC2(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.af4("Shade",k,0.15,0.9,new C.eC3(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jJ("Strength",l,0.15,1,new C.eC4(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uL(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wQ("LOOK",A.Ai))
m=B.a([q.nx("Bold",I.aga,q.fy,new C.eC5(q)),q.nx("Italic",I.agb,q.go,new C.eC6(q))],o)
for(u=0;u<3;++u){l={}
k=D.cyK[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t4:p
w=w?p:A.c.j(0.07)
s=new B.b3(14,14)
r=new B.ax(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.bv(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eC7(l,q),p,p,p,p,p,p,!1,A.af))}n.push(B.cb(A.bH,m,A.qV,8,8))
n.push(q.wQ("COLOUR",A.nq))
n.push(q.afu(q.fx,new C.eC8(q),D.cRc))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hd,p,p,p))
n.push(q.wQ("SIZE AND PLACE",A.Ep))
m=q.fr
m=q.jJ("Text size",m,0.5,1.6,new C.eC_(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uL(B.u(B.a([m,q.jJ("Up / down",l,0.12,0.5,new C.eC0(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
c9t(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.G(A.b0.j(0.6),A.r,1.6)
u=B.a([A.b0.j(0.18),A.bz.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bzZ,A.h,p,p,D.aSJ,p,62,p,p,p,p,p,62),A.ay,D.eH7,A.ar,D.eLl],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rj,p,v,w,p,new B.a8(A.a_,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bgU,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaUB(),p,p,p,p,p,p,!1,A.af)}w=x.p
v=B.A(B.a([B.bu(B.m(12),new B.a3(46,62,B.fD(o,A.B,120,p,A.ci,A.bM,!1,p,!1,p,p),p),A.ap),A.ba,B.C(B.u(B.a([D.eGI,A.P,B.cb(A.bH,B.a([q.nx("Change",A.k_,!1,q.gaUB()),q.nx("Remove",A.e4,!1,new C.eBB(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cO1[t]
u.push(q.nx(s.b,s.a,q.at===t,new C.eBC(q,t)))}u=B.cb(A.bH,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bUm(o)
break A}if(1===r){s=q.bTr()
break A}if(2===r){s=q.bAb()
break A}if(3===r){s=q.bGi()
break A}s=q.bCg()
break A}return B.u(B.a([v,A.aa,u,A.ay,s,A.T,new B.bE(A.a_,p,p,q.nx("Reset the whole picture",A.mG,!1,new C.eBD(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bUm(d){var w=this,v=x.p
return B.u(B.a([B.cb(A.bH,B.a([w.nx("Auto enhance",E.X9,!1,new C.eBt(w)),w.nx("Make words easy to read",A.oa,!1,new C.eBu(w))],v),A.bx,8,8),A.ay,B.cj(new C.eBv(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bTr(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jJ("Exposure",n,-1.5,1.5,new C.eB7(o),0,A.k.ab(n,1))
w=o.RG
w=o.jJ("Brightness",w,-0.5,0.5,new C.eB8(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jJ("Contrast",v,0.4,2,new C.eB9(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jJ("Fade",u,0,1,new C.eBa(o),0,""+A.k.U(u*100))
t=o.az
t=o.jJ("Spotlight",t,0,1,new C.eBb(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jJ("Darken",s,0,0.85,new C.eBc(o),0,""+A.k.U(s*100))
r=o.b1
r=o.jJ("Vignette",r,0,0.9,new C.eBd(o),0,""+A.k.U(r*100))
q=o.aA
q=o.jJ("Shade behind words",q,0,0.85,new C.eBe(o),0,""+A.k.U(q*100))
p=o.aK
return o.uL(B.u(B.a([n,w,v,u,t,s,r,q,o.jJ("Shade top & bottom",p,0,0.85,new C.eBf(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bAb(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jJ("Colour strength",q,0,2.2,new C.eAt(s),1,""+A.k.U(q*100))
w=s.to
w=s.jJ("Warmth",w,-1,1,new C.eAu(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jJ("Tint",v,-1,1,new C.eAv(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uL(B.u(B.a([q,w,v,s.jJ("Shift colours",u,-180,180,new C.eAw(s),0,""+A.k.U(u)+"\xb0"),new B.bE(A.a_,r,r,s.nx("Negative",D.bpN,s.y1,new C.eAx(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wQ("COLOUR WASH",A.L3)
w=s.aZ
q=B.a([null],x.Z)
A.d.v(q,D.aq2)
t=B.a([u,v,s.afu(w,new C.eAy(s),q),A.P],t)
if(s.aZ!=null){q=s.aW
t.push(s.uL(s.af4("Wash strength",q,0,0.9,new C.eAz(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bGi(){var w,v,u,t,s,r=this,q=r.y2
q=r.jJ("Blur",q,0,24,new C.eB1(r),0,A.o.u(A.k.U(q)))
w=r.bc
w=r.jJ("Soft focus",w,0,1,new C.eB2(r),0,""+A.k.U(w*100))
v=r.aq
u=x.p
v=r.uL(B.u(B.a([q,w,r.jJ("Film grain",v,0,1,new C.eB3(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wQ("LIGHT LEAK",H.ag8)
q=r.b6
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.aq2,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.afu(q,new C.eB4(r),t),A.P],u)
if(r.b6!=null){q=r.bE
u.push(r.uL(r.af4("Leak strength",q,0,1,new C.eB5(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bCg(){var w,v,u,t,s=this,r=s.aM
r=s.jJ("Zoom",r,1,3,new C.eAD(s),1,""+A.k.U(r*100)+"%")
w=s.bg
w=s.jJ("Left / right",w,-1,1,new C.eAE(s),0,""+A.k.U(w*100))
v=s.bQ
v=s.jJ("Up / down",v,-1,1,new C.eAF(s),0,""+A.k.U(v*100))
u=s.ci
t=x.p
return B.u(B.a([s.uL(B.u(B.a([r,w,v,s.jJ("Turn",u,-180,180,new C.eAG(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.cb(A.bH,B.a([s.nx("Turn 90\xb0",D.bro,!1,new C.eAH(s)),s.nx("Flip sideways",A.Ef,s.cQ,new C.eAI(s)),s.nx("Flip upside down",A.Ef,s.cT,new C.eAJ(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bWZ(){var w=null,v=B.m(22),u=B.G(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.eaT,A.T,D.eIr,A.ay,B.aJ(w,B.p(A.B,D.eb3,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t4,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eBw(this),w,w,w,w,w,w,!1,A.af)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rj,w,u,v,w,w,A.n),w,w,w,w,A.c1,w,w,w)},
bUe(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eBo(p),m=x.p,l=B.A(B.a([D.bkU,p.nx("Reset",A.mG,!1,new C.eBk(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hd,o,o,o),j=p.wQ("SHAPE",A.ahe),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Ax[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aUC(n.$2(t,p.cy),62,u.b,s===t,new C.eBl(v,p),62))}}i=B.cb(A.bH,i,A.bx,8,8)
v=p.wQ("RING",A.rO)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.As[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aUC(n.$2(p.cx,t),62,r.b,q===t,new C.eBm(s,p),62))}u=B.cb(A.bH,u,A.bx,8,8)
s=p.CW
return B.u(B.a([l,A.au,k,j,i,v,u,A.aa,p.uL(p.jJ("Size",s,0.12,0.4,new C.eBn(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aXq(d){return new B.a3(null,d,new B.fN(0.5625,B.cj(new C.eBH(this)),null),null)},
coU(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.G(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t4:q
t=new B.b3(14,14)
s=D.cPW[w]
r=v?A.c:A.aB
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bF(1,A.bn,B.aJ(A.c5,B.dg(q,B.u(B.a([r,A.d5,new B.pM(A.e8,A.B,A.h,new B.w(s.b,q,new B.E(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b9,new B.o(q,q,q,new B.bv(t,t,t,t),q,u,A.n),D.bcE,q,q,q,A.hs,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBQ(this,w),q,q,q,q,q,q,!1,A.af),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.beI,A.lU,q,q,q)},
aLK(){var w,v,u=this,t=null,s=u.coU(),r=u.as
A:{if(0===r){w=u.bEh()
break A}if(1===r){w=u.cud()
break A}if(2===r){w=u.cpA()
break A}if(3===r){w=u.c9t()
break A}if(4===r){w=u.bUe()
break A}w=u.bWZ()
break A}v=x.p
return B.bu(A.pM,B.ec(B.u(B.a([s,B.C(B.cL(B.a([w],v),t,D.bfJ,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.TK,!0),A.ap)},
aI_(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc07(),p=B.m(16)
q=B.C(B.aJ(r,B.p(r,D.ebc,A.h,r,r,new B.o(A.c.j(0.08),r,B.G(A.be,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.af),1)
p=s.Q?r:s.gbFU()
w=B.m(16)
v=B.a([new B.a9(0,A.G,A.bz.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.efF)
else t.push(D.btT)
t.push(A.ab)
t.push(D.bmh)
return B.p(r,B.A(B.a([q,A.av,B.C(B.aJ(r,B.p(r,B.A(t,A.m,r,A.b5,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t4,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.af),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aRU,r,r,r,r,G.acw,r,r,r)},
aUA(){var w=null
return new B.B(T.VF,B.A(B.a([B.aF(w,w,w,w,A.mI,w,w,w,new C.eB6(this),w,w,w,w,w,w),D.eWy,A.b6,D.bCc],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.ce(w,A.zl,B.br(!0,B.cj(new C.eCn(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bbx.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f6()
m.dY(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.a1()
t=B.U()
s=this.b
t.r=A.c.j(0.16*s).gt(0)
r=B.U()
r.r=A.x.j(0.2*s).gt(0)
for(s=d.a,q=0;q<u;++q){p=m.ag()*w
o=m.ag()*v
n=((q&1)===0?t:r).L()
s.drawRect(B.cz(new B.af(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.qQ.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lJ.prototype={}
C.yq.prototype={
ad(){var w=this
return B.D(["at",w.a.a4().aa(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nh.prototype={}
C.v7.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5K.prototype={}
C.aoj.prototype={}
C.Zc.prototype={
S(){return new C.aEb(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1),D.ddO,B.a([],x.s),B.eO([D.G5],x.Q))}}
C.aEb.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.f.p()
this.a2()},
YT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$YT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().AY(90,700,700,A.et),$async$YT)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$YT)
case 8:p=e
if(r.c!=null)r.n(new C.eIi(r,p,q))
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
return B.i($async$YT,v)},
YW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$YW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hQ().aDm(78,n,1100,1100),$async$YW)
case 7:q=e
if(J.ch(q)){w=1
break}p=B.bi(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$YW)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c5(l,".png"))k="image/png"
else k=A.a.c5(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cM.gcq().aE(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eIj(r,p))
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
return B.i($async$YW,v)},
aZn(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fD(A.cw.aE(A.d.gai(d.split(","))),A.B,u,u,A.ci,A.bM,!0,u,!1,u,u)
return w}catch(v){}return D.bbG},
bUk(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ck3(C.fhj(w,this.aZn(d),f),g)},
a9K(d,e,f,g,h){var w=null,v=new C.eIg(f,e),u=new C.eIh(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.G(p?A.bG:A.b0.j(0.6),A.r,1)
if(p)p=new B.a3(34,30,new B.am(A.V,w,A.a9,A.h,B.a([B.as(B.V(f?A.Es:A.KS,A.c3,w,w,w,26),w,w,w),D.dQT],x.p),w),w)
else p=this.bUk(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.p(w,B.A(B.a([B.C(B.as(p,w,w,w),1),D.btA],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIf(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aSl(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bu(B.m(8),B.fD(A.cw.aE(A.d.gai(h.split(","))),A.B,p,p,A.ci,A.bM,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.G(n?A.bG:A.bq.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eY,p,p,p,20):q
n=B.a([n,A.ab,B.C(B.d(e,p,1,A.Z,p,p,p,A.a4p,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yt,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.af))
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a6_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fkH(),$async$a6_)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eHZ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a4(n)
if(r.c!=null)r.n(new C.eI_(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6_,v)},
abp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abp=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eI1(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eI2(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eI3(r))
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
return B.b(C.fg0(q,r.cx,j,new C.aYv(r.z,r.Q,r.as,r.at),new C.eI4(r),i,m,p,k),$async$abp)
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
if(p!=null)B.a7(p,!1).K(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a4(e)
if(r.c!=null)r.n(new C.eI5(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eo,g).w
g=B.aG(d,A.bO,g).w
w=B.as(B.p(h,h,A.h,h,h,new B.o(A.be,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.aJ(h,B.p(h,D.bwI,A.h,h,h,new B.o(h,h,B.G(A.c.j(0.35),A.r,2),h,B.a([new B.a9(2,A.G,A.bq.j(0.5),A.J,24)],v),D.bFe,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eIw(i),h,h,h,h,h,h,!1,A.af),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yt,h,h,h,i.ax?h:new C.eIx(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbvo()
v=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.J,10)],v)
s.push(B.hJ(B.aD(!1,A.X,!0,h,B.aH(!1,h,!0,B.p(h,B.V(i.e==null?A.ur:A.hh,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uJ,A.a6),h,40,h,h,h,h,h,40),A.cE,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cE,h,h,A.ac),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bl(h,h,h,h,h,h,h,h,!0,new B.b1(4,B.m(16),new B.ax(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b1(4,B.m(16),D.aPp),h,h,h,h,h,h,h,h,Q.H0,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.B(A.kt,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ae,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJI,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eIy(i)
s=i.aSl(A.l_,q,r,i.gc9U(),s)
r=i.z
r=B.C(i.a9K(new C.eIA(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.C(B.u(B.a([s,A.ar,B.A(B.a([r,A.bp,B.C(i.a9K(new C.eIB(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eIC(i)
s=i.aSl(A.up,r,p,i.gca1(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.C(i.a9K(new C.eID(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.ay,D.eMt,A.au,D.eP8,A.bs,u,A.P,D.eNG,A.ay,v,A.bs,B.A(B.a([q,A.av,B.C(B.u(B.a([s,A.ar,B.A(B.a([p,A.bp,B.C(i.a9K(new C.eIE(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.eQL],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.G(D.b5p,A.r,1)
w=C.aem(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bE(A.a_,h,h,B.p(h,B.A(B.a([D.bxN,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.ewV,h,h,h),B.aH(!1,h,!0,D.dMK,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eIF(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_z,h,u,v,h,h,A.n),h,h,h,h,D.ben,h,h,h),h)],t))}o.push(A.bs)
o.push(D.eE6)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cJ7[m]
v=i.ch===l?A.b0:A.c.j(0.06)
u=i.ch===l
k=new B.ax(u?A.aB:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bF(1,A.bn,new B.B(A.jX,B.aJ(h,B.dg(A.B,new B.w(""+l,h,new B.E(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b9,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a6),A.eD,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eIG(i,l),h,h,h,h,h,h,!1,A.af),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bs)
o.push(D.eUU)
o.push(A.P)
o.push(B.cj(new C.eIH(i)))
o.push(A.bs)
o.push(D.eKM)
o.push(A.P)
w=B.a([i.b13("auto","Let AI choose",A.dO,A.NA)],t)
for(v=x.O,m=0;m<11;++m){j=D.uO[m]
u=j.d
w.push(i.b13(j.a,j.b,j.c,B.a([B.aX(A.d.gI(u).a),B.aX(A.d.gI(u).b)],v)))}o.push(B.cb(A.bH,w,A.bx,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.G(i.r?A.bq.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.it(h,A.bq,h,h,h,new C.eIz(i),D.bt0,D.eUb,h,D.eGc,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aIZ,h,h,h)],t))
o.push(A.bs)
w=i.ax?h:i.gc0b()
v=B.ff(h,h,A.b0,A.b0.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.efv:A.EH
o.push(new B.a3(h,54,B.ld(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.or,h,h,h),w,v),h))
return new B.B(new B.L(0,0,0,f.f.d),B.p(h,B.br(!0,B.cf(B.u(o,A.ad,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ug,h,h,A.ah),!0,!1,A.ag,!0,!1),A.h,h,new B.aV(0,680,0,g.a.b*0.92),D.a6Y,h,h,h,h,h,h,h,h),h)},
bHm(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eI6(this,p,d)
if(d===D.B8)return new C.aAP(p,o,q)
w=B.m(16)
v=p?E.uJ:q
u=p?q:A.c.j(0.05)
t=B.G(p?A.aB:A.bG,A.r,1)
s=B.V(p?A.ej:C.hkw(d),A.c,q,q,q,20)
r=C.hkx(d)
return B.aJ(q,B.dg(q,B.u(B.a([s,A.au,B.eY(A.B,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b5,A.j,0,A.p),q,q,A.b9,new B.o(u,q,t,w,q,v,A.n),A.hG,q,64,q,A.hf,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.af)},
b13(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.al:A.bG
r=B.G(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a_,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aJ(v,B.dg(v,B.A(B.a([w,L.GU,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a1,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b9,new B.o(s,v,r,t,v,v,A.n),A.eD,v,v,v,L.adL,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eIl(this,d),v,v,v,v,v,v,!1,A.af)}}
C.Zb.prototype={
S(){return new C.aEa(new B.ao(A.aq,$.at()))}}
C.aEa.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
abq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abq=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.n(new C.eHS(r))
w=1
break}B.eN()
r.n(new C.eHT(r))
t=4
q=C.hKX(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hKH(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eHU(r,q))
w=1
break}k=r.c
if(k!=null)B.a7(k,!1).K(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fEL()
f=$.Bo.h(0,k.a)
o=f==null||J.ch(f)?null:J.fi(f)
if(o==null){r.n(new C.eHV(r))
w=1
break}n=C.hKF(o,r.a.c)
C.hKB(r.a.c.a)
$.fE2=!0
k=r.c
if(k!=null)B.a7(k,!1).K(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fHn(j)
h=C.fHo(r.a.c)
e=C.fHp(r.a.c)
w=7
return B.b(C.bxM(k,r.a.c.a,j,h,new C.eHW(r),i,e,a0),$async$abq)
case 7:m=a3
k=r.c
if(k!=null)B.a7(k,!1).K(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a4(a1)
if(r.c!=null)r.n(new C.eHX(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eo,i).w
i=B.aG(d,A.bO,i).w
w=B.as(B.p(j,j,A.h,j,j,new B.o(A.be,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.ahw,A.h,j,j,D.aRA,j,34,j,j,j,j,j,34),A.av,D.blr],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Q.aJq,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bl(j,j,j,j,j,j,j,j,!0,new B.b1(4,B.m(16),new B.ax(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b1(4,B.m(16),Ak.a6t),j,j,j,j,j,j,j,j,Q.H0,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ae,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJI,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cFN[q]
o=A.c.j(0.06)
n=k.e?j:new C.eHY(k,p)
r.push(B.mG(j,o,new B.w(p,j,Aq.QG,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vD,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.cb(A.bH,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.aa,B.d(u,j,j,j,j,j,j,D.aIZ,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gc0c()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bq.j(0.5),A.fo.j(0.5)],x.O):D.cf0
o=B.a([new B.a9(0,A.G,A.bq.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dMH:D.bxm
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.X,!0,j,B.aH(!1,s,!0,B.er(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jr,j,j,j)],v),A.m,j,A.b5,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a_,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.B(new B.L(0,0,0,h.f.d),B.p(j,B.br(!0,B.cf(B.u(w,A.ad,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ug,j,j,A.ah),!0,!1,A.ag,!0,!1),A.h,j,new B.aV(0,680,0,i.a.b*0.85),D.a6Y,j,j,j,j,j,j,j,j),j)}}
C.aYv.prototype={}
C.aAP.prototype={
S(){return new C.bg7(null,null)}}
C.bg7.prototype={
gatD(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.oU,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gatD().p()
this.bpx()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gatD(),new C.e0M(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.af)}}
C.bdK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cL3[s]
p=q.a*v
q=q.b*u
$.a1()
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=D.w5.j(0.25+r*0.6).gt(0)
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
ao(d){return d.b!==this.b}}
C.aoT.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XA.prototype={
S(){return new C.ayh()}}
C.ayh.prototype={
gafr(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aez(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzb(){var w=this.e
return w===$?this.e=C.fHn(this.a.c).q(0,D.B8):w},
a5N(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5N=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.dag(s))
u=3
r=A.d.kU(D.uO,new C.dah(s))
q=B.d8(C.fHn(s.a.c),x.Q)
l=q
J.hB(l,D.B8)
p=l
if(s.gzb())J.ci(p,D.B8)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzb()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fHo(i.c)
g=C.fHp(s.a.c)
w=6
return B.b(C.bxM(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5N)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aez(q,s.gafr())
f=q==null?null:q.b
n=f==null?s.gafr():f
if(!J.y(n,r.a)&&!s.gzb())throw B.O("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a7(q,!1).K(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a4(d)
if(s.c!=null)s.n(new C.dai(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5N,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.aj,j=m?A.M:A.c,i=B.m(28),h=B.G(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.C(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bw,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dal(d)
e=B.A(B.a([f,B.aF(n,n,n,n,B.V(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uO[w]
u=o.gafr()
t=o.f?n:new C.dam(o,v)
f.push(new C.bon(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dJ,!0)
u=B.m(18)
t=o.gzb()?D.bHJ:n
if(o.gzb())s=n
else s=m?A.bj:A.bN
r=B.V(A.dO,o.gzb()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzb()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.C(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzb()?A.al:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzb()
f=B.a([f,A.ay,B.p(n,B.A(B.a([r,A.av,q,B.fBW(n,A.c,n,A.bK,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dan(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acz,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.exc,n,n,n)],g))
f=B.cf(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.JX,n,n,A.ah)
u=o.f?n:o.gbuo()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b5(B.m(16),A.W),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.B(D.bhn,e,n),new B.dk(1,A.cj,f,n),new B.B(A.DD,new B.a3(1/0,50,B.bJ(B.er(B.as(o.f?A.qN:D.eMV,n,n,n),n,new B.o(n,n,n,s,n,D.bGo,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rD,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bon.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.aX(s),B.aX(u.b)],x.O),q=this.d,p=B.G(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.a9(0,A.G,B.aX(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bE(A.kM,w,w,B.V(v.c,A.al,w,w,w,18),w),new B.bE(A.lc,w,w,B.d(v.b,w,w,w,w,w,w,D.exa,w,w,w),w)],x.p)
if(q)v.push(D.aNw)
return B.aJ(w,B.dg(w,new B.am(A.V,w,A.a9,A.q,v,w),w,w,A.b9,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aE,A.w,r,w,w),A.n),A.eD,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.af)}}
C.e0J.prototype={
aB0(d,e,f){return e+"@"+A.a.aT(A.o.fE(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vE(d,e){return this.aB0(0,e,null)}}
C.aIG.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aYr.prototype={
B(d){var w,v,u=null,t=C.fGd(this.c)
if(t==null)w=D.bar
else{w=B.aG(d,u,x.w).w.cz_(D.bdW,D.eeM)
v=this.d
w=B.tO(B.e8(B.alk(!1,t,!1,v,!1,390),!v,u),w)}return B.eY(A.B,new B.a3(416,870,new C.bhK(w,u),u),A.h,A.dp)}}
C.bhK.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cVv[w]
u=new B.b3(3,3)
s.push(new B.cE(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajp,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cWA[w]
u=new B.b3(3,3)
s.push(new B.cE(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bv(u,u,u,u),t,D.ajp,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bU(0,B.bQ(t,new B.o(t,t,t,B.m(64),D.cww,D.bEY,A.n),A.b7),0,0,0))
s.push(B.bU(3,B.bQ(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.b7),3,3,3))
s.push(B.bU(13,B.bu(B.m(51),B.ec(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.as(B.p(D.aNH,B.p(t,t,A.h,t,t,D.aRS,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bU(13,B.e8(B.bu(B.m(51),D.bbM,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e8(B.as(B.p(t,t,A.h,t,t,new B.o(A.al,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.V,t,A.a9,A.h,s,t)}}
C.kV.prototype={
oM(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cx(),f=C.cx(),e=m.r
f=C.eh(A.L,!1,e.l(),A.az,"",k,42,A.bg,A.u,"",0.22,f,l,"","",0,!1,"",0,D.b8,j,2,"Your Presentation Title",0,0,"",D.m8,D.cJ,0.84,0.08,0.26)
w=C.cx()
v=m.w
w=C.eh(A.L,!1,v.l(),A.az,"",k,20,A.bg,A.a1,"",0.12,w,l,"","",0,!1,"",0,D.b8,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.d8,D.cJ,0.76,0.12,0.56)
u=C.cx()
t=m.d
s=x.u
t=C.qR(i,l,0,0,B.a([f,w,C.eh(A.bf,!1,4279310375,A.az,"",t.j(0.8).l(),24,A.bg,A.a1,"",0.006,u,l,"","",0,!1,"",0,D.fb,t.l(),3,"",0,0,"",D.cb,D.eQ,0.3,0.35,0.72)],s),C.cx(),D.m7,"","","Welcome",D.d8)
u=C.cx()
u=C.eh(A.bf,!1,e.l(),A.az,"",k,34,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b8,j,2,"Agenda",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
w=C.cx()
w=C.qR(i,l,0,0,B.a([u,C.eh(A.bf,!0,v.l(),A.az,"",k,22,A.bg,A.a1,"",0.6,w,l,"","",0,!1,"",0,D.b8,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ti,D.cJ,0.8,0.1,0.26)],s),C.cx(),D.m7,"","","Agenda",D.d8)
u=C.cx()
u=C.eh(A.bf,!1,e.l(),A.az,"",k,32,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b8,j,2,"Main Idea",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
f=C.cx()
f=C.qR(i,l,0,0,B.a([u,C.eh(A.bf,!0,v.l(),A.az,"",k,21,A.bg,A.a1,"",0.62,f,l,"","",0,!1,"",0,D.b8,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cb,D.cJ,0.8,0.1,0.26)],s),C.cx(),D.m7,"","","Key Point 1",D.d8)
u=C.cx()
u=C.eh(A.bf,!1,e.l(),A.az,"",k,30,A.bg,A.u,"",0.12,u,l,"","",0,!1,"",0,D.b8,j,2,"Compare & Contrast",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
r=C.cx()
r=C.eh(A.bf,!0,v.l(),A.az,"",k,18,A.bg,A.a1,"",0.62,r,l,"","",0,!1,"",0,D.b8,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cb,D.cJ,0.4,0.08,0.24)
q=C.cx()
q=C.qR(i,l,0,0,B.a([u,r,C.eh(A.bf,!0,v.l(),A.az,"",k,18,A.bg,A.a1,"",0.62,q,l,"","",0,!1,"",0,D.b8,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cb,D.cJ,0.4,0.52,0.24)],s),C.cx(),D.m7,"","","Key Point 2",D.d8)
r=C.cx()
r=C.eh(A.L,!1,e.l(),A.az,"",k,48,A.bg,A.u,"",0.2,r,l,"","",0,!1,"",0,D.b8,j,2,h,0,0,"",D.d8,D.cJ,0.8,0.1,0.32)
e=C.cx()
p=C.Aq(l,l,l,l,D.B4,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qR(i,l,0,0,B.a([r,C.eh(A.L,!1,v.l(),A.az,"",k,22,A.bg,A.a1,"",0.1,e,l,"","",0,!1,"",0,D.b8,j,2,"Questions?",0,0,"",D.cb,D.cJ,0.7,0.15,0.58)],s),C.cx(),D.m7,"","",h,D.d8)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dg.prototype={
bH(d){return this.e.$1(d)}}
C.el.prototype={}
C.iM.prototype={}
C.D7.prototype={
gaGx(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aem(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a18(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.D7(v,u,t,d==null?w.d:d)},
Ei(d){return this.a18(null,d,null,null)},
azN(d){return this.a18(null,null,null,d)},
cyY(d,e){return this.a18(d,e,null,null)},
b68(d){return this.a18(d,null,null,null)},
b6f(d){return this.a18(null,null,d,null)}}
C.LB.prototype={
S(){return new C.bfu(new B.eL(0,$.at()),null,null)}}
C.bfu.prototype={
Z(){var w,v=this
v.a0()
w=v.qQ(new C.dKv(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.kj(0)
else v.d.st(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.at()
w.O$=0
this.bp_()},
B(d){var w=C.aem(this.a.c.a)
if(w==null)w=A.d.gI(D.F0)
return B.cj(new C.dKu(this,w,C.fVS(this.a.c.d)))}}
C.bmY.prototype={
B(d){return B.nm(A.Sm,this.e,new C.eH5(this,A.k.J(this.d*0.35,1.6)-0.3))}}
C.baD.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOf(d,e,v)
break
case"confetti":w.bAG(d,e,v)
break
case"crown":w.bCh(d,e,v)
break
case"aurora":w.bvs(d,e,v)
break
case"champagne":w.byA(d,e,v)
break
case"diamonds":w.bEq(d,e,v)
break
case"starburst":w.cmF(d,e,v)
break
case"balloons":w.bvG(d,e,v)
break
case"galaxy":w.bJ2(d,e,v)
break
case"redcarpet":w.cdY(d,e,v)
break
case"coins":w.bA3(d,e,v)
break
case"lanterns":w.bT_(d,e,v)
break
case"hearts":w.bQH(d,e,v)
break
case"petals":w.c9l(d,e,v)
break
case"butterflies":w.bxD(d,e,v)
break
case"neon":w.bWJ(d,e,v)
break
case"disco":w.bEB(d,e,v)
break
case"sunrise":w.co8(d,e,v)
break
case"pearls":w.c8p(d,e,v)
break
case"snow":w.cml(d,e,v)
break
case"laurel":w.bT5(d,e,v)
break
case"ribbons":w.cgq(d,e,v)
break
case"kente":w.bSP(d,e,v)
break
case"trophy":w.crG(d,e,v)
break
case"shooting":w.ckf(d,e,v)
break
case"bokeh":w.bvX(d,e,v)
break
case"orbits":w.c67(d,e,v)
break
case"flowers":w.bIl(d,e,v)
break
case"music":w.bWu(d,e,v)
break
case"mandala":w.bUW(d,e,v)
break
case"sparklers":w.cmv(d,e,v)
break
case"city":w.bzn(d,e,v)
break}},
qH(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a1()
v=B.U()
v.r=g.j(A.k.D(h,0,1)).gt(0)
v.a=A.n0
u=new B.b0(w.r,A.aw,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.N(new B.bj(w,s))
u.N(new B.dl(w,t,w+f,t))
u.N(new B.dl(w,t,w,t+f))
u.N(new B.dl(w,t,w-f,t))
u.N(new B.dl(w,t,w,s))
u.N(new B.bW())
d.b4(u,v)
d.aw(e,f*0.18,v)},
lb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cM(q,v)*2.5)+C.cM(q,u)*6.28)+1)/2
this.qH(d,new B.v(C.cM(q,t)*o,C.cM(q,s)*n),m*(0.006+0.014*C.cM(q,r))*(0.5+p),h,p*p)}},
aOf(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lb(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.b_],w),B.a([A.i6,A.bz],w),B.a([A.eq,A.b3],w),B.a([A.c,A.at],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bK(k/2.8)
i=A.k.J(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cM(h,1))
f=g+c0*(C.cM(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cM(h,3))
d=v[Math.abs(A.o.J(h,4))]
if(i<0.22){a0=B.l0(new B.v(g,c1),new B.v(f,e),A.co.ar(0,i/0.22))
a0.toString
$.a1()
a1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.sav(new B.a8(A.a_,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).aB(0,B.qT(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bZ
a2=B.l0(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.L()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.gt(0)
a3=a2.L()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.ar(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cM(h,4)
if(a5<0.15){a4=1-a5/0.15
$.a1()
a8=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a8.r=d[0].j(0.5*a4).gt(0)
a8.z=new B.hG(A.G,o)
a3=a8.L()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cM(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cM(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a1()
b9=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
b9.r=b8.j(a8).gt(0)
b9.c=u
b9.d=A.bZ
b9.a=A.n0
a3=b9.L()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cM(h,b1+120)>0.5)this.qH(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bAG(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.J(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a1(),a0=B.U()
a0.sav(new B.a8(A.ax,A.aE,A.w,D.cQU,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aB(0,new B.af(0,0,f,e)))
a1.bp(new B.af(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.J(a3*(h*(0.08+0.12*C.cM(u,1)))+C.cM(u,2)*w,w)
s=C.cM(u,3)
r=Math.sin(a3*(0.8+C.cM(u,4))+u)
q=h*(0.012+0.012*C.cM(u,5))
p=Math.cos(a3*(2+3*C.cM(u,6))+u)
o=D.N3[A.o.D(A.k.bK(C.cM(u,7)*5),0,4)]
J.bP(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cM(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gt(0)
if(A.o.J(u,5)===0){t=B.a([],v)
m=new B.b0(d.r,A.aw,null,null,t)
d=-q*2
t.push(new B.bj(d,0))
for(l=1;l<=8;++l){s=new B.av(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bH(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a1()
t=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
t.r=B.aX(n.r).gt(0)
t.b=A.ak
t.c=q*0.35
k=t.L()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.dy(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.L()
f.drawRect(B.cz(t),k)
k.delete()}f.restore()}this.lb(a1,a2,a3,25,A.bK,30)},
bCh(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a1()
n=B.a([],r)
m=new B.b0(o.r,A.aw,a4,a4,n)
n.push(new B.bj(a5,a6))
o=p-0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bW())
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.sav(new B.bS(A.B,0.5,A.w,a4,0,B.a([A.bK.j(0.22),D.b16],v),a4,a4).aB(0,B.c1(w,u)))
l=o.L()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.b0($.a1().r,A.aw,a4,a4,B.a([],r))
v=a6+j
i.N(new B.bj(a5,v))
u=j*0.3
s=a6+u
i.N(new B.av(a5,s))
o=a6+j*0.6
i.N(new B.av(a5+k*0.22,o))
i.N(new B.av(a5+k*0.5,a6))
i.N(new B.av(a5+k*0.78,o))
o=a5+k
i.N(new B.av(o,s))
i.N(new B.av(o,v))
i.N(new B.bW())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.U()
n.sav(new B.a8(A.b4,A.bb,A.w,D.cPR,a4,a4).aB(0,new B.af(a5,a6,o,v)))
a8.b4(i,n)
for(v=[D.dWK,D.dTb,D.e0H],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(a0)
l=a1.L()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=A.al.gt(0)
l=a1.L()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=A.hD.gt(0)
l=g.L()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.zY(i),u=B.a([],x.X),o=new B.xO(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jH(y.M));--f
o.lc()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.b0(n,v.b,a4,new B.d7([new B.FP(o,f),0,d*h,!0]),B.a([],r))
f=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
f.b=A.ak
f.c=g
f.e=A.fk
f.r=A.bK.gt(0)
l=f.L()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.J(b0*0.5,1)
this.qH(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lb(a8,a9,b0,45,A.bK,40)},
bvs(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lb(a8,a9,b0,60,A.c,50)
w=[D.e7M,D.e7v,D.e7q,D.e8A]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a1()
i=B.a([],p)
h=new B.b0(n.r,A.aw,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.bj(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bH(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.av(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bH(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a1()
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.ak
n.c=t
n.r=m.j(0.28).gt(0)
n.a=A.n0
n.z=new B.hG(A.G,s)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
n.b=A.ak
n.c=v
n.r=m.j(0.55).gt(0)
n.a=A.n0
n.z=new B.hG(A.G,v)
a2=n.L()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.J(t*(0.05+0.06*C.cM(a4,1))+C.cM(a4,2)*a3,a3)
r=C.cM(a4,3)
q=Math.sin(b0+a4)
p=C.cM(a4,4)
$.a1()
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
n.r=A.w4.j(0.4+0.5*C.cM(a4,5)).gt(0)
n.a=A.n0
a2=n.L()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
byA(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a1(),a0=B.U()
a0.sav(new B.bS(A.B,0.5,A.w,l,0,B.a([A.ho.j(0.25+0.1*h),D.TQ],x.O),l,l).aB(0,B.c1(new B.v(g,f),e)))
a1.aw(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.b0(d.r,A.aw,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.bj(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.av(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bH(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.b=A.ak
a0.c=h
a0.r=D.N3[A.o.J(w,4)].j(0.7).gt(0)
p=a0.L()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.J(a3*(i*(0.07+0.12*C.cM(w,1)))+C.cM(w,2)*o,o)
r=k*(0.1+0.8*C.cM(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cM(w,4))
if(n<f){this.qH(a1,new B.v(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.a1()
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.z6.j(0.75).gt(0)
p=d.L()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
t.r=A.c.j(0.8).gt(0)
p=t.L()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bEq(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lb(a9,b0,b1,30,A.kP,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cM(p,1))
n=a7+o*4
m=A.k.J(t*(0.04+0.06*C.cM(p,2))+C.cM(p,3)*n,n)-o*2
l=C.cM(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bP(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a1()
g=B.a([],q)
f=new B.b0(h.r,A.aw,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.bj(e,i))
h*=0.28
j*=0.6
g.push(new B.av(h,j))
d=o*0.28
g.push(new B.av(d,j))
a0=o*0.5
g.push(new B.av(a0,i))
a1=k*0.6
g.push(new B.av(0,a1))
g.push(new B.bW())
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.sav(new B.a8(A.ax,A.aE,A.w,D.cM3,a5,a5).aB(0,B.dy(A.J,k*1.2,o)))
a2=g.L()
g=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(g)).a,a2)
a2.delete()
a3=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a3.b=A.ak
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gt(0)
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
if(a4>0.85)this.qH(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cmF(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a1()
o=B.a([],v)
n=new B.b0(p.r,A.aw,null,null,o)
o.push(new B.bj(h,g))
p=s-q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bW())
p=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=A.bK.j(r?0.12:0.07).gt(0)
m=p.L()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.J(a0+l*0.6,1.8)/1.8
$.a1()
u=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
u.b=A.ak
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gt(0)
m=u.L()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bK(a0/2.4)
k=A.k.J(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cM(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bb8.ar(0,k)*(0.5+0.5*C.cM(t,v)))
this.qH(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cM(t,3)),D.N3[A.o.D(A.k.bK(C.cM(t,4)*5),0,4)],u)}},
bvG(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cM(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.J(q*(0.05+0.05*C.cM(o,2))+C.cM(o,3)*m,m)
j=C.cM(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqp[A.o.J(o,6)]
h=$.a1()
g=B.a([],s)
f=new B.b0(h.r,A.aw,a3,a3,g)
h=k+n*1.15
g.push(new B.bj(j,h))
for(e=1;e<=6;++e){d=new B.av(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bH(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a1()
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gt(0)
a1=d.L()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.dy(new B.v(j,k),n*2.3,l)
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d=B.aq(i,A.x,0.35)
d.toString
l.sav(new B.bS(D.aNK,0.9,A.w,a3,0,B.a([A.c,i,d],t),A4.aqg,a3).aB(0,a2))
a1=l.L()
u.drawOval(B.cz(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.b0(g.r,A.aw,a3,a3,l)
d=n*0.12
l.push(new B.bj(j-d,h))
l.push(new B.av(j+d,h))
l.push(new B.av(j,k+n))
l.push(new B.bW())
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=B.aq(i,A.x,0.3).gt(0)
a1=l.L()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.J(q*(0.1+0.1*C.cM(o,11))+C.cM(o,12)*m,m)
r=C.cM(o,13)
J.bP(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.dy(A.J,t,v)
$.a1()
r=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=D.aqp[A.o.J(o,6)].j(0.85).gt(0)
a1=r.L()
u.drawRect(B.cz(s),a1)
a1.delete()
u.restore()}},
bJ2(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lb(b1,b2,b3,50,A.c,70)
for(w=[D.e7U,D.e7B,D.e7G],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a1()
k=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
k.sav(new B.bS(A.B,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aB(0,B.c1(new B.v(r,m),l)))
j=k.L()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.J(i,3)
g=C.cM(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cM(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.eN,g)
k.toString
d=C.cM(i,3)
$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=k.j(0.5+0.5*C.cM(i,4)).gt(0)
a0.a=A.n0
j=a0.L()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a1()
a9=B.U()
a9.sav(new B.bS(A.B,0.5,A.w,a4,0,B.a([A.z6.j(0.55),D.aao],u),a4,a4).aB(0,B.c1(b0,a8)))
b1.aw(b0,a8,a9)
a1=A.k.J(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bK(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cM(a2,9)),a6*0.1*C.cM(a2,8))
a5=B.l0(a3,a3.ap(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l0(a3,a5,0.6)
a6.toString
a8=B.U()
a8.sav(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).aB(0,B.qT(a3,a5)))
a8.c=a7*0.005
a8.d=A.bZ
b1.bU(a6,a5,a8)}},
cdY(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a1()
n=B.a([],s)
m=new B.b0(o.r,A.aw,b5,b5,n)
n.push(new B.bj(q,u))
o=p-0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bW())
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.sav(new B.bS(A.B,0.5,A.w,b5,0,B.a([A.z6.j(0.28),D.aao],w),b5,b5).aB(0,B.c1(new B.v(q,u),t)))
o.a=A.n0
l=o.L()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.fq:A.f4)
a9=$.a1()
b0=B.a([],s)
m=new B.b0(a9.r,A.aw,b5,b5,b0)
b0.push(new B.bj(a5?0:b6,0))
b0.push(new B.av(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.dl(a9,k,a5?g:a1,b7))
b0.push(new B.av(a5?0:b6,b7))
b0.push(new B.bW())
a9=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a9.sav(new B.a8(A.a_,A.a7,A.w,a7,b5,b5).aB(0,new B.af(a6,0,a6+i,j)))
l=a9.L()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
b1.r=A.ho.gt(0)
b1.c=o
b1.d=A.bZ
l=b1.L()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.b0($.a1().r,A.aw,b5,b5,B.a([],s))
w=b7*0.78
b2.N(new B.bj(b6*0.42,w))
b2.N(new B.av(b6*0.58,w))
b2.N(new B.av(b6*0.8,b7))
b2.N(new B.av(b6*0.2,b7))
b2.N(new B.bW())
v=B.U()
v.sav(D.bGi.aB(0,new B.af(0,w,0+b6,w+b7*0.22)))
b9.b4(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.J(b7*(0.05+0.07*C.cM(r,1))+C.cM(r,2)*b3,b3)
u=C.cM(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qH(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cM(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bA3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cM(t,1))
r=h+s*4
q=s*2
p=A.k.J(u*(0.12+0.12*C.cM(t,2))+C.cM(t,3)*r,r)-q
o=C.cM(t,4)*i
n=Math.cos(f*(2+3*C.cM(t,5))+t)
m=Math.abs(n)
l=B.dy(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a1()
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.sav(new B.a8(A.ax,A.aE,A.w,n>0?D.cZl:D.ckz,null,null).aB(0,l))
k=q.L()
v.drawOval(B.cz(l),k)
k.delete()
q=-(s*0.22)
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.c=Math.max(0.6,s*0.08)
j.r=D.b8G.gt(0)
k=j.L()
v.drawOval(B.cz(new B.af(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qH(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lb(d,e,f,30,A.bK,110)},
bT_(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lb(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cM(p,1))
n=a1+o*4
m=a1+o*2-A.k.J(t*(0.03+0.04*C.cM(p,2))+C.cM(p,3)*n,n)
l=C.cM(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a1()
h=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
h.sav(new B.bS(A.B,0.5,A.w,d,0,B.a([H.aaw.j(0.45*k),D.a9r],u),d,d).aB(0,B.c1(new B.v(l,m),j)))
g=h.L()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.b0(i.r,A.aw,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bj(l-i,e))
j.push(new B.av(l+i,e))
i=o*0.38
h=m+h
j.push(new B.av(l+i,h))
j.push(new B.av(l-i,h))
j.push(new B.bW())
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i=B.aq(D.b1f,A.c,0.2*k)
i.toString
j.sav(new B.a8(A.b4,A.bb,A.w,B.a([D.b56,i],u),d,d).aB(0,B.dy(new B.v(l,m),o*1.4,o)))
g=j.L()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(k).gt(0)
g=j.L()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bQH(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cM(p,1))
n=a1+o*4
m=A.k.J(s*(0.05+0.06*C.cM(p,2))+C.cM(p,3)*n,n)
l=C.cM(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bP(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a1()
l=B.a([],t)
i=new B.b0(m.r,A.aw,d,d,l)
m=o*0.9
l.push(new B.bj(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p5(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p5(m,g,o*1.8,h,0,m))
l.push(new B.bW())
f=D.cDT[A.o.J(p,5)]
m=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l=B.aq(f,A.x,0.25)
l.toString
m.sav(new B.bS(A.vx,0.5,A.w,d,0,B.a([A.c,f,l],u),H.ZA,d).aB(0,B.c1(A.J,o*1.4)))
e=m.L()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lb(a3,a4,a5,30,A.i6,130)},
c9l(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cM(q,1))
o=g+p*4
n=A.k.J(t*(0.05+0.06*C.cM(q,2))+C.cM(q,3)*o,o)
m=C.cM(q,4)
l=Math.sin(s+q*0.7)
J.bP(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cM(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a1()
m=B.a([],u)
k=new B.b0(n.r,A.aw,i,i,m)
n=-p
m.push(new B.bj(0,n))
l=n*0.2
m.push(new B.dl(p,l,0,p))
m.push(new B.dl(n,l,0,n))
m.push(new B.bW())
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
m=(q&1)===0?D.cf_:D.cNg
n.sav(new B.a8(A.a_,A.a7,A.w,m,i,i).aB(0,B.c1(A.J,p)))
j=n.L()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lb(d,e,a0,25,A.bK,140)},
bxD(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lb(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cM(r,1))
p=Math.sin(b2*(0.15+0.1*C.cM(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cM(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bP(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bP(v.save())
v.scale(a1*n,1)
a2=$.a1()
a3=B.a([],u)
a4=new B.b0(a2.r,A.aw,a6,a6,a3)
a3.push(new B.bj(0,0))
a3.push(new B.p5(f,e,l,d,h,0))
a3.push(new B.p5(q,h,g,q,0,h))
a3.push(new B.bW())
a2=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.sav(new B.a8(A.a_,A.a7,A.w,i?D.cMZ:D.cPp,a6,a6).aB(0,new B.af(0,m,k,j)))
a5=a2.L()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.b=A.ak
a2.c=Math.max(0.6,o)
a2.r=D.ze.gt(0)
a5=a2.L()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a1()
p=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=D.b85.gt(0)
p.c=q*0.1
p.d=A.bZ
a5=p.L()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bWJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.J(w+t/4,1)
r=f*(0.2+0.7*s)
$.a1()
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.b=A.ak
q.c=v
q.r=D.arp[t].j((1-s)*0.9).gt(0)
q.z=new B.hG(A.G,v)
p=r*0.3
p=B.c_(B.dy(e,r,r*1.6),new B.b3(p,p))
o=q.L()
u.drawRRect(B.fM(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cM(m,1)*4)+m)))
k=D.arp[A.o.J(m,4)]
j=m*n+h
i=g-l
i=B.c_(new B.af(j,i,j+w,i+l),new B.b3(v,v))
$.a1()
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=k.j(0.85).gt(0)
j.z=new B.hG(A.a6h,p)
o=j.L()
u.drawRRect(B.fM(i),o)
o.delete()}},
bEB(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cM(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cM(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.oG,A.dE][A.o.J(p,4)]
j=C.cM(p,3)
$.a1()
i=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i.r=k.j(0.75).gt(0)
i.a=A.n0
i.z=new B.hG(A.G,r)
h=i.L()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a1()
t=B.U()
t.r=A.aB.gt(0)
t.c=1.2
a3.bU(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.U()
t.r=A.fM.gt(0)
a3.aw(v,u,t)
J.bP(q.save())
a1=new B.b0(a1.r,A.aw,null,null,B.a([],x.v))
a1.N(new B.kv(B.c1(v,u)))
a3.tj(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.J(a1,g)
i=Math.sin(e*1.7+l+s)
$.a1()
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=B.aq(A.bv,A.c,0.4+0.6*((i+1)/2)).gt(0)
h=d.L()
q.drawRect(B.cz(new B.af(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qH(a3,v.ap(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
co8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.ar(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a1()
q=B.a([],u)
p=new B.b0(r.r,A.aw,h,h,q)
q.push(new B.bj(d,a0))
r=s-0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bW())
r=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=A.bK.j(0.1).gt(0)
o=r.L()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a1()
a0=B.U()
a0.sav(new B.bS(A.B,0.5,A.w,h,0,B.a([D.aYP.j(0.6),D.a9r],x.O),h,h).aB(0,B.c1(a1,d)))
a2.aw(a1,d,a0)
a0=e*0.2
d=B.U()
d.sav(D.dRI.aB(0,B.c1(a1,a0)))
a2.aw(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.J(d*(1+t*0.3)+C.cM(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(0.18).gt(0)
i=B.dy(new B.v(l,k),r,u)
o=j.L()
w.drawOval(B.cz(i),o)
o.delete()
i=B.dy(new B.v(l+q,k-n),r,m)
o=j.L()
w.drawOval(B.cz(i),o)
o.delete()}this.lb(a2,a3,a4,20,A.hD,180)},
c8p(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a1()
q=B.a([],t)
p=new B.b0(r.r,A.aw,f,f,q)
q.push(new B.bj(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.av(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bH(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.av(e,d)
q.push(r)
o=p.f
if(o!=null)r.bH(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bW()
q.push(r)
q=p.f
if(q!=null)r.bH(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a1()
r=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=B.aq(A.cB,A.iO,s/3).j(0.55).gt(0)
k=r.L()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cM(i,1))
g=d-A.k.J(u*(0.04+0.05*C.cM(i,2))+C.cM(i,3)*j,j)
n=C.cM(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a1()
t=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
t.sav(new B.bS(Ai.qY,0.5,A.w,f,0,D.cSm,f,f).aB(0,B.c1(new B.v(n,g),h)))
k=t.L()
w.drawCircle(n,g,h,k)
k.delete()}this.lb(a1,a2,a3,25,A.c,190)},
cml(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cM(r,1))
p=f+q*4
o=A.k.J(u*(0.03+0.05*C.cM(r,2))+C.cM(r,3)*p,p)
n=C.cM(r,4)
m=Math.sin(t+r)
$.a1()
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=A.c.j(0.6+0.4*C.cM(r,5)).gt(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bZ
J.bP(v.save())
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
h.delete()}v.restore()}this.lb(d,a0,a1,40,A.eq,200)},
bT5(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dF(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bP(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.dy(new B.v(p,0),q,r)
$.a1()
f=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
f.sav(D.bG6.aB(0,new B.af(0,o,n,m)))
e=f.L()
s.drawOval(B.cz(g),e)
e.delete()
s.restore()}}$.a1()
a0=B.U()
a0.b=A.ak
a0.c=a2*0.003
a0.r=D.b1q.gt(0)
a3.aw(w,v*1.08,a0)
d=a5*0.8
this.qH(a3,w.ap(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lb(a3,a4,a5,40,A.bK,210)},
cgq(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.ho,A.hD],a6),B.a([A.nT,A.i6],a6),B.a([A.aA,A.eN],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a1()
k=B.a([],o)
j=new B.b0(l.r,A.aw,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.bj(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bH(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.av(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bH(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dv(i,s),l=new B.bR(l,l.gG(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.av(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bH(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bW()
k.push(l)
k=j.f
if(k!=null)l.bH(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a1()
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
k=a7[m]
h=k[0]
l.sav(new B.a8(A.a_,A.a7,A.w,B.a([h,k[1],h],a6),H.ar6,new B.mn(w)).aB(0,new B.af(0,0,v,u)))
l.r=A.c.j(0.85).gt(0)
a2=l.L()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lb(a8,a9,b0,40,A.c,220)},
bSP(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.J(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.J(A.k.bK(g/t),5)
a1=g+t
$.a1()
a2=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a3=Math.abs(a0)
a2.r=D.ZD[a3].gt(0)
a4=a2.L()
s.drawRect(B.cz(new B.af(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a5.r=D.ZD[A.o.J(a3+2,5)].gt(0)
a4=a5.L()
s.drawRect(B.cz(new B.af(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.J(n*(0.04+0.05*C.cM(a0,1))+C.cM(a0,2)*a6,a6)
v=C.cM(a0,3)
t=C.cM(a0,4)
this.qH(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.ZD[A.o.J(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
crG(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a1()
p=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
p.c=v
p.r=A.bK.j(0.06).gt(0)
o=p.L()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.N(new B.bj(v,a2))
w=a1+w
l.N(new B.av(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.N(new B.dl(w,r,p,k))
w=a2+m*0.95
l.N(new B.av(p,w))
p=n*0.3
j=a2+m
l.N(new B.av(a1+p,j))
l.N(new B.av(a1-p,j))
q=a1-q
l.N(new B.av(q,w))
l.N(new B.av(q,k))
l.N(new B.dl(v,r,v,a2))
l.N(new B.bW())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.dy(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=q
d.r=A.at.gt(0)
o=d.L()
u.drawArc.apply(u,[B.cz(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.U()
a1.sav(new B.a8(A.a_,A.a7,A.w,D.cUl,A.aqv,null).aB(0,new B.af(v,a2,r,j)))
a4.b4(l,a1)
a0=A.k.J(a6*0.6,1.4)
if(a0<1)this.qH(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bAH(a4,a5,a6,60)},
bAH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.J(k*(0.1+0.1*C.cM(p,31))+C.cM(p,32)*v,v)
n=C.cM(p,33)
J.bP(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dy(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a1()
n=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
n.r=D.N3[A.o.J(p,5)].gt(0)
m=n.L()
u.drawRect(B.cz(o),m)
m.delete()
u.restore()}},
ckf(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lb(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cM(o,1)*1.6
m=A.k.J(a2+C.cM(o,2)*n,n)/n
l=e*(C.cM(o*7+A.k.bK((a2+C.cM(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a1()
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.sav(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.bK],s),null,null).aB(0,B.qT(new B.v(l,h),i)))
g.c=r
g.d=A.bZ
f=g.L()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qH(a0,i,p,A.c,1-m)}},
bvX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cM(r,1))
p=A.k.J(C.cM(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.J(C.cM(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a1()
m=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l=A.o.J(r,5)
m.r=D.asE[l].j(n).gt(0)
m.a=A.n0
m.z=new B.hG(A.G,q*0.12)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
m.b=A.ak
m.c=Math.max(0.6,q*0.05)
m.r=D.asE[l].j(n*1.4).gt(0)
k=m.L()
s.drawCircle(p,o,q,k)
k.delete()}},
c67(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bP(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.dy(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a1()
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.b=A.ak
o.c=u
o.r=A.bK.j(0.45).gt(0)
n=o.L()
w.drawOval(B.cz(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=A.hD.gt(0)
n=k.L()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=A.ho.j(0.4).gt(0)
k.z=new B.hG(A.G,r)
n=k.L()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lb(d,e,f,45,A.bK,270)},
bIl(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.J(o,4)
m=C.cM(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.J(a7+C.cM(o,2)*4,4)/4
j=A.ev.ar(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cM(o,3))*(j*i)
if(h<=0.5)continue
g=D.cKl[A.o.J(o,5)]
J.bP(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dy(new B.v(0,l),i,j)
$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.sav(new B.a8(A.b4,A.bb,A.w,B.a([A.c,g],u),null,null).aB(0,B.dy(new B.v(0,l),f,h)))
a1=a0.L()
v.drawOval(B.cz(d),a1)
a1.delete()}$.a1()
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l.r=A.ho.gt(0)
a1=l.L()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lb(a5,a6,a7,30,A.hD,280)},
bWu(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.J(t+n/4,1)
l=B.c1(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a1()
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.c=v
j.r=D.apD[n].j((1-m)*0.8).gt(0)
i=j.L()
u.drawArc.apply(u,[B.cz(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.J(v*(0.06+0.06*C.cM(g,1))+C.cM(g,2)*h,h)
e=C.cM(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cM(g,4))
a0=D.apD[A.o.J(g,4)]
$.a1()
a1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(0)
J.bP(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.dy(A.J,d,d*1.5)
i=a1.L()
u.drawOval(B.cz(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.18)
i=o.L()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.3)
i=o.L()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bUW(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bP(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.a1()
a0=B.a([],s)
a1=new B.b0(d.r,A.aw,a3,a3,a0)
a0.push(new B.bj(0,i))
a0.push(new B.dl(h,m,0,g))
a0.push(new B.dl(j,m,0,i))
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=t
d.r=B.aq(A.bK,A.oG,k).j(0.7).gt(0)
a2=d.L()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=A.hD.j(0.8).gt(0)
a2=d.L()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a1()
a5=B.U()
a5.sav(new B.bS(A.B,0.5,A.w,a3,0,B.a([A.ho.j(0.25),D.TQ],x.O),a3,a3).aB(0,B.c1(w,a4)))
a7.aw(w,a4,a5)
this.lb(a7,a8,a9,30,A.bK,300)},
cmv(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a1()
h=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
h.r=A.bv.gt(0)
h.c=q
h.d=A.bZ
g=h.L()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
l.sav(new B.bS(A.B,0.5,A.w,null,0,B.a([A.hD,A.ho.j(0.6),D.TQ],o),null,null).aB(0,B.c1(new B.v(j,i),p)))
g=l.L()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cM(f,1)
d=A.k.J(b2+C.cM(f,2)*e,e)/e
a0=A.k.bK((b2+C.cM(f,2)*e)/e)
a1=C.cM(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cM(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a6.r=B.aq(A.hD,A.b_,d).j(1-d).gt(0)
a6.c=Math.max(0.8,u)
a6.d=A.bZ
a6.a=A.n0
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
g.delete()}}}this.lb(b0,b1,b2,35,A.bK,310)},
bzn(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOf(a9,new B.ap(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cM(n,1))
l=a8*(0.14+0.24*C.cM(n,2))
k=a8-l
j=new B.af(o,k,o+m,k+l)
$.a1()
i=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i.sav(D.bH_.aB(0,j))
h=i.L()
r.drawRect(B.cz(j),h)
h.delete()
g=A.k.bK(m/q)
f=A.k.bK(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cM(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a1()
a6=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a6.r=A.bK.j(0.85).gt(0)
h=a6.L()
r.drawRect(B.cz(new B.af(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aWl.prototype={
B(d){var w,v=null,u=new C.c2Q(),t=new C.c2S(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aiz,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c2R(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.F0[w]))
return B.cb(A.bH,s,A.bx,12,10)}}
C.X8.prototype={
S(){return new C.awI()}}
C.awI.prototype={
guM(){var w=this.d
return w===$?this.d=this.a.c:w},
gaUF(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.bb(w.b,A.aZ,A.aL),$.at())}return v},
gatE(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGx()
v=$.at()
u.f!==$&&B.bH()
t=u.f=new B.ao(new B.bb(w,A.aZ,A.aL),v)}return t},
p(){var w=this.gaUF(0),v=$.at()
w.R$=v
w.O$=0
w=this.gatE()
w.R$=v
w.O$=0
this.a2()},
XN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hQ().AY(90,700,700,A.et),$async$XN)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$XN)
case 8:p=e
o=q.b.toLowerCase()
n=J.afe(o,".png")?"image/png":"image/jpeg"
r.n(new C.d_L(r,n,p))
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
return B.i($async$XN,v)},
aUE(d){var w=null,v=A.c.j(0.07)
return B.bl(w,new B.b1(4,B.m(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aJN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aem(p.guM().a)
if(n==null)n=A.d.gI(D.F0)
w=p.guM()
v=p.r
u=x.p
v=B.C(new B.am(A.V,o,A.a9,A.q,B.a([B.bU(0,new C.LB(p.guM(),!1,!0,new B.cv(w.a+v,x.W)),0,0,0),B.an(o,B.G6(A.mI,new C.d_Q(d),B.ol(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.G6(D.brV,new C.d_R(p),B.ol(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJH,o,o,o)
t=B.C(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaUF(0),o,o,o,o,o,2,p.aUE("Big words"),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_S(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.h7,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.G(A.ho.j(0.6),A.r,1)
if(p.guM().d.length===0)q=D.bve
else{q=C.fVS(p.guM().d)
if(q==null)q=new Uint8Array(0)
q=B.hN(B.fD(q,A.B,o,o,A.ci,A.bM,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ab,B.aJ(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc0d(),o,o,o,o,o,o,!1,A.af)],u)
if(p.guM().d.length!==0)r.push(B.aF(o,o,o,o,D.Yt,o,o,o,new C.d_T(p),o,o,o,o,"Remove logo",o))
return B.ce(o,A.x,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.T,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gatE(),o,o,o,o,o,2,p.aUE("Line under it"),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_U(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o),A.aa,B.dj(D.bua,D.eVM,new C.d_V(p,d),B.bk(A.at,o,o,o,A.x,o,A.ca,o,new B.b5(B.m(14),A.W),o,o,o))],u),A.ad,o,A.e,A.R,0,A.p),A.h,o,o,D.aS1,o,o,o,o,A.Dz,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aI9.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.Xt.prototype={
S(){return new C.bc6(new B.ao(A.aq,$.at()))}}
C.bc6.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.K(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.aj,k=B.aG(d,A.bO,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.G(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.A(B.a([B.C(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.cu,l,o,o,o,o),o,o,o,new C.d6g(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cw2[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.b3(12,12)
q=new B.b3(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aH(!1,new B.bv(r,r,r,r),!0,B.p(A.B,new B.w(s,o,A.va,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bv(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d6h(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.B(A.hs,new B.w(v.a.toUpperCase(),o,new B.E(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.E4(A.bH,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aO
e.push(B.A(B.a([B.C(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bl(o,new B.b1(4,B.m(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aKB,new C.d6i(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dk(1,A.cj,B.cL(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aV(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rD,A.Vm,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bbu.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f6()
a2.dY(this.c)
w=this.b
v=w/6.283185307179586
$.a1()
u=B.U()
u.z=A.Oy
t=B.U()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ag()
l=a2.ag()
k=a2.ag()
j=0.8+a2.ag()*2.2
i=Math.sin(w*(3+a2.aG(4))+n)
h=A.k.J(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ag()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gt(0)
d=u.L()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gt(0)
d=t.L()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.a1()
a1=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a1.r=e.gt(0)
a1.c=1
d=a1.L()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.L()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ao(d){return d.b!==this.b}}
C.bbb.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.c_(new B.af(0,0,0+a7.a,0+a7.b),A.k6),a2=this.b,a3=Math.sin(a2*2),a4=$.a1(),a5=B.U()
a5.b=A.ak
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gt(0)
a5.z=A.mO
a6.bj(a1,a5)
a5=x.v
a4=new B.b0(a4.r,A.aw,a0,a0,B.a([],a5))
a4.N(new B.j2(a1))
v=new B.ahH(new B.xO(B.zY(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.lc()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.J(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.a1()
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.d=A.bZ
j.c=1.5+2*m/10
j.r=w.j(k).gt(0)
i=A.k.J(n-p*(1-m/10),t)
h=A.k.J(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.b0(r,k,a0,new B.d7([v,i,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.b0(r,k,a0,new B.d7([v,i,t,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.b0(r,a2.b,a0,new B.d7([v,0,h,!0]),B.a([],a5))
g=j.L()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.lc()
e=u[a3].a4j(n).a
$.a1()
k=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
k.r=w.gt(0)
k.z=Z.pi
g=k.L()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=A.c.gt(0)
g=d.L()
q.drawCircle(k,f,2,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.bjV.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f6()
e.dY(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.hd()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gajn()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a1()
i=B.a([],n)
h=new B.b0(j.r,A.aw,f,f,i)
i.push(new B.bj(w,v))
j=l-k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bW())
j=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
j.sav(B.aRu(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.jh
g=j.L()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.b6a.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f6()
a0.dY(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ag()
l=a0.ag()
k=Math.min(t,r)*(0.03+a0.ag()*0.09)
j=a0.ag()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.a1()
e=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
e.r=f.j(g).gt(0)
e.z=new B.hG(A.G,k*0.35)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
e.b=A.ak
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gt(0)
d=e.L()
w.drawCircle(i,h,k,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.b5N.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f6()
a0.dY(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ag()-0.5)*0.1)
k=v*(0.06+a0.ag()*0.05)
j=a0.ag()*3.141592653589793*2
i=$.a1()
h=B.a([],n)
g=new B.b0(i.r,A.aw,null,null,h)
h.push(new B.bj(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.av(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bH(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a1()
i=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i.b=A.ak
i.c=r
i.d=A.bZ
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gt(0)
i.z=new B.hG(A.G,u)
d=i.L()
i=g.e
t.drawPath((i==null?g.e=new B.cG(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.bqH.prototype={
a5(d,e){var w,v,u=new B.af(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a1()
w=B.U()
t=(0.5+0.5*t)*0.12
w.sav(new B.bS(A.B,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cCN,null).aB(0,u))
d.bp(u,w)
w=u.cD(-3)
v=B.U()
v.b=A.ak
v.c=2
v.r=this.c.j(0.1+t).gt(0)
v.z=A.jh
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bnL.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bK(d)*7,p=0;p<7;++p){o=new B.f6()
o.dY(q+p)
n=o.ag()*w
m=o.ag()*u
l=Math.sin(A.k.J(A.k.J(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ag()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.a1()
i=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i.r=j.gt(0)
i.c=1.4
i.d=A.bZ
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
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=A.c.j(l*0.9).gt(0)
g.z=new B.hG(A.G,k*0.3)
h=g.L()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ao(d){return d.b!==this.b}}
C.bmU.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.af(0,0,0+e.a,0+e.b)
$.a1()
v=B.U()
v.a=A.n0
v.sav(new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aB(0,w))
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.baw.prototype={
a5(d,e){var w,v,u,t,s,r=e.gef(),q=0.55+0.45*Math.sin(this.b)
$.a1()
w=B.U()
w.b=A.ak
w.c=1.4
w.d=A.bZ
v=this.d
w.r=v.j(0.55+q*0.35).gt(0)
u=B.U()
u.b=A.ak
u.c=4
u.r=v.j(0.12*q).gt(0)
u.z=A.qw
r=new C.d_s(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
ao(d){return d.b!==this.b}}
C.wE.prototype={}
C.H3.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aoi.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.tZ.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m4.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hm.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ex.prototype={
hr(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eh(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.R(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"type",v.b.b)
u.m(0,"x",v.c)
u.m(0,"y",v.d)
u.m(0,"w",v.e)
u.m(0,"h",v.f)
u.m(0,"text",v.r)
u.m(0,"fontSize",v.w)
u.m(0,"fontWeight",v.x.gdC(0))
u.m(0,"fontStyle",v.y.a)
u.m(0,"decoration",C.hya(v.z))
u.m(0,"color",v.Q)
u.m(0,"align",v.as.a)
u.m(0,"imageRef",v.at)
u.m(0,"shape",v.ax.b)
u.m(0,"fillColor",v.ay)
u.m(0,"strokeColor",v.ch)
u.m(0,"strokeWidth",v.CW)
u.m(0,"rotation",v.cx)
u.m(0,"bulletList",v.cy)
u.m(0,"fileName",v.db)
u.m(0,"pdfPage",v.dx)
u.m(0,"textTransition",v.dy.b)
u.m(0,"textAnimDelayMs",v.fr)
w=v.fx
if(w.length!==0)u.m(0,"morphKey",w)
w=v.fy
if(w.length!==0)u.m(0,"loopFx",w)
w=v.go
if(w.length!==0)u.m(0,"frame",w)
w=v.id
if(w.length!==0)u.m(0,"ring",w)
w=v.k1
if(w.length!==0)u.m(0,"textFx",w)
if(v.k2)u.m(0,"rich",!0)
w=v.k3
if(w!==0)u.m(0,"textBg",w)
return u}}
C.ln.prototype={
hr(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("I<1,ex>")
n=B.z(new B.I(n,new C.c8a(),m),m.k("ai.E"))
return C.qR(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("I<1,a0<n,@>>")
n=B.z(new B.I(n,new C.c8b(),m),m.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hR.prototype={
gb4w(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bg(v)},
gQp(){if(!C.kg(this.w))return!1
var w=this.gb4w()
if(w==null)return!1
return new B.N(Date.now(),0,!1).cU(w.bO())},
hr(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.z(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.z(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.T(r).k("I<1,ln>")
r=B.z(new B.I(r,new C.c8_(),q),q.k("ai.E"))
return C.Aq(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.R(x.N,x.z)
t.m(0,"id",u.a)
t.m(0,"name",u.b)
t.m(0,"themeId",u.c)
t.m(0,"aspectRatio",u.d.b)
t.m(0,"autoAdvanceSeconds",u.e)
t.m(0,"updatedAt",u.f.a4().aa())
w=u.w
if(w!=null)t.m(0,"deckKind",w)
w=u.x
if(w!=null)t.m(0,"marriageState",w)
w=u.y
if(w!=null&&A.a.i(w).length!==0)t.m(0,"transferClaimCode",w)
if(u.z)t.m(0,"transferReceived",!0)
w=u.Q
if(w!=null&&A.a.i(w).length!==0)t.m(0,"adminShareEditUntil",w)
w=u.as
if(w!=null)t.m(0,"signatureStrokeWidth",w)
w=u.at
if(w!=null)t.m(0,"signatureInkColor",w)
w=u.ax
if(w!=null&&A.a.i(w).length!==0)t.m(0,"kiapoSignedAt",w)
if(u.ay)t.m(0,"cinematic",!0)
if(u.ch)t.m(0,"loop",!0)
w=u.CW
if((w==null?"":w).length!==0)t.m(0,"aiOutlineJson",w)
w=u.cx
if(w!=null)t.m(0,"aiSlideIds",w)
w=u.cy
if(w!=null)t.m(0,"aiExtras",w)
w=u.db
if((w==null?"":w).length!==0)t.m(0,"finaleStyle",w)
w=u.dx
if(w!=null)t.m(0,"finaleTitle",w)
w=u.dy
if(w!=null)t.m(0,"finaleSubtitle",w)
w=u.fr
if((w==null?"":w).length!==0)t.m(0,"finaleLogo",w)
w=u.r
v=B.T(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.c80(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.js.prototype={}
C.aYu.prototype={
B(d){return B.cj(new C.c85(this))}}
C.alA.prototype={
S(){return new C.bfh(null,null)}}
C.bfh.prototype={
gaUG(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.h_,null,1,null,v)
w.cF(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
p(){this.gaUG().p()
this.boL()},
B(d){return B.c4(this.gaUG(),new C.dxQ(),this.a.c)}}
C.aHW.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aaW.prototype={
O5(d,e,f,g){return this.bI2(d,e,f,g)},
bI2(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O5)
case 3:s=i
if(d.e==null){w=1
break}B.a7(d,!1).K(null)
t=d.F(x.q).f
t.P(B.b_(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O5,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.G(A.c.j(0.08),A.r,1),s=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dm,24)],x.V),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.ar,B.d(o,v,n,A.Z,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.Z,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a1,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d1)
n.push(B.A(B.a([B.C(new C.abe(A.hi,"Download",A.bR,new C.eaO(w,d),!0,v),1),A.av,B.C(new C.abe(A.uu,"Share",A.bh,new C.eaP(w,d),!1,v),1),A.av,B.C(new C.abe(A.h2,"Safari",A.aW,new C.eaQ(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bG(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eaR(d),v,v))
return B.br(!0,new B.B(A.oZ,B.u(B.a([B.p(v,B.u(n,A.ad,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iy,v,t,u,s,v,A.n),v,v,v,v,A.DF,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.abe.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.G(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.er(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bjF,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYs.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anx(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.L(v,w,v,w)}else{v=6*w
u=new B.L(v,10*w,v,12*w)}t=i.c0e().ahz(1.35)
s=B.asH(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bu_(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bh,h,h,h,h,2,D.bD0,A.z,!0,h,!0,h,!1,i.x,A.ae,h,h,h,new B.cv("slide_tf_"+g.a,x.W),h,A.v7,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yd,A.am,h,A.Qy,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.q(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gV(v)
w=n?t.cyL(B.aX(g.Q).j(0.45),A.cz):t
p=g.as
l=m?1:h
k=m?A.eA:A.BE
p=B.d(f,new B.cv("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qp:s
$.a1()
j=B.U()
j.b=A.ak
j.c=3*w
j.e=A.fk
j.r=A.aG.gt(0)
j=i.cgt(p,t,k,j)
k=g.r
w=new B.am(A.V,h,A.a9,A.q,B.a([j,i.cgr(k,t,l?A.Qp:s)],x.p),h)}else w=i.cgs(p,t,g.k2?A.Qp:s,m)
v=new B.n8(w,new B.cv("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.af)}return new B.B(u,new B.bE(r,h,h,q,h),h)
case 1:case 4:return i.bRj()
case 3:return i.c8o()
case 2:return B.b2(h,h,h,new C.aYp(g,h),A.fj)
case 5:g=g.r
return new C.aYr(g,!i.e&&i.z==null,h)}},
c0e(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aX(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kw
j=A.cz
break
case"shadow":v=o.d
e=B.a([new B.cI(D.a9p,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cI(l,A.J,6*v),new B.cI(l,A.J,16*v),new B.cI(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cV
w=A.aG
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mc
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cI(A.bz,new B.v(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cI(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cI(A.bc,new B.v(-3*v,0),0),new B.cI(A.aH,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cI(A.dh,A.J,8*v),new B.cI(A.aH,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8l
break
case"ice":v=o.d
e=B.a([new B.cI(A.b3,A.J,10*v),new B.cI(A.cB,A.J,22*v)],x.r)
k=A.O
w=A.eq
break
case"chalk":h=o.d
e=B.a([new B.cI(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kw
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cEA[q]
u.push(new B.cI(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cI(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a1()
f=B.U()
v=o.d
f.sav(D.bEG.aB(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cI(A.Ip,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.a1()
f=B.U()
v=o.d
f.sav(D.bF_.aB(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cI(l,A.J,14*o.d)],x.r)
w=l
k=A.a1
break
case"lowercase":h=2*o.d
w=l
k=A.cp
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cI(l.j(0.45),new B.v(u,u),0),new B.cI(l.j(0.2),new B.v(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kw
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aX(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avw(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ecj.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c83(h)
v=r.k2?C.hKg(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eA:A.BE
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VE(B.dr(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cgt(d,e,f,g){return this.avw(d,e,f,!1,g)},
cgr(d,e,f){return this.avw(d,e,f,!1,null)},
cgs(d,e,f,g){return this.avw(d,e,f,g,null)},
bu_(d){switch(d.a){case 2:return A.B
case 1:case 5:return A.a7
default:return A.a_}},
bRj(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.as(B.V(s.b===D.kE?A.EC:A.A2,A.aB,t,t,t,32),t,t,t)}w=u.bwS(r)
if(s.b===D.kE){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.G(A.ct,A.r,1),s,B.a([new B.a9(0,A.G,A.x.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.L(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJG(r,!0)
return C.fhj(s.go,v,s.id)}return w},
aJG(d,e){var w,v,u,t
try{w=C.hKz(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c5(u,"_bg")
u=B.cj(new C.c82(this,w,v,e))
return u}catch(t){return D.a7C}},
bwS(d){return this.aJG(d,!1)},
c8o(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aWZ
return C.hKR(v,w.db,w.dx)}}
C.aYp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a1(),g=B.U(),f=this.b
g.r=B.aX(f.ay).gt(0)
w=B.U()
w.r=B.aX(f.ch).gt(0)
w.b=A.ak
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.af(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.bp(s,g)
d.bp(s,w)
break
case 1:d.lf(s,g)
d.lf(s,w)
break
case 2:r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(u/2,0))
r.N(new B.av(u,t))
r.N(new B.av(0,t))
r.N(new B.bW())
d.b4(r,g)
d.b4(r,w)
break
case 3:r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
h=t*0.45
r.N(new B.bj(0,h))
f=u*0.65
r.N(new B.av(f,h))
r.N(new B.av(f,t*0.2))
r.N(new B.av(u,t*0.5))
r.N(new B.av(f,t*0.8))
t*=0.55
r.N(new B.av(f,t))
r.N(new B.av(0,t))
r.N(new B.bW())
d.b4(r,g)
d.b4(r,w)
break
case 4:h=t/2
w.c=v+2
d.bU(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(q,0))
r.N(new B.av(u,0))
r.N(new B.av(u-q,t))
r.N(new B.av(0,t))
r.N(new B.bW())
d.b4(r,g)
d.b4(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.b0(h.r,A.aw,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.bj(k,j)
f.push(h)
v=r.f
if(v!=null)h.bH(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.av(k,j)
f.push(h)
v=r.f
if(v!=null)h.bH(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.N(new B.bW())
d.b4(r,g)
d.b4(r,w)
break}},
ao(d){return d.b!==this.b}}
C.aFz.prototype={
S(){return new C.bqe(null,null)}}
C.bqe.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.ie,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bqY()},
aJR(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bQ(B.as(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a_,A.a7,A.w,v,w,w),A.n),A.b7)},
bud(){var w,v=this,u=null,t=v.aJR("Slide A",A.bh),s=v.aJR("Slide B",A.aW)
if(v.a.c===D.cb)return new B.am(A.V,u,A.aX,A.q,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.ePp(v,s,t),u)},
B(d){return this.bud()}}
C.aGb.prototype={
iE(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jg(d){return d.b!==this.b}}
C.SW.prototype={
S(){return new C.bfr(null,null)}}
C.bfr.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bh(null,A.zt,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cb){w.st(0,1)
return}B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dII(u),x.a)},
bo(d){var w,v,u,t=this
t.bA(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.st(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cb)w.st(0,1)
else B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dIH(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.boZ()},
B(d){var w,v=this.a
if(v.c.dy===D.cb||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dIG(this),v.d)}}
C.H2.prototype={
B(d){return B.cj(new C.c7W(this))}}
C.awt.prototype={
S(){return new C.ba1()}}
C.ba1.prototype={
Z(){this.a0()
if(this.a.c!==D.cb)B.bK(A.Jv,new C.cY6(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cb)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.SW(C.eh(A.bf,!1,4279310375,A.az,"",4294538006,24,A.bg,A.a1,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.b8,o,2,"",0,0,"",u,D.eQ,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cv("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eh(A.bf,!1,4294967295,A.az,"",4280640491,22,A.bg,A.a1,"",0.2,"preview_text",p,"","",0,!1,"",0,D.b8,o,2,"Element flies in",0,0,"",q.a.c,D.cJ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.V,p,A.a9,A.q,B.a([w,B.an(32,new C.SW(t,B.p(p,D.eIA,A.h,p,p,new B.o(s,p,B.G(A.be,A.r,1),r,p,p,A.n),p,p,p,p,A.iE,p,p,1/0),!0,1,new B.cv("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bQ(n,D.aSz,A.b7)}}
C.a5s.prototype={
S(){return new C.bg5(null,null)}}
C.bg5.prototype={
gaVc(){var w=this.a
if(w.e)w=D.ecq.q(0,w.c)||D.aGZ.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVc()){w=C.hIW(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bh(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bpv()},
B(d){var w,v=this,u=v.d
if(!v.gaVc()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e0s(v,u,A.o.J(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWo.prototype={
B(d){var w=null
return B.as(C.aYt(!0,w,!1,C.eh(A.L,!1,this.e.l(),A.az,"",4280640491,this.f,A.bg,A.a1,"",0.2,"fx",w,"","",0,!1,"",0,D.b8,4280172719,2,"Aa",0,0,this.c,D.cb,D.cJ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bb9.prototype={
iE(d){return C.a0b(this.b,new B.af(0,0,0+d.a,0+d.b).cD(-this.c))},
jg(d){return d.b!==this.b||d.c!==this.c}}
C.blU.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.af(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0b(g,h),e=a1.gef(),d=new C.eEQ()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sav(D.aIt.aB(0,h))
a0.b4(f,w)
g=C.a0b(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b8s.gt(0)
a0.b4(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sav(D.elT.aB(0,h))
a0.b4(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gt(0)
g.z=new B.hG(A.G,e*0.04)
a0.b4(f,g)
g=d.$1(e*0.012)
g.r=A.c.gt(0)
a0.b4(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sav(D.elR.aB(0,h))
a0.b4(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a0b(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gt(0)
a0.b4(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bc.j(0.7).gt(0)
g.z=new B.hG(A.G,e*0.035)
a0.b4(f,g)
g=d.$1(e*0.016)
g.r=A.nU.gt(0)
a0.b4(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sav(D.elM.aB(0,h))
a0.b4(f,w)
w=C.a0b(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_7.gt(0)
a0.b4(w,v)
g=C.a0b(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b1h.gt(0)
a0.b4(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sav(D.aIt.aB(0,h))
a0.b4(f,g)
for(g=B.zY(f),w=B.a([],x.X),g=new B.xO(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jH(y.M));--q
g.lc()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bK(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.lc()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.lc()
m=w[q].a4j(p*n/o).a
l=D.cCa[A.o.J(n,4)]
$.a1()
p=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
p.r=l.gt(0)
k=p.L()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
i.r=A.c.j(0.9).gt(0)
k=i.L()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sav(D.elV.aB(0,h))
g.z=new B.hG(A.G,e*0.03)
a0.b4(f,g)
g=d.$1(e*0.018)
g.sav(D.elS.aB(0,h))
a0.b4(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a0b(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n6.gt(0)
a0.b4(g,w)
break}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bmR.prototype={
a5(d,e){d.Ex(C.a0b(this.b,new B.af(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.gef()*0.05,!1)},
ao(d){return d.b!==this.b||d.c!==this.c}}
C.aI8.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aIE.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aJX.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.a5L.prototype={}
C.M2.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBc(B.a([],x.D),B.a([],w),B.a([],w),B.R(v,u),B.R(v,x.bo),B.R(v,u),B.aZ(v),null,null)},
gdQ(){return this.c},
gRK(){return this.r},
gRL(){return this.w},
gK3(){return this.x}}
C.aBc.prototype={
Z(){var w,v=this
v.a0()
$.aS.c_$.push(v)
C.fmc()
$.h2i=new C.eh1(v)
w=B.bh(null,A.zr,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.H0()},
bo(d){var w,v,u=this
u.bA(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MM(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H0()}},
iM(d){if(d===A.yA||d===A.r_||d===A.qZ||d===A.oB)this.rI()},
p(){var w,v,u,t=this
$.aS.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rI()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}for(w=t.CW,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bF(0)
v.fU()}for(w=t.cx,w=new B.dw(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}t.bpJ()},
ga8M(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gN6(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9f(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQp())return!1
return!0},
jG(){return this.a9f(null)},
afL(){var w=this.c
if(w==null)return
w.F(x.q).f.P(D.eka)},
pv(){if(!this.jG())return!1
this.afL()
return!0},
anA(d){var w,v,u,t,s,r=this
if(r.a9f(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h1p(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yR(){return this.anA(null)},
H0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aok(k),$async$H0)
case 3:j=e
w=4
return B.b(C.an_(k),$async$H0)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fAD(j,t.bU5())
w=t.ga8M()?5:7
break
case 5:r=t.gN6()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWD(r),$async$H0)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bl(s,new C.edp())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bl(s,new C.edq())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xB(m==null?"":m)!=null)continue
C.fmo(n,s)
p=!0}t.n(new C.edr(t,s))
if(p||s.length>J.aa(j))t.rI()
case 1:return B.h(u,v)}})
return B.i($async$H0,v)},
bU5(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kg(w)&&w!==q}if(w)p.push(r)
return p},
ceW(d){var w,v=this,u=d.w
if(!C.kg(u)||u==="hati_kiapo_uongozi")return
v.a7D(d)
w=A.d.bf(v.d,new C.ef_(d))
u=v.d
if(w>=0){u[w]=d.hr()
v.d[w].f=new B.N(Date.now(),0,!1)}else A.d.cj(u,0,d.hr())
v.db=!1},
c9k(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kg(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ceW(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hR>")
s=B.z(new B.cQ(new B.a5(s,new C.eeO(),w.k("a5<1>")),new C.eeP(),v),v.k("F.E"))
return s},
MM(d){return this.bIp(d)},
rI(){return this.MM(null)},
bIp(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c9k()
w=3
return B.b(C.TT(d==null?t.a.c:d,s),$async$MM)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anA(r)?4:5
break
case 4:w=6
return B.b(C.a5_(r),$async$MM)
case 6:q=r.x
p=A.a.i(q==null?t.gN6():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bf(t.d,new C.ecN())
q=t.d
if(o>=0)q[o]=r.hr()
else A.d.cj(q,0,r.hr())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MM,v)},
oz(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kg(u.w))===!0?A.hG:A.ll
v.at=B.cV(w,new C.eg7(v))},
aUH(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acG(u.hr(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a8(v.ay)},
crS(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acG(w.e.hr(),w.f,w.r))
w.n(new C.egY(w,v.pop()))
w.oz()},
ce2(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acG(w.e.hr(),w.f,w.r))
w.n(new C.eeY(w,v.pop()))
w.oz()},
nB(){var w,v,u=this
if(u.e==null)return
w=A.d.bf(u.d,new C.egL(u))
if(w>=0){u.d[w]=u.e.hr()
u.d[w].f=new B.N(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.N(Date.now(),0,!1)},
Vw(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wv(){var w,v,u,t
for(w=this.ch,v=new B.dw(w,w.r,w.e);v.C();){u=v.d
u.R$=$.at()
u.O$=0}w.a8(0)
for(w=this.CW,v=new B.dw(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bF(0)
u.fU()}w.a8(0)},
IE(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.d8(new B.cQ(new B.a5(w,new C.egM(),v.k("a5<1>")),new C.egN(),u),u.k("F.E"))
w=this.ch
v=B.a2(w).k("cu<1>")
v=B.z(new B.cu(w,v),v.k("F.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.at()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bF(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cJ)continue
p=n.a
m=w.cg(0,p,new C.egO(n))
s.cg(0,p,new C.egP())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Gl(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.be(u.d,new C.ecb(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN6()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hr())}u.nB()
u.oz()},
ag4(d,e){var w,v,u,t,s=this
if(s.jG())return
w=s.Vw(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kg(v.w))===!0
if(u){C.hJ_(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hJ0(t,w.d+w.f*0.5)}}s.Gl()
s.nB()
s.oz()
if(u&&s.c!=null)s.n(new C.egZ())},
csW(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gl()
w.nB()
w.oz()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpy(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hH5(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aX(p==null?v.e:p)
u=q.bRy(v)
t=q.bRx(v)
s=B.aX(v.e)
r=v.f
return new C.js(o,"Class template",p,u,t,s,r==null?null:B.aX(r))}return C.hkI(o)},
bRy(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cJ)s=t.w>=28||A.o.D(A.o.ak(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aX(t.Q)}return A.M},
bRx(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cJ&&t.w<28)return B.aX(t.Q)}return A.aI},
ac3(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8M()){w.c.F(x.q).f.P(D.eiN)
return}w.a7D(d)
w.aVS(C.bxN(d))
return}if(C.c8P(v)){w.a7D(d)
w.aVS(d)
return}w.n(new C.ee6(w,d))},
ao9(){var w,v,u,t,s,r,q=this
q.a_L(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kg(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.ec9(q))
if(r&&q.c!=null){u.toString
q.Id(u,s)}return}q.rI()
q.n(new C.eca(q))},
aVR(d){this.a7D(d)
this.Ym(d,!0)},
a7D(d){if(!C.kg(d.w))return
C.fmo(d,this.d)},
Ym(d,e){return this.c5m(d,e)},
aVS(d){return this.Ym(d,!1)},
c5m(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ym=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bxN(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN6():r)
t.dy.W(0,q.toLowerCase())
C.an0(t.a.c,q)}r=s}else r=d
w=C.c8P(r.w)?3:4
break
case 3:w=5
return B.b(t.a7E(r),$async$Ym)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.be(t.d,new C.eet(l))
o=l.a.hr()
n=C.kg(o.w)&&C.hKb(o)
t.n(new C.eeu(t,o,p))
if(n){m=A.d.bf(t.d,new C.eev(o))
if(m>=0){t.d[m]=o.hr()
t.rI()}}if(!t.a9f(l.a))t.WC()
r=!1
if(t.c!=null)if(!t.a9f(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anA(r)&&C.fis(l.a)}else l=r
else l=r
if(l)t.c.F(x.q).f.P(D.ejm)
case 1:return B.h(u,v)}})
return B.i($async$Ym,v)},
a7E(d){return this.bGH(d)},
bGH(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.kZ(r.c,A.xW),$async$a7E)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kD(!1,r,s.c,s.d,null,A.xW,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7E,v)},
nu(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c8P(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c8d(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nu,v)},
abM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.ee5(),s,null,!0,!0,x.H),$async$abM)
case 3:if(t.c==null){w=1
break}t.ao9()
case 1:return B.h(u,v)}})
return B.i($async$abM,v)},
abL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.ee2(),s,null,!0,!0,x.H),$async$abL)
case 3:if(t.c==null){w=1
break}t.n(new C.ee3())
t.ao9()
case 1:return B.h(u,v)}})
return B.i($async$abL,v)},
WC(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$WC)
case 3:r=e
if(B.kq(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.an("Bool","ngmy_marriage_hint_seen",!0),$async$WC)
case 4:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ehq)
case 1:return B.h(u,v)}})
return B.i($async$WC,v)},
Id(d,e){return this.cfl(d,e)},
cfl(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Id=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.adX(s,t.gD8(),t.gD7(),!0,e,t.d),$async$Id)
case 9:w=4
break
case 6:w=10
return B.b(C.adY(s,t.gD8(),t.gD7(),!0,e,t.d),$async$Id)
case 10:w=4
break
case 7:w=11
return B.b(C.adZ(s,t.gD8(),t.gD7(),!0,e,t.d),$async$Id)
case 11:w=4
break
case 8:w=12
return B.b(C.ae_(s,t.gD8(),t.gD7(),!0,e,t.d),$async$Id)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Id,v)},
bT3(){var w,v,u,t,s=this
if(!s.ga8M()){s.c.F(x.q).f.P(D.ehD)
return}w=s.gN6()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.adW(u,t,v,new C.edl(s),new C.edm(s),w)},
ac4(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ac4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c0(A.dw,null,new C.eec(u),s,!0,!0,!1,A.l5,!1,!1,x.N),$async$ac4)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ae_(s,u.gD8(),u.gD7(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.adX(s,u.gD8(),u.gD7(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.adY(s,u.gD8(),u.gD7(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.adZ(s,u.gD8(),u.gD7(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bT3()
return B.h(null,v)}})
return B.i($async$ac4,v)},
c4u(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aUH()
w=C.cx()
v=C.Aq(t,t,t,t,D.B4,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.eed(u,v))},
a74(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a74=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hOt(s),$async$a74)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e7(q.r,new C.ecd())
t.cY(new C.ece(t,p,q,r))
s=t.c.F(x.q).f
o=r.r.length
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a74,v)},
ae2(d,e,f,g){var w=null,v=g?A.du:A.bN,u=B.G(g?A.be:A.ct,A.r,1)
return B.hJ(B.aJ(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.af),w,e,w,w)},
Yl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pv()){w=1
break}s=t.jj()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.eeo(),q),q.k("F.E"))}o=s!=null&&s.b===D.l4?B.a([s],x.u):p
if(o.length===0){t.c.F(x.q).f.P(D.ejx)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.eep(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yl)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yl,v)},
acl(){return this.c5l()},
c5l(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hOf(s,t.f+1,o),$async$acl)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.km(s,B.T(s).c)
p.a=A.d.bf(o.r,new C.eer(q))
t.cY(new C.ees(p,t,o,q,r))
t.c.F(x.q).f.P(D.ejW)
case 1:return B.h(u,v)}})
return B.i($async$acl,v)},
acs(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()||!t.yR()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.eeJ(),q),q.k("F.E"))
if(p.length===0){t.c.F(x.q).f.P(D.ehb)
w=1
break}o=new B.I(p,new C.eeK(),B.T(p).k("I<1,P>")).fs(0,new C.eeL())
r=B.R(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.bb(l,A.aZ,A.aL),$.at()))}q=t.c
q.toString
w=3
return B.b(B.c0(A.K,null,new C.eeM(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acs)
case 3:for(r=new B.dw(r,r.r,r.e);r.C();){q=r.d
q.R$=$.at()
q.O$=0}if(t.c!=null)t.n(new C.eeN())
case 1:return B.h(u,v)}})
return B.i($async$acs,v)},
ac7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ac7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pv()){w=1
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
return B.b(C.h3n(s,new C.D7(r,q,p,o==null?"":o)),$async$ac7)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cY(new C.eee(m,n))
s=t.c.F(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aem(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ac7,v)},
a7x(){return this.bG3()},
bG3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hOs(s,t.f+1,l),$async$a7x)
case 3:r=e
q=$.fE2
$.fE2=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cY(new C.ecu())
t.c.F(x.q).f.P(D.eh2)
w=1
break}if(!q){s=r.CW
s=C.h2g(l,s==null?"":s,!1)}else s=!1
if(s){t.cY(new C.ecv(t,l,r))
t.c.F(x.q).f.P(D.ekp)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.km(s,B.T(s).c)
s=l.r
m.a=A.d.bf(s,new C.ecw(p))
o=s.length
t.cY(new C.ecx(m,t,l,p,r))
n=s.length-o
s=t.c.F(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7x,v)},
aLV(d,e){if(e){this.acV()
return}this.c4u(d,!1)},
bBS(){return this.aLV(null,!1)},
acV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.bV,null,new C.eeT(t),r,!0,!0,!0,A.om,!1,!1,x.N),$async$acV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.eeU(t,C.hH4(s).oM()))
case 1:return B.h(u,v)}})
return B.i($async$acV,v)},
cY(d){var w=this
if(w.pv())return
w.Gl()
w.aUH()
w.n(d)
w.IE()
w.nB()
w.oz()},
a5C(){this.cY(new C.eb8(this,D.m7))},
aNi(){var w=this.gdk()
if(w==null)return
this.cY(new C.ecs(this,w))},
aMv(){var w=this.e
if(w==null||w.r.length<=1)return
this.cY(new C.ecq(this))},
aYH(d,e){if(this.e==null||d===e)return
this.cY(new C.ef1(this,d,e))},
Mk(d){return this.bDQ(d)},
bDQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN6():s)
w=5
return B.b(C.amZ(t.a.c,r),$async$Mk)
case 5:t.dy.H(0,r.toLowerCase())
case 4:s=d.a
C.aom(s)
w=6
return B.b(C.aYx(t.a.c,s),$async$Mk)
case 6:if(t.c==null){w=1
break}t.n(new C.ecm(t,d))
w=7
return B.b(t.rI(),$async$Mk)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mk,v)},
cfi(d,e){var w=this
if(d.z){w.afL()
return}w.n(new C.ef0(w,d,e))
w.oz()},
jj(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Uz(d){return this.ch.cg(0,d.a,new C.ecc(d))},
apX(d){return this.CW.cg(0,d.a,new C.ecO())},
a_L(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Vw(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aS.ae$.d.c
if(u!=null)u.ja()},
b0Y(){return this.a_L(!0)},
a_J(d){var w,v,u=this
if(u.pv())return
if(!u.yR())return
w=u.Vw(d)
if(w==null||w.b!==D.cJ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Uz(w).saR(0,"")}u.n(new C.egJ(u,d))
$.aS.x1$.push(new C.egK(u,d,w))},
b1w(d){var w=this
if(d.b===D.cJ&&!w.jG()&&w.yR()){w.a_J(d.a)
return}w.avW(d.a)},
avW(d){var w,v,u,t,s,r=this
if(r.jG())return
w=r.r
if(w!=null&&w!==d){v=r.Vw(w)
if(v!=null&&v.b===D.cJ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.eg8(r,s,d))
if(s||d==null){t=$.aS.ae$.d.c
if(t!=null)t.ja()}},
aIe(){this.cY(new C.eb9(this))},
ol(d){return this.bth(d)},
bth(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ol=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$ol)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cY(new C.eb6(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ol,v)},
TK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F5(78,1920),$async$TK)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cY(new C.eaX(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TK,v)},
TE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(S.Bz(t.a.c),$async$TE)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gah(s)){t.c.F(x.q).f.P(D.ekZ)
w=1
break}w=r.gG(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c0(null,null,new C.eaU(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TE)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cY(new C.eaV(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TE,v)},
aoY(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.be(w.gdk().z,new C.eco(v))){w.c.F(x.q).f.P(D.ek_)
return}if(w.w===v)w.a_L(!0)
w.cY(new C.ecp(w,v))},
bA9(){var w=this.jj(),v=w==null
if((v?null:w.b)===D.eQ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cJ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aIW(d,e){var w=this,v=w.jj(),u=w.gdk(),t=w.e
if(t==null)return
w.cY(new C.ebB(w,v,d,e,t,u))},
buQ(d){return this.aIW(d,null)},
a5U(d){return this.buY(d)},
buY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2V.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nu(),$async$a5U)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jj()
if(s!=null){r=s.b
if(r===D.cJ)t.buQ(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eQ){r=d.c
t.aIW(r.j(0.88),r)}w=1
break}t.cY(new C.ebG(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a5U,v)},
a5T(d){return this.buW(d)},
buW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jj()
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
return B.b(t.nu(),$async$a5T)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cY(new C.ebE(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5T,v)},
buG(d){var w=this.gdk()
if(w==null)return
this.cY(new C.ebA(this,w,d))},
Yq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hOo(r),$async$Yq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nB()
t.n(new C.eeD(t,s))
w=4
return B.b(t.rI(),$async$Yq)
case 4:if(t.c!=null)t.ac3(s)
case 1:return B.h(u,v)}})
return B.i($async$Yq,v)},
a7p(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_L(!0)
t.nB()
s=t.c
s.toString
w=3
return B.b(C.Pf(s,q),$async$a7p)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7p,v)},
Ck(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ck=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nB()
t=4
w=7
return B.b(C.aMz(m),$async$Ck)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aM_(o,q,m.b),$async$Ck)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a4(l)
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ck,v)},
DW(d,e){return this.crn(d,e)},
crn(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$DW=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pv()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_L(!0)
t.nB()
s=h.a=t.e.hr()}else{r=A.d.bf(t.d,new C.egS(d))
s=h.a=r>=0?t.d[r].hr():d.hr()}s=s.w
q=s==null
p=C.hI_(q?"":s)
o=C.h1c(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a5<1>")
n=B.z(new B.a5(s,new C.egT(h,p),q),q.k("F.E"))
s=h.a.b
w=3
return B.b(t.ckV(n.length,o,s),$async$DW)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hHU(h.a)
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
return B.b(t.ckU(n,o),$async$DW)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kU(t.d,new C.egU(s))
s=h.a.b
w=11
return B.b(t.ckS(k.b,s),$async$DW)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hr()
case 5:j=C.hHZ(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.F(x.q).f.P(D.el9)
w=1
break}w=12
return B.b(t.ckT(j.a,s,o,j.c),$async$DW)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.egV(h,t,i))
t.oz()
case 1:return B.h(u,v)}})
return B.i($async$DW,v)},
ckV(d,e,f){var w=this.c
w.toString
return B.c0(A.K,null,new C.ego(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ckU(d,e){var w=this.c
w.toString
return B.c0(A.K,null,new C.egn(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ckS(d,e){var w=this.c
w.toString
return B.c0(A.K,null,new C.egh(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ckT(d,e,f,g){var w=this.c
w.toString
return B.c0(A.K,null,new C.egj(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a8Q(){var w=null
return B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a8R(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.a9(0,A.G,d.j(0.28),A.dm,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aE,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.en,B.C(B.u(B.a([B.d(g,u,u,u,u,u,u,D.euU,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a1,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQt(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.G(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.Z,w,w,w,A.R1,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aQw(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aE,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.G(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.ba,B.C(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mU,w,w,w),A.d5,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a1,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A6,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.edh(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bQw(d,e,f,g,h,i){return this.aQw(d,e,f,!1,g,h,i)},
arg(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.G(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.bw,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VI,w,w,w)},
aQv(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.ca,w,new B.b5(B.m(14),A.W),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.mT,w,w,w),new C.edg(d,f),v)},
aQu(d,e){return this.aQv(d,e,null)},
Iu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oB(l,s.c,s.d),$async$Iu)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aP("=",l.length)+"\n\n"
q=new B.f4(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.hX(l,new C.eg9());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7x(l.charCodeAt(0)==0?l:l,r.b),$async$Iu)
case 4:l=t.a
w=5
return B.b(B.oA(l.c,l.d),$async$Iu)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iu,v)},
GH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oB(q,s.c,s.d),$async$GH)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7x(A.Q.aj(r.ad(),null),r.b+".json"),$async$GH)
case 4:q=t.a
w=5
return B.b(B.oA(q.c,q.d),$async$GH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GH,v)},
b0M(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nB()
u.rI()
w=u.c
w.toString
v=B.eH(new C.egI(u,t),!1,null,x.z)
B.a7(w,!1).cr(v)},
FV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$FV)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fmB(),$async$FV)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hKL(s.a)
q=t.c
q.toString
w=5
return B.b(B.c0(A.aG,null,new C.eb1(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FV)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cY(new C.eb2(t,s))
w=1
break}if(p==="split")t.cY(new C.eb3(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FV,v)},
LH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}w=3
return B.b(t.nu(),$async$LH)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMy(s,null,null),$async$LH)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cY(new C.eb7(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LH,v)},
aYu(d){var w=this.e
if(w==null||!C.kg(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKd(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMy(s,t==null?null:B.aX(t),u)},
a5A(d){return this.bt8(d)},
bt8(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yR()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.elo)
w=1
break}w=3
return B.b(t.aKd(),$async$a5A)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cY(new C.eaZ(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5A,v)},
adG(d){return this.ce5(d)},
ce5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yR()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ekx)
w=1
break}w=3
return B.b(t.aKd(),$async$adG)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cY(new C.eeZ(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adG,v)},
c1e(){var w,v,u=this
if(u.jG())return
w=new B.N(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cqt()}},
cqt(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cY(new C.egQ(this,r,(A.o.au(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bQR(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cY(new C.edk(this,r,u.d))},
bVh(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kg(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fjc(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kE&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bVi(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kg(w.w))!==!0)return!0
if(!this.yR())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fjc(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kE&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LQ(d){return this.bvm(d)},
bvm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yR()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ejn)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.an2(p),$async$LQ)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.F(x.q).f.P(D.ek1)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5_(r)
w=1
break}t.n(new C.ebK(t,d,o))
t.nB()
$.aS.x1$.push(new C.ebL(t))
case 1:return B.h(u,v)}})
return B.i($async$LQ,v)},
TI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$TI)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byq(),$async$TI)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cY(new C.eaW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TI,v)},
My(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$My=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$My)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jj()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fms(r),$async$My)
case 4:q=e
if(q==null){w=1
break}t.cY(new C.ecM(s,q))
case 1:return B.h(u,v)}})
return B.i($async$My,v)},
iz(d){this.cY(new C.eb4(this,d))},
pk(d){return this.buz(d)},
buz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pv()){w=1
break}m=!D.aH0.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nu(),$async$pk)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FV()
w=1
break A
case"sign_paper":t.LH()
w=1
break A
case"hd_photo":t.TI()
w=1
break A
case"sharpen":t.My()
w=1
break A
case"print":t.Ck()
w=1
break A
case"rotate":s=t.jj()
if(s!=null)t.cY(new C.ebd(s))
w=1
break A
case"text_box":t.aIe()
w=1
break A
case"picture":t.TK()
w=1
break A
case"present":t.b0M()
w=1
break A
case"new_slide":t.a5C()
w=1
break A
case"export_json":t.GH()
w=1
break A
case"outline_share":t.Iu()
w=1
break A
case"flashcard_tool":t.um(D.G0)
w=1
break A
case"quiz_tool":t.um(D.G1)
w=1
break A
case"worksheet_tool":t.um(D.G2)
w=1
break A
case"duplicate_el":s=t.jj()
if(s==null){w=1
break A}t.cY(new C.ebe(t,s))
w=1
break A
case"delete_el":t.aoY()
w=1
break A
case"bring_fwd":s=t.jj()
if(s==null||t.gdk()==null){w=1
break A}t.cY(new C.ebf(t,s))
w=1
break A
case"send_back":s=t.jj()
if(s==null||t.gdk()==null){w=1
break A}t.cY(new C.ebq(t,s))
w=1
break A
case"align_left":s=t.jj()
if(s!=null)t.cY(new C.ebt(s))
w=1
break A
case"align_center":s=t.jj()
if(s!=null)t.cY(new C.ebu(s))
w=1
break A
case"align_right":s=t.jj()
if(s!=null)t.cY(new C.ebv(s))
w=1
break A
case"grayscale":case"brighten":t.My()
w=1
break A
case"flip_h":s=t.jj()
if(s!=null)t.cY(new C.ebw(s))
w=1
break A
case"flip_v":s=t.jj()
if(s!=null)t.cY(new C.ebx(s))
w=1
break A
case"rectangle":t.ol(D.b8)
w=1
break A
case"circle":t.ol(D.ex)
w=1
break A
case"triangle":t.ol(D.jl)
w=1
break A
case"arrow":t.ol(D.B6)
w=1
break A
case"line":case"divider":t.ol(D.fb)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.hX(q,new C.eby()),o=0;p.C();){n=A.a.fl(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a5(n,new C.ebz(),B.T(n).k("a5<1>")).gG(0)}t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cx()
t.iz(C.iJ(A.L,!1,t.gpy().d.l(),A.az,40,A.bg,A.u,0.18,q,"Presentation Title",0,D.m8,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cx()
t.iz(C.iJ(A.L,!1,t.gpy().e.l(),A.az,22,A.bg,A.a1,0.12,q,"Subtitle goes here",0,D.d8,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iz(C.iJ(A.bf,!0,4279310375,A.az,20,A.bg,A.a1,0.5,C.cx(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ti,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iz(C.iJ(A.bf,!1,4279310375,A.az,20,A.bg,A.a1,0.5,C.cx(),"1. First item\n2. Second item\n3. Third item",0,D.th,0.8,0.1,0.22))
w=1
break A
case"quote":t.iz(C.iJ(A.L,!1,4279310375,A.az,24,A.cz,A.a1,0.25,C.cx(),'"Insert meaningful quote here."',0,D.d8,0.8,0.1,0.3))
w=1
break A
case"citation":t.iz(C.iJ(A.bf,!1,4284773515,A.az,14,A.bg,A.a1,0.1,C.cx(),"Author, Title (Year). Publisher.",0,D.ti,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iz(C.iJ(A.dK,!1,4279310375,A.az,14,A.bg,A.a1,0.08,C.cx(),C.bys(),0,D.d8,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iz(C.iJ(A.dK,!1,4279310375,A.az,13,A.bg,A.a1,0.06,C.cx(),"Page "+(t.f+1),0,D.d8,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cY(new C.ebg(t))
w=1
break A
case"footer_bar":t.cY(new C.ebh(t))
w=1
break A
case"highlight":t.cY(new C.ebi(t))
w=1
break A
case"redact":t.cY(new C.ebj(t))
w=1
break A
case"callout":t.cY(new C.ebk(t))
w=1
break A
case"checkboxes":t.iz(C.iJ(A.bf,!1,4279310375,A.az,20,A.bg,A.a1,0.45,C.cx(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.d8,0.8,0.1,0.2))
w=1
break A
case"table":t.iz(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a1,0.55,C.cx(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.d8,0.8,0.1,0.18))
w=1
break A
case"memo":t.cY(new C.ebl(t))
w=1
break A
case"letter":t.iz(C.iJ(A.bf,!1,4279179050,A.az,17,A.bg,A.a1,0.82,C.cx(),C.bys()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iz(C.iJ(A.bf,!1,4279310375,A.az,22,A.bg,A.O,0.76,C.cx(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ti,0.8,0.1,0.12))
w=1
break A
case"toc":t.iz(C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a1,0.76,C.cx(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.d8,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iz(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a1,0.08,C.cx(),"Signature: _________________________",0,D.d8,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iz(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a1,0.08,C.cx(),"Initials: ______",0,D.d8,0.3,0.65,0.78))
w=1
break A
case"approved":t.iz(C.iJ(A.L,!1,4278556265,A.az,28,A.bg,A.u,0.12,C.cx(),"APPROVED",0,D.m8,0.32,0.62,0.08))
w=1
break A
case"draft":t.iz(C.iJ(A.L,!1,4292617766,A.az,28,A.bg,A.u,0.12,C.cx(),"DRAFT",0,D.d8,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iz(C.iJ(A.L,!1,871318596,A.az,36,A.bg,A.u,0.12,C.cx(),"CONFIDENTIAL",0,D.d8,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cY(new C.ebm(t))
w=1
break A
case"progress":t.cY(new C.ebn(t))
w=1
break A
case"stars":t.iz(C.iJ(A.L,!1,4279310375,A.az,36,A.bg,A.a1,0.12,C.cx(),"\u2605\u2605\u2605\u2605\u2606",0,D.pn,0.8,0.1,0.4))
w=1
break A
case"equation":t.iz(C.iJ(A.L,!1,4279310375,A.az,32,A.bg,A.O,0.14,C.cx(),"y = mx + b",0,D.d8,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iz(C.iJ(A.L,!1,4279310375,A.az,18,A.bg,A.a1,0.2,C.cx(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.th,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cY(new C.ebo(t))
w=1
break A
case"compare":t.cY(new C.ebp(t))
w=1
break A
case"link_text":t.iz(C.iJ(A.bf,!1,4280640491,A.mc,16,A.bg,A.a1,0.1,C.cx(),"https://example.com",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"phone":t.iz(C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a1,0.1,C.cx(),"(555) 123-4567",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"email":t.iz(C.iJ(A.bf,!1,4280640491,A.az,18,A.bg,A.a1,0.1,C.cx(),"name@email.com",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cY(new C.ebr(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cY(new C.ebs(t,r))
w=1
break A
case"invoice":t.iz(C.iJ(A.bf,!1,4279179050,A.az,16,A.bg,A.a1,0.84,C.cx(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"resume":t.iz(C.iJ(A.bf,!1,4279179050,A.az,17,A.bg,A.a1,0.84,C.cx(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iz(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a1,0.88,C.cx(),"MEETING MINUTES\nDate: "+C.bys()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.d8,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iz(C.iJ(A.bf,!1,4279310375,A.az,17,A.bg,A.a1,0.88,C.cx(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.d8,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iz(C.iJ(A.bf,!1,4279310375,A.az,15,A.bg,A.a1,0.8,C.cx(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.d8,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pk,v)},
ckn(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ecn.q(0,this.z)},
ckm(d){if(this.jj()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2k(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cb,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.G(u,A.r,o&&e?2:1)
t=C.hKA(d)
s=o?12:18
r=o?A.I:A.cG
if(o)if(e)q=f
else q=g?A.al:A.aj
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.L(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Ls,A.h,p,p,D.Ck,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.B(A.hd,B.aJ(p,new B.am(A.V,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.af),p)},
bGj(d){var w,v=null,u=this.jj()
if(u==null)return A.bF
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.aj,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.I(D.NT,new C.ecL(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
um(d){return this.btg(d)},
btg(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$um=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aGX.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nu(),$async$um)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cY(new C.eb5(t,d))
case 1:return B.h(u,v)}})
return B.i($async$um,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ebv
w=h.e
if(w==null)return h.bwY()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.K(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bO,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.eo,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bV:D.b0R
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQp()}else j=!1
if(j)k.push(new C.a5t(h.a.c,!1,h.e.gb4w(),h.gc1b(),g))
else if(s&&h.e!=null&&!h.jG()&&C.c8P(h.e.w)){j=h.a
k.push(new C.a5t(j.c,j.d,g,h.gc2k(),g))}if(s)k.push(h.bGf(w,t,r))
if(s&&h.jG()){w=t?A.fn:A.jU
j=B.m(14)
i=B.G(A.bh.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bwY,A.ab,B.C(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fn,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zy,A.iD,g,g,g))}w=!n
if(w&&!h.jG())k.push(h.bWd(t,r))
if(w&&h.jG())k.push(h.cro(t))
if(r&&h.jj()!=null&&w&&!h.jG())k.push(h.bW9(t))
j=B.a([],l)
if(q&&w)j.push(new B.a3(132,g,h.b0i(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a3(g,72,h.b0i(t,!1),g))
i.push(B.C(new B.bE(A.b4,g,g,h.byd(v,t,!s||p),g),1))
if(h.ckn(r)&&u&&s&&!h.jG())i.push(h.c1_(v,t,r))
j.push(B.C(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jG()&&h.ckm(!1))j.push(new B.a3(240,g,h.bIN(t),g))
k.push(B.C(B.A(j,A.ad,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a3(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bWa(t))
return B.ce(g,m,B.br(!1,new B.am(A.V,g,A.a9,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bwY(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.K(p).ax.a===A.H
p=w?A.bV:A.bN
v=r.a.e
u=r.c0f(A.bh,A.p1,new C.ebO(r),r.gc4r(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.C(r.aHY(A.bh,A.hH,"Blank Presentation",new C.ebP(r)),1),A.av,B.C(r.aHY(A.aW,A.x4,"Class Template",new C.ebQ(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bs,s,A.mb,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.aj,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.aa],t)
t=r.d
if(t.length===0)u.push(r.bu2(w))
else{t=new B.hw(t,B.T(t).k("hw<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ebR(r,w),x.l))}return B.ce(q,p,B.br(!1,B.cL(u,q,new B.L(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bEE(){this.n(new C.ecr(this))
var w=this.c
w.toString
if(B.aG(w,A.bO,x.w).w.a.a<900){w=$.aS.ae$.d.c
if(w!=null)w.ja()}},
acm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jj()==null){w=1
break}s=t.c
s.toString
s=B.K(s)
r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.eeC(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acm)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acm,v)},
zN(d,e){return this.ckI(d,e)},
ckI(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hM(D.Tv,!0,"Dismiss",j,new C.ega(),new C.egb(d,e),A.ib,!0,x.N),$async$zN)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afL()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQp()){r.afL()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aMz(d),$async$zN)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aM_(j,q,d.b),$async$zN)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a4(i)
j=r.c
if(j==null){w=1
break}j.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.DW(d,!1),$async$zN)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hM(D.Tv,!0,"Dismiss",j,new C.egc(),new C.egd(d),A.X,!0,x.y),$async$zN)
case 20:if(g===!0)r.Mk(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adq("Rename presentation",d.b),$async$zN)
case 24:l=g
if(l!=null)r.cfi(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.m(0,"id",C.cx())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.ege(r,k))
r.oz()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zN,v)},
aWu(d,e){var w=null
return B.bG(!1,D.eRS,w,w,!0,w,w,e,w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.bh,w,w,w,A.as,w,A.ln,w,w,w,w,w,A.k2,w,w))},
bu2(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eba(this,d),null)},
bCM(d,e,f){var w=new B.I(B.a(d.split(" \u2022 "),x.s),new C.ecf(),x.dv).bZ(0,new C.ecg()),v=B.z(w,w.$ti.k("F.E"))
return new B.B(G.ac8,this.aIw(v,e,new C.ech(),f),null)},
aIw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ez)
t=e.j(g?0.14:0.1)
s=new B.b3(6,6)
r=new B.ax(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.al:A.bB,n,n,n,10),A.v5],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.E(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.aY,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.bv(s,s,s,s),n,n,A.n),n,n,n,n,A.nm,n,n,n))
A.d.v(l,u)}return B.eY(A.a_,B.A(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
bu0(d,e,f){return this.aIw(d,e,null,f)},
bCO(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cUA
else if(v==="hati_kuhoweya")w=D.cI0
else{if(v==="hati_kiapo_uongozi")v=D.cvY
else v=C.kg(v)?D.cCu:A.Nw
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.eck(this,f,d,e,w),null)},
bWa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jj()
if(i==null||i.b!==D.cJ)return A.bF
w=k.Uz(i)
v=k.apX(i)
u=A.x.j(0.55)
t=x.p
s=B.br(!1,new B.B(A.zB,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bG(!1,D.eNS,j,j,!0,j,j,new C.edL(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.G(A.bh.j(0.45),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.C(new B.B(A.h1,B.bQ(new B.B(A.eE,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bh,j,j,j,j,2,D.bCJ,A.z,!0,j,!0,j,!0,v,A.ae,j,j,j,j,j,A.v7,j,j,j,j,j,j,!1,"\u2022",j,new C.edM(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yd,A.am,j,A.Qy,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.b7),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.G(d?A.aI:A.aJ,A.r,1)
n=B.C(B.cf(B.A(B.a([k.t5(G.Ku,j,new C.edN(k,i),d),k.t5(G.WI,j,new C.edO(k,i),d),k.t5(I.age,j,new C.edP(k,i),d),k.t5(I.Xr,j,new C.edQ(k,i),d),k.t5(k.btZ(i.as),j,new C.edR(k,i),d),k.t5(D.ahm,j,new C.edS(k,i),d),k.t5(D.ahl,j,new C.edT(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aY),1)
m=A.k.M(i.w)
return B.bU(0,B.aD(!1,A.X,!0,j,B.u(B.a([s,r,new B.B(D.bev,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.aj,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d4],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lp,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bW9(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jj()
if(m==null)return A.bF
w=m.b
v=w===D.cJ
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aO],t)
s=B.G(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.a9(0,A.G,A.x.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.aZY(A.iY,"Edit",new C.edw(o,m),d,!0))
if(w===D.l4)p.push(o.aZY(A.Lg,"Shape & ring",new C.edx(o),d,!0))
p.push(o.t5(At.EA,"Format",new C.edy(o),d))
if(v)A.d.v(p,B.a([o.t5(G.Ku,n,new C.edz(o,m),d),o.t5(D.ahm,n,new C.edA(o,m),d),o.t5(D.ahl,n,new C.edB(o,m),d)],q))
p.push(A.b6)
p.push(o.ciD(A.e4,n,o.gaMt(),d,!0))
p.push(o.t5(A.hh,"Done",new C.edC(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a8(A.a_,A.a7,A.w,t,n,n),A.n),n,n,n,A.Du,A.lp,n,n,n)},
btZ(d){switch(d.a){case 2:return D.Xo
case 1:case 5:return D.Xq
default:return D.Xp}},
bX_(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bf}},
avV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aH
else if(h)w=A.c
else{v=g?A.al:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.EQ:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ez,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.B(A.qc,B.aD(!1,A.X,!0,n,B.aH(!1,v,!1,B.er(new B.B(new B.L(q,8,q,8),B.A(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t5(d,e,f,g){return this.avV(d,e,f,g,!1,!1)},
aZY(d,e,f,g,h){return this.avV(d,e,f,g,h,!1)},
ciD(d,e,f,g,h){return this.avV(d,e,f,g,!1,h)},
bGf(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.ml],m)
w=B.G(e?A.aI:A.pU,A.r,1.2)
v=B.a([new B.a9(0,A.G,A.bh.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a0a(A.es,"Back",p.gbzU(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.Z,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d4,B.C(B.A(B.a([new B.dk(1,A.cj,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c3:A.aj,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rt,o,A.e,A.j,0,A.cQ,o),1)],q)
if(!p.jG()){u=p.a0a(A.uC,"Undo",p.ax.length===0?o:p.gcrR(),e)
A.d.v(r,B.a([u,p.a0a(D.bqx,"Redo",p.ay.length===0?o:p.gce1(),e)],q))}r.push(p.a0a(A.wK,"PDF",new C.ecE(p),e))
r.push(p.a0a(A.hi,"Download as video",new C.ecF(p),e))
if(!p.jG())r.push(B.AE(o,o,B.V(A.np,e?A.al:A.bB,o,o,o,o),new C.ecG(p),A.J,new C.ecH(p),A.ag,"More",x.N))
r.push(A.d4)
r.push(B.aD(!1,A.X,!0,o,B.aH(!1,B.m(14),!0,B.er(D.dMN,o,new B.o(o,o,o,B.m(14),o,K.EQ,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gawJ(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aE,A.w,m,o,o),A.n),o,o,o,D.beq,D.bju,o,o,o)},
cro(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.G(d?A.d3:A.aJ,A.r,1)
return B.p(v,B.cf(B.A(B.a([w.ii(A.rZ,"Print",new C.egW(w),d),w.ii(A.wK,"Download PDF",new C.egX(w),d),w.ii(A.p8,"Present",w.gawJ(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aY),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zy,G.adS,v,v,v)},
a0a(d,e,f,g){var w,v=null
if(f==null)w=g?A.be:A.dt
else w=g?A.al:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bWd(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.G(d?A.d3:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.I(p,new C.edW(r,d),t),t.k("ai.E"))
t.push(new B.B(V.ady,new B.fj(new C.edX(r),q),q))
A.d.v(t,w?B.a([new B.B(R.ui,r.ae2(A.kX,"Ending celebration",r.gc4E(),d),q),new B.B(R.ui,r.ae2(A.Lg,"Logo ring & frame",r.gc5j(),d),q)],x.p):A.fS)
A.d.v(t,w?B.a([new B.B(R.ui,r.ae2(A.nq,"Look and feel",r.gc5k(),d),q),new B.B(R.ui,r.ae2(A.pc,"Edit this slide's text",r.gc5Q(),d),q)],x.p):A.fS)
t.push(new B.B(R.ui,B.hJ(B.aJ(q,B.p(q,D.eb_,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.a9(0,A.G,O.kR.j(0.4),A.J,10)],x.V),D.ajj,A.n),q,34,q,q,A.ig,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.edY(r),q,q,q,q,q,q,!1,A.af),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cf(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bjW,q,q,A.aY)
s=e?8:10
return B.p(q,B.u(B.a([t,B.cf(r.cgp(d),A.q,q,A.z,q,new B.L(8,2,8,s),q,q,A.aY)],x.p),A.ad,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zy,q,q,q,q)},
cgp(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cPd[v]
u.a=null
s=u.a=t.b
w.push(e.l8(e.ci3(s),t.a,new C.efk(u,e),a3,D.aGX.q(0,s)))}w.push(e.ii(A.ky,"Notes Slide",new C.efl(e),a3))
w.push(e.l8(A.Er,"Quiz",new C.efm(e),a3,!0))
w.push(e.l8(L.E4,"Worksheet",new C.efx(e),a3,!0))
w.push(e.l8(A.Ag,"Flashcard",new C.efI(e),a3,!0))
w.push(e.l8(A.Lh,"Lab Report",new C.efT(e),a3,!0))
w.push(e.l8(A.wR,"Rubric",new C.eg_(e),a3,!0))
w.push(e.l8(A.o6,"Minutes",new C.eg0(e),a3,!0))
w.push(e.l8(A.p6,"Syllabus",new C.eg1(e),a3,!0))
w.push(e.l8(A.Ez,"Timeline",new C.eg2(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cQm[v]
w.push(e.l8(r.b,r.c,new C.eg3(e,r),a3,!D.aH0.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ii(A.Ai,a0,e.gaId(),a3),e.ii(A.rW,"Picture",new C.efn(e),a3),e.ii(A.x1,"Bio link",new C.efo(e),a3),e.ii(A.XZ,"Table",new C.efp(e),a3),e.ii(A.Lm,"Sticky",new C.efq(e),a3),e.ii(A.ut,"Divider",new C.efr(e),a3),e.ii(A.EB,"Header",new C.efs(e),a3),e.l8(A0.Ec,"Rectangle",new C.eft(e),a3,!0),e.l8(A.rO,"Circle",new C.efu(e),a3,!0),e.l8(A.Xf,"Triangle",new C.efv(e),a3,!0),e.l8(A.jg,"Arrow",new C.efw(e),a3,!0),e.l8(D.boZ,"Parallelogram",new C.efy(e),a3,!0),e.l8(D.bry,"Hexagon",new C.efz(e),a3,!0),e.l8(A.ut,"Line",new C.efA(e),a3,!0),e.l8(A.wK,"PDF",new C.efB(e),a3,!0),e.l8(O.Y6,"Signature",new C.efC(e),a3,!0),e.ii(A_.Ab,"Quote",new C.efD(e),a3),e.ii(D.WQ,a1,new C.efE(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bO,x.w).w
u=x.p
t=B.A(B.a([e.aJ2("Wide 16:9",D.B4,a3),e.aJ2("Short 9:16",D.nx,a3),new B.B(A.hd,B.mG(D.btF,d,D.eKu,d,new C.efF(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bA8("This slide",!e.Q,a3,new C.efG(e)),A.bp,e.aLd("All slides",e.Q,a3,new C.efH(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bA9()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c3:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a1,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.I(D.ZT,new C.efJ(e),n),n.k("ai.E"))
n=B.cf(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cR8[v]
j=B.aX(k)
i=new B.ax(k===4294967295?A.dt:A.be,1.5,A.r,-1)
l.push(new B.B(A.hd,B.aJ(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.efK(e,k),d,d,d,d,d,d,!1,A.af),d))}l=B.cf(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bzI()
g=B.T(h).k("I<1,B>")
h=B.z(new B.I(h,new C.efL(e,a3),g),g.k("ai.E"))
return new B.a3(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.cf(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY),A.ar,e.bTa(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jj()
w=e.c
w.toString
w=B.aG(w,A.bO,x.w).w
u=new C.efj(e)
t=new C.eg4(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NT,f.dy,new C.efM(e,u,f),A.aW)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NT,q,new C.efN(e,u),A.bh))
return new B.a3(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ii(A.ky,w,new C.efO(e),a3),e.ii(A.rZ,"Print deck",new C.efP(e),a3),e.l8(D.afm,"Export JSON",new C.efQ(e),a3,!0),e.ii(A.fx,"Duplicate Slide",e.gaNh(),a3),e.ii(A.e4,a2,e.gaMu(),a3),e.cm_(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jj()
w=x.p
u=B.a([e.ii(D.WQ,a1,new C.efR(e),a3),e.ii(A.fx,"Duplicate",e.gaNh(),a3),e.ii(A.e4,a2,e.gaMu(),a3),e.ii(A.p8,"Present",e.gawJ(),a3),e.ii(A.Ah,a0,e.gaId(),a3),e.ii(A.Eo,"Fit Text",new C.efS(e),a3),e.ii(A.wK,"Download PDF",new C.efU(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ii(A.k_,"Transfer",new C.efV(e),a3))
if(f!=null){w=B.a([A.ab,e.ii(G.Ku,"Bold",new C.efW(e,f),a3),e.ii(G.WI,"Italic",new C.efX(e,f),a3),e.ii(G.aeX,"Underline",new C.efY(e,f),a3),e.ii(A9.Kv,"Bullets",new C.efZ(e,f),a3),e.bIw(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bGj(a3))
w.push(e.ii(D.bnF,"Delete",e.gaMt(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aJ2(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nx
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4t,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d4,D.bsR],v))
return new B.B(A.hd,B.jO(t,t,t,B.A(u,A.m,t,A.e,A.R,0,t,t),t,new C.ebJ(this,w,e),s===e,A.bh.j(0.25),t,t,t),t)},
cm_(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.G(d?A.be:A.ct,A.r,1)
u=B.m(8)
t=B.V(A.E2,d?A.aB:A.aj,q,q,q,14)
s=B.aF(q,q,q,q,D.aik,q,q,q,new C.egr(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aia,q,q,q,new C.egs(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.K6,A.mB,q,q,q)},
ci3(d){switch(d.a){case 6:return A.Ag
case 7:return A.Er
case 8:return L.E4
case 4:return A.EB
default:return A.ky}},
bIw(d,e){var w=null,v=B.G(e?A.be:A.ct,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aik,w,w,w,new C.ecR(this,d),w,w,w,w,w,A.c6),s=A.k.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aia,w,w,w,new C.ecS(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wu,A.mB,w,w,w)},
bTa(d){var w=null
return B.AE(B.C3(B.V(Ac.WT,d?A.al:A.bB,w,w,w,16),w,w,D.ePz,w,w,w),w,w,new C.edo(),A.J,this.gbuF(),A.ch,"Slide layout",x.fO)},
l8(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.G(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dE:A.bh,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Ls,A.h,w,w,D.Ck,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.B(A.hd,B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.er(new B.B(A.h1,B.u(B.a([new B.am(A.V,w,A.a9,A.h,q,w),A.d5,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bB,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ii(d,e,f,g){return this.l8(d,e,f,g,!1)},
b0i(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aY
v=B.hF(t,new C.egD(u,s,e,d),s.r.length,A.ch,t,w,new C.egE(e),!1)
s=d?A.aG:A.bN
w=B.a([],x.p)
if(e&&!u.jG())w.push(new B.B(A.ch,B.G6(E.aix,new C.egF(u),B.ol(t,A.bh,t,t,t,t,t,t,t,t,t,t,E.aHD,t,t,t,t),"Add slide"),t))
w.push(B.C(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
byd(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nx?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.B(new B.L(u,u,u,u),new B.bE(A.b4,v,v,new B.fN(w,B.aJ(v,B.cj(new C.ec7(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ec8(this),v,v,v,v,v,v,!1,A.af),v),v),v)},
byf(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kg(a9.w))===!0,b1=b0&&C.fjc(b3),b2=b0&&b3.b===D.kE&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jG())v=!b0||a7.bVi(b3)
else v=!1
if(!a7.jG())u=!b0||a7.bVh(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bh
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fGO(b3))o=a8
else if(p&&!a7.jG())o=a7.gc1d()
else o=a7.jG()?a8:new C.ebW(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jD
i=w&&C.fGO(b3)&&a7.yR()?new C.ebX(a7,b3):a8
h=v&&b3.b===D.cJ?new C.ebY(a7,b3):a8
g=u?new C.ebZ(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bq
else e=q?A.bR:r
else e=A.K
e=B.G(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bR.j(0.08)
else a0=b3.b===D.kE?A.K:a8
if(b1){a1=a7.jG()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bR.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bO,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yR()
a3=b3.b===D.cJ
a4=a3?a7.Uz(b3):a8
a5=a3?a7.apX(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bO,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ec_(a7,b3):a8
a3=v&&a3?new C.ec0(a7,b3):a8
a6=C.aYt(q,a4,a1,b3,a5,a2,a3,new C.ec1(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.bvD,A.h,a8,a8,new B.o(r,a8,B.G(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ec2(a7,b3,b4,b5),a8,a8,new C.ec3(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.af),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jG()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bwh,A.h,a8,a8,new B.o(A.fM,a8,B.G(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbQQ(),a8,a8,a8,a8,a8,a8,!1,A.af),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jG()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bxP,A.h,a8,a8,new B.o(A.bR,a8,B.G(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ec4(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.af),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cJ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bO,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.as(B.aJ(a8,B.p(a8,D.eXC,A.h,a8,a8,new B.o(A.bh,a8,a8,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kv,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ec5(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.af),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.et(A.B,f,new B.am(A.V,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.af),k*b5,new B.cv("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLd(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bh.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.G(e?A.bh:A.bG,A.r,1)
if(e)t=A.bh
else t=f?A.aB:A.aj
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d4,B.p(r,D.Ls,A.h,r,r,D.Ck,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.A(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h0,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.af)},
bA8(d,e,f,g){return this.aLd(d,e,f,g,!1)},
c1_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.at()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.bb(v,A.aZ,A.aL),$.at()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aO
t=f?A.vA:l
if(f)s=new B.c2(new B.ax(e?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tq,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.al:A.bB,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.aWu(e,new C.ee_(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c3:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.C(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bl(l,new B.b1(4,B.m(10),A.da),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ae,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ee0(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ad,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.L(12,w,12,v),l,l,l)},
aOx(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jj()
if(a2==null)return A.bF
w=new C.ed4(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dJ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.aWu(a3,a0.gbED())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.eKV,B.C(B.m8(a1,a1,a1,u,0.05,new C.ed5(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.eWc,B.C(B.m8(a1,a1,a1,t,0.05,new C.ed6(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cJ
if(m)o.push(B.A(B.a([D.eFe,B.C(B.m8(a1,a1,a1,96,10,new C.ed7(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l4
if(l||n===D.kE||n===D.P8)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.eQc,B.C(B.m8(a1,a1,a1,s,0,new C.ed8(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.eXm,B.C(B.m8(a1,a1,a1,r,0,new C.ed9(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Ax[j]
i.a=null
g=h.a
i.a=g
k.push(B.jO(a1,a1,a1,new B.w(h.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eda(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.cb(A.bH,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.As[j]
f.a=null
g=e.a
f.a=g
h.push(B.jO(a1,a1,a1,new B.w(e.b,a1,A.pA,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.edb(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.cb(A.bH,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.I(v,new C.edc(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.cb(A.bH,l,A.bx,6,6),A.aa,B.fSu(new C.edd(w,a2),D.c7o,B.eO([a2.as],k),!0,a1,k)],p))}if(n===D.eQ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.I(v,new C.ede(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.cb(A.bH,m,A.bx,0,6)],p))}o.push(A.aa)
o.push(B.dj(D.bxB,D.eS1,new C.edf(a0,a5),B.bk(A.bS,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.d3:A.c
p=a4?A.vA:a1
if(a4)o=new B.c2(new B.ax(a3?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tq,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Dv,a1,a1,a1)},
bIN(d){return this.aOx(d,!1,!1,null)},
c0f(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.edi(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.evM,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.ba,B.C(B.u(B.a([w,A.bw,A.d5,r.bu0(D.cA9,d,B.K(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dO(B.hJ(B.aD(!1,A.X,!0,q,B.aH(!1,q,!0,B.er(D.efQ,q,new B.o(q,q,B.G(A.c.j(0.55),A.r,1.3),q,B.a([new B.a9(0,A.G,A.bR.j(0.4),A.e6,8)],p),D.ajo,A.a6),q,q,q),A.cE,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.K(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aZ0,D.aZm],v):B.a([A.c,A.jU],v)
u=B.G(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.a9(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a8(A.ax,A.aE,A.w,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aHY(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.eaS(this,g,d,e,f),null)},
adq(d,e){return this.ccq(d,e)},
ccq(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.at()
q=new B.ao(new B.bb(e,A.aZ,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eeX(d,q),p,null,!0,!0,x.N),$async$adq)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adq,v)},
O6(d){var w=d.bO()
return""+B.bB(w)+"/"+B.bL(w)+"/"+B.bw(w)}}
C.acG.prototype={}
C.avR.prototype={
S(){return new C.b8P(null,null)}}
C.b8P.prototype={
gco5(){var w,v=this.a.c,u=v.f.bO(),t=""+B.bB(u)+"/"+B.bL(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,A.oU,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,D.bcY,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bnD()},
Hw(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.ar(0,new B.hD(w,v,A.co).ar(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.B(D.bin,B.c4(new B.h3(B.a([u,w],x.dS)),new C.cUC(this),v),v),v,v,v)}}
C.b92.prototype={
B(d){var w=null,v=B.m(22),u=B.G(A.aI,A.r,1),t=x.p
return B.as(new B.B(D.biE,B.aD(!1,A.X,!0,w,B.p(w,B.bu(B.m(22),B.u(B.a([new B.B(D.bhQ,B.u(B.a([B.p(w,D.bwn,A.h,w,w,new B.o(A.aH.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.eTV,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.ewS,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bc1,B.A(B.a([B.C(B.bG(!1,D.eJj,w,w,!0,w,w,new C.cUY(d),w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.mx,w,A.nB,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bj,w,w,w,48,w,w,w,w,w,1),B.C(B.bG(!1,D.eOa,w,w,!0,w,w,new C.cUZ(d),w,B.fp(w,w,w,w,w,w,w,w,w,w,w,A.aH,w,w,w,w,w,A.mx,w,A.nB,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.Sv,new B.o(A.aG,w,u,v,D.cAs,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.I3.prototype={
S(){return new C.b8O()}}
C.b8O.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.G(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.a9(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.h,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.d4(B.aJ(o,B.vZ(B.dg(o,B.A(B.a([r,A.av,new B.dk(1,A.cj,B.d(q,o,2,A.Z,o,o,o,B.l(o,o,l?A.fO:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b5,A.R,0,o,o),o,o,A.b9,new B.o(n,o,u,v,t,o,A.n),A.eD,o,o,o,A.rF,o,o,1/0),A.co,A.jc,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cUx(p,d),new C.cUy(p),new C.cUz(p),new C.cUA(p),o,o,o,!1,A.af),k),new B.v(0,(1-k)*16))}}
C.NG.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.G(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.eE,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aE,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.en,B.C(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mU,v,v,v),A.bw,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.Yk.prototype={
S(){return new C.aBf(D.d8,null,null)}}
C.aBf.prototype={
gWI(){var w,v=this,u=v.w
if(u===$){w=B.bh(null,D.bcy,null,1,null,v)
v.w!==$&&B.bH()
v.w=w
u=w}return u},
b0H(d){if(!this.a.c.ay)return
this.x=d
this.gWI().ic(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.asO(D.ema)
C.hHA()
v.Pv()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWI().p()
v=w.z
if(v!=null)v.a9(0)
C.asO(D.emb)
C.hHD()
w.bpK()},
cqQ(){B.j6()
this.n(new C.ehC())
var w=this.c.F(x.q).f
w.a2d()
if($.bgs)w.P(D.ej2)},
Pv(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cV(B.dB(0,0,0,0,0,A.o.D(C.fQF(u,w),1,120)),new C.ehs(v))},
cqv(){var w,v=this
v.n(new C.ehB(v))
if(v.r)v.Pv()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQm(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ckO(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.eht(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cV(A.o0,new C.ehu(w))},
asJ(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.eho(u))
u.Pv()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQm()){u.ckO()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.ehp(u,A.o.J(w+1,s)))
u.b0H(w)
u.Pv()}},
cb5(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.ehq(v))
v.Pv()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.ehr(v,w,t))
v.b0H(w)
v.Pv()}},
cmb(d){var w,v=this,u=v.e
if(u===D.cb){u=v.d
u===$&&B.c()
return new B.n8(d,new B.cv(u,x.ac))}w=v.cmc(u)
u=v.d
u===$&&B.c()
return B.ql(new B.n8(d,new B.cv(u,x.ac)),w,new C.ehz(),A.b9,A.b9,new C.ehA(v))},
cmc(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bcU
case 16:return A.kV
case 18:return A.ni
default:return A.oW}},
cma(d,e,f){var w,v,u,t=null,s=B.cF(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.tr,A.J,w),w.k("bc<bC.T>")),t,!0)
case 3:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pn,A.J,w),w.k("bc<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.ip,A.J,w),w.k("bc<bC.T>")),t,!0)
case 5:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.tp,A.J,w),w.k("bc<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(0.82,1,w),w.k("bc<bC.T>")))
case 7:w=x.b
return B.iF(A.B,new B.cZ(s,!1,e,t),t,new B.bc(s,new B.bm(1.18,1,w),w.k("bc<bC.T>")))
case 8:return B.c4(s,new C.ehv(s),e)
case 9:return B.c4(s,new C.ehw(s),e)
case 10:return B.c4(s,new C.ehx(s),e)
case 11:return B.c4(s,new C.ehy(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iF(A.B,e,t,new B.bc(s,new B.bm(1.03,1,w),w.k("bc<bC.T>"))),t)
case 14:w=s.gt(0)
v=x.K
return B.jy(B.jc(e,new B.bc(s,new B.bm(A.tr,A.J,v),v.k("bc<bC.T>")),t,!0),A.q,new C.bnl(w,t))
case 15:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pn,A.J,w),w.k("bc<bC.T>")),t,!0)
case 19:w=B.de()
w.me((1-s.gt(0))*2)
v=s.gt(0)
u=s.gt(0)
w.jd(v,u,v,1)
return B.fm(A.B,B.d4(e,s.gt(0)),t,w,!0)
case 20:return B.et(A.B,(1-s.gt(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jy(new C.alA(B.c4(n.gWI(),new C.ehD(n,v,w),m),m),A.q,m)}else{t=B.qV(new C.H2(w,!0,!1,m))
l=B.aX(w.e)
u=n.cmb(B.ec(B.jy(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.fQF(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ov,m,m,m),A.bp,D.byC],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fF,m,m,m)
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
l.push(B.bU(0,new C.LB(new C.D7(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nx?0.5625:1.7777777777777777
l.push(B.as(new B.fN(r,B.jy(B.tK(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgs){r=B.G6(A.kB,new C.ehE(d),B.ol(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.A(B.a([r,A.ab,B.G6(B.V(n.r?Af.x_:A.j0,m,m,m,m,m),n.gcqu(),B.ol(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h7,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fF,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c5,B.p(A.kM,$.bgs?A.bF:s,A.h,m,m,m,m,64,m,m,D.bdG,m,m,150),A.z,!1,m,n.gcqP(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.af),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.ce(m,A.x,B.aJ(m,new B.am(A.V,m,A.aX,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ehF(n,d),m,m,m,!1,A.af),m,!1,!1,m,m)}}
C.Ia.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.B(E.adl,this.c,w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSi,w,w,w,w,w,w,w,w)}}
C.bnl.prototype={
iE(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jg(d){return d.b!==this.b}}
C.bdE.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aPb
break A}w=B.m(6)
break A}v=s.e
u=B.G(v?A.aA:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.as(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uJ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b9,new B.o(s.f,r,u,w,r,r,A.n),A.hG,r,64,r,r,r,r,64)
return B.aJ(r,new B.a3(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.Z,r,r,r,B.l(r,r,v?A.aA:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.af)}}
C.bdD.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d1l.h(0,p)
if(o==null)o=D.cQs
p=p==="none"
w=p?q:new B.a8(A.a_,A.a7,A.w,o,q,q)
p=p?A.cS.j(0.25):q
v=r.e
u=v?B.G(A.aA,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahx:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ef,q,q,52)
return B.aJ(q,new B.a3(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.Z,q,q,q,B.l(q,q,v?A.aA:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.af)}}
C.aGR.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aIS.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.bsY.prototype={}
C.aIT.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aYw.prototype={}
C.TU.prototype={
S(){return new C.aBd()},
baV(d){return this.e.$1(d)}}
C.aBd.prototype={
gb_3(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7O(){var w,v
if(this.d==="all")return B.bi(this.a.d,!0,x.I)
w=this.gb_3()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaJT(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_3()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0h(){return A.d.cI(this.ga7O(),0,new C.eh8())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.P6()},
P6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZ6(s.c,s.f),$async$P6)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eh4(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
Hy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7O()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fmo(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oB(o,q.c,q.f),$async$Hy)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eH(new C.eh7(t,p),!1,null,x.H)
w=4
return B.b(B.a7(o,!1).cr(q),$async$Hy)
case 4:q=t.a
w=5
return B.b(B.oA(q.c,q.f),$async$Hy)
case 5:w=6
return B.b(t.P6(),$async$Hy)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hy,v)},
Pt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hl(o,D.dEI,!0,"NgmySlidesTransferScan",x.N),$async$Pt)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.eh5(t))
w=4
return B.b(C.aeM(s),$async$Pt)
case 4:r=e
t.n(new C.eh6(t))
o=J.a6(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.F(x.q).f.P(D.ehW)
w=1
break}w=5
return B.b(t.a.baV(r),$async$Pt)
case 5:q=t.c
if(q==null){w=1
break}B.a7(q,!1).K(null)
q=t.c.F(x.q).f
p=o.gG(r)
o=o.gG(r)===1?"":"s"
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pt,v)},
Hx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7O()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oB(s,r.c,r.f),$async$Hx)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fmD(null,A.d.gI(n),s,t.a.f)}else q=C.fmD(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.EU(q,"ngmy_slides_"+p,!1),$async$Hx)
case 4:o=e
s=t.a
w=5
return B.b(B.oA(s.c,s.f),$async$Hx)
case 5:w=6
return B.b(t.P6(),$async$Hx)
case 6:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Hx,v)},
a0l(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.eh9(t))
w=3
return B.b(C.bya(),$async$a0l)
case 3:s=e
t.n(new C.eha(t))
if(s==null||J.ch(s)){w=1
break}w=4
return B.b(t.a.baV(s),$async$a0l)
case 4:r=t.c
if(r==null){w=1
break}B.a7(r,!1).K(null)
r=t.c.F(x.q).f
q=J.a6(s)
p=q.gG(s)
q=q.gG(s)===1?"":"s"
r.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0l,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.dd:A.bN,k=o.ga7O().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bS(A.B,0.5,A.w,n,0,B.a([A.bh.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.cu,m?A.al:A.aj,n,n,n,n),n,n,n,new C.ehd(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.C(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.y9],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.a9(0,A.G,A.bh.j(0.35),A.eH,24)],x.V)
u=B.an(n,B.V(A.p1,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bz6,A.h,n,n,new B.o(t,n,B.G(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.en,B.C(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bm1],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hJ(B.aJ(A.c5,D.efS,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc60(),n,n,n,n,n,n,!1,A.af),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.V,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.YB,A.n),n,n,n,n,E.Vv,n,n,1/0),A.dW,o.atF(m,"What to transfer"),A.aa,B.A(B.a([B.C(o.aSw(A.p8,m,new C.ehe(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.C(o.aSw(D.boS,m,new C.ehf(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d1,o.atF(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.G(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c1,n,n,n))}else A.d.v(v,new B.I(u,new C.ehg(o,m),B.T(u).k("I<1,r>")))
A.d.v(w,v)}w.push(A.mb)
w.push(o.atF(m,"Transfer options"))
w.push(A.aa)
w.push(B.A(B.a([B.C(o.amL(A.b3,k,!0,A.j1,m,o.r,o.gc0j(),"Scan on another device","Show QR"),1),A.av,B.C(o.aHZ(A.j8,!0,A.iF,m,o.gchE(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.A(B.a([B.C(o.bsy(A.aS,k,A.hi,m,o.r,o.gc0g(),"Download .json","Backup file"),1),A.av,B.C(o.aHZ(A.b_,!0,Ap.x8,m,o.gct6(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bh.j(m?0.12:0.08)
u=B.m(16)
t=B.G(A.bh.j(0.28),A.r,1)
s=B.V(A.kY,A.bh.j(0.9),n,n,n,18)
r=o.gaJT()
q=o.gb0h()
p=o.gb0h()===1?"":"s"
A.d.v(w,B.a([A.bs,B.p(n,B.A(B.a([s,A.av,B.C(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.al:A.bB,n,n,n,n,n,n,n,n,12,n,n,A.a1,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.B(Ab.K7,i,n),B.C(B.cL(w,n,D.bh0,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.SO,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.ce(n,l,new B.am(A.V,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acz(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hNG(s,t.d,t.e),$async$acz)
case 2:return B.h(null,v)}})
return B.i($async$acz,v)},
atF(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bh,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.aj,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSw(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bh
else w=e?A.bG:A.aJ
w=B.G(w,A.r,g?2:1)
v=g?B.a([new B.a9(0,A.G,A.bh.j(0.2),A.cv,14)],x.V):s
u=A.bh.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bh,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.er(new B.B(A.bA,B.u(B.a([t,A.T,u,A.bw,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bCN(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bh
else w=e?A.bG:A.aJ
w=B.G(w,A.r,p?2:1)
v=B.p(q,D.bzf,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a_,A.a7,A.w,B.a([A.bh,A.bh.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.Z,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.C(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rO
if(p)r=A.bh
else r=e?A.be:A.dt
return new B.B(A.cH,B.aD(!1,A.X,!0,q,B.aH(!1,o,!0,B.p(q,B.A(B.a([v,A.ba,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eh3(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
amL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.G(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qe,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ai4,A.h,s,s,D.aS5,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d4(B.aD(!1,A.X,!0,s,B.aH(!1,p,!0,B.er(new B.B(E.V9,B.u(B.a([new B.am(A.V,s,A.a9,A.h,u,s),A.aa,v,A.bw,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aHZ(d,e,f,g,h,i,j){return this.amL(d,e,!1,f,g,!1,h,i,j)},
bsy(d,e,f,g,h,i,j,k){return this.amL(d,e,!1,f,g,h,i,j,k)}}
C.TV.prototype={
S(){return new C.bgr()}}
C.bgr.prototype={
Z(){this.a0()
this.abr()},
abr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fmD(null,A.d.gI(m),k,r.a.f):C.fmD(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kg(A.d.gI(n).w))C.fmo(A.d.gI(r.a.d),D.cOD)
n=r.a
m=n.c
n=C.hKQ(n.d)
w=7
return B.b(C.fmC(p,C.hKV(r.a.d),n,m,q),$async$abr)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.ehh(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.ehi(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abr,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.K(d).ax.a===A.H,h=i?A.dd:A.bN,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ehj())
v=B.aF(j,j,j,j,B.V(A.es,i?A.al:A.aj,j,j,j,18),j,j,j,new C.ehk(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.C(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.y9],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.YB,A.n),j,j,j,j,E.Vv,j,j,1/0)
q=B.m(24)
s=B.G(A.b3.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3O,A.L,j,j))
else if(k.d==null)r.push(D.dMo)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.a9(0,A.G,A.aA.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eJL,A.ar,B.aJ(j,B.p(j,B.A(B.a([D.bAL,A.av,B.d(m,j,j,j,j,j,j,D.exe,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bEw,A.n),j,j,j,j,Y.ad7,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ehl(k,d),j,j,j,j,j,j,!1,A.af),A.P,D.eNJ,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.G(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pj(j,j,!1,l,j,!0,!0,j,!1,D.b9C),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.i1,A.L,j,j))
return B.ce(j,h,B.br(!0,B.u(B.a([new B.B(Ab.K7,v,j),B.C(B.cf(B.u(B.a([t,A.aN,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bGf,A.n),j,j,j,j,A.rJ,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adq,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aBa.prototype={
S(){return new C.aBb(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aBb.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.eaM(w))
$.aS.x1$.push(new C.eaN(w))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
aUJ(){var w,v=this.c
v.toString
w=C.xB(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a7(v,!1).K(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eo,x.w).w,i=B.m(28),h=B.G(A.bh.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.a9(0,A.G,A.bh.j(0.28),A.to,36),D.a76],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bwq,A.h,k,k,new B.o(d,k,B.G(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.aa,D.eH8,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a1,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aSu,k,k,k,k,A.wt,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge_()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b3(14,14)
if(q)n=A.bh
else n=r?A.bh.j(0.55):A.aI
m=new B.ax(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.a9(0,A.G,A.bh.j(0.28),A.J,12)],g):k
t.push(new B.bF(1,A.bn,B.dg(A.B,new B.w(p,k,D.ere,k,k,k,k,k,k,k,k,k),k,k,A.b9,new B.o(s,k,new B.c2(m,m,m,m),new B.bv(o,o,o,o),n,k,A.n),A.hG,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.GU)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bU(0,B.d4(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bDp,A.z,!0,k,!0,k,!1,v,A.ae,k,k,B.a([new B.tB(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Aa(5,k),new C.bqy()],x.aS),k,k,A.aIR,k,5,k,1,k,k,!1,"\u2022",k,new C.eaI(l),k,new C.eaJ(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lA,k,k,k,k),0),0,0,0)],a1)
d=C.xB(w.a.a.toUpperCase())==null?k:l.gc0k()
return B.as(new B.B(new B.L(24,24,24,24+j.f.d),B.aD(!1,A.X,!0,k,new B.d2(A8.Ib,B.p(k,B.bu(e,B.u(B.a([a0,new B.B(D.bhv,B.u(B.a([new B.am(A.V,k,A.a9,A.q,g,k),A.T,D.eFD,A.bs,new B.a3(1/0,50,B.bJ(D.eUK,d,B.bk(A.bh,A.bj,A.aj,k,A.c,k,k,k,new B.b5(B.m(16),A.W),k,k,k)),k),A.ar,B.bG(!1,A.mX,k,k,!0,k,k,new C.eaK(a2),k,B.fp(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.dd,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.bqy.prototype={
nV(d,e){var w=e.a.toUpperCase()
return e.cz2(B.h1(A.bo,w.length),w)}}
C.aon.prototype={
S(){return new C.aBe(B.y7(A.Jq,A.n3,A.t6))}}
C.aBe.prototype={
p(){this.d.p()
this.a2()},
aUI(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iC(w,d)},
a7H(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fuJ(s),$async$a7H)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aUI("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
c0i(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.hKT(w[u])
if(t!=null){this.aUI(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uG,s,s,s,t.gbGO(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.rU:Ag.L_,s,s,s,s,s),s,s,s,new C.ehn(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dd,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.eVU,s,s,s,1,s,!0)
r=B.y6(t.d,A.bM,t.gc0h())
w=B.m(28)
w=B.as(B.p(s,s,A.h,s,s,new B.o(s,s,B.G(A.bh,A.r,3),w,B.a([new B.a9(2,A.G,A.bh.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.ce(p,A.x,new B.am(A.V,s,A.aX,A.q,B.a([r,w,B.an(32,B.p(s,D.eKJ,A.h,s,s,new B.o(v,s,B.G(A.bh.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iE,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bqK.prototype={
B(d){var w=null,v=B.m(24),u=B.G(A.aI,A.r,1)
return B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([B.p(w,D.buD,A.h,w,w,D.aSe,w,56,w,w,w,w,w,56),A.aN,D.eVA,A.ar,new B.k1(this.c,new C.eRR(),w,w,x.cI),A.aN,new B.k1(this.d,new C.eRS(),w,w,x.cl),A.aa,D.eVx],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A8.Ib,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.VC,D.bi7,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5t.prototype={
S(){return new C.bga(A.bu)},
gd6(){return this.c}}
C.bga.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XO()
w.d=B.dD(A.h_,new C.e1j(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XO(){return this.ce8()},
ce8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e1h(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.N(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c8Q(p.c),$async$XO)
case 6:r=e
q.a=r==null?A.bu:r
case 4:if(t.c==null){w=1
break}t.n(new C.e1i(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XO,v)},
bIE(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ak(u,6e7)%60
v=A.o.ak(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.ak(w,6e7)<30&&A.o.ak(w,36e8)<999?A.aH:A.bR
w=v.j(0.14)
u=B.m(14)
t=B.G(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.V(A.E2,v,r,r,r,20),A.av,B.C(B.d("Marriage document session \xb7 "+s.bIE(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bel,A.iD,r,r,1/0)}}
C.a6k.prototype={
mG(){var w,v,u,t=this
t.wg()
w=t.cx
v=t.c
w.bkk(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.pp(B.D(["/S",D.dP1,"/URI",new B.qS(B.Ur(w.as),A.tt,!0)],x.N,u),u))}}
C.a6l.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_9.prototype={
brF(d,e,f,g,h,i,j,k,l,m){var w=B.eO([D.dNk],x.di)
this.w!==$&&B.aO()
this.w=w},
gcCc(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jA(w,new C.cb2(),B.a2(w).k("jA<ck.E,H>")).fs(0,new C.cb3())},
ayW(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.h_(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rO(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.iY(d.a,d.b))
s.m(0,"/Border",B.rO(D.bI9))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fQ(t.gcCc()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pp(w,x.Y))}}
C.cb4.prototype={}
C.a0I.prototype={}
C.afA.prototype={}
C.aNJ.prototype={
fM(d){var w,v,u,t,s,r,q=this,p=null
q.kJ(d)
q.Ko(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bai(w)
u=x.N
t=x.Y
s=new C.cb4(q.d.a,"/Link",w,p,p,p,p,p,B.R(u,t))
s.brF(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pp(B.D(["/Type",D.dP_],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6k(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.H(0,r)
v.dx.push(r)}}
C.atM.prototype={}
C.aPd.prototype={
fM(d){var w,v,u,t,s=this
s.kJ(d)
w=s.b
if(w!=null){v=B.de()
u=s.a
v.dX(u.a,u.b,0,1)
u=d.b
u.hQ()
t=s.a
t.toString
u.Jz(t)
u.QF(0)
u.od(0,v)
w.fM(d)
u.mJ(0)}}}
var z=a.updateTypes(["au<~>()","~(ln)","Q(hR)","~()","Q(ex)","Q(nS)","Q(ln)","~(hR)","Q(ex,ex)","Ia(Y)","Q(nh)","Q(kV)","au<Q>()","H(H,hR)","a0<n,@>(hR)","al<yq>()","n(nh)","Q(a5K)","n(ln)","n(v7)","Q(Dg)","H(hR,hR)","n(ex)","r(ex)","cE(ex)","r(hm)","~(hm)","ex(tZ,P,P,P,P,H{fx:n,key:n,rotation:P})","ex(n,P,H)","H(nS,nS)","Q(yq)","Q(n,al<yq>)","a0<n,@>(nS)","nh()","Wq(Y)","ex(n,P,P,P,P,P{align:pv,anim:hm,bullets:Q,color:H?,delay:H,fx:n,key:n,style:G1,weight:pO})","ZE(Y)","ex(n,P,P,P,P{anim:hm,delay:H,fx:n,key:n})","au<~>(nS)","Q(m0)","Wo(Y)","Zc(Y)","Zb(Y)","Nw(Y)","XA(Y)","ex(tZ,P,P,P,P,H,n,n{anim:hm,delay:H,rotation:P,stroke:H,strokeWidth:P})","ex(n,P,P,P,P,P,n,n,H)","ex(P,P,n,H{size:P})","r(qH,P,P)","kV()","nS(a0<@,@>)","~(tR)","Dg()","f5(ex)","r(iM)","X8(Y)","~(D7)","Xt(Y)","H(ex,ex)","ex(ex)","a0<n,@>(ex)","ex(a0<@,@>)","ln(ln)","a0<n,@>(ln)","ln(a0<@,@>)","Q(js)","js()","n(hR)","~(al<nS>)","N(al<hR>)","N(hR)","al<hR>(n?)","aaf(Y,H)","~(Q(ex,ex))","aaT(Y)","acw(Y,H)","x(ln,Q)","TH(Y)","aaW(Y)","TK(Y)","~(m4)","hR(hR)","P(ex)","YH(Y)","Yk(Y)","hR()","al<DC>()","au<~>(al<hR>)","r(bq<H,hR>)","B(js)","B(Dg)","au<~>(hm,~())","r(al<hm>,hm?,~(hm),x)","Q(lJ)","al<jb<m4>>(Y)","jb<m4>(m4)","hR(a0<@,@>)","TU(Y)","ex(n,P,P,P,P,P,H{align:pv,style:G1,weight:pO})","TV(Y)","r(hR)","~(lE)","H2(Y,ln,r?)","H(a6l)","au<al<a0<n,@>>?>()","n(n)","au<yo>({paper:n?,photo:dz?,request:n,template!kY})","au<a5C>({doc!yo,history:al<+(n,n)>,instruction!n,photo:dz?,template!kY})","aaQ(Y)"])
C.cxW.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cxX.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:86}
C.cxY.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gah3(s):16;--w.c}w.b=A.o.dO(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lV(v,t)
w.b=v-A.o.dO(q,t)
w.a=t
return q},
$S:86}
C.cxZ.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bJC.prototype={
$1(d){return J.eP(A.dz.gaL(d),d.byteOffset,d.byteLength)},
$S:1660}
C.f9P.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iw(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iw(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iw(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iw(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1661}
C.bTI.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:26}
C.bTJ.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bTL.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fp2.prototype={
$1(d){return new C.ZE(this.a,this.b,C.hLL(),null)},
$S:z+36}
C.eQj.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eQn.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.eQo.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eQp.prototype={
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
C.eQk.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eQl.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eQm.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eQe.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hk,w,w,w)
return B.ep(B.a([B.bG(!1,D.eJf,w,w,!0,w,w,new C.eQc(d),w,w),B.bG(!1,D.eIp,w,w,!0,w,w,new C.eQd(d),w,w)],x.p),w,w,D.U9,v,w,w,w,w,D.eWb,w)},
$S:20}
C.eQc.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eQd.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.eQf.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eQg.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eQt.prototype={
$0(){var w=this.a
return w.n(new C.eQs(w,this.b))},
$S:0}
C.eQs.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eQi.prototype={
$0(){var w=this.a
return w.n(new C.eQh(w,this.b,this.c))},
$S:0}
C.eQh.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.H(0,v)},
$S:0}
C.eQq.prototype={
$0(){return this.a.ZQ(this.b)},
$S:0}
C.eQr.prototype={
$0(){return this.a.No(0,this.b)},
$S:0}
C.eQw.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eQx.prototype={
$0(){var w=this.a
return w.n(new C.eQv(w,this.b))},
$S:0}
C.eQv.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.I(w,new C.eQu(),B.T(w).k("I<1,n>")))}},
$S:0}
C.eQu.prototype={
$1(d){return d.a},
$S:z+67}
C.eXu.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Z(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fO2(w.b(t.h(0,"doc"))?B.Z(w.a(t.h(0,"doc")),v,u):A.cr)
t=t.h(0,"updatedAt")
u=B.bg(J.k(t==null?"":t))
return new C.nS(s,v,u==null?new B.N(Date.now(),0,!1):u)},
$S:z+50}
C.eXv.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fc_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbn())q=n===o.gbn()&&p.b>o.gcB()}if(q)v.m(0,s,t)}},
$S:z+68}
C.fbY.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fbZ.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.foA.prototype={
$1(d){return d.ad()},
$S:z+32}
C.f9v.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fpo.prototype={
$1(d){return new C.Wq(this.a,null)},
$S:z+34}
C.czh.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.czj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.czm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czn.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.czl())},
$S:11}
C.czl.prototype={
$0(){},
$S:0}
C.czo.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_C(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.bf(s,new C.czk(r))
if(p<0)q.cj(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.aeV(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.czk.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czp.prototype={
$1(d){},
$S:29}
C.czi.prototype={
$1(d){return new C.Wo(this.b,this.a.gcnr(),null)},
$S:z+40}
C.czq.prototype={
$1(d){return D.f14},
$S:z+43}
C.czd.prototype={
$1(d){var w=null,v=B.m(24),u=B.G(D.TV,A.r,1),t=x.p
return B.as(B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([new B.B(D.bhU,B.u(B.a([B.p(w,D.btG,A.h,w,w,new B.o(A.aH.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aN,D.eHw,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.ewi,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.B(A.oZ,B.A(B.a([B.C(B.dU(D.eNL,new C.czb(d),B.d9(w,w,w,w,w,w,w,w,w,E.mr,w,w,A.ca,w,new B.b5(B.m(14),A.W),D.aPB,w,w,w,w)),1),A.av,B.C(B.bJ(D.eT9,new C.czc(d),B.bk(A.bS,w,w,w,w,w,A.ca,w,new B.b5(B.m(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vE,new B.o(D.a8u,w,u,v,D.cEx,w,A.n),w,w,w,K.VC,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1662}
C.czb.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.czc.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cze.prototype={
$0(){return J.n_(this.a.d,new C.cza(this.b))},
$S:0}
C.cza.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cz9.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.G(D.TV,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.byu,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajj,A.n),t,44,t,t,t,t,t,44),A.ba,B.C(B.u(B.a([B.d(this.a.b.a,t,1,A.Z,t,t,t,D.aKq,t,t,t),A.bw,D.eT5],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.cXT[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auD(u[1],u[2],u[3],new C.cz7(v,d),!1,t))}q.push(A.ar)
q.push(D.bc4)
q.push(A.ar)
q.push(new C.auD(A.e4,"Delete book","Remove it from this device",new C.cz8(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8u,t,r,s,t,t,A.n),t,t,t,A.rD,E.Vf,t,t,t),!0,!1,A.ag,!0,!0)},
$S:33}
C.cz7.prototype={
$0(){var w=this.a.a
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.cz8.prototype={
$0(){B.a7(this.a,!1).K("delete")
return null},
$S:0}
C.czg.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.a9(0,A.G,A.x.j(0.45),A.aAT,12)],x.V)
return B.dO(B.et(A.B,e,B.p(w,B.bu(B.m(4),new B.a3(62,95.81818181818181,B.eY(A.B,F.alr(d),A.h,A.dp),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.czf.prototype={
$0(){return this.a.bWQ()},
$S:0}
C.cz6.prototype={
$0(){return this.a.aTC(0,this.b)},
$S:0}
C.cz5.prototype={
$0(){return this.a.C_(this.b)},
$S:0}
C.cz4.prototype={
$0(){return this.a.C_(this.b)},
$S:0}
C.czr.prototype={
$2(d,e){var w=this.a
return w.bvY(J.q(w.d,e))},
$S:42}
C.cyy.prototype={
$0(){var w=this.a
if(w.c!=null)w.zJ()},
$S:0}
C.cyx.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aW8("Page "+(v.length+1),"",""))},
$S:0}
C.cyA.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cyI.prototype={
$0(){},
$S:0}
C.cyJ.prototype={
$1(d){var w=this.a,v=w.a,u=$.at()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cyB.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cM.gcq().aE(this.c)},
$S:0}
C.cyz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyD.prototype={
$0(){return this.a.OE(this.b)},
$S:0}
C.cyE.prototype={
$0(){return this.a.OE(this.b)},
$S:0}
C.cyF.prototype={
$0(){var w=this.a
w.n(new C.cyC(this.b))
w.CN()},
$S:0}
C.cyC.prototype={
$0(){return this.a.c=""},
$S:0}
C.cyH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.cyG(w,d))
w.CN()},
$S:z+51}
C.cyG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyO.prototype={
$2(d,e){if(d)this.a.zJ()},
$S:118}
C.cyK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zJ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.F(x.q).f.P(D.ekr)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cyL.prototype={
$0(){return this.a.aSD(this.b,-1)},
$S:0}
C.cyM.prototype={
$0(){return this.a.aSD(this.b,1)},
$S:0}
C.cyN.prototype={
$0(){return this.a.bY3(0,this.b)},
$S:0}
C.fgw.prototype={
$1(d){return C.fXJ()},
$S:41}
C.fgx.prototype={
$1(d){return null},
$S:29}
C.f0I.prototype={
$1(d){return null},
$S:29}
C.fhu.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:284}
C.fht.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:239}
C.fhA.prototype={
$1(d){var w=this.a
return C.fGG(d)===w||C.h18(d)===w},
$S:z+4}
C.f_M.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.c3d.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fgv.prototype={
$1(d){return C.fjc(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fbm.prototype={
$1(d){var w=null
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eOj,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dj(D.EI,D.eIX,new C.fbk(d),B.bk(A.bR,w,w,w,A.x,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.uF,D.ePt,new C.fbl(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.ca,w,w,P.vB,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fbk.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fbl.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fbn.prototype={
$1(d){var w=null
return B.ep(B.a([B.bG(!1,D.eFv,w,w,!0,w,w,new C.fbi(d),w,w),B.bJ(D.eVd,new C.fbj(d),w)],x.p),w,w,w,D.eX0,w,w,w,w,D.eFp,w)},
$S:20}
C.fbi.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.fbj.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dXm.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dXk.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dXl.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dXn.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dXo.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fhz.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.fhv.prototype={
$2$h$w(d,e){var w=null
return new B.bE(A.a_,w,w,B.G2(A.B,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1663}
C.fhx.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.B,B.d(d,w,w,w,w,w,w,D.exq,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fhy.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.G(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.h,w,w,new B.o(w,w,B.G(A.hE,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b5,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1664}
C.fhw.prototype={
$2$female$size(d,e){var w=null,v=d?D.aa0:this.a,u=B.G(A.hE,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.B,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8G,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1665}
C.fsO.prototype={
$1(d){return new C.aaQ(this.a,this.b,null)},
$S:z+108}
C.dOL.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.b9V:A.J1,q=B.G(D.iS.j(0.25),A.r,1),p=B.as(B.p(t,t,A.h,t,t,new B.o(A.bR.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ai3,A.h,t,t,new B.o(t,t,B.G(A.c.j(0.5),A.r,1.2),o,B.a([new B.a9(0,A.G,D.iS.j(0.35),A.e6,10)],x.V),D.bGP,A.n),t,t,t,t,A.JI,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.B(H.Vr,B.u(B.a([p,A.ay,B.A(B.a([o,A.ba,B.C(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iS,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.ewK,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.C(B.ig(!0,t,e,A.z,D.aHU,new C.dOK(w,this.c),v,D.ad2,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mh,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dOK.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aaf(w,new C.dOJ(this.b,w),null)},
$S:z+72}
C.dOJ.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fbq.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fbr.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eRq,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dj(D.EI,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fbo(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.Ra,new C.fbp(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.ca,w,w,P.vB,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fbo.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fbp.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fbu.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fbv.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eGp,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dj(D.EI,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fbs(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.Ra,new C.fbt(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.ca,w,w,P.vB,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fbs.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fbt.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fby.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fbz.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eMg,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dj(D.EI,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fbw(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.Ra,new C.fbx(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.ca,w,w,P.vB,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fbw.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fbx.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fu2.prototype={
$1(d){return D.f4l},
$S:z+74}
C.e1m.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b38:A.J1,s=B.G(A.at.j(0.25),A.r,1),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.at.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bAH,A.h,v,v,new B.o(v,v,B.G(A.c.j(0.5),A.r,1.2),q,B.a([new B.a9(0,A.G,A.bR.j(0.35),A.e6,10)],x.V),D.ajo,A.n),v,v,v,v,A.JI,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.B(H.Vr,B.u(B.a([r,A.ay,B.A(B.a([q,A.ba,B.C(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:X.IZ,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bw,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.euo,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.C(B.ig(!0,v,e,A.z,D.aHU,new C.e1l(this.b),19,D.ad2,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mh,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e1l.prototype={
$2(d,e){var w=D.O6[e]
return new C.acw(w,new C.e1k(this.a,w),null)},
$S:z+75}
C.e1k.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fjg.prototype={
$0(){return B.fFJ(C.hzF(this.a))},
$S:323}
C.fjf.prototype={
$0(){var w=C.fGY(this.a)
return"data:image/png;base64,"+A.cM.gcq().aE(w)},
$S:22}
C.eZ_.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.iZ(d,e),new B.iZ(w,e+v),new B.iZ(d+f*14,e),new B.iZ(w,e-v)],x.J)
B.a_z(this.a,C.fs(4291404327),v)},
$S:663}
C.fud.prototype={
$1(d){return new C.TH(this.a,null)},
$S:z+77}
C.e4E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4D())},
$S:28}
C.e4D.prototype={
$0(){},
$S:0}
C.e4F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e4C(w,d))},
$S:1667}
C.e4C.prototype={
$0(){return this.a.x=J.f2(A.dz.gaL(this.b))},
$S:0}
C.e4G.prototype={
$1(d){},
$S:29}
C.e4g.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e4c.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e4n.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e4o.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.dVI)},
$S:0}
C.e4p.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e4i.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.S("you",this.b))
w.f.bG(0,A.c_)},
$S:0}
C.e4j.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.S("ai",v.a))},
$S:0}
C.e4k.prototype={
$0(){return this.a.ax.push(new B.S("ai",B.t(this.b)))},
$S:0}
C.e4l.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e4m.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lD(v,A.dU,A.ic)}},
$S:8}
C.e4h.prototype={
$0(){var w=this.a,v=w.z,u=C.fjU(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cyb(C.fjU(t))},
$S:0}
C.e4e.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e4f.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e4v.prototype={
$0(){return B.a7(this.a,!1).oZ()},
$S:0}
C.e4w.prototype={
$0(){var w=this.a
return w.n(new C.e4u(w))},
$S:0}
C.e4u.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e4x.prototype={
$0(){var w=this.a
return w.n(new C.e4t(w,this.b))},
$S:0}
C.e4t.prototype={
$0(){var w=this.b.b
this.a.e.saR(0,w)
return w},
$S:0}
C.e4y.prototype={
$1(d){var w=this.a
return w.n(new C.e4s(w))},
$S:9}
C.e4s.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e4z.prototype={
$1(d){var w=this.a
return w.n(new C.e4r(w))},
$S:9}
C.e4r.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e4A.prototype={
$0(){var w=this.a
return w.n(new C.e4q(w,this.b))},
$S:0}
C.e4q.prototype={
$0(){var w=this.b
this.a.f.saR(0,w)
return w},
$S:0}
C.e4B.prototype={
$1(d){return this.a.XA()},
$S:2}
C.e4d.prototype={
$0(){return this.a.c_D(this.b)},
$S:0}
C.c6S.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cJ(w.h(0,d))):null},
$S:378}
C.c6Q.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c6R.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiS.prototype={
bf9(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bJB(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cuV($.tr().jR(0,"assets/news_fonts/"+s))}w=2
return B.b(r.ma(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bf9(d,e)},
$S:1668}
C.fhb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhd.prototype={
$1(d){var w=this.a.a
w=A.d.aF(A.d.dA(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:83}
C.fhc.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.j0(t,t,t,t,B.dr(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.px,A.cn,t,A.eL,A.cm)
v=this.a
w.EL(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:60}
C.eYB.prototype={
$1(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.a5(w,new C.eYC(),B.T(w).k("a5<1>")).gG(0)},
$S:245}
C.eYC.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYz.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:204}
C.eYA.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:204}
C.c6T.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gawo()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aX(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.S(s,w-(f===t?r:0)))
o=C.fGF(i,new B.E(!0,h,a6,k,a6,a6,q,A.cG,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fDI(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aF(n.gc7y(),"\n\n")
d=B.j0(a6,a6,a6,a6,B.dr(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afy(k,q,1.28),j),A.px,A.cn,a6,A.eL,A.cm)
d.EL(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aX(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.S(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fGF(i,new B.E(!0,h,a6,k,a6,a6,q,A.cG,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fDI(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afy(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.B(new B.L(v,0,v,0),B.p(a6,a6,A.h,B.aX(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bF(1,A.bn,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.px,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awn(s,j))
i.push(new B.a3(s,a6,B.u(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:391}
C.c6U.prototype={
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
n=o.gawo()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aX(j.w)
d=B.a([new B.S(u,q),new B.S(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.S(r,p-(a0===s?m:0)))
l=C.fGF(f,new B.E(!0,e,a5,i,a5,a5,h,A.cG,A.bg,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fDI(g.length===0?B.a([a6],n):g,l))break}a1=o.afy(i,h,1.28)
a2=new C.c6V(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.GT,new B.a3(v,a5,a4.f,a5),A.GT,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.B(D.bk6,B.p(a5,a5,A.h,B.aX(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bF(1,A.bn,new B.w(l[2+a3],a5,a1,a5,A.px,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awn(r,g))
f.push(new B.a3(r,a5,B.u(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.u(B.a([new B.a3(a5,q,v,a5),A.aa,B.C(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.c6V.prototype={
$2(d,e){var w=null
return new B.a3(e,w,B.d(d,w,w,w,w,w,w,this.a,A.px,w,w),w)},
$S:1669}
C.fug.prototype={
$1(d){return new C.TK(this.a,this.b,null)},
$S:z+79}
C.e5P.prototype={
$1(d){return d.lS()},
$S:1670}
C.e5Q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5O(w,d))},
$S:1671}
C.e5O.prototype={
$0(){var w=this.b
return this.a.d=w.gfe(w)},
$S:0}
C.e5C.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e5D.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e5J.prototype={
$0(){return B.a7(this.a,!1).eB()},
$S:0}
C.e5K.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.G(A.bz,A.r,2.5)
return B.aJ(w,B.p(w,B.b2(w,w,w,new C.b81(u,v.gaty(),w),A.fj),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e5H(v),new C.e5I(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.af)},
$S:34}
C.e5H.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:334}
C.e5I.prototype={
$1(d){var w=this.a
w.n(new C.e5E(w,d,this.b,this.c))},
$S:242}
C.e5E.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaty()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e5L.prototype={
$1(d){var w=this.a
return w.n(new C.e5G(w,this.b))},
$S:9}
C.e5G.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5M.prototype={
$1(d){var w=this.a
return w.n(new C.e5F(w,d))},
$S:6}
C.e5F.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e5N.prototype={
$0(){return B.a7(this.b,!1).K(this.a.a.c)},
$S:0}
C.fuw.prototype={
$1(d){return D.f78},
$S:z+83}
C.eCo.prototype={
$1(d){return this.a.Wn()},
$S:8}
C.eBg.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cM.gcq().aE(v)},
$S:0}
C.eBE.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eBO.prototype={
$1(d){return d>=this.a.length},
$S:60}
C.eB_.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eB0.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eAY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAZ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eBx.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eBy(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jy(B.qV(p>0.2?C.fyx(q,B.a2S(p,p,A.w)):q),A.q,u)],x.p)
w=s.bc
if(w>0.02){v=B.a2S(12,12,A.w)
p.push(B.jy(B.d4(B.qV(C.fyx(r.$1(!0),v)),w*0.75),A.q,u))}r=s.aZ
if(r!=null&&s.aW>0)p.push(B.ec(u,B.aX(r).j(s.aW),!0))
r=s.b6
if(r!=null&&s.bE>0){r=B.aX(r).j(s.bE)
w=s.b6
w.toString
p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(D.aNV,1.15,A.w,u,0,B.a([r,B.aX(w).j(0)],x.O),u,u),A.n),A.b7))}r=s.az
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(D.aNF,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.b7))
r=s.aK
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.bb,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aK)],x.O),D.cDh,u),A.n),A.b7))
if(s.aA>0){r=s.k1
p.push(B.an(u,B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b4,A.bb,A.w,B.a([A.x.j(0),A.x.j(s.aA),A.x.j(s.aA),A.x.j(0)],x.O),D.cNe,u),A.n),A.b7),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.x.j(r),!0))
r=s.b1
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(A.B,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cKx,u),A.n),A.b7))
s=s.aq
if(s>0)p.push(B.b2(u,u,u,new C.bbx(s,u),A.as))
return new B.am(A.V,u,A.aX,A.q,p,u)},
$S:61}
C.eBy.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fD(r.b,A.B,q,q,A.ci,A.bM,!0,q,!1,q,q),o=r.a,n=o.aSf(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.ci,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bg
v=o.aM
u=v-1
t=o.bQ
s=o.cQ?-1:1
return B.dO(B.e4(A.B,B.et(A.B,l,B.fm(A.B,new B.Fz(new B.zX(q,q,n,A.yW),p,q),q,B.uU(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eBK.prototype={
$0(){return this.a.n(new C.eBJ(this.b,this.c))},
$S:0}
C.eBJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBL.prototype={
$1(d){return this.a.n(new C.eBI(this.b,d))},
$S:6}
C.eBI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBN.prototype={
$0(){return this.a.n(new C.eBM(this.b,this.c))},
$S:0}
C.eBM.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAQ.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eAR.prototype={
$1(d){var w=this.a
return w.n(w.gcoP())},
$S:2}
C.eAS.prototype={
$1(d){return this.a.n(new C.eAP())},
$S:2}
C.eAP.prototype={
$0(){},
$S:0}
C.eAT.prototype={
$0(){var w=this.a
return w.n(new C.eAO(w,this.b))},
$S:0}
C.eAO.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eAV.prototype={
$2(d,e){return A.av},
$S:35}
C.eAU.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aX(v.e),B.aX(v.f)],x.O),q=t?A.c:A.bG
q=B.G(q,A.r,t?2.5:1)
r=B.dg(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aX(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b9,new B.o(w,w,q,s,w,new B.a8(A.b4,A.bb,A.w,r,w,w),A.n),A.hG,w,94,w,w,w,w,70)
return B.aJ(w,new B.a3(70,w,B.u(B.a([r,A.fW,B.d(v.b,w,1,A.Z,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAN(u,v),w,w,w,w,w,w,!1,A.af)},
$S:76}
C.eAN.prototype={
$0(){var w=this.a
return w.n(new C.eAK(w,this.b))},
$S:0}
C.eAK.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAW.prototype={
$1(d){var w=this.a
return w.n(new C.eAM(w,d))},
$S:9}
C.eAM.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eAX.prototype={
$1(d){var w=this.a
return w.n(new C.eAL(w,d))},
$S:9}
C.eAL.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eCd.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:60}
C.eCk.prototype={
$1(d){var w=this.a
return w.n(new C.eCl(w,d))},
$S:27}
C.eCl.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eCm.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:255}
C.eCe.prototype={
$0(){var w=this.a
return w.n(new C.eCc(w,this.b))},
$S:0}
C.eCc.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.H(0,v)},
$S:0}
C.eCf.prototype={
$0(){var w=this.a
return w.n(new C.eCb(w,this.b))},
$S:0}
C.eCb.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eCg.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eCa(v,w.b,w.c,w.d))},
$S:0}
C.eCa.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eCh.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqM(v))},
$S:0}
C.eCi.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eCj.prototype={
$0(){var w=this.a
return w.n(new C.eC9(w))},
$S:0}
C.eC9.prototype={
$0(){var w=this.a.db
return A.d.hh(w,0,w.length,0)},
$S:0}
C.eBX.prototype={
$1(d){return d.a===this.a.dy},
$S:221}
C.eBY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arg[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b3(9,9)
m=B.a([B.aX(v.w.e),B.aX(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atC(new B.nH(new B.bv(n,n,n,n),A.ap,new B.ky(new B.o(j,j,j,j,j,new B.a8(A.a_,A.a7,A.w,m,j,j),A.n),A.b7,new C.aWo(l,B.aX(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eBW(r,v),2,i))}return B.cb(A.bH,h,A.bx,7,7)},
$S:168}
C.eBW.prototype={
$0(){var w=this.b
return w.n(new C.eBR(this.a,w))},
$S:0}
C.eBR.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eBZ.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:212}
C.eC1.prototype={
$0(){var w=this.a
return w.n(new C.eBV(w))},
$S:0}
C.eBV.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eC2.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eC3.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eC4.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eC5.prototype={
$0(){var w=this.a
return w.n(new C.eBU(w))},
$S:0}
C.eBU.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eC6.prototype={
$0(){var w=this.a
return w.n(new C.eBT(w))},
$S:0}
C.eBT.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eC7.prototype={
$0(){var w=this.b
return w.n(new C.eBS(this.a,w))},
$S:0}
C.eBS.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eC8.prototype={
$1(d){return this.a.fx=d},
$S:212}
C.eC_.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eC0.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eBB.prototype={
$0(){var w=this.a
return w.n(new C.eBA(w))},
$S:0}
C.eBA.prototype={
$0(){var w=this.a
w.p4=null
w.aYN()},
$S:0}
C.eBC.prototype={
$0(){var w=this.a
return w.n(new C.eBz(w,this.b))},
$S:0}
C.eBz.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBD.prototype={
$0(){var w=this.a
return w.n(w.gcfK())},
$S:0}
C.eBt.prototype={
$0(){var w=this.a
return w.n(new C.eBs(w))},
$S:0}
C.eBs.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eBu.prototype={
$0(){var w=this.a
return w.n(new C.eBr(w))},
$S:0}
C.eBr.prototype={
$0(){var w=this.a
w.aA=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eBv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cKS[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b3(9,9)
m.push(v.atC(new B.nH(new B.bv(p,p,p,p),A.ap,new B.a3(1/0,1/0,new B.Fz(new B.zX(o,o,v.aSf(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.yW),B.fD(u,A.B,140,o,A.ci,A.bM,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eBq(v,s),3,n))}return B.cb(A.bH,m,A.bx,10,8)},
$S:168}
C.eBq.prototype={
$0(){var w=this.a
return w.n(new C.eBp(w,this.b))},
$S:0}
C.eBp.prototype={
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
C.eB7.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eB8.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eB9.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eBa.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eBb.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eBc.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eBd.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eBe.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eBf.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eAt.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eAu.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eAv.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eAw.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eAx.prototype={
$0(){var w=this.a
return w.n(new C.eAs(w))},
$S:0}
C.eAs.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eAy.prototype={
$1(d){return this.a.aZ=d},
$S:212}
C.eAz.prototype={
$1(d){return this.a.aW=d},
$S:6}
C.eB1.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eB2.prototype={
$1(d){return this.a.bc=d},
$S:6}
C.eB3.prototype={
$1(d){return this.a.aq=d},
$S:6}
C.eB4.prototype={
$1(d){return this.a.b6=d},
$S:212}
C.eB5.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.eAD.prototype={
$1(d){return this.a.aM=d},
$S:6}
C.eAE.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eAF.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eAG.prototype={
$1(d){return this.a.ci=d},
$S:6}
C.eAH.prototype={
$0(){var w=this.a
return w.n(new C.eAC(w))},
$S:0}
C.eAC.prototype={
$0(){var w=this.a
return w.ci=A.k.J(w.ci+90+180,360)-180},
$S:0}
C.eAI.prototype={
$0(){var w=this.a
return w.n(new C.eAB(w))},
$S:0}
C.eAB.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eAJ.prototype={
$0(){var w=this.a
return w.n(new C.eAA(w))},
$S:0}
C.eAA.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eBw.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hOi(v,w.p4)},
$S:0}
C.eBo.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bab:B.fD(v,A.B,w,w,A.ci,A.bM,!1,w,!1,w,w)
return C.fhj(d.length===0?"rounded":d,u,e)},
$S:129}
C.eBk.prototype={
$0(){var w=this.a
return w.n(new C.eBj(w))},
$S:0}
C.eBj.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eBl.prototype={
$0(){var w=this.b
return w.n(new C.eBi(this.a,w))},
$S:0}
C.eBi.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eBm.prototype={
$0(){var w=this.b
return w.n(new C.eBh(this.a,w))},
$S:0}
C.eBh.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eBn.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eBH.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.a9(-4,A.G,A.b0.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eo(n.c9s(),n.r))
l.push(new C.H2(n.clZ(),!1,!1,t))
o=B.bU(0,B.bu(o,new B.eo(new B.am(A.V,t,A.aX,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.V,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c5,B.bQ(t,new B.o(t,t,B.G(A.c.j(0.3),A.r,1),u,t,t,A.n),A.b7),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eBG(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.af),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eBG.prototype={
$1(d){var w=this.a
return w.n(new C.eBF(w,d,this.b,this.c))},
$S:18}
C.eBF.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eBQ.prototype={
$0(){var w=this.a
return w.n(new C.eBP(w,this.b))},
$S:0}
C.eBP.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eB6.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).oZ()},
$S:0}
C.eCn.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a3(Math.min(s*0.4,460),t,B.u(B.a([w.aUA(),B.C(B.as(w.aXq(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.C(B.u(B.a([B.C(w.aLK(),1),w.aI_()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aUA(),new B.B(A.hs,B.as(s.aXq(u),t,t,t),t),B.C(s.aLK(),1),s.aI_()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:652}
C.fez.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eh(k,!1,j,A.az,"",4280640491,i,l,m,"",h,C.bwb(),null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bg,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,A.O)},
$S:z+98}
C.fey.prototype={
$3(d,e,f){var w=this,v=C.bwb(),u=w.b?A.I:A.cp,t=w.c?A.cz:A.bg
return C.eh(w.d,!1,f,A.az,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.b8,4280172719,2,d,0,w.f,w.e,D.cb,D.cJ,0.82,0.09,w.a)},
$S:z+28}
C.c8c.prototype={
$1(d){return B.t(d)},
$S:17}
C.fmd.prototype={
$0(){return this.a},
$S:z+15}
C.f4b.prototype={
$1(d){return d.a.cU(this.a)},
$S:z+30}
C.f4c.prototype={
$2(d,e){return J.ch(e)},
$S:z+31}
C.fmf.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fmi.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fmj.prototype={
$0(){return A.d.gI(D.uO)},
$S:z+33}
C.fmb.prototype={
$1(d){return d.a},
$S:z+16}
C.fme.prototype={
$1(d){return d.a},
$S:z+16}
C.fkb.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fkc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fkd.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.feD.prototype={
$0(){return C.cx()},
$S:22}
C.feG.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cb,s=u?n:0
return C.eh(j,l,v,A.az,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.b8,4280172719,2,d,s,0,"",t,D.cJ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,"","",A.bg,A.a1)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,"",j,A.bg,A.a1)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,j,k,A.bg,A.a1)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bg,A.a1)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bg,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.d8,!1,k,l,"",m,A.bg,A.a1)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bg,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,j,k,"",l,A.bg,A.a1)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bg,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bg,A.a1)},
$S:z+35}
C.feF.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eh(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a1,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cb,D.eQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.feE.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cb,t=v?j:0
return C.eh(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a1,"",h,w,d,v?k:"",l,0,!1,"",0,D.b8,4280172719,2,"",t,0,"",u,D.l4,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pn,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.feC.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fh4.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.fYL.cg(0,A.a.i(s.w).toLowerCase(),new C.fh2(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fh3(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bkl(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1674}
C.fh2.prototype={
$0(){return F.aKn(this.a.w)},
$S:180}
C.fh3.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.bv5("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hr(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.eYw.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eYx.prototype={
$1(d){return d.a},
$S:z+18}
C.eYy.prototype={
$1(d){return d.b},
$S:z+19}
C.fuI.prototype={
$1(d){return D.f7o},
$S:z+41}
C.eIi.prototype={
$0(){return this.a.x=C.hrL(this.b,this.c.b)},
$S:0}
C.eIj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eIg.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:430}
C.eIh.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:430}
C.eIf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c0(A.aG,null,new C.eIa(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.GD,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aU(s,7)
if(r.length===0){n.n(new C.eIb(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h3o(o,m.cyY(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eIc(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIa.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eIe(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWE,A.h,p,p,D.aS_,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.As:D.Ax,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a3(64,64,C.fhj(v,i.aZn(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dJ,!0)
if(!l)return B.br(!0,new B.B(A5.DA,t,p),!0,!1,A.ag,!0,!0)
s=new C.eId(i,d)
m=B.aG(d,A.bO,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.F0[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.d2(new B.aV(0,1/0,0,m.a.b*0.85),B.cf(B.u(B.a([D.eKQ,A.T,t,A.dW,D.eb6,A.au,D.eUD,A.T,B.lX(1.15,l,3,10,10,p,A.dJ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A5.DA,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eIe.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b0.j(0.22):A.c.j(0.04),s=v?A.bE:A.du
return B.aJ(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.G(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hf,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eI9(this.b,d),w,w,w,w,w,w,!1,A.af)},
$S:1675}
C.eI9.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eId.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bG
r=B.G(r,A.r,t?2.5:1)
w=B.m(10)
u=B.C(B.p(v,B.bu(w,d.length===0?B.p(v,D.aiz,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e8(new C.LB(u.Ei(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.au,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,t?A.bK:A.al,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eI8(this.b,d),v,v,v,v,v,v,!1,A.af)},
$S:129}
C.eI8.prototype={
$0(){B.a7(this.a,!1).K("finale:"+this.b)
return null},
$S:0}
C.eIb.prototype={
$0(){var w=this.a
return w.w=w.w.Ei("")},
$S:0}
C.eIc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eHZ.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eI_.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eI1.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eI2.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eI3.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eI4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eI0(w,d))},
$S:2}
C.eI0.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eI5.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eIw.prototype={
$0(){return this.a.f.ft()},
$S:0}
C.eIx.prototype={
$0(){var w=this.a
return w.n(new C.eIv(w))},
$S:0}
C.eIv.prototype={
$0(){return this.a.e=null},
$S:0}
C.eIy.prototype={
$0(){var w=this.a
return w.n(new C.eIu(w))},
$S:0}
C.eIu.prototype={
$0(){return this.a.x=null},
$S:0}
C.eIA.prototype={
$1(d){var w=this.a
return w.n(new C.eIt(w,d))},
$S:30}
C.eIt.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eIB.prototype={
$1(d){var w=this.a
return w.n(new C.eIs(w,d))},
$S:30}
C.eIs.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eIC.prototype={
$0(){var w=this.a
return w.n(new C.eIr(w))},
$S:0}
C.eIr.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eID.prototype={
$1(d){var w=this.a
return w.n(new C.eIq(w,d))},
$S:30}
C.eIq.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eIE.prototype={
$1(d){var w=this.a
return w.n(new C.eIp(w,d))},
$S:30}
C.eIp.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eIF.prototype={
$0(){var w=this.a
return w.n(new C.eIo(w))},
$S:0}
C.eIo.prototype={
$0(){var w=this.a
return w.w=w.w.Ei("")},
$S:0}
C.eIG.prototype={
$0(){var w=this.a
return w.n(new C.eIn(w,this.b))},
$S:0}
C.eIn.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eIH.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a3(u,null,w.bHm(D.a_d[v]),null))
return B.cb(A.bH,t,A.bx,8,8)},
$S:168}
C.eIz.prototype={
$1(d){var w=this.a
return w.n(new C.eIm(w,d))},
$S:9}
C.eIm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eI6.prototype={
$0(){var w=this.a
return w.n(new C.eI7(w,this.b,this.c))},
$S:0}
C.eI7.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.H(0,w)},
$S:0}
C.eIl.prototype={
$0(){var w=this.a
return w.n(new C.eIk(w,this.b))},
$S:0}
C.eIk.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fuH.prototype={
$1(d){return new C.Zb(this.a,this.b,null)},
$S:z+42}
C.eHS.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eHT.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eHU.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAr?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eHV.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eHW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eHR(w,d))},
$S:2}
C.eHR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHX.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eHY.prototype={
$0(){var w=this.b
if(A.a.c5(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bG(0,new B.bb(w,B.h1(A.bo,w.length),A.aL))},
$S:0}
C.f3r.prototype={
$1(d){return d.a===this.a},
$S:221}
C.e0M.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gatD(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cxQ:D.cMY
t=D.w5.j(v?1:0.55)
v=p.a.c
t=B.G(t,A.r,v?1.8:1.2)
s=D.w5.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.a9(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bU(0,B.b2(q,q,q,new C.bdK(n*6.283,q),A.as),0,0,0)
o=o.x
o=B.bU(0,B.bJS(B.et(A.B,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a8(A.a_,A.a7,A.w,B.a([A.K,D.b1J.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.am(A.V,q,A.a9,A.q,B.a([n,o,B.as(B.u(B.a([B.V(p.a.c?A.ej:A.l0,D.w5,q,q,q,20),A.au,B.eY(A.B,B.nm(A.j3,D.eEX,new C.e0L()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eBP,A.h,q,q,new B.o(D.w5,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adG,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aE,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e0L.prototype={
$1(d){return D.bFd.aB(0,d)},
$S:65}
C.fmk.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fml.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:221}
C.fmm.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1676}
C.fmn.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:13}
C.fmg.prototype={
$1(d){return d.a},
$S:z+18}
C.fmh.prototype={
$1(d){return d.b},
$S:z+19}
C.ftV.prototype={
$1(d){return new C.XA(this.a,this.b,null)},
$S:z+44}
C.dag.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dah.prototype={
$1(d){return d.a===this.a.gafr()},
$S:z+10}
C.dai.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dal.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dam.prototype={
$0(){var w=this.a
return w.n(new C.dak(w,this.b))},
$S:0}
C.dak.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dan.prototype={
$1(d){var w=this.a
return w.n(new C.daj(w,d))},
$S:9}
C.daj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0K.prototype={
$1$2(d,e,f){var w=B.bi(d,!0,f)
A.d.fN(w,this.a)
return B.dc(w,0,B.dJ(e,"count",x.S),B.T(w).c).dz(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1677}
C.eV5.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eh(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a1,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eQ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cb,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eV7.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eh(A.L,!1,this.b.d,A.az,"",4280640491,i,A.bg,A.cG,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.b8,4280172719,2,d,l,0,"",D.m8,D.cJ,g,e,f)},
$S:z+46}
C.eV6.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vE(0,"twinkle")
w=t===D.b8?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.m8,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eV4.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.ffK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ffL.prototype={
$0(){return A.d.gI(D.F9)},
$S:z+49}
C.ffM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eX3.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.flN.prototype={
$1(d){var w=2450411,v=4281908728
C.dp(d,C.dq(4280171146,1,0,D.b8,w,0,0.52,0,0))
C.dp(d,C.dq(v,1,0,D.b8,w,0,0.04,0.48,0))
C.dp(d,C.dq(4294047225,0.38,0,D.b8,w,0,0.48,0.52,0.62))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flO.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dp(d,C.dq(4280172719,0.8,0,D.b8,w,0,0.36,0.58,0.1))
C.dp(d,C.dq(v,0.64,0,D.b8,w,0,0.28,0.64,0.18))
C.dp(d,C.dq(4282090230,0.44,0,D.b8,w,0,0.2,0.7,0.28))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.22,0.08,0.12))
C.dp(d,C.dq(u,0.004,0,D.fb,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.flP.prototype={
$1(d){var w=2450411,v=4279548070
C.dp(d,C.dq(4279080072,0.11,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(4279310375,0.11,0,D.b8,w,0,1,0,0.89))
C.dp(d,C.dq(856528008,0.72,0,D.jm,w,0,0.28,0.72,0.14))
C.dp(d,C.dq(1426953352,0.2,0,D.jm,w,0,0.2,0.78,0.22))
C.dp(d,C.dq(v,0.004,0,D.fb,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fm_.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(4279203438,0.55,0,D.jm,w,0,0.5,0.55,-0.05))
C.dp(d,C.dq(4280171146,0.5,0,D.jm,w,0,0.45,0.62,0.35))
C.dp(d,C.dq(4280640491,0.4,0.3,D.jl,w,0,0.35,0.68,0.55))
C.dp(d,C.dq(571438702,0.12,0,D.b8,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fm4.prototype={
$1(d){var w=4280472558
C.dp(d,C.dq(4279310375,0.75,-0.4,D.jl,2450411,0,0.75,-0.15,0.35))
C.dp(d,C.dq(w,0.55,0,D.b8,2450411,0,0.06,0.42,0.38))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.35,0.08,0.08))
C.dp(d,C.dq(2282478,0.12,0,D.b8,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fm5.prototype={
$1(d){var w=2450411,v=4280640491
C.dp(d,C.dq(3423541034,0.48,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(v,0.12,-0.08,D.jm,w,0,1.1,-0.05,0.38))
C.dp(d,C.dq(858088427,0.35,0,D.b8,w,0,0.42,0.55,0.05))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fm6.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cwX[w]
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a1,A.bg,A.az,4279310375,A.bf,null,D.b8,v,4294967295,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IH
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fm7.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lP,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a1,A.bg,A.az,4279310375,A.bf,null,D.B6,v,2450411,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IH
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fm8.prototype={
$1(d){var w=4294967295
C.dp(d,C.dq(4280640491,1,0,D.b8,2450411,0,0.42,0,0))
C.dp(d,C.dq(4280110808,1.1,1.57,D.jl,2450411,0,0.18,0.35,-0.05))
C.dp(d,C.dq(w,0.006,0,D.fb,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fm9.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dp(d,C.dq(w,0.1,0,D.b8,v,0,1,0,0))
C.dp(d,C.dq(u,0.012,0,D.b8,v,0,1,0,0.1))
C.dp(d,C.dq(u,0.006,0,D.fb,u,3,0.42,0.06,0.14))
C.dp(d,C.dq(403446057,0.68,0,D.jm,v,0,0.22,0.72,0.18))
C.dp(d,C.dq(w,0.1,0,D.b8,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fma.prototype={
$1(d){var w=4278630100
C.dp(d,C.dq(4279310375,1.2,0.15,D.jm,2450411,0,0.55,-0.2,-0.1))
C.dp(d,C.dq(w,1.1,0.15,D.b8,2450411,0,0.08,0.15,-0.05))
C.dp(d,C.dq(1120295,0.18,0,D.b8,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flQ.prototype={
$1(d){var w=4292617766
C.dp(d,C.dq(4282714634,0.65,-0.2,D.jl,2450411,0,0.65,-0.1,0.45))
C.dp(d,C.dq(w,0.5,-0.15,D.jl,2450411,0,0.5,0.05,0.55))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.flR.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(4278413729,0.35,3.14,D.jl,w,0,0.45,-0.05,0.7))
C.dp(d,C.dq(4278355143,0.3,3.14,D.jl,w,0,0.4,0.25,0.75))
C.dp(d,C.dq(4279150057,0.32,3.14,D.jl,w,0,0.5,0.55,0.72))
C.dp(d,C.dq(863884284,0.22,0,D.ex,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.flS.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dp(d,C.dq(w,0.14,0,D.b8,v,0,0.14,0.02,0.02))
C.dp(d,C.dq(2282478,0.14,0,D.b8,u,3,0.14,0.84,0.02))
C.dp(d,C.dq(w,0.28,0,D.jm,v,0,0.35,-0.08,0.78))
C.dp(d,C.dq(u,0.22,0.5,D.jl,v,0,0.3,0.72,0.78))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.flT.prototype={
$1(d){var w=4293571336,v=1156231944
C.dp(d,C.dq(1841431,0.92,0,D.b8,w,3,0.92,0.04,0.04))
C.dp(d,C.dq(v,0.15,0,D.jl,2450411,0,0.15,0.02,0.02))
C.dp(d,C.dq(v,0.15,3.14,D.jl,2450411,0,0.15,0.83,0.83))
C.dp(d,C.dq(w,0.004,0,D.fb,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.flU.prototype={
$1(d){var w=4279080072,v=2450411
C.dp(d,C.dq(w,0.14,0,D.kF,v,0,0.14,0.68,0.18))
C.dp(d,C.dq(4279548070,0.14,0,D.kF,v,0,0.14,0.78,0.28))
C.dp(d,C.dq(4281193663,0.14,0,D.kF,v,0,0.14,0.68,0.38))
C.dp(d,C.dq(4284410580,0.14,0,D.kF,v,0,0.14,0.78,0.48))
C.dp(d,C.dq(4279203438,0.14,0,D.kF,v,0,0.14,0.68,0.58))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.flV.prototype={
$1(d){var w=2450411,v=4280640491
C.dp(d,C.dq(3708753706,0.42,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(v,0.06,-0.05,D.jm,w,0,1,0,0.38))
C.dp(d,C.dq(859356664,0.25,0,D.ex,w,0,0.25,0.7,0.08))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.flW.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lP,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a1,A.bg,A.az,4279310375,A.bf,null,D.B6,v,2450411,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IH
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dp(d,C.dq(4280172719,0.08,0,D.b8,2450411,0,1,0,0))
C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.flX.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ex("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a1,A.bg,A.az,s,A.bf,null,D.fb,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IH
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dp(d,C.dq(s,0.75,0,D.b8,2450411,0,0.22,0.72,0.1))
C.dp(d,C.dq(872415231,0.16,0,D.b8,2450411,0,0.16,0.75,0.15))
C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.flY.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dp(d,C.dq(4674921,0.9,0,D.b8,4287931320,2,0.9,0.05,0.05))
C.dp(d,C.dq(w,0.08,0,D.b8,v,0,0.08,0.03,0.03))
C.dp(d,C.dq(u,0.08,0,D.b8,v,0,0.08,0.89,0.03))
C.dp(d,C.dq(u,0.08,0,D.b8,v,0,0.08,0.03,0.89))
C.dp(d,C.dq(w,0.08,0,D.b8,v,0,0.08,0.89,0.89))
C.dp(d,C.dq(w,0.004,0,D.fb,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.flZ.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iO
$.iO=t+1
t=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.55,0.14+v,0.38,0.18,"",24,A.a1,A.bg,A.az,r,A.bf,null,D.b8,4294967295,4280640491,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IH
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dH,A.cK,w/2).l()
t=Date.now()
s=$.iO
$.iO=s+1
u=new C.ex("design_"+(""+1000*t+"_"+s),D.eQ,0.57,0.16+v,0.06,0.14,"",24,A.a1,A.bg,A.az,r,A.bf,null,D.b8,u,q,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IH
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dp(d,C.dq(4280171146,1,0,D.b8,q,0,0.48,0,0))
C.dp(d,C.dq(4280172719,1.1,1.57,D.jl,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fm0.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(870995980,0.55,0.45,D.jm,w,0,0.55,-0.12,-0.08))
C.dp(d,C.dq(856996006,0.45,0.45,D.jm,w,0,0.45,0.62,-0.05))
C.dp(d,C.dq(16777215,0.38,0.45,D.jm,4293548044,5,0.38,0.52,0.12))
C.dp(d,C.dq(585783308,0.3,0.45,D.jm,w,0,0.3,0.56,0.16))
C.dp(d,C.dq(4279548070,0.06,0,D.b8,w,0,0.16,0.38,0.04))
C.dp(d,C.dq(1156208652,0.28,0,D.ex,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fm1.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dp(d,C.dq(w,1,0,D.b8,v,0,0.07,0,0))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.14))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.28))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.42))
C.dp(d,C.dq(s,0.08,0,D.ex,v,0,0.08,0.5,0.16))
C.dp(d,C.dq(w,0.08,0,D.ex,v,0,0.08,0.5,0.3))
C.dp(d,C.dq(4279548070,0.08,0,D.ex,v,0,0.08,0.5,0.44))
C.dp(d,C.dq(16777215,0.32,0.45,D.jm,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fm2.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dp(d,C.dq(4294047225,0.08,0,D.b8,t,2,0.1,0.02,0.06))
C.dp(d,C.dq(s,0.42,0,D.b8,2450411,0,0.36,0.58,0.18))
C.dp(d,C.dq(872415231,0.12,0,D.b8,2450411,0,0.28,0.62,0.24))
C.dp(d,C.dq(16777215,0.28,0,D.ex,s,4,0.32,0,0.72))
C.dp(d,C.dq(r,0.006,0,D.fb,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ex("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a1,A.bg,A.az,4279310375,A.bf,null,D.ex,16777215,t,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IH
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fm3.prototype={
$1(d){var w=2450411,v=4279548070
C.dp(d,C.dq(3423541034,0.55,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(4009754623,0.56,0.45,D.jm,w,0,0.56,0.22,0.18))
C.dp(d,C.dq(3439329279,0.44,0.45,D.jm,w,0,0.44,0.28,0.24))
C.dp(d,C.dq(v,0.07,0,D.b8,w,0,0.22,0.34,0.62))
C.dp(d,C.dq(v,1,0,D.b8,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fdA.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fdB.prototype={
$0(){return A.d.gI($.bzI())},
$S:z+52}
C.f3e.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f3d.prototype={
$1(d){return C.hyE(d,this.a,this.b)},
$S:z+53}
C.fmt.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.uU(1.0375,1.01875,1)
return new B.fG(v,u,new C.aPd(B.hoN(A.tO,C.hyH(w.c,w.d,v,u),t)))},
$S:433}
C.dKv.prototype={
$1(d){var w=d.a/1e6
this.a.d.st(0,w)
return w},
$S:8}
C.dKu.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bQ(w,new B.o(w,w,w,w,w,new B.bS(A.HR,1.2,A.w,w,0,u.d,w,w),A.n),A.b7),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jy(new B.am(A.V,w,A.aX,A.q,B.a([t,new B.eo(B.b2(w,w,w,new C.baD(u.a,r,q,r),A.as),w),B.as(new B.k1(r,new C.dKt(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:442}
C.dKt.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.ar(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.a9(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hN(B.fD(i,A.B,r,r,A.ci,A.bM,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fR(A.B,0,6.283185307179586,A.w,t,r,new B.mn(e*0.8)),A.a6),r,w,r,r,new B.L(v,v,v,v),r,r,w),new B.a3(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bmY(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cI(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a3(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d4(B.dO(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a8(A.a_,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a3(r,m*0.022,r,r),B.d(w.a.c.gaGx(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a1,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d4(B.e4(A.B,new B.B(new B.L(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eH5.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aB(0,d)},
$S:65}
C.c2Q.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bG
t=B.G(t,A.r,g?2.5:1)
w=g?B.a([new B.a9(0,A.G,A.ho.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bu(B.m(12),d,A.ap),v,v,A.b9,new B.o(v,v,t,u,w,v,A.n),A.eD,v,72,v,v,v,v,v)
return B.aJ(v,new B.a3(112,v,B.u(B.a([w,A.fW,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,g?A.bK:A.al,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.af)},
$S:1678}
C.c2R.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ei(""))},
$S:0}
C.c2S.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e8(new C.LB(v.Ei(u),!0,!1,null),!0,null),d.b,new C.c2T(w,this.c,d),v.a===u)},
$S:z+54}
C.c2T.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h3o(u.b,t.c.Ei(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fsy.prototype={
$1(d){return new C.X8(this.a,null)},
$S:z+55}
C.d_L.prototype={
$0(){var w=this.a
w.d=w.guM().b68("data:"+this.b+";base64,"+A.cM.gcq().aE(this.c));++w.r},
$S:0}
C.d_Q.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_R.prototype={
$0(){var w=this.a
return w.n(new C.d_P(w))},
$S:0}
C.d_P.prototype={
$0(){return this.a.r++},
$S:0}
C.d_S.prototype={
$1(d){var w=this.a
return w.n(new C.d_O(w,d))},
$S:2}
C.d_O.prototype={
$0(){var w=this.a
return w.d=w.guM().azN(this.b)},
$S:0}
C.d_T.prototype={
$0(){var w=this.a
return w.n(new C.d_N(w))},
$S:0}
C.d_N.prototype={
$0(){var w=this.a
return w.d=w.guM().b68("")},
$S:0}
C.d_U.prototype={
$1(d){var w=this.a
return w.n(new C.d_M(w,d))},
$S:2}
C.d_M.prototype={
$0(){var w=this.a
return w.d=w.guM().b6f(this.b)},
$S:0}
C.d_V.prototype={
$0(){var w=this.a
w=w.guM().b6f(w.gatE().a.a)
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.fsx.prototype={
$1(d){var w={}
w.a=this.a
return new B.ed(new C.fsw(w),null)},
$S:21}
C.fsw.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.d2(new B.aV(0,1/0,0,B.aG(d,A.bO,x.w).w.a.b*0.85),B.cf(B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.eS0,A.au,D.eSe,A.ay,new C.aWl(v.a,new C.fsv(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSv,w,w,w,w,A.JS,w,w,w)},
$S:158}
C.fsv.prototype={
$1(d){this.b.$1(new C.fsu(this.a,d))
B.a7(this.c,!1).K(d)},
$S:z+56}
C.fsu.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fuG.prototype={
$1(d){return D.f3g},
$S:z+57}
C.d6g.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d6h.prototype={
$0(){var w=this.a.c
w.toString
B.a7(w,!1).K(this.b)
return null},
$S:0}
C.d6i.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a7(w,!1).K(v)}},
$S:0}
C.fj9.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aB(0,d)},
$S:65}
C.d_s.prototype={
$3(d,e,f){var w,v=this,u=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.N(new B.bj(t+r*1.2,o))
u.N(new B.dl(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.N(new B.dl(w,q+p,w,q+p*1.2))
u.N(new B.BO(B.c1(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.b4(u,v.d)
s.b4(u,v.e)
p=B.U()
p.r=B.aq(v.a.d,A.c,0.6).gt(0)
s.aw(new B.v(w,o),2.2,p)},
$S:1679}
C.fjd.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fbC.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fbD.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.ws,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eC3,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dj(D.EI,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fbA(d),B.bk(A.bR,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.Ra,new C.fbB(d),B.d9(w,w,w,w,w,w,w,w,w,A.al,w,w,A.ca,w,w,P.vB,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fbA.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fbB.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.c8a.prototype={
$1(d){return d.hr()},
$S:z+59}
C.c8b.prototype={
$1(d){return d.ad()},
$S:z+60}
C.c89.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.Z(b5,x.N,x.z),b3=B.aQ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.M(b3)
if(b4==null)b4=A.a1.gdC(0)
b3=B.aQ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.M(b3)
if(w==null)w=0
b3=B.aQ(b2.h(0,"align"))
v=b3==null?b1:A.k.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.huG(b2.h(0,"type"))
t=B.aQ(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aQ(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aQ(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aQ(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aQ(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.asN[A.o.D(b4,0,8)]
m=D.czA[A.o.D(w,0,1)]
l=C.hy9(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.M(k)
if(k==null)k=4279310375
j=A.apP[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hAP(b2.h(0,"shape"))
g=B.aQ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.M(g)
if(g==null)g=4280640491
f=B.aQ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.M(f)
if(f==null)f=4280172719
e=B.aQ(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aQ(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aQ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.M(a2)
if(a2==null)a2=0
a3=C.fZO(b2.h(0,"textTransition"))
a4=B.aQ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.M(a4)
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
b2=B.aQ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.M(b2)
return C.eh(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c8_.prototype={
$1(d){return d.hr()},
$S:z+62}
C.c80.prototype={
$1(d){return d.ad()},
$S:z+63}
C.c7X.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7Y.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7Z.prototype={
$1(d){return C.fQG(B.Z(d,x.N,x.z))},
$S:z+64}
C.c8r.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c8s.prototype={
$0(){return A.d.gI(D.ZT)},
$S:z+66}
C.c8m.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c9(d.f))w.m(0,u,d.hr())},
$S:z+7}
C.c8l.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8h.prototype={
$1(d){return new B.I(d,new C.c8i(),B.T(d).k("I<1,N>")).fs(0,new C.c8j())},
$S:z+69}
C.c8i.prototype={
$1(d){return d.f},
$S:z+70}
C.c8j.prototype={
$2(d,e){return d.c9(e)?d:e},
$S:666}
C.c8k.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hkF(d)},
$S:z+71}
C.c8n.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.c8o.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8p.prototype={
$1(d){return d.ad()},
$S:z+14}
C.fjM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.H(0,j)
break}}}},
$S:z+73}
C.fjI.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fjJ.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fjK.prototype={
$2(d,e){var w
if(d.b===D.cJ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fjL.prototype={
$2(d,e){return d.b===D.eQ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c85.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hJb(b2,b3),b5=B.a2(b4).k("bf<2>")
b5=B.cy(new B.bf(b4,b5),new C.c84(),b5.k("F.E"),x.N)
w=B.d8(b5,B.a2(b5).k("F.E"))
b1=b1.e
v=A.oR.ar(0,A.k.D(b1,0,1))
u=new C.c86()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c87(a9,b7.d)
r=new C.c88(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jW.ar(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kF(A.k.D(1-k,0,1),B.dO(B.e4(A.B,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.eQ){a4=i.hr()
a4.ay=B.aq(B.aX(l.ay),B.aX(i.ay),v).l()
a4.ch=B.aq(B.aX(l.ch),B.aX(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l4&&l.at==i.at?r.$1(i):new B.am(A.V,a8,A.aX,A.q,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iu(B.vp(a3),a8,A.B,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cb)a7=D.m8
p.push(s.$5(i.c,i.d,i.e,i.f,C.h0Y(a7,a6,r.$1(i))))}}return B.bQ(new B.am(A.V,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a_,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.b7)},
$S:441}
C.c84.prototype={
$1(d){return d.a},
$S:z+22}
C.c86.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aX(w)},
$S:z+76}
C.c87.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1682}
C.c88.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5s(v,C.aYt(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dxQ.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d3(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c8e.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c8f.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fmA.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:285}
C.flH.prototype={
$1(d){return new C.aaW(this.a,this.b,null)},
$S:z+78}
C.eaO.prototype={
$0(){return this.a.O5(this.b,C.hMv(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eaP.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O5(this.b,C.hMx(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O5(this.b,C.hMw(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eaR.prototype={
$0(){W.h0I()
B.a7(this.a,!1).K(null)},
$S:0}
C.c83.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1683}
C.c82.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.mZ),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lx(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bM:A.dp
return B.fD(t,A.B,o,new C.c81(),A.ci,w,!0,u,!1,new B.cv("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1684}
C.c81.prototype={
$3(d,e,f){return D.a7C},
$S:228}
C.fjH.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aX(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.aX(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aX(r.e):t
r=r.z
r=B.dc(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("I<ai.E,cE>")
r=B.z(new B.I(r,new C.fjG(e.b,e.d),u),u.k("ai.E"))
return B.bu(s,B.bQ(new B.am(A.V,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.b7),A.ap)},
$S:1685}
C.fjG.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYt(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f5x.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cV(r.b,new C.f5v(d))
w=B.aG(d,A.bO,x.w).w
v=B.m(22)
u=B.G(A.bG,A.r,1)
t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.fz,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.as(B.aD(!1,A.X,!0,q,B.p(q,B.u(B.a([B.A(B.a([B.C(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l7,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bG(!1,A.yk,q,q,!0,q,q,new C.f5w(p,d),q,B.fp(q,q,A.bh,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JR,q,new B.b5(B.m(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aV(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fu,A.zI,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.f5v.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a7(w,!0).pI())B.a7(w,!0).eB()},
$S:0}
C.f5w.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a7(this.b,!0).eB()},
$S:0}
C.ePp.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d4(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d4(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d4(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fm(A.B,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jw(r*3.14159)
return B.fm(A.B,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jw(r*0.5)
return B.fm(A.B,B.d4(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fm(A.a7,B.d4(u.b,r),t,s,!0)
case 12:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d4(B.e4(A.B,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aGb(r,t))],x.p),t)
case 15:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aGb(1-r,t))],x.p),t)
case 16:v=D.aVI.ar(0,r)
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e4(A.B,B.d4(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d4(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.de()
s.me(r*6.28)
s.jd(r,r,r,1)
return B.fm(A.B,u.b,t,s,!0)
case 20:return B.et(A.B,(r-0.5)*0.35,new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d4(u.b,r)],x.p),t),t)}},
$S:59}
C.dII.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIH.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIG.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h0Y(v,w,e)},
$S:59}
C.c7W.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aX(v.e)
t=v.f
t.toString
t=new B.a8(A.a_,A.a7,A.w,B.a([u,B.aX(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aX(v.e):r
v=v.z
s=B.T(v).k("I<1,cE>")
q=B.z(new B.I(v,new C.c7V(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bQ(new B.am(A.V,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.b7)},
$S:441}
C.c7V.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cb?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5s(m,new C.SW(d,C.aYt(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cY6.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cY5(w))},
$S:11}
C.cY5.prototype={
$0(){return this.a.d++},
$S:0}
C.e0s.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.J(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aGZ.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hIV(w,t,s,e)}switch(s.a.c){case"float3d":s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dX(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jw(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jd(w,w,w,1)
return B.fm(A.B,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.e4(A.B,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d4(B.e4(A.B,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eEQ.prototype={
$1(d){var w
$.a1()
w=B.U()
w.b=A.ak
w.c=d
w.e=A.fk
return w},
$S:1686}
C.fhk.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ap(o,o):new B.ap(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gef()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bmR(u,t,r),A.as))
w.push(B.n2(s.d,A.ap,new C.bb9(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.blU(u,q,t,r),A.as))
return B.as(new B.a3(v.a,v.b,new B.am(A.V,r,A.aX,A.q,w,r),r),r,r,r)},
$S:246}
C.f8j.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:284}
C.eh1.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Bz(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gah(s)){u=null
w=1
break}u=r.dM(s,new C.eh_(),new C.eh0(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1687}
C.eh_.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:192}
C.eh0.prototype={
$0(){return J.fi(this.a)},
$S:1689}
C.edp.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.edq.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.edr.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ef_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eeO.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eeP.prototype={
$1(d){return d.hr()},
$S:z+81}
C.ecN.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eg7.prototype={
$0(){this.a.rI()},
$S:0}
C.egY.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IE()},
$S:0}
C.eeY.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IE()},
$S:0}
C.egL.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.egM.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.egN.prototype={
$1(d){return d.a},
$S:z+22}
C.egO.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aZ,A.aL),$.at())},
$S:260}
C.egP.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ecb.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.egZ.prototype={
$0(){},
$S:0}
C.ee6.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wv()
w.IE()},
$S:0}
C.ec9.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wv()},
$S:0}
C.eca.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wv()},
$S:0}
C.eet.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eeu.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wv()
w.IE()
w.z="Home"},
$S:0}
C.eev.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ee5.prototype={
$1(d){var w=null
return B.ep(B.a([B.bG(!1,A.R9,w,w,!0,w,w,new C.ee4(d),w,w)],x.p),w,w,w,D.eTB,w,w,w,w,D.eCs,w)},
$S:20}
C.ee4.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ee2.prototype={
$1(d){var w=null
return B.ep(B.a([B.bG(!1,A.R9,w,w,!0,w,w,new C.ee1(d),w,w)],x.p),w,w,w,D.eG8,w,w,w,w,D.eE5,w)},
$S:20}
C.ee1.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ee3.prototype={
$0(){},
$S:0}
C.edl.prototype={
$1(d){return this.a.aVR(C.bxN(d))},
$S:z+7}
C.edm.prototype={
$1(d){return this.a.ac3(C.bxN(d))},
$S:z+7}
C.eec.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eTF,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bs,new C.NG(A.ur,D.ar9,"HATI YA KUHOWA","Hati ya mahari",new C.ee7(d),w),A.T,new C.NG(A.fR,D.cKT,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ee8(d),w),A.T,new C.NG(A.hJ,D.cxU,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ee9(d),w),A.T,new C.NG(A.hK,D.cwm,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eea(d),w)],v)
if(this.a.ga8M())A.d.v(u,B.a([A.T,new C.NG(A.iG,D.chG,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eeb(d),w)],v))
return B.br(!0,B.cf(B.u(u,A.ad,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.ws,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:33}
C.ee7.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhowa")
return null},
$S:0}
C.ee8.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhoweya")
return null},
$S:0}
C.ee9.prototype={
$0(){B.a7(this.a,!1).K("marriage_agreement")
return null},
$S:0}
C.eea.prototype={
$0(){B.a7(this.a,!1).K("hati_malipo_awamu")
return null},
$S:0}
C.eeb.prototype={
$0(){B.a7(this.a,!1).K("hati_kiapo_uongozi")
return null},
$S:0}
C.eed.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wv()},
$S:0}
C.ecd.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ece.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mF(r,v.f+1,q);++v.f
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
C.eeo.prototype={
$1(d){return d.b===D.l4},
$S:z+4}
C.eep.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.ed(new C.eem(w,this.a,v),null)},
$S:21}
C.eem.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.een(p,o,a3,n),l=B.K(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.aj,i=l?A.bj:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.G(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.A(B.a([B.C(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bw,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.cu,j,q,q,q,q),q,q,q,new C.eei(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Ax[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdE(t,u.b,p.a===t,i,k,new C.eej(v,m),q))}a1=B.cb(A.bH,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.As[w]
s.a=null
t=s.a=r.a
u.push(new C.bdD(t,r.b,p.b===t,k,j,new C.eek(s,m),q))}return B.br(!0,B.p(q,B.cf(B.u(B.a([d,A.aN,a0,A.T,a1,A.bs,v,A.T,B.cb(A.bH,u,A.bx,12,12),A.bs,new B.a3(1/0,48,B.ey(D.bCj,D.eVV,new C.eel(o,n),B.d9(q,q,q,q,q,q,q,q,q,A.aA,q,q,q,q,new B.b5(B.m(16),A.W),D.aQ7,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.ah),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rD,D.bgE,q,q,q),!0,!1,A.ag,!0,!0)},
$S:117}
C.een.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eeg(w.a,d,e))
w.b.cY(new C.eeh(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1692}
C.eeg.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eeh.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eei.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eej.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eek.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eel.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.F5(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cY(new C.eef(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eef.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eer.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ees.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bl(v,new C.eeq(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wv()},
$S:0}
C.eeq.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eeJ.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.eeK.prototype={
$1(d){return d.w},
$S:z+82}
C.eeL.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.eeM.prototype={
$1(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.aj,r=u?A.bj:A.aO,q=u?A.M:A.c,p=B.m(28),o=B.G(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bO,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.A(B.a([B.p(v,D.bwd,A.h,v,v,D.aRs,v,38,v,v,v,v,v,38),A.ba,B.C(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.cu,s,v,v,v,v),v,v,v,new C.eeG(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dk(1,A.cj,B.hF(v,new C.eeH(m,k,w.c,s,w.d,t,r),k.length,A.hd,v,A.ah,new C.eeI(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aV(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rD,A.Vm,v,v,v),!0,!1,A.ag,!0,!0)},
$S:33}
C.eeG.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeI.prototype={
$2(d,e){return A.aa},
$S:35}
C.eeH.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aA:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cp
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bze,q,q,q,new C.eeE(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.B(D.biR,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bl(q,new B.b1(4,B.m(16),A.W),q,A.eE,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b1(4,B.m(16),D.aPN),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ae,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eeF(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1693}
C.eeE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hOr(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o5(q.a,o,n,s)
r.bG(0,new B.bb(m,B.h1(A.bo,o+s.length),A.aL))
l.ag4(k,m)
l.oz()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeF.prototype={
$1(d){var w=this.a
w.ag4(this.b.a,d)
w.oz()},
$S:2}
C.eeN.prototype={
$0(){},
$S:0}
C.eee.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ecu.prototype={
$0(){},
$S:0}
C.ecv.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h2g(this.b,w,!0)
w=this.a
w.r=null
w.wv()},
$S:0}
C.ecw.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ecx.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bl(v,new C.ect(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wv()},
$S:0}
C.ect.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eeT.prototype={
$1(d){return B.p7(new C.eeS(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.eeS.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.B(E.ado,B.u(B.a([D.eRs,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.C(B.ig(!0,w,e,A.z,D.egp,new C.eeR(this.a,this.b),20,A.rH,w,A.ah,!1),1)],v),A.ad,w,A.e,A.j,0,A.p)},
$S:443}
C.eeR.prototype={
$2(d,e){var w=null,v=D.F9[e],u=C.hkA(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.G(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fw,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eb2,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nm,w,w,w)],m))
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a8(A.a_,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eeQ(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.eeQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c8d(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a7(s,!1).K(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeU.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wv()},
$S:0}
C.eb8.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m7,"","","",D.d8),s=this.b
C.c8q(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B5){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ecs.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.m(0,"id",C.cx())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iO
$.iO=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.fQG(q));++v.f},
$S:0}
C.ecq.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ef1.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ecm.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bl(v.d,new C.ecl(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ecl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ef0.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.N(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ecc.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.aZ,A.aL),$.at())},
$S:260}
C.ecO.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:670}
C.egJ.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.egK.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.apX(w).ft()
v=u.Uz(w)
v.sro(B.h1(A.bo,v.a.a.length))},
$S:8}
C.eg8.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Vw(v)
if(u!=null&&u.b===D.cJ)w.Uz(u).saR(0,u.r)}else w.w=null},
$S:0}
C.eb9.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eh(A.bf,!1,v.gpy().e.l(),A.az,"",4280640491,24,A.bg,A.a1,"",0.22,w,null,"","",0,!1,"",0,D.b8,4280172719,2,"Tap to edit text",0,0,"",D.cb,D.cJ,0.7,0.15,0.2)
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eb6.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eh(A.bf,!1,4279310375,A.az,"",v.gpy().c.j(0.25).l(),24,A.bg,A.a1,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpy().c.l(),2,"",0,0,"",D.cb,D.eQ,0.25,0.3,0.3)
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eaX.prototype={
$0(){var w=C.eh(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a1,"",0.55,C.cx(),this.b,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l4,0.6,0.2,0.18),v=this.a
A.d.H(v.gdk().z,w)
v.r=w.a},
$S:0}
C.eaU.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bHU],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagF().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,D.bu_,r,r,r,r,new C.eaT(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.Z,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cL(q,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:33}
C.eaT.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eaV.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cx(),u=this.b,t=A.Q.aj(u.ad(),null),s=C.eh(A.bf,!1,4279310375,A.az,u.b,4280640491,24,A.bg,A.a1,"",0.86,v,null,"","",0,!1,"",0,D.b8,4280172719,2,t,0,0,"",D.cb,D.a1h,w,0.5-w/2,0.07)
t=this.a
A.d.H(t.gdk().z,s)
t.r=s.a},
$S:0}
C.eco.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ecp.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bl(v.gdk().z,new C.ecn(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.at()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ecn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ebB.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cJ)s.Q=t.c.l()
else if(w===D.eQ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ebC(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ebC.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ebG.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ebH(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ebH.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ebE.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cJ){s.Q=t.c
return}w=new C.ebF(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ebF.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.hX(w,new C.ebD()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ebD.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ebA.prototype={
$0(){return C.c8q(this.b,this.c,this.a.gpy())},
$S:0}
C.eeD.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.egS.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egT.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.egU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egV.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.bf(s,new C.egR(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQp()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hr()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.wv()
t.IE()}},
$S:0}
C.egR.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ego.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8Q(),s=w.b,r=u.a8R(A.eT,A.k_,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.G(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bs,B.p(v,B.A(B.a([B.C(u.aQt(w.c,A.aj),1),new B.B(A.fi,B.p(v,D.bu5,A.h,v,v,new B.o(A.eT.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.C(u.aQt(s,A.eT),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aE,A.w,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.bs,u.aQw(A.eT,d,D.bq9,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bQw(A.b3,d,A.rV,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQu(d,"Not now"))
return new C.Ia(B.u(p,A.ad,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.egn.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Ia(B.u(B.a([v.a8Q(),A.P,v.a8R(A.b3,D.bpQ,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.d2(new B.aV(0,1/0,0,B.aG(d,A.bO,x.w).w.a.b*0.42),B.hF(w,new C.egl(v,u,d),u.length,w,w,A.ah,new C.egm(),!0),w),A.ay,v.aQu(d,"Cancel")],x.p),A.ad,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.egm.prototype={
$2(d,e){return A.T},
$S:35}
C.egl.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.G(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ai3,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bF8,A.n),w,42,w,w,w,w,w,42),A.ba,B.C(B.u(B.a([B.d(v.b,w,1,A.Z,w,w,w,A.mU,w,w,w),A.d5,B.d("Updated "+this.a.O6(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.egk(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.egk.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.egh.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a8Q()
t=t.a8R(A.b_,A.t2,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Ia(B.u(B.a([s,A.P,t,A.bs,B.A(B.a([B.C(B.dU(A.a4B,new C.egf(d),B.d9(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ca,u,new B.b5(B.m(14),A.W),new B.ax(w,1,A.r,-1),u,u,u,u)),1),A.av,B.C(B.bJ(D.eED,new C.egg(d),B.bk(A.eT,u,u,u,A.c,u,A.ca,u,new B.b5(B.m(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ad,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.egf.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.egg.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.egj.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8Q(),s=w.b,r=u.a8R(A.aS,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.C(u.arg("Names",""+w.c),1),A.ab,B.C(u.arg("Fields",""+w.d),1),A.ab,B.C(u.arg("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bh,v,v,v,A.c,v,A.wi,v,new B.b5(B.m(14),A.W),v,v,v)
return new C.Ia(B.u(B.a([t,A.P,r,A.aN,p,A.bs,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.mT,v,v,v),new C.egi(d),o),A.T,u.aQv(d,"Stay here",!1)],q),A.ad,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.egi.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.edh.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.edg.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eg9.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.egI.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yk(A.d.dM(w.d,new C.egG(v),new C.egH(v)).hr(),w.f,null)},
$S:z+84}
C.egG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egH.prototype={
$0(){return this.a},
$S:z+85}
C.eb1.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.B(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h7,w,w,w),w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bvO,w,w,w,w,new C.eb_(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eCM,w,w,w)],x.p)
if(v>1)t.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bwX,w,w,w,w,new C.eb0(d),!1,w,w,w,w,w,D.eX1,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eb_.prototype={
$0(){B.a7(this.a,!1).K("scroll")
return null},
$S:0}
C.eb0.prototype={
$0(){B.a7(this.a,!1).K("split")
return null},
$S:0}
C.eb2.prototype={
$0(){var w=this.b,v=w.c,u=C.eh(A.bf,!1,4279310375,A.az,v,4280640491,24,A.bg,A.a1,"",0.84,C.cx(),w.b,"","",0,!1,"",0,D.b8,4280172719,2,v,0,0,"",D.cb,D.P8,0.88,0.06,0.08)
v=this.a
A.d.H(v.gdk().z,u)
v.r=u.a},
$S:0}
C.eb3.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iO
$.iO=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iO
$.iO=k+1
m.push(new C.ex(""+1000*l+"_"+k,D.P8,0.04,0.06,0.92,0.88,v,24,A.a1,A.bg,A.az,4279310375,A.bf,u,D.b8,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cb,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.ln(""+1000*p+"_"+o,r+n,"",D.pm,4294967295,null,D.d8,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eb7.prototype={
$0(){var w,v=C.cx(),u=this.a,t=u.e
t=(t==null?null:C.kg(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eh(A.bf,!1,4279310375,A.az,t,4280640491,24,A.bg,A.a1,"",0.22,v,this.b.a,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.kE,0.35,0.55,0.62)
A.d.H(u.gdk().z,w)
u.r=w.a},
$S:0}
C.eaZ.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aYu(o)
w=C.cx()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eh(A.bf,!1,4279310375,A.az,"marriage_sign_placed_"+A.a.e0(v.db,"marriage_sign_",""),4280640491,24,A.bg,A.a1,"",r,w,o.a,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.kE,s,u,t)
A.d.H(p.gdk().z,q)
A.d.bl(p.gdk().z,new C.eaY(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.hIF(p)}},
$S:0}
C.eaY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eeZ.prototype={
$0(){var w=this.a,v=this.b
w.aYu(v)
this.c.at=v.a
w.r=null},
$S:0}
C.egQ.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.edk.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bl(r.z,new C.edj())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.edj.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ebK.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ebL.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rI()},
$S:8}
C.eaW.prototype={
$0(){var w=C.eh(A.bf,!1,4279310375,A.az,"HD Photo",4280640491,24,A.bg,A.a1,"",0.8,C.cx(),this.b,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l4,0.8,0.1,0.1),v=this.a
A.d.H(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ecM.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eb4.prototype={
$0(){var w=this.a,v=this.b
A.d.H(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ebd.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ebe.prototype={
$0(){var w=this.b.hr(),v=C.cx(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eh(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.H(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ebf.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bf(w,new C.ebc(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.ebc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ebq.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bf(w,new C.ebb(v))
if(u>0){A.d.cu(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.ebb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ebt.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.ebu.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ebv.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.ebw.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ebx.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eby.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ebz.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebg.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.H(v,C.BE(w.gpy().c.j(0.18).l(),0.1,u,D.b8,0,2,1,0,0))
u=w.gdk().z
v=C.cx()
A.d.H(u,C.iJ(A.bf,!1,w.gpy().d.l(),A.az,18,A.bg,A.I,0.07,v,"Document Header",0,D.d8,0.9,0.05,0.02))},
$S:0}
C.ebh.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cx()
A.d.H(u,C.BE(v.gpy().c.j(0.12).l(),0.1,t,D.b8,0,2,1,0,0.9))
t=v.gdk().z
u=C.cx()
w=C.bys()
A.d.H(t,C.iJ(A.L,!1,v.gpy().e.l(),A.az,12,A.bg,A.a1,0.06,u,"Footer \xb7 "+w,0,D.d8,0.9,0.05,0.92))},
$S:0}
C.ebi.prototype={
$0(){A.d.H(this.a.gdk().z,C.BE(1727914055,0.12,C.cx(),D.b8,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ebj.prototype={
$0(){var w=4279310375
A.d.H(this.a.gdk().z,C.BE(w,0.08,C.cx(),D.b8,w,2,0.5,0.2,0.4))},
$S:0}
C.ebk.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.H(v,C.BE(w.gpy().c.j(0.35).l(),0.12,u,D.B6,4280640491,2,0.2,0.15,0.55))
A.d.H(w.gdk().z,C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a1,0.15,C.cx(),"Important note",0,D.pn,0.5,0.38,0.52))},
$S:0}
C.ebl.prototype={
$0(){var w=this.a
A.d.H(w.gdk().z,C.BE(4294507260,0.78,C.cx(),D.b8,4291548641,1.5,0.84,0.08,0.1))
A.d.H(w.gdk().z,C.iJ(A.bf,!1,4279179050,A.az,16,A.bg,A.a1,0.7,C.cx(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bys()+"\n\nSubject:\n\nBody text\u2026",0,D.d8,0.76,0.12,0.14))},
$S:0}
C.ebm.prototype={
$0(){var w=this.a
A.d.H(w.gdk().z,C.BE(4294897802,0.28,C.cx(),D.b8,4294626325,2,0.3,0.62,0.12))
A.d.H(w.gdk().z,C.iJ(A.bf,!1,4285611794,A.az,15,A.bg,A.a1,0.24,C.cx(),"Sticky note",0,D.aAg,0.26,0.64,0.14))},
$S:0}
C.ebn.prototype={
$0(){var w=4280640491,v=this.a
A.d.H(v.gdk().z,C.BE(4293060848,0.04,C.cx(),D.b8,4291548641,2,0.8,0.1,0.48))
A.d.H(v.gdk().z,C.BE(w,0.04,C.cx(),D.b8,w,2,0.55,0.1,0.48))},
$S:0}
C.ebo.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.iJ(A.bf,!1,w,A.az,18,A.bg,A.a1,0.62,C.cx(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.G3,0.42,0.06,0.18))
A.d.H(v.gdk().z,C.iJ(A.bf,!1,w,A.az,18,A.bg,A.a1,0.62,C.cx(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.th,0.42,0.52,0.18))},
$S:0}
C.ebp.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.BE(858088427,0.62,C.cx(),D.b8,4280640491,2,0.42,0.05,0.18))
A.d.H(v.gdk().z,C.BE(856004201,0.62,C.cx(),D.b8,4278556265,2,0.42,0.53,0.18))
A.d.H(v.gdk().z,C.iJ(A.bf,!1,w,A.az,20,A.bg,A.I,0.1,C.cx(),"Option A",0,D.d8,0.36,0.08,0.2))
A.d.H(v.gdk().z,C.iJ(A.bf,!1,w,A.az,20,A.bg,A.I,0.1,C.cx(),"Option B",0,D.d8,0.36,0.56,0.2))},
$S:0}
C.ebr.prototype={
$0(){var w=4279310375,v=this.a
A.d.H(v.gdk().z,C.BE(4294967295,0.36,C.cx(),D.b8,w,2,0.24,0.38,0.28))
A.d.H(v.gdk().z,C.iJ(A.L,!1,w,A.az,14,A.bg,A.a1,0.12,C.cx(),"[ QR CODE ]",0,D.d8,0.24,0.38,0.4))},
$S:0}
C.ebs.prototype={
$0(){return C.c8q(this.b,D.P9,this.a.gpy())},
$S:0}
C.ecL.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2U.q(0,d),t=this.a
return t.b2k(d,v===d,A.aW,this.c,new C.ecK(t,u,d,w),u)},
$S:z+25}
C.ecK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bze(r,new C.ecJ(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecJ.prototype={
$0(){return this.a.cY(new C.ecI(this.b,this.c))},
$S:0}
C.ecI.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eb5.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m7,"","","",D.d8),s=this.b
C.c8q(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B5){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ebO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hOu(p,q.d,s,new C.ebN(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rI(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebN.prototype={
$1(d){return this.bez(d)},
bez(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.ebM(t,d))
w=2
return B.b(t.rI(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ebM.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.ebP.prototype={
$0(){return this.a.bBS()},
$S:0}
C.ebQ.prototype={
$0(){return this.a.aLV("Class Presentation",!0)},
$S:0}
C.ebR.prototype={
$1(d){return this.a.bCO(d.b,this.b,d.a)},
$S:z+88}
C.ecr.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bO,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eeC.prototype={
$1(d){return new B.B(new B.L(0,0,0,B.aG(d,A.eo,x.w).w.f.d),new B.ed(new C.eeB(this.a,this.b),null),null)},
$S:57}
C.eeB.prototype={
$2(d,e){return B.p7(new C.eeA(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1695}
C.eeA.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.G(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.T,r,new B.B(A.acQ,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bG(!1,A.yk,v,v,!0,v,v,new C.eey(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.C(B.cL(B.a([p.aOx(u,!0,!0,new C.eez(p,w.d))],q),e,D.bew,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kh,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.eey.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eez.prototype={
$0(){this.b.$1(new C.eew())
var w=this.a
if(w.c!=null)w.n(new C.eex())},
$S:0}
C.eew.prototype={
$0(){},
$S:0}
C.eex.prototype={
$0(){},
$S:0}
C.ega.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.egb.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d4(B.e4(A.B,new C.avR(this.a,null),0.94+w*0.06,null,null),w)},
$S:444}
C.egc.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.egd.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d4(B.e4(A.B,new C.b92(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:444}
C.ege.prototype={
$0(){return A.d.cj(this.a.d,0,C.TS(this.b))},
$S:0}
C.eba.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dF.ar(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.72)],t):B.a([A.c.j(0.88),A.oJ.j(0.75)],t)
r=B.G(A.bd.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bd.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.G(A.bd.j(0.45+q),A.r,1)
t=B.p(p,B.V(Y.X1,u?A.al:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bS(A.B,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.tk(A.fe,B.p(p,B.u(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.aj,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aE,A.w,s,p,p),A.n),p,p,p,p,A.em,p,p,1/0),14,!1),A.ap)},
$S:583}
C.ecf.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ecg.prototype={
$1(d){return d.length!==0},
$S:3}
C.ech.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.jZ
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.XC:A.A0}return w},
$S:673}
C.eck.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dF.ar(0,A.k.J(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.ml.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.G(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kg(v.w)?A.ur:A.p8,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a8(A.a_,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O6(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O6(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O6(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O6(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O6(v.f)
r=k.bCM(n,A.d.gI(r),t)
return B.p(l,B.bu(j,new B.a5D(B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,B.p(l,B.dK(!1,A.JO,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.np,t?A.aB:A.bP,l,l,l,l),l,l,l,new C.eci(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aE,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ecj(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.h,l,l,l,l,l,l,A.d7,l,l,l,l)},
$S:90}
C.ecj.prototype={
$0(){return this.a.ac3(this.b)},
$S:0}
C.eci.prototype={
$0(){return this.a.zN(this.b,this.c)},
$S:0}
C.edL.prototype={
$0(){var w=this.a
w.b0Y()
w.n(new C.edK())},
$S:0}
C.edK.prototype={
$0(){},
$S:0}
C.edM.prototype={
$1(d){return this.a.ag4(this.b.a,d)},
$S:2}
C.edN.prototype={
$0(){this.a.cY(new C.edJ(this.b))},
$S:0}
C.edJ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.edO.prototype={
$0(){this.a.cY(new C.edI(this.b))},
$S:0}
C.edI.prototype={
$0(){var w=this.a
return w.y=w.y===A.cz?A.bg:A.cz},
$S:0}
C.edP.prototype={
$0(){this.a.cY(new C.edH(this.b))},
$S:0}
C.edH.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mc},
$S:0}
C.edQ.prototype={
$0(){this.a.cY(new C.edG(this.b))},
$S:0}
C.edG.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.edR.prototype={
$0(){var w=this.a
w.cY(new C.edF(w,this.b))},
$S:0}
C.edF.prototype={
$0(){var w=this.b
return w.as=this.a.bX_(w.as)},
$S:0}
C.edS.prototype={
$0(){return this.a.cY(new C.edE(this.b))},
$S:0}
C.edE.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edT.prototype={
$0(){return this.a.cY(new C.edD(this.b))},
$S:0}
C.edD.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.edw.prototype={
$0(){return this.a.a_J(this.b.a)},
$S:0}
C.edx.prototype={
$0(){this.a.Yl()
return null},
$S:0}
C.edy.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bO,x.w).w.a.a<900)w.acm()
else w.n(new C.edv(w))},
$S:0}
C.edv.prototype={
$0(){return this.a.as=!0},
$S:0}
C.edz.prototype={
$0(){this.a.cY(new C.edu(this.b))},
$S:0}
C.edu.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.edA.prototype={
$0(){return this.a.cY(new C.edt(this.b))},
$S:0}
C.edt.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edB.prototype={
$0(){return this.a.cY(new C.eds(this.b))},
$S:0}
C.eds.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.edC.prototype={
$0(){return this.a.avW(null)},
$S:0}
C.ecE.prototype={
$0(){this.a.Ck()
return null},
$S:0}
C.ecF.prototype={
$0(){this.a.a7p()
return null},
$S:0}
C.ecH.prototype={
$1(d){return this.beA(d)},
beA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Iu(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c0(A.aG,null,new C.ecz(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cY(new C.ecA(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cY(new C.ecB(r))
s=s.c.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cY(new C.ecC(r))
s=s.c.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h3n(q,new C.D7(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cY(new C.ecD(r,p))
s=s.c.F(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aem(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.ecz.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dMY],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bvV:r
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.ecy(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.ecy.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.ecA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecB.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ecC.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ecD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ecG.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yB(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yB(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yB(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aem(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dQK,q,v,u,B.yB(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:127}
C.egW.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byp(w,v)}},
$S:0}
C.egX.prototype={
$0(){this.a.Ck()
return null},
$S:0}
C.edW.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bF3:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aQ:A.bB
return new B.B(A.hd,B.aJ(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b9,new B.o(w,u,u,r,u,q,A.n),A.eD,u,u,u,A.ln,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.edV(t,d),u,u,u,u,u,u,!1,A.af),u)},
$S:128}
C.edV.prototype={
$0(){var w=this.a
return w.n(new C.edU(w,this.b))},
$S:0}
C.edU.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.edX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_p:E.are
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbG2():t.gbCc()
return B.hJ(B.aJ(u,B.p(u,D.ahw,A.h,u,u,new B.o(u,u,u,u,B.a([new B.a9(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a_,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.af),u,s,u,u)},
$S:1698}
C.edY.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hNL(v,w.a.c)},
$S:0}
C.efk.prototype={
$0(){return this.b.um(this.a.a)},
$S:0}
C.efl.prototype={
$0(){return this.a.um(D.m7)},
$S:0}
C.efm.prototype={
$0(){return this.a.um(D.G1)},
$S:0}
C.efx.prototype={
$0(){return this.a.um(D.G2)},
$S:0}
C.efI.prototype={
$0(){return this.a.um(D.G0)},
$S:0}
C.efT.prototype={
$0(){return this.a.pk("lab_report")},
$S:0}
C.eg_.prototype={
$0(){return this.a.pk("rubric")},
$S:0}
C.eg0.prototype={
$0(){return this.a.pk("minutes")},
$S:0}
C.eg1.prototype={
$0(){return this.a.pk("agenda")},
$S:0}
C.eg2.prototype={
$0(){return this.a.pk("timeline")},
$S:0}
C.eg3.prototype={
$0(){return this.a.pk(this.b.a)},
$S:0}
C.efn.prototype={
$0(){this.a.TK()
return null},
$S:0}
C.efo.prototype={
$0(){this.a.TE()
return null},
$S:0}
C.efp.prototype={
$0(){return this.a.pk("table")},
$S:0}
C.efq.prototype={
$0(){return this.a.pk("sticky")},
$S:0}
C.efr.prototype={
$0(){return this.a.pk("divider")},
$S:0}
C.efs.prototype={
$0(){return this.a.pk("header_bar")},
$S:0}
C.eft.prototype={
$0(){return this.a.ol(D.b8)},
$S:0}
C.efu.prototype={
$0(){return this.a.ol(D.ex)},
$S:0}
C.efv.prototype={
$0(){return this.a.ol(D.jl)},
$S:0}
C.efw.prototype={
$0(){return this.a.ol(D.B6)},
$S:0}
C.efy.prototype={
$0(){return this.a.ol(D.jm)},
$S:0}
C.efz.prototype={
$0(){return this.a.ol(D.kF)},
$S:0}
C.efA.prototype={
$0(){return this.a.ol(D.fb)},
$S:0}
C.efB.prototype={
$0(){this.a.FV()
return null},
$S:0}
C.efC.prototype={
$0(){this.a.LH()
return null},
$S:0}
C.efD.prototype={
$0(){return this.a.pk("quote")},
$S:0}
C.efE.prototype={
$0(){return this.a.a5C()},
$S:0}
C.efF.prototype={
$0(){this.a.Yq()
return null},
$S:0}
C.efG.prototype={
$0(){var w=this.a
return w.n(new C.efa(w))},
$S:0}
C.efa.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.efH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nu(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.efi(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efi.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.efJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jj()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2V.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.be
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.G(t,A.r,v?2.5:1),s,s,new B.a8(A.a_,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a2V.q(0,q))u.push(B.an(s,B.p(s,D.Ls,A.h,s,s,D.Ck,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.B(A.hd,B.aJ(s,B.hJ(new B.am(A.V,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.efh(r,d),s,s,s,s,s,s,!1,A.af),s)},
$S:z+89}
C.efh.prototype={
$0(){this.a.a5U(this.b)
return null},
$S:0}
C.efK.prototype={
$0(){this.a.a5T(this.b)
return null},
$S:0}
C.efL.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hkB(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bh:A.be
v=p.gdk()
n=B.G(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qR(4294967295,r,0,0,r,"preview_"+w,D.pm,"","","",D.d8)
C.h0l(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.h1F(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.ai4,A.h,r,r,D.Ck,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.B(A.kt,B.aJ(r,B.u(B.a([new B.am(A.V,r,A.a9,A.q,u,r),A.d5,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.aj,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.efg(p,q,d),r,r,r,r,r,r,!1,A.af),r)},
$S:z+90}
C.efg.prototype={
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
return B.b(s.nu(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cY(new C.ef6(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ef6.prototype={
$0(){return C.h0l(this.a,this.b.a)},
$S:0}
C.efj.prototype={
beB(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2U.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.beB(d,e)},
$S:z+91}
C.eg4.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("I<1,r>")
v=B.z(new B.I(d,new C.eg6(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.cf(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aY)},
$S:z+92}
C.eg6.prototype={
$1(d){var w=this
return w.a.b2k(d,w.b===d,w.c,w.d,new C.eg5(w.e,d),!D.a2U.q(0,d))},
$S:z+25}
C.eg5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.efM.prototype={
$1(d){this.b.$2(d,new C.eff(this.a,d,this.c))
return null},
$S:z+26}
C.eff.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bze(u,new C.ef5(v,this.c,w),w)},
$S:0}
C.ef5.prototype={
$0(){return this.a.cY(new C.ef3(this.b,this.c))},
$S:0}
C.ef3.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.efN.prototype={
$1(d){this.b.$2(d,new C.efe(this.a,d))
return null},
$S:z+26}
C.efe.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fvu(u,new C.ef4(v,w),w)},
$S:0}
C.ef4.prototype={
$0(){var w=this.a
return w.cY(new C.ef2(w,this.b))},
$S:0}
C.ef2.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.efO.prototype={
$0(){var w=this.a
return w.n(new C.efd(w))},
$S:0}
C.efd.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.efP.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byp(w,v)}},
$S:0}
C.efQ.prototype={
$0(){this.a.GH()
return null},
$S:0}
C.efR.prototype={
$0(){return this.a.a5C()},
$S:0}
C.efS.prototype={
$0(){var w=this.a,v=w.jj()
if(v!=null&&v.b===D.cJ)w.cY(new C.efc(v))},
$S:0}
C.efc.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.efU.prototype={
$0(){this.a.Ck()
return null},
$S:0}
C.efV.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.DW(v,!0)
return null},
$S:0}
C.efW.prototype={
$0(){this.a.cY(new C.efb(this.b))},
$S:0}
C.efb.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.efX.prototype={
$0(){this.a.cY(new C.ef9(this.b))},
$S:0}
C.ef9.prototype={
$0(){var w=this.a
return w.y=w.y===A.cz?A.bg:A.cz},
$S:0}
C.efY.prototype={
$0(){this.a.cY(new C.ef8(this.b))},
$S:0}
C.ef8.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mc},
$S:0}
C.efZ.prototype={
$0(){this.a.cY(new C.ef7(this.b))},
$S:0}
C.ef7.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ebJ.prototype={
$1(d){return this.bey(d)},
bey(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cY(new C.ebI(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.ebI.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.egr.prototype={
$0(){var w=this.a
return w.cY(new C.egq(w,this.b))},
$S:0}
C.egq.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.egs.prototype={
$0(){var w=this.a
return w.cY(new C.egp(w,this.b))},
$S:0}
C.egp.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ecR.prototype={
$0(){return this.a.cY(new C.ecQ(this.b))},
$S:0}
C.ecQ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ecS.prototype={
$0(){return this.a.cY(new C.ecP(this.b))},
$S:0}
C.ecP.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.edo.prototype={
$1(d){var w=x.gh
w=B.z(new B.I(D.ajJ,new C.edn(),w),w.k("ai.E"))
return w},
$S:z+94}
C.edn.prototype={
$1(d){var w=null
return B.yB(B.d(d.b,w,w,w,w,w,w,A.mW,w,w,w),48,d,x.fO)},
$S:z+95}
C.egE.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a3(v,w?8:0,null,null)},
$S:35}
C.egD.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jG()?q:new C.egB(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bh
else v=r.d?A.be:A.ct
v=B.G(v,A.r,o?2:1)
u=r.d?A.d3:A.c
t=B.bU(0,C.h1F(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.V,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nD,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adH,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.egC(p,e),q,q,q,q,q,q,!1,A.af)},
$S:76}
C.egC.prototype={
$0(){var w=this.a
return w.n(new C.egx(w,this.b))},
$S:0}
C.egx.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IE()},
$S:0}
C.egB.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c0(null,null,new C.egy(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.egz(q,s))
q.aNi()}else if(r==="del"){q=t.a
q.n(new C.egA(q,s))
q.aMv()}else if(r==="up")t.a.aYH(s,s-1)
else if(r==="down")t.a.aYH(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egy.prototype={
$1(d){var w=null,v=B.a([B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxy,w,w,w,w,new C.egt(d),!1,w,w,w,w,w,w,w,D.eDD,w,w,w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxr,w,w,w,w,new C.egu(d),!1,w,w,w,w,w,w,w,A.ve,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bwJ,w,w,w,w,new C.egv(d),!1,w,w,w,w,w,w,w,D.eL4,w,w,w))
if(u<this.b.r.length-1)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byJ,w,w,w,w,new C.egw(d),!1,w,w,w,w,w,w,w,D.eDs,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.egt.prototype={
$0(){B.a7(this.a,!1).K("dup")
return null},
$S:0}
C.egu.prototype={
$0(){B.a7(this.a,!1).K("del")
return null},
$S:0}
C.egv.prototype={
$0(){B.a7(this.a,!1).K("up")
return null},
$S:0}
C.egw.prototype={
$0(){B.a7(this.a,!1).K("down")
return null},
$S:0}
C.egz.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.egA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.egF.prototype={
$0(){return this.a.a5C()},
$S:0}
C.ec8.prototype={
$0(){var w=this.a
w.b0Y()
w.avW(null)},
$S:0}
C.ec7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dm,24)],x.V),m=this.b
if(m.f!=null){w=B.aX(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aE,A.w,B.a([w,B.aX(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aX(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aX(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aE,A.w,B.a([r,B.aX(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,B.bQ(A.k9,new B.o(m.f==null?B.aX(m.e):p,p,p,p,p,r,A.n),A.b7),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.I(r,new C.ec6(this.a,e.b,e.d,q),B.T(r).k("I<1,r>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a1,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bQ(new B.am(A.V,p,A.a9,A.h,s,new B.cv("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.b7)},
$S:441}
C.ec6.prototype={
$1(d){var w=this
return w.a.byf(d,w.b,w.c,w.d)},
$S:z+23}
C.ebW.prototype={
$0(){var w=this
if(w.b){w.a.LQ(w.c)
return}if(w.d){w.a.a5A(w.c)
return}if(w.e){w.a.adG(w.c)
return}if(w.f)w.a.b1w(w.c)},
$S:0}
C.ebX.prototype={
$0(){this.a.LQ(this.b)
return null},
$S:0}
C.ebY.prototype={
$0(){return this.a.a_J(this.b.a)},
$S:0}
C.ebZ.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ebV(u,d,w.c,w.d))
v.Gl()
v.nB()
v.oz()},
$S:18}
C.ebV.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ec_.prototype={
$1(d){return this.a.ag4(this.b.a,d)},
$S:2}
C.ec1.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fGO(w))u.a.LQ(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b1w(v)},
$S:0}
C.ec0.prototype={
$0(){return this.a.a_J(this.b.a)},
$S:0}
C.ec2.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ebU(w.b,d,w.c,w.d))
v.Gl()
v.nB()
v.oz()},
$S:18}
C.ebU.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cJ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ec3.prototype={
$1(d){var w=this.a
w.n(new C.ebT(this.b,d))
w.Gl()
w.nB()
w.oz()},
$S:242}
C.ebT.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cJ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ec4.prototype={
$0(){var w=this.a
w.n(new C.ebS(this.b))
w.Gl()
w.nB()
w.oz()},
$S:0}
C.ebS.prototype={
$0(){this.a.r=C.h1a()},
$S:0}
C.ec5.prototype={
$0(){return this.a.a_J(this.b.a)},
$S:0}
C.ee_.prototype={
$0(){var w=this.a
return w.n(new C.edZ(w))},
$S:0}
C.edZ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ee0.prototype={
$1(d){return this.a.csW(this.b.a,d)},
$S:2}
C.ed4.prototype={
$1(d){var w
this.a.cY(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.ed5.prototype={
$1(d){return this.a.$1(new C.ed3(this.b,d))},
$S:6}
C.ed3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ed6.prototype={
$1(d){return this.a.$1(new C.ed2(this.b,d))},
$S:6}
C.ed2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ed7.prototype={
$1(d){return this.a.$1(new C.ed1(this.b,d))},
$S:6}
C.ed1.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ed8.prototype={
$1(d){return this.a.$1(new C.ed0(this.b,d))},
$S:6}
C.ed0.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ed9.prototype={
$1(d){return this.a.$1(new C.ed_(this.b,d))},
$S:6}
C.ed_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eda.prototype={
$1(d){return this.b.$1(new C.ecZ(this.a,this.c))},
$S:9}
C.ecZ.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.edb.prototype={
$1(d){return this.b.$1(new C.ecY(this.a,this.c))},
$S:9}
C.ecY.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.edc.prototype={
$1(d){var w=null,v=this.b,u=B.aX(d),t=v.Q===d,s=t?A.bh:A.cS
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.G(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecX(this.a,v,d),w,w,w,w,w,w,!1,A.af)},
$S:439}
C.ecX.prototype={
$0(){return this.a.$1(new C.ecU(this.b,this.c))},
$S:0}
C.ecU.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.edd.prototype={
$1(d){return this.a.$1(new C.ecW(this.b,d))},
$S:1699}
C.ecW.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ede.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(B.aX(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecV(this.a,this.b,d),w,w,w,w,w,w,!1,A.af)},
$S:439}
C.ecV.prototype={
$0(){return this.a.$1(new C.ecT(this.b,this.c))},
$S:0}
C.ecT.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.edf.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a7(w,!1).pI()}else w=!1
if(w){w=v.a.c
w.toString
B.a7(w,!1).eB()}v.a.aoY()},
$S:0}
C.edi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dF.ar(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.bd,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.G(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.G(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.t2,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mA,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.X,!0,n,B.aH(!1,m,!0,B.er(new B.a3(48,48,new B.am(A.B,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aE,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:125}
C.eaS.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dF.ar(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.bd,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.G(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.G(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.er(B.u(B.a([B.e4(A.B,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.aa,B.d(q.e,p,p,p,p,p,p,A.jN,A.L,p,p)],x.p),A.m,p,A.b5,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aE,A.w,u,p,p),A.n),p,A.DB,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:125}
C.eeX.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aiV,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ep(B.a([B.bG(!1,A.de,w,w,!0,w,w,new C.eeV(d),w,w),B.bJ(A.pC,new C.eeW(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.eeV.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeW.prototype={
$0(){var w=this.b.a.a
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.cUC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dF.ar(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.ar(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.ar(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ),w*0.35)
t.toString
t=B.G(t,A.r,1.2)
s=x.V
r=B.a([new B.a9(w*2,A.G,A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.18+w*0.12),A.J,32+w*10),D.a76],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bS(A.b4,0.9,A.w,k,0,B.a([A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bS(A.B,0.5,A.w,k,0,B.a([m,A.d.gai(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kg(m)?D.t9:M.mJ
s=B.a([new B.a9(0,A.G,A.d.gI(C.kg(m)?D.t9:M.mJ).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e4(A.B,B.p(k,B.V(C.kg(j.a.c.w)?A.ur:A.p8,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aE,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.B,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fW,B.d(j.a.c.b,k,2,A.Z,k,k,k,D.ewg,A.L,k,k),A.au,B.d(j.gco5(),k,k,k,k,k,k,D.eAG,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQp()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kg(j.a.c.w)?D.t9:M.mJ).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.aa],m))}s.push(new C.I3(A.wK,"Download PDF","pdf",A.dc,j.Hw(0),!1,k))
p=j.a.c
if(!p.z||p.gQp()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I3(A.k_,"Transfer to "+C.h1c(p==null?"":p),"transfer_hati",A.aS,j.Hw(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hw(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I3(D.bpa,"Rename presentation","rename",A.c9,n,!1,k),A.ar,new C.I3(A.afi,"Duplicate","duplicate",A.b0,j.Hw(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.I3(A.e4,"Delete presentation","delete",A.aH,j.Hw(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hw(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hw(n)
s.push(B.dO(B.d4(B.bG(!1,E.aKy,k,k,!0,k,k,new C.cUB(d),k,B.fp(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,A.as,k,D.bhA,k,k,k,k,k,A.k2,k,k)),n),new B.v(0,(1-p)*8)))
return B.e4(A.B,B.d4(B.aD(!1,A.X,!0,k,B.p(k,B.bu(q,new B.am(A.V,k,A.a9,A.q,B.a([o,new B.B(D.bgJ,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.Su,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cUB.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cUY.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cUZ.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cUz.prototype={
$1(d){var w=this.a
return w.n(new C.cUv(w))},
$S:23}
C.cUv.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cUA.prototype={
$1(d){var w=this.a
return w.n(new C.cUu(w))},
$S:53}
C.cUu.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUy.prototype={
$0(){var w=this.a
return w.n(new C.cUw(w))},
$S:0}
C.cUw.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUx.prototype={
$0(){var w=this.a.a.e
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.ehC.prototype={
$0(){return $.bgs=!$.bgs},
$S:0}
C.ehs.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQm())u.asJ()},
$S:0}
C.ehB.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eht.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehu.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.asJ()},
$S:0}
C.eho.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ehp.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ehq.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehr.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.J(w-1+v,v)},
$S:0}
C.ehz.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.B,null,A.aX,A.q,w,null)},
$S:1700}
C.ehA.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hA)return new B.cZ(e,!1,d,null)
w=this.a
return w.cma(w.e,d,e)},
$S:445}
C.ehv.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gt(0))*1.5708)
return B.fm(A.B,B.d4(e,v.gt(0)),null,w,!0)},
$S:44}
C.ehw.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jw((1-v.gt(0))*1.5708)
return B.fm(A.B,B.d4(e,v.gt(0)),null,w,!0)},
$S:44}
C.ehx.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gt(0)*0.8)
w.jw(v.gt(0)*0.35)
return B.fm(A.B,B.d4(e,v.gt(0)),null,w,!0)},
$S:44}
C.ehy.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gt(0)*1.2)
return B.fm(A.a7,B.d4(e,v.gt(0)),null,w,!0)},
$S:44}
C.ehD.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWI().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWI().x
t===$&&B.c()
return new C.aYu(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.H2(v.c,t,!0,new B.cv("cine"+u,x.W))},
$S:655}
C.ehF.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bO,x.w).w.a.a*0.55)w.asJ()
else w.cb5()},
$S:53}
C.ehE.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.fmq.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:446}
C.fmz.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ep(B.a([B.bG(!1,A.de,w,w,!0,w,w,new C.fmw(d),w,w),B.bG(!1,D.eRL,w,w,!0,w,w,new C.fmx(d,this.b,v),w,w),B.bJ(A.aKO,new C.fmy(d,v,this.c),w)],x.p),w,w,L.rm,new B.a3(320,w,t,w),w,w,w,w,D.eT4,w)},
$S:20}
C.fmw.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.fmx.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
C.fHs(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fmy.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
t=u.b
w=2
return B.b(C.aMz(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aM_(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fmp.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c8t.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fmv.prototype={
$1(d){return d.ad()},
$S:z+14}
C.eXt.prototype={
$1(d){return C.fHq(C.TS(B.Z(d,x.N,x.z)),this.a)},
$S:z+96}
C.fuK.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.fuL.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d4(B.e4(A.B,D.f4n,0.94+w*0.06,null,null),w)},
$S:444}
C.fuM.prototype={
$1(d){var w=this
return new C.TU(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eh8.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eh4.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eh7.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.TV(u,this.b,w.gaJT(),v,null)},
$S:z+99}
C.eh5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eh6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eh9.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eha.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ehd.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ehe.prototype={
$0(){var w=this.a
return w.n(new C.ehc(w))},
$S:0}
C.ehc.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ehf.prototype={
$0(){var w=this.a
return w.n(new C.ehb(w))},
$S:0}
C.ehb.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ehg.prototype={
$1(d){return this.a.bCN(d,this.b)},
$S:z+100}
C.eh3.prototype={
$0(){var w=this.a
return w.n(new C.eh2(w,this.b))},
$S:0}
C.eh2.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ehh.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ehi.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ehj.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ehk.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ehl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fC(new B.fv(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.F(x.q).f.P(D.ejo)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eaM.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.eaL())},
$S:0}
C.eaL.prototype={
$0(){},
$S:0}
C.eaN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:8}
C.eaI.prototype={
$1(d){return this.a.n(new C.eaH())},
$S:2}
C.eaH.prototype={
$0(){},
$S:0}
C.eaJ.prototype={
$1(d){return this.a.aUJ()},
$S:2}
C.eaK.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ehn.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ehm(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehm.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fgM.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.eo(new B.k1(this.c,new C.fgL(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:206}
C.fgL.prototype={
$3(d,e,f){return new C.H2(e,!1,!1,new B.cv(e.a,x.W))},
$S:z+102}
C.fgN.prototype={
$1(d){var w=null
return B.nU(!1,B.as(new C.bqK(this.a,this.b,w),w,w,w),w,x.z)},
$S:265}
C.fgR.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aS.gm4(),$async$$0)
case 3:w=4
return B.b(B.bK(A.oW,null,x.H),$async$$0)
case 4:w=5
return B.b($.aS.gm4(),$async$$0)
case 5:s=$.aS.ae$.x.h(0,t.a)
r=s==null?null:s.gb3()
if(!(r instanceof B.q1))throw B.O("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fgS.prototype={
bf6(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.he(A.fI),$async$$1)
case 3:r=f
if(r==null)throw B.O("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hC([J.f2(A.dz.gaL(r))],"image/png"))
t.toString
s=Ah.fyv(t)
w=4
return B.b(new B.pw(s,"load",!1,x.ev).gI(0).cJ(0,A.kp),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bf6(d)},
$S:1704}
C.fgO.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fgP.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fA(0)},
$S:141}
C.fgQ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eRR.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.esZ,A.L,w,w)},
$S:1705}
C.eRS.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bu(v,B.mR(A.bj,w,A.dN,8,w,e===0?w:e,w),A.ap)},
$S:565}
C.e1j.prototype={
$1(d){this.a.XO()
return null},
$S:14}
C.e1h.prototype={
$0(){return this.a.e=D.bcO},
$S:0}
C.e1i.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bu
return this.b.e=w},
$S:0}
C.cb2.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cb3.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aIG.prototype
w.bpx=w.p
w=C.aI9.prototype
w.bp_=w.p
w=C.aHW.prototype
w.boL=w.p
w=C.aI8.prototype
w.boZ=w.p
w=C.aIE.prototype
w.bpv=w.p
w=C.aJX.prototype
w.bqY=w.p
w=C.aGR.prototype
w.bnD=w.p
w=C.aIS.prototype
w.bpJ=w.p
w=C.aIT.prototype
w.bpK=w.p
w=C.b_9.prototype
w.bkk=w.ayW})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hLL","akS",104)
v(C.aFS.prototype,"gbXk","WP",0)
var r
u(r=C.auF.prototype,"gcnr","cns",38)
v(r,"gbY4","aaz",0)
v(r=C.auB.prototype,"gaTB","CN",3)
v(r,"gbY1","bY2",3)
v(r,"gat_","wK",0)
v(r,"gat0","He",0)
t(C,"hM9","his",105)
v(C.aAD.prototype,"gbZV","bZW",3)
s(C,"hMk",0,null,["$4$paper$photo$request$template"],["fnP"],106,0)
s(C,"hMj",0,null,["$5$doc$history$instruction$photo$template"],["bxL"],107,0)
v(r=C.aAW.prototype,"gc_C","Ht",0)
v(r,"gbCf","UL",0)
v(r,"gc_F","abf",0)
v(r,"gc_E","XA",0)
v(r,"gaUr","D1",0)
v(C.aB_.prototype,"gc_H","XC",0)
v(r=C.aCh.prototype,"gaUB","O2",0)
v(r,"gcfK","aYN",3)
v(r,"gcoP","ax9",86)
v(r,"gbFU","a7t",0)
v(r,"gc07","zr",0)
v(r=C.aEb.prototype,"gc9U","YT",0)
v(r,"gca1","YW",0)
v(r,"gbvo","a6_",0)
v(r,"gc0b","abp",0)
v(C.aEa.prototype,"gc0c","abq",0)
v(C.ayh.prototype,"gbuo","a5N",0)
v(C.awI.prototype,"gc0d","XN",0)
w(C,"hMx","hKs",12)
w(C,"hMv","hHt",12)
w(C,"hMw","hJs",12)
v(r=C.aBc.prototype,"gcrR","crS",3)
v(r,"gce1","ce2",3)
u(r,"gD7","ac3",7)
v(r,"gbzU","ao9",3)
u(r,"gD8","aVR",7)
v(r,"gc2k","abM",0)
v(r,"gc1b","abL",0)
v(r,"gc4r","ac4",0)
v(r,"gbCc","a74",0)
v(r,"gc5j","Yl",0)
v(r,"gc5k","acl",0)
v(r,"gc5Q","acs",0)
v(r,"gc4E","ac7",0)
v(r,"gbG2","a7x",0)
v(r,"gaNh","aNi",3)
v(r,"gaMu","aMv",3)
v(r,"gaId","aIe",3)
v(r,"gaMt","aoY",3)
u(r,"gbuF","buG",80)
v(r,"gawJ","b0M",3)
v(r,"gc1d","c1e",3)
v(r,"gbQQ","bQR",3)
v(r,"gbED","bEE",3)
v(r=C.aBf.prototype,"gcqP","cqQ",3)
v(r,"gcqu","cqv",3)
t(C,"hMy","hKJ",2)
v(r=C.aBd.prototype,"gc0j","Hy",0)
v(r,"gchE","Pt",0)
v(r,"gc0g","Hx",0)
v(r,"gct6","a0l",0)
v(r,"gc60","acz",0)
v(C.aBb.prototype,"gc0k","aUJ",3)
v(r=C.aBe.prototype,"gbGO","a7H",0)
u(r,"gc0h","c0i",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nq,C.PR,C.bCQ,C.bBA,C.cqf,C.cqd,C.bII,C.b4M,C.cqe,C.bAa,C.caX,C.caV,C.caW,C.caU,C.apV,C.caT,C.bJB,C.nS,C.aBN,C.j9,C.nd,C.a5C,C.yo,C.kY,C.o4,C.lJ,C.yq,C.nh,C.a5K,C.aoj,C.aYv,C.e0J,C.kV,C.Dg,C.el,C.iM,C.D7,C.wE,C.ex,C.ln,C.hR,C.js,C.a5L,C.acG,C.aYw,C.b_9,C.a0I])
u(B.kw,[C.cxW,C.bTJ,C.fbZ,C.czr,C.cyO,C.fht,C.dOL,C.dOK,C.e1m,C.e1l,C.fiS,C.eYz,C.eYA,C.c6T,C.c6U,C.c6V,C.e5K,C.eBx,C.eAV,C.eAU,C.eBY,C.eBv,C.eBo,C.eBH,C.eCn,C.f4c,C.eIe,C.eId,C.eIH,C.e0M,C.fmm,C.dKu,C.fsw,C.fjd,C.c8l,C.c8j,C.c8o,C.fjI,C.fjJ,C.fjK,C.fjL,C.c85,C.c86,C.dxQ,C.c82,C.fjH,C.ePp,C.dIG,C.c7W,C.e0s,C.fhk,C.eem,C.eeL,C.eeI,C.eeH,C.eeS,C.eeR,C.egm,C.egl,C.eeB,C.eeA,C.eba,C.eck,C.efj,C.egE,C.egD,C.ec7,C.edi,C.eaS,C.cUC,C.ehz,C.ehA,C.ehv,C.ehw,C.ehx,C.ehy,C.ehD,C.c8t,C.eh8,C.ehj,C.cb3])
u(B.i1,[C.cxX,C.cxY,C.bJC,C.f9P,C.bTI,C.bTL,C.fp2,C.eQn,C.eQe,C.eQu,C.eXu,C.eXv,C.fc_,C.fbY,C.foA,C.f9v,C.fpo,C.czh,C.czm,C.czo,C.czk,C.czp,C.czi,C.czq,C.czd,C.cza,C.cz9,C.czg,C.cyJ,C.cyH,C.fgw,C.fgx,C.f0I,C.fhu,C.fhA,C.f_M,C.c3d,C.fgu,C.fgv,C.fbm,C.fbn,C.fhz,C.fhv,C.fhx,C.fhy,C.fhw,C.fsO,C.fbq,C.fbr,C.fbu,C.fbv,C.fby,C.fbz,C.fu2,C.eZ_,C.fud,C.e4E,C.e4F,C.e4G,C.e4m,C.e4y,C.e4z,C.e4B,C.c6S,C.c6Q,C.c6R,C.fhb,C.fhd,C.fhc,C.eYB,C.eYC,C.fug,C.e5P,C.e5Q,C.e5H,C.e5I,C.e5L,C.e5M,C.fuw,C.eCo,C.eBO,C.eBy,C.eBL,C.eAQ,C.eAR,C.eAS,C.eAW,C.eAX,C.eCd,C.eCk,C.eCm,C.eBX,C.eBZ,C.eC2,C.eC3,C.eC4,C.eC8,C.eC_,C.eC0,C.eB7,C.eB8,C.eB9,C.eBa,C.eBb,C.eBc,C.eBd,C.eBe,C.eBf,C.eAt,C.eAu,C.eAv,C.eAw,C.eAy,C.eAz,C.eB1,C.eB2,C.eB3,C.eB4,C.eB5,C.eAD,C.eAE,C.eAF,C.eAG,C.eBn,C.eBG,C.fez,C.fey,C.c8c,C.f4b,C.fmi,C.fmb,C.fme,C.fkb,C.fkc,C.fkd,C.feG,C.feF,C.feE,C.feC,C.eYw,C.eYx,C.eYy,C.fuI,C.eIg,C.eIh,C.eIa,C.eI4,C.eIA,C.eIB,C.eID,C.eIE,C.eIz,C.fuH,C.eHW,C.f3r,C.e0L,C.fmk,C.fml,C.fmn,C.fmg,C.fmh,C.ftV,C.dah,C.dan,C.e0K,C.eV5,C.eV7,C.eV6,C.eV4,C.ffK,C.ffM,C.eX3,C.flN,C.flO,C.flP,C.fm_,C.fm4,C.fm5,C.fm6,C.fm7,C.fm8,C.fm9,C.fma,C.flQ,C.flR,C.flS,C.flT,C.flU,C.flV,C.flW,C.flX,C.flY,C.flZ,C.fm0,C.fm1,C.fm2,C.fm3,C.fdA,C.f3e,C.f3d,C.fmt,C.dKv,C.dKt,C.eH5,C.c2Q,C.c2S,C.fsy,C.d_S,C.d_U,C.fsx,C.fsv,C.fuG,C.fj9,C.d_s,C.fbC,C.fbD,C.c8a,C.c8b,C.c89,C.c8_,C.c80,C.c7X,C.c7Y,C.c7Z,C.c8r,C.c8m,C.c8h,C.c8i,C.c8k,C.c8n,C.c8p,C.fjM,C.c84,C.c87,C.c88,C.c8e,C.c8f,C.fmA,C.flH,C.c83,C.c81,C.fjG,C.f5x,C.c7V,C.eEQ,C.f8j,C.eh_,C.edp,C.edq,C.ef_,C.eeO,C.eeP,C.ecN,C.egL,C.egM,C.egN,C.ecb,C.eet,C.eev,C.ee5,C.ee2,C.edl,C.edm,C.eec,C.ecd,C.eeo,C.eep,C.een,C.eer,C.eeq,C.eeJ,C.eeK,C.eeM,C.eeF,C.ecw,C.ect,C.eeT,C.ecl,C.egK,C.eaU,C.eco,C.ecn,C.ebC,C.ebH,C.ebF,C.ebD,C.egS,C.egT,C.egU,C.egR,C.ego,C.egn,C.egh,C.egj,C.eg9,C.egI,C.egG,C.eb1,C.eaY,C.edj,C.ebL,C.ebc,C.ebb,C.eby,C.ebz,C.ecL,C.ebN,C.ebR,C.eeC,C.ega,C.egb,C.egc,C.egd,C.ecf,C.ecg,C.ech,C.edM,C.ecH,C.ecz,C.ecG,C.edW,C.edX,C.efJ,C.efL,C.eg4,C.eg6,C.efM,C.efN,C.ebJ,C.edo,C.edn,C.egy,C.ec6,C.ebZ,C.ec_,C.ec2,C.ec3,C.ee0,C.ed4,C.ed5,C.ed6,C.ed7,C.ed8,C.ed9,C.eda,C.edb,C.edc,C.edd,C.ede,C.eeX,C.cUz,C.cUA,C.ehF,C.fmq,C.fmz,C.fmp,C.fmv,C.eXt,C.fuK,C.fuL,C.fuM,C.eh7,C.ehg,C.eaN,C.eaI,C.eaJ,C.fgM,C.fgL,C.fgN,C.fgS,C.fgO,C.fgP,C.eRR,C.eRS,C.e1j,C.cb2])
u(B.jk,[C.cxZ,C.eQj,C.eQo,C.eQp,C.eQk,C.eQl,C.eQm,C.eQc,C.eQd,C.eQf,C.eQg,C.eQt,C.eQs,C.eQi,C.eQh,C.eQq,C.eQr,C.eQw,C.eQx,C.eQv,C.czj,C.czn,C.czl,C.czb,C.czc,C.cze,C.cz7,C.cz8,C.czf,C.cz6,C.cz5,C.cz4,C.cyy,C.cyx,C.cyA,C.cyI,C.cyB,C.cyz,C.cyD,C.cyE,C.cyF,C.cyC,C.cyG,C.cyK,C.cyL,C.cyM,C.cyN,C.fbk,C.fbl,C.fbi,C.fbj,C.dXm,C.dXk,C.dXl,C.dXn,C.dXo,C.dOJ,C.fbo,C.fbp,C.fbs,C.fbt,C.fbw,C.fbx,C.e1k,C.fjg,C.fjf,C.e4D,C.e4C,C.e4g,C.e4c,C.e4n,C.e4o,C.e4p,C.e4i,C.e4j,C.e4k,C.e4l,C.e4h,C.e4e,C.e4f,C.e4v,C.e4w,C.e4u,C.e4x,C.e4t,C.e4s,C.e4r,C.e4A,C.e4q,C.e4d,C.e5O,C.e5C,C.e5D,C.e5J,C.e5E,C.e5G,C.e5F,C.e5N,C.eBg,C.eBE,C.eB_,C.eB0,C.eAY,C.eAZ,C.eBK,C.eBJ,C.eBI,C.eBN,C.eBM,C.eAP,C.eAT,C.eAO,C.eAN,C.eAK,C.eAM,C.eAL,C.eCl,C.eCe,C.eCc,C.eCf,C.eCb,C.eCg,C.eCa,C.eCh,C.eCi,C.eCj,C.eC9,C.eBW,C.eBR,C.eC1,C.eBV,C.eC5,C.eBU,C.eC6,C.eBT,C.eC7,C.eBS,C.eBB,C.eBA,C.eBC,C.eBz,C.eBD,C.eBt,C.eBs,C.eBu,C.eBr,C.eBq,C.eBp,C.eAx,C.eAs,C.eAH,C.eAC,C.eAI,C.eAB,C.eAJ,C.eAA,C.eBw,C.eBk,C.eBj,C.eBl,C.eBi,C.eBm,C.eBh,C.eBF,C.eBQ,C.eBP,C.eB6,C.fmd,C.fmf,C.fmj,C.feD,C.fh4,C.fh2,C.fh3,C.eIi,C.eIj,C.eIf,C.eI9,C.eI8,C.eIb,C.eIc,C.eHZ,C.eI_,C.eI1,C.eI2,C.eI3,C.eI0,C.eI5,C.eIw,C.eIx,C.eIv,C.eIy,C.eIu,C.eIt,C.eIs,C.eIC,C.eIr,C.eIq,C.eIp,C.eIF,C.eIo,C.eIG,C.eIn,C.eIm,C.eI6,C.eI7,C.eIl,C.eIk,C.eHS,C.eHT,C.eHU,C.eHV,C.eHR,C.eHX,C.eHY,C.dag,C.dai,C.dal,C.dam,C.dak,C.daj,C.ffL,C.fdB,C.c2R,C.c2T,C.d_L,C.d_Q,C.d_R,C.d_P,C.d_O,C.d_T,C.d_N,C.d_M,C.d_V,C.fsu,C.d6g,C.d6h,C.d6i,C.fbA,C.fbB,C.c8s,C.eaO,C.eaP,C.eaQ,C.eaR,C.f5v,C.f5w,C.dII,C.dIH,C.cY6,C.cY5,C.eh1,C.eh0,C.edr,C.eg7,C.egY,C.eeY,C.egO,C.egP,C.egZ,C.ee6,C.ec9,C.eca,C.eeu,C.ee4,C.ee1,C.ee3,C.ee7,C.ee8,C.ee9,C.eea,C.eeb,C.eed,C.ece,C.eeg,C.eeh,C.eei,C.eej,C.eek,C.eel,C.eef,C.ees,C.eeG,C.eeE,C.eeN,C.eee,C.ecu,C.ecv,C.ecx,C.eeQ,C.eeU,C.eb8,C.ecs,C.ecq,C.ef1,C.ecm,C.ef0,C.ecc,C.ecO,C.egJ,C.eg8,C.eb9,C.eb6,C.eaX,C.eaT,C.eaV,C.ecp,C.ebB,C.ebG,C.ebE,C.ebA,C.eeD,C.egV,C.egk,C.egf,C.egg,C.egi,C.edh,C.edg,C.egH,C.eb_,C.eb0,C.eb2,C.eb3,C.eb7,C.eaZ,C.eeZ,C.egQ,C.edk,C.ebK,C.eaW,C.ecM,C.eb4,C.ebd,C.ebe,C.ebf,C.ebq,C.ebt,C.ebu,C.ebv,C.ebw,C.ebx,C.ebg,C.ebh,C.ebi,C.ebj,C.ebk,C.ebl,C.ebm,C.ebn,C.ebo,C.ebp,C.ebr,C.ebs,C.ecK,C.ecJ,C.ecI,C.eb5,C.ebO,C.ebM,C.ebP,C.ebQ,C.ecr,C.eey,C.eez,C.eew,C.eex,C.ege,C.ecj,C.eci,C.edL,C.edK,C.edN,C.edJ,C.edO,C.edI,C.edP,C.edH,C.edQ,C.edG,C.edR,C.edF,C.edS,C.edE,C.edT,C.edD,C.edw,C.edx,C.edy,C.edv,C.edz,C.edu,C.edA,C.edt,C.edB,C.eds,C.edC,C.ecE,C.ecF,C.ecy,C.ecA,C.ecB,C.ecC,C.ecD,C.egW,C.egX,C.edV,C.edU,C.edY,C.efk,C.efl,C.efm,C.efx,C.efI,C.efT,C.eg_,C.eg0,C.eg1,C.eg2,C.eg3,C.efn,C.efo,C.efp,C.efq,C.efr,C.efs,C.eft,C.efu,C.efv,C.efw,C.efy,C.efz,C.efA,C.efB,C.efC,C.efD,C.efE,C.efF,C.efG,C.efa,C.efH,C.efi,C.efh,C.efK,C.efg,C.ef6,C.eg5,C.eff,C.ef5,C.ef3,C.efe,C.ef4,C.ef2,C.efO,C.efd,C.efP,C.efQ,C.efR,C.efS,C.efc,C.efU,C.efV,C.efW,C.efb,C.efX,C.ef9,C.efY,C.ef8,C.efZ,C.ef7,C.ebI,C.egr,C.egq,C.egs,C.egp,C.ecR,C.ecQ,C.ecS,C.ecP,C.egC,C.egx,C.egB,C.egt,C.egu,C.egv,C.egw,C.egz,C.egA,C.egF,C.ec8,C.ebW,C.ebX,C.ebY,C.ebV,C.ec1,C.ec0,C.ebU,C.ebT,C.ec4,C.ebS,C.ec5,C.ee_,C.edZ,C.ed3,C.ed2,C.ed1,C.ed0,C.ed_,C.ecZ,C.ecY,C.ecX,C.ecU,C.ecW,C.ecV,C.ecT,C.edf,C.eeV,C.eeW,C.cUB,C.cUY,C.cUZ,C.cUv,C.cUu,C.cUy,C.cUw,C.cUx,C.ehC,C.ehs,C.ehB,C.eht,C.ehu,C.eho,C.ehp,C.ehq,C.ehr,C.ehE,C.fmw,C.fmx,C.fmy,C.eh4,C.eh5,C.eh6,C.eh9,C.eha,C.ehd,C.ehe,C.ehc,C.ehf,C.ehb,C.eh3,C.eh2,C.ehh,C.ehi,C.ehk,C.ehl,C.eaM,C.eaL,C.eaH,C.eaK,C.ehn,C.ehm,C.fgR,C.fgQ,C.e1h,C.e1i])
t(C.aNT,B.F)
u(B.mb,[C.a1E,C.au9,C.asR,C.wC,C.wF,C.kB,C.rC,C.Ae,C.qQ,C.v7,C.aoT,C.H3,C.aoi,C.tZ,C.m4,C.hm,C.a6l])
u(C.bII,[C.cqg,C.bIJ])
u(C.caX,[C.cb0,C.apU])
t(C.cb_,C.caV)
t(C.caZ,C.caU)
t(C.cb1,C.caZ)
t(C.caY,C.caW)
t(C.caS,C.caT)
t(C.b6i,B.oj)
t(C.ckf,B.asj)
t(C.a68,B.wp)
t(C.aSa,B.dC)
t(C.axB,B.are)
u(B.ae,[C.ZE,C.Wq,C.Wo,C.anx,C.TH,C.TK,C.YH,C.Zc,C.Zb,C.aAP,C.XA,C.LB,C.X8,C.Xt,C.alA,C.aFz,C.SW,C.awt,C.a5s,C.M2,C.avR,C.I3,C.Yk,C.TU,C.TV,C.aBa,C.aon,C.a5t])
u(B.ag,[C.aFS,C.auF,C.auB,C.aAD,C.aAW,C.aB_,C.aCh,C.aEb,C.aEa,C.aIG,C.ayh,C.aI9,C.awI,C.bc6,C.aHW,C.aJX,C.aI8,C.ba1,C.aIE,C.aIS,C.aGR,C.b8O,C.aIT,C.aBd,C.bgr,C.aBb,C.aBe,C.bga])
u(B.ar,[C.auD,C.aaQ,C.aaf,C.bff,C.aaT,C.acw,C.aY7,C.bon,C.aYr,C.bhK,C.bmY,C.aWl,C.aYu,C.aaW,C.abe,C.aYs,C.H2,C.aWo,C.b92,C.NG,C.Ia,C.bdE,C.bdD,C.bqK])
u(B.FD,[C.b8v,C.bpM,C.aGb,C.bb9,C.bnl])
u(B.n4,[C.b8u,C.b53,C.bni,C.b81,C.bbx,C.bdK,C.baD,C.bbu,C.bbb,C.bjV,C.b6a,C.b5N,C.bqH,C.bnL,C.bmU,C.baw,C.aYp,C.blU,C.bmR])
t(C.bg7,C.aIG)
t(C.bfu,C.aI9)
t(C.bfh,C.aHW)
t(C.bqe,C.aJX)
t(C.bfr,C.aI8)
t(C.bg5,C.aIE)
t(C.bsY,C.aIS)
t(C.aBc,C.bsY)
t(C.b8P,C.aGR)
t(C.aBf,C.aIT)
t(C.bqy,B.iG)
t(C.a6k,B.ka)
t(C.cb4,C.b_9)
t(C.afA,C.a0I)
u(B.Vr,[C.aNJ,C.aPd])
t(C.atM,C.aNJ)
w(C.aIG,B.ca)
w(C.aI9,B.ca)
w(C.aHW,B.ca)
w(C.aI8,B.ca)
w(C.aIE,B.ca)
w(C.aJX,B.ca)
w(C.aGR,B.eJ)
w(C.aIS,B.ca)
v(C.bsY,B.ev)
w(C.aIT,B.ca)})()
B.kd(b.typeUniverse,JSON.parse('{"aOs":{"hv":["aOs"]},"nq":{"aOs":[],"hv":["aOs"]},"aNT":{"F":["PR"],"F.E":"PR"},"b6i":{"oj":[]},"a68":{"wp":[],"nM":[]},"aSa":{"dC":[],"cr":[],"r":[]},"axB":{"aP":[],"cY":["aP"],"aN":[],"co":[]},"ZE":{"ae":[],"r":[]},"aFS":{"ag":["ZE"]},"Wq":{"ae":[],"r":[]},"Wo":{"ae":[],"r":[]},"auF":{"ag":["Wq"]},"auB":{"ag":["Wo"]},"auD":{"ar":[],"r":[]},"anx":{"ae":[],"r":[]},"aAD":{"ag":["anx"]},"aaQ":{"ar":[],"r":[]},"aaf":{"ar":[],"r":[]},"aaT":{"ar":[],"r":[]},"acw":{"ar":[],"r":[]},"bff":{"ar":[],"r":[]},"TH":{"ae":[],"r":[]},"aAW":{"ag":["TH"]},"aY7":{"ar":[],"r":[]},"b8v":{"az":[]},"b8u":{"az":[]},"bpM":{"az":[]},"b53":{"az":[]},"bni":{"az":[]},"TK":{"ae":[],"r":[]},"aB_":{"ag":["TK"]},"b81":{"az":[]},"YH":{"ae":[],"r":[]},"aCh":{"ag":["YH"]},"bbx":{"az":[]},"Zc":{"ae":[],"r":[]},"Zb":{"ae":[],"r":[]},"aAP":{"ae":[],"r":[]},"XA":{"ae":[],"r":[]},"aEb":{"ag":["Zc"]},"aEa":{"ag":["Zb"]},"bg7":{"ag":["aAP"]},"bdK":{"az":[]},"ayh":{"ag":["XA"]},"bon":{"ar":[],"r":[]},"aYr":{"ar":[],"r":[]},"bhK":{"ar":[],"r":[]},"LB":{"ae":[],"r":[]},"X8":{"ae":[],"r":[]},"bfu":{"ag":["LB"]},"bmY":{"ar":[],"r":[]},"baD":{"az":[]},"aWl":{"ar":[],"r":[]},"awI":{"ag":["X8"]},"Xt":{"ae":[],"r":[]},"bc6":{"ag":["Xt"]},"bbu":{"az":[]},"bbb":{"az":[]},"bjV":{"az":[]},"b6a":{"az":[]},"b5N":{"az":[]},"bqH":{"az":[]},"bnL":{"az":[]},"bmU":{"az":[]},"baw":{"az":[]},"alA":{"ae":[],"r":[]},"aYu":{"ar":[],"r":[]},"bfh":{"ag":["alA"]},"aaW":{"ar":[],"r":[]},"abe":{"ar":[],"r":[]},"aFz":{"ae":[],"r":[]},"SW":{"ae":[],"r":[]},"H2":{"ar":[],"r":[]},"awt":{"ae":[],"r":[]},"a5s":{"ae":[],"r":[]},"aYs":{"ar":[],"r":[]},"aYp":{"az":[]},"bqe":{"ag":["aFz"]},"aGb":{"az":[]},"bfr":{"ag":["SW"]},"ba1":{"ag":["awt"]},"bg5":{"ag":["a5s"]},"aWo":{"ar":[],"r":[]},"bb9":{"az":[]},"blU":{"az":[]},"bmR":{"az":[]},"avR":{"ae":[],"r":[]},"I3":{"ae":[],"r":[]},"Yk":{"ae":[],"r":[]},"Ia":{"ar":[],"r":[]},"M2":{"ae":[],"r":[]},"aBc":{"ag":["M2"],"ev":[]},"b8P":{"ag":["avR"]},"b92":{"ar":[],"r":[]},"b8O":{"ag":["I3"]},"NG":{"ar":[],"r":[]},"aBf":{"ag":["Yk"]},"bnl":{"az":[]},"bdE":{"ar":[],"r":[]},"bdD":{"ar":[],"r":[]},"TU":{"ae":[],"r":[]},"TV":{"ae":[],"r":[]},"aBa":{"ae":[],"r":[]},"aon":{"ae":[],"r":[]},"aBd":{"ag":["TU"]},"bgr":{"ag":["TV"]},"aBb":{"ag":["aBa"]},"bqy":{"iG":[]},"aBe":{"ag":["aon"]},"bqK":{"ar":[],"r":[]},"a5t":{"ae":[],"r":[]},"bga":{"ag":["a5t"]},"a6k":{"ka":["fl<eE>"],"jZ":["fl<eE>"]},"afA":{"a0I":[]},"aNJ":{"iQ":[],"f5":[]},"atM":{"iQ":[],"f5":[]},"aPd":{"iQ":[],"f5":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aA
return{bu:w("JT"),U:w("uE<pv>"),bz:w("x"),M:w("fe<n>"),bo:w("jn"),g7:w("Kn"),gc:w("au<ik?>"),bq:w("au<~>"),cc:w("a2H"),fS:w("Cz"),an:w("ajb"),bm:w("M<PR>"),X:w("M<afQ>"),f3:w("M<aOs>"),aK:w("M<mI>"),V:w("M<a9>"),O:w("M<x>"),fA:w("M<lf>"),d5:w("M<au<bq<H,+icon3d,picture(n?,n?)>>>"),bH:w("M<au<dz>>"),fG:w("M<au<~>>"),aF:w("M<mP>"),cd:w("M<al<j9>>"),ez:w("M<a0<n,aC>>"),d:w("M<a0<n,@>>"),B:w("M<m0>"),h:w("M<j9>"),gE:w("M<yo>"),k:w("M<nS>"),g:w("M<ln>"),D:w("M<hR>"),u:w("M<ex>"),m:w("M<tZ>"),i:w("M<hm>"),aC:w("M<a5K>"),o:w("M<yq>"),e3:w("M<aC>"),dN:w("M<v>"),v:w("M<hx>"),cR:w("M<iD>"),J:w("M<iZ>"),gx:w("M<oD<n>>"),f2:w("M<+(a_,n)>"),L:w("M<+(n,n)>"),aD:w("M<+data,mimeType(n,n)>"),G:w("M<+(P,P)>"),ek:w("M<+(H,n)>"),n:w("M<+(H,H)>"),r:w("M<cI>"),s:w("M<n>"),aS:w("M<iG>"),p:w("M<r>"),eR:w("M<f5>"),fT:w("M<b4M>"),bx:w("M<aBN>"),gz:w("M<acG>"),x:w("M<P>"),t:w("M<H>"),dS:w("M<az?>"),bA:w("M<v?>"),Z:w("M<H?>"),cA:w("M<cd>"),A:w("cn<ag<ae>>"),gL:w("al<nS>"),R:w("al<hR>"),j:w("al<@>"),bW:w("al<H>"),e:w("bq<H,+icon3d,picture(n?,n?)>"),P:w("a0<n,@>"),f:w("a0<@,@>"),gI:w("a0<H,+icon3d,picture(n?,n?)>"),bR:w("I<hm,r>"),eC:w("I<nh,n>"),cT:w("I<js,B>"),dv:w("I<n,n>"),f0:w("I<n,r>"),gN:w("I<H,p9>"),gh:w("I<m4,jb<m4>>"),w:w("iA"),ei:w("ik"),g2:w("qH"),fB:w("D7"),b6:w("yo"),gX:w("a5C"),dt:w("kY"),ea:w("nS"),bt:w("ln"),I:w("hR"),F:w("ex"),fO:w("m4"),ff:w("tZ"),fP:w("hm"),Q:w("v7"),dO:w("aoj"),a:w("cp"),C:w("aC"),dw:w("apV"),di:w("a6l"),Y:w("eE"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DC"),dB:w("dv<v>"),bJ:w("dv<n>"),_:w("dV<n>"),N:w("n"),fw:w("pv"),bO:w("ao"),K:w("bm<v>"),b:w("bm<P>"),E:w("dz"),W:w("cv<n>"),ac:w("cv<H>"),ex:w("k1<ln>"),cI:w("k1<n>"),cl:w("k1<P>"),b4:w("a5<kV>"),a8:w("a5<lJ>"),fR:w("a5<+(n,n)>"),co:w("e2<v>"),l:w("r"),b2:w("bM<~>"),ev:w("pw<dQ>"),dT:w("bd<~>"),cQ:w("axB"),q:w("mz"),y:w("Q"),gR:w("P"),z:w("@"),S:w("H"),at:w("b7?"),gw:w("al<a0<n,@>>?"),aT:w("al<hR>?"),c:w("al<@>?"),aP:w("ik?"),af:w("hR?"),go:w("aYw?"),a6:w("a5L?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bCi=new B.ac(A.ej,18,A.c,null,null,null)
D.aNw=new B.bE(A.ax,null,null,D.bCi,null)
D.aNF=new B.d3(0,-0.15)
D.aNH=new B.d3(0.62,0)
D.aNK=new B.d3(-0.35,-0.45)
D.aNV=new B.d3(0.9,-0.85)
D.aFT=new B.b3(30,30)
D.aPb=new B.bv(D.aFT,D.aFT,A.fU,A.fU)
D.aPp=new B.ax(A.b0,1,A.r,-1)
D.b66=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPB=new B.ax(D.b66,1,A.r,-1)
D.aPN=new B.ax(A.aA,1.5,A.r,-1)
D.aPS=new B.ax(A.b0,1.6,A.r,-1)
D.aQ7=new B.ax(A.aA,1.4,A.r,-1)
D.aRs=new B.o(null,null,null,null,null,K.EQ,A.a6)
D.bG5=new B.a8(A.a_,A.a7,A.w,G.a_p,null,null)
D.aRA=new B.o(null,null,null,null,null,D.bG5,A.a6)
D.a6Y=new B.o(A.aG,null,null,A.pM,null,null,A.n)
D.b10=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b64=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cC5=w([D.b10,D.b64],x.O)
D.dS0=new B.bS(A.B,0.5,A.w,null,0,D.cC5,null,null)
D.aRS=new B.o(null,null,null,null,null,D.dS0,A.a6)
D.TK=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQl=new B.c2(N.vD,A.W,A.W,A.W)
D.aRU=new B.o(D.TK,null,D.aQl,null,null,null,A.n)
D.bHI=new B.a8(A.a_,A.a7,A.w,A.NA,null,null)
D.aS_=new B.o(null,null,null,null,null,D.bHI,A.a6)
D.a8g=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aS1=new B.o(D.a8g,null,null,A.r0,null,null,A.n)
D.aS5=new B.o(A.ko,null,null,null,null,null,A.a6)
D.aQr=new B.c2(A.yJ,A.W,A.W,A.W)
D.aS8=new B.o(X.a9a,null,D.aQr,A.mh,null,null,A.n)
D.Ck=new B.o(A.e9,null,null,null,null,null,A.a6)
D.aSe=new B.o(null,null,null,null,null,E.uJ,A.a6)
D.cGv=w([E.a9Q,A.bV],x.O)
D.bHl=new B.a8(A.b4,A.bb,A.w,D.cGv,null,null)
D.aSi=new B.o(null,null,null,A.mh,null,D.bHl,A.n)
D.cQf=w([A.bh,A.e9,A.j8],x.O)
D.YB=new B.a8(A.ax,A.aE,A.w,D.cQf,null,null)
D.aSu=new B.o(null,null,null,null,null,D.YB,A.n)
D.aSv=new B.o(D.a8g,null,null,A.kh,null,null,A.n)
D.c7C=w([A.dH,A.bh],x.O)
D.bHe=new B.a8(A.ax,A.aE,A.w,D.c7C,null,null)
D.aSz=new B.o(null,null,null,null,null,D.bHe,A.n)
D.aSJ=new B.o(null,null,null,null,null,G.t4,A.a6)
D.aT0=new B.o(A.a9R,null,null,null,null,null,A.a6)
D.b1E=new B.x(0.5647058823529412,0,0,0,A.t)
D.a76=new B.a9(0,A.G,D.b1E,A.Pk,28)
D.aUY=new B.aSn()
D.aVw=new C.ckf()
D.aVI=new C.b6i()
D.a7C=new B.cw(A.B,null,null,A.Yq,null)
D.aY4=new B.f9(null,null,null,null,null,E.mr,null,null,null,null)
D.aWe=new B.cw(A.B,null,null,D.aY4,null)
D.bsa=new B.ac(A.dO,28,A.c,null,null,null)
D.aWE=new B.cw(A.B,null,null,D.bsa,null)
D.aY1=new B.f9(2,null,null,null,null,A.bR,null,null,null,null)
D.aWY=new B.cw(A.B,null,null,D.aY1,null)
D.bsv=new B.ac(K.Lf,40,A.bS,null,null,null)
D.aWZ=new B.cw(A.B,null,null,D.bsv,null)
D.aYP=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aZ0=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZm=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZq=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.aZS=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_7=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_8=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Iy=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_u=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_z=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8u=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0d=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b0R=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8G=new B.x(1,1,1,0.9725490196078431,A.t)
D.b16=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1f=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b1h=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b1q=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1J=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b2V=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Tv=new B.x(0.8509803921568627,0,0,0,A.t)
D.b32=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b38=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9p=new B.x(0.6,0,0,0,A.t)
D.a9r=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b4o=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rj=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b4K=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b56=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b5p=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aa0=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TQ=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ze=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.IY=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iS=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aao=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.TV=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b85=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b8s=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b8G=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.U9=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.b9C=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.w5=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.b9V=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bab=new B.hu(A.be,!0,null,null)
D.ez_=new B.E(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWU=new B.w("Bio link",null,D.ez_,null,null,null,null,null,null,null,null,null)
D.aWT=new B.cw(A.B,null,null,D.eWU,null)
D.bar=new B.hu(A.T3,!0,D.aWT,null)
D.Jf=new C.a1E(0,"none")
D.abl=new C.a1E(1,"deflate")
D.abm=new C.a1E(2,"bzip2")
D.bb8=new B.k4(0.165,0.84,0.44,1)
D.cGO=w([A.cl,A.dN,A.aA],x.O)
D.bGw=new B.a8(A.ax,A.aE,A.w,D.cGO,null,null)
D.aRx=new B.o(null,null,null,null,null,D.bGw,A.n)
D.bB9=new B.ac(A.eF,null,A.al,null,null,null)
D.aXs=new B.cw(A.B,null,null,D.bB9,null)
D.bbG=new B.ky(D.aRx,A.b7,D.aXs,null)
D.b8i=new B.x(0.058823529411764705,1,1,1,A.t)
D.cJK=w([A.bG,A.pY,A.pY,D.b8i],x.O)
D.cox=w([0,0.32,0.7,1],x.x)
D.bH3=new B.a8(A.ax,A.aE,A.w,D.cJK,D.cox,null)
D.aRl=new B.o(null,null,null,null,null,D.bH3,A.n)
D.bbM=new B.ky(D.aRl,A.b7,null,null)
D.bc1=new B.lU(1,1,null,null,null,A.bj,null)
D.bc4=new B.lU(1,null,null,null,null,D.TV,null)
D.bcy=new B.b7(125e4)
D.bcE=new B.b7(17e4)
D.bcO=new B.b7(35964e8)
D.bcU=new B.b7(55e4)
D.bcY=new B.b7(68e4)
D.bdo=new B.i2(0,0,0,5)
D.bdG=new B.L(0,16,16,0)
D.bdJ=new B.L(0,18,0,8)
D.bdP=new B.L(0,36,0,36)
D.bdW=new B.L(0,54,0,0)
D.be2=new B.L(10,0,10,3)
D.bec=new B.i2(10,16,10,10)
D.bel=new B.L(10,6,10,0)
D.ben=new B.L(10,6,4,6)
D.beq=new B.L(10,8,10,6)
D.acf=new B.L(11,8,11,11)
D.bev=new B.L(12,0,12,10)
D.bew=new B.L(12,0,12,24)
D.beI=new B.L(12,12,12,4)
D.beL=new B.L(12,12,8,12)
D.beZ=new B.L(12,8,8,12)
D.bfl=new B.L(14,14,14,0)
D.bfq=new B.L(14,14,14,90)
D.bfI=new B.L(16,10,16,16)
D.bfJ=new B.L(16,10,16,20)
D.ad2=new B.L(16,6,16,28)
D.bgi=new B.L(18,0,18,10)
D.bgk=new B.L(18,0,18,30)
D.bgm=new B.L(18,10,18,12)
D.bgn=new B.L(18,10,18,14)
D.bgE=new B.L(18,16,14,18)
D.bgJ=new B.L(18,18,18,12)
D.bgP=new B.L(18,26,18,12)
D.bgU=new B.L(18,34,18,34)
D.bgV=new B.L(18,4,18,14)
D.bh0=new B.L(18,8,18,24)
D.bhi=new B.L(20,16,14,4)
D.bhn=new B.L(20,18,12,4)
D.bhs=new B.L(20,20,12,20)
D.bhv=new B.L(20,22,20,20)
D.bhA=new B.L(20,6,20,6)
D.bhK=new B.L(22,18,22,18)
D.bhQ=new B.L(22,24,22,0)
D.bhU=new B.L(22,24,22,4)
D.bi1=new B.L(22,60,22,22)
D.bi7=new B.L(24,24,24,22)
D.bih=new B.L(26,10,60,10)
D.bin=new B.L(28,44,28,44)
D.biE=new B.L(32,44,32,44)
D.biM=new B.L(38,30,38,20)
D.biR=new B.L(4,0,0,6)
D.bj2=new B.i2(4,4,4,4)
D.bjq=new B.i2(6,5,6,5)
D.bju=new B.L(6,6,8,6)
D.bjF=new B.L(8,14,8,14)
D.bjG=new B.L(8,22,8,22)
D.bjO=new B.L(8,6,12,6)
D.bjW=new B.L(8,8,8,4)
D.adT=new B.L(9,9,9,6)
D.bk5=new B.i2(2.5,2.5,2.5,2.5)
D.bk6=new B.L(10.5,0,10.5,0)
D.bk7=new B.L(7,1.5,7,1.5)
D.czp=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bkm=new B.zX(null,null,D.czp,A.yW)
D.cwJ=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bkn=new B.zX(null,null,D.cwJ,A.yW)
D.aKd=new B.E(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWi=new B.w("WORD DESIGN",null,D.aKd,null,null,null,null,null,null,null,null,null)
D.bkO=new B.bF(1,A.bn,D.eWi,null)
D.eVY=new B.w("Slides database",null,A6.H_,null,null,null,null,null,null,null,null,null)
D.eTp=new B.w("Admin only \xb7 keep as many as you like",null,U.aJL,null,null,null,null,null,null,null,null,null)
D.cXf=w([D.eVY,A.bw,D.eTp],x.p)
D.baR=new B.fd(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.cXf,null)
D.bkR=new B.bF(1,A.bn,D.baR,null)
D.eOo=new B.w("NGMY logo",null,A.fL,null,null,null,null,null,null,null,null,null)
D.bkU=new B.bF(1,A.bn,D.eOo,null)
D.ewU=new B.E(!0,A.al,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY1=new B.w("TALK TO THE EDITOR",null,D.ewU,null,null,null,null,null,null,null,null,null)
D.bl9=new B.bF(1,A.bn,D.eY1,null)
D.eIG=new B.w("Tell the AI what to change",null,A6.H_,null,null,null,null,null,null,null,null,null)
D.blr=new B.bF(1,A.bn,D.eIG,null)
D.blY=new B.Cr(!0,"video/mp4")
D.eve=new B.E(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGY=new B.w("Move presentations between devices",null,D.eve,null,null,null,!1,null,null,1,null,null)
D.bm1=new B.pM(A.e8,A.a_,A.h,D.eGY,null)
D.eI_=new B.w("Edit in Slides",null,A.jN,null,null,null,null,null,null,null,null,null)
D.bm2=new B.pM(A.e8,A.B,A.h,D.eI_,null)
D.bmh=new B.dk(1,A.cj,D.bm2,null)
D.WQ=new B.a_(60988,"MaterialIcons",!1)
D.bnF=new B.a_(61352,"MaterialIcons",!1)
D.afm=new B.a_(61531,"MaterialIcons",!1)
D.boS=new B.a_(63062,"MaterialIcons",!1)
D.boZ=new B.a_(63109,"MaterialIcons",!1)
D.bpa=new B.a_(63206,"MaterialIcons",!1)
D.ag3=new B.a_(63238,"MaterialIcons",!1)
D.Xo=new B.a_(63365,"MaterialIcons",!1)
D.Xp=new B.a_(63367,"MaterialIcons",!1)
D.Xq=new B.a_(63368,"MaterialIcons",!1)
D.agd=new B.a_(63384,"MaterialIcons",!1)
D.bpN=new B.a_(63525,"MaterialIcons",!1)
D.bpQ=new B.a_(63568,"MaterialIcons",!1)
D.bq9=new B.a_(983072,"MaterialIcons",!1)
D.bqx=new B.a_(983271,"MaterialIcons",!0)
D.bro=new B.a_(983924,"MaterialIcons",!1)
D.ahl=new B.a_(983965,"MaterialIcons",!1)
D.ahm=new B.a_(983966,"MaterialIcons",!1)
D.bry=new B.a_(984592,"MaterialIcons",!1)
D.brO=new B.ac(A.rR,16,A.aB,null,null,null)
D.brV=new B.ac(A.m_,null,A.c,null,null,null)
D.ahw=new B.ac(A.p7,18,A.c,null,null,null)
D.bsb=new B.ac(A.A_,18,O.kR,null,null,null)
D.bsR=new B.ac(A.iZ,11,null,null,null,null)
D.bt0=new B.ac(A.X7,null,A.eY,null,null,null)
D.btA=new B.ac(A.qh,18,A.aB,null,null,null)
D.btF=new B.ac(A_.Ab,14,null,null,null,null)
D.btG=new B.ac(A.e4,28,A.cN,null,null,null)
D.btT=new B.ac(A.p8,20,A.c,null,null,null)
D.bu_=new B.ac(A.x1,null,null,null,null,null)
D.bu5=new B.ac(A.jg,18,A.hT,null,null,null)
D.bua=new B.ac(A.kX,null,null,null,null,null)
D.buD=new B.ac(A.XH,28,A.c,null,null,null)
D.boV=new B.a_(63065,"MaterialIcons",!1)
D.buM=new B.ac(D.boV,15,A.c,null,null,null)
D.bp0=new B.a_(63113,"MaterialIcons",!1)
D.buS=new B.ac(D.bp0,null,A.al,null,null,null)
D.bve=new B.ac(A.up,22,A.bK,null,null,null)
D.bvy=new B.ac(A.wL,18,null,null,null,null)
D.bvD=new B.ac(A.Eo,12,A.c,null,null,null)
D.brb=new B.a_(983687,"MaterialIcons",!1)
D.bvO=new B.ac(D.brb,null,A.bh,null,null,null)
D.bvV=new B.ac(A.hh,null,A.bh,null,null,null)
D.bwd=new B.ac(A.pc,22,A.c,null,null,null)
D.bwh=new B.ac(A.cu,13,A.c,null,null,null)
D.bwn=new B.ac(A.e4,26,A.aH,null,null,null)
D.bwq=new B.ac(A.qk,26,A.c,null,null,null)
D.Ls=new B.ac(A.iZ,8,A.c,null,null,null)
D.bwI=new B.ac(A.p7,40,A.c,null,null,null)
D.bwJ=new B.ac(A.bmD,null,null,null,null,null)
D.bwN=new B.ac(A.rZ,20,null,null,null,null)
D.bra=new B.a_(983683,"MaterialIcons",!1)
D.bwX=new B.ac(D.bra,null,A.aW,null,null,null)
D.bwY=new B.ac(A.iZ,16,A.bh,null,null,null)
D.bxi=new B.ac(A.uC,null,null,null,null,null)
D.ai3=new B.ac(A.ur,22,A.c,null,null,null)
D.bxm=new B.ac(A.dO,17,A.c,null,null,null)
D.ai4=new B.ac(A.iZ,9,A.c,null,null,null)
D.bxr=new B.ac(A.um,null,null,null,null,null)
D.bmU=new B.a_(57744,"MaterialIcons",!1)
D.bxy=new B.ac(D.bmU,null,null,null,null,null)
D.bxB=new B.ac(A.um,16,null,null,null,null)
D.brF=new B.a_(985181,"MaterialIcons",!1)
D.EI=new B.ac(D.brF,null,null,null,null,null)
D.bxN=new B.ac(A.kX,16,A.bK,null,null,null)
D.br1=new B.a_(983615,"MaterialIcons",!1)
D.bxP=new B.ac(D.br1,12,A.c,null,null,null)
D.aia=new B.ac(A.wH,16,null,null,null,null)
D.bxW=new B.ac(A.dO,21,A.c,null,null,null)
D.by0=new B.ac(A.hh,17,A.c,null,null,null)
D.by1=new B.ac(A.up,null,null,null,null,null)
D.byf=new B.ac(A.Y4,20,A.aB,null,null,null)
D.byu=new B.ac(A.p6,22,E.mr,null,null,null)
D.byC=new B.ac(A.p5,13,A.al,null,null,null)
D.byE=new B.ac(A.ah8,20,A.aB,null,null,null)
D.bmB=new B.a_(57495,"MaterialIcons",!1)
D.byJ=new B.ac(D.bmB,null,null,null,null,null)
D.byN=new B.ac(A.np,18,A.c,null,null,null)
D.bz6=new B.ac(A.t2,28,A.c,null,null,null)
D.bze=new B.ac(D.ag3,null,A.aA,null,null,null)
D.bzf=new B.ac(A.p8,22,A.c,null,null,null)
D.aik=new B.ac(A.WM,16,null,null,null,null)
D.bzZ=new B.ac(A.up,32,A.c,null,null,null)
D.bAH=new B.ac(A.iG,22,A.c,null,null,null)
D.bAL=new B.ac(A.qk,22,A.al,null,null,null)
D.aiz=new B.ac(A.rR,null,A.c3,null,null,null)
D.bBF=new B.ac(A.uq,18,null,null,null,null)
D.bCc=new B.ac(A.dO,18,A.cV,null,null,null)
D.Yt=new B.ac(A.cu,18,A.aB,null,null,null)
D.bCj=new B.ac(A.ah0,null,null,null,null,null)
D.bCJ=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aK2,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.enW=new B.E(!0,A.bP,null,null,null,null,null,A.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD0=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.enW,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.bDp=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.cCX=w([A.e9,A.aA],x.O)
D.bEw=new B.a8(A.a_,A.a7,A.w,D.cCX,null,null)
D.bEG=new B.a8(A.b4,A.bb,A.Ri,A.apt,null,null)
D.aZc=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b1L=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b4p=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b04=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.coA=w([D.aZc,D.b1L,D.b4p,D.b04],x.O)
D.bEY=new B.a8(A.ax,A.aE,A.w,D.coA,A.Ff,null)
D.cXm=w([A.dh,A.bz,A.b0],x.O)
D.bF_=new B.a8(A.b4,A.bb,A.Ri,D.cXm,null,null)
D.cYt=w([A.bh,A.c9],x.O)
D.bF3=new B.a8(A.a_,A.a7,A.w,D.cYt,null,null)
D.cU7=w([A.hR,A.dC,A.b_],x.O)
D.bF5=new B.a8(A.ax,A.aE,A.w,D.cU7,null,null)
D.cIl=w([A.cW,A.eT],x.O)
D.bF8=new B.a8(A.a_,A.a7,A.w,D.cIl,null,null)
D.cXh=w([O.kR,A.dC],x.O)
D.ajj=new B.a8(A.a_,A.a7,A.w,D.cXh,null,null)
D.b2g=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cXe=w([D.b2g,D.w5,A.bR],x.O)
D.bFd=new B.a8(A.a_,A.a7,A.w,D.cXe,null,null)
D.cEs=w([A.bt,A.dk,A.fo],x.O)
D.bFe=new B.a8(A.ax,A.aE,A.w,D.cEs,null,null)
D.LH=new B.a8(A.a_,A.a7,A.w,A.Fr,null,null)
D.b8Z=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.chL=w([D.b8Z,A.bR,A.iU],x.O)
D.ajo=new B.a8(A.ax,A.aE,A.w,D.chL,null,null)
D.cN9=w([A.vX,A.at,D.ze],x.O)
D.bG6=new B.a8(A.a_,A.a7,A.w,D.cN9,null,null)
D.b9W=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b0Q=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b5f=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cDF=w([D.b9W,D.b0Q,D.b5f],x.O)
D.ajp=new B.a8(A.a_,A.a7,A.w,D.cDF,null,null)
D.b2h=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bHY=w([Ao.ab6,D.b2h],x.O)
D.bGf=new B.a8(A.b4,A.bb,A.w,D.bHY,null,null)
D.cBT=w([A.mq,A.bS],x.O)
D.bGi=new B.a8(A.b4,A.bb,A.w,D.cBT,null,null)
D.cRC=w([A.aA,A.dN],x.O)
D.bGo=new B.a8(A.a_,A.a7,A.w,D.cRC,null,null)
D.aaa=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.ar9=w([D.aaa,D.iS,D.Iy],x.O)
D.bGP=new B.a8(A.ax,A.aE,A.w,D.ar9,null,null)
D.chD=w([A.dq,A.dQ],x.O)
D.bH_=new B.a8(A.b4,A.bb,A.w,D.chD,null,null)
D.cP1=w([A.ra,A.z8],x.O)
D.bHJ=new B.a8(A.a_,A.a7,A.w,D.cP1,null,null)
D.ePP=new B.w("Which Bio link?",null,A.cq,null,null,null,null,null,null,null,null,null)
D.bHU=new B.pf(null,D.ePP,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xq=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1a=new C.kB(2,"elegantNavy")
D.faV=w([A.TO,D.iS,A.bR],x.O)
D.jk=new C.wC(0,"classic")
D.a0Y=new C.j9("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1a,4294967035,4279378237,4290283019,D.jk)
D.azX=new C.kB(3,"elegantGold")
D.aYO=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZC=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a90=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fan=w([D.aYO,D.aZC,D.a90],x.O)
D.a0W=new C.j9("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.azX,4294966515,4281016592,4289102906,D.jk)
D.dif=new C.kB(22,"goldRibbon")
D.faj=w([A.TO,D.iS,A.hE],x.O)
D.a0P=new C.j9("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dif,4294967035,4279378237,4291404327,D.jk)
D.dig=new C.kB(23,"goldBaroque")
D.a9w=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fap=w([D.a9w,A.at,A.iU],x.O)
D.a0Q=new C.j9("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dig,4294964964,4283053072,4292128567,D.jk)
D.dii=new C.kB(4,"elegantEmerald")
D.b_F=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0r=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fav=w([D.b_F,D.b0r,A.hE],x.O)
D.a0R=new C.j9("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dii,4294376440,4279122734,4291404327,D.jk)
D.dij=new C.kB(5,"elegantBurgundy")
D.b3x=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.faC=w([D.b3x,A.a8o,A.hE],x.O)
D.a0U=new C.j9("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dij,4294965238,4283043359,4291404327,D.jk)
D.dic=new C.kB(19,"goldFiligree")
D.J3=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.faq=w([D.J3,A.at,A.iU],x.O)
D.a0S=new C.j9("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dic,4294966259,4279378237,4292128567,D.jk)
D.did=new C.kB(20,"goldLaurel")
D.b8Q=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.faD=w([A.Is,A.hE,D.b8Q],x.O)
D.a0T=new C.j9("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.did,4294966776,4282000405,4291404327,D.jk)
D.die=new C.kB(21,"goldCrest")
D.a8i=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b8W=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fas=w([D.a8i,A.at,D.b8W],x.O)
D.a0X=new C.j9("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.die,4294965484,4283053072,4292128567,D.jk)
D.dih=new C.kB(24,"goldStar")
D.b9S=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.faw=w([D.b9S,A.at,D.iS],x.O)
D.a0V=new C.j9("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dih,4294966518,4279378237,4292128567,D.jk)
D.ES=w([D.a0Y,D.a0W,D.a0P,D.a0Q,D.a0R,D.a0U,D.a0S,D.a0T,D.a0X,D.a0V],x.h)
D.pm=new C.m4(0,"blank")
D.P9=new C.m4(1,"title")
D.m7=new C.m4(2,"titleContent")
D.dCS=new C.m4(3,"twoColumn")
D.B5=new C.m4(4,"section")
D.dCT=new C.m4(5,"comparison")
D.G0=new C.m4(6,"flashcard")
D.G1=new C.m4(7,"quiz")
D.G2=new C.m4(8,"worksheet")
D.ajJ=w([D.pm,D.P9,D.m7,D.dCS,D.B5,D.dCT,D.G0,D.G1,D.G2],B.aA("M<m4>"))
D.bI9=w([0,0,0],x.cA)
D.as1=w([E.a8N,A.dQ],x.O)
D.k1=w([A.bR,A.bK,A.hD,A.ho,D.ze],x.O)
D.de8=new C.iM("fireworks","Royal Fireworks","Thank you for celebrating with us",D.as1,D.k1)
D.b96=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b3v=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cC6=w([D.b96,D.b3v],x.O)
D.de_=new C.iM("confetti","Golden Confetti","Together we rise",D.cC6,D.k1)
D.czv=w([A.n4,A.T6],x.O)
D.de0=new C.iM("crown","Crown of Glory","Built for our community",D.czv,D.k1)
D.b0G=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b3a=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cFG=w([D.b0G,D.b3a],x.O)
D.t5=w([A.bP,A.aO,A.c,A.aJ,A.aj],x.O)
D.ddV=new C.iM("aurora","Aurora Gala","A brighter future, together",D.cFG,D.t5)
D.aZg=new B.x(1,0.16470588235294117,0.10196078431372549,0.0196078431372549,A.t)
D.b4r=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cP7=w([D.aZg,D.b4r],x.O)
D.deb=new C.iM("champagne","Champagne Toast","Cheers to every member",D.cP7,D.k1)
D.dec=new C.iM("diamonds","Diamond Rain","Every member is a jewel",V.asu,D.t5)
D.aZu=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b2I=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cTs=w([D.aZu,D.b2I],x.O)
D.ddQ=new C.iM("starburst","Golden Starburst","Thank you!",D.cTs,D.k1)
D.bI2=w([A.fp,A.u0],x.O)
D.a89=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Ne=w([A.nT,A.i6,A.u4,A.oG,D.a89],x.O)
D.dej=new C.iM("balloons","Luxury Balloons","Let's celebrate",D.bI2,D.Ne)
D.cyQ=w([A.Td,A.x],x.O)
D.de7=new C.iM("galaxy","Galaxy Spiral","The sky is not the limit",D.cyQ,D.t5)
D.b7z=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cM_=w([A.kS,D.b7z],x.O)
D.de2=new C.iM("redcarpet","Red Carpet","Tonight we shine",D.cM_,D.k1)
D.b5L=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b4g=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cPY=w([D.b5L,D.b4g],x.O)
D.ddS=new C.iM("coins","Gold Coin Rain","Every contribution counts",D.cPY,D.k1)
D.cVT=w([A.dq,A.i5],x.O)
D.ddY=new C.iM("lanterns","Sky Lanterns","Lighting the way together",D.cVT,D.k1)
D.b1u=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cx0=w([A.w1,D.b1u],x.O)
D.ddU=new C.iM("hearts","Floating Hearts","Made with love",D.cx0,D.Ne)
D.b_0=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b_L=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cXc=w([D.b_0,D.b_L],x.O)
D.dei=new C.iM("petals","Rose Petals","Thank you, from our hearts",D.cXc,D.Ne)
D.b8g=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cTM=w([A.kn,D.b8g],x.O)
D.ddP=new C.iM("butterflies","Golden Butterflies","New beginnings",D.cTM,D.k1)
D.b5d=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cxS=w([D.b5d,A.x],x.O)
D.dea=new C.iM("neon","Neon Night","Let's go!",D.cxS,D.t5)
D.b2s=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cRL=w([A.IN,D.b2s],x.O)
D.ded=new C.iM("disco","Disco Ball","Party time",D.cRL,D.t5)
D.b5D=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cRl=w([A.hR,D.b5D],x.O)
D.ddT=new C.iM("sunrise","Golden Sunrise","A new day for our community",D.cRl,D.k1)
D.cQY=w([A.ri,A.dQ],x.O)
D.dee=new C.iM("pearls","Ocean Pearls","Deep roots, bright future",D.cQY,D.t5)
D.b0M=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cRa=w([D.b0M,A.dQ],x.O)
D.deh=new C.iM("snow","Winter Gala","Warm wishes to all",D.cRa,D.t5)
D.aYX=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.aZN=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cWf=w([D.aYX,D.aZN],x.O)
D.de6=new C.iM("laurel","Laurel Victory","We did it together",D.cWf,D.k1)
D.aYN=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b36=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cwb=w([D.aYN,D.b36],x.O)
D.deg=new C.iM("ribbons","Silk Ribbons","Elegance in every step",D.cwb,D.k1)
D.b42=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.chA=w([G.zd,D.b42],x.O)
D.de3=new C.iM("kente","Kente Pride","Proud of our roots",D.chA,D.k1)
D.b6e=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b8x=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cH7=w([D.b6e,D.b8x],x.O)
D.ddZ=new C.iM("trophy","Trophy Shine","Winners together",D.cH7,D.k1)
D.cRi=w([A.CG,A.x],x.O)
D.ddR=new C.iM("shooting","Shooting Stars","Make a wish",D.cRi,D.t5)
D.aZ3=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aaX=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cWu=w([D.aZ3,D.aaX],x.O)
D.de4=new C.iM("bokeh","Golden Bokeh","Shine bright",D.cWu,D.k1)
D.aZn=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cMM=w([D.aZn,A.x],x.O)
D.ddX=new C.iM("orbits","Golden Orbits","Always moving forward",D.cMM,D.k1)
D.b8h=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cJE=w([A.a8Z,D.b8h],x.O)
D.de1=new C.iM("flowers","Blooming Garden","Growing together",D.cJE,D.Ne)
D.aZa=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZH=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cVq=w([D.aZa,D.aZH],x.O)
D.ddW=new C.iM("music","Music Party","Celebrate with us",D.cVq,D.t5)
D.b_v=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b8S=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cxb=w([D.b_v,D.b8S],x.O)
D.def=new C.iM("mandala","Royal Mandala","Harmony and unity",D.cxb,D.k1)
D.cJI=w([G.zd,D.aaX],x.O)
D.de9=new C.iM("sparklers","Golden Sparklers","Light up the night",D.cJI,D.k1)
D.de5=new C.iM("city","City Lights","The whole city celebrates",D.as1,D.k1)
D.F0=w([D.de8,D.de_,D.de0,D.ddV,D.deb,D.dec,D.ddQ,D.dej,D.de7,D.de2,D.ddS,D.ddY,D.ddU,D.dei,D.ddP,D.dea,D.ded,D.ddT,D.dee,D.deh,D.de6,D.deg,D.de3,D.ddZ,D.ddR,D.de4,D.ddX,D.de1,D.ddW,D.def,D.de9,D.de5],B.aA("M<iM>"))
D.dVp=new B.S("","No ring")
D.e2c=new B.S("platinum","Platinum")
D.e0B=new B.S("glow","Glow")
D.dX6=new B.S("double","Double line")
D.dWv=new B.S("framed","Gallery frame")
D.dVf=new B.S("rosegold","Rose gold")
D.e1_=new B.S("jewels","Jeweled")
D.e_6=new B.S("aurora","Aurora")
D.As=w([D.dVp,A.a2s,D.e2c,D.e0B,H.aG6,D.dX6,A.a2u,D.dWv,D.dVf,D.e1_,D.e_6],x.L)
D.c1j=w([D.a0S,D.a0T,D.a0X,D.a0P,D.a0Q,D.a0V],x.h)
D.by8=new B.ac(G.aeW,16,null,null,null,null)
D.aUj=new B.uE(A.bf,D.by8,null,x.U)
D.bn2=new B.a_(58027,"MaterialIcons",!1)
D.brU=new B.ac(D.bn2,16,null,null,null,null)
D.aUh=new B.uE(A.L,D.brU,null,x.U)
D.bn3=new B.a_(58030,"MaterialIcons",!1)
D.bvU=new B.ac(D.bn3,16,null,null,null,null)
D.aUk=new B.uE(A.dK,D.bvU,null,x.U)
D.c7o=w([D.aUj,D.aUh,D.aUk],B.aA("M<uE<pv>>"))
D.cf_=w([A.zj,A.hm],x.O)
D.cf0=w([A.bt,A.bq,A.fo],x.O)
D.N3=w([A.bK,A.ho,A.hD,A.at,A.oG],x.O)
D.chG=w([A.bR,D.iS,D.Iy],x.O)
D.cic=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dTM=new B.S(4278913286,4280030216)
D.dU3=new B.S(4279373061,4278518787)
D.dUa=new B.S(4279898630,4278847235)
D.cGz=w([D.dTM,D.dU3,D.dUa],x.n)
D.cCK=w(["\u265b","\u269c","\u2726"],x.s)
D.dia=new C.wE("Royal Onyx & Gold",D.cGz,4292128567,4294370209,4294965479,3874020544,D.cCK)
D.dTz=new B.S(4278326799,4278598442)
D.dTB=new B.S(4278395929,4278258953)
D.dTI=new B.S(4278599728,4278327826)
D.cVK=w([D.dTz,D.dTB,D.dTI],x.n)
D.cxL=w(["\u269c","\u2756","\u2727"],x.s)
D.di7=new C.wE("Imperial Emerald",D.cVK,4293050997,4294699968,4294180856,3872254170,D.cxL)
D.dTC=new B.S(4278455076,4278918747)
D.dTH=new B.S(4278587439,4278322714)
D.dTV=new B.S(4279051376,4278455076)
D.cU3=w([D.dTC,D.dTH,D.dTV],x.n)
D.cNo=w(["\u2654","\u2726","\u2748"],x.s)
D.di1=new C.wE("Sapphire Crown",D.cU3,4291417834,4294967295,4294310143,3871986666,D.cNo)
D.dU8=new B.S(4279894534,4283041554)
D.dUk=new B.S(4281008906,4279042307)
D.dUs=new B.S(4284221976,4279894534)
D.cYV=w([D.dU8,D.dUk,D.dUs],x.n)
D.cyX=w(["\u265b","\u2766","\u2726"],x.s)
D.di3=new C.wE("Ruby Throne",D.cYV,4293378685,4294963145,4294964466,3874213833,D.cyX)
D.dU2=new B.S(4279371039,4281995100)
D.dUc=new B.S(4280092723,4278714896)
D.dUp=new B.S(4283045242,4279371039)
D.cW6=w([D.dU2,D.dUc,D.dUp],x.n)
D.cUo=w(["\u2655","\u2756","\u2727"],x.s)
D.di8=new C.wE("Amethyst Palace",D.cW6,4293314984,4294963421,4294702591,3873229802,D.cUo)
D.dTE=new B.S(4278519045,4280032287)
D.dTW=new B.S(4279111184,4278321666)
D.dUh=new B.S(4280492839,4278716426)
D.cT3=w([D.dTE,D.dTW,D.dUh],x.n)
D.cLN=w(["\u2726","\u25c6","\u2742"],x.s)
D.di5=new C.wE("Obsidian & Platinum",D.cT3,4293256418,4294967295,4294638330,3872378836,D.cLN)
D.dU9=new B.S(4279896588,4282194463)
D.dUi=new B.S(4280553487,4279043334)
D.dUq=new B.S(4283048488,4279896588)
D.cLi=w([D.dU9,D.dUi,D.dUq],x.n)
D.cXx=w(["\u2766","\u273f","\u2727"],x.s)
D.di2=new C.wE("Rose Gold Velvet",D.cLi,4293440672,4294960345,4294964979,3874214602,D.cXx)
D.dTF=new B.S(4278520340,4279180595)
D.dTK=new B.S(4278718495,4278322443)
D.dU6=new B.S(4279510591,4278520340)
D.coi=w([D.dTF,D.dTK,D.dU6],x.n)
D.cMr=w(["\u269c","\u2736","\u2756"],x.s)
D.di6=new C.wE("Midnight Brass",D.coi,4291405148,4293975208,4294439914,3872837564,D.cMr)
D.dUF=new B.S(4294703086,4293780428)
D.dUB=new B.S(4294307549,4293187253)
D.dUG=new B.S(4294966517,4293977807)
D.cAX=w([D.dUF,D.dUB,D.dUG],x.n)
D.cMP=w(["\u269c","\u265b","\u2726"],x.s)
D.di9=new C.wE("Ivory Marble & Gold",D.cAX,4289760572,4286209048,4280951062,3863625518,D.cMP)
D.dTQ=new B.S(4278978566,4280555024)
D.dU5=new B.S(4279504137,4278518530)
D.dUm=new B.S(4281211923,4278978566)
D.cyP=w([D.dTQ,D.dU5,D.dUm],x.n)
D.cV4=w(["\u2742","\u2726","\u265c"],x.s)
D.di4=new C.wE("Onyx & Copper",D.cyP,4291856987,4294365880,4294964718,3873885630,D.cV4)
D.cij=w([D.dia,D.di7,D.di1,D.di3,D.di8,D.di5,D.di2,D.di6,D.di9,D.di4],B.aA("M<wE>"))
D.ckz=w([A.at,D.ze,A.ho],x.O)
D.dYd=new B.S("Original",null)
D.dYi=new B.S("Wide 16:9",1.7777777777777777)
D.dZx=new B.S("Landscape 3:2",1.5)
D.dXX=new B.S("Photo 4:3",1.3333333333333333)
D.dYP=new B.S("Square",1)
D.e4f=new B.S("Portrait 3:4",0.75)
D.apC=w([D.dYd,D.dYi,D.dZx,D.dXX,D.dYP,D.e4f],B.aA("M<+(n,P?)>"))
D.apD=w([A.ho,A.cd,A.bc,A.bE],x.O)
D.dZB=new B.S("","Original")
D.e_v=new B.S("circle","Circle")
D.e2y=new B.S("rounded","Rounded")
D.e3d=new B.S("triangle","Triangle")
D.e0J=new B.S("hexagon","Hexagon")
D.e_K=new B.S("diamond","Diamond")
D.e_5=new B.S("arch","Arch")
D.Ax=w([D.dZB,D.e_v,D.e2y,D.e3d,D.e0J,D.e_K,D.e_5],x.L)
D.ddg=new C.kV("classic_blue","Classic Blue","Normal",A.bh,A.c,A.jU,A.dH,A.aI)
D.ddw=new C.kV("campus_green","Campus Green","Normal",A.aW,A.lN,A.q0,A.fP,A.fs)
D.ddn=new C.kV("warm_sand","Warm Sand","Normal",A.e2,A.hD,A.bK,A.iA,A.n8)
D.ddu=new C.kV("slate_minimal","Slate Minimal","Normal",A.bB,A.aO,A.aJ,A.M,A.aI)
D.ddf=new C.kV("coral_fresh","Coral Fresh","Normal",A.cl,A.i8,A.pV,A.kT,A.rb)
D.ddv=new C.kV("lavender_calm","Lavender Calm","Normal",A.b0,A.oI,A.z3,A.q3,A.jT)
D.ddh=new C.kV("ocean_breeze","Ocean Breeze","Normal",A.eT,A.q7,A.r7,A.re,A.n9)
D.aah=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dds=new C.kV("berry_pop","Berry Pop","Normal",A.f3,D.aah,A.kO,G.U8,A.Da)
D.ddi=new C.kV("midnight_pro","Midnight Pro","Professional",A.aA,A.M,A.dq,A.kO,A.ct)
D.ddr=new C.kV("executive_navy","Executive Navy","Professional",A.dc,A.a9G,A.dH,A.kP,A.bP)
D.ddp=new C.kV("boardroom_charcoal","Boardroom Charcoal","Professional",A.aj,A.bj,A.M,A.aO,A.ct)
D.ddj=new C.kV("corporate_steel","Corporate Steel","Professional",A.mn,A.M,A.lP,A.hq,A.bP)
D.ddm=new C.kV("gold_luxe","Gold Luxe","Luxury",A.nR,A.dw,A.nS,A.nb,A.bK)
D.b5G=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.ddq=new C.kV("rose_gold_elite","Rose Gold Elite","Luxury",A.hm,D.b5G,A.U0,A.i6,A.oG)
D.ddt=new C.kV("platinum_night","Platinum Night","Luxury",A.ct,A.dQ,A.bj,A.aO,A.aJ)
D.ddx=new C.kV("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oK,A.eO,A.oQ,A.j6)
D.dde=new C.kV("royal_purple","Royal Purple","Luxury",A.lL,A.Tp,A.jT,A.kO,A.T2)
D.ddo=new C.kV("neon_pitch","Neon Pitch","Bold",A.bc,A.dQ,A.M,A.bd,A.aJ)
D.ddl=new C.kV("crimson_impact","Crimson Impact","Bold",A.bS,A.kS,A.fq,A.rs,A.fO)
D.ddk=new C.kV("sunset_gallery","Sunset Gallery","Bold",A.fZ,A.rb,A.kT,A.pV,A.oM)
D.F9=w([D.ddg,D.ddw,D.ddn,D.ddu,D.ddf,D.ddv,D.ddh,D.dds,D.ddi,D.ddr,D.ddp,D.ddj,D.ddm,D.ddq,D.ddt,D.ddx,D.dde,D.ddo,D.ddl,D.ddk],B.aA("M<kV>"))
D.cvY=w([A.bR,D.iS],x.O)
D.cLx=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e_1=new B.S("Faces & people",D.cLx)
D.ckD=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dT5=new B.S("Ideas & work",D.ckD)
D.cD9=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e0N=new B.S("Nature",D.cD9)
D.cLG=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.dYb=new B.S("Places & things",D.cLG)
D.cGc=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e_7=new B.S("Symbols",D.cGc)
D.cw2=w([D.e_1,D.dT5,D.e0N,D.dYb,D.e_7],B.aA("M<+(n,al<n>)>"))
D.aZf=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cwm=w([A.bR,D.a90,D.aZf],x.O)
D.aTO=new B.a9(0,A.G,A.Ip,A.aAI,40)
D.aTv=new B.a9(0,A.G,A.n6,A.e6,8)
D.cww=w([D.aTO,D.aTv],x.V)
D.cwX=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aq2=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.ZD=w([A.ho,A.fo,A.bS,A.aG,A.cl],x.O)
D.cxF=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9e=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cxQ=w([A.TU,D.a9e,A.TU],x.O)
D.cxU=w([A.hE,D.iS,D.Iy],x.O)
D.dY8=new B.S(A.bf,D.Xp)
D.dYM=new B.S(A.L,D.Xo)
D.dVG=new B.S(A.dK,D.Xq)
D.cyK=w([D.dY8,D.dYM,D.dVG],B.aA("M<+(pv,a_)>"))
D.cJ=new C.H3(0,"text")
D.l4=new C.H3(1,"image")
D.eQ=new C.H3(2,"shape")
D.P8=new C.H3(3,"pdf")
D.kE=new C.H3(4,"signature")
D.a1h=new C.H3(5,"bio")
D.czz=w([D.cJ,D.l4,D.eQ,D.P8,D.kE,D.a1h],B.aA("M<H3>"))
D.czA=w([A.bg,A.cz],B.aA("M<G1>"))
D.cA9=w(["School","Documents","Sign & present"],x.s)
D.aTS=new B.a9(0,A.G,A.aaP,A.to,28)
D.cAs=w([D.aTS],x.V)
D.cAK=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nn=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqp=w([A.ho,A.D9,A.aJ,A.c,A.nT,A.at],x.O)
D.cBY=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history."],x.s)
D.e3U=new B.S(0.1,0.08)
D.e0L=new B.S(0.3,0.05)
D.dVt=new B.S(0.55,0.1)
D.dXz=new B.S(0.8,0.06)
D.dZd=new B.S(0.92,0.16)
D.dYV=new B.S(0.2,0.2)
D.dXN=new B.S(0.7,0.22)
D.e_Y=new B.S(0.05,0.4)
D.dZt=new B.S(0.95,0.45)
D.dVN=new B.S(0.12,0.7)
D.dWX=new B.S(0.88,0.75)
D.dX1=new B.S(0.4,0.9)
D.dUM=new B.S(0.65,0.93)
D.dXm=new B.S(0.25,0.97)
D.dY7=new B.S(0.85,0.9)
D.dWe=new B.S(0.5,0.04)
D.cC1=w([D.e3U,D.e0L,D.dVt,D.dXz,D.dZd,D.dYV,D.dXN,D.e_Y,D.dZt,D.dVN,D.dWX,D.dX1,D.dUM,D.dXm,D.dY7,D.dWe],x.G)
D.cCa=w([A.c,A.hm,A.b3,A.aS],x.O)
D.dEu=new C.js("office_blue","Office Blue",A.bh,A.dH,A.aI,A.c,A.jU)
D.dEF=new C.js("campus_green","Campus Green",A.aW,A.fP,A.fs,A.lN,A.q0)
D.dEv=new C.js("sunset","Sunset",A.fZ,A.kT,A.n8,A.i8,A.pV)
D.dEw=new C.js("midnight","Midnight",A.aA,A.kO,A.ct,A.M,A.dq)
D.dEH=new C.js("classic","Classic",A.dC,A.dw,A.lj,A.hD,A.hC)
D.dEE=new C.js("rose_gold","Rose Gold",A.hm,A.w2,A.w1,A.u4,A.zj)
D.dEp=new C.js("ocean_teal","Ocean Teal",A.eT,A.re,A.n9,A.q7,A.r7)
D.dEo=new C.js("slate_pro","Slate Pro",A.bB,A.M,A.aI,A.aO,A.aJ)
D.dEn=new C.js("neon_night","Neon Night",A.bc,A.bd,A.aJ,A.dQ,A.M)
D.dEz=new C.js("lavender","Lavender",A.b0,A.q3,A.jT,A.oI,A.z3)
D.dEB=new C.js("coral","Coral",A.cl,A.kT,A.rb,A.i8,A.oM)
D.dEq=new C.js("forest","Forest",A.hc,A.eM,A.d3,A.lO,A.eY)
D.dEr=new C.js("berry","Berry",A.f3,G.U8,A.Da,D.aah,A.kO)
D.dEy=new C.js("sand","Sand",A.e2,A.iA,A.n8,A.hD,A.bK)
D.dED=new C.js("ice","Ice",A.mn,A.IO,A.aI,A.ml,A.hq)
D.dEt=new C.js("charcoal","Charcoal",A.aj,A.aO,A.ct,A.bj,A.M)
D.dEm=new C.js("mint","Mint",A.aS,A.ff,A.fP,A.lO,A.oQ)
D.dEC=new C.js("crimson","Crimson",A.bS,A.mq,A.kS,A.D7,A.rs)
D.b0q=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dEx=new C.js("gold","Gold",A.nR,A.ra,A.nS,D.b0q,A.nb)
D.dEA=new C.js("aqua","Aqua",A.bJ,A.CV,A.nO,A.oJ,A.nU)
D.dEs=new C.js("plum","Plum",A.lL,A.u0,A.Da,A.CN,A.rn)
D.dEG=new C.js("steel","Steel",A.dc,A.dH,A.bj,A.jU,A.kP)
D.ZT=w([D.dEu,D.dEF,D.dEv,D.dEw,D.dEH,D.dEE,D.dEp,D.dEo,D.dEn,D.dEz,D.dEB,D.dEq,D.dEr,D.dEy,D.dED,D.dEt,D.dEm,D.dEC,D.dEx,D.dEA,D.dEs,D.dEG],B.aA("M<js>"))
D.cCu=w([A.bR,A.iU],x.O)
D.Pa=new C.hm(10,"rotate3d")
D.G4=new C.hm(8,"flip")
D.aAf=new C.hm(19,"spiral")
D.pn=new C.hm(16,"bounce")
D.aAi=new C.hm(9,"flipVertical")
D.cCv=w([D.Pa,D.G4,D.aAf,D.pn,D.aAi],x.i)
D.e_=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cCN=w([0.62,1],x.x)
D.cDh=w([0,0.32,0.68,1],x.x)
D.m8=new C.hm(6,"zoom")
D.ti=new C.hm(4,"slideUp")
D.th=new C.hm(2,"slideLeft")
D.cDp=w([D.m8,D.G4,D.ti,D.Pa,D.th],x.i)
D.cDT=w([A.cd,A.hm,A.i6,A.ho,A.c],x.O)
D.aTJ=new B.a9(0,A.G,D.a9p,A.to,30)
D.cEx=w([D.aTJ],x.V)
D.dLr=new B.v(0,-2.5)
D.dLh=new B.v(-2.5,0)
D.dKw=new B.v(2.5,0)
D.cEA=w([A.Pp,A.aAU,A.aB6,A.a1E,D.dLr,H.aB3,D.dLh,D.dKw],x.dN)
D.Fg=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cF0=w([23,114,69,56,80,144],x.t)
D.cFp=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cFN=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cHb=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cHg=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.b8=new C.tZ(0,"rectangle")
D.ex=new C.tZ(1,"circle")
D.kF=new C.tZ(6,"hexagon")
D.cHs=w([D.b8,D.ex,D.kF],x.m)
D.nw=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aan=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cI0=w([D.aan,A.eM],x.O)
D.dVz=new B.S("","Classic")
D.dUR=new B.S("caps","Bold caps")
D.e00=new B.S("elegant","Elegant")
D.e2I=new B.S("shadow","Shadow")
D.dXK=new B.S("neon","Neon glow")
D.e22=new B.S("outline","Outline")
D.e1A=new B.S("marker","Highlighter")
D.e2S=new B.S("stamp","Stamp")
D.e2v=new B.S("retro","Retro")
D.dXd=new B.S("threed","3D")
D.e0i=new B.S("fire","Fire")
D.e0R=new B.S("ice","Ice")
D.e_u=new B.S("chalk","Chalk")
D.e_y=new B.S("comic","Comic")
D.e2U=new B.S("sunset","Sunset")
D.e3z=new B.S("softglow","Soft glow")
D.e1n=new B.S("lowercase","Lowercase")
D.e_O=new B.S("double","Echo")
D.e3E=new B.S("whisper","Whisper")
D.arg=w([D.dVz,D.dUR,D.e00,D.e2I,D.dXK,D.e22,D.e1A,D.e2S,D.e2v,D.dXd,H.aG4,D.e0i,D.e0R,D.e_u,D.e_y,A.a2s,D.e2U,D.e3z,D.e1n,D.e_O,D.e3E],x.L)
D.cJ7=w([3,5,7,10,12,15],x.t)
D.cKl=w([A.cd,A.bK,A.c,A.eN,A.dh],x.O)
D.d4v=new C.rC(10,"cardWorld")
D.AY=new C.Ae(3,"rounded")
D.dlb=new C.kY("world","NGMY World",D.d4v,D.AY,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d4w=new C.rC(11,"cardSplit")
D.dl7=new C.kY("business","Business Wire",D.d4w,D.AY,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d4x=new C.rC(12,"cardBreaking")
D.dlk=new C.kY("breaking","Breaking Red",D.d4x,D.AY,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d4y=new C.rC(13,"cardFeature")
D.dld=new C.kY("feature","Tech Feature",D.d4y,D.AY,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.ayO=new C.rC(6,"circle")
D.ayI=new C.Ae(4,"circle")
D.dlh=new C.kY("parchment","Royal Circle",D.ayO,D.ayI,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dl6=new C.kY("ocean","Blue Ocean",D.ayO,D.ayI,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d4B=new C.rC(7,"rail")
D.ayH=new C.Ae(1,"double")
D.dl8=new C.kY("forest","Green Leaf",D.d4B,D.ayH,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.ayL=new C.rC(1,"sideBySide")
D.dlm=new C.kY("herald","NGMY Herald",D.ayL,D.AY,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.ayK=new C.rC(0,"classic")
D.a0u=new C.Ae(9,"shadow")
D.dll=new C.kY("daily","The Daily",D.ayK,D.a0u,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d4z=new C.rC(2,"splash")
D.ayJ=new C.Ae(6,"cutCorner")
D.dl5=new C.kY("tabloid","Big Tabloid",D.d4z,D.ayJ,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.ayP=new C.rC(9,"minimal")
D.dlg=new C.kY("modern","Modern Digest",D.ayP,D.AY,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.ayM=new C.rC(3,"magazine")
D.ayG=new C.Ae(0,"plain")
D.dlc=new C.kY("midnight","Midnight Edition",D.ayM,D.ayG,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d4C=new C.rC(8,"banner")
D.dle=new C.kY("metro","Metro Wire",D.d4C,D.ayJ,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d4u=new C.Ae(8,"arch")
D.dlf=new C.kY("sunrise","Sunrise Post",D.ayM,D.d4u,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.ayN=new C.rC(5,"scrapbook")
D.d4t=new C.Ae(5,"tape")
D.dla=new C.kY("neon","Neon Beat",D.ayN,D.d4t,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d4A=new C.rC(4,"wrap")
D.dln=new C.kY("gold","Golden Press",D.d4A,D.a0u,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dlo=new C.kY("minimal","Paper White",D.ayP,D.a0u,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dl9=new C.kY("gazette","Fresh Gazette",D.ayK,D.ayH,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dlj=new C.kY("times","Classic Times",D.ayL,D.ayG,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.OH=new C.Ae(2,"polaroid")
D.dli=new C.kY("scrapbook","Memory Scrapbook",D.ayN,D.OH,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_6=w([D.dlb,D.dl7,D.dlk,D.dld,D.dlh,D.dl6,D.dl8,D.dlm,D.dll,D.dl5,D.dlg,D.dlc,D.dle,D.dlf,D.dla,D.dln,D.dlo,D.dl9,D.dlj,D.dli],B.aA("M<kY>"))
D.cKx=w([0.45,1],x.x)
D.Fi=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cKR=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.f65=new C.o4("Original",0,1,1,0,0,0)
D.f69=new C.o4("Black & white",0,1.1,0,0,0,0)
D.f5X=new C.o4("Noir",-0.05,1.55,0,0,0,0)
D.f60=new C.o4("Sepia",0,1,0.25,0.9,0,0)
D.f6_=new C.o4("Vivid",0,1.15,1.6,0,0,0)
D.f5T=new C.o4("Pop",0,1.3,1.9,0,0,0)
D.f5V=new C.o4("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.f66=new C.o4("Matte",0,0.9,0.85,0,0,0.55)
D.f61=new C.o4("Cool",0,1.05,1,-0.8,0,0)
D.f68=new C.o4("Warm",0.03,1.05,1.1,0.8,0,0)
D.f5U=new C.o4("Golden hour",0.04,1,1.25,1,0,0)
D.f5Z=new C.o4("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.f67=new C.o4("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.f5Y=new C.o4("Dramatic",-0.05,1.5,1.2,0,0,0)
D.f63=new C.o4("Retro",0,0.9,0.7,0.4,0,0.35)
D.f62=new C.o4("Forest",0,1,1.2,-0.1,-0.45,0)
D.f64=new C.o4("Rose",0,1,1.1,0.3,0.4,0)
D.f5W=new C.o4("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cKS=w([D.f65,D.f69,D.f5X,D.f60,D.f6_,D.f5T,D.f5V,D.f66,D.f61,D.f68,D.f5U,D.f5Z,D.f67,D.f5Y,D.f63,D.f62,D.f64,D.f5W],B.aA("M<o4>"))
D.aYK=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cKT=w([D.aan,A.eM,D.aYK],x.O)
D.dT3=new B.S(0.12,0.3)
D.e0X=new B.S(0.26,0.75)
D.e_X=new B.S(0.8,0.22)
D.e30=new B.S(0.9,0.7)
D.e1m=new B.S(0.5,0.15)
D.e23=new B.S(0.65,0.85)
D.dWr=new B.S(0.08,0.85)
D.cL3=w([D.dT3,D.e0X,D.e_X,D.e30,D.e1m,D.e23,D.dWr],x.G)
D.arp=w([A.bc,A.cd,A.bE,A.bt],x.O)
D.cLR=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cM3=w([A.c,A.hq,A.dE,A.tW],x.O)
D.b0B=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cMY=w([D.b0B,D.a9e],x.O)
D.cMZ=w([A.vX,A.at],x.O)
D.cNe=w([0,0.25,0.75,1],x.x)
D.cNg=w([A.vT,A.nT],x.O)
D.azQ=new C.kB(10,"kenteSunset")
D.fal=w([D.a9w,A.jv,A.at],x.O)
D.dgs=new C.j9("kuhowa_kente_sunset","Kente ya Jua",y.H,D.azQ,4294964964,4282000405,4279983648,D.jk)
D.azR=new C.kB(11,"indigoMudcloth")
D.aZy=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.faz=w([D.aZy,A.a9b,A.hE],x.O)
D.dgA=new C.j9("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.azR,4294439140,4279903102,4279903102,D.jk)
D.azS=new C.kB(12,"adinkraRoyal")
D.b9t=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.faA=w([D.a8i,D.b9t,A.at],x.O)
D.dgC=new C.j9("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.azS,4294965484,4285218591,4287322667,D.jk)
D.azT=new C.kB(13,"nileLotus")
D.b6q=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b3L=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.faF=w([D.b6q,D.b3L,A.hE],x.O)
D.dgB=new C.j9("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azT,4294244340,4279196764,4279196764,D.jk)
D.azU=new C.kB(14,"shweshweIvory")
D.b27=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b1a=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b__=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fam=w([D.b27,D.b1a,D.b__],x.O)
D.dgx=new C.j9("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azU,4294505710,4279970378,4291058750,D.jk)
D.qB=new C.kB(15,"certIvoryNavy")
D.fak=w([D.J3,D.iS,A.hE],x.O)
D.azm=new C.wC(1,"ringsNdoa")
D.dgu=new C.j9("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qB,4294966259,4279378237,4291404327,D.azm)
D.a1_=new C.wC(2,"coupleCards")
D.dgp=new C.j9("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qB,4294966259,4279378237,4291404327,D.a1_)
D.B0=new C.kB(18,"certIvoryNavyBar")
D.a8h=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fay=w([D.a8h,D.iS,A.hE],x.O)
D.azn=new C.wC(3,"kuhoweshaForm")
D.dgn=new C.j9("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.B0,4294966519,4279378237,4291404327,D.azn)
D.a9n=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.faS=w([D.J3,D.a9n,A.hE],x.O)
D.a10=new C.wC(4,"mahariPande")
D.dgq=new C.j9("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qB,4294966259,4279904068,4291404327,D.a10)
D.azV=new C.kB(16,"certIvoryGreen")
D.b1D=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fao=w([A.Is,D.b1D,A.hE],x.O)
D.azo=new C.wC(5,"familiaMti")
D.dgw=new C.j9("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.azV,4294966776,4280241466,4291404327,D.azo)
D.a11=new C.wC(6,"ndoaSafi")
D.dgo=new C.j9("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.B0,4294966519,4279378237,4291404327,D.a11)
D.b5c=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.far=w([D.J3,A.hE,D.b5c],x.O)
D.a12=new C.wC(7,"peteWide")
D.dgt=new C.j9("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qB,4294966259,4282001936,4291404327,D.a12)
D.dgD=new C.wC(8,"muhuriCrest")
D.dgm=new C.j9("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qB,4294966259,4279378237,4291404327,D.dgD)
D.faB=w([D.a8h,D.a9n,A.hE],x.O)
D.dgE=new C.wC(9,"fomuWazi")
D.dgz=new C.j9("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.B0,4294966519,4279904068,4291404327,D.dgE)
D.azW=new C.kB(17,"certIvoryRose")
D.b29=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.faE=w([D.b29,D.aa0,A.hE],x.O)
D.a0Z=new C.wC(10,"upendoOrnate")
D.dgv=new C.j9("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.azW,4294965493,4286200650,4291404327,D.a0Z)
D.cNC=w([D.dgs,D.dgA,D.dgC,D.dgB,D.dgx,D.dgu,D.dgp,D.dgn,D.dgq,D.dgw,D.dgo,D.dgt,D.dgm,D.dgz,D.dgv],x.h)
D.e0=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.G5=new C.v7(0,"emojis")
D.B7=new C.v7(1,"pictures")
D.G6=new C.v7(2,"icons3d")
D.a1j=new C.v7(3,"animations")
D.Pc=new C.v7(4,"videoMotion")
D.B8=new C.v7(5,"luxe")
D.a_d=w([D.G5,D.B7,D.G6,D.a1j,D.Pc,D.B8],B.aA("M<v7>"))
D.e2j=new B.S(A.dO,"Looks")
D.dXv=new B.S(A.xc,"Light")
D.dXt=new B.S(A.nq,"Colour")
D.dWs=new B.S(A.wM,"Effects")
D.afY=new B.a_(63112,"MaterialIcons",!1)
D.dV_=new B.S(D.afY,"Crop")
D.cO1=w([D.e2j,D.dXv,D.dXt,D.dWs,D.dV_],x.f2)
D.cOD=w([],x.D)
D.faP=w([],x.L)
D.dWz=new B.S("Flashcard",D.G0)
D.dYx=new B.S("Quiz",D.G1)
D.dZz=new B.S("Worksheet",D.G2)
D.dY4=new B.S("Notes",D.m7)
D.dYK=new B.S("Section",D.B5)
D.cPd=w([D.dWz,D.dYx,D.dZz,D.dY4,D.dYK],B.aA("M<+(n,m4)>"))
D.dik=new C.kB(6,"beadedPearl")
D.b7H=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b4i=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.faT=w([D.b7H,D.b4i,A.hE],x.O)
D.azk=new C.j9("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dik,4294966774,4286209070,4291404327,D.jk)
D.dil=new C.kB(7,"artDeco")
D.b7u=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.b9I=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.faR=w([D.b7u,D.b9I,A.bR],x.O)
D.azl=new C.j9("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dil,4294440434,4280228630,4290283019,D.jk)
D.dim=new C.kB(8,"rosetteCorners")
D.b91=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0D=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b4e=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fau=w([D.b91,D.b0D,D.b4e],x.O)
D.azj=new C.j9("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dim,4294702831,4285218602,4291394365,D.jk)
D.din=new C.kB(9,"modernLedger")
D.fat=w([A.c,D.iS,D.iS],x.O)
D.azi=new C.j9("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.din,4294967295,4279378237,4279378237,D.jk)
D.cPi=w([D.azk,D.azl,D.azj,D.azi],x.h)
D.cPp=w([A.i6,A.nT],x.O)
D.cb=new C.hm(0,"none")
D.d8=new C.hm(1,"fade")
D.G3=new C.hm(3,"slideRight")
D.aAh=new C.hm(5,"slideDown")
D.dCZ=new C.hm(7,"zoomOut")
D.a1i=new C.hm(11,"cube")
D.dCU=new C.hm(12,"blur")
D.aAe=new C.hm(13,"dissolve")
D.dCV=new C.hm(14,"wipeLeft")
D.dCW=new C.hm(15,"wipeRight")
D.Pb=new C.hm(17,"push")
D.dCX=new C.hm(18,"flash")
D.aAg=new C.hm(20,"swing")
D.dCY=new C.hm(21,"curtain")
D.NT=w([D.cb,D.d8,D.th,D.G3,D.ti,D.aAh,D.m8,D.dCZ,D.G4,D.aAi,D.Pa,D.a1i,D.dCU,D.aAe,D.dCV,D.dCW,D.pn,D.Pb,D.dCX,D.aAf,D.aAg,D.dCY],x.i)
D.NU=w([D.a0Y,D.a0W,D.a0P,D.a0Q,D.a0R,D.a0U,D.a0S,D.a0T,D.a0X,D.a0V,D.azk,D.azl,D.azj,D.azi],x.h)
D.cPN=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cPR=w([A.z6,A.ho,A.bR],x.O)
D.dX9=new B.S(A.rT,"Design")
D.e3l=new B.S(D.agd,"Word sizes")
D.e1c=new B.S(A.Ah,"Text")
D.bqo=new B.a_(983182,"MaterialIcons",!1)
D.e1g=new B.S(D.bqo,"Photo")
D.dUO=new B.S(A.l_,"Logo")
D.e3S=new B.S(A.EF,"News")
D.cPW=w([D.dX9,D.e3l,D.e1c,D.e1g,D.dUO,D.e3S],x.f2)
D.cPX=w(["golddust","sparkle","sheen"],x.s)
D.dEl=new C.el("upload_pdf",K.Lf,"Upload PDF")
D.dDv=new C.el("sign_paper",A.EC,"Sign Paper")
D.bpG=new B.a_(63438,"MaterialIcons",!1)
D.dEh=new C.el("hd_photo",D.bpG,"HD Photo")
D.dDn=new C.el("sharpen",E.X9,"Sharpen")
D.dDx=new C.el("print",K.Lf,"Download PDF")
D.dDZ=new C.el("rotate",D.afY,"Rotate")
D.dDG=new C.el("text_box",A.Ah,"Text Box")
D.dDI=new C.el("picture",A.rW,"Picture")
D.dDE=new C.el("title",A.Ai,"Title")
D.dDA=new C.el("subtitle",T.agO,"Subtitle")
D.dE7=new C.el("bullets",I.Xr,"Bullet List")
D.dDB=new C.el("numbered",A.L4,"Numbered")
D.dEa=new C.el("quote",A_.Ab,"Quote")
D.dDN=new C.el("citation",A.p6,"Citation")
D.dEd=new C.el("date_stamp",As.Xe,"Date Stamp")
D.dE0=new C.el("page_number",A.x6,"Page #")
D.dE4=new C.el("header_bar",A.EB,"Header")
D.dDH=new C.el("footer_bar",A4.ah1,"Footer")
D.dDw=new C.el("divider",A.ut,"Divider")
D.dDs=new C.el("highlight",A.Xy,"Highlight")
D.dE6=new C.el("redact",A.x9,"Redact")
D.dDU=new C.el("callout",A.A8,"Callout")
D.dEf=new C.el("checkboxes",I.afg,"Checklist")
D.dDR=new C.el("table",A.XZ,"Table")
D.dDL=new C.el("memo",I.XJ,"Memo")
D.dDV=new C.el("letter",A.El,"Letter")
D.bpf=new B.a_(63259,"MaterialIcons",!0)
D.dDm=new C.el("agenda",D.bpf,"Agenda")
D.dDy=new C.el("toc",Ar.agq,"Contents")
D.bpB=new B.a_(63406,"MaterialIcons",!1)
D.dDS=new C.el("sig_line",D.bpB,"Sign Line")
D.dDf=new C.el("initial_line",A.iY,"Initials")
D.dDi=new C.el("approved",A.l_,"APPROVED")
D.dDX=new C.el("draft",A.pc,"DRAFT")
D.dE2=new C.el("confidential",A.iZ,"Confidential")
D.dE5=new C.el("sticky",A.Lm,"Sticky Note")
D.dEe=new C.el("progress",A.agp,"Progress")
D.bqU=new B.a_(983507,"MaterialIcons",!1)
D.dDt=new C.el("stars",D.bqU,"Star Rating")
D.dDd=new C.el("equation",A.agg,"Equation")
D.dDo=new C.el("timeline",A.Ez,"Timeline")
D.dDM=new C.el("two_col",A.Y0,"Two Columns")
D.dDq=new C.el("compare",Z.Xh,"Compare")
D.dDb=new C.el("duplicate_el",A.fx,"Duplicate")
D.dEj=new C.el("delete_el",A.e4,"Delete")
D.bpw=new B.a_(63352,"MaterialIcons",!1)
D.dE9=new C.el("bring_fwd",D.bpw,"Bring Front")
D.bpv=new B.a_(63351,"MaterialIcons",!1)
D.dDg=new C.el("send_back",D.bpv,"Send Back")
D.dDW=new C.el("align_left",D.Xp,"Align L")
D.dE1=new C.el("align_center",D.Xo,"Align C")
D.dEi=new C.el("align_right",D.Xq,"Align R")
D.dDF=new C.el("word_count",Y.WR,"Word Count")
D.dDC=new C.el("link_text",A.h3,"Link")
D.dE_=new C.el("phone",A.ij,"Phone")
D.dDr=new C.el("email",A.A9,"Email")
D.dEk=new C.el("qr_placeholder",A.j1,"QR Placeholder")
D.dDl=new C.el("rectangle",A0.Ec,"Rectangle")
D.dDQ=new C.el("circle",A.rO,"Circle")
D.dDh=new C.el("arrow",A.jg,"Arrow")
D.dE8=new C.el("line",A.ut,"Line")
D.dDu=new C.el("triangle",A.Xf,"Triangle")
D.bpn=new B.a_(63318,"MaterialIcons",!1)
D.dDz=new C.el("grayscale",D.bpn,"Grayscale")
D.dDJ=new C.el("brighten",I.afA,"Brighten")
D.dDO=new C.el("flip_h",A.Ef,"Flip H")
D.bpu=new B.a_(63348,"MaterialIcons",!1)
D.dEg=new C.el("flip_v",D.bpu,"Flip V")
D.dE3=new C.el("cover_page",A.p1,"Cover Page")
D.dDe=new C.el("invoice",A.fR,"Invoice")
D.dDp=new C.el("resume",A.lV,"Resume")
D.dDD=new C.el("minutes",A.o6,"Minutes")
D.dDj=new C.el("lab_report",A.Lh,"Lab Report")
D.dDk=new C.el("rubric",A.wR,"Rubric")
D.dDP=new C.el("flashcard_tool",A.Ag,"Flashcard")
D.dEb=new C.el("quiz_tool",A.Er,"Quiz Block")
D.dDT=new C.el("worksheet_tool",L.E4,"Worksheet")
D.dDY=new C.el("outline_share",A.Lj,"Share Outline")
D.dEc=new C.el("export_json",D.afm,"Export JSON")
D.dDc=new C.el("new_slide",D.WQ,"New Slide")
D.dDK=new C.el("present",A.p8,"Present")
D.cQm=w([D.dEl,D.dDv,D.dEh,D.dDn,D.dDx,D.dDZ,D.dDG,D.dDI,D.dDE,D.dDA,D.dE7,D.dDB,D.dEa,D.dDN,D.dEd,D.dE0,D.dE4,D.dDH,D.dDw,D.dDs,D.dE6,D.dDU,D.dEf,D.dDR,D.dDL,D.dDV,D.dDm,D.dDy,D.dDS,D.dDf,D.dDi,D.dDX,D.dE2,D.dE5,D.dEe,D.dDt,D.dDd,D.dDo,D.dDM,D.dDq,D.dDb,D.dEj,D.dE9,D.dDg,D.dDW,D.dE1,D.dEi,D.dDF,D.dDC,D.dE_,D.dDr,D.dEk,D.dDl,D.dDQ,D.dDh,D.dE8,D.dDu,D.dDz,D.dDJ,D.dDO,D.dEg,D.dE3,D.dDe,D.dDp,D.dDD,D.dDj,D.dDk,D.dDP,D.dEb,D.dDT,D.dDY,D.dEc,D.dDc,D.dDK],B.aA("M<el>"))
D.cQs=w([A.ct,A.aj],x.O)
D.dUw=new B.S(4286331629,4292552567)
D.dUj=new B.S(4280640491,4278630100)
D.dUE=new B.S(4294538006,4292943176)
D.dTG=new B.S(4278556265,4280640491)
D.cLd=w([D.dUw,D.dUj,D.dUE,D.dTG],x.n)
D.cb7=w([4294626325,4280472558,4294210230],x.t)
D.dD6=new C.nh("colorful","Colorful",A.nq,D.cLd,4294967295,3875536895,D.cb7,D.m8)
D.dU7=new B.S(4279522093,4279657780)
D.dUn=new B.S(4281750292,4283268111)
D.dTJ=new B.S(4278603323,4279203438)
D.dUo=new B.S(4282343954,4279599165)
D.clP=w([D.dU7,D.dUn,D.dTJ,D.dUo],x.n)
D.caQ=w([4288931381,4294829706,4287033260],x.t)
D.dD2=new C.nh("nature","Nature",A.ED,D.clP,4294442727,3874290891,D.caQ,D.d8)
D.dU1=new B.S(4279369771,4283178389)
D.dTZ=new B.S(4279179050,4286456526)
D.dUf=new B.S(4280163147,4290648157)
D.dTy=new B.S(4278322711,4285343961)
D.cCF=w([D.dU1,D.dTZ,D.dUf,D.dTy],x.n)
D.cb3=w([4294210230,4280472558,4289170426],x.t)
D.dD0=new C.nh("vibe","Vibe",A.Xu,D.cCF,4294967295,3874869502,D.cb3,D.th)
D.dUA=new B.S(4290007817,4292552567)
D.dUu=new B.S(4286328082,4294286859)
D.dUz=new B.S(4288485197,4294538006)
D.dUt=new B.S(4285343961,4293675161)
D.bIs=w([D.dUA,D.dUu,D.dUz,D.dUt],x.n)
D.cb8=w([4294829706,4294967295,4284999929],x.t)
D.dD1=new C.nh("celebration","Celebration",A.kX,D.bIs,4294967295,4009752557,D.cb8,D.pn)
D.dTX=new B.S(4279179050,4280171146)
D.dU0=new B.S(4279310375,4280232247)
D.dTP=new B.S(4278916151,4280172719)
D.dTY=new B.S(4279179050,4281549141)
D.cwf=w([D.dTX,D.dU0,D.dTP,D.dTY],x.n)
D.caL=w([4281908728,4294626325,4287931320],x.t)
D.dD5=new C.nh("professional","Professional",A.A7,D.cwf,4294967295,3872118241,D.caL,D.Pb)
D.dTT=new B.S(4278995566,4278413729)
D.dTL=new B.S(4278727492,4279137424)
D.dUg=new B.S(4280171146,4278751666)
D.dTU=new B.S(4278995566,4279590517)
D.ceT=w([D.dTT,D.dTL,D.dUg,D.dTU],x.n)
D.caO=w([4286436348,4284410580,4294829706],x.t)
D.dD7=new C.nh("ocean","Ocean",I.Y2,D.ceT,4294967295,3873501950,D.caO,D.ti)
D.dUv=new B.S(4286328082,4294538006)
D.dUx=new B.S(4286781507,4294677052)
D.dUr=new B.S(4283178389,4294197086)
D.dUy=new B.S(4288295954,4294688548)
D.csw=w([D.dUv,D.dUx,D.dUr,D.dUy],x.n)
D.cb9=w([4294829706,4294967295,4294747557],x.t)
D.dD8=new C.nh("sunset","Sunset",A.Lo,D.csw,4294967295,4009749973,D.cb9,D.d8)
D.dUI=new B.S(4294967295,4294047225)
D.dUD=new B.S(4294507260,4294967295)
D.dUH=new B.S(4294967295,4293060848)
D.dUC=new B.S(4294507260,4294047225)
D.cFv=w([D.dUI,D.dUD,D.dUH,D.dUC],x.n)
D.caJ=w([4280640491,4279179050,4287931320],x.t)
D.dD4=new C.nh("minimal","Minimal",A0.Ec,D.cFv,4279179050,4282865001,D.caJ,D.d8)
D.dTS=new B.S(4278979081,4280886564)
D.dUb=new B.S(4280031511,4278979081)
D.dU_=new B.S(4279308561,4281148438)
D.dTR=new B.S(4278979081,4280031511)
D.cSa=w([D.dTS,D.dUb,D.dU_,D.dTR],x.n)
D.caX=w([4292128567,4294829706,4289241758],x.t)
D.dD9=new C.nh("elegant","Elegant",A.l0,D.cSa,4294898631,3873957348,D.caX,D.aAe)
D.dUd=new B.S(4280159034,4282058596)
D.dTO=new B.S(4278916151,4280163147)
D.dUl=new B.S(4281208933,4278916151)
D.dU4=new B.S(4279502891,4283178389)
D.cY1=w([D.dUd,D.dTO,D.dUl,D.dU4],x.n)
D.cb5=w([4294296657,4292128567,4291081725],x.t)
D.dD3=new C.nh("royal","Royal Gold",A.iG,D.cY1,4294965222,3874084351,D.cb5,D.m8)
D.dTD=new B.S(4278464302,4280163147)
D.dTN=new B.S(4278916151,4279455306)
D.dUe=new B.S(4280163147,4283040846)
D.dTA=new B.S(4278332450,4281413249)
D.cKW=w([D.dTD,D.dTN,D.dUe,D.dTA],x.n)
D.caK=w([4281193663,4289170426,4294210230],x.t)
D.dDa=new C.nh("aurora","Aurora Glow",A.dO,D.cKW,4293983738,3869766608,D.caK,D.d8)
D.uO=w([D.dD6,D.dD2,D.dD0,D.dD1,D.dD5,D.dD7,D.dD8,D.dD4,D.dD9,D.dD3,D.dDa],B.aA("M<nh>"))
D.b4I=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cQU=w([A.pY,D.b4I,A.pY],x.O)
D.cR8=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cRc=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.e19=new B.S("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.dWY=new B.S("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.dZk=new B.S("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dSr=new B.S("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.dYD=new B.S("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.dXE=new B.S("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.dZX=new B.S("Surprise me","")
D.cRI=w([D.e19,D.dWY,D.dZk,D.dSr,D.dYD,D.dXE,D.dZX],x.L)
D.b_1=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b7Q=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cSm=w([A.c,D.b_1,D.b7Q],x.O)
D.cTW=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azO=new C.kB(0,"heritageGold")
D.b3z=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b3A=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.faU=w([D.b3z,D.b3A,A.at],x.O)
D.dgy=new C.j9("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azO,4294570461,4284234270,4292128567,D.jk)
D.azP=new C.kB(1,"heritageCrimson")
D.aYG=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b28=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b7I=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fax=w([D.aYG,D.b28,D.b7I],x.O)
D.dgr=new C.j9("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azP,4294635750,4285213214,4292912216,D.jk)
D.cU_=w([D.a0Y,D.a0W,D.dgy,D.dgr,D.a0R,D.a0U],x.h)
D.dmr=new C.qQ(1,"circuit")
D.dmU=new C.lJ("neural","Neural Link","Robotic",D.dmr,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dmq=new C.qQ(0,"grid")
D.dmR=new C.lJ("signal","Signal Grid","Robotic",D.dmq,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dmw=new C.qQ(2,"hexes")
D.dmC=new C.lJ("core","Core Protocol","Robotic",D.dmw,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aAb=new C.qQ(11,"diagonal")
D.dmN=new C.lJ("steel","Steel Tech","Robotic",D.aAb,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aAc=new C.qQ(3,"rings")
D.dmB=new C.lJ("vault","Vault Gold","Robotic",D.aAc,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dmu=new C.qQ(13,"leaves")
D.dmE=new C.lJ("forest","Forest Morning","Nature",D.dmu,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aAd=new C.qQ(5,"waves")
D.dmL=new C.lJ("ocean","Ocean Calm","Nature",D.aAd,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dmx=new C.qQ(6,"sunset")
D.dmQ=new C.lJ("sunset","Sunset Glow","Nature",D.dmx,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dmy=new C.qQ(7,"mountains")
D.dmD=new C.lJ("mountain","Mountain Air","Nature",D.dmy,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dmz=new C.qQ(8,"stars")
D.dmK=new C.lJ("night","Night Sky","Nature",D.dmz,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1g=new C.qQ(4,"orbs")
D.dmI=new C.lJ("aurora","Aurora","Nature",D.a1g,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dmS=new C.lJ("sand","Sand Dune","Nature",D.aAd,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dmA=new C.qQ(9,"rays")
D.dmH=new C.lJ("golden","Golden Hour","Warm",D.dmA,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dmF=new C.lJ("royal","Royal Purple","Warm",D.aAb,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dmG=new C.lJ("rose","Rose Petal","Warm",D.a1g,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dmt=new C.qQ(12,"blocks")
D.dmJ=new C.lJ("electric","Electric Blue","Bold",D.dmt,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dmT=new C.lJ("mint","Fresh Mint","Bold",D.a1g,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dmv=new C.qQ(14,"minimal")
D.dmP=new C.lJ("white","Clean White","Clean",D.dmv,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dms=new C.qQ(10,"frame")
D.dmM=new C.lJ("midnight","Midnight Gold","Clean",D.dms,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dmO=new C.lJ("community","Community Green","Clean",D.aAc,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_C=w([D.dmU,D.dmR,D.dmC,D.dmN,D.dmB,D.dmE,D.dmL,D.dmQ,D.dmD,D.dmK,D.dmI,D.dmS,D.dmH,D.dmF,D.dmG,D.dmJ,D.dmT,D.dmP,D.dmM,D.dmO],B.aA("M<lJ>"))
D.cUl=w([D.ze,A.vX,A.ho,A.bR],x.O)
D.cUA=w([D.aaa,D.iS],x.O)
D.cUJ=w(["pdf","docx","txt","md"],x.s)
D.e6G=new B.bz(-3,150,34)
D.e6H=new B.bz(-3,214,62)
D.e6I=new B.bz(-3,288,62)
D.cVv=w([D.e6G,D.e6H,D.e6I],B.aA("M<+(P,P,P)>"))
D.cVV=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cWt=w(["Write","Design","Print & fold"],x.s)
D.jl=new C.tZ(2,"triangle")
D.B6=new C.tZ(3,"arrow")
D.fb=new C.tZ(4,"line")
D.jm=new C.tZ(5,"parallelogram")
D.cWv=w([D.b8,D.ex,D.jl,D.B6,D.fb,D.jm,D.kF],x.m)
D.dT7=new B.S(240,96)
D.dUW=new B.S(560,46)
D.cWA=w([D.dT7,D.dUW],x.G)
D.fb4=new C.wF(0,"classic")
D.diq=new C.nd("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azO,4294570461,4282000405,4284234270)
D.diC=new C.nd("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azP,4294635750,4281999378,4285213214)
D.dir=new C.nd("elegant_navy","Umoja Mzuri",y.s,D.a1a,4294967035,4279378237,4290283019)
D.diE=new C.nd("elegant_gold","Umoja wa Dhahabu",y.Q,D.azX,4294966515,4281016592,4289102906)
D.diG=new C.nd("kente_sunset","Kente ya Jua",y.H,D.azQ,4294964964,4282000405,4279983648)
D.dio=new C.nd("indigo_mudcloth","Nguo ya Indigo",y.n,D.azR,4294439140,4279903102,4279903102)
D.dit=new C.nd("adinkra_royal","Muhuri wa Adinkra",y.z,D.azS,4294965484,4285218591,4287322667)
D.diy=new C.nd("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azT,4294244340,4279196764,4279196764)
D.diA=new C.nd("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azU,4294505710,4279970378,4291058750)
D.fb5=new C.wF(1,"ringsNdoa")
D.dis=new C.nd("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qB,4294966259,4279378237,4291404327)
D.fb7=new C.wF(2,"coupleCards")
D.diD=new C.nd("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qB,4294966259,4279378237,4291404327)
D.fb8=new C.wF(3,"kuhoweshaForm")
D.diz=new C.nd("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.B0,4294966519,4279378237,4291404327)
D.fb9=new C.wF(4,"mahariPande")
D.dip=new C.nd("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qB,4294966259,4279904068,4291404327)
D.fba=new C.wF(5,"familiaMti")
D.diF=new C.nd("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.azV,4294966776,4280241466,4291404327)
D.fbb=new C.wF(6,"ndoaSafi")
D.diw=new C.nd("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.B0,4294966519,4279378237,4291404327)
D.fbc=new C.wF(7,"peteWide")
D.div=new C.nd("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qB,4294966259,4282001936,4291404327)
D.fbd=new C.wF(8,"muhuriCrest")
D.diu=new C.nd("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qB,4294966259,4279378237,4291404327)
D.fbe=new C.wF(9,"fomuWazi")
D.dix=new C.nd("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.B0,4294966519,4279904068,4291404327)
D.fb6=new C.wF(10,"upendoOrnate")
D.diB=new C.nd("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.azW,4294965493,4286200650,4291404327)
D.O6=w([D.diq,D.diC,D.dir,D.diE,D.diG,D.dio,D.dit,D.diy,D.diA,D.dis,D.diD,D.diz,D.dip,D.diF,D.diw,D.div,D.diu,D.dix,D.diB],B.aA("M<nd>"))
D.B4=new C.aoi(0,"landscape169")
D.nx=new C.aoi(1,"portrait916")
D.cXg=w([D.B4,D.nx],B.aA("M<aoi>"))
D.asE=w([A.ho,A.bK,A.dh,A.i6,A.c],x.O)
D.t9=w([A.bR,A.iA],x.O)
D.dSH=new B.S(1000,"M")
D.dVv=new B.S(900,"CM")
D.dUS=new B.S(500,"D")
D.dTw=new B.S(400,"CD")
D.dSI=new B.S(100,"C")
D.dVw=new B.S(90,"XC")
D.dUT=new B.S(50,"L")
D.dTx=new B.S(40,"XL")
D.dSM=new B.S(10,"X")
D.dVA=new B.S(9,"IX")
D.dV1=new B.S(5,"V")
D.dUN=new B.S(4,"IV")
D.dT0=new B.S(1,"I")
D.cXM=w([D.dSH,D.dVv,D.dUS,D.dTw,D.dSI,D.dVw,D.dUT,D.dTx,D.dSM,D.dVA,D.dV1,D.dUN,D.dT0],x.ek)
D.e7z=new B.d7(["open",A.iY,"Open & write","Keep writing this book"])
D.e7X=new B.d7(["print",A.rZ,"Print as a book","Fold and staple it"])
D.cXT=w([D.e7z,D.e7X],B.aA("M<+(n,a_,n,n)>"))
D.cYs=w([D.a1i,D.m8,D.G4,D.Pb,D.d8,D.Pa],x.i)
D.e1s=new B.S(-1,"Small")
D.dSz=new B.S(0,"Normal")
D.dT_=new B.S(1,"Big")
D.dTg=new B.S(2,"Huge")
D.cYQ=w([D.e1s,D.dSz,D.dT_,D.dTg],x.ek)
D.cZe=w([49,65,89,38,83,89],x.t)
D.cZl=w([A.vX,A.ho,A.bR],x.O)
D.cZL=w([D.d8,D.m8,D.th,D.a1i,D.G4,D.Pb],x.i)
D.axW=new B.dW([0,D.Jf,8,D.abl,12,D.abm],B.aA("dW<H,a1E>"))
D.dHN={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b7B=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cwp=w([A.bK,D.b7B],x.O)
D.bHV=w([A.bN,A.bP],x.O)
D.cP_=w([A.bd,A.bh],x.O)
D.cK8=w([A.cd,A.b3,A.cV],x.O)
D.cXU=w([A.ct,A.bB],x.O)
D.cDs=w([A.bc,A.f3],x.O)
D.cMD=w([A.b0,A.fp],x.O)
D.b1V=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cLY=w([D.b1V,A.nT],x.O)
D.cGZ=w([A.iv,A.vZ],x.O)
D.cDi=w([A.br,A.c9],x.O)
D.d1l=new B.bt(D.dHN,[D.cwp,D.bHV,D.cP_,D.cK8,D.cXU,D.cDs,D.cMD,D.cLY,D.cGZ,D.cDi],B.aA("bt<n,al<x>>"))
D.dH1={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a09=new B.bt(D.dH1,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aA("bt<n,n>"))
D.a0f=new B.bt(A.io,[],B.aA("bt<H,+icon3d,picture(n?,n?)>"))
D.d5e=new F.L5(30,null)
D.daI=new F.m0("Chapter 1","","","")
D.cX3=w([D.daI],x.B)
D.daM=new F.qH("My Book","","",D.cX3,E.az9)
D.daK=new F.tR("starry",null,null,null,null,"","","")
D.daN=new F.qH("Dream Big","","",E.a_n,D.daK)
D.daL=new F.tR("story",null,null,null,null,"","","")
D.daO=new F.qH("Little Lion","","",E.a_n,D.daL)
D.daJ=new F.tR("vintage",null,null,null,null,"","","")
D.daP=new F.qH("Our Story","","",E.a_n,D.daJ)
D.ddO=new C.D7("","NGMY","","")
D.dl4=new C.yo("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dD_=new C.aYv(null,null,null,null)
D.dEI=new C.aon(null)
D.dEV=new C.aoT(0,"smaller")
D.dEW=new C.aoT(1,"bigger")
D.aAr=new C.aoT(2,"fit")
D.dJD=new B.v(3,6)
D.dJM=new B.v(4,8)
D.dMo=new B.B(E.ac7,T.a7S,null)
D.dMs=new B.B(A.UV,A.lH,null)
D.bs9=new B.ac(A.mG,16,A.c3,null,null,null)
D.dMw=new B.B(A.kt,D.bs9,null)
D.aY9=new B.f9(2.2,null,null,null,null,A.c,null,null,null,null)
D.dMH=new B.B(A.DJ,D.aY9,null)
D.bCa=new B.ac(A.cu,16,A.aB,null,null,null)
D.dMK=new B.B(A.ef,D.bCa,null)
D.eJX=new B.w("Play",null,A.ot,null,null,null,null,null,null,null,null,null)
D.cPe=w([U.aib,A.tz,D.eJX],x.p)
D.eaY=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cPe,null)
D.dMN=new B.B(A.rF,D.eaY,null)
D.aYi=new B.f9(2.4,null,null,null,null,null,null,null,null,null)
D.efL=new B.a3(20,20,D.aYi,null)
D.dMR=new B.B(A.kt,D.efL,null)
D.eSh=new B.w("Seconds per slide",null,A.h7,null,null,null,null,null,null,null,null,null)
D.dMY=new B.B(A.bk,D.eSh,null)
D.dNk=new C.a6l(2,"print")
D.dNn=new B.iD(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dP_=new B.h_("/Annot")
D.dP1=new B.h_("/URI")
D.eEM=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dQK=new B.jb("share",48,D.eEM,null,B.aA("jb<n>"))
D.bC5=new B.ac(A.dO,14,A.eN,null,null,null)
D.dQT=new B.cE(null,-2,-2,null,null,null,D.bC5,null)
D.b54=new B.x(0.3333333333333333,0,0,0,A.t)
D.cyb=w([D.b54,A.K],x.O)
D.bHk=new B.a8(A.a_,A.a7,A.w,D.cyb,null,null)
D.aRo=new B.o(null,null,null,null,null,D.bHk,A.n)
D.bbD=new B.ky(D.aRo,A.b7,null,null)
D.dR4=new B.cE(0,0,null,0,8,null,D.bbD,null)
D.cT4=w([A.hD,A.oM,A.cl],x.O)
D.dRI=new B.bS(A.B,0.5,A.w,null,0,D.cT4,null,null)
D.dTb=new B.S(0.22,A.bh)
D.dVI=new B.S("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.dWK=new B.S(0.5,A.hm)
D.e0H=new B.S(0.78,A.aS)
D.e7q=new B.d7([A.bE,0.22,0.7,2.6])
D.e7v=new B.d7([A.bc,0.36,1.2,1.3])
D.e7B=new B.d7([A.dN,0.28,0.2,0.4])
D.e7G=new B.d7([A.cB,0.05,0.3,0.35])
D.e7M=new B.d7([A.br,0.28,0.9,0])
D.e7U=new B.d7([A.aA,-0.25,-0.15,0.45])
D.e8A=new B.d7([A.cd,0.42,1,4.1])
D.eaG=new B.a7d(9)
D.bth=new B.ac(A.EF,28,A.cV,null,null,null)
D.eSN=new B.w("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bkr=new B.bF(1,A.bn,D.eSN,null)
D.cVY=w([D.bth,A.av,D.bkr],x.p)
D.eaT=new B.cC(A.aY,A.e,A.j,A.m,null,A.p,null,0,D.cVY,null)
D.bts=new B.ac(A.p6,16,A.c,null,null,null)
D.eU7=new B.w("Book",null,A.qP,null,null,null,null,null,null,null,null,null)
D.cZk=w([D.bts,A.ez,D.eU7],x.p)
D.eb_=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cZk,null)
D.bzK=new B.ac(A.iZ,10,A.c,null,null,null)
D.eId=new B.w("Pro",null,A.nD,null,null,null,null,null,null,null,null,null)
D.cPk=w([D.bzK,A.v5,D.eId],x.p)
D.eb2=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cPk,null)
D.eSg=new B.w("Make a newspaper",null,Am.QY,null,null,null,null,null,null,null,null,null)
D.bIq=w([E.Yn,A.ab,D.eSg],x.p)
D.eb3=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.bIq,null)
D.bym=new B.ac(A.kX,18,A.bK,null,null,null)
D.eKa=new B.w("Ending celebration",null,A.jr,null,null,null,null,null,null,null,null,null)
D.cV6=w([D.bym,A.bp,D.eKa],x.p)
D.eb6=new B.cC(A.aY,A.e,A.j,A.m,null,A.p,null,0,D.cV6,null)
D.bzw=new B.ac(A.iY,18,A.kT,null,null,null)
D.epZ=new B.E(!0,A.kT,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUn=new B.w("Write",null,D.epZ,null,null,null,null,null,null,null,null,null)
D.cFk=w([D.bzw,A.ab,D.eUn],x.p)
D.ebb=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cFk,null)
D.eIc=new B.w("Download picture",null,A.pz,null,null,null,null,null,null,null,null,null)
D.bm4=new B.pM(A.e8,A.B,A.h,D.eIc,null)
D.bmf=new B.dk(1,A.cj,D.bm4,null)
D.cPD=w([K.ai1,A.ab,D.bmf],x.p)
D.ebc=new B.cC(A.aY,A.b5,A.j,A.m,null,A.p,null,0,D.cPD,null)
D.bvc=new B.ac(A.EF,22,A.cV,null,null,null)
D.eR1=new B.w("NGMY NEWS",null,H.a3S,null,null,null,null,null,null,null,null,null)
D.cxI=w([D.bvc,A.ab,D.eR1],x.p)
D.ebk=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cxI,null)
D.ebv=new B.oE(!1,!1,null,T.SO,null,A.bV,null,null,null)
D.a2U=new B.jB([D.cb,D.d8,D.th,D.G3,D.ti,D.aAh],B.aA("jB<hm>"))
D.dIR={title:0,quote:1,closing:2,bio:3}
D.ech=new B.fe(D.dIR,4,x.M)
D.dHi={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ecj=new B.fe(D.dHi,5,x.M)
D.dIo={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2V=new B.fe(D.dIo,8,x.M)
D.dHV={Design:0,Transitions:1,Insert:2}
D.ecn=new B.fe(D.dHV,3,x.M)
D.fbm=new B.jB([D.a1j],B.aA("jB<v7>"))
D.dI1={float3d:0,drift:1,pulse:2}
D.ecq=new B.fe(D.dI1,3,x.M)
D.aGX=new B.jB([D.G0,D.G1,D.G2],B.aA("jB<m4>"))
D.dHf={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aGZ=new B.fe(D.dHf,14,x.M)
D.fbn=new B.fe(A.io,0,B.aA("fe<v7>"))
D.dHZ={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Q7=new B.fe(D.dHZ,4,x.M)
D.dH9={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aH0=new B.fe(D.dH9,30,x.M)
D.dI6={circle:0,triangle:1,hexagon:2,diamond:3}
D.ecF=new B.fe(D.dI6,4,x.M)
D.eeM=new B.ap(390,844)
D.efv=new B.a3(20,20,A2.In,null)
D.aHM=new B.a3(null,2.5,null,null)
D.efF=new B.a3(18,18,A2.In,null)
D.bzA=new B.ac(A.iG,19,A.c,null,null,null)
D.efQ=new B.a3(38,38,D.bzA,null)
D.bxY=new B.ac(A.xd,22,A.c,null,null,null)
D.efS=new B.a3(40,40,D.bxY,null)
D.egp=new B.hI(2,10,10,1.15,null)
D.aHU=new B.hI(2,16,14,0.62,null)
D.biD=new B.L(32,30,32,40)
D.aZr=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bte=new B.ac(A.p1,56,D.aZr,null,null,null)
D.aaG=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.erW=new B.E(!0,D.aaG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new B.w("Your books will live here.",null,D.erW,null,A.L,null,null,null,null,null,null,null)
D.cHR=w([D.bte,A.T,D.eOh],x.p)
D.baQ=new B.fd(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cHR,null)
D.dMW=new B.B(D.biD,D.baQ,null)
D.egK=new B.lL(D.dMW,null)
D.eOe=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eh1=new B.aY(D.eOe,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eMs=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eh2=new B.aY(D.eMs,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eR3=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ehb=new B.aY(D.eR3,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRy=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ehq=new B.aY(D.eRy,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eLg=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ehD=new B.aY(D.eLg,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eXZ=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ehW=new B.aY(D.eXZ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVm=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ei6=new B.aY(D.eVm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRG=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eiN=new B.aY(D.eRG,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eGB=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ej2=new B.aY(D.eGB,null,null,null,null,null,null,null,A.i0,null,null,null,null,A.oS,!1,null,null,null,A.q,null)
D.eIj=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.ejk=new B.aY(D.eIj,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNX=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ejm=new B.aY(D.eNX,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNE=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ejn=new B.aY(D.eNE,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTu=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ejo=new B.aY(D.eTu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eD1=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ejx=new B.aY(D.eD1,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eJm=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ejU=new B.aY(D.eJm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eWS=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ejW=new B.aY(D.eWS,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eWu=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ek_=new B.aY(D.eWu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eC8=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ek1=new B.aY(D.eC8,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eSI=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eka=new B.aY(D.eSI,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eW4=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ekp=new B.aY(D.eW4,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVW=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ekr=new B.aY(D.eVW,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eC0=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ekx=new B.aY(D.eC0,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eFG=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekZ=new B.aY(D.eFG,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eV9=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.el9=new B.aY(D.eV9,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eFu=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.elo=new B.aY(D.eFu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b4t=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cwB=w([A.i6,A.nT,D.b4t,D.a89,A.i6],x.O)
D.elM=new B.fR(A.B,0,6.283185307179586,A.w,D.cwB,null,null)
D.cEB=w([A.bK,A.bR,A.ho,D.ze,A.bK],x.O)
D.aIt=new B.fR(A.B,0,6.283185307179586,A.w,D.cEB,null,null)
D.cR6=w([A.cd,A.bE,A.bc,A.bt,A.cV,A.cd],x.O)
D.elR=new B.fR(A.B,0,6.283185307179586,A.w,D.cR6,null,null)
D.cyp=w([A.oQ,A.nU,A.z3,A.i6,A.oQ],x.O)
D.elS=new B.fR(A.B,0,6.283185307179586,A.w,D.cyp,null,null)
D.cR0=w([A.aO,A.bP,A.aJ,A.aj,A.aO],x.O)
D.elT=new B.fR(A.B,0,6.283185307179586,A.w,D.cR0,null,null)
D.cXD=w([A.br,A.bc,A.bE,A.cd,A.br],x.O)
D.elV=new B.fR(A.B,0,6.283185307179586,A.w,D.cXD,null,null)
D.b4H=new B.x(1,0,1,1,A.t)
D.b_x=new B.x(1,1,0,1,A.t)
D.cUd=w([A.CF,A.a9C,H.a8L,D.b4H,H.a96,D.b_x,A.CF],x.O)
D.elW=new B.fR(A.B,0,6.283185307179586,A.w,D.cUd,null,null)
D.ema=new C.asR(2,"immersiveSticky")
D.emb=new C.asR(3,"edgeToEdge")
D.emc=new C.asR(4,"manual")
D.eol=new B.E(!0,A.nN,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIZ=new B.E(!0,A.fO,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoS=new B.E(!0,E.mr,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqe=new B.E(!0,A.al,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ere=new B.E(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ern=new B.E(!0,A.c3,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erI=new B.E(!0,A.eN,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esZ=new B.E(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et7=new B.E(!0,A.ja,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etk=new B.qZ(!0,A.Gl,null,null,null,null,A.dl,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.etN=new B.E(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euo=new B.E(!0,A.iU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euJ=new B.E(!0,A.aB,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dNq=new B.iD(1,1,0.7568627450980392,0.027450980392156862)
D.euN=new B.qZ(!0,D.dNq,null,null,null,null,A.dl,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9I=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJG=new B.E(!0,D.a9I,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euT=new B.E(!0,D.aaG,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euU=new B.E(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJI=new B.E(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evt=new B.qZ(!0,A.oj,null,null,null,null,A.dl,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.evM=new B.E(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.QT=new B.E(!0,A.aB,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewg=new B.E(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewi=new B.E(!0,D.a9I,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hd=new B.E(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewK=new B.E(!0,A.bR,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewS=new B.E(!0,A.bP,null,null,null,null,14,A.a1,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewV=new B.E(!0,A.bK,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exa=new B.E(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqJ,null,null,null)
D.exc=new B.E(!0,A.cN,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exe=new B.E(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exq=new B.E(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exB=new B.E(!0,A.dE,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ey8=new B.E(!0,A.aQ,null,null,null,null,null,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyh=new B.E(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyw=new B.E(!0,A.al,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKg=new B.E(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKi=new B.E(!0,A.c3,null,null,null,null,11.5,A.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8R=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eAe=new B.E(!0,D.b8R,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKq=new B.E(!0,E.mr,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAG=new B.E(!0,A.bP,null,null,null,null,11,A.a1,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAJ=new B.E(!0,O.kR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu_=new B.E(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBP=new B.w("NEW",null,D.eu_,null,null,null,null,null,null,null,null,null)
D.eC3=new B.w("Hati ya Kuhowesha",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eCs=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eCM=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eDq=new B.w("Big quote mark",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eDs=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eDD=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eE5=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eE6=new B.w("How many slides?",null,A.h7,null,null,null,null,null,null,null,null,null)
D.eED=new B.w("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eq1=new B.E(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEX=new B.w("Luxury FX",null,D.eq1,null,null,null,null,null,null,null,null,null)
D.eFe=new B.w("Font",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eFp=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.ezM=new B.E(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFD=new B.w("Example  GA847",null,D.ezM,null,null,null,null,null,null,null,null,null)
D.eG0=new B.w("Design shapes",null,A.ir,null,null,null,null,null,null,null,null,null)
D.eG8=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eGc=new B.w("Non-stop (loop)",null,A.h7,null,null,null,null,null,null,null,null,null)
D.eGp=new B.w("Hati ya Kuhoweya",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eGI=new B.w("Photo studio",null,A.fL,null,null,null,null,null,null,null,null,null)
D.eH7=new B.w("Add your picture",null,A.l7,null,null,null,null,null,null,null,null,null)
D.etl=new B.E(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH8=new B.w("Enter document code",null,D.etl,null,A.L,null,null,null,null,null,null,null)
D.eH9=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eHe=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.er3=new B.E(!0,E.mr,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHw=new B.w("Delete this book?",null,D.er3,null,A.L,null,null,null,null,null,null,null)
D.evj=new B.E(!0,E.mr,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIl=new B.w("Your library",null,D.evj,null,null,null,null,null,null,null,null,null)
D.eIp=new B.w("Delete",null,A.aJA,null,null,null,null,null,null,null,null,null)
D.eIr=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Al.Hb,null,null,null,null,null,null,null,null,null)
D.eIA=new B.w("Element flies in",null,A.aJM,null,null,null,null,null,null,null,null,null)
D.Ra=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eJf=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eJj=new B.w("Cancel",null,E.aJX,null,null,null,null,null,null,null,null,null)
D.eJl=new B.w("The lines and circles that come with the design",null,A.i1,null,null,null,null,null,null,null,null,null)
D.eyE=new B.E(!0,A.j9,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJL=new B.w("DOCUMENT CODE",null,D.eyE,null,null,null,null,null,null,null,null,null)
D.eKu=new B.w("Quotes",null,G.a4t,null,null,null,null,null,null,null,null,null)
D.esM=new B.E(!0,O.kR,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKC=new B.w("Add a picture",null,D.esM,null,null,null,null,null,null,null,null,null)
D.eKJ=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,Q.aJB,null,A.L,null,null,null,null,null,null,null)
D.eKM=new B.w("Look & feel",null,A.h7,null,null,null,null,null,null,null,null,null)
D.eKQ=new B.w("Rings",null,A.jr,null,null,null,null,null,null,null,null,null)
D.eKV=new B.w("W",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eL4=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eLl=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4d,null,A.L,null,null,null,null,null,null,null)
D.eLn=new B.w("Write your book",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eM3=new B.w("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eMg=new B.w("Malipo ya Awamu ya Mahari",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eta=new B.E(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMt=new B.w("Create with AI",null,D.eta,null,A.L,null,null,null,null,null,null,null)
D.eMV=new B.w("Apply look",null,A.jr,null,null,null,null,null,null,null,null,null)
D.etS=new B.E(!0,A.eY,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNG=new B.w("Type your presentation below",null,D.etS,null,A.L,null,null,null,null,null,null,null)
D.eNJ=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aKt,null,A.L,null,null,null,null,null,null,null)
D.eNL=new B.w("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.ep4=new B.E(!0,A.cK,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNS=new B.w("Done",null,D.ep4,null,null,null,null,null,null,null,null,null)
D.eOa=new B.w("Delete",null,A.mT,null,null,null,null,null,null,null,null,null)
D.eOj=new B.w("Hati ya Kiapo cha Uongozi",null,A.h8,null,null,null,null,null,null,null,null,null)
D.esb=new B.E(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP8=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.esb,null,A.L,null,null,null,null,null,null,null)
D.ePt=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new B.w("Layout",null,A.R_,null,null,null,null,null,null,null,null,null)
D.eQ9=new B.w("Print",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eQc=new B.w("X",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eQL=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aj.a47,null,null,null,null,null,null,null,null,null)
D.eRf=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.eRq=new B.w("Hati ya Kuhowa",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eRs=new B.w("Choose a class template",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eRu=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.i1,null,null,null,null,null,null,null,null,null)
D.eRA=new B.w("Download the newspaper picture",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRL=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.eRS=new B.w("Done",null,A.aKf,null,null,null,null,null,null,null,null,null)
D.eS0=new B.w("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eS1=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.eSe=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,H.aJh,null,null,null,null,null,null,null,null,null)
D.eT4=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.eT5=new B.w("What would you like to do?",null,D.aJG,null,null,null,null,null,null,null,null,null)
D.eT9=new B.w("Delete",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eTB=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.eTF=new B.w("Hati (Documents)",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eTR=new B.w("Done",null,A.kK,null,null,null,null,null,null,null,null,null)
D.ezD=new B.E(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTV=new B.w("Delete presentation?",null,D.ezD,null,A.L,null,null,null,null,null,null,null)
D.eUb=new B.w("After the last slide it starts again from the first",null,A.i1,null,null,null,null,null,null,null,null,null)
D.eUl=new B.w("\ud83c\udf33",null,A.H8,null,A.L,null,null,null,null,null,null,null)
D.eUD=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.i1,null,null,null,null,null,null,null,null,null)
D.eUK=new B.w("Transfer document",null,A.or,null,null,null,null,null,null,null,null,null)
D.eUU=new B.w("Add to the slides",null,A.h7,null,null,null,null,null,null,null,null,null)
D.eVd=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.eVs=new B.w("Make a book",null,I.aJf,null,null,null,null,null,null,null,null,null)
D.eVw=new B.w("Books",null,A.cq,null,null,null,null,null,null,null,null,null)
D.esH=new B.E(!0,A.aj,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new B.w("Keep this page open until it finishes.",null,D.esH,null,null,null,null,null,null,null,null,null)
D.eVA=new B.w("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eVF=new B.w("LANGUAGE",null,D.QT,null,null,null,null,null,null,null,null,null)
D.eVM=new B.w("Use this ending",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eVU=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new B.w("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eWb=new B.w("Delete from the database?",null,A.l7,null,null,null,null,null,null,null,null,null)
D.eWc=new B.w("H",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eWy=new B.w("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.eWX=new B.w("Cover",null,D.aKq,null,null,null,null,null,null,null,null,null)
D.eX0=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.eX1=new B.w("Each page becomes its own slide you can present",null,A.i1,null,null,null,null,null,null,null,null,null)
D.eXm=new B.w("Y",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eXx=new B.w("Crop the picture",null,A.kK,null,null,null,null,null,null,null,null,null)
D.eXC=new B.w("Edit text",null,A.H9,null,null,null,null,null,null,null,null,null)
D.eZL=B.dM("a68")
D.BW=new C.au9(0,"none")
D.aLY=new C.au9(1,"zipCrypto")
D.aLZ=new C.au9(2,"aes")
D.f14=new F.Nw("","",null)
D.f2a=new C.b8v(null)
D.f3g=new C.Xt(null)
D.f4l=new C.aaT(null)
D.f4n=new C.aBa(null)
D.f78=new C.YH(null)
D.f7o=new C.Zc(null)
D.f7H=new C.bpM(null)})();(function staticFields(){$.fTU=null
$.fTV=null
$.fTW=null
$.fTX=null
$.fCt=B.uj("_lastQuoRemDigits")
$.fCu=B.uj("_lastQuoRemUsed")
$.auu=B.uj("_lastRemUsed")
$.fCv=B.uj("_lastRem_nsh")
$.pC=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a4Z=B.R(x.N,x.I)
$.fA3=!1
$.fYB=B.R(B.aA("kB"),x.N)
$.fYN=B.R(B.aA("kB"),x.E)
$.fWP=!1
$.bvj="q"
$.Ou=0
$.Bo=B.R(x.N,B.aA("al<yq>"))
$.fXb=!1
$.fE2=!1
$.h2i=null
$.hvU=B.R(x.N,B.aA("au<n?>"))
$.IH=""
$.iO=0
$.fQI=function(){var w=x.N
return B.R(w,w)}()
$.fQH=B.R(x.N,x.R)
$.fEn=!1
$.adv=B.R(x.N,x.E)
$.fF9=0
$.bgs=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hUi","BJ",()=>C.b61(0))
w($,"hUg","a0t",()=>C.b61(1))
w($,"hUh","h5O",()=>C.b61(2))
w($,"hUf","fIM",()=>$.a0t().ud(0))
w($,"hUd","h5M",()=>C.b61(1e4))
w($,"hUe","h5N",()=>B.CQ(8))
w($,"hQ5","h3P",()=>B.CQ(0))
w($,"hQd","h3T",()=>B.CQ(0))
w($,"hQc","h3S",()=>B.bSE(0))
w($,"hXW","h7N",()=>{var v,u,t=x.N
t=B.R(t,t)
for(v=D.a09.gdH(D.a09),v=v.gaf(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hYl","bzI",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mr(new C.flN(),v,"biz_plan_blue","Business Plan",B.a([B.aX(u),B.aX(t)],h)),C.mr(new C.flO(),v,"exec_summary","Executive",B.a([B.aX(s),B.aX(t)],h)),C.mr(new C.flP(),v,"teal_corporate","Teal Corp",B.a([B.aX(r),B.aX(4279310375)],h)),C.mr(new C.fm_(),q,"geometric_overlap","Geometric",B.a([B.aX(4279203438),B.aX(u)],h)),C.mr(new C.fm4(),p,"midnight_cyan","Midnight Cyan",B.a([B.aX(o),B.aX(n)],h)),C.mr(new C.fm5(),q,"diagonal_hero","Diagonal Hero",B.a([B.aX(m),B.aX(l)],h)),C.mr(new C.fm6(),v,"swot_grid","SWOT Grid",B.a([B.aX(u),B.aX(4278556265)],h)),C.mr(new C.fm7(),v,"layered_chevrons","Chevrons",B.a([B.aX(4280172719),B.aX(k)],h)),C.mr(new C.fm8(),q,"split_triangle","Split Panel",B.a([B.aX(s),B.aX(t)],h)),C.mr(new C.fm9(),v,"corporate_navy","Navy Pro",B.a([B.aX(4278982953),B.aX(4282090230)],h)),C.mr(new C.fma(),p,"cyan_slash","Cyan Slash",B.a([B.aX(o),B.aX(4278630100)],h)),C.mr(new C.flQ(),p,"crimson_impact","Crimson",B.a([B.aX(4282714634),B.aX(4292617766)],h)),C.mr(new C.flR(),q,"ocean_waves","Ocean Waves",B.a([B.aX(4278413729),B.aX(4286436348)],h)),C.mr(new C.flS(),p,"mono_geometric","Mono Geo",B.a([B.aX(o),B.aX(n)],h)),C.mr(new C.flT(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aX(4280031511),B.aX(4293571336)],h)),C.mr(new C.flU(),q,"hex_infographic","Hex Stack",B.a([B.aX(r),B.aX(4284410580)],h)),C.mr(new C.flV(),q,"photo_banner","Photo Banner",B.a([B.aX(m),B.aX(4281908728)],h)),C.mr(new C.flW(),v,"process_steps","Process",B.a([B.aX(s),B.aX(k)],h)),C.mr(new C.flX(),"Minimal","grid_modern","Grid Modern",B.a([B.aX(l),B.aX(t)],h)),C.mr(new C.flY(),"Luxury","platinum_frame","Platinum",B.a([B.aX(4282865001),B.aX(4293060848)],h)),C.mr(new C.flZ(),v,"agenda_cards","Agenda Cards",B.a([B.aX(u),B.aX(4292602622)],h)),C.mr(new C.fm0(),q,"headline_orange","Headline Orange",B.a([B.aX(j),B.aX(i)],h)),C.mr(new C.fm1(),q,"infographic_teal","Infographic",B.a([B.aX(r),B.aX(j)],h)),C.mr(new C.fm2(),q,"content_year","Year Feature",B.a([B.aX(j),B.aX(t)],h)),C.mr(new C.fm3(),q,"photo_cta","Photo CTA",B.a([B.aX(m),B.aX(i)],h))],B.aA("M<Dg>"))})
w($,"hXZ","h7P",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["mjXeiK25drrwq/SozqP7YAeyXu0="]=a.current})($__dart_deferred_initializers__);