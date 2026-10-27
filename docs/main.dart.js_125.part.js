((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,U,A4,Ae,Af,A5,Ag,Ah,C={
te(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fFM(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Il(d){var w
if(d===0)return $.C_()
if(d===1)return $.a0O()
if(d===2)return $.h9i()
if(Math.abs(d)<4294967296)return C.b6L(A.o.N(d))
w=C.htO(d)
return w},
b6L(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.te(4,w)
return new C.nx(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.te(1,w)
return new C.nx(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.az(d,16)
v=C.te(2,w)
return new C.nx(v===0?!1:s,w,v)}v=A.o.al(A.o.gahv(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.al(d,65536)}v=C.te(v,w)
return new C.nx(v===0?!1:s,w,v)},
htO(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.R(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.C_()
w=$.h9h()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kT(A.aG.gaN(w))
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
q=new C.nx(!1,r,4)
if(s<0)p=q.lW(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fFN(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fXo(d,e,f,g){var w,v,u,t,s,r=A.o.al(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fp(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fXj(d,e,f,g){var w,v,u,t,s=A.o.al(f,16)
if(A.o.F(f,16)===0)return C.fFN(d,e,s,g)
w=e+s+1
C.fXo(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
htR(d,e,f,g){var w,v,u,t,s=A.o.al(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fp(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fp(u,r)}w&2&&B.ah(g)
g[n]=o},
czv(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
htP(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6M(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.az(v,16)&1)}},
fXp(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.al(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.al(r,65536)}},
htQ(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ee((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nx:function nx(d,e,f){this.a=d
this.b=e
this.c=f},
czw:function czw(){},
czx:function czx(){},
czy:function czy(d,e){this.a=d
this.b=e},
czz:function czz(d){this.a=d},
aOy:function aOy(d,e){this.a=d
this.b=e},
fNq(d,e,f){var w=new C.Qa(d,A.o.al(Date.now(),1000),e)
w.Q=f
return w},
Qa:function Qa(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1Z:function a1Z(d,e){this.a=d
this.b=e},
bE8:function bE8(d){this.a=d
this.c=this.b=0},
hcu(){return new C.bCu()},
bCu:function bCu(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
crG:function crG(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
htw(d,e,f){var w,v,u,t,s
if(d.gai(d))return new Uint8Array(0)
w=new Uint8Array(B.cn(d.gcNT(d)))
v=f*2+2
u=C.fV3(C.fV5(),64)
t=new C.ccr(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ccs(e,1000,v)
s=new Uint8Array(v)
return A.aG.dt(s,0,t.cBQ(w,0,s,0))},
crE:function crE(d,e){this.c=d
this.d=e},
auC:function auC(d,e){this.a=d
this.b=e},
crH:function crH(d,e,f,g){var _=this
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
b5s:function b5s(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
crF:function crF(){this.a=$},
fWP(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hcd(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bB4:function bB4(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fLb(d,e){e&=31
return(d&$.pG[e])<<e>>>0},
n4(d,e){e&=31
return(d>>>e|C.fLb(d,32-e))>>>0},
fV4(d){var w,v=new C.aqn()
if(B.iA(d))v.aGA(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fV5(){var w=C.fV4(0),v=new Uint8Array(4),u=x.S
u=new C.cct(w,v,A.CM,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.l7(0)
return u},
fV3(d,e){var w=new C.ccp(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cco:function cco(){},
ccs:function ccs(d,e,f){this.a=d
this.b=e
this.c=f},
ccm:function ccm(){},
aqm:function aqm(d){this.a=d},
ccr:function ccr(d){this.a=$
this.b=d
this.c=$},
ccn:function ccn(){},
ccl:function ccl(){},
aqn:function aqn(){this.b=this.a=$},
ccq:function ccq(){},
cct:function cct(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ccp:function ccp(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cck:function cck(){},
ccj:function ccj(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bK4:function bK4(){},
bK5:function bK5(d){this.a=d},
hwI(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b70:function b70(){},
bKY:function bKY(d,e){this.a=d
this.b=!1
this.c=e},
bKZ:function bKZ(){},
hFp(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
atg(d){var w=0,v=B.j(x.H),u
var $async$atg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eC3?2:4
break
case 2:w=5
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$atg)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jR.fM("SystemChrome.setEnabledSystemUIOverlays",C.hFp(null),u),$async$atg)
case 6:case 3:return B.h(null,v)}})
return B.i($async$atg,v)},
atj:function atj(d,e){this.a=d
this.b=e},
a6x:function a6x(d){this.a=d},
fBN(d,e){return new C.aSQ(e,d,null)},
aSQ:function aSQ(d,e,f){this.e=d
this.c=e
this.a=f},
ay5:function ay5(d,e,f,g,h){var _=this
_.ad=d
_.ag=e
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
hI_(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fcG(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bz(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fcG:function fcG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
alh(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$alh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.aeK("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$alh)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d6(s,x.f)
t=B.cB(t,new C.bV4(),t.$ti.k("G.E"),x.P)
r=B.A(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bV5())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alh,v)},
alj(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$alj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alh(),$async$alj)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aU(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.P(Date.now(),0,!1).a4().ab()
p=m.a
k=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n3("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$alj)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bg<2>")
s=B.A(new B.bg(s,r),r.k("G.E"))
w=10
return B.b(B.n3("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],t,q),null),$async$alj)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$alj,v)},
bV6(d){return C.hhS(d)},
hhS(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bV6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aeK("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hB),$async$bV6)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Ue(B.a_(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a6(m)
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
return B.i($async$bV6,v)},
ali(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ali=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.alh(),$async$ali)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n5(r,new C.bV7(d))
w=4
return B.b(B.n3("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],x.N,x.z),null),$async$ali)
case 4:t=f
w=t?5:6
break
case 5:s=B.ae("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aMA("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$ali)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ali,v)},
bV4:function bV4(){},
bV5:function bV5(){},
bV7:function bV7(d){this.a=d},
hRK(d,e,f){return B.c1(A.K,null,new C.fs2(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fs2:function fs2(d,e,f){this.a=d
this.b=e
this.c=f},
a_1:function a_1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGo:function aGo(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eT2:function eT2(d){this.a=d},
eT3:function eT3(d){this.a=d},
eT4:function eT4(d,e,f){this.a=d
this.b=e
this.c=f},
eT_:function eT_(d){this.a=d},
eT0:function eT0(d){this.a=d},
eT1:function eT1(d,e){this.a=d
this.b=e},
eSU:function eSU(d){this.a=d},
eSS:function eSS(d){this.a=d},
eST:function eST(d){this.a=d},
eSV:function eSV(d){this.a=d},
eSW:function eSW(d){this.a=d},
eT8:function eT8(d,e){this.a=d
this.b=e},
eT7:function eT7(d,e){this.a=d
this.b=e},
eSY:function eSY(d,e,f){this.a=d
this.b=e
this.c=f},
eSX:function eSX(d,e,f){this.a=d
this.b=e
this.c=f},
eT5:function eT5(d,e){this.a=d
this.b=e},
eT6:function eT6(d,e){this.a=d
this.b=e},
eTb:function eTb(d){this.a=d},
eTc:function eTc(d,e){this.a=d
this.b=e},
eTa:function eTa(d,e){this.a=d
this.b=e},
eT9:function eT9(){},
fZL(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aF(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d6(w,x.f)
v=B.cB(v,new C.f_a(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a5<G.E>")
v=B.A(new B.a5(v,new C.f_b(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0_(d){return C.hJc(d)},
hJc(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.feU(n)
t=4
j=m
i=C
w=7
return B.b(B.a0z("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0_)
case 7:j.$1(i.fZL(f))
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
return B.b(B.ax(),$async$a0_)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fZL(B.aS(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bg<2>")
o=p.k("a5<G.E>")
j=B
i=B
h=new B.bg(n,p)
g=C
w=13
return B.b(C.f_j(d),$async$a0_)
case 13:p=j.A(new i.a5(h,new g.feS(f),o),o.k("G.E"))
A.d.b_(p,new C.feT())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0_,v)},
afj(d,e){return C.hRp(d,e)},
hRp(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$afj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b5(e,new C.frA(),x.P)
n=B.A(n,n.$ti.k("ai.E"))
r=A.R.am(n,null)
q=!1
t=4
w=7
return B.b(B.afb("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afj)
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
return B.b(B.ax(),$async$afj)
case 12:p=g
w=13
return B.b(p.ap("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$afj)
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
return B.i($async$afj,v)},
f_j(d){return C.hy4(d)},
hy4(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f_j=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$f_j)
case 7:r=f
q=r.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kp(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.b_(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f_j,v)},
aea(d,e){return C.hHS(d,e)},
hHS(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aea=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aea)
case 6:s=g
r=B.b_(x.N)
q=s.rn("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fU(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.A(q,B.a2(q).k("cm.E"))
w=7
return B.b(s.ap("StringList","ngmy_books_deleted_v1_"+r,q),$async$aea)
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
return B.b(C.a0_(d),$async$aea)
case 8:n=g
J.n5(n,new C.fcm(e))
w=9
return B.b(C.afj(d,n),$async$aea)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aea,v)},
hRP(d,e){return B.a8(d,!1).cp(B.eE(new C.fso(e),!0,null,x.H))},
htT(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.ea(w.d,new C.cAS())},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
f_a:function f_a(){},
f_b:function f_b(){},
feU:function feU(d){this.a=d},
feS:function feS(d){this.a=d},
feT:function feT(){},
frA:function frA(){},
fcm:function fcm(d){this.a=d},
fso:function fso(d){this.a=d},
WP:function WP(d,e){this.c=d
this.a=e},
av9:function av9(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cAS:function cAS(){},
cAU:function cAU(d,e){this.a=d
this.b=e},
cAX:function cAX(d){this.a=d},
cAY:function cAY(d){this.a=d},
cAW:function cAW(){},
cAZ:function cAZ(d,e){this.a=d
this.b=e},
cAV:function cAV(d){this.a=d},
cB_:function cB_(){},
cAT:function cAT(d,e){this.a=d
this.b=e},
cB0:function cB0(){},
cAO:function cAO(d){this.a=d},
cAM:function cAM(d){this.a=d},
cAN:function cAN(d){this.a=d},
cAP:function cAP(d,e){this.a=d
this.b=e},
cAL:function cAL(d){this.a=d},
cAK:function cAK(d){this.a=d},
cAI:function cAI(d,e){this.a=d
this.b=e},
cAJ:function cAJ(d){this.a=d},
cAR:function cAR(){},
cAQ:function cAQ(d){this.a=d},
cAH:function cAH(d,e){this.a=d
this.b=e},
cAG:function cAG(d,e){this.a=d
this.b=e},
cAF:function cAF(d,e){this.a=d
this.b=e},
cB1:function cB1(d){this.a=d},
WN:function WN(d,e,f){this.c=d
this.d=e
this.a=f},
aCj:function aCj(d,e,f){this.a=d
this.b=e
this.c=f},
av5:function av5(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cA8:function cA8(d){this.a=d},
cA7:function cA7(d){this.a=d},
cAa:function cAa(d,e,f){this.a=d
this.b=e
this.c=f},
cAi:function cAi(){},
cAj:function cAj(d){this.a=d},
cAb:function cAb(d,e,f){this.a=d
this.b=e
this.c=f},
cA9:function cA9(d,e){this.a=d
this.b=e},
cAd:function cAd(d,e){this.a=d
this.b=e},
cAe:function cAe(d,e){this.a=d
this.b=e},
cAf:function cAf(d,e){this.a=d
this.b=e},
cAc:function cAc(d){this.a=d},
cAh:function cAh(d){this.a=d},
cAg:function cAg(d,e){this.a=d
this.b=e},
cAo:function cAo(d){this.a=d},
cAk:function cAk(d,e){this.a=d
this.b=e},
cAl:function cAl(d,e){this.a=d
this.b=e},
cAm:function cAm(d,e){this.a=d
this.b=e},
cAn:function cAn(d,e){this.a=d
this.b=e},
av7:function av7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hLx(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ec(v,x.cK).bw(new C.fjq(),x.H).eN(new C.fjr())}}else if(s)C.h0a()}catch(t){}},
h0a(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ec(v,x.cK).eN(new C.f3x())}catch(u){}},
hLA(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fjq:function fjq(){},
fjr:function fjr(){},
f3x:function f3x(){},
h4E(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e3(v,w,"").split(":"))},
h4B(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kN)return null
return A.a.aY(w,14)},
fJW(d){var w
if(d.b!==D.kN)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aY(w,21)},
hM_(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h4F(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hLV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ae("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ae("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ae("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kw(0,f)
t=x.N
u=B.cB(u,new C.fkp(),B.a2(u).k("G.E"),t)
s=B.A(u,B.a2(u).k("G.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kw(0,f),u=new B.Ik(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PS(A.a.an(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PS(A.a.aY(f,q)):p)+"\\.?$"
l=B.ae(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cA(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hLT(d,e){var w,v,u,t,s,r=B.a2(e).k("cw<1>"),q=B.A(new B.cw(e,r),r.k("G.E"))
A.d.b_(q,new C.fko())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aNx(w,u,s,0)}return w},
hLX(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a0G:$.hbh(),s=x.N,r=B.T(s,s)
for(s=t.gdL(t),s=s.gah(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
h4C(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f0a(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h4E(q)===e)return q}return null},
hLY(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aY(v,u)
return A.d.gL(D.Fk).a},
hLZ(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ac6(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ac6(0,0,0)
v=C.f0a(b6,b0)
u=C.f0a(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hLX(b2,C.hLV(C.h4C(b2),v.r))
if(s.a!==0){u.r=C.hLT(C.h4C(b4),s)
t=s.a}}r=B.b_(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h4E(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.eg(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f0a(b6,n)
i=C.f0a(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fJW(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h4B(a8)===a0||C.fJW(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pk(a1,new C.fkv(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iT
$.iT=a9+1
A.d.K(a1,new C.eB(""+1000*a6+"_"+a9,D.kN,a2,a3,a4,a5,"",24,A.a4,A.bi,A.aB,4279310375,A.bf,d.at,D.bc,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ce,0,"","","","","",!1,0));++e}b5.f=new B.P(Date.now(),0,!1)
return new B.ac6(k,t,e)},
hLU(d){var w=C.hLY(d)
if(d.w==="hati_kuhowa")return C.h3Z("",w)
return C.h3Y("",w)},
fkp:function fkp(){},
fko:function fko(){},
fkv:function fkv(d){this.a=d},
h_U(){var w=new B.P(Date.now(),0,!1),v=new C.f2A()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bE(w)))+"/"+B.bv(w)},
fK3(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fln(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kN&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h4S(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fln(d)
w=B.bh(u)
if(w==null)return!C.fln(d)
return new B.P(Date.now(),0,!1).a4().cV(w.a4().bM(18e9))},
hMF(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.P(Date.now(),0,!1).a4().ab()},
hlS(d){return A.a.i(d).toLowerCase()},
anq(d){return C.hlU(d)},
hlU(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$anq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$anq)
case 7:r=f
p=r.rn("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hQa(),B.U(o).k("J<1,n>")).bX(0,new C.c4D())
o=B.d8(o,o.$ti.k("G.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.b_(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$anq,v)},
anp(d,e){return C.hlT(d,e)},
hlT(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.anq(d),$async$anp)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anp)
case 8:q=g
w=9
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pP(r)),$async$anp)
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
return B.i($async$anp,v)},
anr(d,e){return C.hlV(d,e)},
hlV(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$anr=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.anq(d),$async$anr)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.ax(),$async$anr)
case 8:q=g
w=9
return B.b(q.ap("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pP(r)),$async$anr)
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
return B.i($async$anr,v)},
Ty(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ty=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fDh&&!a5){w=1
break}t=4
w=7
return B.b(B.ax(),$async$Ty)
case 7:r=a7
q=B.aS(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aF(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jl(p),d=d.gah(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.Ue(B.a_(f.a(n.b),e,a0)))}$.a5m=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a6(a2)
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
return B.b(B.bY(),$async$Ty)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tt("civic_hati_kiapo_uongozi",null,A.ed),$async$Ty)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jl(f.a(J.q(l,"byState"))),e=e.gah(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.Ue(B.a_(f.a(j.b),o,d)))}for(o=k,o=new B.cR(o,B.a2(o).k("cR<1,2>")).gah(0);o.C();){f=o.d
f.toString
i=f
h=$.a5m.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbm())f=d===e.gbm()&&f.b<e.gct()
else f=!0
f=!f}else f=!0
if(f)$.a5m.n(0,i.a,i.b)}w=20
return B.b(C.ans(),$async$Ty)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a6(a3)
$.al.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fDh=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ty,v)},
ans(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$ans=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$ans)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a5m,o=new B.cR(o,B.a2(o).k("cR<1,2>")).gah(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ac())}w=7
return B.b(s.ap("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.am(r,null)),$async$ans)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a6(l)
$.al.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ans,v)},
aXh(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aXh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ty(!1),$async$aXh)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a5m.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.byD(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXh,v)},
a5n(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a5n=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.P(Date.now(),0,!1)
o=a1.hs()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a5m.n(0,d,o)
$.fDh=!0
w=3
return B.b(C.ans(),$async$a5n)
case 3:w=4
return B.b(B.bY(),$async$a5n)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a5m,n=new B.cR(n,B.a2(n).k("cR<1,2>")).gah(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ac())}w=9
return B.b(B.n3("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.P(Date.now(),0,!1).a4().ab()],e,x.z),null),$async$a5n)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a6(a0)
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
return B.i($async$a5n,v)},
ant(d){var w=0,v=B.j(x.T),u,t,s
var $async$ant=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hR().a3p(A.eD),$async$ant)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f8(),$async$ant)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aXg(t,d),$async$ant)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ant,v)},
aXg(d,e){return C.hlW(d,e)},
hlW(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aXg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bY(),$async$aXg)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ae("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aI(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eO().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hW("media")
w=8
return B.b(p.w8(q,new Uint8Array(B.cn(d)),D.boD),$async$aXg)
case 8:n=p.BA(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a6(k)
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
return B.i($async$aXg,v)},
Jb(d,e,f,g,h,i,j,k,l,m,n){var w=C.cA()
return C.ej(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.ce,D.cP,l,m,n)},
f1Q(d,e,f,g,h,i,j,k,l){var w=C.cA()
return C.ej(A.bf,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ce,D.eW,j,k,l)},
fHe(d,e,f,g,h,i,j,k){var w=C.cA(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ej(h,!1,j,A.aB,"marriage_field_"+d+":"+A.k.a8(g,3),4280640491,i,A.cA,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.ce,D.cP,g,e,f)},
f1o(d,e,f,g){return C.f1Q(0,0.002,D.fm,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fHf(d,e,f,g,h,i,j,k){var w=C.cA()
return C.ej(A.pM,!1,j,A.aB,"marriage_field_"+d+":"+A.k.a8(g,3),4280640491,i,A.bi,A.a4,"",h,w,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.ce,D.cP,g,e,f)},
h_T(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gL(A.a.e3(v,w,"").split(":"))},
byD(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.h_T(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kN&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fJA(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.AH(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.h_T(m)
if(l!=null&&r.ak(0,l)){o=r.h(0,l)
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
A.d.bo(a1.z,new C.fjo(a2))}else A.d.bo(a1.z,new C.fjp())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fln(a0))a0.ax=a6.f.a4().ab()
return a0},
fJA(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fma(D.a1G),l=C.cA(),k=x.u,j=B.a([C.ej(A.bf,!1,s,A.aB,"marriage_locked_bg",r,24,A.bi,A.a4,"",1,C.cA(),m,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.ce,D.lb,1,0,0)],k),i=B.a([],k)
i.push(C.Jb("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Jb("TAREHE:",A.bf,o,16,A.bi,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fHe("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.h_U()))
i.push(C.f1o(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Jb("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Jb("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cA,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f1Q(0,0.002,D.fm,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fHf("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fHf("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fHf("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f1Q(268435456,0.175,D.bc,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Jb("VIDEO YA KIAPO",A.bf,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ej(A.bf,!1,s,A.aB,"__kiapo_video__",r,24,A.bi,A.a4,"",0.131,C.cA(),t,"","",0,!1,"",0,D.bc,q,2,"",0,0,"",D.ce,D.lb,0.77,0.115,0.492))
i.push(C.Jb("Rais Anayeapa:",A.bf,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Jb("Jina:",A.bf,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fHe("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.f1o(0.195,0.7130000000000001,0.62,n))
i.push(C.Jb("Sahihi:",A.bf,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ej(A.bf,!1,s,A.aB,"marriage_sign_rais",0,24,A.bi,A.a4,"",0.07,C.cA(),t,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.ce,D.eW,0.38,0.21500000000000002,0.73))
i.push(C.f1o(0.21500000000000002,0.795,0.38,n))
i.push(C.Jb("Tarehe:",A.bf,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fHe("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.h_U()))
i.push(C.f1o(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f1Q(0,0.032,D.bc,o,1,"state_box",0.72,0.14,0.875),C.Jb("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qZ(4294967035,t,0,0,j,l,D.pB,"","",u,D.dc)
return C.AH(t,t,t,t,D.nH,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cA(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aek(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aek=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.P(D.ewT)
w=1
break}w=3
return B.b(C.Ty(!0),$async$aek)
case 3:w=4
return B.b(C.aXh(p),$async$aek)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h4S(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c1(D.b4o,null,new C.fef(p),f,!0,!0,!1,A.lc,!1,!1,x.N),$async$aek)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.feg(),f,null,!0,!0,x.y),$async$aek)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fJA(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.P(B.b1(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fJA(p))
case 1:return B.h(u,v)}})
return B.i($async$aek,v)},
f2A:function f2A(){},
c4D:function c4D(){},
fjo:function fjo(d){this.a=d},
fjp:function fjp(){},
fef:function fef(d){this.a=d},
fed:function fed(d){this.a=d},
fee:function fee(d){this.a=d},
feg:function feg(){},
feb:function feb(d){this.a=d},
fec:function fec(d){this.a=d},
anY:function anY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB8:function aB8(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dZw:function dZw(d){this.a=d},
dZu:function dZu(d){this.a=d},
dZv:function dZv(d){this.a=d},
dZx:function dZx(d){this.a=d},
dZy:function dZy(d){this.a=d},
vS(d,e,f,g,h,i,j,k,l,m,n){var w=C.cA()
return C.ej(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.bc,4280172719,2,d,0,0,"",D.ce,D.cP,l,m,n)},
h_x(d,e,f){var w=4291404327
return B.a([C.pF(0,f,D.eG,w,2,"ring_l",f,d-f*0.42,e),C.pF(0,f,D.eG,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f0P(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pF(4294967288,f,D.eG,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pF(h,s,D.eG,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pF(h,f*0.46,D.eG,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pF(d,e,f,g,h,i,j,k,l){var w=C.cA()
return C.ej(A.bf,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ce,D.eW,j,k,l)},
f0O(d,e,f,g,h,i,j,k,l){var w=C.cA(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ej(h,!1,k,A.aB,i?u+A.k.a8(g,3)+":"+A.o.a8(j,1):u+A.k.a8(g,3),4280640491,j,A.cA,A.O,"",v,w,null,"","",0,!1,"",0,D.bc,4280172719,2,l,0,0,"",D.ce,D.cP,g,e,f)},
bw5(d,e,f,g){return C.pF(0,0.002,D.fm,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h_w(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pF(0,0.036,D.bc,h,1.4,"banner_box_"+d,w,v,e),C.vS(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h4D(){var w=new B.P(Date.now(),0,!1),v=new C.fku()
return B.t(v.$1(B.bO(w)))+"/"+B.t(v.$1(B.bE(w)))+"/"+B.bv(w)},
h_y(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vS(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f0O("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bw5(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vS("Sahihi:",A.bf,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ej(A.bf,!1,4279310375,A.aB,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a4,"",0.05,C.cA(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.ce,D.eW,s,t,g-0.004),C.bw5(t,g+0.044,s,w)],x.u)},
aeM(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cXp,D.c4h,D.cQS,D.cSy],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gah(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fGz(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fma(d.d),v=B.a([C.ej(A.bf,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cA(),w,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.lb,1,0,0)],x.u)
A.d.v(v,C.hAq(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hAq(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vS("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h_x(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h_x(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f0P(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f0P(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vS("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pF(0,0.062,D.eG,b1,1.6,"crest_o",0.11,0.445,0.012),C.pF(0,0.046,D.eG,b1,1,"crest_i",0.084,0.458,0.02),C.vS("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pF(0,0.002,D.fm,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pF(b9,0.016,D.kO,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pF(0,0.002,D.fm,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vS("TAREHE:",A.bf,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f0O("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h4D()),C.bw5(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vS(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pF(c0,0.0026,D.bc,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pF(c3.e,0.138,D.bc,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cA()
c2.push(C.ej(A.bf,!1,b9,A.aB,"marriage_field_utangulizi:"+A.k.a8(0.82,3),b2,19,A.bi,A.cq,"",0.128,s,a9,"","",0,!1,"",0,D.bc,b3,2,c5,0,0,"",D.ce,D.cP,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pF(0,0.036,D.bc,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cA()
A.d.v(c2,B.a([s,C.ej(A.L,!1,c0,A.aB,"marriage_field_nimetowe_label:"+A.k.a8(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bc,b3,2,c7,0,0,"",D.ce,D.cP,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h_w(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vS(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f0O("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iT
$.iT=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iT
$.iT=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eB(""+1000*i+"_"+h,D.cP,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.aB,c0,A.bf,a9,D.bc,b2,b3,2,0,!1,s,0,D.ce,0,"","","","","",!1,0),j,new C.eB(""+1000*f+"_"+e,D.eW,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bi,A.aB,b6,A.bf,a9,D.fm,0,b5,0.8,0,!1,g,0,D.ce,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iT
$.iT=p+1
i=Date.now()
h=$.iT
$.iT=h+1
g=Date.now()
f=$.iT
$.iT=f+1
e=Date.now()
a3=$.iT
$.iT=a3+1
A.d.v(d,B.a([new C.eB(""+1000*s+"_"+p,D.cP,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.aB,b7,A.dJ,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ce,0,"","","","","",!1,0),new C.eB(""+1000*i+"_"+h,D.eW,a1,a2,0.046,0.025875,"",24,A.a4,A.bi,A.aB,b6,A.bf,a9,D.bc,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ce,0,"","","","","",!1,0),new C.eB(""+1000*g+"_"+f,D.cP,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.aB,b7,A.L,a9,D.bc,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ce,0,"","","","","",!1,0),new C.eB(""+1000*e+"_"+a3,D.eW,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bi,A.aB,b6,A.bf,a9,D.bc,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ce,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h_w("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a1v||w===D.a1x||w===D.a1u||w===D.a1w){w=t-0.008
A.d.v(c2,C.f0P(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f0P(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pF(0,a4,D.bc,c0,1.3,"wit_table_border",0.82,0.09,t),C.pF(c0,a4,D.bc,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pF(0,0.0022,D.fm,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vS("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vS("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h_y("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h_y("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pF(0,0.11,D.bc,c0,1.2,"mw_box",0.82,0.09,t),C.vS("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vS("Jina:",A.bf,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f0O("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bw5(0.215,p,0.3116,b5),C.vS("Sahihi:",A.bf,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.ej(A.bf,!1,b6,A.aB,"marriage_sign_mwandishi",0,24,A.bi,A.a4,"",0.044,C.cA(),a9,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.ce,D.eW,0.3161999999999999,0.5738,s-0.044),C.bw5(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pF(0,0.032,D.bc,c0,1,"state_box",0.7,0.15,a8),C.vS("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hLW(d){var w,v,u,t=null,s=B.aZ(d.f),r=B.aZ(d.r),q=C.fKd(d.d),p=new C.fkq(s),o=new C.fkr(s),n=d.z,m=n===D.a1v||n===D.a1x||n===D.a1u||n===D.a1w,l=n===D.aAc||n===D.a1y||n===D.aAd,k=B.bX(0,B.fG(q,A.A,t,t,A.cn,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a1y?26:16
i.push(new C.fkt().$1$size(w))}if(n===D.aAe)i.push(D.f9G)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hG,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aIZ,p.$1$w(0.9),D.aIZ,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b0p,t,n,w,t,t,A.n),t,t,t,t,A.aep,t,t,t))
i.push(A.ar)
i.push(new C.fks(r).$1("NIMETOWE"))
i.push(A.h7)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Ke,new B.cz(A.aZ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bG(1,A.bp,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.X,t,A.b_,A.q,B.a([k,new B.C(A.ad3,B.v(i,A.ah,t,A.e,A.j,0,A.p),t)],j),t)},
h3Y(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aeM(e,t)
if(r==null)r=A.d.gL(D.Fk)
w=C.cA()
v=C.qZ(r.e,t,0,0,C.fGz(r,0.165,y.O,D.cT4,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pB,"","",s,D.dc)
w=C.cA()
u=A.a.i(d)
if(u.length===0)u=t
return C.AH(t,t,t,t,D.nH,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h3Z(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aeM(e,t)
if(r==null)r=A.d.gL(D.Fk)
w=C.cA()
v=C.qZ(r.e,t,0,0,C.fGz(r,0.165,y.f,D.cP8,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pB,"","",s,D.dc)
w=C.cA()
u=A.a.i(d)
if(u.length===0)u=t
return C.AH(t,t,t,t,D.nH,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzZ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.fvQ(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzZ,v)},
ael(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ael=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a5<1>")
p=B.A(new B.a5(i,new C.fej(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.Jw,null,new C.fek(p),d,!0,!0,!1,A.lc,!1,!1,x.N),$async$ael)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzZ(d,"Hati ya Kuhowa",D.Fk),$async$ael)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JP(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$ael)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h3Y(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ael,v)},
aem(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aem=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a5<1>")
p=B.A(new B.a5(i,new C.fen(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.Jw,null,new C.feo(p),d,!0,!0,!1,A.lc,!1,!1,x.N),$async$aem)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzZ(d,"Hati ya Kuhoweya",D.Fk),$async$aem)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JP(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aem)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h3Z(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aem,v)},
aen(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aen=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a5<1>")
m=B.A(new B.a5(i,new C.fer(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(D.Jw,null,new C.fes(m),d,!0,!0,!1,A.lc,!1,!1,x.N),$async$aen)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzZ(d,"Malipo ya Awamu ya Mahari",D.Os),$async$aen)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.JP(d,"Tafuta jimbo\u2026","",A.jN,"Chagua jimbo"),$async$aen)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aeM(s,D.Os)
if(q==null)q=A.d.gL(D.Os)
n=C.cA()
p=C.qZ(q.e,null,0,0,C.fGz(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cKu,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pB,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dc)
n=C.cA()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.AH(null,null,null,null,D.nH,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aen,v)},
wS:function wS(d,e){this.a=d
this.b=e},
jc:function jc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fku:function fku(){},
fkq:function fkq(d){this.a=d},
fks:function fks(d){this.a=d},
fkt:function fkt(){},
fkr:function fkr(d){this.a=d},
fvQ:function fvQ(d,e){this.a=d
this.b=e},
abd:function abd(d,e,f){this.c=d
this.d=e
this.a=f},
dQV:function dQV(d,e,f){this.a=d
this.b=e
this.c=f},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQT:function dQT(d,e){this.a=d
this.b=e},
aaD:function aaD(d,e,f){this.c=d
this.d=e
this.a=f},
fej:function fej(){},
fek:function fek(d){this.a=d},
feh:function feh(d){this.a=d},
fei:function fei(d){this.a=d},
fen:function fen(){},
feo:function feo(d){this.a=d},
fel:function fel(d){this.a=d},
fem:function fem(d){this.a=d},
fer:function fer(){},
fes:function fes(d){this.a=d},
fep:function fep(d){this.a=d},
feq:function feq(d){this.a=d},
Je(d,e,f,g,h,i,j,k,l,m){var w=C.cA()
return C.ej(e,!1,f,A.aB,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.ce,D.cP,k,l,m)},
BI(d,e,f,g,h,i,j,k,l){var w=C.cA()
return C.ej(A.bf,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ce,D.eW,j,k,l)},
h0d(d,e,f){return C.BI(0,0.002,D.fm,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bwf(d,e,f,g,h){return B.a([C.BI(4294967288,0.032,D.bc,4291404327,1.15,"pill_"+d,g,f,e),C.Je(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fHj(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.BI(0,0.002,D.fm,g,1,"orn_l_"+t,u,d,v),C.BI(h,0.016,D.kO,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.BI(0,0.002,D.fm,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_n(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Je(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cA()
return B.a([v,C.ej(A.L,!1,j,A.aB,"marriage_field_"+e+":"+A.k.a8(t,3),4280640491,i,A.cA,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bc,4280172719,2,k,0,0,"",D.ce,D.cP,t,u,g-0.002),C.h0d(u,g+0.018,t)],x.u)},
h0e(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.BI(h,0.028,D.bc,h,0,"chv_"+d,g,e,f),C.BI(w,0.024,D.kO,w,0,"chv_l_"+d,0.024,e-0.008,v),C.BI(w,0.024,D.kO,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Je(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bwe(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Je("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ej(A.bf,!1,4279310375,A.aB,"marriage_sign_"+d,0,24,A.bi,A.a4,"",0.032,C.cA(),null,"","",0,!1,"",0,D.bc,0,2,"",0,0,"",D.ce,D.eW,v,w,f-0.006),C.h0d(w,f+0.016,v)],x.u)},
fKe(d){var w,v
for(w=0;w<19;++w){v=D.OE[w]
if(v.a===d)return v}return null},
hOc(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aeM(A.a.aY(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aeM(A.a.aY(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aY(k,18)
w=C.aeM(u,D.Os)
v=w==null?l:w.d
if(v==null){w=C.aeM(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fKe(A.a.aY(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h12.a7(0)
$.h1e.a7(0)
t=C.fma(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fLi(d){var w=0,v=B.j(x.T),u
var $async$fLi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c1(A.K,null,new C.fxi(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLi,v)},
wV:function wV(d,e){this.a=d
this.b=e},
nk:function nk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfY:function bfY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fxi:function fxi(){},
abg:function abg(d){this.a=d},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3K:function e3K(d){this.a=d},
e3J:function e3J(d,e){this.a=d
this.b=e},
acV:function acV(d,e,f){this.c=d
this.d=e
this.a=f},
fKd(d){return $.h1e.ce(0,d,new C.fmc(d))},
fma(d){return $.h12.ce(0,d,new C.fmb(d))},
fu(d){return B.fAW(d>>>16&255,d>>>8&255,d&255,255)},
hDp(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h2h(4294570461,4293910718,4284234270,u)
case 1:return C.h2h(4294635750,4293975240,t,4292912216)
case 2:w=C.f_p(s,4294505966,r)
C.bw_(w,14,16,p)
C.kh(w,8,9,464,836,u,1.2)
C.BE(w,2,2,1,1,u,10)
C.BE(w,478,2,-1,1,u,10)
C.BE(w,2,852,1,-1,u,10)
C.BE(w,478,852,-1,-1,u,10)
return w
case 3:return C.f_p(4294966515,4294373082,4289102906)
case 4:return C.hyf(C.f_p(4294376440,4293653998,4290287194))
case 5:w=C.f_p(4294965238,4294437098,4288444980)
C.bw_(w,14,16,4283043359)
C.kh(w,6,7,468,840,u,1)
C.kh(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,n,4294175448)
C.ri(v,n)
C.kh(v,24,24,432,806,4286209070,1)
C.a_b(v,12,12,468,12,o,3,20)
C.a_b(v,12,842,468,842,o,3,20)
C.a_b(v,12,12,12,842,o,3,20)
C.a_b(v,468,12,468,842,o,3,20)
return v
case 7:return C.hwo(4294440434,4293518297,4280228630,r)
case 8:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,m,4293911504)
C.ri(v,m)
C.kh(v,28,28,424,798,l,1)
C.f7O(v,28,28,l,k)
C.f7O(v,452,28,l,k)
C.f7O(v,28,826,l,k)
C.f7O(v,452,826,l,k)
return v
case 9:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,j,4294111986)
C.ri(v,j)
C.kh(v,18,18,444,818,4292401368,0.7)
B.iC(v,!0,C.fu(p),0,13,0,853)
return v
case 10:return C.hAc(i,4294173372)
case 11:return C.hBh(4294439140,4293449662)
case 12:return C.hwh(h,4294239432)
case 13:return C.hAJ(4294244340,4293193448)
case 14:return C.hEX(4294505710,4293780694)
case 15:return C.eZq(4294966259,4294439138,o,p,q)
case 16:return C.eZq(4294966776,4294178544,o,g,g)
case 17:return C.eZq(4294965493,4294504170,o,4286200650,q)
case 18:return C.eZq(4294966519,4294373862,o,p,p)
case 19:return C.hzj()
case 20:return C.hzk()
case 21:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,h,4293976768)
C.ri(v,h)
C.bw_(v,14,16,p)
B.iC(v,!0,C.fu(u),4,475,4,9)
B.iC(v,!0,C.fu(u),4,475,844,849)
B.iC(v,!0,C.fu(u),4,9,4,849)
B.iC(v,!0,C.fu(u),470,475,4,849)
C.a_b(v,10,12,470,12,u,2,16)
C.a_b(v,10,842,470,842,u,2,16)
C.a_b(v,10,12,10,842,u,2,18)
C.a_b(v,470,12,470,842,u,2,18)
C.BE(v,2,2,1,1,t,10)
C.BE(v,478,2,-1,1,t,10)
C.BE(v,2,852,1,-1,t,10)
C.BE(v,478,852,-1,-1,t,10)
C.kh(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,s,4294438872)
C.ri(v,s)
C.kh(v,14,16,452,822,o,2.2)
C.kh(v,22,24,436,806,o,1)
C.fIA(v,!1,!1,o,p,p,36,14,16)
C.kt(v,240,20,7,o,!0)
C.kt(v,240,834,7,o,!0)
C.kt(v,18,427,7,o,!0)
C.kt(v,462,427,7,o,!0)
return v
case 23:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,i,4293910712)
C.ri(v,i)
B.iC(v,!0,C.fu(u),0,479,0,20)
B.iC(v,!0,C.fu(u),0,479,834,853)
B.iC(v,!0,C.fu(u),0,20,0,853)
B.iC(v,!0,C.fu(u),460,479,0,853)
B.iC(v,!0,C.fu(f),5,474,5,9)
B.iC(v,!0,C.fu(f),5,474,844,848)
B.iC(v,!0,C.fu(f),5,9,5,848)
B.iC(v,!0,C.fu(f),470,474,5,848)
C.kh(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hg(q,q,A.c8,0,A.dX,854,q,0,3,q,A.c8,480,!1)
C.xK(v,e,4294174404)
C.ri(v,e)
C.bw_(v,14,16,p)
B.iC(v,!0,C.fu(u),3,476,3,8)
B.iC(v,!0,C.fu(u),3,476,845,850)
B.iC(v,!0,C.fu(u),3,8,3,850)
B.iC(v,!0,C.fu(u),471,476,3,850)
C.kh(v,9,10,462,834,t,1)
C.kh(v,14,16,452,822,u,1.8)
C.kt(v,240,8,4,u,!0)
C.kt(v,240,846,4,u,!0)
C.kt(v,8,427,4,u,!0)
C.kt(v,472,427,4,u,!0)
C.kt(v,8,8,3,t,!0)
C.kt(v,472,8,3,t,!0)
C.kt(v,8,846,3,t,!0)
C.kt(v,472,846,3,t,!0)
return v}},
xK(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kv(d,!1,A.d9,new B.Qt(s),r,A.cW,1,0,w-1,k,k);++k}},
ri(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f3()
n.dU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aC(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aC(v==null?0:v)
v=d.a
s=v==null?o:v.dK(u,t,o)
if(s==null)s=new B.ix()
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbd())-3,0,255)
q=A.o.D(A.k.N(s.gbf(s))-2,0,255)
p=d.a
if(p!=null)p.jj(u,t,v,r,q,255)}},
kh(d,e,f,g,h,i,j){var w,v=null,u=C.fu(i),t=e+g
B.kv(d,!0,A.d9,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kv(d,!0,A.d9,u,v,A.cW,j,e,t,w,w)
B.kv(d,!0,A.d9,u,v,A.cW,j,e,e,f,w)
B.kv(d,!0,A.d9,u,v,A.cW,j,t,t,f,w)},
BE(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kv(d,!0,A.d9,C.fu(i),u,A.cW,2,e,e+g*j,f,f)
B.kv(d,!0,A.d9,C.fu(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kv(d,!0,A.d9,C.fu(i),u,A.cW,1,w,e+g*t,v,v)
B.kv(d,!0,A.d9,C.fu(i),u,A.cW,1,w,w,v,f+h*t)},
h2h(d,e,f,g){var w=null,v=B.hg(w,w,A.c8,0,A.dX,854,w,0,3,w,A.c8,480,!1)
C.xK(v,d,e)
C.ri(v,d)
B.iC(v,!0,C.fu(f),0,479,0,28)
B.iC(v,!0,C.fu(f),0,479,826,853)
B.iC(v,!0,C.fu(f),0,28,0,853)
B.iC(v,!0,C.fu(f),452,479,0,853)
C.kh(v,5,5,470,844,g,1.1)
C.kh(v,28,28,424,798,g,1.6)
C.BE(v,2,2,1,1,g,11)
C.BE(v,478,2,-1,1,g,11)
C.BE(v,2,852,1,-1,g,11)
C.BE(v,478,852,-1,-1,g,11)
return v},
f_p(d,e,f){var w=null,v=B.hg(w,w,A.c8,0,A.dX,854,w,0,3,w,A.c8,480,!1)
C.xK(v,d,e)
C.ri(v,d)
C.kh(v,14,16,452,822,f,1.6)
C.kh(v,20,22,440,810,f,0.8)
return v},
bw_(d,e,f,g){var w,v=C.fu(g)
B.iC(d,!0,v,0,479,0,f-1)
w=854-f
B.iC(d,!0,v,0,479,w,853);--w
B.iC(d,!0,v,0,e-1,f,w)
B.iC(d,!0,v,480-e,479,f,w)},
hyf(d){var w,v,u=4291404327
C.bw_(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kt(d,w,8,3,u,!0)
C.kt(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kt(d,7,v,3,u,!0)
C.kt(d,473,v,3,u,!0)}return d},
faN(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j4(e,f),new B.j4(e+g*n,f),new B.j4(e,f+h*n)],t)
B.a_X(d,C.fu(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j4(s,u),new B.j4(e+g*v,u),new B.j4(s,f+h*v)],t)
B.a_X(d,C.fu(k),t)
t=A.k.U(n*0.39)
C.kt(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kt(d,e+g*t,f+h*3,4,k,!0)
C.kt(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kt(d,e+g*t,f,5,k,!0)
C.kt(d,e,f+h*t,5,k,!0)}},
fIA(d,e,f,g,h,i,j,k,l){var w,v
C.faN(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.faN(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.faN(d,k,v,1,-1,e,f,g,h,i,j)
C.faN(d,w,v,-1,-1,e,f,g,h,i,j)},
a_b(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kP(d,!0,A.d9,new B.qw(p),null,A.cW,j,r,q)}},
f9W(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d9,new B.qw(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kv(d,!0,A.d9,new B.qw(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hwo(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hg(o,o,A.c8,0,A.dX,854,o,0,3,o,A.c8,480,!1)
C.xK(n,d,e)
C.ri(n,d)
C.kh(n,20,20,440,814,f,1.2)
C.f9W(n,0,0,1,1,g)
C.f9W(n,480,0,-1,1,g)
C.f9W(n,0,854,1,-1,g)
C.f9W(n,480,854,-1,-1,g)
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
B.kv(n,!0,A.d9,new B.qw(p),o,A.cW,1.2,240,r,60,q)}return n},
f7O(d,e,f,g,h){var w
C.fcH(d,!0,C.fu(g),13,e,f)
C.fcH(d,!0,C.fu(g),9,e,f)
w=B.a([new B.j4(e,f-4),new B.j4(e+4,f),new B.j4(e,f+4),new B.j4(e-4,f)],x.J)
B.a_X(d,C.fu(h),w)},
kt(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j4(e,v),new B.j4(u,f),new B.j4(e,t),new B.j4(s,f)],x.J)
if(i){B.a_X(d,C.fu(h),r)
return}B.kv(d,!0,A.d9,C.fu(h),w,A.cW,1,e,u,v,f)
B.kv(d,!0,A.d9,C.fu(h),w,A.cW,1,u,e,f,t)
B.kv(d,!0,A.d9,C.fu(h),w,A.cW,1,e,s,t,f)
B.kv(d,!0,A.d9,C.fu(h),w,A.cW,1,s,e,f,v)},
eZp(d,e,f,g,h,i,j){var w,v=B.a([new B.j4(e,f),new B.j4(e+g*28,f),new B.j4(e,f+h*28)],x.J)
B.a_X(d,C.fu(i),v)
v=e+g*14
w=f+h*14
C.kt(d,v,w,6,j,!0)
C.kt(d,v,w,3,i,!0)},
eZq(d,e,f,g,h){var w=null,v=B.hg(w,w,A.c8,0,A.dX,854,w,0,3,w,A.c8,480,!1)
C.xK(v,d,e)
C.ri(v,d)
C.kh(v,18,18,444,818,f,2)
C.kh(v,26,26,428,802,f,0.9)
if(h!=null)B.iC(v,!0,C.fu(h),28,451,28,34)
C.eZp(v,18,18,1,1,g,f)
C.eZp(v,462,18,-1,1,g,f)
C.eZp(v,18,836,1,-1,g,f)
C.eZp(v,462,836,-1,-1,g,f)
return v},
hzj(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hg(v,v,A.c8,0,A.dX,854,v,0,3,v,A.c8,480,!1)
C.xK(r,u,4294240980)
C.ri(r,u)
C.kh(r,10,12,460,830,t,3.2)
C.kh(r,18,20,444,814,s,1.2)
C.kh(r,24,26,432,802,t,1.8)
C.fIA(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kt(r,w,16,3,t,!0)
C.kt(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kt(r,16,w,3,t,!0)
C.kt(r,464,w,3,t,!0)}return r},
hzk(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hg(t,t,A.c8,0,A.dX,854,t,0,3,t,A.c8,480,!1)
C.xK(p,s,4294373080)
C.ri(p,s)
C.kh(p,16,18,448,818,r,2.4)
C.kh(p,24,26,432,802,4286209044,1)
w=new C.f0G(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fIA(p,!1,!0,r,q,q,34,16,18)
return p},
bwG(d,e,f,g,h,i){B.iC(d,!0,C.fu(i),e,e+g,f,f+h)},
bxv(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kv(d,!1,A.d9,new B.Qt(i),null,A.cW,1,e,w,l,l)}},
hAb(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.al(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d9,new B.qw(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.al(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kv(d,!1,A.d9,new B.qw(r),null,A.cW,1,t,t,f,s);++q}},
hAc(d,e){var w,v,u=null,t=B.hg(u,u,A.c8,0,A.dX,854,u,0,3,u,A.c8,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hAb(t,v,w,30,D.cDP,(A.o.al(v,30)+A.o.al(w,30)&1)===0)
C.bwG(t,44,44,392,766,d)
C.bxv(t,44,44,392,766,d,e)
C.ri(t,d)
C.kh(t,44,44,392,766,4292128567,2.2)
C.kh(t,50,50,380,754,4279898632,0.8)
return t},
hBg(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kt(d,e,f,7,h,!0)
C.kt(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kv(d,!0,A.d9,C.fu(h),o,A.cW,1.6,w,u,v,t)
B.kv(d,!0,A.d9,C.fu(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kv(d,!0,A.d9,new B.qw(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kv(d,!0,A.d9,C.fu(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kv(d,!0,A.d9,C.fu(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kP(d,!0,A.d9,C.fu(h),o,A.cW,2,e,f)}},
hBh(d,e){var w,v,u,t,s=null,r=B.hg(s,s,A.c8,0,A.dX,854,s,0,3,s,A.c8,480,!1)
B.iC(r,!0,C.fu(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hBg(r,u,v,w,4292391514)}C.bwG(r,46,46,388,762,d)
C.bxv(r,46,46,388,762,d,e)
C.ri(r,d)
C.kh(r,46,46,388,762,4291404327,1.8)
return r},
fYQ(d,e,f,g){C.fcH(d,!0,C.fu(g),16,e,f)
C.fcH(d,!0,C.fu(g),11,e,f)
C.kt(d,e,f,6,g,!0)
B.kv(d,!0,A.d9,C.fu(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kv(d,!0,A.d9,C.fu(g),null,A.cW,1.3,e,e,f-14,f+14)},
hwh(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hg(v,v,A.c8,0,A.dX,854,v,0,3,v,A.c8,480,!1)
B.iC(s,!0,C.fu(4280948752),0,479,0,853)
B.iC(s,!0,C.fu(u),0,479,0,78)
B.iC(s,!0,C.fu(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fYQ(s,w,39,t)
C.fYQ(s,w,815,t)}C.bwG(s,38,92,404,670,d)
C.bxv(s,38,92,404,670,d,e)
C.ri(s,d)
C.kh(s,38,92,404,670,t,1.8)
C.kh(s,45,99,390,656,4287322667,0.8)
return s},
hAI(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j4(e,f),new B.j4(q-5,w),new B.j4(q,f-(18-Math.abs(r)*3)),new B.j4(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_X(d,new B.qw(o),p)}B.kP(d,!0,A.d9,C.fu(4292128567),null,A.cW,3,e,f)},
hAJ(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hg(s,s,A.c8,0,A.dX,854,s,0,3,s,A.c8,480,!1)
C.xK(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kv(q,!0,A.d9,new B.qw(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kv(q,!0,A.d9,new B.qw(u),s,A.cW,1.1,v,v,0,853)}B.iC(q,!0,C.fu(r),0,479,0,70)
B.iC(q,!0,C.fu(r),0,479,798,853)
for(t=0;t<5;++t)C.hAI(q,70+t*85,48,4292128567)
C.bwG(q,48,78,384,712,d)
C.bxv(q,48,78,384,712,d,e)
C.ri(q,d)
C.kh(q,48,78,384,712,4291404327,1.6)
return q},
hEX(d,e){var w,v,u,t=null,s=4279970378,r=B.hg(t,t,A.c8,0,A.dX,854,t,0,3,t,A.c8,480,!1)
B.iC(r,!0,C.fu(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kt(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kP(r,!0,A.d9,new B.qw(u),t,A.cW,1,v,w)}C.bwG(r,40,40,400,774,d)
C.bxv(r,40,40,400,774,d,e)
C.ri(r,d)
C.kh(r,40,40,400,774,4291058750,2)
C.kh(r,48,48,384,758,s,0.8)
return r},
kE:function kE(d,e){this.a=d
this.b=e},
fmc:function fmc(d){this.a=d},
fmb:function fmb(d){this.a=d},
f0G:function f0G(d){this.a=d},
fmQ(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hBa(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fHc(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.o0(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aF(0,Ae.aeI(A.a.an(d,s,r+1)),t)
v=x.f.b(w)?B.a_(w,x.N,x.z):t
return v}catch(u){return t}},
adg(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$adg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uM(null,""),$async$adg)
case 3:n=g
if(A.a.i(n).length===0)throw B.R("AI is not available right now. Please try again later.")
t=B.mN(n)
if(e==null)s=A.hd
else{r=C.hBa(e)
s=B.a([new B.Zc(A.cR.gcs().aG(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qo(t,d,s,E.DQ),$async$adg)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.R(q!=null&&B.JE(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$adg,v)},
bz6(d){return C.hNT(d)},
hNT(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bz6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.am(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.adg(r,null),$async$bz6)
case 7:q=f
p=C.fHc(q)
if(p==null){u=d
w=1
break}o=d.azi(p)
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
return B.i($async$bz6,v)},
h1C(d){var w,v=F.fJw(d)
v=B.aI(v,"book","newspaper")
if(F.a0f(d)!=="sw"){w=B.ae("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fqM(d,e,f,g){return C.hPK(d,e,f,g)},
hPK(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fqM=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fmQ(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h50()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.adg('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h1C(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fqM)
case 3:r=m.fHc(i)
if(r==null)throw B.R(y.S)
q=new C.yF(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").azi(r)
t=q.r
if(t.length===0)throw B.R("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a0f(s)!=="sw"){p=B.ae("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a0f(A.d.aH(t," "))==="sw"?C.bz6(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fqM,v)},
byB(d,e,f,g,h){return C.hLv(d,e,f,g,h)},
hLv(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$byB=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.h50()
k=A.R.am(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.adg('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h1C(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$byB)
case 3:p=j.fHc(a0)
if(p==null)throw B.R(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.ct(o)){n=d.azi(B.a_(o,x.N,x.z))
m=A.R.am(n.ac(),null)!==A.R.am(d.ac(),null)}else{n=d
m=!1}w=m&&F.a0f(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bz6(n),$async$byB)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a60(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byB,v)},
a60:function a60(d,e,f){this.a=d
this.b=e
this.c=f},
hSn(d,e){return B.a8(d,!1).cp(B.eE(new C.fxt(e),!0,null,x.H))},
fxt:function fxt(d){this.a=d},
U3:function U3(d,e){this.c=d
this.a=e},
aBr:function aBr(d,e,f,g,h,i,j,k){var _=this
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
e72:function e72(d){this.a=d},
e71:function e71(){},
e73:function e73(d){this.a=d},
e70:function e70(d,e){this.a=d
this.b=e},
e74:function e74(){},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6M:function e6M(d){this.a=d},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6O:function e6O(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6I:function e6I(d,e){this.a=d
this.b=e},
e6J:function e6J(d,e){this.a=d
this.b=e},
e6K:function e6K(d){this.a=d},
e6L:function e6L(d){this.a=d},
e6G:function e6G(d,e){this.a=d
this.b=e},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6U:function e6U(d){this.a=d},
e6V:function e6V(d){this.a=d},
e6T:function e6T(d){this.a=d},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6X:function e6X(d){this.a=d},
e6R:function e6R(d){this.a=d},
e6Y:function e6Y(d){this.a=d},
e6Q:function e6Q(d){this.a=d},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e6P:function e6P(d,e){this.a=d
this.b=e},
e7_:function e7_(d){this.a=d},
e6C:function e6C(d,e){this.a=d
this.b=e},
flM(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$flM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h_f){w=1
break}r=new C.flN()
t=4
q=x.s
w=7
return B.b(B.iE(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$flM)
case 7:$.h_f=!0
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
return B.i($async$flM,v)},
byY(d){return A.FF[B.me(d)-1]+", "+A.op[B.bE(d)-1]+" "+B.bO(d)+", "+B.bv(d)},
hE2(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d0f[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fJV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fo(d[w],B.ae("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a5(v,new C.fk4(),B.U(v).k("a5<1>")))
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
continue}o=new C.fk6(j,h)
n=new C.fk5(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.al(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iO(o.$1(l)))
j.a+=l}return u},
fGX(d,e){var w=new C.f0h()
return A.d.cG(e,0,new C.f0f(w))>=A.d.cG(d,0,new C.f0g(w))},
fXv(d){var w,v,u=new B.aO($.V().r,A.ao,null,null,B.a([],x.v))
u.E(new B.b4(46,0))
w=d.a
u.E(new B.ao(w,0))
v=d.b
u.E(new B.ao(w,v-46))
u.E(new B.ao(w-46,v))
u.E(new B.ao(0,v))
u.E(new B.ao(0,46))
u.E(new B.bD())
return u},
yF:function yF(d,e,f,g,h,i,j,k,l,m){var _=this
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
c8i:function c8i(d){this.a=d},
c8g:function c8g(){},
c8h:function c8h(){},
rK:function rK(d,e){this.a=d
this.b=e},
Au:function Au(d,e){this.a=d
this.b=e},
l0:function l0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
flN:function flN(){},
fk4:function fk4(){},
fk6:function fk6(d,e){this.a=d
this.b=e},
fk5:function fk5(d,e,f){this.a=d
this.b=e
this.c=f},
f0h:function f0h(){},
f0i:function f0i(){},
f0f:function f0f(d){this.a=d},
f0g:function f0g(d){this.a=d},
aYM:function aYM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c8j:function c8j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8k:function c8k(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c8l:function c8l(d){this.a=d},
b9d:function b9d(d){this.a=d},
b9c:function b9c(d,e){this.b=d
this.a=e},
bqx:function bqx(d){this.a=d},
b5K:function b5K(d,e){this.b=d
this.a=e},
bo3:function bo3(d,e){this.b=d
this.a=e},
h6W(d,e){return B.a8(d,!1).cp(B.eE(new C.fxw(e,null),!0,null,x.E))},
fxw:function fxw(d,e){this.a=d
this.b=e},
U6:function U6(d,e,f){this.c=d
this.d=e
this.a=f},
aBv:function aBv(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e8d:function e8d(){},
e8e:function e8e(d){this.a=d},
e8c:function e8c(d,e){this.a=d
this.b=e},
e80:function e80(d){this.a=d},
e81:function e81(d){this.a=d},
e87:function e87(d){this.a=d},
e88:function e88(d,e){this.a=d
this.b=e},
e85:function e85(d){this.a=d},
e86:function e86(d,e,f){this.a=d
this.b=e
this.c=f},
e82:function e82(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e89:function e89(d,e){this.a=d
this.b=e},
e84:function e84(d,e){this.a=d
this.b=e},
e8a:function e8a(d){this.a=d},
e83:function e83(d,e){this.a=d
this.b=e},
e8b:function e8b(d,e){this.a=d
this.b=e},
b8K:function b8K(d,e,f){this.b=d
this.c=e
this.a=f},
hSt(d){return B.a8(d,!1).cp(B.eE(new C.fxM(),!0,null,x.I))},
bwr(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fIj(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fxM:function fxM(){},
Z5:function Z5(d){this.a=d},
o9:function o9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCO:function aCO(d,e,f,g,h,i,j,k,l){var _=this
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
_.aD=_.aM=_.aB=_.aw=_.Y=_.b4=_.bg=_.y2=0
_.b1=null
_.aZ=0.25
_.b8=null
_.bH=0.5
_.aQ=1
_.c4=_.bQ=_.bh=0
_.cT=_.cQ=!1
_.c=_.a=null},
eF3:function eF3(d){this.a=d},
eDW:function eDW(d,e){this.a=d
this.b=e},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEt:function eEt(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEp:function eEp(d,e,f){this.a=d
this.b=e
this.c=f},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e,f){this.a=d
this.b=e
this.c=f},
eEr:function eEr(d,e){this.a=d
this.b=e},
eDv:function eDv(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDu:function eDu(){},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDA:function eDA(){},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDB:function eDB(d){this.a=d},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDC:function eDC(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF1:function eF1(){},
eEU:function eEU(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEQ:function eEQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEX:function eEX(d){this.a=d},
eEY:function eEY(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEC:function eEC(d){this.a=d},
eED:function eED(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEE:function eEE(d){this.a=d},
eEH:function eEH(d){this.a=d},
eEA:function eEA(d){this.a=d},
eEI:function eEI(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEL:function eEL(d){this.a=d},
eEz:function eEz(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEO:function eEO(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEg:function eEg(d){this.a=d},
eEf:function eEf(d){this.a=d},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
eE8:function eE8(d){this.a=d},
eE7:function eE7(d){this.a=d},
eE9:function eE9(d){this.a=d},
eE6:function eE6(d){this.a=d},
eEa:function eEa(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d){this.a=d},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDS:function eDS(d){this.a=d},
eDT:function eDT(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDV:function eDV(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eD7:function eD7(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d){this.a=d},
eDL:function eDL(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDj:function eDj(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDf:function eDf(d){this.a=d},
eEb:function eEb(d){this.a=d},
eE3:function eE3(d){this.a=d},
eE_:function eE_(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eE0:function eE0(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e){this.a=d
this.b=e},
eE1:function eE1(d,e){this.a=d
this.b=e},
eDX:function eDX(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eEm:function eEm(d){this.a=d},
eEl:function eEl(d,e,f){this.a=d
this.b=e
this.c=f},
eEk:function eEk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEv:function eEv(d,e){this.a=d
this.b=e},
eEu:function eEu(d,e){this.a=d
this.b=e},
eDM:function eDM(d){this.a=d},
eF2:function eF2(d){this.a=d},
bcg:function bcg(d,e){this.b=d
this.a=e},
hO3(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hO4(d,e){var w,v,u,t,s,r,q,p,o,n=B.ae("\\S+",!0,!1,!1,!1).kw(0,d),m=B.A(n,B.a2(n).k("G.E"))
if(m.length===0)return d
w=new B.f8("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.an(d,v,n)
p=m[r].b
p=A.a.an(d,n,p.index+p[0].length)
n=B.ae("[*~^]",!0,!1,!1,!1)
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
v=t.index+t[0].length}n=w.a=n+A.a.aY(d,v)
return n.charCodeAt(0)==0?n:n},
bx1(){var w=$.bw9,v=$.OP
$.OP=v+1
return w+"_"+v},
i1(d,e,f,g,h,i,j){return C.ej(A.bf,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,C.bx1(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ce,D.eW,g,e,f)},
nA(d,e,f,g){var w=f*9
return C.i1(D.eG,d-f/2,e-w/32,f,w/16,g,0)},
hxU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bw9
p=$.OP
$.OP=p+1
w.push(new C.eB(q+"_"+p,D.eW,0,r,1,0.0016,"",24,A.a4,A.bi,A.aB,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.ce,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bw9
p=$.OP
$.OP=p+1
w.push(new C.eB(q+"_"+p,D.eW,o,0,0.004,1,"",24,A.a4,A.bi,A.aB,k,A.bf,null,D.bc,t,t,0,0,!1,"",0,D.ce,0,"","","","","",!1,0))}w.push(C.nA(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nA(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i1(D.bc,0.08,0.08,0.5,0.003,v,0),C.i1(D.bc,0.58,0.08,0.004,0.06,v,0),C.i1(D.bc,0.58,0.14,0.34,0.003,v,0),C.i1(D.bc,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i1(D.bc,0.08,0.8,0.004,0.14,t,0),C.i1(D.bc,0.08,0.94,0.6,0.003,t,0),C.nA(0.58,0.08,0.05,e),C.nA(0.92,0.22,0.05,e),C.nA(0.08,0.8,0.05,f),C.nA(0.68,0.94,0.05,f),C.nA(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i1(D.kO,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i1(D.kO,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i1(D.kO,0.7,0.8,0.22,0.12,w|1140850688,0),C.i1(D.kO,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nA(0.5,0.5,1.5,w|335544320),C.nA(0.5,0.5,1.15,w|402653184),C.nA(0.5,0.5,0.8,v|436207616),C.nA(0.95,0.05,0.4,v|855638016),C.nA(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nA(0.85,0.08,0.7,w|1140850688),C.nA(0.1,0.35,0.5,v|855638016),C.nA(0.9,0.62,0.55,v|771751936),C.nA(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i1(D.bc,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i1(D.bc,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i1(D.bc,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i1(D.bc,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nA(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nA(0.5,0.2,0.65,(w|3422552064)>>>0),C.nA(0.5,0.2,0.95,w|855638016),C.i1(D.bc,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i1(D.bc,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i1(D.jt,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i1(D.jt,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i1(D.jt,0.15,0.86,0.6,0.14,1712265002,0),C.nA(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cF7[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bw9
l=$.OP
$.OP=l+1
w.push(new C.eB(m+"_"+l,D.eW,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bi,A.aB,k,A.bf,null,D.eG,q,q,0,0,!1,"",0,D.ce,0,"","","","","",!1,0))}w.push(C.nA(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i1(D.jt,0.35,-0.1,0.3,0.62,w|855638016,0),C.i1(D.jt,0.05,-0.1,0.3,0.55,v,-0.5),C.i1(D.jt,0.65,-0.1,0.3,0.55,v,0.5),C.nA(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i1(D.bc,0.06,0.04,0.88,0.002,e,0),C.i1(D.bc,0.06,0.96,0.88,0.002,e,0),C.i1(D.bc,0.06,0.04,0.004,0.92,e,0),C.i1(D.bc,0.936,0.04,0.004,0.92,e,0),C.i1(D.bc,0.09,0.07,0.82,0.001,w,0),C.i1(D.bc,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i1(D.ju,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i1(D.ju,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i1(D.ju,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i1(D.bc,0,0,0.3,0.09,w|1140850688,0),C.i1(D.bc,0.7,0.9,0.3,0.1,v|1426063360,0),C.i1(D.bc,0.82,0.04,0.12,0.07,w|771751936,0),C.i1(D.bc,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i1(D.eG,0.62,0.02,0.5,0.16,v,0.6),C.i1(D.eG,0.78,0.12,0.4,0.12,u,0.9),C.i1(D.eG,-0.12,0.8,0.5,0.16,u,-0.6),C.i1(D.eG,-0.05,0.9,0.4,0.12,v,-0.9),C.nA(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i1(D.bc,0.09,0.12,0.16,0.006,e,0),C.i1(D.bc,0.05,0.03,0.9,0.001,w,0),C.i1(D.bc,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hKz(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bw9=j
$.OP=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fht()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ej(A.bf,!1,n,A.aB,"ngmy_quote_background",m,24,A.bi,A.a4,"",1,C.bx1(),g,"","",0,!1,"",0,D.bc,l,2,"",0,0,"",D.ce,D.lb,1,0,0))
if(a9)A.d.v(q,C.hxU(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ae("[*~^]",!0,!1,!1,!1)
p=C.hO3(B.aI(w,p,""))
o=A.a.t(w,B.ae("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fhs(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cA,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.ej(A.bf,!1,n,A.aB,"ngmy_quote_logo",m,24,A.bi,A.a4,a1,a3*9/16,C.bx1(),a0,"","",0,!1,a2,0,D.bc,l,2,"",0,0,"",D.ce,D.lb,a3,a4,a5))
return C.qZ(s,r,0,0,q,j+"_slide",D.pB,"","","",D.dc)},
qY:function qY(d,e){this.a=d
this.b=e},
lP:function lP(d,e,f,g,h,i,j,k,l,m){var _=this
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
fht:function fht(){},
fhs:function fhs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ho4(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b5(u.a(w.h(d,"extras")),new C.c9F(),x.N)
s=B.A(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yH(u,t,s,B.t(w==null?"":w))},
fp9(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fp9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h_C){w=1
break}$.h_C=!0
t=4
w=7
return B.b(B.ax(),$async$fp9)
case 7:r=e
q=B.aS(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aF(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jl(p),k=k.gah(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gT(h)
l=C.ho4(m)
if(l!=null)J.cc(n,l)}$.BF.ce(0,B.t(o.a),new C.fpa(n))}C.fI_()
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
return B.i($async$fp9,v)},
fI_(){var w,v=new B.P(Date.now(),0,!1).bM(-12e8)
for(w=new B.dv($.BF,$.BF.r,$.BF.e);w.C();)J.n5(w.d,new C.f70(v))
$.BF.bo($.BF,new C.f71())},
aLk(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aLk=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aLk)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cR($.BF,B.a2($.BF).k("cR<1,2>")).gah(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gT(h)
g=o
J.cc(p,B.E(["at",g.a.a4().ab(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.ap("String","ngmy_slides_ai_history_v1",A.R.am(n,null)),$async$aLk)
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
return B.i($async$aLk,v)},
hOF(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fI_()
w=$.BF.ce(0,d,new C.fpc())
v=Date.now()
u=B.A(e,B.a2(e).k("cm.E"))
J.p6(w,0,new C.yH(new B.P(v,0,!1),f,u,g))
C.aLk()},
hOC(d){var w,v=$.BF.h(0,d)
if(v==null||J.cj(v))return
w=J.cC(v)
w.cv(v,0)
if(w.gai(v))$.BF.W(0,d)
C.aLk()},
yH:function yH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9F:function c9F(){},
fpa:function fpa(d){this.a=d},
f70:function f70(d){this.a=d},
f71:function f71(){},
fpc:function fpc(){},
hOH(d){return A.d.dH(D.v4,new C.fpf(d),new C.fpg())},
ho2(d){var w
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
ho1(d){var w
switch(d.a){case 0:w=D.agH
break
case 1:w=A.xf
break
case 2:w=A.ahM
break
case 3:w=I.agn
break
case 4:w=A.ahc
break
case 5:w=A.lx
break
default:w=null}return w},
hAO(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.NU[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.NU[w]
if(!B.dq(v.toLowerCase(),t,0))u=B.dq(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
ho3(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.R.am(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hOD(d,e,f,g,h){var w=new B.J(D.v4,new C.fp8(),x.eC).aH(0,", "),v=""+d,u=C.h4T(h),t=F.fiS(h),s=C.h1d(g),r=e.t(0,D.Gy)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Gz)?'- New slides get an "icon3d" from: '+A.d.aH(D.NU,", ")+".\n":"",p=e.t(0,D.Bv)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hOE(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.v4,new C.fpb(),x.eC).aH(0,", "),p=new B.f8("")
if(e.t(0,D.Gy)){p.a=s
w=s}else w=""
if(e.t(0,D.Gz))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.NU,", ")+".\n")
if(e.t(0,D.Bv))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h4T(d)
v=F.fiS(d)
u=C.h1d(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeY(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.C1(a3,"{"),a5=J.fAw(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JZ(a3,a4,a5+1)
try{w=A.R.aF(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cj(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b5(p.a(J.q(t,a2)),new C.fn7(),m).bX(0,new C.fn8())
k=B.A(l,l.$ti.k("G.E"))}else k=B.a([],n)
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
f=C.hAO(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c5(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a68(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fk(u).b:q))
p=A.d.ba(D.v4,new C.fn9(r))?r:a7
o=C.f6f(J.q(w,"logo_frame"),D.AV)
n=C.f6f(J.q(w,"logo_ring"),D.AQ)
m=C.f6f(J.q(w,"photo_frame"),D.AV)
l=C.f6f(J.q(w,"photo_ring"),D.AQ)
return new C.aoM(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_M(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h40(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Bw),f7=f6?C.huF():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f3()
v.dU(f7.w+1)
u=f7.a
t=B.bk(u.b,!0,x.dL)
A.d.fA(t,v)
s=u.c
s=new C.no("luxe",u.a,A.lx,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dc)
w=s}if(w==null)w=C.hOH(f9.b)
r=g2.t(0,D.a1P)||f6
q=g2.t(0,D.Gy)
p=g2.t(0,D.PM)
o=new C.fhx()
n=B.a([],x.g)
m=new C.fhA(o,w,r)
l=new C.fhz(o,r)
k=new C.fhy(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.ba(u,new C.fhw(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cGy[b8]
c0=D.cFz[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.es2.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mi,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pC,500,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.PJ
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eG,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kO,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bc,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Bt
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eG,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eG,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mi,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cA,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pC,500,f2,f0))
d3=D.mh
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eG,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bc,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tw:D.ce
c1.push(new C.eB(b4,D.a1N,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bi,A.aB,4279310375,A.bf,e4,D.bc,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mh
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eG,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eG,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mi,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pC,450,f2,f0))
c1.push(l.$8$fx$key(D.bc,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.PJ
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eG,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eG,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bc,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bc,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Gw,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mh}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dc,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hwg(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.d2j[A.o.F(b1,6)]:s
n.push(new C.lr(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.AH(e4,e4,e4,e4,D.Bs,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.an(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fjV(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fjV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Bv)
n=e.t(0,D.Gz)
if(!o&&!n){u=D.a0M
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fjY(o,s[r],n,$.hzz,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iE(t,x.e),$async$fjV)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fjV,v)},
fiV(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fiV=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hOE(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKG(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fiV)
case 3:u=s.aL0(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fiV,v)},
byC(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$byC=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.b_(x.N)
for(s=B.eg(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.hOF(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeY(i,"colorful")
t=C.hOD(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKG(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hd),$async$byC)
case 3:u=o.aL0(m,f,h,g,D.dGb,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byC,v)},
aKG(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uM(null,""),$async$aKG)
case 3:n=i
if(A.a.i(n).length===0)throw B.R("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mN(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qo(t,d,g,null),$async$aKG)
case 7:q=i
p=q.b
if(p!=null){o=C.aeY(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.R(s!=null&&B.JE(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aKG,v)},
aL0(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aL0=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Bv)||e.t(0,D.Gz)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d8(e,x.Q)
t.W(0,D.Bv)}w=6
return B.b(C.fjV(d,t),$async$aL0)
case 6:s=k
w=4
break
case 5:s=D.a0M
case 4:t=d.c
w=A.d.ba(t,new C.f0c())?7:9
break
case 7:r=$.h5L
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dO(r,x.aP),$async$aL0)
case 10:q=k
p=q!=null?A.R.am(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h40(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.ho3(new C.aoM(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("J<1,n>")
t=B.A(new B.J(m,new C.f0d(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jD<cm.E,n>")
t=B.A(new B.jD(e,new C.f0e(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.PM)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aL0,v)},
fKD(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.b_(x.Q)
for(v=0;v<6;++v){u=D.a_I[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
hSy(d){return B.c1(A.K,null,new C.fxY(),d,!0,!0,!0,null,!1,!1,x.I)},
hvg(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cR.gcs().aG(d)},
hSx(d,e,f){return B.c1(A.K,null,new C.fxX(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fKE(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fKF(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
f6f(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.ba(e,new C.f6g(w))?w:""},
h1d(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h5J(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeY(a1==null?"":a1,a0),a3=C.aeY(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a5<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qK(new B.a5(r,new C.fph(t[p]),q))
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
g=B.A(new B.a5(k,new C.fpi(),v),r)
A.d.b_(g,new C.fpj())
if(g.length===0)continue
f=new C.fpk(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hOY(d){var w=d.toLowerCase(),v=B.ae("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aBh
v=B.ae("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dI6
v=B.ae("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dI7
return null},
h0P(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bz(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dE(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hOI(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
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
if(C.h0P(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h0P(n,i,v,u))if(n.w>10){f=h+1
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
hOG(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeY(o,"colorful")
if(n==null)throw B.R("That earlier version could not be read.")
w=B.b_(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_I[r]
if(q.b===s)w.K(0,q)}}v=C.fKE(e)
u=C.fKF(e)
p=C.h40(n,D.a0M,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("J<1,n>")
o=B.A(new B.J(o,new C.fpd(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jD<cm.E,n>")
o=B.A(new B.jD(w,new C.fpe(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.PM)
return p},
hSk(d,e,f){return B.c1(A.K,null,new C.fxa(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
huF(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f3()
s.dU(t)
w=D.clj[s.aC(10)]
v=new C.e38(s)
u=x.N
return new C.e37(w,s.aC(4),J.fk(v.$1$2(D.cKG,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.cZo,2+s.aC(2),u),v.$1$2(D.cTe,2,u),v.$1$2(D.d0Y,4,x.fP),t)},
hwg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f3()
a1.dU(a5.w+a3*13)
w=new C.eXL(a4)
v=new C.eXN(a4,d)
u=new C.eXM(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cP){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fG(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fG(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eG,0.1+a1.af()*0.45,0.05+a1.af()*0.3,0.45,0.75,C.a_M(a0,52),"lux_spot",a5.vJ(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bc,0,0,1,1,0,"lux_back",a5.vJ(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bc,0,0,1,1,0,"lux_back2",a5.aBC(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.022,0.038,0.956,0.924,0,g,a5.vJ(0,f),D.dc,150,C.a_M(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.018,0.032,0.964,0.936,0,g,a5.vJ(0,f),D.dc,120,C.a_M(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bc,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dc,260,C.a_M(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bc,0,0,1,1,0,"lux_filigree",a5.vJ(0,"filigree"),D.dc,200))
break
default:a2.push(w.$10$anim$delay(D.bc,0.08,0.06,0.84,0.004,C.a_M(a0,208),"lux_rule",a5.aBC(0,"shimmer",r),D.tv,150))
a2.push(w.$10$anim$delay(D.bc,0.08,0.936,0.84,0.004,C.a_M(a0,144),"lux_rule2","",D.Gw,220))}l=!A.d.ba(a2,new C.eXK())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vJ(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vJ(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_M(r,242)
j=a5.vJ(0,"orbit")
i=s===D.bc?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pC,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eG,t-0.007,0.9495,0.014,0.025,C.a_M(r,242),"lux_g2",a5.vJ(0,"orbit"),D.pC,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bc,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fG(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.bc,0,0,1,1,0,"lux_velvet",a5.vJ(0,"velvet")))},
no:function no(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fpf:function fpf(d){this.a=d},
fpg:function fpg(){},
vl:function vl(d,e){this.a=d
this.b=e},
a68:function a68(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aoM:function aoM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fp8:function fp8(){},
fpb:function fpb(){},
fn7:function fn7(){},
fn8:function fn8(){},
fn9:function fn9(d){this.a=d},
fhx:function fhx(){},
fhA:function fhA(d,e,f){this.a=d
this.b=e
this.c=f},
fhz:function fhz(d,e){this.a=d
this.b=e},
fhy:function fhy(d,e){this.a=d
this.b=e},
fhw:function fhw(d){this.a=d},
fjY:function fjY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjW:function fjW(d){this.a=d},
fjX:function fjX(d){this.a=d},
f0c:function f0c(){},
f0d:function f0d(){},
f0e:function f0e(){},
fxY:function fxY(){},
ZA:function ZA(d){this.a=d},
aEI:function aEI(d,e,f,g,h){var _=this
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
eKY:function eKY(d,e,f){this.a=d
this.b=e
this.c=f},
eKZ:function eKZ(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e){this.a=d
this.b=e},
eKX:function eKX(d,e){this.a=d
this.b=e},
eKV:function eKV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eKQ:function eKQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eKU:function eKU(d,e){this.a=d
this.b=e},
eKP:function eKP(d,e){this.a=d
this.b=e},
eKT:function eKT(d,e){this.a=d
this.b=e},
eKO:function eKO(d,e){this.a=d
this.b=e},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d,e){this.a=d
this.b=e},
eKE:function eKE(d,e){this.a=d
this.b=e},
eKF:function eKF(d,e){this.a=d
this.b=e},
eKH:function eKH(d){this.a=d},
eKI:function eKI(d){this.a=d},
eKJ:function eKJ(d){this.a=d},
eKK:function eKK(d){this.a=d},
eKG:function eKG(d,e){this.a=d
this.b=e},
eKL:function eKL(d,e){this.a=d
this.b=e},
eLb:function eLb(d){this.a=d},
eLc:function eLc(d){this.a=d},
eLa:function eLa(d){this.a=d},
eLd:function eLd(d){this.a=d},
eL9:function eL9(d){this.a=d},
eLf:function eLf(d){this.a=d},
eL8:function eL8(d,e){this.a=d
this.b=e},
eLg:function eLg(d){this.a=d},
eL7:function eL7(d,e){this.a=d
this.b=e},
eLh:function eLh(d){this.a=d},
eL6:function eL6(d){this.a=d},
eLi:function eLi(d){this.a=d},
eL5:function eL5(d,e){this.a=d
this.b=e},
eLj:function eLj(d){this.a=d},
eL4:function eL4(d,e){this.a=d
this.b=e},
eLk:function eLk(d){this.a=d},
eL3:function eL3(d){this.a=d},
eLl:function eLl(d,e){this.a=d
this.b=e},
eL2:function eL2(d,e){this.a=d
this.b=e},
eLm:function eLm(d){this.a=d},
eLe:function eLe(d){this.a=d},
eL1:function eL1(d,e){this.a=d
this.b=e},
eKM:function eKM(d,e,f){this.a=d
this.b=e
this.c=f},
eKN:function eKN(d,e,f){this.a=d
this.b=e
this.c=f},
eL0:function eL0(d,e){this.a=d
this.b=e},
eL_:function eL_(d,e){this.a=d
this.b=e},
fxX:function fxX(d,e){this.a=d
this.b=e},
Zz:function Zz(d,e,f){this.c=d
this.d=e
this.a=f},
aEH:function aEH(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eKx:function eKx(d){this.a=d},
eKy:function eKy(d){this.a=d},
eKz:function eKz(d,e){this.a=d
this.b=e},
eKA:function eKA(d){this.a=d},
eKB:function eKB(d){this.a=d},
eKw:function eKw(d,e){this.a=d
this.b=e},
eKC:function eKC(d,e){this.a=d
this.b=e},
eKD:function eKD(d,e){this.a=d
this.b=e},
f6g:function f6g(d){this.a=d},
aZ9:function aZ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBk:function aBk(d,e,f){this.c=d
this.d=e
this.a=f},
bgR:function bgR(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
e3a:function e3a(d){this.a=d},
e39:function e39(){},
bes:function bes(d,e){this.b=d
this.a=e},
fph:function fph(d){this.a=d},
fpi:function fpi(){},
fpj:function fpj(){},
fpk:function fpk(d){this.a=d},
apl:function apl(d,e){this.a=d
this.b=e},
fpd:function fpd(){},
fpe:function fpe(){},
fxa:function fxa(d,e){this.a=d
this.b=e},
XY:function XY(d,e,f){this.c=d
this.d=e
this.a=f},
ayN:function ayN(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dbX:function dbX(d){this.a=d},
dbY:function dbY(d){this.a=d},
dbZ:function dbZ(d,e){this.a=d
this.b=e},
dc1:function dc1(d){this.a=d},
dc2:function dc2(d,e){this.a=d
this.b=e},
dc0:function dc0(d,e){this.a=d
this.b=e},
dc3:function dc3(d){this.a=d},
dc_:function dc_(d,e){this.a=d
this.b=e},
bp8:function bp8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e37:function e37(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e38:function e38(d){this.a=d},
eXL:function eXL(d){this.a=d},
eXN:function eXN(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXK:function eXK(){},
aJf:function aJf(){},
fJt(d){var w,v,u
try{w=A.R.aF(0,d,null)
if(x.f.b(w)){v=B.vd(B.a_(w,x.N,x.z))
return v}}catch(u){}return null},
aZ5:function aZ5(d,e,f){this.c=d
this.d=e
this.a=f},
bit:function bit(d,e){this.c=d
this.a=e},
hL1(d){return A.d.dH(D.FC,new C.fiE(d),new C.fiF())},
hL2(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aY(t,6)
if(w.length===0)return null
v=new B.a5(D.FC,new C.fiG(w),x.b4)
if(!v.gah(0).C())return null
u=v.gL(0)
return new C.jt("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kY:function kY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fiE:function fiE(d){this.a=d},
fiF:function fiF(){},
fiG:function fiG(d){this.a=d},
mB(d,e,f,g,h){return new C.DA(f,g,d)},
hxs(d){var w=d.z,v=B.U(w).k("a5<1>")
w=B.A(new B.a5(w,new C.eZJ(),v),v.k("G.E"))
d.z=w
d.x=""},
dr(d,e){var w=$.J3
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
ds(d,e,f,g,h,i,j,k,l){return C.ej(A.bf,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,"design_"+C.cA(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ce,D.eW,j,k,l)},
h3O(d,e){var w
C.hxs(d)
w=A.d.dH($.bAB(),new C.fgu(e),new C.fgv())
$.J3=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.J3=""}d.z=B.bk(d.z,!0,x.F)},
DA:function DA(d,e,f){this.a=d
this.b=e
this.e=f},
eZJ:function eZJ(){},
foK:function foK(){},
foL:function foL(){},
foM:function foM(){},
foX:function foX(){},
fp1:function fp1(){},
fp2:function fp2(){},
fp3:function fp3(){},
fp4:function fp4(){},
fp5:function fp5(){},
fp6:function fp6(){},
fp7:function fp7(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
foQ:function foQ(){},
foR:function foR(){},
foS:function foS(){},
foT:function foT(){},
foU:function foU(){},
foV:function foV(){},
foW:function foW(){},
foY:function foY(){},
foZ:function foZ(){},
fp_:function fp_(){},
fp0:function fp0(){},
fgu:function fgu(d){this.a=d},
fgv:function fgv(){},
iN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ej(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bc,4280172719,2,m,n,0,"",o,D.cP,p,q,r)},
BV(d,e,f,g,h,i,j,k,l){return C.ej(A.bf,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ce,D.eW,j,k,l)},
bzl(){var w=new B.P(Date.now(),0,!1)
return A.i5[B.bE(w)-1]+" "+B.bO(w)+", "+B.bv(w)},
el:function el(d,e,f){this.a=d
this.b=e
this.c=f},
bwM(d){return new B.iI((A.o.az(d,24)&255)/255,(A.o.az(d,16)&255)/255,(A.o.az(d,8)&255)/255,(d&255)/255)},
hCo(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.akB(A.cy.aG(A.d.gaj(d.split(","))))
return w}catch(v){return null}},
hCs(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f63(),x.dv).aH(0,"\n")},
hCr(d){switch(d.a){case 2:return A.n_
case 1:case 5:return A.eCn
default:return A.R6}},
hCl(d){switch(d.a){case 2:return A.u3
case 1:case 5:return A.SM
default:return A.a6w}},
hCp(d,e){var w,v=null,u=d.ay,t=A.o.az(u,24),s=A.o.az(d.ch,24),r=(t&255)===0?v:C.bwM(u),q=(s&255)===0?v:C.bwM(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n7(q,p,A.kp)
w=new B.p7(t,t,t,t)}switch(d.ax.a){case 1:return B.lg(v,v,v,new B.km(r,w,v,A.a7K,v),v,v,v,v)
case 4:return u?new B.fJ(v,v,v):B.wk(B.lg(v,v,q,v,p+0.4,v,v,v))
default:return B.lg(v,v,v,new B.km(r,w,B.uS(4),A.hv,v),v,v,v,v)}},
hCn(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eW?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hCl(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hCs(d)
t=C.bwM(d.Q)
s=d.x.a>=700?A.ee:A.uz
r=d.y===A.cA?A.wS:A.afg
q=d.z
p=new B.C4(w,l,l,B.f2(u,l,l,l,B.fZ(l,t,1===q.a?A.aJX:A.aJW,l,l,l,l,l,l,A.dq,l,l,v,r,s,l,!0,l,l,l,l),C.hCr(d.as)))
break
case 1:case 4:o=C.hCo(d.at)
n=i===D.lb&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wk(B.f2(w,l,l,l,B.fZ(l,A.qR,l,l,l,l,l,l,l,A.dq,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gw(o,n?A.a7G:A.T7,l,l)
break
case 3:w=new B.n7(A.GP,1,A.kp)
u=B.uS(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lg(A.u3,B.f2(t,l,l,l,B.fZ(l,D.dST,l,l,l,l,l,l,l,A.dq,l,l,11,l,A.ee,l,!0,l,l,l,l),A.n_),l,new B.km(E.aCq,new B.p7(w,w,w,w),u,A.hv,l),l,l,l,l)
break
case 2:p=C.hCp(d,e)
break
case 5:p=C.hCm(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fWI(-w,p)
w=i===D.cP
if(w){m=A.o.az(d.Q,24)&255
if(m<255)p=new B.aq4(m/255,p)}if(w)return new F.vr(k,l,j,l,new B.QA(new B.kl(g,g,f,1/0),p))
if(i===D.kN){i=new B.n7(A.GP,1,A.kp)
i=B.lg(A.u3,p,l,new B.km(A.ov,new B.p7(i,i,i,i),B.uS(4),A.hv,l),l,l,D.blw,l)}else i=p
return new F.vr(k,l,j,l,new B.fJ(g,f,i))},
hCq(d,e,f,g){var w,v=null,u=C.bwM(d.e),t=d.f
t=B.a([F.fVm(t!=null?B.lg(v,v,v,new B.km(v,v,v,A.hv,new B.aTE(E.SN,A.a6q,B.a([u,C.bwM(t)],x.cR),v)),v,v,v,v):B.lg(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f62(f,g),B.U(w).k("J<1,f9>")))
return F.cm8(t)},
fKH(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fKH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2m(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.UO(A.vh,A.GM,D.bmB,null,null,null,!1,null)
o=new B.AN(o,new C.fpq(607,787,p,d))
o.L9(n,null)
r.push(o)}u=n.jD(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fKH,v)},
hCm(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fJt(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gah6()
if(h==null)h=A.aso
j=B.rX(4279308564)
w=B.uS(18)
v=new B.n7(B.rX(4287531653),3,A.kp)
u=i.length===0?"My links":i
u=B.a([B.wk(B.f2(u,m,m,m,B.fZ(m,A.ov,m,m,m,m,m,m,m,A.dq,m,m,12,m,A.ee,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wk(B.f2(A.a.i(l.c),m,m,m,D.eJi,m)))
u.push(new B.fJ(m,8,m))
for(t=B.dc(h,0,B.dH(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bU(t,t.gJ(0),s.k("bU<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rX(4280690220)
o=new B.a7m(8,8)
n=A.a.i(r.b)
u.push(new B.np(D.bfJ,new C.aue(new C.ag_(q),B.lg(m,B.f2(n.length===0?A.a.i(r.c):n,m,m,m,D.eLt,A.n_),m,new B.km(p,m,new B.agr(o,o,o,o),A.hv,m),m,m,D.blV,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wk(B.f2(k,m,m,m,D.eKM,m))
u.push(new C.aue(C.hcj(k),t))}return B.lg(m,B.y2(u,A.JX,A.l9),m,new B.km(j,new B.p7(v,v,v,v),w,A.hv,m),m,m,D.bgA,m)},
f63:function f63(){},
f62:function f62(d,e){this.a=d
this.b=e},
fpq:function fpq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeL(d){var w,v
for(w=0;w<32;++w){v=D.Ft[w]
if(v.a===d)return v}return null},
fZi(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cy.aG(A.a.aY(d,u+1))
return w}catch(v){return null}},
cQ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h6S(d,e){return B.a8(d,!1).cp(B.eE(new C.fvA(e),!0,null,x.fB))},
h6R(d,e){return B.c1(A.K,null,new C.fvz(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iR:function iR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dr:function Dr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LY:function LY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgd:function bgd(d,e,f){var _=this
_.d=d
_.e=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
dMF:function dMF(d){this.a=d},
dME:function dME(d,e,f){this.a=d
this.b=e
this.c=f},
dMD:function dMD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnJ:function bnJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJL:function eJL(d,e){this.a=d
this.b=e},
bbm:function bbm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aX0:function aX0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4e:function c4e(){},
c4f:function c4f(d){this.a=d},
c4g:function c4g(d,e,f){this.a=d
this.b=e
this.c=f},
c4h:function c4h(d,e,f){this.a=d
this.b=e
this.c=f},
fvA:function fvA(d){this.a=d},
Xw:function Xw(d,e){this.c=d
this.a=e},
axc:function axc(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d1r:function d1r(d,e,f){this.a=d
this.b=e
this.c=f},
d1w:function d1w(d){this.a=d},
d1x:function d1x(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1u:function d1u(d,e){this.a=d
this.b=e},
d1z:function d1z(d){this.a=d},
d1t:function d1t(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1s:function d1s(d,e){this.a=d
this.b=e},
d1B:function d1B(d,e){this.a=d
this.b=e},
fvz:function fvz(d){this.a=d},
fvy:function fvy(d){this.a=d},
fvx:function fvx(d,e,f){this.a=d
this.b=e
this.c=f},
fvw:function fvw(d,e){this.a=d
this.b=e},
aIJ:function aIJ(){},
hSw(d){return B.c1(A.K,null,new C.fxW(),d,!0,!0,!0,null,!1,!1,x.N)},
fxW:function fxW(){},
XR:function XR(d){this.a=d},
bcQ:function bcQ(d){this.d=d
this.c=this.a=null},
d7X:function d7X(d){this.a=d},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d){this.a=d},
hyS(d){var w,v=d.split("@")
if(v.length>1){w=B.c5(v[1],16)
if(w!=null)return B.aZ(w)}return D.wl},
hMX(d){var w,v=A.d.gL(d.split("@"))
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
hMW(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hyS(d)
switch(q){case"shimmer":return B.nt(A.a6S,g,new C.fm5(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.bcd(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dQ(B.e7(A.A,B.d9(C.fBN(g,B.a3d(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.bbV(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d9(B.ev(A.A,e*0.5,B.e7(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.di()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fm(e)
u.mf(Math.sin(e)*0.3)
return B.dQ(B.fn(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.am(A.X,r,A.b_,A.q,B.a([B.e2(B.b2(r,r,r,new C.bkE(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.X,r,A.b_,A.q,B.a([B.e2(B.b2(r,r,r,new C.b6T(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.X,r,A.b_,A.q,B.a([B.e2(B.b2(r,r,r,new C.b6w(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.brt(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.bow(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.bnF(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.X,r,A.b_,A.q,B.a([g,B.e2(B.b2(r,r,r,new C.bbf(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.A,r,A.a9,A.f,B.a([B.bX(0,B.e2(B.e7(A.A,B.bV(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bb),1.6+s*0.15,r,r),!0,r),0,0,0),B.ev(A.A,s*0.06,B.e7(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fm5:function fm5(d,e){this.a=d
this.b=e},
bcd:function bcd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbV:function bbV(d,e,f){this.b=d
this.c=e
this.a=f},
bkE:function bkE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6T:function b6T(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6w:function b6w(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brt:function brt(d,e,f){this.b=d
this.c=e
this.a=f},
bow:function bow(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnF:function bnF(d,e,f){this.b=d
this.c=e
this.a=f},
bbf:function bbf(d,e,f){this.b=d
this.d=e
this.a=f},
d18:function d18(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wU:function wU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fm8(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kN},
hN1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fm9())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gL(B.aNx(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hN0(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d2(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d2(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
aeo(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeo=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a5<1>")
e=B.A(new B.a5(a4,new C.fev(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c1(A.dB,null,new C.few(e),d,!0,!0,!1,A.lc,!1,!1,x.N),$async$aeo)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fLi(d),$async$aeo)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.JP(d,"Search states\u2026","",A.jN,"Choose state"),$async$aeo)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fKe(s)
if(p==null)p=A.d.gL(D.OE)
f=C.cA()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cA()
m=p.e
l=C.fma(p.d)
k=x.u
j=B.a([C.ej(A.bf,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cA(),l,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.lb,1,0,0)],k)
i=p.f
h=x.F
k=B.A(B.a([C.BI(i,0.016,D.kO,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.BI(0,0.058,D.eG,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.BI(0,0.058,D.eG,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Je("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Je("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fHj(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bwf("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_n("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_n("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_n("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_n("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bwf("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.BI(m,0.082,D.bc,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cA()
k.push(C.ej(A.bf,!1,i,A.aB,"marriage_field_utangulizi:"+A.k.a8(0.78,3),4280640491,9.5,A.bi,A.cq,"",0.074,g,null,"","",0,!1,"",0,D.bc,4280172719,2,y.O,0,0,"",D.ce,D.cP,0.78,0.11,0.388))
A.d.v(k,C.fHj(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bwf("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h0e("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h0e("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_n("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_n("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bwe("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bwe("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bwf("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Je("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Je("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bwe("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bwe("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bwf("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_n("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bwe("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_n("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.A(C.fHj(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Je("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Je("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.AH(null,null,null,null,D.nH,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qZ(m,null,0,0,j,n,D.pB,"","","Hati ya Ndoa",D.dc)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aeo,v)},
fm9:function fm9(){},
fev:function fev(){},
few:function few(d){this.a=d},
fet:function fet(d){this.a=d},
feu:function feu(d){this.a=d},
hBT(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hBS(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mm
case"lineThrough":return A.yv
default:return A.aB}},
ej(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eB(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h2f(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Or[w]
if(v.b===u)return v}return D.dc},
hyg(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cCE[w]
if(v.b===u)return v}return D.cP},
hEB(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cZY[w]
if(v.b===u)return v}return D.bc},
qZ(d,e,f,g,h,i,j,k,l,m,n){return new C.lr(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fU6(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hAg(d.h(0,"layout"))
t=B.aM(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aM(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.h2f(d.h(0,"transition"))
q=B.aM(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aM(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d6(n,x.f)
n=B.cB(n,new C.c9C(),n.$ti.k("G.E"),x.F)
n=B.A(n,B.a2(n).k("G.E"))}return C.qZ(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hAg(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.akn[w]
if(v.b===u)return v}return D.mh},
AH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.P(Date.now(),0,!1):a4
return new C.hU(p,t,a1,h,i,w,a0==null?B.a([C.qZ(4294967295,null,0,0,null,C.cA(),D.pB,"","","",D.dc)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Ue(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hwv(a6.h(0,"aspectRatio"))
t=B.aM(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.P(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kj(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kj(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aM(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aM(a6.h(0,"signatureInkColor"))
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
else{f=J.b5(f,new C.c9p(),x.N)
f=B.A(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b5(e,new C.c9q(),x.N)
e=B.A(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d6(g,x.f)
g=B.cB(g,new C.c9r(),g.$ti.k("G.E"),x.bt)
g=B.A(g,B.a2(g).k("G.E"))}return C.AH(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qZ(4294967295,a3,0,0,a3,C.cA(),D.pB,"","","",D.dc)],x.g):g,v,p,o,s)},
kj(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hwv(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d_I[w]
if(v.b===u)return v}return D.Bs},
cA(){var w=Date.now(),v=$.iT
$.iT=v+1
return""+1000*w+"_"+v},
c9T(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Bt){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cA()
v=C.ej(A.L,!1,f.d.l(),A.aB,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.ce,D.cP,0.84,0.08,0.3)
u=C.cA()
A.d.v(w,B.a([v,C.ej(A.L,!1,f.e.l(),A.aB,"",n,20,A.bi,A.cq,"",0.12,u,p,"","",0,!1,"",0,D.bc,m,2,"Click to add subtitle",0,0,"",D.ce,D.cP,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cA()
v=C.ej(A.bf,!1,f.d.l(),A.aB,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bc,m,2,o,0,0,"",D.ce,D.cP,0.88,0.06,0.06)
u=C.cA()
A.d.v(w,B.a([v,C.ej(A.bf,!0,f.e.l(),A.aB,"",n,20,A.bi,A.cq,"",0.68,u,p,"","",0,!1,"",0,D.bc,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ce,D.cP,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cA()
v=C.ej(A.bf,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Two Column Slide",0,0,"",D.ce,D.cP,0.88,0.06,0.06)
u=C.cA()
t=f.e
u=C.ej(A.bf,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.bc,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ce,D.cP,0.42,0.06,0.22)
s=C.cA()
A.d.v(w,B.a([v,u,C.ej(A.bf,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.bc,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ce,D.cP,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.ej(A.L,!1,4294967295,A.aB,"",n,42,A.bi,A.u,"",0.2,C.cA(),p,"","",0,!1,"",0,D.bc,m,2,"Section Header",0,0,"",D.ce,D.cP,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cA()
v=C.ej(A.bf,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bc,m,2,"Compare",0,0,"",D.ce,D.cP,0.88,0.06,0.06)
u=C.cA()
t=f.c
u=C.ej(A.bf,!1,l,A.aB,"",t.j(0.12).l(),24,A.bi,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.bc,t.l(),2,"",0,0,"",D.ce,D.eW,0.42,0.06,0.22)
s=C.cA()
r=f.e
s=C.ej(A.bf,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bc,m,2,"Option A",0,0,"",D.ce,D.cP,0.38,0.08,0.26)
q=C.cA()
t=C.ej(A.bf,!1,l,A.aB,"",t.j(0.06).l(),24,A.bi,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.bc,t.j(0.5).l(),2,"",0,0,"",D.ce,D.eW,0.42,0.52,0.22)
q=C.cA()
A.d.v(w,B.a([v,u,s,t,C.ej(A.bf,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bc,m,2,"Option B",0,0,"",D.ce,D.cP,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cA()
v=C.ej(A.L,!1,f.d.l(),A.aB,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bc,m,2,"TERM / QUESTION",0,0,"",D.ce,D.cP,0.8,0.1,0.12)
u=C.cA()
A.d.v(w,B.a([v,C.ej(A.L,!1,f.e.l(),A.aB,"",n,22,A.bi,A.cq,"",0.35,u,p,"","",0,!1,"",0,D.bc,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ce,D.cP,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cA()
v=C.ej(A.bf,!1,f.d.l(),A.aB,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bc,m,2,"Quiz Question",0,0,"",D.ce,D.cP,0.88,0.06,0.06)
u=C.cA()
A.d.v(w,B.a([v,C.ej(A.bf,!1,f.e.l(),A.aB,"",n,20,A.bi,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.bc,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ce,D.cP,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cA()
v=C.ej(A.bf,!1,f.d.l(),A.aB,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bc,m,2,"Worksheet / Assignment",0,0,"",D.ce,D.cP,0.88,0.06,0.04)
u=C.cA()
A.d.v(w,B.a([v,C.ej(A.bf,!1,f.e.l(),A.aB,"",n,18,A.bi,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.bc,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ce,D.cP,0.88,0.06,0.16)],x.u))
break}},
hod(d){return A.d.dH(D.a_n,new C.c9U(d),new C.c9V())},
hoa(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aF(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cc(v,C.Ue(B.a_(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fDT(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.c9P(t)
for(w=J.aU(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bg<2>")
u=B.A(new B.bg(t,w),w.k("G.E"))
A.d.b_(u,new C.c9O())
return u},
fU9(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c9K()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aoN(d){return C.ho8(d)},
ho8(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c9N()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0z(m),$async$aoN)
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
return B.b(B.ax(),$async$aoN)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aS(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.fU8.h(0,m))
n=C.fDT(C.fDT(j,r),o)
if(n.length===0){u=C.fU9(C.fU9(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoN,v)},
c9J(d){return C.ho7(d)},
ho7(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c9J=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$c9J)
case 7:r=f
q=r.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kp(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.b_(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c9J,v)},
aZb(d,e){return C.ho9(d,e)},
ho9(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aZb=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$aZb)
case 6:s=g
q=s.rn("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.JY(r,J.aa(r)-500):r
w=7
return B.b(s.ap("StringList","ngmy_slides_deleted_"+p,o),$async$aZb)
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
return B.i($async$aZb,v)},
Uf(d,e){return C.hob(d,e)},
hob(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Uf=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fU7.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aoN(a3),$async$Uf)
case 5:p=a6
case 4:w=6
return B.b(C.c9J(a3),$async$Uf)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbm())k=f===g.gbm()&&k.b>g.gct()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bg<2>")
l=m.k("a5<G.E>")
e=B.A(new B.a5(new B.bg(n,m),new C.c9Q(o),l),l.k("G.E"))
A.d.b_(e,new C.c9R())
$.fU7.n(0,a0,e)
n=B.U(e).k("J<1,a1<n,@>>")
n=B.A(new B.J(e,new C.c9S(),n),n.k("ai.E"))
r=A.R.am(n,null)
$.fU8.n(0,a0,r)
t=8
w=11
return B.b(B.afb(a0,r),$async$Uf)
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
return B.b(B.ax(),$async$Uf)
case 16:q=a6
w=17
return B.b(q.ap("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Uf)
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
return B.i($async$Uf,v)},
Hp:function Hp(d,e){this.a=d
this.b=e},
aoL:function aoL(d,e){this.a=d
this.b=e},
ua:function ua(d,e){this.a=d
this.b=e},
mc:function mc(d,e){this.a=d
this.b=e},
hp:function hp(d,e){this.a=d
this.b=e},
eB:function eB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lr:function lr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c9D:function c9D(){},
c9E:function c9E(){},
c9C:function c9C(){},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c9s:function c9s(){},
c9t:function c9t(){},
c9p:function c9p(){},
c9q:function c9q(){},
c9r:function c9r(){},
jt:function jt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9U:function c9U(d){this.a=d},
c9V:function c9V(){},
c9P:function c9P(d){this.a=d},
c9O:function c9O(){},
c9K:function c9K(){},
c9L:function c9L(){},
c9M:function c9M(){},
c9N:function c9N(){},
c9Q:function c9Q(d){this.a=d},
c9R:function c9R(){},
c9S:function c9S(){},
hNc(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fmI(e,v,d,B.b_(w))
w.$1(new C.fmE())
w.$1(new C.fmF())
w.$1(new C.fmG())
w.$1(new C.fmH())
return v},
fmI:function fmI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmE:function fmE(){},
fmF:function fmF(){},
fmG:function fmG(){},
fmH:function fmH(){},
aZ8:function aZ8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9y:function c9y(d){this.a=d},
c9x:function c9x(){},
c9z:function c9z(){},
c9A:function c9A(d,e){this.a=d
this.b=e},
c9B:function c9B(d){this.a=d},
am_:function am_(d,e){this.c=d
this.a=e},
bg_:function bg_(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dzy:function dzy(){},
aIu:function aIu(){},
c9G(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c9G=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.P(D.ezL)
u=!1
w=1
break}u=B.kG(!1,d,t,!1,null,A.a1R,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9G,v)},
ho5(d){var w=A.d.bi(D.FC,new C.c9H(d))
if(w<0)return!0
return w>=4},
ho6(d){var w=A.d.bi($.bAB(),new C.c9I(d))
if(w<0)return!0
return w>=5},
c9H:function c9H(d){this.a=d},
c9I:function c9I(d){this.a=d},
hOS(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xU()
$.pM().p9(t,new C.fpx(s),!0)
u=B.a([B.CO(v,A.pF,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eJL,v,v,v),A.f,v,v,new B.o(A.aU,v,v,w,v,v,A.n),v,v,v,v,A.nv,v,v,v),v,v,4,v,4,v))}return new B.am(A.X,v,A.b_,A.q,u,v)},
fpx:function fpx(d){this.a=d},
hOt(){return C.fKA()},
hLq(){return C.byz()},
hNt(){return C.fKr()},
aMD(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.foD(d,f),$async$aMD)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMD,v)},
foD(d,e){var w=0,v=B.j(x.H),u
var $async$foD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwN
if(u==null)u=e+".pdf"
w=2
return B.b(B.c1(A.K,null,new C.foE(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$foD)
case 2:return B.h(null,v)}})
return B.i($async$foD,v)},
foE:function foE(d,e){this.a=d
this.b=e},
abj:function abj(d,e,f){this.c=d
this.d=e
this.a=f},
edc:function edc(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
ede:function ede(d,e){this.a=d
this.b=e},
edf:function edf(d){this.a=d},
abB:function abB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZ7(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aZ6(g,m,f,d,e,h,l,k,j,o,i,null)},
h57(d){return B.ck(new C.fmD(d))},
fKC(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hOB(d){if(d===D.ce)return"None"
return C.fKC(d)},
bxi(d,e,f,g){return C.hEI(d,e,f,g)},
hEI(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bxi=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a8(d,!0)
if($.fHC&&t.oQ())t.eD()
$.fHC=!0
s.a=null
w=3
return B.b(B.hN(A.bh,!0,"Animation preview",d,new C.f8m(s,e,g,f),null,A.eK,!0,x.H),$async$bxi)
case 3:s=s.a
if(s!=null)s.aa(0)
$.fHC=!1
case 1:return B.h(u,v)}})
return B.i($async$bxi,v)},
fyK(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fyK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bR,x.w).w.a.a*0.88,280,440)
s=f===D.ce
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fKC(f)+" Slide transition preview"
s=s?Ab.DV:A.um
w=3
return B.b(C.bxi(d,s,new B.a3(t,t*0.56,B.bt(B.m(14),new C.aG5(f,null),A.ap),null),r),$async$fyK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fyK,v)},
h4q(d,e,f){var w,v,u=null,t=A.cp.au(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d9(f,t)
case 2:case 17:return B.dQ(B.d9(f,t),new B.u((1-t)*48,0))
case 3:return B.dQ(B.d9(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dQ(B.d9(f,t),new B.u(0,(1-t)*36))
case 5:return B.dQ(B.d9(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e7(A.A,B.d9(f,t),0.5+t*0.5,u,u)
case 7:return B.e7(A.A,B.d9(f,t),1.4-t*0.4,u,u)
case 8:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fm((1-t)*1.2)
return B.fn(A.A,B.d9(f,t),u,w,!0)
case 9:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jz((1-t)*1.2)
return B.fn(A.A,B.d9(f,t),u,w,!0)
case 10:case 19:w=B.di()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.mf((1-t)*0.8)
v=0.6+t*0.4
w.ji(v,v,v,1)
return B.fn(A.A,B.d9(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dQ(B.d9(f,t),new B.u((1-t)*24,0))}},
bA7(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bA7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bR,x.w).w.a.a*0.88,300,440)
s=f===D.ce
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fKC(f)+" Element animation preview"
s=s?Ab.DV:A.um
w=3
return B.b(C.bxi(d,s,new B.a3(t,t*0.62,B.bt(B.m(14),new C.awY(f,null),A.ap),null),r),$async$bA7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bA7,v)},
hOA(d){var w,v,u,t,s=$.adU.W(0,d)
if(s!=null){$.adU.n(0,d,s)
return s}w=A.cy.aG(A.a.aY(d,A.a.cJ(d,",")+1))
$.adU.n(0,d,w)
v=$.fIo=$.fIo+w.length
u=B.a2($.adU).k("cw<1>")
for(;;){if(!(v>41943040&&$.adU.a>1))break
t=new B.cw($.adU,u).gah(0)
if(!t.C())B.b9(B.fz())
v-=$.adU.W(0,t.gT(0)).length
$.fIo=v}return w},
hOh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ae("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kw(0,d),j=B.A(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.an(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cS,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.R_(s,A.u))
v.push(new B.eo(n,l,l,A.cS,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.R_(t,A.u))
v.push(new B.eo(n,l,l,A.cS,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.R_(u,A.cq))
v.push(new B.eo(n,l,l,A.cS,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aY(d,r)
v.push(B.dm(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0y(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
m.E(new B.ky(e))
return m
case"rounded":m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
w=e.ge8()*0.18
m.E(new B.iP(B.bx(e,new B.aY(w,w))))
return m
case"triangle":m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
m.E(new B.b4(e.gbO().a,e.b))
w=e.d
m.E(new B.ao(e.c,w))
m.E(new B.ao(e.a,w))
m.E(new B.bD())
return m
case"hexagon":w=$.V()
m=B.a([],m)
v=new B.aO(w.r,A.ao,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b4(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ao(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bD())
return v
case"diamond":m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
m.E(new B.b4(e.gbO().a,e.b))
m.E(new B.ao(e.c,e.gbO().b))
m.E(new B.ao(e.gbO().a,e.d))
m.E(new B.ao(e.a,e.gbO().b))
m.E(new B.bD())
return m
case"arch":m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b4(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ao(w,p))
m.b5t(new B.u(t,p),new B.aY(s,s))
m.E(new B.ao(t,u))
m.E(new B.bD())
return m
default:m=new B.aO($.V().r,A.ao,n,n,B.a([],m))
m.E(new B.nJ(e))
return m}},
fkc(d,e,f){return B.ck(new C.fkd(D.esr.t(0,d),d,f,e))},
aZ6:function aZ6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c9w:function c9w(d){this.a=d},
c9v:function c9v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9u:function c9u(){},
aZ3:function aZ3(d,e){this.b=d
this.a=e},
fmD:function fmD(d){this.a=d},
fmC:function fmC(d,e){this.a=d
this.b=e},
f8m:function f8m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8k:function f8k(d){this.a=d},
f8l:function f8l(d,e){this.a=d
this.b=e},
aG5:function aG5(d,e){this.c=d
this.a=e},
br_:function br_(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eS4:function eS4(d,e,f){this.a=d
this.b=e
this.c=f},
aGI:function aGI(d,e){this.b=d
this.a=e},
Ti:function Ti(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bga:function bga(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dKS:function dKS(d){this.a=d},
dKR:function dKR(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
Ho:function Ho(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9o:function c9o(d){this.a=d},
c9n:function c9n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awY:function awY(d,e){this.c=d
this.a=e},
baK:function baK(){this.d=0
this.c=this.a=null},
cZH:function cZH(d){this.a=d},
cZG:function cZG(d){this.a=d},
a5R:function a5R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgP:function bgP(d,e){var _=this
_.d=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
e2R:function e2R(d,e,f){this.a=d
this.b=e
this.c=f},
aX3:function aX3(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbT:function bbT(d,e,f){this.b=d
this.c=e
this.a=f},
bmF:function bmF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eHv:function eHv(){},
fkd:function fkd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnC:function bnC(d,e,f){this.b=d
this.c=e
this.a=f},
aII:function aII(){},
aJd:function aJd(){},
aKx:function aKx(){},
fnD(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fnD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wt.c2().Kz(D.cY8,A.t_,!0),$async$fnD)
case 3:r=e
if(r==null||J.cj(r.a)){u=null
w=1
break}t=J.fk(r.a)
s=t.c
if(s==null)throw B.R("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.R("That file is too big. Use a file under 8 MB.")
u=C.hOb(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnD,v)},
hOb(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a69(d,new B.Zc(A.cR.gcs().aG(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hGi(e)
if(A.a.i(w).length===0)throw B.R("No readable words were found in that Word file.")
return new C.a69(d,null,w.length>6e4?A.a.an(w,0,6e4):w)}w=A.c3.Jn(0,e,!0)
if(A.a.i(w).length===0)throw B.R("That file is empty.")
return new C.a69(d,null,w.length>6e4?A.a.an(w,0,6e4):w)},
hGi(d){var w,v,u,t,s,r,q,p,o=null,n=new C.crF().cBB(B.qJ(d,A.hO,o,o),o,o,!1).cDg(0,"word/document.xml")
if(n==null)return""
w=n.cKZ()
v=A.c3.Jn(0,w==null?$.h7j():w,!0).split("</w:p>")
u=new B.f8("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ae("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kw(0,r)
p=A.a.i(B.cB(q,new C.fba(),B.a2(q).k("G.E"),t).fN(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a69:function a69(d,e,f){this.a=d
this.b=e
this.c=f},
fba:function fba(){},
hoc(d,e,f,g,h,i,j,k,l){return new C.Mo(l,e,d,g,f,i,h,j,k,null)},
Mo:function Mo(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBI:function aBI(d,e,f,g,h,i,j,k,l){var _=this
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
ejq:function ejq(d){this.a=d},
ejo:function ejo(){},
ejp:function ejp(d){this.a=d},
efO:function efO(){},
efP:function efP(){},
efQ:function efQ(d,e){this.a=d
this.b=e},
eho:function eho(d){this.a=d},
ehc:function ehc(){},
ehd:function ehd(){},
efb:function efb(){},
eiw:function eiw(d){this.a=d},
ejm:function ejm(d,e){this.a=d
this.b=e},
ehm:function ehm(d,e){this.a=d
this.b=e},
ej9:function ej9(d){this.a=d},
eja:function eja(){},
ejb:function ejb(){},
ejc:function ejc(d){this.a=d},
ejd:function ejd(){},
eeA:function eeA(d){this.a=d},
ejn:function ejn(){},
egv:function egv(d,e){this.a=d
this.b=e},
eey:function eey(d){this.a=d},
eez:function eez(d){this.a=d},
egS:function egS(d){this.a=d},
egT:function egT(d,e,f){this.a=d
this.b=e
this.c=f},
egU:function egU(d){this.a=d},
egu:function egu(){},
egt:function egt(d){this.a=d},
egr:function egr(){},
egq:function egq(d){this.a=d},
egs:function egs(){},
efK:function efK(d){this.a=d},
efL:function efL(d){this.a=d},
egB:function egB(d){this.a=d},
egw:function egw(d){this.a=d},
egx:function egx(d){this.a=d},
egy:function egy(d){this.a=d},
egz:function egz(d){this.a=d},
egA:function egA(d){this.a=d},
egC:function egC(d,e){this.a=d
this.b=e},
eeC:function eeC(){},
eeD:function eeD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egN:function egN(){},
egO:function egO(d,e){this.a=d
this.b=e},
egL:function egL(d,e,f){this.a=d
this.b=e
this.c=f},
egM:function egM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egF:function egF(d,e,f){this.a=d
this.b=e
this.c=f},
egG:function egG(d,e,f){this.a=d
this.b=e
this.c=f},
egH:function egH(d){this.a=d},
egI:function egI(d,e){this.a=d
this.b=e},
egJ:function egJ(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egE:function egE(d,e){this.a=d
this.b=e},
egQ:function egQ(d){this.a=d},
egR:function egR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egP:function egP(d){this.a=d},
eh7:function eh7(){},
eh8:function eh8(){},
eh9:function eh9(){},
eha:function eha(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh4:function eh4(d){this.a=d},
eh6:function eh6(){},
eh5:function eh5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eh2:function eh2(d,e,f){this.a=d
this.b=e
this.c=f},
eh3:function eh3(d,e){this.a=d
this.b=e},
ehb:function ehb(){},
egD:function egD(d,e){this.a=d
this.b=e},
eeT:function eeT(){},
eeU:function eeU(d,e,f){this.a=d
this.b=e
this.c=f},
eeV:function eeV(d){this.a=d},
eeW:function eeW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eeS:function eeS(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehg:function ehg(d,e){this.a=d
this.b=e},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehe:function ehe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehi:function ehi(d,e){this.a=d
this.b=e},
edx:function edx(d,e){this.a=d
this.b=e},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeP:function eeP(d){this.a=d},
ehq:function ehq(d,e,f){this.a=d
this.b=e
this.c=f},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeK:function eeK(d){this.a=d},
ehp:function ehp(d,e,f){this.a=d
this.b=e
this.c=f},
eeB:function eeB(d){this.a=d},
efc:function efc(){},
ej7:function ej7(d,e){this.a=d
this.b=e},
ej8:function ej8(d,e,f){this.a=d
this.b=e
this.c=f},
eix:function eix(d,e,f){this.a=d
this.b=e
this.c=f},
edy:function edy(d){this.a=d},
edv:function edv(d,e){this.a=d
this.b=e},
edl:function edl(d,e){this.a=d
this.b=e},
edi:function edi(d){this.a=d},
edh:function edh(d,e){this.a=d
this.b=e},
edj:function edj(d,e){this.a=d
this.b=e},
eeN:function eeN(d){this.a=d},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeM:function eeM(d){this.a=d},
ee_:function ee_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
ee2:function ee2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ee3:function ee3(d){this.a=d},
ee1:function ee1(){},
edZ:function edZ(d,e,f){this.a=d
this.b=e
this.c=f},
eh1:function eh1(d,e){this.a=d
this.b=e},
ejg:function ejg(d){this.a=d},
ejh:function ejh(d,e){this.a=d
this.b=e},
eji:function eji(d){this.a=d},
ejj:function ejj(d,e,f){this.a=d
this.b=e
this.c=f},
ejf:function ejf(d){this.a=d},
eiN:function eiN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiM:function eiM(d,e,f){this.a=d
this.b=e
this.c=f},
eiL:function eiL(){},
eiK:function eiK(d,e,f){this.a=d
this.b=e
this.c=f},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiG:function eiG(d,e,f){this.a=d
this.b=e
this.c=f},
eiE:function eiE(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiI:function eiI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eiH:function eiH(d){this.a=d},
efG:function efG(d,e){this.a=d
this.b=e},
efF:function efF(d,e){this.a=d
this.b=e},
eiy:function eiy(){},
ej6:function ej6(d,e){this.a=d
this.b=e},
ej4:function ej4(d){this.a=d},
ej5:function ej5(d){this.a=d},
edq:function edq(d,e){this.a=d
this.b=e},
edo:function edo(d){this.a=d},
edp:function edp(d){this.a=d},
edr:function edr(d,e){this.a=d
this.b=e},
eds:function eds(d,e,f){this.a=d
this.b=e
this.c=f},
edw:function edw(d,e){this.a=d
this.b=e},
edn:function edn(d,e,f){this.a=d
this.b=e
this.c=f},
edm:function edm(d){this.a=d},
ehn:function ehn(d,e,f){this.a=d
this.b=e
this.c=f},
eje:function eje(d,e,f){this.a=d
this.b=e
this.c=f},
efJ:function efJ(d,e,f){this.a=d
this.b=e
this.c=f},
efI:function efI(){},
ee8:function ee8(d,e,f){this.a=d
this.b=e
this.c=f},
ee9:function ee9(d){this.a=d},
edk:function edk(d,e){this.a=d
this.b=e},
efa:function efa(d,e){this.a=d
this.b=e},
edt:function edt(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
edD:function edD(d,e){this.a=d
this.b=e},
edE:function edE(d,e){this.a=d
this.b=e},
edB:function edB(d){this.a=d},
edP:function edP(d,e){this.a=d
this.b=e},
edA:function edA(d){this.a=d},
edS:function edS(d){this.a=d},
edT:function edT(d){this.a=d},
edU:function edU(d){this.a=d},
edV:function edV(d){this.a=d},
edW:function edW(d){this.a=d},
edX:function edX(){},
edY:function edY(){},
edF:function edF(d){this.a=d},
edG:function edG(d){this.a=d},
edH:function edH(d){this.a=d},
edI:function edI(d){this.a=d},
edJ:function edJ(d){this.a=d},
edK:function edK(d){this.a=d},
edL:function edL(d){this.a=d},
edM:function edM(d){this.a=d},
edN:function edN(d){this.a=d},
edO:function edO(d){this.a=d},
edQ:function edQ(d){this.a=d},
edR:function edR(d,e){this.a=d
this.b=e},
ef9:function ef9(d,e,f){this.a=d
this.b=e
this.c=f},
ef8:function ef8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ef7:function ef7(d,e,f){this.a=d
this.b=e
this.c=f},
ef6:function ef6(d,e){this.a=d
this.b=e},
edu:function edu(d,e){this.a=d
this.b=e},
eec:function eec(d){this.a=d},
eeb:function eeb(d){this.a=d},
eea:function eea(d,e){this.a=d
this.b=e},
eed:function eed(d){this.a=d},
eee:function eee(d){this.a=d},
eef:function eef(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d){this.a=d},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh_:function eh_(d,e){this.a=d
this.b=e},
egZ:function egZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
egX:function egX(d){this.a=d},
egY:function egY(d,e){this.a=d
this.b=e},
egV:function egV(){},
egW:function egW(){},
eiz:function eiz(){},
eiA:function eiA(d,e){this.a=d
this.b=e},
eiB:function eiB(){},
eiC:function eiC(d){this.a=d},
eiD:function eiD(d,e){this.a=d
this.b=e},
edz:function edz(d,e){this.a=d
this.b=e},
eeE:function eeE(){},
eeF:function eeF(){},
eeG:function eeG(){},
eeJ:function eeJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeH:function eeH(d,e,f){this.a=d
this.b=e
this.c=f},
eg9:function eg9(d){this.a=d},
eg8:function eg8(){},
ega:function ega(d,e){this.a=d
this.b=e},
egb:function egb(d,e){this.a=d
this.b=e},
eg7:function eg7(d){this.a=d},
egc:function egc(d,e){this.a=d
this.b=e},
eg6:function eg6(d){this.a=d},
egd:function egd(d,e){this.a=d
this.b=e},
eg5:function eg5(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
eg4:function eg4(d){this.a=d},
egf:function egf(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
eg2:function eg2(d){this.a=d},
egh:function egh(d,e){this.a=d
this.b=e},
eg1:function eg1(d){this.a=d},
efV:function efV(d,e){this.a=d
this.b=e},
efW:function efW(d){this.a=d},
efX:function efX(d){this.a=d},
efU:function efU(d){this.a=d},
efY:function efY(d,e){this.a=d
this.b=e},
efT:function efT(d){this.a=d},
efZ:function efZ(d,e){this.a=d
this.b=e},
efS:function efS(d){this.a=d},
eg_:function eg_(d,e){this.a=d
this.b=e},
efR:function efR(d){this.a=d},
eg0:function eg0(d){this.a=d},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d){this.a=d},
ef5:function ef5(d){this.a=d},
eeY:function eeY(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
ef_:function ef_(d){this.a=d},
ef0:function ef0(d){this.a=d},
ef1:function ef1(d,e){this.a=d
this.b=e},
ef4:function ef4(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejl:function ejl(d){this.a=d},
egk:function egk(d,e){this.a=d
this.b=e},
egj:function egj(d,e){this.a=d
this.b=e},
egi:function egi(d,e){this.a=d
this.b=e},
egl:function egl(d){this.a=d},
egm:function egm(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehK:function ehK(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehW:function ehW(d){this.a=d},
ei6:function ei6(d){this.a=d},
eih:function eih(d){this.a=d},
eio:function eio(d){this.a=d},
eip:function eip(d){this.a=d},
eiq:function eiq(d){this.a=d},
eir:function eir(d){this.a=d},
eis:function eis(d,e){this.a=d
this.b=e},
ehM:function ehM(d){this.a=d},
ehN:function ehN(d){this.a=d},
ehO:function ehO(d){this.a=d},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehV:function ehV(d){this.a=d},
ehX:function ehX(d){this.a=d},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei1:function ei1(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei3:function ei3(d){this.a=d},
ei4:function ei4(d){this.a=d},
ehz:function ehz(d){this.a=d},
ei5:function ei5(d){this.a=d},
ehH:function ehH(d){this.a=d},
ei7:function ei7(d){this.a=d},
ehG:function ehG(d,e){this.a=d
this.b=e},
ei8:function ei8(d,e){this.a=d
this.b=e},
ei9:function ei9(d,e){this.a=d
this.b=e},
ehF:function ehF(d,e,f){this.a=d
this.b=e
this.c=f},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehI:function ehI(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eiv:function eiv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eiu:function eiu(d,e){this.a=d
this.b=e},
eia:function eia(d,e,f){this.a=d
this.b=e
this.c=f},
ehE:function ehE(d,e,f){this.a=d
this.b=e
this.c=f},
ehu:function ehu(d,e,f){this.a=d
this.b=e
this.c=f},
ehs:function ehs(d,e){this.a=d
this.b=e},
eib:function eib(d,e){this.a=d
this.b=e},
ehD:function ehD(d,e){this.a=d
this.b=e},
eht:function eht(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
eic:function eic(d){this.a=d},
ehC:function ehC(d){this.a=d},
eid:function eid(d){this.a=d},
eie:function eie(d){this.a=d},
eif:function eif(d){this.a=d},
eig:function eig(d){this.a=d},
ehB:function ehB(d){this.a=d},
eii:function eii(d){this.a=d},
eij:function eij(d){this.a=d},
eik:function eik(d,e){this.a=d
this.b=e},
ehA:function ehA(d){this.a=d},
eil:function eil(d,e){this.a=d
this.b=e},
ehy:function ehy(d){this.a=d},
eim:function eim(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ee7:function ee7(d,e,f){this.a=d
this.b=e
this.c=f},
ee6:function ee6(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
eiP:function eiP(d,e){this.a=d
this.b=e},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiO:function eiO(d,e){this.a=d
this.b=e},
eff:function eff(d,e){this.a=d
this.b=e},
efe:function efe(d){this.a=d},
efg:function efg(d,e){this.a=d
this.b=e},
efd:function efd(d){this.a=d},
efN:function efN(){},
efM:function efM(){},
ej2:function ej2(d){this.a=d},
ej1:function ej1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ej0:function ej0(d,e){this.a=d
this.b=e},
eiW:function eiW(d,e){this.a=d
this.b=e},
ej_:function ej_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiS:function eiS(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiY:function eiY(d,e){this.a=d
this.b=e},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
ej3:function ej3(d){this.a=d},
eex:function eex(d){this.a=d},
eew:function eew(d,e,f){this.a=d
this.b=e
this.c=f},
eev:function eev(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eek:function eek(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eel:function eel(d,e){this.a=d
this.b=e},
eem:function eem(d,e){this.a=d
this.b=e},
een:function een(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eej:function eej(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeo:function eeo(d,e){this.a=d
this.b=e},
eeq:function eeq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eep:function eep(d,e){this.a=d
this.b=e},
eer:function eer(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eei:function eei(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ees:function ees(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eet:function eet(d,e){this.a=d
this.b=e},
eeg:function eeg(d){this.a=d},
eeu:function eeu(d,e){this.a=d
this.b=e},
ego:function ego(d){this.a=d},
egn:function egn(d){this.a=d},
egp:function egp(d,e){this.a=d
this.b=e},
eft:function eft(d,e){this.a=d
this.b=e},
efu:function efu(d,e){this.a=d
this.b=e},
efs:function efs(d,e){this.a=d
this.b=e},
efv:function efv(d,e){this.a=d
this.b=e},
efr:function efr(d,e){this.a=d
this.b=e},
efw:function efw(d,e){this.a=d
this.b=e},
efq:function efq(d,e){this.a=d
this.b=e},
efx:function efx(d,e){this.a=d
this.b=e},
efp:function efp(d,e){this.a=d
this.b=e},
efy:function efy(d,e){this.a=d
this.b=e},
efo:function efo(d,e){this.a=d
this.b=e},
efz:function efz(d,e,f){this.a=d
this.b=e
this.c=f},
efn:function efn(d,e){this.a=d
this.b=e},
efA:function efA(d,e,f){this.a=d
this.b=e
this.c=f},
efm:function efm(d,e){this.a=d
this.b=e},
efB:function efB(d,e){this.a=d
this.b=e},
efl:function efl(d,e,f){this.a=d
this.b=e
this.c=f},
efi:function efi(d,e){this.a=d
this.b=e},
efC:function efC(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
efD:function efD(d,e){this.a=d
this.b=e},
efj:function efj(d,e,f){this.a=d
this.b=e
this.c=f},
efh:function efh(d,e){this.a=d
this.b=e},
efE:function efE(d,e){this.a=d
this.b=e},
efH:function efH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edg:function edg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehj:function ehj(d){this.a=d},
ehk:function ehk(d,e){this.a=d
this.b=e},
ad4:function ad4(d,e,f){this.a=d
this.b=e
this.c=f},
awl:function awl(d,e){this.c=d
this.a=e},
b9x:function b9x(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b0$=e
_.c=_.a=null},
cWc:function cWc(d){this.a=d},
cWb:function cWb(d){this.a=d},
b9L:function b9L(d,e){this.c=d
this.a=e},
cWy:function cWy(d){this.a=d},
cWz:function cWz(d){this.a=d},
Ip:function Ip(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b9w:function b9w(){this.d=!1
this.c=this.a=null},
cW9:function cW9(d){this.a=d},
cW5:function cW5(d){this.a=d},
cWa:function cWa(d){this.a=d},
cW4:function cW4(d){this.a=d},
cW8:function cW8(d){this.a=d},
cW6:function cW6(d){this.a=d},
cW7:function cW7(d,e){this.a=d
this.b=e},
O1:function O1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
YI:function YI(d,e,f){this.c=d
this.d=e
this.a=f},
aBL:function aBL(d,e,f){var _=this
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
ek0:function ek0(){},
ejR:function ejR(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejT:function ejT(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejO:function ejO(d,e){this.a=d
this.b=e},
ejP:function ejP(d){this.a=d},
ejQ:function ejQ(d,e,f){this.a=d
this.b=e
this.c=f},
ejY:function ejY(){},
ejZ:function ejZ(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejV:function ejV(d){this.a=d},
ejW:function ejW(d){this.a=d},
ejX:function ejX(d){this.a=d},
ek1:function ek1(d,e,f){this.a=d
this.b=e
this.c=f},
ek3:function ek3(d,e){this.a=d
this.b=e},
ek2:function ek2(d){this.a=d},
Iw:function Iw(d,e){this.c=d
this.a=e},
bo6:function bo6(d,e){this.b=d
this.a=e},
bem:function bem(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bel:function bel(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHp:function aHp(){},
aJr:function aJr(){},
btO:function btO(){},
aJs:function aJs(){},
fpy(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fpy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wt.c2().Kz(B.a(["pdf"],x.s),A.t_,!0),$async$fpy)
case 3:q=e
if(q==null||J.cj(q.a)){u=null
w=1
break}t=J.fk(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.blq(s,"data:application/pdf;base64,"+A.cR.gcs().aG(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fpy,v)},
hOM(d){var w,v,u,t,s,r
try{w=B.jg(d,0,null)
v=B.ae("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cA(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c5(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ae("/Type\\s*/Page\\b",!0,!1,!1,!1).kw(0,w).gJ(0)
if(t>0){s=J.aNZ(t,1,200)
return s}}catch(r){}return 1},
fpp(d){return C.hOL(d)},
hOL(d){var w=0,v=B.j(x.T),u
var $async$fpp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fpp,v)},
bzk(d,e,f,g){return C.hOV(d,e,f,g)},
hOV(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bzk=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e3(b6,x.co).gah(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h5I(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lB(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lB(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lB(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lB(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.V()
g=new B.rA()
f=B.FS(g,null)
a7=B.L()
a7.r=A.qa.gp(0)
f.aW(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fv
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.G()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pO()
w=7
return B.b(a3.yp(800,h),$async$bzk)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hf(A.fP),$async$bzk)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.f6(A.dD.gaN(a5))
a7=A.cR.gcs().aG(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a6(b5)
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
return B.i($async$bzk,v)},
aNc(d,e,f){return C.hOJ(d,e,f)},
hOJ(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aNc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.afp(d,e,f,new C.fpn(r,q),q,"Sign document"),$async$aNc)
case 3:if(!new B.e3(q,x.co).gah(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bzk(q,t,r.b,r.c),$async$aNc)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aZa(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNc,v)},
hOT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h_2(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h_2(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aY(A.a.aU(A.o.fG(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.a8(q.c*100,2)+"%;top:"+A.k.a8(q.d*100,2)+"%;width:"+A.k.a8(q.e*100,2)+"%;height:"+A.k.a8(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aY(A.a.aU(A.o.fG(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aI(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lb&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fZH(q.ay)+";border:2px solid "+C.fZH(q.ch)+'"></div>'
break
case 5:l=C.fJt(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gah6()
if(p==null)p=A.aso
n=B.U(p)
k=n.k("px<1>")
j=new B.px(p,0,8,k)
j.G_(p,0,8,n.c)
j=new B.bU(j,j.gJ(0),k.k("bU<ai.E>"))
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
fZH(d){var w=A.o.az(d,24)
return"rgba("+(A.o.az(d,16)&255)+","+(A.o.az(d,8)&255)+","+(d&255)+","+A.k.a8((w&255)/255,3)+")"},
h_2(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
bzi(d,e){var w=0,v=B.j(x.H)
var $async$bzi=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fpw(e,C.hOT(e),d),d,null,!0,!0,x.H),$async$bzi)
case 2:return B.h(null,v)}})
return B.i($async$bzi,v)},
bzj(){var w=0,v=B.j(x.T),u,t,s
var $async$bzj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fq(92,2400),$async$bzj)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fpp(s),$async$bzj)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzj,v)},
aNd(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aNd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKH(d),$async$aNd)
case 3:t=f
s=A.a.i(d.b)
r=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=X.frI(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNd,v)},
fU5(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aZa:function aZa(d,e,f){this.a=d
this.b=e
this.c=f},
fpn:function fpn(d,e){this.a=d
this.b=e},
fpw:function fpw(d,e,f){this.a=d
this.b=e
this.c=f},
fpt:function fpt(d){this.a=d},
fpu:function fpu(d,e,f){this.a=d
this.b=e
this.c=f},
fpv:function fpv(d,e,f){this.a=d
this.b=e
this.c=f},
hOK(d){return C.kj(d.w)},
hOR(d){var w,v,u,t
if(d.length===0||!A.d.ea(d,C.hQz()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xS(d){var w=A.a.i(d),v=B.ae("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.hbj()
if(w.b.test(u))return u
return null},
h5K(d,e,f){var w,v,u=C.hjR(d),t=$.p2()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
hOX(d){var w,v,u,t,s=B.b_(x.N)
for(w=J.aU(d.a),v=new B.hK(w,d.b);v.C();){u=w.gT(w).y
t=C.xS(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fpl(d,e){var w,v=d.y,u=C.xS(v==null?"":v)
if(u!=null)return d.y=u
w=C.hOX(new B.a5(e,new C.fpm(d),B.U(e).k("a5<1>")))
v=d.x
return d.y=C.h5K(v==null?"":v,null,w)},
hOW(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kj(w.w))return null
v=w.y
return C.xS(v==null?"":v)},
hoe(){var w,v=$.p2(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"SL"+A.d.fN(u)},
Ui(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ui=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$Ui)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eW("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$Ui)
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
p=B.a6(m)
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
return B.i($async$Ui,v)},
Uj(d){return C.hof(d)},
hof(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Uj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$Uj)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hv("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.P(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,A.cD,null),$async$Uj)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a6(p)
$.al.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uj,v)},
a6b(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6b=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bY(),$async$a6b)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Ui(),$async$a6b)
case 4:s=a6
r=C.xS(a2==null?"":a2)
if(r==null)r=a3!=null?C.h5K(a3,null,A.a3u):null
q=x.N
p=B.b_(q)
for(o=J.df(s),n=J.aU(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xS(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdL(s),n=n.gah(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a_(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dF.aG(t)
g.n(0,"payload",A.cR.gcs().aG(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.P(Date.now(),0,!1).a4().ab())
if(D.QJ.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xS(J.k(q==null?"":q))
if(f==null)f=C.fUa(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Uj(s),$async$a6b)
case 7:u=new B.aD9(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hoe()
n=r==null
d=n?C.fUa(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dF.aG(t)
q.n(0,"payload",A.cR.gcs().aG(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.P(Date.now(),0,!1).a4().ab())
if(D.QJ.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Uj(s),$async$a6b)
case 8:u=new B.aD9(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6b,v)},
fUa(d){var w,v,u=$.p2()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aC(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
aoP(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aoP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aoP)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Ui(),$async$aoP)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bo(t,new C.c9W(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Uj(t),$async$aoP)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aoP,v)},
aoO(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aoO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xS(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$aoO)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Ui(),$async$aoO)
case 6:t=o.jl(f),t=t.gah(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xS(J.k(q==null?"":q))===p){u=C.a6a(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoO,v)},
a6a(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a6a=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bY(),$async$a6a)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Ui(),$async$a6a)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aM(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=A.c3.c6(0,A.cy.aG(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.QJ.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aF(0,s,null)
if(m.b(r)){q=B.a_(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.R.am(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dS(B.a_(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.P(Date.now(),0,!1).a4().ab())
o.n(p,g,l)}w=7
return B.b(C.Uj(p),$async$a6a)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6a,v)},
hOQ(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.P(Date.now(),0,!1).a4().ab())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("J<1,a1<n,@>>")
w=B.A(new B.J(d,new C.fps(),w),w.k("ai.E"))
v.n(0,"decks",w)
return v},
fpA(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.P(Date.now(),0,!1).a4().ab())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ac())
return A.R.am(w,null)}return A.R.am(C.hOQ(d==null?B.a([],x.D):d,f,g),null)},
fpz(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fpz=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a6b(h,d,e,f,g),$async$fpz)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xS(e==null?"":e)
u=new B.aCX(s,t)
w=1
break}t=A.dF.aG(h)
t=A.jY.gcs().aG(t)
u=new B.aCX(C.xS(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fpz,v)},
fKJ(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cX(q,"NGMYSLIDESYNC2|"))return!0
if(J.cX(q,"NGMYSLIDECODE|"))return!0
if(J.cX(q,"NGMY_SL:"))return!0
if(J.eT(q,s)||J.eT(q,r))return!0
if(J.cX(q,"{"))try{w=A.R.aF(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hOU(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fKJ(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aY(v,u))
if(C.fKJ(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aY(v,s))
if(C.fKJ(t))return t}}return null},
fpo(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cX(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cX(t,"NGMY_SL:"))w=v.a(A.R.aF(0,A.c3.c6(0,A.cy.aG(J.mn(t,8))),null))
else w=v.a(A.R.aF(0,t,null))
v=C.hxR(w)
return v}catch(u){v=B.a([],x.D)
return v}},
afa(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$afa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aoO(t[1]),$async$afa)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fpo(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xS(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aoO(r),$async$afa)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fpo(s)
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
return B.b(C.a6a(t[1]),$async$afa)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fpo(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fpo(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afa,v)},
hxR(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.QJ.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fKG(C.Ue(B.a_(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d6(u,x.f)
t=B.cB(t,new C.f_9(w),t.$ti.k("G.E"),x.I)
t=B.A(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fKG(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.n(0,"id",C.cA())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iT
$.iT=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.Ue(B.a_(o,x.N,x.z))
if(e&&C.kj(p.w))p.Q=new B.P(Date.now(),0,!1).a4().bM(144e8).ab()
return p},
bz3(){var w=0,v=B.j(x.aT),u,t,s
var $async$bz3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Fp(),$async$bz3)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.afa(s),$async$bz3)
case 4:t=e
u=J.cj(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bz3,v)},
fxZ(d){var w=0,v=B.j(x.T),u,t
var $async$fxZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hN(D.U3,!0,"Dismiss",d,new C.fy_(),new C.fy0(),A.DS,!0,x.N),$async$fxZ)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.P(D.exY)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxZ,v)},
hSz(d,e,f,g,h){return B.a8(d,!1).cp(B.eE(new C.fy1(h,e,g,f),!0,null,x.H))},
fpm:function fpm(d){this.a=d},
c9W:function c9W(d){this.a=d},
fps:function fps(){},
f_9:function f_9(d){this.a=d},
fy_:function fy_(){},
fy0:function fy0(){},
fy1:function fy1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ug:function Ug(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBJ:function aBJ(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ejx:function ejx(){},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejw:function ejw(d,e){this.a=d
this.b=e},
eju:function eju(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejD:function ejD(d){this.a=d},
ejB:function ejB(d){this.a=d},
ejE:function ejE(d){this.a=d},
ejA:function ejA(d){this.a=d},
ejF:function ejF(d,e){this.a=d
this.b=e},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejr:function ejr(d,e){this.a=d
this.b=e},
Uh:function Uh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bha:function bha(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ejG:function ejG(d,e){this.a=d
this.b=e},
ejH:function ejH(d){this.a=d},
ejI:function ejI(){},
ejJ:function ejJ(d){this.a=d},
ejK:function ejK(d,e){this.a=d
this.b=e},
aBG:function aBG(d){this.a=d},
aBH:function aBH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eda:function eda(d){this.a=d},
ed9:function ed9(){},
edb:function edb(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed5:function ed5(){},
ed7:function ed7(d){this.a=d},
ed8:function ed8(d){this.a=d},
brk:function brk(){},
aoQ:function aoQ(d){this.a=d},
aBK:function aBK(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ejM:function ejM(d){this.a=d},
ejL:function ejL(d){this.a=d},
hCU(){var w,v,u,t
for(v=0;v<4;++v){w=D.cO9[v]
try{if(A8.bSI(w)){u=w
return u}}catch(t){}}return null},
Py(d,e){return C.hLB(d,e)},
hLB(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Py=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hCU()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nH?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.q4(c6,!0)
b6.toString
p=B.a8(c6,!0)
b7=new B.cp(null,x.A)
b8=A.d.gL(c3)
b9=$.av()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.nZ(new C.fjG(c2,b7,o),!1,!1)
b6.lm(0,l)
b9=x.H
B.cf(null,A.da,!1,null,new C.fjH(n,m),c6,null,!0,!0,b9)
k=new C.fjL(b7)
j=new C.fjM()
i=null
t=4
b3=c2.a
h=Af.aPt(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fAn(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aUd(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Gc.xt(i,"dataavailable",new C.fjI(e))
d=new B.bP(new B.be($.bu,x.dT),x.b2)
A.Gc.xt(i,"stop",new C.fjJ(d))
J.afI(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Py)
case 8:w=7
return B.b(c5.$1(d0),$async$Py)
case 7:a0=d0
J.fAp(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afI(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afI(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Py)
case 15:w=14
return B.b(c5.$1(d0),$async$Py)
case 14:a0=d0
case 13:J.fAp(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afI(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.P(Date.now(),0,!1).bM(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbm())b3=b3===b8.gbm()&&0<b8.gct()
else b3=!0
if(!b3){w=17
break}J.fAp(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.ft,null,b9),$async$Py)
case 18:w=16
break
case 17:J.afI(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afI(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cK(0,A.np),$async$Py)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hE(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ae("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mP(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JV(b0)
J.lH(b0)
B.bN(A.no,new C.fjK(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a6(c4)
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
J.lH(l)
if(p.oQ())p.eD()
c3=o
b3=$.av()
c3.shI(b3)
J.aO3(c3,0)
c3=n
c3.shI(b3)
J.aO3(c3,0)
c3=m
c3.shI(b3)
J.aO3(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Py,v)},
fjG:function fjG(d,e,f){this.a=d
this.b=e
this.c=f},
fjF:function fjF(){},
fjH:function fjH(d,e){this.a=d
this.b=e},
fjL:function fjL(d){this.a=d},
fjM:function fjM(){},
fjI:function fjI(d){this.a=d},
fjJ:function fjJ(d){this.a=d},
fjK:function fjK(d){this.a=d},
brw:function brw(d,e,f){this.c=d
this.d=e
this.a=f},
eUw:function eUw(){},
eUx:function eUx(){},
cai(d){var w=0,v=B.j(x.at),u,t,s
var $async$cai=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ap_(d,A.yb),$async$cai)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.P(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cai,v)},
cah(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5S:function a5S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgU:function bgU(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e3I:function e3I(d){this.a=d},
e3G:function e3G(d){this.a=d},
e3H:function e3H(d,e){this.a=d
this.b=e},
a6J:function a6J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nR$=k
_.nS$=l
_.nT$=m
_.nf$=n},
a6K:function a6K(d,e){this.a=d
this.b=e},
b_P:function b_P(){},
ccu:function ccu(){},
ccv:function ccv(){},
ccw:function ccw(d,e,f,g,h,i,j,k,l){var _=this
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
hcj(d){return new C.ag_(d)},
a12:function a12(){},
ag_:function ag_(d){this.a=d},
aOo:function aOo(){},
aue:function aue(d,e){this.d=d
this.b=e
this.a=null},
aPS:function aPS(d){this.b=d
this.a=null},
feP(d,e){var w=0,v=B.j(x.H)
var $async$feP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.V().gwG().Ki(d,e),$async$feP)
case 2:B.frO()
return B.h(null,v)}})
return B.i($async$feP,v)},
h31(d,e){return(A.qD[(d^e)&255]^A.o.az(d,8))>>>0},
fcH(d,e,f,g,h,i){var w=C.hI_(d,A.d9,f,null,A.cW,g,h,i)
return w},
h4T(d){var w=F.h5B(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hjR(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.os.h(0,w)
if(v!=null)return v
for(u=A.os.gdL(A.os),u=u.gah(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ae("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.an(s,0,2)
return A.a.an(s+"XX",0,2)},
h50(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<32;++w)v+="- "+D.bYl[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bxf(d,e){return C.hED(d,e)},
hED(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bxf=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hE([d],"application/pdf")
n=x.z
q=B.aRr(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cy(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ec(B.jN(o,"share",[p]),x.H),$async$bxf)
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
return B.i($async$bxf,v)},
fKA(){var w=0,v=B.j(x.y),u,t,s
var $async$fKA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f64
s=$.bwN
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bxf(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fKA,v)},
byz(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$byz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f64
l=$.bwN
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.h_I()?3:4
break
case 3:w=5
return B.b(C.bxf(m,k),$async$byz)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwO
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mP(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JV(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$byz)
case 10:J.lH(q)
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
return B.i($async$byz,v)},
fKr(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fKr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwO
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lg.tV(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fKr,v)},
fKI(d,e){var w=0,v=B.j(x.H),u,t
var $async$fKI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hE([d],"text/html"))
t.toString
u=window
u.toString
A.lg.tV(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fKI,v)},
aZM(d,e){var w=0,v=B.j(x.y),u
var $async$aZM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZO(d,e),$async$aZM)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZN(d),$async$aZM)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZM,v)}},D,Ai,H,Aj,N,W,P,Ak,G,F,E,Q,X,Y,Z,Al,A6,K,A_,O,V,L,A7,Am,A0,An,Ao,A8,A9,Ap,Aa,Ab,Ac,Aq,Ar,R,As,I,At,Au,S,T,M,A1,A2,A3,Av,Ad
J=c[1]
B=c[0]
A=c[2]
U=c[181]
A4=c[131]
Ae=c[48]
Af=c[56]
A5=c[51]
Ag=c[102]
Ah=c[192]
C=a.updateHolder(c[4],C)
D=c[179]
Ai=c[27]
H=c[88]
Aj=c[35]
N=c[183]
W=c[180]
P=c[169]
Ak=c[95]
G=c[150]
F=c[30]
E=c[182]
Q=c[104]
X=c[28]
Y=c[138]
Z=c[108]
Al=c[146]
A6=c[110]
K=c[184]
A_=c[59]
O=c[160]
V=c[73]
L=c[118]
A7=c[123]
Am=c[186]
A0=c[92]
An=c[83]
Ao=c[86]
A8=c[52]
A9=c[156]
Ap=c[34]
Aa=c[71]
Ab=c[103]
Ac=c[191]
Aq=c[193]
Ar=c[190]
R=c[65]
As=c[187]
I=c[135]
At=c[147]
Au=c[194]
S=c[46]
T=c[185]
M=c[167]
A1=c[189]
A2=c[188]
A3=c[55]
Av=c[166]
Ad=c[64]
C.nx.prototype={
uf(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.te(t,v)
return new C.nx(t===0?!1:w,v,t)},
bFV(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.C_()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.te(w,u)
return new C.nx(r===0?!1:s,u,r)},
bGk(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.C_()
w=o-d
if(w<=0)return p.a?$.fM2():$.C_()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.te(w,u)
q=new C.nx(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a0O())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.al(e,16)
if(A.o.F(e,16)===0)return r.bFV(v)
u=w+v+1
t=new Uint16Array(u)
C.fXo(r.b,w,e,t)
w=r.a
s=C.te(u,t)
return new C.nx(s===0?!1:w,t,s)},
lW(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.R(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.al(e,16)
u=A.o.F(e,16)
if(u===0)return n.bGk(v)
t=w-v
if(t<=0)return n.a?$.fM2():$.C_()
s=n.b
r=new Uint16Array(t)
C.htR(s,w,e,r)
w=n.a
q=C.te(t,r)
p=new C.nx(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aE(0,$.a0O())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a0O())}return p},
aJ(d,e){var w,v=this.a
if(v===e.a){w=C.czv(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5N(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5N(t,e)
if(s===0)return $.C_()
if(r===0)return t.a===e?t:t.uf(0)
w=s+1
v=new Uint16Array(w)
C.htP(t.b,s,d.b,r,v)
u=C.te(w,v)
return new C.nx(u===0?!1:e,v,u)},
G0(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.C_()
w=d.c
if(w===0)return t.a===e?t:t.uf(0)
v=new Uint16Array(s)
C.b6M(t.b,s,d.b,w,v)
u=C.te(s,v)
return new C.nx(u===0?!1:e,v,u)},
bta(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.te(r,u)
return new C.nx(!1,u,s)},
bt9(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.te(u,r)
return new C.nx(!1,r,v)},
btb(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.te(p,m)
return new C.nx(s!==0,m,s)},
SW(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.C_()
w=t.a
if(w===e.a){if(w){w=$.a0O()
return t.G0(w,!0).btb(e.G0(w,!0),!0).a5N(w,!0)}return t.bta(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bt9(v.G0($.a0O(),!1),!1)},
ao(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5N(e,v)
if(C.czv(u.b,t,e.b,w)>=0)return u.G0(e,v)
return e.G0(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uf(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5N(e,v)
if(C.czv(u.b,t,e.b,w)>=0)return u.G0(e,v)
return e.G0(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.C_()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fXp(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.te(w,t)
return new C.nx(q===0?!1:r,t,q)},
bFU(d){var w,v,u,t
if(this.c<d.c)return $.C_()
this.aNA(d)
w=$.fFK.c2()-$.auY.c2()
v=C.fFM($.fFJ.c2(),$.auY.c2(),$.fFK.c2(),w)
u=C.te(w,v)
t=new C.nx(!1,v,u)
return this.a!==d.a&&u>0?t.uf(0):t},
cg5(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aNA(d)
w=C.fFM($.fFJ.c2(),0,$.auY.c2(),$.auY.c2())
v=C.te($.auY.c2(),w)
u=new C.nx(!1,w,v)
if($.fFL.c2()>0)u=u.lW(0,$.fFL.c2())
return t.a&&u.c>0?u.uf(0):u},
aNA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fXl&&d.c===$.fXn&&g.b===$.fXk&&d.b===$.fXm)return
w=d.b
v=d.c
u=16-A.o.gahv(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fXj(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fXj(g.b,f,u,r)}else{r=C.fFM(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fFN(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.czv(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6M(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6M(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.htQ(p,r,i);--o
C.fXp(h,j,0,r,o,s)
if(r[i]<h){m=C.fFN(j,s,o,n)
C.b6M(r,l,n,m,r)
while(--h,r[i]<h)C.b6M(r,l,n,m,r)}--i}$.fXk=g.b
$.fXl=f
$.fXm=w
$.fXn=v
$.fFJ.b=r
$.fFK.b=l
$.auY.b=s
$.fFL.b=u},
gV(d){var w,v,u,t=new C.czw(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.czx().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nx&&this.aJ(0,e)===0},
ro(d,e){return this.aJ(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u8(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gahv(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.az(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.czy(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.czz(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kT(A.aG.gaN(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uf(0):r
while(v.c>1){u=$.h9g()
if(u.c===0)B.b9(D.aWc)
t=v.cg5(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bFU(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dy(w,x.bJ).fN(0)},
$iaP7:1,
$ihy:1}
C.aOy.prototype={
K(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cDg(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gaj(d){return A.d.gaj(this.a)},
gai(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gah(d){var w=this.a
return new J.jQ(w,w.length,B.U(w).k("jQ<1>"))}}
C.Qa.prototype={
cKZ(){var w,v
if(this.as==null)this.b7M()
w=this.as
v=w==null?null:w.am9()
return v==null?null:v.ey()},
b7M(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.am9().ey()
this.as=new C.bK5(v)}},
gX(d){return this.at}}
C.a1Z.prototype={
a3(){return"CompressionType."+this.b}}
C.bE8.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cl()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dP(v,u)+(s.b&A.xL[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cl()}w=A.o.dP(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fp(u,t)&A.xL[d])
s.c=t}return v}}
C.bCu.prototype={
cBA(d,e){var w,v,u,t,s,r=this,q=new C.bE8(d)
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
t=r.ceq(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cet(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
ceq(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.d1M[u])v=!1
if(t!==D.cIc[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cet(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bVS()
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
u[w]=l}c9.fr=B.bZ(6,$.h7n(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h7m()
u=x.an
c9.y=B.bZ(6,v,!1,u)
c9.z=B.bZ(6,v,!1,u)
c9.Q=B.bZ(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bRw(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqT(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqT(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.al(a8,16)
b2=A.o.F(a8,16)
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
a3=c9.aqT(d3)
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
c1=(c1<<8^D.FJ[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.FL[b9];++b9
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
if(b8===0){b8=D.FL[b9];++b9
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
if(b8===0){b8=D.FL[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.FL[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.FL[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bE(c3)
c1=c1<<8^D.FJ[c1>>>24&255^v];--c2}d4.bE(c3)
c1=(c1<<8^D.FJ[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bE(c7)
c1=(c1<<8^D.FJ[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bE(c7)
c1=(c1<<8^D.FJ[c1>>>24&255^c7&255])>>>0
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
aqT(d){var w,v,u,t,s=this,r=s.ay
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
bRw(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bVS(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.crG.prototype={
aEg(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIZ(e)
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
if(w>0)e.aEj(w,!1)
r.ceO(e)
q=r.r
v=r.f
u=e.aH6(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aI()!==33639248)break
s=new C.b5s()
s.cKY(0,u,e,f)
q.push(s)}},
ceO(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5q(20,r)
if(w.aI()!==117853008){d.c=s
return}w.aI()
v=w.rb()
w.aI()
d.c=v
if(d.aI()!==101075792){d.c=s
return}d.rb()
d.aS()
d.aS()
d.aI()
d.aI()
d.rb()
d.rb()
u=d.rb()
t=d.rb()
this.f=u
this.r=t
d.c=s},
bIZ(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5q(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajz(A.hO)
o.aIn(r.ey(),A.hO,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aI()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.crE.prototype={}
C.auC.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.crH.prototype={
aEg(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aI()!==67324752)return
e.aS()
o.b=e.aS()
w=D.ayL.h(0,e.aS())
o.c=w==null?D.JR:w
o.d=e.aS()
o.e=e.aS()
o.f=e.aI()
o.r=e.aI()
o.w=e.aI()
v=e.aS()
u=e.aS()
o.x=e.akX(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aNa:D.Ck
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.Ck&&u>2){w=o.y
w.toString
s=B.qJ(w,A.hO,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aS()===39169){s.aS()
s.aS()
s.akX(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aS()
o.at=D.aNb
o.ax=new C.crE(r,q)
w=D.ayL.h(0,q)
o.c=w==null?D.JR:w}}}if((o.b&8)!==0){p=e.aI()
if(p===134695760)o.f=e.aI()
else o.f=p
o.r=e.aI()
o.w=e.aI()}},
gJ(d){return this.bgZ().length},
am9(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qJ(new Uint8Array(0),A.hO,q,q)
w=r.at
if(w!==D.Ck)if(p.gJ(0)<=0)r.at=D.Ck
else{if(w===D.aNa){p=r.bEe(p)
r.Q=p}else if(w===D.aNb){p=r.bDS(p)
r.Q=p}r.at=D.Ck}w=r.c
if(w===D.ac0){v=p.c
u=B.dd()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.oR.At(p.ey(),!0,!1)
else{t=B.a6z(A.hO,r.w)
p=r.Q
p.toString
A.oR.a1J(p,t,!0,!1)
u.b=t.FA()}r.Q.c=v
return B.qJ(u.b9(),A.hO,q,q)}else if(w===D.ac1){s=B.a6z(A.hO,32768)
p=r.Q
v=p.c
C.hcu().cBA(p,s)
u=s.FA()
r.Q.c=v
return B.qJ(u,A.hO,q,q)}else return B.qJ(p.ey(),A.hO,q,q)},
bgZ(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3N(d){var w=this.ch,v=C.Il(C.h31(w[0].N(0),d))
w[0]=v
v=w[1].ao(0,v.SW(0,C.Il(255)))
w[1]=v
w[1]=v.aO(0,C.Il(134775813)).ao(0,C.Il(1)).SW(0,C.Il(4294967295))
w[2]=C.Il(C.h31(w[2].N(0),w[1].lW(0,24).N(0)))},
aN0(){var w=(this.ch[2].SW(0,C.Il(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bEe(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qJ(new Uint8Array(0),A.hO,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3N(u[v.c++]^r.aN0())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aN0()
r.b3N(s)
u&2&&B.ah(t)
t[w]=s}return B.qJ(t,A.hO,q,q)},
bDS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gJ(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.htw(k,w,v)
p=new Uint8Array(B.cn(A.aG.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cn(A.aG.dt(q,v,k)))
if(!C.fWP(A.aG.dt(q,k,k+2),u))throw B.R(B.fh("password error"))
k=new Uint8Array(16)
n=new C.bB4(k,new Uint8Array(16),p)
k=x.S
m=J.a3l(0,k)
m=n.r=new C.ccj(m)
m.c=!0
m.b=m.bgi(!0,new C.aqm(p))
if(m.c)m.d=B.bk(D.nF,!0,k)
else m.d=B.bk(D.xE,!0,k)
l=C.fV3(C.fV5(),64)
l.ba3(new C.aqm(o))
n.w=l
n.cKz(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fWP(k,m))throw B.R(B.fh("macs don't match"))
return B.qJ(r,A.hO,null,null)}}
C.b5s.prototype={
cKY(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.akX(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qJ(t,A.hO,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aS()
p=s.aS()
o=s.a5q(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rb()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rb()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rb()
p-=8}if(p>=4&&n.y===65535)n.y=o.aI()}}}}if(u>0)e.akX(u)
f.c=n.as
t=new C.crH(D.JR,n,D.Ck,B.a([C.Il(0),C.Il(0),C.Il(0)],x.f3))
n.ch=t
t.aEg(0,f,g)},
u(d){return this.at}}
C.crF.prototype={
cBB(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.crG(B.a([],x.fT))
this.a=g
g.aEg(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aOy(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Qa(o,A.o.al(Date.now(),1000),0):C.fNq(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fNq(o,q.w,q)
if(k.as==null)k.b7M()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajz(A.hO)
j.aIn(o,A.hO,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.J0(!1).GB(i,0,h,!0)}}return v}}
C.bB4.prototype={
cKz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bn(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hcd(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bHp(u,0,w,0,o)}else{o===$&&B.c()
q.bEi(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.JE(w,0)
m.x=A.aG.dt(m.x,0,10)
w=m.w
l=w.a
l.l7(0)
w=w.d
w===$&&B.c()
l.Bn(0,w,0,w.length)
return f}}
C.cco.prototype={}
C.ccs.prototype={}
C.ccm.prototype={}
C.aqm.prototype={}
C.ccr.prototype={
cBQ(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ee(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.ba3(new C.aqm(A.aG.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bIn(n.a,n.b,t,s,r)
r+=v}A.aG.ha(f,g,g+w,s)
return o.a.c},
bIn(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.R(B.dF("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bn(0,d,0,d.length)
v.Bn(0,f,0,4)
u=m.c
u===$&&B.c()
w.JE(u,0)
u=m.c
A.aG.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bn(0,s,0,s.length)
w.JE(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.ccn.prototype={}
C.ccl.prototype={}
C.aqn.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aqn){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
ro(d,e){var w=this.a
w===$&&B.c()
w=A.o.ro(w,e.gbRN())
if(!w)e.gbRN()
return w},
aGA(d,e){this.a=0
this.b=d},
rr(d){return this.aGA(d,null)},
aH9(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.f8(""),u=w.a
u===$&&B.c()
w.aWR(v,u)
u=w.b
u===$&&B.c()
w.aWR(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWR(d,e){var w,v=A.o.fG(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bo(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ccq.prototype={
l7(d){var w,v=this
v.a.rr(0)
v.c=0
A.aG.hi(v.b,0,4,0)
v.w=0
w=v.r
A.d.hi(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
alF(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aYi(u,0)
v.c=0}v.a.aH9(1)},
Bn(d,e,f,g){var w=this.cdi(e,f,g)
f+=w
g-=w
w=this.cdj(e,f,g)
this.cd9(e,f+w,g-w)},
JE(d,e){var w,v=this,u=C.fV4(v.a),t=u.a
t===$&&B.c()
t=C.fLb(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fLb(w,3)
v.cdd()
v.cda(u)
v.apK()
v.c7u(d,e)
v.l7(0)
return 20},
aYi(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nH(A.aG.gaN(d),d.byteOffset,d.length).getUint32(e,A.i0===w.d)
if(w.w===16)w.apK()},
apK(){this.cKy()
this.w=0
A.d.hi(this.r,0,16,0)},
cd9(d,e,f){while(f>0){this.alF(d[e]);++e;--f}},
cdj(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aYi(d,e)
e+=4
f-=4
w.aH9(4)
v+=4}return v},
cdi(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.alF(d[e]);++e;--f;++v}return v},
cdd(){this.alF(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.alF(0)}},
cda(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.apK()
u=v.d
switch(u){case A.i0:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.CM:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.R(B.bb("Invalid endianness: "+u.u(0)))}},
c7u(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i0===this.d,s=0;s<w;++s){r=v[s]
q=J.nH(A.aG.gaN(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cct.prototype={
cKy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pG[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pG[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pG[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pG[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pG[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pG[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pG[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pG[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pG[30]
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
C.ccp.prototype={
ba3(d){var w,v,u,t,s=this,r=s.a
r.l7(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bn(0,w,0,v)
w=s.d
w===$&&B.c()
r.JE(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hi(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.ha(w,0,u,s.d)
s.b4W(s.d,u,54)
s.b4W(s.e,u,92)
u=s.d
r.Bn(0,u,0,u.length)},
JE(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.JE(s,w)
s=u.e
t.Bn(0,s,0,s.length)
v=t.JE(d,e)
s=u.e
A.aG.hi(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bn(0,s,0,s.length)
return v},
b4W(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cck.prototype={}
C.ccj.prototype={
a07(d){return(D.nF[d&255]&255|(D.nF[d>>>8&255]&255)<<8|(D.nF[d>>>16&255]&255)<<16|D.nF[d>>>24&255]<<24)>>>0},
bgi(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.R(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.nH(A.aG.gaN(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a07((m>>>8|(m&$.pG[24])<<24)>>>0)^D.clc[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nH(A.aG.gaN(e),e.byteOffset,w)
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
p=(p^f.a07((k>>>8|(k&$.pG[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a07((k>>>8|(k&$.pG[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nH(A.aG.gaN(e),e.byteOffset,w)
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
p=(p^f.a07((g>>>8|(g&$.pG[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a07(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.R(B.bb("Should never get here"))}return s},
bHp(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nH(A.aG.gaN(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e5[a8&255]
u=D.e5[a9>>>8&255]
t=$.pG[8]
s=D.e5[b0>>>16&255]
r=$.pG[16]
q=D.e5[b1>>>24&255]
p=$.pG[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e5[a8&255]^C.n4(D.e5[a9>>>8&255],24)^C.n4(D.e5[b0>>>16&255],16)^C.n4(D.e5[b1>>>24&255],8)^b6[w][0]
m=D.e5[a9&255]^C.n4(D.e5[b0>>>8&255],24)^C.n4(D.e5[b1>>>16&255],16)^C.n4(D.e5[a8>>>24&255],8)^b6[w][1]
l=D.e5[b0&255]^C.n4(D.e5[b1>>>8&255],24)^C.n4(D.e5[a8>>>16&255],16)^C.n4(D.e5[a9>>>24&255],8)^b6[w][2]
b1=D.e5[b1&255]^C.n4(D.e5[a8>>>8&255],24)^C.n4(D.e5[a9>>>16&255],16)^C.n4(D.e5[b0>>>24&255],8)^b6[w][3]
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
a1=J.nH(A.aG.gaN(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nH(A.aG.gaN(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nH(A.aG.gaN(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nH(A.aG.gaN(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bEi(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nH(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nH(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nH(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nH(A.aG.gaN(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e4[a6&255]
v=D.e4[b0>>>8&255]
u=$.pG[8]
t=D.e4[a5>>>16&255]
s=$.pG[16]
r=D.e4[a4>>>24&255]
q=$.pG[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e4[a6&255]^C.n4(D.e4[b0>>>8&255],24)^C.n4(D.e4[a5>>>16&255],16)^C.n4(D.e4[a4>>>24&255],8)^b5[a9][0]
o=D.e4[a4&255]^C.n4(D.e4[a6>>>8&255],24)^C.n4(D.e4[b0>>>16&255],16)^C.n4(D.e4[a5>>>24&255],8)^b5[a9][1]
n=D.e4[a5&255]^C.n4(D.e4[a4>>>8&255],24)^C.n4(D.e4[a6>>>16&255],16)^C.n4(D.e4[b0>>>24&255],8)^b5[a9][2]
b0=D.e4[b0&255]^C.n4(D.e4[a5>>>8&255],24)^C.n4(D.e4[a4>>>16&255],16)^C.n4(D.e4[a6>>>24&255],8)^b5[a9][3]
a4=D.xE[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xE[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xE[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xE[o>>>8&255]
i=D.xE[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xE[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nH(A.aG.gaN(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bK4.prototype={}
C.bK5.prototype={
gJ(d){var w=this.a.length
return w},
am9(){return B.qJ(this.a,A.hO,null,null)}}
C.b70.prototype={
ua(d){return C.hwI(d)}}
C.bKY.prototype={
cw7(d){if(this.b)throw B.R(B.bb("FontLoader is already loaded"))
this.c.push(d.bw(new C.bKZ(),x.E))},
mb(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.R(B.bb("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mb)
case 6:w=5
return B.b(p.feP(f,r),$async$mb)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mb,v)}}
C.atj.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6x.prototype={
A(d,e){if(e==null)return!1
if(J.bJ(e)!==B.aX(this))return!1
return e instanceof C.a6x&&e.a===this.a},
gV(d){return B.bo(B.aX(this),B.w6(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.aX(this)===D.ffb)return"["+(w+B.dZ(this.a))+"]"
return"[ObjectKey "+(w+B.dZ(this.a))+"]"}}
C.aSQ.prototype={
bY(d){var w=new C.ay5(!0,this.e,null,new B.da(),B.cd())
w.bW()
w.scz(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxJ(0,!0)
w=this.e
if(!w.A(0,e.ag)){e.ag=w
e.aCU()}}}
C.ay5.prototype={
sxJ(d,e){return},
goN(){var w=this.a9$
return w!=null},
gkC(){var w=this.a9$
return w!=null},
L2(d){var w=d==null?B.fPM(null):d
w.sa2B(this.ag)
return w}}
C.a_1.prototype={
S(){return new C.aGo(B.b_(x.N))},
cIQ(d){return this.d.$1(d)},
cGF(){return this.e.$0()}}
C.aGo.prototype={
Z(){this.a0()
this.Ny()},
Ny(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ny=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cGF(),$async$Ny)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eSZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ny,v)},
X3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$X3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a5<1>")
p=B.A(new B.a5(r,new C.eT2(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.eT3(t))
w=3
return B.b(C.alj(p),$async$X3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eT4(t,s,p))
w=4
return B.b(t.Ny(),$async$X3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$X3,v)},
a_8(d){return this.chi(d)},
chi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.eT_(t))
s=J.q(d,"id")
w=3
return B.b(C.bV6(J.k(s==null?"":s)),$async$a_8)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.eT0(t))
w=1
break}q=C.fKG(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cIQ(B.a([q],x.D)),$async$a_8)
case 4:if(t.c==null){w=1
break}t.m(new C.eT1(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_8,v)},
Nx(d,e){return this.bEH(0,e)},
bEH(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eSU(q),r,null,!0,!0,x.y),$async$Nx)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.eSV(t))
s=s.h(e,"id")
w=4
return B.b(C.ali(J.k(s==null?"":s)),$async$Nx)
case 4:if(t.c==null){w=1
break}t.m(new C.eSW(t))
w=5
return B.b(t.Ny(),$async$Nx)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nx,v)},
cvb(d){var w=B.bh(d),v=w==null?null:w.bP()
if(v==null)return""
return A.i5[B.bE(v)-1]+" "+B.bO(v)},
aMS(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Me,A.n),w,e,w,w,w,w,w,e)},
aMR(d){return this.aMS(d,44)},
b2b(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Me:u,r=B.m(14),q=B.W(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.Hm,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Hm,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bmD,u,u,u)],p))}return B.D(B.aG(A.c5,B.dg(u,B.B(q,A.m,u,A.b8,A.j,0,u,u),u,u,A.b9,new B.o(u,u,u,r,u,s,A.n),A.hT,u,u,u,A.wx,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eT8(this,d),u,u,u,u,u,u,!1,A.ad),1)},
cbl(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d5.j(0.14):D.UI,n=B.m(18),m=p?A.d5:A.dw
m=B.H(m,A.r,p?1.8:1)
w=this.aMR(A.pp)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aLt,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d6,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aLv,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Me:q
u=p?q:B.H(A.ba,A.r,1.6)
r=p?D.bAC:q
return B.aG(q,B.dg(q,B.B(B.a([w,A.be,t,B.dg(q,r,q,q,A.b9,new B.o(q,q,u,q,q,v,A.a6),A.h_,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b9,new B.o(o,q,m,n,q,q,A.n),A.h_,q,q,A.db,A.bm,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eSY(this,p,d),q,q,q,q,q,q,!1,A.ad)},
ciN(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cvb(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.dw,A.r,1)
v=r.aMR(A.Lu)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aLt,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d6,B.d(p+" slides"+t,q,q,q,q,q,q,D.aLv,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZV(A.hs,A.bs,"Bring it back",r.r?q:new C.eT5(r,d))
return B.p(q,B.B(B.a([v,A.be,t,p,A.br,r.aZV(A.e8,A.cH,"Delete",r.r?q:new C.eT6(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.UI,q,w,o,q,q,A.n),q,q,q,A.db,D.bha,q,q,q)},
aZV(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hs(B.aG(w,B.p(w,B.W(d,v?A.ba:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ad),w,f,w,w)},
aq_(d,e,f){var w=null
return new B.C(D.bgb,B.v(B.a([B.W(d,A.ba,w,w,w,46),A.aa,B.d(e,w,w,w,w,w,w,D.eOy,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.eHj,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bR,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.ba,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMS(A.xr,46),A.be,D.bno],t)
if(j.r)s.push(D.dRo)
s.push(B.aF(i,i,i,i,A.LZ,i,i,i,new C.eTb(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.dw,A.r,1)
o=J.a7(h)
q=B.a([A.S,u,new B.C(D.bjK,s,i),B.p(i,B.B(B.a([j.b2b(0,A.x2,"Save",j.a.c.length),j.b2b(1,A.LJ,"Saved",o.gJ(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.biO,A.ej,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cH:A.bs).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cH:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.Lv:A.es
n=B.W(n,p?A.cH:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a4t,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.biK,A.j3,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eKI,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aG(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eNE,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eTc(j,v),i,i,i,i,i,i,!1,A.ad))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.aq_(A.pp,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cbl(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dQZ)
else if(j.e==null)s.push(j.aq_(A.agv,"Could not reach the database","Check the connection, then open this again."))
else if(o.gai(h))s.push(j.aq_(A.oe,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gah(h);r.C();)s.push(j.ciN(r.gT(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.ch,B.cL(u,i,W.adK,i,i,A.ak,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbYk()
p=s?i:D.Me
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b2.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.W(A.x2,m?A.j1:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bjm,B.aG(i,B.dg(i,B.B(B.a([k,A.a3T,new B.dl(1,A.ch,B.f_(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j1:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eb),i)],t),A.m,i,A.b8,A.j,0,i,i),i,i,A.b9,new B.o(s,i,i,o,n,p,A.n),A.hT,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ad),i))}else q.push(A.S)
return B.p(i,B.bp(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ai,!0,!1),A.f,i,new B.aW(0,1/0,0,w.a.b*0.9),D.aTk,i,i,i,i,i,i,i,i)}}
C.nY.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().ab()],x.N,x.z)}}
C.WP.prototype={
S(){return new C.av9(B.a([],x.k),B.fb(null,x.H))},
gdS(){return this.c}}
C.av9.prototype={
Z(){this.a0()
this.NF()},
NF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$NF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0_(t.a.c),$async$NF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cAU(t,s))
case 1:return B.h(u,v)}})
return B.i($async$NF,v)},
coH(d){var w,v,u,t=this
d.c=new B.P(Date.now(),0,!1)
w=J.pO(t.d,new C.cAX(d))
v=w<0
if(v&&C.htT(d))return t.f
u=t.d
if(v)J.p6(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fBD(new C.cAY(t),v)
return t.f=t.f.bw(new C.cAZ(t,d),v).eN(new C.cB_())},
Hl(d,e,f){return this.c57(0,e,f)},
aUg(d,e){return this.Hl(0,e,!1)},
c57(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hl=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a8(s,!1).cp(B.eE(new C.cAT(t,e),!1,null,x.H)),$async$Hl)
case 3:w=4
return B.b(t.f,$async$Hl)
case 4:w=5
return B.b(t.NF(),$async$Hl)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hl,v)},
aTy(d){var w=A.o.u(1000*Date.now()),v=d==null?D.ddY:d
this.Hl(0,new C.nY(w,v,new B.P(Date.now(),0,!1)),!0)},
bXQ(){return this.aTy(null)},
aaV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.cB0(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aTy(s)
case 1:return B.h(u,v)}})
return B.i($async$aaV,v)},
Hk(d,e){return this.bEz(0,e)},
bEz(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cAO(e),s,null,!0,!0,x.y),$async$Hk)
case 3:if(g!==!0){w=1
break}t.m(new C.cAP(t,e))
w=4
return B.b(t.f,$async$Hk)
case 4:w=5
return B.b(C.aea(t.a.c,e.a),$async$Hk)
case 5:w=6
return B.b(t.NF(),$async$Hk)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hk,v)},
C5(d){return this.bwT(d)},
bwT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.cAK(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C5)
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
return B.b(t.aUg(0,d),$async$C5)
case 9:w=5
break
case 7:w=10
return B.b(F.fLd(r,d.b,null),$async$C5)
case 10:w=5
break
case 8:w=11
return B.b(t.Hk(0,d),$async$C5)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C5,v)},
bRK(){var w,v,u=null,t=[D.de0,D.ddZ,D.de_],s=new C.cAR(),r=B.m(26),q=x.V,p=B.a([new B.ab(0,A.G,A.dp.j(0.4),A.eP,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aY(999,999)
n.push(B.p(u,new B.w(D.cZW[w],u,A.oI,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bw(v,v,v,v),u,u,A.n),u,u,u,u,A.nw,u,u,u))}return B.p(u,B.B(B.a([B.D(B.v(B.a([D.faP,A.P,B.c6(A.bG,n,A.bx,6,6),A.aN,B.aG(u,B.p(u,D.eqB,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cG,10)],q),u,A.n),u,u,u,u,U.ae6,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cAQ(this),u,u,u,u,u,u,!1,A.ad)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a3(130,110,new B.am(A.A,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bHU,A.n),u,u,u,u,D.bjU,u,u,u)},
bwR(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bt(B.m(6),new B.am(A.X,v,A.b_,A.q,B.a([B.f_(A.A,F.alR(d.b),A.f,A.bQ),D.dWA,B.an(v,B.aG(v,B.p(v,D.bBo,A.f,v,v,D.aUd,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cAF(this,d),v,v,v,v,v,v,!1,A.ad),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eEN,v,v,v)
w=u===1?"":"s"
return B.aG(v,B.v(B.a([new B.fC(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eKS,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cAG(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cAH(this,d),v,v,v,v,v,v,!1,A.ad)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.ey(B.a([new B.C(H.acH,B.hs(B.aG(s,B.p(s,A.aj7,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b2.j(0.5),A.J,12)],x.V),E.v_,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbZ5(),s,s,s,s,s,s,!1,A.ad),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mC,s,s,s,!0,s,s,s,s,s,D.faT,s,s,s,1,s,!0)
if(t.e)r=D.aXs
else{w=t.bRK()
v=B.a([D.eYy,A.ab],r)
if(J.ct(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.eEe,s,s,s),A.f,s,s,new B.o(D.b0L,s,s,u,s,s,A.n),s,s,s,s,A.Ef,s,s,s))}r=B.a([new B.nu(Ad.VR,new B.lS(w,s),s),new B.nu(D.bjg,new B.lS(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cj(t.d))r.push(D.ewB)
else r.push(new B.nu(D.biM,B.Nn(new B.o2(new C.cB1(t),J.aa(t.d),!0,!0,!0,0,B.ro(),s),D.ewz),s))
r=B.uX(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ak,!1,r)}return B.ca(q,D.b_G,r,s,!1,!1,s,s)}}
C.WN.prototype={
S(){return new C.av5(B.a([],x.bx))},
Sc(d){return this.d.$1(d)}}
C.aCj.prototype={}
C.av5.prototype={
aWT(d,e,f){var w=$.av(),v=new B.ap(new B.ba(d,A.b0,A.aM),w),u=this.gaUf()
v.aK(0,u)
w=new B.ap(new B.ba(e,A.b0,A.aM),w)
w.aK(0,u)
return new C.aCj(v,w,f)},
CU(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.aa(0)
v.x=B.cP(A.pd,new C.cA8(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.av()
u=new B.ap(new B.ba(w.a,A.b0,A.aM),v)
t=m.gaUf()
u.aK(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.ap(new B.ba(w.b,A.b0,A.aM),v)
u.aK(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.ap(new B.ba(w.c,A.b0,A.aM),v)
u.aK(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ap(new B.ba(p.a,A.b0,A.aM),v)
o.aK(0,t)
n=new B.ap(new B.ba(p.b,A.b0,A.aM),v)
n.aK(0,t)
r.push(new C.aCj(o,n,p.c))}if(r.length===0)r.push(m.aWT("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.aa(0)
if(r.y){r.a.c.b=r.got()
q=r.a
q.Sc(q.c)}q=r.d
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
s.O$=0}r.a2()},
got(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.m8(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qO(n,w,v,t,u)},
zM(){var w=0,v=B.j(x.H),u=this,t
var $async$zM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.aa(0)
u.y=!1
u.a.c.b=u.got()
t=u.a
w=2
return B.b(t.Sc(t.c),$async$zM)
case 2:return B.h(null,v)}})
return B.i($async$zM,v)},
bZ3(){this.m(new C.cA7(this))
this.CU()},
aTg(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cAa(w,d,v))
w.CU()},
bZ4(d,e){var w=A.d.cv(this.w,e)
this.m(new C.cAi())
this.CU()
$.aT.x1$.push(new C.cAj(w))},
OM(d){return this.cbb(d)},
cbb(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kF(80,1400,A.eD),$async$OM)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$OM)
case 8:p=f
o=q.b.toLowerCase()
n=J.afE(o,".png")?"image/png":"image/jpeg"
r.m(new C.cAb(d,n,p))
r.CU()
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
return B.i($async$OM,v)},
wO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h6F(r,t.got()),$async$wO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cA9(t,s))
t.CU()
case 1:return B.h(u,v)}})
return B.i($async$wO,v)},
cbt(d){var w,v=this,u=null,t=F.fiX(d.c)
if(t==null)return new B.bH(A.a3,u,u,B.h8(D.buN,D.f_R,new C.cAd(v,d),u),u)
w=x.p
return new B.C(A.cN,new B.am(A.X,u,A.a9,A.q,B.a([B.bt(B.m(12),B.fG(t,A.A,u,u,A.cn,A.bQ,!0,140,!1,u,1/0),A.ap),B.an(u,B.B(B.a([v.aZW(A.kI,new C.cAe(v,d)),A.br,v.aZW(A.cu,new C.cAf(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZW(d,e){var w=null
return B.aD(!1,A.a1,!0,w,B.aJ(!1,w,!0,new B.C(A.hp,B.W(d,A.c,w,w,w,18),w),A.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aU,0,w,w,A.cJ,w,w,A.ac)},
Hm(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zM(),$async$Hm)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fLd(s,t.got(),new C.cAh(t)),$async$Hm)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hm,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.ey(B.a([new B.C(A.qo,B.h8(D.bzn,D.f5s,n.gatB(),B.fr(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aj6,m,m,m,new C.cAk(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.U8,m,1,m,m,m,!1,m,!1,E.mC,m,m,m,!0,m,m,m,m,m,D.f0B,m,m,m,1,m,!0),j=Ap.aRC(O.l_,A.c,Aa.Tf,A.nB,D.f1i,n.gbZ2()),i=B.m(18),h=n.gatA(),g=B.a([new B.ab(0,A.G,A.w.j(0.4),A.ja,12)],x.V)
g=B.aG(m,B.p(m,new B.a3(92,142.1818181818182,B.f_(A.A,F.alR(n.got()),A.f,A.ds),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ad)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.ey,B.D(B.v(B.a([D.fck,A.av,B.d(F.fJK(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eQf,m,m,m),A.S,B.dn(E.aio,E.aMc,h,B.bj(A.dp,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.U8,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nO,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b3(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aY(16,16)
u=new B.ay(O.l_.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.by8,m,m,m,v===0?m:new C.cAl(n,v),m,m,m,m,"Move up",A.c9)
r=i.length
q=B.aF(m,m,m,m,D.bEh,m,m,m,v===r-1?m:new C.cAm(n,v),m,m,m,m,"Move down",A.c9)
r=r===1?m:new C.cAn(n,v)
p=new B.aY(12,12)
o=new B.aY(12,12)
g.push(B.p(m,B.v(B.a([new B.cz(A.aZ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eQL,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aF(m,m,m,m,B.W(A.e8,A.o6,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c9)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.dY(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bw(p,p,p,p),A.df),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cb,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.cbt(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.dY(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bw(o,o,o,o),A.df),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mC,m,new B.c3(u,u,u,u),new B.bw(w,w,w,w),m,m,A.n),m,m,new C.a6x(h),A.e3,D.bhp,m,m,m))}return B.o_(!0,B.ca(k,E.ab2,B.cL(g,m,D.bhS,m,m,A.ak,!1),m,!1,!1,j,m),new C.cAo(n),x.C)}}
C.av7.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cH:E.mC,q=B.m(16),p=B.m(16),o=s?A.aE.j(0.08):A.c.j(0.04)
s=s?A.aE.j(0.16):A.dp.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fk,B.aD(!1,A.a1,!0,t,B.aJ(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aKS,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.et,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anY.prototype={
S(){return new C.aB8()}}
C.aB8.prototype={
Z(){this.a0()
this.XD()},
bq(d){this.bD(d)
if(d.c!=this.a.c)this.ZY()},
ZY(){var w=0,v=B.j(x.H),u=this,t
var $async$ZY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dO(t,x.H),$async$ZY)
case 2:u.d=null
if(u.c!=null)u.m(new C.dZw(u))
w=3
return B.b(u.XD(),$async$ZY)
case 3:return B.h(null,v)}})
return B.i($async$ZY,v)},
XD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cX(n,"http://")||J.cX(n,"https://")||J.cX(n,"data:")){o=B.Wq(B.cs(n,0,null),new B.NL(!0))
r.d=o}else{o=B.fh("unsupported video ref")
throw B.R(o)}w=7
return B.b(o.hX(0).cK(0,A.p8),$async$XD)
case 7:if(r.c==null){w=1
break}r.d.rt(!1)
r.m(new C.dZu(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a6(m)
$.al.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.dZv(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XD,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c01(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fT(0)
w.m(new C.dZx(w))}else{v.p8(0)
w.m(new C.dZy(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iY.j(0.92),D.J6.j(0.95)],x.O)
w=B.H(A.bT.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.ps,A.bT,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bV(B.au(B.v(B.a([t,new B.a3(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a4(A.ax,A.aC,A.x,m,o,o),A.n),A.bb)}if(p.f)return B.au(B.W(A.ahK,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aYd
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f_(A.A,new B.a3(r,q,new B.zf(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.au(B.p(o,B.W(A.iM,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.N(w,w,w,w),o,o,o),o,o,o))}return B.aG(o,B.bt(n,new B.am(A.X,o,A.b_,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc00(),o,o,o,o,o,o,!1,A.ad)}}
C.wS.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jc.prototype={}
C.abd.prototype={
B(d){return B.or(new C.dQV(this,B.M(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aaD.prototype={
B(d){var w,v,u=null,t=B.M(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iY.j(t?0.35:0.4),A.r,1),p=t?D.Jw:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.H(A.bT.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dz,6)],o)
w=this.c
o=B.D(B.p(u,new B.fC(0.5625,C.hLW(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aey,u,u,u,u),1)
m=D.iY.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iY,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.a1,!0,u,B.aJ(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d6,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.b69,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.c3(new B.ay(m,1,A.r,-1),A.Z,A.Z,A.Z),u,u,u,A.n),u,u,u,u,D.acW,u,u,u)],v),A.ah,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ac)}}
C.wV.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nk.prototype={}
C.bfY.prototype={
Ud(d){var w=null
return new B.bH(A.a3,w,w,B.CN(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bwA(){return this.Ud(1)},
au6(d){var w=null,v=B.m(8),u=B.H(A.hQ,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.a9n,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.H(A.hQ,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dQ(B.p(v,v,A.f,v,v,new B.o(v,v,B.H(A.hQ,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b8,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.au6("TAARIFA ZA WANANDOA"),A.ar,w.bwA(),A.d6,w.Ud(0.9),A.d6,w.Ud(0.7),A.P,w.au6("TAMKO LA MAKUBALIANO"),A.h7,w.Ud(1),A.d6,w.Ud(0.95),A.P,w.au6("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.abg.prototype={
B(d){return B.or(new C.e3L(B.M(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acV.prototype={
B(d){var w,v,u,t,s,r=null,q=B.M(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.au.j(q?0.35:0.4),A.r,1),m=q?D.b5M:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.H(A.au.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dz,6)],l)
w=this.c
v=C.fKe(w.a)
if(v==null)v=A.d.gL(D.OE)
u=B.aZ(v.f)
t=B.aZ(v.r)
s=x.p
l=B.D(B.p(r,new B.fC(0.5625,new B.am(A.X,r,A.b_,A.q,B.a([B.bX(0,B.fG(C.fKd(v.d),A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.adB,new C.bfY(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aey,r,r,r,r),1)
j=A.au.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.Jx,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.a1,!0,r,B.aJ(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d6,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b08,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.c3(new B.ay(j,1,A.r,-1),A.Z,A.Z,A.Z),r,r,r,A.n),r,r,r,r,D.acW,r,r,r)],s),A.ah,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ac)}}
C.kE.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a60.prototype={}
C.U3.prototype={
S(){var w=$.av()
return new C.aBr(new B.cp(null,x.A),new B.ap(A.as,w),new B.ap(A.as,w),B.mg(0,null,null),A.d.gL(D.a_B),D.dog,B.a([],x.L),B.a([],x.gE))}}
C.aBr.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yF(C.fmQ(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.flM().bw(new C.e72(v),w)
$.tA().jV(0,"assets/images/ngmy_logo.png").bw(new C.e73(v),w).eN(new C.e74())},
q(){var w=this,v=w.e,u=$.av()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.q()
w.a2()},
aeJ(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.P(B.b1(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
HA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$HA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kF(88,1600,A.eD),$async$HA)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$HA)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h6W(m,p),$async$HA)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bzI(new B.pl(o,1),m),$async$HA)
case 10:if(r.c!=null)r.m(new C.e6F(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a6(k)
r.aeJ("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$HA,v)},
UW(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h6W(s,q),$async$UW)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bzI(new B.pl(r,1),s),$async$UW)
case 4:if(t.c!=null)t.m(new C.e6B(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UW,v)},
abE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.e6M(q))
t=4
q.a.toString
p=C.hQl()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abE)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.e6N(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a6(i)
q.aeJ(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e6O(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abE,v)},
XQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.aa(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.e6H(q,i))
t=4
q.a.toString
p=C.hQk()
h=q.z
m=q.y
l=q.w
k=B.A(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XQ)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.e6I(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a6(g)
if(q.c!=null)q.m(new C.e6J(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e6K(q))
$.aT.x1$.push(new C.e6L(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XQ,v)},
c0I(d){this.m(new C.e6G(this,d))},
Da(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Da=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.e6D(q))
t=4
w=7
return B.b($.aT.gm5(),$async$Da)
case 7:w=8
return B.b(B.bN(A.mI,null,x.H),$async$Da)
case 8:k=$.aT.ag$.x.h(0,q.d)
p=k==null?null:k.gb6()
if(!(p instanceof B.q7))throw B.R("The page is not ready yet.")
w=9
return B.b(p.lQ(1800/p.gX(0).a),$async$Da)
case 9:o=e
w=10
return B.b(o.hf(A.fP),$async$Da)
case 10:n=e
if(n==null)throw B.R("Could not make the picture.")
w=11
return B.b(A5.aed(J.f6(A.dD.gaN(n)),"ngmy_news.png","image/png"),$async$Da)
case 11:m=e
q.aeJ(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a6(i)
q.aeJ(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e6E(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Da,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kK,a2,a2,a2,new C.e6U(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bzT,a2,a2,a2,new C.e6V(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.om,a2,a2,a2,a4?a1.gaV6():a2,a2,a2,a2,a2,"Download",a2))
a3=B.ey(v,a2,a2,!0,!0,A.zD,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eqK,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eP,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fC(0.7142857142857143,B.f_(A.A,new B.er(new C.aYM(t,s,r,a1.x,a2),a1.d),A.f,A.ds),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Rv,a2,a2,a2)
t=a1.as?a2:a1.gc0H()
t=B.a([B.D(B.dn(D.bAD,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cb,a2,a2,a2),t,B.bj(D.ry,a2,a2,a2,A.c,A.fH,a2,a2,new B.b6(B.m(14),N.vT),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bt(B.m(10),B.fG(r,A.A,a2,a2,A.cn,A.bQ,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.aw,r,B.aF(a2,a2,a2,a2,D.bxs,a2,a2,a2,a1.as?a2:a1.gbDc(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Rv,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aOC("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.af,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cUZ[o]
p.push(B.mp(a2,D.ry,new B.w(n.a,a2,A.oF,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.ht,new C.e6W(a1,n),a2,a2,N.vT,a2))}p=B.c6(A.bG,p,A.bx,6,8)
m=a1.Q
m=B.c6(A.bG,B.a([D.fb1,A.be,B.jA(a2,a2,a2,D.eXq,a2,new C.e6X(a1),m==="en",a2,a2,a2,a2),A.ab,B.jA(a2,a2,a2,D.eXl,a2,new C.e6Y(a1),m==="sw",a2,a2,a2,a2)],w),A.r9,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Rv,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a_B,0,B.dH(10,"count",x.S),j),h=i.$ti,i=new B.bU(i,i.gJ(0),h.k("bU<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aNa(g==null?h.a(g):g))}k=B.cL(k,a2,a2,a2,a2,A.aZ,!1)
i=B.a([],w)
for(j=B.dc(D.a_B,10,a2,j),h=j.$ti,j=new B.bU(j,j.gJ(0),h.k("bU<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aNa(g==null?h.a(g):g))}j=B.cL(i,a2,a2,a2,a2,A.aZ,!1)
i=a1.as?a2:a1.gc0K()
h=B.m(18)
v=B.a([new B.ab(0,A.G,A.by.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cN,s,a2),t,A.ay,new B.C(A.cN,r,a2),q,A.P,p,A.S,m,A.ay,new B.C(A.cN,l,a2),new B.a3(a2,78,k,a2),A.P,new B.a3(a2,78,j,a2),A.aN,B.aG(a2,B.p(A.A,B.B(B.a([D.bAx,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fS,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.ti,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ad)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.d8P,A.aw,D.bnG],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b2.j(0.35):D.ry
p=new B.aY(16,16)
d=new B.ay(A.bH,1,A.r,-1)
u.push(new B.bH(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eOj,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,N.T3,new B.o(q,a2,new B.c3(d,d,d,d),new B.bw(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cN,A.j3,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cIA[o]
t.push(B.mp(a2,D.ry,new B.w(a0,a2,A.Hy,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.ht,new C.e6Z(a1,a0),a2,a2,N.vT,a2))}u.push(B.c6(A.bG,t,A.bx,6,8))
u.push(A.S)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aOC("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.af,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e7_(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc0J()
u.push(B.B(B.a([t,A.ab,B.Gq(A.xw,s,B.ne(a2,A.b2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaV6()
u.push(B.dn(A.om,D.f6U,t,B.bj(A.d1,a2,a2,a2,a2,A.Hk,a2,a2,new B.b6(B.m(16),A.Z),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cL(v,a1.r,A.ado,a2,a2,A.ak,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.H(E.jB.j(0.5),A.r,1)
v.push(B.bX(0,B.ee(B.au(B.p(a2,B.B(B.a([E.a3U,A.ey,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iB,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.zv,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bkb,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.ca(a3,A.zD,new B.am(A.X,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aOC(d){var w=null
return B.bn(w,new B.b3(4,B.m(14),A.Z),w,A.eM,w,w,w,w,!0,w,w,w,w,w,w,D.ry,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,V.Hs,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aNa(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aZ(d.f),p=s?A.by:A.bH
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.aZ(d.x),t,t,t,5,t,A.lt,t,t,t,t),A.h7],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.aZ(v).j(0.5),t,t,t,2,t,D.bgp,t,t,t,t))
w.push(A.d6)
w.push(new B.C(A.jm,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.aZ(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aG(t,B.p(t,B.v(w,A.m,t,A.b8,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.kz,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e6C(this,d),t,t,t,t,t,t,!1,A.ad)}}
C.yF.prototype={
b70(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yF(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
czo(d){var w=null
return this.b70(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
azi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c8i(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fo(g,B.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c8g(),B.U(w).k("J<1,n>")).bX(0,new C.c8h())
t=B.A(w,w.$ti.k("G.E"))}else t=k
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
return this.b70(p,r,q,J.aa(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEk(d){return this.f}}
C.rK.prototype={
a3(){return"NewsLayout."+this.b}}
C.Au.prototype={
a3(){return"NewsFrame."+this.b}}
C.l0.prototype={}
C.aYM.prototype={
qv(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aZ(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aV8(d,e,f,g){return this.qv(d,e,null,1.25,f,A.bi,g)},
O7(d,e,f,g,h){return this.qv(d,e,f,1.25,g,A.bi,h)},
auc(d,e,f,g,h){return this.qv(d,e,null,f,g,A.bi,h)},
aub(d,e,f,g,h){return this.qv(d,e,f,g,0,A.bi,h)},
aVa(d,e,f,g,h){return this.qv(d,e,null,f,0,g,h)},
c0O(d,e,f,g,h,i){return this.qv(d,e,f,g,0,h,i)},
aua(d,e,f,g){return this.qv(d,e,null,f,0,A.bi,g)},
abH(d,e,f){return this.qv(d,e,null,f,0,A.bi,A.cL)},
aV9(d,e,f,g,h){return this.qv(d,e,f,g,0,h,A.cL)},
c0N(d,e,f,g){return this.qv(d,e,null,f,0,g,A.cL)},
c0M(d,e,f,g){return this.qv(d,e,f,g,0,A.bi,A.cL)},
abI(d,e,f,g,h,i){return this.qv(d,e,f,g,h,A.bi,i)},
aV7(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kM(new B.eo(d,u,u,A.cS,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ci,new B.jM(1),u,u,h,u,A.cg,u)
v.AR(g)
if(!v.b.a.c.gaAT())return w
w-=2}return j},
abF(d,e,f,g,h,i,j,k){return this.aV7(d,e,f,g,h,i,j,k,A.bi)},
awf(d,e,f){var w=null,v=d==null?B.aZ(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a3(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
awe(d){return this.awf(null,!1,d)},
aex(d,e){return this.awf(null,d,e)},
chX(d,e){return this.awf(d,!1,e)},
gaXg(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaR8(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
N4(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abF(w.gaR8(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaR8(),v,g,A.a2,v,v,v,w.aub(u,t,f,1.02,A.O),e,v,v)},
aRd(d){return this.N4(d,A.L,null,2,78,30)},
a9d(d,e,f,g,h){return this.N4(d,e,null,f,g,h)},
bRC(d,e,f,g,h){return this.N4(d,A.L,e,f,g,h)},
bRB(d,e,f){return this.N4(d,A.L,null,e,f,30)},
Q1(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.C(A.kB,B.d(s,u,g,A.a2,u,u,u,v.aV9(w,v.aV7(t,w,A.cL,d,g,h,15,1.2,A.cA),f,1.2,A.cA),e,u,u),u)},
b1S(d){return this.Q1(d,A.L,null,3,24)},
axI(d,e,f,g){return this.Q1(d,e,null,f,g)},
cpa(d,e,f){return this.Q1(d,A.L,e,3,f)},
b1T(d,e){return this.Q1(d,e,null,3,24)},
cp8(d,e){return this.Q1(d,A.L,null,3,e)},
cp9(d,e,f){return this.Q1(d,e,null,3,f)},
ao2(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.ir,B.d(u.toUpperCase(),v,v,v,v,v,v,w.O7("Roboto",12,d==null?B.aZ(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.f,B.aZ(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.aZ(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
M1(){return this.ao2(null,!0)},
ao1(d){return this.ao2(null,d)},
bz9(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.C(A.iq,new B.a3(d,w,B.d(v,w,2,A.a2,w,w,w,this.c0N(this.d.as,13.5,1.2,A.cA),e,w,w),w),w)},
uJ(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.P(Date.now(),0,!1),i=m.gaXg(),h=A.o.al(j.bv(B.bW(B.bv(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hE2(Math.max(1,B.bv(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aV8(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abF(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abF(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aZ(h.x)
h=h.ch?B.aZ(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.ez,l,l,l,m.abI(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.N(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byY(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hG,A.j,0,l,l),A.ar,m.aex(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.aZ(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ey,B.D(B.d(i,l,1,A.ez,l,l,l,m.aua(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.byY(j),l,l,l,l,l,l,m.O7(k,13,B.aZ(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hG,A.j,0,l,l),A.P,m.chX(B.aZ(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaXg()
v=B.d("NGMY",l,l,l,l,l,l,m.auc(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aZ(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.ab,B.ev(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qv(k,r*0.72,o,1.05,-0.5,A.cA,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.N(t,s,t,s),l,l,l),l),A.b6,new B.dl(1,A.ch,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.abI(k,12.5,B.aZ(h).j(0.85),1.3,1.2,A.O),A.dJ,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.aZ(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hG,A.j,0,l,l)
t=m.aex(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.aua(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.av,t,new B.a3(l,s,l,l),v,new B.a3(l,q,l,l),m.aex(!0,1.4),A.av,B.d(C.byY(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.awe(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.auc(v,u,1,3,A.O),A.L,l,l),A.P,m.aex(!0,1.2),A.av,B.B(B.a([B.d(C.byY(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hG,A.j,0,l,l),A.av,m.awe(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aaj(d){return this.uJ(d,!1)},
abG(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aZ(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.abI("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.N(v,u,v,u),w,w,w)},
c0L(d,e){return this.abG(d,null,e,null)},
aT8(d){var w=null,v=new B.P(Date.now(),0,!1),u=A.o.F(B.dj(v),12)===0?12:A.o.F(B.dj(v),12),t=B.aZ(this.d.w).j(0.75),s=this.aub("Roboto",15,t,1,A.cq),r=B.W(E.afU,t,w,w,w,18),q=A.a.an(A.op[B.bE(v)-1],0,3),p=A.a.aU(A.o.u(B.fY(v)),2,"0"),o=B.dj(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bO(v)+", "+B.bv(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fC,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
at5(){return this.aT8(A.m7)},
b_9(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.abI("Roboto",this.abF(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
awi(d,e,f){return this.b_9(d,e,f,30)},
axL(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.C(A.uo,B.d(v,w,e,A.a2,w,w,w,this.c0M("Roboto",f,B.aZ(this.d.w).j(0.88),1.35),w,w,w),w)},
b1X(d){return this.axL(d,3,22)},
cpl(d,e){return this.axL(d,e,22)},
rN(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fG(r,A.A,s,s,A.cn,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Cm(D.bmU,w,s)
if(v==="sepia")w=new B.Cm(D.bmT,w,s)}else{r=this.d
v=r.w
u=B.aZ(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.W(A.wX,B.aZ(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bV(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.U4.j(0.38)],x.O),s,s),A.n),A.bb))
return new B.a3(d,e,new B.am(A.X,s,A.b_,A.q,v,s),s)},
pE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aZ(j),A.r,3)
j=B.H(B.aZ(j),A.r,1)
return B.p(k,B.p(k,l.rN(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ej,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m1,k,k,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.dND,14)],x.V)
v=l.rN(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.ev(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.au(B.d(u,k,2,A.a2,k,k,k,l.aV9(j.as,13.5,D.b1t,1.1,A.cA),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.b4f,k,k,k,w,k,A.n),k,e,k,k,D.bhN,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aZ(j.x),A.r,5)
return B.p(k,B.bt(B.m(25),l.rN(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aZ(j.x),A.r,6)
j=B.aZ(j.f)
v=t-10
return new B.a3(d,e,B.au(B.p(k,B.hO(l.rN(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m1,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ab(0,A.G,A.w.j(0.3),D.dNt,10)],x.V)
return B.ev(A.A,0.025,new B.a3(d,e,new B.am(A.X,k,A.a9,A.f,B.a([B.bX(0,B.p(k,l.rN(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qq,k,k,k),0,0,0),B.an(k,B.ev(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.ev(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aZ(j.x)
return new B.a3(d,e,B.b2(B.n8(l.rN(d,e),A.ap,D.fiN),new C.b9c(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.rN(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bz(u));++n){m=new B.aY(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bY,k,k,new B.bw(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cH(0,q,0,p,k,k,new B.cz(A.aZ,A.pw,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.X,k,A.b_,A.q,w,k),A.f,A.ec,k,k,k,e,k,k,D.bma,k,k,d)
case 8:w=d/2
v=B.wg(A.h6,new B.aY(w,w))
j=B.H(B.aZ(j.x),A.r,5)
w-=5
return B.p(k,B.bt(B.wg(A.i_,new B.aY(w,w)),l.rN(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ab(0,A.G,A.w.j(0.35),A.fG,22)],x.V)
return B.p(k,l.rN(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bU,k,k,d)
case 10:return new B.a3(d,e,B.n8(l.rN(d,e),A.ap,D.fog),k)
case 0:j=B.H(B.aZ(j.w),A.r,2.4)
return B.p(k,l.rN(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ej,k,k,d)}},
aKN(d,e){return this.d.e===D.Pg?A.bF:this.bz9(d,e)},
Uu(d){return this.aKN(d,A.L)},
gax3(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
ax2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.H(B.aZ(v.w),A.r,1.6)
t=v.x
s=B.aZ(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aVa(v.Q,19,1.15,A.cA,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.O7("Roboto",12.5,B.aZ(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.abH(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jB(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gc8J(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6Y(d,e,f,g){return B.ck(new C.c8j(this,e,d,f,g))},
a6X(d){return this.a6Y(d,22,!0,18)},
UF(d,e){return this.a6Y(d,22,!0,e)},
aLP(d,e,f){return this.a6Y(d,22,e,f)},
bB8(d,e,f){return this.a6Y(d,e,!0,f)},
b4M(d,e,f,g){return B.ck(new C.c8k(this,e,d,g,!0,f))},
c7y(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aaj(824),A.ay,k.aRd(824),k.b1S(824),A.P,k.M1(),A.aa,B.au(k.pE(824,360),j,j,j),k.Uu(824),A.aa,B.D(k.a6X(3),1)],x.p),A.ah,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aaj(824),A.aN,new B.a3(j,350,B.B(B.a([new B.a3(440,j,B.v(B.a([k.a9d(440,A.bf,3,62,26),k.axI(440,A.bf,2,20),A.b6,k.ao2(B.aZ(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Hl,B.v(B.a([k.pE(362,310),k.Uu(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.awe(2),A.aa,B.D(k.a6X(3),1)],w),A.ah,j,A.e,A.j,0,A.p)
case 2:w=k.uJ(824,!0)
v=B.aZ(h.x)
u=h.ch
t=x.p
s=B.a([k.bRC(788,u?B.aZ(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cpa(788,u?B.aZ(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.A0,j,j,j)
u=B.a([B.au(k.pE(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Pg){h=A.w.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.aub(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lu,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.aa,v,A.aa,new B.am(A.X,j,A.a9,A.q,u,j),A.P,k.M1(),A.S,B.D(k.UF(2,21),1)],t),A.ah,j,A.e,A.j,0,A.p)
case 3:h=k.uJ(824,!0)
w=k.pE(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.aa,new B.am(A.b3,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.N4(780,A.bf,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a4(A.b1,A.b3,A.x,v,j,j),A.n),j,j,j,j,D.bku,j,j,j),j,j,0,0,j,j)],u),j),k.b1T(824,A.bf),A.P,k.M1(),A.S,B.D(k.a6X(3),1)],u),A.ah,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aaj(824),A.ay,k.aRd(824),k.b1S(824),A.P,k.M1(),A.aa,B.D(k.b4M(3,300,B.v(B.a([k.pE(300,300),k.Uu(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ah,j,A.e,A.j,0,A.p)
case 5:w=k.uJ(824,!0)
v=x.p
u=B.v(B.a([k.a9d(440,A.bf,3,62,26),k.axI(440,A.bf,2,20),A.b6,k.ao1(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a3(j,400,B.B(B.a([new B.a3(440,j,u,j),A.aIX,new B.C(A.iq,k.pE(364,h.e===D.Pg?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.UF(2,21),1)],v),A.ah,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aaj(824),A.aa,k.bRB(824,2,70),k.cp8(824,21),A.P,k.M1(),A.aa,B.D(k.b4M(3,340,B.au(k.pE(340,340),j,j,j),350),1)],x.p),A.ah,j,A.e,A.j,0,A.p)
case 7:w=k.uJ(824,!0)
v=B.aZ(h.x)
u=Date.now()
u=C.byY(new B.P(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.O7(i,13,h.ch?B.aZ(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aVa(h.Q,24,1.15,A.cA,A.O),j,j,j))
v.push(A.b6)
if(k.gax3())v.push(k.ax2(230,250))
return B.v(B.a([w,A.ay,B.D(B.B(B.a([new B.a3(230,j,B.v(v,A.ah,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.aZ(h.w),j,j,j,j,j,A.acV,j,j,j,1.2),new B.a3(570,j,B.v(B.a([k.a9d(570,A.bf,3,62,28),k.cp9(570,A.bf,20),A.P,k.ao1(!1),A.P,B.au(k.pE(570,330),j,j,j),k.Uu(570),A.S,B.D(k.aLP(2,!1,17),1)],t),A.ah,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ah,j,A.e,A.j,0,A.p)
case 8:w=k.uJ(824,!0)
v=h.ch
u=v?B.aZ(h.x):B.aZ(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.O7(i,13,v?A.w:B.aZ(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.aa,B.p(j,B.v(B.a([t,A.ar,k.N4(788,A.bf,v?A.w:B.aZ(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.biP,j,j,j),k.b1T(824,A.bf),A.S,B.au(k.pE(824,310),j,j,j),k.Uu(824),A.P,k.M1(),A.S,B.D(k.a6X(3),1)],s),A.ah,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.uJ(824,!0),A.aN,new B.am(A.X,j,A.a9,A.q,B.a([k.pE(824,430),B.an(18,k.c0L(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.awi(824,3,66),k.b1X(824),A.aa,B.p(j,j,A.f,B.aZ(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.at5(),A.ay,B.D(k.UF(2,18),1)],w),A.ah,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.uJ(824,!0),A.bu,new B.a3(j,500,B.B(B.a([new B.a3(410,j,B.v(B.a([k.abG(k.c.b,B.aZ(h).j(0.14),15,B.aZ(h)),A.aN,k.b_9(410,4,58,28),k.axL(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aIY,k.pE(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.at5(),A.aN,B.D(k.UF(2,18),1)],w),A.ah,j,A.e,A.j,0,A.p)
case 12:w=k.uJ(824,!0)
v=k.pE(824,420)
u=B.hh1(-0.25)
t=B.aZ(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aN,new B.am(A.X,j,A.a9,A.q,B.a([v,B.an(22,B.fn(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c0O(i,30,A.c,1,A.cA,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bkK,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.awi(824,3,62),k.b1X(824),A.aa,B.p(j,j,A.f,B.aZ(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.aa,k.aT8(A.l5),A.ay,B.D(k.UF(2,18),1)],r),A.ah,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uJ(824,!0)
u=h.w
t=x.p
w=B.a([k.pE(824,380),B.an(j,k.abG(w.b,B.aZ(u).j(0.85),15,B.aZ(h.f)),j,j,16,j,16,j)],t)
s=k.awi(824,2,60)
r=k.cpl(824,2)
p=k.at5()
o=B.D(k.aLP(2,!1,18),1)
n=B.H(B.aZ(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aZ(h).j(0.05)
return B.v(B.a([v,A.aN,new B.am(A.X,j,A.a9,A.q,w,j),A.aN,s,r,A.S,p,A.ay,o,A.aa,B.p(j,B.B(B.a([B.bt(B.m(14),k.rN(150,104),A.ap),A.nN,B.D(B.v(B.a([k.abG("RELATED",B.aZ(h).j(0.14),12,B.aZ(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.aua(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.et,B.aZ(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.ah,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.uJ(824,!0),A.bu,k.a9d(824,A.bf,3,62,30),k.axI(824,A.bf,2,22),A.S,k.ao1(!1),A.S,B.au(k.pE(824,330),j,j,j),k.aKN(824,A.bf),A.aN,B.D(k.bB8(2,40,21),1)],x.p),A.ah,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bX(0,B.bV(s,new B.o(s,s,s,s,s,new B.a4(A.ax,A.aC,A.x,B.a([B.aZ(p),B.aZ(q.r)],x.O),s,s),A.n),A.bb),0,0,0)],o)
if(q.ax)n.push(B.bX(0,B.b2(s,s,s,new C.b5K(B.aZ(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.blf,B.v(B.a([B.D(t.c7y(),1),A.P,B.p(s,s,A.f,B.aZ(w),s,s,s,1.4,s,s,s,s,s,s),A.h7,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aV8(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.O7(r,11,B.aZ(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hG,A.j,0,s,s)],o),A.ah,s,A.e,A.j,0,A.p),s))
v=B.aZ(w)
n.push(B.bX(0,B.e2(B.b2(s,s,s,new C.bo3(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.aZ(p).j(0.75)
v=B.H(B.aZ(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hO(B.fG(q,A.A,s,s,A.cn,A.bQ,!1,30,!1,s,30),A.ap))
else o.push(B.W(A.m7,B.aZ(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.auc(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e2(B.d9(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bmj,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a3(900,1260,B.jB(new B.am(A.X,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b9d.prototype={
iJ(d){return C.fXv(d)},
jl(d){return!1}}
C.b9c.prototype={
a5(d,e){var w,v=C.fXv(e)
$.V()
w=B.L()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aL(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bqx.prototype={
iJ(d){var w,v,u,t,s,r,q,p,o=new B.f3()
o.dU(3)
w=$.V()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.E(new B.b4(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ao(s,o.af()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ao(t,8))
w=d.b
r=w-8
u.E(new B.ao(t,r))
for(;t>0;t-=14){q=new B.ao(t,w-o.af()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ao(0,r))
u.E(new B.bD())
return u},
jl(d){return!1}}
C.b5K.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f3()
k.dU(7)
$.V()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.af()*0.07).gp(0)
q=k.af()
p=k.af()
o=k.af()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.af()*u
p=k.af()*t
m=50+k.af()*90
w.sar(new B.bR(A.A,0.5,A.x,l,0,B.a([A.J7.j(0.13),A.K],v),l,l).av(0,B.bS(new B.u(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
aq(d){return!1}}
C.bo3.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.id(u,u,u,u,B.dm(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ci,u,A.en,A.cg)
s.eU()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.iU(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.U6.prototype={
S(){return new C.aBv()}}
C.aBv.prototype={
Z(){var w=this
w.a0()
B.h3b(w.a.c,null).bw(new C.e8d(),x.g7).bw(new C.e8e(w),x.a)
w.a.toString},
gaJC(){var w=D.aqj[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaud(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJC()
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
XS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.e80(r))
t=4
q=r.gaud()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.V()
n=new B.rA()
m=B.FS(n,null)
i=B.L()
i.Q=A.fN
m.Az(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pO().yp(J.fNa(p),J.fNa(o)),$async$XS)
case 7:l=e
w=8
return B.b(l.hf(A.fP),$async$XS)
case 8:k=e
j=r.c
if(j!=null){j=B.a8(j,!1)
i=k
i.toString
j.M(J.f6(J.wa(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.e81(r))
r.c.I(x.q).f.P(D.ezb)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XS,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kK,s,s,s,new C.e87(d),s,s,s,s,s,s),p=x.p
q=B.ey(B.a([B.bI(!1,D.f9a,s,s,!0,s,s,t.y||r==null?s:t.gc0P(),s,s)],p),s,s,!0,!0,A.zD,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fcV,s,s,s,1,s,!0)
if(r==null)p=A.lQ
else{w=B.D(new B.C(A.c4,B.au(new B.fC(t.gaJC(),B.ck(new C.e88(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.kz,B.jA(s,s,s,new B.w(D.aqj[u].a,s,E.aKH,s,s,s,s,s,s,s,s,s),s,new C.e89(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bp(!0,B.v(B.a([new B.a3(s,40,B.cL(v,s,s,s,s,A.aZ,!1),s),B.B(B.a([D.bBf,B.D(B.l4(s,s,s,6,1,new C.e8a(t),t.f),1),D.bAS],p),A.m,s,A.e,A.j,0,s,s),D.f6O,A.ar,B.bI(!1,D.f6z,s,s,!0,s,s,new C.e8b(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ai,!0,!1),A.f,D.Uh,s,s,s,s,s,s,D.bia,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.ca(q,A.zD,p,s,!1,!1,s,s)}}
C.b8K.prototype={
a5(d,e){var w
$.V()
w=B.L()
w.Q=A.cn
return d.Az(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.Z5.prototype={
S(){var w=$.av(),v=x.A
return new C.aCO(new B.ap(A.as,w),new B.ap(new B.ba("NGMY",A.b0,A.aM),w),new B.cp(null,v),new B.cp(null,v),A.d.gL(D.a07),"quote"+1000*Date.now(),B.a([],x.t),B.b_(x.S),A.L)}}
C.o9.prototype={}
C.aCO.prototype={
gaRl(){var w,v,u=this
if(u.p1)w=new B.ww(1,u.p2,0.9,u.p3).iu().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eF3(w))},
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
WB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$WB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tA().jV(0,"assets/images/ngmy_logo.png"),$async$WB)
case 7:q=e
p=J.f6(J.wa(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bzI(new B.pl(p,1),o),$async$WB)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eDW(r,p))
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
return B.i($async$WB,v)},
Oa(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kF(92,1800,A.eD),$async$Oa)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Oa)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bzI(new B.pl(p,1),n),$async$Oa)
case 9:if(r.c==null){w=1
break}r.m(new C.eEj(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a6(l)
n=r.c
if(n!=null)n.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Oa,v)},
aZy(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aD=w.aM=w.aB=w.aw=w.Y=w.b4=w.bg=w.y2=0
w.b1=null
w.aZ=0.25
w.b8=null
w.bH=0.5
w.aQ=1
w.c4=w.bQ=w.bh=0
w.cT=w.cQ=!1},
aST(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bwr(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cXl)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bwr(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bwr(C.fIj(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bwr(C.fIj(1-a0*0.5,n,n,n),w)}return a1?C.bwr(C.fIj(-1,255,255,255),w):w},
axQ(){var w,v,u=B.ae("\\S+",!0,!1,!1,!1).kw(0,this.d.a.a),t=B.A(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yj(u,v,w)
this.dx.pv(new C.eEt(t),!0)
return t},
b11(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axQ()
w=C.hO4(e.d.a.a,e.db)
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
return C.hKz(d,k,v,a0,j,e.gaRl(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cnf(){return this.b11(null)},
C4(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gm5(),$async$C4)
case 3:w=4
return B.b(B.bN(A.eL,null,x.H),$async$C4)
case 4:w=5
return B.b($.aT.gm5(),$async$C4)
case 5:s=$.aT.ag$.x.h(0,t.r)
r=s==null?null:s.gb6()
if(!(r instanceof B.q7)){u=null
w=1
break}w=7
return B.b(r.lQ(1080/r.gX(0).a),$async$C4)
case 7:w=6
return B.b(e.hf(A.fP),$async$C4)
case 6:q=e
u=q==null?null:J.f6(A.dD.gaN(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C4,v)},
a7P(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7P=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eDF(q))
t=4
w=7
return B.b(q.C4(),$async$a7P)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cR.gcs().aG(p)
n=C.AH(null,null,null,null,D.nH,6,!1,null,null,null,null,null,C.cA(),null,!1,null,"NGMY Quote",null,null,B.a([q.b11(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a8(l,!1).M(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a6(j)
l=q.c
if(l!=null)l.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eDG(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7P,v)},
zu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eDD(q))
t=4
w=7
return B.b($.aT.gm5(),$async$zu)
case 7:w=8
return B.b(B.bN(A.o9,null,x.H),$async$zu)
case 8:w=9
return B.b($.aT.gm5(),$async$zu)
case 9:k=$.aT.ag$.x.h(0,q.f)
p=k==null?null:k.gb6()
if(!(p instanceof B.q7))throw B.R("The picture is not ready yet.")
w=10
return B.b(p.lQ(1080/p.gX(0).a),$async$zu)
case 10:o=e
w=11
return B.b(o.hf(A.fP),$async$zu)
case 11:n=e
if(n==null)throw B.R("Could not make the picture.")
w=12
return B.b(A5.aed(J.f6(A.dD.gaN(n)),"ngmy_quote.png","image/png"),$async$zu)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.P(B.b1(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a6(i)
k=q.c
if(k!=null)k.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eDE(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zu,v)},
caD(){var w=this.p4
w.toString
return B.ck(new C.eEc(this,w))},
aVh(d,e){var w=null
return B.bn(w,w,w,w,w,D.eJ5,w,w,!0,new B.b3(4,B.m(16),N.vT),w,w,w,w,w,D.ry,!0,w,w,w,w,new B.b3(4,B.m(16),D.aR4),w,w,w,w,w,w,w,w,A0.Cc,e,w,w,w,w,w,w,w,D.eOa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wV(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b2,w,w,w,15),A.br],v))
u.push(B.d(d,w,w,w,w,w,w,D.aLq,w,w,w))
return new B.C(D.bg3,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aVg(d,e){var w=null,v=B.m(18),u=B.H(A.bH,A.r,1)
return B.p(w,B.aD(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jq),A.f,w,w,new B.o(D.ry,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uP(d){return this.aVg(d,A.bz)},
nz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ti:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bH,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j1,r,r,r,16),A.br],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j1,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aG(r,B.dg(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b9,new B.o(w,r,u,v,r,p,A.n),A.hT,r,r,r,A.DZ,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ad)},
adx(d,e,f){return this.nz(d,null,e,f)},
auh(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b2.j(0.28):A.c.j(0.05),t=g?A.eB:A.bH,s=x.p
v=B.a([B.dg(w,d,w,w,A.b9,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hT,w,e,w,new B.N(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aG(w,new B.a3(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ad)},
aVk(d,e,f,g,h,i){return this.auh(d,e,f,g,h,5,i)},
jN(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eGc,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aG(u,D.dR2,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEp(this,h,i),u,u,u,u,u,u,!1,A.ad))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aKy,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Wh,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asK(w).cAL(A.b2,A.bH,A.b2.j(0.2),A.c,D.eq5,4)
return new B.C(A.ww,B.v(B.a([s,B.a81(B.l4(u,u,u,g,f,new C.eEq(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
afx(d,e,f,g,h,i){return this.jN(d,e,f,g,h,null,i)},
afX(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dw:B.aZ(u)
r=d==u
q=r?A.c:A.ba
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bup:o
n.push(B.aG(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.c3(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eEs(this,e,u),o,o,o,o,o,o,!1,A.ad))}return B.c6(A.bG,n,A.bx,10,10)},
bFe(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a07
else{v=x.a8
w=B.A(new B.a5(D.a07,new C.eDv(o),v),v.k("G.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aVh("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.af,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eDw(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4W,!0,A.a5,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aVh("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eDx(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.dj,!0,A.a5,n,A.am,n,n,n,n)
t=o.wV("DESIGNS",A.t7)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cAK[q]
r.push(new B.C(A.kz,o.adx(p,o.x===p,new C.eDy(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.ch(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aZ),A.aa,new B.a3(n,118,B.hH(n,new C.eDz(o,w),w.length,n,n,A.aZ,new C.eDA(),!1),n),A.P,o.aVg(B.v(B.a([B.iy(A.b2,n,n,A.ai,!0,new C.eDB(o),n,D.eZy,n,D.eWb,o.k3),B.iy(A.b2,n,n,A.ai,!0,new C.eDC(o),n,n,n,D.eTy,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.adn)],s),A.F,n,A.e,A.j,0,A.p)},
cvq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axQ()
if(a7.length===0)return a5.uP(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.HE,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ae('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.an(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gaj(v)+1
u=a5.dx
m=B.A(u,B.a2(u).k("cm.E"))
A.d.fn(m)
l=m.length!==0&&A.d.ea(m,new C.eET(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eF_(a5)
j=new C.eF1()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.HE,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aY(11,11)
f=u.t(0,h)?A.b2.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eB:A.bH
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.an(w,a0,a0+e[0].length)
a0=B.ae("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aG(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.c3(d,d,d,d),new B.bw(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.KH,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eEU(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ad))}o=a5.uP(B.c6(A.bG,o,A.r9,6,6))
i=B.a([a5.nz("All words",K.ahp,!1,new C.eEV(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.adx("Sentence "+a3,!1,new C.eEW(a5,a7,v,a2)))
a2=a3}}i.push(a5.adx("Clear picks",!1,new C.eEX(a5)))
i=B.c6(A.bG,i,A.bx,8,8)
g=a5.wV("SIZE OF THE PICKED WORDS",D.agS)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d1o[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eEY(e,k)
f.push(a5.adx(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c6(A.bG,f,A.bx,8,8),A.S,a5.nz("Make every word normal",A.mQ,!1,new C.eEZ(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cqM(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bnl,B.d(A.d.kZ(D.arX,new C.eEC(q)).b,p,p,p,p,p,p,D.eHE,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.ck(new C.eED(q)),l=q.wV("HIGHLIGHT BEHIND THE WORDS",A.Y2),k=q.p1?-1:q.k4
k=q.afX(k,new C.eEE(q),D.cKq)
w=q.p1
v=w?A.c:A.ba
n=B.a([n,A.S,m,l,B.c6(A.bG,B.a([k,B.aG(p,B.p(p,D.bxm,A.f,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.eBN,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eEH(q),p,p,p,p,p,p,!1,A.ad)],o),A.r9,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.HE,p,p,p)],o)
if(q.gaRl()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.afx("Colour",l,0,360,new C.eEI(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.afx("Shade",k,0.15,0.9,new C.eEJ(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jN("Strength",l,0.15,1,new C.eEK(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.S,q.uP(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wV("LOOK",A.xk))
m=B.a([q.nz("Bold",I.agP,q.fy,new C.eEL(q)),q.nz("Italic",I.agQ,q.go,new C.eEM(q))],o)
for(u=0;u<3;++u){l={}
k=D.cBQ[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ti:p
w=w?p:A.c.j(0.07)
s=new B.aY(14,14)
r=new B.ay(q.id===l.a?A.K:A.bH,1,A.r,-1)
m.push(B.aG(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.c3(r,r,r,r),new B.bw(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eEN(l,q),p,p,p,p,p,p,!1,A.ad))}n.push(B.c6(A.bG,m,A.r9,8,8))
n.push(q.wV("COLOUR",A.nz))
n.push(q.afX(q.fx,new C.eEO(q),D.cUv))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.HE,p,p,p))
n.push(q.wV("SIZE AND PLACE",A.EU))
m=q.fr
m=q.jN("Text size",m,0.5,1.6,new C.eEF(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uP(B.v(B.a([m,q.jN("Up / down",l,0.12,0.5,new C.eEG(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
caE(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b2.j(0.6),A.r,1.6)
u=B.a([A.b2.j(0.18),A.by.j(0.12)],x.O)
return B.aG(p,B.p(p,B.v(B.a([B.p(p,D.bCE,A.f,p,p,D.aTW,p,62,p,p,p,p,p,62),A.ay,D.eXj,A.ar,D.f0z],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.ry,p,v,w,p,new B.a4(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bjl,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaVj(),p,p,p,p,p,p,!1,A.ad)}w=x.p
v=B.B(B.a([B.bt(B.m(12),new B.a3(46,62,B.fG(o,A.A,120,p,A.cn,A.bQ,!1,p,!1,p,p),p),A.ap),A.be,B.D(B.v(B.a([D.eWU,A.P,B.c6(A.bG,B.a([q.nz("Change",A.kI,!1,q.gaVj()),q.nz("Remove",A.e8,!1,new C.eEg(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cRj[t]
u.push(q.nz(s.b,s.a,q.at===t,new C.eEh(q,t)))}u=B.c6(A.bG,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bVm(o)
break A}if(1===r){s=q.bUr()
break A}if(2===r){s=q.bB7()
break A}if(3===r){s=q.bHg()
break A}s=q.bDd()
break A}return B.v(B.a([v,A.aa,u,A.ay,s,A.S,new B.bH(A.a3,p,p,q.nz("Reset the whole picture",A.mQ,!1,new C.eEi(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bVm(d){var w=this,v=x.p
return B.v(B.a([B.c6(A.bG,B.a([w.nz("Auto enhance",E.XG,!1,new C.eE8(w)),w.nz("Make words easy to read",A.oj,!1,new C.eE9(w))],v),A.bx,8,8),A.ay,B.ck(new C.eEa(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bUr(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jN("Exposure",n,-1.5,1.5,new C.eDN(o),0,A.k.a8(n,1))
w=o.RG
w=o.jN("Brightness",w,-0.5,0.5,new C.eDO(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jN("Contrast",v,0.4,2,new C.eDP(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jN("Fade",u,0,1,new C.eDQ(o),0,""+A.k.U(u*100))
t=o.aB
t=o.jN("Spotlight",t,0,1,new C.eDR(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jN("Darken",s,0,0.85,new C.eDS(o),0,""+A.k.U(s*100))
r=o.b4
r=o.jN("Vignette",r,0,0.9,new C.eDT(o),0,""+A.k.U(r*100))
q=o.aD
q=o.jN("Shade behind words",q,0,0.85,new C.eDU(o),0,""+A.k.U(q*100))
p=o.aM
return o.uP(B.v(B.a([n,w,v,u,t,s,r,q,o.jN("Shade top & bottom",p,0,0.85,new C.eDV(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bB7(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jN("Colour strength",q,0,2.2,new C.eD8(s),1,""+A.k.U(q*100))
w=s.to
w=s.jN("Warmth",w,-1,1,new C.eD9(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jN("Tint",v,-1,1,new C.eDa(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uP(B.v(B.a([q,w,v,s.jN("Shift colours",u,-180,180,new C.eDb(s),0,""+A.k.U(u)+"\xb0"),new B.bH(A.a3,r,r,s.nz("Negative",D.bsp,s.y1,new C.eDc(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wV("COLOUR WASH",A.LE)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.aqJ)
t=B.a([u,v,s.afX(w,new C.eDd(s),q),A.P],t)
if(s.b1!=null){q=s.aZ
t.push(s.uP(s.afx("Wash strength",q,0,0.9,new C.eDe(s),""+A.k.U(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bHg(){var w,v,u,t,s,r=this,q=r.y2
q=r.jN("Blur",q,0,24,new C.eDH(r),0,A.o.u(A.k.U(q)))
w=r.bg
w=r.jN("Soft focus",w,0,1,new C.eDI(r),0,""+A.k.U(w*100))
v=r.aw
u=x.p
v=r.uP(B.v(B.a([q,w,r.jN("Film grain",v,0,1,new C.eDJ(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wV("LIGHT LEAK",H.agN)
q=r.b8
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.aqJ,0,B.dH(8,"count",s),s))
u=B.a([v,w,r.afX(q,new C.eDK(r),t),A.P],u)
if(r.b8!=null){q=r.bH
u.push(r.uP(r.afx("Leak strength",q,0,1,new C.eDL(r),""+A.k.U(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bDd(){var w,v,u,t,s=this,r=s.aQ
r=s.jN("Zoom",r,1,3,new C.eDi(s),1,""+A.k.U(r*100)+"%")
w=s.bh
w=s.jN("Left / right",w,-1,1,new C.eDj(s),0,""+A.k.U(w*100))
v=s.bQ
v=s.jN("Up / down",v,-1,1,new C.eDk(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.uP(B.v(B.a([r,w,v,s.jN("Turn",u,-180,180,new C.eDl(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c6(A.bG,B.a([s.nz("Turn 90\xb0",D.bu_,!1,new C.eDm(s)),s.nz("Flip sideways",A.EJ,s.cQ,new C.eDn(s)),s.nz("Flip upside down",A.EJ,s.cT,new C.eDo(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXZ(){var w=null,v=B.m(22),u=B.H(A.bH,A.r,1)
return B.p(w,B.v(B.a([D.eqh,A.S,D.eYE,A.ay,B.aG(w,B.p(A.A,D.eqt,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.ti,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEb(this),w,w,w,w,w,w,!1,A.ad)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.ry,w,u,v,w,w,A.n),w,w,w,w,A.c4,w,w,w)},
bVe(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eE3(p),m=x.p,l=B.B(B.a([D.bnr,p.nz("Reset",A.mQ,!1,new C.eE_(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.HE,o,o,o),j=p.wV("SHAPE",A.ahT),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.AV[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aVk(n.$2(t,p.cy),62,u.b,s===t,new C.eE0(v,p),62))}}i=B.c6(A.bG,i,A.bx,8,8)
v=p.wV("RING",A.t2)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.AQ[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aVk(n.$2(p.cx,t),62,r.b,q===t,new C.eE1(s,p),62))}u=B.c6(A.bG,u,A.bx,8,8)
s=p.CW
return B.v(B.a([l,A.av,k,j,i,v,u,A.aa,p.uP(p.jN("Size",s,0.12,0.4,new C.eE2(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aYb(d){return new B.a3(null,d,new B.fC(0.5625,B.ck(new C.eEm(this)),null),null)},
cq5(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bH,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ti:q
t=new B.aY(14,14)
s=D.cTd[w]
r=v?A.c:A.aA
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bG(1,A.bp,B.aG(A.c5,B.dg(q,B.v(B.a([r,A.d6,new B.pT(A.eb,A.A,A.f,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b9,new B.o(q,q,q,new B.bw(t,t,t,t),q,u,A.n),D.beZ,q,q,q,A.hC,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEv(this,w),q,q,q,q,q,q,!1,A.ad),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bh7,A.m1,q,q,q)},
aMk(){var w,v,u=this,t=null,s=u.cq5(),r=u.as
A:{if(0===r){w=u.bFe()
break A}if(1===r){w=u.cvq()
break A}if(2===r){w=u.cqM()
break A}if(3===r){w=u.caE()
break A}if(4===r){w=u.bVe()
break A}w=u.bXZ()
break A}v=x.p
return B.bt(A.rf,B.ee(B.v(B.a([s,B.D(B.cL(B.a([w],v),t,D.bib,t,t,A.ak,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Uh,!0),A.ap)},
aIA(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc1f(),p=B.m(16)
q=B.D(B.aG(r,B.p(r,D.eqC,A.f,r,r,new B.o(A.c.j(0.08),r,B.H(A.ba,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ad),1)
p=s.Q?r:s.gbGR()
w=B.m(16)
v=B.a([new B.ab(0,A.G,A.by.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.evu)
else t.push(D.bwt)
t.push(A.ab)
t.push(D.boX)
return B.p(r,B.B(B.a([q,A.aw,B.D(B.aG(r,B.p(r,B.B(t,A.m,r,A.b8,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.ti,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ad),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aT5,r,r,r,r,G.adb,r,r,r)},
aVi(){var w=null
return new B.C(T.Wc,B.B(B.a([B.aF(w,w,w,w,A.mb,w,w,w,new C.eDM(this),w,w,w,w,w,w),D.fbW,A.b6,D.bET],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.ca(w,A.zD,B.bp(!0,B.ck(new C.eF2(this)),!0,!1,A.ai,!0,!0),w,!1,!1,w,w)}}
C.bcg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f3()
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
for(s=d.a,q=0;q<u;++q){p=m.af()*w
o=m.af()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.c2(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.qY.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lP.prototype={}
C.yH.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().ab(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.no.prototype={}
C.vl.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a68.prototype={}
C.aoM.prototype={}
C.ZA.prototype={
S(){return new C.aEI(new B.ap(A.as,$.av()),B.ka(!0,null,!0,!0,null,null,!1),D.dh0,B.a([],x.s),B.eP([D.Gy],x.Q))}}
C.aEI.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.f.q()
this.a2()},
Za(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Za=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B2(90,700,700,A.eD),$async$Za)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Za)
case 8:p=e
if(r.c!=null)r.m(new C.eKY(r,p,q))
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
return B.i($async$Za,v)},
Zd(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Zd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hR().aDZ(78,n,1100,1100),$async$Zd)
case 7:q=e
if(J.cj(q)){w=1
break}p=B.bk(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.f8(),$async$Zd)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cR.gcs().aG(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eKZ(r,p))
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
return B.i($async$Zd,v)},
b_8(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fG(A.cy.aG(A.d.gaj(d.split(","))),A.A,u,u,A.cn,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bdg},
bVk(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.clv(C.fkc(w,this.b_8(d),f),g)},
aa4(d,e,f,g,h){var w=null,v=new C.eKW(f,e),u=new C.eKX(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bH:A.b2.j(0.6),A.r,1)
if(p)p=new B.a3(34,30,new B.am(A.X,w,A.a9,A.f,B.a([B.au(B.W(f?A.AB:A.Ls,A.c1,w,w,w,26),w,w,w),D.dWo],x.p),w),w)
else p=this.bVk(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.a1,!0,s,B.aJ(!1,r,!0,B.p(w,B.B(B.a([B.D(B.au(p,w,w,w),1),D.bwa],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.m2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKV(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ac)},
aSZ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bt(B.m(8),B.fG(A.cy.aG(A.d.gaj(h.split(","))),A.A,p,p,A.cn,A.bQ,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bH:A.bl.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.eE,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.a50,p,p,p),1)],x.p)
if(f!=null)n.push(B.aG(p,D.YY,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ad))
return B.aD(!1,A.a1,!0,u,B.aJ(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lt,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ac)},
a6h(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6h=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fnD(),$async$a6h)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eKE(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a6(n)
if(r.c!=null)r.m(new C.eKF(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6h,v)},
abQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abQ=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eKH(r))
w=1
break}if(r.x==null){m=B.ae("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eKI(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eKJ(r))
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
return B.b(C.fiV(q,r.cx,j,new C.aZ9(r.z,r.Q,r.as,r.at),new C.eKK(r),i,m,p,k),$async$abQ)
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
if(p!=null)B.a8(p,!1).M(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a6(e)
if(r.c!=null)r.m(new C.eKL(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abQ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eA,g).w
g=B.aH(d,A.bR,g).w
w=B.au(B.p(h,h,A.f,h,h,new B.o(A.ba,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aG(h,B.p(h,D.bzi,A.f,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bl.j(0.5),A.J,24)],v),D.bI3,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eLb(i),h,h,h,h,h,h,!1,A.ad),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.YY,h,h,h,i.ax?h:new C.eLc(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbwh()
v=B.a([new B.ab(0,A.G,A.b2.j(0.45),A.J,10)],v)
s.push(B.hs(B.aD(!1,A.a1,!0,h,B.aJ(!1,h,!0,B.p(h,B.W(i.e==null?A.uH:A.hr,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.v_,A.a6),h,40,h,h,h,h,h,40),A.cJ,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cJ,h,h,A.ac),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b3(4,B.m(16),D.aQC),h,h,h,h,h,h,h,h,V.Hs,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.kz,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.af,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aKU,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eLd(i)
s=i.aSZ(A.l6,q,r,i.gcb4(),s)
r=i.z
r=B.D(i.aa4(new C.eLf(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ar,B.B(B.a([r,A.br,B.D(i.aa4(new C.eLg(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eLh(i)
s=i.aSZ(A.uF,r,p,i.gcbc(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.aa4(new C.eLi(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.ay,D.f1K,A.av,D.f4r,A.bu,u,A.P,D.f2Y,A.ay,v,A.bu,B.B(B.a([q,A.aw,B.D(B.v(B.a([s,A.ar,B.B(B.a([p,A.br,B.D(i.aa4(new C.eLj(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.f64],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b6Q,A.r,1)
w=C.aeL(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bH(A.a3,h,h,B.p(h,B.B(B.a([D.bAn,A.br,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eMX,h,h,h),B.aJ(!1,h,!0,D.dRg,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eLk(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b0Q,h,u,v,h,h,A.n),h,h,h,h,D.bgN,h,h,h),h)],t))}o.push(A.bu)
o.push(D.eUe)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cMp[m]
v=i.ch===l?A.b2:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bH,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bG(1,A.bp,new B.C(A.jm,B.aG(h,B.dg(A.A,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b9,new B.o(v,h,new B.c3(k,k,k,k),h,h,h,A.a6),A.eK,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eLl(i,l),h,h,h,h,h,h,!1,A.ad),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.fae)
o.push(A.P)
o.push(B.ck(new C.eLm(i)))
o.push(A.bu)
o.push(D.f00)
o.push(A.P)
w=B.a([i.b1Q("auto","Let AI choose",A.dS,A.O7)],t)
for(v=x.O,m=0;m<11;++m){j=D.v4[m]
u=j.d
w.push(i.b1Q(j.a,j.b,j.c,B.a([B.aZ(A.d.gL(u).a),B.aZ(A.d.gL(u).b)],v)))}o.push(B.c6(A.bG,w,A.bx,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.bl.j(0.5):A.bH,A.r,1)
o.push(B.p(h,B.iy(h,A.bl,h,h,h,new C.eLe(i),D.bvC,D.f9v,h,D.eWn,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aKb,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc1j()
v=B.fi(h,h,A.b2,A.b2.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b6(B.m(18),A.Z),h,h,h,h,h)
u=i.ax
t=u?D.evk:A.F9
o.push(new B.a3(h,54,B.lh(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oE,h,h,h),w,v),h))
return new B.C(new B.N(0,0,0,f.f.d),B.p(h,B.bp(!0,B.ch(B.v(o,A.ah,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ux,h,h,A.ak),!0,!1,A.ai,!0,!1),A.f,h,new B.aW(0,680,0,g.a.b*0.92),D.a7z,h,h,h,h,h,h,h,h),h)},
bIk(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eKM(this,p,d)
if(d===D.Bw)return new C.aBk(p,o,q)
w=B.m(16)
v=p?E.v_:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bH,A.r,1)
s=B.W(p?A.es:C.ho1(d),A.c,q,q,q,20)
r=C.ho2(d)
return B.aG(q,B.dg(q,B.v(B.a([s,A.av,B.f_(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eb)],x.p),A.m,q,A.b8,A.j,0,A.p),q,q,A.b9,new B.o(u,q,t,w,q,v,A.n),A.hT,q,64,q,A.hp,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ad)},
b1Q(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ag:A.bH
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a4(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aG(v,B.dg(v,B.B(B.a([w,L.Hm,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b9,new B.o(s,v,r,t,v,v,A.n),A.eK,v,v,v,L.aeq,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eL0(this,d),v,v,v,v,v,v,!1,A.ad)}}
C.Zz.prototype={
S(){return new C.aEH(new B.ap(A.as,$.av()))}}
C.aEH.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
abR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abR=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.m(new C.eKx(r))
w=1
break}B.eJ()
r.m(new C.eKy(r))
t=4
q=C.hOY(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ae("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hOI(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eKz(r,q))
w=1
break}k=r.c
if(k!=null)B.a8(k,!1).M(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ae("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fI_()
f=$.BF.h(0,k.a)
o=f==null||J.cj(f)?null:J.fk(f)
if(o==null){r.m(new C.eKA(r))
w=1
break}n=C.hOG(o,r.a.c)
C.hOC(r.a.c.a)
$.fHh=!0
k=r.c
if(k!=null)B.a8(k,!1).M(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fKD(j)
h=C.fKE(r.a.c)
e=C.fKF(r.a.c)
w=7
return B.b(C.byC(k,r.a.c.a,j,h,new C.eKB(r),i,e,a0),$async$abR)
case 7:m=a3
k=r.c
if(k!=null)B.a8(k,!1).M(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a6(a1)
if(r.c!=null)r.m(new C.eKC(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eA,i).w
i=B.aH(d,A.bR,i).w
w=B.au(B.p(j,j,A.f,j,j,new B.o(A.ba,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ai9,A.f,j,j,D.aSN,j,34,j,j,j,j,j,34),A.aw,D.bnZ],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,V.aKC,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b3(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b3(4,B.m(16),Am.a74),j,j,j,j,j,j,j,j,V.Hs,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.af,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aKU,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cIZ[q]
o=A.c.j(0.06)
n=k.e?j:new C.eKD(k,p)
r.push(B.mp(j,o,new B.w(p,j,As.Rh,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vT,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.S,B.c6(A.bG,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.aa,B.d(u,j,j,j,j,j,j,D.aKb,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gc1k()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bl.j(0.5),A.fs.j(0.5)],x.O):D.ci0
o=B.a([new B.ab(0,A.G,A.bl.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dRc:D.bzX
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.a1,!0,j,B.aJ(!1,s,!0,B.es(B.B(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jc,j,j,j)],v),A.m,j,A.b8,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a4(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ac))
return new B.C(new B.N(0,0,0,h.f.d),B.p(j,B.bp(!0,B.ch(B.v(w,A.ah,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ux,j,j,A.ak),!0,!1,A.ai,!0,!1),A.f,j,new B.aW(0,680,0,i.a.b*0.85),D.a7z,j,j,j,j,j,j,j,j),j)}}
C.aZ9.prototype={}
C.aBk.prototype={
S(){return new C.bgR(null,null)}}
C.bgR.prototype={
gaui(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.pa,null,1,null,v)
w.cE(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
q(){this.gaui().q()
this.bqn()},
B(d){var w=null,v=this.a.d
return B.aG(w,B.c4(this.gaui(),new C.e3a(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ad)}}
C.bes.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cOm[s]
p=q.a*v
q=q.b*u
$.V()
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=D.wl.j(0.25+r*0.6).gp(0)
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
aq(d){return d.b!==this.b}}
C.apl.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XY.prototype={
S(){return new C.ayN()}}
C.ayN.prototype={
gafU(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeY(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzg(){var w=this.e
return w===$?this.e=C.fKD(this.a.c).t(0,D.Bw):w},
a64(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a64=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dbX(s))
u=3
r=A.d.kZ(D.v4,new C.dbY(s))
q=B.d8(C.fKD(s.a.c),x.Q)
l=q
J.hD(l,D.Bw)
p=l
if(s.gzg())J.cc(p,D.Bw)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzg()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fKE(i.c)
g=C.fKF(s.a.c)
w=6
return B.b(C.byC(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a64)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeY(q,s.gafU())
f=q==null?null:q.b
n=f==null?s.gafU():f
if(!J.y(n,r.a)&&!s.gzg())throw B.R("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a8(q,!1).M(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a6(d)
if(s.c!=null)s.m(new C.dbZ(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a64,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.aj,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bH:A.aK,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dc1(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.W(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.v4[w]
u=o.gafU()
t=o.f?n:new C.dc2(o,v)
f.push(new C.bp8(v,u===v.a,t,n))}f=B.lL(1.25,f,3,10,10,n,A.dO,!0)
u=B.m(18)
t=o.gzg()?D.bKH:n
if(o.gzg())s=n
else s=m?A.bj:A.bN
r=B.W(A.dS,o.gzg()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzg()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzg()?A.ag:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzg()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.aw,q,B.fFb(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.dc3(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ade,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.eNe,n,n,n)],g))
f=B.ch(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.Kw,n,n,A.ak)
u=o.f?n:o.gbvg()
t=B.bj(A.K,n,n,n,n,n,A.ai,n,new B.b6(B.m(16),A.Z),n,n,n)
s=B.m(16)
return B.bp(!0,B.p(n,B.v(B.a([new B.C(D.bjP,e,n),new B.dl(1,A.ch,f,n),new B.C(A.E5,new B.a3(1/0,50,B.bL(B.es(B.au(o.f?A.r0:D.f2c,n,n,n),n,new B.o(n,n,n,s,n,D.bJi,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rS,n,n,n,n),!0,!1,A.ai,!0,!0)}}
C.bp8.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.aZ(s),B.aZ(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.aZ(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bH(A.kV,w,w,B.W(v.c,A.ag,w,w,w,18),w),new B.bH(A.li,w,w,B.d(v.b,w,w,w,w,w,w,D.eNc,w,w,w),w)],x.p)
if(q)v.push(D.aOJ)
return B.aG(w,B.dg(w,new B.am(A.X,w,A.a9,A.q,v,w),w,w,A.b9,new B.o(w,w,p,t,s,new B.a4(A.ax,A.aC,A.x,r,w,w),A.n),A.eK,w,w,w,A.cm,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ad)}}
C.e37.prototype={
aBC(d,e,f){return e+"@"+A.a.aU(A.o.fG(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vJ(d,e){return this.aBC(0,e,null)}}
C.aJf.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aZ5.prototype={
B(d){var w,v,u=null,t=C.fJt(this.c)
if(t==null)w=D.bc3
else{w=B.aH(d,u,x.w).w.cAd(D.bgi,D.euz)
v=this.d
w=B.tY(B.e2(B.alK(!1,t,!1,v,!1,390),!v,u),w)}return B.f_(A.A,new B.a3(416,870,new C.bit(w,u),u),A.f,A.ds)}}
C.bit.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cYX[w]
u=new B.aY(3,3)
s.push(new B.cH(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bw(u,u,u,u),t,D.ak1,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d_2[w]
u=new B.aY(3,3)
s.push(new B.cH(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bw(u,u,u,u),t,D.ak1,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bX(0,B.bV(t,new B.o(t,t,t,B.m(64),D.czA,D.bHM,A.n),A.bb),0,0,0))
s.push(B.bX(3,B.bV(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bb),3,3,3))
s.push(B.bX(13,B.bt(B.m(51),B.ee(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.au(B.p(D.aOU,B.p(t,t,A.f,t,t,D.aT3,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bX(13,B.e2(B.bt(B.m(51),D.bdm,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e2(B.au(B.p(t,t,A.f,t,t,new B.o(A.ag,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.X,t,A.a9,A.f,s,t)}}
C.kY.prototype={
oP(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cA(),f=C.cA(),e=m.r
f=C.ej(A.L,!1,e.l(),A.aB,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bc,j,2,"Your Presentation Title",0,0,"",D.mi,D.cP,0.84,0.08,0.26)
w=C.cA()
v=m.w
w=C.ej(A.L,!1,v.l(),A.aB,"",k,20,A.bi,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.bc,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dc,D.cP,0.76,0.12,0.56)
u=C.cA()
t=m.d
s=x.u
t=C.qZ(i,l,0,0,B.a([f,w,C.ej(A.bf,!1,4279310375,A.aB,"",t.j(0.8).l(),24,A.bi,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fm,t.l(),3,"",0,0,"",D.ce,D.eW,0.3,0.35,0.72)],s),C.cA(),D.mh,"","","Welcome",D.dc)
u=C.cA()
u=C.ej(A.bf,!1,e.l(),A.aB,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Agenda",0,0,"",D.ce,D.cP,0.84,0.08,0.08)
w=C.cA()
w=C.qZ(i,l,0,0,B.a([u,C.ej(A.bf,!0,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.bc,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tw,D.cP,0.8,0.1,0.26)],s),C.cA(),D.mh,"","","Agenda",D.dc)
u=C.cA()
u=C.ej(A.bf,!1,e.l(),A.aB,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bc,j,2,"Main Idea",0,0,"",D.ce,D.cP,0.84,0.08,0.08)
f=C.cA()
f=C.qZ(i,l,0,0,B.a([u,C.ej(A.bf,!0,v.l(),A.aB,"",k,21,A.bi,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.bc,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ce,D.cP,0.8,0.1,0.26)],s),C.cA(),D.mh,"","","Key Point 1",D.dc)
u=C.cA()
u=C.ej(A.bf,!1,e.l(),A.aB,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bc,j,2,"Compare & Contrast",0,0,"",D.ce,D.cP,0.84,0.08,0.08)
r=C.cA()
r=C.ej(A.bf,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.bc,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ce,D.cP,0.4,0.08,0.24)
q=C.cA()
q=C.qZ(i,l,0,0,B.a([u,r,C.ej(A.bf,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.bc,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ce,D.cP,0.4,0.52,0.24)],s),C.cA(),D.mh,"","","Key Point 2",D.dc)
r=C.cA()
r=C.ej(A.L,!1,e.l(),A.aB,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bc,j,2,h,0,0,"",D.dc,D.cP,0.8,0.1,0.32)
e=C.cA()
p=C.AH(l,l,l,l,D.Bs,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qZ(i,l,0,0,B.a([r,C.ej(A.L,!1,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.bc,j,2,"Questions?",0,0,"",D.ce,D.cP,0.7,0.15,0.58)],s),C.cA(),D.mh,"","",h,D.dc)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.DA.prototype={
by(d){return this.e.$1(d)}}
C.el.prototype={}
C.iR.prototype={}
C.Dr.prototype={
gaH8(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aeL(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1q(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Dr(v,u,t,d==null?w.d:d)},
Er(d){return this.a1q(null,d,null,null)},
aAo(d){return this.a1q(null,null,null,d)},
cAb(d,e){return this.a1q(d,e,null,null)},
b6S(d){return this.a1q(d,null,null,null)},
b6Z(d){return this.a1q(null,null,d,null)}}
C.LY.prototype={
S(){return new C.bgd(new B.eN(0,$.av()),null,null)}}
C.bgd.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(new C.dMF(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.ko(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.R$=$.av()
w.O$=0
this.bpQ()},
B(d){var w=C.aeL(this.a.c.a)
if(w==null)w=A.d.gL(D.Ft)
return B.ck(new C.dME(this,w,C.fZi(this.a.c.d)))}}
C.bnJ.prototype={
B(d){return B.nt(A.SV,this.e,new C.eJL(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bbm.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOR(d,e,v)
break
case"confetti":w.bBD(d,e,v)
break
case"crown":w.bDe(d,e,v)
break
case"aurora":w.bwl(d,e,v)
break
case"champagne":w.bzu(d,e,v)
break
case"diamonds":w.bFn(d,e,v)
break
case"starburst":w.cnU(d,e,v)
break
case"balloons":w.bwz(d,e,v)
break
case"galaxy":w.bK0(d,e,v)
break
case"redcarpet":w.cf9(d,e,v)
break
case"coins":w.bB_(d,e,v)
break
case"lanterns":w.bU_(d,e,v)
break
case"hearts":w.bRG(d,e,v)
break
case"petals":w.caw(d,e,v)
break
case"butterflies":w.byw(d,e,v)
break
case"neon":w.bXJ(d,e,v)
break
case"disco":w.bFy(d,e,v)
break
case"sunrise":w.cpn(d,e,v)
break
case"pearls":w.c9A(d,e,v)
break
case"snow":w.cnC(d,e,v)
break
case"laurel":w.bU5(d,e,v)
break
case"ribbons":w.chE(d,e,v)
break
case"kente":w.bTP(d,e,v)
break
case"trophy":w.csU(d,e,v)
break
case"shooting":w.clu(d,e,v)
break
case"bokeh":w.bwQ(d,e,v)
break
case"orbits":w.c7i(d,e,v)
break
case"flowers":w.bJj(d,e,v)
break
case"music":w.bXu(d,e,v)
break
case"mandala":w.bVW(d,e,v)
break
case"sparklers":w.cnK(d,e,v)
break
case"city":w.bAj(d,e,v)
break}},
qJ(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.V()
v=B.L()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.n8
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b4(w,s))
u.E(new B.cO(w,t,w+f,t))
u.E(new B.cO(w,t,w,t+f))
u.E(new B.cO(w,t,w-f,t))
u.E(new B.cO(w,t,w,s))
u.E(new B.bD())
d.aL(u,v)
d.ae(e,f*0.18,v)},
lg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cQ(q,v)*2.5)+C.cQ(q,u)*6.28)+1)/2
this.qJ(d,new B.u(C.cQ(q,t)*o,C.cQ(q,s)*n),m*(0.006+0.014*C.cQ(q,r))*(0.5+p),h,p*p)}},
aOR(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lg(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aW],w),B.a([A.ie,A.by],w),B.a([A.eo,A.aY],w),B.a([A.c,A.au],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bz(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cQ(h,1))
f=g+c0*(C.cQ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cQ(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.l3(new B.u(g,c1),new B.u(f,e),A.cp.au(0,i/0.22))
a0.toString
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.sar(new B.a4(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.r0(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.l3(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.G()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.r=A.c.gp(0)
a3=a2.G()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cp.au(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cQ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.V()
a8=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hm(A.G,o)
a3=a8.G()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cQ(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cQ(h,b1+60))
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
b9.a=A.n8
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cQ(h,b1+120)>0.5)this.qJ(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bBD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.V(),a0=B.L()
a0.sar(new B.a4(A.ax,A.aC,A.x,D.cUc,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aW(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cQ(u,1)))+C.cQ(u,2)*w,w)
s=C.cQ(u,3)
r=Math.sin(a3*(0.8+C.cQ(u,4))+u)
q=h*(0.012+0.012*C.cQ(u,5))
p=Math.cos(a3*(2+3*C.cQ(u,6))+u)
o=D.NB[A.o.D(A.k.bz(C.cQ(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cQ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b4(d,0))
for(l=1;l<=8;++l){s=new B.ao(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.V()
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=B.aZ(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cr(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.G()
f.drawRect(B.c2(t),k)
k.delete()}f.restore()}this.lg(a1,a2,a3,25,A.bJ,30)},
bDe(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.V()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b4(a5,a6))
o=p-0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ao(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bD())
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b2q],v),a4,a4).av(0,B.bS(w,u)))
l=o.G()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.V().r,A.ao,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b4(a5,v))
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
i.E(new B.bD())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sar(new B.a4(A.b1,A.b3,A.x,D.cT8,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aL(i,n)
for(v=[D.e3Y,D.dZk,D.ecG],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=A.ag.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.hP.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wr(i),u=B.a([],x.X),o=new B.v_(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jK(y.M));--f
o.j2()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cI([new B.G9(o,f),0,d*h,!0]),B.a([],r))
f=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.b=A.ae
f.c=g
f.e=A.fv
f.r=A.bJ.gp(0)
l=f.G()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.qJ(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lg(a8,a9,b0,45,A.bJ,40)},
bwl(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lg(a8,a9,b0,60,A.c,50)
w=[D.emi,D.em0,D.elW,D.enb]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.V()
i=B.a([],p)
h=new B.aO(n.r,A.ao,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b4(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ao(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.n8
n.z=new B.hm(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.n8
n.z=new B.hm(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cQ(a4,1))+C.cQ(a4,2)*a3,a3)
r=C.cQ(a4,3)
q=Math.sin(b0+a4)
p=C.cQ(a4,4)
$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.wk.j(0.4+0.5*C.cQ(a4,5)).gp(0)
n.a=A.n8
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bzu(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.V(),a0=B.L()
a0.sar(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hy.j(0.25+0.1*h),D.Uo],x.O),l,l).av(0,B.bS(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ao,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b4(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ao(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.b=A.ae
a0.c=h
a0.r=D.NB[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cQ(w,1)))+C.cQ(w,2)*o,o)
r=k*(0.1+0.8*C.cQ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cQ(w,4))
if(n<f){this.qJ(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.zq.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bFn(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lg(a9,b0,b1,30,A.kX,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cQ(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cQ(p,2))+C.cQ(p,3)*n,n)-o*2
l=C.cQ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.V()
g=B.a([],q)
f=new B.aO(h.r,A.ao,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b4(e,i))
h*=0.28
j*=0.6
g.push(new B.ao(h,j))
d=o*0.28
g.push(new B.ao(d,j))
a0=o*0.5
g.push(new B.ao(a0,i))
a1=k*0.6
g.push(new B.ao(0,a1))
g.push(new B.bD())
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.sar(new B.a4(A.ax,A.aC,A.x,D.cPk,a5,a5).av(0,B.cr(A.J,k*1.2,o)))
a2=g.G()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
a2.delete()
a3=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3.b=A.ae
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
if(a4>0.85)this.qJ(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cnU(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.V()
o=B.a([],v)
n=new B.aO(p.r,A.ao,null,null,o)
o.push(new B.b4(h,g))
p=s-q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ao(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bD())
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.V()
u=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bz(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cQ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bcJ.au(0,k)*(0.5+0.5*C.cQ(t,v)))
this.qJ(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cQ(t,3)),D.NB[A.o.D(A.k.bz(C.cQ(t,4)*5),0,4)],u)}},
bwz(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cQ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cQ(o,2))+C.cQ(o,3)*m,m)
j=C.cQ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.ar6[A.o.F(o,6)]
h=$.V()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b4(j,h))
for(e=1;e<=6;++e){d=new B.ao(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cr(new B.u(j,k),n*2.3,l)
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d=B.ar(i,A.w,0.35)
d.toString
l.sar(new B.bR(D.aOX,0.9,A.x,a3,0,B.a([A.c,i,d],t),P.aqY,a3).av(0,a2))
a1=l.G()
u.drawOval(B.c2(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b4(j-d,h))
l.push(new B.ao(j+d,h))
l.push(new B.ao(j,k+n))
l.push(new B.bD())
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cQ(o,11))+C.cQ(o,12)*m,m)
r=C.cQ(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cr(A.J,t,v)
$.V()
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=D.ar6[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.c2(s),a1)
a1.delete()
u.restore()}},
bK0(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lg(b1,b2,b3,50,A.c,70)
for(w=[D.emq,D.em6,D.emc],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.V()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.sar(new B.bR(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bS(new B.u(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cQ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cQ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bJ,A.eB,g)
k.toString
d=C.cQ(i,3)
$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.r=k.j(0.5+0.5*C.cQ(i,4)).gp(0)
a0.a=A.n8
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.V()
a9=B.L()
a9.sar(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.zq.j(0.55),D.ab4],u),a4,a4).av(0,B.bS(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bz(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cQ(a2,9)),a6*0.1*C.cQ(a2,8))
a5=B.l3(a3,a3.ao(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l3(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sar(new B.a4(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.r0(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bx(a6,a5,a8)}},
cf9(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.V()
n=B.a([],s)
m=new B.aO(o.r,A.ao,b5,b5,n)
n.push(new B.b4(q,u))
o=p-0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ao(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bD())
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.zq.j(0.28),D.ab4],w),b5,b5).av(0,B.bS(new B.u(q,u),t)))
o.a=A.n8
l=o.G()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eZ:A.f_)
a9=$.V()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b4(a5?0:b6,0))
b0.push(new B.ao(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cO(a9,k,a5?g:a1,b7))
b0.push(new B.ao(a5?0:b6,b7))
b0.push(new B.bD())
a9=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a9.sar(new B.a4(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
b1.r=A.hy.gp(0)
b1.c=o
b1.d=A.bO
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.V().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b4(b6*0.42,w))
b2.E(new B.ao(b6*0.58,w))
b2.E(new B.ao(b6*0.8,b7))
b2.E(new B.ao(b6*0.2,b7))
b2.E(new B.bD())
v=B.L()
v.sar(D.bJc.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aL(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cQ(r,1))+C.cQ(r,2)*b3,b3)
u=C.cQ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qJ(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cQ(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bB_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cQ(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cQ(t,2))+C.cQ(t,3)*r,r)-q
o=C.cQ(t,4)*i
n=Math.cos(f*(2+3*C.cQ(t,5))+t)
m=Math.abs(n)
l=B.cr(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.V()
q=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.sar(new B.a4(A.ax,A.aC,A.x,n>0?D.d1T:D.cnA,null,null).av(0,l))
k=q.G()
v.drawOval(B.c2(l),k)
k.delete()
q=-(s*0.22)
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.baf.gp(0)
k=j.G()
v.drawOval(B.c2(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qJ(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lg(d,e,f,30,A.bJ,110)},
bU_(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lg(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cQ(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cQ(p,2))+C.cQ(p,3)*n,n)
l=C.cQ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.V()
h=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.sar(new B.bR(A.A,0.5,A.x,d,0,B.a([H.abc.j(0.45*k),D.aa7],u),d,d).av(0,B.bS(new B.u(l,m),j)))
g=h.G()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ao,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b4(l-i,e))
j.push(new B.ao(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ao(l+i,h))
j.push(new B.ao(l-i,h))
j.push(new B.bD())
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i=B.ar(D.b2A,A.c,0.2*k)
i.toString
j.sar(new B.a4(A.b1,A.b3,A.x,B.a([D.b6w,i],u),d,d).av(0,B.cr(new B.u(l,m),o*1.4,o)))
g=j.G()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bRG(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cQ(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cQ(p,2))+C.cQ(p,3)*n,n)
l=C.cQ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.V()
l=B.a([],t)
i=new B.aO(m.r,A.ao,d,d,l)
m=o*0.9
l.push(new B.b4(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pc(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pc(m,g,o*1.8,h,0,m))
l.push(new B.bD())
f=D.cH1[A.o.F(p,5)]
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l=B.ar(f,A.w,0.25)
l.toString
m.sar(new B.bR(A.rc,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a_5,d).av(0,B.bS(A.J,o*1.4)))
e=m.G()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lg(a3,a4,a5,30,A.ie,130)},
caw(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cQ(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cQ(q,2))+C.cQ(q,3)*o,o)
m=C.cQ(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cQ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.V()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b4(0,n))
l=n*0.2
m.push(new B.cO(p,l,0,p))
m.push(new B.cO(n,l,0,n))
m.push(new B.bD())
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
m=(q&1)===0?D.ci_:D.cQv
n.sar(new B.a4(A.a3,A.a7,A.x,m,i,i).av(0,B.bS(A.J,p)))
j=n.G()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lg(d,e,a0,25,A.bJ,140)},
byw(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lg(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cQ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cQ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cQ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.V()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b4(0,0))
a3.push(new B.pc(f,e,l,d,h,0))
a3.push(new B.pc(q,h,g,q,0,h))
a3.push(new B.bD())
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.sar(new B.a4(A.a3,A.a7,A.x,i?D.cQf:D.cSG,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.G()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.zx.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=D.b9F.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bXJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.V()
q=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=v
q.r=D.as5[t].j((1-s)*0.9).gp(0)
q.z=new B.hm(A.G,v)
p=r*0.3
p=B.bx(B.cr(e,r,r*1.6),new B.aY(p,p))
o=q.G()
u.drawRRect(B.ex(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cQ(m,1)*4)+m)))
k=D.as5[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aY(v,v))
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=k.j(0.85).gp(0)
j.z=new B.hm(A.a6T,p)
o=j.G()
u.drawRRect(B.ex(i),o)
o.delete()}},
bFy(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cQ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cQ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.nW,A.dy][A.o.F(p,4)]
j=C.cQ(p,3)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=k.j(0.75).gp(0)
i.a=A.n8
i.z=new B.hm(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.V()
t=B.L()
t.r=A.aA.gp(0)
t.c=1.2
a3.bx(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.e0.gp(0)
a3.ae(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.E(new B.ky(B.bS(v,u)))
a3.tl(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.V()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.c2(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qJ(a3,v.ao(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cpn(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cp.au(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.V()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b4(d,a0))
r=s-0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ao(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bD())
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.bJ.j(0.1).gp(0)
o=r.G()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.V()
a0=B.L()
a0.sar(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b_3.j(0.6),D.aa7],x.O),h,h).av(0,B.bS(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.L()
d.sar(D.dXd.av(0,B.bS(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cQ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.c.j(0.18).gp(0)
i=B.cr(new B.u(l,k),r,u)
o=j.G()
w.drawOval(B.c2(i),o)
o.delete()
i=B.cr(new B.u(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.c2(i),o)
o.delete()}this.lg(a2,a3,a4,20,A.hP,180)},
c9A(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.V()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b4(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ao(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.by(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ao(e,d)
q.push(r)
o=p.f
if(o!=null)r.by(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bD()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.V()
r=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=B.ar(A.cs,A.iX,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cQ(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cQ(i,2))+C.cQ(i,3)*j,j)
n=C.cQ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.V()
t=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.sar(new B.bR(Ak.pX,0.5,A.x,f,0,D.cVF,f,f).av(0,B.bS(new B.u(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lg(a1,a2,a3,25,A.c,190)},
cnC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cQ(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cQ(r,2))+C.cQ(r,3)*p,p)
n=C.cQ(r,4)
m=Math.sin(t+r)
$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.c.j(0.6+0.4*C.cQ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.by(v.save())
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
h.delete()}v.restore()}this.lg(d,a0,a1,40,A.eo,200)},
bU5(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dE(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cr(new B.u(p,0),q,r)
$.V()
f=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.sar(D.bJ_.av(0,new B.a9(0,o,n,m)))
e=f.G()
s.drawOval(B.c2(g),e)
e.delete()
s.restore()}}$.V()
a0=B.L()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b2L.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.qJ(a3,w.ao(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lg(a3,a4,a5,40,A.bJ,210)},
chE(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hy,A.hP],a6),B.a([A.o1,A.ie],a6),B.a([A.aD,A.eB],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bU<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.V()
k=B.a([],o)
j=new B.aO(l.r,A.ao,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b4(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ao(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dy(i,s),l=new B.bU(l,l.gJ(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ao(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bD()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k=a7[m]
h=k[0]
l.sar(new B.a4(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.arM,new B.m3(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lg(a8,a9,b0,40,A.c,220)},
bTP(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bz(g/t),5)
a1=g+t
$.V()
a2=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3=Math.abs(a0)
a2.r=D.a_8[a3].gp(0)
a4=a2.G()
s.drawRect(B.c2(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a5.r=D.a_8[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.c2(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cQ(a0,1))+C.cQ(a0,2)*a6,a6)
v=C.cQ(a0,3)
t=C.cQ(a0,4)
this.qJ(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a_8[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
csU(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.c=v
p.r=A.bJ.j(0.06).gp(0)
o=p.G()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.V().r,A.ao,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b4(v,a2))
w=a1+w
l.E(new B.ao(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cO(w,r,p,k))
w=a2+m*0.95
l.E(new B.ao(p,w))
p=n*0.3
j=a2+m
l.E(new B.ao(a1+p,j))
l.E(new B.ao(a1-p,j))
q=a1-q
l.E(new B.ao(q,w))
l.E(new B.ao(q,k))
l.E(new B.cO(v,r,v,a2))
l.E(new B.bD())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cr(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=q
d.r=A.au.gp(0)
o=d.G()
u.drawArc.apply(u,[B.c2(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sar(new B.a4(A.a3,A.a7,A.x,D.cXL,A.ard,null).av(0,new B.a9(v,a2,r,j)))
a4.aL(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.qJ(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bBE(a4,a5,a6,60)},
bBE(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cQ(p,31))+C.cQ(p,32)*v,v)
n=C.cQ(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cr(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.V()
n=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=D.NB[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.c2(o),m)
m.delete()
u.restore()}},
clu(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lg(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cQ(o,1)*1.6
m=A.k.F(a2+C.cQ(o,2)*n,n)/n
l=e*(C.cQ(o*7+A.k.bz((a2+C.cQ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.V()
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.sar(new B.a4(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).av(0,B.r0(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qJ(a0,i,p,A.c,1-m)}},
bwQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cQ(r,1))
p=A.k.F(C.cQ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cQ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.V()
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l=A.o.F(r,5)
m.r=D.att[l].j(n).gp(0)
m.a=A.n8
m.z=new B.hm(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.att[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
c7i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cr(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.V()
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.G()
w.drawOval(B.c2(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.hP.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.hy.j(0.4).gp(0)
k.z=new B.hm(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lg(d,e,f,45,A.bJ,270)},
bJj(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cQ(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cQ(o,2)*4,4)/4
j=A.eq.au(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cQ(o,3))*(j*i)
if(h<=0.5)continue
g=D.cND[A.o.F(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cr(new B.u(0,l),i,j)
$.V()
a0=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.sar(new B.a4(A.b1,A.b3,A.x,B.a([A.c,g],u),null,null).av(0,B.cr(new B.u(0,l),f,h)))
a1=a0.G()
v.drawOval(B.c2(d),a1)
a1.delete()}$.V()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.hy.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lg(a5,a6,a7,30,A.hP,280)},
bXu(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bS(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=v
j.r=D.aqk[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.c2(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cQ(g,1))+C.cQ(g,2)*h,h)
e=C.cQ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cQ(g,4))
a0=D.aqk[A.o.F(g,4)]
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cr(A.J,d,d*1.5)
i=a1.G()
u.drawOval(B.c2(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.G()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.G()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bVW(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=$.V()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b4(0,i))
a0.push(new B.cO(h,m,0,g))
a0.push(new B.cO(j,m,0,i))
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.b=A.ae
d.c=t
d.r=B.ar(A.bJ,A.nW,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=A.hP.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.V()
a5=B.L()
a5.sar(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hy.j(0.25),D.Uo],x.O),a3,a3).av(0,B.bS(w,a4)))
a7.ae(w,a4,a5)
this.lg(a7,a8,a9,30,A.bJ,300)},
cnK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.sar(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hP,A.hy.j(0.6),D.Uo],o),null,null).av(0,B.bS(new B.u(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cQ(f,1)
d=A.k.F(b2+C.cQ(f,2)*e,e)/e
a0=A.k.bz((b2+C.cQ(f,2)*e)/e)
a1=C.cQ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cQ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=B.ar(A.hP,A.aW,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.n8
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
g.delete()}}}this.lg(b0,b1,b2,35,A.bJ,310)},
bAj(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOR(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cQ(n,1))
l=a8*(0.14+0.24*C.cQ(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.sar(D.bJV.av(0,j))
h=i.G()
r.drawRect(B.c2(j),h)
h.delete()
g=A.k.bz(m/q)
f=A.k.bz(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cQ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.V()
a6=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.c2(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aX0.prototype={
B(d){var w,v=null,u=new C.c4e(),t=new C.c4g(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ajb,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c4f(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ft[w]))
return B.c6(A.bG,s,A.bx,12,10)}}
C.Xw.prototype={
S(){return new C.axc()}}
C.axc.prototype={
guQ(){var w=this.d
return w===$?this.d=this.a.c:w},
gaVn(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ap(new B.ba(w.b,A.b0,A.aM),$.av())}return v},
gauj(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaH8()
v=$.av()
u.f!==$&&B.bK()
t=u.f=new B.ap(new B.ba(w,A.b0,A.aM),v)}return t},
q(){var w=this.gaVn(0),v=$.av()
w.R$=v
w.O$=0
w=this.gauj()
w.R$=v
w.O$=0
this.a2()},
Y2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Y2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().B2(90,700,700,A.eD),$async$Y2)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f8(),$async$Y2)
case 8:p=e
o=q.b.toLowerCase()
n=J.afE(o,".png")?"image/png":"image/jpeg"
r.m(new C.d1r(r,n,p))
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
return B.i($async$Y2,v)},
aVm(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b3(4,B.m(12),A.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aKZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aeL(p.guQ().a)
if(n==null)n=A.d.gL(D.Ft)
w=p.guQ()
v=p.r
u=x.p
v=B.D(new B.am(A.X,o,A.a9,A.q,B.a([B.bX(0,new C.LY(p.guQ(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.an(o,B.Gq(A.mb,new C.d1w(d),B.ne(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Gq(D.buw,new C.d1x(p),B.ne(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aKT,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaVn(0),o,o,o,o,o,2,p.aVm("Big words"),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d1y(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hg,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hy.j(0.6),A.r,1)
if(p.guQ().d.length===0)q=D.bxP
else{q=C.fZi(p.guQ().d)
if(q==null)q=new Uint8Array(0)
q=B.hO(B.fG(q,A.A,o,o,A.cn,A.bQ,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ab,B.aG(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc1l(),o,o,o,o,o,o,!1,A.ad)],u)
if(p.guQ().d.length!==0)r.push(B.aF(o,o,o,o,D.YY,o,o,o,new C.d1z(p),o,o,o,o,"Remove logo",o))
return B.ca(o,A.w,B.bp(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gauj(),o,o,o,o,o,2,p.aVm("Line under it"),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d1A(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a5,o,A.am,o,o,o,o),A.aa,B.dn(D.bwL,D.fb8,new C.d1B(p,d),B.bj(A.au,o,o,o,A.w,o,A.cd,o,new B.b6(B.m(14),A.Z),o,o,o))],u),A.ah,o,A.e,A.Q,0,A.p),A.f,o,o,D.aTd,o,o,o,o,A.E2,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ai,!0,!0),o,!1,!1,o,o)}}
C.aIJ.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.XR.prototype={
S(){return new C.bcQ(new B.ap(A.as,$.av()))}}
C.bcQ.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.M(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.aj,k=B.aH(d,A.bR,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bH:A.aK,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.W(A.cu,l,o,o,o,o),o,o,o,new C.d7X(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cz4[w]
u=B.a([],g)
for(t=J.aU(v.b);t.C();){s=t.gT(t)
r=new B.aY(12,12)
q=new B.aY(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aJ(!1,new B.bw(r,r,r,r),!0,B.p(A.A,new B.w(s,o,A.yA,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bw(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d7Y(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hC,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.En(A.bG,6,6,A.bx,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aO
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bL(A.aLN,new C.d7Z(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bp(!0,B.p(o,B.v(B.a([f,new B.dl(1,A.ch,B.cL(e,o,o,o,o,A.ak,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aW(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rS,A.VU,o,o,o),!0,!1,A.ai,!0,!0)}}
C.bcd.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f3()
a2.dU(this.c)
w=this.b
v=w/6.283185307179586
$.V()
u=B.L()
u.z=A.P6
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.af()
l=a2.af()
k=a2.af()
j=0.8+a2.af()*2.2
i=Math.sin(w*(3+a2.aC(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.af()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.G()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.G()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.V()
a1=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.r=e.gp(0)
a1.c=1
d=a1.G()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.G()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aq(d){return d.b!==this.b}}
C.bbV.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kf),a2=this.b,a3=Math.sin(a2*2),a4=$.V(),a5=B.L()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.la
a6.aA(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.E(new B.iP(a1))
v=new B.QV(new B.v_(B.wr(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.j2()
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
$.V()
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cI([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cI([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cI([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.j2()
e=u[a3].Li(n).a
$.V()
k=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=w.gp(0)
k.z=A0.mg
g=k.G()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=A.c.gp(0)
g=d.G()
q.drawCircle(k,f,2,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.bkE.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f3()
e.dU(this.c)
w=a0.a*(0.2+e.af()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gajS()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.V()
i=B.a([],n)
h=new B.aO(j.r,A.ao,f,f,i)
i.push(new B.b4(w,v))
j=l-k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ao(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bD())
j=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.sar(B.aS9(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.j9
g=j.G()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b6T.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f3()
a0.dU(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.af()
l=a0.af()
k=Math.min(t,r)*(0.03+a0.af()*0.09)
j=a0.af()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.V()
e=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.r=f.j(g).gp(0)
e.z=new B.hm(A.G,k*0.35)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b6w.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f3()
a0.dU(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.af()-0.5)*0.1)
k=v*(0.06+a0.af()*0.05)
j=a0.af()*3.141592653589793*2
i=$.V()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b4(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ao(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.by(e)
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
i.z=new B.hm(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.brt.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.V()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sar(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cFT,null).av(0,u))
d.aW(u,w)
w=u.cD(-3)
v=B.L()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.j9
d.aW(w,v)},
aq(d){return d.b!==this.b}}
C.bow.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bz(d)*7,p=0;p<7;++p){o=new B.f3()
o.dU(q+p)
n=o.af()*w
m=o.af()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.af()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.V()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=j.gp(0)
i.c=1.4
i.d=A.bO
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
g=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hm(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bnF.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.V()
v=B.L()
v.a=A.n8
v.sar(new B.a4(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aW(w,v)},
aq(d){return d.b!==this.b}}
C.bbf.prototype={
a5(d,e){var w,v,u,t,s,r=e.ge8(),q=0.55+0.45*Math.sin(this.b)
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
u.z=A.qH
r=new C.d18(this,r*0.16,d,u,w)
t=e.ge8()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.wU.prototype={}
C.Hp.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aoL.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.ua.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mc.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hp.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.eB.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ej(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.hBT(v.z))
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
C.lr.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,eB>")
n=B.A(new B.J(n,new C.c9D(),m),m.k("ai.E"))
return C.qZ(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("J<1,a1<n,@>>")
n=B.A(new B.J(n,new C.c9E(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hU.prototype={
gb5f(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gQy(){if(!C.kj(this.w))return!1
var w=this.gb5f()
if(w==null)return!1
return new B.P(Date.now(),0,!1).cV(w.bP())},
hs(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.A(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.A(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.U(r).k("J<1,lr>")
r=B.A(new B.J(r,new C.c9s(),q),q.k("ai.E"))
return C.AH(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.A(new B.J(w,new C.c9t(),v),v.k("ai.E"))
t.n(0,"slides",w)
return t}}
C.jt.prototype={}
C.aZ8.prototype={
B(d){return B.ck(new C.c9y(this))}}
C.am_.prototype={
S(){return new C.bg_(null,null)}}
C.bg_.prototype={
gaVo(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h9,null,1,null,v)
w.cE(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
q(){this.gaVo().q()
this.bpA()},
B(d){return B.c4(this.gaVo(),new C.dzy(),this.a.c)}}
C.aIu.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.abj.prototype={
Od(d,e,f,g){return this.bJ0(d,e,f,g)},
bJ0(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Od=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Od)
case 3:s=i
if(d.e==null){w=1
break}B.a8(d,!1).M(null)
t=d.I(x.q).f
t.P(B.b1(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Od,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.ba,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dR,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.ar,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.D(new C.abB(A.hs,"Download",A.bT,new C.edc(w,d),!0,v),1),A.aw,B.D(new C.abB(A.uK,"Share",A.bk,new C.edd(w,d),!1,v),1),A.aw,B.D(new C.abB(A.hb,"Safari",A.aX,new C.ede(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bI(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.edf(d),v,v))
return B.bp(!0,new B.C(A.pf,B.v(B.a([B.p(v,B.v(n,A.ah,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iI,v,t,u,s,v,A.n),v,v,v,v,A.E8,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ai,!0,!0)}}
C.abB.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aD(!1,A.a1,!0,v,B.aJ(!1,u,!0,B.es(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bm9,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ac)}}
C.aZ6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anY(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.N(v,w,v,w)}else{v=6*w
u=new B.N(v,10*w,v,12*w)}t=i.c1m().ai2(1.35)
s=B.at9(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.buR(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bk,h,h,h,h,2,D.bFH,A.z,!0,h,!0,h,!1,i.x,A.af,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.vq,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yu,A.am,h,A.R9,h,h)
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
w=n?t.czZ(B.aZ(g.Q).j(0.45),A.cA):t
p=g.as
l=m?1:h
k=m?A.ez:A.C3
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.R0:s
$.V()
j=B.L()
j.b=A.ae
j.c=3*w
j.e=A.fv
j.r=A.az.gp(0)
j=i.chH(p,t,k,j)
k=g.r
w=new B.am(A.X,h,A.a9,A.q,B.a([j,i.chF(k,t,l?A.R0:s)],x.p),h)}else w=i.chG(p,t,g.k2?A.R0:s,m)
v=new B.mW(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aG(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ad)}return new B.C(u,new B.bH(r,h,h,q,h),h)
case 1:case 4:return i.bSj()
case 3:return i.c9z()
case 2:return B.b2(h,h,h,new C.aZ3(g,h),A.f3)
case 5:g=g.r
return new C.aZ5(g,!i.e&&i.z==null,h)}},
c1m(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aZ(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kE
j=A.cA
break
case"shadow":v=o.d
e=B.a([new B.cM(D.aa5,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cM(l,A.J,6*v),new B.cM(l,A.J,16*v),new B.cM(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.ct
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mm
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cM(A.by,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cM(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cM(A.b7,new B.u(-3*v,0),0),new B.cM(A.aE,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cM(A.cM,A.J,8*v),new B.cM(A.aE,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=H.a91
break
case"ice":v=o.d
e=B.a([new B.cM(A.aY,A.J,10*v),new B.cM(A.cs,A.J,22*v)],x.r)
k=A.O
w=A.eo
break
case"chalk":h=o.d
e=B.a([new B.cM(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kE
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cHM[q]
u.push(new B.cM(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cM(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.V()
f=B.L()
v=o.d
f.sar(D.bHt.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cM(A.IX,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.V()
f=B.L()
v=o.d
f.sar(D.bHO.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cM(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cM(l.j(0.45),new B.u(u,u),0),new B.cM(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kE
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aZ(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
awb(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.es4.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c9w(h)
v=r.k2?C.hOh(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.ez:A.C3
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.W2(B.dm(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
chH(d,e,f,g){return this.awb(d,e,f,!1,g)},
chF(d,e,f){return this.awb(d,e,f,!1,null)},
chG(d,e,f,g){return this.awb(d,e,f,g,null)},
buR(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bSj(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.au(B.W(s.b===D.kN?A.F4:A.Al,A.aA,t,t,t,32),t,t,t)}w=u.bxL(r)
if(s.b===D.kN){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.H(A.cl,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dz,6)],x.V),t,A.n),t,1/0,t,t,new B.N(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aKg(r,!0)
return C.fkc(s.go,v,s.id)}return w},
aKg(d,e){var w,v,u,t
try{w=C.hOA(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.ck(new C.c9v(this,w,v,e))
return u}catch(t){return D.a8e}},
bxL(d){return this.aKg(d,!1)},
c9z(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aYe
return C.hOS(v,w.db,w.dx)}}
C.aZ3.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.V(),g=B.L(),f=this.b
g.r=B.aZ(f.ay).gp(0)
w=B.L()
w.r=B.aZ(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aW(s,g)
d.aW(s,w)
break
case 1:d.hU(s,g)
d.hU(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.E(new B.b4(u/2,0))
r.E(new B.ao(u,t))
r.E(new B.ao(0,t))
r.E(new B.bD())
d.aL(r,g)
d.aL(r,w)
break
case 3:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b4(0,h))
f=u*0.65
r.E(new B.ao(f,h))
r.E(new B.ao(f,t*0.2))
r.E(new B.ao(u,t*0.5))
r.E(new B.ao(f,t*0.8))
t*=0.55
r.E(new B.ao(f,t))
r.E(new B.ao(0,t))
r.E(new B.bD())
d.aL(r,g)
d.aL(r,w)
break
case 4:h=t/2
w.c=v+2
d.bx(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.E(new B.b4(q,0))
r.E(new B.ao(u,0))
r.E(new B.ao(u-q,t))
r.E(new B.ao(0,t))
r.E(new B.bD())
d.aL(r,g)
d.aL(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ao,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b4(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ao(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bD())
d.aL(r,g)
d.aL(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aG5.prototype={
S(){return new C.br_(null,null)}}
C.br_.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.ip,null,1,null,v)
w.cE(0)
v.d!==$&&B.aQ()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.brP()},
aKr(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bV(B.au(B.d(d,w,w,w,w,w,w,A.dR,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a4(A.a3,A.a7,A.x,v,w,w),A.n),A.bb)},
bv4(){var w,v=this,u=null,t=v.aKr("Slide A",A.bk),s=v.aKr("Slide B",A.aX)
if(v.a.c===D.ce)return new B.am(A.X,u,A.b_,A.q,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eS4(v,s,t),u)},
B(d){return this.bv4()}}
C.aGI.prototype={
iJ(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.Ti.prototype={
S(){return new C.bga(null,null)}}
C.bga.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zL,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ce){w.sp(0,1)
return}B.bN(B.dz(0,0,0,v.c.fr+v.f*120,0,0),new C.dKS(u),x.a)},
bq(d){var w,v,u,t=this
t.bD(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ce)w.sp(0,1)
else B.bN(B.dz(0,0,0,v.c.fr+v.f*120,0,0),new C.dKR(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bpP()},
B(d){var w,v=this.a
if(v.c.dy===D.ce||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dKQ(this),v.d)}}
C.Ho.prototype={
B(d){return B.ck(new C.c9o(this))}}
C.awY.prototype={
S(){return new C.baK()}}
C.baK.prototype={
Z(){this.a0()
if(this.a.c!==D.ce)B.bN(A.K6,new C.cZH(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ce)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.Ti(C.ej(A.bf,!1,4279310375,A.aB,"",4294538006,24,A.bi,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bc,o,2,"",0,0,"",u,D.eW,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cf,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ej(A.bf,!1,4294967295,A.aB,"",4280640491,22,A.bi,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bc,o,2,"Element flies in",0,0,"",q.a.c,D.cP,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.X,p,A.a9,A.q,B.a([w,B.an(32,new C.Ti(t,B.p(p,D.eYO,A.f,p,p,new B.o(s,p,B.H(A.ba,A.r,1),r,p,p,A.n),p,p,p,p,A.j4,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bV(n,D.aTM,A.bb)}}
C.a5R.prototype={
S(){return new C.bgP(null,null)}}
C.bgP.prototype={
gaVV(){var w=this.a
if(w.e)w=D.esb.t(0,w.c)||D.aIb.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVV()){w=C.hMX(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dz(0,0,0,w,0,0),null,1,null,v)
w.cE(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bql()},
B(d){var w,v=this,u=v.d
if(!v.gaVV()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e2R(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aX3.prototype={
B(d){var w=null
return B.au(C.aZ7(!0,w,!1,C.ej(A.L,!1,this.e.l(),A.aB,"",4280640491,this.f,A.bi,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.bc,4280172719,2,"Aa",0,0,this.c,D.ce,D.cP,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbT.prototype={
iJ(d){return C.a0y(this.b,new B.a9(0,0,0+d.a,0+d.b).cD(-this.c))},
jl(d){return d.b!==this.b||d.c!==this.c}}
C.bmF.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0y(g,h),e=a1.ge8(),d=new C.eHv()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aJG.av(0,h))
a0.aL(f,w)
g=C.a0y(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.ba1.gp(0)
a0.aL(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.eBK.av(0,h))
a0.aL(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hm(A.G,e*0.04)
a0.aL(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aL(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.eBI.av(0,h))
a0.aL(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aL(f,w)
g=C.a0y(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aL(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.hm(A.G,e*0.035)
a0.aL(f,g)
g=d.$1(e*0.016)
g.r=A.o4.gp(0)
a0.aL(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.eBD.av(0,h))
a0.aL(f,w)
w=C.a0y(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b0o.gp(0)
a0.aL(w,v)
g=C.a0y(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b2C.gp(0)
a0.aL(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aJG.av(0,h))
a0.aL(f,g)
for(g=B.wr(f),w=B.a([],x.X),g=new B.v_(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jK(y.M));--q
g.j2()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bz(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.j2()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.j2()
m=w[q].Li(p*n/o).a
l=D.cFe[A.o.F(n,4)]
$.V()
p=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=l.gp(0)
k=p.G()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.c.j(0.9).gp(0)
k=i.G()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.eBM.av(0,h))
g.z=new B.hm(A.G,e*0.03)
a0.aL(f,g)
g=d.$1(e*0.018)
g.sar(D.eBJ.av(0,h))
a0.aL(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aL(f,w)
g=C.a0y(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.ne.gp(0)
a0.aL(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bnC.prototype={
a5(d,e){d.EG(C.a0y(this.b,new B.a9(0,0,0+e.a,0+e.b).cD(-this.c)),A.w,e.ge8()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aII.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aJd.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aKx.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.a69.prototype={}
C.Mo.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBI(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.b_(v),null,null)},
gdS(){return this.c},
gRT(){return this.r},
gRU(){return this.w},
gK9(){return this.x}}
C.aBI.prototype={
Z(){var w,v=this
v.a0()
$.aT.c_$.push(v)
C.fp9()
$.h5L=new C.ejq(v)
w=B.bi(null,A.zJ,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.H8()},
bq(d){var w,v,u=this
u.bD(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MW(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H8()}},
iE(d){if(d===A.yT||d===A.re||d===A.rd||d===A.oP)this.rK()},
q(){var w,v,u,t=this
$.aT.hv(t)
w=t.at
if(w!=null)w.aa(0)
t.rK()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bI(0)
v.fU()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.R$=$.av()
v.O$=0}t.bqz()},
ga97(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gNf(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9B(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQy())return!1
return!0},
jK(){return this.a9B(null)},
agb(){var w=this.c
if(w==null)return
w.I(x.q).f.P(D.eA1)},
px(){if(!this.jK())return!1
this.agb()
return!0},
ao7(d){var w,v,u,t,s,r=this
if(r.a9B(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h4S(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yW(){return this.ao7(null)},
H8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aoN(k),$async$H8)
case 3:j=e
w=4
return B.b(C.anq(k),$async$H8)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fDT(j,t.bV5())
w=t.ga97()?5:7
break
case 5:r=t.gNf()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aXh(r),$async$H8)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bo(s,new C.efO())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bo(s,new C.efP())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xS(m==null?"":m)!=null)continue
C.fpl(n,s)
p=!0}t.m(new C.efQ(t,s))
if(p||s.length>J.aa(j))t.rK()
case 1:return B.h(u,v)}})
return B.i($async$H8,v)},
bV5(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kj(w)&&w!==q}if(w)p.push(r)
return p},
cg7(d){var w,v=this,u=d.w
if(!C.kj(u)||u==="hati_kiapo_uongozi")return
v.a7Z(d)
w=A.d.bi(v.d,new C.eho(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.P(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
cav(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kj(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cg7(t)
s=u.d
w=B.U(s)
v=w.k("cV<1,hU>")
s=B.A(new B.cV(new B.a5(s,new C.ehc(),w.k("a5<1>")),new C.ehd(),v),v.k("G.E"))
return s},
MW(d){return this.bJn(d)},
rK(){return this.MW(null)},
bJn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cav()
w=3
return B.b(C.Uf(d==null?t.a.c:d,s),$async$MW)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.ao7(r)?4:5
break
case 4:w=6
return B.b(C.a5n(r),$async$MW)
case 6:q=r.x
p=A.a.i(q==null?t.gNf():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bi(t.d,new C.efb())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MW,v)},
oC(){var w,v=this,u=v.at
if(u!=null)u.aa(0)
u=v.e
w=(u==null?null:C.kj(u.w))===!0?A.hT:A.ls
v.at=B.cP(w,new C.eiw(v))},
aVp(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ad4(u.hs(),v.f,v.r))
if(w.length>40)A.d.cv(w,0)
A.d.a7(v.ay)},
ct5(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ad4(w.e.hs(),w.f,w.r))
w.m(new C.ejm(w,v.pop()))
w.oC()},
cfe(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ad4(w.e.hs(),w.f,w.r))
w.m(new C.ehm(w,v.pop()))
w.oC()},
nD(){var w,v,u=this
if(u.e==null)return
w=A.d.bi(u.d,new C.ej9(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.P(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.P(Date.now(),0,!1)},
VJ(d){var w,v,u,t,s=this.gdj()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wA(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.R$=$.av()
u.O$=0}w.a7(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bI(0)
u.fU()}w.a7(0)},
IK(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdj()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cV<1,n>")
t=B.d8(new B.cV(new B.a5(w,new C.eja(),v.k("a5<1>")),new C.ejb(),u),u.k("G.E"))
w=this.ch
v=B.a2(w).k("cw<1>")
v=B.A(new B.cw(w,v),v.k("G.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.av()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bI(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cP)continue
p=n.a
m=w.ce(0,p,new C.ejc(n))
s.ce(0,p,new C.ejd())
p=m.a.a
o=n.r
if(p!==o)m.saT(0,o)}},
Gt(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.ba(u.d,new C.eeA(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gNf()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nD()
u.oC()},
agw(d,e){var w,v,u,t,s=this
if(s.jK())return
w=s.VJ(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kj(v.w))===!0
if(u){C.hN0(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdj()
if(t!=null)C.hN1(t,w.d+w.f*0.5)}}s.Gt()
s.nD()
s.oC()
if(u&&s.c!=null)s.m(new C.ejn())},
cu9(d,e){var w=this,v=w.gdj()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gt()
w.nD()
w.oC()},
gdj(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpB(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hL2(o)
if(w!=null)return w
v=q.gdj()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aZ(p==null?v.e:p)
u=q.bSy(v)
t=q.bSx(v)
s=B.aZ(v.e)
r=v.f
return new C.jt(o,"Class template",p,u,t,s,r==null?null:B.aZ(r))}return C.hod(o)},
bSy(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cP)s=t.w>=28||A.o.D(A.o.al(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aZ(t.Q)}return A.M},
bSx(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cP&&t.w<28)return B.aZ(t.Q)}return A.aJ},
acv(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga97()){w.c.I(x.q).f.P(D.eyE)
return}w.a7Z(d)
w.aWB(C.byD(d))
return}if(C.cah(v)){w.a7Z(d)
w.aWB(d)
return}w.m(new C.egv(w,d))},
aoG(){var w,v,u,t,s,r,q=this
q.a02(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kj(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eey(q))
if(r&&q.c!=null){u.toString
q.Ik(u,s)}return}q.rK()
q.m(new C.eez(q))},
aWA(d){this.a7Z(d)
this.YD(d,!0)},
a7Z(d){if(!C.kj(d.w))return
C.fpl(d,this.d)},
YD(d,e){return this.c6w(d,e)},
aWB(d){return this.YD(d,!1)},
c6w(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.byD(d)
if(e){r=s.x
q=A.a.i(r==null?t.gNf():r)
t.dy.W(0,q.toLowerCase())
C.anr(t.a.c,q)}r=s}else r=d
w=C.cah(r.w)?3:4
break
case 3:w=5
return B.b(t.a8_(r),$async$YD)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.ba(t.d,new C.egS(l))
o=l.a.hs()
n=C.kj(o.w)&&C.hOc(o)
t.m(new C.egT(t,o,p))
if(n){m=A.d.bi(t.d,new C.egU(o))
if(m>=0){t.d[m]=o.hs()
t.rK()}}if(!t.a9B(l.a))t.WR()
r=!1
if(t.c!=null)if(!t.a9B(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.ao7(r)&&C.fln(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.P(D.ezd)
case 1:return B.h(u,v)}})
return B.i($async$YD,v)},
a8_(d){return this.bHF(d)},
bHF(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a8_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l1(r.c,A.yb),$async$a8_)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kG(!1,r,s.c,s.d,null,A.yb,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8_,v)},
nw(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cah(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c9G(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nw,v)},
acc(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.egu(),s,null,!0,!0,x.H),$async$acc)
case 3:if(t.c==null){w=1
break}t.aoG()
case 1:return B.h(u,v)}})
return B.i($async$acc,v)},
acb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.egr(),s,null,!0,!0,x.H),$async$acb)
case 3:if(t.c==null){w=1
break}t.m(new C.egs())
t.aoG()
case 1:return B.h(u,v)}})
return B.i($async$acb,v)},
WR(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ax(),$async$WR)
case 3:r=e
if(B.k5(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ap("Bool","ngmy_marriage_hint_seen",!0),$async$WR)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.exh)
case 1:return B.h(u,v)}})
return B.i($async$WR,v)},
Ik(d,e){return this.cgy(d,e)},
cgy(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ael(s,t.gDh(),t.gDg(),!0,e,t.d),$async$Ik)
case 9:w=4
break
case 6:w=10
return B.b(C.aem(s,t.gDh(),t.gDg(),!0,e,t.d),$async$Ik)
case 10:w=4
break
case 7:w=11
return B.b(C.aen(s,t.gDh(),t.gDg(),!0,e,t.d),$async$Ik)
case 11:w=4
break
case 8:w=12
return B.b(C.aeo(s,t.gDh(),t.gDg(),!0,e,t.d),$async$Ik)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
bU3(){var w,v,u,t,s=this
if(!s.ga97()){s.c.I(x.q).f.P(D.exu)
return}w=s.gNf()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aek(u,t,v,new C.efK(s),new C.efL(s),w)},
acw(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(A.dB,null,new C.egB(u),s,!0,!0,!1,A.lc,!1,!1,x.N),$async$acw)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.aeo(s,u.gDh(),u.gDg(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ael(s,u.gDh(),u.gDg(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aem(s,u.gDh(),u.gDg(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aen(s,u.gDh(),u.gDg(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bU3()
return B.h(null,v)}})
return B.i($async$acw,v)},
c5E(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aVp()
w=C.cA()
v=C.AH(t,t,t,t,D.Bs,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.egC(u,v))},
a7q(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a7q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hSy(s),$async$a7q)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.ea(q.r,new C.eeC())
t.cZ(new C.eeD(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.P(B.b1(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7q,v)},
aeu(d,e,f,g){var w=null,v=g?A.dw:A.bN,u=B.H(g?A.ba:A.cl,A.r,1)
return B.hs(B.aG(w,B.p(w,B.W(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ad),w,e,w,w)},
YC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.px()){w=1
break}s=t.jo()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a5<1>")
p=B.A(new B.a5(r,new C.egN(),q),q.k("G.E"))}o=s!=null&&s.b===D.lb?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.P(D.ezo)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.egO(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$YC)
case 3:case 1:return B.h(u,v)}})
return B.i($async$YC,v)},
acN(){return this.c6v()},
c6v(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hSk(s,t.f+1,o),$async$acN)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kp(s,B.U(s).c)
p.a=A.d.bi(o.r,new C.egQ(q))
t.cZ(new C.egR(p,t,o,q,r))
t.c.I(x.q).f.P(D.ezN)
case 1:return B.h(u,v)}})
return B.i($async$acN,v)},
acU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.px()||!t.yW()){w=1
break}s=t.gdj()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a5<1>")
p=B.A(new B.a5(r,new C.eh7(),q),q.k("G.E"))
if(p.length===0){t.c.I(x.q).f.P(D.ex2)
w=1
break}o=new B.J(p,new C.eh8(),B.U(p).k("J<1,Q>")).fv(0,new C.eh9())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ap(new B.ba(l,A.b0,A.aM),$.av()))}q=t.c
q.toString
w=3
return B.b(B.c1(A.K,null,new C.eha(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acU)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.R$=$.av()
q.O$=0}if(t.c!=null)t.m(new C.ehb())
case 1:return B.h(u,v)}})
return B.i($async$acU,v)},
acz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$acz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.px()){w=1
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
return B.b(C.h6R(s,new C.Dr(r,q,p,o==null?"":o)),$async$acz)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.egD(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aeL(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b1(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$acz,v)},
a7T(){return this.bH1()},
bH1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.px()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hSx(s,t.f+1,l),$async$a7T)
case 3:r=e
q=$.fHh
$.fHh=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.eeT())
t.c.I(x.q).f.P(D.ewU)
w=1
break}if(!q){s=r.CW
s=C.h5J(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.eeU(t,l,r))
t.c.I(x.q).f.P(D.eAg)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kp(s,B.U(s).c)
s=l.r
m.a=A.d.bi(s,new C.eeV(p))
o=s.length
t.cZ(new C.eeW(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b1(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7T,v)},
aMw(d,e){if(e){this.adn()
return}this.c5E(d,!1)},
bCP(){return this.aMw(null,!1)},
adn(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c1(A.bW,null,new C.ehh(t),r,!0,!0,!0,A.oy,!1,!1,x.N),$async$adn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ehi(t,C.hL1(s).oP()))
case 1:return B.h(u,v)}})
return B.i($async$adn,v)},
cZ(d){var w=this
if(w.px())return
w.Gt()
w.aVp()
w.m(d)
w.IK()
w.nD()
w.oC()},
a5U(){this.cZ(new C.edx(this,D.mh))},
aNU(){var w=this.gdj()
if(w==null)return
this.cZ(new C.eeR(this,w))},
aN6(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.eeP(this))},
aZs(d,e){if(this.e==null||d===e)return
this.cZ(new C.ehq(this,d,e))},
Mt(d){return this.bEN(d)},
bEN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gNf():s)
w=5
return B.b(C.anp(t.a.c,r),$async$Mt)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aoP(s)
w=6
return B.b(C.aZb(t.a.c,s),$async$Mt)
case 6:if(t.c==null){w=1
break}t.m(new C.eeL(t,d))
w=7
return B.b(t.rK(),$async$Mt)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Mt,v)},
cgv(d,e){var w=this
if(d.z){w.agb()
return}w.m(new C.ehp(w,d,e))
w.oC()},
jo(){var w,v,u,t,s,r=this.gdj()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UK(d){return this.ch.ce(0,d.a,new C.eeB(d))},
aqv(d){return this.CW.ce(0,d.a,new C.efc())},
a02(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.VJ(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ag$.d.c
if(u!=null)u.jf()},
b1K(){return this.a02(!0)},
a00(d){var w,v,u=this
if(u.px())return
if(!u.yW())return
w=u.VJ(d)
if(w==null||w.b!==D.cP)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UK(w).saT(0,"")}u.m(new C.ej7(u,d))
$.aT.x1$.push(new C.ej8(u,d,w))},
b2f(d){var w=this
if(d.b===D.cP&&!w.jK()&&w.yW()){w.a00(d.a)
return}w.awB(d.a)},
awB(d){var w,v,u,t,s,r=this
if(r.jK())return
w=r.r
if(w!=null&&w!==d){v=r.VJ(w)
if(v!=null&&v.b===D.cP){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eix(r,s,d))
if(s||d==null){t=$.aT.ag$.d.c
if(t!=null)t.jf()}},
aIP(){this.cZ(new C.edy(this))},
on(d){return this.bu8(d)},
bu8(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$on=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$on)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.edv(t,d))
case 1:return B.h(u,v)}})
return B.i($async$on,v)},
TU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fq(78,1920),$async$TU)
case 3:s=e
if(s==null||t.gdj()==null){w=1
break}t.cZ(new C.edl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TU,v)},
TO(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdj()==null){w=1
break}w=3
return B.b(S.BQ(t.a.c),$async$TO)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gai(s)){t.c.I(x.q).f.P(D.eAQ)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c1(null,null,new C.edi(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TO)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdj()==null){w=1
break}t.cZ(new C.edj(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TO,v)},
apv(){var w=this,v=w.r
if(v==null||w.gdj()==null)return
if(A.d.ba(w.gdj().z,new C.eeN(v))){w.c.I(x.q).f.P(D.ezR)
return}if(w.w===v)w.a02(!0)
w.cZ(new C.eeO(w,v))},
bB5(){var w=this.jo(),v=w==null
if((v?null:w.b)===D.eW)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cP)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJw(d,e){var w=this,v=w.jo(),u=w.gdj(),t=w.e
if(t==null)return
w.cZ(new C.ee_(w,v,d,e,t,u))},
bvI(d){return this.aJw(d,null)},
a6b(d){return this.bvQ(d)},
bvQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a6b=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a3t.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nw(),$async$a6b)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s!=null){r=s.b
if(r===D.cP)t.bvI(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eW){r=d.c
t.aJw(r.j(0.88),r)}w=1
break}t.cZ(new C.ee4(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a6b,v)},
a6a(d){return this.bvO(d)},
bvO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a6a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jo()
r=t.gdj()
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
return B.b(t.nw(),$async$a6a)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ee2(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a6a,v)},
bvy(d){var w=this.gdj()
if(w==null)return
this.cZ(new C.edZ(this,w,d))},
YH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hSt(r),$async$YH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nD()
t.m(new C.eh1(t,s))
w=4
return B.b(t.rK(),$async$YH)
case 4:if(t.c!=null)t.acv(s)
case 1:return B.h(u,v)}})
return B.i($async$YH,v)},
a7L(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a02(!0)
t.nD()
s=t.c
s.toString
w=3
return B.b(C.Py(s,q),$async$a7L)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.P(B.b1(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7L,v)},
Cr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nD()
t=4
w=7
return B.b(C.aNd(m),$async$Cr)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aMD(o,q,m.b),$async$Cr)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a6(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Cr,v)},
E4(d,e){return this.csB(d,e)},
csB(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$E4=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.px()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a02(!0)
t.nD()
s=h.a=t.e.hs()}else{r=A.d.bi(t.d,new C.ejg(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hM_(q?"":s)
o=C.h4F(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a5<1>")
n=B.A(new B.a5(s,new C.ejh(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.cma(n.length,o,s),$async$E4)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hLU(h.a)
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
return B.b(t.cm9(n,o),$async$E4)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kZ(t.d,new C.eji(s))
s=h.a.b
w=11
return B.b(t.cm7(k.b,s),$async$E4)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hLZ(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.P(D.eB0)
w=1
break}w=12
return B.b(t.cm8(j.a,s,o,j.c),$async$E4)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ejj(h,t,i))
t.oC()
case 1:return B.h(u,v)}})
return B.i($async$E4,v)},
cma(d,e,f){var w=this.c
w.toString
return B.c1(A.K,null,new C.eiN(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cm9(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.eiM(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cm7(d,e){var w=this.c
w.toString
return B.c1(A.K,null,new C.eiG(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cm8(d,e,f,g){var w=this.c
w.toString
return B.c1(A.K,null,new C.eiI(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a9b(){var w=null
return B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a9c(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a4(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ey,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eKT,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aR4(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.RC,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aR7(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a4(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.a1,!0,w,B.aJ(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.n2,w,w,w),A.d6,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.Ap,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bz,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efG(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac)},
bRv(d,e,f,g,h,i){return this.aR7(d,e,f,!1,g,h,i)},
arP(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dR,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Wf,w,w,w)},
aR6(d,e,f){var w=null,v=B.bj(A.c.j(0.08),w,w,w,A.c,w,A.cd,w,new B.b6(B.m(14),A.Z),w,w,w)
return B.bL(B.d(e,w,w,w,w,w,w,A.n1,w,w,w),new C.efF(d,f),v)},
aR5(d,e){return this.aR6(d,e,null)},
IB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oH(l,s.c,s.d),$async$IB)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aO("=",l.length)+"\n\n"
q=new B.f8(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gah(o.z),n=new B.hK(l,new C.eiy());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7V(l.charCodeAt(0)==0?l:l,r.b),$async$IB)
case 4:l=t.a
w=5
return B.b(B.oG(l.c,l.d),$async$IB)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IB,v)},
GP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oH(q,s.c,s.d),$async$GP)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7V(A.R.am(r.ac(),null),r.b+".json"),$async$GP)
case 4:q=t.a
w=5
return B.b(B.oG(q.c,q.d),$async$GP)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GP,v)},
b1x(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nD()
u.rK()
w=u.c
w.toString
v=B.eE(new C.ej6(u,t),!1,null,x.z)
B.a8(w,!1).cp(v)},
G2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$G2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$G2)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fpy(),$async$G2)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hOM(s.a)
q=t.c
q.toString
w=5
return B.b(B.c1(A.az,null,new C.edq(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$G2)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.edr(t,s))
w=1
break}if(p==="split")t.cZ(new C.eds(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$G2,v)},
LP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}w=3
return B.b(t.nw(),$async$LP)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aNc(s,null,null),$async$LP)
case 4:r=e
if(r==null||t.gdj()==null){w=1
break}t.cZ(new C.edw(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LP,v)},
aZf(d){var w=this.e
if(w==null||!C.kj(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKO(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aNc(s,t==null?null:B.aZ(t),u)},
a5S(d){return this.bu_(d)},
bu_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5S=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eBf)
w=1
break}w=3
return B.b(t.aKO(),$async$a5S)
case 3:r=f
if(r==null||t.gdj()==null){w=1
break}t.cZ(new C.edn(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5S,v)},
ae7(d){return this.cfh(d)},
cfh(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eAo)
w=1
break}w=3
return B.b(t.aKO(),$async$ae7)
case 3:r=f
if(r==null||t.gdj()==null){w=1
break}t.cZ(new C.ehn(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
c2m(){var w,v,u=this
if(u.jK())return
w=new B.P(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.crF()}},
crF(){var w,v,u,t,s,r=this.gdj()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.eje(this,r,(A.o.az(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bRQ(){var w,v,u,t,s,r=this.gdj()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.efJ(this,r,u.d))},
bWh(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.kj(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fm8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bWi(d){var w
if(this.jK())return!1
w=this.e
if((w==null?null:C.kj(w.w))!==!0)return!0
if(!this.yW())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fm8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LY(d){return this.bwf(d)},
bwf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.px()){w=1
break}if(!t.yW()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eze)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ant(p),$async$LY)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.P(D.ezT)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a5n(r)
w=1
break}t.m(new C.ee8(t,d,o))
t.nD()
$.aT.x1$.push(new C.ee9(t))
case 1:return B.h(u,v)}})
return B.i($async$LY,v)},
TS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$TS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bzj(),$async$TS)
case 4:s=e
if(s==null||t.gdj()==null){w=1
break}t.cZ(new C.edk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TS,v)},
MH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nw(),$async$MH)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jo()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fpp(r),$async$MH)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.efa(s,q))
case 1:return B.h(u,v)}})
return B.i($async$MH,v)},
iC(d){this.cZ(new C.edt(this,d))},
pm(d){return this.bvr(d)},
bvr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.px()){w=1
break}m=!D.aId.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nw(),$async$pm)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.G2()
w=1
break A
case"sign_paper":t.LP()
w=1
break A
case"hd_photo":t.TS()
w=1
break A
case"sharpen":t.MH()
w=1
break A
case"print":t.Cr()
w=1
break A
case"rotate":s=t.jo()
if(s!=null)t.cZ(new C.edC(s))
w=1
break A
case"text_box":t.aIP()
w=1
break A
case"picture":t.TU()
w=1
break A
case"present":t.b1x()
w=1
break A
case"new_slide":t.a5U()
w=1
break A
case"export_json":t.GP()
w=1
break A
case"outline_share":t.IB()
w=1
break A
case"flashcard_tool":t.uo(D.Gt)
w=1
break A
case"quiz_tool":t.uo(D.Gu)
w=1
break A
case"worksheet_tool":t.uo(D.Gv)
w=1
break A
case"duplicate_el":s=t.jo()
if(s==null){w=1
break A}t.cZ(new C.edD(t,s))
w=1
break A
case"delete_el":t.apv()
w=1
break A
case"bring_fwd":s=t.jo()
if(s==null||t.gdj()==null){w=1
break A}t.cZ(new C.edE(t,s))
w=1
break A
case"send_back":s=t.jo()
if(s==null||t.gdj()==null){w=1
break A}t.cZ(new C.edP(t,s))
w=1
break A
case"align_left":s=t.jo()
if(s!=null)t.cZ(new C.edS(s))
w=1
break A
case"align_center":s=t.jo()
if(s!=null)t.cZ(new C.edT(s))
w=1
break A
case"align_right":s=t.jo()
if(s!=null)t.cZ(new C.edU(s))
w=1
break A
case"grayscale":case"brighten":t.MH()
w=1
break A
case"flip_h":s=t.jo()
if(s!=null)t.cZ(new C.edV(s))
w=1
break A
case"flip_v":s=t.jo()
if(s!=null)t.cZ(new C.edW(s))
w=1
break A
case"rectangle":t.on(D.bc)
w=1
break A
case"circle":t.on(D.eG)
w=1
break A
case"triangle":t.on(D.jt)
w=1
break A
case"arrow":t.on(D.Bu)
w=1
break A
case"line":case"divider":t.on(D.fm)
w=1
break A
case"word_count":r=t.gdj()
if(r==null){w=1
break A}for(q=A.d.gah(r.z),p=new B.hK(q,new C.edX()),o=0;p.C();){n=A.a.fo(A.a.i(q.gT(0).r),B.ae("\\s+",!0,!1,!1,!1))
o+=new B.a5(n,new C.edY(),B.U(n).k("a5<1>")).gJ(0)}t.c.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cA()
t.iC(C.iN(A.L,!1,t.gpB().d.l(),A.aB,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.mi,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cA()
t.iC(C.iN(A.L,!1,t.gpB().e.l(),A.aB,22,A.bi,A.a4,0.12,q,"Subtitle goes here",0,D.dc,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iC(C.iN(A.bf,!0,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cA(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tw,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iC(C.iN(A.bf,!1,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cA(),"1. First item\n2. Second item\n3. Third item",0,D.tv,0.8,0.1,0.22))
w=1
break A
case"quote":t.iC(C.iN(A.L,!1,4279310375,A.aB,24,A.cA,A.a4,0.25,C.cA(),'"Insert meaningful quote here."',0,D.dc,0.8,0.1,0.3))
w=1
break A
case"citation":t.iC(C.iN(A.bf,!1,4284773515,A.aB,14,A.bi,A.a4,0.1,C.cA(),"Author, Title (Year). Publisher.",0,D.tw,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iC(C.iN(A.dJ,!1,4279310375,A.aB,14,A.bi,A.a4,0.08,C.cA(),C.bzl(),0,D.dc,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iC(C.iN(A.dJ,!1,4279310375,A.aB,13,A.bi,A.a4,0.06,C.cA(),"Page "+(t.f+1),0,D.dc,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.edF(t))
w=1
break A
case"footer_bar":t.cZ(new C.edG(t))
w=1
break A
case"highlight":t.cZ(new C.edH(t))
w=1
break A
case"redact":t.cZ(new C.edI(t))
w=1
break A
case"callout":t.cZ(new C.edJ(t))
w=1
break A
case"checkboxes":t.iC(C.iN(A.bf,!1,4279310375,A.aB,20,A.bi,A.a4,0.45,C.cA(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dc,0.8,0.1,0.2))
w=1
break A
case"table":t.iC(C.iN(A.bf,!1,4279310375,A.aB,16,A.bi,A.a4,0.55,C.cA(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dc,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.edK(t))
w=1
break A
case"letter":t.iC(C.iN(A.bf,!1,4279179050,A.aB,17,A.bi,A.a4,0.82,C.cA(),C.bzl()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iC(C.iN(A.bf,!1,4279310375,A.aB,22,A.bi,A.O,0.76,C.cA(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tw,0.8,0.1,0.12))
w=1
break A
case"toc":t.iC(C.iN(A.bf,!1,4279310375,A.aB,18,A.bi,A.a4,0.76,C.cA(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dc,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iC(C.iN(A.bf,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cA(),"Signature: _________________________",0,D.dc,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iC(C.iN(A.bf,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cA(),"Initials: ______",0,D.dc,0.3,0.65,0.78))
w=1
break A
case"approved":t.iC(C.iN(A.L,!1,4278556265,A.aB,28,A.bi,A.u,0.12,C.cA(),"APPROVED",0,D.mi,0.32,0.62,0.08))
w=1
break A
case"draft":t.iC(C.iN(A.L,!1,4292617766,A.aB,28,A.bi,A.u,0.12,C.cA(),"DRAFT",0,D.dc,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iC(C.iN(A.L,!1,871318596,A.aB,36,A.bi,A.u,0.12,C.cA(),"CONFIDENTIAL",0,D.dc,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.edL(t))
w=1
break A
case"progress":t.cZ(new C.edM(t))
w=1
break A
case"stars":t.iC(C.iN(A.L,!1,4279310375,A.aB,36,A.bi,A.a4,0.12,C.cA(),"\u2605\u2605\u2605\u2605\u2606",0,D.pC,0.8,0.1,0.4))
w=1
break A
case"equation":t.iC(C.iN(A.L,!1,4279310375,A.aB,32,A.bi,A.O,0.14,C.cA(),"y = mx + b",0,D.dc,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iC(C.iN(A.L,!1,4279310375,A.aB,18,A.bi,A.a4,0.2,C.cA(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tv,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.edN(t))
w=1
break A
case"compare":t.cZ(new C.edO(t))
w=1
break A
case"link_text":t.iC(C.iN(A.bf,!1,4280640491,A.mm,16,A.bi,A.a4,0.1,C.cA(),"https://example.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"phone":t.iC(C.iN(A.bf,!1,4279310375,A.aB,18,A.bi,A.a4,0.1,C.cA(),"(555) 123-4567",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"email":t.iC(C.iN(A.bf,!1,4280640491,A.aB,18,A.bi,A.a4,0.1,C.cA(),"name@email.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.edQ(t))
w=1
break A
case"cover_page":r=t.gdj()
if(r==null){w=1
break A}t.cZ(new C.edR(t,r))
w=1
break A
case"invoice":t.iC(C.iN(A.bf,!1,4279179050,A.aB,16,A.bi,A.a4,0.84,C.cA(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"resume":t.iC(C.iN(A.bf,!1,4279179050,A.aB,17,A.bi,A.a4,0.84,C.cA(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iC(C.iN(A.bf,!1,4279310375,A.aB,16,A.bi,A.a4,0.88,C.cA(),"MEETING MINUTES\nDate: "+C.bzl()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iC(C.iN(A.bf,!1,4279310375,A.aB,17,A.bi,A.a4,0.88,C.cA(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iC(C.iN(A.bf,!1,4279310375,A.aB,15,A.bi,A.a4,0.8,C.cA(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dc,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pm,v)},
clC(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.es8.t(0,this.z)},
clB(d){if(this.jo()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b33(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ce,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bH
u=B.H(u,A.r,o&&e?2:1)
t=C.hOB(d)
s=o?12:18
r=o?A.I:A.cL
if(o)if(e)q=f
else q=g?A.ag:A.aj
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.N(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.M_,A.f,p,p,D.CJ,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hn,B.aG(p,new B.am(A.X,p,A.a9,A.f,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ad),p)},
bHh(d){var w,v=null,u=this.jo()
if(u==null)return A.bF
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.aj,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.br],x.p)
A.d.v(w,new B.J(D.Or,new C.ef9(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
uo(d){return this.bu7(d)},
bu7(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aI8.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nw(),$async$uo)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.edu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uo,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eqV
w=h.e
if(w==null)return h.bxR()
v=h.gdj()
v.toString
u=h.c
u.toString
t=B.M(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aH(u,A.bR,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eA,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b29
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQy()}else j=!1
if(j)k.push(new C.a5S(h.a.c,!1,h.e.gb5f(),h.gc2j(),g))
else if(s&&h.e!=null&&!h.jK()&&C.cah(h.e.w)){j=h.a
k.push(new C.a5S(j.c,j.d,g,h.gc3s(),g))}if(s)k.push(h.bHd(w,t,r))
if(s&&h.jK()){w=t?A.fy:A.k5
j=B.m(14)
i=B.H(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bzy,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fy,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zS,A.j3,g,g,g))}w=!n
if(w&&!h.jK())k.push(h.bXd(t,r))
if(w&&h.jK())k.push(h.csC(t))
if(r&&h.jo()!=null&&w&&!h.jK())k.push(h.bX9(t))
j=B.a([],l)
if(q&&w)j.push(new B.a3(132,g,h.b13(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a3(g,72,h.b13(t,!1),g))
i.push(B.D(new B.bH(A.b1,g,g,h.bz6(v,t,!s||p),g),1))
if(h.clC(r)&&u&&s&&!h.jK())i.push(h.c27(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jK()&&h.clB(!1))j.push(new B.a3(240,g,h.bJL(t),g))
k.push(B.D(B.B(j,A.ah,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a3(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bXa(t))
return B.ca(g,m,B.bp(!1,new B.am(A.X,g,A.a9,A.q,w,g),!0,!1,A.ai,!0,!0),g,!1,!1,g,!1)},
bxR(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.M(p).ax.a===A.H
p=w?A.bW:A.bN
v=r.a.e
u=r.c1n(A.bk,A.pi,new C.eec(r),r.gc5B(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aIy(A.bk,A.hD,"Blank Presentation",new C.eed(r)),1),A.aw,B.D(r.aIy(A.aX,A.xh,"Class Template",new C.eee(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.ml,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.aj,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.aa],t)
t=r.d
if(t.length===0)u.push(r.buU(w))
else{t=new B.hS(t,B.U(t).k("hS<1>"))
A.d.v(u,t.gdL(t).dm(0,new C.eef(r,w),x.l))}return B.ca(q,p,B.bp(!1,B.cL(u,q,new B.N(18,12,18,v),q,q,A.ak,!1),!0,!1,A.ai,!0,!0),q,!1,!1,q,q)},
bFB(){this.m(new C.eeQ(this))
var w=this.c
w.toString
if(B.aH(w,A.bR,x.w).w.a.a<900){w=$.aT.ag$.d.c
if(w!=null)w.jf()}},
acO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jo()==null){w=1
break}s=t.c
s.toString
s=B.M(s)
r=t.c
r.toString
w=3
return B.b(B.c1(A.K,null,new C.eh0(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acO,v)},
zR(d,e){return this.clY(d,e)},
clY(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hN(D.U3,!0,"Dismiss",j,new C.eiz(),new C.eiA(d,e),A.im,!0,x.N),$async$zR)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.agb()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQy()){r.agb()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aNd(d),$async$zR)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aMD(j,q,d.b),$async$zR)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a6(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.E4(d,!1),$async$zR)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hN(D.U3,!0,"Dismiss",j,new C.eiB(),new C.eiC(d),A.a1,!0,x.y),$async$zR)
case 20:if(g===!0)r.Mt(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adS("Rename presentation",d.b),$async$zR)
case 24:l=g
if(l!=null)r.cgv(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.n(0,"id",C.cA())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eiD(r,k))
r.oC()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zR,v)},
aXf(d,e){var w=null
return B.bI(!1,D.f7b,w,w,!0,w,w,e,w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.at,w,A.lu,w,w,w,w,w,A.kb,w,w))},
buU(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.edz(this,d),null)},
bDJ(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.eeE(),x.dv).bX(0,new C.eeF()),v=B.A(w,w.$ti.k("G.E"))
return new B.C(G.acQ,this.aJ6(v,e,new C.eeG(),f),null)},
aJ6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ek)
t=e.j(g?0.14:0.1)
s=new B.aY(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ag:A.bv,n,n,n,10),A.tN],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cz(A.aZ,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.c3(r,r,r,r),new B.bw(s,s,s,s),n,n,A.n),n,n,n,n,A.nv,n,n,n))
A.d.v(l,u)}return B.f_(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eb)},
buS(d,e,f){return this.aJ6(d,e,null,f)},
bDL(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cY_
else if(v==="hati_kuhoweya")w=D.cLd
else{if(v==="hati_kiapo_uongozi")v=D.cyZ
else v=C.kj(v)?D.cFy:A.O3
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.eeJ(this,f,d,e,w),null)},
bXa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jo()
if(i==null||i.b!==D.cP)return A.bF
w=k.UK(i)
v=k.aqv(i)
u=A.w.j(0.55)
t=x.p
s=B.bp(!1,new B.C(A.zV,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bI(!1,D.f39,j,j,!0,j,j,new C.eg9(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ai,!0,!0)
r=d?A.az:A.c
q=B.m(18)
p=B.H(A.bk.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.ho,B.bV(new B.C(A.eM,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bk,j,j,j,j,2,D.bFp,A.z,!0,j,!0,j,!0,v,A.af,j,j,j,j,j,A.vq,j,j,j,j,j,j,!1,"\u2022",j,new C.ega(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yu,A.am,j,A.R9,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bb),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.H(d?A.aJ:A.aK,A.r,1)
n=B.D(B.ch(B.B(B.a([k.t7(G.L2,j,new C.egb(k,i),d),k.t7(G.Xf,j,new C.egc(k,i),d),k.t7(I.agT,j,new C.egd(k,i),d),k.t7(I.XY,j,new C.ege(k,i),d),k.t7(k.buQ(i.as),j,new C.egf(k,i),d),k.t7(D.ai_,j,new C.egg(k,i),d),k.t7(D.ahZ,j,new C.egh(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aZ),1)
m=A.k.N(i.w)
return B.bX(0,B.aD(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bgV,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.aj,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.kD,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ac),0,0,0)},
bX9(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jo()
if(m==null)return A.bF
w=m.b
v=w===D.cP
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aO],t)
s=B.H(d?A.aJ:A.aK,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_J(A.j5,"Edit",new C.efV(o,m),d,!0))
if(w===D.lb)p.push(o.b_J(A.EX,"Shape & ring",new C.efW(o),d,!0))
p.push(o.t7(A.AG,"Format",new C.efX(o),d))
if(v)A.d.v(p,B.a([o.t7(G.L2,n,new C.efY(o,m),d),o.t7(D.ai_,n,new C.efZ(o,m),d),o.t7(D.ahZ,n,new C.eg_(o,m),d)],q))
p.push(A.b6)
p.push(o.cjS(A.e8,n,o.gaN4(),d,!0))
p.push(o.t7(A.hr,"Done",new C.eg0(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a4(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.DX,A.kD,n,n,n)},
buQ(d){switch(d.a){case 2:return D.XV
case 1:case 5:return D.XX
default:return D.XW}},
bY_(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dJ
default:return A.bf}},
awA(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aE
else if(h)w=A.c
else{v=g?A.ag:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Fi:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ek,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qo,B.aD(!1,A.a1,!0,n,B.aJ(!1,v,!1,B.es(new B.C(new B.N(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ac),n)},
t7(d,e,f,g){return this.awA(d,e,f,g,!1,!1)},
b_J(d,e,f,g,h){return this.awA(d,e,f,g,h,!1)},
cjS(d,e,f,g,h){return this.awA(d,e,f,g,!1,h)},
bHd(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mv],m)
w=B.H(e?A.aJ:A.oT,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bk.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a0s(A.ex,"Back",p.gbAQ(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.B(B.a([new B.dl(1,A.ch,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.aj,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rJ,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jK()){u=p.a0s(A.uT,"Undo",p.ax.length===0?o:p.gct4(),e)
A.d.v(r,B.a([u,p.a0s(D.bta,"Redo",p.ay.length===0?o:p.gcfd(),e)],q))}r.push(p.a0s(A.wZ,"PDF",new C.ef2(p),e))
r.push(p.a0s(A.hs,"Download as video",new C.ef3(p),e))
if(!p.jK())r.push(B.AV(o,o,B.W(A.ny,e?A.ag:A.bv,o,o,o,o),new C.ef4(p),A.J,new C.ef5(p),A.ai,"More",x.N))
r.push(A.d8)
r.push(B.aD(!1,A.a1,!0,o,B.aJ(!1,B.m(14),!0,B.es(D.dRj,o,new B.o(o,o,o,B.m(14),o,K.Fi,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaxp(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a4(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bgQ,D.blZ,o,o,o)},
csC(d){var w=this,v=null,u=B.m(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.H(d?A.cz:A.aK,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.ik(A.td,"Print",new C.ejk(w),d),w.ik(A.wZ,"Download PDF",new C.ejl(w),d),w.ik(A.pp,"Present",w.gaxp(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aZ),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zS,G.aew,v,v,v)},
a0s(d,e,f,g){var w,v=null
if(f==null)w=g?A.ba:A.dl
else w=g?A.ag:A.aJ
return B.aF(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c9)},
bXd(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.H(d?A.cz:A.aK,A.r,1)
t=x.f0
t=B.A(new B.J(p,new C.egk(r,d),t),t.k("ai.E"))
t.push(new B.C(W.aed,new B.fg(new C.egl(r),q),q))
A.d.v(t,w?B.a([new B.C(R.uy,r.aeu(A.l2,"Ending celebration",r.gc5O(),d),q),new B.C(R.uy,r.aeu(A.EX,"Logo ring & frame",r.gc6t(),d),q)],x.p):A.h2)
A.d.v(t,w?B.a([new B.C(R.uy,r.aeu(A.nz,"Look and feel",r.gc6u(),d),q),new B.C(R.uy,r.aeu(A.ol,"Edit this slide's text",r.gc7_(),d),q)],x.p):A.h2)
t.push(new B.C(R.uy,B.hs(B.aG(q,B.p(q,D.eqo,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ab(0,A.G,O.l_.j(0.4),A.J,10)],x.V),D.ajW,A.n),q,34,q,q,A.ir,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.egm(r),q,q,q,q,q,q,!1,A.ad),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bms,q,q,A.aZ)
s=e?8:10
return B.p(q,B.v(B.a([t,B.ch(r.chD(d),A.q,q,A.z,q,new B.N(8,2,8,s),q,q,A.aZ)],x.p),A.ah,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zS,q,q,q,q)},
chD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cSu[v]
u.a=null
s=u.a=t.b
w.push(e.ld(e.cjh(s),t.a,new C.ehJ(u,e),a3,D.aI8.t(0,s)))}w.push(e.ik(A.kG,"Notes Slide",new C.ehK(e),a3))
w.push(e.ld(A.EW,"Quiz",new C.ehL(e),a3,!0))
w.push(e.ld(L.EA,"Worksheet",new C.ehW(e),a3,!0))
w.push(e.ld(P.F_,"Flashcard",new C.ei6(e),a3,!0))
w.push(e.ld(A.LR,"Lab Report",new C.eih(e),a3,!0))
w.push(e.ld(A.x4,"Rubric",new C.eio(e),a3,!0))
w.push(e.ld(A.of,"Minutes",new C.eip(e),a3,!0))
w.push(e.ld(A.pn,"Syllabus",new C.eiq(e),a3,!0))
w.push(e.ld(A.LV,"Timeline",new C.eir(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cTD[v]
w.push(e.ld(r.b,r.c,new C.eis(e,r),a3,!D.aId.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ik(A.xk,a0,e.gaIO(),a3),e.ik(A.ta,"Picture",new C.ehM(e),a3),e.ik(A.xe,"Bio link",new C.ehN(e),a3),e.ik(A.Yt,"Table",new C.ehO(e),a3),e.ik(A.LU,"Sticky",new C.ehP(e),a3),e.ik(A.uJ,"Divider",new C.ehQ(e),a3),e.ik(A.F3,"Header",new C.ehR(e),a3),e.ld(A2.EG,"Rectangle",new C.ehS(e),a3,!0),e.ld(A.t2,"Circle",new C.ehT(e),a3,!0),e.ld(A.XM,"Triangle",new C.ehU(e),a3,!0),e.ld(A.jp,"Arrow",new C.ehV(e),a3,!0),e.ld(D.brE,"Parallelogram",new C.ehX(e),a3,!0),e.ld(D.bu9,"Hexagon",new C.ehY(e),a3,!0),e.ld(A.uJ,"Line",new C.ehZ(e),a3,!0),e.ld(A.wZ,"PDF",new C.ei_(e),a3,!0),e.ld(O.YB,"Signature",new C.ei0(e),a3,!0),e.ik(A1.Aw,"Quote",new C.ei1(e),a3),e.ik(D.Xn,a1,new C.ei2(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bR,x.w).w
u=x.p
t=B.B(B.a([e.aJD("Wide 16:9",D.Bs,a3),e.aJD("Short 9:16",D.nH,a3),new B.C(A.hn,B.mp(D.bwg,d,D.f_J,d,new C.ei3(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bB4("This slide",!e.Q,a3,new C.ei4(e)),A.br,e.aLO("All slides",e.Q,a3,new C.ei5(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bB5()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.A(new B.J(D.a_n,new C.ei7(e),n),n.k("ai.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cUr[v]
j=B.aZ(k)
i=new B.ay(k===4294967295?A.dl:A.ba,1.5,A.r,-1)
l.push(new B.C(A.hn,B.aG(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.c3(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ei8(e,k),d,d,d,d,d,d,!1,A.ad),d))}l=B.ch(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bAB()
g=B.U(h).k("J<1,C>")
h=B.A(new B.J(h,new C.ei9(e,a3),g),g.k("ai.E"))
return new B.a3(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ar,p,A.P,o,A.av,n,A.P,m,A.av,l,A.P,j,A.av,B.ch(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aZ),A.ar,e.bUa(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jo()
w=e.c
w.toString
w=B.aH(w,A.bR,x.w).w
u=new C.ehI(e)
t=new C.eit(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Or,f.dy,new C.eia(e,u,f),A.aX)
A.d.v(p,B.a([o,A.av,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.aj,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdj()
q=q==null?d:q.r
p.push(t.$4(D.Or,q,new C.eib(e,u),A.bk))
return new B.a3(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ik(A.kG,w,new C.eic(e),a3),e.ik(A.td,"Print deck",new C.eid(e),a3),e.ld(D.ag0,"Export JSON",new C.eie(e),a3,!0),e.ik(A.fE,"Duplicate Slide",e.gaNT(),a3),e.ik(A.e8,a2,e.gaN5(),a3),e.cng(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jo()
w=x.p
u=B.a([e.ik(D.Xn,a1,new C.eif(e),a3),e.ik(A.fE,"Duplicate",e.gaNT(),a3),e.ik(A.e8,a2,e.gaN5(),a3),e.ik(A.pp,"Present",e.gaxp(),a3),e.ik(A.AF,a0,e.gaIO(),a3),e.ik(A.AA,"Fit Text",new C.eig(e),a3),e.ik(A.wZ,"Download PDF",new C.eii(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ik(A.kI,"Transfer",new C.eij(e),a3))
if(f!=null){w=B.a([A.ab,e.ik(G.L2,"Bold",new C.eik(e,f),a3),e.ik(G.Xf,"Italic",new C.eil(e,f),a3),e.ik(G.afC,"Underline",new C.eim(e,f),a3),e.ik(Aa.L3,"Bullets",new C.ein(e,f),a3),e.bJu(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bHh(a3))
w.push(e.ik(D.bql,"Delete",e.gaN4(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJD(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nH
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a54,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bvs],v))
return new B.C(A.hn,B.jA(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.ee7(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cng(d){var w,v,u,t,s,r=this,q=null,p=r.gdj()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.ba:A.cl,A.r,1)
u=B.m(8)
t=B.W(A.Ey,d?A.aA:A.aj,q,q,q,14)
s=B.aF(q,q,q,q,D.aiX,q,q,q,new C.eiQ(r,p),q,q,q,q,q,A.c9)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.aiO,q,q,q,new C.eiR(r,p),q,q,q,q,q,A.c9)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Ed,A.m2,q,q,q)},
cjh(d){switch(d.a){case 6:return P.F_
case 7:return A.EW
case 8:return L.EA
case 4:return A.F3
default:return A.kG}},
bJu(d,e){var w=null,v=B.H(e?A.ba:A.cl,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aiX,w,w,w,new C.eff(this,d),w,w,w,w,w,A.c9),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.aiO,w,w,w,new C.efg(this,d),w,w,w,w,w,A.c9)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wJ,A.m2,w,w,w)},
bUa(d){var w=null
return B.AV(B.Ck(B.W(Ad.Xq,d?A.ag:A.bv,w,w,w,16),w,w,D.f4S,w,w,w),w,w,new C.efN(),A.J,this.gbvx(),A.cm,"Slide layout",x.fO)},
ld(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.H(g?A.dw:A.aK,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bk,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.M_,A.f,w,w,D.CJ,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hn,B.aD(!1,A.a1,!0,w,B.aJ(!1,v,!0,B.es(new B.C(A.ho,B.v(B.a([new B.am(A.X,w,A.a9,A.f,q,w),A.d6,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac),w)},
ik(d,e,f,g){return this.ld(d,e,f,g,!1)},
b13(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ak:A.aZ
v=B.hH(t,new C.ej1(u,s,e,d),s.r.length,A.cm,t,w,new C.ej2(e),!1)
s=d?A.az:A.bN
w=B.a([],x.p)
if(e&&!u.jK())w.push(new B.C(A.cm,B.Gq(E.aj9,new C.ej3(u),B.ne(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aIQ,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bz6(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nH?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.N(u,u,u,u),new B.bH(A.b1,v,v,new B.fC(w,B.aG(v,B.ck(new C.eew(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eex(this),v,v,v,v,v,v,!1,A.ad),v),v),v)},
bz8(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kj(a9.w))===!0,b1=b0&&C.fm8(b3),b2=b0&&b3.b===D.kN&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jK())v=!b0||a7.bWi(b3)
else v=!1
if(!a7.jK())u=!b0||a7.bWh(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cf:A.bk
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fK3(b3))o=a8
else if(p&&!a7.jK())o=a7.gc2l()
else o=a7.jK()?a8:new C.eek(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jK
i=w&&C.fK3(b3)&&a7.yW()?new C.eel(a7,b3):a8
h=v&&b3.b===D.cP?new C.eem(a7,b3):a8
g=u?new C.een(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bl
else e=q?A.bT:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bT.j(0.08)
else a0=b3.b===D.kN?A.K:a8
if(b1){a1=a7.jK()?"":"Tap to sign"
a1=B.au(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bT.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.bR,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yW()
a3=b3.b===D.cP
a4=a3?a7.UK(b3):a8
a5=a3?a7.aqv(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bR,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eeo(a7,b3):a8
a3=v&&a3?new C.eep(a7,b3):a8
a6=C.aZ7(q,a4,a1,b3,a5,a2,a3,new C.eeq(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aG(a8,B.p(a8,D.byd,A.f,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eer(a7,b3,b4,b5),a8,a8,new C.ees(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jK()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aG(a8,B.p(a8,D.byS,A.f,a8,a8,new B.o(A.e0,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbRP(),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jK()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aG(a8,B.p(a8,D.bAp,A.f,a8,a8,new B.o(A.bT,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eet(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cP)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bR,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.au(B.aG(a8,B.p(a8,D.fd_,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kC,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eeu(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ad),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aG(j,B.ev(A.A,f,new B.am(A.X,a8,A.a9,A.f,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ad),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLO(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.H(e?A.bk:A.bH,A.r,1)
if(e)t=A.bk
else t=f?A.aA:A.aj
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.M_,A.f,r,r,D.CJ,r,12,r,r,r,r,r,12)],s))
return B.aG(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h0,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ad)},
bB4(d,e,f,g){return this.aLO(d,e,f,g,!1)},
c27(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.av()
v.O$=0}v=d.c
w.n(0,k,new B.ap(new B.ba(v,A.b0,A.aM),$.av()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aO
t=f?A.vQ:l
if(f)s=new B.c3(new B.ay(e?A.bH:A.aK,1,A.r,-1),A.Z,A.Z,A.Z)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.qQ,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ag:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.aXf(e,new C.ego(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b3(4,B.m(10),A.df),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.af,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.egp(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.ah,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.N(12,w,12,v),l,l,l)},
aP8(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jo()
if(a2==null)return A.bF
w=new C.eft(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dO:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.aXf(a3,a0.gbFA())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.f09,B.D(B.l4(a1,a1,a1,u,0.05,new C.efu(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fby,B.D(B.l4(a1,a1,a1,t,0.05,new C.efv(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cP
if(m)o.push(B.B(B.a([D.eVo,B.D(B.l4(a1,a1,a1,96,10,new C.efw(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lb
if(l||n===D.kN||n===D.PI)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.f5w,B.D(B.l4(a1,a1,a1,s,0,new C.efx(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fcK,B.D(B.l4(a1,a1,a1,r,0,new C.efy(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.AV[j]
i.a=null
g=h.a
i.a=g
k.push(B.jA(a1,a1,a1,new B.w(h.b,a1,A.pO,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.efz(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c6(A.bG,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.AQ[j]
f.a=null
g=e.a
f.a=g
h.push(B.jA(a1,a1,a1,new B.w(e.b,a1,A.pO,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.efA(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.c6(A.bG,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.A(new B.J(v,new C.efB(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.c6(A.bG,l,A.bx,6,6),A.aa,B.fVV(new C.efC(w,a2),D.car,B.eP([a2.as],k),!0,a1,k)],p))}if(n===D.eW){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.aj,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.A(new B.J(v,new C.efD(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c6(A.bG,m,A.bx,0,6)],p))}o.push(A.aa)
o.push(B.dn(D.bAb,D.f7m,new C.efE(a0,a5),B.bj(A.bM,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cL(o,a1,a1,q,a1,A.ak,a5)
if(a5)return d
q=a3?A.cz:A.c
p=a4?A.vQ:a1
if(a4)o=new B.c3(new B.ay(a3?A.bH:A.aK,1,A.r,-1),A.Z,A.Z,A.Z)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.qQ,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.DY,a1,a1,a1)},
bJL(d){return this.aP8(d,!1,!1,null)},
c1n(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.efH(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eLM,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.D(B.v(B.a([w,A.bA,A.d6,r.buS(D.cDe,d,B.M(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dQ(B.hs(B.aD(!1,A.a1,!0,q,B.aJ(!1,q,!0,B.es(D.evF,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.ab(0,A.G,A.bT.j(0.4),A.ef,8)],p),D.ak0,A.a6),q,q,q),A.cJ,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.M(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b_f,D.b_C],v):B.a([A.c,A.k5],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ab(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a4(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aIy(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.edg(this,g,d,e,f),null)},
adS(d,e){return this.cdC(d,e)},
cdC(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.av()
q=new B.ap(new B.ba(e,A.b0,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.ehl(d,q),p,null,!0,!0,x.N),$async$adS)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adS,v)},
Oe(d){var w=d.bP()
return""+B.bE(w)+"/"+B.bO(w)+"/"+B.bv(w)}}
C.ad4.prototype={}
C.awl.prototype={
S(){return new C.b9x(null,null)}}
C.b9x.prototype={
gcpk(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bE(u)+"/"+B.bO(u)+"/"+B.bv(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.pa,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bi(u,D.bfi,u,1,u,v)
w.cm(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bos()},
HD(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cp.au(0,new B.hF(w,v,A.cp).au(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.C(D.bkR,B.c4(new B.h5(B.a([u,w],x.dS)),new C.cWc(this),v),v),v,v,v)}}
C.b9L.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aJ,A.r,1),t=x.p
return B.au(new B.C(D.bl7,B.aD(!1,A.a1,!0,w,B.p(w,B.bt(B.m(22),B.v(B.a([new B.C(D.bkj,B.v(B.a([B.p(w,D.byY,A.f,w,w,new B.o(A.aE.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.f9e,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eMU,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bem,B.B(B.a([B.D(B.bI(!1,D.eZw,w,w,!0,w,w,new C.cWy(d),w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mJ,w,A.nL,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bI(!1,D.f3s,w,w,!0,w,w,new C.cWz(d),w,B.fr(w,w,w,w,w,w,w,w,w,w,w,A.aE,w,w,w,w,w,A.mJ,w,A.nL,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.ap),A.f,w,N.T3,new B.o(A.az,w,u,v,D.cDx,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.Ip.prototype={
S(){return new C.b9w()}}
C.b9w.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dz,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dQ(B.d9(B.aG(o,B.wb(B.dg(o,B.B(B.a([r,A.aw,new B.dl(1,A.ch,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.fi:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.Q,0,o,o),o,o,A.b9,new B.o(n,o,u,v,t,o,A.n),A.eK,o,o,o,A.pe,o,o,1/0),A.cp,A.jk,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cW7(p,d),new C.cW8(p),new C.cW9(p),new C.cWa(p),o,o,o,!1,A.ad),k),new B.u(0,(1-k)*16))}}
C.O1.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.a1,!0,t,B.aJ(!1,s,!0,new B.C(A.eM,B.B(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a4(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ey,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.n2,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.et,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ac)}}
C.YI.prototype={
S(){return new C.aBL(D.dc,null,null)}}
C.aBL.prototype={
gWX(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.beT,null,1,null,v)
v.w!==$&&B.bK()
v.w=w
u=w}return u},
b1s(d){if(!this.a.c.ay)return
this.x=d
this.gWX().ig(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.atg(D.eC1)
C.hLx()
v.PD()},
q(){var w=this,v=w.f
if(v!=null)v.aa(0)
w.gWX().q()
v=w.z
if(v!=null)v.aa(0)
C.atg(D.eC2)
C.hLA()
w.bqA()},
cs1(){B.j9()
this.m(new C.ek0())
var w=this.c.I(x.q).f
w.a2v()
if($.bhb)w.P(D.eyU)},
PD(){var w,v=this,u=v.f
if(u!=null)u.aa(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cP(B.dz(0,0,0,0,0,A.o.D(C.fU5(u,w),1,120)),new C.ejR(v))},
crH(){var w,v=this
v.m(new C.ek_(v))
if(v.r)v.PD()
else{w=v.f
if(w!=null)w.aa(0)}},
gaQY(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cm3(){var w=this,v=w.f
if(v!=null)v.aa(0)
w.m(new C.ejS(w))
v=w.z
if(v!=null)v.aa(0)
if(w.a.c.ch&&w.r)w.z=B.cP(A.nt,new C.ejT(w))},
ati(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.aa(0)
if(u.a.c.ch){u.m(new C.ejN(u))
u.PD()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQY()){u.cm3()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ejO(u,A.o.F(w+1,s)))
u.b1s(w)
u.PD()}},
cch(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.aa(0)
v.m(new C.ejP(v))
v.PD()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ejQ(v,w,t))
v.b1s(w)
v.PD()}},
cns(d){var w,v=this,u=v.e
if(u===D.ce){u=v.d
u===$&&B.c()
return new B.mW(d,new B.cx(u,x.ac))}w=v.cnt(u)
u=v.d
u===$&&B.c()
return B.pQ(new B.mW(d,new B.cx(u,x.ac)),w,new C.ejY(),A.b9,A.b9,new C.ejZ(v))},
cnt(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bfe
case 16:return A.kx
case 18:return A.mI
default:return A.pc}},
cnr(d,e,f){var w,v,u,t=null,s=B.cG(A.cp,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cU(s,!1,e,t)
case 2:case 17:w=x.K
return B.jf(e,new B.bd(s,new B.bl(A.tE,A.J,w),w.k("bd<bF.T>")),t,!0)
case 3:w=x.K
return B.jf(e,new B.bd(s,new B.bl(A.PY,A.J,w),w.k("bd<bF.T>")),t,!0)
case 4:case 21:w=x.K
return B.jf(e,new B.bd(s,new B.bl(A.i8,A.J,w),w.k("bd<bF.T>")),t,!0)
case 5:w=x.K
return B.jf(e,new B.bd(s,new B.bl(A.tD,A.J,w),w.k("bd<bF.T>")),t,!0)
case 6:case 16:w=x.b
return B.ic(A.A,new B.cU(s,!1,e,t),t,new B.bd(s,new B.bl(0.82,1,w),w.k("bd<bF.T>")))
case 7:w=x.b
return B.ic(A.A,new B.cU(s,!1,e,t),t,new B.bd(s,new B.bl(1.18,1,w),w.k("bd<bF.T>")))
case 8:return B.c4(s,new C.ejU(s),e)
case 9:return B.c4(s,new C.ejV(s),e)
case 10:return B.c4(s,new C.ejW(s),e)
case 11:return B.c4(s,new C.ejX(s),e)
case 12:w=x.b
return new B.cU(s,!1,B.ic(A.A,e,t,new B.bd(s,new B.bl(1.03,1,w),w.k("bd<bF.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jB(B.jf(e,new B.bd(s,new B.bl(A.tE,A.J,v),v.k("bd<bF.T>")),t,!0),A.q,new C.bo6(w,t))
case 15:w=x.K
return B.jf(e,new B.bd(s,new B.bl(A.PY,A.J,w),w.k("bd<bF.T>")),t,!0)
case 19:w=B.di()
w.mf((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.ji(v,u,v,1)
return B.fn(A.A,B.d9(e,s.gp(0)),t,w,!0)
case 20:return B.ev(A.A,(1-s.gp(0))*0.2,new B.cU(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jB(new C.am_(B.c4(n.gWX(),new C.ek1(n,v,w),m),m),A.q,m)}else{t=B.r2(new C.Ho(w,!0,!1,m))
l=B.aZ(w.e)
u=n.cns(B.ee(B.jB(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fU5(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oI,m,m,m),A.br,D.bBd],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aU,m,m,l,m,m,A.n),m,m,m,m,A.fM,m,m,m)
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
l.push(B.bX(0,new C.LY(new C.Dr(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nH?0.5625:1.7777777777777777
l.push(B.au(new B.fC(r,B.jB(B.tU(A.ai,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bhb){r=B.Gq(A.kK,new C.ek2(d),B.ne(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.bp(!0,B.B(B.a([r,A.ab,B.Gq(B.W(n.r?Ag.xc:A.iM,m,m,m,m,m),n.gcrG(),B.ne(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ai,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.bp(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hg,m,m,m),A.f,m,m,new B.o(A.aU,m,m,r,m,m,A.n),m,m,m,m,A.fM,m,m,m),!0,!1,A.ai,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.bp(!0,B.aG(A.c5,B.p(A.kV,$.bhb?A.bF:s,A.f,m,m,m,m,64,m,m,D.bg0,m,m,150),A.z,!1,m,n.gcs0(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ad),!0,!1,A.ai,!0,!0),m,m,m,0,0,m))
return B.ca(m,A.w,B.aG(m,new B.am(A.X,m,A.b_,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ek3(n,d),m,m,m,!1,A.ad),m,!1,!1,m,m)}}
C.Iw.prototype={
B(d){var w=null
return B.p(w,B.bp(!0,new B.C(E.ae0,this.c,w),!0,!1,A.ai,!0,!1),A.f,w,w,D.aTv,w,w,w,w,w,w,w,w)}}
C.bo6.prototype={
iJ(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jl(d){return d.b!==this.b}}
C.bem.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aQo
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aD:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.au(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.v_,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b9,new B.o(s.f,r,u,w,r,r,A.n),A.hT,r,64,r,r,r,r,64)
return B.aG(r,new B.a3(78,r,B.v(B.a([w,A.ar,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ad)}}
C.bel.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d4U.h(0,p)
if(o==null)o=D.cTJ
p=p==="none"
w=p?q:new B.a4(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.H(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aia:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ej,q,q,52)
return B.aG(q,new B.a3(66,q,B.v(B.a([w,A.ar,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ad)}}
C.aHp.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.aJr.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btO.prototype={}
C.aJs.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aZa.prototype={}
C.Ug.prototype={
S(){return new C.aBJ()},
bbH(d){return this.e.$1(d)}}
C.aBJ.prototype={
gb_P(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga88(){var w,v
if(this.d==="all")return B.bk(this.a.d,!0,x.I)
w=this.gb_P()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaKt(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_P()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb12(){return A.d.cG(this.ga88(),0,new C.ejx())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Pe()},
Pe(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZM(s.c,s.f),$async$Pe)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ejt(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Pe,v)},
HF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga88()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fpl(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oH(o,q.c,q.f),$async$HF)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eE(new C.ejw(t,p),!1,null,x.H)
w=4
return B.b(B.a8(o,!1).cp(q),$async$HF)
case 4:q=t.a
w=5
return B.b(B.oG(q.c,q.f),$async$HF)
case 5:w=6
return B.b(t.Pe(),$async$HF)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HF,v)},
PB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.ho(o,D.dHU,!0,"NgmySlidesTransferScan",x.N),$async$PB)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eju(t))
w=4
return B.b(C.afa(s),$async$PB)
case 4:r=e
t.m(new C.ejv(t))
o=J.a7(r)
if(o.gai(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.P(D.exN)
w=1
break}w=5
return B.b(t.a.bbH(r),$async$PB)
case 5:q=t.c
if(q==null){w=1
break}B.a8(q,!1).M(null)
q=t.c.I(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.P(B.b1(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PB,v)},
HE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga88()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oH(s,r.c,r.f),$async$HE)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fpA(null,A.d.gL(n),s,t.a.f)}else q=C.fpA(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.ae("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Fe(q,"ngmy_slides_"+p,!1),$async$HE)
case 4:o=e
s=t.a
w=5
return B.b(B.oG(s.c,s.f),$async$HE)
case 5:w=6
return B.b(t.Pe(),$async$HE)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(B.b1(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$HE,v)},
a0D(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ejy(t))
w=3
return B.b(C.bz3(),$async$a0D)
case 3:s=e
t.m(new C.ejz(t))
if(s==null||J.cj(s)){w=1
break}w=4
return B.b(t.a.bbH(s),$async$a0D)
case 4:r=t.c
if(r==null){w=1
break}B.a8(r,!1).M(null)
r=t.c.I(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.P(B.b1(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0D,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.da:A.bN,k=o.ga88().length!==0,j=B.an(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.W(A.cu,m?A.ag:A.aj,n,n,n,n),n,n,n,new C.ejC(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yr],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ab(0,A.G,A.bk.j(0.35),A.eP,24)],x.V)
u=B.an(n,B.W(A.pi,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bBJ,A.f,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ey,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.boH],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hs(B.aG(A.c5,D.evH,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc7b(),n,n,n,n,n,n,!1,A.ad),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.X,n,A.a9,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.Z5,A.n),n,n,n,n,E.W2,n,n,1/0),A.dY,o.auk(m,"What to transfer"),A.aa,B.B(B.a([B.D(o.aT9(A.pp,m,new C.ejD(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aT9(D.brx,m,new C.ejE(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.auk(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.m(16)
s=B.H(m?A.bH:A.aK,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c4,n,n,n))}else A.d.v(v,new B.J(u,new C.ejF(o,m),B.U(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.ml)
w.push(o.auk(m,"Transfer options"))
w.push(A.aa)
w.push(B.B(B.a([B.D(o.anh(A.aY,k,!0,A.j8,m,o.r,o.gc1r(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aIz(A.jC,!0,A.iN,m,o.gciS(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.D(o.btp(A.aS,k,A.hs,m,o.r,o.gc1o(),"Download .json","Backup file"),1),A.aw,B.D(o.aIz(A.aW,!0,Ar.xm,m,o.gcuk(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bk.j(0.28),A.r,1)
s=B.W(A.l4,A.bk.j(0.9),n,n,n,18)
r=o.gaKt()
q=o.gb12()
p=o.gb12()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.B(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ag:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bz,n,n,n)],h))}j=B.a([j,B.bp(!0,B.v(B.a([new B.C(Ac.KG,i,n),B.D(B.cL(w,n,D.bjs,n,n,A.ak,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ai,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Tm,A.f,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.ca(n,l,new B.am(A.X,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
ad0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ad0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hRK(s,t.d,t.e),$async$ad0)
case 2:return B.h(null,v)}})
return B.i($async$ad0,v)},
auk(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.aj,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aT9(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.az:A.c
if(g)w=A.bk
else w=e?A.bH:A.aK
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bk.j(0.2),A.cv,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.a1,!0,s,B.aJ(!1,r,!0,B.es(new B.C(A.bz,B.v(B.a([t,A.S,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ac)},
bDK(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.az:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bH:A.aK
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bBU,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a4(A.a3,A.a7,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.es:A.t2
if(p)r=A.bk
else r=e?A.ba:A.dl
return new B.C(A.cN,B.aD(!1,A.a1,!0,q,B.aJ(!1,o,!0,B.p(q,B.B(B.a([v,A.be,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bz,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ejs(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ac),q)},
anh(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bH:A.aK
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qq,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.aiI,A.f,s,s,D.aTh,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d9(B.aD(!1,A.a1,!0,s,B.aJ(!1,p,!0,B.es(new B.C(E.VI,B.v(B.a([new B.am(A.X,s,A.a9,A.f,u,s),A.aa,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.aj,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ac),r)},
aIz(d,e,f,g,h,i,j){return this.anh(d,e,!1,f,g,!1,h,i,j)},
btp(d,e,f,g,h,i,j,k){return this.anh(d,e,!1,f,g,h,i,j,k)}}
C.Uh.prototype={
S(){return new C.bha()}}
C.bha.prototype={
Z(){this.a0()
this.abS()},
abS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fpA(null,A.d.gL(m),k,r.a.f):C.fpA(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kj(A.d.gL(n).w))C.fpl(A.d.gL(r.a.d),D.cRU)
n=r.a
m=n.c
n=C.hOR(n.d)
w=7
return B.b(C.fpz(p,C.hOW(r.a.d),n,m,q),$async$abS)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ejG(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ejH(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abS,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.M(d).ax.a===A.H,h=i?A.da:A.bN,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.ejI())
v=B.aF(j,j,j,j,B.W(A.ex,i?A.ag:A.aj,j,j,j,18),j,j,j,new C.ejJ(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yr],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dR,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.Z5,A.n),j,j,j,j,E.W2,j,j,1/0)
q=B.m(24)
s=B.H(A.aY.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a4m,A.L,j,j))
else if(k.d==null)r.push(D.dQV)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ab(0,A.G,A.aD.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eZZ,A.ar,B.aG(j,B.p(j,B.B(B.a([D.bDo,A.aw,B.d(m,j,j,j,j,j,j,D.eNg,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bHh,A.n),j,j,j,j,A_.adN,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ejK(k,d),j,j,j,j,j,j,!1,A.ad),A.P,D.f30,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bH,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pn(j,j,!1,l,j,!0,!0,j,!1,D.bbc),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hu,A.L,j,j))
return B.ca(j,h,B.bp(!0,B.v(B.a([new B.C(Ac.KG,v,j),B.D(B.ch(B.v(B.a([t,A.aN,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bJ8,A.n),j,j,j,j,A.rX,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.ae5,j,j,A.ak),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ai,!0,!0),j,!1,!1,j,j)}}
C.aBG.prototype={
S(){return new C.aBH(new B.ap(A.as,$.av()),B.ka(!0,null,!0,!0,null,null,!1))}}
C.aBH.prototype={
Z(){var w=this
w.a0()
w.e.aK(0,new C.eda(w))
$.aT.x1$.push(new C.edb(w))},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.q()
this.a2()},
aVr(){var w,v=this.c
v.toString
w=C.xS(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a8(v,!1).M(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eA,x.w).w,i=B.m(28),h=B.H(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bk.j(0.28),A.tC,36),D.a7J],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bz0,A.f,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.aa,D.eXk,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aTH,k,k,k,k,A.wI,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aY(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bG(1,A.bp,B.dg(A.A,new B.w(p,k,D.eHa,k,k,k,k,k,k,k,k,k),k,k,A.b9,new B.o(s,k,new B.c3(m,m,m,m),new B.bw(o,o,o,o),n,k,A.n),A.hT,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Hm)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bX(0,B.d9(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bG7,A.z,!0,k,!0,k,!1,v,A.af,k,k,B.a([new B.tL(B.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Aq(5,k),new C.brk()],x.aS),k,k,A.aK3,k,5,k,1,k,k,!1,"\u2022",k,new C.ed6(l),k,new C.ed7(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lH,k,k,k,k),0),0,0,0)],a1)
d=C.xS(w.a.a.toUpperCase())==null?k:l.gc1s()
return B.au(new B.C(new B.N(24,24,24,24+j.f.d),B.aD(!1,A.a1,!0,k,new B.d1(A9.II,B.p(k,B.bt(e,B.v(B.a([a0,new B.C(D.bjX,B.v(B.a([new B.am(A.X,k,A.a9,A.q,g,k),A.S,D.eVN,A.bu,new B.a3(1/0,50,B.bL(D.fa4,d,B.bj(A.bk,A.bj,A.aj,k,A.c,k,k,k,new B.b6(B.m(16),A.Z),k,k,k)),k),A.ar,B.bI(!1,A.n4,k,k,!0,k,k,new C.ed8(a2),k,B.fr(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.ap),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.brk.prototype={
nX(d,e){var w=e.a.toUpperCase()
return e.cAg(B.h3(A.bt,w.length),w)}}
C.aoQ.prototype={
S(){return new C.aBK(B.yo(A.K1,A.nb,A.tk))}}
C.aBK.prototype={
q(){this.d.q()
this.a2()},
aVq(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iH(w,d)},
a82(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a82=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fxZ(s),$async$a82)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aVq("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a82,v)},
c1q(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hOU(w[u])
if(t!=null){this.aVq(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uX,s,s,s,t.gbHM(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.ey(B.a([r,B.aF(s,s,s,s,B.W(q?A.t8:Ah.LA,s,s,s,s,s),s,s,s,new C.ejM(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fbg,s,s,s,1,s,!0)
r=B.yn(t.d,A.bQ,t.gc1p())
w=B.m(28)
w=B.au(B.p(s,s,A.f,s,s,new B.o(s,s,B.H(A.bk,A.r,3),w,B.a([new B.ab(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.ca(p,A.w,new B.am(A.X,s,A.b_,A.q,B.a([r,w,B.an(32,B.p(s,D.f_Y,A.f,s,s,new B.o(v,s,B.H(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j4,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.brw.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aJ,A.r,1)
return B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bxd,A.f,w,w,D.aTr,w,56,w,w,w,w,w,56),A.aN,D.faX,A.ar,new B.k4(this.c,new C.eUw(),w,w,x.cI),A.aN,new B.k4(this.d,new C.eUx(),w,w,x.cl),A.aa,D.faU],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,A9.II,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,K.W9,D.bkA,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac)}}
C.a5S.prototype={
S(){return new C.bgU(A.bw)},
gd6(){return this.c}}
C.bgU.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.Y3()
w.d=B.dD(A.h9,new C.e3I(w))},
q(){var w=this.d
if(w!=null)w.aa(0)
this.a2()},
Y3(){return this.cfk()},
cfk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Y3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e3G(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.P(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cai(p.c),$async$Y3)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.e3H(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Y3,v)},
bJC(d){var w,v,u=d.a,t=A.o.al(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.al(u,6e7)%60
v=A.o.al(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.al(w,6e7)<30&&A.o.al(w,36e8)<999?A.aE:A.bT
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.W(A.Ey,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bJC(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bgK,A.j3,r,r,1/0)}}
C.a6J.prototype={
mH(){var w,v,u,t=this
t.wl()
w=t.cx
v=t.c
w.bl6(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pt(B.E(["/S",D.dUx,"/URI",new B.r_(B.UP(w.as),A.tF,!0)],x.N,u),u))}}
C.a6K.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_P.prototype={
bsw(d,e,f,g,h,i,j,k,l,m){var w=B.eP([D.dSQ],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcDq(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jD(w,new C.ccu(),B.a2(w).k("jD<cm.E,I>")).fv(0,new C.ccv())},
azy(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h1(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.rW(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j3(d.a,d.b))
s.n(0,"/Border",B.rW(D.bL6))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fS(t.gcDq()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pt(w,x.Y))}}
C.ccw.prototype={}
C.a12.prototype={}
C.ag_.prototype={}
C.aOo.prototype={
fO(d){var w,v,u,t,s,r,q=this,p=null
q.kO(d)
q.Kv(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bb4(w)
u=x.N
t=x.Y
s=new C.ccw(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bsw(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pt(B.E(["/Type",D.dUv],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6J(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.aue.prototype={}
C.aPS.prototype={
fO(d){var w,v,u,t,s=this
s.kO(d)
w=s.b
if(w!=null){v=B.di()
u=s.a
v.dZ(u.a,u.b,0,1)
u=d.b
u.hR()
t=s.a
t.toString
u.JF(t)
u.QO(0)
u.of(0,v)
w.fO(d)
u.mK(0)}}}
var z=a.updateTypes(["aw<~>()","~(lr)","S(hU)","~()","S(eB)","S(nY)","S(lr)","~(hU)","S(eB,eB)","Iw(Y)","S(no)","S(kY)","aw<S>()","I(I,hU)","a1<n,@>(hU)","ak<yH>()","n(no)","S(a68)","n(lr)","n(vl)","S(DA)","I(hU,hU)","n(eB)","r(eB)","cH(eB)","r(hp)","~(hp)","eB(ua,Q,Q,Q,Q,I{fx:n,key:n,rotation:Q})","eB(n,Q,I)","I(nY,nY)","S(yH)","S(n,ak<yH>)","a1<n,@>(nY)","no()","WP(Y)","eB(n,Q,Q,Q,Q,Q{align:pz,anim:hp,bullets:S,color:I?,delay:I,fx:n,key:n,style:Gm,weight:pV})","a_1(Y)","eB(n,Q,Q,Q,Q{anim:hp,delay:I,fx:n,key:n})","aw<~>(nY)","S(m8)","WN(Y)","ZA(Y)","Zz(Y)","NS(Y)","XY(Y)","eB(ua,Q,Q,Q,Q,I,n,n{anim:hp,delay:I,rotation:Q,stroke:I,strokeWidth:Q})","eB(n,Q,Q,Q,Q,Q,n,n,I)","eB(Q,Q,n,I{size:Q})","r(qO,Q,Q)","kY()","nY(a1<@,@>)","~(u0)","DA()","f9(eB)","r(iR)","Xw(Y)","~(Dr)","XR(Y)","I(eB,eB)","eB(eB)","a1<n,@>(eB)","eB(a1<@,@>)","lr(lr)","a1<n,@>(lr)","lr(a1<@,@>)","S(jt)","jt()","n(hU)","~(ak<nY>)","P(ak<hU>)","P(hU)","ak<hU>(n?)","aaD(Y,I)","~(S(eB,eB))","abg(Y)","acV(Y,I)","x(lr,S)","U3(Y)","abj(Y)","U6(Y)","~(mc)","hU(hU)","Q(eB)","Z5(Y)","YI(Y)","hU()","ak<DV>()","aw<~>(ak<hU>)","r(bs<I,hU>)","C(jt)","C(DA)","aw<~>(hp,~())","r(ak<hp>,hp?,~(hp),x)","S(lP)","ak<je<mc>>(Y)","je<mc>(mc)","hU(a1<@,@>)","Ug(Y)","eB(n,Q,Q,Q,Q,Q,I{align:pz,style:Gm,weight:pV})","Uh(Y)","r(hU)","~(lJ)","Ho(Y,lr,r?)","I(a6K)","aw<ak<a1<n,@>>?>()","n(n)","aw<yF>({paper:n?,photo:dA?,request:n,template!l0})","aw<a60>({doc!yF,history:ak<+(n,n)>,instruction!n,photo:dA?,template!l0})","abd(Y)"])
C.czw.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.czx.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:85}
C.czy.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gahv(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lW(v,t)
w.b=v-A.o.dP(q,t)
w.a=t
return q},
$S:85}
C.czz.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bKZ.prototype={
$1(d){return J.eQ(A.dD.gaN(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fcG.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iB(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iB(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iB(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iB(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bV4.prototype={
$1(d){return B.a_(d,x.N,x.z)},
$S:26}
C.bV5.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aJ(v,J.k(w==null?"":w))},
$S:41}
C.bV7.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fs2.prototype={
$1(d){return new C.a_1(this.a,this.b,C.hPM(),null)},
$S:z+36}
C.eSZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eT2.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eT3.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eT4.prototype={
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
C.eT_.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eT0.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eT1.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eSU.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.ht,w,w,w)
return B.en(B.a([B.bI(!1,D.eZs,w,w,!0,w,w,new C.eSS(d),w,w),B.bI(!1,D.eYC,w,w,!0,w,w,new C.eST(d),w,w)],x.p),w,w,D.UI,v,w,w,w,w,D.fbx,w)},
$S:20}
C.eSS.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eST.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eSV.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eSW.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eT8.prototype={
$0(){var w=this.a
return w.m(new C.eT7(w,this.b))},
$S:0}
C.eT7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eSY.prototype={
$0(){var w=this.a
return w.m(new C.eSX(w,this.b,this.c))},
$S:0}
C.eSX.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.eT5.prototype={
$0(){return this.a.a_8(this.b)},
$S:0}
C.eT6.prototype={
$0(){return this.a.Nx(0,this.b)},
$S:0}
C.eTb.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eTc.prototype={
$0(){var w=this.a
return w.m(new C.eTa(w,this.b))},
$S:0}
C.eTa.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eT9(),B.U(w).k("J<1,n>")))}},
$S:0}
C.eT9.prototype={
$1(d){return d.a},
$S:z+67}
C.f_a.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a_(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fRl(w.b(t.h(0,"doc"))?B.a_(w.a(t.h(0,"doc")),v,u):A.cw)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.nY(s,v,u==null?new B.P(Date.now(),0,!1):u)},
$S:z+50}
C.f_b.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.feU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbm())q=n===o.gbm()&&p.b>o.gct()}if(q)v.n(0,s,t)}},
$S:z+68}
C.feS.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.feT.prototype={
$2(d,e){return e.c.aJ(0,d.c)},
$S:z+29}
C.frA.prototype={
$1(d){return d.ac()},
$S:z+32}
C.fcm.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fso.prototype={
$1(d){return new C.WP(this.a,null)},
$S:z+34}
C.cAS.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cAU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cAX.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cAW())},
$S:11}
C.cAW.prototype={
$0(){},
$S:0}
C.cAZ.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0_(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bi(s,new C.cAV(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.afj(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:287}
C.cAV.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cB_.prototype={
$1(d){},
$S:30}
C.cAT.prototype={
$1(d){return new C.WN(this.b,this.a.gcoG(),null)},
$S:z+40}
C.cB0.prototype={
$1(d){return D.fhH},
$S:z+43}
C.cAO.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.Uu,A.r,1),t=x.p
return B.au(B.aD(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bkm,B.v(B.a([B.p(w,D.bwh,A.f,w,w,new B.o(A.aE.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aN,D.eXI,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eMj,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.C(A.pf,B.B(B.a([B.D(B.dV(D.f32,new C.cAM(d),B.db(w,w,w,w,w,w,w,w,w,E.mC,w,w,A.cd,w,new B.b6(B.m(14),A.Z),D.aQO,w,w,w,w)),1),A.aw,B.D(B.bL(D.f8t,new C.cAN(d),B.bj(A.bM,w,w,w,w,w,A.cd,w,new B.b6(B.m(14),A.Z),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.vU,new B.o(D.a9a,w,u,v,D.cHJ,w,A.n),w,w,w,K.W9,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1668}
C.cAM.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cAN.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cAP.prototype={
$0(){return J.n5(this.a.d,new C.cAL(this.b))},
$S:0}
C.cAL.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cAK.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.Uu,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bB6,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.ajW,A.n),t,44,t,t,t,t,t,44),A.be,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aLD,t,t,t),A.bA,D.f8q],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.d0n[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.av7(u[1],u[2],u[3],new C.cAI(v,d),!1,t))}q.push(A.ar)
q.push(D.bep)
q.push(A.ar)
q.push(new C.av7(A.e8,"Delete book","Remove it from this device",new C.cAJ(d),!0,t))
return B.bp(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.a9a,t,r,s,t,t,A.n),t,t,t,A.rS,E.VO,t,t,t),!0,!1,A.ai,!0,!0)},
$S:34}
C.cAI.prototype={
$0(){var w=this.a.a
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.cAJ.prototype={
$0(){B.a8(this.a,!1).M("delete")
return null},
$S:0}
C.cAR.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aBQ,12)],x.V)
return B.dQ(B.ev(A.A,e,B.p(w,B.bt(B.m(4),new B.a3(62,95.81818181818181,B.f_(A.A,F.alR(d),A.f,A.ds),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cAQ.prototype={
$0(){return this.a.bXQ()},
$S:0}
C.cAH.prototype={
$0(){return this.a.aUg(0,this.b)},
$S:0}
C.cAG.prototype={
$0(){return this.a.C5(this.b)},
$S:0}
C.cAF.prototype={
$0(){return this.a.C5(this.b)},
$S:0}
C.cB1.prototype={
$2(d,e){var w=this.a
return w.bwR(J.q(w.d,e))},
$S:40}
C.cA8.prototype={
$0(){var w=this.a
if(w.c!=null)w.zM()},
$S:0}
C.cA7.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWT("Page "+(v.length+1),"",""))},
$S:0}
C.cAa.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cAi.prototype={
$0(){},
$S:0}
C.cAj.prototype={
$1(d){var w=this.a,v=w.a,u=$.av()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:9}
C.cAb.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cR.gcs().aG(this.c)},
$S:0}
C.cA9.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cAd.prototype={
$0(){return this.a.OM(this.b)},
$S:0}
C.cAe.prototype={
$0(){return this.a.OM(this.b)},
$S:0}
C.cAf.prototype={
$0(){var w=this.a
w.m(new C.cAc(this.b))
w.CU()},
$S:0}
C.cAc.prototype={
$0(){return this.a.c=""},
$S:0}
C.cAh.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cAg(w,d))
w.CU()},
$S:z+51}
C.cAg.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cAo.prototype={
$2(d,e){if(d)this.a.zM()},
$S:116}
C.cAk.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zM(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.P(D.eAi)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cAl.prototype={
$0(){return this.a.aTg(this.b,-1)},
$S:0}
C.cAm.prototype={
$0(){return this.a.aTg(this.b,1)},
$S:0}
C.cAn.prototype={
$0(){return this.a.bZ4(0,this.b)},
$S:0}
C.fjq.prototype={
$1(d){return C.h0a()},
$S:42}
C.fjr.prototype={
$1(d){return null},
$S:30}
C.f3x.prototype={
$1(d){return null},
$S:30}
C.fkp.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:271}
C.fko.prototype={
$2(d,e){return A.o.aJ(e.length,d.length)},
$S:235}
C.fkv.prototype={
$1(d){var w=this.a
return C.fJW(d)===w||C.h4B(d)===w},
$S:z+4}
C.f2A.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:82}
C.c4D.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjo.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fjp.prototype={
$1(d){return C.fm8(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fef.prototype={
$1(d){var w=null
return B.bp(!0,new B.C(E.wH,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f3B,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.Fa,D.eZa,new C.fed(d),B.bj(A.bT,w,w,w,A.w,w,A.cd,w,w,w,w,w)),A.S,B.eu(A.uW,D.f4M,new C.fee(d),B.db(w,w,w,w,w,w,w,w,w,A.ag,w,w,A.cd,w,w,Q.vR,w,w,w,w))],x.p),A.ah,w,A.e,A.Q,0,A.p),w),!0,!1,A.ai,!0,!0)},
$S:34}
C.fed.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fee.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.feg.prototype={
$1(d){var w=null
return B.en(B.a([B.bI(!1,D.eVF,w,w,!0,w,w,new C.feb(d),w,w),B.bL(D.faA,new C.fec(d),w)],x.p),w,w,w,D.fco,w,w,w,w,D.eVz,w)},
$S:20}
C.feb.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.fec.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dZw.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dZu.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZv.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dZx.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dZy.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fku.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:82}
C.fkq.prototype={
$2$h$w(d,e){var w=null
return new B.bH(A.a3,w,w,B.CN(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fks.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eNt,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:198}
C.fkt.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.H(A.hQ,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dQ(B.p(w,w,A.f,w,w,new B.o(w,w,B.H(A.hQ,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b8,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fkr.prototype={
$2$female$size(d,e){var w=null,v=d?D.aaJ:this.a,u=B.H(A.hQ,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.A,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.a9n,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fvQ.prototype={
$1(d){return new C.abd(this.a,this.b,null)},
$S:z+108}
C.dQV.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bbx:A.JA,q=B.H(D.iY.j(0.25),A.r,1),p=B.au(B.p(t,t,A.f,t,t,new B.o(A.bT.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aiH,A.f,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.iY.j(0.35),A.ef,10)],x.V),D.bJK,A.n),t,t,t,t,A.Ki,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.VZ,B.v(B.a([p,A.ay,B.B(B.a([o,A.be,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iY,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eMM,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.i8(!0,t,e,A.z,D.aJ6,new C.dQU(w,this.c),v,D.adI,t,A.ak,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lM,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:110}
C.dQU.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aaD(w,new C.dQT(this.b,w),null)},
$S:z+72}
C.dQT.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fej.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fek.prototype={
$1(d){var w=null,v=this.a
return B.bp(!0,new B.C(E.wH,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f6K,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.Fa,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.feh(d),B.bj(D.iY,w,w,w,A.c,w,A.cd,w,w,w,w,w)),A.S,B.eu(A.nB,D.RK,new C.fei(d),B.db(w,w,w,w,w,w,w,w,w,A.ag,w,w,A.cd,w,w,Q.vR,w,w,w,w))],x.p),A.ah,w,A.e,A.Q,0,A.p),w),!0,!1,A.ai,!0,!0)},
$S:34}
C.feh.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fei.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fen.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.feo.prototype={
$1(d){var w=null,v=this.a
return B.bp(!0,new B.C(E.wH,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eWB,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.Fa,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fel(d),B.bj(D.iY,w,w,w,A.c,w,A.cd,w,w,w,w,w)),A.S,B.eu(A.nB,D.RK,new C.fem(d),B.db(w,w,w,w,w,w,w,w,w,A.ag,w,w,A.cd,w,w,Q.vR,w,w,w,w))],x.p),A.ah,w,A.e,A.Q,0,A.p),w),!0,!1,A.ai,!0,!0)},
$S:34}
C.fel.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.fem.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fer.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fes.prototype={
$1(d){var w=null,v=this.a
return B.bp(!0,new B.C(E.wH,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f1w,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.Fa,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fep(d),B.bj(D.iY,w,w,w,A.c,w,A.cd,w,w,w,w,w)),A.S,B.eu(A.nB,D.RK,new C.feq(d),B.db(w,w,w,w,w,w,w,w,w,A.ag,w,w,A.cd,w,w,Q.vR,w,w,w,w))],x.p),A.ah,w,A.e,A.Q,0,A.p),w),!0,!1,A.ai,!0,!0)},
$S:34}
C.fep.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.feq.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.fxi.prototype={
$1(d){return D.fkV},
$S:z+74}
C.e3L.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b4u:A.JA,s=B.H(A.au.j(0.25),A.r,1),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.au.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bDk,A.f,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.bT.j(0.35),A.ef,10)],x.V),D.ak0,A.n),v,v,v,v,A.Ki,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.VZ,B.v(B.a([r,A.ay,B.B(B.a([q,A.be,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.Jx,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eKl,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.i8(!0,v,e,A.z,D.aJ6,new C.e3K(this.b),19,D.adI,v,A.ak,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lM,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.e3K.prototype={
$2(d,e){var w=D.OE[e]
return new C.acV(w,new C.e3J(this.a,w),null)},
$S:z+75}
C.e3J.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.fmc.prototype={
$0(){return B.fIY(C.hDp(this.a))},
$S:338}
C.fmb.prototype={
$0(){var w=C.fKd(this.a)
return"data:image/png;base64,"+A.cR.gcs().aG(w)},
$S:22}
C.f0G.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j4(d,e),new B.j4(w,e+v),new B.j4(d+f*14,e),new B.j4(w,e-v)],x.J)
B.a_X(this.a,C.fu(4291404327),v)},
$S:680}
C.fxt.prototype={
$1(d){return new C.U3(this.a,null)},
$S:z+77}
C.e72.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e71())},
$S:28}
C.e71.prototype={
$0(){},
$S:0}
C.e73.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e70(w,d))},
$S:1673}
C.e70.prototype={
$0(){return this.a.x=J.f6(A.dD.gaN(this.b))},
$S:0}
C.e74.prototype={
$1(d){},
$S:30}
C.e6F.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e6B.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e6M.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e6N.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.e21)},
$S:0}
C.e6O.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e6H.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bJ(0,A.c2)},
$S:0}
C.e6I.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.e6J.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.e6K.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e6L.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcW(v).Q
v.toString
w.lE(v,A.dU,A.i4)}},
$S:9}
C.e6G.prototype={
$0(){var w=this.a,v=w.z,u=C.fmQ(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.czo(C.fmQ(t))},
$S:0}
C.e6D.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e6E.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e6U.prototype={
$0(){return B.a8(this.a,!1).nh()},
$S:0}
C.e6V.prototype={
$0(){var w=this.a
return w.m(new C.e6T(w))},
$S:0}
C.e6T.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e6W.prototype={
$0(){var w=this.a
return w.m(new C.e6S(w,this.b))},
$S:0}
C.e6S.prototype={
$0(){var w=this.b.b
this.a.e.saT(0,w)
return w},
$S:0}
C.e6X.prototype={
$1(d){var w=this.a
return w.m(new C.e6R(w))},
$S:8}
C.e6R.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e6Y.prototype={
$1(d){var w=this.a
return w.m(new C.e6Q(w))},
$S:8}
C.e6Q.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e6Z.prototype={
$0(){var w=this.a
return w.m(new C.e6P(w,this.b))},
$S:0}
C.e6P.prototype={
$0(){var w=this.b
this.a.f.saT(0,w)
return w},
$S:0}
C.e7_.prototype={
$1(d){return this.a.XQ()},
$S:2}
C.e6C.prototype={
$0(){return this.a.c0I(this.b)},
$S:0}
C.c8i.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cK(w.h(0,d))):null},
$S:453}
C.c8g.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.c8h.prototype={
$1(d){return d.length!==0},
$S:3}
C.flN.prototype={
bfW(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bKY(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cw7($.tA().jV(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mb(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfW(d,e)},
$S:1674}
C.fk4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fk6.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dt(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:82}
C.fk5.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.id(t,t,t,t,B.dm(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pM,A.ci,t,A.en,A.cg)
v=this.a
w.AR(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:57}
C.f0h.prototype={
$1(d){var w=A.a.fo(d,B.ae("\\s+",!0,!1,!1,!1))
return new B.a5(w,new C.f0i(),B.U(w).k("a5<1>")).gJ(0)},
$S:243}
C.f0i.prototype={
$1(d){return d.length!==0},
$S:3}
C.f0f.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.f0g.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:210}
C.c8j.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gax3()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aZ(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fJV(i,new B.F(!0,h,a6,k,a6,a6,q,A.cL,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fGX(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gc8J(),"\n\n")
d=B.id(a6,a6,a6,a6,B.dm(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.abH(k,q,1.28),j),A.pM,A.ci,a6,A.en,A.cg)
d.AR(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aZ(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fJV(i,new B.F(!0,h,a6,k,a6,a6,q,A.cL,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fGX(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.abH(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.N(v,0,v,0),B.p(a6,a6,A.f,B.aZ(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bG(1,A.bp,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.pM,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.ax2(s,j))
i.push(new B.a3(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:426}
C.c8k.prototype={
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
n=o.gax3()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aZ(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fJV(f,new B.F(!0,e,a5,i,a5,a5,h,A.cL,A.bi,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fGX(g.length===0?B.a([a6],n):g,l))break}a1=o.abH(i,h,1.28)
a2=new C.c8l(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Hl,new B.a3(v,a5,a4.f,a5),A.Hl,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bmC,B.p(a5,a5,A.f,B.aZ(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bG(1,A.bp,new B.w(l[2+a3],a5,a1,a5,A.pM,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.ax2(r,g))
f.push(new B.a3(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a3(a5,q,v,a5),A.aa,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:142}
C.c8l.prototype={
$2(d,e){var w=null
return new B.a3(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pM,w,w),w)},
$S:1675}
C.fxw.prototype={
$1(d){return new C.U6(this.a,this.b,null)},
$S:z+79}
C.e8d.prototype={
$1(d){return d.lT()},
$S:1676}
C.e8e.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e8c(w,d))},
$S:1677}
C.e8c.prototype={
$0(){var w=this.b
return this.a.d=w.gff(w)},
$S:0}
C.e80.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e81.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e87.prototype={
$0(){return B.a8(this.a,!1).eD()},
$S:0}
C.e88.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.by,A.r,2.5)
return B.aG(w,B.p(w,B.b2(w,w,w,new C.b8K(u,v.gaud(),w),A.f3),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e85(v),new C.e86(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ad)},
$S:33}
C.e85.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:306}
C.e86.prototype={
$1(d){var w=this.a
w.m(new C.e82(w,d,this.b,this.c))},
$S:250}
C.e82.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaud()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e89.prototype={
$1(d){var w=this.a
return w.m(new C.e84(w,this.b))},
$S:8}
C.e84.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8a.prototype={
$1(d){var w=this.a
return w.m(new C.e83(w,d))},
$S:6}
C.e83.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e8b.prototype={
$0(){return B.a8(this.b,!1).M(this.a.a.c)},
$S:0}
C.fxM.prototype={
$1(d){return D.fnI},
$S:z+83}
C.eF3.prototype={
$1(d){return this.a.WB()},
$S:9}
C.eDW.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cR.gcs().aG(v)},
$S:0}
C.eEj.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eEt.prototype={
$1(d){return d>=this.a.length},
$S:57}
C.eDF.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eDG.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eDD.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eDE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eEc.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eEd(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jB(B.r2(p>0.2?C.fBN(q,B.a3d(p,p,A.x)):q),A.q,u)],x.p)
w=s.bg
if(w>0.02){v=B.a3d(12,12,A.x)
p.push(B.jB(B.d9(B.r2(C.fBN(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b1
if(r!=null&&s.aZ>0)p.push(B.ee(u,B.aZ(r).j(s.aZ),!0))
r=s.b8
if(r!=null&&s.bH>0){r=B.aZ(r).j(s.bH)
w=s.b8
w.toString
p.push(B.bV(u,new B.o(u,u,u,u,u,new B.bR(D.aP6,1.15,A.x,u,0,B.a([r,B.aZ(w).j(0)],x.O),u,u),A.n),A.bb))}r=s.aB
if(r>0)p.push(B.bV(u,new B.o(u,u,u,u,u,new B.bR(D.aOS,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bb))
r=s.aM
if(r>0)p.push(B.bV(u,new B.o(u,u,u,u,u,new B.a4(A.b1,A.b3,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aM)],x.O),D.cGp,u),A.n),A.bb))
if(s.aD>0){r=s.k1
p.push(B.an(u,B.bV(u,new B.o(u,u,u,u,u,new B.a4(A.b1,A.b3,A.x,B.a([A.w.j(0),A.w.j(s.aD),A.w.j(s.aD),A.w.j(0)],x.O),D.cQt,u),A.n),A.bb),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ee(u,A.w.j(r),!0))
r=s.b4
if(r>0)p.push(B.bV(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cNP,u),A.n),A.bb))
s=s.aw
if(s>0)p.push(B.b2(u,u,u,new C.bcg(s,u),A.at))
return new B.am(A.X,u,A.b_,A.q,p,u)},
$S:61}
C.eEd.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fG(r.b,A.A,q,q,A.cn,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aST(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
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
return B.dQ(B.e7(A.A,B.ev(A.A,l,B.fn(A.A,new B.Cm(new B.y5(q,q,n,A.ze),p,q),q,B.v9(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:754}
C.eEp.prototype={
$0(){return this.a.m(new C.eEo(this.b,this.c))},
$S:0}
C.eEo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eEq.prototype={
$1(d){return this.a.m(new C.eEn(this.b,d))},
$S:6}
C.eEn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eEs.prototype={
$0(){return this.a.m(new C.eEr(this.b,this.c))},
$S:0}
C.eEr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDv.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eDw.prototype={
$1(d){var w=this.a
return w.m(w.gcq3())},
$S:2}
C.eDx.prototype={
$1(d){return this.a.m(new C.eDu())},
$S:2}
C.eDu.prototype={
$0(){},
$S:0}
C.eDy.prototype={
$0(){var w=this.a
return w.m(new C.eDt(w,this.b))},
$S:0}
C.eDt.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eDA.prototype={
$2(d,e){return A.aw},
$S:36}
C.eDz.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aZ(v.e),B.aZ(v.f)],x.O),q=t?A.c:A.bH
q=B.H(q,A.r,t?2.5:1)
r=B.dg(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aZ(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b9,new B.o(w,w,q,s,w,new B.a4(A.b1,A.b3,A.x,r,w,w),A.n),A.hT,w,94,w,w,w,w,70)
return B.aG(w,new B.a3(70,w,B.v(B.a([r,A.h7,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDs(u,v),w,w,w,w,w,w,!1,A.ad)},
$S:72}
C.eDs.prototype={
$0(){var w=this.a
return w.m(new C.eDp(w,this.b))},
$S:0}
C.eDp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDB.prototype={
$1(d){var w=this.a
return w.m(new C.eDr(w,d))},
$S:8}
C.eDr.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eDC.prototype={
$1(d){var w=this.a
return w.m(new C.eDq(w,d))},
$S:8}
C.eDq.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eET.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:57}
C.eF_.prototype={
$1(d){var w=this.a
return w.m(new C.eF0(w,d))},
$S:27}
C.eF0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eg(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eF1.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:258}
C.eEU.prototype={
$0(){var w=this.a
return w.m(new C.eES(w,this.b))},
$S:0}
C.eES.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eEV.prototype={
$0(){var w=this.a
return w.m(new C.eER(w,this.b))},
$S:0}
C.eER.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eEW.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eEQ(v,w.b,w.c,w.d))},
$S:0}
C.eEQ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eEX.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gqN(v))},
$S:0}
C.eEY.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eEZ.prototype={
$0(){var w=this.a
return w.m(new C.eEP(w))},
$S:0}
C.eEP.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eEC.prototype={
$1(d){return d.a===this.a.dy},
$S:225}
C.eED.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.arX[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aY(9,9)
m=B.a([B.aZ(v.w.e),B.aZ(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.auh(new B.nM(new B.bw(n,n,n,n),A.ap,new B.kB(new B.o(j,j,j,j,j,new B.a4(A.a3,A.a7,A.x,m,j,j),A.n),A.bb,new C.aX3(l,B.aZ(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eEB(r,v),2,i))}return B.c6(A.bG,h,A.bx,7,7)},
$S:160}
C.eEB.prototype={
$0(){var w=this.b
return w.m(new C.eEw(this.a,w))},
$S:0}
C.eEw.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eEE.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:259}
C.eEH.prototype={
$0(){var w=this.a
return w.m(new C.eEA(w))},
$S:0}
C.eEA.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eEI.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eEJ.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eEK.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eEL.prototype={
$0(){var w=this.a
return w.m(new C.eEz(w))},
$S:0}
C.eEz.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eEM.prototype={
$0(){var w=this.a
return w.m(new C.eEy(w))},
$S:0}
C.eEy.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eEN.prototype={
$0(){var w=this.b
return w.m(new C.eEx(this.a,w))},
$S:0}
C.eEx.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEO.prototype={
$1(d){return this.a.fx=d},
$S:259}
C.eEF.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eEG.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eEg.prototype={
$0(){var w=this.a
return w.m(new C.eEf(w))},
$S:0}
C.eEf.prototype={
$0(){var w=this.a
w.p4=null
w.aZy()},
$S:0}
C.eEh.prototype={
$0(){var w=this.a
return w.m(new C.eEe(w,this.b))},
$S:0}
C.eEe.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eEi.prototype={
$0(){var w=this.a
return w.m(w.gcgX())},
$S:0}
C.eE8.prototype={
$0(){var w=this.a
return w.m(new C.eE7(w))},
$S:0}
C.eE7.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eE9.prototype={
$0(){var w=this.a
return w.m(new C.eE6(w))},
$S:0}
C.eE6.prototype={
$0(){var w=this.a
w.aD=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eEa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cOa[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aY(9,9)
m.push(v.auh(new B.nM(new B.bw(p,p,p,p),A.ap,new B.a3(1/0,1/0,new B.Cm(new B.y5(o,o,v.aST(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.ze),B.fG(u,A.A,140,o,A.cn,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eE5(v,s),3,n))}return B.c6(A.bG,m,A.bx,10,8)},
$S:160}
C.eE5.prototype={
$0(){var w=this.a
return w.m(new C.eE4(w,this.b))},
$S:0}
C.eE4.prototype={
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
C.eDN.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eDO.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eDP.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eDQ.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eDR.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eDS.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eDT.prototype={
$1(d){return this.a.b4=d},
$S:6}
C.eDU.prototype={
$1(d){return this.a.aD=d},
$S:6}
C.eDV.prototype={
$1(d){return this.a.aM=d},
$S:6}
C.eD8.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eD9.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eDa.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eDb.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eDc.prototype={
$0(){var w=this.a
return w.m(new C.eD7(w))},
$S:0}
C.eD7.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eDd.prototype={
$1(d){return this.a.b1=d},
$S:259}
C.eDe.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eDH.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eDI.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eDJ.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.eDK.prototype={
$1(d){return this.a.b8=d},
$S:259}
C.eDL.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.eDi.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.eDj.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eDk.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eDl.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eDm.prototype={
$0(){var w=this.a
return w.m(new C.eDh(w))},
$S:0}
C.eDh.prototype={
$0(){var w=this.a
return w.c4=A.k.F(w.c4+90+180,360)-180},
$S:0}
C.eDn.prototype={
$0(){var w=this.a
return w.m(new C.eDg(w))},
$S:0}
C.eDg.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
return w.m(new C.eDf(w))},
$S:0}
C.eDf.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eEb.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hSn(v,w.p4)},
$S:0}
C.eE3.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bbO:B.fG(v,A.A,w,w,A.cn,A.bQ,!1,w,!1,w,w)
return C.fkc(d.length===0?"rounded":d,u,e)},
$S:139}
C.eE_.prototype={
$0(){var w=this.a
return w.m(new C.eDZ(w))},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eE0.prototype={
$0(){var w=this.b
return w.m(new C.eDY(this.a,w))},
$S:0}
C.eDY.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eE1.prototype={
$0(){var w=this.b
return w.m(new C.eDX(this.a,w))},
$S:0}
C.eDX.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eE2.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eEm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ab(-4,A.G,A.b2.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.er(n.caD(),n.r))
l.push(new C.Ho(n.cnf(),!1,!1,t))
o=B.bX(0,B.bt(o,new B.er(new B.am(A.X,t,A.b_,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.X,t,A.a9,A.q,B.a([o,B.an(t,B.aG(A.c5,B.bV(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bb),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eEl(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ad),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:202}
C.eEl.prototype={
$1(d){var w=this.a
return w.m(new C.eEk(w,d,this.b,this.c))},
$S:18}
C.eEk.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eEv.prototype={
$0(){var w=this.a
return w.m(new C.eEu(w,this.b))},
$S:0}
C.eEu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eDM.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).nh()},
$S:0}
C.eF2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a3(Math.min(s*0.4,460),t,B.v(B.a([w.aVi(),B.D(B.au(w.aYb(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aMk(),1),w.aIA()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aVi(),new B.C(A.hC,B.au(s.aYb(u),t,t,t),t),B.D(s.aMk(),1),s.aIA()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:602}
C.fht.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ej(k,!1,j,A.aB,"",4280640491,i,l,m,"",h,C.bx1(),null,"","",0,!1,"",0,D.bc,4280172719,2,d,0,0,"",D.ce,D.cP,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+98}
C.fhs.prototype={
$3(d,e,f){var w=this,v=C.bx1(),u=w.b?A.I:A.cq,t=w.c?A.cA:A.bi
return C.ej(w.d,!1,f,A.aB,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bc,4280172719,2,d,0,w.f,w.e,D.ce,D.cP,0.82,0.09,w.a)},
$S:z+28}
C.c9F.prototype={
$1(d){return B.t(d)},
$S:17}
C.fpa.prototype={
$0(){return this.a},
$S:z+15}
C.f70.prototype={
$1(d){return d.a.cV(this.a)},
$S:z+30}
C.f71.prototype={
$2(d,e){return J.cj(e)},
$S:z+31}
C.fpc.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fpf.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fpg.prototype={
$0(){return A.d.gL(D.v4)},
$S:z+33}
C.fp8.prototype={
$1(d){return d.a},
$S:z+16}
C.fpb.prototype={
$1(d){return d.a},
$S:z+16}
C.fn7.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fn8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fn9.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fhx.prototype={
$0(){return C.cA()},
$S:22}
C.fhA.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ce,s=u?n:0
return C.ej(j,l,v,A.aB,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bc,4280172719,2,d,s,0,"",t,D.cP,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.dc,!1,null,0,"","",A.bi,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.dc,!1,null,0,"",j,A.bi,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.dc,!1,null,0,j,k,A.bi,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dc,!1,k,l,"",m,A.bi,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.dc,!1,j,k,"",l,A.bi,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bi,A.a4)},
$S:z+35}
C.fhz.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ej(A.bf,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ce,D.eW,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fhy.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ce,t=v?j:0
return C.ej(A.bf,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.bc,4280172719,2,"",t,0,"",u,D.lb,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pC,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fhw.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fjY.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h1c.ce(0,A.a.i(s.w).toLowerCase(),new C.fjW(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ce(0,s.r,new C.fjX(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bs(t.e,new B.bl5(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fjW.prototype={
$0(){return F.aKY(this.a.w)},
$S:195}
C.fjX.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.bvW("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hu(2,w,A.c3,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:195}
C.f0c.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f0d.prototype={
$1(d){return d.a},
$S:z+18}
C.f0e.prototype={
$1(d){return d.b},
$S:z+19}
C.fxY.prototype={
$1(d){return D.fnY},
$S:z+41}
C.eKY.prototype={
$0(){return this.a.x=C.hvg(this.b,this.c.b)},
$S:0}
C.eKZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eKW.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:469}
C.eKX.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:469}
C.eKV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c1(A.az,null,new C.eKQ(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.yk,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aY(s,7)
if(r.length===0){n.m(new C.eKR(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h6S(o,m.cAb(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eKS(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eKQ.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eKU(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aXU,A.f,p,p,D.aTb,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.AQ:D.AV,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a3(64,64,C.fkc(v,i.b_8(h),u),p)))}t=B.lL(1,m,4,10,10,p,A.dO,!0)
if(!l)return B.bp(!0,new B.C(A6.zZ,t,p),!0,!1,A.ai,!0,!0)
s=new C.eKT(i,d)
m=B.aH(d,A.bR,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ft[e]
l.push(s.$2(r.a,r.b))}return B.bp(!0,new B.d1(new B.aW(0,1/0,0,m.a.b*0.85),B.ch(B.v(B.a([D.f04,A.S,t,A.dY,D.eqw,A.av,D.f9Y,A.S,B.lL(1.15,l,3,10,10,p,A.dO,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A6.zZ,p,p,A.ak),p),!0,!1,A.ai,!0,!0)},
$S:34}
C.eKU.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b2.j(0.22):A.c.j(0.04),s=v?A.bC:A.dw
return B.aG(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hp,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eKP(this.b,d),w,w,w,w,w,w,!1,A.ad)},
$S:1682}
C.eKP.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eKT.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bH
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bt(w,d.length===0?B.p(v,D.ajb,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.LY(u.Er(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aG(v,B.v(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.ag,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eKO(this.b,d),v,v,v,v,v,v,!1,A.ad)},
$S:139}
C.eKO.prototype={
$0(){B.a8(this.a,!1).M("finale:"+this.b)
return null},
$S:0}
C.eKR.prototype={
$0(){var w=this.a
return w.w=w.w.Er("")},
$S:0}
C.eKS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eKE.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eKF.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eKH.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eKI.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eKJ.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eKK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eKG(w,d))},
$S:2}
C.eKG.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eKL.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eLb.prototype={
$0(){return this.a.f.fw()},
$S:0}
C.eLc.prototype={
$0(){var w=this.a
return w.m(new C.eLa(w))},
$S:0}
C.eLa.prototype={
$0(){return this.a.e=null},
$S:0}
C.eLd.prototype={
$0(){var w=this.a
return w.m(new C.eL9(w))},
$S:0}
C.eL9.prototype={
$0(){return this.a.x=null},
$S:0}
C.eLf.prototype={
$1(d){var w=this.a
return w.m(new C.eL8(w,d))},
$S:32}
C.eL8.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eLg.prototype={
$1(d){var w=this.a
return w.m(new C.eL7(w,d))},
$S:32}
C.eL7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eLh.prototype={
$0(){var w=this.a
return w.m(new C.eL6(w))},
$S:0}
C.eL6.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eLi.prototype={
$1(d){var w=this.a
return w.m(new C.eL5(w,d))},
$S:32}
C.eL5.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eLj.prototype={
$1(d){var w=this.a
return w.m(new C.eL4(w,d))},
$S:32}
C.eL4.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eLk.prototype={
$0(){var w=this.a
return w.m(new C.eL3(w))},
$S:0}
C.eL3.prototype={
$0(){var w=this.a
return w.w=w.w.Er("")},
$S:0}
C.eLl.prototype={
$0(){var w=this.a
return w.m(new C.eL2(w,this.b))},
$S:0}
C.eL2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eLm.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a3(u,null,w.bIk(D.a_I[v]),null))
return B.c6(A.bG,t,A.bx,8,8)},
$S:160}
C.eLe.prototype={
$1(d){var w=this.a
return w.m(new C.eL1(w,d))},
$S:8}
C.eL1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eKM.prototype={
$0(){var w=this.a
return w.m(new C.eKN(w,this.b,this.c))},
$S:0}
C.eKN.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eL0.prototype={
$0(){var w=this.a
return w.m(new C.eL_(w,this.b))},
$S:0}
C.eL_.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fxX.prototype={
$1(d){return new C.Zz(this.a,this.b,null)},
$S:z+42}
C.eKx.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eKy.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eKz.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aBh?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eKA.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eKB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eKw(w,d))},
$S:2}
C.eKw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eKC.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eKD.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.an(w,0,w.length-1)
this.a.d.bJ(0,new B.ba(w,B.h3(A.bt,w.length),A.aM))},
$S:0}
C.f6g.prototype={
$1(d){return d.a===this.a},
$S:225}
C.e3a.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaui(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cAV:D.cQe
t=D.wl.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.wl.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bX(0,B.b2(q,q,q,new C.bes(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bX(0,B.bLe(B.ev(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a4(A.a3,A.a7,A.x,B.a([A.K,D.b33.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bt(s,new B.am(A.X,q,A.a9,A.q,B.a([n,o,B.au(B.v(B.a([B.W(p.a.c?A.es:A.lx,D.wl,q,q,q,20),A.av,B.f_(A.A,B.nt(A.je,D.eV4,new C.e39()),A.f,A.eb)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.an(q,B.p(q,D.eRV,A.f,q,q,new B.o(D.wl,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ael,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a4(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.e39.prototype={
$1(d){return D.bI2.av(0,d)},
$S:66}
C.fph.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fpi.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:225}
C.fpj.prototype={
$2(d,e){return A.o.aJ(e.a.length,d.a.length)},
$S:1683}
C.fpk.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:14}
C.fpd.prototype={
$1(d){return d.a},
$S:z+18}
C.fpe.prototype={
$1(d){return d.b},
$S:z+19}
C.fxa.prototype={
$1(d){return new C.XY(this.a,this.b,null)},
$S:z+44}
C.dbX.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dbY.prototype={
$1(d){return d.a===this.a.gafU()},
$S:z+10}
C.dbZ.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dc1.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.dc2.prototype={
$0(){var w=this.a
return w.m(new C.dc0(w,this.b))},
$S:0}
C.dc0.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dc3.prototype={
$1(d){var w=this.a
return w.m(new C.dc_(w,d))},
$S:8}
C.dc_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e38.prototype={
$1$2(d,e,f){var w=B.bk(d,!0,f)
A.d.fA(w,this.a)
return B.dc(w,0,B.dH(e,"count",x.S),B.U(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.eXL.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ej(A.bf,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eW,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ce,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eXN.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ej(A.L,!1,this.b.d,A.aB,"",4280640491,i,A.bi,A.cL,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bc,4280172719,2,d,l,0,"",D.mi,D.cP,g,e,f)},
$S:z+46}
C.eXM.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vJ(0,"twinkle")
w=t===D.bc?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mi,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eXK.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fiE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fiF.prototype={
$0(){return A.d.gL(D.FC)},
$S:z+49}
C.fiG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eZJ.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.foK.prototype={
$1(d){var w=2450411,v=4281908728
C.dr(d,C.ds(4280171146,1,0,D.bc,w,0,0.52,0,0))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.04,0.48,0))
C.dr(d,C.ds(4294047225,0.38,0,D.bc,w,0,0.48,0.52,0.62))
C.dr(d,C.ds(v,0.006,0,D.fm,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foL.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dr(d,C.ds(4280172719,0.8,0,D.bc,w,0,0.36,0.58,0.1))
C.dr(d,C.ds(v,0.64,0,D.bc,w,0,0.28,0.64,0.18))
C.dr(d,C.ds(4282090230,0.44,0,D.bc,w,0,0.2,0.7,0.28))
C.dr(d,C.ds(v,0.006,0,D.fm,v,3,0.22,0.08,0.12))
C.dr(d,C.ds(u,0.004,0,D.fm,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.foM.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(4279080072,0.11,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4279310375,0.11,0,D.bc,w,0,1,0,0.89))
C.dr(d,C.ds(856528008,0.72,0,D.ju,w,0,0.28,0.72,0.14))
C.dr(d,C.ds(1426953352,0.2,0,D.ju,w,0,0.2,0.78,0.22))
C.dr(d,C.ds(v,0.004,0,D.fm,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.foX.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4279203438,0.55,0,D.ju,w,0,0.5,0.55,-0.05))
C.dr(d,C.ds(4280171146,0.5,0,D.ju,w,0,0.45,0.62,0.35))
C.dr(d,C.ds(4280640491,0.4,0.3,D.jt,w,0,0.35,0.68,0.55))
C.dr(d,C.ds(571438702,0.12,0,D.bc,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fp1.prototype={
$1(d){var w=4280472558
C.dr(d,C.ds(4279310375,0.75,-0.4,D.jt,2450411,0,0.75,-0.15,0.35))
C.dr(d,C.ds(w,0.55,0,D.bc,2450411,0,0.06,0.42,0.38))
C.dr(d,C.ds(w,0.006,0,D.fm,w,3,0.35,0.08,0.08))
C.dr(d,C.ds(2282478,0.12,0,D.bc,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fp2.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3423541034,0.48,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.12,-0.08,D.ju,w,0,1.1,-0.05,0.38))
C.dr(d,C.ds(858088427,0.35,0,D.bc,w,0,0.42,0.55,0.05))
C.dr(d,C.ds(v,0.006,0,D.fm,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fp3.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cA0[w]
u=Date.now()
t=$.iT
$.iT=t+1
v=new C.eB("design_"+(""+1000*u+"_"+t),D.eW,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bi,A.aB,4279310375,A.bf,null,D.bc,v,4294967295,2,0,!1,"",0,D.ce,0,"","","","","",!1,0)
u=$.J3
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fm,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fp4.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.lV,A.dy,w/3).l()
u=Date.now()
t=$.iT
$.iT=t+1
v=new C.eB("design_"+(""+1000*u+"_"+t),D.eW,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bi,A.aB,4279310375,A.bf,null,D.Bu,v,2450411,0,0,!1,"",0,D.ce,0,"","","","","",!1,0)
u=$.J3
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(s,0.006,0,D.fm,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fp5.prototype={
$1(d){var w=4294967295
C.dr(d,C.ds(4280640491,1,0,D.bc,2450411,0,0.42,0,0))
C.dr(d,C.ds(4280110808,1.1,1.57,D.jt,2450411,0,0.18,0.35,-0.05))
C.dr(d,C.ds(w,0.006,0,D.fm,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fp6.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0))
C.dr(d,C.ds(u,0.012,0,D.bc,v,0,1,0,0.1))
C.dr(d,C.ds(u,0.006,0,D.fm,u,3,0.42,0.06,0.14))
C.dr(d,C.ds(403446057,0.68,0,D.ju,v,0,0.22,0.72,0.18))
C.dr(d,C.ds(w,0.1,0,D.bc,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fp7.prototype={
$1(d){var w=4278630100
C.dr(d,C.ds(4279310375,1.2,0.15,D.ju,2450411,0,0.55,-0.2,-0.1))
C.dr(d,C.ds(w,1.1,0.15,D.bc,2450411,0,0.08,0.15,-0.05))
C.dr(d,C.ds(1120295,0.18,0,D.bc,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foN.prototype={
$1(d){var w=4292617766
C.dr(d,C.ds(4282714634,0.65,-0.2,D.jt,2450411,0,0.65,-0.1,0.45))
C.dr(d,C.ds(w,0.5,-0.15,D.jt,2450411,0,0.5,0.05,0.55))
C.dr(d,C.ds(w,0.006,0,D.fm,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.foO.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(4278413729,0.35,3.14,D.jt,w,0,0.45,-0.05,0.7))
C.dr(d,C.ds(4278355143,0.3,3.14,D.jt,w,0,0.4,0.25,0.75))
C.dr(d,C.ds(4279150057,0.32,3.14,D.jt,w,0,0.5,0.55,0.72))
C.dr(d,C.ds(863884284,0.22,0,D.eG,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.foP.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dr(d,C.ds(w,0.14,0,D.bc,v,0,0.14,0.02,0.02))
C.dr(d,C.ds(2282478,0.14,0,D.bc,u,3,0.14,0.84,0.02))
C.dr(d,C.ds(w,0.28,0,D.ju,v,0,0.35,-0.08,0.78))
C.dr(d,C.ds(u,0.22,0.5,D.jt,v,0,0.3,0.72,0.78))
C.dr(d,C.ds(w,0.006,0,D.fm,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.foQ.prototype={
$1(d){var w=4293571336,v=1156231944
C.dr(d,C.ds(1841431,0.92,0,D.bc,w,3,0.92,0.04,0.04))
C.dr(d,C.ds(v,0.15,0,D.jt,2450411,0,0.15,0.02,0.02))
C.dr(d,C.ds(v,0.15,3.14,D.jt,2450411,0,0.15,0.83,0.83))
C.dr(d,C.ds(w,0.004,0,D.fm,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.foR.prototype={
$1(d){var w=4279080072,v=2450411
C.dr(d,C.ds(w,0.14,0,D.kO,v,0,0.14,0.68,0.18))
C.dr(d,C.ds(4279548070,0.14,0,D.kO,v,0,0.14,0.78,0.28))
C.dr(d,C.ds(4281193663,0.14,0,D.kO,v,0,0.14,0.68,0.38))
C.dr(d,C.ds(4284410580,0.14,0,D.kO,v,0,0.14,0.78,0.48))
C.dr(d,C.ds(4279203438,0.14,0,D.kO,v,0,0.14,0.68,0.58))
C.dr(d,C.ds(w,0.006,0,D.fm,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.foS.prototype={
$1(d){var w=2450411,v=4280640491
C.dr(d,C.ds(3708753706,0.42,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(v,0.06,-0.05,D.ju,w,0,1,0,0.38))
C.dr(d,C.ds(859356664,0.25,0,D.eG,w,0,0.25,0.7,0.08))
C.dr(d,C.ds(v,0.006,0,D.fm,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.foT.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.lV,A.dy,w/3).l()
u=Date.now()
t=$.iT
$.iT=t+1
v=new C.eB("design_"+(""+1000*u+"_"+t),D.eW,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bi,A.aB,4279310375,A.bf,null,D.Bu,v,2450411,0,0,!1,"",0,D.ce,0,"","","","","",!1,0)
u=$.J3
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dr(d,C.ds(4280172719,0.08,0,D.bc,2450411,0,1,0,0))
C.dr(d,C.ds(s,0.006,0,D.fm,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.foU.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iT
$.iT=u+1
u=new C.eB("design_"+(""+1000*v+"_"+u),D.eW,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bi,A.aB,s,A.bf,null,D.fm,t,t,0,0,!1,"",0,D.ce,0,"","","","","",!1,0)
v=$.J3
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(s,0.75,0,D.bc,2450411,0,0.22,0.72,0.1))
C.dr(d,C.ds(872415231,0.16,0,D.bc,2450411,0,0.16,0.75,0.15))
C.dr(d,C.ds(s,0.006,0,D.fm,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foV.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dr(d,C.ds(4674921,0.9,0,D.bc,4287931320,2,0.9,0.05,0.05))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.03,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.89,0.03))
C.dr(d,C.ds(u,0.08,0,D.bc,v,0,0.08,0.03,0.89))
C.dr(d,C.ds(w,0.08,0,D.bc,v,0,0.08,0.89,0.89))
C.dr(d,C.ds(w,0.004,0,D.fm,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.foW.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iT
$.iT=t+1
t=new C.eB("design_"+(""+1000*u+"_"+t),D.eW,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bi,A.aB,r,A.bf,null,D.bc,4294967295,4280640491,2,0,!1,"",0,D.ce,0,"","","","","",!1,0)
u=$.J3
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.ar(A.dm,A.cC,w/2).l()
t=Date.now()
s=$.iT
$.iT=s+1
u=new C.eB("design_"+(""+1000*t+"_"+s),D.eW,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bi,A.aB,r,A.bf,null,D.bc,u,q,0,0,!1,"",0,D.ce,0,"","","","","",!1,0)
v=$.J3
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dr(d,C.ds(4280171146,1,0,D.bc,q,0,0.48,0,0))
C.dr(d,C.ds(4280172719,1.1,1.57,D.jt,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.foY.prototype={
$1(d){var w=2450411
C.dr(d,C.ds(870995980,0.55,0.45,D.ju,w,0,0.55,-0.12,-0.08))
C.dr(d,C.ds(856996006,0.45,0.45,D.ju,w,0,0.45,0.62,-0.05))
C.dr(d,C.ds(16777215,0.38,0.45,D.ju,4293548044,5,0.38,0.52,0.12))
C.dr(d,C.ds(585783308,0.3,0.45,D.ju,w,0,0.3,0.56,0.16))
C.dr(d,C.ds(4279548070,0.06,0,D.bc,w,0,0.16,0.38,0.04))
C.dr(d,C.ds(1156208652,0.28,0,D.eG,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.foZ.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dr(d,C.ds(w,1,0,D.bc,v,0,0.07,0,0))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.14))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.28))
C.dr(d,C.ds(u,0.1,0,D.bc,t,1,0.46,0.48,0.42))
C.dr(d,C.ds(s,0.08,0,D.eG,v,0,0.08,0.5,0.16))
C.dr(d,C.ds(w,0.08,0,D.eG,v,0,0.08,0.5,0.3))
C.dr(d,C.ds(4279548070,0.08,0,D.eG,v,0,0.08,0.5,0.44))
C.dr(d,C.ds(16777215,0.32,0.45,D.ju,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fp_.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dr(d,C.ds(4294047225,0.08,0,D.bc,t,2,0.1,0.02,0.06))
C.dr(d,C.ds(s,0.42,0,D.bc,2450411,0,0.36,0.58,0.18))
C.dr(d,C.ds(872415231,0.12,0,D.bc,2450411,0,0.28,0.62,0.24))
C.dr(d,C.ds(16777215,0.28,0,D.eG,s,4,0.32,0,0.72))
C.dr(d,C.ds(r,0.006,0,D.fm,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iT
$.iT=u+1
u=new C.eB("design_"+(""+1000*v+"_"+u),D.eW,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bi,A.aB,4279310375,A.bf,null,D.eG,16777215,t,2,0,!1,"",0,D.ce,0,"","","","","",!1,0)
v=$.J3
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fp0.prototype={
$1(d){var w=2450411,v=4279548070
C.dr(d,C.ds(3423541034,0.55,0,D.bc,w,0,1,0,0))
C.dr(d,C.ds(4009754623,0.56,0.45,D.ju,w,0,0.56,0.22,0.18))
C.dr(d,C.ds(3439329279,0.44,0.45,D.ju,w,0,0.44,0.28,0.24))
C.dr(d,C.ds(v,0.07,0,D.bc,w,0,0.22,0.34,0.62))
C.dr(d,C.ds(v,1,0,D.bc,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fgu.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fgv.prototype={
$0(){return A.d.gL($.bAB())},
$S:z+52}
C.f63.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.f62.prototype={
$1(d){return C.hCn(d,this.a,this.b)},
$S:z+53}
C.fpq.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.v9(1.0375,1.01875,1)
return new B.fJ(v,u,new C.aPS(B.hsi(A.u3,C.hCq(w.c,w.d,v,u),t)))},
$S:468}
C.dMF.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dME.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bV(w,new B.o(w,w,w,w,w,new B.bR(A.In,1.2,A.x,w,0,u.d,w,w),A.n),A.bb),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jB(new B.am(A.X,w,A.b_,A.q,B.a([t,new B.er(B.b2(w,w,w,new C.bbm(u.a,r,q,r),A.at),w),B.au(new B.k4(r,new C.dMD(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:389}
C.dMD.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.eq.au(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.A(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hO(B.fG(i,A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.fN(A.A,0,6.283185307179586,A.x,t,r,new B.m3(e*0.8)),A.a6),r,w,r,r,new B.N(v,v,v,v),r,r,w),new B.a3(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bnJ(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cM(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a3(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d9(B.dQ(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a4(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a3(r,m*0.022,r,r),B.d(w.a.c.gaH8(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.d9(B.e7(A.A,new B.C(new B.N(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:108}
C.eJL.prototype={
$1(d){var w=this.b
return new B.a4(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c4e.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bH
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.hy.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bt(B.m(12),d,A.ap),v,v,A.b9,new B.o(v,v,t,u,w,v,A.n),A.eK,v,72,v,v,v,v,v)
return B.aG(v,new B.a3(112,v,B.v(B.a([w,A.h7,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.ag,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ad)},
$S:1685}
C.c4f.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Er(""))},
$S:0}
C.c4g.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.LY(v.Er(u),!0,!1,null),!0,null),d.b,new C.c4h(w,this.c,d),v.a===u)},
$S:z+54}
C.c4h.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h6S(u.b,t.c.Er(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fvA.prototype={
$1(d){return new C.Xw(this.a,null)},
$S:z+55}
C.d1r.prototype={
$0(){var w=this.a
w.d=w.guQ().b6S("data:"+this.b+";base64,"+A.cR.gcs().aG(this.c));++w.r},
$S:0}
C.d1w.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d1x.prototype={
$0(){var w=this.a
return w.m(new C.d1v(w))},
$S:0}
C.d1v.prototype={
$0(){return this.a.r++},
$S:0}
C.d1y.prototype={
$1(d){var w=this.a
return w.m(new C.d1u(w,d))},
$S:2}
C.d1u.prototype={
$0(){var w=this.a
return w.d=w.guQ().aAo(this.b)},
$S:0}
C.d1z.prototype={
$0(){var w=this.a
return w.m(new C.d1t(w))},
$S:0}
C.d1t.prototype={
$0(){var w=this.a
return w.d=w.guQ().b6S("")},
$S:0}
C.d1A.prototype={
$1(d){var w=this.a
return w.m(new C.d1s(w,d))},
$S:2}
C.d1s.prototype={
$0(){var w=this.a
return w.d=w.guQ().b6Z(this.b)},
$S:0}
C.d1B.prototype={
$0(){var w=this.a
w=w.guQ().b6Z(w.gauj().a.a)
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.fvz.prototype={
$1(d){var w={}
w.a=this.a
return new B.e6(new C.fvy(w),null)},
$S:21}
C.fvy.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bp(!0,new B.d1(new B.aW(0,1/0,0,B.aH(d,A.bR,x.w).w.a.b*0.85),B.ch(B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f7l,A.av,D.f7z,A.ay,new C.aX0(v.a,new C.fvx(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),w),!0,!1,A.ai,!0,!1),A.f,w,w,D.aTI,w,w,w,w,A.Kq,w,w,w)},
$S:193}
C.fvx.prototype={
$1(d){this.b.$1(new C.fvw(this.a,d))
B.a8(this.c,!1).M(d)},
$S:z+56}
C.fvw.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fxW.prototype={
$1(d){return D.fjQ},
$S:z+57}
C.d7X.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.d7Y.prototype={
$0(){var w=this.a.c
w.toString
B.a8(w,!1).M(this.b)
return null},
$S:0}
C.d7Z.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a8(w,!1).M(v)}},
$S:0}
C.fm5.prototype={
$1(d){var w=this.b
return new B.a4(A.ax,A.aC,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:66}
C.d18.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.V().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b4(t+r*1.2,o))
u.E(new B.cO(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cO(w,q+p,w,q+p*1.2))
u.E(new B.C3(B.bS(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aL(u,v.d)
s.aL(u,v.e)
p=B.L()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:682}
C.fm9.prototype={
$2(d,e){return A.k.aJ(d.c,e.c)},
$S:z+58}
C.fev.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.few.prototype={
$1(d){var w=null,v=this.a
return B.bp(!0,new B.C(E.wH,B.v(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.eSa,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dn(D.Fa,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fet(d),B.bj(A.bT,w,w,w,A.c,w,A.cd,w,w,w,w,w)),A.S,B.eu(A.nB,D.RK,new C.feu(d),B.db(w,w,w,w,w,w,w,w,w,A.ag,w,w,A.cd,w,w,Q.vR,w,w,w,w))],x.p),A.ah,w,A.e,A.Q,0,A.p),w),!0,!1,A.ai,!0,!0)},
$S:34}
C.fet.prototype={
$0(){B.a8(this.a,!1).M("continue")
return null},
$S:0}
C.feu.prototype={
$0(){B.a8(this.a,!1).M("new")
return null},
$S:0}
C.c9D.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c9E.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c9C.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a_(b5,x.N,x.z),b3=B.aM(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a4.gdC(0)
b3=B.aM(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aM(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hyg(b2.h(0,"type"))
t=B.aM(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aM(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aM(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aM(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aM(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.atB[A.o.D(b4,0,8)]
m=D.cCF[A.o.D(w,0,1)]
l=C.hBS(b2.h(0,"decoration"))
k=B.aM(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.aqw[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hEB(b2.h(0,"shape"))
g=B.aM(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aM(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aM(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aM(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aM(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.h2f(b2.h(0,"textTransition"))
a4=B.aM(b2.h(0,"textAnimDelayMs"))
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
b2=B.aM(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.ej(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c9s.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c9t.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c9p.prototype={
$1(d){return B.t(d)},
$S:17}
C.c9q.prototype={
$1(d){return B.t(d)},
$S:17}
C.c9r.prototype={
$1(d){return C.fU6(B.a_(d,x.N,x.z))},
$S:z+64}
C.c9U.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c9V.prototype={
$0(){return A.d.gL(D.a_n)},
$S:z+66}
C.c9P.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.n(0,u,d.hs())},
$S:z+7}
C.c9O.prototype={
$2(d,e){return e.f.aJ(0,d.f)},
$S:z+21}
C.c9K.prototype={
$1(d){return new B.J(d,new C.c9L(),B.U(d).k("J<1,P>")).fv(0,new C.c9M())},
$S:z+69}
C.c9L.prototype={
$1(d){return d.f},
$S:z+70}
C.c9M.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:683}
C.c9N.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hoa(d)},
$S:z+71}
C.c9Q.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.c9R.prototype={
$2(d,e){return e.f.aJ(0,d.f)},
$S:z+21}
C.c9S.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fmI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ak(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.K(0,j)
break}}}},
$S:z+73}
C.fmE.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fmF.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fmG.prototype={
$2(d,e){var w
if(d.b===D.cP){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fmH.prototype={
$2(d,e){return d.b===D.eW&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c9y.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hNc(b2,b3),b5=B.a2(b4).k("bg<2>")
b5=B.cB(new B.bg(b4,b5),new C.c9x(),b5.k("G.E"),x.N)
w=B.d8(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.p6.au(0,A.k.D(b1,0,1))
u=new C.c9z()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c9A(a9,b7.d)
r=new C.c9B(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jE.au(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kI(A.k.D(1-k,0,1),B.dQ(B.e7(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eW){a4=i.hs()
a4.ay=B.ar(B.aZ(l.ay),B.aZ(i.ay),v).l()
a4.ch=B.ar(B.aZ(l.ch),B.aZ(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lb&&l.at==i.at?r.$1(i):new B.am(A.X,a8,A.b_,A.q,B.a([new B.kI(A.k.D(o,0,1),r.$1(l),a8),new B.kI(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iz(B.vC(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ce)a7=D.mi
p.push(s.$5(i.c,i.d,i.e,i.f,C.h4q(a7,a6,r.$1(i))))}}return B.bV(new B.am(A.X,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a4(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bb)},
$S:444}
C.c9x.prototype={
$1(d){return d.a},
$S:z+22}
C.c9z.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aZ(w)},
$S:z+76}
C.c9A.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.c9B.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5R(v,C.aZ7(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dzy.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e7(new B.d7(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c9H.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c9I.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fpx.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:272}
C.foE.prototype={
$1(d){return new C.abj(this.a,this.b,null)},
$S:z+78}
C.edc.prototype={
$0(){return this.a.Od(this.b,C.hQw(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.edd.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Od(this.b,C.hQy(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ede.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Od(this.b,C.hQx(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.edf.prototype={
$0(){X.h4a()
B.a8(this.a,!1).M(null)},
$S:0}
C.c9w.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.c9v.prototype={
$2(d,e){var w,v=this,u=null,t=B.dJ(d,A.n6),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lB(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.ds
return B.fG(t,A.A,o,new C.c9u(),A.cn,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.c9u.prototype={
$3(d,e,f){return D.a8e},
$S:208}
C.fmD.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aZ(r.e)
v=r.f
v.toString
v=new B.a4(A.ax,A.aC,A.x,B.a([w,B.aZ(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aZ(r.e):t
r=r.z
r=B.dc(r,0,B.dH(6,"count",x.S),B.U(r).c)
u=r.$ti.k("J<ai.E,cH>")
r=B.A(new B.J(r,new C.fmC(e.b,e.d),u),u.k("ai.E"))
return B.bt(s,B.bV(new B.am(A.X,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bb),A.ap)},
$S:1692}
C.fmC.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aZ7(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f8m.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cP(r.b,new C.f8k(d))
w=B.aH(d,A.bR,x.w).w
v=B.m(22)
u=B.H(A.bH,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.fG,28)],x.V)
s=x.p
return new B.cU(e,!1,B.au(B.aD(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kS,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bI(!1,A.yC,q,q,!0,q,q,new C.f8l(p,d),q,B.fr(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.E_,q,new B.b6(B.m(12),A.Z),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aW(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fC,A.E7,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:240}
C.f8k.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a8(w,!0).oQ())B.a8(w,!0).eD()},
$S:0}
C.f8l.prototype={
$0(){var w=this.a.a
if(w!=null)w.aa(0)
B.a8(this.b,!0).eD()},
$S:0}
C.eS4.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.d9(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dQ(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dQ(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dQ(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.dQ(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e7(A.A,B.d9(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e7(A.A,B.d9(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fm(r*3.14159)
return B.fn(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jz(r*3.14159)
return B.fn(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fm(r*1.2)
s.jz(r*0.5)
return B.fn(A.A,B.d9(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fm(-r*1.4)
return B.fn(A.a7,B.d9(u.b,r),t,s,!0)
case 12:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.d9(B.e7(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.jB(u.b,A.q,new C.aGI(r,t))],x.p),t)
case 15:return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.jB(u.b,A.q,new C.aGI(1-r,t))],x.p),t)
case 16:v=D.aWW.au(0,r)
return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.e7(A.A,B.d9(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.d9(B.ee(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.di()
s.mf(r*6.28)
s.ji(r,r,r,1)
return B.fn(A.A,u.b,t,s,!0)
case 20:return B.ev(A.A,(r-0.5)*0.35,new B.am(A.X,t,A.b_,A.q,B.a([u.c,B.d9(u.b,r)],x.p),t),t)}},
$S:59}
C.dKS.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dKR.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cm(0)}},
$S:11}
C.dKQ.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h4q(v,w,e)},
$S:59}
C.c9o.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aZ(v.e)
t=v.f
t.toString
t=new B.a4(A.a3,A.a7,A.x,B.a([u,B.aZ(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aZ(v.e):r
v=v.z
s=B.U(v).k("J<1,cH>")
q=B.A(new B.J(v,new C.c9n(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bV(new B.am(A.X,r,A.a9,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bb)},
$S:444}
C.c9n.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ce?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5R(m,new C.Ti(d,C.aZ7(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cZH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cZG(w))},
$S:11}
C.cZG.prototype={
$0(){return this.a.d++},
$S:0}
C.e2R.prototype={
$2(d,e){var w,v=null,u=A.o.al(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aIb.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hMW(w,t,s,e)}switch(s.a.c){case"float3d":s=B.di()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dZ(0,w*7,0,1)
s.fm(Math.sin(t)*0.32)
s.jz(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.ji(w,w,w,1)
return B.fn(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dQ(B.e7(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.d9(B.e7(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eHv.prototype={
$1(d){var w
$.V()
w=B.L()
w.b=A.ae
w.c=d
w.e=A.fv
return w},
$S:1693}
C.fkd.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ge8()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bnC(u,t,r),A.at))
w.push(B.n8(s.d,A.ap,new C.bbT(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bmF(u,q,t,r),A.at))
return B.au(new B.a3(v.a,v.b,new B.am(A.X,r,A.b_,A.q,w,r),r),r,r,r)},
$S:249}
C.fba.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:271}
C.ejq.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.BQ(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gai(s)){u=null
w=1
break}u=r.dH(s,new C.ejo(),new C.ejp(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.ejo.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:174}
C.ejp.prototype={
$0(){return J.fk(this.a)},
$S:1696}
C.efO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.efP.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.efQ.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eho.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehc.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ehd.prototype={
$1(d){return d.hs()},
$S:z+81}
C.efb.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eiw.prototype={
$0(){this.a.rK()},
$S:0}
C.ejm.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IK()},
$S:0}
C.ehm.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nD()
w.IK()},
$S:0}
C.ej9.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eja.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.ejb.prototype={
$1(d){return d.a},
$S:z+22}
C.ejc.prototype={
$0(){var w=this.a.r
return new B.ap(new B.ba(w,A.b0,A.aM),$.av())},
$S:263}
C.ejd.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eeA.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ejn.prototype={
$0(){},
$S:0}
C.egv.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wA()
w.IK()},
$S:0}
C.eey.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wA()},
$S:0}
C.eez.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wA()},
$S:0}
C.egS.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.egT.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wA()
w.IK()
w.z="Home"},
$S:0}
C.egU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.egu.prototype={
$1(d){var w=null
return B.en(B.a([B.bI(!1,A.RJ,w,w,!0,w,w,new C.egt(d),w,w)],x.p),w,w,w,D.f8V,w,w,w,w,D.eSA,w)},
$S:20}
C.egt.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.egr.prototype={
$1(d){var w=null
return B.en(B.a([B.bI(!1,A.RJ,w,w,!0,w,w,new C.egq(d),w,w)],x.p),w,w,w,D.eWj,w,w,w,w,D.eUd,w)},
$S:20}
C.egq.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.egs.prototype={
$0(){},
$S:0}
C.efK.prototype={
$1(d){return this.a.aWA(C.byD(d))},
$S:z+7}
C.efL.prototype={
$1(d){return this.a.acv(C.byD(d))},
$S:z+7}
C.egB.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.ba,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f8Z,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.O1(A.uH,D.arQ,"HATI YA KUHOWA","Hati ya mahari",new C.egw(d),w),A.S,new C.O1(A.h1,D.cOb,"HATI YA KUHOWESHA","Hati ya kupokea",new C.egx(d),w),A.S,new C.O1(A.hV,D.cAZ,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.egy(d),w),A.S,new C.O1(A.hE,D.czp,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.egz(d),w)],v)
if(this.a.ga97())A.d.v(u,B.a([A.S,new C.O1(A.iO,D.ckG,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.egA(d),w)],v))
return B.bp(!0,B.ch(B.v(u,A.ah,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,E.wH,w,w,A.ak),!0,!1,A.ai,!0,!0)},
$S:34}
C.egw.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhowa")
return null},
$S:0}
C.egx.prototype={
$0(){B.a8(this.a,!1).M("hati_kuhoweya")
return null},
$S:0}
C.egy.prototype={
$0(){B.a8(this.a,!1).M("marriage_agreement")
return null},
$S:0}
C.egz.prototype={
$0(){B.a8(this.a,!1).M("hati_malipo_awamu")
return null},
$S:0}
C.egA.prototype={
$0(){B.a8(this.a,!1).M("hati_kiapo_uongozi")
return null},
$S:0}
C.egC.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wA()},
$S:0}
C.eeC.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eeD.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a7(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mG(r,v.f+1,q);++v.f
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
C.egN.prototype={
$1(d){return d.b===D.lb},
$S:z+4}
C.egO.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e6(new C.egL(w,this.a,v),null)},
$S:21}
C.egL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.egM(p,o,a3,n),l=B.M(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.aj,i=l?A.bj:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bH:A.aK,A.r,1),e=x.p,d=B.B(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.W(A.cu,j,q,q,q,q),q,q,q,new C.egH(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.AV[w]
v.a=null
t=v.a=u.a
a1.push(new C.bem(t,u.b,p.a===t,i,k,new C.egI(v,m),q))}a1=B.c6(A.bG,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.AQ[w]
s.a=null
t=s.a=r.a
u.push(new C.bel(t,r.b,p.b===t,k,j,new C.egJ(s,m),q))}return B.bp(!0,B.p(q,B.ch(B.v(B.a([d,A.aN,a0,A.S,a1,A.bu,v,A.S,B.c6(A.bG,u,A.bx,12,12),A.bu,new B.a3(1/0,48,B.eu(D.bF_,D.fbh,new C.egK(o,n),B.db(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b6(B.m(16),A.Z),D.aRk,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.z,q,q,q,q,A.ak),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rS,D.bj5,q,q,q),!0,!1,A.ai,!0,!0)},
$S:106}
C.egM.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.egF(w.a,d,e))
w.b.cZ(new C.egG(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.egF.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.egG.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.egH.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.egI.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.egJ.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.egK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.Fq(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.egE(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.egE.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.egQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.egR.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.egP(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wA()},
$S:0}
C.egP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eh7.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eh8.prototype={
$1(d){return d.w},
$S:z+82}
C.eh9.prototype={
$2(d,e){return d>e?d:e},
$S:90}
C.eha.prototype={
$1(d){var w=this,v=null,u=B.M(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.aj,r=u?A.bj:A.aO,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bH:A.aK,A.r,1),n=B.aH(d,A.bR,x.w).w,m=w.a,l=x.p,k=w.b
return B.bp(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.byO,A.f,v,v,D.aSF,v,38,v,v,v,v,v,38),A.be,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.W(A.cu,s,v,v,v,v),v,v,v,new C.eh4(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dl(1,A.ch,B.hH(v,new C.eh5(m,k,w.c,s,w.d,t,r),k.length,A.hn,v,A.ak,new C.eh6(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aW(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rS,A.VU,v,v,v),!0,!1,A.ai,!0,!0)},
$S:34}
C.eh4.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.eh6.prototype={
$2(d,e){return A.aa},
$S:36}
C.eh5.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cq
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bBT,q,q,q,new C.eh2(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.blk,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b3(4,B.m(16),A.Z),q,A.eM,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b3(4,B.m(16),D.aR_),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.af,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eh3(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1700}
C.eh2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hSw(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o7(q.a,o,n,s)
r.bJ(0,new B.ba(m,B.h3(A.bt,o+s.length),A.aM))
l.agw(k,m)
l.oC()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eh3.prototype={
$1(d){var w=this.a
w.agw(this.b.a,d)
w.oC()},
$S:2}
C.ehb.prototype={
$0(){},
$S:0}
C.egD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eeT.prototype={
$0(){},
$S:0}
C.eeU.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h5J(this.b,w,!0)
w=this.a
w.r=null
w.wA()},
$S:0}
C.eeV.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eeW.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.eeS(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mG(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wA()},
$S:0}
C.eeS.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ehh.prototype={
$1(d){return B.or(new C.ehg(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:127}
C.ehg.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ae3,B.v(B.a([D.f6M,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.i8(!0,w,e,A.z,D.ewe,new C.ehf(this.a,this.b),20,A.rV,w,A.ak,!1),1)],v),A.ah,w,A.e,A.j,0,A.p)},
$S:436}
C.ehf.prototype={
$2(d,e){var w=null,v=D.FC[e],u=C.ho5(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fD,w,w,w)],m)
if(u)A.d.v(n,B.a([A.br,B.p(w,D.eqs,A.f,w,w,new B.o(A.e_.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nv,w,w,w)],m))
return B.aD(!1,A.a1,!0,w,B.aJ(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a4(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ehe(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.ehe.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c9G(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a8(s,!1).M(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehi.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.wA()},
$S:0}
C.edx.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qZ(4294967295,null,0,0,null,C.cA(),D.mh,"","","",D.dc),s=this.b
C.c9T(t,s,u)
w=v.gdj()
if(w!=null&&s!==D.Bt){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eeR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.n(0,"id",C.cA())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iT
$.iT=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fU6(q));++v.f},
$S:0}
C.eeP.prototype={
$0(){var w=this.a
A.d.cv(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ehq.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cv(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eeL.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.d,new C.eeK(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eeK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehp.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.P(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eeB.prototype={
$0(){var w=this.a.r
return new B.ap(new B.ba(w,A.b0,A.aM),$.av())},
$S:263}
C.efc.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.ej7.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ej8.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aqv(w).fw()
v=u.UK(w)
v.srq(B.h3(A.bt,v.a.a.length))},
$S:9}
C.eix.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.VJ(v)
if(u!=null&&u.b===D.cP)w.UK(u).saT(0,u.r)}else w.w=null},
$S:0}
C.edy.prototype={
$0(){var w=C.cA(),v=this.a,u=C.ej(A.bf,!1,v.gpB().e.l(),A.aB,"",4280640491,24,A.bi,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.bc,4280172719,2,"Tap to edit text",0,0,"",D.ce,D.cP,0.7,0.15,0.2)
A.d.K(v.gdj().z,u)
v.r=u.a},
$S:0}
C.edv.prototype={
$0(){var w=C.cA(),v=this.a,u=C.ej(A.bf,!1,4279310375,A.aB,"",v.gpB().c.j(0.25).l(),24,A.bi,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpB().c.l(),2,"",0,0,"",D.ce,D.eW,0.25,0.3,0.3)
A.d.K(v.gdj().z,u)
v.r=u.a},
$S:0}
C.edl.prototype={
$0(){var w=C.ej(A.bf,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",0.55,C.cA(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.lb,0.6,0.2,0.18),v=this.a
A.d.K(v.gdj().z,w)
v.r=w.a},
$S:0}
C.edi.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bKS],x.p)
for(w=J.aU(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gah6().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bwA,r,r,r,r,new C.edh(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bp(!0,B.cL(q,r,r,r,r,A.ak,!0),!0,!1,A.ai,!0,!0)},
$S:34}
C.edh.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.edj.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cA(),u=this.b,t=A.R.am(u.ac(),null),s=C.ej(A.bf,!1,4279310375,A.aB,u.b,4280640491,24,A.bi,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.bc,4280172719,2,t,0,0,"",D.ce,D.a1N,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdj().z,s)
t.r=s.a},
$S:0}
C.eeN.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eeO.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.gdj().z,new C.eeM(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.av()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eeM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ee_.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cP)s.Q=t.c.l()
else if(w===D.eW){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ee0(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ee0.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ee4.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ee5(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdj()
if(t!=null)v.$1(t)}},
$S:0}
C.ee5.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ee2.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cP){s.Q=t.c
return}w=new C.ee3(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ee3.prototype={
$1(d){var w,v,u
for(w=A.d.gah(d.z),v=new B.hK(w,new C.ee1()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ee1.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.edZ.prototype={
$0(){return C.c9T(this.b,this.c,this.a.gpB())},
$S:0}
C.eh1.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ejg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ejh.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eji.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ejj.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bi(s,new C.ejf(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQy()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.wA()
t.IK()}},
$S:0}
C.ejf.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eiN.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9b(),s=w.b,r=u.a9c(A.f5,A.kI,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.B(B.a([B.D(u.aR4(w.c,A.aj),1),new B.C(A.fl,B.p(v,D.bwG,A.f,v,v,new B.o(A.f5.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aR4(s,A.f5),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a4(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bz,v,v,v),A.bu,u.aR7(A.f5,d,D.bsM,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bRv(A.aY,d,A.t9,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aR5(d,"Not now"))
return new C.Iw(B.v(p,A.ah,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eiM.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Iw(B.v(B.a([v.a9b(),A.P,v.a9c(A.aY,D.bss,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.d1(new B.aW(0,1/0,0,B.aH(d,A.bR,x.w).w.a.b*0.42),B.hH(w,new C.eiK(v,u,d),u.length,w,w,A.ak,new C.eiL(),!0),w),A.ay,v.aR5(d,"Cancel")],x.p),A.ah,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eiL.prototype={
$2(d,e){return A.S},
$S:36}
C.eiK.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.a1,!0,w,B.aJ(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aiH,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bHY,A.n),w,42,w,w,w,w,w,42),A.be,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.n2,w,w,w),A.d6,B.d("Updated "+this.a.Oe(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.et,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bz,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eiJ(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ac)},
$S:76}
C.eiJ.prototype={
$0(){B.a8(this.a,!1).M(this.b.a)
return null},
$S:0}
C.eiG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a9b()
t=t.a9c(A.aW,A.tg,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Iw(B.v(B.a([s,A.P,t,A.bu,B.B(B.a([B.D(B.dV(A.a5b,new C.eiE(d),B.db(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cd,u,new B.b6(B.m(14),A.Z),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bL(D.eUL,new C.eiF(d),B.bj(A.f5,u,u,u,A.c,u,A.cd,u,new B.b6(B.m(14),A.Z),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ah,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eiE.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eiF.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.eiI.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9b(),s=w.b,r=u.a9c(A.aS,A.es,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.arP("Names",""+w.c),1),A.ab,B.D(u.arP("Fields",""+w.d),1),A.ab,B.D(u.arP("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bj(A.bk,v,v,v,A.c,v,A.wy,v,new B.b6(B.m(14),A.Z),v,v,v)
return new C.Iw(B.v(B.a([t,A.P,r,A.aN,p,A.bu,B.bL(B.d("Open "+s,v,v,v,v,v,v,A.n1,v,v,v),new C.eiH(d),o),A.S,u.aR6(d,"Stay here",!1)],q),A.ah,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eiH.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.efG.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.efF.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eiy.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.ej6.prototype={
$1(d){var w=this.a,v=this.b
return new C.YI(A.d.dH(w.d,new C.ej4(v),new C.ej5(v)).hs(),w.f,null)},
$S:z+84}
C.ej4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ej5.prototype={
$0(){return this.a},
$S:z+85}
C.edq.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bz,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hg,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.byo,w,w,w,w,new C.edo(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eSU,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bzx,w,w,w,w,new C.edp(d),!1,w,w,w,w,w,D.fcp,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dj,w,w,w),w,w,w))
return B.bp(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ai,!0,!0)},
$S:34}
C.edo.prototype={
$0(){B.a8(this.a,!1).M("scroll")
return null},
$S:0}
C.edp.prototype={
$0(){B.a8(this.a,!1).M("split")
return null},
$S:0}
C.edr.prototype={
$0(){var w=this.b,v=w.c,u=C.ej(A.bf,!1,4279310375,A.aB,v,4280640491,24,A.bi,A.a4,"",0.84,C.cA(),w.b,"","",0,!1,"",0,D.bc,4280172719,2,v,0,0,"",D.ce,D.PI,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdj().z,u)
v.r=u.a},
$S:0}
C.eds.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iT
$.iT=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iT
$.iT=k+1
m.push(new C.eB(""+1000*l+"_"+k,D.PI,0.04,0.06,0.92,0.88,v,24,A.a4,A.bi,A.aB,4279310375,A.bf,u,D.bc,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ce,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lr(""+1000*p+"_"+o,r+n,"",D.pB,4294967295,null,D.dc,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.edw.prototype={
$0(){var w,v=C.cA(),u=this.a,t=u.e
t=(t==null?null:C.kj(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ej(A.bf,!1,4279310375,A.aB,t,4280640491,24,A.bi,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.kN,0.35,0.55,0.62)
A.d.K(u.gdj().z,w)
u.r=w.a},
$S:0}
C.edn.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aZf(o)
w=C.cA()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ej(A.bf,!1,4279310375,A.aB,"marriage_sign_placed_"+A.a.e3(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.kN,s,u,t)
A.d.K(p.gdj().z,q)
A.d.bo(p.gdj().z,new C.edm(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hMF(p)}},
$S:0}
C.edm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ehn.prototype={
$0(){var w=this.a,v=this.b
w.aZf(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eje.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.efJ.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bo(r.z,new C.efI())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.efI.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ee8.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ee9.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rK()},
$S:9}
C.edk.prototype={
$0(){var w=C.ej(A.bf,!1,4279310375,A.aB,"HD Photo",4280640491,24,A.bi,A.a4,"",0.8,C.cA(),this.b,"","",0,!1,"",0,D.bc,4280172719,2,"",0,0,"",D.ce,D.lb,0.8,0.1,0.1),v=this.a
A.d.K(v.gdj().z,w)
v.r=w.a},
$S:0}
C.efa.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.edt.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdj().z,v)
w.r=v.a},
$S:0}
C.edC.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.edD.prototype={
$0(){var w=this.b.hs(),v=C.cA(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ej(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdj().z,f)
t.r=f.a},
$S:0}
C.edE.prototype={
$0(){var w=this.a.gdj().z,v=this.b,u=A.d.bi(w,new C.edB(v))
if(u>=0&&u<w.length-1){A.d.cv(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.edB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.edP.prototype={
$0(){var w=this.a.gdj().z,v=this.b,u=A.d.bi(w,new C.edA(v))
if(u>0){A.d.cv(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.edA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.edS.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.edT.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.edU.prototype={
$0(){return this.a.as=A.dJ},
$S:0}
C.edV.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.edW.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.edX.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.edY.prototype={
$1(d){return d.length!==0},
$S:3}
C.edF.prototype={
$0(){var w=this.a,v=w.gdj().z,u=C.cA()
A.d.K(v,C.BV(w.gpB().c.j(0.18).l(),0.1,u,D.bc,0,2,1,0,0))
u=w.gdj().z
v=C.cA()
A.d.K(u,C.iN(A.bf,!1,w.gpB().d.l(),A.aB,18,A.bi,A.I,0.07,v,"Document Header",0,D.dc,0.9,0.05,0.02))},
$S:0}
C.edG.prototype={
$0(){var w,v=this.a,u=v.gdj().z,t=C.cA()
A.d.K(u,C.BV(v.gpB().c.j(0.12).l(),0.1,t,D.bc,0,2,1,0,0.9))
t=v.gdj().z
u=C.cA()
w=C.bzl()
A.d.K(t,C.iN(A.L,!1,v.gpB().e.l(),A.aB,12,A.bi,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dc,0.9,0.05,0.92))},
$S:0}
C.edH.prototype={
$0(){A.d.K(this.a.gdj().z,C.BV(1727914055,0.12,C.cA(),D.bc,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.edI.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdj().z,C.BV(w,0.08,C.cA(),D.bc,w,2,0.5,0.2,0.4))},
$S:0}
C.edJ.prototype={
$0(){var w=this.a,v=w.gdj().z,u=C.cA()
A.d.K(v,C.BV(w.gpB().c.j(0.35).l(),0.12,u,D.Bu,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdj().z,C.iN(A.bf,!1,4279310375,A.aB,18,A.bi,A.a4,0.15,C.cA(),"Important note",0,D.pC,0.5,0.38,0.52))},
$S:0}
C.edK.prototype={
$0(){var w=this.a
A.d.K(w.gdj().z,C.BV(4294507260,0.78,C.cA(),D.bc,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdj().z,C.iN(A.bf,!1,4279179050,A.aB,16,A.bi,A.a4,0.7,C.cA(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bzl()+"\n\nSubject:\n\nBody text\u2026",0,D.dc,0.76,0.12,0.14))},
$S:0}
C.edL.prototype={
$0(){var w=this.a
A.d.K(w.gdj().z,C.BV(4294897802,0.28,C.cA(),D.bc,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdj().z,C.iN(A.bf,!1,4285611794,A.aB,15,A.bi,A.a4,0.24,C.cA(),"Sticky note",0,D.aB6,0.26,0.64,0.14))},
$S:0}
C.edM.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdj().z,C.BV(4293060848,0.04,C.cA(),D.bc,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdj().z,C.BV(w,0.04,C.cA(),D.bc,w,2,0.55,0.1,0.48))},
$S:0}
C.edN.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdj().z,C.iN(A.bf,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cA(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Gw,0.42,0.06,0.18))
A.d.K(v.gdj().z,C.iN(A.bf,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cA(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tv,0.42,0.52,0.18))},
$S:0}
C.edO.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdj().z,C.BV(858088427,0.62,C.cA(),D.bc,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdj().z,C.BV(856004201,0.62,C.cA(),D.bc,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdj().z,C.iN(A.bf,!1,w,A.aB,20,A.bi,A.I,0.1,C.cA(),"Option A",0,D.dc,0.36,0.08,0.2))
A.d.K(v.gdj().z,C.iN(A.bf,!1,w,A.aB,20,A.bi,A.I,0.1,C.cA(),"Option B",0,D.dc,0.36,0.56,0.2))},
$S:0}
C.edQ.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdj().z,C.BV(4294967295,0.36,C.cA(),D.bc,w,2,0.24,0.38,0.28))
A.d.K(v.gdj().z,C.iN(A.L,!1,w,A.aB,14,A.bi,A.a4,0.12,C.cA(),"[ QR CODE ]",0,D.dc,0.24,0.38,0.4))},
$S:0}
C.edR.prototype={
$0(){return C.c9T(this.b,D.PJ,this.a.gpB())},
$S:0}
C.ef9.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a3s.t(0,d),t=this.a
return t.b33(d,v===d,A.aX,this.c,new C.ef8(t,u,d,w),u)},
$S:z+25}
C.ef8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bA7(r,new C.ef7(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ef7.prototype={
$0(){return this.a.cZ(new C.ef6(this.b,this.c))},
$S:0}
C.ef6.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.edu.prototype={
$0(){var w,v=this.a,u=v.gpB(),t=C.qZ(4294967295,null,0,0,null,C.cA(),D.mh,"","","",D.dc),s=this.b
C.c9T(t,s,u)
w=v.gdj()
if(w!=null&&s!==D.Bt){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eec.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hSz(p,q.d,s,new C.eeb(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rK(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeb.prototype={
$1(d){return this.bfl(d)},
bfl(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eea(t,d))
w=2
return B.b(t.rK(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eea.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eed.prototype={
$0(){return this.a.bCP()},
$S:0}
C.eee.prototype={
$0(){return this.a.aMw("Class Presentation",!0)},
$S:0}
C.eef.prototype={
$1(d){return this.a.bDL(d.b,this.b,d.a)},
$S:z+88}
C.eeQ.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bR,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eh0.prototype={
$1(d){return new B.C(new B.N(0,0,0,B.aH(d,A.eA,x.w).w.f.d),new B.e6(new C.eh_(this.a,this.b),null),null)},
$S:58}
C.eh_.prototype={
$2(d,e){return B.or(new C.egZ(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:620}
C.egZ.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.H(u?A.bH:A.aK,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.ba,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.adv,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bI(!1,A.yC,v,v,!0,v,v,new C.egX(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cL(B.a([p.aP8(u,!0,!0,new C.egY(p,w.d))],q),e,D.bgW,v,v,A.ak,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.ko,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.egX.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.egY.prototype={
$0(){this.b.$1(new C.egV())
var w=this.a
if(w.c!=null)w.m(new C.egW())},
$S:0}
C.egV.prototype={
$0(){},
$S:0}
C.egW.prototype={
$0(){},
$S:0}
C.eiz.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.eiA.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.d9(B.e7(A.A,new C.awl(this.a,null),0.94+w*0.06,null,null),w)},
$S:422}
C.eiB.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.eiC.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.d9(B.e7(A.A,new C.b9L(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:422}
C.eiD.prototype={
$0(){return A.d.ck(this.a.d,0,C.Ue(this.b))},
$S:0}
C.edz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.au(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.oX.j(0.75)],t)
r=B.H(A.bd.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bd.j(0.35+q),A.c7.j(0.18),A.K],t)
q=B.H(A.bd.j(0.45+q),A.r,1)
t=B.p(p,B.W(A_.Xz,u?A.ag:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bt(o,B.ts(A.fq,B.p(p,B.v(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.aj,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a4(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.ap)},
$S:295}
C.eeE.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eeF.prototype={
$1(d){return d.length!==0},
$S:3}
C.eeG.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k8
else{w=B.ae("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Y6:A.Aj}return w},
$S:689}
C.eeJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dH.au(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mv.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kj(v.w)?A.uH:A.pp,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a4(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Oe(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Oe(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Oe(v.f)
r=k.bDJ(n,A.d.gL(r),t)
return B.p(l,B.bt(j,new B.a61(B.aD(!1,A.a1,!0,l,B.aJ(!1,l,!0,B.p(l,B.dL(!1,A.Kn,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.W(A.ny,t?A.aA:A.bI,l,l,l,l),l,l,l,new C.eeH(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a4(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eeI(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:93}
C.eeI.prototype={
$0(){return this.a.acv(this.b)},
$S:0}
C.eeH.prototype={
$0(){return this.a.zR(this.b,this.c)},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
w.b1K()
w.m(new C.eg8())},
$S:0}
C.eg8.prototype={
$0(){},
$S:0}
C.ega.prototype={
$1(d){return this.a.agw(this.b.a,d)},
$S:2}
C.egb.prototype={
$0(){this.a.cZ(new C.eg7(this.b))},
$S:0}
C.eg7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.egc.prototype={
$0(){this.a.cZ(new C.eg6(this.b))},
$S:0}
C.eg6.prototype={
$0(){var w=this.a
return w.y=w.y===A.cA?A.bi:A.cA},
$S:0}
C.egd.prototype={
$0(){this.a.cZ(new C.eg5(this.b))},
$S:0}
C.eg5.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mm},
$S:0}
C.ege.prototype={
$0(){this.a.cZ(new C.eg4(this.b))},
$S:0}
C.eg4.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.egf.prototype={
$0(){var w=this.a
w.cZ(new C.eg3(w,this.b))},
$S:0}
C.eg3.prototype={
$0(){var w=this.b
return w.as=this.a.bY_(w.as)},
$S:0}
C.egg.prototype={
$0(){return this.a.cZ(new C.eg2(this.b))},
$S:0}
C.eg2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.egh.prototype={
$0(){return this.a.cZ(new C.eg1(this.b))},
$S:0}
C.eg1.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.efV.prototype={
$0(){return this.a.a00(this.b.a)},
$S:0}
C.efW.prototype={
$0(){this.a.YC()
return null},
$S:0}
C.efX.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bR,x.w).w.a.a<900)w.acO()
else w.m(new C.efU(w))},
$S:0}
C.efU.prototype={
$0(){return this.a.as=!0},
$S:0}
C.efY.prototype={
$0(){this.a.cZ(new C.efT(this.b))},
$S:0}
C.efT.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.efZ.prototype={
$0(){return this.a.cZ(new C.efS(this.b))},
$S:0}
C.efS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eg_.prototype={
$0(){return this.a.cZ(new C.efR(this.b))},
$S:0}
C.efR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eg0.prototype={
$0(){return this.a.awB(null)},
$S:0}
C.ef2.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.ef3.prototype={
$0(){this.a.a7L()
return null},
$S:0}
C.ef5.prototype={
$1(d){return this.bfm(d)},
bfm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.IB(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c1(A.az,null,new C.eeY(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.eeZ(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.ef_(r))
s=s.c.I(x.q).f
s.P(B.b1(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.ef0(r))
s=s.c.I(x.q).f
s.P(B.b1(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h6R(q,new C.Dr(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.ef1(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aeL(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b1(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:89}
C.eeY.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dRv],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.byv:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eeX(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.dj,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bp(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ai,!0,!0)},
$S:34}
C.eeX.prototype={
$0(){B.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.eeZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ef_.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ef0.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ef1.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ef4.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yS(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yS(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yS(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aeL(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dWf,q,v,u,B.yS(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:140}
C.ejk.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bzi(w,v)}},
$S:0}
C.ejl.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.egk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bHS:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aP:A.bv
return new B.C(A.hn,B.aG(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b9,new B.o(w,u,u,r,u,q,A.n),A.eK,u,u,u,A.lu,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.egj(t,d),u,u,u,u,u,u,!1,A.ad),u)},
$S:129}
C.egj.prototype={
$0(){var w=this.a
return w.m(new C.egi(w,this.b))},
$S:0}
C.egi.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.egl.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_U:E.arV
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbH0():t.gbD9()
return B.hs(B.aG(u,B.p(u,D.ai9,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a4(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ad),u,s,u,u)},
$S:1704}
C.egm.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hRP(v,w.a.c)},
$S:0}
C.ehJ.prototype={
$0(){return this.b.uo(this.a.a)},
$S:0}
C.ehK.prototype={
$0(){return this.a.uo(D.mh)},
$S:0}
C.ehL.prototype={
$0(){return this.a.uo(D.Gu)},
$S:0}
C.ehW.prototype={
$0(){return this.a.uo(D.Gv)},
$S:0}
C.ei6.prototype={
$0(){return this.a.uo(D.Gt)},
$S:0}
C.eih.prototype={
$0(){return this.a.pm("lab_report")},
$S:0}
C.eio.prototype={
$0(){return this.a.pm("rubric")},
$S:0}
C.eip.prototype={
$0(){return this.a.pm("minutes")},
$S:0}
C.eiq.prototype={
$0(){return this.a.pm("agenda")},
$S:0}
C.eir.prototype={
$0(){return this.a.pm("timeline")},
$S:0}
C.eis.prototype={
$0(){return this.a.pm(this.b.a)},
$S:0}
C.ehM.prototype={
$0(){this.a.TU()
return null},
$S:0}
C.ehN.prototype={
$0(){this.a.TO()
return null},
$S:0}
C.ehO.prototype={
$0(){return this.a.pm("table")},
$S:0}
C.ehP.prototype={
$0(){return this.a.pm("sticky")},
$S:0}
C.ehQ.prototype={
$0(){return this.a.pm("divider")},
$S:0}
C.ehR.prototype={
$0(){return this.a.pm("header_bar")},
$S:0}
C.ehS.prototype={
$0(){return this.a.on(D.bc)},
$S:0}
C.ehT.prototype={
$0(){return this.a.on(D.eG)},
$S:0}
C.ehU.prototype={
$0(){return this.a.on(D.jt)},
$S:0}
C.ehV.prototype={
$0(){return this.a.on(D.Bu)},
$S:0}
C.ehX.prototype={
$0(){return this.a.on(D.ju)},
$S:0}
C.ehY.prototype={
$0(){return this.a.on(D.kO)},
$S:0}
C.ehZ.prototype={
$0(){return this.a.on(D.fm)},
$S:0}
C.ei_.prototype={
$0(){this.a.G2()
return null},
$S:0}
C.ei0.prototype={
$0(){this.a.LP()
return null},
$S:0}
C.ei1.prototype={
$0(){return this.a.pm("quote")},
$S:0}
C.ei2.prototype={
$0(){return this.a.a5U()},
$S:0}
C.ei3.prototype={
$0(){this.a.YH()
return null},
$S:0}
C.ei4.prototype={
$0(){var w=this.a
return w.m(new C.ehz(w))},
$S:0}
C.ehz.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ei5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nw(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ehH(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehH.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ei7.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jo()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a3t.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.ba
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a4(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a3t.t(0,q))u.push(B.an(s,B.p(s,D.M_,A.f,s,s,D.CJ,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hn,B.aG(s,B.hs(new B.am(A.X,s,A.a9,A.f,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ehG(r,d),s,s,s,s,s,s,!1,A.ad),s)},
$S:z+89}
C.ehG.prototype={
$0(){this.a.a6b(this.b)
return null},
$S:0}
C.ei8.prototype={
$0(){this.a.a6a(this.b)
return null},
$S:0}
C.ei9.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.ho6(d),p=this.a,o=B.m(8),n=p.gdj()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.ba
v=p.gdj()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qZ(4294967295,r,0,0,r,"preview_"+w,D.pB,"","","",D.dc)
C.h3O(s,w)
w=x.p
u=B.a([B.bt(o,B.p(r,B.bt(t,C.h57(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.aiI,A.f,r,r,D.CJ,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.kz,B.aG(r,B.v(B.a([new B.am(A.X,r,A.a9,A.q,u,r),A.d6,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.aj,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ehF(p,q,d),r,r,r,r,r,r,!1,A.ad),r)},
$S:z+90}
C.ehF.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdj()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nw(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cZ(new C.ehv(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehv.prototype={
$0(){return C.h3O(this.a,this.b.a)},
$S:0}
C.ehI.prototype={
bfn(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a3s.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfn(d,e)},
$S:z+91}
C.eit.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("J<1,r>")
v=B.A(new B.J(d,new C.eiv(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ch(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ)},
$S:z+92}
C.eiv.prototype={
$1(d){var w=this
return w.a.b33(d,w.b===d,w.c,w.d,new C.eiu(w.e,d),!D.a3s.t(0,d))},
$S:z+25}
C.eiu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eia.prototype={
$1(d){this.b.$2(d,new C.ehE(this.a,d,this.c))
return null},
$S:z+26}
C.ehE.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bA7(u,new C.ehu(v,this.c,w),w)},
$S:0}
C.ehu.prototype={
$0(){return this.a.cZ(new C.ehs(this.b,this.c))},
$S:0}
C.ehs.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eib.prototype={
$1(d){this.b.$2(d,new C.ehD(this.a,d))
return null},
$S:z+26}
C.ehD.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fyK(u,new C.eht(v,w),w)},
$S:0}
C.eht.prototype={
$0(){var w=this.a
return w.cZ(new C.ehr(w,this.b))},
$S:0}
C.ehr.prototype={
$0(){return this.a.gdj().r=this.b},
$S:0}
C.eic.prototype={
$0(){var w=this.a
return w.m(new C.ehC(w))},
$S:0}
C.ehC.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eid.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bzi(w,v)}},
$S:0}
C.eie.prototype={
$0(){this.a.GP()
return null},
$S:0}
C.eif.prototype={
$0(){return this.a.a5U()},
$S:0}
C.eig.prototype={
$0(){var w=this.a,v=w.jo()
if(v!=null&&v.b===D.cP)w.cZ(new C.ehB(v))},
$S:0}
C.ehB.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eii.prototype={
$0(){this.a.Cr()
return null},
$S:0}
C.eij.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.E4(v,!0)
return null},
$S:0}
C.eik.prototype={
$0(){this.a.cZ(new C.ehA(this.b))},
$S:0}
C.ehA.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cq:A.O},
$S:0}
C.eil.prototype={
$0(){this.a.cZ(new C.ehy(this.b))},
$S:0}
C.ehy.prototype={
$0(){var w=this.a
return w.y=w.y===A.cA?A.bi:A.cA},
$S:0}
C.eim.prototype={
$0(){this.a.cZ(new C.ehx(this.b))},
$S:0}
C.ehx.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mm},
$S:0}
C.ein.prototype={
$0(){this.a.cZ(new C.ehw(this.b))},
$S:0}
C.ehw.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ee7.prototype={
$1(d){return this.bfk(d)},
bfk(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nw(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cZ(new C.ee6(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:192}
C.ee6.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eiQ.prototype={
$0(){var w=this.a
return w.cZ(new C.eiP(w,this.b))},
$S:0}
C.eiP.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eiR.prototype={
$0(){var w=this.a
return w.cZ(new C.eiO(w,this.b))},
$S:0}
C.eiO.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eff.prototype={
$0(){return this.a.cZ(new C.efe(this.b))},
$S:0}
C.efe.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.efg.prototype={
$0(){return this.a.cZ(new C.efd(this.b))},
$S:0}
C.efd.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.efN.prototype={
$1(d){var w=x.gh
w=B.A(new B.J(D.akn,new C.efM(),w),w.k("ai.E"))
return w},
$S:z+94}
C.efM.prototype={
$1(d){var w=null
return B.yS(B.d(d.b,w,w,w,w,w,w,A.mo,w,w,w),48,d,x.fO)},
$S:z+95}
C.ej2.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a3(v,w?8:0,null,null)},
$S:36}
C.ej1.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jK()?q:new C.ej_(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.ba:A.cl
v=B.H(v,A.r,o?2:1)
u=r.d?A.cz:A.c
t=B.bX(0,C.h57(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aG(q,B.p(q,new B.am(A.X,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.n0,q,q,q),A.f,q,q,new B.o(A.aU,q,q,s,q,q,A.n),q,q,q,q,A.aem,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ej0(p,e),q,q,q,q,q,q,!1,A.ad)},
$S:72}
C.ej0.prototype={
$0(){var w=this.a
return w.m(new C.eiW(w,this.b))},
$S:0}
C.eiW.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IK()},
$S:0}
C.ej_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c1(null,null,new C.eiX(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eiY(q,s))
q.aNU()}else if(r==="del"){q=t.a
q.m(new C.eiZ(q,s))
q.aN6()}else if(r==="up")t.a.aZs(s,s-1)
else if(r==="down")t.a.aZs(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eiX.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bA8,w,w,w,w,new C.eiS(d),!1,w,w,w,w,w,w,w,D.eTM,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bA1,w,w,w,w,new C.eiT(d),!1,w,w,w,w,w,w,w,A.vv,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bzj,w,w,w,w,new C.eiU(d),!1,w,w,w,w,w,w,w,D.f0i,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bBk,w,w,w,w,new C.eiV(d),!1,w,w,w,w,w,w,w,D.eTB,w,w,w))
return B.bp(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ai,!0,!0)},
$S:34}
C.eiS.prototype={
$0(){B.a8(this.a,!1).M("dup")
return null},
$S:0}
C.eiT.prototype={
$0(){B.a8(this.a,!1).M("del")
return null},
$S:0}
C.eiU.prototype={
$0(){B.a8(this.a,!1).M("up")
return null},
$S:0}
C.eiV.prototype={
$0(){B.a8(this.a,!1).M("down")
return null},
$S:0}
C.eiY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eiZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ej3.prototype={
$0(){return this.a.a5U()},
$S:0}
C.eex.prototype={
$0(){var w=this.a
w.b1K()
w.awB(null)},
$S:0}
C.eew.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.aZ(m.e)
v=m.f
v.toString
v=new B.a4(A.ax,A.aC,A.x,B.a([w,B.aZ(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aZ(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aZ(m.e)
q=m.f
q.toString
q=new B.a4(A.ax,A.aC,A.x,B.a([r,B.aZ(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bt(s,B.bV(A.kh,new B.o(m.f==null?B.aZ(m.e):p,p,p,p,p,r,A.n),A.bb),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.eev(this.a,e.b,e.d,q),B.U(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bV(new B.am(A.X,p,A.a9,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bb)},
$S:444}
C.eev.prototype={
$1(d){var w=this
return w.a.bz8(d,w.b,w.c,w.d)},
$S:z+23}
C.eek.prototype={
$0(){var w=this
if(w.b){w.a.LY(w.c)
return}if(w.d){w.a.a5S(w.c)
return}if(w.e){w.a.ae7(w.c)
return}if(w.f)w.a.b2f(w.c)},
$S:0}
C.eel.prototype={
$0(){this.a.LY(this.b)
return null},
$S:0}
C.eem.prototype={
$0(){return this.a.a00(this.b.a)},
$S:0}
C.een.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eej(u,d,w.c,w.d))
v.Gt()
v.nD()
v.oC()},
$S:18}
C.eej.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eeo.prototype={
$1(d){return this.a.agw(this.b.a,d)},
$S:2}
C.eeq.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fK3(w))u.a.LY(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b2f(v)},
$S:0}
C.eep.prototype={
$0(){return this.a.a00(this.b.a)},
$S:0}
C.eer.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eei(w.b,d,w.c,w.d))
v.Gt()
v.nD()
v.oC()},
$S:18}
C.eei.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cP)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ees.prototype={
$1(d){var w=this.a
w.m(new C.eeh(this.b,d))
w.Gt()
w.nD()
w.oC()},
$S:250}
C.eeh.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cP)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eet.prototype={
$0(){var w=this.a
w.m(new C.eeg(this.b))
w.Gt()
w.nD()
w.oC()},
$S:0}
C.eeg.prototype={
$0(){this.a.r=C.h4D()},
$S:0}
C.eeu.prototype={
$0(){return this.a.a00(this.b.a)},
$S:0}
C.ego.prototype={
$0(){var w=this.a
return w.m(new C.egn(w))},
$S:0}
C.egn.prototype={
$0(){return this.a.y=!1},
$S:0}
C.egp.prototype={
$1(d){return this.a.cu9(this.b.a,d)},
$S:2}
C.eft.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.efu.prototype={
$1(d){return this.a.$1(new C.efs(this.b,d))},
$S:6}
C.efs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.efv.prototype={
$1(d){return this.a.$1(new C.efr(this.b,d))},
$S:6}
C.efr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.efw.prototype={
$1(d){return this.a.$1(new C.efq(this.b,d))},
$S:6}
C.efq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.efx.prototype={
$1(d){return this.a.$1(new C.efp(this.b,d))},
$S:6}
C.efp.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.efy.prototype={
$1(d){return this.a.$1(new C.efo(this.b,d))},
$S:6}
C.efo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.efz.prototype={
$1(d){return this.b.$1(new C.efn(this.a,this.c))},
$S:8}
C.efn.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.efA.prototype={
$1(d){return this.b.$1(new C.efm(this.a,this.c))},
$S:8}
C.efm.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.efB.prototype={
$1(d){var w=null,v=this.b,u=B.aZ(d),t=v.Q===d,s=t?A.bk:A.cU
return B.aG(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.efl(this.a,v,d),w,w,w,w,w,w,!1,A.ad)},
$S:446}
C.efl.prototype={
$0(){return this.a.$1(new C.efi(this.b,this.c))},
$S:0}
C.efi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.efC.prototype={
$1(d){return this.a.$1(new C.efk(this.b,d))},
$S:1705}
C.efk.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.efD.prototype={
$1(d){var w=null
return B.aG(w,B.p(w,w,A.f,w,w,new B.o(B.aZ(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.efj(this.a,this.b,d),w,w,w,w,w,w,!1,A.ad)},
$S:446}
C.efj.prototype={
$0(){return this.a.$1(new C.efh(this.b,this.c))},
$S:0}
C.efh.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.efE.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a8(w,!1).oQ()}else w=!1
if(w){w=v.a.c
w.toString
B.a8(w,!1).eD()}v.a.apv()},
$S:0}
C.efH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dH.au(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.bd,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.W(A.tg,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mL,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.a1,!0,n,B.aJ(!1,m,!0,B.es(new B.a3(48,48,new B.am(A.A,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a4(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ac)},
$S:131}
C.edg.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.au(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.bd,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.a1,!0,p,B.aJ(!1,o,!0,B.es(B.v(B.a([B.e7(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.aa,B.d(q.e,p,p,p,p,p,p,A.jU,A.L,p,p)],x.p),A.m,p,A.b8,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a4(A.ax,A.aC,A.x,u,p,p),A.n),p,A.E3,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ac)},
$S:131}
C.ehl.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.ajx,A.z,!0,w,!0,w,!1,w,A.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.en(B.a([B.bI(!1,A.dd,w,w,!0,w,w,new C.ehj(d),w,w),B.bL(A.oJ,new C.ehk(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.ehj.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ehk.prototype={
$0(){var w=this.b.a.a
B.a8(this.a,!1).M(w)
return null},
$S:0}
C.cWc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dH.au(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.eq.au(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.au(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS).j(0.18+w*0.12),A.J,32+w*10),D.a7J],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b1,0.9,A.x,k,0,B.a([A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gaj(C.kj(j.a.c.w)?D.tn:M.mS).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kj(m)?D.tn:M.mS
s=B.a([new B.ab(0,A.G,A.d.gL(C.kj(m)?D.tn:M.mS).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e7(A.A,B.p(k,B.W(C.kj(j.a.c.w)?A.uH:A.pp,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a4(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.A,k,A.a9,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h7,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eMh,A.L,k,k),A.av,B.d(j.gcpk(),k,k,k,k,k,k,D.eQI,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQy()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kj(j.a.c.w)?D.tn:M.mS).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.aa],m))}s.push(new C.Ip(A.wZ,"Download PDF","pdf",A.d5,j.HD(0),!1,k))
p=j.a.c
if(!p.z||p.gQy()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ip(A.kI,"Transfer to "+C.h4F(p==null?"":p),"transfer_hati",A.aS,j.HD(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.HD(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.Ip(D.brQ,"Rename presentation","rename",A.c7,n,!1,k),A.ar,new C.Ip(A.afX,"Duplicate","duplicate",A.b2,j.HD(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ip(A.e8,"Delete presentation","delete",A.aE,j.HD(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.HD(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.HD(n)
s.push(B.dQ(B.d9(B.bI(!1,E.aLK,k,k,!0,k,k,new C.cWb(d),k,B.fr(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bk1,k,k,k,k,k,A.kb,k,k)),n),new B.u(0,(1-p)*8)))
return B.e7(A.A,B.d9(B.aD(!1,A.a1,!0,k,B.p(k,B.bt(q,new B.am(A.X,k,A.a9,A.q,B.a([o,new B.C(D.bja,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.ap),A.f,k,A.T2,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cWb.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.cWy.prototype={
$0(){B.a8(this.a,!1).M(!1)
return null},
$S:0}
C.cWz.prototype={
$0(){B.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cW9.prototype={
$1(d){var w=this.a
return w.m(new C.cW5(w))},
$S:23}
C.cW5.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cWa.prototype={
$1(d){var w=this.a
return w.m(new C.cW4(w))},
$S:51}
C.cW4.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cW8.prototype={
$0(){var w=this.a
return w.m(new C.cW6(w))},
$S:0}
C.cW6.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cW7.prototype={
$0(){var w=this.a.a.e
B.a8(this.b,!1).M(w)
return null},
$S:0}
C.ek0.prototype={
$0(){return $.bhb=!$.bhb},
$S:0}
C.ejR.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQY())u.ati()},
$S:0}
C.ek_.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ejS.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ejT.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ati()},
$S:0}
C.ejN.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.ejO.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ejP.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ejQ.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.ejY.prototype={
$2(d,e){var w=B.A(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.ejZ.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hN)return new B.cU(e,!1,d,null)
w=this.a
return w.cnr(w.e,d,e)},
$S:420}
C.ejU.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fm((1-v.gp(0))*1.5708)
return B.fn(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:44}
C.ejV.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jz((1-v.gp(0))*1.5708)
return B.fn(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:44}
C.ejW.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fm(v.gp(0)*0.8)
w.jz(v.gp(0)*0.35)
return B.fn(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:44}
C.ejX.prototype={
$2(d,e){var w=B.di(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fm(-v.gp(0)*1.2)
return B.fn(A.a7,B.d9(e,v.gp(0)),null,w,!0)},
$S:44}
C.ek1.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWX().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWX().x
t===$&&B.c()
return new C.aZ8(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ho(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:674}
C.ek3.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bR,x.w).w.a.a*0.55)w.ati()
else w.cch()},
$S:51}
C.ek2.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fpn.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:409}
C.fpw.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.en(B.a([B.bI(!1,A.dd,w,w,!0,w,w,new C.fpt(d),w,w),B.bI(!1,D.f74,w,w,!0,w,w,new C.fpu(d,this.b,v),w,w),B.bL(A.aM0,new C.fpv(d,v,this.c),w)],x.p),w,w,L.rB,new B.a3(320,w,t,w),w,w,w,w,D.f8p,w)},
$S:20}
C.fpt.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.fpu.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
C.fKI(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fpv.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a8(u.a,!1).M(null)
t=u.b
w=2
return B.b(C.aNd(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aMD(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fpm.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c9W.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:586}
C.fps.prototype={
$1(d){return d.ac()},
$S:z+14}
C.f_9.prototype={
$1(d){return C.fKG(C.Ue(B.a_(d,x.N,x.z)),this.a)},
$S:z+96}
C.fy_.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:91}
C.fy0.prototype={
$4(d,e,f,g){var w=A.cp.au(0,e.gp(0))
return B.d9(B.e7(A.A,D.fkX,0.94+w*0.06,null,null),w)},
$S:422}
C.fy1.prototype={
$1(d){var w=this
return new C.Ug(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ejx.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ejt.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ejw.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Uh(u,this.b,w.gaKt(),v,null)},
$S:z+99}
C.eju.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ejv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ejy.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ejz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ejC.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ejD.prototype={
$0(){var w=this.a
return w.m(new C.ejB(w))},
$S:0}
C.ejB.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ejE.prototype={
$0(){var w=this.a
return w.m(new C.ejA(w))},
$S:0}
C.ejA.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ejF.prototype={
$1(d){return this.a.bDK(d,this.b)},
$S:z+100}
C.ejs.prototype={
$0(){var w=this.a
return w.m(new C.ejr(w,this.b))},
$S:0}
C.ejr.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ejG.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ejH.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ejI.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ejJ.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ejK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fE(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.P(D.ezf)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eda.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ed9())},
$S:0}
C.ed9.prototype={
$0(){},
$S:0}
C.edb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:9}
C.ed6.prototype={
$1(d){return this.a.m(new C.ed5())},
$S:2}
C.ed5.prototype={
$0(){},
$S:0}
C.ed7.prototype={
$1(d){return this.a.aVr()},
$S:2}
C.ed8.prototype={
$0(){B.a8(this.a,!1).M(null)
return null},
$S:0}
C.ejM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pc(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ejL(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ejL.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fjG.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.er(new B.k4(this.c,new C.fjF(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fjF.prototype={
$3(d,e,f){return new C.Ho(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fjH.prototype={
$1(d){var w=null
return B.o_(!1,B.au(new C.brw(this.a,this.b,w),w,w,w),w,x.z)},
$S:314}
C.fjL.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gm5(),$async$$0)
case 3:w=4
return B.b(B.bN(A.pc,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gm5(),$async$$0)
case 5:s=$.aT.ag$.x.h(0,t.a)
r=s==null?null:s.gb6()
if(!(r instanceof B.q7))throw B.R("Could not draw the slide.")
u=r.lQ(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fjM.prototype={
bfT(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fP),$async$$1)
case 3:r=f
if(r==null)throw B.R("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hE([J.f6(A.dD.gaN(r))],"image/png"))
t.toString
s=Aj.fBL(t)
w=4
return B.b(new B.pA(s,"load",!1,x.ev).gL(0).cK(0,A.kv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bfT(d)},
$S:1710}
C.fjI.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:150}
C.fjJ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fD(0)},
$S:150}
C.fjK.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eUw.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eIX,A.L,w,w)},
$S:1711}
C.eUx.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bt(v,B.m5(A.bj,w,A.dM,8,w,e===0?w:e,w),A.ap)},
$S:606}
C.e3I.prototype={
$1(d){this.a.Y3()
return null},
$S:13}
C.e3G.prototype={
$0(){return this.a.e=D.bf8},
$S:0}
C.e3H.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.ccu.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.ccv.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aJf.prototype
w.bqn=w.q
w=C.aIJ.prototype
w.bpQ=w.q
w=C.aIu.prototype
w.bpA=w.q
w=C.aII.prototype
w.bpP=w.q
w=C.aJd.prototype
w.bql=w.q
w=C.aKx.prototype
w.brP=w.q
w=C.aHp.prototype
w.bos=w.q
w=C.aJr.prototype
w.bqz=w.q
w=C.aJs.prototype
w.bqA=w.q
w=C.b_P.prototype
w.bl6=w.azy})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hPM","alh",104)
v(C.aGo.prototype,"gbYk","X3",0)
var r
u(r=C.av9.prototype,"gcoG","coH",38)
v(r,"gbZ5","aaV",0)
v(r=C.av5.prototype,"gaUf","CU",3)
v(r,"gbZ2","bZ3",3)
v(r,"gatA","wO",0)
v(r,"gatB","Hm",0)
t(C,"hQa","hlS",105)
v(C.aB8.prototype,"gc00","c01",3)
s(C,"hQl",0,null,["$4$paper$photo$request$template"],["fqM"],106,0)
s(C,"hQk",0,null,["$5$doc$history$instruction$photo$template"],["byB"],107,0)
v(r=C.aBr.prototype,"gc0H","HA",0)
v(r,"gbDc","UW",0)
v(r,"gc0K","abE",0)
v(r,"gc0J","XQ",0)
v(r,"gaV6","Da",0)
v(C.aBv.prototype,"gc0P","XS",0)
v(r=C.aCO.prototype,"gaVj","Oa",0)
v(r,"gcgX","aZy",3)
v(r,"gcq3","axQ",86)
v(r,"gbGR","a7P",0)
v(r,"gc1f","zu",0)
v(r=C.aEI.prototype,"gcb4","Za",0)
v(r,"gcbc","Zd",0)
v(r,"gbwh","a6h",0)
v(r,"gc1j","abQ",0)
v(C.aEH.prototype,"gc1k","abR",0)
v(C.ayN.prototype,"gbvg","a64",0)
v(C.axc.prototype,"gc1l","Y2",0)
w(C,"hQy","hOt",12)
w(C,"hQw","hLq",12)
w(C,"hQx","hNt",12)
v(r=C.aBI.prototype,"gct4","ct5",3)
v(r,"gcfd","cfe",3)
u(r,"gDg","acv",7)
v(r,"gbAQ","aoG",3)
u(r,"gDh","aWA",7)
v(r,"gc3s","acc",0)
v(r,"gc2j","acb",0)
v(r,"gc5B","acw",0)
v(r,"gbD9","a7q",0)
v(r,"gc6t","YC",0)
v(r,"gc6u","acN",0)
v(r,"gc7_","acU",0)
v(r,"gc5O","acz",0)
v(r,"gbH0","a7T",0)
v(r,"gaNT","aNU",3)
v(r,"gaN5","aN6",3)
v(r,"gaIO","aIP",3)
v(r,"gaN4","apv",3)
u(r,"gbvx","bvy",80)
v(r,"gaxp","b1x",3)
v(r,"gc2l","c2m",3)
v(r,"gbRP","bRQ",3)
v(r,"gbFA","bFB",3)
v(r=C.aBL.prototype,"gcs0","cs1",3)
v(r,"gcrG","crH",3)
t(C,"hQz","hOK",2)
v(r=C.aBJ.prototype,"gc1r","HF",0)
v(r,"gciS","PB",0)
v(r,"gc1o","HE",0)
v(r,"gcuk","a0D",0)
v(r,"gc7b","ad0",0)
v(C.aBH.prototype,"gc1s","aVr",3)
v(r=C.aBK.prototype,"gbHM","a82",0)
u(r,"gc1p","c1q",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nx,C.Qa,C.bE8,C.bCu,C.crG,C.crE,C.bK4,C.b5s,C.crF,C.bB4,C.cco,C.ccm,C.ccn,C.ccl,C.aqn,C.cck,C.bKY,C.nY,C.aCj,C.jc,C.nk,C.a60,C.yF,C.l0,C.o9,C.lP,C.yH,C.no,C.a68,C.aoM,C.aZ9,C.e37,C.kY,C.DA,C.el,C.iR,C.Dr,C.wU,C.eB,C.lr,C.hU,C.jt,C.a69,C.ad4,C.aZa,C.b_P,C.a12])
u(B.kz,[C.czw,C.bV5,C.feT,C.cB1,C.cAo,C.fko,C.dQV,C.dQU,C.e3L,C.e3K,C.flN,C.f0f,C.f0g,C.c8j,C.c8k,C.c8l,C.e88,C.eEc,C.eDA,C.eDz,C.eED,C.eEa,C.eE3,C.eEm,C.eF2,C.f71,C.eKU,C.eKT,C.eLm,C.e3a,C.fpj,C.dME,C.fvy,C.fm9,C.c9O,C.c9M,C.c9R,C.fmE,C.fmF,C.fmG,C.fmH,C.c9y,C.c9z,C.dzy,C.c9v,C.fmD,C.eS4,C.dKQ,C.c9o,C.e2R,C.fkd,C.egL,C.eh9,C.eh6,C.eh5,C.ehg,C.ehf,C.eiL,C.eiK,C.eh_,C.egZ,C.edz,C.eeJ,C.ehI,C.ej2,C.ej1,C.eew,C.efH,C.edg,C.cWc,C.ejY,C.ejZ,C.ejU,C.ejV,C.ejW,C.ejX,C.ek1,C.c9W,C.ejx,C.ejI,C.ccv])
u(B.i4,[C.czx,C.czy,C.bKZ,C.fcG,C.bV4,C.bV7,C.fs2,C.eT2,C.eSU,C.eT9,C.f_a,C.f_b,C.feU,C.feS,C.frA,C.fcm,C.fso,C.cAS,C.cAX,C.cAZ,C.cAV,C.cB_,C.cAT,C.cB0,C.cAO,C.cAL,C.cAK,C.cAR,C.cAj,C.cAh,C.fjq,C.fjr,C.f3x,C.fkp,C.fkv,C.f2A,C.c4D,C.fjo,C.fjp,C.fef,C.feg,C.fku,C.fkq,C.fks,C.fkt,C.fkr,C.fvQ,C.fej,C.fek,C.fen,C.feo,C.fer,C.fes,C.fxi,C.f0G,C.fxt,C.e72,C.e73,C.e74,C.e6L,C.e6X,C.e6Y,C.e7_,C.c8i,C.c8g,C.c8h,C.fk4,C.fk6,C.fk5,C.f0h,C.f0i,C.fxw,C.e8d,C.e8e,C.e85,C.e86,C.e89,C.e8a,C.fxM,C.eF3,C.eEt,C.eEd,C.eEq,C.eDv,C.eDw,C.eDx,C.eDB,C.eDC,C.eET,C.eF_,C.eF1,C.eEC,C.eEE,C.eEI,C.eEJ,C.eEK,C.eEO,C.eEF,C.eEG,C.eDN,C.eDO,C.eDP,C.eDQ,C.eDR,C.eDS,C.eDT,C.eDU,C.eDV,C.eD8,C.eD9,C.eDa,C.eDb,C.eDd,C.eDe,C.eDH,C.eDI,C.eDJ,C.eDK,C.eDL,C.eDi,C.eDj,C.eDk,C.eDl,C.eE2,C.eEl,C.fht,C.fhs,C.c9F,C.f70,C.fpf,C.fp8,C.fpb,C.fn7,C.fn8,C.fn9,C.fhA,C.fhz,C.fhy,C.fhw,C.f0c,C.f0d,C.f0e,C.fxY,C.eKW,C.eKX,C.eKQ,C.eKK,C.eLf,C.eLg,C.eLi,C.eLj,C.eLe,C.fxX,C.eKB,C.f6g,C.e39,C.fph,C.fpi,C.fpk,C.fpd,C.fpe,C.fxa,C.dbY,C.dc3,C.e38,C.eXL,C.eXN,C.eXM,C.eXK,C.fiE,C.fiG,C.eZJ,C.foK,C.foL,C.foM,C.foX,C.fp1,C.fp2,C.fp3,C.fp4,C.fp5,C.fp6,C.fp7,C.foN,C.foO,C.foP,C.foQ,C.foR,C.foS,C.foT,C.foU,C.foV,C.foW,C.foY,C.foZ,C.fp_,C.fp0,C.fgu,C.f63,C.f62,C.fpq,C.dMF,C.dMD,C.eJL,C.c4e,C.c4g,C.fvA,C.d1y,C.d1A,C.fvz,C.fvx,C.fxW,C.fm5,C.d18,C.fev,C.few,C.c9D,C.c9E,C.c9C,C.c9s,C.c9t,C.c9p,C.c9q,C.c9r,C.c9U,C.c9P,C.c9K,C.c9L,C.c9N,C.c9Q,C.c9S,C.fmI,C.c9x,C.c9A,C.c9B,C.c9H,C.c9I,C.fpx,C.foE,C.c9w,C.c9u,C.fmC,C.f8m,C.c9n,C.eHv,C.fba,C.ejo,C.efO,C.efP,C.eho,C.ehc,C.ehd,C.efb,C.ej9,C.eja,C.ejb,C.eeA,C.egS,C.egU,C.egu,C.egr,C.efK,C.efL,C.egB,C.eeC,C.egN,C.egO,C.egM,C.egQ,C.egP,C.eh7,C.eh8,C.eha,C.eh3,C.eeV,C.eeS,C.ehh,C.eeK,C.ej8,C.edi,C.eeN,C.eeM,C.ee0,C.ee5,C.ee3,C.ee1,C.ejg,C.ejh,C.eji,C.ejf,C.eiN,C.eiM,C.eiG,C.eiI,C.eiy,C.ej6,C.ej4,C.edq,C.edm,C.efI,C.ee9,C.edB,C.edA,C.edX,C.edY,C.ef9,C.eeb,C.eef,C.eh0,C.eiz,C.eiA,C.eiB,C.eiC,C.eeE,C.eeF,C.eeG,C.ega,C.ef5,C.eeY,C.ef4,C.egk,C.egl,C.ei7,C.ei9,C.eit,C.eiv,C.eia,C.eib,C.ee7,C.efN,C.efM,C.eiX,C.eev,C.een,C.eeo,C.eer,C.ees,C.egp,C.eft,C.efu,C.efv,C.efw,C.efx,C.efy,C.efz,C.efA,C.efB,C.efC,C.efD,C.ehl,C.cW9,C.cWa,C.ek3,C.fpn,C.fpw,C.fpm,C.fps,C.f_9,C.fy_,C.fy0,C.fy1,C.ejw,C.ejF,C.edb,C.ed6,C.ed7,C.fjG,C.fjF,C.fjH,C.fjM,C.fjI,C.fjJ,C.eUw,C.eUx,C.e3I,C.ccu])
u(B.jm,[C.czz,C.eSZ,C.eT3,C.eT4,C.eT_,C.eT0,C.eT1,C.eSS,C.eST,C.eSV,C.eSW,C.eT8,C.eT7,C.eSY,C.eSX,C.eT5,C.eT6,C.eTb,C.eTc,C.eTa,C.cAU,C.cAY,C.cAW,C.cAM,C.cAN,C.cAP,C.cAI,C.cAJ,C.cAQ,C.cAH,C.cAG,C.cAF,C.cA8,C.cA7,C.cAa,C.cAi,C.cAb,C.cA9,C.cAd,C.cAe,C.cAf,C.cAc,C.cAg,C.cAk,C.cAl,C.cAm,C.cAn,C.fed,C.fee,C.feb,C.fec,C.dZw,C.dZu,C.dZv,C.dZx,C.dZy,C.dQT,C.feh,C.fei,C.fel,C.fem,C.fep,C.feq,C.e3J,C.fmc,C.fmb,C.e71,C.e70,C.e6F,C.e6B,C.e6M,C.e6N,C.e6O,C.e6H,C.e6I,C.e6J,C.e6K,C.e6G,C.e6D,C.e6E,C.e6U,C.e6V,C.e6T,C.e6W,C.e6S,C.e6R,C.e6Q,C.e6Z,C.e6P,C.e6C,C.e8c,C.e80,C.e81,C.e87,C.e82,C.e84,C.e83,C.e8b,C.eDW,C.eEj,C.eDF,C.eDG,C.eDD,C.eDE,C.eEp,C.eEo,C.eEn,C.eEs,C.eEr,C.eDu,C.eDy,C.eDt,C.eDs,C.eDp,C.eDr,C.eDq,C.eF0,C.eEU,C.eES,C.eEV,C.eER,C.eEW,C.eEQ,C.eEX,C.eEY,C.eEZ,C.eEP,C.eEB,C.eEw,C.eEH,C.eEA,C.eEL,C.eEz,C.eEM,C.eEy,C.eEN,C.eEx,C.eEg,C.eEf,C.eEh,C.eEe,C.eEi,C.eE8,C.eE7,C.eE9,C.eE6,C.eE5,C.eE4,C.eDc,C.eD7,C.eDm,C.eDh,C.eDn,C.eDg,C.eDo,C.eDf,C.eEb,C.eE_,C.eDZ,C.eE0,C.eDY,C.eE1,C.eDX,C.eEk,C.eEv,C.eEu,C.eDM,C.fpa,C.fpc,C.fpg,C.fhx,C.fjY,C.fjW,C.fjX,C.eKY,C.eKZ,C.eKV,C.eKP,C.eKO,C.eKR,C.eKS,C.eKE,C.eKF,C.eKH,C.eKI,C.eKJ,C.eKG,C.eKL,C.eLb,C.eLc,C.eLa,C.eLd,C.eL9,C.eL8,C.eL7,C.eLh,C.eL6,C.eL5,C.eL4,C.eLk,C.eL3,C.eLl,C.eL2,C.eL1,C.eKM,C.eKN,C.eL0,C.eL_,C.eKx,C.eKy,C.eKz,C.eKA,C.eKw,C.eKC,C.eKD,C.dbX,C.dbZ,C.dc1,C.dc2,C.dc0,C.dc_,C.fiF,C.fgv,C.c4f,C.c4h,C.d1r,C.d1w,C.d1x,C.d1v,C.d1u,C.d1z,C.d1t,C.d1s,C.d1B,C.fvw,C.d7X,C.d7Y,C.d7Z,C.fet,C.feu,C.c9V,C.edc,C.edd,C.ede,C.edf,C.f8k,C.f8l,C.dKS,C.dKR,C.cZH,C.cZG,C.ejq,C.ejp,C.efQ,C.eiw,C.ejm,C.ehm,C.ejc,C.ejd,C.ejn,C.egv,C.eey,C.eez,C.egT,C.egt,C.egq,C.egs,C.egw,C.egx,C.egy,C.egz,C.egA,C.egC,C.eeD,C.egF,C.egG,C.egH,C.egI,C.egJ,C.egK,C.egE,C.egR,C.eh4,C.eh2,C.ehb,C.egD,C.eeT,C.eeU,C.eeW,C.ehe,C.ehi,C.edx,C.eeR,C.eeP,C.ehq,C.eeL,C.ehp,C.eeB,C.efc,C.ej7,C.eix,C.edy,C.edv,C.edl,C.edh,C.edj,C.eeO,C.ee_,C.ee4,C.ee2,C.edZ,C.eh1,C.ejj,C.eiJ,C.eiE,C.eiF,C.eiH,C.efG,C.efF,C.ej5,C.edo,C.edp,C.edr,C.eds,C.edw,C.edn,C.ehn,C.eje,C.efJ,C.ee8,C.edk,C.efa,C.edt,C.edC,C.edD,C.edE,C.edP,C.edS,C.edT,C.edU,C.edV,C.edW,C.edF,C.edG,C.edH,C.edI,C.edJ,C.edK,C.edL,C.edM,C.edN,C.edO,C.edQ,C.edR,C.ef8,C.ef7,C.ef6,C.edu,C.eec,C.eea,C.eed,C.eee,C.eeQ,C.egX,C.egY,C.egV,C.egW,C.eiD,C.eeI,C.eeH,C.eg9,C.eg8,C.egb,C.eg7,C.egc,C.eg6,C.egd,C.eg5,C.ege,C.eg4,C.egf,C.eg3,C.egg,C.eg2,C.egh,C.eg1,C.efV,C.efW,C.efX,C.efU,C.efY,C.efT,C.efZ,C.efS,C.eg_,C.efR,C.eg0,C.ef2,C.ef3,C.eeX,C.eeZ,C.ef_,C.ef0,C.ef1,C.ejk,C.ejl,C.egj,C.egi,C.egm,C.ehJ,C.ehK,C.ehL,C.ehW,C.ei6,C.eih,C.eio,C.eip,C.eiq,C.eir,C.eis,C.ehM,C.ehN,C.ehO,C.ehP,C.ehQ,C.ehR,C.ehS,C.ehT,C.ehU,C.ehV,C.ehX,C.ehY,C.ehZ,C.ei_,C.ei0,C.ei1,C.ei2,C.ei3,C.ei4,C.ehz,C.ei5,C.ehH,C.ehG,C.ei8,C.ehF,C.ehv,C.eiu,C.ehE,C.ehu,C.ehs,C.ehD,C.eht,C.ehr,C.eic,C.ehC,C.eid,C.eie,C.eif,C.eig,C.ehB,C.eii,C.eij,C.eik,C.ehA,C.eil,C.ehy,C.eim,C.ehx,C.ein,C.ehw,C.ee6,C.eiQ,C.eiP,C.eiR,C.eiO,C.eff,C.efe,C.efg,C.efd,C.ej0,C.eiW,C.ej_,C.eiS,C.eiT,C.eiU,C.eiV,C.eiY,C.eiZ,C.ej3,C.eex,C.eek,C.eel,C.eem,C.eej,C.eeq,C.eep,C.eei,C.eeh,C.eet,C.eeg,C.eeu,C.ego,C.egn,C.efs,C.efr,C.efq,C.efp,C.efo,C.efn,C.efm,C.efl,C.efi,C.efk,C.efj,C.efh,C.efE,C.ehj,C.ehk,C.cWb,C.cWy,C.cWz,C.cW5,C.cW4,C.cW8,C.cW6,C.cW7,C.ek0,C.ejR,C.ek_,C.ejS,C.ejT,C.ejN,C.ejO,C.ejP,C.ejQ,C.ek2,C.fpt,C.fpu,C.fpv,C.ejt,C.eju,C.ejv,C.ejy,C.ejz,C.ejC,C.ejD,C.ejB,C.ejE,C.ejA,C.ejs,C.ejr,C.ejG,C.ejH,C.ejJ,C.ejK,C.eda,C.ed9,C.ed5,C.ed8,C.ejM,C.ejL,C.fjL,C.fjK,C.e3G,C.e3H])
t(C.aOy,B.G)
u(B.mj,[C.a1Z,C.auC,C.atj,C.wS,C.wV,C.kE,C.rK,C.Au,C.qY,C.vl,C.apl,C.Hp,C.aoL,C.ua,C.mc,C.hp,C.a6K])
u(C.bK4,[C.crH,C.bK5])
u(C.cco,[C.ccs,C.aqm])
t(C.ccr,C.ccm)
t(C.ccq,C.ccl)
t(C.cct,C.ccq)
t(C.ccp,C.ccn)
t(C.ccj,C.cck)
t(C.b70,B.op)
t(C.a6x,B.wE)
t(C.aSQ,B.dC)
t(C.ay5,B.arH)
u(B.af,[C.a_1,C.WP,C.WN,C.anY,C.U3,C.U6,C.Z5,C.ZA,C.Zz,C.aBk,C.XY,C.LY,C.Xw,C.XR,C.am_,C.aG5,C.Ti,C.awY,C.a5R,C.Mo,C.awl,C.Ip,C.YI,C.Ug,C.Uh,C.aBG,C.aoQ,C.a5S])
u(B.ag,[C.aGo,C.av9,C.av5,C.aB8,C.aBr,C.aBv,C.aCO,C.aEI,C.aEH,C.aJf,C.ayN,C.aIJ,C.axc,C.bcQ,C.aIu,C.aKx,C.aII,C.baK,C.aJd,C.aJr,C.aHp,C.b9w,C.aJs,C.aBJ,C.bha,C.aBH,C.aBK,C.bgU])
u(B.at,[C.av7,C.abd,C.aaD,C.bfY,C.abg,C.acV,C.aYM,C.bp8,C.aZ5,C.bit,C.bnJ,C.aX0,C.aZ8,C.abj,C.abB,C.aZ6,C.Ho,C.aX3,C.b9L,C.O1,C.Iw,C.bem,C.bel,C.brw])
u(B.FY,[C.b9d,C.bqx,C.aGI,C.bbT,C.bo6])
u(B.na,[C.b9c,C.b5K,C.bo3,C.b8K,C.bcg,C.bes,C.bbm,C.bcd,C.bbV,C.bkE,C.b6T,C.b6w,C.brt,C.bow,C.bnF,C.bbf,C.aZ3,C.bmF,C.bnC])
t(C.bgR,C.aJf)
t(C.bgd,C.aIJ)
t(C.bg_,C.aIu)
t(C.br_,C.aKx)
t(C.bga,C.aII)
t(C.bgP,C.aJd)
t(C.btO,C.aJr)
t(C.aBI,C.btO)
t(C.b9x,C.aHp)
t(C.aBL,C.aJs)
t(C.brk,B.iK)
t(C.a6J,B.ke)
t(C.ccw,C.b_P)
t(C.ag_,C.a12)
u(B.VQ,[C.aOo,C.aPS])
t(C.aue,C.aOo)
w(C.aJf,B.c8)
w(C.aIJ,B.c8)
w(C.aIu,B.c8)
w(C.aII,B.c8)
w(C.aJd,B.c8)
w(C.aKx,B.c8)
w(C.aHp,B.eL)
w(C.aJr,B.c8)
v(C.btO,B.ep)
w(C.aJs,B.c8)})()
B.kg(b.typeUniverse,JSON.parse('{"aP7":{"hy":["aP7"]},"nx":{"aP7":[],"hy":["aP7"]},"aOy":{"G":["Qa"],"G.E":"Qa"},"b70":{"op":[]},"a6x":{"wE":[],"nS":[]},"aSQ":{"dC":[],"cu":[],"r":[]},"ay5":{"aR":[],"d3":["aR"],"aP":[],"cq":[]},"a_1":{"af":[],"r":[]},"aGo":{"ag":["a_1"]},"WP":{"af":[],"r":[]},"WN":{"af":[],"r":[]},"av9":{"ag":["WP"]},"av5":{"ag":["WN"]},"av7":{"at":[],"r":[]},"anY":{"af":[],"r":[]},"aB8":{"ag":["anY"]},"abd":{"at":[],"r":[]},"aaD":{"at":[],"r":[]},"abg":{"at":[],"r":[]},"acV":{"at":[],"r":[]},"bfY":{"at":[],"r":[]},"U3":{"af":[],"r":[]},"aBr":{"ag":["U3"]},"aYM":{"at":[],"r":[]},"b9d":{"aA":[]},"b9c":{"aA":[]},"bqx":{"aA":[]},"b5K":{"aA":[]},"bo3":{"aA":[]},"U6":{"af":[],"r":[]},"aBv":{"ag":["U6"]},"b8K":{"aA":[]},"Z5":{"af":[],"r":[]},"aCO":{"ag":["Z5"]},"bcg":{"aA":[]},"ZA":{"af":[],"r":[]},"Zz":{"af":[],"r":[]},"aBk":{"af":[],"r":[]},"XY":{"af":[],"r":[]},"aEI":{"ag":["ZA"]},"aEH":{"ag":["Zz"]},"bgR":{"ag":["aBk"]},"bes":{"aA":[]},"ayN":{"ag":["XY"]},"bp8":{"at":[],"r":[]},"aZ5":{"at":[],"r":[]},"bit":{"at":[],"r":[]},"LY":{"af":[],"r":[]},"Xw":{"af":[],"r":[]},"bgd":{"ag":["LY"]},"bnJ":{"at":[],"r":[]},"bbm":{"aA":[]},"aX0":{"at":[],"r":[]},"axc":{"ag":["Xw"]},"XR":{"af":[],"r":[]},"bcQ":{"ag":["XR"]},"bcd":{"aA":[]},"bbV":{"aA":[]},"bkE":{"aA":[]},"b6T":{"aA":[]},"b6w":{"aA":[]},"brt":{"aA":[]},"bow":{"aA":[]},"bnF":{"aA":[]},"bbf":{"aA":[]},"am_":{"af":[],"r":[]},"aZ8":{"at":[],"r":[]},"bg_":{"ag":["am_"]},"abj":{"at":[],"r":[]},"abB":{"at":[],"r":[]},"aG5":{"af":[],"r":[]},"Ti":{"af":[],"r":[]},"Ho":{"at":[],"r":[]},"awY":{"af":[],"r":[]},"a5R":{"af":[],"r":[]},"aZ6":{"at":[],"r":[]},"aZ3":{"aA":[]},"br_":{"ag":["aG5"]},"aGI":{"aA":[]},"bga":{"ag":["Ti"]},"baK":{"ag":["awY"]},"bgP":{"ag":["a5R"]},"aX3":{"at":[],"r":[]},"bbT":{"aA":[]},"bmF":{"aA":[]},"bnC":{"aA":[]},"awl":{"af":[],"r":[]},"Ip":{"af":[],"r":[]},"YI":{"af":[],"r":[]},"Iw":{"at":[],"r":[]},"Mo":{"af":[],"r":[]},"aBI":{"ag":["Mo"],"ep":[]},"b9x":{"ag":["awl"]},"b9L":{"at":[],"r":[]},"b9w":{"ag":["Ip"]},"O1":{"at":[],"r":[]},"aBL":{"ag":["YI"]},"bo6":{"aA":[]},"bem":{"at":[],"r":[]},"bel":{"at":[],"r":[]},"Ug":{"af":[],"r":[]},"Uh":{"af":[],"r":[]},"aBG":{"af":[],"r":[]},"aoQ":{"af":[],"r":[]},"aBJ":{"ag":["Ug"]},"bha":{"ag":["Uh"]},"aBH":{"ag":["aBG"]},"brk":{"iK":[]},"aBK":{"ag":["aoQ"]},"brw":{"at":[],"r":[]},"a5S":{"af":[],"r":[]},"bgU":{"ag":["a5S"]},"a6J":{"ke":["fm<eF>"],"k1":["fm<eF>"]},"ag_":{"a12":[]},"aOo":{"iV":[],"f9":[]},"aue":{"iV":[],"f9":[]},"aPS":{"iV":[],"f9":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("Kg"),U:w("uT<pz>"),bz:w("x"),M:w("fa<n>"),bo:w("jo"),g7:w("KL"),gc:w("aw<ip?>"),bq:w("aw<~>"),cc:w("a32"),fS:w("CT"),an:w("ajB"),bm:w("O<Qa>"),X:w("O<agf>"),f3:w("O<aP7>"),aK:w("O<mQ>"),V:w("O<ab>"),O:w("O<x>"),fA:w("O<lj>"),d5:w("O<aw<bs<I,+icon3d,picture(n?,n?)>>>"),bH:w("O<aw<dA>>"),fG:w("O<aw<~>>"),aF:w("O<mV>"),cd:w("O<ak<jc>>"),ez:w("O<a1<n,aB>>"),d:w("O<a1<n,@>>"),B:w("O<m8>"),h:w("O<jc>"),gE:w("O<yF>"),k:w("O<nY>"),g:w("O<lr>"),D:w("O<hU>"),u:w("O<eB>"),m:w("O<ua>"),i:w("O<hp>"),aC:w("O<a68>"),o:w("O<yH>"),e3:w("O<aB>"),dN:w("O<u>"),v:w("O<hz>"),cR:w("O<iI>"),J:w("O<j4>"),gx:w("O<oJ<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(Q,Q)>"),ek:w("O<+(I,n)>"),n:w("O<+(I,I)>"),r:w("O<cM>"),s:w("O<n>"),aS:w("O<iK>"),p:w("O<r>"),eR:w("O<f9>"),fT:w("O<b5s>"),bx:w("O<aCj>"),gz:w("O<ad4>"),x:w("O<Q>"),t:w("O<I>"),dS:w("O<aA?>"),bA:w("O<u?>"),Z:w("O<I?>"),cA:w("O<ci>"),A:w("cp<ag<af>>"),gL:w("ak<nY>"),R:w("ak<hU>"),j:w("ak<@>"),bW:w("ak<I>"),e:w("bs<I,+icon3d,picture(n?,n?)>"),P:w("a1<n,@>"),f:w("a1<@,@>"),gI:w("a1<I,+icon3d,picture(n?,n?)>"),bR:w("J<hp,r>"),eC:w("J<no,n>"),cT:w("J<jt,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,pe>"),gh:w("J<mc,je<mc>>"),w:w("iF"),ei:w("ip"),g2:w("qO"),fB:w("Dr"),b6:w("yF"),gX:w("a60"),dt:w("l0"),ea:w("nY"),bt:w("lr"),I:w("hU"),F:w("eB"),fO:w("mc"),ff:w("ua"),fP:w("hp"),Q:w("vl"),dO:w("aoM"),a:w("cl"),C:w("aB"),dw:w("aqn"),di:w("a6K"),Y:w("eF"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DV"),dB:w("dy<u>"),bJ:w("dy<n>"),_:w("dW<n>"),N:w("n"),fw:w("pz"),bO:w("ap"),K:w("bl<u>"),b:w("bl<Q>"),E:w("dA"),W:w("cx<n>"),ac:w("cx<I>"),ex:w("k4<lr>"),cI:w("k4<n>"),cl:w("k4<Q>"),b4:w("a5<kY>"),a8:w("a5<lP>"),fR:w("a5<+(n,n)>"),co:w("e3<u>"),l:w("r"),b2:w("bP<~>"),ev:w("pA<dR>"),dT:w("be<~>"),cQ:w("ay5"),q:w("mI"),y:w("S"),gR:w("Q"),z:w("@"),S:w("I"),at:w("b8?"),gw:w("ak<a1<n,@>>?"),aT:w("ak<hU>?"),c:w("ak<@>?"),aP:w("ip?"),af:w("hU?"),go:w("aZa?"),a6:w("a69?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dA,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dA?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bEZ=new B.ad(A.es,18,A.c,null,null,null)
D.aOJ=new B.bH(A.ax,null,null,D.bEZ,null)
D.aOS=new B.d7(0,-0.15)
D.aOU=new B.d7(0.62,0)
D.aOX=new B.d7(-0.35,-0.45)
D.aP6=new B.d7(0.9,-0.85)
D.aGT=new B.aY(30,30)
D.aQo=new B.bw(D.aGT,D.aGT,A.h6,A.h6)
D.aQC=new B.ay(A.b2,1,A.r,-1)
D.b7A=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aQO=new B.ay(D.b7A,1,A.r,-1)
D.aR_=new B.ay(A.aD,1.5,A.r,-1)
D.aR4=new B.ay(A.b2,1.6,A.r,-1)
D.aRk=new B.ay(A.aD,1.4,A.r,-1)
D.aSF=new B.o(null,null,null,null,null,K.Fi,A.a6)
D.bIZ=new B.a4(A.a3,A.a7,A.x,G.a_U,null,null)
D.aSN=new B.o(null,null,null,null,null,D.bIZ,A.a6)
D.a7z=new B.o(A.az,null,null,A.rf,null,null,A.n)
D.b2j=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b7y=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cFb=w([D.b2j,D.b7y],x.O)
D.dXB=new B.bR(A.A,0.5,A.x,null,0,D.cFb,null,null)
D.aT3=new B.o(null,null,null,null,null,D.dXB,A.a6)
D.Uh=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aRy=new B.c3(N.vT,A.Z,A.Z,A.Z)
D.aT5=new B.o(D.Uh,null,D.aRy,null,null,null,A.n)
D.bKF=new B.a4(A.a3,A.a7,A.x,A.O7,null,null)
D.aTb=new B.o(null,null,null,null,null,D.bKF,A.a6)
D.a8W=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aTd=new B.o(D.a8W,null,null,A.rg,null,null,A.n)
D.aTh=new B.o(A.k3,null,null,null,null,null,A.a6)
D.aRE=new B.c3(A.z1,A.Z,A.Z,A.Z)
D.aTk=new B.o(Y.a9R,null,D.aRE,A.lM,null,null,A.n)
D.CJ=new B.o(A.e_,null,null,null,null,null,A.a6)
D.aTr=new B.o(null,null,null,null,null,E.v_,A.a6)
D.cJK=w([E.aax,A.bW],x.O)
D.bKh=new B.a4(A.b1,A.b3,A.x,D.cJK,null,null)
D.aTv=new B.o(null,null,null,A.lM,null,D.bKh,A.n)
D.cTx=w([A.bk,A.e_,A.jC],x.O)
D.Z5=new B.a4(A.ax,A.aC,A.x,D.cTx,null,null)
D.aTH=new B.o(null,null,null,null,null,D.Z5,A.n)
D.aTI=new B.o(D.a8W,null,null,A.ko,null,null,A.n)
D.caD=w([A.dm,A.bk],x.O)
D.bK9=new B.a4(A.ax,A.aC,A.x,D.caD,null,null)
D.aTM=new B.o(null,null,null,null,null,D.bK9,A.n)
D.aTW=new B.o(null,null,null,null,null,G.ti,A.a6)
D.aUd=new B.o(A.aay,null,null,null,null,null,A.a6)
D.b2Z=new B.x(0.5647058823529412,0,0,0,A.t)
D.a7J=new B.ab(0,A.G,D.b2Z,A.PU,28)
D.aWc=new B.aT2()
D.aWW=new C.b70()
D.a8e=new B.cv(A.A,null,null,A.YV,null)
D.aZk=new B.fe(null,null,null,null,null,E.mC,null,null,null,null)
D.aXs=new B.cv(A.A,null,null,D.aZk,null)
D.buM=new B.ad(A.dS,28,A.c,null,null,null)
D.aXU=new B.cv(A.A,null,null,D.buM,null)
D.aZh=new B.fe(2,null,null,null,null,A.bT,null,null,null,null)
D.aYd=new B.cv(A.A,null,null,D.aZh,null)
D.bv6=new B.ad(K.LP,40,A.bM,null,null,null)
D.aYe=new B.cv(A.A,null,null,D.bv6,null)
D.b_3=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b_f=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b_C=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b_G=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b08=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b0o=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b0p=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.J6=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b0L=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b0Q=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a9a=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b1t=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b29=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a9n=new B.x(1,1,1,0.9725490196078431,A.t)
D.b2q=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b2A=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b2C=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b2L=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b33=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b4f=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.U3=new B.x(0.8509803921568627,0,0,0,A.t)
D.b4o=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b4u=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aa5=new B.x(0.6,0,0,0,A.t)
D.aa7=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b5M=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.ry=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b69=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b6w=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b6Q=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aaJ=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Uo=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zx=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Jw=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iY=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.ab4=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Uu=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b9F=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.ba1=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.baf=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.UI=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bbc=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wl=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bbx=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bbO=new B.hx(A.ba,!0,null,null)
D.eP1=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fch=new B.w("Bio link",null,D.eP1,null,null,null,null,null,null,null,null,null)
D.aY8=new B.cv(A.A,null,null,D.fch,null)
D.bc3=new B.hx(A.TC,!0,D.aY8,null)
D.JR=new C.a1Z(0,"none")
D.ac0=new C.a1Z(1,"deflate")
D.ac1=new C.a1Z(2,"bzip2")
D.bcJ=new B.k8(0.165,0.84,0.44,1)
D.cK2=w([A.cf,A.dM,A.aD],x.O)
D.bJr=new B.a4(A.ax,A.aC,A.x,D.cK2,null,null)
D.aSK=new B.o(null,null,null,null,null,D.bJr,A.n)
D.bDN=new B.ad(A.eN,null,A.ag,null,null,null)
D.aYI=new B.cv(A.A,null,null,D.bDN,null)
D.bdg=new B.kB(D.aSK,A.bb,D.aYI,null)
D.b9S=new B.x(0.058823529411764705,1,1,1,A.t)
D.cN2=w([A.bH,A.qa,A.qa,D.b9S],x.O)
D.cry=w([0,0.32,0.7,1],x.x)
D.bJZ=new B.a4(A.ax,A.aC,A.x,D.cN2,D.cry,null)
D.aSz=new B.o(null,null,null,null,null,D.bJZ,A.n)
D.bdm=new B.kB(D.aSz,A.bb,null,null)
D.bem=new B.m0(1,1,null,null,null,A.bj,null)
D.bep=new B.m0(1,null,null,null,null,D.Uu,null)
D.beT=new B.b8(125e4)
D.beZ=new B.b8(17e4)
D.bf8=new B.b8(35964e8)
D.bfe=new B.b8(55e4)
D.bfi=new B.b8(68e4)
D.bfJ=new B.i5(0,0,0,5)
D.bg0=new B.N(0,16,16,0)
D.bg3=new B.N(0,18,0,8)
D.bgb=new B.N(0,36,0,36)
D.bgi=new B.N(0,54,0,0)
D.bgp=new B.N(10,0,10,3)
D.bgA=new B.i5(10,16,10,10)
D.bgK=new B.N(10,6,10,0)
D.bgN=new B.N(10,6,4,6)
D.bgQ=new B.N(10,8,10,6)
D.acW=new B.N(11,8,11,11)
D.bgV=new B.N(12,0,12,10)
D.bgW=new B.N(12,0,12,24)
D.bh7=new B.N(12,12,12,4)
D.bha=new B.N(12,12,8,12)
D.bhp=new B.N(12,8,8,12)
D.bhN=new B.N(14,14,14,0)
D.bhS=new B.N(14,14,14,90)
D.bia=new B.N(16,10,16,16)
D.bib=new B.N(16,10,16,20)
D.adI=new B.N(16,6,16,28)
D.biK=new B.N(18,0,18,10)
D.biM=new B.N(18,0,18,30)
D.biO=new B.N(18,10,18,12)
D.biP=new B.N(18,10,18,14)
D.bj5=new B.N(18,16,14,18)
D.bja=new B.N(18,18,18,12)
D.bjg=new B.N(18,26,18,12)
D.bjl=new B.N(18,34,18,34)
D.bjm=new B.N(18,4,18,14)
D.bjs=new B.N(18,8,18,24)
D.bjK=new B.N(20,16,14,4)
D.bjP=new B.N(20,18,12,4)
D.bjU=new B.N(20,20,12,20)
D.bjX=new B.N(20,22,20,20)
D.bk1=new B.N(20,6,20,6)
D.bkb=new B.N(22,18,22,18)
D.bkj=new B.N(22,24,22,0)
D.bkm=new B.N(22,24,22,4)
D.bku=new B.N(22,60,22,22)
D.bkA=new B.N(24,24,24,22)
D.bkK=new B.N(26,10,60,10)
D.bkR=new B.N(28,44,28,44)
D.bl7=new B.N(32,44,32,44)
D.blf=new B.N(38,30,38,20)
D.blk=new B.N(4,0,0,6)
D.blw=new B.i5(4,4,4,4)
D.blV=new B.i5(6,5,6,5)
D.blZ=new B.N(6,6,8,6)
D.bm9=new B.N(8,14,8,14)
D.bma=new B.N(8,22,8,22)
D.bmj=new B.N(8,6,12,6)
D.bms=new B.N(8,8,8,4)
D.aey=new B.N(9,9,9,6)
D.bmB=new B.i5(2.5,2.5,2.5,2.5)
D.bmC=new B.N(10.5,0,10.5,0)
D.bmD=new B.N(7,1.5,7,1.5)
D.cCv=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bmT=new B.y5(null,null,D.cCv,A.ze)
D.czO=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bmU=new B.y5(null,null,D.czO,A.ze)
D.aLq=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new B.w("WORD DESIGN",null,D.aLq,null,null,null,null,null,null,null,null,null)
D.bnl=new B.bG(1,A.bp,D.fbE,null)
D.fbk=new B.w("Slides database",null,A7.C4,null,null,null,null,null,null,null,null,null)
D.f8J=new B.w("Admin only \xb7 keep as many as you like",null,U.aKX,null,null,null,null,null,null,null,null,null)
D.d_H=w([D.fbk,A.bA,D.f8J],x.p)
D.bcr=new B.fq(A.ak,A.e,A.j,A.F,null,A.p,null,0,D.d_H,null)
D.bno=new B.bG(1,A.bp,D.bcr,null)
D.f3G=new B.w("NGMY logo",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bnr=new B.bG(1,A.bp,D.f3G,null)
D.eMW=new B.F(!0,A.ag,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fds=new B.w("TALK TO THE EDITOR",null,D.eMW,null,null,null,null,null,null,null,null,null)
D.bnG=new B.bG(1,A.bp,D.fds,null)
D.eYU=new B.w("Tell the AI what to change",null,A7.C4,null,null,null,null,null,null,null,null,null)
D.bnZ=new B.bG(1,A.bp,D.eYU,null)
D.boD=new B.CJ(!0,"video/mp4")
D.eLd=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX9=new B.w("Move presentations between devices",null,D.eLd,null,null,null,!1,null,null,1,null,null)
D.boH=new B.pT(A.eb,A.a3,A.f,D.eX9,null)
D.eYb=new B.w("Edit in Slides",null,A.jU,null,null,null,null,null,null,null,null,null)
D.boI=new B.pT(A.eb,A.A,A.f,D.eYb,null)
D.boX=new B.dl(1,A.ch,D.boI,null)
D.Xn=new B.a0(60988,"MaterialIcons",!1)
D.bql=new B.a0(61352,"MaterialIcons",!1)
D.ag0=new B.a0(61531,"MaterialIcons",!1)
D.brx=new B.a0(63062,"MaterialIcons",!1)
D.brE=new B.a0(63109,"MaterialIcons",!1)
D.brQ=new B.a0(63206,"MaterialIcons",!1)
D.agH=new B.a0(63238,"MaterialIcons",!1)
D.XV=new B.a0(63365,"MaterialIcons",!1)
D.XW=new B.a0(63367,"MaterialIcons",!1)
D.XX=new B.a0(63368,"MaterialIcons",!1)
D.agS=new B.a0(63384,"MaterialIcons",!1)
D.bsp=new B.a0(63525,"MaterialIcons",!1)
D.bss=new B.a0(63568,"MaterialIcons",!1)
D.bsM=new B.a0(983072,"MaterialIcons",!1)
D.bta=new B.a0(983271,"MaterialIcons",!0)
D.bu_=new B.a0(983924,"MaterialIcons",!1)
D.ahZ=new B.a0(983965,"MaterialIcons",!1)
D.ai_=new B.a0(983966,"MaterialIcons",!1)
D.bu9=new B.a0(984592,"MaterialIcons",!1)
D.bup=new B.ad(A.t5,16,A.aA,null,null,null)
D.buw=new B.ad(A.m8,null,A.c,null,null,null)
D.ai9=new B.ad(A.po,18,A.c,null,null,null)
D.buN=new B.ad(A.Ai,18,O.l_,null,null,null)
D.bvs=new B.ad(A.j6,11,null,null,null,null)
D.bvC=new B.ad(A.XE,null,A.eE,null,null,null)
D.bwa=new B.ad(A.qt,18,A.aA,null,null,null)
D.bwg=new B.ad(A1.Aw,14,null,null,null,null)
D.bwh=new B.ad(A.e8,28,A.cH,null,null,null)
D.bwt=new B.ad(A.pp,20,A.c,null,null,null)
D.bwA=new B.ad(A.xe,null,null,null,null,null)
D.bwG=new B.ad(A.jp,18,A.hm,null,null,null)
D.bwL=new B.ad(A.l2,null,null,null,null,null)
D.bxd=new B.ad(A.Yb,28,A.c,null,null,null)
D.brA=new B.a0(63065,"MaterialIcons",!1)
D.bxm=new B.ad(D.brA,15,A.c,null,null,null)
D.brG=new B.a0(63113,"MaterialIcons",!1)
D.bxs=new B.ad(D.brG,null,A.ag,null,null,null)
D.bxP=new B.ad(A.uF,22,A.bJ,null,null,null)
D.by8=new B.ad(A.x_,18,null,null,null,null)
D.byd=new B.ad(A.AA,12,A.c,null,null,null)
D.btM=new B.a0(983687,"MaterialIcons",!1)
D.byo=new B.ad(D.btM,null,A.bk,null,null,null)
D.byv=new B.ad(A.hr,null,A.bk,null,null,null)
D.byO=new B.ad(A.ol,22,A.c,null,null,null)
D.byS=new B.ad(A.cu,13,A.c,null,null,null)
D.byY=new B.ad(A.e8,26,A.aE,null,null,null)
D.bz0=new B.ad(A.qw,26,A.c,null,null,null)
D.M_=new B.ad(A.j6,8,A.c,null,null,null)
D.bzi=new B.ad(A.po,40,A.c,null,null,null)
D.bzj=new B.ad(A.bpi,null,null,null,null,null)
D.bzn=new B.ad(A.td,20,null,null,null,null)
D.btL=new B.a0(983683,"MaterialIcons",!1)
D.bzx=new B.ad(D.btL,null,A.aX,null,null,null)
D.bzy=new B.ad(A.j6,16,A.bk,null,null,null)
D.bzT=new B.ad(A.uT,null,null,null,null,null)
D.aiH=new B.ad(A.uH,22,A.c,null,null,null)
D.bzX=new B.ad(A.dS,17,A.c,null,null,null)
D.aiI=new B.ad(A.j6,9,A.c,null,null,null)
D.bA1=new B.ad(A.uC,null,null,null,null,null)
D.bpz=new B.a0(57744,"MaterialIcons",!1)
D.bA8=new B.ad(D.bpz,null,null,null,null,null)
D.bAb=new B.ad(A.uC,16,null,null,null,null)
D.bug=new B.a0(985181,"MaterialIcons",!1)
D.Fa=new B.ad(D.bug,null,null,null,null,null)
D.bAn=new B.ad(A.l2,16,A.bJ,null,null,null)
D.btD=new B.a0(983615,"MaterialIcons",!1)
D.bAp=new B.ad(D.btD,12,A.c,null,null,null)
D.aiO=new B.ad(A.wW,16,null,null,null,null)
D.bAx=new B.ad(A.dS,21,A.c,null,null,null)
D.bAC=new B.ad(A.hr,17,A.c,null,null,null)
D.bAD=new B.ad(A.uF,null,null,null,null,null)
D.bAS=new B.ad(A.Yz,20,A.aA,null,null,null)
D.bB6=new B.ad(A.pn,22,E.mC,null,null,null)
D.bBd=new B.ad(A.pm,13,A.ag,null,null,null)
D.bBf=new B.ad(A.ahO,20,A.aA,null,null,null)
D.bpg=new B.a0(57495,"MaterialIcons",!1)
D.bBk=new B.ad(D.bpg,null,null,null,null,null)
D.bBo=new B.ad(A.ny,18,A.c,null,null,null)
D.bBJ=new B.ad(A.tg,28,A.c,null,null,null)
D.bBT=new B.ad(D.agH,null,A.aD,null,null,null)
D.bBU=new B.ad(A.pp,22,A.c,null,null,null)
D.aiX=new B.ad(A.Xj,16,null,null,null,null)
D.bCE=new B.ad(A.uF,32,A.c,null,null,null)
D.bDk=new B.ad(A.iO,22,A.c,null,null,null)
D.bDo=new B.ad(A.qw,22,A.ag,null,null,null)
D.ajb=new B.ad(A.t5,null,A.c1,null,null,null)
D.bEh=new B.ad(A.uG,18,null,null,null,null)
D.bET=new B.ad(A.dS,18,A.ct,null,null,null)
D.YY=new B.ad(A.cu,18,A.aA,null,null,null)
D.bF_=new B.ad(A.ahH,null,null,null,null,null)
D.bFp=new B.dY(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aLe,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.eDO=new B.F(!0,A.bI,null,null,null,null,null,A.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFH=new B.dY(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eDO,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ai,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.bG7=new B.dY(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eu,!0,null,null,null,null)
D.cG3=w([A.e_,A.aD],x.O)
D.bHh=new B.a4(A.a3,A.a7,A.x,D.cG3,null,null)
D.bHt=new B.a4(A.b1,A.b3,A.RR,A.aqb,null,null)
D.b_t=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b35=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b5N=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b1l=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.crA=w([D.b_t,D.b35,D.b5N,D.b1l],x.O)
D.bHM=new B.a4(A.ax,A.aC,A.x,D.crA,A.FI,null)
D.d_O=w([A.cM,A.by,A.b2],x.O)
D.bHO=new B.a4(A.b1,A.b3,A.RR,D.d_O,null,null)
D.d0Z=w([A.bk,A.c7],x.O)
D.bHS=new B.a4(A.a3,A.a7,A.x,D.d0Z,null,null)
D.cXx=w([A.hl,A.dp,A.aW],x.O)
D.bHU=new B.a4(A.ax,A.aC,A.x,D.cXx,null,null)
D.cLA=w([A.cY,A.f5],x.O)
D.bHY=new B.a4(A.a3,A.a7,A.x,D.cLA,null,null)
D.d_J=w([O.l_,A.dp],x.O)
D.ajW=new B.a4(A.a3,A.a7,A.x,D.d_J,null,null)
D.b3B=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d_G=w([D.b3B,D.wl,A.bT],x.O)
D.bI2=new B.a4(A.a3,A.a7,A.x,D.d_G,null,null)
D.cHE=w([A.bg,A.d1,A.fs],x.O)
D.bI3=new B.a4(A.ax,A.aC,A.x,D.cHE,null,null)
D.Me=new B.a4(A.a3,A.a7,A.x,A.FU,null,null)
D.baz=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.ckL=w([D.baz,A.bT,A.j_],x.O)
D.ak0=new B.a4(A.ax,A.aC,A.x,D.ckL,null,null)
D.cQo=w([A.wc,A.au,D.zx],x.O)
D.bJ_=new B.a4(A.a3,A.a7,A.x,D.cQo,null,null)
D.bby=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b28=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b6G=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cGO=w([D.bby,D.b28,D.b6G],x.O)
D.ak1=new B.a4(A.a3,A.a7,A.x,D.cGO,null,null)
D.b3C=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bKV=w([Aq.abL,D.b3C],x.O)
D.bJ8=new B.a4(A.b1,A.b3,A.x,D.bKV,null,null)
D.cF_=w([A.mB,A.bM],x.O)
D.bJc=new B.a4(A.b1,A.b3,A.x,D.cF_,null,null)
D.cUT=w([A.aD,A.dM],x.O)
D.bJi=new B.a4(A.a3,A.a7,A.x,D.cUT,null,null)
D.aaS=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.arQ=w([D.aaS,D.iY,D.J6],x.O)
D.bJK=new B.a4(A.ax,A.aC,A.x,D.arQ,null,null)
D.ckD=w([A.dt,A.dI],x.O)
D.bJV=new B.a4(A.b1,A.b3,A.x,D.ckD,null,null)
D.cSi=w([A.u9,At.Dg],x.O)
D.bKH=new B.a4(A.a3,A.a7,A.x,D.cSi,null,null)
D.f57=new B.w("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bKS=new B.pj(null,D.f57,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xE=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a1G=new C.kE(2,"elegantNavy")
D.frv=w([A.Um,D.iY,A.bT],x.O)
D.js=new C.wS(0,"classic")
D.a1t=new C.jc("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a1G,4294967035,4279378237,4290283019,D.js)
D.aAN=new C.kE(3,"elegantGold")
D.b_2=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b_S=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a9H=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fqY=w([D.b_2,D.b_S,D.a9H],x.O)
D.a1r=new C.jc("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aAN,4294966515,4281016592,4289102906,D.js)
D.dlr=new C.kE(22,"goldRibbon")
D.fqU=w([A.Um,D.iY,A.hQ],x.O)
D.a1k=new C.jc("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dlr,4294967035,4279378237,4291404327,D.js)
D.dls=new C.kE(23,"goldBaroque")
D.aad=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fr_=w([D.aad,A.au,A.j_],x.O)
D.a1l=new C.jc("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dls,4294964964,4283053072,4292128567,D.js)
D.dlu=new C.kE(4,"elegantEmerald")
D.b0W=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b1I=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fr5=w([D.b0W,D.b1I,A.hQ],x.O)
D.a1m=new C.jc("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dlu,4294376440,4279122734,4291404327,D.js)
D.dlv=new C.kE(5,"elegantBurgundy")
D.b4T=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.frc=w([D.b4T,A.a94,A.hQ],x.O)
D.a1p=new C.jc("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dlv,4294965238,4283043359,4291404327,D.js)
D.dlo=new C.kE(19,"goldFiligree")
D.JC=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fr0=w([D.JC,A.au,A.j_],x.O)
D.a1n=new C.jc("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dlo,4294966259,4279378237,4292128567,D.js)
D.dlp=new C.kE(20,"goldLaurel")
D.bap=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.frd=w([A.J0,A.hQ,D.bap],x.O)
D.a1o=new C.jc("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dlp,4294966776,4282000405,4291404327,D.js)
D.dlq=new C.kE(21,"goldCrest")
D.a8Z=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.baw=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fr2=w([D.a8Z,A.au,D.baw],x.O)
D.a1s=new C.jc("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dlq,4294965484,4283053072,4292128567,D.js)
D.dlt=new C.kE(24,"goldStar")
D.bbu=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fr6=w([D.bbu,A.au,D.iY],x.O)
D.a1q=new C.jc("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dlt,4294966518,4279378237,4292128567,D.js)
D.Fk=w([D.a1t,D.a1r,D.a1k,D.a1l,D.a1m,D.a1p,D.a1n,D.a1o,D.a1s,D.a1q],x.h)
D.pB=new C.mc(0,"blank")
D.PJ=new C.mc(1,"title")
D.mh=new C.mc(2,"titleContent")
D.dG3=new C.mc(3,"twoColumn")
D.Bt=new C.mc(4,"section")
D.dG4=new C.mc(5,"comparison")
D.Gt=new C.mc(6,"flashcard")
D.Gu=new C.mc(7,"quiz")
D.Gv=new C.mc(8,"worksheet")
D.akn=w([D.pB,D.PJ,D.mh,D.dG3,D.Bt,D.dG4,D.Gt,D.Gu,D.Gv],B.az("O<mc>"))
D.bL6=w([0,0,0],x.cA)
D.asK=w([Z.TV,A.dI],x.O)
D.ka=w([A.bT,A.bJ,A.hP,A.hy,D.zx],x.O)
D.dhl=new C.iR("fireworks","Royal Fireworks","Thank you for celebrating with us",D.asK,D.ka)
D.baH=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b4R=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cFc=w([D.baH,D.b4R],x.O)
D.dhc=new C.iR("confetti","Golden Confetti","Together we rise",D.cFc,D.ka)
D.cCA=w([A.nc,A.TF],x.O)
D.dhd=new C.iR("crown","Crown of Glory","Built for our community",D.cCA,D.ka)
D.b1Z=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b4w=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cIS=w([D.b1Z,D.b4w],x.O)
D.tj=w([A.bI,A.aO,A.c,A.aK,A.aj],x.O)
D.dh7=new C.iR("aurora","Aurora Gala","A brighter future, together",D.cIS,D.tj)
D.b5P=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cSo=w([G.a8H,D.b5P],x.O)
D.dho=new C.iR("champagne","Champagne Toast","Cheers to every member",D.cSo,D.ka)
D.dhp=new C.iR("diamonds","Diamond Rain","Every member is a jewel",W.ati,D.tj)
D.b_K=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b42=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cWR=w([D.b_K,D.b42],x.O)
D.dh2=new C.iR("starburst","Golden Starburst","Thank you!",D.cWR,D.ka)
D.bL_=w([A.f4,A.wf],x.O)
D.a8O=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.NM=w([A.o1,A.ie,A.uk,A.nW,D.a8O],x.O)
D.dhw=new C.iR("balloons","Luxury Balloons","Let's celebrate",D.bL_,D.NM)
D.cBW=w([A.TL,A.w],x.O)
D.dhk=new C.iR("galaxy","Galaxy Spiral","The sky is not the limit",D.cBW,D.tj)
D.b95=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cPh=w([A.k2,D.b95],x.O)
D.dhf=new C.iR("redcarpet","Red Carpet","Tonight we shine",D.cPh,D.ka)
D.b7d=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b5D=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cTf=w([D.b7d,D.b5D],x.O)
D.dh4=new C.iR("coins","Gold Coin Rain","Every contribution counts",D.cTf,D.ka)
D.cZm=w([A.dt,A.hw],x.O)
D.dha=new C.iR("lanterns","Sky Lanterns","Lighting the way together",D.cZm,D.ka)
D.b2P=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cA4=w([A.wh,D.b2P],x.O)
D.dh6=new C.iR("hearts","Floating Hearts","Made with love",D.cA4,D.NM)
D.b0h=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b11=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.d_E=w([D.b0h,D.b11],x.O)
D.dhv=new C.iR("petals","Rose Petals","Thank you, from our hearts",D.d_E,D.NM)
D.b9Q=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cXa=w([A.kZ,D.b9Q],x.O)
D.dh1=new C.iR("butterflies","Golden Butterflies","New beginnings",D.cXa,D.ka)
D.b6E=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cAX=w([D.b6E,A.w],x.O)
D.dhn=new C.iR("neon","Neon Night","Let's go!",D.cAX,D.tj)
D.b3N=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cV2=w([A.Jl,D.b3N],x.O)
D.dhq=new C.iR("disco","Disco Ball","Party time",D.cV2,D.tj)
D.b75=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cUC=w([A.hl,D.b75],x.O)
D.dh5=new C.iR("sunrise","Golden Sunrise","A new day for our community",D.cUC,D.ka)
D.cUg=w([A.qe,A.dI],x.O)
D.dhr=new C.iR("pearls","Ocean Pearls","Deep roots, bright future",D.cUg,D.tj)
D.b24=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cUt=w([D.b24,A.dI],x.O)
D.dhu=new C.iR("snow","Winter Gala","Warm wishes to all",D.cUt,D.tj)
D.b_b=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b02=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cZJ=w([D.b_b,D.b02],x.O)
D.dhj=new C.iR("laurel","Laurel Victory","We did it together",D.cZJ,D.ka)
D.b_1=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b4s=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cze=w([D.b_1,D.b4s],x.O)
D.dht=new C.iR("ribbons","Silk Ribbons","Elegance in every step",D.cze,D.ka)
D.b5o=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.ckA=w([G.zw,D.b5o],x.O)
D.dhg=new C.iR("kente","Kente Pride","Proud of our roots",D.ckA,D.ka)
D.b7I=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.ba6=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cKm=w([D.b7I,D.ba6],x.O)
D.dhb=new C.iR("trophy","Trophy Shine","Winners together",D.cKm,D.ka)
D.cUz=w([Al.Jc,A.w],x.O)
D.dh3=new C.iR("shooting","Shooting Stars","Make a wish",D.cUz,D.tj)
D.b_i=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.abB=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cZX=w([D.b_i,D.abB],x.O)
D.dhh=new C.iR("bokeh","Golden Bokeh","Shine bright",D.cZX,D.ka)
D.b_D=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cQ3=w([D.b_D,A.w],x.O)
D.dh9=new C.iR("orbits","Golden Orbits","Always moving forward",D.cQ3,D.ka)
D.b9R=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cMW=w([A.a9F,D.b9R],x.O)
D.dhe=new C.iR("flowers","Blooming Garden","Growing together",D.cMW,D.NM)
D.b_r=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b_X=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cYS=w([D.b_r,D.b_X],x.O)
D.dh8=new C.iR("music","Music Party","Celebrate with us",D.cYS,D.tj)
D.b0M=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bas=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cAg=w([D.b0M,D.bas],x.O)
D.dhs=new C.iR("mandala","Royal Mandala","Harmony and unity",D.cAg,D.ka)
D.cN0=w([G.zw,D.abB],x.O)
D.dhm=new C.iR("sparklers","Golden Sparklers","Light up the night",D.cN0,D.ka)
D.dhi=new C.iR("city","City Lights","The whole city celebrates",D.asK,D.ka)
D.Ft=w([D.dhl,D.dhc,D.dhd,D.dh7,D.dho,D.dhp,D.dh2,D.dhw,D.dhk,D.dhf,D.dh4,D.dha,D.dh6,D.dhv,D.dh1,D.dhn,D.dhq,D.dh5,D.dhr,D.dhu,D.dhj,D.dht,D.dhg,D.dhb,D.dh3,D.dhh,D.dh9,D.dhe,D.dh8,D.dhs,D.dhm,D.dhi],B.az("O<iR>"))
D.bYl=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 9 apps inside the TV screen: NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, Growth Income, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.e1m=new B.z("","No ring")
D.efd=new B.z("platinum","Platinum")
D.ecu=new B.z("glow","Glow")
D.e4C=new B.z("double","Double line")
D.e3y=new B.z("framed","Gallery frame")
D.e11=new B.z("rosegold","Rose gold")
D.ed9=new B.z("jewels","Jeweled")
D.ea2=new B.z("aurora","Aurora")
D.AQ=w([D.e1m,A.a2Y,D.efd,D.ecu,H.aH6,D.e4C,A.a3_,D.e3y,D.e11,D.ed9,D.ea2],x.L)
D.c4h=w([D.a1n,D.a1o,D.a1s,D.a1k,D.a1l,D.a1q],x.h)
D.bAL=new B.ad(G.afB,16,null,null,null,null)
D.aVy=new B.uT(A.bf,D.bAL,null,x.U)
D.bpI=new B.a0(58027,"MaterialIcons",!1)
D.buv=new B.ad(D.bpI,16,null,null,null,null)
D.aVw=new B.uT(A.L,D.buv,null,x.U)
D.bpJ=new B.a0(58030,"MaterialIcons",!1)
D.byu=new B.ad(D.bpJ,16,null,null,null,null)
D.aVz=new B.uT(A.dJ,D.byu,null,x.U)
D.car=w([D.aVy,D.aVw,D.aVz],B.az("O<uT<pz>>"))
D.ci_=w([A.zB,A.hx],x.O)
D.ci0=w([A.bg,A.bl,A.fs],x.O)
D.NB=w([A.bJ,A.hy,A.hP,A.au,A.nW],x.O)
D.ckG=w([A.bT,D.iY,D.J6],x.O)
D.clc=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.e_7=new B.z(4278913286,4280030216)
D.e_p=new B.z(4279373061,4278518787)
D.e_w=new B.z(4279898630,4278847235)
D.cJO=w([D.e_7,D.e_p,D.e_w],x.n)
D.cFQ=w(["\u265b","\u269c","\u2726"],x.s)
D.dlm=new C.wU("Royal Onyx & Gold",D.cJO,4292128567,4294370209,4294965479,3874020544,D.cFQ)
D.dZV=new B.z(4278326799,4278598442)
D.dZX=new B.z(4278395929,4278258953)
D.e_3=new B.z(4278599728,4278327826)
D.cZd=w([D.dZV,D.dZX,D.e_3],x.n)
D.cAQ=w(["\u269c","\u2756","\u2727"],x.s)
D.dlj=new C.wU("Imperial Emerald",D.cZd,4293050997,4294699968,4294180856,3872254170,D.cAQ)
D.dZY=new B.z(4278455076,4278918747)
D.e_2=new B.z(4278587439,4278322714)
D.e_g=new B.z(4279051376,4278455076)
D.cXt=w([D.dZY,D.e_2,D.e_g],x.n)
D.cQD=w(["\u2654","\u2726","\u2748"],x.s)
D.dld=new C.wU("Sapphire Crown",D.cXt,4291417834,4294967295,4294310143,3871986666,D.cQD)
D.e_u=new B.z(4279894534,4283041554)
D.e_G=new B.z(4281008906,4279042307)
D.e_O=new B.z(4284221976,4279894534)
D.d1t=w([D.e_u,D.e_G,D.e_O],x.n)
D.cC2=w(["\u265b","\u2766","\u2726"],x.s)
D.dlf=new C.wU("Ruby Throne",D.d1t,4293378685,4294963145,4294964466,3874213833,D.cC2)
D.e_o=new B.z(4279371039,4281995100)
D.e_y=new B.z(4280092723,4278714896)
D.e_L=new B.z(4283045242,4279371039)
D.cZz=w([D.e_o,D.e_y,D.e_L],x.n)
D.cXO=w(["\u2655","\u2756","\u2727"],x.s)
D.dlk=new C.wU("Amethyst Palace",D.cZz,4293314984,4294963421,4294702591,3873229802,D.cXO)
D.e__=new B.z(4278519045,4280032287)
D.e_h=new B.z(4279111184,4278321666)
D.e_D=new B.z(4280492839,4278716426)
D.cWo=w([D.e__,D.e_h,D.e_D],x.n)
D.cP4=w(["\u2726","\u25c6","\u2742"],x.s)
D.dlh=new C.wU("Obsidian & Platinum",D.cWo,4293256418,4294967295,4294638330,3872378836,D.cP4)
D.e_v=new B.z(4279896588,4282194463)
D.e_E=new B.z(4280553487,4279043334)
D.e_M=new B.z(4283048488,4279896588)
D.cOB=w([D.e_v,D.e_E,D.e_M],x.n)
D.d00=w(["\u2766","\u273f","\u2727"],x.s)
D.dle=new C.wU("Rose Gold Velvet",D.cOB,4293440672,4294960345,4294964979,3874214602,D.d00)
D.e_0=new B.z(4278520340,4279180595)
D.e_5=new B.z(4278718495,4278322443)
D.e_s=new B.z(4279510591,4278520340)
D.crj=w([D.e_0,D.e_5,D.e_s],x.n)
D.cPJ=w(["\u269c","\u2736","\u2756"],x.s)
D.dli=new C.wU("Midnight Brass",D.crj,4291405148,4293975208,4294439914,3872837564,D.cPJ)
D.e00=new B.z(4294703086,4293780428)
D.e_X=new B.z(4294307549,4293187253)
D.e01=new B.z(4294966517,4293977807)
D.cE1=w([D.e00,D.e_X,D.e01],x.n)
D.cQ6=w(["\u269c","\u265b","\u2726"],x.s)
D.dll=new C.wU("Ivory Marble & Gold",D.cE1,4289760572,4286209048,4280951062,3863625518,D.cQ6)
D.e_b=new B.z(4278978566,4280555024)
D.e_r=new B.z(4279504137,4278518530)
D.e_I=new B.z(4281211923,4278978566)
D.cBV=w([D.e_b,D.e_r,D.e_I],x.n)
D.cYv=w(["\u2742","\u2726","\u265c"],x.s)
D.dlg=new C.wU("Onyx & Copper",D.cBV,4291856987,4294365880,4294964718,3873885630,D.cYv)
D.clj=w([D.dlm,D.dlj,D.dld,D.dlf,D.dlk,D.dlh,D.dle,D.dli,D.dll,D.dlg],B.az("O<wU>"))
D.cnA=w([A.au,D.zx,A.hy],x.O)
D.e6A=new B.z("Original",null)
D.e6I=new B.z("Wide 16:9",1.7777777777777777)
D.e8R=new B.z("Landscape 3:2",1.5)
D.e64=new B.z("Photo 4:3",1.3333333333333333)
D.e7I=new B.z("Square",1)
D.eiE=new B.z("Portrait 3:4",0.75)
D.aqj=w([D.e6A,D.e6I,D.e8R,D.e64,D.e7I,D.eiE],B.az("O<+(n,Q?)>"))
D.aqk=w([A.hy,A.bX,A.b7,A.bC],x.O)
D.e90=new B.z("","Original")
D.eaL=new B.z("circle","Circle")
D.efX=new B.z("rounded","Rounded")
D.egP=new B.z("triangle","Triangle")
D.ecI=new B.z("hexagon","Hexagon")
D.eb9=new B.z("diamond","Diamond")
D.ea1=new B.z("arch","Arch")
D.AV=w([D.e90,D.eaL,D.efX,D.egP,D.ecI,D.eb9,D.ea1],x.L)
D.dgs=new C.kY("classic_blue","Classic Blue","Normal",A.bk,A.c,A.k5,A.dm,A.aJ)
D.dgI=new C.kY("campus_green","Campus Green","Normal",A.aX,A.mz,A.rw,A.fZ,A.ep)
D.dgz=new C.kY("warm_sand","Warm Sand","Normal",A.e1,A.hP,A.bJ,A.ik,A.ng)
D.dgG=new C.kY("slate_minimal","Slate Minimal","Normal",A.bv,A.aO,A.aK,A.M,A.aJ)
D.dgr=new C.kY("coral_fresh","Coral Fresh","Normal",A.cf,A.ih,A.q6,A.k4,A.rr)
D.dgH=new C.kY("lavender_calm","Lavender Calm","Normal",A.b2,A.oV,A.zn,A.oY,A.jg)
D.dgt=new C.kY("ocean_breeze","Ocean Breeze","Normal",A.f5,A.qh,A.rn,A.ub,A.nh)
D.aaY=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dgE=new C.kY("berry_pop","Berry Pop","Normal",A.fc,D.aaY,A.k_,G.UH,A.DC)
D.dgu=new C.kY("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.dt,A.k_,A.cl)
D.dgD=new C.kY("executive_navy","Executive Navy","Professional",A.d5,A.aan,A.dm,A.kX,A.bI)
D.dgB=new C.kY("boardroom_charcoal","Boardroom Charcoal","Professional",A.aj,A.bj,A.M,A.aO,A.cl)
D.dgv=new C.kY("corporate_steel","Corporate Steel","Professional",A.mx,A.M,A.lV,A.fj,A.bI)
D.dgy=new C.kY("gold_luxe","Gold Luxe","Luxury",A.o_,A.dB,A.o0,A.lo,A.bJ)
D.b78=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dgC=new C.kY("rose_gold_elite","Rose Gold Elite","Luxury",A.hx,D.b78,A.Uz,A.ie,A.nW)
D.dgF=new C.kY("platinum_night","Platinum Night","Luxury",A.cl,A.dI,A.bj,A.aO,A.aK)
D.dgJ=new C.kY("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.p_,A.eT,A.p5,A.jh)
D.dgq=new C.kY("royal_purple","Royal Purple","Luxury",A.my,A.TY,A.jg,A.k_,A.J_)
D.dgA=new C.kY("neon_pitch","Neon Pitch","Bold",A.b7,A.dI,A.M,A.bd,A.aK)
D.dgx=new C.kY("crimson_impact","Crimson Impact","Bold",A.bM,A.k2,A.eZ,A.rI,A.fi)
D.dgw=new C.kY("sunset_gallery","Sunset Gallery","Bold",A.fz,A.rr,A.k4,A.q6,A.o2)
D.FC=w([D.dgs,D.dgI,D.dgz,D.dgG,D.dgr,D.dgH,D.dgt,D.dgE,D.dgu,D.dgD,D.dgB,D.dgv,D.dgy,D.dgC,D.dgF,D.dgJ,D.dgq,D.dgA,D.dgx,D.dgw],B.az("O<kY>"))
D.cyZ=w([A.bT,D.iY],x.O)
D.cOQ=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e9P=new B.z("Faces & people",D.cOQ)
D.cnE=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dZ6=new B.z("Ideas & work",D.cnE)
D.cGh=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ecN=new B.z("Nature",D.cGh)
D.cOY=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e6y=new B.z("Places & things",D.cOY)
D.cJo=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ea6=new B.z("Symbols",D.cJo)
D.cz4=w([D.e9P,D.dZ6,D.ecN,D.e6y,D.ea6],B.az("O<+(n,ak<n>)>"))
D.b_w=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.czp=w([A.bT,D.a9H,D.b_w],x.O)
D.aV1=new B.ab(0,A.G,A.IX,A.aBA,40)
D.aUJ=new B.ab(0,A.G,A.ne,A.ef,8)
D.czA=w([D.aV1,D.aUJ],x.V)
D.cA0=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aqJ=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a_8=w([A.hy,A.fs,A.bM,A.az,A.cf],x.O)
D.cAK=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9V=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cAV=w([A.Ut,D.a9V,A.Ut],x.O)
D.cAZ=w([A.hQ,D.iY,D.J6],x.O)
D.e6n=new B.z(A.bf,D.XW)
D.e7D=new B.z(A.L,D.XV)
D.e1Z=new B.z(A.dJ,D.XX)
D.cBQ=w([D.e6n,D.e7D,D.e1Z],B.az("O<+(pz,a0)>"))
D.cP=new C.Hp(0,"text")
D.lb=new C.Hp(1,"image")
D.eW=new C.Hp(2,"shape")
D.PI=new C.Hp(3,"pdf")
D.kN=new C.Hp(4,"signature")
D.a1N=new C.Hp(5,"bio")
D.cCE=w([D.cP,D.lb,D.eW,D.PI,D.kN,D.a1N],B.az("O<Hp>"))
D.cCF=w([A.bi,A.cA],B.az("O<Gm>"))
D.cDe=w(["School","Documents","Sign & present"],x.s)
D.aV6=new B.ab(0,A.G,A.abt,A.tC,28)
D.cDx=w([D.aV6],x.V)
D.cDP=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.NU=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.ar6=w([A.hy,A.DB,A.aK,A.c,A.o1,A.au],x.O)
D.ei3=new B.z(0.1,0.08)
D.ecL=new B.z(0.3,0.05)
D.e1w=new B.z(0.55,0.1)
D.e5r=new B.z(0.8,0.06)
D.e8k=new B.z(0.92,0.16)
D.e7S=new B.z(0.2,0.2)
D.e5S=new B.z(0.7,0.22)
D.ebu=new B.z(0.05,0.4)
D.e8J=new B.z(0.95,0.45)
D.e2b=new B.z(0.12,0.7)
D.e4g=new B.z(0.88,0.75)
D.e4o=new B.z(0.4,0.9)
D.e0e=new B.z(0.65,0.93)
D.e54=new B.z(0.25,0.97)
D.e6k=new B.z(0.85,0.9)
D.e2Z=new B.z(0.5,0.04)
D.cF7=w([D.ei3,D.ecL,D.e1w,D.e5r,D.e8k,D.e7S,D.e5S,D.ebu,D.e8J,D.e2b,D.e4g,D.e4o,D.e0e,D.e54,D.e6k,D.e2Z],x.G)
D.cFe=w([A.c,A.hx,A.aY,A.aS],x.O)
D.dHG=new C.jt("office_blue","Office Blue",A.bk,A.dm,A.aJ,A.c,A.k5)
D.dHR=new C.jt("campus_green","Campus Green",A.aX,A.fZ,A.ep,A.mz,A.rw)
D.dHH=new C.jt("sunset","Sunset",A.fz,A.k4,A.ng,A.ih,A.q6)
D.dHI=new C.jt("midnight","Midnight",A.aD,A.k_,A.cl,A.M,A.dt)
D.dHT=new C.jt("classic","Classic",A.dp,A.dB,A.lp,A.hP,A.fV)
D.dHQ=new C.jt("rose_gold","Rose Gold",A.hx,A.wi,A.wh,A.uk,A.zB)
D.dHB=new C.jt("ocean_teal","Ocean Teal",A.f5,A.ub,A.nh,A.qh,A.rn)
D.dHA=new C.jt("slate_pro","Slate Pro",A.bv,A.M,A.aJ,A.aO,A.aK)
D.dHz=new C.jt("neon_night","Neon Night",A.b7,A.bd,A.aK,A.dI,A.M)
D.dHL=new C.jt("lavender","Lavender",A.b2,A.oY,A.jg,A.oV,A.zn)
D.dHN=new C.jt("coral","Coral",A.cf,A.k4,A.rr,A.ih,A.o2)
D.dHC=new C.jt("forest","Forest",A.fW,A.ev,A.cz,A.lq,A.eE)
D.dHD=new C.jt("berry","Berry",A.fc,G.UH,A.DC,D.aaY,A.k_)
D.dHK=new C.jt("sand","Sand",A.e1,A.ik,A.ng,A.hP,A.bJ)
D.dHP=new C.jt("ice","Ice",A.mx,A.Jm,A.aJ,A.mv,A.fj)
D.dHF=new C.jt("charcoal","Charcoal",A.aj,A.aO,A.cl,A.bj,A.M)
D.dHy=new C.jt("mint","Mint",A.aS,A.fr,A.fZ,A.lq,A.p5)
D.dHO=new C.jt("crimson","Crimson",A.bM,A.mB,A.k2,A.Dz,A.rI)
D.b1H=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dHJ=new C.jt("gold","Gold",A.o_,A.u9,A.o0,D.b1H,A.lo)
D.dHM=new C.jt("aqua","Aqua",A.bL,A.Do,A.nY,A.oX,A.o4)
D.dHE=new C.jt("plum","Plum",A.my,A.wf,A.DC,A.Dd,A.rC)
D.dHS=new C.jt("steel","Steel",A.d5,A.dm,A.bj,A.k5,A.kX)
D.a_n=w([D.dHG,D.dHR,D.dHH,D.dHI,D.dHT,D.dHQ,D.dHB,D.dHA,D.dHz,D.dHL,D.dHN,D.dHC,D.dHD,D.dHK,D.dHP,D.dHF,D.dHy,D.dHO,D.dHJ,D.dHM,D.dHE,D.dHS],B.az("O<jt>"))
D.cFy=w([A.bT,A.j_],x.O)
D.PK=new C.hp(10,"rotate3d")
D.Gx=new C.hp(8,"flip")
D.aB5=new C.hp(19,"spiral")
D.pC=new C.hp(16,"bounce")
D.aB8=new C.hp(9,"flipVertical")
D.cFz=w([D.PK,D.Gx,D.aB5,D.pC,D.aB8],x.i)
D.e4=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cFT=w([0.62,1],x.x)
D.cGp=w([0,0.32,0.68,1],x.x)
D.mi=new C.hp(6,"zoom")
D.tw=new C.hp(4,"slideUp")
D.tv=new C.hp(2,"slideLeft")
D.cGy=w([D.mi,D.Gx,D.tw,D.PK,D.tv],x.i)
D.cH1=w([A.bX,A.hx,A.ie,A.hy,A.c],x.O)
D.aUX=new B.ab(0,A.G,D.aa5,A.tC,30)
D.cHJ=w([D.aUX],x.V)
D.dPY=new B.u(0,-2.5)
D.dPO=new B.u(-2.5,0)
D.dOw=new B.u(2.5,0)
D.cHM=w([A.Q_,A.a29,A.aC5,A.a28,D.dPY,H.aC1,D.dPO,D.dOw],x.dN)
D.FJ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cIc=w([23,114,69,56,80,144],x.t)
D.cIA=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cIZ=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cKq=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cKu=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bc=new C.ua(0,"rectangle")
D.eG=new C.ua(1,"circle")
D.kO=new C.ua(6,"hexagon")
D.cKG=w([D.bc,D.eG,D.kO],x.m)
D.nF=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ab3=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cLd=w([D.ab3,A.ev],x.O)
D.e1H=new B.z("","Classic")
D.e0r=new B.z("caps","Bold caps")
D.ebx=new B.z("elegant","Elegant")
D.ege=new B.z("shadow","Shadow")
D.e5M=new B.z("neon","Neon glow")
D.eeU=new B.z("outline","Outline")
D.ee8=new B.z("marker","Highlighter")
D.egp=new B.z("stamp","Stamp")
D.efS=new B.z("retro","Retro")
D.e4N=new B.z("threed","3D")
D.ec1=new B.z("fire","Fire")
D.ecU=new B.z("ice","Ice")
D.eaK=new B.z("chalk","Chalk")
D.eaP=new B.z("comic","Comic")
D.egr=new B.z("sunset","Sunset")
D.ehv=new B.z("softglow","Soft glow")
D.edQ=new B.z("lowercase","Lowercase")
D.ebg=new B.z("double","Echo")
D.ehC=new B.z("whisper","Whisper")
D.arX=w([D.e1H,D.e0r,D.ebx,D.ege,D.e5M,D.eeU,D.ee8,D.egp,D.efS,D.e4N,H.aH4,D.ec1,D.ecU,D.eaK,D.eaP,A.a2Y,D.egr,D.ehv,D.edQ,D.ebg,D.ehC],x.L)
D.cMp=w([3,5,7,10,12,15],x.t)
D.cND=w([A.bX,A.bJ,A.c,A.eB,A.cM],x.O)
D.d85=new C.rK(10,"cardWorld")
D.Bl=new C.Au(3,"rounded")
D.don=new C.l0("world","NGMY World",D.d85,D.Bl,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d86=new C.rK(11,"cardSplit")
D.doj=new C.l0("business","Business Wire",D.d86,D.Bl,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d87=new C.rK(12,"cardBreaking")
D.dow=new C.l0("breaking","Breaking Red",D.d87,D.Bl,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d88=new C.rK(13,"cardFeature")
D.dop=new C.l0("feature","Tech Feature",D.d88,D.Bl,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.azE=new C.rK(6,"circle")
D.azy=new C.Au(4,"circle")
D.dot=new C.l0("parchment","Royal Circle",D.azE,D.azy,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.doi=new C.l0("ocean","Blue Ocean",D.azE,D.azy,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d8b=new C.rK(7,"rail")
D.azx=new C.Au(1,"double")
D.dok=new C.l0("forest","Green Leaf",D.d8b,D.azx,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.azB=new C.rK(1,"sideBySide")
D.doy=new C.l0("herald","NGMY Herald",D.azB,D.Bl,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.azA=new C.rK(0,"classic")
D.a1_=new C.Au(9,"shadow")
D.dox=new C.l0("daily","The Daily",D.azA,D.a1_,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d89=new C.rK(2,"splash")
D.azz=new C.Au(6,"cutCorner")
D.doh=new C.l0("tabloid","Big Tabloid",D.d89,D.azz,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.azF=new C.rK(9,"minimal")
D.dos=new C.l0("modern","Modern Digest",D.azF,D.Bl,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.azC=new C.rK(3,"magazine")
D.azw=new C.Au(0,"plain")
D.doo=new C.l0("midnight","Midnight Edition",D.azC,D.azw,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d8c=new C.rK(8,"banner")
D.doq=new C.l0("metro","Metro Wire",D.d8c,D.azz,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d84=new C.Au(8,"arch")
D.dor=new C.l0("sunrise","Sunrise Post",D.azC,D.d84,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.azD=new C.rK(5,"scrapbook")
D.d83=new C.Au(5,"tape")
D.dom=new C.l0("neon","Neon Beat",D.azD,D.d83,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d8a=new C.rK(4,"wrap")
D.doz=new C.l0("gold","Golden Press",D.d8a,D.a1_,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.doA=new C.l0("minimal","Paper White",D.azF,D.a1_,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dol=new C.l0("gazette","Fresh Gazette",D.azA,D.azx,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dov=new C.l0("times","Classic Times",D.azB,D.azw,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Pg=new C.Au(2,"polaroid")
D.dou=new C.l0("scrapbook","Memory Scrapbook",D.azD,D.Pg,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_B=w([D.don,D.doj,D.dow,D.dop,D.dot,D.doi,D.dok,D.doy,D.dox,D.doh,D.dos,D.doo,D.doq,D.dor,D.dom,D.doz,D.doA,D.dol,D.dov,D.dou],B.az("O<l0>"))
D.cNP=w([0.45,1],x.x)
D.FL=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cO9=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fmF=new C.o9("Original",0,1,1,0,0,0)
D.fmJ=new C.o9("Black & white",0,1.1,0,0,0,0)
D.fmw=new C.o9("Noir",-0.05,1.55,0,0,0,0)
D.fmA=new C.o9("Sepia",0,1,0.25,0.9,0,0)
D.fmz=new C.o9("Vivid",0,1.15,1.6,0,0,0)
D.fms=new C.o9("Pop",0,1.3,1.9,0,0,0)
D.fmu=new C.o9("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fmG=new C.o9("Matte",0,0.9,0.85,0,0,0.55)
D.fmB=new C.o9("Cool",0,1.05,1,-0.8,0,0)
D.fmI=new C.o9("Warm",0.03,1.05,1.1,0.8,0,0)
D.fmt=new C.o9("Golden hour",0.04,1,1.25,1,0,0)
D.fmy=new C.o9("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fmH=new C.o9("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fmx=new C.o9("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fmD=new C.o9("Retro",0,0.9,0.7,0.4,0,0.35)
D.fmC=new C.o9("Forest",0,1,1.2,-0.1,-0.45,0)
D.fmE=new C.o9("Rose",0,1,1.1,0.3,0.4,0)
D.fmv=new C.o9("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cOa=w([D.fmF,D.fmJ,D.fmw,D.fmA,D.fmz,D.fms,D.fmu,D.fmG,D.fmB,D.fmI,D.fmt,D.fmy,D.fmH,D.fmx,D.fmD,D.fmC,D.fmE,D.fmv],B.az("O<o9>"))
D.aZZ=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cOb=w([D.ab3,A.ev,D.aZZ],x.O)
D.dZ_=new B.z(0.12,0.3)
D.ed3=new B.z(0.26,0.75)
D.ebt=new B.z(0.8,0.22)
D.egz=new B.z(0.9,0.7)
D.edP=new B.z(0.5,0.15)
D.eeW=new B.z(0.65,0.85)
D.e3r=new B.z(0.08,0.85)
D.cOm=w([D.dZ_,D.ed3,D.ebt,D.egz,D.edP,D.eeW,D.e3r],x.G)
D.as5=w([A.b7,A.bX,A.bC,A.bg],x.O)
D.cP8=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cPk=w([A.c,A.fj,A.dy,A.uc],x.O)
D.b1T=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cQe=w([D.b1T,D.a9V],x.O)
D.cQf=w([A.wc,A.au],x.O)
D.cQt=w([0,0.25,0.75,1],x.x)
D.cQv=w([A.w8,A.o1],x.O)
D.aAG=new C.kE(10,"kenteSunset")
D.fqW=w([D.aad,A.jA,A.au],x.O)
D.djF=new C.jc("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aAG,4294964964,4282000405,4279983648,D.js)
D.aAH=new C.kE(11,"indigoMudcloth")
D.b_O=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fr9=w([D.b_O,A.a9S,A.hQ],x.O)
D.djN=new C.jc("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aAH,4294439140,4279903102,4279903102,D.js)
D.aAI=new C.kE(12,"adinkraRoyal")
D.bb3=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fra=w([D.a8Z,D.bb3,A.au],x.O)
D.djP=new C.jc("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aAI,4294965484,4285218591,4287322667,D.js)
D.aAJ=new C.kE(13,"nileLotus")
D.b7U=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b55=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.frf=w([D.b7U,D.b55,A.hQ],x.O)
D.djO=new C.jc("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAJ,4294244340,4279196764,4279196764,D.js)
D.aAK=new C.kE(14,"shweshweIvory")
D.b3s=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b2u=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b0g=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fqX=w([D.b3s,D.b2u,D.b0g],x.O)
D.djK=new C.jc("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAK,4294505710,4279970378,4291058750,D.js)
D.qM=new C.kE(15,"certIvoryNavy")
D.fqV=w([D.JC,D.iY,A.hQ],x.O)
D.aAc=new C.wS(1,"ringsNdoa")
D.djH=new C.jc("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qM,4294966259,4279378237,4291404327,D.aAc)
D.a1v=new C.wS(2,"coupleCards")
D.djC=new C.jc("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qM,4294966259,4279378237,4291404327,D.a1v)
D.Bo=new C.kE(18,"certIvoryNavyBar")
D.a8X=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fr8=w([D.a8X,D.iY,A.hQ],x.O)
D.aAd=new C.wS(3,"kuhoweshaForm")
D.djA=new C.jc("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Bo,4294966519,4279378237,4291404327,D.aAd)
D.aa3=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.frs=w([D.JC,D.aa3,A.hQ],x.O)
D.a1w=new C.wS(4,"mahariPande")
D.djD=new C.jc("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qM,4294966259,4279904068,4291404327,D.a1w)
D.aAL=new C.kE(16,"certIvoryGreen")
D.b2Y=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fqZ=w([A.J0,D.b2Y,A.hQ],x.O)
D.aAe=new C.wS(5,"familiaMti")
D.djJ=new C.jc("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aAL,4294966776,4280241466,4291404327,D.aAe)
D.a1x=new C.wS(6,"ndoaSafi")
D.djB=new C.jc("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Bo,4294966519,4279378237,4291404327,D.a1x)
D.b6D=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fr1=w([D.JC,A.hQ,D.b6D],x.O)
D.a1y=new C.wS(7,"peteWide")
D.djG=new C.jc("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qM,4294966259,4282001936,4291404327,D.a1y)
D.djQ=new C.wS(8,"muhuriCrest")
D.djz=new C.jc("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qM,4294966259,4279378237,4291404327,D.djQ)
D.frb=w([D.a8X,D.aa3,A.hQ],x.O)
D.djR=new C.wS(9,"fomuWazi")
D.djM=new C.jc("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Bo,4294966519,4279904068,4291404327,D.djR)
D.aAM=new C.kE(17,"certIvoryRose")
D.b3u=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fre=w([D.b3u,D.aaJ,A.hQ],x.O)
D.a1u=new C.wS(10,"upendoOrnate")
D.djI=new C.jc("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aAM,4294965493,4286200650,4291404327,D.a1u)
D.cQS=w([D.djF,D.djN,D.djP,D.djO,D.djK,D.djH,D.djC,D.djA,D.djD,D.djJ,D.djB,D.djG,D.djz,D.djM,D.djI],x.h)
D.e5=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Gy=new C.vl(0,"emojis")
D.Bv=new C.vl(1,"pictures")
D.Gz=new C.vl(2,"icons3d")
D.a1P=new C.vl(3,"animations")
D.PM=new C.vl(4,"videoMotion")
D.Bw=new C.vl(5,"luxe")
D.a_I=w([D.Gy,D.Bv,D.Gz,D.a1P,D.PM,D.Bw],B.az("O<vl>"))
D.efv=new B.z(A.dS,"Looks")
D.e5k=new B.z(A.xq,"Light")
D.e5g=new B.z(A.nz,"Colour")
D.e3s=new B.z(A.x0,"Effects")
D.agC=new B.a0(63112,"MaterialIcons",!1)
D.e0E=new B.z(D.agC,"Crop")
D.cRj=w([D.efv,D.e5k,D.e5g,D.e3s,D.e0E],x.f2)
D.cRU=w([],x.D)
D.frp=w([],x.L)
D.e3D=new B.z("Flashcard",D.Gt)
D.e78=new B.z("Quiz",D.Gu)
D.e8W=new B.z("Worksheet",D.Gv)
D.e6f=new B.z("Notes",D.mh)
D.e7B=new B.z("Section",D.Bt)
D.cSu=w([D.e3D,D.e78,D.e8W,D.e6f,D.e7B],B.az("O<+(n,mc)>"))
D.dlw=new C.kE(6,"beadedPearl")
D.b9f=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b5F=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.frt=w([D.b9f,D.b5F,A.hQ],x.O)
D.aAa=new C.jc("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dlw,4294966774,4286209070,4291404327,D.js)
D.dlx=new C.kE(7,"artDeco")
D.b90=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bbi=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.frr=w([D.b90,D.bbi,A.bT],x.O)
D.aAb=new C.jc("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dlx,4294440434,4280228630,4290283019,D.js)
D.dly=new C.kE(8,"rosetteCorners")
D.baC=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b1V=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b5B=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fr4=w([D.baC,D.b1V,D.b5B],x.O)
D.aA9=new C.jc("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dly,4294702831,4285218602,4291394365,D.js)
D.dlz=new C.kE(9,"modernLedger")
D.fr3=w([A.c,D.iY,D.iY],x.O)
D.aA8=new C.jc("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dlz,4294967295,4279378237,4279378237,D.js)
D.cSy=w([D.aAa,D.aAb,D.aA9,D.aA8],x.h)
D.cSG=w([A.ie,A.o1],x.O)
D.ce=new C.hp(0,"none")
D.dc=new C.hp(1,"fade")
D.Gw=new C.hp(3,"slideRight")
D.aB7=new C.hp(5,"slideDown")
D.dGa=new C.hp(7,"zoomOut")
D.a1O=new C.hp(11,"cube")
D.dG5=new C.hp(12,"blur")
D.aB4=new C.hp(13,"dissolve")
D.dG6=new C.hp(14,"wipeLeft")
D.dG7=new C.hp(15,"wipeRight")
D.PL=new C.hp(17,"push")
D.dG8=new C.hp(18,"flash")
D.aB6=new C.hp(20,"swing")
D.dG9=new C.hp(21,"curtain")
D.Or=w([D.ce,D.dc,D.tv,D.Gw,D.tw,D.aB7,D.mi,D.dGa,D.Gx,D.aB8,D.PK,D.a1O,D.dG5,D.aB4,D.dG6,D.dG7,D.pC,D.PL,D.dG8,D.aB5,D.aB6,D.dG9],x.i)
D.Os=w([D.a1t,D.a1r,D.a1k,D.a1l,D.a1m,D.a1p,D.a1n,D.a1o,D.a1s,D.a1q,D.aAa,D.aAb,D.aA9,D.aA8],x.h)
D.cT4=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cT8=w([A.zq,A.hy,A.bT],x.O)
D.e4I=new B.z(A.t7,"Design")
D.egY=new B.z(D.agS,"Word sizes")
D.edz=new B.z(A.AF,"Text")
D.bt0=new B.a0(983182,"MaterialIcons",!1)
D.edD=new B.z(D.bt0,"Photo")
D.e0g=new B.z(A.l6,"Logo")
D.ei1=new B.z(A.F7,"News")
D.cTd=w([D.e4I,D.egY,D.edz,D.edD,D.e0g,D.ei1],x.f2)
D.cTe=w(["golddust","sparkle","sheen"],x.s)
D.dHx=new C.el("upload_pdf",K.LP,"Upload PDF")
D.dGH=new C.el("sign_paper",A.F4,"Sign Paper")
D.bsi=new B.a0(63438,"MaterialIcons",!1)
D.dHt=new C.el("hd_photo",D.bsi,"HD Photo")
D.dGz=new C.el("sharpen",E.XG,"Sharpen")
D.dGJ=new C.el("print",K.LP,"Download PDF")
D.dHa=new C.el("rotate",D.agC,"Rotate")
D.dGS=new C.el("text_box",A.AF,"Text Box")
D.dGU=new C.el("picture",A.ta,"Picture")
D.dGQ=new C.el("title",A.xk,"Title")
D.dGM=new C.el("subtitle",T.ahr,"Subtitle")
D.dHj=new C.el("bullets",I.XY,"Bullet List")
D.dGN=new C.el("numbered",A.LF,"Numbered")
D.dHm=new C.el("quote",A1.Aw,"Quote")
D.dGZ=new C.el("citation",A.pn,"Citation")
D.dHp=new C.el("date_stamp",Av.XL,"Date Stamp")
D.dHc=new C.el("page_number",A.xj,"Page #")
D.dHg=new C.el("header_bar",A.F3,"Header")
D.dGT=new C.el("footer_bar",P.ahI,"Footer")
D.dGI=new C.el("divider",A.uJ,"Divider")
D.dGE=new C.el("highlight",A.Y2,"Highlight")
D.dHi=new C.el("redact",A.xn,"Redact")
D.dH5=new C.el("callout",A.As,"Callout")
D.dHr=new C.el("checkboxes",I.afV,"Checklist")
D.dH2=new C.el("table",A.Yt,"Table")
D.dGX=new C.el("memo",I.Ye,"Memo")
D.dH6=new C.el("letter",A.ES,"Letter")
D.brT=new B.a0(63259,"MaterialIcons",!0)
D.dGy=new C.el("agenda",D.brT,"Agenda")
D.dGK=new C.el("toc",Au.ah5,"Contents")
D.bse=new B.a0(63406,"MaterialIcons",!1)
D.dH3=new C.el("sig_line",D.bse,"Sign Line")
D.dGr=new C.el("initial_line",A.j5,"Initials")
D.dGu=new C.el("approved",A.l6,"APPROVED")
D.dH8=new C.el("draft",A.ol,"DRAFT")
D.dHe=new C.el("confidential",A.j6,"Confidential")
D.dHh=new C.el("sticky",A.LU,"Sticky Note")
D.dHq=new C.el("progress",A.ah4,"Progress")
D.btv=new B.a0(983507,"MaterialIcons",!1)
D.dGF=new C.el("stars",D.btv,"Star Rating")
D.dGp=new C.el("equation",A.agV,"Equation")
D.dGA=new C.el("timeline",A.LV,"Timeline")
D.dGY=new C.el("two_col",A.Yv,"Two Columns")
D.dGC=new C.el("compare",A0.XO,"Compare")
D.dGn=new C.el("duplicate_el",A.fE,"Duplicate")
D.dHv=new C.el("delete_el",A.e8,"Delete")
D.bs9=new B.a0(63352,"MaterialIcons",!1)
D.dHl=new C.el("bring_fwd",D.bs9,"Bring Front")
D.bs8=new B.a0(63351,"MaterialIcons",!1)
D.dGs=new C.el("send_back",D.bs8,"Send Back")
D.dH7=new C.el("align_left",D.XW,"Align L")
D.dHd=new C.el("align_center",D.XV,"Align C")
D.dHu=new C.el("align_right",D.XX,"Align R")
D.dGR=new C.el("word_count",A_.Xo,"Word Count")
D.dGO=new C.el("link_text",A.hc,"Link")
D.dHb=new C.el("phone",A.iv,"Phone")
D.dGD=new C.el("email",A.Au,"Email")
D.dHw=new C.el("qr_placeholder",A.j8,"QR Placeholder")
D.dGx=new C.el("rectangle",A2.EG,"Rectangle")
D.dH1=new C.el("circle",A.t2,"Circle")
D.dGt=new C.el("arrow",A.jp,"Arrow")
D.dHk=new C.el("line",A.uJ,"Line")
D.dGG=new C.el("triangle",A.XM,"Triangle")
D.bs0=new B.a0(63318,"MaterialIcons",!1)
D.dGL=new C.el("grayscale",D.bs0,"Grayscale")
D.dGV=new C.el("brighten",I.age,"Brighten")
D.dH_=new C.el("flip_h",A.EJ,"Flip H")
D.bs7=new B.a0(63348,"MaterialIcons",!1)
D.dHs=new C.el("flip_v",D.bs7,"Flip V")
D.dHf=new C.el("cover_page",A.pi,"Cover Page")
D.dGq=new C.el("invoice",A.h1,"Invoice")
D.dGB=new C.el("resume",A.m3,"Resume")
D.dGP=new C.el("minutes",A.of,"Minutes")
D.dGv=new C.el("lab_report",A.LR,"Lab Report")
D.dGw=new C.el("rubric",A.x4,"Rubric")
D.dH0=new C.el("flashcard_tool",P.F_,"Flashcard")
D.dHn=new C.el("quiz_tool",A.EW,"Quiz Block")
D.dH4=new C.el("worksheet_tool",L.EA,"Worksheet")
D.dH9=new C.el("outline_share",A.LS,"Share Outline")
D.dHo=new C.el("export_json",D.ag0,"Export JSON")
D.dGo=new C.el("new_slide",D.Xn,"New Slide")
D.dGW=new C.el("present",A.pp,"Present")
D.cTD=w([D.dHx,D.dGH,D.dHt,D.dGz,D.dGJ,D.dHa,D.dGS,D.dGU,D.dGQ,D.dGM,D.dHj,D.dGN,D.dHm,D.dGZ,D.dHp,D.dHc,D.dHg,D.dGT,D.dGI,D.dGE,D.dHi,D.dH5,D.dHr,D.dH2,D.dGX,D.dH6,D.dGy,D.dGK,D.dH3,D.dGr,D.dGu,D.dH8,D.dHe,D.dHh,D.dHq,D.dGF,D.dGp,D.dGA,D.dGY,D.dGC,D.dGn,D.dHv,D.dHl,D.dGs,D.dH7,D.dHd,D.dHu,D.dGR,D.dGO,D.dHb,D.dGD,D.dHw,D.dGx,D.dH1,D.dGt,D.dHk,D.dGG,D.dGL,D.dGV,D.dH_,D.dHs,D.dHf,D.dGq,D.dGB,D.dGP,D.dGv,D.dGw,D.dH0,D.dHn,D.dH4,D.dH9,D.dHo,D.dGo,D.dGW],B.az("O<el>"))
D.cTJ=w([A.cl,A.aj],x.O)
D.e_S=new B.z(4286331629,4292552567)
D.e_F=new B.z(4280640491,4278630100)
D.e0_=new B.z(4294538006,4292943176)
D.e_1=new B.z(4278556265,4280640491)
D.cOw=w([D.e_S,D.e_F,D.e0_,D.e_1],x.n)
D.ce7=w([4294626325,4280472558,4294210230],x.t)
D.dGi=new C.no("colorful","Colorful",A.nz,D.cOw,4294967295,3875536895,D.ce7,D.mi)
D.e_t=new B.z(4279522093,4279657780)
D.e_J=new B.z(4281750292,4283268111)
D.e_4=new B.z(4278603323,4279203438)
D.e_K=new B.z(4282343954,4279599165)
D.coQ=w([D.e_t,D.e_J,D.e_4,D.e_K],x.n)
D.cdQ=w([4288931381,4294829706,4287033260],x.t)
D.dGe=new C.no("nature","Nature",A.F5,D.coQ,4294442727,3874290891,D.cdQ,D.dc)
D.e_n=new B.z(4279369771,4283178389)
D.e_k=new B.z(4279179050,4286456526)
D.e_B=new B.z(4280163147,4290648157)
D.dZU=new B.z(4278322711,4285343961)
D.cFL=w([D.e_n,D.e_k,D.e_B,D.dZU],x.n)
D.ce3=w([4294210230,4280472558,4289170426],x.t)
D.dGc=new C.no("vibe","Vibe",A.Y_,D.cFL,4294967295,3874869502,D.ce3,D.tv)
D.e_W=new B.z(4290007817,4292552567)
D.e_Q=new B.z(4286328082,4294286859)
D.e_V=new B.z(4288485197,4294538006)
D.e_P=new B.z(4285343961,4293675161)
D.bLp=w([D.e_W,D.e_Q,D.e_V,D.e_P],x.n)
D.ce8=w([4294829706,4294967295,4284999929],x.t)
D.dGd=new C.no("celebration","Celebration",A.l2,D.bLp,4294967295,4009752557,D.ce8,D.pC)
D.e_i=new B.z(4279179050,4280171146)
D.e_m=new B.z(4279310375,4280232247)
D.e_a=new B.z(4278916151,4280172719)
D.e_j=new B.z(4279179050,4281549141)
D.czi=w([D.e_i,D.e_m,D.e_a,D.e_j],x.n)
D.cdL=w([4281908728,4294626325,4287931320],x.t)
D.dGh=new C.no("professional","Professional",A.Aq,D.czi,4294967295,3872118241,D.cdL,D.PL)
D.e_e=new B.z(4278995566,4278413729)
D.e_6=new B.z(4278727492,4279137424)
D.e_C=new B.z(4280171146,4278751666)
D.e_f=new B.z(4278995566,4279590517)
D.chT=w([D.e_e,D.e_6,D.e_C,D.e_f],x.n)
D.cdO=w([4286436348,4284410580,4294829706],x.t)
D.dGj=new C.no("ocean","Ocean",I.Yx,D.chT,4294967295,3873501950,D.cdO,D.tw)
D.e_R=new B.z(4286328082,4294538006)
D.e_T=new B.z(4286781507,4294677052)
D.e_N=new B.z(4283178389,4294197086)
D.e_U=new B.z(4288295954,4294688548)
D.cvy=w([D.e_R,D.e_T,D.e_N,D.e_U],x.n)
D.ce9=w([4294829706,4294967295,4294747557],x.t)
D.dGk=new C.no("sunset","Sunset",A.LW,D.cvy,4294967295,4009749973,D.ce9,D.dc)
D.e03=new B.z(4294967295,4294047225)
D.e_Z=new B.z(4294507260,4294967295)
D.e02=new B.z(4294967295,4293060848)
D.e_Y=new B.z(4294507260,4294047225)
D.cIG=w([D.e03,D.e_Z,D.e02,D.e_Y],x.n)
D.cdJ=w([4280640491,4279179050,4287931320],x.t)
D.dGg=new C.no("minimal","Minimal",A2.EG,D.cIG,4279179050,4282865001,D.cdJ,D.dc)
D.e_d=new B.z(4278979081,4280886564)
D.e_x=new B.z(4280031511,4278979081)
D.e_l=new B.z(4279308561,4281148438)
D.e_c=new B.z(4278979081,4280031511)
D.cVu=w([D.e_d,D.e_x,D.e_l,D.e_c],x.n)
D.cdX=w([4292128567,4294829706,4289241758],x.t)
D.dGl=new C.no("elegant","Elegant",A.lx,D.cVu,4294898631,3873957348,D.cdX,D.aB4)
D.e_z=new B.z(4280159034,4282058596)
D.e_9=new B.z(4278916151,4280163147)
D.e_H=new B.z(4281208933,4278916151)
D.e_q=new B.z(4279502891,4283178389)
D.d0x=w([D.e_z,D.e_9,D.e_H,D.e_q],x.n)
D.ce5=w([4294296657,4292128567,4291081725],x.t)
D.dGf=new C.no("royal","Royal Gold",A.iO,D.d0x,4294965222,3874084351,D.ce5,D.mi)
D.dZZ=new B.z(4278464302,4280163147)
D.e_8=new B.z(4278916151,4279455306)
D.e_A=new B.z(4280163147,4283040846)
D.dZW=new B.z(4278332450,4281413249)
D.cOe=w([D.dZZ,D.e_8,D.e_A,D.dZW],x.n)
D.cdK=w([4281193663,4289170426,4294210230],x.t)
D.dGm=new C.no("aurora","Aurora Glow",A.dS,D.cOe,4293983738,3869766608,D.cdK,D.dc)
D.v4=w([D.dGi,D.dGe,D.dGc,D.dGd,D.dGh,D.dGj,D.dGk,D.dGg,D.dGl,D.dGf,D.dGm],B.az("O<no>"))
D.b67=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cUc=w([A.qa,D.b67,A.qa],x.O)
D.cUr=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cUv=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eds=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.e4i=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e8x=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dYa=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e7g=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e5E=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e9F=new B.z("Surprise me","")
D.cUZ=w([D.eds,D.e4i,D.e8x,D.dYa,D.e7g,D.e5E,D.e9F],x.L)
D.b0i=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b9o=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cVF=w([A.c,D.b0i,D.b9o],x.O)
D.cXl=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aAE=new C.kE(0,"heritageGold")
D.b4V=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fru=w([D.b4V,H.aaa,A.au],x.O)
D.djL=new C.jc("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aAE,4294570461,4284234270,4292128567,D.js)
D.aAF=new C.kE(1,"heritageCrimson")
D.aZV=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b3t=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b9g=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fr7=w([D.aZV,D.b3t,D.b9g],x.O)
D.djE=new C.jc("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aAF,4294635750,4285213214,4292912216,D.js)
D.cXp=w([D.a1t,D.a1r,D.djL,D.djE,D.a1m,D.a1p],x.h)
D.dpD=new C.qY(1,"circuit")
D.dq5=new C.lP("neural","Neural Link","Robotic",D.dpD,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dpC=new C.qY(0,"grid")
D.dq2=new C.lP("signal","Signal Grid","Robotic",D.dpC,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dpI=new C.qY(2,"hexes")
D.dpO=new C.lP("core","Core Protocol","Robotic",D.dpI,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aB1=new C.qY(11,"diagonal")
D.dpZ=new C.lP("steel","Steel Tech","Robotic",D.aB1,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aB2=new C.qY(3,"rings")
D.dpN=new C.lP("vault","Vault Gold","Robotic",D.aB2,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dpG=new C.qY(13,"leaves")
D.dpQ=new C.lP("forest","Forest Morning","Nature",D.dpG,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aB3=new C.qY(5,"waves")
D.dpX=new C.lP("ocean","Ocean Calm","Nature",D.aB3,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dpJ=new C.qY(6,"sunset")
D.dq1=new C.lP("sunset","Sunset Glow","Nature",D.dpJ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dpK=new C.qY(7,"mountains")
D.dpP=new C.lP("mountain","Mountain Air","Nature",D.dpK,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dpL=new C.qY(8,"stars")
D.dpW=new C.lP("night","Night Sky","Nature",D.dpL,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1M=new C.qY(4,"orbs")
D.dpU=new C.lP("aurora","Aurora","Nature",D.a1M,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dq3=new C.lP("sand","Sand Dune","Nature",D.aB3,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dpM=new C.qY(9,"rays")
D.dpT=new C.lP("golden","Golden Hour","Warm",D.dpM,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dpR=new C.lP("royal","Royal Purple","Warm",D.aB1,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dpS=new C.lP("rose","Rose Petal","Warm",D.a1M,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dpF=new C.qY(12,"blocks")
D.dpV=new C.lP("electric","Electric Blue","Bold",D.dpF,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dq4=new C.lP("mint","Fresh Mint","Bold",D.a1M,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dpH=new C.qY(14,"minimal")
D.dq0=new C.lP("white","Clean White","Clean",D.dpH,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dpE=new C.qY(10,"frame")
D.dpY=new C.lP("midnight","Midnight Gold","Clean",D.dpE,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dq_=new C.lP("community","Community Green","Clean",D.aB2,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a07=w([D.dq5,D.dq2,D.dpO,D.dpZ,D.dpN,D.dpQ,D.dpX,D.dq1,D.dpP,D.dpW,D.dpU,D.dq3,D.dpT,D.dpR,D.dpS,D.dpV,D.dq4,D.dq0,D.dpY,D.dq_],B.az("O<lP>"))
D.cXL=w([D.zx,A.wc,A.hy,A.bT],x.O)
D.cY_=w([D.aaS,D.iY],x.O)
D.cY8=w(["pdf","docx","txt","md"],x.s)
D.ela=new B.bB(-3,150,34)
D.elb=new B.bB(-3,214,62)
D.elc=new B.bB(-3,288,62)
D.cYX=w([D.ela,D.elb,D.elc],B.az("O<+(Q,Q,Q)>"))
D.cZo=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cZW=w(["Write","Design","Print & fold"],x.s)
D.jt=new C.ua(2,"triangle")
D.Bu=new C.ua(3,"arrow")
D.fm=new C.ua(4,"line")
D.ju=new C.ua(5,"parallelogram")
D.cZY=w([D.bc,D.eG,D.jt,D.Bu,D.fm,D.ju,D.kO],x.m)
D.dZd=new B.z(240,96)
D.e0x=new B.z(560,46)
D.d_2=w([D.dZd,D.e0x],x.G)
D.frF=new C.wV(0,"classic")
D.dlC=new C.nk("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aAE,4294570461,4282000405,4284234270)
D.dlO=new C.nk("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aAF,4294635750,4281999378,4285213214)
D.dlD=new C.nk("elegant_navy","Umoja Mzuri",y.s,D.a1G,4294967035,4279378237,4290283019)
D.dlQ=new C.nk("elegant_gold","Umoja wa Dhahabu",y.Q,D.aAN,4294966515,4281016592,4289102906)
D.dlS=new C.nk("kente_sunset","Kente ya Jua",y.H,D.aAG,4294964964,4282000405,4279983648)
D.dlA=new C.nk("indigo_mudcloth","Nguo ya Indigo",y.n,D.aAH,4294439140,4279903102,4279903102)
D.dlF=new C.nk("adinkra_royal","Muhuri wa Adinkra",y.z,D.aAI,4294965484,4285218591,4287322667)
D.dlK=new C.nk("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aAJ,4294244340,4279196764,4279196764)
D.dlM=new C.nk("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aAK,4294505710,4279970378,4291058750)
D.frG=new C.wV(1,"ringsNdoa")
D.dlE=new C.nk("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qM,4294966259,4279378237,4291404327)
D.frI=new C.wV(2,"coupleCards")
D.dlP=new C.nk("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qM,4294966259,4279378237,4291404327)
D.frJ=new C.wV(3,"kuhoweshaForm")
D.dlL=new C.nk("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Bo,4294966519,4279378237,4291404327)
D.frK=new C.wV(4,"mahariPande")
D.dlB=new C.nk("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qM,4294966259,4279904068,4291404327)
D.frL=new C.wV(5,"familiaMti")
D.dlR=new C.nk("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aAL,4294966776,4280241466,4291404327)
D.frM=new C.wV(6,"ndoaSafi")
D.dlI=new C.nk("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Bo,4294966519,4279378237,4291404327)
D.frN=new C.wV(7,"peteWide")
D.dlH=new C.nk("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qM,4294966259,4282001936,4291404327)
D.frO=new C.wV(8,"muhuriCrest")
D.dlG=new C.nk("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qM,4294966259,4279378237,4291404327)
D.frP=new C.wV(9,"fomuWazi")
D.dlJ=new C.nk("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Bo,4294966519,4279904068,4291404327)
D.frH=new C.wV(10,"upendoOrnate")
D.dlN=new C.nk("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aAM,4294965493,4286200650,4291404327)
D.OE=w([D.dlC,D.dlO,D.dlD,D.dlQ,D.dlS,D.dlA,D.dlF,D.dlK,D.dlM,D.dlE,D.dlP,D.dlL,D.dlB,D.dlR,D.dlI,D.dlH,D.dlG,D.dlJ,D.dlN],B.az("O<nk>"))
D.Bs=new C.aoL(0,"landscape169")
D.nH=new C.aoL(1,"portrait916")
D.d_I=w([D.Bs,D.nH],B.az("O<aoL>"))
D.att=w([A.hy,A.bJ,A.cM,A.ie,A.c],x.O)
D.tn=w([A.bT,A.ik],x.O)
D.dYv=new B.z(1000,"M")
D.e1y=new B.z(900,"CM")
D.e0s=new B.z(500,"D")
D.dZS=new B.z(400,"CD")
D.dYw=new B.z(100,"C")
D.e1z=new B.z(90,"XC")
D.e0t=new B.z(50,"L")
D.dZT=new B.z(40,"XL")
D.dYA=new B.z(10,"X")
D.e1J=new B.z(9,"IX")
D.e0H=new B.z(5,"V")
D.e0f=new B.z(4,"IV")
D.dYV=new B.z(1,"I")
D.d0f=w([D.dYv,D.e1y,D.e0s,D.dZS,D.dYw,D.e1z,D.e0t,D.dZT,D.dYA,D.e1J,D.e0H,D.e0f,D.dYV],x.ek)
D.em4=new B.cI(["open",A.j5,"Open & write","Keep writing this book"])
D.emt=new B.cI(["print",A.td,"Print as a book","Fold and staple it"])
D.d0n=w([D.em4,D.emt],B.az("O<+(n,a0,n,n)>"))
D.d0Y=w([D.a1O,D.mi,D.Gx,D.PL,D.dc,D.PK],x.i)
D.edX=new B.z(-1,"Small")
D.dYj=new B.z(0,"Normal")
D.dYU=new B.z(1,"Big")
D.dZr=new B.z(2,"Huge")
D.d1o=w([D.edX,D.dYj,D.dYU,D.dZr],x.ek)
D.d1M=w([49,65,89,38,83,89],x.t)
D.d1T=w([A.wc,A.hy,A.bT],x.O)
D.d2j=w([D.dc,D.mi,D.tv,D.a1O,D.Gx,D.PL],x.i)
D.ayL=new B.dX([0,D.JR,8,D.ac0,12,D.ac1],B.az("dX<I,a1Z>"))
D.dLb={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b99=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.czs=w([A.bJ,D.b99],x.O)
D.cSg=w([A.bd,A.bk],x.O)
D.cNr=w([A.bX,A.aY,A.ct],x.O)
D.d0o=w([A.cl,A.bv],x.O)
D.cGB=w([A.b7,A.fc],x.O)
D.cPV=w([A.b2,A.f4],x.O)
D.b3f=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cPf=w([D.b3f,A.o1],x.O)
D.cKd=w([A.fT,A.wd],x.O)
D.cGq=w([A.bs,A.c7],x.O)
D.d4U=new B.br(D.dLb,[D.czs,H.akj,D.cSg,D.cNr,D.d0o,D.cGB,D.cPV,D.cPf,D.cKd,D.cGq],B.az("br<n,ak<x>>"))
D.dKn={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a0G=new B.br(D.dKn,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("br<n,n>"))
D.a0M=new B.br(A.iz,[],B.az("br<I,+icon3d,picture(n?,n?)>"))
D.d8P=new F.Ls(30,null)
D.ddU=new F.m8("Chapter 1","","","")
D.d_v=w([D.ddU],x.B)
D.ddY=new F.qO("My Book","","",D.d_v,E.aA_)
D.ddW=new F.u0("starry",null,null,null,null,"","","")
D.ddZ=new F.qO("Dream Big","","",E.a_S,D.ddW)
D.ddX=new F.u0("story",null,null,null,null,"","","")
D.de_=new F.qO("Little Lion","","",E.a_S,D.ddX)
D.ddV=new F.u0("vintage",null,null,null,null,"","","")
D.de0=new F.qO("Our Story","","",E.a_S,D.ddV)
D.dh0=new C.Dr("","NGMY","","")
D.dog=new C.yF("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dGb=new C.aZ9(null,null,null,null)
D.dHU=new C.aoQ(null)
D.dI6=new C.apl(0,"smaller")
D.dI7=new C.apl(1,"bigger")
D.aBh=new C.apl(2,"fit")
D.dNt=new B.u(3,6)
D.dND=new B.u(4,8)
D.dQV=new B.C(E.acP,T.a8u,null)
D.dQZ=new B.C(A.Vs,A.lQ,null)
D.buL=new B.ad(A.mQ,16,A.c1,null,null,null)
D.dR2=new B.C(A.kz,D.buL,null)
D.aZp=new B.fe(2.2,null,null,null,null,A.c,null,null,null,null)
D.dRc=new B.C(A.Ec,D.aZp,null)
D.bER=new B.ad(A.cu,16,A.aA,null,null,null)
D.dRg=new B.C(A.ej,D.bER,null)
D.f_b=new B.w("Play",null,A.oG,null,null,null,null,null,null,null,null,null)
D.cSv=w([U.aiP,A.qZ,D.f_b],x.p)
D.eqm=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.cSv,null)
D.dRj=new B.C(A.pe,D.eqm,null)
D.aZy=new B.fe(2.4,null,null,null,null,null,null,null,null,null)
D.evA=new B.a3(20,20,D.aZy,null)
D.dRo=new B.C(A.kz,D.evA,null)
D.f7C=new B.w("Seconds per slide",null,A.hg,null,null,null,null,null,null,null,null,null)
D.dRv=new B.C(A.bm,D.f7C,null)
D.dSQ=new C.a6K(2,"print")
D.dST=new B.iI(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dUv=new B.h1("/Annot")
D.dUx=new B.h1("/URI")
D.eUU=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dWf=new B.je("share",48,D.eUU,null,B.az("je<n>"))
D.bEL=new B.ad(A.dS,14,A.eB,null,null,null)
D.dWo=new B.cH(null,-2,-2,null,null,null,D.bEL,null)
D.b6u=new B.x(0.3333333333333333,0,0,0,A.t)
D.cBh=w([D.b6u,A.K],x.O)
D.bKg=new B.a4(A.a3,A.a7,A.x,D.cBh,null,null)
D.aSC=new B.o(null,null,null,null,null,D.bKg,A.n)
D.bdd=new B.kB(D.aSC,A.bb,null,null)
D.dWA=new B.cH(0,0,null,0,8,null,D.bdd,null)
D.cWp=w([A.hP,A.o2,A.cf],x.O)
D.dXd=new B.bR(A.A,0.5,A.x,null,0,D.cWp,null,null)
D.dZk=new B.z(0.22,A.bk)
D.e21=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.e3Y=new B.z(0.5,A.hx)
D.ecG=new B.z(0.78,A.aS)
D.elW=new B.cI([A.bC,0.22,0.7,2.6])
D.em0=new B.cI([A.b7,0.36,1.2,1.3])
D.em6=new B.cI([A.dM,0.28,0.2,0.4])
D.emc=new B.cI([A.cs,0.05,0.3,0.35])
D.emi=new B.cI([A.bs,0.28,0.9,0])
D.emq=new B.cI([A.aD,-0.25,-0.15,0.45])
D.enb=new B.cI([A.bX,0.42,1,4.1])
D.eq5=new B.a7C(9)
D.bvS=new B.ad(A.F7,28,A.ct,null,null,null)
D.f87=new B.w("NGMY News",null,A.dR,null,null,null,null,null,null,null,null,null)
D.bmZ=new B.bG(1,A.bp,D.f87,null)
D.cZr=w([D.bvS,A.aw,D.bmZ],x.p)
D.eqh=new B.cz(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cZr,null)
D.bw2=new B.ad(A.pn,16,A.c,null,null,null)
D.f9r=new B.w("Book",null,A.r2,null,null,null,null,null,null,null,null,null)
D.d1S=w([D.bw2,A.ek,D.f9r],x.p)
D.eqo=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.d1S,null)
D.bCp=new B.ad(A.j6,10,A.c,null,null,null)
D.eYq=new B.w("Pro",null,A.n0,null,null,null,null,null,null,null,null,null)
D.cSA=w([D.bCp,A.tN,D.eYq],x.p)
D.eqs=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.cSA,null)
D.f7B=new B.w("Make a newspaper",null,Ao.Rz,null,null,null,null,null,null,null,null,null)
D.bLn=w([E.YS,A.ab,D.f7B],x.p)
D.eqt=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.bLn,null)
D.bAZ=new B.ad(A.l2,18,A.bJ,null,null,null)
D.f_p=new B.w("Ending celebration",null,A.jc,null,null,null,null,null,null,null,null,null)
D.cYy=w([D.bAZ,A.br,D.f_p],x.p)
D.eqw=new B.cz(A.aZ,A.e,A.j,A.m,null,A.p,null,0,D.cYy,null)
D.bCb=new B.ad(A.j5,18,A.k4,null,null,null)
D.eFW=new B.F(!0,A.k4,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new B.w("Write",null,D.eFW,null,null,null,null,null,null,null,null,null)
D.cIv=w([D.bCb,A.ab,D.f9I],x.p)
D.eqB=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.cIv,null)
D.eYo=new B.w("Download picture",null,A.pN,null,null,null,null,null,null,null,null,null)
D.boK=new B.pT(A.eb,A.A,A.f,D.eYo,null)
D.boV=new B.dl(1,A.ch,D.boK,null)
D.cSW=w([K.aiF,A.ab,D.boV],x.p)
D.eqC=new B.cz(A.aZ,A.b8,A.j,A.m,null,A.p,null,0,D.cSW,null)
D.bxN=new B.ad(A.F7,22,A.ct,null,null,null)
D.f6l=new B.w("NGMY NEWS",null,H.a4r,null,null,null,null,null,null,null,null,null)
D.cAN=w([D.bxN,A.ab,D.f6l],x.p)
D.eqK=new B.cz(A.aZ,A.e,A.Q,A.m,null,A.p,null,0,D.cAN,null)
D.eqV=new B.oK(!1,!1,null,T.Tm,null,A.bW,null,null,null)
D.a3s=new B.jE([D.ce,D.dc,D.tv,D.Gw,D.tw,D.aB7],B.az("jE<hp>"))
D.dMh={title:0,quote:1,closing:2,bio:3}
D.es2=new B.fa(D.dMh,4,x.M)
D.dKE={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.es4=new B.fa(D.dKE,5,x.M)
D.dLP={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a3t=new B.fa(D.dLP,8,x.M)
D.dLj={Design:0,Transitions:1,Insert:2}
D.es8=new B.fa(D.dLj,3,x.M)
D.frX=new B.jE([D.a1P],B.az("jE<vl>"))
D.dLq={float3d:0,drift:1,pulse:2}
D.esb=new B.fa(D.dLq,3,x.M)
D.aI8=new B.jE([D.Gt,D.Gu,D.Gv],B.az("jE<mc>"))
D.dKB={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aIb=new B.fa(D.dKB,14,x.M)
D.frY=new B.fa(A.iz,0,B.az("fa<vl>"))
D.dLn={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.QJ=new B.fa(D.dLn,4,x.M)
D.dKv={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aId=new B.fa(D.dKv,30,x.M)
D.dLv={circle:0,triangle:1,hexagon:2,diamond:3}
D.esr=new B.fa(D.dLv,4,x.M)
D.euz=new B.as(390,844)
D.evk=new B.a3(20,20,A4.IV,null)
D.aIZ=new B.a3(null,2.5,null,null)
D.evu=new B.a3(18,18,A4.IV,null)
D.bCf=new B.ad(A.iO,19,A.c,null,null,null)
D.evF=new B.a3(38,38,D.bCf,null)
D.bAz=new B.ad(A.xr,22,A.c,null,null,null)
D.evH=new B.a3(40,40,D.bAz,null)
D.ewe=new B.hJ(2,10,10,1.15,null)
D.aJ6=new B.hJ(2,16,14,0.62,null)
D.ewz=new Ai.b32(170,20,16,0.52,null)
D.bl6=new B.N(32,30,32,40)
D.b_H=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bvP=new B.ad(A.pi,56,D.b_H,null,null,null)
D.abl=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eHS=new B.F(!0,D.abl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3z=new B.w("Your books will live here.",null,D.eHS,null,A.L,null,null,null,null,null,null,null)
D.cL4=w([D.bvP,A.S,D.f3z],x.p)
D.bcq=new B.fq(A.ak,A.e,A.j,A.m,null,A.p,null,0,D.cL4,null)
D.dRt=new B.C(D.bl6,D.bcq,null)
D.ewB=new B.lS(D.dRt,null)
D.f3w=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ewT=new B.b0(D.f3w,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f1J=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ewU=new B.b0(D.f1J,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f6n=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ex2=new B.b0(D.f6n,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f6S=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.exh=new B.b0(D.f6S,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f0u=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.exu=new B.b0(D.f0u,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fdp=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.exN=new B.b0(D.fdp,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.faJ=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.exY=new B.b0(D.faJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f7_=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eyE=new B.b0(D.f7_,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eWN=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eyU=new B.b0(D.eWN,null,null,null,null,null,null,null,A.ia,null,null,null,null,A.p7,!1,null,null,null,A.q,null)
D.eYw=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.ezb=new B.b0(D.eYw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f3e=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ezd=new B.b0(D.f3e,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f2W=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eze=new B.b0(D.f2W,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f8O=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ezf=new B.b0(D.f8O,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eT9=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ezo=new B.b0(D.eT9,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eZz=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ezL=new B.b0(D.eZz,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fcf=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ezN=new B.b0(D.fcf,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fbQ=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ezR=new B.b0(D.fbQ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eSf=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ezT=new B.b0(D.eSf,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.f82=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eA1=new B.b0(D.f82,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fbr=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eAg=new B.b0(D.fbr,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.fbi=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eAi=new B.b0(D.fbi,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eS7=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eAo=new B.b0(D.eS7,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eVQ=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eAQ=new B.b0(D.eVQ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.faw=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eB0=new B.b0(D.faw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.eVE=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eBf=new B.b0(D.eVE,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.b5R=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.czF=w([A.ie,A.o1,D.b5R,D.a8O,A.ie],x.O)
D.eBD=new B.fN(A.A,0,6.283185307179586,A.x,D.czF,null,null)
D.cHN=w([A.bJ,A.bT,A.hy,D.zx,A.bJ],x.O)
D.aJG=new B.fN(A.A,0,6.283185307179586,A.x,D.cHN,null,null)
D.cUp=w([A.bX,A.bC,A.b7,A.bg,A.ct,A.bX],x.O)
D.eBI=new B.fN(A.A,0,6.283185307179586,A.x,D.cUp,null,null)
D.cBv=w([A.p5,A.o4,A.zn,A.ie,A.p5],x.O)
D.eBJ=new B.fN(A.A,0,6.283185307179586,A.x,D.cBv,null,null)
D.cUj=w([A.aO,A.bI,A.aK,A.aj,A.aO],x.O)
D.eBK=new B.fN(A.A,0,6.283185307179586,A.x,D.cUj,null,null)
D.d06=w([A.bs,A.b7,A.bC,A.bX,A.bs],x.O)
D.eBM=new B.fN(A.A,0,6.283185307179586,A.x,D.d06,null,null)
D.b66=new B.x(1,0,1,1,A.t)
D.b0O=new B.x(1,1,0,1,A.t)
D.cXD=w([A.D5,A.aaj,H.a9s,D.b66,H.a9N,D.b0O,A.D5],x.O)
D.eBN=new B.fN(A.A,0,6.283185307179586,A.x,D.cXD,null,null)
D.eC1=new C.atj(2,"immersiveSticky")
D.eC2=new C.atj(3,"edgeToEdge")
D.eC3=new C.atj(4,"manual")
D.eEe=new B.F(!0,A.nX,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKb=new B.F(!0,A.fi,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEN=new B.F(!0,E.mC,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGc=new B.F(!0,A.ag,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHj=new B.F(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHE=new B.F(!0,A.eB,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ5=new B.F(!0,A.j1,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJi=new B.r6(!0,A.GP,null,null,null,null,A.dq,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJL=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKl=new B.F(!0,A.j_,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKI=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dSW=new B.iI(1,1,0.7568627450980392,0.027450980392156862)
D.eKM=new B.r6(!0,D.dSW,null,null,null,null,A.dq,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aap=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aKS=new B.F(!0,D.aap,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKS=new B.F(!0,D.abl,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKT=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKU=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLt=new B.r6(!0,A.ov,null,null,null,null,A.dq,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLM=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Rv=new B.F(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMh=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new B.F(!0,D.aap,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.HE=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMM=new B.F(!0,A.bT,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMU=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMX=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNc=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.arq,null,null,null)
D.eNe=new B.F(!0,A.cH,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNg=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNt=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNE=new B.F(!0,A.dy,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOa=new B.F(!0,A.aP,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOj=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOy=new B.F(!0,A.ag,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLt=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLv=new B.F(!0,A.c1,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bar=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eQf=new B.F(!0,D.bar,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLD=new B.F(!0,E.mC,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQI=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new B.F(!0,O.l_,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJY=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRV=new B.w("NEW",null,D.eJY,null,null,null,null,null,null,null,null,null)
D.eSa=new B.w("Hati ya Kuhowesha",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eSA=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new B.w("Scrollable PDF on this slide",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eTy=new B.w("Big quote mark",null,A.iB,null,null,null,null,null,null,null,null,null)
D.eTB=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eTM=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eUd=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eUe=new B.w("How many slides?",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eUL=new B.w("Transfer",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eFZ=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new B.w("Luxury FX",null,D.eFZ,null,null,null,null,null,null,null,null,null)
D.eVo=new B.w("Font",null,A.r3,null,null,null,null,null,null,null,null,null)
D.eVz=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.ePN=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVN=new B.w("Example  GA847",null,D.ePN,null,null,null,null,null,null,null,null,null)
D.eWb=new B.w("Design shapes",null,A.iB,null,null,null,null,null,null,null,null,null)
D.eWj=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eWn=new B.w("Non-stop (loop)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eWB=new B.w("Hati ya Kuhoweya",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eWU=new B.w("Photo studio",null,A.fS,null,null,null,null,null,null,null,null,null)
D.eXj=new B.w("Add your picture",null,A.kS,null,null,null,null,null,null,null,null,null)
D.eJj=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXk=new B.w("Enter document code",null,D.eJj,null,A.L,null,null,null,null,null,null,null)
D.eXl=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.eXq=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.eH0=new B.F(!0,E.mC,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new B.w("Delete this book?",null,D.eH0,null,A.L,null,null,null,null,null,null,null)
D.eLi=new B.F(!0,E.mC,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new B.w("Your library",null,D.eLi,null,null,null,null,null,null,null,null,null)
D.eYC=new B.w("Delete",null,A.aKM,null,null,null,null,null,null,null,null,null)
D.eYE=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,An.HC,null,null,null,null,null,null,null,null,null)
D.eYO=new B.w("Element flies in",null,A.aKY,null,null,null,null,null,null,null,null,null)
D.RK=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eZa=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eZs=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eZw=new B.w("Cancel",null,E.aL7,null,null,null,null,null,null,null,null,null)
D.eZy=new B.w("The lines and circles that come with the design",null,A.hu,null,null,null,null,null,null,null,null,null)
D.eOG=new B.F(!0,A.fY,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZZ=new B.w("DOCUMENT CODE",null,D.eOG,null,null,null,null,null,null,null,null,null)
D.f_J=new B.w("Quotes",null,G.a54,null,null,null,null,null,null,null,null,null)
D.eIK=new B.F(!0,O.l_,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_R=new B.w("Add a picture",null,D.eIK,null,null,null,null,null,null,null,null,null)
D.f_Y=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a4H,null,A.L,null,null,null,null,null,null,null)
D.f00=new B.w("Look & feel",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f04=new B.w("Rings",null,A.jc,null,null,null,null,null,null,null,null,null)
D.f09=new B.w("W",null,A.r3,null,null,null,null,null,null,null,null,null)
D.f0i=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.f0z=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a4Q,null,A.L,null,null,null,null,null,null,null)
D.f0B=new B.w("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f1i=new B.w("Add page",null,A.cb,null,null,null,null,null,null,null,null,null)
D.f1w=new B.w("Malipo ya Awamu ya Mahari",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eJ8=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1K=new B.w("Create with AI",null,D.eJ8,null,A.L,null,null,null,null,null,null,null)
D.f2c=new B.w("Apply look",null,A.jc,null,null,null,null,null,null,null,null,null)
D.eJQ=new B.F(!0,A.eE,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Y=new B.w("Type your presentation below",null,D.eJQ,null,A.L,null,null,null,null,null,null,null)
D.f30=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aLF,null,A.L,null,null,null,null,null,null,null)
D.f32=new B.w("Keep it",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eF2=new B.F(!0,A.cC,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f39=new B.w("Done",null,D.eF2,null,null,null,null,null,null,null,null,null)
D.f3s=new B.w("Delete",null,A.n1,null,null,null,null,null,null,null,null,null)
D.f3B=new B.w("Hati ya Kiapo cha Uongozi",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eI7=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eI7,null,A.L,null,null,null,null,null,null,null)
D.f4M=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new B.w("Layout",null,A.RB,null,null,null,null,null,null,null,null,null)
D.f5s=new B.w("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f5w=new B.w("X",null,A.r3,null,null,null,null,null,null,null,null,null)
D.f64=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.a4J,null,null,null,null,null,null,null,null,null)
D.f6z=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.f6K=new B.w("Hati ya Kuhowa",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f6M=new B.w("Choose a class template",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f6O=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.f6U=new B.w("Download the newspaper picture",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f74=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.f7b=new B.w("Done",null,A.aLs,null,null,null,null,null,null,null,null,null)
D.f7l=new B.w("Ending celebration",null,A.dR,null,null,null,null,null,null,null,null,null)
D.f7m=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f7z=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a4v,null,null,null,null,null,null,null,null,null)
D.f8p=new B.w("Export presentation",null,A.dj,null,null,null,null,null,null,null,null,null)
D.f8q=new B.w("What would you like to do?",null,D.aKS,null,null,null,null,null,null,null,null,null)
D.f8t=new B.w("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.f8V=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new B.w("Hati (Documents)",null,A.hh,null,null,null,null,null,null,null,null,null)
D.f9a=new B.w("Done",null,A.kT,null,null,null,null,null,null,null,null,null)
D.ePE=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9e=new B.w("Delete presentation?",null,D.ePE,null,A.L,null,null,null,null,null,null,null)
D.f9v=new B.w("After the last slide it starts again from the first",null,A.hu,null,null,null,null,null,null,null,null,null)
D.f9G=new B.w("\ud83c\udf33",null,A.Hz,null,A.L,null,null,null,null,null,null,null)
D.f9Y=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fa4=new B.w("Transfer document",null,A.oE,null,null,null,null,null,null,null,null,null)
D.fae=new B.w("Add to the slides",null,A.hg,null,null,null,null,null,null,null,null,null)
D.faA=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.faP=new B.w("Make a book",null,I.aKr,null,null,null,null,null,null,null,null,null)
D.faT=new B.w("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eID=new B.F(!0,A.aj,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faU=new B.w("Keep this page open until it finishes.",null,D.eID,null,null,null,null,null,null,null,null,null)
D.faX=new B.w("Making your video",null,A.dR,null,null,null,null,null,null,null,null,null)
D.fb1=new B.w("LANGUAGE",null,D.Rv,null,null,null,null,null,null,null,null,null)
D.fb8=new B.w("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.fbg=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fbh=new B.w("Upload a different logo",null,A.cb,null,null,null,null,null,null,null,null,null)
D.fbx=new B.w("Delete from the database?",null,A.kS,null,null,null,null,null,null,null,null,null)
D.fby=new B.w("H",null,A.r3,null,null,null,null,null,null,null,null,null)
D.fbW=new B.w("NGMY Quotes",null,A.dR,null,null,null,null,null,null,null,null,null)
D.fck=new B.w("Cover",null,D.aLD,null,null,null,null,null,null,null,null,null)
D.fco=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fcp=new B.w("Each page becomes its own slide you can present",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fcK=new B.w("Y",null,A.r3,null,null,null,null,null,null,null,null,null)
D.fcV=new B.w("Crop the picture",null,A.kT,null,null,null,null,null,null,null,null,null)
D.fd_=new B.w("Edit text",null,A.HA,null,null,null,null,null,null,null,null,null)
D.ffb=B.dN("a6x")
D.Ck=new C.auC(0,"none")
D.aNa=new C.auC(1,"zipCrypto")
D.aNb=new C.auC(2,"aes")
D.fhH=new F.NS("","",null)
D.fiN=new C.b9d(null)
D.fjQ=new C.XR(null)
D.fkV=new C.abg(null)
D.fkX=new C.aBG(null)
D.fnI=new C.Z5(null)
D.fnY=new C.ZA(null)
D.fog=new C.bqx(null)})();(function staticFields(){$.fXk=null
$.fXl=null
$.fXm=null
$.fXn=null
$.fFJ=B.uy("_lastQuoRemDigits")
$.fFK=B.uy("_lastQuoRemUsed")
$.auY=B.uy("_lastRemUsed")
$.fFL=B.uy("_lastRem_nsh")
$.pG=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a5m=B.T(x.N,x.I)
$.fDh=!1
$.h12=B.T(B.az("kE"),x.N)
$.h1e=B.T(B.az("kE"),x.E)
$.h_f=!1
$.bw9="q"
$.OP=0
$.BF=B.T(x.N,B.az("ak<yH>"))
$.h_C=!1
$.fHh=!1
$.h5L=null
$.hzz=B.T(x.N,B.az("aw<n?>"))
$.J3=""
$.iT=0
$.fU8=function(){var w=x.N
return B.T(w,w)}()
$.fU7=B.T(x.N,x.R)
$.fHC=!1
$.adU=B.T(x.N,x.E)
$.fIo=0
$.bhb=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hYp","C_",()=>C.b6L(0))
w($,"hYn","a0O",()=>C.b6L(1))
w($,"hYo","h9i",()=>C.b6L(2))
w($,"hYm","fM2",()=>$.a0O().uf(0))
w($,"hYk","h9g",()=>C.b6L(1e4))
w($,"hYl","h9h",()=>B.D9(8))
w($,"hUc","h7j",()=>B.D9(0))
w($,"hUk","h7n",()=>B.D9(0))
w($,"hUj","h7m",()=>B.bU0(0))
w($,"i12","hbh",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a0G.gdL(D.a0G),v=v.gah(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"i1s","bAB",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mB(new C.foK(),v,"biz_plan_blue","Business Plan",B.a([B.aZ(u),B.aZ(t)],h)),C.mB(new C.foL(),v,"exec_summary","Executive",B.a([B.aZ(s),B.aZ(t)],h)),C.mB(new C.foM(),v,"teal_corporate","Teal Corp",B.a([B.aZ(r),B.aZ(4279310375)],h)),C.mB(new C.foX(),q,"geometric_overlap","Geometric",B.a([B.aZ(4279203438),B.aZ(u)],h)),C.mB(new C.fp1(),p,"midnight_cyan","Midnight Cyan",B.a([B.aZ(o),B.aZ(n)],h)),C.mB(new C.fp2(),q,"diagonal_hero","Diagonal Hero",B.a([B.aZ(m),B.aZ(l)],h)),C.mB(new C.fp3(),v,"swot_grid","SWOT Grid",B.a([B.aZ(u),B.aZ(4278556265)],h)),C.mB(new C.fp4(),v,"layered_chevrons","Chevrons",B.a([B.aZ(4280172719),B.aZ(k)],h)),C.mB(new C.fp5(),q,"split_triangle","Split Panel",B.a([B.aZ(s),B.aZ(t)],h)),C.mB(new C.fp6(),v,"corporate_navy","Navy Pro",B.a([B.aZ(4278982953),B.aZ(4282090230)],h)),C.mB(new C.fp7(),p,"cyan_slash","Cyan Slash",B.a([B.aZ(o),B.aZ(4278630100)],h)),C.mB(new C.foN(),p,"crimson_impact","Crimson",B.a([B.aZ(4282714634),B.aZ(4292617766)],h)),C.mB(new C.foO(),q,"ocean_waves","Ocean Waves",B.a([B.aZ(4278413729),B.aZ(4286436348)],h)),C.mB(new C.foP(),p,"mono_geometric","Mono Geo",B.a([B.aZ(o),B.aZ(n)],h)),C.mB(new C.foQ(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aZ(4280031511),B.aZ(4293571336)],h)),C.mB(new C.foR(),q,"hex_infographic","Hex Stack",B.a([B.aZ(r),B.aZ(4284410580)],h)),C.mB(new C.foS(),q,"photo_banner","Photo Banner",B.a([B.aZ(m),B.aZ(4281908728)],h)),C.mB(new C.foT(),v,"process_steps","Process",B.a([B.aZ(s),B.aZ(k)],h)),C.mB(new C.foU(),"Minimal","grid_modern","Grid Modern",B.a([B.aZ(l),B.aZ(t)],h)),C.mB(new C.foV(),"Luxury","platinum_frame","Platinum",B.a([B.aZ(4282865001),B.aZ(4293060848)],h)),C.mB(new C.foW(),v,"agenda_cards","Agenda Cards",B.a([B.aZ(u),B.aZ(4292602622)],h)),C.mB(new C.foY(),q,"headline_orange","Headline Orange",B.a([B.aZ(j),B.aZ(i)],h)),C.mB(new C.foZ(),q,"infographic_teal","Infographic",B.a([B.aZ(r),B.aZ(j)],h)),C.mB(new C.fp_(),q,"content_year","Year Feature",B.a([B.aZ(j),B.aZ(t)],h)),C.mB(new C.fp0(),q,"photo_cta","Photo CTA",B.a([B.aZ(m),B.aZ(i)],h))],B.az("O<DA>"))})
w($,"i15","hbj",()=>B.ae("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["YZadUX26cOnibCJimv8CPJzG7KU="]=a.current})($__dart_deferred_initializers__);